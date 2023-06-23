(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const p=document.querySelector(".primary-header"),c=document.querySelector(".mobile-nav-toggle"),s=document.querySelector(".primary-navigation");c!=null&&s!=null&&p!=null&&c.addEventListener("click",()=>{s.hasAttribute("data-visible")?c.setAttribute("aria-expanded","false"):c.setAttribute("aria-expanded","true"),s.hasAttribute("data-visible")?document.body.style.overflowY="visible":document.body.style.overflowY="hidden",s.hasAttribute("data-visible")?document.body.style.touchAction="auto":document.body.style.touchAction="none",s.toggleAttribute("data-visible"),p.toggleAttribute("data-overlay")});const X=Array.from(document.querySelectorAll(".glitch"));X.forEach(r=>{r.style.setProperty("--glitch-content",`'${r.textContent}'`)});const A=.25,g=.25,w=document.getElementById("bg-container"),v=document.querySelector(".scrolling-background");var x=document.documentElement.innerHTML,y=document.createElement("pre");y.textContent=x;v.appendChild(y);const Z=document.querySelector(".scrolling-background").innerHTML,u=v.offsetHeight,m=window.innerHeight,f=Math.ceil(m/u),E=(f-m/u)*100,d=m/u*100+E,P=d+100,l=100/P*100,h=50/A,b=document.createElement("style");b.textContent=`
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

`;document.head.appendChild(b);const H=1/(f+1);for(let r=0;r<f;r++){const o=document.createElement("div");o.classList.add("scrolling-background"),o.innerHTML=Z;const a=h*H*(r+1);o.style.animationDelay="-"+a+"s",w.appendChild(o)}document.addEventListener("mousemove",r=>{Array.from(document.getElementsByClassName("scrolling-background")).forEach(a=>{L(r,a)})});function L(r,o){const a=r.clientX,i=r.clientY,t=window.innerWidth/2,e=window.innerHeight/2,n=(i-e)/e*g,Y=(a-t)/t*g;o.style.setProperty("--rotateX",-1*n+2+"deg"),o.style.setProperty("--rotateY",Y-3+"deg")}
