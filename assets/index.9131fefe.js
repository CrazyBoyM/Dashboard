var v=Object.defineProperty;var l=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var p=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))y.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))w.call(t,n)&&p(e,n,t[n]);return e};import{_ as k,d as h,r as m,u as C,I as A,w as d,x,y as I,G as E,k as T,g as $,t as j,E as f,H as D,J as F,K as _,o as b}from"./index.2d2dbb39.js";const z=h({name:"Verse",props:{componentSetting:{type:Object,required:!0}},setup(e){const t=m(""),n=m(),c=C(),{t:s}=A();async function a(){try{const i=await fetch("https://v1.jinrishici.com/all.json"),{content:g}=await i.json();t.value=g}catch{}}let o;const r=()=>{const i=(e.componentSetting.duration||5)*60*1e3;o&&(window.clearInterval(o),o=null),o=window.setInterval(a,i)};d(()=>e.componentSetting.duration,()=>r(),{immediate:!0}),x(()=>a()),I(()=>o&&window.clearInterval(o));const S=E(()=>D(e.componentSetting.position));return d(()=>t.value,()=>{n.value&&n.value.animate&&n.value.animate({opacity:[0,1]},400)}),{verse:t,positionCSS:S,verseElement:n,handleClickAction:()=>{e.componentSetting.clickActionType===1?(a(),r()):e.componentSetting.clickActionType===2?window.open(`https://hanyu.baidu.com/s?wd=${encodeURIComponent(t.value)}`):e.componentSetting.clickActionType===3&&F(t.value)&&_({title:s("\u63D0\u793A"),type:"success",message:s("\u590D\u5236\u6210\u529F")})},contextmenu:i=>{c.isLock&&i.stopPropagation()}}}});function B(e,t,n,c,s,a){return b(),T("div",{class:"wrapper",ref:"verseElement",style:f(u({fontSize:e.componentSetting.textFontSize+"px",color:e.componentSetting.textColor,textShadow:e.componentSetting.textShadow,padding:e.componentSetting.padding+"px",fontFamily:e.componentSetting.fontFamily},e.positionCSS))},[$("span",{style:f(e.componentSetting.clickActionType?"cursor: pointer":""),onClick:t[0]||(t[0]=(...o)=>e.handleClickAction&&e.handleClickAction(...o)),onContextmenu:t[1]||(t[1]=(...o)=>e.contextmenu&&e.contextmenu(...o))},j(e.verse),37)],4)}var q=k(z,[["render",B],["__scopeId","data-v-b1afef90"]]);export{q as default};