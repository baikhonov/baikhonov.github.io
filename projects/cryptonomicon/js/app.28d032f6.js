(function(){"use strict";var e={7185:function(e,t,r){var i=r(9242),n=r(3396),s=r(7139);const a={class:"container mx-auto flex flex-col items-center bg-gray-100 p-4"},o={key:0,class:"fixed w-100 h-100 opacity-80 bg-purple-800 inset-0 z-50 flex items-center justify-center"},l=(0,n._)("svg",{class:"animate-spin -ml-1 mr-3 h-12 w-12 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[(0,n._)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),(0,n._)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),c=[l],d={class:"container"},u=(0,n._)("div",{class:"w-full my-4"},null,-1),h=(0,n._)("hr",{class:"w-full border-t border-gray-600 my-4"},null,-1),g=(0,n.Uk)("Фильтр: "),p=(0,n._)("hr",{class:"w-full border-t border-gray-600 my-4"},null,-1),f={class:"mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3"},m=["onClick"],w={class:"px-4 py-5 sm:p-6 text-center"},k={class:"text-sm font-medium text-gray-500 truncate"},y={class:"mt-1 text-3xl font-semibold text-gray-900"},b=(0,n._)("div",{class:"w-full border-t border-gray-200"},null,-1),v=["onClick"],x=(0,n._)("svg",{"aria-hidden":"true",class:"h-5 w-5",fill:"#718096",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{"clip-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","fill-rule":"evenodd"})],-1),_=(0,n.Uk)(" Удалить "),T=[x,_],C=(0,n._)("hr",{class:"w-full border-t border-gray-600 my-4"},null,-1),D={key:1,class:"relative"},E={class:"text-lg leading-6 font-medium text-gray-900 my-8"},O={class:"flex items-end border-gray-600 border-b border-l h-64",ref:"graph"},S={height:"30",style:{"enable-background":"new 0 0 512 512"},version:"1.1",viewBox:"0 0 511.76 511.76",width:"30",x:"0","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:svgjs":"http://svgjs.com/svgjs","xmlns:xlink":"http://www.w3.org/1999/xlink",y:"0"},M=(0,n._)("g",null,[(0,n._)("path",{d:"M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048    c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z     M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165    c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0    c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z","data-original":"#000000",fill:"#718096"})],-1),z=[M];function A(e,t,r,l,x,_){const M=(0,n.up)("add-ticker");return(0,n.wg)(),(0,n.iD)("div",a,[x.isDataLoading?((0,n.wg)(),(0,n.iD)("div",o,c)):(0,n.kq)("",!0),(0,n._)("div",d,[u,(0,n.Wm)(M,{onAddTicker:_.add,disabled:_.tooManyTickersAdded},null,8,["onAddTicker","disabled"]),x.tickers.length?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[h,(0,n._)("div",null,[x.page>1?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:t[0]||(t[0]=e=>x.page--),class:"mx-2 my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"}," Назад ")):(0,n.kq)("",!0),_.hasNextPage?((0,n.wg)(),(0,n.iD)("button",{key:1,onClick:t[1]||(t[1]=e=>x.page++),class:"mx-2 my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"}," Вперёд ")):(0,n.kq)("",!0),(0,n._)("p",null,[g,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>x.filter=e),type:"text"},null,512),[[i.nr,x.filter]])])]),p,(0,n._)("dl",f,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(_.paginatedTickers,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.name,onClick:t=>_.select(e),class:(0,s.C_)([{"border-4":x.selectedTicker===e},"bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer"])},[(0,n._)("div",w,[(0,n._)("dt",k,(0,s.zw)(e.name)+" - USD ",1),(0,n._)("dd",y,(0,s.zw)(_.formatPrice(e.price)),1)]),b,(0,n._)("button",{onClick:(0,i.iM)((t=>_.handleDelete(e)),["stop"]),class:"flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none"},T,8,v)],10,m)))),128))]),C],64)):(0,n.kq)("",!0),x.selectedTicker?((0,n.wg)(),(0,n.iD)("section",D,[(0,n._)("h3",E,(0,s.zw)(x.selectedTicker.name)+" - USD ",1),(0,n._)("div",O,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(_.normalizedGraph,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:t,style:(0,s.j5)({height:`${e}%`}),class:"bg-purple-800 border w-10"},null,4)))),128))],512),(0,n._)("button",{onClick:t[3]||(t[3]=e=>x.selectedTicker=null),class:"absolute top-0 right-0",type:"button"},[((0,n.wg)(),(0,n.iD)("svg",S,z))])])):(0,n.kq)("",!0)])])}r(6699);const G="32054d5d18f4c3ecbf6da770f1e71f079163c7da5c694535362e18471f8a18d8",j=new Map,P=new WebSocket(`wss://streamer.cryptocompare.com/v2?api_key=${G}`),U="5";function $(e){const t=JSON.stringify(e);P.readyState!==WebSocket.OPEN?P.addEventListener("open",(()=>{P.send(t)}),{once:!0}):P.send(t)}function L(e){$({action:"SubAdd",subs:[`5~CCCAGG~${e}~USD`]})}function B(e){$({action:"SubRemove",subs:[`5~CCCAGG~${e}~USD`]})}P.addEventListener("message",(e=>{const{TYPE:t,FROMSYMBOL:r,PRICE:i}=JSON.parse(e.data);if(t!==U||void 0===i)return;const n=j.get(r)??[];n.forEach((e=>e(i)))}));const I=(e,t)=>{const r=j.get(e)||[];j.set(e,[...r,t]),L(e)},q=e=>{j.delete(e),B(e)},H={class:"flex"},N={class:"max-w-xs"},V=(0,n._)("label",{class:"block text-sm font-medium text-gray-700",for:"wallet"},"Тикер",-1),W={class:"mt-1 relative rounded-md shadow-md"};function Y(e,t,r,s,a,o){const l=(0,n.up)("add-button");return(0,n.wg)(),(0,n.iD)("section",null,[(0,n._)("div",H,[(0,n._)("div",N,[V,(0,n._)("div",W,[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>a.ticker=e),onKeydown:t[1]||(t[1]=(0,i.D2)(((...e)=>o.add&&o.add(...e)),["enter"])),onInput:t[2]||(t[2]=(...t)=>e.validateTicker&&e.validateTicker(...t)),id:"wallet",class:"block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md",name:"wallet",placeholder:"Например DOGE",type:"text"},null,544),[[i.nr,a.ticker]])])])]),(0,n.Wm)(l,{onClick:o.add,class:"my-4",disabled:r.disabled},null,8,["onClick","disabled"])])}const J=["disabled"],R=(0,n._)("svg",{class:"-ml-0.5 mr-2 h-6 w-6",fill:"#ffffff",height:"30",viewBox:"0 0 24 24",width:"30",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})],-1),F=(0,n.Uk)(" Добавить "),K=[R,F];function Z(e,t,r,i,a,o){return(0,n.wg)(),(0,n.iD)("button",{type:"button",class:(0,s.C_)(["inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",{"opacity-50":r.disabled}]),disabled:r.disabled},K,10,J)}var Q={name:"AddButton",props:{disabled:{type:Boolean,required:!1,default:!1}}},X=r(89);const ee=(0,X.Z)(Q,[["render",Z]]);var te=ee,re={name:"AddTicker",components:{AddButton:te},props:{disabled:{type:Boolean,required:!1,default:!1}},emits:{"add-ticker":e=>"string"===typeof e&&e.length>0},data(){return{ticker:""}},methods:{add(){0!==this.ticker.length&&(this.$emit("add-ticker",this.ticker),this.ticker="")}}};const ie=(0,X.Z)(re,[["render",Y]]);var ne=ie,se={name:"App",components:{AddTicker:ne},data(){return{filter:"",tickers:[],selectedTicker:null,graph:[],maxGraphElements:1,page:1,isDataLoading:!1}},created(){const e=Object.fromEntries(new URL(window.location).searchParams.entries()),t=["filter","page"];t.forEach((t=>{e[t]&&(this[t]=e[t])}));const r=localStorage.getItem("cryptonomicon-list");r&&(this.tickers=JSON.parse(r),this.tickers.forEach((e=>{I(e.name,(t=>this.updateTicker(e.name,t)))})))},mounted(){window.addEventListener("resize",this.calculateMaxGraphElements)},beforeUnmount(){window.removeEventListener("resize",this.calculateMaxGraphElements)},computed:{tooManyTickersAdded(){return this.tickers.length>4},startIndex(){return 6*(this.page-1)},endIndex(){return 6*this.page},filteredTickers(){return this.tickers.filter((e=>e.name.includes(this.filter)))},paginatedTickers(){return this.filteredTickers.slice(this.startIndex,this.endIndex)},hasNextPage(){return this.filteredTickers.length>this.endIndex},limitedAvailableStickers(){return 0},normalizedGraph(){const e=Math.max(...this.graph),t=Math.min(...this.graph);return e===t?this.graph.map((()=>50)):this.graph.map((r=>5+95*(r-t)/(e-t)))},pageStateOptions(){return{filter:this.filter,page:this.page}}},methods:{calculateMaxGraphElements(){this.$refs.graph&&(this.maxGraphElements=this.$refs.graph.clientWidth/38)},updateTicker(e,t){this.tickers.filter((t=>t.name===e)).forEach((e=>{e===this.selectedTicker&&(this.graph.push(t),this.graph.length>this.maxGraphElements&&(this.graph=this.graph.slice(-this.maxGraphElements))),e.price=t}))},formatPrice(e){return"-"===e?e:e>1?e.toFixed(2):e.toPrecision(2)},add(e){const t={name:e,price:"-"};this.tickers=[...this.tickers,t],this.filter="",I(t.name,(e=>this.updateTicker(t.name,e)))},select(e){this.selectedTicker=e},handleDelete(e){this.tickers=this.tickers.filter((t=>t!==e)),this.selectedTicker===e&&(this.selectedTicker=null),q(e.name)}},watch:{async selectedTicker(){this.graph=[],this.$nextTick().then(this.calculateMaxGraphElements)},tickers(){localStorage.setItem("cryptonomicon-list",JSON.stringify(this.tickers))},paginatedTickers(){0===this.paginatedTickers.length&&this.page>1&&(this.page-=1)},filter(){this.page=1},pageStateOptions(e){window.history.pushState(null,document.title,`${window.location.pathname}?filter=${e.filter}&page=${e.page}`)}}};const ae=(0,X.Z)(se,[["render",A]]);var oe=ae;(0,i.ri)(oe).mount("#app")}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,i,n,s){if(!i){var a=1/0;for(d=0;d<e.length;d++){i=e[d][0],n=e[d][1],s=e[d][2];for(var o=!0,l=0;l<i.length;l++)(!1&s||a>=s)&&Object.keys(r.O).every((function(e){return r.O[e](i[l])}))?i.splice(l--,1):(o=!1,s<a&&(a=s));if(o){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[i,n,s]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,s,a=i[0],o=i[1],l=i[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(n in o)r.o(o,n)&&(r.m[n]=o[n]);if(l)var d=l(r)}for(t&&t(i);c<a.length;c++)s=a[c],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(d)},i=self["webpackChunkcryptonomicon"]=self["webpackChunkcryptonomicon"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(7185)}));i=r.O(i)})();
//# sourceMappingURL=app.28d032f6.js.map