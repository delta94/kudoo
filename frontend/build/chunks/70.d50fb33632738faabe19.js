(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{11:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(652),n=function(e,t){void 0===e&&(e=""),void 0===t&&(t="");var r=e?"error":"success",n=e||t;Object(a.b)(n,{type:r,closeButton:!1,hideProgressBar:!0})}},2082:function(e,t,r){"use strict";t.a=function(e){return{page:{backgroundColor:e.palette.grey[50],padding:45,fontFamily:e.typography.font.family2},middleContainer:{maxWidth:400,margin:"0px auto",display:"flex",alignItems:"center",flexDirection:"column"},mailSentIcon:{width:"100px",height:"100px",margin:"30px 0px 25px 0px"},form:{minWidth:350},submitBtn:{marginTop:15},messageWrapper:{lineHeight:"24px"},messageTitle:{textAlign:"center",color:e.palette.secondary.color1,fontWeight:500,marginBottom:10,fontSize:16},messageDesc:{textAlign:"center",color:"#a8a8a8",marginBottom:"20px",fontSize:"15px"}}}},2279:function(e,t,r){"use strict";r.r(t),function(e){var a,n=r(0),s=r(4),o=r.n(s),i=r(39),l=r(63),c=r(13),p=r(18),u=r(2),d=r(5),m=r(11),f=r(10),h=r(2082),w=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),g=function(t,r,a,n){return new(a||(a=e))((function(e,s){function o(e){try{l(n.next(e))}catch(e){s(e)}}function i(e){try{l(n.throw(e))}catch(e){s(e)}}function l(t){var r;t.done?e(t.value):(r=t.value,r instanceof a?r:new a((function(e){e(r)}))).then(o,i)}l((n=n.apply(t,r||[])).next())}))},y=function(e,t){var r,a,n,s,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(s){return function(i){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,a&&(n=2&s[0]?a.return:s[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,s[1])).done)return n;switch(a=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,a=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(n=(n=o.trys).length>0&&n[n.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){o.label=s[1];break}if(6===s[0]&&o.label<n[1]){o.label=n[1],n=s;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(s);break}n[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],a=0}finally{r=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}},b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={loading:!1,updatingUser:!1},t._updateUser=function(e){return g(t,void 0,void 0,(function(){var t,r;return y(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),this.setState({updatingUser:!0}),[4,this.props.updateUser({firstName:e.firstName,lastName:e.lastName,password:e.password,passwordRepeat:e.passwordRepeat})];case 1:return(t=a.sent()).success?(Object(m.a)(null,"Invitation Accepted"),this.props.actions.resetUserData(),this.setState({updatingUser:!1}),this.props.history.replace(d.a.LOGIN())):(this.setState({updatingUser:!1}),t.error.map((function(e){return Object(m.a)(e.toString())}))),[3,3];case 2:return r=a.sent(),this.setState({updatingUser:!1}),Object(m.a)(r.toString()),[3,3];case 3:return[2]}}))}))},t}return w(t,e),t.prototype.componentDidMount=function(){var e=this.props.location.search||"",t=l.parse(e);t.token?(this.props.actions.setOnlyToken(t.token),"update"!==t.target_type&&(Object(m.a)(null,"Invitation Accepted Successfully"),this.props.history.replace(d.a.LOGIN()))):this.props.actions.resetUserData()},t.prototype._renderFormContent=function(e){var t=e.values,r=e.errors,a=e.touched,s=e.handleChange,o=e.handleBlur,i=this.props.classes;return n.createElement("form",{className:i.form},n.createElement(u.TextField,{label:"Firstname",name:"firstName",id:"firstName",placeholder:"Firstname",value:t.firstName,onChange:s,onBlur:o,error:a.firstName&&r.firstName}),n.createElement(u.TextField,{label:"Lastname",name:"lastName",id:"lastName",placeholder:"Lastname",value:t.lastName,onChange:s,onBlur:o,error:a.lastName&&r.lastName}),n.createElement(u.TextField,{type:"password",label:"Password",name:"password",id:"password",placeholder:"Password",value:t.password,onChange:s,onBlur:o,error:a.password&&r.password}),n.createElement(u.TextField,{type:"password",label:"Confirm Password",name:"passwordRepeat",id:"passwordRepeat",placeholder:"Confirm Password",value:t.passwordRepeat,onChange:s,onBlur:o,error:a.passwordRepeat&&r.passwordRepeat}),n.createElement(u.Button,{isDisabled:this.state.updatingUser,title:"Update",applyBorderRadius:!0,type:"submit",iconAfter:this.state.updatingUser?n.createElement("i",{className:"fa fa-pulse fa-spinner"}):null,classes:{component:i.submitBtn}}))},t.prototype._renderForm=function(){var e=this.props.classes;return n.createElement(o.a,{item:!0,xs:12},n.createElement("div",{className:e.middleContainer},n.createElement("img",{className:e.mailSentIcon,src:r(995)}),n.createElement("div",{className:e.messageWrapper},n.createElement("div",{className:e.messageTitle},"Invited"),n.createElement("div",{className:e.messageDesc},"Update your details")),n.createElement(i.Formik,{initialValues:{firstName:"",lastName:"",password:"",passwordRepeat:""},validationSchema:c.object().shape({firstName:c.string().required("Firstname is required!"),lastName:c.string().required("Lastname is required!"),password:c.string().required("Password is required!"),passwordRepeat:c.string().oneOf([c.ref("password"),null],"Password does not match").required("Confirm Password is required!")}),onSubmit:this._updateUser},this._renderFormContent.bind(this))))},t.prototype.render=function(){var e=this.props,t=e.classes,r=e.location.search,a=void 0===r?"":r,s=l.parse(a);return n.createElement(u.ErrorBoundary,null,n.createElement("div",{className:t.page},n.createElement(o.a,{container:!0,justify:"center"},"update"===s.target_type&&this._renderForm())))},t}(n.Component);t.default=Object(p.compose)(Object(u.withStyles)(h.a),Object(f.withUpdateUser)())(b)}.call(this,r(21))}}]);