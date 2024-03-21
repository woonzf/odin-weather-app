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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/Micro5-Regular.ttf */ "./src/font/Micro5-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pexels-prakash-aryal-38326.jpg */ "./src/images/pexels-prakash-aryal-38326.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --width-boxfc: 15vh;
    --gap-fc: 1vw;
    --width-info: calc(3*var(--width-boxfc) + 2*var(--gap-fc));
    --padding-info: calc(var(--width-info) * 0.3 / 3);
}

@font-face {
    font-family: "Micro 5";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
    font-weight: 400;
    font-style: normal;
}

* {
    margin: 0;
    padding: 0;
    font-family: "Micro 5";
    font-size: 24px;
    color: white;
}

body {
    box-sizing: border-box;
    height: 100vh;
    padding: 30px 0 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    /* Photo by Prakash Aryal: https://www.pexels.com/photo/black-mountain-38326/ */
    background-size: cover;
    background-position: center;
}

a {
    text-decoration: none;
}

#search > form {
    display: flex;
    justify-content: center;
    gap: 10px;
}

#location {
    width: 200px;
    border-radius: 10px;
    border: 1px solid white;
    text-indent: 12px;
    outline: none;
    background-color: transparent;
}

#location::placeholder {
    color: white;
}

#location + span {
    position: relative;
    color: rgb(255, 84, 84);
}

#location + span::before {
    position: absolute;
    bottom: -25px;
    left: calc(-200px - 10px);
    width: 300px;
}

.invalid + span::before {
    content: "Please enter a location";
}

.error + span::before {
    content: "No matching location found";
}

#location:hover,
#location:focus,
#submit-location:hover {
    box-shadow: 1px 1px 10px grey;
}

#submit-location {
    width: 80px;
    border-radius: 10px;
    border: 1px solid white;
    background-color: transparent;
}

.bg-info {
    background-color: rgb(0, 0, 0, 0.1);
}

.card-info {
    box-sizing: border-box;
    height: 50vh;
    width: var(--width-info);
    border-radius: 20px;
    padding: var(--padding-info);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.sub-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.sub-info > div {
    text-align: end;
}

#date-time > div:first-of-type {
    margin-bottom: -10px;
}

#date-time,
#condition {
    text-align: center;
}

#weather {
    width: 300px;
    display: flex;
    justify-content: space-evenly;
}

#condition {
    min-width: 80px;
    max-width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-grid {
    display: grid;
    grid-template-columns: repeat(2, calc(var(--width-info) * 0.35));
    grid-template-rows: auto;
    column-gap: var(--padding-info);
    row-gap: 2vh;
}

#forecast {
    display: flex;
    flex-direction: row;
    gap: var(--gap-fc);
}

.box-forecast {
    box-sizing: border-box;
    height: 20vh;
    width: var(--width-boxfc);
    border-radius: 10px;
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

#footer {
    height: 40px;
    width: 310px;
    display: flex;
    align-items: center;
    gap: 50px;
}

#footer a {
    display: flex;
    align-items: center;
    gap: 5px;
}

#footer > a {
    height: 40px;
    width: 40px;
    border-radius: 20px;
}

#footer > a > span {
    margin-top: 4px;
}

#footer a:hover {
    box-shadow: 1px 1px 10px white;
    text-shadow: 1px 1px 10px white;
}

#wrapper {
    width: 190px;
}

#wrapper > a {
    display: flex;
    justify-content: center;
}

#wrapper > a:hover {
    box-shadow: none;
}

/* Image */
#icon-location,
#icon-github,
.sub-info > img,
#wrapper a > img {
    height: 40px;
}

#icon {
    height: 80px;
}

#wrapper a:hover > img {
    height: 45px;
}

/* Font size */
#date-time > div:last-of-type,
#weather > div,
.sub-info div {
    font-size: 32px;
}

#name {
    font-size: 40px;
    text-align: center;
}

#wind > div div {
    font-size: 32px;
    line-height: 80%;
}

.box-forecast > div:first-of-type {
    font-size: 36px;
}

.box-forecast > div {
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Mobile */
@media screen and (max-aspect-ratio: 2/3) {
    #location {
        width: 40vw;
    }

    #submit-location {
        width: 20vw;
    }
    
    .card-info {
        width: 90vw;
    }

    .card-grid {
        grid-template-columns: repeat(2, calc((90vw - 30vw) / 2));
        column-gap: 10vw;
    }

    .box-forecast {
        width: calc((90vw - 2*var(--gap-fc)) / 3);
    }

    * {
        font-size: 18px;
    }

    #date-time > div:last-of-type,
    #weather > div,
    .sub-info div {
        font-size: 24px;
    }

    #name {
        font-size: 36px;
    }

    #wind > div div {
        font-size: 24px;
        line-height: 80%;
    }

    .sub-info > img {
        height: 32px;
    }
}

/* Loading */
.hide {
    display: none;
}

#loading {
    justify-content: center;
}

