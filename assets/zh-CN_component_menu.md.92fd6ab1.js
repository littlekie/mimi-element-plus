var ns=Object.defineProperty;var as=(s,l,n)=>l in s?ns(s,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[l]=n;var F=(s,l,n)=>(as(s,typeof l!="symbol"?l+"":l,n),n);import{d as O,t as ls,a as x,b as Y,e as ts,f as os,r as f,_ as j,o as D,c as A,g as c,n as E,h as V,u as m,i as $,j as J,k as ps,l as W,m as cs,w as G,p as X,F as L,q as Q,s as H,v as rs,x as is,y as ds,z as Ds,A as Z,B as ss,C as ys}from"./app.3850c51d.js";const us=O({name:"TextMarquee",props:{text:{type:String,default:""},i18nText:{type:String,default:""},html:{type:String,default:""},active:{type:Boolean,default:!1},delay:{type:Number,default:1500},speed:{type:Number,default:60},fullScroll:{type:Boolean,default:!1},loop:{type:Boolean,default:!0},isArab:{type:Boolean,default:!1}},setup(s){const{text:l,html:n,active:o,delay:a,speed:d,fullScroll:r,loop:t}=ls(s);let y=x(()=>s.isArab?l.value.split(/\s/).reverse().join(" "):l.value),I=x(()=>s.isArab?n.value.split(/\s/).reverse().join(" "):n.value);Y(()=>{v.checkScroll()}),ts(()=>{v.clear()}),os(()=>{v.clear(),v.checkScroll()});const _=f();function k(){var u;return(u=_.value)==null?void 0:u.getElementsByClassName("textContent")[0]}const v={clear(u=null){let h=u||k();h&&(h.style.display="",h.style.textIndent="0",h.style.animation="",t.value||h.removeEventListener("animationend",v.animationendCallback),h=null)},checkScroll(){let u=k();if(u)if(o.value){let h=_.value.firstElementChild;const M=h.scrollWidth,N=h.clientWidth;if(M===N&&(u.style.display="inline-block"),M>N){u.style.display="inline-block";const w=M*1.05*1e3/d.value;u.style.animation=`${s.isArab?"ara-":""}${r.value?"full-":""}srcoll ${w}ms linear ${a.value}ms ${t.value?"infinite":""}`,t.value||u.addEventListener("animationend",v.animationendCallback),r.value?u.style.textIndent=`${N}px`:u=null}h=null}else v.clear(u);u=null},animationendCallback(u,h){v.clear(h||u.target)}};return{showText:y,showHtml:I,wrapper:_}}}),Fs={class:"marqueeDiv",tabindex:"-1",ref:"wrapper"},Cs=["data-active"],As=["data-active"],hs=["data-active","innerHTML"];function vs(s,l,n,o,a,d){return D(),A("div",Fs,[c("div",{class:E(["marquee-warpper",s.fullScroll?"full":"normal"])},[s.i18nText?(D(),A("span",{key:0,class:E(["textContent",s.i18nText]),"data-active":s.active},null,10,Cs)):s.text?(D(),A("span",{key:1,class:"textContent","data-active":s.active},V(s.showText),9,As)):(D(),A("span",{key:2,class:"textContent","data-active":s.active,innerHTML:s.showHtml},null,8,hs))],2)],512)}var ms=j(us,[["render",vs],["__scopeId","data-v-3eb23e2d"]]);const fs=["id"],_s={class:"wh-item-content"},gs={key:1,class:"iconfont menuItem__postfix icon-Keypad_right"},Is={key:2,class:"iconfont menuItem__postfix icon-Selection"},Ts=O({__name:"menu-item",props:{node:null,id:null,isFocus:{type:Boolean},isActive:{type:Boolean}},setup(s,{expose:l}){const n=s,o={0:"icon-epg-DVB",1:"icon-epg-TXT",2:"icon-epg-Hearing_Impaired_d",3:"icon-Visually_Impaired_d",4:"icon-epg-Dolby_d",5:"icon-epg_AAC"},a=x(()=>n.node.iconType>-1?o[n.node.iconType]:null),d=x(()=>!n.node.isLeaf&&!n.node.isDisabled),r=x(()=>n.node.isLeaf&&n.node.isChecked);return l({hasExpandIcon:d,hasCheckIcon:r}),(t,y)=>(D(),A("div",{id:s.id+"",class:E(["wh-list-item wh-menu-item",{is_disabled:s.node.isDisabled,highlight:s.isFocus,in_active_path:s.isActive}]),role:"menuItem"},[m(a)?(D(),A("div",{key:0,class:E(["iconfont menuItem__Prefix",m(a)])},null,2)):$("",!0),c("div",_s,[J(ms,{fullScroll:!1,delay:-1e3,"i18n-text":s.node.cssName,text:s.node.cssName?"":s.node.text,active:s.isFocus},null,8,["i18n-text","text","active"]),c("span",null,V(s.node.nameExtra),1)]),m(d)?(D(),A("div",gs)):m(r)?(D(),A("div",Is)):$("",!0)],10,fs))}}),xs=O({name:"MenuItemProgress",props:{modelValue:{type:Number,default:0},maxSize:{type:Number,default:0},minSize:{type:Number,default:0},isFocus:{type:Boolean,default:0}},emits:["update:modelValue","onChange"],setup(s,{emit:l,expose:n}){const o=x(()=>{const t=s.modelValue+s.minSize,y=s.maxSize+s.minSize;return t/y*100+"%"});function a(){s.modelValue>s.minSize&&r(s.modelValue-1)}function d(){s.modelValue<s.maxSize&&r(s.modelValue+1)}function r(t){l("update:modelValue",t),ps().then(()=>l("onChange",t))}return n({RIGHT:d,LEFT:a}),{progressWidth:o,RIGHT:d,LEFT:a}}}),Es={class:"wh-ap-currentValue"},Ms={class:"wh-apc-line"},Ns={class:"wh-ap-maxSize"};function bs(s,l,n,o,a,d){return D(),A("div",{class:E(["wh-option-progress menu-item-progress",{highlight:s.isFocus}]),role:"menuItemBar"},[c("div",Es,[c("div",Ms,[c("div",{style:W({width:s.progressWidth}),class:"wh-apc-progress"},null,4),c("div",{style:W({left:s.modelValue/s.maxSize*100+"%"}),class:"wh-apc-ball"},null,4)])]),c("div",Ns,V(s.modelValue),1)],2)}var ks=j(xs,[["render",bs]]);const K={OPTION_UAM_VOL_VISU:[0,100],OPTION_UAM_DIALOG_ENHANCE_LEVEL:[0,9]};var B=(s=>(s[s.IS_DEFAULT=-1]="IS_DEFAULT",s[s.IS_RADIO=0]="IS_RADIO",s[s.IS_BAR=2]="IS_BAR",s))(B||{});class q{constructor(l,n){F(this,"nodeData");F(this,"parent");F(this,"data",[]);F(this,"cssName","");F(this,"name","");F(this,"value",0);F(this,"progressValue",0);F(this,"progressMaxSize",0);F(this,"progressMinSize",0);F(this,"level");F(this,"isChecked");F(this,"iconType",-1);F(this,"hasChildren",!1);F(this,"disabled",!1);F(this,"chLockState",!1);F(this,"nodeType",-1);F(this,"children",[]);this.nodeData=l,this.parent=n||null,this.level=this.parent?this.parent.level+1:1,this.isChecked=!1,this.initState(),this.initChildren()}initState(){const{index:l,label:n,name:o,selected:a,iconType:d,type:r,mlang_key:t,disabled:y,chLockState:I}=this.nodeData;this.value=l,this.name=o||"",this.cssName=t||"",this.isChecked=Boolean(a),this.iconType=d||-1,this.nodeType=r,this.disabled=Boolean(y)||!1,this.chLockState=Boolean(I)||!1,this.nodeType===2&&(this.progressValue=a||0,this.progressMaxSize=K[this.cssName][1],this.progressMinSize=K[this.cssName][0])}initChildren(){const l=this.nodeData.data||[];this.hasChildren=Array.isArray(l)&&l.length>0,this.children=l.map(n=>new q(n,this))}get isDisabled(){const{nodeData:l,parent:n}=this;return Boolean(l.disabled)||Boolean(n&&n.isDisabled)}get isLeaf(){return!this.hasChildren}get nameExtra(){return this.nodeData.nameExtra||""}get text(){return this.name}getNodeType(){return this.nodeType}}function es(){const s=f([]);return s.value.set=l=>{l&&s.value.push(l)},cs(()=>{s.value.length=0}),s}function Ss(s){return s===void 0}const Os=["id"],ws={class:"wh-sc-header"},Bs={class:"wh-sc-header-title"},Ls=c("div",{class:"underline"},null,-1),$s={class:"arrow-up iconfont"},Vs={class:"wh-sc-content"},Hs={class:"wh-sc-content-list"},Us={class:"arrow-down iconfont"},Ps=O({__name:"sub-menu",props:{id:{default:0},subMenuData:null,currentFocusMenuIndex:{default:0},currentFocusItemIndex:{default:0},cssHeaderTitle:null,headerTitle:null},emits:["clickItemHandler","collapseSubMenu","berforeClose","volumeBarAdjust","openNextMenu","update:currentFocusItemIndex","changeFocusItem"],setup(s,{expose:l,emit:n}){const o=s,a=f(0),d=f(0),r=f(!1),t=f(!1),y=x(()=>o.currentFocusMenuIndex===o.id);y.value&&g(o.currentFocusItemIndex);const I=x(()=>o.subMenuData[a.value]),_=es();G(()=>o.currentFocusItemIndex,e=>{y.value&&g(e)}),G(()=>o.subMenuData,e=>{if((e==null?void 0:e.length)&&y.value){const C=e.findIndex(i=>i.isChecked);a.value=C>-1?C:0}},{deep:!0,immediate:!0});function k(e,C){if(!e.isDisabled){if(!e.isLeaf)return g(C),n("openNextMenu",e);e.nodeType===B.IS_RADIO&&!e.isChecked&&(o.subMenuData[a.value].isChecked=!1,e.isChecked=!0),!e.parent&&e.isLeaf&&n("collapseSubMenu",e),g(C),n("clickItemHandler",e)}}function v(e){var C;(C=S[e])==null||C.call(S)}function u(){const e=o.subMenuData[a.value];e.nodeType===B.IS_RADIO&&!e.isChecked?(p(e),n("clickItemHandler",e)):e.isLeaf?n("clickItemHandler",e):n("openNextMenu",e)}function h(){const{subMenuData:e}=o;let C=a.value;for(let i=e.length-1;i>=0;i--)if(!e[i].isDisabled&&i<a.value)return C=i,C;return C}function M(){const{subMenuData:e}=o;let C=a.value;for(let i=0;i<e.length;i++)if(!e[i].isDisabled&&i>a.value)return C=i,C;return C}function N(){a.value===0?g(o.subMenuData.length-1):g(h())}function w(){a.value===o.subMenuData.length-1?g(0):g(M())}function U(){var e;(e=_.value[0])==null||e.RIGHT()}function P(){var e;(e=_.value[0])==null||e.LEFT()}function R(){I.value.parent?n("collapseSubMenu",I.value):n("berforeClose")}function p(e){e.nodeType===B.IS_RADIO&&!e.isChecked&&(o.subMenuData[d.value].isChecked=!1,e.isChecked=!0)}function T(e){n("volumeBarAdjust",e)}function g(e){d.value=a.value,a.value=e,n("update:currentFocusItemIndex",e),n("changeFocusItem",o.subMenuData[e])}const S={DOWN:w,UP:N,RIGHT:U,LEFT:P,ENTER:u,BACK:R};return l({menuItemActiveIndex:a,activeMenu:y,KEYDOWN:v,lastMenuItemActiveIndex:d}),(e,C)=>(D(),A("div",{id:"sidebar_"+s.id,class:"wh-sidebar",role:"subMenu"},[c("div",ws,[s.id===0?X(e.$slots,"header",{key:0},()=>[m(Ss)(s.cssHeaderTitle||s.headerTitle)?$("",!0):(D(),A(L,{key:0},[c("div",Bs,[c("span",{class:E(["wh-st-text",s.cssHeaderTitle])},V(s.headerTitle)+"}",3)]),Ls],64))]):$("",!0)]),c("div",$s,[c("span",{class:E(["arrow",{"icon-switch_down2":r.value}])},null,2)]),c("div",Vs,[c("div",Hs,[(D(!0),A(L,null,Q(s.subMenuData,(i,b)=>(D(),A(L,null,[i.nodeType===m(B).IS_BAR?(D(),H(ks,{isFocus:m(y)&&s.currentFocusItemIndex===b,ref_for:!0,ref:m(_).set,key:b+i.nodeType,"max-size":i.progressMaxSize,"min-size":i.progressMinSize,modelValue:i.progressValue,"onUpdate:modelValue":z=>i.progressValue=z,onOnChange:z=>T(i)},null,8,["isFocus","max-size","min-size","modelValue","onUpdate:modelValue","onOnChange"])):(D(),H(Ts,{id:b,node:i,isFocus:m(y)&&s.currentFocusItemIndex===b,isActive:!m(y)&&a.value===b,key:b+i.name,onClick:rs(z=>k(i,b),["stop"])},null,8,["id","node","isFocus","isActive","onClick"]))],64))),256))])]),c("div",Us,[c("span",{class:E(["arrow",{"icon-switch_down2":t.value}])},null,2)])],8,Os))}}),Rs={class:"option-wrapper menu",role:"menu"},zs=O({__name:"menu",props:{data:null,cssHeaderTitle:null,headerTitle:null,visible:{type:Boolean}},emits:["changeFocusItem","onEnter","closeMenu"],setup(s,{expose:l,emit:n}){const o=s,a=f([]),d=es(),r=f(0),t=f(0),y=x(()=>a.value[r.value][t.value]),I=x(()=>k(y.value));let _=f({});function k(p){return _.value={},v(p),_.value}function v(p){p.parent&&(_.value[p.parent.level-1]=p.parent.value,v(p.parent))}function u(p){a.value=a.value.slice(0,p.level),a.value.push(p.children);let T=0;T=p.children.findIndex(g=>g.isChecked),t.value=T>-1?T:0,r.value=p.level}function h(p){p.parent?(r.value-=1,t.value=p.parent.value,a.value=a.value.slice(0,p.level-1)):(a.value=a.value.slice(0,1),r.value=0,t.value=p.value)}function M(){console.log("berforeClose"),n("closeMenu")}function N(p){n("changeFocusItem",p)}function w(p){n("onEnter",p)}function U(){a.value=[o.data.map(p=>new q(p))]}function P(p){d.value[r.value].KEYDOWN(p)}function R(){U(),a.value[0]&&(t.value=a.value[0].findIndex(p=>p.isChecked)),t.value=t.value>-1?t.value:0}return R(),l({activeMenuItemRecord:I,activeMenuItemData:_,menuList:a,currentItemIndex:t,currentMenuIndex:r,currentMenuItemData:y,subMenuRefList:d,KEYDOWN:P}),(p,T)=>is((D(),A("div",Rs,[(D(!0),A(L,null,Q(a.value,(g,S)=>(D(),H(Ps,{id:S,key:S,ref_for:!0,ref:m(d).set,currentFocusItemIndex:t.value,"onUpdate:currentFocusItemIndex":T[0]||(T[0]=e=>t.value=e),currentFocusMenuIndex:r.value,"onUpdate:currentFocusMenuIndex":T[1]||(T[1]=e=>r.value=e),cssHeaderTitle:s.cssHeaderTitle,headerTitle:s.headerTitle,"sub-menu-data":g,onOpenNextMenu:u,onChangeFocusItem:N,onCollapseSubMenu:h,onBerforeClose:M,onClickItemHandler:w},Ds({_:2},[p.$slots.header?{name:"header",fn:Z(()=>[X(p.$slots,"header")])}:void 0]),1032,["id","currentFocusItemIndex","currentFocusMenuIndex","cssHeaderTitle","headerTitle","sub-menu-data"]))),128))],512)),[[ds,s.visible]])}}),qs=[{data:[],iconType:-1,index:0,mlang_key:"MAIN_SELECT_TUNER_MODE",selected:0,type:1},{data:[],iconType:-1,index:1,mlang_key:"MAIN_TI_PROGRAMME_INFO",selected:0,type:1},{data:[{data:[{data:[],iconType:-1,index:0,mlang_key:"OFF",selected:0,type:0},{data:[],iconType:-1,index:1,mlang_key:"ON",selected:1,type:0}],iconType:-1,index:0,mlang_key:"OPTION_UAM_VISU_IMP",selected:0,type:-1},{data:[{data:[],iconType:-1,index:0,mlang_key:"OFF",selected:1,type:0},{data:[],iconType:-1,index:1,mlang_key:"ON",selected:0,type:0}],iconType:-1,index:1,mlang_key:"OPTION_UAM_HEAR_IMP",selected:0,type:-1},{data:[{data:[],iconType:-1,index:0,mlang_key:"OPTION_UAM_VOL_VISU",selected:95,type:2}],iconType:-1,index:2,mlang_key:"OPTION_UAM_VOL_VISU",selected:0,type:-1},{data:[{data:[],iconType:-1,index:0,mlang_key:"OFF",selected:0,type:0},{data:[],iconType:-1,index:1,mlang_key:"ON",selected:1,type:0}],iconType:-1,index:0,mlang_key:"OPTION_UAM_DIALOG_ENHANCE",selected:0,type:-1},{data:[{data:[],iconType:-1,index:0,mlang_key:"OPTION_UAM_DIALOG_ENHANCE_LEVEL",selected:0,type:2}],iconType:-1,index:1,mlang_key:"OPTION_UAM_DIALOG_ENHANCE_LEVEL",selected:0,type:-1}],iconType:-1,index:2,mlang_key:"OPTION_UAM",selected:0,type:-1},{data:[{data:[],iconType:-1,index:0,mlang_key:"OPTION_SUBTITLES_OFF",selected:1,type:0},{data:[],iconType:-1,index:1,mlang_key:"OPTION_SUBTITLES_ON",selected:0,type:0}],iconType:-1,index:3,mlang_key:"OPTION_SBTL",selected:0,type:-1},{data:[{data:[],iconType:-1,index:-1,mlang_key:"MAIN_NONE",name:"None",selected:1,type:1}],iconType:-1,index:4,mlang_key:"OPTION_SBTL_LANG",selected:0,status:0,type:-1},{data:[],index:5,mlang_key:"MAIN_CHANNEL_INFO",type:1},{data:[],index:6,mlang_key:"MAIN_CHANNEL_INSTALLATION",type:1}];const Ws={class:"menu_contain",id:"menu_contain"},Gs=c("div",{style:{"font-size":".3rem",color:"red"}}," i am menu title ",-1),Ks=O({__name:"menu",setup(s){const l=f(),n={ArrowDown:"DOWN",ArrowUp:"UP",ArrowLeft:"LEFT",ArrowRight:"RIGHT",Enter:"ENTER",Backspace:"BACK",Escape:"BACK"};Y(()=>{window.document.addEventListener("keyup",r=>{var t;(t=l.value)==null||t.KEYDOWN(n[r.key])})});const o=f(!1),a=f();function d(r){a.value=r}return(r,t)=>{var y;return D(),A(L,null,[c("div",Ws,[o.value?(D(),H(m(zs),{key:0,data:m(qs),onCloseMenu:t[0]||(t[0]=I=>o.value=!1),onChangeFocusItem:d,ref_key:"reference",ref:l,visible:o.value},{header:Z(()=>[Gs]),_:1},8,["data","visible"])):$("",!0)]),c("div",null," \u5F53\u524D\u9009\u4E2D\u7684\u83DC\u5355\u662F\uFF1A"+V((y=a.value)==null?void 0:y.cssName),1),c("button",{style:{background:"#A3FE65"},onClick:t[1]||(t[1]=I=>o.value=!o.value)},"toggle menu")],64)}}}),Ys=c("h1",{id:"menu",tabindex:"-1"},[ss("Menu "),c("a",{class:"header-anchor",href:"#menu","aria-hidden":"true"},"#")],-1),js=c("p",null,"tv \u4FA7\u8FB9\u680F Menu",-1),Js=c("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[ss("\u57FA\u7840\u7528\u6CD5 "),c("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),Xs=ys(`<h3 id="\u6E90\u7801\u4F7F\u7528\u65B9\u5F0F" tabindex="-1">\u6E90\u7801\u4F7F\u7528\u65B9\u5F0F <a class="header-anchor" href="#\u6E90\u7801\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a></h3><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">onMounted</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Menu</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">MenuInstance</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@mini-element-plus/components/menu</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mebuData</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@mini-element-plus/components/menu/__test__/mock</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@mini-element-plus/components/menu/style/index.scss</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> reference </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">MenuInstance</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> actions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">ArrowDown</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">DOWN</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">ArrowUp</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">UP</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">ArrowLeft</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">LEFT</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">ArrowRight</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">RIGHT</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">Enter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ENTER</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">Backspace</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">BACK</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">Escape</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">BACK</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">onMounted</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">keyup</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">event</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">reference</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">?.</span><span style="color:#82AAFF;">KEYDOWN</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">actions</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">])</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isShow </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">menu_contain</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#F78C6C;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">menu_contain</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Menu</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">mebuData</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">closeMenu</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">isShow</span><span style="color:#89DDFF;">=</span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">reference</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">visible</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">isShow</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">header</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">font-size:.3rem;color:red</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          i am menu title</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Menu</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">background:#A3FE65</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">isShow</span><span style="color:#89DDFF;"> = !</span><span style="color:#A6ACCD;">isShow</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">toggle menu</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@mini-element-plus/components/menu/style/index.scss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../../../src/assets/eng.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">menu_contain</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">option-wrapper</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">html</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>data: IMenuItemData[] cssHeaderTitle?: string headerTitle?: string visible?: boolean</p><h2 id="menu-\u5C5E\u6027" tabindex="-1">Menu \u5C5E\u6027 <a class="header-anchor" href="#menu-\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th><th>Required</th></tr></thead><tbody><tr><td><code>data</code></td><td>\u4FA7\u8FB9\u680F\u7684\u6570\u636E\u683C\u5F0F</td><td><code>IMenuItemData[]</code></td><td><code>[]</code></td><td>Yes</td></tr><tr><td><code>cssHeaderTitle</code></td><td>\u4FA7\u8FB9\u680Fcss\u5934\u90E8\u6587\u5B57</td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Noe</td></tr><tr><td><code>headerTitle</code></td><td>\u6587\u672C\u7684\u5934\u90E8\u6587\u5B57</td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Noe</td></tr><tr><td><code>visible</code></td><td>\u5F53\u524D Menu \u662F\u5426\u8981\u663E\u793A</td><td><code>boolean</code></td><td><code>true</code></td><td>Noe</td></tr></tbody></table>`,5),ee=JSON.parse('{"title":"Menu","description":"","frontmatter":{"title":"Menu","lang":"en-US"},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":3,"title":"\u6E90\u7801\u4F7F\u7528\u65B9\u5F0F","slug":"\u6E90\u7801\u4F7F\u7528\u65B9\u5F0F"},{"level":2,"title":"Menu \u5C5E\u6027","slug":"menu-\u5C5E\u6027"}],"relativePath":"zh-CN/component/menu.md"}'),Qs={name:"zh-CN/component/menu.md"},ne=Object.assign(Qs,{setup(s){return(l,n)=>(D(),A("div",null,[Ys,js,Js,J(Ks),Xs]))}});export{ee as __pageData,ne as default};
