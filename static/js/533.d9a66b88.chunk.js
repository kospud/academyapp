"use strict";(self.webpackChunkacademy_app=self.webpackChunkacademy_app||[]).push([[533,993,613],{8993:(e,t,s)=>{s.r(t),s.d(t,{AllCoursesContainer:()=>j,CourseCard:()=>f,default:()=>w,mockCourses:()=>d});s(5043);var i=s(3039),r=s(5464),n=s(7630),l=s(2546),a=s(5475),o=s(1422),c=s(579);const d=[{id:0,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:i,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:1,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:i,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:2,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:i,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:3,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:i,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:0,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:i,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:1,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:i,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:2,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:i,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:3,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:i,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"}],u=r.Ay.div`
  width: 25%;
  min-width: 144px;

  ${(0,n.c)(90)}

  @media (max-width: ${o.u3}){
    width: 50%;
  }
`,m=r.Ay.div`
  width: 90%;
`,h=r.Ay.img`
  object-fit: cover;
  width: 100%;
  aspect-ratio: 89/100;
  ${(0,n.c)(45)}
  pointer-events: none;
`,x=r.Ay.a`
  display: block;
  text-transform: uppercase;
  ${(0,l.sl)(36,36,16)}
  color: ${e=>e.theme.colors.text};
  line-height: 1;
  width: 90%;
  font-weight: 600;
  ${(0,n.c)(24)}
`,p=r.Ay.a`
  display: block;
  ${(0,l.sl)(18,18,12)}
  color: ${e=>e.theme.colors.text};
  line-height: 1;
  width: 90%;
  ${(0,n.c)(45)}
  font-weight: 500;
`,g=(0,r.Ay)(a.N_)`
  display: block;
  ${(0,l.sl)(18,18,12)}
  color: ${e=>e.theme.colors.text};
  line-height: 1;
  width: 90%;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600; 
  
  ${l.oB}
`,f=e=>{let{course:t,containerStyle:s}=e;const{title:i,phrase:r,id:n,img:l}=t;return(0,c.jsx)(u,{style:s,children:(0,c.jsxs)(m,{children:[(0,c.jsx)(h,{src:l,alt:i}),(0,c.jsx)(x,{children:i}),(0,c.jsx)(p,{children:r}),(0,c.jsx)(g,{to:o.hb+"/"+n,children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438"})]})})},j=r.Ay.div`

  width: 102.5%;
  display: flex;
  ${(0,n.S)(90)}
  flex-wrap: wrap;

  @media (max-width: ${o.u3}){
    width: 105%;
  }
  
`;const w=function(){const e=d;return(0,c.jsx)(l.YW,{children:(0,c.jsxs)(l.BT,{children:[(0,c.jsx)(l.GH,{marginTop:90,children:"\u0412\u0441\u0435 \u043a\u0443\u0440\u0441\u044b"}),(0,c.jsx)(l.id,{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u043c\u0438\u0440 \u0410\u043a\u0430\u0434\u0435\u043c\u0438\u0438 \u0442\u0443\u0442 \u0441\u043d\u043e\u0432\u0430 \u0431\u0443\u0434\u0435\u0442 \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0435\u043a\u0441\u0442, \u043d\u043e \u043f\u043e\u043a\u0430 \u0447\u0442\u043e \u0442\u0430\u043a."}),(0,c.jsx)(j,{children:e.map((e=>(0,c.jsx)(f,{course:e})))})]})})}},4387:(e,t,s)=>{s.r(t),s.d(t,{CoursePageMenu:()=>Ee,default:()=>Te});var i=s(5043),r=s(2546),n=s(6935),l=s(9488),a=s(6123),o=s(579);const c=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.s,{children:[(0,o.jsx)(a.iT,{last:!1,children:"Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "}),(0,o.jsx)(a.iT,{last:!0,children:"Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "})]}),(0,o.jsxs)(a.s,{children:[(0,o.jsx)(a.P6,{children:"\u041e\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438"}),(0,o.jsx)(l.A,{skills:["sdfsdfsdf","sdfsdfs","ewrwerewer","cvbcvb"]})]})]})};var d=s(8738),u=s(3003),m=s(6403),h=s(5464),x=s(7630);const p=(0,h.Ay)(m.b)`
    width: 100%;
    align-self: start;
    
`,g=(0,h.Ay)(m.x$)`
    color: ${e=>e.isOpen?e.theme.colors.primary:e.theme.colors.text};
    transition: color .3s ease-in-out;
    ${(0,x.c)(36)}
`;function f(e){let{children:t,title:s}=e;const[r,n]=(0,i.useState)(!1),l=(0,i.useRef)(null),a=(0,i.useRef)(!0);(0,i.useEffect)((()=>{a.current?a.current=!1:(()=>{if(l.current){const e=l.current;if(r){const t=e.scrollHeight;e.style.height=t+"px",e.addEventListener("transitionend",(function t(){e.style.height="auto",e.removeEventListener("transitionend",t)}))}else e.style.height=e.scrollHeight+"px",window.requestAnimationFrame((()=>{window.requestAnimationFrame((()=>{e.style.height="0px"}))}))}})()}),[r]);return(0,o.jsxs)(m.$T,{children:[(0,o.jsx)(g,{isOpen:r,onClick:()=>{t&&n((e=>!e))},children:(0,o.jsx)("a",{children:s})}),(0,o.jsx)(p,{ref:l,height:0,children:(0,o.jsx)("div",{style:{marginTop:24},children:t})})]})}const j=function(e){let{items:t}=e;return(0,o.jsx)(m.YJ,{children:Object.keys(t).map((e=>(0,o.jsx)(f,{title:e,children:t[e]})))})};var w=s(1422),v=s(3825);const y=h.AH`
        text-transform: uppercase;
        font-weight: 600;
        user-select: none;
        ${(0,r.sl)(36,36,18)}
`,$=h.I4.div`
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    
    border-bottom: solid ${e=>e.theme.colors.text} 2px;
    border-top: ${e=>{let{borderTop:t,theme:s}=e;return t?"solid "+s.colors.text:"none"}} 2px;

    
`,b=h.I4.div`
    width: 100%;
    height: 16svh;
    cursor: pointer;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    position: relative;

    @media (max-width: ${w.Qh}){
        height: 10svh;
    }
`,A=h.I4.a`
${y}
flex-grow: 1;
${(0,r.sl)(24,24,10)}

`,C=h.I4.a`
position: absolute;
left: 25%;
flex-grow: 1;
${y}

@media (max-width: ${w.Qh}){
    left: 20%;
}
`,q=h.I4.a`
    ${y}
    justify-self: right;
`,k=h.I4.div`
    width: 100%;
    overflow: hidden;
    height: ${e=>{let{isOpen:t,height:s}=e;return t?s+"px":"0px"}};
    transition: height 0.3s ease-in-out;

`,L=h.I4.a`
    display: block;
    position: relative;
    width: 70%;
    left: 25%;
    text-align: justify;
    letter-spacing: -2%;
    ${(0,r.sl)(18,18,14)}
    ${(0,x.c)(45)}

@media (max-width: ${w.u3}){
    width: 60%;

}

@media (max-width: ${w.Qh}){
    width: 65%;
    left: 20%;
}
`,S=e=>{let{title:t,content:s,number:r}=e;const[n,l]=(0,i.useState)(!1),[a,c]=(0,i.useState)(0),d=(0,i.useRef)(null),u=()=>{if(d.current){const e=d.current.scrollHeight;c(n?e:0)}};(0,i.useEffect)((()=>(u(),window.addEventListener("resize",u),()=>{var e;null===(e=d.current)||void 0===e||e.removeEventListener("resize",u)})),[n]);const m=parseInt(r)-1===0,h=n?"90deg":"0";return(0,o.jsxs)($,{borderTop:m,children:[(0,o.jsxs)(b,{onClick:()=>{l(!n)},children:[(0,o.jsxs)(A,{children:[r,"/ \u041c\u043e\u0434\u0443\u043b\u044c"]}),(0,o.jsx)(C,{children:t}),(0,o.jsx)(q,{children:(0,o.jsx)(v.BJp,{style:{scale:"1.5",transform:`translateY(6%) rotate(${h})`,transition:"transform .2s ease-in-out"}})})]}),(0,o.jsx)(k,{isOpen:n,height:a,ref:d,children:(0,o.jsx)(L,{children:s})})]})},E=h.I4.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    ${(0,x.c)(45)}
`;function I(e){let{items:t}=e;const s=e=>(++e).toString().padStart(2,"0");return(0,o.jsx)(E,{children:t.map(((e,t)=>{let{title:i,content:r}=e;return(0,o.jsx)(S,{number:s(t),title:i,content:r},`acccordion-item-${t}`)}))})}const T=function(){return(0,o.jsx)(I,{items:[{number:"1",title:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d",content:"Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed."},{number:"1",title:"title",content:"sdfidjfighidfhidghdighdihiu"},{number:"1",title:"title",content:"sdfidjfighidfhidghdighdihiu"},{number:"1",title:"title",content:"sdfidjfighidfhidghdighdihiu"},{number:"1",title:"title",content:"sdfidjfighidfhidghdighdihiu"}]})},P=s.p+"static/media/mockMentorPhoto.24e96917b3decd574a36.png";var F=s(4569),Q=s(512);const B=h.Ay.img`
    width: 100%;
    object-fit: cover;
`,H=h.Ay.div`
    width: 60%;
    ${(0,x.c)(45)}

    @media (max-width: ${w.Qh}) {
        width: 100%;
    }
`,M=()=>{const e=F.Ay.useBreakpoint(),t=(0,o.jsx)(a.A$,{mentor:{name:"\u0420\u043e\u043c\u0430 cvpellv",occupation:"\u043f\u0440\u043e\u0434\u044e\u0441\u0441\u0435\u0440, \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442"}});return(0,o.jsx)(a.s,{style:{marginBottom:e.xs?0:void 0},children:(0,o.jsxs)("div",{style:{width:"88%",position:"relative",left:"50%",transform:"translateX(-50%)"},children:[!e.xs&&t,(0,o.jsx)(H,{children:(0,o.jsx)(B,{src:P})}),e.xs&&t,(0,o.jsx)(a.iT,{last:!1,children:"Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "}),(0,o.jsx)(a.iT,{last:!1,children:"Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "}),(0,o.jsx)(a.iT,{last:!0,children:"Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "})]})})};const O=function(){return F.Ay.useBreakpoint().xs?(0,o.jsx)(a.s,{style:{position:"relative",width:"100svw",left:"50%",transform:"translateX(-50%)"},children:(0,o.jsxs)(Q.A,{slidesToShow:1,childrenLength:3,dots:!0,children:[(0,o.jsx)(M,{}),(0,o.jsx)(M,{}),(0,o.jsx)(M,{})]})}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(M,{}),(0,o.jsx)(M,{}),(0,o.jsx)(M,{})]})},z=s.p+"static/media/sound.ffa6c455c8de5420e59f.mp3",R=s.p+"static/media/Casset.b31201a4a781ac572440.webp",W=s.p+"static/media/Casset2.9a5160aeb1eb56c8e92f.webp";var Y=s(1218),_=s(184);const D=[{name:"\u0418\u0440\u0438\u043d\u0430",review:z},{name:"\u0410\u043b\u0435\u043a\u0441\u0435\u0439",review:z},{name:"\u0418\u0440\u0430\u043a\u043b\u0438\u0439",review:z}],G=h.Ay.div`
    position: relative;
    width: 66%;
    ${(0,r.sl)(36,36,18)}
    ${(0,x.c)(90)}
    @media (max-width: ${w.Qh}){
      width: 100%;
    }
`,J=h.Ay.div`

cursor: pointer;
z-index: 1;
${(0,x.c)(45)}
img{
    width: 100%;
    object-fit: cover;
}
`,N=h.Ay.a`
  display: block;
  font-weight: 600;
  line-height: 1;
  color: ${e=>e.theme.colors.text};
  text-transform: uppercase;
  text-align: center;
`,X=h.Ay.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: ${e=>e.theme.colors.primary};

  ${(0,r.sl)(36,36,24)}

`,K=e=>{let{review:t,index:s}=e;const r=s%2===0?R:W,[n,l]=(0,i.useState)(!1),[a,c]=(0,i.useState)(!0),[d,u]=(0,Y.A)(t.review,{onload(){c(!1)}});return(0,i.useEffect)((()=>{n?d():u.pause()}),[n]),(0,i.useEffect)((()=>()=>{u.stop()})),(0,o.jsxs)(G,{children:[(0,o.jsxs)(J,{onClick:e=>(e.preventDefault(),e.stopPropagation(),l((e=>!e)),!1),children:[(0,o.jsx)(X,{children:n?(0,o.jsx)(_.wFo,{}):(0,o.jsx)(_.gSK,{})}),(0,o.jsx)("img",{src:r,alt:t.name})]}),(0,o.jsx)(N,{children:t.name})]})};const V=function(){const e=D;return(0,o.jsx)(o.Fragment,{children:e.map(((e,t)=>(0,o.jsx)(K,{review:e,index:t})))})},Z=s.p+"static/media/method.95609db3529183ac4489.gif",U=s.p+"static/media/mentors.b194333c99aad0aefc6c.gif",ee=s.p+"static/media/students.78586e538e762bcb3ca1.gif",te=[{title:"\u0410\u0432\u0442\u043e\u0440\u0441\u043a\u0430\u044f \u043c\u0435\u0442\u043e\u0434\u0438\u043a\u0430",gifSrc:Z},{title:"\u0423\u0432\u043b\u0435\u043a\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441",gifSrc:s.p+"static/media/interesting.7c3d67504f66a54e9d65.gif"},{title:"\u0434\u043e\u0432\u043e\u043b\u044c\u043d\u044b\u0435 \u0443\u0447\u0435\u043d\u0438\u043a\u0438",gifSrc:ee},{title:"\u041e\u043f\u044b\u0442\u043d\u044b\u0435 \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438",gifSrc:U}],se=h.Ay.a`
    display: block;
    color: ${e=>e.theme.colors.text};
    line-height: 1;
    font-weight: 600;
    ${(0,r.sl)(36,36,18)}
    ${(0,x.c)(45)}
    text-transform: uppercase;
`,ie=h.Ay.img`
    width: 70%;
    aspect-ratio: 16/10;
    object-fit: cover;
    ${(0,x.c)(90)}

    @media (max-width: ${w.Qh}){
        width: 100%;
    }
`,re=e=>{let{gif:t}=e;const{title:s,gifSrc:i}=t;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(se,{children:s}),(0,o.jsx)(ie,{src:i,alt:s})]})};const ne=function(){return(0,o.jsx)(o.Fragment,{children:te.map((e=>(0,o.jsx)(re,{gif:e})))})};var le=s(7532),ae=s(3659),oe=s(7110),ce=s(5975),de=s(229);const ue=h.Ay.div`
width: 100%;
display: flex;
flex-direction: column;
${(0,x.c)(90)}

`,me=h.AH`

font-weight: 500;

${(0,r.sl)(18,18,14)}
`,he=h.AH`
    background-color: rgba(235, 235, 235, 0.2);
    height: 3.9svw;
    border: none;
    color: rgba(235, 235, 235, 0.4);
    ${me}
    padding-left: 20px;

    &::placeholder{
        color: rgba(235, 235, 235, 0.4);
    }

    @media (max-width: ${w.u3}){

        height: 7.8svw;
}

@media (max-width: ${w.Qh}){
    height: 14.4svw;
}
`,xe=(0,h.Ay)(le.A)`
${he}
`,pe=h.Ay.span`
${me}
color: ${e=>e.theme.colors.text}
`,ge=h.Ay.div`
width: 100%;
display: flex;
justify-content: flex-end;
${(0,x.c)(45)}
a{
    display: block;
    width: 100%;
    text-transform: uppercase;
    font-weight: 600;
    user-select: none;
    color: ${e=>e.theme.colors.text};

    ${(0,r.sl)(36,36,18)}
}

@media (max-width: ${w.u3}){
    width: 85%;
}

@media (max-width: ${w.Qh}){
    width: 100%;
}

`,fe=h.Ay.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`,je=e=>{let{onFinish:t}=e;const[s]=(0,ce.A)(),[n,l]=(0,i.useState)(!1),a={color:"rgba(235, 235, 235, 0.4)",backgroundColor:"rgba(235, 235, 235, 0.2)",fontWeight:500};return(0,o.jsxs)(ue,{children:[(0,o.jsxs)(ae.A,{form:s,onFinish:t,children:[(0,o.jsx)(ae.A.Item,{name:"name",rules:[{required:!0,message:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0438\u043c\u044f"},{pattern:/^([\u0410-\u042f]{1}[\u0430-\u044f\u0451]{1,23}|[A-Z]{1}[a-z]{1,23})$/,message:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0438\u043c\u044f"}],children:(0,o.jsx)(xe,{styles:{input:a,affixWrapper:a},placeholder:"\u0418\u041c\u042f"})}),(0,o.jsx)(ae.A.Item,{name:"tel",rules:[{required:!0,message:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d"},{pattern:/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,message:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d"}],children:(0,o.jsx)(xe,{styles:{input:a},placeholder:"TEL"})}),(0,o.jsx)(ae.A.Item,{name:"mail",rules:[{required:!0,message:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443"},{type:"email",message:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430"}],children:(0,o.jsx)(xe,{styles:{input:a},placeholder:"EMAIL"})}),(0,o.jsx)(ae.A.Item,{name:"confirm",valuePropName:"checked",rules:[{validator:(e,t)=>t?Promise.resolve():Promise.reject(new Error("\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0434\u0430\u043d\u043d\u044b\u0445"))}],children:(0,o.jsx)(oe.A,{indeterminate:n,onChange:()=>l(!n),children:(0,o.jsx)(pe,{children:"\u044f \u0441\u043e\u0433\u043b\u0430\u0448\u0430\u044e\u0441\u044c \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0434\u0430\u043d\u043d\u044b\u0445"})})})]}),(0,o.jsx)(r.OO,{style:{alignSelf:"start",marginTop:"2svw"},hover:!0,onClick:()=>s.submit(),children:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"})]})},we=h.Ay.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
${(0,x.c)(90)}
`,ve=h.Ay.div`
width: 100%;
display: flex;
flex-wrap: wrap;
`,ye=h.Ay.div`
${r.lQ}
color: ${e=>{let{hover:t,theme:s}=e;return t?s.colors.secondary:s.colors.text}};
border: solid ${e=>{let{hover:t,theme:s}=e;return t?s.colors.primary:s.colors.text}};
margin-right: 2svw;
margin-bottom: 2svw;

@media(max-width: ${w.Qh}){
        font-size: 3.8svw;
        padding-top: 2svw;
        padding-bottom: 2svw;
        padding-right: 5svw;
        padding-left: 5svw;
        margin-right: 5svw;
        margin-bottom: 5svw;
    }
`,$e=h.Ay.a`
font-weight: 700;
color: ${e=>{let{theme:t}=e;return t.colors.text}};
text-transform: uppercase;
margin: 0;
${(0,r.sl)(148,148,64)}

span{
    ${(0,r.sl)(36,36,18)}
}
`,be=h.Ay.div`

    display: flex;
    
    a{
        display: block;
        text-transform: uppercase;
        ${me}
        color: ${e=>{let{theme:t}=e;return t.colors.text}};
        font-weight: 600;
        margin-right: 2svw;
    }

    @media (max-width: ${w.Qh}){
        flex-direction: column;
    }
`,Ae=e=>{let{tariff:t}=e;const s=t.installment?"\u20bd/<span>\u043c\u0435\u0441</span>":"\u20bd";return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)($e,{children:[t.price,(0,de.Ay)(s)]}),t.description&&(0,o.jsx)(be,{children:t.description.map((e=>(0,o.jsx)("a",{children:e})))})]})},Ce=e=>{let{priceList:t}=e;const[s,r]=(0,i.useState)(t[0].title);return(0,o.jsxs)(we,{children:[(0,o.jsx)(ve,{children:t.map((e=>(0,o.jsx)(ye,{onClick:()=>{return t=e.title,void r(t);var t},hover:s===e.title,children:e.title})))}),(0,o.jsx)(Ae,{tariff:(()=>{const e=t.findIndex((e=>e.title===s));return t[e]})()})]})};const qe=function(e){let{priceList:t}=e;return(0,o.jsxs)(fe,{children:[(0,o.jsx)(Ce,{priceList:t}),(0,o.jsx)(ge,{children:(0,o.jsx)("a",{children:"\u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435:"})}),(0,o.jsx)(je,{onFinish:e=>{alert("\u0422\u0438\u043f\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u0430\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0444\u043e\u0440\u043c\u044b"),e.tarriff="\u0442\u0430\u0440\u0438\u0444",console.log(e)}})]})};var ke=s(8993);const Le=(0,h.Ay)(ke.AllCoursesContainer)`
    margin-top: 0;
`;const Se=function(){const e=ke.mockCourses;return(0,o.jsx)(Le,{children:e.map((e=>(0,o.jsx)(ke.CourseCard,{course:e,containerStyle:{width:"50%"}})))})};let Ee=function(e){return e.aboutCourse="\u041e \u0447\u0435\u043c \u044d\u0442\u043e\u0442 \u043a\u0443\u0440\u0441",e.mentors="\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438",e.program="\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u043a\u0443\u0440\u0441\u0430",e.advantages="\u041f\u043e\u0447\u0435\u043c\u0443 \u043c\u044b",e.price="\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c",e.reviews="\u041e\u0442\u0437\u044b\u0432\u044b",e.allCourses="\u0412\u0441\u0435 \u043d\u0430\u0448\u0438 \u043a\u0443\u0440\u0441\u044b",e}({});const Ie=[{title:"\u041e\u043f\u043b\u0430\u0442\u0430 \u0441\u0440\u0430\u0437\u0443",price:49800,installment:!1},{title:"6 \u043c\u0435\u0441\u044f\u0446\u0435\u0432",price:8300,installment:!0,description:["\u0420\u0430\u0441\u0441\u0440\u043e\u0447\u043a\u0430 \u043d\u0430 6 \u043c\u0435\u0441\u044f\u0446\u0435\u0432","\u0431\u0435\u0437 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0432\u0437\u043d\u043e\u0441\u0430"]},{title:"12 \u043c\u0435\u0441\u044f\u0446\u0435\u0432",price:4150,installment:!0,description:["\u0420\u0430\u0441\u0441\u0440\u043e\u0447\u043a\u0430 \u043d\u0430 12 \u043c\u0435\u0441\u044f\u0446\u0435\u0432","\u0431\u0435\u0437 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0432\u0437\u043d\u043e\u0441\u0430"]},{title:"24 \u043c\u0435\u0441\u044f\u0446\u0430",price:2075,installment:!0,description:["\u0420\u0430\u0441\u0441\u0440\u043e\u0447\u043a\u0430 \u043d\u0430 24 \u043c\u0435\u0441\u044f\u0446\u0430","\u0431\u0435\u0437 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0432\u0437\u043d\u043e\u0441\u0430"]}];const Te=function(){const[e,t]=(0,i.useState)(void 0),[s,l]=(0,i.useState)(void 0),a=(0,i.useRef)(null),m={[Ee.aboutCourse]:(0,o.jsx)(c,{}),[Ee.mentors]:(0,o.jsx)(O,{}),[Ee.program]:(0,o.jsx)(T,{}),[Ee.advantages]:(0,o.jsx)(ne,{}),[Ee.price]:(0,o.jsx)(qe,{priceList:Ie}),[Ee.reviews]:(0,o.jsx)(V,{}),[Ee.allCourses]:(0,o.jsx)(Se,{})},h={items:Ee,setSelectedMenuItem:t,selectedMenuItem:e},x=(0,u.d4)((e=>e.orientation)).orientation;return(0,i.useEffect)((()=>{e&&a.current&&a.current.scrollIntoView()}),[e]),(0,o.jsx)(r.YW,{children:(0,o.jsx)(r.BT,{children:(0,o.jsxs)(n.CourseScrollableBlock,{children:[(0,o.jsxs)(n.CourseMenuContainer,{children:[(0,o.jsx)(r.GH,{marginTop:90,children:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e"}),(0,o.jsx)(n.CourseShortDescription,{children:"\u041a\u0443\u0440\u0441 \u043e \u0442\u043e\u043c \u043a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e \u0438 \u043e \u0447\u0435\u043c-\u043d\u0438\u0431\u0443\u0434\u044c \u0435\u0449\u0435"}),d.xl||d.Fr&&x.landscape?(0,o.jsx)(n.Menu,{setMarginTop:e=>{l(e)},...h}):(0,o.jsx)(j,{items:m})]}),(d.xl||d.Fr&&x.landscape)&&(0,o.jsx)(n.CourseScrollContainer,{ref:a,children:(0,o.jsx)(n.ScrollContent,{style:{marginTop:s},children:e&&m[e]})})]})})})}},3039:(e,t,s)=>{e.exports=s.p+"static/media/mockCourse.24dc3d84bcd89471ae6e.webp"}}]);
//# sourceMappingURL=533.d9a66b88.chunk.js.map