"use strict";(self.webpackChunkacademy_app=self.webpackChunkacademy_app||[]).push([[831,993],{8993:(e,t,i)=>{i.r(t),i.d(t,{AllCoursesContainer:()=>j,CourseCard:()=>g,default:()=>f});i(5043);var s=i(3039),r=i(5464),o=i(7630),n=i(2546),l=i(5475),c=i(579);const d=[{id:0,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:1,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:2,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:3,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:0,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:1,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:2,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:3,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"}],a=r.Ay.div`
  width: 25%;
  min-width: 144px;

  display: flex;
  justify-content: center;

  ${(0,o.c)(90)}
`,h=r.Ay.div`
  width: 90%;
`,p=r.Ay.img`
  object-fit: cover;
  width: 100%;
  aspect-ratio: 89/100;
  ${(0,o.c)(45)}
`,x=r.Ay.a`
  display: block;
  text-transform: uppercase;
  ${(0,n.sl)(36,36,16)}
  color: ${e=>e.theme.colors.text};
  line-height: 1;
  width: 90%;
  font-weight: 600;
  ${(0,o.c)(24)}
`,m=r.Ay.a`
  display: block;
  ${(0,n.sl)(18,18,12)}
  color: ${e=>e.theme.colors.text};
  line-height: 1;
  width: 90%;
  ${(0,o.c)(24)}
`,u=(0,r.Ay)(l.N_)`
  display: block;
  ${(0,n.sl)(18,18,12)}
  color: ${e=>e.theme.colors.text};
  line-height: 1;
  width: 90%;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
`,g=e=>{let{course:t}=e;const{title:i,phrase:s,id:r,img:o}=t;return(0,c.jsx)(a,{children:(0,c.jsxs)(h,{children:[(0,c.jsx)(p,{src:o,alt:i}),(0,c.jsx)(x,{children:i}),(0,c.jsx)(m,{children:s}),(0,c.jsx)(u,{to:"/courses/"+r,children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438"})]})})},j=r.Ay.div`

  width: 102.5%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  ${(0,o.S)(90)}
  justify-content: space-between;
  flex-wrap: wrap;
  
`;const f=function(){const e=d;return(0,c.jsx)(n.YW,{children:(0,c.jsxs)(n.BT,{children:[(0,c.jsx)(n.GH,{marginTop:90,children:"\u0412\u0441\u0435 \u043a\u0443\u0440\u0441\u044b"}),(0,c.jsx)(n.id,{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u043c\u0438\u0440 \u0410\u043a\u0430\u0434\u0435\u043c\u0438\u0438 \u0442\u0443\u0442 \u0441\u043d\u043e\u0432\u0430 \u0431\u0443\u0434\u0435\u0442 \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0435\u043a\u0441\u0442, \u043d\u043e \u043f\u043e\u043a\u0430 \u0447\u0442\u043e \u0442\u0430\u043a."}),(0,c.jsx)(j,{children:e.map((e=>(0,c.jsx)(g,{course:e})))})]})})}},3831:(e,t,i)=>{i.r(t),i.d(t,{default:()=>C});i(5043);var s=i(2546),r=i(5464),o=i(8738),n=i(7630),l=i(3039),c=i(1422),d=i(5475),a=i(579);const h=[{id:0,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",totalLessons:10,finishedLessons:2,img:l},{id:1,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",totalLessons:10,finishedLessons:0,img:l}],p=r.Ay.div`
    //width: 50%;
    position: relative;
    
`,x=r.Ay.a`
    display: block;
    color: ${e=>e.theme.colors.text};
    ${(0,s.sl)(64,64,16)}
    text-transform: uppercase;
    font-weight: 800;
    line-height: 1;
    ${(0,n.c)(24)}
`,m=r.Ay.div`
width: 100%;
display: flex;
align-items: center;
${(0,n.c)(45)}
`,u=r.Ay.a`
    display: block;
    color: ${e=>e.theme.colors.text};
    ${(0,s.sl)(18,18,12)}
    text-transform: uppercase;
    line-height: 1;
`,g=r.Ay.div`
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
`,j=r.Ay.img`
    object-fit: cover;
    width: 37svw;
    aspect-ratio: 18/10;
    pointer-events: none;
    ${(0,n.c)(45)}
`,f=(0,r.Ay)(d.N_)`
display: block;
    text-decoration: none;
    color: ${e=>e.theme.colors.text};
    ${(0,s.sl)(36,36,12)}
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1;
`,y=e=>{let{course:t}=e;const i=Math.round(t.finishedLessons/t.totalLessons*100),s=0===t.finishedLessons?"\u043d\u0430\u0447\u0430\u0442\u044c":"\u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c";return(0,a.jsxs)(p,{children:[(0,a.jsxs)("div",{style:{position:o.XF?"absolute":void 0,transform:o.XF?"translate(10%,10%)":void 0},children:[(0,a.jsx)(x,{children:t.title}),(0,a.jsxs)(m,{children:[(0,a.jsx)(u,{children:`\u0423\u0440\u043e\u043a ${t.finishedLessons}/${t.totalLessons}`}),(0,a.jsx)(g,{progress:i}),(0,a.jsx)(u,{children:`${i}%`})]})]}),(0,a.jsx)(j,{alt:t.title,src:t.img}),(0,a.jsx)(f,{to:"/courses/"+t.id,children:`${s} \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u0435`})]})},$=r.Ay.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    ${(0,n.S)(90)}
`;const w=function(){const e=h;return o.Fr,(0,a.jsx)($,{children:e.map((e=>(0,a.jsx)(y,{course:e})))})};var b=i(8993);const v=[{id:0,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:l,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:1,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:l,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:2,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:l,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:3,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:l,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"}];const A=function(){const e=v;return(0,a.jsx)(b.AllCoursesContainer,{children:e.map((e=>(0,a.jsx)(b.CourseCard,{course:e})))})},k=r.Ay.div`
${(0,n.S)(90)}
${(0,n.c)(180)}
display: flex;
justify-content: center;
`;const C=function(){return(0,a.jsxs)(s.YW,{children:[(0,a.jsxs)(s.BT,{children:[(0,a.jsx)(s.GH,{marginTop:90,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),(0,a.jsx)(w,{})]}),(0,a.jsxs)(s.BT,{children:[(0,a.jsx)(s.GH,{children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043a\u0443\u0440\u0441\u044b"}),(0,a.jsx)(s.id,{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u043c\u0438\u0440 \u0410\u043a\u0430\u0434\u0435\u043c\u0438\u0438 \u0442\u0443\u0442 \u0441\u043d\u043e\u0432\u0430 \u0431\u0443\u0434\u0435\u0442 \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0435\u043a\u0441\u0442, \u043d\u043e \u043f\u043e\u043a\u0430 \u0447\u0442\u043e \u0442\u0430\u043a."}),(0,a.jsx)(A,{}),(0,a.jsx)(k,{children:(0,a.jsx)(s.CY,{to:c.hb,hover:!0,children:"\u0412\u0441\u0435 \u043a\u0443\u0440\u0441\u044b"})})]})]})}},3039:(e,t,i)=>{e.exports=i.p+"static/media/mockCourse.24dc3d84bcd89471ae6e.webp"}}]);
//# sourceMappingURL=831.46e8c132.chunk.js.map