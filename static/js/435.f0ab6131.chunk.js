"use strict";(self.webpackChunkacademy_app=self.webpackChunkacademy_app||[]).push([[435],{782:(e,t,s)=>{s.d(t,{A:()=>g});var i=s(5043),n=s(5464),l=s(7630),r=s(3762),a=s(3002),o=s(2546),c=s(9150),u=s(8738),d=s(6403),m=s(1422),p=s(579);const h=n.Ay.div`
    width: 100%;
    display: flex;
    align-items: center;
    min-height: 50px;
    ${(0,l.c)(45)}
    ${(0,l.S)(36)}
`,f=n.Ay.div`
    flex-grow: 1;
`,x=n.Ay.div`
    width: 12%;
    aspect-ratio: 1/1;
    color: ${e=>e.theme.colors.text};
    display: flex;
    
    align-items: center;
    ${(0,o.sl)(72,72,36)}

    @media (max-width: ${m.u3}){
        width: 15%;
    }
`;const g=function(e){let{title:t,lesson:s,audio:l}=e;const o=(0,i.useRef)(null),[m,g]=(0,i.useState)(null),[y,w]=(0,i.useState)(!1),v=(0,n.DP)(),[j,b]=(0,i.useState)(!0);return(0,i.useEffect)((()=>{(async()=>{try{const e=await fetch(l),t=await e.blob();if(o.current&&!m){const e=r.A.create({container:o.current,waveColor:v.colors.text,progressColor:v.colors.primary,barGap:7,barWidth:5,barRadius:10,height:u.XF?40:55,cursorWidth:0});await e.loadBlob(t),g(e)}}catch(e){alert(e)}finally{b(!1)}})()}),[]),(0,p.jsxs)("div",{style:{width:"100%"},children:[t&&(0,p.jsx)(d.fH,{children:t}),s&&(0,p.jsx)(d.mE,{children:s}),(0,p.jsxs)(h,{children:[j?(0,p.jsx)(c.y,{}):(0,p.jsx)(x,{onClick:()=>{null===m||void 0===m||m.playPause(),w((e=>!e))},children:y?(0,p.jsx)(a.sXl,{}):(0,p.jsx)(a.mEc,{})}),(0,p.jsx)(f,{ref:o})]})]})}},6403:(e,t,s)=>{s.d(t,{Ay:()=>$,fH:()=>w,mE:()=>v});var i=s(5043),n=s(5464),l=s(2546),r=s(782),a=s(3825),o=s(7630),c=s(3322),u=s(7878),d=s(4777),m=s(5885),p=s(5514),h=s(579);const f=n.I4.div`
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;   
`,x=n.I4.div`
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
    ${(0,o.c)(45)}

    a{
        user-select: none;
        display: block;
        width: 90%;
    }

    svg{
        scale: 1.5;
        transition: rotate .3s ease-in-out;
    }
`,g=n.I4.div`
    width: 90%;
    overflow: hidden;
    height: ${e=>{let{height:t}=e;return t+"px"}};
    transition: height .3s ease-in-out;
    align-self: end;
`,y=e=>{let{title:t,children:s,icon:n}=e;const[l,r]=(0,i.useState)(!1),[o,c]=(0,i.useState)(0),u=(0,i.useRef)(null),d=()=>{if(u.current){const e=u.current.getBoundingClientRect().height;c(l?e:0)}};(0,i.useEffect)((()=>(d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d))),[l]);return(0,h.jsxs)(f,{children:[(0,h.jsxs)(x,{onClick:()=>{s&&r(!l)},children:[n,(0,h.jsx)("a",{children:t}),(0,h.jsx)(a.BJp,{style:{position:"absolute",right:0,rotate:l?"90deg":"0deg",scale:"1"}})]}),(0,h.jsx)(g,{height:o,children:(0,h.jsx)("div",{style:{display:"inline-block",width:"100%"},ref:u,children:s})})]})},w=n.I4.a`
    ${(0,l.sl)(36,36,16)}
    text-transform: uppercase;
    font-weight: 700;
    display: block;
    line-height: 1;
    ${(0,o.c)(24)}
`,v=n.I4.a`
    ${(0,l.sl)(18,18,12)}
    text-transform: uppercase;
    font-weight: 500;
    display: block;
    line-height: 1;
    ${(0,o.c)(24)}
`,j=n.I4.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`,b={audio:[{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:p},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:p},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:p},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:p},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:p},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:p},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:p}],video:[{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",preview:m},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",preview:m},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",preview:m}],documents:[{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"}],patterns:[{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"}],links:[{title:"\u0421\u0441\u044b\u043b\u043a\u0430",link:"https://www.awwwards.com"}]};const $=function(){const e=b,t=(e,t)=>{const s=e%10,i=e%100;return 1===s&&11!==i?t[0]:s>=2&&s<=4&&(i<10||i>=20)?t[1]:t[2]};return(0,h.jsxs)(j,{children:[e.video&&(0,h.jsx)(y,{title:`${e.video.length} \u0432\u0438\u0434\u0435\u043e`,icon:(0,h.jsx)(a.SI,{}),children:e.video.map((e=>(0,h.jsx)(d.A,{...e})))}),e.audio&&(0,h.jsx)(y,{title:`${e.audio.length} \u0430\u0443\u0434\u0438\u043e`,icon:(0,h.jsx)(a.h12,{}),children:e.audio.map((e=>(0,h.jsx)(r.A,{...e})))}),e.documents&&(0,h.jsx)(y,{title:`${e.documents.length} ${t(e.documents.length,["\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442","\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430","\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432"])}`,icon:(0,h.jsx)(a.I6q,{}),children:e.documents.map((e=>(0,h.jsx)(c.A,{...e})))}),e.patterns&&(0,h.jsx)(y,{title:`${e.patterns.length} ${t(e.patterns.length,["\u0448\u0430\u0431\u043b\u043e\u043d","\u0448\u0430\u0431\u043b\u043e\u043d\u0430","\u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432"])}`,icon:(0,h.jsx)(a.gwM,{}),children:e.patterns.map((e=>(0,h.jsx)(c.A,{...e})))}),e.links&&(0,h.jsx)(y,{title:`${e.links.length} ${t(e.links.length,["\u0441\u0441\u044b\u043b\u043a\u0430","\u0441\u0441\u044b\u043b\u043a\u0438","\u0441\u0441\u044b\u043b\u043e\u043a"])}`,icon:(0,h.jsx)(a.bss,{}),children:e.links.map((e=>(0,h.jsx)(u.A,{...e})))})]})}},3322:(e,t,s)=>{s.d(t,{A:()=>f});var i=s(3825),n=s(5043),l=s(5464),r=s(7630),a=s(2546),o=s(9150),c=s(6403),u=s(5475);const d=s.p+"static/media/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.9d876af8a48fe4da8e14.pdf";var m=s(1422),p=s(579);const h=(0,l.Ay)(u.N_)`
    width: 100%;
    display: flex;
    
    ${(0,r.c)(45)}
    text-decoration: none;
    color: ${e=>e.theme.colors.text};
    ${(0,a.sl)(84,84,39)}

    svg{
        margin-right: 24px;

        @media (max-width: ${m.Qh}){
            margin-right: 12px;
        }
            
    }

`;const f=function(e){let{title:t,link:s}=e;const[l,r]=(0,n.useState)(!0),[a,u]=(0,n.useState)({contentType:"File",contentLength:""});return(0,n.useEffect)((()=>{(async function(e){const t=await fetch(e,{method:"HEAD"});return{contentType:t.headers.get("Content-Type"),contentLength:t.headers.get("Content-Length")}})(d).then((e=>{var t,s,i;const n=null!==(t=null===(s=e.contentType)||void 0===s?void 0:s.split("/")[1])&&void 0!==t?t:"FILE",l=(a=parseFloat(null!==(i=e.contentLength)&&void 0!==i?i:"0"))<1024?`${a} \u0411`:a<1048576?`${(a/1024).toFixed(1)} \u041a\u0411`:`${(a/1048576).toFixed(1)} \u041c\u0411`;var a;u({contentType:n,contentLength:l}),r(!1)}))}),[]),l?(0,p.jsx)(o.y,{}):(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(h,{target:"_blank",to:s,children:[(0,p.jsx)(i.XTd,{}),(0,p.jsxs)("div",{children:[(0,p.jsx)(c.fH,{children:t}),(0,p.jsx)(c.mE,{children:`${a.contentType}, ${a.contentLength}`})]})]})})}},7878:(e,t,s)=>{s.d(t,{A:()=>m});s(5043);var i=s(5464),n=s(7630),l=s(2546),r=s(6403),a=s(5475),o=s(3825),c=s(1422),u=s(579);const d=(0,i.Ay)(a.N_)`
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
`;const m=function(e){let{title:t,link:s}=e;return(0,u.jsxs)(d,{target:"_blank",to:s,children:[(0,u.jsx)(o.bss,{}),(0,u.jsxs)("div",{children:[(0,u.jsx)(r.fH,{children:t}),(0,u.jsx)(r.mE,{children:s})]})]})}},4777:(e,t,s)=>{s.d(t,{A:()=>m,L:()=>u});s(5043);var i=s(5464),n=s(6403),l=s(7630),r=s(423),a=s(2546),o=s(579);const c=i.Ay.div`
    width: 100%;
    aspect-ratio: 11/6;
    position: relative;

    color: ${e=>e.theme.colors.secondary};
    ${(0,a.sl)(64,64,36)}
    cursor: pointer;
    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`,u=e=>{let{preview:t}=e;return(0,o.jsxs)(c,{onClick:()=>alert("\u0422\u0443\u0442 \u043f\u043e\u043f\u0430\u043f \u0441 \u043f\u043b\u0435\u0435\u0440\u043e\u043c?"),children:[(0,o.jsx)(r.i9t,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}),(0,o.jsx)("img",{src:t})]})},d=i.Ay.div`
    width: 100%;
    ${(0,l.c)(45)}
`;const m=function(e){let{preview:t,lesson:s,title:i}=e;return(0,o.jsxs)(d,{children:[(0,o.jsx)(n.fH,{children:i}),(0,o.jsx)(n.mE,{children:s}),(0,o.jsx)(u,{preview:t})]})}},7132:(e,t,s)=>{s.d(t,{Ay:()=>y,Rw:()=>x,iY:()=>h});s(5043);var i=s(5464),n=s(2546),l=s(7630),r=s(8738),a=s(579);const o=i.Ay.div`
  width: 100%;
  ${(0,l.c)(90)}
`,c=i.AH`
  color: ${e=>e.theme.colors.text};
  text-transform: uppercase;
  display: block;
`,u=i.Ay.a`
  ${(0,n.sl)(64,36,16)}
  ${c}
  ${(0,l.c)(24)}
  font-weight: 700;
  line-height: 1;
`,d=i.Ay.a`
  line-height: 1;
    ${(0,n.sl)(18,16,12)}
    ${c}
    font-weight: 600;
    ${(0,l.c)(45)}
`,m=i.Ay.div`
  display: flex;
  justify-content: space-between;
  ${(0,l.c)(45)}
`,p=i.Ay.div`
width: 55%;
`,h=i.Ay.a`
position: relative;
  ${c};
  text-transform: none;
  text-align: justify;
  ${(0,n.sl)(18,16,12)}
  ${e=>(0,l.c)(e.last?0:36)}
`,f=i.Ay.div`

  width: 43%;
  img{
    width: 100%;
    aspect-ratio: 35/39;
    object-fit: cover;
  }
`,x=e=>(++e).toString().padStart(2,"0");function g(e){let{module:t,index:s}=e;const i=x(s);return(0,a.jsxs)(o,{children:[(0,a.jsx)(u,{children:`${i}/\u043c\u043e\u0434\u0443\u043b\u044c`}),(0,a.jsx)(d,{children:t.title}),(0,a.jsxs)(m,{children:[(0,a.jsx)(f,{children:(0,a.jsx)("img",{alt:t.title,src:t.img})}),(0,a.jsx)(p,{children:r.Fr?(0,a.jsx)(h,{children:t.description[0]}):t.description.map(((e,t,s)=>(0,a.jsx)(h,{last:t===s.length-1,children:e})))})]}),(0,a.jsx)(n.CY,{hover:!0,to:`/mycourses/0/modules/${parseInt(i)}`,children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0443\u0440\u043e\u043a\u0430\u043c"})]})}const y=function(e){let{modules:t}=e;return(0,a.jsx)(a.Fragment,{children:t.map(((e,t)=>(0,a.jsx)(g,{module:e,index:t},e.title)))})}},3144:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Q});s(5043);var i=s(2546),n=s(5464),l=s(3216),r=s(7132),a=s(7630),o=s(6403),c=s(4777),u=s(3322),d=s(7878),m=s(782),p=s(1422),h=s(8738),f=s(579);let x=function(e){return e.audio="\u0430\u0443\u0434\u0438\u043e",e.video="\u0432\u0438\u0434\u0435\u043e",e.file="\u0444\u0430\u0439\u043b",e.link="\u0441\u0441\u044b\u043b\u043a\u0430",e}({}),g=function(e){return e[e.done=0]="done",e[e.inProgress=1]="inProgress",e[e.todo=2]="todo",e}({});const y=n.Ay.div`
    ${(0,a.S)(180)}
    width: 100%;
`,w=n.Ay.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: ${p.Qh}){
        flex-direction: column;
    }
`,v=(0,n.Ay)(o.fH)`
    ${(0,i.sl)(64,64,24)}
`,j=(0,n.Ay)(o.fH)`
    width: 40%;
    ${(0,a.c)(h.XF?60:90)}
`,b=(0,n.Ay)(o.mE)`
    ${(0,i.sl)(18,18,12)}
    ${(0,a.c)(45)}
`,$=n.Ay.div`
    width: 60%;
    ${(0,a.c)(36)}
    @media (max-width: ${p.Qh}){
        width: 100%;
    }
`,k=n.Ay.div`
    ${(0,a.c)(h.XF?60:90)}
    width: 38%;
    @media (max-width: ${p.Qh}){
        width: 100%;
    }
`,A=n.Ay.div`
    width: 50%;
    @media (max-width: ${p.Qh}){
        width: 100%;
    }
`,T=e=>{let t=(0,f.jsx)(f.Fragment,{});return e.materialType===x.file&&(t=(0,f.jsx)(u.A,{title:e.title,link:e.link})),e.materialType===x.link&&(t=(0,f.jsx)(d.A,{title:e.title,link:e.link})),t};const E=function(e){let{lesson:t}=e;return(0,f.jsxs)(y,{children:[(0,f.jsx)(v,{children:t.title}),(0,f.jsx)(b,{children:t.contentType}),(0,f.jsxs)(w,{children:[(0,f.jsxs)($,{children:[t.contentType===x.video&&(0,f.jsx)(c.L,{preview:t.preview}),t.contentType===x.audio&&(0,f.jsx)(m.A,{audio:t.content})]}),t.description&&(0,f.jsx)(k,{children:t.description.map(((e,t,s)=>(0,f.jsx)(r.iY,{last:t===s.length-1,children:e})))})]}),0!==t.lessonMaterials.length&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(j,{children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b:"}),(0,f.jsx)(A,{children:t.lessonMaterials.map((e=>(0,f.jsx)(T,{...e})))})]})]})};var q=s(5885);const L=n.Ay.div`
    display: flex;
    align-items: center;
`,P=n.Ay.div`
    width: 80px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: ${e=>e.status!==g.todo?e.theme.colors.text:"none"};
    border: solid 3px ${e=>e.theme.colors.text};
    opacity: ${e=>e.status===g.todo?"0.5":"1"};

    @media (max-width: ${p.Qh}) {
        width: 40px;
    }

`,O=(0,n.Ay)(o.fH)`
    ${(0,a.c)(12)}
`,S=(0,n.Ay)(o.mE)`
margin-bottom: 0;
`,C=e=>{let{lesson:t}=e;return(0,f.jsxs)(L,{children:[(0,f.jsx)(P,{status:t.status}),(0,f.jsxs)("div",{children:[(0,f.jsx)(O,{children:t.title}),(0,f.jsx)(S,{children:t.contentType})]})]})},F=n.Ay.div`
 
    ${(0,a.S)(90)}
    @media (max-width: ${p.Qh}){
        width: 100%;
    }
`;const H=function(e){let{lessons:t}=e;return(0,f.jsx)(F,{children:t.map((e=>(0,f.jsx)(C,{lesson:e})))})};var I=s(5514);const M=(0,n.Ay)(i.YW)`
    width: 80%;
    
`,N={number:1,lessons:[{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",preview:q,content:"",contentType:x.video,description:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. ","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet."],lessonMaterials:[{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:x.file},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:x.file},{title:"\u0421\u0441\u044b\u043b\u043a\u0430",link:"https://www.awwwards.com",materialType:x.link}],status:g.done},{title:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d",preview:q,content:"",contentType:x.video,description:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. ","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet."],lessonMaterials:[{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:x.file},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:x.file},{title:"\u0421\u0441\u044b\u043b\u043a\u0430",link:"https://www.awwwards.com",materialType:x.link},{title:"\u0421\u0441\u044b\u043b\u043a\u0430",link:"https://www.awwwards.com",materialType:x.link}],status:g.todo},{title:"\u0414\u0435\u043c\u043e",preview:q,content:I,contentType:x.audio,lessonMaterials:[{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:x.file},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:x.file},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:x.file},{title:"\u0421\u0441\u044b\u043b\u043a\u0430",link:"https://www.awwwards.com",materialType:x.link}],status:g.todo},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",preview:q,content:"",contentType:x.video,description:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. ","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet."],lessonMaterials:[{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:x.file},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:x.file},{title:"\u0421\u0441\u044b\u043b\u043a\u0430",link:"https://www.awwwards.com",materialType:x.link}],status:g.todo},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",preview:q,content:"",contentType:x.video,description:[],lessonMaterials:[{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:x.file},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:x.file},{title:"\u0421\u0441\u044b\u043b\u043a\u0430",link:"https://www.awwwards.com",materialType:x.link}],status:g.todo}]};const Q=function(){const e=(0,l.g)();console.log(e.moduleId);const t=N,s=(0,r.Rw)(t.number-1);return(0,f.jsxs)(M,{children:[(0,f.jsxs)(i.BT,{children:[(0,f.jsx)(i.GH,{marginTop:90,children:`${s}/\u043c\u043e\u0434\u0443\u043b\u044c`}),(0,f.jsx)(H,{lessons:t.lessons})]}),(0,f.jsx)(i.BT,{children:t.lessons.map((e=>(0,f.jsx)(E,{lesson:e})))})]})}},9150:(e,t,s)=>{s.d(t,{y:()=>i});const i=s(5464).Ay.div`
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
`},5514:(e,t,s)=>{e.exports=s.p+"static/media/mon amour remix.acf311e8a7c06b14cda5.mp3"},5885:(e,t,s)=>{e.exports=s.p+"static/media/mockVideoPreview.b8ad3f8d4acdea8c0258.jpg"},3441:(e,t,s)=>{s.d(t,{k5:()=>p});var i=s(5043),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=i.createContext&&i.createContext(n),r=["attr","size","title"];function a(e,t){if(null==e)return{};var s,i,n=function(e,t){if(null==e)return{};var s={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(t.indexOf(i)>=0)continue;s[i]=e[i]}return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)s=l[i],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e},o.apply(this,arguments)}function c(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function u(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?c(Object(s),!0).forEach((function(t){d(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function d(e,t,s){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var i=s.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function m(e){return e&&e.map(((e,t)=>i.createElement(e.tag,u({key:t},e.attr),m(e.child))))}function p(e){return t=>i.createElement(h,o({attr:u({},e.attr)},t),m(e.child))}function h(e){var t=t=>{var s,{attr:n,size:l,title:c}=e,d=a(e,r),m=l||t.size||"1em";return t.className&&(s=t.className),e.className&&(s=(s?s+" ":"")+e.className),i.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,d,{className:s,style:u(u({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),c&&i.createElement("title",null,c),e.children)};return void 0!==l?i.createElement(l.Consumer,null,(e=>t(e))):t(n)}}}]);
//# sourceMappingURL=435.f0ab6131.chunk.js.map