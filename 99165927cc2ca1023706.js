(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{234:function(t,e,s){var r=s(244);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,s(172).default)("5d75423d",r,!0,{})},236:function(t,e,s){"use strict";var r=s(29),a=s(39),i=s(79),n={name:"ShippingLine",props:{shippingLine:{type:Object,required:!0}},computed:{deadlineStr(){const t=this.shippingLine,e=t.posting_deadline&&t.posting_deadline.working_days||t.delivery_time&&t.delivery_time.working_days;let s=t.posting_deadline?t.posting_deadline.days:0;return t.delivery_time&&(s+=t.delivery_time.days),"".concat(Object(a.a)(r.wd)," ").concat(s," ").concat(Object(a.a)(e?r.Cd:r.T))},freightValueStr(){const t="number"==typeof this.shippingLine.total_price?this.shippingLine.total_price:this.shippingLine.price;return t?Object(i.a)(t):Object(a.a)(r.lb)}}},o=s(53),c=Object(o.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shipping-line"},[s("strong",[t._v(" "+t._s(t.deadlineStr)+" ")]),s("span",{staticClass:"mx-2"},[t._v(" "+t._s(t.freightValueStr)+" ")])])}),[],!1,null,null,null);e.a=c.exports},243:function(t,e,s){"use strict";var r=s(234);s.n(r).a},244:function(t,e,s){(e=s(171)(!0)).push([t.i,".order-info__new{text-align:center;color:var(--success);font-size:1.4rem;margin-bottom:2rem}.order-info__orders-link{margin-top:1.5rem}.order-info__number{color:var(--gray)}.order-info__number span{display:block;color:var(--secondary)}.order-info__details{margin-top:.75rem;margin-bottom:1.5rem}.order-info__financial-status,.order-info__status{font-weight:700;font-size:1.15rem;margin:1rem 0}.order-info__status--open{color:var(--info)}.order-info__status--cancelled{color:var(--danger)}.order-info__status--closed{color:var(--success)}.order-info__financial-status--pending{color:var(--warning)}.order-info__financial-status--under_analysis{color:var(--info)}.order-info__financial-status--in_dispute,.order-info__financial-status--unauthorized,.order-info__financial-status--voided{color:var(--danger)}.order-info__financial-status--paid{color:var(--success)}.order-info__summary{background:var(--light)}.order-info__buy-again,.order-info__toggle{display:block;margin-left:auto;margin-top:var(--spacer-4)}","",{version:3,sources:["EcOrderInfo.scss"],names:[],mappings:"AAKE,iBACE,iBAAkB,CAClB,oBAAqB,CACrB,gBAAiB,CACjB,kBAAmB,CACpB,yBAGC,iBAAkB,CACnB,oBAGC,iBAAkB,CADnB,yBAIG,aAAc,CACd,sBAAuB,CACxB,qBAID,iBAAkB,CAClB,oBAAqB,CACtB,kDAIC,eAAiB,CACjB,iBAAkB,CAClB,aAAc,CACf,0BAIG,iBAAkB,CACnB,+BAGC,mBAAoB,CACrB,4BAGC,oBAAqB,CACtB,uCAKC,oBAAqB,CACtB,8CAGC,iBAAkB,CACnB,4HAKC,mBAAoB,CACrB,oCAGC,oBAAqB,CACtB,qBAID,uBAAwB,CACzB,2CAIC,aAAc,CACd,gBAAiB,CACjB,0BAA2B",file:"EcOrderInfo.scss",sourcesContent:["$primary: #592600; $secondary: #262626; $settings-theme: (\n  bootswatch: sketchy,\n  custom: _\n); \n.order-info {\n  &__new {\n    text-align: center;\n    color: var(--success);\n    font-size: 1.4rem;\n    margin-bottom: 2rem;\n  }\n\n  &__orders-link {\n    margin-top: 1.5rem;\n  }\n\n  &__number {\n    color: var(--gray);\n\n    span {\n      display: block;\n      color: var(--secondary);\n    }\n  }\n\n  &__details {\n    margin-top: .75rem;\n    margin-bottom: 1.5rem;\n  }\n\n  &__status,\n  &__financial-status {\n    font-weight: bold;\n    font-size: 1.15rem;\n    margin: 1rem 0;\n  }\n\n  &__status {\n    &--open {\n      color: var(--info);\n    }\n\n    &--cancelled {\n      color: var(--danger);\n    }\n\n    &--closed {\n      color: var(--success);\n    }\n  }\n\n  &__financial-status {\n    &--pending {\n      color: var(--warning);\n    }\n\n    &--under_analysis {\n      color: var(--info);\n    }\n\n    &--unauthorized,\n    &--in_dispute,\n    &--voided {\n      color: var(--danger);\n    }\n\n    &--paid {\n      color: var(--success);\n    }\n  }\n\n  &__summary {\n    background: var(--light);\n  }\n\n  &__toggle,\n  &__buy-again {\n    display: block;\n    margin-left: auto;\n    margin-top: var(--spacer-4);\n  }\n}\n"]}]),t.exports=e},246:function(t,e,s){"use strict";s(49);var r=s(39),a=s(79),i=s(4),n=s(54),o=s(236),c=s(250),d=s(9),l=s(29),_={name:"EcOrderInfo",components:{ShippingLine:o.a,EcSummary:c.a},props:{ecomPassport:{type:Object,default:()=>n.a},order:{type:Object,required:!0},isNew:{type:Boolean},skipDataLoad:{type:Boolean},skipFirstDataLoad:{type:Boolean},skipCustomerUpdate:{type:Boolean},accountOrdersUrl:{type:String,default:"/app/#/account/orders"},cartUrl:{type:String,default:"/app/#/cart"}},data(){return{loaded:this.skipDataLoad||this.skipFirstDataLoad,isUpdating:!1,reloadInterval:null,orderBody:this.order}},computed:{i19buyAgain:()=>Object(r.a)(l.q),i19cancelOrder:()=>Object(r.a)(l.v),i19codeCopied:()=>Object(r.a)(l.G),i19copyCode:()=>Object(r.a)(l.P),i19copyErrorMsg:()=>Object(r.a)(l.Q),i19doPaymentMsg:()=>Object(r.a)(l.Y),i19freight:()=>Object(r.a)(l.ob),i19myOrders:()=>Object(r.a)(l.Qb),i19of:()=>Object(r.a)(l.dc),i19orderConfirmationMsg:()=>Object(r.a)(l.kc),i19orderNumber:()=>Object(r.a)(l.lc),i19printBillet:()=>Object(r.a)(l.wc),i19redirectToPayment:()=>Object(r.a)(l.Cc),i19referenceCode:()=>Object(r.a)(l.Ec),i19reopenOrder:()=>Object(r.a)(l.Kc),i19shippingAddress:()=>Object(r.a)(l.gd),i19transactionCode:()=>Object(r.a)(l.rd),i19ticketCode:()=>Object(r.a)(l.od),localOrder:{get(){return this.orderBody},set(t){this.orderBody=t,this.$emit("update:order",t),this.saveCustomerOrder()}},transaction(){const{transactions:t}=this.localOrder;return t&&t.length?t[0]:{}},shippingAddress(){const{localOrder:t}=this;if(t.shipping_lines&&t.shipping_lines.length)return t.shipping_lines[0].to},status(){return this.localOrder.status},financialStatus(){const{localOrder:t,transaction:e}=this;if(t.payments_history){let e;if(t.payments_history.forEach(t=>{t&&(!e||!t.date_time||t.date_time>=e.date_time)&&(e=t)}),e)return e.status}const s=t.financial_status&&t.financial_status.current;return s||(e&&e.status?e.status.current:"pending")},fulfillmentStatus(){const{localOrder:t}=this,e=t.fulfillment_status&&t.fulfillment_status.current;if(e)return e;{const e=t.shipping_lines&&t.shipping_lines[0];if(e&&e.status)return e.status.current}return null}},methods:{formatMoney:a.a,i19FinancialStatus:t=>Object(r.a)(l.a)[t],i19FulfillmentStatus:t=>Object(r.a)(l.b)[t],i19OrderStatus:t=>Object(r.a)(l.d)[t],toClipboard(t){this.$copyText(t).then(()=>{this.$toast({title:this.i18n("CodeCopied"),body:t,variant:"success",delay:2e3})},e=>{console.error(e),this.$toast({title:"Oops",body:"".concat(this.i18n("copyErrorMsg"),": <i>").concat(t,"</i>"),variant:"warning",delay:3e3})})},saveCustomerOrder(){const{localOrder:t,ecomPassport:e}=this;!this.skipCustomerUpdate&&t.number&&e.checkAuthorization()&&e.requestApi("/me.json").then(({data:s})=>{const r=s.orders||[],a={};["_id","created_at","number","currency_id","currency_symbol","amount","payment_method_label","shipping_method_label"].forEach(e=>{t[e]&&(a[e]=t[e])});const i=r.findIndex(({_id:e,number:s})=>e===t._id||s===t.number);i>-1?Object.assign(r[i],a):r.push(a),e.requestApi("/me.json","patch",{orders:r})})},buyAgain(){const{localOrder:t}=this;if(t.items){const{items:e}=t;e.forEach((t,s)=>{d.a.addItem(t),s+1===e.length&&(d.a.save(),window.location=this.cartUrl)})}},toggle(){this.isUpdating=!0;const t="open"===this.localOrder.status?{status:"cancelled",cancel_reason:"customer"}:{status:"open"};n.a.requestApi("/orders/".concat(this.order._id,".json"),"patch",t).then(()=>{this.localOrder={...this.localOrder,...t}}).finally(()=>{this.isUpdating=!1})}},created(){if(this.order._id&&(this.isNew&&this.saveCustomerOrder(),!this.skipDataLoad)){const t="/orders/".concat(this.order._id,".json"),e=()=>(this.ecomPassport.checkAuthorization()?this.ecomPassport.requestApi(t):Object(i.g)({url:t})).then(({data:t})=>{this.localOrder={...this.localOrder,...t}}).catch(t=>{console.error(t)});this.reloadInterval=setInterval(e,9e3),this.skipFirstDataLoad||setTimeout(()=>{e().finally(()=>{this.loaded=!0})},this.isNew?1e3:3e3)}},beforeDestroy(){clearInterval(this.reloadInterval)}},u=(s(243),s(53)),p=Object(u.a)(_,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order-info py-4"},[t.isNew?s("div",{staticClass:"order-info__new"},[t._v(" "+t._s(t.i19orderConfirmationMsg)+"! ")]):t._e(),s("transition-group",{attrs:{"enter-active-class":"animated fadeInDown slower"}},[t.loaded?s("div",{key:"loaded"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-lg-7"},[s("p",{staticClass:"order-info__number"},[t._v(" "+t._s(t.i19orderNumber)+": "),s("span",{staticClass:"h4"},[t._v(t._s(t.localOrder.number))])]),s("transition-group",{attrs:{"enter-active-class":"animated fadeIn"}},[t.isUpdating?s("div",{key:"updating"},[s("div",{staticClass:"spinner-grow",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v("Loading...")])])]):s("article",{key:"uptodate"},[t.status?s("div",{staticClass:"order-info__status",class:"order-info__status--"+t.status},[t._v(" "+t._s(t.i19OrderStatus(t.status))+" ")]):t._e(),t.transaction.status&&"pending"===t.transaction.status.current?[t.transaction.banking_billet?s("div",{staticClass:"order-info__billet"},[s("p",{staticClass:"lead"},[t._v(t._s(t.i19doPaymentMsg))]),t.transaction.banking_billet.code?[s("p",[t._v(" "+t._s(t.i19ticketCode)+": "),s("br"),s("samp",[t._v(t._s(t.transaction.banking_billet.code))])]),s("button",{staticClass:"btn btn-outline-primary mr-3",on:{click:function(){return t.toClipboard(t.transaction.banking_billet.code)}}},[s("i",{staticClass:"fas fa-copy mr-1"}),t._v(" "+t._s(t.i19copyCode)+" ")])]:t._e(),t.transaction.banking_billet.link?s("a",{staticClass:"btn btn-primary",attrs:{target:"_blank",href:t.transaction.banking_billet.link}},[s("i",{staticClass:"fas fa-print mr-1"}),t._v(" "+t._s(t.i19printBillet)+" ")]):t._e()],2):t.transaction.payment_link?s("div",{staticClass:"order-info__redirect"},[s("p",{staticClass:"lead"},[t._v(t._s(t.i19doPaymentMsg))]),s("a",{staticClass:"btn btn-lg btn-success",attrs:{target:"_blank",href:t.transaction.payment_link}},[s("i",{staticClass:"fas fa-arrow-right mr-1"}),t._v(" "+t._s(t.i19redirectToPayment)+" ")])]):t._e()]:t._e(),s("div",{staticClass:"row order-info__details"},[s("div",{staticClass:"col-12 col-md-6"},[t._t("payment",[s("div",{staticClass:"order-info__payment"},[s("div",{staticClass:"order-info__financial-status",class:"order-info__financial-status--"+t.financialStatus},[t._v(" "+t._s(t.i19FinancialStatus(t.financialStatus))+" ")]),t._l(t.localOrder.transactions,(function(e){return s("div",[s("p",{staticClass:"order-info__payment-value"},[t._v(" "+t._s(e.payment_method.name||t.localOrder.payment_method_label)+": "),e.installments&&e.installments.value?s("strong",[t._v(" "+t._s(e.installments.number)+"x "+t._s(t.i19of.toLowerCase())+" "+t._s(t.formatMoney(e.installments.value))+" ")]):s("strong",[t._v(" "+t._s(t.formatMoney(e.amount||t.localOrder.amount.total))+" ")])]),e.credit_card?s("p",{staticClass:"order-info__credit-card"},[t._v(" "+t._s(e.credit_card.company)+" "),e.credit_card.last_digits?s("span",[e.credit_card.company?t._e():s("span",[t._v(" "+t._s(t.i19cardNumber)+" ")]),t._v(" **** "+t._s(e.credit_card.last_digits)+" ")]):t._e()]):t._e(),e.intermediator?[e.intermediator.transaction_code?s("div",{staticClass:"order-info__transaction-code"},[s("small",[t._v(t._s(t.i19transactionCode))]),s("br"),t._v(" "+t._s(e.intermediator.transaction_code)+" ")]):t._e(),e.intermediator.transaction_reference?s("div",{staticClass:"order-info__transaction-reference"},[s("small",[t._v(t._s(t.i19referenceCode))]),s("br"),t._v(" "+t._s(e.intermediator.transaction_reference)+" ")]):t._e()]:t._e()],2)}))],2)],null,{order:t.localOrder,transaction:t.transaction})],2),s("div",{staticClass:"col-12 col-md-6"},[t._t("shipping",[s("div",{staticClass:"order-info__shipping"},[t.fulfillmentStatus?s("div",{staticClass:"order-info__fulfillment-status",class:"order-info__fulfillment-status--"+t.fulfillmentStatus},[t._v(" "+t._s(t.i19FulfillmentStatus(t.fulfillmentStatus))+" ")]):t._e(),t.shippingAddress&&t.shippingAddress.street?s("div",{staticClass:"order-info__shipping-address"},[s("div",{staticClass:"text-muted"},[s("i",{staticClass:"fas fa-map-marked-alt mr-1"}),t._v(" "+t._s(t.i19shippingAddress)+" ")]),s("address",[t._v(" "+t._s(t.shippingAddress.street)+" "),t.shippingAddress.number?[t._v(" "+t._s(t.shippingAddress.number)+" ")]:t._e(),s("br"),t._l(["borough","city","province_code"],(function(e,r){return t.shippingAddress[e]?s("span",{key:e},[t._v(" "+t._s(t.shippingAddress[e]+(2===r?".":","))+" ")]):t._e()})),s("br"),s("mark",{staticClass:"small"},[t._v(" "+t._s(t.shippingAddress.zip)+" ")])],2)]):t._e(),t.localOrder.shipping_lines?t._l(t.localOrder.shipping_lines,(function(e){return s("div",{key:e._id},[s("div",{staticClass:"text-muted"},[s("i",{staticClass:"fas fa-truck mr-1"}),t._v(" "+t._s(t.i19freight)+" ")]),s("shipping-line",{attrs:{"shipping-line":e}})],1)})):t._e()],2)],null,{order:t.localOrder,shippingAddress:t.shippingAddress})],2)])],2)])],1),t.localOrder.amount?s("div",{staticClass:"col-12 col-lg-5"},[s("div",{staticClass:"order-info__summary card"},[s("div",{staticClass:"card-body"},[s("ec-summary",{attrs:{amount:t.localOrder.amount,items:t.localOrder.items,buyer:t.localOrder.buyer&&t.localOrder.buyer[0],shippingAddress:t.shippingAddress}})],1)]),t.isUpdating?t._e():["open"===t.status?[t.fulfillmentStatus?t._e():s("button",{staticClass:"order-info__toggle btn btn-danger btn-sm",on:{click:t.toggle}},[s("i",{staticClass:"fas fa-exclamation-triangle mr-1"}),t._v(" "+t._s(t.i19cancelOrder)+" ")])]:"closed"!==t.status||"delivered"!==t.fulfillmentStatus?s("button",{staticClass:"order-info__toggle btn btn-sm",class:"cancelled"===t.status?"btn-success":"btn-info",on:{click:t.toggle}},[s("i",{staticClass:"fas fa-check-circle mr-1"}),t._v(" "+t._s(t.i19reopenOrder)+" ")]):t._e()],t._t("buy",[s("button",{staticClass:"order-info__buy-again btn",class:t.isNew?"btn-outline-secondary btn-sm":"btn-primary",attrs:{type:"button"},on:{click:t.buyAgain}},[s("i",{staticClass:"fas fa-shopping-bag mr-1"}),t._v(" "+t._s(t.i19buyAgain)+" ")])])],2):t._e()])]):s("div",{key:"loading"},[s("div",{staticClass:"spinner-border",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v("Loading...")])])])]),t.accountOrdersUrl?s("a",{staticClass:"order-info__orders-link btn btn-sm btn-light",attrs:{href:t.accountOrdersUrl}},[t._v(" "+t._s(t.i19myOrders)+" ")]):t._e()],1)}),[],!1,null,null,null);e.a=p.exports},281:function(t,e,s){var r=s(348);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,s(172).default)("2562c6fd",r,!0,{})},347:function(t,e,s){"use strict";var r=s(281);s.n(r).a},348:function(t,e,s){(e=s(171)(!0)).push([t.i,".order{min-height:300px}","",{version:3,sources:["EcOrder.scss"],names:[],mappings:"AAIA,OACE,gBAAiB",file:"EcOrder.scss",sourcesContent:["$primary: #592600; $secondary: #262626; $settings-theme: (\n  bootswatch: sketchy,\n  custom: _\n); \n.order {\n  min-height: 300px;\n}\n"]}]),t.exports=e},361:function(t,e,s){"use strict";s.r(e);var r=s(118),a=s(4),i=s(54),n={name:"EcOrder",components:{EcOrderInfo:s(246).a},props:{order:{type:Object,required:!0},skipDataLoad:{type:Boolean},accountOrdersUrl:{type:String,default:"/app/#/account/orders"},ecomPassport:{type:Object,default:()=>i.a}},data(){return{isReady:this.skipDataLoad,orderBody:{_id:"",...this.order}}},computed:{localOrder:{get(){return this.orderBody},set(t){this.orderBody=t,this.$emit("update:order",t)}}},methods:{fetchOrder(){const t="/orders/".concat(this.orderBody._id,".json");(this.ecomPassport.checkLogin()?this.ecomPassport.requestApi(t):Object(a.g)({url:t})).then(({data:t})=>{this.localOrder=t,this.isReady=!0})}},watch:{"order._id"(t){t&&t!==this.orderBody._id&&(this.orderBody=this.order)},"orderBody._id"(t){t&&!this.skipDataLoad&&this.fetchOrder()}},created(){this.skipDataLoad||(this.order._id?this.fetchOrder():this.order.number&&this.ecomPassport.fetchOrdersList().then(t=>{this.localOrder=t.find(({number:t})=>t===this.order.number)||{}}))}},o=(s(347),s(53)),c={name:"order",components:{EcOrder:Object(o.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"order"},[s("transition-group",{attrs:{"enter-active-class":"animated fadeIn slow"}},[t.isReady?s("ec-order-info",{key:"info",attrs:{order:t.localOrder,"skip-first-data-load":""},on:{"update:order":function(e){t.localOrder=e}}}):s("div",{key:"loading"},[s("div",{staticClass:"spinner-border",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v("Loading...")])])])],1)],1)}),[],!1,null,null,null).exports},computed:{...Object(r.c)(["orders"]),number(){const t=this.$route.params.number;return/^[0-9]+$/.test(t)&&parseInt(t,10)},order(){const t=this.orders.find(({_id:t,number:e})=>this.number===e||this.$route.params.number===t);if(!t){const{number:t}=this;return t?{_id:this.$route.params.id,number:t}:{_id:this.$route.params.number}}return t}}},d=Object(o.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"order"}},[s("ec-order",{attrs:{order:t.order}})],1)}),[],!1,null,null,null);e.default=d.exports}}]);
//# sourceMappingURL=99165927cc2ca1023706.js.map