"use strict";(self.webpackChunkacademy_app=self.webpackChunkacademy_app||[]).push([[495],{1495:(e,t,i)=>{i.r(t),i.d(t,{default:()=>I});i(5043);var r=i(3003),o=(i(5995),i(2546)),s=i(3825),n=i(5464),l=i(7630),c=i(579);const d=n.Ay.div`
    ${(0,l.S)(90)};
    ${(0,l.c)(90)}
    display: flex;
    align-items: center;
`,a=n.Ay.div`
    background-color: ${e=>e.theme.colors.text};
    width: 5svw;
    min-width: 80px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 24px;
    color: ${e=>e.theme.colors.secondary};
    ${(0,o.sl)(40,40,30)};

`,h=n.Ay.img`
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
`,x=n.Ay.div`
    
`,p=n.AH`
    display: block;
    color: ${e=>e.theme.colors.text};
    ${(0,o.sl)(18,18,14)}
    user-select: none;
`,m=n.Ay.a`
    ${p}
    text-transform: uppercase;
    font-weight: 600;
`,u=n.Ay.a`
    ${p}
    opacity: 0.5;
    ${(0,l.c)(12)}
`,y=n.Ay.a`
    ${p}
    cursor: pointer;
`;const j=function(){const e=(0,r.d4)((e=>e.user)).user;return(0,c.jsxs)(d,{children:[(0,c.jsx)(a,{children:null!==e&&void 0!==e&&e.photo?(0,c.jsx)(h,{alt:"userPhoto",src:e.photo}):(0,c.jsx)(s.aSe,{})}),(0,c.jsxs)(x,{children:[(0,c.jsx)(m,{children:(null===e||void 0===e?void 0:e.firstname)+" "+(null===e||void 0===e?void 0:e.secondname)}),(0,c.jsx)(u,{children:null===e||void 0===e?void 0:e.mail}),(0,c.jsx)(y,{onClick:()=>{alert("\u0422\u0443\u0442 \u043f\u043e\u043f\u0430\u043f \u0441 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0445?")},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})]})]})};var w=i(1422);const v=n.Ay.a`
    display: block;
    user-select: none;
    color: ${e=>e.theme.colors.text};
    font-weight: 700;
    ${(0,o.sl)(36,36,18)}
    text-transform: uppercase;
    ${(0,l.c)(45)}
`,f=n.Ay.a`
    display: block;
    color: ${e=>e.theme.colors.text};
    ${(0,o.sl)(18,18,12)}
    max-width: 30%;
    @media (max-width: ${w.u3}) {
        max-width: 65%;
    }

    @media (max-width: ${w.Qh}) {
        max-width: 80%;
    }
`,$=n.AH`
    display: block;
     ${(0,l.c)(180)}

`,g=n.Ay.div`
    ${(0,l.S)(60)}
`;var A=i(8738);const b=n.Ay.div`
    ${$}
`,k=n.Ay.div`
    display: flex;
    align-items: center;
    ${(0,l.c)(24)}
`,C=n.Ay.div`
    width: 4.5svw;
    aspect-ratio: 2/1;
    border: ${e=>e.theme.colors.text} 3px solid;
    border-radius: 5px;
    position: relative;
    display: flex;
    align-items: center;

    &::before{
        position: absolute;
        background-color: ${e=>e.theme.colors.secondary};
        top: 50%;
        right: calc(-7% - 2.5px);
        transform: translateY(-50%);
        border-right: inherit;
        border-top: inherit;
        border-bottom: inherit;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        content: '';

        height: 40%;
        width: 7%;
    }

    @media (max-width: ${w.u3}){
        width: 10svw;
    }
    @media (max-width: ${w.Qh}){
        width: 12svw;
    }
`,O=n.Ay.div`
    width: calc(100%/9);
    height: 100%;
    position: relative;


    &::after{
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background-color: ${e=>e.theme.colors.text};
        width: 60%;
        height: 90%;
        border-radius: 5px;
        
    }

`;function T(e){let{points:t}=e;return(0,c.jsx)(C,{children:Array.from({length:t}).map(((e,t)=>(0,c.jsx)(O,{},t)))})}const P=n.Ay.a`
    display: block;
    color: ${e=>e.theme.colors.text};
    ${(0,o.sl)(64,64,36)}
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1;
    margin-right: 20px;
`;var F=function(e){return e.low="\u0412\u044b\u0441\u043e\u043a\u0430\u044f",e.middle="\u0421\u0440\u0435\u0434\u043d\u044f\u044f",e.high="\u0412\u044b\u0441\u043e\u043a\u0430\u044f",e}(F||{});const H={3:F.low,6:F.middle,9:F.high};const Q=function(){const e=(t=5)<=3?H[3]:t<=6?H[6]:H[9];var t;return(0,c.jsxs)(b,{children:[(0,c.jsx)(v,{children:"\u041c\u043e\u044f \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c:"}),(0,c.jsxs)(k,{children:[(0,c.jsx)(P,{children:e}),(0,c.jsx)("div",{children:(0,c.jsx)(T,{points:5})})]}),(0,c.jsx)(f,{children:"\u0410\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u043e\u0442\u0440\u0430\u0436\u0430\u0435\u0442 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u0432\u0430\u0448\u0435\u0433\u043e \u0440\u0430\u0431\u043e\u0447\u0435\u0433\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f"}),e!==F.high&&(0,c.jsx)(g,{children:(0,c.jsx)(o.OO,{style:{width:A.Fr?"100%":void 0,textAlign:"center"},hover:!0,onClick:()=>alert("\u041a\u0430\u043a-\u0442\u043e \u043f\u043e\u0432\u044b\u0448\u0430\u0435\u043c \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),children:"\u043f\u043e\u0432\u044b\u0441\u0438\u0442\u044c \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"})})]})},S=n.Ay.div`
    ${$}
`,Y=n.Ay.div`
    display: flex;
    ${(0,l.c)(24)}
    align-items: end;
`,_=n.Ay.a`
    user-select: none;
    display: block;
    color: ${e=>e.theme.colors.text};
    ${(0,o.sl)(64,64,36)}
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1;
    margin-right: 10px;
`,B=n.Ay.a`
    ${p}
    cursor: pointer;
`;const G=function(){return(0,c.jsxs)(S,{children:[(0,c.jsx)(v,{children:"\u041c\u043e\u0438 \u0431\u043e\u043d\u0443\u0441\u043d\u044b\u0435 \u0431\u0430\u043b\u043b\u044b:"}),(0,c.jsxs)(Y,{children:[(0,c.jsx)(_,{children:"100"}),(0,c.jsx)(B,{onClick:()=>alert("\u041f\u043e\u043f\u0430\u043f \u0441 \u0438\u0441\u0442\u043e\u0440\u0438\u0435\u0439 \u043d\u0430\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u0431\u043e\u043d\u0443\u0441\u043e\u0432"),children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})]}),(0,c.jsx)(f,{children:"\u0411\u043e\u043d\u0443\u0441\u043d\u044b\u0435 \u0431\u0430\u043b\u043b\u044b \u0437\u0430\u0447\u0438\u0441\u043b\u044f\u044e\u0442\u0441\u044f \u0437\u0430 \u0432\u0430\u0448\u0443 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0441\u0441\u044b\u043b\u043a\u043e\u0439 \u0441 \u0434\u0440\u0443\u0437\u044c\u044f\u043c\u0438 \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 50 \u0431\u0430\u043b\u043b\u043e\u0432."}),(0,c.jsx)(g,{children:(0,c.jsx)(o.OO,{style:{width:A.Fr?"100%":void 0,textAlign:"center"},hover:!0,onClick:()=>alert("\u041a\u0430\u043a-\u0442\u043e \u0434\u0435\u043b\u0438\u043c\u0441\u044f \u0441\u0441\u044b\u043b\u043a\u043e\u0439"),children:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0441\u0441\u044b\u043b\u043a\u043e\u0439"})})]})};var W=i(2666);const q=n.Ay.div`
    ${$}

    
`,z=(0,n.Ay)(W.xw)`
    width: 40%;

    @media (max-width: ${w.Qh}){
        width: 100%;
    }
`,D=[{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:W.Py.file},{title:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0443\u0440\u043e\u043a\u0430",link:"/\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441 \u0443\u0440\u043e\u043a\u0430\u043c\u0438.pdf",materialType:W.Py.file},{title:"\u0421\u0441\u044b\u043b\u043a\u0430",link:"https://www.awwwards.com",materialType:W.Py.link}];const E=function(){return(0,c.jsxs)(q,{children:[(0,c.jsxs)(v,{children:["\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435",(0,c.jsx)("br",{}),"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b:"]}),(0,c.jsx)(z,{children:D.map((e=>(0,c.jsx)(W.k$,{...e})))}),(0,c.jsx)(g,{children:(0,c.jsx)(o.OO,{style:{width:A.Fr?"100%":void 0,textAlign:"center"},hover:!0,onClick:()=>alert("\u041f\u0435\u0440\u0435\u0445\u043e\u0434 \u043a \u0444\u0430\u0439\u043b\u0430\u043c"),children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0444\u0430\u0439\u043b\u0430\u043c"})})]})};const I=function(){return(0,r.wA)(),(0,c.jsx)(o.YW,{children:(0,c.jsxs)(o.BT,{children:[(0,c.jsx)(o.GH,{marginTop:90,children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"}),(0,c.jsx)(j,{}),(0,c.jsx)(Q,{}),(0,c.jsx)(G,{}),(0,c.jsx)(E,{})]})})}}}]);
//# sourceMappingURL=495.9961c449.chunk.js.map