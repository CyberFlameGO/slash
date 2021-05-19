import{n as ee,m as te,f as oe,b as s,e as re,d as ae,a as X}from"./index-b555160e.js";import{r as c}from"./index-4b0af3e2.js";import{T as ie}from"./index-54885e02.js";import{u as ne}from"./useMergedState-545be37d.js";import{c as Y}from"./index.esm-dc9b15a0.js";import{i as le,c as q}from"./reactNode-7d14b139.js";import{t as F}from"./type-10729977.js";import{g as se}from"./motion-81b6bb21.js";var u={adjustX:1,adjustY:1},p=[0,0],G={left:{points:["cr","cl"],overflow:u,offset:[-4,0],targetOffset:p},right:{points:["cl","cr"],overflow:u,offset:[4,0],targetOffset:p},top:{points:["bc","tc"],overflow:u,offset:[0,-4],targetOffset:p},bottom:{points:["tc","bc"],overflow:u,offset:[0,4],targetOffset:p},topLeft:{points:["bl","tl"],overflow:u,offset:[0,-4],targetOffset:p},leftTop:{points:["tr","tl"],overflow:u,offset:[-4,0],targetOffset:p},topRight:{points:["br","tr"],overflow:u,offset:[0,-4],targetOffset:p},rightTop:{points:["tl","tr"],overflow:u,offset:[4,0],targetOffset:p},bottomRight:{points:["tr","br"],overflow:u,offset:[0,4],targetOffset:p},rightBottom:{points:["bl","br"],overflow:u,offset:[4,0],targetOffset:p},bottomLeft:{points:["tl","bl"],overflow:u,offset:[0,4],targetOffset:p},leftBottom:{points:["br","bl"],overflow:u,offset:[-4,0],targetOffset:p}},fe=function(t){var o=t.overlay,i=t.prefixCls,n=t.id,l=t.overlayInnerStyle;return c.createElement("div",{className:"".concat(i,"-inner"),id:n,role:"tooltip",style:l},typeof o=="function"?o():o)},ce=function(t,o){var i=t.overlayClassName,n=t.trigger,l=n===void 0?["hover"]:n,d=t.mouseEnterDelay,b=d===void 0?0:d,f=t.mouseLeaveDelay,y=f===void 0?.1:f,I=t.overlayStyle,O=t.prefixCls,T=O===void 0?"rc-tooltip":O,A=t.children,R=t.onVisibleChange,L=t.afterVisibleChange,B=t.transitionName,k=t.animation,H=t.motion,S=t.placement,z=S===void 0?"right":S,g=t.align,j=g===void 0?{}:g,x=t.destroyTooltipOnHide,v=x===void 0?!1:x,M=t.defaultVisible,N=t.getTooltipContainer,_=t.overlayInnerStyle,W=ee(t,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle"]),E=c.useRef(null);c.useImperativeHandle(o,function(){return E.current});var V=te({},W);"visible"in t&&(V.popupVisible=t.visible);var D=function(){var C=t.arrowContent,m=C===void 0?null:C,$=t.overlay,h=t.id;return[c.createElement("div",{className:"".concat(T,"-arrow"),key:"arrow"},m),c.createElement(fe,{key:"content",prefixCls:T,id:h,overlay:$,overlayInnerStyle:_})]},P=!1,w=!1;if(typeof v=="boolean")P=v;else if(v&&oe(v)==="object"){var r=v.keepParent;P=r===!0,w=r===!1}return c.createElement(ie,s({popupClassName:i,prefixCls:T,popup:D,action:l,builtinPlacements:G,popupPlacement:z,ref:E,popupAlign:j,getPopupContainer:N,onPopupVisibleChange:R,afterPopupVisibleChange:L,popupTransitionName:B,popupAnimation:k,popupMotion:H,defaultPopupVisible:M,destroyPopupOnHide:P,autoDestroy:w,mouseLeaveDelay:y,popupStyle:I,mouseEnterDelay:b},V),A)},ve=c.forwardRef(ce),ue={adjustX:1,adjustY:1},J={adjustX:0,adjustY:0},pe=[0,0];function Q(e){return typeof e=="boolean"?e?ue:J:s(s({},J),e)}function de(e){var t=e.arrowWidth,o=t===void 0?5:t,i=e.horizontalArrowShift,n=i===void 0?16:i,l=e.verticalArrowShift,d=l===void 0?8:l,b=e.autoAdjustOverflow,f={left:{points:["cr","cl"],offset:[-4,0]},right:{points:["cl","cr"],offset:[4,0]},top:{points:["bc","tc"],offset:[0,-4]},bottom:{points:["tc","bc"],offset:[0,4]},topLeft:{points:["bl","tc"],offset:[-(n+o),-4]},leftTop:{points:["tr","cl"],offset:[-4,-(d+o)]},topRight:{points:["br","tc"],offset:[n+o,-4]},rightTop:{points:["tl","cr"],offset:[4,-(d+o)]},bottomRight:{points:["tr","bc"],offset:[n+o,4]},rightBottom:{points:["bl","cr"],offset:[4,d+o]},bottomLeft:{points:["tl","bc"],offset:[-(n+o),4]},leftBottom:{points:["br","cl"],offset:[-4,d+o]}};return Object.keys(f).forEach(function(y){f[y]=e.arrowPointAtCenter?s(s({},f[y]),{overflow:Q(b),targetOffset:pe}):s(s({},G[y]),{overflow:Q(b)}),f[y].ignoreShake=!0}),f}F("success","processing","error","default","warning");var me=F("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"),ge=function(t,o){var i={},n=s({},t);return o.forEach(function(l){t&&l in t&&(i[l]=t[l],delete n[l])}),{picked:i,omitted:n}},Z=new RegExp("^(".concat(me.join("|"),")(-inverse)?$"));function be(e,t){var o=e.type;if((o.__ANT_BUTTON===!0||o.__ANT_SWITCH===!0||o.__ANT_CHECKBOX===!0||e.type==="button")&&e.props.disabled){var i=ge(e.props.style,["position","left","right","top","bottom","float","display","zIndex"]),n=i.picked,l=i.omitted,d=s(s({display:"inline-block"},n),{cursor:"not-allowed",width:e.props.block?"100%":null}),b=s(s({},l),{pointerEvents:"none"}),f=q(e,{style:b,className:null});return c.createElement("span",{style:d,className:Y(e.props.className,"".concat(t,"-disabled-compatible-wrapper"))},f)}return e}var K=c.forwardRef(function(e,t){var o,i=c.useContext(re),n=i.getPopupContainer,l=i.getPrefixCls,d=i.direction,b=ne(!1,{value:e.visible,defaultValue:e.defaultVisible}),f=ae(b,2),y=f[0],I=f[1],O=function(){var r=e.title,a=e.overlay;return!r&&!a&&r!==0},T=function(r){var a;I(O()?!1:r),O()||(a=e.onVisibleChange)===null||a===void 0||a.call(e,r)},A=function(){var r=e.builtinPlacements,a=e.arrowPointAtCenter,C=e.autoAdjustOverflow;return r||de({arrowPointAtCenter:a,autoAdjustOverflow:C})},R=function(r,a){var C=A(),m=Object.keys(C).filter(function(U){return C[U].points[0]===a.points[0]&&C[U].points[1]===a.points[1]})[0];if(!!m){var $=r.getBoundingClientRect(),h={top:"50%",left:"50%"};m.indexOf("top")>=0||m.indexOf("Bottom")>=0?h.top="".concat($.height-a.offset[1],"px"):(m.indexOf("Top")>=0||m.indexOf("bottom")>=0)&&(h.top="".concat(-a.offset[1],"px")),m.indexOf("left")>=0||m.indexOf("Right")>=0?h.left="".concat($.width-a.offset[0],"px"):(m.indexOf("right")>=0||m.indexOf("Left")>=0)&&(h.left="".concat(-a.offset[0],"px")),r.style.transformOrigin="".concat(h.left," ").concat(h.top)}},L=function(){var r=e.title,a=e.overlay;return r===0?r:a||r||""},B=e.prefixCls,k=e.openClassName,H=e.getPopupContainer,S=e.getTooltipContainer,z=e.overlayClassName,g=e.color,j=e.overlayInnerStyle,x=e.children,v=l("tooltip",B),M=l(),N=y;!("visible"in e)&&O()&&(N=!1);var _=be(le(x)?x:c.createElement("span",null,x),v),W=_.props,E=Y(W.className,X({},k||"".concat(v,"-open"),!0)),V=Y(z,(o={},X(o,"".concat(v,"-rtl"),d==="rtl"),X(o,"".concat(v,"-").concat(g),g&&Z.test(g)),o)),D=j,P;return g&&!Z.test(g)&&(D=s(s({},j),{background:g}),P={background:g}),c.createElement(ve,s({},e,{prefixCls:v,overlayClassName:V,getTooltipContainer:H||S||n,ref:t,builtinPlacements:A(),overlay:L(),visible:N,onVisibleChange:T,onPopupAlign:R,overlayInnerStyle:D,arrowContent:c.createElement("span",{className:"".concat(v,"-arrow-content"),style:P}),motion:{motionName:se(M,"zoom-big-fast",e.transitionName),motionDeadline:1e3}}),N?q(_,{className:E}):_)});K.displayName="Tooltip",K.defaultProps={placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0};export{K as T};
