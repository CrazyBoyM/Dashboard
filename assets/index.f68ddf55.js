import{U as p}from"./Unset.52eb93c5.js";import{_ as c,u as l}from"./index.aa7b76d5.js";import{i as m,j as s,f as u,D as a,z as d,q as _,e as t}from"./vendor.6c4554d3.js";const f=m({name:"Iframe",components:{Unset:p},props:{element:{type:Object,required:!0},componentSetting:{type:Object,required:!0}},setup(e){const n=s(()=>/https?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(e.componentSetting.url)?e.componentSetting.url:"http://"+e.componentSetting.url),r=l(),o=s(()=>r.isLock);return{url:n,isLock:o}}}),y=["src"];function F(e,n,r,o,k,v){const i=_("Unset");return t(),u("div",{class:"wrapper",style:a({borderRadius:e.element.borderRadius+"px"})},[e.componentSetting.url?(t(),u("iframe",{key:0,src:e.url,style:a({width:"100%",height:"100%",pointerEvents:e.isLock?"all":"none"}),frameborder:"0"},null,12,y)):(t(),d(i,{key:1,tips:`\u{1F4AB}${e.$t("IFrame\u8DEF\u5F84\u4E22\u5931\uFF0C\u8BF7\u8FDB\u884C\u914D\u7F6E")}`},null,8,["tips"]))],4)}var B=c(f,[["render",F],["__scopeId","data-v-9f855f76"]]);export{B as default};
