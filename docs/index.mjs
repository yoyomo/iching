/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.mjs");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/muvjs/muv-dom.mjs":
/*!****************************************!*\
  !*** ./node_modules/muvjs/muv-dom.mjs ***!
  \****************************************/
/*! exports provided: isNull, isArray, component, rerender, div, button, label, input, textarea, ul, li, img, a, abbr, address, area, article, aside, audio, b, base, bdo, blockquote, body, br, canvas, caption, cite, code, col, colgroup, datalist, dd, del, details, dfn, dialog, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, head, header, h1, h2, h3, h4, h5, h6, hr, html, i, iframe, ins, kbd, legend, link, map, mark, menu, meta, meter, nav, object, ol, optgroup, option, output, p, param, pre, progress, q, s, samp, script, section, select, small, source, span, strong, style, sub, summary, sup, table, tbody, td, tfoot, th, thead, tr, time, title, track, u, varElement, video */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNull\", function() { return isNull; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArray\", function() { return isArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"component\", function() { return component; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rerender\", function() { return rerender; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"div\", function() { return div; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"button\", function() { return button; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"label\", function() { return label; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"input\", function() { return input; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"textarea\", function() { return textarea; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ul\", function() { return ul; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"li\", function() { return li; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"img\", function() { return img; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"abbr\", function() { return abbr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"address\", function() { return address; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"area\", function() { return area; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"article\", function() { return article; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aside\", function() { return aside; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"audio\", function() { return audio; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"base\", function() { return base; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bdo\", function() { return bdo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"blockquote\", function() { return blockquote; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"body\", function() { return body; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"br\", function() { return br; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"caption\", function() { return caption; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cite\", function() { return cite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code\", function() { return code; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"col\", function() { return col; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colgroup\", function() { return colgroup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"datalist\", function() { return datalist; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dd\", function() { return dd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"del\", function() { return del; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"details\", function() { return details; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dfn\", function() { return dfn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dialog\", function() { return dialog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dl\", function() { return dl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dt\", function() { return dt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"em\", function() { return em; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"embed\", function() { return embed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fieldset\", function() { return fieldset; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"figcaption\", function() { return figcaption; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"figure\", function() { return figure; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"footer\", function() { return footer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"form\", function() { return form; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"head\", function() { return head; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"header\", function() { return header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h1\", function() { return h1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h2\", function() { return h2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h3\", function() { return h3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h4\", function() { return h4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h5\", function() { return h5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h6\", function() { return h6; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hr\", function() { return hr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"html\", function() { return html; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"i\", function() { return i; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iframe\", function() { return iframe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ins\", function() { return ins; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"kbd\", function() { return kbd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"legend\", function() { return legend; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"link\", function() { return link; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mark\", function() { return mark; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menu\", function() { return menu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"meta\", function() { return meta; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"meter\", function() { return meter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nav\", function() { return nav; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"object\", function() { return object; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ol\", function() { return ol; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"optgroup\", function() { return optgroup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"option\", function() { return option; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"output\", function() { return output; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"p\", function() { return p; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"param\", function() { return param; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pre\", function() { return pre; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"progress\", function() { return progress; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"q\", function() { return q; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"s\", function() { return s; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"samp\", function() { return samp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"script\", function() { return script; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"section\", function() { return section; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"select\", function() { return select; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"small\", function() { return small; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"source\", function() { return source; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"span\", function() { return span; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"strong\", function() { return strong; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"style\", function() { return style; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sub\", function() { return sub; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"summary\", function() { return summary; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sup\", function() { return sup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"table\", function() { return table; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tbody\", function() { return tbody; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"td\", function() { return td; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tfoot\", function() { return tfoot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"th\", function() { return th; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"thead\", function() { return thead; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tr\", function() { return tr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"time\", function() { return time; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"title\", function() { return title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"track\", function() { return track; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"u\", function() { return u; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"varElement\", function() { return varElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"video\", function() { return video; });\n\n\nconst isNull = value => value === undefined || value === null;\nconst isArray = a => !isNull(a) && a instanceof Array;\n\nconst setAttributes = element => attributes => {\n  if (isNull(attributes)) return;\n\n  for (let attr in attributes) {\n    if (typeof attributes[attr] === \"function\") {\n      element[attr] = attributes[attr];\n    } else {\n      element.setAttribute(attr, attributes[attr]);\n    }\n  }\n};\n\nconst appendChildren = element => child => index => {\n  if (isNull(child)) return;\n\n  if (typeof child === \"object\") {\n    if (isArray(child)) {\n      child.map((c, i) => appendChildren(element)(c)(i))\n    } else {\n      element.appendChild(child.render(element.getAttribute(\"key\") || \"\", index));\n    }\n  } else {\n    element.innerText = child;\n  }\n};\n\nconst component = elementType => attributes => (...children) => {\n  return {\n    elementType: elementType,\n    attributes: attributes,\n    children: children.flat(),\n    genKey: function (parentKey, index) {\n      const geneKey = parentKey ? `${parentKey}-${index}-` : \"\";\n      this.attributes = this.attributes || {};\n      this.attributes[\"key\"] = geneKey + elementType;\n    },\n    render: function (parentKey, index) {\n      let element = document.createElement(elementType);\n\n      this.genKey(parentKey, index);\n      setAttributes(element)(this.attributes);\n\n      appendChildren(element)(this.children)(0);\n\n      return element;\n    }\n  };\n};\n\nconst rerender = parent => oldView => newView => index => requestAnimationFrame(() => {\n\n  if (!parent) return;\n\n  if (typeof oldView !== \"object\" && typeof newView !== \"object\") {\n    if (oldView !== newView) {\n      parent.innerText = newView;\n      parent.value = newView;\n    }\n    return;\n  }\n\n  if (isNull(newView)) {\n    if (!isNull(parent.children[index])) parent.removeChild(parent.children[index]);\n    return;\n  }\n\n  if (isNull(oldView) && newView.render) {\n    parent.appendChild(newView.render(parent.getAttribute(\"key\") || \"\", index));\n    return;\n  }\n\n  if ((!newView.attributes || !newView.attributes[\"key\"]) && newView.genKey) {\n    newView.genKey(parent.getAttribute(\"key\") || \"\", index)\n  }\n\n\n  if (oldView.elementType === newView.elementType && oldView.attributes[\"key\"] === newView.attributes[\"key\"]) {\n\n    if (JSON.stringify(oldView.attributes) !== JSON.stringify(newView.attributes)) {\n      let element = parent.children[index] || parent;\n      for (let attr in {...oldView.attributes, ...newView.attributes}) {\n        if (oldView.attributes[attr] !== newView.attributes[attr]) {\n          if (typeof newView.attributes[attr] === \"function\") {\n            element[attr] = newView.attributes[attr];\n          } else {\n            element.setAttribute(attr, newView.attributes[attr]);\n          }\n        }\n      }\n    }\n\n    const newChildren = newView.children;\n    const oldChildren = oldView.children;\n\n    const childrenNum = newChildren.length >= oldChildren.length ? newChildren.length : oldChildren.length;\n    for (let i = 0; i < childrenNum; i++) {\n      rerender(parent.children[index])(oldChildren[i])(newChildren[i])(i)\n    }\n\n  } else {\n    parent.insertBefore(newView.render(parent.getAttribute(\"key\") || \"\", index), parent.children[index]);\n    parent.removeChild(parent.children[index + 1])\n  }\n});\n\nconst div = component('div');\nconst button = component('button');\nconst label = component('label');\nconst input = component('input');\nconst textarea = component('textarea');\nconst ul = component('ul');\nconst li = component('li');\nconst img = component('img');\nconst a = component('a');\nconst abbr = component('abbr');\nconst address = component('address');\nconst area = component('area');\nconst article = component('article');\nconst aside = component('aside');\nconst audio = component('audio');\nconst b = component('b');\nconst base = component('base');\nconst bdo = component('bdo');\nconst blockquote = component('blockquote');\nconst body = component('body');\nconst br = component('br');\nconst canvas = component('canvas');\nconst caption = component('caption');\nconst cite = component('cite');\nconst code = component('code');\nconst col = component('col');\nconst colgroup = component('colgroup');\nconst datalist = component('datalist');\nconst dd = component('dd');\nconst del = component('del');\nconst details = component('details');\nconst dfn = component('dfn');\nconst dialog = component('dialog');\nconst dl = component('dl');\nconst dt = component('dt');\nconst em = component('em');\nconst embed = component('embed');\nconst fieldset = component('fieldset');\nconst figcaption = component('figcaption');\nconst figure = component('figure');\nconst footer = component('footer');\nconst form = component('form');\nconst head = component('head');\nconst header = component('header');\nconst h1 = component('h1');\nconst h2 = component('h2');\nconst h3 = component('h3');\nconst h4 = component('h4');\nconst h5 = component('h5');\nconst h6 = component('h6');\nconst hr = component('hr');\nconst html = component('html');\nconst i = component('i');\nconst iframe = component('iframe');\nconst ins = component('ins');\nconst kbd = component('kbd');\nconst legend = component('legend');\nconst link = component('link');\nconst map = component('map');\nconst mark = component('mark');\nconst menu = component('menu');\nconst meta = component('meta');\nconst meter = component('meter');\nconst nav = component('nav');\nconst object = component('object');\nconst ol = component('ol');\nconst optgroup = component('optgroup');\nconst option = component('option');\nconst output = component('output');\nconst p = component('p');\nconst param = component('param');\nconst pre = component('pre');\nconst progress = component('progress');\nconst q = component('q');\nconst s = component('s');\nconst samp = component('samp');\nconst script = component('script');\nconst section = component('section');\nconst select = component('select');\nconst small = component('small');\nconst source = component('source');\nconst span = component('span');\nconst strong = component('strong');\nconst style = component('style');\nconst sub = component('sub');\nconst summary = component('summary');\nconst sup = component('sup');\nconst table = component('table');\nconst tbody = component('tbody');\nconst td = component('td');\nconst tfoot = component('tfoot');\nconst th = component('th');\nconst thead = component('thead');\nconst tr = component('tr');\nconst time = component('time');\nconst title = component('title');\nconst track = component('track');\nconst u = component('u');\nconst varElement = component('var');\nconst video = component('video');\n\n\n//# sourceURL=webpack:///./node_modules/muvjs/muv-dom.mjs?");

