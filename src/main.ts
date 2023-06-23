// Behaviour for the primary nav on mobile
const primaryHeader:HTMLElement = document.querySelector('.primary-header') as HTMLElement;
const navToggle:HTMLElement     = document.querySelector('.mobile-nav-toggle') as HTMLElement;
const primaryNav:HTMLElement    = document.querySelector('.primary-navigation') as HTMLElement;

if(navToggle != null &&
  primaryNav != null &&
  primaryHeader != null)
{
  navToggle.addEventListener("click", () => {
    primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", "false")
    : navToggle.setAttribute("aria-expanded", "true");
    primaryNav.hasAttribute("data-visible")
    ? document.body.style.overflowY = 'visible'
    : document.body.style.overflowY = 'hidden';
    primaryNav.hasAttribute("data-visible")
    ? document.body.style.touchAction = 'auto'
    : document.body.style.touchAction = 'none';
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
  });
}

//Helper code for the glitch effect
const glitchElements:HTMLElement[] = Array.from(document.querySelectorAll('.glitch'));
glitchElements.forEach(element => {
  element.style.setProperty('--glitch-content', `'${element.textContent}'`);
});

// Below code is to display a scrolling background.
// Currently it displays the current pages HTML because I thought that would be funky
// TODO: update to allow passing in value per page to override

// Modifiers
const animationDurationModifier:number = 0.25;
const mouseMovementModifier:number = 0.25;

// Get the main container element
const backgroundContainer:HTMLElement = document.getElementById("bg-container") as HTMLElement;

// Get the scrolling background element
const scrollingBackground:HTMLElement = document.querySelector('.scrolling-background') as HTMLElement;

// create pre element (rich text) for attaching to our background scroll elements
var sourceCode:string = document.documentElement.innerHTML;
var preElement:HTMLPreElement = document.createElement('pre');
preElement.textContent = sourceCode;
scrollingBackground.appendChild(preElement);

// We need to make a const copy so we can duplicate it below
const scrollingBackgroundString:string = (document.querySelector('.scrolling-background') as HTMLElement).innerHTML;

// Get the height of the scrolling background element (pixels) and the height of the window (pixels)
const backgroundHeight:number = scrollingBackground.offsetHeight;
const windowHeight:number = window.innerHeight;

// Calculate the number of copies needed to cover the full window height (plus one for space above screen)
const numberOfCopies:number = Math.ceil(windowHeight / backgroundHeight);
const totalBgElements:number = numberOfCopies + 1;

// since we rounded up we will overshoot
const overshootPercentage:number = (numberOfCopies - (windowHeight / backgroundHeight)) * 100;
const amountToMoveBgAsPercentage:number = ((windowHeight / backgroundHeight) * 100) + overshootPercentage;
const totalDistanceAsPercentageOfBgHeight:number = amountToMoveBgAsPercentage + 100;

// Since the content is of dynamic link, this will change where the starting point (0%) is in the keyframe animation
const startingPointKeyframe:number = (100 / totalDistanceAsPercentageOfBgHeight) * 100;

// Animation duration in seconds
const animationDuration:number = 50 / animationDurationModifier; // Adjust the multiplier as needed

// Define the styles and keyframes animation using the calculated percentage
const style:HTMLStyleElement = document.createElement('style');
style.textContent = `
  :root {
    --rotateX: 2deg;
    --rotateY: -3deg;
    --rotateZ: 5deg;
  }

  .scrolling-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 75%;
    color: #4f4f4f;
    animation: scroll ${animationDuration}s linear infinite;
    overflow: hidden; /* Hide overflowing content */
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }

  pre {
    font-size: 1.5rem;
    font-weight: bold;
    text-shadow: 0 0 0.3em #4f4f4f;
  }

  @keyframes scroll {
    0% {
      transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(4%) translateY(0%);
    }
    ${100-startingPointKeyframe}% {
      transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(4%) translateY(${amountToMoveBgAsPercentage}%);
    }
    ${100-startingPointKeyframe+0.000001}% {
      transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(4%) translateY(-100%); /* Jump to the top suddenly */
    }
    100% {
      transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(4%) translateY(0%); /* Animate back to the middle */
    }
  }

  @media (max-width: 50em) {
    @keyframes scroll {
      0% {
        transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(-10%) translateY(0%);
      }
      ${100-startingPointKeyframe}% {
        transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(-10%) translateY(${amountToMoveBgAsPercentage}%);
      }
      ${100-startingPointKeyframe+0.000001}% {
        transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(-10%) translateY(-100%); /* Jump to the top suddenly */
      }
      100% {
        transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(-10%) translateY(0%); /* Animate back to the middle */
      }
    }
  }

`;
document.head.appendChild(style);

// Calculate the animation delay percentage
const animationDelayPercentage:number = 1 / (numberOfCopies+1);

// Create the copies of the scrolling background for infinite scrolling w/ no whitespace
for (let i = 0; i < numberOfCopies; i++) {
  const copy:HTMLDivElement = document.createElement('div');
  copy.classList.add('scrolling-background');
  // Add a copy of the content
  copy.innerHTML = scrollingBackgroundString;
  // Set the animation delay for each copy
  const animationDelay:number = animationDuration*animationDelayPercentage*(i+1);
  copy.style.animationDelay = '-' + animationDelay + 's';
  backgroundContainer.appendChild(copy);
}

document.addEventListener("mousemove", (e) => {
  const elementArray:HTMLElement[] = Array.from(document.getElementsByClassName('scrolling-background') as HTMLCollectionOf<HTMLElement>);
  elementArray.forEach(element => {
    rotateElement(e, element);
  });
});

function rotateElement(event:MouseEvent, element:HTMLElement): void {
  const x:number = event.clientX;
  const y:number = event.clientY;

  const middleX:number = window.innerWidth / 2;
  const middleY:number = window.innerHeight / 2;

  const offsetY:number = ((y - middleY) / middleY) * mouseMovementModifier;
  const offsetX:number = ((x - middleX) / middleX) * mouseMovementModifier;

  element.style.setProperty("--rotateX", ((-1 * offsetY)+2) + "deg");
  element.style.setProperty("--rotateY", (offsetX-3) + "deg");
}