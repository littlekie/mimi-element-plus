var Z=Object.defineProperty;var ss=(n,o,e)=>o in n?Z(n,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[o]=e;var D=(n,o,e)=>(ss(n,typeof o!="symbol"?o+"":o,e),e);import{T as ns,M as es}from"./chunks/mixins.97ba5d4a.js";import{d as O,a as I,o as d,c as h,u as C,n as x,b as N,e as r,f as W,t as $,r as _,g as as,w as K,h as Y,F as M,i as j,j as b,k as ls,l as os,v as ts,m as ps,p as J,q as cs,s as X,x as rs}from"./app.bd691248.js";const is=["id"],Ds={class:"wh-item-content"},ys={key:1,class:"iconfont menuItem__postfix icon-Keypad_right"},Fs={key:2,class:"iconfont menuItem__postfix icon-Selection"},ds=O({__name:"menu-item",props:{node:null,id:null,isFocus:{type:Boolean},isActive:{type:Boolean}},setup(n,{expose:o}){const e=n,t={0:"icon-epg-DVB",1:"icon-epg-TXT",2:"icon-epg-Hearing_Impaired_d",3:"icon-Visually_Impaired_d",4:"icon-epg-Dolby_d",5:"icon-epg_AAC"},a=I(()=>e.node.iconType>-1?t[e.node.iconType]:null),u=I(()=>!e.node.isLeaf&&!e.node.isDisabled),i=I(()=>e.node.isLeaf&&e.node.isChecked);return o({hasExpandIcon:u,hasCheckIcon:i}),(p,F)=>(d(),h("div",{id:n.id+"",class:x(["wh-list-item wh-menu-item",{is_disabled:n.node.isDisabled,highlight:n.isFocus,in_active_path:n.isActive}]),role:"menuItem"},[C(a)?(d(),h("div",{key:0,class:x(["iconfont menuItem__Prefix",C(a)])},null,2)):N("",!0),r("div",Ds,[W(ns,{fullScroll:!1,delay:-1e3,"i18n-text":n.node.cssName,text:n.node.cssName?"":n.node.text,active:n.isFocus},null,8,["i18n-text","text","active"]),r("span",null,$(n.node.nameExtra),1)]),C(u)?(d(),h("div",ys)):C(i)?(d(),h("div",Fs)):N("",!0)],10,is))}}),G={OPTION_UAM_VOL_VISU:[0,100],OPTION_UAM_DIALOG_ENHANCE_LEVEL:[0,9]};var E=(n=>(n[n.IS_DEFAULT=-1]="IS_DEFAULT",n[n.IS_RADIO=0]="IS_RADIO",n[n.IS_BAR=2]="IS_BAR",n))(E||{});class z{constructor(o,e){D(this,"nodeData");D(this,"parent");D(this,"data",[]);D(this,"cssName","");D(this,"name","");D(this,"value",0);D(this,"progressValue",0);D(this,"progressMaxSize",0);D(this,"progressMinSize",0);D(this,"level");D(this,"isChecked");D(this,"iconType",-1);D(this,"hasChildren",!1);D(this,"disabled",!1);D(this,"chLockState",!1);D(this,"nodeType",-1);D(this,"children",[]);this.nodeData=o,this.parent=e||null,this.level=this.parent?this.parent.level+1:1,this.isChecked=!1,this.initState(),this.initChildren()}initState(){const{index:o,label:e,name:t,selected:a,iconType:u,type:i,mlang_key:p,disabled:F,chLockState:f}=this.nodeData;this.value=o,this.name=t||"",this.cssName=p||"",this.isChecked=Boolean(a),this.iconType=u||-1,this.nodeType=i,this.disabled=Boolean(F)||!1,this.chLockState=Boolean(f)||!1,this.nodeType===2&&(this.progressValue=a||0,this.progressMaxSize=G[this.cssName][1],this.progressMinSize=G[this.cssName][0])}initChildren(){const o=this.nodeData.data||[];this.hasChildren=Array.isArray(o)&&o.length>0,this.children=o.map(e=>new z(e,this))}get isDisabled(){const{nodeData:o,parent:e}=this;return Boolean(o.disabled)||Boolean(e&&e.isDisabled)}get isLeaf(){return!this.hasChildren}get nameExtra(){return this.nodeData.nameExtra||""}get text(){return this.name}getNodeType(){return this.nodeType}}function Q(){const n=_([]);return n.value.set=o=>{o&&n.value.push(o)},as(()=>{n.value.length=0}),n}function us(n){return n===void 0}const Cs=["id"],As={class:"wh-sc-header"},hs={class:"wh-sc-header-title"},_s=r("div",{class:"underline"},null,-1),vs={class:"arrow-up iconfont"},fs={class:"wh-sc-content"},ms={class:"wh-sc-content-list"},gs={class:"arrow-down iconfont"},Is=O({__name:"sub-menu",props:{id:{default:0},subMenuData:null,currentFocusMenuIndex:{default:0},currentFocusItemIndex:{default:0},cssHeaderTitle:null,headerTitle:null},emits:["clickItemHandler","collapseSubMenu","berforeClose","volumeBarAdjust","openNextMenu","update:currentFocusItemIndex","changeFocusItem"],setup(n,{expose:o,emit:e}){const t=n,a=_(0),u=_(0),i=_(!1),p=_(!1),F=I(()=>t.currentFocusMenuIndex===t.id);F.value&&A(t.currentFocusItemIndex);const f=I(()=>t.subMenuData[a.value]),m=Q();K(()=>t.currentFocusItemIndex,s=>{F.value&&A(s)}),K(()=>t.subMenuData,s=>{if((s==null?void 0:s.length)&&F.value){const y=s.findIndex(c=>c.isChecked);a.value=y>-1?y:0}},{deep:!0,immediate:!0});function S(s,y){if(!s.isDisabled){if(!s.isLeaf)return A(y),e("openNextMenu",s);s.nodeType===E.IS_RADIO&&!s.isChecked&&(t.subMenuData[a.value].isChecked=!1,s.isChecked=!0),!s.parent&&s.isLeaf&&e("collapseSubMenu",s),A(y),e("clickItemHandler",s)}}function k(s){var y;(y=T[s])==null||y.call(T)}function L(){const s=t.subMenuData[a.value];s.nodeType===E.IS_RADIO&&!s.isChecked?(l(s),e("clickItemHandler",s)):s.isLeaf?e("clickItemHandler",s):e("openNextMenu",s)}function w(){const{subMenuData:s}=t;let y=a.value;for(let c=s.length-1;c>=0;c--)if(!s[c].isDisabled&&c<a.value)return y=c,y;return y}function B(){const{subMenuData:s}=t;let y=a.value;for(let c=0;c<s.length;c++)if(!s[c].isDisabled&&c>a.value)return y=c,y;return y}function U(){a.value===0?A(t.subMenuData.length-1):A(w())}function P(){a.value===t.subMenuData.length-1?A(0):A(B())}function H(){var s;(s=m.value[0])==null||s.RIGHT()}function R(){var s;(s=m.value[0])==null||s.LEFT()}function q(){f.value.parent?e("collapseSubMenu",f.value):e("berforeClose")}function l(s){s.nodeType===E.IS_RADIO&&!s.isChecked&&(t.subMenuData[u.value].isChecked=!1,s.isChecked=!0)}function v(s){e("volumeBarAdjust",s)}function A(s){u.value=a.value,a.value=s,e("update:currentFocusItemIndex",s),e("changeFocusItem",t.subMenuData[s])}const T={DOWN:P,UP:U,RIGHT:H,LEFT:R,ENTER:L,BACK:q};return o({menuItemActiveIndex:a,activeMenu:F,KEYDOWN:k,lastMenuItemActiveIndex:u}),(s,y)=>(d(),h("div",{id:"sidebar_"+n.id,class:"wh-sidebar",role:"subMenu"},[r("div",As,[n.id===0?Y(s.$slots,"header",{key:0},()=>[C(us)(n.cssHeaderTitle||n.headerTitle)?N("",!0):(d(),h(M,{key:0},[r("div",hs,[r("span",{class:x(["wh-st-text",n.cssHeaderTitle])},$(n.headerTitle)+"}",3)]),_s],64))]):N("",!0)]),r("div",vs,[r("span",{class:x(["arrow",{"icon-switch_down2":i.value}])},null,2)]),r("div",fs,[r("div",ms,[(d(!0),h(M,null,j(n.subMenuData,(c,g)=>(d(),h(M,null,[c.nodeType===C(E).IS_BAR?(d(),b(es,{isFocus:C(F)&&n.currentFocusItemIndex===g,ref_for:!0,ref:C(m).set,key:g+c.nodeType,"max-size":c.progressMaxSize,"min-size":c.progressMinSize,modelValue:c.progressValue,"onUpdate:modelValue":V=>c.progressValue=V,onOnChange:V=>v(c)},null,8,["isFocus","max-size","min-size","modelValue","onUpdate:modelValue","onOnChange"])):(d(),b(ds,{id:g,node:c,isFocus:C(F)&&n.currentFocusItemIndex===g,isActive:!C(F)&&a.value===g,key:g+c.name,onClick:ls(V=>S(c,g),["stop"])},null,8,["id","node","isFocus","isActive","onClick"]))],64))),256))])]),r("div",gs,[r("span",{class:x(["arrow",{"icon-switch_down2":p.value}])},null,2)])],8,Cs))}}),Ts={class:"option-wrapper menu",role:"menu"},Es=O({__name:"menu",props:{data:null,cssHeaderTitle:null,headerTitle:null,visible:{type:Boolean}},emits:["changeFocusItem","onEnter","closeMenu"],setup(n,{expose:o,emit:e}){const t=n,a=_([]),u=Q(),i=_(0),p=_(0),F=I(()=>a.value[i.value][p.value]),f=I(()=>S(F.value));let m=_({});function S(l){return m.value={},k(l),m.value}function k(l){l.parent&&(m.value[l.parent.level-1]=l.parent.value,k(l.parent))}function L(l){a.value=a.value.slice(0,l.level),a.value.push(l.children);let v=0;v=l.children.findIndex(A=>A.isChecked),p.value=v>-1?v:0,i.value=l.level}function w(l){l.parent?(i.value-=1,p.value=l.parent.value,a.value=a.value.slice(0,l.level-1)):(a.value=a.value.slice(0,1),i.value=0,p.value=l.value)}function B(){console.log("berforeClose"),e("closeMenu")}function U(l){e("changeFocusItem",l)}function P(l){e("onEnter",l)}function H(){a.value=[t.data.map(l=>new z(l))]}function R(l){u.value[i.value].KEYDOWN(l)}function q(){H(),a.value[0]&&(p.value=a.value[0].findIndex(l=>l.isChecked)),p.value=p.value>-1?p.value:0}return q(),o({activeMenuItemRecord:f,activeMenuItemData:m,menuList:a,currentItemIndex:p,currentMenuIndex:i,currentMenuItemData:F,subMenuRefList:u,KEYDOWN:R}),(l,v)=>os((d(),h("div",Ts,[(d(!0),h(M,null,j(a.value,(A,T)=>(d(),b(Is,{id:T,key:T,ref_for:!0,ref:C(u).set,currentFocusItemIndex:p.value,"onUpdate:currentFocusItemIndex":v[0]||(v[0]=s=>p.value=s),currentFocusMenuIndex:i.value,"onUpdate:currentFocusMenuIndex":v[1]||(v[1]=s=>i.value=s),cssHeaderTitle:n.cssHeaderTitle,headerTitle:n.headerTitle,"sub-menu-data":A,onOpenNextMenu:L,onChangeFocusItem:U,onCollapseSubMenu:w,onBerforeClose:B,onClickItemHandler:P},ps({_:2},[l.$slots.header?{name:"header",fn:J(()=>[Y(l.$slots,"header")])}:void 0]),1032,["id","currentFocusItemIndex","currentFocusMenuIndex","cssHeaderTitle","headerTitle","sub-menu-data"]))),128))],512)),[[ts,n.visible]])}}),xs=[{data:[],iconType:-1,index:0,mlang_key:"MAIN_SELECT_TUNER_MODE",selected:0,type:1},{data:[],iconType:-1,index:1,mlang_key:"MAIN_TI_PROGRAMME_INFO",selected:0,type:1},{data:[{data:[{data:[],iconType:-1,index:0,mlang_key:"OFF",selected:0,type:0},{data:[],iconType:-1,index:1,mlang_key:"ON",selected:1,type:0}],iconType:-1,index:0,mlang_key:"OPTION_UAM_VISU_IMP",selected:0,type:-1},{data:[{data:[],iconType:-1,index:0,mlang_key:"OFF",selected:1,type:0},{data:[],iconType:-1,index:1,mlang_key:"ON",selected:0,type:0}],iconType:-1,index:1,mlang_key:"OPTION_UAM_HEAR_IMP",selected:0,type:-1},{data:[{data:[],iconType:-1,index:0,mlang_key:"OPTION_UAM_VOL_VISU",selected:95,type:2}],iconType:-1,index:2,mlang_key:"OPTION_UAM_VOL_VISU",selected:0,type:-1},{data:[{data:[],iconType:-1,index:0,mlang_key:"OFF",selected:0,type:0},{data:[],iconType:-1,index:1,mlang_key:"ON",selected:1,type:0}],iconType:-1,index:0,mlang_key:"OPTION_UAM_DIALOG_ENHANCE",selected:0,type:-1},{data:[{data:[],iconType:-1,index:0,mlang_key:"OPTION_UAM_DIALOG_ENHANCE_LEVEL",selected:0,type:2}],iconType:-1,index:1,mlang_key:"OPTION_UAM_DIALOG_ENHANCE_LEVEL",selected:0,type:-1}],iconType:-1,index:2,mlang_key:"OPTION_UAM",selected:0,type:-1},{data:[{data:[],iconType:-1,index:0,mlang_key:"OPTION_SUBTITLES_OFF",selected:1,type:0},{data:[],iconType:-1,index:1,mlang_key:"OPTION_SUBTITLES_ON",selected:0,type:0}],iconType:-1,index:3,mlang_key:"OPTION_SBTL",selected:0,type:-1},{data:[{data:[],iconType:-1,index:-1,mlang_key:"MAIN_NONE",name:"None",selected:1,type:1}],iconType:-1,index:4,mlang_key:"OPTION_SBTL_LANG",selected:0,status:0,type:-1},{data:[],index:5,mlang_key:"MAIN_CHANNEL_INFO",type:1},{data:[],index:6,mlang_key:"MAIN_CHANNEL_INSTALLATION",type:1}];const Ms={class:"menu_contain",id:"menu_contain"},Ns=r("div",{style:{"font-size":".3rem",color:"red"}}," i am menu title ",-1),ks=O({__name:"menu",setup(n){const o=_(),e={ArrowDown:"DOWN",ArrowUp:"UP",ArrowLeft:"LEFT",ArrowRight:"RIGHT",Enter:"ENTER",Backspace:"BACK",Escape:"BACK"};cs(()=>{window.document.addEventListener("keyup",i=>{var p;(p=o.value)==null||p.KEYDOWN(e[i.key])})});const t=_(!1),a=_();function u(i){a.value=i}return(i,p)=>{var F;return d(),h(M,null,[r("div",Ms,[t.value?(d(),b(C(Es),{key:0,data:C(xs),onCloseMenu:p[0]||(p[0]=f=>t.value=!1),onChangeFocusItem:u,ref_key:"reference",ref:o,visible:t.value},{header:J(()=>[Ns]),_:1},8,["data","visible"])):N("",!0)]),r("div",null," \u5F53\u524D\u9009\u4E2D\u7684\u83DC\u5355\u662F\uFF1A"+$((F=a.value)==null?void 0:F.cssName),1),r("button",{style:{background:"#A3FE65"},onClick:p[1]||(p[1]=f=>t.value=!t.value)},"toggle menu")],64)}}}),bs=r("h1",{id:"menu",tabindex:"-1"},[X("Menu "),r("a",{class:"header-anchor",href:"#menu","aria-hidden":"true"},"#")],-1),Os=r("p",null,"tv \u4FA7\u8FB9\u680F Menu",-1),Ss=r("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[X("\u57FA\u7840\u7528\u6CD5 "),r("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),Ls=rs("",5),Hs=JSON.parse('{"title":"Menu","description":"","frontmatter":{"title":"Menu","lang":"en-US"},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":3,"title":"\u6E90\u7801\u4F7F\u7528\u65B9\u5F0F","slug":"\u6E90\u7801\u4F7F\u7528\u65B9\u5F0F"},{"level":2,"title":"Menu \u5C5E\u6027","slug":"menu-\u5C5E\u6027"}],"relativePath":"zh-CN/component/menu.md"}'),ws={name:"zh-CN/component/menu.md"},Rs=Object.assign(ws,{setup(n){return(o,e)=>(d(),h("div",null,[bs,Os,Ss,W(ks),Ls]))}});export{Hs as __pageData,Rs as default};