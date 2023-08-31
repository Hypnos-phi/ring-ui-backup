(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[383],{"./node_modules/@jetbrains/icons/checkmark.js":function(module){module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g><polygon points="6.16 14.41 1.37 9.66 2.63 8.38 5.87 11.59 13.23 0.5 14.73 1.5 6.16 14.41"/></g></svg>'},"./node_modules/@jetbrains/icons/chevron-10px.js":function(module){module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><g><polygon points="5 7.99 1.5 4.5 2.5 3.5 5 6.01 7.5 3.5 8.49 4.5 5 7.99"/></g></svg>'},"./.storybook/react-decorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom_client__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/client.js"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api");const reactDecorator=(StoryFn,context)=>{const node=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>document.createElement("div")),[context.kind,context.name]),root=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>(0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(node)),[node]);return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>()=>root.unmount()),[root]),root.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StoryFn,null))),node};__webpack_exports__.Z=()=>reactDecorator},"./src/tags-list/tags-list.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:function(){return basic},disabled:function(){return disabled},withIcons:function(){return withIcons}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_jetbrains_icons_checkmark__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@jetbrains/icons/checkmark.js"),_jetbrains_icons_checkmark__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_jetbrains_icons_checkmark__WEBPACK_IMPORTED_MODULE_1__),_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.storybook/react-decorator.tsx"),_tags_list__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/tags-list/tags-list.tsx");__webpack_exports__.default={title:"Components/Tags List",decorators:[(0,_storybook_react_decorator__WEBPACK_IMPORTED_MODULE_2__.Z)()],parameters:{storySource:{source:"import React from 'react';\nimport checkmarkIcon from '@jetbrains/icons/checkmark';\n\nimport reactDecorator from '../../.storybook/react-decorator';\n\nimport TagsList from './tags-list';\n\nexport default {\n  title: 'Components/Tags List',\n  decorators: [reactDecorator()],\n\n  parameters: {\n    notes: 'Displays a list of tags.'\n  }\n};\n\nexport const basic = () => (\n  <TagsList\n    className=\"test-additional-class\"\n    tags={[{key: 'test1', label: 'test1'}, {key: 'test2', label: 'test2'}]}\n  />\n);\n\nbasic.storyName = 'basic';\n\nexport const withIcons = () => (\n  <TagsList\n    tags={[\n      {key: 'test1', label: 'test1', rgTagIcon: checkmarkIcon},\n      {key: 'test2', label: 'test2'}\n    ]}\n  />\n);\n\nwithIcons.storyName = 'with icons';\n\nexport const disabled = () => (\n  <TagsList disabled tags={[{key: 'test1', label: 'test1'}, {key: 'test2', label: 'test2'}]}/>\n);\n\ndisabled.storyName = 'disabled';\n",locationsMap:{basic:{startLoc:{col:21,line:17},endLoc:{col:1,line:22},startBody:{col:21,line:17},endBody:{col:1,line:22}},"with-icons":{startLoc:{col:25,line:26},endLoc:{col:1,line:33},startBody:{col:25,line:26},endBody:{col:1,line:33}},disabled:{startLoc:{col:24,line:37},endLoc:{col:1,line:39},startBody:{col:24,line:37},endBody:{col:1,line:39}}}},notes:"Displays a list of tags."}};const basic=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tags_list__WEBPACK_IMPORTED_MODULE_3__.Z,{className:"test-additional-class",tags:[{key:"test1",label:"test1"},{key:"test2",label:"test2"}]});basic.storyName="basic";const withIcons=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tags_list__WEBPACK_IMPORTED_MODULE_3__.Z,{tags:[{key:"test1",label:"test1",rgTagIcon:_jetbrains_icons_checkmark__WEBPACK_IMPORTED_MODULE_1___default()},{key:"test2",label:"test2"}]});withIcons.storyName="with icons";const disabled=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tags_list__WEBPACK_IMPORTED_MODULE_3__.Z,{disabled:!0,tags:[{key:"test1",label:"test1"},{key:"test2",label:"test2"}]});disabled.storyName="disabled",basic.__docgenInfo={description:"",methods:[],displayName:"basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tags-list/tags-list.stories.tsx"]={name:"basic",docgenInfo:basic.__docgenInfo,path:"src/tags-list/tags-list.stories.tsx"}),withIcons.__docgenInfo={description:"",methods:[],displayName:"withIcons"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tags-list/tags-list.stories.tsx"]={name:"withIcons",docgenInfo:withIcons.__docgenInfo,path:"src/tags-list/tags-list.stories.tsx"}),disabled.__docgenInfo={description:"",methods:[],displayName:"disabled"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tags-list/tags-list.stories.tsx"]={name:"disabled",docgenInfo:disabled.__docgenInfo,path:"src/tags-list/tags-list.stories.tsx"})},"./src/tags-list/tags-list.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return TagsList}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_tag_tag__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/tag/tag.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function noop(){}class TagsList extends react__WEBPACK_IMPORTED_MODULE_0__.Component{static propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,tags:prop_types__WEBPACK_IMPORTED_MODULE_2___default().array,customTagComponent:prop_types__WEBPACK_IMPORTED_MODULE_2___default().elementType,activeIndex:prop_types__WEBPACK_IMPORTED_MODULE_2___default().number,canNotBeEmpty:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,handleClick:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,handleRemove:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,tagClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string};static defaultProps={customTagComponent:null,canNotBeEmpty:!1,disabled:!1,handleClick:noop,handleRemove:noop};renderTag(tag,focusTag){const TagComponent=this.props.customTagComponent||_tag_tag__WEBPACK_IMPORTED_MODULE_3__.Z,readOnly=this.props.disabled||tag.readOnly||this.props.canNotBeEmpty&&1===this.props.tags.length,{tagClassName:tagClassName}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TagComponent,_extends({},tag,{readOnly:readOnly,disabled:this.props.disabled||tag.disabled,focused:focusTag,onClick:this.props.handleClick(tag),onRemove:this.props.handleRemove(tag),className:tagClassName}),tag.label)}render(){const{children:children,className:className,customTagComponent:customTagComponent,canNotBeEmpty:canNotBeEmpty,handleClick:handleClick,tagClassName:tagClassName,handleRemove:handleRemove,tags:tags,activeIndex:activeIndex,...props}=this.props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("ring-js-shortcuts",className),tagsList=(this.props.tags||[]).map(((tag,index)=>this.renderTag(tag,this.props.activeIndex===index)));return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({"data-test":"ring-tags-list",className:classes},props),tagsList,children)}}TagsList.__docgenInfo={description:"@name Tags List",methods:[{name:"renderTag",docblock:null,modifiers:[],params:[{name:"tag",type:{name:"T",alias:"T"}},{name:"focusTag",type:{name:"boolean"}}],returns:null}],displayName:"TagsList",props:{customTagComponent:{defaultValue:{value:"null",computed:!1},type:{name:"elementType"},required:!1,description:"",tsType:{name:"ComponentType",elements:[{name:"TagAttrs"}],raw:"ComponentType<TagAttrs>"}},canNotBeEmpty:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"",tsType:{name:"boolean"}},disabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"",tsType:{name:"boolean"}},handleClick:{defaultValue:{value:"function noop() {}",computed:!1},type:{name:"func"},required:!1,description:"",tsType:{name:"signature",type:"function",raw:"(tag: T) => (e: React.MouseEvent<HTMLElement>) => void",signature:{arguments:[{name:"tag",type:{name:"T"}}],return:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLElement>) => void",signature:{arguments:[{name:"e",type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLElement>",elements:[{name:"HTMLElement"}]}}],return:{name:"void"}}}}}},handleRemove:{defaultValue:{value:"function noop() {}",computed:!1},type:{name:"func"},required:!1,description:"",tsType:{name:"signature",type:"function",raw:"(tag: T) => (e: React.MouseEvent<HTMLElement>) => void",signature:{arguments:[{name:"tag",type:{name:"T"}}],return:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLElement>) => void",signature:{arguments:[{name:"e",type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLElement>",elements:[{name:"HTMLElement"}]}}],return:{name:"void"}}}}}},children:{type:{name:"node"},required:!1,description:""},tags:{type:{name:"array"},required:!0,description:"",tsType:{name:"unknown"}},activeIndex:{type:{name:"number"},required:!1,description:"",tsType:{name:"union",raw:"number | null | undefined",elements:[{name:"number"},{name:"null"},{name:"undefined"}]}},className:{type:{name:"string"},required:!1,description:""},tagClassName:{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]}}},composes:["HTMLAttributes"]},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tags-list/tags-list.tsx"]={name:"TagsList",docgenInfo:TagsList.__docgenInfo,path:"src/tags-list/tags-list.tsx"})},"./node_modules/util-deprecate/browser.js":function(module,__unused_webpack_exports,__webpack_require__){function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);