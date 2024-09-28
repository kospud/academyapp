"use strict";(self.webpackChunkacademy_app=self.webpackChunkacademy_app||[]).push([[311],{782:(e,t,s)=>{s.d(t,{A:()=>w});var i=s(5043),l=s(5464),n=s(7630),a=s(3762),r=s(3002),o=s(2546),c=s(9150),u=s(8738),d=s(6403),m=s(1422),p=s(579);const h=l.Ay.div`
    width: 100%;
    display: flex;
    align-items: center;
    min-height: 50px;
    ${(0,n.c)(45)}
    ${(0,n.S)(36)}
`,x=l.Ay.div`
    flex-grow: 1;
`,f=l.Ay.div`
    width: 12%;
    aspect-ratio: 1/1;
    color: ${e=>e.theme.colors.text};
    display: flex;
    
    align-items: center;
    ${(0,o.sl)(72,72,36)}

    @media (max-width: ${m.u3}){
        width: 15%;
    }
`;const w=function(e){let{title:t,lesson:s,audio:n}=e;const o=(0,i.useRef)(null),[m,w]=(0,i.useState)(null),[g,y]=(0,i.useState)(!1),v=(0,l.DP)(),[j,$]=(0,i.useState)(!0);return(0,i.useEffect)((()=>{(async()=>{try{const e=await fetch(n),t=await e.blob();if(o.current&&!m){const e=a.A.create({container:o.current,waveColor:v.colors.text,progressColor:v.colors.primary,barGap:7,barWidth:5,barRadius:10,height:u.XF?40:55,cursorWidth:0});await e.loadBlob(t),w(e)}}catch(e){alert(e)}finally{$(!1)}})()}),[]),(0,p.jsxs)("div",{style:{width:"100%"},children:[t&&(0,p.jsx)(d.fH,{children:t}),s&&(0,p.jsx)(d.mE,{children:s}),(0,p.jsxs)(h,{children:[j?(0,p.jsx)(c.y,{}):(0,p.jsx)(f,{onClick:()=>{null===m||void 0===m||m.playPause(),y((e=>!e))},children:g?(0,p.jsx)(r.sXl,{}):(0,p.jsx)(r.mEc,{})}),(0,p.jsx)(x,{ref:o})]})]})}},6403:(e,t,s)=>{s.d(t,{Ay:()=>k,fH:()=>y,mE:()=>v});var i=s(5043),l=s(5464),n=s(2546),a=s(782),r=s(3825),o=s(7630),c=s(3322),u=s(7878),d=s(4777),m=s(5885),p=s(5514),h=s(579);const x=l.I4.div`
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;   
`,f=l.I4.div`
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
`,w=l.I4.div`
    width: 90%;
    overflow: hidden;
    height: ${e=>{let{height:t}=e;return t+"px"}};
    transition: height .3s ease-in-out;
    align-self: end;
`,g=e=>{let{title:t,children:s,icon:l}=e;const[n,a]=(0,i.useState)(!1),[o,c]=(0,i.useState)(0),u=(0,i.useRef)(null),d=()=>{if(u.current){const e=u.current.getBoundingClientRect().height;c(n?e:0)}};(0,i.useEffect)((()=>(d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d))),[n]);return(0,h.jsxs)(x,{children:[(0,h.jsxs)(f,{onClick:()=>{s&&a(!n)},children:[l,(0,h.jsx)("a",{children:t}),(0,h.jsx)(r.BJp,{style:{position:"absolute",right:0,rotate:n?"90deg":"0deg",scale:"1"}})]}),(0,h.jsx)(w,{height:o,children:(0,h.jsx)("div",{style:{display:"inline-block",width:"100%"},ref:u,children:s})})]})},y=l.I4.a`
    ${(0,n.sl)(36,36,16)}
    text-transform: uppercase;
    font-weight: 700;
    display: block;
    line-height: 1;
    ${(0,o.c)(24)}
`,v=l.I4.a`
    ${(0,n.sl)(18,18,12)}
    text-transform: uppercase;
    font-weight: 500;
    display: block;
    line-height: 1;
    ${(0,o.c)(24)}
`,j=l.I4.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`,$={audio:[{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:p},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:p},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:p},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:p},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:p},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:p},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:p}],video:[{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",preview:m},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",preview:m},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",preview:m}],documents:[{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"}],patterns:[{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"}],links:[{title:"\u0421\u0441\u044b\u043b\u043a\u0430",link:"https://www.awwwards.com"}]};const k=function(){const e=$,t=(e,t)=>{const s=e%10,i=e%100;return 1===s&&11!==i?t[0]:s>=2&&s<=4&&(i<10||i>=20)?t[1]:t[2]};return(0,h.jsxs)(j,{children:[e.video&&(0,h.jsx)(g,{title:`${e.video.length} \u0432\u0438\u0434\u0435\u043e`,icon:(0,h.jsx)(r.SI,{}),children:e.video.map((e=>(0,h.jsx)(d.A,{...e})))}),e.audio&&(0,h.jsx)(g,{title:`${e.audio.length} \u0430\u0443\u0434\u0438\u043e`,icon:(0,h.jsx)(r.h12,{}),children:e.audio.map((e=>(0,h.jsx)(a.A,{...e})))}),e.documents&&(0,h.jsx)(g,{title:`${e.documents.length} ${t(e.documents.length,["\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442","\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430","\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432"])}`,icon:(0,h.jsx)(r.I6q,{}),children:e.documents.map((e=>(0,h.jsx)(c.A,{...e})))}),e.patterns&&(0,h.jsx)(g,{title:`${e.patterns.length} ${t(e.patterns.length,["\u0448\u0430\u0431\u043b\u043e\u043d","\u0448\u0430\u0431\u043b\u043e\u043d\u0430","\u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432"])}`,icon:(0,h.jsx)(r.gwM,{}),children:e.patterns.map((e=>(0,h.jsx)(c.A,{...e})))}),e.links&&(0,h.jsx)(g,{title:`${e.links.length} ${t(e.links.length,["\u0441\u0441\u044b\u043b\u043a\u0430","\u0441\u0441\u044b\u043b\u043a\u0438","\u0441\u0441\u044b\u043b\u043e\u043a"])}`,icon:(0,h.jsx)(r.bss,{}),children:e.links.map((e=>(0,h.jsx)(u.A,{...e})))})]})}},3322:(e,t,s)=>{s.d(t,{A:()=>x});var i=s(3825),l=s(5043),n=s(5464),a=s(7630),r=s(2546),o=s(9150),c=s(6403),u=s(5475);const d=s.p+"static/media/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.9d876af8a48fe4da8e14.pdf";var m=s(1422),p=s(579);const h=(0,n.Ay)(u.N_)`
    width: 100%;
    display: flex;
    
    ${(0,a.c)(45)}
    text-decoration: none;
    color: ${e=>e.theme.colors.text};
    ${(0,r.sl)(84,84,39)}

    svg{
        margin-right: 24px;

        @media (max-width: ${m.Qh}){
            margin-right: 12px;
        }
            
    }

`;const x=function(e){let{title:t,link:s}=e;const[n,a]=(0,l.useState)(!0),[r,u]=(0,l.useState)({contentType:"File",contentLength:""});return(0,l.useEffect)((()=>{(async function(e){const t=await fetch(e,{method:"HEAD"});return{contentType:t.headers.get("Content-Type"),contentLength:t.headers.get("Content-Length")}})(d).then((e=>{var t,s,i;const l=null!==(t=null===(s=e.contentType)||void 0===s?void 0:s.split("/")[1])&&void 0!==t?t:"FILE",n=(r=parseFloat(null!==(i=e.contentLength)&&void 0!==i?i:"0"))<1024?`${r} \u0411`:r<1048576?`${(r/1024).toFixed(1)} \u041a\u0411`:`${(r/1048576).toFixed(1)} \u041c\u0411`;var r;u({contentType:l,contentLength:n}),a(!1)}))}),[]),n?(0,p.jsx)(o.y,{}):(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(h,{target:"_blank",to:s,children:[(0,p.jsx)(i.XTd,{}),(0,p.jsxs)("div",{children:[(0,p.jsx)(c.fH,{children:t}),(0,p.jsx)(c.mE,{children:`${r.contentType}, ${r.contentLength}`})]})]})})}},7878:(e,t,s)=>{s.d(t,{A:()=>m});s(5043);var i=s(5464),l=s(7630),n=s(2546),a=s(6403),r=s(5475),o=s(3825),c=s(1422),u=s(579);const d=(0,i.Ay)(r.N_)`
    width: 100%;
    display: flex;
    
    ${(0,l.c)(45)}
    text-decoration: none;
    color: ${e=>e.theme.colors.text};
    ${(0,n.sl)(84,84,40)}

    svg{
        margin-right: 24px;

        @media (max-width: ${c.Qh}){
            margin-right: 12px;
        }
            
    }
`;const m=function(e){let{title:t,link:s}=e;return(0,u.jsxs)(d,{target:"_blank",to:s,children:[(0,u.jsx)(o.bss,{}),(0,u.jsxs)("div",{children:[(0,u.jsx)(a.fH,{children:t}),(0,u.jsx)(a.mE,{children:s})]})]})}},4777:(e,t,s)=>{s.d(t,{A:()=>m,L:()=>u});s(5043);var i=s(5464),l=s(6403),n=s(7630),a=s(423),r=s(2546),o=s(579);const c=i.Ay.div`
    width: 100%;
    aspect-ratio: 11/6;
    position: relative;

    color: ${e=>e.theme.colors.secondary};
    ${(0,r.sl)(64,64,36)}
    cursor: pointer;
    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`,u=e=>{let{preview:t}=e;return(0,o.jsxs)(c,{onClick:()=>alert("\u0422\u0443\u0442 \u043f\u043e\u043f\u0430\u043f \u0441 \u043f\u043b\u0435\u0435\u0440\u043e\u043c?"),children:[(0,o.jsx)(a.i9t,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}),(0,o.jsx)("img",{src:t})]})},d=i.Ay.div`
    width: 100%;
    ${(0,n.c)(45)}
`;const m=function(e){let{preview:t,lesson:s,title:i}=e;return(0,o.jsxs)(d,{children:[(0,o.jsx)(l.fH,{children:i}),(0,o.jsx)(l.mE,{children:s}),(0,o.jsx)(u,{preview:t})]})}},7132:(e,t,s)=>{s.d(t,{Ay:()=>g,Rw:()=>f,iY:()=>h});s(5043);var i=s(5464),l=s(2546),n=s(7630),a=s(8738),r=s(579);const o=i.Ay.div`
  width: 100%;
  ${(0,n.c)(90)}
`,c=i.AH`
  color: ${e=>e.theme.colors.text};
  text-transform: uppercase;
  display: block;
`,u=i.Ay.a`
  ${(0,l.sl)(64,36,16)}
  ${c}
  ${(0,n.c)(24)}
  font-weight: 700;
  line-height: 1;
`,d=i.Ay.a`
  line-height: 1;
    ${(0,l.sl)(18,16,12)}
    ${c}
    font-weight: 600;
    ${(0,n.c)(45)}
`,m=i.Ay.div`
  display: flex;
  justify-content: space-between;
  ${(0,n.c)(45)}
`,p=i.Ay.div`
width: 55%;
`,h=i.Ay.a`
position: relative;
  ${c};
  text-transform: none;
  text-align: justify;
  ${(0,l.sl)(18,16,12)}
  ${e=>(0,n.c)(e.last?0:36)}
`,x=i.Ay.div`

  width: 43%;
  img{
    width: 100%;
    aspect-ratio: 35/39;
    object-fit: cover;
  }
`,f=e=>(++e).toString().padStart(2,"0");function w(e){let{module:t,index:s}=e;const i=f(s);return(0,r.jsxs)(o,{children:[(0,r.jsx)(u,{children:`${i}/\u043c\u043e\u0434\u0443\u043b\u044c`}),(0,r.jsx)(d,{children:t.title}),(0,r.jsxs)(m,{children:[(0,r.jsx)(x,{children:(0,r.jsx)("img",{alt:t.title,src:t.img})}),(0,r.jsx)(p,{children:a.Fr?(0,r.jsx)(h,{children:t.description[0]}):t.description.map(((e,t,s)=>(0,r.jsx)(h,{last:t===s.length-1,children:e})))})]}),(0,r.jsx)(l.CY,{hover:!0,to:`/mycourses/0/modules/${parseInt(i)}`,children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0443\u0440\u043e\u043a\u0430\u043c"})]})}const g=function(e){let{modules:t}=e;return(0,r.jsx)(r.Fragment,{children:t.map(((e,t)=>(0,r.jsx)(w,{module:e,index:t},e.title)))})}},3144:(e,t,s)=>{s.r(t),s.d(t,{default:()=>G});s(5043);var i=s(2546),l=s(5464),n=s(3216),a=s(7132),r=s(7630),o=s(6403),c=s(4777),u=s(3322),d=s(7878),m=s(782),p=s(1422),h=s(8738),x=s(579);let f=function(e){return e.audio="\u0430\u0443\u0434\u0438\u043e",e.video="\u0432\u0438\u0434\u0435\u043e",e.file="\u0444\u0430\u0439\u043b",e.link="\u0441\u0441\u044b\u043b\u043a\u0430",e}({}),w=function(e){return e[e.done=0]="done",e[e.inProgress=1]="inProgress",e[e.todo=2]="todo",e}({});const g=l.Ay.div`
    ${(0,r.S)(180)}
    width: 100%;
`,y=l.Ay.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: ${p.Qh}){
        flex-direction: column;
    }
`,v=(0,l.Ay)(o.fH)`
    ${(0,i.sl)(64,64,24)}
`,j=(0,l.Ay)(o.fH)`
    width: 40%;
    ${(0,r.c)(h.XF?60:90)}
`,$=(0,l.Ay)(o.mE)`
    ${(0,i.sl)(18,18,12)}
    ${(0,r.c)(45)}
`,k=l.Ay.div`
    width: 60%;
    ${(0,r.c)(36)}
    @media (max-width: ${p.Qh}){
        width: 100%;
    }
`,A=l.Ay.div`
    ${(0,r.c)(h.XF?60:90)}
    width: 38%;
    @media (max-width: ${p.Qh}){
        width: 100%;
    }
`,b=l.Ay.div`
    width: 50%;
    @media (max-width: ${p.Qh}){
        width: 100%;
    }
`,T=e=>{let t=(0,x.jsx)(x.Fragment,{});return e.materialType===f.file&&(t=(0,x.jsx)(u.A,{title:e.title,link:e.link})),e.materialType===f.link&&(t=(0,x.jsx)(d.A,{title:e.title,link:e.link})),t};const L=function(e){let{lesson:t}=e;return(0,x.jsxs)(g,{children:[(0,x.jsx)(v,{children:t.title}),(0,x.jsx)($,{children:`\u0423\u0440\u043e\u043a ${t.number}`}),(0,x.jsxs)(y,{children:[(0,x.jsxs)(k,{children:[t.contentType===f.video&&(0,x.jsx)(c.L,{preview:t.preview}),t.contentType===f.audio&&(0,x.jsx)(m.A,{audio:t.content})]}),t.description&&(0,x.jsx)(A,{children:t.description.map(((e,t,s)=>(0,x.jsx)(a.iY,{last:t===s.length-1,children:e})))})]}),0!==t.lessonMaterials.length&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(j,{children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b:"}),(0,x.jsx)(b,{children:t.lessonMaterials.map((e=>(0,x.jsx)(T,{...e})))})]})]})};var q=s(5885),E=s(6720),P=s(423);const F=l.Ay.div`
    display: flex;
    align-items: center;
`,H=l.AH`
    width: 5.4svw;

    @media (max-width: ${p.Qh}){
        width: 10svw;
    }
`,S=l.Ay.div`
    position: relative;
    ${H}
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: ${e=>e.status!==w.todo?e.theme.colors.text:"none"};
    border: solid 3px ${e=>e.theme.colors.text};
    opacity: ${e=>e.status===w.todo?"0.5":"1"};
    color: ${e=>e.theme.colors.secondary};

    ${(0,i.sl)(64,50,30)}
    margin-right: 30px;

    svg{
        position: absolute;
        top: 50%;
        left: 50%;
    }

`,C=l.Ay.div`
    ${H}
    aspect-ratio: 2/1;
    position: relative;
    left: 3px;

    &::after{
        content: '';
        width: 3px;
        height: 100%;
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        background-color: ${e=>e.theme.colors.text};
        opacity: 0.5;
    }
`,I=(0,l.Ay)(o.fH)`
    ${(0,r.c)(12)}
`,M=(0,l.Ay)(o.mE)`
margin-bottom: 0;
`,Q=e=>{let{lesson:t,isLast:s}=e;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(F,{children:[(0,x.jsxs)(S,{status:t.status,children:[t.status===w.done&&(0,x.jsx)(E.e8G,{style:{transform:"translate(-50%, -50%)"}}),t.status===w.inProgress&&(0,x.jsx)(P.i9t,{style:{transform:"translate(-40%, -50%)"}})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)(I,{children:t.title}),(0,x.jsx)(M,{children:`\u0423\u0440\u043e\u043a ${t.number}/${t.contentType}`})]})]}),!s&&(0,x.jsx)(C,{})]})},Y=l.Ay.div`
 
    ${(0,r.S)(90)}

    @media (max-width: ${p.Qh}){
        width: 100%;
    }
`;const R=function(e){let{lessons:t}=e;return(0,x.jsx)(Y,{children:t.map(((e,t,s)=>(0,x.jsx)(Q,{lesson:e,isLast:t===s.length-1})))})};var X=s(5514);const _=(0,l.Ay)(i.YW)`
    width: 80%;
    
`,B={number:1,lessons:[{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",preview:q,number:1,content:"",contentType:f.video,description:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. ","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet."],lessonMaterials:[{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:f.file},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:f.file},{title:"\u0421\u0441\u044b\u043b\u043a\u0430",link:"https://www.awwwards.com",materialType:f.link}],status:w.done},{title:"\u0412\u0441\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0441\u0435\u043d",preview:q,content:"",number:2,contentType:f.video,description:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. ","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet."],lessonMaterials:[{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:f.file},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:f.file},{title:"\u0421\u0441\u044b\u043b\u043a\u0430",link:"https://www.awwwards.com",materialType:f.link},{title:"\u0421\u0441\u044b\u043b\u043a\u0430",link:"https://www.awwwards.com",materialType:f.link}],status:w.inProgress},{title:"\u0414\u0435\u043c\u043e",preview:q,content:X,number:3,contentType:f.audio,lessonMaterials:[{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:f.file},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:f.file},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:f.file},{title:"\u0421\u0441\u044b\u043b\u043a\u0430",link:"https://www.awwwards.com",materialType:f.link}],status:w.todo},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",preview:q,content:"",number:3,contentType:f.video,description:["Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. ","Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet."],lessonMaterials:[{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:f.file},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:f.file},{title:"\u0421\u0441\u044b\u043b\u043a\u0430",link:"https://www.awwwards.com",materialType:f.link}],status:w.todo},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",preview:q,content:"",number:4,contentType:f.video,description:[],lessonMaterials:[{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:f.file},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:f.file},{title:"\u0421\u0441\u044b\u043b\u043a\u0430",link:"https://www.awwwards.com",materialType:f.link}],status:w.todo},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",preview:q,content:"",number:5,contentType:f.video,description:[],lessonMaterials:[{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:f.file},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:f.file},{title:"\u0421\u0441\u044b\u043b\u043a\u0430",link:"https://www.awwwards.com",materialType:f.link}],status:w.todo},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",preview:q,content:"",number:6,contentType:f.video,description:[],lessonMaterials:[{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:f.file},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:f.file},{title:"\u0421\u0441\u044b\u043b\u043a\u0430",link:"https://www.awwwards.com",materialType:f.link}],status:w.todo}]};const G=function(){const e=(0,n.g)();console.log(e.moduleId);const t=B,s=(0,a.Rw)(t.number-1);return(0,x.jsxs)(_,{children:[(0,x.jsxs)(i.BT,{children:[(0,x.jsx)(i.GH,{marginTop:90,children:`${s}/\u043c\u043e\u0434\u0443\u043b\u044c`}),(0,x.jsx)(R,{lessons:t.lessons})]}),(0,x.jsx)(i.BT,{children:t.lessons.map((e=>(0,x.jsx)(L,{lesson:e})))})]})}},9150:(e,t,s)=>{s.d(t,{y:()=>i});const i=s(5464).Ay.div`
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
`},5514:(e,t,s)=>{e.exports=s.p+"static/media/mon amour remix.acf311e8a7c06b14cda5.mp3"},5885:(e,t,s)=>{e.exports=s.p+"static/media/mockVideoPreview.b8ad3f8d4acdea8c0258.jpg"}}]);
//# sourceMappingURL=311.cb2cb43e.chunk.js.map