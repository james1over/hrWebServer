(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53f53a0e"],{"0ccb":function(e,t,n){var r=n("50c4"),i=n("1148"),a=n("1d80"),s=Math.ceil,o=function(e){return function(t,n,o){var c,l,u=String(a(t)),d=u.length,f=void 0===o?" ":String(o),m=r(n);return m<=d||""==f?u:(c=m-d,l=i.call(f,s(c/f.length)),l.length>c&&(l=l.slice(0,c)),e?u+l:l+u)}};e.exports={start:o(!1),end:o(!0)}},"0feb":function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return c}));var r=n("b775"),i=function(){return Object(r["a"])({url:"/sys/permission",method:"get"})},a=function(e){return Object(r["a"])({url:"/sys/permission",method:"post",data:e})},s=function(e){return Object(r["a"])({url:"/sys/permission/".concat(e.id),method:"put",data:e})},o=function(e){return Object(r["a"])({url:"/sys/permission/".concat(e),method:"get"})},c=function(e){return Object(r["a"])({url:"/sys/permission/".concat(e),method:"delete"})}},1276:function(e,t,n){"use strict";var r=n("d784"),i=n("44e7"),a=n("825a"),s=n("1d80"),o=n("4840"),c=n("8aa5"),l=n("50c4"),u=n("14c3"),d=n("9263"),f=n("d039"),m=[].push,p=Math.min,h=4294967295,b=!f((function(){return!RegExp(h,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(s(this)),a=void 0===n?h:n>>>0;if(0===a)return[];if(void 0===e)return[r];if(!i(e))return t.call(r,e,a);var o,c,l,u=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,b=new RegExp(e.source,f+"g");while(o=d.call(b,r)){if(c=b.lastIndex,c>p&&(u.push(r.slice(p,o.index)),o.length>1&&o.index<r.length&&m.apply(u,o.slice(1)),l=o[0].length,p=c,u.length>=a))break;b.lastIndex===o.index&&b.lastIndex++}return p===r.length?!l&&b.test("")||u.push(""):u.push(r.slice(p)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var i=s(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,i,n):r.call(String(i),t,n)},function(e,i){var s=n(r,e,this,i,r!==t);if(s.done)return s.value;var d=a(e),f=String(this),m=o(d,RegExp),g=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(b?"y":"g"),x=new m(b?d:"^(?:"+d.source+")",v),w=void 0===i?h:i>>>0;if(0===w)return[];if(0===f.length)return null===u(x,f)?[f]:[];var D=0,y=0,k=[];while(y<f.length){x.lastIndex=b?y:0;var O,j=u(x,b?f:f.slice(y));if(null===j||(O=p(l(x.lastIndex+(b?0:y)),f.length))===D)y=c(f,y,g);else{if(k.push(f.slice(D,y)),k.length===w)return k;for(var P=1;P<=j.length-1;P++)if(k.push(j[P]),k.length===w)return k;y=D=O}}return k.push(f.slice(D)),k}]}),!b)},"4d90":function(e,t,n){"use strict";var r=n("23e7"),i=n("0ccb").start,a=n("9a0c");r({target:"String",proto:!0,forced:a},{padStart:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"5d10":function(e,t,n){"use strict";n("9173")},9173:function(e,t,n){},"9a0c":function(e,t,n){var r=n("342f");e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},c23a:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dashboard-container"},[n("div",{staticClass:"app-container"},[n("PageTools",[n("el-button",{attrs:{slot:"btn",type:"primary",size:"small"},on:{click:function(t){return e.addPermission(1,"0")}},slot:"btn"},[e._v("添加权限")])],1),n("el-table",{attrs:{border:"",data:e.List,"row-key":"id"}},[n("el-table-column",{attrs:{align:"center",label:"名称",prop:"name"}}),n("el-table-column",{attrs:{align:"center",label:"标识",prop:"code"}}),n("el-table-column",{attrs:{align:"center",label:"描述",prop:"description"}}),n("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[1===r.type?n("el-button",{attrs:{type:"text"},on:{click:function(t){return e.addPermission(2,r.id)}}},[e._v("添加")]):e._e(),n("el-button",{attrs:{type:"text"},on:{click:function(t){return e.editPermission(r.id)}}},[e._v("编辑")]),n("el-button",{attrs:{type:"text"},on:{click:function(t){return e.delPermission(r.id)}}},[e._v("删除")])]}}])})],1)],1),n("el-dialog",{attrs:{title:e.showText,visible:e.showDialog},on:{close:e.btnCancel}},[n("el-form",{ref:"permission",attrs:{"label-width":"120px",model:e.formData,rules:e.rules}},[n("el-form-item",{attrs:{label:"权限名称",prop:"name"}},[n("el-input",{staticStyle:{width:"90%"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),n("el-form-item",{attrs:{label:"权限标识",prop:"code"}},[n("el-input",{staticStyle:{width:"90%"},model:{value:e.formData.code,callback:function(t){e.$set(e.formData,"code",t)},expression:"formData.code"}})],1),n("el-form-item",{attrs:{label:"权限描述"}},[n("el-input",{staticStyle:{width:"90%"},model:{value:e.formData.description,callback:function(t){e.$set(e.formData,"description",t)},expression:"formData.description"}})],1),n("el-form-item",{attrs:{label:"开启"}},[n("el-switch",{attrs:{"active-color":"#13ce66","active-value":"1","inactive-value":"0"},model:{value:e.formData.enVisible,callback:function(t){e.$set(e.formData,"enVisible",t)},expression:"formData.enVisible"}})],1)],1),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{staticClass:"newCol",attrs:{span:6}},[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.btnOK}},[e._v("确定")]),n("el-button",{attrs:{size:"small"},on:{click:e.btnCancel}},[e._v("取消")])],1)],1)],1)],1)},i=[],a=n("1da1"),s=(n("96cf"),n("0feb")),o=n("ed08"),c={data:function(){return{List:[],showDialog:!1,formData:{name:"",code:"",description:"",type:"",pid:"",enVisible:"0"},rules:{name:[{required:!0,message:"权限名称不能为空",trigger:"blur"}],code:[{required:!0,message:"权限标识不能为空",trigger:"blur"}]}}},created:function(){this.getPermissionList()},methods:{getPermissionList:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=o["a"],t.next=3,Object(s["c"])();case 3:t.t1=t.sent,e.List=(0,t.t0)(t.t1,"0");case 5:case"end":return t.stop()}}),t)})))()},delPermission:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$confirm("确定删除该权限点吗？","提示");case 3:return n.next=5,Object(s["b"])(e);case 5:t.getPermissionList(),t.$message.success("删除成功！"),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](0),t.$message.error("请稍后重试");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()},addPermission:function(e,t){this.formData.type=e,this.formData.pid=t,this.showDialog=!0},btnOK:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.permission.validate();case 2:if(!e.formData.id){t.next=7;break}return t.next=5,Object(s["e"])(e.formData);case 5:t.next=9;break;case 7:return t.next=9,Object(s["a"])(e.formData);case 9:e.getPermissionList(),e.$message.success(e.pointText),e.showDialog=!1;case 12:case"end":return t.stop()}}),t)})))()},btnCancel:function(){this.formData={name:"",code:"",description:"",type:"",pid:"",enVisible:"0"},this.$refs.permission.resetFields(),this.showDialog=!1},editPermission:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(s["d"])(e);case 2:t.formData=n.sent,t.showDialog=!0;case 4:case"end":return n.stop()}}),n)})))()}},computed:{showText:function(){return this.formData.id?"编辑":"新增"},pointText:function(){return this.formData.id?"编辑成功":"添加成功"}}},l=c,u=(n("5d10"),n("2877")),d=Object(u["a"])(l,r,i,!1,null,"5949657a",null);t["default"]=d.exports},ed08:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("53ca"),n("ac1f"),n("00b4"),n("5319"),n("4d63"),n("2c3e"),n("25f0"),n("d3b7"),n("4d90"),n("1276"),n("159b");function r(e,t){var n=[];return e.forEach((function(i){if(i.pid===t){var a=r(e,i.id);a.length&&(i.children=a),n.push(i)}})),n}}}]);