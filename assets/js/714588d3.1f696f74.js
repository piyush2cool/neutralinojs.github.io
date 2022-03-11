(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{111:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var i=a(0),r=a.n(i);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),m=b(a),d=i,u=m["".concat(l,".").concat(d)]||m[d]||p[d]||n;return a?r.a.createElement(u,s(s({ref:t},o),{},{components:a})):r.a.createElement(u,s({ref:t},o))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var o=2;o<n;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},90:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var i=a(3),r=a(8),n=(a(0),a(111)),l={title:"Neutralino.filesystem"},s={unversionedId:"api/filesystem",id:"api/filesystem",isDocsHomePage:!1,title:"Neutralino.filesystem",description:"Neutralino.filesystem namespace contains methods for handling files.",source:"@site/docs/api/filesystem.md",slug:"/api/filesystem",permalink:"/docs/api/filesystem",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/api/filesystem.md",version:"current",sidebar:"docs",previous:{title:"Neutralino.extensions",permalink:"/docs/api/extensions"},next:{title:"Neutralino.init",permalink:"/docs/api/init"}},c=[{value:"filesystem.createDirectory(path)",id:"filesystemcreatedirectorypath",children:[{value:"Parameters",id:"parameters",children:[]}]},{value:"filesystem.removeDirectory(path)",id:"filesystemremovedirectorypath",children:[{value:"Parameters",id:"parameters-1",children:[]}]},{value:"filesystem.writeFile(filename, data)",id:"filesystemwritefilefilename-data",children:[{value:"Parameters",id:"parameters-2",children:[]}]},{value:"filesystem.writeBinaryFile(filename, data)",id:"filesystemwritebinaryfilefilename-data",children:[{value:"Parameters",id:"parameters-3",children:[]}]},{value:"filesystem.readFile(filename)",id:"filesystemreadfilefilename",children:[{value:"Parameters",id:"parameters-4",children:[]},{value:"Return String (awaited):",id:"return-string-awaited",children:[]}]},{value:"filesystem.readBinaryFile(filename)",id:"filesystemreadbinaryfilefilename",children:[{value:"Parameters",id:"parameters-5",children:[]},{value:"Return Object (awaited):",id:"return-object-awaited",children:[]}]},{value:"filesystem.removeFile(filename)",id:"filesystemremovefilefilename",children:[{value:"Parameters",id:"parameters-6",children:[]}]},{value:"filesystem.readDirectory(path)",id:"filesystemreaddirectorypath",children:[{value:"Parameters",id:"parameters-7",children:[]},{value:"Return Object (awaited):",id:"return-object-awaited-1",children:[]}]},{value:"filesystem.copyFile(source, destination)",id:"filesystemcopyfilesource-destination",children:[{value:"Parameters",id:"parameters-8",children:[]}]},{value:"filesystem.moveFile(source, destination)",id:"filesystemmovefilesource-destination",children:[{value:"Parameters",id:"parameters-9",children:[]}]},{value:"filesystem.getStats(path)",id:"filesystemgetstatspath",children:[{value:"Parameters",id:"parameters-10",children:[]},{value:"Return Object (awaited):",id:"return-object-awaited-2",children:[]}]}],o={toc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Neutralino.filesystem")," namespace contains methods for handling files."),Object(n.b)("h2",{id:"filesystemcreatedirectorypath"},"filesystem.createDirectory(path)"),Object(n.b)("p",null,"Creates a new directory. Throws ",Object(n.b)("inlineCode",{parentName:"p"},"NE_FS_DIRCRER")," if directory creation is not possible."),Object(n.b)("h3",{id:"parameters"},"Parameters"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"path")," String: New directory path.")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.filesystem.createDirectory('./newDirectory');\n\nawait Neutralino.filesystem.createDirectory(NL_PATH + '/myFolder');\n")),Object(n.b)("h2",{id:"filesystemremovedirectorypath"},"filesystem.removeDirectory(path)"),Object(n.b)("p",null,"Removes a given directory. Throws ",Object(n.b)("inlineCode",{parentName:"p"},"NE_FS_RMDIRER")," if the removal is not possible."),Object(n.b)("h3",{id:"parameters-1"},"Parameters"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"path")," String: Directory path.")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.filesystem.removeDirectory('./tmpDirectory');\n")),Object(n.b)("h2",{id:"filesystemwritefilefilename-data"},"filesystem.writeFile(filename, data)"),Object(n.b)("p",null,"Writes a text file. Throws ",Object(n.b)("inlineCode",{parentName:"p"},"NE_FS_FILWRER")," for file write errors."),Object(n.b)("h3",{id:"parameters-2"},"Parameters"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"filename")," String: Filename."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"data")," String: Content of the file.")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.filesystem.writeFile('./myFile.txt', 'Sample content');\n")),Object(n.b)("h2",{id:"filesystemwritebinaryfilefilename-data"},"filesystem.writeBinaryFile(filename, data)"),Object(n.b)("p",null,"Writes a binary file. Throws ",Object(n.b)("inlineCode",{parentName:"p"},"NE_FS_FILWRER")," for file write errors."),Object(n.b)("h3",{id:"parameters-3"},"Parameters"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"filename")," String: Filename."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"data")," ArrayBuffer: Content of the binary file as an\n",Object(n.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"},"ArrayBuffer"),".")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"let rawBin = new ArrayBuffer(1);\nlet view = new Uint8Array(rawBin);\nview[0] = 64; // Saves ASCII '@' to the binary file\n\nawait Neutralino.filesystem.writeBinaryFile('./myFile.bin', rawBin);\n")),Object(n.b)("h2",{id:"filesystemreadfilefilename"},"filesystem.readFile(filename)"),Object(n.b)("p",null,"Reads a text file. Throws ",Object(n.b)("inlineCode",{parentName:"p"},"NE_FS_FILRDER")," for file read errors."),Object(n.b)("h3",{id:"parameters-4"},"Parameters"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"filename"),": Filename.")),Object(n.b)("h3",{id:"return-string-awaited"},"Return String (awaited):"),Object(n.b)("p",null,"File content."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"let data = await Neutralino.filesystem.readFile('./myFile.txt');\nconsole.log(`Content: ${data}`);\n")),Object(n.b)("h2",{id:"filesystemreadbinaryfilefilename"},"filesystem.readBinaryFile(filename)"),Object(n.b)("p",null,"Reads binary files. Throws ",Object(n.b)("inlineCode",{parentName:"p"},"NE_FS_FILRDER")," for file read errors."),Object(n.b)("h3",{id:"parameters-5"},"Parameters"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"filename")," String: Filename.")),Object(n.b)("h3",{id:"return-object-awaited"},"Return Object (awaited):"),Object(n.b)("p",null,"Content of the binary file as an\n",Object(n.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"},"ArrayBuffer"),"."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"let data = await Neutralino.filesystem.readBinaryFile({\n  fileName: './myFile.bin'\n});\nlet view = new Uint8Array(data);\n\nconsole.log('Binary content: ', view);\n")),Object(n.b)("h2",{id:"filesystemremovefilefilename"},"filesystem.removeFile(filename)"),Object(n.b)("p",null,"Removes given file. Throws ",Object(n.b)("inlineCode",{parentName:"p"},"NE_FS_FILRMER")," for file removal errors."),Object(n.b)("h3",{id:"parameters-6"},"Parameters"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"filename")," String: Filename.")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.filesystem.removeFile('./myFile.txt');\n")),Object(n.b)("h2",{id:"filesystemreaddirectorypath"},"filesystem.readDirectory(path)"),Object(n.b)("p",null,"Reads directory contents. Throws ",Object(n.b)("inlineCode",{parentName:"p"},"NE_FS_NOPATHE")," if the path doesn't exist."),Object(n.b)("h3",{id:"parameters-7"},"Parameters"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"path")," String: File/directory path.")),Object(n.b)("h3",{id:"return-object-awaited-1"},"Return Object (awaited):"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"entry")," String: file name."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"type")," String: The type of the entry (",Object(n.b)("inlineCode",{parentName:"li"},"FILE")," or ",Object(n.b)("inlineCode",{parentName:"li"},"DIRECTORY"),").")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"let entries = await Neutralino.filesystem.readDirectory(NL_PATH);\nconsole.log('Content: ', entries);\n")),Object(n.b)("h2",{id:"filesystemcopyfilesource-destination"},"filesystem.copyFile(source, destination)"),Object(n.b)("p",null,"Copies a file to a new destination. Throws ",Object(n.b)("inlineCode",{parentName:"p"},"NE_FS_COPYFER")," if the system cannot copy the file."),Object(n.b)("h3",{id:"parameters-8"},"Parameters"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"source")," String: Source path."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"destination")," String: Destination path.")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.filesystem.copyFile('./source.txt', './destination.txt');\n")),Object(n.b)("h2",{id:"filesystemmovefilesource-destination"},"filesystem.moveFile(source, destination)"),Object(n.b)("p",null,"Moves a file to a new destination. Throws ",Object(n.b)("inlineCode",{parentName:"p"},"NE_FS_MOVEFER")," if the system cannot move the file."),Object(n.b)("h3",{id:"parameters-9"},"Parameters"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"source")," String: Source path."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"destination")," String: Destination path.")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.filesystem.moveFile('./source.txt', './destination.txt');\n")),Object(n.b)("h2",{id:"filesystemgetstatspath"},"filesystem.getStats(path)"),Object(n.b)("p",null,"Returns file statistics for the given path. If the given path doesn't exist or is inaccessible,",Object(n.b)("inlineCode",{parentName:"p"},"NE_FS_NOPATHE")," is thrown.\nTherefore, you can use this method to check for the existance of a file or directory."),Object(n.b)("h3",{id:"parameters-10"},"Parameters"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"path")," String: File or directory path.")),Object(n.b)("h3",{id:"return-object-awaited-2"},"Return Object (awaited):"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"size")," Number: Size in bytes."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"isFile")," Boolean: ",Object(n.b)("inlineCode",{parentName:"li"},"true")," if the path represents a normal file."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"isDirectory")," Boolean: ",Object(n.b)("inlineCode",{parentName:"li"},"true")," if the path represents a directory.")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"let stats = await Neutralino.filesystem.getStats('./sampleVideo.mp4');\nconsole.log('Stats:', stats);\n\n")))}b.isMDXComponent=!0}}]);