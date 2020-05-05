(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{26:function(e,t,a){e.exports=a(43)},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),i=a(10),s=(a(31),a(32),a(5)),o=a(6),m=a(8),d=a(7),u=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},r.a.createElement(i.b,{className:"navbar-brand",to:"/"}),r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link",to:"/"},"Weather")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link",to:"/burger"},"Burger"))))}}]),a}(n.Component),b=a(9),p=a(14);a(38);var v=function(){var e,t,a,c,l,i=Object(n.useState)(""),s=Object(p.a)(i,2),o=s[0],m=s[1],d=Object(n.useState)("USA"),u=Object(p.a)(d,1)[0];return Object(n.useEffect)((function(){fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(u,"&appid=6c69fc4731444a310cad36bbdfcd957b")).then((function(e){return e.json()})).then((function(e){m(e)}))}),[u]),o&&(e=o.name,t=o.weather[0].main,a=o.weather[0].icon,c=o.main.humidity,l=o.main.pressure),r.a.createElement("div",{className:"header-wrapper text-center"},r.a.createElement("h3",null,e),r.a.createElement("img",{alt:t,src:"http://openweathermap.org/img/w/"+a+".png"}),r.a.createElement("div",null,t),r.a.createElement("div",null,"Huminity: ",c),r.a.createElement("div",null,"Pressure: ",l))};a(39);var h=function(){var e,t=Object(n.useState)(""),a=Object(p.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/onecall?lat=60.99&lon=30.9&appid=6c69fc4731444a310cad36bbdfcd957b").then((function(e){return e.json()})).then((function(e){l(e)}))}),[]),c&&(e=c.daily.slice(1,8).map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{alt:e.weather[0].main,src:"http://openweathermap.org/img/w/"+e.weather[0].icon+".png"})),r.a.createElement("div",null,e.weather[0].description),r.a.createElement("div",null,"Humidity: ",e.humidity))}))),r.a.createElement("div",{className:"weather-container"},r.a.createElement("ul",{className:"list-inline weather-container__list"},e))};var E=function(){return r.a.createElement("div",{className:"weather"},r.a.createElement(v,null),r.a.createElement(h,null))},f=a(16),g=(a(40),a(25)),y=(a(41),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.type;return"bread-bottom"===e?r.a.createElement("div",{className:"bread-bottom"}):"bread-top"===e?r.a.createElement("div",{className:"bread-top"}):"meat"===e?r.a.createElement("div",{className:"meat"}):"cheese"===e?r.a.createElement("div",{className:"cheese"}):"salad"===e?r.a.createElement("div",{className:"salad"}):null}}]),a}(n.Component)),N=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(g.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(y,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return t.length<=0&&(t=r.a.createElement("p",{className:"text-center m-3"},r.a.createElement("b",null,"Please adding ingredients"))),r.a.createElement("div",{className:"burger-container"},r.a.createElement(y,{type:"bread-top"}),t,r.a.createElement(y,{type:"bread-bottom"}))},j=(a(42),function(e){return r.a.createElement("div",{className:"build-controller"},r.a.createElement("div",{className:"build-controller__label"},e.label),r.a.createElement("button",{className:"build-controller__less ".concat(e.disabled?"disabled":""),onClick:e.remove,disabled:e.disabled},"Less"),r.a.createElement("button",{className:"build-controller__more",onClick:e.add},"More"))}),O=[{label:"cheese",type:"cheese"},{label:"salad",type:"salad"},{label:"meat",type:"meat"}],w=function(e){return r.a.createElement("div",{className:"burger-control container"},r.a.createElement("p",{className:"text-center"},"Price of burger: ",e.price,"$"),O.map((function(t){return r.a.createElement(j,{key:t.label,label:t.label,type:t.type,add:function(){return e.ingredientAdd(t.type)},remove:function(){return e.ingredientRemove(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:"btn btn-danger mt-3"},"Order Now"))},k={salad:2,cheese:3,meat:5},P=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:{cheese:0,salad:0,meat:0},totalPrice:3,orderNow:!1},e.addIngredientHandler=function(t){var a=e.state.ingredients[t]+1,n=Object(f.a)({},e.state.ingredients);n[t]=a;var r=k[t],c=e.state.totalPrice+r;e.setState({totalPrice:c,ingredients:n})},e.removeIngredientHandler=function(t){var a=e.state.ingredients[t];if(a>0){var n=a-1,r=Object(f.a)({},e.state.ingredients);r[t]=n;var c=k[t],l=e.state.totalPrice-c;e.setState({totalPrice:l,ingredients:r})}},e}return Object(o.a)(a,[{key:"render",value:function(){var e=Object(f.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5"},r.a.createElement(w,{ingredientAdd:this.addIngredientHandler,ingredientRemove:this.removeIngredientHandler,price:this.state.totalPrice,disabled:e})),r.a.createElement("div",{className:"col"},r.a.createElement(N,{ingredients:this.state.ingredients}))))}}]),a}(n.Component),x=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",component:E}),r.a.createElement(b.a,{exact:!0,path:"/burger",component:P}))}}]),a}(n.Component);var _=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(i.a,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.ba72a9c4.chunk.js.map