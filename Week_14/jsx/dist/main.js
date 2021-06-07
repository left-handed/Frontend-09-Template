/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ (() => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction createElement(type, attr) {\n  for (var _len = arguments.length, childs = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    childs[_key - 2] = arguments[_key];\n  }\n\n  console.log(type, attr, childs);\n  var el;\n\n  if (typeof type === 'string') {\n    console.log(type, '444444');\n    el = new ElementWrapper(type);\n  } else {\n    el = new Div();\n  }\n\n  for (var k in attr) {\n    el.setAttribute(k, attr[k]);\n  }\n\n  for (var _i = 0, _childs = childs; _i < _childs.length; _i++) {\n    var item = _childs[_i];\n\n    if (typeof item === 'string') {\n      item = new TextWrapper(item);\n    }\n\n    el.appendChild(item);\n  }\n\n  return el;\n}\n\nvar TextWrapper = /*#__PURE__*/function () {\n  function TextWrapper(text) {\n    _classCallCheck(this, TextWrapper);\n\n    this.root = document.createTextNode(text);\n  }\n\n  _createClass(TextWrapper, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, val) {\n      this.root.setAttribute(name, val);\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(child) {\n      child.mountTo(this.root);\n    }\n  }, {\n    key: \"mountTo\",\n    value: function mountTo(parent) {\n      parent.appendChild(this.root);\n    }\n  }]);\n\n  return TextWrapper;\n}();\n\nvar ElementWrapper = /*#__PURE__*/function () {\n  function ElementWrapper(type) {\n    _classCallCheck(this, ElementWrapper);\n\n    this.root = document.createElement(type);\n  }\n\n  _createClass(ElementWrapper, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, val) {\n      this.root.setAttribute(name, val);\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(child) {\n      console.log(child, '');\n      child.mountTo(this.root);\n    }\n  }, {\n    key: \"mountTo\",\n    value: function mountTo(parent) {\n      parent.appendChild(this.root);\n    }\n  }]);\n\n  return ElementWrapper;\n}();\n\nvar Div = /*#__PURE__*/function () {\n  function Div() {\n    _classCallCheck(this, Div);\n\n    this.root = document.createElement('div');\n  }\n\n  _createClass(Div, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, val) {\n      this.root.setAttribute(name, val);\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(child) {\n      child.mountTo(this.root);\n    }\n  }, {\n    key: \"mountTo\",\n    value: function mountTo(parent) {\n      parent.appendChild(this.root);\n    }\n  }]);\n\n  return Div;\n}();\n\nvar jsx = createElement(Div, {\n  id: \"dom\"\n}, createElement(\"span\", null, \"1\"), createElement(\"span\", null, \"2\"), createElement(\"span\", null, \"3\"));\njsx.mountTo(document.body);\n\n//# sourceURL=webpack://jsx/./main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./main.js"]();
/******/ 	
/******/ })()
;