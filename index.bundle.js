"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/header-style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/header-style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --header-color: #61677a;
}

body {
  margin: 0;
  padding: 0;
}

#header {
  width: 100%;
  background-color: var(--header-color);
  padding: 24px 0 24px;
  display: flex;
  align-items: center;
}

#header-title {
  margin: 0;
  font-size: 2.6rem;
}

#header-img {
  height: 75px;
  aspect-ratio: 1 / 1;
  margin-left: 24px;
  position: relative;
  bottom: 5px;
}
`, "",{"version":3,"sources":["webpack://./src/header-style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;AACzB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,qCAAqC;EACrC,oBAAoB;EACpB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;AACb","sourcesContent":[":root {\n  --header-color: #61677a;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n#header {\n  width: 100%;\n  background-color: var(--header-color);\n  padding: 24px 0 24px;\n  display: flex;\n  align-items: center;\n}\n\n#header-title {\n  margin: 0;\n  font-size: 2.6rem;\n}\n\n#header-img {\n  height: 75px;\n  aspect-ratio: 1 / 1;\n  margin-left: 24px;\n  position: relative;\n  bottom: 5px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/sidebar-style.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/sidebar-style.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --sidebar-color: #d8d9da;
  font-size: 17px;
}
ul {
  margin: 0;
}

#sidebar {
  background-color: var(--sidebar-color);
  margin: 0;
  padding: 0;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  overflow-y: auto;
}

#nav-links {
  list-style-type: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  background-color: var(--sidebar-color);
  font-size: 1.2rem;
  width: 60%;
}

.nav-link:hover {
  transform: scale(1.1);
  cursor: pointer;
  filter: brightness(96%);
  transition: 0.07s;
}

.nav-link:active {
  transform: translateY(4px);
  transition: 0.07s;
}

.nav-link-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: min-content;
  gap: 10%;
  margin-left: 24px;
  white-space: nowrap;
}

.nav-link-img {
  width: 30px;
  aspect-ratio: 1 / 1;
}

#addButton {
  border: 0;
  background-color: transparent;
  display: block;
  margin: 0 auto;
  margin-top: 24px;
  height: 100px;
  width: 100px;
  text-align: center;
}

#addButton > img {
  max-width: 100%;
}

#addButton:hover {
  background-color: black;
  color: white;
  cursor: pointer;
  width: 250px;
  font-size: 1.5rem;
  border-radius: 64px;
  transition: 0.1s;
}

#addButton:active {
  transform: translateY(10px);
  transition: 0.07s;
}

#addNewGroup {
  display: flex;
  align-items: center;
  gap: 12px;
  border: 0;
  background-color: var(--sidebar-color);
}

#addNewGroup:hover {
  transform: translateY(-4px);
  cursor: pointer;
  filter: brightness(96%);
  transition: 0.07s;
}
#addNewGroup > img {
  max-width: 32px;
  max-height: 32px;
  flex: 0 0 1;
}

#addNewGroup > p {
  font-size: 1.1rem;
}

#groupSection {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

#groupSectionTitle {
  font-size: 2rem;
  margin: 0;
  padding: 0;
  align-self: start;
  position: relative;
  left: 50px;
}

#groups {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  width: 100%;
}

.group {
  font-size: 1.2rem;
  width: 60%;
  background-color: var(--sidebar-color);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.group:hover {
  filter: brightness(96%);
  cursor: pointer;
  transform: scale(1.1);
  transition: 0.07s;
}
.group:active {
  transform: translateY(4px);
  transition: 0.07s;
}

.group > p {
  margin: 0;
  padding: 0;
}

.close-button {
  visibility: hidden;
  font-size: 1.5rem;
  color: black;
  position: absolute;
  right: 10px;
}
.close-button:hover {
  color: red;
  cursor: progress;
  transition: 0.07s;
}

#groupSection {
  margin: initial 0;
  padding: 0;
}

#group-form {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
  column-gap: 20px;
}

#group-form > input {
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 3;
}

#group-form > button:first-of-type {
  grid-row-start: 2;
}

#group-form > button:last-of-type {
  grid-row-start: 2;
  grid-column-start: 2;
}
`, "",{"version":3,"sources":["webpack://./src/sidebar-style.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,eAAe;AACjB;AACA;EACE,SAAS;AACX;;AAEA;EACE,sCAAsC;EACtC,SAAS;EACT,UAAU;EACV,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,2BAA2B;EAC3B,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,sCAAsC;EACtC,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;EAC1B,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,QAAQ;EACR,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,6BAA6B;EAC7B,cAAc;EACd,cAAc;EACd,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;EAC3B,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,SAAS;EACT,sCAAsC;AACxC;;AAEA;EACE,2BAA2B;EAC3B,eAAe;EACf,uBAAuB;EACvB,iBAAiB;AACnB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,SAAS;EACT,UAAU;EACV,iBAAiB;EACjB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;EACT,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,UAAU;EACV,sCAAsC;EACtC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,qBAAqB;EACrB,iBAAiB;AACnB;AACA;EACE,0BAA0B;EAC1B,iBAAiB;AACnB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,UAAU;EACV,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,8BAA8B;EAC9B,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;AACtB","sourcesContent":[":root {\n  --sidebar-color: #d8d9da;\n  font-size: 17px;\n}\nul {\n  margin: 0;\n}\n\n#sidebar {\n  background-color: var(--sidebar-color);\n  margin: 0;\n  padding: 0;\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 30px;\n  overflow-y: auto;\n}\n\n#nav-links {\n  list-style-type: none;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0;\n}\n\n.nav-link {\n  display: flex;\n  align-items: center;\n  background-color: var(--sidebar-color);\n  font-size: 1.2rem;\n  width: 60%;\n}\n\n.nav-link:hover {\n  transform: scale(1.1);\n  cursor: pointer;\n  filter: brightness(96%);\n  transition: 0.07s;\n}\n\n.nav-link:active {\n  transform: translateY(4px);\n  transition: 0.07s;\n}\n\n.nav-link-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: min-content;\n  gap: 10%;\n  margin-left: 24px;\n  white-space: nowrap;\n}\n\n.nav-link-img {\n  width: 30px;\n  aspect-ratio: 1 / 1;\n}\n\n#addButton {\n  border: 0;\n  background-color: transparent;\n  display: block;\n  margin: 0 auto;\n  margin-top: 24px;\n  height: 100px;\n  width: 100px;\n  text-align: center;\n}\n\n#addButton > img {\n  max-width: 100%;\n}\n\n#addButton:hover {\n  background-color: black;\n  color: white;\n  cursor: pointer;\n  width: 250px;\n  font-size: 1.5rem;\n  border-radius: 64px;\n  transition: 0.1s;\n}\n\n#addButton:active {\n  transform: translateY(10px);\n  transition: 0.07s;\n}\n\n#addNewGroup {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border: 0;\n  background-color: var(--sidebar-color);\n}\n\n#addNewGroup:hover {\n  transform: translateY(-4px);\n  cursor: pointer;\n  filter: brightness(96%);\n  transition: 0.07s;\n}\n#addNewGroup > img {\n  max-width: 32px;\n  max-height: 32px;\n  flex: 0 0 1;\n}\n\n#addNewGroup > p {\n  font-size: 1.1rem;\n}\n\n#groupSection {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n\n#groupSectionTitle {\n  font-size: 2rem;\n  margin: 0;\n  padding: 0;\n  align-self: start;\n  position: relative;\n  left: 50px;\n}\n\n#groups {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 10px;\n  align-items: center;\n  width: 100%;\n}\n\n.group {\n  font-size: 1.2rem;\n  width: 60%;\n  background-color: var(--sidebar-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.group:hover {\n  filter: brightness(96%);\n  cursor: pointer;\n  transform: scale(1.1);\n  transition: 0.07s;\n}\n.group:active {\n  transform: translateY(4px);\n  transition: 0.07s;\n}\n\n.group > p {\n  margin: 0;\n  padding: 0;\n}\n\n.close-button {\n  visibility: hidden;\n  font-size: 1.5rem;\n  color: black;\n  position: absolute;\n  right: 10px;\n}\n.close-button:hover {\n  color: red;\n  cursor: progress;\n  transition: 0.07s;\n}\n\n#groupSection {\n  margin: initial 0;\n  padding: 0;\n}\n\n#group-form {\n  display: grid;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr;\n  row-gap: 20px;\n  column-gap: 20px;\n}\n\n#group-form > input {\n  grid-row-start: 1;\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n\n#group-form > button:first-of-type {\n  grid-row-start: 2;\n}\n\n#group-form > button:last-of-type {\n  grid-row-start: 2;\n  grid-column-start: 2;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#modal {
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
}

#add-todo-window {
  border-radius: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 24px;
  padding: 24px;
}

#add-todo-bg {
  position: absolute;
  z-index: -1;
  max-height: 150%;
  max-width: auto;
}

textarea {
  resize: none;
}

.close {
  font-size: 1.5rem;
  color: black;
  position: absolute;
  right: 0;
  top: 0;
}
.close:hover {
  color: red;
  cursor: pointer;
}

input[type="date"]:hover,
input[type="radio"]:hover,
select:hover {
  cursor: pointer;
}

#priority-container {
  display: flex;
  align-items: center;
  gap: 18px;
}

.priority {
  max-width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
}
.priority > input {
  margin: 0;
}

#title-input {
  width: 90%;
}

#desc-input {
  width: 90%;
}

#date-container {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

#group-container {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

#submit-todo {
  border-radius: 32px;
  outline: none;
  background-color: red;
  border-color: red;
  width: 50%;
  height: min-content;
  font-size: 1.5rem;
  color: white;
}

#submit-todo:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  transform: scale(1.1);
  transition: 0.07s;
}

#submit-todo:active {
  transform: translateY(4px);
  filter: brightness(85%);
  transition: 0.07s;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,OAAO;EACP,MAAM;EACN,UAAU;EACV,oCAAoC;EACpC,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;EAC7B,SAAS;EACT,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,MAAM;AACR;AACA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA;;;EAGE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,cAAc;EACd,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;AACV;AACA;EACE,SAAS;AACX;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,qBAAqB;EACrB,iBAAiB;EACjB,UAAU;EACV,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE;qCACmC;EACnC,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;EAC1B,uBAAuB;EACvB,iBAAiB;AACnB","sourcesContent":["#modal {\n  display: none;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  background-color: rgba(0, 0, 0, 0.7);\n  justify-content: center;\n  align-items: center;\n}\n\n#add-todo-window {\n  border-radius: 16px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  gap: 24px;\n  padding: 24px;\n}\n\n#add-todo-bg {\n  position: absolute;\n  z-index: -1;\n  max-height: 150%;\n  max-width: auto;\n}\n\ntextarea {\n  resize: none;\n}\n\n.close {\n  font-size: 1.5rem;\n  color: black;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.close:hover {\n  color: red;\n  cursor: pointer;\n}\n\ninput[type=\"date\"]:hover,\ninput[type=\"radio\"]:hover,\nselect:hover {\n  cursor: pointer;\n}\n\n#priority-container {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n}\n\n.priority {\n  max-width: 90%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 6px;\n}\n.priority > input {\n  margin: 0;\n}\n\n#title-input {\n  width: 90%;\n}\n\n#desc-input {\n  width: 90%;\n}\n\n#date-container {\n  width: 90%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 24px;\n}\n\n#group-container {\n  width: 90%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 24px;\n}\n\n#submit-todo {\n  border-radius: 32px;\n  outline: none;\n  background-color: red;\n  border-color: red;\n  width: 50%;\n  height: min-content;\n  font-size: 1.5rem;\n  color: white;\n}\n\n#submit-todo:hover {\n  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),\n    0 17px 50px 0 rgba(0, 0, 0, 0.19);\n  transform: scale(1.1);\n  transition: 0.07s;\n}\n\n#submit-todo:active {\n  transform: translateY(4px);\n  filter: brightness(85%);\n  transition: 0.07s;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/header-style.css":
