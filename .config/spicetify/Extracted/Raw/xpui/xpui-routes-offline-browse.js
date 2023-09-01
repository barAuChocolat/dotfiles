"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[1997],{16691:(e,a,n)=>{n.d(a,{z:()=>d});var i=n(34211),r=n(53778),s=n(79598),t=n(78384),l=n(13977),u=n(95195),c=n(43228),o=n(4637);function d(e,a){switch(e.type){case u.p.ALBUM:return(0,o.jsx)(i.r,{uri:e.uri,name:e.name,images:e.images,sharingInfo:null,artists:e.artists,index:a},e.uri);case u.p.ARTIST:return(0,o.jsx)(r.I,{uri:e.uri,name:e.name,images:e.images,index:a},e.uri);case u.p.SHOW:return(0,o.jsx)(l._,{uri:e.uri,name:e.name,images:e.images,publisher:e.publisher,sharingInfo:null,mediaType:c.E.UNKNOWN,index:a},e.uri);case u.p.AUDIOBOOK:return(0,o.jsx)(s.c,{uri:e.uri,name:e.name,images:e.images,authorName:e.authorName,index:a},e.uri);case u.p.PLAYLIST:return(0,o.jsx)(t.Z,{uri:e.uri,name:e.name,images:e.images,description:"",authorName:e.creatorName,index:a},e.uri);default:return null}}},9097:(e,a,n)=>{n.d(a,{P:()=>j});var i=n(59496),r=n(85830),s=n(30099),t=n(14090),l=n(85259),u=n(75922),c=n(90807),o=n(25756),d=n(73405),g=n(90477),m=n(22408),x=n(13138),f=n(93256),h=n(19062),p=n(4637);const b=function({uri:e,name:a,images:n,index:u}){const b=(0,d.u)(),j=(0,i.useRef)(null),y=(0,i.useRef)(!0),w=(0,i.useContext)(g.t),{isPlaying:v}=(0,f.cR)(o.b),{togglePlay:S}=(0,x.n)({uri:o.b,pages:[{items:j.current?.map((e=>({...e,provider:null})))||[]}]},{featureIdentifier:"local_files"});(0,i.useEffect)((()=>(y.current=!0,()=>{y.current=!1})),[]);const I=(0,m.I)(),N=(0,r.y1)((async(e,a)=>{if(!j.current){const e=await w.getTracks();j.current=e}y&&S({loggingParams:a},{uri:o.b,pages:[{items:j.current?.map((e=>({...e,provider:null})))||[]}]})}),c.s_,{leading:!0,trailing:!1});return b.canFetchAllTracks&&I?(0,p.jsx)(t.Z,{index:u,delegatePlayback:!0,delegateLogging:!0,isPlaying:v,onPlay:N,headerText:a,featureIdentifier:"local_files",uri:e,renderCardImage:()=>(0,p.jsx)(l.x,{images:n,FallbackComponent:h.S}),renderSubHeaderContent:()=>(0,p.jsx)("span",{children:s.ag.get("local-files.description")})}):null},j=({index:e})=>{const a=(0,u.gB)();return(0,p.jsx)(i.Suspense,{fallback:null,children:(0,p.jsx)(b,{index:e,name:a.name,uri:a.uri,images:a.images})})}},93678:(e,a,n)=>{n.r(a),n.d(a,{default:()=>j});var i=n(84875),r=n.n(i),s=n(30099),t=n(16691),l=n(854),u=n(9097),c=n(84607),o=n(51697);const d="ctcxxigybw6qGQde916g",g="QGlY4v4eRdOcBHgHljcF",m="LFYYI0yKpFvSeNhBWRw4";var x=n(4637);const f=()=>(0,x.jsxs)("div",{className:g,children:[(0,x.jsx)(c.D,{iconSize:64,className:m}),(0,x.jsx)(o.D,{as:"h1",variant:"brio",semanticColor:"textBase",dir:"auto",children:s.ag.get("web-player.offline.empty-state.title")}),(0,x.jsx)(o.D,{as:"h2",variant:"ballad",semanticColor:"textSubdued",dir:"auto",children:s.ag.get("web-player.offline.empty-state.subtitle")})]});var h=n(15644),p=n(22408),b=n(80781);const j=function(){const{hasError:e,items:a}=(0,b.G)(),n=(0,p.I)();return e?null:(0,x.jsx)("div",{className:r()(d,"contentSpacing"),children:a.length>0||n?(0,x.jsxs)(h.JL,{value:"headered-grid",children:[(0,x.jsx)(l.P,{title:s.ag.get("music_downloads"),total:a.length,seeAllUri:"/collection/music-downloads",alwaysShowSeeAll:!0,children:a.map(((e,a)=>(0,x.jsx)(h.JL,{value:"card",index:a,children:(0,t.z)(e,a)},e.uri)))}),n&&(0,x.jsx)(l.P,{title:s.ag.get("local-files"),total:1,showAll:!0,children:(0,x.jsx)(u.P,{index:0})})]}):(0,x.jsx)(f,{})})}},80781:(e,a,n)=>{n.d(a,{G:()=>s});var i=n(59496),r=n(92739);function s(){const e=(0,r.c)(),[a,n]=(0,i.useState)(!0),[s,t]=(0,i.useState)(!1),[l,u]=(0,i.useState)([]);return(0,i.useEffect)((()=>{(async()=>{try{const a=await e.getDownloads();u(a)}catch(e){t(!0)}finally{n(!1)}})()}),[e]),{isLoading:a,hasError:s,items:l}}}}]);
//# sourceMappingURL=xpui-routes-offline-browse.js.map