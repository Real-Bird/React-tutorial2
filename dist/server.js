(()=>{"use strict";var e={n:r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},d:(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r)};const r=require("react-dom/server");var n=e.n(r);const t=require("express");var s=e.n(t);const o=require("react-router-dom"),i=(require("react"),require("react/jsx-runtime")),u=function(){return(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(o.Link,{to:"/red",children:"Red"})}),(0,i.jsx)("li",{children:(0,i.jsx)(o.Link,{to:"/blue",children:"Blue"})})]})},c=function(){return(0,i.jsx)("div",{className:"Blue",children:"Blue"})},l=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(c,{})})},d=function(){return(0,i.jsx)("div",{children:"Hello"})},a=function(){return(0,i.jsx)("div",{className:"Red",children:"Red"})},j=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a,{})})};function x(){return(0,i.jsxs)(o.BrowserRouter,{children:[(0,i.jsx)(u,{}),(0,i.jsx)("hr",{}),(0,i.jsxs)(o.Routes,{children:[(0,i.jsx)(o.Route,{path:"/",element:(0,i.jsx)(d,{})}),(0,i.jsx)(o.Route,{path:"/red",element:(0,i.jsx)(j,{})}),(0,i.jsx)(o.Route,{path:"/blue",element:(0,i.jsx)(l,{})})]})]})}const h=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(x,{})})};var f=s()();f.use((function(e,r,t){var s=(0,i.jsx)(o.StaticRouter,{location:e.url,context:{},children:(0,i.jsx)(h,{})}),u=n().renderToString(s);r.send(u)})),f.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))})();