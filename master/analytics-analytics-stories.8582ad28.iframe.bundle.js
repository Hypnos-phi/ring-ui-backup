(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[612],{"./src/analytics/analytics.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Analytics:function(){return analytics_stories_Analytics},default:function(){return analytics_stories}});var link_link=__webpack_require__("./src/link/link.css"),link_default=__webpack_require__.n(link_link),browser=__webpack_require__("./node_modules/util-deprecate/browser.js"),browser_default=__webpack_require__.n(browser);const warnOnDeprecationOfAnalyticsMethod=methodName=>browser_default()((()=>{}),`Method analytics::${methodName} is deprecated, use analytics::trackEvent instead`)();var analytics=new class Analytics{_plugins;constructor(){this._plugins=[]}config(plugins){this._plugins=plugins}track(rawTrackingData,additionalData){if(!rawTrackingData)return;warnOnDeprecationOfAnalyticsMethod("track");let splitIdx=rawTrackingData.indexOf(":");splitIdx<0&&(splitIdx=rawTrackingData.indexOf("_")),splitIdx<0&&(splitIdx=rawTrackingData.length);const category=rawTrackingData.substr(0,splitIdx),subcategory=rawTrackingData.substr(splitIdx+1);this.trackEvent(category,subcategory,additionalData)}trackPageView(path){warnOnDeprecationOfAnalyticsMethod("trackPageView"),this._plugins.forEach((plugin=>{plugin.trackPageView(path)}))}trackEvent(category,action,additionalData){this._plugins.forEach((plugin=>{plugin.trackEvent(category,action,additionalData)}))}trackShortcutEvent(category,action,additionalData){warnOnDeprecationOfAnalyticsMethod("trackShortcutEvent"),this.trackEvent(category,action,additionalData)}trackEntityProperties(entityName,entity,propertiesNames,additionalData){warnOnDeprecationOfAnalyticsMethod("trackEntityProperties");for(let i=0;i<propertiesNames.length;++i){const keys=propertiesNames[i].split(".");let value=entity;if(!keys.length)continue;for(let j=0;j<keys.length;++j){if("object"!=typeof value||null==value||!value.hasOwnProperty(keys[j])){value="no-value";break}value=value[keys[j]]}"string"==typeof value&&(value=value.toLowerCase().replace(/[._]+/g,"-"));const resultAction=`${keys.join("-")}__${value}`;this.trackEvent(entityName,resultAction,additionalData)}}};class AnalyticsCustomPlugin{_data;_flush;_isDevelopment;_flushInterval;_flushMaxPackSize;_hasSendSchedule;constructor(send,isDevelopment,flushInterval){this._data=[],this.config({send:send,isDevelopment:isDevelopment,flushInterval:flushInterval})}config(config){this._flush=()=>{this._data.length>0&&(config.send(this._data),this._data=[])},this._isDevelopment=config.isDevelopment,this._flushInterval=config.flushInterval||1e4,this._flushMaxPackSize=config.flushMaxPackSize||100}trackEvent(category,action,additionalData){this._processEvent(category,action,additionalData)}trackPageView(path,data){this._processEvent("page","view",data)}_initSendSchedule(){window.addEventListener("beforeunload",(()=>this._flush?.())),null!=this._flush&&setInterval(this._flush,this._flushInterval),this._hasSendSchedule=!0}_processEvent(category,action,data){!this._hasSendSchedule&&this._flush&&this._initSendSchedule(),this._isDevelopment&&console.log("TRACKING DATA = ",category,action,data);const baseSendingData={category:category,action:action,timestamp:Date.now()};this._addDataToFlushingPack(data?{...baseSendingData,data:data}:baseSendingData)}_addDataToFlushingPack(sendingData){this._data.push(sendingData),null!=this._flushMaxPackSize&&this._data.length>=this._flushMaxPackSize&&this._flush?.()}get serializeAdditionalInfo(){return!0}}var analytics_stories={title:"Components/Analytics",parameters:{storySource:{source:"import linkStyles from '../link/link.css';\n\nimport analytics from './analytics';\nimport AnalyticsCustomPlugin from './analytics__custom-plugin';\n\nexport default {\n  title: 'Components/Analytics',\n\n  parameters: {\n    notes:\n      'Provides a façade to Google Analytics and other web analytics services through a system of plugins.',\n    hermione: {skip: true}\n  },\n  argTypes: {onAnalytics: {}}\n};\n\ninterface AnalyticsProps {\n  onAnalytics: (message: string, category: string, action: string) => void\n}\nexport const Analytics = ({onAnalytics}: AnalyticsProps) => {\n  const node = document.createElement('div');\n\n  node.innerHTML = `\n      <div>\n        <p>Click the link below and check the console output:</p>\n        <div>\n          <a href id=\"click-me\" class=\"${linkStyles.link}\">\n            Track click event\n          </a>\n        </div>\n      </div>\n    `;\n\n  const FLUSH_INTERVAL = 100;\n\n  const customPlugin = new AnalyticsCustomPlugin(\n    events => onAnalytics('Custom plugin receives:', events[0].category, events[0].action),\n    false,\n    FLUSH_INTERVAL\n  );\n\n  analytics.config([customPlugin]);\n\n  node.querySelector('#click-me')?.addEventListener('click', event => {\n    analytics.trackEvent('test-category', 'test-action');\n    event.preventDefault();\n  });\n\n  return node;\n};\n",locationsMap:{analytics:{startLoc:{col:25,line:20},endLoc:{col:1,line:50},startBody:{col:25,line:20},endBody:{col:1,line:50}}}},notes:"Provides a façade to Google Analytics and other web analytics services through a system of plugins.",hermione:{skip:!0}},argTypes:{onAnalytics:{}}};const analytics_stories_Analytics=_ref=>{let{onAnalytics:onAnalytics}=_ref;const node=document.createElement("div");node.innerHTML=`\n      <div>\n        <p>Click the link below and check the console output:</p>\n        <div>\n          <a href id="click-me" class="${link_default().link}">\n            Track click event\n          </a>\n        </div>\n      </div>\n    `;const customPlugin=new AnalyticsCustomPlugin((events=>onAnalytics("Custom plugin receives:",events[0].category,events[0].action)),!1,100);return analytics.config([customPlugin]),node.querySelector("#click-me")?.addEventListener("click",(event=>{analytics.trackEvent("test-category","test-action"),event.preventDefault()})),node}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/link/link.css":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,".link_c73c {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  outline: none;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover {\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover {\n    text-decoration: none;\n  }}\n\n.link_c73c {\n    text-decoration: none;\n  }\n\n.link_c73c.hover_e4ca {\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover .inner_d16b {\n    border-width: 0;\n    border-bottom: 2px solid;\n    border-image-source: linear-gradient(currentcolor 50%, transparent 50%);\n    border-image-slice: 0 0 100% 0;\n  }}\n\n.link_c73c.active_eef2 {\n    color: inherit;\n  }\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c.compatibilityUnderlineMode_a632:hover {\n    text-decoration: underline;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n  }\n    .link_c73c.compatibilityUnderlineMode_a632:hover .inner_d16b {\n      border: none;\n    }}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c.pseudo_cb40:hover {\n    text-decoration: none;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n  }\n    .link_c73c.pseudo_cb40:hover .inner_d16b {\n      border: none;\n    }}\n\n.link_c73c:focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n\n@media (min-resolution: 2dppx) {@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover .inner_d16b {\n    border-bottom-width: 1px;\n  }}\n}\n\n.text_e0fe {\n  border-radius: var(--ring-border-radius);\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.inherit_c3d7:not(:hover) {\n  color: inherit;\n}}\n\n.pseudo_cb40 {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n}\n\n.pseudo_cb40::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n","",{version:3,sources:["webpack://./src/link/link.css","<no source>"],names:[],mappings:"AAEA;EACE,eAAe;EACf,uCAAuC;;EAEvC,6BAA6B;;EA2C7B,aAAa;AAKf;;ACtDA,wGAAA;IAAA,iBAAA;;IAAA,oCAAA;GAAA,CAAA;;AAAA,wGAAA;IAAA,sBAAA;GAAA,CAAA;;ADQE;IAEE,qBAAqB;EACvB;;AAEA;IAEE,gBAAgB;;IAEhB,mCAAmC;EACrC;;AClBF,wGAAA;IAAA,gBAAA;IAAA,yBAAA;IAAA,wEAAA;IAAA,+BAAA;GAAA,CAAA;;AD2BE;IACE,cAAc;EAChB;;AC7BF,wGAAA;IAAA,2BAAA;;IAAA,0DAAA;GAAA;IAAA;MAAA,aAAA;KAAA,CAAA;;AAAA,wGAAA;IAAA,sBAAA;;IAAA,0DAAA;GAAA;IAAA;MAAA,aAAA;KAAA,CAAA;;ADmDE;IACE,oDAAoD;EACtD;;AAGF,gCCxDA,wGAAA;IAAA,yBAAA;GAAA,CAAA;AD4DA;;AAEA;EACE,wCAAwC;AAC1C;;AChEA,wGAAA;EAAA,eAAA;CAAA,CAAA;;ADsEA;EACE,SAAS;EACT,UAAU;;EAEV,gBAAgB;;EAEhB,SAAS;;EAET,uBAAuB;;EAEvB,aAAa;AAOf;;AALE;IACE,UAAU;;IAEV,SAAS;EACX",sourcesContent:['@import "../global/variables.css";\n\n.link {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  &,\n  &:hover {\n    text-decoration: none;\n  }\n\n  &:hover,\n  &.hover {\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n  &:hover .inner {\n    border-width: 0;\n    border-bottom: 2px solid;\n    border-image-source: linear-gradient(currentcolor 50%, transparent 50%);\n    border-image-slice: 0 0 100% 0;\n  }\n\n  &.active {\n    color: inherit;\n  }\n\n  &.compatibilityUnderlineMode:hover {\n    text-decoration: underline;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n    & .inner {\n      border: none;\n    }\n  }\n\n  &.pseudo:hover {\n    text-decoration: none;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n    & .inner {\n      border: none;\n    }\n  }\n\n  outline: none;\n\n  &:focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n}\n\n@media (min-resolution: 2dppx) {\n  .link:hover .inner {\n    border-bottom-width: 1px;\n  }\n}\n\n.text {\n  border-radius: var(--ring-border-radius);\n}\n\n.inherit:not(:hover) {\n  color: inherit;\n}\n\n.pseudo {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n\n  &::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n}\n',null],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={link:"link_c73c",hover:"hover_e4ca",inner:"inner_d16b",active:"active_eef2",compatibilityUnderlineMode:"compatibilityUnderlineMode_a632",pseudo:"pseudo_cb40",text:"text_e0fe",inherit:"inherit_c3d7"},__webpack_exports__.default=___CSS_LOADER_EXPORT___},"./src/link/link.css":function(module,__unused_webpack_exports,__webpack_require__){var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/link/link.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./node_modules/util-deprecate/browser.js":function(module,__unused_webpack_exports,__webpack_require__){function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);