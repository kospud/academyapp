"use strict";(self.webpackChunkacademy_app=self.webpackChunkacademy_app||[]).push([[579],{6402:(e,t,i)=>{i.d(t,{A:()=>m});i(5043);var s=i(1422),n=i(5464),l=i(7630),r=i(2546),o=i(579);const a=n.Ay.div`
width: 50%;
display: flex;
align-items: center;
${e=>(0,l.c)(e.coursePageView?0:45)}

@media (max-width: ${s.u3}){
    width: 100%;
}
`,c=n.AH`
    color: ${e=>e.theme.colors.text};
    text-transform: uppercase;
    line-height: 1;
`,d=n.Ay.a`
    display: block;
    ${e=>e.coursePageView?(0,r.sl)(36,24,16):(0,r.sl)(18,18,12)}
    ${e=>e.coursePageView&&"font-weight: 700"};
    ${c}
`,u=n.Ay.div`
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

    @media (max-width: ${s.Qh}){
        height: 3px;
    }
`,h=n.Ay.a`
    display: block;
    ${c}
    ${(0,r.sl)(14,14,8)}

`;const m=function(e){let{lessons:t,finishedLessons:i,coursePageView:s}=e;const n=Math.round(i/t*100);return(0,o.jsxs)(a,{coursePageView:s,children:[(0,o.jsx)(d,{coursePageView:s,children:`\u0423\u0440\u043e\u043a ${i}/${t}`}),(0,o.jsx)(u,{progress:n}),(0,o.jsx)(h,{children:`${n}%`})]})}},7478:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Ee});var s=i(5043),n=i(2546),l=i(5464),r=i(7630),o=i(1422),a=i(6402),c=i(3002),d=i(512),u=i(8738),h=i(579);const m=l.Ay.div`
width: 100%;
`,p=l.Ay.div`
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
`,x=l.Ay.div`
width: 100%;

@media (max-width: ${o.Qh}){
    width: 120%;
}
`,g=(0,l.Ay)(x)`
    display: flex;
`,f=l.Ay.div`
    width: 25%;
`;const j=function(e){let{skills:t}=e;return t.length>=4?(0,h.jsx)(x,{children:(0,h.jsx)(d.A,{childrenLength:t.length,slidesToShow:4,infinite:u.Fr,children:t.map((e=>(0,h.jsx)(m,{children:(0,h.jsx)(p,{children:e})},e)))})}):(0,h.jsx)(g,{children:t.map((e=>(0,h.jsx)(f,{children:(0,h.jsx)(p,{children:e})},e)))})},w=l.AH`
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
    ${w}
    ${e=>(0,r.c)(e.last?0:24)}
    @media (max-width: ${o.Qh}){
        width: 100%;
    }
`,A=l.Ay.li`
    ${w}
    ${e=>(0,r.c)(e.last?0:24)}
    
`,b=l.Ay.div`
    display: flex;
    align-items: center;
    ${(0,r.c)(45)}

`,k=l.Ay.div`
    
`,L=l.Ay.a`
display: block;
      ${(0,r.c)(24)}
    line-height: 1;
    ${(0,n.sl)(36,24,16)}
    font-weight: 800;
    text-transform: uppercase;
    color: ${e=>e.theme.colors.text};
`,S=l.Ay.a`
${(0,n.sl)(14,14,12)}
    ${w};
    text-transform: uppercase;
    line-height: 1;
    font-weight: 500;
`,q=l.Ay.div`
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

    @media (max-width: ${o.Qh}){
        margin-right: 10px;
    }
`,P=e=>{let{mentor:t}=e;return(0,h.jsxs)(b,{children:[(0,h.jsx)(q,{children:(0,h.jsx)(c.i3Z,{})}),(0,h.jsxs)(k,{children:[(0,h.jsx)(L,{children:t.name}),(0,h.jsx)(S,{children:t.occupation})]})]})};const I=function(e){let{review:t}=e;const{reviewBlocks:i,content:s,skills:n,mentors:l}=t;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(v,{children:[(0,h.jsx)(y,{children:"\u041e \u0447\u0435\u043c \u044d\u0442\u043e\u0442 \u043a\u0443\u0440\u0441?"}),i.map(((e,t,i)=>(0,h.jsx)($,{last:t===i.length-1,children:e})))]}),(0,h.jsxs)(v,{children:[(0,h.jsx)(y,{children:"\u041e\u0431\u044a\u0435\u043c \u043a\u0443\u0440\u0441\u0430"}),(0,h.jsx)("ul",{style:{paddingLeft:20,margin:0},children:s.map(((e,t,i)=>(0,h.jsx)(A,{last:t===i.length-1,children:e})))})]}),(0,h.jsxs)(v,{children:[(0,h.jsx)(y,{children:"\u041e\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438"}),(0,h.jsx)(j,{skills:n})]}),(0,h.jsxs)(v,{children:[(0,h.jsx)(y,{children:"\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438"}),l.map((e=>(0,h.jsx)(P,{mentor:e})))]})]})},E=l.Ay.div`
  width: 100%;
  ${(0,r.c)(90)}
`,T=l.AH`
  color: ${e=>e.theme.colors.text};
  text-transform: uppercase;
  display: block;
`,C=l.Ay.a`
  ${(0,n.sl)(64,36,16)}
  ${T}
  ${(0,r.c)(24)}
  font-weight: 700;
  line-height: 1;
`,F=l.Ay.a`
  line-height: 1;
    ${(0,n.sl)(18,16,12)}
    ${T}
    font-weight: 600;
    ${(0,r.c)(45)}
`,M=l.Ay.div`
  display: flex;
  justify-content: space-between;
  ${(0,r.c)(45)}
`,R=l.Ay.div`
width: 55%;
`,V=l.Ay.a`
position: relative;
  ${T};
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
`;function Y(e){let{module:t,index:i}=e;return(0,h.jsxs)(E,{children:[(0,h.jsx)(C,{children:`${(e=>(++e).toString().padStart(2,"0"))(i)}/\u043c\u043e\u0434\u0443\u043b\u044c`}),(0,h.jsx)(F,{children:t.title}),(0,h.jsxs)(M,{children:[(0,h.jsx)(B,{children:(0,h.jsx)("img",{alt:t.title,src:t.img})}),(0,h.jsx)(R,{children:u.Fr?(0,h.jsx)(V,{children:t.description[0]}):t.description.map(((e,t,i)=>(0,h.jsx)(V,{last:t===i.length-1,children:e})))})]}),(0,h.jsx)(n.CY,{hover:!0,to:"/",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0443\u0440\u043e\u043a\u0430\u043c"})]})}const H=function(e){let{modules:t}=e;return(0,h.jsx)(h.Fragment,{children:t.map(((e,t)=>(0,h.jsx)(Y,{module:e,index:t},e.title)))})};var Q=i(3762);const _=l.Ay.div`
    /* HTML: <div class="loader"></div> */
  width: 30px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid ${e=>e.theme.colors.text};
  animation:
    l20-1 0.8s infinite linear alternate,
    l20-2 1.6s infinite linear;

@keyframes l20-1{
   0%    {clip-path: polygon(50% 50%,0       0,  50%   0%,  50%    0%, 50%    0%, 50%    0%, 50%    0% )}
   12.5% {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100%   0%, 100%   0%, 100%   0% )}
   25%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 100% 100%, 100% 100% )}
   50%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
   62.5% {clip-path: polygon(50% 50%,100%    0, 100%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
   75%   {clip-path: polygon(50% 50%,100% 100%, 100% 100%,  100% 100%, 100% 100%, 50%  100%, 0%   100% )}
   100%  {clip-path: polygon(50% 50%,50%  100%,  50% 100%,   50% 100%,  50% 100%, 50%  100%, 0%   100% )}
}
@keyframes l20-2{ 
  0%    {transform:scaleY(1)  rotate(0deg)}
  49.99%{transform:scaleY(1)  rotate(135deg)}
  50%   {transform:scaleY(-1) rotate(0deg)}
  100%  {transform:scaleY(-1) rotate(-135deg)}
}
`,z=l.Ay.div`
    width: 100%;
    display: flex;
    align-items: center;
    ${(0,r.c)(45)}
    ${(0,r.S)(36)}
`,N=l.Ay.div`
    flex-grow: 1;
`,W=l.Ay.div`
    width: 12%;
    aspect-ratio: 1/1;
    color: ${e=>e.theme.colors.text};
    display: flex;
    
    align-items: center;
    ${(0,n.sl)(72,72,36)}

    @media (max-width: ${o.u3}){
        width: 15%;
    }
`;const X=function(e){let{title:t,lesson:i,audio:n}=e;const r=(0,s.useRef)(null),[o,a]=(0,s.useState)(null),[d,m]=(0,s.useState)(!1),p=(0,l.DP)(),[x,g]=(0,s.useState)(!0);return(0,s.useEffect)((()=>{(async()=>{try{const e=await fetch(n),t=await e.blob();if(r.current&&!o){const e=Q.A.create({container:r.current,waveColor:p.colors.text,progressColor:p.colors.primary,barGap:7,barWidth:5,barRadius:10,height:u.XF?40:55,cursorWidth:0});await e.loadBlob(t),a(e)}}catch(e){console.log(e)}finally{g(!1)}})()}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(ue,{children:t}),(0,h.jsx)(he,{children:i}),(0,h.jsxs)(z,{children:[x?(0,h.jsx)(_,{}):(0,h.jsx)(W,{onClick:()=>{null===o||void 0===o||o.playPause(),m((e=>!e))},children:d?(0,h.jsx)(c.sXl,{}):(0,h.jsx)(c.mEc,{})}),(0,h.jsx)(N,{ref:r})]})]})};var D=i(3825),G=i(5475);const Z=i.p+"static/media/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.9d876af8a48fe4da8e14.pdf",J=(0,l.Ay)(G.N_)`
    width: 100%;
    display: flex;
    
    ${(0,r.c)(45)}
    text-decoration: none;
    color: ${e=>e.theme.colors.text};
    ${(0,n.sl)(84,84,39)}

`;const K=function(e){let{title:t,link:i}=e;const[n,l]=(0,s.useState)(!0),[r,o]=(0,s.useState)({contentType:"File",contentLength:""});return(0,s.useEffect)((()=>{(async function(e){const t=await fetch(e,{method:"HEAD"});return{contentType:t.headers.get("Content-Type"),contentLength:t.headers.get("Content-Length")}})(Z).then((e=>{var t,i,s;console.log(e);const n=null!==(t=null===(i=e.contentType)||void 0===i?void 0:i.split("/")[1])&&void 0!==t?t:"FILE",r=(a=parseFloat(null!==(s=e.contentLength)&&void 0!==s?s:"0"))<1024?`${a} \u0411`:a<1048576?`${(a/1024).toFixed(1)} \u041a\u0411`:`${(a/1048576).toFixed(1)} \u041c\u0411`;var a;o({contentType:n,contentLength:r}),l(!1)}))}),[]),n?(0,h.jsx)(_,{}):(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(J,{target:"_blank",to:i,children:[(0,h.jsx)(D.XTd,{}),(0,h.jsxs)("div",{children:[(0,h.jsx)(ue,{children:t}),(0,h.jsx)(he,{children:`${r.contentType}, ${r.contentLength}`})]})]})})},O=(0,l.Ay)(G.N_)`
    width: 100%;
    display: flex;
    
    ${(0,r.c)(45)}
    text-decoration: none;
    color: ${e=>e.theme.colors.text};
    ${(0,n.sl)(84,84,40)}

`;const U=function(e){let{title:t,link:i}=e;return(0,h.jsxs)(O,{target:"_blank",to:i,children:[(0,h.jsx)(D.bss,{}),(0,h.jsxs)("div",{children:[(0,h.jsx)(ue,{children:t}),(0,h.jsx)(he,{children:i})]})]})};var ee=i(423);const te=l.Ay.div`
    width: 100%;
    aspect-ratio: 11/6;
    position: relative;

    color: ${e=>e.theme.colors.secondary};
    ${(0,n.sl)(64,64,36)}
    cursor: pointer;
    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`,ie=e=>{let{preview:t}=e;return(0,h.jsxs)(te,{onClick:()=>alert("\u0422\u0443\u0442 \u043f\u043e\u043f\u0430\u043f \u0441 \u043f\u043b\u0435\u0435\u0440\u043e\u043c?"),children:[(0,h.jsx)(ee.i9t,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}),(0,h.jsx)("img",{src:t})]})},se=l.Ay.div`
    width: 100%;
    ${(0,r.c)(45)}
`;const ne=function(e){let{preview:t,lesson:i,title:s}=e;return(0,h.jsxs)(se,{children:[(0,h.jsx)(ue,{children:s}),(0,h.jsx)(he,{children:i}),(0,h.jsx)(ie,{preview:t})]})},le=i.p+"static/media/mockVideoPreview.b8ad3f8d4acdea8c0258.jpg",re=i.p+"static/media/mon amour remix.acf311e8a7c06b14cda5.mp3",oe=l.I4.div`
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;   
`,ae=l.I4.div`
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
        transition: rotate .3s ease-in-out;
    }
`,ce=l.I4.div`
    width: 90%;
    overflow: hidden;
    height: ${e=>{let{height:t}=e;return t+"px"}};
    transition: height .3s ease-in-out;
    align-self: end;
`,de=e=>{let{title:t,children:i,icon:n}=e;const[l,r]=(0,s.useState)(!1),[o,a]=(0,s.useState)(0),c=(0,s.useRef)(null);(0,s.useEffect)((()=>{const e=()=>{if(c.current){const e=c.current.getBoundingClientRect().height;a(l?e:0)}};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[l]);return(0,h.jsxs)(oe,{children:[(0,h.jsxs)(ae,{onClick:()=>{i&&r(!l)},children:[n,(0,h.jsx)("a",{children:t}),(0,h.jsx)(D.BJp,{style:{position:"absolute",right:0,rotate:l?"90deg":"0deg",scale:"1"}})]}),(0,h.jsx)(ce,{height:o,children:(0,h.jsx)("div",{style:{display:"inline-block",width:"100%"},ref:c,children:i})})]})},ue=l.I4.a`
    ${(0,n.sl)(36,36,16)}
    text-transform: uppercase;
    font-weight: 700;
    display: block;
    line-height: 1;
    ${(0,r.c)(24)}
`,he=l.I4.a`
    ${(0,n.sl)(18,18,12)}
    text-transform: uppercase;
    font-weight: 500;
    display: block;
    line-height: 1;
    ${(0,r.c)(24)}
`,me=l.I4.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`,pe={audio:[{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:re},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:re},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:re},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:re},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:re},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:re},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:re}],video:[{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",preview:le},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",preview:le},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",preview:le}],documents:[{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"}],patterns:[{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"}],links:[{title:"\u0421\u0441\u044b\u043b\u043a\u0430",link:"https://www.awwwards.com"}]};const xe=function(){const e=pe,t=(e,t)=>{const i=e%10,s=e%100;return 1===i&&11!==s?t[0]:i>=2&&i<=4&&(s<10||s>=20)?t[1]:t[2]};return(0,h.jsxs)(me,{children:[e.video&&(0,h.jsx)(de,{title:`${e.video.length} \u0432\u0438\u0434\u0435\u043e`,icon:(0,h.jsx)(D.SI,{}),children:e.video.map((e=>(0,h.jsx)(ne,{...e})))}),e.audio&&(0,h.jsx)(de,{title:`${e.audio.length} \u0430\u0443\u0434\u0438\u043e`,icon:(0,h.jsx)(D.h12,{}),children:e.audio.map((e=>(0,h.jsx)(X,{...e})))}),e.documents&&(0,h.jsx)(de,{title:`${e.documents.length} ${t(e.documents.length,["\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442","\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430","\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432"])}`,icon:(0,h.jsx)(D.I6q,{}),children:e.documents.map((e=>(0,h.jsx)(K,{...e})))}),e.patterns&&(0,h.jsx)(de,{title:`${e.patterns.length} ${t(e.patterns.length,["\u0448\u0430\u0431\u043b\u043e\u043d","\u0448\u0430\u0431\u043b\u043e\u043d\u0430","\u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432"])}`,icon:(0,h.jsx)(D.gwM,{}),children:e.patterns.map((e=>(0,h.jsx)(K,{...e})))}),e.links&&(0,h.jsx)(de,{title:`${e.links.length} ${t(e.links.length,["\u0441\u0441\u044b\u043b\u043a\u0430","\u0441\u0441\u044b\u043b\u043a\u0438","\u0441\u0441\u044b\u043b\u043e\u043a"])}`,icon:(0,h.jsx)(D.bss,{}),children:e.links.map((e=>(0,h.jsx)(U,{...e})))})]})};var ge=i(3003);const fe=i.p+"static/media/mockModule.287eb9837771d801fbe8.png",je=(0,l.Ay)(n.GH)`

`,we=(0,l.Ay)(n.id)`
  text-transform: uppercase;
  ${(0,r.c)(90)}
`,ve=l.Ay.div`

  width: 100%;
  display: flex;


  @media (max-width: ${o.u3}) and (orientation: portrait){
    flex-direction: column;
    height: auto;
  }
`,ye=l.Ay.div`
width: 50%;
position: fixed;
display: flex;
flex-direction: column;
@media (max-width: ${o.u3}) and (orientation: portrait){
    position: static;
    width: 100%;
  }
`,$e=l.Ay.div`
  width: 50%;
  max-height: 100%;
  position: relative;
  margin-left: 50%;
  @media (max-width: ${o.u3}) and (orientation: portrait){
    margin-left: 0;
    max-height: none;
    width: 100%;
  }
`,Ae=l.Ay.div`
  //margin-top: 38svh;
  ${(0,r.S)(90)}
  width: 100%;
`,be=l.Ay.a`
  color: ${e=>e.selected?e.theme.colors.primary:e.theme.colors.text};
  ${(0,n.sl)(36,24,16)}
  ${(0,r.c)(36)}
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  line-height: 1;
  transition: color .1s ease-in-out;
  user-select: none;
`,ke=l.Ay.div`
display: flex;
flex-direction: column;
@media (max-width: ${o.u3}) and (orientation: portrait){
  ${(0,r.S)(90)}
  flex-direction: row;
  justify-content: space-between;
}

`,Le=e=>{const{selectedMenuItem:t,setSelectedMenuItem:i,items:n,setMarginTop:l}=e,r=(0,s.useRef)(null);return(0,s.useEffect)((()=>{if(r.current&&l){const e=r.current.getBoundingClientRect();l(e.top)}}),[]),(0,h.jsx)(ke,{ref:r,children:n.map((e=>(0,h.jsx)(be,{onClick:()=>i(e),selected:e===t,children:e})))})},Se=l.Ay.div`
${(0,r.S)(36)};
width: 130%;

@media (max-width: ${o.u3}) and (orientation: portrait){
  width: 75%;
}
`,qe=l.Ay.div`
${(0,n.sl)(16,14,12)}
color: ${e=>e.theme.colors.text};
${(0,r.S)(24)}

`,Pe=l.Ay.div`
  ${(0,r.S)(90)}
  display: flex;

  @media (max-width: ${o.Qh}){
    ${(0,r.S)(45)}
    justify-content: center;
  }
`,Ie={review:{reviewBlocks:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed."],content:["10 \u0443\u0440\u043e\u043a\u043e\u0432","5 \u0447\u0430\u0441\u043e\u0432 50 \u043c\u0438\u043d\u0443\u0442","17 \u0433\u043e\u0442\u043e\u0432\u044b\u0445 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432"],skills:["\u0421\u0432\u0435\u0434\u0435\u043d\u0438\u0435","\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430","\u0421\u043e\u043d\u0433\u0440\u0430\u0439\u0442\u0438\u043d\u0433","\u043c\u0430\u0441\u0442\u0435\u0440\u0438\u043d\u0433"],mentors:[{name:"\u0420\u043e\u043c\u0430\u043d cvpellv",occupation:"\u043f\u0440\u043e\u0434\u044e\u0441\u0441\u0435\u0440, \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442"}]},modules:[{id:0,title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",img:fe,description:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus.","Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "]},{id:0,title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",img:fe,description:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus.","Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "]},{id:0,title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",img:fe,description:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus.","Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "]}]};const Ee=function(){const[e,t]=(0,s.useState)(""),i=(0,ge.d4)((e=>e.orientation)).orientation,[l,r]=(0,s.useState)(void 0),o=Ie,c={"\u043e\u0431\u0437\u043e\u0440":(0,h.jsx)(I,{review:o.review}),"\u043c\u043e\u0434\u0443\u043b\u0438":(0,h.jsx)(H,{modules:o.modules}),"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b":(0,h.jsx)(xe,{})},d={items:["\u043e\u0431\u0437\u043e\u0440","\u043c\u043e\u0434\u0443\u043b\u0438","\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b"],setSelectedMenuItem:t,selectedMenuItem:e};return(0,h.jsx)(n.YW,{children:(0,h.jsx)(n.BT,{children:(0,h.jsxs)(ve,{children:[(0,h.jsxs)(ye,{children:[(0,h.jsx)(je,{marginTop:90,children:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e"}),(0,h.jsx)(we,{children:"\u041e\u0442 \u0438\u0434\u0435\u0438 \u0434\u043e \u043f\u0440\u043e\u0434\u0430\u0436\u0438"}),i.landscape&&(0,h.jsx)(Le,{setMarginTop:e=>{r(e)},...d}),(0,h.jsxs)(Se,{children:[(0,h.jsx)(a.A,{coursePageView:!0,lessons:10,finishedLessons:3}),(0,h.jsx)(qe,{children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u043e \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0443"})]}),(0,h.jsx)(Pe,{children:(0,h.jsx)(n.CY,{to:"/",hover:!0,children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435"})}),i.portrait&&(0,h.jsx)(Le,{...d})]}),(0,h.jsx)($e,{children:(0,h.jsx)(Ae,{style:{marginTop:l},children:c[e]})})]})})})}},512:(e,t,i)=>{i.d(t,{A:()=>g});var s=i(5043),n=i(2382),l=(i(4430),i(9078),i(5464)),r=i(7196),o=i(1422),a=i(8738),c=i(7109),d=i(579),u=function(e){return e[e.prev=0]="prev",e[e.next=1]="next",e}(u||{});const h=l.I4.div`
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
`,p=l.I4.div`
width: 87svw;
z-index: 1;
position: absolute;
top: 50%;
left: 0;
transform: translate(-5%,-50%);
display: flex;
justify-content: space-between;
pointer-events: none;

@media(max-width: ${o.u3}){
    width: 110%;
    
}

@media (max-width: ${o.Qh}) {
    width: 113%;
}
`,x=(l.I4.div`
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
    
`);const g=function(e){let{children:t,slidesToShow:i,childrenLength:n,infinite:l}=e;const o=(0,s.useRef)(null),[g,f]=(0,s.useState)(0),j=null!==l&&void 0!==l?l:n>i,w={arrows:!1,slidesToScroll:1,infinite:j,dots:!1,slidesToShow:i,swipeToSlide:j,rows:1,beforeChange(e,t){f(t)}},v=()=>{var e;null===(e=o.current)||void 0===e||e.slickNext()},y=()=>{var e;null===(e=o.current)||void 0===e||e.slickPrev()},$=(0,c.uh)({onSwipedLeft:v,onSwipedRight:y});return(0,d.jsxs)(h,{...$,children:[j&&a.xl&&(0,d.jsxs)(p,{children:[(0,d.jsx)(m,{type:u.prev,onClick:y,children:(0,d.jsx)(r.WZN,{})}),(0,d.jsx)(m,{type:u.next,onClick:v,children:(0,d.jsx)(r.pjv,{})})]}),(0,d.jsx)(x,{ref:o,...w,children:t})]})}}}]);
//# sourceMappingURL=579.35f313c5.chunk.js.map