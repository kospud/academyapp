"use strict";(self.webpackChunkacademy_app=self.webpackChunkacademy_app||[]).push([[375],{6402:(e,t,s)=>{s.d(t,{A:()=>m});s(5043);var i=s(1422),n=s(5464),l=s(7630),r=s(2546),a=s(579);const o=n.Ay.div`
width: 50%;
display: flex;
align-items: center;
${e=>(0,l.c)(e.coursePageView?0:45)}

@media (max-width: ${i.u3}){
    width: 100%;
}
`,c=n.AH`
    color: ${e=>e.theme.colors.text};
    text-transform: uppercase;
    line-height: 1;
`,u=n.Ay.a`
    display: block;
    ${e=>e.coursePageView?(0,r.sl)(36,24,16):(0,r.sl)(18,18,12)}
    ${e=>e.coursePageView&&"font-weight: 700"};
    ${c}
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
    ${c}
    ${(0,r.sl)(14,14,8)}

`;const m=function(e){let{lessons:t,finishedLessons:s,coursePageView:i}=e;const n=Math.round(s/t*100);return(0,a.jsxs)(o,{coursePageView:i,children:[(0,a.jsx)(u,{coursePageView:i,children:`\u0423\u0440\u043e\u043a ${s}/${t}`}),(0,a.jsx)(d,{progress:n}),(0,a.jsx)(h,{children:`${n}%`})]})}},1501:(e,t,s)=>{s.r(t),s.d(t,{default:()=>ge});var i=s(5043),n=s(2546),l=s(5464),r=s(7630),a=s(1422),o=s(6402),c=s(3002),u=s(512),d=s(8738),h=s(579);const m=l.Ay.div`
width: 100%;
`,x=l.Ay.div`
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
`,p=l.Ay.div`
width: 100%;

@media (max-width: ${a.Qh}){
    width: 120%;
}
`,g=(0,l.Ay)(p)`
    display: flex;
`,f=l.Ay.div`
    width: 25%;
`;const w=function(e){let{skills:t}=e;return t.length>=4?(0,h.jsx)(p,{children:(0,h.jsx)(u.A,{childrenLength:t.length,slidesToShow:4,infinite:d.Fr,children:t.map((e=>(0,h.jsx)(m,{children:(0,h.jsx)(x,{children:e})},e)))})}):(0,h.jsx)(g,{children:t.map((e=>(0,h.jsx)(f,{children:(0,h.jsx)(x,{children:e})},e)))})},j=l.AH`
    ${(0,n.sl)(18,18,12)}
    color: ${e=>e.theme.colors.text};
    text-align: justify;
`,v=l.Ay.div`
width: 100%;
${(0,r.c)(90)}
`,y=l.Ay.h2`
    ${(0,r.S)(0)}
    ${(0,r.c)(45)}
    line-height: 1;
    ${(0,n.sl)(36,36,24)}
    font-weight: 800;
    text-transform: uppercase;
    color: ${e=>e.theme.colors.text};
`,$=l.Ay.a`
    display: block;
    width: 83%;
    ${j}
    ${e=>(0,r.c)(e.last?0:24)}
    @media (max-width: ${a.Qh}){
        width: 100%;
    }
`,A=l.Ay.li`
    ${j}
    ${e=>(0,r.c)(e.last?0:24)}
    
`,b=l.Ay.div`
    display: flex;
    align-items: center;
    ${(0,r.c)(45)}

`,k=l.Ay.div`
    
`,q=l.Ay.a`
display: block;
      ${(0,r.c)(24)}
    line-height: 1;
    ${(0,n.sl)(36,24,16)}
    font-weight: 800;
    text-transform: uppercase;
    color: ${e=>e.theme.colors.text};
`,S=l.Ay.a`
${(0,n.sl)(14,14,12)}
    ${j};
    text-transform: uppercase;
    line-height: 1;
    font-weight: 500;
`,L=l.Ay.div`
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
`,P=e=>{let{mentor:t}=e;return(0,h.jsxs)(b,{children:[(0,h.jsx)(L,{children:(0,h.jsx)(c.i3Z,{})}),(0,h.jsxs)(k,{children:[(0,h.jsx)(q,{children:t.name}),(0,h.jsx)(S,{children:t.occupation})]})]})};const I=function(e){let{review:t}=e;const{reviewBlocks:s,content:i,skills:n,mentors:l}=t;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(v,{children:[(0,h.jsx)(y,{children:"\u041e \u0447\u0435\u043c \u044d\u0442\u043e\u0442 \u043a\u0443\u0440\u0441?"}),s.map(((e,t,s)=>(0,h.jsx)($,{last:t===s.length-1,children:e})))]}),(0,h.jsxs)(v,{children:[(0,h.jsx)(y,{children:"\u041e\u0431\u044a\u0435\u043c \u043a\u0443\u0440\u0441\u0430"}),(0,h.jsx)("ul",{style:{paddingLeft:20,margin:0},children:i.map(((e,t,s)=>(0,h.jsx)(A,{last:t===s.length-1,children:e})))})]}),(0,h.jsxs)(v,{children:[(0,h.jsx)(y,{children:"\u041e\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438"}),(0,h.jsx)(w,{skills:n})]}),(0,h.jsxs)(v,{children:[(0,h.jsx)(y,{children:"\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438"}),l.map((e=>(0,h.jsx)(P,{mentor:e})))]})]})},C=l.Ay.div`
  width: 100%;
  ${(0,r.c)(90)}
`,E=l.AH`
  color: ${e=>e.theme.colors.text};
  text-transform: uppercase;
  display: block;
`,T=l.Ay.a`
  ${(0,n.sl)(64,36,16)}
  ${E}
  ${(0,r.c)(24)}
  font-weight: 700;
  line-height: 1;
`,M=l.Ay.a`
  line-height: 1;
    ${(0,n.sl)(18,16,12)}
    ${E}
    font-weight: 600;
    ${(0,r.c)(45)}
`,V=l.Ay.div`
  display: flex;
  justify-content: space-between;
  ${(0,r.c)(45)}
`,Q=l.Ay.div`
width: 55%;
`,R=l.Ay.a`
position: relative;
  ${E};
  text-transform: none;
  text-align: justify;
  ${(0,n.sl)(18,16,12)}
  ${e=>(0,r.c)(e.last?0:36)}
`,B=l.Ay.div`

  width: 43%;
  img{
    width: 100%;
    aspect-ratio: 35/39;
    object-fit: cover;
  }
`;function F(e){let{module:t,index:s}=e;return(0,h.jsxs)(C,{children:[(0,h.jsx)(T,{children:`${(e=>(++e).toString().padStart(2,"0"))(s)}/\u043c\u043e\u0434\u0443\u043b\u044c`}),(0,h.jsx)(M,{children:t.title}),(0,h.jsxs)(V,{children:[(0,h.jsx)(B,{children:(0,h.jsx)("img",{alt:t.title,src:t.img})}),(0,h.jsx)(Q,{children:d.Fr?(0,h.jsx)(R,{children:t.description[0]}):t.description.map(((e,t,s)=>(0,h.jsx)(R,{last:t===s.length-1,children:e})))})]}),(0,h.jsx)(n.CY,{hover:!0,to:"/",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0443\u0440\u043e\u043a\u0430\u043c"})]})}const H=function(e){let{modules:t}=e;return(0,h.jsx)(h.Fragment,{children:t.map(((e,t)=>(0,h.jsx)(F,{module:e,index:t},e.title)))})};var W=s(3762);const Y=s.p+"static/media/mon amour remix.acf311e8a7c06b14cda5.mp3",z=l.Ay.div`
    width: 100%;
    display: flex;
    align-items: center;
    ${(0,r.c)(45)}
`,G=l.Ay.div`
    flex-grow: 1;
`,N=l.Ay.div`
    width: 15%;
    aspect-ratio: 1/1;
    color: ${e=>e.theme.colors.text};
    display: flex;
    
    align-items: center;
    ${(0,n.sl)(72,72,36)}
`;const O=function(){const e=(0,i.useRef)(null),[t,s]=(0,i.useState)(null),[n,r]=(0,i.useState)(!1),[a,o]=(0,i.useState)({title:"\u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043d",artist:"\u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043d"}),u=(0,l.DP)(),[d,m]=(0,i.useState)(!0);return(0,i.useEffect)((()=>{(async()=>{try{const i=await fetch(Y),n=await i.blob();if(e.current&&!t){const t=W.A.create({container:e.current,waveColor:u.colors.text,progressColor:u.colors.primary,barGap:7,barWidth:5,barRadius:5,height:55,cursorWidth:0});await t.loadBlob(n),s(t)}}catch(i){console.log(i)}finally{m(!1)}})()}),[]),(0,h.jsxs)(z,{children:[(0,h.jsx)(N,{onClick:()=>{null===t||void 0===t||t.playPause(),r((e=>!e))},children:n?(0,h.jsx)(c.sXl,{}):(0,h.jsx)(c.mEc,{})}),(0,h.jsx)(G,{ref:e})]})};var Z=s(3825);const _=l.I4.div`
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;   
`,D=l.I4.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    position: relative;
    ${(0,n.sl)(36,36,16)}
    text-transform: uppercase;
    font-weight: 700;
    ${(0,r.c)(45)}

    a{
        user-select: none;
        display: block;
        width: 90%;
    }

    svg{
        scale: 1.5;
    }
`,X=l.I4.div`
    width: 90%;
    overflow: hidden;
     ${e=>{let{isOpen:t}=e;return!t&&"max-height: 0px"}};
    align-self: end;
`,J=e=>{let{title:t,children:s,icon:n}=e;const[l,r]=(0,i.useState)(!1);return(0,h.jsxs)(_,{children:[(0,h.jsxs)(D,{onClick:()=>{r(!l)},children:[n,(0,h.jsx)("a",{children:t})]}),(0,h.jsx)(X,{isOpen:l,children:s})]})},K=l.I4.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`,U={audio:[1,2,3,5,5,5,5,5,1,2,3,5,5,5,5,5,1,2,3,5,5,5,5,5]};const ee=function(){const e=U;return(0,h.jsx)(K,{children:e.audio&&(0,h.jsx)(J,{title:`${e.audio.length} \u0430\u0443\u0434\u0438\u043e`,icon:(0,h.jsx)(Z.h12,{}),children:e.audio.map((()=>(0,h.jsx)(O,{})))})})};var te=s(3003);const se=s.p+"static/media/mockModule.287eb9837771d801fbe8.png",ie=(0,l.Ay)(n.GH)`

`,ne=(0,l.Ay)(n.id)`
  text-transform: uppercase;
  ${(0,r.c)(90)}
`,le=l.Ay.div`

  width: 100%;
  display: flex;


  @media (max-width: ${a.u3}) and (orientation: portrait){
    flex-direction: column;
    height: auto;
  }
`,re=l.Ay.div`
width: 50%;
position: fixed;
display: flex;
flex-direction: column;
@media (max-width: ${a.u3}) and (orientation: portrait){
    position: static;
    width: 100%;
  }
`,ae=l.Ay.div`
  width: 50%;
  max-height: 100%;
  position: relative;
  margin-left: 50%;
  @media (max-width: ${a.u3}) and (orientation: portrait){
    margin-left: 0;
    max-height: none;
    width: 100%;
  }
`,oe=l.Ay.div`
  //margin-top: 38svh;
  ${(0,r.S)(90)}
  width: 100%;
`,ce=l.Ay.a`
  color: ${e=>e.selected?e.theme.colors.primary:e.theme.colors.text};
  ${(0,n.sl)(36,24,16)}
  ${(0,r.c)(36)}
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  line-height: 1;
  transition: color .1s ease-in-out;
  user-select: none;
`,ue=l.Ay.div`
display: flex;
flex-direction: column;
@media (max-width: ${a.u3}) and (orientation: portrait){
  ${(0,r.S)(90)}
  flex-direction: row;
  justify-content: space-between;
}

`,de=e=>{const{selectedMenuItem:t,setSelectedMenuItem:s,items:n,setMarginTop:l}=e,r=(0,i.useRef)(null);return(0,i.useEffect)((()=>{if(r.current&&l){const e=r.current.getBoundingClientRect();l(e.top)}}),[]),(0,h.jsx)(ue,{ref:r,children:n.map((e=>(0,h.jsx)(ce,{onClick:()=>s(e),selected:e===t,children:e})))})},he=l.Ay.div`
${(0,r.S)(36)};
width: 150%;

@media (max-width: ${a.u3}) and (orientation: portrait){
  width: 75%;
}
`,me=l.Ay.div`
${(0,n.sl)(16,14,12)}
color: ${e=>e.theme.colors.text};
${(0,r.S)(24)}

`,xe=l.Ay.div`
  ${(0,r.S)(90)}
  display: flex;

  @media (max-width: ${a.Qh}){
    ${(0,r.S)(45)}
    justify-content: center;
  }
`,pe={review:{reviewBlocks:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed."],content:["10 \u0443\u0440\u043e\u043a\u043e\u0432","5 \u0447\u0430\u0441\u043e\u0432 50 \u043c\u0438\u043d\u0443\u0442","17 \u0433\u043e\u0442\u043e\u0432\u044b\u0445 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432"],skills:["\u0421\u0432\u0435\u0434\u0435\u043d\u0438\u0435","\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430","\u0421\u043e\u043d\u0433\u0440\u0430\u0439\u0442\u0438\u043d\u0433","\u043c\u0430\u0441\u0442\u0435\u0440\u0438\u043d\u0433"],mentors:[{name:"\u0420\u043e\u043c\u0430\u043d cvpellv",occupation:"\u043f\u0440\u043e\u0434\u044e\u0441\u0441\u0435\u0440, \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442"}]},modules:[{id:0,title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",img:se,description:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus.","Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "]},{id:0,title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",img:se,description:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus.","Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "]},{id:0,title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",img:se,description:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus.","Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "]}]};const ge=function(){const[e,t]=(0,i.useState)(""),s=(0,te.d4)((e=>e.orientation)).orientation,[l,r]=(0,i.useState)(void 0),a=pe,c={"\u043e\u0431\u0437\u043e\u0440":(0,h.jsx)(I,{review:a.review}),"\u043c\u043e\u0434\u0443\u043b\u0438":(0,h.jsx)(H,{modules:a.modules}),"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b":(0,h.jsx)(ee,{})},u={items:["\u043e\u0431\u0437\u043e\u0440","\u043c\u043e\u0434\u0443\u043b\u0438","\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b"],setSelectedMenuItem:t,selectedMenuItem:e};return(0,h.jsx)(n.YW,{children:(0,h.jsx)(n.BT,{children:(0,h.jsxs)(le,{children:[(0,h.jsxs)(re,{children:[(0,h.jsx)(ie,{marginTop:90,children:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e"}),(0,h.jsx)(ne,{children:"\u041e\u0442 \u0438\u0434\u0435\u0438 \u0434\u043e \u043f\u0440\u043e\u0434\u0430\u0436\u0438"}),s.landscape&&(0,h.jsx)(de,{setMarginTop:e=>{r(e)},...u}),(0,h.jsxs)(he,{children:[(0,h.jsx)(o.A,{coursePageView:!0,lessons:10,finishedLessons:3}),(0,h.jsx)(me,{children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u043e \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0443"})]}),(0,h.jsx)(xe,{children:(0,h.jsx)(n.CY,{to:"/",hover:!0,children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435"})}),s.portrait&&(0,h.jsx)(de,{...u})]}),(0,h.jsx)(ae,{children:(0,h.jsx)(oe,{style:{marginTop:l},children:c[e]})})]})})})}},512:(e,t,s)=>{s.d(t,{A:()=>g});var i=s(5043),n=s(2382),l=(s(4430),s(9078),s(5464)),r=s(7196),a=s(1422),o=s(8738),c=s(7109),u=s(579),d=function(e){return e[e.prev=0]="prev",e[e.next=1]="next",e}(d||{});const h=l.I4.div`
    position: relative;
    width: 100%;
`,m=l.I4.div`
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
`,x=l.I4.div`
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
`,p=(l.I4.div`
    width: 100%;
    display: flex;
    justify-content: center;

`,l.I4.div`
    width: 10px;
    aspect-ratio: 1/1;
    background-color: red;
    opacity: ${e=>{let{selected:t}=e;return t?"0.5":"1"}};
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 4px;
    margin-right: 4px;
    transition: opacity .3s ease-in-out;
`,(0,l.I4)(n.A)`
    
`);const g=function(e){let{children:t,slidesToShow:s,childrenLength:n,infinite:l}=e;const a=(0,i.useRef)(null),[g,f]=(0,i.useState)(0),w=null!==l&&void 0!==l?l:n>s,j={arrows:!1,slidesToScroll:1,infinite:w,dots:!1,slidesToShow:s,swipeToSlide:w,rows:1,beforeChange(e,t){f(t)}},v=()=>{var e;null===(e=a.current)||void 0===e||e.slickNext()},y=()=>{var e;null===(e=a.current)||void 0===e||e.slickPrev()},$=(0,c.uh)({onSwipedLeft:v,onSwipedRight:y});return(0,u.jsxs)(h,{...$,children:[w&&o.xl&&(0,u.jsxs)(x,{children:[(0,u.jsx)(m,{type:d.prev,onClick:y,children:(0,u.jsx)(r.WZN,{})}),(0,u.jsx)(m,{type:d.next,onClick:v,children:(0,u.jsx)(r.pjv,{})})]}),(0,u.jsx)(p,{ref:a,...j,children:t})]})}}}]);
//# sourceMappingURL=375.7c42f70e.chunk.js.map