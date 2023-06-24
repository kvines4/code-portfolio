(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const Y=document.querySelector(".primary-header"),l=document.querySelector(".mobile-nav-toggle"),i=document.querySelector(".primary-navigation");l.addEventListener("click",()=>{i.hasAttribute("data-visible")?l.setAttribute("aria-expanded","false"):l.setAttribute("aria-expanded","true"),i.hasAttribute("data-visible")?document.body.style.overflowY="visible":document.body.style.overflowY="hidden",i.hasAttribute("data-visible")?document.body.style.touchAction="auto":document.body.style.touchAction="none",i.toggleAttribute("data-visible"),Y.toggleAttribute("data-overlay")});const X=Array.from(document.querySelectorAll(".glitch"));X.forEach(e=>{e.style.setProperty("--glitch-content",`'${e.textContent}'`)});const A=Array.from(document.querySelectorAll(".glitch-delay"));A.forEach(e=>{e.style.setProperty("--glitch-content",`'${e.textContent}'`)});const x=.25,p=.25,w=document.getElementById("bg-container"),g=document.querySelector(".scrolling-background");var E=document.documentElement.innerHTML,y=document.createElement("pre");y.textContent=E;g.appendChild(y);const Z=document.querySelector(".scrolling-background").innerHTML,u=g.offsetHeight,m=window.innerHeight,f=Math.ceil(m/u),P=(f-m/u)*100,d=m/u*100+P,C=d+100,c=100/C*100,v=50/x,h=document.createElement("style");h.textContent=`
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
    animation: scroll ${v}s linear infinite;
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
    ${100-c}% {
      transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(4%) translateY(${d}%);
    }
    ${100-c+1e-6}% {
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
      ${100-c}% {
        transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(-10%) translateY(${d}%);
      }
      ${100-c+1e-6}% {
        transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(-10%) translateY(-100%); /* Jump to the top suddenly */
      }
      100% {
        transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(-10%) translateY(0%); /* Animate back to the middle */
      }
    }
  }

`;document.head.appendChild(h);const H=1/(f+1);for(let e=0;e<f;e++){const o=document.createElement("div");o.classList.add("scrolling-background"),o.innerHTML=Z;const a=v*H*(e+1);o.style.animationDelay="-"+a+"s",w.appendChild(o)}document.addEventListener("mousemove",e=>{Array.from(document.getElementsByClassName("scrolling-background")).forEach(a=>{L(e,a)})});function L(e,o){const a=e.clientX,s=e.clientY,t=window.innerWidth/2,r=window.innerHeight/2,n=(s-r)/r*p,b=(a-t)/t*p;o.style.setProperty("--rotateX",-1*n+2+"deg"),o.style.setProperty("--rotateY",b-3+"deg")}
