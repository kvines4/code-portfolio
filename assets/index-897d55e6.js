(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const m=document.querySelector(".primary-header"),s=document.querySelector(".mobile-nav-toggle"),c=document.querySelector(".primary-navigation");s!=null&&c!=null&&m!=null&&s.addEventListener("click",()=>{c.hasAttribute("data-visible")?s.setAttribute("aria-expanded","false"):s.setAttribute("aria-expanded","true"),c.toggleAttribute("data-visible"),m.toggleAttribute("data-overlay")});const Y=document.getElementById("bg-container"),g=document.querySelector(".scrolling-background");var w=document.documentElement.innerHTML,p=document.createElement("pre");p.textContent=w;g.appendChild(p);const E=document.querySelector(".scrolling-background").innerHTML,l=g.offsetHeight,d=window.innerHeight,u=Math.ceil(d/l),x=(u-d/l)*100,y=d/l*100+x,A=y+100,f=100/A*100,H=.25,v=50/H,h=document.createElement("style");h.textContent=`
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
    animation: scroll ${v}s linear infinite;
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
    ${100-f}% {
      transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(0%) translateY(${y}%);
    }
    ${100-f+1e-6}% {
      transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(0%) translateY(-100%); /* Jump to the top suddenly */
    }
    100% {
      transform: perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ)) translateX(0%) translateY(0%); /* Animate back to the middle */
    }
  }
`;document.head.appendChild(h);const L=1/(u+1);for(let o=0;o<u;o++){const r=document.createElement("div");r.classList.add("scrolling-background"),r.innerHTML=E;const n=v*L*(o+1);r.style.animationDelay="-"+n+"s",Y.appendChild(r)}document.addEventListener("mousemove",o=>{Array.from(document.getElementsByClassName("scrolling-background")).forEach(n=>{P(o,n)})});function P(o,r){const i=o.clientX,e=o.clientY,t=window.innerWidth/2,a=window.innerHeight/2,b=(e-a)/a*.5,X=(i-t)/t*.5;r.style.setProperty("--rotateX",-1*b+2+"deg"),r.style.setProperty("--rotateY",X-3+"deg")}
