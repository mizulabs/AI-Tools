(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2605)}])},955:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(5893),a=n(4248),i=n.n(a);function o(){return(0,r.jsxs)("div",{className:i().container,children:[(0,r.jsx)("a",{href:"https://twitter.com/mizu_fi",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("i",{className:"fab fa-twitter",style:{fontSize:"24px"}})}),(0,r.jsx)("a",{href:"https://t.me/mizulabs",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("i",{className:"fab fa-telegram",style:{fontSize:"24px"}})}),(0,r.jsx)("a",{href:"https://github.com/mizulabs",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("i",{className:"fab fa-github",style:{fontSize:"24px"}})}),(0,r.jsx)("a",{href:"https://medium.com/@mizu.fi",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("i",{className:"fab fa-medium",style:{fontSize:"24px"}})}),(0,r.jsx)("a",{href:"https://docs.mizu.fi/",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("i",{className:"fas fa-book",style:{fontSize:"24px"}})})]})}},2605:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(5893),a=n(9008),i=n.n(a),o=n(7294),s=n(4848),c=n.n(s),l={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function u(e){var t=function(e){if("number"==typeof e)return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();t=n.includes(".")?parseFloat(n):parseInt(n,10);var r=(e.match(/[^0-9]*$/)||"").toString();return l[r]?{value:t,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}(e);return"".concat(t.value).concat(t.unit)}var d=function(){return(d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},p=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return r;var a=document.createElement("style");document.head.appendChild(a);var i=a.sheet,o="\n    @keyframes ".concat(r," {\n      ").concat(t,"\n    }\n  ");return i&&i.insertRule(o,0),r}("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat"),m=function(e){var t=e.loading,n=e.color,r=void 0===n?"#000000":n,a=e.speedMultiplier,i=void 0===a?1:a,s=e.cssOverride,c=e.size,l=void 0===c?15:c,m=e.margin,h=void 0===m?2:m,x=f(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),y=d({display:"inherit"},void 0===s?{}:s),v=function(e){return{display:"inline-block",backgroundColor:r,width:u(l),height:u(l),margin:u(h),borderRadius:"100%",animation:"".concat(p," ").concat(.7/i,"s ").concat(e%2?"0s":"".concat(.35/i,"s")," infinite linear"),animationFillMode:"both"}};return void 0===t||t?o.createElement("span",d({style:y},x),o.createElement("span",{style:v(1)}),o.createElement("span",{style:v(2)}),o.createElement("span",{style:v(3)})):null},h=n(955);function x(){let[e,t]=(0,o.useState)(""),[n,a]=(0,o.useState)(""),[s,l]=(0,o.useState)(""),[u,d]=(0,o.useState)(!1);async function f(r){r.preventDefault(),d(!0);try{let a=await fetch("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({functionInput:e,descriptionInput:n})}),i=await a.json();if(200!==a.status)throw i.error||Error("Request failed with status ".concat(a.status));l(i.result),t(""),localStorage.setItem("descriptionInput",n),localStorage.setItem("functionInput",e)}catch(o){console.error(o),alert(o.message)}d(!1)}return(0,o.useEffect)(()=>{a(localStorage.getItem("descriptionInput")||""),t(localStorage.getItem("functionInput")||"")},[]),(0,r.jsxs)("div",{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:"Solidity NatSpec Generator"}),(0,r.jsx)("link",{rel:"icon",href:"/mizu.png"})]}),(0,r.jsxs)("main",{className:c().main,children:[(0,r.jsx)("img",{src:"/mizu.png",className:c().icon}),(0,r.jsx)("h3",{children:"One Click NatSpec Documentation for Solidity"}),(0,r.jsx)(h.default,{}),(0,r.jsxs)("p",{children:["Powered by ",(0,r.jsx)("a",{href:"https://mizu.fi",children:"mizu.fi"})]}),(0,r.jsxs)("div",{className:c().container,children:[(0,r.jsxs)("form",{onSubmit:f,children:[(0,r.jsx)("textarea",{name:"function",placeholder:"Enter your Solidity function",value:e,onChange:e=>t(e.target.value),rows:20,cols:80}),(0,r.jsx)("textarea",{type:"text",name:"description",placeholder:"Enter contract description",value:n,onChange:e=>a(e.target.value)}),(0,r.jsx)("input",{type:"submit",value:"Generate Documentation"})]}),(0,r.jsxs)("div",{className:c().resultBox,children:[u&&(0,r.jsx)("div",{className:c().loading,children:(0,r.jsx)(m,{color:"#fff",size:20})}),!u&&s&&(0,r.jsx)("pre",{className:c().code,children:s})]})]})]})]})}},4248:function(e){e.exports={"social-icons":"SocialIcons_social-icons__DH0x7",container:"SocialIcons_container__frGqF"}},4848:function(e){e.exports={"my-body":"index_my-body__NygTr",main:"index_main__3wZvj",icon:"index_icon__CgRrC",result:"index_result__66e57",code:"index_code__KZINY",loading:"index_loading__LaSmh"}},9008:function(e,t,n){e.exports=n(3121)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);