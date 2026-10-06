import{e as o,m as r,r as c}from"./screenStyle-CaGSYIVw.js";import{A as n,g as h}from"./index-H1SJxxxE.js";import{e as i}from"./format-vvwvscc9.js";const a=60;class y{constructor(){this.open=!1,this._ctx=null,this._layer=null,this._root=null,this._body=null,this._onClick=null,this._returnTo=null}build(s){if(typeof document>"u")return;this._ctx=s,o(s.data.ui.screen);const t=r({id:"help-layer",zIndex:a});this._layer=t,this._root=t.el,this._body=t.body,this._onClick=e=>this._onMouse(e),this._root.addEventListener("click",this._onClick),t.resize(window.innerWidth,window.innerHeight)}resize(s,t){this._layer&&this._layer.resize(s,t)}dispose(){this.close(),this._root&&this._onClick&&this._root.removeEventListener("click",this._onClick),this._layer&&this._layer.dispose(),c(),this._layer=null,this._root=null,this._body=null,this._onClick=null}get _layers(){const s=this._ctx?this._ctx.peek("ui"):null;return s&&s.layers||null}show(s){if(!this._root||this.open)return;this.open=!0,this._returnTo=s&&s.returnTo||null,this._root.style.display="block",this._render();const t=this._layers;t&&t.push({name:"help",layer:2,root:this._root,pauses:!0,suspends:!0,onKey:e=>this._handleKey(e),onClose:()=>this._hide()})}close(){if(!this._root||!this.open)return;const s=this._layers;if(this._returnTo==="pause"){const t=this._ctx?this._ctx.peek("ui"):null;t&&t.pause&&t.pause.show&&t.pause.show()}s&&s.has("help")?s.pop("help"):this._hide()}_hide(){this._root&&(this.open=!1,this._root.style.display="none",this._returnTo=null)}toggle(){this.open?this.close():this.show()}_handleKey(s){return(s.code==="Escape"||s.key==="?")&&this.close(),!0}_onMouse(s){const t=s.target;!t||typeof t.closest!="function"||!t.closest('[data-test-help="close"]')||(s.preventDefault(),this.close())}_render(){this._body&&(this._body.innerHTML=this._html())}_html(){return`
      <div class="sc-page sc-page--dense">
        <div class="sc-head">
          <div class="sc-title">操作一覧</div>
        </div>
        <div class="sc-cols sc-cols--help">
          <div class="sc-col sc-col--scroll">
            <div class="sc-cap sc-cap--bar">戦闘</div>
            ${this._actionsTableHtml()}
          </div>
          <div class="sc-col sc-col--scroll">
            <div class="sc-cap sc-cap--bar">画面のキー</div>
            ${this._screenKeysTableHtml(!1)}
          </div>
          <div class="sc-col sc-col--scroll">
            <div class="sc-cap sc-cap--bar">リプレイ</div>
            ${this._screenKeysTableHtml(!0)}
          </div>
        </div>
        <div class="sc-foot">
          <button class="sc-footkey" data-test-help="close"><b>Esc</b>閉じる</button>
        </div>
      </div>`}_actionsTableHtml(){const s=this._ctx?this._ctx.input:null;return`
      <table class="sc-table sc-table--dense">
        <tr><th>操作</th><th>キーボード／マウス</th><th>コントローラー</th></tr>
        ${n.map(e=>{const l=s?s.describeAction(e.id):{keys:"",pad:""};return`
        <tr data-test-help-row="${i(e.id)}">
          <td>${i(e.label)}</td>
          <td>${i(l.keys)}</td>
          <td class="sc-left">${i(l.pad)}</td>
        </tr>`}).join("")}
      </table>`}_screenKeysTableHtml(s){const t=h.filter(e=>e.scope==="リプレイ"===s).map(e=>`
      <tr data-test-help-row="${i(e.id)}">
        <td>${i(e.show)}</td>
        <td${s?' class="sc-left"':""}>${i(e.label)}</td>
        ${s?"":`<td class="sc-dim">${i(e.scope)}</td>`}
      </tr>`).join("");return`
      <table class="sc-table sc-table--dense">
        <tr><th>キー</th><th>操作</th>${s?"":"<th>効く場所</th>"}</tr>
        ${t}
      </table>`}}export{y as Help};
