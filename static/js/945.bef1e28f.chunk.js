"use strict";(self.webpackChunkacademy_app=self.webpackChunkacademy_app||[]).push([[945,993,613],{8993:(e,t,i)=>{i.r(t),i.d(t,{AllCoursesContainer:()=>f,CourseCard:()=>w,default:()=>j,mockCourses:()=>a});i(5043);var s=i(3039),o=i(5464),r=i(7630),n=i(2546),d=i(5475),l=i(1422),c=i(579);const a=[{id:0,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:1,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:2,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:3,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:0,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:1,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:2,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:3,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"}],h=o.Ay.div`
  width: 25%;
  min-width: 144px;

  ${(0,r.c)(90)}

  @media (max-width: ${l.u3}){
    width: 50%;
  }
`,x=o.Ay.div`
  width: 90%;
`,p=o.Ay.img`
  object-fit: cover;
  width: 100%;
  aspect-ratio: 89/100;
  ${(0,r.c)(45)}
  pointer-events: none;
`,m=o.Ay.a`
  display: block;
  text-transform: uppercase;
  ${(0,n.sl)(36,36,16)}
  color: ${e=>e.theme.colors.text};
  line-height: 1;
  width: 90%;
  font-weight: 600;
  ${(0,r.c)(24)}
`,u=o.Ay.a`
  display: block;
  ${(0,n.sl)(18,18,12)}
  color: ${e=>e.theme.colors.text};
  line-height: 1;
  width: 90%;
  ${(0,r.c)(45)}
  font-weight: 500;
`,g=(0,o.Ay)(d.N_)`
  display: block;
  ${(0,n.sl)(18,18,12)}
  color: ${e=>e.theme.colors.text};
  line-height: 1;
  width: 90%;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600; 
  
  ${n.oB}
`,w=e=>{let{course:t,containerStyle:i}=e;const{title:s,phrase:o,id:r,img:n}=t;return(0,c.jsx)(h,{style:i,children:(0,c.jsxs)(x,{children:[(0,c.jsx)(p,{src:n,alt:s}),(0,c.jsx)(m,{children:s}),(0,c.jsx)(u,{children:o}),(0,c.jsx)(g,{to:l.hb+"/"+r,children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438"})]})})},f=o.Ay.div`

  width: 102.5%;
  display: flex;
  ${(0,r.S)(90)}
  flex-wrap: wrap;

  @media (max-width: ${l.u3}){
    width: 105%;
  }
  
`;const j=function(){const e=a;return(0,c.jsx)(n.YW,{children:(0,c.jsxs)(n.BT,{children:[(0,c.jsx)(n.GH,{marginTop:90,children:"\u0412\u0441\u0435 \u043a\u0443\u0440\u0441\u044b"}),(0,c.jsx)(n.id,{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u043c\u0438\u0440 \u0410\u043a\u0430\u0434\u0435\u043c\u0438\u0438 \u0442\u0443\u0442 \u0441\u043d\u043e\u0432\u0430 \u0431\u0443\u0434\u0435\u0442 \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0435\u043a\u0441\u0442, \u043d\u043e \u043f\u043e\u043a\u0430 \u0447\u0442\u043e \u0442\u0430\u043a."}),(0,c.jsx)(f,{children:e.map((e=>(0,c.jsx)(w,{course:e})))})]})})}},6402:(e,t,i)=>{i.d(t,{A:()=>p});i(5043);var s=i(1422),o=i(5464),r=i(7630),n=i(2546),d=i(579);const l=o.Ay.div`
width: 50%;
display: flex;
align-items: center;
${e=>(0,r.c)(e.coursePageView?0:45)}

@media (max-width: ${s.Qh}){
    width: 100%;
}
`,c=o.AH`
    color: ${e=>e.theme.colors.text};
    text-transform: uppercase;
    line-height: 1;
`,a=o.Ay.a`
    display: block;
    ${e=>e.coursePageView?(0,n.sl)(36,24,16):(0,n.sl)(18,18,12)}
    ${e=>e.coursePageView&&"font-weight: 700"};
    ${c}
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
`,x=o.Ay.a`
    display: block;
    ${c}
    ${(0,n.sl)(14,14,12)}

`;const p=function(e){let{lessons:t,finishedLessons:i,coursePageView:s}=e;const o=Math.round(i/t*100);return(0,d.jsxs)(l,{coursePageView:s,children:[(0,d.jsx)(a,{coursePageView:s,children:`\u0423\u0440\u043e\u043a ${i}/${t}`}),(0,d.jsx)(h,{progress:o}),(0,d.jsx)(x,{children:`${o}%`})]})}},9250:(e,t,i)=>{i.d(t,{A:()=>$});i(5043);var s=i(5464),o=i(512),r=i(2546),n=i(8738),d=i(7630),l=i(3039),c=i(1422),a=i(5475),h=i(6402),x=i(4569),p=i(579);const m=[{id:0,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",totalLessons:10,finishedLessons:2,img:l},{id:1,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",totalLessons:10,finishedLessons:0,img:l}],u=s.Ay.div`
    width: 95%;   
`,g=s.Ay.a`
    display: block;
    color: ${e=>e.theme.colors.text};
    ${(0,r.sl)(64,36,16)}
    text-transform: uppercase;
    font-weight: 700;
    
    ${(0,d.c)(24)}
`,w=s.Ay.img`
    object-fit: cover;
    width: 91%;
    aspect-ratio: 18/10;
    pointer-events: none;
    ${(0,d.c)(45)}
`,f=(0,s.Ay)(a.N_)`
    display: block;
    text-decoration: none;
    width: fit-content;
    color: ${e=>e.theme.colors.text};
    ${(0,r.sl)(36,36,12)}
    text-transform: uppercase;
    font-weight: 600;
    line-height: 1;
    ${r.oB}
`,j=e=>{let{course:t}=e;const i=x.Ay.useBreakpoint(),s=(Math.round(t.finishedLessons/t.totalLessons*100),0===t.finishedLessons?"\u043d\u0430\u0447\u0430\u0442\u044c":"\u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c");return(0,p.jsxs)(u,{children:[(0,p.jsxs)("div",{style:{position:i.xs?"absolute":void 0,transform:i.xs?"translate(10%,15%)":void 0},children:[(0,p.jsx)(g,{children:t.title}),(0,p.jsx)(h.A,{lessons:t.totalLessons,finishedLessons:t.finishedLessons})]}),(0,p.jsx)(w,{alt:t.title,src:t.img}),(0,p.jsx)(f,{to:c.eE+"/"+t.id,children:`${s} \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u0435`})]})},y=s.Ay.div`

  position: relative;
  width: 105%;

${(0,d.S)(90)};

@media (max-width: ${c.u3}){
    width: 180%;
}

`;const $=function(){const e=m;return(0,p.jsx)(y,{children:(0,p.jsx)(o.A,{childrenLength:e.length,slidesToShow:2,infinite:n.Fr,children:e.map((e=>(0,p.jsx)(j,{course:e})))})})}},3358:(e,t,i)=>{i.r(t),i.d(t,{default:()=>T});i(5043);var s=i(2546),o=i(9250),r=i(1422),n=i(8993),d=i(3039),l=i(5464),c=i(512),a=i(8738),h=i(7630),x=i(4569),p=i(579);const m=[{id:0,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:d,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:1,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:d,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:2,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:d,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:3,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:d,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"}],u=l.Ay.div`
  width: 102.5%;
  ${(0,h.S)(90)}

  @media (max-width: ${r.u3}){
    width: 190%;
  }
`;const g=function(){x.Ay.useBreakpoint();const e=m,t=a.Fr&&e.length>2,i={width:t?"100%":void 0,marginBottom:0},s=e.map((e=>(0,p.jsx)(n.CourseCard,{containerStyle:i,course:e})));return(0,p.jsx)(p.Fragment,{children:t?(0,p.jsx)(u,{children:(0,p.jsx)(c.A,{childrenLength:e.length,slidesToShow:4,infinite:a.Fr,children:s})}):(0,p.jsx)(n.AllCoursesContainer,{children:s})})},w=i.p+"static/media/mockArticle.577b57e88f876219ab66.png";var f=i(5475);const j=l.Ay.div`
    width: 50%;
    display: flex;
    ${(0,h.c)(45)}
    align-items: end;
    justify-content: space-between;

    @media (max-width: ${r.Qh} ){
        width: 100%;
    }
`,y=l.Ay.img`
    object-fit: cover;
    width: 47%;
    aspect-ratio: 89/100;
`,$=l.Ay.div`
    width: 50%;
`,v=l.Ay.a`
    display: block;
    color: ${e=>e.theme.colors.text};
    ${(0,s.sl)(18,18,8)}
    ${(0,h.c)(24)}
`,A=l.Ay.a`
    display: block;
    color: ${e=>e.theme.colors.text};
    ${(0,s.sl)(24,24,16)}
    text-transform: uppercase;
    font-weight: 700;
    ${(0,h.c)(45)}
`,b=(0,l.Ay)(f.N_)`
display: block;
    text-decoration: none;
    text-transform: uppercase;
    color: ${e=>e.theme.colors.text};
    ${(0,s.sl)(18,18,12)}
    font-weight: 500;
    line-height: 1;
    ${s.oB}
`;function k(e){let{article:t}=e;const{id:i,title:s,date:o,img:n}=t;return(0,p.jsxs)(j,{children:[(0,p.jsx)(y,{src:n,alt:s}),(0,p.jsxs)($,{children:[(0,p.jsx)(v,{children:o}),(0,p.jsx)(A,{children:s}),(0,p.jsx)(b,{to:r.hh+"/"+i,children:"\u0427\u0438\u0442\u0430\u0442\u044c"})]})]})}const C=[{id:0,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2024",img:w},{id:1,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2024",img:w},{id:2,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2024",img:w},{id:3,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2024",img:w}],L=l.Ay.div`
    width: 100%;
    ${(0,h.S)(90)}
`;const S=function(){const e=C;return(0,p.jsx)(L,{children:e.map((e=>(0,p.jsx)(k,{article:e})))})};const T=function(){const e=x.Ay.useBreakpoint();return(0,p.jsxs)(s.YW,{children:[(0,p.jsxs)(s.BT,{children:[(0,p.jsx)(s.GH,{marginTop:90,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),(0,p.jsx)(o.A,{})]}),(0,p.jsxs)(s.BT,{children:[(0,p.jsx)(s.GH,{children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043a\u0443\u0440\u0441\u044b"}),(0,p.jsx)(s.id,{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u043c\u0438\u0440 \u0410\u043a\u0430\u0434\u0435\u043c\u0438\u0438 \u0442\u0443\u0442 \u0441\u043d\u043e\u0432\u0430 \u0431\u0443\u0434\u0435\u0442 \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0435\u043a\u0441\u0442, \u043d\u043e \u043f\u043e\u043a\u0430 \u0447\u0442\u043e \u0442\u0430\u043a."}),(0,p.jsx)(g,{}),(0,p.jsx)(s.t2,{isMobile:e.xs,children:(0,p.jsx)(s.CY,{to:r.hb,hover:!0,children:"\u0412\u0441\u0435 \u043a\u0443\u0440\u0441\u044b"})})]}),(0,p.jsxs)(s.BT,{children:[(0,p.jsx)(s.GH,{children:"\u041f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"}),(0,p.jsx)(S,{}),(0,p.jsx)(s.t2,{isMobile:e.xs,children:(0,p.jsx)(s.CY,{to:r.hh,hover:!0,children:"\u0412\u0441\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"})})]})]})}},512:(e,t,i)=>{i.d(t,{A:()=>p});var s=i(5043),o=i(2382),r=(i(4430),i(9078),i(5464)),n=i(1422),d=i(7109),l=i(579);const c=r.I4.div`
    position: relative;
    width: 100%;
`,a=(r.I4.div`
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
`,r.I4.div`
width: 87svw;
z-index: 1;
position: absolute;
top: 50%;
left: 0;
transform: translate(-5%,-50%);
display: flex;
justify-content: space-between;
pointer-events: none;

@media(max-width: ${n.u3}){
    width: 110%;
    
}

@media (max-width: ${n.Qh}) {
    width: 113%;
}
`,r.I4.div`
    width: 100%;
    display: flex;
    justify-content: center;

`),h=r.I4.div`
    width: 10px;
    aspect-ratio: 1/1;
    background-color: red;
    opacity: ${e=>{let{selected:t}=e;return t?"0.5":"1"}};
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 4px;
    margin-right: 4px;
    transition: opacity .3s ease-in-out;
`,x=(0,r.I4)(o.A)`
    
`;const p=function(e){let{children:t,slidesToShow:i,childrenLength:o,infinite:r,dots:n=!1}=e;const p=(0,s.useRef)(null),[m,u]=(0,s.useState)(0),g=null!==r&&void 0!==r?r:o>i,w={arrows:!1,slidesToScroll:1,infinite:g,dots:!1,slidesToShow:i,swipeToSlide:g,rows:1,beforeChange(e,t){u(t)}},f=(0,d.uh)({onSwipedLeft:()=>{var e;null===(e=p.current)||void 0===e||e.slickNext()},onSwipedRight:()=>{var e;null===(e=p.current)||void 0===e||e.slickPrev()}});return(0,l.jsxs)(c,{...f,children:[(0,l.jsx)(x,{ref:p,...w,children:t}),n&&(0,l.jsx)(a,{children:Array(o).fill(null).map(((e,t)=>(0,l.jsx)(h,{selected:m===t},t)))})]})}},3039:(e,t,i)=>{e.exports=i.p+"static/media/mockCourse.24dc3d84bcd89471ae6e.webp"}}]);
//# sourceMappingURL=945.bef1e28f.chunk.js.map