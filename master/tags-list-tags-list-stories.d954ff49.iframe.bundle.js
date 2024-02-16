(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[6924],{"./node_modules/@jetbrains/icons/checkmark.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14.853 3.149c.248.24.254.636.014.884l-8.541 8.816a.625.625 0 0 1-.863.033L1.177 9.085a.625.625 0 0 1 .83-.936l3.837 3.401 8.125-8.387a.625.625 0 0 1 .884-.014Z" clip-rule="evenodd"/></svg>'},"./node_modules/@jetbrains/icons/chevron-10px.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><g><polygon points="5 7.99 1.5 4.5 2.5 3.5 5 6.01 7.5 3.5 8.49 4.5 5 7.99"/></g></svg>'},"./node_modules/@jetbrains/icons/close-12px.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 12 12"><path fill-rule="evenodd" d="M9.918 2.065a.6.6 0 0 1 .002.849L6.849 5.998 9.924 9.07l-.424.425-.424.424-3.074-3.072-3.07 3.083a.6.6 0 1 1-.85-.847L5.153 6 2.08 2.928a.6.6 0 1 1 .849-.849L6 5.15l3.07-3.082a.6.6 0 0 1 .848-.002ZM9.5 9.495l-.424.425a.6.6 0 1 0 .848-.849l-.424.425Z" clip-rule="evenodd"/></svg>'},"./src/tags-list/tags-list.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__,disabled:()=>disabled,withIcons:()=>withIcons});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_jetbrains_icons_checkmark__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@jetbrains/icons/checkmark.js"),_jetbrains_icons_checkmark__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_jetbrains_icons_checkmark__WEBPACK_IMPORTED_MODULE_1__),_tags_list__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/tags-list/tags-list.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Tags List",parameters:{storySource:{source:"import React from 'react';\nimport checkmarkIcon from '@jetbrains/icons/checkmark';\n\n\nimport TagsList from './tags-list';\n\nexport default {\n  title: 'Components/Tags List',\n\n  parameters: {\n    notes: 'Displays a list of tags.'\n  }\n};\n\nexport const basic = () => (\n  <TagsList\n    className=\"test-additional-class\"\n    tags={[{key: 'test1', label: 'test1'}, {key: 'test2', label: 'test2'}]}\n  />\n);\n\nbasic.storyName = 'basic';\n\nexport const withIcons = () => (\n  <TagsList\n    tags={[\n      {key: 'test1', label: 'test1', rgTagIcon: checkmarkIcon},\n      {key: 'test2', label: 'test2'}\n    ]}\n  />\n);\n\nwithIcons.storyName = 'with icons';\n\nexport const disabled = () => (\n  <TagsList disabled tags={[{key: 'test1', label: 'test1'}, {key: 'test2', label: 'test2'}]}/>\n);\n\ndisabled.storyName = 'disabled';\n",locationsMap:{basic:{startLoc:{col:21,line:15},endLoc:{col:1,line:20},startBody:{col:21,line:15},endBody:{col:1,line:20}},"with-icons":{startLoc:{col:25,line:24},endLoc:{col:1,line:31},startBody:{col:25,line:24},endBody:{col:1,line:31}},disabled:{startLoc:{col:24,line:35},endLoc:{col:1,line:37},startBody:{col:24,line:35},endBody:{col:1,line:37}}}},notes:"Displays a list of tags."}},basic=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tags_list__WEBPACK_IMPORTED_MODULE_2__.c,{className:"test-additional-class",tags:[{key:"test1",label:"test1"},{key:"test2",label:"test2"}]});basic.storyName="basic";const withIcons=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tags_list__WEBPACK_IMPORTED_MODULE_2__.c,{tags:[{key:"test1",label:"test1",rgTagIcon:_jetbrains_icons_checkmark__WEBPACK_IMPORTED_MODULE_1___default()},{key:"test2",label:"test2"}]});withIcons.storyName="with icons";const disabled=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tags_list__WEBPACK_IMPORTED_MODULE_2__.c,{disabled:!0,tags:[{key:"test1",label:"test1"},{key:"test2",label:"test2"}]});disabled.storyName="disabled"},"./src/tag/tag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>Tag});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_jetbrains_icons_close_12px__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@jetbrains/icons/close-12px.js"),_jetbrains_icons_close_12px__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_jetbrains_icons_close_12px__WEBPACK_IMPORTED_MODULE_2__),_icon_icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/icon/icon.tsx"),_button_button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/button/button.tsx"),_global_controls_height__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/global/controls-height.tsx"),_tag_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/tag/tag.css"),_tag_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_tag_css__WEBPACK_IMPORTED_MODULE_3__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}class Tag extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={onRemove:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,onClick:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,rgTagIcon:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType]),icon:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,avatar:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,rgTagTitle:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,readOnly:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,disabled:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,focused:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,angled:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,backgroundColor:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,textColor:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,render:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func};static defaultProps={onRemove:()=>{},onClick:()=>{},readOnly:!1,disabled:!1,focused:!1,render:props=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",_extends({type:"button"},props))};state={focused:!1};componentDidUpdate(prevProps){this.props.focused!==prevProps.focused&&this.setState({focused:this.props.focused}),this.state.focused&&this.tagNode?.focus(),this.setDocumentClickListener(this.state.focused)}componentWillUnmount(){this.setDocumentClickListener(!1),this.setState({focused:!1})}onDocumentClick=event=>{this.tagNode&&this.setState({focused:this.tagNode===event.target})};tagNode;tagRef=el=>{this.tagNode=el};setDocumentClickListener(setListener){setListener?document.addEventListener("click",this.onDocumentClick):document.removeEventListener("click",this.onDocumentClick)}renderCustomIcon(){return this.props.rgTagIcon?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_5__.cp,{className:_tag_css__WEBPACK_IMPORTED_MODULE_3___default().icon,title:this.props.rgTagTitle,glyph:this.props.rgTagIcon}):null}_renderImageElement(avatarSrc){const classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()({[_tag_css__WEBPACK_IMPORTED_MODULE_3___default().customIcon]:this.props.icon,[_tag_css__WEBPACK_IMPORTED_MODULE_3___default().avatarIcon]:avatarSrc});return react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{alt:avatarSrc?"Avatar":"Icon",className:classes,src:avatarSrc||this.props.icon})}renderImage(){return this.props.icon&&!this.props.avatar?this._renderImageElement():null}renderAvatar(){return this.props.avatar?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:_tag_css__WEBPACK_IMPORTED_MODULE_3___default().avatarContainer},this._renderImageElement(this.props.avatar)):null}renderRemoveIcon(){return this.props.readOnly?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_6__.cp,{title:"Remove",icon:_jetbrains_icons_close_12px__WEBPACK_IMPORTED_MODULE_2___default(),"data-test":"ring-tag-remove",className:_tag_css__WEBPACK_IMPORTED_MODULE_3___default().remove,iconClassName:_tag_css__WEBPACK_IMPORTED_MODULE_3___default().removeIcon,onClick:this.props.onRemove,style:{"--ring-icon-secondary-color":this.props.textColor},height:_global_controls_height__WEBPACK_IMPORTED_MODULE_7__.as.M})}render(){const classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("ring-js-shortcuts",_tag_css__WEBPACK_IMPORTED_MODULE_3___default().tag,{[_tag_css__WEBPACK_IMPORTED_MODULE_3___default().focused]:this.state.focused,[_tag_css__WEBPACK_IMPORTED_MODULE_3___default().disabled]:this.props.disabled,[_tag_css__WEBPACK_IMPORTED_MODULE_3___default().tagAngled]:this.props.angled,[_tag_css__WEBPACK_IMPORTED_MODULE_3___default().withRemove]:!this.props.readOnly},this.props.className),{backgroundColor,textColor,render}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:_tag_css__WEBPACK_IMPORTED_MODULE_3___default().container},render({"data-test":"ring-tag",className:classes,ref:this.tagRef,onClick:this.props.onClick,style:{backgroundColor,color:textColor},disabled:this.props.disabled,children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,this.renderAvatar(),this.renderCustomIcon(),this.renderImage(),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:_tag_css__WEBPACK_IMPORTED_MODULE_3___default().content},this.props.children))}),this.renderRemoveIcon())}}},"./src/tags-list/tags-list.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>TagsList});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_tag_tag__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/tag/tag.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function noop(){}class TagsList extends react__WEBPACK_IMPORTED_MODULE_0__.Component{static propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,tags:prop_types__WEBPACK_IMPORTED_MODULE_2___default().array,customTagComponent:prop_types__WEBPACK_IMPORTED_MODULE_2___default().elementType,activeIndex:prop_types__WEBPACK_IMPORTED_MODULE_2___default().number,canNotBeEmpty:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,handleClick:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,handleRemove:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,tagClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string};static defaultProps={customTagComponent:null,canNotBeEmpty:!1,disabled:!1,handleClick:noop,handleRemove:noop};renderTag(tag,focusTag){const TagComponent=this.props.customTagComponent||_tag_tag__WEBPACK_IMPORTED_MODULE_3__.c,readOnly=this.props.disabled||tag.readOnly||this.props.canNotBeEmpty&&1===this.props.tags.length,{tagClassName}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TagComponent,_extends({},tag,{readOnly,disabled:this.props.disabled||tag.disabled,focused:focusTag,onClick:this.props.handleClick(tag),onRemove:this.props.handleRemove(tag),className:tagClassName}),tag.label)}render(){const{children,className,customTagComponent,canNotBeEmpty,handleClick,tagClassName,handleRemove,tags,activeIndex,...props}=this.props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("ring-js-shortcuts",className),tagsList=(this.props.tags||[]).map(((tag,index)=>this.renderTag(tag,this.props.activeIndex===index)));return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({"data-test":"ring-tags-list",className:classes},props),tagsList,children)}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/tag/tag.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,'@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.tag_ae7d:hover,\n.tagAngled_b4d0:hover::before {\n  transition: none;\n\n  background-color: var(--ring-tag-hover-background-color);\n}}\n\n.tag_ae7d {\n\n  position: relative;\n  z-index: 1;\n\n  display: inline-flex;\n\n  box-sizing: border-box;\n  max-width: 100%;\n  height: 20px;\n\n  padding: 0 var(--ring-unit);\n\n  cursor: pointer;\n\n  vertical-align: top;\n\n  color: var(--ring-text-color);\n\n  border: none;\n  border-radius: var(--ring-border-radius);\n\n  font-size: 12px;\n  line-height: var(--ring-line-height);\n}\n\n.tag_ae7d,\n.tagAngled_b4d0::before {\n  transition: background-color var(--ring-ease);\n\n  background-color: var(--ring-tag-background-color);\n}\n\n.withRemove_d56a {\n  padding-right: 22px;\n}\n\n.container_a5d8 {\n  position: relative;\n\n  display: inline-block;\n\n  max-width: calc(100% - var(--ring-unit)/2);\n\n  margin-right: calc(var(--ring-unit)/2);\n\n  white-space: nowrap;\n}\n\n.focused_bbe2,\n.tag_ae7d:focus-visible {\n  position: relative;\n\n  outline: none;\n  box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n}\n\n.focused_bbe2,\n.focused_bbe2.tagAngled_b4d0::before,\n.tag_ae7d:focus-visible,\n.tagAngled_b4d0:focus-visible::before {\n  transition: none;\n\n  background-color: var(--ring-tag-hover-background-color);\n}\n\n.tagAngled_b4d0 {\n  /* it needs to fix vertical alignment broken by "overflow: hidden". Remove this class, when IE11 will be deprecated */\n\n  margin-bottom: -5px !important;\n\n  margin-left: var(--ring-unit);\n  padding-left: calc(var(--ring-unit)/2);\n\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.tagAngled_b4d0::before {\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n\n    box-sizing: border-box;\n    width: 12px;\n    height: 12px;\n\n    content: "";\n    transform: scaleY(1.177) rotate(45deg);\n    transform-origin: 0 0;\n\n    border: none;\n  }\n\n.tagAngled_b4d0.focused_bbe2,\n  .tagAngled_b4d0:focus {\n    box-shadow: 0 0 0 1px var(--ring-border-hover-color) inset, 0 0 0 1px var(--ring-border-hover-color);\n  }\n\n.tagAngled_b4d0:focus::before {\n    box-shadow:\n      1px -1px var(--ring-border-hover-color) inset,\n      -0.8px 0.8px 0 0.5px var(--ring-border-hover-color);\n  }\n\n.content_a0ee {\n}\n\n.disabled_ffbd.tag_ae7d,\n.disabled_ffbd.tagAngled_b4d0::before {\n  pointer-events: none;\n\n  color: var(--ring-disabled-color);\n  background-color: var(--ring-disabled-background-color);\n}\n\n.remove_eac2 {\n  position: absolute;\n  z-index: 1;\n  top: 2px;\n  right: 0;\n\n  height: auto;\n  padding: 0 calc(var(--ring-unit)/2);\n\n  line-height: calc(var(--ring-unit)*2);\n}\n\n.removeIcon_e2b4.removeIcon_e2b4 {\n  color: var(--ring-icon-secondary-color);\n}\n\n.icon_bb17 {\n  margin-right: 6px;\n\n  color: var(--ring-icon-secondary-color);\n}\n\n.icon_bb17 svg {\n    vertical-align: -3px;\n  }\n\n.avatarContainer_b363 {\n  display: inline-block;\n  overflow: hidden;\n\n  box-sizing: border-box;\n  width: 20px;\n  height: 20px;\n  margin-right: calc(var(--ring-unit)/2);\n  margin-left: calc(var(--ring-unit)*-1);\n\n  vertical-align: top;\n\n  border-top-left-radius: var(--ring-border-radius);\n  border-bottom-left-radius: var(--ring-border-radius);\n}\n\n.customIcon_dbd7 {\n  max-width: calc(var(--ring-unit)*2);\n  max-height: calc(var(--ring-unit)*2);\n\n  margin-right: calc(var(--ring-unit)/2);\n\n  vertical-align: bottom;\n}\n\n.avatarIcon_c087 {\n  width: 20px;\n\n  margin-right: -4px;\n\n  object-fit: contain;\n  object-position: center;\n}\n',"",{version:3,sources:["<no source>","webpack://./src/tag/tag.css"],names:[],mappings:"AAAA,wGAAA;;EAAA,iBAAA;;EAAA,yDAAA;CAAA,CAAA;;ACIA;;EAGE,kBAAkB;EAClB,UAAU;;EAEV,oBAAoB;;EAEpB,sBAAsB;EACtB,eAAe;EACf,YAAkB;;EAElB,2BAA2B;;EAE3B,eAAe;;EAEf,mBAAmB;;EAEnB,6BAA6B;;EAE7B,YAAY;EACZ,wCAAwC;;EAExC,eAAe;EACf,oCAAoC;AACtC;;AAEA;;EAEE,6CAA6C;;EAE7C,kDAAkD;AACpD;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;;EAElB,qBAAqB;;EAErB,0CAA4C;;EAE5C,sCAAwC;;EAExC,mBAAmB;AACrB;;AAEA;;EAEE,kBAAkB;;EAElB,aAAa;EACb,oDAAoD;AACtD;;AAEA;;;;EAME,gBAAgB;;EAEhB,wDAAwD;AAC1D;;AAEA;EACE,qHAAqH;;EAErH,8BAA8B;;EAE9B,6BAA6B;EAC7B,sCAAwC;;EAExC,yBAAyB;EACzB,4BAA4B;AA6B9B;;AA3BE;IACE,kBAAkB;IAClB,WAAW;IACX,MAAM;IACN,OAAO;;IAEP,sBAAsB;IACtB,WAAW;IACX,YAAY;;IAEZ,WAAW;IACX,sCAAsC;IACtC,qBAAqB;;IAErB,YAAY;EACd;;AAEA;;IAEE,oGAAoG;EACtG;;AAEA;IACE;;yDAEqD;EACvD;;AAGF;AAEA;;AAEA;;EAEE,oBAAoB;;EAEpB,iCAAiC;EACjC,uDAAuD;AACzD;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,QAAQ;;EAER,YAAY;EACZ,mCAAqC;;EAErC,qCAAuC;AACzC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,iBAAiB;;EAEjB,uCAAuC;AAKzC;;AAHE;IACE,oBAAoB;EACtB;;AAGF;EACE,qBAAqB;EACrB,gBAAgB;;EAEhB,sBAAsB;EACtB,WAAiB;EACjB,YAAkB;EAClB,sCAAwC;EACxC,sCAAwC;;EAExC,mBAAmB;;EAEnB,iDAAiD;EACjD,oDAAoD;AACtD;;AAEA;EACE,mCAAqC;EACrC,oCAAsC;;EAEtC,sCAAwC;;EAExC,sBAAsB;AACxB;;AAEA;EACE,WAAiB;;EAEjB,kBAAkB;;EAElB,mBAAmB;EACnB,uBAAuB;AACzB",sourcesContent:[null,'@import "../global/variables.css";\n\n@value max-height: 20px;\n\n.tag {\n  composes: resetButton from "../global/global.css";\n\n  position: relative;\n  z-index: 1;\n\n  display: inline-flex;\n\n  box-sizing: border-box;\n  max-width: 100%;\n  height: max-height;\n\n  padding: 0 var(--ring-unit);\n\n  cursor: pointer;\n\n  vertical-align: top;\n\n  color: var(--ring-text-color);\n\n  border: none;\n  border-radius: var(--ring-border-radius);\n\n  font-size: 12px;\n  line-height: var(--ring-line-height);\n}\n\n.tag,\n.tagAngled::before {\n  transition: background-color var(--ring-ease);\n\n  background-color: var(--ring-tag-background-color);\n}\n\n.withRemove {\n  padding-right: 22px;\n}\n\n.container {\n  position: relative;\n\n  display: inline-block;\n\n  max-width: calc(100% - var(--ring-unit) / 2);\n\n  margin-right: calc(var(--ring-unit) / 2);\n\n  white-space: nowrap;\n}\n\n.focused,\n.tag:focus-visible {\n  position: relative;\n\n  outline: none;\n  box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n}\n\n.focused,\n.focused.tagAngled::before,\n.tag:focus-visible,\n.tagAngled:focus-visible::before,\n.tag:hover,\n.tagAngled:hover::before {\n  transition: none;\n\n  background-color: var(--ring-tag-hover-background-color);\n}\n\n.tagAngled {\n  /* it needs to fix vertical alignment broken by "overflow: hidden". Remove this class, when IE11 will be deprecated */\n\n  margin-bottom: -5px !important;\n\n  margin-left: var(--ring-unit);\n  padding-left: calc(var(--ring-unit) / 2);\n\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n\n  &::before {\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n\n    box-sizing: border-box;\n    width: 12px;\n    height: 12px;\n\n    content: "";\n    transform: scaleY(1.177) rotate(45deg);\n    transform-origin: 0 0;\n\n    border: none;\n  }\n\n  &.focused,\n  &:focus {\n    box-shadow: 0 0 0 1px var(--ring-border-hover-color) inset, 0 0 0 1px var(--ring-border-hover-color);\n  }\n\n  &:focus::before {\n    box-shadow:\n      1px -1px var(--ring-border-hover-color) inset,\n      -0.8px 0.8px 0 0.5px var(--ring-border-hover-color);\n  }\n}\n\n.content {\n  composes: ellipsis from "../global/global.css";\n}\n\n.disabled.tag,\n.disabled.tagAngled::before {\n  pointer-events: none;\n\n  color: var(--ring-disabled-color);\n  background-color: var(--ring-disabled-background-color);\n}\n\n.remove {\n  position: absolute;\n  z-index: 1;\n  top: 2px;\n  right: 0;\n\n  height: auto;\n  padding: 0 calc(var(--ring-unit) / 2);\n\n  line-height: calc(var(--ring-unit) * 2);\n}\n\n.removeIcon.removeIcon {\n  color: var(--ring-icon-secondary-color);\n}\n\n.icon {\n  margin-right: 6px;\n\n  color: var(--ring-icon-secondary-color);\n\n  & svg {\n    vertical-align: -3px;\n  }\n}\n\n.avatarContainer {\n  display: inline-block;\n  overflow: hidden;\n\n  box-sizing: border-box;\n  width: max-height;\n  height: max-height;\n  margin-right: calc(var(--ring-unit) / 2);\n  margin-left: calc(var(--ring-unit) * -1);\n\n  vertical-align: top;\n\n  border-top-left-radius: var(--ring-border-radius);\n  border-bottom-left-radius: var(--ring-border-radius);\n}\n\n.customIcon {\n  max-width: calc(var(--ring-unit) * 2);\n  max-height: calc(var(--ring-unit) * 2);\n\n  margin-right: calc(var(--ring-unit) / 2);\n\n  vertical-align: bottom;\n}\n\n.avatarIcon {\n  width: max-height;\n\n  margin-right: -4px;\n\n  object-fit: contain;\n  object-position: center;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"max-height":"20px",tag:`tag_ae7d ${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.resetButton}`,tagAngled:"tagAngled_b4d0",withRemove:"withRemove_d56a",container:"container_a5d8",focused:"focused_bbe2",content:`content_a0ee ${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.ellipsis}`,disabled:"disabled_ffbd",remove:"remove_eac2",removeIcon:"removeIcon_e2b4",icon:"icon_bb17",avatarContainer:"avatarContainer_b363",customIcon:"customIcon_dbd7",avatarIcon:"avatarIcon_c087"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/tag/tag.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/tag/tag.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./node_modules/util-deprecate/browser.js":(module,__unused_webpack_exports,__webpack_require__)=>{function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);