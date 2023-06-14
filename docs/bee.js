(()=>{var qe=Object.create;var q=Object.defineProperty;var Ee=Object.getOwnPropertyDescriptor;var ke=Object.getOwnPropertyNames;var Me=Object.getPrototypeOf,Ie=Object.prototype.hasOwnProperty;var Le=(e,t,r)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var s=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var we=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of ke(t))!Ie.call(e,i)&&i!==r&&q(e,i,{get:()=>t[i],enumerable:!(n=Ee(t,i))||n.enumerable});return e};var Re=(e,t,r)=>(r=e!=null?qe(Me(e)):{},we(t||!e||!e.__esModule?q(r,"default",{value:e,enumerable:!0}):r,e));var m=(e,t,r)=>(Le(e,typeof t!="symbol"?t+"":t,r),r),N=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var y=(e,t,r)=>(N(e,t,"read from private field"),r?r.call(e):t.get(e)),A=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},v=(e,t,r,n)=>(N(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r);var T=s((It,D)=>{function Ne(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}D.exports=Ne});var $=s((Lt,W)=>{var Ae=typeof global=="object"&&global&&global.Object===Object&&global;W.exports=Ae});var M=s((wt,P)=>{var He=$(),De=typeof self=="object"&&self&&self.Object===Object&&self,We=He||De||Function("return this")();P.exports=We});var z=s((Rt,G)=>{var $e=M(),Pe=function(){return $e.Date.now()};G.exports=Pe});var _=s((Ct,B)=>{var Ge=/\s/;function ze(e){for(var t=e.length;t--&&Ge.test(e.charAt(t)););return t}B.exports=ze});var X=s((Ft,U)=>{var Be=_(),_e=/^\s+/;function Ue(e){return e&&e.slice(0,Be(e)+1).replace(_e,"")}U.exports=Ue});var I=s((Nt,Y)=>{var Xe=M(),Ye=Xe.Symbol;Y.exports=Ye});var V=s((At,Q)=>{var J=I(),K=Object.prototype,Je=K.hasOwnProperty,Ke=K.toString,h=J?J.toStringTag:void 0;function Qe(e){var t=Je.call(e,h),r=e[h];try{e[h]=void 0;var n=!0}catch{}var i=Ke.call(e);return n&&(t?e[h]=r:delete e[h]),i}Q.exports=Qe});var ee=s((Ht,Z)=>{var Ve=Object.prototype,Ze=Ve.toString;function et(e){return Ze.call(e)}Z.exports=et});var ie=s((Dt,ne)=>{var te=I(),tt=V(),rt=ee(),nt="[object Null]",it="[object Undefined]",re=te?te.toStringTag:void 0;function ot(e){return e==null?e===void 0?it:nt:re&&re in Object(e)?tt(e):rt(e)}ne.exports=ot});var ae=s((Wt,oe)=>{function at(e){return e!=null&&typeof e=="object"}oe.exports=at});var ce=s(($t,se)=>{var st=ie(),ct=ae(),lt="[object Symbol]";function ut(e){return typeof e=="symbol"||ct(e)&&st(e)==lt}se.exports=ut});var de=s((Pt,fe)=>{var ft=X(),le=T(),dt=ce(),ue=0/0,mt=/^[-+]0x[0-9a-f]+$/i,bt=/^0b[01]+$/i,pt=/^0o[0-7]+$/i,gt=parseInt;function ht(e){if(typeof e=="number")return e;if(dt(e))return ue;if(le(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=le(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=ft(e);var r=bt.test(e);return r||pt.test(e)?gt(e.slice(2),r?2:8):mt.test(e)?ue:+e}fe.exports=ht});var pe=s((Gt,be)=>{var xt=T(),L=z(),me=de(),yt="Expected a function",vt=Math.max,Tt=Math.min;function St(e,t,r){var n,i,u,c,a,d,b=0,w=!1,p=!1,S=!0;if(typeof e!="function")throw new TypeError(yt);t=me(t)||0,xt(r)&&(w=!!r.leading,p="maxWait"in r,u=p?vt(me(r.maxWait)||0,t):u,S="trailing"in r?!!r.trailing:S);function O(o){var f=n,g=i;return n=i=void 0,b=o,c=e.apply(g,f),c}function Te(o){return b=o,a=setTimeout(x,t),w?O(o):c}function Se(o){var f=o-d,g=o-b,F=t-f;return p?Tt(F,u-g):F}function R(o){var f=o-d,g=o-b;return d===void 0||f>=t||f<0||p&&g>=u}function x(){var o=L();if(R(o))return C(o);a=setTimeout(x,Se(o))}function C(o){return a=void 0,S&&n?O(o):(n=i=void 0,c)}function Oe(){a!==void 0&&clearTimeout(a),b=0,n=d=i=a=void 0}function je(){return a===void 0?c:C(L())}function j(){var o=L(),f=R(o);if(n=arguments,i=this,d=o,f){if(a===void 0)return Te(d);if(p)return clearTimeout(a),a=setTimeout(x,t),O(d)}return a===void 0&&(a=setTimeout(x,t)),c}return j.cancel=Oe,j.flush=je,j}be.exports=St});var he=s((zt,ge)=>{var Ot=pe(),jt=T(),qt="Expected a function";function Et(e,t,r){var n=!0,i=!0;if(typeof e!="function")throw new TypeError(qt);return jt(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Ot(e,t,{leading:n,maxWait:t,trailing:i})}ge.exports=Et});var Ce=String.raw,Fe=String.raw,H=Math.PI/180,l,E=class extends HTMLElement{constructor(){super(...arguments);m(this,"fps",60);m(this,"tolerance",.1);A(this,l,0)}get interval(){return Number.isFinite(this.fps)?1e3/this.fps:this.tolerance}start(r){if(y(this,l))return console.log("Loop is already looping");let n=performance.now(),i,u=c=>{v(this,l,requestAnimationFrame(u)),i!==this.interval&&(i=this.interval);let a=c-n;a>=i-this.tolerance&&(n=c-a%i,a>=i-this.tolerance&&r?.({delta:a,then:n,interval:i}))};v(this,l,requestAnimationFrame(u))}stop(){if(y(this,l)===0)return console.log("Loop is already stopped");cancelAnimationFrame(y(this,l)),v(this,l,0)}};l=new WeakMap;var k=class extends E{constructor(){super();m(this,"bfx");m(this,"bfy");m(this,"turbulence");this.fps=15;let r=document.createElement("style");r.textContent=Ce`
      :host {
        --bodyBg: var(--ph);
        --textColor: var(--blood);
        --textSize: 10;
        user-select: none;
        pointer-events: none;
        display: inline-block;
      }

      .smoke {
        filter: url("#filter");
      }

      .text {
        background: linear-gradient(#fff, #999, #ddd, #888);
        background-clip: text;
        filter: blur(5px) contrast(120%);
        color: var(--textColor);
        font-size: calc(var(--textSize) * 1rem);
      }
    `;let n=document.createElement("div");n.classList.add("smoke"),n.innerHTML=Fe`
      <slot class="text"></slot>
      <svg width="0">
        <filter id="filter">
          <feTurbulence id="turbulence" type="fractalNoise" baseFrequency=".03" numOctaves="20"></feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="30"></feDisplacementMap>
        </filter>
      </svg>
    `,this.attachShadow({mode:"open"}).append(r,n)}connectedCallback(){this.turbulence=this.shadowRoot.querySelector("#turbulence"),this.start(({then:r})=>{this.turbulence.setAttributeNS(null,"baseFrequency",this.freq(r/50))})}freq(r){return r+=.2,this.bfx=.03,this.bfy=.03,this.bfx+=.005*Math.cos(r*H),this.bfy+=.005*Math.sin(r*H),`${String(this.bfx)} ${String(this.bfy)}`}};customElements.define("smoking-text",k);var ve=Re(he());var xe=String.raw,ye=String.raw;customElements.define("cursor-bee",class extends HTMLElement{constructor(){super();let e=document.createElement("style");e.textContent=xe`
        .cursor {
          top: 0;
          left: 0;
          position: absolute;
          transform: var(--pos) translate(-50%, -50%);
          transition: transform 3s cubic-bezier(0.29, 1.01, 1, -0.68);
          mix-blend-mode: difference;
          pointer-events: none;
          touch-action: none;
          user-select: none;
        }
      `;let t=document.createElement("div");t.innerHTML=ye`<smoking-text class="cursor">🐝</smoking-text>`,this.attachShadow({mode:"open"}).append(e,t)}connectedCallback(){document.body.addEventListener("mousemove",(0,ve.default)(e=>{this.setAttribute("style",`--pos: translate(${e.clientX}px, ${e.clientY}px)`)},600))}});})();
