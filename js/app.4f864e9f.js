(function(t){function e(e){for(var n,i,c=e[0],o=e[1],l=e[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,c=1;c<a.length;c++){var o=a[c];0!==r[o]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},3092:function(t,e,a){t.exports=a.p+"img/car-icon.83d5a4ce.png"},"4f87":function(t,e,a){"use strict";a("a445")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.current_stage.id==t.my_stages.INTRO_STAGE?a("div",[a("Home")],1):t._e(),t.current_stage.id==t.my_stages.CARD_STAGE?a("div",[a("Cards")],1):t._e()])},s=[],i=a("5530"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel"},[a("div",{staticClass:"menu"},[t._m(0),a("div",{staticClass:"start-button"},[a("b-button",{staticClass:"start",attrs:{variant:"success"},on:{click:function(e){return t.changeState(!0)}}},[t._v("Comparar")])],1)])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("img",{attrs:{alt:"logo",src:a("3092")}})])}],l=a("2f62"),u={INTRO_STAGE:0,CARD_STAGE:1},d=[{brand:"Seat",id:0,icon:"assets/car-icon.png",models:[{name:"Ibiza",description:"aaaaa",price:"15000",icon:"assets/seat/ibiza.png"},{name:"Leon",description:"bbbb",price:"10000",icon:"assets/seat/leon.png"}]},{brand:"Dacia",id:0,icon:"assets/car-icon.png",models:[{name:"Sandero",description:"aaaaa",price:"10000",icon:"assets/seat/ibiza.png"},{name:"Duster",description:"bbbb",price:"20000",icon:"assets/seat/leon.png"}]}],p={name:"Home",data:function(){return{change_state:!1,my_stages:u}},computed:Object(i["a"])({},Object(l["b"])(["stage","current_stage"])),methods:{changeState:function(t){var e=0,a=!1;t?(e=this.current_stage.id+1,e<=this.my_stages.CARD_STAGE&&(a=!0)):(e=this.current_stage.id-1,e>=this.my_stages.INTRO_STAGE&&(a=!0)),a&&this.$store.commit("changeState",{index:this.current_stage.id,destination:e})}}},m=p,f=(a("4f87"),a("2877")),_=Object(f["a"])(m,c,o,!1,null,"2831c57c",null),g=_.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{class:[t.isDark?t.darkClass:t.lightClass,t.alwaysClass]},[a("b-container",[a("form",{staticClass:"pt-4"},[a("b-row",{staticClass:"float-right"},[a("b-form-checkbox",{attrs:{name:"check-button",switch:""},model:{value:t.isDark,callback:function(e){t.isDark=e},expression:"isDark"}},[a("h6",[t._v(t._s(t.lightOrDark)+" theme")])])],1),a("br"),a("h5",[t._v("Selecciona una marca:")]),a("b-row",[a("b-col",[a("b-form-select",{attrs:{options:t.brands},model:{value:t.brand_selected,callback:function(e){t.brand_selected=e},expression:"brand_selected"}})],1)],1),a("br"),a("h5",[t._v("Selecciona un precio máximo:")]),a("b-row",[a("b-col",[a("b-form-input",{attrs:{type:"range",min:"1000",max:"30000",step:"1000"},model:{value:t.max_price,callback:function(e){t.max_price=e},expression:"max_price"}}),a("h6",[t._v("Máximo: "+t._s(t.max_price)+" €")])],1)],1)],1)]),a("br"),a("h1",{staticClass:"title"},[t._v("🚗 Consulta los modelos 🚗")]),a("br"),t._l(t.cars,(function(e,n){return a("b-container",{key:n},[null==t.brand_selected||e.brand==t.brand_selected?a("div",[a("h1",[t._v(t._s(e.brand))]),a("div",{staticClass:"row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4"},t._l(e.models,(function(e,n){return a("div",{key:n,staticClass:"col mb-4"},[t.comparePrice(e.price)?a("b-card",{attrs:{title:t.computeTitle(e.name),"img-src":"https://picsum.photos/600/300/?image=25","img-top":""}},[a("b-card-text",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sapiente. ")]),a("b-card-text",{staticClass:"price"},[t._v(" "+t._s(e.price)+" € ")]),a("div",{staticClass:"text-center"},[a("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.changeState(!1)}}},[t._v("Más información")])],1)],1):t._e()],1)})),0)]):t._e(),n!=t.cars.length-1?a("div",[a("hr")]):t._e()])})),t._m(0)],2)])},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fluid-container footer"},[a("p",{staticClass:"text-center"},[t._v("Data from 2021")])])}],v={name:"Cards",data:function(){return{isDark:!1,darkClass:"darkMode",lightClass:"lightMode",alwaysClass:"alwaysMode",lightOrDark:"Light",change_state:!1,my_stages:u,cars:d,brands:[{text:"Todas",value:null},{text:"Seat",value:"Seat"},{text:"Dacia",value:"Dacia"}],brand_selected:null,max_price:2e4}},computed:Object(i["a"])({},Object(l["b"])(["stage","current_stage"])),methods:{changeState:function(t){var e=0,a=!1;t?(e=this.current_stage.id+1,e<=this.my_stages.CARD_STAGE&&(a=!0)):(e=this.current_stage.id-1,e>=this.my_stages.INTRO_STAGE&&(a=!0)),a&&this.$store.commit("changeState",{index:this.current_stage.id,destination:e})},computeTitle:function(t){return t},comparePrice:function(t){var e=parseFloat(t),a=parseFloat(this.max_price);return e<=a}},watch:{isDark:function(){this.lightOrDark=this.isDark?"Dark":"Light"}}},x=v,y=(a("ec55"),Object(f["a"])(x,b,h,!1,null,"539e4b0c",null)),S=y.exports,C={name:"App",components:{Home:g,Cards:S},data:function(){return{change_state:!1,my_stages:u}},computed:Object(i["a"])({},Object(l["b"])(["stage","current_stage"])),methods:{}},O=C,k=(a("034f"),Object(f["a"])(O,r,s,!1,null,null,null)),w=k.exports;a("b0c0");n["default"].use(l["a"]);var D=new l["a"].Store({state:{stage:[{name:"IntroStage",id:u.INTRO_STAGE,change:!1,change_to:0},{name:"CardStage",id:u.CARD_STAGE,change:!1,change_to:0}],current_stage:{name:"IntroStage",id:0}},mutations:{changeState:function(t,e){t.stage[e.index].change=!0,t.stage[e.index].change_to=e.destination,t.current_stage.id=e.destination,t.current_stage.name=t.stage[e.destination].name}},actions:{},modules:{}}),T=a("5f5b");a("f9e3"),a("2dd8");n["default"].use(T["a"]),n["default"].config.productionTip=!1,new n["default"]({store:D,render:function(t){return t(w)}}).$mount("#app")},"85ec":function(t,e,a){},a445:function(t,e,a){},ba07:function(t,e,a){},ec55:function(t,e,a){"use strict";a("ba07")}});
//# sourceMappingURL=app.4f864e9f.js.map