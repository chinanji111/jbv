(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1eb396fe","chunk-2a6f3962","chunk-2d0df437","chunk-2d0df437"],{2456:function(e,t,r){"use strict";var a=r("b62c"),n=r.n(a);n.a},"360f":function(e,t,r){},"5c4b":function(e,t,r){"use strict";var a=r("360f"),n=r.n(a);n.a},8428:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",{attrs:{bordered:!1}},[r("div",{staticClass:"table-page-search-wrapper"},[r("a-form",{attrs:{layout:"inline"}},[r("a-row",{attrs:{gutter:24}},[r("a-col",{attrs:{md:6,sm:24}},[r("a-form-item",{attrs:{label:"订单号"}},[r("a-input",{attrs:{placeholder:"请输入订单号"},model:{value:e.queryParam.orderCode,callback:function(t){e.$set(e.queryParam,"orderCode",t)},expression:"queryParam.orderCode"}})],1)],1),r("a-col",{attrs:{md:6,sm:24}},[r("a-form-item",{attrs:{label:"订单类型"}},[r("a-select",{attrs:{placeholder:"请输入订单类型"},model:{value:e.queryParam.ctype,callback:function(t){e.$set(e.queryParam,"ctype",t)},expression:"queryParam.ctype"}},[r("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),r("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1)],1),r("a-col",{attrs:{md:6,sm:24}},[r("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[r("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),r("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),r("div",{staticClass:"table-operator"},[r("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),e.selectedRowKeys.length>0?r("a-dropdown",[r("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[r("a-menu-item",{key:"1",on:{click:e.batchDel}},[r("a-icon",{attrs:{type:"delete"}}),e._v("\n          删除\n        ")],1)],1),r("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作\n        "),r("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),r("div",[r("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[r("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),r("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),r("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),r("a-table",{ref:"table",attrs:{bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:!1,expandedRowKeys:e.expandedRowKeys,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange,expand:e.handleExpand},scopedSlots:e._u([{key:"action",fn:function(t,a){return r("span",{},[r("a",{on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")]),r("a-divider",{attrs:{type:"vertical"}}),r("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(a.id)}}},[r("a",[e._v("删除")])])],1)}},{key:"expandedRowRender",fn:function(t){return r("a-table",{attrs:{columns:e.innerColumns,dataSource:e.innerData,size:"middle",bordered:"",rowKey:"id",pagination:!1,loading:e.loading}})}}])})],1),r("jeecgOrderDMain-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},n=[],o=r("0fea"),i=r("dd9d"),l=r("b65a"),c={name:"TableDemo",mixins:[l["a"]],components:{JeecgOrderDMainModal:i["default"]},data:function(){return{innerColumns:[{title:"客户名",align:"center",width:100,dataIndex:"name",key:"name"},{title:"性别",align:"center",dataIndex:"sex",customRender:function(e){return 1==e?"男":2==e?"女":e}},{title:"身份证号码",align:"center",dataIndex:"idcard"},{title:"电话",dataIndex:"telphone",align:"center"}],innerData:[],expandedRowKeys:[],id:" ",description:"列表展开子表Demo",columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,r){return parseInt(r)+1}},{title:"订单号",align:"center",dataIndex:"orderCode"},{title:"订单类型",align:"center",dataIndex:"ctype",customRender:function(e){var t="";return"1"===e?t="国内订单":"2"===e&&(t="国际订单"),t}},{title:"订单日期",align:"center",dataIndex:"orderDate"},{title:"订单金额",align:"center",dataIndex:"orderMoney"},{title:"订单备注",align:"center",dataIndex:"content"},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],type:"radio",url:{list:"/test/order/orderList",delete:"/test/order/delete",deleteBatch:"/test/order/deleteBatch",customerListByMainId:"/test/order/listOrderCustomerByMainId"}}},computed:{currentId:function(){return this.id}},methods:{handleExpand:function(e,t){var r=this;this.expandedRowKeys=[],this.innerData=[],!0===e&&(this.loading=!0,this.expandedRowKeys.push(t.id),Object(o["d"])(this.url.customerListByMainId,{mainId:t.id}).then((function(e){e.success&&(r.loading=!1,r.innerData=e.result.records)})))}}},s=c,d=(r("5c4b"),r("2877")),u=Object(d["a"])(s,a,n,!1,null,"24d3d77e",null);t["default"]=u.exports},"88bc":function(e,t,r){(function(t){var r=1/0,a=9007199254740991,n="[object Arguments]",o="[object Function]",i="[object GeneratorFunction]",l="[object Symbol]",c="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")();function u(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function p(e,t){var r=-1,a=e?e.length:0,n=Array(a);while(++r<a)n[r]=t(e[r],r,e);return n}function f(e,t){var r=-1,a=t.length,n=e.length;while(++r<a)e[n+r]=t[r];return e}var m=Object.prototype,b=m.hasOwnProperty,h=m.toString,y=d.Symbol,v=m.propertyIsEnumerable,g=y?y.isConcatSpreadable:void 0,w=Math.max;function C(e,t,r,a,n){var o=-1,i=e.length;r||(r=M),n||(n=[]);while(++o<i){var l=e[o];t>0&&r(l)?t>1?C(l,t-1,r,a,n):f(n,l):a||(n[n.length]=l)}return n}function x(e,t){return e=Object(e),O(e,t,(function(t,r){return r in e}))}function O(e,t,r){var a=-1,n=t.length,o={};while(++a<n){var i=t[a],l=e[i];r(l,i)&&(o[i]=l)}return o}function j(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var r=arguments,a=-1,n=w(r.length-t,0),o=Array(n);while(++a<n)o[a]=r[t+a];a=-1;var i=Array(t+1);while(++a<t)i[a]=r[a];return i[t]=o,u(e,this,i)}}function M(e){return _(e)||D(e)||!!(g&&e&&e[g])}function k(e){if("string"==typeof e||K(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}function D(e){return S(e)&&b.call(e,"callee")&&(!v.call(e,"callee")||h.call(e)==n)}var _=Array.isArray;function I(e){return null!=e&&P(e.length)&&!R(e)}function S(e){return F(e)&&I(e)}function R(e){var t=L(e)?h.call(e):"";return t==o||t==i}function P(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}function L(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function F(e){return!!e&&"object"==typeof e}function K(e){return"symbol"==typeof e||F(e)&&h.call(e)==l}var $=j((function(e,t){return null==e?{}:x(e,p(C(t,1),k))}));e.exports=$}).call(this,r("c8ba"))},b62c:function(e,t,r){},dd9d:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:e.title,width:1e3,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleOk,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-form",{attrs:{form:e.form}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单号",hasFeedback:""}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderCode",{rules:[{required:!0,message:"请输入订单号!"}]}],expression:"['orderCode', {rules: [{ required: true, message: '请输入订单号!' }]}]"}],attrs:{placeholder:"请输入订单号"}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单类型"}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ctype",{}],expression:"['ctype',{}]"}],attrs:{placeholder:"请输入订单类型"}},[r("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),r("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单日期"}},[r("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderDate",{}],expression:"[ 'orderDate',{}]"}],attrs:{showTime:"",format:"YYYY-MM-DD HH:mm:ss"}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单金额"}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderMoney",{}],expression:"[ 'orderMoney', {}]"}],staticStyle:{width:"200px"}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单备注"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["content",{}],expression:"['content', {}]"}],attrs:{placeholder:"请输入订单备注"}})],1)],1)],1)],1)},n=[],o=r("0fea"),i=r("2dab"),l=r("88bc"),c=r.n(l),s=r("c1df"),d=r.n(s);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m={name:"JeecgOrderDMainModal",components:{JDate:i["default"]},data:function(){return{title:"操作",visible:!1,orderMainModel:{jeecgOrderCustomerList:[{}],jeecgOrderTicketList:[{}]},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{},url:{add:"/test/order/add",edit:"/test/order/edit",orderCustomerList:"/test/order/listOrderCustomerByMainId",orderTicketList:"/test/order/listOrderTicketByMainId"}}},methods:{add:function(){this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.orderMainModel=Object.assign({},e),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(c()(t.orderMainModel,"orderCode","ctype","orderMoney","content")),t.form.setFieldsValue({orderDate:t.orderMainModel.orderDate?d()(t.orderMainModel.orderDate):null})}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(r,a){if(!r){t.confirmLoading=!0;var n="",i="";e.orderMainModel.id?(n+=e.url.edit,i="put"):(n+=e.url.add,i="post");var l=Object.assign(e.orderMainModel,a);l.orderDate=l.orderDate?l.orderDate.format("YYYY-MM-DD HH:mm:ss"):null;var c=p({},l);Object(o["i"])(n,c,i).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()}}},b=m,h=(r("2456"),r("2877")),y=Object(h["a"])(b,a,n,!1,null,"f597bb6a",null);t["default"]=y.exports}}]);