#loading > img {
    animation: spin 1s infinite linear;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.blur {
    filter: blur(3px);   
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --width-boxfc: 15vh;\n    --gap-fc: 1vw;\n    --width-info: calc(3*var(--width-boxfc) + 2*var(--gap-fc));\n    --padding-info: calc(var(--width-info) * 0.3 / 3);\n}\n\n@font-face {\n    font-family: \"Micro 5\";\n    src: url(./font/Micro5-Regular.ttf) format(\"truetype\");\n    font-weight: 400;\n    font-style: normal;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: \"Micro 5\";\n    font-size: 24px;\n    color: white;\n}\n\nbody {\n    box-sizing: border-box;\n    height: 100vh;\n    padding: 30px 0 30px 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    background-image: url(\"./images/pexels-prakash-aryal-38326.jpg\");\n    /* Photo by Prakash Aryal: https://www.pexels.com/photo/black-mountain-38326/ */\n    background-size: cover;\n    background-position: center;\n}\n\na {\n    text-decoration: none;\n}\n\n#search > form {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\n#location {\n    width: 200px;\n    border-radius: 10px;\n    border: 1px solid white;\n    text-indent: 12px;\n    outline: none;\n    background-color: transparent;\n}\n\n#location::placeholder {\n    color: white;\n}\n\n#location + span {\n    position: relative;\n    color: rgb(255, 84, 84);\n}\n\n#location + span::before {\n    position: absolute;\n    bottom: -25px;\n    left: calc(-200px - 10px);\n    width: 300px;\n}\n\n.invalid + span::before {\n    content: \"Please enter a location\";\n}\n\n.error + span::before {\n    content: \"No matching location found\";\n}\n\n#location:hover,\n#location:focus,\n#submit-location:hover {\n    box-shadow: 1px 1px 10px grey;\n}\n\n#submit-location {\n    width: 80px;\n    border-radius: 10px;\n    border: 1px solid white;\n    background-color: transparent;\n}\n\n.bg-info {\n    background-color: rgb(0, 0, 0, 0.1);\n}\n\n.card-info {\n    box-sizing: border-box;\n    height: 50vh;\n    width: var(--width-info);\n    border-radius: 20px;\n    padding: var(--padding-info);\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.sub-info {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.sub-info > div {\n    text-align: end;\n}\n\n#date-time > div:first-of-type {\n    margin-bottom: -10px;\n}\n\n#date-time,\n#condition {\n    text-align: center;\n}\n\n#weather {\n    width: 300px;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n#condition {\n    min-width: 80px;\n    max-width: 200px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.card-grid {\n    display: grid;\n    grid-template-columns: repeat(2, calc(var(--width-info) * 0.35));\n    grid-template-rows: auto;\n    column-gap: var(--padding-info);\n    row-gap: 2vh;\n}\n\n#forecast {\n    display: flex;\n    flex-direction: row;\n    gap: var(--gap-fc);\n}\n\n.box-forecast {\n    box-sizing: border-box;\n    height: 20vh;\n    width: var(--width-boxfc);\n    border-radius: 10px;\n    padding: 10px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n#footer {\n    height: 40px;\n    width: 310px;\n    display: flex;\n    align-items: center;\n    gap: 50px;\n}\n\n#footer a {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n#footer > a {\n    height: 40px;\n    width: 40px;\n    border-radius: 20px;\n}\n\n#footer > a > span {\n    margin-top: 4px;\n}\n\n#footer a:hover {\n    box-shadow: 1px 1px 10px white;\n    text-shadow: 1px 1px 10px white;\n}\n\n#wrapper {\n    width: 190px;\n}\n\n#wrapper > a {\n    display: flex;\n    justify-content: center;\n}\n\n#wrapper > a:hover {\n    box-shadow: none;\n}\n\n/* Image */\n#icon-location,\n#icon-github,\n.sub-info > img,\n#wrapper a > img {\n    height: 40px;\n}\n\n#icon {\n    height: 80px;\n}\n\n#wrapper a:hover > img {\n    height: 45px;\n}\n\n/* Font size */\n#date-time > div:last-of-type,\n#weather > div,\n.sub-info div {\n    font-size: 32px;\n}\n\n#name {\n    font-size: 40px;\n    text-align: center;\n}\n\n#wind > div div {\n    font-size: 32px;\n    line-height: 80%;\n}\n\n.box-forecast > div:first-of-type {\n    font-size: 36px;\n}\n\n.box-forecast > div {\n    height: 36px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* Mobile */\n@media screen and (max-aspect-ratio: 2/3) {\n    #location {\n        width: 40vw;\n    }\n\n    #submit-location {\n        width: 20vw;\n    }\n    \n    .card-info {\n        width: 90vw;\n    }\n\n    .card-grid {\n        grid-template-columns: repeat(2, calc((90vw - 30vw) / 2));\n        column-gap: 10vw;\n    }\n\n    .box-forecast {\n        width: calc((90vw - 2*var(--gap-fc)) / 3);\n    }\n\n    * {\n        font-size: 18px;\n    }\n\n    #date-time > div:last-of-type,\n    #weather > div,\n    .sub-info div {\n        font-size: 24px;\n    }\n\n    #name {\n        font-size: 36px;\n    }\n\n    #wind > div div {\n        font-size: 24px;\n        line-height: 80%;\n    }\n\n    .sub-info > img {\n        height: 32px;\n    }\n}\n\n/* Loading */\n.hide {\n    display: none;\n}\n\n#loading {\n    justify-content: center;\n}\n\n#loading > img {\n    animation: spin 1s infinite linear;\n}\n\n@keyframes spin {\n    from {\n        transform: rotate(0deg);\n    }\n    to {\n        transform: rotate(360deg);\n    }\n}\n\n.blur {\n    filter: blur(3px);   \n}"],"sourceRoot":""}]);
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

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   weather: () => (/* binding */ weather)
/* harmony export */ });
/* harmony import */ var _images_thermometer_custom_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/thermometer-custom.png */ "./src/images/thermometer-custom.png");
/* harmony import */ var _images_human_handsdown_custom_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/human-handsdown-custom.png */ "./src/images/human-handsdown-custom.png");
/* harmony import */ var _images_cloud_custom_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/cloud-custom.png */ "./src/images/cloud-custom.png");
/* harmony import */ var _images_water_custom_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/water-custom.png */ "./src/images/water-custom.png");
/* harmony import */ var _images_weather_windy_custom_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/weather-windy-custom.png */ "./src/images/weather-windy-custom.png");
/* harmony import */ var _images_sun_wireless_custom_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/sun-wireless-custom.png */ "./src/images/sun-wireless-custom.png");







