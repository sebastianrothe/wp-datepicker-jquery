parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {function k(e,r){return n(e)||m(e,r)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function m(e,r){var t=[],a=!0,n=!1,i=void 0;try{for(var $,o=e[Symbol.iterator]();!(a=($=o.next()).done)&&(t.push($.value),!r||t.length!==r);a=!0);}catch(c){n=!0,i=c}finally{try{a||null==o.return||o.return()}finally{if(n)throw i}}return t}function n(e){if(Array.isArray(e))return e}function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function g(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,r,t){return r&&g(e.prototype,r),t&&g(e,t),e}var b={locale:"de",timeFormatString:"dd.mm.yy",allowOnlyWeekends:!1,dataApi:"//hauntedleipzig.de/wordpress/wp-content/themes/hauntedleipzig/js/data.txt",dataApiDev:"data/data.txt",queryElement:"#contact-form-66 input.text"};function q(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function h(e,r){for(var a=0;a<r.length;a++){var t=r[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function r(e,r,a){return r&&h(e.prototype,r),a&&h(e,a),e}var d=function(t){var r=a(t.getDate()),e=a(t.getMonth()+1),$=t.getFullYear();return"".concat(r,".").concat(e,".").concat($)},s=function(t){var r=a(t.getHours()),e=a(t.getMinutes());return"".concat(r,":").concat(e)};var a=function(e){return e<10?"0"+e:e},t=function(e){return function(e){if(!e||e.length<2)return console.log("Cannot parse the Date "+e),{};var r=e[0],o=e[1]-1,t=e[2];return new Date(t,o,r)}((e=e||"").split("."))},u=function(e){var r=t(e);return d(r)},v=function(e){return e.trim().replace(/ /g,"").replace(/\r\n/g,"\n")},i=function(e){return v(e).split("\n").map(u)};function w(t,e){var s=new XMLHttpRequest;return s.open("GET",t,!0),s.onload=function(){s.status>=200&&s.status<400?e(s.responseText):console.warn("Failed getting disabled dates. ",s.status)},s.onerror=function(){console.warn("Failed getting disabled dates. ",s.status)},s}var x=function(){function e(){q(this,e)}return r(e,[{key:"parseData",value:function(e){return i(e)}},{key:"useDummyData",value:function(){console.info("Running in TEST mode.");var e=d(new Date);return i(e)}},{key:"fetch",value:function(e){var r=this,a=y?b.dataApi:b.dataApiDev;w(a,function(a){return e(r.parseData(a))}).send()}}]),e}();var y=!0;function z(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function j(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function A(e,r,t){return r&&j(e.prototype,r),t&&j(e,t),e}var B=5,C=6,D=0,E=function(e,$){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!$||0===$.length)return!1;var n=i?d(e):e;return console.info("matching "+n+" with "+$),-1!==$.indexOf(n)},F=function(e){if(!e||!e.getDay)return!1;var $=e.getDay();return $===B||$===C||$===D},G=function(e){return!F(e)};var e={TEXT_LAST_REFRESHED:"Aktualisiert: Heute, um",FULLY_BOOKED:"Ausgebucht",FULLY_BOOKED_TOOLTIP:"Die Tour ist an diesem Tag schon ausgebucht.",NO_TOUR:"Keine Tour",NO_TOUR_TOOLTIP:"An diesem Tag ist leider keine Tour."},c={strings:e};var f={disabled:{title:c.strings.FULLY_BOOKED,tooltip:c.strings.FULLY_BOOKED_TOOLTIP,style:"full"},noRegularTour:{title:c.strings.NO_TOUR,tooltip:c.strings.NO_TOUR_TOOLTIP,style:"not-available"}};var H=function(){function e(r,t){var a=this;z(this,e),this.disabledDates=r||[],this.noRegularTour=f.noRegularTour,this.disabledTour=f.disabled,this.convertToLocal=t||!1,this.isAvailable=function(e){return I(e,a)}}return A(e,[{key:"setDisabledDates",value:function(e){this.disabledDates=e}}]),e}();var I=function(e,r){return b.allowOnlyWeekends&&G(e)?[!1,r.noRegularTour.style,r.noRegularTour.tooltip]:E(e,r.disabledDates,r.convertToLocal)?[!1,r.disabledTour.style,r.disabledTour.tooltip]:[!0]};var J=function(e){(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?e():document.addEventListener("DOMContentLoaded",e)},K=function(){"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var o=Object(e),n=1;n<arguments.length;n++){var r=arguments[n];if(null!=r)for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(o[a]=r[a])}return o},writable:!0,configurable:!0})};var L=function(){jQuery.datepicker.regional.de={closeText:"Schlie\xDFen",prevText:"&#x3C;Zur\xFCck",nextText:"Vor&#x3E;",currentText:"Heute",monthNames:["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["Jan","Feb","M\xE4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],dayNamesShort:["So","Mo","Di","Mi","Do","Fr","Sa"],dayNamesMin:["So","Mo","Di","Mi","Do","Fr","Sa"],weekHeader:"KW",dateFormat:b.timeFormatString,firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},jQuery.datepicker.setDefaults(jQuery.datepicker.regional.de)},M=function(e,r,t){var a=jQuery(e);a?a.datepicker({minDate:0,beforeShow:t,beforeShowDay:r.isAvailable}):console.warn("Could not get jQuery object from element")},N=function(){Object.assign(jQuery.datepicker,{_generateHTMLOriginal:jQuery.datepicker._generateHTML,generateFooter:function(e){var r=s(new Date),t=[],a="<div class=\"ui-datepicker-footer\">",i=(e=e||[]).length;if(i){for(var o=0;o<i;o++){var n=e[o],S="<li><div class=\"color ".concat(n.style,"\" /><div>").concat(n.title,"\n            </div></li>");t.push(S)}a+="<ul class=\"legend\">".concat(t.join(""),"</ul><hr class=\"clear\" />")}return a+="<div class=\"lastRefreshDate\">".concat(c.strings.TEXT_LAST_REFRESHED," ").concat(r,"</div></div>")},_generateHTML:function(e){var r=[];r.push(f.disabled);var t=this.generateFooter(r);return this._generateHTMLOriginal(e)+t}})};function O(e,r,t){L(),N(),M(e,r,t)}var P=function(){function e(){var r=this;o(this,e),this.dateChecker=new H([],!0),this.dataProvider=new x,this.handleOpen=function(){return r.fetchData()}}return p(e,[{key:"init",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var e=this;this.dataProvider.fetch(function(r){console.info("finished loading data: "+r),e.dateChecker.setDisabledDates(r)})}},{key:"render",value:function(){var e=k(document.querySelectorAll(b.queryElement),1)[0];e?O(e,this.dateChecker,this.handleOpen):console.warn("Could not find injection point for the datepicker.")}}]),e}();var Q=function(){K()};Q(),J(function(){var $=new P;$.init(),$.render()});return{"2u/B":{}};});