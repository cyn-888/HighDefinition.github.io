(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[695],{3200:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events",function(){return t(4039)}])},3621:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var s=t(5893),i=t(1436),r=t(2814),a=t(7294);t(1664);function l(){return(0,a.useEffect)((function(){null!=localStorage.getItem("banner1")&&null!=localStorage.getItem("timeClosed")||(localStorage.setItem("banner1","block"),localStorage.setItem("timeClosed","none")),(Date.now()-localStorage.getItem("timeClosed"))/1e3>=3600&&(localStorage.removeItem("banner1"),localStorage.removeItem("timeClosed")),document.getElementById("banner1").style.display=localStorage.getItem("banner1"),document.getElementById("banner-x").addEventListener("click",(function(){localStorage.setItem("banner1","none"),document.getElementById("banner1").style.display=localStorage.getItem("banner1"),localStorage.setItem("timeClosed",Date.now())}))}),[]),(0,s.jsx)("div",{className:"Banner",children:(0,s.jsxs)("div",{className:"row banner-bar",style:{textAlign:"center"},id:"banner1",children:[(0,s.jsx)("div",{className:"col banner-left",children:(0,s.jsxs)("p",{children:["Help fund our team's journey to the FTC World Championship 2022 ",(0,s.jsx)("a",{style:{color:"rgb(0, 0, 180)"},target:"_blank",href:"https://gofund.me/7da764b4",children:"now!"})]})}),(0,s.jsx)("div",{className:"col banner-right",children:(0,s.jsx)("p",{children:(0,s.jsx)("span",{className:"banner-x",id:"banner-x",children:(0,s.jsx)(r.G,{icon:i.NBC})})})})]})})}},6151:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var s=t(5893);t(1664);function i(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"Footer",children:[(0,s.jsx)("div",{className:"footerPt1"}),(0,s.jsx)("div",{className:"footerPt2",children:(0,s.jsx)("h4",{children:"\xa9 High Definition 2022 | All Rights Reserved | Designed by High Definition"})})]})})}},4683:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var s=t(5893),i=t(7294),r=t(6885),a=t(1955),l=t(3621);function c(e){var n=e.title,t=e.description,c=e.page,d=(0,i.useState)(""),o=(d[0],d[1]);(0,i.useEffect)((function(){return console.log(n),window.addEventListener("resize",h),h(),function(){return window.removeEventListener("resize",h)}}),[]);var h=function(){window.innerWidth>=768?o("/images/TeamPicture.png"):o("/images/phonebackground.png")};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Z,{name:c}),(0,s.jsxs)("div",{className:"coolHeader",style:{backgroundRepeat:"no-repeat",backgroundPosition:"top right",backgroundAttachment:"fixed",backgroundSize:"cover",height:"Home"==c?"100vh":"80vh"},children:[(0,s.jsx)(a.Z,{name:c}),(0,s.jsx)("div",{className:"sidepanel",style:{height:"Home"==c?"70vh":"45vh"},children:(0,s.jsxs)("div",{style:{fontFamily:"Roboto",fontWeight:400,color:"white"},className:"floating",children:[(0,s.jsx)("h1",{style:{marginBottom:5},children:n}),(0,s.jsx)("p",{style:{margin:0,padding:0,fontSize:25},children:t}),(0,s.jsx)("p",{style:{margin:0,padding:0},children:(0,s.jsx)("i",{children:"Reaching High. Defining Futures."})})]})})]}),(0,s.jsx)(l.Z,{})]})}},1955:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var s=t(5893),i=t(1664),r=(t(5675),"/_next/static/media/logo.0e2d33c4.png"),a=t(7294),l=t(1436),c=t(2814);function d(e){var n=e.name,t=(0,a.useState)("none"),d=t[0],o=t[1],h=(0,a.useState)(0),u=(h[0],h[1]);(0,a.useEffect)((function(){return window.addEventListener("resize",x),x(),function(){return window.removeEventListener("resize",x)}}),[]);var x=function(){u(window.innerWidth),window.innerWidth>=768&&o("flex");try{document.getElementById(n+"").classList.add("this-page")}catch(e){}};return(0,s.jsx)("div",{className:"Tabs",children:(0,s.jsxs)("ul",{className:"tabs",children:[(0,s.jsx)("li",{className:"logo",children:(0,s.jsx)(i.default,{href:"/",children:(0,s.jsx)("a",{children:(0,s.jsx)("img",{src:r,width:"45px",height:"45px"})})})}),(0,s.jsx)("li",{style:{display:d},className:"tab",children:(0,s.jsx)(i.default,{href:"/",as:"https://ftc18225.everstem.org/",children:(0,s.jsx)("a",{id:"Home",className:"tab-label",children:"Home"})})}),(0,s.jsx)("li",{style:{display:d},className:"tab",children:(0,s.jsx)(i.default,{href:"/about",as:"https://ftc18225.everstem.org/about",children:(0,s.jsx)("a",{id:"About",className:"tab-label",children:"About"})})}),(0,s.jsx)("li",{style:{display:d},className:"tab",children:(0,s.jsx)(i.default,{href:"/events",as:"https://ftc18225.everstem.org/events",children:(0,s.jsx)("a",{id:"Events",className:"tab-label",children:"Events"})})}),(0,s.jsx)("li",{style:{display:d},className:"tab",children:(0,s.jsx)(i.default,{href:"/accomplishments",as:"https://ftc18225.everstem.org/accomplishments",children:(0,s.jsx)("a",{id:"Accomplishments",className:"tab-label",children:"Accomplishments"})})}),(0,s.jsx)("li",{style:{display:d},className:"tab",children:(0,s.jsx)(i.default,{href:"/seasons",as:"https://ftc18225.everstem.org/seasons",children:(0,s.jsx)("a",{id:"Seasons",className:"tab-label",children:"Seasons"})})}),(0,s.jsx)("li",{style:{display:d},className:"tab",children:(0,s.jsx)(i.default,{href:"/resources",as:"https://ftc18225.everstem.org/resources",children:(0,s.jsx)("a",{id:"Resources",className:"tab-label",children:"Resources"})})}),(0,s.jsx)("li",{style:{display:d},className:"tab",children:(0,s.jsx)(i.default,{href:"/contact",as:"https://ftc18225.everstem.org/contact",children:(0,s.jsx)("a",{id:"Contact",className:"tab-label",children:"Contact"})})}),(0,s.jsx)("li",{onClick:function(){o("flex"==d?"none":"flex")},className:"toggle",style:{padding:5,paddingBottom:10,marginRight:10},children:(0,s.jsx)("span",{className:"bars",children:(0,s.jsx)(c.G,{icon:l.xiG,width:"26",height:"26",style:{color:"white"}})})})]})})}},7135:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var s=t(5893);function i(e){var n=e.name;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{children:n}),(0,s.jsx)("hr",{style:{width:300}})]})}},6885:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var s=t(5893),i=t(4298),r=t(9008);function a(e){var n=e.name;return(0,s.jsxs)(r.default,{children:[(0,s.jsxs)("title",{children:["High Definition | ",n]}),(0,s.jsx)("meta",{name:"description",content:"FIRST Tech Challenge Team 18225, High Definition, is a team of 14 enthusiastic students with a passion for STEAM and robotics. Our goal is to inspire students to participate in FIRST competitions to kickstart their STEM journies."}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, minimum-scale=1"}),(0,s.jsx)(i.default,{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-QCB5JEYRBH"}),(0,s.jsx)(i.default,{type:"text/javascript",dangerouslySetInnerHTML:{__html:"\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n                gtag('config', 'G-QCB5JEYRBH');\n            "}}),(0,s.jsx)("link",{rel:"icon",href:"/logo.png"})]})}},4336:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var s=t(5893),i=t(7135),r=t(2814),a=t(1436);function l(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"section",children:[(0,s.jsx)(i.Z,{name:"Upcoming or Current Events"}),(0,s.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:(0,s.jsxs)("span",{style:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(r.G,{icon:a.kWN,width:"20",height:"20",className:"icon"})," \xa0 \xa0 ",(0,s.jsxs)("p",{style:{fontWeight:300},children:[(0,s.jsx)("b",{children:"World Championship"}),": April"]})]})})]})})}},4039:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var s=t(5893),i=(t(1955),t(6885),t(4683)),r=t(6151),a=t(7135),l=(t(2814),t(4336)),c=t(7294);t(3621);function d(){var e=(0,c.useState)(0),n=e[0],t=e[1];(0,c.useEffect)((function(){return window.addEventListener("resize",d),d(),function(){return window.removeEventListener("resize",d)}}),[]);var d=function(){t(window.innerWidth)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{title:"Events",page:"Events",description:"Join us throughout our various events"}),(0,s.jsxs)("div",{className:"Events",children:[(0,s.jsx)(l.Z,{}),(0,s.jsxs)("div",{className:"section",children:[(0,s.jsx)(a.Z,{name:"Past Events"}),(0,s.jsxs)("div",{id:"outreaches",children:[(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,s.jsx)("a",{className:"purplebutton",href:"https://www.youtube.com/c/EverstemEducation",target:"_blank",children:"Watch Some of Our Past Events Here"})}),(0,s.jsxs)("div",{className:"eventsection",children:[(0,s.jsx)("p",{children:"Connecting with Professionals"}),n<800?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("ul",{style:{fontWeight:300},children:[(0,s.jsx)("li",{children:"Self Taught Airplane Building and Pilot"}),(0,s.jsx)("li",{children:"Wearable Technology Workshop"}),(0,s.jsx)("li",{children:"Intelligent Transportation Systems"}),(0,s.jsx)("li",{children:"Careers at iRobot"}),(0,s.jsx)("li",{children:"Careers in the Gaming Industry"}),(0,s.jsx)("li",{children:"Startup Life Cycle and Business Funding"}),(0,s.jsx)("li",{children:"Robotics Industry in Japan"}),(0,s.jsx)("li",{children:"The Art of Business and Inventing"}),(0,s.jsx)("li",{children:"Mixed Reality & Robotics"}),(0,s.jsx)("li",{children:"Robotics in Medicine"}),(0,s.jsx)("li",{children:"Business and Entrepreneurship in Robotics"}),(0,s.jsx)("li",{children:"Gravitational Waves in Astronomy"}),(0,s.jsx)("li",{children:"AI Applications in Transportation Engineering"}),(0,s.jsx)("li",{children:"Connected Automated Vehicles"}),(0,s.jsx)("li",{children:"Leveraging Scale Designs for Connected Automated Vehicles Research"}),(0,s.jsx)("li",{children:"Artificial Intelligence and Robotics"}),(0,s.jsx)("li",{children:"Science & Education: Indoors and Out"})]})}):(0,s.jsxs)("table",{id:"professionals",children:[(0,s.jsxs)("tr",{id:"firstrow",children:[(0,s.jsx)("th",{children:"EVENT"}),(0,s.jsx)("th",{children:"PROFESSIONALS"})]}),(0,s.jsxs)("tr",{style:{fontWeight:300},children:[(0,s.jsx)("td",{children:"Self Taught Airplane Building and Pilot"}),(0,s.jsx)("td",{children:"Walter Haag"})]}),(0,s.jsxs)("tr",{style:{fontWeight:300},children:[(0,s.jsx)("td",{children:"Wearable Technology Workshop"}),(0,s.jsx)("td",{children:"Kitty Yeung"})]}),(0,s.jsxs)("tr",{style:{fontWeight:300},children:[(0,s.jsx)("td",{children:"Computer Vision for Intelligent Transportation Systems"}),(0,s.jsx)("td",{children:"Ruimin Ke"})]}),(0,s.jsxs)("tr",{style:{fontWeight:300},children:[(0,s.jsx)("td",{children:"Careers at iRobot"}),(0,s.jsx)("td",{children:"iRobot"})]}),(0,s.jsxs)("tr",{style:{fontWeight:300},children:[(0,s.jsx)("td",{children:"Careers in the Gaming Industry"}),(0,s.jsx)("td",{children:"Robert Neckorcuk & Kirk Williford"})]}),(0,s.jsxs)("tr",{style:{fontWeight:300},children:[(0,s.jsx)("td",{children:"Startup Life Cycle and Business Funding"}),(0,s.jsx)("td",{children:"Howie Xu"})]}),(0,s.jsxs)("tr",{style:{fontWeight:300},children:[(0,s.jsx)("td",{children:"Robotics Industry in Japan"}),(0,s.jsx)("td",{children:"Shiyu Xia"})]}),(0,s.jsxs)("tr",{style:{fontWeight:300},children:[(0,s.jsx)("td",{children:"The Art of Business and Inventing"}),(0,s.jsx)("td",{children:"Ryfka Schafer"})]}),(0,s.jsxs)("tr",{style:{fontWeight:300},children:[(0,s.jsx)("td",{children:"Mixed Reality & Robotics"}),(0,s.jsx)("td",{children:"Jeff Delmerico"})]}),(0,s.jsxs)("tr",{style:{fontWeight:300},children:[(0,s.jsx)("td",{children:"Robotics in Medicine"}),(0,s.jsx)("td",{children:"Chumyan Wu"})]}),(0,s.jsxs)("tr",{style:{fontWeight:300},children:[(0,s.jsx)("td",{children:"Business and Entrepreneurship in Robotics"}),(0,s.jsx)("td",{children:"Fab Qian, Meera Rajagopalan, & Hannah Liu"})]}),(0,s.jsxs)("tr",{style:{fontWeight:300},children:[(0,s.jsx)("td",{children:"Gravitational Waves in Astronomy"}),(0,s.jsx)("td",{children:"Gwynne Crowder"})]}),(0,s.jsxs)("tr",{style:{fontWeight:300},children:[(0,s.jsx)("td",{children:"AI Applications in Transportation Engineering"}),(0,s.jsx)("td",{children:"Yinhai Wang"})]}),(0,s.jsxs)("tr",{style:{fontWeight:300},children:[(0,s.jsx)("td",{children:"Connected Automated Vehicles"}),(0,s.jsx)("td",{children:"Xiaopeng (Shaw) Li"})]}),(0,s.jsxs)("tr",{style:{fontWeight:300},children:[(0,s.jsx)("td",{children:"Leveraging Scale Designs for Connected Automated Vehicles Research"}),(0,s.jsx)("td",{children:"Osama Osman"})]}),(0,s.jsxs)("tr",{style:{fontWeight:300},children:[(0,s.jsx)("td",{children:"Artificial Intelligence and Robotics"}),(0,s.jsx)("td",{children:"Anne Kao"})]}),(0,s.jsxs)("tr",{style:{fontWeight:300},children:[(0,s.jsx)("td",{children:"Science & Education: Indoors and Out"}),(0,s.jsx)("td",{children:"Laura LeBlanc"})]})]})]}),(0,s.jsx)("div",{className:"eventsection",children:"Hacktable CAD Workshop"}),(0,s.jsx)("div",{className:"eventsection",children:"Python Workshop"}),(0,s.jsx)("div",{className:"eventsection",children:"Virtual FTC Scrimmage"}),(0,s.jsx)("div",{className:"eventsection",children:"Chipotle Fundraiser"}),(0,s.jsx)("div",{className:"eventsection",children:"Washington Tech Invitationals (Co-Hosted with Saints Robotics)"})]})]})]}),(0,s.jsx)(r.Z,{})]})}}},function(e){e.O(0,[523,36,774,888,179],(function(){return n=3200,e(e.s=n);var n}));var n=e.O();_N_E=n}]);