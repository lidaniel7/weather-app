(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n(16)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(7),c=n.n(r),o=n(1),s=n(2),h=n(5),u=n(4),m=n(3),l=(n(13),function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(t){return Object(o.a)(this,n),e.call(this,t)}return Object(s.a)(n,[{key:"render",value:function(){var t="http://openweathermap.org/img/wn/"+this.props.icon+"@4x.png";return i.a.createElement("div",{className:"location"},i.a.createElement("h3",null,this.props.city),i.a.createElement("img",{src:t}),i.a.createElement("p",null,"Condition: "+this.props.condition),i.a.createElement("p",null,"Temperature: "+this.props.temperature+"\xb0F"),i.a.createElement("p",null,"Humidity: "+this.props.humidity+"%"))}}]),n}(a.Component)),p=(n(14),function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(t){return Object(o.a)(this,n),e.call(this,t)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.inputCity,n=t.handleChange;return i.a.createElement("form",{onSubmit:e},i.a.createElement("input",{type:"text",placeHolder:"Enter a City",onChange:n}),i.a.createElement("button",null,"Get Weather"))}}]),n}(a.Component)),d=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).state={city:"San Francisco",temperature:"",temp_min:"",temp_max:"",humidity:"",condition:"",newCity:"",icon:""},t.getWeather=t.getWeather.bind(Object(h.a)(t)),t.inputCity=t.inputCity.bind(Object(h.a)(t)),t.handleChange=t.handleChange.bind(Object(h.a)(t)),t}return Object(s.a)(n,[{key:"getWeather",value:function(t){var e=this,n="http://api.openweathermap.org/data/2.5/weather?q=".concat(t.toLowerCase(),"&appid=").concat("8a5ef08ed5c0d2cb0672425f4f244986","&units=imperial");fetch(n).then((function(t){return t.json()})).then((function(t){var n=t;console.log(n),e.setState({temperature:n.main.temp,temp_min:n.main.temp_min,temp_max:n.main.temp_max,humidity:n.main.humidity,condition:n.weather[0].description,icon:n.weather[0].icon})})).catch((function(t){alert("You have entered an invalid city. Please try again.")}))}},{key:"handleChange",value:function(t){t.preventDefault(),this.setState({newCity:t.target.value})}},{key:"inputCity",value:function(t){t.preventDefault(),this.setState({city:this.state.newCity}),this.getWeather(this.state.newCity),t.target.reset()}},{key:"componentDidMount",value:function(){this.getWeather(this.state.city)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"App"},i.a.createElement("h1",{className:"Title"},"How's the weather today?"),i.a.createElement(p,{inputCity:this.inputCity,handleChange:this.handleChange}),i.a.createElement(l,{temperature:this.state.temperature,temp_min:this.state.temp_min,temp_max:this.state.temp_max,humidity:this.state.humidity,condition:this.state.condition,city:this.state.city,icon:this.state.icon})))}}]),n}(a.Component);n(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.82501706.chunk.js.map