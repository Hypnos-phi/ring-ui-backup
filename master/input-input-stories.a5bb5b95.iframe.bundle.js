(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[6943],{"./node_modules/@jetbrains/icons/chevron-10px.js":function(module){module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><g><polygon points="5 7.99 1.5 4.5 2.5 3.5 5 6.01 7.5 3.5 8.49 4.5 5 7.99"/></g></svg>'},"./node_modules/@jetbrains/icons/close-12px.js":function(module){module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path d="M5.997 6.784l4.454 4.359.787-.804-4.43-4.336 4.465-4.3-.78-.81-4.49 4.323L1.55.857l-.787.804 4.43 4.336-4.465 4.3.78.81 4.49-4.323z"/></svg>'},"./node_modules/@jetbrains/icons/search-12px.js":function(module){module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path d="M7.875 4.5a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM0 4.5a4.5 4.5 0 007.05 3.708l3.45 3.463.796-.796-3.41-3.41A4.5 4.5 0 100 4.5z"/></svg>'},"./node_modules/@jetbrains/icons/search.js":function(module){module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g><path d="M14.64,13.36,10.13,8.85A4.94,4.94,0,0,0,11,6a5,5,0,1,0-2.17,4.12l4.51,4.51ZM2.42,6A3.6,3.6,0,1,1,6,9.61,3.6,3.6,0,0,1,2.42,6Z"/></g></svg>'},"./.storybook/react-decorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom_client__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/client.js"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api");const reactDecorator=(StoryFn,context)=>{const node=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>document.createElement("div")),[context.kind,context.name]),root=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>(0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(node)),[node]);return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>()=>root.unmount()),[root]),root.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StoryFn,null))),node};__webpack_exports__.Z=()=>reactDecorator},"./src/input/input.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:function(){return basic},heightS:function(){return heightS},selectAll:function(){return selectAll}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_jetbrains_icons_search__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@jetbrains/icons/search.js"),_jetbrains_icons_search__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_jetbrains_icons_search__WEBPACK_IMPORTED_MODULE_1__),_jetbrains_icons_search_12px__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@jetbrains/icons/search-12px.js"),_jetbrains_icons_search_12px__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_jetbrains_icons_search_12px__WEBPACK_IMPORTED_MODULE_2__),_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.storybook/react-decorator.tsx"),_button_button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/button/button.tsx"),_global_controls_height__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/global/controls-height.tsx"),_control_label_control_label__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/control-label/control-label.tsx"),_input__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/input/input.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_exports__.default={title:"Components/Input",decorators:[(0,_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_3__.Z)()],parameters:{storySource:{source:'import React, {PureComponent, useContext, useRef} from \'react\';\nimport searchIcon from \'@jetbrains/icons/search\';\nimport searchSIcon from \'@jetbrains/icons/search-12px\';\n\nimport reactDecorator from \'../../.storybook/react-decorator\';\n\nimport Button from \'../button/button\';\n\nimport {ControlsHeight, ControlsHeightContext} from \'../global/controls-height\';\n\nimport {LabelType} from \'../control-label/control-label\';\n\nimport Input, {ContainerProps, InputSpecificProps, Size} from \'./input\';\n\nexport default {\n  title: \'Components/Input\',\n  decorators: [reactDecorator()],\n\n  parameters: {\n    notes: \'Text input fields of varying size.\',\n    zeplinLink: \'https://app.zeplin.io/project/5afd8f5511c2d1c625752bb0/screen/6193bc70ab2b23a8ca449004\'\n  }\n};\n\nclass ClearableInput extends PureComponent<ContainerProps<InputSpecificProps>> {\n  state = {\n    text: this.props.defaultValue\n  };\n\n  setText = (e: React.ChangeEvent<HTMLInputElement>) => {\n    this.setState({\n      text: e.target.value\n    });\n  };\n\n  clear = () => {\n    this.setState({\n      text: \'\'\n    });\n  };\n\n  render() {\n    const {defaultValue, ...restProps} = this.props;\n    return (\n      <Input\n        value={this.state.text}\n        onChange={this.setText}\n        onClear={this.clear}\n        {...restProps}\n      />\n    );\n  }\n}\nconst Inputs = () => {\n  const height = useContext(ControlsHeightContext);\n  return (\n    <form className="inputs">\n      <Input label="Labeled input"/>\n      <Input name="login" label="Label and hint" placeholder="Hint"/>\n      <Input label="Label and value" defaultValue="Default value"/>\n      <ClearableInput label="Clearable input" defaultValue="Default value"/>\n      <ClearableInput\n        placeholder="Hint"\n        label="Disabled clearable input"\n        defaultValue="Default value"\n        disabled\n      />\n      <Input label="Input with icon" icon={height === ControlsHeight.S ? searchSIcon : searchIcon} defaultValue="Default value"/>\n      <Input name="login" label="Primary label" labelType={LabelType.FORM} placeholder="Hint"/>\n      <ClearableInput placeholder="Hint" defaultValue="Borderless input" borderless/>\n      <Input label="Disabled input" disabled defaultValue="Default value"/>\n      <Input\n        label="Invalid input"\n        error="Error description that wraps over lines because of being really long"\n      />\n      <Input label="Error without description" error=""/>\n      <Input label="Short input" size={Size.S}/>\n      <Input label="Long input" size={Size.L}/>\n      <Input label="Autogrowing textarea" multiline defaultValue={\'First line\\nSecond line\'}/>\n    </form>\n  );\n};\nexport const basic = () => <Inputs/>;\n\nbasic.storyName = \'basic\';\n\nbasic.parameters = {\n  storyStyles: `\n<style>\n  .inputs {\n    display: flex;\n    flex-flow: column wrap;\n    max-height: 100vh;\n    margin-top: 8px;\n    background: var(--ring-content-background-color);\n  }\n\n  .inputs > div {\n    margin: 0 16px 8px;\n  }\n\n  .dark.dark {\n    margin: 0 -16px;\n    padding: 8px 16px;\n  }\n</style>`\n};\n\nexport const heightS = () => (\n  <ControlsHeightContext.Provider value={ControlsHeight.S}>\n    <Inputs/>\n  </ControlsHeightContext.Provider>\n);\nheightS.parameters = basic.parameters;\n\nfunction SelectAll() {\n  const ref = useRef<HTMLInputElement>(null);\n\n  function select() {\n    if (ref.current != null) {\n      ref.current.select();\n    }\n  }\n\n  return (\n    <>\n      <Input defaultValue="Value" inputRef={ref} label="Label"/>\n      <Button style={{marginTop: 4}} data-test-select onClick={select}>Select all</Button>\n    </>\n  );\n}\n\nexport const selectAll = () => <SelectAll/>;\n\nselectAll.parameters = {\n  hermione: {\n    actions: [\n      {type: \'click\', selector: \'[data-test-select]\'},\n      {type: \'capture\', selector: \'#storybook-root\'}\n    ]\n  }\n};\n',locationsMap:{basic:{startLoc:{col:21,line:83},endLoc:{col:36,line:83},startBody:{col:21,line:83},endBody:{col:36,line:83}},"height-s":{startLoc:{col:23,line:109},endLoc:{col:1,line:113},startBody:{col:23,line:109},endBody:{col:1,line:113}},"select-all":{startLoc:{col:25,line:133},endLoc:{col:43,line:133},startBody:{col:25,line:133},endBody:{col:43,line:133}}}},notes:"Text input fields of varying size.",zeplinLink:"https://app.zeplin.io/project/5afd8f5511c2d1c625752bb0/screen/6193bc70ab2b23a8ca449004"}};class ClearableInput extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{state={text:this.props.defaultValue};setText=e=>{this.setState({text:e.target.value})};clear=()=>{this.setState({text:""})};render(){const{defaultValue:defaultValue,...restProps}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_input__WEBPACK_IMPORTED_MODULE_4__.ZP,_extends({value:this.state.text,onChange:this.setText,onClear:this.clear},restProps))}}const Inputs=()=>{const height=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_global_controls_height__WEBPACK_IMPORTED_MODULE_5__.pS);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("form",{className:"inputs"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_input__WEBPACK_IMPORTED_MODULE_4__.ZP,{label:"Labeled input"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_input__WEBPACK_IMPORTED_MODULE_4__.ZP,{name:"login",label:"Label and hint",placeholder:"Hint"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_input__WEBPACK_IMPORTED_MODULE_4__.ZP,{label:"Label and value",defaultValue:"Default value"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ClearableInput,{label:"Clearable input",defaultValue:"Default value"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ClearableInput,{placeholder:"Hint",label:"Disabled clearable input",defaultValue:"Default value",disabled:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_input__WEBPACK_IMPORTED_MODULE_4__.ZP,{label:"Input with icon",icon:height===_global_controls_height__WEBPACK_IMPORTED_MODULE_5__.oW.S?_jetbrains_icons_search_12px__WEBPACK_IMPORTED_MODULE_2___default():_jetbrains_icons_search__WEBPACK_IMPORTED_MODULE_1___default(),defaultValue:"Default value"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_input__WEBPACK_IMPORTED_MODULE_4__.ZP,{name:"login",label:"Primary label",labelType:_control_label_control_label__WEBPACK_IMPORTED_MODULE_6__.JG.FORM,placeholder:"Hint"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ClearableInput,{placeholder:"Hint",defaultValue:"Borderless input",borderless:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_input__WEBPACK_IMPORTED_MODULE_4__.ZP,{label:"Disabled input",disabled:!0,defaultValue:"Default value"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_input__WEBPACK_IMPORTED_MODULE_4__.ZP,{label:"Invalid input",error:"Error description that wraps over lines because of being really long"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_input__WEBPACK_IMPORTED_MODULE_4__.ZP,{label:"Error without description",error:""}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_input__WEBPACK_IMPORTED_MODULE_4__.ZP,{label:"Short input",size:_input__WEBPACK_IMPORTED_MODULE_4__.$u.S}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_input__WEBPACK_IMPORTED_MODULE_4__.ZP,{label:"Long input",size:_input__WEBPACK_IMPORTED_MODULE_4__.$u.L}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_input__WEBPACK_IMPORTED_MODULE_4__.ZP,{label:"Autogrowing textarea",multiline:!0,defaultValue:"First line\nSecond line"}))},basic=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(Inputs,null);basic.storyName="basic",basic.parameters={storyStyles:"\n<style>\n  .inputs {\n    display: flex;\n    flex-flow: column wrap;\n    max-height: 100vh;\n    margin-top: 8px;\n    background: var(--ring-content-background-color);\n  }\n\n  .inputs > div {\n    margin: 0 16px 8px;\n  }\n\n  .dark.dark {\n    margin: 0 -16px;\n    padding: 8px 16px;\n  }\n</style>"};const heightS=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_global_controls_height__WEBPACK_IMPORTED_MODULE_5__.pS.Provider,{value:_global_controls_height__WEBPACK_IMPORTED_MODULE_5__.oW.S},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Inputs,null));function SelectAll(){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_input__WEBPACK_IMPORTED_MODULE_4__.ZP,{defaultValue:"Value",inputRef:ref,label:"Label"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.ZP,{style:{marginTop:4},"data-test-select":!0,onClick:function select(){null!=ref.current&&ref.current.select()}},"Select all"))}heightS.parameters=basic.parameters;const selectAll=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(SelectAll,null);selectAll.parameters={hermione:{actions:[{type:"click",selector:"[data-test-select]"},{type:"capture",selector:"#storybook-root"}]}},basic.__docgenInfo={description:"",methods:[],displayName:"basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/input/input.stories.tsx"]={name:"basic",docgenInfo:basic.__docgenInfo,path:"src/input/input.stories.tsx"}),heightS.__docgenInfo={description:"",methods:[],displayName:"heightS"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/input/input.stories.tsx"]={name:"heightS",docgenInfo:heightS.__docgenInfo,path:"src/input/input.stories.tsx"}),selectAll.__docgenInfo={description:"",methods:[],displayName:"selectAll"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/input/input.stories.tsx"]={name:"selectAll",docgenInfo:selectAll.__docgenInfo,path:"src/input/input.stories.tsx"})},"./src/global/composeRefs.ts":function(__unused_webpack_module,__webpack_exports__){"use strict";__webpack_exports__.Z=function(){for(var _len=arguments.length,refs=new Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return value=>refs.forEach((ref=>{"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}))}},"./src/global/prop-types.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{J:function(){return refObject}});var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);const refObject=value=>prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({current:value})},"./node_modules/util-deprecate/browser.js":function(module,__unused_webpack_exports,__webpack_require__){function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);