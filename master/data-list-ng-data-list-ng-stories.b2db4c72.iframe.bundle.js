"use strict";(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[6790],{"./.storybook/angular-decorator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,i:()=>APP_NAME});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api");const APP_NAME="ring-ui.story.app",angularDecorator=story=>{const node=document.createElement("div");node.innerHTML=story();const app=angular__WEBPACK_IMPORTED_MODULE_0___default().bootstrap(node,[APP_NAME],{strictDi:!0});return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>()=>{app.get("$rootScope").$destroy(),node.innerHTML=""})),node},__WEBPACK_DEFAULT_EXPORT__=()=>angularDecorator},"./src/data-list-ng/data-list-ng.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:()=>basic,default:()=>data_list_ng_stories});var angular=__webpack_require__("./node_modules/angular/index.js"),angular_default=__webpack_require__.n(angular),angular_decorator=__webpack_require__("./.storybook/angular-decorator.js"),data_list_selection=__webpack_require__("./src/data-list/selection.ts"),data_list_mock=__webpack_require__("./src/data-list/data-list.mock.tsx"),angular_component_factory=__webpack_require__("./src/global/angular-component-factory.js"),data_list=__webpack_require__("./src/data-list/data-list.tsx");const data_list_ng=(0,angular_component_factory.Z)(data_list.Z,"DataList").name;const data_list_ng_stories={title:"Legacy Angular/DataList Ng",decorators:[(0,angular_decorator.Z)()],parameters:{storySource:{source:"import angular from 'angular';\n\nimport angularDecorator, {APP_NAME} from '../../.storybook/angular-decorator';\n\nimport Selection from '../data-list/selection';\nimport data from '../data-list/data-list.mock';\n\nimport RingDataList from './data-list-ng';\n\nexport default {\n  title: 'Legacy Angular/DataList Ng',\n  decorators: [angularDecorator()],\n\n  parameters: {\n    notes: 'Provides an Angular wrapper for DataList.'\n  }\n};\n\nexport const basic = () => {\n  angular.module(APP_NAME, [RingDataList]).controller('testCtrl', function controller() {\n    function itemFormatter(item) {\n      return {\n        ...item,\n        collapsible: false\n      };\n    }\n\n    const selection = new Selection({\n      data,\n      isItemSelectable: item => item.selectable,\n      getChildren: item => item.items || []\n    });\n\n    this.data = data;\n    this.itemFormatter = itemFormatter;\n    this.selection = selection;\n    this.onSelect = newSelection => {\n      this.selection = newSelection;\n    };\n  });\n\n  return `\n      <div ng-controller=\"testCtrl as ctrl\">\n        <rg-data-list\n          data=\"ctrl.data\"\n          selection=\"ctrl.selection\"\n          on-select=\"ctrl.onSelect\"\n          item-formatter=\"ctrl.itemFormatter\"\n        ></rg-data-list>\n      </div>\n    `;\n};\n\nbasic.storyName = 'DataList Ng';\n",locationsMap:{basic:{startLoc:{col:21,line:19},endLoc:{col:1,line:52},startBody:{col:21,line:19},endBody:{col:1,line:52}}}},notes:"Provides an Angular wrapper for DataList."}},basic=()=>(angular_default().module(angular_decorator.i,[data_list_ng]).controller("testCtrl",(function controller(){const selection=new data_list_selection.Z({data:data_list_mock.Z,isItemSelectable:item=>item.selectable,getChildren:item=>item.items||[]});this.data=data_list_mock.Z,this.itemFormatter=function itemFormatter(item){return{...item,collapsible:!1}},this.selection=selection,this.onSelect=newSelection=>{this.selection=newSelection}})),'\n      <div ng-controller="testCtrl as ctrl">\n        <rg-data-list\n          data="ctrl.data"\n          selection="ctrl.selection"\n          on-select="ctrl.onSelect"\n          item-formatter="ctrl.itemFormatter"\n        ></rg-data-list>\n      </div>\n    ');basic.storyName="DataList Ng"},"./src/global/angular-component-factory.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>createAngularComponent,Z:()=>angular_component_factory});var angular=__webpack_require__("./node_modules/angular/index.js"),angular_default=__webpack_require__.n(angular),react=__webpack_require__("./node_modules/react/index.js"),react_render_adapter=__webpack_require__("./src/global/react-render-adapter.ts"),ring_angular_component=__webpack_require__("./src/global/ring-angular-component.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);class Renderer extends react.Component{static propTypes={className:prop_types_default().string,nodes:prop_types_default().oneOfType([prop_types_default().array,prop_types_default().object])};componentDidMount(){const{node}=this,{nodes}=this.props;node&&nodes&&nodes.length&&Array.from(this.props.nodes).forEach((nodeToRender=>node.appendChild(nodeToRender)))}node;nodeRef=node=>{this.node=node};render(){const{className}=this.props;return react.createElement("div",{className,ref:this.nodeRef})}}function createAngularComponent(Component){const propKeys=Object.keys(Component.propTypes),bindings={};propKeys.forEach((key=>{bindings[key]="<"}));class AngularComponent extends ring_angular_component.Z{static bindings=bindings;static transclude=!0;$postLink(){const{$transclude}=this.$inject;$transclude((clone=>{this.container=document.createElement("div");for(let i=0;i<clone.length;i++)this.container.appendChild(clone[i]);this.render()}))}$onChanges(){this.container&&this.render()}$onDestroy(){(0,react_render_adapter.uy)(this.$inject.$element[0])}render(){var _this=this;const{$scope,$element:{0:container}}=this.$inject,props={};propKeys.forEach((key=>{void 0!==this[key]&&("function"==typeof this[key]?props[key]=function(){const ret=_this[key](...arguments);return $scope.$applyAsync(),ret}:props[key]=this[key])}));const hasInnerContent=this.container.hasChildNodes();(0,react_render_adapter.sY)(react.createElement(Component,props,hasInnerContent?react.createElement(Renderer,{nodes:this.container.childNodes}):null),container)}}return AngularComponent.$inject=["$scope","$element","$transclude"],AngularComponent}Renderer.__docgenInfo={description:"",methods:[{name:"nodeRef",docblock:null,modifiers:[],params:[{name:"node",type:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}}],returns:null}],displayName:"Renderer",props:{className:{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}},nodes:{type:{name:"union",value:[{name:"array"},{name:"object"}]},required:!0,description:"",tsType:{name:"union",raw:"readonly Node[] | NodeList",elements:[{name:"unknown"},{name:"NodeList"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/global/react-dom-renderer.tsx"]={name:"Renderer",docgenInfo:Renderer.__docgenInfo,path:"src/global/react-dom-renderer.tsx"});const angular_component_factory=function angularComponentFactory(Component,name){const angularModuleName=`Ring.${name[0].toLowerCase()+name.slice(1)}`;return angular_default().module(angularModuleName,[]).component(function getAngularComponentName(name){return`rg${name}`}(name),createAngularComponent(Component))}},"./src/global/ring-angular-component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>RingAngularComponent});class RingAngularComponent{static get controller(){return this}$inject={};constructor(){for(var _this$constructor$$in,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];(null!==(_this$constructor$$in=this.constructor.$inject)&&void 0!==_this$constructor$$in?_this$constructor$$in:[]).forEach(((injectName,i)=>{this.$inject[injectName]=args[i]}))}}}}]);