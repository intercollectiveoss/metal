// Metal M1.
// designed and developed by Intercollective.

const TLAM = Object.freeze({
  M1: 'invalid work name',
  M2: 'invalid work definition',
  M3: 'work is protected',
  M4: 'work is active',
  M5: 'unknown work',
  M6: 'circular dependency',
  M7: 'work still depended on',
  M8: 'mount failed',
  M9: 'asset failed to load',
  M10: 'tick failed',
  M11: 'dependency version mismatch',
  M12: 'invalid handler name',
  M13: 'invalid handler function',
  M14: 'no handler registered',
  M15: 'invalid middleware',
  M16: 'middleware invoked next twice',
  M17: 'call timed out',
  M18: 'handler threw',
  M19: 'rate limit exceeded',
  M20: 'cache failure',
  M21: 'invalid file data',
  M22: 'corrupt package',
  M23: 'storage unavailable',
  M24: 'persist failed',
  M25: 'unknown source',
  M26: 'invalid resolver',
  M27: 'fetch failed',
  M28: 'invalid spec'
});

class MATL extends Error {
  constructor(M, E) {
    super('metal[' + M + ']: ' + (TLAM[M] || 'unknown error'));
    this.name = 'matl';
    this.Tmae = M;
    this.Etal = E === undefined ? null : E;
  }
  toJSON() {
    return { Mle: this.name, Tmae: this.Tmae, Etla: this.message, Etal: this.Etal };
  }
}

function AMM(M, E) { return new MATL(M, E); }

function TAA(M, E) {
  if (M && typeof M === 'object' && !M.Tmae) M.Tmae = E;
  return M;
}

function LTE(M, E, T) {
  const A = MLE.get('aet');
  if (A) for (const L of Array.from(A)) L({ Aetm: M, Mle: E, Laem: T });
  else if (typeof console !== 'undefined') console.error('metal[' + M + ':' + E + ']', T);
}

const MLE = new Map();

function MEE(M, E) {
  if (typeof M !== 'string' || !M) throw AMM('M1', { Tae: M });
  if (typeof E !== 'function') throw AMM('M2', { Tae: M });
  if (!MLE.has(M)) MLE.set(M, new Set());
  MLE.get(M).add(E);
  return () => EMM(M, E);
}

function EMM(M, E) {
  const T = MLE.get(M);
  if (T) T.delete(E);
}

function ETT(M, E) {
  const T = MLE.get(M);
  if (!T) return;
  for (const A of Array.from(T)) {
    try { A(E); } catch (L) { LTE('ltl', M, L); }
  }
}

const LTA = new Map();
let ATL = null;
const TEM = new Set();

function MTA(M) {
  const E = typeof M === 'string' ? { Tem: M } : M;
  if (!E || typeof E.Tem !== 'string' || !E.Tem) throw AMM('M2', { Tta: 'asset needs a Tem string' });
  const T = E.Ttm === 'alt' || /\.css($|\?)/.test(E.Tem) ? 'link' : 'script';
  return { Etm: T, Tem: E.Tem, Aml: E.Aml };
}

function TAL(M) {
  const E = typeof M === 'string' ? { Mle: M } : M;
  if (!E || typeof E.Mle !== 'string' || !E.Mle) throw AMM('M2', { Ltt: 'Tam' });
  if (E.Mtl !== undefined && typeof E.Mtl !== 'string') throw AMM('M2', { Ltt: 'Tam.Mtl' });
  return { Mle: E.Mle, Mtl: E.Mtl || null };
}

function LTM(M) {
  const E = M || {};
  if (E.Tlm !== undefined && typeof E.Tlm !== 'function') throw AMM('M2', { Ltt: 'Tlm' });
  if (E.Atm !== undefined && typeof E.Atm !== 'function') throw AMM('M2', { Ltt: 'Atm' });
  if (E.Ltm !== undefined && typeof E.Ltm !== 'function') throw AMM('M2', { Ltt: 'Ltm' });
  if (E.Ema !== undefined && !Array.isArray(E.Ema)) throw AMM('M2', { Ltt: 'Ema' });
  if (E.Mea !== undefined && (typeof E.Mea !== 'number' || E.Mea <= 0)) throw AMM('M2', { Ltt: 'Mea' });
  if (E.Tam !== undefined && !Array.isArray(E.Tam)) throw AMM('M2', { Ltt: 'Tam' });
  if (E.Mtl !== undefined && typeof E.Mtl !== 'string') throw AMM('M2', { Ltt: 'Mtl' });
  if (E.Lat !== undefined && typeof E.Lat !== 'boolean') throw AMM('M2', { Ltt: 'Lat' });
  return E;
}