/***/ }),

/***/ "./node_modules/muvjs/muv.mjs":
/*!************************************!*\
  !*** ./node_modules/muvjs/muv.mjs ***!
  \************************************/
/*! exports provided: muv */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"muv\", function() { return muv; });\n/* harmony import */ var _muv_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./muv-dom */ \"./node_modules/muvjs/muv-dom.mjs\");\n\n\n\nconst handleEffects = subscriptions => effects => {\n  if (!effects) return;\n  effects.map(effect => {\n    subscriptions(effect);\n  })\n};\n\n\nconst muv = ({model, update, view, ignition, subscriptions}) => rootId => {\n  let root = document.getElementById(rootId);\n  if (!root) return;\n\n  let oldView;\n  let subs;\n\n  const dispatch = action => {\n    const updated = update(model)(action);\n    model = updated.model;\n    if (updated.effects) handleEffects(subs)(updated.effects);\n\n    const newView = view(dispatch)(model);\n    Object(_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"rerender\"])(root)(oldView)(newView)(0);\n    oldView = newView;\n  };\n\n  root.innerHTML = \"\";\n  oldView = view(dispatch)(model);\n  root.appendChild(oldView.render());\n\n  if (subscriptions) subs = subscriptions(dispatch);\n  if (ignition) ignition(dispatch)\n};\n\n\n//# sourceURL=webpack:///./node_modules/muvjs/muv.mjs?");

