(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[3622],{"./src/auth-dialog/auth-dialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>AuthDialog});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_island_island__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/island/content.tsx"),_dialog_dialog__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/dialog/dialog.tsx"),_button_button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/button/button.tsx"),_heading_heading__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/heading/heading.tsx"),_auth_dialog_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/auth-dialog/auth-dialog.css"),_auth_dialog_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_auth_dialog_css__WEBPACK_IMPORTED_MODULE_2__);class AuthDialog extends react__WEBPACK_IMPORTED_MODULE_0__.Component{static propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,title:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,errorMessage:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,serviceImage:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,serviceName:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,loginCaption:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,loginToCaption:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,show:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,cancelOnEsc:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,confirmLabel:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,cancelLabel:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,tryAgainLabel:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,onConfirm:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,onCancel:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,onTryAgain:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func};static defaultProps={loginCaption:"Log in",loginToCaption:"Log in to %serviceName%",tryAgainLabel:"Try again",show:!1,cancelOnEsc:!0,confirmLabel:"Log in",cancelLabel:"Remain a guest",onConfirm:()=>{},onCancel:()=>{}};state={retrying:!1};componentDidMount(){window.addEventListener("online",this.onRetryPress)}componentWillUnmount(){window.removeEventListener("online",this.onRetryPress)}onEscPress=()=>{this.props.cancelOnEsc&&this.props.onCancel()};onRetryPress=async()=>{if(this.props.onTryAgain&&!this.state.retrying){this.setState({retrying:!0});try{await this.props.onTryAgain()}catch(e){}finally{this.setState({retrying:!1})}}};render(){const{show,className,errorMessage,serviceImage,serviceName,loginCaption,loginToCaption,confirmLabel,cancelLabel,tryAgainLabel,onConfirm,onCancel,onTryAgain}=this.props,{retrying}=this.state,defaultTitle=serviceName?loginToCaption:loginCaption,title=(this.props.title||defaultTitle).replace("%serviceName%",null!=serviceName?serviceName:"").replace("{{serviceName}}",null!=serviceName?serviceName:"");return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_dialog_dialog__WEBPACK_IMPORTED_MODULE_4__.Z,{label:title,"data-test":"ring-auth-dialog",className,contentClassName:classnames__WEBPACK_IMPORTED_MODULE_1___default()(className,_auth_dialog_css__WEBPACK_IMPORTED_MODULE_2___default().dialog),onEscPress:this.onEscPress,show,trapFocus:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_island_island__WEBPACK_IMPORTED_MODULE_5__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:_auth_dialog_css__WEBPACK_IMPORTED_MODULE_2___default().content},serviceImage&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{alt:`${serviceName} logo`,className:_auth_dialog_css__WEBPACK_IMPORTED_MODULE_2___default().logo,src:serviceImage}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heading_heading__WEBPACK_IMPORTED_MODULE_6__.H2,{className:_auth_dialog_css__WEBPACK_IMPORTED_MODULE_2___default().title},title),errorMessage&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:_auth_dialog_css__WEBPACK_IMPORTED_MODULE_2___default().error},errorMessage),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.ZP,{primary:!0,className:_auth_dialog_css__WEBPACK_IMPORTED_MODULE_2___default().firstButton,"data-test":"auth-dialog-confirm-button",onClick:onConfirm},confirmLabel),onTryAgain&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.ZP,{className:_auth_dialog_css__WEBPACK_IMPORTED_MODULE_2___default().button,"data-test":"auth-dialog-retry-button",onClick:()=>this.onRetryPress(),loader:retrying,disabled:retrying},tryAgainLabel),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.ZP,{className:_auth_dialog_css__WEBPACK_IMPORTED_MODULE_2___default().button,"data-test":"auth-dialog-cancel-button",onClick:onCancel},cancelLabel))))}}AuthDialog.__docgenInfo={description:"",methods:[{name:"onEscPress",docblock:null,modifiers:[],params:[],returns:null},{name:"onRetryPress",docblock:null,modifiers:["async"],params:[],returns:null}],displayName:"AuthDialog",props:{loginCaption:{defaultValue:{value:"'Log in'",computed:!1},type:{name:"string"},required:!1,description:"",tsType:{name:"string"}},loginToCaption:{defaultValue:{value:"'Log in to %serviceName%'",computed:!1},type:{name:"string"},required:!1,description:"",tsType:{name:"string"}},tryAgainLabel:{defaultValue:{value:"'Try again'",computed:!1},type:{name:"string"},required:!1,description:"",tsType:{name:"string"}},show:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"",tsType:{name:"boolean"}},cancelOnEsc:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"",tsType:{name:"boolean"}},confirmLabel:{defaultValue:{value:"'Log in'",computed:!1},type:{name:"string"},required:!1,description:"",tsType:{name:"string"}},cancelLabel:{defaultValue:{value:"'Remain a guest'",computed:!1},type:{name:"string"},required:!1,description:"",tsType:{name:"string"}},onConfirm:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"",tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}},onCancel:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"",tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}},className:{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}},title:{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]}},errorMessage:{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]}},serviceImage:{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]}},serviceName:{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]}},onTryAgain:{type:{name:"func"},required:!1,description:"",tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/auth-dialog/auth-dialog.tsx"]={name:"AuthDialog",docgenInfo:AuthDialog.__docgenInfo,path:"src/auth-dialog/auth-dialog.tsx"})},"./src/heading/heading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H1:()=>H1,H2:()=>H2,H3:()=>H3,H4:()=>H4,O:()=>Levels,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),util_deprecate__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/util-deprecate/browser.js"),util_deprecate__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(util_deprecate__WEBPACK_IMPORTED_MODULE_2__),_heading_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/heading/heading.css"),_heading_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_heading_css__WEBPACK_IMPORTED_MODULE_3__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}let Levels=function(Levels){return Levels[Levels.H1=1]="H1",Levels[Levels.H2=2]="H2",Levels[Levels.H3=3]="H3",Levels[Levels.H4=4]="H4",Levels}({});const fallbackHeading=util_deprecate__WEBPACK_IMPORTED_MODULE_2___default()((()=>"h3"),"Headings of level 5 and higher are replaced with h3"),Heading=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((function Heading(_ref){let{children,className,level=Levels.H1,...restProps}=_ref;const classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_heading_css__WEBPACK_IMPORTED_MODULE_3___default().heading,className),Tag=level<=Levels.H4?`h${level}`:fallbackHeading();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag,_extends({},restProps,{className:classes}),children)}));Heading.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,level:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf([Levels.H1,Levels.H2,Levels.H3,Levels.H4])},Heading.Levels=Levels;const __WEBPACK_DEFAULT_EXPORT__=Heading;function makeHeading(level,useCaps){const H=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((_ref2=>{let{className,caps,...restProps}=_ref2;const classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(className,{[_heading_css__WEBPACK_IMPORTED_MODULE_3___default().caps]:useCaps&&caps});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Heading,_extends({},restProps,{level,className:classes}))}));return H.displayName=`H${level}`,H.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,caps:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool},H}const H1=makeHeading(Levels.H1,!0),H2=makeHeading(Levels.H2),H3=makeHeading(Levels.H3),H4=makeHeading(Levels.H4)},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/auth-dialog/auth-dialog.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,".dialog_eb86.dialog_eb86 {\n  width: auto;\n  max-width: 400px;\n}\n\n.content_b229 {\n\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n\n  margin: 16px 0;\n}\n\n.button_ea1e {\n  width: 200px;\n  margin-top: 8px;\n}\n\n.firstButton_c698 {\n\n  margin-top: 32px;\n}\n\n.title_e485.title_e485 {\n  margin-top: 0;\n  margin-bottom: 8px;\n\n  text-align: center;\n\n  font-weight: 100;\n}\n\n.logo_acd8 {\n  width: 96px;\n  height: 96px;\n  margin-bottom: 12px;\n  object-fit: contain;\n}\n\n@media (max-height: 400px) {\n\n.logo_acd8 {\n    width: 32px;\n    height: 32px;\n}\n  }\n\n.error_cdae {\n  text-align: center;\n\n  color: var(--ring-error-color);\n}\n","",{version:3,sources:["webpack://./src/auth-dialog/auth-dialog.css"],names:[],mappings:"AAIA;EACE,WAAW;EACX,gBAAgB;AAClB;;AAEA;;EAGE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;;EAEtB,cAAwB;AAC1B;;AAEA;EACE,YAAsB;EACtB,eAAgB;AAClB;;AAEA;;EAGE,gBAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,kBAAmB;;EAEnB,kBAAkB;;EAElB,gBAAgB;AAClB;;AAEA;EACE,WAAsB;EACtB,YAAuB;EACvB,mBAAmB;EACnB,mBAAmB;AAMrB;;AAJE;;AANF;IAOI,WAAqB;IACrB,YAAsB;AAE1B;EADE;;AAGF;EACE,kBAAkB;;EAElB,8BAA8B;AAChC",sourcesContent:['@import "../global/variables.css";\n\n@value unit from "../global/global.css";\n\n.dialog.dialog {\n  width: auto;\n  max-width: 400px;\n}\n\n.content {\n  composes: font from "../global/global.css";\n\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n\n  margin: calc(unit * 2) 0;\n}\n\n.button {\n  width: calc(unit * 25);\n  margin-top: unit;\n}\n\n.firstButton {\n  composes: button;\n\n  margin-top: calc(unit * 4);\n}\n\n.title.title {\n  margin-top: 0;\n  margin-bottom: unit;\n\n  text-align: center;\n\n  font-weight: 100;\n}\n\n.logo {\n  width: calc(unit * 12);\n  height: calc(unit * 12);\n  margin-bottom: 12px;\n  object-fit: contain;\n\n  @media (max-height: 400px) {\n    width: calc(unit * 4);\n    height: calc(unit * 4);\n  }\n}\n\n.error {\n  text-align: center;\n\n  color: var(--ring-error-color);\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={unit:`${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.unit}`,dialog:"dialog_eb86",content:`content_b229 ${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.font}`,button:"button_ea1e",firstButton:"firstButton_c698 button_ea1e",title:"title_e485",logo:"logo_acd8",error:"error_cdae"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/heading/heading.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,".heading_cd1b {\n\n  margin-top: var(--ring-line-height);\n}\n\n.heading_cd1b:first-child {\n    margin-top: 0;\n  }\n\n.heading_cd1b:is(h1, h2) {\n    margin-bottom: 8px;\n\n    color: var(--ring-heading-color);\n  }\n\n.heading_cd1b:is(h1) {\n    font-size: 24px;\n    line-height: 28px;\n  }\n\n.heading_cd1b:is(h2) {\n    font-size: 20px;\n    line-height: 24px;\n  }\n\n.heading_cd1b:is(h3) {\n    margin-bottom: 0;\n\n    font-size: 16px;\n    line-height: 22px;\n  }\n\n.heading_cd1b:is(h4) {\n    margin-bottom: 1px;\n\n    letter-spacing: 1px;\n    text-transform: uppercase;\n\n    font-size: 12px;\n    font-weight: normal;\n    line-height: 18px;\n  }\n\n.caps_ae59 {\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n","",{version:3,sources:["webpack://./src/heading/heading.css"],names:[],mappings:"AAEA;;EAGE,mCAAmC;AAuCrC;;AArCE;IACE,aAAa;EACf;;AAEA;IACE,kBAAkB;;IAElB,gCAAgC;EAClC;;AAEA;IACE,eAAe;IACf,iBAAiB;EACnB;;AAEA;IACE,eAAe;IACf,iBAAiB;EACnB;;AAEA;IACE,gBAAgB;;IAEhB,eAAe;IACf,iBAAiB;EACnB;;AAEA;IACE,kBAAkB;;IAElB,mBAAmB;IACnB,yBAAyB;;IAEzB,eAAe;IACf,mBAAmB;IACnB,iBAAiB;EACnB;;AAGF;EACE,mBAAmB;EACnB,yBAAyB;AAC3B",sourcesContent:['@import "../global/variables.css";\n\n.heading {\n  composes: font from "../global/global.css";\n\n  margin-top: var(--ring-line-height);\n\n  &:first-child {\n    margin-top: 0;\n  }\n\n  &:is(h1, h2) {\n    margin-bottom: 8px;\n\n    color: var(--ring-heading-color);\n  }\n\n  &:is(h1) {\n    font-size: 24px;\n    line-height: 28px;\n  }\n\n  &:is(h2) {\n    font-size: 20px;\n    line-height: 24px;\n  }\n\n  &:is(h3) {\n    margin-bottom: 0;\n\n    font-size: 16px;\n    line-height: 22px;\n  }\n\n  &:is(h4) {\n    margin-bottom: 1px;\n\n    letter-spacing: 1px;\n    text-transform: uppercase;\n\n    font-size: 12px;\n    font-weight: normal;\n    line-height: 18px;\n  }\n}\n\n.caps {\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={heading:`heading_cd1b ${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.font}`,caps:"caps_ae59"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/auth-dialog/auth-dialog.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/auth-dialog/auth-dialog.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/heading/heading.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/heading/heading.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);