(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-131ffe4c"],{"14c3":function(t,e,a){var n=a("c6b6"),r=a("9263");t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var i=a.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},5319:function(t,e,a){"use strict";var n=a("d784"),r=a("825a"),i=a("7b0b"),c=a("50c4"),o=a("a691"),s=a("1d80"),l=a("8aa5"),u=a("14c3"),d=Math.max,f=Math.min,p=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,m=/\$([$&'`]|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,a,n){var g=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=n.REPLACE_KEEPS_$0,x=g?"$":"$0";return[function(a,n){var r=s(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,r,n):e.call(String(r),a,n)},function(t,n){if(!g&&b||"string"===typeof n&&-1===n.indexOf(x)){var i=a(e,t,this,n);if(i.done)return i.value}var s=r(t),p=String(this),v="function"===typeof n;v||(n=String(n));var m=s.global;if(m){var E=s.unicode;s.lastIndex=0}var C=[];while(1){var w=u(s,p);if(null===w)break;if(C.push(w),!m)break;var y=String(w[0]);""===y&&(s.lastIndex=l(p,c(s.lastIndex),E))}for(var k="",S=0,I=0;I<C.length;I++){w=C[I];for(var A=String(w[0]),R=d(f(o(w.index),p.length),0),$=[],P=1;P<w.length;P++)$.push(h(w[P]));var T=w.groups;if(v){var N=[A].concat($,R,p);void 0!==T&&N.push(T);var U=String(n.apply(void 0,N))}else U=_(A,p,R,$,T,n);R>=S&&(k+=p.slice(S,R)+U,S=R+A.length)}return k+p.slice(S)}];function _(t,a,n,r,c,o){var s=n+t.length,l=r.length,u=m;return void 0!==c&&(c=i(c),u=v),e.call(o,u,(function(e,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,n);case"'":return a.slice(s);case"<":o=c[i.slice(1,-1)];break;default:var u=+i;if(0===u)return e;if(u>l){var d=p(u/10);return 0===d?e:d<=l?void 0===r[d-1]?i.charAt(1):r[d-1]+i.charAt(1):e}o=r[u-1]}return void 0===o?"":o}))}}))},6547:function(t,e,a){var n=a("a691"),r=a("1d80"),i=function(t){return function(e,a){var i,c,o=String(r(e)),s=n(a),l=o.length;return s<0||s>=l?t?"":void 0:(i=o.charCodeAt(s),i<55296||i>56319||s+1===l||(c=o.charCodeAt(s+1))<56320||c>57343?t?o.charAt(s):i:t?o.slice(s,s+2):c-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"6c69":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"view",style:{animation:t.$loaded?"bottomElation 0.5s both":"bottomElation 0.5s 1s both"}},[a("h2",{staticClass:"contact-title"},[t._v("Skontaktuj sie z nami!")]),a("iframe",{staticClass:"map",staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2311.9395646375056!2d18.08398021578049!3d54.58743898025791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fdb8af86a5071b%3A0x4ddfccfb000db595!2sJagodowa%2017%2C%2084-242%20K%C4%99b%C5%82owo!5e0!3m2!1spl!2spl!4v1607187845546!5m2!1spl!2spl",width:"1000",height:"500",frameborder:"0",allowfullscreen:"","aria-hidden":"false",tabindex:"0"}}),a("div",{staticClass:"info"},[a("div",{staticClass:"address"},[t._m(0),a("br"),a("a",{staticClass:"address__link",attrs:{href:"https://prod.ceidg.gov.pl/CEIDG/CEIDG.Public.UI/SearchDetails.aspx?Id=bcc6424f-2d34-4602-94bc-5bb5ad48faf6",target:"_blank"}},[a("fa-icon",{staticClass:"address__link__icon",attrs:{icon:"id-card"}}),t._v(" NIP 958-095-92-20 ")],1),a("a",{staticClass:"address__link",attrs:{href:"mailto:kamilalewko@wp.pl",target:"_blank"}},[a("fa-icon",{staticClass:"address__link__icon",attrs:{icon:"envelope"}}),t._v(" kamilalewko@wp.pl ")],1),a("div",{staticClass:"social-media"},[a("a",{attrs:{href:"https://www.facebook.com/cichydworek",target:"_blank"}},[a("fa-icon",{staticClass:"social-media__icon",attrs:{icon:{prefix:"fab",iconName:"facebook-square"}}})],1),a("a",{attrs:{href:"https://www.messenger.com/t/100658321286481",target:"_blank"}},[a("fa-icon",{staticClass:"social-media__icon",attrs:{icon:{prefix:"fab",iconName:"facebook-messenger"}}})],1)])]),a("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.sendEmail(e)}}},[a("div",{staticClass:"input-div"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",attrs:{id:"name",type:"text",placeholder:" ",pattern:"^.{3,}$",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),a("label",{staticClass:"label",attrs:{for:"name"}},[t._v("Imię")])]),a("div",{staticClass:"input-div"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{id:"email",type:"email",placeholder:" ",pattern:"^\\S+@\\S+\\.\\S+$",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("label",{staticClass:"label",attrs:{for:"email"}},[t._v("Email")])]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"content",attrs:{required:"",placeholder:"Co chcesz nam przekazać?"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._v(" "),a("button",{staticClass:"submit",attrs:{type:"submit"}},[t._v(" Wyślij "),a("fa-icon",{staticClass:"submit-icon",attrs:{icon:"envelope"}})],1)])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"address-link",attrs:{href:"https://goo.gl/maps/THdsmhM3zskfnZNA8",target:"_blank"}},[a("div",{staticClass:"company-name"},[a("span",{staticClass:"company-name--letter"},[t._v("C")]),t._v("ichy "),a("span",{staticClass:"company-name--letter"},[t._v("D")]),t._v("worek")]),a("div",[t._v("ul. Jagodowa 17")]),a("div",[t._v("84-242 Kębłowo")])])}],i=(a("99af"),a("b0c0"),a("ac1f"),a("5319"),{name:"Contact",data:function(){return{name:"",email:"",content:""}},methods:{sendEmail:function(){this.$db.collection("emails").add({name:this.name,email:this.email,content:this.content}),window.open("mailto:kamilalewko@wp.pl?subject=".concat(this.name,"&body=Imię: ").concat(this.name,"%0AEmail: ").concat(this.email,'%0A%0A"').concat(this.content.replace(/\n/g,"%0A"),'"'))}}}),c=i,o=(a("f037"),a("2877")),s=Object(o["a"])(c,n,r,!1,null,"860f0f54",null);e["default"]=s.exports},8418:function(t,e,a){"use strict";var n=a("c04e"),r=a("9bf2"),i=a("5c6c");t.exports=function(t,e,a){var c=n(e);c in t?r.f(t,c,i(0,a)):t[c]=a}},"8aa5":function(t,e,a){"use strict";var n=a("6547").charAt;t.exports=function(t,e,a){return e+(a?n(t,e).length:1)}},9017:function(t,e,a){},9263:function(t,e,a){"use strict";var n=a("ad6d"),r=a("9f7f"),i=RegExp.prototype.exec,c=String.prototype.replace,o=i,s=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=r.UNSUPPORTED_Y||r.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=s||u||l;d&&(o=function(t){var e,a,r,o,d=this,f=l&&d.sticky,p=n.call(d),v=d.source,m=0,h=t;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),h=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(v="(?: "+v+")",h=" "+h,m++),a=new RegExp("^(?:"+v+")",p)),u&&(a=new RegExp("^"+v+"$(?!\\s)",p)),s&&(e=d.lastIndex),r=i.call(f?a:d,h),f?r?(r.input=r.input.slice(m),r[0]=r[0].slice(m),r.index=d.lastIndex,d.lastIndex+=r[0].length):d.lastIndex=0:s&&r&&(d.lastIndex=d.global?r.index+r[0].length:e),u&&r&&r.length>1&&c.call(r[0],a,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=o},"99af":function(t,e,a){"use strict";var n=a("23e7"),r=a("d039"),i=a("e8b5"),c=a("861d"),o=a("7b0b"),s=a("50c4"),l=a("8418"),u=a("65f0"),d=a("1dde"),f=a("b622"),p=a("2d00"),v=f("isConcatSpreadable"),m=9007199254740991,h="Maximum allowed index exceeded",g=p>=51||!r((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),b=d("concat"),x=function(t){if(!c(t))return!1;var e=t[v];return void 0!==e?!!e:i(t)},_=!g||!b;n({target:"Array",proto:!0,forced:_},{concat:function(t){var e,a,n,r,i,c=o(this),d=u(c,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?c:arguments[e],x(i)){if(r=s(i.length),f+r>m)throw TypeError(h);for(a=0;a<r;a++,f++)a in i&&l(d,f,i[a])}else{if(f>=m)throw TypeError(h);l(d,f++,i)}return d.length=f,d}})},"9f7f":function(t,e,a){"use strict";var n=a("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,a){"use strict";var n=a("23e7"),r=a("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,e,a){"use strict";var n=a("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,a){"use strict";a("ac1f");var n=a("6eeb"),r=a("d039"),i=a("b622"),c=a("9263"),o=a("9112"),s=i("species"),l=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));t.exports=function(t,e,a,d){var v=i(t),m=!r((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),h=m&&!r((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[s]=function(){return a},a.flags="",a[v]=/./[v]),a.exec=function(){return e=!0,null},a[v](""),!e}));if(!m||!h||"replace"===t&&(!l||!u||f)||"split"===t&&!p){var g=/./[v],b=a(v,""[t],(function(t,e,a,n,r){return e.exec===c?m&&!r?{done:!0,value:g.call(e,a,n)}:{done:!0,value:t.call(a,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),x=b[0],_=b[1];n(String.prototype,t,x),n(RegExp.prototype,v,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}d&&o(RegExp.prototype[v],"sham",!0)}},f037:function(t,e,a){"use strict";a("9017")}}]);
//# sourceMappingURL=chunk-131ffe4c.ac0acf0a.js.map