const weather = (() => {
    const name = document.querySelector("#name");
    const dateTime = document.querySelector("#date-time > div:last-of-type");
    const condition = document.querySelector("#condition");
    const icon = document.querySelector("#icon");
    const imgTemp = document.querySelector("#temperature > img");
    const textTemp = document.querySelector("#temperature > div");
    const imgFeel = document.querySelector("#feelslike > img");
    const textFeel = document.querySelector("#feelslike > div");
    const imgCloud = document.querySelector("#cloud > img");
    const textCloud = document.querySelector("#cloud > div");
    const imgHumid = document.querySelector("#humidity > img");
    const textHumid = document.querySelector("#humidity > div");
    const imgWind = document.querySelector("#wind > img");
    const textWindSpd = document.querySelector("#wind > div > div:first-of-type");
    const textWindDir = document.querySelector("#wind > div > div:last-of-type");
    const imgUV = document.querySelector("#uv > img");
    const textUV = document.querySelector("#uv > div");

    function getCurrentInfo(data) {
        const current = data.current;

        name.textContent = data.location.name + ", " + data.location.country;
        dateTime.textContent = current.last_updated.replaceAll("-", ".");
        condition.textContent = current.condition.text;
        icon.src = current.condition.icon;

        imgTemp.src = _images_thermometer_custom_png__WEBPACK_IMPORTED_MODULE_0__;
        textTemp.textContent = current.temp_c + " °C";

        imgFeel.src = _images_human_handsdown_custom_png__WEBPACK_IMPORTED_MODULE_1__;
        textFeel.textContent = current.feelslike_c + " °C";

        imgCloud.src = _images_cloud_custom_png__WEBPACK_IMPORTED_MODULE_2__;
        textCloud.textContent = current.cloud + " %";

        imgHumid.src = _images_water_custom_png__WEBPACK_IMPORTED_MODULE_3__;
        textHumid.textContent = current.humidity + " %";

        imgWind.src = _images_weather_windy_custom_png__WEBPACK_IMPORTED_MODULE_4__;
        textWindSpd.textContent = `${current.wind_kph} KPH`;
        textWindDir.textContent = `${current.wind_degree}° ${current.wind_dir}`;
        
        imgUV.src = _images_sun_wireless_custom_png__WEBPACK_IMPORTED_MODULE_5__;
        textUV.textContent = `UVI ${current.uv}`;
    }

    function getForecastBoxes(data) {
        let boxes = [];
        const fcdays = data.forecast.forecastday;
        
        for (const fcday of fcdays) {
            const box = document.createElement("div");
            box.classList.add("box-forecast", "bg-info");

            const date = document.createElement("div");
            date.textContent = _getMonthDate(fcday);

            const icon = document.createElement("img");
            icon.src = fcday.day.condition.icon;

            const temp = document.createElement("div");
            temp.textContent = `${fcday.day.mintemp_c} ~ ${fcday.day.maxtemp_c} °C`;

            box.append(date, icon, temp);
            boxes.push(box);
        }
        
        return boxes;
    }

    function _getMonthDate(fcday) {
        const dateSplit = fcday.date.split("-");
        return `${dateSplit[1]}.${dateSplit[2]}`;
    }

    return { getCurrentInfo, getForecastBoxes };
})()



/***/ }),

/***/ "./src/font/Micro5-Regular.ttf":
/*!*************************************!*\
  !*** ./src/font/Micro5-Regular.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e2dd767cdcb98d23917f.ttf";

/***/ }),

/***/ "./src/images/cloud-custom.png":
/*!*************************************!*\
  !*** ./src/images/cloud-custom.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8208fbce737ca17fa12f.png";

/***/ }),

/***/ "./src/images/github-mark-white.png":
/*!******************************************!*\
  !*** ./src/images/github-mark-white.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "925aa8e685ab0217bb34.png";

/***/ }),

/***/ "./src/images/human-handsdown-custom.png":
/*!***********************************************!*\
  !*** ./src/images/human-handsdown-custom.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ef36b358626f5375ff1.png";

/***/ }),

/***/ "./src/images/loading-custom.png":
/*!***************************************!*\
  !*** ./src/images/loading-custom.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05cb90db30b7f8c923c6.png";

/***/ }),

/***/ "./src/images/map-marker-custom.png":
/*!******************************************!*\
  !*** ./src/images/map-marker-custom.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6fb5ffa54641d71852ba.png";

/***/ }),

/***/ "./src/images/pexels-prakash-aryal-38326.jpg":
/*!***************************************************!*\
  !*** ./src/images/pexels-prakash-aryal-38326.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16d76c3b3c3f0cf06f57.jpg";

/***/ }),

/***/ "./src/images/sun-wireless-custom.png":
/*!********************************************!*\
  !*** ./src/images/sun-wireless-custom.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da91d795df358be9d2ca.png";

/***/ }),

/***/ "./src/images/sun.png":
/*!****************************!*\
  !*** ./src/images/sun.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b52e54980c4ed05e934.png";

/***/ }),

/***/ "./src/images/thermometer-custom.png":
/*!*******************************************!*\
  !*** ./src/images/thermometer-custom.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d69e310fab2b2efb9740.png";

/***/ }),

/***/ "./src/images/water-custom.png":
/*!*************************************!*\
  !*** ./src/images/water-custom.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4cd4fd8fb9702447e01c.png";

/***/ }),

/***/ "./src/images/weather-windy-custom.png":
/*!*********************************************!*\
  !*** ./src/images/weather-windy-custom.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "73624e7bb94e2e5868f9.png";

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_sun_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/sun.png */ "./src/images/sun.png");
/* harmony import */ var _images_map_marker_custom_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/map-marker-custom.png */ "./src/images/map-marker-custom.png");
/* harmony import */ var _images_github_mark_white_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/github-mark-white.png */ "./src/images/github-mark-white.png");
/* harmony import */ var _images_loading_custom_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/loading-custom.png */ "./src/images/loading-custom.png");
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weather */ "./src/weather.js");








