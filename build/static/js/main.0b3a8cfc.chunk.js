(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[1],[,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c,a=n(0),s=n(4),l=n(1),i=Object(a.createContext)({token:null,userId:null,login:function(){},logout:function(){}});t.b=function(e){var t=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],l=t[1],i=Object(a.useState)(),r=Object(s.a)(i,2),o=r[0],j=r[1],u=Object(a.useState)(!1),b=Object(s.a)(u,2),d=b[0],O=b[1],x=Object(a.useCallback)((function(e,t,n){l(t),O(e);var c=n||new Date((new Date).getTime()+36e5);j(c),localStorage.setItem("userData",JSON.stringify({userId:e,token:t,expiration:c.toISOString()}))}),[]),h=Object(a.useCallback)((function(){l(null),j(null),O(null),localStorage.removeItem("userData")}),[]);return Object(a.useEffect)((function(){if(n&&o){var e=o.getTime()-(new Date).getTime();c=setTimeout(h,e)}else clearTimeout(c)}),[n,h,o]),Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&new Date(e.expiration)>new Date&&x(e.userId,e.token,new Date(e.expiration))}),[x]),{token:n,login:x,logout:h,userId:d}}(),n=t.token,r=t.login,o=t.logout,j=t.userId;return Object(l.jsx)(i.Provider,{value:{isLoggedIn:!!n,token:n,login:r,logout:o,userId:j},children:e.children})}},,function(e,t,n){"use strict";n(0);var c=n(5),a=(n(24),n(1));t.a=function(e){return e.href?Object(a.jsx)("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href,children:e.children}):e.to?Object(a.jsx)(c.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),children:e.children}):Object(a.jsx)("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})}},function(e,t,n){"use strict";n(0),n(31);var c=n(1);t.a=function(e){return Object(c.jsx)("div",{className:"".concat(e.asOverlay&&"loading-spinner__overlay"),children:Object(c.jsx)("div",{className:"lds-dual-ring"})})}},,,,function(e,t,n){"use strict";n(0);var c=n(6),a=n.n(c),s=(n(29),n(1));t.a=function(e){return a.a.createPortal(Object(s.jsx)("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(6),l=n.n(s),i=(n(21),n(2)),r=n(5),o=n(4),j=(n(22),n(1)),u=function(e){return Object(j.jsx)("header",{className:"main-header",children:e.children})},b=n(8),d=n(10),O=(n(25),function(){var e=Object(c.useContext)(b.a),t=Object(i.f)();return Object(j.jsxs)("ul",{className:"nav-links",children:[Object(j.jsx)("li",{children:Object(j.jsx)(r.c,{to:"/all-places",children:"ALL PLACES"})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.c,{to:"/users",children:"ALL USERS"})}),Object(j.jsx)("li",{children:e.isLoggedIn&&Object(j.jsx)(r.c,{to:"".concat(e.userId,"/places"),children:"MY PLACES"})}),Object(j.jsx)("li",{children:e.isLoggedIn&&Object(j.jsx)(r.c,{to:"/places/new",children:"ADD PLACE"})}),Object(j.jsxs)("li",{children:[!e.isLoggedIn&&Object(j.jsx)(r.c,{to:"/auth",children:"AUTHENTICATE"}),e.isLoggedIn&&Object(j.jsx)(d.a,{onClick:function(){e.logout(),t("/auth")},children:"Logout"})]})]})}),x=n(34),h=(n(26),function(e){var t=Object(j.jsx)(x.a,{in:e.show,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0,children:Object(j.jsx)("aside",{className:"side-drawer",onClick:e.onClick,children:e.children})});return l.a.createPortal(t,document.getElementById("drawer-hook"))}),m=n(15),f=(n(30),function(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),s=n[0],l=n[1],i=function(){l(!1)};return Object(j.jsxs)(a.a.Fragment,{children:[s&&Object(j.jsx)(m.a,{onClick:i}),Object(j.jsx)(h,{show:s,onClick:i,children:Object(j.jsx)("nav",{className:"main-navigation__drawer-nav",children:Object(j.jsx)(O,{})})}),Object(j.jsxs)(u,{children:[Object(j.jsxs)("button",{onClick:function(){l(!0)},className:"main-navigation__menu-btn",children:[Object(j.jsx)("span",{}),Object(j.jsx)("span",{}),Object(j.jsx)("span",{})]}),Object(j.jsx)("h1",{className:"main-navigation__title",children:Object(j.jsx)(r.b,{to:"/",children:"YourPlaces"})}),Object(j.jsx)("nav",{className:"main-navigation__header-nav",children:Object(j.jsx)(O,{})})]})]})}),g=n(11),p=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,62))})),v=a.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,63))})),k=a.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,64))})),I=a.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,65))})),C=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,66))})),N=a.a.lazy((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,67))}));var S=function(){var e;return e=Object(c.useContext)(b.a).token?Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/",element:Object(j.jsx)(p,{})}),Object(j.jsx)(i.a,{path:"/users",element:Object(j.jsx)(N,{})}),Object(j.jsx)(i.a,{path:"/all-places",element:Object(j.jsx)(p,{})}),Object(j.jsx)(i.a,{path:"/:userId/places",element:Object(j.jsx)(I,{})}),Object(j.jsx)(i.a,{path:"/places/new",element:Object(j.jsx)(k,{})}),Object(j.jsx)(i.a,{path:"/places/:placeId",element:Object(j.jsx)(v,{})}),Object(j.jsx)(i.a,{path:"*",element:Object(j.jsx)(p,{})})]}):Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/",element:Object(j.jsx)(p,{})}),Object(j.jsx)(i.a,{path:"/all-places",element:Object(j.jsx)(p,{})}),Object(j.jsx)(i.a,{path:"/users",element:Object(j.jsx)(N,{})}),Object(j.jsx)(i.a,{path:"/:userId/places",element:Object(j.jsx)(I,{})}),Object(j.jsx)(i.a,{path:"/auth",element:Object(j.jsx)(C,{})}),Object(j.jsx)(i.a,{path:"*",element:Object(j.jsx)(N,{})})]}),Object(j.jsxs)(r.a,{children:[Object(j.jsx)(f,{}),Object(j.jsx)("main",{children:Object(j.jsx)(c.Suspense,{fallback:Object(j.jsx)("div",{className:"center",children:Object(j.jsx)(g.a,{})}),children:e})})]})};l.a.render(Object(j.jsx)(b.b,{children:Object(j.jsx)(S,{})}),document.getElementById("root"))}],[[32,2,3]]]);
//# sourceMappingURL=main.0b3a8cfc.chunk.js.map