/***/ }),

/***/ "./src/ignition/ignition.mjs":
/*!***********************************!*\
  !*** ./src/ignition/ignition.mjs ***!
  \***********************************/
/*! exports provided: ignition */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ignition\", function() { return ignition; });\nconst ignition = dispatch => {\n  // dispatch(signIn());\n};\n\n//# sourceURL=webpack:///./src/ignition/ignition.mjs?");

/***/ }),

/***/ "./src/index.mjs":
/*!***********************!*\
  !*** ./src/index.mjs ***!
  \***********************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var muvjs_muv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! muvjs/muv */ \"./node_modules/muvjs/muv.mjs\");\n/* harmony import */ var _model_model_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/model.mjs */ \"./src/model/model.mjs\");\n/* harmony import */ var _update_update_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update/update.mjs */ \"./src/update/update.mjs\");\n/* harmony import */ var _view_view_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/view.mjs */ \"./src/view/view.mjs\");\n/* harmony import */ var _ignition_ignition_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ignition/ignition.mjs */ \"./src/ignition/ignition.mjs\");\n/* harmony import */ var _subscriptions_subscriptions_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscriptions/subscriptions.mjs */ \"./src/subscriptions/subscriptions.mjs\");\n\n\n\n\n\n\n\n\n\n\nObject(muvjs_muv__WEBPACK_IMPORTED_MODULE_0__[\"muv\"])({model: _model_model_mjs__WEBPACK_IMPORTED_MODULE_1__[\"model\"], update: _update_update_mjs__WEBPACK_IMPORTED_MODULE_2__[\"update\"], view: _view_view_mjs__WEBPACK_IMPORTED_MODULE_3__[\"view\"], ignition: _ignition_ignition_mjs__WEBPACK_IMPORTED_MODULE_4__[\"ignition\"], subscriptions: _subscriptions_subscriptions_mjs__WEBPACK_IMPORTED_MODULE_5__[\"subscriptions\"]})('root');\n\n//# sourceURL=webpack:///./src/index.mjs?");

