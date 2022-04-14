/*! For license information please see 14.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"100":function(t,r,a){"use strict";a.d(r,"a",(function(){return i}));var n=a(3);var i=function createCommonjsModule(t,r,a){return t(a={"path":r,"exports":{},"require":function require(t,r){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},a.exports),a.exports}((function(t){!function(){var r={}.hasOwnProperty;function o(){for(var t=[],a=0;a<arguments.length;a++){var i=arguments[a];if(i){var s=Object(n.a)(i);if("string"===s||"number"===s)t.push(i);else if(Array.isArray(i)){if(i.length){var l=o.apply(null,i);l&&t.push(l)}}else if("object"===s)if(i.toString===Object.prototype.toString)for(var b in i)r.call(i,b)&&i[b]&&t.push(b);else t.push(i.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):window.classNames=o}()}))},"94":function(t,r,a){"use strict";a.r(r),a.d(r,"taro_tabbar",(function(){return h}));var n=a(31),i=a(100),__spreadArray=function(t,r){for(var a=0,n=r.length,i=t.length;a<n;a++,i++)t[i]=r[a];return t};function isAbsolute(t){return"/"===t.charAt(0)}function spliceOne(t,r){for(var a=r,n=a+1,i=t.length;n<i;a+=1,n+=1)t[a]=t[n];t.pop()}var s=function splitUrl(t){var r,a=t||"",n={"path":null,"query":null,"fragment":null};return(r=a.indexOf("#"))>-1&&(n.fragment=a.substring(r+1),a=a.substring(0,r)),(r=a.indexOf("?"))>-1&&(n.query=a.substring(r+1),a=a.substring(0,r)),n.path=a,n},l=function TabbarItem(t){var r=t.index,a=t.isSelected,s=void 0!==a&&a,l=t.textColor,b=t.iconPath,d=t.badgeText,c=t.showRedDot,h=void 0!==c&&c,u=t.text,f=t.onSelect,g=Object(i.a)("weui-tabbar__item",{"weui-bar__item_on":s});return Object(n.e)("a",{"key":r,"href":"javascript:;","class":g,"onClick":function v(){f(r)}},Object(n.e)("span",{"style":{"display":"inline-block","position":"relative"}},Object(n.e)("img",{"src":b,"alt":"","class":"weui-tabbar__icon"}),!!d&&Object(n.e)("span",{"class":"weui-badge taro-tabbar-badge","style":{"position":"absolute","top":"-2px","right":"-13px"}},d),h&&Object(n.e)("span",{"class":"weui-badge weui-badge_dot","style":{"position":"absolute","top":"0","right":"-6px"}})),Object(n.e)("p",{"class":"weui-tabbar__label","style":{"color":l}},u))},b=a(17),d=function addLeadingSlash(t){return"/"===t[0]?t:"/"+t},c=function stripBasename(t,r){return function hasBasename(t,r){return new RegExp("^"+r+"(\\/|\\?|#|$)","i").test(t)}(t,r)?t.substr(r.length):t},h=function(){function e(t){var r=this;Object(n.g)(this,t),this.onLongPress=Object(n.c)(this,"longpress",7),this.homePage="",this.customRoutes=[],this.tabbarPos="bottom",this.selectedIndex=-1,this.status=0,this.getOriginUrl=function(t){var a=r.customRoutes.filter((function(r){var a=r[1];return s(a).path===s(t).path}));return a.length?a[0][0]:t},this.getSelectedIndex=function(t){var a=-1;return r.list.forEach((function(r,n){var i=r.pagePath;s(t).path===s(i).path&&(a=n)})),a},this.switchTab=function(t){r.selectedIndex=t,b.switchTab({"url":r.list[t].pagePath})},this.switchTabHandler=function(t){var a=t.url,n=t.successHandler,i=t.errorHandler,s=function resolvePathname(t,r){void 0===r&&(r="");var a,n=t&&t.split("/")||[],i=r&&r.split("/")||[],s=t&&isAbsolute(t),l=r&&isAbsolute(r),b=s||l;if(t&&isAbsolute(t)?i=n:n.length&&(i.pop(),i=i.concat(n)),!i.length)return"/";if(i.length){var d=i[i.length-1];a="."===d||".."===d||""===d}else a=!1;for(var c=0,h=i.length;h>=0;h--){var u=i[h];"."===u?spliceOne(i,h):".."===u?(spliceOne(i,h),c++):c&&(spliceOne(i,h),c--)}if(!b)for(;c--;c)i.unshift("..");!b||""===i[0]||i[0]&&isAbsolute(i[0])||i.unshift("");var f=i.join("/");return a&&"/"!==f.substr(-1)&&(f+="/"),f}(a,r.getOriginUrl(r.getCurrentUrl()||r.homePage)),l=r.getSelectedIndex(s);l>-1?(r.switchTab(l),n({"errMsg":"switchTab:ok"})):i({"errMsg":'switchTab:fail page "'+s+'" is not found'})},this.routerChangeHandler=function(t){var a,n;if(t&&(a=t.toLocation),a&&a.path){var i=d(a.path);n=c("/"===i?r.homePage:i,r.conf.basename||"/")}else n=r.getCurrentUrl();r.selectedIndex=r.getSelectedIndex(r.getOriginUrl(n))},this.setTabBarBadgeHandler=function(t){var a=t.index,n=t.text,i=t.successHandler,s=t.errorHandler,l=__spreadArray([],r.list);a in l?(l[a].showRedDot=!1,l[a].badgeText=n,i({"errMsg":"setTabBarBadge:ok"})):s({"errMsg":"setTabBarBadge:fail tabbar item not found"}),r.list=l},this.removeTabBarBadgeHandler=function(t){var a=t.index,n=t.successHandler,i=t.errorHandler,s=__spreadArray([],r.list);a in s?(s[a].badgeText=null,s[a].badgeText=null,n({"errMsg":"removeTabBarBadge:ok"})):i({"errMsg":"removeTabBarBadge:fail tabbar item not found"}),r.list=s},this.showTabBarRedDotHandler=function(t){var a=t.index,n=t.successHandler,i=t.errorHandler,s=__spreadArray([],r.list);a in s?(s[a].badgeText=null,s[a].showRedDot=!0,n({"errMsg":"showTabBarRedDot:ok"})):i({"errMsg":"showTabBarRedDot:fail tabbar item not found"}),r.list=s},this.hideTabBarRedDotHandler=function(t){var a=t.index,n=t.successHandler,i=t.errorHandler,s=__spreadArray([],r.list);a in s?(s[a].showRedDot=!1,n({"errMsg":"hideTabBarRedDot:ok"})):i({"errMsg":"hideTabBarRedDot:fail tabbar item not found"}),r.list=s},this.showTabBarHandler=function(t){var a=t.successHandler;r.status=0,a({"errMsg":"showTabBar:ok"})},this.hideTabBarHandler=function(t){var a=t.animation,n=t.successHandler;r.status=a?2:1,n({"errMsg":"hideTabBar:ok"})},this.setTabBarStyleHandler=function(t){var a=t.color,n=t.selectedColor,i=t.backgroundColor,s=t.borderStyle,l=t.successHandler;i&&(r.backgroundColor=i),s&&(r.borderStyle=s),a&&(r.color=a),n&&(r.selectedColor=n),l({"errMsg":"setTabBarStyle:ok"})},this.setTabBarItemHandler=function(t){var a=t.index,n=t.iconPath,i=t.selectedIconPath,s=t.text,l=t.successHandler,b=t.errorHandler,d=__spreadArray([],r.list);a in d?(n&&(d[a].iconPath=n),i&&(d[a].selectedIconPath=i),s&&(d[a].text=s),l({"errMsg":"setTabBarItem:ok"})):b({"errMsg":"setTabBarItem:fail tabbar item not found"}),r.list=d};var a=this.conf.list,i=this.conf.customRoutes;if("[object Array]"!==Object.prototype.toString.call(a)||a.length<2||a.length>5)throw new Error("tabBar 配置错误");for(var l in this.homePage=d(this.conf.homePage),i)this.customRoutes.push([l,i[l]]);a.forEach((function(t){0!==t.pagePath.indexOf("/")&&(t.pagePath="/"+t.pagePath)})),this.list=a,this.borderStyle=this.conf.borderStyle,this.backgroundColor=this.conf.backgroundColor,this.color=this.conf.color,this.selectedColor=this.conf.selectedColor}return e.prototype.getCurrentUrl=function(){var t,r=this.conf.mode,a=this.conf.basename||"/";if("hash"===r){var n=window.location.href,i=n.indexOf("#");t=-1===i?"":n.substring(i+1)}else t=location.pathname;var s=d(c(t,a));return"/"===s?this.homePage:s},e.prototype.bindEvent=function(){b.eventCenter.on("__taroRouterChange",this.routerChangeHandler),b.eventCenter.on("__taroSwitchTab",this.switchTabHandler),b.eventCenter.on("__taroSetTabBarBadge",this.setTabBarBadgeHandler),b.eventCenter.on("__taroRemoveTabBarBadge",this.removeTabBarBadgeHandler),b.eventCenter.on("__taroShowTabBarRedDotHandler",this.showTabBarRedDotHandler),b.eventCenter.on("__taroHideTabBarRedDotHandler",this.hideTabBarRedDotHandler),b.eventCenter.on("__taroShowTabBar",this.showTabBarHandler),b.eventCenter.on("__taroHideTabBar",this.hideTabBarHandler),b.eventCenter.on("__taroSetTabBarStyle",this.setTabBarStyleHandler),b.eventCenter.on("__taroSetTabBarItem",this.setTabBarItemHandler)},e.prototype.removeEvent=function(){b.eventCenter.off("__taroRouterChange",this.routerChangeHandler),b.eventCenter.off("__taroSwitchTab",this.switchTabHandler),b.eventCenter.off("__taroSetTabBarBadge",this.setTabBarBadgeHandler),b.eventCenter.off("__taroRemoveTabBarBadge",this.removeTabBarBadgeHandler),b.eventCenter.off("__taroShowTabBarRedDotHandler",this.showTabBarRedDotHandler),b.eventCenter.off("__taroHideTabBarRedDotHandler",this.hideTabBarRedDotHandler),b.eventCenter.off("__taroShowTabBar",this.showTabBarHandler),b.eventCenter.off("__taroHideTabBar",this.hideTabBarHandler),b.eventCenter.off("__taroSetTabBarStyle",this.setTabBarStyleHandler),b.eventCenter.off("__taroSetTabBarItem",this.setTabBarItemHandler)},e.prototype.componentDidLoad=function(){this.tabbarPos=this.tabbar.nextElementSibling?"top":"bottom",this.bindEvent(),this.routerChangeHandler()},e.prototype.disconnectedCallback=function(){this.removeEvent()},e.prototype.render=function(){var t,r,a=this,s=this.tabbarPos,b=void 0===s?"bottom":s,d=this.status,c=Object(i.a)("weui-tabbar",((t={})["taro-tabbar__border-"+(this.borderStyle||"black")]=!0,t)),h=-1===this.selectedIndex||1===d,u=2===d;return Object(n.e)(n.a,{"class":Object(i.a)("taro-tabbar__tabbar","taro-tabbar__tabbar-"+b,(r={},r["taro-tabbar__tabbar-hide"]=h,r["taro-tabbar__tabbar-slideout"]=u,r))},Object(n.e)("div",{"class":c,"style":{"backgroundColor":this.backgroundColor||""}},this.list.map((function(t,r){var i,s,b=a.selectedIndex===r;return b?(i=a.selectedColor||"",s=t.selectedIconPath):(i=a.color||"",s=t.iconPath),Object(n.e)(l,{"index":r,"onSelect":a.switchTab.bind(a),"isSelected":b,"textColor":i,"iconPath":s,"text":t.text,"badgeText":t.badgeText,"showRedDot":t.showRedDot})}))))},Object.defineProperty(e.prototype,"tabbar",{"get":function get(){return Object(n.d)(this)},"enumerable":!1,"configurable":!0}),e}();h.style="html,body{height:100%}#app{height:100%}.taro-tabbar__border-white::before{border-top-color:#fff !important}.taro-tabbar__container{display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.taro-tabbar__panel{-ms-flex:1;flex:1;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}.taro-tabbar__tabbar{position:relative;height:50px;width:100%;-webkit-transition:bottom 0.2s, top 0.2s;transition:bottom 0.2s, top 0.2s}.taro-tabbar__tabbar-top{top:0}.taro-tabbar__tabbar-bottom{bottom:0}.taro-tabbar__tabbar-hide{display:none}.taro-tabbar__tabbar-slideout{top:-52px;-ms-flex:0 0;flex:0 0}.taro-tabbar__panel+.taro-tabbar__tabbar-slideout{top:auto;bottom:-52px}"}}]);