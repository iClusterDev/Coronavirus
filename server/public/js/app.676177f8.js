(function(t){function e(e){for(var r,o,i=e[0],c=e[1],u=e[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2c0c":function(t,e,n){"use strict";var r=n("efcd"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"app-container"},[n("app-autocomplete",{staticClass:"elevated",attrs:{"world-countries":t.storeUserOptions},on:{select:t.onSelect}}),t.storeUserData.length>0?t._l(t.storeUserData,(function(e,r){return n("div",{key:r},[n("app-statistics",{staticClass:"elevated",attrs:{statistics:e},on:{notify:t.onNotify}})],1)})):[t._m(0)],n("app-toast",{attrs:{duration:1500,message:t.flashMessage}})],2)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"no-data"},[n("div",[t._v("No Countries Selected")]),n("div",[t._v("Add Some")])])}],i=(n("498a"),n("5530")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app-autocomplete"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userCountry,expression:"userCountry"}],attrs:{type:"text",autocomplete:"off",placeholder:"Add Country..."},domProps:{value:t.userCountry},on:{input:[function(e){e.target.composing||(t.userCountry=e.target.value)},t.onInput]}}),n("button",{on:{click:function(e){return e.stopPropagation(),t.onClear(e)}}},[n("font-awesome-icon",{attrs:{icon:"times"}})],1),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"elevated"},t._l(t.menuCountries,(function(e,r){return n("li",{key:r,on:{click:function(n){return n.stopPropagation(),t.onSelect(e)}}},[t._v(t._s(e))])})),0)])},u=[],l=(n("4de4"),n("2ca0"),{name:"app-autocomplete",props:{worldCountries:{type:Array,default:function(){return[]}}},data:function(){return{userCountry:"",menuCountries:[]}},computed:{isOpen:function(){return!!this.userCountry}},methods:{onInput:function(){var t=this;this.menuCountries=this.worldCountries.filter((function(e){return e.startsWith(t.userCountry.toLowerCase())}))},onSelect:function(t){this.userCountry="",this.$emit("select",t)},onClear:function(){this.userCountry=""}}}),p=l,d=(n("2c0c"),n("2877")),f=Object(d["a"])(p,c,u,!1,null,null,null),m=f.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app-statistics"}},[t.statistics?[n("div",{staticClass:"header"},[n("div",{staticClass:"title"},[t._v(t._s(t.statistics.country))]),n("div",{staticClass:"controls"},[n("button",{staticClass:"btn",on:{click:function(e){e.stopPropagation(),t.isFavourite?t.onRemoveBookmark(t.statistics.country):t.onAddBookmark(t.statistics.country)}}},[n("font-awesome-icon",{class:t.isFavourite?"":"unselected",attrs:{icon:"thumbtack"}})],1),n("button",{staticClass:"btn",on:{click:function(e){return e.stopPropagation(),t.onDeleteItem(t.statistics.country)}}},[n("font-awesome-icon",{attrs:{icon:"times"}})],1)])]),n("div",{staticClass:"summary"},[n("div",{staticClass:"stats-item"},[n("small",{staticClass:"stat-item-category"},[t._v("Total Cases")]),n("div",{staticClass:"stat-item-number"},[t._v(t._s(t.statistics.cases))]),n("div",[n("small",[t._v("Today: "+t._s(t.statistics.todayCases))])])]),n("div",{staticClass:"stats-item"},[n("small",{staticClass:"stat-item-category"},[t._v("Total Deaths")]),n("div",{staticClass:"stat-item-number"},[t._v(t._s(t.statistics.deaths))]),n("div",[n("small",[t._v("Today: "+t._s(t.statistics.todayDeaths))])])])]),n("div",{staticClass:"info"},[n("div",[n("small",[t._v("active")]),n("div",{staticClass:"info-number"},[t._v(t._s(t.statistics.active))])]),n("div",[n("small",[t._v("critical")]),n("div",{staticClass:"info-number"},[t._v(t._s(t.statistics.critical))])]),n("div",[n("small",[t._v("recovered")]),n("div",{staticClass:"info-number"},[t._v(t._s(t.statistics.recovered))])])])]:t._e()],2)},h=[],y=(n("caad"),n("2532"),n("2f62")),O={name:"app-statistics",computed:Object(i["a"])({},Object(y["b"])(["storeBookmarks"]),{isFavourite:function(){return this.storeBookmarks.includes(this.statistics.country.toLowerCase())}}),props:{statistics:{type:Object,default:function(){return[]}}},methods:{onAddBookmark:function(t){var e=this;this.$store.dispatch("addBookmark",t.trim().toLowerCase()).then((function(){e.$emit("notify","".concat(t," added to Favourites"))}))},onRemoveBookmark:function(t){var e=this;this.$store.dispatch("removeBookmark",t.trim().toLowerCase()).then((function(){e.$emit("notify","".concat(t," removed from Favourites"))}))},onDeleteItem:function(t){this.$store.dispatch("removeData",t.trim().toLowerCase())}}},b=O,k=(n("5bce"),Object(d["a"])(b,v,h,!1,null,null,null)),g=k.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app-toast"}},[n("transition",{attrs:{name:"bounce"}},[t.text?[n("div",{staticClass:"toast"},[n("div",{staticClass:"toast-text"},[t._v(t._s(t.text))])])]:t._e()],2)],1)},w=[],C=(n("a9e3"),{name:"app-toast",props:{duration:{type:Number,default:1e3},message:{type:String,default:""}},data:function(){return{text:null}},watch:{message:function(){var t=this;t.message&&!t.text&&(t.text=t.message,setTimeout((function(){t.text=null}),t.duration))}}}),A=C,D=(n("ea2d"),Object(d["a"])(A,_,w,!1,null,null,null)),x=D.exports,S={name:"App",components:{AppAutocomplete:m,AppStatistics:g,AppToast:x},data:function(){return{flashMessage:""}},computed:Object(i["a"])({},Object(y["b"])(["storeBookmarks","storeUserData","storeUserCountries","storeUserOptions"])),methods:{onSelect:function(t){this.$store.dispatch("addData",t.trim().toLowerCase())},onNotify:function(t){this.flashMessage=t}},created:function(){this.$store.dispatch("initialize")}},R=S,j=(n("5c0b"),Object(d["a"])(R,s,o,!1,null,null,null)),L=j.exports,B=(n("99af"),n("d81d"),n("2909")),U=(n("96cf"),n("1da1")),E=n("ade3"),P={USERDATA_LOAD:"USERDATA_LOAD",BOOKMARKS_LOAD:"BOOKMARKS_LOAD",USEROPTIONS_LOAD:"USEROPTIONS_LOAD",USERCOUNTRIES_LOAD:"USERCOUNTRIES_LOAD"},T=(n("d3b7"),n("d4ec")),I=n("bee2"),N=function(){function t(){Object(T["a"])(this,t)}return Object(I["a"])(t,null,[{key:"async_getItems",value:function(){return new Promise((function(t){var e=localStorage.getItem("bookmarks");t(e?JSON.parse(e):null)}))}},{key:"async_setItems",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(e,n){Array.isArray(t)?(localStorage.setItem("bookmarks",JSON.stringify(t)),e(!0)):n(new Error("Storage Error (setItems): items must be of type Array"))}))}}]),t}(),M=N,$=n("bc3a"),K=n.n($),q=function(){function t(){Object(T["a"])(this,t)}return Object(I["a"])(t,null,[{key:"getOptions",value:function(){return new Promise((function(t,e){var n="\n      query countryQuery {\n        countries {\n          country\n        }\n      }";K.a.post("/graphql",{query:n}).then((function(e){var n=e.data.data;t(n)})).catch((function(t){e(t)}))}))}},{key:"getData",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(e,n){var r="\n      query statsQuery {\n          stats(countries: ".concat(JSON.stringify(t),") {\n            country\n            cases\n            deaths\n            active\n            critical\n            recovered\n            todayCases\n            todayDeaths\n            casesPerOneMillion\n          }\n        }\n      ");K.a.post("/graphql",{query:r}).then((function(t){var n=t.data.data;e(n)})).catch((function(t){n(t)}))}))}}]),t}(),F=q;a["a"].use(y["a"]);var J=new y["a"].Store({state:{bookmarks:[],userData:[],userOptions:[]},getters:{storeBookmarks:function(t){return t.bookmarks},storeUserData:function(t){return t.userData},storeUserOptions:function(t){return t.userOptions},storeUserCountries:function(t){return t.userData.map((function(t){return t.country.toLowerCase()}))}},mutations:(r={},Object(E["a"])(r,P.BOOKMARKS_LOAD,(function(t,e){a["a"].set(t,"bookmarks",e.bookmarks)})),Object(E["a"])(r,P.USERDATA_LOAD,(function(t,e){a["a"].set(t,"userData",e.data)})),Object(E["a"])(r,P.USEROPTIONS_LOAD,(function(t,e){a["a"].set(t,"userOptions",e.options)})),r),actions:{loadOptions:function(){var t=Object(U["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,F.getOptions();case 4:r=t.sent,n({type:"USEROPTIONS_LOAD",options:r.countries.map((function(t){return t.country.toLowerCase()}))}),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));function e(e){return t.apply(this,arguments)}return e}(),loadData:function(){var t=Object(U["a"])(regeneratorRuntime.mark((function t(e){var n,r,a,s,o=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=o.length>1&&void 0!==o[1]?o[1]:[],t.prev=2,t.next=5,F.getData(r);case 5:a=t.sent,s=a.stats,n({type:"USERDATA_LOAD",data:s}),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](2),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));function e(e){return t.apply(this,arguments)}return e}(),addData:function(){var t=Object(U["a"])(regeneratorRuntime.mark((function t(e){var n,r,a,s,o,i=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.getters,r=e.commit,a=i.length>1&&void 0!==i[1]?i[1]:"",t.prev=2,t.next=5,F.getData([a]);case 5:s=t.sent,o=s.stats,r({type:"USERDATA_LOAD",data:[].concat(Object(B["a"])(n.storeUserData),[o[0]])}),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](2),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));function e(e){return t.apply(this,arguments)}return e}(),removeData:function(t,e){var n=t.getters,r=t.commit,a=Object(B["a"])(n.storeUserData).filter((function(t){return t.country.toLowerCase()!==e.trim().toLowerCase()}));r({type:"USERDATA_LOAD",data:a})},loadBookmarks:function(){var t=Object(U["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,M.async_getItems();case 4:r=t.sent,n({type:"BOOKMARKS_LOAD",bookmarks:r||[]}),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));function e(e){return t.apply(this,arguments)}return e}(),addBookmark:function(){var t=Object(U["a"])(regeneratorRuntime.mark((function t(e,n){var r,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.getters,a=e.commit,r.storeBookmarks.includes(n)){t.next=12;break}return s=[].concat(Object(B["a"])(r.storeBookmarks),[n]),t.prev=3,t.next=6,M.async_setItems(s);case 6:a({type:"BOOKMARKS_LOAD",bookmarks:s}),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](3),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[3,9]])})));function e(e,n){return t.apply(this,arguments)}return e}(),removeBookmark:function(){var t=Object(U["a"])(regeneratorRuntime.mark((function t(e,n){var r,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.getters,a=e.commit,!r.storeBookmarks.includes(n)){t.next=12;break}return s=r.storeBookmarks.filter((function(t){return t!==n})),t.prev=3,t.next=6,M.async_setItems(s);case 6:a({type:"BOOKMARKS_LOAD",bookmarks:s}),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](3),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[3,9]])})));function e(e,n){return t.apply(this,arguments)}return e}(),initialize:function(){var t=Object(U["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.getters,r=e.dispatch,t.prev=1,t.next=4,r("loadBookmarks");case 4:return t.next=6,r("loadOptions");case 6:return t.next=8,r("loadData",n.storeBookmarks);case 8:t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));function e(e){return t.apply(this,arguments)}return e}()},modules:{}}),z=n("ecee"),Q=n("c074"),W=n("ad3d");z["c"].add(Q["b"]),z["c"].add(Q["a"]),a["a"].component("font-awesome-icon",W["a"]),a["a"].config.productionTip=!1,new a["a"]({store:J,render:function(t){return t(L)}}).$mount("#app")},"5bce":function(t,e,n){"use strict";var r=n("d229"),a=n.n(r);a.a},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(t,e,n){},d229:function(t,e,n){},d796:function(t,e,n){},ea2d:function(t,e,n){"use strict";var r=n("d796"),a=n.n(r);a.a},efcd:function(t,e,n){}});
//# sourceMappingURL=app.676177f8.js.map