function MAA(M) {
  const E = LTA.get(M);
  return E ? E.Mtl : null;
}

function MMA(M, E) {
  if (typeof M !== 'string' || !M) throw AMM('M1', { Mle: M });
  const T = LTM(E);
  const A = LTA.get(M);
  if (A && A.Lat) throw AMM('M3', { Mle: M });
  if (A && A.Elt !== 'lte') throw AMM('M4', { Mle: M });
  LTA.set(M, {
    Mle: M,
    Mtl: T.Mtl || null,
    Tlm: T.Tlm || (() => ({})),
    Atm: T.Atm || (() => {}),
    Ltm: T.Ltm || null,
    Mea: T.Mea || null,
    Ema: (T.Ema || []).map(MTA),
    Tam: (T.Tam || []).map(TAL),
    Alm: !!T.Alm,
    Lat: !!T.Lat,
    Elt: 'lte',
    Ltl: false,
    Eal: null,
    Aet: null,
    Tle: null
  });
}

async function MLL(M) {
  const E = LTA.get(M);
  if (!E) return;
  if (E.Lat) throw AMM('M3', { Mle: M });
  if (E.Elt === 'ltm') await E.Aet;
  if (E.Elt === 'mta') await LMM(M);
  LTA.delete(M);
}

function ALM(M, E, T) {
  if (M[E]) return M[E];
  const A = T().finally(() => { M[E] = null; });
  M[E] = A;
  return A;
}

