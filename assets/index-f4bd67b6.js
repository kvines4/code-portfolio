(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const Y=document.querySelector(".primary-header"),l=document.querySelector(".mobile-nav-toggle"),i=document.querySelector(".primary-navigation");l.addEventListener("click",()=>{i.hasAttribute("data-visible")?l.setAttribute("aria-expanded","false"):l.setAttribute("aria-expanded","true"),i.hasAttribute("data-visible")?document.body.style.overflowY="visible":document.body.style.overflowY="hidden",i.hasAttribute("data-visible")?document.body.style.touchAction="auto":document.body.style.touchAction="none",i.toggleAttribute("data-visible"),Y.toggleAttribute("data-overlay")});const X=Array.from(document.querySelectorAll(".glitch"));X.forEach(t=>{const r=Math.random()*2e3;t.style.setProperty("--glitch-anim-delay",`${-r}ms`);const a=Math.random()<.5?"alternate":"alternate-reverse";t.style.setProperty("--glitch-anim-dir",a);const n=Math.random()*1.5+1.5;t.style.setProperty("--glitch-anim-duration",`${n}s`),t.style.setProperty("--glitch-content",`'${t.textContent}'`)});const A=Array.from(document.querySelectorAll(".glitch-delay"));A.forEach(t=>{t.style.setProperty("--glitch-content",`'${t.textContent}'`)});const x=.25,y=.25,w=document.getElementById("bg-container"),p=document.querySelector(".scrolling-background");var E=document.documentElement.innerHTML,g=document.createElement("pre");g.textContent=E;p.appendChild(g);const Z=document.querySelector(".scrolling-background").innerHTML,m=p.offsetHeight,u=window.innerHeight,f=Math.ceil(u/m),P=(f-u/m)*100,d=u/m*100+P,M=d+100,c=100/M*100,v=50/x,h=document.createElement("style");h.textContent=`
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

`;document.head.appendChild(h);const $=1/(f+1);for(let t=0;t<f;t++){const r=document.createElement("div");r.classList.add("scrolling-background"),r.innerHTML=Z;const a=v*$*(t+1);r.style.animationDelay="-"+a+"s",w.appendChild(r)}document.addEventListener("mousemove",t=>{Array.from(document.getElementsByClassName("scrolling-background")).forEach(a=>{C(t,a)})});function C(t,r){const a=t.clientX,n=t.clientY,e=window.innerWidth/2,o=window.innerHeight/2,s=(n-o)/o*y,b=(a-e)/e*y;r.style.setProperty("--rotateX",-1*s+2+"deg"),r.style.setProperty("--rotateY",b-3+"deg")}
