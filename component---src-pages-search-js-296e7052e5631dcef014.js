(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{Bxyr:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=(t("Wbzz"),t("vrFN")),c=t("Bl7J"),i=t("uG1v"),o=t("zM5D"),u=t("6xyR"),s=t("cWnB"),m=t("QQeh"),d=t.n(m),E=t("s/Ur"),p=(t("YwZP"),t("Mtzg")),b=function(e){e.image;var a=e.name,t=(e.description,e.price),n=e.isTabletOrMobile;return l.a.createElement("div",null,l.a.createElement(u.a,{style:{width:"14rem"},className:n?"mx-auto":""},l.a.createElement(u.a.Body,null,l.a.createElement(u.a.Title,null,a),l.a.createElement(u.a.Subtitle,null,"$",t))))};a.default=function(){var e=Object(E.useMediaQuery)({query:"(max-width: 1224px)"}),a=l.a.useState(!1),t=a[0],n=a[1],u=function(){return n(!1)},m=(useLocation().search.substring(useLocation().search.indexOf("=")+1),p.filter((function(e){return e.Name.toUpperCase().includes(searchq.toUpperCase())})).reduce((function(e,a,t){return(t%3==0?e.push([a]):e[e.length-1].push(a))&&e}),[]));return l.a.createElement(c.a,null,l.a.createElement(r.a,{title:"Search"}),l.a.createElement("br",null),l.a.createElement("div",{style:{display:"inline-block",height:"60 px",width:"100%",background:"yellow"}},l.a.createElement("h2",{style:{fontFamily:"",textAlign:"center",color:"red"}},searchq?searchq.toUpperCase():"ALL PRODUCTS")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(i.a,{className:"mx-auto"}),l.a.createElement("br",null),m.map((function(a){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(i.a,{className:"mx-auto"},a.map((function(a){return l.a.createElement(b,{name:a.Name,description:a.Name,price:a.Value,isTabletOrMobile:e})}))))})),l.a.createElement(o.a,{show:t,onHide:u},l.a.createElement(o.a.Header,{closeButton:!0},l.a.createElement(o.a.Title,null,"Steak")),l.a.createElement(o.a.Body,null,l.a.createElement("img",{src:d.a}),l.a.createElement("strong",null,"Meat and Poultry"),l.a.createElement("br",null),"Yes I really love steak. The flavor that it provides is unparalleled and it is a great source of protien. Not to mention it is a very comfortable food."),l.a.createElement(o.a.Footer,null,l.a.createElement(s.a,{variant:"secondary",onClick:u},"Close"))))}}}]);
//# sourceMappingURL=component---src-pages-search-js-296e7052e5631dcef014.js.map