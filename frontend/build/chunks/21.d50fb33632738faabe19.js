(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{11:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(652),a=function(e,t){void 0===e&&(e=""),void 0===t&&(t="");var r=e?"error":"success",a=e||t;Object(n.b)(a,{type:r,closeButton:!1,hideProgressBar:!0})}},2142:function(e,t,r){"use strict";(function(e){var n,a=r(0),i=r.n(a),o=r(28),s=r(37),c=r(71),l=r.n(c),u=r(4),d=r.n(u),p=r(34),f=r(15),m=r(69),h=r.n(m),v=r(2),b=r(5),y=r(10),O=r(27),S=r(30),w=r.n(S),g=r(9),E=r.n(g),D=r(470),_=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),x=function(t,r,n,a){return new(n||(n=e))((function(e,i){function o(e){try{c(a.next(e))}catch(e){i(e)}}function s(e){try{c(a.throw(e))}catch(e){i(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(o,s)}c((a=a.apply(t,r||[])).next())}))},C=function(e,t){var r,n,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},L=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={columnData:[],inventoryList:[],salesOrderLineData:[]},t._addRowToTable=function(e){var r=t.props.salesOrderLineData,n=void 0===r?[]:r,a=l()(n,{tempId:e.tempId});a>-1?n[a]=e:n.push(e),t.props.setSalesOrderLineData(n)},t._onRemoveRow=function(e){return x(t,void 0,void 0,(function(){var t,r,n,a;return C(this,(function(i){switch(i.label){case 0:return t=this.props.salesOrderLineData,r=void 0===t?[]:t,(n=l()(r,{tempId:e.tempId}))>-1?(a=r[n].id,r.splice(n,1),[4,this.props.deleteSalesOrderLine({where:{id:a}})]):[3,2];case 1:i.sent().success&&this.props.setSalesOrderLineData(r),i.label=2;case 2:return[2]}}))}))},t._updateSalesOrderInTable=function(e,r){return function(n){var a=t.props.salesOrderLineData,i=void 0===a?[]:a,o=l()(i,{tempId:e});if(i[o]){var s=i[o];if("inventory"===r)s.inventory=n.value;else if("qty"===r){if(isNaN(n))return;s.qty=Math.abs(n)||0,i[o]=s}t.props.setSalesOrderLineData(i)}}},t}return _(t,e),t.prototype.componentDidMount=function(){var e=this.props.classes;this.setState({columnData:[{id:"inventory",label:"Inventory",classes:{tableHeaderCellWrapper:e.rowTabelHeader}},{id:"qty",label:"Quantity"}]})},t.prototype.componentDidUpdate=function(e,t){var r=this.props,n=r.inventories,a=(void 0===n?{}:n).data,i=void 0===a?{}:a,o=r.salesOrderLines,c=r.salesOrderData.isEditMode,l=void 0!==c&&c,u=r.salesOrderLineData,d=this.state.inventoryList;i.length&&!w()(i,e.inventories.data)&&(i.forEach((function(e){d.push({value:e.id,label:e.name})})),this.setState({inventoryList:d})),l&&!w()(o.data,e.salesOrderLines.data)&&(u=Object(s.filter)(u,(function(e){return e.id&&!e.inventory})),o.data.forEach((function(e){var t={id:e.id,inventory:e.inventory.id,qty:e.qty,tempId:h()()};u.push(t)})),this.props.setSalesOrderLineData(u))},t.prototype._renderSectionHeading=function(){var e=this,t=this.props,r=t.classes,n=t.theme,a=t.makeStepActive,o=t.unmarkedVisited,s=t.markedVisited,c=t.salesOrderData.isEditMode,l=void 0!==c&&c;return i.a.createElement(v.SectionHeader,{title:(l?"Update":"Create new")+" Sales Order Line",classes:{component:r.sectionHeader},renderLeftPart:function(){return i.a.createElement("div",{className:r.prevNextWrapper},i.a.createElement(v.Button,{title:"Prev",classes:{component:r.prevNextButton},applyBorderRadius:!0,compactMode:!0,buttonColor:n.palette.primary.color2,withoutBackground:!0,onClick:function(){a(0),o(0),s(1)}}),i.a.createElement(v.Button,{id:"submit-salesOrder",title:l?"Update":"Save",classes:{component:r.prevNextButton},applyBorderRadius:!0,compactMode:!0,buttonColor:n.palette.primary.color2,onClick:e.props.submitForm}))}})},t.prototype._addNewEmptyRowToTable=function(){this._addRowToTable({id:"",inventory:"",qty:0,tempId:h()()})},t.prototype._renderCell=function(e,t,r){var n=this.props.classes,a=this.state.inventoryList;return"inventory"===t.id?i.a.createElement("div",null,i.a.createElement(v.Dropdown,{placeholder:"Select  "+t.label,name:t.id,id:t.id,items:a.length?a:[{value:"",label:"No Inventory found. Please create Inventory first"}],value:String(e[t.id]),onChange:this._updateSalesOrderInTable(e.tempId,"inventory")})):"qty"===t.id?i.a.createElement("div",{className:n.tableInputCell},i.a.createElement(v.TextField,{id:"quantity-input-"+e.id,placeholder:"0",showClearIcon:!1,value:String(e[t.id]),isNumber:!0,classes:{textInputWrapper:n.tableInputWrapper},onChangeText:this._updateSalesOrderInTable(e.tempId,"qty")})):r},t.prototype._renderForm=function(){var e=this,t=this.props,r=t.classes,n=t.theme,a=t.salesOrderData.isEditMode,o=void 0!==a&&a,s=t.salesOrderLineData,c=void 0===s?[]:s;return i.a.createElement("div",null,i.a.createElement("div",{className:r.mainDivSalesOrderLine},i.a.createElement(d.a,{container:!0},i.a.createElement(d.a,{item:!0,xs:12,sm:12},i.a.createElement(v.Table,{columnData:this.state.columnData,data:c,sortable:!1,stripe:!1,showRemoveIcon:!0,cellRenderer:this._renderCell.bind(this),onRemoveClicked:this._onRemoveRow.bind(this)}),i.a.createElement("div",null),i.a.createElement("div",{className:r.addRowButton},i.a.createElement(v.Button,{id:"add-sales-order-line",title:"Add Sales Order Line",applyBorderRadius:!0,compactMode:!0,buttonColor:n.palette.primary.color2,width:300,onClick:this._addNewEmptyRowToTable.bind(this)}))))),i.a.createElement(d.a,{container:!0,spacing:0},i.a.createElement(d.a,{item:!0,xs:12,sm:12},i.a.createElement(v.Button,{title:o?"Back to SalesOrder list":"Cancel",onClick:function(){e.props.history.replace(b.a.SALES_ORDER())},buttonColor:n.palette.grey[200],classes:{text:r.cancelButtonText}}))))},t.prototype.render=function(){var e=this,t=this.props.classes;return i.a.createElement(v.ErrorBoundary,null,i.a.createElement(O.a,{onChange:function(){e.props.history.push(b.a.SALES_ORDER())}},i.a.createElement("div",{className:t.page},this._renderSectionHeading(),this._renderForm())))},t}(a.Component);t.a=Object(p.compose)(Object(o.withI18n)(),Object(y.withDeleteSalesOrderLine)(),Object(y.withInventories)((function(e){var t=!1;return"archived-inventories"===e.type&&(t=!0),{variables:{where:{isArchived:t},orderBy:"name_ASC"}}})),Object(y.withSalesOrderLines)((function(e,t){var r=!1;return"archived-saleOrderLines"===t&&(r=!0),{variables:{where:{salesOrder:{id:E()(e,(function(e){return e.match.params.id}))},isArchived:r},orderBy:"id_ASC"}}})),Object(f.b)((function(e){return{profile:e.profile}})),Object(v.withStyles)(D.a))(L)}).call(this,r(21))},2143:function(e,t,r){"use strict";(function(e){var n,a=r(0),i=r.n(a),o=r(4),s=r.n(o),c=r(28),l=r(15),u=r(39),d=r(13),p=r(34),f=r(2),m=r(5),h=r(9),v=r.n(h),b=r(30),y=r.n(b),O=r(27),S=r(10),w=r(470),g=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),E=function(t,r,n,a){return new(n||(n=e))((function(e,i){function o(e){try{c(a.next(e))}catch(e){i(e)}}function s(e){try{c(a.throw(e))}catch(e){i(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(o,s)}c((a=a.apply(t,r||[])).next())}))},D=function(e,t){var r,n,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},_=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={isEditMode:!1,customersList:[],isSubmitting:!1},t._submitForm=function(e,r){return E(t,void 0,void 0,(function(){var t,n,a,i,o,s;return D(this,(function(c){switch(c.label){case 0:return c.trys.push([0,5,,6]),t=this.props,n=t.initialData,a=t.makeStepActive,i=t.markedVisited,(o=this.state.isEditMode)?[3,2]:(s={transactionDate:e.transactionDate,customer:e.customer},[4,this.props.setSalesOrderData({data:s,isEditMode:o,actions:r})]);case 1:return c.sent(),i(0),a(1),[3,4];case 2:return s={id:n.id,transactionDate:e.transactionDate,customer:e.customer},[4,this.props.setSalesOrderData({data:s,isEditMode:o,actions:r})];case 3:c.sent(),a(1),i(0),c.label=4;case 4:return[3,6];case 5:return c.sent(),r.setSubmitting(!1),[3,6];case 6:return[2]}}))}))},t}return g(t,e),t.prototype.componentDidMount=function(){this.props.actions.updateHeaderTitle("SalesOrder"),this.setState({isEditMode:Boolean(v()(this.props,(function(e){return e.initialData})))})},t.prototype.componentDidUpdate=function(e){var t=this.props,r=t.customers.data,n=t.initialData,a=t.salesOrderData,i=this.state.customersList,o=v()(a.data,(function(e){return e.id}));if(r.length&&!y()(r,e.customers.data)&&(r.forEach((function(e){i.push({value:e.id,label:e.name})})),this.setState({customersList:i})),!y()(n,e.initialData)){if(!a||!y()(o,n.id)){var s={id:n.id,transactionDate:n.transactionDate,customer:n.customer.id};this.props.setSalesOrderData({data:s,isEditMode:Boolean(v()(this.props,(function(e){return e.initialData})))})}this.setState({isEditMode:Boolean(v()(this.props,(function(e){return e.initialData})))})}},t.prototype._renderSalesOrderForm=function(e){var t=e.values,r=e.errors,n=e.touched,a=e.setFieldValue,o=e.setFieldTouched,c="transactionDate",l="customer",u=this.props.classes,d=this.state.customersList;return i.a.createElement(f.ErrorBoundary,null,i.a.createElement("div",{className:u.mainDivSalesOrder},i.a.createElement(s.a,{container:!0,spacing:16},i.a.createElement(s.a,{item:!0,xs:12},i.a.createElement(f.DatePicker,{label:"Transaction Date",onDateChange:function(e){return a(c,e)},value:t[c]})),i.a.createElement(s.a,{item:!0,xs:12},i.a.createElement(f.Dropdown,{label:"Customer",placeholder:"Select Customer",name:l,id:l,items:d.length?d:[{value:"",label:"No Customer found. Please create new customer first"}],value:t[l],onChange:function(e){return a(l,e.value)},onClose:function(){return o(l)},error:n[l]&&r[l]})))))},t.prototype._renderForm=function(){var e=this,t=this.props,r=t.classes,n=t.theme,a=t.salesOrderData.data,o=void 0===a?{}:a,c=this.state.isEditMode;return i.a.createElement(u.Formik,{initialValues:{transactionDate:v()(o,(function(e){return e.transactionDate}))||new Date,customer:v()(o,(function(e){return e.customer}))||""},enableReinitialize:!0,validationSchema:d.object().shape({transactionDate:d.string().required("Transaction Date is required"),customer:d.string().required("Customer is required")}),onSubmit:this._submitForm},(function(t){var a=t.values,o=t.errors,l=t.touched,u=t.handleSubmit,d=t.setFieldValue,p=t.setFieldTouched,h=t.isSubmitting;return i.a.createElement("form",{className:r.form,onSubmit:u},i.a.createElement(f.SectionHeader,{title:(c?"Update":"Create new")+" SalesOrder",classes:{component:r.sectionHeader},renderLeftPart:function(){return i.a.createElement("div",{className:r.prevNextWrapper},i.a.createElement(f.Button,{loading:h,title:"Next",id:"next-button",classes:{component:r.prevNextButton},applyBorderRadius:!0,compactMode:!0,buttonColor:"#29a9db",type:"submit"}))}}),i.a.createElement(s.a,{container:!0,classes:{container:r.formFields}},i.a.createElement(s.a,{item:!0,xs:12,sm:6},e._renderSalesOrderForm({values:a,errors:o,touched:l,setFieldValue:d,setFieldTouched:p}))),i.a.createElement(s.a,{container:!0,spacing:0},i.a.createElement(s.a,{item:!0,xs:12,sm:12},i.a.createElement(f.Button,{title:c?"Back to SalesOrder list":"Cancel",onClick:function(){e.props.history.replace(m.a.SALES_ORDER())},buttonColor:n.palette.grey[200],classes:{text:r.cancelButtonText}}))))}))},t.prototype.render=function(){var e=this,t=this.props.classes;return i.a.createElement(f.ErrorBoundary,null,i.a.createElement(O.a,{onChange:function(){e.props.history.push(m.a.SALES_ORDER())}},i.a.createElement("div",{className:t.page},this._renderForm())))},t}(a.Component);t.a=Object(p.compose)(Object(c.withI18n)(),Object(S.withCreateSalesOrder)(),Object(S.withUpdateSalesOrder)(),Object(S.withCustomers)((function(e){e.profile;var t=!1;return"archived-customers"===e.type&&(t=!0),{variables:{where:{isArchived:t},orderBy:"name_ASC"}}})),Object(S.withSalesOrder)((function(e){return{id:v()(e,(function(e){return e.match.params.id}))}}),(function(e){var t=e.data;return{initialData:v()(t,(function(e){return e.salesOrder}))||{}}})),Object(l.b)((function(e){return{profile:e.profile}})),Object(f.withStyles)(w.a))(_)}).call(this,r(21))},2306:function(e,t,r){"use strict";r.r(t),function(e){var n,a=r(0),i=r(2),o=r(5),s=r(71),c=r.n(s),l=r(69),u=r.n(l),d=r(11),p=r(10),f=r(34),m=r(15),h=r(37),v=r(2142),b=r(2143),y=r(470),O=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),S=function(){return(S=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},w=function(t,r,n,a){return new(n||(n=e))((function(e,i){function o(e){try{c(a.next(e))}catch(e){i(e)}}function s(e){try{c(a.throw(e))}catch(e){i(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(o,s)}c((a=a.apply(t,r||[])).next())}))},g=function(e,t){var r,n,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},E=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),a=0;for(t=0;t<r;t++)for(var i=arguments[t],o=0,s=i.length;o<s;o++,a++)n[a]=i[o];return n},D=function(e){function t(t){var r=e.call(this,t)||this;return r._setSalesOrderData=function(e){return r.setState({salesOrderData:e}),!0},r._setSalesOrderLineData=function(e){r.setState({salesOrderLineData:E(e)})},r._makeStepActive=function(e){var t=r.state.wizardStep,n=c()(t,{active:!0});n>-1&&(t[n]=S(S({},t[n]),{active:!1}),t[e]=S(S({},t[e]),{active:!0}),r.setState({wizardStep:t,activePage:e}))},r._markedVisited=function(e){var t=r.state,n=t.wizardStep,a=t.visitedPages,i=void 0===a?[]:a;n[e]=S(S({},n[e]),{visited:!0}),i.includes(e)||i.push(e),r.setState({wizardStep:n,visitedPages:i})},r._unmarkedVisited=function(e){var t=r.state.wizardStep;t[e]=S(S({},t[e]),{visited:!1}),r.setState({wizardStep:t})},r._onStepClick=function(e,t){r._makeStepActive(t)},r.renderWizardStep=function(){var e=r.props.classes,t=r.state||{},n=t.salesOrderData,i=void 0===n?{}:n,o=t.activePage,s=void 0===o?0:o,c=t.salesOrderLineData,l=void 0===c?{}:c,u=t.visitedPages,d=void 0===u?[]:u;return[{label:"Sales Order",active:0===s,visited:d.includes(0)&&0!==s,component:a.createElement(b.a,S({},r.props,{classes:e,makeStepActive:r._makeStepActive,markedVisited:r._markedVisited,setSalesOrderData:r._setSalesOrderData,salesOrderData:i}))},{label:"Sales OrderLine",active:1===s,visited:d.includes(1)&&1!==s,component:a.createElement(v.a,S({},r.props,{classes:e,makeStepActive:r._makeStepActive,markedVisited:r._markedVisited,unmarkedVisited:r._unmarkedVisited,setSalesOrderLineData:r._setSalesOrderLineData,salesOrderData:i,salesOrderLineData:l,submitForm:r._submitForm}))}]},r._submitForm=function(){return w(r,void 0,void 0,(function(){var e,t,r,n,a,i,s,c,l,u,p,f,m,v,b,y,O,S,E,D=this;return g(this,(function(_){switch(_.label){case 0:return e=this.state,t=e.salesOrderData,r=t.data,n=void 0===r?{}:r,a=t.isEditMode,i=void 0!==a&&a,s=t.actions,c=e.salesOrderLineData,l=void 0===c?{}:c,u=this.props.profile,p=(void 0===u?{}:u).selectedCompany,f=(void 0===p?{}:p).currency,m=void 0===f?"USD":f,v={transactionDate:n.transactionDate,customer:{connect:{id:n.customer}},currency:m},b=Object(h.filter)(l,(function(e){return e.qty>=0&&e.inventory})),y=0,i?[3,2]:[4,this.props.createSalesOrder({data:v})];case 1:return(O=_.sent()).success?(b.forEach((function(e){return w(D,void 0,void 0,(function(){var t;return g(this,(function(r){switch(r.label){case 0:return t={salesOrder:{connect:{id:O.result.id}},inventory:{connect:{id:e.inventory}},qty:e.qty},[4,this.props.createSalesOrderLine({data:t})];case 1:return r.sent().success||0!==y||(y=1,O.error.map((function(e){return Object(d.a)(e)})),s.setSubmitting(!1)),[2]}}))}))})),0===y&&(Object(d.a)(null,"SalesOrder created successfully"),s.setSubmitting(!1),this.props.history.push(o.a.SALES_ORDER()))):(O.error.map((function(e){return Object(d.a)(e)})),s.setSubmitting(!1)),[3,4];case 2:return[4,this.props.updateSalesOrder({data:v,where:{id:n.id}})];case 3:(S=_.sent()).success?(E=null,b.forEach((function(e){return w(D,void 0,void 0,(function(){var t;return g(this,(function(r){switch(r.label){case 0:return t={},e.id?(t={salesOrder:{connect:{id:S.result.id}},inventory:{connect:{id:e.inventory}},qty:e.qty},[4,this.props.updateSalesOrderLine({data:t,where:{id:e.id}})]):[3,2];case 1:return E=r.sent(),[3,4];case 2:return t={salesOrder:{connect:{id:S.result.id}},inventory:{connect:{id:e.inventory}},qty:e.qty},[4,this.props.createSalesOrderLine({data:t})];case 3:E=r.sent(),r.label=4;case 4:return Object(h.get)(E,"success")||0!==y||(y=1,S.error.map((function(e){return Object(d.a)(e)})),s.setSubmitting(!1)),[2]}}))}))})),0===y&&(Object(d.a)(null,"SalesOrder updated successfully"),s.setSubmitting(!1),this.props.history.push(o.a.SALES_ORDER()))):(S.error.map((function(e){return Object(d.a)(e)})),s.setSubmitting(!1)),_.label=4;case 4:return[2]}}))}))},r.state={salesOrderData:{},wizardStep:r.renderWizardStep(),activePage:0,visitedPages:[],salesOrderLineData:[{id:"",inventory:"",qty:0,tempId:u()()}]},r.renderWizardStep=r.renderWizardStep.bind(r),r}return O(t,e),t.prototype.render=function(){var e=this.props.classes;return a.createElement(a.Fragment,null,a.createElement("div",{className:e.salesOrderWizardPage},a.createElement(i.WizardSteps,{steps:this.renderWizardStep(),onStepClick:this._onStepClick})))},t}(a.Component);t.default=Object(f.compose)(Object(p.withCreateSalesOrder)(),Object(p.withUpdateSalesOrder)(),Object(p.withCreateSalesOrderLine)(),Object(p.withUpdateSalesOrderLine)(),Object(m.b)((function(e){return{profile:e.profile}})),Object(i.withStyles)(y.a))(D)}.call(this,r(21))},27:function(e,t,r){"use strict";var n=r(0),a=r(18),i=r(15),o=r(317),s=r(9),c=r.n(s);t.a=Object(a.compose)(Object(i.b)((function(e){return{selectedCompany:c()(e,(function(e){return e.profile.selectedCompany}))}})))((function(e){var t=e.selectedCompany,r=e.onChange,a=e.children;return Object(o.a)((function(){r(t)}),[t]),n.createElement(n.Fragment,null,a)}))},317:function(e,t,r){"use strict";var n=r(30),a=r.n(n),i=r(0);function o(e){var t,r,n=Object(i.useRef)();return t=e,r=n.current,a()(t,r)||(n.current=e),n.current}t.a=function(e,t){Object(i.useEffect)(e,o(t))}},470:function(e,t,r){"use strict";t.a=function(e){return{page:{flex:1,display:"flex",flexDirection:"column",position:"relative"},content:{flex:1,padding:"40px 20px"},form:{flex:1,display:"flex",flexDirection:"column"},formFields:{flex:1,padding:[[0,20]],paddingBottom:20},formHeading:{marginTop:35,marginBottom:15},cancelButtonText:{color:e.palette.primary.color3},primaryContactCheck:{marginTop:10},sectionHeader:{padding:[[20,20]]},component:{},salesOrderWizardPage:{flex:1,display:"flex",position:"relative",flexDirection:"column",paddingTop:"30px"},salesOrderLineTabelHeader:{width:"50%"},tableInputCell:{borderLeft:"1px solid "+e.palette.grey[200],minHeight:50,display:"flex",alignItems:"center",paddingLeft:0,paddingRight:25},tableInputWrapper:{borderRadius:0,border:"0px","&.is-filled":{backgroundColor:"white"}},prevNextWrapper:{display:"flex",alignItems:"center",justifyContent:"space-between"},prevNextButton:{width:230,margin:"0px 10px"},mainDivSalesOrder:{height:"calc(100vh - 474px)",overflowY:"hidden",padding:"10px 20px 10px 20px"},mainDivSalesOrderLine:{height:"calc(100vh - 454px)",overflowY:"auto",padding:"10px 20px 10px 20px"},addRowButton:{marginTop:20},rowTabelHeader:{width:"50%"}}}}}]);