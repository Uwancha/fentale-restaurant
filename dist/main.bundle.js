/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/eclair-3366430_1280.jpg */ "./src/images/eclair-3366430_1280.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/coffee-3120750_1280.jpg */ "./src/images/coffee-3120750_1280.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    box-sizing: border-box;
}

body {
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(rgb(0,0,0, .01), rgb(0,0,0,.01)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-position: center;
    background-size: cover;
}

.app {
    height: 100%;
}

nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    background-color: rgb(240, 255, 255, .8);
    padding-top: 2rem;
    padding-bottom: 2rem;
    position: fixed;
    top: 0;
    right: 0;
    width: 59%;
    box-shadow: 10px -10px 50px #e9e3e3;
}

.li {
    list-style: none;
    color: rgb(72, 70, 70);
    font-weight: 700;
}

main {
    top: 0;
    left: 0;
    width: 40%;
    height: 100%;
    background-color: azure;
}

.description {
    width: 60%;
    font-weight: 500;
}

section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6rem;
    color: black;
    padding-top: 15rem;
}

h4 {
    font-size: 2rem;
    font-weight: 800;
    color: gold;
}

h5 {
    font-size: 2rem;
    font-weight: 800;
    color: gold;
    text-align: center;
    margin-bottom: 2rem;
}


h3 {
    color: tomato;
}

h2 {
    margin-left: -25rem;
    margin-bottom: 2rem;
    color: tomato;

}

.icons {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    position: fixed;
    bottom: 0;
    margin-bottom: 2rem;
    padding: 1rem;
    border-bottom: solid goldenrod 1px;
}

img {
    width: 20px;
    height: 20px;
}

.menu {
    background-color: rgb(240, 255, 255);
    height: 100%;
    padding-top: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    height: 80%;
    width: 50%;
    column-gap: 3rem;
    margin-left: -25rem;
}

.container > * {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

article {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
}

#form-container {
    height: 100%;
    width: 100%;
    background-color: azure;
}

#form {
    background-color: rgb(135, 173, 173);
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-top: 10rem;
    background-image: linear-gradient(rgb(0,0,0, .4), rgb(0,0,0,.4)), url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: aliceblue;
    background-color: rgb(0, 0, 0, .2);
    padding: 2rem;
}

input {
    color:goldenrod;
    border: solid azure 1px;
    background-color: transparent;
}

input:focus{
    outline: none;
    border: solid green 2px;
}

input:invalid::after {
    border: solid red 2px;
}

input:valid {
    border: solid green 3px;
}

input[type="text"], input[type="date"], input[type="time"], input[type="number"]{
    width: 20rem;
    margin-left: 1rem;
}

input[type="email"] {
    width: 100%;
    color: aliceblue;
} 

button[type="submit"] {
    background-color: tomato;
    border: none;
    color: azure;
    padding-top: .5rem;
    padding-bottom: .5rem;
    font-size: 2rem;
    font-weight: 700;
    border-radius: .4rem;
}

#radio {
    align-self: center;
}

#radio > * {
    margin: 1rem;
}

h1 {
    color: tomato;
    border-bottom: solid azure 1px;
}

@media (max-width: 768px) {
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        background-color: rgb(240, 255, 255, .8);
        padding-top: 2rem;
        padding-bottom: 2rem;
        top: 0;
        width: 100%;
    }
    

    main {
        left: 0;
        background-color: rgb(240, 255, 255, .5);
        width: 100%;
    }

    .menu{
        overflow-y: scroll;
        padding-bottom: 2rem;
    }

    .container {
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
        height: 100%;
        width: 50%;
        row-gap: 1rem;
        margin-left: -5rem;
    }


    h2 {
        margin-left: -5rem;
    }

    h5 {
        font-size: 1.4rem;
    }

    #form-container {
        height: 100%;
        width: 100%;
        background-color: azure;
        margin-bottom: 0;
    }

    #form {
        height: 100%;
        width: 100%;
    }

    input[type="text"], input[type="date"], input[type="time"], input[type="number"]{
        width: 20rem;
        margin-left: 0;
    }
}




