"use strict";(self.webpackChunkacademy_app=self.webpackChunkacademy_app||[]).push([[633,993,613],{8993:(e,t,i)=>{i.r(t),i.d(t,{AllCoursesContainer:()=>w,CourseCard:()=>g,default:()=>y,mockCourses:()=>d});i(5043);var r=i(3039),n=i(5464),s=i(7630),o=i(2546),l=i(5475),c=i(1422),a=i(579);const d=[{id:0,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:r,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:1,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:r,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:2,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:r,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:3,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:r,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:0,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:r,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:1,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:r,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:2,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:r,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:3,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:r,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"}],h=n.Ay.div`
  width: 25%;
  min-width: 144px;

  ${(0,s.c)(90)}

  @media (max-width: ${c.u3}){
    width: 50%;
  }
`,p=n.Ay.div`
  width: 90%;
`,u=n.Ay.img`
  object-fit: cover;
  width: 100%;
  aspect-ratio: 89/100;
  ${(0,s.c)(45)}
  pointer-events: none;
`,x=n.Ay.a`
  display: block;
  text-transform: uppercase;
  ${(0,o.sl)(36,36,16)}
  color: ${e=>e.theme.colors.text};
  line-height: 1;
  width: 90%;
  font-weight: 600;
  ${(0,s.c)(24)}
`,m=n.Ay.a`
  display: block;
  ${(0,o.sl)(18,18,12)}
  color: ${e=>e.theme.colors.text};
  line-height: 1;
  width: 90%;
  ${(0,s.c)(45)}
  font-weight: 500;
`,f=(0,n.Ay)(l.N_)`
  display: block;
  ${(0,o.sl)(18,18,12)}
  color: ${e=>e.theme.colors.text};
  line-height: 1;
  width: 90%;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600; 
  
  ${o.oB}
`,g=e=>{let{course:t,containerStyle:i}=e;const{title:r,phrase:n,id:s,img:o}=t;return(0,a.jsx)(h,{style:i,children:(0,a.jsxs)(p,{children:[(0,a.jsx)(u,{src:o,alt:r}),(0,a.jsx)(x,{children:r}),(0,a.jsx)(m,{children:n}),(0,a.jsx)(f,{to:c.hb+"/"+s,children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438"})]})})},w=n.Ay.div`

  width: 102.5%;
  display: flex;
  ${(0,s.S)(90)}
  flex-wrap: wrap;

  @media (max-width: ${c.u3}){
    width: 105%;
  }
  
`;const y=function(){const e=d;return(0,a.jsx)(o.YW,{children:(0,a.jsxs)(o.BT,{children:[(0,a.jsx)(o.GH,{marginTop:90,children:"\u0412\u0441\u0435 \u043a\u0443\u0440\u0441\u044b"}),(0,a.jsx)(o.id,{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u043c\u0438\u0440 \u0410\u043a\u0430\u0434\u0435\u043c\u0438\u0438 \u0442\u0443\u0442 \u0441\u043d\u043e\u0432\u0430 \u0431\u0443\u0434\u0435\u0442 \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0435\u043a\u0441\u0442, \u043d\u043e \u043f\u043e\u043a\u0430 \u0447\u0442\u043e \u0442\u0430\u043a."}),(0,a.jsx)(w,{children:e.map((e=>(0,a.jsx)(g,{course:e})))})]})})}},6402:(e,t,i)=>{i.d(t,{A:()=>u});i(5043);var r=i(1422),n=i(5464),s=i(7630),o=i(2546),l=i(579);const c=n.Ay.div`
width: 50%;
display: flex;
align-items: center;
${e=>(0,s.c)(e.coursePageView?0:45)}

@media (max-width: ${r.Qh}){
    width: 100%;
}
`,a=n.AH`
    color: ${e=>e.theme.colors.text};
    text-transform: uppercase;
    line-height: 1;
`,d=n.Ay.a`
    display: block;
    ${e=>e.coursePageView?(0,o.sl)(36,24,16):(0,o.sl)(18,18,12)}
    ${e=>e.coursePageView&&"font-weight: 700"};
    ${a}
`,h=n.Ay.div`
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

    @media (max-width: ${r.Qh}){
        height: 3px;
    }
`,p=n.Ay.a`
    display: block;
    ${a}
    ${(0,o.sl)(14,14,12)}

`;const u=function(e){let{lessons:t,finishedLessons:i,coursePageView:r}=e;const n=Math.round(i/t*100);return(0,l.jsxs)(c,{coursePageView:r,children:[(0,l.jsx)(d,{coursePageView:r,children:`\u0423\u0440\u043e\u043a ${i}/${t}`}),(0,l.jsx)(h,{progress:n}),(0,l.jsx)(p,{children:`${n}%`})]})}},9250:(e,t,i)=>{i.d(t,{A:()=>v});i(5043);var r=i(5464),n=i(512),s=i(2546),o=i(8738),l=i(7630),c=i(3039),a=i(1422),d=i(5475),h=i(6402),p=i(4569),u=i(579);const x=[{id:0,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",totalLessons:10,finishedLessons:2,img:c},{id:1,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",totalLessons:10,finishedLessons:0,img:c}],m=r.Ay.div`
    width: 95%;   
`,f=r.Ay.a`
    display: block;
    color: ${e=>e.theme.colors.text};
    ${(0,s.sl)(64,36,16)}
    text-transform: uppercase;
    font-weight: 700;
    
    ${(0,l.c)(24)}
`,g=r.Ay.img`
    object-fit: cover;
    width: 91%;
    aspect-ratio: 18/10;
    pointer-events: none;
    ${(0,l.c)(45)}
`,w=(0,r.Ay)(d.N_)`
    display: block;
    text-decoration: none;
    width: fit-content;
    color: ${e=>e.theme.colors.text};
    ${(0,s.sl)(36,36,12)}
    text-transform: uppercase;
    font-weight: 600;
    line-height: 1;
    ${s.oB}
`,y=e=>{let{course:t}=e;const i=p.Ay.useBreakpoint(),r=(Math.round(t.finishedLessons/t.totalLessons*100),0===t.finishedLessons?"\u043d\u0430\u0447\u0430\u0442\u044c":"\u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c");return(0,u.jsxs)(m,{children:[(0,u.jsxs)("div",{style:{position:i.xs?"absolute":void 0,transform:i.xs?"translate(10%,15%)":void 0},children:[(0,u.jsx)(f,{children:t.title}),(0,u.jsx)(h.A,{lessons:t.totalLessons,finishedLessons:t.finishedLessons})]}),(0,u.jsx)(g,{alt:t.title,src:t.img}),(0,u.jsx)(w,{to:a.eE+"/"+t.id,children:`${r} \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u0435`})]})},j=r.Ay.div`

  position: relative;
  width: 105%;

${(0,l.S)(90)};

@media (max-width: ${a.u3}){
    width: 180%;
}

`;const v=function(){const e=x;return(0,u.jsx)(j,{children:(0,u.jsx)(n.A,{childrenLength:e.length,slidesToShow:2,infinite:o.Fr,children:e.map((e=>(0,u.jsx)(y,{course:e})))})})}},3358:(e,t,i)=>{i.r(t),i.d(t,{default:()=>P});i(5043);var r=i(2546),n=i(9250),s=i(1422),o=i(8993),l=i(3039),c=i(5464),a=i(512),d=i(8738),h=i(7630),p=i(579);const u=[{id:0,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:l,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:1,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:l,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:2,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:l,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:3,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:l,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"}],x=c.Ay.div`
  width: 102.5%;
  ${(0,h.S)(90)}

  @media (max-width: ${s.u3}){
    width: 190%;
  }
`;const m=function(){const e=u,t=d.Fr&&e.length>2,i={width:t?"100%":void 0,marginBottom:0},r=e.map((e=>(0,p.jsx)(o.CourseCard,{containerStyle:i,course:e})));return(0,p.jsx)(p.Fragment,{children:t?(0,p.jsx)(x,{children:(0,p.jsx)(a.A,{childrenLength:e.length,slidesToShow:4,infinite:d.Fr,children:r})}):(0,p.jsx)(o.AllCoursesContainer,{children:r})})},f=i.p+"static/media/mockArticle.577b57e88f876219ab66.png";var g=i(5475);const w=c.Ay.div`
    width: 50%;
    display: flex;
    ${(0,h.c)(45)}
    align-items: end;
    justify-content: space-between;

    @media (max-width: ${s.Qh} ){
        width: 100%;
    }
`,y=c.Ay.img`
    object-fit: cover;
    width: 47%;
    aspect-ratio: 89/100;
`,j=c.Ay.div`
    width: 50%;
`,v=c.Ay.a`
    display: block;
    color: ${e=>e.theme.colors.text};
    ${(0,r.sl)(18,18,8)}
    ${(0,h.c)(24)}
`,b=c.Ay.a`
    display: block;
    color: ${e=>e.theme.colors.text};
    ${(0,r.sl)(24,24,16)}
    text-transform: uppercase;
    font-weight: 700;
    ${(0,h.c)(45)}
`,$=(0,c.Ay)(g.N_)`
display: block;
    text-decoration: none;
    text-transform: uppercase;
    color: ${e=>e.theme.colors.text};
    ${(0,r.sl)(18,18,12)}
    font-weight: 500;
    line-height: 1;
    ${r.oB}
`;function A(e){let{article:t}=e;const{id:i,title:r,date:n,img:o}=t;return(0,p.jsxs)(w,{children:[(0,p.jsx)(y,{src:o,alt:r}),(0,p.jsxs)(j,{children:[(0,p.jsx)(v,{children:n}),(0,p.jsx)(b,{children:r}),(0,p.jsx)($,{to:s.hh+"/"+i,children:"\u0427\u0438\u0442\u0430\u0442\u044c"})]})]})}const k=[{id:0,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2024",img:f},{id:1,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2024",img:f},{id:2,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2024",img:f},{id:3,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2024",img:f}],O=c.Ay.div`
    width: 100%;
    ${(0,h.S)(90)}
`;const C=function(){const e=k;return(0,p.jsx)(O,{children:e.map((e=>(0,p.jsx)(A,{article:e})))})};const P=function(){return(0,p.jsxs)(r.YW,{children:[(0,p.jsxs)(r.BT,{children:[(0,p.jsx)(r.GH,{marginTop:90,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),(0,p.jsx)(n.A,{})]}),(0,p.jsxs)(r.BT,{children:[(0,p.jsx)(r.GH,{children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043a\u0443\u0440\u0441\u044b"}),(0,p.jsx)(r.id,{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u043c\u0438\u0440 \u0410\u043a\u0430\u0434\u0435\u043c\u0438\u0438 \u0442\u0443\u0442 \u0441\u043d\u043e\u0432\u0430 \u0431\u0443\u0434\u0435\u0442 \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0435\u043a\u0441\u0442, \u043d\u043e \u043f\u043e\u043a\u0430 \u0447\u0442\u043e \u0442\u0430\u043a."}),(0,p.jsx)(m,{}),(0,p.jsx)(r.t2,{children:(0,p.jsx)(r.CY,{to:s.hb,hover:!0,children:"\u0412\u0441\u0435 \u043a\u0443\u0440\u0441\u044b"})})]}),(0,p.jsxs)(r.BT,{children:[(0,p.jsx)(r.GH,{children:"\u041f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"}),(0,p.jsx)(C,{}),(0,p.jsx)(r.t2,{children:(0,p.jsx)(r.CY,{to:s.hh,hover:!0,children:"\u0412\u0441\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"})})]})]})}},512:(e,t,i)=>{i.d(t,{A:()=>w});var r=i(5043),n=i(2382),s=(i(4430),i(9078),i(5464)),o=i(7196),l=i(1422),c=i(8738),a=i(7109),d=i(579),h=function(e){return e[e.prev=0]="prev",e[e.next=1]="next",e}(h||{});const p=s.I4.div`
    position: relative;
    width: 100%;
`,u=s.I4.div`
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
`,x=s.I4.div`
width: 87svw;
z-index: 1;
position: absolute;
top: 50%;
left: 0;
transform: translate(-5%,-50%);
display: flex;
justify-content: space-between;
pointer-events: none;

@media(max-width: ${l.u3}){
    width: 110%;
    
}

@media (max-width: ${l.Qh}) {
    width: 113%;
}
`,m=s.I4.div`
    width: 100%;
    display: flex;
    justify-content: center;

`,f=s.I4.div`
    width: 10px;
    aspect-ratio: 1/1;
    background-color: red;
    opacity: ${e=>{let{selected:t}=e;return t?"0.5":"1"}};
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 4px;
    margin-right: 4px;
    transition: opacity .3s ease-in-out;
`,g=(0,s.I4)(n.A)`
    
`;const w=function(e){let{children:t,slidesToShow:i,childrenLength:n,infinite:s,dots:l=!1}=e;const w=(0,r.useRef)(null),[y,j]=(0,r.useState)(0),v=null!==s&&void 0!==s?s:n>i,b={arrows:!1,slidesToScroll:1,infinite:v,dots:!1,slidesToShow:i,swipeToSlide:v,rows:1,beforeChange(e,t){j(t)}},$=()=>{var e;null===(e=w.current)||void 0===e||e.slickNext()},A=()=>{var e;null===(e=w.current)||void 0===e||e.slickPrev()},k=(0,a.uh)({onSwipedLeft:$,onSwipedRight:A});return(0,d.jsxs)(p,{...k,children:[v&&c.xl&&(0,d.jsxs)(x,{children:[(0,d.jsx)(u,{type:h.prev,onClick:A,children:(0,d.jsx)(o.WZN,{})}),(0,d.jsx)(u,{type:h.next,onClick:$,children:(0,d.jsx)(o.pjv,{})})]}),(0,d.jsx)(g,{ref:w,...b,children:t}),l&&(0,d.jsx)(m,{children:Array(n).fill(null).map(((e,t)=>(0,d.jsx)(f,{selected:y===t},t)))})]})}},3039:(e,t,i)=>{e.exports=i.p+"static/media/mockCourse.24dc3d84bcd89471ae6e.webp"},3441:(e,t,i)=>{i.d(t,{k5:()=>u});var r=i(5043),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=r.createContext&&r.createContext(n),o=["attr","size","title"];function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;i[r]=e[r]}return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},c.apply(this,arguments)}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function d(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){h(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function h(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function p(e){return e&&e.map(((e,t)=>r.createElement(e.tag,d({key:t},e.attr),p(e.child))))}function u(e){return t=>r.createElement(x,c({attr:d({},e.attr)},t),p(e.child))}function x(e){var t=t=>{var i,{attr:n,size:s,title:a}=e,h=l(e,o),p=s||t.size||"1em";return t.className&&(i=t.className),e.className&&(i=(i?i+" ":"")+e.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,h,{className:i,style:d(d({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),e.children)};return void 0!==s?r.createElement(s.Consumer,null,(e=>t(e))):t(n)}}}]);
//# sourceMappingURL=633.4018e173.chunk.js.map