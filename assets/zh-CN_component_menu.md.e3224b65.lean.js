var os=Object.defineProperty;var ts=(s,l,a)=>l in s?os(s,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[l]=a;var d=(s,l,a)=>(ts(s,typeof l!="symbol"?l+"":l,a),a);import{T as ps,M as cs}from"./chunks/menu.vue_vue_type_style_index_0_scoped_true_lang.9bd841bd.js";import{_ as J,d as q,a as S,o as A,c as m,u as C,n as B,b as R,e as u,f as X,t as Y,r as f,g as rs,h as is,w as Q,i as Z,F as U,j as ss,k as H,l as Ds,m as us,v as ys,p as ds,q as es,s as Fs,x as Cs,y as ns,z as As}from"./app.18d57d21.js";const hs=["id"],vs={class:"wh-item-content"},fs={key:1,class:"iconfont menuItem__postfix icon-Keypad_right"},_s={key:2,class:"iconfont menuItem__postfix icon-Selection"},ms=q({__name:"menu-item",props:{node:null,id:null,isFocus:{type:Boolean},isActive:{type:Boolean}},setup(s,{expose:l}){const a=s,t={0:"icon-epg-DVB",1:"icon-epg-TXT",2:"icon-epg-Hearing_Impaired_d",3:"icon-Visually_Impaired_d",4:"icon-epg-Dolby_d",5:"icon-epg_AAC"},n=S(()=>a.node.iconType>-1?t[a.node.iconType]:null),i=S(()=>!a.node.isLeaf&&!a.node.isDisabled),p=S(()=>a.node.isLeaf&&a.node.isChecked);return l({hasExpandIcon:i,hasCheckIcon:p}),(D,r)=>(A(),m("div",{id:s.id+"",class:B(["wh-list-item wh-menu-item",{is_disabled:s.node.isDisabled,highlight:s.isFocus,in_active_path:s.isActive}]),role:"menuItem"},[C(n)?(A(),m("div",{key:0,class:B(["iconfont menuItem__Prefix",C(n)])},null,2)):R("",!0),u("div",vs,[X(ps,{fullScroll:!1,delay:-1e3,"i18n-text":s.node.cssName,text:s.node.cssName?"":s.node.text,active:s.isFocus},null,8,["i18n-text","text","active"]),u("span",null,Y(s.node.nameExtra),1)]),C(i)?(A(),m("div",fs)):C(p)?(A(),m("div",_s)):R("",!0)],10,hs))}});var Is=J(ms,[["__scopeId","data-v-263d7657"]]);const j={OPTION_UAM_VOL_VISU:[0,100],OPTION_UAM_DIALOG_ENHANCE_LEVEL:[0,9]};var L=(s=>(s[s.IS_DEFAULT=-1]="IS_DEFAULT",s[s.IS_RADIO=0]="IS_RADIO",s[s.IS_BAR=2]="IS_BAR",s))(L||{});class P{constructor(l,a){d(this,"nodeData");d(this,"parent");d(this,"data",[]);d(this,"cssName","");d(this,"label","");d(this,"name","");d(this,"value",0);d(this,"progressValue",0);d(this,"progressMaxSize",0);d(this,"progressMinSize",0);d(this,"level");d(this,"isChecked");d(this,"iconType",-1);d(this,"hasChildren",!1);d(this,"disabled",!1);d(this,"chLockState",!1);d(this,"nodeType",-1);d(this,"children",[]);this.nodeData=l,this.parent=a||null,this.level=this.parent?this.parent.level+1:1,this.isChecked=!1,this.initState(),this.initChildren()}initState(){const{index:l,label:a,name:t,selected:n,iconType:i,type:p,mlang_key:D,disabled:r,chLockState:y}=this.nodeData;this.value=l,this.name=t||"",this.cssName=D||"",this.label=this.cssName,this.isChecked=Boolean(n),this.iconType=i||-1,this.nodeType=p,this.disabled=Boolean(r)||!1,this.chLockState=Boolean(y)||!1,this.nodeType===2&&(this.progressValue=n||0,this.progressMaxSize=j[this.cssName][1],this.progressMinSize=j[this.cssName][0])}initChildren(){const l=this.nodeData.data||[];this.hasChildren=Array.isArray(l)&&l.length>0,this.children=l.map((a,t)=>(a.index=t,new P(a,this)))}get isDisabled(){const{nodeData:l,parent:a}=this;return Boolean(l.disabled)||Boolean(a&&a.isDisabled)}get isLeaf(){return!this.hasChildren}get nameExtra(){return this.nodeData.nameExtra||""}get text(){return this.name}getNodeType(){return this.nodeType}}function as(){const s=f([]);return s.value.set=l=>{l&&s.value.push(l)},rs(()=>{s.value.length=0}),s}function ls(s){return s===void 0}function gs(s){const{subMenuData:l,menuItemActiveIndex:a,id:t}=s,n=8,i=f(!1),p=f(!1);function D(){p.value=!0}function r(){p.value=!1}function y(){i.value=!0}function v(){i.value=!1}function k(){const h=a.value,M=l.value.length;h===0&&v(),M-h>=n&&g()<0?(T(g()+105),D()):h>=n&&g()===0?(T(-105*(h-7)),r(),y()):h<n&&g()===0?y():r()}function I(){const h=l.value.length,M=(h-n)*105*-1,w=a.value;if(w>=n-1){if(g()<=M)return;T(g()-105),y()}else w===0&&(T(0),v());h-w>2?D():r()}function g(){const M=document.querySelectorAll(".wh-sidebar .wh-sc-content-list")[t].style.top||"0px";return Math.ceil(Number(M.replace("px","")))}function T(h){const M=document.querySelectorAll(".wh-sidebar .wh-sc-content-list")[t];M.style.top=h+"px"}return{downArrowShow:p,upArrowShow:i,handlerDownArrow:I,handlerUpArrow:k,showDownIcon:D,hideDownIcon:r,showUpIcon:y,hideUpIcon:v}}const Ms=["id"],Ts={class:"wh-sc-header"},Es={class:"wh-sc-header-title"},xs=u("div",{class:"underline"},null,-1),Ns={class:"arrow-up iconfont"},bs={class:"wh-sc-content"},ks={class:"wh-sc-content-list"},ws={class:"arrow-down iconfont"},Os=q({__name:"sub-menu",props:{id:{default:0},subMenuData:null,currentFocusMenuIndex:{default:0},currentFocusItemIndex:{default:0},cssHeaderTitle:null,headerTitle:null},emits:["clickItemHandler","collapseSubMenu","berforeClose","volumeBarAdjust","openNextMenu","update:currentFocusItemIndex","changeFocusItem"],setup(s,{expose:l,emit:a}){const t=s,n=f(0),i=f(0),{subMenuData:p}=is(t),{downArrowShow:D,upArrowShow:r,showDownIcon:y,handlerDownArrow:v,handlerUpArrow:k}=gs({id:t.id,menuItemActiveIndex:n,subMenuData:p});p.value.length>8&&y();const I=S(()=>t.currentFocusMenuIndex===t.id);I.value&&b(t.currentFocusItemIndex);const g=S(()=>t.subMenuData[n.value]),T=as();Q(()=>t.subMenuData,e=>{if((e==null?void 0:e.length)&&I.value){const F=e.findIndex(c=>c.isChecked);b(F>-1?F:0)}},{deep:!0,immediate:!0});function h(e,F){if(!e.isDisabled){if(!e.isLeaf)return b(F),a("openNextMenu",e);e.nodeType===L.IS_RADIO&&!e.isChecked&&(t.subMenuData[n.value].isChecked=!1,e.isChecked=!0),!e.parent&&e.isLeaf&&a("collapseSubMenu",e),b(F),a("clickItemHandler",e)}}function M(e){var F;(F=G[e])==null||F.call(G)}function w(){const e=t.subMenuData[n.value];e.nodeType===L.IS_RADIO&&!e.isChecked?(x(e),a("clickItemHandler",e)):e.isLeaf?a("clickItemHandler",e):a("openNextMenu",e)}function V(){const{subMenuData:e}=t;let F=n.value;for(let c=e.length-1;c>=0;c--)if(!e[c].isDisabled&&c<n.value)return F=c,F;return F}function $(){const{subMenuData:e}=t;let F=n.value;for(let c=0;c<e.length;c++)if(!e[c].isDisabled&&c>n.value)return F=c,F;return F}function z(){n.value===0?b(t.subMenuData.length-1):b(V()),k()}function K(){n.value===t.subMenuData.length-1?b(0):b($()),v()}function o(){var e;(e=T.value[0])==null||e.RIGHT()}function _(){var e;(e=T.value[0])==null||e.LEFT()}function E(){g.value.parent?a("collapseSubMenu",g.value):a("berforeClose")}function x(e){e.nodeType===L.IS_RADIO&&!e.isChecked&&(t.subMenuData[i.value].isChecked=!1,e.isChecked=!0)}function N(e){a("volumeBarAdjust",e)}function b(e){i.value=n.value,n.value=e,a("update:currentFocusItemIndex",e),a("changeFocusItem",t.subMenuData[e])}const G={DOWN:K,UP:z,RIGHT:o,LEFT:_,ENTER:w,BACK:E};return l({menuItemActiveIndex:n,activeMenu:I,KEYDOWN:M,lastMenuItemActiveIndex:i}),(e,F)=>(A(),m("div",{id:"sidebar_"+s.id,class:"wh-sidebar",role:"subMenu"},[u("div",Ts,[s.id===0?Z(e.$slots,"header",{key:0},()=>[C(ls)(s.cssHeaderTitle||s.headerTitle)?R("",!0):(A(),m(U,{key:0},[u("div",Es,[u("span",{class:B(["wh-st-text",s.cssHeaderTitle])},Y(s.headerTitle),3)]),xs],64))]):R("",!0)]),u("div",Ns,[u("span",{class:B(["arrow",{"icon-switch_down2":C(r)}])},null,2)]),u("div",bs,[u("div",ks,[(A(!0),m(U,null,ss(C(p),(c,O)=>(A(),m(U,null,[c.nodeType===C(L).IS_BAR?(A(),H(cs,{isFocus:C(I)&&s.currentFocusItemIndex===O,ref_for:!0,ref:C(T).set,key:O+c.nodeType,"max-size":c.progressMaxSize,"min-size":c.progressMinSize,modelValue:c.progressValue,"onUpdate:modelValue":W=>c.progressValue=W,onOnChange:W=>N(c)},null,8,["isFocus","max-size","min-size","modelValue","onUpdate:modelValue","onOnChange"])):(A(),H(Is,{id:O,node:c,isFocus:C(I)&&s.currentFocusItemIndex===O,isActive:!C(I)&&n.value===O,key:O+c.name,onClick:Ds(W=>h(c,O),["stop"])},null,8,["id","node","isFocus","isActive","onClick"]))],64))),256))])]),u("div",ws,[u("span",{class:B(["arrow",{"icon-switch_down2":C(D)}])},null,2)])],8,Ms))}}),Ss={class:"option-wrapper menu",role:"menu"},Ls=q({__name:"menu",props:{data:null,cssHeaderTitle:null,headerTitle:null,visible:{type:Boolean}},emits:["changeFocusItem","onEnter","closeMenu"],setup(s,{expose:l,emit:a}){const t=s,n=f([]),i=as(),p=f(0),D=f(0),r=S(()=>n.value[p.value][D.value]),y=S(()=>k(r.value));let v=f({});function k(o){return v.value={},I(o),v.value}function I(o){o.parent&&(v.value[o.parent.level-1]=o.parent.value,I(o.parent))}function g(o){n.value=n.value.slice(0,o.level),n.value.push(o.children);let _=0;_=o.children.findIndex(E=>E.isChecked),D.value=_>-1?_:0,p.value=o.level}function T(o){o.parent?(p.value-=1,D.value=o.parent.value,n.value=n.value.slice(0,o.level-1)):(n.value=n.value.slice(0,1),p.value=0,D.value=o.value)}function h(){console.log("berforeClose"),a("closeMenu")}function M(o){a("changeFocusItem",o)}function w(o){a("onEnter",o)}function V(){n.value=[t.data.map(o=>new P(o))]}function $(o){i.value[p.value].KEYDOWN(o)}function z(){V(),n.value[0]&&(D.value=n.value[0].findIndex(o=>o.isChecked)),D.value=D.value>-1?D.value:0}function K(){const o=[t.data.map(E=>new P(E))],_=y.value;y.value[0],n.value.forEach((E,x)=>{const N=_[x-1];ls(N)?n.value[0]=o[0]:n.value[x]=n.value[x-1][N].children})}return Q(()=>t.data,K),z(),l({activeMenuItemRecord:y,activeMenuItemData:v,menuList:n,currentItemIndex:D,currentMenuIndex:p,currentMenuItemData:r,subMenuRefList:i,KEYDOWN:$}),(o,_)=>us((A(),m("div",Ss,[(A(!0),m(U,null,ss(n.value,(E,x)=>(A(),H(Os,{id:x,key:x,ref_for:!0,ref:C(i).set,currentFocusItemIndex:D.value,"onUpdate:currentFocusItemIndex":_[0]||(_[0]=N=>D.value=N),currentFocusMenuIndex:p.value,"onUpdate:currentFocusMenuIndex":_[1]||(_[1]=N=>p.value=N),cssHeaderTitle:s.cssHeaderTitle,headerTitle:s.headerTitle,"sub-menu-data":E,onOpenNextMenu:g,onChangeFocusItem:M,onCollapseSubMenu:T,onBerforeClose:h,onClickItemHandler:w},ds({_:2},[o.$slots.header?{name:"header",fn:es(()=>[Z(o.$slots,"header",{},void 0,!0)])}:void 0]),1032,["id","currentFocusItemIndex","currentFocusMenuIndex","cssHeaderTitle","headerTitle","sub-menu-data"]))),128))],512)),[[ys,s.visible]])}});var Bs=J(Ls,[["__scopeId","data-v-3b60b2aa"]]);const Us=[{data:[],iconType:-1,index:0,mlang_key:"MAIN_SELECT_TUNER_MODE",selected:0,type:1},{data:[],iconType:-1,index:1,mlang_key:"MAIN_TI_PROGRAMME_INFO",selected:0,type:1},{data:[{data:[{data:[],iconType:-1,index:0,mlang_key:"OFF",selected:0,type:0},{data:[],iconType:-1,index:1,mlang_key:"ON",selected:1,type:0}],iconType:-1,index:0,mlang_key:"OPTION_UAM_VISU_IMP",selected:0,type:-1},{data:[{data:[],iconType:-1,index:0,mlang_key:"OFF",selected:1,type:0},{data:[],iconType:-1,index:1,mlang_key:"ON",selected:0,type:0}],iconType:-1,index:1,mlang_key:"OPTION_UAM_HEAR_IMP",selected:0,type:-1},{data:[{data:[],iconType:-1,index:0,mlang_key:"OPTION_UAM_VOL_VISU",selected:95,type:2}],iconType:-1,index:2,mlang_key:"OPTION_UAM_VOL_VISU",selected:0,type:-1},{data:[{data:[],iconType:-1,index:0,mlang_key:"OFF",selected:0,type:0},{data:[],iconType:-1,index:1,mlang_key:"ON",selected:1,type:0}],iconType:-1,index:0,mlang_key:"OPTION_UAM_DIALOG_ENHANCE",selected:0,type:-1},{data:[{data:[],iconType:-1,index:0,mlang_key:"OPTION_UAM_DIALOG_ENHANCE_LEVEL",selected:0,type:2}],iconType:-1,index:1,mlang_key:"OPTION_UAM_DIALOG_ENHANCE_LEVEL",selected:0,type:-1}],iconType:-1,index:2,mlang_key:"OPTION_UAM",selected:0,type:-1},{data:[{data:[],iconType:-1,index:0,mlang_key:"OPTION_SUBTITLES_OFF",selected:1,type:0},{data:[],iconType:-1,index:1,mlang_key:"OPTION_SUBTITLES_ON",selected:0,type:0}],iconType:-1,index:3,mlang_key:"OPTION_SBTL",selected:0,type:-1},{data:[{data:[],iconType:-1,index:-1,mlang_key:"MAIN_NONE",name:"None",selected:1,type:1}],iconType:-1,index:4,mlang_key:"OPTION_SBTL_LANG",selected:0,status:0,type:-1},{data:[],index:5,mlang_key:"MAIN_CHANNEL_INFO",type:1},{data:[],index:6,mlang_key:"MAIN_CHANNEL_INSTALLATION",type:1}];const Rs=u("div",{style:{"font-size":".3rem",color:"red"}}," i am menu title ",-1),Hs=q({__name:"menu",setup(s){const l=f(),a={ArrowDown:"DOWN",ArrowUp:"UP",ArrowLeft:"LEFT",ArrowRight:"RIGHT",Enter:"ENTER",Backspace:"BACK",Escape:"BACK"},t=f(),n=r=>{var y;(y=l.value)==null||y.KEYDOWN(a[r.key])};Fs(()=>{var r;window.document.addEventListener("keyup",n),(r=t.value)==null||r.focus()}),Cs(()=>{var r;window.document.removeEventListener("keyup",n),(r=t.value)==null||r.blur()});const i=f(!1),p=f();function D(r){p.value=r}return(r,y)=>{var v;return A(),m(U,null,[u("div",{class:"menu_contain",id:"menu_contain",ref_key:"meuRef",ref:t},[i.value?(A(),H(C(Bs),{key:0,data:C(Us),onCloseMenu:y[0]||(y[0]=k=>i.value=!1),onChangeFocusItem:D,ref_key:"reference",ref:l,visible:i.value},{header:es(()=>[Rs]),_:1},8,["data","visible"])):R("",!0)],512),u("div",null,"\u5F53\u524D\u9009\u4E2D\u7684\u83DC\u5355\u662F\uFF1A"+Y((v=p.value)==null?void 0:v.cssName),1),u("button",{style:{background:"#A3FE65"},onClick:y[1]||(y[1]=k=>i.value=!i.value)}," toggle menu ")],64)}}}),Ps=u("h1",{id:"menu",tabindex:"-1"},[ns("Menu "),u("a",{class:"header-anchor",href:"#menu","aria-hidden":"true"},"#")],-1),qs=u("p",null,"tv \u4FA7\u8FB9\u680F Menu",-1),Vs=u("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[ns("\u57FA\u7840\u7528\u6CD5 "),u("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),$s=As("",5),Ys=JSON.parse('{"title":"Menu","description":"","frontmatter":{"title":"Menu","lang":"en-US"},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":3,"title":"\u6E90\u7801\u4F7F\u7528\u65B9\u5F0F","slug":"\u6E90\u7801\u4F7F\u7528\u65B9\u5F0F"},{"level":2,"title":"Menu \u5C5E\u6027","slug":"menu-\u5C5E\u6027"}],"relativePath":"zh-CN/component/menu.md"}'),zs={name:"zh-CN/component/menu.md"},js=Object.assign(zs,{setup(s){return(l,a)=>(A(),m("div",null,[Ps,qs,Vs,X(Hs),$s]))}});export{Ys as __pageData,js as default};
