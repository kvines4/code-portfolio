(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const p=document.querySelector(".primary-header"),c=document.querySelector(".mobile-nav-toggle"),s=document.querySelector(".primary-navigation");c!=null&&s!=null&&p!=null&&c.addEventListener("click",()=>{s.hasAttribute("data-visible")?c.setAttribute("aria-expanded","false"):c.setAttribute("aria-expanded","true"),s.hasAttribute("data-visible")?document.body.style.overflowY="visible":document.body.style.overflowY="hidden",s.hasAttribute("data-visible")?document.body.style.touchAction="auto":document.body.style.touchAction="none",s.toggleAttribute("data-visible"),p.toggleAttribute("data-overlay")});const X=Array.from(document.querySelectorAll(".glitch"));X.forEach(e=>{e.style.setProperty("--glitch-content",`'${e.textContent}'`)});const A=Array.from(document.querySelectorAll(".glitch-delay"));A.forEach(e=>{e.style.setProperty("--glitch-content",`'${e.textContent}'`)});const x=.25,g=.25,w=document.getElementById("bg-container"),y=document.querySelector(".scrolling-background");var E=document.documentElement.innerHTML,v=document.createElement("pre");v.textContent=E;y.appendChild(v);const Z=document.querySelector(".scrolling-background").innerHTML,u=y.offsetHeight,m=window.innerHeight,f=Math.ceil(m/u),P=(f-m/u)*100,d=m/u*100+P,C=d+100,l=100/C*100,h=50/x,b=document.createElement("style");b.textContent=`
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
    animation: scroll ${h}s linear infinite;
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
    ${100-l}% {
      transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(4%) translateY(${d}%);
    }
    ${100-l+1e-6}% {
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

`;document.head.appendChild(b);const H=1/(f+1);for(let e=0;e<f;e++){const o=document.createElement("div");o.classList.add("scrolling-background"),o.innerHTML=Z;const a=h*H*(e+1);o.style.animationDelay="-"+a+"s",w.appendChild(o)}document.addEventListener("mousemove",e=>{Array.from(document.getElementsByClassName("scrolling-background")).forEach(a=>{L(e,a)})});function L(e,o){const a=e.clientX,i=e.clientY,t=window.innerWidth/2,r=window.innerHeight/2,n=(i-r)/r*g,Y=(a-t)/t*g;o.style.setProperty("--rotateX",-1*n+2+"deg"),o.style.setProperty("--rotateY",Y-3+"deg")}
