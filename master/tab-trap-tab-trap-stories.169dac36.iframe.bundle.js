(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[5599],{"./node_modules/@jetbrains/icons/chevron-10px.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><g><polygon points="5 7.99 1.5 4.5 2.5 3.5 5 6.01 7.5 3.5 8.49 4.5 5 7.99"/></g></svg>'},"./node_modules/@jetbrains/icons/close-12px.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path d="M5.997 6.784l4.454 4.359.787-.804-4.43-4.336 4.465-4.3-.78-.81-4.49 4.323L1.55.857l-.787.804 4.43 4.336-4.465 4.3.78.81 4.49-4.323z"/></svg>'},"./.storybook/react-decorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom_client__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/client.js"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api");const reactDecorator=(StoryFn,context)=>{const node=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>document.createElement("div")),[context.kind,context.name]),root=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>(0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(node)),[node]);return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>()=>root.unmount()),[root]),root.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StoryFn,null))),node},__WEBPACK_DEFAULT_EXPORT__=()=>reactDecorator},"./src/tab-trap/tab-trap.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/react-decorator.tsx"),_input_input__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/input/input.tsx"),_button_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/button/button.tsx"),_link_link__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/link/link.tsx"),_group_group__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/group/group.tsx"),_tab_trap__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/tab-trap/tab-trap.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/TabTrap",decorators:[(0,_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_1__.Z)()],parameters:{storySource:{source:"import React, {Component} from 'react';\n\nimport reactDecorator from '../../.storybook/react-decorator';\n\nimport Input from '../input/input';\nimport Button from '../button/button';\nimport Link from '../link/link';\nimport Group from '../group/group';\n\nimport TabTrap from './tab-trap';\n\nexport default {\n  title: 'Components/TabTrap',\n  decorators: [reactDecorator()],\n\n  parameters: {\n    notes: 'Disallows tabbing out of a designated area.',\n    hermione: {skip: true}\n  }\n};\n\nexport const basic = () => {\n  class TabTrapDemo extends Component {\n    render() {\n      return (\n        <div>\n          <Button>Outside of trap</Button>\n\n          <h4>Trap start</h4>\n          <TabTrap>\n            <Input placeholder=\"inside trap\" autoFocus/>\n            <Group>\n              <Button>Test</Button>\n              <Link href=\"#\">Test link</Link>\n            </Group>\n          </TabTrap>\n\n          <h4>Trap end</h4>\n\n          <Button>Outside of trap</Button>\n        </div>\n      );\n    }\n  }\n\n  return <TabTrapDemo/>;\n};\n\nbasic.storyName = 'TabTrap';\n",locationsMap:{basic:{startLoc:{col:21,line:22},endLoc:{col:1,line:47},startBody:{col:21,line:22},endBody:{col:1,line:47}}}},notes:"Disallows tabbing out of a designated area.",hermione:{skip:!0}}},basic=()=>{class TabTrapDemo extends react__WEBPACK_IMPORTED_MODULE_0__.Component{render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_2__.ZP,null,"Outside of trap"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4",null,"Trap start"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tab_trap__WEBPACK_IMPORTED_MODULE_3__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_input_input__WEBPACK_IMPORTED_MODULE_4__.ZP,{placeholder:"inside trap",autoFocus:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_group_group__WEBPACK_IMPORTED_MODULE_5__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_2__.ZP,null,"Test"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_link_link__WEBPACK_IMPORTED_MODULE_6__.ZP,{href:"#"},"Test link"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4",null,"Trap end"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_2__.ZP,null,"Outside of trap"))}}return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabTrapDemo,null)};basic.storyName="TabTrap",basic.__docgenInfo={description:"",methods:[],displayName:"basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tab-trap/tab-trap.stories.tsx"]={name:"basic",docgenInfo:basic.__docgenInfo,path:"src/tab-trap/tab-trap.stories.tsx"})},"./src/global/composeRefs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function(){for(var _len=arguments.length,refs=new Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return value=>refs.forEach((ref=>{"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}))}},"./src/global/prop-types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>refObject});var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);const refObject=value=>prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({current:value})},"./src/group/group.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Group});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_group_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/group/group.css"),_group_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_group_css__WEBPACK_IMPORTED_MODULE_2__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}class Group extends react__WEBPACK_IMPORTED_MODULE_0__.Component{static propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string};render(){const{children,className,...restProps}=this.props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_group_css__WEBPACK_IMPORTED_MODULE_2___default().group,className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",_extends({},restProps,{className:classes}),children)}}Group.__docgenInfo={description:"@name Group",methods:[],displayName:"Group",props:{children:{type:{name:"node"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/group/group.tsx"]={name:"Group",docgenInfo:Group.__docgenInfo,path:"src/group/group.tsx"})},"./src/link/link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{YL:()=>setCompatibilityMode,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,g8:()=>linkHOC});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_global_memoize__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/global/memoize.ts"),_global_data_tests__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/global/data-tests.ts"),_clickableLink__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/link/clickableLink.tsx"),_link_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/link/link.css"),_link_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_link_css__WEBPACK_IMPORTED_MODULE_2__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}let isCompatibilityMode=!1;function setCompatibilityMode(isEnabled){isCompatibilityMode=isEnabled}const makeWrapText=(0,_global_memoize__WEBPACK_IMPORTED_MODULE_3__.Z)((innerClassName=>{function WrapText(_ref){let{className,children}=_ref;const classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_link_css__WEBPACK_IMPORTED_MODULE_2___default().inner,className,innerClassName);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:classes},children)}return WrapText.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node},(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(WrapText)}));function linkHOC(ComposedComponent){const isCustom="string"!=typeof ComposedComponent&&ComposedComponent!==_clickableLink__WEBPACK_IMPORTED_MODULE_5__.Z;return class Link extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,innerClassName:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,active:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,inherit:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,pseudo:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,hover:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,prop_types__WEBPACK_IMPORTED_MODULE_4___default().func]),"data-test":prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,href:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,onPlainLeftClick:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,onClick:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func};getChildren(){const{children,innerClassName}=this.props,WrapText=makeWrapText(innerClassName);return"function"==typeof children?children(WrapText):react__WEBPACK_IMPORTED_MODULE_0__.createElement(WrapText,null,children)}render(){const{active,inherit,pseudo,hover,className,"data-test":dataTest,href,innerClassName,children,onPlainLeftClick,onClick,...restProps}=this.props,useButton=pseudo||!isCustom&&null==href,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_link_css__WEBPACK_IMPORTED_MODULE_2___default().link,className,{[_link_css__WEBPACK_IMPORTED_MODULE_2___default().active]:active,[_link_css__WEBPACK_IMPORTED_MODULE_2___default().inherit]:inherit,[_link_css__WEBPACK_IMPORTED_MODULE_2___default().hover]:hover,[_link_css__WEBPACK_IMPORTED_MODULE_2___default().compatibilityUnderlineMode]:isCompatibilityMode,[_link_css__WEBPACK_IMPORTED_MODULE_2___default().pseudo]:useButton,[_link_css__WEBPACK_IMPORTED_MODULE_2___default().text]:"function"!=typeof children});let props=restProps;return isCustom&&!props.activeClassName&&(props={...props,activeClassName:_link_css__WEBPACK_IMPORTED_MODULE_2___default().active}),useButton?react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",_extends({type:"button"},props,{className:classes,onClick:onClick||onPlainLeftClick,"data-test":(0,_global_data_tests__WEBPACK_IMPORTED_MODULE_6__.Z)("ring-link",dataTest)}),this.getChildren()):react__WEBPACK_IMPORTED_MODULE_0__.createElement(ComposedComponent,_extends({},props,{href,className:classes,onClick,onPlainLeftClick,"data-test":(0,_global_data_tests__WEBPACK_IMPORTED_MODULE_6__.Z)("ring-link",dataTest)}),this.getChildren())}}}const __WEBPACK_DEFAULT_EXPORT__=linkHOC(_clickableLink__WEBPACK_IMPORTED_MODULE_5__.Z)},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/group/group.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,".group_ba3b > *:not(:last-child) {\n    margin-right: 8px;\n  }\n","",{version:3,sources:["webpack://./src/group/group.css"],names:[],mappings:"AAKE;IACE,iBAAkB;EACpB",sourcesContent:['@import "../global/variables.css";\n\n@value unit from "../global/global.css";\n\n.group {\n  & > *:not(:last-child) {\n    margin-right: unit;\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={unit:`${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.unit}`,group:"group_ba3b"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/link/link.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,".link_c73c {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  outline: none;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover {\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover {\n    text-decoration: none;\n  }}\n\n.link_c73c {\n    text-decoration: none;\n  }\n\n.link_c73c.hover_e4ca {\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover .inner_d16b {\n    border-width: 0;\n    border-bottom: 2px solid;\n    border-image-source: linear-gradient(currentcolor 50%, transparent 50%);\n    border-image-slice: 0 0 100% 0;\n  }}\n\n.link_c73c.active_eef2 {\n    color: inherit;\n  }\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c.compatibilityUnderlineMode_a632:hover {\n    text-decoration: underline;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n  }\n    .link_c73c.compatibilityUnderlineMode_a632:hover .inner_d16b {\n      border: none;\n    }}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c.pseudo_cb40:hover {\n    text-decoration: none;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n  }\n    .link_c73c.pseudo_cb40:hover .inner_d16b {\n      border: none;\n    }}\n\n.link_c73c:focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n\n@media (min-resolution: 2dppx) {@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover .inner_d16b {\n    border-bottom-width: 1px;\n  }}\n}\n\n.text_e0fe {\n  border-radius: var(--ring-border-radius);\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.inherit_c3d7:not(:hover) {\n  color: inherit;\n}}\n\n.pseudo_cb40 {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n}\n\n.pseudo_cb40::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n","",{version:3,sources:["webpack://./src/link/link.css","<no source>"],names:[],mappings:"AAEA;EACE,eAAe;EACf,uCAAuC;;EAEvC,6BAA6B;;EA2C7B,aAAa;AAKf;;ACtDA,wGAAA;IAAA,iBAAA;;IAAA,oCAAA;GAAA,CAAA;;AAAA,wGAAA;IAAA,sBAAA;GAAA,CAAA;;ADQE;IAEE,qBAAqB;EACvB;;AAEA;IAEE,gBAAgB;;IAEhB,mCAAmC;EACrC;;AClBF,wGAAA;IAAA,gBAAA;IAAA,yBAAA;IAAA,wEAAA;IAAA,+BAAA;GAAA,CAAA;;AD2BE;IACE,cAAc;EAChB;;AC7BF,wGAAA;IAAA,2BAAA;;IAAA,0DAAA;GAAA;IAAA;MAAA,aAAA;KAAA,CAAA;;AAAA,wGAAA;IAAA,sBAAA;;IAAA,0DAAA;GAAA;IAAA;MAAA,aAAA;KAAA,CAAA;;ADmDE;IACE,oDAAoD;EACtD;;AAGF,gCCxDA,wGAAA;IAAA,yBAAA;GAAA,CAAA;AD4DA;;AAEA;EACE,wCAAwC;AAC1C;;AChEA,wGAAA;EAAA,eAAA;CAAA,CAAA;;ADsEA;EACE,SAAS;EACT,UAAU;;EAEV,gBAAgB;;EAEhB,SAAS;;EAET,uBAAuB;;EAEvB,aAAa;AAOf;;AALE;IACE,UAAU;;IAEV,SAAS;EACX",sourcesContent:['@import "../global/variables.css";\n\n.link {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  &,\n  &:hover {\n    text-decoration: none;\n  }\n\n  &:hover,\n  &.hover {\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n  &:hover .inner {\n    border-width: 0;\n    border-bottom: 2px solid;\n    border-image-source: linear-gradient(currentcolor 50%, transparent 50%);\n    border-image-slice: 0 0 100% 0;\n  }\n\n  &.active {\n    color: inherit;\n  }\n\n  &.compatibilityUnderlineMode:hover {\n    text-decoration: underline;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n    & .inner {\n      border: none;\n    }\n  }\n\n  &.pseudo:hover {\n    text-decoration: none;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n    & .inner {\n      border: none;\n    }\n  }\n\n  outline: none;\n\n  &:focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n}\n\n@media (min-resolution: 2dppx) {\n  .link:hover .inner {\n    border-bottom-width: 1px;\n  }\n}\n\n.text {\n  border-radius: var(--ring-border-radius);\n}\n\n.inherit:not(:hover) {\n  color: inherit;\n}\n\n.pseudo {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n\n  &::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n}\n',null],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={link:"link_c73c",hover:"hover_e4ca",inner:"inner_d16b",active:"active_eef2",compatibilityUnderlineMode:"compatibilityUnderlineMode_a632",pseudo:"pseudo_cb40",text:"text_e0fe",inherit:"inherit_c3d7"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/group/group.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/group/group.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/link/link.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/link/link.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./node_modules/util-deprecate/browser.js":(module,__unused_webpack_exports,__webpack_require__)=>{function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);