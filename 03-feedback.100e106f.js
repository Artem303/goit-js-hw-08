!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},r=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},o={},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var a="Expected a function",u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,v="object"==typeof self&&self&&self.Object===Object&&self,g=d||v||Function("return this")(),m=Object.prototype.toString,p=Math.max,y=Math.min,b=function(){return g.Date.now()};function S(e,t,n){var r,o,i,u,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(a);function g(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function m(e){return l=e,f=setTimeout(O,t),s?g(e):u}function S(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=i}function O(){var e=b();if(S(e))return w(e);f=setTimeout(O,function(e){var n=t-(e-c);return d?y(n,i-(e-l)):n}(e))}function w(e){return f=void 0,v&&r?g(e):(r=o=void 0,u)}function T(){var e=b(),n=S(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return m(c);if(d)return f=setTimeout(O,t),g(c)}return void 0===f&&(f=setTimeout(O,t)),u}return t=j(t)||0,h(n)&&(s=!!n.leading,i=(d="maxWait"in n)?p(j(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},T.flush=function(){return void 0===f?u:w(b())},T}function h(e){var n=void 0===e?"undefined":t(i)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(i)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(h(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=h(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var r=c.test(e);return r||l.test(e)?s(e.slice(2),r?2:8):f.test(e)?NaN:+e}o=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(a);return h(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),S(e,t,{leading:r,maxWait:t,trailing:o})};var O=document.querySelector(".feedback-form"),w="feedback-form-state",T={};O.addEventListener("input",o((function(e){T[e.target.name]=e.target.value,n(w,T)}),500)),O.addEventListener("submit",(function(e){if(e.preventDefault(),""===O.email.value||""===O.message.value)return alert("Є незаповнені поля!!!");console.log(r(w)),localStorage.removeItem(w),O.reset(),T={}})),function(e){var t=localStorage.getItem(w);if(t)for(var n in T=JSON.parse(t))O[n].value=T[n]}()}();
//# sourceMappingURL=03-feedback.100e106f.js.map
