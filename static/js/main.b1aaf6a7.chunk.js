(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,function(e,t,n){e.exports={btn_prev:"Link_btn_prev__2aTaM",text:"Link_text__yqKh1",overlay:"Link_overlay__3VGZh",header:"Link_header__2Gx_o",img:"Link_img__33nsx",header_inner:"Link_header_inner__2n4Nd",link:"Link_link__1XJfa",person:"Link_person__2hxW5",title:"Link_title__1hi3z",about:"Link_about__ZuNB0",url:"Link_url__22Zit",wrapper:"Link_wrapper__1ZR4C",credits:"Link_credits__QL7TA",info:"Link_info__m_g09",views:"Link_views__2fsyT"}},,function(e,t,n){e.exports={item:"Content_Item_item__1OfIP",item_img:"Content_Item_item_img__1zZ53",item_person:"Content_Item_item_person__Pig0r",list:"Content_Item_list__2sh-o",title:"Content_Item_title__3WVVn",info:"Content_Item_info__303WF",hits:"Content_Item_hits__1aVuG",wrapper:"Content_Item_wrapper__1Ze3D",views:"Content_Item_views__1b2Ck",length:"Content_Item_length__3yQXL"}},function(e,t,n){e.exports={menu:"Footer_menu__3wGBS",wrapper:"Footer_wrapper__1UzXs",menu_link:"Footer_menu_link__2zh1p",footer:"Footer_footer__1w0lV",hits:"Footer_hits__1pPla",history:"Footer_history__24lKO",search:"Footer_search__17MEG"}},function(e,t,n){e.exports={content:"Content_content__KhG46",search:"Content_search__3dh5c",search_active:"Content_search_active__Liahr",search_input:"Content_search_input__3qSQD",search_btn:"Content_search_btn__UX4JC",inner:"Content_inner__1Mr0I"}},,function(e,t,n){e.exports={items:"Menu_items__3VBzc",item:"Menu_item__3reEH",menu:"Menu_menu__1wQ3F"}},function(e,t,n){e.exports={btn_prev:"Credit_btn_prev__1zL2F",credit:"Credit_credit__29bIt"}},function(e,t,n){e.exports={inner:"Hits_inner__33b2X",title:"Hits_title__3qCc0"}},function(e,t,n){e.exports={inner:"History_inner__17_f7",title:"History_title__3P4DU"}},,function(e,t,n){e.exports={wrapper:"Header_wrapper__4Axjt",header:"Header_header__1VCKf",title:"Header_title__3SH2Q",img:"Header_img__3ifQS"}},,,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),a=n(15),c=n.n(a),r=(n(20),n(2)),o=(n(21),n(14)),u=n.n(o),l=n(0),h=function(e){return Object(l.jsx)("div",{className:u.a.wrapper,children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("h1",{className:u.a.header,children:"loool"})})})},j=n(4),b=n.n(j),d=n(8),_=n(7),m=n.n(_),f=(n.p,n(5)),p=n.n(f),v=(n.p,n(24),n(3)),O=n.n(v),x=n(10),g=n.n(x),k=function(e){return Object(l.jsxs)("div",{className:e.active?"modal active":"modal",children:[Object(l.jsx)("button",{className:g.a.btn_prev,onClick:function(){e.setActive(!1)}}),Object(l.jsxs)("div",{className:g.a.credit,children:[Object(l.jsx)("p",{className:g.a.title,children:"\u044d\u0439\u043d \u044d\u0431\u0430\u0443\u0442 \u0437\u0438\u0441 \u0447\u0438\u0444 \u043a\u0438\u0444"}),Object(l.jsx)("p",{className:g.a.title,children:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"})]})]})},y=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),s=n[0],a=n[1],c=Object(i.useState)({title:e.song.title,artist:e.song.artist,img:e.song.img,url:e.song.url,views:e.song.views,hit:e.song.hit,token:_("token")}),o=Object(r.a)(c,2),u=o[0],h=o[1],j=["(I know that's right)\n","Make a nigga act right\n","Racks stack up Shaq height\n","Jewelry on me, flashlight\n","I been lit since last night\n","Hit him with that good good\n","I said my face bomb, ass tight\n","Broke boys don't deserve no pussy\n","Big bag bussin' out the Bentley Bentayga\n","Man, Balenciaga Bardi back and all these bitches fucked\n","It's big bags bussin' out the Bentley Bentayga, man\n","Birkin bag, Bardi back and all you bitches fucked\n","If it's up, then it's up, then it's up, then it's stuck\n","Man, Balenciaga Bardi back and all these bitches fucked\n","It's big bags bussin' out the Bentley Bentayga, man\n","Birkin bag, Bardi back and all you bitches fucked\n","Man, Balenciaga Bardi back and all these bitches fucked\n","It's big bags bussin' out the Bentley Bentayga, man\n","Birkin bag, Bardi back and alffffffffffffffl\n","I said my face bomb, ass tight ffffff\n","Broke boys don't deserve no pussffy\n","Big bag bussin' out the Ben\n"];function _(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),i=0;i<n.length;i++){for(var s=n[i];" "===s.charAt(0);)s=s.substring(1);if(0===s.indexOf(t))return s.substring(t.length,s.length)}return""}var m=Object(i.useState)(j),f=Object(r.a)(m,2),p=f[0],v=f[1];Object(i.useEffect)((function(){x()}),[]);var x=function(){var e=Object(d.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rapapi.herokuapp.com/api/song",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(u)});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,h({title:n.title,artist:n.artist,img:n.img,url:n.url,views:n.views,hit:n.hit,token:_("token")}),v(n.text);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:e.active?"modal1 active":"modal",children:[Object(l.jsxs)("div",{className:O.a.header,children:[Object(l.jsx)("img",{src:e.song.img,alt:"",className:O.a.img}),Object(l.jsx)("div",{className:O.a.header_inner})]}),Object(l.jsxs)("div",{className:O.a.link,children:[Object(l.jsx)("button",{className:O.a.btn_prev,onClick:function(){e.setActive(!1)}}),Object(l.jsx)("div",{className:O.a.person,children:e.Cut(e.song.artist)}),Object(l.jsx)("p",{className:O.a.title,children:e.Cut(e.song.title)}),Object(l.jsxs)("p",{className:O.a.about,children:[Object(l.jsx)("div",{className:O.a.views,children:e.song.views}),e.song.hit?Object(l.jsx)("div",{className:O.a.info}):Object(l.jsx)("div",{})]}),Object(l.jsxs)("div",{className:O.a.wrapper,children:[Object(l.jsx)("a",{src:e.song.url,className:O.a.url,children:"Song url"}),Object(l.jsx)("button",{className:O.a.credits,onClick:function(){return a(!0)},children:"Credits"})]}),Object(l.jsx)("p",{className:O.a.text,children:p===j?j.map((function(e){return Object(l.jsx)("span",{children:e})})):p})]}),Object(l.jsx)(k,{active:s,setActive:a})]})},N=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),s=n[0],a=n[1];function c(e){return e.includes("(")?e=e.split("(")[0]:e}var o=e.kind;return Object(l.jsx)("div",{className:p.a[o],children:Object(l.jsx)("div",{className:e.info.hit?p.a.hits:" ",children:Object(l.jsxs)("div",{className:p.a.item,children:[Object(l.jsxs)("div",{className:p.a.wrapper,onClick:function(){return a(e.mount)},children:[Object(l.jsxs)("div",{className:p.a.info,children:[Object(l.jsx)("img",{src:e.info.img,alt:"",className:p.a.item_img}),Object(l.jsx)("div",{className:p.a.item_person,children:c(e.info.artist)}),Object(l.jsx)("div",{className:p.a.title,children:c(e.info.title)})]}),Object(l.jsx)("div",{className:p.a.views,children:e.info.views}),Object(l.jsx)("div",{className:p.a.length,children:"3:30"})]}),s?Object(l.jsx)(y,{song:e.info,active:s,setActive:a,Cut:c},e.info.key):Object(l.jsx)("div",{})]})})})},C=function(e){var t=Object(i.useState)([]),n=Object(r.a)(t,2),s=n[0],a=n[1],c=Object(i.useState)(""),o=Object(r.a)(c,2),u=o[0],h=o[1],j=Object(i.useState)({q:""}),_=Object(r.a)(j,2),f=_[0],p=_[1];Object(i.useEffect)((function(){v()}),[f]);var v=function(){var e=Object(d.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rapapi.herokuapp.com/api/search",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(f)});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n.songs);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(e){h(e.target.value),p({q:e.target.value}),e.preventDefault()};return Object(l.jsxs)("div",{className:m.a.content,children:[" "===f.q?Object(l.jsx)("div",{className:m.a.search,children:Object(l.jsxs)("form",{onSubmit:O,children:[Object(l.jsx)("input",{type:"text",className:m.a.search_input,value:u,onChange:O}),Object(l.jsx)("button",{type:"submit",className:m.a.search_btn,children:"search"})]})}):Object(l.jsx)("div",{className:m.a.search_active,children:Object(l.jsxs)("form",{onSubmit:O,children:[Object(l.jsx)("input",{type:"text",className:m.a.search_input,value:u,onChange:O}),Object(l.jsx)("button",{type:"submit",className:m.a.search_btn,children:"search"})]})}),Object(l.jsx)("div",{className:m.a.inner,children:s.map((function(e){return Object(l.jsx)(N,{info:e,mount:!0},e.url)}))})]})},w=n(6),S=n.n(w),B=function(e){return Object(l.jsx)("div",{className:S.a.wrapper,children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("footer",{className:S.a.footer,children:Object(l.jsxs)("div",{className:S.a.menu,children:[Object(l.jsx)("button",{className:S.a.menu_link+" "+S.a.hits,onClick:function(){e.activeHits(!0),e.activeContent(!1),e.activeHistory(!1)}}),Object(l.jsx)("button",{className:S.a.menu_link+" "+S.a.search,onClick:function(){e.activeHits(!1),e.activeContent(!0),e.activeHistory(!1)}}),Object(l.jsx)("button",{className:S.a.menu_link+" "+S.a.history,onClick:function(){e.activeHits(!1),e.activeContent(!1),e.activeHistory(!0)}})]})})})})},H=n(11),I=n.n(H),L=n.p+"static/media/load.a600eb7d.PNG",T=function(e){for(var t=[],n=0;n<10;n++)t.push({artist:"",title:"",img:L,views:"",hit:!1,url:n});var s=Object(i.useState)(t),a=Object(r.a)(s,2),c=a[0],o=a[1],u=Object(i.useState)(!1),h=Object(r.a)(u,2),j=h[0],_=h[1];Object(i.useEffect)((function(){m()}),[]);var m=function(){var e=Object(d.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rapapi.herokuapp.com/api/hits");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,_(!0),o(n.songs);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:I.a.content,children:[Object(l.jsx)("div",{className:I.a.title,children:"Hits"}),Object(l.jsx)("div",{className:I.a.inner,children:Object(l.jsx)("ol",{children:c.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)(N,{info:e,kind:"list",hits:"hits",mount:j},e.url)})}))})})]})},F=n(12),M=n.n(F),P=function(e){function t(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),i=0;i<n.length;i++){for(var s=n[i];" "===s.charAt(0);)s=s.substring(1);if(0===s.indexOf(t))return s.substring(t.length,s.length)}return""}var n=Object(i.useState)([]),s=Object(r.a)(n,2),a=s[0],c=s[1],o=Object(i.useState)(!1),u=Object(r.a)(o,2),h=u[0],j=u[1];Object(i.useEffect)((function(){_()}),[]);var _=function(){var e=Object(d.a)(b.a.mark((function e(){var n,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rapapi.herokuapp.com/api/history",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({token:t("token")})});case 2:return n=e.sent,e.next=5,n.json();case 5:i=e.sent,j(!0),c(i);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:M.a.history,children:[Object(l.jsx)("div",{className:M.a.title,children:"History"}),Object(l.jsx)("div",{className:M.a.inner,children:a.map((function(e){return Object(l.jsx)(N,{info:e,kind:"list",mount:h},e.url)}))})]})},A=n(9),J=n.n(A),q=function(e){return Object(l.jsx)("div",{className:J.a.menu,children:Object(l.jsxs)("div",{className:J.a.items,children:[Object(l.jsx)("button",{className:J.a.item,onClick:function(){e.activeHits(!0),e.activeContent(!1),e.activeHistory(!1)},children:"\u0425\u0438\u0442\u044b"}),Object(l.jsx)("button",{className:J.a.item,onClick:function(){e.activeHits(!1),e.activeContent(!0),e.activeHistory(!1)},children:"\u041f\u043e\u0438\u0441\u043a"}),Object(l.jsx)("button",{className:J.a.item,onClick:function(){e.activeHits(!1),e.activeContent(!1),e.activeHistory(!0)},children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"})]})})};var E=function(){fetch("https://rapapi.herokuapp.com/api/signup",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({token:function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),i=0;i<n.length;i++){for(var s=n[i];" "===s.charAt(0);)s=s.substring(1);if(0===s.indexOf(t))return s.substring(t.length,s.length)}return""}("token")})}).then((function(e){return e.json()})).then((function(e){return function(e,t,n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3);var s="expires="+i.toUTCString();document.cookie=e+"="+t+";"+s+";path=/"}("token",e.token,365)}));var e=Object(i.useState)(!0),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(i.useState)(!1),c=Object(r.a)(a,2),o=c[0],u=c[1],j=Object(i.useState)(!1),b=Object(r.a)(j,2),d=b[0],_=b[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(h,{}),Object(l.jsx)(q,{hits:n,content:o,history:d,activeHits:s,activeContent:u,activeHistory:_}),Object(l.jsxs)("div",{className:"container",children:[n?Object(l.jsx)(T,{}):Object(l.jsx)("div",{}),o?Object(l.jsx)(C,{}):Object(l.jsx)("div",{}),d?Object(l.jsx)(P,{}):Object(l.jsx)("div",{})]}),Object(l.jsx)(B,{hits:n,content:o,history:d,activeHits:s,activeContent:u,activeHistory:_})]})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),s(e),a(e),c(e)}))};c.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(E,{})}),document.getElementById("root")),G()}],[[25,1,2]]]);
//# sourceMappingURL=main.b1aaf6a7.chunk.js.map