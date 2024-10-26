"use strict";(self.webpackChunkacademy_app=self.webpackChunkacademy_app||[]).push([[533,993,613],{8993:(e,t,s)=>{s.r(t),s.d(t,{AllCoursesContainer:()=>w,CourseCard:()=>f,default:()=>j,mockCourses:()=>d});s(5043);var i=s(3039),r=s(5464),n=s(7630),l=s(2546),a=s(5475),c=s(1422),o=s(579);const d=[{id:0,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:i,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:1,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:i,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:2,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:i,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:3,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:i,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:0,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:i,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:1,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:i,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:2,title:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e",img:i,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"},{id:3,title:"\u041a\u0430\u043a \u0441\u0442\u0430\u0442\u044c \u0437\u0432\u0435\u0437\u0434\u043e\u0439",img:i,phrase:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d"}],u=r.Ay.div`
  width: 25%;
  min-width: 144px;

  ${(0,n.c)(90)}

  @media (max-width: ${c.u3}){
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
`,p=r.Ay.a`
  display: block;
  text-transform: uppercase;
  ${(0,l.sl)(36,36,16)}
  color: ${e=>e.theme.colors.text};
  line-height: 1;
  width: 90%;
  font-weight: 600;
  ${(0,n.c)(24)}
`,x=r.Ay.a`
  display: block;
  ${(0,l.sl)(18,18,12)}
  color: ${e=>e.theme.colors.text};
  line-height: 1;
  width: 90%;
  ${(0,n.c)(45)}
`,g=(0,r.Ay)(a.N_)`
  display: block;
  ${(0,l.sl)(18,18,12)}
  color: ${e=>e.theme.colors.text};
  line-height: 1;
  width: 90%;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
`,f=e=>{let{course:t,containerStyle:s}=e;const{title:i,phrase:r,id:n,img:l}=t;return(0,o.jsx)(u,{style:s,children:(0,o.jsxs)(m,{children:[(0,o.jsx)(h,{src:l,alt:i}),(0,o.jsx)(p,{children:i}),(0,o.jsx)(x,{children:r}),(0,o.jsx)(g,{to:c.hb+"/"+n,children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438"})]})})},w=r.Ay.div`

  width: 102.5%;
  display: flex;
  ${(0,n.S)(90)}
  flex-wrap: wrap;

  @media (max-width: ${c.u3}){
    width: 105%;
  }
  
`;const j=function(){const e=d;return(0,o.jsx)(l.YW,{children:(0,o.jsxs)(l.BT,{children:[(0,o.jsx)(l.GH,{marginTop:90,children:"\u0412\u0441\u0435 \u043a\u0443\u0440\u0441\u044b"}),(0,o.jsx)(l.id,{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u043c\u0438\u0440 \u0410\u043a\u0430\u0434\u0435\u043c\u0438\u0438 \u0442\u0443\u0442 \u0441\u043d\u043e\u0432\u0430 \u0431\u0443\u0434\u0435\u0442 \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0435\u043a\u0441\u0442, \u043d\u043e \u043f\u043e\u043a\u0430 \u0447\u0442\u043e \u0442\u0430\u043a."}),(0,o.jsx)(w,{children:e.map((e=>(0,o.jsx)(f,{course:e})))})]})})}},4387:(e,t,s)=>{s.r(t),s.d(t,{CoursePageMenu:()=>ke,default:()=>Ee});var i=s(5043),r=s(2546),n=s(6935),l=s(9488),a=s(6123),c=s(579);const o=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(a.s,{children:[(0,c.jsx)(a.iT,{last:!1,children:"Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "}),(0,c.jsx)(a.iT,{last:!0,children:"Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "})]}),(0,c.jsxs)(a.s,{children:[(0,c.jsx)(a.P6,{children:"\u041e\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438"}),(0,c.jsx)(l.A,{skills:["sdfsdfsdf","sdfsdfs","ewrwerewer","cvbcvb"]})]})]})};var d=s(8738),u=s(3003),m=s(6403),h=s(5464),p=s(7630);const x=(0,h.Ay)(m.b)`
    width: 100%;
    align-self: start;
    
`,g=(0,h.Ay)(m.x$)`
    color: ${e=>e.isOpen?e.theme.colors.primary:e.theme.colors.text};
    transition: color .3s ease-in-out;
    ${(0,p.c)(36)}
`;function f(e){let{children:t,title:s}=e;const[r,n]=(0,i.useState)(!1),l=(0,i.useRef)(null),a=(0,i.useRef)(!0),o=()=>{if(l.current){const e=l.current;if(r){const t=e.scrollHeight;e.style.height=t+"px",e.addEventListener("transitionend",(function t(){e.style.height="auto",e.removeEventListener("transitionend",t)}))}else e.style.height=e.scrollHeight+"px",window.requestAnimationFrame((()=>{window.requestAnimationFrame((()=>{e.style.height="0px"}))}))}};(0,i.useEffect)((()=>(window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)})),[]),(0,i.useEffect)((()=>{a.current?a.current=!1:o()}),[r]);return(0,c.jsxs)(m.$T,{children:[(0,c.jsx)(g,{isOpen:r,onClick:()=>{t&&n((e=>!e))},children:(0,c.jsx)("a",{children:s})}),(0,c.jsx)(x,{ref:l,height:0,children:(0,c.jsx)("div",{style:{marginTop:24},children:t})})]})}const w=function(e){let{items:t}=e;return(0,c.jsx)(m.YJ,{children:Object.keys(t).map((e=>(0,c.jsx)(f,{title:e,children:t[e]})))})};var j=s(1422),v=s(3825);const $=h.AH`
        text-transform: uppercase;
        font-weight: 600;
        user-select: none;
        ${(0,r.sl)(36,36,18)}
`,b=h.I4.div`
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    
    border-bottom: solid ${e=>e.theme.colors.text} 2px;
    border-top: ${e=>{let{borderTop:t,theme:s}=e;return t?"solid "+s.colors.text:"none"}} 2px;

    
`,y=h.I4.div`
    width: 100%;
    height: 16svh;
    cursor: pointer;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    position: relative;

    @media (max-width: ${j.Qh}){
        height: 10svh;
    }
`,A=h.I4.a`
${$}
flex-grow: 1;
${(0,r.sl)(24,24,10)}

`,C=h.I4.a`
position: absolute;
left: 25%;
flex-grow: 1;
${$}

@media (max-width: ${j.Qh}){
    left: 20%;
}
`,q=h.I4.a`
    ${$}
    justify-self: right;
`,L=h.I4.div`
    width: 100%;
    overflow: hidden;
    height: ${e=>{let{isOpen:t,height:s}=e;return t?s+"px":"0px"}};
    transition: height 0.3s ease-in-out;

`,k=h.I4.a`
    display: block;
    position: relative;
    width: 70%;
    left: 25%;
    text-align: justify;
    letter-spacing: -2%;
    ${(0,r.sl)(18,18,14)}
    ${(0,p.c)(45)}

@media (max-width: ${j.u3}){
    width: 60%;

}

@media (max-width: ${j.Qh}){
    width: 65%;
    left: 20%;
}
`,S=e=>{let{title:t,content:s,number:r}=e;const[n,l]=(0,i.useState)(!1),[a,o]=(0,i.useState)(0),d=(0,i.useRef)(null),u=()=>{if(d.current){const e=d.current.scrollHeight;o(n?e:0)}};(0,i.useEffect)((()=>(u(),window.addEventListener("resize",u),()=>{var e;null===(e=d.current)||void 0===e||e.removeEventListener("resize",u)})),[n]);const m=parseInt(r)-1===0,h=n?"90deg":"0";return(0,c.jsxs)(b,{borderTop:m,children:[(0,c.jsxs)(y,{onClick:()=>{l(!n)},children:[(0,c.jsxs)(A,{children:[r,"/\u041c\u043e\u0434\u0443\u043b\u044c"]}),(0,c.jsx)(C,{children:t}),(0,c.jsx)(q,{children:(0,c.jsx)(v.BJp,{style:{scale:"1.5",transform:`translateY(6%) rotate(${h})`,transition:"transform .2s ease-in-out"}})})]}),(0,c.jsx)(L,{isOpen:n,height:a,ref:d,children:(0,c.jsx)(k,{children:s})})]})},E=h.I4.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    ${(0,p.c)(45)}
`;function I(e){let{items:t}=e;const s=e=>(++e).toString().padStart(2,"0");return(0,c.jsx)(E,{children:t.map(((e,t)=>{let{title:i,content:r}=e;return(0,c.jsx)(S,{number:s(t),title:i,content:r},`acccordion-item-${t}`)}))})}const T=function(){return(0,c.jsx)(I,{items:[{number:"1",title:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d",content:"Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed."},{number:"1",title:"title",content:"sdfidjfighidfhidghdighdihiu"},{number:"1",title:"title",content:"sdfidjfighidfhidghdighdihiu"},{number:"1",title:"title",content:"sdfidjfighidfhidghdighdihiu"},{number:"1",title:"title",content:"sdfidjfighidfhidghdighdihiu"}]})},P=s.p+"static/media/mockMentorPhoto.24e96917b3decd574a36.png",z=h.Ay.img`
    width: 100%;
    object-fit: cover;
`,F=h.Ay.div`
    width: 60%;
    ${(0,p.c)(45)}
`,Q=()=>(0,c.jsxs)(a.s,{children:[(0,c.jsx)(a.A$,{mentor:{name:"\u0420\u043e\u043c\u0430 cvpellv",occupation:"\u043f\u0440\u043e\u0434\u044e\u0441\u0441\u0435\u0440, \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442"}}),(0,c.jsx)(F,{children:(0,c.jsx)(z,{src:P})}),(0,c.jsx)(a.iT,{last:!1,children:"Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "}),(0,c.jsx)(a.iT,{last:!1,children:"Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "}),(0,c.jsx)(a.iT,{last:!0,children:"Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "})]});const H=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(Q,{}),(0,c.jsx)(Q,{}),(0,c.jsx)(Q,{})]})},M=s.p+"static/media/sound.ffa6c455c8de5420e59f.mp3",O=s.p+"static/media/Casset.b31201a4a781ac572440.webp",B=s.p+"static/media/Casset2.9a5160aeb1eb56c8e92f.webp";var W=s(1218),Y=s(184);const R=[{name:"\u0418\u0440\u0438\u043d\u0430",review:M},{name:"\u0410\u043b\u0435\u043a\u0441\u0435\u0439",review:M},{name:"\u0418\u0440\u0430\u043a\u043b\u0438\u0439",review:M}],_=h.Ay.div`
    position: relative;
    width: 66%;
    ${(0,r.sl)(36,36,18)}
    ${(0,p.c)(90)}
    @media (max-width: ${j.Qh}){
      width: 100%;
    }
`,D=h.Ay.div`

cursor: pointer;
z-index: 1;
${(0,p.c)(45)}
img{
    width: 100%;
    object-fit: cover;
}
`,G=h.Ay.a`
  display: block;
  font-weight: 600;
  line-height: 1;
  color: ${e=>e.theme.colors.text};
  text-transform: uppercase;
  text-align: center;
`,J=h.Ay.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: ${e=>e.theme.colors.primary};

  ${(0,r.sl)(36,36,24)}

`,N=e=>{let{review:t,index:s}=e;const r=s%2===0?O:B,[n,l]=(0,i.useState)(!1),[a,o]=(0,i.useState)(!0),[d,u]=(0,W.A)(t.review,{onload(){o(!1)}});return(0,i.useEffect)((()=>{n?d():u.pause()}),[n]),(0,c.jsxs)(_,{children:[(0,c.jsxs)(D,{onClick:e=>(e.preventDefault(),e.stopPropagation(),l((e=>!e)),!1),children:[(0,c.jsx)(J,{children:n?(0,c.jsx)(Y.wFo,{}):(0,c.jsx)(Y.gSK,{})}),(0,c.jsx)("img",{src:r,alt:t.name})]}),(0,c.jsx)(G,{children:t.name})]})};const K=function(){const e=R;return(0,c.jsx)(c.Fragment,{children:e.map(((e,t)=>(0,c.jsx)(N,{review:e,index:t})))})},Z=s.p+"static/media/method.95609db3529183ac4489.gif",U=s.p+"static/media/mentors.b194333c99aad0aefc6c.gif",V=s.p+"static/media/students.78586e538e762bcb3ca1.gif",X=[{title:"\u0410\u0432\u0442\u043e\u0440\u0441\u043a\u0430\u044f \u043c\u0435\u0442\u043e\u0434\u0438\u043a\u0430",gifSrc:Z},{title:"\u0423\u0432\u043b\u0435\u043a\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441",gifSrc:s.p+"static/media/interesting.7c3d67504f66a54e9d65.gif"},{title:"\u0434\u043e\u0432\u043e\u043b\u044c\u043d\u044b\u0435 \u0443\u0447\u0435\u043d\u0438\u043a\u0438",gifSrc:V},{title:"\u041e\u043f\u044b\u0442\u043d\u044b\u0435 \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438",gifSrc:U}],ee=h.Ay.a`
    display: block;
    color: ${e=>e.theme.colors.text};
    line-height: 1;
    font-weight: 600;
    ${(0,r.sl)(36,36,18)}
    ${(0,p.c)(45)}
    text-transform: uppercase;
`,te=h.Ay.img`
    width: 70%;
    aspect-ratio: 16/10;
    object-fit: cover;
    ${(0,p.c)(90)}

    @media (max-width: ${j.Qh}){
        width: 100%;
    }
`,se=e=>{let{gif:t}=e;const{title:s,gifSrc:i}=t;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(ee,{children:s}),(0,c.jsx)(te,{src:i,alt:s})]})};const ie=function(){return(0,c.jsx)(c.Fragment,{children:X.map((e=>(0,c.jsx)(se,{gif:e})))})};var re=s(7532),ne=s(975),le=s(7110),ae=s(5975),ce=s(229);const oe=h.Ay.div`
width: 100%;
display: flex;
flex-direction: column;
${(0,p.c)(90)}

`,de=h.AH`

font-weight: 500;

${(0,r.sl)(18,18,14)}
`,ue=h.AH`
    background-color: rgba(235, 235, 235, 0.2);
    height: 3.9svw;
    border: none;
    color: rgba(235, 235, 235, 0.4);
    ${de}
    padding-left: 20px;

    &::placeholder{
        color: rgba(235, 235, 235, 0.4);
    }

    @media (max-width: ${j.u3}){

        height: 7.8svw;
}

@media (max-width: ${j.Qh}){
    height: 14.4svw;
}
`,me=(0,h.Ay)(re.A)`
${ue}
`,he=h.Ay.span`
${de}
color: ${e=>e.theme.colors.text}
`,pe=h.Ay.div`
width: 100%;
display: flex;
justify-content: flex-end;
${(0,p.c)(45)}
a{
    display: block;
    width: 100%;
    font-size: 1.8svw;
    text-transform: uppercase;
    font-weight: 600;
    user-select: none;
    color: ${e=>e.theme.colors.text};

    ${(0,r.sl)(36,36,18)}
}

@media (max-width: ${j.u3}){
    width: 85%;
}

@media (max-width: ${j.Qh}){
    width: 100%;
}

`,xe=h.Ay.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`,ge=e=>{let{onFinish:t}=e;const[s]=(0,ae.A)(),[n,l]=(0,i.useState)(!1),a={color:"rgba(235, 235, 235, 0.4)",backgroundColor:"rgba(235, 235, 235, 0.2)",fontWeight:500};return(0,c.jsxs)(oe,{children:[(0,c.jsxs)(ne.A,{form:s,onFinish:t,children:[(0,c.jsx)(ne.A.Item,{name:"name",rules:[{required:!0,message:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0438\u043c\u044f"},{pattern:/^([\u0410-\u042f]{1}[\u0430-\u044f\u0451]{1,23}|[A-Z]{1}[a-z]{1,23})$/,message:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0438\u043c\u044f"}],children:(0,c.jsx)(me,{styles:{input:a,affixWrapper:a},placeholder:"\u0418\u041c\u042f"})}),(0,c.jsx)(ne.A.Item,{name:"tel",rules:[{required:!0,message:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d"},{pattern:/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,message:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d"}],children:(0,c.jsx)(me,{styles:{input:a},placeholder:"TEL"})}),(0,c.jsx)(ne.A.Item,{name:"mail",rules:[{required:!0,message:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443"},{type:"email",message:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430"}],children:(0,c.jsx)(me,{styles:{input:a},placeholder:"EMAIL"})}),(0,c.jsx)(ne.A.Item,{name:"confirm",valuePropName:"checked",rules:[{validator:(e,t)=>t?Promise.resolve():Promise.reject(new Error("\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0434\u0430\u043d\u043d\u044b\u0445"))}],children:(0,c.jsx)(le.A,{indeterminate:n,onChange:()=>l(!n),children:(0,c.jsx)(he,{children:"\u044f \u0441\u043e\u0433\u043b\u0430\u0448\u0430\u044e\u0441\u044c \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0434\u0430\u043d\u043d\u044b\u0445"})})})]}),(0,c.jsx)(r.OO,{style:{alignSelf:"center",marginTop:"2svw"},hover:!0,onClick:()=>s.submit(),children:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"})]})},fe=h.Ay.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
${(0,p.c)(90)}
`,we=h.Ay.div`
width: 100%;
display: flex;
flex-wrap: wrap;
`,je=h.Ay.div`
${r.lQ}
color: ${e=>{let{hover:t}=e;return t?"rgba(22, 21, 21, 1)":"rgba(204, 51, 39, 1)"}};
margin-right: 2svw;
margin-bottom: 2svw;

@media(max-width: ${j.Qh}){
        font-size: 3.8svw;
        padding-top: 2svw;
        padding-bottom: 2svw;
        padding-right: 5svw;
        padding-left: 5svw;
        margin-right: 5svw;
        margin-bottom: 5svw;
    }
`,ve=h.Ay.a`
font-size: 7.7svw;
font-weight: 700;
color: #CC3327;
text-transform: uppercase;
margin: 0;
@media (max-width: ${j.u3}){
        font-size: 15.4svw;
    }
    @media (max-width: ${j.Qh}){
        font-size: 15.4svw;
    }

span{
        font-size: 1.8svw;

        @media (max-width: ${j.u3}){
            font-size: 3.7svw
        }

        @media (max-width: ${j.Qh}){
            font-size: 4.3svw;
        }
}
`,$e=h.Ay.div`

    display: flex;
    
    a{
        display: block;
        text-transform: uppercase;
        ${de}
        color: #CC3327; 
        font-weight: 600;
        margin-right: 2svw;
    }

    @media (max-width: ${j.Qh}){
        flex-direction: column;
    }
`,be=e=>{let{tariff:t}=e;const s=t.installment?"\u20bd/<span>\u043c\u0435\u0441</span>":"\u20bd";return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(ve,{children:[t.price,(0,ce.Ay)(s)]}),t.description&&(0,c.jsx)($e,{children:t.description.map((e=>(0,c.jsx)("a",{children:e})))})]})},ye=e=>{let{priceList:t}=e;const[s,r]=(0,i.useState)(t[0].title);return(0,c.jsxs)(fe,{children:[(0,c.jsx)(we,{children:t.map((e=>(0,c.jsx)(je,{onClick:()=>{return t=e.title,void r(t);var t},hover:s===e.title,children:e.title})))}),(0,c.jsx)(be,{tariff:(()=>{const e=t.findIndex((e=>e.title===s));return t[e]})()})]})};const Ae=function(e){let{priceList:t}=e;return(0,c.jsxs)(xe,{children:[(0,c.jsx)(ye,{priceList:t}),(0,c.jsx)(pe,{children:(0,c.jsx)("a",{children:"\u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435:"})}),(0,c.jsx)(ge,{onFinish:e=>{alert("\u0422\u0438\u043f\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u0430\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0444\u043e\u0440\u043c\u044b"),e.tarriff="\u0442\u0430\u0440\u0438\u0444",console.log(e)}})]})};var Ce=s(8993);const qe=(0,h.Ay)(Ce.AllCoursesContainer)`
    margin-top: 0;
`;const Le=function(){const e=Ce.mockCourses;return(0,c.jsx)(qe,{children:e.map((e=>(0,c.jsx)(Ce.CourseCard,{course:e,containerStyle:{width:"50%"}})))})};let ke=function(e){return e.aboutCourse="\u041e \u0447\u0435\u043c \u044d\u0442\u043e\u0442 \u043a\u0443\u0440\u0441",e.mentors="\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438",e.program="\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u043a\u0443\u0440\u0441\u0430",e.advantages="\u041f\u043e\u0447\u0435\u043c\u0443 \u043c\u044b",e.price="\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c",e.reviews="\u041e\u0442\u0437\u044b\u0432\u044b",e.allCourses="\u0412\u0441\u0435 \u043d\u0430\u0448\u0438 \u043a\u0443\u0440\u0441\u044b",e}({});const Se=[{title:"\u041e\u043f\u043b\u0430\u0442\u0430 \u0441\u0440\u0430\u0437\u0443",price:49800,installment:!1},{title:"6 \u043c\u0435\u0441\u044f\u0446\u0435\u0432",price:8300,installment:!0,description:["\u0420\u0430\u0441\u0441\u0440\u043e\u0447\u043a\u0430 \u043d\u0430 6 \u043c\u0435\u0441\u044f\u0446\u0435\u0432","\u0431\u0435\u0437 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0432\u0437\u043d\u043e\u0441\u0430"]},{title:"12 \u043c\u0435\u0441\u044f\u0446\u0435\u0432",price:4150,installment:!0,description:["\u0420\u0430\u0441\u0441\u0440\u043e\u0447\u043a\u0430 \u043d\u0430 12 \u043c\u0435\u0441\u044f\u0446\u0435\u0432","\u0431\u0435\u0437 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0432\u0437\u043d\u043e\u0441\u0430"]},{title:"24 \u043c\u0435\u0441\u044f\u0446\u0430",price:2075,installment:!0,description:["\u0420\u0430\u0441\u0441\u0440\u043e\u0447\u043a\u0430 \u043d\u0430 24 \u043c\u0435\u0441\u044f\u0446\u0430","\u0431\u0435\u0437 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0432\u0437\u043d\u043e\u0441\u0430"]}];const Ee=function(){const[e,t]=(0,i.useState)(void 0),[s,l]=(0,i.useState)(void 0),a={[ke.aboutCourse]:(0,c.jsx)(o,{}),[ke.mentors]:(0,c.jsx)(H,{}),[ke.program]:(0,c.jsx)(T,{}),[ke.advantages]:(0,c.jsx)(ie,{}),[ke.price]:(0,c.jsx)(Ae,{priceList:Se}),[ke.reviews]:(0,c.jsx)(K,{}),[ke.allCourses]:(0,c.jsx)(Le,{})},m={items:ke,setSelectedMenuItem:t,selectedMenuItem:e},h=(0,u.d4)((e=>e.orientation)).orientation;return(0,c.jsx)(r.YW,{children:(0,c.jsx)(r.BT,{children:(0,c.jsxs)(n.CourseScrollableBlock,{children:[(0,c.jsxs)(n.CourseMenuContainer,{children:[(0,c.jsx)(r.GH,{marginTop:90,children:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e"}),(0,c.jsx)(n.CourseShortDescription,{children:"\u041a\u0443\u0440\u0441 \u043e \u0442\u043e\u043c \u043a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e \u0438 \u043e \u0447\u0435\u043c-\u043d\u0438\u0431\u0443\u0434\u044c \u0435\u0449\u0435"}),d.xl||d.Fr&&h.landscape?(0,c.jsx)(n.Menu,{setMarginTop:e=>{l(e)},...m}):(0,c.jsx)(w,{items:a})]}),(d.xl||d.Fr&&h.landscape)&&(0,c.jsx)(n.CourseScrollContainer,{children:(0,c.jsx)(n.ScrollContent,{style:{marginTop:s},children:e&&a[e]})})]})})})}},3039:(e,t,s)=>{e.exports=s.p+"static/media/mockCourse.24dc3d84bcd89471ae6e.webp"}}]);
//# sourceMappingURL=533.41254e4b.chunk.js.map