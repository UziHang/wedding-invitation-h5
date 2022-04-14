/*! For license information please see 4.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"101":function(e,t,r){"use strict";e.exports=r(105)},"102":function(e,t,r){"use strict";r.d(t,"a",(function(){return S})),r.d(t,"b",(function(){return E})),r.d(t,"c",(function(){return A})),r.d(t,"e",(function(){return I})),r.d(t,"f",(function(){return k})),r.d(t,"g",(function(){return M})),r.d(t,"h",(function(){return R})),r.d(t,"i",(function(){return T})),r.d(t,"j",(function(){return D})),r.d(t,"d",(function(){return L}));var o=r(32),n=r.n(o),a=r(106),c=r.n(a),i=r(20),u=r.n(i),s=r(33),p=r.n(s),f=r(34),l=r.n(f),d=r(110),y=r.n(d),v=r(112),b=r.n(v),_=r(114),x=r.n(_),h=r(115),m=r.n(h),O=r(19),w=r.n(O);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,o=x()(e);if(t){var n=x()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return b()(this,r)}}w.a.createElement;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):e.style[t]=r}function updateProp(e,t,r,o,n){var a=e.ref.current,c=n[r],i=o?o[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&a.setAttribute(r,c),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(a.mpScrollTop=c);if("scrollLeft"===r)return void(a.mpScrollLeft=c);if("scrollIntoView"===r)return void(a.mpScrollIntoView=c)}if("function"==typeof c&&r.match(/^on[A-Z]/)){var u=r.substr(2).toLowerCase(),s=c;return"taro-scroll-view-core"===t&&"scroll"===u&&(s=function fn(e){e instanceof CustomEvent&&c.apply(null,Array.from(arguments))}),e.eventHandlers.push([u,s]),a.addEventListener(u,s)}return"string"==typeof c||"number"==typeof c?(a.setAttribute(r,c),void(a[r]=c)):"boolean"==typeof c?c?(a[r]=!0,a.setAttribute(r,c)):(a[r]=!1,a.removeAttribute(r)):void(a[r]=c)}if("string"==typeof c)return void a.setAttribute(r,c);if(!c)return void a.removeAttribute(r);if(o)if("string"==typeof i)a.style.cssText="";else for(var p in i)updateStyle(a,p,"");for(var f in c)updateStyle(a,f,c[f])}else a.className=o?function getClassName(e,t,r){var o=Array.from(e.classList),n=(t.className||t.class||"").split(" "),a=(r.className||r.class||"").split(" "),c=[];return o.forEach((function(e){a.indexOf(e)>-1?(c.push(e),a=a.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&c.push(e)})),(c=[].concat(m()(c),m()(a))).join(" ")}(a,o,n):c}var j=function reactifyWebComponent(e){var t=function(t){y()(Index,t);var r=_createSuper(Index);function Index(e){var t;return p()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(O.createRef)(),t}return l()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(o){"children"===o||"key"===o||o in r.props||updateProp(r,e,o,t,r.props)})),Object.keys(this.props).forEach((function(o){updateProp(r,e,o,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===u()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=c()(t,2),o=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(o,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,o=t.dangerouslySetInnerHTML,n={"ref":this.ref};return o&&(n.dangerouslySetInnerHTML=o),Object(O.createElement)(e,n,r)}}]),Index}(w.a.Component);return w.a.forwardRef((function(e,r){return w.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))};function input_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function input_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?input_ownKeys(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):input_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=j("taro-input-core"),P=(w.a.createElement,w.a.forwardRef((function(e,t){var r=input_objectSpread({},e);return r.hasOwnProperty("focus")&&(r.autoFocus=Boolean(r.focus),delete r.focus),w.a.createElement(g,input_objectSpread(input_objectSpread({},r),{},{"ref":t}))}))),S=(j("taro-view-core"),j("taro-icon-core"),j("taro-progress-core"),j("taro-rich-text-core"),j("taro-text-core"),j("taro-button-core")),E=(j("taro-checkbox-core"),j("taro-checkbox-group-core"),j("taro-editor-core"),j("taro-form-core")),A=P,I=(j("taro-label-core"),j("taro-picker-core"),j("taro-picker-view-core"),j("taro-picker-view-column-core"),j("taro-radio-core")),k=j("taro-radio-group-core"),M=(j("taro-slider-core"),j("taro-switch-core"),j("taro-cover-image-core"),j("taro-textarea-core"),j("taro-cover-view-core"),j("taro-movable-area-core"),j("taro-movable-view-core"),j("taro-scroll-view-core")),R=j("taro-swiper-core"),T=j("taro-swiper-item-core"),D=(j("taro-functional-page-navigator-core"),j("taro-navigator-core"),j("taro-audio-core"),j("taro-camera-core"),j("taro-image-core"),j("taro-live-player-core"),j("taro-video-core")),L=j("taro-map-core");j("taro-canvas-core"),j("taro-ad-core"),j("taro-official-account-core"),j("taro-open-data-core"),j("taro-web-view-core"),j("taro-navigation-bar-core"),j("taro-block-core"),j("taro-custom-wrapper-core")},"103":function(e,t,r){var o=r(104);e.exports=function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},"104":function(e,t){e.exports=function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.default=e.exports,e.exports.__esModule=!0},"105":function(e,t,r){"use strict";r(36);var o=r(19),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;n=a("react.element"),t.Fragment=a("react.fragment")}var c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,u={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var o,a={},s=null,p=null;for(o in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(p=t.ref),t)i.call(t,o)&&!u.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{"$$typeof":n,"type":e,"key":s,"ref":p,"props":a,"_owner":c.current}}t.jsx=q,t.jsxs=q},"106":function(e,t,r){var o=r(107),n=r(108),a=r(103),c=r(109);e.exports=function _slicedToArray(e,t){return o(e)||n(e,t)||a(e,t)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},"107":function(e,t){e.exports=function _arrayWithHoles(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},"108":function(e,t){e.exports=function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,a=[],c=!0,i=!1;try{for(r=r.call(e);!(c=(o=r.next()).done)&&(a.push(o.value),!t||a.length!==t);c=!0);}catch(e){i=!0,n=e}finally{try{c||null==r.return||r.return()}finally{if(i)throw n}}return a}},e.exports.default=e.exports,e.exports.__esModule=!0},"109":function(e,t){e.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},"110":function(e,t,r){var o=r(111);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),t&&o(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},"111":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.default=e.exports,e.exports.__esModule=!0},"112":function(e,t,r){var o=r(20).default,n=r(113);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},"113":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},"114":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.default=e.exports,e.exports.__esModule=!0},"115":function(e,t,r){var o=r(116),n=r(117),a=r(103),c=r(118);e.exports=function _toConsumableArray(e){return o(e)||n(e)||a(e)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},"116":function(e,t,r){var o=r(104);e.exports=function _arrayWithoutHoles(e){if(Array.isArray(e))return o(e)},e.exports.default=e.exports,e.exports.__esModule=!0},"117":function(e,t){e.exports=function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},"118":function(e,t){e.exports=function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},"128":function(e,t,r){"use strict";r.r(t);var o=r(17),n=r(102),a=r(101);t.default=function Cat(){return Object(a.jsx)("div",{"style":{"width":"100vw","height":"100vh"},"children":Object(a.jsx)(n.j,{"style":{"width":"100%","height":"100%","zIndex":99},"id":"video","src":"".concat("https://7072-prod-8ghnr4sm6399c342-1308802462.tcb.qcloud.la","/storyImg/cat.mp4"),"poster":"","controls":!0,"autoplay":!0,"loop":!1,"muted":!1,"onError":function onError(){},"onEnded":function onEnded(){o.default&&o.default.navigateTo({"url":"/pages/index/index?current=2"})}})})}}}]);