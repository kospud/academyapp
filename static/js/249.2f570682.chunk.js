"use strict";(self.webpackChunkacademy_app=self.webpackChunkacademy_app||[]).push([[249],{6402:(e,t,i)=>{i.d(t,{A:()=>m});i(5043);var s=i(1422),n=i(5464),l=i(7630),r=i(2546),a=i(579);const o=n.Ay.div`
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

`;const m=function(e){let{lessons:t,finishedLessons:i,coursePageView:s}=e;const n=Math.round(i/t*100);return(0,a.jsxs)(o,{coursePageView:s,children:[(0,a.jsx)(d,{coursePageView:s,children:`\u0423\u0440\u043e\u043a ${i}/${t}`}),(0,a.jsx)(u,{progress:n}),(0,a.jsx)(h,{children:`${n}%`})]})}},4435:(e,t,i)=>{i.r(t),i.d(t,{default:()=>be});var s=i(5043),n=i(2546),l=i(5464),r=i(7630),a=i(1422),o=i(6402),c=i(3002),d=i(512),u=i(8738),h=i(579);const m=l.Ay.div`
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

@media (max-width: ${a.Qh}){
    width: 120%;
}
`,g=(0,l.Ay)(x)`
    display: flex;
`,f=l.Ay.div`
    width: 25%;
`;const j=function(e){let{skills:t}=e;return t.length>=4?(0,h.jsx)(x,{children:(0,h.jsx)(d.A,{childrenLength:t.length,slidesToShow:4,infinite:u.Fr,children:t.map((e=>(0,h.jsx)(m,{children:(0,h.jsx)(p,{children:e})},e)))})}):(0,h.jsx)(g,{children:t.map((e=>(0,h.jsx)(f,{children:(0,h.jsx)(p,{children:e})},e)))})},y=l.AH`
    ${(0,n.sl)(18,18,12)}
    color: ${e=>e.theme.colors.text};
    text-align: justify;
`,w=l.Ay.div`
width: 100%;
${(0,r.c)(90)}
`,v=l.Ay.h2`
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
    ${y}
    ${e=>(0,r.c)(e.last?0:24)}
    @media (max-width: ${a.Qh}){
        width: 100%;
    }
`,A=l.Ay.li`
    ${y}
    ${e=>(0,r.c)(e.last?0:24)}
    
`,k=l.Ay.div`
    display: flex;
    align-items: center;
    ${(0,r.c)(45)}

`,b=l.Ay.div`
    
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
    ${y};
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

    @media (max-width: ${a.Qh}){
        margin-right: 10px;
    }
`,I=e=>{let{mentor:t}=e;return(0,h.jsxs)(k,{children:[(0,h.jsx)(q,{children:(0,h.jsx)(c.i3Z,{})}),(0,h.jsxs)(b,{children:[(0,h.jsx)(L,{children:t.name}),(0,h.jsx)(S,{children:t.occupation})]})]})};const P=function(e){let{review:t}=e;const{reviewBlocks:i,content:s,skills:n,mentors:l}=t;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(w,{children:[(0,h.jsx)(v,{children:"\u041e \u0447\u0435\u043c \u044d\u0442\u043e\u0442 \u043a\u0443\u0440\u0441?"}),i.map(((e,t,i)=>(0,h.jsx)($,{last:t===i.length-1,children:e})))]}),(0,h.jsxs)(w,{children:[(0,h.jsx)(v,{children:"\u041e\u0431\u044a\u0435\u043c \u043a\u0443\u0440\u0441\u0430"}),(0,h.jsx)("ul",{style:{paddingLeft:20,margin:0},children:s.map(((e,t,i)=>(0,h.jsx)(A,{last:t===i.length-1,children:e})))})]}),(0,h.jsxs)(w,{children:[(0,h.jsx)(v,{children:"\u041e\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438"}),(0,h.jsx)(j,{skills:n})]}),(0,h.jsxs)(w,{children:[(0,h.jsx)(v,{children:"\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438"}),l.map((e=>(0,h.jsx)(I,{mentor:e})))]})]})},T=l.Ay.div`
  width: 100%;
  ${(0,r.c)(90)}
`,C=l.AH`
  color: ${e=>e.theme.colors.text};
  text-transform: uppercase;
  display: block;
`,E=l.Ay.a`
  ${(0,n.sl)(64,36,16)}
  ${C}
  ${(0,r.c)(24)}
  font-weight: 700;
  line-height: 1;
`,F=l.Ay.a`
  line-height: 1;
    ${(0,n.sl)(18,16,12)}
    ${C}
    font-weight: 600;
    ${(0,r.c)(45)}
`,M=l.Ay.div`
  display: flex;
  justify-content: space-between;
  ${(0,r.c)(45)}
`,V=l.Ay.div`
width: 55%;
`,Y=l.Ay.a`
position: relative;
  ${C};
  text-transform: none;
  text-align: justify;
  ${(0,n.sl)(18,16,12)}
  ${e=>(0,r.c)(e.last?0:36)}
`,H=l.Ay.div`

  width: 43%;
  img{
    width: 100%;
    aspect-ratio: 35/39;
    object-fit: cover;
  }
`;function Q(e){let{module:t,index:i}=e;return(0,h.jsxs)(T,{children:[(0,h.jsx)(E,{children:`${(e=>(++e).toString().padStart(2,"0"))(i)}/\u043c\u043e\u0434\u0443\u043b\u044c`}),(0,h.jsx)(F,{children:t.title}),(0,h.jsxs)(M,{children:[(0,h.jsx)(H,{children:(0,h.jsx)("img",{alt:t.title,src:t.img})}),(0,h.jsx)(V,{children:u.Fr?(0,h.jsx)(Y,{children:t.description[0]}):t.description.map(((e,t,i)=>(0,h.jsx)(Y,{last:t===i.length-1,children:e})))})]}),(0,h.jsx)(n.CY,{hover:!0,to:"/",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0443\u0440\u043e\u043a\u0430\u043c"})]})}const R=function(e){let{modules:t}=e;return(0,h.jsx)(h.Fragment,{children:t.map(((e,t)=>(0,h.jsx)(Q,{module:e,index:t},e.title)))})};var _=i(3762);const B=i.p+"static/media/mon amour remix.acf311e8a7c06b14cda5.mp3",N=l.Ay.div`
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
`,W=l.Ay.div`
    width: 100%;
    display: flex;
    align-items: center;
    ${(0,r.c)(45)}
`,X=l.Ay.div`
    flex-grow: 1;
`,z=l.Ay.div`
    width: 12%;
    aspect-ratio: 1/1;
    color: ${e=>e.theme.colors.text};
    display: flex;
    
    align-items: center;
    ${(0,n.sl)(72,72,36)}
`;const D=function(){const e=(0,s.useRef)(null),[t,i]=(0,s.useState)(null),[n,r]=(0,s.useState)(!1),[a,o]=(0,s.useState)({title:"\u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043d",artist:"\u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043d"}),d=(0,l.DP)(),[m,p]=(0,s.useState)(!0);return(0,s.useEffect)((()=>{(async()=>{try{const s=await fetch(B),n=await s.blob();if(e.current&&!t){const t=_.A.create({container:e.current,waveColor:d.colors.text,progressColor:d.colors.primary,barGap:7,barWidth:5,barRadius:5,height:u.XF?45:55,cursorWidth:0});await t.loadBlob(n),i(t)}}catch(s){console.log(s)}finally{p(!1)}})()}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(le,{children:"\u0414\u0435\u043c\u043e"}),(0,h.jsx)(re,{children:"\u041c\u043e\u0434\u0443\u043b\u044c 1/\u0443\u0440\u043e\u043a 3"}),(0,h.jsxs)(W,{children:[m?(0,h.jsx)(N,{}):(0,h.jsx)(z,{onClick:()=>{null===t||void 0===t||t.playPause(),r((e=>!e))},children:n?(0,h.jsx)(c.sXl,{}):(0,h.jsx)(c.mEc,{})}),(0,h.jsx)(X,{ref:e})]})]})};var G=i(3825),O=i(5475);const Z=i.p+"static/media/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.9d876af8a48fe4da8e14.pdf",J=(0,l.Ay)(O.N_)`
    width: 100%;
    display: flex;
    
    ${(0,r.c)(45)}
    text-decoration: none;
    color: ${e=>e.theme.colors.text};
    ${(0,n.sl)(84,84,39)}

`;const K=function(e){let{title:t,link:i}=e;const[n,l]=(0,s.useState)(!0),[r,a]=(0,s.useState)({contentType:"File",contentLength:""});return(0,s.useEffect)((()=>{(async function(e){const t=await fetch(e,{method:"HEAD"});return{contentType:t.headers.get("Content-Type"),contentLength:t.headers.get("Content-Length")}})(Z).then((e=>{var t,i,s;console.log(e);const n=null!==(t=null===(i=e.contentType)||void 0===i?void 0:i.split("/")[1])&&void 0!==t?t:"FILE",r=(o=parseFloat(null!==(s=e.contentLength)&&void 0!==s?s:"0"))<1024?`${o} \u0411`:o<1048576?`${(o/1024).toFixed(1)} \u041a\u0411`:`${(o/1048576).toFixed(1)} \u041c\u0411`;var o;a({contentType:n,contentLength:r}),l(!1)}))}),[]),n?(0,h.jsx)(N,{}):(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(J,{target:"_blank",to:i,children:[(0,h.jsx)(G.XTd,{}),(0,h.jsxs)("div",{children:[(0,h.jsx)(le,{children:t}),(0,h.jsx)(re,{children:`${r.contentType}, ${r.contentLength}`})]})]})})},U=(0,l.Ay)(O.N_)`
    width: 100%;
    display: flex;
    
    ${(0,r.c)(45)}
    text-decoration: none;
    color: ${e=>e.theme.colors.text};
    ${(0,n.sl)(84,84,40)}

`;const ee=function(e){let{title:t,link:i}=e;return(0,h.jsxs)(U,{target:"_blank",to:i,children:[(0,h.jsx)(G.bss,{}),(0,h.jsxs)("div",{children:[(0,h.jsx)(le,{children:t}),(0,h.jsx)(re,{children:i})]})]})},te=l.I4.div`
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;   
`,ie=l.I4.div`
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
`,se=l.I4.div`
    width: 90%;
    overflow: hidden;
     ${e=>{let{isOpen:t}=e;return!t&&"max-height: 0px"}};
    align-self: end;
`,ne=e=>{let{title:t,children:i,icon:n}=e;const[l,r]=(0,s.useState)(!1);return(0,h.jsxs)(te,{children:[(0,h.jsxs)(ie,{onClick:()=>{r(!l)},children:[n,(0,h.jsx)("a",{children:t})]}),(0,h.jsx)(se,{isOpen:l,children:i})]})},le=l.I4.a`
    ${(0,n.sl)(36,36,16)}
    text-transform: uppercase;
    font-weight: 700;
    display: block;
    line-height: 1;
    ${(0,r.c)(24)}
`,re=l.I4.a`
    ${(0,n.sl)(18,18,12)}
    text-transform: uppercase;
    font-weight: 500;
    display: block;
    line-height: 1;
    ${(0,r.c)(24)}
`,ae=l.I4.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`,oe={audio:[1,2,3,5,5,5,5,5,1],video:[],documents:[{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"}],patterns:[{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"}],links:[{title:"\u0421\u0441\u044b\u043b\u043a\u0430",link:"https://www.awwwards.com"}]};const ce=function(){const e=oe,t=(e,t)=>{const i=e%10,s=e%100;return 1===i&&11!==s?t[0]:i>=2&&i<=4&&(s<10||s>=20)?t[1]:t[2]};return(0,h.jsxs)(ae,{children:[e.video&&(0,h.jsx)(ne,{title:`${e.video.length} \u0432\u0438\u0434\u0435\u043e`,icon:(0,h.jsx)(G.SI,{})}),e.audio&&(0,h.jsx)(ne,{title:`${e.audio.length} \u0430\u0443\u0434\u0438\u043e`,icon:(0,h.jsx)(G.h12,{}),children:e.audio.map((()=>(0,h.jsx)(D,{})))}),e.documents&&(0,h.jsx)(ne,{title:`${e.documents.length} ${t(e.documents.length,["\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442","\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430","\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432"])}`,icon:(0,h.jsx)(G.I6q,{}),children:e.documents.map((e=>{let{title:t,link:i}=e;return(0,h.jsx)(K,{title:t,link:i})}))}),e.patterns&&(0,h.jsx)(ne,{title:`${e.patterns.length} ${t(e.patterns.length,["\u0448\u0430\u0431\u043b\u043e\u043d","\u0448\u0430\u0431\u043b\u043e\u043d\u0430","\u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432"])}`,icon:(0,h.jsx)(G.gwM,{}),children:e.patterns.map((e=>{let{title:t,link:i}=e;return(0,h.jsx)(K,{title:t,link:i})}))}),e.links&&(0,h.jsx)(ne,{title:`${e.links.length} ${t(e.links.length,["\u0441\u0441\u044b\u043b\u043a\u0430","\u0441\u0441\u044b\u043b\u043a\u0438","\u0441\u0441\u044b\u043b\u043e\u043a"])}`,icon:(0,h.jsx)(G.bss,{}),children:e.links.map((e=>(0,h.jsx)(ee,{title:e.title,link:e.link})))})]})};var de=i(3003);const ue=i.p+"static/media/mockModule.287eb9837771d801fbe8.png",he=(0,l.Ay)(n.GH)`

`,me=(0,l.Ay)(n.id)`
  text-transform: uppercase;
  ${(0,r.c)(90)}
`,pe=l.Ay.div`

  width: 100%;
  display: flex;


  @media (max-width: ${a.u3}) and (orientation: portrait){
    flex-direction: column;
    height: auto;
  }
`,xe=l.Ay.div`
width: 50%;
position: fixed;
display: flex;
flex-direction: column;
@media (max-width: ${a.u3}) and (orientation: portrait){
    position: static;
    width: 100%;
  }
`,ge=l.Ay.div`
  width: 50%;
  max-height: 100%;
  position: relative;
  margin-left: 50%;
  @media (max-width: ${a.u3}) and (orientation: portrait){
    margin-left: 0;
    max-height: none;
    width: 100%;
  }
`,fe=l.Ay.div`
  //margin-top: 38svh;
  ${(0,r.S)(90)}
  width: 100%;
`,je=l.Ay.a`
  color: ${e=>e.selected?e.theme.colors.primary:e.theme.colors.text};
  ${(0,n.sl)(36,24,16)}
  ${(0,r.c)(36)}
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  line-height: 1;
  transition: color .1s ease-in-out;
  user-select: none;
`,ye=l.Ay.div`
display: flex;
flex-direction: column;
@media (max-width: ${a.u3}) and (orientation: portrait){
  ${(0,r.S)(90)}
  flex-direction: row;
  justify-content: space-between;
}

`,we=e=>{const{selectedMenuItem:t,setSelectedMenuItem:i,items:n,setMarginTop:l}=e,r=(0,s.useRef)(null);return(0,s.useEffect)((()=>{if(r.current&&l){const e=r.current.getBoundingClientRect();l(e.top)}}),[]),(0,h.jsx)(ye,{ref:r,children:n.map((e=>(0,h.jsx)(je,{onClick:()=>i(e),selected:e===t,children:e})))})},ve=l.Ay.div`
${(0,r.S)(36)};
width: 150%;

@media (max-width: ${a.u3}) and (orientation: portrait){
  width: 75%;
}
`,$e=l.Ay.div`
${(0,n.sl)(16,14,12)}
color: ${e=>e.theme.colors.text};
${(0,r.S)(24)}

`,Ae=l.Ay.div`
  ${(0,r.S)(90)}
  display: flex;

  @media (max-width: ${a.Qh}){
    ${(0,r.S)(45)}
    justify-content: center;
  }
`,ke={review:{reviewBlocks:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed."],content:["10 \u0443\u0440\u043e\u043a\u043e\u0432","5 \u0447\u0430\u0441\u043e\u0432 50 \u043c\u0438\u043d\u0443\u0442","17 \u0433\u043e\u0442\u043e\u0432\u044b\u0445 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432"],skills:["\u0421\u0432\u0435\u0434\u0435\u043d\u0438\u0435","\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430","\u0421\u043e\u043d\u0433\u0440\u0430\u0439\u0442\u0438\u043d\u0433","\u043c\u0430\u0441\u0442\u0435\u0440\u0438\u043d\u0433"],mentors:[{name:"\u0420\u043e\u043c\u0430\u043d cvpellv",occupation:"\u043f\u0440\u043e\u0434\u044e\u0441\u0441\u0435\u0440, \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442"}]},modules:[{id:0,title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",img:ue,description:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus.","Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "]},{id:0,title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",img:ue,description:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus.","Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "]},{id:0,title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",img:ue,description:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus.","Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "]}]};const be=function(){const[e,t]=(0,s.useState)(""),i=(0,de.d4)((e=>e.orientation)).orientation,[l,r]=(0,s.useState)(void 0),a=ke,c={"\u043e\u0431\u0437\u043e\u0440":(0,h.jsx)(P,{review:a.review}),"\u043c\u043e\u0434\u0443\u043b\u0438":(0,h.jsx)(R,{modules:a.modules}),"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b":(0,h.jsx)(ce,{})},d={items:["\u043e\u0431\u0437\u043e\u0440","\u043c\u043e\u0434\u0443\u043b\u0438","\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b"],setSelectedMenuItem:t,selectedMenuItem:e};return(0,h.jsx)(n.YW,{children:(0,h.jsx)(n.BT,{children:(0,h.jsxs)(pe,{children:[(0,h.jsxs)(xe,{children:[(0,h.jsx)(he,{marginTop:90,children:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e"}),(0,h.jsx)(me,{children:"\u041e\u0442 \u0438\u0434\u0435\u0438 \u0434\u043e \u043f\u0440\u043e\u0434\u0430\u0436\u0438"}),i.landscape&&(0,h.jsx)(we,{setMarginTop:e=>{r(e)},...d}),(0,h.jsxs)(ve,{children:[(0,h.jsx)(o.A,{coursePageView:!0,lessons:10,finishedLessons:3}),(0,h.jsx)($e,{children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u043e \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0443"})]}),(0,h.jsx)(Ae,{children:(0,h.jsx)(n.CY,{to:"/",hover:!0,children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435"})}),i.portrait&&(0,h.jsx)(we,{...d})]}),(0,h.jsx)(ge,{children:(0,h.jsx)(fe,{style:{marginTop:l},children:c[e]})})]})})})}},512:(e,t,i)=>{i.d(t,{A:()=>g});var s=i(5043),n=i(2382),l=(i(4430),i(9078),i(5464)),r=i(7196),a=i(1422),o=i(8738),c=i(7109),d=i(579),u=function(e){return e[e.prev=0]="prev",e[e.next=1]="next",e}(u||{});const h=l.I4.div`
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

@media(max-width: ${a.u3}){
    width: 110%;
    
}

@media (max-width: ${a.Qh}) {
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
    
`);const g=function(e){let{children:t,slidesToShow:i,childrenLength:n,infinite:l}=e;const a=(0,s.useRef)(null),[g,f]=(0,s.useState)(0),j=null!==l&&void 0!==l?l:n>i,y={arrows:!1,slidesToScroll:1,infinite:j,dots:!1,slidesToShow:i,swipeToSlide:j,rows:1,beforeChange(e,t){f(t)}},w=()=>{var e;null===(e=a.current)||void 0===e||e.slickNext()},v=()=>{var e;null===(e=a.current)||void 0===e||e.slickPrev()},$=(0,c.uh)({onSwipedLeft:w,onSwipedRight:v});return(0,d.jsxs)(h,{...$,children:[j&&o.xl&&(0,d.jsxs)(p,{children:[(0,d.jsx)(m,{type:u.prev,onClick:v,children:(0,d.jsx)(r.WZN,{})}),(0,d.jsx)(m,{type:u.next,onClick:w,children:(0,d.jsx)(r.pjv,{})})]}),(0,d.jsx)(x,{ref:a,...y,children:t})]})}}}]);
//# sourceMappingURL=249.2f570682.chunk.js.map