"use strict";(self.webpackChunkacademy_app=self.webpackChunkacademy_app||[]).push([[696],{782:(e,t,i)=>{i.d(t,{A:()=>f});var s=i(5043),n=i(5464),l=i(7630),r=i(3762),o=i(3002),a=i(2546),c=i(9150),d=i(8738),u=i(6403),h=i(1422),m=i(579);const p=n.Ay.div`
    width: 100%;
    display: flex;
    align-items: center;
    min-height: 50px;
    ${(0,l.c)(45)}
    ${(0,l.S)(36)}
`,x=n.Ay.div`
    flex-grow: 1;
`,g=n.Ay.div`
    width: 12%;
    aspect-ratio: 1/1;
    color: ${e=>e.theme.colors.text};
    display: flex;
    
    align-items: center;
    ${(0,a.sl)(72,72,36)}

    @media (max-width: ${h.u3}){
        width: 15%;
    }
`;const f=function(e){let{title:t,lesson:i,audio:l}=e;const a=(0,s.useRef)(null),[h,f]=(0,s.useState)(null),[w,j]=(0,s.useState)(!1),v=(0,n.DP)(),[y,$]=(0,s.useState)(!0);return(0,s.useEffect)((()=>{(async()=>{try{const e=await fetch(l),t=await e.blob();if(a.current&&!h){const e=r.A.create({container:a.current,waveColor:v.colors.text,progressColor:v.colors.primary,barGap:7,barWidth:5,barRadius:10,height:d.XF?40:55,cursorWidth:0});await e.loadBlob(t),f(e)}}catch(e){alert(e)}finally{$(!1)}})()}),[]),(0,m.jsxs)("div",{style:{width:"100%"},children:[t&&(0,m.jsx)(u.fH,{children:t}),i&&(0,m.jsx)(u.mE,{children:i}),(0,m.jsxs)(p,{children:[y?(0,m.jsx)(c.y,{}):(0,m.jsx)(g,{onClick:()=>{null===h||void 0===h||h.playPause(),j((e=>!e))},children:w?(0,m.jsx)(o.sXl,{}):(0,m.jsx)(o.mEc,{})}),(0,m.jsx)(x,{ref:a})]})]})}},6403:(e,t,i)=>{i.d(t,{Ay:()=>A,fH:()=>j,mE:()=>v});var s=i(5043),n=i(5464),l=i(2546),r=i(782),o=i(3825),a=i(7630),c=i(3322),d=i(7878),u=i(4777),h=i(5885),m=i(5514),p=i(579);const x=n.I4.div`
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;   
`,g=n.I4.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    position: relative;
    ${(0,l.sl)(36,36,16)}
    text-transform: uppercase;
    font-weight: 700;
    ${(0,a.c)(45)}

    a{
        user-select: none;
        display: block;
        width: 90%;
    }

    svg{
        scale: 1.5;
        transition: rotate .3s ease-in-out;
    }
`,f=n.I4.div`
    width: 90%;
    overflow: hidden;
    height: ${e=>{let{height:t}=e;return t+"px"}};
    transition: height .3s ease-in-out;
    align-self: end;
`,w=e=>{let{title:t,children:i,icon:n}=e;const[l,r]=(0,s.useState)(!1),[a,c]=(0,s.useState)(0),d=(0,s.useRef)(null),u=()=>{if(d.current){const e=d.current.getBoundingClientRect().height;c(l?e:0)}};(0,s.useEffect)((()=>(u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u))),[l]);return(0,p.jsxs)(x,{children:[(0,p.jsxs)(g,{onClick:()=>{i&&r(!l)},children:[n,(0,p.jsx)("a",{children:t}),(0,p.jsx)(o.BJp,{style:{position:"absolute",right:0,rotate:l?"90deg":"0deg",scale:"1"}})]}),(0,p.jsx)(f,{height:a,children:(0,p.jsx)("div",{style:{display:"inline-block",width:"100%"},ref:d,children:i})})]})},j=n.I4.a`
    ${(0,l.sl)(36,36,16)}
    text-transform: uppercase;
    font-weight: 700;
    display: block;
    line-height: 1;
    ${(0,a.c)(24)}
`,v=n.I4.a`
    ${(0,l.sl)(18,18,12)}
    text-transform: uppercase;
    font-weight: 500;
    display: block;
    line-height: 1;
    ${(0,a.c)(24)}
`,y=n.I4.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`,$={audio:[{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:m},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:m},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:m},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:m},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:m},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:m},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:m}],video:[{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",preview:h},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",preview:h},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",preview:h}],documents:[{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"}],patterns:[{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"}],links:[{title:"\u0421\u0441\u044b\u043b\u043a\u0430",link:"https://www.awwwards.com"}]};const A=function(){const e=$,t=(e,t)=>{const i=e%10,s=e%100;return 1===i&&11!==s?t[0]:i>=2&&i<=4&&(s<10||s>=20)?t[1]:t[2]};return(0,p.jsxs)(y,{children:[e.video&&(0,p.jsx)(w,{title:`${e.video.length} \u0432\u0438\u0434\u0435\u043e`,icon:(0,p.jsx)(o.SI,{}),children:e.video.map((e=>(0,p.jsx)(u.A,{...e})))}),e.audio&&(0,p.jsx)(w,{title:`${e.audio.length} \u0430\u0443\u0434\u0438\u043e`,icon:(0,p.jsx)(o.h12,{}),children:e.audio.map((e=>(0,p.jsx)(r.A,{...e})))}),e.documents&&(0,p.jsx)(w,{title:`${e.documents.length} ${t(e.documents.length,["\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442","\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430","\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432"])}`,icon:(0,p.jsx)(o.I6q,{}),children:e.documents.map((e=>(0,p.jsx)(c.A,{...e})))}),e.patterns&&(0,p.jsx)(w,{title:`${e.patterns.length} ${t(e.patterns.length,["\u0448\u0430\u0431\u043b\u043e\u043d","\u0448\u0430\u0431\u043b\u043e\u043d\u0430","\u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432"])}`,icon:(0,p.jsx)(o.gwM,{}),children:e.patterns.map((e=>(0,p.jsx)(c.A,{...e})))}),e.links&&(0,p.jsx)(w,{title:`${e.links.length} ${t(e.links.length,["\u0441\u0441\u044b\u043b\u043a\u0430","\u0441\u0441\u044b\u043b\u043a\u0438","\u0441\u0441\u044b\u043b\u043e\u043a"])}`,icon:(0,p.jsx)(o.bss,{}),children:e.links.map((e=>(0,p.jsx)(d.A,{...e})))})]})}},3322:(e,t,i)=>{i.d(t,{A:()=>g});var s=i(3825),n=i(5043),l=i(5464),r=i(7630),o=i(2546),a=i(9150),c=i(8738),d=i(6403),u=i(5475);const h=i.p+"static/media/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.9d876af8a48fe4da8e14.pdf";var m=i(1422),p=i(579);const x=(0,l.Ay)(u.N_)`
    width: 100%;
    display: flex;
    
    ${(0,r.c)(45)}
    text-decoration: none;
    color: ${e=>e.theme.colors.text};
    ${(0,o.sl)(84,84,39)}

    svg{
        margin-right: 24px;

        @media (max-width: ${m.Qh}){
            margin-right: 12px;
        }
            
    }

`;const g=function(e){let{title:t,link:i}=e;const[l,r]=(0,n.useState)(!0),[o,u]=(0,n.useState)({contentType:"File",contentLength:""});(0,n.useEffect)((()=>{(async function(e){const t=await fetch(e,{method:"HEAD"});return{contentType:t.headers.get("Content-Type"),contentLength:t.headers.get("Content-Length")}})(h).then((e=>{var t,i,s;const n=null!==(t=null===(i=e.contentType)||void 0===i?void 0:i.split("/")[1])&&void 0!==t?t:"FILE",l=(o=parseFloat(null!==(s=e.contentLength)&&void 0!==s?s:"0"))<1024?`${o} \u0411`:o<1048576?`${(o/1024).toFixed(1)} \u041a\u0411`:`${(o/1048576).toFixed(1)} \u041c\u0411`;var o;u({contentType:n,contentLength:l}),r(!1)}))}),[]);const m={marginRight:0};return l?(0,p.jsx)(a.y,{}):(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(x,{target:"_blank",to:i,children:[(0,p.jsx)(s.XTd,{}),(0,p.jsxs)("div",{style:{flexGrow:1},children:[(0,p.jsx)(d.fH,{children:t}),(0,p.jsx)(d.mE,{children:`${o.contentType}, ${o.contentLength}`})]}),c.xl?(0,p.jsx)(s.vY1,{style:m}):(0,p.jsx)(s.pfD,{style:m})]})})}},7878:(e,t,i)=>{i.d(t,{A:()=>h});i(5043);var s=i(5464),n=i(7630),l=i(2546),r=i(6403),o=i(5475),a=i(3825),c=i(1422),d=i(579);const u=(0,s.Ay)(o.N_)`
    width: 100%;
    display: flex;
    
    ${(0,n.c)(45)}
    text-decoration: none;
    color: ${e=>e.theme.colors.text};
    ${(0,l.sl)(84,84,40)}

    svg{
        margin-right: 24px;

        @media (max-width: ${c.Qh}){
            margin-right: 12px;
        }
            
    }
`;const h=function(e){let{title:t,link:i}=e;return(0,d.jsxs)(u,{target:"_blank",to:i,children:[(0,d.jsx)(a.bss,{}),(0,d.jsxs)("div",{children:[(0,d.jsx)(r.fH,{children:t}),(0,d.jsx)(r.mE,{children:i})]})]})}},4777:(e,t,i)=>{i.d(t,{A:()=>h,L:()=>d});i(5043);var s=i(5464),n=i(6403),l=i(7630),r=i(423),o=i(2546),a=i(579);const c=s.Ay.div`
    width: 100%;
    aspect-ratio: 11/6;
    position: relative;

    color: ${e=>e.theme.colors.secondary};
    ${(0,o.sl)(64,64,36)}
    cursor: pointer;
    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`,d=e=>{let{preview:t}=e;return(0,a.jsxs)(c,{onClick:()=>alert("\u0422\u0443\u0442 \u043f\u043e\u043f\u0430\u043f \u0441 \u043f\u043b\u0435\u0435\u0440\u043e\u043c?"),children:[(0,a.jsx)(r.i9t,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}),(0,a.jsx)("img",{src:t})]})},u=s.Ay.div`
    width: 100%;
    ${(0,l.c)(45)}
`;const h=function(e){let{preview:t,lesson:i,title:s}=e;return(0,a.jsxs)(u,{children:[(0,a.jsx)(n.fH,{children:s}),(0,a.jsx)(n.mE,{children:i}),(0,a.jsx)(d,{preview:t})]})}},7132:(e,t,i)=>{i.d(t,{Ay:()=>w,Rw:()=>g,iY:()=>p});i(5043);var s=i(5464),n=i(2546),l=i(7630),r=i(8738),o=i(579);const a=s.Ay.div`
  width: 100%;
  ${(0,l.c)(90)}
`,c=s.AH`
  color: ${e=>e.theme.colors.text};
  text-transform: uppercase;
  display: block;
`,d=s.Ay.a`
  ${(0,n.sl)(64,36,16)}
  ${c}
  ${(0,l.c)(24)}
  font-weight: 700;
  line-height: 1;
`,u=s.Ay.a`
  line-height: 1;
    ${(0,n.sl)(18,16,12)}
    ${c}
    font-weight: 600;
    ${(0,l.c)(45)}
`,h=s.Ay.div`
  display: flex;
  justify-content: space-between;
  ${(0,l.c)(45)}
`,m=s.Ay.div`
width: 55%;
`,p=s.Ay.a`
position: relative;
  ${c};
  text-transform: none;
  text-align: justify;
  ${(0,n.sl)(18,16,12)}
  ${e=>(0,l.c)(e.last?0:36)}
`,x=s.Ay.div`

  width: 43%;
  img{
    width: 100%;
    aspect-ratio: 35/39;
    object-fit: cover;
  }
`,g=e=>(++e).toString().padStart(2,"0");function f(e){let{module:t,index:i}=e;const s=g(i);return(0,o.jsxs)(a,{children:[(0,o.jsx)(d,{children:`${s}/\u043c\u043e\u0434\u0443\u043b\u044c`}),(0,o.jsx)(u,{children:t.title}),(0,o.jsxs)(h,{children:[(0,o.jsx)(x,{children:(0,o.jsx)("img",{alt:t.title,src:t.img})}),(0,o.jsx)(m,{children:r.Fr?(0,o.jsx)(p,{children:t.description[0]}):t.description.map(((e,t,i)=>(0,o.jsx)(p,{last:t===i.length-1,children:e})))})]}),(0,o.jsx)(n.CY,{hover:!0,to:`/mycourses/0/modules/${parseInt(s)}`,children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0443\u0440\u043e\u043a\u0430\u043c"})]})}const w=function(e){let{modules:t}=e;return(0,o.jsx)(o.Fragment,{children:t.map(((e,t)=>(0,o.jsx)(f,{module:e,index:t},e.title)))})}},6402:(e,t,i)=>{i.d(t,{A:()=>m});i(5043);var s=i(1422),n=i(5464),l=i(7630),r=i(2546),o=i(579);const a=n.Ay.div`
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
    ${(0,r.sl)(14,14,12)}

`;const m=function(e){let{lessons:t,finishedLessons:i,coursePageView:s}=e;const n=Math.round(i/t*100);return(0,o.jsxs)(a,{coursePageView:s,children:[(0,o.jsx)(d,{coursePageView:s,children:`\u0423\u0440\u043e\u043a ${i}/${t}`}),(0,o.jsx)(u,{progress:n}),(0,o.jsx)(h,{children:`${n}%`})]})}},8936:(e,t,i)=>{i.r(t),i.d(t,{default:()=>X});var s=i(5043),n=i(2546),l=i(5464),r=i(7630),o=i(1422),a=i(6402),c=i(3002),d=i(512),u=i(8738),h=i(579);const m=l.Ay.div`
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
`;const w=function(e){let{skills:t}=e;return t.length>=4?(0,h.jsx)(x,{children:(0,h.jsx)(d.A,{childrenLength:t.length,slidesToShow:4,infinite:u.Fr,children:t.map((e=>(0,h.jsx)(m,{children:(0,h.jsx)(p,{children:e})},e)))})}):(0,h.jsx)(g,{children:t.map((e=>(0,h.jsx)(f,{children:(0,h.jsx)(p,{children:e})},e)))})},j=l.AH`
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
    @media (max-width: ${o.Qh}){
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
    ${j};
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
`,E=e=>{let{mentor:t}=e;return(0,h.jsxs)(b,{children:[(0,h.jsx)(q,{children:(0,h.jsx)(c.i3Z,{})}),(0,h.jsxs)(k,{children:[(0,h.jsx)(L,{children:t.name}),(0,h.jsx)(S,{children:t.occupation})]})]})};const I=function(e){let{review:t}=e;const{reviewBlocks:i,content:s,skills:n,mentors:l}=t;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(v,{children:[(0,h.jsx)(y,{children:"\u041e \u0447\u0435\u043c \u044d\u0442\u043e\u0442 \u043a\u0443\u0440\u0441?"}),i.map(((e,t,i)=>(0,h.jsx)($,{last:t===i.length-1,children:e})))]}),(0,h.jsxs)(v,{children:[(0,h.jsx)(y,{children:"\u041e\u0431\u044a\u0435\u043c \u043a\u0443\u0440\u0441\u0430"}),(0,h.jsx)("ul",{style:{paddingLeft:20,margin:0},children:s.map(((e,t,i)=>(0,h.jsx)(A,{last:t===i.length-1,children:e})))})]}),(0,h.jsxs)(v,{children:[(0,h.jsx)(y,{children:"\u041e\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438"}),(0,h.jsx)(w,{skills:n})]}),(0,h.jsxs)(v,{children:[(0,h.jsx)(y,{children:"\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438"}),l.map((e=>(0,h.jsx)(E,{mentor:e})))]})]})};var P=i(7132),T=i(6403),C=i(3003);const F=i.p+"static/media/mockModule.287eb9837771d801fbe8.png",H=(0,l.Ay)(n.GH)`

`,M=(0,l.Ay)(n.id)`
  text-transform: uppercase;
  ${(0,r.c)(90)}
`,R=l.Ay.div`

  width: 100%;
  display: flex;


  @media (max-width: ${o.u3}) and (orientation: portrait){
    flex-direction: column;
    height: auto;
  }
`,Y=l.Ay.div`
width: 50%;
position: fixed;
display: flex;
flex-direction: column;
@media (max-width: ${o.u3}) and (orientation: portrait){
    position: static;
    width: 100%;
  }
`,Q=l.Ay.div`
  width: 50%;
  max-height: 100%;
  position: relative;
  margin-left: 50%;
  @media (max-width: ${o.u3}) and (orientation: portrait){
    margin-left: 0;
    max-height: none;
    width: 100%;
  }
`,V=l.Ay.div`
  //margin-top: 38svh;
  ${(0,r.S)(90)}
  width: 100%;
`,B=l.Ay.a`
  color: ${e=>e.selected?e.theme.colors.primary:e.theme.colors.text};
  ${(0,n.sl)(36,24,16)}
  ${(0,r.c)(36)}
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  line-height: 1;
  transition: color .1s ease-in-out;
  user-select: none;
`,_=l.Ay.div`
display: flex;
flex-direction: column;
@media (max-width: ${o.u3}) and (orientation: portrait){
  ${(0,r.S)(90)}
  flex-direction: row;
  justify-content: space-between;
}

`,z=e=>{const{selectedMenuItem:t,setSelectedMenuItem:i,items:n,setMarginTop:l}=e,r=(0,s.useRef)(null);return(0,s.useEffect)((()=>{if(r.current&&l){const e=r.current.getBoundingClientRect();l(e.top)}}),[]),(0,h.jsx)(_,{ref:r,children:n.map((e=>(0,h.jsx)(B,{onClick:()=>i(e),selected:e===t,children:e})))})},N=l.Ay.div`
${(0,r.S)(36)};
width: 130%;

@media (max-width: ${o.u3}) and (orientation: portrait){
  width: 75%;
}
`,W=l.Ay.div`
${(0,n.sl)(16,14,12)}
color: ${e=>e.theme.colors.text};
${(0,r.S)(24)}

`,D=l.Ay.div`
  ${(0,r.S)(90)}
  display: flex;

  @media (max-width: ${o.Qh}){
    ${(0,r.S)(45)}
    justify-content: center;
  }
`,G={review:{reviewBlocks:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed."],content:["10 \u0443\u0440\u043e\u043a\u043e\u0432","5 \u0447\u0430\u0441\u043e\u0432 50 \u043c\u0438\u043d\u0443\u0442","17 \u0433\u043e\u0442\u043e\u0432\u044b\u0445 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432"],skills:["\u0421\u0432\u0435\u0434\u0435\u043d\u0438\u0435","\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430","\u0421\u043e\u043d\u0433\u0440\u0430\u0439\u0442\u0438\u043d\u0433","\u043c\u0430\u0441\u0442\u0435\u0440\u0438\u043d\u0433"],mentors:[{name:"\u0420\u043e\u043c\u0430\u043d cvpellv",occupation:"\u043f\u0440\u043e\u0434\u044e\u0441\u0441\u0435\u0440, \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442"}]},modules:[{id:0,title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",img:F,description:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus.","Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "]},{id:0,title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",img:F,description:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus.","Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "]},{id:0,title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",img:F,description:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus.","Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "]}]};const X=function(){const[e,t]=(0,s.useState)(""),i=(0,C.d4)((e=>e.orientation)).orientation,[l,r]=(0,s.useState)(void 0),o=G,c={"\u043e\u0431\u0437\u043e\u0440":(0,h.jsx)(I,{review:o.review}),"\u043c\u043e\u0434\u0443\u043b\u0438":(0,h.jsx)(P.Ay,{modules:o.modules}),"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b":(0,h.jsx)(T.Ay,{})},d={items:["\u043e\u0431\u0437\u043e\u0440","\u043c\u043e\u0434\u0443\u043b\u0438","\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b"],setSelectedMenuItem:t,selectedMenuItem:e};return(0,h.jsx)(n.YW,{children:(0,h.jsx)(n.BT,{children:(0,h.jsxs)(R,{children:[(0,h.jsxs)(Y,{children:[(0,h.jsx)(H,{marginTop:90,children:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e"}),(0,h.jsx)(M,{children:"\u041e\u0442 \u0438\u0434\u0435\u0438 \u0434\u043e \u043f\u0440\u043e\u0434\u0430\u0436\u0438"}),i.landscape&&(0,h.jsx)(z,{setMarginTop:e=>{r(e)},...d}),(0,h.jsxs)(N,{children:[(0,h.jsx)(a.A,{coursePageView:!0,lessons:10,finishedLessons:3}),(0,h.jsx)(W,{children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u043e \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0443"})]}),(0,h.jsx)(D,{children:(0,h.jsx)(n.CY,{style:{width:u.Fr?"100%":void 0,textAlign:"center"},to:"/",hover:!0,children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435"})}),i.portrait&&(0,h.jsx)(z,{...d})]}),(0,h.jsx)(Q,{children:(0,h.jsx)(V,{style:{marginTop:l},children:c[e]})})]})})})}},9150:(e,t,i)=>{i.d(t,{y:()=>s});const s=i(5464).Ay.div`
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
`},512:(e,t,i)=>{i.d(t,{A:()=>g});var s=i(5043),n=i(2382),l=(i(4430),i(9078),i(5464)),r=i(7196),o=i(1422),a=i(8738),c=i(7109),d=i(579),u=function(e){return e[e.prev=0]="prev",e[e.next=1]="next",e}(u||{});const h=l.I4.div`
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
    
`);const g=function(e){let{children:t,slidesToShow:i,childrenLength:n,infinite:l}=e;const o=(0,s.useRef)(null),[g,f]=(0,s.useState)(0),w=null!==l&&void 0!==l?l:n>i,j={arrows:!1,slidesToScroll:1,infinite:w,dots:!1,slidesToShow:i,swipeToSlide:w,rows:1,beforeChange(e,t){f(t)}},v=()=>{var e;null===(e=o.current)||void 0===e||e.slickNext()},y=()=>{var e;null===(e=o.current)||void 0===e||e.slickPrev()},$=(0,c.uh)({onSwipedLeft:v,onSwipedRight:y});return(0,d.jsxs)(h,{...$,children:[w&&a.xl&&(0,d.jsxs)(p,{children:[(0,d.jsx)(m,{type:u.prev,onClick:y,children:(0,d.jsx)(r.WZN,{})}),(0,d.jsx)(m,{type:u.next,onClick:v,children:(0,d.jsx)(r.pjv,{})})]}),(0,d.jsx)(x,{ref:o,...j,children:t})]})}},5514:(e,t,i)=>{e.exports=i.p+"static/media/mon amour remix.acf311e8a7c06b14cda5.mp3"},5885:(e,t,i)=>{e.exports=i.p+"static/media/mockVideoPreview.b8ad3f8d4acdea8c0258.jpg"}}]);
//# sourceMappingURL=696.1479adab.chunk.js.map