(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{2223:function(e,t,i){var n=i(2224);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};i(186)(n,r);n.locals&&(e.exports=n.locals)},2224:function(e,t,i){(e.exports=i(130)(!1)).push([e.i,".verify-email-page{background-color:#f7f7fc;padding:45px;font-family:'montserrat', sans-serif;height:calc(100vh - 270px);display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center}.verify-email-page .title{color:#2598d2;margin:10px 0px;font-family:Roboto, sans-serif;font-size:32px;font-weight:500}.verify-email-page .middle-container{max-width:400px;margin:0px auto;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.verify-email-page .middle-container .mail-sent-icon{width:100px;height:100px;margin:30px 0px 25px 0px}.verify-email-page .middle-container .message-wrapper{line-height:24px}.verify-email-page .middle-container .message-wrapper .message-title{text-align:center;color:#2598d2;font-weight:500;margin-bottom:10px;font-size:16px}.verify-email-page .middle-container .message-wrapper .message-desc{text-align:center;color:#a8a8a8;margin-bottom:20px;font-size:15px}.verify-email-page .middle-container .resend-btn{margin-bottom:15px}.verify-email-page .middle-container .signin-btn{padding:15px 0px}\n",""])},2278:function(e,t,i){"use strict";i.r(t);var n,r=i(0),a=i(15),o=i(159),s=i(4),l=i.n(s),c=i(2),m=i(477),p=(i(2223),n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),d=function(){return(d=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return p(t,e),t.prototype._renderConfirmEmail=function(){return r.createElement("div",null,r.createElement("div",{className:"title"},"Thank you for signing up "),r.createElement(l.a,{container:!0,justify:"center"},r.createElement(l.a,{item:!0,xs:12},r.createElement("div",{className:"middle-container"},r.createElement("img",{className:"mail-sent-icon",src:i(634)}),r.createElement("div",{className:"message-wrapper"},r.createElement("div",{className:"message-title"},"Verify your email"),r.createElement("div",{className:"message-desc"},"Please check your email and verfiy your account by clicking the link provided.")),r.createElement(c.Button,{href:"/login",classes:{component:"signin-btn"},isDisabled:!1,width:"100%",title:"Back to sign in",applyBorderRadius:!0,target:"_self"})))))},t.prototype._renderConfirmEmailSuccess=function(){return r.createElement("div",null,r.createElement("div",{className:"title"},"Your email has been verified!"),r.createElement(l.a,{container:!0,justify:"center"},r.createElement(l.a,{item:!0,xs:12},r.createElement("div",{className:"middle-container"},r.createElement("img",{className:"mail-sent-icon",src:i(634)}),r.createElement("div",{className:"message-wrapper"},r.createElement("div",{className:"message-desc"},"You are officially a part of the Kudoo team. ",r.createElement("br",null)," Let’s get started.")),r.createElement(c.Button,{href:"/login",classes:{component:"signin-btn"},isDisabled:!1,width:"100%",title:"Back to sign in",applyBorderRadius:!0,target:"_self"})))))},t.prototype._renderConfirmEmailError=function(){return r.createElement("div",null,r.createElement("div",{className:"title"},"Link is expired or invalid."),r.createElement(l.a,{container:!0,justify:"center"},r.createElement(l.a,{item:!0,xs:12},r.createElement("div",{className:"middle-container"},r.createElement("img",{className:"mail-sent-icon",src:i(634)}),r.createElement(c.Button,{href:"/login",classes:{component:"signin-btn"},isDisabled:!1,width:"100%",title:"Back to sign in",applyBorderRadius:!0,target:"_self"})))))},t.prototype.render=function(){var e=this.props.match.params;return r.createElement(c.ErrorBoundary,null,r.createElement("div",{className:"verify-email-page"},!e.status&&this._renderConfirmEmail(),"success"===e.status&&this._renderConfirmEmailSuccess(),("invalid"===e.status||"expired"===e.status)&&this._renderConfirmEmailError()))},t}(r.Component);t.default=Object(a.b)((function(e){return{profile:e.profile}}),(function(e){return{actions:Object(o.bindActionCreators)(d({},m.a),e)}}))(f)}}]);