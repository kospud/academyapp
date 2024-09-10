"use strict";(self.webpackChunkacademy_app=self.webpackChunkacademy_app||[]).push([[945,993],{8993:(e,t,i)=>{i.r(t),i.d(t,{AllCoursesContainer:()=>w,CourseCard:()=>j,default:()=>f});i(5043);var s=i(3039),r=i(5464),n=i(7630),o=i(2546),d=i(5475),l=i(1422),c=i(579);const h=[{id:0,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:1,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:2,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:3,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:0,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:1,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:2,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:3,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"}],a=r.Ay.div`
  width: 25%;
  min-width: 144px;

  ${(0,n.c)(90)}

  @media (max-width: ${l.u3}){
    width: 50%;
  }
`,x=r.Ay.div`
  width: 90%;
`,p=r.Ay.img`
  object-fit: cover;
  width: 100%;
  aspect-ratio: 89/100;
  ${(0,n.c)(45)}
  pointer-events: none;
`,m=r.Ay.a`
  display: block;
  text-transform: uppercase;
  ${(0,o.sl)(36,36,16)}
  color: ${e=>e.theme.colors.text};
  line-height: 1;
  width: 90%;
  font-weight: 600;
  ${(0,n.c)(24)}
`,u=r.Ay.a`
  display: block;
  ${(0,o.sl)(18,18,12)}
  color: ${e=>e.theme.colors.text};
  line-height: 1;
  width: 90%;
  ${(0,n.c)(45)}
`,g=(0,r.Ay)(d.N_)`
  display: block;
  ${(0,o.sl)(18,18,12)}
  color: ${e=>e.theme.colors.text};
  line-height: 1;
  width: 90%;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
`,j=e=>{let{course:t,containerStyle:i}=e;const{title:s,phrase:r,id:n,img:o}=t;return(0,c.jsx)(a,{style:i,children:(0,c.jsxs)(x,{children:[(0,c.jsx)(p,{src:o,alt:s}),(0,c.jsx)(m,{children:s}),(0,c.jsx)(u,{children:r}),(0,c.jsx)(g,{to:"/courses/"+n,children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438"})]})})},w=r.Ay.div`

  width: 102.5%;
  display: flex;
  ${(0,n.S)(90)}
  flex-wrap: wrap;

  @media (max-width: ${l.u3}){
    width: 105%;
  }
  
`;const f=function(){const e=h;return(0,c.jsx)(o.YW,{children:(0,c.jsxs)(o.BT,{children:[(0,c.jsx)(o.GH,{marginTop:90,children:"\u0412\u0441\u0435 \u043a\u0443\u0440\u0441\u044b"}),(0,c.jsx)(o.id,{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u043c\u0438\u0440 \u0410\u043a\u0430\u0434\u0435\u043c\u0438\u0438 \u0442\u0443\u0442 \u0441\u043d\u043e\u0432\u0430 \u0431\u0443\u0434\u0435\u0442 \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0435\u043a\u0441\u0442, \u043d\u043e \u043f\u043e\u043a\u0430 \u0447\u0442\u043e \u0442\u0430\u043a."}),(0,c.jsx)(w,{children:e.map((e=>(0,c.jsx)(j,{course:e})))})]})})}},9250:(e,t,i)=>{i.d(t,{A:()=>$});i(5043);var s=i(5464),r=i(512),n=i(2546),o=i(8738),d=i(7630),l=i(3039),c=i(1422),h=i(5475),a=i(579);const x=[{id:0,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",totalLessons:10,finishedLessons:2,img:l},{id:1,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",totalLessons:10,finishedLessons:0,img:l}],p=s.Ay.div`
    width: 100%;   
`,m=s.Ay.a`
    display: block;
    color: ${e=>e.theme.colors.text};
    ${(0,n.sl)(64,36,16)}
    text-transform: uppercase;
    font-weight: 800;
    line-height: 1;
    ${(0,d.c)(24)}
`,u=s.Ay.div`
width: 100%;
display: flex;
align-items: center;
${(0,d.c)(45)}
`,g=s.Ay.a`
    display: block;
    color: ${e=>e.theme.colors.text};
    ${(0,n.sl)(18,18,12)}
    text-transform: uppercase;
    line-height: 1;
`,j=s.Ay.div`
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

    @media (max-width: ${c.Qh}){
        height: 3px;
    }
`,w=s.Ay.img`
    object-fit: cover;
    width: 91%;
    aspect-ratio: 18/10;
    pointer-events: none;
    ${(0,d.c)(45)}
`,f=(0,s.Ay)(h.N_)`
display: block;
    text-decoration: none;
    color: ${e=>e.theme.colors.text};
    ${(0,n.sl)(36,36,12)}
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1;
`,y=e=>{let{course:t}=e;const i=Math.round(t.finishedLessons/t.totalLessons*100),s=0===t.finishedLessons?"\u043d\u0430\u0447\u0430\u0442\u044c":"\u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c";return(0,a.jsxs)(p,{children:[(0,a.jsxs)("div",{style:{position:o.Fr?"absolute":void 0,transform:o.Fr?"translate(5%,10%)":void 0},children:[(0,a.jsx)(m,{children:t.title}),(0,a.jsxs)(u,{children:[(0,a.jsx)(g,{children:`\u0423\u0440\u043e\u043a ${t.finishedLessons}/${t.totalLessons}`}),(0,a.jsx)(j,{progress:i}),(0,a.jsx)(g,{children:`${i}%`})]})]}),(0,a.jsx)(w,{alt:t.title,src:t.img}),(0,a.jsx)(f,{to:"/courses/"+t.id,children:`${s} \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u0435`})]})},v=s.Ay.div`

  position: relative;
  width: 105%;

${(0,d.S)(90)};

@media (max-width: ${c.u3}){
    width: 180%;
}

`;const $=function(){const e=x;return(0,a.jsx)(v,{children:(0,a.jsx)(r.A,{childrenLength:e.length,slidesToShow:2,infinite:o.Fr,children:e.map((e=>(0,a.jsx)(y,{course:e})))})})}},3358:(e,t,i)=>{i.r(t),i.d(t,{default:()=>L});i(5043);var s=i(2546),r=i(9250),n=i(1422),o=i(8993),d=i(3039),l=i(5464),c=i(512),h=i(8738),a=i(7630),x=i(579);const p=[{id:0,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:d,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:1,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:d,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:2,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:d,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:3,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:d,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"}],m=l.Ay.div`
  width: 102.5%;
  ${(0,a.S)(90)}

  @media (max-width: ${n.u3}){
    width: 190%;
  }
`;const u=function(){const e=p,t=h.Fr&&e.length>2,i={width:t?"100%":void 0,marginBottom:0},s=e.map((e=>(0,x.jsx)(o.CourseCard,{containerStyle:i,course:e})));return(0,x.jsx)(x.Fragment,{children:t?(0,x.jsx)(m,{children:(0,x.jsx)(c.A,{childrenLength:e.length,slidesToShow:4,infinite:h.Fr,children:s})}):(0,x.jsx)(o.AllCoursesContainer,{children:s})})},g=i.p+"static/media/mockArticle.577b57e88f876219ab66.png";var j=i(5475);const w=l.Ay.div`
    width: 50%;
    display: flex;
    ${(0,a.c)(45)}
    align-items: end;
    justify-content: space-between;

    @media (max-width: ${n.u3} ) and (orientation: portrait){
        width: 100%;
    }
`,f=l.Ay.img`
    object-fit: cover;
    width: 47%;
    aspect-ratio: 89/100;
`,y=l.Ay.div`
    width: 50%;
`,v=l.Ay.a`
    display: block;
    color: ${e=>e.theme.colors.text};
    ${(0,s.sl)(18,12,8)}
    ${(0,a.c)(24)}
`,$=l.Ay.a`
    display: block;
    color: ${e=>e.theme.colors.text};
    ${(0,s.sl)(24,18,16)}
    text-transform: uppercase;
    font-weight: 700;
    ${(0,a.c)(45)}
`,A=(0,l.Ay)(j.N_)`
display: block;
    text-decoration: none;
    text-transform: uppercase;
    color: ${e=>e.theme.colors.text};
    ${(0,s.sl)(18,14,12)}
    font-weight: 500;
    line-height: 1;
`;function b(e){let{article:t}=e;const{id:i,title:s,date:r,img:o}=t;return(0,x.jsxs)(w,{children:[(0,x.jsx)(f,{src:o,alt:s}),(0,x.jsxs)(y,{children:[(0,x.jsx)(v,{children:r}),(0,x.jsx)($,{children:s}),(0,x.jsx)(A,{to:n.hh+"/"+i,children:"\u0427\u0438\u0442\u0430\u0442\u044c"})]})]})}const k=[{id:0,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2024",img:g},{id:1,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2024",img:g},{id:2,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2024",img:g},{id:3,title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u043e\u0432",date:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2024",img:g}],C=l.Ay.div`
    width: 100%;
    ${(0,a.S)(90)}
`;const S=function(){const e=k;return(0,x.jsx)(C,{children:e.map((e=>(0,x.jsx)(b,{article:e})))})};const L=function(){return(0,x.jsxs)(s.YW,{children:[(0,x.jsxs)(s.BT,{children:[(0,x.jsx)(s.GH,{marginTop:90,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),(0,x.jsx)(r.A,{})]}),(0,x.jsxs)(s.BT,{children:[(0,x.jsx)(s.GH,{children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043a\u0443\u0440\u0441\u044b"}),(0,x.jsx)(s.id,{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u043c\u0438\u0440 \u0410\u043a\u0430\u0434\u0435\u043c\u0438\u0438 \u0442\u0443\u0442 \u0441\u043d\u043e\u0432\u0430 \u0431\u0443\u0434\u0435\u0442 \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0435\u043a\u0441\u0442, \u043d\u043e \u043f\u043e\u043a\u0430 \u0447\u0442\u043e \u0442\u0430\u043a."}),(0,x.jsx)(u,{}),(0,x.jsx)(s.t2,{children:(0,x.jsx)(s.CY,{to:n.hb,hover:!0,children:"\u0412\u0441\u0435 \u043a\u0443\u0440\u0441\u044b"})})]}),(0,x.jsxs)(s.BT,{children:[(0,x.jsx)(s.GH,{children:"\u041f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"}),(0,x.jsx)(S,{}),(0,x.jsx)(s.t2,{children:(0,x.jsx)(s.CY,{to:n.hh,hover:!0,children:"\u0412\u0441\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"})})]})]})}},512:(e,t,i)=>{i.d(t,{A:()=>g});var s=i(5043),r=i(2382),n=(i(4430),i(9078),i(5464)),o=i(7196),d=i(1422),l=i(8738),c=i(7109),h=i(579),a=function(e){return e[e.prev=0]="prev",e[e.next=1]="next",e}(a||{});const x=n.I4.div`
    position: relative;
    width: 100%;
`,p=n.I4.div`
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
`,m=n.I4.div`
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
`,u=(n.I4.div`
    width: 100%;
    display: flex;
    justify-content: center;

`,n.I4.div`
    width: 10px;
    aspect-ratio: 1/1;
    background-color: red;
    opacity: ${e=>{let{selected:t}=e;return t?"0.5":"1"}};
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 4px;
    margin-right: 4px;
    transition: opacity .3s ease-in-out;
`,(0,n.I4)(r.A)`
    
`);const g=function(e){let{children:t,slidesToShow:i,childrenLength:r,infinite:n}=e;const d=(0,s.useRef)(null),[g,j]=(0,s.useState)(0),w=null!==n&&void 0!==n?n:r>i,f={arrows:!1,slidesToScroll:1,infinite:w,dots:!1,slidesToShow:i,swipeToSlide:w,rows:1,beforeChange(e,t){j(t)}},y=()=>{var e;null===(e=d.current)||void 0===e||e.slickNext()},v=()=>{var e;null===(e=d.current)||void 0===e||e.slickPrev()},$=(0,c.uh)({onSwipedLeft:y,onSwipedRight:v});return(0,h.jsxs)(x,{...$,children:[w&&l.xl&&(0,h.jsxs)(m,{children:[(0,h.jsx)(p,{type:a.prev,onClick:v,children:(0,h.jsx)(o.WZN,{})}),(0,h.jsx)(p,{type:a.next,onClick:y,children:(0,h.jsx)(o.pjv,{})})]}),(0,h.jsx)(u,{ref:d,...f,children:t})]})}},3039:(e,t,i)=>{e.exports=i.p+"static/media/mockCourse.24dc3d84bcd89471ae6e.webp"}}]);
//# sourceMappingURL=945.d655fd70.chunk.js.map