(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{11:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(652),i=function(e,t){void 0===e&&(e=""),void 0===t&&(t="");var n=e?"error":"success",i=e||t;Object(r.b)(i,{type:n,closeButton:!1,hideProgressBar:!0})}},2180:function(e,t,n){"use strict";t.a=function(e){return{page:{flex:1,display:"flex",flexDirection:"column",position:"relative"},content:{flex:1,padding:"40px 20px"},form:{flex:1,display:"flex",flexDirection:"column"},formFields:{flex:1,padding:[[0,20]],paddingBottom:20},formHeading:{marginTop:35,marginBottom:15},cancelButtonText:{color:e.palette.primary.color3},primaryContactCheck:{marginTop:10},sectionHeader:{padding:[[20,20]]},component:{}}}},2181:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=[{value:"DRCONTROL",label:"DRCONTROL"},{value:"BANK",label:"BANK"},{value:"REVENUE",label:"REVENUE"},{value:"TAXPAYABLE",label:"TAXPAYABLE"},{value:"TAXRECEIVABLE",label:"TAXRECEIVABLE"}]},2329:function(e,t,n){"use strict";n.r(t),function(e){var r,i=n(0),o=n.n(i),a=n(4),c=n.n(a),s=n(28),u=n(15),l=n(39),p=n(13),d=n(34),f=n(2),m=n(5),h=n(9),g=n.n(h),b=n(30),y=n.n(b),E=n(27),v=n(10),A=n(11),w=n(2180),S=n(2181),O=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),T=function(t,n,r,i){return new(r||(r=e))((function(e,o){function a(e){try{s(i.next(e))}catch(e){o(e)}}function c(e){try{s(i.throw(e))}catch(e){o(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,c)}s((i=i.apply(t,n||[])).next())}))},L=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},P=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={isEditMode:!1,mainAccountsList:[]},t._submitForm=function(e,n){return T(t,void 0,void 0,(function(){var t,r,i,o;return L(this,(function(a){switch(a.label){case 0:return a.trys.push([0,5,,6]),t=this.props.initialData,r=this.state.isEditMode,i={postingType:e.postingType,mainAccount:{connect:{id:e.mainAccount_id}}},r?[3,2]:[4,this.props.createLedgerPosting({data:i})];case 1:return(o=a.sent()).success?(Object(A.a)(null,"Ledger Posting created successfully"),n.setSubmitting(!1),this.props.history.push(m.a.LEDGER_POSTINGS())):(o.error.map((function(e){return Object(A.a)(e)})),n.setSubmitting(!1)),[3,4];case 2:return[4,this.props.updateLedgerPosting({data:i,where:{id:t.id}})];case 3:(o=a.sent()).success?(Object(A.a)(null,"Ledger Posting updated successfully"),n.setSubmitting(!1),this.props.history.push(m.a.LEDGER_POSTINGS())):(o.error.map((function(e){return Object(A.a)(e)})),n.setSubmitting(!1)),a.label=4;case 4:return[3,6];case 5:return a.sent(),n.setSubmitting(!1),[3,6];case 6:return[2]}}))}))},t}return O(t,e),t.prototype.componentDidMount=function(){this.props.actions.updateHeaderTitle("Ledger Posting"),this.setState({isEditMode:Boolean(g()(this.props,(function(e){return e.initialData})))})},t.prototype.componentDidUpdate=function(e,t){var n=this.props.mainAccounts.data,r=this.state.mainAccountsList;n.length&&!y()(n,e.mainAccounts.data)&&(n.forEach((function(e){r.push({value:e.id,label:e.name})})),this.setState({mainAccountsList:r})),y()(this.props.initialData,e.initialData)||this.setState({isEditMode:Boolean(g()(this.props,(function(e){return e.initialData})))})},t.prototype._renderSectionHeading=function(){var e=this.state.isEditMode,t=this.props.classes;return o.a.createElement(f.SectionHeader,{title:(e?"Update":"Create new")+" Ledger Posting",subtitle:(e?"Update":"Create a new")+" ledger posting "+(e?"to update information in your account. ":"to add to your account. "),classes:{component:t.sectionHeader}})},t.prototype._renderLedgerPostingForm=function(e){var t=e.values,n=e.errors,r=e.touched,i=e.setFieldValue,a=e.setFieldTouched,s="postingType",u="mainAccount_id",l="Posting Type",p="Main Account",d=this.props.classes,m=this.state.mainAccountsList;return o.a.createElement(f.ErrorBoundary,null,o.a.createElement("div",{className:d.component},o.a.createElement(c.a,{container:!0,spacing:16},o.a.createElement(c.a,{item:!0,xs:12},o.a.createElement(f.Dropdown,{label:l,placeholder:"Select Type",name:s,id:s,items:S.a,value:t[s],onChange:function(e){return i(s,e.value)},onClose:function(){return a(s)},error:r[s]&&n[s]})),o.a.createElement(c.a,{item:!0,xs:12},o.a.createElement(f.Dropdown,{label:p,placeholder:"Select Type",name:u,id:u,items:m.length?m:[{value:"",label:"No account found for this company. Please create Main Account first"}],value:t[u],onChange:function(e){return i(u,e.value)},onClose:function(){return a(u)},error:r[u]&&n[u]})))))},t.prototype._renderForm=function(){var e=this,t=this.props,n=t.initialData,r=t.classes,i=t.theme,a=t.mainAccounts,s=this.state.isEditMode;return o.a.createElement(l.Formik,{initialValues:{postingType:g()(n,(function(e){return e.postingType}))||"",mainAccount_id:g()(n,(function(e){return e.mainAccount.id}))||""},enableReinitialize:!0,validationSchema:p.object().shape({postingType:p.string().required("Type is required"),mainAccount_id:p.string().required("Select Main Account")}),onSubmit:this._submitForm},(function(t){var n=t.values,u=t.errors,l=t.touched,p=t.handleSubmit,d=t.isSubmitting,h=t.setFieldValue,g=t.setFieldTouched,b=t.dirty;return o.a.createElement("form",{className:r.form,onSubmit:p},o.a.createElement(c.a,{container:!0,classes:{container:r.formFields}},o.a.createElement(c.a,{item:!0,xs:12,sm:6},a.loading?o.a.createElement(f.Loading,null):e._renderLedgerPostingForm({values:n,errors:u,touched:l,setFieldValue:h,setFieldTouched:g}))),o.a.createElement(c.a,{container:!0,spacing:0},o.a.createElement(c.a,{item:!0,xs:12,sm:b?6:12},o.a.createElement(f.Button,{title:s?"Back to Ledger Posting list":"Cancel",onClick:function(){e.props.history.replace(m.a.LEDGER_POSTINGS())},buttonColor:i.palette.grey[200],classes:{text:r.cancelButtonText}})),b&&o.a.createElement(c.a,{item:!0,xs:12,sm:6},o.a.createElement(f.Button,{loading:d,title:(s?"Update":"Create new")+" Ledger Posting",id:"submit-ledgerPosting",buttonColor:i.palette.primary.color2,type:"submit"}))))}))},t.prototype.render=function(){var e=this,t=this.props.classes;return o.a.createElement(f.ErrorBoundary,null,o.a.createElement(E.a,{onChange:function(){e.props.history.push(m.a.LEDGER_POSTINGS())}},o.a.createElement("div",{className:t.page},this._renderSectionHeading(),this._renderForm())))},t}(i.Component);t.default=Object(d.compose)(Object(s.withI18n)(),Object(v.withCreateLedgerPosting)(),Object(v.withUpdateLedgerPosting)(),Object(v.withMainAccounts)((function(e){e.profile;var t=!1;return"archived-mainAccounts"===e.type&&(t=!0),{variables:{where:{isArchived:t},orderBy:"name_ASC"}}})),Object(v.withLedgerPosting)((function(e){return{id:g()(e,(function(e){return e.match.params.id}))}}),(function(e){var t=e.data;return{initialData:g()(t,(function(e){return e.ledgerPosting}))||{}}})),Object(u.b)((function(e){return{profile:e.profile}})),Object(f.withStyles)(w.a))(P)}.call(this,n(21))},27:function(e,t,n){"use strict";var r=n(0),i=n(18),o=n(15),a=n(317),c=n(9),s=n.n(c);t.a=Object(i.compose)(Object(o.b)((function(e){return{selectedCompany:s()(e,(function(e){return e.profile.selectedCompany}))}})))((function(e){var t=e.selectedCompany,n=e.onChange,i=e.children;return Object(a.a)((function(){n(t)}),[t]),r.createElement(r.Fragment,null,i)}))},317:function(e,t,n){"use strict";var r=n(30),i=n.n(r),o=n(0);function a(e){var t,n,r=Object(o.useRef)();return t=e,n=r.current,i()(t,n)||(r.current=e),r.current}t.a=function(e,t){Object(o.useEffect)(e,a(t))}}}]);