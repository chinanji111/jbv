(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6576cb8e","chunk-f46ddf66","chunk-2d0c06ae","chunk-2d0df437","chunk-2d0df437"],{"3ac3":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchQuery(e)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"标题"}},[a("a-input",{attrs:{placeholder:"请输入搜索关键词"},model:{value:t.queryParam.title,callback:function(e){t.$set(t.queryParam,"title",e)},expression:"queryParam.title"}})],1)],1),a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"状态"}},[a("a-select",{attrs:{placeholder:"请选择",allowClear:!0},model:{value:t.queryParam.status,callback:function(e){t.$set(t.queryParam,"status",e)},expression:"queryParam.status"}},[a("a-select-option",{attrs:{value:"0"}},[t._v("草稿")]),a("a-select-option",{attrs:{value:"1"}},[t._v("处理中")]),a("a-select-option",{attrs:{value:"2"}},[t._v("已结束")]),a("a-select-option",{attrs:{value:"3"}},[t._v("已撤回")])],1)],1)],1),a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"结果"}},[a("a-select",{attrs:{placeholder:"请选择",allowClear:!0},model:{value:t.queryParam.result,callback:function(e){t.$set(t.queryParam,"result",e)},expression:"queryParam.result"}},[a("a-select-option",{attrs:{value:"0"}},[t._v("未提交")]),a("a-select-option",{attrs:{value:"1"}},[t._v("处理中")]),a("a-select-option",{attrs:{value:"2"}},[t._v("通过")]),a("a-select-option",{attrs:{value:"3"}},[t._v("驳回")])],1)],1)],1),a("a-col",{attrs:{md:6,sm:10}},[a("a-form-item",{attrs:{label:"创建时间",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-range-picker",{staticStyle:{width:"210px"},attrs:{format:"YYYY-MM-DD",placeholder:["开始时间","结束时间"]},on:{change:t.onDateChange,ok:t.onDateOk},model:{value:t.queryParam.createTimeRange,callback:function(e){t.$set(t.queryParam,"createTimeRange",e)},expression:"queryParam.createTimeRange"}})],1)],1),a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-col",{attrs:{md:6,sm:12}},[a("a-button",{staticStyle:{left:"10px"},attrs:{type:"primary",icon:"search"},on:{click:t.searchQuery}},[t._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px",left:"10px"},attrs:{type:"primary",icon:"reload"},on:{click:t.searchReset}},[t._v("重置")])],1)],1),a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"right",overflow:"hidden"}},[a("a-col",{attrs:{md:12,sm:12}},[a("a-button",{staticStyle:{left:"10px"},attrs:{type:"primary",loading:t.addApplyLoading,icon:"plus-circle"},on:{click:t.addApply}},[t._v("发起申请")])],1)],1)],1)],1)],1),a("a-table",{ref:"table",attrs:{scroll:t.scroll,bordered:"",size:"middle",rowKey:"id",dataSource:t.dataSource,pagination:t.ipagination,loading:t.loading},on:{change:t.handleTableChange}},[a("a-table-column",{attrs:{title:"#",width:50},scopedSlots:t._u([{key:"default",fn:function(e,s,r){return[a("span",[t._v(" "+t._s(r+1)+" ")])]}}])}),a("a-table-column",{attrs:{title:"标题",dataIndex:"title",width:150,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e,s,r){return[a("span",[t._v(" "+t._s(e)+" ")])]}}])}),a("a-table-column",{attrs:{title:"所属流程",dataIndex:"processName",width:150,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e,s,r){return[a("span",[t._v(" "+t._s(e)+" ")])]}}])}),a("a-table-column",{attrs:{title:"当前审批环节",dataIndex:"currTaskName",width:150,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e,s,r){return[a("span",[t._v(" "+t._s(e)+" ")])]}}])}),a("a-table-column",{key:"s",attrs:{title:"状态",dataIndex:"status",width:150,align:"center",sorter:function(t,e){return t.status-e.status}},scopedSlots:t._u([{key:"default",fn:function(e,s,r){return[a("span",{style:{color:t.getStatus(e).color}},[t._v(" "+t._s(t.getStatus(e).text)+" ")])]}}])}),a("a-table-column",{key:"result",attrs:{title:"结果",dataIndex:"result",width:150,align:"center",sorter:function(t,e){return t.result-e.result}},scopedSlots:t._u([{key:"default",fn:function(e,s,r){return[a("span",{style:{color:t.getResult(e).color}},[t._v(" "+t._s(t.getResult(e).text)+" ")])]}}])}),a("a-table-column",{attrs:{title:"创建时间",dataIndex:"createTime",width:150,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e,s,r){return[a("span",[t._v(" "+t._s(e)+" ")])]}}])}),a("a-table-column",{attrs:{title:"提交申请时间",dataIndex:"applyTime",width:150,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e,s,r){return[a("span",[t._v(" "+t._s(e)+" ")])]}}])}),a("a-table-column",{attrs:{title:"操作",dataIndex:"",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e,s,r){return[0==s.status?[a("a",{staticStyle:{color:"#00A0E9"},attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.apply(s)}}},[t._v("提交申请")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{staticStyle:{color:"#000000"},attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.edit(s)}}},[t._v("编辑提交数据")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return t.remove(s)}}},[a("a",{staticStyle:{color:"red"},attrs:{href:"javascript:void(0);"}},[t._v("删除")])])]:1==s.status?[1==s.procInstStatus?a("a",{staticStyle:{color:"#8000ff"},attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.cancel(s)}}},[t._v("撤回")]):t._e(),1==s.procInstStatus?a("a-divider",{attrs:{type:"vertical"}}):t._e(),a("a",{staticStyle:{color:"blue"},attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.history(s)}}},[t._v("查看进度")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{staticStyle:{color:"#999"},attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.detail(s)}}},[t._v("表单数据")])]:2==s.status&&3==s.result||3==s.status?[a("a-popconfirm",{attrs:{title:"确定提交申请吗?"},on:{confirm:function(){return t.apply(s)}}},[a("a",{staticStyle:{color:"#00A0E9"},attrs:{href:"javascript:void(0);"}},[t._v("重新申请")])]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{staticStyle:{color:"#000000"},attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.edit(s)}}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{staticStyle:{color:"blue"},attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.history(s)}}},[t._v("审批历史")])]:[a("a",{staticStyle:{color:"#999"},attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.detail(s)}}},[t._v("表单数据")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{staticStyle:{color:"blue"},attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.history(s)}}},[t._v("审批历史")])]]}}])})],1),a("a-drawer",{attrs:{title:"选择流程",width:"33%",placement:"right",closable:!1,visible:t.processModalVisible},on:{close:function(e){t.processModalVisible=!1}}},[0==t.activeKeyAll.length?a("a-empty",{attrs:{description:"无流程可供选择"}}):a("div",[a("a-input-search",{staticStyle:{"margin-bottom":"10px",width:"200px"},attrs:{placeholder:"输入流程名称"},on:{search:t.onSearchProcess}}),a("a-collapse",{model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},t._l(t.activeKeyAll,(function(e,s){return a("a-collapse-panel",{key:e,attrs:{header:t.filterDictText(t.dictOptions,e)||"未分类"}},[a("a-list",{attrs:{grid:{gutter:10,column:1},dataSource:t.processDataMap[e]},scopedSlots:t._u([{key:"renderItem",fn:function(e){return a("a-list-item",{},[a("a-card",[a("div",{attrs:{slot:"title"},slot:"title"},[a("a-row",[a("a-col",{attrs:{span:"12",title:e.name}},[t._v(t._s(e.name)+" ")]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:"12"}},[a("a",{attrs:{href:"javascript:void (0)"},on:{click:function(a){return t.chooseProcess(e)}}},[t._v("发起申请")])])],1)],1),a("b",[t._v("版本：")]),t._v("v."+t._s(e.version)+"\n                "),a("br"),a("b",[t._v("说明：")]),t._v(t._s(e.description)+"\n              ")])],1)}}],null,!0)})],1)})),1)],1)],1),a("a-modal",{attrs:{title:t.lcModa.title,footer:null,maskClosable:!1,width:"80%"},model:{value:t.lcModa.visible,callback:function(e){t.$set(t.lcModa,"visible",e)},expression:"lcModa.visible"}},[t.lcModa.visible?a(t.lcModa.formComponent,{tag:"component",attrs:{disabled:t.lcModa.disabled,processData:t.lcModa.processData,isNew:t.lcModa.isNew},on:{afterSubmit:t.afterSub,close:function(e){t.lcModa.visible=!1,t.lcModa.disabled=!1}}}):t._e()],1),a("a-modal",{attrs:{title:"提交申请","mask-closable":!1,width:500,footer:null},model:{value:t.modalVisible,callback:function(e){t.modalVisible=e},expression:"modalVisible"}},[t.modalVisible?a("div",[a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:t.showAssign,expression:"showAssign"}],attrs:{label:"选择审批人"}},[a("a-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",mode:"multiple",allowClear:!0},model:{value:t.form.assignees,callback:function(e){t.$set(t.form,"assignees",e)},expression:"form.assignees"}},t._l(t.assigneeList,(function(e,s){return a("a-select-option",{key:s,attrs:{value:e.username}},[t._v(t._s(e.realname))])})),1)],1),a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:t.isGateway,expression:"isGateway"}],attrs:{label:"下一审批人"}},[a("a-alert",{attrs:{type:"info",showIcon:"",message:"分支网关处不支持自定义选择下一审批人，将自动下发给所有可审批人。"}},[t._v("，将发送给下一节点所有人")])],1),a("a-form-item",{attrs:{label:"优先级",prop:"priority"}},[a("a-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",allowClear:!0},model:{value:t.form.priority,callback:function(e){t.$set(t.form,"priority",e)},expression:"form.priority"}},[a("a-select-option",{attrs:{value:0}},[t._v("普通")]),a("a-select-option",{attrs:{value:1}},[t._v("重要")]),a("a-select-option",{attrs:{value:2}},[t._v("紧急")])],1)],1),a("a-form-item",{attrs:{label:"消息通知"}},[a("a-checkbox",{model:{value:t.form.sendMessage,callback:function(e){t.$set(t.form,"sendMessage",e)},expression:"form.sendMessage"}},[t._v("站内消息通知")]),a("a-checkbox",{attrs:{disabled:""},model:{value:t.form.sendSms,callback:function(e){t.$set(t.form,"sendSms",e)},expression:"form.sendSms"}},[t._v("短信通知")]),a("a-checkbox",{attrs:{disabled:""},model:{value:t.form.sendEmail,callback:function(e){t.$set(t.form,"sendEmail",e)},expression:"form.sendEmail"}},[t._v("邮件通知")])],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("a-button",{attrs:{type:"text"},on:{click:function(e){t.modalVisible=!1}}},[t._v("取消")]),a("div",{staticStyle:{display:"inline-block",width:"20px"}}),a("a-button",{attrs:{type:"primary",disabled:t.submitLoading},on:{click:t.applySubmit}},[t._v("提交")])],1)],1):t._e()]),a("a-modal",{attrs:{title:"审批历史","mask-closable":!1,width:"80%",footer:null},model:{value:t.modalLsVisible,callback:function(e){t.modalLsVisible=e},expression:"modalLsVisible"}},[t.modalLsVisible?a("div",[a("historicDetail",{attrs:{procInstId:t.procInstId}})],1):t._e()]),a("a-modal",{attrs:{title:"确认撤回","mask-closable":!1,width:500},model:{value:t.modalCancelVisible,callback:function(e){t.modalCancelVisible=e},expression:"modalCancelVisible"}},[t.modalCancelVisible?a("a-form",{ref:"delForm",attrs:{"label-width":70},model:{value:t.cancelForm,callback:function(e){t.cancelForm=e},expression:"cancelForm"}},[a("a-form-item",{attrs:{label:"撤回原因",prop:"reason"}},[a("a-input",{attrs:{type:"textarea",rows:4},model:{value:t.cancelForm.reason,callback:function(e){t.$set(t.cancelForm,"reason",e)},expression:"cancelForm.reason"}})],1)],1):t._e(),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("a-button",{attrs:{type:"text"},on:{click:function(e){t.modalCancelVisible=!1}}},[t._v("取消")]),a("a-button",{attrs:{type:"primary",disabled:t.submitLoading},on:{click:t.handelSubmitCancel}},[t._v("提交")])],1)],1)],1)},r=[],i=a("b65a"),n=a("9ab6"),o=a("ca00"),l=a("d579"),c=a("0fea"),u=(a("88bc"),a("b098")),d=a("89f2"),f=a("4260"),m={name:"applyList",mixins:[n["a"],i["a"]],components:{JEllipsis:l["default"],JTreeSelect:u["default"],historicDetail:f["default"]},data:function(){return{description:"我的申请",dictOptions:[],url:{list:"/actBusiness/listData",getProcessDataList:"/activiti_process/listData",delByIds:"/actBusiness/delByIds",getFirstNode:"/actProcessIns/getFirstNode",applyBusiness:"/actBusiness/apply",cancelApply:"/actBusiness/cancel"},queryParam:{createTimeRange:[],keyWord:""},labelCol:{xs:{span:4},sm:{span:4}},wrapperCol:{xs:{span:20},sm:{span:20}},processModalVisible:null,activeKeyAll:[],activeKey:[],processDataMap:{},searchProcessKey:null,addApplyLoading:!1,lcModa:{title:"",disabled:!1,visible:!1,formComponent:null,isNew:!1},form:{priority:0,assignees:[],sendMessage:!0},modalVisible:!1,showAssign:!1,assigneeList:[],isGateway:!1,dictPriority:[],submitLoading:!1,error:"",modalLsVisible:!1,procInstId:"",modalCancelVisible:!1,cancelForm:{}}},computed:{},methods:{initDictConfig:function(){var t=this;Object(d["d"])("bpm_process_type").then((function(e){e.success&&(t.dictOptions=e.result)}))},filterDictText:function(t,e){if(t instanceof Array){var a=!0,s=!1,r=void 0;try{for(var i,n=t[Symbol.iterator]();!(a=(i=n.next()).done);a=!0){var o=i.value;if(e===o.value)return o.text}}catch(l){s=!0,r=l}finally{try{a||null==n.return||n.return()}finally{if(s)throw r}}}return e||"null"==e?"":e},getProcessList:function(){var t=this;this.addApplyLoading=!0,this.getAction(this.url.getProcessDataList,{status:1,roles:!0}).then((function(e){if(t.activeKeyAll=[],e.success){var a=e.result||[];if(a.length>0){var s=t.searchProcessKey;for(var r in s&&(a=_.filter(a,(function(t){return t.name.indexOf(s)>-1}))),t.processDataMap=_.groupBy(a,"categoryId"),t.processDataMap)t.activeKeyAll.push(r);t.activeKey=t.activeKeyAll}t.processModalVisible=!0}else t.$message.warning(e.message)})).finally((function(){return t.addApplyLoading=!1}))},loadData:function(t){var e=this;if(this.url.list){1===t&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(c["d"])(this.url.list,a).then((function(t){if(t.success){var a=t.result||[];e.dataSource=a,e.ipagination.total=a.length}510===t.code&&e.$message.warning(t.message),e.loading=!1}))}else this.$message.error("请设置url.list属性!")},getQueryParams:function(){var t=Object.assign({},this.queryParam,this.isorter);return delete t.createTimeRange,Object(o["d"])(t)},searchReset:function(){var t=this,e=t.queryParam.logType;t.queryParam={},t.queryParam.logType=e,t.loadData(this.ipagination.current)},onDateChange:function(t,e){this.queryParam.createTime_begin=e[0],this.queryParam.createTime_end=e[1]},onDateOk:function(t){},getStatus:function(t){var e="未知",a="";return 0==t?(e="草稿",a="default"):1==t?(e="处理中",a="orange"):2==t?(e="已结束",a="blue"):3==t&&(e="已撤回",a="magenta"),{text:e,color:a}},getResult:function(t){var e="未知",a="";return 0==t?(e="未提交",a="default"):1==t?(e="处理中",a="orange"):2==t?(e="已通过",a="green"):3==t&&(e="已驳回",a="red"),{text:e,color:a}},apply:function(t){var e=this;t.procDefId&&"null"!=t.procDefId?(this.form.id=t.id,this.form.procDefId=t.procDefId,this.form.title=t.title,this.getAction(this.url.getFirstNode,{procDefId:t.procDefId,tableId:t.tableId,tableName:t.tableName}).then((function(t){if(t.success){if(3==t.result.type||4==t.result.type)return e.isGateway=!0,e.modalVisible=!0,e.form.firstGateway=!0,e.showAssign=!1,void(e.error="");if(e.form.firstGateway=!1,e.isGateway=!1,t.result.users&&t.result.users.length>0){e.error="",e.assigneeList=t.result.users;var a=[];t.result.users.forEach((function(t){a.push(t.username)})),e.form.assignees=a,e.showAssign=!0}else e.form.assignees=[],e.showAssign=!0,e.error="审批节点未分配候选审批人员，请联系管理员！";if(e.error)return void e.$message.error(e.error);e.modalVisible=!0}else e.$message.error(t.message)}))):this.$message.error("流程定义为空")},applySubmit:function(){var t=this;if(this.showAssign&&this.form.assignees.length<1)return this.error="请至少选择一个审批人",void this.$message.error(this.error);this.error="",this.submitLoading=!0;var e=Object.assign({},this.form);e.assignees=e.assignees.join(","),this.postFormAction(this.url.applyBusiness,e).then((function(e){e.success?(t.$message.success("操作成功"),t.loadData(),t.modalVisible=!1):t.$message.error(e.message)})).finally((function(){return t.submitLoading=!1}))},edit:function(t,e){t.routeName?(e=e||!1,this.lcModa.disabled=e,this.lcModa.title="修改流程业务信息："+t.title,e&&(this.lcModa.title="查看流程业务信息："+t.title),this.lcModa.formComponent=this.getFormComponent(t.routeName).component,this.lcModa.processData=t,this.lcModa.isNew=!1,this.lcModa.visible=!0):this.$message.warning("该流程信息未配置表单，请联系开发人员！")},remove:function(t){var e=this;this.postFormAction(this.url.delByIds,{ids:t.id}).then((function(t){t.success?(e.$message.success(t.message),e.loadData()):e.$message.error(t.message)}))},cancel:function(t){this.cancelForm.id=t.id,this.cancelForm.procInstId=t.procInstId,this.modalCancelVisible=!0},handelSubmitCancel:function(){var t=this;this.submitLoading=!0,this.postFormAction(this.url.cancelApply,this.cancelForm).then((function(e){e.success?(t.$message.success("操作成功"),t.loadData(),t.modalCancelVisible=!1):t.$message.error(e.message)})).finally((function(){return t.submitLoading=!1}))},history:function(t){t.procInstId?(this.procInstId=t.procInstId,this.modalLsVisible=!0):this.$message.error("流程实例ID不存在")},detail:function(t){this.edit(t,!0)},handleTableChange:function(t,e,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=t},addApply:function(){this.getProcessList()},onSearchProcess:function(t){this.searchProcessKey=t,this.getProcessList()},chooseProcess:function(t){t.routeName?(this.lcModa.formComponent=this.getFormComponent(t.routeName).component,this.lcModa.title="发起流程："+t.name,this.lcModa.isNew=!0,this.lcModa.processData=t,this.lcModa.visible=!0):this.$message.warning("该流程信息未配置表单，请联系开发人员！")},afterSub:function(t){this.lcModa.visible=!1,this.loadData()}}},p=m,h=(a("71b5"),a("2877")),v=Object(h["a"])(p,s,r,!1,null,"62b2004c",null);e["default"]=v.exports},4260:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search"},[a("a-card",{staticStyle:{"margin-bottom":"10px"}},[a("p",{attrs:{slot:"title"},slot:"title"},[a("span",[t._v("流程审批进度历史")])]),a("a-row",{staticStyle:{position:"relative"}},[a("a-table",{ref:"table",attrs:{loading:t.loading,rowKey:"id",dataSource:t.data,pagination:!1}},[a("a-table-column",{attrs:{title:"#",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e,s,r){return[a("span",[t._v(" "+t._s(r+1)+" ")])]}}])}),a("a-table-column",{attrs:{title:"任务名称",dataIndex:"name",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(" "+t._s(e)+" ")])]}}])}),a("a-table-column",{attrs:{title:"处理人",dataIndex:"assignees",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e?a("div",t._l(e,(function(e){return a("span",[e.isExecutor?a("span",{staticStyle:{color:"#00DB00"}},[t._v(t._s(e.username)+" ")]):a("span",{staticStyle:{color:"#999"}},[t._v(t._s(e.username)+" ")])])})),0):t._e()]}}])}),a("a-table-column",{attrs:{title:"审批操作",dataIndex:"deleteReason",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.toString().indexOf("通过")>-1?a("span",{staticStyle:{color:"#00DB00"}},[t._v(t._s(e))]):e.toString().indexOf("驳回")>-1?a("span",{staticStyle:{color:"red"}},[t._v(t._s(e))]):a("span",[t._v(t._s(e))])]}}])}),a("a-table-column",{attrs:{title:"审批意见",dataIndex:"comment",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e))])]}}])}),a("a-table-column",{attrs:{title:"耗时",dataIndex:"duration",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.millsToTime(e)))])]}}])}),a("a-table-column",{attrs:{title:"创建时间",dataIndex:"createTime",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e))])]}}])}),a("a-table-column",{attrs:{title:"完成时间",dataIndex:"endTime",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e))])]}}])}),a("a-table-column",{key:"aaa",attrs:{title:"状态",dataIndex:"endTime",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e?a("span",{staticStyle:{color:"blue"}},[t._v("已办理")]):a("span",{staticStyle:{color:"#999999"}},[t._v("待处理")])]}}])})],1)],1)],1),a("a-tabs",{attrs:{type:"card"},on:{change:t.callback}},[a("a-tab-pane",{key:"1",attrs:{tab:"实时流程图"}},[a("a-card",[a("a-row",{staticStyle:{position:"relative"}},[a("img",{attrs:{src:t.imgUrl}}),t.loadingImg?a("a-spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1)],1),t.lcModa?a("a-tab-pane",{key:"2",attrs:{tab:"表单数据"}},[a("a-card",[a(t.lcModa.formComponent,{tag:"component",attrs:{disabled:t.lcModa.disabled,processData:t.lcModa.processData,isNew:t.lcModa.isNew,task:t.lcModa.isTask},on:{afterSubmit:t.afterSub,passTask:function(e){return t.pass(t.lcModa.processData)},backTask:function(e){return t.back(t.lcModa.processData)},close:function(e){t.lcModa.visible=!1,t.lcModa.disabled=!1}}})],1)],1):t._e()],1)],1)},r=[],i=a("b65a"),n=a("9ab6"),o={name:"historic_detail",mixins:[n["a"],i["a"]],props:{procInstId:{type:String,default:"",required:!0},lcModa:{type:Object,required:!1}},data:function(){return{url:{historicFlow:"/actTask/historicFlow/",getHighlightImg:"".concat(window._CONFIG["domianURL"],"/activiti/models/getHighlightImg/")},type:0,loading:!1,loadingImg:!1,data:[],id:"",imgUrl:"",backRoute:""}},created:function(){this.init()},watch:{procInstId:function(t,e){this.init()}},methods:{loadData:function(){},init:function(){this.id=this.procInstId,this.imgUrl=this.url.getHighlightImg+this.id+"?time="+new Date,this.getDataList()},getDataList:function(){var t=this;this.loading=!0,this.getAction(this.url.historicFlow+this.id).then((function(e){t.loading=!1,e.success?(t.data=e.result,e.result&&0!=e.result.length||t.$message.info("未找到该记录审批历史数据,历史数据可能已被删除")):t.$message.error(e.message)}))},handleTableChange:function(t,e,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=t},callback:function(t){},afterSub:function(){},pass:function(t){this.$emit("passTask",t)},back:function(t){this.$emit("backTask",t)}}},l=o,c=a("2877"),u=Object(c["a"])(l,s,r,!1,null,null,null);e["default"]=u.exports},"71b5":function(t,e,a){"use strict";var s=a("fa6b"),r=a.n(s);r.a},"88bc":function(t,e,a){(function(e){var a=1/0,s=9007199254740991,r="[object Arguments]",i="[object Function]",n="[object GeneratorFunction]",o="[object Symbol]",l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,u=l||c||Function("return this")();function d(t,e,a){switch(a.length){case 0:return t.call(e);case 1:return t.call(e,a[0]);case 2:return t.call(e,a[0],a[1]);case 3:return t.call(e,a[0],a[1],a[2])}return t.apply(e,a)}function f(t,e){var a=-1,s=t?t.length:0,r=Array(s);while(++a<s)r[a]=e(t[a],a,t);return r}function m(t,e){var a=-1,s=e.length,r=t.length;while(++a<s)t[r+a]=e[a];return t}var p=Object.prototype,h=p.hasOwnProperty,v=p.toString,b=u.Symbol,g=p.propertyIsEnumerable,y=b?b.isConcatSpreadable:void 0,_=Math.max;function k(t,e,a,s,r){var i=-1,n=t.length;a||(a=I),r||(r=[]);while(++i<n){var o=t[i];e>0&&a(o)?e>1?k(o,e-1,a,s,r):m(r,o):s||(r[r.length]=o)}return r}function w(t,e){return t=Object(t),S(t,e,(function(e,a){return a in t}))}function S(t,e,a){var s=-1,r=e.length,i={};while(++s<r){var n=e[s],o=t[n];a(o,n)&&(i[n]=o)}return i}function x(t,e){return e=_(void 0===e?t.length-1:e,0),function(){var a=arguments,s=-1,r=_(a.length-e,0),i=Array(r);while(++s<r)i[s]=a[e+s];s=-1;var n=Array(e+1);while(++s<e)n[s]=a[s];return n[e]=i,d(t,this,n)}}function I(t){return C(t)||D(t)||!!(y&&t&&t[y])}function M(t){if("string"==typeof t||L(t))return t;var e=t+"";return"0"==e&&1/t==-a?"-0":e}function D(t){return P(t)&&h.call(t,"callee")&&(!g.call(t,"callee")||v.call(t)==r)}var C=Array.isArray;function j(t){return null!=t&&F(t.length)&&!A(t)}function P(t){return $(t)&&j(t)}function A(t){var e=T(t)?v.call(t):"";return e==i||e==n}function F(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=s}function T(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function $(t){return!!t&&"object"==typeof t}function L(t){return"symbol"==typeof t||$(t)&&v.call(t)==o}var O=x((function(t,e){return null==t?{}:w(t,f(k(e,1),M))}));t.exports=O}).call(this,a("c8ba"))},"9ab6":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("ca00"),a("0fea");var s=a("2b0e"),r=a("9fb0"),i=a("d579"),n={components:{JEllipsis:i["default"]},data:function(){return{tokenHeader:{"X-Access-Token":s["default"].ls.get(r["a"])}}},computed:{allFormComponent:function(){return[{text:"示例表单",routeName:"@/views/activiti/form/demoForm",component:function(){return a.e("chunk-71797d8a").then(a.bind(null,"c4c0"))},businessTable:"test_demo"}]},historicDetail:function(){return function(){return a.e("chunk-2d0c06ae").then(a.bind(null,"4260"))}}},methods:{getFormComponent:function(t){return _.find(this.allFormComponent,{routeName:t})||{}},millsToTime:function(t){if(!t)return"";var e=t/1e3;if(e<60)return e.toFixed(0)+" 秒";var a=e/60;if(a<60)return a.toFixed(0)+" 分钟";var s=a/60;if(s<24)return s.toFixed(0)+" 小时";var r=s/24;if(r<30)return r.toFixed(0)+" 天";var i=r/30;if(i<12)return i.toFixed(0)+" 个月";var n=i/12;return n.toFixed(0)+" 年"},handleTableChange:function(t,e,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=t},getProcessDefByKey:function(t){var e=null,a=JSON.parse(window.sessionStorage.getItem("newestProcessList"));return a.forEach((function(a){a.processKey===t&&(e=a)})),e}}}},fa6b:function(t,e,a){}}]);