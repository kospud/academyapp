"use strict";(self.webpackChunkacademy_app=self.webpackChunkacademy_app||[]).push([[946,613],{6402:(e,t,i)=>{i.d(t,{A:()=>u});i(5043);var s=i(1422),o=i(5464),n=i(7630),r=i(2546),d=i(579);const c=o.Ay.div`
width: 50%;
display: flex;
align-items: center;
${e=>(0,n.c)(e.coursePageView?0:45)}

@media (max-width: ${s.Qh}){
    width: 100%;
}
`,l=o.AH`
    color: ${e=>e.theme.colors.text};
    text-transform: uppercase;
    line-height: 1;
`,a=o.Ay.a`
    display: block;
    ${e=>e.coursePageView?(0,r.sl)(36,24,16):(0,r.sl)(18,18,12)}
    ${e=>e.coursePageView&&"font-weight: 700"};
    ${l}
`,h=o.Ay.div`
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

    @media (max-width: ${s.Qh}){
        height: 3px;
    }
`,p=o.Ay.a`
    display: block;
    ${l}
    ${(0,r.sl)(14,14,12)}

`;const u=function(e){let{lessons:t,finishedLessons:i,coursePageView:s}=e;const o=Math.round(i/t*100);return(0,d.jsxs)(c,{coursePageView:s,children:[(0,d.jsx)(a,{coursePageView:s,children:`\u0423\u0440\u043e\u043a ${i}/${t}`}),(0,d.jsx)(h,{progress:o}),(0,d.jsx)(p,{children:`${o}%`})]})}},4678:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r});i(5043);var s=i(9250),o=i(2546),n=i(579);const r=function(){return(0,n.jsx)(o.YW,{children:(0,n.jsxs)(o.BT,{children:[(0,n.jsx)(o.GH,{marginTop:90,children:"\u041c\u043e\u0438 \u043a\u0443\u0440\u0441\u044b"}),(0,n.jsx)(s.A,{})]})})}},9250:(e,t,i)=>{i.d(t,{A:()=>$});i(5043);var s=i(5464),o=i(512),n=i(2546),r=i(8738),d=i(7630),c=i(3039),l=i(1422),a=i(5475),h=i(6402),p=i(4569),u=i(579);const x=[{id:0,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",totalLessons:10,finishedLessons:2,img:c},{id:1,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",totalLessons:10,finishedLessons:0,img:c}],f=s.Ay.div`
    width: 95%;   
`,w=s.Ay.a`
    display: block;
    color: ${e=>e.theme.colors.text};
    ${(0,n.sl)(64,36,16)}
    text-transform: uppercase;
    font-weight: 700;
    
    ${(0,d.c)(24)}
`,g=s.Ay.img`
    object-fit: cover;
    width: 91%;
    aspect-ratio: 18/10;
    pointer-events: none;
    ${(0,d.c)(45)}
`,m=(0,s.Ay)(a.N_)`
    display: block;
    text-decoration: none;
    width: fit-content;
    color: ${e=>e.theme.colors.text};
    ${(0,n.sl)(36,36,12)}
    text-transform: uppercase;
    font-weight: 600;
    line-height: 1;
    ${n.oB}
`,v=e=>{let{course:t}=e;const i=p.Ay.useBreakpoint(),s=(Math.round(t.finishedLessons/t.totalLessons*100),0===t.finishedLessons?"\u043d\u0430\u0447\u0430\u0442\u044c":"\u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c");return(0,u.jsxs)(f,{children:[(0,u.jsxs)("div",{style:{position:i.xs?"absolute":void 0,transform:i.xs?"translate(10%,15%)":void 0},children:[(0,u.jsx)(w,{children:t.title}),(0,u.jsx)(h.A,{lessons:t.totalLessons,finishedLessons:t.finishedLessons})]}),(0,u.jsx)(g,{alt:t.title,src:t.img}),(0,u.jsx)(m,{to:l.eE+"/"+t.id,children:`${s} \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u0435`})]})},y=s.Ay.div`

  position: relative;
  width: 105%;

${(0,d.S)(90)};

@media (max-width: ${l.u3}){
    width: 180%;
}

`;const $=function(){const e=x;return(0,u.jsx)(y,{children:(0,u.jsx)(o.A,{childrenLength:e.length,slidesToShow:2,infinite:r.Fr,children:e.map((e=>(0,u.jsx)(v,{course:e})))})})}},512:(e,t,i)=>{i.d(t,{A:()=>u});var s=i(5043),o=i(2382),n=(i(4430),i(9078),i(5464)),r=i(1422),d=i(7109),c=i(579);const l=n.I4.div`
    position: relative;
    width: 100%;
`,a=(n.I4.div`
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
`,n.I4.div`
width: 87svw;
z-index: 1;
position: absolute;
top: 50%;
left: 0;
transform: translate(-5%,-50%);
display: flex;
justify-content: space-between;
pointer-events: none;

@media(max-width: ${r.u3}){
    width: 110%;
    
}

@media (max-width: ${r.Qh}) {
    width: 113%;
}
`,n.I4.div`
    width: 100%;
    display: flex;
    justify-content: center;

`),h=n.I4.div`
    width: 10px;
    aspect-ratio: 1/1;
    background-color: red;
    opacity: ${e=>{let{selected:t}=e;return t?"0.5":"1"}};
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 4px;
    margin-right: 4px;
    transition: opacity .3s ease-in-out;
`,p=(0,n.I4)(o.A)`
    
`;const u=function(e){let{children:t,slidesToShow:i,childrenLength:o,infinite:n,dots:r=!1}=e;const u=(0,s.useRef)(null),[x,f]=(0,s.useState)(0),w=null!==n&&void 0!==n?n:o>i,g={arrows:!1,slidesToScroll:1,infinite:w,dots:!1,slidesToShow:i,swipeToSlide:w,rows:1,beforeChange(e,t){f(t)}},m=(0,d.uh)({onSwipedLeft:()=>{var e;null===(e=u.current)||void 0===e||e.slickNext()},onSwipedRight:()=>{var e;null===(e=u.current)||void 0===e||e.slickPrev()}});return(0,c.jsxs)(l,{...m,children:[(0,c.jsx)(p,{ref:u,...g,children:t}),r&&(0,c.jsx)(a,{children:Array(o).fill(null).map(((e,t)=>(0,c.jsx)(h,{selected:x===t},t)))})]})}},3039:(e,t,i)=>{e.exports=i.p+"static/media/mockCourse.24dc3d84bcd89471ae6e.webp"}}]);
//# sourceMappingURL=946.4865a9d0.chunk.js.map