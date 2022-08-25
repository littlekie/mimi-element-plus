import{d as $,y as k,a as _,q as z,z as V,A as B,r as E,_ as b,o as m,c as p,e as u,n as g,t as w,B as M,C as x}from"../app.bd691248.js";const I=$({name:"TextMarquee",props:{text:{type:String,default:""},i18nText:{type:String,default:""},html:{type:String,default:""},active:{type:Boolean,default:!1},delay:{type:Number,default:1500},speed:{type:Number,default:60},fullScroll:{type:Boolean,default:!1},loop:{type:Boolean,default:!0},isArab:{type:Boolean,default:!1}},setup(e){const{text:s,html:i,active:d,delay:o,speed:r,fullScroll:c,loop:l}=k(e);let f=_(()=>e.isArab?s.value.split(/\s/).reverse().join(" "):s.value),C=_(()=>e.isArab?i.value.split(/\s/).reverse().join(" "):i.value);z(()=>{n.checkScroll()}),V(()=>{n.clear()}),B(()=>{n.clear(),n.checkScroll()});const v=E();function S(){var t;return(t=v.value)==null?void 0:t.getElementsByClassName("textContent")[0]}const n={clear(t=null){let a=t||S();a&&(a.style.display="",a.style.textIndent="0",a.style.animation="",l.value||a.removeEventListener("animationend",n.animationendCallback),a=null)},checkScroll(){let t=S();if(t)if(d.value){let a=v.value.firstElementChild;const h=a.scrollWidth,y=a.clientWidth;if(h===y&&(t.style.display="inline-block"),h>y){t.style.display="inline-block";const T=h*1.05*1e3/r.value;t.style.animation=`${e.isArab?"ara-":""}${c.value?"full-":""}srcoll ${T}ms linear ${o.value}ms ${l.value?"infinite":""}`,l.value||t.addEventListener("animationend",n.animationendCallback),c.value?t.style.textIndent=`${y}px`:t=null}a=null}else n.clear(t);t=null},animationendCallback(t,a){n.clear(a||t.target)}};return{showText:f,showHtml:C,wrapper:v}}}),N={class:"marqueeDiv",tabindex:"-1",ref:"wrapper"},W=["data-active"],q=["data-active"],A=["data-active","innerHTML"];function H(e,s,i,d,o,r){return m(),p("div",N,[u("div",{class:g(["marquee-warpper",e.fullScroll?"full":"normal"])},[e.i18nText?(m(),p("span",{key:0,class:g(["textContent",e.i18nText]),"data-active":e.active},null,10,W)):e.text?(m(),p("span",{key:1,class:"textContent","data-active":e.active},w(e.showText),9,q)):(m(),p("span",{key:2,class:"textContent","data-active":e.active,innerHTML:e.showHtml},null,8,A))],2)],512)}var U=b(I,[["render",H],["__scopeId","data-v-3eb23e2d"]]);const L=$({name:"MenuItemProgress",props:{modelValue:{type:Number,default:0},maxSize:{type:Number,default:0},minSize:{type:Number,default:0},isFocus:{type:Boolean,default:0}},emits:["update:modelValue","onChange"],setup(e,{emit:s,expose:i}){const d=_(()=>{const l=e.modelValue+e.minSize,f=e.maxSize+e.minSize;return l/f*100+"%"});function o(){e.modelValue>e.minSize&&c(e.modelValue-1)}function r(){e.modelValue<e.maxSize&&c(e.modelValue+1)}function c(l){s("update:modelValue",l),M().then(()=>s("onChange",l))}return i({RIGHT:r,LEFT:o}),{progressWidth:d,RIGHT:r,LEFT:o}}}),F={class:"wh-ap-currentValue"},j={class:"wh-apc-line"},D={class:"wh-ap-maxSize"};function P(e,s,i,d,o,r){return m(),p("div",{class:g(["wh-option-progress menu-item-progress",{highlight:e.isFocus}]),role:"menuItemBar"},[u("div",F,[u("div",j,[u("div",{style:x({width:e.progressWidth}),class:"wh-apc-progress"},null,4),u("div",{style:x({left:e.modelValue/e.maxSize*100+"%"}),class:"wh-apc-ball"},null,4)])]),u("div",D,w(e.modelValue),1)],2)}var G=b(L,[["render",P]]);export{G as M,U as T};
