(this["webpackJsonpclone-netflix"]=this["webpackJsonpclone-netflix"]||[]).push([[0],{33:function(n,t,e){},46:function(n,t,e){"use strict";e.r(t);var r,i=e(0),a=e.n(i),o=e(24),c=e.n(o),s=(e(33),e(2)),l=e(14),d=e(19),p=e(7),g=e.p+"static/media/imageNetflix.3778ab49.png",u=e(3),h=e(4),x=h.a.div(r||(r=Object(u.a)(["\n  @media screen and (min-width: 769px) {\n\n    background-image: url(",");\n    background-size: cover;\n    width: 99.6vw;\n    height: 99.1vh;\n    margin: -5px -5px -5px -5px;\n    img {\n      height: 45px;\n      margin-left: 3%;\n      margin-top: 20px;\n      background-color: transparent;\n    }\n    div {\n      background-color: transparent;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      section {\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: flex-start;\n        background-color: rgba(0, 0, 0, 0.7);\n        max-width: 470px;\n        min-width: 470px;\n        height: 620px;\n        padding: 40px 68px 40px;\n        h1 {\n            background-color: transparent;\n            font-size: 32px;\n            font-weight: 700;\n            margin-bottom: 28px;\n          }\n        form {\n          background-color: transparent;\n          width: 100%;\n          input {\n            background-color: transparent;\n            border-radius: 4px;\n            border: solid #e87c03 ",";\n            border-top: 0;\n            border-left: 0;\n            border-right: 0;\n            color: #fff;\n            height: 50px;\n            line-height: 50px;\n            padding: 16px;\n            width: 100%;\n            color: #8c8c8c;\n            font-size: 18px;\n            background-color: #333;\n            margin-bottom: 18px;\n          }\n          input:focus {\n            color: white;\n          }\n          p {\n            display:",";\n            background-color: transparent;\n            color: #e87c03;\n            margin-top: -15px;\n            padding: 6px 3px;\n            font-size: 13px;\n          }\n          button {\n            border-radius: 4px;\n            font-size: 16px;\n            font-weight: 700;\n            margin: 24px 0 12px;\n            width: 100%;\n            max-width: 100%;\n            padding: 16px;\n            text-decoration: none;\n            background: #e50914;\n            border:none;\n            cursor: pointer;\n          }\n        }\n      }\n    }\n  }\n  @media screen and (max-width: 760px) {\n    background-image: url(",");\n    background-size: cover;\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    img {\n      height: 45px;\n      margin-left: 3%;\n      margin-top: 20px;\n      background-color: transparent;\n    }\n    div {\n      background-color: transparent;\n      display: flex;\n      justify-content: center;\n      margin-top: 15vh;\n      h1 {\n        background-color: transparent;\n      }\n      section {\n        background-color: transparent;\n        width: 80vw;\n        form {\n          background-color: transparent;\n          width:100%;\n          input {\n            background-color: transparent;\n            border-radius: 4px;\n            border: solid #e87c03 ",";\n            border-top: 0;\n            border-left: 0;\n            border-right: 0;\n            color: #fff;\n            height: 50px;\n            line-height: 50px;\n            padding: 16px;\n            width: 100%;\n            color: #8c8c8c;\n            font-size: 18px;\n            background-color: #333;\n            margin-bottom: 18px;\n          }\n          p {\n            display:",";\n            background-color: transparent;\n            color: #e87c03;\n            margin-top: -15px;\n            padding: 6px 3px;\n            font-size: 10px;\n          }\n          button {\n            border-radius: 4px;\n            font-size: 16px;\n            font-weight: 700;\n            margin: 24px 0 12px;\n            width: 100%;\n            max-width: 100%;\n            padding: 16px;\n            text-decoration: none;\n            background: #e50914;\n            border:none;\n            cursor: pointer;\n          }\n        }\n      }\n    }\n  }\n"])),(function(n){return"".concat(n.background)}),(function(n){return n.validity?0:"2px"}),(function(n){return n.validity?"none":"inherit"}),(function(n){return"".concat(n.background)}),(function(n){return n.validity?0:"2px"}),(function(n){return n.validity?"none":"inherit"})),b=e.p+"static/media/netflixBack.476b87be.png",m=e(1);function j(){var n=Object(i.useState)(!1),t=Object(p.a)(n,2),e=t[0],r=t[1],a=Object(i.useState)(!0),o=Object(p.a)(a,2),c=o[0],u=o[1],h=Object(i.useState)({email:"",password:""}),j=Object(p.a)(h,2),f=j[0],v=j[1],O=function(n){var t=n.target;(f.email.length>5||f.password.length>4)&&u(!0),v(Object(d.a)(Object(d.a)({},f),{},Object(l.a)({},t.name,t.value)))},w=f.email,y=f.password;return Object(m.jsxs)(x,{background:b,validity:c,children:[Object(m.jsx)("img",{src:g,alt:"netflix","data-testid":"logo-netflix"}),Object(m.jsx)("div",{children:Object(m.jsxs)("section",{children:[Object(m.jsx)("h1",{children:"Entrar"}),Object(m.jsxs)("form",{children:[Object(m.jsx)("input",{type:"email",value:w,name:"email",placeholder:"Email ou n\xfamero de telefone",onChange:function(n){return O(n)},"data-testid":"input-email"}),Object(m.jsx)("p",{"data-testid":"check-validity",children:"Informe um email ou n\xfamero de telefone v\xe1lido."}),Object(m.jsx)("input",{type:"password",value:y,name:"password",placeholder:"Senha",onChange:function(n){return O(n)},"data-testid":"input-password"}),Object(m.jsx)("p",{"data-testid":"check-validity",children:"A senha deve ter entre 4 e 60 caracteres."}),Object(m.jsx)("button",{type:"button",onClick:function(){f.email.length<5||f.password.length<4?u(!1):r(!0)},"data-testid":"button-entrar",children:"Entrar"})]})]})}),e&&Object(m.jsx)(s.a,{to:"/movie-page"})]})}var f,v,O,w=e(8),y=e.n(w),k=e(9),z=e(10),S=h.a.div(f||(f=Object(u.a)(["\n  background-image: url(",");\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  margin: -42px -8px 0 -8px;\n  div {\n    width: inherit;\n    height: inherit;\n    background: linear-gradient(to top, #111 10%, transparent 90%);\n    div {\n      width: inherit;\n      height: inherit;\n      background: linear-gradient(to right, #111 30%, transparent 70%);\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      padding-left: 30px;\n      padding-bottom: 150px;\n      h1 {\n        background-color: transparent;\n        font-size: 60px;\n        font-weight: bold;\n        margin-bottom: 0;\n      }\n      section {\n        background-color: transparent;\n        font-size: 18px;\n        font-weight: bold;\n        margin-top: 15px;\n        display: flex;\n        width: 350px;\n\n        p {\n          margin: 0;\n          color: #46d369;\n          margin-right: 15px;\n        }\n        span {\n          margin: 0 15px 0 0;\n        }\n      }\n      p {\n        background-color: transparent;\n        margin-top: 15px;\n        font-size: 20px;\n        color: #999;\n        max-width: 40vw;\n      }\n      nav {\n        background-color: transparent;\n        margin-top: 0;\n        button {\n          display: inline-block;\n          font-size: 20px;\n          font-weight: bold;\n          padding: 12px 25px;\n          border-radius: 5px;\n          text-decoration: none;\n          margin-right: 10px;\n          border: none;\n          transition: all ease 0.2s;\n          cursor: pointer;\n          margin-bottom: 15px;\n        }\n        button:hover {\n          opacity: 0.7;\n        }\n        button:active {\n          background-color: white;\n          opacity: 0.7;\n        }\n      }\n      span {\n        background-color: transparent;\n        strong {\n          background-color: transparent;\n          font-size: 18px;\n          color: #999;\n        }\n      }\n    }\n  }\n\n  @media screen and (max-width: 760px) {\n    margin: 0px -28px 0 -8px;\n    height: 90vh;\n    div {\n      div {\n        h1 {\n          font-size: 40px;\n        }\n        section {\n          font-size: 16px;\n        }\n        p {\n          font-size: 14px;\n          max-width: 100%;\n          margin-right: 30px;\n        }\n        nav {\n          button {\n            font-size: 16px;\n          }\n        }\n        span {\n          strong {\n            font-size: 14px;\n          }\n        }\n      }\n    }\n  }\n  "])),(function(n){return"".concat(n.urlBase).concat(n.background)})),M=h.a.button(v||(v=Object(u.a)(["\n    background-color: #FFF;\n    color: #000;\n  "]))),L=h.a.button(O||(O=Object(u.a)(["\n  background-color: #333;\n  color: #FFF;\n"]))),C=Object(i.createContext)();function F(n){var t=n.item,e=Object(i.useContext)(C),r=e.myList,a=e.setmyList;return Object(m.jsx)(S,{background:t.backdrop_path,urlBase:"https://image.tmdb.org/t/p/original",children:Object(m.jsx)("div",{children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:t&&t.original_name}),Object(m.jsxs)("section",{children:[Object(m.jsxs)("p",{children:[t&&t.vote_average," pontos"]}),Object(m.jsx)("span",{children:t&&new Date(t.first_air_date).getFullYear()}),Object(m.jsx)("span",{children:t&&(new Date).getFullYear()-new Date(t.first_air_date).getFullYear()<2?"1 temporada":"".concat((new Date).getFullYear()-new Date(t.first_air_date).getFullYear()," temporadas")})]}),Object(m.jsx)("p",{children:t&&t.overview}),Object(m.jsxs)("nav",{children:[Object(m.jsx)(M,{type:"button",children:"\u25b6 Assistir"}),Object(m.jsx)(L,{type:"button",onClick:function(){return n=t,void(!0!==r[0].items.results.some((function(t){return t.id===n.id}))&&a([{category:"mylist",title:"Minha Lista",items:{results:[].concat(Object(z.a)(r[0].items.results),[n])}}]));var n},children:"+ Minha Lista"})]}),Object(m.jsx)("span",{children:Object(m.jsx)("strong",{children:"G\xeanero:"})})]})})})}var _,B=e(16),I=h.a.header(_||(_=Object(u.a)(["\n  position: fixed;\n  z-index: 999;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  justify-content: space-between;\n  padding-left: 35px;\n  padding-right: 35px;\n  align-items: center;\n  background: ",";\n  transition: all ease 0.5s;\n  nav {\n    background-color: transparent;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    img {\n      background-color: transparent;\n      height: 25px;\n      margin-right: 40px;\n      cursor: pointer;\n    }\n    p {\n      background-color: transparent;\n      margin-right: 15px;\n      cursor: pointer;\n      text-decoration: none;\n      transition: all ease 0.25s;\n    }\n    p:hover {\n      color: #999;\n    }\n    a {\n      background-color: transparent;\n      text-decoration: none;\n    }\n    @media screen and (max-width: 760px) {\n      a {\n        display: none;\n      }\n    }\n  }\n  div {\n    background-color: transparent;\n    img {\n      background-color: transparent;\n      height: 35px;\n      cursor: pointer;\n      border-radius: 3px;\n    }\n    svg {\n      background-color: transparent;\n      height: 35px;\n      margin-right: 25px;\n      cursor: pointer;\n      path {\n        background-color: transparent;\n      }\n    }\n  }\n"])),(function(n){return n.background?"background-color: rgb(17, 17, 17, 0.8)":"linear-gradient(to bottom, #111 15%, transparent 85%)"}));function E(n){var t=n.background;return Object(m.jsxs)(I,{background:t,children:[Object(m.jsxs)("nav",{children:[Object(m.jsx)("img",{src:g,alt:"logo netflix"}),Object(m.jsx)(B.b,{to:"/movie-page",children:Object(m.jsx)("p",{children:"Inicio"})}),Object(m.jsx)("a",{href:"#originals",children:Object(m.jsx)("p",{children:"S\xe9ries"})}),Object(m.jsx)("a",{href:"#mylist",children:Object(m.jsx)("p",{children:"Minha lista"})}),Object(m.jsx)("a",{href:"#toprated",children:Object(m.jsx)("p",{children:"Em alta"})})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"35px",viewBox:"0 0 24 24",width:"35px",fill:"#fff",children:[Object(m.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(m.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})]}),Object(m.jsx)("img",{src:"https://occ-0-6172-1567.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXYGYCun9Sa2P1_GTaVtADVKfP2uC9e206A3KM1eABgccajzvO4PAR5XMPRiqqrY7SvvY_lneVww04vkQaDMuQ6I-wzm.png?r=c71",alt:"logo netflix"})]})]})}var V="https://api.themoviedb.org/3",A="&api_key=e70501c774a05cf85580e32a27897dc6&language=pt-BR";function H(n){return Y.apply(this,arguments)}function Y(){return(Y=Object(k.a)(y.a.mark((function n(t){var e,r;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(V).concat(t).concat(A));case 3:return e=n.sent,n.next=6,e.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.log("Erro");case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}var D,J,P,N,R=function(){var n=Object(k.a)(y.a.mark((function n(){return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,H("/discover/tv?with_network=213");case 2:return n.t0=n.sent,n.t1={category:"originals",title:"Originais da Netflix",items:n.t0},n.next=6,H("/trending/all/week?");case 6:return n.t2=n.sent,n.t3={category:"trending",title:"Recomendados",items:n.t2},n.next=10,H("/movie/top_rated?");case 10:return n.t4=n.sent,n.t5={category:"toprated",title:"Em alta",items:n.t4},n.next=14,H("/discover/movie?with_genres=28");case 14:return n.t6=n.sent,n.t7={category:"action",title:"A\xe7\xe3o",items:n.t6},n.next=18,H("/discover/movie?with_genres=35");case 18:return n.t8=n.sent,n.t9={category:"comedy",title:"Com\xe9dia",items:n.t8},n.next=22,H("/discover/movie?with_genres=27");case 22:return n.t10=n.sent,n.t11={category:"horror",title:"Terror",items:n.t10},n.next=26,H("/discover/movie?with_genres=10749");case 26:return n.t12=n.sent,n.t13={category:"romance",title:"Romance",items:n.t12},n.next=30,H("/discover/movie?with_genres=99");case 30:return n.t14=n.sent,n.t15={category:"documentary",title:"Document\xe1rios",items:n.t14},n.abrupt("return",[n.t1,n.t3,n.t5,n.t7,n.t9,n.t11,n.t13,n.t15]);case 33:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),T=h.a.div(D||(D=Object(u.a)(["\n  background-color: #111;\n"]))),W=h.a.section(J||(J=Object(u.a)(["\n  margin-top: -150px;\n  background-color: transparent;\n  div {\n    background-color: transparent;\n    :hover svg {\n      opacity: 1;\n    }\n    h2 {\n      margin: 5px 0 0 30px;\n      background-color: transparent;\n    }\n    div {\n      background-color: transparent;\n      overflow-x: hidden;\n      padding-left: 30px;\n      div {\n        background-color: transparent;\n        max-width: max-content;\n        display: flex;\n        padding-left: 0px;\n        transition: all ease 0.5s;\n        padding-bottom: 0;\n        section {\n          background-color: transparent;\n          width: 150px;\n          transition: all ease 0.2s;\n          height: max-content;\n          img {\n            width: 150px;\n            transform: scale(0.9);\n            cursor: pointer;\n            transition: all ease 0.2s;\n          }\n          svg {\n            visibility: hidden;\n            transition: all ease 0.2s;\n            margin: 5px;\n            cursor: pointer;\n          }\n        }\n        section:hover {\n          box-shadow: 0 5px 15px black;\n          svg {\n            visibility: visible;\n          }\n          svg:hover {\n            fill: #46d369;\n          }\n          svg:active {\n            fill: white;\n          }\n          img {\n            transform: scale(1);\n            display: inherit;\n          }\n        }\n      }\n    }\n  }\n  @media screen and (max-width: 760px) {\n    margin-right: -28px;\n  }\n"]))),G=h.a.div(P||(P=Object(u.a)(["\n  svg {\n    position: absolute;\n    width: 45px;\n    height: 225px;\n    background-color: rgba(0, 0, 0, 0.6);\n    /* margin-left: -55px; */\n    right: 0;\n    z-index: 99;\n    opacity: 0;\n    cursor: pointer;\n    transition: all ease 0.25s;\n  }\n  ",":hover svg {\n    opacity: 0.8;\n  }\n  @media screen and (max-width: 760px) {\n    svg {\n      margin-right: -19px;\n      opacity: 1;\n    }  \n  }\n"])),W),K=h.a.div(N||(N=Object(u.a)(["\n  svg {\n    position: absolute;\n    width: 45px;\n    height: 225px;\n    background-color: rgba(0, 0, 0, 0.6);\n    /* margin-left: -55px; */\n    left: 0;\n    z-index: 99;\n    opacity: 0;\n    cursor: pointer;\n    transition: all ease 0.25s;\n  }\n  @media screen and (max-width: 760px) {\n    svg {\n      opacity: 1;\n    }  \n  }\n"]))),q=function(n,t,e,r,i){var a=function(n){return JSON.parse(localStorage.getItem("favoriteFilms")).some((function(t){return t.id===n.id}))?"#46d369":"#fff"};return n.items.results.map((function(n){return Object(m.jsxs)("section",{children:[Object(m.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w200").concat(n.poster_path),alt:n.original_title}),!1===r&&Object(m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"28px",viewBox:"0 0 24 24",width:"28px",fill:"#fff",onClick:function(){return function(n){!0!==t[0].items.results.some((function(t){return t.id===n.id}))&&e([{category:"mylist",title:"Minha Lista",items:{results:[].concat(Object(z.a)(t[0].items.results),[n])}}])}(n)},children:[Object(m.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(m.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})]}),Object(m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:a(n),onClick:function(t){return function(n,t){var e=JSON.parse(localStorage.getItem("favoriteFilms"));if(!1===e.some((function(n){return n.id===t.id})))localStorage.setItem("favoriteFilms",JSON.stringify([].concat(Object(z.a)(e),[t]))),i.push("/movie-page");else{var r=e.filter((function(n){return n.id!==t.id}));localStorage.setItem("favoriteFilms",JSON.stringify(Object(z.a)(r))),i.push("/movie-page")}}(0,n)},children:[Object(m.jsx)("path",{d:"M0 0h24v24H0V0zm0 0h24v24H0V0z",fill:"none"}),Object(m.jsx)("path",{d:"M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"})]})]},n.id)}))};function Q(n){var t=n.list,e=n.ItsMyList,r=n.history,a=Object(i.useContext)(C),o=a.myList,c=a.setmyList,s=Object(i.useState)(0),l=Object(p.a)(s,2),d=l[0],g=l[1];return Object(m.jsxs)("div",{id:t.category,children:[Object(m.jsx)("h2",{children:t.title}),Object(m.jsx)(G,{onClick:function(){return function(n,t,e){var r=n-Math.round(window.innerWidth/2),i=150*e.items.results.length;window.innerWidth-i>r&&(r=window.innerWidth-i-90),t(r)}(d,g,t)},children:Object(m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"50px",viewBox:"0 0 24 24",width:"50px",fill:"#fff",children:[Object(m.jsx)("g",{children:Object(m.jsx)("path",{d:"M0,0h24v24H0V0z",fill:"none"})}),Object(m.jsx)("g",{children:Object(m.jsx)("polygon",{points:"6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"})})]})}),Object(m.jsx)(K,{onClick:function(){return function(n,t){var e=n+Math.round(window.innerWidth/2);e>0&&(e=0),t(e)}(d,g)},children:Object(m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"50px",viewBox:"0 0 24 24",width:"50px",fill:"#fff",children:[Object(m.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none",opacity:".87"}),Object(m.jsx)("path",{d:"M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"})]})}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{style:{marginLeft:d},children:t.items.results&&q(t,o,c,e,r)})})]},t.category)}function X(n){var t=n.history,e=Object(i.useContext)(C),r=Object(i.useState)([]),a=Object(p.a)(r,2),o=a[0],c=a[1],s=Object(i.useState)(null),l=Object(p.a)(s,2),d=l[0],g=l[1],u=Object(i.useState)(!1),h=Object(p.a)(u,2),x=h[0],b=h[1],j=function(n){var t=n.find((function(n){return"originals"===n.category})).items.results.filter((function(n){return n.overview.length>1})),e=t[Math.floor(Math.random()*(t.length-1))];g(e)};return Object(i.useEffect)((function(){var n=function(){var n=Object(k.a)(y.a.mark((function n(){var t;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R();case 2:t=n.sent,c(t),j(t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),Object(i.useEffect)((function(){var n=function(){window.scrollY>10?b(!0):b(!1)};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[]),Object(i.useEffect)((function(){JSON.parse(localStorage.getItem("favoriteFilms"))||localStorage.setItem("favoriteFilms",JSON.stringify([]))}),[]),Object(m.jsxs)(T,{children:[Object(m.jsx)(E,{background:x}),d&&Object(m.jsx)(F,{item:d}),Object(m.jsxs)(W,{children:[o.map((function(n,e){return Object(m.jsx)(Q,{list:n,ItsMyList:!1,history:t},e)})),e.myList[0].items.results.length>0&&e.myList.map((function(n,e){return Object(m.jsx)(Q,{list:n,ItsMyList:!0,history:t},e)}))]})]})}function U(n){var t=n.children,e=Object(i.useState)([{category:"mylist",title:"Minha Lista",items:{results:[]}}]),r=Object(p.a)(e,2),a={myList:r[0],setmyList:r[1]};return Object(m.jsx)("div",{children:Object(m.jsx)(C.Provider,{value:a,children:t})})}var Z=function(){return Object(m.jsx)(U,{children:Object(m.jsxs)(s.d,{children:[Object(m.jsx)(s.b,{exact:!0,path:"/movie-page",component:X}),Object(m.jsx)(s.b,{exact:!0,path:"/",component:j})]})})},$=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,47)).then((function(t){var e=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;e(n),r(n),i(n),a(n),o(n)}))};c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(B.a,{basename:"/clone-netflix",children:Object(m.jsx)(Z,{})})}),document.getElementById("root")),$()}},[[46,1,2]]]);
//# sourceMappingURL=main.e8c88817.chunk.js.map