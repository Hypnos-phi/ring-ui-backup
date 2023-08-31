(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[7764],{"./.storybook/angular-decorator.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{i:function(){return APP_NAME}});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api");const APP_NAME="ring-ui.story.app",angularDecorator=story=>{const node=document.createElement("div");node.innerHTML=story();const app=angular__WEBPACK_IMPORTED_MODULE_0___default().bootstrap(node,[APP_NAME],{strictDi:!0});return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>()=>{app.get("$rootScope").$destroy(),node.innerHTML=""})),node};__webpack_exports__.Z=()=>angularDecorator},"./src/heading-ng/heading-ng.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:function(){return basic},default:function(){return heading_ng_stories}});var angular=__webpack_require__("./node_modules/angular/index.js"),angular_default=__webpack_require__.n(angular),angular_decorator=__webpack_require__("./.storybook/angular-decorator.js"),heading=__webpack_require__("./src/heading/heading.tsx"),heading_ng=(0,__webpack_require__("./src/global/angular-component-factory.js").Z)(heading.Z,"Heading").name,heading_ng_stories={title:"Legacy Angular/Heading Ng",decorators:[(0,angular_decorator.Z)()],parameters:{storySource:{source:"import angular from 'angular';\n\nimport angularDecorator, {APP_NAME} from '../../.storybook/angular-decorator';\nimport Heading from '../heading/heading';\n\nimport HeadingNG from './heading-ng';\n\nexport default {\n  title: 'Legacy Angular/Heading Ng',\n  decorators: [angularDecorator()],\n\n  parameters: {\n    notes: 'Provides an Angular wrapper for Heading.',\n    hermione: {skip: true}\n  }\n};\n\nexport const basic = () => {\n  angular.module(APP_NAME, [HeadingNG]);\n\n  return `\n      <rg-heading level=\"${Heading.Levels.H1}\">Heading 1</rg-heading>\n      <rg-heading level=\"${Heading.Levels.H2}\">Heading 2</rg-heading>\n      <rg-heading level=\"${Heading.Levels.H3}\">Heading 3</rg-heading>\n      <rg-heading level=\"${Heading.Levels.H4}\">Heading 4</rg-heading>\n    `;\n};\n\nbasic.storyName = 'Heading Ng';\n",locationsMap:{basic:{startLoc:{col:21,line:18},endLoc:{col:1,line:27},startBody:{col:21,line:18},endBody:{col:1,line:27}}}},notes:"Provides an Angular wrapper for Heading.",hermione:{skip:!0}}};const basic=()=>(angular_default().module(angular_decorator.i,[heading_ng]),`\n      <rg-heading level="${heading.Z.Levels.H1}">Heading 1</rg-heading>\n      <rg-heading level="${heading.Z.Levels.H2}">Heading 2</rg-heading>\n      <rg-heading level="${heading.Z.Levels.H3}">Heading 3</rg-heading>\n      <rg-heading level="${heading.Z.Levels.H4}">Heading 4</rg-heading>\n    `);basic.storyName="Heading Ng"},"./src/global/angular-component-factory.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{f:function(){return createAngularComponent},Z:function(){return angular_component_factory}});var angular=__webpack_require__("./node_modules/angular/index.js"),angular_default=__webpack_require__.n(angular),react=__webpack_require__("./node_modules/react/index.js"),react_render_adapter=__webpack_require__("./src/global/react-render-adapter.ts"),ring_angular_component=__webpack_require__("./src/global/ring-angular-component.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);class Renderer extends react.Component{static propTypes={className:prop_types_default().string,nodes:prop_types_default().oneOfType([prop_types_default().array,prop_types_default().object])};componentDidMount(){const{node:node}=this,{nodes:nodes}=this.props;node&&nodes&&nodes.length&&Array.from(this.props.nodes).forEach((nodeToRender=>node.appendChild(nodeToRender)))}node;nodeRef=node=>{this.node=node};render(){const{className:className}=this.props;return react.createElement("div",{className:className,ref:this.nodeRef})}}function createAngularComponent(Component){const propKeys=Object.keys(Component.propTypes),bindings={};propKeys.forEach((key=>{bindings[key]="<"}));class AngularComponent extends ring_angular_component.Z{static bindings=bindings;static transclude=!0;$postLink(){const{$transclude:$transclude}=this.$inject;$transclude((clone=>{this.container=document.createElement("div");for(let i=0;i<clone.length;i++)this.container.appendChild(clone[i]);this.render()}))}$onChanges(){this.container&&this.render()}$onDestroy(){(0,react_render_adapter.uy)(this.$inject.$element[0])}render(){var _this=this;const{$scope:$scope,$element:{0:container}}=this.$inject,props={};propKeys.forEach((key=>{void 0!==this[key]&&("function"==typeof this[key]?props[key]=function(){const ret=_this[key](...arguments);return $scope.$applyAsync(),ret}:props[key]=this[key])}));const hasInnerContent=this.container.hasChildNodes();(0,react_render_adapter.sY)(react.createElement(Component,props,hasInnerContent?react.createElement(Renderer,{nodes:this.container.childNodes}):null),container)}}return AngularComponent.$inject=["$scope","$element","$transclude"],AngularComponent}Renderer.__docgenInfo={description:"",methods:[{name:"nodeRef",docblock:null,modifiers:[],params:[{name:"node",type:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}}],returns:null}],displayName:"Renderer",props:{className:{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}},nodes:{type:{name:"union",value:[{name:"array"},{name:"object"}]},required:!0,description:"",tsType:{name:"union",raw:"readonly Node[] | NodeList",elements:[{name:"unknown"},{name:"NodeList"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/global/react-dom-renderer.tsx"]={name:"Renderer",docgenInfo:Renderer.__docgenInfo,path:"src/global/react-dom-renderer.tsx"});var angular_component_factory=function angularComponentFactory(Component,name){const angularModuleName=`Ring.${name[0].toLowerCase()+name.slice(1)}`;return angular_default().module(angularModuleName,[]).component(function getAngularComponentName(name){return`rg${name}`}(name),createAngularComponent(Component))}},"./src/global/ring-angular-component.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return RingAngularComponent}});class RingAngularComponent{static get controller(){return this}$inject={};constructor(){for(var _this$constructor$$in,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];(null!==(_this$constructor$$in=this.constructor.$inject)&&void 0!==_this$constructor$$in?_this$constructor$$in:[]).forEach(((injectName,i)=>{this.$inject[injectName]=args[i]}))}}},"./src/heading/heading.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{H1:function(){return H1},H2:function(){return H2},H3:function(){return H3},H4:function(){return H4},O:function(){return Levels}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),util_deprecate__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/util-deprecate/browser.js"),util_deprecate__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(util_deprecate__WEBPACK_IMPORTED_MODULE_2__),_heading_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/heading/heading.css"),_heading_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_heading_css__WEBPACK_IMPORTED_MODULE_3__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}let Levels=function(Levels){return Levels[Levels.H1=1]="H1",Levels[Levels.H2=2]="H2",Levels[Levels.H3=3]="H3",Levels[Levels.H4=4]="H4",Levels}({});const fallbackHeading=util_deprecate__WEBPACK_IMPORTED_MODULE_2___default()((()=>"h3"),"Headings of level 5 and higher are replaced with h3"),Heading=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((function Heading(_ref){let{children:children,className:className,level:level=Levels.H1,...restProps}=_ref;const classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_heading_css__WEBPACK_IMPORTED_MODULE_3___default().heading,className),Tag=level<=Levels.H4?`h${level}`:fallbackHeading();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag,_extends({},restProps,{className:classes}),children)}));function makeHeading(level,useCaps){const H=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((_ref2=>{let{className:className,caps:caps,...restProps}=_ref2;const classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(className,{[_heading_css__WEBPACK_IMPORTED_MODULE_3___default().caps]:useCaps&&caps});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Heading,_extends({},restProps,{level:level,className:classes}))}));return H.displayName=`H${level}`,H.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,caps:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool},H}Heading.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,level:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf([Levels.H1,Levels.H2,Levels.H3,Levels.H4])},Heading.Levels=Levels,__webpack_exports__.Z=Heading;const H1=makeHeading(Levels.H1,!0),H2=makeHeading(Levels.H2),H3=makeHeading(Levels.H3),H4=makeHeading(Levels.H4)},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/heading/heading.css":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,".heading_cd1b {\n\n  margin-top: var(--ring-line-height);\n}\n\n.heading_cd1b:first-child {\n    margin-top: 0;\n  }\n\n.heading_cd1b:is(h1, h2) {\n    margin-bottom: 8px;\n\n    color: var(--ring-heading-color);\n  }\n\n.heading_cd1b:is(h1) {\n    font-size: 24px;\n    line-height: 28px;\n  }\n\n.heading_cd1b:is(h2) {\n    font-size: 20px;\n    line-height: 24px;\n  }\n\n.heading_cd1b:is(h3) {\n    margin-bottom: 0;\n\n    font-size: 16px;\n    line-height: 22px;\n  }\n\n.heading_cd1b:is(h4) {\n    margin-bottom: 1px;\n\n    letter-spacing: 1px;\n    text-transform: uppercase;\n\n    font-size: 12px;\n    font-weight: normal;\n    line-height: 18px;\n  }\n\n.caps_ae59 {\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n","",{version:3,sources:["webpack://./src/heading/heading.css"],names:[],mappings:"AAEA;;EAGE,mCAAmC;AAuCrC;;AArCE;IACE,aAAa;EACf;;AAEA;IACE,kBAAkB;;IAElB,gCAAgC;EAClC;;AAEA;IACE,eAAe;IACf,iBAAiB;EACnB;;AAEA;IACE,eAAe;IACf,iBAAiB;EACnB;;AAEA;IACE,gBAAgB;;IAEhB,eAAe;IACf,iBAAiB;EACnB;;AAEA;IACE,kBAAkB;;IAElB,mBAAmB;IACnB,yBAAyB;;IAEzB,eAAe;IACf,mBAAmB;IACnB,iBAAiB;EACnB;;AAGF;EACE,mBAAmB;EACnB,yBAAyB;AAC3B",sourcesContent:['@import "../global/variables.css";\n\n.heading {\n  composes: font from "../global/global.css";\n\n  margin-top: var(--ring-line-height);\n\n  &:first-child {\n    margin-top: 0;\n  }\n\n  &:is(h1, h2) {\n    margin-bottom: 8px;\n\n    color: var(--ring-heading-color);\n  }\n\n  &:is(h1) {\n    font-size: 24px;\n    line-height: 28px;\n  }\n\n  &:is(h2) {\n    font-size: 20px;\n    line-height: 24px;\n  }\n\n  &:is(h3) {\n    margin-bottom: 0;\n\n    font-size: 16px;\n    line-height: 22px;\n  }\n\n  &:is(h4) {\n    margin-bottom: 1px;\n\n    letter-spacing: 1px;\n    text-transform: uppercase;\n\n    font-size: 12px;\n    font-weight: normal;\n    line-height: 18px;\n  }\n}\n\n.caps {\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={heading:"heading_cd1b "+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.font,caps:"caps_ae59"},__webpack_exports__.default=___CSS_LOADER_EXPORT___},"./src/heading/heading.css":function(module,__unused_webpack_exports,__webpack_require__){var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/heading/heading.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./node_modules/util-deprecate/browser.js":function(module,__unused_webpack_exports,__webpack_require__){function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);