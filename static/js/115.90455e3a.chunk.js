"use strict";(self.webpackChunkacademy_app=self.webpackChunkacademy_app||[]).push([[115],{782:(e,t,s)=>{s.d(t,{A:()=>f});var i=s(5043),n=s(5464),l=s(7630),r=s(3762),o=s(3002),a=s(2546),c=s(9150),d=s(8738),u=s(6403),h=s(1422),m=s(579);const x=n.Ay.div`
    width: 100%;
    display: flex;
    align-items: center;
    min-height: 50px;
    ${(0,l.c)(45)}
    ${(0,l.S)(36)}
`,p=n.Ay.div`
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
`;const f=function(e){let{title:t,lesson:s,audio:l}=e;const a=(0,i.useRef)(null),[h,f]=(0,i.useState)(null),[v,w]=(0,i.useState)(!1),y=(0,n.DP)(),[j,$]=(0,i.useState)(!0);return(0,i.useEffect)((()=>{(async()=>{try{const e=await fetch(l),t=await e.blob();if(a.current&&!h){const e=r.A.create({container:a.current,waveColor:y.colors.text,progressColor:y.colors.primary,barGap:7,barWidth:5,barRadius:10,height:d.XF?40:55,cursorWidth:0});await e.loadBlob(t),e.on("finish",(()=>w(!1))),f(e)}}catch(e){alert(e)}finally{$(!1)}})()}),[]),(0,m.jsxs)("div",{style:{width:"100%"},children:[t&&(0,m.jsx)(u.fH,{children:t}),s&&(0,m.jsx)(u.mE,{children:s}),(0,m.jsxs)(x,{children:[j?(0,m.jsx)(c.y,{}):(0,m.jsx)(g,{onClick:()=>{null===h||void 0===h||h.playPause(),w((e=>!e))},children:v?(0,m.jsx)(o.sXl,{}):(0,m.jsx)(o.mEc,{})}),(0,m.jsx)(p,{ref:a})]})]})}},6403:(e,t,s)=>{s.d(t,{$T:()=>p,Ay:()=>A,YJ:()=>j,b:()=>f,fH:()=>w,mE:()=>y,x$:()=>g});var i=s(5043),n=s(5464),l=s(2546),r=s(782),o=s(3825),a=s(7630),c=s(3322),d=s(7878),u=s(4777),h=s(5885),m=s(5514),x=s(579);const p=n.I4.div`
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
    height: ${e=>{let{height:t}=e;return"string"===typeof t?t:t+"px"}};
    transition: height .3s ease-in-out;
    align-self: end;
`,v=e=>{let{title:t,children:s,icon:n}=e;const[l,r]=(0,i.useState)(!1),[a,c]=(0,i.useState)(0),d=(0,i.useRef)(null),u=()=>{if(d.current){const e=d.current.getBoundingClientRect().height;c(l?e:0)}};(0,i.useEffect)((()=>(u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u))),[l]);return(0,x.jsxs)(p,{children:[(0,x.jsxs)(g,{onClick:()=>{s&&r(!l)},children:[n,(0,x.jsx)("a",{children:t}),(0,x.jsx)(o.BJp,{style:{position:"absolute",right:0,rotate:l?"90deg":"0deg",scale:"1"}})]}),(0,x.jsx)(f,{height:a,children:(0,x.jsx)("div",{style:{display:"inline-block",width:"100%"},ref:d,children:s})})]})},w=n.I4.a`
    ${(0,l.sl)(36,36,16)}
    text-transform: uppercase;
    font-weight: 700;
    display: block;
    line-height: 1;
    ${(0,a.c)(24)}
`,y=n.I4.a`
    ${(0,l.sl)(18,18,12)}
    text-transform: uppercase;
    font-weight: 500;
    display: block;
    line-height: 1;
    ${(0,a.c)(24)}
`,j=n.I4.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    
`,$={audio:[{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:m},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:m},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:m},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:m},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:m},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:m},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:m}],video:[{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",preview:h},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",preview:h},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",preview:h}],documents:[{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"}],patterns:[{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"}],links:[{title:"\u0421\u0441\u044b\u043b\u043a\u0430",link:"https://www.awwwards.com"}]};const A=function(){const e=$,t=(e,t)=>{const s=e%10,i=e%100;return 1===s&&11!==i?t[0]:s>=2&&s<=4&&(i<10||i>=20)?t[1]:t[2]};return(0,x.jsxs)(j,{children:[e.video&&(0,x.jsx)(v,{title:`${e.video.length} \u0432\u0438\u0434\u0435\u043e`,icon:(0,x.jsx)(o.SI,{}),children:e.video.map((e=>(0,x.jsx)(u.A,{...e})))}),e.audio&&(0,x.jsx)(v,{title:`${e.audio.length} \u0430\u0443\u0434\u0438\u043e`,icon:(0,x.jsx)(o.h12,{}),children:e.audio.map((e=>(0,x.jsx)(r.A,{...e})))}),e.documents&&(0,x.jsx)(v,{title:`${e.documents.length} ${t(e.documents.length,["\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442","\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430","\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432"])}`,icon:(0,x.jsx)(o.I6q,{}),children:e.documents.map((e=>(0,x.jsx)(c.A,{...e})))}),e.patterns&&(0,x.jsx)(v,{title:`${e.patterns.length} ${t(e.patterns.length,["\u0448\u0430\u0431\u043b\u043e\u043d","\u0448\u0430\u0431\u043b\u043e\u043d\u0430","\u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432"])}`,icon:(0,x.jsx)(o.gwM,{}),children:e.patterns.map((e=>(0,x.jsx)(c.A,{...e})))}),e.links&&(0,x.jsx)(v,{title:`${e.links.length} ${t(e.links.length,["\u0441\u0441\u044b\u043b\u043a\u0430","\u0441\u0441\u044b\u043b\u043a\u0438","\u0441\u0441\u044b\u043b\u043e\u043a"])}`,icon:(0,x.jsx)(o.bss,{}),children:e.links.map((e=>(0,x.jsx)(d.A,{...e})))})]})}},3322:(e,t,s)=>{s.d(t,{A:()=>g});var i=s(3825),n=s(5043),l=s(5464),r=s(7630),o=s(2546),a=s(9150),c=s(8738),d=s(6403),u=s(5475);const h=s.p+"static/media/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.9d876af8a48fe4da8e14.pdf";var m=s(1422),x=s(579);const p=(0,l.Ay)(u.N_)`
    width: 100%;
    display: flex;
    
    ${(0,r.c)(45)}
    text-decoration: none;
    color: ${e=>e.theme.colors.text};
    ${(0,o.sl)(84,84,39)}
    ${o.oB}
    svg{
        margin-right: 24px;

        @media (max-width: ${m.Qh}){
            margin-right: 12px;
        }
            
    }

`;const g=function(e){let{title:t,link:s}=e;const[l,r]=(0,n.useState)(!0),[o,u]=(0,n.useState)({contentType:"File",contentLength:""});(0,n.useEffect)((()=>{(async function(e){const t=await fetch(e,{method:"HEAD"});return{contentType:t.headers.get("Content-Type"),contentLength:t.headers.get("Content-Length")}})(h).then((e=>{var t,s,i;const n=null!==(t=null===(s=e.contentType)||void 0===s?void 0:s.split("/")[1])&&void 0!==t?t:"FILE",l=(o=parseFloat(null!==(i=e.contentLength)&&void 0!==i?i:"0"))<1024?`${o} \u0411`:o<1048576?`${(o/1024).toFixed(1)} \u041a\u0411`:`${(o/1048576).toFixed(1)} \u041c\u0411`;var o;u({contentType:n,contentLength:l}),r(!1)}))}),[]);const m={marginRight:0};return l?(0,x.jsx)(a.y,{}):(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(p,{target:"_blank",to:s,children:[(0,x.jsx)(i.XTd,{}),(0,x.jsxs)("div",{style:{flexGrow:1},children:[(0,x.jsx)(d.fH,{children:t}),(0,x.jsx)(d.mE,{children:`${o.contentType}, ${o.contentLength}`})]}),c.xl?(0,x.jsx)(i.vY1,{style:m}):(0,x.jsx)(i.pfD,{style:m})]})})}},7878:(e,t,s)=>{s.d(t,{A:()=>h});s(5043);var i=s(5464),n=s(7630),l=s(2546),r=s(6403),o=s(5475),a=s(3825),c=s(1422),d=s(579);const u=(0,i.Ay)(o.N_)`
    width: 100%;
    display: flex;
    
    ${(0,n.c)(45)}
    text-decoration: none;
    color: ${e=>e.theme.colors.text};
    ${(0,l.sl)(84,84,40)}
    ${l.oB}
    svg{
        margin-right: 24px;

        @media (max-width: ${c.Qh}){
            margin-right: 12px;
        }
            
    }
`;const h=function(e){let{title:t,link:s}=e;return(0,d.jsxs)(u,{target:"_blank",to:s,children:[(0,d.jsx)(a.bss,{}),(0,d.jsxs)("div",{children:[(0,d.jsx)(r.fH,{children:t}),(0,d.jsx)(r.mE,{children:s})]})]})}},4777:(e,t,s)=>{s.d(t,{A:()=>h,L:()=>d});s(5043);var i=s(5464),n=s(6403),l=s(7630),r=s(423),o=s(2546),a=s(579);const c=i.Ay.div`
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
`,d=e=>{let{preview:t}=e;return(0,a.jsxs)(c,{onClick:()=>alert("\u0422\u0443\u0442 \u043f\u043e\u043f\u0430\u043f \u0441 \u043f\u043b\u0435\u0435\u0440\u043e\u043c?"),children:[(0,a.jsx)(r.i9t,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}),(0,a.jsx)("img",{src:t})]})},u=i.Ay.div`
    width: 100%;
    ${(0,l.c)(45)}
`;const h=function(e){let{preview:t,lesson:s,title:i}=e;return(0,a.jsxs)(u,{children:[(0,a.jsx)(n.fH,{children:i}),(0,a.jsx)(n.mE,{children:s}),(0,a.jsx)(d,{preview:t})]})}},7132:(e,t,s)=>{s.d(t,{Ay:()=>v,Rw:()=>g,iY:()=>x});s(5043);var i=s(5464),n=s(2546),l=s(7630),r=s(8738),o=s(579);const a=i.Ay.div`
  width: 100%;
  ${(0,l.c)(90)}
`,c=i.AH`
  color: ${e=>e.theme.colors.text};
  text-transform: uppercase;
  display: block;
`,d=i.Ay.a`
  ${(0,n.sl)(64,36,16)}
  ${c}
  ${(0,l.c)(24)}
  font-weight: 700;
  line-height: 1;
`,u=i.Ay.a`
  line-height: 1;
    ${(0,n.sl)(18,16,12)}
    ${c}
    font-weight: 600;
    ${(0,l.c)(45)}
`,h=i.Ay.div`
  display: flex;
  justify-content: space-between;
  ${(0,l.c)(45)}
`,m=i.Ay.div`
width: 55%;
`,x=i.Ay.a`
position: relative;
  ${c};
  text-transform: none;
  text-align: justify;
  ${(0,n.sl)(18,16,12)}
  ${e=>(0,l.c)(e.last?0:36)}
`,p=i.Ay.div`

  width: 43%;
  img{
    width: 100%;
    aspect-ratio: 35/39;
    object-fit: cover;
  }
`,g=e=>(++e).toString().padStart(2,"0");function f(e){let{module:t,index:s}=e;const i=g(s);return(0,o.jsxs)(a,{children:[(0,o.jsx)(d,{children:`${i}/ \u043c\u043e\u0434\u0443\u043b\u044c`}),(0,o.jsx)(u,{children:t.title}),(0,o.jsxs)(h,{children:[(0,o.jsx)(p,{children:(0,o.jsx)("img",{alt:t.title,src:t.img})}),(0,o.jsx)(m,{children:r.Fr?(0,o.jsx)(x,{children:t.description[0]}):t.description.map(((e,t,s)=>(0,o.jsx)(x,{last:t===s.length-1,children:e})))})]}),(0,o.jsx)(n.CY,{hover:!0,to:`/mycourses/0/modules/${parseInt(i)}`,children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0443\u0440\u043e\u043a\u0430\u043c"})]})}const v=function(e){let{modules:t}=e;return(0,o.jsx)(o.Fragment,{children:t.map(((e,t)=>(0,o.jsx)(f,{module:e,index:t},e.title)))})}},6402:(e,t,s)=>{s.d(t,{A:()=>m});s(5043);var i=s(1422),n=s(5464),l=s(7630),r=s(2546),o=s(579);const a=n.Ay.div`
width: 50%;
display: flex;
align-items: center;
${e=>(0,l.c)(e.coursePageView?0:45)}

@media (max-width: ${i.Qh}){
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

    @media (max-width: ${i.Qh}){
        height: 3px;
    }
`,h=n.Ay.a`
    display: block;
    ${c}
    ${(0,r.sl)(14,14,12)}

`;const m=function(e){let{lessons:t,finishedLessons:s,coursePageView:i}=e;const n=Math.round(s/t*100);return(0,o.jsxs)(a,{coursePageView:i,children:[(0,o.jsx)(d,{coursePageView:i,children:`\u0423\u0440\u043e\u043a ${s}/${t}`}),(0,o.jsx)(u,{progress:n}),(0,o.jsx)(h,{children:`${n}%`})]})}},6123:(e,t,s)=>{s.d(t,{A$:()=>y,Ay:()=>j,P6:()=>h,iT:()=>m,s:()=>u});s(5043);var i=s(5464),n=s(7630),l=s(2546),r=s(1422),o=s(3002),a=s(9488),c=s(579);const d=i.AH`
    ${(0,l.sl)(18,18,12)}
    color: ${e=>e.theme.colors.text};
    text-align: justify;
`,u=i.Ay.div`
width: 100%;
${(0,n.c)(90)}
`,h=i.Ay.h2`
    ${(0,n.S)(0)}
    ${(0,n.c)(45)}
    line-height: 1;
    ${(0,l.sl)(36,36,24)}
    font-weight: 600;
    text-transform: uppercase;
    color: ${e=>e.theme.colors.text};
`,m=i.Ay.p`
    display: block;
    width: 83%;
    ${d}
    ${e=>(0,n.c)(e.last?0:24)}
    @media (max-width: ${r.Qh}){
        width: 100%;
    }
`,x=i.Ay.li`
    ${d}
    ${e=>(0,n.c)(e.last?0:24)}
    
`,p=i.Ay.div`
    display: flex;
    align-items: center;
    ${(0,n.c)(45)}

`,g=i.Ay.div`
    
`,f=i.Ay.a`
display: block;
      ${(0,n.c)(24)}
    line-height: 1;
    ${(0,l.sl)(36,24,16)}
    font-weight: 600;
    text-transform: uppercase;
    color: ${e=>e.theme.colors.text};
`,v=i.Ay.a`
${(0,l.sl)(14,14,12)}
    ${d};
    text-transform: uppercase;
    line-height: 1;
    font-weight: 500;
`,w=i.Ay.div`
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

    @media (max-width: ${r.Qh}){
        margin-right: 10px;
    }
`,y=e=>{let{mentor:t}=e;return(0,c.jsxs)(p,{children:[(0,c.jsx)(w,{children:(0,c.jsx)(o.i3Z,{})}),(0,c.jsxs)(g,{children:[(0,c.jsx)(f,{children:t.name}),(0,c.jsx)(v,{children:t.occupation})]})]})};const j=function(e){let{review:t}=e;const{reviewBlocks:s,content:i,skills:n,mentors:l}=t;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(u,{children:[(0,c.jsx)(h,{children:"\u041e \u0447\u0435\u043c \u044d\u0442\u043e\u0442 \u043a\u0443\u0440\u0441?"}),s.map(((e,t,s)=>(0,c.jsx)(m,{last:t===s.length-1,children:e})))]}),(0,c.jsxs)(u,{children:[(0,c.jsx)(h,{children:"\u041e\u0431\u044a\u0435\u043c \u043a\u0443\u0440\u0441\u0430"}),(0,c.jsx)("ul",{style:{paddingLeft:20,margin:0},children:i.map(((e,t,s)=>(0,c.jsx)(x,{last:t===s.length-1,children:e})))})]}),(0,c.jsxs)(u,{children:[(0,c.jsx)(h,{children:"\u041e\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438"}),(0,c.jsx)(a.A,{skills:n})]}),(0,c.jsxs)(u,{children:[(0,c.jsx)(h,{children:"\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438"}),l.map((e=>(0,c.jsx)(y,{mentor:e})))]})]})}},6935:(e,t,s)=>{s.r(t),s.d(t,{CourseMenuContainer:()=>w,CourseScrollContainer:()=>y,CourseScrollableBlock:()=>v,CourseShortDescription:()=>f,Menu:()=>b,MenuContainer:()=>A,MenuItem:()=>$,ScrollContent:()=>j,default:()=>E});var i=s(5043),n=s(2546),l=s(5464),r=s(7630),o=s(1422),a=s(6402),c=s(6123),d=s(7132),u=s(6403),h=s(3003);const m=s.p+"static/media/mockModule.287eb9837771d801fbe8.png";var x=s(4569),p=s(579);const g=(0,l.Ay)(n.GH)`

`,f=(0,l.Ay)(n.id)`
  text-transform: uppercase;
  font-weight: 500;
  ${(0,r.c)(90)}
`,v=l.Ay.div`

  width: 100%;
  display: flex;


  @media (max-width: ${o.u3}) and (orientation: portrait){
    flex-direction: column;
    height: auto;
  }
`,w=l.Ay.div`
width: 40%;
position: fixed;
display: flex;
flex-direction: column;
@media (max-width: ${o.Qh}){
    position: static;
    width: 100%;
  }
`,y=l.Ay.div`
  width: 50%;
  max-height: 100%;
  position: relative;
  margin-left: 50%;
  @media (max-width: ${o.Qh}){
    margin-left: 0;
    max-height: none;
    width: 100%;
  }
`,j=l.Ay.div`
  //margin-top: 38svh;
  ${(0,r.S)(90)}
  width: 100%;
`,$=l.Ay.a`
  color: ${e=>e.selected?e.theme.colors.primary:e.theme.colors.text};
  ${(0,n.sl)(36,36,16)}
  ${(0,r.c)(36)}
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  line-height: 1;
  transition: color .1s ease-in-out;
  user-select: none;
  ${n.oB};
`,A=l.Ay.div`
display: flex;
flex-direction: column;
@media (max-width: ${o.Qh}){
  ${(0,r.S)(90)}
  flex-direction: row;
  justify-content: space-between;
}

`,b=e=>{const{selectedMenuItem:t,setSelectedMenuItem:s,items:n,setMarginTop:l}=e,r=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=()=>{if(r.current&&l){const e=r.current.getBoundingClientRect();l(e.top)}};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),(0,p.jsx)(A,{ref:r,children:Object.keys(n).map((e=>(0,p.jsx)($,{onClick:()=>s(n[e]),selected:n[e]===t,children:n[e]})))})},k=l.Ay.div`
${(0,r.S)(36)};
width: 130%;

@media (max-width: ${o.Qh}){
  width: 75%;
}
`,L=l.Ay.div`
${(0,n.sl)(16,14,12)}
color: ${e=>e.theme.colors.text};
${(0,r.S)(24)}

`,S=l.Ay.div`
  ${(0,r.S)(90)}
  display: flex;

  @media (max-width: ${o.Qh}){
    ${(0,r.S)(45)}
    justify-content: center;
  }
`,q={review:{reviewBlocks:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed."],content:["10 \u0443\u0440\u043e\u043a\u043e\u0432","5 \u0447\u0430\u0441\u043e\u0432 50 \u043c\u0438\u043d\u0443\u0442","17 \u0433\u043e\u0442\u043e\u0432\u044b\u0445 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432"],skills:["\u0421\u0432\u0435\u0434\u0435\u043d\u0438\u0435","\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430","\u0421\u043e\u043d\u0433\u0440\u0430\u0439\u0442\u0438\u043d\u0433","\u043c\u0430\u0441\u0442\u0435\u0440\u0438\u043d\u0433"],mentors:[{name:"\u0420\u043e\u043c\u0430\u043d cvpellv",occupation:"\u043f\u0440\u043e\u0434\u044e\u0441\u0441\u0435\u0440, \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442"}]},modules:[{id:0,title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",img:m,description:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus.","Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "]},{id:0,title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",img:m,description:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus.","Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "]},{id:0,title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",img:m,description:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus.","Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. "]}]};var C=function(e){return e.review="\u041e\u0431\u0437\u043e\u0440",e.modules="\u041c\u043e\u0434\u0443\u043b\u0438",e.content="\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b",e}(C||{});const E=function(){const[e,t]=(0,i.useState)(void 0),[s,l]=((0,h.d4)((e=>e.orientation)).orientation,(0,i.useState)(void 0)),r=x.Ay.useBreakpoint(),o=q,m={[C.review]:(0,p.jsx)(c.Ay,{review:o.review}),[C.modules]:(0,p.jsx)(d.Ay,{modules:o.modules}),[C.content]:(0,p.jsx)(u.Ay,{})};console.log(m);const $={items:C,setSelectedMenuItem:t,selectedMenuItem:e};return(0,p.jsx)(n.YW,{children:(0,p.jsx)(n.BT,{children:(0,p.jsxs)(v,{children:[(0,p.jsxs)(w,{children:[(0,p.jsx)(g,{marginTop:90,children:"\u041a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u044e"}),(0,p.jsx)(f,{children:"\u041e\u0442 \u0438\u0434\u0435\u0438 \u0434\u043e \u043f\u0440\u043e\u0434\u0430\u0436\u0438"}),!r.xs&&(0,p.jsx)(b,{setMarginTop:e=>{l(e)},...$}),(0,p.jsxs)(k,{children:[(0,p.jsx)(a.A,{coursePageView:!0,lessons:10,finishedLessons:3}),(0,p.jsx)(L,{children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u043e \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0443"})]}),(0,p.jsx)(S,{children:(0,p.jsx)(n.CY,{style:{width:r.xs?"100%":void 0,textAlign:"center"},to:"/",hover:!0,children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435"})}),r.xs&&(0,p.jsx)(b,{...$})]}),(0,p.jsx)(y,{children:(0,p.jsx)(j,{style:{marginTop:r.xs?void 0:s},children:e&&m[e]})})]})})})}},9488:(e,t,s)=>{s.d(t,{A:()=>x});s(5043);var i=s(5464),n=s(512),l=s(8738),r=s(2546),o=s(1422),a=s(579);const c=i.Ay.div`
width: 100%;
`,d=i.Ay.div`
    display: block;
    width: 90%;
    aspect-ratio: 1/1;
    border: solid ${e=>e.theme.colors.text};
    border-radius: 10px;
    ${(0,r.sl)(18,18,12)};
    color: ${e=>e.theme.colors.text};
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
`,u=i.Ay.div`
width: 100%;

@media (max-width: ${o.Qh}){
    width: 120%;
}
`,h=(0,i.Ay)(u)`
    display: flex;
`,m=i.Ay.div`
    width: 25%;
`;const x=function(e){let{skills:t}=e;return t.length>=4?(0,a.jsx)(u,{children:(0,a.jsx)(n.A,{childrenLength:t.length,slidesToShow:4,infinite:l.Fr,children:t.map((e=>(0,a.jsx)(c,{children:(0,a.jsx)(d,{children:e})},e)))})}):(0,a.jsx)(h,{children:t.map((e=>(0,a.jsx)(m,{children:(0,a.jsx)(d,{children:e})},e)))})}},9150:(e,t,s)=>{s.d(t,{y:()=>i});const i=s(5464).Ay.div`
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
`},512:(e,t,s)=>{s.d(t,{A:()=>v});var i=s(5043),n=s(2382),l=(s(4430),s(9078),s(5464)),r=s(7196),o=s(1422),a=s(8738),c=s(7109),d=s(579),u=function(e){return e[e.prev=0]="prev",e[e.next=1]="next",e}(u||{});const h=l.I4.div`
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

@media(max-width: ${o.u3}){
    width: 110%;
    
}

@media (max-width: ${o.Qh}) {
    width: 113%;
}
`,p=l.I4.div`
    width: 100%;
    display: flex;
    justify-content: center;

`,g=l.I4.div`
    width: 10px;
    aspect-ratio: 1/1;
    background-color: red;
    opacity: ${e=>{let{selected:t}=e;return t?"0.5":"1"}};
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 4px;
    margin-right: 4px;
    transition: opacity .3s ease-in-out;
`,f=(0,l.I4)(n.A)`
    
`;const v=function(e){let{children:t,slidesToShow:s,childrenLength:n,infinite:l,dots:o=!1}=e;const v=(0,i.useRef)(null),[w,y]=(0,i.useState)(0),j=null!==l&&void 0!==l?l:n>s,$={arrows:!1,slidesToScroll:1,infinite:j,dots:!1,slidesToShow:s,swipeToSlide:j,rows:1,beforeChange(e,t){y(t)}},A=()=>{var e;null===(e=v.current)||void 0===e||e.slickNext()},b=()=>{var e;null===(e=v.current)||void 0===e||e.slickPrev()},k=(0,c.uh)({onSwipedLeft:A,onSwipedRight:b});return(0,d.jsxs)(h,{...k,children:[j&&a.xl&&(0,d.jsxs)(x,{children:[(0,d.jsx)(m,{type:u.prev,onClick:b,children:(0,d.jsx)(r.WZN,{})}),(0,d.jsx)(m,{type:u.next,onClick:A,children:(0,d.jsx)(r.pjv,{})})]}),(0,d.jsx)(f,{ref:v,...$,children:t}),o&&(0,d.jsx)(p,{children:Array(n).fill(null).map(((e,t)=>(0,d.jsx)(g,{selected:w===t},t)))})]})}},5514:(e,t,s)=>{e.exports=s.p+"static/media/mon amour remix.acf311e8a7c06b14cda5.mp3"},5885:(e,t,s)=>{e.exports=s.p+"static/media/mockVideoPreview.b8ad3f8d4acdea8c0258.jpg"}}]);
//# sourceMappingURL=115.90455e3a.chunk.js.map