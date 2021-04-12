import{d as e,f as t,p as n,h as a,o as l,j as s,s as o,F as c,k as r,t as i,q as u,u as d}from"./element-plus.7d629863.js";var v=e({name:"PositionSelector",props:{modelValue:{type:Number},showChineseText:{type:Boolean,default:!0},showEnglishText:{type:Boolean,default:!1}},setup(e,{emit:n}){const a=[{value:1,rotate:-45,cn:"左上",en:"Top Left"},{value:2,rotate:0,cn:"顶部水平居中",en:"Top Center"},{value:3,rotate:45,cn:"右上",en:"Top Right"},{value:4,rotate:-90,cn:"左侧垂直居中",en:"Center Left"},{value:5,cn:"居中",en:"Center"},{value:6,rotate:90,cn:"右侧垂直居中",en:"Center Right"},{value:7,rotate:-135,cn:"左下",en:"Bottom Left"},{value:8,rotate:180,cn:"底部水平居中",en:"Bottom Center"},{value:9,rotate:135,cn:"右下",en:"Bottom Right"}],l=t((()=>{var t;return e.showChineseText?null==(t=a.find((t=>t.value===e.modelValue)))?void 0:t.cn:""})),s=t((()=>{var t;return e.showEnglishText?null==(t=a.find((t=>t.value===e.modelValue)))?void 0:t.en:""}));return{valueList:a,handleIconClick:e=>{n("update:modelValue",e)},cnText:l,enText:s}}});const f=d();n("data-v-378c2499");const m={class:"position-selector"},p={class:"icon-wrapper"},x={key:0,class:"text"},C={key:1,class:"text"};a();const k=f(((e,t,n,a,d,v)=>(l(),s("div",m,[o("div",p,[(l(!0),s(c,null,r(e.valueList,(t=>(l(),s("div",{key:t.value,class:["icon",{active:e.modelValue===t.value}],onClick:n=>e.handleIconClick(t.value)},[o("i",{class:5===t.value?"el-icon-full-screen":"el-icon-top",style:5!==t.value&&`transform: rotate(${t.rotate}deg)`},null,6)],10,["onClick"])))),128))]),e.cnText?(l(),s("span",x,i(e.cnText),1)):u("",!0),e.enText?(l(),s("span",C,i(e.enText),1)):u("",!0)]))));function h(e){const t={justifyContent:"",alignItems:""};switch(e){case 1:break;case 2:t.justifyContent="center";break;case 3:t.justifyContent="flex-end";break;case 4:t.alignItems="center";break;case 5:t.justifyContent="center",t.alignItems="center";break;case 6:t.justifyContent="flex-end",t.alignItems="center";break;case 7:t.alignItems="flex-end";break;case 8:t.justifyContent="center",t.alignItems="flex-end";break;case 9:t.justifyContent="flex-end",t.alignItems="flex-end"}return t}v.render=k,v.__scopeId="data-v-378c2499",v.install=e=>{e.component(v.name,v)};const y=v;export default y;export{h as mapPosition};