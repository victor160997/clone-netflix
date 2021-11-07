(this["webpackJsonpclone-netflix"]=this["webpackJsonpclone-netflix"]||[]).push([[0],{34:function(n,t,e){},47:function(n,t,e){"use strict";e.r(t);var r,i=e(0),a=e.n(i),o=e(24),c=e.n(o),s=(e(34),e(2)),l=e(13),d=e(19),p=e(5),u=e.p+"static/media/imageNetflix.3778ab49.png",h=e(3),b=e(4),g=b.a.div(r||(r=Object(h.a)(["\n  background-image: url(",");\n  background-size: cover;\n  width: 99.6vw;\n  height: 99.1vh;\n  margin: -5px -5px -5px -5px;\n  img {\n    height: 45px;\n    margin-left: 3%;\n    margin-top: 20px;\n    background-color: transparent;\n  }\n  div {\n    background-color: transparent;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    section {\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: flex-start;\n      background-color: rgba(0, 0, 0, 0.7);\n      max-width: 470px;\n      min-width: 470px;\n      height: 620px;\n      padding: 40px 68px 40px;\n      h1 {\n          background-color: transparent;\n          font-size: 32px;\n          font-weight: 700;\n          margin-bottom: 28px;\n        }\n      form {\n        background-color: transparent;\n        width: 100%;\n        input {\n          background-color: transparent;\n          border-radius: 4px;\n          border: solid #e87c03 ",";\n          border-top: 0;\n          border-left: 0;\n          border-right: 0;\n          color: #fff;\n          height: 50px;\n          line-height: 50px;\n          padding: 16px;\n          width: 100%;\n          color: #8c8c8c;\n          font-size: 18px;\n          background-color: #333;\n          margin-bottom: 18px;\n        }\n        input:focus {\n          color: white;\n        }\n        p {\n          display:",";\n          background-color: transparent;\n          color: #e87c03;\n          margin-top: -15px;\n          padding: 6px 3px;\n          font-size: 13px;\n        }\n        button {\n          border-radius: 4px;\n          font-size: 16px;\n          font-weight: 700;\n          margin: 24px 0 12px;\n          width: 100%;\n          max-width: 100%;\n          padding: 16px;\n          text-decoration: none;\n          background: #e50914;\n          border:none;\n          cursor: pointer;\n        }\n      }\n    }\n  }\n"])),(function(n){return"".concat(n.background)}),(function(n){return n.validity?0:"2px"}),(function(n){return n.validity?"none":"inherit"})),x=e.p+"static/media/netflixBack.476b87be.png",j=e(1);function f(){var n=Object(i.useState)(!1),t=Object(p.a)(n,2),e=t[0],r=t[1],a=Object(i.useState)(!0),o=Object(p.a)(a,2),c=o[0],h=o[1],b=Object(i.useState)({email:"",password:""}),f=Object(p.a)(b,2),m=f[0],v=f[1],O=function(n){var t=n.target;(m.email.length>5||m.password.length>4)&&h(!0),v(Object(d.a)(Object(d.a)({},m),{},Object(l.a)({},t.name,t.value)))},w=m.email,k=m.password;return Object(j.jsxs)(g,{background:x,validity:c,children:[Object(j.jsx)("img",{src:u,alt:"netflix","data-testid":"logo-netflix"}),Object(j.jsx)("div",{children:Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:"Entrar"}),Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{type:"email",value:w,name:"email",placeholder:"Email ou n\xfamero de telefone",onChange:function(n){return O(n)},"data-testid":"input-email"}),Object(j.jsx)("p",{"data-testid":"check-validity",children:"Informe um email ou n\xfamero de telefone v\xe1lido."}),Object(j.jsx)("input",{type:"password",value:k,name:"password",placeholder:"Senha",onChange:function(n){return O(n)},"data-testid":"input-password"}),Object(j.jsx)("p",{"data-testid":"check-validity",children:"A senha deve ter entre 4 e 60 caracteres."}),Object(j.jsx)("button",{type:"button",onClick:function(){m.email.length<5||m.password.length<4?h(!1):r(!0)},"data-testid":"button-entrar",children:"Entrar"})]})]})}),e&&Object(j.jsx)(s.a,{to:"/home-page"})]})}var m=e(8),v=e.n(m),O=e(9),w=e(16),k="https://api.themoviedb.org/3",y="&api_key=e70501c774a05cf85580e32a27897dc6&language=pt-BR";function z(n){return M.apply(this,arguments)}function M(){return(M=Object(O.a)(v.a.mark((function n(t){var e,r;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(k).concat(t).concat(y));case 3:return e=n.sent,n.next=6,e.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.log("Erro");case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}var L,C,_,S=function(){var n=Object(O.a)(v.a.mark((function n(){return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,z("/discover/tv?with_network=213");case 2:return n.t0=n.sent,n.t1={category:"originals",title:"Originais da Netflix",items:n.t0},n.next=6,z("/trending/all/week?");case 6:return n.t2=n.sent,n.t3={category:"trending",title:"Recomendados",items:n.t2},n.next=10,z("/movie/top_rated?");case 10:return n.t4=n.sent,n.t5={category:"toprated",title:"Em alta",items:n.t4},n.next=14,z("/discover/movie?with_genres=28");case 14:return n.t6=n.sent,n.t7={category:"action",title:"A\xe7\xe3o",items:n.t6},n.next=18,z("/discover/movie?with_genres=35");case 18:return n.t8=n.sent,n.t9={category:"comedy",title:"Com\xe9dia",items:n.t8},n.next=22,z("/discover/movie?with_genres=27");case 22:return n.t10=n.sent,n.t11={category:"horror",title:"Terror",items:n.t10},n.next=26,z("/discover/movie?with_genres=10749");case 26:return n.t12=n.sent,n.t13={category:"romance",title:"Romance",items:n.t12},n.next=30,z("/discover/movie?with_genres=99");case 30:return n.t14=n.sent,n.t15={category:"documentary",title:"Document\xe1rios",items:n.t14},n.abrupt("return",[n.t1,n.t3,n.t5,n.t7,n.t9,n.t11,n.t13,n.t15]);case 33:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),B=function(){var n=Object(O.a)(v.a.mark((function n(t,e){var r;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r={},!t){n.next=14;break}n.t0=e,n.next="movie"===n.t0?5:"tv"===n.t0?9:13;break;case 5:return n.next=7,z("/movie/".concat(t,"?").concat(y));case 7:case 11:return r=n.sent,n.abrupt("break",14);case 9:return n.next=11,z("/tv/".concat(t,"?").concat(y));case 13:return n.abrupt("return",void 0);case 14:return n.abrupt("return",r);case 15:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),E=e(29),F=b.a.div(L||(L=Object(h.a)(["\n  background-image: url(",");\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  margin: -42px -8px 0 -8px;\n  div {\n    width: inherit;\n    height: inherit;\n    background: linear-gradient(to top, #111 10%, transparent 90%);\n    div {\n      width: inherit;\n      height: inherit;\n      background: linear-gradient(to right, #111 30%, transparent 70%);\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      padding-left: 30px;\n      padding-bottom: 150px;\n      h1 {\n        background-color: transparent;\n        font-size: 60px;\n        font-weight: bold;\n        margin-bottom: 0;\n      }\n      section {\n        background-color: transparent;\n        font-size: 18px;\n        font-weight: bold;\n        margin-top: 15px;\n        display: flex;\n        width: 350px;\n\n        p {\n          margin: 0;\n          color: #46d369;\n          margin-right: 15px;\n        }\n        span {\n          margin: 0 15px 0 0;\n        }\n      }\n      p {\n        background-color: transparent;\n        margin-top: 15px;\n        font-size: 20px;\n        color: #999;\n        max-width: 40vw;\n      }\n      nav {\n        background-color: transparent;\n        margin-top: 0;\n        button {\n          display: inline-block;\n          font-size: 20px;\n          font-weight: bold;\n          padding: 12px 25px;\n          border-radius: 5px;\n          text-decoration: none;\n          margin-right: 10px;\n          border: none;\n          transition: all ease 0.2s;\n          cursor: pointer;\n          margin-bottom: 15px;\n        }\n        button:hover {\n          opacity: 0.7;\n        }\n        button:active {\n          background-color: white;\n          opacity: 0.7;\n        }\n      }\n      span {\n        background-color: transparent;\n        strong {\n          background-color: transparent;\n          font-size: 18px;\n          color: #999;\n        }\n      }\n    }\n  }\n  "])),(function(n){return"".concat(n.urlBase).concat(n.background)})),V=b.a.button(C||(C=Object(h.a)(["\n    background-color: #FFF;\n    color: #000;\n  "]))),A=b.a.button(_||(_=Object(h.a)(["\n  background-color: #333;\n  color: #FFF;\n"]))),H=Object(i.createContext)();function P(n){var t=n.item,e=Object(E.useState)(null),r=Object(p.a)(e,2),a=r[0],o=r[1],c=Object(i.useContext)(H),s=c.myList,l=c.setmyList;Object(i.useEffect)((function(){var n=function(){var n=Object(O.a)(v.a.mark((function n(){var e;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,B(t.id,"tv");case 2:e=n.sent,o(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]);return Object(j.jsx)(F,{background:t.backdrop_path,urlBase:"https://image.tmdb.org/t/p/original",children:Object(j.jsx)("div",{children:Object(j.jsxs)("div",{children:[console.log(a),Object(j.jsx)("h1",{children:a&&a.original_name}),Object(j.jsxs)("section",{children:[Object(j.jsxs)("p",{children:[a&&a.vote_average," pontos"]}),Object(j.jsx)("span",{children:a&&new Date(a.first_air_date).getFullYear()}),Object(j.jsxs)("span",{children:[a&&a.number_of_seasons," temporada",Number(a&&a.number_of_seasons)>1&&"s"]})]}),Object(j.jsx)("p",{children:a&&a.overview}),Object(j.jsxs)("nav",{children:[Object(j.jsx)(V,{type:"button",children:"\u25b6 Assistir"}),Object(j.jsx)(A,{type:"button",onClick:function(){return n=a,void(!0!==s[0].items.results.some((function(t){return t.id===n.id}))&&l([{category:"mylist",title:"Minha Lista",items:{results:[].concat(Object(w.a)(s[0].items.results),[n])}}]));var n},children:"+ Minha Lista"})]}),Object(j.jsx)("span",{children:Object(j.jsx)("strong",{children:"G\xeanero:"})})]})})})}var I,R,Y,D=e(15),T=b.a.header(I||(I=Object(h.a)(["\n  position: fixed;\n  z-index: 999;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  justify-content: space-between;\n  padding-left: 35px;\n  padding-right: 35px;\n  align-items: center;\n  background: ",";\n  transition: all ease 0.5s;\n  nav {\n    background-color: transparent;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    img {\n      background-color: transparent;\n      height: 25px;\n      margin-right: 40px;\n      cursor: pointer;\n    }\n    p {\n      background-color: transparent;\n      margin-right: 15px;\n      cursor: pointer;\n      text-decoration: none;\n      transition: all ease 0.25s;\n    }\n    p:hover {\n      color: #999;\n    }\n    a {\n      background-color: transparent;\n      text-decoration: none;\n    }\n  }\n  div {\n    background-color: transparent;\n    img {\n      background-color: transparent;\n      height: 35px;\n      cursor: pointer;\n      border-radius: 3px;\n    }\n    svg {\n      background-color: transparent;\n      height: 35px;\n      margin-right: 25px;\n      cursor: pointer;\n      path {\n        background-color: transparent;\n      }\n    }\n  }\n"])),(function(n){return n.background?"background-color: rgb(17, 17, 17, 0.8)":"linear-gradient(to bottom, #111 15%, transparent 85%)"}));function W(n){var t=n.background;return Object(j.jsxs)(T,{background:t,children:[Object(j.jsxs)("nav",{children:[Object(j.jsx)("img",{src:u,alt:"logo netflix"}),Object(j.jsx)(D.b,{to:"/homepage",children:Object(j.jsx)("p",{children:"Inicio"})}),Object(j.jsx)("a",{href:"#originals",children:Object(j.jsx)("p",{children:"S\xe9ries"})}),Object(j.jsx)("a",{href:"#mylist",children:Object(j.jsx)("p",{children:"Minha lista"})}),Object(j.jsx)("a",{href:"#toprated",children:Object(j.jsx)("p",{children:"Em alta"})})]}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"35px",viewBox:"0 0 24 24",width:"35px",fill:"#fff",children:[Object(j.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(j.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})]}),Object(j.jsx)("img",{src:"https://occ-0-6172-1567.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXYGYCun9Sa2P1_GTaVtADVKfP2uC9e206A3KM1eABgccajzvO4PAR5XMPRiqqrY7SvvY_lneVww04vkQaDMuQ6I-wzm.png?r=c71",alt:"logo netflix"})]})]})}var G,J,K=b.a.div(R||(R=Object(h.a)(["\n  background-color: #111;\n"]))),N=b.a.section(Y||(Y=Object(h.a)(["\n  margin-top: -150px;\n  background-color: transparent;\n  div {\n    background-color: transparent;\n    :hover svg {\n      opacity: 1;\n    }\n    h2 {\n      margin: 5px 0 0 30px;\n      background-color: transparent;\n    }\n    div {\n      background-color: transparent;\n      overflow-x: hidden;\n      padding-left: 30px;\n      div {\n        background-color: transparent;\n        max-width: max-content;\n        display: flex;\n        padding-left: 0px;\n        transition: all ease 0.5s;\n        padding-bottom: 0;\n        section {\n          background-color: transparent;\n          width: 150px;\n          transition: all ease 0.2s;\n          height: max-content;\n          img {\n            width: 150px;\n            transform: scale(0.9);\n            cursor: pointer;\n            transition: all ease 0.2s;\n          }\n          svg {\n            visibility: hidden;\n            transition: all ease 0.2s;\n            margin: 5px;\n            cursor: pointer;\n          }\n        }\n        section:hover {\n          box-shadow: 0 5px 15px black;\n          svg {\n            visibility: visible;\n          }\n          svg:hover {\n            fill: #46d369;\n          }\n          svg:active {\n            fill: white;\n          }\n          img {\n            transform: scale(1);\n            display: inherit;\n          }\n        }\n      }\n    }\n  }\n"]))),q=b.a.div(G||(G=Object(h.a)(["\n  svg {\n    position: absolute;\n    width: 45px;\n    height: 225px;\n    background-color: rgba(0, 0, 0, 0.6);\n    /* margin-left: -55px; */\n    right: 0;\n    z-index: 99;\n    opacity: 0;\n    cursor: pointer;\n    transition: all ease 0.25s;\n  }\n  ",":hover svg {\n    opacity: 0.8;\n  }\n"])),N),Q=b.a.div(J||(J=Object(h.a)(["\n  svg {\n    position: absolute;\n    width: 45px;\n    height: 225px;\n    background-color: rgba(0, 0, 0, 0.6);\n    /* margin-left: -55px; */\n    left: 0;\n    z-index: 99;\n    opacity: 0;\n    cursor: pointer;\n    transition: all ease 0.25s;\n  }\n"]))),X=function(n,t,e,r){return n.items.results.map((function(n){return Object(j.jsxs)("section",{children:[Object(j.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w200").concat(n.poster_path),alt:n.original_title}),!1===r&&Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"28px",viewBox:"0 0 24 24",width:"28px",fill:"#fff",onClick:function(){return function(n){!0!==t[0].items.results.some((function(t){return t.id===n.id}))&&e([{category:"mylist",title:"Minha Lista",items:{results:[].concat(Object(w.a)(t[0].items.results),[n])}}])}(n)},children:[Object(j.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(j.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})]}),Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#fff",children:[Object(j.jsx)("path",{d:"M0 0h24v24H0V0zm0 0h24v24H0V0z",fill:"none"}),Object(j.jsx)("path",{d:"M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"})]})]},n.id)}))};function U(n){var t=n.list,e=n.ItsMyList,r=Object(i.useContext)(H),a=r.myList,o=r.setmyList,c=Object(i.useState)(0),s=Object(p.a)(c,2),l=s[0],d=s[1];return Object(j.jsxs)("div",{id:t.category,children:[Object(j.jsx)("h2",{children:t.title}),Object(j.jsx)(q,{onClick:function(){return function(n,t,e){var r=n-Math.round(window.innerWidth/2),i=150*e.items.results.length;window.innerWidth-i>r&&(r=window.innerWidth-i-90),t(r)}(l,d,t)},children:Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"50px",viewBox:"0 0 24 24",width:"50px",fill:"#fff",children:[Object(j.jsx)("g",{children:Object(j.jsx)("path",{d:"M0,0h24v24H0V0z",fill:"none"})}),Object(j.jsx)("g",{children:Object(j.jsx)("polygon",{points:"6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"})})]})}),Object(j.jsx)(Q,{onClick:function(){return function(n,t){var e=n+Math.round(window.innerWidth/2);e>0&&(e=0),t(e)}(l,d)},children:Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"50px",viewBox:"0 0 24 24",width:"50px",fill:"#fff",children:[Object(j.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none",opacity:".87"}),Object(j.jsx)("path",{d:"M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"})]})}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{style:{marginLeft:l},children:t.items.results&&X(t,a,o,e)})})]},t.category)}function Z(){var n=Object(i.useContext)(H),t=Object(i.useState)([]),e=Object(p.a)(t,2),r=e[0],a=e[1],o=Object(i.useState)(null),c=Object(p.a)(o,2),s=c[0],l=c[1],d=Object(i.useState)(!1),u=Object(p.a)(d,2),h=u[0],b=u[1],g=function(n){var t=n.find((function(n){return"originals"===n.category})).items.results.filter((function(n){return n.overview.length>1})),e=t[Math.floor(Math.random()*(t.length-1))];l(e)};return Object(i.useEffect)((function(){var n=function(){var n=Object(O.a)(v.a.mark((function n(){var t;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,S();case 2:t=n.sent,a(t),g(t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),Object(i.useEffect)((function(){var n=function(){window.scrollY>10?b(!0):b(!1)};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[]),Object(j.jsxs)(K,{children:[Object(j.jsx)(W,{background:h}),s&&Object(j.jsx)(P,{item:s}),Object(j.jsxs)(N,{children:[r.map((function(n,t){return Object(j.jsx)(U,{list:n,ItsMyList:!1},t)})),n.myList[0].items.results.length>0&&n.myList.map((function(n,t){return Object(j.jsx)(U,{list:n,ItsMyList:!0},t)}))]})]})}function $(n){var t=n.children,e=Object(i.useState)([{category:"mylist",title:"Minha Lista",items:{results:[]}}]),r=Object(p.a)(e,2),a={myList:r[0],setmyList:r[1]};return Object(j.jsx)("div",{children:Object(j.jsx)(H.Provider,{value:a,children:t})})}var nn=function(){return Object(j.jsx)($,{children:Object(j.jsxs)(s.d,{children:[Object(j.jsx)(s.b,{path:"/home-page",component:Z}),Object(j.jsx)(s.b,{path:"/",component:f})]})})},tn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,48)).then((function(t){var e=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;e(n),r(n),i(n),a(n),o(n)}))};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(D.a,{basename:"/clone-netflix",children:Object(j.jsx)(nn,{})})}),document.getElementById("root")),tn()}},[[47,1,2]]]);
//# sourceMappingURL=main.7d160bbd.chunk.js.map