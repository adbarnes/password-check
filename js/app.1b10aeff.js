(function(e){function t(t){for(var r,i,o=t[0],c=t[1],l=t[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},s=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/password-check/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"2f0f":function(e,t,a){},"44be":function(e,t,a){},4562:function(e,t,a){"use strict";var r=a("44be"),n=a.n(r);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header",{attrs:{msg:"Header"}}),a("main",[a("Card")],1)],1)},s=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("nav",[r("div",{staticClass:"header-nav__container"},[r("a",{staticClass:"header-nav__logo-link",attrs:{title:"Deuce",href:"/"}},[r("img",{attrs:{src:a("f219"),alt:"Acme"}})]),r("ul",{staticClass:"header-nav__links",attrs:{role:"menubar"}},[r("li",{staticClass:"header-nav__admin-phone",attrs:{role:"menuitem"}},[r("a",{staticClass:"header-nav__admin-phone-number",attrs:{href:"#"}},[e._v("Home")])]),r("li",{staticClass:"header-nav__support-phone",attrs:{role:"menuitem"}},[r("a",{staticClass:"header-nav__support-phone-number",attrs:{href:"#"}},[e._v("About")])]),r("li",{staticClass:"header-nav__support-phone",attrs:{role:"menuitem"}},[r("a",{staticClass:"header-nav__support-phone-number",attrs:{href:"#"}},[e._v("Services")])])])])])])}],c={name:"Header"},l=c,u=(a("a3c1"),a("2877")),d=Object(u["a"])(l,i,o,!1,null,"358fd570",null),p=d.exports,m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"card"},[a("h2",{staticClass:"card__title"},[e._v("Create your account")]),e._m(0),a("Form")],1)])},_=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" Already have an account? "),a("a",{attrs:{href:"/"}},[e._v("Log in")])])}],h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{attrs:{id:"form",action:""}},[a("div",[a("label",{staticClass:"visuallyhidden",attrs:{for:"Full Name"}},[e._v("Full name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{name:"Full Name",type:"text","aria-label":"Full Name",placeholder:"Name",autofocus:"",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),a("div",[a("label",{staticClass:"visuallyhidden",attrs:{for:"Email Address"}},[e._v("Serch:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.emailAddress,expression:"emailAddress"}],attrs:{name:"Email Address","aria-label":"email",type:"email",placeholder:"Email Address",required:""},domProps:{value:e.emailAddress},on:{input:function(t){t.target.composing||(e.emailAddress=t.target.value)}}})]),a("div",[a("label",{staticClass:"visuallyhidden",attrs:{for:"password"}},[e._v("Password:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{name:"Password",type:"password","aria-label":"password",required:"",placeholder:"Password"},domProps:{value:e.password},on:{input:[function(t){t.target.composing||(e.password=t.target.value)},e.checkPassword]}})]),a("div",{staticClass:"card__form__meter"},[a("div",{staticClass:"card__form__meter--container",class:e.password_warning.class},[e._v(e._s(e.password_warning.warning))]),a("meter",{attrs:{min:"0",max:"100",value:e.meter,low:"26",high:"51",optimum:"75"}}),a("span",[e._v(" Your password should be "),a("span",{class:{valid:e.contains_enoughchars}},[e._v("at least 8 characters")]),e._v(", and 3 of the following: ")]),a("ul",[a("li",[a("span",{staticClass:"material-icons",class:{valid:e.contains_lowercase}},[e._v("check_circle")]),e._v("Lowercase characters ")]),a("li",[a("span",{staticClass:"material-icons",class:{valid:e.contains_uppercase}},[e._v("check_circle")]),e._v("Uppercase characters ")]),a("li",[a("span",{staticClass:"material-icons",class:{valid:e.contains_number}},[e._v("check_circle")]),e._v("Numbers ")]),a("li",[a("span",{staticClass:"material-icons",class:{valid:e.contains_special}},[e._v("check_circle")]),e._v("Special characters ")])])]),a("div",{staticClass:"form__checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.marketing_optin,expression:"marketing_optin"}],attrs:{type:"checkbox",name:"Marketing OptIn","aria-label":"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(e.marketing_optin)?e._i(e.marketing_optin,null)>-1:e.marketing_optin},on:{change:function(t){var a=e.marketing_optin,r=t.target,n=!!r.checked;if(Array.isArray(a)){var s=null,i=e._i(a,s);r.checked?i<0&&(e.marketing_optin=a.concat([s])):i>-1&&(e.marketing_optin=a.slice(0,i).concat(a.slice(i+1)))}else e.marketing_optin=n}}}),a("label",{attrs:{for:"checkbox"}},[e._v(" Keep me informed of special offers, product updates, and information relevant to me. ")])]),a("button",{attrs:{role:"button",type:"submit",title:"Create your account"}},[e._v("Create your account")]),e._m(0)])},v=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" By creating your account you agree to the "),a("a",{attrs:{href:"#"}},[e._v("terms & conditions")]),e._v(" and "),a("a",{attrs:{href:"#"}},[e._v("privacy notice")]),e._v(". ")])}],f=(a("4160"),a("159b"),{data:function(){return{name:null,emailAddress:null,password:null,meter:0,meter_status:null,password_length:0,password_class:"",password_strength:"",contains_enoughchars:!1,contains_uppercase:!1,contains_lowercase:!1,contains_number:!1,contains_special:!1,marketing_optin:!1}},methods:{checkPassword:function(){this.password_length=this.password.length;var e=/[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;this.password_length>8?this.contains_enoughchars=!0:this.contains_enoughchars=!1,this.contains_lowercase=/[a-z]/.test(this.password),this.contains_number=/\d/.test(this.password),this.contains_uppercase=/[A-Z]/.test(this.password),this.contains_special=e.test(this.password);var t=0,a=[this.contains_lowercase,this.contains_number,this.contains_uppercase,this.contains_special];a.forEach((function(e){e&&(t+=25)})),this.meter=t}},computed:{password_warning:function(){return 0==this.meter?{warning:"Strong password required",class:"card__form__meter__warning"}:25==this.meter?{warning:"Very weak (not strong enough)",class:"very-weak"}:50==this.meter?{warning:"Weak (not strong enough)",class:"weak"}:75==this.meter?{warning:"Strong",class:"strong"}:{warning:"Very strong",class:"strong"}}}}),g=f,w=(a("91d4"),Object(u["a"])(g,h,v,!1,null,"410d0b58",null)),b=w.exports,y={name:"Card",components:{Form:b}},k=y,C=(a("4562"),Object(u["a"])(k,m,_,!1,null,"f0fe74d0",null)),x=C.exports,A={name:"App",components:{Header:p,Card:x}},O=A,P=(a("034f"),Object(u["a"])(O,n,s,!1,null,null,null)),j=P.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(j)}}).$mount("#app")},"802f":function(e,t,a){},"85ec":function(e,t,a){},"91d4":function(e,t,a){"use strict";var r=a("2f0f"),n=a.n(r);n.a},a3c1:function(e,t,a){"use strict";var r=a("802f"),n=a.n(r);n.a},f219:function(e,t,a){e.exports=a.p+"img/deuce.ee90d131.svg"}});
//# sourceMappingURL=app.1b10aeff.js.map