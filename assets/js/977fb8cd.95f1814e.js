"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(f,u(u({ref:t},p),{},{components:n})):a.createElement(f,u({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,u=new Array(l);u[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var s=2;s<l;s++)u[s]=n[s];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6955:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),u=["components"],i={title:"Future<Value>",sidebar_label:"Future<Value>"},o=void 0,s={unversionedId:"future",id:"future",title:"Future<Value>",description:"The Future is a replacement for Promise.",source:"@site/docs/future.md",sourceDirName:".",slug:"/future",permalink:"/boxed/future",editUrl:"https://github.com/swan-io/boxed/edit/main/docs/docs/future.md",tags:[],version:"current",frontMatter:{title:"Future<Value>",sidebar_label:"Future<Value>"},sidebar:"docs",previous:{title:"AsyncData",permalink:"/boxed/async-data"},next:{title:"Future<Result> helpers",permalink:"/boxed/future-result"}},p={},c=[{value:"Main differences with Promises",id:"main-differences-with-promises",level:2},{value:"Create a Future",id:"create-a-future",level:2},{value:".get(f)",id:"getf",level:2},{value:".onCancel(f)",id:"oncancelf",level:2},{value:".map(f)",id:"mapf",level:2},{value:".flatMap(f)",id:"flatmapf",level:2},{value:".tap(f)",id:"tapf",level:2},{value:".isPending()",id:"ispending",level:2},{value:".isCancelled()",id:"iscancelled",level:2},{value:".isResolved()",id:"isresolved",level:2},{value:"Future&lt;Result&lt;Ok, Error&gt;&gt;",id:"futureresultok-error",level:2},{value:"Future.all(futures)",id:"futureallfutures",level:2},{value:"Interop",id:"interop",level:2},{value:"Future.fromPromise(promise)",id:"futurefrompromisepromise",level:3},{value:".toPromise()",id:"topromise",level:3},{value:".resultToPromise()",id:"resulttopromise",level:3},{value:"Cancellation",id:"cancellation",level:2},{value:"Basics",id:"basics",level:3},{value:"Bubbling cancellation",id:"bubbling-cancellation",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Future")," is a replacement for ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"."),(0,l.kt)("h2",{id:"main-differences-with-promises"},"Main differences with Promises"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Futures don't handle rejection state, instead leaving it to a contained ",(0,l.kt)("inlineCode",{parentName:"li"},"Result")),(0,l.kt)("li",{parentName:"ul"},"Futures have built-in cancellation (and don't reject like the fetch ",(0,l.kt)("inlineCode",{parentName:"li"},"signal")," API does)"),(0,l.kt)("li",{parentName:"ul"},'Futures don\'t "swallow" futures that are returned from ',(0,l.kt)("inlineCode",{parentName:"li"},"map")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"flatMap")),(0,l.kt)("li",{parentName:"ul"},"Future callbacks run synchronously")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Even though we're diverging from ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),", you can ",(0,l.kt)("inlineCode",{parentName:"p"},"await")," a ",(0,l.kt)("inlineCode",{parentName:"p"},"Future"),"."))),(0,l.kt)("h2",{id:"create-a-future"},"Create a Future"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { Future } from "@swan-io/boxed";\n\n// Value\nconst future = Future.value(1);\n\n// Simple future\nconst otherFuture = Future.make((resolve) => {\n  resolve(1);\n});\n\n// Future with cancellation effect\nconst otherFuture = Future.make((resolve) => {\n  const timeoutId = setTimeout(() => {\n    resolve(1);\n  }, 1000);\n  return () => clearTimeout(timeoutId);\n});\n')),(0,l.kt)("h2",{id:"getf"},".get(f)"),(0,l.kt)("p",null,"Runs ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," with the future value as argument when available."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Future.value(1).get(console.log); // logs 1\n")),(0,l.kt)("h2",{id:"oncancelf"},".onCancel(f)"),(0,l.kt)("p",null,"Runs ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," with the future is cancelled."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"future.onCancel(() => {\n  // do something\n});\n")),(0,l.kt)("h2",{id:"mapf"},".map(f)"),(0,l.kt)("p",null,"Takes a ",(0,l.kt)("inlineCode",{parentName:"p"},"Future<A>")," and returns a new ",(0,l.kt)("inlineCode",{parentName:"p"},"Future<f<A>>")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Future.value(3).map((x) => x * 2); // Future<6>\n")),(0,l.kt)("h2",{id:"flatmapf"},".flatMap(f)"),(0,l.kt)("p",null,"Takes a ",(0,l.kt)("inlineCode",{parentName:"p"},"Future<A>"),", and returns a new future taking the value of the future returned by ",(0,l.kt)("inlineCode",{parentName:"p"},"f(A)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Future.value(3).flatMap((x) => Future.value(x * 2)); // Future<6>\n")),(0,l.kt)("h2",{id:"tapf"},".tap(f)"),(0,l.kt)("p",null,"Runs ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," with the future value, and returns the original future. Useful for debugging."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Future.value(3).tap(console.log); // logs 3, returns Future<3>\n")),(0,l.kt)("h2",{id:"ispending"},".isPending()"),(0,l.kt)("p",null,"Type guard. Returns wether the future is pending or not."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"future.isPending();\n")),(0,l.kt)("h2",{id:"iscancelled"},".isCancelled()"),(0,l.kt)("p",null,"Type guard. Returns wether the future is cancelled or not."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"future.isCancelled();\n")),(0,l.kt)("h2",{id:"isresolved"},".isResolved()"),(0,l.kt)("p",null,"Type guard. Returns wether the future is resolved or not."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"future.isResolved();\n")),(0,l.kt)("h2",{id:"futureresultok-error"},(0,l.kt)("a",{parentName:"h2",href:"/future-result"},"Future<Result<Ok, Error>>")),(0,l.kt)("h2",{id:"futureallfutures"},"Future.all(futures)"),(0,l.kt)("p",null,'Turns an "array of futures of values" into a "future of array of value".'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Future.all([Future.value(1), Future.value(2), Future.value(3)]);\n// Future<[1, 2, 3]>\n")),(0,l.kt)("h2",{id:"interop"},"Interop"),(0,l.kt)("h3",{id:"futurefrompromisepromise"},"Future.fromPromise(promise)"),(0,l.kt)("p",null,"Takes a ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<T>")," and returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"Future<Result<T, Error>>")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Future.fromPromise(Promise.resolve(1)); // Future(Ok(1))\nFuture.fromPromise(Promise.reject(1)); // Future<Error<1>>\n")),(0,l.kt)("h3",{id:"topromise"},".toPromise()"),(0,l.kt)("p",null,"Takes a ",(0,l.kt)("inlineCode",{parentName:"p"},"Future<T>")," and returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<T>")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Future.value(1).toPromise(); // Promise<1>\n")),(0,l.kt)("h3",{id:"resulttopromise"},".resultToPromise()"),(0,l.kt)("p",null,"Takes a ",(0,l.kt)("inlineCode",{parentName:"p"},"Future<Result<Ok, Error>>")," and returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<Ok>"),", rejecting the promise with ",(0,l.kt)("inlineCode",{parentName:"p"},"Error")," in this state."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Future.value(Result.Ok(1)).resultToPromise(); // Promise<1>\nFuture.value(Result.Reject(1)).resultToPromise(); // RejectedPromise<1>\n")),(0,l.kt)("h2",{id:"cancellation"},"Cancellation"),(0,l.kt)("h3",{id:"basics"},"Basics"),(0,l.kt)("p",null,"In JavaScript, ",(0,l.kt)("inlineCode",{parentName:"p"},"Promises")," are not cancellable."),(0,l.kt)("p",null,"That can be limiting at times, especially when using ",(0,l.kt)("inlineCode",{parentName:"p"},"React"),"'s ",(0,l.kt)("inlineCode",{parentName:"p"},"useEffect"),", that let's you return a cancellation effect in order to prevent unwanted side-effects."),(0,l.kt)("p",null,"You can return a cleanup effect from the future ",(0,l.kt)("inlineCode",{parentName:"p"},"init")," function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const future = Future.make((resolve) => {\n  const timeoutId = setTimeout(() => {\n    resolve(1);\n  }, 1000);\n  // will run on cancellation\n  return () => clearTimeout(timeoutId);\n});\n")),(0,l.kt)("p",null,"To cancel a ",(0,l.kt)("inlineCode",{parentName:"p"},"future"),", call ",(0,l.kt)("inlineCode",{parentName:"p"},"future.cancel()"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"future.cancel();\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You can only ",(0,l.kt)("inlineCode",{parentName:"p"},"cancel")," a pending future."),(0,l.kt)("p",{parentName:"div"},"Calling cancel on a resolved future is a no-op, meaning the future will keep its resolved state."))),(0,l.kt)("p",null,"A cancelled future will automatically cancel any future created from it (e.g. from ",(0,l.kt)("inlineCode",{parentName:"p"},".map")," or ",(0,l.kt)("inlineCode",{parentName:"p"},".flatMap"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const future = Future.make((resolve) => {\n  const timeoutId = setTimeout(() => {\n    resolve(1);\n  }, 1000);\n  // will run on cancellation\n  return () => clearTimeout(timeoutId);\n});\n\nconst future2 = future.map((x) => x * 2);\n\nfuture.cancel(); // Both `future` and `future2` are cancelled\n")),(0,l.kt)("h3",{id:"bubbling-cancellation"},"Bubbling cancellation"),(0,l.kt)("p",null,"All ",(0,l.kt)("inlineCode",{parentName:"p"},".map*")," and ",(0,l.kt)("inlineCode",{parentName:"p"},".flatMap*")," methods take an extra parameter called ",(0,l.kt)("inlineCode",{parentName:"p"},"propagateCancel"),", it enables the returned future ",(0,l.kt)("inlineCode",{parentName:"p"},"cancel")," to bubble up cancellation to its depedencies:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// disabled by default: cancelling `future2` will not cancel `future`\nconst future2 = future.map((x) => x * 2);\n\n// optin: cancelling `future2` will cancel `future`\nconst future2 = future.map((x) => x * 2, true);\n")),(0,l.kt)("p",null,"This can be useful at call site:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const request = apiCall().map(parse, true);\n\nrequest.cancel(); // will run the cleanup effect in `apiCall`\n")))}d.isMDXComponent=!0}}]);