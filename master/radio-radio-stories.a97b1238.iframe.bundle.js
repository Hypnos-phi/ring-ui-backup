(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[6290],{"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/radio/radio.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,'.radio_efb7 {\n  position: relative;\n\n  display: flex;\n  flex-direction: row;\n\n  padding: 2px 0;\n\n  text-align: left;\n\n  color: var(--ring-text-color);\n  outline: none;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.radio_efb7:hover .circle_b52d {\n    transition: none;\n\n    border-color: var(--ring-border-hover-color);\n  }}\n\n.circle_b52d {\n  position: relative;\n  top: 2px;\n\n  flex-shrink: 0;\n\n  box-sizing: border-box;\n  width: calc(var(--ring-unit)*2);\n  height: calc(var(--ring-unit)*2);\n\n  -webkit-user-select: none;\n\n          user-select: none;\n  transition: border-color var(--ring-ease), box-shadow var(--ring-ease);\n  pointer-events: none;\n\n  border: 1px solid var(--ring-borders-color);\n  border-radius: var(--ring-unit);\n  background-color: var(--ring-content-background-color);\n}\n\n.circle_b52d::after {\n    position: absolute;\n    top: 3px;\n    left: 3px;\n\n    width: var(--ring-unit);\n    height: var(--ring-unit);\n\n    content: "";\n\n    transition: opacity var(--ring-fast-ease), transform var(--ring-fast-ease);\n\n    transform: scale(0);\n\n    opacity: 0;\n\n    border-radius: calc(var(--ring-unit)/2);\n    background-color: var(--ring-main-color);\n  }\n\n.input_af32 {\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n  margin: 0;\n\n  cursor: pointer;\n\n  opacity: 0;\n}\n\n.input_af32[disabled] + .circle_b52d {\n    border-color: var(--ring-border-disabled-color);\n    background-color: var(--ring-disabled-background-color);\n  }\n\n.input_af32:checked + .circle_b52d {\n    border-color: var(--ring-main-color);\n\n    /* stylelint-disable-next-line selector-max-specificity */\n  }\n\n.input_af32:checked + .circle_b52d::after {\n      transition: none;\n\n      transform: scale(1);\n\n      opacity: 1;\n    }\n\n.input_af32:focus + .circle_b52d,\n  .input_af32.focus_d633 + .circle_b52d {\n    border-color: var(--ring-border-hover-color);\n    box-shadow: 0 0 0 1px var(--ring-border-hover-color);\n  }\n\n.input_af32[disabled] {\n    pointer-events: none;\n  }\n\n/* stylelint-disable-next-line selector-max-specificity */\n\n.input_af32[disabled]:checked + .circle_b52d {\n    border-color: var(--ring-border-selected-disabled-color);\n\n    /* stylelint-disable-next-line selector-max-specificity */\n  }\n\n.input_af32[disabled]:checked + .circle_b52d::after {\n      background-color: var(--ring-border-selected-disabled-color);\n    }\n\n.input_af32[disabled] ~ .label_a4fc {\n    color: var(--ring-disabled-color);\n  }\n\n.label_a4fc {\n  margin-left: var(--ring-unit);\n\n  line-height: var(--ring-line-height);\n}\n',"",{version:3,sources:["webpack://./src/radio/radio.css","<no source>"],names:[],mappings:"AAEA;EACE,kBAAkB;;EAElB,aAAa;EACb,mBAAmB;;EAEnB,cAAc;;EAEd,gBAAgB;;EAEhB,6BAA6B;EAC7B,aAAa;AAOf;;ACpBA,wGAAA;IAAA,iBAAA;;IAAA,6CAAA;GAAA,CAAA;;ADsBA;EACE,kBAAkB;EAClB,QAAQ;;EAER,cAAc;;EAEd,sBAAsB;EACtB,+BAAiC;EACjC,gCAAkC;;EAElC,yBAAiB;;UAAjB,iBAAiB;EACjB,sEAAsE;EACtE,oBAAoB;;EAEpB,2CAA2C;EAC3C,+BAA+B;EAC/B,sDAAsD;AAqBxD;;AAnBE;IACE,kBAAkB;IAClB,QAAQ;IACR,SAAS;;IAET,uBAAuB;IACvB,wBAAwB;;IAExB,WAAW;;IAEX,0EAA0E;;IAE1E,mBAAmB;;IAEnB,UAAU;;IAEV,uCAAyC;IACzC,wCAAwC;EAC1C;;AAGF;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;;EAEP,WAAW;EACX,YAAY;EACZ,SAAS;;EAET,eAAe;;EAEf,UAAU;AA2CZ;;AAzCE;IACE,+CAA+C;IAC/C,uDAAuD;EACzD;;AAEA;IACE,oCAAoC;;IAEpC,yDAAyD;EAQ3D;;AAPE;MACE,gBAAgB;;MAEhB,mBAAmB;;MAEnB,UAAU;IACZ;;AAGF;;IAEE,4CAA4C;IAC5C,oDAAoD;EACtD;;AAEA;IACE,oBAAoB;EACtB;;AAEA,yDAAyD;;AACzD;IACE,wDAAwD;;IAExD,yDAAyD;EAI3D;;AAHE;MACE,4DAA4D;IAC9D;;AAGF;IACE,iCAAiC;EACnC;;AAGF;EACE,6BAA6B;;EAE7B,oCAAoC;AACtC",sourcesContent:['@import "../global/variables.css";\n\n.radio {\n  position: relative;\n\n  display: flex;\n  flex-direction: row;\n\n  padding: 2px 0;\n\n  text-align: left;\n\n  color: var(--ring-text-color);\n  outline: none;\n\n  &:hover .circle {\n    transition: none;\n\n    border-color: var(--ring-border-hover-color);\n  }\n}\n\n.circle {\n  position: relative;\n  top: 2px;\n\n  flex-shrink: 0;\n\n  box-sizing: border-box;\n  width: calc(2 * var(--ring-unit));\n  height: calc(2 * var(--ring-unit));\n\n  user-select: none;\n  transition: border-color var(--ring-ease), box-shadow var(--ring-ease);\n  pointer-events: none;\n\n  border: 1px solid var(--ring-borders-color);\n  border-radius: var(--ring-unit);\n  background-color: var(--ring-content-background-color);\n\n  &::after {\n    position: absolute;\n    top: 3px;\n    left: 3px;\n\n    width: var(--ring-unit);\n    height: var(--ring-unit);\n\n    content: "";\n\n    transition: opacity var(--ring-fast-ease), transform var(--ring-fast-ease);\n\n    transform: scale(0);\n\n    opacity: 0;\n\n    border-radius: calc(var(--ring-unit) / 2);\n    background-color: var(--ring-main-color);\n  }\n}\n\n.input {\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n  margin: 0;\n\n  cursor: pointer;\n\n  opacity: 0;\n\n  &[disabled] + .circle {\n    border-color: var(--ring-border-disabled-color);\n    background-color: var(--ring-disabled-background-color);\n  }\n\n  &:checked + .circle {\n    border-color: var(--ring-main-color);\n\n    /* stylelint-disable-next-line selector-max-specificity */\n    &::after {\n      transition: none;\n\n      transform: scale(1);\n\n      opacity: 1;\n    }\n  }\n\n  &:focus + .circle,\n  &.focus + .circle {\n    border-color: var(--ring-border-hover-color);\n    box-shadow: 0 0 0 1px var(--ring-border-hover-color);\n  }\n\n  &[disabled] {\n    pointer-events: none;\n  }\n\n  /* stylelint-disable-next-line selector-max-specificity */\n  &[disabled]:checked + .circle {\n    border-color: var(--ring-border-selected-disabled-color);\n\n    /* stylelint-disable-next-line selector-max-specificity */\n    &::after {\n      background-color: var(--ring-border-selected-disabled-color);\n    }\n  }\n\n  &[disabled] ~ .label {\n    color: var(--ring-disabled-color);\n  }\n}\n\n.label {\n  margin-left: var(--ring-unit);\n\n  line-height: var(--ring-line-height);\n}\n',null],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={radio:"radio_efb7",circle:"circle_b52d",input:"input_af32",focus:"focus_d633",label:"label_a4fc"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/radio/radio.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/radio/radio.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/radio/radio.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Multiline:()=>Multiline,default:()=>radio_stories,disabled:()=>disabled,uncontrolled:()=>uncontrolled});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),get_uid=__webpack_require__("./src/global/get-uid.ts"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),radio_radio=__webpack_require__("./src/radio/radio.css"),radio_default=__webpack_require__.n(radio_radio);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const RadioContext=(0,react.createContext)({});class Radio extends react.Component{static propTypes={className:prop_types_default().string,children:prop_types_default().node,value:prop_types_default().string,name:prop_types_default().string,checked:prop_types_default().bool,onChange:prop_types_default().func};uid=(0,get_uid.A)("ring-radio-item-");input;inputRef=el=>{this.input=el};label;labelRef=el=>{this.label=el};render(){const{className,children,...restProps}=this.props,classes=classnames_default()(radio_default().radio,className);return react.createElement("label",{ref:this.labelRef,className:classes,htmlFor:this.uid},react.createElement("input",_extends({id:this.uid},restProps,{ref:this.inputRef,className:radio_default().input,type:"radio"})),react.createElement("span",{className:radio_default().circle}),react.createElement("span",{className:radio_default().label},children))}}const RadioItem=(0,react.forwardRef)((function RadioItem(props,ref){return react.createElement(RadioContext.Consumer,null,(({value,onChange,...restContext})=>react.createElement(Radio,_extends({ref},restContext,{checked:null!=value?value===props.value:void 0,onChange:null!=onChange?()=>onChange(props.value):void 0},props))))}));RadioItem.propTypes=Radio.propTypes;const radio_item=RadioItem;Radio.__docgenInfo={description:"",methods:[{name:"inputRef",docblock:null,modifiers:[],params:[{name:"el",optional:!1,type:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}}],returns:null},{name:"labelRef",docblock:null,modifiers:[],params:[{name:"el",optional:!1,type:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}}],returns:null}],displayName:"Radio",props:{className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1},value:{description:"",type:{name:"string"},required:!1},name:{description:"",type:{name:"string"},required:!1},checked:{description:"",type:{name:"bool"},required:!1},onChange:{description:"",type:{name:"func"},required:!1}}},RadioItem.__docgenInfo={description:"",methods:[],displayName:"RadioItem",props:{className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1},value:{description:"",type:{name:"string"},required:!1},name:{description:"",type:{name:"string"},required:!1},checked:{description:"",type:{name:"bool"},required:!1},onChange:{description:"",type:{name:"func"},required:!1}}};class radio_Radio extends react.Component{static propTypes={name:prop_types_default().string,disabled:prop_types_default().bool,value:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number,prop_types_default().bool]),onChange:prop_types_default().func,children:prop_types_default().node.isRequired};static Item=radio_item;uid=(0,get_uid.A)("ring-radio-");render(){return react.createElement(RadioContext.Provider,{value:{name:this.uid,...this.props}},this.props.children)}}radio_Radio.__docgenInfo={description:"@name Radio",methods:[],displayName:"Radio",props:{value:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:"",type:{name:"union",value:[{name:"string"},{name:"number"},{name:"bool"}]}},onChange:{required:!1,tsType:{name:"union",raw:"((value: string) => void) | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"func"}},name:{description:"",type:{name:"string"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1},children:{description:"",type:{name:"node"},required:!0}},composes:["Omit"]};const radio_stories={title:"Components/Radio",parameters:{notes:"Displays a radio button. Adopted from [react-radio-group](https://github.com/chenglou/react-radio-group).",zeplinLink:"https://app.zeplin.io/project/5afd8f5511c2d1c625752bb0/screen/6193bc703afd36a8d65af24c"}},Basic=()=>{const[value,onChange]=(0,react.useState)("one");return react.createElement(react.Fragment,null,"Selected: ",value,react.createElement(radio_Radio,{value,onChange},react.createElement(radio_Radio.Item,{value:"one"},"One"),react.createElement(radio_Radio.Item,{value:"two"},"Two"),react.createElement(radio_Radio.Item,{value:"three"},"Three")))};Basic.storyName="basic";const Multiline=()=>{const[value,onChange]=(0,react.useState)("one");return react.createElement("div",{style:{width:200}},"Selected: ",value,react.createElement(radio_Radio,{value,onChange},react.createElement(radio_Radio.Item,{value:"one"},"One"),react.createElement(radio_Radio.Item,{value:"two"},"This is a multiline radio item that should wrap")))};Multiline.storyName="multiline";const uncontrolled=()=>react.createElement(radio_Radio,null,react.createElement(radio_Radio.Item,{value:"one",defaultChecked:!0},"One"),react.createElement(radio_Radio.Item,{value:"two"},"Two"),react.createElement(radio_Radio.Item,{value:"three"},"Three"));uncontrolled.storyName="uncontrolled",uncontrolled.parameters={hermione:{skip:!0}};const disabled=()=>react.createElement(radio_Radio,{disabled:!0},react.createElement(radio_Radio.Item,{value:"one",defaultChecked:!0},"One"),react.createElement(radio_Radio.Item,{value:"two"},"Two"),react.createElement(radio_Radio.Item,{value:"three"},"Three"));disabled.storyName="disabled",Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'() => {\n  const [value, onChange] = useState(\'one\');\n  return <Fragment>\n      Selected: {value}\n      <Radio value={value} onChange={onChange}>\n        <Radio.Item value="one">One</Radio.Item>\n        <Radio.Item value="two">Two</Radio.Item>\n        <Radio.Item value="three">Three</Radio.Item>\n      </Radio>\n    </Fragment>;\n}',...Basic.parameters?.docs?.source}}},Multiline.parameters={...Multiline.parameters,docs:{...Multiline.parameters?.docs,source:{originalSource:'() => {\n  const [value, onChange] = useState(\'one\');\n  return <div style={{\n    width: 200\n  }}>\n      Selected: {value}\n      <Radio value={value} onChange={onChange}>\n        <Radio.Item value="one">One</Radio.Item>\n        <Radio.Item value="two">This is a multiline radio item that should wrap</Radio.Item>\n      </Radio>\n    </div>;\n}',...Multiline.parameters?.docs?.source}}},uncontrolled.parameters={...uncontrolled.parameters,docs:{...uncontrolled.parameters?.docs,source:{originalSource:'() => <Radio>\n    <Radio.Item value="one" defaultChecked>\n      One\n    </Radio.Item>\n    <Radio.Item value="two">Two</Radio.Item>\n    <Radio.Item value="three">Three</Radio.Item>\n  </Radio>',...uncontrolled.parameters?.docs?.source}}},disabled.parameters={...disabled.parameters,docs:{...disabled.parameters?.docs,source:{originalSource:'() => <Radio disabled>\n    <Radio.Item value="one" defaultChecked>\n      One\n    </Radio.Item>\n    <Radio.Item value="two">Two</Radio.Item>\n    <Radio.Item value="three">Three</Radio.Item>\n  </Radio>',...disabled.parameters?.docs?.source}}}}}]);