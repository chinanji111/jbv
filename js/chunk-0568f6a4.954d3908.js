(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0568f6a4","chunk-2d0cfe94"],{"1be7":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[this.departId?[a("a-spin",{attrs:{spinning:e.loading}},[a("a-form",[a("a-form-item",{attrs:{label:"所拥有的权限"}},[a("a-tree",{staticStyle:{height:"500px",overflow:"auto"},attrs:{checkable:"",checkedKeys:e.checkedKeys,treeData:e.treeData,selectedKeys:e.selectedKeys,expandedKeys:e.expandedKeysss,checkStrictly:e.checkStrictly},on:{check:e.onCheck,expand:e.onExpand,select:e.onTreeNodeSelect},scopedSlots:e._u([{key:"hasDatarule",fn:function(t){var s=t.slotTitle,n=t.ruleFlag;return a("span",{},[e._v("\n              "+e._s(s)+"\n              "),n?a("a-icon",{staticStyle:{"margin-left":"5px",color:"red"},attrs:{type:"align-left"}}):e._e()],1)}}],null,!1,3403517078)})],1)],1)],1),a("div",{staticClass:"anty-form-btn"},[a("a-dropdown",{staticStyle:{float:"left"},attrs:{trigger:["click"],placement:"topCenter"}},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"3",on:{click:e.checkALL}},[e._v("全部勾选")]),a("a-menu-item",{key:"4",on:{click:e.cancelCheckALL}},[e._v("取消全选")]),a("a-menu-item",{key:"5",on:{click:e.expandAll}},[e._v("展开所有")]),a("a-menu-item",{key:"6",on:{click:e.closeAll}},[e._v("合并所有")])],1),a("a-button",[e._v("\n          树操作 "),a("a-icon",{attrs:{type:"up"}})],1)],1),a("a-button",{staticStyle:{float:"right"},attrs:{type:"primary",htmlType:"button",icon:"form"},on:{click:e.handleSubmit}},[e._v("保存")])],1)]:a("a-card",{staticStyle:{height:"200px"},attrs:{bordered:!1}},[a("a-empty",[a("span",{attrs:{slot:"description"},slot:"description"},[e._v(" 请先选择一个部门! ")])])],1),a("depart-datarule-modal",{ref:"datarule"})],2)},n=[],r=a("4ec3"),i=a("6675");function c(e){return d(e)||o(e)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function d(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}var u={name:"DepartAuthModal",components:{DepartDataruleModal:i["default"]},data:function(){return{departId:"",treeData:[],defaultCheckedKeys:[],checkedKeys:[],halfCheckedKeys:[],expandedKeysss:[],allTreeKeys:[],autoExpandParent:!0,checkStrictly:!1,title:"部门权限配置",visible:!1,loading:!1,selectedKeys:[]}},methods:{onTreeNodeSelect:function(e){e&&e.length>0&&(this.selectedKeys=e),this.$refs.datarule.show(this.selectedKeys[0],this.departId)},onCheck:function(e,t){var a=t.halfCheckedKeys;this.checkedKeys=e,this.halfCheckedKeys=a},show:function(e){this.departId=e,this.loadData()},close:function(){this.reset(),this.$emit("close"),this.visible=!1},onExpand:function(e){this.expandedKeysss=e,this.autoExpandParent=!1},reset:function(){this.expandedKeysss=[],this.checkedKeys=[],this.defaultCheckedKeys=[],this.loading=!1},expandAll:function(){this.expandedKeysss=this.allTreeKeys},closeAll:function(){this.expandedKeysss=[]},checkALL:function(){this.checkedKeys=this.allTreeKeys},cancelCheckALL:function(){this.checkedKeys=[]},handleCancel:function(){this.close()},handleSubmit:function(){var e=this;e.departId||this.$message.warning("请点击选择一个部门!");var t=[].concat(c(e.checkedKeys),c(e.halfCheckedKeys)),a=t.join(","),s={departId:e.departId,permissionIds:a,lastpermissionIds:e.defaultCheckedKeys.join(",")};e.loading=!0,Object(r["Q"])(s).then((function(t){t.success?(e.$message.success(t.message),e.loading=!1,e.loadData()):(e.$message.error(t.message),e.loading=!1)}))},convertTreeListToKeyLeafPairs:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=!0,s=!1,n=void 0;try{for(var r,i=e[Symbol.iterator]();!(a=(r=i.next()).done);a=!0){var c=r.value,l=c.key,o=c.isLeaf,d=c.children;t.push({key:l,isLeaf:o}),d&&d.length>0&&this.convertTreeListToKeyLeafPairs(d,t)}}catch(u){s=!0,n=u}finally{try{a||null==i.return||i.return()}finally{if(s)throw n}}return t},emptyCurrForm:function(){this.form.resetFields()},loadData:function(){var e=this;this.loading=!0,Object(r["M"])().then((function(t){e.treeData=t.result.treeList,e.allTreeKeys=t.result.ids;var a=e.convertTreeListToKeyLeafPairs(e.treeData);Object(r["C"])({departId:e.departId}).then((function(t){var s=c(t.result).filter((function(e){var t=a.filter((function(t){return t.key===e}))[0];return t&&t.isLeaf})),n=c(t.result).filter((function(e){var t=a.filter((function(t){return t.key===e}))[0];return t&&!t.isLeaf}));e.checkedKeys=c(s),e.halfCheckedKeys=c(n),e.defaultCheckedKeys=[].concat(c(n),c(s)),e.expandedKeysss=e.allTreeKeys,e.loading=!1}))}))}}},h=u,f=a("2877"),y=Object(f["a"])(h,s,n,!1,null,"a4e89130",null);t["default"]=y.exports},6675:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"数据规则/按钮权限配置",width:"365",closable:!1,visible:e.visible},on:{close:e.onClose}},[a("a-tabs",{attrs:{defaultActiveKey:"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"数据规则"}},[e.dataruleList.length>0?a("a-checkbox-group",{model:{value:e.dataruleChecked,callback:function(t){e.dataruleChecked=t},expression:"dataruleChecked"}},[a("a-row",[e._l(e.dataruleList,(function(t,s){return a("a-col",{key:"dr"+s,attrs:{span:24}},[a("a-checkbox",{attrs:{value:t.id}},[e._v(e._s(t.ruleName))])],1)})),a("a-col",{attrs:{span:24}},[a("div",{staticStyle:{width:"100%","margin-top":"15px"}},[a("a-button",{attrs:{type:"primary",size:"small",icon:"save"},on:{click:e.saveDataruleForRole}},[e._v("点击保存")])],1)])],2)],1):a("div",[a("h3",[e._v("无配置信息!")])])],1)],1)],1)},n=[],r=a("290c"),i=a("da05"),c=a("0fea"),l={name:"DepartDataruleModal",components:{ACol:i["b"],ARow:r["a"]},data:function(){return{functionId:"",departId:"",visible:!1,tabList:[{key:"1",tab:"数据规则"},{key:"2",tab:"按钮权限"}],activeTabKey:"1",url:{datarule:"/sys/sysDepartPermission/datarule"},dataruleList:[],dataruleChecked:[]}},methods:{loadData:function(){var e=this;Object(c["d"])("".concat(this.url.datarule,"/").concat(this.functionId,"/").concat(this.departId)).then((function(t){if(t.success){e.dataruleList=t.result.datarule;var a=t.result.drChecked;a&&(e.dataruleChecked=a.split(","))}}))},saveDataruleForRole:function(){var e=this;this.dataruleChecked&&0!=this.dataruleChecked.length||this.$message.warning("请注意，现未勾选任何数据权限!");var t={permissionId:this.functionId,departId:this.departId,dataRuleIds:this.dataruleChecked.join(",")};Object(c["j"])(this.url.datarule,t).then((function(t){t.success?e.$message.success(t.message):e.$message.error(t.message)}))},show:function(e,t){this.onReset(),this.functionId=e,this.departId=t,this.visible=!0,this.loadData()},onClose:function(){this.visible=!1,this.onReset()},onTabChange:function(e){this.activeTabKey=e},onReset:function(){this.functionId="",this.departId="",this.dataruleList=[],this.dataruleChecked=[]}}},o=l,d=a("2877"),u=Object(d["a"])(o,s,n,!1,null,"47ca2114",null);t["default"]=u.exports}}]);