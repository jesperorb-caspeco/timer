(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={button:"Button_button__1fm_s"}},function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){},,,function(e,t,n){e.exports=n.p+"static/media/wowy.94c8267f.mp3"},function(e,t,n){e.exports=n.p+"static/media/no_one.b72779cc.mp3"},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(7),a=n.n(i),c=(n(15),n(1)),s=n(2),l=n(4),u=n(3),d=n(5),f=function(e){return e<10?"0"+e:e},m=n(8),h=n.n(m),v=function(e){var t=e.children,n=e.onClick;return r.a.createElement("button",{onClick:n,className:h.a.button},t)},p={IDLE_TIMEOUT:1e3,TIMER:180,INTERVAL:1e3},w=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={seconds:p.TIMER,started:!1,finished:!1},n.timer=void 0,n.resetTimeout=void 0,n.intervalSound=void 0,n.endSound=void 0,n.stopTimer=function(){clearInterval(n.timer)},n.startTimer=function(){n.state.started||n.setState({started:!0},function(){n.timer=setInterval(n.countdown,p.INTERVAL)})},n.resetTimer=function(){n.stopTimer(),n.setState({seconds:p.TIMER,started:!1})},n.resetAfterIdle=function(){n.resetTimeout=setTimeout(n.resetTimer,p.IDLE_TIMEOUT),n.setState({started:!1,finished:!1})},n.countdown=function(){var e=n.state.seconds;e>0?(e%60||n.intervalSound.play(),n.setState(function(e){return{seconds:e.seconds-1}})):(n.stopTimer(),n.endSound.play(),n.resetAfterIdle(),n.setState({started:!1,finished:!0}))},n.getClassName=function(e){return e?"container gradient":"container"},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.intervalSound=new Audio(n(18)),this.endSound=new Audio(n(19))}},{key:"componentWillUnmount",value:function(){this.stopTimer()}},{key:"render",value:function(){var e=this.state,t=e.finished,n=e.seconds;return r.a.createElement("div",{className:this.getClassName(t)},r.a.createElement("h1",null,function(e){return"".concat(f(Math.floor(e/60))," : ").concat(f(Math.floor(e%60)))}(n)),r.a.createElement("div",{className:"buttons-container"},r.a.createElement(v,{onClick:this.startTimer},"Start"),r.a.createElement(v,{onClick:this.stopTimer},"Stop"),r.a.createElement(v,{onClick:this.resetTimer},"Reset")))}}]),t}(o.Component),g=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={screen:"timer"},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,t.getScreen(this.state.screen))}}]),t}(r.a.Component);g.getScreen=function(e){switch(e){case"timer":default:return r.a.createElement(w,null)}};var b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a.a.render(r.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/timer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/timer","/service-worker.js");b?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):T(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):T(t,e)})}}()}],[[9,2,1]]]);
//# sourceMappingURL=main.3006825e.chunk.js.map