const page = (() => {
    const imgFav = document.querySelector("link");
    const icon = document.querySelector("#icon-location");
    const image = document.querySelector("#icon-github");
    const imgLoad = document.querySelector("#loading > img");
    const info = document.querySelector("#info > div:first-of-type");
    const loading = document.querySelector("#loading");
    const input = document.querySelector("#location");
    const submit = document.querySelector("#submit-location");
    const forecast = document.querySelector("#forecast");
    let boxesForecast = null;
    const queryAPI = "https://api.weatherapi.com/v1/forecast.json?key=762bb06944f34a6082b34316241001&days=3&q="
    
    function init() {
        document.title = "Weather App";
        _initIcons();
        _initSearch();
        _getWeatherAPI("Malaysia");
    }

    function _initIcons() {
        imgFav.href = _images_sun_png__WEBPACK_IMPORTED_MODULE_1__;
        icon.src = _images_map_marker_custom_png__WEBPACK_IMPORTED_MODULE_2__;
        image.src = _images_github_mark_white_png__WEBPACK_IMPORTED_MODULE_3__;
        imgLoad.src = _images_loading_custom_png__WEBPACK_IMPORTED_MODULE_4__;
    }

    function _getWeatherAPI(location) {
        _startLoading();
        fetch (queryAPI + location, {mode: 'cors'})
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                _stopLoading();
                if (response.error) {
                    _removeErrors();
                    input.classList.add("error");
                }
                else {
                    _removeErrors();
                    _weather__WEBPACK_IMPORTED_MODULE_5__.weather.getCurrentInfo(response);
                    _createForecast(response);
                }
            });
    }

    function _createForecast(data) {
        while (forecast.children.length > 0) forecast.removeChild(forecast.lastChild);
        const boxes = _weather__WEBPACK_IMPORTED_MODULE_5__.weather.getForecastBoxes(data);
        for (const box of boxes) forecast.append(box);
    }

    function _initSearch() {
        submit.onclick = function(e) {
            e.preventDefault();
            if (input.value == "") {
                _removeErrors();
                input.classList.add("invalid");
            } else {
                _getWeatherAPI(input.value);
                input.value = "";
            }
        }
    }

    function _removeErrors() {
        input.classList.remove("invalid", "error");
    }

    function _startLoading() {
        info.classList.add("hide");
        loading.classList.remove("hide");

        boxesForecast = document.querySelectorAll(".box-forecast");
        boxesForecast.forEach(box => {
            box.classList.add("blur");
        });
    }

    function _stopLoading() {
        setTimeout(() => {}, 5000);
        info.classList.remove("hide");
        loading.classList.add("hide");
        
        boxesForecast.forEach(box => {
            box.classList.remove("blur");
        });
    }

    return { init }
})()

