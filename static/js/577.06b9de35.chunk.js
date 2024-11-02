"use strict";(self.webpackChunkacademy_app=self.webpackChunkacademy_app||[]).push([[577],{782:(e,t,i)=>{i.d(t,{A:()=>g});var n=i(5043),s=i(5464),l=i(7630),o=i(3762),r=i(3002),d=i(2546),a=i(9150),c=i(8738),h=i(6403),x=i(1422),p=i(579);const u=s.Ay.div`
    width: 100%;
    display: flex;
    align-items: center;
    min-height: 50px;
    ${(0,l.c)(45)}
    ${(0,l.S)(36)}
`,m=s.Ay.div`
    flex-grow: 1;
`,f=s.Ay.div`
    width: 12%;
    aspect-ratio: 1/1;
    color: ${e=>e.theme.colors.text};
    display: flex;
    
    align-items: center;
    ${(0,d.sl)(72,72,36)}
    
    @media (max-width: ${x.u3}){
        width: 15%;
    }
`;const g=function(e){let{title:t,lesson:i,audio:l}=e;const d=(0,n.useRef)(null),[x,g]=(0,n.useState)(null),[j,y]=(0,n.useState)(!1),w=(0,s.DP)(),[v,$]=(0,n.useState)(!0);return(0,n.useEffect)((()=>{(async()=>{try{const e=await fetch(l),t=await e.blob();if(d.current&&!x){const e=o.A.create({container:d.current,waveColor:w.colors.text,progressColor:w.colors.primary,barGap:7,barWidth:5,barRadius:10,height:c.XF?40:55,cursorWidth:0});await e.loadBlob(t),e.on("finish",(()=>y(!1))),g(e)}}catch(e){alert(e)}finally{$(!1)}})()}),[]),(0,p.jsxs)("div",{style:{width:"100%"},children:[t&&(0,p.jsx)(h.fH,{children:t}),i&&(0,p.jsx)(h.mE,{children:i}),(0,p.jsxs)(u,{children:[v?(0,p.jsx)(a.y,{}):(0,p.jsx)(f,{onClick:()=>{null===x||void 0===x||x.playPause(),y((e=>!e))},children:j?(0,p.jsx)(r.sXl,{}):(0,p.jsx)(r.mEc,{})}),(0,p.jsx)(m,{ref:d})]})]})}},6403:(e,t,i)=>{i.d(t,{$T:()=>m,Ay:()=>A,YJ:()=>v,b:()=>g,fH:()=>y,mE:()=>w,x$:()=>f});var n=i(5043),s=i(5464),l=i(2546),o=i(782),r=i(3825),d=i(7630),a=i(3322),c=i(7878),h=i(4777),x=i(5885),p=i(5514),u=i(579);const m=s.I4.div`
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;   
`,f=s.I4.div`
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
    ${(0,d.c)(45)}

    a{
        user-select: none;
        display: block;
        width: 90%;
    }

    svg{
        scale: 1.5;
        transition: rotate .3s ease-in-out;
    }
`,g=s.I4.div`
    width: 90%;
    overflow: hidden;
    height: ${e=>{let{height:t}=e;return"string"===typeof t?t:t+"px"}};
    transition: height .3s ease-in-out;
    align-self: end;
`,j=e=>{let{title:t,children:i,icon:s}=e;const[l,o]=(0,n.useState)(!1),[d,a]=(0,n.useState)(0),c=(0,n.useRef)(null),h=()=>{if(c.current){const e=c.current.getBoundingClientRect().height;a(l?e:0)}};(0,n.useEffect)((()=>(h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h))),[l]);return(0,u.jsxs)(m,{children:[(0,u.jsxs)(f,{onClick:()=>{i&&o(!l)},children:[s,(0,u.jsx)("a",{children:t}),(0,u.jsx)(r.BJp,{style:{position:"absolute",right:0,rotate:l?"90deg":"0deg",scale:"1"}})]}),(0,u.jsx)(g,{height:d,children:(0,u.jsx)("div",{style:{display:"inline-block",width:"100%"},ref:c,children:i})})]})},y=s.I4.a`
    ${(0,l.sl)(36,36,16)}
    text-transform: uppercase;
    font-weight: 700;
    display: block;
    line-height: 1;
    ${(0,d.c)(24)}
`,w=s.I4.a`
    ${(0,l.sl)(18,18,12)}
    text-transform: uppercase;
    font-weight: 500;
    display: block;
    line-height: 1;
    ${(0,d.c)(24)}
`,v=s.I4.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`,$={audio:[{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:p},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:p},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:p},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:p},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:p},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:p},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",audio:p}],video:[{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",preview:x},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",preview:x},{title:"\u0410\u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u043a\u0430",lesson:"\u041c\u041e\u0414\u0423\u041b\u042c 1/\u0423\u0420\u041e\u041a 1",preview:x}],documents:[{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"}],patterns:[{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf"}],links:[{title:"\u0421\u0441\u044b\u043b\u043a\u0430",link:"https://www.awwwards.com"}]};const A=function(){const e=$,t=(e,t)=>{const i=e%10,n=e%100;return 1===i&&11!==n?t[0]:i>=2&&i<=4&&(n<10||n>=20)?t[1]:t[2]};return(0,u.jsxs)(v,{children:[e.video&&(0,u.jsx)(j,{title:`${e.video.length} \u0432\u0438\u0434\u0435\u043e`,icon:(0,u.jsx)(r.SI,{}),children:e.video.map((e=>(0,u.jsx)(h.A,{...e})))}),e.audio&&(0,u.jsx)(j,{title:`${e.audio.length} \u0430\u0443\u0434\u0438\u043e`,icon:(0,u.jsx)(r.h12,{}),children:e.audio.map((e=>(0,u.jsx)(o.A,{...e})))}),e.documents&&(0,u.jsx)(j,{title:`${e.documents.length} ${t(e.documents.length,["\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442","\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430","\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432"])}`,icon:(0,u.jsx)(r.I6q,{}),children:e.documents.map((e=>(0,u.jsx)(a.A,{...e})))}),e.patterns&&(0,u.jsx)(j,{title:`${e.patterns.length} ${t(e.patterns.length,["\u0448\u0430\u0431\u043b\u043e\u043d","\u0448\u0430\u0431\u043b\u043e\u043d\u0430","\u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432"])}`,icon:(0,u.jsx)(r.gwM,{}),children:e.patterns.map((e=>(0,u.jsx)(a.A,{...e})))}),e.links&&(0,u.jsx)(j,{title:`${e.links.length} ${t(e.links.length,["\u0441\u0441\u044b\u043b\u043a\u0430","\u0441\u0441\u044b\u043b\u043a\u0438","\u0441\u0441\u044b\u043b\u043e\u043a"])}`,icon:(0,u.jsx)(r.bss,{}),children:e.links.map((e=>(0,u.jsx)(c.A,{...e})))})]})}},3322:(e,t,i)=>{i.d(t,{A:()=>f});var n=i(3825),s=i(5043),l=i(5464),o=i(7630),r=i(2546),d=i(9150),a=i(8738),c=i(6403),h=i(5475);const x=i.p+"static/media/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.9d876af8a48fe4da8e14.pdf";var p=i(1422),u=i(579);const m=(0,l.Ay)(h.N_)`
    width: 100%;
    display: flex;
    
    ${(0,o.c)(45)}
    text-decoration: none;
    color: ${e=>e.theme.colors.text};
    ${(0,r.sl)(84,84,39)}
    ${r.oB}
    svg{
        margin-right: 24px;

        @media (max-width: ${p.Qh}){
            margin-right: 12px;
        }
            
    }

`;const f=function(e){let{title:t,link:i}=e;const[l,o]=(0,s.useState)(!0),[r,h]=(0,s.useState)({contentType:"File",contentLength:""});(0,s.useEffect)((()=>{(async function(e){const t=await fetch(e,{method:"HEAD"});return{contentType:t.headers.get("Content-Type"),contentLength:t.headers.get("Content-Length")}})(x).then((e=>{var t,i,n;const s=null!==(t=null===(i=e.contentType)||void 0===i?void 0:i.split("/")[1])&&void 0!==t?t:"FILE",l=(r=parseFloat(null!==(n=e.contentLength)&&void 0!==n?n:"0"))<1024?`${r} \u0411`:r<1048576?`${(r/1024).toFixed(1)} \u041a\u0411`:`${(r/1048576).toFixed(1)} \u041c\u0411`;var r;h({contentType:s,contentLength:l}),o(!1)}))}),[]);const p={marginRight:0};return l?(0,u.jsx)(d.y,{}):(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(m,{target:"_blank",to:i,children:[(0,u.jsx)(n.XTd,{}),(0,u.jsxs)("div",{style:{flexGrow:1},children:[(0,u.jsx)(c.fH,{children:t}),(0,u.jsx)(c.mE,{children:`${r.contentType}, ${r.contentLength}`})]}),a.xl?(0,u.jsx)(n.vY1,{style:p}):(0,u.jsx)(n.pfD,{style:p})]})})}},7878:(e,t,i)=>{i.d(t,{A:()=>x});i(5043);var n=i(5464),s=i(7630),l=i(2546),o=i(6403),r=i(5475),d=i(3825),a=i(1422),c=i(579);const h=(0,n.Ay)(r.N_)`
    width: 100%;
    display: flex;
    
    ${(0,s.c)(45)}
    text-decoration: none;
    color: ${e=>e.theme.colors.text};
    ${(0,l.sl)(84,84,40)}
    ${l.oB}
    svg{
        margin-right: 24px;

        @media (max-width: ${a.Qh}){
            margin-right: 12px;
        }
            
    }
`;const x=function(e){let{title:t,link:i}=e;return(0,c.jsxs)(h,{target:"_blank",to:i,children:[(0,c.jsx)(d.bss,{}),(0,c.jsxs)("div",{children:[(0,c.jsx)(o.fH,{children:t}),(0,c.jsx)(o.mE,{children:i})]})]})}},4777:(e,t,i)=>{i.d(t,{A:()=>x,L:()=>c});i(5043);var n=i(5464),s=i(6403),l=i(7630),o=i(423),r=i(2546),d=i(579);const a=n.Ay.div`
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
`,c=e=>{let{preview:t}=e;return(0,d.jsxs)(a,{onClick:()=>alert("\u0422\u0443\u0442 \u043f\u043e\u043f\u0430\u043f \u0441 \u043f\u043b\u0435\u0435\u0440\u043e\u043c?"),children:[(0,d.jsx)(o.i9t,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}),(0,d.jsx)("img",{src:t})]})},h=n.Ay.div`
    width: 100%;
    ${(0,l.c)(45)}
`;const x=function(e){let{preview:t,lesson:i,title:n}=e;return(0,d.jsxs)(h,{children:[(0,d.jsx)(s.fH,{children:n}),(0,d.jsx)(s.mE,{children:i}),(0,d.jsx)(c,{preview:t})]})}},7132:(e,t,i)=>{i.d(t,{Ay:()=>j,Rw:()=>f,iY:()=>u});i(5043);var n=i(5464),s=i(2546),l=i(7630),o=i(8738),r=i(579);const d=n.Ay.div`
  width: 100%;
  ${(0,l.c)(90)}
`,a=n.AH`
  color: ${e=>e.theme.colors.text};
  text-transform: uppercase;
  display: block;
`,c=n.Ay.a`
  ${(0,s.sl)(64,36,16)}
  ${a}
  ${(0,l.c)(24)}
  font-weight: 700;
  line-height: 1;
`,h=n.Ay.a`
  line-height: 1;
    ${(0,s.sl)(18,16,12)}
    ${a}
    font-weight: 600;
    ${(0,l.c)(45)}
`,x=n.Ay.div`
  display: flex;
  justify-content: space-between;
  ${(0,l.c)(45)}
`,p=n.Ay.div`
width: 55%;
`,u=n.Ay.a`
position: relative;
  ${a};
  text-transform: none;
  text-align: justify;
  ${(0,s.sl)(18,16,12)}
  ${e=>(0,l.c)(e.last?0:36)}
`,m=n.Ay.div`

  width: 43%;
  img{
    width: 100%;
    aspect-ratio: 35/39;
    object-fit: cover;
  }
`,f=e=>(++e).toString().padStart(2,"0");function g(e){let{module:t,index:i}=e;const n=f(i);return(0,r.jsxs)(d,{children:[(0,r.jsx)(c,{children:`${n}/ \u043c\u043e\u0434\u0443\u043b\u044c`}),(0,r.jsx)(h,{children:t.title}),(0,r.jsxs)(x,{children:[(0,r.jsx)(m,{children:(0,r.jsx)("img",{alt:t.title,src:t.img})}),(0,r.jsx)(p,{children:o.Fr?(0,r.jsx)(u,{children:t.description[0]}):t.description.map(((e,t,i)=>(0,r.jsx)(u,{last:t===i.length-1,children:e})))})]}),(0,r.jsx)(s.CY,{hover:!0,to:`/mycourses/0/modules/${parseInt(n)}`,children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0443\u0440\u043e\u043a\u0430\u043c"})]})}const j=function(e){let{modules:t}=e;return(0,r.jsx)(r.Fragment,{children:t.map(((e,t)=>(0,r.jsx)(g,{module:e,index:t},e.title)))})}},2666:(e,t,i)=>{i.d(t,{Ay:()=>E,Py:()=>m,j:()=>f,k$:()=>b,xw:()=>k});i(5043);var n=i(5464),s=i(7630),l=i(6403),o=i(4777),r=i(7132),d=i(2546),a=i(3322),c=i(7878),h=i(782),x=i(1422),p=i(8738),u=i(579);let m=function(e){return e.audio="\u0430\u0443\u0434\u0438\u043e",e.video="\u0432\u0438\u0434\u0435\u043e",e.file="\u0444\u0430\u0439\u043b",e.link="\u0441\u0441\u044b\u043b\u043a\u0430",e}({}),f=function(e){return e[e.done=0]="done",e[e.inProgress=1]="inProgress",e[e.todo=2]="todo",e}({});const g=n.Ay.div`
    ${(0,s.S)(180)}
    width: 100%;
`,j=n.Ay.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: ${x.Qh}){
        flex-direction: column;
    }
`,y=(0,n.Ay)(l.fH)`
    ${(0,d.sl)(64,64,24)}
`,w=(0,n.Ay)(l.fH)`
    width: 40%;
    ${(0,s.c)(p.XF?60:90)}
`,v=(0,n.Ay)(l.mE)`
    ${(0,d.sl)(18,18,12)}
    ${(0,s.c)(45)}
`,$=n.Ay.div`
    width: 60%;
    ${(0,s.c)(36)}
    @media (max-width: ${x.Qh}){
        width: 100%;
    }
`,A=n.Ay.div`
    ${(0,s.c)(p.XF?60:90)}
    width: 38%;
    @media (max-width: ${x.Qh}){
        width: 100%;
    }
`,k=n.Ay.div`
    width: 50%;
    
    @media (max-width: ${x.Qh}){
        width: 100%;
    }
`,b=e=>{let t=(0,u.jsx)(u.Fragment,{});return e.materialType===m.file&&(t=(0,u.jsx)(a.A,{title:e.title,link:e.link})),e.materialType===m.link&&(t=(0,u.jsx)(c.A,{title:e.title,link:e.link})),t};const E=function(e){let{lesson:t,module:i}=e;return(0,u.jsxs)(g,{children:[(0,u.jsx)(y,{children:t.title}),(0,u.jsx)(v,{children:`\u041c\u043e\u0434\u0443\u043b\u044c ${i}/\u0423\u0440\u043e\u043a ${t.number}`}),(0,u.jsxs)(j,{children:[(0,u.jsxs)($,{children:[t.contentType===m.video&&(0,u.jsx)(o.L,{preview:t.preview}),t.contentType===m.audio&&(0,u.jsx)(h.A,{audio:t.content})]}),t.description&&(0,u.jsxs)(A,{children:[p.xl&&t.description.map(((e,t,i)=>(0,u.jsx)(r.iY,{last:t===i.length-1,children:e}))),p.Fr&&(0,u.jsx)(r.iY,{last:!0,children:t.mobileDescription})]})]}),0!==t.lessonMaterials.length&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(w,{children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b:"}),(0,u.jsx)(k,{children:t.lessonMaterials.map((e=>(0,u.jsx)(b,{...e})))})]})]})}},9150:(e,t,i)=>{i.d(t,{y:()=>n});const n=i(5464).Ay.div`
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
`},5514:(e,t,i)=>{e.exports=i.p+"static/media/mon amour remix.acf311e8a7c06b14cda5.mp3"},5885:(e,t,i)=>{e.exports=i.p+"static/media/mockVideoPreview.b8ad3f8d4acdea8c0258.jpg"}}]);
//# sourceMappingURL=577.06b9de35.chunk.js.map