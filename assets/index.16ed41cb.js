var e=Object.defineProperty,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,i=(n,a,t)=>a in n?e(n,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[a]=t,l=(e,l)=>{for(var o in l||(l={}))a.call(l,o)&&i(e,o,l[o]);if(n)for(var o of n(l))t.call(l,o)&&i(e,o,l[o]);return e};"undefined"!=typeof require&&require;import{u as o,m as c,a as s}from"./index.99786fc0.js";import{d as r,b as u,c as h,B as d,o as v,p,e as g,f as m,E as y,L as k,m as w,k as S,u as f,t as b,D as C,q as I,s as T,F as E,j as x,ae as L,af as B,Q as K,H as j}from"./element-plus.01c37972.js";var A=r({name:"Search",props:{componentSetting:{type:Object,required:!0}},setup(e){const n=o(),a=u(0),t=u(!1),i=u(""),l=u([]),r=u(-1),p=u(!1),g=h((()=>e.componentSetting.engineList[a.value]||e.componentSetting.engineList[0]));let m;const y=()=>{let e=g.value.link;/\[0\]/.test(e)?e=e.replace(/\[0\]/,i.value):e+=i.value,window.open(e),i.value=""};async function k(){if(e.componentSetting.keywordLink){if(!i.value)return l.value=[],void(r.value=-1);try{const e=await fetch(`${s}/getAutomatedKeywords?s=${i.value}`),{errCode:n,data:a}=await e.json();if(200!==n)throw new Error("403");p.value=!1,l.value=a}catch(n){l.value=[],r.value=-1}}}const w=u();function S(e){t.value&&!w.value.contains(e.target)&&(t.value=!1)}d((()=>{document.addEventListener("click",S)})),v((()=>{document.removeEventListener("click",S)}));const f=h((()=>c(e.componentSetting.position)));return{activeEngine:a,showEngine:t,searchKey:i,linkSearchArr:l,linkSearchArrActive:r,showTabTips:p,activeEngineItem:g,handleChangeEngine:e=>{a.value=e,t.value=!1},handleInputKeyDown:n=>{[9,13,38,40].includes(n.keyCode)?(9===n.keyCode&&(n.shiftKey?(a.value=a.value<=0?e.componentSetting.engineList.length-1:--a.value,n.preventDefault()):(a.value=a.value>=e.componentSetting.engineList.length-1?0:++a.value,n.preventDefault())),13===n.keyCode&&y(),38===n.keyCode&&(r.value=r.value<=0&&l.value.length>0?l.value.length-1:r.value-1,i.value=l.value[r.value]),40===n.keyCode&&(r.value=r.value<l.value.length-1&&l.value.length>0?r.value+1:0,i.value=l.value[r.value])):(m&&window.clearTimeout(m),m=window.setTimeout((()=>{k()}),400))},handleInputFocus:()=>{k(),e.componentSetting.showTabTips&&(p.value=!0)},handleInputBlur:()=>{setTimeout((()=>{p.value=!1}),200),l.value=[]},hanldeNoShowMore:()=>{p.value=!1,n.commit("updateSearchShowTabTips",!1)},handleClear:()=>{i.value=""},handleLinkSearchJump:e=>{l.value=[],r.value=-1,i.value=e,setTimeout((()=>{y()}),200)},handleSearchBtnClick:y,engineSelecotr:w,positionCSS:f}}});p("data-v-cf15108c");const O=["src"],D=["src"],F={key:2,class:"no-icon"},M={class:"engine-selecotr",ref:"engineSelecotr"},P=["onClick"],_=["src"],q=["src"],U={key:2,class:"no-icon"},$={class:"text"},z={class:"search-input-box-wrapper"},N=[k("path",{d:"M519.02036023 459.47959989L221.8941505 162.35411435a37.07885742 37.07885742 0 1 0-52.45354772 52.40502656l297.12476134 297.15010821L169.44060278 809.05863314a37.07885742 37.07885742 0 1 0 52.42964924 52.42892505l297.15010821-297.12476136 297.15010822 297.12476136a37.07885742 37.07885742 0 1 0 52.42892504-52.40430237l-297.12476135-297.1740067 297.12476135-297.12548553a37.07885742 37.07885742 0 1 0-52.42892504-52.42964924L519.04498291 459.47959989z"},null,-1)],J={key:0,class:"link-search-wrapper"},H=["onClick"],Q=[k("svg",{viewBox:"0 0 1024 1024",width:"22",height:"22"},[k("path",{d:"M419.405333 0c231.683703 0 419.456512 185.265077 419.456512 413.724553a408.862625 408.862625 0 0 1-101.179298 269.55557l275.748132 280.098278a35.108244 35.108244 0 0 1-0.767673 50.154634 36.336521 36.336521 0 0 1-50.819951-0.716495l-275.49224-279.944743a421.19657 421.19657 0 0 1-266.945482 94.628488C187.823987 827.500285 0 642.235208 0 413.724553 0 185.265077 187.823987 0 419.405333 0z m0 70.932983c-191.918243 0-347.499965 153.483416-347.499965 342.79157 0 189.359333 155.581722 342.842749 347.499965 342.842749s347.551143-153.534594 347.551144-342.842749c0-189.359333-155.581722-342.791571-347.499965-342.79157z"})],-1)],V={class:"tab-tooltips"},G=k("div",{class:"main"},"按Tab键可快速切换搜索引擎",-1);g(),A.render=function(e,n,a,t,i,o){return m(),y("div",{class:"wrapper",style:j(l({padding:e.componentSetting.padding+"px"},e.positionCSS))},[k("div",{class:"search-wrapper-box",style:j({boxShadow:e.componentSetting.boxShadow,background:e.componentSetting.boxBackground})},[k("div",{class:"search-engine-box",onClick:n[0]||(n[0]=w((n=>e.showEngine=!e.showEngine),["stop"]))},["local"===e.activeEngineItem.iconType||"network"===e.activeEngineItem.iconType?(m(),y("img",{key:0,src:e.activeEngineItem.iconPath,alt:"icon",width:"24",height:"24"},null,8,O)):S("",!0),"api"===e.activeEngineItem.iconType?(m(),y("img",{key:1,src:`https://favicon.cccyun.cc/${e.activeEngineItem.link}`,alt:"icon",width:"24",height:"24"},null,8,D)):S("",!0),"text"===e.activeEngineItem.iconType?(m(),y("div",F,f(e.activeEngineItem.name.slice(0,1)),1)):S("",!0)]),b(L,{name:"fadeInUp"},{default:C((()=>[I(k("div",M,[(m(!0),y(E,null,x(e.componentSetting.engineList,((n,a)=>(m(),y("div",{class:"engine-list-item",key:a,onClick:n=>e.handleChangeEngine(a)},["local"===n.iconType||"network"===n.iconType?(m(),y("img",{key:0,src:n.iconPath,alt:"icon",width:"24",height:"24"},null,8,_)):S("",!0),"api"===n.iconType?(m(),y("img",{key:1,src:`https://favicon.cccyun.cc/${n.link}`,alt:"icon",width:"24",height:"24"},null,8,q)):S("",!0),"text"===n.iconType?(m(),y("div",U,f(n.name.slice(0,1)),1)):S("",!0),k("div",$,f(n.name),1)],8,P)))),128))],512),[[T,e.showEngine]])])),_:1}),k("div",z,[I(k("input",{class:"search-input-box","onUpdate:modelValue":n[1]||(n[1]=n=>e.searchKey=n),onKeydown:n[2]||(n[2]=w(((...n)=>e.handleInputKeyDown&&e.handleInputKeyDown(...n)),["stop"])),onFocus:n[3]||(n[3]=(...n)=>e.handleInputFocus&&e.handleInputFocus(...n)),onBlur:n[4]||(n[4]=(...n)=>e.handleInputBlur&&e.handleInputBlur(...n)),tabindex:"-1"},null,544),[[B,e.searchKey]]),e.searchKey?(m(),y("svg",{key:0,class:"clear-btn icon",onClick:n[5]||(n[5]=(...n)=>e.handleClear&&e.handleClear(...n)),viewBox:"0 0 1024 1024",width:"20",height:"20"},N)):S("",!0),b(L,{name:"fadeInUp"},{default:C((()=>[e.linkSearchArr.length>0?(m(),y("div",J,[(m(!0),y(E,null,x(e.linkSearchArr,((n,a)=>(m(),y("div",{class:K(["link-search-item",{active:e.linkSearchArrActive===a}]),key:n,onClick:a=>e.handleLinkSearchJump(n)},f(n),11,H)))),128))])):S("",!0)])),_:1})]),k("div",{class:"search-btn",onClick:n[6]||(n[6]=(...n)=>e.handleSearchBtnClick&&e.handleSearchBtnClick(...n))},Q),b(L,{name:"fadeInUp"},{default:C((()=>[I(k("div",V,[G,k("div",{class:"no-more",onClick:n[7]||(n[7]=w(((...n)=>e.hanldeNoShowMore&&e.hanldeNoShowMore(...n)),["stop"]))},"不再提示")],512),[[T,e.showTabTips]])])),_:1})],4)],4)},A.__scopeId="data-v-cf15108c";export default A;
