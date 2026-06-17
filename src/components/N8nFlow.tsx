"use client";
import { useEffect, useState } from "react";

// Row 1: 0→1→2, then L-wrap down, Row 2: 3→4→5
const NODES = [
  { label: "Webhook",           sub: "POST /contacto",   type: "n8n",    trigger: true },
  { label: "Responder OK",      sub: "200: success",     type: "n8n" },
  { label: "Guardar en Sheets", sub: "append: contactos",type: "sheets" },
  { label: "Notificar Revcore", sub: "send: message",    type: "gmail" },
  { label: "Esperar 1 minuto",  sub: "wait: 60s",        type: "wait" },
  { label: "Confirmar al Lead", sub: "send: message",    type: "gmail" },
];

const STEP_MS   = 820;
const TOTAL_STEP= 1200;
const RESTART_MS= 2800;

function NodeIcon({ type }: { type: string }) {
  if (type === "n8n") return (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <circle cx="12" cy="5"  r="3.2" fill="#EA4B71"/>
      <circle cx="4.5" cy="18" r="3.2" fill="#EA4B71"/>
      <circle cx="19.5"cy="18" r="3.2" fill="#EA4B71"/>
      <line x1="12" y1="8"  x2="5.5"  y2="15.5" stroke="#EA4B71" strokeWidth="1.6"/>
      <line x1="12" y1="8"  x2="18.5" y2="15.5" stroke="#EA4B71" strokeWidth="1.6"/>
    </svg>
  );
  if (type === "sheets") return (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <rect x="3" y="2" width="15" height="19" rx="1.5" fill="#0F9D58"/>
      <rect x="3" y="2" width="7"  height="7"  fill="#27AE60" opacity=".8"/>
      <path d="M6 12h9M6 15.5h7M6 19h8" stroke="white" strokeWidth="1.3" opacity=".85"/>
    </svg>
  );
  if (type === "gmail") return (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path d="M3 6C3 4.9 3.9 4 5 4h14c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6z" fill="#1a1a1a"/>
      <path d="M3 4l9 8 9-8H3z" fill="#EA4335"/>
      <path d="M3 6L3 18M21 6L21 18" stroke="#C5221F" strokeWidth="1.5"/>
      <path d="M3 6l9 8 9-8" fill="none" stroke="#EA4335" strokeWidth="1.5"/>
    </svg>
  );
  if (type === "wait") return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
      <path d="M7 3h10M7 21h10" stroke="#A78BFA" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M7 3L12 9.5L17 3"  stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 21L12 14.5L17 21" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity=".6"/>
      <path d="M9.5 12h5" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" opacity=".4"/>
    </svg>
  );
  return null;
}

function N8nNode({ node, isActive, isDone }: {
  node: typeof NODES[0]; isActive: boolean; isDone: boolean;
}) {
  return (
    <div className={`nf-node${isActive ? " nf-active" : ""}${isDone ? " nf-done" : ""}`}>
      {node.trigger && (
        <div className="nf-trigger">
          <svg width="8" height="8" viewBox="0 0 24 24" fill="#D97706">
            <path d="M13 2L3 14h9l-1 8 10-12h-9z"/>
          </svg>
        </div>
      )}
      {/* input port */}
      <div className={`nf-port nf-port-in${isDone ? " nf-port-done" : ""}${isActive ? " nf-port-active" : ""}`}/>
      <div className="nf-sq">
        <NodeIcon type={node.type}/>
        {isActive && <span className="nf-sq-pulse"/>}
      </div>
      {/* output port */}
      <div className={`nf-port nf-port-out${isDone ? " nf-port-done" : ""}${isActive ? " nf-port-active" : ""}`}/>
      <div className="nf-label">
        <span className="nf-name">{node.label}</span>
        <span className="nf-sub">{node.sub}</span>
        {isDone   && <span className="nf-ok">✓ ok</span>}
        {isActive && <span className="nf-running"><span className="nf-dp"/><span className="nf-dp" style={{animationDelay:".2s"}}/><span className="nf-dp" style={{animationDelay:".4s"}}/></span>}
      </div>
    </div>
  );
}

