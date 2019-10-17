(window["webpackJsonprecommendation-network"]=window["webpackJsonprecommendation-network"]||[]).push([[0],{33:function(e){e.exports=JSON.parse('{"items":[],"itemsHasErrored":false,"itemsIsLoading":false,"comments":[],"commentsIsLoading":false,"commentsHasErrored":false,"activeKey":1,"userStatus":{"status":false,"message":"logout","token":""}}')},53:function(e,t,n){e.exports=n(77)},59:function(e,t,n){},60:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),s=n.n(o),c=(n(58),n(59),n(60),n(16)),i=n(44);function u(e){return{type:"ITEMS_IS_LOADING",isLoading:e}}function l(e){return{type:"COMMENTS_IS_LOADING",isLoading:e}}function m(e){return{type:"PRODUCT_ACTIVE_KEY",activeKey:e}}function p(e,t,n){return{type:"USER_LOGGED_IN",status:e,message:t,token:n}}function d(e){return function(t){t(l(!0)),fetch(e).then(function(e){if(!e.ok)throw Error(e.statusText);return t(l(!1)),e}).then(function(e){return e.json()}).then(function(e){t(function(e){return{type:"PRODUCT_COMMENTS_FETCH_SUCCESS",comments:e}}(e))}).catch(function(){return t({type:"COMMENTS_HAS_ERRORED",hasErrored:!0})})}}var E=n(9),h=n(10),f=n(13),g=n(11),y=n(12),v=n(79),S=n(80),b=n(46),O=n(83),j=n(85),w=function(e){function t(){return Object(E.a)(this,t),Object(f.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchData("http://smktesting.herokuapp.com/api/products/?format=json")}},{key:"render",value:function(){var e=this;return this.props.hasErrored?r.a.createElement("p",null,"Sorry! There was an error loading the items"):this.props.isLoading?r.a.createElement("p",null,"Loading\u2026"):r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement(S.a,{style:{margin:"30px auto"}},r.a.createElement(b.a,{md:3},r.a.createElement(O.a,{variant:"pills",activeKey:this.props.activeKey,onSelect:function(t){e.props.setActiveKey(t),e.props.fetchComments("http://smktesting.herokuapp.com/api/reviews/"+t+"?format=json")},className:"flex-column"},this.props.items.map(function(e){return r.a.createElement(O.a.Item,{key:e.id},r.a.createElement(O.a.Link,{eventKey:e.id},e.title))}))),this.props.items.filter(function(t){return t.id==e.props.activeKey}).map(function(e){return r.a.createElement(b.a,{md:4,sm:4,key:e.id},r.a.createElement(j.a,{style:{width:"auto",backgroundColor:"#AFEEEE"}},r.a.createElement(j.a.Img,{style:{margin:"10px 0 10px 0"},variant:"top",src:"http://smktesting.herokuapp.com/static/"+e.img,alt:e.title}),r.a.createElement(j.a.Body,null,r.a.createElement(j.a.Title,null,e.title),r.a.createElement(j.a.Text,null,"Product description: ",r.a.createElement("br",null),e.text))))}),r.a.createElement(b.a,{md:5,sm:5},r.a.createElement(R,null),r.a.createElement(A,this.props)))))}}]),t}(a.Component),T=function(e){function t(){return Object(E.a)(this,t),Object(f.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return this.props.commentsHasErrored?r.a.createElement(j.a,{md:6,sm:6,style:{marginLeft:"50px"}},"Sorry! There was an error loading the comments"):this.props.commentsIsLoading?r.a.createElement(j.a,{md:6,sm:6,style:{marginLeft:"50px"}},"Loading\u2026"):r.a.createElement("div",null,r.a.createElement(j.a,{md:5,sm:5},r.a.createElement("h4",{style:{margin:"10px"}}," Reviews: "),this.props.comments.slice(0).reverse().map(function(e){return r.a.createElement(j.a,{style:{width:"auto",margin:"10px"},key:e.id},r.a.createElement(j.a.Body,null,r.a.createElement(j.a.Title,null,e.created_by.username),r.a.createElement(j.a.Subtitle,{className:"mb-2 text-muted"},"At ",e.created_at),r.a.createElement(j.a.Text,null,"Rate: ",e.rate,r.a.createElement("br",null),"Comment: ",e.text,r.a.createElement("br",null),"Product id: ",e.product)))})))}}]),t}(a.Component),k=n(81),_=n(84),C=n(82),x=function(e){function t(){return Object(E.a)(this,t),Object(f.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e,t=this,n=r.a.createElement(k.a,{variant:"primary",type:"submit",style:{marginRight:"5px",float:"right"}},"Submit");return this.props.userStatus.status||(e=r.a.createElement(_.a,{className:"comment-alert",key:1,variant:"danger"},r.a.createElement("p",null,"Please, login to add your review.")),n=r.a.createElement(k.a,{variant:"primary",type:"submit",style:{marginRight:"5px",float:"right"},disabled:!0},"Submit")),r.a.createElement("div",null,e,r.a.createElement(j.a,{md:5,sm:5,style:{marginBottom:"20px",padding:"10px"}},r.a.createElement(C.a,{onSubmit:function(e){fetch("http://smktesting.herokuapp.com/api/reviews/"+t.props.activeKey,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token "+t.props.userStatus.token},body:JSON.stringify({text:e.target.elements.addComment.value,rate:e.target.elements.rateProduct.value})}).then(function(e){return e.json()}).then(function(e){e.success||console.log("Error")})}},r.a.createElement(C.a.Group,{controlId:"addComment"},r.a.createElement(C.a.Label,null,"Your review"),r.a.createElement(C.a.Control,{required:!0,as:"textarea",rows:"3"})),r.a.createElement(C.a.Group,{controlId:"rateProduct"},r.a.createElement(C.a.Label,null,"Rate product"),r.a.createElement(C.a.Control,{as:"select"},r.a.createElement("option",null,"5"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"1"))),n)))}}]),t}(a.Component),I=function(e){function t(){return Object(E.a)(this,t),Object(f.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.logout()}},{key:"render",value:function(){var e,t=this;return!1===this.props.userStatus.status&&"logout"!==this.props.userStatus.message&&(e=r.a.createElement(_.a,{key:1,variant:"danger"},this.props.userStatus.message)),r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement(S.a,{style:{margin:"10px 30px"},className:"justify-content-md-center"},r.a.createElement("h3",null,"Login form")),r.a.createElement(S.a,{style:{margin:"10px 30px"},className:"justify-content-md-center"},e),r.a.createElement(S.a,{style:{margin:"30px"},className:"justify-content-md-center"},r.a.createElement(C.a,{className:"login-form",onSubmit:function(e){e.preventDefault();var n=new FormData(e.target);fetch("http://smktesting.herokuapp.com/api/login/",{method:"POST",body:n}).then(function(e){return e.json()}).then(function(e){e.success?(t.props.addUserStatus(e.success,"ok",e.token),t.props.history.push("/")):t.props.addUserStatus(e.success,e.message,"")})}},r.a.createElement(C.a.Group,{as:S.a,controlId:"username"},r.a.createElement(C.a.Label,{column:!0,sm:3},"Username"),r.a.createElement(b.a,{sm:9},r.a.createElement(C.a.Control,{required:!0,name:"username",type:"text",placeholder:"Username"}))),r.a.createElement(C.a.Group,{as:S.a,controlId:"password"},r.a.createElement(C.a.Label,{column:!0,sm:3},"Password"),r.a.createElement(b.a,{sm:9},r.a.createElement(C.a.Control,{required:!0,name:"password",type:"password",placeholder:"Password"}))),r.a.createElement(k.a,{variant:"primary",type:"submit",style:{marginRight:"5px",float:"right"}},"Submit"))),r.a.createElement(S.a,{className:"justify-content-md-center"},r.a.createElement("p",null,"If you are not registered, ",r.a.createElement("a",{href:"/register"}," register"),"."))))}}]),t}(a.Component),L=function(e){function t(){return Object(E.a)(this,t),Object(f.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e,t=this;return!1===this.props.userStatus.status&&"logout"!==this.props.userStatus.message&&(e=r.a.createElement(_.a,{key:1,variant:"danger"},this.props.userStatus.message)),r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement(S.a,{style:{margin:"10px 30px"},className:"justify-content-md-center"},r.a.createElement("h3",null,"Registration form")),r.a.createElement(S.a,{style:{margin:"10px 30px"},className:"justify-content-md-center"},e),r.a.createElement(S.a,{style:{margin:"30px"},className:"justify-content-md-center"},r.a.createElement(C.a,{className:"login-form",onSubmit:function(e){e.preventDefault();var n=new FormData(e.target);fetch("http://smktesting.herokuapp.com/api/register/",{method:"POST",body:n}).then(function(e){return e.json()}).then(function(e){e.success?(t.props.addUserStatus(e.success,"ok",e.token),t.props.history.push("/")):t.props.addUserStatus(e.success,e.message,"")})}},r.a.createElement(C.a.Group,{as:S.a,controlId:"username"},r.a.createElement(C.a.Label,{column:!0,sm:3},"Username"),r.a.createElement(b.a,{sm:9},r.a.createElement(C.a.Control,{required:!0,name:"username",type:"text",placeholder:"Username"}))),r.a.createElement(C.a.Group,{as:S.a,controlId:"password"},r.a.createElement(C.a.Label,{column:!0,sm:3},"Password"),r.a.createElement(b.a,{sm:9},r.a.createElement(C.a.Control,{required:!0,name:"password",type:"password",placeholder:"Password"}))),r.a.createElement(k.a,{variant:"primary",type:"submit",style:{marginRight:"5px",float:"right"}},"Submit")))))}}]),t}(a.Component),N=function(e){function t(){return Object(E.a)(this,t),Object(f.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t="Login";return this.props.userStatus.status&&(t="Logout"),r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement(O.a,{className:"app-menu justify-content-end",variant:"pills",activeKey:this.props.activeTab,defaultActiveKey:"/",onSelect:function(t){return e.props.changeActiveTab(t)}},r.a.createElement(O.a.Item,null,r.a.createElement(O.a.Link,{href:"/"},"Products")),r.a.createElement(O.a.Item,null,r.a.createElement(O.a.Link,{href:"/login",eventKey:"/login"},t)))))}}]),t}(a.Component),D=Object(c.b)(function(e,t){t.match;return{items:e.items,hasErrored:e.itemsHasErrored,isLoading:e.itemsIsLoading,commentsHasErrored:e.commentsHasErrored,commentsIsLoading:e.commentsIsLoading,activeKey:e.activeKey,comments:e.comments}},function(e){return{fetchData:function(t){return e(function(e){return function(t){t(u(!0)),fetch(e).then(function(e){if(!e.ok)throw Error(e.statusText);return t(u(!1)),e}).then(function(e){return e.json()}).then(function(e){t(function(e){return{type:"ITEMS_FETCH_DATA_SUCCESS",items:e}}(e)),t(m(1)),t(d("http://smktesting.herokuapp.com/api/reviews/1?format=json"))}).catch(function(){return t({type:"ITEMS_HAS_ERRORED",hasErrored:!0})})}}(t))},fetchComments:function(t){return e(d(t))},setActiveKey:function(t){return e(m(t))}}})(w),A=Object(c.b)(function(e,t){t.match;return{commentsHasErrored:e.commentsHasErrored,commentsIsLoading:e.commentsIsLoading,comments:e.comments}},null)(T),R=Object(c.b)(function(e){return{activeKey:e.activeKey,userStatus:e.userStatus}},function(e){return{addComment:function(t,n,a){return e(function(e,t,n){return{type:"ADD_COMMENT",id:Object(i.v4)(),product:n,text:e,rate:t,timestamp:(new Date).toISOString().toString(),created_by:{id:1,username:"user"}}}(t,n,a))}}})(x),M=Object(c.b)(function(e){return{userStatus:e.userStatus}},function(e){return{addUserStatus:function(t,n,a){return e(p(t,n,a))},logout:function(){return e({type:"USER_LOGOUT"})}}})(I),U=Object(c.b)(function(e){return{userStatus:e.userStatus}},function(e){return{addUserStatus:function(t,n,a){return e(p(t,n,a))}}})(L),K=Object(c.b)(function(e){return{userStatus:e.userStatus,activeTab:e.activeTab}},function(e){return{changeActiveTab:function(t){return e(function(e){return{type:"MENU_ACTIVE_TAB",activeTab:e}}(t))}}})(N),H=n(18),P=n(49),G=n(52);function B(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENT":return{id:t.id,product:t.product,text:t.text,rate:t.rate,created_at:t.timestamp,created_by:t.created_by};default:return e}}var F=Object(H.c)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEMS_FETCH_DATA_SUCCESS":return t.items;default:return e}},itemsHasErrored:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEMS_HAS_ERRORED":return t.hasErrored;default:return e}},itemsIsLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEMS_IS_LOADING":return t.isLoading;default:return e}},commentsHasErrored:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COMMENTS_HAS_ERRORED":return t.hasErrored;default:return e}},commentsIsLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COMMENTS_IS_LOADING":return t.isLoading;default:return e}},comment:B,comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCT_COMMENTS_FETCH_SUCCESS":return t.comments;case"ADD_COMMENT":return[].concat(Object(G.a)(e),[B({},t)]);default:return e}},activeKey:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCT_ACTIVE_KEY":return t.activeKey;default:return e}},userStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGGED_IN":return{status:t.status,message:t.message,token:t.token};case"USER_LOGOUT":return{status:!1,message:"logout",token:""};default:return e}},activeTab:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MENU_ACTIVE_TAB":return t.activeTab;default:return e}}}),J=n(33),q=function(e){return function(t){return function(n){var a;return console.groupCollapsed("dispatching",n.type),console.log("prev state",e.getState()),console.log("action",n),a=t(n),console.log("next state",e.getState()),console.groupEnd(),a}}},V=function(e){return function(t){return function(n){var a=t(n);return localStorage["redux-store"]=JSON.stringify(e.getState()),a}}},W=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(H.a)(q,V,P.a)(H.d)(F,localStorage["redux-store"]?JSON.parse(localStorage["redux-store"]):J)},Y=n(50),z=n(17),$=function(e){var t=e.location;return r.a.createElement("div",{style:{margin:"30px auto"}},r.a.createElement(v.a,null,r.a.createElement(_.a,{lg:8,variant:"danger"},"Whoops cannot find resource at '",t.pathname,"'")))},Q=W();window.React=r.a,window.store=Q;var X=function(){return r.a.createElement(c.a,{store:Q},r.a.createElement(Y.a,{basename:"/recommendation-network"},r.a.createElement(z.a,{component:K}),r.a.createElement(z.c,null,r.a.createElement(z.a,{path:"/",exact:!0,component:D}),r.a.createElement(z.a,{path:"/login",exact:!0,component:M}),r.a.createElement(z.a,{path:"/register",exact:!0,component:U}),r.a.createElement(z.a,{component:$}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[53,1,2]]]);
//# sourceMappingURL=main.6528b470.chunk.js.map