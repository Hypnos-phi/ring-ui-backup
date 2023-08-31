(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[1493],{"./node_modules/@jetbrains/icons/warning.js":function(module){module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g><path d="M15.83,13.23l-7-11.76a1,1,0,0,0-1.66,0L.16,13.3c-.38.64-.07,1.7.68,1.7H15.2C15.94,15,16.21,13.87,15.83,13.23Zm-7,.37H7.14V11.89h1.7Zm0-3.57H7.16L7,4H9Z"/></g></svg>'},"./.storybook/angular-decorator.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{i:function(){return APP_NAME}});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api");const APP_NAME="ring-ui.story.app",angularDecorator=story=>{const node=document.createElement("div");node.innerHTML=story();const app=angular__WEBPACK_IMPORTED_MODULE_0___default().bootstrap(node,[APP_NAME],{strictDi:!0});return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>()=>{app.get("$rootScope").$destroy(),node.innerHTML=""})),node};__webpack_exports__.Z=()=>angularDecorator},"./src/tooltip-ng/tooltip-ng.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:function(){return basic},default:function(){return tooltip_ng_stories}});var angular=__webpack_require__("./node_modules/angular/index.js"),angular_default=__webpack_require__.n(angular),warning=__webpack_require__("./node_modules/@jetbrains/icons/warning.js"),warning_default=__webpack_require__.n(warning),angular_decorator=__webpack_require__("./.storybook/angular-decorator.js"),icon_ng=__webpack_require__("./src/icon-ng/icon-ng.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react_render_adapter=__webpack_require__("./src/global/react-render-adapter.ts"),popup=__webpack_require__("./src/popup/popup.tsx");__webpack_require__("./src/tooltip-ng/tooltip-ng.css");const tooltip_ng_name=angular_default().module("Ring.tooltip",[]);tooltip_ng_name.directive("rgTooltip",["RgTooltipPopup",function rgTooltipDirective(RgTooltipPopup){return{restrict:"A",link:function link(scope,iElement,iAttrs){const element=iElement[0],popupWrapper=new RgTooltipPopup(element,(()=>{try{return scope.$eval(iAttrs.rgTooltip)}catch(err){return iAttrs.rgTooltip}}));element.addEventListener("mouseover",(()=>{popupWrapper.displayTooltip(iAttrs.rgTooltipClass),element.classList.add("ring-tooltip-ng_open")})),element.addEventListener("mouseout",(()=>{popupWrapper.hideTooltip(),element.classList.remove("ring-tooltip-ng_open")}))}}}]),tooltip_ng_name.factory("RgTooltipPopup",(function RgTooltipPopupDirective(){return function(anchorElement,textGetter){this.wrapperElement=document.createElement("span"),this.defaultProps={anchorElement:anchorElement,maxHeight:400,attached:!1,dontCloseOnAnchorClick:!0,trapFocus:!1},this.renderPopup=props=>(0,react_render_adapter.sY)((0,react.createElement)(popup.default,{...this.defaultProps,...props,ref:instance=>{null!=instance&&(this.popup=instance)}},this.text),this.wrapperElement),this.displayTooltip=customClass=>{const text=textGetter();if(!text)return;this.text=text;const className=classnames_default()({"ring-tooltip-ng":!0},customClass);this.renderPopup({hidden:!1,className:className})},this.hideTooltip=()=>{this.renderPopup({hidden:!0})}}}));var tooltip_ng_tooltip_ng=tooltip_ng_name.name,tooltip_ng_stories={title:"Legacy Angular/Tooltip Ng",decorators:[(0,angular_decorator.Z)()],parameters:{storySource:{source:"import angular from 'angular';\n\nimport warningIcon from '@jetbrains/icons/warning';\n\nimport angularDecorator, {APP_NAME} from '../../.storybook/angular-decorator';\n\nimport IconNG from '../icon-ng/icon-ng';\n\nimport TooltipNG from './tooltip-ng';\n\nexport default {\n  title: 'Legacy Angular/Tooltip Ng',\n  decorators: [angularDecorator()],\n\n  parameters: {\n    notes: 'Provides an Angular wrapper for Tooltip.'\n  }\n};\n\nexport const basic = () => {\n  angular.module(APP_NAME, [IconNG, TooltipNG]).controller('testController', function ctrl() {\n    this.warningIcon = warningIcon;\n    this.testMessageWithQuote = \"It's a message with a single quotation mark\";\n  });\n\n  return `\n      <div ng-controller=\"testController as ctrl\" style=\"margin: 16px;\">\n        Some text that needs an explanation\n        <rg-icon glyph=\"{{ctrl.warningIcon}}\" rg-tooltip=\"'Test message'\"></rg-icon>\n        <rg-icon glyph=\"{{ctrl.warningIcon}}\" rg-tooltip=\"{{ctrl.testMessageWithQuote}}\"></rg-icon>\n        <rg-icon glyph=\"{{ctrl.warningIcon}}\" rg-tooltip=\"{{ctrl.someUndefinedValue}}\"></rg-icon>\n      </div>\n    `;\n};\n\nbasic.storyName = 'Tooltip Ng';\n",locationsMap:{basic:{startLoc:{col:21,line:20},endLoc:{col:1,line:34},startBody:{col:21,line:20},endBody:{col:1,line:34}}}},notes:"Provides an Angular wrapper for Tooltip."}};const basic=()=>(angular_default().module(angular_decorator.i,[icon_ng.Z,tooltip_ng_tooltip_ng]).controller("testController",(function ctrl(){this.warningIcon=warning_default(),this.testMessageWithQuote="It's a message with a single quotation mark"})),'\n      <div ng-controller="testController as ctrl" style="margin: 16px;">\n        Some text that needs an explanation\n        <rg-icon glyph="{{ctrl.warningIcon}}" rg-tooltip="\'Test message\'"></rg-icon>\n        <rg-icon glyph="{{ctrl.warningIcon}}" rg-tooltip="{{ctrl.testMessageWithQuote}}"></rg-icon>\n        <rg-icon glyph="{{ctrl.warningIcon}}" rg-tooltip="{{ctrl.someUndefinedValue}}"></rg-icon>\n      </div>\n    ');basic.storyName="Tooltip Ng"},"./src/global/ring-angular-component.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return RingAngularComponent}});class RingAngularComponent{static get controller(){return this}$inject={};constructor(){for(var _this$constructor$$in,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];(null!==(_this$constructor$$in=this.constructor.$inject)&&void 0!==_this$constructor$$in?_this$constructor$$in:[]).forEach(((injectName,i)=>{this.$inject[injectName]=args[i]}))}}},"./src/icon-ng/icon-ng.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_icon_icon_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/icon/icon__constants.ts"),_template_ng_template_ng__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/template-ng/template-ng.js"),_icon_icon_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/icon/icon.css"),_icon_icon_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_icon_icon_css__WEBPACK_IMPORTED_MODULE_1__);const angularModule=angular__WEBPACK_IMPORTED_MODULE_0___default().module("Ring.icon",[_template_ng_template_ng__WEBPACK_IMPORTED_MODULE_2__.Z]);angularModule.directive("rgIcon",(function rgIconDirective(){return{restrict:"E",scope:{glyph:"@",loading:"=?",color:"@?",size:"@?",height:"@?",width:"@?"},template:`<span class="${_icon_icon_css__WEBPACK_IMPORTED_MODULE_1___default().icon}" rg-template="normalizedGlyph" rg-template-class="${_icon_icon_css__WEBPACK_IMPORTED_MODULE_1___default().glyph}"></span>`,controller:["$scope",$scope=>{$scope.$watch("glyph",(value=>{value&&($scope.normalizedGlyph=function decodeBase64IfNeeded(glyph){return 0===glyph.indexOf("data:image/svg+xml;base64,")?window.atob(glyph.replace("data:image/svg+xml;base64,","")):glyph}(value))}))}],link:function link(scope,iElement,iAttrs){iAttrs.$addClass("ring-icon"),scope.$watch("loading",(value=>{value?iAttrs.$addClass(_icon_icon_css__WEBPACK_IMPORTED_MODULE_1___default().loading):iAttrs.$removeClass(_icon_icon_css__WEBPACK_IMPORTED_MODULE_1___default().loading)})),scope.$watch((()=>scope.color&&_icon_icon_constants__WEBPACK_IMPORTED_MODULE_3__.I[scope.color]&&_icon_icon_css__WEBPACK_IMPORTED_MODULE_1___default()[_icon_icon_constants__WEBPACK_IMPORTED_MODULE_3__.I[scope.color]]),((colorClass,prevColorClass)=>{colorClass&&(iAttrs.$addClass(colorClass),prevColorClass&&prevColorClass!==colorClass&&iAttrs.$removeClass(prevColorClass))})),scope.$watchGroup(["size","width","height"],(_ref=>{let[size,width,height]=_ref;const svgNode=iElement[0].querySelector("svg");if(svgNode)if(!size||width||height)width&&svgNode.setAttribute("style",`width: ${width}px;`),height&&svgNode.setAttribute("style",`height: ${height}px;`);else{const sizeString=`${size}px`,style=`width: ${sizeString}; height: ${sizeString};`;svgNode.setAttribute("style",style)}}))}}})),__webpack_exports__.Z=angularModule.name},"./src/icon/icon__constants.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{$:function(){return Size},I:function(){return Color}});let Color=function(Color){return Color.BLUE="blue",Color.DEFAULT="",Color.GRAY="gray",Color.GREEN="green",Color.MAGENTA="magenta",Color.RED="red",Color.WHITE="white",Color}({}),Size=function(Size){return Size[Size.Size12=12]="Size12",Size[Size.Size14=14]="Size14",Size[Size.Size16=16]="Size16",Size[Size.Size18=18]="Size18",Size[Size.Size20=20]="Size20",Size[Size.Size24=24]="Size24",Size[Size.Size32=32]="Size32",Size[Size.Size40=40]="Size40",Size[Size.Size48=48]="Size48",Size[Size.Size64=64]="Size64",Size[Size.Size96=96]="Size96",Size[Size.Size128=128]="Size128",Size}({})},"./src/template-ng/template-ng.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_global_ring_angular_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/global/ring-angular-component.js");const angularModule=angular__WEBPACK_IMPORTED_MODULE_0___default().module("Ring.template",[]);class RgTemplateController extends _global_ring_angular_component__WEBPACK_IMPORTED_MODULE_1__.Z{currentScope=null;constructor(){super(...arguments);const{$scope:$scope,$attrs:$attrs}=this.$inject;$scope.$watch($attrs.rgTemplate||$attrs.template,this.render)}render=template=>{const{$scope:$scope,$element:$element,$compile:$compile}=this.$inject;this.cleanup(),this.currentScope=$scope.$new(),this.currentScope.$evalAsync((()=>{$element.html(template),this.addInnerClass(),$compile($element.contents())(this.currentScope)}))};addInnerClass=()=>{const{rgTemplateClass:rgTemplateClass}=this.$inject.$attrs;rgTemplateClass&&this.$inject.$element.contents().addClass(rgTemplateClass)};cleanup(){this.currentScope&&(this.currentScope.$destroy(),this.currentScope=null)}}RgTemplateController.$inject=[],RgTemplateController.$inject=["$scope","$element","$attrs","$compile"],angularModule.directive("rgTemplate",(function rgTemplateDirective(){return{controller:RgTemplateController}})),__webpack_exports__.Z=angularModule.name},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/icon/icon.css":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,'.icon_d5a3 {\n  display: inline-block;\n\n  fill: currentColor;\n}\n\n.glyph_ffd8 {\n  display: inline-flex;\n\n  margin-right: -1px;\n  margin-left: -1px;\n\n  pointer-events: none;\n}\n\n.glyph_ffd8[width="10"] {\n    vertical-align: -1px;\n  }\n\n.glyph_ffd8[width="14"] {\n    margin-right: -2px;\n    margin-left: 0;\n\n    vertical-align: -3px;\n  }\n\n.glyph_ffd8[width="16"] {\n    vertical-align: -3px;\n  }\n\n.glyph_ffd8[width="20"] {\n    vertical-align: -2px;\n  }\n\n.glyph_ffd8.compatibilityMode_a8ae {\n    width: 16px;\n    height: 16px;\n    margin-right: 0;\n    margin-left: 0;\n  }\n\n/* HACK: This media query hack makes styles applied for WebKit browsers only */\n/* stylelint-disable-next-line media-feature-name-no-vendor-prefix */\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  .glyph_ffd8 {\n    width: auto; /* Safari size bug workaround, see https://youtrack.jetbrains.com/issue/RG-1983 */\n  }\n}\n\n.gray_cf30 {\n  color: var(--ring-icon-secondary-color);\n}\n\n.hover_ab0b {\n  color: var(--ring-icon-hover-color);\n}\n\n.green_ea54 {\n  color: var(--ring-icon-success-color);\n}\n\n.magenta_bbdf {\n  color: var(--ring-link-hover-color);\n}\n\n.red_e064 {\n  color: var(--ring-icon-error-color);\n}\n\n.blue_d783 {\n  color: var(--ring-main-color);\n}\n\n.white_d5e6 {\n  color: var(--ring-white-text-color);\n}\n\n.loading_f519 {\n  animation-name: icon-loading_cf30;\n  animation-duration: 1200ms;\n  animation-iteration-count: infinite;\n}\n\n@keyframes icon-loading_cf30 {\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.9);\n\n    opacity: 0.5;\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n',"",{version:3,sources:["webpack://./src/icon/icon.css"],names:[],mappings:"AAIA;EACE,qBAAqB;;EAErB,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;;EAEpB,kBAAkB;EAClB,iBAAiB;;EAEjB,oBAAoB;AA2BtB;;AAzBE;IACE,oBAAoB;EACtB;;AAEA;IACE,kBAAkB;IAClB,cAAc;;IAEd,oBAAoB;EACtB;;AAEA;IACE,oBAAoB;EACtB;;AAEA;IACE,oBAAoB;EACtB;;AAEA;IACE,WAAqB;IACrB,YAAsB;IACtB,eAAe;IACf,cAAc;EAChB;;AAGF,8EAA8E;AAC9E,oEAAoE;AACpE;EACE;IACE,WAAW,EAAE,iFAAiF;EAChG;AACF;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,iCAA4B;EAC5B,0BAA0B;EAC1B,mCAAmC;AACrC;;AAEA;EACE;IACE,mBAAmB;EACrB;;EAEA;IACE,qBAAqB;;IAErB,YAAY;EACd;;EAEA;IACE,mBAAmB;EACrB;AACF",sourcesContent:['@import "../global/variables.css";\n\n@value unit from "../global/global.css";\n\n.icon {\n  display: inline-block;\n\n  fill: currentColor;\n}\n\n.glyph {\n  display: inline-flex;\n\n  margin-right: -1px;\n  margin-left: -1px;\n\n  pointer-events: none;\n\n  &[width="10"] {\n    vertical-align: -1px;\n  }\n\n  &[width="14"] {\n    margin-right: -2px;\n    margin-left: 0;\n\n    vertical-align: -3px;\n  }\n\n  &[width="16"] {\n    vertical-align: -3px;\n  }\n\n  &[width="20"] {\n    vertical-align: -2px;\n  }\n\n  &.compatibilityMode {\n    width: calc(unit * 2);\n    height: calc(unit * 2);\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n\n/* HACK: This media query hack makes styles applied for WebKit browsers only */\n/* stylelint-disable-next-line media-feature-name-no-vendor-prefix */\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  .glyph {\n    width: auto; /* Safari size bug workaround, see https://youtrack.jetbrains.com/issue/RG-1983 */\n  }\n}\n\n.gray {\n  color: var(--ring-icon-secondary-color);\n}\n\n.hover {\n  color: var(--ring-icon-hover-color);\n}\n\n.green {\n  color: var(--ring-icon-success-color);\n}\n\n.magenta {\n  color: var(--ring-link-hover-color);\n}\n\n.red {\n  color: var(--ring-icon-error-color);\n}\n\n.blue {\n  color: var(--ring-main-color);\n}\n\n.white {\n  color: var(--ring-white-text-color);\n}\n\n.loading {\n  animation-name: icon-loading;\n  animation-duration: 1200ms;\n  animation-iteration-count: infinite;\n}\n\n@keyframes icon-loading {\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.9);\n\n    opacity: 0.5;\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={unit:""+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.unit,icon:"icon_d5a3",glyph:"glyph_ffd8",compatibilityMode:"compatibilityMode_a8ae",gray:"gray_cf30",hover:"hover_ab0b",green:"green_ea54",magenta:"magenta_bbdf",red:"red_e064",blue:"blue_d783",white:"white_d5e6",loading:"loading_f519","icon-loading":"icon-loading_cf30"},__webpack_exports__.default=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/tooltip-ng/tooltip-ng.css":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,".ring-tooltip-ng {\n  max-width: 400px;\n  padding: 8px;\n\n  text-align: left;\n}\n\n.ring-tooltip-ng__hint-icon {\n  position: relative;\n  top: -2px;\n\n  margin-left: 8px;\n\n  cursor: pointer;\n\n  color: var(--ring-icon-color);\n}\n\n.ring-tooltip-ng_open .ring-tooltip-ng__hint-icon {\n  color: var(--ring-link-hover-color);\n}\n","",{version:3,sources:["webpack://./src/tooltip-ng/tooltip-ng.css"],names:[],mappings:"AAIA;EACE,gBAA0B;EAC1B,YAAa;;EAEb,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,SAAS;;EAET,gBAAiB;;EAEjB,eAAe;;EAEf,6BAA6B;AAC/B;;AAEA;EACE,mCAAmC;AACrC",sourcesContent:['@import "../global/variables.css";\n\n@value unit from "../global/global.css";\n\n:global(.ring-tooltip-ng) {\n  max-width: calc(unit * 50);\n  padding: unit;\n\n  text-align: left;\n}\n\n:global(.ring-tooltip-ng__hint-icon) {\n  position: relative;\n  top: -2px;\n\n  margin-left: unit;\n\n  cursor: pointer;\n\n  color: var(--ring-icon-color);\n}\n\n:global(.ring-tooltip-ng_open .ring-tooltip-ng__hint-icon) {\n  color: var(--ring-link-hover-color);\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={unit:""+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.unit},__webpack_exports__.default=___CSS_LOADER_EXPORT___},"./src/icon/icon.css":function(module,__unused_webpack_exports,__webpack_require__){var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/icon/icon.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/tooltip-ng/tooltip-ng.css":function(module,__unused_webpack_exports,__webpack_require__){var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/tooltip-ng/tooltip-ng.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);