/*!******************************!*\
  !*** ./src/header-style.css ***!
  \******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./header-style.css */ "./node_modules/css-loader/dist/cjs.js!./src/header-style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/sidebar-style.css":
/*!*******************************!*\
  !*** ./src/sidebar-style.css ***!
  \*******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sidebar_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./sidebar-style.css */ "./node_modules/css-loader/dist/cjs.js!./src/sidebar-style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sidebar_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sidebar_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_sidebar_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_sidebar_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/addButton.js":
/*!**************************!*\
  !*** ./src/addButton.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addButton)
/* harmony export */ });
/* harmony import */ var _img_addTODO_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/addTODO.png */ "./src/img/addTODO.png");
/* harmony import */ var _addTodoWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTodoWindow */ "./src/addTodoWindow.js");



function addButton() {
  const addButton = document.createElement("button");
  addButton.id = "addButton";

  const addButtonImg = document.createElement("img");
  addButtonImg.src = _img_addTODO_png__WEBPACK_IMPORTED_MODULE_0__;
  addButton.appendChild(addButtonImg);
  const display = addButtonImg.style.display;

  addButton.addEventListener("mouseover", (e) => {
    addButton.firstChild.remove();
    addButton.textContent = "ADD NEW TODO";
  });

  addButton.addEventListener("mouseleave", (e) => {
    addButton.textContent = "";
    addButton.appendChild(addButtonImg);
  });

  addButton.addEventListener("click", (e) => {
    const modal = document.querySelector("#modal");
    modal.style.display = "flex";
    modal.appendChild((0,_addTodoWindow__WEBPACK_IMPORTED_MODULE_1__["default"])(modal));
  });
  return addButton;
}


/***/ }),

/***/ "./src/addNewGroupButton.js":
/*!**********************************!*\
  !*** ./src/addNewGroupButton.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addNewGroup)
/* harmony export */ });
/* harmony import */ var _img_addGroup_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/addGroup.png */ "./src/img/addGroup.png");
/* harmony import */ var _switchGroupFormButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switchGroupFormButton */ "./src/switchGroupFormButton.js");


function addNewGroup() {
  const addNewGroupButton = document.createElement("button");
  addNewGroupButton.id = "addNewGroup";

  const addGroupImage = document.createElement("img");
  addGroupImage.src = _img_addGroup_png__WEBPACK_IMPORTED_MODULE_0__;
  addNewGroupButton.appendChild(addGroupImage);

  const addGroupText = document.createElement("p");
  addGroupText.textContent = "Add New Group";
  addNewGroupButton.appendChild(addGroupText);

  addNewGroupButton.addEventListener("click", (e) => {
    (0,_switchGroupFormButton__WEBPACK_IMPORTED_MODULE_1__["default"])(addNewGroupButton);
  });
  return addNewGroupButton;
}


/***/ }),

/***/ "./src/addTodoWindow.js":
/*!******************************!*\
  !*** ./src/addTodoWindow.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTodoWindow)
/* harmony export */ });
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date */ "./src/date.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/controller.js");
/* harmony import */ var _img_notepage_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/notepage.png */ "./src/img/notepage.png");




function addTodoWindow(modal) {
  const window = document.createElement("form");
  window.id = "add-todo-window";
  window.autocomplete = false;

  const bgImage = document.createElement("img");
  bgImage.src = _img_notepage_png__WEBPACK_IMPORTED_MODULE_2__;
  bgImage.id = "add-todo-bg";
  window.appendChild(bgImage);

  const close = document.createElement("span");
  close.classList.add("close");
  close.innerHTML = "&times;";
  close.addEventListener("click", (e) => {
    modal.style.display = "none";
    modal.removeChild(window);
  });
  window.appendChild(close);

  const titleInput = document.createElement("input");
  titleInput.id = "title-input";
  titleInput.name = "title-input";
  titleInput.type = "text";
  titleInput.required = true;
  titleInput.minLength = 3;
  titleInput.maxLength = 32;
  titleInput.placeholder = "Title*";
  window.appendChild(titleInput);

  const descInput = document.createElement("textarea");
  descInput.id = "desc-input";
  descInput.name = "desc-input";
  descInput.required = false;
  descInput.placeholder = "Description(optional)";
  window.appendChild(descInput);

  const priorityContainer = document.createElement("fieldset");
  priorityContainer.id = "priority-container";
  const priorityLegend = document.createElement("legend");
  priorityLegend.textContent = "Priority*";
  priorityContainer.appendChild(priorityLegend);
  priorityContainer.appendChild(radio("low-radio", "Low"));
  priorityContainer.appendChild(radio("medium-radio", "Medium"));
  priorityContainer.appendChild(radio("high-radio", "High"));
  window.appendChild(priorityContainer);

  const dateContainer = document.createElement("div");
  dateContainer.id = "date-container";

  const datePicker = document.createElement("input");
  datePicker.type = "date";
  datePicker.id = "date";
  datePicker.name = "date";
  datePicker.min = (0,_date__WEBPACK_IMPORTED_MODULE_0__.getToday)();
  datePicker.value = (0,_date__WEBPACK_IMPORTED_MODULE_0__.getTomorrow)();
  datePicker.required = true;

  const dateLabel = document.createElement("label");
  dateLabel.htmlFor = datePicker.id;
  dateLabel.textContent = "Due Date*";

  dateContainer.appendChild(dateLabel);
  dateContainer.appendChild(datePicker);

  window.appendChild(dateContainer);

  const groupContainer = document.createElement("div");
  groupContainer.id = "group-container";
  const groupSelector = document.createElement("select");
  groupSelector.id = "group-select-input";
  groupSelector.name = "group-select-input";
  const groupLabel = document.createElement("label");
  groupLabel.textContent = "Group(optional)";
  groupLabel.htmlFor = groupSelector.id;
  let option = document.createElement("option");
  option.textContent = "None";
  option.value = null;
  groupSelector.appendChild(option);
  (0,_controller__WEBPACK_IMPORTED_MODULE_1__.getGroups)().forEach((group) => {
    option = document.createElement("option");
    option.textContent = group.charAt(0).toUpperCase() + group.slice(1);
    option.value = group;
    groupSelector.appendChild(option);
  });
  groupContainer.appendChild(groupLabel);
  groupContainer.appendChild(groupSelector);

  window.appendChild(groupContainer);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Create";
  submitButton.id = "submit-todo";

  window.appendChild(submitButton);

  window.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = titleInput.value;
    const desc = descInput.value;
    let priority = null;
    priorityContainer
      .querySelectorAll('input[name="priority"]')
      .forEach((radioButton) => {
        if (radioButton.checked) {
          priority = radioButton.value;
        }
      });
    const dueDate = datePicker.value;
    const selectedGroup = groupSelector.value;

    const valid = (0,_controller__WEBPACK_IMPORTED_MODULE_1__.createTodo)(title, desc, priority, dueDate, selectedGroup);
    if (valid) {
      modal.style.display = "none";
      modal.removeChild(window);
    }
  });

  return window;
}

function radio(radioId, labelText) {
  const container = document.createElement("div");
  container.classList.add("priority");

  const radioInput = document.createElement("input");
  radioInput.id = radioId;
  radioInput.type = "radio";
  radioInput.name = "priority";
  radioInput.required = true;
  radioInput.value = labelText.toLowerCase();

  const label = document.createElement("label");
  label.textContent = labelText;
  label.htmlFor = radioId;

  container.appendChild(label);
  container.appendChild(radioInput);

  return container;
}


/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contentComp)
/* harmony export */ });
function contentComp() {
  const content = document.createElement("div");
  content.id = "content";
  const html = document.querySelector("html");
  const sidebarWidth = document.querySelector("#sidebar").offsetWidth;
  const headerHeight = document.querySelector("#header").offsetHeight;
  content.style.width = `${html.scrollWidth - sidebarWidth}px`;
  content.style.height = `${html.scrollHeight - headerHeight}px`;
  content.style.display = "flex";
  content.style.justifyContent = "center";
  content.style.alignItems = "center";
  content.style.position = "absolute";
  content.style.left = `${sidebarWidth}px`;
  content.style.top = `${headerHeight}px`;
  return content;
}


/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGroup: () => (/* binding */ createGroup),
/* harmony export */   createTodo: () => (/* binding */ createTodo),
/* harmony export */   getGroups: () => (/* binding */ getGroups),
/* harmony export */   removeGroup: () => (/* binding */ removeGroup)
/* harmony export */ });
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date */ "./src/date.js");
/* harmony import */ var _todoData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoData */ "./src/todoData.js");



function createGroup(groupName) {
  if (groupName.length < 3 || groupName.length > 16) {
    return false;
  }
  let groups = localStorage.getItem("groups");
  if (groups === null) {
    groups = [];
  } else {
    groups = JSON.parse(groups);
  }
  groups.push(groupName);
  localStorage.setItem("groups", JSON.stringify(groups));
  return true;
}

function getGroups() {
  let groups = localStorage.getItem("groups");
  if (groups === null) {
    groups = [];
  } else {
    groups = JSON.parse(groups);
  }
  return groups;
}

function removeGroup(groupName) {
  let groups = localStorage.getItem("groups");
  if (groups !== null) {
    groups = JSON.parse(groups);
    const index = groups.indexOf(groupName);
    if (index > -1) {
      groups.splice(index, 1);
      localStorage.setItem("groups", JSON.stringify(groups));
      return true;
    }
    return false;
  }
  return false;
}

function createTodo(title, desc, priority, dueDate, group) {
  if (title.length < 3 || title.length > 32) {
    return false;
  }
  if (desc === "") {
    desc = null;
  }
  const dateRegistered = (0,_date__WEBPACK_IMPORTED_MODULE_0__.getToday)();
  if ((0,_date__WEBPACK_IMPORTED_MODULE_0__.isDatePassed)(dateRegistered, dueDate)) {
    return false;
  }
  if (group.toLowerCase() == "none") {
    group = null;
  }
  const todo = (0,_todoData__WEBPACK_IMPORTED_MODULE_1__["default"])(title, desc, priority, dateRegistered, dueDate, group);

  let todos = localStorage.getItem("todos");
  if (todos === null) {
    todos = [];
  } else {
    todos = JSON.parse(todos);
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
  return true;
}



/***/ }),

/***/ "./src/date.js":
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getToday: () => (/* binding */ getToday),
/* harmony export */   getTomorrow: () => (/* binding */ getTomorrow),
/* harmony export */   isDatePassed: () => (/* binding */ isDatePassed)
/* harmony export */ });
function getToday() {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  // Format the date as "yyyy-mm-dd"
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}

function getTomorrow() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
  const day = String(tomorrow.getDate()).padStart(2, "0");

  // Format the date as "yyyy-mm-dd"
  const formattedTomorrow = `${year}-${month}-${day}`;
  return formattedTomorrow;
}

function convertToDateObject(dateString) {
  const dateArray = dateString.split("-");
  const newDate = new Date();
  newDate.setFullYear(+dateArray[0]);
  newDate.setMonth(+dateArray[1]);
  newDate.setDate(+dateArray[2]);
  return newDate;
}

