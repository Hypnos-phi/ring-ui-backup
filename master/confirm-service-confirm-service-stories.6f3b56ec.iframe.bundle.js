(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[6182],{"./node_modules/@jetbrains/icons/chevron-10px.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><g><polygon points="5 7.99 1.5 4.5 2.5 3.5 5 6.01 7.5 3.5 8.49 4.5 5 7.99"/></g></svg>'},"./node_modules/@jetbrains/icons/close.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M13.442 2.558a.625.625 0 0 1 0 .884L8.883 8.006l4.546 4.552a.625.625 0 1 1-.884.884L8 8.89l-4.545 4.55a.625.625 0 0 1-.884-.883l4.546-4.552-4.56-4.564a.625.625 0 1 1 .885-.884L8 7.122l4.558-4.564a.625.625 0 0 1 .884 0Z" clip-rule="evenodd"/></svg>'},"./src/confirm/confirm.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Confirm});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),_dialog_dialog__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/dialog/dialog.tsx"),_button_button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/button/button.tsx"),_island_island__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/island/header.tsx"),_island_island__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/island/content.tsx"),_panel_panel__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/panel/panel.tsx"),_confirm_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/confirm/confirm.css"),_confirm_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_confirm_css__WEBPACK_IMPORTED_MODULE_1__);class Confirm extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,text:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,description:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,show:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,rejectOnEsc:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,inProgress:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,cancelIsDefault:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,confirmLabel:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,rejectLabel:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,onConfirm:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,onReject:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func};static defaultProps={text:null,description:null,show:!1,rejectOnEsc:!0,inProgress:!1,cancelIsDefault:!1,confirmLabel:"OK",rejectLabel:"Cancel",onConfirm:()=>{},onReject:()=>{}};onEscPress=()=>{this.props.rejectOnEsc&&this.props.onReject()};render(){const{show,className,inProgress,cancelIsDefault,text,description,confirmLabel,rejectLabel,onConfirm,onReject}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_dialog_dialog__WEBPACK_IMPORTED_MODULE_3__.A,{label:text||("string"==typeof description?description:void 0),className,onEscPress:this.onEscPress,show,trapFocus:!0,"data-test":"ring-confirm"},text&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_island_island__WEBPACK_IMPORTED_MODULE_4__.A,null,text),description&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_island_island__WEBPACK_IMPORTED_MODULE_5__.A,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:_confirm_css__WEBPACK_IMPORTED_MODULE_1___default().description},description)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_panel_panel__WEBPACK_IMPORTED_MODULE_6__.A,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.Ay,{"data-test":"confirm-ok-button",primary:!cancelIsDefault,loader:inProgress,disabled:inProgress,onClick:onConfirm},confirmLabel),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.Ay,{"data-test":"confirm-reject-button",onClick:onReject,disabled:inProgress,primary:cancelIsDefault},rejectLabel)))}}Confirm.__docgenInfo={description:"@name Confirm",methods:[{name:"onEscPress",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Confirm",props:{text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}},description:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"null",computed:!1},type:{name:"node"}},show:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},rejectOnEsc:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1},type:{name:"bool"}},inProgress:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},cancelIsDefault:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},confirmLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'OK'",computed:!1},type:{name:"string"}},rejectLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Cancel'",computed:!1},type:{name:"string"}},onConfirm:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"() => {}",computed:!1},type:{name:"func"}},onReject:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"() => {}",computed:!1},type:{name:"func"}},className:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:"",type:{name:"string"}}}}},"./src/island/header.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_global_linear_function__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/global/linear-function.ts"),_island_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/island/island.css"),_island_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_island_css__WEBPACK_IMPORTED_MODULE_2__),_adaptive_island_hoc__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/island/adaptive-island-hoc.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Start={FONT_SIZE:24,LINE_HEIGHT:28,PADDING_TOP:24,PADDING_BOTTOM:0,X:0,Y:0,SPACING:0},End={FONT_SIZE:13,LINE_HEIGHT:20,PADDING_TOP:16,PADDING_BOTTOM:8,X:.4,Y:.1,SPACING:1.09};class Header extends react__WEBPACK_IMPORTED_MODULE_0__.Component{static propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,border:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,wrapWithTitle:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,phase:prop_types__WEBPACK_IMPORTED_MODULE_3___default().number};static defaultProps={wrapWithTitle:!0};style(name){var _this$props$phase;return(0,_global_linear_function__WEBPACK_IMPORTED_MODULE_4__.h)(Start[name],End[name],null!==(_this$props$phase=this.props.phase)&&void 0!==_this$props$phase?_this$props$phase:0)}render(){const{children,className,wrapWithTitle,border,phase,...restProps}=this.props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_island_css__WEBPACK_IMPORTED_MODULE_2___default().header,className,{[_island_css__WEBPACK_IMPORTED_MODULE_2___default().withBottomBorder]:border||null!=phase&&phase>=.5}),headerStyle=null!=phase?{lineHeight:`${this.style("LINE_HEIGHT")}px`,paddingTop:this.style("PADDING_TOP"),paddingBottom:this.style("PADDING_BOTTOM")}:void 0,scaleFont=null!=phase&&this.style("FONT_SIZE")/Start.FONT_SIZE,titleStyle=null!=phase&&phase<1?{fontSize:Start.FONT_SIZE,transform:`translate(${this.style("X")}px, ${this.style("Y")}px) scale(${scaleFont})`,letterSpacing:this.style("SPACING")}:void 0;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({},restProps,{"data-test":"ring-island-header",className:classes,style:headerStyle}),wrapWithTitle&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",{className:_island_css__WEBPACK_IMPORTED_MODULE_2___default().title,style:titleStyle},children),!wrapWithTitle&&children)}}const HeaderWrapper=props=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_adaptive_island_hoc__WEBPACK_IMPORTED_MODULE_5__.L6.Consumer,null,(phase=>{const addProps=null!=phase?{phase}:{};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Header,_extends({},props,addProps))})),__WEBPACK_DEFAULT_EXPORT__=HeaderWrapper;HeaderWrapper.__docgenInfo={description:"",methods:[],displayName:"HeaderWrapper",props:{wrapWithTitle:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},border:{required:!1,tsType:{name:"union",raw:"boolean | null | undefined",elements:[{name:"boolean"},{name:"null"},{name:"undefined"}]},description:""},phase:{required:!1,tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},description:""}},composes:["HTMLAttributes"]}},"./src/panel/panel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Panel});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_panel_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/panel/panel.css"),_panel_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_panel_css__WEBPACK_IMPORTED_MODULE_2__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}class Panel extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node};render(){const{className,children,...props}=this.props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_panel_css__WEBPACK_IMPORTED_MODULE_2___default().panel,className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({},props,{className:classes}),children)}}Panel.__docgenInfo={description:"@name Panel",methods:[],displayName:"Panel",props:{className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/confirm/confirm.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,".description_bc09 {\n  margin-top: var(--ring-unit);\n\n  font-size: var(--ring-font-size);\n}\n","",{version:3,sources:["webpack://./src/confirm/confirm.css"],names:[],mappings:"AAEA;EACE,4BAA4B;;EAE5B,gCAAgC;AAClC",sourcesContent:['@import "../global/variables.css";\n\n.description {\n  margin-top: var(--ring-unit);\n\n  font-size: var(--ring-font-size);\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={description:"description_bc09"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/panel/panel.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dialog_dialog_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/dialog/dialog.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dialog_dialog_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,".panel_ce91 { /* TODO: Invert dependency using :externals CSS Modules selector */\n\n  position: relative;\n\n  margin-top: calc(var(--ring-unit)*2);\n  padding: calc(var(--ring-unit)*2) calc(var(--ring-unit)*4) calc(var(--ring-unit)*4);\n\n  border-top: 1px solid var(--ring-popup-border-color);\n}\n\n.panel_ce91:empty {\n    display: none;\n  }\n\n.panel_ce91 > button:not(:last-child) {\n    margin-right: var(--ring-unit);\n  }\n","",{version:3,sources:["webpack://./src/panel/panel.css"],names:[],mappings:"AAEA,cAC+C,kEAAkE;;EAE/G,kBAAkB;;EAElB,oCAAsC;EACtC,mFAAyF;;EAEzF,oDAAoD;AAStD;;AAPE;IACE,aAAa;EACf;;AAEA;IACE,8BAA8B;EAChC",sourcesContent:['@import "../global/variables.css";\n\n.panel {\n  composes: panel from "../dialog/dialog.css"; /* TODO: Invert dependency using :externals CSS Modules selector */\n\n  position: relative;\n\n  margin-top: calc(var(--ring-unit) * 2);\n  padding: calc(var(--ring-unit) * 2) calc(var(--ring-unit) * 4) calc(var(--ring-unit) * 4);\n\n  border-top: 1px solid var(--ring-popup-border-color);\n\n  &:empty {\n    display: none;\n  }\n\n  & > button:not(:last-child) {\n    margin-right: var(--ring-unit);\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={panel:`panel_ce91 ${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dialog_dialog_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.panel}`};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/scrollbar-width/scrollbar-width.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;(function(){"use strict";var getScrollbarWidth,scrollbarWidth;scrollbarWidth=null,getScrollbarWidth=function(recalculate){var div1,div2;return null==recalculate&&(recalculate=!1),null==scrollbarWidth||recalculate?"loading"===document.readyState?null:(div1=document.createElement("div"),div2=document.createElement("div"),div1.style.width=div2.style.width=div1.style.height=div2.style.height="100px",div1.style.overflow="scroll",div2.style.overflow="hidden",document.body.appendChild(div1),document.body.appendChild(div2),scrollbarWidth=Math.abs(div1.scrollHeight-div2.scrollHeight),document.body.removeChild(div1),document.body.removeChild(div2),scrollbarWidth):scrollbarWidth},void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return getScrollbarWidth}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}).call(this)},"./src/confirm/confirm.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/confirm/confirm.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/panel/panel.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/panel/panel.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/confirm-service/confirm-service.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{confirmService:()=>confirmService,default:()=>confirm_service_stories});var react=__webpack_require__("./node_modules/react/index.js"),button_button=__webpack_require__("./src/button/button.tsx"),client=__webpack_require__("./node_modules/react-dom/client.js"),confirm_confirm=__webpack_require__("./src/confirm/confirm.tsx"),controls_height=__webpack_require__("./src/global/controls-height.tsx");const containerElement=document.createElement("div"),reactRoot=(0,client.createRoot)(containerElement);function renderConfirm(props){const{buttonsHeight=(0,controls_height.jT)(),...restProps}=props;reactRoot.render(react.createElement(controls_height.VJ.Provider,{value:buttonsHeight},react.createElement(confirm_confirm.A,restProps)))}function confirm_service_confirm({text,description,confirmLabel="OK",rejectLabel="Cancel",cancelIsDefault,onBeforeConfirm,buttonsHeight}){return new Promise(((resolve,reject)=>{const props={text,description,confirmLabel,rejectLabel,cancelIsDefault,buttonsHeight,show:!0,onConfirm:()=>onBeforeConfirm?(renderConfirm({...props,inProgress:!0}),Promise.resolve(onBeforeConfirm()).then((()=>{renderConfirm({...props,show:!1}),resolve()})).catch((err=>{renderConfirm({...props,show:!1}),reject(err)}))):(renderConfirm({...props,show:!1}),resolve()),onReject:()=>{renderConfirm({...props,show:!1}),reject(new Error("Confirm(@jetbrains/ring-ui): null exception"))}};renderConfirm(props)}))}const confirm_service_stories={title:"Services/Confirm Service",parameters:{notes:" wrapper for the Confirm component. Allows showing the confirmation dialog * without mounting the Confirm component first. Can be used outside React.",hermione:{captureSelector:"*[data-test~=ring-dialog]"},a11y:{element:"#storybook-root,*[data-test~=ring-dialog]"}}},confirmService=({onConfirm,onCancel})=>{class ConfirmDemo extends react.Component{componentDidMount(){this.showConfirm()}componentWillUnmount(){!function hideConfirm(){renderConfirm({text:"",show:!1})}()}showConfirm=()=>confirm_service_confirm({text:"Do you really wish to proceed?"}).then(onConfirm).catch(onCancel);showWithAnotherText=()=>confirm_service_confirm({text:"There is another confirmation",description:"Confirmation description",confirmLabel:"OK",rejectLabel:"Cancel",cancelIsDefault:!0,onBeforeConfirm:()=>new Promise((resolve=>setTimeout(resolve,1e3)))}).then(onConfirm).catch(onCancel);render(){return react.createElement("div",null,react.createElement(button_button.Ay,{onClick:this.showConfirm},"Show confirm"),react.createElement(button_button.Ay,{onClick:this.showWithAnotherText},"Show another message"))}}return react.createElement(ConfirmDemo,null)};confirmService.argTypes={onConfirm:{},onCancel:{}},confirmService.parameters={...confirmService.parameters,docs:{...confirmService.parameters?.docs,source:{originalSource:"({\n  onConfirm,\n  onCancel\n}: ConfirmServiceArgs) => {\n  class ConfirmDemo extends React.Component {\n    componentDidMount() {\n      this.showConfirm();\n    }\n    componentWillUnmount() {\n      hideConfirm();\n    }\n    showConfirm = () => confirm({\n      text: 'Do you really wish to proceed?'\n    }).then(onConfirm).catch(onCancel);\n    showWithAnotherText = () => confirm({\n      text: 'There is another confirmation',\n      description: 'Confirmation description',\n      confirmLabel: 'OK',\n      rejectLabel: 'Cancel',\n      cancelIsDefault: true,\n      onBeforeConfirm: () => new Promise(resolve => setTimeout(resolve, 1000))\n    }).then(onConfirm).catch(onCancel);\n    render() {\n      return <div>\n          <Button onClick={this.showConfirm}>Show confirm</Button>\n          <Button onClick={this.showWithAnotherText}>Show another message</Button>\n        </div>;\n    }\n  }\n  return <ConfirmDemo />;\n}",...confirmService.parameters?.docs?.source}}}},"./node_modules/util-deprecate/browser.js":(module,__unused_webpack_exports,__webpack_require__)=>{function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);