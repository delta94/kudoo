(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{11:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(652),n=function(e,t){void 0===e&&(e=""),void 0===t&&(t="");var r=e?"error":"success",n=e||t;Object(a.b)(n,{type:r,closeButton:!1,hideProgressBar:!0})}},2104:function(e,t,r){"use strict";(function(e){var a,n=r(0),o=r.n(n),c=r(28),i=r(3),l=r.n(i),s=r(15),p=r(34),u=r(2),m=r(5),d=r(4),f=r.n(d),h=r(76),y=r.n(h),E=r(10),v=r(11),b=r(647),g=r(312),C=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),S=function(t,r,a,n){return new(a||(a=e))((function(e,o){function c(e){try{l(n.next(e))}catch(e){o(e)}}function i(e){try{l(n.throw(e))}catch(e){o(e)}}function l(t){var r;t.done?e(t.value):(r=t.value,r instanceof a?r:new a((function(e){e(r)}))).then(c,i)}l((n=n.apply(t,r||[])).next())}))},j=function(e,t){var r,a,n,o,c={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,a&&(n=2&o[0]?a.return:o[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;switch(a=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,a=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(n=(n=c.trys).length>0&&n[n.length-1])&&(6===o[0]||2===o[0])){c=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){c.label=o[1];break}if(6===o[0]&&c.label<n[1]){c.label=n[1],n=o;break}if(n&&c.label<n[2]){c.label=n[2],c.ops.push(o);break}n[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(e){o=[6,e],a=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},T=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._archiveProject=function(){return S(t,void 0,void 0,(function(){var e,t,r,a,n,o;return j(this,(function(c){switch(c.label){case 0:e=this.props,t=e.history,r=e.match,a=l()(r,"params.id",""),c.label=1;case 1:return c.trys.push([1,3,,4]),[4,this.props.archiveProject({where:{id:a},data:{isArchived:!0}})];case 2:return(n=c.sent()).success?(Object(v.a)(null,"Archived successfully"),t.push(m.a.PROJECTS())):n.error.map((function(e){return Object(v.a)(e)})),[3,4];case 3:return o=c.sent(),Object(v.a)(o.toString()),[3,4];case 4:return[2]}}))}))},t._showArchivedDialog=function(e){var r=t.props,a=r.theme,n=r.classes,c=r.project,i=o.a.createElement("div",null,o.a.createElement("div",null,"You are trying to archive the project"," ",o.a.createElement("span",{className:n.archiveProjectName},l()(c,"data.name")),"."),o.a.createElement("br",null),o.a.createElement("div",null,"If you archive this project then you will not have access to it until you unarchive it from the project list page."),o.a.createElement("br",null),o.a.createElement("div",null,"Are you sure you want to archive this project?")),s=[{title:"Cancel",type:"cancel",onClick:function(){t.props.actions.closeAlertDialog()}},{title:"Archive this project",buttonColor:a.palette.secondary.color2,onClick:function(){t._archiveProject(),t.props.actions.closeAlertDialog()}}],p=a.palette.secondary.color1;t.props.actions.showAlertDialog({title:"Archive this project?",description:i,buttons:s,titleColor:p})},t}return C(t,e),t.prototype.render=function(){var e=this,t=this.props,r=t.classes,a=t.projectCompleted,n=t.project,c=t.theme,i=t.progressSteps,s=t.i18n,p=l()(n,"data.customer")||{};return o.a.createElement(u.ErrorBoundary,null,o.a.createElement("div",{className:r.tabContentWrapper},o.a.createElement(u.SectionHeader,{title:"Project Details",subtitle:"Check the details below",renderLeftPart:function(){return a?o.a.createElement(u.Button,{title:"Customer has paid",applyBorderRadius:!0,width:250,buttonColor:c.palette.primary.color2,onClick:function(){}}):o.a.createElement(u.Button,{title:"Mark as Complete",applyBorderRadius:!0,width:250,buttonColor:c.palette.primary.color2,onClick:e.props.onMarkAsComplete})}}),o.a.createElement(f.a,{container:!0},o.a.createElement(f.a,{item:!0,xs:12,sm:5},o.a.createElement("div",{className:r.projectNameWrapper},o.a.createElement(u.TextField,{label:"Project Name",isReadOnly:!0,disabled:!0,value:l()(n,"data.name")||""})))),o.a.createElement("div",{className:r.progressWrapper},o.a.createElement(b.a,{steps:i})),o.a.createElement("div",{className:r.customerDetailsWrapper},o.a.createElement(u.SectionHeader,{title:"Customer Details",renderLeftPart:function(){return l()(n,"data.isArchived",!1)?null:o.a.createElement(u.Button,{title:"Edit customer details",withoutBackground:!0,applyBorderRadius:!0,width:250,buttonColor:c.palette.primary.color2,compactMode:!0,href:p.id?m.a.CUSTOMER_DETAILS({id:p.id}):""})}}),o.a.createElement("div",{className:r.details},o.a.createElement("div",{className:r.detailWrapper},o.a.createElement("div",{className:r.detailValue},p.name),o.a.createElement("div",{className:r.detailKey},"Comapny")),o.a.createElement("div",{className:r.detailWrapper},o.a.createElement("div",{className:r.detailValue},l()(p,"contacts[0].name")," ",l()(p,"contacts[0].surname")),o.a.createElement("div",{className:r.detailKey},"Contact name")),o.a.createElement("div",{className:r.detailWrapper},o.a.createElement("div",{className:r.detailValue},l()(p,"contacts[0].email")),o.a.createElement("div",{className:r.detailKey},"Email")),o.a.createElement("div",{className:r.detailWrapper},o.a.createElement("div",{className:r.detailValue},l()(p,"govNumber")),o.a.createElement("div",{className:r.detailKey},s._("ABN"))))),!l()(n,"data.isArchived",!1)&&o.a.createElement(y.a,{classes:{root:r.archiveProjectButton},onClick:this._showArchivedDialog},"Archive Project")))},t}(n.Component);t.a=Object(p.compose)(Object(c.withI18n)(),Object(u.withStyles)(g.c),Object(s.b)((function(e){return{profile:e.profile}})),Object(E.withUpdateProject)((function(){return{name:"archiveProject"}})),Object(E.withProject)((function(e){return{id:l()(e,"match.params.id","")}})))(T)}).call(this,r(21))},2105:function(e,t,r){"use strict";var a,n=r(0),o=r.n(n),c=r(9),i=r.n(c),l=r(7),s=r.n(l),p=r(24),u=r.n(p),m=r(3),d=r.n(m),f=r(35),h=r.n(f),y=r(15),E=r(28),v=r(34),b=r(131),g=r.n(b),C=r(4),S=r.n(C),j=r(2),T=r(5),w=r(10),_=r(25),P=r(647),D=r(312),A=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),O=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},N=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={},t._isTypeService=function(e){return function(t){return d()(t,"service.billingType")===e}},t._getServicesLength=function(e){var r=t.props.project;return d()(r,"data.projectService",[]).filter(t._isTypeService(e)).length},t._renderServices=function(e){var r=t.props,a=r.history,n=r.project,c=r.i18n,l=d()(n,"data.startsAt"),s=d()(n,"data.endsAt");return d()(n,"data.projectService",[]).filter(t._isTypeService(e)).map((function(t,r){var n=t.service,p=t.rules,m=t.amount,f=d()(n,"name",""),y=d()(n,"includeConsTax",!1),E=h()(p,{type:_.d.PROJECT_STARTS})||{},v=h()(p,{type:_.d.PROJECT_ENDS})||{},b=E.percent,g=v.percent,C=E.amount,S=v.amount;return o.a.createElement(M,{type:e,key:r,name:f,price:c._("currency-symbol")(I||(I=O([""],[""])))+""+m,id:i()(n,(function(e){return e.id})),includeConsTax:y,onEditClick:function(e){a.push(T.a.EDIT_SERVICE({id:e}))},data:e===_.f.FIXED?[{agreement:"Project Starts",date:u()(l).format("DD/MM/YYYY"),status:"Invoiced",type:b+"%",amount:c._("currency-symbol")(x||(x=O([""],[""])))+""+C},{agreement:"Project Ends",date:s?u()(s).format("DD/MM/YYYY"):"Undefined",status:"In Progress",type:g+"%",amount:c._("currency-symbol")(k||(k=O([""],[""])))+""+S}]:void 0})}))},t}return A(t,e),t.prototype.render=function(){var e=this,t=this.props,r=t.classes,a=t.projectCompleted,n=t.theme,c=t.progressSteps;return o.a.createElement(j.ErrorBoundary,null,o.a.createElement("div",{className:r.tabContentWrapper},o.a.createElement(j.SectionHeader,{title:"Services",subtitle:"Check the details below",renderLeftPart:function(){return a?o.a.createElement(j.Button,{title:"Customer has paid",applyBorderRadius:!0,width:250,buttonColor:n.palette.primary.color2,onClick:function(){}}):o.a.createElement(j.Button,{title:"Mark as Complete",applyBorderRadius:!0,width:250,buttonColor:n.palette.primary.color2,onClick:e.props.onMarkAsComplete})}}),o.a.createElement("div",{className:r.progressWrapper},o.a.createElement(P.a,{steps:c})),o.a.createElement("div",{className:r.servicesList},this._getServicesLength(_.f.FIXED)>0&&o.a.createElement("div",{className:r.servicesListHeader},o.a.createElement(j.SectionHeader,{title:"Fixed Payment"})),this._renderServices(_.f.FIXED),this._getServicesLength(_.f.TIME_BASED)>0&&o.a.createElement("div",{className:r.servicesListHeader},o.a.createElement(j.SectionHeader,{title:"Time-based Payment"})),this._renderServices(_.f.TIME_BASED))))},t}(n.Component);t.a=Object(v.compose)(Object(E.withI18n)(),Object(j.withStyles)(D.c),Object(y.b)((function(e){return{profile:e.profile}})),Object(w.withProject)((function(e){return{id:d()(e,"match.params.id","")}})))(N);var I,x,k,R=function(e){function t(t){var r=e.call(this,t)||this;return r.state={isClosed:t.isClosed||!1},r}return A(t,e),t.prototype.componentDidUpdate=function(e){var t=this.props;t.isClosed!==e.isClosed&&this.setState({isClosed:t.isClosed})},t.prototype.render=function(){var e=this,t=this.props,r=t.classes,a=t.name,n=t.price,c=t.type,i=t.data,l=t.includeConsTax,p=t.id,u=t.onEditClick,m=t.i18n,d=this.state.isClosed,f=c===_.f.FIXED;return o.a.createElement(j.ErrorBoundary,null,o.a.createElement("div",{className:r.wrapper},o.a.createElement("div",{className:r.headerWrapper},o.a.createElement("div",{className:r.headerTitle},a),o.a.createElement("div",{className:r.priceWrapper},o.a.createElement("div",{className:r.price},n),o.a.createElement("div",{className:r.gstLabel},l?"incl":"excl"," ",m._("GST"))),o.a.createElement("div",{className:s()(r.arrowWrapper,"edit"),onClick:function(){u(p)}},o.a.createElement("i",{className:s()("fa fa-edit",r.editIcon)})),f&&o.a.createElement("div",{className:r.arrowWrapper,onClick:function(){f&&e.setState({isClosed:!d})}},o.a.createElement(j.TriangleArrow,{color:"white",size:10,direction:d?"right":"down"}))),f&&o.a.createElement(g.a,{component:"div",className:r.collapse,in:!d,timeout:"auto",unmountOnExit:!0},o.a.createElement("div",{className:r.collapseContent},o.a.createElement(S.a,{container:!0},o.a.createElement(S.a,{item:!0,xs:12,sm:3},o.a.createElement("div",{className:r.cellHeader},"Service agreement")),o.a.createElement(S.a,{item:!0,xs:12,sm:2},o.a.createElement("div",{className:r.cellHeader},"Date")),o.a.createElement(S.a,{item:!0,xs:12,sm:2},o.a.createElement("div",{className:r.cellHeader},"Status")),o.a.createElement(S.a,{item:!0,xs:12,sm:2},o.a.createElement("div",{className:r.cellHeader},"Type")),o.a.createElement(S.a,{item:!0,xs:12,sm:2},o.a.createElement("div",{className:r.cellHeader},"Amount"))),i.map((function(e,t){return o.a.createElement(S.a,{container:!0,classes:{container:r.row},key:t},o.a.createElement(S.a,{item:!0,xs:12,sm:3},o.a.createElement("div",{className:r.cellValue},e.agreement)),o.a.createElement(S.a,{item:!0,xs:12,sm:2},o.a.createElement("div",{className:r.cellValue},e.date)),o.a.createElement(S.a,{item:!0,xs:12,sm:2},o.a.createElement("div",{className:r.cellValue},e.status)),o.a.createElement(S.a,{item:!0,xs:12,sm:2},o.a.createElement("div",{className:r.cellValue},e.type)),o.a.createElement(S.a,{item:!0,xs:12,sm:2},o.a.createElement("div",{className:r.cellValue},e.amount)))}))))))},t.defaultProps={isClosed:!1,onEditClick:function(){}},t}(n.Component),M=Object(v.compose)(Object(j.withStyles)(D.b),Object(E.withI18n)())(R)},2304:function(e,t,r){"use strict";r.r(t),function(e){var a,n=r(0),o=r.n(n),c=r(3),i=r.n(c),l=r(24),s=r.n(l),p=r(316),u=r(219),m=r(34),d=r(2),f=r(5),h=r(10),y=r(11),E=r(25),v=r(27),b=r(2104),g=r(2105),C=r(312),S=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),j=function(){return(j=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},T=function(t,r,a,n){return new(a||(a=e))((function(e,o){function c(e){try{l(n.next(e))}catch(e){o(e)}}function i(e){try{l(n.throw(e))}catch(e){o(e)}}function l(t){var r;t.done?e(t.value):(r=t.value,r instanceof a?r:new a((function(e){e(r)}))).then(c,i)}l((n=n.apply(t,r||[])).next())}))},w=function(e,t){var r,a,n,o,c={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,a&&(n=2&o[0]?a.return:o[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;switch(a=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,a=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(n=(n=c.trys).length>0&&n[n.length-1])&&(6===o[0]||2===o[0])){c=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){c.label=o[1];break}if(6===o[0]&&c.label<n[1]){c.label=n[1],n=o;break}if(n&&c.label<n[2]){c.label=n[2],c.ops.push(o);break}n[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(e){o=[6,e],a=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},_=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._findActiveSecondaryTab=function(){var e=0;return d.helpers.isURLMatching(f.a.PROJECT_DETAILS({path:!0}),void 0,!0)?e=0:d.helpers.isURLMatching(f.a.PROJECT_SERVICES({path:!0}),void 0,!0)&&(e=1),e},t._markAsCompleted=function(){return T(t,void 0,void 0,(function(){var e,t,r;return w(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),e=i()(this.props,"match.params.id",""),[4,this.props.markProjectAsCompleted({where:{id:e},data:{endsAt:s()().format(),status:E.e.CLOSED}})];case 1:return(t=a.sent()).success?Object(y.a)(null,"Project marked as completed"):t.error.map((function(e){return Object(y.a)(e)})),[3,3];case 2:return r=a.sent(),Object(y.a)(r.toString()),[3,3];case 3:return[2]}}))}))},t._onMarkAsCompleteClick=function(){var e=t.props.theme,r=o.a.createElement("div",null,o.a.createElement("div",null,"When you mark a project as complete, by default we will send an invoice to your customer for the total or remainder amount owed to you for the services defined."),o.a.createElement("br",null),o.a.createElement("div",null,"Are you sure you want to mark this project as complete?")),a=[{title:"Cancel",type:"cancel",onClick:function(){t.props.actions.closeAlertDialog()}},{title:"Mark as Complete",onClick:function(){t._markAsCompleted(),t.props.actions.closeAlertDialog()}}],n=e.palette.secondary.color1;t.props.actions.showAlertDialog({title:"Are you sure this project is complete?",description:r,buttons:a,titleColor:n})},t._isProjectInProgress=function(){var e=t.props.project,r=i()(e,"data.startsAt"),a=i()(e,"data.endsAt"),n=s()(s()().format("YYYY-MM-DD")).isSame(s()(r).format("YYYY-MM-DD"));return!(!r||n||a)},t._isProjectCompleted=function(){var e=t.props.project;if(i()(e,"data.endsAt")){var r=i()(e,"data.endsAt");return s()(r).format("DD/MM/YYYY")}return!1},t._renderTabs=function(){var e=t.props.history,r=i()(t.props,"match.params.id");return o.a.createElement(d.Tabs,{activeIndex:t._findActiveSecondaryTab(),tabs:[{label:"Project Details",onClick:function(){e.push(f.a.PROJECT_DETAILS({id:r}))}},{label:"Services",onClick:function(){e.push(f.a.PROJECT_SERVICES({id:r}))}}]})},t}return S(t,e),t.prototype.componentDidMount=function(){this.props.actions.updateHeaderTitle("Projects")},t.prototype.render=function(){var e=this,t=this.props,r=t.classes,a=t.theme,n=t.project,c=this._isProjectCompleted(),l=this._isProjectInProgress(),m=i()(n,"data.startsAt"),h=s()(m).format("DD/MM/YYYY"),y=s()(s()().format("YYYY-MM-DD")).isSame(s()(m).format("YYYY-MM-DD")),E=[{title:"Project Started",subtitle:h,current:!(!y||c),completed:!(!l&&!c)},{title:"In Progress",subtitle:c||y?"-":"Today",current:!(!l||c),next:!(!y||c),completed:!!c},{title:"Project Ends",subtitle:c||"Undefined",current:!!c}];return o.a.createElement(d.ErrorBoundary,null,o.a.createElement(v.a,{onChange:function(){e.props.history.push(f.a.PROJECTS())}},o.a.createElement("div",{className:r.page},this._renderTabs(),o.a.createElement(p.a,null,o.a.createElement(u.a,{path:f.a.PROJECT_DETAILS({path:!0}),exact:!0,render:function(t){return o.a.createElement(b.a,j({},e.props,t,{onMarkAsComplete:e._onMarkAsCompleteClick,projectCompleted:Boolean(c),progressSteps:E}))}}),o.a.createElement(u.a,{path:f.a.PROJECT_SERVICES({path:!0}),render:function(t){return o.a.createElement(g.a,j({},e.props,t,{onMarkAsComplete:e._onMarkAsCompleteClick,projectCompleted:Boolean(c),progressSteps:E}))}})),o.a.createElement(d.Button,{title:"Back to project list",buttonColor:a.palette.grey[300],href:f.a.PROJECTS()}))))},t}(n.Component);t.default=Object(m.compose)(Object(d.withStyles)(C.c),Object(h.withProject)((function(e){return{id:i()(e,"match.params.id","")}})),Object(h.withUpdateProject)((function(){return{name:"markProjectAsCompleted"}})))(_)}.call(this,r(21))},25:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"f",(function(){return n})),r.d(t,"e",(function(){return o})),r.d(t,"d",(function(){return c})),r.d(t,"g",(function(){return i})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return s}));var a="YYYY-MM-DD[T]HH:mm:ss.SSS[Z]",n={FIXED:"FIXED",TIME_BASED:"TIME_BASED"},o={STARTED:"STARTED",CLOSED:"CLOSED"},c={PROJECT_ENDS:"PROJECT_ENDS",PROJECT_STARTS:"PROJECT_STARTS"},i={APPROVED:"APPROVED",DRAFT:"DRAFT",FINALISED:"FINALISED",INVOICED:"INVOICED"},l={APPROVED:"APPROVED",ARCHIVED:"ARCHIVED",DRAFT:"DRAFT",FULLY_PAID:"FULLY_PAID",UNPAID:"UNPAID",PARTIALLY_PAID:"PARTIALLY_PAID",PROPOSED:"PROPOSED",REJECTED:"REJECTED"},s={PROJECT:"PROJECT",TIMESHEET:"TIMESHEET",TIMESHEET_WITH_DETAILS:"TIMESHEET_WITH_DETAILS",FREE_TEXT:"FREE_TEXT"}},27:function(e,t,r){"use strict";var a=r(0),n=r(18),o=r(15),c=r(317),i=r(9),l=r.n(i);t.a=Object(n.compose)(Object(o.b)((function(e){return{selectedCompany:l()(e,(function(e){return e.profile.selectedCompany}))}})))((function(e){var t=e.selectedCompany,r=e.onChange,n=e.children;return Object(c.a)((function(){r(t)}),[t]),a.createElement(a.Fragment,null,n)}))},312:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n})),t.c=function(e){return{page:{flex:1,display:"flex",flexDirection:"column",position:"relative"},tabContentWrapper:{padding:"40px 20px"},projectNameWrapper:{marginTop:50},progressWrapper:{marginTop:30},customerDetailsWrapper:{marginTop:30},details:{marginTop:15},detailWrapper:{display:"flex",alignItems:"center",justifyContent:"space-between",border:"1px solid "+e.palette.grey[200],padding:"10px 20px"},detailKey:{color:e.palette.grey[400],fontSize:16,fontWeight:300,fontFamily:e.typography.font.family2},detailValue:{color:e.palette.blueGrey[50],fontSize:16,fontWeight:300,fontFamily:e.typography.font.family2},servicesListHeader:{marginTop:30},archiveProjectName:{fontWeight:500,fontFamily:e.typography.font.family2,color:e.palette.shadow.color3},archiveProjectButton:{color:e.palette.secondary.color2,fontSize:15,marginTop:15,padding:10,textDecoration:"underline",fontWeight:500,fontFamily:e.typography.font.family2,cursor:"pointer"},backToProjectButton:{padding:20,backgroundColor:e.palette.grey[300],fontSize:16,fontWeight:500,fontFamily:e.typography.font.family2,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",cursor:"pointer"}}};var a=function(e){return{component:{},wrapper:{display:"flex",alignItems:"center",marginTop:20},step:{display:"flex",alignItems:"center",height:80,marginRight:-40,"&:first-child $stepInfo":{borderTopLeftRadius:5,borderBottomLeftRadius:5}},stepInfo:{padding:"0px 20px 0px 60px",backgroundColor:e.palette.grey[200],height:80,display:"flex",flexDirection:"column",justifyContent:"center",".completed &":{backgroundColor:e.palette.primary.color3},".next &":{backgroundColor:e.palette.grey[300]},".current &":{backgroundColor:e.palette.primary.color1}},stepTitle:{fontSize:16,fontFamily:e.typography.font.family1,color:e.palette.grey[700],fontWeight:"bold",marginBottom:10,".current &":{color:"white"},".completed &":{color:e.palette.grey[200]}},stepDate:{fontSize:15,fontFamily:e.typography.font.family2,color:e.palette.grey[500],".current &":{color:e.palette.shadow.color1},".completed &":{color:e.palette.grey[300]}},stepArrow:{width:0,height:0,borderTop:"40px solid transparent",borderBottom:"40px solid transparent",borderLeft:"40px solid "+e.palette.grey[200],transition:"all ease-in 0.2s",transform:"rotate(0deg)",".current &":{borderLeftColor:e.palette.primary.color1},".next &":{borderLeftColor:e.palette.grey[300]},".completed &":{borderLeftColor:e.palette.primary.color3}}}},n=function(e){return{wrapper:{marginTop:20},headerWrapper:{backgroundColor:e.palette.primary.color1,display:"flex",alignItems:"center",cursor:"pointer",padding:0},headerTitle:{flex:1,display:"flex",color:"white",fontFamily:e.typography.font.family2,fontWeight:"bold",fontSize:16,paddingLeft:20},priceWrapper:{paddingRight:20},price:{color:"white",marginBottom:7,fontFamily:e.typography.font.family2,fontWeight:"bold",fontSize:16},gstLabel:{color:e.palette.shadow.color1,fontFamily:e.typography.font.family2,fontSize:14},arrowWrapper:{backgroundColor:e.palette.shadow.color1,padding:30,display:"flex",alignItems:"center",justifyContent:"center","&.edit":{borderRight:"2px solid "+e.palette.primary.color1}},editIcon:{fontSize:"20px !important",color:"white"},collapse:{backgroundColor:e.palette.grey[100],border:"1px solid "+e.palette.grey[300],borderTop:0},collapseContent:{padding:20},cellHeader:{color:e.palette.grey[400],fontFamily:e.typography.font.family2,fontWeight:"bold",fontSize:16},cellValue:{color:e.palette.blueGrey[50],fontFamily:e.typography.font.family2,fontSize:16},row:{marginTop:5}}}},317:function(e,t,r){"use strict";var a=r(30),n=r.n(a),o=r(0);function c(e){var t,r,a=Object(o.useRef)();return t=e,r=a.current,n()(t,r)||(a.current=e),a.current}t.a=function(e,t){Object(o.useEffect)(e,c(t))}},647:function(e,t,r){"use strict";var a,n=r(0),o=r.n(n),c=r(7),i=r.n(c),l=r(2),s=r(312),p=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={},t}return p(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,r=e.steps;return o.a.createElement(l.ErrorBoundary,null,o.a.createElement("div",{className:t.component},o.a.createElement(l.SectionHeader,{title:"Project Status"}),o.a.createElement("div",{className:t.wrapper},r.map((function(e,r){return o.a.createElement("div",{key:r,className:i()(t.step,{completed:e.completed,next:e.next,current:e.current})},o.a.createElement("div",{className:t.stepInfo},o.a.createElement("div",{className:t.stepTitle},e.title),o.a.createElement("div",{className:t.stepDate},e.subtitle)),o.a.createElement("div",{className:t.stepArrow}))})))))},t}(n.Component);t.a=Object(l.withStyles)(s.a)(u)}}]);