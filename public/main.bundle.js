(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{c:()=>o});const t={"/":function(){const e=document.createElement("div");return e.innerHTML="\n        <h2>Welcome to the Home Page</h2>\n        <p>This is the home page content.</p>\n    ",e},"/about":function(){const e=document.createElement("div");return e.innerHTML="\n        <h2>About Us</h2>\n        <p>This is the about page content.</p>\n    ",e},"/contact":function(){const e=document.createElement("div");return e.innerHTML="\n        <h2>Contact Us</h2>\n        <p>This is the contact page content.</p>\n    ",e}};function n(){const e=document.createElement("aside");e.classList.add("sidebar");const t=document.createElement("img");t.src="assets/images/logo.png",t.alt="Company Logo",t.classList.add("sidebar-logo"),e.appendChild(t);const n=document.createElement("nav"),a=document.createElement("ul");a.classList.add("sidebar-nav");return[{text:"Users",icon:"user.svg",href:"/"},{text:"Settings",icon:"settings.svg",href:"/contact"},{text:"Logout",icon:"logout.svg",href:"/about"}].forEach((e=>{const t=document.createElement("li"),n=document.createElement("a");n.href=e.href;const o=document.createElement("img");o.src=`assets/icons/${e.icon}`,o.alt=`${e.text} Icon`,o.classList.add("sidebar-icon");const c=document.createElement("span");c.textContent=e.text,n.appendChild(o),n.appendChild(c),t.appendChild(n),a.appendChild(t)})),n.appendChild(a),e.appendChild(n),e.querySelectorAll(".sidebar-nav li a").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();!function(e){e.startsWith("/")||(e="/"+e);window.history.pushState({},"",e),o(e)}(e.target.closest("a").getAttribute("href"))}))})),e}function o(e){const n=document.getElementById("app");n.innerHTML="";const o=t[e];if(o)n.appendChild(o());else{const e=document.createElement("div");e.innerHTML='<h2>Page not found</h2><a href="/">Go to Home</a>',n.appendChild(e)}}document.addEventListener("DOMContentLoaded",(()=>{document.getElementById("root").appendChild(n()),o(window.location.pathname)})),window.addEventListener("popstate",(()=>{o(window.location.pathname)}))})();