(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[9165],{"./node_modules/@jetbrains/icons/chevron-10px.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><g><polygon points="5 7.99 1.5 4.5 2.5 3.5 5 6.01 7.5 3.5 8.49 4.5 5 7.99"/></g></svg>'},"./.storybook/react-decorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom_client__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/client.js"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api");const reactDecorator=(StoryFn,context)=>{const node=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>document.createElement("div")),[context.kind,context.name]),root=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>(0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(node)),[node]);return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>()=>root.unmount()),[root]),root.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StoryFn,null))),node},__WEBPACK_DEFAULT_EXPORT__=()=>reactDecorator},"./src/panel/panel.examples.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/react-decorator.tsx"),_button_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/button/button.tsx"),_panel__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/panel/panel.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Panel",decorators:[(0,_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_1__.Z)()],parameters:{storySource:{source:"import React, {Component} from 'react';\n\nimport reactDecorator from '../../.storybook/react-decorator';\n\nimport Button from '../button/button';\n\nimport Panel from './panel';\n\nexport default {\n  title: 'Components/Panel',\n  decorators: [reactDecorator()],\n\n  parameters: {\n    notes: 'Displays a button panel.'\n  }\n};\n\nexport const basic = () => {\n  class PanelDemo extends Component {\n    render() {\n      return (\n        <Panel>\n          <Button primary>{'Apply changes'}</Button>\n          <Button>{'Cancel'}</Button>\n        </Panel>\n      );\n    }\n  }\n\n  return <PanelDemo/>;\n};\n\nbasic.storyName = 'Panel';\n",locationsMap:{basic:{startLoc:{col:21,line:18},endLoc:{col:1,line:31},startBody:{col:21,line:18},endBody:{col:1,line:31}}}},notes:"Displays a button panel."}},basic=()=>{class PanelDemo extends react__WEBPACK_IMPORTED_MODULE_0__.Component{render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_panel__WEBPACK_IMPORTED_MODULE_2__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_3__.ZP,{primary:!0},"Apply changes"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_3__.ZP,null,"Cancel"))}}return react__WEBPACK_IMPORTED_MODULE_0__.createElement(PanelDemo,null)};basic.storyName="Panel",basic.__docgenInfo={description:"",methods:[],displayName:"basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/panel/panel.examples.tsx"]={name:"basic",docgenInfo:basic.__docgenInfo,path:"src/panel/panel.examples.tsx"})},"./src/panel/panel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Panel});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_panel_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/panel/panel.css"),_panel_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_panel_css__WEBPACK_IMPORTED_MODULE_2__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}class Panel extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node};render(){const{className,children,...props}=this.props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_panel_css__WEBPACK_IMPORTED_MODULE_2___default().panel,className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({},props,{className:classes}),children)}}Panel.__docgenInfo={description:"@name Panel",methods:[],displayName:"Panel",props:{className:{type:{name:"string"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/panel/panel.tsx"]={name:"Panel",docgenInfo:Panel.__docgenInfo,path:"src/panel/panel.tsx"})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/dialog/dialog.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_island_island_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/island/island.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_4__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_island_island_css__WEBPACK_IMPORTED_MODULE_3__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,`.container_cf37 {\n  position: fixed;\n  z-index: var(--ring-overlay-z-index);\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  display: flex;\n  overflow: auto;\n  align-items: center;\n  justify-content: center;\n\n  padding: 32px 8px;\n\n  background-color: rgba(255, 255, 255, 0.4);\n}\n\n.innerContainer_bbf1 {\n  display: flex;\n  flex-direction: column;\n\n  max-height: 100%;\n}\n\n.content_aa45 {\n  position: relative;\n\n  width: 464px;\n  min-height: 120px;\n  margin: auto;\n\n  cursor: default;\n  overflow-wrap: break-word;\n}\n\n.content_aa45 .panel_c2d4 {\n    margin-top: 0;\n    padding: 16px 32px 32px;\n\n    border-top: none;\n\n    background-color: transparent;\n  }\n\n/* stylelint-disable-next-line selector-max-specificity */\n\n.content_aa45 .panel_c2d4 > button:not(:last-child) {\n    margin-right: 8px;\n  }\n\n.content_aa45.content_aa45 {\n  box-shadow: var(--ring-dialog-shadow);\n}\n\n.clickableOverlay_a6f0 {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  cursor: pointer;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.clickableOverlay_a6f0:hover + * .closeIcon_dadc {\n  color: var(--ring-icon-hover-color);\n}}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.closeButton_bae7:hover .closeIcon_dadc {\n  color: var(--ring-icon-hover-color);\n}}\n\n.clickableOverlay_a6f0:active + * .closeIcon_dadc {\n  color: var(--ring-main-color);\n}\n\n.closeButton_bae7:active .closeIcon_dadc {\n  color: var(--ring-main-color);\n}\n\n.closeButton_bae7.closeButton_bae7 {\n  position: absolute;\n}\n\n.closeButtonOutside_bd89 {\n  top: 0;\n  right: -32px;\n}\n\n.closeButtonInside_cd4a {\n  top: 12px;\n  right: 8px;\n}\n\n.documentWithoutScroll_bafc {\n  overflow: hidden;\n\n  height: 100%;\n}\n\n.popupTarget_a3ab {\n  position: fixed;\n  z-index: var(--ring-overlay-z-index);\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  pointer-events: none;\n}\n\n.popupTarget_a3ab > :not(.popupTarget_a3ab) {\n    pointer-events: initial;\n  }\n\n.container_cf37 .${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_island_island_css__WEBPACK_IMPORTED_MODULE_3__.default.locals.header} {\n  padding-top: 32px;\n\n  font-size: 24px;\n  line-height: 28px;\n}\n\n.dense_d065 .${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_island_island_css__WEBPACK_IMPORTED_MODULE_3__.default.locals.header} {\n  padding-top: 16px;\n}\n\n.dense_d065 .panel_c2d4 {\n  padding-bottom: 16px;\n}\n`,"",{version:3,sources:["webpack://./src/dialog/dialog.css","<no source>"],names:[],mappings:"AAKA;EACE,eAAe;EACf,oCAAoC;EACpC,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;;EAEP,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,uBAAuB;;EAEvB,iBAA4B;;EAE5B,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;;EAElB,YAAsB;EACtB,iBAA2B;EAC3B,YAAY;;EAEZ,eAAe;EACf,yBAAyB;AAe3B;;AAbE;IACE,aAAa;IACb,uBAAqD;;IAErD,gBAAgB;;IAEhB,6BAA6B;EAC/B;;AAEA,yDAAyD;;AACzD;IACE,iBAAkB;EACpB;;AAGF;EACE,qCAAqC;AACvC;;AAEA;EACE,eAAe;EACf,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;;EAEP,eAAe;AACjB;;ACnEA,wGAAA;EAAA,oCAAA;CAAA,CAAA;;AAAA,wGAAA;EAAA,oCAAA;CAAA,CAAA;;AD6EA;EACE,6BAA6B;AAC/B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,MAAM;EACN,YAAsB;AACxB;;AAEA;EACE,SAAqB;EACrB,UAAW;AACb;;AAEA;EACE,gBAAgB;;EAEhB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,oCAAoC;EACpC,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;;EAEP,oBAAoB;AAKtB;;AAHE;IACE,uBAAuB;EACzB;;AAGF;EACE,iBAA2B;;EAE3B,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,iBAA2B;AAC7B;;AAEA;EACE,oBAA8B;AAChC",sourcesContent:['@import "../global/variables.css";\n\n@value unit from "../global/global.css";\n@value header from "../island/island.css";\n\n.container {\n  position: fixed;\n  z-index: var(--ring-overlay-z-index);\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  display: flex;\n  overflow: auto;\n  align-items: center;\n  justify-content: center;\n\n  padding: calc(unit * 4) unit;\n\n  background-color: rgba(255, 255, 255, 0.4);\n}\n\n.innerContainer {\n  display: flex;\n  flex-direction: column;\n\n  max-height: 100%;\n}\n\n.content {\n  position: relative;\n\n  width: calc(unit * 58);\n  min-height: calc(unit * 15);\n  margin: auto;\n\n  cursor: default;\n  overflow-wrap: break-word;\n\n  & .panel {\n    margin-top: 0;\n    padding: calc(unit * 2) calc(unit * 4) calc(unit * 4);\n\n    border-top: none;\n\n    background-color: transparent;\n  }\n\n  /* stylelint-disable-next-line selector-max-specificity */\n  & .panel > button:not(:last-child) {\n    margin-right: unit;\n  }\n}\n\n.content.content {\n  box-shadow: var(--ring-dialog-shadow);\n}\n\n.clickableOverlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  cursor: pointer;\n}\n\n.clickableOverlay:hover + * .closeIcon {\n  color: var(--ring-icon-hover-color);\n}\n\n.closeButton:hover .closeIcon {\n  color: var(--ring-icon-hover-color);\n}\n\n.clickableOverlay:active + * .closeIcon {\n  color: var(--ring-main-color);\n}\n\n.closeButton:active .closeIcon {\n  color: var(--ring-main-color);\n}\n\n.closeButton.closeButton {\n  position: absolute;\n}\n\n.closeButtonOutside {\n  top: 0;\n  right: calc(unit * -4);\n}\n\n.closeButtonInside {\n  top: calc(unit * 1.5);\n  right: unit;\n}\n\n.documentWithoutScroll {\n  overflow: hidden;\n\n  height: 100%;\n}\n\n.popupTarget {\n  position: fixed;\n  z-index: var(--ring-overlay-z-index);\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  pointer-events: none;\n\n  & > :not(.popupTarget) {\n    pointer-events: initial;\n  }\n}\n\n.container .header {\n  padding-top: calc(unit * 4);\n\n  font-size: 24px;\n  line-height: 28px;\n}\n\n.dense .header {\n  padding-top: calc(unit * 2);\n}\n\n.dense .panel {\n  padding-bottom: calc(unit * 2);\n}\n',null],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={unit:`${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.unit}`,header:`${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_island_island_css__WEBPACK_IMPORTED_MODULE_3__.default.locals.header}`,container:"container_cf37",innerContainer:"innerContainer_bbf1",content:"content_aa45",panel:"panel_c2d4",clickableOverlay:"clickableOverlay_a6f0",closeIcon:"closeIcon_dadc",closeButton:"closeButton_bae7",closeButtonOutside:"closeButtonOutside_bd89",closeButtonInside:"closeButtonInside_cd4a",documentWithoutScroll:"documentWithoutScroll_bafc",popupTarget:"popupTarget_a3ab",dense:"dense_d065"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/island/island.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,'.island_a108 {\n  display: flex;\n  flex-direction: column;\n\n  border: 1px solid var(--ring-line-color);\n  border-radius: var(--ring-border-radius);\n\n  background-color: var(--ring-content-background-color);\n  box-shadow: 0 1px 4px var(--ring-popup-shadow-color);\n}\n\n.withTransparentBottomBorder_cf73 {\n  transition: border-bottom-color 0.1s;\n\n  border-bottom: 1px solid transparent;\n}\n\n.header_e0dd {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 16px 32px 8px;\n\n  transition: border-bottom-color 0.1s;\n\n  border-bottom: 1px solid transparent;\n\n  line-height: 24px;\n}\n\n.withBottomBorder_f0ca.withBottomBorder_f0ca {\n  border-bottom-color: var(--ring-popup-border-color);\n  border-top-left-radius: var(--ring-border-radius);\n  border-top-right-radius: var(--ring-border-radius);\n}\n\n.title_e090 {\n  display: block;\n  float: left;\n\n  margin: 0;\n\n  transform-origin: 0 50%;\n  word-break: break-word;\n\n  color: var(--ring-heading-color);\n\n  font-size: inherit;\n\n  font-weight: bold;\n}\n\n.narrowIsland_d80d .header_e0dd {\n  padding: 0 16px;\n}\n\n.content_bc46 {\n  position: relative;\n\n  display: flex;\n  overflow: auto;\n\n  width: 100%;\n  -webkit-overflow-scrolling: touch;\n}\n\n.scrollableWrapper_eae7 {\n  overflow: auto;\n\n  width: 100%;\n  padding: 16px 32px;\n}\n\n.scrollableWrapper_eae7:focus:not(:focus-visible) {\n    outline: none;\n  }\n\n.narrowIsland_d80d .scrollableWrapper_eae7 {\n  padding: 16px 16px;\n}\n\n.withoutPaddings_ff2c .scrollableWrapper_eae7 {\n  padding: 0;\n}\n\n.contentWithTopFade_db2a::before {\n  position: absolute;\n  z-index: var(--ring-fixed-z-index);\n  left: 0;\n\n  display: block;\n\n  width: 100%;\n  height: 24px;\n\n  content: "";\n\n  pointer-events: none;\n\n  opacity: 0.8;\n\n  background: linear-gradient(to top, rgba(255, 255, 255, 0), var(--ring-content-background-color));\n}\n\n.contentWithTopFade_db2a:first-child::before {\n  border-top-left-radius: var(--ring-border-radius);\n  border-top-right-radius: var(--ring-border-radius);\n}\n\n.contentWithBottomFade_e909::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n\n  display: block;\n\n  width: 100%;\n  height: 24px;\n\n  content: "";\n  pointer-events: none;\n\n  opacity: 0.8;\n  border-bottom-right-radius: var(--ring-border-radius);\n  border-bottom-left-radius: var(--ring-border-radius);\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--ring-content-background-color));\n}\n',"",{version:3,sources:["webpack://./src/island/island.css"],names:[],mappings:"AAMA;EACE,aAAa;EACb,sBAAsB;;EAEtB,wCAAwC;EACxC,wCAAwC;;EAExC,sDAAsD;EACtD,oDAAoD;AACtD;;AAEA;EACE,oCAAoC;;EAEpC,oCAAoC;AACtC;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,sBAA2C;;EAE3C,oCAAoC;;EAEpC,oCAAoC;;EAEpC,iBAAiB;AACnB;;AAEA;EACE,mDAAmD;EACnD,iDAAiD;EACjD,kDAAkD;AACpD;;AAEA;EACE,cAAc;EACd,WAAW;;EAEX,SAAS;;EAET,uBAAuB;EACvB,sBAAsB;;EAEtB,gCAAgC;;EAEhC,kBAAkB;;EAElB,iBAAiB;AACnB;;AAEA;EACE,eAAyB;AAC3B;;AAEA;EACE,kBAAkB;;EAElB,aAAa;EACb,cAAc;;EAEd,WAAW;EACX,iCAAiC;AACnC;;AAEA;EACE,cAAc;;EAEd,WAAW;EACX,kBAAsC;AAKxC;;AAHE;IACE,aAAa;EACf;;AAGF;EACE,kBAAsC;AACxC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,kCAAkC;EAClC,OAAO;;EAEP,cAAc;;EAEd,WAAW;EACX,YAAsB;;EAEtB,WAAW;;EAEX,oBAAoB;;EAEpB,YAAY;;EAEZ,iGAAgE;AAClE;;AAEA;EACE,iDAAiD;EACjD,kDAAkD;AACpD;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;;EAEP,cAAc;;EAEd,WAAW;EACX,YAAsB;;EAEtB,WAAW;EACX,oBAAoB;;EAEpB,YAAY;EACZ,qDAAqD;EACrD,oDAAoD;EACpD,oGAAmE;AACrE",sourcesContent:['@import "../global/variables.css";\n\n@value unit from "../global/global.css";\n@value gradientStart: rgba(255, 255, 255, 0);\n@value gradientStop: var(--ring-content-background-color);\n\n.island {\n  display: flex;\n  flex-direction: column;\n\n  border: 1px solid var(--ring-line-color);\n  border-radius: var(--ring-border-radius);\n\n  background-color: var(--ring-content-background-color);\n  box-shadow: 0 1px 4px var(--ring-popup-shadow-color);\n}\n\n.withTransparentBottomBorder {\n  transition: border-bottom-color 0.1s;\n\n  border-bottom: 1px solid transparent;\n}\n\n.header {\n  box-sizing: border-box;\n  width: 100%;\n  padding: calc(unit * 2) calc(unit * 4) unit;\n\n  transition: border-bottom-color 0.1s;\n\n  border-bottom: 1px solid transparent;\n\n  line-height: 24px;\n}\n\n.withBottomBorder.withBottomBorder {\n  border-bottom-color: var(--ring-popup-border-color);\n  border-top-left-radius: var(--ring-border-radius);\n  border-top-right-radius: var(--ring-border-radius);\n}\n\n.title {\n  display: block;\n  float: left;\n\n  margin: 0;\n\n  transform-origin: 0 50%;\n  word-break: break-word;\n\n  color: var(--ring-heading-color);\n\n  font-size: inherit;\n\n  font-weight: bold;\n}\n\n.narrowIsland .header {\n  padding: 0 calc(unit * 2);\n}\n\n.content {\n  position: relative;\n\n  display: flex;\n  overflow: auto;\n\n  width: 100%;\n  -webkit-overflow-scrolling: touch;\n}\n\n.scrollableWrapper {\n  overflow: auto;\n\n  width: 100%;\n  padding: calc(unit * 2) calc(unit * 4);\n\n  &:focus:not(:focus-visible) {\n    outline: none;\n  }\n}\n\n.narrowIsland .scrollableWrapper {\n  padding: calc(unit * 2) calc(unit * 2);\n}\n\n.withoutPaddings .scrollableWrapper {\n  padding: 0;\n}\n\n.contentWithTopFade::before {\n  position: absolute;\n  z-index: var(--ring-fixed-z-index);\n  left: 0;\n\n  display: block;\n\n  width: 100%;\n  height: calc(unit * 3);\n\n  content: "";\n\n  pointer-events: none;\n\n  opacity: 0.8;\n\n  background: linear-gradient(to top, gradientStart, gradientStop);\n}\n\n.contentWithTopFade:first-child::before {\n  border-top-left-radius: var(--ring-border-radius);\n  border-top-right-radius: var(--ring-border-radius);\n}\n\n.contentWithBottomFade::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n\n  display: block;\n\n  width: 100%;\n  height: calc(unit * 3);\n\n  content: "";\n  pointer-events: none;\n\n  opacity: 0.8;\n  border-bottom-right-radius: var(--ring-border-radius);\n  border-bottom-left-radius: var(--ring-border-radius);\n  background: linear-gradient(to bottom, gradientStart, gradientStop);\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={unit:`${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.unit}`,gradientStart:"rgba(255, 255, 255, 0)",gradientStop:"var(--ring-content-background-color)",island:"island_a108",withTransparentBottomBorder:"withTransparentBottomBorder_cf73",header:"header_e0dd",withBottomBorder:"withBottomBorder_f0ca",title:"title_e090",narrowIsland:"narrowIsland_d80d",content:"content_bc46",scrollableWrapper:"scrollableWrapper_eae7",withoutPaddings:"withoutPaddings_ff2c",contentWithTopFade:"contentWithTopFade_db2a",contentWithBottomFade:"contentWithBottomFade_e909"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/panel/panel.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_dialog_dialog_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/dialog/dialog.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_4__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_dialog_dialog_css__WEBPACK_IMPORTED_MODULE_3__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,".panel_ce91 { /* TODO: Invert dependency using :externals CSS Modules selector */\n\n  position: relative;\n\n  margin-top: 16px;\n  padding: 16px 32px 32px;\n\n  border-top: 1px solid var(--ring-popup-border-color);\n}\n\n.panel_ce91:empty {\n    display: none;\n  }\n\n.panel_ce91 > button:not(:last-child) {\n    margin-right: 8px;\n  }\n","",{version:3,sources:["webpack://./src/panel/panel.css"],names:[],mappings:"AAIA,cAC+C,kEAAkE;;EAE/G,kBAAkB;;EAElB,gBAA0B;EAC1B,uBAAqD;;EAErD,oDAAoD;AAStD;;AAPE;IACE,aAAa;EACf;;AAEA;IACE,iBAAkB;EACpB",sourcesContent:['@import "../global/variables.css";\n\n@value unit from "../global/global.css";\n\n.panel {\n  composes: panel from "../dialog/dialog.css"; /* TODO: Invert dependency using :externals CSS Modules selector */\n\n  position: relative;\n\n  margin-top: calc(unit * 2);\n  padding: calc(unit * 2) calc(unit * 4) calc(unit * 4);\n\n  border-top: 1px solid var(--ring-popup-border-color);\n\n  &:empty {\n    display: none;\n  }\n\n  & > button:not(:last-child) {\n    margin-right: unit;\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={unit:`${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.unit}`,panel:`panel_ce91 ${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_dialog_dialog_css__WEBPACK_IMPORTED_MODULE_3__.default.locals.panel}`};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/panel/panel.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/panel/panel.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./node_modules/util-deprecate/browser.js":(module,__unused_webpack_exports,__webpack_require__)=>{function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);