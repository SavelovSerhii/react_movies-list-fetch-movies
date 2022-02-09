(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var i=c(7),s=c.n(i),n=(c(15),c(10)),a=c(2),l=c(1),r=(c(16),c(17),c(18),c(0)),o=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(r.jsxs)("div",{className:"content",children:[t.Plot,Object(r.jsx)("br",{})]})]})]})},j=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(o,{movie:e},e.imdbID)}))})},d=c(8),m=c(6),b=c.n(m),u=c(9),v=c.n(u);c(21);function h(e){return fetch("https://www.omdbapi.com/?apikey=7a422092&t=".concat(e)).then((function(e){return e.json()}))}var O=function(e){var t=Object(l.useState)(""),c=Object(a.a)(t,2),i=c[0],s=c[1],n=Object(l.useState)(null),j=Object(a.a)(n,2),m=j[0],u=j[1],O=Object(l.useState)(!1),x=Object(a.a)(O,2),f=x[0],p=x[1];function N(){return(N=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(i);case 2:(t=e.sent).imdbID?u(t):p(!0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",onSubmit:function(t){t.preventDefault(),u({Poster:"",Title:"",Plot:"",imdbID:""}),s(""),null!==m&&void 0!==m&&m.imdbID&&e.newMovie(m)},children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsxs)("label",{className:"label",htmlFor:"movie-title",children:["Movie title",Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:v()("input",{"is-danger":f}),value:i,onChange:function(e){s(e.target.value),p(!1)}})})]}),f&&Object(r.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"button",className:"button is-light",onClick:function(){return N.apply(this,arguments)},children:"Find a movie"})}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"submit",className:"button is-primary",children:"Add to the list"})})]})]}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),(null===m||void 0===m?void 0:m.imdbID)&&Object(r.jsx)(o,{movie:m})]})]})},x=function(){var e=Object(l.useState)([]),t=Object(a.a)(e,2),c=t[0],i=t[1],s=Object(l.useCallback)((function(e){c.every((function(t){return t.imdbID!==e.imdbID}))&&i([].concat(Object(n.a)(c),[e]))}),[]);return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(j,{movies:c})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(O,{newMovie:s})})]})};s.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.807aeb9f.chunk.js.map