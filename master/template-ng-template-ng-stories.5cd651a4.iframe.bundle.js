"use strict";(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[8793],{"./.storybook/angular-decorator.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{i:function(){return APP_NAME}});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api");const APP_NAME="ring-ui.story.app",angularDecorator=story=>{const node=document.createElement("div");node.innerHTML=story();const app=angular__WEBPACK_IMPORTED_MODULE_0___default().bootstrap(node,[APP_NAME],{strictDi:!0});return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>()=>{app.get("$rootScope").$destroy(),node.innerHTML=""})),node};__webpack_exports__.Z=()=>angularDecorator},"./src/template-ng/template-ng.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:function(){return basic},withController:function(){return withController}});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_storybook_angular_decorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/angular-decorator.js"),_template_ng__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/template-ng/template-ng.js");__webpack_exports__.default={title:"Legacy Angular/Template Ng",decorators:[(0,_storybook_angular_decorator__WEBPACK_IMPORTED_MODULE_1__.Z)()],parameters:{storySource:{source:"import angular from 'angular';\n\nimport angularDecorator, {APP_NAME} from '../../.storybook/angular-decorator';\n\nimport TemplateNG from './template-ng';\n\nexport default {\n  title: 'Legacy Angular/Template Ng',\n  decorators: [angularDecorator()],\n\n  parameters: {\n    hermione: {skip: true}\n  }\n};\n\nexport const basic = () => {\n  angular.module(APP_NAME, [TemplateNG]);\n\n  return '<rg-template template=\"\\'<label>Input<br/><input/></label>\\'\"></rg-template>';\n};\n\nbasic.storyName = 'basic';\n\nexport const withController = () => {\n  angular.module(APP_NAME, [TemplateNG]).controller('ExampleCtrl', function ctrl() {\n    this.template = '<button>button</button>';\n  });\n\n  return '<rg-template template=\"ctrl.template\" ng-controller=\"ExampleCtrl as ctrl\"></rg-template>';\n};\n\nwithController.storyName = 'with controller';\n",locationsMap:{basic:{startLoc:{col:21,line:16},endLoc:{col:1,line:20},startBody:{col:21,line:16},endBody:{col:1,line:20}},"with-controller":{startLoc:{col:30,line:24},endLoc:{col:1,line:30},startBody:{col:30,line:24},endBody:{col:1,line:30}}}},hermione:{skip:!0}}};const basic=()=>(angular__WEBPACK_IMPORTED_MODULE_0___default().module(_storybook_angular_decorator__WEBPACK_IMPORTED_MODULE_1__.i,[_template_ng__WEBPACK_IMPORTED_MODULE_2__.Z]),"<rg-template template=\"'<label>Input<br/><input/></label>'\"></rg-template>");basic.storyName="basic";const withController=()=>(angular__WEBPACK_IMPORTED_MODULE_0___default().module(_storybook_angular_decorator__WEBPACK_IMPORTED_MODULE_1__.i,[_template_ng__WEBPACK_IMPORTED_MODULE_2__.Z]).controller("ExampleCtrl",(function ctrl(){this.template="<button>button</button>"})),'<rg-template template="ctrl.template" ng-controller="ExampleCtrl as ctrl"></rg-template>');withController.storyName="with controller"},"./src/global/ring-angular-component.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return RingAngularComponent}});class RingAngularComponent{static get controller(){return this}$inject={};constructor(){for(var _this$constructor$$in,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];(null!==(_this$constructor$$in=this.constructor.$inject)&&void 0!==_this$constructor$$in?_this$constructor$$in:[]).forEach(((injectName,i)=>{this.$inject[injectName]=args[i]}))}}},"./src/template-ng/template-ng.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_global_ring_angular_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/global/ring-angular-component.js");const angularModule=angular__WEBPACK_IMPORTED_MODULE_0___default().module("Ring.template",[]);class RgTemplateController extends _global_ring_angular_component__WEBPACK_IMPORTED_MODULE_1__.Z{currentScope=null;constructor(){super(...arguments);const{$scope:$scope,$attrs:$attrs}=this.$inject;$scope.$watch($attrs.rgTemplate||$attrs.template,this.render)}render=template=>{const{$scope:$scope,$element:$element,$compile:$compile}=this.$inject;this.cleanup(),this.currentScope=$scope.$new(),this.currentScope.$evalAsync((()=>{$element.html(template),this.addInnerClass(),$compile($element.contents())(this.currentScope)}))};addInnerClass=()=>{const{rgTemplateClass:rgTemplateClass}=this.$inject.$attrs;rgTemplateClass&&this.$inject.$element.contents().addClass(rgTemplateClass)};cleanup(){this.currentScope&&(this.currentScope.$destroy(),this.currentScope=null)}}RgTemplateController.$inject=[],RgTemplateController.$inject=["$scope","$element","$attrs","$compile"],angularModule.directive("rgTemplate",(function rgTemplateDirective(){return{controller:RgTemplateController}})),__webpack_exports__.Z=angularModule.name}}]);