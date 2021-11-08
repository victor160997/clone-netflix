(this["webpackJsonpclone-netflix"]=this["webpackJsonpclone-netflix"]||[]).push([[0],{34:function(n,t,e){},47:function(n,t,e){"use strict";e.r(t);var r,a=e(0),i=e.n(a),o=e(23),c=e.n(o),s=(e(34),e(2)),l=e(13),d=e(18),p=e(8),u=e.p+"static/media/imageNetflix.3778ab49.png",g=e(6),b=e(7),h=b.a.div(r||(r=Object(g.a)(["\n  background-image: url(",");\n  background-size: cover;\n  width: 99.6vw;\n  height: 99.1vh;\n  margin: -5px -5px -5px -5px;\n  img {\n    height: 45px;\n    margin-left: 3%;\n    margin-top: 20px;\n    background-color: transparent;\n  }\n  div {\n    background-color: transparent;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    section {\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: flex-start;\n      background-color: rgba(0, 0, 0, 0.7);\n      max-width: 470px;\n      min-width: 470px;\n      height: 620px;\n      padding: 40px 68px 40px;\n      h1 {\n          background-color: transparent;\n          font-size: 32px;\n          font-weight: 700;\n          margin-bottom: 28px;\n        }\n      form {\n        background-color: transparent;\n        width: 100%;\n        input {\n          background-color: transparent;\n          border-radius: 4px;\n          border: solid #e87c03 ",";\n          border-top: 0;\n          border-left: 0;\n          border-right: 0;\n          color: #fff;\n          height: 50px;\n          line-height: 50px;\n          padding: 16px;\n          width: 100%;\n          color: #8c8c8c;\n          font-size: 18px;\n          background-color: #333;\n          margin-bottom: 18px;\n        }\n        input:focus {\n          color: white;\n        }\n        p {\n          display:",";\n          background-color: transparent;\n          color: #e87c03;\n          margin-top: -15px;\n          padding: 6px 3px;\n          font-size: 13px;\n        }\n        button {\n          border-radius: 4px;\n          font-size: 16px;\n          font-weight: 700;\n          margin: 24px 0 12px;\n          width: 100%;\n          max-width: 100%;\n          padding: 16px;\n          text-decoration: none;\n          background: #e50914;\n          border:none;\n          cursor: pointer;\n        }\n      }\n    }\n  }\n"])),(function(n){return"".concat(n.background)}),(function(n){return n.validity?0:"2px"}),(function(n){return n.validity?"none":"inherit"})),x=e.p+"static/media/netflixBack.476b87be.png",j=e(1);function f(){var n=Object(a.useState)(!1),t=Object(p.a)(n,2),e=t[0],r=t[1],i=Object(a.useState)(!0),o=Object(p.a)(i,2),c=o[0],g=o[1],b=Object(a.useState)({email:"",password:""}),f=Object(p.a)(b,2),m=f[0],v=f[1],O=function(n){var t=n.target;(m.email.length>5||m.password.length>4)&&g(!0),v(Object(d.a)(Object(d.a)({},m),{},Object(l.a)({},t.name,t.value)))},w=m.email,k=m.password;return Object(j.jsxs)(h,{background:x,validity:c,children:[Object(j.jsx)("img",{src:u,alt:"netflix","data-testid":"logo-netflix"}),Object(j.jsx)("div",{children:Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:"Entrar"}),Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{type:"email",value:w,name:"email",placeholder:"Email ou n\xfamero de telefone",onChange:function(n){return O(n)},"data-testid":"input-email"}),Object(j.jsx)("p",{"data-testid":"check-validity",children:"Informe um email ou n\xfamero de telefone v\xe1lido."}),Object(j.jsx)("input",{type:"password",value:k,name:"password",placeholder:"Senha",onChange:function(n){return O(n)},"data-testid":"input-password"}),Object(j.jsx)("p",{"data-testid":"check-validity",children:"A senha deve ter entre 4 e 60 caracteres."}),Object(j.jsx)("button",{type:"button",onClick:function(){m.email.length<5||m.password.length<4?g(!1):r(!0)},"data-testid":"button-entrar",children:"Entrar"})]})]})}),e&&Object(j.jsx)(s.a,{to:"/movie-page"})]})}var m=e(5),v=e.n(m),O=e(9),w=e(29),k="https://api.themoviedb.org/3",y="&api_key=e70501c774a05cf85580e32a27897dc6&language=pt-BR";function _(n){return z.apply(this,arguments)}function z(){return(z=Object(O.a)(v.a.mark((function n(t){var e,r;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(k).concat(t).concat(y));case 3:return e=n.sent,n.next=6,e.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.log("Erro");case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}var S,C,E,L=function(){var n=Object(O.a)(v.a.mark((function n(){return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,_("/discover/tv?with_network=213");case 2:return n.t0=n.sent,n.t1={category:"originals",title:"Originais da Netflix",items:n.t0},n.next=6,_("/trending/all/week?");case 6:return n.t2=n.sent,n.t3={category:"trending",title:"Recomendados",items:n.t2},n.next=10,_("/movie/top_rated?");case 10:return n.t4=n.sent,n.t5={category:"toprated",title:"Em alta",items:n.t4},n.next=14,_("/discover/movie?with_genres=28");case 14:return n.t6=n.sent,n.t7={category:"action",title:"A\xe7\xe3o",items:n.t6},n.next=18,_("/discover/movie?with_genres=35");case 18:return n.t8=n.sent,n.t9={category:"comedy",title:"Com\xe9dia",items:n.t8},n.next=22,_("/discover/movie?with_genres=27");case 22:return n.t10=n.sent,n.t11={category:"horror",title:"Terror",items:n.t10},n.next=26,_("/discover/movie?with_genres=10749");case 26:return n.t12=n.sent,n.t13={category:"romance",title:"Romance",items:n.t12},n.next=30,_("/discover/movie?with_genres=99");case 30:return n.t14=n.sent,n.t15={category:"documentary",title:"Document\xe1rios",items:n.t14},n.abrupt("return",[n.t1,n.t3,n.t5,n.t7,n.t9,n.t11,n.t13,n.t15]);case 33:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),F=function(){var n=Object(O.a)(v.a.mark((function n(t){var e;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,_("/tv/".concat(t,"?language=pt-BR&api_key=e70501c774a05cf85580e32a27897dc6"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),M=e(28),A=b.a.div(S||(S=Object(g.a)(["\n  background-image: url(",");\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  margin: -42px -8px 0 -8px;\n  div {\n    width: inherit;\n    height: inherit;\n    background: linear-gradient(to top, #111 10%, transparent 90%);\n    div {\n      width: inherit;\n      height: inherit;\n      background: linear-gradient(to right, #111 30%, transparent 70%);\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      padding-left: 30px;\n      padding-bottom: 150px;\n      h1 {\n        background-color: transparent;\n        font-size: 60px;\n        font-weight: bold;\n        margin-bottom: 0;\n      }\n      section {\n        background-color: transparent;\n        font-size: 18px;\n        font-weight: bold;\n        margin-top: 15px;\n        display: flex;\n        width: 350px;\n\n        p {\n          margin: 0;\n          color: #46d369;\n          margin-right: 15px;\n        }\n        span {\n          margin: 0 15px 0 0;\n        }\n      }\n      p {\n        background-color: transparent;\n        margin-top: 15px;\n        font-size: 20px;\n        color: #999;\n        max-width: 40vw;\n      }\n      nav {\n        background-color: transparent;\n        margin-top: 0;\n        button {\n          display: inline-block;\n          font-size: 20px;\n          font-weight: bold;\n          padding: 12px 25px;\n          border-radius: 5px;\n          text-decoration: none;\n          margin-right: 10px;\n          border: none;\n          transition: all ease 0.2s;\n          cursor: pointer;\n          margin-bottom: 15px;\n        }\n        button:hover {\n          opacity: 0.7;\n        }\n        button:active {\n          background-color: white;\n          opacity: 0.7;\n        }\n      }\n      span {\n        background-color: transparent;\n        strong {\n          background-color: transparent;\n          font-size: 18px;\n          color: #999;\n        }\n      }\n    }\n  }\n  "])),(function(n){return"".concat(n.urlBase).concat(n.background)})),B=b.a.button(C||(C=Object(g.a)(["\n    background-color: #FFF;\n    color: #000;\n  "]))),P=b.a.button(E||(E=Object(g.a)(["\n  background-color: #333;\n  color: #FFF;\n"]))),R=Object(a.createContext)();function Y(n){var t=n.item,e=Object(M.useState)(null),r=Object(p.a)(e,2),i=r[0],o=r[1],c=Object(a.useContext)(R),s=c.myList,l=c.setmyList;Object(a.useEffect)((function(){var n=function(){var n=Object(O.a)(v.a.mark((function n(){var e;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,F(t.id);case 2:e=n.sent,o(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]);return Object(j.jsx)(A,{background:t.backdrop_path,urlBase:"https://image.tmdb.org/t/p/original",children:Object(j.jsx)("div",{children:Object(j.jsxs)("div",{children:[console.log(i),Object(j.jsx)("h1",{children:i&&i.original_name}),Object(j.jsxs)("section",{children:[Object(j.jsxs)("p",{children:[i&&i.vote_average," pontos"]}),Object(j.jsx)("span",{children:i&&new Date(i.first_air_date).getFullYear()}),Object(j.jsxs)("span",{children:[i&&i.number_of_seasons," temporada",Number(i&&i.number_of_seasons)>1&&"s"]})]}),Object(j.jsx)("p",{children:i&&i.overview}),Object(j.jsxs)("nav",{children:[Object(j.jsx)(B,{type:"button",children:"\u25b6 Assistir"}),Object(j.jsx)(P,{type:"button",onClick:function(){return n=i,void(!0!==s[0].items.results.some((function(t){return t.id===n.id}))&&l([{category:"mylist",title:"Minha Lista",items:{results:[].concat(Object(w.a)(s[0].items.results),[n])}}]));var n},children:"+ Minha Lista"})]}),Object(j.jsx)("span",{children:Object(j.jsx)("strong",{children:"G\xeanero:"})})]})})})}var D,I,V,T=e(15),G=b.a.header(D||(D=Object(g.a)(["\n  position: fixed;\n  z-index: 999;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  justify-content: space-between;\n  padding-left: 35px;\n  padding-right: 35px;\n  align-items: center;\n  background: ",";\n  transition: all ease 0.5s;\n  nav {\n    background-color: transparent;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    img {\n      background-color: transparent;\n      height: 25px;\n      margin-right: 40px;\n      cursor: pointer;\n    }\n    p {\n      background-color: transparent;\n      margin-right: 15px;\n      cursor: pointer;\n      text-decoration: none;\n      transition: all ease 0.25s;\n    }\n    p:hover {\n      color: #999;\n    }\n    a {\n      background-color: transparent;\n      text-decoration: none;\n    }\n  }\n  div {\n    background-color: transparent;\n    img {\n      background-color: transparent;\n      height: 35px;\n      cursor: pointer;\n      border-radius: 3px;\n    }\n    svg {\n      background-color: transparent;\n      height: 35px;\n      margin-right: 25px;\n      cursor: pointer;\n      path {\n        background-color: transparent;\n      }\n    }\n  }\n"])),(function(n){return n.background?"background-color: rgb(17, 17, 17, 0.8)":"linear-gradient(to bottom, #111 15%, transparent 85%)"}));function J(n){var t=n.background;return Object(j.jsxs)(G,{background:t,children:[Object(j.jsxs)("nav",{children:[Object(j.jsx)("img",{src:u,alt:"logo netflix"}),Object(j.jsx)(T.b,{to:"/homepage",children:Object(j.jsx)("p",{children:"Inicio"})}),Object(j.jsx)("a",{href:"#originals",children:Object(j.jsx)("p",{children:"S\xe9ries"})}),Object(j.jsx)("a",{href:"#mylist",children:Object(j.jsx)("p",{children:"Minha lista"})}),Object(j.jsx)("a",{href:"#toprated",children:Object(j.jsx)("p",{children:"Em alta"})})]}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"35px",viewBox:"0 0 24 24",width:"35px",fill:"#fff",children:[Object(j.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(j.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})]}),Object(j.jsx)("img",{src:"https://occ-0-6172-1567.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXYGYCun9Sa2P1_GTaVtADVKfP2uC9e206A3KM1eABgccajzvO4PAR5XMPRiqqrY7SvvY_lneVww04vkQaDMuQ6I-wzm.png?r=c71",alt:"logo netflix"})]})]})}var K=b.a.div(I||(I=Object(g.a)(["\n  background-color: #111;\n"])));b.a.section(V||(V=Object(g.a)(["\n  margin-top: -150px;\n  background-color: transparent;\n  div {\n    background-color: transparent;\n    :hover svg {\n      opacity: 1;\n    }\n    h2 {\n      margin: 5px 0 0 30px;\n      background-color: transparent;\n    }\n    div {\n      background-color: transparent;\n      overflow-x: hidden;\n      padding-left: 30px;\n      div {\n        background-color: transparent;\n        max-width: max-content;\n        display: flex;\n        padding-left: 0px;\n        transition: all ease 0.5s;\n        padding-bottom: 0;\n        section {\n          background-color: transparent;\n          width: 150px;\n          transition: all ease 0.2s;\n          height: max-content;\n          img {\n            width: 150px;\n            transform: scale(0.9);\n            cursor: pointer;\n            transition: all ease 0.2s;\n          }\n          svg {\n            visibility: hidden;\n            transition: all ease 0.2s;\n            margin: 5px;\n            cursor: pointer;\n          }\n        }\n        section:hover {\n          box-shadow: 0 5px 15px black;\n          svg {\n            visibility: visible;\n          }\n          svg:hover {\n            fill: #46d369;\n          }\n          svg:active {\n            fill: white;\n          }\n          img {\n            transform: scale(1);\n            display: inherit;\n          }\n        }\n      }\n    }\n  }\n"])));function N(){var n=Object(a.useState)(null),t=Object(p.a)(n,2),e=t[0],r=t[1],i=Object(a.useState)(!1),o=Object(p.a)(i,2),c=o[0],s=o[1],l=function(n){var t=n.find((function(n){return"originals"===n.category})).items.results.filter((function(n){return n.overview.length>1})),e=t[Math.floor(Math.random()*(t.length-1))];r(e)};return Object(a.useEffect)((function(){var n=function(){var n=Object(O.a)(v.a.mark((function n(){var t;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,L();case 2:t=n.sent,l(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),Object(a.useEffect)((function(){var n=function(){window.scrollY>10?s(!0):s(!1)};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[]),Object(j.jsxs)(K,{children:[Object(j.jsx)(J,{background:c}),e&&Object(j.jsx)(Y,{item:e})]})}function q(n){var t=n.children,e=Object(a.useState)([{category:"mylist",title:"Minha Lista",items:{results:[]}}]),r=Object(p.a)(e,2),i={myList:r[0],setmyList:r[1]};return Object(j.jsx)("div",{children:Object(j.jsx)(R.Provider,{value:i,children:t})})}var H=function(){return Object(j.jsx)(q,{children:Object(j.jsxs)(s.d,{children:[Object(j.jsx)(s.b,{exact:!0,path:"/movie-page",component:N}),Object(j.jsx)(s.b,{exact:!0,path:"/",component:f})]})})},Q=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,48)).then((function(t){var e=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;e(n),r(n),a(n),i(n),o(n)}))};c.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(T.a,{basename:"/clone-netflix",children:Object(j.jsx)(H,{})})}),document.getElementById("root")),Q()}},[[47,1,2]]]);
//# sourceMappingURL=main.2b7d7c7f.chunk.js.map