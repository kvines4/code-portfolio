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
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
  });
}

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

// Get the height of the scrolling background element (pixels)
const backgroundHeight:number = scrollingBackground.offsetHeight;

// Get the height of the window (pixels)
const windowHeight:number = window.innerHeight;

// Calculate the number of copies needed to cover the full window height (plus one for space above screen)
const numberOfCopies:number = Math.ceil(windowHeight / backgroundHeight);
const totalBgElements:number = numberOfCopies + 1;

// since we round up we will overshoot
const overshootPercentage:number = (numberOfCopies - (windowHeight / backgroundHeight)) * 100;

const amountToMoveBgAsPercentage:number = ((windowHeight / backgroundHeight) * 100) + overshootPercentage;

const totalDistanceAsPercentageOfBgHeight:number = amountToMoveBgAsPercentage + 100;
const totalDistanceInPixels:number = backgroundHeight * (totalDistanceAsPercentageOfBgHeight);

const startingPointKeyframe:number = (100 / totalDistanceAsPercentageOfBgHeight) * 100;

// Animation duration in seconds
const animationModifier = 0.25;
const animationDuration:number = 50 / animationModifier; // Adjust the multiplier as needed

// Create a style element
const style:HTMLStyleElement = document.createElement('style');

// Define the styles and keyframes animation using the calculated percentage
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
    width: 100%;
    color: #555;
    animation: scroll ${animationDuration}s linear infinite;
    overflow: hidden; /* Hide overflowing content */
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }

  pre {
    font-size: 1.5rem;
    font-weight: bold;
    text-shadow: 0 0 0.3em #555;
  }

  @keyframes scroll {
    0% {
      transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(0%) translateY(0%);
    }
    ${100-startingPointKeyframe}% {
      transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(0%) translateY(${amountToMoveBgAsPercentage}%);
    }
    ${100-startingPointKeyframe+0.000001}% {
      transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(0%) translateY(-100%); /* Jump to the top suddenly */
    }
    100% {
      transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(0%) translateY(0%); /* Animate back to the middle */
    }
  }
`;

// Append the style element to the document head
document.head.appendChild(style);

// Calculate the animation delay percentage
const animationDelayPercentage:number = 1 / (numberOfCopies+1);

// Create the copies of the scrolling background
for (let i = 0; i < numberOfCopies; i++) {
  const copy:HTMLDivElement = document.createElement('div');
  copy.classList.add('scrolling-background');

  copy.innerHTML = scrollingBackgroundString;

  // Set the animation delay for each copy
  const animationDelay:number = animationDuration*animationDelayPercentage*(i+1);
  copy.style.animationDelay = '-' + animationDelay + 's';

  backgroundContainer!.appendChild(copy);
}

document.addEventListener("mousemove", (e) => {
  const elementArray:HTMLElement[] = Array.from(document.getElementsByClassName('scrolling-background') as HTMLCollectionOf<HTMLElement>);
  elementArray.forEach(element => {
    rotateElement(e, element);
  });
});

function rotateElement(event:MouseEvent, element:HTMLElement): void {
  const movementModifier:number = 0.5;
  const x:number = event.clientX;
  const y:number = event.clientY;

  const middleX:number = window.innerWidth / 2;
  const middleY:number = window.innerHeight / 2;

  const offsetY:number = ((y - middleY) / middleY) * movementModifier;
  const offsetX:number = ((x - middleX) / middleX) * movementModifier;

  element.style.setProperty("--rotateX", ((-1 * offsetY)+2) + "deg");
  element.style.setProperty("--rotateY", (offsetX-3) + "deg");
}