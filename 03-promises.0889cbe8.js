!function(){function e(e,n){return new Promise((function(t,o){var c=Math.random()>.3;setTimeout((function(){c?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("click",(function(n){n.preventDefault();for(var t=n.currentTarget.elements,o=t.delay,c=t.step,r=t.amount,a=Number(o.value),i=Number(c.value),u=Number(r.value),l=1;l<=u;l+=1)e(l,a+=i).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),n.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.0889cbe8.js.map
