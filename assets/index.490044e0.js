var A=Object.defineProperty;var y=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var S=(t,e,n)=>e in t?A(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,_=(t,e)=>{for(var n in e||(e={}))F.call(e,n)&&S(t,n,e[n]);if(y)for(var n of y(e))T.call(e,n)&&S(t,n,e[n]);return t};import{_ as j,u as z,m as B,f as D}from"./index.528048ac.js";import{i as E,j as w,r as g,o as $,b as M,M as N,f as i,h as c,D as r,G as d,F as U,y as V,u as k,p as q,g as G,e as s,H as x}from"./vendor.302cf276.js";const H=t=>(q("data-v-1c9fb5f7"),t=t(),G(),t),O={class:"weibo"},P=H(()=>c("div",{class:"logo-text"},"\u5FAE\u535A\u70ED\u641C",-1)),R={key:1,class:"loading"},W={key:2,class:"error"},J={key:3,class:"list"},K={class:"num",style:{width:"24px",height:"24px"}},Q=["src"],X={class:"title"},Y=["href"],Z={key:0,class:"count"},tt={class:"icon",style:{width:"24px",height:"24px"}},et=["src"],ot=E({props:{componentSetting:{type:Object,required:!0}},setup(t){const e=t,n=z(),b=w(()=>n.isLock),C="https://h5.sinaimg.cn/m/weibo-lite/img/pwalogo.417d1674.svg",m=g([]),u=g(!1),p=g(!1),f=async()=>{try{u.value=!0,p.value=!1;const l=await fetch(`${D}/api/weiboList?limit=${e.componentSetting.limit||10}`),{list:v}=await l.json();m.value=v.map(o=>({num:o.pic,id:o.desc,title:o.desc,icon:o.icon,link:o.scheme,count:~~(o.desc_extr/1e4)}))}catch(l){p.value=!0,console.error(l)}finally{u.value=!1}};let a;function h(){f(),a&&window.clearInterval(a),a=window.setInterval(()=>{f()},e.componentSetting.duration*60*1e3)}$(()=>h()),M(()=>window.clearInterval(a)),N(()=>[e.componentSetting.duration,e.componentSetting.limit],()=>h());const I=w(()=>B(e.componentSetting.position)),L=()=>{e.componentSetting.clickActionType===1?h():e.componentSetting.clickActionType===2&&window.open("https://weibo.com/")};return(l,v)=>(s(),i("div",{class:"wrapper",style:r(_({fontSize:t.componentSetting.textFontSize+"px",color:t.componentSetting.textColor,textShadow:t.componentSetting.textShadow,padding:t.componentSetting.padding+"px",fontFamily:t.componentSetting.fontFamily},k(I)))},[c("div",O,[t.componentSetting.showTitle!==!1?(s(),i("div",{key:0,class:"logo",style:r({cursor:t.componentSetting.clickActionType?"pointer":"default"}),onClick:L},[c("img",{src:C,alt:"Weibo",style:r({filter:`drop-shadow(${t.componentSetting.iconShadow})`})},null,4),P],4)):d("",!0),u.value?(s(),i("div",R,"Loading...")):p.value?(s(),i("div",W,"Something error!")):(s(),i("div",J,[(s(!0),i(U,null,V(m.value,o=>(s(),i("div",{class:"list-item",key:o.id},[c("div",K,[o.num?(s(),i("img",{key:0,src:o.num,style:{width:"100%",height:"100%"}},null,8,Q)):d("",!0)]),c("div",X,[c("a",{href:o.link,target:"_blank",style:r(k(b)?"":"pointer-events: none")},x(o.title),13,Y)]),o.count?(s(),i("div",Z,x(o.count)+"w",1)):d("",!0),c("div",tt,[o.icon?(s(),i("img",{key:0,src:o.icon,style:{width:"100%",height:"100%"}},null,8,et)):d("",!0)])]))),128))]))])],4))}});var ct=j(ot,[["__scopeId","data-v-1c9fb5f7"]]);export{ct as default};