/***/ }),

/***/ "./src/model/model.mjs":
/*!*****************************!*\
  !*** ./src/model/model.mjs ***!
  \*****************************/
/*! exports provided: model */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"model\", function() { return model; });\n\nconst model =\n{\n  coins: new Array(6).fill(new Array(3).fill(0))\n  , lines: new Array(6).fill(0)\n};\n\n//# sourceURL=webpack:///./src/model/model.mjs?");

/***/ }),

/***/ "./src/subscriptions/subscriptions.mjs":
/*!*********************************************!*\
  !*** ./src/subscriptions/subscriptions.mjs ***!
  \*********************************************/
/*! exports provided: subscriptions */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subscriptions\", function() { return subscriptions; });\nconst subscriptions = dispatch => effect => {\n  switch (effect.type) {\n    case \"ajax-request\":\n      let xhr = new XMLHttpRequest();\n      xhr.open(\"GET\", \"http://localhost:8080\", true);\n\n      xhr.onload = () => {\n        dispatch(completeRequest(xhr));\n      };\n\n      xhr.setRequestHeader('Accept', 'application/json');\n      xhr.setRequestHeader('Content-Type', 'application/json');\n\n      xhr.send({});\n      break;\n  }\n\n};\n\n//# sourceURL=webpack:///./src/subscriptions/subscriptions.mjs?");

/***/ }),

/***/ "./src/update/actions.mjs":
/*!********************************!*\
  !*** ./src/update/actions.mjs ***!
  \********************************/
/*! exports provided: chooseCoinSides, chooseCoinTotals */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chooseCoinSides\", function() { return chooseCoinSides; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chooseCoinTotals\", function() { return chooseCoinTotals; });\nconst chooseCoinSides = ( r, c, value ) => {\n  return {\n    type: \"choose-coin-sides\",\n    r,\n    c,\n    value\n  }\n};\n\nconst chooseCoinTotals = (r, value) => {\n  return {\n    type: \"choose-coin-totals\",\n    r,\n    value\n  }\n}\n\n\n//# sourceURL=webpack:///./src/update/actions.mjs?");

/***/ }),

/***/ "./src/update/update.mjs":
/*!*******************************!*\
  !*** ./src/update/update.mjs ***!
  \*******************************/
/*! exports provided: update */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\nconst update = model => action => {\n  let effects = [];\n  switch (action.type) {\n    case \"choose-coin-sides\":\n      model = { ...model };\n      model.coins = model.coins.slice();\n      model.coins[action.r] = model.coins[action.r].slice();\n      model.coins[action.r][action.c] = action.value;\n\n      model.lines = model.lines.slice();\n      model.lines[action.r] = model.coins[action.r].reduce((a, b) => {\n        return a + b\n      }, 0);\n\n      break;\n\n      case \"choose-coin-totals\":\n        model = {...model};\n        model.lines = model.lines.slice();\n        model.lines[action.r] = action.value;\n        \n      break;\n\n  }\n  return { model, effects };\n};\n\n//# sourceURL=webpack:///./src/update/update.mjs?");

/***/ }),

/***/ "./src/view/coin_options.mjs":
/*!***********************************!*\
  !*** ./src/view/coin_options.mjs ***!
  \***********************************/
