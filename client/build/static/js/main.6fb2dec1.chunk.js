(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{153:function(e,t,r){},154:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(25),s=r.n(c),a=r(12),i=r(13),o=r(14),l=r(8),u=r.n(l),d=r(11),j=r(17),m=r(18),b=r.n(m),h={signIn:function(e){return function(){var t=Object(j.a)(u.a.mark((function t(r,n){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.post("https://mytinerary-felix.herokuapp.com/api/user/signin",Object(d.a)({},e));case 3:return(c=t.sent).data.success&&r({type:"LOG_IN",payload:c.data.response}),t.abrupt("return",c);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",{success:!1,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,r){return t.apply(this,arguments)}}()},signUp:function(e){return function(){var t=Object(j.a)(u.a.mark((function t(r,n){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.post("https://mytinerary-felix.herokuapp.com/api/user/signup",Object(d.a)({},e));case 3:return(c=t.sent).data.success&&r({type:"LOG_IN",payload:c.data.response}),t.abrupt("return",c);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",{success:!1,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,r){return t.apply(this,arguments)}}()},logOut:function(){return function(e,t){e({type:"LOG_OUT"})}},logInLS:function(e){return function(){var t=Object(j.a)(u.a.mark((function t(r,n){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.get("https://mytinerary-felix.herokuapp.com/api/users/validation",{headers:{Authorization:"Bearer "+e}});case 3:c=t.sent,r({type:"LOG_IN",payload:{token:e,firstName:c.data.firstName,src:c.data.src,_id:c.data._id}}),t.next=10;break;case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",r({type:"LOG_OUT"}));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}()}},p=r(155),O=r(156),f=r(157),x=r(158),g=r(159),v=r(165),y=r(164),N=r(166),k=r(160),w=r(0),_={logOut:h.logOut},I=Object(o.b)((function(e){return{token:e.user.token,src:e.user.src,firstName:e.user.firstName}}),_)((function(e){var t=Object(n.useState)(!1),r=Object(a.a)(t,2),c=r[0],s=r[1];return Object(w.jsxs)(p.a,{className:"p-0 d-flex justify-content-between",color:"light",light:!0,expand:"md",children:[Object(w.jsx)(O.a,{children:Object(w.jsx)("img",{className:"logo",src:"/assets/logo_mytinerary.png",alt:"logo"})}),Object(w.jsxs)("div",{className:"d-flex ",children:[Object(w.jsx)(f.a,{onClick:function(){return s(!c)}}),Object(w.jsxs)(x.a,{isOpen:c,navbar:!0,children:[Object(w.jsx)(i.c,{className:"mx-3 text-secondary",exact:!0,to:"/",children:"Home"}),Object(w.jsx)(i.c,{className:"me-3 text-secondary",to:"/cities",children:"Cities"}),Object(w.jsx)(g.a,{className:"mr-auto ",navbar:!0,children:Object(w.jsxs)(v.a,{nav:!0,inNavbar:!0,children:[Object(w.jsx)(y.a,{nav:!0,caret:!0,children:e.token?Object(w.jsx)("img",{className:"logo",src:e.src,alt:"logo"}):Object(w.jsx)("img",{className:"logo",src:"/assets/logo-usuario.png",alt:"logo"})}),Object(w.jsxs)(N.a,{right:!0,children:[Object(w.jsxs)(k.a,{children:[e.token&&Object(w.jsxs)("h6",{children:[" Welcome ",e.firstName,"!"]}),!e.token&&Object(w.jsx)(i.b,{to:"/sign_up",children:Object(w.jsx)("p",{children:"Sign up"})})]}),Object(w.jsx)(k.a,{children:!e.token&&Object(w.jsx)(i.b,{to:"/sign_in",children:Object(w.jsx)("p",{children:"Sign in"})})}),Object(w.jsx)(k.a,{children:e.token&&Object(w.jsx)("p",{onClick:function(){return e.logOut()},children:"Log out"})})]})]})})]})]})]})})),C=function(){return Object(w.jsx)("header",{children:Object(w.jsx)(I,{})})},S={logOut:h.logOut},E=Object(o.b)((function(e){return{token:e.user.token,src:e.user.src,firstName:e.user.firstName}}),S)((function(e){return Object(w.jsx)("footer",{children:Object(w.jsxs)("div",{className:"contenedor-principal-footer",children:[Object(w.jsxs)("div",{className:"contenedor-footer1",children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("h4",{children:"Ready to enjoy?"}),Object(w.jsx)("h5",{children:" Let's get started!"})]}),Object(w.jsx)(i.b,{to:"/cities",children:Object(w.jsx)("button",{className:" boton-footer btn btn-primary my-2",type:"button","data-bs-toggle":"collapse",children:"Get Started"})})]}),Object(w.jsxs)("div",{className:"contenedor-footer2",children:[Object(w.jsx)("div",{className:"titulo-2",children:Object(w.jsxs)("h1",{children:[" MY",Object(w.jsx)("span",{className:"tinerary",children:"TINERARY"})," "]})}),Object(w.jsx)("div",{children:Object(w.jsxs)("div",{className:"nav-footer",children:[Object(w.jsx)(i.b,{to:"/",children:Object(w.jsx)("p",{children:"HOME"})}),Object(w.jsx)(i.b,{to:"/cities",children:Object(w.jsx)("p",{children:"CITIES"})}),!e.token&&Object(w.jsx)(i.b,{to:"/sign_up",children:Object(w.jsx)("p",{children:"SIGN UP"})}),!e.token&&Object(w.jsx)(i.b,{to:"/sign_in",children:Object(w.jsx)("p",{children:"SIGN IN"})}),e.token&&Object(w.jsx)("p",{onClick:function(){return e.logOut()},children:"LOG OUT"})]})}),Object(w.jsxs)("div",{className:"contenedor-contacto",children:[Object(w.jsx)("h6",{children:"Contact Us"}),Object(w.jsx)("p",{children:"\u2706 011 4105-2100"}),Object(w.jsx)("p",{children:"Florida 537,Buenos Aires"})]}),Object(w.jsxs)("div",{className:"contenedor-redes",children:[Object(w.jsx)("h6",{children:"Follow us"}),Object(w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"bi bi-facebook iconos",viewBox:"0 0 16 16",children:Object(w.jsx)("path",{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"})}),Object(w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"bi bi-instagram iconos",viewBox:"0 0 16 16",children:Object(w.jsx)("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"})}),Object(w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"bi bi-whatsapp iconos",viewBox:"0 0 16 16",children:Object(w.jsx)("path",{d:"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"})})]})]}),Object(w.jsx)("h4",{children:" \xa9 MYtinerary Project 2021 - All Rights Reserved"})]})})})),T=function(){return Object(w.jsxs)("div",{className:"contenedor-hero",children:[Object(w.jsx)("video",{autoPlay:"autoplay",loop:!0,muted:!0,children:Object(w.jsx)("source",{src:"/assets/video_hero.mp4"})}),Object(w.jsxs)("div",{className:"contenedor-hero",children:[Object(w.jsx)("div",{className:"titulo my-3",children:Object(w.jsxs)("h1",{children:[" MY",Object(w.jsx)("span",{className:"tinerary",children:"TINERARY"})," "]})}),Object(w.jsx)("div",{className:"contenedor-slogan",children:Object(w.jsx)("div",{className:"typewriter",children:Object(w.jsx)("h4",{children:"Find your perfect trip, designed by insiders who know and love their cities!"})})}),Object(w.jsxs)("div",{className:"contenedor_llamada_a_la_accion",children:[Object(w.jsx)("p",{children:"Let your adventure begin!"}),Object(w.jsx)("button",{children:Object(w.jsx)(i.c,{to:"/cities",children:Object(w.jsx)("p",{children:"CLICK HERE!"})})})]})]})]})},A=r(85),L=r(161),F=r(162),G=r(163),R=[{src:[{ruta:"/assets/oslo.jpg",texto:"Oslo-Norway"},{ruta:"/assets/arendal.jpg",texto:"Arendal-Norway"},{ruta:"/assets/bergen.jpg",texto:"Bergen-Norway"},{ruta:"/assets/stavanger.jpg",texto:"Stavanger-Norway"}]},{src:[{ruta:"/assets/Skelleftea.jpg",texto:"Skelleftea\u030a-Sweden"},{ruta:"/assets/estocolmo.jpg",texto:"Stockholm-Sweden"},{ruta:"/assets/helsinki.jpeg",texto:"Helsinki-Finland"},{ruta:"/assets/rovaniemi.jpeg",texto:"Rovaniemi-Finland"}]},{src:[{ruta:"/assets/copenahue.jpeg",texto:"Copenhagen-Denmark"},{ruta:"/assets/Reykjavik.jpeg",texto:"Reykjavik-Iceland"},{ruta:"/assets/Selfoss islandia.jpeg",texto:"Selfoss-Iceland"},{ruta:"/assets/Saariselk\xe4.jpeg",texto:"Saariselk\xe4-Findald"}]}],B=function(e){var t=Object(n.useState)(0),r=Object(a.a)(t,2),c=r[0],s=r[1],i=Object(n.useState)(!1),o=Object(a.a)(i,2),l=o[0],u=o[1],d=function(){if(!l){var e=c===R.length-1?0:c+1;s(e)}},j=function(){if(!l){var e=0===c?R.length-1:c-1;s(e)}},m=R.map((function(e,t){return Object(w.jsx)(A.a,{onExiting:function(){return u(!0)},onExited:function(){return u(!1)},children:Object(w.jsx)("div",{className:"contenedor-carrousel",children:e.src.map((function(e){return Object(w.jsx)("div",{id:"foto_carrousel",style:{backgroundImage:'url("'.concat(e.ruta,'")')},children:Object(w.jsx)("h3",{className:"texto-carousel",children:e.texto})},e.texto)}))})},t)}));return Object(w.jsxs)(L.a,{activeIndex:c,next:d,previous:j,children:[Object(w.jsx)(F.a,{items:m,activeIndex:c,onClickHandler:function(e){l||s(e)}}),m,Object(w.jsx)(G.a,{direction:"prev",directionText:"",onClickHandler:j}),Object(w.jsx)(G.a,{direction:"next",directionText:"",onClickHandler:d})]})},U=function(){return Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)("div",{className:"row ",children:[Object(w.jsxs)("div",{className:"col-12 col-md-6",children:[Object(w.jsx)("div",{className:"contenedor-titulo-info-countries",children:Object(w.jsx)("h3",{children:" NORDIC TRAVEL GUIDE"})}),Object(w.jsx)("p",{children:"The Nordic countries have stunning landscapes, the northern lights, historic neighbourhoods and modern cities. There\u2019s a lot to love about the Nordic countries of Europe."}),Object(w.jsxs)("div",{className:"row d-flex ",children:[Object(w.jsxs)("div",{className:"col-6 caja-columna1-paises",children:[Object(w.jsxs)("div",{className:"caja-banderas d-flex",children:[Object(w.jsx)("img",{className:"align-self-center",src:"/assets/denmark_flags.png",alt:"denmark"}),Object(w.jsx)("p",{children:"Denmark"})]}),Object(w.jsxs)("div",{className:"caja-banderas d-flex",children:[Object(w.jsx)("img",{className:"align-self-center",src:"/assets/norway_flags.png",alt:"Norway"}),Object(w.jsx)("p",{children:"Norway"})]}),Object(w.jsxs)("div",{className:"caja-banderas d-flex",children:[Object(w.jsx)("img",{className:"align-self-center",src:"/assets/greenlandFlag.png",alt:"Greenland"}),Object(w.jsx)("p",{children:"Greenland"})]})]}),Object(w.jsxs)("div",{className:" col-6 caja-columna2-paises",children:[Object(w.jsxs)("div",{className:"caja-banderas d-flex",children:[Object(w.jsx)("img",{className:"align-self-center",src:"/assets/sweden_flags.png",alt:"Sweden"}),Object(w.jsx)("p",{children:"Sweden"})]}),Object(w.jsxs)("div",{className:"caja-banderas d-flex",children:[Object(w.jsx)("img",{className:"align-self-center",src:"/assets/finland_flags.png",alt:"Finland"}),Object(w.jsx)("p",{children:"Finland"})]}),Object(w.jsxs)("div",{className:"caja-banderas d-flex",children:[Object(w.jsx)("img",{className:"align-self-center",src:"/assets/iceland_flags.png",alt:"Iceland"}),Object(w.jsx)("p",{children:"Iceland"})]})]})]})]}),Object(w.jsx)("div",{className:"d-md-block col-md-6 my-3",children:Object(w.jsx)("img",{className:"align-self-center img-fluid",src:"/assets/mapa.png",alt:"map"})})]})})},z=function(){return Object(w.jsxs)("main",{children:[Object(w.jsx)(U,{}),Object(w.jsx)("div",{className:"contenedor-titulo-carousel",children:Object(w.jsx)("h2",{className:"titulo-carousel",children:"Popular MYtineraries"})}),Object(w.jsx)(B,{})]})},D=function(){return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(C,{}),Object(w.jsx)(T,{}),Object(w.jsx)(z,{}),Object(w.jsx)(E,{})]})},P=r(38),Y=r.n(P),H=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{className:"cartel-filtro",children:[Object(w.jsx)("h3",{children:"Sorry, There are not results for your search. Try another one!"}),Object(w.jsx)("img",{src:"/assets/duda.png",alt:"duda"})]})})},M=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{className:"hero-city",style:{backgroundImage:'url("/assets/hero-city.png")'},children:Object(w.jsx)("h1",{children:"Welcome to Cities"})})})},V={getAllCities:function(){return function(){var e=Object(j.a)(u.a.mark((function e(t,r){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://mytinerary-felix.herokuapp.com/api/cities");case 3:if((n=e.sent).data.success){e.next=6;break}return e.abrupt("return",{success:!1,error:"error"});case 6:t({type:"GET_ALL_CITIES",payload:n.data.response}),e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{success:!1,error:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}()},filterCities:function(e){return function(t,r){t({type:"GET_CITIES_FILTERED",payload:e})}}},W={getCities:V.getAllCities,filterCities:V.filterCities},J=Object(o.b)((function(e){return{filteredCities:e.cities.filtered_cities}}),W)((function(e){var t=Object(n.useState)(!0),r=Object(a.a)(t,2),c=r[0],s=r[1],o=e.filteredCities;Object(n.useEffect)((function(){window.scrollTo(0,0),e.getCities().then((function(t){t&&t.error?(Y()("Error","Sorry the cities are not found","error"),e.history.push("/")):s(!1)}))}),[]);return c?Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{className:"contenedor-loading",children:[Object(w.jsx)("h2",{className:"loading",children:"Loading..."}),Object(w.jsx)("img",{src:"/assets/icon_boat.gif",alt:"gif"})]})}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(C,{}),Object(w.jsx)(M,{}),Object(w.jsxs)("div",{className:"contenedor-buscador-cities",children:[Object(w.jsx)("h2",{className:"titulo-cities",children:"Find Your Adventure"}),Object(w.jsx)("input",{type:"text",placeholder:"Search by destination",onChange:function(t){e.filterCities(t.target.value)}})]}),Object(w.jsx)("div",{className:"contenedor-cities",children:0===o.length?Object(w.jsx)(H,{}):o.map((function(e,t){return Object(w.jsx)(i.b,{to:"/info-city/".concat(e._id),children:Object(w.jsx)("div",{className:"foto-cities foto-city".concat(t),style:{backgroundImage:'url("'.concat(e.src,'")')},children:Object(w.jsx)("h3",{className:"texto-fotos-cities",children:e.name})})},t)}))}),Object(w.jsx)(E,{})]})})),K=function(e){var t=e.activities;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{className:"titulo-itinerario my-4",children:Object(w.jsx)("h2",{className:" titulo-activities",children:"Activities"})}),Object(w.jsx)("div",{className:"contenedor-activities",children:t.map((function(e,t){return Object(w.jsx)("div",{id:"foto-activity",style:{backgroundImage:'url("'.concat(e.photo_activity,'")')},children:Object(w.jsx)("h3",{className:"texto-activity",children:e.title})},t)}))})]})},q={getActivityOfItinerary:function(e){return Object(j.a)(u.a.mark((function t(){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.get("https://mytinerary-felix.herokuapp.com/api/activities/".concat(e));case 3:if((r=t.sent).data.success){t.next=8;break}return t.abrupt("return",{success:!1,error:"error"});case 8:return t.abrupt("return",{success:!0,response:r.data.response});case 9:t.next=14;break;case 11:return t.prev=11,t.t0=t.catch(0),t.abrupt("return",{success:!1,error:t.t0});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))}},Q={getAllItineraries:function(){return function(){var e=Object(j.a)(u.a.mark((function e(t,r){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://mytinerary-felix.herokuapp.com/api/itineraries");case 3:if((n=e.sent).data.success){e.next=6;break}return e.abrupt("return",{success:!1,error:"error"});case 6:t({type:"GET_ITINERARIES",payload:n.data.response}),e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{success:!1,error:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}()},getItinerariesOfOneCity:function(e){return function(){var t=Object(j.a)(u.a.mark((function t(r,n){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.get("https://mytinerary-felix.herokuapp.com/api/itineraries/".concat(e));case 3:if((c=t.sent).data.success){t.next=6;break}return t.abrupt("return",{success:!1,error:"error"});case 6:r({type:"GET_ITINERARIES_OF_CITY",payload:c.data.response}),t.next=12;break;case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",{success:!1,error:t.t0});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,r){return t.apply(this,arguments)}}()},likeDislikeItinerary:function(e,t){return function(){var r=Object(j.a)(u.a.mark((function r(n,c){var s;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,b.a.put("https://mytinerary-felix.herokuapp.com/api/itinerary/like/".concat(e),{},{headers:{Authorization:"Bearer "+t}});case 3:if(!(s=r.sent).data.success){r.next=8;break}return r.abrupt("return",{success:!0,response:s.data.response});case 8:throw new Error;case 9:r.next=14;break;case 11:return r.prev=11,r.t0=r.catch(0),r.abrupt("return",{success:!1,error:r.t0});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e,t){return r.apply(this,arguments)}}()},addCommentItinerary:function(e,t,r){return Object(j.a)(u.a.mark((function n(){var c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.a.put("https://mytinerary-felix.herokuapp.com/api/itinerary/comments/".concat(e),{comment:t,actionType:"addComment"},{headers:{Authorization:"Bearer "+r}});case 3:if(!(c=n.sent).data.success){n.next=8;break}return n.abrupt("return",{success:!0,response:c.data.response});case 8:throw new Error;case 9:n.next=14;break;case 11:return n.prev=11,n.t0=n.catch(0),n.abrupt("return",{success:!1,error:n.t0});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))},modifyComment:function(e,t,r){return Object(j.a)(u.a.mark((function n(){var c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.a.put("https://mytinerary-felix.herokuapp.com/api/itinerary/comments/".concat(e),{comment:t,actionType:"modifyComment"},{headers:{Authorization:"Bearer "+r}});case 3:if(!(c=n.sent).data.success){n.next=8;break}return n.abrupt("return",{success:!0,response:c.data.response});case 8:throw new Error;case 9:n.next=14;break;case 11:return n.prev=11,n.t0=n.catch(0),n.abrupt("return",{success:!1,error:n.t0});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))},deleteComment:function(e,t){return function(){var r=Object(j.a)(u.a.mark((function r(n){return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,b.a.put("https://mytinerary-felix.herokuapp.com/api/itinerary/comments/".concat(e),{actionType:"deleteComment"},{headers:{Authorization:"Bearer "+t}});case 3:if(!r.sent.data.success){r.next=8;break}return r.abrupt("return",{success:!0});case 8:throw new Error;case 9:r.next=14;break;case 11:return r.prev=11,r.t0=r.catch(0),r.abrupt("return",{success:!1,error:r.t0});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e){return r.apply(this,arguments)}}()}},X=r(19),Z=r.n(X),$=Object(o.b)((function(e){return{token:e.user.token,_id:e.user._id}}))((function(e){var t=Object(n.useState)(!1),r=Object(a.a)(t,2),c=r[0],s=r[1],i=Object(n.useRef)();Object(n.useEffect)((function(){s(!1)}),[e.render]);var o=e.one_comment.userId._id===e._id,l=Object(w.jsxs)("div",{className:"d-flex contenedor-comentario",children:[c?Object(w.jsxs)(w.Fragment,{children:[" ",Object(w.jsx)("input",{ref:i,type:"text",defaultValue:e.one_comment.comment})," ",Object(w.jsx)("button",{onClick:function(){return e.edit_comment(e.one_comment._id,i.current.value,e.token)},children:"Send"})," "]}):Object(w.jsx)("p",{children:e.one_comment.comment}),Object(w.jsxs)("div",{className:"contenedor-iconos-comentario",children:[Object(w.jsx)("img",{onClick:function(){Z.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){t.isConfirmed&&(e.delete_comment(e.one_comment._id,e.token),Z.a.fire("Deleted!","Your comment has been deleted.","success"))}))},src:"/assets/tacho-de-reciclaje.png",alt:"tacho"}),Object(w.jsx)("img",{onClick:function(){s(!c)},src:"/assets/pencil.png",alt:"pencil"})]})]}),u=o?l:Object(w.jsx)("p",{children:e.one_comment.comment});return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{children:Object(w.jsxs)("div",{className:"caja-foto-nombre-comentario",children:[Object(w.jsx)("div",{className:"foto-perfil-comentario",style:{backgroundImage:'url("'.concat(e.one_comment.userId.src,'")')}}),Object(w.jsxs)("div",{className:"div-comentario",children:[Object(w.jsx)("h5",{children:e.one_comment.userId.firstName}),u]})]})})})})),ee={postComment:Q.addCommentItinerary,deleteComment:Q.deleteComment,modifyComment:Q.modifyComment},te=Object(o.b)((function(e){return{token:e.user.token}}),ee)((function(e){var t=Object(n.useState)(!1),r=Object(a.a)(t,2),c=r[0],s=r[1],i=Object(n.useState)(e.comments),o=Object(a.a)(i,2),l=o[0],u=o[1],d=Object(n.useRef)(),j=function(t,r){e.deleteComment(t,r).then((function(e){if(!e.success)throw new Error;u(l.filter((function(e){return e._id!==t})))})).catch((function(e){return console.log(e)}))},m=function(t,r,n){e.modifyComment(t,r,n).then((function(e){e.success&&(l.forEach((function(e){e._id===t&&(e.comment=r)})),u(l),s(!c))})).catch((function(e){return console.log(e)}))};return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{className:"contenedor-titulo-comentario",children:Object(w.jsx)("h6",{className:"titulo_comments",children:"Comments"})}),Object(w.jsx)("div",{className:"caja_de_comentarios",children:l.map((function(t){return Object(w.jsx)($,{render:c,itineraryId:e.itinerary_id,one_comment:t,delete_comment:j,edit_comment:m},t._id)}))}),Object(w.jsxs)("div",{className:"caja-envio_comentario",children:[Object(w.jsx)("input",{type:"text",ref:d,placeholder:!e.token&&"You have to login to comment",disabled:!e.token}),Object(w.jsx)("button",{onClick:function(t){var r=d.current.value;e.postComment(e.itinerary_id,r,e.token).then((function(e){d.current.value="",u(e.response)})).catch((function(e){return console.log(e)}))},disabled:!e.token,children:"Send Comment"})]})]})})),re={getActtivity:q.getActivityOfItinerary,likeDislike:Q.likeDislikeItinerary},ne=Object(o.b)((function(e){return{token:e.user.token,_id:e.user._id}}),re)((function(e){var t=e.itinerary,r=Object(n.useState)([]),c=Object(a.a)(r,2),s=c[0],i=c[1],o=Object(n.useState)(!1),l=Object(a.a)(o,2),u=l[0],d=l[1],j=Object(n.useState)(t.likes),m=Object(a.a)(j,2),b=m[0],h=m[1],p=b.includes(e._id)?"\ud83d\udc9c ":"\u2661",O=Z.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",Z.a.stopTimer),e.addEventListener("mouseleave",Z.a.resumeTimer)}});Object(n.useEffect)((function(){!0===u&&0===s.length&&e.getActtivity(t._id).then((function(e){if(!e.success)throw new Error;i(e.response)})).catch((function(e){return alert("Sorry, try later")}))}),[u]);return Object(w.jsxs)("div",{className:"cardItinerary my-5",children:[Object(w.jsxs)("div",{className:" container-itinerary ",children:[Object(w.jsx)("div",{className:"foto-itinerary",style:{backgroundImage:'url("'.concat(t.photo_itinerary,'")')}}),Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:"d-flex align-items-center ms-3",children:[Object(w.jsx)("img",{className:"foto-perfil",src:t.photo_author,alt:t.name_author}),Object(w.jsx)("h4",{className:"ms-3 ",children:t.name_author}),Object(w.jsx)("div",{className:"ms-1",children:Object(w.jsxs)("h6",{onClick:function(){e.token?e.likeDislike(t._id,e.token).then((function(e){h(e.response.likes)})).catch((function(e){return console.log(e)})):O.fire({icon:"error",title:"You must be logged in to like a post"})},className:"text-secondary d-flex align-items-center ms-1 corazon",children:[p,"  ",b.length]})})]}),Object(w.jsxs)("div",{className:"contenedor-titulo-descripcion",children:[Object(w.jsx)("div",{className:"titulo-itinerario my-2",children:Object(w.jsx)("h4",{children:t.title})}),Object(w.jsx)("h5",{className:"descripcion-itinerario ms-4 ",children:t.description}),Object(w.jsx)("div",{className:"hashtag",children:t.hashtag.map((function(e,t){return Object(w.jsx)("p",{className:"hashtag-itinerario ms-3 text-secondary",children:e},t)}))}),Object(w.jsxs)("div",{className:"d-flex align-items-center",children:[Object(w.jsx)("h6",{className:"ms-3 text-secondary price",children:"Price:"}),Object(w.jsx)("p",{className:"billetes",children:" \ud83d\udcb5".repeat(parseInt(t.price))}),Object(w.jsx)("p",{className:"reloj",children:"\ud83d\udd53"}),Object(w.jsx)("div",{className:" ms-1",children:Object(w.jsxs)("h6",{className:" horas text-secondary d-flex align-items-center",children:["   ",t.duration," hours"]})})]})]})]})]}),Object(w.jsxs)("div",{className:"boton-itinerios-view",children:[u&&Object(w.jsxs)(w.Fragment,{children:[" ",Object(w.jsx)(K,{activities:s})," ",Object(w.jsx)(te,{itinerary_id:t._id,comments:t.comments})," "]}),Object(w.jsx)("button",{onClick:function(){d(!u)},className:"btn btn-primary my-2",type:"button","data-bs-toggle":"collapse",children:u?"View Less":"View More"})]})]})})),ce=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{className:"cartel-filtro",children:[Object(w.jsx)("h3",{children:"Sorry, There are no itineraries yet for this city "}),Object(w.jsx)("img",{className:"no-itineraries-yet",src:"/assets/retro.jpeg",alt:"ovni"})]})})},se={getItineraries:Q.getAllItineraries,getItinerariesOfCity:Q.getItinerariesOfOneCity},ae=Object(o.b)((function(e){return{itineraries:e.itineraries.itineraries_city,cities:e.cities.total_cities}}),se)((function(e){var t=Object(n.useState)({}),r=Object(a.a)(t,2),c=r[0],s=r[1],o=Object(n.useState)(!0),l=Object(a.a)(o,2),u=l[0],d=l[1];return Object(n.useEffect)((function(){if(window.scrollTo(0,0),0===e.cities.length)return e.history.push("/cities"),!1;s(e.cities.find((function(t){return t._id===e.match.params.id}))),e.getItinerariesOfCity(e.match.params.id).then((function(t){t&&t.error?(Y()("Error","Sorry the itineraries are not found","error"),e.history.push("/cities")):d(!1)}))}),[]),u?Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{className:"contenedor-loading",children:[Object(w.jsx)("h2",{className:"loading",children:"Loading..."}),Object(w.jsx)("img",{src:"/assets/icon_boat.gif",alt:"gif"})]})}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(C,{}),Object(w.jsx)("div",{className:"contenedor-hero-ciudad hero-".concat(c.name),style:{backgroundImage:'url("'.concat(c.src,'")')},children:Object(w.jsxs)("h1",{children:["Welcome to ",c.name]})}),e.itineraries.length>0?e.itineraries.map((function(e,t){return Object(w.jsx)(ne,{itinerary:e},e._id)})):Object(w.jsx)(ce,{}),Object(w.jsx)("div",{className:"contenedor-ciudad",children:Object(w.jsxs)("button",{className:"boton-regreso-cities",children:[" ",Object(w.jsx)(i.b,{to:"/cities",children:Object(w.jsx)("p",{children:"BACK TO CITIES!"})})," "]})}),Object(w.jsx)(E,{})]})})),ie=r(27),oe=r(39),le=r.n(oe),ue={logUser:h.signIn},de=Object(o.b)(null,ue)((function(e){var t="",r=Object(n.useState)({email:"",password:""}),c=Object(a.a)(r,2),s=c[0],o=c[1];Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]);var l=Z.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",Z.a.stopTimer),e.addEventListener("mouseleave",Z.a.resumeTimer)}}),m=function(e){var t=e.target.value,r=e.target.name;o(Object(d.a)(Object(d.a)({},s),{},Object(ie.a)({},r,t)))},b=function(){var t=Object(j.a)(u.a.mark((function t(r){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n={email:r.profileObj.email,password:r.profileObj.googleId,flagGoogle:!0},e.logUser(n).then((function(e){e.data&&!e.data.success?l.fire({icon:"error",title:e.data.error}):e.data&&e.data.success?l.fire({icon:"success",title:"Welcome Back!"}):l.fire({icon:"error",title:"Sorry we have technical problems, come back soon!"})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(C,{}),Object(w.jsx)("main",{className:"main-form",style:{backgroundImage:'url("assets/Home-8.png")'},children:Object(w.jsx)("div",{className:"contenedor-form",children:Object(w.jsxs)("div",{className:"form-signIn",children:[Object(w.jsx)("h2",{className:"title-form",children:"Welcome back!"}),Object(w.jsx)("input",{className:"email",type:"email",name:"email",onChange:m,placeholder:"E-mail"}),Object(w.jsx)("input",{className:"password",type:"password",name:"password",onChange:m,placeholder:"Password"}),Object(w.jsx)("button",{onClick:function(){Object.values(s).forEach((function(e){return!e&&(t=!0)})),t?l.fire({icon:"error",title:"Please fill all the fields"}):e.logUser(s).then((function(e){e.data&&!e.data.success?l.fire({icon:"error",title:e.data.error}):e.data&&e.data.success?l.fire({icon:"success",title:"Welcome Back!"}):l.fire({icon:"error",title:"Sorry we have technical problems, come back soon!"})}))},className:"boton-send btn btn-primary my-2",children:"SEND"}),Object(w.jsx)(le.a,{clientId:"171323830837-f2h0o3o05bh42ij23rp4bhtgngtjog4l.apps.googleusercontent.com",buttonText:"Sign Up with Google",onSuccess:b,onFailure:b,cookiePolicy:"single_host_origin"}),Object(w.jsx)("h5",{children:"Don't have an account? "}),Object(w.jsx)(i.b,{to:"/sign_up",children:Object(w.jsx)("h6",{children:"Sign up here!"})})]})})})]})})),je={postNewUser:h.signUp},me=Object(o.b)(null,je)((function(e){var t="",r=Object(n.useState)({}),c=Object(a.a)(r,2),s=c[0],o=c[1],l=Object(n.useState)([]),m=Object(a.a)(l,2),h=m[0],p=m[1],O=Object(n.useState)({firstName:"",lastName:"",email:"",password:"",src:"",country:""}),f=Object(a.a)(O,2),x=f[0],g=f[1],v=Z.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",Z.a.stopTimer),e.addEventListener("mouseleave",Z.a.resumeTimer)}});Object(n.useEffect)((function(){window.scrollTo(0,0),b.a.get("https://restcountries.eu/rest/v2/all?fields=name").then((function(e){return p(e.data)})).catch((function(e){return console.log(e)}))}),[]);var y=function(e){var t=e.target.value,r=e.target.name;g(Object(d.a)(Object(d.a)({},x),{},Object(ie.a)({},r,t)))},N=function(){var t=Object(j.a)(u.a.mark((function t(r){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n={firstName:r.profileObj.givenName,lastName:r.profileObj.familyName,email:r.profileObj.email,password:r.profileObj.googleId,src:r.profileObj.imageUrl,country:"Norway",google:!0},e.postNewUser(n).then((function(e){e.data&&!e.data.success&&e.data.errors?(o({}),e.data.errors.map((function(e){return o((function(t){return Object(d.a)(Object(d.a)({},t),{},Object(ie.a)({},e.path,e.message))}))}))):e.data&&!e.data.success?v.fire({icon:"error",title:e.data.error}):e.data&&e.data.success?v.fire({icon:"success",title:"Cool your username was created successfully"}):v.fire({icon:"error",title:"Sorry we have technical problems"})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(C,{}),Object(w.jsx)("main",{className:"main-form",style:{backgroundImage:'url("assets/Home-8.png")'},children:Object(w.jsx)("div",{className:"contenedor-form",children:Object(w.jsxs)("div",{className:"form-signIn",children:[Object(w.jsx)("h2",{className:"title-form",children:"Create an Account!"}),Object(w.jsx)("input",{type:"text",name:"firstName",id:"firstName",placeholder:"FirstName",onChange:y}),Object(w.jsx)("p",{children:s.firstName}),Object(w.jsx)("input",{type:"text",name:"lastName",id:"lastName",placeholder:"LastName",onChange:y}),Object(w.jsx)("p",{children:s.lastName}),Object(w.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"E-mail",onChange:y}),Object(w.jsx)("p",{children:s.email}),Object(w.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"Password",onChange:y}),Object(w.jsx)("p",{children:s.password}),Object(w.jsx)("input",{className:s.src&&"estilo_error",type:"url",name:"src",id:"src",placeholder:"Url of your picture",onChange:y}),Object(w.jsx)("p",{children:s.src}),Object(w.jsxs)("select",{name:"country",onChange:y,children:[Object(w.jsx)("option",{className:"option-country",children:"Country"}),h.map((function(e){return Object(w.jsx)("option",{value:e.name,children:e.name},e.name)}))]}),Object(w.jsx)("p",{children:s.country}),Object(w.jsx)("button",{onClick:function(){Object.values(x).forEach((function(e){return!e&&(t=!0)})),t?v.fire({icon:"error",title:"Please fill all the fields"}):e.postNewUser(x).then((function(e){e.data&&!e.data.success&&e.data.errors?(o({}),e.data.errors.map((function(e){return o((function(t){return Object(d.a)(Object(d.a)({},t),{},Object(ie.a)({},e.path,e.message))}))}))):e.data&&!e.data.success?v.fire({icon:"error",title:e.data.error}):e.data&&e.data.success?v.fire({icon:"success",title:"Cool your username was created successfully"}):v.fire({icon:"error",title:"Sorry we have technical problems"})}))},className:" boton-send btn btn-primary my-2",type:"button",children:"SEND"}),Object(w.jsx)(le.a,{clientId:"171323830837-f2h0o3o05bh42ij23rp4bhtgngtjog4l.apps.googleusercontent.com",buttonText:"Sign Up with Google",onSuccess:N,onFailure:N,cookiePolicy:"single_host_origin"}),Object(w.jsx)("h5",{children:"Already have an account?  "}),Object(w.jsx)(i.b,{to:"/sign_in",children:Object(w.jsx)("h6",{children:"Log In here!"})})]})})})]})})),be=r(16),he=(r(141),r(152),r(153),function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(C,{}),Object(w.jsx)("img",{className:"img-fluid",src:"/assets/error.png",alt:"error"})]})}),pe={logInLS:h.logInLS},Oe=Object(o.b)((function(e){return{token:e.user.token}}),pe)((function(e){return Object(n.useEffect)((function(){localStorage.getItem("token")&&e.logInLS(localStorage.getItem("token"))}),[]),Object(w.jsx)(i.a,{children:Object(w.jsxs)(be.d,{children:[Object(w.jsx)(be.b,{exact:!0,path:"/",component:D}),Object(w.jsx)(be.b,{path:"/cities",component:J}),Object(w.jsx)(be.b,{path:"/notFound",component:he}),Object(w.jsx)(be.b,{path:"/info-city/:id",component:ae}),!e.token&&Object(w.jsx)(be.b,{path:"/sign_in",component:de}),!e.token&&Object(w.jsx)(be.b,{path:"/sign_up",component:me}),Object(w.jsx)(be.a,{to:"/"})]})})})),fe=r(34),xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{total_cities:[],filtered_cities:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL_CITIES":return Object(d.a)(Object(d.a)({},e),{},{total_cities:t.payload,filtered_cities:t.payload});case"GET_CITIES_FILTERED":return Object(d.a)(Object(d.a)({},e),{},{filtered_cities:e.total_cities.filter((function(e){return e.name.toUpperCase().trim().startsWith(t.payload.trim().toUpperCase())}))});default:return e}},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{total_itineraries:[],itineraries_city:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ITINERARIES":return Object(d.a)(Object(d.a)({},e),{},{total_itineraries:t.payload});case"GET_ITINERARIES_OF_CITY":return Object(d.a)(Object(d.a)({},e),{},{itineraries_city:t.payload});default:return e}},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{token:null,firstName:null,src:null,_id:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_IN":return localStorage.setItem("token",t.payload.token),localStorage.setItem("firstName",t.payload.firstName),localStorage.setItem("src",t.payload.src),localStorage.setItem("_id",t.payload._id),Object(d.a)(Object(d.a)({},e),{},{token:t.payload.token,firstName:t.payload.firstName,src:t.payload.src,_id:t.payload._id});case"LOG_OUT":return localStorage.removeItem("token"),localStorage.removeItem("firstName"),localStorage.removeItem("src"),localStorage.removeItem("_id"),Object(d.a)(Object(d.a)({},e),{},{token:null,firstName:null,src:null,_id:null});default:return e}},ye=Object(fe.b)({cities:xe,itineraries:ge,user:ve}),Ne=r(86),ke=Object(fe.c)(ye,Object(fe.a)(Ne.a));s.a.render(Object(w.jsx)(o.a,{store:ke,children:Object(w.jsx)(Oe,{})}),document.getElementById("root"))}},[[154,1,2]]]);
//# sourceMappingURL=main.6fb2dec1.chunk.js.map