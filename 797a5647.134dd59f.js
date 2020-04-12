(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(1),c=n(6),o=(n(0),n(140)),a={title:"Routing"},u={id:"music/routing",title:"Routing",description:"> TODO: Cover how to route audio / signal processing (DSP).",source:"@site/docs/music/routing.md",permalink:"/tuplet/docs/music/routing"},i=[],l={rightToc:i};function s(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"TODO: Cover how to route audio / signal processing (DSP).")),Object(o.b)("p",null,"The simplest graph is a single node with zero inputs:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const context = new AudioContext()\n")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/tuplet/img/routing/routing-a.svg",alt:null}))),Object(o.b)("p",null,"New nodes are not connected by default:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const context = new AudioContext()\nconst source = context.createBufferSource()\n")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/tuplet/img/routing/routing-b.svg",alt:null}))),Object(o.b)("p",null,"Nodes are connected by calling their ",Object(o.b)("inlineCode",{parentName:"p"},"connect()")," method, which connects the\n",Object(o.b)("em",{parentName:"p"},"output(s)")," of the first node to the ",Object(o.b)("em",{parentName:"p"},"input(s)")," of the second:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const context = new AudioContext()\nconst source = context.createBufferSource()\nsource.connect(context.destination)\n")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/tuplet/img/routing/routing-c.svg",alt:null}))),Object(o.b)("p",null,"Multiple nodes can be connected to the same input:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const context = new AudioContext()\nconst source1 = context.createBufferSource()\nconst source2 = context.createBufferSource()\nconst source3 = context.createBufferSource()\nsource1.connect(context.destination)\nsource2.connect(context.destination)\nsource3.connect(context.destination)\n")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/tuplet/img/routing/routing-d.svg",alt:null}))),Object(o.b)("p",null,"Nodes can be chained together to process audio as it passes through:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const context = new AudioContext()\nconst source1 = context.createBufferSource()\nconst source2 = context.createBufferSource()\nconst source3 = context.createBufferSource()\nconst volume = context.createGain()\nsource1.connect(volume)\nsource2.connect(volume)\nsource3.connect(volume)\nvolume.connect(context.destination)\n")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/tuplet/img/routing/routing-e.svg",alt:null}))))}s.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),s=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u({},t,{},e)),n},p=function(e){var t=s(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,O=p["".concat(a,".").concat(m)]||p[m]||b[m]||o;return n?c.a.createElement(O,u({ref:t},l,{components:n})):c.a.createElement(O,u({ref:t},l))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var l=2;l<o;l++)a[l]=n[l];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);