(()=>{"use strict";var e,t,n=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))},r=document.querySelector(".page"),o=r.querySelector(".card-container"),a=document.querySelectorAll(".popup"),c=r.querySelector("#popup"),l=(r.querySelector("#closePopupButton"),r.querySelector("#openPopupButton")),u=r.querySelector(".profile__avatar"),i=document.querySelector(".elements"),s=r.querySelector("#place"),d=(r.querySelector("#closePlaceButton"),r.querySelector("#openPlaceButton")),p=r.querySelector("#addButton"),f=(r.querySelector("#trash"),r.querySelector("#image")),m=(r.querySelector("#closeImageButton"),f.querySelector(".image__image-full")),_=f.querySelector(".image__title"),v=r.querySelector(".popup__field_name"),y=r.querySelector(".popup__field_job"),h=r.querySelector(".profile__title"),S=r.querySelector(".profile__subtitle"),b=null===(e=document.querySelector(".template"))||void 0===e?void 0:e.content,L=r.querySelector("#place-title"),q=r.querySelector("#place-link"),E=document.querySelectorAll(".popup__close-button"),g=document.querySelector(".profile__strelka"),k=document.querySelector("#new-avatar"),C=document.querySelector(".popup__field_avatar"),A=(document.querySelector(".save_avatar"),document.querySelectorAll(".popup__save-button"),document.querySelector("#addAvatar")),x=document.forms.popup_form,w=document.forms.place_form,B=document.forms.avatar_form,T=[],U={baseURL:"https://nomoreparties.co/v1/plus-cohort-22",headers:{authorization:"8c2802e0-9b5b-4767-b677-ed23ce66f120","Content-Type":"application/json"}};t={formSelector:".popup__form",inputSelector:".popup__field",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__field_error",inputErrorType:"popup__field_type_error",errorClass:"popup__field-error_active"},Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){!function(e,t){var r=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);n(r,o,t),r.forEach((function(a){a.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),t.classList.remove(n.inputErrorType),r.classList.remove(n.errorClass),r.textContent=""}(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),t.classList.add(r.inputErrorType),o.classList.add(r.errorClass),o.textContent=n}(e,t,t.validationMessage,n)}(e,a,t),n(r,o,t)}))}))}(e,t)}));var P=function(e,t){return fetch(e,t).then(j)},j=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))};function R(e){"Escape"===e.key&&D(document.querySelector(".popup_opened"))}function O(e){e.classList.add("popup_opened"),document.addEventListener("keydown",R)}function D(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",R)}function I(e,t){var n=t.target.querySelector(".popup__save-button");n.textContent=e?n.dataset.value1:n.value}a.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&D(e),t.target.classList.contains("popup__close")&&D(e)}))}));var M=function(e,t){e.length>0?(t.textContent=e.length,t.classList.add("elements__number-likes_active")):(t.textContent="",t.classList.remove("elements__number-likes_active"))},N=function(e,t){e.forEach((function(e){e._id===T.id&&t.classList.add("elements__like-button_active")}))};function J(e){var t,n,r=b.querySelector(".template__element").cloneNode(!0),o=r.querySelector(".elements__photo"),a=r.querySelector(".elements__photo-title"),c=r.querySelector(".elements__number-likes"),l=r.querySelector(".elements__trash-button");return o.src=e.link,o.alt=e.name,a.textContent=e.name,r.querySelector(".elements__trash-button").addEventListener("click",(function(){var t;(t=e._id,P("".concat(U.baseURL,"/cards/").concat(t),{method:"DELETE",headers:U.headers})).then((function(e){r.remove()})).catch((function(e){console.log(e)}))})),r.querySelector(".elements__like-button").addEventListener("click",(function(t){var n;t.target.classList.contains("elements__like-button_active")?(n=e._id,P("".concat(U.baseURL,"/cards/likes/").concat(n),{method:"DELETE",headers:U.headers})).then((function(e){N(e.likes,t.target),M(e.likes,c),t.target.classList.remove("elements__like-button_active")})):function(e){return P("".concat(U.baseURL,"/cards/likes/").concat(e),{method:"PUT",headers:U.headers})}(e._id).then((function(e){N(e.likes,t.target),M(e.likes,c)}))})),o.addEventListener("click",(function(e){m.src=e.target.src,m.alt=e.target.alt,_.textContent=e.target.alt,O(f)})),N(e.likes,r.querySelector(".elements__like-button")),M(e.likes,c),t=e.owner._id,n=l,T.id!==t&&n.remove(),r}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Promise.all([P("".concat(U.baseURL,"/users/me"),{headers:U.headers}),P("".concat(U.baseURL,"/cards"),{headers:U.headers})]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,c,l=[],u=!0,i=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){i=!0,o=e}finally{try{if(!u&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(i)throw o}}return l}}(t,n)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[0],c=r[1];h.textContent=a.name,S.textContent=a.about,u.src=a.avatar,T.id=a._id,c.forEach((function(e){var t=J(e);o.append(t)}))})).catch((function(e){console.log(e)})),E.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return D(t)}))})),null==l||l.addEventListener("click",(function(){v.value=h.textContent,y.value=S.textContent,O(c)})),null==d||d.addEventListener("click",(function(){O(s)})),null==x||x.addEventListener("submit",(function(e){e.preventDefault(),I(!0,e),function(e,t){return P("".concat(U.baseURL,"/users/me"),{method:"PATCH",headers:U.headers,body:JSON.stringify({name:e,about:t})})}(v.value,y.value).then((function(e){h.textContent=e.name,S.textContent=e.about,D(c)})).catch((function(e){console.log(e)})).finally((function(){I(!1,e)}))})),w.addEventListener("submit",(function(e){e.preventDefault(),I(!0,e),function(e,t){return P("".concat(U.baseURL,"/cards"),{method:"POST",headers:U.headers,body:JSON.stringify({name:e,link:t})})}(L.value,q.value).then((function(t){!function(e,t){null==t||t.prepend(e)}(J(t),i),D(s),p.classList.add("popup__save-button_inactive"),p.disabled=!0,e.target.reset()})).catch((function(e){console.log(e)})).finally((function(){I(!1,e)}))})),u.addEventListener("mouseover",(function(){g.classList.add("profile__strelka_active")})),u.addEventListener("mouseout",(function(){g.classList.remove("profile__strelka_active")})),u.addEventListener("mousedown",(function(){O(k)})),g.addEventListener("mousedown",(function(){O(k)})),B.addEventListener("submit",(function(e){var t;e.preventDefault(),I(!0,e),(t=C.value,P("".concat(U.baseURL,"/users/me/avatar"),{method:"PATCH",headers:U.headers,body:JSON.stringify({avatar:t})})).then((function(t){u.src=t.avatar,D(k),A.classList.add("popup__save-button_inactive"),A.disabled=!0,e.target.reset()})).catch((function(e){console.log(e)})).finally((function(){I(!1,e)}))}))})();