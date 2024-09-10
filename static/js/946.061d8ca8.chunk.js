"use strict";(self.webpackChunkacademy_app=self.webpackChunkacademy_app||[]).push([[946],{4678:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r});i(5043);var s=i(9250),n=i(2546),o=i(579);const r=function(){return(0,o.jsx)(n.YW,{children:(0,o.jsxs)(n.BT,{children:[(0,o.jsx)(n.GH,{marginTop:90,children:"\u041c\u043e\u0438 \u043a\u0443\u0440\u0441\u044b"}),(0,o.jsx)(s.A,{})]})})}},9250:(e,t,i)=>{i.d(t,{A:()=>$});i(5043);var s=i(5464),n=i(512),o=i(2546),r=i(8738),d=i(7630),c=i(3039),l=i(1422),a=i(5475),h=i(579);const p=[{id:0,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",totalLessons:10,finishedLessons:2,img:c},{id:1,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",totalLessons:10,finishedLessons:0,img:c}],x=s.Ay.div`
    width: 100%;   
`,u=s.Ay.a`
    display: block;
    color: ${e=>e.theme.colors.text};
    ${(0,o.sl)(64,36,16)}
    text-transform: uppercase;
    font-weight: 800;
    line-height: 1;
    ${(0,d.c)(24)}
`,f=s.Ay.div`
width: 100%;
display: flex;
align-items: center;
${(0,d.c)(45)}
`,m=s.Ay.a`
    display: block;
    color: ${e=>e.theme.colors.text};
    ${(0,o.sl)(18,18,12)}
    text-transform: uppercase;
    line-height: 1;
`,w=s.Ay.div`
    height: 6px;
    width: 18%;
    min-width: 60px;
    background-color: ${e=>e.theme.colors.text};
    border-radius: 10px;
    margin-left: 3%;
    margin-right: 1%;
    &::after{
        display: block;
        content: '';
        height: 100%;
        width: ${e=>e.progress+"%"};
        background-color: ${e=>e.theme.colors.progress};
        border-radius: inherit;
    }

    @media (max-width: ${l.Qh}){
        height: 3px;
    }
`,g=s.Ay.img`
    object-fit: cover;
    width: 91%;
    aspect-ratio: 18/10;
    pointer-events: none;
    ${(0,d.c)(45)}
`,v=(0,s.Ay)(a.N_)`
display: block;
    text-decoration: none;
    color: ${e=>e.theme.colors.text};
    ${(0,o.sl)(36,36,12)}
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1;
`,j=e=>{let{course:t}=e;const i=Math.round(t.finishedLessons/t.totalLessons*100),s=0===t.finishedLessons?"\u043d\u0430\u0447\u0430\u0442\u044c":"\u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c";return(0,h.jsxs)(x,{children:[(0,h.jsxs)("div",{style:{position:r.Fr?"absolute":void 0,transform:r.Fr?"translate(5%,10%)":void 0},children:[(0,h.jsx)(u,{children:t.title}),(0,h.jsxs)(f,{children:[(0,h.jsx)(m,{children:`\u0423\u0440\u043e\u043a ${t.finishedLessons}/${t.totalLessons}`}),(0,h.jsx)(w,{progress:i}),(0,h.jsx)(m,{children:`${i}%`})]})]}),(0,h.jsx)(g,{alt:t.title,src:t.img}),(0,h.jsx)(v,{to:"/courses/"+t.id,children:`${s} \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u0435`})]})},y=s.Ay.div`

  position: relative;
  width: 105%;

${(0,d.S)(90)};

@media (max-width: ${l.u3}){
    width: 180%;
}

`;const $=function(){const e=p;return(0,h.jsx)(y,{children:(0,h.jsx)(n.A,{childrenLength:e.length,slidesToShow:2,infinite:r.Fr,children:e.map((e=>(0,h.jsx)(j,{course:e})))})})}},512:(e,t,i)=>{i.d(t,{A:()=>m});var s=i(5043),n=i(2382),o=(i(4430),i(9078),i(5464)),r=i(7196),d=i(1422),c=i(8738),l=i(7109),a=i(579),h=function(e){return e[e.prev=0]="prev",e[e.next=1]="next",e}(h||{});const p=o.I4.div`
    position: relative;
    width: 100%;
`,x=o.I4.div`
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
`,u=o.I4.div`
width: 87svw;
z-index: 1;
position: absolute;
top: 50%;
left: 0;
transform: translate(-5%,-50%);
display: flex;
justify-content: space-between;
pointer-events: none;

@media(max-width: ${d.u3}){
    width: 110%;
    
}

@media (max-width: ${d.Qh}) {
    width: 113%;
}
`,f=(o.I4.div`
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
    
`);const m=function(e){let{children:t,slidesToShow:i,childrenLength:n,infinite:o}=e;const d=(0,s.useRef)(null),[m,w]=(0,s.useState)(0),g=null!==o&&void 0!==o?o:n>i,v={arrows:!1,slidesToScroll:1,infinite:g,dots:!1,slidesToShow:i,swipeToSlide:g,rows:1,beforeChange(e,t){w(t)}},j=()=>{var e;null===(e=d.current)||void 0===e||e.slickNext()},y=()=>{var e;null===(e=d.current)||void 0===e||e.slickPrev()},$=(0,l.uh)({onSwipedLeft:j,onSwipedRight:y});return(0,a.jsxs)(p,{...$,children:[g&&c.xl&&(0,a.jsxs)(u,{children:[(0,a.jsx)(x,{type:h.prev,onClick:y,children:(0,a.jsx)(r.WZN,{})}),(0,a.jsx)(x,{type:h.next,onClick:j,children:(0,a.jsx)(r.pjv,{})})]}),(0,a.jsx)(f,{ref:d,...v,children:t})]})}},3039:(e,t,i)=>{e.exports=i.p+"static/media/mockCourse.24dc3d84bcd89471ae6e.webp"}}]);
//# sourceMappingURL=946.061d8ca8.chunk.js.map