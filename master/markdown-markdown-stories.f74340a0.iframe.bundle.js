"use strict";(globalThis.webpackChunk_jetbrains_ring_ui=globalThis.webpackChunk_jetbrains_ring_ui||[]).push([[5442],{"./src/markdown/markdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),markdown_it__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/markdown-it/index.mjs"),highlight_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/highlight.js/lib/index.js"),highlight_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_2__),_code_highlight_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/code/highlight.css"),_code_highlight_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_code_highlight_css__WEBPACK_IMPORTED_MODULE_3__),_markdown__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/markdown/markdown.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Markdown",parameters:{notes:"\nRenders markdown.\nNote: it is up to developer to pick the best option fore markdown rendering. We suggest using `markdown-it` or `react-markdown`.\nBe careful with passing user input down to `dangerouslySetInnerHTML`!\n  "}},basic=()=>{const renderedMarkdown=new markdown_it__WEBPACK_IMPORTED_MODULE_1__.A("commonmark",{html:!1,highlight:(str,lang)=>lang&&highlight_js__WEBPACK_IMPORTED_MODULE_2___default().getLanguage(lang)?highlight_js__WEBPACK_IMPORTED_MODULE_2___default().highlight(str,{language:lang}).value:""}).enable("table").render("\n# Header\n\n_Various_ types of **highlighting**\n\n[Link](/)\n\n[Link with definition][definition]\n\n[definition]: /\n\n> Blockquote\n>\n> Second line\n\nUnordered list:\n\n* List\n* List\n\nOrdered list:\n\n1. One\n2. Two\n\nHorizontal line\n\n| Some | Table |\n| --- | --- |\n| One | Two |\n\n---\nSome `inline(code)` inside text\n\n## Block code\n```js\nimport React, {Component} from 'react';\nimport ChildComponent from './child-component';\n\nconst MyComponent = () => (\n  <div>\n    <ChildComponent/>\n  </div>\n);\n```\n");return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_markdown__WEBPACK_IMPORTED_MODULE_4__.A,{className:_code_highlight_css__WEBPACK_IMPORTED_MODULE_3___default().highlightContainer},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{dangerouslySetInnerHTML:{__html:renderedMarkdown}}))};basic.storyName="basic",basic.parameters={...basic.parameters,docs:{...basic.parameters?.docs,source:{originalSource:"() => {\n  const markdownIt = new MarkdownIt('commonmark', {\n    html: false,\n    highlight(str, lang) {\n      if (lang && highlightJs.getLanguage(lang)) {\n        return highlightJs.highlight(str, {\n          language: lang\n        }).value;\n      }\n      return '';\n    }\n  }).enable('table');\n  const renderedMarkdown = markdownIt.render(`\n# Header\n\n_Various_ types of **highlighting**\n\n[Link](/)\n\n[Link with definition][definition]\n\n[definition]: /\n\n> Blockquote\n>\n> Second line\n\nUnordered list:\n\n* List\n* List\n\nOrdered list:\n\n1. One\n2. Two\n\nHorizontal line\n\n| Some | Table |\n| --- | --- |\n| One | Two |\n\n---\nSome \\`inline(code)\\` inside text\n\n## Block code\n\\`\\`\\`js\nimport React, {Component} from 'react';\nimport ChildComponent from './child-component';\n\nconst MyComponent = () => (\n  <div>\n    <ChildComponent/>\n  </div>\n);\n\\`\\`\\`\n`);\n  return <Markdown className={highlightStyles.highlightContainer}>\n      {/* Be careful with passing user input down to `dangerouslySetInnerHTML`! */}\n      <div dangerouslySetInnerHTML={{\n      __html: renderedMarkdown\n    }} />\n    </Markdown>;\n}",...basic.parameters?.docs?.source}}}}}]);