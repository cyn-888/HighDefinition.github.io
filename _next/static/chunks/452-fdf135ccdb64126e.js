"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[452],{3621:function(e,t,n){n(5893),n(9603),n(7294),n(1664)},2662:function(e,t,n){n.d(t,{Z:function(){return y}});var i=n(1799);function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}var o=n(5893),r=n(7294);var l=function(e,t){},a=Object.defineProperty,c=(e,t,n)=>(((e,t,n)=>{t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!==typeof t?t+"":t,n),n),d=(...e)=>(...t)=>e.forEach((e=>e&&e(...t)));function h(...e){return e.every((e=>null==e))?null:t=>{e.forEach((e=>{!function(e,t){if(null!=e)if("function"===typeof e)e(t);else try{e.current=t}catch(n){throw new Error(`Cannot assign value "${t}" to ref "${e}"`)}}(e,t)}))}}function u(e,t,n){const[i,s]=(0,r.useState)(t),o=(0,r.useRef)("undefined"!==typeof e),a=o.current?e:i,c=function(e){const t=(0,r.useRef)(e);return(0,r.useEffect)((()=>{t.current=e})),(0,r.useCallback)(((...e)=>t.current?.(...e)),[])}(n),d=(0,r.useCallback)((e=>{const t="function"===typeof e?e(a):e;o.current||s(t),c?.(t)}),[c,a]);return(0,r.useEffect)((()=>{l(!(o.current&&null==e),"useCollapse is changing from controlled to uncontrolled. useCollapse should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop."),l(!(!o.current&&null!=e),"useCollapse is changing from uncontrolled to controlled. useCollapse should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop.")}),[e]),[a,d]}var p="undefined"!==typeof window?r.useLayoutEffect:r.useEffect;var g=(()=>{let e=1;const t=new WeakMap,n=(i,s)=>"number"===typeof i||"string"===typeof i?s?`idx-${s}`:`val-${i}`:t.has(i)?"uid"+t.get(i):(t.set(i,e++),n(i));return n})();function f(e={}){const{isExpanded:t,defaultExpanded:n,onExpandedChange:i,...s}=e,o=(0,r.useId)(),a=(0,r.useRef)(null),[f,m]=(0,r.useState)(null),[x,y]=u(t,n,i),b={id:o,...s,getCollapseElement:()=>a.current,getToggleElement:()=>f,defaultExpanded:x,onExpandedChange:y},[j]=(0,r.useState)((()=>new class{constructor(e){c(this,"isExpanded"),c(this,"options"),c(this,"id"),c(this,"collapseElement",null),c(this,"isMounted",!1),c(this,"init",(()=>{const e=this.options.getCollapseElement();this.collapseElement!==e&&(this.collapseElement=e,this.isExpanded||this.setStyles(this.getCollapsedStyles()))})),c(this,"getCollapsedStyles",(()=>({display:0===this.options.collapsedHeight?"none":"block",height:`${this.options.collapsedHeight}px`,overflow:"hidden"}))),c(this,"setOptions",(e=>{const t="function"===typeof e?e(this.options):e;Object.entries(t).forEach((([e,n])=>{"undefined"===typeof n&&delete t[e]})),this.options={duration:"auto",easing:"cubic-bezier(0.4, 0, 0.2, 1)",expandStyles:{},collapseStyles:{},hasDisabledAnimation:!1,collapsedHeight:0,defaultExpanded:!1,onExpandedChange(){},...t},this.id=this.options.id??`collapse-${g(this)}`})),c(this,"setStyles",(e=>{const t=this.options.getCollapseElement();if(t)for(const n in e){const i=e[n];i?t.style[n]=i:t.style.removeProperty(n)}})),c(this,"getTransitionStyles",(e=>{if(this.options.hasDisabledAnimation)return"";const t="auto"===this.options.duration?function(e){if(!e||"string"===typeof e)return 0;const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}(e):this.options.duration;return`height ${t}ms ${this.options.easing}`})),c(this,"handleTransitionEnd",(e=>{"height"===e.propertyName&&(this.isExpanded?(this.setStyles({height:"",overflow:"",transition:"",display:""}),this.options.onExpandEnd?.()):(this.setStyles({...this.getCollapsedStyles(),transition:""}),this.options.onCollapseEnd?.()))})),c(this,"open",(()=>{if(this.isExpanded||!this.isMounted)return;const e=this.options.getCollapseElement();e&&(this.isExpanded=!0,this.options.onExpandedChange?.(!0),this.options.onExpandStart?.(),function(e){if(window&&"getComputedStyle"in window){const{paddingTop:t,paddingBottom:n}=window.getComputedStyle(e);l(!(t&&"0px"!==t||n&&"0px"!==n),"Collapse: Padding applied to the collapse element will cause the animation to break and not perform as expected. To fix, apply equivalent padding to the direct descendent of the collapse element.")}}(e),requestAnimationFrame((()=>{this.setStyles({...this.options.expandStyles,display:"block",overflow:"hidden",height:`${this.options.collapsedHeight}px`}),requestAnimationFrame((()=>{const t=e.scrollHeight;e.style.transition=this.getTransitionStyles(t),e.style.height=`${t}px`}))})))})),c(this,"close",(()=>{if(!this.isExpanded)return;const e=this.options.getCollapseElement();e&&(this.isMounted?(this.isExpanded=!1,this.options.onExpandedChange?.(!1),this.options.onCollapseStart?.(),requestAnimationFrame((()=>{const t=e.scrollHeight;this.setStyles({...this.options.collapseStyles,transition:this.getTransitionStyles(t),height:`${t}px`}),requestAnimationFrame((()=>{this.setStyles({height:`${this.options.collapsedHeight}px`,overflow:"hidden"})}))}))):this.init())})),c(this,"toggle",(()=>{this.isExpanded?this.close():this.open()})),c(this,"getCollapse",(()=>{const e=Boolean(this.options.getToggleElement?.());return{id:this.id,"aria-hidden":!this.isExpanded||void 0,onTransitionEndHandler:this.handleTransitionEnd,style:{boxSizing:"border-box"},role:"region","aria-labelledby":e?`${this.id}-toggle`:void 0}})),c(this,"getToggle",(({disabled:e}={disabled:!1})=>{const t=this.options.getToggleElement?.(),n=!!t&&"BUTTON"===t.tagName,i={onClickHandler:e?()=>{}:this.toggle,id:`${this.id}-toggle`,"aria-controls":this.id,"aria-expanded":this.isExpanded};return n?(i.type="button",i.disabled=!!e||void 0):(i["aria-disabled"]=!!e||void 0,i.role="button",i.tabIndex=e?-1:0),i})),this.setOptions(e),this.isExpanded=Boolean(this.options.defaultExpanded),this.init(),this.isMounted=!0}}(b)));j.setOptions(b),p((()=>{x?j.open():j.close()}),[x,j]);const v=e=>{a.current!==e&&(a.current=e,e&&j.init())};return{getCollapseProps({refKey:e="ref",...t}={}){const n=t[e];if(!j)return{[e]:h(n,v)};const{onTransitionEndHandler:i,...s}=j.getCollapse();return{...t,...s,[e]:h(n,v),onTransitionEnd:i}},getToggleProps({disabled:e,onClick:t=(()=>{}),refKey:n="ref",...i}={}){const s=i[n];if(!j)return{[n]:h(s,m)};const{onClickHandler:o,...r}=j.getToggle({disabled:e});return{...i,...r,[n]:h(s,m),onClick:d(o,t)}},isExpanded:x,setExpanded:y}}var m=n(9603),x=n(9417);function y(e){var t,n=(0,r.useState)(null!==(t=e.expanded)&&void 0!==t&&t),l=n[0],a=n[1],c=f({isExpanded:l}),d=c.getCollapseProps,h=c.getToggleProps;return(0,o.jsxs)("div",{className:"collapsible",children:[(0,o.jsx)("div",s((0,i.Z)({className:"header"},h({onClick:function(){a(!l)}})),{children:(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,o.jsx)(m.G,{icon:l?x.gc2:x.onQ,width:"25",height:"25",className:"icon",style:{marginRight:15,color:"white",margin:0,padding:0}}),(0,o.jsx)("h4",{children:e.title})]})})),(0,o.jsx)("div",s((0,i.Z)({},d()),{children:(0,o.jsx)("div",{className:"content",children:e.children})}))]})}},9504:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(603),s=n(5893),o=n(7294);function r(e){var t=(0,i.Z)(o.useState(!1),2),n=t[0],r=t[1],l=o.useRef();return o.useEffect((function(){new IntersectionObserver((function(e){e.forEach((function(e){return r(e.isIntersecting)}))})).observe(l.current)}),[]),(0,s.jsx)("div",{className:"fade ".concat(n?"is-visible":""),ref:l,children:e.children})}},6151:function(e,t,n){n.d(t,{Z:function(){return l}});var i=n(5893),s=(n(1664),n(9603)),o=n(9417),r=n(1417);function l(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"Footer",children:(0,i.jsxs)("div",{className:"footerPt2",children:[(0,i.jsxs)("h4",{children:["Contact us at"," ",(0,i.jsx)("a",{href:"mailto:ftc18225@gmail.com",style:{color:"white"},children:"ftc18225@gmail.com"})]}),(0,i.jsxs)("div",{className:"flex",style:{marginTop:5},children:[(0,i.jsx)("a",{href:"https://www.youtube.com/channel/UC8ZLjVy_9Y56cfqpqarRoQg",target:"_blank",children:(0,i.jsx)(s.G,{icon:r.opf,style:{height:25,marginRight:10,color:"white"}})}),(0,i.jsx)("a",{href:"https://ftc-events.firstinspires.org/team/18225",target:"_blank",children:(0,i.jsx)(s.G,{icon:o.O7Q,style:{height:25,marginRight:10,color:"white"}})}),(0,i.jsx)("a",{href:"https://www.linkedin.com/in/high-definition-045289247/",target:"_blank",children:(0,i.jsx)(s.G,{icon:r.D9H,style:{height:25,marginRight:10,color:"white"}})}),(0,i.jsx)("a",{href:"https://www.instagram.com/ftc18225/",target:"_blank",children:(0,i.jsx)(s.G,{icon:r.Zzi,style:{height:25,marginRight:10,color:"white"}})})]})]})})})}},4683:function(e,t,n){n.d(t,{Z:function(){return l}});var i=n(5893),s=n(7294),o=n(6885),r=n(1955);n(3621);function l(e){var t=e.title,n=e.description,l=e.page,a=(0,s.useState)(""),c=(a[0],a[1]);(0,s.useEffect)((function(){return window.addEventListener("resize",d),d(),function(){return window.removeEventListener("resize",d)}}),[]);var d=function(){window.innerWidth>=768?c("/images/TeamPicture.jpg"):c("/images/phonebackground.png")};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{name:l}),(0,i.jsxs)("div",{className:"coolHeader",style:{backgroundRepeat:"no-repeat",backgroundPosition:"top right",backgroundAttachment:"fixed",backgroundSize:"cover",height:"Home"==l?"100vh":"60vh"},children:[(0,i.jsx)(r.Z,{name:l}),(0,i.jsx)("div",{className:"sidepanel",style:{height:"Home"==l?"70vh":"25vh"},children:(0,i.jsxs)("div",{style:{fontFamily:"Roboto",fontWeight:400,color:"white"},className:"floating",children:[(0,i.jsx)("h1",{style:{marginBottom:5},children:t}),(0,i.jsx)("p",{style:{margin:0,padding:0,fontSize:25},children:n}),(0,i.jsx)("p",{style:{margin:0,padding:0},children:(0,i.jsx)("i",{children:"FTC Team 18225"})})]})})]})]})}},1955:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(5893),s=n(1664),o=n.n(s),r=(n(5675),"/_next/static/media/logo.0e2d33c4.png"),l=n(7294),a=n(9417),c=n(9603);function d(e){var t=e.name,n=(0,l.useState)("none"),s=n[0],d=n[1],h=(0,l.useState)(0),u=(h[0],h[1]);(0,l.useEffect)((function(){return window.addEventListener("resize",p),p(),function(){return window.removeEventListener("resize",p)}}),[]);var p=function(){u(window.innerWidth),window.innerWidth>=768&&d("flex");try{document.getElementById(t+"").classList.add("this-page")}catch(e){}};return(0,i.jsx)("div",{className:"Tabs",children:(0,i.jsxs)("ul",{className:"tabs",children:[(0,i.jsx)("li",{className:"logo",children:(0,i.jsx)(o(),{href:"/",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:r,width:"45px",height:"45px"})})})}),(0,i.jsx)("li",{style:{display:s},className:"tab",children:(0,i.jsx)(o(),{href:"/",children:(0,i.jsx)("a",{id:"Home",className:"tab-label",children:"Home"})})}),(0,i.jsx)("li",{style:{display:s},className:"tab",children:(0,i.jsx)(o(),{href:"/about",children:(0,i.jsx)("a",{id:"About",className:"tab-label",children:"About"})})}),(0,i.jsx)("li",{style:{display:s},className:"tab",children:(0,i.jsx)(o(),{href:"/events",children:(0,i.jsx)("a",{id:"Events",className:"tab-label",children:"Events"})})}),(0,i.jsx)("li",{style:{display:s},className:"tab",children:(0,i.jsx)(o(),{href:"/seasons",children:(0,i.jsx)("a",{id:"Seasons",className:"tab-label",children:"Seasons"})})}),(0,i.jsx)("li",{style:{display:s},className:"tab",children:(0,i.jsx)(o(),{href:"/resources",children:(0,i.jsx)("a",{id:"Resources",className:"tab-label",children:"Resources"})})}),(0,i.jsx)("li",{style:{display:s},className:"tab",children:(0,i.jsx)(o(),{href:"/contact",children:(0,i.jsx)("a",{id:"Contact",className:"tab-label",children:"Contact"})})}),(0,i.jsx)("li",{onClick:function(){d("flex"==s?"none":"flex")},className:"toggle",style:{padding:5,paddingBottom:10,marginRight:10},children:(0,i.jsx)("span",{className:"bars",children:(0,i.jsx)(c.G,{icon:a.xiG,width:"26",height:"26",style:{color:"white"}})})})]})})}},7135:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(5893);function s(e){var t=e.name;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{style:{fontFamily:"Hubballi",fontSize:35,transform:"scale(1, 1.3)",textAlign:"center"},children:t}),(0,i.jsx)("hr",{style:{width:300}})]})}},6885:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(5893),s=n(9008),o=n.n(s);function r(e){var t=e.name;return(0,i.jsxs)(o(),{children:[(0,i.jsxs)("title",{children:["High Definition | ",t]}),(0,i.jsx)("meta",{name:"description",content:"We are First Tech Challenge (FTC) Team 18225 High Definition, a 4th year veteran robotics team from Bellevue, Washington composed of 14 enthusiastic students grades 7-12. Our mission is to promote STEM and FIRST within our community to inspire the next generation of innovators to solve challenges of the future! We spread mechanical, programming, business, and other practices within the community to ensure their success."}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, minimum-scale=1"}),(0,i.jsx)("meta",{property:"og:image",content:"/logo.png"}),(0,i.jsx)("link",{rel:"icon",href:"/logo.png"})]})}}}]);