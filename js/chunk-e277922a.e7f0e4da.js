(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e277922a","chunk-1b6acbee","chunk-2d0df437","chunk-2d0df437"],{"15f0":function(e,t,r){"use strict";var a=r("309d"),i=r.n(a);i.a},"309d":function(e,t,r){},"802f":function(e,t,r){"use strict";var a=r("95fe"),i=r.n(a);i.a},"88bc":function(e,t,r){(function(t){var r=1/0,a=9007199254740991,i="[object Arguments]",o="[object Function]",n="[object GeneratorFunction]",s="[object Symbol]",l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,d=l||c||Function("return this")();function u(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function m(e,t){var r=-1,a=e?e.length:0,i=Array(a);while(++r<a)i[r]=t(e[r],r,e);return i}function p(e,t){var r=-1,a=t.length,i=e.length;while(++r<a)e[i+r]=t[r];return e}var f=Object.prototype,g=f.hasOwnProperty,v=f.toString,h=d.Symbol,b=f.propertyIsEnumerable,y=h?h.isConcatSpreadable:void 0,w=Math.max;function O(e,t,r,a,i){var o=-1,n=e.length;r||(r=x),i||(i=[]);while(++o<n){var s=e[o];t>0&&r(s)?t>1?O(s,t-1,r,a,i):p(i,s):a||(i[i.length]=s)}return i}function j(e,t){return e=Object(e),C(e,t,(function(t,r){return r in e}))}function C(e,t,r){var a=-1,i=t.length,o={};while(++a<i){var n=t[a],s=e[n];r(s,n)&&(o[n]=s)}return o}function k(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var r=arguments,a=-1,i=w(r.length-t,0),o=Array(i);while(++a<i)o[a]=r[t+a];a=-1;var n=Array(t+1);while(++a<t)n[a]=r[a];return n[t]=o,u(e,this,n)}}function x(e){return _(e)||L(e)||!!(y&&e&&e[y])}function M(e){if("string"==typeof e||P(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}function L(e){return T(e)&&g.call(e,"callee")&&(!b.call(e,"callee")||v.call(e)==i)}var _=Array.isArray;function S(e){return null!=e&&V(e.length)&&!D(e)}function T(e){return R(e)&&S(e)}function D(e){var t=$(e)?v.call(e):"";return t==o||t==n}function V(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}function $(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function R(e){return!!e&&"object"==typeof e}function P(e){return"symbol"==typeof e||R(e)&&v.call(e)==s}var F=k((function(e,t){return null==e?{}:j(e,m(O(t,1),M))}));e.exports=F}).call(this,r("c8ba"))},"8a45":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:e.title,width:1200,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleOk,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-form",{attrs:{form:e.form}},[r("a-row",{staticClass:"form-row",attrs:{gutter:16}},[r("a-col",{attrs:{lg:8}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单号"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderCode",{rules:[{required:!0,message:"请输入订单号!"}]}],expression:"['orderCode', {rules: [{ required: true, message: '请输入订单号!' }]}]"}],attrs:{placeholder:"请输入订单号"}})],1)],1),r("a-col",{attrs:{lg:8}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单类型"}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ctype",{}],expression:"['ctype',{}]"}],attrs:{placeholder:"请输入订单类型"}},[r("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),r("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1)],1),r("a-col",{attrs:{lg:8}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单日期"}},[r("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderDate",{}],expression:"[ 'orderDate',{}]"}],attrs:{showTime:"",format:"YYYY-MM-DD HH:mm:ss"}})],1)],1)],1),r("a-row",{staticClass:"form-row",attrs:{gutter:16}},[r("a-col",{attrs:{lg:8}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单金额"}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderMoney",{}],expression:"[ 'orderMoney', {}]"}],staticStyle:{width:"200px"}})],1)],1),r("a-col",{attrs:{lg:8}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单备注"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["content",{}],expression:"['content', {}]"}],attrs:{placeholder:"请输入订单备注"}})],1)],1)],1),r("a-tabs",{attrs:{defaultActiveKey:"1"}},[r("a-tab-pane",{key:"1",attrs:{tab:"客户信息"}},[r("div",[r("a-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",gutter:16}},[r("a-col",{attrs:{span:5}},[e._v("客户名")]),r("a-col",{attrs:{span:5}},[e._v("性别")]),r("a-col",{attrs:{span:5}},[e._v("身份证号码")]),r("a-col",{attrs:{span:5}},[e._v("手机号")]),r("a-col",{attrs:{span:4}},[e._v("操作")])],1),e._l(e.orderMainModel.jeecgOrderCustomerList,(function(t,a){return r("a-row",{key:a,staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",gutter:16}},[r("a-col",{staticStyle:{display:"none"},attrs:{span:6}},[r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["jeecgOrderCustomerList["+a+"].id",{initialValue:t.id}],expression:"['jeecgOrderCustomerList['+index+'].id', {'initialValue':item.id}]"}],attrs:{placeholder:"id"}})],1)],1),r("a-col",{attrs:{span:5}},[r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["jeecgOrderCustomerList["+a+"].name",{initialValue:t.name,rules:[{required:!0,message:"请输入用户名!"}]}],expression:"['jeecgOrderCustomerList['+index+'].name', {'initialValue':item.name,rules: [{ required: true, message: '请输入用户名!' }]}]"}],attrs:{placeholder:"客户名"}})],1)],1),r("a-col",{attrs:{span:5}},[r("a-form-item",[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["jeecgOrderCustomerList["+a+"].sex",{initialValue:t.sex}],expression:"['jeecgOrderCustomerList['+index+'].sex', {'initialValue':item.sex}]"}],attrs:{placeholder:"性别"}},[r("a-select-option",{attrs:{value:"1"}},[e._v("男")]),r("a-select-option",{attrs:{value:"2"}},[e._v("女")])],1)],1)],1),r("a-col",{attrs:{span:5}},[r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["jeecgOrderCustomerList["+a+"].idcard",{initialValue:t.idcard,rules:[{pattern:"^\\d{6}(18|19|20)?\\d{2}(0[1-9]|1[012])(0[1-9]|[12]\\d|3[01])\\d{3}(\\d|[xX])$",message:"身份证号格式不对!"}]}],expression:"['jeecgOrderCustomerList['+index+'].idcard', {'initialValue':item.idcard,rules: [{ pattern: '^\\\\d{6}(18|19|20)?\\\\d{2}(0[1-9]|1[012])(0[1-9]|[12]\\\\d|3[01])\\\\d{3}(\\\\d|[xX])$', message: '身份证号格式不对!' }]}]"}],attrs:{placeholder:"身份证号"}})],1)],1),r("a-col",{attrs:{span:5}},[r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["jeecgOrderCustomerList["+a+"].telphone",{initialValue:t.telphone,rules:[{pattern:"^1(3|4|5|7|8)\\d{9}$",message:"手机号格式不对!"}]}],expression:"['jeecgOrderCustomerList['+index+'].telphone', {'initialValue':item.telphone,rules: [{ pattern: '^1(3|4|5|7|8)\\\\d{9}$', message: '手机号格式不对!' }]}]"}],attrs:{placeholder:"手机号"}})],1)],1),r("a-col",{attrs:{span:4}},[r("a-form-item",[r("a-button",{attrs:{icon:"plus"},on:{click:e.addRowCustom}}),e._v(" \n                  "),r("a-button",{attrs:{icon:"minus"},on:{click:function(t){return e.delRowCustom(a)}}})],1)],1)],1)}))],2)]),r("a-tab-pane",{key:"2",attrs:{tab:"机票信息",forceRender:""}},[r("div",[r("a-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",gutter:16}},[r("a-col",{attrs:{span:6}},[e._v("航班号")]),r("a-col",{attrs:{span:6}},[e._v("航班时间")]),r("a-col",{attrs:{span:6}},[e._v("操作")])],1),e._l(e.orderMainModel.jeecgOrderTicketList,(function(t,a){return r("a-row",{key:a,staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",gutter:16}},[r("a-col",{staticStyle:{display:"none"},attrs:{span:6}},[r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["jeecgOrderTicketList["+a+"].id",{initialValue:t.id}],expression:"['jeecgOrderTicketList['+index+'].id', {'initialValue':item.id}]"}],attrs:{placeholder:"id"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["jeecgOrderTicketList["+a+"].ticketCode",{initialValue:t.ticketCode,rules:[{required:!0,message:"请输入航班号!"}]}],expression:"['jeecgOrderTicketList['+index+'].ticketCode', {'initialValue':item.ticketCode,rules: [{ required: true, message: '请输入航班号!' }]}]"}],attrs:{placeholder:"航班号"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-item",[r("j-date",{directives:[{name:"decorator",rawName:"v-decorator",value:["jeecgOrderTicketList["+a+"].tickectDate",{initialValue:t.tickectDate}],expression:"['jeecgOrderTicketList['+index+'].tickectDate', {'initialValue':item.tickectDate}]"}],attrs:{placeholder:"航班时间","trigger-change":!0}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-item",[r("a-button",{attrs:{icon:"plus"},on:{click:e.addRowTicket}}),e._v(" \n                  "),r("a-button",{attrs:{icon:"minus"},on:{click:function(t){return e.delRowTicket(a)}}})],1)],1)],1)}))],2)])],1)],1)],1)],1)},i=[],o=r("0fea"),n=r("2dab"),s=r("88bc"),l=r.n(s),c=r("c1df"),d=r.n(c);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f={name:"JeecgOrderMainModal",components:{JDate:n["default"]},data:function(){return{title:"操作",visible:!1,orderMainModel:{jeecgOrderCustomerList:[{}],jeecgOrderTicketList:[{}]},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{},url:{add:"/test/jeecgOrderMain/add",edit:"/test/jeecgOrderMain/edit",orderCustomerList:"/test/jeecgOrderMain/queryOrderCustomerListByMainId",orderTicketList:"/test/jeecgOrderMain/queryOrderTicketListByMainId"}}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){var t=this;if(this.form.resetFields(),this.orderMainModel=Object.assign({},e),this.orderMainModel.jeecgOrderCustomerList=[{}],this.orderMainModel.jeecgOrderTicketList=[{}],this.orderMainModel.id){var r={id:this.orderMainModel.id};Object(o["d"])(this.url.orderCustomerList,r).then((function(e){e.success&&(t.orderMainModel.jeecgOrderCustomerList=e.result,t.$forceUpdate())})),Object(o["d"])(this.url.orderTicketList,r).then((function(e){e.success&&(t.orderMainModel.jeecgOrderTicketList=e.result,t.$forceUpdate())}))}this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(l()(t.orderMainModel,"orderCode","ctype","orderMoney","content")),t.form.setFieldsValue({orderDate:t.orderMainModel.orderDate?d()(t.orderMainModel.orderDate):null})}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(r,a){if(!r){t.confirmLoading=!0;var i="",n="";e.orderMainModel.id?(i+=e.url.edit,n="put"):(i+=e.url.add,n="post");var s=Object.assign(e.orderMainModel,a);s.orderDate=s.orderDate?s.orderDate.format("YYYY-MM-DD HH:mm:ss"):null;var l=m({},s,{jeecgOrderCustomerList:s.jeecgOrderCustomerList,jeecgOrderTicketList:s.jeecgOrderTicketList});Object(o["i"])(i,l,n).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},addRowCustom:function(){this.orderMainModel.jeecgOrderCustomerList.push({}),this.$forceUpdate()},delRowCustom:function(e){var t=this.form.getFieldsValue();t["jeecgOrderCustomerList"].splice(e,1),this.form.setFieldsValue(t),this.orderMainModel.jeecgOrderCustomerList.splice(e,1),this.$forceUpdate()},addRowTicket:function(){this.orderMainModel.jeecgOrderTicketList.push({}),this.$forceUpdate()},delRowTicket:function(e){var t=this.form.getFieldsValue();t["jeecgOrderTicketList"].splice(e,1),this.form.setFieldsValue(t),this.orderMainModel.jeecgOrderTicketList.splice(e,1),this.$forceUpdate()}}},g=f,v=(r("802f"),r("2877")),h=Object(v["a"])(g,a,i,!1,null,"599d1e7a",null);t["default"]=h.exports},"95fe":function(e,t,r){},"9b15":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",{attrs:{bordered:!1}},[r("div",{staticClass:"table-page-search-wrapper"},[r("a-form",{attrs:{layout:"inline"}},[r("a-row",{attrs:{gutter:24}},[r("a-col",{attrs:{md:6,sm:24}},[r("a-form-item",{attrs:{label:"订单号"}},[r("a-input",{attrs:{placeholder:"请输入订单号"},model:{value:e.queryParam.orderCode,callback:function(t){e.$set(e.queryParam,"orderCode",t)},expression:"queryParam.orderCode"}})],1)],1),r("a-col",{attrs:{md:6,sm:24}},[r("a-form-item",{attrs:{label:"订单类型"}},[r("a-select",{attrs:{placeholder:"请输入订单类型"},model:{value:e.queryParam.ctype,callback:function(t){e.$set(e.queryParam,"ctype",t)},expression:"queryParam.ctype"}},[r("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),r("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1)],1),r("a-col",{attrs:{md:6,sm:24}},[r("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[r("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),r("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),r("div",{staticClass:"table-operator"},[r("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),r("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("一对多示例")}}},[e._v("导出")]),r("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[r("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1),e.selectedRowKeys.length>0?r("a-dropdown",[r("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[r("a-menu-item",{key:"1",on:{click:e.batchDel}},[r("a-icon",{attrs:{type:"delete"}}),e._v("删除")],1)],1),r("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作 "),r("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),r("div",[r("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[r("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),r("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),r("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),r("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,a){return r("span",{},[r("a",{on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")]),r("a-divider",{attrs:{type:"vertical"}}),r("a-dropdown",[r("a",{staticClass:"ant-dropdown-link"},[e._v("更多 "),r("a-icon",{attrs:{type:"down"}})],1),r("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[r("a-menu-item",[r("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(a.id)}}},[r("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),r("jeecgOrderMain-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},i=[],o=r("8a45"),n=r("b65a"),s={name:"JeecgOrderMainList",mixins:[n["a"]],components:{JeecgOrderMainModal:o["default"]},data:function(){return{description:"订单管理页面",importExcelUrl:"".concat(window._CONFIG["domianURL"],"/test/jeecgOrderMain/importExcel"),columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,r){return parseInt(r)+1}},{title:"订单号",align:"center",dataIndex:"orderCode"},{title:"订单类型",align:"center",dataIndex:"ctype",customRender:function(e,t,r){var a="";return"1"===e?a="国内订单":"2"===e&&(a="国际订单"),a}},{title:"订单日期",align:"center",dataIndex:"orderDate"},{title:"订单金额",align:"center",dataIndex:"orderMoney"},{title:"订单备注",align:"center",dataIndex:"content"},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],url:{list:"/test/jeecgOrderMain/list",delete:"/test/jeecgOrderMain/delete",deleteBatch:"/test/jeecgOrderMain/deleteBatch",exportXlsUrl:"/test/jeecgOrderMain/exportXls"}}},methods:{}},l=s,c=(r("15f0"),r("2877")),d=Object(c["a"])(l,a,i,!1,null,"7e1cf2f8",null);t["default"]=d.exports}}]);