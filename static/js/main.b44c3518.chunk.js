(this["webpackJsonpclone-netflix"]=this["webpackJsonpclone-netflix"]||[]).push([[0],{28:function(n,t,e){},40:function(n,t,e){"use strict";e.r(t);var a,i,r,o=e(0),c=e.n(o),s=e(18),d=e.n(s),l=(e(28),e(2)),p=e(10),b=e(13),x=e(5),u=e.p+"static/media/imageNetflix.3778ab49.png",g=e(7),h=e(8),j=h.a.div(a||(a=Object(g.a)(["\n  background-image: url(",");\n  background-size: cover;\n  width: 99.6vw;\n  height: 99.1vh;\n  margin: -5px -5px -5px -5px;\n  img {\n    height: 45px;\n    margin-left: 3%;\n    margin-top: 20px;\n    background-color: transparent;\n  }\n  div {\n    background-color: transparent;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    section {\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: flex-start;\n      background-color: rgba(0, 0, 0, 0.7);\n      max-width: 470px;\n      min-width: 470px;\n      height: 620px;\n      padding: 40px 68px 40px;\n      h1 {\n          background-color: transparent;\n          font-size: 32px;\n          font-weight: 700;\n          margin-bottom: 28px;\n        }\n      form {\n        background-color: transparent;\n        width: 100%;\n        input {\n          background-color: transparent;\n          border-radius: 4px;\n          border: solid #e87c03 ",";\n          border-top: 0;\n          border-left: 0;\n          border-right: 0;\n          color: #fff;\n          height: 50px;\n          line-height: 50px;\n          padding: 16px;\n          width: 100%;\n          color: #8c8c8c;\n          font-size: 18px;\n          background-color: #333;\n          margin-bottom: 18px;\n        }\n        input:focus {\n          color: white;\n        }\n        p {\n          display:",";\n          background-color: transparent;\n          color: #e87c03;\n          margin-top: -15px;\n          padding: 6px 3px;\n          font-size: 13px;\n        }\n        button {\n          border-radius: 4px;\n          font-size: 16px;\n          font-weight: 700;\n          margin: 24px 0 12px;\n          width: 100%;\n          max-width: 100%;\n          padding: 16px;\n          text-decoration: none;\n          background: #e50914;\n          border:none;\n          cursor: pointer;\n        }\n      }\n    }\n  }\n"])),(function(n){return"".concat(n.background)}),(function(n){return n.validity?0:"2px"}),(function(n){return n.validity?"none":"inherit"})),m=e.p+"static/media/netflixBack.476b87be.png",f=e(1);function v(){var n=Object(o.useState)(!1),t=Object(x.a)(n,2),e=t[0],a=t[1],i=Object(o.useState)(!0),r=Object(x.a)(i,2),c=r[0],s=r[1],d=Object(o.useState)({email:"",password:""}),g=Object(x.a)(d,2),h=g[0],v=g[1],O=function(n){var t=n.target;(h.email.length>5||h.password.length>4)&&s(!0),v(Object(b.a)(Object(b.a)({},h),{},Object(p.a)({},t.name,t.value)))},k=h.email,w=h.password;return Object(f.jsxs)(j,{background:m,validity:c,children:[Object(f.jsx)("img",{src:u,alt:"netflix","data-testid":"logo-netflix"}),Object(f.jsx)("div",{children:Object(f.jsxs)("section",{children:[Object(f.jsx)("h1",{children:"Entrar"}),Object(f.jsxs)("form",{children:[Object(f.jsx)("input",{type:"email",value:k,name:"email",placeholder:"Email ou n\xfamero de telefone",onChange:function(n){return O(n)},"data-testid":"input-email"}),Object(f.jsx)("p",{"data-testid":"check-validity",children:"Informe um email ou n\xfamero de telefone v\xe1lido."}),Object(f.jsx)("input",{type:"password",value:w,name:"password",placeholder:"Senha",onChange:function(n){return O(n)},"data-testid":"input-password"}),Object(f.jsx)("p",{"data-testid":"check-validity",children:"A senha deve ter entre 4 e 60 caracteres."}),Object(f.jsx)("button",{type:"button",onClick:function(){h.email.length<5||h.password.length<4?s(!1):a(!0)},"data-testid":"button-entrar",children:"Entrar"})]})]})}),e&&Object(f.jsx)(l.a,{to:"/movie-page"})]})}var O=h.a.div(i||(i=Object(g.a)(["\n  background-color: #111;\n"])));h.a.section(r||(r=Object(g.a)(["\n  margin-top: -150px;\n  background-color: transparent;\n  div {\n    background-color: transparent;\n    :hover svg {\n      opacity: 1;\n    }\n    h2 {\n      margin: 5px 0 0 30px;\n      background-color: transparent;\n    }\n    div {\n      background-color: transparent;\n      overflow-x: hidden;\n      padding-left: 30px;\n      div {\n        background-color: transparent;\n        max-width: max-content;\n        display: flex;\n        padding-left: 0px;\n        transition: all ease 0.5s;\n        padding-bottom: 0;\n        section {\n          background-color: transparent;\n          width: 150px;\n          transition: all ease 0.2s;\n          height: max-content;\n          img {\n            width: 150px;\n            transform: scale(0.9);\n            cursor: pointer;\n            transition: all ease 0.2s;\n          }\n          svg {\n            visibility: hidden;\n            transition: all ease 0.2s;\n            margin: 5px;\n            cursor: pointer;\n          }\n        }\n        section:hover {\n          box-shadow: 0 5px 15px black;\n          svg {\n            visibility: visible;\n          }\n          svg:hover {\n            fill: #46d369;\n          }\n          svg:active {\n            fill: white;\n          }\n          img {\n            transform: scale(1);\n            display: inherit;\n          }\n        }\n      }\n    }\n  }\n"])));function k(){return Object(f.jsx)(O,{children:"ol\xe1aaaaaaa"})}var w=Object(o.createContext)();function y(n){var t=n.children,e=Object(o.useState)([{category:"mylist",title:"Minha Lista",items:{results:[]}}]),a=Object(x.a)(e,2),i={myList:a[0],setmyList:a[1]};return Object(f.jsx)("div",{children:Object(f.jsx)(w.Provider,{value:i,children:t})})}var C=function(){return Object(f.jsx)(y,{children:Object(f.jsxs)(l.d,{children:[Object(f.jsx)(l.b,{exact:!0,path:"/movie-page",component:k}),Object(f.jsx)(l.b,{exact:!0,path:"/",component:v})]})})},S=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,41)).then((function(t){var e=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;e(n),a(n),i(n),r(n),o(n)}))},z=e(23);d.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(z.a,{basename:"/clone-netflix",children:Object(f.jsx)(C,{})})}),document.getElementById("root")),S()}},[[40,1,2]]]);
//# sourceMappingURL=main.b44c3518.chunk.js.map