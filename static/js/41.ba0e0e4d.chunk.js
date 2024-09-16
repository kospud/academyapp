"use strict";(self.webpackChunkacademy_app=self.webpackChunkacademy_app||[]).push([[41],{6402:(e,t,s)=>{s.d(t,{A:()=>m});s(5043);var i=s(1422),n=s(5464),r=s(7630),l=s(2546),a=s(579);const c=n.Ay.div`
width: 50%;
display: flex;
align-items: center;
${e=>(0,r.c)(e.coursePageView?0:45)}

@media (max-width: ${i.u3}){
    width: 100%;
}
`,o=n.AH`
    color: ${e=>e.theme.colors.text};
    text-transform: uppercase;
    line-height: 1;
`,u=n.Ay.a`
    display: block;
    ${e=>e.coursePageView?(0,l.sl)(36,24,16):(0,l.sl)(18,18,12)}
    ${e=>e.coursePageView&&"font-weight: 700"};
    ${o}
`,d=n.Ay.div`
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
    ${o}
    ${(0,l.sl)(14,14,8)}

`;const m=function(e){let{lessons:t,finishedLessons:s,coursePageView:i}=e;const n=Math.round(s/t*100);return(0,a.jsxs)(c,{coursePageView:i,children:[(0,a.jsx)(u,{coursePageView:i,children:`\u0423\u0440\u043e\u043a ${s}/${t}`}),(0,a.jsx)(d,{progress:n}),(0,a.jsx)(h,{children:`${n}%`})]})}},1336:(e,t,s)=>{s.r(t),s.d(t,{default:()=>re});var i=s(5043),n=s(2546),r=s(5464),l=s(7630),a=s(1422),c=s(6402),o=s(3002),u=s(512),d=s(8738),h=s(579);const m=r.Ay.div`
width: 100%;
`,x=r.Ay.div`
    display: block;
    width: 90%;
    aspect-ratio: 1/1;
    border: solid 3px ${e=>e.theme.colors.text};
    border-radius: 10px;
    ${(0,n.sl)(18,18,12)};
    color: ${e=>e.theme.colors.text};
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
`,p=r.Ay.div`
width: 100%;

@media (max-width: ${a.Qh}){
    width: 120%;
}
`,g=(0,r.Ay)(p)`
    display: flex;
`,f=r.Ay.div`
    width: 25%;
`,j=["\u0421\u0432\u0435\u0434\u0435\u043d\u0438\u0435","\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430","\u0421\u043e\u043d\u0433\u0440\u0430\u0439\u0442\u0438\u043d\u0433","\u043c\u0430\u0441\u0442\u0435\u0440\u0438\u043d\u0433"];const w=function(){const e=j;return e.length>=4?(0,h.jsx)(p,{children:(0,h.jsx)(u.A,{childrenLength:e.length,slidesToShow:4,infinite:d.Fr,children:e.map((e=>(0,h.jsx)(m,{children:(0,h.jsx)(x,{children:e})},e)))})}):(0,h.jsx)(g,{children:e.map((e=>(0,h.jsx)(f,{children:(0,h.jsx)(x,{children:e})},e)))})},v=r.AH`
    ${(0,n.sl)(18,18,12)}
    color: ${e=>e.theme.colors.text};
    text-align: justify;
`,y=r.Ay.div`
width: 100%;
${(0,l.c)(90)}
`,$=r.Ay.h2`
    ${(0,l.S)(0)}
    ${(0,l.c)(45)}
    line-height: 1;
    ${(0,n.sl)(36,36,24)}
    font-weight: 800;
    text-transform: uppercase;
    color: ${e=>e.theme.colors.text};
`,A=r.Ay.a`
    display: block;
    width: 83%;
    ${v}
    ${e=>(0,l.c)(e.last?0:24)}
    @media (max-width: ${a.Qh}){
        width: 100%;
    }
`,b=r.Ay.li`
    ${v}
    ${e=>(0,l.c)(e.last?0:24)}
    
`,q=r.Ay.div`
    display: flex;
    align-items: center;

`,L=r.Ay.div`
    
`,k=r.Ay.a`
display: block;
      ${(0,l.c)(24)}
    line-height: 1;
    ${(0,n.sl)(36,24,16)}
    font-weight: 800;
    text-transform: uppercase;
    color: ${e=>e.theme.colors.text};
`,S=r.Ay.a`
${(0,n.sl)(14,14,12)}
    ${v};
    text-transform: uppercase;
    line-height: 1;
    font-weight: 500;
`,P=r.Ay.div`
    display: block;
    color: ${e=>e.theme.colors.text};
    width: 10%;
    aspect-ratio: 1/1;
    line-height: 1;
    margin-right: 24px;

    svg{
        width: 100%;
        height: 100%;
    }

    @media (max-width: ${a.Qh}){
        margin-right: 10px;
    }
`,C=()=>(0,h.jsxs)(q,{children:[(0,h.jsx)(P,{children:(0,h.jsx)(o.i3Z,{})}),(0,h.jsxs)(L,{children:[(0,h.jsx)(k,{children:"\u0420\u043e\u043c\u0430\u043d cvpellv"}),(0,h.jsx)(S,{children:"\u043f\u0440\u043e\u0434\u044e\u0441\u0441\u0435\u0440, \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442"})]})]});const E=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(y,{children:[(0,h.jsx)($,{children:"\u041e \u0447\u0435\u043c \u044d\u0442\u043e\u0442 \u043a\u0443\u0440\u0441?"}),(0,h.jsx)(A,{last:!1,children:"Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed."}),(0,h.jsx)(A,{last:!0,children:"Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed."})]}),(0,h.jsxs)(y,{children:[(0,h.jsx)($,{children:"\u041e\u0431\u044a\u0435\u043c \u043a\u0443\u0440\u0441\u0430"}),(0,h.jsxs)("ul",{style:{paddingLeft:20,margin:0},children:[(0,h.jsx)(b,{last:!1,children:"10 \u0443\u0440\u043e\u043a\u043e\u0432"}),(0,h.jsx)(b,{last:!1,children:"5 \u0447\u0430\u0441\u043e\u0432 50 \u043c\u0438\u043d\u0443\u0442"}),(0,h.jsx)(b,{last:!0,children:"17 \u0433\u043e\u0442\u043e\u0432\u044b\u0445 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432"})]})]}),(0,h.jsxs)(y,{children:[(0,h.jsx)($,{children:"\u041e\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438"}),(0,h.jsx)(w,{})]}),(0,h.jsxs)(y,{children:[(0,h.jsx)($,{children:"\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438"}),(0,h.jsx)(C,{})]})]})},I=s.p+"static/media/mockModule.287eb9837771d801fbe8.png",T=r.Ay.div`
  width: 100%;
  ${(0,l.c)(90)}
`,M=r.AH`
  color: ${e=>e.theme.colors.text};
  text-transform: uppercase;
  display: block;
`,V=r.Ay.a`
  ${(0,n.sl)(64,36,16)}
  ${M}
  ${(0,l.c)(24)}
  font-weight: 700;
  line-height: 1;
`,Q=r.Ay.a`
  line-height: 1;
    ${(0,n.sl)(18,16,12)}
    ${M}
    font-weight: 600;
    ${(0,l.c)(45)}
`,F=r.Ay.div`
  display: flex;
  justify-content: space-between;
  ${(0,l.c)(45)}
`,H=r.Ay.div`
width: 55%;
`,R=r.Ay.a`
position: relative;
  ${M};
  text-transform: none;
  text-align: justify;
  ${(0,n.sl)(18,16,12)}
  ${e=>(0,l.c)(e.last?0:36)}
`,Y=r.Ay.div`

  width: 43%;
  img{
    width: 100%;
    aspect-ratio: 35/39;
    object-fit: cover;
  }
`;function z(e){let{module:t,index:s}=e;return(0,h.jsxs)(T,{children:[(0,h.jsx)(V,{children:`${(e=>(++e).toString().padStart(2,"0"))(s)}/\u043c\u043e\u0434\u0443\u043b\u044c`}),(0,h.jsx)(Q,{children:t.title}),(0,h.jsxs)(F,{children:[(0,h.jsx)(Y,{children:(0,h.jsx)("img",{alt:t.title,src:t.img})}),(0,h.jsx)(H,{children:d.Fr?(0,h.jsx)(R,{children:t.description[0]}):t.description.map(((e,t,s)=>(0,h.jsx)(R,{last:t===s.length-1,children:e})))})]}),(0,h.jsx)(n.CY,{hover:!0,to:"/",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0443\u0440\u043e\u043a\u0430\u043c"})]})}const B=[{id:0,title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",img:I,description:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus.","Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "]},{id:0,title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",img:I,description:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus.","Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "]},{id:0,title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",img:I,description:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus.","Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "]}];const N=function(){const e=B;return(0,h.jsx)(h.Fragment,{children:e.map(((e,t)=>(0,h.jsx)(z,{module:e,index:t},e.title)))})};const W=function(){return(0,h.jsx)("div",{children:"CourseContent"})};var Z=s(3003);const _=(0,r.Ay)(n.GH)`

`,G=(0,r.Ay)(n.id)`
  text-transform: uppercase;
  ${(0,l.c)(90)}
`,D=r.Ay.div`

  width: 100%;
  display: flex;


  @media (max-width: ${a.u3}) and (orientation: portrait){
    flex-direction: column;
    height: auto;
  }
`,J=r.Ay.div`
width: 50%;
position: fixed;

@media (max-width: ${a.u3}) and (orientation: portrait){
    position: static;
    width: 100%;
  }
`,K=r.Ay.div`
  width: 50%;
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  margin-left: 50%;
  @media (max-width: ${a.u3}) and (orientation: portrait){
    margin-left: 0;
    max-height: none;
    width: 100%;
  }
`,O=r.Ay.div`
  //margin-top: 38svh;
  ${(0,l.S)(90)}
  width: 100%;
`,U=r.Ay.a`
  color: ${e=>e.selected?e.theme.colors.primary:e.theme.colors.text};
  ${(0,n.sl)(36,24,16)}
  ${(0,l.c)(36)}
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  line-height: 1;
  transition: color .1s ease-in-out;
  user-select: none;
`,X=r.Ay.div`
display: flex;
flex-direction: column;

@media (max-width: ${a.u3}) and (orientation: portrait){
  ${(0,l.S)(90)}
  flex-direction: row;
  justify-content: space-between;
}

`,ee=e=>{const{selectedMenuItem:t,setSelectedMenuItem:s,items:n,setMarginTop:r}=e,l=(0,i.useRef)(null);return(0,i.useEffect)((()=>{if(l.current&&r){const e=l.current.getBoundingClientRect();r(e.top)}}),[]),(0,h.jsx)(X,{ref:l,children:n.map((e=>(0,h.jsx)(U,{onClick:()=>s(e),selected:e===t,children:e})))})},te=r.Ay.div`
${(0,l.S)(36)};
width: 150%;

@media (max-width: ${a.u3}) and (orientation: portrait){
  width: 75%;
}
`,se=r.Ay.div`
${(0,n.sl)(16,14,12)}
color: ${e=>e.theme.colors.text};
${(0,l.S)(24)}

`,ie=r.Ay.div`
  ${(0,l.S)(90)}
  display: flex;

  @media (max-width: ${a.Qh}){
    ${(0,l.S)(45)}
    justify-content: center;
  }
`,ne={"\u043e\u0431\u0437\u043e\u0440":(0,h.jsx)(E,{}),"\u043c\u043e\u0434\u0443\u043b\u0438":(0,h.jsx)(N,{}),"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b":(0,h.jsx)(W,{})};const re=function(){const[e,t]=(0,i.useState)(""),s=(0,Z.d4)((e=>e.orientation)).orientation,[r,l]=(0,i.useState)(void 0),a={items:["\u043e\u0431\u0437\u043e\u0440","\u043c\u043e\u0434\u0443\u043b\u0438","\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b"],setSelectedMenuItem:t,selectedMenuItem:e};return(0,h.jsx)(n.YW,{children:(0,h.jsx)(n.BT,{children:(0,h.jsxs)(D,{children:[(0,h.jsxs)(J,{children:[(0,h.jsx)(_,{marginTop:90,children:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e"}),(0,h.jsx)(G,{children:"\u041e\u0442 \u0438\u0434\u0435\u0438 \u0434\u043e \u043f\u0440\u043e\u0434\u0430\u0436\u0438"}),s.landscape&&(0,h.jsx)(ee,{setMarginTop:e=>{l(e)},...a}),(0,h.jsxs)(te,{children:[(0,h.jsx)(c.A,{coursePageView:!0,lessons:10,finishedLessons:3}),(0,h.jsx)(se,{children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u043e \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0443"})]}),(0,h.jsx)(ie,{children:(0,h.jsx)(n.CY,{to:"/",hover:!0,children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435"})}),s.portrait&&(0,h.jsx)(ee,{...a})]}),(0,h.jsx)(K,{children:(0,h.jsx)(O,{style:{marginTop:r},children:ne[e]})})]})})})}},512:(e,t,s)=>{s.d(t,{A:()=>g});var i=s(5043),n=s(2382),r=(s(4430),s(9078),s(5464)),l=s(7196),a=s(1422),c=s(8738),o=s(7109),u=s(579),d=function(e){return e[e.prev=0]="prev",e[e.next=1]="next",e}(d||{});const h=r.I4.div`
    position: relative;
    width: 100%;
`,m=r.I4.div`
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
`,x=r.I4.div`
width: 87svw;
z-index: 1;
position: absolute;
top: 50%;
left: 0;
transform: translate(-5%,-50%);
display: flex;
justify-content: space-between;
pointer-events: none;

@media(max-width: ${a.u3}){
    width: 110%;
    
}

@media (max-width: ${a.Qh}) {
    width: 113%;
}
`,p=(r.I4.div`
    width: 100%;
    display: flex;
    justify-content: center;

`,r.I4.div`
    width: 10px;
    aspect-ratio: 1/1;
    background-color: red;
    opacity: ${e=>{let{selected:t}=e;return t?"0.5":"1"}};
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 4px;
    margin-right: 4px;
    transition: opacity .3s ease-in-out;
`,(0,r.I4)(n.A)`
    
`);const g=function(e){let{children:t,slidesToShow:s,childrenLength:n,infinite:r}=e;const a=(0,i.useRef)(null),[g,f]=(0,i.useState)(0),j=null!==r&&void 0!==r?r:n>s,w={arrows:!1,slidesToScroll:1,infinite:j,dots:!1,slidesToShow:s,swipeToSlide:j,rows:1,beforeChange(e,t){f(t)}},v=()=>{var e;null===(e=a.current)||void 0===e||e.slickNext()},y=()=>{var e;null===(e=a.current)||void 0===e||e.slickPrev()},$=(0,o.uh)({onSwipedLeft:v,onSwipedRight:y});return(0,u.jsxs)(h,{...$,children:[j&&c.xl&&(0,u.jsxs)(x,{children:[(0,u.jsx)(m,{type:d.prev,onClick:y,children:(0,u.jsx)(l.WZN,{})}),(0,u.jsx)(m,{type:d.next,onClick:v,children:(0,u.jsx)(l.pjv,{})})]}),(0,u.jsx)(p,{ref:a,...w,children:t})]})}}}]);
//# sourceMappingURL=41.ba0e0e4d.chunk.js.map