function isDatePassed(minLimit, beingChecked) {
  if (typeof minLimit === "string") {
    minLimit = convertToDateObject(minLimit);
  }
  if (typeof beingChecked === "string") {
    beingChecked = convertToDateObject(beingChecked);
  }

  if (beingChecked.getFullYear() < minLimit.getFullYear()) {
    return true;
  } else if (
    beingChecked.getFullYear() === minLimit.getFullYear() &&
    beingChecked.getMonth() < minLimit.getMonth()
  ) {
    return true;
  } else if (
    beingChecked.getFullYear() === minLimit.getFullYear() &&
    beingChecked.getMonth() === minLimit.getMonth() &&
    beingChecked.getDate() < minLimit.getDate()
  ) {
    return true;
  }
  return false;
}




/***/ }),

/***/ "./src/groupForm.js":
/*!**************************!*\
  !*** ./src/groupForm.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ groupForm)
/* harmony export */ });
/* harmony import */ var _switchGroupFormButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switchGroupFormButton */ "./src/switchGroupFormButton.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/controller.js");
/* harmony import */ var _groupSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./groupSection */ "./src/groupSection.js");



function groupForm() {
  const form = document.createElement("form");
  form.id = "group-form";

  const groupInput = document.createElement("input");
  groupInput.id = "group-input";
  groupInput.name = "group-input";
  groupInput.type = "text";
  groupInput.required = true;
  groupInput.minLength = 3;
  groupInput.maxLength = 16;
  groupInput.placeholder = "Group Name";
  form.autocomplete = false;
  form.appendChild(groupInput);

  const confirmAddGroupButton = document.createElement("button");
  confirmAddGroupButton.textContent = "Add";
  confirmAddGroupButton.type = "submit";

  form.appendChild(confirmAddGroupButton);

  const cancelAddGroupButton = document.createElement("button");
  cancelAddGroupButton.textContent = "Cancel";
  form.appendChild(cancelAddGroupButton);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let value = groupInput.value;
    value = value.toLowerCase();
    if (value === "none" || value === "null") {
      alert(
        `"${
          value.charAt(0).toUpperCase() + value.slice(1)
        }" is not a valid group name.`
      );
      return;
    }
    const valid = (0,_controller__WEBPACK_IMPORTED_MODULE_1__.createGroup)(value);
    if (valid) {
      (0,_groupSection__WEBPACK_IMPORTED_MODULE_2__.renderGroups)();
      (0,_switchGroupFormButton__WEBPACK_IMPORTED_MODULE_0__["default"])(form);
    }
  });

  cancelAddGroupButton.addEventListener("click", (e) => {
    e.preventDefault();
    (0,_switchGroupFormButton__WEBPACK_IMPORTED_MODULE_0__["default"])(form);
  });

  return form;
}


/***/ }),

/***/ "./src/groupSection.js":
/*!*****************************!*\
  !*** ./src/groupSection.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   groupSection: () => (/* binding */ groupSection),
/* harmony export */   renderGroups: () => (/* binding */ renderGroups)
/* harmony export */ });
/* harmony import */ var _addNewGroupButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addNewGroupButton */ "./src/addNewGroupButton.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/controller.js");



function groupSection() {
  const groupSection = document.createElement("div");
  groupSection.id = "groupSection";

  const groupSectionTitle = document.createElement("h2");
  groupSectionTitle.id = "groupSectionTitle";
  groupSectionTitle.textContent = "Groups";

  groupSection.appendChild(groupSectionTitle);

  const addNewGroupBtn = (0,_addNewGroupButton__WEBPACK_IMPORTED_MODULE_0__["default"])();
  groupSection.appendChild(addNewGroupBtn);

  const groupsContainer = document.createElement("div");
  groupsContainer.id = "groups";
  groupSection.appendChild(groupsContainer);

  const groups = (0,_controller__WEBPACK_IMPORTED_MODULE_1__.getGroups)();
  if (groups !== null) {
    groups.forEach((groupName) =>
      groupsContainer.appendChild(group(groupName))
    );
  }

  return groupSection;
}

function renderGroups() {
  const groups = (0,_controller__WEBPACK_IMPORTED_MODULE_1__.getGroups)();
  if (groups !== null) {
    const groupContainer = clearGroups();
    if (groupContainer !== null) {
      groups.forEach((groupName) => {
        groupContainer.appendChild(group(groupName));
      });
    }
  }
}

function group(groupName) {
  const group = document.createElement("div");
  group.classList.add("group");

  const groupText = document.createElement("p");
  groupText.textContent = `// ${
    groupName.charAt(0).toUpperCase() + groupName.slice(1)
  }`;

  group.appendChild(groupText);

  const closeButton = document.createElement("span");
  closeButton.classList.add("close-button");
  closeButton.innerHTML = "&times;";
  group.appendChild(closeButton);

  closeButton.addEventListener("click", (e) => {
    e.stopPropagation();
    if ((0,_controller__WEBPACK_IMPORTED_MODULE_1__.removeGroup)(groupName)) {
      renderGroups();
    }
  });

  group.addEventListener("mouseover", (e) => {
    closeButton.style.visibility = "visible";
  });

  group.addEventListener("mouseleave", (e) => {
    closeButton.style.visibility = "hidden";
  });
  return group;
}

function clearGroups() {
  const groupContainer = document.querySelector("#groups");
  if (groupContainer !== null) {
    groupContainer.childNodes.forEach((child) => child.remove());
    return groupContainer;
  }
  return null;
}




/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ headerComp)
/* harmony export */ });
/* harmony import */ var _header_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-style.css */ "./src/header-style.css");
/* harmony import */ var _img_nut_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/nut.png */ "./src/img/nut.png");



function headerComp() {
  const header = document.createElement("div");
  header.id = "header";

  const headerImage = document.createElement("img");
  headerImage.id = "header-img";
  headerImage.src = _img_nut_png__WEBPACK_IMPORTED_MODULE_1__;
  header.appendChild(headerImage);

  const headerTitle = document.createElement("h1");
  headerTitle.id = "header-title";
  headerTitle.textContent = "Nutcracker";
  header.appendChild(headerTitle);

  return header;
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content */ "./src/content.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const body = document.querySelector("body");

body.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__["default"])());
body.appendChild((0,_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"])());
body.appendChild((0,_content__WEBPACK_IMPORTED_MODULE_2__["default"])());
body.appendChild((0,_modal__WEBPACK_IMPORTED_MODULE_3__["default"])());


/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ modal)
/* harmony export */ });
function modal() {
  const modal = document.createElement("div");
  modal.id = "modal";

  return modal;
}


/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sidebarComp)
/* harmony export */ });
/* harmony import */ var _sidebar_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar-style.css */ "./src/sidebar-style.css");
/* harmony import */ var _img_home_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/home.png */ "./src/img/home.png");
/* harmony import */ var _img_today_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/today.png */ "./src/img/today.png");
/* harmony import */ var _img_week_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/week.png */ "./src/img/week.png");
/* harmony import */ var _img_completed_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/completed.png */ "./src/img/completed.png");
/* harmony import */ var _img_failed_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/failed.png */ "./src/img/failed.png");
/* harmony import */ var _addButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addButton */ "./src/addButton.js");
/* harmony import */ var _groupSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./groupSection */ "./src/groupSection.js");










const navImages = [_img_home_png__WEBPACK_IMPORTED_MODULE_1__, _img_today_png__WEBPACK_IMPORTED_MODULE_2__, _img_week_png__WEBPACK_IMPORTED_MODULE_3__, _img_completed_png__WEBPACK_IMPORTED_MODULE_4__, _img_failed_png__WEBPACK_IMPORTED_MODULE_5__];
const navTexts = ["Home", "Today", "This Week", "Completed", "Failed"];
const nav = Object.freeze({
  HOME: "home",
  TODAY: "today",
  WEEK: "week",
  COMPLETED: "completed",
  FAILED: "failed",
});

function sidebarComp() {
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";
  sidebar.style.maxHeight = `${
    document.querySelector("html").scrollHeight -
    document.querySelector("#header").offsetHeight
  }px`;
  sidebar.style.minHeight = sidebar.style.maxHeight;

  const add = (0,_addButton__WEBPACK_IMPORTED_MODULE_6__["default"])();
  sidebar.appendChild(add);

  const navLinks = document.createElement("ul");
  navLinks.id = "nav-links";

  navImages.forEach((image, index) => {
    navLinks.appendChild(
      listItemMaker(linkMaker(navTexts[index], iconMaker(image, linkWrapper())))
    );
  });

  sidebar.appendChild(navLinks);

  const group = (0,_groupSection__WEBPACK_IMPORTED_MODULE_7__.groupSection)();
  sidebar.appendChild(group);

  const keys = Object.keys(nav);
  let index = 0;
  navLinks.childNodes.forEach((_listItem) => {
    _listItem.setAttribute("data-nav", keys[index]);
    index = index + 1;
  });

  return sidebar;
}

function iconMaker(src, parent) {
  const icon = document.createElement("img");
  icon.src = src;
  icon.classList.add("nav-link-img");
  parent.appendChild(icon);
  return parent;
}

function linkMaker(text, parent) {
  const link = document.createElement("p");
  if (text === "Home") {
    parent.classList.add("selected");
    parent.style.borderBottom = "2px solid black";
  }
  link.textContent = text;
  link.classList.add("nav-link-text");
  parent.appendChild(link);
  return parent;
}

function linkWrapper() {
  const linkWrapper = document.createElement("div");
  linkWrapper.classList.add("nav-link-wrapper");
  return linkWrapper;
}

function listItemMaker(wrapper) {
  const listItem = document.createElement("li");
  listItem.classList.add("nav-link");
  listItem.appendChild(wrapper);

  listItem.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    const selected = document.querySelector(".selected");
    if (selected === wrapper) {
      return;
    }
    selected.style.borderBottomWidth = "0px";
    selected.classList.remove("selected");
    wrapper.classList.add("selected");
    wrapper.style.borderBottom = "2px solid black";
  });

  listItem.addEventListener("mouseenter", (e) => {
    const previous = listItem.previousElementSibling;
    if (previous === null) {
      return;
    }
    if (previous.firstChild.classList.contains("selected")) {
      previous.firstChild.style.borderBottomWidth = "5px";
    }
  });

  listItem.addEventListener("mouseleave", (e) => {
    const previous = listItem.previousElementSibling;
    if (previous === null) {
      return;
    }
    if (previous.firstChild.classList.contains("selected")) {
      previous.firstChild.style.borderBottomWidth = "2px";
    }
  });
  return listItem;
}


/***/ }),

/***/ "./src/switchGroupFormButton.js":
/*!**************************************!*\
  !*** ./src/switchGroupFormButton.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ switchBetweenFormNButton)
/* harmony export */ });
/* harmony import */ var _groupForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groupForm */ "./src/groupForm.js");
/* harmony import */ var _addNewGroupButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addNewGroupButton */ "./src/addNewGroupButton.js");



function switchBetweenFormNButton(item) {
  if (item.id === "addNewGroup") {
    document.querySelector("#groupSection").replaceChild((0,_groupForm__WEBPACK_IMPORTED_MODULE_0__["default"])(), item);
    return;
  }
  document
    .querySelector("#groupSection")
    .replaceChild((0,_addNewGroupButton__WEBPACK_IMPORTED_MODULE_1__["default"])(), item);
}


/***/ }),

/***/ "./src/todoData.js":
/*!*************************!*\
  !*** ./src/todoData.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newTodo)
/* harmony export */ });
function newTodo(
  title,
  desc,
  priority,
  dateRegistered,
  dueDate,
  group
) {
  return { title, desc, priority, dateRegistered, dueDate, group };
}