page.init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsK0hBQTRDO0FBQ3hGLDRDQUE0QywySkFBMEQ7QUFDdEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFlBQVksVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxRQUFRLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxVQUFVLE9BQU8sVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0s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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNrQjtBQUNtQjtBQUNGO0FBQ0Y7O0FBRWxCOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiw0Q0FBTztBQUM3QixtQkFBbUIsMERBQVk7QUFDL0Isb0JBQW9CLDBEQUFVO0FBQzlCLHNCQUFzQix1REFBVztBQUNqQzs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDLGFBQWE7QUFDbEQ7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDZDQUFPO0FBQzNCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQiw2Q0FBTztBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQsWSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250L01pY3JvNS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3BleGVscy1wcmFrYXNoLWFyeWFsLTM4MzI2LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLXdpZHRoLWJveGZjOiAxNXZoO1xuICAgIC0tZ2FwLWZjOiAxdnc7XG4gICAgLS13aWR0aC1pbmZvOiBjYWxjKDMqdmFyKC0td2lkdGgtYm94ZmMpICsgMip2YXIoLS1nYXAtZmMpKTtcbiAgICAtLXBhZGRpbmctaW5mbzogY2FsYyh2YXIoLS13aWR0aC1pbmZvKSAqIDAuMyAvIDMpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJNaWNybyA1XCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBcIk1pY3JvIDVcIjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5ib2R5IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZzogMzBweCAwIDMwcHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIC8qIFBob3RvIGJ5IFByYWthc2ggQXJ5YWw6IGh0dHBzOi8vd3d3LnBleGVscy5jb20vcGhvdG8vYmxhY2stbW91bnRhaW4tMzgzMjYvICovXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI3NlYXJjaCA+IGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4jbG9jYXRpb24ge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIHRleHQtaW5kZW50OiAxMnB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbiNsb2NhdGlvbjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2xvY2F0aW9uICsgc3BhbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiByZ2IoMjU1LCA4NCwgODQpO1xufVxuXG4jbG9jYXRpb24gKyBzcGFuOjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0yNXB4O1xuICAgIGxlZnQ6IGNhbGMoLTIwMHB4IC0gMTBweCk7XG4gICAgd2lkdGg6IDMwMHB4O1xufVxuXG4uaW52YWxpZCArIHNwYW46OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJQbGVhc2UgZW50ZXIgYSBsb2NhdGlvblwiO1xufVxuXG4uZXJyb3IgKyBzcGFuOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiTm8gbWF0Y2hpbmcgbG9jYXRpb24gZm91bmRcIjtcbn1cblxuI2xvY2F0aW9uOmhvdmVyLFxuI2xvY2F0aW9uOmZvY3VzLFxuI3N1Ym1pdC1sb2NhdGlvbjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IGdyZXk7XG59XG5cbiNzdWJtaXQtbG9jYXRpb24ge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5iZy1pbmZvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmNhcmQtaW5mbyB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgd2lkdGg6IHZhcigtLXdpZHRoLWluZm8pO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogdmFyKC0tcGFkZGluZy1pbmZvKTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnN1Yi1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc3ViLWluZm8gPiBkaXYge1xuICAgIHRleHQtYWxpZ246IGVuZDtcbn1cblxuI2RhdGUtdGltZSA+IGRpdjpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbn1cblxuI2RhdGUtdGltZSxcbiNjb25kaXRpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3dlYXRoZXIge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4jY29uZGl0aW9uIHtcbiAgICBtaW4td2lkdGg6IDgwcHg7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJkLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgY2FsYyh2YXIoLS13aWR0aC1pbmZvKSAqIDAuMzUpKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gICAgY29sdW1uLWdhcDogdmFyKC0tcGFkZGluZy1pbmZvKTtcbiAgICByb3ctZ2FwOiAydmg7XG59XG5cbiNmb3JlY2FzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogdmFyKC0tZ2FwLWZjKTtcbn1cblxuLmJveC1mb3JlY2FzdCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDIwdmg7XG4gICAgd2lkdGg6IHZhcigtLXdpZHRoLWJveGZjKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2Zvb3RlciB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAzMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1MHB4O1xufVxuXG4jZm9vdGVyIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbn1cblxuI2Zvb3RlciA+IGEge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4jZm9vdGVyID4gYSA+IHNwYW4ge1xuICAgIG1hcmdpbi10b3A6IDRweDtcbn1cblxuI2Zvb3RlciBhOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggd2hpdGU7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMTBweCB3aGl0ZTtcbn1cblxuI3dyYXBwZXIge1xuICAgIHdpZHRoOiAxOTBweDtcbn1cblxuI3dyYXBwZXIgPiBhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jd3JhcHBlciA+IGE6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qIEltYWdlICovXG4jaWNvbi1sb2NhdGlvbixcbiNpY29uLWdpdGh1Yixcbi5zdWItaW5mbyA+IGltZyxcbiN3cmFwcGVyIGEgPiBpbWcge1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuI2ljb24ge1xuICAgIGhlaWdodDogODBweDtcbn1cblxuI3dyYXBwZXIgYTpob3ZlciA+IGltZyB7XG4gICAgaGVpZ2h0OiA0NXB4O1xufVxuXG4vKiBGb250IHNpemUgKi9cbiNkYXRlLXRpbWUgPiBkaXY6bGFzdC1vZi10eXBlLFxuI3dlYXRoZXIgPiBkaXYsXG4uc3ViLWluZm8gZGl2IHtcbiAgICBmb250LXNpemU6IDMycHg7XG59XG5cbiNuYW1lIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jd2luZCA+IGRpdiBkaXYge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBsaW5lLWhlaWdodDogODAlO1xufVxuXG4uYm94LWZvcmVjYXN0ID4gZGl2OmZpcnN0LW9mLXR5cGUge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbn1cblxuLmJveC1mb3JlY2FzdCA+IGRpdiB7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogTW9iaWxlICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWFzcGVjdC1yYXRpbzogMi8zKSB7XG4gICAgI2xvY2F0aW9uIHtcbiAgICAgICAgd2lkdGg6IDQwdnc7XG4gICAgfVxuXG4gICAgI3N1Ym1pdC1sb2NhdGlvbiB7XG4gICAgICAgIHdpZHRoOiAyMHZ3O1xuICAgIH1cbiAgICBcbiAgICAuY2FyZC1pbmZvIHtcbiAgICAgICAgd2lkdGg6IDkwdnc7XG4gICAgfVxuXG4gICAgLmNhcmQtZ3JpZCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGNhbGMoKDkwdncgLSAzMHZ3KSAvIDIpKTtcbiAgICAgICAgY29sdW1uLWdhcDogMTB2dztcbiAgICB9XG5cbiAgICAuYm94LWZvcmVjYXN0IHtcbiAgICAgICAgd2lkdGg6IGNhbGMoKDkwdncgLSAyKnZhcigtLWdhcC1mYykpIC8gMyk7XG4gICAgfVxuXG4gICAgKiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG5cbiAgICAjZGF0ZS10aW1lID4gZGl2Omxhc3Qtb2YtdHlwZSxcbiAgICAjd2VhdGhlciA+IGRpdixcbiAgICAuc3ViLWluZm8gZGl2IHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cblxuICAgICNuYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgIH1cblxuICAgICN3aW5kID4gZGl2IGRpdiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDgwJTtcbiAgICB9XG5cbiAgICAuc3ViLWluZm8gPiBpbWcge1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgfVxufVxuXG4vKiBMb2FkaW5nICovXG4uaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuI2xvYWRpbmcge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jbG9hZGluZyA+IGltZyB7XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGluZmluaXRlIGxpbmVhcjtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG59XG5cbi5ibHVyIHtcbiAgICBmaWx0ZXI6IGJsdXIoM3B4KTsgICBcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDBEQUEwRDtJQUMxRCxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsK0RBQXNEO0lBQ3RELGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0Qixl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O1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0kseURBQXlEO1FBQ3pELGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLHlDQUF5QztJQUM3Qzs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7OztRQUdJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQSxZQUFZO0FBQ1o7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0k7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS13aWR0aC1ib3hmYzogMTV2aDtcXG4gICAgLS1nYXAtZmM6IDF2dztcXG4gICAgLS13aWR0aC1pbmZvOiBjYWxjKDMqdmFyKC0td2lkdGgtYm94ZmMpICsgMip2YXIoLS1nYXAtZmMpKTtcXG4gICAgLS1wYWRkaW5nLWluZm86IGNhbGModmFyKC0td2lkdGgtaW5mbykgKiAwLjMgLyAzKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTWljcm8gNVxcXCI7XFxuICAgIHNyYzogdXJsKC4vZm9udC9NaWNybzUtUmVndWxhci50dGYpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogXFxcIk1pY3JvIDVcXFwiO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmc6IDMwcHggMCAzMHB4IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9wZXhlbHMtcHJha2FzaC1hcnlhbC0zODMyNi5qcGdcXFwiKTtcXG4gICAgLyogUGhvdG8gYnkgUHJha2FzaCBBcnlhbDogaHR0cHM6Ly93d3cucGV4ZWxzLmNvbS9waG90by9ibGFjay1tb3VudGFpbi0zODMyNi8gKi9cXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4jc2VhcmNoID4gZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNsb2NhdGlvbiB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIHRleHQtaW5kZW50OiAxMnB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuI2xvY2F0aW9uOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2xvY2F0aW9uICsgc3BhbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29sb3I6IHJnYigyNTUsIDg0LCA4NCk7XFxufVxcblxcbiNsb2NhdGlvbiArIHNwYW46OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtMjVweDtcXG4gICAgbGVmdDogY2FsYygtMjAwcHggLSAxMHB4KTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uaW52YWxpZCArIHNwYW46OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJQbGVhc2UgZW50ZXIgYSBsb2NhdGlvblxcXCI7XFxufVxcblxcbi5lcnJvciArIHNwYW46OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJObyBtYXRjaGluZyBsb2NhdGlvbiBmb3VuZFxcXCI7XFxufVxcblxcbiNsb2NhdGlvbjpob3ZlcixcXG4jbG9jYXRpb246Zm9jdXMsXFxuI3N1Ym1pdC1sb2NhdGlvbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCBncmV5O1xcbn1cXG5cXG4jc3VibWl0LWxvY2F0aW9uIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmJnLWluZm8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLmNhcmQtaW5mbyB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgd2lkdGg6IHZhcigtLXdpZHRoLWluZm8pO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLWluZm8pO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zdWItaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnN1Yi1pbmZvID4gZGl2IHtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG4jZGF0ZS10aW1lID4gZGl2OmZpcnN0LW9mLXR5cGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcXG59XFxuXFxuI2RhdGUtdGltZSxcXG4jY29uZGl0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jd2VhdGhlciB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbiNjb25kaXRpb24ge1xcbiAgICBtaW4td2lkdGg6IDgwcHg7XFxuICAgIG1heC13aWR0aDogMjAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2FyZC1ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgY2FsYyh2YXIoLS13aWR0aC1pbmZvKSAqIDAuMzUpKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICBjb2x1bW4tZ2FwOiB2YXIoLS1wYWRkaW5nLWluZm8pO1xcbiAgICByb3ctZ2FwOiAydmg7XFxufVxcblxcbiNmb3JlY2FzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogdmFyKC0tZ2FwLWZjKTtcXG59XFxuXFxuLmJveC1mb3JlY2FzdCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgd2lkdGg6IHZhcigtLXdpZHRoLWJveGZjKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNmb290ZXIge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiAzMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4jZm9vdGVyIGEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuI2Zvb3RlciA+IGEge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4jZm9vdGVyID4gYSA+IHNwYW4ge1xcbiAgICBtYXJnaW4tdG9wOiA0cHg7XFxufVxcblxcbiNmb290ZXIgYTpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCB3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMTBweCB3aGl0ZTtcXG59XFxuXFxuI3dyYXBwZXIge1xcbiAgICB3aWR0aDogMTkwcHg7XFxufVxcblxcbiN3cmFwcGVyID4gYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jd3JhcHBlciA+IGE6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKiBJbWFnZSAqL1xcbiNpY29uLWxvY2F0aW9uLFxcbiNpY29uLWdpdGh1YixcXG4uc3ViLWluZm8gPiBpbWcsXFxuI3dyYXBwZXIgYSA+IGltZyB7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuXFxuI2ljb24ge1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbiN3cmFwcGVyIGE6aG92ZXIgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxufVxcblxcbi8qIEZvbnQgc2l6ZSAqL1xcbiNkYXRlLXRpbWUgPiBkaXY6bGFzdC1vZi10eXBlLFxcbiN3ZWF0aGVyID4gZGl2LFxcbi5zdWItaW5mbyBkaXYge1xcbiAgICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbiNuYW1lIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN3aW5kID4gZGl2IGRpdiB7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDgwJTtcXG59XFxuXFxuLmJveC1mb3JlY2FzdCA+IGRpdjpmaXJzdC1vZi10eXBlIHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG5cXG4uYm94LWZvcmVjYXN0ID4gZGl2IHtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogTW9iaWxlICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86IDIvMykge1xcbiAgICAjbG9jYXRpb24ge1xcbiAgICAgICAgd2lkdGg6IDQwdnc7XFxuICAgIH1cXG5cXG4gICAgI3N1Ym1pdC1sb2NhdGlvbiB7XFxuICAgICAgICB3aWR0aDogMjB2dztcXG4gICAgfVxcbiAgICBcXG4gICAgLmNhcmQtaW5mbyB7XFxuICAgICAgICB3aWR0aDogOTB2dztcXG4gICAgfVxcblxcbiAgICAuY2FyZC1ncmlkIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGNhbGMoKDkwdncgLSAzMHZ3KSAvIDIpKTtcXG4gICAgICAgIGNvbHVtbi1nYXA6IDEwdnc7XFxuICAgIH1cXG5cXG4gICAgLmJveC1mb3JlY2FzdCB7XFxuICAgICAgICB3aWR0aDogY2FsYygoOTB2dyAtIDIqdmFyKC0tZ2FwLWZjKSkgLyAzKTtcXG4gICAgfVxcblxcbiAgICAqIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgfVxcblxcbiAgICAjZGF0ZS10aW1lID4gZGl2Omxhc3Qtb2YtdHlwZSxcXG4gICAgI3dlYXRoZXIgPiBkaXYsXFxuICAgIC5zdWItaW5mbyBkaXYge1xcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICB9XFxuXFxuICAgICNuYW1lIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgfVxcblxcbiAgICAjd2luZCA+IGRpdiBkaXYge1xcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDgwJTtcXG4gICAgfVxcblxcbiAgICAuc3ViLWluZm8gPiBpbWcge1xcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICB9XFxufVxcblxcbi8qIExvYWRpbmcgKi9cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNsb2FkaW5nIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNsb2FkaW5nID4gaW1nIHtcXG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGluZmluaXRlIGxpbmVhcjtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB9XFxufVxcblxcbi5ibHVyIHtcXG4gICAgZmlsdGVyOiBibHVyKDNweCk7ICAgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGljb25UZW1wIGZyb20gJy4vaW1hZ2VzL3RoZXJtb21ldGVyLWN1c3RvbS5wbmcnO1xuaW1wb3J0IGljb25GZWVsIGZyb20gJy4vaW1hZ2VzL2h1bWFuLWhhbmRzZG93bi1jdXN0b20ucG5nJztcbmltcG9ydCBpY29uQ2xvdWQgZnJvbSAnLi9pbWFnZXMvY2xvdWQtY3VzdG9tLnBuZyc7XG5pbXBvcnQgaWNvbkh1bWlkIGZyb20gJy4vaW1hZ2VzL3dhdGVyLWN1c3RvbS5wbmcnO1xuaW1wb3J0IGljb25XaW5kIGZyb20gJy4vaW1hZ2VzL3dlYXRoZXItd2luZHktY3VzdG9tLnBuZyc7XG5pbXBvcnQgaWNvblVWIGZyb20gJy4vaW1hZ2VzL3N1bi13aXJlbGVzcy1jdXN0b20ucG5nJztcblxuY29uc3Qgd2VhdGhlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKTtcbiAgICBjb25zdCBkYXRlVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZS10aW1lID4gZGl2Omxhc3Qtb2YtdHlwZVwiKTtcbiAgICBjb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmRpdGlvblwiKTtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpY29uXCIpO1xuICAgIGNvbnN0IGltZ1RlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXBlcmF0dXJlID4gaW1nXCIpO1xuICAgIGNvbnN0IHRleHRUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wZXJhdHVyZSA+IGRpdlwiKTtcbiAgICBjb25zdCBpbWdGZWVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmZWVsc2xpa2UgPiBpbWdcIik7XG4gICAgY29uc3QgdGV4dEZlZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZlZWxzbGlrZSA+IGRpdlwiKTtcbiAgICBjb25zdCBpbWdDbG91ZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvdWQgPiBpbWdcIik7XG4gICAgY29uc3QgdGV4dENsb3VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG91ZCA+IGRpdlwiKTtcbiAgICBjb25zdCBpbWdIdW1pZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaHVtaWRpdHkgPiBpbWdcIik7XG4gICAgY29uc3QgdGV4dEh1bWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNodW1pZGl0eSA+IGRpdlwiKTtcbiAgICBjb25zdCBpbWdXaW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3aW5kID4gaW1nXCIpO1xuICAgIGNvbnN0IHRleHRXaW5kU3BkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3aW5kID4gZGl2ID4gZGl2OmZpcnN0LW9mLXR5cGVcIik7XG4gICAgY29uc3QgdGV4dFdpbmREaXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dpbmQgPiBkaXYgPiBkaXY6bGFzdC1vZi10eXBlXCIpO1xuICAgIGNvbnN0IGltZ1VWID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1diA+IGltZ1wiKTtcbiAgICBjb25zdCB0ZXh0VVYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3V2ID4gZGl2XCIpO1xuXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudEluZm8oZGF0YSkge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gZGF0YS5jdXJyZW50O1xuXG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBkYXRhLmxvY2F0aW9uLm5hbWUgKyBcIiwgXCIgKyBkYXRhLmxvY2F0aW9uLmNvdW50cnk7XG4gICAgICAgIGRhdGVUaW1lLnRleHRDb250ZW50ID0gY3VycmVudC5sYXN0X3VwZGF0ZWQucmVwbGFjZUFsbChcIi1cIiwgXCIuXCIpO1xuICAgICAgICBjb25kaXRpb24udGV4dENvbnRlbnQgPSBjdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICAgICAgICBpY29uLnNyYyA9IGN1cnJlbnQuY29uZGl0aW9uLmljb247XG5cbiAgICAgICAgaW1nVGVtcC5zcmMgPSBpY29uVGVtcDtcbiAgICAgICAgdGV4dFRlbXAudGV4dENvbnRlbnQgPSBjdXJyZW50LnRlbXBfYyArIFwiIMKwQ1wiO1xuXG4gICAgICAgIGltZ0ZlZWwuc3JjID0gaWNvbkZlZWw7XG4gICAgICAgIHRleHRGZWVsLnRleHRDb250ZW50ID0gY3VycmVudC5mZWVsc2xpa2VfYyArIFwiIMKwQ1wiO1xuXG4gICAgICAgIGltZ0Nsb3VkLnNyYyA9IGljb25DbG91ZDtcbiAgICAgICAgdGV4dENsb3VkLnRleHRDb250ZW50ID0gY3VycmVudC5jbG91ZCArIFwiICVcIjtcblxuICAgICAgICBpbWdIdW1pZC5zcmMgPSBpY29uSHVtaWQ7XG4gICAgICAgIHRleHRIdW1pZC50ZXh0Q29udGVudCA9IGN1cnJlbnQuaHVtaWRpdHkgKyBcIiAlXCI7XG5cbiAgICAgICAgaW1nV2luZC5zcmMgPSBpY29uV2luZDtcbiAgICAgICAgdGV4dFdpbmRTcGQudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50LndpbmRfa3BofSBLUEhgO1xuICAgICAgICB0ZXh0V2luZERpci50ZXh0Q29udGVudCA9IGAke2N1cnJlbnQud2luZF9kZWdyZWV9wrAgJHtjdXJyZW50LndpbmRfZGlyfWA7XG4gICAgICAgIFxuICAgICAgICBpbWdVVi5zcmMgPSBpY29uVVY7XG4gICAgICAgIHRleHRVVi50ZXh0Q29udGVudCA9IGBVVkkgJHtjdXJyZW50LnV2fWA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Rm9yZWNhc3RCb3hlcyhkYXRhKSB7XG4gICAgICAgIGxldCBib3hlcyA9IFtdO1xuICAgICAgICBjb25zdCBmY2RheXMgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xuICAgICAgICBcbiAgICAgICAgZm9yIChjb25zdCBmY2RheSBvZiBmY2RheXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImJveC1mb3JlY2FzdFwiLCBcImJnLWluZm9cIik7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IF9nZXRNb250aERhdGUoZmNkYXkpO1xuXG4gICAgICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIGljb24uc3JjID0gZmNkYXkuZGF5LmNvbmRpdGlvbi5pY29uO1xuXG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtmY2RheS5kYXkubWludGVtcF9jfSB+ICR7ZmNkYXkuZGF5Lm1heHRlbXBfY30gwrBDYDtcblxuICAgICAgICAgICAgYm94LmFwcGVuZChkYXRlLCBpY29uLCB0ZW1wKTtcbiAgICAgICAgICAgIGJveGVzLnB1c2goYm94KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGJveGVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9nZXRNb250aERhdGUoZmNkYXkpIHtcbiAgICAgICAgY29uc3QgZGF0ZVNwbGl0ID0gZmNkYXkuZGF0ZS5zcGxpdChcIi1cIik7XG4gICAgICAgIHJldHVybiBgJHtkYXRlU3BsaXRbMV19LiR7ZGF0ZVNwbGl0WzJdfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0Q3VycmVudEluZm8sIGdldEZvcmVjYXN0Qm94ZXMgfTtcbn0pKClcblxuZXhwb3J0IHsgd2VhdGhlciB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZmF2SWNvbiBmcm9tICcuL2ltYWdlcy9zdW4ucG5nJztcbmltcG9ydCBsb2NhdGlvbkljb24gZnJvbSAnLi9pbWFnZXMvbWFwLW1hcmtlci1jdXN0b20ucG5nJztcbmltcG9ydCBnaXRIdWJJY29uIGZyb20gJy4vaW1hZ2VzL2dpdGh1Yi1tYXJrLXdoaXRlLnBuZyc7XG5pbXBvcnQgbG9hZGluZ0ljb24gZnJvbSAnLi9pbWFnZXMvbG9hZGluZy1jdXN0b20ucG5nJztcblxuaW1wb3J0IHsgd2VhdGhlciB9IGZyb20gJy4vd2VhdGhlcic7XG5cbmNvbnN0IHBhZ2UgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGltZ0ZhdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaW5rXCIpO1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ljb24tbG9jYXRpb25cIik7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ljb24tZ2l0aHViXCIpO1xuICAgIGNvbnN0IGltZ0xvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvYWRpbmcgPiBpbWdcIik7XG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5mbyA+IGRpdjpmaXJzdC1vZi10eXBlXCIpO1xuICAgIGNvbnN0IGxvYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvYWRpbmdcIik7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2F0aW9uXCIpO1xuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0LWxvY2F0aW9uXCIpO1xuICAgIGNvbnN0IGZvcmVjYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JlY2FzdFwiKTtcbiAgICBsZXQgYm94ZXNGb3JlY2FzdCA9IG51bGw7XG4gICAgY29uc3QgcXVlcnlBUEkgPSBcImh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTc2MmJiMDY5NDRmMzRhNjA4MmIzNDMxNjI0MTAwMSZkYXlzPTMmcT1cIlxuICAgIFxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJXZWF0aGVyIEFwcFwiO1xuICAgICAgICBfaW5pdEljb25zKCk7XG4gICAgICAgIF9pbml0U2VhcmNoKCk7XG4gICAgICAgIF9nZXRXZWF0aGVyQVBJKFwiTWFsYXlzaWFcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2luaXRJY29ucygpIHtcbiAgICAgICAgaW1nRmF2LmhyZWYgPSBmYXZJY29uO1xuICAgICAgICBpY29uLnNyYyA9IGxvY2F0aW9uSWNvbjtcbiAgICAgICAgaW1hZ2Uuc3JjID0gZ2l0SHViSWNvbjtcbiAgICAgICAgaW1nTG9hZC5zcmMgPSBsb2FkaW5nSWNvbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZ2V0V2VhdGhlckFQSShsb2NhdGlvbikge1xuICAgICAgICBfc3RhcnRMb2FkaW5nKCk7XG4gICAgICAgIGZldGNoIChxdWVyeUFQSSArIGxvY2F0aW9uLCB7bW9kZTogJ2NvcnMnfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIF9zdG9wTG9hZGluZygpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBfcmVtb3ZlRXJyb3JzKCk7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF9yZW1vdmVFcnJvcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgd2VhdGhlci5nZXRDdXJyZW50SW5mbyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIF9jcmVhdGVGb3JlY2FzdChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2NyZWF0ZUZvcmVjYXN0KGRhdGEpIHtcbiAgICAgICAgd2hpbGUgKGZvcmVjYXN0LmNoaWxkcmVuLmxlbmd0aCA+IDApIGZvcmVjYXN0LnJlbW92ZUNoaWxkKGZvcmVjYXN0Lmxhc3RDaGlsZCk7XG4gICAgICAgIGNvbnN0IGJveGVzID0gd2VhdGhlci5nZXRGb3JlY2FzdEJveGVzKGRhdGEpO1xuICAgICAgICBmb3IgKGNvbnN0IGJveCBvZiBib3hlcykgZm9yZWNhc3QuYXBwZW5kKGJveCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2luaXRTZWFyY2goKSB7XG4gICAgICAgIHN1Ym1pdC5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKGlucHV0LnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBfcmVtb3ZlRXJyb3JzKCk7XG4gICAgICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9nZXRXZWF0aGVyQVBJKGlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfcmVtb3ZlRXJyb3JzKCkge1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZFwiLCBcImVycm9yXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9zdGFydExvYWRpbmcoKSB7XG4gICAgICAgIGluZm8uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIGxvYWRpbmcuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG5cbiAgICAgICAgYm94ZXNGb3JlY2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm94LWZvcmVjYXN0XCIpO1xuICAgICAgICBib3hlc0ZvcmVjYXN0LmZvckVhY2goYm94ID0+IHtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiYmx1clwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3N0b3BMb2FkaW5nKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHt9LCA1MDAwKTtcbiAgICAgICAgaW5mby5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgbG9hZGluZy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgXG4gICAgICAgIGJveGVzRm9yZWNhc3QuZm9yRWFjaChib3ggPT4ge1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJibHVyXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBpbml0IH1cbn0pKClcblxucGFnZS5pbml0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9