`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100vh;\n    width: 100%;\n    background-image: linear-gradient(rgb(0,0,0, .01), rgb(0,0,0,.01)), url(./images/eclair-3366430_1280.jpg);\n    background-position: center;\n    background-size: cover;\n}\n\n.app {\n    height: 100%;\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 3rem;\n    background-color: rgb(240, 255, 255, .8);\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n    position: fixed;\n    top: 0;\n    right: 0;\n    width: 59%;\n    box-shadow: 10px -10px 50px #e9e3e3;\n}\n\n.li {\n    list-style: none;\n    color: rgb(72, 70, 70);\n    font-weight: 700;\n}\n\nmain {\n    top: 0;\n    left: 0;\n    width: 40%;\n    height: 100%;\n    background-color: azure;\n}\n\n.description {\n    width: 60%;\n    font-weight: 500;\n}\n\nsection {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 6rem;\n    color: black;\n    padding-top: 15rem;\n}\n\nh4 {\n    font-size: 2rem;\n    font-weight: 800;\n    color: gold;\n}\n\nh5 {\n    font-size: 2rem;\n    font-weight: 800;\n    color: gold;\n    text-align: center;\n    margin-bottom: 2rem;\n}\n\n\nh3 {\n    color: tomato;\n}\n\nh2 {\n    margin-left: -25rem;\n    margin-bottom: 2rem;\n    color: tomato;\n\n}\n\n.icons {\n    display: flex;\n    justify-content: center;\n    gap: 1.5rem;\n    position: fixed;\n    bottom: 0;\n    margin-bottom: 2rem;\n    padding: 1rem;\n    border-bottom: solid goldenrod 1px;\n}\n\nimg {\n    width: 20px;\n    height: 20px;\n}\n\n.menu {\n    background-color: rgb(240, 255, 255);\n    height: 100%;\n    padding-top: 10rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-content: center;\n    height: 80%;\n    width: 50%;\n    column-gap: 3rem;\n    margin-left: -25rem;\n}\n\n.container > * {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\narticle {\n    display: flex;\n    justify-content: space-between;\n    gap: 2rem;\n}\n\n#form-container {\n    height: 100%;\n    width: 100%;\n    background-color: azure;\n}\n\n#form {\n    background-color: rgb(135, 173, 173);\n    height: 100%;\n    width: 70%;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    padding-top: 10rem;\n    background-image: linear-gradient(rgb(0,0,0, .4), rgb(0,0,0,.4)), url(./images/coffee-3120750_1280.jpg);\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    color: aliceblue;\n    background-color: rgb(0, 0, 0, .2);\n    padding: 2rem;\n}\n\ninput {\n    color:goldenrod;\n    border: solid azure 1px;\n    background-color: transparent;\n}\n\ninput:focus{\n    outline: none;\n    border: solid green 2px;\n}\n\ninput:invalid::after {\n    border: solid red 2px;\n}\n\ninput:valid {\n    border: solid green 3px;\n}\n\ninput[type=\"text\"], input[type=\"date\"], input[type=\"time\"], input[type=\"number\"]{\n    width: 20rem;\n    margin-left: 1rem;\n}\n\ninput[type=\"email\"] {\n    width: 100%;\n    color: aliceblue;\n} \n\nbutton[type=\"submit\"] {\n    background-color: tomato;\n    border: none;\n    color: azure;\n    padding-top: .5rem;\n    padding-bottom: .5rem;\n    font-size: 2rem;\n    font-weight: 700;\n    border-radius: .4rem;\n}\n\n#radio {\n    align-self: center;\n}\n\n#radio > * {\n    margin: 1rem;\n}\n\nh1 {\n    color: tomato;\n    border-bottom: solid azure 1px;\n}\n\n@media (max-width: 768px) {\n    nav {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        gap: 2rem;\n        background-color: rgb(240, 255, 255, .8);\n        padding-top: 2rem;\n        padding-bottom: 2rem;\n        top: 0;\n        width: 100%;\n    }\n    \n\n    main {\n        left: 0;\n        background-color: rgb(240, 255, 255, .5);\n        width: 100%;\n    }\n\n    .menu{\n        overflow-y: scroll;\n        padding-bottom: 2rem;\n    }\n\n    .container {\n        display: grid;\n        grid-template-columns: 1fr;\n        justify-content: center;\n        height: 100%;\n        width: 50%;\n        row-gap: 1rem;\n        margin-left: -5rem;\n    }\n\n\n    h2 {\n        margin-left: -5rem;\n    }\n\n    h5 {\n        font-size: 1.4rem;\n    }\n\n    #form-container {\n        height: 100%;\n        width: 100%;\n        background-color: azure;\n        margin-bottom: 0;\n    }\n\n    #form {\n        height: 100%;\n        width: 100%;\n    }\n\n    input[type=\"text\"], input[type=\"date\"], input[type=\"time\"], input[type=\"number\"]{\n        width: 20rem;\n        margin-left: 0;\n    }\n}\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderHome)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ././style.css */ "./src/style.css");
/* harmony import */ var _icons_facebook_4494479_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/facebook_4494479.png */ "./src/icons/facebook_4494479.png");
/* harmony import */ var _icons_instagram_2111463_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/instagram_2111463.png */ "./src/icons/instagram_2111463.png");
/* harmony import */ var _icons_twitter_4494477_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/twitter_4494477.png */ "./src/icons/twitter_4494477.png");





function renderHome() {
    const nav = document.createElement("nav");
    const main = document.createElement("main");
    const icons = document.createElement("div");
    
    
   let items = ['Home', 'Menu', 'Reservation', 'Contact'];

    // Loop through the array and create an li element for each item
    items.forEach(function(item) {
        let li = document.createElement('li');
        li.textContent = item;
        li.classList.add("li")
        li.id = item
        nav.appendChild(li);
    });

    const section = document.createElement("section")
    const restName = document.createElement("h4");
    const description = document.createElement("div");
    const h4 = document.createElement("h3")
    restName.textContent = "Welcome to Fentale Restaurant";
    description.textContent = "We serve delicious Ethiopian and international cuisine made with fresh, locally-sourced ingredientsis.";
    h4.textContent = "Come join us and discover the true essence of Ethiopian cuisine.";
    description.classList.add("description")
    section.appendChild(restName);
    section.appendChild(description);
    section.appendChild(h4)
    main.appendChild(section)


    let fb = document.createElement("img");
    let ig = document.createElement("img");
    let twitter = document.createElement("img")
    fb.src = _icons_facebook_4494479_png__WEBPACK_IMPORTED_MODULE_1__;
    ig.src = _icons_instagram_2111463_png__WEBPACK_IMPORTED_MODULE_2__;
    twitter.src = _icons_twitter_4494477_png__WEBPACK_IMPORTED_MODULE_3__;

    icons.appendChild(fb);
    icons.appendChild(ig);
    icons.appendChild(twitter);
    icons.classList.add('icons')

    main.appendChild(icons)

    return { nav, main}

}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMenu)
/* harmony export */ });


function renderMenu() {
    const container = document.createElement("div");
    const menu = document.createElement("div");
    const headline = document.createElement("h2");
    headline.textContent = "Our Menu";

    const drinksContainer = document.createElement("div");
    const drinks = document.createElement("h5");
    drinks.textContent = "DRINKS";
    const water = document.createElement("p");
    water.textContent = "Mineral Water";
    const waterPrice = document.createElement("p")
    waterPrice.textContent = "$ 2.00";
    const artWater = document.createElement("article");
    const juice = document.createElement("p");
    juice.textContent= "Fresh Fruit Juice";
    const juicePrice = document.createElement("p");
    juicePrice.textContent = "$ 2.00";
    const artJuice = document.createElement("article");
    const wine = document.createElement("p");
    wine.textContent = "Wines";
    const winePrice = document.createElement("p");
    winePrice.textContent = "$ 2.00";
    const artWine = document.createElement("article");
    
    artWater.appendChild(water);
    artWater.appendChild(waterPrice);
    artJuice.appendChild(juice);
    artJuice.appendChild(juicePrice);
    artWine.appendChild(wine);
    artWine.appendChild(winePrice);
    drinksContainer.appendChild(drinks);
    drinksContainer.appendChild(artWater);
    drinksContainer.appendChild(artJuice);
    drinksContainer.appendChild(artWine);

    

    const saladContainer = document.createElement("div")
    const salads = document.createElement("h5");
    salads.textContent = "SALADS";
    const guacamole = document.createElement("p");
    guacamole.textContent = "Guacamole Salad";
    const guacamolePrice = document.createElement("p");
    guacamolePrice.textContent = "$ 10.00";
    const artGuacamole = document.createElement("article");
    const chicken = document.createElement("p");
    chicken.textContent = "Chicken Salad";
    const chickenPrice = document.createElement("p");
    chickenPrice.textContent = "$ 10.00";
    const artChicken  = document.createElement("article");

    const cobb = document.createElement("p");
    cobb.textContent = "Cobb Salad";
    const cobbPrice = document.createElement("p");
    cobbPrice.textContent = "$ 10.00";
    const artCobb  = document.createElement("article");
    
    artGuacamole.appendChild(guacamole);
    artGuacamole.appendChild(guacamolePrice);
    artChicken.appendChild(chicken);
    artChicken.appendChild(chickenPrice);
    artCobb.appendChild(cobb);
    artCobb.appendChild(cobbPrice);
    saladContainer.appendChild(salads);
    saladContainer.appendChild(artGuacamole);
    saladContainer.appendChild(artChicken);
    saladContainer.appendChild(artCobb);


    const mainCourseContainer = document.createElement("div")
    const mainCourse = document.createElement("h5");
    mainCourse.textContent = "Main Courses";
    const grilled = document.createElement("p");
    grilled.textContent = "Grilled Fish And Potatoes";
    const grilledPrice = document.createElement("p");
    grilledPrice.textContent = "$ 20.00";
    const artGrilled = document.createElement("article");
    const rice = document.createElement("p");
    rice.textContent = "Chicken And Rice";
    const ricePrice = document.createElement("p");
    ricePrice.textContent = "$ 20.00";
    const artRice = document.createElement("article");
    const turky = document.createElement("p");
    turky.textContent = "Turky And Ham Pie";
    const turkyPrice = document.createElement("p");
    const artTurky = document.createElement("article");
    turkyPrice.textContent = "$ 20.00";
    
    artGrilled.appendChild(grilled);
    artGrilled.appendChild(grilledPrice);
    artRice.appendChild(rice);
    artRice.appendChild(ricePrice);
    artTurky.appendChild(turky);
    artTurky.appendChild(turkyPrice);
    mainCourseContainer.appendChild(mainCourse);
    mainCourseContainer.appendChild(artGrilled);
    mainCourseContainer.appendChild(artGrilled);
    mainCourseContainer.appendChild(artRice);
    mainCourseContainer.appendChild(artTurky);



    const dessertContainer = document.createElement("div")
    const dessert = document.createElement("h5");
    dessert.textContent = "Dessert";
    const fruit = document.createElement("p");
    fruit.textContent = "Fruit And Cream";
    const fruitPrice = document.createElement("p");
    fruitPrice.textContent = "$ 5.00";
    const artFruit = document.createElement("article");
    const apple = document.createElement("p");
    apple.textContent = "Apple Pie";
    const applePrice = document.createElement("p");
    applePrice.textContent = "$ 5.00";
    const artApple = document.createElement("article");
    const cream = document.createElement("p");
    cream.textContent = "Ice Cream";
    const creamPrice = document.createElement("p");
    creamPrice.textContent = "$ 5.00";
    const artCream = document.createElement("article");
    
    artFruit.appendChild(fruit);
    artFruit.appendChild(fruitPrice);
    artCream.appendChild(cream);
    artCream.appendChild(creamPrice);
    artApple.appendChild(apple);
    artApple.appendChild(applePrice);
    dessertContainer.appendChild(dessert);
    dessertContainer.appendChild(artFruit);
    dessertContainer.appendChild(artApple);
    dessertContainer.appendChild(artCream);


    
    container.appendChild(mainCourseContainer);
    container.appendChild(saladContainer);
    container.appendChild(dessertContainer);
    container.appendChild(drinksContainer);
    container.classList.add("container")

    menu.appendChild(headline);
    menu.appendChild(container)
    menu.classList.add("menu")

    return { menu };

}

/***/ }),

/***/ "./src/reservation.js":
/*!****************************!*\
  !*** ./src/reservation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   form: () => (/* binding */ form)
/* harmony export */ });
const form = `<div id = "form-container">
<section id = "form">


