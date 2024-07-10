(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[830],{"./src/loader-screen/loader-screen.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__,withMessage:()=>withMessage});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_loader_screen__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/loader-screen/loader-screen.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Loader Screen",parameters:{notes:"Displays a large animated loader with an optional caption. Typical use cases: page loading animation, major action animation.",screenshots:{skip:!0}}},basic=()=>{class Example extends react__WEBPACK_IMPORTED_MODULE_0__.Component{render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_loader_screen__WEBPACK_IMPORTED_MODULE_2__.A,{})}}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Example,{})};basic.storyName="basic";const withMessage=()=>{class Example extends react__WEBPACK_IMPORTED_MODULE_0__.Component{render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_loader_screen__WEBPACK_IMPORTED_MODULE_2__.A,{message:"Some message"})}}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Example,{})};withMessage.storyName="with message",basic.parameters={...basic.parameters,docs:{...basic.parameters?.docs,source:{originalSource:"() => {\n  class Example extends Component {\n    render() {\n      return <LoaderScreen />;\n    }\n  }\n  return <Example />;\n}",...basic.parameters?.docs?.source}}},withMessage.parameters={...withMessage.parameters,docs:{...withMessage.parameters?.docs,source:{originalSource:"() => {\n  class Example extends Component {\n    render() {\n      return <LoaderScreen message={'Some message'} />;\n    }\n  }\n  return <Example />;\n}",...withMessage.parameters?.docs?.source}}}},"./src/loader-screen/loader-screen.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>LoaderScreen});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_loader_loader__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/loader/loader.tsx"),_loader_screen_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/loader-screen/loader-screen.css"),_loader_screen_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_loader_screen_css__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");class LoaderScreen extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,containerClassName:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,message:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string};render(){const{message,className,containerClassName,...restProps}=this.props,containerClasses=classnames__WEBPACK_IMPORTED_MODULE_1___default()(containerClassName,_loader_screen_css__WEBPACK_IMPORTED_MODULE_2___default().loaderScreen),loaderClasses=classnames__WEBPACK_IMPORTED_MODULE_1___default()(className,_loader_screen_css__WEBPACK_IMPORTED_MODULE_2___default().loader,{[_loader_screen_css__WEBPACK_IMPORTED_MODULE_2___default().loaderWithoutSpacing]:!message});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:containerClasses,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_loader_loader__WEBPACK_IMPORTED_MODULE_5__.A,{...restProps,message,className:loaderClasses})})}}LoaderScreen.__docgenInfo={description:"@name Loader Screen",methods:[],displayName:"LoaderScreen",props:{"data-test":{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:""},containerClassName:{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"string"}},className:{description:"",type:{name:"string"},required:!1},message:{description:"",type:{name:"string"},required:!1}},composes:["Partial","HTMLAttributes"]}},"./src/loader/loader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Loader});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),data_tests=__webpack_require__("./src/global/data-tests.ts"),dom=__webpack_require__("./src/global/dom.ts"),loader=__webpack_require__("./src/loader/loader.css"),loader_default=__webpack_require__.n(loader);class Particle{radius;x;y;color;decay;life;constructor({x,y,radius,color}){this.radius=radius,this.x=x,this.y=y,this.color=color,this.decay=.01,this.life=1}step(){this.life-=this.decay}isAlive(){return this.life>=0}draw(ctx){const alpha=this.life>=0?this.life:0;ctx.fillStyle=`rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha})`,ctx.beginPath(),ctx.arc(this.x+this.radius,this.y+this.radius,this.radius,0,2*Math.PI),ctx.fill()}}function deterministic(){return.5}class LoaderCore{static defaultProps={size:64,stop:!1,deterministic:!1,colors:[{r:215,g:60,b:234},{r:145,g:53,b:224},{r:88,g:72,b:224},{r:37,g:183,b:255},{r:89,g:189,b:0},{r:251,g:172,b:2},{r:227,g:37,b:129}]};static calculateGradient(startColor,stopColor,position){const calculateChannelValue=(a,b)=>a+Math.round((b-a)*position);return{r:calculateChannelValue(startColor.r,stopColor.r),g:calculateChannelValue(startColor.g,stopColor.g),b:calculateChannelValue(startColor.b,stopColor.b)}}props;canvas;textNode;ctx;height;width;particles;baseSpeed;colorIndex;maxRadius;minRadius;colorChangeTick;x;y;radius;hSpeed;vSpeed;radiusSpeed;tick;isRunning;constructor(containerNode,props){this.props=Object.assign({},LoaderCore.defaultProps,props),this.canvas=document.createElement("canvas"),this.canvas.dataset.test="ring-loader",this.canvas.classList.add(loader_default().canvas),this.textNode=document.createElement("div"),this.textNode.dataset.test="ring-loader-text",this.textNode.classList.add(loader_default().text),this.textNode.textContent=this.props.message?this.props.message:"",containerNode.appendChild(this.canvas),containerNode.appendChild(this.textNode);const pixelRatio=LoaderCore.getPixelRatio(),canvasSize=this.props.size*pixelRatio;this.canvas.width=canvasSize,this.canvas.height=canvasSize,this.canvas.style.width=`${this.props.size}px`,this.canvas.style.height=`${this.props.size}px`,this.ctx=this.canvas.getContext("2d"),this.ctx?.scale(pixelRatio,pixelRatio),this.height=this.props.size,this.width=this.props.size,this.particles=[],this.baseSpeed=1,this.colorIndex=0,this.maxRadius=10,this.minRadius=6,this.colorChangeTick=40,this.x=0,this.y=0,this.radius=8,this.hSpeed=1.5,this.vSpeed=.5,this.radiusSpeed=.05,this.tick=0,this.prepareInitialState(100),this.isRunning=!this.props.stop,this.isRunning?this.startAnimation():this.draw()}static getPixelRatio(){return(0,dom.sJ)()}prepareInitialState(ticks){for(let i=0;i<ticks;i++)this.step()}handleLimits(coord,radius,speed,limit){const randomizedSpeedChange=(this.props.deterministic?deterministic:Math.random)()-this.baseSpeed/2;return coord+2*radius+this.baseSpeed>=limit?-(this.baseSpeed+randomizedSpeedChange):coord<=this.baseSpeed?this.baseSpeed+randomizedSpeedChange:speed}calculateNextCoordinates(){this.x+=this.hSpeed,this.y+=this.vSpeed,this.hSpeed=this.handleLimits(this.x,this.radius,this.hSpeed,this.width),this.vSpeed=this.handleLimits(this.y,this.radius,this.vSpeed,this.height)}calculateNextRadius(){this.radius+=this.radiusSpeed,(this.radius>this.maxRadius||this.radius<this.minRadius)&&(this.radiusSpeed=-this.radiusSpeed)}getNextColor(){const colors=this.props.colors,currentColor=colors[this.colorIndex],nextColor=colors[this.colorIndex+1]||colors[0];return LoaderCore.calculateGradient(currentColor,nextColor,this.tick/this.colorChangeTick)}nextTick(){this.tick++,this.tick>this.colorChangeTick&&(this.tick=0,this.colorIndex++,this.colorIndex>this.props.colors.length-1&&(this.colorIndex=0))}step(){this.nextTick(),this.calculateNextCoordinates(),this.calculateNextRadius(),this.particles.forEach((particle=>particle.step())),this.particles.push(new Particle({x:this.x,y:this.y,radius:this.radius,color:this.getNextColor()}))}removeDeadParticles(){this.particles=this.particles.filter((it=>it.isAlive()))}draw(){const ctx=this.ctx;null!=ctx&&(ctx.clearRect(0,0,this.width,this.height),this.removeDeadParticles(),this.particles.forEach((particle=>particle.draw(ctx))))}loop(){this.step(),this.draw(),this.isRunning&&window.requestAnimationFrame((()=>this.loop()))}updateMessage(text){this.textNode.textContent=text||""}stopAnimation(){this.isRunning=!1,this.canvas.classList.remove(loader_default().animate)}startAnimation(){this.isRunning=!0,this.canvas.classList.add(loader_default().animate),this.loop()}destroy(){this.isRunning=!1}}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");class Loader extends react.PureComponent{static propTypes={className:prop_types_default().string,size:prop_types_default().number,colors:prop_types_default().array,message:prop_types_default().string,"data-test":prop_types_default().string,stop:prop_types_default().bool,deterministic:prop_types_default().bool};componentDidUpdate(prevProps){this.loader&&(!prevProps.stop&&this.props.stop?this.loader.stopAnimation():prevProps.stop&&!this.props.stop&&this.loader.startAnimation())}componentWillUnmount(){this.loader?.destroy()}loader;initLoader=el=>{el&&(this.loader=new LoaderCore(el,this.props))};render(){const{message,size,colors,"data-test":dataTest,stop,deterministic,...restProps}=this.props;return(0,jsx_runtime.jsx)("div",{"data-test":(0,data_tests.A)("ring-loader",dataTest),...restProps,ref:this.initLoader})}}Loader.__docgenInfo={description:"Displays a large animated loader with an optional caption. Typical use cases: page loading animation, major action animation.",methods:[{name:"initLoader",docblock:null,modifiers:[],params:[{name:"el",optional:!1,type:{name:"union",raw:"Node | null",elements:[{name:"Node"},{name:"null"}]}}],returns:null}],displayName:"Loader",props:{"data-test":{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:"",type:{name:"string"}},className:{description:"",type:{name:"string"},required:!1},size:{description:"",type:{name:"number"},required:!1},colors:{description:"",type:{name:"array"},required:!1},message:{description:"",type:{name:"string"},required:!1},stop:{description:"",type:{name:"bool"},required:!1},deterministic:{description:"",type:{name:"bool"},required:!1}},composes:["Partial","HTMLAttributes"]}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/loader-screen/loader-screen.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,'.loaderScreen_b0c0 {\n  position: absolute;\n\n  width: 100%;\n  height: 100%;\n\n  text-align: center;\n  vertical-align: middle;\n}\n\n.loaderScreen_b0c0::before {\n    display: inline-block;\n\n    height: 100%;\n\n    content: "";\n\n    vertical-align: middle;\n  }\n\n.loader_aabf {\n  display: inline-block;\n}\n\n.loaderWithoutSpacing_f4b9 canvas {\n  margin: 0;\n}\n',"",{version:3,sources:["webpack://./src/loader-screen/loader-screen.css"],names:[],mappings:"AAEA;EACE,kBAAkB;;EAElB,WAAW;EACX,YAAY;;EAEZ,kBAAkB;EAClB,sBAAsB;AAWxB;;AATE;IACE,qBAAqB;;IAErB,YAAY;;IAEZ,WAAW;;IAEX,sBAAsB;EACxB;;AAGF;EACE,qBAAqB;AACvB;;AAEA;EACE,SAAS;AACX",sourcesContent:['@import "../global/variables.css";\n\n.loaderScreen {\n  position: absolute;\n\n  width: 100%;\n  height: 100%;\n\n  text-align: center;\n  vertical-align: middle;\n\n  &::before {\n    display: inline-block;\n\n    height: 100%;\n\n    content: "";\n\n    vertical-align: middle;\n  }\n}\n\n.loader {\n  display: inline-block;\n}\n\n.loaderWithoutSpacing canvas {\n  margin: 0;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={loaderScreen:"loaderScreen_b0c0",loader:"loader_aabf",loaderWithoutSpacing:"loaderWithoutSpacing_f4b9"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/loader/loader.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,"@keyframes rotation-keyframes_d87b {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.canvas_b4b4 {\n  display: block;\n\n  margin: calc(var(--ring-unit)*2) auto;\n\n  pointer-events: none;\n}\n\n.animate_f7ea {\n  animation: rotation-keyframes_d87b 36s linear infinite;\n}\n\n.text_fd63 {\n  text-align: center;\n\n  font-family: var(--ring-font-family);\n  font-size: var(--ring-font-size);\n  line-height: var(--ring-line-height);\n}\n","",{version:3,sources:["webpack://./src/loader/loader.css"],names:[],mappings:"AAEA;EACE;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,cAAc;;EAEd,qCAAuC;;EAEvC,oBAAoB;AACtB;;AAEA;EACE,sDAAiD;AACnD;;AAEA;EACE,kBAAkB;;EAElB,oCAAoC;EACpC,gCAAgC;EAChC,oCAAoC;AACtC",sourcesContent:['@import "../global/variables.css";\n\n@keyframes rotation-keyframes {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.canvas {\n  display: block;\n\n  margin: calc(var(--ring-unit) * 2) auto;\n\n  pointer-events: none;\n}\n\n.animate {\n  animation: rotation-keyframes 36s linear infinite;\n}\n\n.text {\n  text-align: center;\n\n  font-family: var(--ring-font-family);\n  font-size: var(--ring-font-size);\n  line-height: var(--ring-line-height);\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={canvas:"canvas_b4b4",animate:"animate_f7ea","rotation-keyframes":"rotation-keyframes_d87b",text:"text_fd63"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/loader-screen/loader-screen.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/loader-screen/loader-screen.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/loader/loader.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/loader/loader.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);