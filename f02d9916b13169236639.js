(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{233:function(t,i,o){var e=o(238);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,o(172).default)("6cc07505",e,!0,{})},234:function(t,i,o){"use strict";var e={name:"ABackdrop",props:{isVisible:{type:Boolean,default:!0},zIndexOnShow:{type:Number,default:1080},transitionMs:{type:Number,default:150}},data:()=>({opacity:0,zIndex:null,top:null}),computed:{style(){const{top:t,zIndex:i,transitionMs:o,opacity:e}=this;return{top:t,transition:"opacity ".concat(o,"ms linear"),opacity:e,zIndex:i}}},methods:{hide(){this.$emit("update:is-visible",!1),this.$emit("hide")},lockBodyScroll(){document.body.style.maxWidth="".concat(document.body.offsetWidth,"px"),document.body.style.overflow="hidden"}},watch:{isVisible(t){t?(this.opacity=null,this.lockBodyScroll()):(this.opacity=0,document.body.style.overflow=document.body.style.maxWidth=null)},opacity(t){0===t?setTimeout((()=>{this.top=this.zIndex=null}),this.transitionMs):(this.zIndex=this.zIndexOnShow,this.top=0)}},mounted(){this.isVisible&&(setTimeout((()=>{this.opacity=null}),this.transitionMs),this.lockBodyScroll())}},a=(o(237),o(53)),s=Object(a.a)(e,(function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{staticClass:"backdrop",style:t.style,on:{click:t.hide}})}),[],!1,null,null,null);i.a=s.exports},237:function(t,i,o){"use strict";var e=o(233);o.n(e).a},238:function(t,i,o){(i=o(171)(!1)).push([t.i,".backdrop{position:fixed;top:-100vh;left:0;width:100vw;height:100vh;background-color:var(--dark);opacity:.65;cursor:pointer;z-index:-100}",""]),t.exports=i},243:function(t,i,o){"use strict";var e=o(29),a=o(39),s={name:"AAlert",props:{canShow:{type:Boolean,default:!0},variant:{type:String,default:"warning"}},data:()=>({count:1}),computed:{i19close:()=>Object(a.a)(e.G)},watch:{canShow(t){t&&this.count++}}},n=o(53),r=Object(n.a)(s,(function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",[o("transition",{attrs:{"enter-active-class":"animated fadeInDown fast"}},[t.canShow?o("div",{key:t.count},[t._m(0)]):t._e()])],1)}),[function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"alert alert-dismissible fade show",class:"alert-"+t.variant,attrs:{role:"alert"}},[t._t("default"),o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":t.i19close},on:{click:function(i){return t.$emit("dismiss")}}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])],2)}],!1,null,null,null);i.a=r.exports},259:function(t,i,o){var e=o(315);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,o(172).default)("5ba7bbf2",e,!0,{})},314:function(t,i,o){"use strict";var e=o(259);o.n(e).a},315:function(t,i,o){(i=o(171)(!1)).push([t.i,".login-modal__box{z-index:1090;position:fixed;top:0;left:0;width:100vw;box-sizing:border-box;border-radius:0}@media (min-width:410px){.login-modal__box{width:400px;left:50%;margin-left:-200px;top:var(--spacer-4);border-radius:var(--border-radius)}}@media (min-height:400px){.login-modal__box{top:15%}}.login-modal .alert{margin-bottom:var(--spacer-3)}.login-modal__logout{margin-top:var(--spacer-3)}.login-modal__btn{color:#fff;text-align:left;line-height:var(--line-height-lg);padding:.7rem;min-width:15rem}.login-modal__btn:hover{color:#fff}.login-modal__btn:focus{box-shadow:none}.login-modal__btn--facebook{background:#3b5999;border-color:#2f4d8a}.login-modal__btn--facebook:hover{background:#274480;border-color:#274480}.login-modal__btn--google{background:#cb4023;border-color:#be3419}.login-modal__btn--google:hover{background:#c1361a;border-color:#c1361a}.login-modal__btn--windowslive{background:#329ffc;border-color:#2996f2}.login-modal__btn--windowslive:hover{background:#1f8ce9;border-color:#1f8ce9}.login-modal__btn-icon{display:inline-block;width:1.4rem;text-align:center;margin-right:var(--spacer-1)}.login-modal__back{display:block;padding-left:.3rem;padding-right:.3rem}.login-modal__back:focus{box-shadow:none}.login-modal__visitor-info{font-size:var(--font-size-sm);margin-top:var(--spacer-2);text-align:center;color:var(--text-muted)}",""]),t.exports=i},367:function(t,i,o){"use strict";o.r(i);var e=o(32),a=o.n(e),s=(o(49),o(29)),n=o(39),r=o(54),l=o(190),c=o(243),d=o(234),u={name:"LoginModal",components:{ALink:l.a,AAlert:c.a,ABackdrop:d.a},props:{isVisible:{type:Boolean,default:!0},getGreetingsMsg:Function,accountUrl:{type:String,default:"/app/#/account/"},ordersUrl:{type:String,default:"/app/#/account/orders"},ecomPassport:{type:Object,default:()=>r.a}},data:()=>({isLoading:!1,isWaitingPopup:!1,isLogged:!1,email:"",name:"",oauthProviders:[],isLoginForm:!1,hasLoginError:!1,hasNoProfileFound:!1}),computed:{i19close:()=>Object(n.a)(s.G),i19continueLoginOnPopup:()=>Object(n.a)(s.Q),i19email:()=>Object(n.a)(s.eb),i19guestCheckoutMsg:()=>Object(n.a)(s.wb),i19loginErrorMsg:()=>Object(n.a)(s.Ob),i19login:()=>Object(n.a)(s.Nb),i19logout:()=>Object(n.a)(s.Pb),i19myAccount:()=>Object(n.a)(s.Tb),i19myOrders:()=>Object(n.a)(s.Ub),i19noProfileFoundWithEmail:()=>Object(n.a)(s.cc),i19signInWith:()=>Object(n.a)(s.md),i19signInWithAnotherEmail:()=>Object(n.a)(s.nd),i19signUpWith:()=>Object(n.a)(s.od),greetings(){return"function"==typeof this.getGreetingsMsg?this.getGreetingsMsg(this.name):"".concat(Object(n.a)(s.yb)," ").concat(this.name||Object(n.a)(s.Ed))}},methods:{hide(){this.$emit("update:is-visible",!1)},update(){const{checkLogin:t,getCustomerName:i}=this.ecomPassport;this.name=i(),this.isLogged=t(),this.email="",this.isWaitingPopup=!1},waitPromise(t){this.isLoading=!0,t.catch(console.error).finally((()=>{this.isLoading=!1}))},setOauthProviders(){const t=this.ecomPassport.fetchOauthProviders().then((({host:t,baseUri:i,oauthPath:o,providers:e})=>{const a=[];for(const s in e)if(e[s]){const{faIcon:n,providerName:r}=e[s];a.push({link:t+i+s+o,faIcon:n,provider:s,providerName:r})}this.oauthProviders=a})).catch((t=>{throw this.presetOauthProviders(),t}));return this.waitPromise(t),t},presetOauthProviders(){this.oauthProviders=[{faIcon:"fa-facebook-f",providerName:"Facebook",provider:"facebook"},{faIcon:"fa-google",providerName:"Google",provider:"google"},{faIcon:"fa-windows",providerName:"Windows",provider:"windowslive"}]},openOauthPopup(t,i){if(this.hasLoginError=!1,t)this.ecomPassport.popupOauthLink(t),this.isWaitingPopup=!0;else{const t=this.setOauthProviders().then((()=>{const t=this.oauthProviders.find((t=>t.provider===i));this.openOauthPopup(t,i)})).catch((t=>{throw this.hasLoginError=!0,t}));this.waitPromise(t)}},submitEmail(){this.isLoginForm=!1;const t=this.ecomPassport.fetchLogin(this.email).catch((t=>{const{response:i}=t;if(!i||403!==i.status)throw setTimeout((()=>{this.hasLoginError=!0}),100),t;this.hasNoProfileFound=!0}));this.waitPromise(t)},logout(){this.ecomPassport.logout()}},watch:{hasNoProfileFound(t){!1===t&&(this.email=""),this.isLoginForm=!t},isLoginForm(t){this.hasLoginError=!1,t&&(this.isWaitingPopup=!1,this.$nextTick((()=>{setTimeout((()=>{this.$refs.input.focus()}),200)})))}},mounted(){["login","logout"].forEach((t=>{this.ecomPassport.on(t,(i=>{this.update(),this.$emit(t,i)}))})),this.update(),this.setOauthProviders()}},h=(o(314),o(53)),p=Object(h.a)(u,(function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"login-modal"},[o("a-backdrop",{attrs:{"is-visible":t.isVisible},on:{hide:t.hide}}),o("transition",{attrs:{"enter-active-class":"animated zoomIn","leave-active-class":"animated fadeOutUp slow"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.isVisible,expression:"isVisible"}],staticClass:"login-modal__box card"},[t._t("header",[o("div",{staticClass:"login-modal__header card-header"},[t._v(" "+t._s(t.greetings)+" "),o("button",{staticClass:"close",attrs:{type:"button","aria-label":t.i19close},on:{click:t.hide}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])]),o("div",{staticClass:"login-modal__body card-body"},[t.hasLoginError?o("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[t._v(" "+t._s(t.i19loginErrorMsg)+" ")]):t._e(),o("transition-group",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated position-absolute fadeOut faster"}},[t.isLoading?o("div",{key:"waiting"},[o("div",{staticClass:"spinner-border m-3",attrs:{role:"status"}},[o("span",{staticClass:"sr-only"},[t._v("Loading...")])])]):t.isLogged?o("div",{key:"logged"},[o("div",{staticClass:"list-group list-group-flush"},[o("a-link",{staticClass:"list-group-item list-group-item-action",attrs:{href:t.ordersUrl}},[t._v(" "+t._s(t.i19myOrders)+" ")]),o("a-link",{staticClass:"list-group-item list-group-item-action",attrs:{href:t.accountUrl}},[t._v(" "+t._s(t.i19myAccount)+" ")])],1),o("button",{staticClass:"login-modal__logout btn btn-block btn-danger",attrs:{type:"button"},on:{click:t.logout}},[o("i",{staticClass:"fas fa-sign-out-alt"}),t._v(" "+t._s(t.i19logout)+" ")])]):t.isLoginForm?o("div",{key:"form"},[o("form",{on:{submit:function(i){return i.preventDefault(),t.submitEmail(i)}}},[o("div",{staticClass:"form-group"},[o("button",{staticClass:"login-modal__back btn",attrs:{type:"button"},on:{click:function(i){t.isLoginForm=!1}}},[o("i",{staticClass:"fas fa-arrow-left"})]),o("label",{attrs:{for:"login-modal-email"}},[t._v(" "+t._s(t.i19signInWith+" "+t.i19email)+" ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],ref:"input",staticClass:"form-control",attrs:{type:"email",id:"login-modal-email",placeholder:"email@mail.com",required:""},domProps:{value:t.email},on:{input:function(i){i.target.composing||(t.email=i.target.value)}}})]),o("button",{staticClass:"btn btn-block btn-primary",attrs:{type:"submit"}},[t._v(" "+t._s(t.i19login)+" ")])])]):o("div",{key:"oauth"},[!t.isWaitingPopup&&t.hasNoProfileFound?o("div",{staticClass:"alert alert-info",attrs:{role:"alert"}},[t._v(" "+t._s(t.i19noProfileFoundWithEmail)+" "),o("b",[t._v(t._s(t.email))]),t._v(". "),o("br"),o("a",{staticClass:"alert-link",attrs:{href:"#"},on:{click:function(i){i.preventDefault(),t.hasNoProfileFound=!1}}},[t._v(" "+t._s(t.i19signInWithAnotherEmail)+" ")])]):t._e(),o("a-alert",{attrs:{"can-show":t.isWaitingPopup,variant:"info"}},[t._v(" "+t._s(t.i19continueLoginOnPopup)+". ")]),t._l(t.oauthProviders,(function(i){var e=i.link,a=i.faIcon,s=i.providerName,n=i.provider;return o("button",{key:n,staticClass:"login-modal__btn btn btn-block",class:"login-modal__btn--"+n,attrs:{type:"button"},on:{click:function(i){return t.openOauthPopup(e,n)}}},[o("span",{staticClass:"login-modal__btn-icon"},[o("i",{class:"fab "+a})]),t._v(" "+t._s(t.hasNoProfileFound?t.i19signUpWith:t.i19signInWith)+" "+t._s(s)+" ")])})),t.hasNoProfileFound?o("div",{staticClass:"login-modal__visitor-info"},[t._v(" "+t._s(t.i19guestCheckoutMsg)+" ")]):o("button",{key:"email",staticClass:"login-modal__btn btn btn-block btn-secondary",attrs:{type:"button"},on:{click:function(i){t.isLoginForm=!0}}},[o("span",{staticClass:"login-modal__btn-icon"},[o("i",{staticClass:"fas fa-envelope"})]),t._v(" "+t._s(t.i19signInWith+" "+t.i19email)+" ")])],2)])],1)],2)])],1)}),[],!1,null,null,null).exports;i.default=(t={},i="login-modal",o="user-button")=>{const e=document.getElementById(i),s=document.getElementById(o);if(e&&s){const o=window.storefront&&window.storefront.getScopedSlots;new a.a({data:{isVisible:!1},created(){s.addEventListener("click",(t=>{t.preventDefault(),this.isVisible=!0}))},render(a){const s=this;return a(p,{attrs:{id:i},props:{...t.props,isVisible:s.isVisible},on:{"update:is-visible"(t){s.isVisible=t}},scopedSlots:"function"==typeof o?o(e,a):void 0})}}).$mount(e)}}}}]);
//# sourceMappingURL=f02d9916b13169236639.js.map