(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[7965],{"./node_modules/@jetbrains/icons/chevron-down.js":function(module){module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g><polygon points="8 10.99 3.5 6.5 4.5 5.5 8 9.01 11.51 5.5 12.49 6.5 8 10.99"/></g></svg>'},"./node_modules/@jetbrains/icons/search.js":function(module){module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g><path d="M14.64,13.36,10.13,8.85A4.94,4.94,0,0,0,11,6a5,5,0,1,0-2.17,4.12l4.51,4.51ZM2.42,6A3.6,3.6,0,1,1,6,9.61,3.6,3.6,0,0,1,2.42,6Z"/></g></svg>'},"./.storybook/react-decorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom_client__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/client.js"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api");const reactDecorator=(StoryFn,context)=>{const node=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>document.createElement("div")),[context.kind,context.name]),root=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>(0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(node)),[node]);return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>()=>root.unmount()),[root]),root.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StoryFn,null))),node};__webpack_exports__.Z=()=>reactDecorator},"./src/global/theme.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:function(){return basic},withPopup:function(){return withPopup}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/react-decorator.tsx"),_text_text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/text/text.tsx"),_select_select__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/select/select.tsx"),_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/global/theme.tsx");__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\n\nimport reactDecorator from '../../.storybook/react-decorator';\n\nimport Text from '../text/text';\n\nimport Select from '../select/select';\n\nimport Theme, {ThemeProvider} from './theme';\n\nexport default {\n  title: 'Components/Theme Provider',\n  decorators: [reactDecorator()]\n};\n\nconst storyStyles = `\n<style>\n  .themed-wrapper {\n    border: solid 1px var(--ring-borders-color);\n    border-radius: var(--ring-border-radius);\n    background-color: var(--ring-content-background-color);\n    margin: var(--ring-unit);\n    padding: var(--ring-unit);\n  }\n</style>`;\n\nconst ThemedWrapper: React.FC<{children: React.ReactNode}> = ({children}) => (\n  <div className=\"themed-wrapper\">{children}</div>\n);\n\nexport const basic = () => {\n  const ThemeExample: React.FC = () => (\n    <div>\n      <div className=\"ring-ui-theme-dark\">\n        <ThemedWrapper>\n          <Text>This is dark (via global css class)</Text>\n        </ThemedWrapper>\n      </div>\n\n      <div>\n        <ThemedWrapper>\n          <Text>This is light (via absence of css class)</Text>\n        </ThemedWrapper>\n      </div>\n\n      <ThemeProvider theme={Theme.DARK}>\n        <ThemedWrapper>\n          <Text>This is dark</Text>\n        </ThemedWrapper>\n      </ThemeProvider>\n\n      <ThemeProvider theme={Theme.LIGHT}>\n        <ThemedWrapper>\n          <Text>This is light</Text>\n        </ThemedWrapper>\n      </ThemeProvider>\n\n      <ThemeProvider theme={Theme.LIGHT}>\n        <ThemedWrapper>\n          <Text>There will be Dark inside Light</Text>\n          <ThemeProvider theme={Theme.DARK}>\n            <ThemedWrapper>\n              <Text>This is dark</Text>\n            </ThemedWrapper>\n          </ThemeProvider>\n        </ThemedWrapper>\n      </ThemeProvider>\n\n      <ThemeProvider theme={Theme.DARK}>\n        <ThemedWrapper>\n          <Text>There will be Light inside Dark</Text>\n          <ThemeProvider theme={Theme.LIGHT}>\n            <ThemedWrapper>\n              <Text>This is light</Text>\n            </ThemedWrapper>\n          </ThemeProvider>\n        </ThemedWrapper>\n      </ThemeProvider>\n    </div>\n  );\n\n  return <ThemeExample/>;\n};\n\nbasic.storyName = 'Theme Provider';\nbasic.parameters = {storyStyles};\n\nconst selectTestData = [{\n  key: 'label-1', label: 'Hello'\n}, {\n  key: 'label-2', label: 'World'\n}];\n\nexport const withPopup = () => {\n  const ThemeExample: React.FC = () => (\n    <div>\n      <ThemeProvider theme={Theme.DARK} passToPopups>\n        <ThemedWrapper>\n          <Select data={selectTestData} label=\"Dark popup\"/>\n        </ThemedWrapper>\n      </ThemeProvider>\n\n      <ThemeProvider theme={Theme.DARK}>\n        <ThemedWrapper>\n          <Text>There will be Light inside Dark</Text>\n          <ThemeProvider theme={Theme.LIGHT}>\n            <ThemedWrapper>\n              <Select data={selectTestData} label=\"Light popup\"/>\n            </ThemedWrapper>\n          </ThemeProvider>\n        </ThemedWrapper>\n      </ThemeProvider>\n    </div>\n  );\n\n  return <ThemeExample/>;\n};\n\nwithPopup.storyName = 'Theme Provider and Popup';\nwithPopup.parameters = {\n  hermione: {skip: true},\n  storyStyles\n};\n",locationsMap:{basic:{startLoc:{col:21,line:31},endLoc:{col:1,line:83},startBody:{col:21,line:31},endBody:{col:1,line:83}},"with-popup":{startLoc:{col:25,line:94},endLoc:{col:1,line:117},startBody:{col:25,line:94},endBody:{col:1,line:117}}}}},title:"Components/Theme Provider",decorators:[(0,_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_1__.Z)()]};const storyStyles="\n<style>\n  .themed-wrapper {\n    border: solid 1px var(--ring-borders-color);\n    border-radius: var(--ring-border-radius);\n    background-color: var(--ring-content-background-color);\n    margin: var(--ring-unit);\n    padding: var(--ring-unit);\n  }\n</style>",ThemedWrapper=_ref=>{let{children:children}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"themed-wrapper"},children)},basic=()=>{const ThemeExample=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"ring-ui-theme-dark"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemedWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_text_text__WEBPACK_IMPORTED_MODULE_2__.Z,null,"This is dark (via global css class)"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemedWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_text_text__WEBPACK_IMPORTED_MODULE_2__.Z,null,"This is light (via absence of css class)"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme__WEBPACK_IMPORTED_MODULE_3__.f6,{theme:_theme__WEBPACK_IMPORTED_MODULE_3__.ZP.DARK},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemedWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_text_text__WEBPACK_IMPORTED_MODULE_2__.Z,null,"This is dark"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme__WEBPACK_IMPORTED_MODULE_3__.f6,{theme:_theme__WEBPACK_IMPORTED_MODULE_3__.ZP.LIGHT},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemedWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_text_text__WEBPACK_IMPORTED_MODULE_2__.Z,null,"This is light"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme__WEBPACK_IMPORTED_MODULE_3__.f6,{theme:_theme__WEBPACK_IMPORTED_MODULE_3__.ZP.LIGHT},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemedWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_text_text__WEBPACK_IMPORTED_MODULE_2__.Z,null,"There will be Dark inside Light"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme__WEBPACK_IMPORTED_MODULE_3__.f6,{theme:_theme__WEBPACK_IMPORTED_MODULE_3__.ZP.DARK},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemedWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_text_text__WEBPACK_IMPORTED_MODULE_2__.Z,null,"This is dark"))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme__WEBPACK_IMPORTED_MODULE_3__.f6,{theme:_theme__WEBPACK_IMPORTED_MODULE_3__.ZP.DARK},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemedWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_text_text__WEBPACK_IMPORTED_MODULE_2__.Z,null,"There will be Light inside Dark"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme__WEBPACK_IMPORTED_MODULE_3__.f6,{theme:_theme__WEBPACK_IMPORTED_MODULE_3__.ZP.LIGHT},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemedWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_text_text__WEBPACK_IMPORTED_MODULE_2__.Z,null,"This is light"))))));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeExample,null)};basic.storyName="Theme Provider",basic.parameters={storyStyles:storyStyles};const selectTestData=[{key:"label-1",label:"Hello"},{key:"label-2",label:"World"}],withPopup=()=>{const ThemeExample=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme__WEBPACK_IMPORTED_MODULE_3__.f6,{theme:_theme__WEBPACK_IMPORTED_MODULE_3__.ZP.DARK,passToPopups:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemedWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_select_select__WEBPACK_IMPORTED_MODULE_4__.default,{data:selectTestData,label:"Dark popup"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme__WEBPACK_IMPORTED_MODULE_3__.f6,{theme:_theme__WEBPACK_IMPORTED_MODULE_3__.ZP.DARK},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemedWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_text_text__WEBPACK_IMPORTED_MODULE_2__.Z,null,"There will be Light inside Dark"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme__WEBPACK_IMPORTED_MODULE_3__.f6,{theme:_theme__WEBPACK_IMPORTED_MODULE_3__.ZP.LIGHT},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemedWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_select_select__WEBPACK_IMPORTED_MODULE_4__.default,{data:selectTestData,label:"Light popup"}))))));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeExample,null)};withPopup.storyName="Theme Provider and Popup",withPopup.parameters={hermione:{skip:!0},storyStyles:storyStyles},basic.__docgenInfo={description:"",methods:[],displayName:"basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/global/theme.stories.tsx"]={name:"basic",docgenInfo:basic.__docgenInfo,path:"src/global/theme.stories.tsx"}),withPopup.__docgenInfo={description:"",methods:[],displayName:"withPopup"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/global/theme.stories.tsx"]={name:"withPopup",docgenInfo:withPopup.__docgenInfo,path:"src/global/theme.stories.tsx"})},"./src/loader-inline/loader-inline.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_global_data_tests__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/global/data-tests.ts"),_loader_inline_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/loader-inline/loader-inline.css"),_loader_inline_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_loader_inline_css__WEBPACK_IMPORTED_MODULE_2__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}class LoaderInline extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,"data-test":prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node};render(){const{className:className,"data-test":dataTest,children:children,...restProps}=this.props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_loader_inline_css__WEBPACK_IMPORTED_MODULE_2___default().loader,className),loader=react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({},restProps,{"data-test":(0,_global_data_tests__WEBPACK_IMPORTED_MODULE_4__.Z)("ring-loader-inline",dataTest),className:classes}));return children?react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,loader,react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:_loader_inline_css__WEBPACK_IMPORTED_MODULE_2___default().children},children)):loader}}LoaderInline.__docgenInfo={description:"@name Loader Inline",methods:[],displayName:"LoaderInline",props:{className:{type:{name:"string"},required:!1,description:""},"data-test":{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]}},children:{type:{name:"node"},required:!1,description:""}},composes:["HTMLAttributes"]},__webpack_exports__.Z=LoaderInline,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/loader-inline/loader-inline.tsx"]={name:"LoaderInline",docgenInfo:LoaderInline.__docgenInfo,path:"src/loader-inline/loader-inline.tsx"})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/loader-inline/loader-inline.css":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables_dark.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_4__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_3__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,":root {\n  /* stylelint-disable-next-line color-no-hex */\n  --ring-loader-inline-stops: #ff00eb, #bd3bff, #008eff, #58ba00, #f48700, #ff00eb;\n}\n\n."+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.dark+',\n.ring-ui-theme-dark {\n  /* stylelint-disable-next-line color-no-hex */\n  --ring-loader-inline-stops: #ff2eef, #d178ff, #289fff, #88d444, #ffe000, #ff2eef;\n}\n\n@keyframes spin_c5fc {\n  0% {\n    transform: rotate(0);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes pulse_d8f9 {\n  0% {\n    transform: scale(1);\n  }\n\n  100% {\n    transform: scale(1.41667);\n  }\n}\n\n.loader_f65a,\n.ring-loader-inline {\n  /* needed for better backward-compatibility */\n\n  position: relative;\n\n  display: inline-block;\n\n  overflow: hidden;\n\n  transform: rotate(0);\n  animation: spin_c5fc 1s linear infinite;\n  vertical-align: -3px;\n\n  border-radius: 8px;\n}\n\n.loader_f65a,\n  .ring-loader-inline,\n  .loader_f65a::after,\n  .ring-loader-inline::after {\n    transform-origin: 50% 50%;\n  }\n\n.loader_f65a::after, .ring-loader-inline::after {\n    display: block;\n\n    width: 16px;\n    height: 16px;\n\n    content: "";\n    animation: pulse_d8f9 0.85s cubic-bezier(0.68, 0, 0.74, 0.74) infinite alternate;\n\n    background-image: conic-gradient(#ff00eb, #bd3bff, #008eff, #58ba00, #f48700, #ff00eb);\n\n    background-image: conic-gradient(var(--ring-loader-inline-stops));\n    -webkit-mask-image: radial-gradient(8px, transparent 71.875%, var(--ring-content-background-color) 71.875%);\n            mask-image: radial-gradient(8px, transparent 71.875%, var(--ring-content-background-color) 71.875%);\n  }\n\n.children_d816 {\n  margin-left: 4px;\n}\n',"",{version:3,sources:["webpack://./src/loader-inline/loader-inline.css"],names:[],mappings:"AAKA;EACE,6CAA6C;EAC7C,gFAAgF;AAClF;;AAEA;;EAEE,6CAA6C;EAC7C,gFAAgF;AAClF;;AAEA;EACE;IACE,oBAAoB;EACtB;;EAEA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE;IACE,mBAAmB;EACrB;;EAEA;IACE,yBAA+B;EACjC;AACF;;AAEA;;EAEE,6CAA6C;;EAE7C,kBAAkB;;EAElB,qBAAqB;;EAErB,gBAAgB;;EAEhB,oBAAoB;EACpB,uCAAkC;EAClC,oBAAoB;;EAEpB,kBAAmB;AAmBrB;;AAjBE;;;;IAEE,yBAAyB;EAC3B;;AAEA;IACE,cAAc;;IAEd,WAAqB;IACrB,YAAsB;;IAEtB,WAAW;IACX,gFAA2E;;IAE3E,sFAAiE;;IAAjE,iEAAiE;IACjE,2GAAoG;YAApG,mGAAoG;EACtG;;AAGF;EACE,gBAA2B;AAC7B",sourcesContent:['@import "../global/variables.css";\n\n@value dark from "../global/variables_dark.css";\n@value unit from "../global/global.css";\n\n:root {\n  /* stylelint-disable-next-line color-no-hex */\n  --ring-loader-inline-stops: #ff00eb, #bd3bff, #008eff, #58ba00, #f48700, #ff00eb;\n}\n\n.dark,\n:global(.ring-ui-theme-dark) {\n  /* stylelint-disable-next-line color-no-hex */\n  --ring-loader-inline-stops: #ff2eef, #d178ff, #289fff, #88d444, #ffe000, #ff2eef;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n\n  100% {\n    transform: scale(calc(17 / 12));\n  }\n}\n\n.loader,\n:global(.ring-loader-inline) {\n  /* needed for better backward-compatibility */\n\n  position: relative;\n\n  display: inline-block;\n\n  overflow: hidden;\n\n  transform: rotate(0);\n  animation: spin 1s linear infinite;\n  vertical-align: -3px;\n\n  border-radius: unit;\n\n  &,\n  &::after {\n    transform-origin: 50% 50%;\n  }\n\n  &::after {\n    display: block;\n\n    width: calc(unit * 2);\n    height: calc(unit * 2);\n\n    content: "";\n    animation: pulse 0.85s cubic-bezier(0.68, 0, 0.74, 0.74) infinite alternate;\n\n    background-image: conic-gradient(var(--ring-loader-inline-stops));\n    mask-image: radial-gradient(unit, transparent 71.875%, var(--ring-content-background-color) 71.875%);\n  }\n}\n\n.children {\n  margin-left: calc(unit / 2);\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={dark:""+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.dark,unit:""+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_3__.default.locals.unit,loader:"loader_f65a",spin:"spin_c5fc",pulse:"pulse_d8f9",children:"children_d816"},__webpack_exports__.default=___CSS_LOADER_EXPORT___},"./src/loader-inline/loader-inline.css":function(module,__unused_webpack_exports,__webpack_require__){var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/loader-inline/loader-inline.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);