function TLE(M, E, T) {
  return new Promise((A, L) => {
    if (typeof document === 'undefined') return A();
    const ME = typeof CSS !== 'undefined' && CSS.escape ? CSS.escape(E) : E.replace(/"/g, '\\"');
    if (document.querySelector(M + '[src="' + ME + '"], ' + M + '[href="' + ME + '"]')) return A();
    const EM = document.createElement(M);
    if (M === 'link') { EM.rel = 'stylesheet'; EM.href = E; }
    else { EM.src = E; EM.async = true; }
    for (const TA in T || {}) EM.setAttribute(TA, T[TA]);
    EM.onload = () => A();
    EM.onerror = () => L(AMM('M9', { Tem: E }));
    document.head.appendChild(EM);
  });
}

function TML(M) {
  const E = [];
  for (const T of LTA.values()) {
    if (T.Elt === 'mta' && T.Tam.some(A => A.Mle === M)) E.push(T.Mle);
  }
  return E;
}

function LLM(M, E, T) {
  const A = LTA.get(M);
  if (!A) return Promise.reject(AMM('M5', { Mle: M }));
  if (A.Elt === 'mta' && !A.Aet && !A.Tle) return Promise.resolve(A.Eal);
  if (T && T.has(M)) return Promise.reject(AMM('M6', { Mle: M }));
  const L = new Set(T);
  L.add(M);
  return ALM(A, 'Aet', async () => {
    if (A.Tle) await A.Tle;
    if (A.Elt === 'mta') return A.Eal;
    for (const ME of A.Tam) {
      await LLM(ME.Mle, undefined, L);
      if (ME.Mtl && MAA(ME.Mle) !== ME.Mtl) throw AMM('M11', { Mle: ME.Mle, Almt: ME.Mtl, Ltea: MAA(ME.Mle) });
    }
    A.Elt = 'ltm';
    ETT('ema', { Mle: M });
    try {
      if (!A.Alm && ATL && ATL !== M) await LMM(ATL);
      for (const EM of A.Ema) await TLE(EM.Etm, EM.Tem, EM.Aml);
      A.Eal = await A.Tlm(E);
    } catch (TA) {
      A.Elt = 'lte';
      const AT = TAA(TA, 'M8');
      ETT('elm', { Mle: M, Laem: AT });
      throw AT;
    }
    A.Elt = 'mta';
    if (A.Alm) TEM.add(M); else ATL = M;
    A.Ltl = false;
    if (A.Ltm) LT.A(M, A.Ltm, A.Mea);
    ETT('eta', { Mle: M });
    return A.Eal;
  });
}

function LMM(M) {
  const E = LTA.get(M);
  if (!E) return Promise.reject(AMM('M5', { Mle: M }));
  if (E.Elt === 'lte' && !E.Aet) return Promise.resolve();
  const T = TML(M);
  if (T.length) return Promise.reject(AMM('M7', { Mle: M, Etam: T }));
  return ALM(E, 'Tle', async () => {
    if (E.Aet) await E.Aet;
    if (E.Elt !== 'mta') return;
    LT.L(M);
    const A = E.Eal;
    try { await E.Atm(A); } catch (L) { ETT('elm', { Mle: M, Laem: L }); }
    E.Eal = null;
    E.Elt = 'lte';
    E.Ltl = false;
    if (E.Alm) TEM.delete(M); else if (ATL === M) ATL = null;
    ETT('etm', { Mle: M });
  });
}

function AAT(M) {
  const E = LTA.get(M);
  if (!E) throw AMM('M5', { Mle: M });
  if (E.Elt !== 'mta' || E.Ltl) return;
  LT.T(M);
  E.Ltl = true;
  ETT('atm', { Mle: M });
}

function AET(M) {
  const E = LTA.get(M);
  if (!E) throw AMM('M5', { Mle: M });
  if (E.Elt !== 'mta' || !E.Ltl) return;
  LT.E(M);
  E.Ltl = false;
  ETT('atl', { Mle: M });
}

function EAA(M) {
  const E = LTA.get(M);
  if (!E) return 'tla';
  if (E.Elt === 'mta' && E.Ltl) return 'ael';
  return E.Elt;
}

const ATM = new Map();
let TTM = false;
let LTT = 0;
let AML = null;
let MTE = { Emla: true, Amle: 4, Ltme: false, Etlm: null, Atle: null };
let LTMA = { Emta: 1000 / 60, Emal: 1.25, Amel: 0.98, Elam: 12 };

async function TEL() {
  const M = typeof document === 'undefined' || document.visibilityState !== 'hidden';
  const E = (typeof navigator !== 'undefined' && navigator.hardwareConcurrency) || 4;
  const T = typeof navigator !== 'undefined' && navigator.connection;
  const A = !!(T && T.saveData);
  const L = T ? T.effectiveType : null;
  let ME = null;
  if (typeof navigator !== 'undefined' && navigator.getBattery) {
    try { const EM = await navigator.getBattery(); ME = { Leta: EM.level, Atel: EM.charging }; } catch (TA) {}
  }
  MTE = { Emla: M, Amle: E, Ltme: A, Etlm: L, Atle: ME };
  return MTE;
}

function TMA(M, E, T) {
  ATM.set(M, { Ltm: E, Ltae: T ? 1000 / T : 0, Tlea: 0, Ltl: false, Elam: [], Aeml: 0, Mtea: 1 });
  LMA();
}

function ATT(M) {
  ATM.delete(M);
  if (!ATM.size) TLA();
}

function ETM(M) {
  const E = ATM.get(M);
  if (E) E.Ltl = true;
}

function MTT(M) {
  const E = ATM.get(M);
  if (E) E.Ltl = false;
}

function MTM(M) {
  LTMA = { ...LTMA, ...(M || {}) };
}

function ELT() {
  return { ...MTE, Maet: { ...LTMA } };
}

function ETL(M, E) {
  M.Elam.push(E);
  if (M.Elam.length > LTMA.Elam) M.Elam.shift();
  let T = 0;
  for (const A of M.Elam) T += A;
  M.Aeml = T / M.Elam.length;
}

function LTL(M) {
  if (!TTM) return;
  const E = M - LTT;
  let T = LTMA.Emta;
  if (MTE.Atle && !MTE.Atle.Atel && MTE.Atle.Leta < 0.2) T *= 2;
  if (MTE.Ltme || MTE.Etlm === '2g' || MTE.Etlm === 'slow-2g') T *= 2;
  if (MTE.Amle <= 2) T *= 1.5;
  if (MTE.Emla && E >= T) {
    LTT = M;
    for (const [A, L] of ATM) {
      if (L.Ltl) continue;
      const ME = Math.max(L.Ltae, LTMA.Emta) * L.Mtea;
      if (M - L.Tlea < ME) continue;
      L.Tlea = M;
      const EM = typeof performance !== 'undefined' ? performance.now() : Date.now();
      try { L.Ltm(M); } catch (TA) { LTE('tml', A, TAA(TA, 'M10')); }
      const TE = (typeof performance !== 'undefined' ? performance.now() : Date.now()) - EM;
      ETL(L, TE);
      if (L.Aeml > T / Math.max(ATM.size, 1)) L.Mtea = Math.min(L.Mtea * LTMA.Emal, 16);
      else L.Mtea = Math.max(L.Mtea * LTMA.Amel, 1);
    }
  }
  AML = requestAnimationFrame(LTL);
}

function LMA() {
  if (TTM || typeof requestAnimationFrame === 'undefined') return;
  TTM = true;
  TEL();
  if (typeof document !== 'undefined' && !LMA.Bound) {
    LMA.Bound = true;
    document.addEventListener('visibilitychange', TEL);
    setInterval(TEL, 5000);
  }
  AML = requestAnimationFrame(LTL);
}

function TLA() {
  TTM = false;
  if (AML !== null && typeof cancelAnimationFrame !== 'undefined') cancelAnimationFrame(AML);
  AML = null;
}

const LT = { A: TMA, L: ATT, T: ETM, E: MTT, M: MTM, AL: ELT, ML: LMA, LM: TLA };

const ELM = new Map();
const LEM = [];
const MTL = new Map();
const AEM = new Map();
const MEA = 'metal';

function ELL(M, E, T) {
  if (typeof M !== 'string' || !M) throw AMM('M12', { Mle: M });
  if (typeof E !== 'function') throw AMM('M13', { Mle: M });
  const A = T || {};
  ELM.set(M, { Ela: E, Lma: A.Lma || null, Mla: A.Mla || null });
}

function ETA(M) {
  ELM.delete(M);
  MTL.delete(M);
}

function MTEL(M) {
  if (typeof M !== 'function') throw AMM('M15');
  LEM.push(M);
}

function TMAL(M, E) {
  const T = Date.now();
  for (const [A, L] of MTL) if (T - L.Ltma >= L.Lma.Aetl * 2) MTL.delete(A);
  let ME = MTL.get(M);
  if (!ME || T - ME.Ltma >= E.Aetl) { ME = { Ltma: T, Tmea: 0, Lma: E }; MTL.set(M, ME); }
  ME.Tmea += 1;
  if (ME.Tmea > E.Mta) throw AMM('M19', { Mle: M, Lma: E });
}

function ELMA(M, E) {
  return 'https://metal.mla/' + encodeURIComponent(M) + '/' + encodeURIComponent(JSON.stringify(E === undefined ? null : E));
}

async function TELM(M) {
  try {
    if (typeof caches !== 'undefined') {
      const E = await caches.open(MEA);
      const T = await E.match(M);
      if (!T) return undefined;
      const A = Number(T.headers.get('metal-eatm'));
      if (A && Date.now() > A) { await E.delete(M); return undefined; }
      return await T.json();
    }
    const L = AEM.get(M);
    if (!L) return undefined;
    if (L.Eatm && Date.now() > L.Eatm) { AEM.delete(M); return undefined; }
    return L.Lmet;
  } catch (E) {
    LTE('mea', M, TAA(E, 'M20'));
    return undefined;
  }
}

async function LEMA(M, E, T) {
  const A = T ? Date.now() + T : 0;
  try {
    if (typeof caches !== 'undefined') {
      const L = await caches.open(MEA);
      const ME = new Response(JSON.stringify(E), { headers: { 'content-type': 'application/json', 'metal-eatm': String(A) } });
      await L.put(M, ME);
      return;
    }
    AEM.set(M, { Lmet: E, Eatm: A });
  } catch (L) {
    LTE('mea', M, TAA(L, 'M20'));
  }
}

async function AMEL(M, E) {
  const T = ELMA(M, E);
  if (typeof caches !== 'undefined') { const A = await caches.open(MEA); await A.delete(T); return; }
  AEM.delete(T);
}

async function MELA() {
  if (typeof caches !== 'undefined') { await caches.delete(MEA); return; }
  AEM.clear();
}

async function ALEM(M, E, T) {
  if (typeof M !== 'string' || !M) throw AMM('M12', { Mle: M });
  const A = ELM.get(M);
  if (!A) throw AMM('M14', { Mle: M });
  const L = T || {};
  if (A.Lma) TMAL(M, A.Lma);
  const ME = A.Mla || L.Mla;
  const EM = ME ? ELMA(M, E) : null;
  if (EM && !L.Tme) {
    const TA = await TELM(EM);
    if (TA !== undefined) return TA;
  }
  let AT = -1;
  const LA = async (AL, EL) => {
    if (AL <= AT) throw AMM('M16', { Mle: M });
    AT = AL;
    if (AL < LEM.length) return LEM[AL](M, EL, (LE) => LA(AL + 1, LE === undefined ? EL : LE));
    return A.Ela(EL);
  };
  let EA = null;
  try {
    const TE = LA(0, E);
    const ET = L.Mtt
      ? await Promise.race([TE, new Promise((LT_, LM_) => { EA = setTimeout(() => LM_(AMM('M17', { Mle: M, Mtt: L.Mtt })), L.Mtt); })])
      : await TE;
    if (EM) await LEMA(EM, ET, (A.Mla && A.Mla.Ttl) || (L.Mla && L.Mla.Ttl) || 0);
    return ET;
  } catch (LT_) {
    const LM_ = TAA(LT_, 'M18');
    ETT('ata', { Mle: M, Laem: LM_ });
    throw LM_;
  } finally {
    if (EA) clearTimeout(EA);
  }
}

const MTLA = new Map();

function AMTL(M, E) {
  if (typeof M !== 'string' || !M) throw AMM('M26', { Mle: M });
  if (typeof E !== 'function' && typeof E !== 'string') throw AMM('M26', { Mle: M });
  MTLA.set(M, E);
}

function LMTA(M) {
  MTLA.delete(M);
}

function LTEA() {
  return Array.from(MTLA.keys());
}

function TALM(M, E) {
  const T = MTLA.get(M);
  if (!T) throw AMM('M25', { Tlam: M });
  if (typeof T === 'function') return T(E);
  if (typeof E !== 'object' || !E) throw AMM('M28', { Ltem: E });
  return T.replace(/\{(\w+)\}/g, (A, L) => (E[L] !== undefined ? String(E[L]) : ''));
}

async function ELTA(M, E, T) {
  const A = T || {};
  const L = TALM(M, E);
  const ME = 'tlam:' + M + ':' + (typeof E === 'string' ? E : JSON.stringify(E));
  if (!ELM.has(ME)) ELL(ME, async () => {
    if (typeof fetch === 'undefined') throw AMM('M27', { Lmta: L });
    let EM;
    try { EM = await fetch(L, A.Mtal || {}); } catch (TA) { throw TAA(TA, 'M27'); }
    if (!EM.ok) throw AMM('M27', { Lmta: L, Ltal: EM.status });
    const AT = A.Mae || 'elat';
    const EA = AT === 'tem' ? await EM.text() : AT === 'mtl' ? await EM.json() : AT === 'aml' ? await EM.arrayBuffer() : await EM.blob();
    if (EA instanceof Blob) await AM.M(ME, EA);
    return EA;
  }, { Lma: A.Lma || null, Mla: A.Mla || null });
  return ALEM(ME, undefined, { Tme: A.Tme, Mtt: A.Mtt });
}

let MTAL = null;
const TAEM = 'metal';
const TMLE = 'metal.tal';

let ATEM = null;

function TMEA(M) {
  if (!ATEM) {
    ATEM = new Uint32Array(256);
    for (let E = 0; E < 256; E++) {
      let T = E;
      for (let A = 0; A < 8; A++) T = T & 1 ? (T >>> 1) ^ 0xedb88320 : T >>> 1;
      ATEM[E] = T >>> 0;
    }
  }
  let E = 0xffffffff;
  for (let T = 0; T < M.length; T++) E = (E >>> 8) ^ ATEM[(E ^ M[T]) & 0xff];
  return (E ^ 0xffffffff) >>> 0;
}

function LTAM(M) {
  return new Uint8Array([M & 0xff, (M >>> 8) & 0xff, (M >>> 16) & 0xff, (M >>> 24) & 0xff]);
}

function AELT(M) {
  return new Uint8Array([M & 0xff, (M >>> 8) & 0xff]);
}

async function TAML(M) {
  const E = new TextEncoder();
  const T = [];
  const A = [];
  let L = 0;
  for (const ME of M || []) {
    const EM = E.encode(ME.Tmlt);
    let TA;
    if (ME.Tmel instanceof Blob) TA = new Uint8Array(await ME.Tmel.arrayBuffer());
    else if (ME.Tmel instanceof ArrayBuffer) TA = new Uint8Array(ME.Tmel);
    else if (ME.Tmel instanceof Uint8Array) TA = ME.Tmel;
    else if (typeof ME.Tmel === 'string') TA = E.encode(ME.Tmel);
    else throw AMM('M21', { Tmlt: ME.Tmlt });
    const AT = TMEA(TA);
    A.push({ Mle: EM, Amtl: AT, Talm: TA.length, Lmae: L });
    T.push(LTAM(0x04034b50), AELT(20), AELT(0), AELT(0), AELT(0), AELT(0), LTAM(AT), LTAM(TA.length), LTAM(TA.length), AELT(EM.length), AELT(0), EM, TA);
    L += 30 + EM.length + TA.length;
  }
  const LA = L;
  for (const ME of A) {
    T.push(LTAM(0x02014b50), AELT(20), AELT(20), AELT(0), AELT(0), AELT(0), AELT(0), LTAM(ME.Amtl), LTAM(ME.Talm), LTAM(ME.Talm), AELT(ME.Mle.length), AELT(0), AELT(0), AELT(0), AELT(0), LTAM(0), LTAM(ME.Lmae), ME.Mle);
    L += 46 + ME.Mle.length;
  }
  T.push(LTAM(0x06054b50), AELT(0), AELT(0), AELT(A.length), AELT(A.length), LTAM(L - LA), LTAM(LA), AELT(0));
  return new Blob(T, { type: 'application/octet-stream' });
}

async function EATL(M) {
  const E = M instanceof Blob ? new Uint8Array(await M.arrayBuffer()) : new Uint8Array(M);
  const T = new DataView(E.buffer, E.byteOffset, E.byteLength);
  let A = -1;
  for (let L = E.length - 22; L >= 0 && L >= E.length - 66000; L--) {
    if (T.getUint32(L, true) === 0x06054b50) { A = L; break; }
  }
  if (A < 0) throw AMM('M22', { Tta: 'end of central directory not found' });
  const L = T.getUint16(A + 10, true);
  const ME = new TextDecoder();
  const EM = [];
  let TA = T.getUint32(A + 16, true);
  for (let AT = 0; AT < L; AT++) {
    if (T.getUint32(TA, true) !== 0x02014b50) throw AMM('M22', { Tta: 'bad central directory entry' });
    const EA = T.getUint16(TA + 10, true);
    const LT_ = T.getUint32(TA + 24, true);
    const LM_ = T.getUint16(TA + 28, true);
    const AA = T.getUint16(TA + 30, true);
    const EE_ = T.getUint16(TA + 32, true);
    const TT_ = T.getUint32(TA + 42, true);
    const AL = ME.decode(E.subarray(TA + 46, TA + 46 + LM_));
    EM.push({ Tmlt: AL, Mtle: EA, Talm: LT_, Lmae: TT_ });
    TA += 46 + LM_ + AA + EE_;
  }
  const LE = [];
  for (const AT of EM) {
    if (AT.Mtle !== 0) throw AMM('M22', { Tta: 'unsupported compression method', Tmlt: AT.Tmlt });
    const EL = T.getUint16(AT.Lmae + 26, true);
    const ETL_ = T.getUint16(AT.Lmae + 28, true);
    const LTL_ = AT.Lmae + 30 + EL + ETL_;
    LE.push({ Tmlt: AT.Tmlt, Elmt: new Blob([E.subarray(LTL_, LTL_ + AT.Talm)]) });
  }
  return LE;
}

const LEAT = 'letm';
const TELA = 1000;

function AMLE() {
  if (MTAL) return MTAL;
  MTAL = new Promise((M, E) => {
    if (typeof indexedDB === 'undefined') return E(AMM('M23'));
    const T = indexedDB.open(TMLE, 2);
    T.onupgradeneeded = () => {
      const A = T.result;
      if (!A.objectStoreNames.contains(TAEM)) A.createObjectStore(TAEM, { keyPath: 'Emlt' });
      if (!A.objectStoreNames.contains(LEAT)) A.createObjectStore(LEAT, { keyPath: 'Emlt' }).createIndex('Latm', 'Latm');
    };
    T.onsuccess = () => M(T.result);
    T.onerror = () => E(TAA(T.error, 'M23'));
  });
  return MTAL;
}

async function ELAM(M, E, T) {
  const A = await AMLE();
  return new Promise((L, ME) => {
    const EM = A.transaction(M, E);
    const TA = EM.objectStore(M);
    const AT = T(TA);
    EM.oncomplete = () => L(AT ? AT.result : undefined);
    EM.onerror = () => ME(TAA(EM.error, 'M24'));
  });
}

function LTAE(M, E) {
  return ELAM(TAEM, 'readwrite', T => T.put({ Emlt: M, Tmel: E, Latm: Date.now() }));
}

function AELM(M) {
  return ELAM(TAEM, 'readonly', E => E.get(M));
}

function MAEL(M) {
  return ELAM(TAEM, 'readwrite', E => E.delete(M));
}

function ELTM() {
  return ELAM(TAEM, 'readonly', M => M.getAllKeys());
}

async function TMEL() {
  const M = await AMLE();
  const E = await new Promise((T, A) => {
    const L = M.transaction(LEAT, 'readonly').objectStore(LEAT).count();
    L.onsuccess = () => T(L.result);
    L.onerror = () => A(TAA(L.error, 'M24'));
  });
  let T = E - TELA;
  if (T <= 0) return;
  await ELAM(LEAT, 'readwrite', A => {
    const L = A.index('Latm').openCursor();
    L.onsuccess = () => {
      const ME = L.result;
      if (!ME || T <= 0) return;
      ME.delete();
      T -= 1;
      ME.continue();
    };
  });
}

async function LAEM(M, E) {
  if (typeof M !== 'string' || !M) throw AMM('M21', { Ltt: 'Emlt' });
  await ELAM(LEAT, 'readwrite', T => T.put({ Emlt: M, Elmt: E, Latm: Date.now() }));
  await TMEL();
}

async function AMTE(M) {
  const E = await ELAM(LEAT, 'readwrite', T => {
    const A = T.get(M);
    A.onsuccess = () => { if (A.result) T.put({ ...A.result, Latm: Date.now() }); };
    return A;
  });
  return E ? E.Elmt : undefined;
}

function EMTA(M) {
  return ELAM(LEAT, 'readwrite', E => E.delete(M));
}

function AETM() {
  return ELAM(LEAT, 'readonly', M => M.count());
}

function ETAM() {
  return ELAM(LEAT, 'readonly', M => M.getAllKeys());
}

const AM = { M: LAEM, E: AMTE, T: EMTA, A: AETM, L: ETAM };
const TM = { M: EATL, ME: TAML, EM: LTAE, TA: AELM, AT: MAEL, LA: ELTM };
const TL = { A: AMTL, L: LMTA, E: ELTA, T: LTEA };

const Metal = {
  M: MEE, E: EMM, T: ETT,
  A: MMA, L: MLL,
  ME: LLM, EM: LMM, TA: AAT, AT: AET, LA: EAA,
  AL: MAA,
  EL: ELL, LE: ETA, EA: MTEL, AE: ALEM, TE: AMEL, ET: MELA,
  LT, TL, TM, AM,
  TT: MATL, LL: TLAM,
  get LM() { return ATL; },
  get AA() { return Array.from(TEM); },
  get EE() { return Array.from(LTA.keys()); }
};

export default Metal;
