(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const Y=document.querySelector(".primary-header"),l=document.querySelector(".mobile-nav-toggle"),i=document.querySelector(".primary-nav");l.addEventListener("click",()=>{i.hasAttribute("data-visible")?l.setAttribute("aria-expanded","false"):l.setAttribute("aria-expanded","true"),i.hasAttribute("data-visible")?document.body.style.overflowY="visible":document.body.style.overflowY="hidden",i.hasAttribute("data-visible")?document.body.style.touchAction="auto":document.body.style.touchAction="none",i.toggleAttribute("data-visible"),Y.toggleAttribute("data-overlay")});const b=()=>{document.body.style.setProperty("--vw",(self.innerWidth/100).toString()),document.body.style.setProperty("--vh",(self.innerHeight/100).toString())};b();window.addEventListener("resize",b);const w=Array.from(document.querySelectorAll(".glitch"));w.forEach(t=>{const r=Math.random()*2e3;t.style.setProperty("--glitch-anim-delay",`${-r}ms`);const a=Math.random()<.5?"alternate":"alternate-reverse";t.style.setProperty("--glitch-anim-dir",a);const n=Math.random()*1.5+1.5;t.style.setProperty("--glitch-anim-duration",`${n}s`),t.style.setProperty("--glitch-content",`'${t.textContent}'`)});const A=Array.from(document.querySelectorAll(".glitch-delay"));A.forEach(t=>{t.style.setProperty("--glitch-content",`'${t.textContent}'`)});const x=.25,y=.25,E=document.getElementById("bg-container"),p=document.querySelector(".scrolling-background");var P=document.documentElement.innerHTML,Z=P.replace(/ style="[^"]*"/g,""),v=document.createElement("pre");v.textContent=Z;p.appendChild(v);const S=document.querySelector(".scrolling-background").innerHTML,g=p.offsetHeight,m=window.innerHeight,u=Math.ceil(m/g),C=(u-m/g)*100,d=m/g*100+C,H=d+100,c=100/H*100,f=50/x,h=document.createElement("style");h.textContent=`
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
    animation: scroll ${f}s linear infinite;
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

`;document.head.appendChild(h);const L=1/(u+1);for(let t=0;t<u;t++){const r=document.createElement("div");r.classList.add("scrolling-background"),r.innerHTML=S;const a=f*L*(t+1);r.style.animationDelay="-"+a+"s",E.appendChild(r)}document.addEventListener("mousemove",t=>{Array.from(document.getElementsByClassName("scrolling-background")).forEach(a=>{M(t,a)})});function M(t,r){const a=t.clientX,n=t.clientY,e=window.innerWidth/2,o=window.innerHeight/2,s=(n-o)/o*y,X=(a-e)/e*y;r.style.setProperty("--bg-rotateX",-1*s+2+"deg"),r.style.setProperty("--bg-rotateY",X-3+"deg")}
