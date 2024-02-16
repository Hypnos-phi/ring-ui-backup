(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[302],{"./node_modules/@jetbrains/icons/chevron-10px.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><g><polygon points="5 7.99 1.5 4.5 2.5 3.5 5 6.01 7.5 3.5 8.49 4.5 5 7.99"/></g></svg>'},"./node_modules/@jetbrains/icons/close.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M13.442 2.558a.625.625 0 0 1 0 .884L8.883 8.006l4.546 4.552a.625.625 0 1 1-.884.884L8 8.89l-4.545 4.55a.625.625 0 0 1-.884-.883l4.546-4.552-4.56-4.564a.625.625 0 1 1 .885-.884L8 7.122l4.558-4.564a.625.625 0 0 1 .884 0Z" clip-rule="evenodd"/></svg>'},"./src/auth-dialog/auth-dialog.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{authDialog:()=>authDialog,default:()=>auth_dialog_stories});var react=__webpack_require__("./node_modules/react/index.js"),button_button=__webpack_require__("./src/button/button.tsx"),auth_dialog=__webpack_require__("./src/auth-dialog/auth-dialog.tsx");const youtrack=__webpack_require__.p+"e4031d364a3f0349c249d7e11b786091.svg";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const auth_dialog_stories={title:"Components/Auth Dialog",parameters:{storySource:{source:"import React from 'react';\n\n\nimport Button from '../button/button';\n\nimport AuthDialog from './auth-dialog';\n\n\nimport youtrackLogo from '!file-loader!@jetbrains/logos/youtrack/youtrack.svg';\n\n\nexport default {\n  title: 'Components/Auth Dialog',\n\n  parameters: {\n    notes: 'A component that shows an authentication dialog.',\n    hermione: {captureSelector: '*[data-test~=ring-dialog]'},\n    a11y: {element: '#storybook-root,*[data-test~=ring-dialog]'}\n  }\n};\n\ninterface AuthDialogArgs {\n  onConfirm: () => void\n  onCancel: () => void\n}\nexport const authDialog = ({onConfirm, onCancel}: AuthDialogArgs) => {\n  class AuthDialogDemo extends React.Component {\n    state = {\n      confirm: {\n        show: true,\n        onConfirm: () => {},\n        onReject: () => {}\n      }\n    };\n\n    componentDidMount() {\n      this.showAuthDialog();\n    }\n\n    hideAuthDialog = () => {\n      this.setState({confirm: {show: false}});\n    };\n\n    showAuthDialog = () =>\n      new Promise<void>((resolve, reject) => {\n        this.setState({\n          confirm: {\n            show: true,\n            errorMessage: 'Authorization is required',\n            serviceName: 'YouTrack',\n            onConfirm: () => {\n              this.hideAuthDialog();\n              resolve();\n            },\n            onCancel: () => {\n              this.hideAuthDialog();\n              reject();\n            }\n          }\n        });\n      }).\n        then(onConfirm).\n        catch(onCancel);\n\n    render() {\n      return (\n        <div>\n          <div>\n            <Button onClick={this.showAuthDialog}>Show dialog</Button>\n          </div>\n          <AuthDialog\n            {...this.state.confirm}\n            serviceImage={youtrackLogo}\n            confirmLabel=\"Log in\"\n            cancelLabel=\"Stay a guest\"\n          />\n        </div>\n      );\n    }\n  }\n\n  return <AuthDialogDemo/>;\n};\n\nauthDialog.argTypes = {onConfirm: {}, onCancel: {}};\n",locationsMap:{"auth-dialog":{startLoc:{col:26,line:26},endLoc:{col:1,line:83},startBody:{col:26,line:26},endBody:{col:1,line:83}}}},notes:"A component that shows an authentication dialog.",hermione:{captureSelector:"*[data-test~=ring-dialog]"},a11y:{element:"#storybook-root,*[data-test~=ring-dialog]"}}},authDialog=({onConfirm,onCancel})=>{class AuthDialogDemo extends react.Component{state={confirm:{show:!0,onConfirm:()=>{},onReject:()=>{}}};componentDidMount(){this.showAuthDialog()}hideAuthDialog=()=>{this.setState({confirm:{show:!1}})};showAuthDialog=()=>new Promise(((resolve,reject)=>{this.setState({confirm:{show:!0,errorMessage:"Authorization is required",serviceName:"YouTrack",onConfirm:()=>{this.hideAuthDialog(),resolve()},onCancel:()=>{this.hideAuthDialog(),reject()}}})})).then(onConfirm).catch(onCancel);render(){return react.createElement("div",null,react.createElement("div",null,react.createElement(button_button.Ay,{onClick:this.showAuthDialog},"Show dialog")),react.createElement(auth_dialog.A,_extends({},this.state.confirm,{serviceImage:youtrack,confirmLabel:"Log in",cancelLabel:"Stay a guest"})))}}return react.createElement(AuthDialogDemo,null)};authDialog.argTypes={onConfirm:{},onCancel:{}}},"./src/auth-dialog/auth-dialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>AuthDialog});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_island_island__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/island/content.tsx"),_dialog_dialog__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/dialog/dialog.tsx"),_button_button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/button/button.tsx"),_heading_heading__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/heading/heading.tsx"),_auth_dialog_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/auth-dialog/auth-dialog.css"),_auth_dialog_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_auth_dialog_css__WEBPACK_IMPORTED_MODULE_2__);class AuthDialog extends react__WEBPACK_IMPORTED_MODULE_0__.Component{static propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,title:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,errorMessage:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,serviceImage:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,serviceName:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,loginCaption:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,loginToCaption:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,show:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,cancelOnEsc:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,confirmLabel:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,cancelLabel:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,tryAgainLabel:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,onConfirm:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,onCancel:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,onTryAgain:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func};static defaultProps={loginCaption:"Log in",loginToCaption:"Log in to %serviceName%",tryAgainLabel:"Try again",show:!1,cancelOnEsc:!0,confirmLabel:"Log in",cancelLabel:"Remain a guest",onConfirm:()=>{},onCancel:()=>{}};state={retrying:!1};componentDidMount(){window.addEventListener("online",this.onRetryPress)}componentWillUnmount(){window.removeEventListener("online",this.onRetryPress)}onEscPress=()=>{this.props.cancelOnEsc&&this.props.onCancel()};onRetryPress=async()=>{if(this.props.onTryAgain&&!this.state.retrying){this.setState({retrying:!0});try{await this.props.onTryAgain()}catch(e){}finally{this.setState({retrying:!1})}}};render(){const{show,className,errorMessage,serviceImage,serviceName,loginCaption,loginToCaption,confirmLabel,cancelLabel,tryAgainLabel,onConfirm,onCancel,onTryAgain}=this.props,{retrying}=this.state,defaultTitle=serviceName?loginToCaption:loginCaption,title=(this.props.title||defaultTitle).replace("%serviceName%",null!=serviceName?serviceName:"").replace("{{serviceName}}",null!=serviceName?serviceName:"");return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_dialog_dialog__WEBPACK_IMPORTED_MODULE_4__.A,{label:title,"data-test":"ring-auth-dialog",className,contentClassName:classnames__WEBPACK_IMPORTED_MODULE_1___default()(className,_auth_dialog_css__WEBPACK_IMPORTED_MODULE_2___default().dialog),onEscPress:this.onEscPress,show,trapFocus:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_island_island__WEBPACK_IMPORTED_MODULE_5__.A,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:_auth_dialog_css__WEBPACK_IMPORTED_MODULE_2___default().content},serviceImage&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{alt:`${serviceName} logo`,className:_auth_dialog_css__WEBPACK_IMPORTED_MODULE_2___default().logo,src:serviceImage}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heading_heading__WEBPACK_IMPORTED_MODULE_6__.H2,{className:_auth_dialog_css__WEBPACK_IMPORTED_MODULE_2___default().title},title),errorMessage&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:_auth_dialog_css__WEBPACK_IMPORTED_MODULE_2___default().error},errorMessage),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.Ay,{primary:!0,className:_auth_dialog_css__WEBPACK_IMPORTED_MODULE_2___default().firstButton,"data-test":"auth-dialog-confirm-button",onClick:onConfirm},confirmLabel),onTryAgain&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.Ay,{className:_auth_dialog_css__WEBPACK_IMPORTED_MODULE_2___default().button,"data-test":"auth-dialog-retry-button",onClick:()=>this.onRetryPress(),loader:retrying,disabled:retrying},tryAgainLabel),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.Ay,{className:_auth_dialog_css__WEBPACK_IMPORTED_MODULE_2___default().button,"data-test":"auth-dialog-cancel-button",onClick:onCancel},cancelLabel))))}}},"./src/heading/heading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,E:()=>Levels,H1:()=>H1,H2:()=>H2,H3:()=>H3,H4:()=>H4});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),util_deprecate__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/util-deprecate/browser.js"),util_deprecate__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(util_deprecate__WEBPACK_IMPORTED_MODULE_2__),_heading_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/heading/heading.css"),_heading_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_heading_css__WEBPACK_IMPORTED_MODULE_3__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}let Levels=function(Levels){return Levels[Levels.H1=1]="H1",Levels[Levels.H2=2]="H2",Levels[Levels.H3=3]="H3",Levels[Levels.H4=4]="H4",Levels}({});const fallbackHeading=util_deprecate__WEBPACK_IMPORTED_MODULE_2___default()((()=>"h3"),"Headings of level 5 and higher are replaced with h3"),Heading=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((function Heading({children,className,level=Levels.H1,...restProps}){const classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_heading_css__WEBPACK_IMPORTED_MODULE_3___default().heading,className),Tag=level<=Levels.H4?`h${level}`:fallbackHeading();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag,_extends({},restProps,{className:classes}),children)}));Heading.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,level:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf([Levels.H1,Levels.H2,Levels.H3,Levels.H4])},Heading.Levels=Levels;const __WEBPACK_DEFAULT_EXPORT__=Heading;function makeHeading(level,useCaps){const H=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((({className,caps,...restProps})=>{const classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(className,{[_heading_css__WEBPACK_IMPORTED_MODULE_3___default().caps]:useCaps&&caps});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Heading,_extends({},restProps,{level,className:classes}))}));return H.displayName=`H${level}`,H.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,caps:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool},H}const H1=makeHeading(Levels.H1,!0),H2=makeHeading(Levels.H2),H3=makeHeading(Levels.H3),H4=makeHeading(Levels.H4)},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/auth-dialog/auth-dialog.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,".dialog_eb86.dialog_eb86 {\n  width: auto;\n  max-width: 400px;\n}\n\n.content_b229 {\n\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n\n  margin: calc(var(--ring-unit)*2) 0;\n}\n\n.button_ea1e {\n  width: calc(var(--ring-unit)*25);\n  margin-top: var(--ring-unit);\n}\n\n.firstButton_c698 {\n\n  margin-top: calc(var(--ring-unit)*4);\n}\n\n.title_e485.title_e485 {\n  margin-top: 0;\n  margin-bottom: var(--ring-unit);\n\n  text-align: center;\n\n  font-weight: 100;\n}\n\n.logo_acd8 {\n  width: calc(var(--ring-unit)*12);\n  height: calc(var(--ring-unit)*12);\n  margin-bottom: 12px;\n  object-fit: contain;\n}\n\n@media (height <= 400px) {\n\n.logo_acd8 {\n    width: calc(var(--ring-unit)*4);\n    height: calc(var(--ring-unit)*4);\n}\n  }\n\n.error_cdae {\n  text-align: center;\n\n  color: var(--ring-error-color);\n}\n","",{version:3,sources:["webpack://./src/auth-dialog/auth-dialog.css"],names:[],mappings:"AAEA;EACE,WAAW;EACX,gBAAgB;AAClB;;AAEA;;EAGE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;;EAEtB,kCAAoC;AACtC;;AAEA;EACE,gCAAkC;EAClC,4BAA4B;AAC9B;;AAEA;;EAGE,oCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,+BAA+B;;EAE/B,kBAAkB;;EAElB,gBAAgB;AAClB;;AAEA;EACE,gCAAkC;EAClC,iCAAmC;EACnC,mBAAmB;EACnB,mBAAmB;AAMrB;;AAJE;;AANF;IAOI,+BAAiC;IACjC,gCAAkC;AAEtC;EADE;;AAGF;EACE,kBAAkB;;EAElB,8BAA8B;AAChC",sourcesContent:['@import "../global/variables.css";\n\n.dialog.dialog {\n  width: auto;\n  max-width: 400px;\n}\n\n.content {\n  composes: font from "../global/global.css";\n\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n\n  margin: calc(var(--ring-unit) * 2) 0;\n}\n\n.button {\n  width: calc(var(--ring-unit) * 25);\n  margin-top: var(--ring-unit);\n}\n\n.firstButton {\n  composes: button;\n\n  margin-top: calc(var(--ring-unit) * 4);\n}\n\n.title.title {\n  margin-top: 0;\n  margin-bottom: var(--ring-unit);\n\n  text-align: center;\n\n  font-weight: 100;\n}\n\n.logo {\n  width: calc(var(--ring-unit) * 12);\n  height: calc(var(--ring-unit) * 12);\n  margin-bottom: 12px;\n  object-fit: contain;\n\n  @media (height <= 400px) {\n    width: calc(var(--ring-unit) * 4);\n    height: calc(var(--ring-unit) * 4);\n  }\n}\n\n.error {\n  text-align: center;\n\n  color: var(--ring-error-color);\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={dialog:"dialog_eb86",content:`content_b229 ${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.font}`,button:"button_ea1e",firstButton:"firstButton_c698 button_ea1e",title:"title_e485",logo:"logo_acd8",error:"error_cdae"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/heading/heading.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,".contentWithHeadings_cdca h1,\n  .contentWithHeadings_cdca:is(h1),\n  .contentWithHeadings_cdca h2,\n  .contentWithHeadings_cdca:is(h2),\n  .contentWithHeadings_cdca h3,\n  .contentWithHeadings_cdca:is(h3),\n  .contentWithHeadings_cdca h4,\n  .contentWithHeadings_cdca:is(h4) {\n    margin-top: var(--ring-line-height);\n  }\n\n.contentWithHeadings_cdca h1:first-child, .contentWithHeadings_cdca:is(h1):first-child, .contentWithHeadings_cdca h2:first-child, .contentWithHeadings_cdca:is(h2):first-child, .contentWithHeadings_cdca h3:first-child, .contentWithHeadings_cdca:is(h3):first-child, .contentWithHeadings_cdca h4:first-child, .contentWithHeadings_cdca:is(h4):first-child {\n      margin-top: 0;\n    }\n\n.contentWithHeadings_cdca :is(h1, h2), .contentWithHeadings_cdca:is(h1, h2) {\n    margin-bottom: 8px;\n\n    color: var(--ring-heading-color);\n  }\n\n.contentWithHeadings_cdca h1,\n  .contentWithHeadings_cdca:is(h1) {\n    font-size: 24px;\n    line-height: 28px;\n  }\n\n.contentWithHeadings_cdca h2,\n  .contentWithHeadings_cdca:is(h2) {\n    font-size: 20px;\n    line-height: 24px;\n  }\n\n.contentWithHeadings_cdca h3,\n  .contentWithHeadings_cdca:is(h3) {\n    margin-bottom: 0;\n\n    font-size: 16px;\n    line-height: 22px;\n  }\n\n.contentWithHeadings_cdca h4,\n  .contentWithHeadings_cdca:is(h4) {\n    margin-bottom: 1px;\n\n    letter-spacing: 1px;\n    text-transform: uppercase;\n\n    font-size: 12px;\n    font-weight: normal;\n    line-height: 18px;\n  }\n\n.heading_cd1b {\n}\n\n.caps_ae59 {\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n","",{version:3,sources:["webpack://./src/heading/heading.css"],names:[],mappings:"AAGE;;;;;;;;IAQE,mCAAmC;EAKrC;;AAHE;MACE,aAAa;IACf;;AAIF;IAEE,kBAAkB;;IAElB,gCAAgC;EAClC;;AAEA;;IAEE,eAAe;IACf,iBAAiB;EACnB;;AAEA;;IAEE,eAAe;IACf,iBAAiB;EACnB;;AAEA;;IAEE,gBAAgB;;IAEhB,eAAe;IACf,iBAAiB;EACnB;;AAEA;;IAEE,kBAAkB;;IAElB,mBAAmB;IACnB,yBAAyB;;IAEzB,eAAe;IACf,mBAAmB;IACnB,iBAAiB;EACnB;;AAGF;AAGA;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B",sourcesContent:['@import "../global/variables.css";\n\n.contentWithHeadings {\n  & h1,\n  &:is(h1),\n  & h2,\n  &:is(h2),\n  & h3,\n  &:is(h3),\n  & h4,\n  &:is(h4) {\n    margin-top: var(--ring-line-height);\n\n    &:first-child {\n      margin-top: 0;\n    }\n  }\n\n\n  & :is(h1, h2),\n  &:is(h1, h2) {\n    margin-bottom: 8px;\n\n    color: var(--ring-heading-color);\n  }\n\n  & h1,\n  &:is(h1) {\n    font-size: 24px;\n    line-height: 28px;\n  }\n\n  & h2,\n  &:is(h2) {\n    font-size: 20px;\n    line-height: 24px;\n  }\n\n  & h3,\n  &:is(h3) {\n    margin-bottom: 0;\n\n    font-size: 16px;\n    line-height: 22px;\n  }\n\n  & h4,\n  &:is(h4) {\n    margin-bottom: 1px;\n\n    letter-spacing: 1px;\n    text-transform: uppercase;\n\n    font-size: 12px;\n    font-weight: normal;\n    line-height: 18px;\n  }\n}\n\n.heading {\n  composes: font from "../global/global.css";\n  composes: contentWithHeadings;\n}\n\n.caps {\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={contentWithHeadings:"contentWithHeadings_cdca",heading:`heading_cd1b ${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.font} contentWithHeadings_cdca`,caps:"caps_ae59"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/auth-dialog/auth-dialog.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/auth-dialog/auth-dialog.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/heading/heading.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/heading/heading.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./node_modules/util-deprecate/browser.js":(module,__unused_webpack_exports,__webpack_require__)=>{function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);