try{
(()=>{var Do=Object.create;var Ge=Object.defineProperty;var qo=Object.getOwnPropertyDescriptor;var Wo=Object.getOwnPropertyNames;var jo=Object.getPrototypeOf,Go=Object.prototype.hasOwnProperty;var ve=(t,e)=>()=>(t&&(e=t(t=0)),e);var b=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Ko=(t,e,o,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Wo(e))!Go.call(t,a)&&a!==o&&Ge(t,a,{get:()=>e[a],enumerable:!(r=qo(e,a))||r.enumerable});return t};var F=(t,e,o)=>(o=t!=null?Do(jo(t)):{},Ko(e||!t||!t.__esModule?Ge(o,"default",{value:t,enumerable:!0}):o,t));var n=ve(()=>{});var i=ve(()=>{});var s=ve(()=>{});var xe=b((qn,re)=>{n();i();s();(function(){"use strict";var t={}.hasOwnProperty;function e(){for(var a="",c=0;c<arguments.length;c++){var d=arguments[c];d&&(a=r(a,o(d)))}return a}function o(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return e.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var c="";for(var d in a)t.call(a,d)&&a[d]&&(c=r(c,d));return c}function r(a,c){return c?a?a+" "+c:a+c:a}typeof re<"u"&&re.exports?(e.default=e,re.exports=e):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return e}):window.classNames=e})()});var Ze=b((si,Je)=>{"use strict";n();i();s();var zo="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";Je.exports=zo});var ot=b((ui,tt)=>{"use strict";n();i();s();var Vo=Ze();function Qe(){}function et(){}et.resetWarningCache=Qe;tt.exports=function(){function t(r,a,c,d,g,f){if(f!==Vo){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}t.isRequired=t;function e(){return t}var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:et,resetWarningCache:Qe};return o.PropTypes=o,o}});var K=b((hi,rt)=>{n();i();s();rt.exports=ot()();var fi,mi});var ut=b((ji,pt)=>{"use strict";n();i();s();pt.exports=function(t,e,o){var r=this;return t=t instanceof Array?t:[t],r.bindMultiple(t,e,o),r}});var dt=b((zi,lt)=>{"use strict";n();i();s();lt.exports=function(t,e,o){for(var r=this,a=0;a<t.length;++a)r.bindSingle(t[a],e,o)}});var ft=b((Xi,gt)=>{"use strict";n();i();s();gt.exports=function(t,e){var o=this;return o.bind(t,function(){},e)}});var ht=b((es,mt)=>{"use strict";n();i();s();mt.exports=function(t,e){var o=this;return o.directMap[t+":"+e]&&o.directMap[t+":"+e]({},t),this}});var vt=b((ns,bt)=>{"use strict";n();i();s();bt.exports=function(){var t=this;return t.callbacks={},t.directMap={},this}});var xt=b((cs,yt)=>{"use strict";n();i();s();yt.exports=function(t,e){if((" "+e.className+" ").indexOf(" combokeys ")>-1)return!1;var o=e.tagName.toLowerCase();return o==="input"||o==="select"||o==="textarea"||e.isContentEditable}});var ae=b((ds,Tt)=>{"use strict";n();i();s();Tt.exports=function(t){return t==="shift"||t==="ctrl"||t==="alt"||t==="meta"}});var _t=b((hs,Et)=>{"use strict";n();i();s();Et.exports=function(t,e,o){var r=this,a,c,d={},g=0,f=!1,h,m;for(a=r.getMatches(t,e,o),c=0;c<a.length;++c)a[c].seq&&(g=Math.max(g,a[c].level));for(c=0;c<a.length;++c){if(a[c].seq){if(a[c].level!==g)continue;f=!0,d[a[c].seq]=1,r.fireCallback(a[c].callback,o,a[c].combo,a[c].seq);continue}f||r.fireCallback(a[c].callback,o,a[c].combo)}m=o.type==="keypress"&&r.ignoreNextKeypress,h=ae(),o.type===r.nextExpectedAction&&!h(t)&&!m&&r.resetSequences(d),r.ignoreNextKeypress=f&&o.type==="keydown"}});var Oe=b((xs,ce)=>{n();i();s();ce.exports=wt;ce.exports.on=wt;ce.exports.off=Zo;function wt(t,e,o,r){return!t.addEventListener&&(e="on"+e),(t.addEventListener||t.attachEvent).call(t,e,o,r),o}function Zo(t,e,o,r){return!t.removeEventListener&&(e="on"+e),(t.removeEventListener||t.detachEvent).call(t,e,o,r),o}});var Se=b((ws,pe)=>{"use strict";n();i();s();pe.exports={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",173:"minus",187:"plus",189:"minus",224:"meta"};for(R=1;R<20;++R)pe.exports[111+R]="f"+R;var R;for(R=0;R<=9;++R)pe.exports[R+96]=R});var St=b((ks,Ot)=>{"use strict";n();i();s();Ot.exports={106:"*",107:"plus",109:"minus",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"}});var Ce=b((As,Ct)=>{"use strict";n();i();s();Ct.exports=function(t){var e,o;if(e=Se(),o=St(),t.type==="keypress"){var r=String.fromCharCode(t.which);return t.shiftKey||(r=r.toLowerCase()),r}return e[t.which]!==void 0?e[t.which]:o[t.which]!==void 0?o[t.which]:String.fromCharCode(t.which).toLowerCase()}});var Pt=b((Is,kt)=>{"use strict";n();i();s();kt.exports=function(t){var e=[];return t.shiftKey&&e.push("shift"),t.altKey&&e.push("alt"),t.ctrlKey&&e.push("ctrl"),t.metaKey&&e.push("meta"),e}});var Mt=b((qs,Rt)=>{"use strict";n();i();s();Rt.exports=function(t){var e=this,o,r;typeof t.which!="number"&&(t.which=t.keyCode),o=Ce();var a=o(t);if(a!==void 0){if(t.type==="keyup"&&e.ignoreNextKeyup===a){e.ignoreNextKeyup=!1;return}r=Pt(),e.handleKey(a,r(t),t)}}});var Lt=b((Ks,At)=>{"use strict";n();i();s();At.exports=function(){var t=this,e=Oe(),o=t.element;t.eventHandler=Mt().bind(t),e(o,"keypress",t.eventHandler),e(o,"keydown",t.eventHandler),e(o,"keyup",t.eventHandler)}});var Ft=b((Ys,Ht)=>{"use strict";n();i();s();Ht.exports=function(t,e,o,r,a){var c=this;c.directMap[t+":"+o]=e,t=t.replace(/\s+/g," ");var d=t.split(" "),g;if(d.length>1){c.bindSequence(t,d,e,o);return}g=c.getKeyInfo(t,o),c.callbacks[g.key]=c.callbacks[g.key]||[],c.getMatches(g.key,g.modifiers,{type:g.action},r,t,a),c.callbacks[g.key][r?"unshift":"push"]({callback:e,modifiers:g.modifiers,action:g.action,seq:r,level:a,combo:t})}});var Nt=b((Zs,It)=>{"use strict";n();i();s();It.exports=function(t){return t==="+"?["+"]:t.split("+")}});var Dt=b((oa,Bt)=>{"use strict";n();i();s();Bt.exports={option:"alt",command:"meta",return:"enter",escape:"esc",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"}});var Wt=b((sa,qt)=>{"use strict";n();i();s();qt.exports={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"}});var Gt=b((ua,jt)=>{"use strict";n();i();s();jt.exports=function(t,e){var o=this,r,a,c,d,g=[],f,h,m;for(r=Nt(),a=r(t),f=Dt(),h=Wt(),m=ae(),d=0;d<a.length;++d)c=a[d],f[c]&&(c=f[c]),e&&e!=="keypress"&&h[c]&&(c=h[c],g.push("shift")),m(c)&&g.push(c);return e=o.pickBestAction(c,g,e),{key:c,modifiers:g,action:e}}});var Ut=b((fa,Kt)=>{"use strict";n();i();s();Kt.exports=function(t,e,o){var r=this;return o||(o=r.getReverseMap()[t]?"keydown":"keypress"),o==="keypress"&&e.length&&(o="keydown"),o}});var Vt=b((va,zt)=>{"use strict";n();i();s();zt.exports=function(){var t=this,e=t.constructor,o;if(!e.REVERSE_MAP){e.REVERSE_MAP={},o=Se();for(var r in o)r>95&&r<112||o.hasOwnProperty(r)&&(e.REVERSE_MAP[o[r]]=r)}return e.REVERSE_MAP}});var $t=b((Ea,Yt)=>{"use strict";n();i();s();Yt.exports=function(t,e){return t.sort().join(",")===e.sort().join(",")}});var Jt=b((Sa,Xt)=>{"use strict";n();i();s();Xt.exports=function(t,e,o,r,a,c){var d=this,g,f,h=[],m=o.type,T,y;if(m==="keypress"&&!(o.code&&o.code.slice(0,5)==="Arrow")){var E=d.callbacks["any-character"]||[];E.forEach(function(I){h.push(I)})}if(!d.callbacks[t])return h;for(T=ae(),m==="keyup"&&T(t)&&(e=[t]),g=0;g<d.callbacks[t].length;++g)if(f=d.callbacks[t][g],!(!r&&f.seq&&d.sequenceLevels[f.seq]!==f.level)&&m===f.action&&(y=$t(),m==="keypress"&&!o.metaKey&&!o.ctrlKey||y(e,f.modifiers))){var k=!r&&f.combo===a,A=r&&f.seq===r&&f.level===c;(k||A)&&d.callbacks[t].splice(g,1),h.push(f)}return h}});var Qt=b((Ra,Zt)=>{"use strict";n();i();s();Zt.exports=function(t){var e=this;t=t||{};var o=!1,r;for(r in e.sequenceLevels){if(t[r]){o=!0;continue}e.sequenceLevels[r]=0}o||(e.nextExpectedAction=!1)}});var to=b((Ha,eo)=>{"use strict";n();i();s();eo.exports=function(t){if(t.preventDefault){t.preventDefault();return}t.returnValue=!1}});var ro=b((Ba,oo)=>{"use strict";n();i();s();oo.exports=function(t){if(t.stopPropagation){t.stopPropagation();return}t.cancelBubble=!0}});var io=b((ja,no)=>{"use strict";n();i();s();no.exports=function(t,e,o,r){var a=this,c,d;a.stopCallback(e,e.target||e.srcElement,o,r)||t(e,o)===!1&&(c=to(),c(e),d=ro(),d(e))}});var ao=b((za,so)=>{"use strict";n();i();s();so.exports=function(t,e,o,r){var a=this;a.sequenceLevels[t]=0;function c(m){return function(){a.nextExpectedAction=m,++a.sequenceLevels[t],a.resetSequenceTimer()}}function d(m){var T;a.fireCallback(o,m,t),r!=="keyup"&&(T=Ce(),a.ignoreNextKeyup=T(m)),setTimeout(function(){a.resetSequences()},10)}for(var g=0;g<e.length;++g){var f=g+1===e.length,h=f?d:c(r||a.getKeyInfo(e[g+1]).action);a.bindSingle(e[g],h,r,t,g)}}});var po=b((Xa,co)=>{"use strict";n();i();s();co.exports=function(){var t=this;clearTimeout(t.resetTimer),t.resetTimer=setTimeout(function(){t.resetSequences()},1e3)}});var lo=b((ec,uo)=>{n();i();s();var ke=Oe().off;uo.exports=function(){var t=this,e=t.element;ke(e,"keypress",t.eventHandler),ke(e,"keydown",t.eventHandler),ke(e,"keyup",t.eventHandler)}});var fo=b((nc,go)=>{"use strict";n();i();s();go.exports=function(){var t=this;t.instances.forEach(function(e){e.reset()})}});var mo=b((cc,_)=>{"use strict";n();i();s();_.exports=function(t,e){var o=this,r=o.constructor;return o.options=Object.assign({storeInstancesGlobally:!0},e||{}),o.callbacks={},o.directMap={},o.sequenceLevels={},o.resetTimer=null,o.ignoreNextKeyup=!1,o.ignoreNextKeypress=!1,o.nextExpectedAction=!1,o.element=t,o.addEvents(),o.options.storeInstancesGlobally&&r.instances.push(o),o};_.exports.prototype.bind=ut();_.exports.prototype.bindMultiple=dt();_.exports.prototype.unbind=ft();_.exports.prototype.trigger=ht();_.exports.prototype.reset=vt();_.exports.prototype.stopCallback=xt();_.exports.prototype.handleKey=_t();_.exports.prototype.addEvents=Lt();_.exports.prototype.bindSingle=Ft();_.exports.prototype.getKeyInfo=Gt();_.exports.prototype.pickBestAction=Ut();_.exports.prototype.getReverseMap=Vt();_.exports.prototype.getMatches=Jt();_.exports.prototype.resetSequences=Qt();_.exports.prototype.fireCallback=io();_.exports.prototype.bindSequence=ao();_.exports.prototype.resetSequenceTimer=po();_.exports.prototype.detach=lo();_.exports.instances=[];_.exports.reset=fo();_.exports.REVERSE_MAP=null});var bo=b((O,ho)=>{"use strict";n();i();s();var Re=O&&O.__assign||function(){return Re=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++){e=arguments[o];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},Re.apply(this,arguments)};Object.defineProperty(O,"__esModule",{value:!0});O.RecognizedBrowser=O.Device=O.OS=O.Browser=void 0;var x;(function(t){t.Firefox="firefox",t.Chrome="chrome",t.InternetExplorer="ie",t.Safari="safari",t.Edge="edge",t.Android="com.android.browser",t.Opera="opera",t.OperaMini="opera.mini",t.Blackberry="blackberry",t.Iceweasel="iceweasel",t.Yandex="yandex",t.SeaMonkey="seamonkey"})(x||(O.Browser=x={}));var w;(function(t){t.Linux="linux",t.MacOS="macos",t.Windows="windows",t.iOS="ios",t.OpenBSD="openbsd",t.ChromeOS="chromeos",t.Android="android",t.FirefoxOS="firefoxos",t.WindowsPhone="windows.phone",t.WindowsMobile="windows.mobile",t.BlackberryOS="blackberryos"})(w||(O.OS=w={}));var C;(function(t){t.iPad="ipad",t.iPhone="iphone",t.Lumia="lumia",t.HTC="htc",t.Nexus="nexus",t.GalaxyNexus="galaxy.nexus",t.Nokia="nokia",t.Galaxy="galaxy",t.XBox="xbox",t.Blackberry="blackberry"})(C||(O.Device=C={}));var Qo=[[/msie ([\.\_\d]+)/,x.InternetExplorer],[/trident\/.*?rv:([\.\_\d]+)/,x.InternetExplorer],[/firefox\/([\.\_\d]+)/,x.Firefox],[/fxios\/([\.\_\d]+)/,x.Firefox],[/chrome\/([\.\_\d]+)/,x.Chrome],[/version\/([\.\_\d]+).*?safari/,x.Safari],[/mobile safari ([\.\_\d]+)/,x.Safari],[/android.*?version\/([\.\_\d]+).*?safari/,x.Android],[/crios\/([\.\_\d]+).*?safari/,x.Chrome],[/opera/,x.Opera],[/opera\/([\.\_\d]+)/,x.Opera],[/opera ([\.\_\d]+)/,x.Opera],[/opera mini.*?version\/([\.\_\d]+)/,x.OperaMini],[/opr\/([\.\_\d]+)/,x.Opera],[/opios\/([a-z\.\_\d]+)/,x.Opera],[/blackberry/,x.Blackberry],[/blackberry.*?version\/([\.\_\d]+)/,x.Blackberry],[/bb\d+.*?version\/([\.\_\d]+)/,x.Blackberry],[/rim.*?version\/([\.\_\d]+)/,x.Blackberry],[/iceweasel\/([\.\_\d]+)/,x.Iceweasel],[/edge\/([\.\d]+)/,x.Edge],[/edg\/([\.\d]+)/,x.Edge],[/yabrowser\/([\.\d]+)/,x.Yandex],[/seamonkey\/([\.\d]+)/,x.SeaMonkey]],er=[[/cros\s*\S+\s*([\.\_\d]+)/,w.ChromeOS],[/linux ()([a-z\.\_\d]+)/,w.Linux],[/mac os x/,w.MacOS],[/mac os x.*?([\.\_\d]+)/,w.MacOS],[/os ([\.\_\d]+) like mac os/,w.iOS],[/openbsd ()([a-z\.\_\d]+)/,w.OpenBSD],[/android/,w.Android],[/android ([a-z\.\_\d]+);/,w.Android],[/mozilla\/[a-z\.\_\d]+ \((?:mobile)|(?:tablet)/,w.FirefoxOS],[/windows\s*(?:nt)?\s*([\.\_\d]+)/,w.Windows],[/windows phone.*?([\.\_\d]+)/,w.WindowsPhone],[/windows mobile/,w.WindowsMobile],[/blackberry/,w.BlackberryOS],[/bb\d+/,w.BlackberryOS],[/rim.*?os\s*([\.\_\d]+)/,w.BlackberryOS]],tr=[[/ipad/,C.iPad],[/iphone/,C.iPhone],[/lumia/,C.Lumia],[/htc/,C.HTC],[/nexus/,C.Nexus],[/galaxy nexus/,C.GalaxyNexus],[/nokia/,C.Nokia],[/ gt\-/,C.Galaxy],[/ sm\-/,C.Galaxy],[/xbox/,C.XBox],[/(?:bb\d+)|(?:blackberry)|(?: rim )/,C.Blackberry]],Me="Unknown",B={name:Me,version:[],versionString:Me};function or(t){return t.split(/[\._]/).map(function(e){return parseInt(e)}).filter(function(e){return!isNaN(e)})}function Pe(t,e){var o=Re({},B);return t.forEach(function(r){var a=r[0],c=r[1],d=e.match(a);d&&(o.name=c,d[2]?(o.versionString=d[2],o.version=[]):d[1]?(o.versionString=d[1].replace(/_/g,"."),o.version=or(d[1])):(o.versionString=Me,o.version=[]))}),o}var Ae=typeof window<"u",Le=function(){function t(){this.os=B,this.device=B,this.browser=B}return t.prototype.sniff=function(e){var o=Ae?navigator.userAgent:"",r=(e||o).toLowerCase();return this.os=Pe(er,r),this.device=Pe(tr,r),this.browser=Pe(Qo,r),this},t}();O.default=Le;O.RecognizedBrowser={os:B,browser:B,device:B};Ae&&(ue=new Le().sniff(navigator.userAgent),O.RecognizedBrowser.os=ue.os,O.RecognizedBrowser.device=ue.device,O.RecognizedBrowser.browser=ue.browser);var ue;Ae&&typeof ho>"u"&&(window.Sniffr=new Le,window.Sniffr.sniff(navigator.userAgent))});n();i();s();n();i();s();n();i();s();var Sr=__STORYBOOK_API__,{ActiveTabs:Cr,Consumer:kr,ManagerContext:Pr,Provider:Rr,RequestResponseError:Mr,addons:Ke,combineParameters:Ar,controlOrMetaKey:Lr,controlOrMetaSymbol:Hr,eventMatchesShortcut:Fr,eventToShortcut:Ir,experimental_requestResponse:Nr,isMacLike:Br,isShortcutTaken:Dr,keyToSymbol:qr,merge:Wr,mockChannel:jr,optionOrAltSymbol:Gr,shortcutMatchesShortcut:Kr,shortcutToHumanString:Ur,types:zr,useAddonState:Vr,useArgTypes:Yr,useArgs:$r,useChannel:Xr,useGlobalTypes:Jr,useGlobals:Zr,useParameter:Qr,useSharedState:en,useStoryPrepared:tn,useStorybookApi:on,useStorybookState:rn}=__STORYBOOK_API__;var ee={};n();i();s();n();i();s();var un=__REACT__,{Children:ln,Component:Ue,Fragment:dn,Profiler:gn,PureComponent:te,StrictMode:fn,Suspense:mn,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:hn,cloneElement:bn,createContext:ze,createElement:P,createFactory:vn,createRef:yn,forwardRef:oe,isValidElement:xn,lazy:Tn,memo:En,startTransition:_n,unstable_act:wn,useCallback:On,useContext:Ve,useDebugValue:Sn,useDeferredValue:Cn,useEffect:ye,useId:kn,useImperativeHandle:Pn,useInsertionEffect:Rn,useLayoutEffect:Mn,useMemo:Ye,useReducer:An,useRef:Ln,useState:$e,useSyncExternalStore:Hn,useTransition:Fn,version:In}=__REACT__;var De=F(xe());n();i();s();var Kn=__REACT_DOM__,{__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Un,createPortal:ne,createRoot:zn,findDOMNode:Vn,flushSync:Yn,hydrate:$n,hydrateRoot:Xn,render:Jn,unmountComponentAtNode:Zn,unstable_batchedUpdates:Qn,unstable_renderSubtreeIntoContainer:ei,version:ti}=__REACT_DOM__;n();i();s();var U=F(K()),z=ze(void 0),V=oe(function({id:e,children:o,...r},a){let c=React.createElement("div",{...r,"data-portaltarget":e,ref:a},typeof o!="function"&&o);return React.createElement(z.Provider,{value:e},typeof o=="function"?o(c):c)});V.propTypes={id:U.default.string.isRequired,children:U.default.oneOfType([U.default.node,U.default.func])};n();i();s();var v=F(K()),So=F(xe());n();i();s();var Te={};function Yo(){return(Date.now()*Math.random()).toString(36).substring(0,4)}var $o=Yo();function Y(t){if(!t)throw Error('Argument "name" is required in getUID()');Te[t]||(Te[t]=0);let e=String(Te[t]++);return`${t}${e}-${$o}`}n();i();s();function Ee(t){let e,o,r=!1;function a(){o=window.requestAnimationFrame(()=>{e?.(),r?(r=!1,a()):(o=null,e=null)})}return function(d){e=d,o?t&&(r=!0):a()}}n();i();s();var nt=window.getComputedStyle.bind(window);function _e(t){return t===document?!0:t instanceof Node&&document.documentElement.contains(t.parentNode)}var Xo={top:0,right:0,bottom:0,left:0,width:0,height:0};function se(t){if(t instanceof Range||t!=null&&_e(t)){let{top:e,right:o,bottom:r,left:a,width:c,height:d}=t.getBoundingClientRect();return{top:e,right:o,bottom:r,left:a,width:c,height:d}}else return Object.assign({},Xo)}function we(){return window.innerHeight}function Jo(){return window.innerWidth}function it(t){let{top:e,bottom:o,left:r,right:a}=se(t);return!(o<0||a<0||we()-e<0||Jo()-r<0)}function st(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function at(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}var ct=t=>(e,o="")=>{o.split(/\s+/g).filter(r=>!!r).forEach(r=>e[t](r))},Ii=ct("add"),Ni=ct("remove");var ie=class{_all=new Set;add(e,o,r,a){e.addEventListener(o,r,a);let c=()=>e.removeEventListener(o,r,a);return this._all.add(c),c}remove(e){e(),this._all.delete(e)}removeAll(){this._all.forEach(e=>this.remove(e))}};n();i();s();var q=F(K());n();i();s();var To=F(mo());n();i();s();var vo=F(bo()),yo=new vo.default;yo.sniff();var xo=yo;var He=class{ALLOW_SHORTCUTS_SELECTOR=".ring-js-shortcuts";ROOT_SCOPE={scopeId:"ROOT",options:{}};_scopes={};_scopeChain=[];combokeys=new To.default(document.documentElement);trigger=e=>this.combokeys.trigger(e);constructor(){this.setFilter(),this.setScope()}_dispatcher=(e,o)=>{let r;for(let a=this._scopeChain.length-1;a>=0;a--){let c=this._scopeChain[a];if(r=this._scopes[c.scopeId],r&&o!=null&&r[o]){let d=r[o](e,o,c.scopeId);if(d!==!0)return d}if(c.options.modal)return!0}};bind(e){if(!(e instanceof Object)||typeof e.handler!="function")throw new Error("Shortcut handler should exist");if(e.scope||(e.scope=this.ROOT_SCOPE.scopeId),Array.isArray(e.key)){for(let r=0;r<e.key.length;r++)this.bind(Object.assign({},e,{key:e.key[r]}));return}if(typeof e.key!="string")throw new Error("Shortcut key should exist");let o=this._scopes[e.scope];o||(o=this._scopes[e.scope]={}),o[e.key]=e.handler,this.combokeys.bind(e.key,this._dispatcher,this._getKeyboardEventType(e))}bindMap(e,o){if(!(e instanceof Object))throw new Error("Shortcuts map shouldn't be empty");for(let r in e)e.hasOwnProperty(r)&&this.bind(Object.assign({},o||{},{key:r,handler:e[r]}))}unbindScope(e){this._scopes[e]=null}getScope(){return this._scopeChain.slice(1)}hasScope(e){return this.indexOfScope(e)!==-1}pushScope(e,o={}){if(e){let r=this.indexOfScope(e);r!==-1&&this._scopeChain.splice(r,1),this._scopeChain.push(this.wrapScope(e,o))}}popScope(e){if(e){let o=this.indexOfScope(e);if(o!==-1)return this._scopeChain.splice(o,this._scopeChain.length-1)}}spliceScope(e){if(e){let o=this.indexOfScope(e);o!==-1&&this._scopeChain.splice(o,1)}}setScope(e){if(e){let o;if(typeof e=="string"||!Array.isArray(e)&&typeof e=="object"&&e!==null?o=[e]:o=e,!Array.isArray(o))return;let r=o.map(a=>typeof a=="string"?this.wrapScope(a):a);this._scopeChain=[this.ROOT_SCOPE].concat(r)}else this._scopeChain=[this.ROOT_SCOPE]}wrapScope(e,o={}){return{scopeId:e,options:o}}hasKey(e,o){return!!this._scopes[o]?.[e]}_defaultFilter=(e,o,r)=>o===document||!(o instanceof HTMLElement)||r==null||o.matches(this.ALLOW_SHORTCUTS_SELECTOR)||(o.dataset.enabledShortcuts!=null?o.dataset.enabledShortcuts.split(",").includes(r):o.closest(this.ALLOW_SHORTCUTS_SELECTOR)!=null)?!1:o.matches("input:not([type=checkbox]),select,textarea")||o.contentEditable==="true";_getKeyboardEventType(e){return!e.type&&xo.os.name==="windows"&&typeof e.key=="string"&&e.key.match(/ctrl/i)&&e.key.match(/shift/i)&&e.key.match(/[0-9]/)?"keyup":e.type}setFilter(e){this.combokeys.stopCallback=typeof e=="function"?e:this._defaultFilter}indexOfScope(e){return this._scopeChain.findIndex(o=>o.scopeId===e)}reset(){this._scopes={},this.setScope(),this.combokeys.reset()}},D=new He;var $=class extends te{static propTypes={map:q.default.object.isRequired,scope:q.default.string.isRequired,options:q.default.object,disabled:q.default.bool,children:q.default.node};static defaultProps={options:{}};componentDidMount(){this.props.disabled||this.turnShorcutsOn()}componentDidUpdate(e){let{disabled:o,map:r}=this.props;!e.disabled&&o&&this.turnShorcutsOff(),e.disabled&&!o&&this.turnShorcutsOn(),e.map!==r&&D.bindMap(r,this.props)}componentWillUnmount(){this.props.disabled||this.turnShorcutsOff()}turnShorcutsOn(){let{map:e,scope:o,options:r}=this.props;D.bindMap(e,this.props),D.pushScope(o,r)}turnShorcutsOff(){let{scope:e}=this.props;D.unbindScope(e),D.spliceScope(e)}render(){return this.props.children||null}};n();i();s();function rr(t){return Object.entries(t).reduce((e,[o,r])=>r?[...e,o]:e,[])}function Fe(...t){return t.reduce((e,o)=>o?typeof o=="object"?[...e,...rr(o)]:[...e,o]:e,[]).join(" ")}n();i();s();var W=F(K());var Eo={};var ir="input, button, select, textarea, a[href], *[tabindex]:not([data-trap-button]):not([data-scrollable-container])",X=class extends Ue{static propTypes={children:W.default.node.isRequired,trapDisabled:W.default.bool,autoFocusFirst:W.default.bool,focusBackOnClose:W.default.bool,focusBackOnExit:W.default.bool};static defaultProps={trapDisabled:!1,autoFocusFirst:!0,focusBackOnClose:!0,focusBackOnExit:!1};constructor(e){super(e),this.previousFocusedNode=document.activeElement}componentDidMount(){if(this.mounted=!0,this.props.autoFocusFirst)this.focusFirst();else if(!this.props.trapDisabled){let e=this.previousFocusedNode&&this.node?.contains(this.previousFocusedNode),o=this.node?.contains(document.activeElement);(!this.node||!e&&!o)&&(this.trapWithoutFocus=!0,this.trapButtonNode?.focus())}}componentWillUnmount(){this.props.focusBackOnClose&&this.restoreFocus(),this.mounted=!1}mounted=!1;previousFocusedNode;trapWithoutFocus;restoreFocus=()=>{let{previousFocusedNode:e}=this;e instanceof HTMLElement&&e.focus&&it(e)&&setTimeout(()=>{this.mounted||e.focus({preventScroll:!0})})};node;containerRef=e=>{e&&(this.node=e)};focusElement=(e=!0)=>{let{node:o}=this;if(!o)return;let r=[...o.querySelectorAll(ir)].filter(c=>c.tabIndex>=0),a=e?r[0]:r[r.length-1];a&&a.focus()};focusFirst=()=>this.focusElement(!0);focusLast=()=>this.focusElement(!1);focusLastIfEnabled=e=>{if(!this.trapWithoutFocus)if(this.props.focusBackOnExit){let o=e.nativeEvent.relatedTarget;o!=null&&this.node!=null&&o instanceof Element&&this.node.contains(o)&&this.restoreFocus()}else this.focusLast()};handleBlurIfWithoutFocus=e=>{if(!this.trapWithoutFocus)return;this.trapWithoutFocus=!1;let o=e.nativeEvent.relatedTarget;o&&(o instanceof Element&&this.node?.contains(o)||this.focusLast())};trapButtonNode;trapButtonRef=e=>{e&&(this.trapButtonNode=e)};render(){let{children:e,trapDisabled:o,autoFocusFirst:r,focusBackOnClose:a,focusBackOnExit:c,...d}=this.props;return o?P("div",{ref:this.containerRef,...d},e):P("div",{ref:this.containerRef,...d},P("div",{tabIndex:0,ref:this.trapButtonRef,className:Eo.trapButton,onFocus:this.focusLastIfEnabled,onBlur:this.handleBlurIfWithoutFocus,"data-trap-button":!0}),e,P("div",{tabIndex:0,onFocus:c?this.restoreFocus:this.focusFirst,"data-trap-button":!0}))}};n();i();s();n();i();s();var J=(y=>(y.BOTTOM_RIGHT="BOTTOM_RIGHT",y.BOTTOM_LEFT="BOTTOM_LEFT",y.BOTTOM_CENTER="BOTTOM_CENTER",y.TOP_LEFT="TOP_LEFT",y.TOP_RIGHT="TOP_RIGHT",y.TOP_CENTER="TOP_CENTER",y.RIGHT_TOP="RIGHT_TOP",y.RIGHT_BOTTOM="RIGHT_BOTTOM",y.RIGHT_CENTER="RIGHT_CENTER",y.LEFT_TOP="LEFT_TOP",y.LEFT_BOTTOM="LEFT_BOTTOM",y.LEFT_CENTER="LEFT_CENTER",y))(J||{}),_o=["BOTTOM_RIGHT","BOTTOM_LEFT","TOP_LEFT","TOP_RIGHT","RIGHT_TOP","RIGHT_BOTTOM","LEFT_TOP","LEFT_BOTTOM"],le=(o=>(o[o.MARGIN=16]="MARGIN",o[o.BORDER_WIDTH=1]="BORDER_WIDTH",o))(le||{}),de=(e=>(e[e.TARGET=-1]="TARGET",e))(de||{}),ge=(e=>(e[e.SCREEN=-1]="SCREEN",e))(ge||{});function sr(t){return t!==null?{top:t.scrollTop,left:t.scrollLeft}:{top:st(),left:at()}}function ar(t,e,o,r,a){let c=t.offsetWidth,d=t.offsetHeight,g=r+e.height,f=o+e.width,h=o-c,m=r-d,T=f-c,y=o+e.width/2-c/2,E=r+e.height/2-d/2,k=g-d;return{BOTTOM_RIGHT:{left:o,top:g+a},BOTTOM_LEFT:{left:T,top:g+a},BOTTOM_CENTER:{left:y,top:g+a},TOP_RIGHT:{left:o,top:m-a},TOP_LEFT:{left:T,top:m-a},TOP_CENTER:{left:y,top:m-a},LEFT_BOTTOM:{left:h-a,top:r},LEFT_TOP:{left:h-a,top:k},LEFT_CENTER:{left:h-a,top:E},RIGHT_BOTTOM:{left:f+a,top:r},RIGHT_TOP:{left:f+a,top:k},RIGHT_CENTER:{left:f+a,top:E}}}function wo(t,e,o){let r=o.container!==null?o.container.clientHeight:we(),a=e.top+o.sidePadding,c=e.top+r-o.sidePadding,d=Math.max(a-t.top,0),g=o.popup.clientHeight,f=t.top+g-c,h=Math.max(f,0);return d+h}function Oo(t,e,o){let r=o.container!==null?o.container.clientWidth:window.innerWidth,a=e.left+o.sidePadding,c=e.left+r-o.sidePadding,d=Math.max(a-t.left,0),g=o.popup.clientWidth,f=t.left+g-c,h=Math.max(f,0);return d+h}var cr={top:0,left:0};function pr({sidePadding:t,styles:e,anchorRect:o,maxHeight:r,popupScrollHeight:a,direction:c,scroll:d}){let{TOP_LEFT:f,TOP_RIGHT:h,TOP_CENTER:m,RIGHT_TOP:T,LEFT_TOP:y}=J;if(!(c!=null&&[f,h,m,T,y].includes(c)))return e;let A=c!=null&&[f,m,h].includes(c)?o.top:o.bottom,I=r&&typeof r=="number"?Math.min(a,r):a;return A-I<=t&&(e.top=t+d.top,e.maxHeight=A-t+1),e}function Ie(t){let{popup:e,anchor:o,container:r,directions:a,autoPositioning:c,sidePadding:d,top:g,left:f,offset:h,maxHeight:m,minWidth:T,autoCorrectTopOverflow:y=!0}=t,E={top:0,left:0},k=null,A=r!==null?se(r):cr,I=r!==null?r:document.body,L=se(_e(o)?o:I),H=sr(r),Fo=L.left+H.left+f-A.left,Io=L.top+H.top+g-A.top;if(e){let Q={...t,popup:e},be=ar(e,L,Fo,Io,h);if(!c||a.length===1)E=be[a[0]],k=a[0];else{let G=a.concat(a[0]).filter(N=>be[N]).map(N=>({styles:be[N],direction:N})).sort(({styles:N},{styles:je})=>{let No=wo(N,H,Q)+Oo(N,H,Q),Bo=wo(je,H,Q)+Oo(je,H,Q);return No-Bo});E=G[0].styles,k=G[0].direction}["left","top"].forEach(G=>{E[G]<0&&(E[G]=0)})}return m===-1||m==="screen"?E.maxHeight=window.innerHeight+H.top-E.top-16:m&&(E.maxHeight=m),y&&(E=pr({sidePadding:d,styles:E,anchorRect:L,maxHeight:m,direction:k,popupScrollHeight:e?.scrollHeight??0,scroll:H})),T===-1||T==="target"?E.minWidth=L.width:T&&(E.minWidth=L.width<T?T:L.width),{styles:E,direction:k}}var Z={};var lr=t=>{let o=t.target.closest("a");return o&&t.button===0&&o.target!=="_blank"&&o.origin===location.origin&&o.rel!=="external"&&o.target!=="_self"&&!o.download&&!t.altKey&&!t.metaKey&&!t.ctrlKey&&!t.shiftKey&&!t.defaultPrevented},dr=t=>{lr(t)||t.stopPropagation()},Ne=t=>typeof t=="string"?document.querySelector(`[data-portaltarget=${t}]`):t,fe=class extends te{static defaultProps={shortcuts:!0,hidden:!1,onOutsideClick(){},onEscPress(){},onCloseAttempt(){},dontCloseOnAnchorClick:!1,keepMounted:!1,directions:_o,autoPositioning:!0,autoPositioningOnScroll:!0,autoCorrectTopOverflow:!0,left:0,top:0,offset:0,sidePadding:8,attached:!1,trapFocus:!1,autoFocusFirst:!1,legacy:!1};state={display:1};componentDidMount(){this.props.client||this.setState({client:!0}),this.props.hidden||this._setListenersEnabled(!0)}componentDidUpdate(e,o){let{hidden:r}=this.props;this.props!==e&&(e.hidden!==r&&this._setListenersEnabled(!r),this._redraw()),this.props.onShow&&!r&&this.state.display===2&&(e.hidden||o.display!==2)&&this.props.onShow()}componentWillUnmount(){this._setListenersEnabled(!1)}popup;node;parent;container;ringPopupTarget;shouldUseShortcuts(){let{shortcuts:e,hidden:o}=this.props;return e&&!o}listeners=new ie;redrawScheduler=Ee(!0);uid=Y("popup-");calculateDisplay=e=>({...e,display:this.props.hidden?1:2});static PopupProps={Directions:J,Dimension:le,MinWidth:de,MaxHeight:ge};portalRef=e=>{this.node=e,this.parent=e&&e.parentElement,e&&this.getContainer()&&this._redraw()};popupRef=e=>{this.popup=e,this._redraw()};containerRef=e=>{this.container=e};getContainer(){let e=this.props.target||this.ringPopupTarget;return e&&Ne(e)}position(){let{directions:e,autoPositioning:o,autoCorrectTopOverflow:r,sidePadding:a,top:c,left:d,offset:g,maxHeight:f,minWidth:h}=this.props,m=this.getContainer();return Ie({popup:this.popup,container:m&&nt(m).position!=="static"?m:null,anchor:this._getAnchor(),directions:e,autoPositioning:o,autoCorrectTopOverflow:r,sidePadding:a,top:c,left:d,offset:g,maxHeight:f,minWidth:h})}_updateDirection=e=>{this.state.direction!==e&&(this.setState({direction:e}),this.props.onDirectionChange&&this.props.onDirectionChange(e))};_updatePosition=()=>{let e=this.popup;if(e){if(e.style.position="absolute",this.isVisible()){let{styles:o,direction:r}=this.position();Object.entries(o).forEach(([a,c])=>{let d=a;typeof c=="number"?e.style[d]=`${c}px`:e.style[d]=c.toString()}),r!=null&&this._updateDirection(r)}this.setState(this.calculateDisplay)}};_redraw=()=>{this.isVisible()&&this.redrawScheduler(this._updatePosition)};_getAnchor(){return this.props.anchorElement||this.parent}_listenersEnabled;_setListenersEnabled(e){if(e&&!this._listenersEnabled){setTimeout(()=>{this._listenersEnabled=!0,this.listeners.add(window,"resize",this._redraw),this.props.autoPositioningOnScroll&&this.listeners.add(window,"scroll",this._redraw),this.listeners.add(document,"pointerdown",this._onDocumentClick,!0);let o=this._getAnchor();for(;o;)this.listeners.add(o,"scroll",this._redraw),o=o.parentElement},0);return}!e&&this._listenersEnabled&&(this.listeners.removeAll(),this._listenersEnabled=!1)}isVisible(){return!this.props.hidden}_onCloseAttempt(e,o){this.props.onCloseAttempt(e,o)}_onEscPress=e=>{this.props.onEscPress(e),this._onCloseAttempt(e,!0)};_onDocumentClick=e=>{this.container&&e.target instanceof Node&&this.container.contains(e.target)||!this._listenersEnabled||this.props.dontCloseOnAnchorClick&&e.target instanceof Node&&this._getAnchor()?.contains(e.target)||(this.props.onOutsideClick(e),this._onCloseAttempt(e,!1))};getInternalContent(){let{trapFocus:e,autoFocusFirst:o,children:r}=this.props;return e?P(X,{autoFocusFirst:o,focusBackOnExit:!0},r):r}shortcutsScope=this.uid;shortcutsMap={esc:this._onEscPress};render(){let{className:e,style:o,hidden:r,attached:a,keepMounted:c,client:d,onMouseDown:g,onMouseUp:f,onMouseOver:h,onMouseOut:m,onContextMenu:T,"data-test":y}=this.props,E=this.state.display===1,k=(0,So.default)(e,Z.popup,{[Z.attached]:a,[Z.hidden]:r,[Z.showing]:E}),A=(this.state.direction||"").toLowerCase().replace(/[_]/g,"-");return P(z.Consumer,null,I=>(this.ringPopupTarget=I,P("span",{onClick:dr,role:"presentation",ref:this.portalRef},this.shouldUseShortcuts()&&P($,{map:this.shortcutsMap,scope:this.shortcutsScope}),(d||this.state.client)&&(c||!r)&&ne(P(V,{id:this.uid,ref:this.containerRef,onMouseOver:h,onFocus:h,onMouseOut:m,onBlur:m,onContextMenu:T},P("div",{"data-test":Fe("ring-popup",y),"data-test-shown":!r&&!E,"data-test-direction":A,ref:this.popupRef,className:k,style:o,onMouseDown:g,onMouseUp:f,role:"presentation"},this.getInternalContent())),this.getContainer()||document.body))))}};fe.propTypes={anchorElement:v.default.instanceOf(Node),target:v.default.oneOfType([v.default.string,v.default.instanceOf(Element)]),className:v.default.string,style:v.default.object,hidden:v.default.bool.isRequired,onOutsideClick:v.default.func,onEscPress:v.default.func,onCloseAttempt:v.default.func,children:v.default.node.isRequired,dontCloseOnAnchorClick:v.default.bool,shortcuts:v.default.bool,keepMounted:v.default.bool,"data-test":v.default.string,client:v.default.bool,directions:v.default.arrayOf(v.default.string),autoPositioning:v.default.bool,autoCorrectTopOverflow:v.default.bool,left:v.default.number,top:v.default.number,maxHeight:v.default.oneOfType([v.default.string,v.default.number]),minWidth:v.default.number,sidePadding:v.default.number,attached:v.default.bool,onMouseDown:v.default.func,onMouseUp:v.default.func,onMouseOver:v.default.func,onMouseOut:v.default.func,onContextMenu:v.default.func,onDirectionChange:v.default.func,onShow:v.default.func,trapFocus:v.default.bool,autoFocusFirst:v.default.bool};var me={};var Co=(r=>(r.AUTO="auto",r.LIGHT="light",r.DARK="dark",r))(Co||{}),Be=window.matchMedia("(prefers-color-scheme: dark)");function ko(){let[t,e]=$e(Be.matches);return ye(()=>{let o=r=>e(r.matches);return Be.addEventListener("change",o),()=>Be.removeEventListener("change",o)},[]),t?"dark":"light"}function fr(t){let e=ko(),o=t==="auto"?e:t;return(0,De.default)({[me.dark]:o==="dark",[ee.light]:o==="light"})}function qe(t,e){t==="dark"?(e.classList.remove(ee.light),e.classList.add(me.dark),e.classList.add("ring-ui-theme-dark")):(e.classList.remove(me.dark),e.classList.remove("ring-ui-theme-dark"),e.classList.add(ee.light))}var Np=oe(function({theme:e="auto",className:o,passToPopups:r,children:a,target:c,...d},g){let f=ko(),h=e==="auto"?f:e,m=Ye(()=>Y("popups-with-theme-"),[]);ye(()=>{c!=null&&qe(h,c)},[h,c]);let T=fr(e),y=Ve(z);return React.createElement("div",{ref:g,className:c!=null?void 0:(0,De.default)(o,T),...d},r?React.createElement(V,{id:m},E=>React.createElement(React.Fragment,null,a,ne(React.createElement("div",{className:T},E),y&&Ne(y)||document.body))):a)}),Po=Co;n();i();s();n();i();s();n();i();s();n();i();s();var S=function(){return S=Object.assign||function(e){for(var o,r=1,a=arguments.length;r<a;r++){o=arguments[r];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c])}return e},S.apply(this,arguments)};n();i();s();n();i();s();n();i();s();function Ro(t){return t.toLowerCase()}var mr=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],hr=/[^A-Z0-9]+/gi;function j(t,e){e===void 0&&(e={});for(var o=e.splitRegexp,r=o===void 0?mr:o,a=e.stripRegexp,c=a===void 0?hr:a,d=e.transform,g=d===void 0?Ro:d,f=e.delimiter,h=f===void 0?" ":f,m=Mo(Mo(t,r,"$1\0$2"),c,"\0"),T=0,y=m.length;m.charAt(T)==="\0";)T++;for(;m.charAt(y-1)==="\0";)y--;return m.slice(T,y).split("\0").map(g).join(h)}function Mo(t,e,o){return e instanceof RegExp?t.replace(e,o):e.reduce(function(r,a){return r.replace(a,o)},t)}n();i();s();n();i();s();n();i();s();n();i();s();n();i();s();function he(t,e){return e===void 0&&(e={}),j(t,S({delimiter:"."},e))}n();i();s();n();i();s();function Ao(t,e){return e===void 0&&(e={}),he(t,S({delimiter:"-"},e))}n();i();s();n();i();s();n();i();s();n();i();s();var Bl=__STORYBOOK_THEMING__,{CacheProvider:Dl,ClassNames:ql,Global:Wl,ThemeProvider:jl,background:Gl,color:Kl,convert:Ul,create:Lo,createCache:zl,createGlobal:Vl,createReset:Yl,css:$l,darken:Xl,ensure:Jl,ignoreSsrWarning:Zl,isPropValid:Ql,jsx:ed,keyframes:td,lighten:od,styled:rd,themes:nd,typography:id,useTheme:sd,withTheme:ad}=__STORYBOOK_THEMING__;var We=window.matchMedia("(prefers-color-scheme: dark)"),M=window.Proxy?new Proxy({},{get:(t,e)=>getComputedStyle(document.documentElement).getPropertyValue(`--ring-${Ao(e)}`).trim()}):{},vr=M.textColor!=null,Ho=Lo({base:We.matches?"dark":"light",brandTitle:"JetBrains Ring UI",...vr?{colorSecondary:M.mainColor,appBorderColor:M.lineColor,appBorderRadius:parseInt(M.borderRadius,10),fontBase:M.fontFamily,fontCode:M.fontFamilyMonospace,barTextColor:M.secondaryColor,barSelectedColor:M.mainColor,inputBorder:M.bordersColor,inputTextColor:M.textColor}:{}});We.matches&&qe(Po.DARK,document.documentElement);Ke.setConfig({theme:Ho});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
