(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3822da72"],{"0845":function(e,t,a){"use strict";var n=a("ab02"),i=a.n(n);i.a},"968f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery(t)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"模型名称"}},[a("a-input",{attrs:{placeholder:"请输入搜索关键词"},model:{value:e.queryParam.keyWord,callback:function(t){e.$set(e.queryParam,"keyWord",t)},expression:"queryParam.keyWord"}})],1)],1),a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-col",{attrs:{md:6,sm:12}},[a("a-button",{staticStyle:{left:"10px"},attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px",left:"10px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)],1),a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"right",overflow:"hidden"}},[a("a-col",{attrs:{md:12,sm:12}},[a("a-button",{staticStyle:{left:"10px"},attrs:{type:"primary",icon:"search"},on:{click:function(t){e.createObj.visible=!0}}},[e._v("创建流程模型")])],1)],1)],1)],1)],1),a("a-table",{ref:"table",attrs:{scroll:{x:1280,y:e.innerHeight/2},bordered:"",size:"middle",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"revision",fn:function(t,n){return a("span",{},[e._v("\n      v."+e._s(t)+"\n    ")])}},{key:"metaInfo",fn:function(e,t){return a("span",{},[a("j-ellipsis",{attrs:{value:JSON.parse(e).description,length:10}})],1)}},{key:"logContent",fn:function(e,t){return a("span",{},[a("j-ellipsis",{attrs:{value:e,length:10}})],1)}},{key:"make",fn:function(t,n){return a("span",{},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(t){return e.deployment(n)}}},[e._v("发布")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(t){return e.updatelc(n.id)}}},[e._v("设计流程")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"是否确认删除?",okText:"Yes",cancelText:"No"},on:{confirm:function(t){return e.deletelc(1,n)},cancel:function(t){return e.deletelc(0)}}},[a("a",{attrs:{href:"javascript:void(0);"}},[e._v("删除")])])],1)}}])}),a("a-modal",{attrs:{title:"创建模型",visible:e.createObj.visible,confirmLoading:e.createObj.confirmLoading},on:{ok:e.createObjOk,cancel:function(t){e.createObj.visible=!1}}},[a("div",[e._v("\n      模型名称："),a("a-input",{attrs:{placeholder:"输入模型名称"},model:{value:e.createObj.name,callback:function(t){e.$set(e.createObj,"name",t)},expression:"createObj.name"}}),a("br"),e._v("\n      模型Key："),a("a-input",{attrs:{placeholder:"输入模型Key"},model:{value:e.createObj.key,callback:function(t){e.$set(e.createObj,"key",t)},expression:"createObj.key"}}),a("br"),e._v("\n      模型描述："),a("a-textarea",{attrs:{placeholder:"输入模型描述",rows:4},model:{value:e.createObj.description,callback:function(t){e.$set(e.createObj,"description",t)},expression:"createObj.description"}})],1)]),a("a-modal",{staticStyle:{top:"20px"},attrs:{title:"设计模型",visible:e.updateObj.visible,footer:null,maskClosable:!1,width:"90%"},on:{cancel:e.cancelUpdate}},[a("iframe",{staticStyle:{"background-color":"#fff"},attrs:{src:e.iframUrl,frameborder:"0",width:"100%",height:"800px",scrolling:"auto"}})])],1)},i=[],r=a("ca00"),s=a("b65a"),c=a("d579"),o=a("0fea"),l={name:"ModelList",mixins:[s["a"]],components:{JEllipsis:c["default"]},data:function(){return{iframUrl:"",createObj:{visible:!1,confirmLoading:!1},updateObj:{visible:!1,confirmLoading:!1},description:"这是流程模型列表页面",queryParam:{createTimeRange:[],keyWord:""},tabKey:"1",columns:[{title:"#",width:50,dataIndex:"",key:"rowIndex",align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"模型id",width:150,align:"center",dataIndex:"id"},{title:"模型名称",width:150,align:"center",dataIndex:"name",scopedSlots:{customRender:"logContent"}},{title:"模型key",width:150,dataIndex:"key",align:"center"},{title:"版本",width:80,dataIndex:"revision",align:"center",scopedSlots:{customRender:"revision"}},{title:"备注描述",width:150,dataIndex:"metaInfo",align:"center",scopedSlots:{customRender:"metaInfo"}},{title:"创建时间",width:150,dataIndex:"createTime",align:"center"},{title:"最后更新时间",width:150,dataIndex:"lastUpdateTime",align:"center"},{title:"操作",width:250,dataIndex:"",scopedSlots:{customRender:"make"},align:"center"}],labelCol:{xs:{span:1},sm:{span:2}},wrapperCol:{xs:{span:10},sm:{span:16}},url:{list:"/activiti/models/modelListData",delete:"/activiti/models/delete/",deployment:"/activiti/models/deployment/",create:"/activiti/models/create",update:"/activiti/modeler.html?modelId="}}},methods:{createObjOk:function(e){this.createObj.confirmLoading=!0,this.updateObj.visible=!0,this.iframUrl="".concat(window._CONFIG["domianURL"]).concat(this.url.create,"?name=").concat(this.createObj.name||"","&key=").concat(this.createObj.key||"","&description=").concat(this.createObj.description||""),this.createObj.visible=!1,this.createObj.confirmLoading=!1},updatelc:function(e){var t=this;this.$message.loading("稍等。。。",.8).then((function(){t.createObj.confirmLoading=!0,t.iframUrl="".concat(window._CONFIG["domianURL"]).concat(t.url.update).concat(e),t.updateObj.visible=!0,t.createObj.confirmLoading=!1}))},cancelUpdate:function(){var e=this;this.$confirm({title:"关闭前请确认已保存修改?",content:"关闭后未保存的修改将丢失！",okText:"确认关闭",okType:"danger",cancelText:"再看看",onOk:function(){e.updateObj.visible=!1,e.loadData()},onCancel:function(){}})},deployment:function(e){var t=this,a=e.id,n=e.name;this.$confirm({title:"确认部署流程?",content:"确认部署流程：".concat(n),onOk:function(){var e=this;Object(o["d"])(t.url.deployment+a).then((function(a){a.success?t.$message.success(a.message):t.$message.error(a.message),e.loadData()}))},onCancel:function(){}})},deletelc:function(e,t){var a=this;e&&Object(o["d"])(this.url.delete+t.id).then((function(e){e.success?a.$message.success(e.message):a.$message.error(e.message),a.loadData()}))},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e},loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(o["d"])(this.url.list,a).then((function(e){if(e.success){var a=e.result||[];t.dataSource=a,t.ipagination.total=a.length}510===e.code&&t.$message.warning(e.message),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},getQueryParams:function(){var e=Object.assign({},this.queryParam,this.isorter);return delete e.createTimeRange,Object(r["d"])(e)},searchReset:function(){var e=this,t=e.queryParam.logType;e.queryParam={},e.queryParam.logType=t,e.loadData(this.ipagination.current)},onDateChange:function(e,t){this.queryParam.createTime_begin=t[0],this.queryParam.createTime_end=t[1]},onDateOk:function(e){}}},d=l,u=(a("0845"),a("2877")),m=Object(u["a"])(d,n,i,!1,null,"488a5b03",null);t["default"]=m.exports},ab02:function(e,t,a){}}]);