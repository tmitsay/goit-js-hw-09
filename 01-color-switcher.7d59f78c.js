const t={body:document.body,bntElStart:document.querySelector("button[data-start]"),btnElStop:document.querySelector("button[data-stop]")};t.bntElStart.addEventListener("click",(function(){n=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.bntElStart.disabled=!0,t.btnElStop.disabled=!1})),t.btnElStop.addEventListener("click",(function(){clearInterval(n),t.bntElStart.disabled=!1,t.btnElStop.disabled=!0})),t.bntElStop=!0;let n=null;
//# sourceMappingURL=01-color-switcher.7d59f78c.js.map