/***/ }),

/***/ "./src/img/addGroup.png":
/*!******************************!*\
  !*** ./src/img/addGroup.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "174a0147071c43be66d4.png";

/***/ }),

/***/ "./src/img/addTODO.png":
/*!*****************************!*\
  !*** ./src/img/addTODO.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b1e9cb3702185fbe06b3.png";

/***/ }),

/***/ "./src/img/completed.png":
/*!*******************************!*\
  !*** ./src/img/completed.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6971c5b35c80b5fee81.png";

/***/ }),

/***/ "./src/img/failed.png":
/*!****************************!*\
  !*** ./src/img/failed.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9259efce9b82840b6db4.png";

/***/ }),

/***/ "./src/img/home.png":
/*!**************************!*\
  !*** ./src/img/home.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d2de150ec0b8a0f0c46.png";

/***/ }),

/***/ "./src/img/notepage.png":
/*!******************************!*\
  !*** ./src/img/notepage.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b682865d467569000ba3.png";

/***/ }),

/***/ "./src/img/nut.png":
/*!*************************!*\
  !*** ./src/img/nut.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "171a3812a83a72151868.png";

/***/ }),

/***/ "./src/img/today.png":
/*!***************************!*\
  !*** ./src/img/today.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a3a0226722a0bd012633.png";

/***/ }),

