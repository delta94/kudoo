(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{11:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(652),r=function(e,t){void 0===e&&(e=""),void 0===t&&(t="");var n=e?"error":"success",r=e||t;Object(a.b)(r,{type:n,closeButton:!1,hideProgressBar:!0})}},2157:function(e,t,n){"use strict";(function(e){var a,r=n(0),l=n.n(r),o=n(2),i=n(1003),c=n.n(i),u=n(18),s=n(10),m=n(11),d=n(205),p=n.n(d),f=n(217),b=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),v=function(){return(v=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},h=function(t,n,a,r){return new(a||(a=e))((function(e,l){function o(e){try{c(r.next(e))}catch(e){l(e)}}function i(e){try{c(r.throw(e))}catch(e){l(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,i)}c((r=r.apply(t,n||[])).next())}))},y=function(e,t){var n,a,r,l,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&l[0]?a.return:l[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,l[1])).done)return r;switch(a=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,a=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===l[0]||2===l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],a=0}finally{n=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}},E=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var a=Array(e),r=0;for(t=0;t<n;t++)for(var l=arguments[t],o=0,i=l.length;o<i;o++,r++)a[r]=l[o];return a},g=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return b(t,e),t}(c.a),O=[{readOnly:!0,disableEvents:!0,width:"5rem",description:"This cell represent row number."},{value:"Given Name",type:"column",readOnly:!0,disableEvents:!0},{value:"Family Name",type:"column",readOnly:!0,disableEvents:!0},{value:"Date of Birth",type:"column",readOnly:!0,disableEvents:!0},{value:"Medicare Number",type:"column",readOnly:!0,disableEvents:!0},{value:"Sex",type:"column",readOnly:!0,disableEvents:!0},{readOnly:!0,disableEvents:!0,width:"3rem",description:"This cell represent delete row button."}];t.a=Object(u.compose)(Object(o.withStyles)(f.a),Object(s.withUploadBulkPatients)())((function(e){var t=e.classes,n=e.theme,a=e.uploadBulkPatients,i=Object(r.useState)([O,[{readOnly:!0,disableEvents:!0,description:"This cell represent row number."},{value:""},{value:""},{value:""},{value:""},{value:""},{readOnly:!0,disableEvents:!0,description:"This cell represent delete row button."}]]),c=i[0],u=i[1],s=Object(r.useState)(!1),d=s[0],f=s[1];return l.a.createElement("div",null,l.a.createElement(o.SectionHeader,{title:"Upload Bulk Patients",subtitle:"You can copy paste data from other excel sheets or csv files.",renderLeftPart:function(){return l.a.createElement("div",{className:t.prevNextWrapper},l.a.createElement(o.Button,{title:"Submit",id:"next-button",classes:{component:t.prevNextButton},applyBorderRadius:!0,compactMode:!0,loading:d,buttonColor:n.palette.primary.color2,onClick:function(){return h(void 0,void 0,void 0,(function(){var e,t,n,r,l,o;return y(this,(function(i){switch(i.label){case 0:for(e=c,t=[],n=0;n<e.length;n++)r=e[n],l={givenName:r[1].value,familyName:r[2].value,dateOfBirth:r[3].value,medicareNumber:r[4].value,sex:r[5].value},t.push(l);return f(!0),[4,a({data:t})];case 1:return o=i.sent(),f(!1),o.success?Object(m.a)(null,"All patients are uploaded"):o.error.map((function(e){return Object(m.a)(e)})),[2]}}))}))}}))}}),l.a.createElement(g,{data:c,valueRenderer:function(e){return e.value},className:t.dataSheet,valueViewer:function(e){return"column"===e.cell.type?l.a.createElement("div",{className:t.bulkUploadColumnHeading},e.value):0===e.col?0===e.row?null:l.a.createElement("div",{className:t.bulkUploadColumnHeading},e.row):6===e.col?0===e.row?null:l.a.createElement("div",{className:t.bulkUploadColumnHeading},l.a.createElement(o.Button,{title:l.a.createElement("i",{className:"fa fa-times"}),buttonColor:n.palette.secondary.color2,onClick:function(){return t=e.row,void u((function(e){var n=p()(e);return n.splice(t,1),n}));var t}})):l.a.createElement("div",{className:t.bulkUploadCell},e.value)},dataEditor:function(e){return l.a.createElement(o.TextField,{value:e.value,onChangeText:e.onChange,onKeyDown:e.onKeyDown})},parsePaste:function(e){for(var t=[],n=e.split("\n"),a=0;a<n.length;a++){var r=n[a];r.indexOf("\t")>-1?t[a]=r.split("\t"):r.indexOf(",")>-1&&(t[a]=r.split(","))}return t},onCellsChanged:function(e,t){var n=c.map((function(e){return E(e)}));e.forEach((function(e){var t=e.row,a=e.col,r=e.value;n[t][a]=v(v({},n[t][a]),{value:r})})),t&&t.forEach((function(e){var t=e.row,a=e.col,r=e.value;n[t]||(n[t]=[{readOnly:!0,disableEvents:!0,description:"This cell represent row number."},{value:""},{value:""},{value:""},{value:""},{value:""},{readOnly:!0,disableEvents:!0,description:"This cell represent delete row button."}]),n[t][a]=v(v({},n[t][a]||{}),{value:r})})),u(n)}}),l.a.createElement(o.Button,{title:"Add Row",buttonColor:n.palette.primary.color2,onClick:function(){u((function(e){return E(e,[[{readOnly:!0,disableEvents:!0,description:"This cell represent row number."},{value:""},{value:""},{value:""},{value:""},{value:""},{readOnly:!0,disableEvents:!0,description:"This cell represent delete row button."}]])}))}}))}))}).call(this,n(21))},2160:function(e,t,n){"use strict";(function(e){var a=n(0),r=n.n(a),l=n(4),o=n.n(l),i=n(82),c=n.n(i),u=n(18),s=n(15),m=n(2),d=n(439),p=n(35),f=n.n(p),b=n(39),v=n(9),h=n.n(v),y=n(217),E=function(t,n,a,r){return new(a||(a=e))((function(e,l){function o(e){try{c(r.next(e))}catch(e){l(e)}}function i(e){try{c(r.throw(e))}catch(e){l(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,i)}c((r=r.apply(t,n||[])).next())}))},g=function(e,t){var n,a,r,l,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&l[0]?a.return:l[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,l[1])).done)return r;switch(a=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,a=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===l[0]||2===l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],a=0}finally{n=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}},O=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},x=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var a=Array(e),r=0;for(t=0;t<n;t++)for(var l=arguments[t],o=0,i=l.length;o<i;o++,r++)a[r]=l[o];return a};t.a=Object(u.compose)(Object(m.withStyles)(y.a),Object(s.b)((function(e){return{manualPatientData:h()(e,(function(e){return e.sessionData.newPatient.manualPatient}))||{}}}),{setManualStep1:d.b}))((function(e){var t=e.classes,n=e.theme,a=e.manualPatientData;return r.a.createElement(b.Formik,{initialValues:{title:a.title||"",firstName:a.firstName||"",lastName:a.lastName||"",dateOfBirth:a.dateOfBirth||"",gender:a.gender||"",oneName:a.oneName||!1,currentAddress:a.currentAddress||{street:"",city:"",state:"",country:"",postCode:""},birthAddress:a.birthAddress||{street:"",city:"",state:"",country:"",postCode:""},names:a.names||[]},onSubmit:function(t){return E(void 0,void 0,void 0,(function(){return g(this,(function(n){return t.birthAddress,t.names,t.currentAddress,O(t,["birthAddress","names","currentAddress"]),e.setManualStep1(t),e.goToNextStep(),[2]}))}))}},(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(m.SectionHeader,{title:"Create Patient",subtitle:"Manually create patient",renderLeftPart:function(){return r.a.createElement("div",{className:t.prevNextWrapper},r.a.createElement(m.Button,{title:"Next",id:"next-button",classes:{component:t.prevNextButton},applyBorderRadius:!0,compactMode:!0,buttonColor:n.palette.primary.color2,type:"submit"}))}}),r.a.createElement(o.a,{container:!0,classes:{container:t.content}},r.a.createElement(o.a,{item:!0,xs:12},r.a.createElement(o.a,{container:!0,spacing:40},r.a.createElement(o.a,{item:!0,xs:6},r.a.createElement(c.a,{fullWidth:!0,margin:"dense"},r.a.createElement(m.FormikTextField,{label:"Title",name:"title"})),r.a.createElement(c.a,{fullWidth:!0,margin:"dense"},r.a.createElement(m.FormikTextField,{label:"Given Name",name:"firstName"})),!e.values.oneName&&r.a.createElement(c.a,{fullWidth:!0,margin:"dense"},r.a.createElement(m.FormikTextField,{label:"Family Name",name:"lastName"})),r.a.createElement(c.a,{fullWidth:!0,margin:"dense"},r.a.createElement(m.FormikDatePicker,{label:"Date of Birth",name:"dateOfBirth"})),r.a.createElement(c.a,{fullWidth:!0,margin:"dense"},r.a.createElement(m.FormikDropdown,{label:"Gender",name:"gender",items:[{label:"Male",value:"MALE"},{label:"Female",value:"FEMALE"},{label:"InterSex",value:"INTERSEX"},{label:"Unspecified",value:"UNSPECIFIED"}]}))),r.a.createElement(o.a,{item:!0,xs:6},r.a.createElement(c.a,{fullWidth:!0,margin:"dense"},r.a.createElement(m.FormikCheckbox,{label:"Single Name",name:"oneName",classes:{component:t.checkbox}})),r.a.createElement(c.a,{fullWidth:!0,margin:"dense"},e.values.names.length>0&&r.a.createElement(o.a,{container:!0,spacing:16},e.values.names.map((function(a,l){return r.a.createElement(r.a.Fragment,{key:l},r.a.createElement(o.a,{item:!0,xs:7},r.a.createElement(m.FormikTextField,{label:"Given Name "+(l+1),name:"names."+l+".name",autoComplete:"off"})),r.a.createElement(o.a,{item:!0,xs:3},r.a.createElement(m.Checkbox,{label:"Primary",name:"names."+l+".isPrimary",classes:{component:t.checkbox},value:a.isPrimary,onChange:function(t){var n=x(e.values.names),a=f()(n,{isPrimary:!0});a&&(a.isPrimary=!1),n[l].isPrimary=!0,e.setFieldValue("names",n)}})),e.values.names.length>0&&r.a.createElement(o.a,{item:!0,xs:1},r.a.createElement(m.Button,{title:"X",applyBorderRadius:!0,compactMode:!0,buttonColor:n.palette.secondary.color2,classes:{component:t.removeNameButton},onClick:function(){var t=x(e.values.names);t.splice(l,1),e.setFieldValue("names",t)}})))})))),r.a.createElement(c.a,{margin:"dense"},r.a.createElement(m.Button,{title:"Add Another Name",id:"toggle-veteran-details",applyBorderRadius:!0,compactMode:!0,buttonColor:n.palette.primary.color2,onClick:function(){var t=x(e.values.names);e.setFieldValue("names",x(t,[{name:"",isPrimary:!1}]))}})))),r.a.createElement(o.a,{container:!0,spacing:40},r.a.createElement(o.a,{item:!0,xs:6},r.a.createElement(c.a,{fullWidth:!0,margin:"dense"},r.a.createElement(m.FieldLabel,{label:"Current Address"}),r.a.createElement(m.AddressForm,{keys:{street:"currentAddress.street",city:"currentAddress.city",state:"currentAddress.state",country:"currentAddress.country",postcode:"currentAddress.postCode"}}))),r.a.createElement(o.a,{item:!0,xs:6},r.a.createElement(c.a,{fullWidth:!0,margin:"dense"},r.a.createElement(m.FieldLabel,{label:"Birth Address"}),r.a.createElement(m.AddressForm,{keys:{street:"birthAddress.street",city:"birthAddress.city",state:"birthAddress.state",country:"birthAddress.country",postcode:"birthAddress.postCode"}})))))))}))}))}).call(this,n(21))},2161:function(e,t,n){"use strict";(function(e){var a=n(0),r=n.n(a),l=n(4),o=n.n(l),i=n(82),c=n.n(i),u=n(18),s=n(15),m=n(2),d=n(5),p=n(635),f=n(10),b=n(13),v=n(439),h=n(39),y=n(11),E=n(9),g=n.n(E),O=n(217),x=function(){return(x=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},w=function(t,n,a,r){return new(a||(a=e))((function(e,l){function o(e){try{c(r.next(e))}catch(e){l(e)}}function i(e){try{c(r.throw(e))}catch(e){l(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,i)}c((r=r.apply(t,n||[])).next())}))},N=function(e,t){var n,a,r,l,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&l[0]?a.return:l[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,l[1])).done)return r;switch(a=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,a=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===l[0]||2===l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],a=0}finally{n=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}},C=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=Object(u.compose)(Object(m.withStyles)(O.a),Object(f.withCreatePatient)(),p.a,Object(s.b)((function(e){return{manualPatientData:g()(e,(function(e){return e.sessionData.newPatient.manualPatient}))||{}}}),{resetManualData:v.a}))((function(e){var t=e.classes,n=e.theme,l=e.manualPatientData,i=e.resetManualData,u=e.history,s=Object(a.useState)(!1),p=s[0],f=s[1];console.log(e);return r.a.createElement(h.Formik,{initialValues:{aboriginalStatus:"",healthCareIdentifier:"",medicareNumber:"",dvaCardType:"",DVA:""},validationSchema:b.object().shape({medicareNumber:b.string().required("Required").test("validate-medicare-number","Invalid Medicare Number",(function(e){var t=(e||"").replace(/[^\d]/g,""),n=new RegExp("^([2-6]\\d{7})(\\d)"),a=t.match(n);if(a){var r=a[1],l=a[2];return[1,3,7,9,1,3,7,9].reduce((function(e,t,n,a){return e+Number(r[n])*Number(t)}),0)%10===Number(l)}return!1}))}),onSubmit:function(t){return w(void 0,void 0,void 0,(function(){var n,a,r,o,c,s;return N(this,(function(m){switch(m.label){case 0:n=l.currentAddress,a=l.birthAddress,r=l.names,o=void 0===r?[]:r,c=C(l,["currentAddress","birthAddress","names"]),m.label=1;case 1:return m.trys.push([1,3,,4]),[4,e.createPatient({data:x(x({},c),{address:{create:n},birthAddress:{create:a},aboriginalStatus:t.aboriginalStatus,healthcareConcession:t.healthCareIdentifier,medicareNumber:t.medicareNumber,dvaCardType:t.dvaCardType,DVA:t.DVA,names:o.length>0?{create:o}:void 0})})];case 2:return m.sent(),i(),Object(y.a)(null,"Patient created successfully"),u.push(d.a.PATIENTS()),[3,4];case 3:return s=m.sent(),Object(y.a)(s.toString()),[3,4];case 4:return[2]}}))}))}},(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(m.SectionHeader,{title:"Step 2",subtitle:"",renderLeftPart:function(){return r.a.createElement("div",{className:t.prevNextWrapper},r.a.createElement(m.Button,{title:"Next",id:"next-button",classes:{component:t.prevNextButton},applyBorderRadius:!0,compactMode:!0,buttonColor:n.palette.primary.color2,type:"submit"}))}}),r.a.createElement(o.a,{container:!0,classes:{container:t.content}},r.a.createElement(o.a,{item:!0,xs:12},r.a.createElement(o.a,{container:!0,spacing:40},r.a.createElement(o.a,{item:!0,xs:6},r.a.createElement(c.a,{fullWidth:!0,margin:"dense"},r.a.createElement(m.FormikDropdown,{label:"Aboriginal Status",name:"aboriginalStatus",items:[{label:"ABORIGINAL_NOT_TORRES",value:"ABORIGINAL_NOT_TORRES"},{label:"TORRES_NOT_ABORIGINAL",value:"TORRES_NOT_ABORIGINAL"},{label:"BOTH",value:"BOTH"},{label:"NEITHER",value:"NEITHER"},{label:"NOT_STATED",value:"NOT_STATED"}]})),r.a.createElement(c.a,{fullWidth:!0,margin:"dense"},r.a.createElement(m.FormikTextField,{label:"Individual HealthCare Identifier",name:"healthCareIdentifier"})),r.a.createElement(c.a,{fullWidth:!0,margin:"dense"},r.a.createElement(m.FormikTextField,{label:"Medicare Number",name:"medicareNumber"})),p&&r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{fullWidth:!0,margin:"dense"},r.a.createElement(m.FormikTextField,{label:"Veteran Card Type",name:"dvaCardType"})),r.a.createElement(c.a,{fullWidth:!0,margin:"dense"},r.a.createElement(m.FormikTextField,{label:"Veteran Number",name:"DVA"}))),r.a.createElement(c.a,{margin:"dense"},r.a.createElement(m.Button,{title:p?"Remove Veteran Details":"Add Veteran Details",id:"toggle-veteran-details",applyBorderRadius:!0,compactMode:!0,buttonColor:p?n.palette.secondary.color2:n.palette.primary.color2,onClick:function(){f((function(e){return!e}))}})))))))}))}))}).call(this,n(21))},217:function(e,t,n){"use strict";t.a=function(e){return{page:{flex:1,display:"flex",flexDirection:"column",position:"relative"},allSteps:{padding:"40px 20px 100px",flex:1},prevNextWrapper:{display:"flex",alignItems:"center"},prevNextButton:{width:180,margin:"0px 10px"},content:{marginTop:"50px !important"},cancelButtonText:{color:e.palette.primary.color3},dataSheet:{width:"100%",marginTop:25},bulkUploadColumnHeading:{height:52,alignItems:"center",justifyContent:"center",display:"flex"},bulkUploadCell:{height:52,alignItems:"center",justifyContent:"center",display:"flex"},checkbox:{paddingTop:37},removeNameButton:{marginTop:37}}}},2339:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(2),o=n(15),i=n(18),c=n(71),u=n.n(c),s=n(27),m=function(){return(m=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},d=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var a=Array(e),r=0;for(t=0;t<n;t++)for(var l=arguments[t],o=0,i=l.length;o<i;o++,r++)a[r]=l[o];return a},p=Object(l.withStyles)((function(e){return{page:{flex:1,display:"flex",flexDirection:"column",position:"relative"},allSteps:{padding:"40px 20px 100px",flex:1},cancelButtonText:{color:e.palette.primary.color3}}}))((function(e){var t=e.classes,n=e.theme,o=e.onCompanyChange,i=e.onCancel,c=e.steps,p=e.onStepChange,f=e.forwardedRef;Object(a.useImperativeHandle)(f,(function(){return{goToNextStep:v,goToPrevStep:h}}));var b=function(){return u()(c,{active:!0})},v=function(){var e=b();e<=c.length-1&&(E(e),y(e+1))},h=function(){var e=b();e>0&&(g(e),y(e-1))},y=function(e){var t=d(c),n=u()(t,{active:!0});n>-1&&(t[n]=m(m({},t[n]),{active:!1}),t[e]=m(m({},t[e]),{active:!0})),p&&p(t)},E=function(e){var t=d(c);t[e]=m(m({},t[e]),{visited:!0}),p&&p(t)},g=function(e){var t=d(c);t[e]=m(m({},t[e]),{visited:!1}),p&&p(t)};return r.a.createElement(l.ErrorBoundary,null,r.a.createElement(s.a,{onChange:o},r.a.createElement("div",{className:t.page},r.a.createElement("div",{className:t.allSteps},r.a.createElement(l.WizardSteps,{steps:c})),r.a.createElement("div",null,r.a.createElement(l.Button,{title:"Cancel",buttonColor:n.palette.grey[200],classes:{text:t.cancelButtonText},onClick:i})))))})),f=r.a.forwardRef((function(e,t){return r.a.createElement(p,m({},e,{forwardedRef:t}))})),b=n(9),v=n.n(b),h=n(4),y=n.n(h),E=n(82),g=n.n(E),O=n(439),x=n(217),w=Object(i.compose)(Object(l.withStyles)(x.a),Object(o.b)((function(e){return{patientCreationOption:v()(e,(function(e){return e.sessionData.newPatient.patientCreationOption}))}}),{updatePatientCreationOption:O.c}))((function(e){var t=e.classes,n=e.theme,a=e.patientCreationOption,o=e.goToNextStep,i=e.updatePatientCreationOption,c=function(e){return function(){i(e)}};return r.a.createElement("div",null,r.a.createElement(l.SectionHeader,{title:"Create a new patient",subtitle:"How would you like to create patient?",renderLeftPart:function(){return r.a.createElement("div",{className:t.prevNextWrapper},r.a.createElement(l.Button,{title:"Next",id:"next-button",classes:{component:t.prevNextButton},applyBorderRadius:!0,compactMode:!0,buttonColor:n.palette.primary.color2,onClick:o}))}}),r.a.createElement(y.a,{container:!0,classes:{container:t.content}},r.a.createElement(y.a,{item:!0,xs:12,sm:6},r.a.createElement(g.a,{fullWidth:!0,margin:"dense"},r.a.createElement(l.RadioButton,{label:"Bulk upload",name:"patientCreationOption",value:"BULK_UPLOAD"===a,onChange:c("BULK_UPLOAD")})),r.a.createElement(g.a,{fullWidth:!0,margin:"dense"},r.a.createElement(l.RadioButton,{label:"Search for individual patient",name:"patientCreationOption",value:"SEARCH"===a,onChange:c("SEARCH")})),r.a.createElement(g.a,{fullWidth:!0,margin:"dense"},r.a.createElement(l.RadioButton,{label:"Manually load patient details",name:"patientCreationOption",value:"MANUAL"===a,onChange:c("MANUAL")})))))})),N=n(2157),C=n(39),S=Object(l.withStyles)(x.a)((function(e){var t=e.classes,n=e.theme;return r.a.createElement(C.Formik,{initialValues:{aboriginalStatus:"",healthCareIdentifier:"",medicareNumber:""},onSubmit:function(e){console.log(e)}},(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(l.SectionHeader,{title:"Search patients",subtitle:"",renderLeftPart:function(){return r.a.createElement("div",{className:t.prevNextWrapper},r.a.createElement(l.Button,{title:"Search Patients",id:"search-button",classes:{component:t.prevNextButton},applyBorderRadius:!0,compactMode:!0,buttonColor:n.palette.primary.color2,type:"submit"}))}}),r.a.createElement(y.a,{container:!0,classes:{container:t.content}},r.a.createElement(y.a,{item:!0,xs:12,sm:6},r.a.createElement(g.a,{fullWidth:!0,margin:"dense"},r.a.createElement(l.FormikTextField,{label:"Aboriginal Status",name:"aboriginalStatus"})),r.a.createElement(g.a,{fullWidth:!0,margin:"dense"},r.a.createElement(l.FormikTextField,{label:"Individual Healthcare Identifier",name:"healthCareIdentifier"})),r.a.createElement(g.a,{fullWidth:!0,margin:"dense"},r.a.createElement(l.FormikTextField,{label:"Medicare Number",name:"medicareNumber"})))))}))})),A=n(2160),T=n(2161),k=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var a=Array(e),r=0;for(t=0;t<n;t++)for(var l=arguments[t],o=0,i=l.length;o<i;o++,r++)a[r]=l[o];return a};t.default=Object(i.compose)(Object(l.withStyles)(x.a),Object(o.b)((function(e){return{patientCreationOption:v()(e,(function(e){return e.sessionData.newPatient.patientCreationOption}))}})))((function(e){var t=Object(a.useRef)(null),n=function(){t.current.goToNextStep()},o=[{label:"Patient",active:!0,component:r.a.createElement(w,{goToNextStep:n})},{label:"Next",component:r.a.createElement("div",null)}],i=Object(a.useState)(o),c=i[0],u=i[1];return Object(a.useEffect)((function(){var t=[];"BULK_UPLOAD"===e.patientCreationOption?t=[{label:"Bulk Upload",component:r.a.createElement(N.a,null)}]:"SEARCH"===e.patientCreationOption?t=[{label:"Patient Search",component:r.a.createElement(S,{goToNextStep:n})}]:"MANUAL"===e.patientCreationOption&&(t=[{label:"Manual Entry",component:r.a.createElement(A.a,{goToNextStep:n})},{label:"More Details",component:r.a.createElement(T.a,{goToNextStep:n})}]),u(k([o[0]],t))}),[e.patientCreationOption]),r.a.createElement(l.ErrorBoundary,null,r.a.createElement(f,{steps:c,onStepChange:u,ref:t}))}))},27:function(e,t,n){"use strict";var a=n(0),r=n(18),l=n(15),o=n(317),i=n(9),c=n.n(i);t.a=Object(r.compose)(Object(l.b)((function(e){return{selectedCompany:c()(e,(function(e){return e.profile.selectedCompany}))}})))((function(e){var t=e.selectedCompany,n=e.onChange,r=e.children;return Object(o.a)((function(){n(t)}),[t]),a.createElement(a.Fragment,null,r)}))},317:function(e,t,n){"use strict";var a=n(30),r=n.n(a),l=n(0);function o(e){var t,n,a=Object(l.useRef)();return t=e,n=a.current,r()(t,n)||(a.current=e),a.current}t.a=function(e,t){Object(l.useEffect)(e,o(t))}}}]);