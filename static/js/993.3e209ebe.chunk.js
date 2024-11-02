"use strict";(self.webpackChunkacademy_app=self.webpackChunkacademy_app||[]).push([[993],{8993:(e,t,i)=>{i.r(t),i.d(t,{AllCoursesContainer:()=>y,CourseCard:()=>g,default:()=>$,mockCourses:()=>o});i(5043);var s=i(3039),r=i(5464),d=i(7630),l=i(2546),c=i(5475),a=i(1422),h=i(579);const o=[{id:0,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:1,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:2,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:3,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:0,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:1,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:2,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:3,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:s,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"}],n=r.Ay.div`
  width: 25%;
  min-width: 144px;

  ${(0,d.c)(90)}

  @media (max-width: ${a.u3}){
    width: 50%;
  }
`,p=r.Ay.div`
  width: 90%;
`,m=r.Ay.img`
  object-fit: cover;
  width: 100%;
  aspect-ratio: 89/100;
  ${(0,d.c)(45)}
  pointer-events: none;
`,x=r.Ay.a`
  display: block;
  text-transform: uppercase;
  ${(0,l.sl)(36,36,16)}
  color: ${e=>e.theme.colors.text};
  line-height: 1;
  width: 90%;
  font-weight: 600;
  ${(0,d.c)(24)}
`,w=r.Ay.a`
  display: block;
  ${(0,l.sl)(18,18,12)}
  color: ${e=>e.theme.colors.text};
  line-height: 1;
  width: 90%;
  ${(0,d.c)(45)}
  font-weight: 500;
`,u=(0,r.Ay)(c.N_)`
  display: block;
  ${(0,l.sl)(18,18,12)}
  color: ${e=>e.theme.colors.text};
  line-height: 1;
  width: 90%;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600; 
  
  ${l.oB}
`,g=e=>{let{course:t,containerStyle:i}=e;const{title:s,phrase:r,id:d,img:l}=t;return(0,h.jsx)(n,{style:i,children:(0,h.jsxs)(p,{children:[(0,h.jsx)(m,{src:l,alt:s}),(0,h.jsx)(x,{children:s}),(0,h.jsx)(w,{children:r}),(0,h.jsx)(u,{to:a.hb+"/"+d,children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438"})]})})},y=r.Ay.div`

  width: 102.5%;
  display: flex;
  ${(0,d.S)(90)}
  flex-wrap: wrap;

  @media (max-width: ${a.u3}){
    width: 105%;
  }
  
`;const $=function(){const e=o;return(0,h.jsx)(l.YW,{children:(0,h.jsxs)(l.BT,{children:[(0,h.jsx)(l.GH,{marginTop:90,children:"\u0412\u0441\u0435 \u043a\u0443\u0440\u0441\u044b"}),(0,h.jsx)(l.id,{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u043c\u0438\u0440 \u0410\u043a\u0430\u0434\u0435\u043c\u0438\u0438 \u0442\u0443\u0442 \u0441\u043d\u043e\u0432\u0430 \u0431\u0443\u0434\u0435\u0442 \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0435\u043a\u0441\u0442, \u043d\u043e \u043f\u043e\u043a\u0430 \u0447\u0442\u043e \u0442\u0430\u043a."}),(0,h.jsx)(y,{children:e.map((e=>(0,h.jsx)(g,{course:e})))})]})})}},3039:(e,t,i)=>{e.exports=i.p+"static/media/mockCourse.24dc3d84bcd89471ae6e.webp"}}]);
//# sourceMappingURL=993.3e209ebe.chunk.js.map