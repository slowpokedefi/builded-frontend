(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[13],{780:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return le}));var c,r,a,i,s,o,j,b,u,l,O,d,p=n(56),f=n(0),x=n(3),h=n(40),g=n(187),m=n(191),v=n(4),w=n.n(v),S=n(15),k=n(21),z=n(74),y=n(12),B=n.n(y),E=n(755),L=n(17),F=n(34),W=n(42),N=n(80),R=n(754),T=n(134),C=function(){var e=Object(f.useState)([]),t=Object(k.a)(e,2),n=t[0],c=t[1],r=Object(z.m)().account,a=Object(T.a)().fastRefresh;return Object(f.useEffect)((function(){r&&function(){var e=Object(S.a)(w.a.mark((function e(){var t,n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=R.a.map((function(e){return{address:Object(W.d)(),name:"pendingEgg",params:[e.pid,r]}})),e.next=3,Object(F.a)(N,t);case 3:n=e.sent,a=R.a.map((function(e,t){return Object(L.a)(Object(L.a)({},e),{},{balance:new B.a(n[t])})})),c(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,a]),n},A=n(756),H=n(765),$=n(11),D=function(e){var t=e.value,n=e.decimals,c=e.fontSize,r=void 0===c?"40px":c,a=e.prefix,i=Object(H.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),s=i.countUp,o=i.update,j=Object(f.useRef)(o);return Object(f.useEffect)((function(){j.current(t)}),[t,j]),Object($.jsxs)(h.B,{bold:!0,fontSize:r,color:"rgb(241, 149, 169)",children:[a,s]})},M=function(e){var t=e.earningsSum,n=Object(g.a)();return Object(z.m)().account?Object($.jsx)(D,{value:t}):Object($.jsx)(h.B,{color:"textDisabled",style:{lineHeight:"60px"},children:n(298,"Locked")})},P=function(e){var t=e.cakeBalance,n=Object(g.a)();return Object(z.m)().account?Object($.jsx)(D,{value:t,fontSize:"24px"}):Object($.jsx)(h.B,{color:"textDisabled",style:{lineHeight:"36px"},children:n(298,"Locked")})},Q=n(113),_=n(297),J=n(91),U=n(757),V=function(e){var t=Object(f.useState)(new B.a(0)),n=Object(k.a)(t,2),c=n[0],r=n[1],a=Object(z.m)(),i=a.account,s=a.ethereum,o=Object(T.a)().fastRefresh;return Object(f.useEffect)((function(){i&&s&&function(){var t=Object(S.a)(w.a.mark((function t(){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(U.b)(s,e,i);case 2:n=t.sent,r(new B.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[i,s,e,o]),c},q=function(){var e=Object(f.useState)([]),t=Object(k.a)(e,2),n=t[0],c=t[1],r=Object(z.m)().account,a=Object(T.a)().fastRefresh;return Object(f.useEffect)((function(){r&&function(){var e=Object(S.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=R.a.map((function(e){return{address:Object(W.d)(),name:"pendingEgg",params:[e.pid,r]}})),e.next=3,Object(F.a)(N,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,a]),n},G=n(745),I=Object(x.e)(h.h)(c||(c=Object(p.a)(["\n  background-image: url('/images/egg/slowpoke_sprite_3.png');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),K=x.e.div(r||(r=Object(p.a)(["\n  margin-bottom: 16px;\n"]))),X=x.e.img(a||(a=Object(p.a)(["\n  margin-bottom: 16px;\n"]))),Y=x.e.div(i||(i=Object(p.a)(["\n  color: rgb(241, 149, 169);\n  font-size: 14px;\n"]))),Z=x.e.div(s||(s=Object(p.a)(["\n  margin-top: 24px;\n"]))),ee=function(){var e=Object(f.useState)(!1),t=Object(k.a)(e,2),n=t[0],c=t[1],r=Object(z.m)().account,a=Object(g.a)(),i=C(),s=Object(G.a)(V(Object(W.a)())),o=Object(Q.f)().toNumber(),j=q().reduce((function(e,t){return e+new B.a(t).div(new B.a(10).pow(18)).toNumber()}),0),b=i.filter((function(e){return e.balance.toNumber()>0})),u=Object(E.a)(b.map((function(e){return e.pid}))).onReward,l=Object(f.useCallback)(Object(S.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,u();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,c(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[u]);return Object($.jsx)(I,{children:Object($.jsxs)(h.i,{children:[Object($.jsx)(h.n,{size:"xl",mb:"24px",color:"rgb(241, 149, 169)",children:a(542,"Farms & Staking")}),Object($.jsx)(X,{src:"/images/egg/slowpoke_sprite.png",alt:"slow logo",width:64,height:64}),Object($.jsxs)(K,{children:[Object($.jsx)(Y,{children:a(544,"SLOW to Harvest")}),Object($.jsx)(M,{earningsSum:j}),Object($.jsxs)(Y,{children:["~$",(o*j).toFixed(2)]})]}),Object($.jsxs)(K,{children:[Object($.jsx)(Y,{children:a(546,"SLOW in Wallet")}),Object($.jsx)(P,{cakeBalance:s}),Object($.jsxs)(Y,{children:["~$",(o*s).toFixed(2)]})]}),Object($.jsx)(Z,{children:r?Object($.jsx)(h.d,{id:"harvest-all",disabled:b.length<=0||n,onClick:l,fullWidth:!0,children:n?a(548,"Collecting SLOW"):a(999,"Harvest all (".concat(b.length,")"))}):Object($.jsx)(A.a,{fullWidth:!0,color:"red"})})]})})},te=n(752),ne=Object(x.e)(h.h)(o||(o=Object(p.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),ce=x.e.div(j||(j=Object(p.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),re=function(){var e=Object(g.a)(),t=function(){var e=Object(T.a)().slowRefresh,t=Object(f.useState)(),n=Object(k.a)(t,2),c=n[0],r=n[1];return Object(f.useEffect)((function(){function e(){return(e=Object(S.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(J.a)(_,Object(W.a)()),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,r(new B.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c}(),n=function(e){var t=Object(f.useState)(new B.a(0)),n=Object(k.a)(t,2),c=n[0],r=n[1],a=Object(T.a)().slowRefresh;return Object(f.useEffect)((function(){!function(){var e=Object(S.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(J.a)(_,Object(W.a)()),e.next=3,t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:n=e.sent,r(new B.a(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[e,a]),c}(Object(W.a)()),c=Object(Q.c)(),r=Object(Q.f)(),a=t?t.minus(n):new te.a(0),i=Object(G.a)(a),s=r.times(a),o=0;return c&&c[0]&&c[0].eggPerBlock&&(o=new te.a(c[0].eggPerBlock).div(new te.a(10).pow(18)).toNumber()),Object($.jsx)(ne,{children:Object($.jsxs)(h.i,{children:[Object($.jsx)(h.n,{size:"xl",mb:"24px",color:"rgb(241, 149, 169)",children:e(534,"SLOW Stats")}),Object($.jsxs)(ce,{children:[Object($.jsx)(h.B,{fontSize:"14px",color:"rgb(241, 149, 169)",children:e(10005,"Market Cap")}),Object($.jsx)(D,{fontSize:"14px",value:Object(G.a)(s),decimals:0,prefix:"$"})]}),Object($.jsxs)(ce,{children:[Object($.jsx)(h.B,{fontSize:"14px",color:"rgb(241, 149, 169)",children:e(536,"Total Minted")}),t&&Object($.jsx)(D,{fontSize:"14px",value:Object(G.a)(t),decimals:0})]}),Object($.jsxs)(ce,{children:[Object($.jsx)(h.B,{fontSize:"14px",color:"rgb(241, 149, 169)",children:e(538,"Total Burned")}),Object($.jsx)(D,{fontSize:"14px",value:Object(G.a)(n),decimals:0})]}),Object($.jsxs)(ce,{children:[Object($.jsx)(h.B,{fontSize:"14px",color:"rgb(241, 149, 169)",children:e(10004,"Circulating Supply")}),i&&Object($.jsx)(D,{fontSize:"14px",value:i,decimals:0})]}),Object($.jsxs)(ce,{children:[Object($.jsx)(h.B,{fontSize:"14px",color:"rgb(241, 149, 169)",children:e(540,"New SLOW/block")}),Object($.jsx)(h.B,{bold:!0,fontSize:"14px",color:"rgb(241, 149, 169)",children:o})]})]})})},ae=Object(x.e)(h.h)(b||(b=Object(p.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),ie=function(){var e=Object(g.a)(),t=Object(Q.g)();return Object($.jsx)(ae,{children:Object($.jsxs)(h.i,{children:[Object($.jsx)(h.n,{size:"lg",mb:"24px",color:"rgb(241, 149, 169)",children:e(999,"Total Value Locked (TVL)")}),Object($.jsxs)($.Fragment,{children:[Object($.jsx)(D,{value:t.toNumber(),prefix:"$",decimals:2}),Object($.jsx)(h.B,{color:"rgb(241, 149, 169)",children:e(999,"Across all Farms and Pools")})]})]})})},se=n(777),oe=Object(x.e)(h.h)(u||(u=Object(p.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),je=(x.e.div(l||(l=Object(p.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),function(){var e=Object(g.a)();return Object($.jsx)(oe,{children:Object($.jsxs)(h.i,{children:[Object($.jsx)(h.n,{size:"xl",mb:"24px",color:"rgb(241, 149, 169)",children:e(10003,"Announcements")}),Object($.jsx)(se.a,{dataSource:{sourceType:"profile",screenName:"SlowpokeToken"},options:{height:"300",chrome:"noheader, nofooter",width:"400"}})]})})}),be=x.e.div(O||(O=Object(p.a)(["\n  align-items: center;\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),ue=Object(x.e)(h.b)(d||(d=Object(p.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),le=function(){var e=Object(g.a)();return Object($.jsxs)(m.a,{children:[Object($.jsxs)(be,{children:[Object($.jsx)(h.n,{as:"h1",size:"xl",mb:"24px",color:"rgb(241, 149, 169)",children:e(576,"To the Moon")}),Object($.jsx)(h.B,{color:"rgb(241, 149, 169)",children:e(578,"Best FAFAFA in town.")})]}),Object($.jsx)("div",{children:Object($.jsxs)(ue,{children:[Object($.jsx)(ee,{}),Object($.jsx)(je,{}),Object($.jsx)(re,{}),Object($.jsx)(ie,{})]})})]})}}}]);
//# sourceMappingURL=13.a7cbd417.chunk.js.map