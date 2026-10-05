import{e as r,m as n,r as c}from"./screenStyle-5ZY3-CGV.js";import{e as o}from"./format-vvwvscc9.js";import{l as u}from"./index-DWXnioxQ.js";import{A as h,S as d,C as p,M as _,T as m}from"./about-DD4mfTex.js";const f=60,l=60,a='target="_blank" rel="noopener noreferrer"';class E{constructor(){this.open=!1,this._ctx=null,this._layer=null,this._root=null,this._body=null,this._onClick=null}build(t){if(typeof document>"u")return;this._ctx=t,r(t.data.ui.screen);const s=n({id:"about-layer",zIndex:f});this._layer=s,this._root=s.el,this._body=s.body,this._onClick=e=>this._onMouse(e),this._root.addEventListener("click",this._onClick),s.resize(window.innerWidth,window.innerHeight)}resize(t,s){this._layer&&this._layer.resize(t,s)}dispose(){this.close(),this._root&&this._onClick&&this._root.removeEventListener("click",this._onClick),this._layer&&this._layer.dispose(),c(),this._layer=null,this._root=null,this._body=null,this._onClick=null}get _layers(){const t=this._ctx?this._ctx.peek("ui"):null;return t&&t.layers||null}show(){if(!this._root||this.open)return;this.open=!0,this._root.style.display="block",this._render();const t=this._layers;t&&t.push({name:"about",layer:2,root:this._root,pauses:!0,suspends:!0,onKey:s=>this._handleKey(s),onClose:()=>this._hide()})}close(){if(!this._root||!this.open)return;const t=this._layers;t&&t.has("about")?t.pop("about"):this._hide()}_hide(){this._root&&(this.open=!1,this._root.style.display="none")}toggle(){this.open?this.close():this.show()}_scrollBox(){return this._root?this._root.querySelector("[data-test-about-scroll]"):null}_handleKey(t){if(t.code==="Escape")return this.close(),!0;if(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space"){const e=typeof document<"u"?document.activeElement:null;return e&&e.tagName==="SUMMARY"&&this._root&&this._root.contains(e)&&e.parentElement&&(e.parentElement.open=!e.parentElement.open,typeof t.preventDefault=="function"&&t.preventDefault()),!0}const s=this._scrollBox();if(s){const e=Math.max(l,s.clientHeight-40),i={ArrowUp:-l,ArrowDown:l,PageUp:-e,PageDown:e}[t.code];i!==void 0?(s.scrollTop+=i,typeof t.preventDefault=="function"&&t.preventDefault()):t.code==="Home"?s.scrollTop=0:t.code==="End"&&(s.scrollTop=s.scrollHeight)}return!0}_onMouse(t){const s=t.target;!s||typeof s.closest!="function"||!s.closest('[data-test-about="close"]')||(t.preventDefault(),this.close())}_render(){this._body&&(this._body.innerHTML=this._html())}_html(){const t=u();return`
      <div class="sc-page sc-page--dense">
        <div class="sc-head">
          <div class="sc-title">このツールについて</div>
          <div class="sc-drill" data-test-about-name>AC6 trainer${` v${o(t)}`}</div>
        </div>
        <div class="sc-cols">
          <div class="sc-col sc-col--scroll sc-about" data-test-about-scroll data-scroll-stop tabindex="-1">
            ${h.map(s=>this._sectionHtml(s)).join("")}
            ${this._sourcesHtml()}
            ${this._manualHtml()}
            ${this._changelogHtml()}
            ${this._licenseHtml()}
          </div>
        </div>
        <div class="sc-foot">
          <button class="sc-footkey" data-test-about="close"><b>Esc</b>閉じる</button>
        </div>
      </div>`}_wrap(t,s,e){return`
      <section class="sc-about-sec" data-test-about-section="${o(t)}">
        <div class="sc-cap sc-cap--bar">${o(s)}</div>
        ${e}
      </section>`}_sectionHtml(t){const s=(t.paras||[]).map(i=>`<p class="sc-about-p">${o(i)}</p>`).join(""),e=t.items&&t.items.length?`<ul class="sc-about-list">${t.items.map(i=>`<li>${o(i)}</li>`).join("")}</ul>`:"";return this._wrap(t.id,t.title,s+e)}_sourcesHtml(){const t=d.map(s=>`<li data-test-about-source>${s.url?`<a href="${o(s.url)}" ${a}>${o(s.name)}</a>`:o(s.name)} — ${o(s.what)}</li>`).join("");return this._wrap("sources","参考にした情報源",`<ul class="sc-about-list">${t}</ul>`)}_manualHtml(){return this._wrap("manual","説明書",`<p class="sc-about-p"><a href="${o(_)}" ${a}>説明書を開く</a></p>`)}_changelogHtml(){const t=p.map(s=>`
      <div class="sc-about-ver" data-test-about-version="${o(s.version)}">
        <div class="sc-about-vhead"><b>v${o(s.version)}</b>　${o(s.title)}</div>
        <ul class="sc-about-list">${s.items.map(e=>`<li>${o(e)}</li>`).join("")}</ul>
      </div>`).join("");return this._wrap("changelog","変更履歴",t)}_licenseHtml(){return this._wrap("license","ライセンス",`
      <p class="sc-about-p">three.js（MIT License）を使っています。</p>
      <details class="sc-about-details" data-test-about-license>
        <summary tabindex="0">ライセンスの全文を表示</summary>
        <pre class="sc-about-pre">${o(m)}</pre>
      </details>
      <p class="sc-about-p"><a href="./THIRD-PARTY-NOTICES.txt" ${a}>ライセンス表記を別のページで開く</a></p>`)}}export{E as AboutPanel};
