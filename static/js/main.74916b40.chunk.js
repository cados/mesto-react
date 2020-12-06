(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),c=a.n(n),r=a(4),i=a.n(r),o=(a(12),a(2)),l=a.p+"static/media/logo.a307e1c4.svg";var u=function(){return Object(s.jsx)("header",{className:"header",children:Object(s.jsx)("img",{src:l,alt:"\u043b\u043e\u0433\u043e",className:"header__logo"})})};var p=function(e){var t=c.a.useState(!1),a=Object(o.a)(t,2),n=a[0],r=a[1];return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("li",{className:"card",children:[Object(s.jsx)("button",{className:"card__trash",type:"button"}),Object(s.jsx)("img",{className:"card__images",onClick:function(){e.onCardClick(e.card)},src:e.card.link,alt:e.card.name}),Object(s.jsxs)("div",{className:"card__item",children:[Object(s.jsx)("h2",{className:"card__title",children:e.card.name}),Object(s.jsxs)("div",{className:"card__wrap",children:[Object(s.jsx)("button",{className:"card__like ".concat(n&&"card__like_active"),onClick:function(){r(!n)},type:"button"}),Object(s.jsx)("div",{className:"card__count",children:e.likeCounter})]})]})]})})},d=a(5),_=a(6),j=new(function(){function e(t){Object(d.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(_.a)(e,[{key:"_responseResult",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return e._responseResult(t)}))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._responseResult(t)}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._responseResult(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._responseResult(e)}))}},{key:"updateUserData",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._responseResult(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._responseResult(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._responseResult(e)}))}},{key:"updateAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._responseResult(e)}))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-17",headers:{authorization:"1cc28c27-5ad4-4b72-97ab-db6c8b468da3","content-type":"application/json"}});var h=function(e){var t=c.a.useState("\u0416\u0430\u043a-\u0418\u0432 \u041a\u0443\u0441\u0442\u043e"),a=Object(o.a)(t,2),n=a[0],r=a[1],i=c.a.useState("\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043e\u043a\u0435\u0430\u043d\u0430"),l=Object(o.a)(i,2),u=l[0],d=l[1],_=c.a.useState(),h=Object(o.a)(_,2),m=h[0],b=h[1],f=c.a.useState([]),O=Object(o.a)(f,2),x=O[0],v=O[1];return c.a.useEffect((function(){Promise.all([j.getUserData(),j.getInitialCards()]).then((function(e){var t=Object(o.a)(e,2),a=t[0],s=t[1];r(a.name),d(a.about),b(a.avatar),v(s)})).catch((function(e){return console.log(e)}))}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("section",{className:"profile",children:[Object(s.jsxs)("div",{className:"profile__item",children:[Object(s.jsx)("div",{className:"profile__item-container",children:Object(s.jsx)("img",{onClick:e.onEditAvatar,src:m,alt:"\u0424\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__avatar"})}),Object(s.jsxs)("div",{className:"profile_text",children:[Object(s.jsxs)("div",{className:"profile__info",children:[Object(s.jsx)("h1",{className:"profile__title",children:n}),Object(s.jsx)("button",{className:"profile__edit-button",onClick:e.onEditProfile,type:"button"})]}),Object(s.jsx)("p",{className:"profile__subtitle",children:u})]})]}),Object(s.jsx)("button",{className:"profile__add-button",onClick:e.onAddCard,type:"button"})]}),Object(s.jsx)("section",{className:"elements",children:Object(s.jsx)("ul",{className:"cards",children:x.map((function(t){return Object(s.jsx)(p,{card:t,likeCounter:t.likes.length,onCardClick:e.onCardClick},t._id)}))})})]})};var m=function(){var e=(new Date).getFullYear();return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",e," Mesto Russia"]})})};var b=function(e){return Object(s.jsx)("div",{className:"popup__container popup__container_image ".concat(e.card&&"popup_opened"),children:Object(s.jsxs)("figure",{className:"popup__image",children:[Object(s.jsx)("button",{className:"popup__close-button popup__close-button_img",onClick:e.onClose,type:"button"}),Object(s.jsx)("img",{className:"popup__images",src:"".concat(e.card.link),alt:e.card.name}),Object(s.jsx)("figcaption",{className:"popup__text",children:e.card.name})]})})};var f=function(e){return Object(s.jsx)("div",{className:"popup__container ".concat(e.isOpen&&"popup_opened"),children:Object(s.jsxs)("form",{className:"popup__form",name:e.name,noValidate:!0,children:[Object(s.jsx)("button",{className:"popup__close-button",onClick:e.onClose,type:"button"}),Object(s.jsx)("h2",{className:"popup__title",children:e.title}),e.children,Object(s.jsx)("button",{className:"popup__button",type:"submit",disabled:!0,children:e.submitText})]})})};var O=function(){var e=c.a.useState(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],r=c.a.useState(!1),i=Object(o.a)(r,2),l=i[0],p=i[1],d=c.a.useState(!1),_=Object(o.a)(d,2),j=_[0],O=_[1],x=c.a.useState(""),v=Object(o.a)(x,2),N=v[0],g=v[1];function k(){n(!1),p(!1),O(!1),g("")}return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(u,{}),Object(s.jsx)(h,{onCardClick:function(e){g(e)},onEditProfile:function(){n(!a)},onAddCard:function(){p(!l)},onEditAvatar:function(){O(!j)}}),Object(s.jsx)(m,{}),Object(s.jsx)(b,{card:N,onClose:k}),Object(s.jsxs)(f,{name:"form",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:a,onClose:k,children:[Object(s.jsxs)("label",{className:"popup__field",children:[Object(s.jsx)("input",{className:"popup__input popup__input_type_name",id:"profile-name",type:"text",name:"name",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",minLength:"2",maxLength:"40",required:!0}),Object(s.jsx)("span",{className:"popup__input-error",id:"profile-name-error"})]}),Object(s.jsxs)("label",{className:"popup__field",children:[Object(s.jsx)("input",{className:"popup__input popup__input_type_prof",id:"profile-prof",type:"text",name:"about",placeholder:"\u0412\u0430\u0448\u0430 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f",minLength:"2",maxLength:"200",required:!0}),Object(s.jsx)("span",{className:"popup__input-error",id:"profile-prof-error"})]})]}),Object(s.jsxs)(f,{name:"image_add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submitText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:l,onClose:k,children:[Object(s.jsxs)("label",{className:"popup__field",children:[Object(s.jsx)("input",{className:"popup__input popup__input_type_name-image",id:"image-name-input",type:"text",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",required:!0}),Object(s.jsx)("span",{className:"popup__input-error",id:"image-name-input-error"})]}),Object(s.jsxs)("label",{className:"popup__field",children:[Object(s.jsx)("input",{className:"popup__input popup__input_type_prof-link",id:"image-source-input",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(s.jsx)("span",{className:"popup__input-error",id:"image-source-input-error"})]})]}),Object(s.jsx)(f,{name:"avatar_add",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:j,onClose:k,children:Object(s.jsxs)("label",{className:"popup__field",children:[Object(s.jsx)("input",{className:"popup__input popup__input_type_avatar-link",id:"avatar-source-input",type:"url",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(s.jsx)("span",{className:"popup__input-error",id:"avatar-source-input-error"})]})}),Object(s.jsx)(f,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submitText:"\u0414\u0430",onClose:k})]})};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.74916b40.chunk.js.map