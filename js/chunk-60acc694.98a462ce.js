(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60acc694"],{"05f5":function(t,e,a){},"062f":function(t,e,a){},cb6b:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{staticClass:"j-address-list-right-card-box",attrs:{loading:t.cardLoading,bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:6,sm:12}},[a("a-form-item",{staticStyle:{"margin-left":"8px"},attrs:{label:"姓名"}},[a("a-input",{attrs:{placeholder:"请输入姓名查询"},model:{value:t.queryParam.realname,callback:function(e){t.$set(t.queryParam,"realname",e)},expression:"queryParam.realname"}})],1)],1),a("a-col",{attrs:{md:6,sm:12}},[a("a-form-item",{staticStyle:{"margin-left":"8px"},attrs:{label:"工号"}},[a("a-input",{attrs:{placeholder:"请输入工号查询"},model:{value:t.queryParam.workNo,callback:function(e){t.$set(t.queryParam,"workNo",e)},expression:"queryParam.workNo"}})],1)],1),a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-button",{staticStyle:{"margin-left":"18px"},attrs:{type:"primary",icon:"search"},on:{click:t.searchQuery}},[t._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:t.searchReset}},[t._v("重置")])],1)],1)],1)],1)],1),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"userId",pagination:t.ipagination,columns:t.columns,dataSource:t.dataSource,loading:t.loading},on:{change:t.handleTableChange}})],1)},n=[],i=a("0fea"),o=a("b65a");function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var u={name:"AddressListRight",mixins:[o["a"]],components:{},props:["value"],data:function(){var t=this;return{description:"用户信息",cardLoading:!0,positionInfo:{},columns:[{title:"#",key:"rowIndex",dataIndex:"",width:60,align:"center",customRender:function(t,e,a){return parseInt(a)+1}},{title:"姓名",width:"15%",align:"center",dataIndex:"realname"},{title:"工号",width:"15%",align:"center",dataIndex:"workNo"},{title:"部门",width:"20%",align:"center",dataIndex:"departName"},{title:"职务",width:"15%",align:"center",dataIndex:"post",customRender:function(e){return(e||"").split(",").map((function(e){return t.positionInfo[e]?t.positionInfo[e]:e})).join(",")}},{title:"手机",width:"15%",align:"center",dataIndex:"telephone"},{title:"公司邮箱",width:"15%",align:"center",dataIndex:"email"}],url:{list:"/sys/user/queryByOrgCodeForAddressList",listByPosition:"/sys/position/list"}}},watch:{value:{immediate:!0,handler:function(t){this.dataSource=[],this.loadData(1,t)}}},created:function(){this.queryPositionInfo()},methods:{loadData:function(t,e){var a=this;this.loading=!0,1===t&&(this.ipagination.current=1),e?Object(i["d"])(this.url.list,c({orgCode:e},this.getQueryParams())).then((function(t){t.success&&(a.dataSource=t.result.records,a.ipagination.total=t.result.total)})).finally((function(){a.loading=!1,a.cardLoading=!1})):Object(i["d"])(this.url.list,c({},this.getQueryParams())).then((function(t){t.success&&(a.dataSource=t.result.records,a.ipagination.total=t.result.total)})).finally((function(){a.loading=!1,a.cardLoading=!1}))},searchQuery:function(){this.loadData(1,this.value)},searchReset:function(){this.queryParam={},this.loadData(1,this.value)},handleTableChange:function(t,e,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"===a.order?"asc":"desc"),this.ipagination=t,this.loadData(null,this.value)},queryPositionInfo:function(){var t=this;Object(i["d"])(this.url.listByPosition,{pageSize:99999}).then((function(e){if(e.success){var a={};e.result.records.forEach((function(t){a[t["code"]]=t["name"]})),t.positionInfo=a}}))}}},d=u,f=(a("d5e7"),a("dd84"),a("2877")),h=Object(f["a"])(d,r,n,!1,null,"e1994f02",null);e["default"]=h.exports},d5e7:function(t,e,a){"use strict";var r=a("062f"),n=a.n(r);n.a},dd84:function(t,e,a){"use strict";var r=a("05f5"),n=a.n(r);n.a}}]);