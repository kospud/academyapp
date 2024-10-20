"use strict";(self.webpackChunkacademy_app=self.webpackChunkacademy_app||[]).push([[46,613],{5186:(e,t,s)=>{s.r(t),s.d(t,{CoursePageMenu:()=>F,default:()=>A});var i=s(5043),n=s(2546),r=s(6935),l=s(9488),a=s(6123),o=s(579);const d=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.s,{children:[(0,o.jsx)(a.iT,{last:!1,children:"Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "}),(0,o.jsx)(a.iT,{last:!0,children:"Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "})]}),(0,o.jsxs)(a.s,{children:[(0,o.jsx)(a.P6,{children:"\u041e\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438"}),(0,o.jsx)(l.A,{skills:["sdfsdfsdf","sdfsdfs","ewrwerewer","cvbcvb"]})]})]})};var u=s(8738),c=s(3003),h=s(6403),m=s(5464),f=s(7630);const g=(0,m.Ay)(h.b)`
    width: 100%;
    align-self: start;
`,x=(0,m.Ay)(h.x$)`
    color: ${e=>e.isOpen?e.theme.colors.primary:e.theme.colors.text};
    transition: color .3s ease-in-out;
    ${(0,f.c)(36)}
`;function p(e){let{children:t,title:s}=e;const[n,r]=(0,i.useState)(!1),[l,a]=(0,i.useState)(0),d=(0,i.useRef)(null),u=()=>{if(d.current){const e=d.current.getBoundingClientRect().height;console.log(e),a(n?e:0)}};(0,i.useEffect)((()=>(u(),window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u)})),[n]);return(0,o.jsxs)(h.$T,{children:[(0,o.jsx)(x,{isOpen:n,onClick:()=>{t&&r(!n)},children:(0,o.jsx)("a",{children:s})}),(0,o.jsx)(g,{height:l,children:(0,o.jsx)("div",{style:{display:"inline-block",width:"100%"},ref:d,children:t})})]})}const j=function(e){let{items:t}=e;return(0,o.jsx)(h.YJ,{children:Object.keys(t).map((e=>(0,o.jsx)(p,{title:e,children:t[e]})))})};var v=s(1422),w=s(3825);const b=m.AH`
        font-size: 1.8svw;
        text-transform: uppercase;
        font-weight: 600;
        user-select: none;

        @media (max-width: ${v.u3}){
            font-size: 3.7svw
        }

        @media (max-width: ${v.Qh}){
            font-size: 4.3svw;
        }
`,$=m.I4.div`
    width: 100%;
    //min-height: 10svh;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    border-bottom: solid rgba(204, 51, 39, 1) 2px;
    border-top: ${e=>{let{borderTop:t}=e;return t?"solid rgba(204, 51, 39, 1) 2px":"none"}};

    
`,y=m.I4.div`
    width: 100%;
    height: 16svh;
    cursor: pointer;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    position: relative;

    @media (max-width: ${v.Qh}){
        height: 10svh;
    }
`,C=m.I4.a`
${b}
flex-grow: 1;

@media (max-width: ${v.Qh}){
    font-size: 2.4svw;
}
`,k=m.I4.a`
position: absolute;
left: 30%;
flex-grow: 1;
${b}

@media (max-width: ${v.Qh}){
    left: 20%;
}
`,S=m.I4.a`
    margin-right: 2svw;
    ${b}
    justify-self: right;
`,z=m.I4.div`
    width: 100%;
    overflow: hidden;
    height: ${e=>{let{isOpen:t,height:s}=e;return t?s+"px":"0px"}};
    transition: height 0.3s ease-in-out;

`,I=m.I4.a`
display: block;
position: relative;
width: 35%;
left: 30%;
text-align: justify;
        letter-spacing: -2%;
        font-size: 0.9svw;
margin-bottom: 6.6svh;

@media (max-width: ${v.u3}){
    width: 60%;
    font-size: 1.8svw;
    margin-bottom: 9svh;
}

@media (max-width: ${v.Qh}){
    width: 60%;
    font-size: 3.7svw;
    left: 20%;
    margin-bottom: 4svh;
}
`,L=e=>{let{title:t,content:s,number:n}=e;const[r,l]=(0,i.useState)(!1),[a,d]=(0,i.useState)(0),u=(0,i.useRef)(null),c=()=>{if(u.current){const e=u.current.getBoundingClientRect().height;d(r?e:0)}};(0,i.useEffect)((()=>(c(),window.addEventListener("resize",c),()=>{var e;null===(e=u.current)||void 0===e||e.removeEventListener("resize",c)})),[r]);const h=parseInt(n)-1===0,m=r?"90deg":"0";return(0,o.jsxs)($,{borderTop:h,children:[(0,o.jsxs)(y,{onClick:()=>{l(!r)},children:[(0,o.jsxs)(C,{children:[n,"/\u041c\u043e\u0434\u0443\u043b\u044c"]}),(0,o.jsx)(k,{children:t}),(0,o.jsx)(S,{children:(0,o.jsx)(w.BJp,{style:{scale:"1.5",transform:`translateY(6%) rotate(${m})`,transition:"transform .2s ease-in-out"}})})]}),(0,o.jsx)(z,{isOpen:r,height:a,children:(0,o.jsx)("div",{style:{display:"inline-block",width:"100%"},ref:u,children:(0,o.jsx)(I,{children:s})})})]})},q=m.I4.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    ${(0,f.c)(45)}
`;function E(e){let{items:t}=e;const s=e=>(++e).toString().padStart(2,"0");return(0,o.jsx)(q,{children:t.map(((e,t)=>{let{title:i,content:n}=e;return(0,o.jsx)(L,{number:s(t),title:i,content:n},`acccordion-item-${t}`)}))})}const T=function(){return(0,o.jsx)(E,{items:[{number:"1",title:"title",content:"sdfidjfighidfhidghdighdihiu"},{number:"1",title:"title",content:"sdfidjfighidfhidghdighdihiu"},{number:"1",title:"title",content:"sdfidjfighidfhidghdighdihiu"},{number:"1",title:"title",content:"sdfidjfighidfhidghdighdihiu"},{number:"1",title:"title",content:"sdfidjfighidfhidghdighdihiu"}]})};let F=function(e){return e.aboutCourse="\u041e \u0447\u0435\u043c \u044d\u0442\u043e\u0442 \u043a\u0443\u0440\u0441",e.mentors="\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438",e.program="\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u043a\u0443\u0440\u0441\u0430",e.advantages="\u041f\u043e\u0447\u0435\u043c\u0443 \u043c\u044b",e.price="\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c",e.reviews="\u041e\u0442\u0437\u044b\u0432\u044b",e.allCourses="\u0412\u0441\u0435 \u043d\u0430\u0448\u0438 \u043a\u0443\u0440\u0441\u044b",e}({});const A=function(){const[e,t]=(0,i.useState)(void 0),[s,l]=(0,i.useState)(void 0),a={[F.aboutCourse]:(0,o.jsx)(d,{}),[F.mentors]:(0,o.jsx)(o.Fragment,{}),[F.program]:(0,o.jsx)(T,{}),[F.advantages]:(0,o.jsx)(o.Fragment,{}),[F.price]:(0,o.jsx)(o.Fragment,{}),[F.reviews]:(0,o.jsx)(o.Fragment,{}),[F.allCourses]:(0,o.jsx)(o.Fragment,{})},h={items:F,setSelectedMenuItem:t,selectedMenuItem:e},m=(0,c.d4)((e=>e.orientation)).orientation;return(0,o.jsx)(n.YW,{children:(0,o.jsx)(n.BT,{children:(0,o.jsxs)(r.CourseScrollableBlock,{children:[(0,o.jsxs)(r.CourseMenuContainer,{children:[(0,o.jsx)(n.GH,{marginTop:90,children:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e"}),(0,o.jsx)(r.CourseShortDescription,{children:"\u041a\u0443\u0440\u0441 \u043e \u0442\u043e\u043c \u043a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e \u0438 \u043e \u0447\u0435\u043c-\u043d\u0438\u0431\u0443\u0434\u044c \u0435\u0449\u0435"}),u.xl||u.Fr&&m.landscape?(0,o.jsx)(r.Menu,{setMarginTop:e=>{l(e)},...h}):(0,o.jsx)(j,{items:a})]}),(u.xl||u.Fr&&m.landscape)&&(0,o.jsx)(r.CourseScrollContainer,{children:(0,o.jsx)(r.ScrollContent,{style:{marginTop:s},children:e&&a[e]})})]})})})}}}]);
//# sourceMappingURL=46.dc7ab625.chunk.js.map