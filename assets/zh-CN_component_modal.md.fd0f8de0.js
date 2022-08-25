import{a as N,u as e,_ as M,d as w,o as C,c as g,h,n as b,C as q,D as L,e as A,t as I,b as S,k as J,r as _,w as x,q as P,E as U,j as z,p as m,s as $,F as W,G as Q,l as Z,v as ss,f as T,m as as,z as ns,H as os,I as es,x as ls}from"./app.bd691248.js";import"./chunks/mixins.97ba5d4a.js";const ts="rec",ps="is-",E=(s,a,c,n,l)=>{let i=`${s}-${a}`;return c&&(i+=`-${c}`),n&&(i+=`__${n}`),l&&(i+=`--${l}`),i},Y=s=>{const a=N(()=>ts);return{namespace:a,b:(o="")=>E(e(a),s,o,"",""),e:o=>o?E(e(a),s,"",o,""):"",m:o=>o?E(e(a),s,"","",o):"",be:(o,d)=>o&&d?E(e(a),s,o,d,""):"",em:(o,d)=>o&&d?E(e(a),s,"",o,d):"",bm:(o,d)=>o&&d?E(e(a),s,o,"",d):"",bem:(o,d,F)=>o&&d&&F?E(e(a),s,o,d,F):"",is:(o,...d)=>{const F=d.length>=1?d[0]:!0;return o&&F?`${ps}${o}`:""},cssVar:o=>{const d={};for(const F in o)d[`--${a.value}-${F}`]=o[F];return d},cssVarName:o=>`--${a.value}-${o}`,cssVarBlock:o=>{const d={};for(const F in o)d[`--${a.value}-${s}-${F}`]=o[F];return d},cssVarBlockName:o=>`--${a.value}-${s}-${o}`}},O=Symbol("dialogInjectionKey"),V=s=>s;const cs=w({__name:"overlay",props:{mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:V([String,Array,Object])},zIndex:{type:V([String,Number])}},emits:{click:s=>s instanceof MouseEvent},setup(s,{emit:a}){const c=l=>{a("click",l)},n=Y("overlay");return(l,i)=>s.mask?(C(),g("div",{key:0,class:b([e(n).b(),e(n).m("mask"),s.overlayClass]),style:q({zIndex:s.zIndex}),onClick:i[0]||(i[0]=D=>s.customMaskEvent?()=>{}:c)},[h(l.$slots,"default",{},void 0,!0)],6)):(C(),g("div",{key:1,class:b([e(n).b(),e(n).m("fixed"),s.overlayClass]),style:q({zIndex:s.zIndex})},[h(l.$slots,"default",{},void 0,!0)],6))}});var rs=M(cs,[["__scopeId","data-v-3d49cd29"]]);const j={center:{type:Boolean,default:!1},customClass:{type:String,default:""},showClose:{type:Boolean,default:!1},title:{type:String,default:""}},ds={close:()=>!0};const is=w({__name:"dialog-content",props:j,emits:ds,setup(s){const{style:a,ns:c}=L(O);return(n,l)=>(C(),g("div",{class:b([e(c).b(),n.customClass]),style:q(e(a)),onClick:l[1]||(l[1]=J(()=>{},["stop"]))},[A("header",{class:b(e(c).e("header"))},[h(n.$slots,"header",{},()=>[A("div",null,I(n.title),1)],!0),n.showClose?(C(),g("span",{key:0,class:"closeIcon",onClick:l[0]||(l[0]=i=>n.$emit("close"))},"\xA0\xA0x\xA0\xA0")):S("",!0)],2),A("div",{class:b(e(c).e("body"))},[h(n.$slots,"default",{},void 0,!0)],2),n.$slots.footer?(C(),g("footer",{key:0,class:b(e(c).e("footer"))},[h(n.$slots,"footer",{},void 0,!0)],2)):S("",!0)],6))}});var ys=M(is,[["__scopeId","data-v-445389bd"]]);const Ds=w({__name:"button",props:{active:Boolean},setup(s){return(a,c)=>(C(),g("button",{ref:"_ref",class:b([s.active?"active":""])},[h(a.$slots,"default",{},void 0,!0)],2))}});var K=M(Ds,[["__scopeId","data-v-4bae382b"]]);const Fs=s=>{const c=U().emit,n=_(!1);function l(){function y(k){k||t()}s.beforeClose?s.beforeClose(y):t()}function i(){s.onModalClickClose&&l()}function D(){n.value=!0}function t(){n.value=!1}const r=N(()=>{const y={};return s.top&&(y["margin-top"]=s.top),s.width&&(y.width=s.width),y});return x(()=>s.modelValue,y=>{y?(D(),c("open")):n.value&&t()}),x(n,y=>{y===!1&&c("update:modelValue",!1)}),P(()=>{s.modelValue&&(n.value=!0,D())}),{visible:n,style:r,handleClose:l,onModalClick:i}};var u=(s=>(s.CANCEL="Cancel Button",s.CONFIRM="Confirm Button",s))(u||{});const Cs=s=>{const a=_(u.CANCEL),n=U().emit,{visible:l}=L(O);s.focusControl&&x(l,B=>{B&&t()});const i=N(()=>a.value===u.CANCEL),D=N(()=>a.value===u.CONFIRM),t=()=>{s.hasCancel&&s.hasConfirm?r(s.defaultFocus):s.hasCancel?r(u.CANCEL):s.hasConfirm&&r(u.CONFIRM)},r=B=>{a.value=B},y=()=>{r(u.CANCEL),v()},k=()=>{r(u.CONFIRM),v()},p=()=>{s.hasCancel&&r(u.CANCEL)},f=()=>{s.hasConfirm&&r(u.CONFIRM)},v=()=>{i.value?n("cancel"):D.value&&n("confirm")},o=()=>{n("close")},F={LEFT:p,RIGHT:f,ENTER:v,BACK:o,EXIT:o};return{isCancelButton:i,isConfirmButton:D,KEYDOWN:B=>{var R;const X=(B.action||"").toUpperCase();s.focusControl&&((R=F[X])==null||R.call(F))},handleClickCancel:y,handleClickConfirm:k}},H={close:()=>!0,cancel:()=>!0,confirm:()=>!0},G={hasCancel:{type:Boolean,default:!0},hasConfirm:{type:Boolean,default:!0},cancelText:{type:String,default:"cancel_btn"},confirmText:{type:String,default:"confirm_btn"},defaultFocus:{type:String,default:u.CANCEL},focusControl:{type:Boolean,default:!0}},us=w({__name:"dialog-footer",props:G,emits:H,setup(s,{expose:a}){const c=s,{KEYDOWN:n,isCancelButton:l,isConfirmButton:i,handleClickCancel:D,handleClickConfirm:t}=Cs(c);return a({KEYDOWN:n}),(r,y)=>(C(),g(W,null,[r.hasCancel?(C(),z(e(K),{key:0,active:e(l),onClick:e(D)},{default:m(()=>[$(I(r.cancelText),1)]),_:1},8,["active","onClick"])):S("",!0),r.hasConfirm?(C(),z(e(K),{key:1,active:e(i),onClick:e(t)},{default:m(()=>[$(I(r.confirmText),1)]),_:1},8,["active","onClick"])):S("",!0)],64))}}),As={...j,...G,modelValue:{type:Boolean,default:!1},beforeClose:{type:V(Function)},onModalClickClose:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},modalClass:String,top:{type:String},width:{type:[String,Number]}};({...H,["update:modelValue"]:0});const hs=w({__name:"index",props:As,setup(s,{expose:a}){const c=s,{onModalClick:n,handleClose:l,style:i,visible:D}=Fs(c),t=Y("dialogModal");Q(O,{style:i,ns:t,visible:D});const r=_(),y=_();return a({dialogContentRef:r,visible:D,KEYDOWN:p=>{y.value.KEYDOWN(p)}}),(p,f)=>Z((C(),z(rs,{mask:p.modal,"overlay-class":p.modalClass},{default:m(()=>[A("div",{role:"dialog","aria-model":"true",class:b(["overlayDialog",`${e(t).namespace.value}-overlay-dialog`]),onClick:f[2]||(f[2]=(...v)=>e(n)&&e(n)(...v))},[T(ys,{"custom-class":p.customClass,center:p.center,"show-close":p.showClose,title:p.title,onClose:e(l),ref_key:"dialogContentRef",ref:r},as({header:m(()=>[p.$slots.title?h(p.$slots,"title",{key:1},void 0,!0):h(p.$slots,"header",{key:0,close:e(l)},void 0,!0)]),default:m(()=>[h(p.$slots,"default",{},void 0,!0)]),_:2},[p.$slots.footer?{name:"footer",fn:m(()=>[h(p.$slots,"footer",{},void 0,!0)])}:{name:"footer",fn:m(()=>[T(us,{ref_key:"defaultDialogFooter",ref:y,"cancel-text":p.cancelText,"confirm-text":p.confirmText,"default-focus":p.defaultFocus,"focus-control":p.focusControl,"has-cancel":p.hasCancel,"has-confirm":p.hasConfirm,onClose:e(l),onCancel:f[0]||(f[0]=v=>p.$emit("cancel")),onConfirm:f[1]||(f[1]=v=>p.$emit("confirm"))},null,8,["cancel-text","confirm-text","default-focus","focus-control","has-cancel","has-confirm","onClose"])])}]),1032,["custom-class","center","show-close","title","onClose"])],2)]),_:3},8,["mask","overlay-class"])),[[ss,e(D)]])}});var fs=M(hs,[["__scopeId","data-v-4a6e8efa"]]);const ms=s=>(os("data-v-9d4684c0"),s=s(),es(),s),gs=$("header tip text"),vs=ms(()=>A("span",null,"This is a message",-1)),bs=w({__name:"show",setup(s){const a=_(!1),c=_(),n=t=>{alert("dialog close"),t()},l=()=>{alert("dialog cancel"),a.value=!1},i=()=>{alert("dialog confirm"),a.value=!1};P(()=>{document.onkeydown=D}),ns(()=>{document.onkeydown=null});const D=t=>{console.log(t),t.key==="ArrowRight"?t.action="Right":t.key==="ArrowLeft"?t.action="Left":t.key==="Enter"?t.action="Enter":t.key==="Backspace"&&(t.action="Back"),c.value.KEYDOWN(t)};return(t,r)=>(C(),g(W,null,[A("div",{onClick:r[0]||(r[0]=y=>a.value=!0),class:"resetButton"}," show dialog modal "),T(e(fs),{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=y=>a.value=y),ref_key:"dialogModalRef",ref:c,title:"Tips",width:"50%","before-close":n,onCancel:l,onConfirm:i,"has-cancel":!0,"has-confirm":!0,"cancel-text":"Cancel","confirm-text":"Ok"},{header:m(()=>[gs]),default:m(()=>[vs]),_:1},8,["modelValue"])],64))}});var Es=M(bs,[["__scopeId","data-v-9d4684c0"]]);const _s=A("h1",{id:"modal",tabindex:"-1"},[$("Modal "),A("a",{class:"header-anchor",href:"#modal","aria-hidden":"true"},"#")],-1),ws=A("p",null,"Modal",-1),ks=A("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[$("\u57FA\u7840\u7528\u6CD5 "),A("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),Bs=ls(`<h3 id="\u6E90\u7801\u4F7F\u7528\u65B9\u5F0F" tabindex="-1">\u6E90\u7801\u4F7F\u7528\u65B9\u5F0F <a class="header-anchor" href="#\u6E90\u7801\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a></h3><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">dialogModalShow</span><span style="color:#89DDFF;"> = </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">resetButton</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    show dialog modal</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dialog-modal</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">dialogModalShow</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dialogModalRef</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Tips</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">50%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">before-close</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">handleClose</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    @</span><span style="color:#C792EA;">cancel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">handleModalCancel</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">confirm</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">handleModalConfirm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">has-cancel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">has-confirm</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    :</span><span style="color:#C792EA;">cancel-text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&#39;</span><span style="color:#C3E88D;">Cancel</span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">confirm-text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&#39;</span><span style="color:#C3E88D;">Ok</span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">header</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">header tip text</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">This is a message</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dialog-modal</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">onMounted</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">onUnmounted</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dialogModal</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@mini-element-plus/components/dialogModal</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> dialogModalShow </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> dialogModalRef </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> handleClose </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">done</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dialog close</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">done</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> handleModalCancel </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dialog cancel</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">dialogModalShow</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> handleModalConfirm </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dialog confirm</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">dialogModalShow</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">onMounted</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">onkeydown</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">handleKeydown</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">onUnmounted</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">onkeydown</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> handleKeydown </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ArrowRight</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">action</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Right</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ArrowLeft</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">action</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Left</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Enter</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">action</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Enter</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Backspace</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">action</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Back</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">dialogModalRef</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">KEYDOWN</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scss</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">scoped</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">resetButton</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> fit-content</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> fit-content</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> green</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> aqua</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> solid aqua</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="md" tabindex="-1">md <a class="header-anchor" href="#md" aria-hidden="true">#</a></h3><hr><h2 id="title-dialoglang-en-us" tabindex="-1">title: Dialog lang: en-US <a class="header-anchor" href="#title-dialoglang-en-us" aria-hidden="true">#</a></h2><h1 id="dialog" tabindex="-1">Dialog <a class="header-anchor" href="#dialog" aria-hidden="true">#</a></h1><p>Informs users while preserving the current page state.</p><h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2><p>Dialog pops up a dialog box, and it&#39;s quite customizable.</p><p>::: Set <code>model-value / v-model</code> attribute with a <code>Boolean</code>, and Dialog shows when it is <code>true</code>. The Dialog has two parts: <code>body</code> and <code>footer</code>, and the latter requires a <code>slot</code> named <code>footer</code>. The optional <code>title</code> attribute (empty by default) is for defining a title. Finally, this example demonstrates how <code>before-close</code> is used.</p><p>:::</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>before-close</code> only works when user clicks the close icon or the backdrop. If you have buttons that close the Dialog in the <code>footer</code> named slot, you can add what you would do with <code>before-close</code> in the buttons&#39; click event handler.</p></div><h2 id="customized-content" tabindex="-1">Customized Content <a class="header-anchor" href="#customized-content" aria-hidden="true">#</a></h2><p>The content of Dialog can be anything, even a table or a form. This example shows how to use Element Plus Table and Form with Dialog.</p><h2 id="customized-header" tabindex="-1">Customized Header <a class="header-anchor" href="#customized-header" aria-hidden="true">#</a></h2><p>The <code>header</code> slot can be used to customize the area where the title is displayed. In order to maintain accessibility, use the <code>title</code> attribute in addition to using this slot, or use the <code>titleId</code> slot property to specify which element should be read out as the dialog title.</p><p>:::demo</p><p>dialog/customization-header</p><p>:::</p><h2 id="centered-content" tabindex="-1">Centered content <a class="header-anchor" href="#centered-content" aria-hidden="true">#</a></h2><p>Dialog&#39;s content can be centered.</p><p>:::demo Setting <code>center</code> to <code>true</code> will center dialog&#39;s header and footer horizontally. <code>center</code> only affects Dialog&#39;s header and footer. The body of Dialog can be anything, so sometimes it may not look good when centered. You need to write some CSS if you wish to center the body as well.</p><p>dialog/centered-content</p><p>:::</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The content of Dialog is lazily rendered, which means the default slot is not rendered onto the DOM until it is firstly opened. Therefore, if you need to perform a DOM manipulation or access a component using <code>ref</code>, do it in the <code>open</code> event callback.</p></div><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>visibility of Dialog</td><td>boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>title</td><td>title of Dialog. Can also be passed with a named slot (see the following table)</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>width</td><td>width of Dialog</td><td>string / number</td><td>\u2014</td><td>50%</td></tr><tr><td>top</td><td>value for <code>margin-top</code> of Dialog CSS</td><td>string</td><td>\u2014</td><td>15vh</td></tr><tr><td>modal</td><td>whether a mask is displayed</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>custom-class</td><td>custom class names for Dialog</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>close-on-click-modal</td><td>whether the Dialog can be closed by clicking the mask</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>show-close</td><td>whether to show a close button</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>before-close</td><td>callback before Dialog closes, and it will prevent Dialog from closing</td><td>function(done)\uFF0Cdone is used to close the Dialog</td><td>\u2014</td><td>\u2014</td></tr><tr><td>center</td><td>whether to align the header and footer in center</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>hasCancel</td><td>whether dialog has cancel button</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>hasConfirm</td><td>whether dialog has confirm button</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>cancelText</td><td>set dialog cancel button css text</td><td>string</td><td>\u2014</td><td>&#39;cancel_btn&#39;</td></tr><tr><td>confirmText</td><td>set dialog confirm button css text</td><td>string</td><td>\u2014</td><td>&#39;confirm_btn&#39;</td></tr><tr><td>defaultFocus</td><td>set dialog default button focus</td><td>string</td><td>\u2014</td><td>BUTTON_TYPE.CANCEL</td></tr><tr><td>focusControl</td><td>whether dialog need set focus</td><td>boolean</td><td>\u2014</td><td>true</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>\u2014</td><td>content of Dialog</td></tr><tr><td>header</td><td>content of the Dialog header; Replacing this removes the title, but does not remove the close button.</td></tr><tr><td>title</td><td>Works the same as the header slot. Use that instead.</td></tr><tr><td>footer</td><td>content of the Dialog footer</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>open</td><td>triggers when the Dialog opens</td><td>\u2014</td></tr><tr><td>close</td><td>triggers when the Dialog closes</td><td>\u2014</td></tr><tr><td>cancel</td><td>triggers when the Dialog cancel button pressed</td><td>\u2014</td></tr><tr><td>confirm</td><td>triggers when the Dialog confirm button pressed</td><td>\u2014</td></tr></tbody></table>`,31),Ts=JSON.parse('{"title":"Modal","description":"","frontmatter":{"title":"Modal","lang":"en-US"},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":3,"title":"\u6E90\u7801\u4F7F\u7528\u65B9\u5F0F","slug":"\u6E90\u7801\u4F7F\u7528\u65B9\u5F0F"},{"level":3,"title":"md","slug":"md"},{"level":2,"title":"title: Dialog\\nlang: en-US","slug":"title-dialoglang-en-us"},{"level":2,"title":"Basic usage","slug":"basic-usage"},{"level":2,"title":"Customized Content","slug":"customized-content"},{"level":2,"title":"Customized Header","slug":"customized-header"},{"level":2,"title":"Centered content","slug":"centered-content"},{"level":2,"title":"Attributes","slug":"attributes"},{"level":2,"title":"Slots","slug":"slots"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"zh-CN/component/modal.md"}'),$s={name:"zh-CN/component/modal.md"},qs=Object.assign($s,{setup(s){return(a,c)=>(C(),g("div",null,[_s,ws,ks,T(Es),Bs]))}});export{Ts as __pageData,qs as default};
