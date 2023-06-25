(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const X=document.querySelector(".primary-header"),l=document.querySelector(".mobile-nav-toggle"),i=document.querySelector(".primary-nav");l.addEventListener("click",()=>{i.hasAttribute("data-visible")?l.setAttribute("aria-expanded","false"):l.setAttribute("aria-expanded","true"),i.hasAttribute("data-visible")?document.body.style.overflowY="visible":document.body.style.overflowY="hidden",i.hasAttribute("data-visible")?document.body.style.touchAction="auto":document.body.style.touchAction="none",i.toggleAttribute("data-visible"),X.toggleAttribute("data-overlay")});const Y=Array.from(document.querySelectorAll(".glitch"));Y.forEach(t=>{const r=Math.random()*2e3;t.style.setProperty("--glitch-anim-delay",`${-r}ms`);const o=Math.random()<.5?"alternate":"alternate-reverse";t.style.setProperty("--glitch-anim-dir",o);const n=Math.random()*1.5+1.5;t.style.setProperty("--glitch-anim-duration",`${n}s`),t.style.setProperty("--glitch-content",`'${t.textContent}'`)});const w=Array.from(document.querySelectorAll(".glitch-delay"));w.forEach(t=>{t.style.setProperty("--glitch-content",`'${t.textContent}'`)});const A=.25,b=.25,x=document.getElementById("bg-container"),p=document.querySelector(".scrolling-background");var E=document.documentElement.innerHTML,Z=E.replace(/ style="[^"]*"/g,""),y=document.createElement("pre");y.textContent=Z;p.appendChild(y);const P=document.querySelector(".scrolling-background").innerHTML,g=p.offsetHeight,m=window.innerHeight,u=Math.ceil(m/g),C=(u-m/g)*100,d=m/g*100+C,M=d+100,c=100/M*100,v=50/A,f=document.createElement("style");f.textContent=`
  :root {
    --bg-rotateX: 2deg;
    --bg-rotateY: -3deg;
    --bg-rotateZ: 5deg;
    --bg-translateX: 8%;
    --bg-translateX-sm: -10%;
  }

  .scrolling-background {
    position: fixed;
    top: 0;
    left: 0;
    color: #777;
    animation: scroll ${v}s linear infinite;
    overflow: hidden; /* Hide overflowing content */
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }

  @media (min-width: 50em) {
    .scrolling-background {
      width: 75%;
    }
  }

  pre {
    font-size: 1.5rem;
    font-weight: bold;
    text-shadow: 0 0 0.3em #777;
    white-space: pre-wrap;
  }

  @keyframes scroll {
    0% {
      transform: perspective(5000px) rotateX(var(--bg-rotateX)) rotateY(var(--bg-rotateY)) rotateZ(var(--bg-rotateZ)) translateX(var(--bg-translateX)) translateY(0%);
    }
    ${100-c}% {
      transform: perspective(5000px) rotateX(var(--bg-rotateX)) rotateY(var(--bg-rotateY)) rotateZ(var(--bg-rotateZ)) translateX(var(--bg-translateX)) translateY(${d}%);
    }
    ${100-c+1e-6}% {
      transform: perspective(5000px) rotateX(var(--bg-rotateX)) rotateY(var(--bg-rotateY)) rotateZ(var(--bg-rotateZ)) translateX(var(--bg-translateX)) translateY(-100%); /* Jump to the top suddenly */
    }
    100% {
      transform: perspective(5000px) rotateX(var(--bg-rotateX)) rotateY(var(--bg-rotateY)) rotateZ(var(--bg-rotateZ)) translateX(var(--bg-translateX)) translateY(0%); /* Animate back to the middle */
    }
  }

  @media (max-width: 50em) {
    @keyframes scroll {
      0% {
        transform: perspective(5000px) rotateX(var(--bg-rotateX)) rotateY(var(--bg-rotateY)) rotateZ(var(--bg-rotateZ)) translateX(var(--bg-translateX-sm)) translateY(0%);
      }
      ${100-c}% {
        transform: perspective(5000px) rotateX(var(--bg-rotateX)) rotateY(var(--bg-rotateY)) rotateZ(var(--bg-rotateZ)) translateX(var(--bg-translateX-sm)) translateY(${d}%);
      }
      ${100-c+1e-6}% {
        transform: perspective(5000px) rotateX(var(--bg-rotateX)) rotateY(var(--bg-rotateY)) rotateZ(var(--bg-rotateZ)) translateX(var(--bg-translateX-sm)) translateY(-100%); /* Jump to the top suddenly */
      }
      100% {
        transform: perspective(5000px) rotateX(var(--bg-rotateX)) rotateY(var(--bg-rotateY)) rotateZ(var(--bg-rotateZ)) translateX(var(--bg-translateX-sm)) translateY(0%); /* Animate back to the middle */
      }
    }
  }

`;document.head.appendChild(f);const S=1/(u+1);for(let t=0;t<u;t++){const r=document.createElement("div");r.classList.add("scrolling-background"),r.innerHTML=P;const o=v*S*(t+1);r.style.animationDelay="-"+o+"s",x.appendChild(r)}document.addEventListener("mousemove",t=>{Array.from(document.getElementsByClassName("scrolling-background")).forEach(o=>{$(t,o)})});function $(t,r){const o=t.clientX,n=t.clientY,e=window.innerWidth/2,a=window.innerHeight/2,s=(n-a)/a*b,h=(o-e)/e*b;r.style.setProperty("--bg-rotateX",-1*s+2+"deg"),r.style.setProperty("--bg-rotateY",h-3+"deg")}
