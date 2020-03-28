(function(t){function e(e){for(var n,o,i=e[0],u=e[1],c=e[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,i=1;i<s.length;i++){var u=s[i];0!==a[u]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},a={app:0},r=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"2c0c":function(t,e,s){"use strict";var n=s("efcd"),a=s.n(n);a.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"app-container"},[s("app-autocomplete",{staticClass:"elevated",attrs:{"world-countries":t.worldCountries},on:{select:t.onSelect}}),t.userData.length>0?t._l(t.userData,(function(e,n){return s("div",{key:n},[s("app-statistics",{staticClass:"elevated",attrs:{statistics:e,favourite:t.userBookmarks.includes(e.country.toLowerCase())},on:{pin:t.onPin,unPin:t.onUnpin,delete:t.onDelete}})],1)})):[t._m(0)],s("app-toast",{attrs:{duration:1500,message:t.flashMessage}})],2)])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"no-data"},[s("div",[t._v("No Countries Selected")]),s("div",[t._v("Add Some")])])}],o=(s("99af"),s("4de4"),s("a630"),s("caad"),s("d81d"),s("b0c0"),s("d3b7"),s("25f0"),s("6062"),s("2532"),s("3ca3"),s("498a"),s("ddb0"),s("2909")),i=s("d4ec"),u=s("bee2"),c=s("bc3a"),l=s.n(c),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app-autocomplete"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userCountry,expression:"userCountry"}],attrs:{type:"text",autocomplete:"off",placeholder:"Add Country..."},domProps:{value:t.userCountry},on:{input:[function(e){e.target.composing||(t.userCountry=e.target.value)},t.onInput]}}),s("button",{on:{click:function(e){return e.stopPropagation(),t.onClear(e)}}},[s("font-awesome-icon",{attrs:{icon:"times"}})],1),s("ul",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"elevated"},t._l(t.menuCountries,(function(e,n){return s("li",{key:n,on:{click:function(s){return s.stopPropagation(),t.onSelect(e)}}},[t._v(t._s(e))])})),0)])},f=[],p=(s("2ca0"),{name:"app-autocomplete",props:{worldCountries:{type:Array,default:function(){return[]}}},data:function(){return{userCountry:"",menuCountries:[]}},computed:{isOpen:function(){return!!this.userCountry}},methods:{onInput:function(){var t=this;this.menuCountries=this.worldCountries.filter((function(e){return e.startsWith(t.userCountry.toLowerCase())}))},onSelect:function(t){this.userCountry="",this.$emit("select",t)},onClear:function(){this.userCountry=""}}}),v=p,m=(s("2c0c"),s("2877")),h=Object(m["a"])(v,d,f,!1,null,null,null),y=h.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app-statistics"}},[t.statistics?[s("div",{staticClass:"header"},[s("div",{staticClass:"title"},[t._v(t._s(t.statistics.country))]),s("div",{staticClass:"controls"},[s("button",{staticClass:"btn",on:{click:function(e){e.stopPropagation(),t.favourite?t.$emit("unPin",t.statistics.country):t.$emit("pin",t.statistics.country)}}},[s("font-awesome-icon",{class:t.favourite?"":"unselected",attrs:{icon:"thumbtack"}})],1),s("button",{staticClass:"btn",on:{click:function(e){return e.stopPropagation(),t.$emit("delete",t.statistics.country)}}},[s("font-awesome-icon",{attrs:{icon:"times"}})],1)])]),s("div",{staticClass:"summary"},[s("div",{staticClass:"stats-item"},[s("small",{staticClass:"stat-item-category"},[t._v("Total Cases")]),s("div",{staticClass:"stat-item-number"},[t._v(t._s(t.statistics.cases))]),s("div",[s("small",[t._v("Today: "+t._s(t.statistics.todayCases))])])]),s("div",{staticClass:"stats-item"},[s("small",{staticClass:"stat-item-category"},[t._v("Total Deaths")]),s("div",{staticClass:"stat-item-number"},[t._v(t._s(t.statistics.deaths))]),s("div",[s("small",[t._v("Today: "+t._s(t.statistics.todayDeaths))])])])]),s("div",{staticClass:"info"},[s("div",[s("small",[t._v("active")]),s("div",{staticClass:"info-number"},[t._v(t._s(t.statistics.active))])]),s("div",[s("small",[t._v("critical")]),s("div",{staticClass:"info-number"},[t._v(t._s(t.statistics.critical))])]),s("div",[s("small",[t._v("recovered")]),s("div",{staticClass:"info-number"},[t._v(t._s(t.statistics.recovered))])])])]:t._e()],2)},g=[],b={name:"app-statistics",props:{statistics:{type:Object,default:function(){return[]}},favourite:{type:Boolean,default:!1}}},_=b,w=(s("5bce"),Object(m["a"])(_,C,g,!1,null,null,null)),O=w.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app-toast"}},[s("transition",{attrs:{name:"bounce"}},[t.text?[s("div",{staticClass:"toast"},[s("div",{staticClass:"toast-text"},[t._v(t._s(t.text))])])]:t._e()],2)],1)},S=[],x=(s("a9e3"),{name:"app-toast",props:{duration:{type:Number,default:1e3},message:{type:String,default:""}},data:function(){return{text:null}},watch:{message:function(){var t=this;t.message&&!t.text&&(t.text=t.message,setTimeout((function(){t.text=null}),t.duration))}}}),j=x,I=(s("ea2d"),Object(m["a"])(j,k,S,!1,null,null,null)),P=I.exports,D=function(){function t(e){Object(i["a"])(this,t),this.name=e||null}return Object(u["a"])(t,[{key:"getItems",value:function(){var t=localStorage.getItem(this.name);return t?JSON.parse(t):null}},{key:"setItems",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return!!Array.isArray(t)&&(localStorage.setItem(this.name,JSON.stringify(t)),!0)}},{key:"addItem",value:function(t){var e=t.toString().trim().toLowerCase(),s=this.getItems();if(s){if(s.includes(e))return!1;s=[].concat(Object(o["a"])(s),[e])}else s=[e];return this.setItems(s),!0}},{key:"removeItem",value:function(t){var e=t.toString().trim().toLowerCase(),s=this.getItems();return!!s&&(s=s.filter((function(t){return t!==e})),this.setItems(s),!0)}},{key:"clearItems",value:function(){localStorage.clear()}}]),t}(),A={name:"App",components:{AppAutocomplete:y,AppStatistics:O,AppToast:P},data:function(){return{flashMessage:"",worldCountries:[],userCountries:new Set,userBookmarks:[],userData:[],storage:new D("bookmarks")}},methods:{onSelect:function(t){var e=this;this.userCountries=new Set(this.userCountries.add(t.toLowerCase()));var s=JSON.stringify(Array.from(this.userCountries)),n="\n      query statsQuery {\n          stats(countries: ".concat(s,") {\n            country\n            cases\n            deaths\n            active\n            critical\n            recovered\n            todayCases\n            todayDeaths\n            casesPerOneMillion\n          }\n        } \n      ");l()({url:"/graphql",method:"post",data:{query:n}}).then((function(t){var s=t.data.data;e.userData=s.stats}))},onDelete:function(t){this.userCountries.delete(t.toLowerCase())&&(this.userCountries=new Set(this.userCountries),this.userData=this.userData.filter((function(e){return e.country.toLowerCase()!=t.toLowerCase()})))},onPin:function(t){this.storage.addItem(t)&&(this.userBookmarks=this.storage.getItems(),this.flashMessage="".concat(t," added from Favourites"))},onUnpin:function(t){this.storage.removeItem(t)&&(this.userBookmarks=this.storage.getItems(),this.flashMessage="".concat(t," removed from Favourites"))}},created:function(){var t=this,e="\n      query countryQuery {\n        countries {\n          country\n        }\n      }";l()({url:"/graphql",method:"post",data:{query:e}}).then((function(e){var s=e.data.data;t.worldCountries=s.countries.map((function(t){return t.country.toLowerCase()}))}))},mounted:function(){var t=this,e=this.storage.getItems();if(e){this.userCountries=new Set(Object(o["a"])(e)),this.userBookmarks=Object(o["a"])(e);var s="\n        query statsQuery {\n            stats(countries: ".concat(JSON.stringify(e),") {\n              country\n              cases\n              deaths\n              active\n              critical\n              recovered\n              todayCases\n              todayDeaths\n              casesPerOneMillion\n            }\n          }\n        ");l()({url:"/graphql",method:"post",data:{query:s}}).then((function(e){var s=e.data.data;t.userData=s.stats}))}}},M=A,$=(s("5c0b"),Object(m["a"])(M,a,r,!1,null,null,null)),q=$.exports,L=s("ecee"),T=s("c074"),N=s("ad3d");L["c"].add(T["b"]),L["c"].add(T["a"]),n["a"].component("font-awesome-icon",N["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(q)}}).$mount("#app")},"5bce":function(t,e,s){"use strict";var n=s("d229"),a=s.n(n);a.a},"5c0b":function(t,e,s){"use strict";var n=s("9c0c"),a=s.n(n);a.a},"9c0c":function(t,e,s){},d229:function(t,e,s){},d796:function(t,e,s){},ea2d:function(t,e,s){"use strict";var n=s("d796"),a=s.n(n);a.a},efcd:function(t,e,s){}});
//# sourceMappingURL=app.193dd5e0.js.map