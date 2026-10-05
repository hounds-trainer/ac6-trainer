import{e as ns,m as is,r as ls}from"./screenStyle-5ZY3-CGV.js";import{n as h,i as B,e as o,h as H,t as I,f as O,w as R,b as ds,a as rs}from"./format-vvwvscc9.js";import{a6 as os,z as ps,E as hs,U as us,x as z,L as $s,ab as bs,ac as K,ad as fs,$ as T,ae as vs,a1 as xs,af as ms,ag as W,ah as gs,w as M,a7 as G,a2 as X,ai as P,aj as ys,a3 as _s,a4 as ws,ak as ks,al as Os,am as Y}from"./index-DWXnioxQ.js";const Ss=50,U=820,Cs=260,As=180,V=54,Z=14,J=12,Q=26,S=150,_=34,Fs=14,q=28,Ms=6,ss=8;function Ds(C,s){return typeof C!="number"||!Number.isFinite(C)?null:C/s}class Ps{constructor(){this.open=!1,this.drill=null,this.axis="n",this.benchOnly=!0,this._ctx=null,this._layer=null,this._root=null,this._body=null,this._onClick=null}build(s){if(typeof document>"u")return;this._ctx=s,ns(s.data.ui.screen);const t=is({id:"progress-layer",zIndex:Ss});this._layer=t,this._root=t.el,this._body=t.body,this._onClick=e=>this._onMouse(e),this._root.addEventListener("click",this._onClick),t.resize(window.innerWidth,window.innerHeight)}resize(s,t){this._layer&&this._layer.resize(s,t)}dispose(){this.close(),this._root&&this._onClick&&this._root.removeEventListener("click",this._onClick),this._layer&&this._layer.dispose(),ls(),this._layer=null,this._root=null,this._body=null,this._onClick=null}show(s,t,e){if(!this._root)return;(t==="n"||t==="day")&&(this.axis=t),(e==="bench"||e==="all")&&(this.benchOnly=e==="bench"),this.drill=s||null,this.open=!0,this._root.style.display="block";const a=this._layers;a&&a.push({name:"progress",layer:1,root:this._root,pauses:!0,suspends:!0,replacesLayer1:!0,reopen:()=>this.show(this.drill),onKey:c=>this._handleKey(c),onClose:()=>this._hide()}),this._render()}get _layers(){const s=this._ctx?this._ctx.peek("ui"):null;return s&&s.layers||null}close(){if(!this._root||!this.open)return;const s=this._layers;s&&s.has("progress")?s.pop("progress"):this._hide()}_hide(){this._root&&(this.open=!1,this._root.style.display="none")}toggle(s){this.open?this.close():this.show(s)}_handleKey(s){return s.code==="Escape"?this.drill?(this.drill=null,this._render(),!0):(this.close(),!0):s.code==="KeyH"?(this.close(),!0):!1}_onMouse(s){const t=s.target;if(!t||typeof t.closest!="function")return;const e=t.closest("[data-test-progress-details-toggle]");if(e){s.preventDefault();const n=e.closest("[data-test-progress-details]"),l=n?n.querySelector(".sc-details-body"):null,p=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-expanded",p?"false":"true"),l&&(l.hidden=p),!p&&l&&l.scrollIntoView({block:"nearest"});return}const a=t.closest("[data-open-drill]");if(a){this.drill=a.dataset.openDrill,this._render();return}const c=t.closest("[data-act]");if(c)switch(s.preventDefault(),c.dataset.act){case"close":this.close();return;case"all":this.drill=null,this._render();return;case"axis":this.axis=this.axis==="n"?"day":"n",this._render();return;case"bench":this.benchOnly=!this.benchOnly,this._render();return}}_opt(){const s=this._ctx.data,t=s.ui&&s.ui.progress||{};return{hz:s.time.hz,sessionFrames:s.training.sessionFrames,dayStartHour:t.dayStartHour||0,band:t.challengeBand||{low:0,high:1},recentSessions:t.recentSessions||1,steps:hs(s),now:Date.now(),sameCondition:os,transferBands:ps(s.training?s.training.transferBandOrder:[]),transferRecent:t.transferRecent||1,mixPairMaxGapDays:t.mixPairMaxGapDays,mixMinPairs:t.mixMinPairs||1}}_tierOf(s){const t=this._ctx.data.training&&this._ctx.data.training.drillCells||[];return us(t,s)}_render(){if(!this._body)return;const s=this._focusMark();this._body.innerHTML=this.drill?this._detailHtml():this._overviewHtml(),s&&this._restoreFocus(s)}_focusMark(){if(typeof document>"u")return null;const s=document.activeElement;if(!s||!this._body||!this._body.contains(s))return null;const t=s.closest?s.closest("[data-act], [data-open-drill]"):null;if(!t||!this._body.contains(t))return{sel:null,idx:0};const e=t.hasAttribute("data-act")?`[data-act="${t.getAttribute("data-act")}"]`:`[data-open-drill="${t.getAttribute("data-open-drill")}"]`,a=t.tagName.toLowerCase()+e,c=Array.from(this._body.querySelectorAll(a)).indexOf(t);return{sel:a,idx:Math.max(0,c)}}_restoreFocus(s){let t=null;s.sel&&(t=this._body.querySelectorAll(s.sel)[s.idx]||null),t||(t=this._root,t&&!t.hasAttribute("tabindex")&&t.setAttribute("tabindex","-1")),t&&(this._layers&&typeof this._layers.focusByKey=="function"?this._layers.focusByKey(t):t.focus())}_overviewHtml(){const s=this._ctx,t=this._opt(),e=z(),a=s.data.training&&s.data.training.drills||[],c=$s(e,a,{...t,sparkPoints:Fs}),n=s.data.training&&s.data.training.drillCells||[],{current:l,retired:p}=bs(c,n),i=K(e,null,{...t,span:q}),d=fs(e,(this._ctx.data.ui.progress||{}).warnRemaining);return`
      <div class="sc-page sc-page--dense">
        <div class="sc-head">
          <div class="sc-title">戦績</div>
          <div class="sc-drill">全種目</div>
          <div class="sc-when">記録 ${h(d.count)} 本　／　残り ${h(d.remaining)} 本</div>
        </div>
        <div class="sc-cols">
          <div class="sc-col">
            ${this._calendarCard(i,"練習した日（全種目）")}
          </div>
          <div class="sc-col">
            <div class="sc-cap sc-cap--bar">種目ごとの戦績<span class="sc-dim">　押すと 1 種目の詳しい線が出ます</span></div>
            <div class="sc-scroll">
              <table class="sc-mlist">${l.map(r=>this._overviewRow(r)).join("")}</table>
            </div>
            ${p.length>0?`
            <div class="sc-cap sc-cap--bar">終わった種目<span class="sc-dim">　記録が残っている、終わった種目です</span></div>
            <div class="sc-scroll sc-scroll--fit">
              <table class="sc-mlist">${p.map(r=>this._overviewRow(r)).join("")}</table>
            </div>`:""}
          </div>
        </div>
        <div class="sc-foot">
          <button class="sc-footkey" data-act="close"><b>Esc</b>閉じる</button>
          <button class="sc-footkey" data-act="close"><b>H</b>同じ</button>
          <span class="sc-dim">数はどれも記録から数えたものです。推測は 1 つも入っていません</span>
        </div>
      </div>`}_overviewRow(s){const t=this._ctx,e=B(t.data,s.drill),a=l=>`<button type="button" class="sc-mrowbtn" data-open-drill="${o(s.drill)}">${o(e)}${l||""}</button>`;if(s.count===0)return`
        <tr class="sc-mrow" data-open-drill="${o(s.drill)}">
          <td class="sc-mkey">${H(s.index)}</td>
          <td class="sc-mname" title="${o(e)}">${a()}</td>
          <td class="pg-sparkcell"></td>
          <td class="sc-mcount">—</td>
          <td class="sc-mwhen sc-dim">まだ 1 本も</td>
        </tr>`;const c=s.latest?s.latest.text:"—",n=s.ready?' <span class="sc-live">■</span>':"";return`
      <tr class="sc-mrow" data-open-drill="${o(s.drill)}">
        <td class="sc-mkey">${H(s.index)}</td>
        <td class="sc-mname" title="${o(e)}">${a(n)}</td>
        <td class="pg-sparkcell">${this._sparkSvg(s.spark)}</td>
        <td class="sc-mcount"><span class="sc-arrow">»</span>${o(c)}</td>
        <td class="sc-mwhen">${h(s.count)} 本　${o(T(s.daysSince))}</td>
      </tr>`}_sparkSvg(s){const t=Array.isArray(s)?s:[];if(t.filter(i=>typeof i=="number").length<2)return"";const e=t.length,a=i=>e<=1?S/2:i/(e-1)*(S-2)+1,c=i=>_-3-i*(_-6),n=[];let l=[];for(let i=0;i<e;i++){const d=t[i];if(typeof d!="number"){l.length>1&&n.push(l),l=[];continue}l.push(`${a(i).toFixed(1)},${c(d).toFixed(1)}`)}l.length>1&&n.push(l);const p=n.map(i=>`<polyline class="pg-spark" points="${i.join(" ")}"/>`).join("");return`<svg viewBox="0 0 ${S} ${_}" width="${S}" height="${_}">
      <line class="pg-sparkbase" x1="0" y1="${_-3}" x2="${S}" y2="${_-3}"/>
      ${p}
    </svg>`}_calendarCard(s,t){const e=s.cells.map(c=>`<i class="pg-cell${c.count>0?" pg-cell--on":""}" title="${o(c.label)}　${c.count>0?`${c.count} 本`:"練習なし"}"></i>`).join(""),a=s.longestGap===null?"—":`${h(s.longestGap)} 日`;return`
      <div class="sc-cap sc-cap--bar">${o(t)}</div>
      <div class="pg-cal">${e}</div>
      <div class="sc-sub">${h(s.span)} 日のうち <b>${h(s.practiced)}</b> 日　／　一番長く空いたのは ${a}</div>
      <div class="sc-sub sc-dim">左が ${o(s.cells.length?s.cells[0].label:"—")}、右が今日。空いている日は練習していません</div>`}_detailHtml(){const s=this._ctx,t=this._opt(),e=z(),a=this.drill,c=B(s.data,a),l=(s.data.training&&s.data.training.drills||[]).indexOf(a),p=this._tierOf(a),i=vs(e,a,t),d=K(e,a,{...t,span:q}),r=xs(e,a,t),v=i.last?i.last.rec:null,f=ms(e,a,{...t,timeScale:v&&v.cond?v.cond.timeScale:1});return`
      <div class="sc-page sc-page--dense">
        <div class="sc-head">
          <div class="sc-title">戦績</div>
          ${I(p)?`<div class="sc-tag">${I(p)}</div>`:""}
          <div class="sc-drill">${o(H(l))} ${o(c)}</div>
          <div class="sc-when">${h(i.points.length)} 本　／　${h(i.days.length)} 日</div>
        </div>
        <div class="sc-cols sc-cols--progress-detail">
          <div class="sc-col sc-col--scroll" data-scroll-stop tabindex="-1">
            ${this._curveCard(i,t)}
            ${this._recentCard(e,a,t,v)}
            ${this._benchCard(e,a,t)}
          </div>
          <div class="sc-col sc-col--scroll" data-scroll-stop tabindex="-1">
            ${this._stairsCard(f)}
            ${this._calendarCard(d,"この種目を練習した日")}
            ${this._detailsHtml(e,a,t,i,r)}
          </div>
        </div>
        <div class="sc-foot">
          <button class="sc-footkey" data-act="all"><b>Esc</b>全種目へ戻る</button>
          <button class="sc-footkey" data-act="axis"><b>横軸</b>${this.axis==="n"?"本数 → 日付へ":"日付 → 本数へ"}</button>
          <button class="sc-footkey" data-act="bench"><b>結ぶ点</b>${this.benchOnly?"測定だけ → 全部":"全部 → 測定だけ"}</button>
          <button class="sc-footkey" data-act="close"><b>H</b>閉じる</button>
        </div>
      </div>`}_benchCard(s,t,e){const a=W(gs(s,t));if(a.length===0)return`
        <div class="sc-cap sc-cap--bar">測定</div>
        <div class="sc-sub sc-dim">測定はまだ 1 本もありません（その日の 1 本目を標準の条件で走らせると付きます）。</div>`;const c=e.dayStartHour,n=M(e.now,c),l=a[0],p=a[a.length-1],i=G(a),d=X(p,e),r=i?X(i,e):null,v=M(p.savedAt,c);return`
      <div class="sc-cap sc-cap--bar">測定</div>
      <table class="sc-table sc-table--dense">
        <tr><td class="sc-k">測定</td>
          <td>${h(a.length)} 本<span class="sc-dim">　／　最初 ${o(P(M(l.savedAt,c)))}</span></td></tr>
        <tr><td class="sc-k">前回の測定</td>
          <td>${d?o(d.text):"—"}<span class="sc-dim">（${o(T(n-v))}）</span></td></tr>
        <tr><td class="sc-k">自己ベスト</td>
          <td>${r?o(r.text):"—"}<span class="sc-dim">（${i?o(P(M(i.savedAt,c))):"—"}）</span></td></tr>
      </table>`}_recentCard(s,t,e,a){const c=a?ys(s,t,a,e.sameCondition):[];if(c.length<=1)return`
        <div class="sc-cap sc-cap--bar">同じ条件の直近の記録</div>
        <div class="sc-sub sc-dim">まだ並べられる記録がありません（同じ条件の記録が 2 本要ります）。</div>`;const n=G(c),l=e.hz,p=c.slice(-ss).reverse().map(r=>{const v=n&&r.savedAt===n.savedAt&&r.toFrame===n.toFrame;let f;_s(r)?r.pa.used?r.pa.grade?r.pa.grade==="late"?f="スタッガーのあと":f=`${h(Math.round((r.pa.acsRatio||0)*100))}%`:f=r.pa.deployed?`肩代わり ${h(r.pa.blocked)}`:"張れなかった":f="未使用":ws(r)?f=`AP ${Math.round(r.ap.pct*100)}%`:r.sustain?f=`${O(Ds(r.sustain.bestFrames,l))} 秒`:f=`${h(r.successes)} / ${h(r.attempts)}`;const g=r.sdOffsetFrames===null||r.sdOffsetFrames===void 0?"—":`${O(r.sdOffsetFrames)}F`;return`
        <tr>
          <td class="sc-k">${o(R(r.savedAt))}</td>
          <td>${f}</td>
          <td class="sc-dim">ばらつき ${g}</td>
          <td class="sc-dim" data-lag-slot></td>
          <td class="sc-dim">${v?"自己ベスト":""}</td>
        </tr>`}).join(""),i=Math.min(c.length,ss),d=i<c.length?`${h(i)} 本（全 ${h(c.length)} 本）`:`${h(i)} 本`;return`
      <div class="sc-cap sc-cap--bar" data-recent-shown="${i}" data-recent-total="${c.length}">同じ条件の直近の記録<span class="sc-dim">　${d}</span></div>
      <table class="sc-table" data-test-progress-recent>${p}</table>`}_detailsHtml(s,t,e,a,c){return`
      <div class="sc-card sc-details" data-test-progress-details>
        <button type="button" class="sc-details-toggle"
          data-test-progress-details-toggle aria-expanded="false">
          <span class="sc-cap">詳しく</span>
        </button>
        <div class="sc-details-body" hidden>${`${this._spreadCard(a)}${this._retentionCard(c)}${this._mixPairsCard(s,t,e)}${this._transferCard(s,t,e)}`}</div>
      </div>`}_transferCard(s,t,e){const c=(this._ctx.data.training&&this._ctx.data.training.drillCells||[]).find(b=>(b.types||[]).some($=>$.drill===t));if(!c||c.benchBand===void 0)return"";const n=c.types||[],l=n.findIndex(b=>b.type===c.benchType);if((n[l>=0?l:0]||{}).drill!==t)return"";const i=this._ctx.data.training&&this._ctx.data.training.bandLabels||{},d=ks(s,t,e);if(d.bands.reduce((b,$)=>b+$.count,0)===0)return`
        <div class="sc-cap sc-cap--bar">練習していない間合い</div>
        <div class="sc-sub sc-dim">まだ 1 本もありません（種目を選ぶ画面の「練習していない間合い」の行から、測定のあとで始められます）。</div>`;const v=d.bands.map(b=>{const $=ds(b.band,b.distanceM,this._ctx.data)||i[b.band]||b.band,w="";if(b.count===0)return`<tr data-transfer-band="${o(b.band)}"><td class="sc-k">${o($)}</td><td class="sc-dim">まだ 0 本</td></tr>`;const D=`${Math.round(b.first*100)}%`,A=`${Math.round(b.recent*100)}%`,F=b.daysSince===null?"":`<span class="sc-dim">（前回 ${o(T(b.daysSince))}）</span>`;return`<tr data-transfer-band="${o(b.band)}"><td class="sc-k">${o($+w)}</td><td>${h(b.count)} 本　${o(D)} » ${o(A)}${F}</td></tr>`}).join(""),f=d.bench.count>0&&d.bench.recent!==null?`${Math.round(d.bench.recent*100)}%<span class="sc-dim">　／　${h(d.bench.count)} 本</span>`:'<span class="sc-dim">この期間に測定がありません</span>',g=d.window.fromDay===null?"—":P(d.window.fromDay);return`
      <div class="sc-cap sc-cap--bar">練習していない間合い</div>
      <table class="sc-table sc-table--dense">
        ${v}
        <tr data-transfer-row="bench"><td class="sc-k">参考：同じ期間の測定</td><td>${f}</td></tr>
      </table>
      <div class="sc-sub sc-dim">
        期間は ${o(g)} から（練習していない間合いの直近 ${h(d.window.want)} 本がまたぐ範囲）。
        測定は休止明けの 1 本目、練習していない間合いはその次の 1 本です。上下の差には構えの立て直しぶんが
        混ざるので、差そのものは読まないでください。
      </div>`}_mixPairsCard(s,t,e){const a=Os(s,t,e);if(a.pairs+a.droppedTotal===0)return`
        <div class="sc-cap sc-cap--bar">ミックスの前後<span class="sc-dim">　測定どうしの差</span></div>
        <div class="sc-sub sc-dim">まだ組になる測定がありません（隣り合う 2 本の測定が要ります）。</div>`;const n=(p,i,d)=>{const r=`${h(p.length)} 組`;if(i===null)return`<tr><td class="sc-k">${o(d)}</td><td>${r}<span class="sc-dim">　／　平均はまだ出しません</span></td></tr>`;const v=i>0?"+":"";return`<tr><td class="sc-k">${o(d)}</td><td>${v}${O(i)}pt<span class="sc-dim">　／　${r}</span></td></tr>`},l=[["invalid","時刻が無い"],["sameDay","同じ練習日"],["gap",`間隔が ${h(e.mixPairMaxGapDays)} 日超`],["between","練習日が挟まる"],["build","条件が違う"],["value","測れない"]].filter(([p])=>a.dropped[p]>0).map(([p,i])=>`<span data-mix-reason="${p}">${o(i)} ${h(a.dropped[p])}</span>`).join(" ／ ");return`
      <div class="sc-cap sc-cap--bar">ミックスの前後<span class="sc-dim">　測定どうしの差</span></div>
      <table class="sc-table sc-table--dense">
        ${n(a.mixed,a.avg.mixed,"ミックスした翌回")}
        ${n(a.blocked,a.avg.blocked,"ブロックだけの翌回")}
        <tr><td class="sc-k">混在で数えられない</td><td>${h(a.mixedInSame)} 組</td></tr>
        <tr><td class="sc-k">あいだに練習が無い</td><td>${h(a.restOnly)} 組</td></tr>
      </table>
      <div class="sc-sub sc-dim">
        ${a.droppedTotal>0?`除外 ${h(a.droppedTotal)} 組（${l}）。`:""}
        両端に測定が要ります。${a.avg.enough?"":`両側が ${h(e.mixMinPairs)} 組そろうまで平均は出しません。`}
      </div>`}_curveCard(s,t){const e=s.points;if(e.length===0)return`
        <div class="sc-cap sc-cap--bar">成績の推移</div>
        <div class="sc-sub sc-dim">まだ 1 本もありません。1 本やると、ここに点が 1 つ出ます。</div>`;if(this.benchOnly&&W(e).length===0)return`
        <div class="sc-cap sc-cap--bar">成績の推移</div>
        <div class="sc-sub sc-dim">測定はまだ 1 本もありません（その日の 1 本目を標準の条件で走らせると付きます）。</div>`;const c=e[e.length-1].kind==="hold"?"保てた割合（最長 ÷ 1 本の長さ）":"成功率",n=this.axis==="n"?"累積の本数":"日付";return`
      <div class="sc-cap sc-cap--bar">成績の推移<span class="sc-dim">　縦 ${o(c)}　／　横 ${o(n)}</span></div>
      ${this._curveSvg(e,t,this.benchOnly)}
      <div class="sc-sub sc-dim">
        線の形＝速さ（実線 等速／破線 1/2／点線 1/4）　■ 中空の四角＝その練習日の 1 本目
        結んである点＝測定／薄い点＝練習　うすい範囲＝目安（${Math.round(t.band.low*100)}〜${Math.round(t.band.high*100)}%）
      </div>`}_positions(s){const t=s.length;if(this.axis!=="day")return s.map((d,r)=>({p:d,x:t<=1?.5:r/(t-1)}));const e=new Map;for(const d of s)d.day!==null&&e.set(d.day,(e.get(d.day)||0)+1);const a=new Map,c=s.map(d=>{if(d.day===null)return null;const r=e.get(d.day),v=a.get(d.day)||0;a.set(d.day,v+1);const f=r<=1?0:(v/(r-1)-.5)*.6;return d.day+f}),n=c.filter(d=>d!==null);if(n.length===0)return s.map(d=>({p:d,x:null}));const l=Math.min(...n),i=Math.max(...n)-l;return s.map((d,r)=>({p:d,x:c[r]===null?null:i>0?(c[r]-l)/i:.5}))}_curveSvg(s,t,e){const a=U,c=Cs,n=V,l=a-Z,p=J,i=c-Q,d=u=>n+u*(l-n),r=u=>i-u*(i-p),v=this._positions(s),f=t.steps,g=f.length-1;let b="";for(const u of[0,.25,.5,.75,1]){const m=r(u);b+=`<line class="pg-grid" x1="${n}" y1="${m.toFixed(1)}" x2="${l}" y2="${m.toFixed(1)}"/>`,(u===0||u===.5||u===1)&&(b+=`<text class="pg-tick" x="${n-8}" y="${(m+5).toFixed(1)}" text-anchor="end">${Math.round(u*100)}%</text>`)}const $=r(t.band.high),w=r(t.band.low)-$,D=`<rect class="pg-band" x="${n}" y="${$.toFixed(1)}" width="${(l-n).toFixed(1)}" height="${w.toFixed(1)}"/>`;let A="";for(let u=0;u<f.length;u++){const m=v.filter(x=>x.p.step===u&&x.x!==null&&x.p.value!==null),k=e?m.filter(x=>x.p.bench):m;if(k.length<2)continue;const y=k.map(x=>`${d(x.x).toFixed(1)},${r(x.p.value).toFixed(1)}`).join(" ");A+=`<polyline class="pg-line pg-line--${g-u}" points="${y}"/>`}let F="";for(const u of v){if(u.x===null||u.p.value===null)continue;const m=d(u.x),k=r(u.p.value),y=u.p.rec.cond||{},x=[R(u.p.savedAt),u.p.text];f[u.p.step]&&x.push(f[u.p.step].label);const L=rs(this._ctx.data,y.weapon,y.weaponLabel);L&&x.push(L),y.leadFrames&&x.push(`猶予 ${h(y.leadFrames)}F`),u.p.rec.mix&&x.push(`ミックス ${h(u.p.rec.mix.index)}/${h(u.p.rec.mix.total)}`),u.p.firstOfDay&&x.push("その練習日の 1 本目"),x.push(u.p.bench?"測定":"練習");const j=`<title>${o(x.join("　／　"))}</title>`,E=!!e&&!u.p.bench,N=E?" pg-dot--practice":"";F+=u.p.firstOfDay?`<rect class="pg-dot pg-dot--first${N}" x="${(m-4.5).toFixed(1)}" y="${(k-4.5).toFixed(1)}" width="9" height="9">${j}</rect>`:`<circle class="pg-dot${N}" cx="${m.toFixed(1)}" cy="${k.toFixed(1)}" r="${E?2.5:4}">${j}</circle>`}const ts=s[0],as=s[s.length-1],es=this.axis==="n"?"1 本目":Y(ts.day),cs=this.axis==="n"?`${s.length} 本目`:Y(as.day);return`<svg class="pg-chart" viewBox="0 0 ${a} ${c}" width="${a}" height="${c}">
      <rect class="pg-plot" x="${n}" y="${p}" width="${l-n}" height="${i-p}"/>
      ${D}
      ${b}
      ${A}
      ${F}
      <line class="pg-axis" x1="${n}" y1="${i}" x2="${l}" y2="${i}"/>
      <text class="pg-tick" x="${n}" y="${c-8}">${o(es)}</text>
      <text class="pg-tick" x="${l}" y="${c-8}" text-anchor="end">${o(cs)}</text>
    </svg>`}_spreadCard(s){const t=s.points.filter(n=>n.spread);if(t.length<2)return`
        <div class="sc-cap sc-cap--bar">ばらつき</div>
        <div class="sc-sub sc-dim">まだ並べられる記録がありません（2 本要ります）。</div>`;const e=t[t.length-1].spread.unit.trim(),a=t[t.length-1].spread.label,c=e&&!a.includes(e)?`（${e}）`:"";return`
      <div class="sc-cap sc-cap--bar">ばらつき<span class="sc-dim">　${o(a)}${o(c)}　小さくなっていくのが上達</span></div>
      ${this._spreadSvg(s.points)}`}_spreadSvg(s){const t=U,e=As,a=V,c=t-Z,n=J,l=e-Q,p=this._positions(s),i=s.filter($=>$.spread).map($=>$.spread.value),d=Math.max(1,...i),r=$=>a+$*(c-a),v=$=>l-$/d*(l-n),f=p.filter($=>$.x!==null&&$.p.spread),g=f.map($=>`${r($.x).toFixed(1)},${v($.p.spread.value).toFixed(1)}`).join(" "),b=f.map($=>{const w=`${R($.p.savedAt)}　${O($.p.spread.value)}${$.p.spread.unit}`;return`<circle class="pg-dot" cx="${r($.x).toFixed(1)}" cy="${v($.p.spread.value).toFixed(1)}" r="3"><title>${o(w)}</title></circle>`}).join("");return`<svg class="pg-chart" viewBox="0 0 ${t} ${e}" width="${t}" height="${e}">
      <rect class="pg-plot" x="${a}" y="${n}" width="${c-a}" height="${l-n}"/>
      <line class="pg-grid" x1="${a}" y1="${n}" x2="${c}" y2="${n}"/>
      <text class="pg-tick" x="${a-8}" y="${n+5}" text-anchor="end">${O(d)}</text>
      <text class="pg-tick" x="${a-8}" y="${l}" text-anchor="end">0</text>
      ${f.length>1?`<polyline class="pg-line pg-line--0" points="${g}"/>`:""}
      ${b}
      <line class="pg-axis" x1="${a}" y1="${l}" x2="${c}" y2="${l}"/>
    </svg>`}_retentionCard(s){if(!s||s.length===0)return`
        <div class="sc-cap sc-cap--bar">日をまたいだ変化</div>
        <div class="sc-sub sc-dim">練習した日が 2 日ぶんそろうと、ここに出ます。
          今日の 1 本目は、昨日の練習が残っているかを見るテストです。</div>`;const t=(this._ctx.data.training||{}).warmupAttempts||0;return`
      <div class="sc-cap sc-cap--bar">日をまたいだ変化<span class="sc-dim">　前の練習日の終わり » その日の 1 本目</span></div>
      <table class="sc-table sc-table--dense">
        <tr><th>いつ</th><th>間隔</th><th>終わり » 1 本目</th><th>差</th></tr>
        ${s.slice(0,Ms).map(a=>{const c=a.before?a.before.text:"—",n=a.after?a.after.text:"—",l=a.deltaPt,p=l===null?"—":`${l>0?"+":""}${l} ポイント`;return`
        <tr>
          <td class="sc-k">${o(a.dayLabel)}</td>
          <td class="sc-dim">${h(a.gapDays)} 日ぶり</td>
          <td>${o(c)} <span class="sc-arrow">»</span> ${o(n)}</td>
          <td class="sc-num">${o(p)}</td>
        </tr>`}).join("")}
      </table>
      <div class="sc-sub sc-dim">1 本目は最初の ${h(t)} 回だけで数えるので、もともと振れます。数の少なさも含めて見てください。</div>`}_stairsCard(s){const t=s.steps.map(n=>{const l=n.current?'<span class="sc-live">■</span>':'<span class="sc-dim">□</span>',p=n.recent===null?"—":`${Math.round(n.recent*100)}%`;return`
        <tr class="${n.current?"sc-now":""}">
          <td class="sc-k">${l} ${o(n.label)}</td>
          <td class="sc-num">${h(n.count)} 本</td>
          <td class="sc-num">${o(p)}</td>
        </tr>`}).join(""),e=s.advice?`<div class="sc-sub">${o(s.advice.text)}</div>`:'<div class="sc-sub sc-dim">直近の記録がそろうと、ここに「上げる／下げる」の案内が出ます。</div>',a=`目安（${Math.round(s.band.low*100)}〜${Math.round(s.band.high*100)}%）`,c=s.advice&&s.advice.text.includes("目安")?"目安は、練習にちょうどよい成績の範囲です。":`${a}は、練習にちょうどよい成績の範囲です。`;return`
      <div class="sc-cap sc-cap--bar">速さ<span class="sc-dim">　速さごとの直近の成績</span></div>
      <table class="sc-table sc-table--dense">
        <tr><th>速さ</th><th>本数</th><th>直近</th></tr>
        ${t}
      </table>
      ${e}
      <div class="sc-sub sc-dim">
        ${o(c)}
      </div>`}}export{Ps as Progress};
