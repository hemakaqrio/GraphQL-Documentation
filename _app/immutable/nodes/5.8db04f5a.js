import{A as Q,C as P,w as b}from"../chunks/pages.f0374b2b.js";import{e as w}from"../chunks/index.3158323b.js";import{s as S,a as u,X as q,d as m,c as d,i as c}from"../chunks/scheduler.fe6add17.js";import{S as j,i as B,b as _,d as g,m as $,a as y,t as h,e as v}from"../chunks/index.20017960.js";import{F as C,Q as E}from"../chunks/FieldDetails.d75cf4a6.js";import{P as F}from"../chunks/CarbonMarkdown.e845b1c6.js";const N=Q(),O=({params:n,url:a})=>{const r=P(n.query),t=b(a.pathname);if(!r||!t)throw w(404,`Query ${n.query} not found.`);return{field:r,page:t}},U=Object.freeze(Object.defineProperty({__proto__:null,load:O,prerender:N},Symbol.toStringTag,{value:"Module"}));function T(n){let a,r,t,i,o,f;return document.title=a="Query - "+n[0].field.name,t=new C({props:{field:n[0].field,type:E.QUERY}}),o=new F({props:{page:n[0].page}}),{c(){r=u(),_(t.$$.fragment),i=u(),_(o.$$.fragment)},l(e){q("svelte-19yffit",document.head).forEach(m),r=d(e),g(t.$$.fragment,e),i=d(e),g(o.$$.fragment,e)},m(e,s){c(e,r,s),$(t,e,s),c(e,i,s),$(o,e,s),f=!0},p(e,[s]){(!f||s&1)&&a!==(a="Query - "+e[0].field.name)&&(document.title=a);const l={};s&1&&(l.field=e[0].field),t.$set(l);const p={};s&1&&(p.page=e[0].page),o.$set(p)},i(e){f||(y(t.$$.fragment,e),y(o.$$.fragment,e),f=!0)},o(e){h(t.$$.fragment,e),h(o.$$.fragment,e),f=!1},d(e){e&&(m(r),m(i)),v(t,e),v(o,e)}}}function x(n,a,r){let{data:t}=a;return n.$$set=i=>{"data"in i&&r(0,t=i.data)},[t]}class X extends j{constructor(a){super(),B(this,a,x,T,S,{data:0})}}export{X as component,U as universal};
