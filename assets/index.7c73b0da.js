var X=Object.defineProperty;var N=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var K=(e,n,i)=>n in e?X(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,D=(e,n)=>{for(var i in n||(n={}))Y.call(n,i)&&K(e,i,n[i]);if(N)for(var i of N(n))Z.call(n,i)&&K(e,i,n[i]);return e};import{i as x,r as h,j as k,o as _,b as ee,f as l,h as c,af as b,G as d,H as p,v as f,x as E,ad as T,A as I,ag as ne,D as F,q as te,e as r,ah as O,F as J,y as U,B as oe,N as ie}from"./vendor.302cf276.js";import{_ as ae,u as se,f as le,m as re}from"./index.528048ac.js";import{g as ue}from"./images.42219ede.js";const ce=x({name:"Search",props:{componentSetting:{type:Object,required:!0},element:{type:Object,required:!0},isAction:{type:Boolean,default:!1}},setup(e){const n=se(),i=h(0),y=h(!1),u=h(""),s=h([]),a=h(-1),o=h(!1),v=h(),S=k(()=>e.componentSetting.engineList[i.value]||e.componentSetting.engineList[0]);let w;const V=t=>{i.value=t,y.value=!1},C=()=>{e.componentSetting.rememberHistory&&W(u.value);let t=S.value.link;/\[0\]/.test(t)?t=t.replace(/\[0\]/,encodeURIComponent(u.value)):t=t+encodeURIComponent(u.value),e.componentSetting.jumpType===2?window.location.href=t:window.open(t),u.value="",s.value=[],v.value.blur()},M=t=>{[9,13,38,40].includes(t.keyCode)?(t.keyCode===9&&(t.shiftKey?(i.value=i.value<=0?e.componentSetting.engineList.length-1:--i.value,t.preventDefault()):(i.value=i.value>=e.componentSetting.engineList.length-1?0:++i.value,t.preventDefault())),t.keyCode===13&&C(),t.keyCode===38&&(a.value=a.value<=0&&s.value.length>0?s.value.length-1:a.value-1,u.value=s.value[a.value]),t.keyCode===40&&(a.value=a.value<s.value.length-1&&s.value.length>0?a.value+1:0,u.value=s.value[a.value])):(w&&window.clearTimeout(w),w=window.setTimeout(()=>{L()},400))},A=k(()=>e.componentSetting.focusBgAnimation&&n.global.background.includes("url")),R=()=>{L(),e.componentSetting.showTabTips&&(!e.componentSetting.rememberHistory||e.componentSetting.rememberHistoryList.length===0)&&(o.value=!0),A.value&&n.updateState({key:"showBackgroundEffect",value:!0})},j=()=>{setTimeout(()=>{o.value=!1},200),s.value=[],A.value&&n.updateState({key:"showBackgroundEffect",value:!1})},P=()=>{o.value=!1;const t=JSON.parse(JSON.stringify(e.element));e.isAction?(t.actionSetting.actionClickValue.componentSetting.showTabTips=!1,n.updateActionElement(t)):t.componentSetting.showTabTips=!1,n.editComponent(t)},q=()=>{u.value=""},z=t=>{s.value=[],a.value=-1,u.value=t,setTimeout(()=>{C()},200)};async function L(){if(!u.value){e.componentSetting.rememberHistory?s.value=e.componentSetting.rememberHistoryList||[]:s.value=[],a.value=-1;return}if(!!e.componentSetting.keywordLink)try{const t=await fetch(`${le}/getAutomatedKeywords?s=${u.value}`),{errCode:m,data:g}=await t.json();if(m===200)o.value=!1,u.value&&(s.value=g);else throw new Error("403")}catch{s.value=[],a.value=-1}}function W(t){const m=JSON.parse(JSON.stringify(e.element)),g=m.componentSetting.rememberHistoryList||[];~g.indexOf(t)||(g.unshift(t),g.length>10&&(g.length=10),e.isAction?(m.actionSetting.actionClickValue.componentSetting.rememberHistoryList=g,n.updateActionElement(m)):m.componentSetting.rememberHistoryList=g,n.editComponent(m))}function G(){const t=JSON.parse(JSON.stringify(e.element));e.isAction?(t.actionSetting.actionClickValue.componentSetting.rememberHistoryList=[],n.updateActionElement(t)):t.componentSetting.rememberHistoryList=[],n.editComponent(t)}const B=h();function H(t){y.value&&!B.value.contains(t.target)&&(y.value=!1)}_(()=>{o.value=e.element.showTabTips,document.addEventListener("click",H)}),ee(()=>{document.removeEventListener("click",H)});const Q=k(()=>re(e.componentSetting.position)),$=k(()=>n.isLock);return{activeEngine:i,showEngine:y,searchKey:u,linkSearchArr:s,linkSearchArrActive:a,showTabTips:o,activeEngineItem:S,handleChangeEngine:V,handleInputKeyDown:M,handleInputFocus:R,handleInputBlur:j,hanldeNoShowMore:P,handleClear:q,handleLinkSearchJump:z,handleSearchBtnClick:C,searchInput:v,engineSelecotr:B,positionCSS:Q,getTargetIcon:ue,clearHistory:G,contextmenu:t=>{$.value&&t.stopPropagation()},isLock:$}}}),de=["src"],me=["src"],ge={key:2,class:"no-icon"},he={class:"engine-selecotr",ref:"engineSelecotr"},ve=["onClick"],pe=["src"],fe=["src"],ye={key:2,class:"no-icon"},Se={class:"text"},ke={class:"search-input-box-wrapper"},we={key:0,class:"link-search-wrapper"},Ce=["onClick"],be={key:0,class:"clear-history"},Ee={class:"tab-tooltips"},Te={class:"main"};function Ie(e,n,i,y,u,s){const a=te("Icon");return r(),l("div",{class:"wrapper",style:F(D({padding:e.componentSetting.padding+"px"},e.positionCSS))},[c("div",{class:"search-wrapper-box",style:F({boxShadow:e.componentSetting.boxShadow,borderRadius:`${e.componentSetting.boxRadius||4}px`,padding:`0 ${(e.componentSetting.boxRadius||4)/4}px`,background:e.componentSetting.boxBackground,maxWidth:`${e.componentSetting.maxWidth||600}px`,pointerEvents:e.isLock?"all":"none"}),onContextmenu:n[9]||(n[9]=(...o)=>e.contextmenu&&e.contextmenu(...o))},[c("div",{class:"search-engine-box",onClick:n[0]||(n[0]=b(o=>e.showEngine=!e.showEngine,["stop"]))},[e.activeEngineItem.iconType==="local"||e.activeEngineItem.iconType==="network"?(r(),l("img",{key:0,src:e.activeEngineItem.iconPath,alt:"icon",width:"24",height:"24"},null,8,de)):d("",!0),e.activeEngineItem.iconType==="api"?(r(),l("img",{key:1,src:e.getTargetIcon(e.activeEngineItem.link),alt:"icon",width:"24",height:"24"},null,8,me)):d("",!0),e.activeEngineItem.iconType==="text"?(r(),l("div",ge,p(e.activeEngineItem.name.slice(0,1)),1)):d("",!0)]),f(T,{name:"fadeInUp"},{default:E(()=>[I(c("div",he,[(r(!0),l(J,null,U(e.componentSetting.engineList,(o,v)=>(r(),l("div",{class:"engine-list-item",key:v,onClick:S=>e.handleChangeEngine(v)},[o.iconType==="local"||o.iconType==="network"?(r(),l("img",{key:0,src:o.iconPath,alt:"icon",width:"24",height:"24"},null,8,pe)):d("",!0),o.iconType==="api"?(r(),l("img",{key:1,src:e.getTargetIcon(o.link),alt:"icon",width:"24",height:"24"},null,8,fe)):d("",!0),o.iconType==="text"?(r(),l("div",ye,p(o.name.slice(0,1)),1)):d("",!0),c("div",Se,p(o.name),1)],8,ve))),128))],512),[[O,e.showEngine]])]),_:1}),c("div",ke,[I(c("input",{class:"search-input-box",ref:"searchInput","onUpdate:modelValue":n[1]||(n[1]=o=>e.searchKey=o),onKeydown:n[2]||(n[2]=b((...o)=>e.handleInputKeyDown&&e.handleInputKeyDown(...o),["stop"])),onFocus:n[3]||(n[3]=(...o)=>e.handleInputFocus&&e.handleInputFocus(...o)),onBlur:n[4]||(n[4]=(...o)=>e.handleInputBlur&&e.handleInputBlur(...o)),tabindex:"1"},null,544),[[ne,e.searchKey]]),e.searchKey?(r(),l("div",{key:0,class:"clear-btn",onClick:n[5]||(n[5]=(...o)=>e.handleClear&&e.handleClear(...o))},[f(a,{name:"close"})])):d("",!0),f(T,{name:"fadeInUp"},{default:E(()=>[e.linkSearchArr.length>0?(r(),l("div",we,[(r(!0),l(J,null,U(e.linkSearchArr,(o,v)=>(r(),l("div",{class:oe(["link-search-item",{active:e.linkSearchArrActive===v}]),key:o,onClick:S=>e.handleLinkSearchJump(o)},p(o),11,Ce))),128)),!e.searchKey&&e.componentSetting.rememberHistory?(r(),l("div",be,[c("div",{class:"clear-history-btn",onClick:n[6]||(n[6]=(...o)=>e.clearHistory&&e.clearHistory(...o))},[f(a,{name:"delete",size:"1em",style:{"margin-right":"2px"}}),ie(" "+p(e.$t("\u6E05\u7A7A\u5386\u53F2\u8BB0\u5F55")),1)])])):d("",!0)])):d("",!0)]),_:1})]),c("div",{class:"search-btn",onClick:n[7]||(n[7]=(...o)=>e.handleSearchBtnClick&&e.handleSearchBtnClick(...o))},[f(a,{name:"search",fill:"#484848"})]),f(T,{name:"fadeInUp"},{default:E(()=>[I(c("div",Ee,[c("div",Te,p(e.$t("\u6309Tab\u952E\u53EF\u5FEB\u901F\u5207\u6362\u641C\u7D22\u5F15\u64CE")),1),c("div",{class:"no-more",onClick:n[8]||(n[8]=b((...o)=>e.hanldeNoShowMore&&e.hanldeNoShowMore(...o),["stop"]))},p(e.$t("\u4E0D\u518D\u63D0\u793A")),1)],512),[[O,e.showTabTips]])]),_:1})],36)],4)}var Ke=ae(ce,[["render",Ie],["__scopeId","data-v-0e486247"]]);export{Ke as default};