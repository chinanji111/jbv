(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fa72578e","chunk-6c6411bd","chunk-2d0df437","chunk-2d0df437"],{"81f4":function(e,t,a){"use strict";var r=a("f07c"),n=a.n(r);n.a},"88bc":function(e,t,a){(function(t){var a=1/0,r=9007199254740991,n="[object Arguments]",i="[object Function]",o="[object GeneratorFunction]",l="[object Symbol]",c="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")();function u(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function m(e,t){var a=-1,r=e?e.length:0,n=Array(r);while(++a<r)n[a]=t(e[a],a,e);return n}function f(e,t){var a=-1,r=t.length,n=e.length;while(++a<r)e[n+a]=t[a];return e}var h=Object.prototype,p=h.hasOwnProperty,b=h.toString,g=d.Symbol,v=h.propertyIsEnumerable,y=g?g.isConcatSpreadable:void 0,k=Math.max;function w(e,t,a,r,n){var i=-1,o=e.length;a||(a=O),n||(n=[]);while(++i<o){var l=e[i];t>0&&a(l)?t>1?w(l,t-1,a,r,n):f(n,l):r||(n[n.length]=l)}return n}function C(e,t){return e=Object(e),S(e,t,(function(t,a){return a in e}))}function S(e,t,a){var r=-1,n=t.length,i={};while(++r<n){var o=t[r],l=e[o];a(l,o)&&(i[o]=l)}return i}function x(e,t){return t=k(void 0===t?e.length-1:t,0),function(){var a=arguments,r=-1,n=k(a.length-t,0),i=Array(n);while(++r<n)i[r]=a[t+r];r=-1;var o=Array(t+1);while(++r<t)o[r]=a[r];return o[t]=i,u(e,this,o)}}function O(e){return _(e)||j(e)||!!(y&&e&&e[y])}function I(e){if("string"==typeof e||J(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}function j(e){return F(e)&&p.call(e,"callee")&&(!v.call(e,"callee")||b.call(e)==n)}var _=Array.isArray;function T(e){return null!=e&&$(e.length)&&!D(e)}function F(e){return A(e)&&T(e)}function D(e){var t=B(e)?b.call(e):"";return t==i||t==o}function $(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}function B(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function A(e){return!!e&&"object"==typeof e}function J(e){return"symbol"==typeof e||A(e)&&b.call(e)==l}var L=x((function(e,t){return null==e?{}:C(e,m(w(t,1),I))}));e.exports=L}).call(this,a("c8ba"))},"8c22":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-operator",staticStyle:{margin:"-25px 0px 10px 2px"},attrs:{md:24,sm:24}},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("\n          删除\n        ")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作\n        "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,r){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(r)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("\n            更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleDetail(r)}}},[e._v("详情")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(r.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),a("JeecgOrderTicket-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},n=[],i=a("aa8e"),o=a("b65a"),l=a("0fea"),c={name:"JeecgOrderTicketList",mixins:[o["a"]],components:{JeecgOrderTicketModal:i["default"]},data:function(){return{description:"机票信息",columns:[{title:"航班号",align:"center",dataIndex:"ticketCode"},{title:"航班时间",align:"center",dataIndex:"tickectDate"},{title:"订单号码",align:"center",dataIndex:"orderId"},{title:"创建人",align:"center",dataIndex:"createBy"},{title:"创建时间",align:"center",dataIndex:"createTime",sorter:!0},{title:"操作",key:"operation",align:"center",width:130,scopedSlots:{customRender:"action"}}],url:{list:"/test/order/listOrderTicketByMainId",delete:"/test/order/deleteTicket",deleteBatch:"/test/order/deleteBatchTicket"}}},methods:{loadData:function(e){var t=this;1===e&&(this.ipagination.current=1);var a=this.getQueryParams();Object(l["d"])(this.url.list,{orderId:a.mainId,pageNo:this.ipagination.current,pageSize:this.ipagination.pageSize}).then((function(e){e.success?(t.dataSource=e.result.records,t.ipagination.total=e.result.total):t.dataSource=null}))},getOrderMain:function(e){this.queryParam.mainId=e,this.loadData(1)},handleAdd:function(){this.$refs.modalForm.add(this.queryParam.mainId),this.$refs.modalForm.title="添加机票信息"}}},s=c,d=(a("81f4"),a("2877")),u=Object(d["a"])(s,r,n,!1,null,"0550d32d",null);t["default"]=u.exports},aa8e:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,okButtonProps:{props:{disabled:e.disableSubmit}},confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"航班号",hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ticketCode",{rules:[{required:!0,message:"请输入航班号!"}]}],expression:"['ticketCode', {rules:[{ required: true,message: '请输入航班号!'}]}]"}],attrs:{placeholder:"请输入航班号",readOnly:e.disableSubmit}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"航班时间",hasFeedback:""}},[a("j-date",{directives:[{name:"decorator",rawName:"v-decorator",value:["tickectDate",{rules:[{required:!0,message:"请输入航班号!"}]}],expression:"['tickectDate',{rules:[{ required: true,message: '请输入航班号!'}]}]"}],attrs:{"trigger-change":!0}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单号码",hidden:e.hiding,hasFeedback:""},model:{value:this.orderId,callback:function(t){e.$set(this,"orderId",t)},expression:"this.orderId"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderId",{}],expression:"[ 'orderId', {}]"}],attrs:{disabled:"disabled"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"创建人",hidden:e.hiding,hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["createBy",{}],expression:"[ 'createBy', {}]"}],attrs:{readOnly:e.disableSubmit}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"创建时间",hidden:e.hiding,hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["createTime",{}],expression:"[ 'createTime', {}]"}],attrs:{readOnly:e.disableSubmit}})],1)],1)],1)],1)},n=[],i=a("0fea"),o=a("88bc"),l=a.n(o),c=a("c1df"),s=a.n(c),d=a("2dab"),u={components:{JDate:d["default"]},name:"JeecgOrderTicketModal",data:function(){return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},moment:s.a,format:"YYYY-MM-DD HH:mm:ss",disableSubmit:!1,orderId:"",hiding:!1,confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{},url:{add:"/test/order/addTicket",edit:"/test/order/editTicket"}}},created:function(){},methods:{add:function(e){e?this.edit({orderId:e},""):this.$message.warning("请选择一条航班数据")},detail:function(e){this.edit(e,"d")},edit:function(e,t){var a=this;"e"==t?(this.hiding=!1,this.disableSubmit=!1):"d"==t?(this.hiding=!1,this.disableSubmit=!0):(this.hiding=!0,this.disableSubmit=!1),this.form.resetFields(),this.orderId=e.orderId,this.model=Object.assign({},e),this.visible=!0,this.$nextTick((function(){a.form.setFieldsValue(l()(a.model,"ticketCode","tickectDate","orderId","createBy","createTime","updateBy","updateTime"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,r){if(!a){t.confirmLoading=!0;var n="",o="";e.model.id?(n+=e.url.edit,o="put"):(n+=e.url.add,o="post");var l=Object.assign(e.model,r);l.mainId=e.orderId,Object(i["i"])(n,l,o).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()}}},m=u,f=a("2877"),h=Object(f["a"])(m,r,n,!1,null,"15e28c2b",null);t["default"]=h.exports},f07c:function(e,t,a){}}]);