(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[1530],{"./src/heading/heading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,E:()=>Levels,H1:()=>H1,H2:()=>H2,H3:()=>H3,H4:()=>H4});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),util_deprecate__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/util-deprecate/browser.js"),util_deprecate__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(util_deprecate__WEBPACK_IMPORTED_MODULE_2__),_heading_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/heading/heading.css"),_heading_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_heading_css__WEBPACK_IMPORTED_MODULE_3__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}let Levels=function(Levels){return Levels[Levels.H1=1]="H1",Levels[Levels.H2=2]="H2",Levels[Levels.H3=3]="H3",Levels[Levels.H4=4]="H4",Levels}({});const fallbackHeading=util_deprecate__WEBPACK_IMPORTED_MODULE_2___default()((()=>"h3"),"Headings of level 5 and higher are replaced with h3"),HeadingMemo=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((function Heading({children,className,level=Levels.H1,...restProps}){const classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_heading_css__WEBPACK_IMPORTED_MODULE_3___default().heading,className),Tag=level<=Levels.H4?`h${level}`:fallbackHeading();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag,_extends({},restProps,{className:classes}),children)})),Heading=HeadingMemo;Heading.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,level:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf([Levels.H1,Levels.H2,Levels.H3,Levels.H4])},Heading.Levels=Levels;const __WEBPACK_DEFAULT_EXPORT__=Heading;function makeHeading(level,useCaps){const H=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((({className,caps,...restProps})=>{const classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(className,{[_heading_css__WEBPACK_IMPORTED_MODULE_3___default().caps]:useCaps&&caps});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Heading,_extends({},restProps,{level,className:classes}))}));return H.displayName=`H${level}`,H.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,caps:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool},H}const H1=makeHeading(Levels.H1,!0),H2=makeHeading(Levels.H2),H3=makeHeading(Levels.H3),H4=makeHeading(Levels.H4);HeadingMemo.__docgenInfo={description:"",methods:[],displayName:"HeadingMemo",props:{level:{required:!1,tsType:{name:"union",raw:"Levels | undefined",elements:[{name:"Levels"},{name:"undefined"}]},description:"",defaultValue:{value:"Levels.H1",computed:!0}}},composes:["HTMLAttributes"]}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/heading/heading.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,".contentWithHeadings_cdca h1,\n  .contentWithHeadings_cdca:is(h1),\n  .contentWithHeadings_cdca h2,\n  .contentWithHeadings_cdca:is(h2),\n  .contentWithHeadings_cdca h3,\n  .contentWithHeadings_cdca:is(h3),\n  .contentWithHeadings_cdca h4,\n  .contentWithHeadings_cdca:is(h4) {\n    margin-top: var(--ring-line-height);\n  }\n\n.contentWithHeadings_cdca h1:first-child, .contentWithHeadings_cdca:is(h1):first-child, .contentWithHeadings_cdca h2:first-child, .contentWithHeadings_cdca:is(h2):first-child, .contentWithHeadings_cdca h3:first-child, .contentWithHeadings_cdca:is(h3):first-child, .contentWithHeadings_cdca h4:first-child, .contentWithHeadings_cdca:is(h4):first-child {\n      margin-top: 0;\n    }\n\n.contentWithHeadings_cdca :is(h1, h2), .contentWithHeadings_cdca:is(h1, h2) {\n    margin-bottom: 8px;\n\n    color: var(--ring-heading-color);\n  }\n\n.contentWithHeadings_cdca h1,\n  .contentWithHeadings_cdca:is(h1) {\n    font-size: 24px;\n    line-height: 28px;\n  }\n\n.contentWithHeadings_cdca h2,\n  .contentWithHeadings_cdca:is(h2) {\n    font-size: 20px;\n    line-height: 24px;\n  }\n\n.contentWithHeadings_cdca h3,\n  .contentWithHeadings_cdca:is(h3) {\n    margin-bottom: 0;\n\n    font-size: 16px;\n    line-height: 22px;\n  }\n\n.contentWithHeadings_cdca h4,\n  .contentWithHeadings_cdca:is(h4) {\n    margin-bottom: 1px;\n\n    letter-spacing: 1px;\n    text-transform: uppercase;\n\n    font-size: 12px;\n    font-weight: normal;\n    line-height: 18px;\n  }\n\n.heading_cd1b {\n}\n\n.caps_ae59 {\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n","",{version:3,sources:["webpack://./src/heading/heading.css"],names:[],mappings:"AAGE;;;;;;;;IAQE,mCAAmC;EAKrC;;AAHE;MACE,aAAa;IACf;;AAIF;IAEE,kBAAkB;;IAElB,gCAAgC;EAClC;;AAEA;;IAEE,eAAe;IACf,iBAAiB;EACnB;;AAEA;;IAEE,eAAe;IACf,iBAAiB;EACnB;;AAEA;;IAEE,gBAAgB;;IAEhB,eAAe;IACf,iBAAiB;EACnB;;AAEA;;IAEE,kBAAkB;;IAElB,mBAAmB;IACnB,yBAAyB;;IAEzB,eAAe;IACf,mBAAmB;IACnB,iBAAiB;EACnB;;AAGF;AAGA;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B",sourcesContent:['@import "../global/variables.css";\n\n.contentWithHeadings {\n  & h1,\n  &:is(h1),\n  & h2,\n  &:is(h2),\n  & h3,\n  &:is(h3),\n  & h4,\n  &:is(h4) {\n    margin-top: var(--ring-line-height);\n\n    &:first-child {\n      margin-top: 0;\n    }\n  }\n\n\n  & :is(h1, h2),\n  &:is(h1, h2) {\n    margin-bottom: 8px;\n\n    color: var(--ring-heading-color);\n  }\n\n  & h1,\n  &:is(h1) {\n    font-size: 24px;\n    line-height: 28px;\n  }\n\n  & h2,\n  &:is(h2) {\n    font-size: 20px;\n    line-height: 24px;\n  }\n\n  & h3,\n  &:is(h3) {\n    margin-bottom: 0;\n\n    font-size: 16px;\n    line-height: 22px;\n  }\n\n  & h4,\n  &:is(h4) {\n    margin-bottom: 1px;\n\n    letter-spacing: 1px;\n    text-transform: uppercase;\n\n    font-size: 12px;\n    font-weight: normal;\n    line-height: 18px;\n  }\n}\n\n.heading {\n  composes: font from "../global/global.css";\n  composes: contentWithHeadings;\n}\n\n.caps {\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={contentWithHeadings:"contentWithHeadings_cdca",heading:`heading_cd1b ${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.font} contentWithHeadings_cdca`,caps:"caps_ae59"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/heading/heading.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/heading/heading.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/heading/heading.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_heading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/heading/heading.tsx");const lorem=react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),__WEBPACK_DEFAULT_EXPORT__={title:"Components/Heading",parameters:{notes:"A component for rendering h1-h5 tags."}},basic=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heading__WEBPACK_IMPORTED_MODULE_1__.A,{level:_heading__WEBPACK_IMPORTED_MODULE_1__.A.Levels.H1},"Heading 1"),lorem,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heading__WEBPACK_IMPORTED_MODULE_1__.H1,{caps:!0},"Heading 1 caps"),lorem,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heading__WEBPACK_IMPORTED_MODULE_1__.H2,null,"Heading 2"),lorem,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heading__WEBPACK_IMPORTED_MODULE_1__.H3,null,"Heading 3"),lorem,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heading__WEBPACK_IMPORTED_MODULE_1__.H4,null,"Heading 4"),lorem);basic.storyName="Heading",basic.parameters={...basic.parameters,docs:{...basic.parameters?.docs,source:{originalSource:"() => <div>\n    <Heading level={Heading.Levels.H1}>Heading 1</Heading>\n    {lorem}\n    <H1 caps>Heading 1 caps</H1>\n    {lorem}\n    <H2>Heading 2</H2>\n    {lorem}\n    <H3>Heading 3</H3>\n    {lorem}\n    <H4>Heading 4</H4>\n    {lorem}\n  </div>",...basic.parameters?.docs?.source}}}},"./node_modules/util-deprecate/browser.js":(module,__unused_webpack_exports,__webpack_require__)=>{function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);