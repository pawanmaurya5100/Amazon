(this.webpackJsonpamazon=this.webpackJsonpamazon||[]).push([[0],{32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s.n(c),i=s(12),n=s.n(i),r=(s(32),s(33),s(34),s(22)),o=s.n(r),l=s(23),j=s.n(l),d=s(11),h=s(1),m=function(){return Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)(d.b,{to:"/",children:Object(h.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:" Amazon Logo"})}),Object(h.jsxs)("div",{className:"header__search",children:[Object(h.jsx)("input",{type:"text",className:"header__searchInput"}),Object(h.jsx)(o.a,{style:{backgroundColor:"#cd9042",padding:"5px",height:"22px"},classname:"header__searchIcon"})]}),Object(h.jsxs)("div",{className:"header__nav",children:[Object(h.jsxs)("div",{className:"header__option",children:[Object(h.jsx)("span",{className:"header__optionLineOne",children:"Hello Guest"}),Object(h.jsx)("span",{className:"header__optionLineTwo",children:"Sign In"})]}),Object(h.jsxs)("div",{className:"header__option",children:[Object(h.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(h.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]}),Object(h.jsxs)("div",{className:"header__option",children:[Object(h.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(h.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(h.jsx)(d.b,{to:"/checkout",children:Object(h.jsxs)("div",{className:"header__optionBasket",children:[Object(h.jsx)(j.a,{}),Object(h.jsx)("span",{className:"header__optionLineTwo header_basketCount",children:"0"})]})})]})]})},b=s(14),_=(s(42),s(43),s(24)),O=s.n(_),x=Object(c.createContext)(),u=function(e){var t=e.reducer,s=e.intialState,a=e.children;return Object(h.jsx)(x.Provider,{value:Object(c.useReducer)(t,s),children:a})};var p=function(e){var t=e.id,s=e.title,a=e.image,i=e.price,n=e.rating,r=Object(c.useContext)(x),o=Object(b.a)(r,2),l=(o[0],o[1]);return console.log("bsd:".basket),Object(h.jsxs)("div",{className:"product",children:[Object(h.jsxs)("div",{className:"product__info",children:[Object(h.jsx)("p",{children:s}),Object(h.jsxs)("p",{className:"product__price",children:[Object(h.jsx)("small",{children:"$"}),Object(h.jsx)("strong",{children:i})]}),Object(h.jsx)("div",{className:"product__rating",children:Array(n).fill().map((function(e,t){return Object(h.jsx)("p",{children:Object(h.jsx)(O.a,{})})}))})]}),Object(h.jsx)("img",{src:a,alt:""}),Object(h.jsx)("button",{onClick:function(){l({type:"ADD_TO_BASKET",item:{id:t,title:s,image:a,price:i,rating:n}})},children:"Add to Basket"})]})},g=function(){var e=["ONE","TWO","THREE"],t=Object(c.useState)(new Array(e.length).fill(!1)),s=Object(b.a)(t,2);s[0],s[1];console.log(e);return Object(h.jsx)("div",{className:"home",children:Object(h.jsxs)("div",{className:"home__container",children:[Object(h.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),Object(h.jsxs)("div",{className:"home__row",children:[Object(h.jsx)(p,{id:"12321341",title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",price:11.96,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}),Object(h.jsx)(p,{id:"49538094",title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",price:239,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"})]}),Object(h.jsxs)("div",{className:"home__row",children:[Object(h.jsx)(p,{id:"4903850",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",price:199.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),Object(h.jsx)(p,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),Object(h.jsx)(p,{id:"3254354345",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})]}),Object(h.jsx)("div",{className:"home__row"})]})})},N=(s(44),s(45),s(25)),v=s.n(N),f=function(){return Object(h.jsxs)("div",{className:"subtotal",children:[Object(h.jsx)(v.a,{renderText:function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:["Subtotal ( 0 items): ",Object(h.jsx)("strong",{children:e})]}),Object(h.jsxs)("small",{className:"subtotal__gift",children:[Object(h.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:0,displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}),Object(h.jsx)("button",{children:"Proceed to Checkout"})]})},S=function(){return Object(h.jsxs)("div",{className:"checkout",children:[Object(h.jsxs)("div",{className:"checkout__left",children:[Object(h.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("h3",{children:["Hello, "," "]}),Object(h.jsx)("h2",{className:"checkout__title",children:"Your shopping Basket"})]})]}),Object(h.jsx)("div",{className:"checkout__right",children:Object(h.jsx)(f,{})})]})},k=s(3);var C=function(){return Object(h.jsx)(d.a,{children:Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(m,{}),Object(h.jsxs)(k.c,{children:[Object(h.jsx)(k.a,{path:"/checkout",children:Object(h.jsx)(S,{})}),Object(h.jsx)(k.a,{path:"/",children:Object(h.jsx)(g,{})})]})]})})},L=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,60)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),i(e),n(e)}))},T=s(26),A=function(e,t){switch(console.log("TYPE:",t),t.type){case"ADD_TO_BASKET":return Object(T.a)({},e);default:return e}};n.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(u,{initialState:{basket:["asfasf"]},reducer:A,children:Object(h.jsx)(C,{})})}),document.getElementById("root")),L()}},[[48,1,2]]]);
//# sourceMappingURL=main.52694ccd.chunk.js.map