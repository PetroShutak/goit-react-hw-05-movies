"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{4146:function(r,e,t){t.d(e,{Z:function(){return x}});var n,u,c,a,o=t(168),s=t(6444),i=t(1087),p=s.ZP.div(n||(n=(0,o.Z)(["\n  margin-top: 20px;\n"]))),l=s.ZP.ul(u||(u=(0,o.Z)(["\n  list-style: circle;\n"]))),f=s.ZP.li(c||(c=(0,o.Z)(["\n  margin-bottom: 10px;\n"]))),v=(0,s.ZP)(i.rU)(a||(a=(0,o.Z)(["\n  color: #000;\n  text-decoration: none;\n\n  &:hover {\n    color: #d32f2f;\n    text-decoration: underline;\n    list-style: round;\n  }\n"]))),d=t(7689),h=t(184),x=function(r){var e=r.movies,t=(0,d.TH)();return(0,h.jsx)(p,{children:(0,h.jsx)(l,{children:e.map((function(r){return(0,h.jsx)(f,{children:(0,h.jsx)(v,{to:"/movies/".concat(r.id),state:{from:t},children:r.title})},r.id)}))})})}},5415:function(r,e,t){t.r(e);var n=t(5861),u=t(9439),c=t(7757),a=t.n(c),o=t(2791),s=t(6324),i=t(4146),p=t(184);e.default=function(){var r=(0,o.useState)([]),e=(0,u.Z)(r,2),t=e[0],c=e[1];return(0,o.useEffect)((function(){var r=function(){var r=(0,n.Z)(a().mark((function r(){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,s.wr)();case 3:e=r.sent,c(e),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),console.log("error",r.t0),c([]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[]),t.length?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{children:"Trending today"}),(0,p.jsx)("div",{children:(0,p.jsx)(i.Z,{movies:t})})]}):(0,p.jsx)("div",{children:"Loading..."})}},6324:function(r,e,t){t.d(e,{Hx:function(){return p},Kv:function(){return f},WK:function(){return l},Y5:function(){return s},wr:function(){return o},xc:function(){return i}});var n=t(5861),u=t(7757),c=t.n(u),a=t(1243);a.Z.defaults.baseURL="https://api.themoviedb.org/3",a.Z.defaults.params={api_key:"8b801a00c53265c17aedd2cbc707fdf5",language:"en-US"};var o=function(){var r=(0,n.Z)(c().mark((function r(){var e,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,a.Z.get("/trending/movie/day");case 3:return e=r.sent,t=e.data,r.abrupt("return",t.results);case 8:return r.prev=8,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",[]);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),s=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,a.Z.get("/movie/".concat(e));case 3:return t=r.sent,n=t.data,r.abrupt("return",n);case 8:return r.prev=8,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",[]);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,a.Z.get("/movie/".concat(e,"/credits"));case 3:return t=r.sent,n=t.data,r.abrupt("return",n.cast);case 8:return r.prev=8,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",[]);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,a.Z.get("/movie/".concat(e,"/reviews"));case 3:return t=r.sent,n=t.data,r.abrupt("return",n.results);case 8:return r.prev=8,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",[]);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,a.Z.get("/search/movie?query=".concat(e));case 3:return t=r.sent,n=t.data,r.abrupt("return",n.results);case 8:return r.prev=8,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",[]);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,a.Z.get("/movie/".concat(e,"/videos"));case 3:return t=r.sent,n=t.data,r.abrupt("return",n.results);case 8:return r.prev=8,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",[]);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.6b699b49.chunk.js.map