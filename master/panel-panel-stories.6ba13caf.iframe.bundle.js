(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[762],{"./node_modules/@jetbrains/icons/chevron-10px.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><g><polygon points="5 7.99 1.5 4.5 2.5 3.5 5 6.01 7.5 3.5 8.49 4.5 5 7.99"/></g></svg>'},"./src/panel/panel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Panel});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_panel_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/panel/panel.css"),_panel_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_panel_css__WEBPACK_IMPORTED_MODULE_2__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}class Panel extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node};render(){const{className,children,...props}=this.props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_panel_css__WEBPACK_IMPORTED_MODULE_2___default().panel,className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({},props,{className:classes}),children)}}Panel.__docgenInfo={description:"@name Panel",methods:[],displayName:"Panel",props:{className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/dialog/dialog.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_island_island_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/island/island.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_island_island_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,`.container_cf37 {\n  position: fixed;\n  z-index: var(--ring-overlay-z-index);\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  display: flex;\n  overflow: auto;\n  align-items: center;\n  justify-content: center;\n\n  padding: calc(var(--ring-unit)*4) var(--ring-unit);\n\n  background-color: rgba(var(--ring-dialog-overlay-components), var(--ring-dialog-overlay-opacity));\n}\n\n.innerContainer_bbf1 {\n  display: flex;\n  flex-direction: column;\n\n  max-height: 100%;\n}\n\n.content_aa45 {\n  position: relative;\n\n  width: calc(var(--ring-unit)*58);\n  min-height: calc(var(--ring-unit)*15);\n  margin: auto;\n\n  cursor: default;\n  overflow-wrap: break-word;\n}\n\n.content_aa45 [data-scrollable-container] {\n    padding-bottom: var(--ring-unit);\n  }\n\n.content_aa45 .panel_c2d4 {\n    margin-top: 0;\n    padding: calc(var(--ring-unit)*2) calc(var(--ring-unit)*4) calc(var(--ring-unit)*4);\n\n    border-top: none;\n\n    background-color: transparent;\n  }\n\n/* stylelint-disable-next-line selector-max-specificity */\n\n.content_aa45 .panel_c2d4 > button:not(:last-child) {\n    margin-right: var(--ring-unit);\n  }\n\n.content_aa45.content_aa45 {\n  box-shadow: var(--ring-dialog-shadow);\n}\n\n.clickableOverlay_a6f0 {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  cursor: pointer;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.clickableOverlay_a6f0:hover + * .closeIcon_dadc {\n  color: var(--ring-icon-hover-color);\n}}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.closeButton_bae7:hover .closeIcon_dadc {\n  color: var(--ring-icon-hover-color);\n}}\n\n.clickableOverlay_a6f0:active + * .closeIcon_dadc {\n  color: var(--ring-main-color);\n}\n\n.closeButton_bae7:active .closeIcon_dadc {\n  color: var(--ring-main-color);\n}\n\n.closeButton_bae7.closeButton_bae7 {\n  position: absolute;\n}\n\n.closeButtonOutside_bd89 {\n  top: 0;\n  right: calc(var(--ring-unit)*-4);\n}\n\n.closeButtonInside_cd4a {\n  top: calc(var(--ring-unit)*1.5);\n  right: var(--ring-unit);\n}\n\n.documentWithoutScroll_bafc {\n  overflow: hidden;\n\n  height: 100%;\n}\n\n.popupTarget_a3ab {\n  position: fixed;\n  z-index: var(--ring-overlay-z-index);\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  pointer-events: none;\n}\n\n.popupTarget_a3ab > :not(.popupTarget_a3ab) {\n    pointer-events: initial;\n  }\n\n.container_cf37 .${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_island_island_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.header} {\n  padding-top: calc(var(--ring-unit)*4);\n\n  font-size: 24px;\n  line-height: 28px;\n}\n\n.dense_d065 .${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_island_island_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.header} {\n  padding-top: calc(var(--ring-unit)*2);\n}\n\n.dense_d065 .panel_c2d4 {\n  padding-bottom: calc(var(--ring-unit)*2);\n}\n`,"",{version:3,sources:["webpack://./src/dialog/dialog.css","<no source>"],names:[],mappings:"AAIA;EACE,eAAe;EACf,oCAAoC;EACpC,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;;EAEP,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,uBAAuB;;EAEvB,kDAAoD;;EAEpD,iGAAiG;AACnG;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;;EAElB,gCAAkC;EAClC,qCAAuC;EACvC,YAAY;;EAEZ,eAAe;EACf,yBAAyB;AAmB3B;;AAjBE;IACE,gCAAgC;EAClC;;AAEA;IACE,aAAa;IACb,mFAAyF;;IAEzF,gBAAgB;;IAEhB,6BAA6B;EAC/B;;AAEA,yDAAyD;;AACzD;IACE,8BAA8B;EAChC;;AAGF;EACE,qCAAqC;AACvC;;AAEA;EACE,eAAe;EACf,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;;EAEP,eAAe;AACjB;;ACtEA,wGAAA;EAAA,oCAAA;CAAA,CAAA;;AAAA,wGAAA;EAAA,oCAAA;CAAA,CAAA;;ADgFA;EACE,6BAA6B;AAC/B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,MAAM;EACN,gCAAkC;AACpC;;AAEA;EACE,+BAAiC;EACjC,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;;EAEhB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,oCAAoC;EACpC,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;;EAEP,oBAAoB;AAKtB;;AAHE;IACE,uBAAuB;EACzB;;AAGF;EACE,qCAAuC;;EAEvC,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,qCAAuC;AACzC;;AAEA;EACE,wCAA0C;AAC5C",sourcesContent:['@import "../global/variables.css";\n\n@value header from "../island/island.css";\n\n.container {\n  position: fixed;\n  z-index: var(--ring-overlay-z-index);\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  display: flex;\n  overflow: auto;\n  align-items: center;\n  justify-content: center;\n\n  padding: calc(var(--ring-unit) * 4) var(--ring-unit);\n\n  background-color: rgba(var(--ring-dialog-overlay-components), var(--ring-dialog-overlay-opacity));\n}\n\n.innerContainer {\n  display: flex;\n  flex-direction: column;\n\n  max-height: 100%;\n}\n\n.content {\n  position: relative;\n\n  width: calc(var(--ring-unit) * 58);\n  min-height: calc(var(--ring-unit) * 15);\n  margin: auto;\n\n  cursor: default;\n  overflow-wrap: break-word;\n\n  & [data-scrollable-container] {\n    padding-bottom: var(--ring-unit);\n  }\n\n  & .panel {\n    margin-top: 0;\n    padding: calc(var(--ring-unit) * 2) calc(var(--ring-unit) * 4) calc(var(--ring-unit) * 4);\n\n    border-top: none;\n\n    background-color: transparent;\n  }\n\n  /* stylelint-disable-next-line selector-max-specificity */\n  & .panel > button:not(:last-child) {\n    margin-right: var(--ring-unit);\n  }\n}\n\n.content.content {\n  box-shadow: var(--ring-dialog-shadow);\n}\n\n.clickableOverlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  cursor: pointer;\n}\n\n.clickableOverlay:hover + * .closeIcon {\n  color: var(--ring-icon-hover-color);\n}\n\n.closeButton:hover .closeIcon {\n  color: var(--ring-icon-hover-color);\n}\n\n.clickableOverlay:active + * .closeIcon {\n  color: var(--ring-main-color);\n}\n\n.closeButton:active .closeIcon {\n  color: var(--ring-main-color);\n}\n\n.closeButton.closeButton {\n  position: absolute;\n}\n\n.closeButtonOutside {\n  top: 0;\n  right: calc(var(--ring-unit) * -4);\n}\n\n.closeButtonInside {\n  top: calc(var(--ring-unit) * 1.5);\n  right: var(--ring-unit);\n}\n\n.documentWithoutScroll {\n  overflow: hidden;\n\n  height: 100%;\n}\n\n.popupTarget {\n  position: fixed;\n  z-index: var(--ring-overlay-z-index);\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  pointer-events: none;\n\n  & > :not(.popupTarget) {\n    pointer-events: initial;\n  }\n}\n\n.container .header {\n  padding-top: calc(var(--ring-unit) * 4);\n\n  font-size: 24px;\n  line-height: 28px;\n}\n\n.dense .header {\n  padding-top: calc(var(--ring-unit) * 2);\n}\n\n.dense .panel {\n  padding-bottom: calc(var(--ring-unit) * 2);\n}\n',null],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={header:`${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_island_island_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.header}`,container:"container_cf37",innerContainer:"innerContainer_bbf1",content:"content_aa45",panel:"panel_c2d4",clickableOverlay:"clickableOverlay_a6f0",closeIcon:"closeIcon_dadc",closeButton:"closeButton_bae7",closeButtonOutside:"closeButtonOutside_bd89",closeButtonInside:"closeButtonInside_cd4a",documentWithoutScroll:"documentWithoutScroll_bafc",popupTarget:"popupTarget_a3ab",dense:"dense_d065"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/island/island.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,'.island_a108 {\n  display: flex;\n  flex-direction: column;\n\n  border: 1px solid var(--ring-line-color);\n  border-radius: var(--ring-border-radius);\n\n  background-color: var(--ring-content-background-color);\n  box-shadow: 0 1px 4px var(--ring-popup-shadow-color);\n}\n\n.withTransparentBottomBorder_cf73 {\n  transition: border-bottom-color 0.1s;\n\n  border-bottom: 1px solid transparent;\n}\n\n.header_e0dd {\n  box-sizing: border-box;\n  width: 100%;\n  padding: calc(var(--ring-unit)*2) calc(var(--ring-unit)*4) var(--ring-unit);\n\n  transition: border-bottom-color 0.1s;\n\n  border-bottom: 1px solid transparent;\n\n  line-height: 24px;\n}\n\n.withBottomBorder_f0ca.withBottomBorder_f0ca {\n  border-bottom-color: var(--ring-popup-border-color);\n  border-top-left-radius: var(--ring-border-radius);\n  border-top-right-radius: var(--ring-border-radius);\n}\n\n.title_e090 {\n  display: block;\n  float: left;\n\n  margin: 0;\n\n  transform-origin: 0 50%;\n  word-break: break-word;\n\n  color: var(--ring-heading-color);\n\n  font-size: inherit;\n\n  font-weight: bold;\n}\n\n.narrowIsland_d80d .header_e0dd {\n  padding: 0 calc(var(--ring-unit)*2);\n}\n\n.content_bc46 {\n  position: relative;\n\n  display: flex;\n  overflow: auto;\n\n  width: 100%;\n  -webkit-overflow-scrolling: touch;\n}\n\n.scrollableWrapper_eae7 {\n  overflow: auto;\n\n  width: 100%;\n  padding: calc(var(--ring-unit)*2) calc(var(--ring-unit)*4);\n}\n\n.scrollableWrapper_eae7:focus:not(:focus-visible) {\n    outline: none;\n  }\n\n.narrowIsland_d80d .scrollableWrapper_eae7 {\n  padding: calc(var(--ring-unit)*2) calc(var(--ring-unit)*2);\n}\n\n.withoutPaddings_ff2c .scrollableWrapper_eae7 {\n  padding: 0;\n}\n\n.contentWithTopFade_db2a::before {\n  position: absolute;\n  z-index: var(--ring-fixed-z-index);\n  left: 0;\n\n  display: block;\n\n  width: 100%;\n  height: calc(var(--ring-unit)*3);\n\n  content: "";\n\n  pointer-events: none;\n\n  opacity: 0.8;\n\n  background: linear-gradient(to top, rgba(255, 255, 255, 0), var(--ring-content-background-color));\n}\n\n.contentWithTopFade_db2a:first-child::before {\n  border-top-left-radius: var(--ring-border-radius);\n  border-top-right-radius: var(--ring-border-radius);\n}\n\n.contentWithBottomFade_e909::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n\n  display: block;\n\n  width: 100%;\n  height: calc(var(--ring-unit)*3);\n\n  content: "";\n  pointer-events: none;\n\n  opacity: 0.8;\n  border-bottom-right-radius: var(--ring-border-radius);\n  border-bottom-left-radius: var(--ring-border-radius);\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--ring-content-background-color));\n}\n',"",{version:3,sources:["webpack://./src/island/island.css"],names:[],mappings:"AAKA;EACE,aAAa;EACb,sBAAsB;;EAEtB,wCAAwC;EACxC,wCAAwC;;EAExC,sDAAsD;EACtD,oDAAoD;AACtD;;AAEA;EACE,oCAAoC;;EAEpC,oCAAoC;AACtC;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,2EAA+E;;EAE/E,oCAAoC;;EAEpC,oCAAoC;;EAEpC,iBAAiB;AACnB;;AAEA;EACE,mDAAmD;EACnD,iDAAiD;EACjD,kDAAkD;AACpD;;AAEA;EACE,cAAc;EACd,WAAW;;EAEX,SAAS;;EAET,uBAAuB;EACvB,sBAAsB;;EAEtB,gCAAgC;;EAEhC,kBAAkB;;EAElB,iBAAiB;AACnB;;AAEA;EACE,mCAAqC;AACvC;;AAEA;EACE,kBAAkB;;EAElB,aAAa;EACb,cAAc;;EAEd,WAAW;EACX,iCAAiC;AACnC;;AAEA;EACE,cAAc;;EAEd,WAAW;EACX,0DAA8D;AAKhE;;AAHE;IACE,aAAa;EACf;;AAGF;EACE,0DAA8D;AAChE;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,kCAAkC;EAClC,OAAO;;EAEP,cAAc;;EAEd,WAAW;EACX,gCAAkC;;EAElC,WAAW;;EAEX,oBAAoB;;EAEpB,YAAY;;EAEZ,iGAAgE;AAClE;;AAEA;EACE,iDAAiD;EACjD,kDAAkD;AACpD;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;;EAEP,cAAc;;EAEd,WAAW;EACX,gCAAkC;;EAElC,WAAW;EACX,oBAAoB;;EAEpB,YAAY;EACZ,qDAAqD;EACrD,oDAAoD;EACpD,oGAAmE;AACrE",sourcesContent:['@import "../global/variables.css";\n\n@value gradientStart: rgba(255, 255, 255, 0);\n@value gradientStop: var(--ring-content-background-color);\n\n.island {\n  display: flex;\n  flex-direction: column;\n\n  border: 1px solid var(--ring-line-color);\n  border-radius: var(--ring-border-radius);\n\n  background-color: var(--ring-content-background-color);\n  box-shadow: 0 1px 4px var(--ring-popup-shadow-color);\n}\n\n.withTransparentBottomBorder {\n  transition: border-bottom-color 0.1s;\n\n  border-bottom: 1px solid transparent;\n}\n\n.header {\n  box-sizing: border-box;\n  width: 100%;\n  padding: calc(var(--ring-unit) * 2) calc(var(--ring-unit) * 4) var(--ring-unit);\n\n  transition: border-bottom-color 0.1s;\n\n  border-bottom: 1px solid transparent;\n\n  line-height: 24px;\n}\n\n.withBottomBorder.withBottomBorder {\n  border-bottom-color: var(--ring-popup-border-color);\n  border-top-left-radius: var(--ring-border-radius);\n  border-top-right-radius: var(--ring-border-radius);\n}\n\n.title {\n  display: block;\n  float: left;\n\n  margin: 0;\n\n  transform-origin: 0 50%;\n  word-break: break-word;\n\n  color: var(--ring-heading-color);\n\n  font-size: inherit;\n\n  font-weight: bold;\n}\n\n.narrowIsland .header {\n  padding: 0 calc(var(--ring-unit) * 2);\n}\n\n.content {\n  position: relative;\n\n  display: flex;\n  overflow: auto;\n\n  width: 100%;\n  -webkit-overflow-scrolling: touch;\n}\n\n.scrollableWrapper {\n  overflow: auto;\n\n  width: 100%;\n  padding: calc(var(--ring-unit) * 2) calc(var(--ring-unit) * 4);\n\n  &:focus:not(:focus-visible) {\n    outline: none;\n  }\n}\n\n.narrowIsland .scrollableWrapper {\n  padding: calc(var(--ring-unit) * 2) calc(var(--ring-unit) * 2);\n}\n\n.withoutPaddings .scrollableWrapper {\n  padding: 0;\n}\n\n.contentWithTopFade::before {\n  position: absolute;\n  z-index: var(--ring-fixed-z-index);\n  left: 0;\n\n  display: block;\n\n  width: 100%;\n  height: calc(var(--ring-unit) * 3);\n\n  content: "";\n\n  pointer-events: none;\n\n  opacity: 0.8;\n\n  background: linear-gradient(to top, gradientStart, gradientStop);\n}\n\n.contentWithTopFade:first-child::before {\n  border-top-left-radius: var(--ring-border-radius);\n  border-top-right-radius: var(--ring-border-radius);\n}\n\n.contentWithBottomFade::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n\n  display: block;\n\n  width: 100%;\n  height: calc(var(--ring-unit) * 3);\n\n  content: "";\n  pointer-events: none;\n\n  opacity: 0.8;\n  border-bottom-right-radius: var(--ring-border-radius);\n  border-bottom-left-radius: var(--ring-border-radius);\n  background: linear-gradient(to bottom, gradientStart, gradientStop);\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={gradientStart:"rgba(255, 255, 255, 0)",gradientStop:"var(--ring-content-background-color)",island:"island_a108",withTransparentBottomBorder:"withTransparentBottomBorder_cf73",header:"header_e0dd",withBottomBorder:"withBottomBorder_f0ca",title:"title_e090",narrowIsland:"narrowIsland_d80d",content:"content_bc46",scrollableWrapper:"scrollableWrapper_eae7",withoutPaddings:"withoutPaddings_ff2c",contentWithTopFade:"contentWithTopFade_db2a",contentWithBottomFade:"contentWithBottomFade_e909"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/panel/panel.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dialog_dialog_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/dialog/dialog.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dialog_dialog_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,".panel_ce91 { /* TODO: Invert dependency using :externals CSS Modules selector */\n\n  position: relative;\n\n  margin-top: calc(var(--ring-unit)*2);\n  padding: calc(var(--ring-unit)*2) calc(var(--ring-unit)*4) calc(var(--ring-unit)*4);\n\n  border-top: 1px solid var(--ring-popup-border-color);\n}\n\n.panel_ce91:empty {\n    display: none;\n  }\n\n.panel_ce91 > button:not(:last-child) {\n    margin-right: var(--ring-unit);\n  }\n","",{version:3,sources:["webpack://./src/panel/panel.css"],names:[],mappings:"AAEA,cAC+C,kEAAkE;;EAE/G,kBAAkB;;EAElB,oCAAsC;EACtC,mFAAyF;;EAEzF,oDAAoD;AAStD;;AAPE;IACE,aAAa;EACf;;AAEA;IACE,8BAA8B;EAChC",sourcesContent:['@import "../global/variables.css";\n\n.panel {\n  composes: panel from "../dialog/dialog.css"; /* TODO: Invert dependency using :externals CSS Modules selector */\n\n  position: relative;\n\n  margin-top: calc(var(--ring-unit) * 2);\n  padding: calc(var(--ring-unit) * 2) calc(var(--ring-unit) * 4) calc(var(--ring-unit) * 4);\n\n  border-top: 1px solid var(--ring-popup-border-color);\n\n  &:empty {\n    display: none;\n  }\n\n  & > button:not(:last-child) {\n    margin-right: var(--ring-unit);\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={panel:`panel_ce91 ${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dialog_dialog_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.panel}`};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/panel/panel.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/panel/panel.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/panel/panel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_button_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/button/button.tsx"),_panel__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/panel/panel.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Panel",parameters:{notes:"Displays a button panel."}},basic=()=>{class PanelDemo extends react__WEBPACK_IMPORTED_MODULE_0__.Component{render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_panel__WEBPACK_IMPORTED_MODULE_1__.A,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_2__.Ay,{primary:!0},"Apply changes"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_2__.Ay,null,"Cancel"))}}return react__WEBPACK_IMPORTED_MODULE_0__.createElement(PanelDemo,null)};basic.storyName="Panel",basic.parameters={...basic.parameters,docs:{...basic.parameters?.docs,source:{originalSource:"() => {\n  class PanelDemo extends Component {\n    render() {\n      return <Panel>\n          <Button primary>{'Apply changes'}</Button>\n          <Button>{'Cancel'}</Button>\n        </Panel>;\n    }\n  }\n  return <PanelDemo />;\n}",...basic.parameters?.docs?.source}}}},"./node_modules/util-deprecate/browser.js":(module,__unused_webpack_exports,__webpack_require__)=>{function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);