(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{111:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return a?r.a.createElement(m,p(p({ref:t},l),{},{components:a})):r.a.createElement(m,p({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),i=(a(0),a(111)),o={title:"Neutralino.app"},p={unversionedId:"api/app",id:"api/app",isDocsHomePage:!1,title:"Neutralino.app",description:"Neutralino.app namespace contains methods related to the current application instance.",source:"@site/docs/api/app.md",slug:"/api/app",permalink:"/docs/api/app",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/api/app.md",version:"current",sidebar:"docs",previous:{title:"Native API Overview",permalink:"/docs/api/overview"},next:{title:"Neutralino.clipboard",permalink:"/docs/api/clipboard"}},c=[{value:"app.exit(exitCode)",id:"appexitexitcode",children:[{value:"Parameters",id:"parameters",children:[]}]},{value:"app.killProcess()",id:"appkillprocess",children:[]},{value:"app.restartProcess(options)",id:"apprestartprocessoptions",children:[{value:"Options",id:"options",children:[]}]},{value:"app.getConfig()",id:"appgetconfig",children:[{value:"Return Object (awaited):",id:"return-object-awaited",children:[]}]},{value:"app.broadcast(eventName, data)",id:"appbroadcasteventname-data",children:[{value:"Parameters",id:"parameters-1",children:[]}]}],l={toc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Neutralino.app")," namespace contains methods related to the current application instance."),Object(i.b)("h2",{id:"appexitexitcode"},"app.exit(exitCode)"),Object(i.b)("p",null,"Terminates the running application."),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"exitCode")," Number: Process's exit code. The default value is always ",Object(i.b)("inlineCode",{parentName:"li"},"0")," (success).")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.app.exit(130);\n\nawait Neutralino.app.exit();\n")),Object(i.b)("h2",{id:"appkillprocess"},"app.killProcess()"),Object(i.b)("p",null,"Kills the application process. If the application becomes unresponsive,\nyou can use this to terminate the process instantly. It is recommended\nto use the ",Object(i.b)("inlineCode",{parentName:"p"},"exit()")," method to close your application properly."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.app.killProcess();\n")),Object(i.b)("h2",{id:"apprestartprocessoptions"},"app.restartProcess(options)"),Object(i.b)("p",null,"Restarts the current application instance."),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"args")," String: Additional command-line arguments that need to be passed to the new application instance's process.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.app.restartProcess();\n\nawait Neutralino.app.restartProcess({ args: '--restarted' });\n")),Object(i.b)("h2",{id:"appgetconfig"},"app.getConfig()"),Object(i.b)("p",null,"Returns the current application configuration as a JSON object."),Object(i.b)("h3",{id:"return-object-awaited"},"Return Object (awaited):"),Object(i.b)("p",null,"The current application configuration. Sometimes, this configuration object is not identical to your configuration file\nbecause the framework updates the configuration during several situations such as config overriding via CLI arguments\nand using ",Object(i.b)("inlineCode",{parentName:"p"},"0")," as the port."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"let config = await Neutralino.app.getConfig();\nconsole.log('URL = ', config.url);\n")),Object(i.b)("h2",{id:"appbroadcasteventname-data"},"app.broadcast(eventName, data)"),Object(i.b)("p",null,"Dispatches a new event to all app instances."),Object(i.b)("h3",{id:"parameters-1"},"Parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"eventName")," String: Name of the event."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"data")," Object (optional): Additional data for the event.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.app.broadcast('myTestEvent', 'Hello');\n\nawait Neutralino.app.broadcast('myTestEvent', {myData: 'Test data'});\n\nawait Neutralino.app.broadcast('myTestEvent');\n")))}s.isMDXComponent=!0}}]);