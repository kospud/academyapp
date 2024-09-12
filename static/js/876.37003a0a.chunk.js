"use strict";(self.webpackChunkacademy_app=self.webpackChunkacademy_app||[]).push([[876],{6402:(e,s,t)=>{t.d(s,{A:()=>h});t(5043);var i=t(1422),r=t(5464),l=t(7630),n=t(2546),c=t(579);const a=r.Ay.div`
width: 50%;
display: flex;
align-items: center;
${(0,l.c)(45)}

@media (max-width: ${i.u3}){
    width: 100%;
}
`,d=r.Ay.a`
    display: block;
    color: ${e=>e.theme.colors.text};
    ${e=>e.coursePageView?(0,n.sl)(36,24,16):(0,n.sl)(18,18,12)}
    text-transform: uppercase;
    line-height: 1;
    ${e=>e.coursePageView&&"font-weight: 700"};
`,o=r.Ay.div`
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
`;const h=function(e){let{lessons:s,finishedLessons:t,coursePageView:i}=e;const r=Math.round(t/s*100);return(0,c.jsxs)(a,{children:[(0,c.jsx)(d,{coursePageView:i,children:`\u0423\u0440\u043e\u043a ${t}/${s}`}),(0,c.jsx)(o,{progress:r}),(0,c.jsx)(d,{children:`${r}%`})]})}},3876:(e,s,t)=>{t.r(s),t.d(s,{default:()=>Y});var i=t(5043),r=t(2546),l=t(5464),n=t(7630),c=t(1422),a=t(6402),d=t(3002),o=t(579);const h=l.Ay.div`
width: 100%;
${(0,n.c)(90)}
`,u=l.Ay.h2`
    ${(0,n.S)(0)}
    ${(0,n.c)(45)}
    line-height: 1;
    ${(0,r.sl)(36,36,24)}
    font-weight: 800;
    text-transform: uppercase;
    color: ${e=>e.theme.colors.text};
`,x=l.AH`
    ${(0,r.sl)(18,18,12)}
    color: ${e=>e.theme.colors.text};
    text-align: justify;
`,m=l.Ay.a`
    display: block;
    width: 83%;
    ${x}
    ${e=>(0,n.c)(e.last?0:24)}
    @media (max-width: ${c.Qh}){
        width: 100%;
    }
`,p=l.Ay.li`
    ${x}
    ${e=>(0,n.c)(e.last?0:24)}
    
`,g=l.Ay.div`
    width: 23%;
    aspect-ratio: 1/1;
    border: solid 4px ${e=>e.theme.colors.text};
    border-radius: 10px;
    ${x};
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
`,j=l.Ay.div`
display: flex;
justify-content: space-between;
`,f=l.Ay.div`
    display: flex;
    align-items: center;

`,y=l.Ay.div`
    
`,$=l.Ay.a`
display: block;
      ${(0,n.c)(24)}
    line-height: 1;
    ${(0,r.sl)(36,36,24)}
    font-weight: 800;
    text-transform: uppercase;
    color: ${e=>e.theme.colors.text};
`,w=l.Ay.a`
    ${x};
    text-transform: uppercase;
    line-height: 1;
    font-weight: 500;
`,v=l.Ay.div`
    display: block;
    color: ${e=>e.theme.colors.text};
    width: 70px;
    //font-size: 70px;
    aspect-ratio: 1/1;
    line-height: 1;
    margin-right: 24px;

    svg{
        width: 100%;
        height: 100%;
    }
`,A=()=>(0,o.jsxs)(f,{children:[(0,o.jsx)(v,{children:(0,o.jsx)(d.i3Z,{})}),(0,o.jsxs)(y,{children:[(0,o.jsx)($,{children:"\u0420\u043e\u043c\u0430\u043d cvpellv"}),(0,o.jsx)(w,{children:"\u043f\u0440\u043e\u0434\u044e\u0441\u0441\u0435\u0440, \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442"})]})]});const b=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(h,{children:[(0,o.jsx)(u,{children:"\u041e \u0447\u0435\u043c \u044d\u0442\u043e\u0442 \u043a\u0443\u0440\u0441?"}),(0,o.jsx)(m,{last:!1,children:"Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed."}),(0,o.jsx)(m,{last:!0,children:"Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed."})]}),(0,o.jsxs)(h,{children:[(0,o.jsx)(u,{children:"\u041e\u0431\u044a\u0435\u043c \u043a\u0443\u0440\u0441\u0430"}),(0,o.jsxs)("ul",{style:{paddingLeft:20,margin:0},children:[(0,o.jsx)(p,{last:!1,children:"10 \u0443\u0440\u043e\u043a\u043e\u0432"}),(0,o.jsx)(p,{last:!1,children:"5 \u0447\u0430\u0441\u043e\u0432 50 \u043c\u0438\u043d\u0443\u0442"}),(0,o.jsx)(p,{last:!0,children:"17 \u0433\u043e\u0442\u043e\u0432\u044b\u0445 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432"})]})]}),(0,o.jsxs)(h,{children:[(0,o.jsx)(u,{children:"\u041e\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438"}),(0,o.jsxs)(j,{children:[(0,o.jsx)(g,{children:"\u0421\u0432\u0435\u0434\u0435\u043d\u0438\u0435"}),(0,o.jsx)(g,{children:"\u0421\u0432\u0435\u0434\u0435\u043d\u0438\u0435"}),(0,o.jsx)(g,{children:"\u0421\u0432\u0435\u0434\u0435\u043d\u0438\u0435"}),(0,o.jsx)(g,{children:"\u0421\u0432\u0435\u0434\u0435\u043d\u0438\u0435"})]})]}),(0,o.jsxs)(h,{children:[(0,o.jsx)(u,{children:"\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438"}),(0,o.jsx)(A,{})]})]})};const k=function(){return(0,o.jsx)("div",{children:"CourseModules"})};const q=function(){return(0,o.jsx)("div",{children:"CourseContent"})},L=(0,l.Ay)(r.GH)`
  width: 40%;

  @media (max-width: ${c.u3}){
    width: 70%;
  }
`,P=(0,l.Ay)(r.id)`
  text-transform: uppercase
`,S=(l.Ay.div`
width: 100%;
height: 100svh;
display: flex;
flex-direction: column;
`,l.Ay.div`

  width: 100%;
  height: 100svh;
  display: flex;
`),C=l.Ay.div`
width: 50%;
${(0,n.S)(90)}
`,M=l.Ay.div`
  width: 50%;
  ${(0,n.S)(90)}
  max-height: 100%;
  overflow-y: auto;
`,V=l.Ay.a`
  color: ${e=>e.selected?e.theme.colors.primary:e.theme.colors.text};
  ${(0,r.sl)(36,24,16)}
  ${(0,n.c)(36)}
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  line-height: 1;
  transition: color .1s ease-in-out;
  user-select: none;
`,I=l.Ay.div`
display: flex;
flex-direction: column;

`,E=e=>{const{selectedMenuItem:s,setSelectedMenuItem:t,items:i}=e;return(0,o.jsx)(I,{children:i.map((e=>(0,o.jsx)(V,{onClick:()=>t(e),selected:e===s,children:e})))})},H=l.Ay.div`
${(0,n.S)(36)};
width: 150%;
`,Q=l.Ay.div`
  ${(0,n.S)(90)}
`,T={"\u043e\u0431\u0437\u043e\u0440":(0,o.jsx)(b,{}),"\u043c\u043e\u0434\u0443\u043b\u0438":(0,o.jsx)(k,{}),"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b":(0,o.jsx)(q,{})};const Y=function(){const[e,s]=(0,i.useState)(""),t={items:["\u043e\u0431\u0437\u043e\u0440","\u043c\u043e\u0434\u0443\u043b\u0438","\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b"],setSelectedMenuItem:s,selectedMenuItem:e};return(0,o.jsx)(r.YW,{children:(0,o.jsxs)(r.BT,{children:[(0,o.jsx)(L,{marginTop:90,children:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e"}),(0,o.jsx)(P,{children:"\u041e\u0442 \u0438\u0434\u0435\u0438 \u0434\u043e \u043f\u0440\u043e\u0434\u0430\u0436\u0438"}),(0,o.jsxs)(S,{children:[(0,o.jsxs)(C,{children:[(0,o.jsx)(E,{...t}),(0,o.jsx)(H,{children:(0,o.jsx)(a.A,{coursePageView:!0,lessons:10,finishedLessons:3})}),(0,o.jsx)(Q,{children:(0,o.jsx)(r.CY,{to:"/",hover:!0,children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435"})})]}),(0,o.jsx)(M,{children:T[e]})]})]})})}}}]);
//# sourceMappingURL=876.37003a0a.chunk.js.map