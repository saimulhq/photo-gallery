(this["webpackJsonpphoto-gallery"]=this["webpackJsonpphoto-gallery"]||[]).push([[0],{56:function(e,t,a){},57:function(e,t,a){},76:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(20),l=a.n(c),r=(a(56),a(57),a(6)),i=a(19),u=a(24),m=a.n(u),s=a(98),d=a(108),h=a(99),f=(a(76),a(17)),E=a(27),p=a.n(E),v=a(46),b=a.n(v);var g=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(1),r=Object(i.a)(l,2),u=r[0],E=r[1],v=Object(n.useState)(!1),g=Object(i.a)(v,2),j=g[0],y=g[1],O=Object(n.useState)(!1),w=Object(i.a)(O,2),k=w[0],N=w[1];return Object(n.useEffect)((function(){m.a.get("https://jsonplaceholder.typicode.com/photos?_page=".concat(u,"&_limit=10")).then((function(e){var t=e.data;c(t)})).catch((function(e){console.log("Couldn't fetch data from server due to the following error!"+e)}))}),[u]),o.a.createElement("div",{className:"Thumbnails"},o.a.createElement(s.a,{cellHeight:100,cols:2},a.map((function(e){return o.a.createElement(d.a,{key:e.id},o.a.createElement(f.b,{to:"/photo/".concat(e.id)},o.a.createElement("img",{src:e.thumbnailUrl,alt:e.title})))}))),o.a.createElement(h.a,{variant:"contained",color:"default",startIcon:o.a.createElement(p.a,null),onClick:function(){u>=2?(E(u-1),y(!1),N(!1)):y(!0)},disabled:j},"Prev"),o.a.createElement(h.a,{variant:"contained",color:"default",endIcon:o.a.createElement(b.a,null),onClick:function(){u<500?(E(u+1),N(!1),y(!1)):N(!0)},disabled:k},"Next"))},j=a(100),y=a(101);a(83);var O=function(){return o.a.createElement("div",{className:"Header"},o.a.createElement(j.a,{style:{background:"#2E3B55"}},o.a.createElement(y.a,null,o.a.createElement(f.b,{to:"/"},o.a.createElement("strong",null,"Photo Gallery")))))},w=a(102),k=a(103),N=a(104),S=a(105),I=a(106),C=a(107);a(84);var B=function(e){var t=e,a=Object(n.useState)(null),c=Object(i.a)(a,2),l=c[0],r=c[1],u=t.match.params.photoId;return Object(n.useEffect)((function(){m.a.get("https://jsonplaceholder.typicode.com/photos/".concat(u)).then((function(e){var t=e.data;r(t)})).catch((function(e){console.log("Couldn't fetch data from server due to the following error!"+e)}))}),[u]),o.a.createElement("div",null,l?o.a.createElement(w.a,{className:"PhotoView"},o.a.createElement(k.a,null,o.a.createElement(N.a,{className:"Media",image:l.url,title:l.title}),o.a.createElement(S.a,null,o.a.createElement(I.a,{variant:"body2",component:"h5"},l.title))),o.a.createElement(h.a,{variant:"contained",color:"default",onClick:function(){e.history.push("/")},startIcon:o.a.createElement(p.a,null)},"Back To Home")):o.a.createElement(C.a,{className:"Spinner"}))};var H=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(O,null),o.a.createElement(r.c,null,o.a.createElement(r.a,{path:"/",exact:!0,component:g}),o.a.createElement(r.a,{path:"/photo/:photoId",component:B})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f.a,{basename:"/photo-gallery"},o.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[85,1,2]]]);
//# sourceMappingURL=main.c5a49eb5.chunk.js.map