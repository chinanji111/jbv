(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5620ebf2","chunk-43763ee6","chunk-2d0e1f65","chunk-2d0df437","chunk-2d0df437"],{"2db0":function(e,t,a){},"7d57":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:"功能测试",width:800,visible:e.visible},on:{ok:function(t){e.visible=!1},cancel:function(t){e.visible=!1}}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"功能测试"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["test",e.validatorRules.test],expression:"['test', validatorRules.test]"}],attrs:{placeholder:"请输入"},on:{change:function(t){return e.testValue=t.target.value}}})],1)],1),a("a-row",{attrs:{type:"flex",gutter:8}},e._l(e.testValue,(function(t,r){return a("a-col",{key:r},[a("a-row",[a("a-col",[a("a-input",{staticStyle:{"text-align":"center",width:"40px"},attrs:{value:t}})],1),a("a-col",{staticStyle:{"text-align":"center"}},[e._v(e._s(r+1))])],1)],1)})),1)],1)},n=[],l=a("ca00"),o={name:"SysCheckRuleTestModal",data:function(){var e=this;return{title:"操作",visible:!1,ruleCode:"",testValue:"",form:this.$form.createForm(this),validatorRules:{test:{rules:[{validator:function(t,a,r){return Object(l["p"])(e.ruleCode,a,r)}}]}}}},methods:{open:function(e){this.ruleCode=e,this.form.resetFields(),this.testValue="",this.visible=!0}}},i=o,s=a("2877"),c=Object(s["a"])(i,r,n,!1,null,"0e3a1b08",null);t["default"]=c.exports},"88bc":function(e,t,a){(function(t){var a=1/0,r=9007199254740991,n="[object Arguments]",l="[object Function]",o="[object GeneratorFunction]",i="[object Symbol]",s="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,u=s||c||Function("return this")();function d(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function m(e,t){var a=-1,r=e?e.length:0,n=Array(r);while(++a<r)n[a]=t(e[a],a,e);return n}function p(e,t){var a=-1,r=t.length,n=e.length;while(++a<r)e[n+a]=t[a];return e}var f=Object.prototype,h=f.hasOwnProperty,y=f.toString,b=u.Symbol,v=f.propertyIsEnumerable,g=b?b.isConcatSpreadable:void 0,w=Math.max;function k(e,t,a,r,n){var l=-1,o=e.length;a||(a=R),n||(n=[]);while(++l<o){var i=e[l];t>0&&a(i)?t>1?k(i,t-1,a,r,n):p(n,i):r||(n[n.length]=i)}return n}function S(e,t){return e=Object(e),C(e,t,(function(t,a){return a in e}))}function C(e,t,a){var r=-1,n=t.length,l={};while(++r<n){var o=t[r],i=e[o];a(i,o)&&(l[o]=i)}return l}function x(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var a=arguments,r=-1,n=w(a.length-t,0),l=Array(n);while(++r<n)l[r]=a[t+r];r=-1;var o=Array(t+1);while(++r<t)o[r]=a[r];return o[t]=l,d(e,this,o)}}function R(e){return E(e)||j(e)||!!(g&&e&&e[g])}function _(e){if("string"==typeof e||L(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}function j(e){return N(e)&&h.call(e,"callee")&&(!v.call(e,"callee")||y.call(e)==n)}var E=Array.isArray;function O(e){return null!=e&&P(e.length)&&!$(e)}function N(e){return q(e)&&O(e)}function $(e){var t=I(e)?y.call(e):"";return t==l||t==o}function P(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}function I(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function q(e){return!!e&&"object"==typeof e}function L(e){return"symbol"==typeof e||q(e)&&y.call(e)==i}var T=x((function(e,t){return null==e?{}:S(e,m(k(t,1),_))}));e.exports=T}).call(this,a("c8ba"))},9655:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:1e3,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"规则名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ruleName",e.validatorRules.ruleName],expression:"['ruleName', validatorRules.ruleName]"}],attrs:{placeholder:"请输入规则名称"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"规则Code"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ruleCode",e.validatorRules.ruleCode],expression:"['ruleCode', validatorRules.ruleCode]"}],attrs:{placeholder:"请输入规则Code"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"规则描述"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["ruleDescription",{}],expression:"['ruleDescription', {}]"}],attrs:{placeholder:"请输入规则描述"}})],1)],1),a("a-tabs",{model:{value:e.tabs.activeKey,callback:function(t){e.$set(e.tabs,"activeKey",t)},expression:"tabs.activeKey"}},[a("a-tab-pane",{key:e.tabs.design.key,attrs:{tab:"局部规则",forceRender:""}},[a("a-alert",{attrs:{type:"info",showIcon:"",message:"局部规则按照你输入的位数有序的校验。"}}),a("j-editable-table",{ref:"designTable",staticStyle:{"margin-top":"8px"},attrs:{dragSort:"",rowNumber:"",maxHeight:240,columns:e.tabs.design.columns,dataSource:e.tabs.design.dataSource},scopedSlots:e._u([{key:"action",fn:function(e){return[a("my-action-button",{attrs:{rowEvent:e}})]}}])})],1),a("a-tab-pane",{key:e.tabs.global.key,attrs:{tab:"全局规则",forceRender:""}},[a("j-editable-table",{ref:"globalTable",attrs:{dragSort:"",rowNumber:"",actionButton:"",maxHeight:240,columns:e.tabs.global.columns,dataSource:e.tabs.global.dataSource},scopedSlots:e._u([{key:"actionButtonAfter",fn:function(){return[a("a-alert",{staticStyle:{"margin-bottom":"8px"},attrs:{type:"info",showIcon:"",message:"全局规则可校验用户输入的所有字符；全局规则的优先级比局部规则的要高。"}})]},proxy:!0},{key:"action",fn:function(e){return[a("my-action-button",{attrs:{rowEvent:e,allowEmpty:""}})]}}])})],1)],1)],1)],1)},n=[],l=a("88bc"),o=a.n(l),i=a("0fea"),s=a("ca00"),c=a("e2e0"),u=a("7550");function d(e,t){return f(e)||p(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function p(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],r=!0,n=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done);r=!0)if(a.push(o.value),t&&a.length===t)break}catch(s){n=!0,l=s}finally{try{r||null==i["return"]||i["return"]()}finally{if(n)throw l}}return a}}function f(e){if(Array.isArray(e))return e}var h={name:"SysCheckRuleModal",components:{JEditableTable:u["default"],"my-action-button":{props:{rowEvent:Object,allowEmpty:Boolean},methods:{confirmIsShow:function(){var e=this.rowEvent,t=e.index,a=e.allValues.inputValues,r=a[t];return r.digits||r.pattern},handleLineAdd:function(){var e=this.rowEvent.target;e.add()},handleLineDelete:function(){var e=this.rowEvent,t=e.rowId,a=e.target;a.removeRows(t)},renderDeleteButton:function(){var e=this.$createElement;return this.allowEmpty||this.rowEvent.index>0?this.confirmIsShow()?e("a-popconfirm",{attrs:{title:"确定要删除吗？"},on:{confirm:this.handleLineDelete}},[e("a-button",{attrs:{icon:"minus"}})]):e("a-button",{attrs:{icon:"minus"},on:{click:this.handleLineDelete}}):""}},render:function(){var e=arguments[0];return e("div",[e("a-button",{on:{click:this.handleLineAdd},attrs:{icon:"plus"}})," ",this.renderDeleteButton()])}}},data:function(){var e=this;return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{ruleName:{rules:[{required:!0,message:"请输入规则名称!"}]},ruleCode:{rules:[{required:!0,message:"请输入规则Code!"},{validator:function(t,a,r){return Object(s["q"])("sys_check_rule","rule_code",a,e.model.id,r)}}]}},tabs:{activeKey:"design",global:{key:"global",columns:[{title:"优先级",key:"priority",width:"15%",type:c["a"].select,defaultValue:"1",options:[{title:"优先运行",value:"1"},{title:"最后运行",value:"0"}],validateRules:[]},{title:"规则（正则表达式）",key:"pattern",width:"50%",type:c["a"].input,validateRules:[{required:!0,message:"规则不能为空"},{handler:this.validatePatternHandler}]},{title:"提示文本",key:"message",width:"20%",type:c["a"].input,validateRules:[{required:!0,message:"${title}不能为空"}]},{title:"操作",key:"action",width:"15%",slotName:"action",type:c["a"].slot}],dataSource:[]},design:{key:"design",columns:[{title:"位数",key:"digits",width:"15%",type:c["a"].inputNumber,validateRules:[{required:!0,message:"${title}不能为空"},{pattern:/^[1-9]\d*$/,message:"请输入零以上的正整数"}]},{title:"规则（正则表达式）",key:"pattern",width:"50%",type:c["a"].input,validateRules:[{required:!0,message:"规则不能为空"},{handler:this.validatePatternHandler}]},{title:"提示文本",key:"message",width:"20%",type:c["a"].input,validateRules:[{required:!0,message:"${title}不能为空"}]},{title:"操作",key:"action",width:"15%",slotName:"action",type:c["a"].slot}],dataSource:[]}},url:{add:"/sys/checkRule/add",edit:"/sys/checkRule/edit"}}},created:function(){},methods:{validatePatternHandler:function(e,t,a,r,n,l){if("blur"===e||"getValues"===e)try{new RegExp(t),n(!0)}catch(o){n(!1,"请输入正确的正则表达式")}else n(!0)},add:function(){this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.tabs.activeKey=this.tabs.design.key,this.tabs.global.dataSource=[],this.tabs.design.dataSource=[{digits:"",pattern:"",message:""}],this.model=Object.assign({},e),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(o()(t.model,"ruleName","ruleCode","ruleDescription"));var e=t.model.ruleJson;if(e){var a=JSON.parse(e),r=[],n=[],l="1";a.forEach((function(e){"*"===e.digits?r.push(Object.assign(e,{priority:l})):(l="0",n.push(e))})),t.tabs.global.dataSource=r,t.tabs.design.dataSource=n}}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this;Promise.all([Object(s["a"])(new Promise((function(t,a){e.form.validateFields((function(e,r){return e?a(e):t(r)}))}))),Object(s["a"])(this.$refs.designTable.getValuesPromise),Object(s["a"])(this.$refs.globalTable.getValuesPromise)]).then((function(t){var a=d(t,3),r=a[0],n=a[1],l=a[2];if(r.type===s["c"])return Promise.reject("主表校验未通过");if(n.type===s["c"])return e.tabs.activeKey=e.tabs.design.key,Promise.reject("局部规则子表校验未通过");if(l.type===s["c"])return e.tabs.activeKey=e.tabs.global.key,Promise.reject("全局规则子表校验未通过");var c=r.data,u=l.data,m=n.data,p=[],f=[];u.forEach((function(e){e.digits="*","1"===e.priority?p.push(e):f.push(e)}));var h=p.concat(m).concat(f),y=h.map((function(e){return o()(e,"digits","pattern","message")})),b=JSON.stringify(y),v=Object.assign(e.model,c,{ruleJson:b}),g="post",w=e.url.add;return e.model.id&&(g="put",w=e.url.edit),e.confirmLoading=!0,Object(i["i"])(w,v,g)})).then((function(t){t.success?(e.$message.success(t.message),e.$emit("ok"),e.close()):e.$message.warning(t.message)})).catch((function(e){})).finally((function(){e.confirmLoading=!1}))},handleCancel:function(){this.close()}}},y=h,b=a("2877"),v=Object(b["a"])(y,r,n,!1,null,"6ede9a3d",null);t["default"]=v.exports},"969f":function(e,t,a){"use strict";var r=a("2db0"),n=a.n(r);n.a},a364:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery(t)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"规则名称"}},[a("a-input",{attrs:{placeholder:"请输入规则名称"},model:{value:e.queryParam.ruleName,callback:function(t){e.$set(e.queryParam,"ruleName",t)},expression:"queryParam.ruleName"}})],1)],1),a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"规则Code"}},[a("a-input",{attrs:{placeholder:"请输入规则Code"},model:{value:e.queryParam.ruleCode,callback:function(t){e.$set(e.queryParam,"ruleCode",t)},expression:"queryParam.ruleCode"}})],1)],1),e.toggleSearchStatus?void 0:e._e(),a("a-col",{attrs:{md:6,sm:8}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")]),a("a",{staticStyle:{"margin-left":"8px"},on:{click:e.handleToggleSearch}},[e._v("\n              "+e._s(e.toggleSearchStatus?"收起":"展开")+"\n              "),a("a-icon",{attrs:{type:e.toggleSearchStatus?"up":"down"}})],1)],1)])],2)],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),a("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("编码校验规则")}}},[e._v("导出")]),a("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[a("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("\n          删除\n        ")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作\n        "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("a-alert",{staticStyle:{"margin-bottom":"16px"},attrs:{type:"info",showIcon:""}},[a("template",{slot:"message"},[a("span",[e._v("已选择")]),a("a",{staticStyle:{"font-weight":"600",padding:"0 4px"}},[e._v(e._s(e.selectedRowKeys.length))]),a("span",[e._v("项")]),e.selectedRowKeys.length>0?[a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:e.onClearSelected}},[e._v("清空")])]:e._e()],2)],2),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,r){return[a("a",{on:{click:function(t){return e.handleEdit(r)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.handleTest(r)}}},[e._v("功能测试")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[a("span",[e._v("更多")]),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗？"},on:{confirm:function(t){return e.handleDelete(r.id)}}},[e._v("删除")])],1)],1)],1)]}}])}),a("sys-check-rule-modal",{ref:"modalForm",on:{ok:e.modalFormOk}}),a("sys-check-rule-test-modal",{ref:"testModal"})],1)},n=[],l=a("d579"),o=a("b65a"),i=a("9655"),s=a("7d57"),c={name:"SysCheckRuleList",mixins:[o["a"]],components:{SysCheckRuleModal:i["default"],SysCheckRuleTestModal:s["default"],JEllipsis:l["default"]},data:function(){var e=this.$createElement;return{description:"编码校验规则管理页面",columns:[{title:"#",key:"rowIndex",width:60,align:"center",customRender:function(e,t,a){return a+1}},{title:"规则名称",align:"center",dataIndex:"ruleName"},{title:"规则Code",align:"center",dataIndex:"ruleCode"},{title:"规则描述",align:"center",dataIndex:"ruleDescription",customRender:function(t){return e("j-ellipsis",{attrs:{value:t,length:48}})}},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],url:{list:"/sys/checkRule/list",delete:"/sys/checkRule/delete",deleteBatch:"/sys/checkRule/deleteBatch",exportXlsUrl:"sys/checkRule/exportXls",importExcelUrl:"sys/checkRule/importExcel"}}},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{handleTest:function(e){this.$refs.testModal.open(e.ruleCode)}}},u=c,d=(a("969f"),a("2877")),m=Object(d["a"])(u,r,n,!1,null,"7ea65a8b",null);t["default"]=m.exports}}]);