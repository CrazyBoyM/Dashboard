var e=Object.defineProperty,n=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.propertyIsEnumerable,l=(n,a,t)=>a in n?e(n,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[a]=t,i=(e,i)=>{for(var o in i||(i={}))n.call(i,o)&&l(e,o,i[o]);if(a)for(var o of a(i))t.call(i,o)&&l(e,o,i[o]);return e};import{u as o,m as c}from"./index.b07a25e1.js";import{a as s}from"./global.69472560.js";import{d as r,e as u,f as d,C as h,D as v,p,h as g,o as m,j as y,s as k,l as w,q as S,t as f,a5 as b,m as C,n as I,F as T,k as E,a6 as x,u as L}from"./element-plus.d6b83795.js";var j=r({name:"Search",props:{componentSetting:{type:Object,required:!0}},setup(e){const n=o(),a=u(0),t=u(!1),l=u(""),i=u([]),r=u(-1),p=u(!1),g=d((()=>e.componentSetting.engineList[a.value]||e.componentSetting.engineList[0]));let m;const y=()=>{let e=g.value.link;/\[0\]/.test(e)?e=e.replace(/\[0\]/,l.value):e+=l.value,window.open(e),l.value=""};async function k(){if(e.componentSetting.keywordLink){if(!l.value)return i.value=[],void(r.value=-1);try{const e=await fetch(`${s}/getAutomatedKeywords?s=${l.value}`),{errCode:n,data:a}=await e.json();if(200!==n)throw new Error("403");p.value=!1,i.value=a}catch(n){i.value=[],r.value=-1}}}const w=u();function S(e){t.value&&!w.value.contains(e.target)&&(t.value=!1)}h((()=>{document.addEventListener("click",S)})),v((()=>{document.removeEventListener("click",S)}));const f=d((()=>c(e.componentSetting.position)));return{activeEngine:a,showEngine:t,searchKey:l,linkSearchArr:i,linkSearchArrActive:r,showTabTips:p,activeEngineItem:g,handleChangeEngine:e=>{a.value=e,t.value=!1},handleInputKeyDown:n=>{[9,13,38,40].includes(n.keyCode)?(9===n.keyCode&&(n.shiftKey?(a.value=a.value<=0?e.componentSetting.engineList.length-1:--a.value,n.preventDefault()):(a.value=a.value>=e.componentSetting.engineList.length-1?0:++a.value,n.preventDefault())),13===n.keyCode&&y(),38===n.keyCode&&(r.value=r.value<=0&&i.value.length>0?i.value.length-1:r.value-1,l.value=i.value[r.value]),40===n.keyCode&&(r.value=r.value<i.value.length-1&&i.value.length>0?r.value+1:0,l.value=i.value[r.value])):(m&&window.clearTimeout(m),m=window.setTimeout((()=>{k()}),400))},handleInputFocus:()=>{k(),e.componentSetting.showTabTips&&(p.value=!0)},handleInputBlur:()=>{setTimeout((()=>{p.value=!1}),200),i.value=[]},hanldeNoShowMore:()=>{p.value=!1,n.commit("updateSearchShowTabTips",!1)},handleClear:()=>{l.value=""},handleLinkSearchJump:e=>{i.value=[],r.value=-1,l.value=e,setTimeout((()=>{y()}),200)},engineSelecotr:w,positionCSS:f}}});const K=L();p("data-v-2dd34f0a");const B={key:2,class:"no-icon"},A={class:"engine-selecotr",ref:"engineSelecotr"},O={key:2,class:"no-icon"},D={class:"text"},F={class:"search-input-box-wrapper"},M=k("path",{d:"M519.02036023 459.47959989L221.8941505 162.35411435a37.07885742 37.07885742 0 1 0-52.45354772 52.40502656l297.12476134 297.15010821L169.44060278 809.05863314a37.07885742 37.07885742 0 1 0 52.42964924 52.42892505l297.15010821-297.12476136 297.15010822 297.12476136a37.07885742 37.07885742 0 1 0 52.42892504-52.40430237l-297.12476135-297.1740067 297.12476135-297.12548553a37.07885742 37.07885742 0 1 0-52.42892504-52.42964924L519.04498291 459.47959989z"},null,-1),P={key:0,class:"link-search-wrapper"},_=k("svg",{viewBox:"0 0 1024 1024",width:"22",height:"22"},[k("path",{d:"M419.405333 0c231.683703 0 419.456512 185.265077 419.456512 413.724553a408.862625 408.862625 0 0 1-101.179298 269.55557l275.748132 280.098278a35.108244 35.108244 0 0 1-0.767673 50.154634 36.336521 36.336521 0 0 1-50.819951-0.716495l-275.49224-279.944743a421.19657 421.19657 0 0 1-266.945482 94.628488C187.823987 827.500285 0 642.235208 0 413.724553 0 185.265077 187.823987 0 419.405333 0z m0 70.932983c-191.918243 0-347.499965 153.483416-347.499965 342.79157 0 189.359333 155.581722 342.842749 347.499965 342.842749s347.551143-153.534594 347.551144-342.842749c0-189.359333-155.581722-342.791571-347.499965-342.79157z"})],-1),U={class:"tab-tooltips"},$=k("div",{class:"main"},"按Tab键可快速切换搜索引擎",-1);g();const z=K(((e,n,a,t,l,o)=>(m(),y("div",{class:"wrapper",style:i({padding:e.componentSetting.padding+"px"},e.positionCSS)},[k("div",{class:"search-wrapper-box",style:{boxShadow:e.componentSetting.boxShadow,background:e.componentSetting.boxBackground}},[k("div",{class:"search-engine-box",onClick:n[1]||(n[1]=w((n=>e.showEngine=!e.showEngine),["stop"]))},["local"===e.activeEngineItem.iconType||"network"===e.activeEngineItem.iconType?(m(),y("img",{key:0,src:e.activeEngineItem.iconPath,alt:"icon",width:"24",height:"24"},null,8,["src"])):S("",!0),"api"===e.activeEngineItem.iconType?(m(),y("img",{key:1,src:`http://favicon.cccyun.cc/${e.activeEngineItem.link}`,alt:"icon",width:"24",height:"24"},null,8,["src"])):S("",!0),"text"===e.activeEngineItem.iconType?(m(),y("div",B,f(e.activeEngineItem.name.slice(0,1)),1)):S("",!0)]),k(b,{name:"fadeInUp"},{default:K((()=>[C(k("div",A,[(m(!0),y(T,null,E(e.componentSetting.engineList,((n,a)=>(m(),y("div",{class:"engine-list-item",key:a,onClick:n=>e.handleChangeEngine(a)},["local"===n.iconType||"network"===n.iconType?(m(),y("img",{key:0,src:n.iconPath,alt:"icon",width:"24",height:"24"},null,8,["src"])):S("",!0),"api"===n.iconType?(m(),y("img",{key:1,src:`http://favicon.cccyun.cc/${n.link}`,alt:"icon",width:"24",height:"24"},null,8,["src"])):S("",!0),"text"===n.iconType?(m(),y("div",O,f(n.name.slice(0,1)),1)):S("",!0),k("div",D,f(n.name),1)],8,["onClick"])))),128))],512),[[I,e.showEngine]])])),_:1}),k("div",F,[C(k("input",{class:"search-input-box","onUpdate:modelValue":n[2]||(n[2]=n=>e.searchKey=n),onKeydown:n[3]||(n[3]=w(((...n)=>e.handleInputKeyDown&&e.handleInputKeyDown(...n)),["stop"])),onFocus:n[4]||(n[4]=(...n)=>e.handleInputFocus&&e.handleInputFocus(...n)),onBlur:n[5]||(n[5]=(...n)=>e.handleInputBlur&&e.handleInputBlur(...n)),tabindex:"-1"},null,544),[[x,e.searchKey]]),e.searchKey?(m(),y("svg",{key:0,class:"clear-btn icon",onClick:n[6]||(n[6]=(...n)=>e.handleClear&&e.handleClear(...n)),viewBox:"0 0 1024 1024",width:"20",height:"20"},[M])):S("",!0),k(b,{name:"fadeInUp"},{default:K((()=>[e.linkSearchArr.length>0?(m(),y("div",P,[(m(!0),y(T,null,E(e.linkSearchArr,((n,a)=>(m(),y("div",{class:["link-search-item",{active:e.linkSearchArrActive===a}],key:n,onClick:a=>e.handleLinkSearchJump(n)},f(n),11,["onClick"])))),128))])):S("",!0)])),_:1})]),k("div",{class:"search-btn",onClick:n[7]||(n[7]=(...n)=>e.handleSearchBtnClick&&e.handleSearchBtnClick(...n))},[_]),k(b,{name:"fadeInUp"},{default:K((()=>[C(k("div",U,[$,k("div",{class:"no-more",onClick:n[8]||(n[8]=w(((...n)=>e.hanldeNoShowMore&&e.hanldeNoShowMore(...n)),["stop"]))},"不再提示")],512),[[I,e.showTabTips]])])),_:1})],4)],4))));j.render=z,j.__scopeId="data-v-2dd34f0a";export default j;
