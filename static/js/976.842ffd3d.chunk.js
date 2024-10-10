"use strict";(self.webpackChunkacademy_app=self.webpackChunkacademy_app||[]).push([[976,613],{6402:(e,t,r)=>{r.d(t,{A:()=>p});r(5043);var i=r(1422),n=r(5464),o=r(7630),s=r(2546),c=r(579);const l=n.Ay.div`
width: 50%;
display: flex;
align-items: center;
${e=>(0,o.c)(e.coursePageView?0:45)}

@media (max-width: ${i.u3}){
    width: 100%;
}
`,a=n.AH`
    color: ${e=>e.theme.colors.text};
    text-transform: uppercase;
    line-height: 1;
`,d=n.Ay.a`
    display: block;
    ${e=>e.coursePageView?(0,s.sl)(36,24,16):(0,s.sl)(18,18,12)}
    ${e=>e.coursePageView&&"font-weight: 700"};
    ${a}
`,u=n.Ay.div`
    height: 6px;
    flex-grow: 1;
    min-width: 60px;
    background-color: ${e=>e.theme.colors.text};
    border-radius: 10px;
    margin-left: 6%;
    margin-right: 1%;
    &::after{
        display: block;
        content: '';
        height: 100%;
        width: ${e=>e.progress+"%"};
        background-color: ${e=>e.theme.colors.progress};
        border-radius: inherit;
    }

    @media (max-width: ${i.Qh}){
        height: 3px;
    }
`,h=n.Ay.a`
    display: block;
    ${a}
    ${(0,s.sl)(14,14,12)}

`;const p=function(e){let{lessons:t,finishedLessons:r,coursePageView:i}=e;const n=Math.round(r/t*100);return(0,c.jsxs)(l,{coursePageView:i,children:[(0,c.jsx)(d,{coursePageView:i,children:`\u0423\u0440\u043e\u043a ${r}/${t}`}),(0,c.jsx)(u,{progress:n}),(0,c.jsx)(h,{children:`${n}%`})]})}},4678:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});r(5043);var i=r(9250),n=r(2546),o=r(579);const s=function(){return(0,o.jsx)(n.YW,{children:(0,o.jsxs)(n.BT,{children:[(0,o.jsx)(n.GH,{marginTop:90,children:"\u041c\u043e\u0438 \u043a\u0443\u0440\u0441\u044b"}),(0,o.jsx)(i.A,{})]})})}},9250:(e,t,r)=>{r.d(t,{A:()=>w});r(5043);var i=r(5464),n=r(512),o=r(2546),s=r(8738),c=r(7630),l=r(3039),a=r(1422),d=r(5475),u=r(6402),h=r(579);const p=[{id:0,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",totalLessons:10,finishedLessons:2,img:l},{id:1,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",totalLessons:10,finishedLessons:0,img:l}],f=i.Ay.div`
    width: 100%;   
`,m=i.Ay.a`
    display: block;
    color: ${e=>e.theme.colors.text};
    ${(0,o.sl)(64,36,16)}
    text-transform: uppercase;
    font-weight: 800;
    
    ${(0,c.c)(24)}
`,v=i.Ay.img`
    object-fit: cover;
    width: 91%;
    aspect-ratio: 18/10;
    pointer-events: none;
    ${(0,c.c)(45)}
`,x=(0,i.Ay)(d.N_)`
display: block;
    text-decoration: none;
    color: ${e=>e.theme.colors.text};
    ${(0,o.sl)(36,36,12)}
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1;
`,y=e=>{let{course:t}=e;Math.round(t.finishedLessons/t.totalLessons*100);const r=0===t.finishedLessons?"\u043d\u0430\u0447\u0430\u0442\u044c":"\u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c";return(0,h.jsxs)(f,{children:[(0,h.jsxs)("div",{style:{position:s.Fr?"absolute":void 0,transform:s.Fr?"translate(10%,15%)":void 0},children:[(0,h.jsx)(m,{children:t.title}),(0,h.jsx)(u.A,{lessons:t.totalLessons,finishedLessons:t.finishedLessons})]}),(0,h.jsx)(v,{alt:t.title,src:t.img}),(0,h.jsx)(x,{to:a.eE+"/"+t.id,children:`${r} \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u0435`})]})},g=i.Ay.div`

  position: relative;
  width: 105%;

${(0,c.S)(90)};

@media (max-width: ${a.u3}){
    width: 180%;
}

`;const w=function(){const e=p;return(0,h.jsx)(g,{children:(0,h.jsx)(n.A,{childrenLength:e.length,slidesToShow:2,infinite:s.Fr,children:e.map((e=>(0,h.jsx)(y,{course:e})))})})}},512:(e,t,r)=>{r.d(t,{A:()=>v});var i=r(5043),n=r(2382),o=(r(4430),r(9078),r(5464)),s=r(7196),c=r(1422),l=r(8738),a=r(7109),d=r(579),u=function(e){return e[e.prev=0]="prev",e[e.next=1]="next",e}(u||{});const h=o.I4.div`
    position: relative;
    width: 100%;
`,p=o.I4.div`
width: fit-content;
height: fit-content;
color: #c9c9c9;
opacity: 0.5;
transition: opacity .1s ease-in-out;
pointer-events: auto;
cursor: pointer;
font-size: 64px;
&:hover{
    opacity: 0.9;
}
`,f=o.I4.div`
width: 87svw;
z-index: 1;
position: absolute;
top: 50%;
left: 0;
transform: translate(-5%,-50%);
display: flex;
justify-content: space-between;
pointer-events: none;

@media(max-width: ${c.u3}){
    width: 110%;
    
}

@media (max-width: ${c.Qh}) {
    width: 113%;
}
`,m=(o.I4.div`
    width: 100%;
    display: flex;
    justify-content: center;

`,o.I4.div`
    width: 10px;
    aspect-ratio: 1/1;
    background-color: red;
    opacity: ${e=>{let{selected:t}=e;return t?"0.5":"1"}};
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 4px;
    margin-right: 4px;
    transition: opacity .3s ease-in-out;
`,(0,o.I4)(n.A)`
    
`);const v=function(e){let{children:t,slidesToShow:r,childrenLength:n,infinite:o}=e;const c=(0,i.useRef)(null),[v,x]=(0,i.useState)(0),y=null!==o&&void 0!==o?o:n>r,g={arrows:!1,slidesToScroll:1,infinite:y,dots:!1,slidesToShow:r,swipeToSlide:y,rows:1,beforeChange(e,t){x(t)}},w=()=>{var e;null===(e=c.current)||void 0===e||e.slickNext()},b=()=>{var e;null===(e=c.current)||void 0===e||e.slickPrev()},j=(0,a.uh)({onSwipedLeft:w,onSwipedRight:b});return(0,d.jsxs)(h,{...j,children:[y&&l.xl&&(0,d.jsxs)(f,{children:[(0,d.jsx)(p,{type:u.prev,onClick:b,children:(0,d.jsx)(s.WZN,{})}),(0,d.jsx)(p,{type:u.next,onClick:w,children:(0,d.jsx)(s.pjv,{})})]}),(0,d.jsx)(m,{ref:c,...g,children:t})]})}},3039:(e,t,r)=>{e.exports=r.p+"static/media/mockCourse.24dc3d84bcd89471ae6e.webp"},3441:(e,t,r)=>{r.d(t,{k5:()=>p});var i=r(5043),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=i.createContext&&i.createContext(n),s=["attr","size","title"];function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(t.indexOf(i)>=0)continue;r[i]=e[i]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},l.apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){return e&&e.map(((e,t)=>i.createElement(e.tag,d({key:t},e.attr),h(e.child))))}function p(e){return t=>i.createElement(f,l({attr:d({},e.attr)},t),h(e.child))}function f(e){var t=t=>{var r,{attr:n,size:o,title:a}=e,u=c(e,s),h=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),i.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,u,{className:r,style:d(d({color:e.color||t.color},t.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),a&&i.createElement("title",null,a),e.children)};return void 0!==o?i.createElement(o.Consumer,null,(e=>t(e))):t(n)}}}]);
//# sourceMappingURL=976.842ffd3d.chunk.js.map