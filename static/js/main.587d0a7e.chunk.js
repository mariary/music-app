(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports={btn_prev:"Link_btn_prev__3DlTq",text:"Link_text__1ySJt",overlay:"Link_overlay__11LEv",header:"Link_header__1JIvC",img:"Link_img__TkP3L",header_inner:"Link_header_inner__2oI7l",link:"Link_link__ycn2t",person:"Link_person__1Nnqx",title:"Link_title__jliTQ",about:"Link_about__2MUT6",url:"Link_url__xP66q",wrapper:"Link_wrapper__UdecE",credits:"Link_credits__VsFf0",info:"Link_info__3SwqT",views:"Link_views__1_nqT"}},function(e,t,n){e.exports={content:"Content_content__sXC1A",search:"Content_search__1P1wR",search_active:"Content_search_active__38JrS",search_input:"Content_search_input___JySX",search_btn:"Content_search_btn__3MdGR",inner:"Content_inner__1WISt",empty:"Content_empty__13oNs"}},function(e,t,n){e.exports={item:"Content_Item_item__2X4kA",item_img:"Content_Item_item_img__3fJlA",item_person:"Content_Item_item_person__iGusk",list:"Content_Item_list__2LCyA",title:"Content_Item_title__3MThf",info:"Content_Item_info__rLv0q",hits:"Content_Item_hits__1EV0J",wrapper:"Content_Item_wrapper__3iWK8",views:"Content_Item_views__DQzxP",length:"Content_Item_length__ZySwD"}},function(e,t,n){e.exports={inner:"History_inner__O5j9b",title:"History_title__3b9T7",loading:"History_loading__1CWmv",img:"History_img__h9LKP",load:"History_load__14m5w",clear:"History_clear__3yKIU"}},function(e,t,n){e.exports={menu:"Footer_menu__3X47R",wrapper:"Footer_wrapper__33Ypt",menu_link:"Footer_menu_link__5kota",footer:"Footer_footer__3Ah6J",hits:"Footer_hits__37KC7",history:"Footer_history__BD-Ff",search:"Footer_search__1dpOg"}},,function(e,t,n){e.exports={items:"Menu_items__29a29",item:"Menu_item__2Tq1r",menu:"Menu_menu__2MZiB"}},function(e,t,n){e.exports={inner:"Hits_inner__2j_DB",title:"Hits_title__3laTR"}},,function(e,t,n){e.exports={wrapper:"Header_wrapper__1SrlC",header:"Header_header__khB5A",title:"Header_title__2A1Ml",img:"Header_img__3jh1c"}},,,,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),a=n(14),c=n.n(a),r=(n(20),n(2)),o=(n(21),n(13)),l=n.n(o),u=n(0),j=function(e){return Object(u.jsx)("div",{className:l.a.wrapper,children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("h1",{className:l.a.header,children:"loool"})})})},h=n(3),d=n.n(h),_=n(9),b=n(5),m=n.n(b),f=(n.p,n(6)),p=n.n(f),v=(n.p,n(4)),O=n.n(v),x=function(e){var t=Object(i.useState)({title:e.song.title,artist:e.song.artist,img:e.song.img,url:e.song.url,views:e.song.views,hit:e.song.hit,token:o("token")}),n=Object(r.a)(t,2),s=n[0],a=n[1],c=["(I know that's right)\n","Make a nigga act right\n","Racks stack up Shaq height\n","Jewelry on me, flashlight\n","I been lit since last night\n","Hit him with that good good\n","I said my face bomb, ass tight\n","Broke boys don't deserve no pussy\n","Big bag bussin' out the Bentley Bentayga\n","Man, Balenciaga Bardi back and all these bitches fucked\n","It's big bags bussin' out the Bentley Bentayga, man\n","Birkin bag, Bardi back and all you bitches fucked\n","If it's up, then it's up, then it's up, then it's stuck\n","Man, Balenciaga Bardi back and all these bitches fucked\n","It's big bags bussin' out the Bentley Bentayga, man\n","Birkin bag, Bardi back and all you bitches fucked\n","Man, Balenciaga Bardi back and all these bitches fucked\n","It's big bags bussin' out the Bentley Bentayga, man\n","Birkin bag, Bardi back and alffffffffffffffl\n","I said my face bomb, ass tight ffffff\n","Broke boys don't deserve no pussffy\n","Big bag bussin' out the Ben\n"];function o(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),i=0;i<n.length;i++){for(var s=n[i];" "===s.charAt(0);)s=s.substring(1);if(0===s.indexOf(t))return s.substring(t.length,s.length)}return""}var l=Object(i.useState)(c),j=Object(r.a)(l,2),h=j[0],b=j[1];Object(i.useEffect)((function(){m()}),[]);var m=function(){var e=Object(_.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rapapi.herokuapp.com/api/song",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(s)});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a({title:n.title,artist:n.artist,img:n.img,url:n.url,views:n.views,hit:n.hit,token:o("token")}),b(n.text);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:e.active?"modal1 active":"modal",children:[Object(u.jsxs)("div",{className:O.a.header,children:[Object(u.jsx)("img",{src:e.song.img,alt:"",className:O.a.img}),Object(u.jsx)("div",{className:O.a.header_inner})]}),Object(u.jsxs)("div",{className:O.a.link,children:[Object(u.jsx)("button",{className:O.a.btn_prev,onClick:function(){e.setActive(!1)}}),Object(u.jsx)("div",{className:O.a.person,children:e.Cut(e.song.artist)}),Object(u.jsx)("p",{className:O.a.title,children:e.Cut(e.song.title)}),Object(u.jsxs)("p",{className:O.a.about,children:[e.song.views.length>0?Object(u.jsx)("div",{className:O.a.views,children:e.song.views}):Object(u.jsx)("div",{}),e.song.hit?Object(u.jsx)("div",{className:O.a.info}):Object(u.jsx)("div",{})]}),Object(u.jsx)("p",{className:O.a.text,children:h===c?c.map((function(e){return Object(u.jsx)("span",{children:e})})):h})]})]})},g=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),s=n[0],a=n[1];function c(e){return e.includes("(")?e=e.split("(")[0]:e}var o=e.kind;return Object(u.jsx)("div",{className:p.a[o],children:Object(u.jsx)("div",{className:e.info.hit?p.a.hits:" ",children:Object(u.jsxs)("div",{className:p.a.item,children:[Object(u.jsxs)("div",{className:p.a.wrapper,onClick:function(){return a(e.mount)},children:[Object(u.jsxs)("div",{className:p.a.info,children:[Object(u.jsx)("img",{src:e.info.img,alt:"",className:p.a.item_img}),Object(u.jsx)("div",{className:p.a.item_person,children:c(e.info.artist)}),Object(u.jsx)("div",{className:p.a.title,children:c(e.info.title)})]}),e.info.views.length>0?Object(u.jsx)("div",{className:p.a.views,children:function(e){if(e.includes("K")||e.includes("M"))return e;var t=parseInt(e)/1e3;return t<1?Math.round(1e3*t):t>1e3?(t=Math.round(t/1e3),"".concat(t,"M")):"".concat(Math.round(t),"K")}(e.info.views)}):Object(u.jsx)("div",{}),Object(u.jsx)("div",{className:p.a.length,children:"3:30"})]}),s?Object(u.jsx)(x,{song:e.info,active:s,setActive:a,Cut:c},e.info.key):Object(u.jsx)("div",{})]})})})},k=n.p+"static/media/search.a797d798.svg",y=function(e){var t=Object(i.useState)([]),n=Object(r.a)(t,2),s=n[0],a=n[1],c=Object(i.useState)(""),o=Object(r.a)(c,2),l=o[0],j=o[1],h=Object(i.useState)({q:""}),b=Object(r.a)(h,2),f=b[0],p=b[1];Object(i.useEffect)((function(){v()}),[f]);var v=function(){var e=Object(_.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rapapi.herokuapp.com/api/search",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(f)});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n.songs);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(e){j(e.target.value),p({q:e.target.value}),e.preventDefault()};return Object(u.jsxs)("div",{className:m.a.content,children:[" "===f.q?Object(u.jsx)("div",{className:m.a.search,children:Object(u.jsxs)("form",{onSubmit:O,children:[Object(u.jsx)("input",{type:"text",className:m.a.search_input,value:l,onChange:O}),Object(u.jsx)("button",{type:"submit",className:m.a.search_btn,children:"search"})]})}):Object(u.jsx)("div",{className:m.a.search_active,children:Object(u.jsxs)("form",{onSubmit:O,children:[Object(u.jsx)("input",{type:"text",className:m.a.search_input,spellCheck:"false",value:l,onChange:O}),Object(u.jsx)("button",{type:"submit",className:m.a.search_btn,children:"search"})]})}),Object(u.jsx)("div",{className:m.a.inner,children:s.length>0?Object(u.jsx)("div",{className:m.a.inner,children:s.map((function(e){return Object(u.jsx)(g,{info:e,mount:!0},e.url)}))}):Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:k,className:m.a.empty,alt:""}),"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0435\u0441\u043d\u0438"]})})]})},N=n(8),C=n.n(N),w=function(e){return Object(u.jsx)("div",{className:C.a.wrapper,children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("footer",{className:C.a.footer,children:Object(u.jsxs)("div",{className:C.a.menu,children:[Object(u.jsx)("button",{className:C.a.menu_link+" "+C.a.hits,onClick:function(){e.activeHits(!0),e.activeContent(!1),e.activeHistory(!1)}}),Object(u.jsx)("button",{className:C.a.menu_link+" "+C.a.search,onClick:function(){e.activeHits(!1),e.activeContent(!0),e.activeHistory(!1)}}),Object(u.jsx)("button",{className:C.a.menu_link+" "+C.a.history,onClick:function(){e.activeHits(!1),e.activeContent(!1),e.activeHistory(!0)}})]})})})})},S=n(11),B=n.n(S),H=n.p+"static/media/load.a600eb7d.PNG",I=n(7),T=n.n(I),L=function(e){for(var t=[],n=0;n<10;n++)t.push({artist:"",title:"",img:H,views:"",hit:!1,url:n});var s=Object(i.useState)(t),a=Object(r.a)(s,2),c=a[0],o=a[1],l=Object(i.useState)(!1),j=Object(r.a)(l,2),h=j[0],b=j[1];Object(i.useEffect)((function(){m()}),[]);var m=function(){var e=Object(_.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rapapi.herokuapp.com/api/hits");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,b(!0),o(n.songs);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:B.a.content,children:[Object(u.jsx)("div",{className:B.a.title,children:"Hits"}),Object(u.jsx)("div",{className:B.a.inner,children:Object(u.jsxs)("ol",{children:[""===c[0].artist?Object(u.jsx)("div",{className:T.a.loading,children:Object(u.jsx)("div",{className:T.a.img})}):Object(u.jsx)("div",{}),c.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(g,{info:e,kind:"list",hits:"hits",mount:h},e.url)})}))]})})]})},M=n.p+"static/media/box.d8914003.svg",A=function(e){function t(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),i=0;i<n.length;i++){for(var s=n[i];" "===s.charAt(0);)s=s.substring(1);if(0===s.indexOf(t))return s.substring(t.length,s.length)}return""}var n=Object(i.useState)(null),s=Object(r.a)(n,2),a=s[0],c=s[1],o=Object(i.useState)(!1),l=Object(r.a)(o,2),j=l[0],h=l[1];console.log(a),Object(i.useEffect)((function(){b()}),[]);var b=function(){var e=Object(_.a)(d.a.mark((function e(){var n,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rapapi.herokuapp.com/api/history",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({token:t("token")})});case 2:return n=e.sent,e.next=5,n.json();case 5:i=e.sent,h(!0),c(i);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:T.a.history,children:[Object(u.jsx)("div",{className:T.a.title,children:"History"}),Object(u.jsx)("div",{className:T.a.inner,children:null===a?Object(u.jsx)("div",{className:T.a.loading,children:Object(u.jsx)("div",{className:T.a.img})}):a.length>0?Object(u.jsx)("div",{children:a.map((function(e){return Object(u.jsx)(g,{info:e,kind:"list",mount:j},e.url)}))}):Object(u.jsxs)("div",{className:T.a.clear,children:[Object(u.jsx)("img",{src:M,alt:""}),"\u0412\u0430\u0448 \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u0443\u0441\u0442"]})})]})},J=n(10),F=n.n(J),P=function(e){return Object(u.jsx)("div",{className:F.a.menu,children:Object(u.jsxs)("div",{className:F.a.items,children:[Object(u.jsx)("button",{className:F.a.item,onClick:function(){e.activeHits(!0),e.activeContent(!1),e.activeHistory(!1)},children:"\u0425\u0438\u0442\u044b"}),Object(u.jsx)("button",{className:F.a.item,onClick:function(){e.activeHits(!1),e.activeContent(!0),e.activeHistory(!1)},children:"\u041f\u043e\u0438\u0441\u043a"}),Object(u.jsx)("button",{className:F.a.item,onClick:function(){e.activeHits(!1),e.activeContent(!1),e.activeHistory(!0)},children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"})]})})};var q=function(){fetch("https://rapapi.herokuapp.com/api/signup",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({token:function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),i=0;i<n.length;i++){for(var s=n[i];" "===s.charAt(0);)s=s.substring(1);if(0===s.indexOf(t))return s.substring(t.length,s.length)}return""}("token")})}).then((function(e){return e.json()})).then((function(e){return function(e,t,n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3);var s="expires="+i.toUTCString();document.cookie=e+"="+t+";"+s+";path=/"}("token",e.token,365)}));var e=Object(i.useState)(!0),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(i.useState)(!1),c=Object(r.a)(a,2),o=c[0],l=c[1],h=Object(i.useState)(!1),d=Object(r.a)(h,2),_=d[0],b=d[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(j,{}),Object(u.jsx)(P,{hits:n,content:o,history:_,activeHits:s,activeContent:l,activeHistory:b}),Object(u.jsxs)("div",{className:"container",children:[n?Object(u.jsx)(L,{}):Object(u.jsx)("div",{}),o?Object(u.jsx)(y,{}):Object(u.jsx)("div",{}),_?Object(u.jsx)(A,{}):Object(u.jsx)("div",{})]}),Object(u.jsx)(w,{hits:n,content:o,history:_,activeHits:s,activeContent:l,activeHistory:b})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),s(e),a(e),c(e)}))},E=n(15);n.n(E).a.send("VKWebAppInit",{}),c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(q,{})}),document.getElementById("root")),D()}],[[24,1,2]]]);
//# sourceMappingURL=main.587d0a7e.chunk.js.map