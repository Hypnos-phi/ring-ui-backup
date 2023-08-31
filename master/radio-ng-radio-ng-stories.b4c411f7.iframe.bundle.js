(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[4873],{"./.storybook/angular-decorator.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{i:function(){return APP_NAME}});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api");const APP_NAME="ring-ui.story.app",angularDecorator=story=>{const node=document.createElement("div");node.innerHTML=story();const app=angular__WEBPACK_IMPORTED_MODULE_0___default().bootstrap(node,[APP_NAME],{strictDi:!0});return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>()=>{app.get("$rootScope").$destroy(),node.innerHTML=""})),node};__webpack_exports__.Z=()=>angularDecorator},"./src/radio-ng/radio-ng.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:function(){return basic},default:function(){return radio_ng_stories}});var angular=__webpack_require__("./node_modules/angular/index.js"),angular_default=__webpack_require__.n(angular),angular_decorator=__webpack_require__("./.storybook/angular-decorator.js"),radio_radio=__webpack_require__("./src/radio/radio.css"),radio_default=__webpack_require__.n(radio_radio),proxy_attrs=__webpack_require__("./src/proxy-attrs/proxy-attrs.js"),get_uid=__webpack_require__("./src/global/get-uid.ts");const angularModule=angular_default().module("Ring.radio",[]);angularModule.directive("rgRadio",(function rgCheckboxDirective(){return{restrict:"E",transclude:!0,replace:!0,template:(0,proxy_attrs.Z)(`\n      <label class="${radio_default().radio}" data-test="ring-radio">\n        <input\n          type="radio"\n          class=${radio_default().input}\n\n          data-proxy-ng-disabled\n          data-proxy-ng-model\n          data-proxy-ng-change\n          data-proxy-name\n          data-proxy-value\n          data-proxy-ng-value\n        />\n        <span class="${radio_default().circle}"></span><span\n         class="${radio_default().label}" ng-transclude></span>\n      </label>\n\n`),link:function link(scope,iElement){const element=iElement[0],input=element.querySelector('input[type="radio"]');element.id?function applyPassedID(){const{id:id}=element;element.setAttribute("for",id),input.setAttribute("id",id),element.removeAttribute("id")}():function generateID(){const id=(0,get_uid.Z)("ring-radio-item-");element.setAttribute("for",id),input.setAttribute("id",id)}()}}}));var radio_ng=angularModule.name,radio_ng_stories={title:"Legacy Angular/Radio Ng",decorators:[(0,angular_decorator.Z)()],parameters:{storySource:{source:'import angular from \'angular\';\n\nimport angularDecorator, {APP_NAME} from \'../../.storybook/angular-decorator\';\n\nimport RadioNG from \'./radio-ng\';\n\nexport default {\n  title: \'Legacy Angular/Radio Ng\',\n  decorators: [angularDecorator()],\n\n  parameters: {\n    notes: \'Provides a Radio component.\'\n  }\n};\n\nexport const basic = () => {\n  angular.module(APP_NAME, [RadioNG]).controller(\'ExampleCtrl\', function ctrl() {\n    this.selected = \'two\';\n  });\n\n  return `\n      <div ng-controller="ExampleCtrl as ctrl">\n        <rg-radio ng-model="ctrl.selected" value="one" name="first" id="one-option">One</rg-radio>\n        <rg-radio ng-model="ctrl.selected" value="two" name="second">Two</rg-radio>\n\n        <div>Selected value is "{{ctrl.selected}}"</div>\n      </div>\n    `;\n};\n\nbasic.storyName = \'Radio Ng\';\n',locationsMap:{basic:{startLoc:{col:21,line:16},endLoc:{col:1,line:29},startBody:{col:21,line:16},endBody:{col:1,line:29}}}},notes:"Provides a Radio component."}};const basic=()=>(angular_default().module(angular_decorator.i,[radio_ng]).controller("ExampleCtrl",(function ctrl(){this.selected="two"})),'\n      <div ng-controller="ExampleCtrl as ctrl">\n        <rg-radio ng-model="ctrl.selected" value="one" name="first" id="one-option">One</rg-radio>\n        <rg-radio ng-model="ctrl.selected" value="two" name="second">Two</rg-radio>\n\n        <div>Selected value is "{{ctrl.selected}}"</div>\n      </div>\n    ');basic.storyName="Radio Ng"},"./src/proxy-attrs/proxy-attrs.js":function(__unused_webpack_module,__webpack_exports__){"use strict";__webpack_exports__.Z=function proxyAttrs(template,attrsWhitelist){return function copyAttrs(iElement,iAttrs){const attrsList=attrsWhitelist||Object.keys(iAttrs.$attr);let resultTemplate=template;return attrsList.forEach((attrName=>{if(void 0!==iAttrs[attrName]){const attrLower=iAttrs.$attr[attrName],attrValue=iAttrs[attrName],attrFind=`data-proxy-${attrLower}`.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),attrReplace=`${attrLower}="${attrValue}"`;resultTemplate=resultTemplate.replace(RegExp(`${attrFind}(="")*`,"g"),attrReplace)}})),resultTemplate}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/radio/radio.css":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,'.radio_efb7 {\n  position: relative;\n\n  display: flex;\n  flex-direction: row;\n\n  padding: 2px 0;\n\n  text-align: left;\n\n  color: var(--ring-text-color);\n  outline: none;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.radio_efb7:hover .circle_b52d {\n    transition: none;\n\n    border-color: var(--ring-border-hover-color);\n  }}\n\n.circle_b52d {\n  position: relative;\n  top: 2px;\n\n  flex-shrink: 0;\n\n  box-sizing: border-box;\n  width: 16px;\n  height: 16px;\n\n  -webkit-user-select: none;\n\n          user-select: none;\n  transition: border-color var(--ring-ease), box-shadow var(--ring-ease);\n  pointer-events: none;\n\n  border: 1px solid var(--ring-borders-color);\n  border-radius: 8px;\n  background-color: var(--ring-content-background-color);\n}\n\n.circle_b52d::after {\n    position: absolute;\n    top: 3px;\n    left: 3px;\n\n    width: 8px;\n    height: 8px;\n\n    content: "";\n\n    transition: opacity var(--ring-fast-ease), transform var(--ring-fast-ease);\n\n    transform: scale(0);\n\n    opacity: 0;\n\n    border-radius: 4px;\n    background-color: var(--ring-main-color);\n  }\n\n.input_af32 {\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n  margin: 0;\n\n  cursor: pointer;\n\n  opacity: 0;\n}\n\n.input_af32[disabled] + .circle_b52d {\n    border-color: var(--ring-border-disabled-color);\n    background-color: var(--ring-disabled-background-color);\n  }\n\n.input_af32:checked + .circle_b52d {\n    border-color: var(--ring-main-color);\n\n    /* stylelint-disable-next-line selector-max-specificity */\n  }\n\n.input_af32:checked + .circle_b52d::after {\n      transition: none;\n\n      transform: scale(1);\n\n      opacity: 1;\n    }\n\n.input_af32:focus + .circle_b52d,\n  .input_af32.focus_d633 + .circle_b52d {\n    border-color: var(--ring-border-hover-color);\n    box-shadow: 0 0 0 1px var(--ring-border-hover-color);\n  }\n\n.input_af32[disabled] {\n    pointer-events: none;\n  }\n\n/* stylelint-disable-next-line selector-max-specificity */\n\n.input_af32[disabled]:checked + .circle_b52d {\n    border-color: var(--ring-border-selected-disabled-color);\n\n    /* stylelint-disable-next-line selector-max-specificity */\n  }\n\n.input_af32[disabled]:checked + .circle_b52d::after {\n      background-color: var(--ring-icon-disabled-color);\n    }\n\n.input_af32[disabled] ~ .label_a4fc {\n    color: var(--ring-disabled-color);\n  }\n\n.label_a4fc {\n  margin-left: 8px;\n\n  line-height: var(--ring-line-height);\n}\n',"",{version:3,sources:["webpack://./src/radio/radio.css","<no source>"],names:[],mappings:"AAKA;EACE,kBAAkB;;EAElB,aAAa;EACb,mBAAmB;;EAEnB,cAAc;;EAEd,gBAAgB;;EAEhB,6BAA6B;EAC7B,aAAa;AAOf;;ACvBA,wGAAA;IAAA,iBAAA;;IAAA,6CAAA;GAAA,CAAA;;ADyBA;EACE,kBAAkB;EAClB,QAAQ;;EAER,cAAc;;EAEd,sBAAsB;EACtB,WAAiB;EACjB,YAAkB;;EAElB,yBAAiB;;UAAjB,iBAAiB;EACjB,sEAAsE;EACtE,oBAAoB;;EAEpB,2CAA2C;EAC3C,kBAAmB;EACnB,sDAAsD;AAqBxD;;AAnBE;IACE,kBAAkB;IAClB,QAAQ;IACR,SAAS;;IAET,UAAW;IACX,WAAY;;IAEZ,WAAW;;IAEX,0EAA0E;;IAE1E,mBAAmB;;IAEnB,UAAU;;IAEV,kBAA6B;IAC7B,wCAAwC;EAC1C;;AAGF;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;;EAEP,WAAW;EACX,YAAY;EACZ,SAAS;;EAET,eAAe;;EAEf,UAAU;AA2CZ;;AAzCE;IACE,+CAA+C;IAC/C,uDAAuD;EACzD;;AAEA;IACE,oCAAoC;;IAEpC,yDAAyD;EAQ3D;;AAPE;MACE,gBAAgB;;MAEhB,mBAAmB;;MAEnB,UAAU;IACZ;;AAGF;;IAEE,4CAA4C;IAC5C,oDAAoD;EACtD;;AAEA;IACE,oBAAoB;EACtB;;AAEA,yDAAyD;;AACzD;IACE,wDAAwD;;IAExD,yDAAyD;EAI3D;;AAHE;MACE,iDAAiD;IACnD;;AAGF;IACE,iCAAiC;EACnC;;AAGF;EACE,gBAAiB;;EAEjB,oCAAoC;AACtC",sourcesContent:['@import "../global/variables.css";\n\n@value unit from "../global/global.css";\n@value radio-size: calc(2 * unit);\n\n.radio {\n  position: relative;\n\n  display: flex;\n  flex-direction: row;\n\n  padding: 2px 0;\n\n  text-align: left;\n\n  color: var(--ring-text-color);\n  outline: none;\n\n  &:hover .circle {\n    transition: none;\n\n    border-color: var(--ring-border-hover-color);\n  }\n}\n\n.circle {\n  position: relative;\n  top: 2px;\n\n  flex-shrink: 0;\n\n  box-sizing: border-box;\n  width: radio-size;\n  height: radio-size;\n\n  user-select: none;\n  transition: border-color var(--ring-ease), box-shadow var(--ring-ease);\n  pointer-events: none;\n\n  border: 1px solid var(--ring-borders-color);\n  border-radius: unit;\n  background-color: var(--ring-content-background-color);\n\n  &::after {\n    position: absolute;\n    top: 3px;\n    left: 3px;\n\n    width: unit;\n    height: unit;\n\n    content: "";\n\n    transition: opacity var(--ring-fast-ease), transform var(--ring-fast-ease);\n\n    transform: scale(0);\n\n    opacity: 0;\n\n    border-radius: calc(unit / 2);\n    background-color: var(--ring-main-color);\n  }\n}\n\n.input {\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n  margin: 0;\n\n  cursor: pointer;\n\n  opacity: 0;\n\n  &[disabled] + .circle {\n    border-color: var(--ring-border-disabled-color);\n    background-color: var(--ring-disabled-background-color);\n  }\n\n  &:checked + .circle {\n    border-color: var(--ring-main-color);\n\n    /* stylelint-disable-next-line selector-max-specificity */\n    &::after {\n      transition: none;\n\n      transform: scale(1);\n\n      opacity: 1;\n    }\n  }\n\n  &:focus + .circle,\n  &.focus + .circle {\n    border-color: var(--ring-border-hover-color);\n    box-shadow: 0 0 0 1px var(--ring-border-hover-color);\n  }\n\n  &[disabled] {\n    pointer-events: none;\n  }\n\n  /* stylelint-disable-next-line selector-max-specificity */\n  &[disabled]:checked + .circle {\n    border-color: var(--ring-border-selected-disabled-color);\n\n    /* stylelint-disable-next-line selector-max-specificity */\n    &::after {\n      background-color: var(--ring-icon-disabled-color);\n    }\n  }\n\n  &[disabled] ~ .label {\n    color: var(--ring-disabled-color);\n  }\n}\n\n.label {\n  margin-left: unit;\n\n  line-height: var(--ring-line-height);\n}\n',null],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={unit:""+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.unit,"radio-size":"16px",radio:"radio_efb7",circle:"circle_b52d",input:"input_af32",focus:"focus_d633",label:"label_a4fc"},__webpack_exports__.default=___CSS_LOADER_EXPORT___},"./src/radio/radio.css":function(module,__unused_webpack_exports,__webpack_require__){var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/radio/radio.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);