import{ApplicationCommandOptionType as r}from"../../slash/ApplicationCommand.js";import k from"../../../_snowpack/pkg/antd/es/button.js";import c from"../../../_snowpack/pkg/antd/es/space.js";import p from"../../../_snowpack/pkg/antd/es/row.js";import m from"../../../_snowpack/pkg/antd/es/col.js";import _ from"../../../_snowpack/pkg/antd/es/card.js";import e,{useEffect as $,useState as E}from"../../../_snowpack/pkg/react.js";import{commandState as T,optionElementState as G}from"../../recoil/index.js";import y from"./GenericInput.js";import g from"../../icons/index.js";import N from"./SubCommand.js";import R from"../../helpers/keyofEnum.js";import{useRecoilState as j}from"../../../_snowpack/pkg/recoil.js";function z({type:l,index:C}){const[o,s]=E({key:`${r[l]}Option-${C}`,type:l,name:"",description:"",options:[]}),[a,d]=j(T);$(()=>{a.options&&d({...a,options:[...a.options.filter(t=>t.key!==o.key),{...o,options:o.options?.map(t=>({...t,key:void 0}))}]})},[o]);const[O,w]=j(G);function h(){a.options&&d({...a,options:a.options.filter(t=>t.key!==o.key)}),w(O.filter(t=>t.key!==o.key))}const[u,f]=E([]);function S(t){s(n=>({...n,options:[...(n.options??[]).filter(i=>i.key!==t.key),t]}))}function b(t){f(n=>n.filter(i=>i.key!==t)),s(n=>({...n,options:n.options?.filter(i=>i.key!==t)}))}function x(t){const n=Date.now(),i={key:`${r[parseInt(t.currentTarget.id)]}Option-${n}`,type:parseInt(t.currentTarget.id),name:"",description:"",options:[]};s({...o,options:[...o.options??[],i]}),f([...u,e.createElement(N,{key:`${r[parseInt(t.currentTarget.id)]}Option-${n}`,type:parseInt(t.currentTarget.id),index:n,inGroup:!0,deleter:b,updater:S,className:"subCommandChild"})])}const I=R(r).splice(0,1);return e.createElement(e.Fragment,null,e.createElement(_,{title:e.createElement(e.Fragment,null,e.createElement(p,{gutter:16,align:"middle",justify:"start"},e.createElement(m,null,g[r[l]]),e.createElement(m,null,r[l]))),bordered:!1},e.createElement(c,{direction:"vertical",style:{width:"100%"}},e.createElement(y,{name:"name",setter:[o,s]}),e.createElement(y,{name:"description",setter:[o,s]}),e.createElement(p,null,e.createElement(m,{flex:"auto"},e.createElement(p,{align:"middle",justify:"start"},e.createElement(c,{align:"center"},I.map(t=>e.createElement(k,{key:t,id:r[t],onClick:x,size:"large",type:"primary"},e.createElement(p,{gutter:8,align:"middle",justify:"space-around"},e.createElement(m,null,g[t]),e.createElement(m,null,t))))))),e.createElement(m,{flex:"auto"},e.createElement(p,{align:"middle",justify:"end"},e.createElement(c,{align:"center"},e.createElement(k,{danger:!0,type:"primary",size:"large",onClick:h},"Delete"))))))),e.createElement(c,{direction:"vertical",style:{width:"100%",paddingBottom:"10px"}},u))}export default z;
