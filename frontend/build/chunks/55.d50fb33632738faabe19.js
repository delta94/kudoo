(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{2141:function(e,t,r){"use strict";(function(e){var n,a=r(0),o=r.n(a),s=r(15),i=r(18),c=r(9),l=r.n(c),u=r(3),p=r.n(u),d=r(35),f=r.n(d),h=r(30),y=r.n(h),m=r(2),O=r(27),b=r(10),v=r(24),g=r.n(v),S=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),_=function(){return(_=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},w=function(t,r,n,a){return new(n||(n=e))((function(e,o){function s(e){try{c(a.next(e))}catch(e){o(e)}}function i(e){try{c(a.throw(e))}catch(e){o(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(s,i)}c((a=a.apply(t,r||[])).next())}))},E=function(e,t){var r,n,a,o,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(a=(a=s.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){s.label=o[1];break}if(6===o[0]&&s.label<a[1]){s.label=a[1],a=o;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(o);break}a[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},x=function(e){function t(t){var r=e.call(this,t)||this;return r._onRequestSort=function(e){return w(r,void 0,void 0,(function(){var t,r,n,a,o;return E(this,(function(s){switch(s.label){case 0:return t=this.state.columns,r=f()(t,{sorted:!0}),n=f()(t,{id:e.id}),a="asc",r.id===n.id&&"asc"===r.order&&(a="desc"),o={orderBy:n.id+"_"+a.toUpperCase()},"customer"===e.id?[3,2]:[4,this.props.salesOrders.refetch(o)];case 1:s.sent(),s.label=2;case 2:return r.sorted=!1,n.sorted=!0,n.order=a,this.setState({columns:t}),[2]}}))}))},r.state={displayedSalesOrders:l()(t,(function(e){return e.salesOrders.data})),columns:[{id:"transactionDate",label:"Transaction Date",sorted:!0,order:"asc"},{id:"customer",label:"Customer"},{id:"currency",label:"Currency"}]},r}return S(t,e),t.prototype.componentDidUpdate=function(e){var t=l()(e,(function(e){return e.salesOrders.data}))||[],r=l()(this.props,(function(e){return e.salesOrders.data}))||[];y()(t,r)||this._updateSalesOrders(r)},t.prototype._updateSalesOrders=function(e){var t=e.map((function(e){return _(_({},e),{customer:l()(e,(function(e){return e.customer.name}))||"",transactionDate:g()(e.transactionDate).format("DD MMM YYYY")})}));this.setState({displayedSalesOrders:t})},t.prototype.render=function(){var e=this.state,t=e.displayedSalesOrders,r=e.columns,n=this.props,a=n.match,s=n.history,i=n.location,c=n.actions,l=n.salesOrders,u=void 0===l?{}:l;return o.a.createElement(m.ErrorBoundary,null,o.a.createElement(O.a,{onChange:u.refetch},this.props.children({match:a,history:s,location:i,actions:c,columns:r,salesOrders:t,salesOrdersLoading:p()(this.props,"salesOrders.loading"),onSortRequested:this._onRequestSort,onLoadMore:p()(this.props,"salesOrders.loadNextPage")})))},t.defaultProps={salesOrders:{refetch:function(){},loadNextPage:function(){},children:function(e){}}},t}(a.Component);t.a=Object(i.compose)(Object(s.b)((function(e){return{profile:e.profile}})),Object(b.withSalesOrders)((function(e){var t=!1;return"archived-salesOrders"===e.type&&(t=!0),{variables:{where:{isArchived:t},orderBy:"transactionDate_ASC"}}})))(x)}).call(this,r(21))},2351:function(e,t,r){"use strict";r.r(t);var n,a=r(0),o=r.n(a),s=r(31),i=r.n(s),c=r(101),l=r(2),u=r(5),p=r(4),d=r.n(p),f=r(27),h=r(69),y=r.n(h),m=r(2141),O=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),b=function(){return(b=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={contentHash:y()()},t._renderCell=function(e,r,n){var a=t.props.classes;return"transactionDate"===r.id?o.a.createElement(c.a,{to:u.a.EDIT_SALES_ORDER({id:e.id}),className:a.salesOrderNameCell},n):n},t}return O(t,e),t.prototype._renderSectionHeading=function(){var e=this.props,t=e.history,r=e.theme;return o.a.createElement(l.SectionHeader,{title:"Sales Order",subtitle:"Below is a list of all Sales Orders.",renderLeftPart:function(){return o.a.createElement(l.Button,{title:"Create New Sales Order",applyBorderRadius:!0,width:260,buttonColor:r.palette.primary.color2,onClick:function(){t.push(u.a.CREATE_SALES_ORDER())}})}})},t.prototype._renderNoSalesOrder=function(){var e=this.props.classes;return o.a.createElement("div",{className:e.noSaleWrapper},o.a.createElement("div",{className:e.noActiveMessageWrapper},o.a.createElement("div",{className:e.noActiveMessage},"There are no salesOrders. ",o.a.createElement("br",null),"Let’s start by creating a new SalesOrder.")))},t.prototype._renderSalesOrder=function(){var e=this.props,t=e.salesOrders,r=e.salesOrdersLoading,n=e.onLoadMore,a=e.columns,s=e.onSortRequested;return o.a.createElement(d.a,{container:!0},o.a.createElement(d.a,{item:!0,xs:12},o.a.createElement(l.Table,{columnData:a,data:t,stripe:!1,showRemoveIcon:!1,sortable:!0,onRequestSort:s,loading:r,cellRenderer:this._renderCell,onBottomReachedThreshold:500,onBottomReached:function(){r||n()}})))},t.prototype.render=function(){var e=this,t=this.props,r=t.classes,n=t.salesOrders,a=t.salesOrdersLoading;return o.a.createElement("div",null,o.a.createElement(f.a,{onChange:function(){e.setState({contentHash:y()()})}},o.a.createElement(l.ErrorBoundary,null,o.a.createElement("div",{className:r.page},o.a.createElement("div",{className:r.content},this._renderSectionHeading(),a&&o.a.createElement(l.Loading,null),!a&&i()(n)&&this._renderNoSalesOrder(),!i()(n)&&this._renderSalesOrder())))))},t}(a.Component),g=Object(l.withStyles)(Object(l.composeStyles)((function(e){return{page:{flex:1,display:"flex",flexDirection:"column"}}}),(function(e){return{page:{padding:"40px 20px",flex:1,display:"flex",flexDirection:"column"},noSaleWrapper:{flex:1,alignItems:"center",justifyContent:"center",display:"flex",margin:"50px 0px"},noActiveMessageWrapper:{width:"60%",maxWidth:660,margin:"0px auto",border:"4px dashed "+e.palette.grey[300],padding:10,borderRadius:20,minHeight:200,backgroundColor:e.palette.grey[100],alignItems:"center",justifyContent:"center",display:"flex"},noActiveMessage:{fontFamily:e.typography.font.family1,fontSize:26,lineHeight:"35px",fontWeight:"500",color:e.palette.blueGrey[50],textAlign:"center"},salesOrderNameCell:{fontFamily:e.typography.font.family2,color:e.palette.primary.color2,cursor:"pointer",fontWeight:500}}})))(v);t.default=function(e){return o.a.createElement(m.a,b({},e,{type:"active-salesOrders"}),(function(e){return o.a.createElement(g,b({},e))}))}},27:function(e,t,r){"use strict";var n=r(0),a=r(18),o=r(15),s=r(317),i=r(9),c=r.n(i);t.a=Object(a.compose)(Object(o.b)((function(e){return{selectedCompany:c()(e,(function(e){return e.profile.selectedCompany}))}})))((function(e){var t=e.selectedCompany,r=e.onChange,a=e.children;return Object(s.a)((function(){r(t)}),[t]),n.createElement(n.Fragment,null,a)}))},317:function(e,t,r){"use strict";var n=r(30),a=r.n(n),o=r(0);function s(e){var t,r,n=Object(o.useRef)();return t=e,r=n.current,a()(t,r)||(n.current=e),n.current}t.a=function(e,t){Object(o.useEffect)(e,s(t))}}}]);