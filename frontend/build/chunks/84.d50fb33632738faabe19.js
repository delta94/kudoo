(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{2346:function(e,t,n){"use strict";n.r(t);var a,o=n(0),i=n.n(o),r=n(15),s=n(34),c=n(7),l=n.n(c),p=n(9),m=n.n(p),d=n(2),f=n(5),u=n(101),E=n(4),g=n.n(E),y=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),N=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return y(t,e),t.prototype.componentDidMount=function(){this.props.actions.updateHeaderTitle("Configuration")},t.prototype.render=function(){var e=this.props,t=e.classes,n=e.profile,a=e.configToShow,o=m()(n,(function(e){return e.selectedCompany.id}))||"",r=m()(n,(function(e){return e.selectedCompany.owner}))||"";return i.a.createElement(d.ErrorBoundary,null,i.a.createElement("div",{className:t.page},i.a.createElement(u.a,{className:t.closeIconWrapper,to:f.a.DASHBOARD()},i.a.createElement("i",{className:l()("icon icon-close")})),i.a.createElement(g.a,{container:!0,classes:{container:t.aboveRow}},a.includes("UserAccountSettings")&&i.a.createElement(g.a,{item:!0,xs:12,sm:6},i.a.createElement("div",{className:t.greyHeading},"User Account Settings"),i.a.createElement("div",{className:t.linksWrapper},i.a.createElement(u.a,{className:t.whiteLink,to:f.a.ACCOUNT_BASIC_DETAILS()},"Basic Details"),i.a.createElement(u.a,{className:t.whiteLink,to:f.a.ACCOUNT_USER_SECURITY()},"Security"))),r&&a.includes("CompanySettings")&&i.a.createElement(g.a,{item:!0,xs:12,sm:6},i.a.createElement("div",{className:t.greyHeading},"Company Settings"),i.a.createElement("div",{className:t.linksWrapper},i.a.createElement(u.a,{className:t.whiteLink,to:o?f.a.COMPANY_GENERAL_BASICS({companyId:o}):""},"General"),i.a.createElement(u.a,{className:t.whiteLink,to:o?f.a.COMPANY_USERS({companyId:o}):""},"Users"),i.a.createElement(u.a,{className:t.whiteLink,to:o?f.a.COMPANY_BANKING({companyId:o}):""},"Banking"),i.a.createElement(u.a,{className:t.whiteLink,to:o?f.a.COMPANY_INTEGRATIONS({companyId:o}):""},"Integrations"),i.a.createElement(u.a,{className:t.whiteLink,to:o?f.a.COMPANY_SUBSCRIPTION({companyId:o}):""},"Subscription")))),r&&a.includes("TimesheetSettings")&&i.a.createElement(g.a,{container:!0,classes:{container:l()(t.aboveRow)}},i.a.createElement(g.a,{item:!0,xs:12,sm:6},i.a.createElement("div",{className:t.greenHeading},"Timesheet Settings"),i.a.createElement("div",{className:t.linksWrapper},i.a.createElement(u.a,{className:t.whiteLink,to:f.a.TIMESHEET_SETTINGS_LAYOUT()},"Layout"),i.a.createElement(u.a,{className:t.whiteLink,to:f.a.TIMESHEET_SETTINGS_AUTOMATION()},"Automation"))))))},t}(o.Component);t.default=Object(s.compose)(Object(d.withStyles)({page:{backgroundColor:"#333944",display:"flex",flex:1,padding:"20px 0px",flexDirection:"column"},closeIconWrapper:{position:"absolute",top:80,right:10,padding:10,fontSize:25,color:"white",cursor:"pointer"},aboveRow:{borderBottom:"1px solid #3C4556",padding:"20px 50px"},rowContainer:{marginTop:"30px !important",padding:"0px 50px"},greyHeading:{fontFamily:"'roboto condensed',sans-serif",fontSize:25,fontWeight:500,color:"#556782",margin:"10px 0px"},greenHeading:{fontFamily:"'roboto condensed',sans-serif",fontSize:25,fontWeight:500,color:"#2CCFA0",margin:"10px 0px"},linksWrapper:{display:"flex",flexDirection:"column"},greyLink:{color:"#C4C4C4",fontFamily:"'montserrat',sans-serif",fontSize:16,margin:"5px 0px",fontWeight:300,cursor:"pointer",display:"inline-block"},whiteLink:{color:"#fff",fontFamily:"'montserrat',sans-serif",fontSize:16,margin:"5px 0px",fontWeight:300,cursor:"pointer",display:"inline-block"}}),Object(r.b)((function(e){return{profile:e.profile}})))(N)}}]);