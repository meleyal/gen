(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(1),a=n(6),r=(n(0),n(140)),c={title:"Note"},i={id:"music/note",title:"Note",description:"A good place to start is to understand how to create a musical note. This guide",source:"@site/docs/music/note.md",permalink:"/tuplet/docs/music/note"},s=[{value:"Synthesis",id:"synthesis",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A good place to start is to understand how to create a musical note. This guide\ncovers how to generate a single note, first using synthesis, then using a\nsample."),Object(r.b)("h2",{id:"synthesis"},"Synthesis"),Object(r.b)("p",null,"The Web Audio API provides all the building blocks required to synthesise your\nown sounds by combining oscillators and effects. The easiest way to hear some\nnoise is to create an\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode"}),Object(r.b)("inlineCode",{parentName:"a"},"OscillatorNode")),"."),Object(r.b)("p",null,"An oscillator can be tuned to (or oscillate at) a specific frequency. Musical\nnotes are just the names we've given to certain frequencies. If we know the\nfrequency of a note, we can set the oscillator to that frequency and it will\nproduce that note."),Object(r.b)("p",null,"Here, we set the oscillator to 440 Hz, which is the frequency of the middle C\n(C4) note on a piano. The default oscillator type is ",Object(r.b)("inlineCode",{parentName:"p"},"sine"),", so when running\nthis code we hear a pure sine wave tone at middle C."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const context = new AudioContext()\nconst osc = context.createOscillator()\nosc.frequency.value = 440\nosc.connect(context.destination)\nosc.start()\n")),Object(r.b)("p",null,"With an understanding of sound synthesis you can generate an infinite range of\nsounds. As mentioned in the introduction, however, it's not the focus of this\nbook, so we won't delve much deeper into synthesis here."),Object(r.b)("p",null,"##\xa0Sample"),Object(r.b)("p",null,"Our focus is music composition, so rather than synthesising our own sounds,\nwe're instead going to delegate that work to pre-recorded instrument samples."),Object(r.b)("p",null,"To play back samples we need a few elements:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A sample audio file: e.g.\n",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://unpkg.com/@meleyal/tuplet/samples/piano/c4.mp3"}),"the middle C (C4) note played on a piano")),Object(r.b)("li",{parentName:"ul"},"A way to load the audio file:\n",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),Object(r.b)("inlineCode",{parentName:"a"},"fetch"))),Object(r.b)("li",{parentName:"ul"},"A way to decode the audio file for playback:\n",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData"}),Object(r.b)("inlineCode",{parentName:"a"},"decodeAudioData"))),Object(r.b)("li",{parentName:"ul"},"A place to store the decoded audio:\n",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer"}),Object(r.b)("inlineCode",{parentName:"a"},"AudioBuffer"))),Object(r.b)("li",{parentName:"ul"},"A way to play back the decoded audio:\n",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode"}),Object(r.b)("inlineCode",{parentName:"a"},"AudioBufferSourceNode")))),Object(r.b)("p",null,"With these, we can create something equivalent to the synthesised example above,\nbut this time using our pre-recorded sample. When running this code, we hear our\npiano sample play from start to finish."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// Create the Web Audio environment.\nconst context = new AudioContext()\n\n// Load a sample from the server.\nfetch('{{PACKAGE_URL}}/samples/piano/c4.mp3')\n  .then((response) => {\n    // Get the `arrayBuffer` representation of the sample.\n    return response.arrayBuffer()\n  })\n  .then((arrayBuffer) => {\n    // Decode the `arrayBuffer` into actual audio.\n    return context.decodeAudioData(arrayBuffer)\n  })\n  .then((audioBuffer) => {\n    // Create an `AudioBufferSourceNode`.\n    const sourceNode = context.createBufferSource()\n\n    // Assign the audio to its buffer.\n    sourceNode.buffer = audioBuffer\n\n    // Connect the `sourceNode` to the destination output (our speakers).\n    sourceNode.connect(context.destination)\n\n    // Start playback of the sample.\n    sourceNode.start()\n  })\n")),Object(r.b)("p",null,"##\xa0Learning"),Object(r.b)("p",null,"We now know the steps involved in loading a sample, decoding it, and playing it\nback. ",Object(r.b)("strong",{parentName:"p"},"Tuplet")," includes the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/tuplet/docs/api/index#sample"}),Object(r.b)("inlineCode",{parentName:"a"},"sample()"))," function which\nabstracts away some of these details for us:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const { sample } = tuplet\n\n;(async () => {\n  const context = new AudioContext()\n  const s = await sample(context, '{{PACKAGE_URL}}/samples/piano/c4.mp3')\n  s.connect(context.destination)\n  s.start()\n})()\n")))}u.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=o,f=p["".concat(c,".").concat(b)]||p[b]||d[b]||r;return n?a.a.createElement(f,i({ref:t},l,{components:n})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);