<h1>Book a Table</h1>

<form>
    
    <div>
        <label for="booking_date">Date:</label>
        <input type="date" id="booking_date" name="booking_date" required>   
    </div>
    <div>
        <label for="booking_time">Time:</label>
        <input type="time" id="booking_time" name="booking_time" required>   
    </div>
    <div>
        <label for="people">Guests </label>
        <input type="number" id="people" min="1" max="8" name="people" required>        
    </div>
    <div id = "radio">
        <label>
            <input type="radio" id="agree" name="place" required checked> 
            Indoor
        </label>
        <label>
            <input type="radio" id="agree" name="place" required> 
            Outdoor
        </label>
    </div>
    <div>
        <input type="email" id="email_address" name="email_address" placeholder="Enter your email" required>
    </div>
    <button type="submit">Book Now</button>
    </form>
</section>
</div>`;




/***/ }),

/***/ "./src/icons/facebook_4494479.png":
/*!****************************************!*\
  !*** ./src/icons/facebook_4494479.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e6a1e5fdf0bd596048d.png";

/***/ }),

/***/ "./src/icons/instagram_2111463.png":
/*!*****************************************!*\
  !*** ./src/icons/instagram_2111463.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e719d8b29f452a16302d.png";

/***/ }),

/***/ "./src/icons/twitter_4494477.png":
/*!***************************************!*\
  !*** ./src/icons/twitter_4494477.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "93ac3f9a344ecd5d01a4.png";

/***/ }),

/***/ "./src/images/coffee-3120750_1280.jpg":
/*!********************************************!*\
  !*** ./src/images/coffee-3120750_1280.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c67e123f4d47f2d059d.jpg";

/***/ }),

/***/ "./src/images/eclair-3366430_1280.jpg":
/*!********************************************!*\
  !*** ./src/images/eclair-3366430_1280.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d7633d2c6a16d23691be.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _reservation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservation */ "./src/reservation.js");




const app = document.createElement("div");
app.classList.add("app");

function rendernavBar() {
    //const app = document.createElement("div");
    
    //app.appendChild();
    document.body.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])().nav);

}

function mainComponent(component) {
    app.appendChild(component);
    document.body.appendChild(app);
}

rendernavBar();
mainComponent((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])().main);

const menu = document.querySelector("#Menu");

menu.addEventListener("click", () => {
    const app = document.querySelector(".app");
    app.innerHTML = "";
    mainComponent((0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])().menu);
})

const book = document.querySelector("#Reservation");

book.addEventListener("click", () => {
    const app = document.querySelector(".app");
    app.innerHTML = "";
    app.insertAdjacentHTML('afterbegin', _reservation__WEBPACK_IMPORTED_MODULE_2__.form);
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyw2SUFBbUQ7QUFDL0YsNENBQTRDLDZJQUFtRDtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RSxtQ0FBbUM7QUFDakg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSxtQ0FBbUM7QUFDL0c7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQSxPQUFPLGdGQUFnRixVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFB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O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQWdDO0FBQ0E7QUFDSzs7QUFFckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixpREFBVTs7QUFFeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLGlEQUFVOztBQUV4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaURBQVU7QUFDNUIsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsOENBQUk7QUFDN0MsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZlbnRhbGUtcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZmVudGFsZS1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mZW50YWxlLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2ZlbnRhbGUtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2ZlbnRhbGUtcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9mZW50YWxlLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZmVudGFsZS1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9mZW50YWxlLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZmVudGFsZS1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2ZlbnRhbGUtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2ZlbnRhbGUtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2ZlbnRhbGUtcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL2ZlbnRhbGUtcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL2ZlbnRhbGUtcmVzdGF1cmFudC8uL3NyYy9yZXNlcnZhdGlvbi5qcyIsIndlYnBhY2s6Ly9mZW50YWxlLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmVudGFsZS1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2ZlbnRhbGUtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmVudGFsZS1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZmVudGFsZS1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmVudGFsZS1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmVudGFsZS1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2ZlbnRhbGUtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9mZW50YWxlLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2ZlbnRhbGUtcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvZWNsYWlyLTMzNjY0MzBfMTI4MC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jb2ZmZWUtMzEyMDc1MF8xMjgwLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMCwwLDAsIC4wMSksIHJnYigwLDAsMCwuMDEpKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYXBwIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbm5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNTUsIDI1NSwgLjgpO1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDU5JTtcbiAgICBib3gtc2hhZG93OiAxMHB4IC0xMHB4IDUwcHggI2U5ZTNlMztcbn1cblxuLmxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGNvbG9yOiByZ2IoNzIsIDcwLCA3MCk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxubWFpbiB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG5zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDZyZW07XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmctdG9wOiAxNXJlbTtcbn1cblxuaDQge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGNvbG9yOiBnb2xkO1xufVxuXG5oNSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6IGdvbGQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cblxuaDMge1xuICAgIGNvbG9yOiB0b21hdG87XG59XG5cbmgyIHtcbiAgICBtYXJnaW4tbGVmdDogLTI1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgY29sb3I6IHRvbWF0bztcblxufVxuXG4uaWNvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxLjVyZW07XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgZ29sZGVucm9kIDFweDtcbn1cblxuaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5tZW51IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNTUsIDI1NSk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAxMHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBjb2x1bW4tZ2FwOiAzcmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAtMjVyZW07XG59XG5cbi5jb250YWluZXIgPiAqIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbmFydGljbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMnJlbTtcbn1cblxuI2Zvcm0tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XG59XG5cbiNmb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM1LCAxNzMsIDE3Myk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMnJlbTtcbiAgICBwYWRkaW5nLXRvcDogMTByZW07XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigwLDAsMCwgLjQpLCByZ2IoMCwwLDAsLjQpKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG5mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAycmVtO1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4yKTtcbiAgICBwYWRkaW5nOiAycmVtO1xufVxuXG5pbnB1dCB7XG4gICAgY29sb3I6Z29sZGVucm9kO1xuICAgIGJvcmRlcjogc29saWQgYXp1cmUgMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pbnB1dDpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogc29saWQgZ3JlZW4gMnB4O1xufVxuXG5pbnB1dDppbnZhbGlkOjphZnRlciB7XG4gICAgYm9yZGVyOiBzb2xpZCByZWQgMnB4O1xufVxuXG5pbnB1dDp2YWxpZCB7XG4gICAgYm9yZGVyOiBzb2xpZCBncmVlbiAzcHg7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwiZGF0ZVwiXSwgaW5wdXRbdHlwZT1cInRpbWVcIl0sIGlucHV0W3R5cGU9XCJudW1iZXJcIl17XG4gICAgd2lkdGg6IDIwcmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG5pbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG59IFxuXG5idXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogYXp1cmU7XG4gICAgcGFkZGluZy10b3A6IC41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBib3JkZXItcmFkaXVzOiAuNHJlbTtcbn1cblxuI3JhZGlvIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbiNyYWRpbyA+ICoge1xuICAgIG1hcmdpbjogMXJlbTtcbn1cblxuaDEge1xuICAgIGNvbG9yOiB0b21hdG87XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgYXp1cmUgMXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBuYXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAycmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNTUsIDI1NSwgLjgpO1xuICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIFxuXG4gICAgbWFpbiB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI1NSwgMjU1LCAuNSk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5tZW51e1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgIH1cblxuICAgIC5jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgcm93LWdhcDogMXJlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC01cmVtO1xuICAgIH1cblxuXG4gICAgaDIge1xuICAgICAgICBtYXJnaW4tbGVmdDogLTVyZW07XG4gICAgfVxuXG4gICAgaDUge1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICB9XG5cbiAgICAjZm9ybS1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAjZm9ybSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJkYXRlXCJdLCBpbnB1dFt0eXBlPVwidGltZVwiXSwgaW5wdXRbdHlwZT1cIm51bWJlclwiXXtcbiAgICAgICAgd2lkdGg6IDIwcmVtO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG59XG5cblxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLDJHQUF5RztJQUN6RywyQkFBMkI7SUFDM0Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCx3Q0FBd0M7SUFDeEMsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsTUFB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SUFDckI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLHVCQUF1QjtRQUN2QixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osV0FBVztJQUNmOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGNBQWM7SUFDbEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMCwwLDAsIC4wMSksIHJnYigwLDAsMCwuMDEpKSwgdXJsKC4vaW1hZ2VzL2VjbGFpci0zMzY2NDMwXzEyODAuanBnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uYXBwIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNTUsIDI1NSwgLjgpO1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgd2lkdGg6IDU5JTtcXG4gICAgYm94LXNoYWRvdzogMTBweCAtMTBweCA1MHB4ICNlOWUzZTM7XFxufVxcblxcbi5saSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOiByZ2IoNzIsIDcwLCA3MCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbm1haW4ge1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDZyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZy10b3A6IDE1cmVtO1xcbn1cXG5cXG5oNCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgY29sb3I6IGdvbGQ7XFxufVxcblxcbmg1IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBjb2xvcjogZ29sZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG5cXG5oMyB7XFxuICAgIGNvbG9yOiB0b21hdG87XFxufVxcblxcbmgyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0yNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgY29sb3I6IHRvbWF0bztcXG5cXG59XFxuXFxuLmljb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgZ29sZGVucm9kIDFweDtcXG59XFxuXFxuaW1nIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNTUsIDI1NSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZy10b3A6IDEwcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGNvbHVtbi1nYXA6IDNyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAtMjVyZW07XFxufVxcblxcbi5jb250YWluZXIgPiAqIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbmFydGljbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuI2Zvcm0tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxufVxcblxcbiNmb3JtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNSwgMTczLCAxNzMpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnJlbTtcXG4gICAgcGFkZGluZy10b3A6IDEwcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDAsMCwwLCAuNCksIHJnYigwLDAsMCwuNCkpLCB1cmwoLi9pbWFnZXMvY29mZmVlLTMxMjA3NTBfMTI4MC5qcGcpO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjIpO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGNvbG9yOmdvbGRlbnJvZDtcXG4gICAgYm9yZGVyOiBzb2xpZCBhenVyZSAxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5pbnB1dDpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBzb2xpZCBncmVlbiAycHg7XFxufVxcblxcbmlucHV0OmludmFsaWQ6OmFmdGVyIHtcXG4gICAgYm9yZGVyOiBzb2xpZCByZWQgMnB4O1xcbn1cXG5cXG5pbnB1dDp2YWxpZCB7XFxuICAgIGJvcmRlcjogc29saWQgZ3JlZW4gM3B4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSwgaW5wdXRbdHlwZT1cXFwidGltZVxcXCJdLCBpbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXXtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZW1haWxcXFwiXSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcbn0gXFxuXFxuYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiBhenVyZTtcXG4gICAgcGFkZGluZy10b3A6IC41cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogLjRyZW07XFxufVxcblxcbiNyYWRpbyB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI3JhZGlvID4gKiB7XFxuICAgIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuaDEge1xcbiAgICBjb2xvcjogdG9tYXRvO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCBhenVyZSAxcHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICBuYXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMnJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI1NSwgMjU1LCAuOCk7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gICAgXFxuXFxuICAgIG1haW4ge1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI1NSwgMjU1LCAuNSk7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAubWVudXtcXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgcm93LWdhcDogMXJlbTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNXJlbTtcXG4gICAgfVxcblxcblxcbiAgICBoMiB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogLTVyZW07XFxuICAgIH1cXG5cXG4gICAgaDUge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIH1cXG5cXG4gICAgI2Zvcm0tY29udGFpbmVyIHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB9XFxuXFxuICAgICNmb3JtIHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSwgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLCBpbnB1dFt0eXBlPVxcXCJ0aW1lXFxcIl0sIGlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJde1xcbiAgICAgICAgd2lkdGg6IDIwcmVtO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIH1cXG59XFxuXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuLy4vc3R5bGUuY3NzXCJcbmltcG9ydCBmYkljb24gZnJvbSBcIi4vaWNvbnMvZmFjZWJvb2tfNDQ5NDQ3OS5wbmdcIlxuaW1wb3J0IGlnSWNvbiBmcm9tIFwiLi9pY29ucy9pbnN0YWdyYW1fMjExMTQ2My5wbmdcIlxuaW1wb3J0IHR3aXR0ZXJJY29uIGZyb20gXCIuL2ljb25zL3R3aXR0ZXJfNDQ5NDQ3Ny5wbmdcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJIb21lKCkge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIGNvbnN0IGljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBcbiAgICBcbiAgIGxldCBpdGVtcyA9IFsnSG9tZScsICdNZW51JywgJ1Jlc2VydmF0aW9uJywgJ0NvbnRhY3QnXTtcblxuICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgYXJyYXkgYW5kIGNyZWF0ZSBhbiBsaSBlbGVtZW50IGZvciBlYWNoIGl0ZW1cbiAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGkudGV4dENvbnRlbnQgPSBpdGVtO1xuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwibGlcIilcbiAgICAgICAgbGkuaWQgPSBpdGVtXG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIilcbiAgICBjb25zdCByZXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcbiAgICByZXN0TmFtZS50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBGZW50YWxlIFJlc3RhdXJhbnRcIjtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiV2Ugc2VydmUgZGVsaWNpb3VzIEV0aGlvcGlhbiBhbmQgaW50ZXJuYXRpb25hbCBjdWlzaW5lIG1hZGUgd2l0aCBmcmVzaCwgbG9jYWxseS1zb3VyY2VkIGluZ3JlZGllbnRzaXMuXCI7XG4gICAgaDQudGV4dENvbnRlbnQgPSBcIkNvbWUgam9pbiB1cyBhbmQgZGlzY292ZXIgdGhlIHRydWUgZXNzZW5jZSBvZiBFdGhpb3BpYW4gY3Vpc2luZS5cIjtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIilcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHJlc3ROYW1lKTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGg0KVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbilcblxuXG4gICAgbGV0IGZiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsZXQgaWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGxldCB0d2l0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGZiLnNyYyA9IGZiSWNvbjtcbiAgICBpZy5zcmMgPSBpZ0ljb247XG4gICAgdHdpdHRlci5zcmMgPSB0d2l0dGVySWNvbjtcblxuICAgIGljb25zLmFwcGVuZENoaWxkKGZiKTtcbiAgICBpY29ucy5hcHBlbmRDaGlsZChpZyk7XG4gICAgaWNvbnMuYXBwZW5kQ2hpbGQodHdpdHRlcik7XG4gICAgaWNvbnMuY2xhc3NMaXN0LmFkZCgnaWNvbnMnKVxuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChpY29ucylcblxuICAgIHJldHVybiB7IG5hdiwgbWFpbn1cblxufVxuXG4iLCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJPdXIgTWVudVwiO1xuXG4gICAgY29uc3QgZHJpbmtzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkcmlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG4gICAgZHJpbmtzLnRleHRDb250ZW50ID0gXCJEUklOS1NcIjtcbiAgICBjb25zdCB3YXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHdhdGVyLnRleHRDb250ZW50ID0gXCJNaW5lcmFsIFdhdGVyXCI7XG4gICAgY29uc3Qgd2F0ZXJQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgd2F0ZXJQcmljZS50ZXh0Q29udGVudCA9IFwiJCAyLjAwXCI7XG4gICAgY29uc3QgYXJ0V2F0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgICBjb25zdCBqdWljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGp1aWNlLnRleHRDb250ZW50PSBcIkZyZXNoIEZydWl0IEp1aWNlXCI7XG4gICAgY29uc3QganVpY2VQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGp1aWNlUHJpY2UudGV4dENvbnRlbnQgPSBcIiQgMi4wMFwiO1xuICAgIGNvbnN0IGFydEp1aWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgY29uc3Qgd2luZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHdpbmUudGV4dENvbnRlbnQgPSBcIldpbmVzXCI7XG4gICAgY29uc3Qgd2luZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgd2luZVByaWNlLnRleHRDb250ZW50ID0gXCIkIDIuMDBcIjtcbiAgICBjb25zdCBhcnRXaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgXG4gICAgYXJ0V2F0ZXIuYXBwZW5kQ2hpbGQod2F0ZXIpO1xuICAgIGFydFdhdGVyLmFwcGVuZENoaWxkKHdhdGVyUHJpY2UpO1xuICAgIGFydEp1aWNlLmFwcGVuZENoaWxkKGp1aWNlKTtcbiAgICBhcnRKdWljZS5hcHBlbmRDaGlsZChqdWljZVByaWNlKTtcbiAgICBhcnRXaW5lLmFwcGVuZENoaWxkKHdpbmUpO1xuICAgIGFydFdpbmUuYXBwZW5kQ2hpbGQod2luZVByaWNlKTtcbiAgICBkcmlua3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZHJpbmtzKTtcbiAgICBkcmlua3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYXJ0V2F0ZXIpO1xuICAgIGRyaW5rc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhcnRKdWljZSk7XG4gICAgZHJpbmtzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFydFdpbmUpO1xuXG4gICAgXG5cbiAgICBjb25zdCBzYWxhZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBzYWxhZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG4gICAgc2FsYWRzLnRleHRDb250ZW50ID0gXCJTQUxBRFNcIjtcbiAgICBjb25zdCBndWFjYW1vbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBndWFjYW1vbGUudGV4dENvbnRlbnQgPSBcIkd1YWNhbW9sZSBTYWxhZFwiO1xuICAgIGNvbnN0IGd1YWNhbW9sZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZ3VhY2Ftb2xlUHJpY2UudGV4dENvbnRlbnQgPSBcIiQgMTAuMDBcIjtcbiAgICBjb25zdCBhcnRHdWFjYW1vbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgICBjb25zdCBjaGlja2VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY2hpY2tlbi50ZXh0Q29udGVudCA9IFwiQ2hpY2tlbiBTYWxhZFwiO1xuICAgIGNvbnN0IGNoaWNrZW5QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNoaWNrZW5QcmljZS50ZXh0Q29udGVudCA9IFwiJCAxMC4wMFwiO1xuICAgIGNvbnN0IGFydENoaWNrZW4gID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG5cbiAgICBjb25zdCBjb2JiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29iYi50ZXh0Q29udGVudCA9IFwiQ29iYiBTYWxhZFwiO1xuICAgIGNvbnN0IGNvYmJQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvYmJQcmljZS50ZXh0Q29udGVudCA9IFwiJCAxMC4wMFwiO1xuICAgIGNvbnN0IGFydENvYmIgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgXG4gICAgYXJ0R3VhY2Ftb2xlLmFwcGVuZENoaWxkKGd1YWNhbW9sZSk7XG4gICAgYXJ0R3VhY2Ftb2xlLmFwcGVuZENoaWxkKGd1YWNhbW9sZVByaWNlKTtcbiAgICBhcnRDaGlja2VuLmFwcGVuZENoaWxkKGNoaWNrZW4pO1xuICAgIGFydENoaWNrZW4uYXBwZW5kQ2hpbGQoY2hpY2tlblByaWNlKTtcbiAgICBhcnRDb2JiLmFwcGVuZENoaWxkKGNvYmIpO1xuICAgIGFydENvYmIuYXBwZW5kQ2hpbGQoY29iYlByaWNlKTtcbiAgICBzYWxhZENvbnRhaW5lci5hcHBlbmRDaGlsZChzYWxhZHMpO1xuICAgIHNhbGFkQ29udGFpbmVyLmFwcGVuZENoaWxkKGFydEd1YWNhbW9sZSk7XG4gICAgc2FsYWRDb250YWluZXIuYXBwZW5kQ2hpbGQoYXJ0Q2hpY2tlbik7XG4gICAgc2FsYWRDb250YWluZXIuYXBwZW5kQ2hpbGQoYXJ0Q29iYik7XG5cblxuICAgIGNvbnN0IG1haW5Db3Vyc2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgbWFpbkNvdXJzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbiAgICBtYWluQ291cnNlLnRleHRDb250ZW50ID0gXCJNYWluIENvdXJzZXNcIjtcbiAgICBjb25zdCBncmlsbGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZ3JpbGxlZC50ZXh0Q29udGVudCA9IFwiR3JpbGxlZCBGaXNoIEFuZCBQb3RhdG9lc1wiO1xuICAgIGNvbnN0IGdyaWxsZWRQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGdyaWxsZWRQcmljZS50ZXh0Q29udGVudCA9IFwiJCAyMC4wMFwiO1xuICAgIGNvbnN0IGFydEdyaWxsZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgICBjb25zdCByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcmljZS50ZXh0Q29udGVudCA9IFwiQ2hpY2tlbiBBbmQgUmljZVwiO1xuICAgIGNvbnN0IHJpY2VQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHJpY2VQcmljZS50ZXh0Q29udGVudCA9IFwiJCAyMC4wMFwiO1xuICAgIGNvbnN0IGFydFJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgICBjb25zdCB0dXJreSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHR1cmt5LnRleHRDb250ZW50ID0gXCJUdXJreSBBbmQgSGFtIFBpZVwiO1xuICAgIGNvbnN0IHR1cmt5UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBhcnRUdXJreSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICAgIHR1cmt5UHJpY2UudGV4dENvbnRlbnQgPSBcIiQgMjAuMDBcIjtcbiAgICBcbiAgICBhcnRHcmlsbGVkLmFwcGVuZENoaWxkKGdyaWxsZWQpO1xuICAgIGFydEdyaWxsZWQuYXBwZW5kQ2hpbGQoZ3JpbGxlZFByaWNlKTtcbiAgICBhcnRSaWNlLmFwcGVuZENoaWxkKHJpY2UpO1xuICAgIGFydFJpY2UuYXBwZW5kQ2hpbGQocmljZVByaWNlKTtcbiAgICBhcnRUdXJreS5hcHBlbmRDaGlsZCh0dXJreSk7XG4gICAgYXJ0VHVya3kuYXBwZW5kQ2hpbGQodHVya3lQcmljZSk7XG4gICAgbWFpbkNvdXJzZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQ291cnNlKTtcbiAgICBtYWluQ291cnNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGFydEdyaWxsZWQpO1xuICAgIG1haW5Db3Vyc2VDb250YWluZXIuYXBwZW5kQ2hpbGQoYXJ0R3JpbGxlZCk7XG4gICAgbWFpbkNvdXJzZUNvbnRhaW5lci5hcHBlbmRDaGlsZChhcnRSaWNlKTtcbiAgICBtYWluQ291cnNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGFydFR1cmt5KTtcblxuXG5cbiAgICBjb25zdCBkZXNzZXJ0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGRlc3NlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG4gICAgZGVzc2VydC50ZXh0Q29udGVudCA9IFwiRGVzc2VydFwiO1xuICAgIGNvbnN0IGZydWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZnJ1aXQudGV4dENvbnRlbnQgPSBcIkZydWl0IEFuZCBDcmVhbVwiO1xuICAgIGNvbnN0IGZydWl0UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmcnVpdFByaWNlLnRleHRDb250ZW50ID0gXCIkIDUuMDBcIjtcbiAgICBjb25zdCBhcnRGcnVpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICAgIGNvbnN0IGFwcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYXBwbGUudGV4dENvbnRlbnQgPSBcIkFwcGxlIFBpZVwiO1xuICAgIGNvbnN0IGFwcGxlUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBhcHBsZVByaWNlLnRleHRDb250ZW50ID0gXCIkIDUuMDBcIjtcbiAgICBjb25zdCBhcnRBcHBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICAgIGNvbnN0IGNyZWFtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY3JlYW0udGV4dENvbnRlbnQgPSBcIkljZSBDcmVhbVwiO1xuICAgIGNvbnN0IGNyZWFtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjcmVhbVByaWNlLnRleHRDb250ZW50ID0gXCIkIDUuMDBcIjtcbiAgICBjb25zdCBhcnRDcmVhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICAgIFxuICAgIGFydEZydWl0LmFwcGVuZENoaWxkKGZydWl0KTtcbiAgICBhcnRGcnVpdC5hcHBlbmRDaGlsZChmcnVpdFByaWNlKTtcbiAgICBhcnRDcmVhbS5hcHBlbmRDaGlsZChjcmVhbSk7XG4gICAgYXJ0Q3JlYW0uYXBwZW5kQ2hpbGQoY3JlYW1QcmljZSk7XG4gICAgYXJ0QXBwbGUuYXBwZW5kQ2hpbGQoYXBwbGUpO1xuICAgIGFydEFwcGxlLmFwcGVuZENoaWxkKGFwcGxlUHJpY2UpO1xuICAgIGRlc3NlcnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzc2VydCk7XG4gICAgZGVzc2VydENvbnRhaW5lci5hcHBlbmRDaGlsZChhcnRGcnVpdCk7XG4gICAgZGVzc2VydENvbnRhaW5lci5hcHBlbmRDaGlsZChhcnRBcHBsZSk7XG4gICAgZGVzc2VydENvbnRhaW5lci5hcHBlbmRDaGlsZChhcnRDcmVhbSk7XG5cblxuICAgIFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQ291cnNlQ29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2FsYWRDb250YWluZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNzZXJ0Q29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHJpbmtzQ29udGFpbmVyKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKVxuXG4gICAgbWVudS5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKVxuXG4gICAgcmV0dXJuIHsgbWVudSB9O1xuXG59IiwiZXhwb3J0IGNvbnN0IGZvcm0gPSBgPGRpdiBpZCA9IFwiZm9ybS1jb250YWluZXJcIj5cbjxzZWN0aW9uIGlkID0gXCJmb3JtXCI+XG5cblxuPGgxPkJvb2sgYSBUYWJsZTwvaDE+XG5cbjxmb3JtPlxuICAgIFxuICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJib29raW5nX2RhdGVcIj5EYXRlOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiYm9va2luZ19kYXRlXCIgbmFtZT1cImJvb2tpbmdfZGF0ZVwiIHJlcXVpcmVkPiAgIFxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJib29raW5nX3RpbWVcIj5UaW1lOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGltZVwiIGlkPVwiYm9va2luZ190aW1lXCIgbmFtZT1cImJvb2tpbmdfdGltZVwiIHJlcXVpcmVkPiAgIFxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJwZW9wbGVcIj5HdWVzdHMgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cInBlb3BsZVwiIG1pbj1cIjFcIiBtYXg9XCI4XCIgbmFtZT1cInBlb3BsZVwiIHJlcXVpcmVkPiAgICAgICAgXG4gICAgPC9kaXY+XG4gICAgPGRpdiBpZCA9IFwicmFkaW9cIj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiYWdyZWVcIiBuYW1lPVwicGxhY2VcIiByZXF1aXJlZCBjaGVja2VkPiBcbiAgICAgICAgICAgIEluZG9vclxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJhZ3JlZVwiIG5hbWU9XCJwbGFjZVwiIHJlcXVpcmVkPiBcbiAgICAgICAgICAgIE91dGRvb3JcbiAgICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbF9hZGRyZXNzXCIgbmFtZT1cImVtYWlsX2FkZHJlc3NcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIiByZXF1aXJlZD5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Cb29rIE5vdzwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbjwvc2VjdGlvbj5cbjwvZGl2PmA7XG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcmVuZGVySG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgcmVuZGVyTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBmb3JtIH0gZnJvbSBcIi4vcmVzZXJ2YXRpb25cIjtcblxuY29uc3QgYXBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmFwcC5jbGFzc0xpc3QuYWRkKFwiYXBwXCIpO1xuXG5mdW5jdGlvbiByZW5kZXJuYXZCYXIoKSB7XG4gICAgLy9jb25zdCBhcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIFxuICAgIC8vYXBwLmFwcGVuZENoaWxkKCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJIb21lKCkubmF2KTtcblxufVxuXG5mdW5jdGlvbiBtYWluQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIGFwcC5hcHBlbmRDaGlsZChjb21wb25lbnQpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXBwKTtcbn1cblxucmVuZGVybmF2QmFyKCk7XG5tYWluQ29tcG9uZW50KHJlbmRlckhvbWUoKS5tYWluKTtcblxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjTWVudVwiKTtcblxubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwXCIpO1xuICAgIGFwcC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIG1haW5Db21wb25lbnQocmVuZGVyTWVudSgpLm1lbnUpO1xufSlcblxuY29uc3QgYm9vayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjUmVzZXJ2YXRpb25cIik7XG5cbmJvb2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcFwiKTtcbiAgICBhcHAuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBhcHAuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgZm9ybSk7XG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9