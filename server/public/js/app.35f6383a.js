(function(t){function e(e){for(var n,r,i=e[0],c=e[1],u=e[2],d=0,p=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,i=1;i<s.length;i++){var c=s[i];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var n={},a={app:0},o=[];function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=n,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"2c0c":function(t,e,s){"use strict";var n=s("efcd"),a=s.n(n);a.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"app-container"},[s("app-autocomplete",{staticClass:"elevated",attrs:{"world-countries":t.worldCountries},on:{select:t.onSelect}}),t.userData.length>0?t._l(t.userData,(function(e,n){return s("div",{key:n},[s("app-statistics",{staticClass:"elevated",attrs:{statistics:e,favourite:t.userBookmarks.includes(e.country.toLowerCase())},on:{pin:t.onPin,unPin:t.onUnpin,delete:t.onDelete}})],1)})):[t._m(0)],s("transition",{attrs:{name:"bounce"}},[t.t_active?s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.")]):t._e()]),s("div",{staticClass:"toast",style:t.t_active?"animation: openToast 1.8s ease-in forwards":""},[t._v(t._s(t.t_message))])],2)])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"no-data"},[s("div",[t._v("No Countries Selected")]),s("div",[t._v("Add Some")])])}],r=(s("99af"),s("4de4"),s("a630"),s("caad"),s("d81d"),s("d3b7"),s("6062"),s("2532"),s("3ca3"),s("ddb0"),s("2909")),i=s("bc3a"),c=s.n(i),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app-autocomplete"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userCountry,expression:"userCountry"}],attrs:{type:"text",autocomplete:"off",placeholder:"Add Country..."},domProps:{value:t.userCountry},on:{input:[function(e){e.target.composing||(t.userCountry=e.target.value)},t.onInput]}}),s("button",{on:{click:function(e){return e.stopPropagation(),t.onClear(e)}}},[s("font-awesome-icon",{attrs:{icon:"times"}})],1),s("ul",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"elevated"},t._l(t.menuCountries,(function(e,n){return s("li",{key:n,on:{click:function(s){return s.stopPropagation(),t.onSelect(e)}}},[t._v(t._s(e))])})),0)])},l=[],d=(s("2ca0"),{name:"app-autocomplete",props:{worldCountries:{type:Array,default:function(){return[]}}},data:function(){return{userCountry:"",menuCountries:[]}},computed:{isOpen:function(){return!!this.userCountry}},methods:{onInput:function(){var t=this;this.menuCountries=this.worldCountries.filter((function(e){return e.startsWith(t.userCountry.toLowerCase())}))},onSelect:function(t){this.userCountry="",this.$emit("select",t)},onClear:function(){this.userCountry=""}}}),p=d,f=(s("2c0c"),s("2877")),v=Object(f["a"])(p,u,l,!1,null,null,null),m=v.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app-statistics"}},[t.statistics?[s("div",{staticClass:"header"},[s("div",{staticClass:"title"},[t._v(t._s(t.statistics.country))]),s("div",{staticClass:"controls"},[s("button",{staticClass:"btn",on:{click:function(e){e.stopPropagation(),t.favourite?t.$emit("unPin",t.statistics.country):t.$emit("pin",t.statistics.country)}}},[s("font-awesome-icon",{class:t.favourite?"":"unselected",attrs:{icon:"thumbtack"}})],1),s("button",{staticClass:"btn",on:{click:function(e){return e.stopPropagation(),t.$emit("delete",t.statistics.country)}}},[s("font-awesome-icon",{attrs:{icon:"times"}})],1)])]),s("div",{staticClass:"summary"},[s("div",{staticClass:"stats-item"},[s("small",{staticClass:"stat-item-category"},[t._v("Total Cases")]),s("div",{staticClass:"stat-item-number"},[t._v(t._s(t.statistics.cases))]),s("div",[s("small",[t._v("Today: "+t._s(t.statistics.todayCases))])])]),s("div",{staticClass:"stats-item"},[s("small",{staticClass:"stat-item-category"},[t._v("Total Deaths")]),s("div",{staticClass:"stat-item-number"},[t._v(t._s(t.statistics.deaths))]),s("div",[s("small",[t._v("Today: "+t._s(t.statistics.todayDeaths))])])])]),s("div",{staticClass:"info"},[s("div",[s("small",[t._v("active")]),s("div",{staticClass:"info-number"},[t._v(t._s(t.statistics.active))])]),s("div",[s("small",[t._v("critical")]),s("div",{staticClass:"info-number"},[t._v(t._s(t.statistics.critical))])]),s("div",[s("small",[t._v("recovered")]),s("div",{staticClass:"info-number"},[t._v(t._s(t.statistics.recovered))])])])]:t._e()],2)},y=[],C={name:"app-statistics",props:{statistics:{type:Object,default:function(){return[]}},favourite:{type:Boolean,default:!1}}},_=C,b=(s("5bce"),Object(f["a"])(_,h,y,!1,null,null,null)),g=b.exports,w={name:"App",components:{AppAutocomplete:m,AppStatistics:g},data:function(){return{worldCountries:[],userCountries:new Set,userBookmarks:[],userData:[],t_base:["toast"],t_active:!1,t_message:""}},methods:{onSelect:function(t){var e=this;this.userCountries=new Set(this.userCountries.add(t.toLowerCase()));var s=JSON.stringify(Array.from(this.userCountries)),n="\n      query statsQuery {\n          stats(countries: ".concat(s,") {\n            country\n            cases\n            deaths\n            active\n            critical\n            recovered\n            todayCases\n            todayDeaths\n            casesPerOneMillion\n          }\n        } \n      ");c()({url:"/graphql",method:"post",data:{query:n}}).then((function(t){var s=t.data.data;e.userData=s.stats}))},onDelete:function(t){this.userCountries.delete(t.toLowerCase())&&(this.userCountries=new Set(this.userCountries),this.userData=this.userData.filter((function(e){return e.country.toLowerCase()!=t.toLowerCase()})))},onPin:function(t){var e=t.toLowerCase(),s=JSON.parse(localStorage.getItem("bookmarks"));s?this.userBookmarks.includes(e)||(this.userBookmarks=[].concat(Object(r["a"])(s),[e])):this.userBookmarks.push(e),localStorage.setItem("bookmarks",JSON.stringify(this.userBookmarks)),this.onNotify("".concat(t," added to Favourites"))},onUnpin:function(t){this.userBookmarks=this.userBookmarks.filter((function(e){return e!==t.toLowerCase()})),localStorage.setItem("bookmarks",JSON.stringify(this.userBookmarks)),this.onNotify("".concat(t," removed from Favourites"))},onNotify:function(t){var e=this;e.t_active||(e.t_active=!0,e.t_message=t,console.log("should open"),setTimeout((function(){console.log("should close"),e.t_active=!1}),1800))}},created:function(){var t=this,e="\n      query countryQuery {\n        countries {\n          country\n        }\n      }";c()({url:"/graphql",method:"post",data:{query:e}}).then((function(e){var s=e.data.data;t.worldCountries=s.countries.map((function(t){return t.country.toLowerCase()}))}))},mounted:function(){var t=this,e=localStorage.getItem("bookmarks");if(e){this.userCountries=new Set(JSON.parse(e)),this.userBookmarks=JSON.parse(e);var s="\n        query statsQuery {\n            stats(countries: ".concat(e,") {\n              country\n              cases\n              deaths\n              active\n              critical\n              recovered\n              todayCases\n              todayDeaths\n              casesPerOneMillion\n            }\n          }\n        ");c()({url:"/graphql",method:"post",data:{query:s}}).then((function(e){var s=e.data.data;t.userData=s.stats}))}}},k=w,O=(s("5c0b"),Object(f["a"])(k,a,o,!1,null,null,null)),S=O.exports,P=s("ecee"),j=s("c074"),D=s("ad3d");P["c"].add(j["b"]),P["c"].add(j["a"]),n["a"].component("font-awesome-icon",D["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(S)}}).$mount("#app")},"5bce":function(t,e,s){"use strict";var n=s("d229"),a=s.n(n);a.a},"5c0b":function(t,e,s){"use strict";var n=s("9c0c"),a=s.n(n);a.a},"9c0c":function(t,e,s){},d229:function(t,e,s){},efcd:function(t,e,s){}});
//# sourceMappingURL=app.35f6383a.js.map