(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1008:function(e,t,n){"use strict";(function(e){var r,o=n(0),i=n.n(o),a=n(18),c=n(3),s=n.n(c),l=n(2),u=n(10),p=n(11),d=n(25),f=n(319),h=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),v=function(){return(v=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},m=function(t,n,r,o){return new(r||(r=e))((function(e,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function c(e){try{s(o.throw(e))}catch(e){i(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,c)}s((o=o.apply(t,n||[])).next())}))},b=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},y=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={emails:{to:[],bcc:[],cc:[]},submitting:!1,includeTimesheet:!1,includeTimesheetAttachments:!1},t._sendInvoiceNotificationEmail=function(){return m(t,void 0,void 0,(function(){var e,t,n,r,o,i,a;return b(this,(function(c){switch(c.label){case 0:return c.trys.push([0,2,3,4]),e=this.props.invoice,t=this.state,n=t.emails,r=t.includeTimesheet,o=t.includeTimesheetAttachments,this.setState({submitting:!0}),[4,this.props.invoiceNotify({data:{invoiceId:e.id,to:(n.to||[]).map((function(e){return e.email})),bcc:(n.bcc||[]).map((function(e){return e.email})),cc:(n.cc||[]).map((function(e){return e.email})),opts:{includeTimesheet:r,includeTimesheetAttachments:o}}})];case 1:return(i=c.sent()).success?(Object(p.a)(null,"Email sent"),this.props.onClose(),this.setState({includeTimesheet:!1,includeTimesheetAttachments:!1})):i.error.map((function(e){return Object(p.a)(e)})),[3,4];case 2:return a=c.sent(),Object(p.a)(a.toString()),[3,4];case 3:return this.setState({submitting:!1}),[7];case 4:return[2]}}))}))},t}return h(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.onClose,r=t.visible,o=t.classes,a=t.invoice,c=this.state,u=c.emails,p=c.submitting,f=c.includeTimesheet,h=c.includeTimesheetAttachments,m=u.to.length<=0||p;return i.a.createElement(l.Modal,{visible:r,onClose:n,showCloseButton:!0,title:"Send Invoice Email",description:i.a.createElement("div",null,i.a.createElement("div",null,"Please add emails"),i.a.createElement(l.EmailInputFields,{onEmailChange:function(t){e.setState((function(e){return{emails:v(v({},e.emails),t)}}))}}),(s()(a,"type")===d.c.TIMESHEET||s()(a,"type")===d.c.TIMESHEET_WITH_DETAILS)&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:o.includeCheckboxWrapper},i.a.createElement(l.Checkbox,{label:"Include Timesheets",value:f,onChange:function(t){e.setState({includeTimesheet:t}),t||e.setState({includeTimesheetAttachments:!1})}})),i.a.createElement("div",{className:o.includeCheckboxWrapper},i.a.createElement(l.Checkbox,{label:"Include Timesheets Attachments",value:h,onChange:function(t){e.setState({includeTimesheetAttachments:t})}})))),buttons:[{title:p?"Submitting...":"Submit",onClick:this._sendInvoiceNotificationEmail,isDisabled:m,loading:p}]})},t.defaultProps={onClose:function(){},invoice:{}},t}(o.Component);t.a=Object(a.compose)(Object(l.withStyles)(f.b),Object(u.withInvoiceNotify)())(y)}).call(this,n(21))},11:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(652),o=function(e,t){void 0===e&&(e=""),void 0===t&&(t="");var n=e?"error":"success",o=e||t;Object(r.b)(o,{type:n,closeButton:!1,hideProgressBar:!0})}},2295:function(e,t,n){"use strict";n.r(t);var r,o=n(0),i=n.n(o),a=n(101),c=n(7),s=n.n(c),l=n(4),u=n.n(l),p=n(127),d=n(31),f=n.n(d),h=n(205),v=n.n(h),m=n(35),b=n.n(m),y=n(2),E=n(5),I=n(462),g=n(319),T=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),_=function(){return(_=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},O=function(e){function t(t){var n=e.call(this,t)||this;return n._onRequestSort=function(e){var t=n.state.headerData,r=v()(t),o=b()(r,{sorted:!0});o&&e.id!==o.id&&(o.sorted=!1,o.order="asc");var i=b()(r,{id:e.id}),a="asc";i.sorted=!0,"asc"===i.order&&(a="desc"),i.order=a,n.setState({headerData:r}),n.props.onRequestSort(e,a)},n._renderCell=function(e,t,r){var o=n.props,c=o.classes,l=o.markInvoiceAsPaid,u=o.showInvoiceEmailModal;return"hash"===t.id?i.a.createElement("div",{className:c.borderCell},i.a.createElement(a.a,{to:E.a.PREVIEW_INVOICE({id:e.id}),target:"_blank",className:c.invoiceLink},e[t.id])):"total"===t.id?i.a.createElement("div",{className:c.borderCell},e[t.id]):"balance"===t.id?i.a.createElement("div",{className:s()(c.borderCell,c.balanceCell)},e[t.id],i.a.createElement("div",{className:c.iconsWrapper},i.a.createElement(p.Tooltip,{title:"Email invoice",animation:"fade",position:"left",arrow:!0,arrowType:"round",trigger:"mouseenter focus"},i.a.createElement("span",{className:c.dollarIcon,style:{marginRight:10},onClick:function(){u(e)}},i.a.createElement("i",{className:"fa fa-envelope-o"}))),i.a.createElement(p.Tooltip,{title:"Mark as paid",animation:"fade",position:"left",arrow:!0,arrowType:"round",trigger:"mouseenter focus"},i.a.createElement("span",{"data-test":"invoice-paid-button",className:c.dollarIcon,onClick:function(){l(e)}},i.a.createElement("i",{className:"fa fa-usd"}))))):r},n.state={headerData:[{id:"hash",label:"#"},{id:"customer",label:"Customer"},{id:"date",label:"Date",sorted:!0,order:"desc"},{id:"due",label:"Due"},{id:"total",label:"Total"},{id:"balance",label:"Balance"}]},n}return T(t,e),t.prototype._renderSectionHeading=function(){var e=this.props,t=e.history,n=e.theme;return i.a.createElement(y.SectionHeader,{title:"Unpaid invoices",subtitle:"Below is a list of all your invoice which have not yet been paid by the customer.",renderLeftPart:function(){return i.a.createElement(y.Button,{title:"Create new Invoice",applyBorderRadius:!0,width:260,buttonColor:n.palette.primary.color2,onClick:function(){t.push(E.a.CREATE_INVOICES())}})}})},t.prototype._renderNoInvoices=function(){var e=this.props.classes;return i.a.createElement("div",{className:e.noInvoicesWrapper},i.a.createElement("div",{className:e.noInvoicesMessageWrapper},i.a.createElement("div",{className:e.noInvoiceMessage},"There are no unpaid invoices. ",i.a.createElement("br",null),"Let’s start by creating a new invoice.")))},t.prototype._renderInvoices=function(){var e=this;return i.a.createElement(u.a,{container:!0},i.a.createElement(u.a,{item:!0,xs:12},i.a.createElement(y.Table,{columnData:this.state.headerData,data:this.props.invoices,stripe:!1,showRemoveIcon:!1,sortable:!0,cellRenderer:this._renderCell,onRequestSort:this._onRequestSort,loading:this.props.invoicesLoading,onBottomReachedThreshold:500,onBottomReached:function(){e.props.invoicesLoading||e.props.onLoadMore()}})))},t.prototype._renderTertiaryTabs=function(){return i.a.createElement(y.Tabs,{tabs:[{label:"Sent",onClick:function(){}},{label:"Draft",onClick:function(){}}],tabTheme:"tertiary",activeIndex:0})},t.prototype.render=function(){var e=this.props,t=e.classes,n=e.invoices,r=e.invoicesLoading;return i.a.createElement(y.ErrorBoundary,null,i.a.createElement("div",{className:t.page},!f()(n)&&this._renderTertiaryTabs(),i.a.createElement("div",{className:t.content},this._renderSectionHeading(),r&&i.a.createElement(y.Loading,null),!r&&f()(n)&&this._renderNoInvoices(),!f()(n)&&this._renderInvoices())))},t}(o.Component),w=Object(y.withStyles)(g.a)(O);t.default=function(e){return i.a.createElement(I.a,_({},e,{invoiceType:"unpaid"}),(function(e){return i.a.createElement(w,_({},e))}))}},25:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return a})),n.d(t,"g",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l}));var r="YYYY-MM-DD[T]HH:mm:ss.SSS[Z]",o={FIXED:"FIXED",TIME_BASED:"TIME_BASED"},i={STARTED:"STARTED",CLOSED:"CLOSED"},a={PROJECT_ENDS:"PROJECT_ENDS",PROJECT_STARTS:"PROJECT_STARTS"},c={APPROVED:"APPROVED",DRAFT:"DRAFT",FINALISED:"FINALISED",INVOICED:"INVOICED"},s={APPROVED:"APPROVED",ARCHIVED:"ARCHIVED",DRAFT:"DRAFT",FULLY_PAID:"FULLY_PAID",UNPAID:"UNPAID",PARTIALLY_PAID:"PARTIALLY_PAID",PROPOSED:"PROPOSED",REJECTED:"REJECTED"},l={PROJECT:"PROJECT",TIMESHEET:"TIMESHEET",TIMESHEET_WITH_DETAILS:"TIMESHEET_WITH_DETAILS",FREE_TEXT:"FREE_TEXT"}},27:function(e,t,n){"use strict";var r=n(0),o=n(18),i=n(15),a=n(317),c=n(9),s=n.n(c);t.a=Object(o.compose)(Object(i.b)((function(e){return{selectedCompany:s()(e,(function(e){return e.profile.selectedCompany}))}})))((function(e){var t=e.selectedCompany,n=e.onChange,o=e.children;return Object(a.a)((function(){n(t)}),[t]),r.createElement(r.Fragment,null,o)}))},317:function(e,t,n){"use strict";var r=n(30),o=n.n(r),i=n(0);function a(e){var t,n,r=Object(i.useRef)();return t=e,n=r.current,o()(t,n)||(r.current=e),r.current}t.a=function(e,t){Object(i.useEffect)(e,a(t))}},319:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),t.b=function(e){return{page:{flex:1,display:"flex",flexDirection:"column"},includeCheckboxWrapper:{marginTop:10}}};var r=function(e){return{page:{flex:1,display:"flex",flexDirection:"column"},content:{flex:1,display:"flex",flexDirection:"column",padding:"40px 20px"},noInvoicesWrapper:{flex:1,alignItems:"center",justifyContent:"center",display:"flex",margin:"50px 0px"},noInvoicesMessageWrapper:{width:"60%",maxWidth:660,margin:"0px auto",border:"4px dashed "+e.palette.grey[300],padding:10,borderRadius:20,minHeight:200,backgroundColor:e.palette.grey[100],alignItems:"center",justifyContent:"center",display:"flex",cursor:"pointer"},noInvoiceMessage:{fontFamily:e.typography.font.family1,fontSize:26,lineHeight:"35px",fontWeight:"500",color:e.palette.blueGrey[50],textAlign:"center"},invoicesContainer:{marginTop:"20px !important"},borderCell:{paddingLeft:24,paddingRight:24,borderLeft:"1px solid "+e.palette.grey[200],minHeight:50,display:"flex",alignItems:"center"},balanceCell:{justifyContent:"space-between"},invoiceLink:{color:e.palette.primary.color2,fontWeight:500},dollarIcon:{color:e.palette.shadow.color3,border:"2px solid "+e.palette.shadow.color3,width:15,height:15,borderRadius:"50%",padding:5,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"500",cursor:"pointer","&:hover":{backgroundColor:e.palette.primary.color1,color:"white",border:"2px solid "+e.palette.primary.color1}},iconsWrapper:{display:"flex",alignItems:"center",justifyContent:"center"}}}},462:function(e,t,n){"use strict";(function(e){var r,o=n(0),i=n.n(o),a=n(9),c=n.n(a),s=n(3),l=n.n(s),u=n(28),p=n(24),d=n.n(p),f=n(30),h=n.n(f),v=n(15),m=n(18),b=n(2),y=n(10),E=n(11),I=n(27),g=n(25),T=n(1008),_=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),O=function(){return(O=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},w=function(t,n,r,o){return new(r||(r=e))((function(e,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function c(e){try{s(o.throw(e))}catch(e){i(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,c)}s((o=o.apply(t,n||[])).next())}))},D=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},S=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},C=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={displayedInvoices:[],notifiedInvoice:null,isShowingInvoiceEmailModal:!1},t._markInvoiceAsPaid=function(e){return w(t,void 0,void 0,(function(){var t,n;return D(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,this.props.updateInvoice({status:g.b.FULLY_PAID,id:e.id})];case 1:return(t=r.sent()).success?(this.props.invoices.refetch(),Object(E.a)(null,"Invoice marked as paid")):t.error.map((function(e){return Object(E.a)(e)})),[3,3];case 2:return n=r.sent(),Object(E.a)(n.toString()),[3,3];case 3:return[2]}}))}))},t._archiveInvoice=function(e){return w(t,void 0,void 0,(function(){var t,n;return D(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,this.props.updateInvoice({status:g.b.ARCHIVED,id:e.id})];case 1:return(t=r.sent()).success?(this.props.invoices.refetch(),Object(E.a)(null,"Invoice Archived")):t.error.map((function(e){return Object(E.a)(e)})),[3,3];case 2:return n=r.sent(),Object(E.a)(n.toString()),[3,3];case 3:return[2]}}))}))},t._unArchiveInvoice=function(e){return w(t,void 0,void 0,(function(){var t,n;return D(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,this.props.updateInvoice({status:g.b.FULLY_PAID,id:e.id})];case 1:return(t=r.sent()).success?(this.props.invoices.refetch(),Object(E.a)(null,"Invoice Unarchived")):t.error.map((function(e){return Object(E.a)(e)})),[3,3];case 2:return n=r.sent(),Object(E.a)(n.toString()),[3,3];case 3:return[2]}}))}))},t._updateInvoicesData=function(e){var n=t.props.i18n,r=e.map((function(e){var t=c()(e,(function(e){return e.dueDate})),r=c()(e,(function(e){return e.invoiceDate}));return O(O({},e),{id:e.id,hash:c()(e,(function(e){return e.number})),customer:c()(e,(function(e){return e.buyer.name})),date:d()(r).format("DD MMM YYYY"),due:d()(t).format("DD MMM YYYY"),total:n._("currency-symbol")+""+e.total,balance:n._("currency-symbol")+""+e.total,totalInDecimal:e.total})}));t.setState({displayedInvoices:r})},t._showInvoiceEmailModal=function(e){t.setState({notifiedInvoice:e,isShowingInvoiceEmailModal:!0})},t._closeInvoiceEmailModal=function(){t.setState({notifiedInvoice:null,isShowingInvoiceEmailModal:!1})},t._onRequestSort=function(e,n){"customer"!==e&&t.props.invoices.refetch({orderBy:{hash:"number",date:"invoiceDate",due:"dueDate",total:"total",balance:"total"}[e.id]+"_"+n.toUpperCase()})},t}return _(t,e),t.prototype.componentDidMount=function(){this._updateInvoicesData(c()(this.props,(function(e){return e.invoices.data}))||[])},t.prototype.componentDidUpdate=function(e){var t=this.props.invoices;h()(t.data,c()(e,(function(e){return e.invoices.data})))||this._updateInvoicesData(c()(this.props,(function(e){return e.invoices.data}))||[])},t.prototype.render=function(){var e=this.props,t=e.children,n=S(e,["children"]);return i.a.createElement(b.ErrorBoundary,null,i.a.createElement(I.a,{onChange:this.props.invoices.refetch},t(O(O(O({},n),this.state),{invoices:this.state.displayedInvoices,invoicesLoading:l()(this.props,"invoices.loading"),markInvoiceAsPaid:this._markInvoiceAsPaid,archiveInvoice:this._archiveInvoice,unArchiveInvoice:this._unArchiveInvoice,showInvoiceEmailModal:this._showInvoiceEmailModal,closeInvoiceEmailModal:this._closeInvoiceEmailModal,onRequestSort:this._onRequestSort,onLoadMore:l()(this.props,"invoices.loadNextPage")})),i.a.createElement(T.a,{visible:this.state.isShowingInvoiceEmailModal,invoice:this.state.notifiedInvoice,onClose:this._closeInvoiceEmailModal})))},t.defaultProps={invoices:{refetch:function(){}}},t}(o.Component);t.a=Object(m.compose)(Object(u.withI18n)(),Object(v.b)((function(e){return{profile:e.profile}})),Object(y.withUpdateInvoiceStatus)((function(){return{name:"updateInvoice"}})),Object(y.withInvoices)((function(e){var t={};return"unpaid"===e.invoiceType?t=O(O({},t),{status_in:[g.b.DRAFT,g.b.APPROVED]}):"paid"===e.invoiceType?t=O(O({},t),{status:g.b.FULLY_PAID}):"archived"===e.invoiceType&&(t=O(O({},t),{status:g.b.ARCHIVED})),{variables:{first:20,where:t,orderBy:"invoiceDate_DESC"}}})))(C)}).call(this,n(21))}}]);