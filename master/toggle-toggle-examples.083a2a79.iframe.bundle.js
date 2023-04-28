(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[6807],{"./.storybook/react-decorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api"),_src_global_react_render_adapter__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/global/react-render-adapter.ts");const reactDecorator=(StoryFn,context)=>{const node=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>document.createElement("div")),[context.kind,context.name]);return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>()=>(0,_src_global_react_render_adapter__WEBPACK_IMPORTED_MODULE_2__.uy)(node)),[node]),(0,_src_global_react_render_adapter__WEBPACK_IMPORTED_MODULE_2__.sY)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StoryFn,null)),node),node};__webpack_exports__.Z=()=>reactDecorator},"./src/toggle/toggle.examples.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:function(){return basic}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/react-decorator.tsx"),_toggle__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/toggle/toggle.tsx");__webpack_exports__.default={title:"Components/Toggle",decorators:[(0,_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_1__.Z)()],parameters:{storySource:{source:"import React from 'react';\n\nimport reactDecorator from '../../.storybook/react-decorator';\n\nimport Toggle, {Size} from './toggle';\n\nexport default {\n  title: 'Components/Toggle',\n  decorators: [reactDecorator()],\n\n  parameters: {\n    notes: 'Displays a checkbox as an animated on/off toggle.',\n    zeplinLink: 'https://app.zeplin.io/project/5afd8f5511c2d1c625752bb0/screen/6193bc7012b7bdaa2dae6aa9'\n  }\n};\n\nexport const basic = () => (\n  <div>\n    <h1>Size 14</h1>\n    <div>\n      <Toggle>Unchecked by default</Toggle>\n    </div>\n    <div>\n      <Toggle defaultChecked>Checked by default</Toggle>\n    </div>\n    <div>\n      <Toggle disabled>Disabled unchecked</Toggle>\n    </div>\n    <div>\n      <Toggle disabled defaultChecked>Disabled checked</Toggle>\n    </div>\n    <div>\n      <Toggle pale>Pale unchecked by default</Toggle>\n    </div>\n    <div>\n      <Toggle pale defaultChecked>Pale checked by default</Toggle>\n    </div>\n    <div>\n      <Toggle pale disabled>Pale disabled unchecked</Toggle>\n    </div>\n    <div>\n      <Toggle pale disabled defaultChecked>Pale disabled checked</Toggle>\n    </div>\n    <div>\n      <Toggle leftLabel=\"With label on the left\"/>\n    </div>\n    <h1>Size 16</h1>\n    <div>\n      <Toggle size={Size.Size16}>Unchecked by default</Toggle>\n    </div>\n    <div>\n      <Toggle size={Size.Size16} defaultChecked>Checked by default</Toggle>\n    </div>\n    <div>\n      <Toggle size={Size.Size16} disabled>Disabled unchecked</Toggle>\n    </div>\n    <div>\n      <Toggle size={Size.Size16} disabled defaultChecked>Disabled checked</Toggle>\n    </div>\n    <div>\n      <Toggle size={Size.Size16} pale>Pale unchecked by default</Toggle>\n    </div>\n    <div>\n      <Toggle size={Size.Size16} pale defaultChecked>Pale checked by default</Toggle>\n    </div>\n    <div>\n      <Toggle size={Size.Size16} pale disabled>Pale disabled unchecked</Toggle>\n    </div>\n    <div>\n      <Toggle size={Size.Size16} pale disabled defaultChecked>Pale disabled checked</Toggle>\n    </div>\n    <div>\n      <Toggle size={Size.Size16} leftLabel=\"With label on the left\"/>\n    </div>\n    <h1>Size 20</h1>\n    <div style={{lineHeight: '24px'}}>\n      <div>\n        <Toggle size={Size.Size20}>Unchecked by default</Toggle>\n      </div>\n      <div>\n        <Toggle size={Size.Size20} defaultChecked>Checked by default</Toggle>\n      </div>\n      <div>\n        <Toggle size={Size.Size20} disabled>Disabled unchecked</Toggle>\n      </div>\n      <div>\n        <Toggle size={Size.Size20} disabled defaultChecked>Disabled checked</Toggle>\n      </div>\n      <div>\n        <Toggle size={Size.Size20} pale>Pale unchecked by default</Toggle>\n      </div>\n      <div>\n        <Toggle size={Size.Size20} pale defaultChecked>Pale checked by default</Toggle>\n      </div>\n      <div>\n        <Toggle size={Size.Size20} pale disabled>Pale disabled unchecked</Toggle>\n      </div>\n      <div>\n        <Toggle size={Size.Size20} pale disabled defaultChecked>Pale disabled checked</Toggle>\n      </div>\n      <div>\n        <Toggle size={Size.Size20} leftLabel=\"With label on the left\"/>\n      </div>\n    </div>\n  </div>\n);\n\nbasic.storyName = 'Toggle';\n",locationsMap:{basic:{startLoc:{col:21,line:17},endLoc:{col:1,line:106},startBody:{col:21,line:17},endBody:{col:1,line:106}}}},notes:"Displays a checkbox as an animated on/off toggle.",zeplinLink:"https://app.zeplin.io/project/5afd8f5511c2d1c625752bb0/screen/6193bc7012b7bdaa2dae6aa9"}};const basic=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,"Size 14"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,null,"Unchecked by default")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,{defaultChecked:!0},"Checked by default")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,{disabled:!0},"Disabled unchecked")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,{disabled:!0,defaultChecked:!0},"Disabled checked")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,{pale:!0},"Pale unchecked by default")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,{pale:!0,defaultChecked:!0},"Pale checked by default")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,{pale:!0,disabled:!0},"Pale disabled unchecked")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,{pale:!0,disabled:!0,defaultChecked:!0},"Pale disabled checked")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,{leftLabel:"With label on the left"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,"Size 16"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,{size:_toggle__WEBPACK_IMPORTED_MODULE_2__.$.Size16},"Unchecked by default")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,{size:_toggle__WEBPACK_IMPORTED_MODULE_2__.$.Size16,defaultChecked:!0},"Checked by default")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,{size:_toggle__WEBPACK_IMPORTED_MODULE_2__.$.Size16,disabled:!0},"Disabled unchecked")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,{size:_toggle__WEBPACK_IMPORTED_MODULE_2__.$.Size16,disabled:!0,defaultChecked:!0},"Disabled checked")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,{size:_toggle__WEBPACK_IMPORTED_MODULE_2__.$.Size16,pale:!0},"Pale unchecked by default")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,{size:_toggle__WEBPACK_IMPORTED_MODULE_2__.$.Size16,pale:!0,defaultChecked:!0},"Pale checked by default")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,{size:_toggle__WEBPACK_IMPORTED_MODULE_2__.$.Size16,pale:!0,disabled:!0},"Pale disabled unchecked")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,{size:_toggle__WEBPACK_IMPORTED_MODULE_2__.$.Size16,pale:!0,disabled:!0,defaultChecked:!0},"Pale disabled checked")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,{size:_toggle__WEBPACK_IMPORTED_MODULE_2__.$.Size16,leftLabel:"With label on the left"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,"Size 20"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{lineHeight:"24px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,{size:_toggle__WEBPACK_IMPORTED_MODULE_2__.$.Size20},"Unchecked by default")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,{size:_toggle__WEBPACK_IMPORTED_MODULE_2__.$.Size20,defaultChecked:!0},"Checked by default")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,{size:_toggle__WEBPACK_IMPORTED_MODULE_2__.$.Size20,disabled:!0},"Disabled unchecked")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,{size:_toggle__WEBPACK_IMPORTED_MODULE_2__.$.Size20,disabled:!0,defaultChecked:!0},"Disabled checked")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,{size:_toggle__WEBPACK_IMPORTED_MODULE_2__.$.Size20,pale:!0},"Pale unchecked by default")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,{size:_toggle__WEBPACK_IMPORTED_MODULE_2__.$.Size20,pale:!0,defaultChecked:!0},"Pale checked by default")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,{size:_toggle__WEBPACK_IMPORTED_MODULE_2__.$.Size20,pale:!0,disabled:!0},"Pale disabled unchecked")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,{size:_toggle__WEBPACK_IMPORTED_MODULE_2__.$.Size20,pale:!0,disabled:!0,defaultChecked:!0},"Pale disabled checked")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,{size:_toggle__WEBPACK_IMPORTED_MODULE_2__.$.Size20,leftLabel:"With label on the left"}))));basic.storyName="Toggle",basic.__docgenInfo={description:"",methods:[],displayName:"basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/toggle/toggle.examples.tsx"]={name:"basic",docgenInfo:basic.__docgenInfo,path:"src/toggle/toggle.examples.tsx"})},"./src/toggle/toggle.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{$:function(){return Size}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_global_data_tests__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/global/data-tests.ts"),_toggle_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/toggle/toggle.css"),_toggle_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_toggle_css__WEBPACK_IMPORTED_MODULE_2__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Size={Size14:_toggle_css__WEBPACK_IMPORTED_MODULE_2___default().size14,Size16:_toggle_css__WEBPACK_IMPORTED_MODULE_2___default().size16,Size20:_toggle_css__WEBPACK_IMPORTED_MODULE_2___default().size20};class Toggle extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node,name:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,title:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,leftLabel:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node,defaultChecked:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,checked:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,disabled:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,pale:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,onChange:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,onTransitionEnd:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,size:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(Object.values(Size)),"data-test":prop_types__WEBPACK_IMPORTED_MODULE_3___default().string};static defaultProps={size:Size.Size14};render(){const{className:className,children:children,disabled:disabled,pale:pale,title:title,leftLabel:leftLabel,size:size=Size.Size16,"data-test":dataTest,onTransitionEnd:onTransitionEnd,...restProps}=this.props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(className,size,_toggle_css__WEBPACK_IMPORTED_MODULE_2___default().toggle,disabled&&_toggle_css__WEBPACK_IMPORTED_MODULE_2___default().disabled);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{className:classes,title:title,"data-test":(0,_global_data_tests__WEBPACK_IMPORTED_MODULE_4__.Z)("ring-toggle",dataTest)},leftLabel&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:_toggle_css__WEBPACK_IMPORTED_MODULE_2___default().leftLabel},leftLabel),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:_toggle_css__WEBPACK_IMPORTED_MODULE_2___default().switchWrapper},react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",_extends({"data-test":"ring-toggle-input"},restProps,{type:"checkbox",disabled:disabled,className:_toggle_css__WEBPACK_IMPORTED_MODULE_2___default().input})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(_toggle_css__WEBPACK_IMPORTED_MODULE_2___default().switch,pale&&_toggle_css__WEBPACK_IMPORTED_MODULE_2___default().paleSwitch),onTransitionEnd:onTransitionEnd})),children&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:_toggle_css__WEBPACK_IMPORTED_MODULE_2___default().label},children))}}Toggle.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{size:{defaultValue:{value:"styles.size14",computed:!0},type:{name:"enum",value:[{value:'"null"',computed:!1},{value:'"null"',computed:!1},{value:'"null"',computed:!1}]},required:!1,description:"",tsType:{name:"string"}},children:{type:{name:"node"},required:!1,description:""},name:{type:{name:"string"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},title:{type:{name:"string"},required:!1,description:""},leftLabel:{type:{name:"node"},required:!1,description:"",tsType:{name:"ReactNode"}},defaultChecked:{type:{name:"bool"},required:!1,description:""},checked:{type:{name:"bool"},required:!1,description:""},disabled:{type:{name:"bool"},required:!1,description:""},pale:{type:{name:"bool"},required:!1,description:"",tsType:{name:"union",raw:"boolean | null | undefined",elements:[{name:"boolean"},{name:"null"},{name:"undefined"}]}},onChange:{type:{name:"func"},required:!1,description:""},onTransitionEnd:{type:{name:"func"},required:!1,description:""},"data-test":{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]}}},composes:["Omit"]},__webpack_exports__.Z=Toggle,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/toggle/toggle.tsx"]={name:"Toggle",docgenInfo:Toggle.__docgenInfo,path:"src/toggle/toggle.tsx"})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/toggle/toggle.css":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,'.toggle_a8a5 {\n  cursor: pointer;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.toggle_a8a5:hover .switch_f3b6 {\n    transition: none;\n\n    background-color: var(--ring-border-hover-color);\n  }}\n\n.toggle_a8a5.disabled_b68a {\n    pointer-events: none;\n  }\n\n.label_a612 {\n  margin-left: 8px;\n}\n\n.leftLabel_e622 {\n  margin-right: 8px;\n}\n\n.switchWrapper_adf2 {\n  position: relative;\n\n  display: inline-block;\n}\n\n.input_e5d0 {\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n\n  margin: 0;\n\n  opacity: 0;\n}\n\n.switch_f3b6 {\n  position: relative;\n\n  display: block;\n\n  width: 100%;\n  height: 100%;\n\n  transition: background-color cubic-bezier(0.23, 1, 0.32, 1) 300ms;\n\n  background-color: var(--ring-icon-color);\n}\n\n.input_e5d0:focus + .switch_f3b6 {\n    box-shadow: inset 0 0 0 1px var(--ring-border-hover-color), 0 0 0 1px var(--ring-border-hover-color);\n}\n\n.switch_f3b6::before {\n    position: absolute;\n    top: 2px;\n    left: 0;\n\n    width: 12px;\n    height: 12px;\n\n    content: "";\n\n    transition: transform cubic-bezier(0.23, 1, 0.32, 1) 300ms;\n\n    transform: translateX(2px);\n\n    border-radius: 6px;\n    background-color: var(--ring-content-background-color);\n  }\n\n.input_e5d0:checked + .switch_f3b6 {\n  background-color: var(--ring-main-color);\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {:checked:hover + .switch_f3b6 {\n  background-color: var(--ring-main-hover-color);\n}}\n\n.size16_f69a .switchWrapper_adf2 {\n    width: 24px;\n    height: 16px;\n\n    vertical-align: -3px;\n  }\n\n.size16_f69a .switch_f3b6 {\n    border-radius: 8px;\n  }\n\n.size16_f69a .switch_f3b6::before {\n      width: 12px;\n      height: 12px;\n\n      border-radius: 6px;\n    }\n\n/* stylelint-disable-next-line selector-max-specificity */\n\n.size16_f69a .input_e5d0:checked + ::before {\n    transform: translateX(10px);\n  }\n\n.size14_f6be .switchWrapper_adf2 {\n    width: 24px;\n    height: 14px;\n\n    vertical-align: -2px;\n  }\n\n.size14_f6be .switch_f3b6 {\n    border-radius: 7px;\n  }\n\n.size14_f6be .switch_f3b6::before {\n      width: 10px;\n      height: 10px;\n\n      border-radius: 5px;\n    }\n\n/* stylelint-disable-next-line selector-max-specificity */\n\n.size14_f6be .input_e5d0:checked + ::before {\n    transform: translateX(12px);\n  }\n\n.size20_d4b6 .switchWrapper_adf2 {\n    width: 32px;\n    height: 20px;\n\n    vertical-align: -5px;\n  }\n\n.size20_d4b6 .switch_f3b6 {\n    border-radius: 10px;\n  }\n\n.size20_d4b6 .switch_f3b6::before {\n      width: 16px;\n      height: 16px;\n\n      border-radius: 8px;\n    }\n\n/* stylelint-disable-next-line selector-max-specificity */\n\n.size20_d4b6 .input_e5d0:checked + ::before {\n    transform: translateX(14px);\n  }\n\n.input_e5d0[disabled] + ::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n\n  content: "";\n\n  border-radius: 8px;\n  background-image:\n    linear-gradient(\n      45deg,\n      transparent,\n      transparent 37.5%,\n      rgba(255, 255, 255, 0.9) 37.5%,\n      rgba(255, 255, 255, 0.9) 50%,\n      transparent 50%,\n      transparent 87.5%,\n      rgba(255, 255, 255, 0.9) 87.5%,\n      rgba(255, 255, 255, 0.9)\n    );\n  background-repeat: repeat;\n  background-size: 4px 4px;\n}\n\n.paleSwitch_dd8e.paleSwitch_dd8e {\n  background-color: var(--ring-pale-control-color);\n}\n\n.input_e5d0:checked + .paleSwitch_dd8e {\n  background-color: var(--ring-border-hover-color);\n}\n',"",{version:3,sources:["webpack://./src/toggle/toggle.css","<no source>"],names:[],mappings:"AAQA;EACE,eAAe;AAWjB;;ACpBA,wGAAA;IAAA,iBAAA;;IAAA,iDAAA;GAAA,CAAA;;ADiBE;IACE,oBAAoB;EACtB;;AAGF;EACE,gBAAiB;AACnB;;AAEA;EACE,iBAAkB;AACpB;;AAEA;EACE,kBAAkB;;EAElB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;;EAEP,WAAW;EACX,YAAY;;EAEZ,SAAS;;EAET,UAAU;AACZ;;AAEA;EACE,kBAAkB;;EAElB,cAAc;;EAEd,WAAW;EACX,YAAY;;EAEZ,iEAAqD;;EAErD,wCAAwC;AAuB1C;;AAjCA;IAaI,oGAAoG;AAoBxG;;AAjBE;IACE,kBAAkB;IAClB,QAAY;IACZ,OAAO;;IAEP,WAAuB;IACvB,YAAwB;;IAExB,WAAW;;IAEX,0DAA8C;;IAE9C,0BAA8B;;IAE9B,kBAAgC;IAChC,sDAAsD;EACxD;;AAGF;EACE,wCAAwC;AAC1C;;ACtFA,wGAAA;EAAA,+CAAA;CAAA,CAAA;;AD6FE;IACE,WAAqB;IACrB,YAAsB;;IAEtB,oBAAoB;EACtB;;AAEA;IACE,kBAAmB;EAQrB;;AANE;MACE,WAAuB;MACvB,YAAwB;;MAExB,kBAAgC;IAClC;;AAGF,yDAAyD;;AACzD;IACE,2BAAiD;EACnD;;AAIA;IACE,WAAqB;IACrB,YAAY;;IAEZ,oBAAoB;EACtB;;AAEA;IACE,kBAAkB;EAQpB;;AANE;MACE,WAAW;MACX,YAAY;;MAEZ,kBAAkB;IACpB;;AAGF,yDAAyD;;AACzD;IACE,2BAA2B;EAC7B;;AAIA;IACE,WAAqB;IACrB,YAAwB;;IAExB,oBAAoB;EACtB;;AAEA;IACE,mBAAgC;EAQlC;;AANE;MACE,WAAqB;MACrB,YAAsB;;MAEtB,kBAAyB;IAC3B;;AAGF,yDAAyD;;AACzD;IACE,2BAA+C;EACjD;;AAGF;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;;EAEP,WAAW;EACX,YAAY;;EAEZ,WAAW;;EAEX,kBAAmB;EACnB;;;;;;;;;;;KAWG;EACH,yBAAyB;EACzB,wBAAwB;AAC1B;;AAEA;EACE,gDAAgD;AAClD;;AAEA;EACE,gDAAgD;AAClD",sourcesContent:['@import "../global/variables.css";\n\n@value unit from "../global/global.css";\n@value padding: 2px;\n@value disabled-line-color: rgba(255, 255, 255, 0.9);\n@value duration: 300ms;\n@value timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n\n.toggle {\n  cursor: pointer;\n\n  &:hover .switch {\n    transition: none;\n\n    background-color: var(--ring-border-hover-color);\n  }\n\n  &.disabled {\n    pointer-events: none;\n  }\n}\n\n.label {\n  margin-left: unit;\n}\n\n.leftLabel {\n  margin-right: unit;\n}\n\n.switchWrapper {\n  position: relative;\n\n  display: inline-block;\n}\n\n.input {\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n\n  margin: 0;\n\n  opacity: 0;\n}\n\n.switch {\n  position: relative;\n\n  display: block;\n\n  width: 100%;\n  height: 100%;\n\n  transition: background-color timing-function duration;\n\n  background-color: var(--ring-icon-color);\n\n  @nest .input:focus + & {\n    box-shadow: inset 0 0 0 1px var(--ring-border-hover-color), 0 0 0 1px var(--ring-border-hover-color);\n  }\n\n  &::before {\n    position: absolute;\n    top: padding;\n    left: 0;\n\n    width: calc(unit * 1.5);\n    height: calc(unit * 1.5);\n\n    content: "";\n\n    transition: transform timing-function duration;\n\n    transform: translateX(padding);\n\n    border-radius: calc(unit * 0.75);\n    background-color: var(--ring-content-background-color);\n  }\n}\n\n.input:checked + .switch {\n  background-color: var(--ring-main-color);\n}\n\n:checked:hover + .switch {\n  background-color: var(--ring-main-hover-color);\n}\n\n.size16 {\n  & .switchWrapper {\n    width: calc(unit * 3);\n    height: calc(unit * 2);\n\n    vertical-align: -3px;\n  }\n\n  & .switch {\n    border-radius: unit;\n\n    &::before {\n      width: calc(unit * 1.5);\n      height: calc(unit * 1.5);\n\n      border-radius: calc(unit * 0.75);\n    }\n  }\n\n  /* stylelint-disable-next-line selector-max-specificity */\n  & .input:checked + ::before {\n    transform: translateX(calc(unit * 1.5 - padding));\n  }\n}\n\n.size14 {\n  & .switchWrapper {\n    width: calc(unit * 3);\n    height: 14px;\n\n    vertical-align: -2px;\n  }\n\n  & .switch {\n    border-radius: 7px;\n\n    &::before {\n      width: 10px;\n      height: 10px;\n\n      border-radius: 5px;\n    }\n  }\n\n  /* stylelint-disable-next-line selector-max-specificity */\n  & .input:checked + ::before {\n    transform: translateX(12px);\n  }\n}\n\n.size20 {\n  & .switchWrapper {\n    width: calc(unit * 4);\n    height: calc(unit * 2.5);\n\n    vertical-align: -5px;\n  }\n\n  & .switch {\n    border-radius: calc(unit * 1.25);\n\n    &::before {\n      width: calc(unit * 2);\n      height: calc(unit * 2);\n\n      border-radius: calc(unit);\n    }\n  }\n\n  /* stylelint-disable-next-line selector-max-specificity */\n  & .input:checked + ::before {\n    transform: translateX(calc(unit * 2 - padding));\n  }\n}\n\n.input[disabled] + ::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n\n  content: "";\n\n  border-radius: unit;\n  background-image:\n    linear-gradient(\n      45deg,\n      transparent,\n      transparent 37.5%,\n      disabled-line-color 37.5%,\n      disabled-line-color 50%,\n      transparent 50%,\n      transparent 87.5%,\n      disabled-line-color 87.5%,\n      disabled-line-color\n    );\n  background-repeat: repeat;\n  background-size: 4px 4px;\n}\n\n.paleSwitch.paleSwitch {\n  background-color: var(--ring-pale-control-color);\n}\n\n.input:checked + .paleSwitch {\n  background-color: var(--ring-border-hover-color);\n}\n',null],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={unit:""+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.unit,padding:"2px","disabled-line-color":"rgba(255, 255, 255, 0.9)",duration:"300ms","timing-function":"cubic-bezier(0.23, 1, 0.32, 1)",toggle:"toggle_a8a5",switch:"switch_f3b6",disabled:"disabled_b68a",label:"label_a612",leftLabel:"leftLabel_e622",switchWrapper:"switchWrapper_adf2",input:"input_e5d0",size16:"size16_f69a",size14:"size14_f6be",size20:"size20_d4b6",paleSwitch:"paleSwitch_dd8e"},__webpack_exports__.default=___CSS_LOADER_EXPORT___},"./src/toggle/toggle.css":function(module,__unused_webpack_exports,__webpack_require__){var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/toggle/toggle.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);