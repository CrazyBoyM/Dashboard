var N=Object.defineProperty;var E=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var _=(e,t,i)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,A=(e,t)=>{for(var i in t||(t={}))q.call(t,i)&&_(e,i,t[i]);if(E)for(var i of E(t))j.call(t,i)&&_(e,i,t[i]);return e};import{_ as J,d as Z,u as F,G as B,I as H,a as G,x as P,y as W,r as V,k as c,g as o,F as Q,m as X,E as f,h as Y,b as U,H as x,i as ee,V as te,s as ne,f as oe,o as g,D as C,t as y,L,j as v,N as I,R as ie,O,p as se,q as ae}from"./index.2d2dbb39.js";import{a as R,b as de}from"./images.fa7b0c49.js";const b={tab:{span:1},Q:{keyCode:81},W:{keyCode:87},E:{keyCode:69},R:{keyCode:82},T:{keyCode:84},Y:{keyCode:89},U:{keyCode:85},I:{keyCode:73},O:{keyCode:79},P:{keyCode:80},brackets:{span:1},caps:{span:2},A:{keyCode:65},S:{keyCode:83},D:{keyCode:68},F:{keyCode:70},G:{keyCode:71},H:{keyCode:72},J:{keyCode:74},K:{keyCode:75},L:{keyCode:76},semi:{span:2},shift:{span:3},Z:{keyCode:90},X:{keyCode:88},C:{keyCode:67},V:{keyCode:86},B:{keyCode:66},N:{keyCode:78},M:{keyCode:77}};const re=Z({name:"Collection",props:{componentSetting:{type:Object,required:!0},element:{type:Object,required:!0},isAction:{type:Boolean,default:!1}},setup(e){const t=F(),i=B(()=>e.componentSetting.userSettingKeyMap||{}),w=B(()=>x(e.componentSetting.position)),{t:S}=H(),n=G({editingActive:!1,editingInfo:{key:"",url:"",remark:""}}),k=d=>{if(!e.componentSetting.useKeyboardEvent||!t.isLock||document.querySelector("input:focus")||document.querySelector("textarea:focus")||document.querySelector(".ProseMirror-focused")||document.querySelector(".action-popover"))return;const s=d.keyCode,u=Object.keys(b).find(m=>b[m].keyCode===s);u&&i.value[u]&&K(i.value[u].url)};P(()=>{document.addEventListener("keydown",k)}),W(()=>{document.removeEventListener("keydown",k)});const a=V(!1),r=(d,s)=>{s&&i.value[s]?K(i.value[s].url):(a.value=!0,n.editingInfo.key=s,setTimeout(()=>{n.editingActive=!0},200))},l=()=>{n.editingInfo.key="",n.editingInfo.url="",n.editingInfo.remark="",n.editingActive=!1},$=(d,s)=>{a.value=!0,n.editingInfo.key=s;const{url:u,remark:m}=i.value[s];n.editingInfo.url=u,n.editingInfo.remark=m,setTimeout(()=>{n.editingActive=!0},200)},z=()=>{if(n.editingInfo.url&&n.editingInfo.remark&&confirm(S("\u786E\u5B9A\u6E05\u9664\u8BE5\u6309\u952E\u7ED1\u5B9A\u7684\u7F51\u9875\u5417?"))){n.editingInfo.url="",n.editingInfo.remark="";const d=ee(i);delete d[n.editingInfo.key],M(d),l(),a.value=!1}},h=V(!1),D=async()=>{if(!(!n.editingInfo.url||!n.editingInfo.remark))if(/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(n.editingInfo.url)){/https?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(n.editingInfo.url)||(n.editingInfo.url="https://"+n.editingInfo.url),h.value=!0;let[d,s]=await te(de(R(n.editingInfo.url)));d&&(s=`${new URL(n.editingInfo.url).origin}/favicon.ico`);const u=JSON.parse(JSON.stringify(i.value));u[n.editingInfo.key]={url:n.editingInfo.url,remark:n.editingInfo.remark,icon:s},M(u),setTimeout(()=>{l(),h.value=!1,a.value=!1},400)}else window.alert(S("URL\u5730\u5740\u4E0D\u6B63\u786E"))},T=d=>{const s=d.currentTarget;s.style.visibility="hidden",s.nextElementSibling.style.visibility="inherit"},M=d=>{const s=JSON.parse(JSON.stringify(ne(e.element)));e.isAction?(s.actionSetting.actionClickValue.componentSetting.userSettingKeyMap=d,t.updateActionElement(s)):s.componentSetting.userSettingKeyMap=d,t.editComponent(s)},K=d=>{e.componentSetting.jumpType===2?window.location.href=d:window.open(d)};return{keyboardMap:b,userSettingKeyMap:i,handleKeyClick:r,handleDialogClose:l,showDialog:$,editState:n,clearEidtInfo:z,handleImgError:T,handleUserKeySave:D,saveLoading:h,dialogVisible:a,positionCSS:w,getTargetIconV2:R}}}),p=e=>(se("data-v-db1d19c0"),e=e(),ae(),e),le=["onClick"],ue={class:"keys"},ce={class:"keys-name"},ge=["onClick"],pe=p(()=>o("svg",{class:"icon",viewBox:"0 0 1024 1024",width:"14",height:"14"},[o("path",{d:"M231.08266667 509.49688889c-0.11377778 51.76888889-41.87022222 93.52533333-93.75288889 93.41155556-51.65511111-0.11377778-93.63911111-42.09777778-93.52533333-93.86666667 0-51.54133333 42.21155555-93.52533333 93.98044444-93.41155556 51.65511111 0.11377778 93.29777778 41.984 93.29777778 93.86666667z m656.49777778-93.75288889c51.76888889 0 93.86666667 41.87022222 93.86666666 93.52533333 0.11377778 51.65511111-41.87022222 93.75288889-93.63911111 93.75288889-51.88266667 0-93.75288889-41.64266667-93.75288889-93.52533333s41.64266667-93.75288889 93.52533334-93.75288889zM512.45511111 603.02222222c-51.65511111 0-93.98044445-42.43911111-93.75288889-93.75288889 0.34133333-51.76888889 42.21155555-93.52533333 93.98044445-93.52533333 51.65511111 0 93.86666667 42.21155555 93.63911111 93.75288889-0.11377778 51.65511111-42.09777778 93.52533333-93.86666667 93.52533333z"})],-1)),ye=[pe],fe={key:1,class:"plus-box"},ke=p(()=>o("svg",{class:"icon",viewBox:"0 0 1024 1024",width:"20",height:"20"},[o("path",{d:"M896 469.333333H554.666667V128a42.666667 42.666667 0 0 0-85.333334 0v341.333333H128a42.666667 42.666667 0 0 0 0 85.333334h341.333333v341.333333a42.666667 42.666667 0 0 0 85.333334 0V554.666667h341.333333a42.666667 42.666667 0 0 0 0-85.333334z"})],-1)),me=[ke],ve={key:2,class:"icon-box"},Se=["src"],he={class:"no-icon",style:{visibility:"hidden"}},Ce={key:3,class:"mark-text"},Ie={class:"keys-wrapper",style:{width:"9.08%"}},be=p(()=>o("div",{class:"keys"},null,-1)),we=[be],Me={class:"editing-key"},Ke=p(()=>o("div",{class:"label"},"URL",-1)),Ee=p(()=>o("div",{class:"line"},null,-1)),_e=p(()=>o("div",{class:"label"},"Remark",-1)),Ae=p(()=>o("div",{class:"line"},null,-1)),Be={class:"footer",style:{"text-align":"right",padding:"12px"}},Ve=["disabled"],Ue=["loading"];function Le(e,t,i,w,S,n){const k=oe("easy-dialog");return g(),c("div",{class:"wrapper",style:f(A({},e.positionCSS))},[o("div",{class:"keyboard-mode",style:f({maxWidth:e.componentSetting.keyboardMaxWidth+"px"})},[(g(!0),c(Q,null,X(e.keyboardMap,(a,r)=>(g(),c("div",{class:C(["keys-wrapper",{hidden:a.span}]),key:r,style:f({width:`${a.span?a.span*4.5:9}%`,padding:`${e.componentSetting.keyGutter}px`})},[o("div",{class:"keys-box",onClick:l=>e.handleKeyClick(l,r),style:f({background:e.componentSetting.keyBackground,borderRadius:e.componentSetting.keyBorderRadius})},[o("div",ue,[o("div",ce,y(r),1),e.userSettingKeyMap[r]?(g(),c("div",{key:0,class:"edit-icon-box",onClick:L(l=>e.showDialog(l,r),["stop"])},ye,8,ge)):v("",!0),e.userSettingKeyMap[r]?v("",!0):(g(),c("div",fe,me)),e.userSettingKeyMap[r]?(g(),c("div",ve,[o("img",{class:"icon",src:e.userSettingKeyMap[r].icon||e.getTargetIconV2(e.userSettingKeyMap[r].url),alt:"link",onError:t[0]||(t[0]=(...l)=>e.handleImgError&&e.handleImgError(...l))},null,40,Se),o("div",he,y(e.userSettingKeyMap[r].remark.slice(0,1)),1)])):v("",!0),e.userSettingKeyMap[r]&&e.userSettingKeyMap[r].remark?(g(),c("div",Ce,y(e.userSettingKeyMap[r].remark),1)):v("",!0)])],12,le)],6))),128)),o("div",Ie,[o("div",{class:"keys-box",style:f({background:e.componentSetting.keyBackground,borderRadius:e.componentSetting.keyBorderRadius})},we,4)])],4),Y(k,{modelValue:e.dialogVisible,"onUpdate:modelValue":t[6]||(t[6]=a=>e.dialogVisible=a),width:"300px",height:"330px",closeOnClickOutside:"",onClose:e.handleDialogClose},{footer:U(()=>[o("div",Be,[o("button",{type:"button",class:"btn",disabled:!e.editState.editingInfo.url&&!e.editState.editingInfo.remark,onClick:t[4]||(t[4]=(...a)=>e.clearEidtInfo&&e.clearEidtInfo(...a))},y(e.$t("\u6E05\u7A7A")),9,Ve),o("button",{type:"button",class:"btn btn-primary",loading:e.saveLoading,onClick:t[5]||(t[5]=(...a)=>e.handleUserKeySave&&e.handleUserKeySave(...a))},y(e.$t("\u786E\u8BA4")),9,Ue)])]),default:U(()=>[I(o("div",{class:"edit-content",onKeydown:t[3]||(t[3]=L(()=>{},["stop"]))},[o("div",Me,y(e.editState.editingInfo.key),1),o("div",{class:C(["row-input",{active:e.editState.editingInfo.url.length>0}])},[I(o("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=a=>e.editState.editingInfo.url=a)},null,512),[[O,e.editState.editingInfo.url]]),Ke,Ee],2),o("div",{class:C(["row-input",{active:e.editState.editingInfo.remark.length>0}])},[I(o("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=a=>e.editState.editingInfo.remark=a)},null,512),[[O,e.editState.editingInfo.remark]]),_e,Ae],2)],544),[[ie,e.editState.editingActive]])]),_:1},8,["modelValue","onClose"])],4)}var ze=J(re,[["render",Le],["__scopeId","data-v-db1d19c0"]]);export{ze as default};