/*! exports provided: AllCoinOptions, CoinSelection */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AllCoinOptions\", function() { return AllCoinOptions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CoinSelection\", function() { return CoinSelection; });\n/* harmony import */ var _update_actions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../update/actions.mjs */ \"./src/update/actions.mjs\");\n/* harmony import */ var muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! muvjs/muv-dom */ \"./node_modules/muvjs/muv-dom.mjs\");\n/* harmony import */ var _line_numbers_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line_numbers.mjs */ \"./src/view/line_numbers.mjs\");\n\n\n\n\nconst AllCoinOptions = dispatch => {\n  const dispatcher = {\n    chooseCoinSides: (r, c, value) => dispatch(Object(_update_actions_mjs__WEBPACK_IMPORTED_MODULE_0__[\"chooseCoinSides\"])(r, c, value))\n  };\n\n  return model =>\n    Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_1__[\"div\"])({ style: `display: flex; flex-direction: column` })\n      (model.coins.map((row, r) =>\n        Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_1__[\"div\"])({ style: `display: flex; flex-direction: row` })(\n          [Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_1__[\"div\"])({ style: \"margin: 1rem;\" })(`${_line_numbers_mjs__WEBPACK_IMPORTED_MODULE_2__[\"LINE_NUMBERS\"] - r}:`)].concat(row.map((cell, c) =>\n            CoinSelection({\n              onChoice: (value) => dispatcher.chooseCoinSides(r, c, value)\n              , cell: cell\n            }\n            )()\n          ))\n        )\n      ))\n}\n\nconst HEADS_VALUE = 3;\nconst TAILS_VALUE = 2;\n\nconst CoinSelection = props => children =>\n  Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_1__[\"div\"])({ style: \"margin: 1rem;\" })(\n    [\n      , Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_1__[\"button\"])({ onclick: () => props.onChoice(HEADS_VALUE) })('heads')\n      , Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_1__[\"button\"])({ onclick: () => props.onChoice(TAILS_VALUE) })('tails')\n      , Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_1__[\"div\"])()(props.cell)\n    ]\n  );\n\n//# sourceURL=webpack:///./src/view/coin_options.mjs?");

/***/ }),

/***/ "./src/view/hexagrams.mjs":
/*!********************************!*\
  !*** ./src/view/hexagrams.mjs ***!
  \********************************/
/*! exports provided: OpenLine, ClosedLine, GrayedLine, ChangingArrow, NonChangingArrow, FirstHexagram, SecondHexagram, ChangingLines */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OpenLine\", function() { return OpenLine; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ClosedLine\", function() { return ClosedLine; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GrayedLine\", function() { return GrayedLine; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChangingArrow\", function() { return ChangingArrow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NonChangingArrow\", function() { return NonChangingArrow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FirstHexagram\", function() { return FirstHexagram; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SecondHexagram\", function() { return SecondHexagram; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChangingLines\", function() { return ChangingLines; });\n/* harmony import */ var muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! muvjs/muv-dom */ \"./node_modules/muvjs/muv-dom.mjs\");\n/* harmony import */ var _line_numbers_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line_numbers.mjs */ \"./src/view/line_numbers.mjs\");\n\n\n\nconst OpenLine = props => children => Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])()(\"＿＿＿　＿＿＿\");\nconst ClosedLine = props => children => Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])()(\"＿＿＿＿＿＿＿\");\nconst GrayedLine = props => children => Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])({ style: 'opacity: 25%;' })(\"＿＿＿＿＿＿＿\");\nconst ChangingArrow = props => children => Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])()(props.index + 'ー＞');\nconst NonChangingArrow = props => children => Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])({ style: 'opacity: 0%;' })(props.index + 'ー＞');\n\nconst FirstHexagram = dispatch => model =>\n  Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])()(\n    model.lines.map(lineValue =>\n      Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])()(\n        function () {\n          if (lineValue === 0) {\n            return GrayedLine()();\n          } else if (lineValue % 2 === 0) {\n            return OpenLine()()\n          } else {\n            return ClosedLine()()\n          }\n        }()\n      )\n    )\n  )\n\nconst SecondHexagram = dispatch => model =>\n  Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])()(\n    model.lines.map(lineValue =>\n      Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])()(function () {\n        if (lineValue === 9 || lineValue === 8) {\n          return OpenLine()()\n        }\n        else if (lineValue === 6 || lineValue === 7) {\n          return ClosedLine()()\n        } else {\n          return GrayedLine()()\n        }\n      }()\n      )\n    )\n  )\n\nconst ChangingLines = dispatch => model =>\n  Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])({ style: 'margin-left: 1rem; margin-right: 1rem;' })(\n    model.lines.map((lineValue, i) => {\n      const index = _line_numbers_mjs__WEBPACK_IMPORTED_MODULE_1__[\"LINE_NUMBERS\"] - i;\n      return Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])()(function () {\n        if (lineValue === 6 || lineValue === 9) {\n          return ChangingArrow({ index })()\n        } else {\n          return NonChangingArrow({ index })()\n        }\n      }()\n      )\n    }\n    )\n  )\n\n//# sourceURL=webpack:///./src/view/hexagrams.mjs?");

