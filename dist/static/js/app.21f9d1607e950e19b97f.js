webpackJsonp([1],{"/0uN":function(e,t){},"09yM":function(e,t){},Hr3Y:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("09yM");var r=n("ZMun"),a=n.n(r),o=n("EqYI"),i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex,router:"",mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[n("el-menu-item",{attrs:{index:"/"}},[e._v("简易WMS")]),e._v(" "),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[e._v("基本管理")]),e._v(" "),n("el-menu-item",{attrs:{index:"/materialmgmt"}},[e._v("物料管理")]),e._v(" "),n("el-menu-item",{attrs:{index:"/storagespacemgmt"}},[e._v("货位管理")]),e._v(" "),n("el-menu-item",{attrs:{index:"/safetyinventory"}},[e._v("安全库存")])],2),e._v(" "),n("el-menu-item",{attrs:{index:"/inventorymgmt"}},[e._v("库存管理")]),e._v(" "),n("el-menu-item",{attrs:{index:"/dataexport"}},[e._v("数据导出")]),e._v(" "),n("el-menu-item",{attrs:{index:"/help"}},[e._v("帮助")]),e._v(" "),n("el-menu-item",{attrs:{index:"/about"}},[e._v("关于")]),e._v(" "),n("el-menu-item",{attrs:{index:"/others"}},[e._v("其他")])],1),e._v(" "),n("router-view")],1)},staticRenderFns:[]};var l=n("C7Lr")({name:"App",data:function(){return{activeIndex:"/"}}},i,!1,function(e){n("Wd2R")},null,null).exports,s=n("7LQH"),m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("br"),t("br"),t("br"),this._v(" "),t("p",[this._v("这是个人练手项目，仅供学习之用！")]),this._v(" "),t("p",[this._v("hbxgliupan@sina.com")])])}]};var u=n("C7Lr")({name:"About",data:function(){return{flag:"a"}}},m,!1,function(e){n("pAqn")},"data-v-3e859a13",null).exports,c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("p",[this._v("数据导出"+this._s(this.flag))])])},staticRenderFns:[]},d=n("C7Lr")({name:"DataExport",data:function(){return{flag:"a"}}},c,!1,null,null,null).exports,v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),n("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),n("br"),e._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var f=n("C7Lr")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},v,!1,function(e){n("/0uN")},"data-v-3b884edb",null).exports,p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("p",[this._v("帮助")])])}]},_=n("C7Lr")({name:"Help",data:function(){return{flag:"a"}}},p,!1,null,null,null).exports,h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("p",[this._v("首页")])])}]},b=n("C7Lr")({name:"Home",data:function(){return{flag:"a"}}},h,!1,null,null,null).exports,F=n("Muz9"),g=n.n(F),x={name:"InventoryAdd",data:function(){return{addForm:{code:"",name:"",allocation:"",acount:"",remark:""}}},methods:{submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("inventoryChange submitted...."),alert("提交失败"),!1;alert("提交成功")})},resetForm:function(e){this.$refs[e].resetFields()}}},k={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-form",{ref:"addForm",staticClass:"demo-dynamic",attrs:{model:e.addForm,"label-width":"auto"}},[n("el-form-item",{attrs:{prop:"code",size:"mini",label:"编号"}},[n("el-input",{model:{value:e.addForm.code,callback:function(t){e.$set(e.addForm,"code",t)},expression:"addForm.code"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"name",size:"mini",label:"名称"}},[n("el-input",{model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"allocation",size:"mini",label:"货位"}},[n("el-input",{model:{value:e.addForm.allocation,callback:function(t){e.$set(e.addForm,"allocation",t)},expression:"addForm.allocation"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"acount",size:"mini",label:"数量"}},[n("el-input",{model:{value:e.addForm.acount,callback:function(t){e.$set(e.addForm,"acount",t)},expression:"addForm.acount"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"remark",size:"mini",label:"备注"}},[n("el-input",{model:{value:e.addForm.remark,callback:function(t){e.$set(e.addForm,"remark",t)},expression:"addForm.remark"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.submitForm("addForm")}}},[e._v("提交")]),e._v(" "),n("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.resetForm("addForm")}}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]},$={name:"InventorySubtract",data:function(){return{subForm:{code:"",name:"",allocation:"",acount:"",remark:""}}},methods:{submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("inventoryChange submitted...."),alert("提交失败"),!1;alert("提交成功")})},resetForm:function(e){this.$refs[e].resetFields()}}},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"subForm",attrs:{model:e.subForm,"label-width":"auto"}},[n("el-form-item",{attrs:{prop:"code",size:"mini",label:"编号"}},[n("el-input",{model:{value:e.subForm.code,callback:function(t){e.$set(e.subForm,"code",t)},expression:"subForm.code"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"name",size:"mini",label:"名称"}},[n("el-input",{model:{value:e.subForm.name,callback:function(t){e.$set(e.subForm,"name",t)},expression:"subForm.name"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"allocation",size:"mini",label:"货位"}},[n("el-input",{model:{value:e.subForm.allocation,callback:function(t){e.$set(e.subForm,"allocation",t)},expression:"subForm.allocation"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"acount",size:"mini",label:"数量"}},[n("el-input",{model:{value:e.subForm.acount,callback:function(t){e.$set(e.subForm,"acount",t)},expression:"subForm.acount"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"remark",size:"mini",label:"备注"}},[n("el-input",{model:{value:e.subForm.remark,callback:function(t){e.$set(e.subForm,"remark",t)},expression:"subForm.remark"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.submitForm("subForm")}}},[e._v("提交")]),e._v(" "),n("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.resetForm("subForm")}}},[e._v("重置")])],1)],1)},staticRenderFns:[]},C={name:"InventoryChange",data:function(){return{moveForm:{allocationFrom:"",allocationTo:"",code:"",name:"",acount:""}}},methods:{submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("inventoryChange submitted...."),alert("提交失败"),!1;alert("提交成功")})},resetForm:function(e){this.$refs[e].resetFields()}}},E={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"moveForm",attrs:{model:e.moveForm,"label-width":"auto"}},[n("el-form-item",{attrs:{prop:"allocationFrom",size:"mini",label:"移出"}},[n("el-input",{model:{value:e.moveForm.allocationFrom,callback:function(t){e.$set(e.moveForm,"allocationFrom",t)},expression:"moveForm.allocationFrom"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"allocationTo",size:"mini",label:"移入"}},[n("el-input",{model:{value:e.moveForm.allocationTo,callback:function(t){e.$set(e.moveForm,"allocationTo",t)},expression:"moveForm.allocationTo"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"code",size:"mini",label:"编号"}},[n("el-input",{model:{value:e.moveForm.code,callback:function(t){e.$set(e.moveForm,"code",t)},expression:"moveForm.code"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"name",size:"mini",label:"名称"}},[n("el-input",{model:{value:e.moveForm.name,callback:function(t){e.$set(e.moveForm,"name",t)},expression:"moveForm.name"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"acount",size:"mini",label:"数量"}},[n("el-input",{model:{value:e.moveForm.acount,callback:function(t){e.$set(e.moveForm,"acount",t)},expression:"moveForm.acount"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.submitForm("moveForm")}}},[e._v("提交")]),e._v(" "),n("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.resetForm("moveForm")}}},[e._v("重置")])],1)],1)},staticRenderFns:[]},R={name:"Inventory",data:function(){return{activeName:"third"}},components:{additem:n("C7Lr")(x,k,!1,null,null,null).exports,subitem:n("C7Lr")($,y,!1,null,null,null).exports,chgitem:n("C7Lr")(C,E,!1,null,null,null).exports}},z={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",[n("el-col",{staticClass:"leftpan",attrs:{span:17}},[n("p",[e._v("This is a test")])]),e._v(" "),n("el-col",{staticClass:"rightpan",attrs:{span:7}},[n("el-tabs",{attrs:{type:"card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"入库管理",name:"first",align:"left"}},[n("additem")],1),e._v(" "),n("el-tab-pane",{attrs:{label:"出库管理",name:"second",align:"left"}},[n("subitem")],1),e._v(" "),n("el-tab-pane",{attrs:{label:"货位调整",name:"third",align:"left"}},[n("chgitem")],1)],1)],1)],1)],1)},staticRenderFns:[]};var N=n("C7Lr")(R,z,!1,function(e){n("Hr3Y")},"data-v-796f5813",null).exports,L={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("p",[this._v("物料管理")])])}]},w=n("C7Lr")({name:"Material",data:function(){return{flag:"a"}}},L,!1,null,null,null).exports,j={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("p",[this._v("404 - Not Found")]),this._v(" "),t("p",[this._v("\n    您访问的网页不存在\n    "),t("el-link",{attrs:{href:"/home",type:"dangeer"}},[this._v("返回首页")])],1)])},staticRenderFns:[]};var M=n("C7Lr")({name:"NotFound",data:function(){return{flag:"a"}}},j,!1,function(e){n("rjd3")},"data-v-a3d633de",null).exports,T={name:"Others",data:function(){return{randomNumber:0}},methods:{getRandomInt:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},getRandom:function(){this.getRandomFromBackend()},getRandomFromBackend:function(){var e=this;g.a.get("/api/getNumber").then(function(t){e.randomNumber=t.data.randomNumber}).catch(function(e){console.log(e)})}},created:function(){this.getRandom()}},H={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("其他内容在此显示")]),e._v(" "),n("p",[e._v("获取的随机数是:"+e._s(e.randomNumber))]),e._v(" "),n("button",{on:{click:e.getRandom}},[e._v("New Random Number")])])},staticRenderFns:[]},I=n("C7Lr")(T,H,!1,null,null,null).exports,A={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("p",[this._v("安全库存管理")])])}]},S=n("C7Lr")({name:"SafetyInventory",data:function(){return{flag:"a"}}},A,!1,null,null,null).exports,W={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("p",[this._v("货位管理")])])}]},Y=n("C7Lr")({name:"StorageSpace",data:function(){return{flag:"a"}}},W,!1,null,null,null).exports;o.default.use(s.a);var q=new s.a({mode:"history",routes:[{path:"/about",name:"About",component:u},{path:"/dataexport",name:"dataexport",component:d},{path:"/hello",name:"hello",component:f},{path:"/help",name:"help",component:_},{path:"/",name:"Home",component:b},{path:"/inventorymgmt",name:"inventorymgmt",component:N},{path:"/materialmgmt",name:"materialmgmt",component:w},{path:"/others",name:"others",component:I},{path:"/safetyinventory",name:"safetyinventory",component:S},{path:"/storagespacemgmt",name:"storagespace",component:Y},{path:"*",name:"NoPage",component:M}]});o.default.use(a.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:q,render:function(e){return e(l)}})},Wd2R:function(e,t){},pAqn:function(e,t){},rjd3:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.21f9d1607e950e19b97f.js.map