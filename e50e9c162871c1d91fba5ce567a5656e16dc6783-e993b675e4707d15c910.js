(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0jMA":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyLjk5MjMgNi42Nzc0OUMyMi4yMjIzIDcuMDI3NDkgMjEuMzkyMyA3LjI1NzQ5IDIwLjUzMjMgNy4zNjc0OUMyMS40MTIzIDYuODM3NDkgMjIuMDkyMyA1Ljk5NzQ5IDIyLjQxMjMgNC45ODc0OUMyMS41ODIzIDUuNDg3NDkgMjAuNjYyMyA1LjgzNzQ5IDE5LjY5MjMgNi4wMzc0OUMxOC45MDIzIDUuMTc3NDkgMTcuNzkyMyA0LjY3NzQ5IDE2LjUzMjMgNC42Nzc0OUMxNC4xODIzIDQuNjc3NDkgMTIuMjYyMyA2LjU5NzQ5IDEyLjI2MjMgOC45Njc0OUMxMi4yNjIzIDkuMzA3NDkgMTIuMzAyMyA5LjYzNzQ5IDEyLjM3MjMgOS45NDc0OUM4LjgxMjI3IDkuNzY3NDkgNS42NDIyNyA4LjA1NzQ5IDMuNTMyMjcgNS40Njc0OUMzLjE2MjI3IDYuMDk3NDkgMi45NTIyNyA2LjgzNzQ5IDIuOTUyMjcgNy42MTc0OUMyLjk1MjI3IDkuMTA3NDkgMy43MDIyNyAxMC40Mjc1IDQuODYyMjcgMTEuMTc3NUM0LjE1MjI3IDExLjE3NzUgMy40OTIyNyAxMC45Nzc1IDIuOTEyMjcgMTAuNjc3NUMyLjkxMjI3IDEwLjY3NzUgMi45MTIyNyAxMC42Nzc1IDIuOTEyMjcgMTAuNzA3NUMyLjkxMjI3IDEyLjc4NzUgNC4zOTIyNyAxNC41Mjc1IDYuMzUyMjcgMTQuOTE3NUM1Ljk5MjI3IDE1LjAxNzUgNS42MTIyNyAxNS4wNjc1IDUuMjIyMjcgMTUuMDY3NUM0Ljk1MjI3IDE1LjA2NzUgNC42ODIyNyAxNS4wMzc1IDQuNDIyMjcgMTQuOTg3NUM0Ljk2MjI3IDE2LjY3NzUgNi41MzIyNyAxNy45Mzc1IDguNDIyMjcgMTcuOTY3NUM2Ljk2MjI3IDE5LjEyNzUgNS4xMTIyNyAxOS44MDc1IDMuMDkyMjcgMTkuODA3NUMyLjc1MjI3IDE5LjgwNzUgMi40MTIyNyAxOS43ODc1IDIuMDcyMjcgMTkuNzQ3NUMzLjk3MjI3IDIwLjk2NzUgNi4yMzIyNyAyMS42Nzc1IDguNjUyMjcgMjEuNjc3NUMxNi41MzIzIDIxLjY3NzUgMjAuODYyMyAxNS4xMzc1IDIwLjg2MjMgOS40Njc0OUMyMC44NjIzIDkuMjc3NDkgMjAuODYyMyA5LjA5NzQ5IDIwLjg1MjMgOC45MDc0OUMyMS42OTIzIDguMzA3NDkgMjIuNDEyMyA3LjU0NzQ5IDIyLjk5MjMgNi42Nzc0OVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="},"8+s/":function(e,t,n){"use strict";var r,i=n("q1tI"),a=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),M.canUseDOM?t(u):n&&(u=n(u))}var M=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var o=i.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),s()},o.componentDidUpdate=function(){s()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},o.render=function(){return a.createElement(r,this.props)},i}(i.PureComponent);return o(M,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(M,"canUseDOM",c),M}}},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),i=n.n(r),a=n("Wbzz"),o=function(){return i.a.createElement("div",{className:"mainMenu"},i.a.createElement("div",{className:"image is-48x48"},i.a.createElement(a.Link,{to:"/"},i.a.createElement("svg",{width:"42",height:"42",viewBox:"0 0 42 42",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("g",{id:"logo"},i.a.createElement("g",{id:"logo_grayscale_280"},i.a.createElement("path",{d:"M0 21C0 9.40202 9.40202 0 21 0V0C32.598 0 42 9.40202 42 21V21C42 32.598 32.598 42 21 42V42C9.40202 42 0 32.598 0 21V21Z",fill:"white"}),i.a.createElement("path",{id:"what","fill-rule":"evenodd","clip-rule":"evenodd",d:"M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42ZM21.05 35.05C28.782 35.05 35.05 28.782 35.05 21.05C35.05 13.318 28.782 7.05 21.05 7.05C13.318 7.05 7.05 13.318 7.05 21.05C7.05 28.782 13.318 35.05 21.05 35.05Z",fill:"#B4B4B4"}),i.a.createElement("path",{id:"how","fill-rule":"evenodd","clip-rule":"evenodd",d:"M21.05 35.05C28.782 35.05 35.05 28.782 35.05 21.05C35.05 13.318 28.782 7.05 21.05 7.05C13.3181 7.05 7.05005 13.318 7.05005 21.05C7.05005 28.782 13.3181 35.05 21.05 35.05ZM20.95 27.95C24.816 27.95 27.95 24.816 27.95 20.95C27.95 17.084 24.816 13.95 20.95 13.95C17.0841 13.95 13.9501 17.084 13.9501 20.95C13.9501 24.816 17.0841 27.95 20.95 27.95Z",fill:"#D5D5D5"}),i.a.createElement("circle",{id:"why",cx:"20.9499",cy:"20.95",r:"7",fill:"#F2F2F2"})))))),i.a.createElement("div",{className:"menuRight"},i.a.createElement("div",{className:" menuLabel"},i.a.createElement("a",{href:"http://bit.ly/2WQvnP6",target:"_blank",rel:"noreferrer"},i.a.createElement("h3",null,"resume"))),i.a.createElement("div",{className:" menuLabel"},i.a.createElement("h3",null,i.a.createElement(a.Link,{to:"/about/",id:"id-about"},"about")))))},c=n("ZXdF"),u=n("Y7Fb"),l=n.n(u),s=n("I1bx"),M=n.n(s),f=n("idtF"),y=n.n(f),d=(n("0jMA"),function(){var e=document.createElement("textarea");e.value="sid11@uw.edu",e.setAttribute("readonly",""),e.style={position:"absolute",left:"-9999px"},document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),alert("Copied the text: sid11@uw.edu")});t.a=function(e){var t=e.children,n=(e.isMenuAtBottom,e.sAddClass),r="layout ";return n&&(r+=n),i.a.createElement("div",{className:r},i.a.createElement(o,null),i.a.createElement("main",null,t),i.a.createElement("div",{className:"footer"},i.a.createElement("h3",null,"Get in touch"),i.a.createElement("div",{className:"connect-buttons-wrapper"},i.a.createElement(c.a,{sLabel:"Send Email",oIcon:l.a,sLink:"mailto:sid11@uw.edu"}),i.a.createElement(c.a,{sLabel:"Copy Email",oIcon:M.a,fOnClick:d}),i.a.createElement(c.a,{sLabel:"LinkedIn",oIcon:y.a,sLink:"https://www.linkedin.com/in/patilsiddhant/"}),i.a.createElement(c.a,{sLabel:"Twitter",oIcon:y.a,sLink:"https://twitter.com/sidomatic11"})),i.a.createElement("p",null,"© Copyright ",(new Date).getFullYear()," — designed and developed by Siddhant Patil")))}},I1bx:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5IDIxSDhWN0gxOVYyMVpNMTkgNUg4QzcuNDY5NTcgNSA2Ljk2MDg2IDUuMjEwNzEgNi41ODU3OSA1LjU4NTc5QzYuMjEwNzEgNS45NjA4NiA2IDYuNDY5NTcgNiA3VjIxQzYgMjEuNTMwNCA2LjIxMDcxIDIyLjAzOTEgNi41ODU3OSAyMi40MTQyQzYuOTYwODYgMjIuNzg5MyA3LjQ2OTU3IDIzIDggMjNIMTlDMTkuNTMwNCAyMyAyMC4wMzkxIDIyLjc4OTMgMjAuNDE0MiAyMi40MTQyQzIwLjc4OTMgMjIuMDM5MSAyMSAyMS41MzA0IDIxIDIxVjdDMjEgNi40Njk1NyAyMC43ODkzIDUuOTYwODYgMjAuNDE0MiA1LjU4NTc5QzIwLjAzOTEgNS4yMTA3MSAxOS41MzA0IDUgMTkgNVpNMTYgMUg0QzMuNDY5NTcgMSAyLjk2MDg2IDEuMjEwNzEgMi41ODU3OSAxLjU4NTc5QzIuMjEwNzEgMS45NjA4NiAyIDIuNDY5NTcgMiAzVjE3SDRWM0gxNlYxWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="},Y7Fb:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMjFMMjMgMTJMMiAzVjEwTDE3IDEyTDIgMTRWMjFaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"},ZXdF:function(e,t,n){"use strict";var r=n("q1tI"),i=n.n(r);t.a=function(e){var t=e.sLabel,n=e.sLink,r=function(e,t,n,r){var a="button-small ";return r&&(a+="light"),i.a.createElement("div",{className:a,onClick:n||null},i.a.createElement("div",{className:"icon"},i.a.createElement("img",{src:t})),i.a.createElement("div",{className:"label button-s"},e))}(t,e.oIcon,e.fOnClick,e.bIsLight);return n?i.a.createElement("a",{href:n,target:"_blank",rel:"noreferrer"},r):r}},ZhWT:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,i="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var c,u,l,s;if(Array.isArray(t)){if((c=t.length)!=o.length)return!1;for(u=c;0!=u--;)if(!e(t[u],o[u]))return!1;return!0}if(r&&t instanceof Map&&o instanceof Map){if(t.size!==o.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!o.has(u.value[0]))return!1;for(s=t.entries();!(u=s.next()).done;)if(!e(u.value[1],o.get(u.value[0])))return!1;return!0}if(i&&t instanceof Set&&o instanceof Set){if(t.size!==o.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!o.has(u.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(o)){if((c=t.length)!=o.length)return!1;for(u=c;0!=u--;)if(t[u]!==o[u])return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((c=(l=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(o,l[u]))return!1;if(n&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!t.$$typeof)&&!e(t[l[u]],o[l[u]]))return!1;return!0}return t!=t&&o!=o}(e,t)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},idtF:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5IDNDMTkuNTMwNCAzIDIwLjAzOTEgMy4yMTA3MSAyMC40MTQyIDMuNTg1NzlDMjAuNzg5MyAzLjk2MDg2IDIxIDQuNDY5NTcgMjEgNVYxOUMyMSAxOS41MzA0IDIwLjc4OTMgMjAuMDM5MSAyMC40MTQyIDIwLjQxNDJDMjAuMDM5MSAyMC43ODkzIDE5LjUzMDQgMjEgMTkgMjFINUM0LjQ2OTU3IDIxIDMuOTYwODYgMjAuNzg5MyAzLjU4NTc5IDIwLjQxNDJDMy4yMTA3MSAyMC4wMzkxIDMgMTkuNTMwNCAzIDE5VjVDMyA0LjQ2OTU3IDMuMjEwNzEgMy45NjA4NiAzLjU4NTc5IDMuNTg1NzlDMy45NjA4NiAzLjIxMDcxIDQuNDY5NTcgMyA1IDNIMTlaTTE4LjUgMTguNVYxMy4yQzE4LjUgMTIuMzM1NCAxOC4xNTY1IDExLjUwNjIgMTcuNTQ1MiAxMC44OTQ4QzE2LjkzMzggMTAuMjgzNSAxNi4xMDQ2IDkuOTQgMTUuMjQgOS45NEMxNC4zOSA5Ljk0IDEzLjQgMTAuNDYgMTIuOTIgMTEuMjRWMTAuMTNIMTAuMTNWMTguNUgxMi45MlYxMy41N0MxMi45MiAxMi44IDEzLjU0IDEyLjE3IDE0LjMxIDEyLjE3QzE0LjY4MTMgMTIuMTcgMTUuMDM3NCAxMi4zMTc1IDE1LjI5OTkgMTIuNTgwMUMxNS41NjI1IDEyLjg0MjYgMTUuNzEgMTMuMTk4NyAxNS43MSAxMy41N1YxOC41SDE4LjVaTTYuODggOC41NkM3LjMyNTU2IDguNTYgNy43NTI4OCA4LjM4MyA4LjA2Nzk0IDguMDY3OTRDOC4zODMgNy43NTI4OCA4LjU2IDcuMzI1NTYgOC41NiA2Ljg4QzguNTYgNS45NSA3LjgxIDUuMTkgNi44OCA1LjE5QzYuNDMxNzggNS4xOSA2LjAwMTkzIDUuMzY4MDUgNS42ODQ5OSA1LjY4NDk5QzUuMzY4MDUgNi4wMDE5MyA1LjE5IDYuNDMxNzggNS4xOSA2Ljg4QzUuMTkgNy44MSA1Ljk1IDguNTYgNi44OCA4LjU2Wk04LjI3IDE4LjVWMTAuMTNINS41VjE4LjVIOC4yN1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return ge}));var r,i,a,o,c=n("17x9"),u=n.n(c),l=n("8+s/"),s=n.n(l),M=n("ZhWT"),f=n.n(M),y=n("q1tI"),d=n.n(y),g=n("YVoz"),p=n.n(g),I="bodyAttributes",N="htmlAttributes",j="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},m=(Object.keys(T).map((function(e){return T[e]})),"charset"),D="cssText",A="href",h="http-equiv",b="innerHTML",E="itemprop",O="name",w="property",C="rel",L="src",v="target",z={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},S="defaultTitle",x="defer",k="encodeSpecialCharacters",U="onChangeClientState",Y="titleTemplate",Q=Object.keys(z).reduce((function(e,t){return e[z[t]]=t,e}),{}),P=[T.NOSCRIPT,T.SCRIPT,T.STYLE],Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},_=function(e){var t=X(e,T.TITLE),n=X(e,Y);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,S);return t||r||void 0},G=function(e){return X(e,U)||function(){}},q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var a=r[i].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+Z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),o=0;o<a.length;o++){var c=a[o],u=c.toLowerCase();-1===t.indexOf(u)||n===C&&"canonical"===e[n].toLowerCase()||u===C&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==b&&c!==D&&c!==E||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][l]&&(i[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(i),o=0;o<a.length;o++){var c=a[o],u=p()({},r[c],i[c]);r[c]=u}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,M=e.title,f=e.titleAttributes;ue(T.BODY,r),ue(T.HTML,i),ce(M,f);var y={baseTag:le(T.BASE,n),linkTags:le(T.LINK,a),metaTags:le(T.META,o),noscriptTags:le(T.NOSCRIPT,c),scriptTags:le(T.SCRIPT,l),styleTags:le(T.STYLE,s)},d={},g={};Object.keys(y).forEach((function(e){var t=y[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(g[e]=y[e].oldTags)})),t&&t(),u(e,d,g)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ue(T.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),i=r?r.split(","):[],a=[].concat(i),o=Object.keys(t),c=0;c<o.length;c++){var u=o[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===i.indexOf(u)&&i.push(u);var s=a.indexOf(u);-1!==s&&a.splice(s,1)}for(var M=a.length-1;M>=0;M--)n.removeAttribute(a[M]);i.length===a.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==o.join(",")&&n.setAttribute("data-react-helmet",o.join(","))}},le=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),i=Array.prototype.slice.call(r),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===b)n.innerHTML=t.innerHTML;else if(r===D)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),i.some((function(e,t){return o=t,n.isEqualNode(e)}))?i.splice(o,1):a.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:a}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},Me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[z[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,i=Me(n,r),[d.a.createElement(T.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=se(n),a=oe(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+W(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case I:case N:return{toComponent:function(){return Me(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=z[e]||e;if(n===b||n===D){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),d.a.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===b||e===D)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+i:i}),""),a=r.innerHTML||r.cssText||"",o=-1===P.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},ye=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,M=void 0===s?"":s,f=e.titleAttributes;return{base:fe(T.BASE,t,r),bodyAttributes:fe(I,n,r),htmlAttributes:fe(N,i,r),link:fe(T.LINK,a,r),meta:fe(T.META,o,r),noscript:fe(T.NOSCRIPT,c,r),script:fe(T.SCRIPT,u,r),style:fe(T.STYLE,l,r),title:fe(T.TITLE,{title:M,titleAttributes:f},r)}},de=s()((function(e){return{baseTag:K([A,v],e),bodyAttributes:q(I,e),defer:X(e,x),encode:X(e,k),htmlAttributes:q(N,e),linkTags:J(T.LINK,[C,A],e),metaTags:J(T.META,[O,m,h,w,E],e),noscriptTags:J(T.NOSCRIPT,[b],e),onChangeClientState:G(e),scriptTags:J(T.SCRIPT,[L,b],e),styleTags:J(T.STYLE,[D],e),title:_(e),titleAttributes:q(j,e)}}),(function(e){ie&&ne(ie),e.defer?ie=te((function(){ae(e,(function(){ie=null}))})):(ae(e),ie=null)}),ye)((function(){return null})),ge=(i=de,o=a=function(e){function t(){return R(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return B({},r,((t={})[n.type]=[].concat(r[n.type]||[],[B({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,a=e.newChildProps,o=e.nestedChildren;switch(r.type){case T.TITLE:return B({},i,((t={})[r.type]=o,t.titleAttributes=B({},a),t));case T.BODY:return B({},i,{bodyAttributes:B({},a)});case T.HTML:return B({},i,{htmlAttributes:B({},a)})}return B({},i,((n={})[r.type]=B({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=B({},t);return Object.keys(e).forEach((function(t){var r;n=B({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.a.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Q[n]||n]=e[n],t}),t)}(F(i,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=F(e,["children"]),r=B({},n);return t&&(r=this.mapChildrenToProps(t,r)),d.a.createElement(i,r)},H(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(d.a.Component),a.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=i.peek,a.rewind=function(){var e=i.rewind();return e||(e=ye({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);ge.renderStatic=ge.rewind}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=e50e9c162871c1d91fba5ce567a5656e16dc6783-e993b675e4707d15c910.js.map