/***/ }),

/***/ "./src/view/line_numbers.mjs":
/*!***********************************!*\
  !*** ./src/view/line_numbers.mjs ***!
  \***********************************/
/*! exports provided: LINE_NUMBERS, LineNumbers */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LINE_NUMBERS\", function() { return LINE_NUMBERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LineNumbers\", function() { return LineNumbers; });\n/* harmony import */ var muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! muvjs/muv-dom */ \"./node_modules/muvjs/muv-dom.mjs\");\n/* harmony import */ var _update_actions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../update/actions.mjs */ \"./src/update/actions.mjs\");\n\n\n\nconst LINE_NUMBERS = 6;\n\nconst LineNumbers = dispatch => {\n  const dispatcher = {\n    changeLines: (r, value) => dispatch(Object(_update_actions_mjs__WEBPACK_IMPORTED_MODULE_1__[\"chooseCoinTotals\"])(r, value))\n  };\n\n  return model =>\n    Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])({ style: 'display: flex; flex-direction: column' })(\n      model.lines.map((lineValue, r) =>\n        Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])({style: 'display: flex; flex-direction: row'})([\n          , Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])()(`${LINE_NUMBERS-r}:`)\n          , Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"input\"])({\n            style: 'display: block'\n            , type: 'number'\n            , oninput: (e) => dispatcher.changeLines(r, e.target.valueAsNumber)\n            , value: (lineValue || null)\n          })()\n        ])\n      )\n    )\n}\n\n\n//# sourceURL=webpack:///./src/view/line_numbers.mjs?");

/***/ }),

/***/ "./src/view/view.mjs":
/*!***************************!*\
  !*** ./src/view/view.mjs ***!
  \***************************/
/*! exports provided: view */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"view\", function() { return view; });\n/* harmony import */ var muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! muvjs/muv-dom */ \"./node_modules/muvjs/muv-dom.mjs\");\n/* harmony import */ var _coin_options_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coin_options.mjs */ \"./src/view/coin_options.mjs\");\n/* harmony import */ var _line_numbers_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line_numbers.mjs */ \"./src/view/line_numbers.mjs\");\n/* harmony import */ var _hexagrams_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hexagrams.mjs */ \"./src/view/hexagrams.mjs\");\n\n\n\n\n\nconst view = dispatch => {\n\n  const AllCoinOptionsContent = Object(_coin_options_mjs__WEBPACK_IMPORTED_MODULE_1__[\"AllCoinOptions\"])(dispatch);\n  const LineNumbersContent = Object(_line_numbers_mjs__WEBPACK_IMPORTED_MODULE_2__[\"LineNumbers\"])(dispatch);\n  const FirstHexagramContent = Object(_hexagrams_mjs__WEBPACK_IMPORTED_MODULE_3__[\"FirstHexagram\"])(dispatch);\n  const SecondHexagramContent = Object(_hexagrams_mjs__WEBPACK_IMPORTED_MODULE_3__[\"SecondHexagram\"])(dispatch);\n  const ChangingLinesContent = Object(_hexagrams_mjs__WEBPACK_IMPORTED_MODULE_3__[\"ChangingLines\"])(dispatch);\n\n  return model =>\n    Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])()(\n      [\n        , Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])({ style: 'display: flex; flex-direction: row' })([\n          , AllCoinOptionsContent(model)\n          , LineNumbersContent(model)\n        ]),\n        , Object(muvjs_muv_dom__WEBPACK_IMPORTED_MODULE_0__[\"div\"])({ style: 'display: flex; flex-direction: row' })([\n          , FirstHexagramContent(model)\n          , ChangingLinesContent(model)\n          , SecondHexagramContent(model)\n        ])\n      ]\n    )\n\n};\n\n\n//# sourceURL=webpack:///./src/view/view.mjs?");

/***/ })

/******/ });