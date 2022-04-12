(()=>{"use strict";document.querySelector(".popup_card-open"),document.querySelector(".popup_add-card"),document.querySelector(".popup_edit-profile");var e=document.querySelector(".profile__edit-button"),t=document.querySelector(".profile__avatar"),n=document.querySelector(".profile__add-button");function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(".".concat(n))}var t,n;return t=e,(n=[{key:"renderItems",value:function(e,t){var n=this;e.forEach((function(e){n._renderer(e,t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(".".concat(t)),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__close-image")&&e.close()}))}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=l(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},s.apply(this,arguments)}function l(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function p(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._cardLink=t._popup.querySelector(".popup__image"),t._cardName=t._popup.querySelector(".popup__header"),t}return t=a,(n=[{key:"open",value:function(e,t){this._cardLink.src=t,this._cardLink.alt=e,this._cardName.textContent=e,s(h(a.prototype),"open",this).call(this)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(a);function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_disableButton",value:function(){this._buttonElement.setAttribute("disabled",""),this._buttonElement.classList.add(this._inactiveButtonClass)}},{key:"_activateButton",value:function(){this._buttonElement.removeAttribute("disabled",""),this._buttonElement.classList.remove(this._inactiveButtonClass)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableButton():this._activateButton()}},{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.classList.add(this._errorClass),n.textContent=t}},{key:"_hideInputError",value:function(e){this._formElement.querySelector(".".concat(e.id,"-error")).classList.remove(this._errorClass),e.classList.remove(this._inputErrorClass)}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListener",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._disableButton(),this._inputList.forEach((function(t){e._hideInputError(t),t.value=""}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListener()}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function E(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmit=t,n._inputList=Array.from(n._popup.querySelectorAll(".popup__input")),n._formPopap=n._popup.querySelector(".popup__form"),n._popup__button=n._formPopap.querySelector(".popup__button"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;m(w(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues())}))}},{key:"close",value:function(){m(w(a.prototype),"close",this).call(this),this._formPopap.reset()}},{key:"loading",value:function(e){this._popup__button.value=e}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(a);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function I(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._resetPopap=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"handlerSubmitBtnDelete",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;C(R(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()}))}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(a);function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t,n,r,o,i){var a=i.handlePopupDeleteCard,u=i.handleLikeCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=t.link,this._name=t.name,this._likes=t.likes,this._idUser=n,this._idUserCard=t.owner._id,this._idCard=t._id,this._template=document.querySelector(r).content,this._handleCardClick=o,this._handlePopupDeleteCard=a,this._handleLikeCard=u}var t,n;return t=e,(n=[{key:"_getTamplate",value:function(){return this._template.querySelector(".cards__item").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._cardLikeBtn=this._element.querySelector(".cards__button"),this._cardOpenImage=this._element.querySelector(".cards__image"),this._setEventDeleteCard(),this._setEventLikeCard(),this._cardOpenImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"_setEventDeleteCard",value:function(){var e=this;this._cardDeleteBtn=this._element.querySelector(".cards__button-delete"),this._cardDeleteBtn.addEventListener("click",(function(){e._handlePopupDeleteCard(e._idCard)}))}},{key:"_setEventLikeCard",value:function(){var e=this;this._cardLikeBtn.addEventListener("click",(function(){e._handleLikeCard(e._idCard)}))}},{key:"searchLike",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._idUser}))}},{key:"setLikes",value:function(e){this._likes=e,this._cardsAmountLike.textContent=this._likes.length,this.searchLike()?this._cardLikeBtn.classList.add("cards__button_liked"):this._cardLikeBtn.classList.remove("cards__button_liked")}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"generateCard",value:function(){return this._element=this._getTamplate(),this._cardsAmountLike=this._element.querySelector(".cards__amount-like"),this._setEventListeners(),this._cardOpenImage.src=this._link,this._cardOpenImage.alt=this._name,this._element.querySelector(".cards__text").textContent=this._name,this.setLikes(this._likes),this._idUserCard===this._idUser&&(this._cardDeleteBtn.style.display="inline"),this._element}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=function(){function e(t){var n=t.profileTitle,r=t.profileText,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._valueProfileName=document.querySelector(n),this._valueProfileText=document.querySelector(r),this._profileAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{about:this._valueProfileText.textContent,name:this._valueProfileName.textContent}}},{key:"setUserInfo",value:function(e){this._valueProfileName.textContent=e.name,this._valueProfileText.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._profileAvatar.style.backgroundImage="url(".concat(e.avatar,")")}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D,V=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_getResponse",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._getResponse(t)})).catch(console.log)}},{key:"setCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:"".concat(e.name),link:"".concat(e.link)})}).then((function(e){return t._getResponse(e)})).catch(console.log)}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponse(e)})).catch(console.log)}},{key:"getInfoUser",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._getResponse(t)})).catch(console.log)}},{key:"setInfoUser",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:"".concat(e.name),about:"".concat(e.about)})}).then((function(e){return t._getResponse(e)})).catch(console.log)}},{key:"setAvatarUser",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:"".concat(e.avatar)})}).then((function(e){return t._getResponse(e)})).catch(console.log)}},{key:"setLikes",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._getResponse(e)})).catch(console.log)}},{key:"deleteLikes",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponse(e)})).catch(console.log)}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-39",headers:{authorization:"6f74b82d-4370-4583-b5d4-d634d4b0c354","Content-Type":"application/json"}});function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Promise.all([V.getInfoUser(),V.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];D=o._id,Q.setUserInfo(o),Q.setUserAvatar(o),X.renderItems(i,D)}));var J=function(e,t){z.open(e,t)};e.addEventListener("click",(function(){M["profile-form"].resetValidation();var e=Q.getUserInfo();G.setInputValues(e),G.open()})),n.addEventListener("click",(function(){F.open(),M["card-form"].resetValidation()})),t.addEventListener("click",(function(){M["avatar-form"].resetValidation(),K.open()}));var H,M={};H={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(H.formSelector)).forEach((function(e){var t=new _(H,e),n=e.getAttribute("name");M[n]=t,t.enableValidation()}));var z=new d("popup_card-open");z.setEventListeners();var $=new B("popup_delete-card");$.setEventListeners();var F=new S("popup_add-card",(function(e){F.loading("Сохранение..."),V.setCard(e).then((function(e){X.addItem(W(e,D)),F.close()})).catch((function(e){return console.log(e)})).finally((function(){F.loading("Сохранить")}))}));F.setEventListeners();var G=new S("popup_edit-profile",(function(e){G.loading("Сохранение..."),V.setInfoUser(e).then((function(){Q.setUserInfo(e),G.close()})).catch((function(e){return console.log(e)})).finally((function(){G.loading("Сохранить")}))}));G.setEventListeners();var K=new S("popup_edit-avatar",(function(e){K.loading("Сохранение..."),V.setAvatarUser(e).then((function(){Q.setUserAvatar(e),K.close()})).catch((function(e){return console.log(e)})).finally((function(){K.loading("Сохранить")}))}));K.setEventListeners();var Q=new A({profileTitle:".profile__title",profileText:".profile__text",profileAvatar:".profile__avatar"});function W(e,t){var n=new U(e,t,"#card",J,{handlePopupDeleteCard:function(e){$.open(),$.handlerSubmitBtnDelete((function(){V.deleteCard(e).then((function(){n.deleteCard(),$.close()}))}))},handleLikeCard:function(e){n.searchLike()?V.deleteLikes(e).then((function(e){n.setLikes(e.likes),console.log("убрали лайк")})).catch((function(e){return console.log(e)})):V.setLikes(e).then((function(e){n.setLikes(e.likes),console.log("поставили лайк")}))}});return n.generateCard()}var X=new o({renderer:function(e){var t=W(e,D);X.addItem(t)}},"cards")})();