// Horizontal connector between two nodes in the same row
function HConn({ active, done, label }: { active: boolean; done: boolean; label?: string }) {
  return (
    <div className={`nf-hconn${done ? " nf-hconn-done" : ""}`}>
      {label && <span className="nf-hconn-label">{label}</span>}
      <div className="nf-hconn-line"/>
      {active && <div className="nf-hconn-dot" key={String(active)}/>}
      <div className="nf-arrow">▶</div>
    </div>
  );
}

// L-connector: goes from bottom of node2 → down → start of row2
function LConn({ active, done }: { active: boolean; done: boolean }) {
  return (
    <div className={`nf-lconn${done ? " nf-lconn-done" : ""}`}>
      <div className="nf-lconn-line"/>
      {active && <div className="nf-lconn-dot" key={String(active)}/>}
    </div>
  );
}

export default function N8nFlow() {
  const [activeNode, setActiveNode] = useState(-1);
  const [doneNodes,  setDoneNodes]  = useState<number[]>([]);
  const [activeConn, setActiveConn] = useState(-1);
  const [allDone,    setAllDone]    = useState(false);

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    function add(fn: () => void, ms: number) {
      const t = setTimeout(() => { if (!cancelled) fn(); }, ms);
      timers.push(t);
    }
    function run() {
      if (cancelled) return;
      setActiveNode(-1); setDoneNodes([]); setActiveConn(-1); setAllDone(false);
      NODES.forEach((_, i) => {
        add(() => { setActiveNode(i); setActiveConn(-1); }, i * TOTAL_STEP);
        if (i < NODES.length - 1) {
          add(() => { setDoneNodes(p => [...p, i]); setActiveConn(i); }, i * TOTAL_STEP + STEP_MS);
        } else {
          add(() => {
            setDoneNodes(p => [...p, i]); setActiveNode(-1); setActiveConn(-1); setAllDone(true);
            add(run, RESTART_MS);
          }, i * TOTAL_STEP + STEP_MS);
        }
      });
    }
    add(run, 700);
    return () => { cancelled = true; timers.forEach(clearTimeout); };
  }, []);

  const dn = doneNodes;
  const an = activeNode;
  const ac = activeConn;

  return (
    <div className="nf-panel">
      <div className="term-chrome">
        <span className="term-dot term-dot-r"/>
        <span className="term-dot term-dot-y"/>
        <span className="term-dot term-dot-g"/>
        <span className="term-title">n8n · workflow ejecutando</span>
        <span className={`n8n-exec-badge${allDone ? " n8n-exec-success" : an >= 0 ? " n8n-exec-running" : ""}`}>
          {allDone ? "✓ success" : an >= 0 ? "● running" : "○ idle"}
        </span>
      </div>

      <div className="nf-canvas">
        {/* Row 1: nodes 0, 1, 2 */}
        <div className="nf-row">
          <N8nNode node={NODES[0]} isActive={an===0} isDone={dn.includes(0)}/>
          <HConn active={ac===0} done={dn.includes(0)} label="POST"/>
          <N8nNode node={NODES[1]} isActive={an===1} isDone={dn.includes(1)}/>
          <HConn active={ac===1} done={dn.includes(1)}/>
          <N8nNode node={NODES[2]} isActive={an===2} isDone={dn.includes(2)}/>
        </div>

        {/* L-connector: 2 → 3 */}
        <LConn active={ac===2} done={dn.includes(2)}/>

        {/* Row 2: nodes 3, 4, 5 */}
        <div className="nf-row">
          <N8nNode node={NODES[3]} isActive={an===3} isDone={dn.includes(3)}/>
          <HConn active={ac===3} done={dn.includes(3)}/>
          <N8nNode node={NODES[4]} isActive={an===4} isDone={dn.includes(4)}/>
          <HConn active={ac===4} done={dn.includes(4)}/>
          <N8nNode node={NODES[5]} isActive={an===5} isDone={dn.includes(5)}/>
        </div>
      </div>
    </div>
  );
}
