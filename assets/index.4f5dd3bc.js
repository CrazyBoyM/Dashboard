var v=Object.defineProperty;var f=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var h=(t,e,n)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,F=(t,e)=>{for(var n in e||(e={}))x.call(e,n)&&h(t,n,e[n]);if(f)for(var n of f(e))C.call(e,n)&&h(t,n,e[n]);return t};import{_ as D,d as E,r as u,w as k,y as _,G as j,x as z,k as r,g as w,t as d,E as m,j as T,W as B,H as I,o as S}from"./index.2d2dbb39.js";const W=E({name:"Clock",props:{componentSetting:{type:Object,required:!0}},setup(t){function e(){let o="",a=t.componentSetting.formatter==="\u81EA\u5B9A\u4E49"?t.componentSetting.custom:t.componentSetting.formatter;try{if(t.componentSetting.chineseWeekDay&&a.includes("dddd")){const c=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"];a=a.replace("dddd",()=>{try{return c[new Date().getDay()]}catch{return"dddd"}})}o=B().format(a)}catch(c){o="Dayjs\u683C\u5F0F\u5316\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u683C\u5F0F\u5316\u6587\u672C",console.error(c)}return o}const n=u(e());let i;function s(){var o;n.value=e(),i=window.setInterval(()=>{n.value=e()},((o=t.componentSetting)==null?void 0:o.duration)*1e3||5e3)}s(),k(()=>[t.componentSetting.duration,t.componentSetting.formatter,t.componentSetting.custom,t.componentSetting.chineseWeekDay,t.componentSetting.showTTS1,t.componentSetting.showTTS2],()=>{window.clearInterval(i),s(),y()}),_(()=>{window.clearInterval(i)});const l=j(()=>I(t.componentSetting.position)),p=u(""),g=u(""),y=async()=>{try{if(t.componentSetting.showTTS1){const o=await fetch("https://timor.tech/api/holiday/tts/tomorrow"),{tts:a}=await o.json();p.value=a}if(t.componentSetting.showTTS2){const o=await fetch("https://timor.tech/api/holiday/tts/next"),{tts:a}=await o.json();g.value=a}}catch{}};return z(()=>{y()}),{day:n,positionCSS:l,ttsText1:p,ttsText2:g}}}),$={class:"text-wrapper"},A={class:"day"};function N(t,e,n,i,s,l){return S(),r("div",{class:"wrapper",style:m(F({fontSize:t.componentSetting.textFontSize+"px",color:t.componentSetting.textColor,textShadow:t.componentSetting.textShadow,padding:t.componentSetting.padding+"px",fontFamily:t.componentSetting.fontFamily},t.positionCSS))},[w("div",$,[w("div",A,d(t.day),1),t.componentSetting.showTTS1&&t.ttsText1?(S(),r("div",{key:0,class:"tts",style:m({fontSize:t.componentSetting.ttsFontSize+"px"})},d(t.ttsText1),5)):T("",!0),t.componentSetting.showTTS2&&t.ttsText2?(S(),r("div",{key:1,class:"tts",style:m({fontSize:t.componentSetting.ttsFontSize+"px"})},d(t.ttsText2),5)):T("",!0)])],4)}var q=D(W,[["render",N],["__scopeId","data-v-25f3e8c8"]]);export{q as default};