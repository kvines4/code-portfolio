(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const f=document.querySelector(".primary-header"),i=document.querySelector(".mobile-nav-toggle"),c=document.querySelector(".primary-navigation");i!=null&&c!=null&&f!=null&&i.addEventListener("click",()=>{c.hasAttribute("data-visible")?i.setAttribute("aria-expanded","false"):i.setAttribute("aria-expanded","true"),c.hasAttribute("data-visible")?document.body.style.overflowY="visible":document.body.style.overflowY="hidden",c.toggleAttribute("data-visible"),f.toggleAttribute("data-overlay")});const X=.25,g=.25,w=document.getElementById("bg-container"),v=document.querySelector(".scrolling-background");var x=document.documentElement.innerHTML,y=document.createElement("pre");y.textContent=x;v.appendChild(y);const Z=document.querySelector(".scrolling-background").innerHTML,m=v.offsetHeight,u=window.innerHeight,p=Math.ceil(u/m),A=(p-u/m)*100,d=u/m*100+A,E=d+100,l=100/E*100,h=50/X,Y=document.createElement("style");Y.textContent=`
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
    animation: scroll ${h}s linear infinite;
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
      transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(5%) translateY(0%);
    }
    ${100-l}% {
      transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(5%) translateY(${d}%);
    }
    ${100-l+1e-6}% {
      transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(5%) translateY(-100%); /* Jump to the top suddenly */
    }
    100% {
      transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(5%) translateY(0%); /* Animate back to the middle */
    }
  }

  @media (max-width: 50em) {
    @keyframes scroll {
      0% {
        transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(-10%) translateY(0%);
      }
      ${100-l}% {
        transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(-10%) translateY(${d}%);
      }
      ${100-l+1e-6}% {
        transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(-10%) translateY(-100%); /* Jump to the top suddenly */
      }
      100% {
        transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(-10%) translateY(0%); /* Animate back to the middle */
      }
    }
  }

`;document.head.appendChild(Y);const H=1/(p+1);for(let o=0;o<p;o++){const r=document.createElement("div");r.classList.add("scrolling-background"),r.innerHTML=Z;const a=h*H*(o+1);r.style.animationDelay="-"+a+"s",w.appendChild(r)}document.addEventListener("mousemove",o=>{Array.from(document.getElementsByClassName("scrolling-background")).forEach(a=>{L(o,a)})});function L(o,r){const a=o.clientX,s=o.clientY,t=window.innerWidth/2,e=window.innerHeight/2,n=(s-e)/e*g,b=(a-t)/t*g;r.style.setProperty("--rotateX",-1*n+2+"deg"),r.style.setProperty("--rotateY",b-3+"deg")}
