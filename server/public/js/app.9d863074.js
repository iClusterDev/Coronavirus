(function(t){function e(e){for(var r,s,i=e[0],c=e[1],u=e[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2c0c":function(t,e,n){"use strict";var r=n("efcd"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"app-container"},[n("app-autocomplete",{staticClass:"elevated",attrs:{"world-countries":t.storeUserOptions},on:{select:t.onSelect}}),t.userStats.length>0?t._l(t.userStats,(function(e,r){return n("div",{key:r},[n("app-statistics",{staticClass:"elevated",attrs:{statistics:e},on:{notify:t.onNotify}})],1)})):[t._m(0)],n("div",[t._v(t._s(t.userCountries))]),n("app-toast",{attrs:{duration:1500,message:t.flashMessage}})],2)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"no-data"},[n("div",[t._v("No Countries Selected")]),n("div",[t._v("Add Some")])])}],i=(n("caad"),n("d81d"),n("b0c0"),n("2532"),n("498a"),n("5530")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app-autocomplete"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userCountry,expression:"userCountry"}],attrs:{type:"text",autocomplete:"off",placeholder:"Add Country..."},domProps:{value:t.userCountry},on:{input:[function(e){e.target.composing||(t.userCountry=e.target.value)},t.onInput]}}),n("button",{on:{click:function(e){return e.stopPropagation(),t.onClear(e)}}},[n("font-awesome-icon",{attrs:{icon:"times"}})],1),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"elevated"},t._l(t.menuCountries,(function(e,r){return n("li",{key:r,on:{click:function(n){return n.stopPropagation(),t.onSelect(e)}}},[t._v(t._s(e))])})),0)])},u=[],l=(n("4de4"),n("2ca0"),{name:"app-autocomplete",props:{worldCountries:{type:Array,default:function(){return[]}}},data:function(){return{userCountry:"",menuCountries:[]}},computed:{isOpen:function(){return!!this.userCountry}},methods:{onInput:function(){var t=this;this.menuCountries=this.worldCountries.filter((function(e){return e.startsWith(t.userCountry.toLowerCase())}))},onSelect:function(t){this.userCountry="",this.$emit("select",t)},onClear:function(){this.userCountry=""}}}),p=l,d=(n("2c0c"),n("2877")),m=Object(d["a"])(p,c,u,!1,null,null,null),f=m.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app-statistics"}},[t.statistics?[n("div",{staticClass:"header"},[n("div",{staticClass:"title"},[t._v(t._s(t.statistics.name))]),n("div",{staticClass:"controls"},[n("button",{staticClass:"btn",on:{click:function(e){e.stopPropagation(),t.isFavourite?t.onRemoveBookmark(t.statistics.name):t.onAddBookmark(t.statistics.name)}}},[n("font-awesome-icon",{class:t.isFavourite?"":"unselected",attrs:{icon:"thumbtack"}})],1),n("button",{staticClass:"btn",on:{click:function(e){return e.stopPropagation(),t.onDeleteItem(t.statistics.name)}}},[n("font-awesome-icon",{attrs:{icon:"times"}})],1)])]),n("div",{staticClass:"summary"},[n("div",{staticClass:"stats-item"},[n("small",{staticClass:"stat-item-category"},[t._v("Cases")]),n("div",{staticClass:"stat-item-number"},[t._v(t._s(t.statistics.cases.total))]),n("div",[n("small",[t._v("Today: "+t._s(t.statistics.cases.today)+" ("+t._s(t._f("toPercentage")(t.statistics.cases.growth))+")")])])]),n("div",{staticClass:"stats-item"},[n("small",{staticClass:"stat-item-category"},[t._v("Deaths")]),n("div",{staticClass:"stat-item-number"},[t._v(t._s(t.statistics.deaths.total))]),n("div",[n("small",[t._v("Today: "+t._s(t.statistics.deaths.today)+" ("+t._s(t._f("toPercentage")(t.statistics.deaths.growth))+")")])])])])]:t._e()],2)},h=[],y=(n("99af"),n("b680"),n("2f62")),k={name:"app-statistics",computed:Object(i["a"])({},Object(y["b"])(["storeBookmarks"]),{isFavourite:function(){return this.storeBookmarks.includes(this.statistics.name.toLowerCase())}}),props:{statistics:{type:Object,default:function(){return[]}}},methods:{onAddBookmark:function(t){var e=this;this.$store.dispatch("addBookmark",t.trim().toLowerCase()).then((function(){e.$emit("notify","".concat(t," added to Favourites"))}))},onRemoveBookmark:function(t){var e=this;this.$store.dispatch("removeBookmark",t.trim().toLowerCase()).then((function(){e.$emit("notify","".concat(t," removed from Favourites"))}))},onDeleteItem:function(t){this.$store.dispatch("removeData",t.trim().toLowerCase())}},filters:{toPercentage:function(t){var e=t>0?"+":"-";return"".concat(e).concat(Math.abs(t).toFixed(1),"%")}}},O=k,b=(n("5bce"),Object(d["a"])(O,v,h,!1,null,null,null)),g=b.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app-toast"}},[n("transition",{attrs:{name:"bounce"}},[t.text?[n("div",{staticClass:"toast"},[n("div",{staticClass:"toast-text"},[t._v(t._s(t.text))])])]:t._e()],2)],1)},_=[],C=(n("a9e3"),{name:"app-toast",props:{duration:{type:Number,default:1e3},message:{type:String,default:""}},data:function(){return{text:null}},watch:{message:function(){var t=this;t.message&&!t.text&&(t.text=t.message,setTimeout((function(){t.text=null}),t.duration))}}}),x=C,A=(n("ea2d"),Object(d["a"])(x,w,_,!1,null,null,null)),S=A.exports,D={name:"App",components:{AppAutocomplete:f,AppStatistics:g,AppToast:S},data:function(){return{flashMessage:""}},computed:Object(i["a"])({},Object(y["b"])(["storeBookmarks","storeUserData","storeUserOptions"]),{userCountries:function(){return this.storeUserData.map((function(t){return t.name.toLowerCase()}))},userStats:function(){return this.storeUserData.map((function(t){var e=t.name,n=t.timeline,r=n.cases,a=n.deaths;return{name:e,cases:Object(i["a"])({},r[r.length-1]),deaths:Object(i["a"])({},a[r.length-1])}}))}}),created:function(){this.$store.dispatch("initialize")},methods:{onSelect:function(t){this.userCountries.includes(t.toLowerCase())||this.$store.dispatch("addData",t.trim().toLowerCase())},onNotify:function(t){this.flashMessage=t}}},j=D,R=(n("5c0b"),Object(d["a"])(j,o,s,!1,null,null,null)),E=R.exports,B=n("2909"),L=(n("96cf"),n("1da1")),P=n("ade3"),T={USERDATA_LOAD:"USERDATA_LOAD",BOOKMARKS_LOAD:"BOOKMARKS_LOAD",USEROPTIONS_LOAD:"USEROPTIONS_LOAD"},U=(n("d3b7"),n("d4ec")),I=n("bee2"),M=function(){function t(){Object(U["a"])(this,t)}return Object(I["a"])(t,null,[{key:"async_getItems",value:function(){return new Promise((function(t){var e=localStorage.getItem("bookmarks");t(e?JSON.parse(e):null)}))}},{key:"async_setItems",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(e,n){Array.isArray(t)?(localStorage.setItem("bookmarks",JSON.stringify(t)),e(!0)):n(new Error("Storage Error (setItems): items must be of type Array"))}))}}]),t}(),$=M,N=n("bc3a"),K=n.n(N),F={options:function(){return"\n    query optionsQuery {\n      options\n    }"},countries:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return"\n    query countriesQuery {\n      countries(names: ".concat(JSON.stringify(t),") {\n        name\n        lat\n        long\n        flag\n        timeline {\n          cases {\n            date\n            total\n            today\n            growth\n          }\n          deaths {\n            date\n            total\n            today\n            growth\n          }\n        }\n      }\n    }")},country:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return'\n    query countryQuery {\n      country(name: "'.concat(t,'") {\n        name\n        lat\n        long\n        flag\n        timeline {\n          cases {\n            date\n            total\n            today\n            growth\n          }\n          deaths {\n            date\n            total\n            today\n            growth\n          }\n        }\n      }\n    }\n    ')}},q=function(t){return K.a.post("/graphql",{query:t}).then((function(t){return t.data})).catch((function(t){return t}))},J=function(){function t(){Object(U["a"])(this,t)}return Object(I["a"])(t,null,[{key:"getOptions",value:function(){return q(F.options())}},{key:"getCountries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return q(F.countries(t))}},{key:"getCountry",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return q(F.country(t))}}]),t}(),z=J;a["a"].use(y["a"]);var Q=new y["a"].Store({state:{bookmarks:[],userData:[],userOptions:[]},getters:{storeBookmarks:function(t){return t.bookmarks},storeUserData:function(t){return t.userData},storeUserOptions:function(t){return t.userOptions.map((function(t){return t.toLowerCase()}))}},mutations:(r={},Object(P["a"])(r,T.BOOKMARKS_LOAD,(function(t,e){a["a"].set(t,"bookmarks",e.bookmarks)})),Object(P["a"])(r,T.USERDATA_LOAD,(function(t,e){a["a"].set(t,"userData",e.data)})),Object(P["a"])(r,T.USEROPTIONS_LOAD,(function(t,e){a["a"].set(t,"userOptions",e.options)})),r),actions:{loadBookmarks:function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,$.async_getItems();case 4:r=t.sent,n({type:"BOOKMARKS_LOAD",bookmarks:r||[]}),t.next=11;break;case 8:throw t.prev=8,t.t0=t["catch"](1),new Error("Error (loadBookmarks): ".concat(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));function e(e){return t.apply(this,arguments)}return e}(),addBookmark:function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(e,n){var r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.getters,a=e.commit,r.storeBookmarks.includes(n)){t.next=12;break}return o=[].concat(Object(B["a"])(r.storeBookmarks),[n]),t.prev=3,t.next=6,$.async_setItems(o);case 6:a({type:"BOOKMARKS_LOAD",bookmarks:o}),t.next=12;break;case 9:throw t.prev=9,t.t0=t["catch"](3),new Error("Error (addBookmarks): ".concat(t.t0));case 12:case"end":return t.stop()}}),t,null,[[3,9]])})));function e(e,n){return t.apply(this,arguments)}return e}(),removeBookmark:function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(e,n){var r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.getters,a=e.commit,!r.storeBookmarks.includes(n)){t.next=12;break}return o=r.storeBookmarks.filter((function(t){return t!==n})),t.prev=3,t.next=6,$.async_setItems(o);case 6:a({type:"BOOKMARKS_LOAD",bookmarks:o}),t.next=12;break;case 9:throw t.prev=9,t.t0=t["catch"](3),new Error("Error (removeBookmarks): ".concat(t.t0));case 12:case"end":return t.stop()}}),t,null,[[3,9]])})));function e(e,n){return t.apply(this,arguments)}return e}(),loadOptions:function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(e){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,z.getOptions();case 4:r=t.sent,a=r.data,n({type:"USEROPTIONS_LOAD",options:a.options}),t.next=12;break;case 9:throw t.prev=9,t.t0=t["catch"](1),new Error("Error (loadOptions): ".concat(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));function e(e){return t.apply(this,arguments)}return e}(),loadData:function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(e){var n,r,a,o,s=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,r=s.length>1&&void 0!==s[1]?s[1]:[],!(r.length>0)){t.next=14;break}return t.prev=3,t.next=6,z.getCountries(r);case 6:a=t.sent,o=a.data,n({type:"USERDATA_LOAD",data:o.countries}),t.next=14;break;case 11:throw t.prev=11,t.t0=t["catch"](3),new Error("Error (loadData): ".concat(t.t0));case 14:case"end":return t.stop()}}),t,null,[[3,11]])})));function e(e){return t.apply(this,arguments)}return e}(),addData:function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(e){var n,r,a,o,s,i=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,r=e.commit,a=i.length>1&&void 0!==i[1]?i[1]:"",t.prev=2,t.next=5,z.getCountry(a);case 5:o=t.sent,s=o.data,r({type:"USERDATA_LOAD",data:[].concat(Object(B["a"])(n.userData),[s.country])}),t.next=13;break;case 10:throw t.prev=10,t.t0=t["catch"](2),new Error("Error (addData): ".concat(t.t0));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));function e(e){return t.apply(this,arguments)}return e}(),removeData:function(t,e){var n=t.state,r=t.commit,a=Object(B["a"])(n.userData).filter((function(t){return t.name.toLowerCase()!==e.trim().toLowerCase()}));r({type:"USERDATA_LOAD",data:a})},initialize:function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.getters,r=e.dispatch,t.prev=1,t.next=4,r("loadBookmarks");case 4:return t.next=6,r("loadOptions");case 6:return t.next=8,r("loadData",n.storeBookmarks);case 8:t.next=13;break;case 10:throw t.prev=10,t.t0=t["catch"](1),new Error("Error (initialize): ".concat(t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));function e(e){return t.apply(this,arguments)}return e}()},modules:{}}),W=n("ecee"),G=n("c074"),H=n("ad3d");W["c"].add(G["b"]),W["c"].add(G["a"]),a["a"].component("font-awesome-icon",H["a"]),a["a"].config.productionTip=!1,new a["a"]({store:Q,render:function(t){return t(E)}}).$mount("#app")},"5bce":function(t,e,n){"use strict";var r=n("d229"),a=n.n(r);a.a},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(t,e,n){},d229:function(t,e,n){},d796:function(t,e,n){},ea2d:function(t,e,n){"use strict";var r=n("d796"),a=n.n(r);a.a},efcd:function(t,e,n){}});
//# sourceMappingURL=app.9d863074.js.map