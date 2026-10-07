const l=1920,p=1080;function d(o){const t=document.createElement("div");t.id=o.id,t.className="sc-root",t.style.position="fixed",t.style.left="0",t.style.top="0",t.style.width="100%",t.style.height="100%",t.style.zIndex=String(o.zIndex),t.style.display="none",typeof window<"u"&&window.__AC6_HARNESS&&(t.dataset.harness="1");const s=document.createElement("div");s.className="sc-stage",s.style.width="1920px",s.style.height="1080px",s.style.transformOrigin="0 0";const c=document.createElement("div");return c.className="sc-body",s.appendChild(c),t.appendChild(s),document.body.appendChild(t),{el:t,stage:s,body:c,resize(a,i){s.style.transform=`scale(${Math.min(a/1920,i/1080)})`},dispose(){t.parentNode&&t.parentNode.removeChild(t)}}}let e=null,r=0;function x(o){if(r+=1,e)return e;const t=document.createElement("style");return t.id="screen-style",t.textContent=n(o),document.head.appendChild(t),e=t,t}function g(){r=Math.max(0,r-1),!(r>0||!e)&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}function n(o){return`
      
      .sc-root { background: ${o.bg}; }
      .sc-root .sc-stage {
        position: absolute; left: 0; top: 0;
        background: ${o.bg};
        color: ${o.text};
        font: 22px/1.6 ${o.fontStack};
        overflow: hidden;
      }
      .sc-root .sc-body { width: 100%; height: 100%; }
      .sc-root .sc-page {
        box-sizing: border-box; width: 100%; height: 100%;
        padding: 48px 64px; display: flex; flex-direction: column; gap: 20px;
      }
      
      .sc-root:focus-visible { outline: none; }
      .sc-root button:focus-visible,
      .sc-root .sc-input:focus-visible,
      .sc-root .sc-select:focus-visible {
        outline: 2px solid ${o.text};
        outline-offset: 3px;
      }
      
      .sc-root .sc-page.sc-in {
        animation: sc-wipe-in 120ms steps(4, end) both;
      }
      @keyframes sc-wipe-in {
        from { clip-path: inset(0 0 100% 0); }
        to   { clip-path: inset(0 0 0 0); }
      }
      
      .sc-root .sc-head {
        position: relative;
        display: flex; align-items: baseline; gap: 24px;
        margin: -48px -64px 0; padding: 44px 64px 18px;
        
        background: linear-gradient(90deg,
          color-mix(in srgb, ${o.headGlow} 38%, transparent) 0%, transparent 45%);
      }
      .sc-root .sc-head::before {
        
        content: ''; position: absolute; left: 40px; bottom: 0;
        width: 3px; height: 24px; background: ${o.headGlow};
      }
      .sc-root .sc-head::after {
        
        content: ''; position: absolute; left: 0; right: 0; bottom: 0;
        height: 2px; background: ${o.headGlow};
      }
      .sc-root .sc-title { font-size: 28px; color: ${o.textDim}; letter-spacing: 0.18em; }
      .sc-root .sc-drill { font-size: 40px; font-weight: bold; }
      
      .sc-root .sc-tag { color: ${o.textDim}; font-size: 18px; letter-spacing: 0.04em; }
      .sc-root .sc-when { margin-left: auto; color: ${o.textDim}; font-size: 18px; }
      .sc-root .sc-cond {
        color: ${o.textDim}; font-size: 18px;
        border-bottom: 1px solid ${o.textDim}; padding-bottom: 12px;
      }
      
      .sc-root .sc-mixband {
        color: ${o.text}; font-size: 22px;
        border-bottom: 1px solid ${o.accent};
      }
      .sc-root .sc-mixband b { color: ${o.accent}; font-weight: bold; }
      
      .sc-root .sc-savewarn { color: ${o.text}; }
      
      .sc-root .sc-storagenotice {
        position: absolute; left: 400px; right: 830px; top: 40px;
        display: flex; flex-direction: column; gap: 4px;
      }
      .sc-root .sc-storagenotice .sc-savewarn {
        font-size: 18px;
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      }
      
      .sc-root .sc-storagenotice--wrap { top: 22px; }
      .sc-root .sc-storagenotice .sc-savewarn[data-test-version-notice],
      .sc-root .sc-storagenotice .sc-savewarn[data-test-notice] {
        white-space: normal; overflow: visible; text-overflow: clip; line-height: 1.25;
      }
      
      .sc-root .sc-mixdots {
        font-family: ${o.fontStackNum}; letter-spacing: 0.35em;
        margin: 0 14px 0 12px; color: ${o.accent};
      }
      .sc-root .sc-cols { display: flex; gap: 32px; flex: 1; min-height: 0; }
      
      
      .sc-root .sc-col {
        flex: 1; display: flex; flex-direction: column; gap: 16px;
        min-width: 0; min-height: 0;
      }
      
      .sc-root .sc-page:has(> .sc-foot--debrief) .sc-col {
        overflow-y: auto; scrollbar-gutter: stable;
      }
      .sc-root .sc-page:has(> .sc-foot--debrief) .sc-col::-webkit-scrollbar { width: 10px; }
      .sc-root .sc-page:has(> .sc-foot--debrief) .sc-col::-webkit-scrollbar-track { background: ${o.panelSub}; }
      .sc-root .sc-page:has(> .sc-foot--debrief) .sc-col::-webkit-scrollbar-thumb { background: ${o.headGlow}; }
      
      .sc-root .sc-card {
        position: relative;
        background: ${o.panelSub};
        padding: 16px 20px;
      }
      .sc-root .sc-card--main { background: ${o.panel}; }
      
      .sc-root .sc-details-toggle {
        background: none; border: 0; padding: 0; margin: 0; width: 100%;
        display: block; text-align: left; cursor: pointer; font-size: 26px;
      }
      
      .sc-root .sc-details-toggle .sc-cap {
        margin-bottom: 0; font-size: 26px;
      }
      .sc-root .sc-details-toggle::after { content: '▶'; float: right; color: ${o.textDim}; }
      .sc-root .sc-details-toggle[aria-expanded="true"]::after { content: '▼'; }
      .sc-root .sc-details-body {
        margin-top: 12px; display: flex; flex-direction: column; gap: 16px;
      }
      .sc-root .sc-details-body[hidden] { display: none; }
      .sc-root .sc-details-body .sc-card { padding: 0; background: transparent; }
      .sc-root .sc-details-body .sc-card::before { content: none; }
      
      .sc-root .sc-card--fill {
        flex: 1; min-height: 0; display: flex; flex-direction: column;
      }
      
      .sc-root .sc-card--shrink {
        flex: 0 1 auto; min-height: 0; display: flex; flex-direction: column;
      }
      
      .sc-root .sc-oneline {
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100%;
      }
      
      .sc-root .sc-table td.sc-oneline { max-width: 400px; }
      
      .sc-root [data-row-options] td:last-child {
        overflow-wrap: anywhere;
      }
      
      .sc-root .sc-card::before {
        content: '';
        position: absolute; left: -5px; right: -5px; top: -5px; bottom: -5px;
        pointer-events: none;
        background-repeat: no-repeat;
        background-size: 5px 5px;
        background-position: left top, right top, left bottom, right bottom;
        background-image:
          radial-gradient(circle, ${o.headGlow} 1.5px, transparent 1.6px),
          radial-gradient(circle, ${o.headGlow} 1.5px, transparent 1.6px),
          radial-gradient(circle, ${o.headGlow} 1.5px, transparent 1.6px),
          radial-gradient(circle, ${o.headGlow} 1.5px, transparent 1.6px);
      }
      
      .sc-root .sc-cap {
        color: ${o.textDim}; font-size: 22px; font-weight: bold;
        letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 8px;
      }
      .sc-root .sc-cap::before { content: '■'; margin-right: 6px; }
      .sc-root .sc-cap .sc-dim {
        font-size: 18px; font-weight: normal; letter-spacing: normal; text-transform: none;
        margin-left: 4px;
      }
      .sc-root .sc-big { font-size: 64px; font-weight: bold; line-height: 1.1; font-family: ${o.fontStackNum}; }
      
      .sc-root .sc-arrow {
        display: inline-block; font-size: 22px; font-weight: normal;
        color: ${o.textDim}; margin-right: 10px; font-family: ${o.fontStack};
      }
      .sc-root .sc-unit { font-size: 28px; color: ${o.textDim}; font-weight: normal; font-family: ${o.fontStackNum}; }
      .sc-root .sc-sub { color: ${o.textDim}; font-size: 18px; }
      .sc-root .sc-dim { color: ${o.textDim}; }
      
      .sc-root .sc-table {
        width: 100%; border-collapse: separate; border-spacing: 0 4px; font-size: 22px;
      }
      .sc-root .sc-table th {
        text-align: left; color: ${o.textDim}; font-weight: normal; font-size: 18px;
        padding: 0 14px;
      }
      .sc-root .sc-table td {
        padding: 7px 14px; background: ${o.rowDark};
      }
      
      .sc-root .sc-table tr:nth-child(even) td { background: ${o.rowAlt}; }
      
      .sc-root .sc-table td:last-child:not(.sc-dim) { text-align: right; }
      
      .sc-root .sc-table td.sc-left:last-child { text-align: left; }
      
      .sc-root .sc-table .sc-k {
        color: ${o.text}; white-space: nowrap; width: 1%; text-align: left;
      }
      
      .sc-root .sc-table td.sc-note {
        white-space: normal; text-align: left; font-size: 17px; line-height: 1.4;
        
        padding-left: 56px;
      }
      
      .sc-root .sc-table tr.sc-now td { background: ${o.rowActive}; color: ${o.bg}; }
      .sc-root .sc-table tr.sc-now .sc-dim,
      .sc-root .sc-table tr.sc-now .sc-k,
      .sc-root .sc-table tr.sc-now .sc-num,
      .sc-root .sc-table tr.sc-now .sc-arrow,
      .sc-root .sc-table tr.sc-now .sc-live { color: ${o.bg}; }
      .sc-root .sc-bandhead {
        display: flex; justify-content: space-between;
        color: ${o.textDim}; font-size: 18px; width: 520px;
      }
      .sc-root .sc-band { margin-top: 8px; }
      .sc-root .sc-bandlabel { font-size: 22px; }
      .sc-root .sc-bandnote { color: ${o.textDim}; font-size: 18px; }
      .sc-root .sc-track { fill: ${o.textDim}; opacity: 0.18; }
      
      .sc-root .sc-ok { fill: ${o.accent}; opacity: 0.38; }
      .sc-root .sc-sd { fill: ${o.text}; opacity: 0.22; }
      .sc-root .sc-zero { stroke: ${o.textDim}; stroke-width: 1; }
      .sc-root .sc-avg { stroke: ${o.text}; stroke-width: 3; }

      
      .sc-root .sc-runhead {
        display: flex; justify-content: space-between;
        color: ${o.textDim}; font-size: 18px;
        width: 520px; margin-left: 34px;
      }
      .sc-root .sc-run { display: flex; align-items: center; gap: 12px; }
      .sc-root .sc-runno {
        width: 22px; text-align: right; color: ${o.textDim}; font-size: 18px;
      }
      .sc-root .sc-runtrack { fill: ${o.textDim}; opacity: 0.18; }
      .sc-root .sc-runbar { fill: ${o.textDim}; opacity: 0.75; }
      
      .sc-root .sc-runbar--held { fill: ${o.accent}; opacity: 0.85; }
      
      .sc-root .sc-runbreak { stroke: ${o.text}; stroke-width: 3; }
      
      .sc-root .sc-runen { stroke: ${o.text}; stroke-width: 2; opacity: 0.7; }
      .sc-root .sc-runsec { width: 76px; text-align: right; font-size: 18px; }
      .sc-root .sc-runwhy { color: ${o.textDim}; font-size: 18px; }
      .sc-root .sc-foot {
        display: flex; gap: 32px; align-items: baseline;
        border-top: 1px solid ${o.textDim}; padding-top: 12px; font-size: 18px;
      }
      
      .sc-root .sc-foot b {
        display: inline-block; color: ${o.accent}; font-weight: bold;
        border: 1px solid ${o.textDim}; border-radius: 4px;
        padding: 2px 9px; margin-right: 4px; font-family: ${o.fontStackNum};
      }
      
      .sc-root .sc-table .sc-key {
        color: ${o.accent}; font-weight: bold; width: 1%;
        white-space: nowrap; font-family: ${o.fontStackNum}; text-align: left;
      }
      .sc-root .sc-table .sc-why {
        color: ${o.accent}; white-space: nowrap;
      }
      

      
      .sc-root .sc-table tr[data-drill-index],
      .sc-root .sc-table tr[data-pick-index],
      .sc-root .sc-table tr[data-cond],
      .sc-root .sc-table tr[data-mix] { cursor: pointer; }
      .sc-root .sc-table tr[data-drill-index]:hover td,
      .sc-root .sc-table tr[data-pick-index]:hover td,
      .sc-root .sc-table tr[data-cond]:hover td,
      .sc-root .sc-table tr[data-mix]:hover td {
        background: ${o.rowActive}; color: ${o.bg};
      }
      .sc-root .sc-table tr[data-drill-index]:hover .sc-key,
      .sc-root .sc-table tr[data-drill-index]:hover .sc-why,
      .sc-root .sc-table tr[data-drill-index]:hover .sc-tag,
      .sc-root .sc-table tr[data-drill-index]:hover .sc-dim,
      .sc-root .sc-table tr[data-pick-index]:hover .sc-key,
      .sc-root .sc-table tr[data-pick-index]:hover .sc-why,
      .sc-root .sc-table tr[data-pick-index]:hover .sc-tag,
      .sc-root .sc-table tr[data-pick-index]:hover .sc-dim,
      .sc-root .sc-table tr[data-cond]:hover .sc-key,
      .sc-root .sc-table tr[data-cond]:hover .sc-k,
      .sc-root .sc-table tr[data-cond]:hover .sc-arrow,
      .sc-root .sc-table tr[data-mix]:hover .sc-key,
      .sc-root .sc-table tr[data-mix]:hover .sc-why,
      .sc-root .sc-table tr[data-mix]:hover .sc-dim,
      .sc-root .sc-table tr[data-mix]:hover .sc-arrow {
        color: ${o.bg};
      }

      
      .sc-root .sc-table tr[data-cond].sc-condrow--on td {
        background: ${o.rowActive}; color: ${o.bg};
      }
      .sc-root .sc-table tr[data-cond].sc-condrow--on .sc-key,
      .sc-root .sc-table tr[data-cond].sc-condrow--on .sc-k,
      .sc-root .sc-table tr[data-cond].sc-condrow--on .sc-arrow {
        color: ${o.bg};
      }

      
      .sc-root .sc-mlist {
        width: 100%; border-collapse: separate; border-spacing: 0 6px; font-size: 22px;
      }
      .sc-root .sc-mrow { cursor: pointer; }
      
      .sc-root .sc-mlist td {
        height: 44px; padding: 0 9px; vertical-align: middle;
        background: ${o.rowIdle};
      }
      
      .sc-root .sc-mgroup td {
        background: transparent; height: 19px; line-height: 1;
        padding: 6px 9px 0; vertical-align: bottom;
      }
      .sc-root .sc-mgroup:first-child td { padding-top: 0; }
      .sc-root .sc-mgroup-n {
        width: 1%; white-space: nowrap; text-align: left;
        color: ${o.accent}; font-size: 18px; font-family: ${o.fontStackNum};
      }
      .sc-root .sc-mgroup-t { text-align: left; white-space: nowrap; }
      .sc-root .sc-mgroup-name {
        color: ${o.text}; font-size: 18px; letter-spacing: 0.18em;
        border-bottom: 1px solid ${o.capBar}; padding-bottom: 2px;
      }
      .sc-root .sc-mgroup-why { color: ${o.textDim}; font-size: 18px; margin-left: 14px; }
      .sc-root .sc-mkey {
        width: 1%; white-space: nowrap; text-align: left;
        color: ${o.accent}; font-weight: bold; font-family: ${o.fontStackNum};
      }
      
      .sc-root .sc-micon { width: 1%; white-space: nowrap; text-align: left; color: ${o.accent}; font-size: 14px; }
      
      .sc-root .sc-micon-btn {
        display: inline-flex; cursor: pointer; padding: 6px; margin: -6px;
      }
      .sc-root .sc-micon-svg { display: block; fill: currentColor; }
      .sc-root .sc-micon-bar {
        transform-box: fill-box; transform-origin: center;
        transition: transform 120ms, opacity 120ms;
      }
      .sc-root .sc-micon-svg--on .sc-micon-bar--1 { transform: translateY(6px) rotate(45deg); }
      .sc-root .sc-micon-svg--on .sc-micon-bar--2 { opacity: 0; }
      .sc-root .sc-micon-svg--on .sc-micon-bar--3 { transform: translateY(-6px) rotate(-45deg); }
      
      .sc-root .sc-mname {
        text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      }
      
      .sc-root .sc-mrowbtn {
        display: block; width: 100%; text-align: left; font: inherit; color: inherit;
        background: none; border: 0; padding: 0; margin: 0; cursor: pointer;
        overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      }
      .sc-root .sc-mrowbtn:focus-visible {
        outline: 2px solid ${o.accent}; outline-offset: 2px;
      }
      .sc-root .sc-mcount,
      .sc-root .sc-mwhen { width: 1%; white-space: nowrap; text-align: right; color: ${o.textDim}; }
      
      .sc-root .sc-mrow:hover td { background: ${o.rowActive}; }
      .sc-root .sc-mrow:hover .sc-mkey,
      .sc-root .sc-mrow:hover .sc-micon,
      .sc-root .sc-mrow:hover .sc-mname,
      .sc-root .sc-mrow:hover .sc-mcount,
      .sc-root .sc-mrow:hover .sc-mwhen,
      .sc-root .sc-mrow:hover .sc-tag,
      .sc-root .sc-mrow:hover .sc-arrow,
      .sc-root .sc-mrow:hover .sc-celltype {
        color: ${o.bg};
      }

      
      .sc-root .sc-mtype { width: 1%; white-space: nowrap; text-align: left; }
      .sc-root .sc-celltype {
        display: inline-block; margin-left: 10px; padding: 2px 6px; cursor: pointer;
        color: ${o.textDim};
      }
      .sc-root .sc-celltype:first-child { margin-left: 0; }
      .sc-root .sc-celltype--on { color: ${o.accent}; font-weight: bold; }
      
      .sc-root .sc-celltype .sc-tag { margin-left: 5px; }
      
      .sc-root .sc-mrow--on td { background: ${o.rowActive}; }
      .sc-root .sc-mrow--on .sc-mkey,
      .sc-root .sc-mrow--on .sc-micon,
      .sc-root .sc-mrow--on .sc-mname,
      .sc-root .sc-mrow--on .sc-mcount,
      .sc-root .sc-mrow--on .sc-mwhen,
      .sc-root .sc-mrow--on .sc-tag,
      .sc-root .sc-mrow--on .sc-arrow,
      .sc-root .sc-mrow--on .sc-celltype {
        color: ${o.bg};
      }
      
      .sc-root .sc-mrow--on .sc-celltype--on { text-decoration: underline; }

      
      .sc-root .sc-cols--select3 { gap: 24px; }
      .sc-root .sc-cols--select3 > .sc-col--picks { flex: 0 0 520px; }
      .sc-root .sc-cols--select3 > .sc-col--cells { flex: 0 0 500px; }
      .sc-root .sc-cols--select3 > .sc-col--detail { flex: 1 1 0; }
      
      .sc-root .sc-picks { display: flex; flex-direction: column; gap: 8px; }
      .sc-root .sc-pcard {
        display: flex; align-items: center; gap: 12px;
        background: ${o.rowDark}; padding: 8px 12px;
      }
      .sc-root .sc-pcard + .sc-pcard { margin-top: 0; }
      .sc-root .sc-pcard-main { flex: 1; min-width: 0; }
      .sc-root .sc-pcard-name { font-size: 22px; line-height: 1.3; }
      .sc-root .sc-pcard-why { font-size: 18px; line-height: 1.4; color: ${o.textDim}; }
      .sc-root .sc-pcard-why .sc-why { color: ${o.accent}; white-space: nowrap; }
      .sc-root .sc-pcard-go { flex: 0 0 auto; }

      
      .sc-root .sc-clist { display: flex; flex-direction: column; gap: 6px; }
      .sc-root .sc-cgroup {
        display: flex; align-items: baseline; gap: 12px;
        padding-top: 8px; line-height: 1; font-size: 18px;
      }
      .sc-root .sc-cgroup:first-child { padding-top: 0; }
      .sc-root .sc-cgroup-name {
        color: ${o.text}; letter-spacing: 0.18em;
        border-bottom: 1px solid ${o.capBar}; padding-bottom: 2px;
      }
      .sc-root .sc-crow {
        display: flex; align-items: center; gap: 12px; box-sizing: border-box;
        width: 100%; height: 44px; padding: 0 12px; margin: 0; border: 0;
        background: ${o.rowIdle}; color: ${o.text};
        font: 22px/1 ${o.fontStack}; text-align: left; cursor: pointer;
      }
      .sc-root .sc-crow-name {
        flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      }
      .sc-root .sc-crow-meta { color: ${o.textDim}; font-size: 18px; white-space: nowrap; }
      
      .sc-root .sc-crow-tier { flex: 0 0 24px; text-align: right; font-family: ${o.fontStackNum}; }
      .sc-root .sc-tierhead {
        float: right; margin-right: 12px; font-size: 18px; font-weight: normal;
        letter-spacing: normal; text-transform: none;
      }
      .sc-root .sc-tierhead::before { content: none; }
      
      .sc-root .sc-crow:hover,
      .sc-root .sc-crow[aria-current="true"] { background: ${o.rowActive}; color: ${o.bg}; }
      .sc-root .sc-crow:hover .sc-crow-meta,
      .sc-root .sc-crow:hover .sc-tag,
      .sc-root .sc-crow:hover .sc-arrow,
      .sc-root .sc-crow[aria-current="true"] .sc-crow-meta,
      .sc-root .sc-crow[aria-current="true"] .sc-tag,
      .sc-root .sc-crow[aria-current="true"] .sc-arrow { color: ${o.bg}; }

      
      .sc-root .sc-detail { display: flex; flex-direction: column; gap: 12px; }
      .sc-root .sc-dscroll { flex: 1; min-height: 0; }
      .sc-root .sc-dhead { display: flex; align-items: baseline; gap: 16px; }
      .sc-root .sc-dname { font-size: 28px; font-weight: bold; }
      .sc-root .sc-dline { margin: 0 0 6px; }
      .sc-root .sc-dconds { display: flex; flex-direction: column; gap: 3px; }
      .sc-root .sc-drow {
        display: flex; align-items: center; gap: 12px; min-height: 42px;
        background: ${o.rowIdle}; padding: 0 8px 0 12px;
      }
      .sc-root .sc-drow[aria-current="true"] { box-shadow: inset 3px 0 0 ${o.accent}; }
      
      .sc-root .sc-dk { flex: 0 0 224px; font-size: 22px; line-height: 1.15; white-space: nowrap; }
      .sc-root .sc-dv {
        flex: 1; min-width: 0; display: flex; flex-wrap: wrap; align-items: center; gap: 6px;
      }
      .sc-root .sc-dkey { font-size: 18px; margin-left: 4px; }
      
      .sc-root .sc-drow[data-cond-row="enemy"] .sc-dv { font-size: 18px; }
      .sc-root .sc-dnote { margin: 0 0 2px 12px; line-height: 1.25; }
      .sc-root .sc-dsep { margin: 8px 0 4px; border-bottom: 1px solid ${o.capBar}; }
      .sc-root .sc-dsep .sc-cap { margin-bottom: 2px; }
      
      
      .sc-root .sc-btn.sc-vbtn { font-size: 18px; padding: 3px 9px; }
      .sc-root .sc-vbtn[aria-pressed="true"] {
        background: ${o.accent}; border-color: ${o.accent}; color: ${o.bg}; font-weight: bold;
      }
      .sc-root .sc-vbtn--wide { white-space: normal; text-align: left; }
      .sc-root .sc-dblocked { font-size: 18px; flex-shrink: 0; }
      .sc-root .sc-dfoot {
        display: flex; align-items: center; justify-content: space-between; gap: 16px;
        flex-shrink: 0; border-top: 1px solid ${o.textDim}; padding-top: 12px;
      }
      .sc-root .sc-dfoot-l { display: flex; align-items: center; gap: 12px; font-size: 18px; }
      
      .sc-root .sc-start { font-size: 28px; padding: 8px 32px; }
      .sc-root .sc-start b {
        display: inline-block; font-weight: bold; font-size: 18px;
        border: 1px solid currentColor; border-radius: 4px;
        padding: 1px 7px; margin-left: 12px; font-family: ${o.fontStackNum};
      }

      

      
      .sc-root .sc-page--dense { padding: 40px 56px; gap: 12px; }
      .sc-root .sc-page--dense .sc-head {
        margin: -40px -56px 0; padding: 34px 56px 14px;
      }
      .sc-root .sc-page--dense .sc-head::before { left: 32px; }
      
      .sc-root .sc-page--dense .sc-cols { gap: 24px; }
      .sc-root .sc-page--dense .sc-col { gap: 4px; min-height: 0; }

      
      .sc-root .sc-page--garage { gap: 6px; }
      .sc-root .sc-page--garage .sc-cols { gap: 24px; }
      
      .sc-root .sc-page--garage .sc-table--dense { border-spacing: 0 1px; }
      .sc-root .sc-page--garage .sc-table--dense td { padding: 1px 8px; }
      .sc-root .sc-page--garage .sc-table--dense .sc-bar { width: 64px; }
      
      .sc-root .sc-page--garage .sc-col--scroll { gap: 2px; }
      .sc-root .sc-page--garage .sc-gauge { margin: 2px 0 2px 12px; }
      
      .sc-root .sc-page--garage .sc-cap--bar { padding: 0 12px; line-height: 1.2; }
      
      .sc-root .sc-page--garage .sc-note { min-height: 0; padding: 4px 14px; }
      
      .sc-root .sc-col--scroll {
        overflow-y: auto; overflow-x: hidden; scrollbar-gutter: stable;
      }
      
      .sc-root .sc-cols--progress-detail > .sc-col--scroll > * { flex-shrink: 0; }
      
      .sc-root .sc-cols--help > .sc-col:nth-child(1) { flex: 1.2; }
      .sc-root .sc-cols--help > .sc-col:nth-child(2) { flex: 1.05; }
      .sc-root .sc-cols--help > .sc-col:nth-child(3) { flex: 0.75; }
      .sc-root .sc-col--scroll::-webkit-scrollbar { width: 10px; }
      .sc-root .sc-col--scroll::-webkit-scrollbar-track { background: ${o.panelSub}; }
      .sc-root .sc-col--scroll::-webkit-scrollbar-thumb { background: ${o.headGlow}; }

      
      .sc-root .sc-padinfo { display: flex; flex-direction: column; gap: 2px; }
      
      .sc-root .sc-mouse { display: flex; flex-direction: column; gap: 4px; }
      .sc-root .sc-mouse .sc-cap--bar { margin: 0; }
      .sc-root .sc-mouserow { display: flex; align-items: center; gap: 12px; font-size: 20px; padding: 0 12px; }
      .sc-root .sc-mlabel { flex: 0 0 200px; }
      .sc-root .sc-mval { min-width: 2ch; text-align: center; font-size: 22px; }
      .sc-root .sc-btn:disabled { opacity: 0.4; cursor: default; }
      
      .sc-root .sc-table td.sc-slotcell { padding: 0; }
      .sc-root .sc-keyslot {
        display: block; width: 100%; box-sizing: border-box; text-align: left;
        font: inherit; color: inherit; background: transparent; border: 0;
        padding: 7px 14px; cursor: pointer; white-space: nowrap;
      }
      .sc-root .sc-keyslot:hover,
      .sc-root .sc-keyslot--capturing {
        background: ${o.rowActive}; color: ${o.bg};
      }
      
      .sc-root .sc-msg { min-height: 1.6em; font-size: 26px; }
      .sc-root .sc-msg:empty { display: none; }
      
      .sc-root .sc-table--keyconfig { font-size: 26px; }
      .sc-root .sc-table--keyconfig td.sc-dim { font-size: 22px; }
      
      
      .sc-root .sc-col--scroll:has(.sc-table--keyconfig) {
        scroll-snap-type: y mandatory; box-sizing: border-box;
      }
      .sc-root .sc-table--keyconfig tr { scroll-snap-align: start; }

      
      .sc-root .sc-footkey {
        font: 18px/1.4 ${o.fontStack}; color: ${o.text};
        background: transparent; border: 0; padding: 0;
        display: inline-flex; align-items: baseline; cursor: pointer;
      }
      .sc-root .sc-footkey:disabled { cursor: default; }
      .sc-root .sc-footkey:hover:not(:disabled) { color: ${o.accent}; }

      
      .sc-root .sc-cap--bar {
        background: ${o.capBar}; padding: 4px 12px; margin: 6px 0 2px;
      }
      .sc-root .sc-col > .sc-cap--bar:first-child { margin-top: 0; }

      
      .sc-root .sc-table--dense {
        font-size: 18px; border-spacing: 0 3px; line-height: 1.35;
      }
      .sc-root .sc-table--dense td { padding: 2px 12px; }
      .sc-root .sc-table--dense th { padding: 0 12px; font-size: 14px; }
      
      .sc-root .sc-sep { width: 1%; text-align: center; color: ${o.textDim}; }
      .sc-root .sc-ch { width: 1%; text-align: center; white-space: nowrap; }
      .sc-root .sc-table--dense .sc-bar { width: 88px; }

      
      .sc-root .sc-gauge {
        display: flex; align-items: center; gap: 10px;
        font-size: 18px; margin: 5px 0 5px 12px;
      }
      .sc-root .sc-gauge .sc-gk { width: 86px; flex: 0 0 86px; }
      .sc-root .sc-gauge .sc-bar { flex: 1; min-width: 60px; }
      .sc-root .sc-gauge .sc-num { flex: 0 0 auto; }

      
      .sc-root .sc-tools {
        display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
      }
      .sc-root .sc-tools .sc-gap { flex: 1; min-width: 8px; }
      
      .sc-root .sc-num {
        font-family: ${o.fontStackNum}; font-variant-numeric: tabular-nums;
        text-align: right; white-space: nowrap;
      }

      
      .sc-root .sc-slots {
        width: 100%; border-collapse: separate; border-spacing: 0 4px; font-size: 22px;
      }
      .sc-root .sc-slots td {
        height: 40px; padding: 0 14px; vertical-align: middle; background: ${o.rowIdle};
      }
      .sc-root .sc-slotk { width: 1%; white-space: nowrap; color: ${o.text}; }
      .sc-root .sc-slotname { text-align: left; }
      .sc-root .sc-slotmk {
        width: 1%; white-space: nowrap; text-align: right; color: ${o.textDim}; font-size: 18px;
      }
      .sc-root .sc-slotrow { cursor: pointer; }
      .sc-root .sc-slotrow:hover td,
      .sc-root .sc-slotrow--on td { background: ${o.rowActive}; color: ${o.bg}; }
      .sc-root .sc-slotrow:hover .sc-slotk,
      .sc-root .sc-slotrow:hover .sc-slotmk,
      .sc-root .sc-slotrow:hover .sc-live,
      .sc-root .sc-slotrow--on .sc-slotk,
      .sc-root .sc-slotrow--on .sc-slotmk,
      .sc-root .sc-slotrow--on .sc-live { color: ${o.bg}; }
      
      .sc-root .sc-slotrow--off { cursor: default; }
      .sc-root .sc-slotrow--off td { background: ${o.rowDark}; color: ${o.textDim}; }

      
      .sc-root .sc-cands {
        width: 100%; border-collapse: separate; border-spacing: 0 4px; font-size: 22px;
      }
      .sc-root .sc-cands td {
        height: 36px; line-height: 1.2; padding: 0 12px;
        vertical-align: middle; background: ${o.rowIdle};
      }
      .sc-root .sc-candrow { cursor: pointer; }
      .sc-root .sc-candrow:hover td { background: ${o.rowAlt}; }
      .sc-root .sc-candrow--on td { background: ${o.rowActive}; color: ${o.bg}; }
      .sc-root .sc-candrow--on .sc-live,
      .sc-root .sc-candrow--on .sc-eq,
      .sc-root .sc-candrow--on .sc-dim { color: ${o.bg}; }
      .sc-root .sc-eq {
        width: 1%; white-space: nowrap; color: ${o.accent}; font-size: 14px;
        font-family: ${o.fontStackNum};
      }

      
      .sc-root .sc-live { color: ${o.accent}; }

      
      .sc-root .sc-up { color: ${o.accent}; }
      .sc-root .sc-down { color: ${o.bad}; }
      
      .sc-root .sc-over { color: ${o.bad}; }
      .sc-root .sc-candrow--on .sc-up,
      .sc-root .sc-candrow--on .sc-down { color: ${o.bg}; }

      
      .sc-root .sc-bar {
        display: inline-block; vertical-align: middle;
        height: 10px; background: ${o.rowDark}; overflow: hidden;
      }
      .sc-root .sc-bar > i { display: block; height: 100%; background: ${o.headGlow}; }
      .sc-root .sc-bar--over > i { background: ${o.bad}; }

      
      .sc-root .sc-slotbtn {
        display: flex; align-items: center; gap: 14px; width: 100%;
        box-sizing: border-box; height: 40px; margin: 0 0 4px; padding: 0 14px;
        background: ${o.rowIdle}; color: ${o.text}; border: 0; cursor: pointer;
        font: 22px/1 ${o.fontStack}; text-align: left;
      }
      
      .sc-root .sc-slotbtn .sc-slotk { flex: 0 0 auto; width: auto; white-space: nowrap; }
      .sc-root .sc-slotbtn .sc-slotname {
        flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis;
        white-space: nowrap; text-align: left; color: ${o.textDim};
      }
      .sc-root .sc-slotbtn:hover,
      .sc-root .sc-slotbtn[aria-pressed="true"] { background: ${o.rowActive}; color: ${o.bg}; }
      .sc-root .sc-slotbtn:hover .sc-slotname,
      .sc-root .sc-slotbtn[aria-pressed="true"] .sc-slotname { color: ${o.bg}; }
      
      .sc-root .sc-slotbtn--off,
      .sc-root .sc-slotbtn:disabled {
        cursor: default; background: ${o.rowDark}; color: ${o.textDim};
      }
      .sc-root .sc-slotbtn--off:hover,
      .sc-root .sc-slotbtn:disabled:hover { background: ${o.rowDark}; color: ${o.textDim}; }

      .sc-root .sc-candbtn {
        display: flex; align-items: center; gap: 12px; width: 100%;
        box-sizing: border-box; height: 36px; line-height: 1.2;
        margin: 0 0 4px; padding: 0 12px;
        background: ${o.rowIdle}; color: ${o.text}; border: 0; cursor: pointer;
        font: 22px/1 ${o.fontStack}; text-align: left;
      }
      .sc-root .sc-candbtn .sc-candname {
        flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis;
        white-space: nowrap; text-align: left;
      }
      
      .sc-root .sc-candbtn .sc-eq { flex: 0 0 28px; width: 28px; text-align: left; }
      .sc-root .sc-candbtn:hover { background: ${o.rowAlt}; }
      .sc-root .sc-candbtn--on { background: ${o.rowActive}; color: ${o.bg}; }
      .sc-root .sc-candbtn--on .sc-live,
      .sc-root .sc-candbtn--on .sc-eq,
      .sc-root .sc-candbtn--on .sc-dim { color: ${o.bg}; }

      
      
      .sc-root .sc-scroll {
        overflow-y: auto; overflow-x: hidden; min-height: 0; flex: 1;
        scrollbar-gutter: stable;
      }
      
      .sc-root .sc-scroll--fit { flex: 0 1 auto; }
      .sc-root .sc-scroll::-webkit-scrollbar { width: 10px; }
      .sc-root .sc-scroll::-webkit-scrollbar-track { background: ${o.panelSub}; }
      .sc-root .sc-scroll::-webkit-scrollbar-thumb { background: ${o.headGlow}; }

      
      .sc-root .sc-btn {
        font: 18px/1.4 ${o.fontStack}; color: ${o.text};
        background: transparent; border: 1px solid ${o.textDim};
        padding: 6px 16px; cursor: pointer; white-space: nowrap;
      }
      .sc-root .sc-btn:hover { background: ${o.rowActive}; color: ${o.bg}; }
      
      .sc-root .sc-btn--main { color: ${o.accent}; border-color: ${o.accent}; font-weight: bold; }
      .sc-root .sc-btn--main:hover { background: ${o.accent}; color: ${o.bg}; }
      .sc-root .sc-btn--quiet { color: ${o.textDim}; }
      
      .sc-root .sc-mini { font-size: 14px; padding: 2px 8px; }
      
      .sc-root .sc-headbtns { display: flex; align-items: center; gap: 8px; margin-left: auto; }
      
      .sc-root .sc-capnote { margin: -4px 0 8px; line-height: 1.4; }
      
      .sc-root .sc-about { gap: 28px; padding-right: 12px; }
      .sc-root .sc-about-sec { max-width: 1400px; flex-shrink: 0; }
      .sc-root .sc-about-p { margin: 10px 0 0; font-size: 22px; line-height: 1.7; }
      .sc-root .sc-about-list { margin: 10px 0 0; padding-left: 28px; font-size: 22px; line-height: 1.7; }
      .sc-root .sc-about-list li { margin: 2px 0; }
      .sc-root .sc-about a { color: ${o.accent}; text-decoration: underline; }
      .sc-root .sc-about-ver { margin-top: 14px; }
      .sc-root .sc-about-vhead { font-size: 22px; line-height: 1.5; }
      .sc-root .sc-about-vhead b { color: ${o.accent}; font-family: ${o.fontStackNum}; }
      .sc-root .sc-about-details { margin-top: 10px; font-size: 22px; }
      .sc-root .sc-about-details summary { cursor: pointer; color: ${o.accent}; padding: 4px 0; }
      .sc-root .sc-about-pre {
        margin: 10px 0 0; padding: 16px 20px; background: ${o.panelSub};
        font-family: ${o.fontStackNum}; font-size: 18px; line-height: 1.5;
        white-space: pre-wrap; color: ${o.textDim};
      }
      .sc-root .sc-headbtns b {
        display: inline-block; color: ${o.accent}; font-weight: bold;
        border: 1px solid ${o.textDim}; border-radius: 4px;
        padding: 1px 7px; margin-left: 8px; font-family: ${o.fontStackNum};
      }
      
      .sc-root .sc-foot--debrief { flex-shrink: 0; align-items: center; gap: 16px; position: relative; z-index: 1; }
      .sc-root .sc-footbtn {
        display: flex; align-items: center; gap: 10px;
        padding: 12px 22px; font-size: 22px;
      }
      .sc-root .sc-foot--debrief .sc-btn--main { background: ${o.accent}; color: ${o.bg}; }
      .sc-root .sc-foot--debrief .sc-btn--main b { color: ${o.bg}; border-color: ${o.bg}; }

      
      .sc-root .sc-replayband {
        position: absolute; left: 0; right: 0; bottom: 0;
        display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
        padding: 12px 48px;
        background: ${o.bg};
        border-top: 1px solid ${o.accent};
      }
      .sc-root .sc-replaybtn {
        display: flex; align-items: center; gap: 8px;
        padding: 8px 16px; font-size: 18px; white-space: nowrap;
      }
      .sc-root .sc-replaybtn b {
        display: inline-block; color: ${o.accent}; font-weight: bold;
        border: 1px solid ${o.textDim}; border-radius: 4px;
        padding: 2px 9px; font-family: ${o.fontStackNum};
      }
      .sc-root .sc-replaybtn:disabled { opacity: 0.4; cursor: default; }
      .sc-root .sc-replaybtn:disabled:hover { background: transparent; color: ${o.text}; }
      .sc-root .sc-input, .sc-root .sc-select {
        font: 18px/1.4 ${o.fontStack}; color: ${o.text};
        background: ${o.panelSub}; border: 1px solid ${o.textDim};
        padding: 6px 10px;
      }
      .sc-root .sc-input::placeholder { color: ${o.textDim}; }
      .sc-root textarea.sc-input { resize: none; }

      
      .sc-root .sc-note {
        background: ${o.panelSub}; padding: 8px 14px; font-size: 18px;
        color: ${o.textDim}; min-height: 1.5em;
      }
      
      .sc-root .sc-note:empty { background: transparent; }
      
      .sc-root .sc-slotmk .sc-btn + .sc-btn { margin-left: 8px; }
      .sc-root .sc-note b { color: ${o.text}; font-weight: normal; }
      .sc-root .sc-note .sc-over { color: ${o.bad}; }

      

      
      .sc-root .pg-chart { display: block; max-width: 100%; }
      .sc-root .pg-plot { fill: ${o.rowDark}; opacity: 0.35; }
      .sc-root .pg-grid { stroke: ${o.textDim}; stroke-width: 1; opacity: 0.35; }
      .sc-root .pg-axis { stroke: ${o.textDim}; stroke-width: 1; }
      .sc-root .pg-tick {
        fill: ${o.textDim}; font: 14px ${o.fontStackNum};
      }
      
      .sc-root .pg-band { fill: ${o.accent}; opacity: 0.14; }

      
      .sc-root .pg-line { fill: none; stroke: ${o.text}; stroke-width: 2; }
      .sc-root .pg-line--1 { stroke-dasharray: 8 5; }
      .sc-root .pg-line--2 { stroke-dasharray: 2 5; }
      .sc-root .pg-line--3 { stroke-dasharray: 12 4 2 4; }
      .sc-root .pg-dot { fill: ${o.text}; stroke: none; }
      
      .sc-root .pg-dot--first {
        fill: ${o.bg}; stroke: ${o.accent}; stroke-width: 2;
      }
      
      .sc-root .pg-dot--practice { opacity: 0.45; }

      
      .sc-root .pg-sparkcell { width: 1%; padding: 0 8px; }
      .sc-root .pg-spark { fill: none; stroke: ${o.text}; stroke-width: 2; }
      .sc-root .pg-sparkbase { stroke: ${o.textDim}; stroke-width: 1; opacity: 0.4; }
      
      .sc-root .sc-mrow:hover .pg-spark,
      .sc-root .sc-mrow:hover .sc-live { stroke: ${o.bg}; color: ${o.bg}; }

      
      .sc-root .pg-cal { display: flex; flex-wrap: wrap; gap: 4px; margin: 4px 0 6px; }
      .sc-root .pg-cell {
        display: block; width: 22px; height: 22px;
        background: ${o.rowDark};
      }
      .sc-root .pg-cell--on { background: ${o.accent}; }

      
      .sc-root input[type="range"] { width: 100%; accent-color: ${o.accent}; margin: 8px 0; }

      
      .sc-root textarea.pg-io { width: 100%; box-sizing: border-box; font-size: 14px; }

      
      .sc-root[data-harness] .sc-page { clip-path: none; }
      .sc-root[data-harness],
      .sc-root[data-harness] * {
        transition: none !important;
        animation: none !important;
      }
`}export{l as R,p as a,x as e,d as m,g as r};
