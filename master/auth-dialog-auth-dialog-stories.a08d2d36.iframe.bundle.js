(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[302],{"./node_modules/@jetbrains/icons/chevron-10px.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><g><polygon points="5 7.99 1.5 4.5 2.5 3.5 5 6.01 7.5 3.5 8.49 4.5 5 7.99"/></g></svg>'},"./node_modules/@jetbrains/icons/close.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M13.442 2.558a.625.625 0 0 1 0 .884L8.883 8.006l4.546 4.552a.625.625 0 1 1-.884.884L8 8.89l-4.545 4.55a.625.625 0 0 1-.884-.883l4.546-4.552-4.56-4.564a.625.625 0 1 1 .885-.884L8 7.122l4.558-4.564a.625.625 0 0 1 .884 0Z" clip-rule="evenodd"/></svg>'},"./node_modules/scrollbar-width/scrollbar-width.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;(function(){"use strict";var getScrollbarWidth,scrollbarWidth;scrollbarWidth=null,getScrollbarWidth=function(recalculate){var div1,div2;return null==recalculate&&(recalculate=!1),null==scrollbarWidth||recalculate?"loading"===document.readyState?null:(div1=document.createElement("div"),div2=document.createElement("div"),div1.style.width=div2.style.width=div1.style.height=div2.style.height="100px",div1.style.overflow="scroll",div2.style.overflow="hidden",document.body.appendChild(div1),document.body.appendChild(div2),scrollbarWidth=Math.abs(div1.scrollHeight-div2.scrollHeight),document.body.removeChild(div1),document.body.removeChild(div2),scrollbarWidth):scrollbarWidth},void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return getScrollbarWidth}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}).call(this)},"./src/auth-dialog/auth-dialog.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{authDialog:()=>authDialog,default:()=>auth_dialog_stories});var react=__webpack_require__("./node_modules/react/index.js"),button_button=__webpack_require__("./src/button/button.tsx"),auth_dialog=__webpack_require__("./src/auth-dialog/auth-dialog.tsx");const youtrack=__webpack_require__.p+"b416e1c82e815e9a891ef98bb66742de.svg";function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const auth_dialog_stories={title:"Components/Auth Dialog",parameters:{notes:"A component that shows an authentication dialog.",hermione:{captureSelector:"*[data-test~=ring-dialog]"},a11y:{element:"#storybook-root,*[data-test~=ring-dialog]"}}},authDialog=({onConfirm,onCancel})=>{class AuthDialogDemo extends react.Component{state={confirm:{show:!0,onConfirm:()=>{},onReject:()=>{}}};componentDidMount(){this.showAuthDialog()}hideAuthDialog=()=>{this.setState({confirm:{show:!1}})};showAuthDialog=()=>new Promise(((resolve,reject)=>{this.setState({confirm:{show:!0,errorMessage:"Authorization is required",serviceName:"YouTrack",onConfirm:()=>{this.hideAuthDialog(),resolve()},onCancel:()=>{this.hideAuthDialog(),reject()}}})})).then(onConfirm).catch(onCancel);render(){return react.createElement("div",null,react.createElement("div",null,react.createElement(button_button.Ay,{onClick:this.showAuthDialog},"Show dialog")),react.createElement(auth_dialog.A,_extends({},this.state.confirm,{serviceImage:youtrack,confirmLabel:"Log in",cancelLabel:"Stay a guest"})))}}return react.createElement(AuthDialogDemo,null)};authDialog.argTypes={onConfirm:{},onCancel:{}},authDialog.parameters={...authDialog.parameters,docs:{...authDialog.parameters?.docs,source:{originalSource:"({\n  onConfirm,\n  onCancel\n}: AuthDialogArgs) => {\n  class AuthDialogDemo extends React.Component {\n    state = {\n      confirm: {\n        show: true,\n        onConfirm: () => {},\n        onReject: () => {}\n      }\n    };\n    componentDidMount() {\n      this.showAuthDialog();\n    }\n    hideAuthDialog = () => {\n      this.setState({\n        confirm: {\n          show: false\n        }\n      });\n    };\n    showAuthDialog = () => new Promise<void>((resolve, reject) => {\n      this.setState({\n        confirm: {\n          show: true,\n          errorMessage: 'Authorization is required',\n          serviceName: 'YouTrack',\n          onConfirm: () => {\n            this.hideAuthDialog();\n            resolve();\n          },\n          onCancel: () => {\n            this.hideAuthDialog();\n            reject();\n          }\n        }\n      });\n    }).then(onConfirm).catch(onCancel);\n    render() {\n      return <div>\n          <div>\n            <Button onClick={this.showAuthDialog}>Show dialog</Button>\n          </div>\n          <AuthDialog {...this.state.confirm} serviceImage={youtrackLogo} confirmLabel=\"Log in\" cancelLabel=\"Stay a guest\" />\n        </div>;\n    }\n  }\n  return <AuthDialogDemo />;\n}",...authDialog.parameters?.docs?.source}}}},"./node_modules/util-deprecate/browser.js":(module,__unused_webpack_exports,__webpack_require__)=>{function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);