/***/ "./src/img/week.png":
/*!**************************!*\
  !*** ./src/img/week.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4b9a154eb9fe7c3e4c52.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxnQ0FBZ0MsNEJBQTRCLEdBQUcsVUFBVSxjQUFjLGVBQWUsR0FBRyxhQUFhLGdCQUFnQiwwQ0FBMEMseUJBQXlCLGtCQUFrQix3QkFBd0IsR0FBRyxtQkFBbUIsY0FBYyxzQkFBc0IsR0FBRyxpQkFBaUIsaUJBQWlCLHdCQUF3QixzQkFBc0IsdUJBQXVCLGdCQUFnQixHQUFHLHFCQUFxQjtBQUN2dkI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDdkM7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx3RkFBd0YsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxpQ0FBaUMsNkJBQTZCLG9CQUFvQixHQUFHLE1BQU0sY0FBYyxHQUFHLGNBQWMsMkNBQTJDLGNBQWMsZUFBZSxpQkFBaUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsZ0NBQWdDLGNBQWMscUJBQXFCLEdBQUcsZ0JBQWdCLDBCQUEwQixnQkFBZ0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsZUFBZSxHQUFHLGVBQWUsa0JBQWtCLHdCQUF3QiwyQ0FBMkMsc0JBQXNCLGVBQWUsR0FBRyxxQkFBcUIsMEJBQTBCLG9CQUFvQiw0QkFBNEIsc0JBQXNCLEdBQUcsc0JBQXNCLCtCQUErQixzQkFBc0IsR0FBRyx1QkFBdUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsMkJBQTJCLGFBQWEsc0JBQXNCLHdCQUF3QixHQUFHLG1CQUFtQixnQkFBZ0Isd0JBQXdCLEdBQUcsZ0JBQWdCLGNBQWMsa0NBQWtDLG1CQUFtQixtQkFBbUIscUJBQXFCLGtCQUFrQixpQkFBaUIsdUJBQXVCLEdBQUcsc0JBQXNCLG9CQUFvQixHQUFHLHNCQUFzQiw0QkFBNEIsaUJBQWlCLG9CQUFvQixpQkFBaUIsc0JBQXNCLHdCQUF3QixxQkFBcUIsR0FBRyx1QkFBdUIsZ0NBQWdDLHNCQUFzQixHQUFHLGtCQUFrQixrQkFBa0Isd0JBQXdCLGNBQWMsY0FBYywyQ0FBMkMsR0FBRyx3QkFBd0IsZ0NBQWdDLG9CQUFvQiw0QkFBNEIsc0JBQXNCLEdBQUcsc0JBQXNCLG9CQUFvQixxQkFBcUIsZ0JBQWdCLEdBQUcsc0JBQXNCLHNCQUFzQixHQUFHLG1CQUFtQixnQkFBZ0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLGNBQWMsR0FBRyx3QkFBd0Isb0JBQW9CLGNBQWMsZUFBZSxzQkFBc0IsdUJBQXVCLGVBQWUsR0FBRyxhQUFhLGtCQUFrQiwyQkFBMkIsNEJBQTRCLGNBQWMsd0JBQXdCLGdCQUFnQixHQUFHLFlBQVksc0JBQXNCLGVBQWUsMkNBQTJDLGtCQUFrQix3QkFBd0IsNEJBQTRCLHVCQUF1QixHQUFHLGtCQUFrQiw0QkFBNEIsb0JBQW9CLDBCQUEwQixzQkFBc0IsR0FBRyxpQkFBaUIsK0JBQStCLHNCQUFzQixHQUFHLGdCQUFnQixjQUFjLGVBQWUsR0FBRyxtQkFBbUIsdUJBQXVCLHNCQUFzQixpQkFBaUIsdUJBQXVCLGdCQUFnQixHQUFHLHVCQUF1QixlQUFlLHFCQUFxQixzQkFBc0IsR0FBRyxtQkFBbUIsc0JBQXNCLGVBQWUsR0FBRyxpQkFBaUIsa0JBQWtCLDZCQUE2QixtQ0FBbUMsa0JBQWtCLHFCQUFxQixHQUFHLHlCQUF5QixzQkFBc0IseUJBQXlCLHVCQUF1QixHQUFHLHdDQUF3QyxzQkFBc0IsR0FBRyx1Q0FBdUMsc0JBQXNCLHlCQUF5QixHQUFHLHFCQUFxQjtBQUNwdks7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNOdkM7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxLQUFLLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxrQ0FBa0Msa0JBQWtCLGdCQUFnQixpQkFBaUIsdUJBQXVCLFlBQVksV0FBVyxlQUFlLHlDQUF5Qyw0QkFBNEIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3Qix1QkFBdUIsa0JBQWtCLDJCQUEyQix3QkFBd0Isa0NBQWtDLGNBQWMsa0JBQWtCLEdBQUcsa0JBQWtCLHVCQUF1QixnQkFBZ0IscUJBQXFCLG9CQUFvQixHQUFHLGNBQWMsaUJBQWlCLEdBQUcsWUFBWSxzQkFBc0IsaUJBQWlCLHVCQUF1QixhQUFhLFdBQVcsR0FBRyxnQkFBZ0IsZUFBZSxvQkFBb0IsR0FBRyw2RUFBNkUsb0JBQW9CLEdBQUcseUJBQXlCLGtCQUFrQix3QkFBd0IsY0FBYyxHQUFHLGVBQWUsbUJBQW1CLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGFBQWEsR0FBRyxxQkFBcUIsY0FBYyxHQUFHLGtCQUFrQixlQUFlLEdBQUcsaUJBQWlCLGVBQWUsR0FBRyxxQkFBcUIsZUFBZSxrQkFBa0Isd0JBQXdCLDRCQUE0QixjQUFjLEdBQUcsc0JBQXNCLGVBQWUsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsY0FBYyxHQUFHLGtCQUFrQix3QkFBd0Isa0JBQWtCLDBCQUEwQixzQkFBc0IsZUFBZSx3QkFBd0Isc0JBQXNCLGlCQUFpQixHQUFHLHdCQUF3QiwwRkFBMEYsMEJBQTBCLHNCQUFzQixHQUFHLHlCQUF5QiwrQkFBK0IsNEJBQTRCLHNCQUFzQixHQUFHLHFCQUFxQjtBQUNyMUY7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUM1SDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUEwRztBQUMxRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDZGQUFPOzs7O0FBSW9EO0FBQzVFLE9BQU8saUVBQWUsNkZBQU8sSUFBSSw2RkFBTyxVQUFVLDZGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBMkc7QUFDM0c7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw4RkFBTzs7OztBQUlxRDtBQUM3RSxPQUFPLGlFQUFlLDhGQUFPLElBQUksOEZBQU8sVUFBVSw4RkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNieUM7QUFDRzs7QUFFN0I7QUFDZjtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLDZDQUFRO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwwREFBYTtBQUNuQyxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QjZDO0FBQ2tCO0FBQ2hEO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiw4Q0FBVztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGtFQUF3QjtBQUM1QixHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEIrQztBQUNNO0FBQ1g7O0FBRTNCO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLDhDQUFRO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrQ0FBUTtBQUMzQixxQkFBcUIsa0RBQVc7QUFDaEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzREFBUztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBLGtCQUFrQix1REFBVTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hKZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0NBQWdDO0FBQzNELDRCQUE0QixpQ0FBaUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsYUFBYTtBQUN2Qyx5QkFBeUIsYUFBYTtBQUN0QztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZnRDtBQUNmOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwrQ0FBUTtBQUNqQyxNQUFNLG1EQUFZO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFEQUFPOztBQUV0QjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsS0FBSyxHQUFHLE1BQU0sR0FBRyxJQUFJOztBQUVoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsS0FBSyxHQUFHLE1BQU0sR0FBRyxJQUFJO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRStDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RGdCO0FBQ3BCO0FBQ0c7QUFDL0I7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0RBQVc7QUFDN0I7QUFDQSxNQUFNLDJEQUFZO0FBQ2xCLE1BQU0sa0VBQXdCO0FBQzlCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBSSxrRUFBd0I7QUFDNUIsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRG9EO0FBQ0U7O0FBRXREO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEseUJBQXlCLDhEQUFpQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNEQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixzREFBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHdEQUFXO0FBQ25CO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRlY7QUFDSTs7QUFFakI7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IseUNBQUc7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQmtDO0FBQ0U7QUFDQTtBQUNSO0FBQ1A7QUFDckI7O0FBRUEsaUJBQWlCLG1EQUFVO0FBQzNCLGlCQUFpQixvREFBVztBQUM1QixpQkFBaUIsb0RBQVc7QUFDNUIsaUJBQWlCLGtEQUFLOzs7Ozs7Ozs7Ozs7Ozs7QUNWUDtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMNkI7QUFDUTtBQUNFO0FBQ0Y7QUFDVTtBQUNOOztBQUVMO0FBQ3dCOztBQUU1RCxtQkFBbUIsMENBQU8sRUFBRSwyQ0FBUSxFQUFFLDBDQUFPLEVBQUUsK0NBQVksRUFBRSw0Q0FBUztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRWM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGNBQWMsc0RBQVM7QUFDdkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUEsZ0JBQWdCLDJEQUFZO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SG9DO0FBQ2dCOztBQUVyQztBQUNmO0FBQ0EseURBQXlELHNEQUFTO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDhEQUFpQjtBQUNuQzs7Ozs7Ozs7Ozs7Ozs7O0FDWGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaGVhZGVyLXN0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NpZGViYXItc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2hlYWRlci1zdHlsZS5jc3M/NDkyOSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NpZGViYXItc3R5bGUuY3NzPzI4YjciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYWRkQnV0dG9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYWRkTmV3R3JvdXBCdXR0b24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGRUb2RvV2luZG93LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29udGVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kYXRlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZ3JvdXBGb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZ3JvdXBTZWN0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zd2l0Y2hHcm91cEZvcm1CdXR0b24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvRGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWhlYWRlci1jb2xvcjogIzYxNjc3YTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuI2hlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xuICBwYWRkaW5nOiAyNHB4IDAgMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2hlYWRlci10aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAyLjZyZW07XG59XG5cbiNoZWFkZXItaW1nIHtcbiAgaGVpZ2h0OiA3NXB4O1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICBtYXJnaW4tbGVmdDogMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDVweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2hlYWRlci1zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFDQUFxQztFQUNyQyxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0taGVhZGVyLWNvbG9yOiAjNjE2NzdhO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgcGFkZGluZzogMjRweCAwIDI0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlci10aXRsZSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDIuNnJlbTtcXG59XFxuXFxuI2hlYWRlci1pbWcge1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiA1cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLXNpZGViYXItY29sb3I6ICNkOGQ5ZGE7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbnVsIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4jc2lkZWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAzMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBnYXA6IDMwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbiNuYXYtbGlua3Mge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubmF2LWxpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5uYXYtbGluazpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTYlKTtcbiAgdHJhbnNpdGlvbjogMC4wN3M7XG59XG5cbi5uYXYtbGluazphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgdHJhbnNpdGlvbjogMC4wN3M7XG59XG5cbi5uYXYtbGluay13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XG4gIGdhcDogMTAlO1xuICBtYXJnaW4tbGVmdDogMjRweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLm5hdi1saW5rLWltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xufVxuXG4jYWRkQnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2FkZEJ1dHRvbiA+IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuI2FkZEJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDI1MHB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNjRweDtcbiAgdHJhbnNpdGlvbjogMC4xcztcbn1cblxuI2FkZEJ1dHRvbjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gIHRyYW5zaXRpb246IDAuMDdzO1xufVxuXG4jYWRkTmV3R3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XG59XG5cbiNhZGROZXdHcm91cDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTYlKTtcbiAgdHJhbnNpdGlvbjogMC4wN3M7XG59XG4jYWRkTmV3R3JvdXAgPiBpbWcge1xuICBtYXgtd2lkdGg6IDMycHg7XG4gIG1heC1oZWlnaHQ6IDMycHg7XG4gIGZsZXg6IDAgMCAxO1xufVxuXG4jYWRkTmV3R3JvdXAgPiBwIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbiNncm91cFNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbn1cblxuI2dyb3VwU2VjdGlvblRpdGxlIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDUwcHg7XG59XG5cbiNncm91cHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmdyb3VwIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHdpZHRoOiA2MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZ3JvdXA6aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTYlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zaXRpb246IDAuMDdzO1xufVxuLmdyb3VwOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xuICB0cmFuc2l0aW9uOiAwLjA3cztcbn1cblxuLmdyb3VwID4gcCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNsb3NlLWJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbn1cbi5jbG9zZS1idXR0b246aG92ZXIge1xuICBjb2xvcjogcmVkO1xuICBjdXJzb3I6IHByb2dyZXNzO1xuICB0cmFuc2l0aW9uOiAwLjA3cztcbn1cblxuI2dyb3VwU2VjdGlvbiB7XG4gIG1hcmdpbjogaW5pdGlhbCAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4jZ3JvdXAtZm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICByb3ctZ2FwOiAyMHB4O1xuICBjb2x1bW4tZ2FwOiAyMHB4O1xufVxuXG4jZ3JvdXAtZm9ybSA+IGlucHV0IHtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICBncmlkLWNvbHVtbi1lbmQ6IDM7XG59XG5cbiNncm91cC1mb3JtID4gYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xuICBncmlkLXJvdy1zdGFydDogMjtcbn1cblxuI2dyb3VwLWZvcm0gPiBidXR0b246bGFzdC1vZi10eXBlIHtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2lkZWJhci1zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxTQUFTO0VBQ1Qsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tc2lkZWJhci1jb2xvcjogI2Q4ZDlkYTtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG59XFxudWwge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDMwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4jbmF2LWxpbmtzIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLm5hdi1saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHdpZHRoOiA2MCU7XFxufVxcblxcbi5uYXYtbGluazpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTYlKTtcXG4gIHRyYW5zaXRpb246IDAuMDdzO1xcbn1cXG5cXG4ubmF2LWxpbms6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcbiAgdHJhbnNpdGlvbjogMC4wN3M7XFxufVxcblxcbi5uYXYtbGluay13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xcbiAgZ2FwOiAxMCU7XFxuICBtYXJnaW4tbGVmdDogMjRweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5uYXYtbGluay1pbWcge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbn1cXG5cXG4jYWRkQnV0dG9uIHtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jYWRkQnV0dG9uID4gaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuI2FkZEJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNjRweDtcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxufVxcblxcbiNhZGRCdXR0b246YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcXG4gIHRyYW5zaXRpb246IDAuMDdzO1xcbn1cXG5cXG4jYWRkTmV3R3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEycHg7XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG59XFxuXFxuI2FkZE5ld0dyb3VwOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg5NiUpO1xcbiAgdHJhbnNpdGlvbjogMC4wN3M7XFxufVxcbiNhZGROZXdHcm91cCA+IGltZyB7XFxuICBtYXgtd2lkdGg6IDMycHg7XFxuICBtYXgtaGVpZ2h0OiAzMnB4O1xcbiAgZmxleDogMCAwIDE7XFxufVxcblxcbiNhZGROZXdHcm91cCA+IHAge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbiNncm91cFNlY3Rpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuI2dyb3VwU2VjdGlvblRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDUwcHg7XFxufVxcblxcbiNncm91cHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmdyb3VwIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmdyb3VwOmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg5NiUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgdHJhbnNpdGlvbjogMC4wN3M7XFxufVxcbi5ncm91cDphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxuICB0cmFuc2l0aW9uOiAwLjA3cztcXG59XFxuXFxuLmdyb3VwID4gcCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxufVxcbi5jbG9zZS1idXR0b246aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG4gIGN1cnNvcjogcHJvZ3Jlc3M7XFxuICB0cmFuc2l0aW9uOiAwLjA3cztcXG59XFxuXFxuI2dyb3VwU2VjdGlvbiB7XFxuICBtYXJnaW46IGluaXRpYWwgMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbiNncm91cC1mb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICByb3ctZ2FwOiAyMHB4O1xcbiAgY29sdW1uLWdhcDogMjBweDtcXG59XFxuXFxuI2dyb3VwLWZvcm0gPiBpbnB1dCB7XFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbn1cXG5cXG4jZ3JvdXAtZm9ybSA+IGJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xcbn1cXG5cXG4jZ3JvdXAtZm9ybSA+IGJ1dHRvbjpsYXN0LW9mLXR5cGUge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjbW9kYWwge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2FkZC10b2RvLXdpbmRvdyB7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGdhcDogMjRweDtcbiAgcGFkZGluZzogMjRweDtcbn1cblxuI2FkZC10b2RvLWJnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgbWF4LWhlaWdodDogMTUwJTtcbiAgbWF4LXdpZHRoOiBhdXRvO1xufVxuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuLmNsb3NlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuLmNsb3NlOmhvdmVyIHtcbiAgY29sb3I6IHJlZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXTpob3ZlcixcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpob3ZlcixcbnNlbGVjdDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3ByaW9yaXR5LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMThweDtcbn1cblxuLnByaW9yaXR5IHtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbn1cbi5wcmlvcml0eSA+IGlucHV0IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4jdGl0bGUtaW5wdXQge1xuICB3aWR0aDogOTAlO1xufVxuXG4jZGVzYy1pbnB1dCB7XG4gIHdpZHRoOiA5MCU7XG59XG5cbiNkYXRlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDI0cHg7XG59XG5cbiNncm91cC1jb250YWluZXIge1xuICB3aWR0aDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyNHB4O1xufVxuXG4jc3VibWl0LXRvZG8ge1xuICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jc3VibWl0LXRvZG86aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDEycHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCksXG4gICAgMCAxN3B4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zaXRpb246IDAuMDdzO1xufVxuXG4jc3VibWl0LXRvZG86YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xuICB0cmFuc2l0aW9uOiAwLjA3cztcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFVBQVU7RUFDVixvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE1BQU07QUFDUjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7OztFQUdFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7QUFDQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFO3FDQUNtQztFQUNuQyxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI21vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYWRkLXRvZG8td2luZG93IHtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGdhcDogMjRweDtcXG4gIHBhZGRpbmc6IDI0cHg7XFxufVxcblxcbiNhZGQtdG9kby1iZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAtMTtcXG4gIG1heC1oZWlnaHQ6IDE1MCU7XFxuICBtYXgtd2lkdGg6IGF1dG87XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxufVxcbi5jbG9zZTpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl06aG92ZXIsXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpob3ZlcixcXG5zZWxlY3Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcHJpb3JpdHktY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxOHB4O1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgbWF4LXdpZHRoOiA5MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA2cHg7XFxufVxcbi5wcmlvcml0eSA+IGlucHV0IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI3RpdGxlLWlucHV0IHtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbiNkZXNjLWlucHV0IHtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbiNkYXRlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjRweDtcXG59XFxuXFxuI2dyb3VwLWNvbnRhaW5lciB7XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjRweDtcXG59XFxuXFxuI3N1Ym1pdC10b2RvIHtcXG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jc3VibWl0LXRvZG86aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpLFxcbiAgICAwIDE3cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICB0cmFuc2l0aW9uOiAwLjA3cztcXG59XFxuXFxuI3N1Ym1pdC10b2RvOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xcbiAgdHJhbnNpdGlvbjogMC4wN3M7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci1zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci1zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZWJhci1zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NpZGViYXItc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYWRkSW1hZ2UgZnJvbSBcIi4vaW1nL2FkZFRPRE8ucG5nXCI7XG5pbXBvcnQgYWRkVG9kb1dpbmRvdyBmcm9tIFwiLi9hZGRUb2RvV2luZG93XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEJ1dHRvbigpIHtcbiAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkQnV0dG9uLmlkID0gXCJhZGRCdXR0b25cIjtcblxuICBjb25zdCBhZGRCdXR0b25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBhZGRCdXR0b25JbWcuc3JjID0gYWRkSW1hZ2U7XG4gIGFkZEJ1dHRvbi5hcHBlbmRDaGlsZChhZGRCdXR0b25JbWcpO1xuICBjb25zdCBkaXNwbGF5ID0gYWRkQnV0dG9uSW1nLnN0eWxlLmRpc3BsYXk7XG5cbiAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGUpID0+IHtcbiAgICBhZGRCdXR0b24uZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFERCBORVcgVE9ET1wiO1xuICB9KTtcblxuICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGUpID0+IHtcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGFkZEJ1dHRvbi5hcHBlbmRDaGlsZChhZGRCdXR0b25JbWcpO1xuICB9KTtcblxuICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsXCIpO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChhZGRUb2RvV2luZG93KG1vZGFsKSk7XG4gIH0pO1xuICByZXR1cm4gYWRkQnV0dG9uO1xufVxuIiwiaW1wb3J0IGFkZEdyb3VwSW1nIGZyb20gXCIuL2ltZy9hZGRHcm91cC5wbmdcIjtcbmltcG9ydCBzd2l0Y2hCZXR3ZWVuRm9ybU5CdXR0b24gZnJvbSBcIi4vc3dpdGNoR3JvdXBGb3JtQnV0dG9uXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGROZXdHcm91cCgpIHtcbiAgY29uc3QgYWRkTmV3R3JvdXBCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGROZXdHcm91cEJ1dHRvbi5pZCA9IFwiYWRkTmV3R3JvdXBcIjtcblxuICBjb25zdCBhZGRHcm91cEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgYWRkR3JvdXBJbWFnZS5zcmMgPSBhZGRHcm91cEltZztcbiAgYWRkTmV3R3JvdXBCdXR0b24uYXBwZW5kQ2hpbGQoYWRkR3JvdXBJbWFnZSk7XG5cbiAgY29uc3QgYWRkR3JvdXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGFkZEdyb3VwVGV4dC50ZXh0Q29udGVudCA9IFwiQWRkIE5ldyBHcm91cFwiO1xuICBhZGROZXdHcm91cEJ1dHRvbi5hcHBlbmRDaGlsZChhZGRHcm91cFRleHQpO1xuXG4gIGFkZE5ld0dyb3VwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHN3aXRjaEJldHdlZW5Gb3JtTkJ1dHRvbihhZGROZXdHcm91cEJ1dHRvbik7XG4gIH0pO1xuICByZXR1cm4gYWRkTmV3R3JvdXBCdXR0b247XG59XG4iLCJpbXBvcnQgeyBnZXRUb2RheSwgZ2V0VG9tb3Jyb3cgfSBmcm9tIFwiLi9kYXRlXCI7XG5pbXBvcnQgeyBnZXRHcm91cHMsIGNyZWF0ZVRvZG8gfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5pbXBvcnQgbm90ZXBhZ2UgZnJvbSBcIi4vaW1nL25vdGVwYWdlLnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUb2RvV2luZG93KG1vZGFsKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICB3aW5kb3cuaWQgPSBcImFkZC10b2RvLXdpbmRvd1wiO1xuICB3aW5kb3cuYXV0b2NvbXBsZXRlID0gZmFsc2U7XG5cbiAgY29uc3QgYmdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGJnSW1hZ2Uuc3JjID0gbm90ZXBhZ2U7XG4gIGJnSW1hZ2UuaWQgPSBcImFkZC10b2RvLWJnXCI7XG4gIHdpbmRvdy5hcHBlbmRDaGlsZChiZ0ltYWdlKTtcblxuICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjbG9zZS5jbGFzc0xpc3QuYWRkKFwiY2xvc2VcIik7XG4gIGNsb3NlLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiO1xuICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgbW9kYWwucmVtb3ZlQ2hpbGQod2luZG93KTtcbiAgfSk7XG4gIHdpbmRvdy5hcHBlbmRDaGlsZChjbG9zZSk7XG5cbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGl0bGVJbnB1dC5pZCA9IFwidGl0bGUtaW5wdXRcIjtcbiAgdGl0bGVJbnB1dC5uYW1lID0gXCJ0aXRsZS1pbnB1dFwiO1xuICB0aXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIHRpdGxlSW5wdXQubWluTGVuZ3RoID0gMztcbiAgdGl0bGVJbnB1dC5tYXhMZW5ndGggPSAzMjtcbiAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiVGl0bGUqXCI7XG4gIHdpbmRvdy5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICBjb25zdCBkZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGRlc2NJbnB1dC5pZCA9IFwiZGVzYy1pbnB1dFwiO1xuICBkZXNjSW5wdXQubmFtZSA9IFwiZGVzYy1pbnB1dFwiO1xuICBkZXNjSW5wdXQucmVxdWlyZWQgPSBmYWxzZTtcbiAgZGVzY0lucHV0LnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvbihvcHRpb25hbClcIjtcbiAgd2luZG93LmFwcGVuZENoaWxkKGRlc2NJbnB1dCk7XG5cbiAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG4gIHByaW9yaXR5Q29udGFpbmVyLmlkID0gXCJwcmlvcml0eS1jb250YWluZXJcIjtcbiAgY29uc3QgcHJpb3JpdHlMZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xuICBwcmlvcml0eUxlZ2VuZC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHkqXCI7XG4gIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5TGVnZW5kKTtcbiAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW8oXCJsb3ctcmFkaW9cIiwgXCJMb3dcIikpO1xuICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbyhcIm1lZGl1bS1yYWRpb1wiLCBcIk1lZGl1bVwiKSk7XG4gIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKFwiaGlnaC1yYWRpb1wiLCBcIkhpZ2hcIikpO1xuICB3aW5kb3cuYXBwZW5kQ2hpbGQocHJpb3JpdHlDb250YWluZXIpO1xuXG4gIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkYXRlQ29udGFpbmVyLmlkID0gXCJkYXRlLWNvbnRhaW5lclwiO1xuXG4gIGNvbnN0IGRhdGVQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRhdGVQaWNrZXIudHlwZSA9IFwiZGF0ZVwiO1xuICBkYXRlUGlja2VyLmlkID0gXCJkYXRlXCI7XG4gIGRhdGVQaWNrZXIubmFtZSA9IFwiZGF0ZVwiO1xuICBkYXRlUGlja2VyLm1pbiA9IGdldFRvZGF5KCk7XG4gIGRhdGVQaWNrZXIudmFsdWUgPSBnZXRUb21vcnJvdygpO1xuICBkYXRlUGlja2VyLnJlcXVpcmVkID0gdHJ1ZTtcblxuICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGRhdGVMYWJlbC5odG1sRm9yID0gZGF0ZVBpY2tlci5pZDtcbiAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZSpcIjtcblxuICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZVBpY2tlcik7XG5cbiAgd2luZG93LmFwcGVuZENoaWxkKGRhdGVDb250YWluZXIpO1xuXG4gIGNvbnN0IGdyb3VwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ3JvdXBDb250YWluZXIuaWQgPSBcImdyb3VwLWNvbnRhaW5lclwiO1xuICBjb25zdCBncm91cFNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgZ3JvdXBTZWxlY3Rvci5pZCA9IFwiZ3JvdXAtc2VsZWN0LWlucHV0XCI7XG4gIGdyb3VwU2VsZWN0b3IubmFtZSA9IFwiZ3JvdXAtc2VsZWN0LWlucHV0XCI7XG4gIGNvbnN0IGdyb3VwTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGdyb3VwTGFiZWwudGV4dENvbnRlbnQgPSBcIkdyb3VwKG9wdGlvbmFsKVwiO1xuICBncm91cExhYmVsLmh0bWxGb3IgPSBncm91cFNlbGVjdG9yLmlkO1xuICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uLnRleHRDb250ZW50ID0gXCJOb25lXCI7XG4gIG9wdGlvbi52YWx1ZSA9IG51bGw7XG4gIGdyb3VwU2VsZWN0b3IuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgZ2V0R3JvdXBzKCkuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGdyb3VwLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZ3JvdXAuc2xpY2UoMSk7XG4gICAgb3B0aW9uLnZhbHVlID0gZ3JvdXA7XG4gICAgZ3JvdXBTZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcbiAgZ3JvdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JvdXBMYWJlbCk7XG4gIGdyb3VwQ29udGFpbmVyLmFwcGVuZENoaWxkKGdyb3VwU2VsZWN0b3IpO1xuXG4gIHdpbmRvdy5hcHBlbmRDaGlsZChncm91cENvbnRhaW5lcik7XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkNyZWF0ZVwiO1xuICBzdWJtaXRCdXR0b24uaWQgPSBcInN1Ym1pdC10b2RvXCI7XG5cbiAgd2luZG93LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgIGNvbnN0IGRlc2MgPSBkZXNjSW5wdXQudmFsdWU7XG4gICAgbGV0IHByaW9yaXR5ID0gbnVsbDtcbiAgICBwcmlvcml0eUNvbnRhaW5lclxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXScpXG4gICAgICAuZm9yRWFjaCgocmFkaW9CdXR0b24pID0+IHtcbiAgICAgICAgaWYgKHJhZGlvQnV0dG9uLmNoZWNrZWQpIHtcbiAgICAgICAgICBwcmlvcml0eSA9IHJhZGlvQnV0dG9uLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICBjb25zdCBkdWVEYXRlID0gZGF0ZVBpY2tlci52YWx1ZTtcbiAgICBjb25zdCBzZWxlY3RlZEdyb3VwID0gZ3JvdXBTZWxlY3Rvci52YWx1ZTtcblxuICAgIGNvbnN0IHZhbGlkID0gY3JlYXRlVG9kbyh0aXRsZSwgZGVzYywgcHJpb3JpdHksIGR1ZURhdGUsIHNlbGVjdGVkR3JvdXApO1xuICAgIGlmICh2YWxpZCkge1xuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgbW9kYWwucmVtb3ZlQ2hpbGQod2luZG93KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB3aW5kb3c7XG59XG5cbmZ1bmN0aW9uIHJhZGlvKHJhZGlvSWQsIGxhYmVsVGV4dCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpO1xuXG4gIGNvbnN0IHJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHJhZGlvSW5wdXQuaWQgPSByYWRpb0lkO1xuICByYWRpb0lucHV0LnR5cGUgPSBcInJhZGlvXCI7XG4gIHJhZGlvSW5wdXQubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgcmFkaW9JbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIHJhZGlvSW5wdXQudmFsdWUgPSBsYWJlbFRleHQudG9Mb3dlckNhc2UoKTtcblxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XG4gIGxhYmVsLmh0bWxGb3IgPSByYWRpb0lkO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0lucHV0KTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGVudENvbXAoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmlkID0gXCJjb250ZW50XCI7XG4gIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKTtcbiAgY29uc3Qgc2lkZWJhcldpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyXCIpLm9mZnNldFdpZHRoO1xuICBjb25zdCBoZWFkZXJIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlclwiKS5vZmZzZXRIZWlnaHQ7XG4gIGNvbnRlbnQuc3R5bGUud2lkdGggPSBgJHtodG1sLnNjcm9sbFdpZHRoIC0gc2lkZWJhcldpZHRofXB4YDtcbiAgY29udGVudC5zdHlsZS5oZWlnaHQgPSBgJHtodG1sLnNjcm9sbEhlaWdodCAtIGhlYWRlckhlaWdodH1weGA7XG4gIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBjb250ZW50LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcbiAgY29udGVudC5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcbiAgY29udGVudC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgY29udGVudC5zdHlsZS5sZWZ0ID0gYCR7c2lkZWJhcldpZHRofXB4YDtcbiAgY29udGVudC5zdHlsZS50b3AgPSBgJHtoZWFkZXJIZWlnaHR9cHhgO1xuICByZXR1cm4gY29udGVudDtcbn1cbiIsImltcG9ydCB7IGdldFRvZGF5LCBpc0RhdGVQYXNzZWQgfSBmcm9tIFwiLi9kYXRlXCI7XG5pbXBvcnQgbmV3VG9kbyBmcm9tIFwiLi90b2RvRGF0YVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVHcm91cChncm91cE5hbWUpIHtcbiAgaWYgKGdyb3VwTmFtZS5sZW5ndGggPCAzIHx8IGdyb3VwTmFtZS5sZW5ndGggPiAxNikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBsZXQgZ3JvdXBzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJncm91cHNcIik7XG4gIGlmIChncm91cHMgPT09IG51bGwpIHtcbiAgICBncm91cHMgPSBbXTtcbiAgfSBlbHNlIHtcbiAgICBncm91cHMgPSBKU09OLnBhcnNlKGdyb3Vwcyk7XG4gIH1cbiAgZ3JvdXBzLnB1c2goZ3JvdXBOYW1lKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJncm91cHNcIiwgSlNPTi5zdHJpbmdpZnkoZ3JvdXBzKSk7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBnZXRHcm91cHMoKSB7XG4gIGxldCBncm91cHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImdyb3Vwc1wiKTtcbiAgaWYgKGdyb3VwcyA9PT0gbnVsbCkge1xuICAgIGdyb3VwcyA9IFtdO1xuICB9IGVsc2Uge1xuICAgIGdyb3VwcyA9IEpTT04ucGFyc2UoZ3JvdXBzKTtcbiAgfVxuICByZXR1cm4gZ3JvdXBzO1xufVxuXG5mdW5jdGlvbiByZW1vdmVHcm91cChncm91cE5hbWUpIHtcbiAgbGV0IGdyb3VwcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ3JvdXBzXCIpO1xuICBpZiAoZ3JvdXBzICE9PSBudWxsKSB7XG4gICAgZ3JvdXBzID0gSlNPTi5wYXJzZShncm91cHMpO1xuICAgIGNvbnN0IGluZGV4ID0gZ3JvdXBzLmluZGV4T2YoZ3JvdXBOYW1lKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgZ3JvdXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImdyb3Vwc1wiLCBKU09OLnN0cmluZ2lmeShncm91cHMpKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvKHRpdGxlLCBkZXNjLCBwcmlvcml0eSwgZHVlRGF0ZSwgZ3JvdXApIHtcbiAgaWYgKHRpdGxlLmxlbmd0aCA8IDMgfHwgdGl0bGUubGVuZ3RoID4gMzIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGRlc2MgPT09IFwiXCIpIHtcbiAgICBkZXNjID0gbnVsbDtcbiAgfVxuICBjb25zdCBkYXRlUmVnaXN0ZXJlZCA9IGdldFRvZGF5KCk7XG4gIGlmIChpc0RhdGVQYXNzZWQoZGF0ZVJlZ2lzdGVyZWQsIGR1ZURhdGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChncm91cC50b0xvd2VyQ2FzZSgpID09IFwibm9uZVwiKSB7XG4gICAgZ3JvdXAgPSBudWxsO1xuICB9XG4gIGNvbnN0IHRvZG8gPSBuZXdUb2RvKHRpdGxlLCBkZXNjLCBwcmlvcml0eSwgZGF0ZVJlZ2lzdGVyZWQsIGR1ZURhdGUsIGdyb3VwKTtcblxuICBsZXQgdG9kb3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpO1xuICBpZiAodG9kb3MgPT09IG51bGwpIHtcbiAgICB0b2RvcyA9IFtdO1xuICB9IGVsc2Uge1xuICAgIHRvZG9zID0gSlNPTi5wYXJzZSh0b2Rvcyk7XG4gIH1cbiAgdG9kb3MucHVzaCh0b2RvKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydCB7IGNyZWF0ZUdyb3VwLCBnZXRHcm91cHMsIHJlbW92ZUdyb3VwLCBjcmVhdGVUb2RvIH07XG4iLCJmdW5jdGlvbiBnZXRUb2RheSgpIHtcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gIGNvbnN0IHllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBtb250aCA9IFN0cmluZyhjdXJyZW50RGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICBjb25zdCBkYXkgPSBTdHJpbmcoY3VycmVudERhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XG5cbiAgLy8gRm9ybWF0IHRoZSBkYXRlIGFzIFwieXl5eS1tbS1kZFwiXG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuXG4gIHJldHVybiBmb3JtYXR0ZWREYXRlO1xufVxuXG5mdW5jdGlvbiBnZXRUb21vcnJvdygpIHtcbiAgY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZSgpO1xuICB0b21vcnJvdy5zZXREYXRlKHRvbW9ycm93LmdldERhdGUoKSArIDEpO1xuXG4gIGNvbnN0IHllYXIgPSB0b21vcnJvdy5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBtb250aCA9IFN0cmluZyh0b21vcnJvdy5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICBjb25zdCBkYXkgPSBTdHJpbmcodG9tb3Jyb3cuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XG5cbiAgLy8gRm9ybWF0IHRoZSBkYXRlIGFzIFwieXl5eS1tbS1kZFwiXG4gIGNvbnN0IGZvcm1hdHRlZFRvbW9ycm93ID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcbiAgcmV0dXJuIGZvcm1hdHRlZFRvbW9ycm93O1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9EYXRlT2JqZWN0KGRhdGVTdHJpbmcpIHtcbiAgY29uc3QgZGF0ZUFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChcIi1cIik7XG4gIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZSgpO1xuICBuZXdEYXRlLnNldEZ1bGxZZWFyKCtkYXRlQXJyYXlbMF0pO1xuICBuZXdEYXRlLnNldE1vbnRoKCtkYXRlQXJyYXlbMV0pO1xuICBuZXdEYXRlLnNldERhdGUoK2RhdGVBcnJheVsyXSk7XG4gIHJldHVybiBuZXdEYXRlO1xufVxuXG5mdW5jdGlvbiBpc0RhdGVQYXNzZWQobWluTGltaXQsIGJlaW5nQ2hlY2tlZCkge1xuICBpZiAodHlwZW9mIG1pbkxpbWl0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgbWluTGltaXQgPSBjb252ZXJ0VG9EYXRlT2JqZWN0KG1pbkxpbWl0KTtcbiAgfVxuICBpZiAodHlwZW9mIGJlaW5nQ2hlY2tlZCA9PT0gXCJzdHJpbmdcIikge1xuICAgIGJlaW5nQ2hlY2tlZCA9IGNvbnZlcnRUb0RhdGVPYmplY3QoYmVpbmdDaGVja2VkKTtcbiAgfVxuXG4gIGlmIChiZWluZ0NoZWNrZWQuZ2V0RnVsbFllYXIoKSA8IG1pbkxpbWl0LmdldEZ1bGxZZWFyKCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChcbiAgICBiZWluZ0NoZWNrZWQuZ2V0RnVsbFllYXIoKSA9PT0gbWluTGltaXQuZ2V0RnVsbFllYXIoKSAmJlxuICAgIGJlaW5nQ2hlY2tlZC5nZXRNb250aCgpIDwgbWluTGltaXQuZ2V0TW9udGgoKVxuICApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChcbiAgICBiZWluZ0NoZWNrZWQuZ2V0RnVsbFllYXIoKSA9PT0gbWluTGltaXQuZ2V0RnVsbFllYXIoKSAmJlxuICAgIGJlaW5nQ2hlY2tlZC5nZXRNb250aCgpID09PSBtaW5MaW1pdC5nZXRNb250aCgpICYmXG4gICAgYmVpbmdDaGVja2VkLmdldERhdGUoKSA8IG1pbkxpbWl0LmdldERhdGUoKVxuICApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCB7IGdldFRvZGF5LCBnZXRUb21vcnJvdywgaXNEYXRlUGFzc2VkIH07XG4iLCJpbXBvcnQgc3dpdGNoQmV0d2VlbkZvcm1OQnV0dG9uIGZyb20gXCIuL3N3aXRjaEdyb3VwRm9ybUJ1dHRvblwiO1xuaW1wb3J0IHsgY3JlYXRlR3JvdXAgfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5pbXBvcnQgeyByZW5kZXJHcm91cHMgfSBmcm9tIFwiLi9ncm91cFNlY3Rpb25cIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdyb3VwRm9ybSgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLmlkID0gXCJncm91cC1mb3JtXCI7XG5cbiAgY29uc3QgZ3JvdXBJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZ3JvdXBJbnB1dC5pZCA9IFwiZ3JvdXAtaW5wdXRcIjtcbiAgZ3JvdXBJbnB1dC5uYW1lID0gXCJncm91cC1pbnB1dFwiO1xuICBncm91cElucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgZ3JvdXBJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIGdyb3VwSW5wdXQubWluTGVuZ3RoID0gMztcbiAgZ3JvdXBJbnB1dC5tYXhMZW5ndGggPSAxNjtcbiAgZ3JvdXBJbnB1dC5wbGFjZWhvbGRlciA9IFwiR3JvdXAgTmFtZVwiO1xuICBmb3JtLmF1dG9jb21wbGV0ZSA9IGZhbHNlO1xuICBmb3JtLmFwcGVuZENoaWxkKGdyb3VwSW5wdXQpO1xuXG4gIGNvbnN0IGNvbmZpcm1BZGRHcm91cEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbmZpcm1BZGRHcm91cEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gIGNvbmZpcm1BZGRHcm91cEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcblxuICBmb3JtLmFwcGVuZENoaWxkKGNvbmZpcm1BZGRHcm91cEJ1dHRvbik7XG5cbiAgY29uc3QgY2FuY2VsQWRkR3JvdXBCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxBZGRHcm91cEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQWRkR3JvdXBCdXR0b24pO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgdmFsdWUgPSBncm91cElucHV0LnZhbHVlO1xuICAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAodmFsdWUgPT09IFwibm9uZVwiIHx8IHZhbHVlID09PSBcIm51bGxcIikge1xuICAgICAgYWxlcnQoXG4gICAgICAgIGBcIiR7XG4gICAgICAgICAgdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKVxuICAgICAgICB9XCIgaXMgbm90IGEgdmFsaWQgZ3JvdXAgbmFtZS5gXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB2YWxpZCA9IGNyZWF0ZUdyb3VwKHZhbHVlKTtcbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIHJlbmRlckdyb3VwcygpO1xuICAgICAgc3dpdGNoQmV0d2VlbkZvcm1OQnV0dG9uKGZvcm0pO1xuICAgIH1cbiAgfSk7XG5cbiAgY2FuY2VsQWRkR3JvdXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHN3aXRjaEJldHdlZW5Gb3JtTkJ1dHRvbihmb3JtKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZvcm07XG59XG4iLCJpbXBvcnQgYWRkTmV3R3JvdXBCdXR0b24gZnJvbSBcIi4vYWRkTmV3R3JvdXBCdXR0b25cIjtcbmltcG9ydCB7IGdldEdyb3VwcywgcmVtb3ZlR3JvdXAgfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5cbmZ1bmN0aW9uIGdyb3VwU2VjdGlvbigpIHtcbiAgY29uc3QgZ3JvdXBTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ3JvdXBTZWN0aW9uLmlkID0gXCJncm91cFNlY3Rpb25cIjtcblxuICBjb25zdCBncm91cFNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgZ3JvdXBTZWN0aW9uVGl0bGUuaWQgPSBcImdyb3VwU2VjdGlvblRpdGxlXCI7XG4gIGdyb3VwU2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gXCJHcm91cHNcIjtcblxuICBncm91cFNlY3Rpb24uYXBwZW5kQ2hpbGQoZ3JvdXBTZWN0aW9uVGl0bGUpO1xuXG4gIGNvbnN0IGFkZE5ld0dyb3VwQnRuID0gYWRkTmV3R3JvdXBCdXR0b24oKTtcbiAgZ3JvdXBTZWN0aW9uLmFwcGVuZENoaWxkKGFkZE5ld0dyb3VwQnRuKTtcblxuICBjb25zdCBncm91cHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncm91cHNDb250YWluZXIuaWQgPSBcImdyb3Vwc1wiO1xuICBncm91cFNlY3Rpb24uYXBwZW5kQ2hpbGQoZ3JvdXBzQ29udGFpbmVyKTtcblxuICBjb25zdCBncm91cHMgPSBnZXRHcm91cHMoKTtcbiAgaWYgKGdyb3VwcyAhPT0gbnVsbCkge1xuICAgIGdyb3Vwcy5mb3JFYWNoKChncm91cE5hbWUpID0+XG4gICAgICBncm91cHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JvdXAoZ3JvdXBOYW1lKSlcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIGdyb3VwU2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyR3JvdXBzKCkge1xuICBjb25zdCBncm91cHMgPSBnZXRHcm91cHMoKTtcbiAgaWYgKGdyb3VwcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGdyb3VwQ29udGFpbmVyID0gY2xlYXJHcm91cHMoKTtcbiAgICBpZiAoZ3JvdXBDb250YWluZXIgIT09IG51bGwpIHtcbiAgICAgIGdyb3Vwcy5mb3JFYWNoKChncm91cE5hbWUpID0+IHtcbiAgICAgICAgZ3JvdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JvdXAoZ3JvdXBOYW1lKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ3JvdXAoZ3JvdXBOYW1lKSB7XG4gIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ3JvdXAuY2xhc3NMaXN0LmFkZChcImdyb3VwXCIpO1xuXG4gIGNvbnN0IGdyb3VwVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBncm91cFRleHQudGV4dENvbnRlbnQgPSBgLy8gJHtcbiAgICBncm91cE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBncm91cE5hbWUuc2xpY2UoMSlcbiAgfWA7XG5cbiAgZ3JvdXAuYXBwZW5kQ2hpbGQoZ3JvdXBUZXh0KTtcblxuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xvc2UtYnV0dG9uXCIpO1xuICBjbG9zZUJ1dHRvbi5pbm5lckhUTUwgPSBcIiZ0aW1lcztcIjtcbiAgZ3JvdXAuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHJlbW92ZUdyb3VwKGdyb3VwTmFtZSkpIHtcbiAgICAgIHJlbmRlckdyb3VwcygpO1xuICAgIH1cbiAgfSk7XG5cbiAgZ3JvdXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT4ge1xuICAgIGNsb3NlQnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgfSk7XG5cbiAgZ3JvdXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGUpID0+IHtcbiAgICBjbG9zZUJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgfSk7XG4gIHJldHVybiBncm91cDtcbn1cblxuZnVuY3Rpb24gY2xlYXJHcm91cHMoKSB7XG4gIGNvbnN0IGdyb3VwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNncm91cHNcIik7XG4gIGlmIChncm91cENvbnRhaW5lciAhPT0gbnVsbCkge1xuICAgIGdyb3VwQ29udGFpbmVyLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLnJlbW92ZSgpKTtcbiAgICByZXR1cm4gZ3JvdXBDb250YWluZXI7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCB7IGdyb3VwU2VjdGlvbiwgcmVuZGVyR3JvdXBzIH07XG4iLCJpbXBvcnQgXCIuL2hlYWRlci1zdHlsZS5jc3NcIjtcbmltcG9ydCBpbWcgZnJvbSBcIi4vaW1nL251dC5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyQ29tcCgpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmlkID0gXCJoZWFkZXJcIjtcblxuICBjb25zdCBoZWFkZXJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGhlYWRlckltYWdlLmlkID0gXCJoZWFkZXItaW1nXCI7XG4gIGhlYWRlckltYWdlLnNyYyA9IGltZztcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckltYWdlKTtcblxuICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGVyVGl0bGUuaWQgPSBcImhlYWRlci10aXRsZVwiO1xuICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiTnV0Y3JhY2tlclwiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG4iLCJpbXBvcnQgaGVhZGVyQ29tcCBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBzaWRlYmFyQ29tcCBmcm9tIFwiLi9zaWRlYmFyXCI7XG5pbXBvcnQgY29udGVudENvbXAgZnJvbSBcIi4vY29udGVudFwiO1xuaW1wb3J0IG1vZGFsIGZyb20gXCIuL21vZGFsXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5ib2R5LmFwcGVuZENoaWxkKGhlYWRlckNvbXAoKSk7XG5ib2R5LmFwcGVuZENoaWxkKHNpZGViYXJDb21wKCkpO1xuYm9keS5hcHBlbmRDaGlsZChjb250ZW50Q29tcCgpKTtcbmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwoKSk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbCgpIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbC5pZCA9IFwibW9kYWxcIjtcblxuICByZXR1cm4gbW9kYWw7XG59XG4iLCJpbXBvcnQgXCIuL3NpZGViYXItc3R5bGUuY3NzXCI7XG5pbXBvcnQgaG9tZUltZyBmcm9tIFwiLi9pbWcvaG9tZS5wbmdcIjtcbmltcG9ydCB0b2RheUltZyBmcm9tIFwiLi9pbWcvdG9kYXkucG5nXCI7XG5pbXBvcnQgd2Vla0ltZyBmcm9tIFwiLi9pbWcvd2Vlay5wbmdcIjtcbmltcG9ydCBjb21wbGV0ZWRJbWcgZnJvbSBcIi4vaW1nL2NvbXBsZXRlZC5wbmdcIjtcbmltcG9ydCBmYWlsZWRJbWcgZnJvbSBcIi4vaW1nL2ZhaWxlZC5wbmdcIjtcblxuaW1wb3J0IGFkZEJ1dHRvbiBmcm9tIFwiLi9hZGRCdXR0b25cIjtcbmltcG9ydCB7IGdyb3VwU2VjdGlvbiwgcmVuZGVyR3JvdXBzIH0gZnJvbSBcIi4vZ3JvdXBTZWN0aW9uXCI7XG5cbmNvbnN0IG5hdkltYWdlcyA9IFtob21lSW1nLCB0b2RheUltZywgd2Vla0ltZywgY29tcGxldGVkSW1nLCBmYWlsZWRJbWddO1xuY29uc3QgbmF2VGV4dHMgPSBbXCJIb21lXCIsIFwiVG9kYXlcIiwgXCJUaGlzIFdlZWtcIiwgXCJDb21wbGV0ZWRcIiwgXCJGYWlsZWRcIl07XG5jb25zdCBuYXYgPSBPYmplY3QuZnJlZXplKHtcbiAgSE9NRTogXCJob21lXCIsXG4gIFRPREFZOiBcInRvZGF5XCIsXG4gIFdFRUs6IFwid2Vla1wiLFxuICBDT01QTEVURUQ6IFwiY29tcGxldGVkXCIsXG4gIEZBSUxFRDogXCJmYWlsZWRcIixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaWRlYmFyQ29tcCgpIHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpZGViYXIuaWQgPSBcInNpZGViYXJcIjtcbiAgc2lkZWJhci5zdHlsZS5tYXhIZWlnaHQgPSBgJHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKS5zY3JvbGxIZWlnaHQgLVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyXCIpLm9mZnNldEhlaWdodFxuICB9cHhgO1xuICBzaWRlYmFyLnN0eWxlLm1pbkhlaWdodCA9IHNpZGViYXIuc3R5bGUubWF4SGVpZ2h0O1xuXG4gIGNvbnN0IGFkZCA9IGFkZEJ1dHRvbigpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKGFkZCk7XG5cbiAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIG5hdkxpbmtzLmlkID0gXCJuYXYtbGlua3NcIjtcblxuICBuYXZJbWFnZXMuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KSA9PiB7XG4gICAgbmF2TGlua3MuYXBwZW5kQ2hpbGQoXG4gICAgICBsaXN0SXRlbU1ha2VyKGxpbmtNYWtlcihuYXZUZXh0c1tpbmRleF0sIGljb25NYWtlcihpbWFnZSwgbGlua1dyYXBwZXIoKSkpKVxuICAgICk7XG4gIH0pO1xuXG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQobmF2TGlua3MpO1xuXG4gIGNvbnN0IGdyb3VwID0gZ3JvdXBTZWN0aW9uKCk7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoZ3JvdXApO1xuXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhuYXYpO1xuICBsZXQgaW5kZXggPSAwO1xuICBuYXZMaW5rcy5jaGlsZE5vZGVzLmZvckVhY2goKF9saXN0SXRlbSkgPT4ge1xuICAgIF9saXN0SXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hdlwiLCBrZXlzW2luZGV4XSk7XG4gICAgaW5kZXggPSBpbmRleCArIDE7XG4gIH0pO1xuXG4gIHJldHVybiBzaWRlYmFyO1xufVxuXG5mdW5jdGlvbiBpY29uTWFrZXIoc3JjLCBwYXJlbnQpIHtcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGljb24uc3JjID0gc3JjO1xuICBpY29uLmNsYXNzTGlzdC5hZGQoXCJuYXYtbGluay1pbWdcIik7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChpY29uKTtcbiAgcmV0dXJuIHBhcmVudDtcbn1cblxuZnVuY3Rpb24gbGlua01ha2VyKHRleHQsIHBhcmVudCkge1xuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGlmICh0ZXh0ID09PSBcIkhvbWVcIikge1xuICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgcGFyZW50LnN0eWxlLmJvcmRlckJvdHRvbSA9IFwiMnB4IHNvbGlkIGJsYWNrXCI7XG4gIH1cbiAgbGluay50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGxpbmsuY2xhc3NMaXN0LmFkZChcIm5hdi1saW5rLXRleHRcIik7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgcmV0dXJuIHBhcmVudDtcbn1cblxuZnVuY3Rpb24gbGlua1dyYXBwZXIoKSB7XG4gIGNvbnN0IGxpbmtXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGlua1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm5hdi1saW5rLXdyYXBwZXJcIik7XG4gIHJldHVybiBsaW5rV3JhcHBlcjtcbn1cblxuZnVuY3Rpb24gbGlzdEl0ZW1NYWtlcih3cmFwcGVyKSB7XG4gIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwibmF2LWxpbmtcIik7XG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuXG4gIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKTtcbiAgICBpZiAoc2VsZWN0ZWQgPT09IHdyYXBwZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2VsZWN0ZWQuc3R5bGUuYm9yZGVyQm90dG9tV2lkdGggPSBcIjBweFwiO1xuICAgIHNlbGVjdGVkLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICB3cmFwcGVyLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwiMnB4IHNvbGlkIGJsYWNrXCI7XG4gIH0pO1xuXG4gIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIChlKSA9PiB7XG4gICAgY29uc3QgcHJldmlvdXMgPSBsaXN0SXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIGlmIChwcmV2aW91cyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocHJldmlvdXMuZmlyc3RDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgcHJldmlvdXMuZmlyc3RDaGlsZC5zdHlsZS5ib3JkZXJCb3R0b21XaWR0aCA9IFwiNXB4XCI7XG4gICAgfVxuICB9KTtcblxuICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHByZXZpb3VzID0gbGlzdEl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICBpZiAocHJldmlvdXMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHByZXZpb3VzLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgIHByZXZpb3VzLmZpcnN0Q2hpbGQuc3R5bGUuYm9yZGVyQm90dG9tV2lkdGggPSBcIjJweFwiO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBsaXN0SXRlbTtcbn1cbiIsImltcG9ydCBncm91cEZvcm0gZnJvbSBcIi4vZ3JvdXBGb3JtXCI7XG5pbXBvcnQgYWRkTmV3R3JvdXBCdXR0b24gZnJvbSBcIi4vYWRkTmV3R3JvdXBCdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3dpdGNoQmV0d2VlbkZvcm1OQnV0dG9uKGl0ZW0pIHtcbiAgaWYgKGl0ZW0uaWQgPT09IFwiYWRkTmV3R3JvdXBcIikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ3JvdXBTZWN0aW9uXCIpLnJlcGxhY2VDaGlsZChncm91cEZvcm0oKSwgaXRlbSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZ3JvdXBTZWN0aW9uXCIpXG4gICAgLnJlcGxhY2VDaGlsZChhZGROZXdHcm91cEJ1dHRvbigpLCBpdGVtKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1RvZG8oXG4gIHRpdGxlLFxuICBkZXNjLFxuICBwcmlvcml0eSxcbiAgZGF0ZVJlZ2lzdGVyZWQsXG4gIGR1ZURhdGUsXG4gIGdyb3VwXG4pIHtcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2MsIHByaW9yaXR5LCBkYXRlUmVnaXN0ZXJlZCwgZHVlRGF0ZSwgZ3JvdXAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==