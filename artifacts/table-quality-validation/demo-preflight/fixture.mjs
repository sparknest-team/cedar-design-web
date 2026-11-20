// \0rolldown/runtime.js
var e = Object.defineProperty, t = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
};
// node_modules/.pnpm/@vue+shared@3.5.45/node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function n(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var r = {}, i = [], a = () => {}, o = () => !1, s = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), c = (e) => e.startsWith("onUpdate:"), l = Object.assign, u = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, d = Object.prototype.hasOwnProperty, f = (e, t) => d.call(e, t), p = Array.isArray, m = (e) => w(e) === "[object Map]", h = (e) => w(e) === "[object Set]", g = (e) => w(e) === "[object Date]", _ = (e) => w(e) === "[object RegExp]", v = (e) => typeof e == "function", y = (e) => typeof e == "string", b = (e) => typeof e == "symbol", x = (e) => typeof e == "object" && !!e, S = (e) => (x(e) || v(e)) && v(e.then) && v(e.catch), C = Object.prototype.toString, w = (e) => C.call(e), T = (e) => w(e).slice(8, -1), E = (e) => w(e) === "[object Object]", D = (e) => y(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ee = /* @__PURE__ */ n(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), te = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ne = /-\w/g, O = /* @__PURE__ */ te((e) => e.replace(ne, (e) => e.slice(1).toUpperCase())), re = /\B([A-Z])/g, k = /* @__PURE__ */ te((e) => e.replace(re, "-$1").toLowerCase()), A = /* @__PURE__ */ te((e) => e.charAt(0).toUpperCase() + e.slice(1)), j = /* @__PURE__ */ te((e) => e ? `on${A(e)}` : ""), M = (e, t) => !Object.is(e, t), ie = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, ae = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, oe = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, se = (e) => {
	let t = y(e) ? Number(e) : NaN;
	return isNaN(t) ? e : t;
}, ce, le = () => ce ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}, ue = /* @__PURE__ */ n("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol");
function N(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = y(r) ? me(r) : N(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (y(e) || x(e)) return e;
}
var de = /;(?![^(]*\))/g, fe = /:([^]+)/, pe = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function me(e) {
	let t = {};
	return e.replace(pe, (e) => e.startsWith("/*") ? "" : e).split(de).forEach((e) => {
		if (e) {
			let n = e.split(fe);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function P(e) {
	let t = "";
	if (y(e)) t = e;
	else if (p(e)) for (let n = 0; n < e.length; n++) {
		let r = P(e[n]);
		r && (t += r + " ");
	}
	else if (x(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
function he(e) {
	if (!e) return null;
	let { class: t, style: n } = e;
	return t && !y(t) && (e.class = P(t)), n && (e.style = N(n)), e;
}
var ge = /* @__PURE__ */ n("itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly");
function _e(e) {
	return !!e || e === "";
}
function ve(e, t, n) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let i = 0; r && i < e.length; i++) r = Se(e[i], t[i], n);
	return r;
}
function ye(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && Se(t, r[a], n)) {
			e = a;
			break;
		}
		if (e < 0) return !1;
		i[e] = 1;
	}
	return !0;
}
function be(e, t, n) {
	let r = m(e), i = m(t);
	if (r || i || (r = h(e), i = h(t), r || i)) return r && i ? ye(e, t, n) : !1;
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let r in e) {
		let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
		if (i && !a || !i && a || !Se(e[r], t[r], n)) return !1;
	}
	return String(e) === String(t);
}
function xe(e, t, n, r) {
	n ||= [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
	let [i, a] = n;
	if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
	i.set(e, t), a.set(t, e);
	let o = r(e, t, n);
	return i.delete(e), a.delete(t), o;
}
function Se(e, t, n) {
	if (e === t) return !0;
	let r = g(e), i = g(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = b(e), i = b(t), r || i ? e === t : (r = p(e), i = p(t), r || i ? r && i ? xe(e, t, n, ve) : !1 : (r = x(e), i = x(t), r || i ? !r || !i ? !1 : xe(e, t, n, be) : String(e) === String(t))));
}
function Ce(e, t) {
	return e.findIndex((e) => Se(e, t));
}
var we = (e) => !!(e && e.__v_isRef === !0), F = (e) => y(e) ? e : e == null ? "" : p(e) || x(e) && (e.toString === C || !v(e.toString)) ? we(e) ? F(e.value) : JSON.stringify(e, Te, 2) : String(e), Te = (e, t) => we(t) ? Te(e, t.value) : m(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Ee(t, r) + " =>"] = n, e), {}) } : h(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ee(e)) } : b(t) ? Ee(t) : x(t) && !p(t) && !E(t) ? String(t) : t, Ee = (e, t = "") => b(e) ? `Symbol(${e.description ?? t})` : e;
function De(e) {
	return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
// node_modules/.pnpm/@vue+reactivity@3.5.45/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var Oe, ke = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && Oe && (Oe.active ? (this.parent = Oe, this.index = (Oe.scopes || (Oe.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].pause();
			}
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].resume();
			}
			let n = this.effects.slice();
			for (e = 0, t = n.length; e < t; e++) n[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = Oe;
			try {
				return Oe = this, e();
			} finally {
				Oe = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = Oe, Oe = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (Oe === this) Oe = this.prevScope;
			else {
				let e = Oe;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				let e = this.scopes.slice();
				for (t = 0, n = e.length; t < n; t++) e[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function Ae(e) {
	return new ke(e);
}
function je() {
	return Oe;
}
function Me(e, t = !1) {
	Oe && (Oe.active ? Oe.cleanups.push(e) : e());
}
var Ne, Pe = /* @__PURE__ */ new WeakSet(), Fe = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Oe && (Oe.active ? Oe.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Pe.has(this) && (Pe.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ze(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, et(this), He(this);
		let e = Ne, t = Xe;
		Ne = this, Xe = !0;
		try {
			return this.fn();
		} finally {
			Ue(this), Ne = e, Xe = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Ke(e);
			this.deps = this.depsTail = void 0, et(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Pe.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		We(this) && this.run();
	}
	get dirty() {
		return We(this);
	}
}, Ie = 0, Le, Re;
function ze(e, t = !1) {
	e.flags |= 8, t ? (e.next = Re, Re = e) : (e.next = Le, Le = e);
}
function Be() {
	Ie++;
}
function Ve() {
	if (--Ie > 0) return;
	if (Re) {
		let e = Re;
		for (Re = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Le;) {
		let t = Le;
		for (Le = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e ||= t;
			}
			t = n;
		}
	}
	if (e) throw e;
}
function He(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ue(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Ke(r), qe(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function We(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ge(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Ge(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === tt) || (e.globalVersion = tt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !We(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = Ne, r = Xe;
	Ne = e, Xe = !0;
	try {
		He(e);
		let n = e.fn(e._value);
		(t.version === 0 || M(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		Ne = n, Xe = r, Ue(e), e.flags &= -3;
	}
}
function Ke(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Ke(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function qe(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
function Je(e, t) {
	e.effect instanceof Fe && (e = e.effect.fn);
	let n = new Fe(e);
	t && l(n, t);
	try {
		n.run();
	} catch (e) {
		throw n.stop(), e;
	}
	let r = n.run.bind(n);
	return r.effect = n, r;
}
function Ye(e) {
	e.effect.stop();
}
var Xe = !0, Ze = [];
function Qe() {
	Ze.push(Xe), Xe = !1;
}
function $e() {
	let e = Ze.pop();
	Xe = e === void 0 || e;
}
function et(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = Ne;
		Ne = void 0;
		try {
			t();
		} finally {
			Ne = e;
		}
	}
}
var tt = 0, nt = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, rt = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!Ne || !Xe || Ne === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== Ne) t = this.activeLink = new nt(Ne, this), Ne.deps ? (t.prevDep = Ne.depsTail, Ne.depsTail.nextDep = t, Ne.depsTail = t) : Ne.deps = Ne.depsTail = t, it(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = Ne.depsTail, t.nextDep = void 0, Ne.depsTail.nextDep = t, Ne.depsTail = t, Ne.deps === t && (Ne.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, tt++, this.notify(e);
	}
	notify(e) {
		Be();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Ve();
		}
	}
};
function it(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) it(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var at = /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ Symbol(""), st = /* @__PURE__ */ Symbol(""), ct = /* @__PURE__ */ Symbol("");
function lt(e, t, n) {
	if (Xe && Ne) {
		let t = at.get(e);
		t || at.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new rt()), r.map = t, r.key = n), r.track();
	}
}
function ut(e, t, n, r, i, a) {
	let o = at.get(e);
	if (!o) {
		tt++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Be(), t === "clear") o.forEach(s);
	else {
		let i = p(e), a = i && D(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === ct || !b(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(ct)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(ot)), m(e) && s(o.get(st)));
				break;
			case "delete":
				i || (s(o.get(ot)), m(e) && s(o.get(st)));
				break;
			case "set": m(e) && s(o.get(ot));
		}
	}
	Ve();
}
function dt(e, t) {
	let n = at.get(e);
	return n && n.get(t);
}
function ft(e) {
	let t = /* @__PURE__ */ rn(e);
	return t === e || (lt(t, "iterate", ct), /* @__PURE__ */ tn(e)) ? t : /* @__PURE__ */ en(e) ? /* @__PURE__ */ $t(e) ? t.map((e) => sn(on(e))) : t.map(sn) : t.map(on);
}
function pt(e) {
	return lt(e = /* @__PURE__ */ rn(e), "iterate", ct), e;
}
function mt(e, t) {
	return /* @__PURE__ */ en(e) ? sn(/* @__PURE__ */ $t(e) ? on(t) : t) : on(t);
}
var ht = {
	__proto__: null,
	[Symbol.iterator]() {
		return gt(this, Symbol.iterator, (e) => mt(this, e));
	},
	concat(...e) {
		return ft(this).concat(...e.map((e) => p(e) ? ft(e) : e));
	},
	entries() {
		return gt(this, "entries", (e) => (e[1] = mt(this, e[1]), e));
	},
	every(e, t) {
		return yt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return yt(this, "filter", e, t, (e) => e.map((e) => mt(this, e)), arguments);
	},
	find(e, t) {
		return yt(this, "find", e, t, (e) => mt(this, e), arguments);
	},
	findIndex(e, t) {
		return yt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return yt(this, "findLast", e, t, (e) => mt(this, e), arguments);
	},
	findLastIndex(e, t) {
		return yt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return yt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return xt(this, "includes", e);
	},
	indexOf(...e) {
		return xt(this, "indexOf", e);
	},
	join(e) {
		return ft(this).join(e);
	},
	lastIndexOf(...e) {
		return xt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return yt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return St(this, "pop");
	},
	push(...e) {
		return St(this, "push", e);
	},
	reduce(e, ...t) {
		return bt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return bt(this, "reduceRight", e, t);
	},
	shift() {
		return St(this, "shift");
	},
	some(e, t) {
		return yt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return St(this, "splice", e);
	},
	toReversed() {
		return ft(this).toReversed();
	},
	toSorted(e) {
		return ft(this).toSorted(e);
	},
	toSpliced(...e) {
		return ft(this).toSpliced(...e);
	},
	unshift(...e) {
		return St(this, "unshift", e);
	},
	values() {
		return gt(this, "values", (e) => mt(this, e));
	}
};
function gt(e, t, n) {
	let r = pt(e), i = r[t], a = i.call(r);
	if (r !== e && !/* @__PURE__ */ tn(e)) {
		if (a[Symbol.toStringTag] === "Array Iterator") {
			let e = Object.create(Object.getPrototypeOf(a));
			return e.next = () => _t(a.next(), n), i !== vt[t] && Object.defineProperties(e, {
				return: { get() {
					let e = a.return;
					return typeof e == "function" ? e.bind(a) : e;
				} },
				throw: { get() {
					let e = a.throw;
					return typeof e == "function" ? e.bind(a) : e;
				} }
			}), e;
		}
		a._next = a.next, a.next = () => _t(a._next(), n);
	}
	return a;
}
function _t(e, t) {
	return e.done || (e.value = t(e.value)), e;
}
var vt = Array.prototype;
function yt(e, t, n, r, i, a) {
	let o = pt(e), s = o !== e && !/* @__PURE__ */ tn(e), c = o[t];
	if (c !== vt[t]) {
		let t = c.apply(e, a);
		return s ? on(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, mt(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function bt(e, t, n, r) {
	let i = pt(e), a = i !== e && !/* @__PURE__ */ tn(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = mt(e, t)), n.call(this, t, mt(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? mt(e, c) : c;
}
function xt(e, t, n) {
	let r = /* @__PURE__ */ rn(e);
	lt(r, "iterate", ct);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ nn(n[0]) ? (n[0] = /* @__PURE__ */ rn(n[0]), r[t](...n)) : i;
}
function St(e, t, n = []) {
	Qe(), Be();
	let r = (/* @__PURE__ */ rn(e))[t].apply(e, n);
	return Ve(), $e(), r;
}
var Ct = /* @__PURE__ */ n("__proto__,__v_isRef,__isVue"), wt = /* @__PURE__ */ new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(b));
function Tt(e) {
	b(e) || (e = String(e));
	let t = /* @__PURE__ */ rn(this);
	return lt(t, "has", e), t.hasOwnProperty(e);
}
var Et = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Kt : Gt : i ? Wt : Ut).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = p(e);
		if (!r) {
			let e;
			if (a && (e = ht[t])) return e;
			if (t === "hasOwnProperty") return Tt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ cn(e) ? e : n);
		if ((b(t) ? wt.has(t) : Ct(t)) || (r || lt(e, "get", t), i)) return o;
		if (/* @__PURE__ */ cn(o)) {
			let e = a && D(t) ? o : o.value;
			return r && x(e) ? /* @__PURE__ */ Xt(e) : e;
		}
		return x(o) ? r ? /* @__PURE__ */ Xt(o) : /* @__PURE__ */ Jt(o) : o;
	}
}, Dt = class extends Et {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = p(e) && D(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ en(i);
			if (!/* @__PURE__ */ tn(n) && !/* @__PURE__ */ en(n) && (i = /* @__PURE__ */ rn(i), n = /* @__PURE__ */ rn(n)), !a && /* @__PURE__ */ cn(i) && !/* @__PURE__ */ cn(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : f(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ cn(e) ? e : r);
		return e === /* @__PURE__ */ rn(r) && s && (o ? M(n, i) && ut(e, "set", t, n, i) : ut(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = f(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && ut(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return b(t) && wt.has(t) || lt(e, "has", t), n;
	}
	ownKeys(e) {
		return lt(e, "iterate", p(e) ? "length" : ot), Reflect.ownKeys(e);
	}
}, Ot = class extends Et {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, kt = /* @__PURE__ */ new Dt(), At = /* @__PURE__ */ new Ot(), jt = /* @__PURE__ */ new Dt(!0), Mt = /* @__PURE__ */ new Ot(!0), Nt = (e) => e, Pt = (e) => Reflect.getPrototypeOf(e);
function Ft(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ rn(i), o = m(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, u = i[e](...r), d = n ? Nt : t ? sn : on;
		return !t && lt(a, "iterate", c ? st : ot), l(Object.create(u), { next() {
			let { value: e, done: t } = u.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: s ? [d(e[0]), d(e[1])] : d(e),
				done: t
			};
		} });
	};
}
function It(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Lt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ rn(r), a = /* @__PURE__ */ rn(n);
			e || (M(n, a) && lt(i, "get", n), lt(i, "get", a));
			let { has: o } = Pt(i), s = t ? Nt : e ? sn : on;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && lt(/* @__PURE__ */ rn(t), "iterate", ot), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ rn(n), i = /* @__PURE__ */ rn(t);
			return e || (M(t, i) && lt(r, "has", t), lt(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ rn(a), s = t ? Nt : e ? sn : on;
			return !e && lt(o, "iterate", ot), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return l(n, e ? {
		add: It("add"),
		set: It("set"),
		delete: It("delete"),
		clear: It("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ rn(this), r = Pt(n), i = /* @__PURE__ */ rn(e), a = !t && !/* @__PURE__ */ tn(e) && !/* @__PURE__ */ en(e) ? i : e;
			return r.has.call(n, a) || M(e, a) && r.has.call(n, e) || M(i, a) && r.has.call(n, i) || (n.add(a), ut(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ tn(n) || /* @__PURE__ */ en(n) || (n = /* @__PURE__ */ rn(n));
			let r = /* @__PURE__ */ rn(this), { has: i, get: a } = Pt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ rn(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? M(n, s) && ut(r, "set", e, n, s) : ut(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ rn(this), { has: n, get: r } = Pt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ rn(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && ut(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ rn(this), t = e.size !== 0, n = e.clear();
			return t && ut(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Ft(r, e, t);
	}), n;
}
function Rt(e, t) {
	let n = Lt(e, t);
	return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(f(n, i) && i in r ? n : r, i, a);
}
var zt = { get: /* @__PURE__ */ Rt(!1, !1) }, Bt = { get: /* @__PURE__ */ Rt(!1, !0) }, Vt = { get: /* @__PURE__ */ Rt(!0, !1) }, Ht = { get: /* @__PURE__ */ Rt(!0, !0) }, Ut = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap(), Gt = /* @__PURE__ */ new WeakMap(), Kt = /* @__PURE__ */ new WeakMap();
function qt(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
	return /* @__PURE__ */ en(e) ? e : Qt(e, !1, kt, zt, Ut);
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
	return Qt(e, !1, jt, Bt, Wt);
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
	return Qt(e, !0, At, Vt, Gt);
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
	return Qt(e, !0, Mt, Ht, Kt);
}
function Qt(e, t, n, r, i) {
	if (!x(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = qt(T(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
	return /* @__PURE__ */ en(e) ? /* @__PURE__ */ $t(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function en(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function tn(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function nn(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function rn(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ rn(t) : e;
}
function an(e) {
	return !f(e, "__v_skip") && Object.isExtensible(e) && ae(e, "__v_skip", !0), e;
}
var on = (e) => x(e) ? /* @__PURE__ */ Jt(e) : e, sn = (e) => x(e) ? /* @__PURE__ */ Xt(e) : e;
// @__NO_SIDE_EFFECTS__
function cn(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function I(e) {
	return un(e, !1);
}
// @__NO_SIDE_EFFECTS__
function ln(e) {
	return un(e, !0);
}
function un(e, t) {
	return /* @__PURE__ */ cn(e) ? e : new dn(e, t);
}
var dn = class {
	constructor(e, t) {
		this.dep = new rt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ rn(e), this._value = t ? e : on(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ tn(e) || /* @__PURE__ */ en(e);
		e = n ? e : /* @__PURE__ */ rn(e), M(e, t) && (this._rawValue = e, this._value = n ? e : on(e), this.dep.trigger());
	}
};
function fn(e) {
	e.dep && e.dep.trigger();
}
function L(e) {
	return /* @__PURE__ */ cn(e) ? e.value : e;
}
function pn(e) {
	return v(e) ? e() : L(e);
}
var mn = {
	get: (e, t, n) => t === "__v_raw" ? e : L(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ cn(i) && !/* @__PURE__ */ cn(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function hn(e) {
	return /* @__PURE__ */ $t(e) ? e : new Proxy(e, mn);
}
var gn = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new rt(), { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = n, this._set = r;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
};
function _n(e) {
	return new gn(e);
}
// @__NO_SIDE_EFFECTS__
function vn(e) {
	let t = p(e) ? Array(e.length) : {};
	for (let n in e) t[n] = Sn(e, n);
	return t;
}
var yn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = b(t) ? t : String(t), this._raw = /* @__PURE__ */ rn(e);
		let r = !0, i = e;
		if (!p(e) || b(this._key) || !D(this._key)) do
			r = !/* @__PURE__ */ nn(i) || /* @__PURE__ */ tn(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = L(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ cn(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ cn(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return dt(this._raw, this._key);
	}
}, bn = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function xn(e, t, n) {
	return /* @__PURE__ */ cn(e) ? e : v(e) ? new bn(e) : x(e) && arguments.length > 1 ? Sn(e, t, n) : /* @__PURE__ */ I(e);
}
function Sn(e, t, n) {
	return new yn(e, t, n);
}
var Cn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new rt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = tt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && Ne !== this) return ze(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Ge(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function wn(e, t, n = !1) {
	let r, i;
	return v(e) ? r = e : (r = e.get, i = e.set), new Cn(r, i, n);
}
var Tn = {
	GET: "get",
	HAS: "has",
	ITERATE: "iterate"
}, En = {
	SET: "set",
	ADD: "add",
	DELETE: "delete",
	CLEAR: "clear"
}, Dn = {}, On = /* @__PURE__ */ new WeakMap(), kn = void 0;
function An() {
	return kn;
}
function jn(e, t = !1, n = kn) {
	if (n) {
		let t = On.get(n);
		t || On.set(n, t = []), t.push(e);
	}
}
function Mn(e, t, n = r) {
	let { immediate: i, deep: o, once: s, scheduler: c, augmentJob: l, call: d } = n, f = (e) => o ? e : /* @__PURE__ */ tn(e) || o === !1 || o === 0 ? Nn(e, 1) : Nn(e), m, h, g, _, y = !1, b = !1;
	if (/* @__PURE__ */ cn(e) ? (h = () => e.value, y = /* @__PURE__ */ tn(e)) : /* @__PURE__ */ $t(e) ? (h = () => f(e), y = !0) : p(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ $t(e) || /* @__PURE__ */ tn(e)), h = () => e.map((e) => {
		if (/* @__PURE__ */ cn(e)) return e.value;
		if (/* @__PURE__ */ $t(e)) return f(e);
		if (v(e)) return d ? d(e, 2) : e();
	})) : h = v(e) ? t ? d ? () => d(e, 2) : e : () => {
		if (g) {
			Qe();
			try {
				g();
			} finally {
				$e();
			}
		}
		let t = kn;
		kn = m;
		try {
			return d ? d(e, 3, [_]) : e(_);
		} finally {
			kn = t;
		}
	} : a, t && o) {
		let e = h, t = o === !0 ? Infinity : o;
		h = () => Nn(e(), t);
	}
	let x = je(), S = () => {
		m.stop(), x && x.active && u(x.effects, m);
	};
	if (s && t) {
		let e = t;
		t = (...t) => {
			try {
				return e(...t);
			} finally {
				S();
			}
		};
	}
	let C = b ? Array(e.length).fill(Dn) : Dn, w = (e) => {
		if (m.flags & 1 && (m.dirty || e)) {
			if (t) {
				let n = m.run();
				if (e || o || y || (b ? n.some((e, t) => M(e, C[t])) : M(n, C))) {
					let e = kn;
					Qe();
					try {
						g && g(), kn = m;
						let e = [
							n,
							C === Dn ? void 0 : b && C[0] === Dn ? [] : C,
							_
						];
						C = n, d ? d(t, 3, e) : t(...e);
					} finally {
						kn = e, $e();
					}
				}
			} else m.run();
		}
	};
	return l && l(w), m = new Fe(h), m.scheduler = c ? () => c(w, !1) : w, _ = (e) => jn(e, !1, m), g = m.onStop = () => {
		let e = On.get(m);
		if (e) {
			if (d) d(e, 4);
			else for (let t of e) t();
			On.delete(m);
		}
	}, t ? i ? w(!0) : C = m.run() : c ? c(w.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function Nn(e, t = Infinity, n) {
	if (t <= 0 || !x(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ cn(e)) Nn(e.value, t, n);
	else if (p(e)) for (let r = 0; r < e.length; r++) Nn(e[r], t, n);
	else if (h(e) || m(e)) e.forEach((e) => {
		Nn(e, t, n);
	});
	else if (E(e)) {
		for (let r in e) Nn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Nn(e[r], t, n);
	}
	return e;
}
// node_modules/.pnpm/@vue+runtime-core@3.5.45/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var Pn = [];
function Fn(e) {
	Pn.push(e);
}
function In() {
	Pn.pop();
}
function Ln(e, t) {}
var Rn = {
	SETUP_FUNCTION: 0,
	0: "SETUP_FUNCTION",
	RENDER_FUNCTION: 1,
	1: "RENDER_FUNCTION",
	NATIVE_EVENT_HANDLER: 5,
	5: "NATIVE_EVENT_HANDLER",
	COMPONENT_EVENT_HANDLER: 6,
	6: "COMPONENT_EVENT_HANDLER",
	VNODE_HOOK: 7,
	7: "VNODE_HOOK",
	DIRECTIVE_HOOK: 8,
	8: "DIRECTIVE_HOOK",
	TRANSITION_HOOK: 9,
	9: "TRANSITION_HOOK",
	APP_ERROR_HANDLER: 10,
	10: "APP_ERROR_HANDLER",
	APP_WARN_HANDLER: 11,
	11: "APP_WARN_HANDLER",
	FUNCTION_REF: 12,
	12: "FUNCTION_REF",
	ASYNC_COMPONENT_LOADER: 13,
	13: "ASYNC_COMPONENT_LOADER",
	SCHEDULER: 14,
	14: "SCHEDULER",
	COMPONENT_UPDATE: 15,
	15: "COMPONENT_UPDATE",
	APP_UNMOUNT_CLEANUP: 16,
	16: "APP_UNMOUNT_CLEANUP"
}, zn = {
	sp: "serverPrefetch hook",
	bc: "beforeCreate hook",
	c: "created hook",
	bm: "beforeMount hook",
	m: "mounted hook",
	bu: "beforeUpdate hook",
	u: "updated",
	bum: "beforeUnmount hook",
	um: "unmounted hook",
	a: "activated hook",
	da: "deactivated hook",
	ec: "errorCaptured hook",
	rtc: "renderTracked hook",
	rtg: "renderTriggered hook",
	0: "setup function",
	1: "render function",
	2: "watcher getter",
	3: "watcher callback",
	4: "watcher cleanup function",
	5: "native event handler",
	6: "component event handler",
	7: "vnode hook",
	8: "directive hook",
	9: "transition hook",
	10: "app errorHandler",
	11: "app warnHandler",
	12: "ref function",
	13: "async component loader",
	14: "scheduler flush",
	15: "component update",
	16: "app unmount cleanup function"
};
function Bn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		Hn(e, t, n);
	}
}
function Vn(e, t, n, r) {
	if (v(e)) {
		let i = Bn(e, t, n, r);
		return i && S(i) && i.catch((e) => {
			Hn(e, t, n, void 0, !0);
		}), i;
	}
	if (p(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(Vn(e[a], t, n, r));
		return i;
	}
}
function Hn(e, t, n, i = !0, a = !1) {
	let o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: c } = t && t.appContext.config || r;
	if (t) {
		let r = t.parent, i = t.proxy, o = `https://vuejs.org/error-reference/#runtime-${n}`;
		for (; r;) {
			let t = r.ec;
			if (t && !r.isUnmounted && (!a || r.scope.active)) {
				for (let n = 0; n < t.length; n++) if (t[n](e, i, o) === !1) return;
			}
			r = r.parent;
		}
		if (s) {
			Qe(), Bn(s, null, 10, [
				e,
				i,
				o
			]), $e();
			return;
		}
	}
	Un(e, n, o, i, c);
}
function Un(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var Wn = [], Gn = -1, Kn = [], qn = null, Jn = 0, Yn = /* @__PURE__ */ Promise.resolve(), Xn = null;
function R(e) {
	let t = Xn || Yn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Zn(e) {
	let t = Gn + 1, n = Wn.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = Wn[r], a = ar(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Qn(e) {
	if (!(e.flags & 1)) {
		let t = ar(e), n = Wn[Wn.length - 1];
		!n || !(e.flags & 2) && t >= ar(n) ? Wn.push(e) : Wn.splice(Zn(t), 0, e), e.flags |= 1, $n();
	}
}
function $n() {
	Xn ||= Yn.then(or);
}
function er(e) {
	if (!p(e)) qn && e.id === -1 ? qn.splice(Jn + 1, 0, e) : e.flags & 1 || (Kn.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) Kn.push(e[t]);
	$n();
}
function tr(e, t, n, r = Gn + 1) {
	for (; r < Wn.length; r++) {
		let n = Wn[r];
		if (n && n.flags & 2) {
			if (e && n.id !== e.uid || t !== void 0 && !(n.id >= t)) continue;
			Wn.splice(r, 1), r = e ? r - 1 : Gn, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
		}
	}
}
function nr(e, t, n = 0) {
	if (Kn.length) {
		let e = Kn, r = 0;
		if (t) {
			e = [];
			for (let i = 0; i < Kn.length; i++) {
				let a = Kn[i];
				(a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n) ? Kn[r++] = a : e.push(a);
			}
		}
		let i = [...new Set(e)].sort((e, t) => ar(e) - ar(t));
		if (Kn.length = r, qn) {
			for (let e = 0; e < i.length; e++) qn.push(i[e]);
			return;
		}
		for (qn = i, Jn = 0; Jn < qn.length; Jn++) {
			let e = qn[Jn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		qn = null, Jn = 0;
	}
}
var rr = !1;
function ir(e, t) {
	if (rr) {
		e();
		return;
	}
	let n = t === void 0 ? void 0 : new Set(Kn);
	e(), rr = !0;
	try {
		tr(void 0, t), nr(void 0, n, t);
	} finally {
		rr = !1;
	}
}
var ar = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function or(e) {
	try {
		for (Gn = 0; Gn < Wn.length; Gn++) {
			let e = Wn[Gn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Bn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; Gn < Wn.length; Gn++) {
			let e = Wn[Gn];
			e && (e.flags &= -2);
		}
		Gn = -1, Wn.length = 0, nr(e), Xn = null, (Wn.length || Kn.length) && or(e);
	}
}
var sr, cr = [];
function lr(e, t) {
	sr = e, sr ? (sr.enabled = !0, cr.forEach(({ event: e, args: t }) => sr.emit(e, ...t)), cr = []) : typeof window < "u" && window.HTMLElement && !(window.navigator?.userAgent)?.includes("jsdom") ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((e) => {
		lr(e, t);
	}), setTimeout(() => {
		sr || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, cr = []);
	}, 3e3)) : cr = [];
}
var ur = null, dr = null;
function fr(e) {
	let t = ur;
	return ur = e, dr = e && e.type.__scopeId || null, t;
}
function pr(e) {
	dr = e;
}
function mr() {
	dr = null;
}
var hr = (e) => z;
function z(e, t = ur, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && gs(-1);
		let i = fr(t), a = fs.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = fs.length; e > a; e--) ms();
			fr(i), r._d && gs(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function gr(e, t) {
	if (ur === null) return e;
	let n = tc(ur), i = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [a, o, s, c = r] = t[e];
		a && (v(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && Nn(o), i.push({
			dir: a,
			instance: n,
			value: o,
			oldValue: void 0,
			arg: s,
			modifiers: c
		}));
	}
	return e;
}
function _r(e, t, n, r) {
	let i = e;
	if (r === "beforeMount") e._mount = e;
	else if (r === "beforeUpdate") {
		let n = t && t._mount;
		n && (n._latest = e, e._mount = n);
	} else if (r === "mounted") {
		let t = e._latest;
		e._mount = e._latest = void 0, t && (i = t, t._mount = void 0);
	}
	let a = i.dirs, o = t && t.dirs;
	for (let s = 0; s < a.length; s++) {
		let c = a[s];
		o ? c.oldValue = o[s].value : r === "mounted" && c.oldValue !== void 0 && (c = l({}, c, { oldValue: void 0 }));
		let u = c.dir[r];
		u && (Qe(), Vn(u, n, 8, [
			e.el,
			c,
			i,
			t
		]), $e());
	}
}
function vr(e, t) {
	if (Is) {
		let n = Is.provides, r = Is.parent && Is.parent.provides;
		r === n && (n = Is.provides = Object.create(r)), n[e] = t;
	}
}
function B(e, t, n = !1) {
	let r = Ls();
	if (r || eo) {
		let i = eo ? eo._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && v(t) ? t.call(r && r.proxy) : t;
	}
}
function yr() {
	return !!(Ls() || eo);
}
var br = /* @__PURE__ */ Symbol.for("v-scx"), xr = () => B(br);
function Sr(e, t) {
	return Tr(e, null, t);
}
function Cr(e, t) {
	return Tr(e, null, { flush: "post" });
}
function wr(e, t) {
	return Tr(e, null, { flush: "sync" });
}
function V(e, t, n) {
	return Tr(e, t, n);
}
function Tr(e, t, n = r) {
	let { immediate: i, deep: o, flush: s, once: c } = n, u = l({}, n), d = t && i || !t && s !== "post", f;
	if (Us) {
		if (s === "sync") {
			let e = xr();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = a, e.resume = a, e.pause = a, e;
		}
	}
	let p = Is;
	u.call = (e, t, n) => Vn(e, p, t, n);
	let m = !1;
	s === "post" ? u.scheduler = (e) => {
		e.i = p, Po(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : Qn(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = Mn(e, t, u);
	return Us && (f ? f.push(h) : d && h()), h;
}
function Er(e, t, n) {
	let r = this.proxy, i = y(e) ? e.includes(".") ? Dr(r, e) : () => r[e] : e.bind(r, r), a;
	v(t) ? a = t : (a = t.handler, n = t);
	let o = Bs(this), s = Tr(i, a.bind(r), n);
	return o(), s;
}
function Dr(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Or = /* @__PURE__ */ new WeakMap(), kr = /* @__PURE__ */ Symbol("_vte"), Ar = (e) => e.__isTeleport, jr = (e) => e && (e.disabled || e.disabled === ""), Mr = (e) => e && (e.defer || e.defer === ""), Nr = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Pr = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Fr = (e, t) => {
	let n = e && e.to;
	return y(n) ? t ? t(n) : null : n;
}, Ir = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		let { mc: u, pc: d, pbc: f, o: { insert: p, querySelector: m, createText: h, createComment: g, parentNode: _ } } = l, v = jr(t.props), { dynamicChildren: y } = t, b = (e, t, n) => {
			e.shapeFlag & 16 && u(e.children, t, n, i, a, o, s, c);
		}, x = (e = t) => {
			let n = jr(e.props), r = e.target = Fr(e.props, m), a = Vr(r, e, h, p);
			r && (o !== "svg" && Nr(r) ? o = "svg" : o !== "mathml" && Pr(r) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(r), n || (b(e, r, a), Br(e, !1)));
		}, S = (e) => {
			let t = () => {
				if (Or.get(e) === t) {
					if (Or.delete(e), jr(e.props)) {
						let t = _(e.el) || n;
						b(e, t, e.anchor), Br(e, !0);
					}
					x(e);
				}
			};
			Or.set(e, t), Po(t, a);
		};
		if (e == null) {
			let e = t.el = h(""), i = t.anchor = h("");
			if (p(e, n, r), p(i, n, r), Mr(t.props) || a && a.pendingBranch) {
				S(t);
				return;
			}
			v && (b(t, n, i), Br(t, !0)), x();
		} else {
			t.el = e.el;
			let r = t.anchor = e.anchor, u = Or.get(e);
			if (u) {
				u.flags |= 8, Or.delete(e), S(t);
				return;
			}
			t.targetStart = e.targetStart;
			let p = t.target = e.target, h = t.targetAnchor = e.targetAnchor, g = jr(e.props), _ = g ? n : p, b = g ? r : h;
			if (o === "svg" || Nr(p) ? o = "svg" : (o === "mathml" || Pr(p)) && (o = "mathml"), y ? (f(e.dynamicChildren, y, _, i, a, o, s), Vo(e, t, !0)) : c || d(e, t, _, b, i, a, o, s, !1), v) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Lr(t, n, r, l, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = Fr(t.props, m);
				e && (t.target = e, Lr(t, e, null, l, 0));
			} else g && Lr(t, p, h, l, 1);
			Br(t, v);
		}
	},
	remove(e, t, n, { um: r, o: { remove: i } }, a) {
		let { shapeFlag: o, children: s, anchor: c, targetStart: l, targetAnchor: u, target: d, props: f } = e, p = jr(f), m = a || !p, h = Or.get(e);
		if (h && (h.flags |= 8, Or.delete(e)), d && (i(l), i(u)), a && i(c), !h && (p || d) && o & 16) for (let e = 0; e < s.length; e++) {
			let i = s[e];
			r(i, t, n, m, !!i.dynamicChildren);
		}
	},
	move: Lr,
	hydrate: Rr
};
function Lr(e, t, n, { o: { insert: r }, m: i }, a = 2) {
	a === 0 && (e.targetStart && r(e.targetStart, t, n), r(e.targetAnchor, t, n), n = e.targetAnchor);
	let { el: o, anchor: s, shapeFlag: c, children: l, props: u } = e, d = a === 2;
	if (d && r(o, t, n), !Or.has(e) && (!d || jr(u)) && c & 16) for (let e = 0; e < l.length; e++) i(l[e], t, n, 2);
	d && r(s, t, n);
}
function Rr(e, t, n, r, i, a, { o: { nextSibling: o, parentNode: s, querySelector: c, insert: l, createText: u } }, d) {
	function f(e, n) {
		let r = n;
		for (; r;) {
			if (r && r.nodeType === 8) {
				if (r.data === "teleport start anchor") t.targetStart = r;
				else if (r.data === "teleport anchor") {
					t.targetAnchor = r, e._lpa = t.targetAnchor && o(t.targetAnchor);
					break;
				}
			}
			r = o(r);
		}
	}
	function p(e, t) {
		t.anchor = d(o(e), t, s(e), n, r, i, a);
	}
	let m = t.target = Fr(t.props, c), h = jr(t.props);
	if (m) {
		let c = m._lpa || m.firstChild;
		t.shapeFlag & 16 && (h ? (p(e, t), f(m, c), t.targetAnchor || Vr(m, t, u, l, s(e) === m ? e : null)) : (t.anchor = o(e), f(m, c), t.targetAnchor || Vr(m, t, u, l), d(c && o(c), t, m, n, r, i, a))), Br(t, h);
	} else h && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = o(e));
	return t.anchor && o(t.anchor);
}
var zr = Ir;
function Br(e, t) {
	let n = e.ctx;
	if (n && n.ut) {
		let r, i;
		for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
		n.ut();
	}
}
function Vr(e, t, n, r, i = null) {
	let a = t.targetStart = n(""), o = t.targetAnchor = n("");
	return a[kr] = o, e && (r(a, e, i), r(o, e, i)), o;
}
var Hr = /* @__PURE__ */ Symbol("_leaveCb"), Ur = /* @__PURE__ */ Symbol("_enterCb");
function Wr() {
	let e = {
		isMounted: !1,
		isLeaving: !1,
		isUnmounting: !1,
		leavingVNodes: /* @__PURE__ */ new Map()
	};
	return Yi(() => {
		e.isMounted = !0;
	}), Qi(() => {
		e.isUnmounting = !0;
	}), e;
}
var Gr = [Function, Array], Kr = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: Gr,
	onEnter: Gr,
	onAfterEnter: Gr,
	onEnterCancelled: Gr,
	onBeforeLeave: Gr,
	onLeave: Gr,
	onAfterLeave: Gr,
	onLeaveCancelled: Gr,
	onBeforeAppear: Gr,
	onAppear: Gr,
	onAfterAppear: Gr,
	onAppearCancelled: Gr
}, qr = {
	name: "BaseTransition",
	props: Kr,
	setup(e, { slots: t }) {
		let n = Ls(), r = Wr();
		return () => {
			let i = t.default && ti(t.default(), !0), a = i && i.length ? Jr(i) : n.subTree ? X() : void 0;
			if (!a) return;
			let o = /* @__PURE__ */ rn(e), { mode: s } = o;
			if (r.isLeaving) return Qr(a);
			let c = $r(a);
			if (!c) return Qr(a);
			let l = Zr(c, o, r, n);
			c.type !== us && ei(c, l);
			let u = n.subTree && $r(n.subTree);
			if (u && u.type !== us && !ys(u, c) && ni(n.subTree)) {
				let e = Zr(u, o, r, n);
				if (ei(u, e), s === "out-in" && c.type !== us) return r.isLeaving = !0, e.afterLeave = () => {
					if (r.isLeaving = !1, !(n.job.flags & 8)) {
						if (n.effect.flags & 2) {
							let e = () => {
								n.job.flags & 8 || n.update();
							};
							e.i = n, Qn(e);
						} else n.update();
					}
					delete e.afterLeave, u = void 0;
				}, Qr(a);
				s === "in-out" && c.type !== us ? e.delayLeave = (e, t, n) => {
					let i = Xr(r, u);
					i[String(u.key)] = u, e[Hr] = () => {
						t(), e[Hr] = void 0, delete l.delayedLeave, u = void 0;
					}, l.delayedLeave = () => {
						n(), delete l.delayedLeave, u = void 0;
					};
				} : u = void 0;
			} else u &&= void 0;
			return a;
		};
	}
};
function Jr(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== us) {
			t = n;
			break;
		}
	}
	return t;
}
var Yr = qr;
function Xr(e, t) {
	let { leavingVNodes: n } = e, r = n.get(t.type);
	return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function Zr(e, t, n, r) {
	let { appear: i, mode: a, persisted: o = !1, onBeforeEnter: s, onEnter: c, onAfterEnter: l, onEnterCancelled: u, onBeforeLeave: d, onLeave: f, onAfterLeave: m, onLeaveCancelled: h, onBeforeAppear: g, onAppear: _, onAfterAppear: v, onAppearCancelled: y } = t, b = String(e.key), x = Xr(n, e), S = (e, t) => {
		e && Vn(e, r, 9, t);
	}, C = (e, t) => {
		let n = t[1];
		S(e, t), p(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n();
	}, w = {
		mode: a,
		persisted: o,
		beforeEnter(t) {
			let r = s;
			if (!n.isMounted) {
				if (i) r = g || s;
				else return;
			}
			t[Hr] && t[Hr](!0);
			let a = x[b];
			if (a && ys(e, a)) {
				let e = a.el[Hr];
				if (!e) {
					let t = ni(a);
					e = t && t.el[Hr];
				}
				e && e();
			}
			S(r, [t]);
		},
		enter(t) {
			if (x[b] === e) return;
			let r = c, a = l, o = u;
			if (!n.isMounted) {
				if (i) r = _ || c, a = v || l, o = y || u;
				else return;
			}
			let s = !1;
			t[Ur] = (e) => {
				s || (s = !0, S(e ? o : a, [t]), w.delayedLeave && w.delayedLeave(), t[Ur] = void 0);
			};
			let d = t[Ur].bind(null, !1);
			r ? C(r, [t, d]) : d();
		},
		leave(t, r) {
			let i = String(e.key);
			if (t[Ur] && t[Ur](!0), n.isUnmounting) return r();
			S(d, [t]);
			let a = !1;
			t[Hr] = (n) => {
				a || (a = !0, r(), S(n ? h : m, [t]), t[Hr] = void 0, x[i] === e && delete x[i]);
			};
			let o = t[Hr].bind(null, !1);
			x[i] = e, f ? C(f, [t, o]) : o();
		},
		clone(e) {
			let i = Zr(e, t, n, r);
			return i.afterLeave = () => {
				w.afterLeave && w.afterLeave();
			}, i.delayLeave = (e, t, n) => {
				w.delayLeave ? w.delayLeave(e, t, n) : n();
			}, i.delayedLeave = () => {
				w.delayedLeave && w.delayedLeave();
			}, i;
		}
	};
	return w;
}
function Qr(e) {
	if (Li(e)) return e = Ts(e), e.children = null, e;
}
function $r(e) {
	if (!Li(e)) return Ar(e.type) && e.children ? Jr(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && v(n.default)) return n.default();
	}
}
function ei(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		ei(Ar(n.type) && $r(n) || n, t);
	} else if (e.shapeFlag & 128) {
		let n = e.suspense;
		if (n) {
			let e = n.isHydrating ? n.pendingBranch : n.activeBranch;
			e && ei(e, t.clone(e));
		} else e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	} else if (e.transition = t, e.type === W && p(e.children)) {
		let n = co(e.children, !1);
		n && ei(n, t);
	}
}
function ti(e, t = !1, n) {
	let r = [], i = 0;
	for (let a = 0; a < e.length; a++) {
		let o = e[a], s = n == null ? o.key : String(n) + String(o.key == null ? a : o.key);
		o.type === W ? (o.patchFlag & 128 && i++, r = r.concat(ti(o.children, t, s))) : (t || o.type !== us) && r.push(s == null ? o : Ts(o, { key: s }));
	}
	if (i > 1) for (let e = 0; e < r.length; e++) r[e].patchFlag = -2;
	return r;
}
function ni(e) {
	if (e.component) return ni(e.component.subTree);
	if (e.type === W) {
		let t = p(e.children) && co(e.children, !1);
		return t ? ni(t) : void 0;
	}
	if (e.type !== us) return e;
}
// @__NO_SIDE_EFFECTS__
function H(e, t) {
	return v(e) ? /* @__PURE__ */ l({ name: e.name }, t, { setup: e }) : e;
}
function ri() {
	let e = Ls();
	return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function ii(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function ai(e) {
	let t = Ls(), n = /* @__PURE__ */ ln(null);
	if (t) {
		let i = t.refs === r ? t.refs = {} : t.refs;
		Object.defineProperty(i, e, {
			enumerable: !0,
			get: () => n.value,
			set: (e) => n.value = e
		});
	}
	return n;
}
function oi(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var si = /* @__PURE__ */ new WeakMap();
function ci(e, t, n, i, a = !1) {
	if (p(e)) {
		e.forEach((e, r) => ci(e, t && (p(t) ? t[r] : t), n, i, a));
		return;
	}
	if (Pi(i) && !a) {
		i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && ci(e, t, n, i.component.subTree);
		return;
	}
	let s = i.shapeFlag & 4 ? tc(i.component) : i.el, c = a ? null : s, { i: l, r: d } = e, m = t && t.r, h = l.refs === r ? l.refs = {} : l.refs, g = l.setupState, _ = /* @__PURE__ */ rn(g), b = g === r ? o : (e) => !oi(h, e) && f(_, e), x = (e, t) => !(t && oi(h, t));
	if (m != null && m !== d) {
		if (li(t), y(m)) h[m] = null, b(m) && (g[m] = null);
		else if (/* @__PURE__ */ cn(m)) {
			let e = t;
			x(m, e.k) && (m.value = null), e.k && (h[e.k] = null);
		}
	}
	if (v(d)) Bn(d, l, 12, [c, h]);
	else {
		let t = y(d), r = /* @__PURE__ */ cn(d);
		if (t || r) {
			let i = () => {
				if (e.f) {
					let n = t ? b(d) ? g[d] : h[d] : x(d) || !e.k ? d.value : h[e.k];
					if (a) p(n) && u(n, s);
					else if (p(n)) n.includes(s) || n.push(s);
					else if (t) h[d] = [s], b(d) && (g[d] = h[d]);
					else {
						let t = [s];
						x(d, e.k) && (d.value = t), e.k && (h[e.k] = t);
					}
				} else t ? (h[d] = c, b(d) && (g[d] = c)) : r && (x(d, e.k) && (d.value = c), e.k && (h[e.k] = c));
			};
			if (c) {
				let t = () => {
					i(), si.delete(e);
				};
				t.id = -1, si.set(e, t), Po(t, n);
			} else li(e), i();
		}
	}
}
function li(e) {
	let t = si.get(e);
	t && (t.flags |= 8, si.delete(e));
}
var ui = !1, di = () => {
	ui ||= (console.error("Hydration completed but contains mismatches."), !0);
}, fi = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", pi = (e) => e.namespaceURI.includes("MathML"), mi = (e) => {
	if (e.nodeType === 1) {
		if (fi(e)) return "svg";
		if (pi(e)) return "mathml";
	}
}, hi = (e) => e.nodeType === 8;
function gi(e) {
	let { mt: t, p: n, o: { patchProp: r, createText: i, nextSibling: a, parentNode: o, remove: c, insert: l, createComment: u } } = e, d = (e, t) => {
		t.hasChildNodes() ? (f(t.firstChild, e, null, null, null), nr(), t._vnode = e) : (n(null, e, t), nr(), t._vnode = e);
	}, f = (n, r, s, c, u, d = !1) => {
		d ||= !!r.dynamicChildren;
		let b = hi(n) && n.data === "[", x = () => g(n, r, s, c, u, b), { type: S, ref: C, shapeFlag: w, patchFlag: T } = r, E = n.nodeType;
		r.el = n, T === -2 && (d = !1, r.dynamicChildren = null);
		let D = null;
		switch (S) {
			case ls:
				E === 3 ? (n.data !== r.children && (di(), n.data = r.children), D = a(n)) : r.children === "" ? (l(r.el = i(""), o(n), n), D = n) : D = x();
				break;
			case us:
				y(n) ? (D = a(n), v(r.el = n.content.firstChild, n, s)) : D = E !== 8 || b ? x() : a(n);
				break;
			case ds:
				if (b && (n = a(n), E = n.nodeType), E === 1 || E === 3) {
					D = n;
					let e = !r.children.length;
					for (let t = 0; t < r.staticCount; t++) e && (r.children += D.nodeType === 1 ? D.outerHTML : D.data), t === r.staticCount - 1 && (r.anchor = D), D = a(D);
					return b ? a(D) : D;
				}
				x();
				break;
			case W:
				D = b ? h(n, r, s, c, u, d) : x();
				break;
			default: if (w & 1) D = (E !== 1 || r.type.toLowerCase() !== n.tagName.toLowerCase()) && !y(n) ? x() : p(n, r, s, c, u, d);
			else if (w & 6) {
				r.slotScopeIds = u;
				let e = o(n);
				if (D = b ? _(n) : hi(n) && n.data === "teleport start" ? _(n, n.data, "teleport end") : a(n), t(r, e, null, s, c, mi(e), d), (Pi(r) || r.component.asyncDep) && !r.component.subTree) {
					let t;
					b ? (t = Y(ds), t.anchor = D ? D.previousSibling : e.lastChild) : t = n.nodeType === 3 ? Es("") : Y(n.nodeType === 8 ? us : "div"), t.el = n, r.component.subTree = t;
				}
			} else w & 64 ? D = E === 8 ? r.type.hydrate(n, r, s, c, u, d, e, m) : x() : w & 128 && (D = r.type.hydrate(n, r, s, c, mi(o(n)), u, d, e, f));
		}
		return C != null && ci(C, null, c, r), D;
	}, p = (e, t, n, i, a, o) => {
		o ||= !!t.dynamicChildren;
		let { type: l, dynamicProps: u, props: d, patchFlag: f, shapeFlag: p, dirs: h, transition: g } = t, _ = l === "input" || l === "option", b = !!u;
		if (_ || b || f !== -1) {
			h && _r(t, null, n, "created");
			let l = !1;
			if (y(e)) {
				l = Bo(null, g) && n && n.vnode.props && n.vnode.props.appear;
				let r = e.content.firstChild;
				if (l) {
					let e = r.getAttribute("class");
					e && (r.$cls = e), g.beforeEnter(r);
				}
				v(r, e, n), t.el = e = r;
			}
			if (p & 16 && !(d && (d.innerHTML || d.textContent))) {
				let r = m(e.firstChild, t, e, n, i, a, o);
				for (r && !xi(e, 1) && di(); r;) {
					let e = r;
					r = r.nextSibling, c(e);
				}
			} else if (p & 8) {
				let n = t.children;
				n[0] === "\n" && (e.tagName === "PRE" || e.tagName === "TEXTAREA") && (n = n.slice(1));
				let { textContent: r } = e;
				r !== n && r !== n.replace(/\r\n|\r/g, "\n") && (xi(e, 0) || di(), e.textContent = t.children);
			}
			if (d) {
				if (_ || b || !o || f & 48) {
					let t = e.tagName.includes("-"), i = e.namespaceURI.includes("svg") ? "svg" : e.namespaceURI.includes("MathML") ? "mathml" : void 0;
					for (let a in d) if (_ && (a.endsWith("value") || a === "indeterminate") || s(a) && !ee(a) || a[0] === "." || t && !ee(a) || u && u.includes(a)) {
						if (vi(e, a, d[a])) continue;
						r(e, a, null, d[a], i, n);
					}
				} else if (d.onClick) r(e, "onClick", null, d.onClick, void 0, n);
				else if (f & 4 && /* @__PURE__ */ $t(d.style)) for (let e in d.style) d.style[e];
			}
			let x;
			(x = d && d.onVnodeBeforeMount) && js(x, n, t), h && _r(t, null, n, "beforeMount"), ((x = d && d.onVnodeMounted) || h || l) && os(() => {
				x && js(x, n, t), l && g.enter(e), h && _r(t, null, n, "mounted");
			}, i);
		}
		return e.nextSibling;
	}, m = (e, t, r, o, s, c, u) => {
		u ||= !!t.dynamicChildren;
		let d = t.children, p = d.length, m = !1;
		for (let t = 0; t < p; t++) {
			let h = u ? d[t] : d[t] = Os(d[t]), g = h.type === ls;
			e ? (g && !u && t + 1 < p && Os(d[t + 1]).type === ls && (l(i(e.data.slice(h.children.length)), r, a(e)), e.data = h.children), e = f(e, h, o, s, c, u)) : g && !h.children ? l(h.el = i(""), r) : (m || (m = !0, xi(r, 1) || di()), n(null, h, r, null, o, s, mi(r), c));
		}
		return e;
	}, h = (e, t, n, r, i, s) => {
		let { slotScopeIds: c } = t;
		c && (i = i ? i.concat(c) : c);
		let d = o(e), f = m(a(e), t, d, n, r, i, s);
		return f && hi(f) && f.data === "]" ? a(t.anchor = f) : (di(), l(t.anchor = u("]"), d, f), f);
	}, g = (e, t, r, i, s, l) => {
		if (Ci(e, t) || di(), t.el = null, l) {
			let t = _(e);
			for (;;) {
				let n = a(e);
				if (n && n !== t) c(n);
				else break;
			}
		}
		let u = a(e), d = o(e);
		return c(e), n(null, t, d, u, r, i, mi(d), s), r && r.vnode.el === e && (r.vnode.el = t.el, ho(r, t.el)), u;
	}, _ = (e, t = "[", n = "]") => {
		let r = 0;
		for (; e;) if (e = a(e), e && hi(e) && (e.data === t && r++, e.data === n)) {
			if (r === 0) return a(e);
			r--;
		}
		return e;
	}, v = (e, t, n) => {
		let r = t.parentNode;
		r && r.replaceChild(e, t);
		let i = n;
		for (; i;) i.vnode.el === t && (i.vnode.el = i.subTree.el = e), i = i.parent;
	}, y = (e) => e.nodeType === 1 && e.tagName === "TEMPLATE";
	return [d, f];
}
var _i = /* @__PURE__ */ new Set([
	"src",
	"srcset",
	"href",
	"poster"
]);
function vi(e, t, n) {
	return _i.has(t) ? e.getAttribute(t) === (n == null ? null : `${n}`) : !1;
}
var yi = "data-allow-mismatch", bi = {
	0: "text",
	1: "children",
	2: "class",
	3: "style",
	4: "attribute"
};
function xi(e, t) {
	if (t === 0 || t === 1) for (; e && !e.hasAttribute(yi);) e = e.parentElement;
	return Si(e && e.getAttribute(yi), t);
}
function Si(e, t) {
	if (e == null) return !1;
	if (e === "") return !0;
	{
		let n = e.split(",");
		return t === 0 && n.includes("children") ? !0 : n.includes(bi[t]);
	}
}
function Ci(e, t) {
	return xi(e.parentElement, 1) || wi(e) || Ti(t);
}
function wi(e) {
	return e.nodeType === 1 && Si(e.getAttribute(yi), 1);
}
function Ti({ props: e }) {
	let t = e && e[yi];
	return typeof t == "string" && Si(t, 1);
}
var Ei = le().requestIdleCallback || ((e) => setTimeout(e, 1)), Di = le().cancelIdleCallback || ((e) => clearTimeout(e)), Oi = (e = 1e4) => (t) => {
	let n = Ei(t, { timeout: e });
	return () => Di(n);
};
function ki(e) {
	let { top: t, left: n, bottom: r, right: i } = e.getBoundingClientRect(), { innerHeight: a, innerWidth: o } = window;
	return (t > 0 && t < a || r > 0 && r < a) && (n > 0 && n < o || i > 0 && i < o);
}
var Ai = (e) => (t, n) => {
	let r = new IntersectionObserver((e) => {
		for (let n of e) if (n.isIntersecting) {
			r.disconnect(), t();
			break;
		}
	}, e), i = (e) => {
		if (ki(e)) return t(), r.disconnect(), !1;
		if (getComputedStyle(e).display === "contents") {
			for (let t = 0; t < e.children.length; t++) if (i(e.children[t]) === !1) return !1;
		}
		r.observe(e);
	};
	return n((e) => {
		if (e instanceof Element) return i(e);
	}), () => r.disconnect();
}, ji = (e) => (t) => {
	if (e) {
		let n = matchMedia(e);
		if (n.matches) t();
		else return n.addEventListener("change", t, { once: !0 }), () => n.removeEventListener("change", t);
	}
}, Mi = (e = []) => (t, n) => {
	y(e) && (e = [e]);
	let r = !1, i = (e) => {
		r || (r = !0, a(), t(), e.target.dispatchEvent(new e.constructor(e.type, e)));
	}, a = () => {
		n((t) => {
			for (let n of e) t.removeEventListener(n, i);
		});
	};
	return n((t) => {
		for (let n of e) t.addEventListener(n, i, { once: !0 });
	}), a;
};
function Ni(e, t) {
	if (hi(e) && e.data === "[") {
		let n = 1, r = e.nextSibling;
		for (; r;) {
			if (r.nodeType === 1) {
				if (t(r) === !1) break;
			} else if (hi(r)) {
				if (r.data === "]") {
					if (--n === 0) break;
				} else r.data === "[" && n++;
			}
			r = r.nextSibling;
		}
	} else t(e);
}
var Pi = (e) => !!e.type.__asyncLoader;
// @__NO_SIDE_EFFECTS__
function Fi(e) {
	v(e) && (e = { loader: e });
	let { loader: t, loadingComponent: n, errorComponent: r, delay: i = 200, hydrate: a, timeout: o, suspensible: s = !0, onError: c } = e, l = null, u, d = 0, f = () => (d++, l = null, p()), p = () => {
		let e;
		return l || (e = l = t().catch((e) => {
			if (e = e instanceof Error ? e : Error(String(e)), c) return new Promise((t, n) => {
				c(e, () => t(f()), () => n(e), d + 1);
			});
			throw e;
		}).then((t) => e !== l && l ? l : (t && (t.__esModule || t[Symbol.toStringTag] === "Module") && (t = t.default), u = t, t)));
	};
	return /* @__PURE__ */ H({
		name: "AsyncComponentWrapper",
		__asyncLoader: p,
		__asyncHydrate(e, t, n) {
			let r = e.isConnected, i = !1;
			(t.bu ||= []).push(() => i = !0);
			let o = () => {
				i || !e.parentNode || r && !e.isConnected || n();
			}, s = a ? () => {
				let n = a(o, (t) => Ni(e, t));
				n && (t.bum ||= []).push(n);
			} : o;
			u ? s() : p().then(() => !t.isUnmounted && s());
		},
		get __asyncResolved() {
			return u;
		},
		setup() {
			let e = Is;
			if (ii(e), u) return () => Ii(u, e);
			let t = (t) => {
				l = null, Hn(t, e, 13, !r, !0);
			};
			if (s && e.suspense || Us) return p().then((t) => () => Ii(t, e)).catch((e) => (t(e), () => r ? Y(r, { error: e }) : null));
			let a = /* @__PURE__ */ I(!1), c = /* @__PURE__ */ I(), d = /* @__PURE__ */ I(!!i), f, m;
			return Me(() => {
				f != null && clearTimeout(f), m != null && clearTimeout(m);
			}), i && (m = setTimeout(() => {
				e.isUnmounted || (d.value = !1);
			}, i)), o != null && (f = setTimeout(() => {
				if (!e.isUnmounted && !a.value && !c.value) {
					let e = /* @__PURE__ */ Error(`Async component timed out after ${o}ms.`);
					t(e), c.value = e;
				}
			}, o)), p().then(() => {
				e.isUnmounted || (a.value = !0, e.parent && Li(e.parent.vnode) && e.parent.update());
			}).catch((n) => {
				e.isUnmounted ? l = null : (t(n), c.value = n);
			}), () => {
				if (a.value && u) return Ii(u, e);
				if (c.value && r) return Y(r, { error: c.value });
				if (n && !d.value) return Ii(n, e);
			};
		}
	});
}
function Ii(e, t) {
	let { ref: n, props: r, children: i, ce: a } = t.vnode, o = Y(e, r, i);
	return o.ref = n, o.ce = a, delete t.vnode.ce, o;
}
var Li = (e) => e.type.__isKeepAlive, Ri = {
	name: "KeepAlive",
	__isKeepAlive: !0,
	props: {
		include: [
			String,
			RegExp,
			Array
		],
		exclude: [
			String,
			RegExp,
			Array
		],
		max: [String, Number]
	},
	setup(e, { slots: t }) {
		let n = Ls(), r = n.ctx;
		if (!r.renderer) return () => {
			let e = t.default && t.default();
			return e && e.length === 1 ? e[0] : e;
		};
		let i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = null, s = n.suspense, { renderer: { p: c, m: l, um: u, o: { createElement: d } } } = r, f = d("div");
		r.activate = (e, t, n, r, i) => {
			let a = e.component;
			l(e, t, n, 0, s), c(a.vnode, e, t, n, a, s, r, e.slotScopeIds, i), Po(() => {
				a.isDeactivated = !1, a.a && ie(a.a);
				let t = e.props && e.props.onVnodeMounted;
				t && js(t, a.parent, e);
			}, s);
		}, r.deactivate = (e) => {
			let t = i.get(e.key == null ? e.type : e.key);
			if (!t || t.component !== e.component) return !1;
			let n = e.component;
			return Wo(n.m), Wo(n.a), l(e, f, null, 1, s), Po(() => {
				n.da && ie(n.da);
				let t = e.props && e.props.onVnodeUnmounted;
				t && js(t, n.parent, e), n.isDeactivated = !0;
			}, s), !0;
		};
		function p(e) {
			Wi(e), u(e, n, s, !0);
		}
		function m(e) {
			i.forEach((t, n) => {
				let r = nc(Pi(t) ? t.type.__asyncResolved || {} : t.type);
				r && !e(r) && h(n);
			});
		}
		function h(e) {
			let t = i.get(e);
			t && (!o || !ys(t, o)) ? p(t) : o && (Wi(o), t && Wi(t)), i.delete(e), a.delete(e);
		}
		V(() => [e.include, e.exclude], ([e, t]) => {
			e && m((t) => zi(e, t)), t && m((e) => !zi(t, e));
		}, {
			flush: "post",
			deep: !0
		});
		let g = null, _ = () => {
			if (g != null) {
				if (Ko(n.subTree.type)) {
					let e = () => {
						let e = Gi(n.subTree);
						e.component && i.set(g, e);
					};
					n.subTree.suspense.pendingBranch ? Po(e, n.subTree.suspense) : e();
				} else i.set(g, Gi(n.subTree));
			}
		};
		return Yi(_), Zi(_), Qi(() => {
			i.forEach((e) => {
				let { subTree: t, suspense: r } = n, i = Gi(t);
				if (e.type === i.type && e.key === i.key) {
					Wi(i);
					let e = i.component.da;
					e && Po(e, r);
				} else p(e);
			});
		}), () => {
			if (g = null, !t.default) return o = null;
			let n = t.default(), r = n[0];
			if (n.length > 1) return o = null, n;
			if (!vs(r) || !(r.shapeFlag & 4) && !(r.shapeFlag & 128)) return o = null, r;
			let s = Gi(r);
			if (s.type === us) return o = null, s;
			let c = s.type, l = nc(Pi(s) ? s.type.__asyncResolved || {} : c), { include: u, exclude: d, max: f } = e;
			if (u && (!l || !zi(u, l)) || d && l && zi(d, l)) return s.shapeFlag &= -257, o = s, r;
			let p = s.key == null ? c : s.key, m = i.get(p);
			return s.el && (s = Ts(s), r.shapeFlag & 128 && (r.ssContent = s)), g = p, m ? (s.el = m.el, s.component = m.component, s.transition && ei(s, s.transition), s.shapeFlag |= 512, a.delete(p), a.add(p)) : (a.add(p), f && a.size > parseInt(f, 10) && h(a.values().next().value)), s.shapeFlag |= 256, o = s, Ko(r.type) ? r : s;
		};
	}
};
function zi(e, t) {
	return p(e) ? e.some((e) => zi(e, t)) : y(e) ? e.split(",").includes(t) : _(e) ? (e.lastIndex = 0, e.test(t)) : !1;
}
function Bi(e, t) {
	Hi(e, "a", t);
}
function Vi(e, t) {
	Hi(e, "da", t);
}
function Hi(e, t, n = Is) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (Ki(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) Li(e.parent.vnode) && Ui(r, t, n, e), e = e.parent;
	}
}
function Ui(e, t, n, r) {
	let i = Ki(t, e, r, !0), a = Ki("um", () => u(r[t], i), n);
	a.flags = 16;
}
function Wi(e) {
	e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function Gi(e) {
	return e.shapeFlag & 128 ? e.ssContent : e;
}
function Ki(e, t, n = Is, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Qe();
			let i = Bs(n), a = Vn(t, n, e, r);
			return i(), $e(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var qi = (e) => (t, n = Is) => {
	Us && e !== "sp" || Ki(e, (...e) => t(...e), n);
}, Ji = qi("bm"), Yi = qi("m"), Xi = qi("bu"), Zi = qi("u"), Qi = qi("bum"), $i = qi("um"), ea = qi("sp"), ta = qi("rtg"), na = qi("rtc");
function ra(e, t = Is) {
	Ki("ec", e, t);
}
var ia = "components", aa = "directives";
function oa(e, t) {
	return ua(ia, e, !0, t) || e;
}
var sa = /* @__PURE__ */ Symbol.for("v-ndc");
function ca(e) {
	return y(e) ? ua(ia, e, !1) || e : e || sa;
}
function la(e) {
	return ua(aa, e);
}
function ua(e, t, n = !0, r = !1) {
	let i = ur || Is;
	if (i) {
		let n = i.type;
		if (e === ia) {
			let e = nc(n, !1);
			if (e && (e === t || e === O(t) || e === A(O(t)))) return n;
		}
		let a = da(i[e] || n[e], t) || da(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function da(e, t) {
	return e && (e[t] || e[O(t)] || e[A(O(t))]);
}
function fa(e, t, n, r) {
	let i, a = n && n[r], o = p(e);
	if (o || y(e)) {
		let n = o && /* @__PURE__ */ $t(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ tn(e), s = /* @__PURE__ */ en(e), e = pt(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? sn(on(e[n])) : on(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		if (!Number.isInteger(e) || e < 0) i = [];
		else {
			i = Array(e);
			for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
		}
	} else if (x(e)) {
		if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
		else {
			let n = Object.keys(e);
			i = Array(n.length);
			for (let r = 0, o = n.length; r < o; r++) {
				let o = n[r];
				i[r] = t(e[o], o, r, a && a[r]);
			}
		}
	} else i = [];
	return n && (n[r] = i), i;
}
function pa(e, t) {
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (p(r)) for (let t = 0; t < r.length; t++) e[r[t].name] = r[t].fn;
		else r && (e[r.name] = r.key ? (...e) => {
			let t = r.fn(...e);
			return t && (t.key = r.key), t;
		} : r.fn);
	}
	return e;
}
function U(e, t, n, r, i, a) {
	if (n ??= {}, ur.ce || ur.parent && Pi(ur.parent) && ur.parent.ce) {
		let e = a != null && n.key == null ? l({}, n, { key: a }) : n, i = Object.keys(e).length > 0;
		return t !== "default" && (e.name = t), G(), q(W, null, [Y("slot", e, r && r())], i ? -2 : 64);
	}
	let o = e[t];
	o && o._c && (o._d = !1);
	let s = fs.length;
	G();
	let c;
	try {
		let i = o && ma(o(n)), s = n.key || a || i && i.key;
		c = q(W, { key: (s && !b(s) ? s : `_${t}`) + (!i && r ? "_fb" : "") }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
	} catch (e) {
		for (let e = fs.length; e > s; e--) ms();
		throw e;
	} finally {
		o && o._c && (o._d = !0);
	}
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), c;
}
function ma(e) {
	return e.some((e) => !vs(e) || !(e.type === us || e.type === W && !ma(e.children))) ? e : null;
}
function ha(e, t) {
	let n = {};
	for (let r in e) n[t && /[A-Z]/.test(r) ? `on:${r}` : j(r)] = e[r];
	return n;
}
var ga = (e) => e ? Hs(e) ? tc(e) : ga(e.parent) : null, _a = /* @__PURE__ */ l(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => ga(e.parent),
	$root: (e) => ga(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Va(e),
	$forceUpdate: (e) => e.f ||= () => {
		Qn(e.update);
	},
	$nextTick: (e) => e.n ||= R.bind(e.proxy),
	$watch: (e) => Er.bind(e)
}), va = (e, t) => e !== r && !e.__isScriptSetup && f(e, t), ya = {
	get({ _: e }, t) {
		if (t === "__v_skip") return !0;
		let { ctx: n, setupState: i, data: a, props: o, accessCache: s, type: c, appContext: l } = e;
		if (t[0] !== "$") {
			let e = s[t];
			if (e !== void 0) switch (e) {
				case 1: return i[t];
				case 2: return a[t];
				case 4: return n[t];
				case 3: return o[t];
			}
			else if (va(i, t)) return s[t] = 1, i[t];
			else if (a !== r && f(a, t)) return s[t] = 2, a[t];
			else if (f(o, t)) return s[t] = 3, o[t];
			else if (n !== r && f(n, t)) return s[t] = 4, n[t];
			else Ia && (s[t] = 0);
		}
		let u = _a[t], d, p;
		if (u) return t === "$attrs" && lt(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== r && f(n, t)) return s[t] = 4, n[t];
		if (p = l.config.globalProperties, f(p, t)) return p[t];
	},
	set({ _: e }, t, n) {
		let { data: i, setupState: a, ctx: o } = e;
		return va(a, t) ? (a[t] = n, !0) : i !== r && f(i, t) ? (i[t] = n, !0) : f(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(n[c] || e !== r && c[0] !== "$" && f(e, c) || va(t, c) || f(o, c) || f(i, c) || f(_a, c) || f(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? f(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
}, ba = /* @__PURE__ */ l({}, ya, {
	get(e, t) {
		if (t !== Symbol.unscopables) return ya.get(e, t, e);
	},
	has(e, t) {
		return t[0] !== "_" && !ue(t);
	}
});
function xa() {
	return null;
}
function Sa() {
	return null;
}
function Ca(e) {}
function wa(e) {}
function Ta() {
	return null;
}
function Ea() {}
function Da(e, t) {
	return null;
}
function Oa() {
	return Aa("useSlots").slots;
}
function ka() {
	return Aa("useAttrs").attrs;
}
function Aa(e) {
	let t = Ls();
	return t.setupContext ||= ec(t);
}
function ja(e) {
	return p(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
function Ma(e, t) {
	let n = ja(e);
	for (let e in t) {
		if (e.startsWith("__skip")) continue;
		let r = n[e];
		r ? p(r) || v(r) ? r = n[e] = {
			type: r,
			default: t[e]
		} : r.default = t[e] : r === null && (r = n[e] = { default: t[e] }), r && t[`__skip_${e}`] && (r.skipFactory = !0);
	}
	return n;
}
function Na(e, t) {
	return !e || !t ? e || t : p(e) && p(t) ? e.concat(t) : l({}, ja(e), ja(t));
}
function Pa(e, t) {
	let n = {};
	for (let r in e) t.includes(r) || Object.defineProperty(n, r, {
		enumerable: !0,
		get: () => e[r]
	});
	return n;
}
function Fa(e) {
	let t = Ls(), n = Us, r = e();
	Vs(), n && zs(!1);
	let i = () => {
		Bs(t), n && zs(!0);
	}, a = () => {
		Ls() !== t && t.scope.off(), Vs(), n && zs(!1);
	};
	return S(r) && (r = r.catch((e) => {
		throw i(), Promise.resolve().then(() => Promise.resolve().then(a)), e;
	})), [r, () => {
		i(), Promise.resolve().then(a);
	}];
}
var Ia = !0;
function La(e) {
	let t = Va(e), n = e.proxy, r = e.ctx;
	Ia = !1, t.beforeCreate && za(t.beforeCreate, e, "bc");
	let { data: i, computed: o, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: f, mounted: m, beforeUpdate: h, updated: g, activated: _, deactivated: y, beforeDestroy: b, beforeUnmount: S, destroyed: C, unmounted: w, render: T, renderTracked: E, renderTriggered: D, errorCaptured: ee, serverPrefetch: te, expose: ne, inheritAttrs: O, components: re, directives: k, filters: A } = t;
	if (u && Ra(u, r, null), s) for (let e in s) {
		let t = s[e];
		v(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		x(t) && (e.data = /* @__PURE__ */ Jt(t));
	}
	if (Ia = !0, o) for (let e in o) {
		let t = o[e], i = Q({
			get: v(t) ? t.bind(n, n) : v(t.get) ? t.get.bind(n, n) : a,
			set: !v(t) && v(t.set) ? t.set.bind(n) : a
		});
		Object.defineProperty(r, e, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		});
	}
	if (c) for (let e in c) Ba(c[e], r, n, e);
	if (l) {
		let e = v(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			vr(t, e[t]);
		});
	}
	d && za(d, e, "c");
	function j(e, t) {
		p(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (j(Ji, f), j(Yi, m), j(Xi, h), j(Zi, g), j(Bi, _), j(Vi, y), j(ra, ee), j(na, E), j(ta, D), j(Qi, S), j($i, w), j(ea, te), p(ne)) {
		if (ne.length) {
			let t = e.exposed ||= {};
			ne.forEach((e) => {
				Object.defineProperty(t, e, {
					get: () => n[e],
					set: (t) => n[e] = t,
					enumerable: !0
				});
			});
		} else e.exposed ||= {};
	}
	T && e.render === a && (e.render = T), O != null && (e.inheritAttrs = O), re && (e.components = re), k && (e.directives = k), te && ii(e);
}
function Ra(e, t, n = a) {
	p(e) && (e = Ka(e));
	for (let n in e) {
		let r = e[n], i;
		i = x(r) ? "default" in r ? B(r.from || n, r.default, !0) : B(r.from || n) : B(r), /* @__PURE__ */ cn(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function za(e, t, n) {
	Vn(p(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Ba(e, t, n, r) {
	let i = r.includes(".") ? Dr(n, r) : () => n[r];
	if (y(e)) {
		let n = t[e];
		v(n) && V(i, n);
	} else if (v(e)) V(i, e.bind(n));
	else if (x(e)) {
		if (p(e)) e.forEach((e) => Ba(e, t, n, r));
		else {
			let r = v(e.handler) ? e.handler.bind(n) : t[e.handler];
			v(r) && V(i, r, e);
		}
	}
}
function Va(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Ha(c, e, o, !0)), Ha(c, t, o)), x(t) && a.set(t, c), c;
}
function Ha(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Ha(e, a, n, !0), i && i.forEach((t) => Ha(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Ua[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Ua = {
	data: Wa,
	props: Ya,
	emits: Ya,
	methods: Ja,
	computed: Ja,
	beforeCreate: qa,
	created: qa,
	beforeMount: qa,
	mounted: qa,
	beforeUpdate: qa,
	updated: qa,
	beforeDestroy: qa,
	beforeUnmount: qa,
	destroyed: qa,
	unmounted: qa,
	activated: qa,
	deactivated: qa,
	errorCaptured: qa,
	serverPrefetch: qa,
	components: Ja,
	directives: Ja,
	watch: Xa,
	provide: Wa,
	inject: Ga
};
function Wa(e, t) {
	return t ? e ? function() {
		return l(v(e) ? e.call(this, this) : e, v(t) ? t.call(this, this) : t);
	} : t : e;
}
function Ga(e, t) {
	return Ja(Ka(e), Ka(t));
}
function Ka(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function qa(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Ja(e, t) {
	return e ? l(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ya(e, t) {
	return e ? p(e) && p(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : l(/* @__PURE__ */ Object.create(null), ja(e), ja(t ?? {})) : t;
}
function Xa(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = l(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = qa(e[r], t[r]);
	return n;
}
function Za() {
	return {
		app: null,
		config: {
			isNativeTag: o,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var Qa = 0;
function $a(e, t) {
	return function(n, r = null) {
		v(n) || (n = l({}, n)), r != null && !x(r) && (r = null);
		let i = Za(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: Qa++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: cc,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && v(e.install) ? (a.add(e), e.install(c, ...t)) : v(e) && (a.add(e), e(c, ...t))), c;
			},
			mixin(e) {
				return i.mixins.includes(e) || i.mixins.push(e), c;
			},
			component(e, t) {
				return t ? (i.components[e] = t, c) : i.components[e];
			},
			directive(e, t) {
				return t ? (i.directives[e] = t, c) : i.directives[e];
			},
			mount(a, o, l) {
				if (!s) {
					let u = c._ceVNode || Y(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, tc(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (Vn(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = eo;
				eo = c;
				try {
					return e();
				} finally {
					eo = t;
				}
			}
		};
		return c;
	};
}
var eo = null;
function to(e, t, n = r) {
	let i = Ls(), a = O(t), o = k(t), s = no(e, a), c = _n((s, c) => {
		let l, u = r, d;
		return wr(() => {
			let t = e[a];
			M(l, t) && (l = t, c());
		}), {
			get() {
				return s(), n.get ? n.get(l) : l;
			},
			set(e) {
				let s = n.set ? n.set(e) : e;
				if (!M(s, l) && !(u !== r && M(e, u))) return;
				let f = i.vnode.props, p = !!(f && (t in f || a in f || o in f) && (`onUpdate:${t}` in f || `onUpdate:${a}` in f || `onUpdate:${o}` in f));
				p || (l = e, c()), i.emit(`update:${t}`, s), M(e, u) && (M(e, s) && !M(s, d) || p && u !== r && !M(s, l)) && c(), u = e, d = s;
			}
		};
	});
	return c[Symbol.iterator] = () => {
		let e = 0;
		return { next() {
			return e < 2 ? {
				value: e++ ? s || r : c,
				done: !1
			} : { done: !0 };
		} };
	}, c;
}
var no = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${O(t)}Modifiers`] || e[`${k(t)}Modifiers`];
function ro(e, t, ...n) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || r, a = n, o = t.startsWith("update:"), s = o && no(i, t.slice(7));
	s && (s.trim && (a = n.map((e) => y(e) ? e.trim() : e)), s.number && (a = a.map(oe)));
	let c, l = i[c = j(t)] || i[c = j(O(t))];
	!l && o && (l = i[c = j(k(t))]), l && Vn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, Vn(u, e, 6, a);
	}
}
var io = /* @__PURE__ */ new WeakMap();
function ao(e, t, n = !1) {
	let r = n ? io : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!v(e)) {
		let r = (e) => {
			let n = ao(e, t, !0);
			n && (s = !0, l(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (x(e) && r.set(e, null), null) : (p(a) ? a.forEach((e) => o[e] = null) : l(o, a), x(e) && r.set(e, o), o);
}
function oo(e, t) {
	return !e || !s(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), f(e, t[0].toLowerCase() + t.slice(1)) || f(e, k(t)) || f(e, t));
}
function so(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = fr(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = Os(u.call(t, e, d, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = Os(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: l
			}) : e(f, null)), y = t.props ? s : lo(s);
		}
	} catch (t) {
		fs.length = 0, Hn(t, e, 1), v = Y(us);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(c) && (y = uo(y, a)), b = Ts(b, y, !1, !0));
	}
	return n.dirs && (b = Ts(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && ei(Ar(b.type) && $r(b) || b, n.transition), v = b, fr(_), v;
}
function co(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (vs(r)) {
			if (r.type !== us || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var lo = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || s(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, uo = (e, t) => {
	let n = {};
	for (let r in e) c(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function fo(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? po(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (mo(o, r, n) && !oo(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || po(r, o, l) : !!o;
	return !1;
}
function po(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!f(e, a) || mo(t, e, a) && !oo(n, a)) return !0;
	}
	return !1;
}
function mo(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && x(r) && x(i) ? !Se(r, i) : r !== i;
}
function ho({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var go = {}, _o = () => Object.create(go), vo = (e) => Object.getPrototypeOf(e) === go;
function yo(e, t, n, r = !1) {
	let i = {}, a = _o();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), xo(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Yt(i) : e.type.props ? i : a, e.attrs = a;
}
function bo(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ rn(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (oo(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) {
					if (f(a, o)) u !== a[o] && (a[o] = u, l = !0);
					else {
						let t = O(o);
						i[t] = So(c, s, t, u, e, !1);
					}
				} else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		xo(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (f(t, a) || (r = k(a)) !== a && f(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = So(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && f(t, e) || (delete a[e], l = !0);
	}
	l && ut(e.attrs, "set", "");
}
function xo(e, t, n, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let r in t) {
		if (ee(r)) continue;
		let l = t[r], u;
		a && f(a, u = O(r)) ? !o || !o.includes(u) ? n[u] = l : (c ||= {})[u] = l : oo(e.emitsOptions, r) || r in i && l === i[r] || (i[r] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ rn(n), i = c || r;
		for (let r = 0; r < o.length; r++) {
			let s = o[r];
			n[s] = So(a, t, s, i[s], e, !f(i, s));
		}
	}
	return s;
}
function So(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = f(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && v(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Bs(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === k(n)) && (r = !0));
	}
	return r;
}
var Co = /* @__PURE__ */ new WeakMap();
function wo(e, t, n = !1) {
	let a = n ? Co : t.propsCache, o = a.get(e);
	if (o) return o;
	let s = e.props, c = {}, u = [], d = !1;
	if (!v(e)) {
		let r = (e) => {
			d = !0;
			let [n, r] = wo(e, t, !0);
			l(c, n), r && u.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!s && !d) return x(e) && a.set(e, i), i;
	if (p(s)) for (let e = 0; e < s.length; e++) {
		let t = O(s[e]);
		To(t) && (c[t] = r);
	}
	else if (s) for (let e in s) {
		let t = O(e);
		if (To(t)) {
			let n = s[e], r = c[t] = p(n) || v(n) ? { type: n } : l({}, n), i = r.type, a = !1, o = !0;
			if (p(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = v(t) && t.name;
				if (n === "Boolean") {
					a = !0;
					break;
				}
				n === "String" && (o = !1);
			}
			else a = v(i) && i.name === "Boolean";
			r[0] = a, r[1] = o, (a || f(r, "default")) && u.push(t);
		}
	}
	let m = [c, u];
	return x(e) && a.set(e, m), m;
}
function To(e) {
	return e[0] !== "$" && !ee(e);
}
var Eo = (e) => e === "_" || e === "_ctx" || e === "$stable", Do = (e) => p(e) ? e.map(Os) : [Os(e)], Oo = (e, t, n) => {
	if (t._n) return t;
	let r = z((...e) => Do(t(...e)), n);
	return r._c = !1, r;
}, ko = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Eo(n)) continue;
		let i = e[n];
		if (v(i)) t[n] = Oo(n, i, r);
		else if (i != null) {
			let e = Do(i);
			t[n] = () => e;
		}
	}
}, Ao = (e, t) => {
	let n = Do(t);
	e.slots.default = () => n;
}, jo = (e, t, n) => {
	for (let r in t) (n || !Eo(r)) && (e[r] = t[r]);
}, Mo = (e, t, n) => {
	let r = e.slots = _o();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (jo(r, t, n), n && ae(r, "_", e, !0)) : ko(t, r);
	} else t && Ao(e, t);
}, No = (e, t, n) => {
	let { vnode: i, slots: a } = e, o = !0, s = r;
	if (i.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? o = !1 : jo(a, t, n) : (o = !t.$stable, ko(t, a)), s = t;
	} else t && (Ao(e, t), s = { default: 1 });
	if (o) for (let e in a) !Eo(e) && s[e] == null && delete a[e];
}, Po = os;
function Fo(e) {
	return Lo(e);
}
function Io(e) {
	return Lo(e, gi);
}
function Lo(e, t) {
	let n = le();
	n.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = a, insertStaticContent: _ } = e, v = (e, t, n, r = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !ys(e, t) && (r = P(e), N(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === i && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case ls:
				y(e, t, n, r);
				break;
			case us:
				b(e, t, n, r);
				break;
			case ds:
				e ?? x(t, n, r, s);
				break;
			case W:
				re(e, t, n, r, a, o, s, c, l);
				break;
			default: f & 1 ? w(e, t, n, r, a, o, s, c, l) : f & 6 ? k(e, t, n, r, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, n, r, a, o, s, c, l, ge);
		}
		d != null && a ? ci(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && ci(e.ref, null, o, e, !0);
	}, y = (e, t, n, r) => {
		if (e == null) o(t.el = u(t.children), n, r);
		else {
			let n = t.el = e.el;
			t.children !== e.children && f(n, t.children);
		}
	}, b = (e, t, n, r) => {
		e == null ? o(t.el = d(t.children || ""), n, r) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
	}, S = ({ el: e, anchor: t }, n, r) => {
		let i;
		for (; e && e !== t;) i = h(e), o(e, n, r), e = i;
		o(t, n, r);
	}, C = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, w = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) T(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), te(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, T = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && D(e.children, d, null, r, i, Ro(e, a), s, u), _ && _r(e, null, r, "created"), E(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ee(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && js(f, r, e);
		}
		_ && _r(e, null, r, "beforeMount");
		let v = Bo(i, g);
		v ? g.beforeEnter(d) : g && !g.persisted && (d[Jo] = !0), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Po(() => {
			try {
				f && js(f, r, e), v && g.enter(d), _ && _r(e, null, r, "mounted");
			} finally {}
		}, i);
	}, E = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Ko(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				E(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, D = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? ks(e[l]) : Os(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, te = (e, t, n, i, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || r, h = t.props || r, g;
		if (n && zo(n, !1), (g = h.onVnodeBeforeUpdate) && js(g, n, t, e), f && _r(t, e, n, "beforeUpdate"), n && zo(n, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? ne(e.dynamicChildren, d, l, n, i, Ro(t, a), o) : s || oe(e, t, l, null, n, i, Ro(t, a), o, !1), u > 0) {
			if (u & 16) O(l, m, h, n, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], i = m[r], o = h[r];
					(o !== i || r === "value") && c(l, r, i, o, a, n);
				}
			}
			u & 1 && e.children !== t.children && p(l, t.children);
		} else !s && d == null && O(l, m, h, n, a);
		((g = h.onVnodeUpdated) || f) && Po(() => {
			g && js(g, n, t, e), f && _r(t, e, n, "updated");
		}, i);
	}, ne = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || Go(c), d = u && (c.type === W || !ys(c, l) || c.shapeFlag & 198) ? m(u) : n;
			v(c, l, d, null, r, i, a, o, !0);
		}
	}, O = (e, t, n, i, a) => {
		if (t !== n) {
			if (t !== r) for (let r in t) !ee(r) && !(r in n) && c(e, r, t[r], null, a, i);
			for (let r in n) {
				if (ee(r)) continue;
				let o = n[r], s = t[r];
				o !== s && r !== "value" && c(e, r, s, o, a, i);
			}
			"value" in n && c(e, "value", t.value, n.value, a);
		}
	}, re = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), D(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (ne(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Vo(e, t, !0)) : oe(e, t, n, f, i, a, s, c, l);
	}, k = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : A(t, n, r, i, a, o, c) : j(e, t, c);
	}, A = (e, t, n, r, i, a, o) => {
		let s = e.component = Fs(e, r, i);
		if (Li(e) && (s.ctx.renderer = ge), Ws(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, M, o, a), !e.el) {
				let r = s.subTree = Y(us);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else M(s, e, t, n, i, a, o);
	}, j = (e, t, n) => {
		let r = t.component = e.component;
		if (fo(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				t.el = e.el, t.placeholder = e.placeholder, ae(r, t, n);
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, t.placeholder = e.placeholder, r.vnode = t;
	}, M = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Uo(e);
					if (n) {
						t && (t.el = c.el, ae(e, t, o)), n.asyncDep.then(() => {
							let t = () => {
								e.job.flags & 8 || (i && i.pendingBranch ? Po(t, i) : l());
							};
							t.flags = 48, Po(t, i);
						});
						return;
					}
				}
				let u = t, d;
				zo(e, !1), t ? (t.el = c.el, ae(e, t, o)) : t = c, n && ie(n), (d = t.props && t.props.onVnodeBeforeUpdate) && js(d, s, t, c), zo(e, !0);
				let f = so(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el || Go(p)), P(p), e, i, a), t.el = f.el, u === null && ho(e, f.el), r && Po(r, i), (d = t.props && t.props.onVnodeUpdated) && Po(() => js(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = Pi(t);
				if (zo(e, !1), l && ie(l), !m && (o = c && c.onVnodeBeforeMount) && js(o, d, t), zo(e, !0), s && ve) {
					let t = () => {
						e.subTree = so(e), ve(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = so(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Po(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Po(() => js(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && Pi(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Po(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Fe(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Qn(u), zo(e, !0), l();
	}, ae = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, bo(e, t.props, r, n), No(e, t.children, n), Qe(), tr(e), $e();
	}, oe = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				ce(l, d, n, r, i, a, o, s, c);
				return;
			}
			if (f & 256) {
				se(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && me(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? ce(l, d, n, r, i, a, o, s, c) : me(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && D(d, n, r, i, a, o, s, c));
	}, se = (e, t, n, r, a, o, s, c, l) => {
		e ||= i, t ||= i;
		let u = e.length, d = t.length, f = Math.min(u, d), p = 0;
		for (; p < f; p++) {
			let r = t[p] = l ? ks(t[p]) : Os(t[p]);
			v(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? me(e, a, o, !0, !1, f) : D(t, n, r, a, o, s, c, l, f);
	}, ce = (e, t, n, r, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], i = t[u] = l ? ks(t[u]) : Os(t[u]);
			if (ys(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], i = t[p] = l ? ks(t[p]) : Os(t[p]);
			if (ys(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, i = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? ks(t[u]) : Os(t[u]), n, i, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) N(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? ks(t[u]) : Os(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let r = e[u];
				if (y >= b) {
					N(r, a, o, !0);
					continue;
				}
				let i;
				if (r.key != null) i = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && ys(r, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? N(r, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(r, t[i], n, null, a, o, s, c, l), y++);
			}
			let w = x ? Ho(C) : i;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, i = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Go(f) : r;
				C[u] === 0 ? v(null, i, n, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? ue(i, n, p, 2) : _--);
			}
		}
	}, ue = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) ue(e.component.subTree, t, n, r);
		else if (d & 128) e.suspense.move(t, n, r);
		else if (d & 64) c.move(e, t, n, ge);
		else if (c === W) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) ue(u[e], t, n, r);
			o(e.anchor, t, n);
		} else if (c === ds) S(e, t, n);
		else if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[Hr] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), Po(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[Hr];
					a._isLeaving && a[Hr](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, N = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (Qe(), ci(s, null, n, e, !0), $e()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256 && t.ctx.deactivate(e)) return;
		let h = u & 1 && f, g = !Pi(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && js(_, t, e), u & 6) pe(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && _r(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, ge, r) : l && !l.hasOnce && (a !== W || d > 0 && d & 64) ? me(l, t, n, !1, !0) : (a === W && d & 384 || !i && u & 16) && me(c, t, n), r && de(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Po(() => {
			_ && js(_, t, e), h && _r(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, de = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e, a = t === W;
		if (a && !i) {
			fe(n, r);
			return;
		}
		if (t === ds) {
			C(e), i && !i.persisted && i.afterLeave && i.afterLeave();
			return;
		}
		let o = a ? ni(e) : e, c = () => {
			a ? m(n) && fe(n, r) : s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (o && o.shapeFlag & 1 && i && !i.persisted) {
			let { leave: e, delayLeave: t } = i, n = o.el, r = () => e(n, c);
			t ? t(n, c, r) : r();
		} else c();
	}, fe = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, pe = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Wo(c), Wo(l), r && ie(r), i.stop(), a ? (a.flags |= 8, N(o, e, t, n)) : o && (o.transition = e.vnode.transition, N(o, e, t, n)), s && Po(s, t);
		let u = () => {
			e.isUnmounted = !0;
		};
		u.flags = 16, Po(u, t);
	}, me = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) N(e[o], t, n, r, i);
	}, P = (e) => {
		if (e.shapeFlag & 6) return P(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[kr];
		return n ? h(n) : t;
	}, he = (e, t, n) => {
		ir(() => {
			e == null ? t._vnode && N(t._vnode, null, null, !0) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : Ps());
	}, ge = {
		p: v,
		um: N,
		m: ue,
		r: de,
		mt: A,
		mc: D,
		pc: oe,
		pbc: ne,
		n: P,
		o: e
	}, _e, ve;
	return t && ([_e, ve] = t(ge)), {
		render: he,
		hydrate: _e,
		createApp: $a(he, _e)
	};
}
function Ro({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function zo({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Bo(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Vo(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (p(r) && p(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = ks(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Vo(t, a)), a.type === ls && (a.patchFlag === -1 && (a = i[e] = ks(a)), a.el = t.el), a.type === us && !a.el && (a.el = t.el);
	}
}
function Ho(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function Uo(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Uo(t);
}
function Wo(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Go(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	if (t) return Go(t.subTree);
	let n = e.suspense;
	return n && n.activeBranch ? Go(n.activeBranch) : null;
}
var Ko = (e) => e.__isSuspense, qo = 0, Jo = /* @__PURE__ */ Symbol("_deferredEnter"), Yo = {
	name: "Suspense",
	__isSuspense: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		if (e == null) $o(t, n, r, i, a, o, s, c, l);
		else {
			let u = e.suspense;
			if (a && a.deps > 0 && !a.isHydrating) {
				let n = u.parentComponent;
				if (n && n.suspense === a && n.suspenseId !== a.pendingId ? a.pendingBranch && !ys(t.ssContent, u.pendingBranch || u.activeBranch) : !u.isInFallback) {
					t.suspense = u, u.vnode = t, t.el = e.el;
					return;
				}
			}
			es(e, t, n, r, i, o, s, c, l);
		}
	},
	hydrate: ns,
	normalize: rs
};
function Xo(e, t) {
	let n = e.props && e.props[t];
	v(n) && n();
}
function Zo(e) {
	let t = [];
	Qo(e, t, !0), t.length && er(t);
}
function Qo(e, t, n) {
	let { el: r, transition: i, children: a, shapeFlag: o } = e;
	if (o & 6) Qo(e.component.subTree, t, n);
	else if (!(o & 192) && (o & 1 && (!n && r && r[Jo] && (r[Jo] = void 0, i && !i.persisted && (i.beforeEnter(r), t.push(() => i.enter(r)))), n = !1), o & 16)) for (let e = 0; e < a.length; e++) Qo(a[e], t, n);
}
function $o(e, t, n, r, i, a, o, s, c) {
	let { p: l, o: { createElement: u } } = c, d = u("div"), f = e.suspense = ts(e, i, r, t, d, n, a, o, s, c);
	l(null, f.pendingBranch = e.ssContent, d, null, r, f, a, o), f.deps > 0 ? (Xo(e, "onPending"), Xo(e, "onFallback"), l(null, e.ssFallback, t, n, r, null, a, o), ss(f, e.ssFallback)) : f.resolve(!1, !0);
}
function es(e, t, n, r, i, a, o, s, { p: c, um: l, o: { createElement: u } }) {
	let d = t.suspense = e.suspense;
	d.vnode = t, t.el = e.el;
	let f = t.ssContent, p = t.ssFallback, { activeBranch: m, pendingBranch: h, isInFallback: g, isHydrating: _ } = d;
	if (h) d.pendingBranch = f, ys(h, f) ? (d.deps++, c(h, f, _ ? n : d.hiddenContainer, null, i, d, a, o, s), d.deps--, d.deps <= 0 ? d.resolve() : g && !_ && !d.isFallbackMountPending && (c(m, p, n, r, i, null, a, o, s), ss(d, p))) : (d.pendingId = qo++, _ ? (d.isHydrating = !1, d.activeBranch = h) : l(h, i, d), d.deps = 0, as(d), d.hiddenContainer = u("div"), g ? (c(null, f, d.hiddenContainer, null, i, d, a, o, s), d.deps <= 0 ? d.resolve() : d.isFallbackMountPending || (c(m, p, n, r, i, null, a, o, s), ss(d, p))) : m && ys(m, f) ? (c(m, f, n, r, i, d, a, o, s), d.resolve(!0)) : (c(null, f, d.hiddenContainer, null, i, d, a, o, s), d.deps <= 0 && d.resolve()));
	else if (m && ys(m, f)) c(m, f, n, r, i, d, a, o, s), ss(d, f);
	else if (Xo(t, "onPending"), d.pendingBranch = f, d.pendingId = qo++, c(null, f, d.hiddenContainer, null, i, d, a, o, s), d.deps <= 0) d.resolve();
	else {
		let { timeout: e } = d;
		e > 0 ? d.timeoutTimer = setTimeout(() => {
			d.timeoutTimer = void 0, d.fallback(d.vnode.ssFallback);
		}, e) : e === 0 && d.fallback(p);
	}
}
function ts(e, t, n, r, i, a, o, s, c, l, u = !1) {
	let { p: d, m: f, um: p, n: m, o: { parentNode: h, remove: g } } = l, _, v = cs(e);
	v && t && t.pendingBranch && (_ = t.pendingId, t.deps++);
	let y = e.props ? se(e.props.timeout) : void 0, b = a, x = {
		vnode: e,
		parent: t,
		parentComponent: n,
		namespace: o,
		container: r,
		hiddenContainer: i,
		deps: 0,
		pendingId: qo++,
		timeout: typeof y == "number" ? y : -1,
		timeoutTimer: void 0,
		activeBranch: null,
		isFallbackMountPending: !1,
		pendingBranch: null,
		isInFallback: !u,
		isHydrating: u,
		isUnmounted: !1,
		effects: [],
		resolve(e = !1, n = !1) {
			let { vnode: r, activeBranch: i, pendingBranch: o, pendingId: s, effects: c, parentComponent: l, container: u, isInFallback: d } = x, g = !1;
			if (x.isHydrating) x.isHydrating = !1;
			else if (!e) {
				g = i && o.transition && o.transition.mode === "out-in";
				let e = !1;
				g && (i.transition.afterLeave = () => {
					s === x.pendingId && !x.isUnmounted && (Zo(o), f(o, u, a === b && !e ? m(i) : a, 0), er(c), d && r.ssFallback && (r.ssFallback.el = null));
				}), i && !x.isFallbackMountPending && (h(i.el || Go(i)) === u && (a = m(i), e = !0), p(i, l, x, !0), !g && d && r.ssFallback && Po(() => r.ssFallback.el = null, x)), g || (Zo(o), f(o, u, a, 0));
			}
			clearTimeout(x.timeoutTimer), x.timeoutTimer = void 0, x.isFallbackMountPending = !1, ss(x, o), x.pendingBranch = null, x.isInFallback = !1;
			let y = 0;
			for (let e = 0; e < c.length; e++) {
				let t = c[e];
				t.flags & 32 ? er(t) : c[y++] = t;
			}
			c.length = y;
			let S = x.parent, C = !1;
			for (; S;) {
				if (S.pendingBranch) {
					for (let e = 0; e < c.length; e++) S.effects.push(c[e]);
					C = !0;
					break;
				}
				S = S.parent;
			}
			!C && !g && er(c), x.effects = [], v && t && t.pendingBranch && _ === t.pendingId && (_ = void 0, t.deps--, t.deps === 0 && !n && t.resolve()), Xo(r, "onResolve");
		},
		fallback(e) {
			if (x.isUnmounted || !x.pendingBranch) return;
			let { vnode: t, activeBranch: n, parentComponent: r, container: i, namespace: a } = x;
			Xo(t, "onFallback");
			let o = m(n), l = () => {
				if (x.isFallbackMountPending = !1, x.isUnmounted || !x.isInFallback) return;
				let e = x.vnode.ssFallback;
				d(null, e, i, o, r, null, a, s, c), ss(x, e);
			}, u = e.transition && e.transition.mode === "out-in";
			u && (x.isFallbackMountPending = !0, n.transition.afterLeave = l), x.isInFallback = !0, p(n, r, null, !0), u || l();
		},
		move(e, t, n) {
			x.activeBranch && f(x.activeBranch, e, t, n), x.container = e;
		},
		next() {
			return x.activeBranch && m(x.activeBranch);
		},
		registerDep(e, t, n, r) {
			let i = !!x.pendingBranch;
			i && x.deps++;
			let a = e.vnode.el, o = (i) => {
				e.asyncResolved = !0;
				let { vnode: o } = e;
				Ks(e, i, !1), a && (o.el = a);
				let s = !a && e.subTree.el;
				t(e, o, h(a || e.subTree.el), a ? null : m(e.subTree), x, r, n), s && (o.placeholder = null, g(s)), ho(e, o.el);
			};
			e.asyncDep.catch((t) => (Hn(t, e, 0, !1, !0), () => null)).then((t) => {
				if (e.isUnmounted || x.isUnmounted) return;
				let n = i && x.pendingId === e.suspenseId;
				if (Vs(), !e.scope.active) n && --x.deps === 0 && x.resolve();
				else if (!n && x.pendingBranch) {
					let n = () => {
						e.isUnmounted || x.isUnmounted || !e.scope.active || (x.pendingBranch ? os(n, x) : o(t));
					};
					n.flags = 48, os(n, x);
				} else o(t), n && --x.deps === 0 && x.resolve();
			});
		},
		unmount(e, t) {
			if (x.isUnmounted = !0, clearTimeout(x.timeoutTimer), x.timeoutTimer = void 0, _ !== void 0) {
				let e = x.parent, t = _;
				_ = void 0, er(() => {
					e.pendingId === t && !e.isUnmounted && --e.deps === 0 && e.resolve();
				});
			}
			x.activeBranch && p(x.activeBranch, n, e, t), x.pendingBranch && (p(x.pendingBranch, n, x, t), as(x));
		}
	};
	return x;
}
function ns(e, t, n, r, i, a, o, s, c) {
	let l = t.suspense = ts(t, r, n, e.parentNode, document.createElement("div"), null, i, a, o, s, !0), u = c(e, l.pendingBranch = t.ssContent, n, l, a, o);
	return l.deps === 0 && l.resolve(!1, !0), u;
}
function rs(e) {
	let { shapeFlag: t, children: n } = e, r = t & 32;
	e.ssContent = is(r ? n.default : n), e.ssFallback = r ? is(n.fallback) : Y(us);
}
function is(e) {
	let t;
	if (v(e)) {
		let n = hs && e._c;
		n && (e._d = !1, G()), e = e(), n && (e._d = !0, t = ps, ms());
	}
	return p(e) && (e = co(e)), e = Os(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((t) => t !== e)), e;
}
function as(e) {
	let { effects: t } = e;
	for (let e = 0; e < t.length; e++) {
		let n = t[e];
		n.flags & 16 && er(n);
	}
	t.length = 0;
}
function os(e, t) {
	t && t.pendingBranch ? p(e) ? t.effects.push(...e) : t.effects.push(e) : er(e);
}
function ss(e, t) {
	e.activeBranch = t;
	let { vnode: n, parentComponent: r } = e, i = t.el;
	for (; !i && t.component;) t = t.component.subTree, i = t.el;
	n.el = i, r && r.subTree === n && (r.vnode.el = i, ho(r, i));
}
function cs(e) {
	let t = e.props && e.props.suspensible;
	return t != null && t !== !1;
}
var W = /* @__PURE__ */ Symbol.for("v-fgt"), ls = /* @__PURE__ */ Symbol.for("v-txt"), us = /* @__PURE__ */ Symbol.for("v-cmt"), ds = /* @__PURE__ */ Symbol.for("v-stc"), fs = [], ps = null;
function G(e = !1) {
	fs.push(ps = e ? null : []);
}
function ms() {
	fs.pop(), ps = fs[fs.length - 1] || null;
}
var hs = 1;
function gs(e, t = !1) {
	hs += e, e < 0 && ps && t && (ps.hasOnce = !0);
}
function _s(e) {
	return e.dynamicChildren = hs > 0 ? ps || i : null, ms(), hs > 0 && ps && ps.push(e), e;
}
function K(e, t, n, r, i, a) {
	return _s(J(e, t, n, r, i, a, !0));
}
function q(e, t, n, r, i) {
	return _s(Y(e, t, n, r, i, !0));
}
function vs(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function ys(e, t) {
	return e.type === t.type && e.key === t.key;
}
function bs(e) {}
var xs = ({ key: e }) => e ?? null, Ss = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : y(e) || /* @__PURE__ */ cn(e) || v(e) ? {
	i: ur,
	r: e,
	k: t,
	f: !!n
} : e);
function J(e, t = null, n = null, r = 0, i = null, a = e === W ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && xs(t),
		ref: t && Ss(t),
		scopeId: dr,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: ur
	};
	return s ? (As(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= y(n) ? 8 : 16), hs > 0 && !o && ps && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && ps.push(c), c;
}
var Y = Cs;
function Cs(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== sa || (e = us), vs(e)) {
		let r = Ts(e, t, !0);
		return n && As(r, n), hs > 0 && !a && ps && (r.shapeFlag & 6 ? ps[ps.indexOf(e)] = r : ps.push(r)), r.patchFlag = -2, r;
	}
	if (rc(e) && (e = e.__vccOpts), t) {
		t = ws(t);
		let { class: e, style: n } = t;
		e && !y(e) && (t.class = P(e)), x(n) && (/* @__PURE__ */ nn(n) && !p(n) && (n = l({}, n)), t.style = N(n));
	}
	let o = y(e) ? 1 : Ko(e) ? 128 : Ar(e) ? 64 : x(e) ? 4 : v(e) ? 2 : 0;
	return J(e, t, n, r, i, o, a, !0);
}
function ws(e) {
	return e ? /* @__PURE__ */ nn(e) ? l({}, e) : vo(e) ? l({}, e[Qs] || e) : e : null;
}
function Ts(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Z(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && xs(l),
		ref: t && t.ref ? n && a ? p(a) ? a.concat(Ss(t)) : [a, Ss(t)] : Ss(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== W ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Ts(e.ssContent),
		ssFallback: e.ssFallback && Ts(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && ei(u, c.clone(u)), u;
}
function Es(e = " ", t = 0) {
	return Y(ls, null, e, t);
}
function Ds(e, t) {
	let n = Y(ds, null, e);
	return n.staticCount = t, n;
}
function X(e = "", t = !1) {
	return t ? (G(), q(us, null, e)) : Y(us, null, e);
}
function Os(e) {
	return e == null || typeof e == "boolean" ? Y(us) : p(e) ? Y(W, null, e.slice()) : vs(e) ? ks(e) : Y(ls, null, String(e));
}
function ks(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ts(e);
}
function As(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (p(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), As(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !vo(t) ? t._ctx = ur : r === 3 && ur && (ur.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (v(t)) {
		if (r & 65) {
			As(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: ur
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [Es(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function Z(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = P([t.class, r.class]));
		else if (e === "style") t.style = N([t.style, r.style]);
		else if (s(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(p(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !c(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function js(e, t, n, r = null) {
	Vn(e, t, 7, [n, r]);
}
var Ms = /* @__PURE__ */ Za(), Ns = 0;
function Ps() {
	return Ns;
}
function Fs(e, t, n) {
	let i = e.type, a = (t ? t.appContext : e.appContext) || Ms, o = {
		uid: Ns++,
		vnode: e,
		type: i,
		parent: t,
		appContext: a,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new ke(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: t ? t.provides : Object.create(a.provides),
		ids: t ? t.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: wo(i, a),
		emitsOptions: ao(i, a),
		emit: null,
		emitted: null,
		propsDefaults: r,
		inheritAttrs: i.inheritAttrs,
		ctx: r,
		data: r,
		props: r,
		attrs: r,
		slots: r,
		refs: r,
		setupState: r,
		setupContext: null,
		suspense: n,
		suspenseId: n ? n.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
		isMounted: !1,
		isUnmounted: !1,
		isDeactivated: !1,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = ro.bind(null, o), e.ce && e.ce(o), o;
}
var Is = null, Ls = () => Is || ur, Rs, zs;
{
	let e = le(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Rs = t("__VUE_INSTANCE_SETTERS__", (e) => Is = e), zs = t("__VUE_SSR_SETTERS__", (e) => Us = e);
}
var Bs = (e) => {
	let t = Is;
	return Rs(e), e.scope.on(), () => {
		e.scope.off(), Rs(t);
	};
}, Vs = () => {
	Is && Is.scope.off(), Rs(null);
};
function Hs(e) {
	return e.vnode.shapeFlag & 4;
}
var Us = !1;
function Ws(e, t = !1, n = !1) {
	t && zs(t);
	let { props: r, children: i } = e.vnode, a = Hs(e);
	yo(e, r, a, t), Mo(e, i, n || t);
	let o = a ? Gs(e, t) : void 0;
	return t && zs(!1), o;
}
function Gs(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ya);
	let { setup: r } = n;
	if (r) {
		Qe();
		let n = e.setupContext = r.length > 1 ? ec(e) : null, i = Bs(e), a = Bn(r, e, 0, [e.props, n]), o = S(a);
		if ($e(), i(), (o || e.sp) && !Pi(e) && ii(e), o) {
			if (a.then(Vs, Vs), t) return a.then((n) => {
				zs(!0);
				try {
					Ks(e, n, t);
				} finally {
					zs(!1);
				}
			}).catch((t) => {
				Hn(t, e, 0, void 0, !0), e.ssrRender = (e, t) => t("<!---->");
			});
			e.asyncDep = a;
		} else Ks(e, a, t);
	} else Zs(e, t);
}
function Ks(e, t, n) {
	v(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : x(t) && (e.setupState = hn(t)), Zs(e, n);
}
var qs, Js;
function Ys(e) {
	qs = e, Js = (e) => {
		e.render._rc && (e.withProxy = new Proxy(e.ctx, ba));
	};
}
var Xs = () => !qs;
function Zs(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && qs && !r.render) {
			let t = r.template || Va(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r, s = l(l({
					isCustomElement: n,
					delimiters: a
				}, i), o);
				r.render = qs(t, s);
			}
		}
		e.render = r.render || a, Js && Js(e);
	}
	{
		let t = Bs(e);
		Qe();
		try {
			La(e);
		} finally {
			$e(), t();
		}
	}
}
var Qs = /* @__PURE__ */ Symbol(), $s = { get(e, t) {
	return lt(e, "get", ""), t === Qs ? e : e[t];
} };
function ec(e) {
	return {
		attrs: new Proxy(e.attrs, $s),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function tc(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(hn(an(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in _a) return _a[n](e);
		},
		has(e, t) {
			return t in e || t in _a;
		}
	}) : e.proxy;
}
function nc(e, t = !0) {
	return v(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function rc(e) {
	return v(e) && "__vccOpts" in e;
}
var Q = (e, t) => /* @__PURE__ */ wn(e, t, Us);
function ic(e, t, n) {
	try {
		gs(-1);
		let r = arguments.length;
		return r === 2 ? x(t) && !p(t) ? vs(t) ? Y(e, null, [t]) : Y(e, t) : Y(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && vs(n) && (n = [n]), Y(e, t, n));
	} finally {
		gs(1);
	}
}
function ac() {}
function oc(e, t, n, r) {
	let i = n[r];
	if (i && sc(i, e)) return i;
	let a = t();
	return a.memo = e.slice(), a.cacheIndex = r, n[r] = a;
}
function sc(e, t) {
	let n = e.memo;
	if (n.length != t.length) return !1;
	for (let e = 0; e < n.length; e++) if (M(n[e], t[e])) return !1;
	return hs > 0 && ps && ps.push(e), !0;
}
var cc = "3.5.45", lc = a, uc = zn, dc = sr, fc = lr, pc = {
	createComponentInstance: Fs,
	setupComponent: Ws,
	renderComponentRoot: so,
	setCurrentRenderingInstance: fr,
	isVNode: vs,
	normalizeVNode: Os,
	getComponentPublicInstance: tc,
	ensureValidVNode: ma,
	pushWarningContext: Fn,
	popWarningContext: In
}, mc = void 0, hc = typeof window < "u" && window.trustedTypes;
if (hc) try {
	mc = /* @__PURE__ */ hc.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var gc = mc ? (e) => mc.createHTML(e) : (e) => e, _c = "http://www.w3.org/2000/svg", vc = "http://www.w3.org/1998/Math/MathML", yc = typeof document < "u" ? document : null, bc = yc && /* @__PURE__ */ yc.createElement("template"), xc = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? yc.createElementNS(_c, e) : t === "mathml" ? yc.createElementNS(vc, e) : n ? yc.createElement(e, { is: n }) : yc.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => yc.createTextNode(e),
	createComment: (e) => yc.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => yc.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			bc.innerHTML = gc(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = bc.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Sc = "transition", Cc = "animation", wc = /* @__PURE__ */ Symbol("_vtc"), Tc = {
	name: String,
	type: String,
	css: {
		type: Boolean,
		default: !0
	},
	duration: [
		String,
		Number,
		Object
	],
	enterFromClass: String,
	enterActiveClass: String,
	enterToClass: String,
	appearFromClass: String,
	appearActiveClass: String,
	appearToClass: String,
	leaveFromClass: String,
	leaveActiveClass: String,
	leaveToClass: String
}, Ec = /* @__PURE__ */ l({}, Kr, Tc), Dc = /* @__PURE__ */ ((e) => (e.displayName = "Transition", e.props = Ec, e))((e, { slots: t }) => ic(Yr, Ac(e), t)), Oc = (e, t = []) => {
	p(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, kc = (e) => e ? p(e) ? e.some((e) => e.length > 1) : e.length > 1 : !1;
function Ac(e) {
	let t = {};
	for (let n in e) n in Tc || (t[n] = e[n]);
	if (e.css === !1) return t;
	let { name: n = "v", type: r, duration: i, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: s = `${n}-enter-to`, appearFromClass: c = a, appearActiveClass: u = o, appearToClass: d = s, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, h = jc(i), g = h && h[0], _ = h && h[1], { onBeforeEnter: v, onEnter: y, onEnterCancelled: b, onLeave: x, onLeaveCancelled: S, onBeforeAppear: C = v, onAppear: w = y, onAppearCancelled: T = b } = t, E = (e, t, n, r) => {
		e._enterCancelled = r, Pc(e, t ? d : s), Pc(e, t ? u : o), n && n();
	}, D = (e, t) => {
		e._isLeaving = !1, Pc(e, f), Pc(e, m), Pc(e, p), t && t();
	}, ee = (e) => (t, n) => {
		let i = e ? w : y, o = () => E(t, e, n);
		Oc(i, [t, o]), Fc(() => {
			Pc(t, e ? c : a), Nc(t, e ? d : s), kc(i) || Lc(t, r, g, o);
		});
	};
	return l(t, {
		onBeforeEnter(e) {
			Oc(v, [e]), Nc(e, a), Nc(e, o);
		},
		onBeforeAppear(e) {
			Oc(C, [e]), Nc(e, c), Nc(e, u);
		},
		onEnter: ee(!1),
		onAppear: ee(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let n = () => D(e, t);
			Nc(e, f), e._enterCancelled ? (Nc(e, p), Vc(e)) : (Vc(e), Nc(e, p)), Fc(() => {
				e._isLeaving && (Pc(e, f), Nc(e, m), kc(x) || Lc(e, r, _, n));
			}), Oc(x, [e, n]);
		},
		onEnterCancelled(e) {
			E(e, !1, void 0, !0), Oc(b, [e]);
		},
		onAppearCancelled(e) {
			E(e, !0, void 0, !0), Oc(T, [e]);
		},
		onLeaveCancelled(e) {
			D(e), Oc(S, [e]);
		}
	});
}
function jc(e) {
	if (e == null) return null;
	if (x(e)) return [Mc(e.enter), Mc(e.leave)];
	{
		let t = Mc(e);
		return [t, t];
	}
}
function Mc(e) {
	return se(e);
}
function Nc(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[wc] || (e[wc] = /* @__PURE__ */ new Set())).add(t);
}
function Pc(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
	let n = e[wc];
	n && (n.delete(t), n.size || (e[wc] = void 0));
}
function Fc(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var Ic = 0;
function Lc(e, t, n, r) {
	let i = e._endId = ++Ic, a = () => {
		i === e._endId && r();
	};
	if (n != null) return setTimeout(a, n);
	let { type: o, timeout: s, propCount: c } = Rc(e, t);
	if (!o) return r();
	let l = o + "end", u = 0, d = () => {
		e.removeEventListener(l, f), a();
	}, f = (t) => {
		t.target === e && ++u >= c && d();
	};
	setTimeout(() => {
		u < c && d();
	}, s + 1), e.addEventListener(l, f);
}
function Rc(e, t) {
	let n = window.getComputedStyle(e), r = (e) => (n[e] || "").split(", "), i = r(`${Sc}Delay`), a = r(`${Sc}Duration`), o = zc(i, a), s = r(`${Cc}Delay`), c = r(`${Cc}Duration`), l = zc(s, c), u = null, d = 0, f = 0;
	t === Sc ? o > 0 && (u = Sc, d = o, f = a.length) : t === Cc ? l > 0 && (u = Cc, d = l, f = c.length) : (d = Math.max(o, l), u = d > 0 ? o > l ? Sc : Cc : null, f = u ? u === Sc ? a.length : c.length : 0);
	let p = u === Sc && /\b(?:transform|all)(?:,|$)/.test(r(`${Sc}Property`).toString());
	return {
		type: u,
		timeout: d,
		propCount: f,
		hasTransform: p
	};
}
function zc(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((t, n) => Bc(t) + Bc(e[n])));
}
function Bc(e) {
	return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Vc(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Hc(e, t, n) {
	let r = e[wc];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Uc = /* @__PURE__ */ Symbol("_vod"), Wc = /* @__PURE__ */ Symbol("_vsh"), Gc = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[Uc] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Kc(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), Kc(e, !0), r.enter(e)) : r.leave(e, () => {
			Kc(e, !1);
		}) : Kc(e, t));
	},
	beforeUnmount(e, { value: t }) {
		Kc(e, t);
	}
};
function Kc(e, t) {
	e.style.display = t ? e[Uc] : "none", e[Wc] = !t;
}
function qc() {
	Gc.getSSRProps = ({ value: e }) => {
		if (!e) return { style: { display: "none" } };
	};
}
var Jc = /* @__PURE__ */ Symbol("");
function Yc(e) {
	let t = Ls();
	if (!t) return;
	let n = t.ut = (n = e(t.proxy)) => {
		Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((e) => Zc(e, n));
	}, r = () => {
		let r = e(t.proxy);
		t.ce ? Zc(t.ce, r) : Xc(t.subTree, r), n(r);
	};
	Xi(() => {
		er(r);
	}), Yi(() => {
		V(r, a, { flush: "post" });
		let e = new MutationObserver(r);
		e.observe(t.subTree.el.parentNode, { childList: !0 }), $i(() => e.disconnect());
	});
}
function Xc(e, t) {
	if (e.shapeFlag & 128) {
		let n = e.suspense;
		e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
			Xc(n.activeBranch, t);
		});
	}
	for (; e.component;) e = e.component.subTree;
	if (e.shapeFlag & 1 && e.el) Zc(e.el, t);
	else if (e.type === W) e.children.forEach((e) => Xc(e, t));
	else if (e.type === ds) {
		let { el: n, anchor: r } = e;
		for (; n && (Zc(n, t), n !== r);) n = n.nextSibling;
	}
}
function Zc(e, t) {
	if (e.nodeType === 1) {
		let n = e.style, r = "";
		for (let e in t) {
			let i = De(t[e]);
			n.setProperty(`--${e}`, i), r += `--${e}: ${i};`;
		}
		n[Jc] = r;
	}
}
var Qc = /(?:^|;)\s*display\s*:/;
function $c(e, t, n) {
	let r = e.style, i = y(n), a = !1;
	if (n && !i) {
		if (t) {
			if (y(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? tl(r, t, "");
			}
			else for (let e in t) n[e] ?? tl(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? tl(r, i, "") : al(e, i, !y(t) && t ? t[i] : void 0, o) || tl(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Jc];
			e && (n += ";" + e), r.cssText = n, a = Qc.test(n);
		}
	} else t && e.removeAttribute("style");
	Uc in e && (i && t === n || (e[Uc] = a ? r.display : ""), e[Wc] && (r.display = "none"));
}
var el = /\s*!important$/;
function tl(e, t, n) {
	if (p(n)) n.forEach((n) => tl(e, t, n));
	else if (n ??= "", t.startsWith("--")) el.test(n) ? e.setProperty(t, n.replace(el, ""), "important") : e.setProperty(t, n);
	else {
		let r = il(e, t);
		el.test(n) ? e.setProperty(k(r), n.replace(el, ""), "important") : e[r] = n;
	}
}
var nl = [
	"Webkit",
	"Moz",
	"ms"
], rl = {};
function il(e, t) {
	let n = rl[t];
	if (n) return n;
	let r = O(t);
	if (r !== "filter" && r in e) return rl[t] = r;
	r = A(r);
	for (let n = 0; n < nl.length; n++) {
		let i = nl[n] + r;
		if (i in e) return rl[t] = i;
	}
	return t;
}
function al(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && y(r) && n === r;
}
var ol = "http://www.w3.org/1999/xlink";
function sl(e, t, n, r, i, a = ge(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ol, t.slice(6, t.length)) : e.setAttributeNS(ol, t, n) : n == null || a && !_e(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : b(n) ? String(n) : n);
}
function cl(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? gc(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		r === i && "_value" in e || (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = _e(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function ll(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function ul(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var dl = /* @__PURE__ */ Symbol("_vei");
function fl(e, t, n, r, i = null) {
	let a = e[dl] || (e[dl] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = hl(t);
		r ? ll(e, n, a[t] = yl(r, i), s) : o && (ul(e, n, o, s), a[t] = void 0);
	}
}
var pl = /(Once|Passive|Capture)$/, ml = /^on:?(?:Once|Passive|Capture)$/;
function hl(e) {
	let t, n;
	for (; (n = e.match(pl)) && !ml.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : k(e.slice(2)), t];
}
var gl = 0, _l = /* @__PURE__ */ Promise.resolve(), vl = () => gl ||= (_l.then(() => gl = 0), Date.now());
function yl(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (p(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && Vn(e, t, 5, a);
			}
		} else Vn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = vl(), n;
}
var bl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, xl = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? Hc(e, r, o) : t === "style" ? $c(e, n, r) : s(t) ? c(t) || fl(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : Sl(e, t, r, o)) ? (cl(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || sl(e, t, r, o, a, t !== "value")) : e._isVueCE && (Cl(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !y(r))) ? cl(e, O(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), sl(e, t, r, o));
};
function Sl(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && bl(t) && v(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return bl(t) && y(n) ? !1 : t in e;
}
function Cl(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = O(t);
	return Array.isArray(n) ? n.some((e) => O(e) === r) : Object.keys(n).some((e) => O(e) === r);
}
var wl = {};
// @__NO_SIDE_EFFECTS__
function Tl(e, t, n) {
	let r = /* @__PURE__ */ H(e, t);
	E(r) && (r = l({}, r, t));
	class i extends Ol {
		constructor(e) {
			super(r, e, n);
		}
	}
	return i.def = r, i;
}
var El = /* @__NO_SIDE_EFFECTS__ */ ((e, t) => /* @__PURE__ */ Tl(e, t, Tu)), Dl = typeof HTMLElement < "u" ? HTMLElement : class {}, Ol = class e extends Dl {
	constructor(e, t = {}, n = wu) {
		super(), this._def = e, this._props = t, this._createApp = n, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && n !== wu ? this._root = this.shadowRoot : e.shadowRoot === !1 ? this._root = this : (this.attachShadow(l({}, e.shadowRootOptions, { mode: "open" })), this._root = this.shadowRoot);
	}
	connectedCallback() {
		if (!this.isConnected) return;
		!this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
		let t = this;
		for (; t &&= t.assignedSlot || t.parentNode || t.host;) if (t instanceof e) {
			this._parent = t;
			break;
		}
		this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
			if (this._pendingResolve = void 0, this.isConnected) return this._resolveDef();
		}) : this._resolveDef());
	}
	_setParent(e = this._parent) {
		e && (this._instance.parent = e._instance, this._inheritParentContext(e));
	}
	_inheritParentContext(e = this._parent) {
		e && this._app && Object.setPrototypeOf(this._app._context.provides, e._instance.provides);
	}
	disconnectedCallback() {
		this._connected = !1, R(() => {
			this._connected || (this._ob &&= (this._ob.disconnect(), null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets &&= (this._teleportTargets.clear(), void 0));
		});
	}
	_processMutations(e) {
		for (let t of e) this._setAttr(t.attributeName);
	}
	_resolveDef() {
		if (this._pendingResolve) return this._pendingResolve;
		for (let e = 0; e < this.attributes.length; e++) this._setAttr(this.attributes[e].name);
		this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
		let e = (e, t = !1) => {
			this._resolved = !0, this._pendingResolve = void 0;
			let { props: n, styles: r } = e, i;
			if (n && !p(n)) for (let e in n) {
				let t = n[e];
				(t === Number || t && t.type === Number) && (e in this._props && (this._props[e] = se(this._props[e])), (i ||= /* @__PURE__ */ Object.create(null))[O(e)] = !0);
			}
			this._numberProps = i, this._resolveProps(e), this.shadowRoot && this._applyStyles(r), this._connected && this._mount(e);
		}, t = this._def.__asyncLoader;
		if (t) return this._pendingResolve = t().then((t) => {
			t.configureApp = this._def.configureApp, e(this._def = t, !0);
		}), this._pendingResolve;
		e(this._def);
	}
	_mount(e) {
		this._app = this._createApp(e), this._inheritParentContext(), e.configureApp && e.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
		let t = this._instance && this._instance.exposed;
		if (t) for (let e in t) f(this, e) || Object.defineProperty(this, e, { get: () => L(t[e]) });
	}
	_resolveProps(e) {
		let { props: t } = e, n = p(t) ? t : Object.keys(t || {});
		for (let e of Object.keys(this)) e[0] !== "_" && n.includes(e) && this._setProp(e, this[e]);
		for (let e of n.map(O)) Object.defineProperty(this, e, {
			get() {
				return this._getProp(e);
			},
			set(t) {
				this._setProp(e, t, !0, !this._patching);
			}
		});
	}
	_setAttr(e) {
		if (e.startsWith("data-v-")) return;
		let t = this.hasAttribute(e), n = t ? this.getAttribute(e) : wl, r = O(e);
		t && this._numberProps && this._numberProps[r] && (n = se(n)), this._setProp(r, n, !1, !0);
	}
	_getProp(e) {
		return this._props[e];
	}
	_setProp(e, t, n = !0, r = !1) {
		if (t !== this._props[e] && (this._dirty = !0, t === wl ? delete this._props[e] : (this._props[e] = t, e === "key" && this._app && (this._app._ceVNode.key = t)), r && this._instance && this._update(), n)) {
			let n = this._ob;
			n && (this._processMutations(n.takeRecords()), n.disconnect()), t === !0 ? this.setAttribute(k(e), "") : typeof t == "string" || typeof t == "number" ? this.setAttribute(k(e), t + "") : t || this.removeAttribute(k(e)), n && n.observe(this, { attributes: !0 });
		}
	}
	_update() {
		let e = this._createVNode();
		this._app && (e.appContext = this._app._context), Su(e, this._root);
	}
	_createVNode() {
		let e = {};
		this.shadowRoot || (e.onVnodeMounted = e.onVnodeUpdated = this._renderSlots.bind(this));
		let t = Y(this._def, l(e, this._props));
		return this._instance || (t.ce = (e) => {
			this._instance = e, e.ce = this, e.isCE = !0;
			let t = (e, t) => {
				this.dispatchEvent(new CustomEvent(e, E(t[0]) ? l({ detail: t }, t[0]) : { detail: t }));
			};
			e.emit = (e, ...n) => {
				t(e, n), k(e) !== e && t(k(e), n);
			}, this._setParent();
		}), t;
	}
	_applyStyles(e, t, n) {
		if (!e) return;
		if (t) {
			if (t === this._def || this._styleChildren.has(t)) return;
			this._styleChildren.add(t);
		}
		let r = this._nonce, i = this.shadowRoot, a = n ? this._getStyleAnchor(n) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(i), o = null;
		for (let s = e.length - 1; s >= 0; s--) {
			let c = document.createElement("style");
			r && c.setAttribute("nonce", r), c.textContent = e[s], i.insertBefore(c, o || a), o = c, s === 0 && (n || this._styleAnchors.set(this._def, c), t && this._styleAnchors.set(t, c));
		}
	}
	_getStyleAnchor(e) {
		if (!e) return null;
		let t = this._styleAnchors.get(e);
		return t && t.parentNode === this.shadowRoot ? t : (t && this._styleAnchors.delete(e), null);
	}
	_getRootStyleInsertionAnchor(e) {
		for (let t = 0; t < e.childNodes.length; t++) {
			let n = e.childNodes[t];
			if (!(n instanceof HTMLStyleElement)) return n;
		}
		return null;
	}
	_parseSlots() {
		let e = this._slots = {}, t;
		for (; t = this.firstChild;) {
			let n = t.nodeType === 1 && t.getAttribute("slot") || "default";
			(e[n] || (e[n] = [])).push(t), this.removeChild(t);
		}
	}
	_renderSlots() {
		let e = this._getSlots(), t = this._instance.type.__scopeId;
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = r.getAttribute("name") || "default", a = this._slots[i], o = r.parentNode;
			if (a) for (let e of a) {
				if (t && e.nodeType === 1) {
					let n = t + "-s", r = document.createTreeWalker(e, 1);
					e.setAttribute(n, "");
					let i;
					for (; i = r.nextNode();) i.setAttribute(n, "");
				}
				o.insertBefore(e, r);
			}
			else for (; r.firstChild;) o.insertBefore(r.firstChild, r);
			o.removeChild(r);
		}
	}
	_getSlots() {
		let e = [this];
		this._teleportTargets && e.push(...this._teleportTargets);
		let t = /* @__PURE__ */ new Set();
		for (let n of e) {
			let e = n.querySelectorAll("slot");
			for (let n = 0; n < e.length; n++) t.add(e[n]);
		}
		return Array.from(t);
	}
	_injectChildStyle(e, t) {
		this._applyStyles(e.styles, e, t);
	}
	_beginPatch() {
		this._patching = !0, this._dirty = !1;
	}
	_endPatch() {
		this._patching = !1, this._dirty && this._instance && this._update();
	}
	_hasShadowRoot() {
		return this._def.shadowRoot !== !1;
	}
	_removeChildStyle(e) {}
};
function kl(e) {
	let t = Ls();
	return t && t.ce || null;
}
function Al() {
	let e = kl();
	return e && e.shadowRoot;
}
function jl(e = "$style") {
	{
		let t = Ls();
		if (!t) return r;
		let n = t.type.__cssModules;
		return n && n[e] || r;
	}
}
var Ml = /* @__PURE__ */ new WeakMap(), Nl = /* @__PURE__ */ new WeakMap(), Pl = /* @__PURE__ */ Symbol("_moveCb"), Fl = /* @__PURE__ */ Symbol("_enterCb"), Il = /* @__PURE__ */ new WeakMap(), Ll = /* @__PURE__ */ ((e) => (delete e.props.mode, e))({
	name: "TransitionGroup",
	props: /* @__PURE__ */ l({}, Ec, {
		tag: String,
		moveClass: String
	}),
	setup(e, { slots: t }) {
		let n = Ls(), r = Wr(), i, a, o, s, c = () => (s === void 0 && (s = i.length > 0 && Kl(i[0].el, n.vnode.el, zl(e))), s);
		return Zi(() => {
			if (Il.delete(n), !c()) {
				i = [], o = void 0;
				return;
			}
			let t = zl(e);
			i.forEach(Rl);
			let r = o && Gl(o, n.vnode.el);
			o = void 0, i.forEach((e) => Bl(e, r));
			let a = i.filter(Vl);
			Vc(n.vnode.el), a.forEach((e) => {
				let n = e.el, r = n.style;
				Nc(n, t), r.transform = r.webkitTransform = r.transitionDuration = "";
				let i = n[Pl] = (e) => {
					e && e.target !== n || (!e || e.propertyName.endsWith("transform")) && (n.removeEventListener("transitionend", i), n[Pl] = null, Pc(n, t));
				};
				n.addEventListener("transitionend", i);
			}), i = [];
		}), () => {
			let l = /* @__PURE__ */ rn(e), u = Ac(l), d = l.tag || W;
			if (i = [], s = void 0, a) for (let e = 0; e < a.length; e++) {
				let t = a[e];
				t.el && t.el instanceof Element && !t.el[Wc] && (i.push(t), ei(t, Zr(t, u, r, n)), Ml.set(t, Hl(t.el)));
			}
			a = t.default ? ti(t.default()) : [];
			for (let e = 0; e < a.length; e++) {
				let t = a[e];
				t.key != null && ei(t, Zr(t, u, r, n));
			}
			return i.length && (o = Ul(n), Il.set(n, c)), Y(d, null, a);
		};
	}
});
function Rl(e) {
	let t = e.el;
	t[Pl] && t[Pl](), t[Fl] && t[Fl]();
}
function zl(e) {
	return e.moveClass || `${e.name || "v"}-move`;
}
function Bl(e, t) {
	Nl.set(e, Hl(e.el, t));
}
function Vl(e) {
	let t = Ml.get(e), n = Nl.get(e), r = t.left - n.left, i = t.top - n.top;
	if (r || i) {
		let t = e.el, n = t.style, a = t.getBoundingClientRect(), o = 1, s = 1;
		return t.offsetWidth && (o = a.width / t.offsetWidth), t.offsetHeight && (s = a.height / t.offsetHeight), Number.isFinite(o) && o !== 0 || (o = 1), Number.isFinite(s) && s !== 0 || (s = 1), Math.abs(o - 1) < .01 && (o = 1), Math.abs(s - 1) < .01 && (s = 1), n.transform = n.webkitTransform = `translate(${r / o}px,${i / s}px)`, n.transitionDuration = "0s", e;
	}
}
function Hl(e, t) {
	let n = e.getBoundingClientRect();
	return {
		left: n.left - (t ? t.left : 0),
		top: n.top - (t ? t.top : 0)
	};
}
function Ul(e) {
	let t;
	for (let n = e.parent; n; n = n.parent) {
		let r = Il.get(n);
		if (r) {
			let i = Wl(n.vnode.el, e.vnode.el);
			i && (t ||= []).push(l(Hl(i), {
				item: i,
				willMove: r
			}));
		}
	}
	return t;
}
function Wl(e, t) {
	let n = e.nodeType === 1 ? e : e.parentNode;
	for (; t && t.parentNode !== n;) t = t.parentNode;
	if (t && t.nodeType === 1) return t;
}
function Gl(e, t) {
	let n = e.find((e) => e.willMove() && e.item.contains(t));
	return n && Hl(n.item, n);
}
function Kl(e, t, n) {
	let r = e.cloneNode(), i = e[wc];
	i && i.forEach((e) => {
		e.split(/\s+/).forEach((e) => e && r.classList.remove(e));
	}), n.split(/\s+/).forEach((e) => e && r.classList.add(e)), r.style.display = "none";
	let a = t.nodeType === 1 ? t : t.parentNode;
	a.appendChild(r);
	let { hasTransform: o } = Rc(r);
	return a.removeChild(r), o;
}
var ql = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return p(t) ? (e) => ie(t, e) : t;
};
function Jl(e) {
	e.target.composing = !0;
}
function Yl(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var Xl = /* @__PURE__ */ Symbol("_assign"), Zl = /* @__PURE__ */ Symbol("_initialValue");
function Ql(e, t, n) {
	return t && (e = e.trim()), n && (e = oe(e)), e;
}
var $l = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[Zl] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Zl] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[Xl] = ql(i);
		let a = r || i.props && i.props.type === "number";
		ll(e, t ? "change" : "input", (t) => {
			t.target.composing || e[Xl](Ql(e.value, n, a));
		}), (n || a) && ll(e, "change", () => {
			e.value = Ql(e.value, n, a);
		}), t || (ll(e, "compositionstart", Jl), ll(e, "compositionend", Yl), ll(e, "change", Yl));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[Zl];
		delete e[Zl], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[Xl](Ql(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[Xl] = ql(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? oe(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, eu = {
	deep: !0,
	created(e, t, n) {
		e[Xl] = ql(n), ll(e, "change", () => {
			let t = e._modelValue, n = ou(e), r = e.checked, i = e[Xl];
			if (p(t)) {
				let e = Ce(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (h(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(su(e, r));
		});
	},
	mounted: tu,
	beforeUpdate(e, t, n) {
		e[Xl] = ql(n), tu(e, t, n);
	}
};
function tu(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (p(t)) i = Ce(t, r.props.value) > -1;
	else if (h(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Se(t, su(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var nu = {
	created(e, { value: t }, n) {
		e.checked = Se(t, n.props.value), e[Xl] = ql(n), ll(e, "change", () => {
			e[Xl](ou(e));
		});
	},
	beforeUpdate(e, { value: t, oldValue: n }, r) {
		e[Xl] = ql(r), t !== n && (e.checked = Se(t, r.props.value));
	}
}, ru = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, ll(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? oe(ou(e)) : ou(e)), r = e.multiple, i = r ? h(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? p(i) ? t.slice() : t : i];
			try {
				e[Xl](i);
			} finally {
				R(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[Xl] = ql(r);
	},
	mounted(e, { value: t, modifiers: { number: n } }) {
		au(e, t, n);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[Xl] = ql(n);
	},
	updated(e, { value: t, modifiers: { number: n } }) {
		let r = e._pendingValue;
		e._pendingValue = void 0, r && r[0] === e.multiple && iu(t, r[1], r[0]) || au(e, t, n);
	}
};
function iu(e, t, n) {
	if (!n || p(e)) return Se(e, t);
	if (h(e)) {
		if (e.size !== t.length) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	return !1;
}
function au(e, t, n = !1) {
	let r = e.multiple, i = p(t);
	if (!r || i || h(t)) {
		for (let a = 0, o = e.options.length; a < o; a++) {
			let o = e.options[a], s = ou(o);
			if (r) {
				if (i) {
					let e = typeof s;
					o.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(s)) : Ce(t, s) > -1;
				} else o.selected = t.has(s) || n && typeof s == "string" && t.has(oe(s));
			} else if (Se(ou(o), t)) {
				e.selectedIndex !== a && (e.selectedIndex = a);
				return;
			}
		}
		!r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function ou(e) {
	return "_value" in e ? e._value : e.value;
}
function su(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var cu = {
	created(e, t, n) {
		uu(e, t, n, null, "created");
	},
	mounted(e, t, n) {
		uu(e, t, n, null, "mounted");
	},
	beforeUpdate(e, t, n, r) {
		uu(e, t, n, r, "beforeUpdate");
	},
	updated(e, t, n, r) {
		uu(e, t, n, r, "updated");
	}
};
function lu(e, t) {
	switch (e) {
		case "SELECT": return ru;
		case "TEXTAREA": return $l;
		default: switch (t) {
			case "checkbox": return eu;
			case "radio": return nu;
			default: return $l;
		}
	}
}
function uu(e, t, n, r, i) {
	let a = lu(e.tagName, n.props && n.props.type)[i];
	a && a(e, t, n, r);
}
function du() {
	$l.getSSRProps = ({ value: e }) => ({ value: e }), nu.getSSRProps = ({ value: e }, t) => {
		if (t.props && Se(t.props.value, e)) return { checked: !0 };
	}, eu.getSSRProps = ({ value: e }, t) => {
		if (p(e)) {
			if (t.props && Ce(e, t.props.value) > -1) return { checked: !0 };
		} else if (h(e)) {
			if (t.props && e.has(t.props.value)) return { checked: !0 };
		} else if (e) return { checked: !0 };
	}, cu.getSSRProps = (e, t) => {
		if (typeof t.type != "string") return;
		let n = lu(t.type.toUpperCase(), t.props && t.props.type);
		if (n.getSSRProps) return n.getSSRProps(e, t);
	};
}
var fu = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], pu = {
	stop: (e) => e.stopPropagation(),
	prevent: (e) => e.preventDefault(),
	self: (e) => e.target !== e.currentTarget,
	ctrl: (e) => !e.ctrlKey,
	shift: (e) => !e.shiftKey,
	alt: (e) => !e.altKey,
	meta: (e) => !e.metaKey,
	left: (e) => "button" in e && e.button !== 0,
	middle: (e) => "button" in e && e.button !== 1,
	right: (e) => "button" in e && e.button !== 2,
	exact: (e, t) => fu.some((n) => e[`${n}Key`] && !t.includes(n))
}, mu = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = pu[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, hu = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, gu = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = k(n.key);
		if (t.some((e) => e === r || hu[e] === r)) return e(n);
	}));
}, _u = /* @__PURE__ */ l({ patchProp: xl }, xc), vu, yu = !1;
function bu() {
	return vu ||= Fo(_u);
}
function xu() {
	return vu = yu ? vu : Io(_u), yu = !0, vu;
}
var Su = ((...e) => {
	bu().render(...e);
}), Cu = ((...e) => {
	xu().hydrate(...e);
}), wu = ((...e) => {
	let t = bu().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = Du(e);
		if (!r) return;
		let i = t._component;
		v(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Eu(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
}), Tu = ((...e) => {
	let t = xu().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let t = Du(e);
		if (t) return n(t, !0, Eu(t));
	}, t;
});
function Eu(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Du(e) {
	return y(e) ? document.querySelector(e) : e;
}
var Ou = !1, ku = () => {
	Ou || (Ou = !0, du(), qc());
}, Au = /* @__PURE__ */ t({
	BaseTransition: () => Yr,
	BaseTransitionPropsValidators: () => Kr,
	Comment: () => us,
	DeprecationTypes: () => null,
	EffectScope: () => ke,
	ErrorCodes: () => Rn,
	ErrorTypeStrings: () => uc,
	Fragment: () => W,
	KeepAlive: () => Ri,
	ReactiveEffect: () => Fe,
	Static: () => ds,
	Suspense: () => Yo,
	Teleport: () => zr,
	Text: () => ls,
	TrackOpTypes: () => Tn,
	Transition: () => Dc,
	TransitionGroup: () => Ll,
	TriggerOpTypes: () => En,
	VueElement: () => Ol,
	assertNumber: () => Ln,
	callWithAsyncErrorHandling: () => Vn,
	callWithErrorHandling: () => Bn,
	camelize: () => O,
	capitalize: () => A,
	cloneVNode: () => Ts,
	compatUtils: () => null,
	compile: () => ju,
	computed: () => Q,
	createApp: () => wu,
	createBlock: () => q,
	createCommentVNode: () => X,
	createElementBlock: () => K,
	createElementVNode: () => J,
	createHydrationRenderer: () => Io,
	createPropsRestProxy: () => Pa,
	createRenderer: () => Fo,
	createSSRApp: () => Tu,
	createSlots: () => pa,
	createStaticVNode: () => Ds,
	createTextVNode: () => Es,
	createVNode: () => Y,
	customRef: () => _n,
	defineAsyncComponent: () => Fi,
	defineComponent: () => H,
	defineCustomElement: () => Tl,
	defineEmits: () => Sa,
	defineExpose: () => Ca,
	defineModel: () => Ea,
	defineOptions: () => wa,
	defineProps: () => xa,
	defineSSRCustomElement: () => El,
	defineSlots: () => Ta,
	devtools: () => dc,
	effect: () => Je,
	effectScope: () => Ae,
	getCurrentInstance: () => Ls,
	getCurrentScope: () => je,
	getCurrentWatcher: () => An,
	getTransitionRawChildren: () => ti,
	guardReactiveProps: () => ws,
	h: () => ic,
	handleError: () => Hn,
	hasInjectionContext: () => yr,
	hydrate: () => Cu,
	hydrateOnIdle: () => Oi,
	hydrateOnInteraction: () => Mi,
	hydrateOnMediaQuery: () => ji,
	hydrateOnVisible: () => Ai,
	initCustomFormatter: () => ac,
	initDirectivesForSSR: () => ku,
	inject: () => B,
	isMemoSame: () => sc,
	isProxy: () => nn,
	isReactive: () => $t,
	isReadonly: () => en,
	isRef: () => cn,
	isRuntimeOnly: () => Xs,
	isShallow: () => tn,
	isVNode: () => vs,
	markRaw: () => an,
	mergeDefaults: () => Ma,
	mergeModels: () => Na,
	mergeProps: () => Z,
	nextTick: () => R,
	nodeOps: () => xc,
	normalizeClass: () => P,
	normalizeProps: () => he,
	normalizeStyle: () => N,
	onActivated: () => Bi,
	onBeforeMount: () => Ji,
	onBeforeUnmount: () => Qi,
	onBeforeUpdate: () => Xi,
	onDeactivated: () => Vi,
	onErrorCaptured: () => ra,
	onMounted: () => Yi,
	onRenderTracked: () => na,
	onRenderTriggered: () => ta,
	onScopeDispose: () => Me,
	onServerPrefetch: () => ea,
	onUnmounted: () => $i,
	onUpdated: () => Zi,
	onWatcherCleanup: () => jn,
	openBlock: () => G,
	patchProp: () => xl,
	popScopeId: () => mr,
	provide: () => vr,
	proxyRefs: () => hn,
	pushScopeId: () => pr,
	queuePostFlushCb: () => er,
	reactive: () => Jt,
	readonly: () => Xt,
	ref: () => I,
	registerRuntimeCompiler: () => Ys,
	render: () => Su,
	renderList: () => fa,
	renderSlot: () => U,
	resolveComponent: () => oa,
	resolveDirective: () => la,
	resolveDynamicComponent: () => ca,
	resolveFilter: () => null,
	resolveTransitionHooks: () => Zr,
	setBlockTracking: () => gs,
	setDevtoolsHook: () => fc,
	setTransitionHooks: () => ei,
	shallowReactive: () => Yt,
	shallowReadonly: () => Zt,
	shallowRef: () => ln,
	ssrContextKey: () => br,
	ssrUtils: () => pc,
	stop: () => Ye,
	toDisplayString: () => F,
	toHandlerKey: () => j,
	toHandlers: () => ha,
	toRaw: () => rn,
	toRef: () => xn,
	toRefs: () => vn,
	toValue: () => pn,
	transformVNodeArgs: () => bs,
	triggerRef: () => fn,
	unref: () => L,
	useAttrs: () => ka,
	useCssModule: () => jl,
	useCssVars: () => Yc,
	useHost: () => kl,
	useId: () => ri,
	useModel: () => to,
	useSSRContext: () => xr,
	useShadowRoot: () => Al,
	useSlots: () => Oa,
	useTemplateRef: () => ai,
	useTransitionState: () => Wr,
	vModelCheckbox: () => eu,
	vModelDynamic: () => cu,
	vModelRadio: () => nu,
	vModelSelect: () => ru,
	vModelText: () => $l,
	vShow: () => Gc,
	version: () => cc,
	warn: () => lc,
	watch: () => V,
	watchEffect: () => Sr,
	watchPostEffect: () => Cr,
	watchSyncEffect: () => wr,
	withAsyncContext: () => Fa,
	withCtx: () => z,
	withDefaults: () => Da,
	withDirectives: () => gr,
	withKeys: () => gu,
	withMemo: () => oc,
	withModifiers: () => mu,
	withScopeId: () => hr
}), ju = () => {}, Mu = Symbol("CedarConfigProvider");
// packages/shared/lib/index.js
function Nu() {
	return typeof window < "u";
}
function Pu() {
	return Nu() && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
function Fu(e) {
	return Array.isArray(e);
}
function Iu(e) {
	return typeof e == "function";
}
function Lu(e) {
	return typeof e == "number" || typeof e == "string" && /^[-+]?\d+$/.test(e);
}
function Ru(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function zu(e) {
	return e === window;
}
function Bu() {
	return Nu() && "ontouchstart" in window;
}
function Vu(e, t) {
	if (e.length) {
		let n = e.indexOf(t);
		if (n > -1) return e.splice(n, 1);
	}
}
function Hu(e) {
	return window.getComputedStyle(e);
}
function Uu(e) {
	if (zu(e)) {
		let t = e.innerWidth, n = e.innerHeight, r = {
			x: 0,
			y: 0,
			top: 0,
			left: 0,
			right: t,
			bottom: n,
			width: t,
			height: n
		};
		return {
			...r,
			toJSON: () => r
		};
	}
	return e.getBoundingClientRect();
}
function Wu(e) {
	let t = e.charAt(0);
	return e.replace(/-(\w)/g, (e, t) => t.toUpperCase()).replace(/^./, (e) => e.toLowerCase()).replace(t, t.toUpperCase());
}
function Gu(e) {
	return (t) => {
		let n = `${e}-${t}`;
		return {
			name: Wu(n),
			n(t) {
				return t ? t[0] === "$" ? t.replace("$", e) : t.startsWith("--") ? n + t : n + "__" + t : n;
			},
			classes(...e) {
				return e.map((e) => Array.isArray(e) ? e[0] ? e[1] : e[2] ?? null : e);
			}
		};
	};
}
// packages/use/lib/index.js
function Ku(e) {
	return e in Ls().provides;
}
function qu(e) {
	if (!Ku(e)) return {
		index: null,
		parentProvider: null,
		bindParent: null
	};
	let { childInstances: t, collect: n, clear: r, ...i } = B(e), a = Ls();
	return {
		index: Q(() => t.indexOf(a)),
		parentProvider: i,
		bindParent: (e) => {
			let t = !1, i = !1, o = () => {
				t = !0, R(() => {
					t && !i && (n(a, e), i = !0);
				});
			}, s = () => {
				t = !1, i &&= (r(a, e), !1);
			};
			Yi(o), Bi(o), Vi(s), Qi(s);
		}
	};
}
function Ju(e) {
	let t = [], n = (e) => {
		e?.component ? n(e?.component.subTree) : Fu(e?.children) && e.children.forEach((e) => {
			vs(e) && (t.push(e), n(e));
		});
	};
	return n(e), t;
}
function Yu(e) {
	let t = Ls(), n = /* @__PURE__ */ Jt([]), r = [], i = Q(() => n.length), a = () => {
		let e = Ju(t.subTree), i = [...n].sort((t, n) => e.indexOf(t.vnode) - e.indexOf(n.vnode));
		if (i.every((e, t) => e === n[t])) return;
		let a = i.map((e) => r[n.indexOf(e)]);
		n.splice(0, n.length, ...i), r.splice(0, r.length, ...a);
	};
	Zi(a);
	let o = (e, t) => {
		n.includes(e) || (n.push(e), r.push(t), a());
	}, s = (e, t) => {
		Vu(n, e), Vu(r, t);
	};
	return {
		length: i,
		childProviders: r,
		bindChildren: (t) => {
			vr(e, {
				childInstances: n,
				collect: o,
				clear: s,
				...t
			});
		}
	};
}
function Xu(e, t) {
	let n = /* @__PURE__ */ ln(t.initialData), r = /* @__PURE__ */ I(!1), i = /* @__PURE__ */ ln(), a = Symbol("initial"), o = /* @__PURE__ */ new Map(), s, c = {}, l = !1, u = !1;
	function d() {
		let e = s;
		s = void 0, e && (clearTimeout(e.timer), e.controller.abort(), e.settle({ status: "cancelled" })), r.value = !1;
	}
	function f(f, p) {
		if (d(), l) return Promise.resolve({ status: "cancelled" });
		u = !0, c = f, i.value = void 0;
		let m = f.loader ?? e, h = f.cacheKey ?? (f.loader ? void 0 : a), g = t.cacheTime ?? 0, _ = h === void 0 ? void 0 : o.get(h);
		return !f.force && g > 0 && _ && _.expires > Date.now() ? (n.value = _.data, Promise.resolve({
			status: "success",
			data: _.data
		})) : (h !== void 0 && o.delete(h), r.value = !0, new Promise((e) => {
			let t = {
				controller: new AbortController(),
				settle: e,
				timer: void 0
			};
			s = t;
			let a = async () => {
				try {
					let r = await m({ signal: t.controller.signal });
					if (s !== t) return;
					n.value = r, g > 0 && h !== void 0 && (o.size >= 50 && o.delete(o.keys().next().value), o.set(h, {
						data: r,
						expires: Date.now() + g
					})), e({
						status: "success",
						data: r
					});
				} catch (n) {
					if (s !== t) return;
					i.value = n, e({
						status: "error",
						error: n
					});
				} finally {
					s === t && (s = void 0, r.value = !1);
				}
			};
			p > 0 ? t.timer = setTimeout(a, p) : a();
		}));
	}
	let p = (e = {}) => f(e, t.debounce ?? 0), m = () => f({
		...c,
		force: !0
	}, 0), h = () => {
		!u && !l && t.immediate !== !1 && f({}, 0);
	};
	return Ls() ? Yi(h) : h(), je() && Me(() => {
		l = !0, d(), o.clear();
	}), {
		data: n,
		loading: /* @__PURE__ */ Xt(r),
		error: /* @__PURE__ */ Xt(i),
		execute: p,
		refresh: m,
		cancel: d,
		clearCache: () => o.clear()
	};
}
var Zu = Symbol("reading-direction");
function Qu(e) {
	return e.nodeType === 11 ? e.host : void 0;
}
function $u(e, t = "ltr") {
	let n = e ?? void 0;
	for (; n;) {
		let e = n.closest("[dir]");
		if (e) {
			let t = e.getAttribute("dir")?.toLowerCase();
			if (t === "ltr" || t === "rtl") return t;
			if (t === "auto") return e.ownerDocument.defaultView?.getComputedStyle(e).direction === "rtl" ? "rtl" : "ltr";
			if (e.parentElement) {
				n = e.parentElement;
				continue;
			}
		}
		n = Qu((e ?? n).getRootNode());
	}
	return t;
}
var ed = /* @__PURE__ */ new WeakMap(), td = /* @__PURE__ */ new WeakMap(), nd = /* @__PURE__ */ new Set(), rd;
function id(e) {
	return nd.add(e), rd === void 0 && (rd = setInterval(() => {
		Array.from(nd).forEach((e) => e());
	}, 250)), () => {
		nd.delete(e), !nd.size && rd !== void 0 && (clearInterval(rd), rd = void 0);
	};
}
function ad(e, t) {
	let n = [], r = e;
	for (; r;) {
		n.push(r);
		let e = td.get(r);
		e || (e = /* @__PURE__ */ new Set(), td.set(r, e)), e.add(t), r = r.parentNode ?? Qu(r);
	}
	return () => n.forEach((e) => {
		let n = td.get(e);
		n?.delete(t), n?.size || td.delete(e);
	});
}
function od(e, t) {
	let n = B(Zu, void 0), r = Ls(), i = /* @__PURE__ */ ln(), a = /* @__PURE__ */ ln([]), o, s = !1;
	function c(e, t = !1) {
		if (!t && e === i.value && o) return;
		o?.(), o = void 0, i.value = e ?? void 0, a.value = [];
		let n = e?.ownerDocument, r = n?.defaultView?.MutationObserver;
		if (!n || !r) return;
		let s = /* @__PURE__ */ new Set([n.documentElement]), l = e ?? void 0;
		for (; l;) {
			let e = l.getRootNode();
			s.add(e === n ? n.documentElement : e), l = Qu(e);
		}
		let u = [], d = [];
		for (let e of s) {
			let t = ed.get(e);
			if (!t) {
				let n = /* @__PURE__ */ I(0), i = new r((e) => {
					let t = /* @__PURE__ */ new Set();
					for (let r of e) if (r.type === "attributes") n.value++;
					else for (let e of [...Array.from(r.addedNodes), ...Array.from(r.removedNodes)]) td.get(e)?.forEach((e) => t.add(e));
					t.forEach((e) => e());
				});
				i.observe(e, {
					subtree: !0,
					childList: !0,
					attributes: !0,
					attributeFilter: ["dir"]
				}), t = {
					version: n,
					observer: i,
					users: 0
				}, ed.set(e, t);
			}
			t.users++, d.push(t.version);
			let n = t;
			u.push(() => {
				--n.users === 0 && (n.observer.disconnect(), ed.delete(e));
			});
		}
		a.value = d;
		let f = e ? ad(e, () => c(e, !0)) : void 0, p = e && !e.isConnected ? id(() => {
			e.isConnected && c(e, !0);
		}) : void 0;
		o = () => {
			f?.(), p?.(), u.forEach((e) => e());
		};
	}
	function l() {
		let t = e ? e() : r?.vnode.el;
		c(t?.nodeType === 1 ? t : t?.parentElement);
	}
	function u() {
		s = !0, l();
	}
	function d() {
		s = !1, o?.(), o = void 0, a.value = [];
	}
	Yi(u), Bi(u), Vi(d), Me(d), Cr(() => {
		let t = e?.();
		s && (e ? c(t) : l());
	});
	let f = Q(() => {
		a.value.forEach((e) => {
			e.value;
		});
		let e = t?.();
		return e === "ltr" || e === "rtl" ? e : $u(i.value, n?.value ?? "ltr");
	});
	return {
		dir: f,
		isRtl: Q(() => f.value === "rtl")
	};
}
// packages/ui/src/_utils/maple/components.ts
function sd(e, t) {
	return e.setPropsDefaults = function(e) {
		Object.entries(e).forEach(([e, n]) => {
			let r = t[e];
			if (r == null) return;
			let i = Ru(r) ? r.type : r, a = Fu(i) ? i : [i], o = a.includes(Function) && typeof n == "function" && i !== Function ? () => n : a.includes(Object) && (n === null || Ru(n)) ? () => n === null ? null : { ...n } : a.includes(Array) && (n === null || Fu(n)) ? () => n === null ? null : [...n] : n;
			t[e] = Ru(r) ? {
				...r,
				default: o
			} : {
				type: r,
				default: o
			};
		});
	}, e;
}
// packages/ui/src/_utils/global-config.ts
var cd = "C", ld = "c", ud = "$cedar", dd = (e) => e?.componentPrefix ?? cd, fd = (e, t) => {
	if (!t) throw Error("[Cedar] Component name is required for registration");
	let n = t.startsWith(cd) ? t.slice(1) : t;
	return `${dd(e)}${n}`;
}, pd = (e, t) => {
	t && t.classPrefix && (e.config.globalProperties[ud] = {
		...e.config.globalProperties[ud] ?? {},
		classPrefix: t.classPrefix
	});
};
function md(e, t, n = {}) {
	let r = t ?? e, i = n.components ?? [e];
	sd(r, e.props ?? {});
	for (let e of i) e !== r && sd(e, e.props ?? {});
	return r.install = (e, t) => {
		pd(e, t);
		for (let r of i) {
			let i = n.resolveName?.(r, t) ?? fd(t, r.name);
			i && e.component(i, r);
		}
		n.setup?.(e, t);
	}, r;
}
var hd = () => {
	let e = Ls();
	return (e ? B(Mu, void 0) : void 0)?.prefixCls ?? e?.appContext.config.globalProperties[ud]?.classPrefix ?? ld;
}, gd = (e) => {
	let t = hd();
	return e ? `${t}-${e}` : t;
}, _d = (e) => {
	let { name: t, classes: n } = Gu(ld)(e);
	return {
		name: t,
		get prefix() {
			return gd(e);
		},
		get cssVarPrefix() {
			return `--${hd()}-${e}`;
		},
		n: (t) => {
			let n = hd(), r = `${n}-${e}`;
			return t ? t.startsWith("$") ? t.replace("$", n) : t.startsWith("--") ? `${r}${t}` : `${r}__${t}` : r;
		},
		classes: n
	};
}, vd = Symbol.for("@cedar-design/vue-id-counter/v1"), yd = /* @__PURE__ */ new WeakMap(), bd = Symbol.for("@cedar-design/vue-id-fallback-registry/v1");
function xd() {
	let e = Reflect.get(globalThis, bd);
	if (!e && (e = yd, Object.isExtensible(globalThis))) try {
		Object.defineProperty(globalThis, bd, { value: e });
	} catch {}
	return e;
}
function Sd() {
	let e = Reflect.get(Au, "useId");
	if (e) return e();
	let t = Ls();
	if (!t) throw Error("useId must be called during component setup");
	let n = t.appContext, r = Reflect.get(n, vd);
	if (!r) {
		if (Object.isExtensible(n)) r = { value: 0 }, Object.defineProperty(n, vd, { value: r });
		else {
			let e = xd();
			r = e.get(n) ?? { value: 0 }, e.set(n, r);
		}
	}
	return `c-v-${r.value++}`;
}
// packages/ui/src/_utils/is.ts
var Cd = Object.prototype.toString;
function wd(e) {
	return Cd.call(e) === "[object Array]";
}
function Td(e) {
	return Cd.call(e) === "[object Null]";
}
function Ed(e) {
	return Cd.call(e) === "[object Object]";
}
function Dd(e) {
	return Cd.call(e) === "[object String]";
}
function Od(e) {
	return e === void 0;
}
// packages/ui/src/locale/lang/zh-cn.ts
var kd = {
	formatYear: "YYYY 年",
	formatMonth: "YYYY 年 MM 月",
	today: "今天",
	view: {
		month: "月",
		year: "年",
		week: "周",
		day: "日"
	},
	month: {
		long: {
			January: "一月",
			February: "二月",
			March: "三月",
			April: "四月",
			May: "五月",
			June: "六月",
			July: "七月",
			August: "八月",
			September: "九月",
			October: "十月",
			November: "十一月",
			December: "十二月"
		},
		short: {
			January: "一月",
			February: "二月",
			March: "三月",
			April: "四月",
			May: "五月",
			June: "六月",
			July: "七月",
			August: "八月",
			September: "九月",
			October: "十月",
			November: "十一月",
			December: "十二月"
		}
	},
	week: {
		long: {
			self: "周",
			monday: "周一",
			tuesday: "周二",
			wednesday: "周三",
			thursday: "周四",
			friday: "周五",
			saturday: "周六",
			sunday: "周日"
		},
		short: {
			self: "周",
			monday: "一",
			tuesday: "二",
			wednesday: "三",
			thursday: "四",
			friday: "五",
			saturday: "六",
			sunday: "日"
		}
	}
}, Ad = {
	tabs: {
		close: "关闭",
		add: "新增标签",
		previous: "上一组标签",
		next: "下一组标签"
	},
	breadcrumb: {
		label: "面包屑导航",
		ellipsis: "省略的路径"
	},
	navMenu: { more: "更多" },
	splitButton: { moreActions: "更多操作" },
	peopleSelect: {
		call: "拨打电话",
		chat: "聊天"
	},
	fieldPresentation: {
		rangeStart: "开始",
		rangeEnd: "结束",
		clickEdit: "单击编辑",
		doubleClickEdit: "双击编辑",
		selectionCount: "已选 {count} 个",
		selectionRemove: "移除",
		selectionBack: "返回可选项",
		selectionEmpty: "暂无已选项",
		edit: "编辑",
		close: "关闭",
		search: "搜索选项",
		selected: "已选择",
		limit: "最多选择"
	},
	search: {
		search: "搜索",
		cancel: "取消",
		history: "搜索历史"
	},
	locale: "zh-CN",
	resizeBox: {
		left: "左边宽度",
		right: "右边宽度",
		top: "上边高度",
		bottom: "下边高度",
		valueText: "{0} 像素"
	},
	loading: { text: "加载中" },
	split: { resizeLabel: "调整面板大小" },
	layout: {
		expandSider: "展开侧栏",
		collapseSider: "收起侧栏"
	},
	common: {
		back: "返回",
		close: "关闭",
		placeholderSelect: "请选择",
		placeholderInput: "请输入",
		placeholderStart: "开始日期",
		placeholderEnd: "结束日期",
		clear: "清空",
		increase: "增加数值",
		decrease: "减少数值",
		showPassword: "显示密码",
		hidePassword: "隐藏密码",
		dateFormat: { datetime: "YYYY-MM-DD HH:mm:ss" }
	},
	map: {
		initError: "地图初始化失败",
		retry: "重试",
		searchPlaceholder: "搜索地址",
		title: "地址选择",
		noData: "暂无数据",
		dragAndSelectTips: "拖动地图或搜索地址，选择定位点位置"
	},
	filterForm: {
		expandMore: "展开",
		collapseMore: "收起"
	},
	empty: { description: "暂无数据" },
	infiniteScroll: {
		loading: "加载中",
		error: "加载失败，点击重试",
		finished: "没有更多了"
	},
	drawer: {
		confirmButtonText: "确定",
		cancelText: "取消"
	},
	popconfirm: {
		confirmButtonText: "确定",
		cancelText: "取消"
	},
	dialog: {
		confirmButtonText: "确定",
		cancelButtonText: "取消"
	},
	pagination: {
		navigation: "分页",
		previous: "上一页",
		next: "下一页",
		goto: "前往",
		page: "页",
		countPerPage: "条/页",
		total: "共 {0} 条"
	},
	table: {
		expandRow: "展开行",
		collapseRow: "收起行",
		resizeColumn: "调整 {0} 列宽",
		selectRow: "选择行 {0}",
		selectionColumn: "选择",
		confirmButtonText: "确定",
		resetText: "重置",
		customColumnsConfig: "列管理",
		selectAll: "全选",
		selected: "已选",
		placeholderInputKeyword: "请输入关键词搜索",
		clear: "清空",
		columnManager: {
			freezeToLeft: "冻结至左侧",
			freezeToRight: "冻结至右侧",
			unfreeze: "取消冻结",
			deleteItem: "删除此项",
			renameColumn: "重命名",
			insertLeft: "向左插入列",
			insertRight: "向右插入列",
			insertColumn: "插入列",
			freezeColumn: "冻结列",
			unfreezeColumn: "取消冻结",
			editColumn: "编辑列",
			deleteColumn: "删除列",
			noInsertableColumns: "没有可插入的列",
			groupTitle: "一级分组标题",
			groupTitlePlaceholder: "留空表示不分组",
			groupTitleHint: "相邻列的一级标题相同时会自动合并为同一分组",
			columnTitle: "列名称",
			columnTitlePlaceholder: "请输入列名称"
		}
	},
	carousel: {
		label: "轮播",
		previous: "上一页",
		next: "下一页",
		slide: "第 {index} 页，共 {total} 页",
		goto: "切换到第 {index} 页"
	},
	upload: {
		replace: "替换",
		duration: "视频时长",
		download: "下载",
		close: "关闭",
		drag: "将文件拖拽到此处，或",
		click: "上传",
		start: "开始",
		cancel: "取消",
		delete: "删除",
		retry: "点击重试",
		buttonText: "上传",
		preview: "预览",
		dragHover: "释放文件并开始上传",
		error: "上传失败"
	},
	calendar: kd,
	datePicker: {
		previousMonth: "上一月",
		nextMonth: "下一月",
		previousYear: "上一年",
		nextYear: "下一年",
		previousPeriod: "上一组年份",
		nextPeriod: "下一组年份",
		view: kd.view,
		month: kd.month,
		week: kd.week,
		placeholder: {
			date: "请选择日期",
			week: "请选择周",
			month: "请选择月份",
			year: "请选择年份",
			quarter: "请选择季度",
			time: "请选择时间"
		},
		rangePlaceholder: {
			date: ["开始日期", "结束日期"],
			week: ["开始周", "结束周"],
			month: ["开始月份", "结束月份"],
			year: ["开始年份", "结束年份"],
			quarter: ["开始季度", "结束季度"],
			time: ["开始时间", "结束时间"]
		},
		selectTime: "选择时间",
		today: "今天",
		now: "此刻",
		confirmButtonText: "确定",
		startTime: "开始时间",
		endTime: "结束时间",
		rangeSeparator: "至",
		nextDay: "次日"
	},
	image: {
		preview: "预览图片",
		loading: "加载中"
	},
	imagePreview: {
		prev: "上一张图片",
		next: "下一张图片",
		download: "下载图片",
		close: "关闭图片预览",
		fullScreen: "全屏",
		rotateRight: "向右旋转",
		rotateLeft: "向左旋转",
		zoomIn: "放大",
		zoomOut: "缩小",
		originalSize: "原始尺寸"
	},
	typography: {
		copied: "已复制",
		copy: "复制",
		expand: "展开",
		collapse: "折叠",
		edit: "编辑"
	},
	form: { validateMessages: {
		required: "#{field} 是必填项",
		type: {
			string: "#{field} 不是合法的文本类型",
			number: "#{field} 不是合法的数字类型",
			boolean: "#{field} 不是合法的布尔类型",
			array: "#{field} 不是合法的数组类型",
			object: "#{field} 不是合法的对象类型",
			url: "#{field} 不是合法的 url 地址",
			email: "#{field} 不是合法的邮箱地址",
			ip: "#{field} 不是合法的 IP 地址"
		},
		number: {
			min: "`#{value}` 小于最小值 `#{min}`",
			max: "`#{value}` 大于最大值 `#{max}`",
			equal: "`#{value}` 不等于 `#{equal}`",
			range: "`#{value}` 不在 `#{min} ~ #{max}` 范围内",
			positive: "`#{value}` 不是正数",
			negative: "`#{value}` 不是负数"
		},
		array: {
			length: "`#{field}` 个数不等于 #{length}",
			minLength: "`#{field}` 个数最少为 #{minLength}",
			maxLength: "`#{field}` 个数最多为 #{maxLength}",
			includes: "#{field} 不包含 #{includes}",
			deepEqual: "#{field} 不等于 #{deepEqual}",
			empty: "`#{field}` 不是空数组"
		},
		string: {
			minLength: "字符数最少为 #{minLength}",
			maxLength: "字符数最多为 #{maxLength}",
			length: "字符数必须是 #{length}",
			match: "`#{value}` 不符合模式 #{pattern}",
			uppercase: "`#{value}` 必须全大写",
			lowercase: "`#{value}` 必须全小写"
		},
		object: {
			deepEqual: "`#{field}` 不等于期望值",
			hasKeys: "`#{field}` 不包含必须字段",
			empty: "`#{field}` 不是对象"
		},
		boolean: {
			true: "期望是 `true`",
			false: "期望是 `false`"
		}
	} },
	transfer: {
		clear: "清空已选",
		actions: "选项操作"
	},
	colorPicker: {
		trigger: "选择颜色",
		hue: "色相",
		opacity: "不透明度",
		palette: "颜色饱和度和亮度",
		saturation: "饱和度",
		brightness: "亮度",
		hex: "十六进制颜色",
		red: "红色",
		green: "绿色",
		blue: "蓝色",
		history: "最近使用颜色",
		preset: "系统预设颜色",
		empty: "暂无"
	}
}, jd = /* @__PURE__ */ I("zh-CN"), Md = /* @__PURE__ */ Jt({ "zh-CN": Ad }), Nd = () => jd.value, Pd = () => {
	let e = B(Mu, void 0), t = Q(() => e?.locale ?? Md[jd.value]);
	return {
		i18nMessage: t,
		locale: Q(() => t.value.locale),
		t: (e, ...n) => {
			let r = e.split("."), i = t.value;
			for (let t of r) {
				if (!i[t]) return e;
				i = i[t];
			}
			return Dd(i) && n.length > 0 ? i.replace(/{(\d+)}/g, (e, t) => n[t] ?? e) : i;
		}
	};
}, Fd = {
	columns: {
		type: Array,
		default: () => []
	},
	data: {
		type: Array,
		default: () => []
	},
	rowKey: {
		type: String,
		default: "key"
	},
	size: {
		type: String,
		default: "md"
	},
	tableLayout: {
		type: String,
		default: "fixed"
	},
	fit: {
		type: Boolean,
		default: !0
	},
	height: [Number, String],
	maxHeight: [Number, String],
	stickyHeader: {
		type: Boolean,
		default: !0
	},
	showHeader: {
		type: Boolean,
		default: !0
	},
	bordered: {
		type: Boolean,
		default: !0
	},
	stripe: {
		type: Boolean,
		default: !1
	},
	hoverable: {
		type: Boolean,
		default: !0
	},
	loading: {
		type: Boolean,
		default: !1
	}
};
// packages/ui/src/_utils/resize-observer.ts
function Id(e, t, n, r = !0) {
	let i = !1, a = !1, o, s, c, l, u, d = [], f = () => [...new Set(e().filter((e) => !!e))], p = [], m = 0, h = 0, g = (e = [], r = m) => {
		if (r !== m || !i || a || !t() || !s || (p = [...p, ...e], u !== void 0 || !s)) return;
		let o = ++h;
		u = s.requestAnimationFrame(() => {
			if (r !== m || o !== h) return;
			h++, u = void 0;
			let e = p;
			p = [], i && !a && t() && n(e);
		});
	}, _ = () => {
		m++, h++, o?.disconnect(), o = void 0, d = [], l && (s?.removeEventListener("resize", l), c?.removeEventListener("resize", l), c?.removeEventListener("scroll", l)), l = void 0, c = void 0, u !== void 0 && s?.cancelAnimationFrame(u), u = void 0, p = [], s = void 0;
	}, v = () => {
		if (_(), !i || a || !t()) return;
		let e = f();
		d = e, s = e[0]?.ownerDocument.defaultView;
		let n = s?.ResizeObserver, u = m;
		if (l = () => g([], u), c = s?.visualViewport, n) {
			o = new n((e) => g(e, u));
			for (let t of e) o.observe(t, { box: "border-box" });
		}
		s?.addEventListener("resize", l, { passive: !0 }), c?.addEventListener("resize", l, { passive: !0 }), c?.addEventListener("scroll", l, { passive: !0 }), r && g();
	};
	V(() => [t(), ...e()], v, { flush: "post" }), Zi(() => {
		if (!t()) return;
		let e = f();
		(e.length !== d.length || e.some((e, t) => e !== d[t])) && v();
	}), Yi(() => {
		i = !0, v();
	}), Bi(() => {
		a = !1, v();
	}), Vi(() => {
		a = !0, _();
	}), Qi(() => {
		i = !1, _();
	});
}
// packages/ui/src/_utils/direction.ts
function Ld(e) {
	let t = Math.max(0, e.scrollWidth - e.clientWidth);
	return Math.max(0, Math.min(t, $u(e) === "rtl" ? -e.scrollLeft : e.scrollLeft));
}
function Rd(e, t) {
	let n = Math.max(0, e.scrollWidth - e.clientWidth), r = Math.max(0, Math.min(n, t));
	e.scrollLeft = $u(e) === "rtl" ? -r : r;
}
// packages/ui/src/table/extra-column.ts
var zd = Symbol("table-extra-column"), Bd = Symbol("table-extra-column-layout-key");
function Vd(e) {
	return !!e?.[zd];
}
function Hd(e, t) {
	Object.assign(e, { [Bd]: t });
}
function Ud(e) {
	return e[Bd] ?? e.dataIndex;
}
// packages/ui/src/table/column-direction.ts
function Wd(e, t, n = "ltr") {
	return n === "rtl" ? [
		...e.filter((e) => t(e) === "right"),
		...e.filter((e) => !t(e)),
		...e.filter((e) => t(e) === "left")
	] : e;
}
// packages/ui/src/table/render/columns.ts
var Gd = (e) => {
	let t = 0, n = (e) => {
		if (wd(e) && e.length > 0) for (let r of e) r.children ? n(r.children) : t += 1;
	};
	return n(e), t;
}, Kd = (e) => {
	let t = 0;
	if (wd(e) && e.length > 0) {
		t = 1;
		for (let n of e) if (n.children) {
			let e = Kd(n.children);
			e > 0 && (t = Math.max(t, e + 1));
		}
	}
	return t;
}, qd = (e, t) => {
	let { parent: n } = e;
	for (; n;) n.fixed === t && (t === "left" ? n.isLastLeftFixed = !0 : n.isFirstRightFixed = !0), n = n.parent;
}, Jd = (e) => {
	let t = [], n = (e) => {
		e.forEach((e) => {
			wd(e.children) && e.children.length ? n(e.children) : t.push(e);
		});
	};
	if (wd(e.children) && e.children.length && n(e.children), !t.length) return;
	let r = t[0].fixed;
	if (r === "left" || r === "right") return t.every((e) => e.fixed === r) ? r : void 0;
}, Yd = (e, t, n, r = "ltr") => {
	let i = Kd(e);
	t.clear();
	let a = [], o = [...Array(i)].map(() => []), s = /* @__PURE__ */ new Map(), c, l, u, d, f = (e, { level: r = 0, parent: p, fixed: m } = {}) => {
		for (let h of e) {
			let e = {
				...h,
				parent: p
			};
			if (wd(e.children)) {
				let t = Gd(e.children);
				if (t > 1 && (e.colSpan = t), !e.fixed) {
					let t = Jd(e);
					t && (e.fixed = t);
				}
				o[r].push(e);
				let n = a.length;
				f(e.children, {
					level: r + 1,
					parent: e,
					fixed: e.fixed
				}), s.set(e, [n, a.length]);
			} else {
				let s = i - r;
				if (s > 1 && (e.rowSpan = s), (m || e.fixed) && (e.fixed = e.fixed ?? m, e.fixed === "left" ? (c = a.length, u ??= a.length) : Od(l) && (l = a.length)), e.fixed === "right" && (d = a.length), (Od(e.dataIndex) || Td(e.dataIndex)) && (e.dataIndex = `__arco_data_index_${a.length}`), Vd(e) && t.has(e.dataIndex)) {
					let n = `@cedar-extra:${e.dataIndex}`;
					for (; t.has(n);) n += "@";
					Hd(e, n);
				}
				let f = Ud(e);
				n[f] && (e._resizeWidth = n[f]), Vd(e) && t.has(e.dataIndex) || t.set(e.dataIndex, e), a.push(e), o[r].push(e);
			}
		}
	};
	return f(e), r === "rtl" && (c = u, l = d), Od(c) || (a[c].isLastLeftFixed = !0, qd(a[c], "left")), Od(l) || (a[l].isFirstRightFixed = !0, qd(a[l], "right")), {
		dataColumns: a,
		groupColumns: o.map((e) => e.flatMap((e) => {
			let t = s.get(e);
			if (!t) return [e];
			let n = Wd(a.slice(...t), (e) => e.fixed, r);
			if (r === "ltr" && n.every((t) => t.fixed === e.fixed)) return [e];
			let i = [];
			for (let e of n) {
				let t = i[i.length - 1];
				t && t[0].fixed === e.fixed ? t.push(e) : i.push([e]);
			}
			return i.map((t) => ({
				...e,
				children: t,
				colSpan: t.length,
				fixed: t[0].fixed,
				isLastLeftFixed: t.some((e) => e.isLastLeftFixed),
				isFirstRightFixed: t.some((e) => e.isFirstRightFixed)
			}));
		}))
	};
}, Xd = (e) => Object.prototype.toString.call(e) === "[object Number]" && e === e, Zd = ({ containerWidth: e, dataColumns: t, operations: n, fit: r }) => {
	let i = t.map((e, t) => ({
		...e,
		index: t
	})), a = [], o = (e, t) => {
		a.push({
			index: e.index,
			width: t
		});
	}, s = {}, c = 0;
	for (let e of n) c += e.width ?? 40;
	if (!e || i.length === 0) {
		let e = c;
		for (let t of i) {
			let n = t.key;
			if (!n) continue;
			let r = t._resizeWidth ?? t.width ?? t.minWidth ?? 80;
			s[n] = r, o(t, r), e += r;
		}
		return {
			hasHorizontalOverflow: !1,
			bodyWidth: e,
			columnRealWidth: s,
			widthUpdates: a
		};
	}
	let l = i.filter((e) => !Xd(e._resizeWidth) && !Xd(e.width)), u = c;
	if (l.length > 0 && r) {
		for (let e of i) Xd(e._resizeWidth) ? u += e._resizeWidth : u += Number(e.width || e.minWidth || 80);
		if (u <= e) {
			let t = e - u;
			if (l.length === 1) {
				let e = l[0], n = Number(e.minWidth || 80);
				e.dataIndex && (s[e.key] = n + t, o(e, s[e.key]));
			} else {
				let e = t / l.reduce((e, t) => e + Number(t.minWidth || 80), 0), n = 0;
				l.forEach((t, r) => {
					if (r === 0) return;
					let i = Number(t.minWidth || 80), a = Math.floor(i * e);
					n += a, t.dataIndex && (s[t.key] = i + a, o(t, s[t.key]));
				});
				let r = l[0], i = Number(r.minWidth || 80);
				r.dataIndex && (s[r.key] = i + t - n, o(r, s[r.key]));
			}
			for (let e of i) {
				if (!e.dataIndex || s[e.key]) continue;
				let t = e._resizeWidth ?? e.width;
				s[e.key] = t, o(e, t);
			}
			return {
				hasHorizontalOverflow: !1,
				bodyWidth: Math.max(u, e),
				columnRealWidth: s,
				widthUpdates: a
			};
		}
		for (let e of l) {
			let t = Number(e.minWidth || 80);
			e.dataIndex && (s[e.key] = t, o(e, t));
		}
		for (let e of i) {
			if (!e.dataIndex || s[e.key]) continue;
			let t = e._resizeWidth ?? e.width;
			s[e.key] = t, o(e, t);
		}
		return {
			hasHorizontalOverflow: !0,
			bodyWidth: u,
			columnRealWidth: s,
			widthUpdates: a
		};
	}
	for (let e of i) {
		let t;
		t = Xd(e._resizeWidth) ? e._resizeWidth : !e.width && !e.minWidth ? 80 : Number(e.width || e.minWidth), e.dataIndex && (s[e.key] = t, o(e, t)), u += t;
	}
	if (u < e) {
		let t = i.filter((e) => e.dataIndex && !e.exact), n = t.reduce((e, t) => e + s[t.key], 0);
		if (t.length > 0 && n > 0) {
			let r = e - u, i = 0;
			return t.forEach((e, a) => {
				let c = e.key;
				if (a === t.length - 1) s[c] += r - i;
				else {
					let e = Math.floor(r * s[c] / n);
					s[c] += e, i += e;
				}
				o(e, s[c]);
			}), {
				hasHorizontalOverflow: !1,
				bodyWidth: e,
				columnRealWidth: s,
				widthUpdates: a
			};
		}
	}
	return {
		hasHorizontalOverflow: u > e,
		bodyWidth: u,
		columnRealWidth: s,
		widthUpdates: a
	};
}, Qd = ({ containerWidth: e, dataColumns: t, operations: n, fit: r, exactDataIndexes: i }) => {
	let a = new Set(t.filter(Vd).map((e) => e.dataIndex)), o = Zd({
		containerWidth: e,
		dataColumns: t.map((e) => ({
			key: Ud(e),
			dataIndex: e.dataIndex,
			width: e.width,
			minWidth: e.minWidth,
			_resizeWidth: e._resizeWidth,
			exact: Vd(e) || !!(e.dataIndex && i?.includes(e.dataIndex) && !a.has(e.dataIndex))
		})),
		operations: n,
		fit: r
	});
	for (let { index: e, width: n } of o.widthUpdates) t[e]._realWidth = n;
	return {
		hasHorizontalOverflow: o.hasHorizontalOverflow,
		bodyWidth: o.bodyWidth,
		columnRealWidth: o.columnRealWidth
	};
};
// packages/ui/src/table/layout/use-core-layout.ts
function $d(e, t, n, r) {
	let i = /* @__PURE__ */ I([]), a = /* @__PURE__ */ I([]), o = /* @__PURE__ */ I(0), s = /* @__PURE__ */ I(0), c = /* @__PURE__ */ I([]), l = /* @__PURE__ */ I([]), { dir: u } = od(() => t.value, r), d = Q(() => e.tableLayout ?? "fixed"), f = 0;
	V([() => e.columns, u], () => {
		let t = Yd(e.columns ?? [], /* @__PURE__ */ new Map(), {}, u.value);
		i.value = t.dataColumns, a.value = t.groupColumns;
	}, {
		deep: !0,
		immediate: !0,
		flush: "sync"
	}), V([
		i,
		o,
		() => e.fit,
		d
	], () => {
		let t = Qd({
			containerWidth: o.value,
			dataColumns: i.value,
			operations: [],
			fit: e.fit ?? !0
		});
		s.value = t.bodyWidth;
	}, { immediate: !0 });
	let p = () => {
		let e = t.value;
		if (!e || !n.value) return;
		let r = Math.floor(e.clientWidth);
		r !== o.value && (o.value = r);
		let a = Array.from(n.value.querySelectorAll("thead th[data-column-key]")), s = Array.from(n.value.tBodies[0]?.rows[0]?.cells ?? []), u = 0, f = Array.from(n.value.tHead?.rows ?? []).map((e) => {
			let t = u;
			return u += e.getBoundingClientRect().height, t;
		});
		(f.length !== l.value.length || f.some((e, t) => e !== l.value[t])) && (l.value = f);
		let p = [...a, ...s], m = [e, ...p];
		if ((m.length !== c.value.length || m.some((e, t) => e !== c.value[t])) && (c.value = m), d.value === "auto") for (let e of i.value) {
			let t = Ud(e), n = p.find((e) => (e.getAttribute("data-column-layout-key") ?? e.getAttribute("data-column-key")) === t)?.getBoundingClientRect().width;
			n !== void 0 && n > 0 && n !== e._realWidth && (e._realWidth = n);
		}
	};
	return Id(() => c.value.length ? c.value : [t.value], () => !0, p), Yi(p), Zi(p), V([
		i,
		d,
		() => e.showHeader,
		() => e.data,
		() => e.height,
		() => e.maxHeight,
		() => e.size
	], p, {
		flush: "post",
		deep: !0
	}), V(u, () => {
		t.value && Rd(t.value, f);
	}, { flush: "post" }), {
		dataColumns: i,
		groupColumns: a,
		bodyWidth: s,
		headerOffsets: l,
		mode: d,
		dir: u,
		measure: p,
		onScroll: () => {
			t.value && (f = Ld(t.value));
		},
		onKeydown: (e) => {
			if (e.target !== e.currentTarget || !t.value || ![
				"ArrowLeft",
				"ArrowRight",
				"Home",
				"End"
			].includes(e.key)) return;
			let n = t.value, r = Math.max(0, n.scrollWidth - n.clientWidth);
			if (!r) return;
			e.preventDefault();
			let i = u.value === "rtl" ? "ArrowLeft" : "ArrowRight";
			Rd(n, e.key === "Home" ? 0 : e.key === "End" ? r : Ld(n) + (e.key === i ? 40 : -40));
		}
	};
}
// packages/ui/src/table/kernel/frozen-columns.ts
var ef = (e, t) => t === "auto" ? e._realWidth ?? e.width ?? 0 : e._resizeWidth ?? e._realWidth ?? e.width ?? 0, tf = (e) => e.children?.length ? tf(e.children[0]) : e, nf = (e) => e.children?.length ? nf(e.children[e.children.length - 1]) : e;
function rf(e, { dataColumns: t, operations: n, keyOf: r }, i, a = "ltr") {
	if (a === "rtl") {
		let n = e.fixed === "left" ? nf(e) : tf(e), a = t.findIndex((e) => r(e) === r(n));
		return (e.fixed === "left" ? t.slice(a + 1) : t.slice(0, a)).filter((t) => t.fixed === e.fixed).reduce((e, t) => e + ef(t, i), 0);
	}
	let o = 0;
	if (e.fixed === "left") {
		for (let e of n) o += e._realWidth ?? e.width ?? 40;
		let a = tf(e);
		for (let e of t) {
			if (r(a) === r(e)) break;
			o += ef(e, i);
		}
		return o;
	}
	let s = nf(e);
	for (let e = t.length - 1; e >= 0; e--) {
		let n = t[e];
		if (r(s) === r(n)) break;
		n.fixed === "right" && (o += ef(n, i));
	}
	return o;
}
// packages/ui/src/table/render/cell-layout.ts
var af = (e, { dataColumns: t, operations: n }, r, i = "ltr") => rf(e, {
	dataColumns: t,
	operations: n,
	keyOf: Ud
}, r, i), of = (e, t, n = !1) => t.fixed === "left" ? [`${e}-col-fixed-left`, { [`${e}-col-fixed-left-last`]: t.isLastLeftFixed && !n }] : t.fixed === "right" ? [`${e}-col-fixed-right`, { [`${e}-col-fixed-right-first`]: t.isFirstRightFixed }] : [], sf = (e, { dataColumns: t, operations: n }, r, i = "ltr") => {
	if (e.fixed) {
		let a = `${af(e, {
			dataColumns: t,
			operations: n
		}, r, i)}px`;
		return e.fixed === "left" ? { left: a } : { right: a };
	}
	return {};
};
// packages/ui/src/table/render/cells.tsx
function cf(e, t, n, r, i) {
	return Y(t ?? e, {
		...r,
		"data-column-key": n.dataIndex,
		"data-column-layout-key": Ud(n) === n.dataIndex ? void 0 : Ud(n)
	}, { default: () => {
		let e = i();
		return Array.isArray(e) ? e : [e];
	} });
}
function lf(e, t) {
	return Y("span", Z({ class: t.class }, t.interaction), [Y("span", { class: `${e}-th-main` }, [
		t.title(),
		t.sorter?.(),
		t.inlineFilter?.()
	]), t.actions && Y("span", {
		class: `${e}-th-actions`,
		role: "presentation",
		onClick: (e) => e.stopPropagation()
	}, [t.actions()])]);
}
function uf(e, t, n) {
	return Y("span", { class: [`${e}-td-content`, { [`${e}-text-ellipsis`]: n }] }, [t]);
}
function df(e, t) {
	return Y("span", {
		class: [
			`${e}-cell`,
			`${e}-cell-align-${t.align ?? "start"}`,
			{
				[`${e}-cell-fixed-expand`]: t.fixedExpand,
				[`${e}-cell-expand-icon`]: t.hasExpand
			}
		],
		style: t.style
	}, [
		(t.indent ?? 0) > 0 && Y("span", { style: { paddingInlineStart: `${t.indent}px` } }, null),
		t.hasExpand && Y("span", {
			class: `${e}-cell-inline-icon`,
			onClick: t.onExpand
		}, [t.expand?.()]),
		t.content()
	]);
}
// packages/ui/src/_utils/get-value-by-path.ts
var ff = (e, t) => {
	if (!e || !t) return;
	t = t.replace(/\[(\w+)\]/g, ".$1");
	let n = t.split(".");
	if (n.length === 0) return;
	let r = e;
	for (let e = 0; e < n.length; e++) {
		if (!Ed(r) && !wd(r) || !n[e]) return;
		if (e !== n.length - 1) r = r[n[e]];
		else return r[n[e]];
	}
}, pf = /* @__PURE__ */ H({
	__name: "TableSlot",
	props: { slotProps: { default: () => ({}) } },
	setup(e) {
		return (t, n) => U(t.$slots, "default", he(ws(e.slotProps)));
	}
});
// packages/ui/src/table/forward-table-slot.ts
function mf(e) {
	return {
		default: e,
		_: 2
	};
}
function hf(e) {
	return {
		default: (...t) => {
			let n = e(...t);
			return Array.isArray(n) ? n : n == null ? typeof t[1] == "function" ? void 0 : [] : [n];
		},
		_: 2
	};
}
// packages/ui/src/table/render/cell-content.tsx
function gf(e, t, n = {}) {
	if (t.default) return t.default();
	let r = {
		record: e.record?.raw,
		column: e.column,
		rowIndex: e.rowIndex ?? -1
	};
	return t.cell ? Y(pf, { slotProps: r }, mf(t.cell)) : e.column.slots?.cell ? Y(pf, { slotProps: r }, hf(e.column.slots.cell)) : Vd(e.column) && e.column.slotName && n[e.column.slotName] ? Y(pf, { slotProps: r }, mf(n[e.column.slotName])) : e.column.render ? e.column.render(r) : e.column.slotName && n[e.column.slotName] ? Y(pf, { slotProps: r }, mf(n[e.column.slotName])) : String(ff(e.record?.raw, e.column.dataIndex) ?? "");
}
// packages/ui/src/table/header-association.ts
var _f = (e, t = 1e3) => e !== void 0 && Number.isFinite(e) && e >= 1 ? Math.min(t, Math.trunc(e)) : 1;
function vf(e) {
	let t = [], n = [];
	return e.forEach((e, r) => {
		let i = 0;
		for (let a of e) {
			for (; (t[i] ?? 0) > r;) i++;
			let e = _f(a.colSpan), o = _f(a.rowSpan, 65534);
			for (let s = 0; s < e; s++) {
				let e = i + s;
				(n[e] ??= []).push(a.id), t[e] = r + o;
			}
			i += e;
		}
	}), {
		columnHeaders: n,
		headersForSpan(e, t = 1) {
			let r = /* @__PURE__ */ new Set();
			for (let i = e; i < e + _f(t); i++) for (let e of n[i] ?? []) r.add(e);
			return [...r];
		}
	};
}
// packages/ui/src/table/core/render.tsx
function yf(e) {
	let { props: t, slots: n, emit: r, layout: i, prefix: a, headerId: o } = e, { class: s, style: c, "aria-label": l, ...u } = e.attrs, d = (e) => Wd(e, (e) => e.fixed, i.dir.value), f = d(i.dataColumns.value), p = i.groupColumns.value.map(d), m = (e, t) => `${o}-${e}-${t}`, h = vf(p.map((e, t) => e.map((e, n) => ({
		id: m(t, n),
		colSpan: e.colSpan,
		rowSpan: e.rowSpan
	})))), g = (e) => ({
		...i.mode.value === "auto" && !e.children?.length ? {
			width: e.width === void 0 ? void 0 : `${e.width}px`,
			minWidth: e.minWidth === void 0 ? void 0 : `${e.minWidth}px`
		} : {},
		...sf(e, {
			dataColumns: i.dataColumns.value,
			operations: []
		}, i.mode.value, i.dir.value)
	}), _ = (e) => of(a, e), v = (e) => typeof e == "number" ? `${e}px` : e, y = (e) => {
		let t = n.header ?? (e.titleSlotName ? n[e.titleSlotName] : void 0);
		return t ? Y(pf, { slotProps: { column: e } }, mf(t)) : typeof e.title == "function" ? e.title() : e.title;
	}, b = t.data ?? [];
	return Y("div", Z(u, {
		class: [
			a,
			`${a}-size-${t.size ?? "md"}`,
			{
				[`${a}-bordered`]: t.bordered,
				[`${a}-stripe`]: t.stripe,
				[`${a}-hover`]: t.hoverable,
				[`${a}-sticky`]: t.stickyHeader
			},
			s
		],
		style: c,
		"aria-busy": t.loading || void 0
	}), [Y("div", {
		ref: (t) => {
			e.viewport.value = t;
		},
		class: `${a}-viewport`,
		role: "region",
		"aria-label": l ?? "Table",
		tabindex: 0,
		style: {
			height: v(t.height),
			maxHeight: v(t.maxHeight)
		},
		onScroll: i.onScroll,
		onKeydown: i.onKeydown
	}, [Y("table", {
		ref: (t) => {
			e.table.value = t;
		},
		class: `${a}-table`,
		style: {
			tableLayout: i.mode.value,
			width: i.mode.value === "fixed" ? `${i.bodyWidth.value}px` : "100%"
		}
	}, [
		Y("colgroup", null, [i.mode.value === "fixed" && f.map((e) => Y("col", {
			key: Ud(e),
			width: e._realWidth ?? e.width
		}, null))]),
		t.showHeader && Y("thead", null, [p.map((e, n) => Y("tr", { key: n }, [e.map((e, o) => cf("th", void 0, e, {
			key: `${n}-${o}`,
			id: m(n, o),
			class: [
				`${a}-th`,
				..._(e),
				e.cellClass,
				e.headerCellClass
			],
			style: {
				...g(e),
				...t.stickyHeader ? { top: `${i.headerOffsets.value[n] ?? 0}px` } : {},
				...e.cellStyle,
				...e.headerCellStyle
			},
			scope: e.children?.length ? "colgroup" : "col",
			colspan: (e.colSpan ?? 1) > 1 ? e.colSpan : void 0,
			rowspan: (e.rowSpan ?? 1) > 1 ? e.rowSpan : void 0,
			onClick: (t) => r("header-click", e, t)
		}, () => lf(a, {
			class: [`${a}-cell`, `${a}-cell-align-${e.align ?? (e.children ? "center" : "start")}`],
			title: () => Y("span", { class: [`${a}-th-title`, { [`${a}-text-ellipsis`]: e.ellipsis }] }, [y(e)])
		})))]))]),
		Y("tbody", null, [b.length ? b.map((e, i) => Y("tr", {
			key: e[t.rowKey ?? "key"] ?? i,
			class: `${a}-tr`,
			onClick: (t) => r("row-click", e, t)
		}, [f.map((o, s) => cf("td", void 0, o, {
			key: Ud(o),
			class: [
				`${a}-td`,
				..._(o),
				o.cellClass,
				typeof o.bodyCellClass == "function" ? o.bodyCellClass(e) : o.bodyCellClass
			],
			style: {
				...g(o),
				...o.cellStyle,
				...typeof o.bodyCellStyle == "function" ? o.bodyCellStyle(e) : o.bodyCellStyle
			},
			headers: t.showHeader && h.headersForSpan(s).join(" ") || void 0,
			onClick: (t) => r("cell-click", e, o, t)
		}, () => df(a, {
			align: o.align,
			content: () => uf(a, gf({
				record: { raw: e },
				column: o,
				rowIndex: i
			}, { cell: n.cell }, n), o.ellipsis)
		})))])) : Y("tr", { class: `${a}-empty` }, [Y("td", { colspan: Math.max(1, f.length) }, [n.empty ? Y(pf, null, mf(n.empty)) : e.emptyText])])])
	])]), n.footer && Y("div", { class: `${a}-footer` }, [Y(pf, null, mf(n.footer))])]);
}
// packages/ui/src/table/core/index.ts
var bf = md(/* @__PURE__ */ H({
	name: _d("table-core").name,
	inheritAttrs: !1,
	__name: "TableCore",
	props: Fd,
	emits: [
		"row-click",
		"cell-click",
		"header-click"
	],
	setup(e, { expose: t, emit: n }) {
		let r = e, i = n, a = ka(), o = Oa(), s = /* @__PURE__ */ I(), c = /* @__PURE__ */ I(), l = $d(r, s, c, () => a.dir), u = gd("table-core"), d = `c-table-core-header-${Sd()}`, { t: f } = Pd();
		t({ scrollTo: (e) => {
			let t = s.value;
			t && (typeof t.scrollTo == "function" ? t.scrollTo(e) : (e.left !== void 0 && (t.scrollLeft = e.left), e.top !== void 0 && (t.scrollTop = e.top)));
		} });
		let p = () => yf({
			props: r,
			attrs: a,
			slots: o,
			emit: i,
			layout: l,
			viewport: s,
			table: c,
			prefix: u,
			headerId: d,
			emptyText: f("empty.description")
		});
		return (e, t) => (G(), q(p));
	}
})), xf = {
	carouselInteractiveContentInline: {
		hint: "拖动背景切换，输入框保留原生编辑。",
		current: "当前页",
		changes: "切换次数",
		slide: "幻灯片",
		placeholder: "在此输入"
	},
	watermarkApiReviewMainInline: {
		darkSurface: "深色底",
		showWatermark: "显示水印",
		watermarkText: "水印文字",
		localSyntheticContent: "本地合成内容",
		clickThrough: "点击内容"
	},
	watermarkBasicInline: {
		darkSurface: "深色底",
		showWatermark: "显示水印",
		watermarkText: "水印文字",
		localSyntheticContent: "本地合成内容",
		clickThrough: "点击内容"
	},
	watermarkImageInline: {
		failLocalImage: "本地图片失败",
		restoreImage: "恢复图片"
	},
	themeProviderApiReviewMainInline: {
		toggleLocalVariables: "切换局部变量",
		localColor: "局部颜色",
		nestedOverride: "嵌套覆盖",
		outsideRemainsUnchanged: "外部不受影响"
	},
	themeProviderBasicInline: {
		toggleLocalVariables: "切换局部变量",
		localColor: "局部颜色",
		nestedOverride: "嵌套覆盖",
		outsideRemainsUnchanged: "外部不受影响"
	},
	themeProviderLocalThemeInline: {
		toggleLocalTheme: "切换局部主题",
		outer: "外层主题",
		themedButton: "主题按钮",
		openPopup: "打开弹层",
		nestedLight: "嵌套亮色",
		lightButton: "亮色按钮",
		outsideIsUnchanged: "外部保持原主题"
	},
	textareaAutoSizeInline: {
		firstLine: "第一行",
		nativeThreeRows: "原生三行",
		growWithContent: "随内容增高",
		fillSixLines: "填入六行",
		toggleRowLimit: "切换行数上限"
	},
	textareaEmptyPolicyInline: {
		toggleEmptyValue: "切换清空值",
		resetValues: "重置示例",
		direct: "直接编辑",
		deferred: "确认后保存",
		changeThePolicyBeforeClearing: "先切换清空值再清空；延迟编辑确认后回写。"
	},
	tableApiReviewCTable7Inline: {
		name: "姓名",
		score: "分数"
	},
	tableApiReviewCTableColumn1Inline: {
		name: "姓名",
		score: "分数"
	},
	tableColumnReviewInline: {
		name: "姓名",
		score: "分数"
	},
	statisticAnimationInline: {
		dynamicAnimation: "动态开关与配置",
		dynamicTarget: "动态目标",
		disableAnimation: "关闭动画",
		enableAnimation: "启用动画",
		changeOrigin: "切换起点",
		changeDuration: "切换时长",
		from: "起点",
		duration: "；时长"
	},
	splitButtonAsyncActionInline: { published: "发布成功" },
	spaceSplitWrappingInline: {
		wrap: "换行",
		direction: "方向",
		reorder: "重排",
		draft: "草稿",
		draftsStayWithTheirItems: "输入草稿后切换布局或重排，文字仍跟随对应项。",
		separatorsStayWithThePreceding: "分隔符跟随前项，允许位于行尾。"
	},
	sliderInteractionSessionInline: {
		sessionEnd: "交互收尾",
		lastProposal: "；最后提案",
		restoreControls: "恢复可交互",
		whileDraggingPressDR: "拖动滑块时按 D 禁用、R 只读、M 改上限。取消后仍会收到一次 end。"
	},
	selectLoadingInline: {
		beijing: "北京",
		shanghai: "上海",
		guangzhou: "广州",
		loading: "加载状态",
		default: "默认指示器",
		line: "底部加载线",
		multipleActions: "多选动作",
		loadingPausesSelectionClearingAnd: "加载时保留选择，暂停选择、清空和移除；搜索仍可输入，关闭加载后恢复。"
	},
	searchNativeFormInline: {
		toggleWaiting: "切换等待",
		toggleLoadingLayout: "切换加载布局",
		keywords: "关键词",
		captureNativeForm: "记录原生表单",
		readingPreview: "阅读预览",
		editInHistoryThenSubmit: "编辑历史弹层后提交，关键词只提交一份。",
		editsUpdateImmediatelyNativeRequired: "输入即时更新；HTML 必填校验关联此表单。"
	},
	scrollbarLifecycleInline: {
		rememberHandle: "保留句柄",
		activate: "停用与激活",
		mount: "卸载与挂载",
		retainedScroll: "调用保留滚动",
		origin: "回到原点",
		scrollableContent: "可滚动内容"
	},
	scrollbarThumbLifecycleInline: {
		activate: "停用与激活",
		mount: "卸载与挂载",
		hoverWhileDraggingToDeactivate: "拖动时移入停用",
		scrollNotifications: "滚动通知:",
		dragTheHorizontalVerticalThumb: "拖动横向或纵向滑块"
	},
	radioAsyncOptionsInline: { manualResponses: "手动返回" },
	notificationApiReviewMainInline: {
		review: "审查通知",
		triggerAgainAfterChangingControls: "切换属性后再次触发通知",
		triggerAgainToApplyOptions: "修改选项后重新触发"
	},
	notificationApiReviewServiceInline: {
		review: "审查",
		triggerAfterCombiningControls: "组合配置和回调后再次触发",
		triggerAfterChangingControlsInspect: "修改配置后点击触发；可在下方选择方法、编辑参数并查看调用结果",
		trigger: "触发",
		updateHandle: "更新返回句柄",
		closeHandle: "关闭返回句柄"
	},
	messageApiReviewServiceInline: {
		review: "审查",
		triggerAfterCombiningControls: "组合配置和回调后再次触发",
		triggerAfterChangingControlsInspect: "修改配置后点击触发；可在下方选择方法、编辑参数并查看调用结果",
		trigger: "触发",
		updateHandle: "更新返回句柄",
		closeHandle: "关闭返回句柄"
	},
	mentionAsyncFallbackRestoreInline: {
		saveAndReloadToResolve: "模拟保存后重新初始化：请求期间先显示 ID，姓名返回后自动更新。",
		saveAndReload: "模拟保存并重新加载",
		edit: "切换到编辑态",
		read: "切换到阅读态",
		loadingNames: "正在加载姓名…",
		namesLoaded: "姓名已加载",
		savedValue: "模拟保存值"
	},
	mentionAsyncReadPrettyInline: {
		selectXiaomingSearchLisiThen: "输入 @xiaoming 并选择小明，再输入 @lisi 搜索其他人员，然后切换阅读态查看反显。",
		edit: "切换到编辑态",
		read: "切换到阅读态",
		model: "保存值"
	},
	mentionAtomicMentionInline: {
		typeToSelectAPerson: "输入 @ 选择人员；在提及旁按 Backspace 可整体删除。",
		atomicMentions: "原子提及",
		updateMockName: "模拟更新姓名",
		withoutOptionsTypeXiaomingAnd: "无候选项时输入 @xiaoming 并按回车，通过 fallback 解析姓名。",
		fallbackOnly: "仅回退"
	},
	mentionLoadingInline: {
		waitingForData: "等待数据",
		failedTypeToRetry: "请求失败，可继续输入重试",
		dataReceived: "数据已返回",
		manualLoading: "业务控制",
		manualLoading2: "业务加载状态",
		singleLine: "单行输入 @",
		multipleLines: "多行输入 @",
		remoteCandidates: "数据源等待",
		typeA: "输入 @a，手动返回候选数据",
		resolve: "返回数据",
		reject: "模拟失败",
		pendingEditingRemainsAvailable: "请求中，仍可输入",
		loadingDoesNotDisableEditing: "loading 只控制显示，两种输入框均可继续编辑。普通事件返回 Promise 不会触发等待。"
	},
	mentionSearchOptionsInline: {
		localPeopleSearch: "本地人员搜索",
		remotePeopleSearch: "异步人员搜索",
		automaticallyCommitTheOnlyMatching: "唯一候选自动提交",
		commitSingleResult: "唯一结果自动提交",
		localValue: "本地保存值",
		remoteValue: "异步保存值"
	},
	inputTagAsyncFallbackRestoreInline: {
		saveAndReloadToResolve: "模拟保存后重新初始化：请求期间先显示 ID，姓名返回后自动更新。",
		saveAndReload: "模拟保存并重新加载",
		edit: "切换到编辑态",
		read: "切换到阅读态",
		loadingNames: "正在加载姓名…",
		namesLoaded: "姓名已加载",
		savedValues: "模拟保存值"
	},
	inputTagFallbackOptionInline: { loadMockTitles: "模拟获取标题" },
	inputTagFormatLabelInline: {
		formatSelectedText: "格式化文字",
		customizeSelectedContent: "自定义内容"
	},
	inputTagLinkTitleInline: {
		pasteOrTypeOneOf: "粘贴或输入 https://vuejs.org 或 https://github.com；唯一结果自动添加，模型保存原始链接。",
		pasteOrTypeAURL: "粘贴或输入链接",
		couldNotFetchTheTitle: "获取标题失败，请重试",
		submit: "提交"
	},
	inputTagLoadingInline: {
		loading: "加载状态",
		example: "示例",
		loadingIsControlledByBusiness: "通过 loading 显式控制等待展示，普通事件返回 Promise 不会自动加载。"
	},
	inputTagSearchOptionsInline: {
		searchAccounts: "搜索账号",
		searchFailed: "搜索失败",
		savedIDs: "保存的账号",
		singleAccount: "单个账号",
		singleID: "单个账号"
	},
	inputLoadingInline: {
		loading: "加载状态",
		default: "默认指示器",
		editableWhileLoading: "加载时仍可编辑",
		line: "底部加载线",
		loadingKeepsTheInputEditable: "切换加载状态；加载时仍可输入和清空。"
	},
	infiniteScrollSchedulerLifecycleInline: {
		switchTarget: "切换目标",
		activate: "停用与激活",
		newStatusCycle: "新状态循环",
		loads: "加载次数:",
		oldChecksMustNotReplay: "旧检查不能重放。",
		detector: "触底检测"
	},
	imageApiReviewCImagePreview1Inline: {
		open: "打开预览",
		activate: "停用与激活",
		longPresses: "长按通知:",
		switchSource: "换图",
		deactivate: "停用"
	},
	imageApiReviewCImagePreviewAction1Inline: {
		open: "打开预览",
		activate: "停用与激活",
		longPresses: "长按通知:",
		switchSource: "换图",
		deactivate: "停用"
	},
	imageApiReviewServiceInline: {
		review: "审查",
		triggerAfterCombiningControls: "组合配置和回调后再次触发",
		triggerAfterChangingControlsInspect: "修改配置后点击触发；可在下方选择方法、编辑参数并查看调用结果",
		trigger: "触发",
		updateHandle: "更新返回句柄",
		closeHandle: "关闭返回句柄"
	},
	imageControllerLifecycleInline: {
		open: "打开预览",
		activate: "停用与激活",
		longPresses: "长按通知:",
		switchSource: "换图",
		deactivate: "停用"
	},
	imageTrackLifecycleInline: {
		open: "打开",
		activate: "停用与激活",
		loop: "循环",
		replaceImages: "等长换图",
		current: "当前:",
		replaceImages2: "换图",
		deactivate: "停用"
	},
	formFieldIdentityInline: {
		bindA: "绑定 A",
		bindB: "绑定 B",
		unbind: "取消绑定",
		noBoundField: "尚未绑定字段",
		resetCurrent: "重置当前字段",
		validateAndSubmit: "校验并提交",
		theSameItemRetainsA: "同一个 FormItem 切换 A/B：编辑后重置，各自回到第一次绑定时的初值。"
	},
	formSubmitInputsInline: {
		enterAllowed: "请输入 allowed",
		submit: "提交",
		resolveOldest: "返回最早结果",
		editWhileWaitingThenResolve: "提交后修改输入，再返回旧结果：提交次数仍为 0。重新提交并返回本次结果，才会通知。"
	},
	fieldDecoratorApiReviewMainInline: { editFieldContent: "编辑装饰器内容" },
	fieldDecoratorControlSizesInline: {
		hoverOrFocusTruncatedText: "悬停或聚焦省略正文查看全文；触屏点按查看，点外部关闭",
		reset: "恢复选中值"
	},
	fieldDecoratorReviewFixtureInline: { editFieldContent: "编辑装饰器内容" },
	drawerApiReviewServiceInline: {
		review: "审查",
		triggerAfterCombiningControls: "组合配置和回调后再次触发",
		triggerAfterChangingControlsInspect: "修改配置后点击触发；可在下方选择方法、编辑参数并查看调用结果",
		trigger: "触发",
		updateHandle: "更新返回句柄",
		closeHandle: "关闭返回句柄"
	},
	drawerDividersInline: {
		dividers: "分割线",
		dividersAreOffByDefault: "分割线默认关闭，可分别开启。"
	},
	dividerApiReviewMainInline: {
		before: "内容上方",
		after: "内容下方"
	},
	dividerBasicInline: {
		before: "内容上方",
		after: "内容下方"
	},
	dividerContentFlowInline: {
		minimumExplicitWidth: "1px：最小显式线宽",
		contentStaysInNormalFlow: "内容仍正常占位",
		followingContent: "后续正文",
		multilineContent: "4px：多行文字",
		aWrappingSectionTitleReserves: "分区标题支持换行，并为后续内容保留完整空间",
		customContent: "默认插槽",
		firstLine: "第一行",
		secondLine: "第二行",
		hairlineTakesPriorityAndHalves: "thickness ≥ 1；hairline 优先，使用主题线宽的一半。"
	},
	dividerCustomInline: {
		slotTakesPriority: "默认插槽优先",
		customContent: "★ 自定义内容"
	},
	dividerLineAppearanceComparisonInline: {
		numberInset24Spacing16: "数值",
		cssLengthInset2rem: "CSS 长度",
		asymmetricInset832Spacing: "非对称",
		verticalInset824Spacing: "竖直",
		solid: "实线",
		dashed: "虚线",
		dotted: "点线",
		double3px: "双线",
		themeColor: "主题色",
		thickness3px: "线宽",
		halfOpacity05: "半透明",
		zeroOpacityPreservesSpacing: "隐藏线条，保留间距",
		hairlineOverridesThickness: "细线优先"
	},
	dividerWithTextInline: {
		start: "起点",
		center: "居中",
		end: "终点"
	},
	dialogApiReviewServiceInline: {
		review: "审查",
		triggerAfterCombiningControls: "组合配置和回调后再次触发",
		triggerAfterChangingControlsInspect: "修改配置后点击触发；可在下方选择方法、编辑参数并查看调用结果",
		trigger: "触发",
		updateHandle: "更新返回句柄",
		closeHandle: "关闭返回句柄"
	},
	dialogDividersInline: {
		dividers: "分割线",
		dividersAreOffByDefault: "分割线默认关闭，可分别开启。"
	},
	dialogDraggableInline: {
		openDragExample: "打开拖动示例",
		dragTitle: "拖动标题",
		disableDrag: "停用拖动",
		enableDrag: "启用拖动",
		exitFullscreen: "退出全屏",
		fullscreen: "进入全屏",
		dragEnabled: "允许拖动",
		dragStopped: "拖动已停止",
		dragTheTitlePressD: "拖动标题时按 D 开关拖动，按 F 开关全屏。关闭后可以重新打开。"
	},
	dialogServiceContainerInline: {
		notOpened: "尚未打开",
		currentTarget: "当前挂载区域",
		serviceDraft: "服务草稿",
		moveToA: "移动到 A",
		moveToB: "移动到 B",
		serviceTarget: "服务挂载区域",
		opened: "已打开",
		openInA: "打开区域 A",
		targetA: "挂载区域 A",
		targetB: "挂载区域 B"
	},
	dateApiReviewCDatePicker1Inline: { popupContainer: "纯面板：直接嵌入页面，不使用 open" },
	dateEntryBoundaryInline: { popupContainer: "纯面板：直接嵌入页面，不使用 open" },
	countToDecimalFloorInline: {
		smallValue1234e7: "微小数值",
		togglePrecision: "切换精度",
		largeValuePrecision23: "大数按十进制位取整",
		floorTowardNegativeInfinity: "向负无穷取整",
		changesFormattingWithoutReplay: ". 仅改变展示精度，不重播。"
	},
	countToEasingReplayInline: {
		changeCurve: "切换曲线",
		replay: "重新播放",
		changingTheCurveAppliesOn: "切换曲线在下次播放生效；点击重新播放查看效果。"
	},
	countToZeroDurationInline: {
		toggleDuration: "切换时长",
		replay: "重新播放"
	},
	checkboxAsyncOptionsInline: { manualResponses: "手动返回" },
	cascaderLoadMoreInline: {
		expandRemoteGroupThenSettle: "展开 Remote group 后选择返回结果",
		childrenReceived: "子项已返回",
		retryByExpandingAgain: "done() 结束等待，可重新展开重试",
		dataReplacedOldCallbacksAre: "已替换数据，旧回调失效",
		oldResponsesMustNotAdd: "旧请求已返回，不应出现 Stale child",
		expandRemoteGroup: "展开远程分组",
		resolve: "返回子项",
		retry: "结束并重试",
		replaceData: "替换数据",
		resolveOld: "返回旧请求",
		loadmoreUsesACallbackIts: "load-more 使用 done(children) 成功、done() 结束等待；返回值不作为子项。"
	},
	carouselApiReviewCCarousel2Inline: {
		widerCards: "加宽卡片",
		text300pxViewport: "窄容器",
		extraCard: "增加末项",
		empty: "清空项目",
		reverseCards: "反转顺序"
	},
	carouselAutoSizedInline: {
		widerCards: "加宽卡片",
		text300pxViewport: "窄容器",
		extraCard: "增加末项",
		empty: "清空项目",
		reverseCards: "反转顺序"
	},
	carouselControlledInline: { acceptChanges: "接受切换" },
	carouselMultiSlidesInline: {
		acceptChanges: "接受切换",
		loop: "循环"
	},
	carouselSchedulerLifecycleInline: {
		autoplay: "自动播放",
		activate: "停用与激活",
		mount: "卸载与挂载",
		current: "当前:",
		changes: "通知:",
		slide: "幻灯片"
	},
	cardSchedulerLifecycleInline: {
		float: "浮起与回落",
		activate: "停用与激活",
		mount: "卸载与挂载",
		rippleWait: "涟漪等待",
		duration: "零与默认时长",
		floatingLifecycle: "浮起生命周期",
		cardContent: "卡片内容",
		collapse: "回落",
		deactivate: "停用",
		unmount: "卸载"
	},
	buttonControlledLoadingInline: {
		clickSaveToStart: "点击保存，观察业务控制的 loading",
		saved: "保存完成",
		simulatedFailure: "模拟请求失败",
		save: "保存",
		failureRecovery: "失败与恢复",
		asyncClickHandlersOwnTheir: "click 支持 async 回调；业务通过 loading 展示等待，在 finally 中恢复。"
	},
	buttonIconsInline: {
		iconOnly: "纯图标",
		iconAndText: "横排图文",
		stacked: "上下堆叠"
	},
	buttonVariantsInline: {
		navy: "深蓝",
		white: "白色",
		lightGray: "浅灰",
		darkGray: "深灰"
	},
	backTopApiReviewCBackTop1Inline: {
		scrollDown: "滚动到底部",
		switchTarget: "切换目标",
		activate: "停用与激活",
		retainedCommand: "保留命令"
	},
	backTopSchedulerLifecycleInline: {
		scrollDown: "滚动到底部",
		switchTarget: "切换目标",
		activate: "停用与激活",
		retainedCommand: "保留命令"
	},
	formChangeSourceInline: { openAFieldEditAnd: "打开字段、修改并保存，下方显示真实确认事件。" }
}, Sf = {
	comparison: {
		hint: "选择一个对比维度；其他配置和内容保持一致。输入类示例共享同一个值，便于比较外观。",
		configuration: "对比配置"
	},
	alertDismissComparison: {
		closable: "可关闭",
		closeIcon: "自定义关闭图标"
	},
	rateValueRulesComparison: {
		clear: "支持清除",
		count: "任意长度的评分"
	},
	alertContentComparison: {
		title: "提示标题",
		center: "居中",
		banner: "顶部公告"
	},
	drawerPositionSizeComparison: {
		size: "自定义宽度",
		location: "抽屉位置"
	},
	emptyContentComparison: {
		extra: "操作按钮",
		userDefine: "自定义图片和文案"
	},
	resultHttpStatusComparison: {
		403: "HTTP状态码 403",
		404: "HTTP状态码 404",
		500: "HTTP状态码 500"
	},
	progressAppearanceComparison: {
		size: "五档与自定义尺寸",
		status: "八种状态"
	},
	resultStatusComparison: {
		success: "成功状态",
		warning: "警告状态",
		error: "错误状态"
	},
	loadingAppearanceComparison: {
		size: "大小",
		color: "颜色",
		type: "类型"
	},
	countdownFormatComparison: {
		format: "自定义格式",
		millisecond: "显示毫秒",
		custom: "自定义样式",
		dayFormat: "DD 天 HH 时 mm 分 ss 秒"
	},
	radioGroupDeclarationComparison: {
		group: "单选框组",
		groupOptions: "单选框组选项"
	},
	treeAppearanceComparison: {
		size: "不同尺寸",
		blockNode: "节点占一行",
		showLine: "显示连接线"
	},
	dialogSizeComparison: {
		width: "对话框宽度",
		fullscreen: "全屏"
	},
	paginationAuxiliaryControlsComparison: {
		showTotal: "自定义总数插槽",
		showPageSize: "每页条数与公共选择器配置",
		showJumper: "跳转与前后缀插槽"
	},
	progressGroupAppearanceComparison: {
		sizes: "尺寸",
		color: "颜色与纯进度轨"
	},
	schedulerWorkingHoursComparison: {
		workingHours: "工作时间与维护时段",
		dateWorkingHours: "指定日期工作时间"
	},
	segmentedAppearanceStateComparison: {
		size: "尺寸",
		disabled: "禁用"
	},
	checkboxGroupDeclarationComparison: {
		checkboxGroup: "复选框组",
		checkboxGroupOptions: "复选框组选项"
	},
	affixOffsetContainerComparison: {
		top: "顶部偏移",
		bottom: "底部偏移",
		container: "指定滚动容器"
	},
	skeletonContentComparison: {
		titleAndRows: "标题与段落",
		avatarAndCard: "头像与卡片"
	},
	timeFormatComparison: {
		format: "显示格式",
		ampm: "十二小时制"
	},
	countToNumberFormatComparison: {
		precision: "精度",
		duration: "自定义时长",
		timingFunction: "自定义动画曲线"
	},
	stepsTypes: {
		submit: "提交",
		details: "提交信息",
		review: "审核",
		reviewDetails: "审核信息",
		done: "完成",
		complete: "完成信息",
		current: "当前步骤",
		status: "状态",
		hint: "点击步骤或选择序号，对比同一进度的四种外观。"
	},
	menuStructureComparison: {
		group: "选项分组",
		submenu: "多级菜单",
		optionContent: "自定义选项内容"
	},
	dividerLineAppearanceComparison: {
		sizeInset: "间距与缩进",
		lineType: "线型",
		opacityColor: "颜色、线宽与透明度"
	},
	carouselEffectComparison: {
		effectFade: "effect-fade",
		effectCard: "effect-card"
	},
	carouselIndicatorComparison: {
		"indicator-type": "指示器样式",
		"indicator-position": "指示器位置",
		slide: "幻灯片"
	},
	collapseBorderComparison: {
		borderLess: "无边框模式",
		divider: "分割线"
	},
	imageContentComparison: {
		caption: "标题与描述",
		extra: "底部额外内容"
	},
	timelineLayoutComparison: {
		vertical: "纵向时间轴",
		direction: "横向时间轴",
		label: "标签文本位置"
	},
	pageHeaderSurfaceComparison: {
		breadcrumb: "页头上方内容",
		transparent: "透明底色"
	},
	linkAppearanceComparison: {
		size: "五种尺寸",
		linkStatus: "链接状态"
	},
	timeRangeFormatComparison: {
		format: "显示格式",
		ampm: "十二小时制"
	},
	iconAppearanceComparison: {
		size: "图标尺寸",
		color: "图标颜色"
	},
	avatarShapeSizeComparison: {
		size: "尺寸",
		shape: "形状"
	},
	avatarGroupComparison: {
		group: "头像组",
		groupVertical: "纵向头像组"
	},
	inputTagAppearanceStateComparison: {
		size: "输入框尺寸",
		status: "输入框状态"
	},
	calendarBasic: { selection: "当前选择" },
	calendarControlled: {
		today: "选择今天",
		tomorrow: "选择明天",
		hint: "可点击日期或切换月份",
		selected: "选择了",
		panel: "面板切换到",
		external: "外部设置为"
	}
}, Cf = {
	tableCapabilities: {
		layout: "切换列宽布局",
		page: "切换当前页",
		direction: "切换阅读方向",
		replace: "替换数据",
		core: "轻量基础表格",
		paged: "当前页汇总",
		virtual: "虚拟列表与汇总",
		group: "基本信息",
		name: "名称",
		amount: "数量",
		note: "备注",
		changed: "已更新的行",
		total: "合计"
	},
	...xf,
	...Sf,
	filterFormLayout: {
		title: "筛选订单",
		keyword: "订单号或客户名称",
		order: "订单号",
		customer: "客户",
		status: "状态",
		open: "处理中",
		closed: "已完成",
		search: "查询",
		reset: "重置",
		orders: "订单"
	},
	section: {
		permissions: "成员权限",
		scope: "权限变更将应用到所有项目成员。",
		admin: "管理员",
		manage: "管理成员、修改项目设置",
		member: "成员",
		update: "查看项目、更新任务",
		withTitle: "显示标题",
		withDescription: "显示说明",
		latestRelease: "最近一次发布的更新内容。",
		memberDetails: "成员信息",
		history: "发布记录",
		latest: "只看最新",
		all: "查看全部",
		exportRelease: "v1.2 · 新增项目导出",
		memberRelease: "v1.1 · 新增成员管理",
		text: {
			event: "事件类型",
			level: "事件级别",
			tags: "标签",
			remote: "远程处置SOP",
			section: "现场处置",
			onsite: "现场处置SOP",
			safety: "安全须知",
			points: "处置要点",
			skill: "技能等级",
			certificates: "作业证",
			review: "审核",
			abnormal: "多元异常"
		},
		variantLabel: "分组风格",
		optionsLabel: "展示选项",
		variants: {
			line: "分隔线",
			plain: "仅标题",
			card: "边框卡片"
		},
		markerLabel: "显示标题标记",
		endLabel: "底部结束线",
		styleHint: "切换风格会保留已填内容。卡片使用外框表示分组范围。",
		actionsDescription: "引用模板填充本分区；清空后，分区外的技能等级保持不变。",
		applyTemplate: "引用模板",
		clearSection: "清空",
		applied: "已引用现场处置模板。",
		cleared: "已清空现场处置，技能等级保持不变。",
		templateSop: "现场核验标准 SOP",
		templateSafety: "请先阅读现场安全说明，确认作业条件。",
		templatePoints: "按现场处置清单逐项核验，并记录处理结果。",
		lowVoltage: "低压电工证",
		entryPermit: "进仓许可",
		workAtHeight: "登高证",
		highVoltage: "高压电工证",
		levelThree: "三级"
	},
	layout: {
		editModes: {
			direct: "直接编辑",
			click: "单击编辑",
			dblclick: "双击编辑"
		},
		initialModel: {
			name: "林晓",
			department: "产品设计",
			notes: "每周三同步进度，确认后更新本周安排。"
		},
		labels: {
			layout: "表单布局",
			itemLayout: "备注单项布局",
			mode: "编辑模式 edit-mode",
			readPretty: "纯阅读 readPretty",
			contentAlign: "内容对齐 content-align",
			inherit: "继承表单",
			hint: "组合切换表单布局与 direct / click / dblclick 编辑方式，并独立开关 readPretty；通过 content-align 切换内容左、中、右对齐；备注还可单独设置布局。",
			modeDescription: {
				direct: "直接在表单中编辑字段值。",
				click: "单击字段值进入编辑弹层，确认后保存。",
				dblclick: "双击字段值进入编辑弹层，确认后保存。",
				readPretty: "以纯文字展示已保存的值，观察与标签的对齐及长文字换行。"
			},
			description: {
				vertical: "标签在上、控件在下，每个字段单独一行。",
				horizontal: "标签在左、控件在右，每个字段单独一行。",
				inline: "字段依次横向排列，空间不足时换行。"
			},
			name: "姓名",
			department: "部门",
			notes: "备注",
			placeholder: "请输入",
			help: "切换布局后，帮助文字仍显示在控件下方。",
			model: "当前数据"
		}
	},
	labelWidthComparison: { labels: {
		strategy: "标签宽度方案",
		auto: "自动测量",
		columns: "响应式栅格",
		fixed: "固定宽度",
		name: "姓名",
		department: "部门",
		contact: "联系方式",
		extra: "显示额外字段",
		edit: "修改最长标签",
		hint: "切换标签宽度方案，输入数据保持不变。栅格在 576px 以下上下排列；固定标签为 6rem，联系方式一项覆盖为 8rem。",
		model: "当前数据"
	} },
	columnSizingPlayground: {
		labels: {
			fit: "剩余空间优先给弹性列",
			grouped: "分组表头",
			resizable: "拖拽调宽",
			narrow: "窄容器",
			priority: "优先级",
			name: "任务",
			owner: "负责人",
			status: "状态",
			task: "任务信息",
			people: "人员与状态",
			hint: "fixed 使用计算列宽；auto 允许内容影响列宽。拖拽调宽仅 fixed 可用。关闭 fit 后仍铺满容器，但剩余空间改为所有普通数据列按比例分摊。",
			drag: "拖动列边界可调整列宽。",
			auto: "auto 模式下不显示拖拽把手。"
		},
		inspectionTask: "充电设备巡检",
		active: "进行中",
		longTask: "较长的巡检任务名称，用于观察 auto 布局如何根据内容分配宽度",
		done: "已完成"
	},
	defaultValue: {
		uncontrolledInput: "非受控输入框",
		controlledInput: "受控输入框",
		uncontrolledHint: "1. 非受控：defaultValue 提供初始文字。输入后由组件自己保存新值，下方的默认值变量不会随之变化。",
		lastUpdate: "最近一次用户更新",
		none: "（尚未触发）",
		changeDefault: "仅修改 defaultValue",
		remount: "重新挂载输入框",
		uncontrolledSteps: "操作顺序：先输入，再修改 defaultValue，当前文字不会被覆盖；点击重新挂载后，才读取最新的默认值。初始化不会触发 update:modelValue。",
		controlledHint: "2. 受控：v-model 是数据来源。这里初始值为空字符串，仍优先于 defaultValue，不会自动填入默认文字。",
		updateParent: "从父级设置值",
		clearParent: "清空父级值",
		formHint: "表单需要初始值时，请初始化父级绑定字段。defaultValue 不会把初始值写入父级表单。"
	},
	quantityControls: {
		quantityInput: "数量控制示例",
		asyncInput: "异步数量示例",
		waiting: (e) => `等待提交 ${e ?? "空值"}`,
		cancelled: "已取消，旧结果不再生效",
		approved: "已允许",
		rejected: "已拒绝",
		failed: "请求失败，保留原值",
		requestError: "数量提交失败",
		title: "数量控制与步进方向",
		buttonsOnly: "禁止手输",
		disableIncrease: "禁用增加",
		disableDecrease: "禁用减少",
		showIncrease: "显示增加",
		showDecrease: "显示减少",
		longPress: "开启长按",
		acceptedStep: "已接受的步进",
		asyncTitle: "异步允许、拒绝与取消提交",
		asyncHint: "加减、输入或清空后，在下方手动选择审批结果。等待时不能重复提交；外部回填或禁用会取消旧请求。",
		approve: "允许本次变更",
		reject: "拒绝本次变更",
		simulateFailure: "模拟失败",
		externalValue: "外部回填 10",
		enable: "恢复可用",
		disable: "禁用控件",
		committedValue: "已提交值"
	},
	selectionDataFlow: {
		hangzhou: "杭州",
		shanghai: "上海",
		beijing: "北京（禁用）",
		reset: "重置两组表单和日志",
		hint: "两组字段初始都没有值。打开后观察候选行的高亮：高亮不代表选中城市。切换开关会重建两组字段，便于从空值重新比较。",
		inlineTitle: "选择即提交",
		cityPlaceholder: "请选择城市",
		inlineHint: "上下键移动后按 Enter，或点击城市，才更新表单。只打开、移动候选或关闭，不更新表单。",
		noEvents: "尚无组件事件。",
		panelTitle: "确认后提交草稿",
		panelPlaceholder: "选择城市后确认",
		committedValue: "已提交表单值",
		panelHint: "在编辑面板选择城市后，勾选标记表示草稿；确认才保存，取消或 Escape 丢弃草稿。只有候选高亮、尚未选择，不算草稿选择。",
		logsHint: "日志按最新在前排列。open-change 只表示打开或关闭面板；update:modelValue 才对应表单值更新。"
	},
	lifecycle: {
		switchName: "切换名称",
		toggleActive: "切换激活",
		toggleDuration: "切换时长",
		hint: "停用后切换名称，激活直接显示最新图标，不重放旧动画；时长变更取消旧阶段，0立即显示最新名称。"
	}
}, wf = {
	carouselInteractiveContentInline: {
		hint: "Drag the background; inputs retain normal editing.",
		current: "Current",
		changes: "Changes",
		slide: "Slide",
		placeholder: "Type here"
	},
	watermarkApiReviewMainInline: {
		darkSurface: "Dark surface",
		showWatermark: "Show watermark",
		watermarkText: "Watermark text",
		localSyntheticContent: "Local synthetic content",
		clickThrough: "Click through"
	},
	watermarkBasicInline: {
		darkSurface: "Dark surface",
		showWatermark: "Show watermark",
		watermarkText: "Watermark text",
		localSyntheticContent: "Local synthetic content",
		clickThrough: "Click through"
	},
	watermarkImageInline: {
		failLocalImage: "Fail local image",
		restoreImage: "Restore image"
	},
	themeProviderApiReviewMainInline: {
		toggleLocalVariables: "Toggle local variables",
		localColor: "Local color",
		nestedOverride: "Nested override",
		outsideRemainsUnchanged: "Outside remains unchanged"
	},
	themeProviderBasicInline: {
		toggleLocalVariables: "Toggle local variables",
		localColor: "Local color",
		nestedOverride: "Nested override",
		outsideRemainsUnchanged: "Outside remains unchanged"
	},
	themeProviderLocalThemeInline: {
		toggleLocalTheme: "Toggle local theme",
		outer: "Outer:",
		themedButton: "Themed button",
		openPopup: "Open popup",
		nestedLight: "Nested light",
		lightButton: "Light button",
		outsideIsUnchanged: "Outside is unchanged"
	},
	textareaAutoSizeInline: {
		firstLine: "First line",
		nativeThreeRows: "Native three rows",
		growWithContent: "Grow with content",
		fillSixLines: "Fill six lines",
		toggleRowLimit: "Toggle row limit:"
	},
	textareaEmptyPolicyInline: {
		toggleEmptyValue: "Toggle empty value",
		resetValues: "Reset values",
		direct: "Direct",
		deferred: "Deferred",
		changeThePolicyBeforeClearing: "Change the policy before clearing; deferred changes publish on confirm."
	},
	tableApiReviewCTable7Inline: {
		name: "Name",
		score: "Score"
	},
	tableApiReviewCTableColumn1Inline: {
		name: "Name",
		score: "Score"
	},
	tableColumnReviewInline: {
		name: "Name",
		score: "Score"
	},
	statisticAnimationInline: {
		dynamicAnimation: "Dynamic animation",
		dynamicTarget: "Dynamic target",
		disableAnimation: "Disable animation",
		enableAnimation: "Enable animation",
		changeOrigin: "Change origin",
		changeDuration: "Change duration",
		from: "From:",
		duration: "Duration:"
	},
	splitButtonAsyncActionInline: { published: "Published" },
	spaceSplitWrappingInline: {
		wrap: "Wrap",
		direction: "Direction",
		reorder: "Reorder",
		draft: "Draft",
		draftsStayWithTheirItems: "Drafts stay with their items.",
		separatorsStayWithThePreceding: "Separators stay with the preceding item."
	},
	sliderInteractionSessionInline: {
		sessionEnd: "Session end",
		lastProposal: "Last proposal:",
		restoreControls: "Restore controls",
		whileDraggingPressDR: "While dragging, press D, R or M to cancel by changing the configuration."
	},
	selectLoadingInline: {
		beijing: "Beijing",
		shanghai: "Shanghai",
		guangzhou: "Guangzhou",
		loading: "Loading",
		default: "Default",
		line: "Line",
		multipleActions: "Multiple actions",
		loadingPausesSelectionClearingAnd: "Loading pauses selection, clearing and removal while search remains editable."
	},
	searchNativeFormInline: {
		toggleWaiting: "Toggle waiting",
		toggleLoadingLayout: "Toggle loading layout",
		keywords: "Keywords",
		captureNativeForm: "Capture native form",
		readingPreview: "Reading preview",
		editInHistoryThenSubmit: "Edit in history, then submit one native keyword value.",
		editsUpdateImmediatelyNativeRequired: "Edits update immediately; native required validation belongs to this form."
	},
	scrollbarLifecycleInline: {
		rememberHandle: "Remember handle",
		activate: "Activate",
		mount: "Mount",
		retainedScroll: "Retained scroll",
		origin: "Origin",
		scrollableContent: "Scrollable content"
	},
	scrollbarThumbLifecycleInline: {
		activate: "Activate",
		mount: "Mount",
		hoverWhileDraggingToDeactivate: "Hover while dragging to deactivate",
		scrollNotifications: "Scroll notifications",
		dragTheHorizontalVerticalThumb: "Drag the horizontal/vertical thumb"
	},
	radioAsyncOptionsInline: { manualResponses: "Manual responses" },
	notificationApiReviewMainInline: {
		review: "Review",
		triggerAgainAfterChangingControls: "Trigger again after changing controls",
		triggerAgainToApplyOptions: "Trigger again to apply options."
	},
	notificationApiReviewServiceInline: {
		review: "Review",
		triggerAfterCombiningControls: "Trigger after combining controls",
		triggerAfterChangingControlsInspect: "Trigger after changing controls; inspect methods and results below.",
		trigger: "Trigger",
		updateHandle: "Update handle",
		closeHandle: "Close handle"
	},
	messageApiReviewServiceInline: {
		review: "Review",
		triggerAfterCombiningControls: "Trigger after combining controls",
		triggerAfterChangingControlsInspect: "Trigger after changing controls; inspect methods and results below.",
		trigger: "Trigger",
		updateHandle: "Update handle",
		closeHandle: "Close handle"
	},
	mentionAsyncFallbackRestoreInline: {
		saveAndReloadToResolve: "Save and reload to resolve names asynchronously.",
		saveAndReload: "Save and reload",
		edit: "Edit",
		read: "Read",
		loadingNames: "Loading names…",
		namesLoaded: "Names loaded",
		savedValue: "Saved value："
	},
	mentionAsyncReadPrettyInline: {
		selectXiaomingSearchLisiThen: "Select @xiaoming, search @lisi, then switch to reading mode.",
		edit: "Edit",
		read: "Read",
		model: "Model："
	},
	mentionAtomicMentionInline: {
		typeToSelectAPerson: "Type @ to select a person; Backspace removes a whole mention.",
		atomicMentions: "Atomic mentions",
		updateMockName: "Update mock name",
		withoutOptionsTypeXiaomingAnd: "Without options, type @xiaoming and press Enter to resolve the name.",
		fallbackOnly: "Fallback only"
	},
	mentionLoadingInline: {
		waitingForData: "Waiting for data",
		failedTypeToRetry: "Failed; type to retry",
		dataReceived: "Data received",
		manualLoading: "Manual loading",
		manualLoading2: "Manual loading",
		singleLine: "Single line",
		multipleLines: "Multiple lines",
		remoteCandidates: "Remote candidates",
		typeA: "Type @a",
		resolve: "Resolve",
		reject: "Reject",
		pendingEditingRemainsAvailable: "Pending; editing remains available",
		loadingDoesNotDisableEditing: "Loading does not disable editing or await notification handlers."
	},
	mentionSearchOptionsInline: {
		localPeopleSearch: "Local people search",
		remotePeopleSearch: "Remote people search",
		automaticallyCommitTheOnlyMatching: "Automatically commit the only matching candidate.",
		commitSingleResult: "Commit single result",
		localValue: "Local value：",
		remoteValue: "Remote value："
	},
	inputTagAsyncFallbackRestoreInline: {
		saveAndReloadToResolve: "Save and reload to resolve names asynchronously.",
		saveAndReload: "Save and reload",
		edit: "Edit",
		read: "Read",
		loadingNames: "Loading names…",
		namesLoaded: "Names loaded",
		savedValues: "Saved values："
	},
	inputTagFallbackOptionInline: { loadMockTitles: "Load mock titles" },
	inputTagFormatLabelInline: {
		formatSelectedText: "Format selected text",
		customizeSelectedContent: "Customize selected content"
	},
	inputTagLinkTitleInline: {
		pasteOrTypeOneOf: "Paste or type one of the example URLs to resolve its title.",
		pasteOrTypeAURL: "Paste or type a URL",
		couldNotFetchTheTitle: "Could not fetch the title.",
		submit: "Submit"
	},
	inputTagLoadingInline: {
		loading: "Loading",
		example: "Example",
		loadingIsControlledByBusiness: "Loading is controlled by business state."
	},
	inputTagSearchOptionsInline: {
		searchAccounts: "Search accounts",
		searchFailed: "Search failed",
		savedIDs: "Saved IDs:",
		singleAccount: "Single account",
		singleID: "Single ID:"
	},
	inputLoadingInline: {
		loading: "Loading",
		default: "Default",
		editableWhileLoading: "Editable while loading",
		line: "Line",
		loadingKeepsTheInputEditable: "Loading keeps the input editable."
	},
	infiniteScrollSchedulerLifecycleInline: {
		switchTarget: "Switch target",
		activate: "Activate",
		newStatusCycle: "New status cycle",
		loads: "Loads",
		oldChecksMustNotReplay: ". Old checks must not replay",
		detector: "Detector"
	},
	imageApiReviewCImagePreview1Inline: {
		open: "Open",
		activate: "Activate",
		longPresses: "Long presses",
		switchSource: "Switch source",
		deactivate: "Deactivate"
	},
	imageApiReviewCImagePreviewAction1Inline: {
		open: "Open",
		activate: "Activate",
		longPresses: "Long presses",
		switchSource: "Switch source",
		deactivate: "Deactivate"
	},
	imageApiReviewServiceInline: {
		review: "Review",
		triggerAfterCombiningControls: "Trigger after combining controls",
		triggerAfterChangingControlsInspect: "Trigger after changing controls; inspect methods and results below.",
		trigger: "Trigger",
		updateHandle: "Update handle",
		closeHandle: "Close handle"
	},
	imageControllerLifecycleInline: {
		open: "Open",
		activate: "Activate",
		longPresses: "Long presses",
		switchSource: "Switch source",
		deactivate: "Deactivate"
	},
	imageTrackLifecycleInline: {
		open: "Open",
		activate: "Activate",
		loop: "Loop",
		replaceImages: "Replace images",
		current: "Current",
		replaceImages2: "Replace images",
		deactivate: "Deactivate"
	},
	formFieldIdentityInline: {
		bindA: "Bind A",
		bindB: "Bind B",
		unbind: "Unbind",
		noBoundField: "No bound field",
		resetCurrent: "Reset current",
		validateAndSubmit: "Validate and submit",
		theSameItemRetainsA: "The same item retains a separate initial value for each field."
	},
	formSubmitInputsInline: {
		enterAllowed: "Enter allowed",
		submit: "Submit",
		resolveOldest: "Resolve oldest",
		editWhileWaitingThenResolve: "Edit while waiting, then resolve: submit again to validate the new input."
	},
	fieldDecoratorApiReviewMainInline: { editFieldContent: "Edit field content" },
	fieldDecoratorControlSizesInline: {
		hoverOrFocusTruncatedText: "Hover or focus truncated text; tap on touch screens",
		reset: "Reset"
	},
	fieldDecoratorReviewFixtureInline: { editFieldContent: "Edit field content" },
	drawerApiReviewServiceInline: {
		review: "Review",
		triggerAfterCombiningControls: "Trigger after combining controls",
		triggerAfterChangingControlsInspect: "Trigger after changing controls; inspect methods and results below.",
		trigger: "Trigger",
		updateHandle: "Update handle",
		closeHandle: "Close handle"
	},
	drawerDividersInline: {
		dividers: "Dividers",
		dividersAreOffByDefault: "Dividers are off by default and can be enabled independently."
	},
	dividerApiReviewMainInline: {
		before: "Before",
		after: "After"
	},
	dividerBasicInline: {
		before: "Before",
		after: "After"
	},
	dividerContentFlowInline: {
		minimumExplicitWidth: "Minimum explicit width",
		contentStaysInNormalFlow: "Content stays in normal flow",
		followingContent: "Following content",
		multilineContent: "Multiline content",
		aWrappingSectionTitleReserves: "A wrapping section title reserves its full height",
		customContent: "Custom content",
		firstLine: "First line",
		secondLine: "Second line",
		hairlineTakesPriorityAndHalves: "hairline takes priority and halves the theme width."
	},
	dividerCustomInline: {
		slotTakesPriority: "Slot takes priority",
		customContent: "Custom content"
	},
	dividerLineAppearanceComparisonInline: {
		numberInset24Spacing16: "Number · inset=24, spacing=16",
		cssLengthInset2rem: "CSS length · inset=2rem",
		asymmetricInset832Spacing: "Asymmetric · inset=[8, 32], spacing=[12, 24]",
		verticalInset824Spacing: "Vertical · inset=[8, 24], spacing=[12, 20]",
		solid: "solid",
		dashed: "dashed",
		dotted: "dotted",
		double3px: "double · 3px",
		themeColor: "Theme color",
		thickness3px: "Thickness · 3px",
		halfOpacity05: "Half opacity · 0.5",
		zeroOpacityPreservesSpacing: "Zero opacity preserves spacing",
		hairlineOverridesThickness: "Hairline overrides thickness"
	},
	dividerWithTextInline: {
		start: "Start",
		center: "Center",
		end: "End"
	},
	dialogApiReviewServiceInline: {
		review: "Review",
		triggerAfterCombiningControls: "Trigger after combining controls",
		triggerAfterChangingControlsInspect: "Trigger after changing controls; inspect methods and results below.",
		trigger: "Trigger",
		updateHandle: "Update handle",
		closeHandle: "Close handle"
	},
	dialogDividersInline: {
		dividers: "Dividers",
		dividersAreOffByDefault: "Dividers are off by default and can be enabled independently."
	},
	dialogDraggableInline: {
		openDragExample: "Open drag example",
		dragTitle: "Drag title",
		disableDrag: "Disable drag",
		enableDrag: "Enable drag",
		exitFullscreen: "Exit fullscreen",
		fullscreen: "Fullscreen",
		dragEnabled: "Drag enabled",
		dragStopped: "Drag stopped",
		dragTheTitlePressD: "Drag the title, press D to disable dragging or F for fullscreen, and reopen after closing."
	},
	dialogServiceContainerInline: {
		notOpened: "Not opened",
		currentTarget: "Current target:",
		serviceDraft: "Service draft",
		moveToA: "Move to A",
		moveToB: "Move to B",
		serviceTarget: "Service target",
		opened: "Opened",
		openInA: "Open in A",
		targetA: "Target A",
		targetB: "Target B"
	},
	dateApiReviewCDatePicker1Inline: { popupContainer: "popup-container。" },
	dateEntryBoundaryInline: { popupContainer: "popup-container。" },
	countToDecimalFloorInline: {
		smallValue1234e7: "Small value: -1.234e-7",
		togglePrecision: "Toggle precision",
		largeValuePrecision23: "Large value, precision -23:",
		floorTowardNegativeInfinity: "Floor toward negative infinity:",
		changesFormattingWithoutReplay: "Changes formatting without replay."
	},
	countToEasingReplayInline: {
		changeCurve: "Change curve",
		replay: "Replay",
		changingTheCurveAppliesOn: "Changing the curve applies on replay."
	},
	countToZeroDurationInline: {
		toggleDuration: "Toggle duration",
		replay: "Replay"
	},
	checkboxAsyncOptionsInline: { manualResponses: "Manual responses" },
	cascaderLoadMoreInline: {
		expandRemoteGroupThenSettle: "Expand Remote group, then settle below",
		childrenReceived: "Children received",
		retryByExpandingAgain: "Retry by expanding again",
		dataReplacedOldCallbacksAre: "Data replaced; old callbacks are invalid",
		oldResponsesMustNotAdd: "Old responses must not add Stale child",
		expandRemoteGroup: "Expand remote group",
		resolve: "Resolve",
		retry: "Retry",
		replaceData: "Replace data",
		resolveOld: "Resolve old",
		loadmoreUsesACallbackIts: "loadMore uses a callback; its return value does not supply children."
	},
	carouselApiReviewCCarousel2Inline: {
		widerCards: "Wider cards",
		text300pxViewport: "300px viewport",
		extraCard: "Extra card",
		empty: "Empty",
		reverseCards: "Reverse cards"
	},
	carouselAutoSizedInline: {
		widerCards: "Wider cards",
		text300pxViewport: "300px viewport",
		extraCard: "Extra card",
		empty: "Empty",
		reverseCards: "Reverse cards"
	},
	carouselControlledInline: { acceptChanges: "Accept changes" },
	carouselMultiSlidesInline: {
		acceptChanges: "Accept changes",
		loop: "Loop"
	},
	carouselSchedulerLifecycleInline: {
		autoplay: "Autoplay",
		activate: "Activate",
		mount: "Mount",
		current: "Current",
		changes: "; changes",
		slide: "Slide"
	},
	cardSchedulerLifecycleInline: {
		float: "Float",
		activate: "Activate",
		mount: "Mount",
		rippleWait: "Ripple wait",
		duration: "Duration",
		floatingLifecycle: "Floating lifecycle",
		cardContent: "Card content",
		collapse: "Collapse",
		deactivate: "Deactivate",
		unmount: "Unmount"
	},
	buttonControlledLoadingInline: {
		clickSaveToStart: "Click Save to start",
		saved: "Saved",
		simulatedFailure: "Simulated failure",
		save: "Save",
		failureRecovery: "Failure recovery",
		asyncClickHandlersOwnTheir: "Async click handlers own their loading state."
	},
	buttonIconsInline: {
		iconOnly: "Icon only",
		iconAndText: "Icon and text",
		stacked: "Stacked"
	},
	buttonVariantsInline: {
		navy: "Navy",
		white: "White",
		lightGray: "Light gray",
		darkGray: "Dark gray"
	},
	backTopApiReviewCBackTop1Inline: {
		scrollDown: "Scroll down",
		switchTarget: "Switch target",
		activate: "Activate",
		retainedCommand: "Retained command"
	},
	backTopSchedulerLifecycleInline: {
		scrollDown: "Scroll down",
		switchTarget: "Switch target",
		activate: "Activate",
		retainedCommand: "Retained command"
	},
	formChangeSourceInline: { openAFieldEditAnd: "Open a field, edit and save to inspect its confirmation source." }
}, Tf = {
	comparison: {
		hint: "Compare one dimension while keeping the other settings and content identical. Input specimens share the same value.",
		configuration: "Compare configuration"
	},
	alertDismissComparison: {
		closable: "closable",
		closeIcon: "close icon"
	},
	rateValueRulesComparison: {
		clear: "clear",
		count: "count"
	},
	alertContentComparison: {
		title: "title",
		center: "center",
		banner: "banner"
	},
	drawerPositionSizeComparison: {
		size: "Size",
		location: "Location"
	},
	emptyContentComparison: {
		extra: "extra",
		userDefine: "user define"
	},
	resultHttpStatusComparison: {
		403: "403",
		404: "404",
		500: "500"
	},
	progressAppearanceComparison: {
		size: "size",
		status: "status"
	},
	resultStatusComparison: {
		success: "success",
		warning: "warning",
		error: "error"
	},
	loadingAppearanceComparison: {
		size: "size",
		color: "color",
		type: "type"
	},
	countdownFormatComparison: {
		format: "format",
		millisecond: "millisecond",
		custom: "custom",
		dayFormat: "DD [days] HH [hours] mm [minutes] ss [seconds]"
	},
	radioGroupDeclarationComparison: {
		group: "group",
		groupOptions: "group options"
	},
	treeAppearanceComparison: {
		size: "size",
		blockNode: "block node",
		showLine: "show line"
	},
	dialogSizeComparison: {
		width: "Width",
		fullscreen: "Fullscreen"
	},
	paginationAuxiliaryControlsComparison: {
		showTotal: "Custom total slot",
		showPageSize: "Page size and shared selector options",
		showJumper: "Jumper and prefix/suffix slots"
	},
	progressGroupAppearanceComparison: {
		sizes: "sizes",
		color: "color"
	},
	schedulerWorkingHoursComparison: {
		workingHours: "working hours",
		dateWorkingHours: "date working hours"
	},
	segmentedAppearanceStateComparison: {
		size: "size",
		disabled: "disabled"
	},
	checkboxGroupDeclarationComparison: {
		checkboxGroup: "checkbox group",
		checkboxGroupOptions: "checkbox group options"
	},
	affixOffsetContainerComparison: {
		top: "Top offset",
		bottom: "Bottom offset",
		container: "Scroll container"
	},
	skeletonContentComparison: {
		titleAndRows: "title and rows",
		avatarAndCard: "avatar and card"
	},
	timeFormatComparison: {
		format: "format",
		ampm: "ampm"
	},
	countToNumberFormatComparison: {
		precision: "precision",
		duration: "duration",
		timingFunction: "timing function"
	},
	stepsTypes: {
		submit: "Submit",
		details: "Details",
		review: "Review",
		reviewDetails: "Review",
		done: "Done",
		complete: "Complete",
		current: "Current step",
		status: "Status",
		hint: "Click a step or choose a number to compare four appearances at the same progress."
	},
	menuStructureComparison: {
		group: "group",
		submenu: "submenu",
		optionContent: "option content"
	},
	dividerLineAppearanceComparison: {
		sizeInset: "Spacing &amp; Inset",
		lineType: "Line Style",
		opacityColor: "Color, Thickness &amp; Opacity"
	},
	carouselEffectComparison: {
		effectFade: "effect fade",
		effectCard: "effect card"
	},
	carouselIndicatorComparison: {
		"indicator-type": "Indicator types",
		"indicator-position": "Indicator positions",
		slide: "Slide"
	},
	collapseBorderComparison: {
		borderLess: "border less",
		divider: "divider"
	},
	imageContentComparison: {
		caption: "caption",
		extra: "extra"
	},
	timelineLayoutComparison: {
		vertical: "vertical",
		direction: "direction",
		label: "label"
	},
	pageHeaderSurfaceComparison: {
		breadcrumb: "breadcrumb",
		transparent: "transparent"
	},
	linkAppearanceComparison: {
		size: "size",
		linkStatus: "link status"
	},
	timeRangeFormatComparison: {
		format: "format",
		ampm: "ampm"
	},
	iconAppearanceComparison: {
		size: "size",
		color: "color"
	},
	avatarShapeSizeComparison: {
		size: "size",
		shape: "shape"
	},
	avatarGroupComparison: {
		group: "group",
		groupVertical: "group vertical"
	},
	inputTagAppearanceStateComparison: {
		size: "size",
		status: "status"
	},
	calendarBasic: { selection: "Current selection" },
	calendarControlled: {
		today: "Select today",
		tomorrow: "Select tomorrow",
		hint: "Select a date or switch months",
		selected: "Selected",
		panel: "Panel changed to",
		external: "Set externally to"
	}
}, Ef = {
	"zh-CN": Cf,
	"en-US": {
		tableCapabilities: {
			layout: "Toggle column layout",
			page: "Toggle current page",
			direction: "Toggle reading direction",
			replace: "Replace data",
			core: "Lightweight table",
			paged: "Current-page summary",
			virtual: "Virtual rows and summary",
			group: "Information",
			name: "Name",
			amount: "Amount",
			note: "Note",
			changed: "Updated row",
			total: "Total"
		},
		...wf,
		...Tf,
		filterFormLayout: {
			title: "Order filters",
			keyword: "Order number or customer",
			order: "Order",
			customer: "Customer",
			status: "Status",
			open: "Open",
			closed: "Closed",
			search: "Search",
			reset: "Reset",
			orders: "Orders"
		},
		section: {
			permissions: "Member permissions",
			scope: "Permission changes apply to all project members.",
			admin: "Administrator",
			manage: "Manage members and project settings",
			member: "Member",
			update: "View the project and update tasks",
			withTitle: "Show heading",
			withDescription: "Show description",
			latestRelease: "Changes in the latest release.",
			memberDetails: "Member details",
			history: "Release history",
			latest: "Show latest",
			all: "Show all",
			exportRelease: "v1.2 · Added project export",
			memberRelease: "v1.1 · Added member management",
			text: {
				event: "Event type",
				level: "Event level",
				tags: "Tags",
				remote: "Remote SOP",
				section: "Onsite handling",
				onsite: "Onsite SOP",
				safety: "Safety notice",
				points: "Key points",
				skill: "Skill level",
				certificates: "Certificates",
				review: "Review",
				abnormal: "Multiple anomalies"
			},
			variantLabel: "Section style",
			optionsLabel: "Display options",
			variants: {
				line: "Divider",
				plain: "Title only",
				card: "Bordered card"
			},
			markerLabel: "Title marker",
			endLabel: "End divider",
			styleHint: "Switching styles preserves your entries. A card uses its border to mark the section boundary.",
			actionsDescription: "Use a template to fill this section. Clearing it preserves the skill level outside the section.",
			applyTemplate: "Use template",
			clearSection: "Clear",
			applied: "Onsite handling template applied.",
			cleared: "Onsite fields cleared. The skill level is unchanged.",
			templateSop: "Standard onsite review SOP",
			templateSafety: "Read the onsite safety notice and confirm working conditions.",
			templatePoints: "Review the onsite checklist and record the outcome.",
			lowVoltage: "Low voltage",
			entryPermit: "Entry permit",
			workAtHeight: "Work at height",
			highVoltage: "High voltage",
			levelThree: "Level 3"
		},
		layout: {
			editModes: {
				direct: "Direct",
				click: "Single click",
				dblclick: "Double click"
			},
			initialModel: {
				name: "Alex",
				department: "Product design",
				notes: "Review progress every Wednesday and confirm the weekly plan."
			},
			labels: {
				layout: "Form layout",
				itemLayout: "Notes layout",
				mode: "Edit mode",
				readPretty: "Read only display (readPretty)",
				contentAlign: "Content alignment",
				inherit: "Inherit",
				hint: "Switch between direct, click and dblclick editing and toggle readPretty independently. Switch content-align to compare value alignment; Notes can also override the form layout.",
				modeDescription: {
					direct: "Edit values directly in the form.",
					click: "Click a value to edit it in a popover; confirm to save.",
					dblclick: "Double-click a value to edit it in a popover; confirm to save.",
					readPretty: "Show saved values as text. Compare alignment and wrapping with the labels."
				},
				description: {
					vertical: "Labels appear above controls, with each field on its own row.",
					horizontal: "Labels appear beside controls, with each field on its own row.",
					inline: "Fields flow alongside one another and wrap when space runs out."
				},
				name: "Name",
				department: "Team",
				notes: "Notes",
				placeholder: "Enter a value",
				help: "Help stays below the control as the layout changes.",
				model: "Current values"
			}
		},
		labelWidthComparison: { labels: {
			strategy: "Label width strategy",
			auto: "Measured labels",
			columns: "Responsive columns",
			fixed: "Fixed width",
			name: "Name",
			department: "Department",
			contact: "Contact details",
			extra: "Show extra field",
			edit: "Change the longest label",
			hint: "Switch label sizing with the same model. Responsive columns stack below 576px; fixed labels use 6rem, with an 8rem override on the contact field.",
			model: "Current model"
		} },
		columnSizingPlayground: {
			labels: {
				fit: "Distribute space to flexible columns",
				grouped: "Grouped headers",
				resizable: "Resize columns",
				narrow: "Narrow container",
				priority: "Priority",
				name: "Task",
				owner: "Owner",
				status: "Status",
				task: "Task information",
				people: "People and status",
				hint: "fixed uses computed column widths; auto lets cell content affect widths. Resizing is available only in fixed mode. Turning fit off still fills the container, but distributes space across all data columns.",
				drag: "Drag a column boundary to resize it.",
				auto: "auto mode hides resize handles."
			},
			inspectionTask: "Inspect charging equipment",
			active: "Active",
			longTask: "Compare a longer task name and observe how auto layout changes column widths",
			done: "Done"
		},
		defaultValue: {
			uncontrolledInput: "Uncontrolled input",
			controlledInput: "Controlled input",
			uncontrolledHint: "1. Uncontrolled: defaultValue supplies the initial text. Typing updates the component itself; the seed below stays unchanged.",
			lastUpdate: "last emitted value",
			none: "(none)",
			changeDefault: "Change defaultValue only",
			remount: "Remount input",
			uncontrolledSteps: "Try typing, then change defaultValue: the current text stays. Remount to read the latest defaultValue. Initialization never emits update:modelValue.",
			controlledHint: "2. Controlled: v-model is the source of truth. Its initial empty string takes precedence over defaultValue.",
			updateParent: "Update parent value",
			clearParent: "Clear parent value",
			formHint: "For a form, initialize the bound field in the parent. defaultValue does not write an initial value into the parent form."
		},
		quantityControls: {
			quantityInput: "Quantity controls example",
			asyncInput: "Asynchronous quantity example",
			waiting: (e) => `Waiting to commit ${e ?? "empty"}`,
			cancelled: "Cancelled; old result ignored",
			approved: "Approved",
			rejected: "Rejected",
			failed: "Request failed; value preserved",
			requestError: "Quantity request failed",
			title: "Quantity controls and step direction",
			buttonsOnly: "Buttons only",
			disableIncrease: "Disable increase",
			disableDecrease: "Disable decrease",
			showIncrease: "Show increase",
			showDecrease: "Show decrease",
			longPress: "Long press",
			acceptedStep: "Accepted step",
			asyncTitle: "Approve, reject or cancel an asynchronous commit",
			asyncHint: "Step, type or clear the value, then choose an approval result below. Pending operations cannot overlap. External updates and disabling cancel the old request.",
			approve: "Approve",
			reject: "Reject",
			simulateFailure: "Simulate failure",
			externalValue: "Set external value to 10",
			enable: "Enable",
			disable: "Disable",
			committedValue: "Committed value"
		},
		selectionDataFlow: {
			hangzhou: "Hangzhou",
			shanghai: "Shanghai",
			beijing: "Beijing (disabled)",
			reset: "Reset both forms and logs",
			hint: "Each field starts empty. Open it and inspect the highlighted candidate: highlighting does not select a city. Change the switch to remount both fields.",
			inlineTitle: "Selection commits immediately",
			cityPlaceholder: "Choose a city",
			inlineHint: "Move with arrow keys, then press Enter, or click a city. Closing without selecting leaves the form unchanged.",
			noEvents: "No component events yet.",
			panelTitle: "Confirm commits the draft",
			panelPlaceholder: "Choose a city, then confirm",
			committedValue: "Committed form value",
			panelHint: "Choose a city in the editor: the selection mark is a draft. Confirm saves it; cancel or Escape discards it. Highlighting a candidate alone is not a draft selection.",
			logsHint: "Logs are newest first. open-change only changes panel visibility; update:modelValue is the event that writes the form value."
		},
		lifecycle: {
			switchName: "Switch name",
			toggleActive: "Toggle active",
			toggleDuration: "Toggle duration",
			hint: "Inactive changes commit on activation without replay. Duration changes cancel the old phase; zero shows the latest name immediately."
		}
	}
};
function Df(e) {
	return Q(() => (Ef[Nd()] ?? Cf)[e]);
}
// packages/ui/src/table/__demos__/capability-composition.vue?vue&type=script&setup=true&lang.ts
var Of = { class: "table-capability-demo__actions" }, kf = { "data-table-case": "core" }, Af = { "data-table-case": "paged" }, jf = { "data-table-case": "virtual" }, Mf = /*#__PURE__*/ ((e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
})(/* @__PURE__ */ H({
	__name: "capability-composition",
	setup(e) {
		let t = Df("tableCapabilities"), n = /* @__PURE__ */ I(), r = /* @__PURE__ */ I("fixed"), i = /* @__PURE__ */ I(), a = /* @__PURE__ */ I(1), o = /* @__PURE__ */ I(!1), s = Q(() => [{
			title: t.value.group,
			children: [{
				title: t.value.name,
				dataIndex: "name",
				width: 140,
				minWidth: 140,
				fixed: "left"
			}, {
				title: t.value.amount,
				dataIndex: "amount",
				width: 220,
				minWidth: 220
			}]
		}, {
			title: t.value.note,
			dataIndex: "note",
			width: 240,
			minWidth: 240
		}]), c = Q(() => o.value ? [{
			key: "changed",
			name: t.value.changed,
			amount: 7,
			note: t.value.note
		}] : Array.from({ length: 100 }, (e, n) => ({
			key: String(n),
			name: `Cedar ${n}`,
			amount: n,
			note: `${t.value.note} ${n}`
		}))), l = ({ data: e }) => [{
			key: "total",
			name: t.value.total,
			amount: e.reduce((e, t) => e + t.amount, 0),
			note: t.value.note
		}], u = () => {
			let e = i.value ?? (n.value ? getComputedStyle(n.value).direction : "ltr");
			i.value = e === "rtl" ? "ltr" : "rtl";
		};
		return (e, d) => {
			let f = oa("c-table");
			return G(), K("div", {
				ref_key: "host",
				ref: n,
				class: "table-capability-demo"
			}, [
				J("div", Of, [
					J("button", {
						type: "button",
						"data-table-action": "layout",
						onClick: d[0] ||= (e) => r.value = r.value === "fixed" ? "auto" : "fixed"
					}, F(L(t).layout), 1),
					J("button", {
						type: "button",
						"data-table-action": "page",
						onClick: d[1] ||= (e) => a.value = a.value === 1 ? 2 : 1
					}, F(L(t).page), 1),
					J("button", {
						type: "button",
						"data-table-action": "direction",
						onClick: u
					}, F(L(t).direction), 1),
					J("button", {
						type: "button",
						"data-table-action": "data",
						onClick: d[2] ||= (e) => o.value = !o.value
					}, F(L(t).replace), 1)
				]),
				J("section", kf, [J("h4", null, F(L(t).core), 1), Y(L(bf), {
					columns: s.value,
					data: c.value,
					height: 180,
					"table-layout": r.value,
					dir: i.value,
					"aria-label": L(t).core
				}, null, 8, [
					"columns",
					"data",
					"table-layout",
					"dir",
					"aria-label"
				])]),
				J("section", Af, [J("h4", null, F(L(t).paged), 1), Y(f, {
					columns: s.value,
					data: c.value,
					summary: l,
					height: 180,
					dir: i.value,
					"sticky-pagination": !1,
					pagination: {
						modelValue: a.value,
						pageSize: 5,
						responsive: !1
					},
					onPageChange: d[3] ||= (e) => a.value = e
				}, null, 8, [
					"columns",
					"data",
					"dir",
					"pagination"
				])]),
				J("section", jf, [J("h4", null, F(L(t).virtual), 1), Y(f, {
					columns: s.value,
					data: c.value,
					summary: l,
					dir: i.value,
					pagination: !1,
					"virtual-list-props": {
						height: 180,
						estimatedSize: 35,
						buffer: 0
					}
				}, null, 8, [
					"columns",
					"data",
					"dir"
				])])
			], 512);
		};
	}
}), [["__scopeId", "data-v-9c4052e2"]]), Nf = Symbol("CedarConfigProvider");
// packages/ui/es/_utils/maple/components.mjs
function Pf(e, t) {
	return e.setPropsDefaults = function(e) {
		Object.entries(e).forEach(([e, n]) => {
			let r = t[e];
			if (r == null) return;
			let i = Ru(r) ? r.type : r, a = Fu(i) ? i : [i], o = a.includes(Function) && typeof n == "function" && i !== Function ? () => n : a.includes(Object) && (n === null || Ru(n)) ? () => n === null ? null : { ...n } : a.includes(Array) && (n === null || Fu(n)) ? () => n === null ? null : [...n] : n;
			t[e] = Ru(r) ? {
				...r,
				default: o
			} : {
				type: r,
				default: o
			};
		});
	}, e;
}
// packages/ui/es/_utils/global-config.mjs
var Ff = "C", If = "c", Lf = "$cedar", Rf = (e) => e?.componentPrefix ?? Ff, zf = (e, t) => {
	if (!t) throw Error("[Cedar] Component name is required for registration");
	let n = t.startsWith(Ff) ? t.slice(1) : t;
	return `${Rf(e)}${n}`;
}, Bf = (e, t) => {
	t && t.classPrefix && (e.config.globalProperties[Lf] = {
		...e.config.globalProperties[Lf] ?? {},
		classPrefix: t.classPrefix
	});
};
function Vf(e, t, n = {}) {
	let r = t ?? e, i = n.components ?? [e];
	Pf(r, e.props ?? {});
	for (let e of i) e !== r && Pf(e, e.props ?? {});
	return r.install = (e, t) => {
		Bf(e, t);
		for (let r of i) {
			let i = n.resolveName?.(r, t) ?? zf(t, r.name);
			i && e.component(i, r);
		}
		n.setup?.(e, t);
	}, r;
}
var Hf = () => {
	let e = Ls();
	return (e ? B(Nf, void 0) : void 0)?.prefixCls ?? e?.appContext.config.globalProperties[Lf]?.classPrefix ?? If;
}, Uf = (e) => {
	let t = Hf();
	return e ? `${t}-${e}` : t;
}, $ = (e) => {
	let { name: t, classes: n } = Gu(If)(e);
	return {
		name: t,
		get prefix() {
			return Uf(e);
		},
		get cssVarPrefix() {
			return `--${Hf()}-${e}`;
		},
		n: (t) => {
			let n = Hf(), r = `${n}-${e}`;
			return t ? t.startsWith("$") ? t.replace("$", n) : t.startsWith("--") ? `${r}${t}` : `${r}__${t}` : r;
		},
		classes: n
	};
};
function Wf(e, t) {
	if (e === !1 || e == null) return null;
	let n = e === !0 ? t ?? 0 : Number(e), r = Number.isFinite(n) ? Math.min(24, Math.max(0, Math.round(n))) : t ?? 0;
	return `${Hf()}-elevation--${r}`;
}
// packages/ui/es/_utils/is.mjs
var Gf = Object.prototype.toString;
function Kf(e) {
	return Gf.call(e) === "[object Array]";
}
function qf(e) {
	return Gf.call(e) === "[object Null]";
}
function Jf(e) {
	return Gf.call(e) === "[object Boolean]";
}
function Yf(e) {
	return Gf.call(e) === "[object Object]";
}
function Xf(e) {
	return Gf.call(e) === "[object String]";
}
function Zf(e) {
	return Gf.call(e) === "[object Number]" && e === e;
}
function Qf(e) {
	return e === void 0;
}
function $f(e) {
	return typeof e == "function";
}
function ep(e) {
	return Yf(e) && Object.keys(e).length === 0;
}
var tp = (e) => e?.$ !== void 0, np = (e, t) => {
	if (!e || !t) return;
	t = t.replace(/\[(\w+)\]/g, ".$1");
	let n = t.split(".");
	if (n.length === 0) return;
	let r = e;
	for (let e = 0; e < n.length; e++) {
		if (!Yf(r) && !Kf(r) || !n[e]) return;
		if (e !== n.length - 1) r = r[n[e]];
		else return r[n[e]];
	}
}, rp = (e, t, n, { addPath: r } = {}) => {
	if (!e || !t) return;
	t = t.replace(/\[(\w+)\]/g, ".$1");
	let i = t.split(".");
	if (i.length === 0) return;
	let a = e;
	for (let e = 0; e < i.length; e++) {
		if (!Yf(a) && !Kf(a) || !i[e]) return;
		e === i.length - 1 ? a[i[e]] = n : (r && Qf(a[i[e]]) && (a[i[e]] = {}), a = a[i[e]]);
	}
};
// packages/ui/es/table/features/summary/use-summary-data.mjs
function ip(e) {
	let { props: t, dataColumns: n, flattenData: r, flattenRawData: i } = e, a = () => n.value.reduce((e, n, i) => {
		if (n.dataIndex) {
			if (i === 0) rp(e, n.dataIndex, t.summaryText, { addPath: !0 });
			else {
				let t = 0, i = !1;
				r.value.forEach((e) => {
					if (n.dataIndex) {
						let r = np(e.raw, n.dataIndex);
						Zf(r) ? t += r : !Qf(r) && !qf(r) && (i = !0);
					}
				}), rp(e, n.dataIndex, i ? "" : t, { addPath: !0 });
			}
		}
		return e;
	}, {}), o = (e) => e && e.length > 0 ? e.map((e) => ({
		raw: e,
		key: e[t.rowKey]
	})) : [];
	return Q(() => t.summary ? $f(t.summary) ? o(t.summary({
		columns: n.value,
		data: i.value
	})) : o([a()]) : []);
}
// packages/ui/es/table/extra-column.mjs
var ap = "__cedar_table_extra__", op = Symbol("table-extra-column"), sp = Symbol("table-extra-column-layout-key");
function cp(e) {
	return Object.assign(e, { [op]: !0 });
}
function lp(e) {
	return !!e?.[op];
}
function up(e, t) {
	Object.assign(e, { [sp]: t });
}
function dp(e) {
	return e[sp] ?? e.dataIndex;
}
function fp(e) {
	if (!e) return {
		enabled: !1,
		fixed: "right",
		align: "center",
		dataIndex: ap
	};
	let t = e === !0 ? {} : e;
	return {
		enabled: !0,
		width: t.width,
		fixed: t.fixed ?? "right",
		align: t.align ?? "center",
		dataIndex: t.dataIndex ?? "__cedar_table_extra__"
	};
}
function pp(e, t) {
	return t ?? 28;
}
// packages/ui/es/table/features/span/use-span.mjs
var mp = ({ spanMethod: e, data: t, columns: n }) => {
	let r = (t, a) => {
		t?.forEach((o, s) => {
			o.hasSubtree && o.children?.length && r(o.children || [], a), n.value.forEach((r, c) => {
				let { rowspan: l = 1, colspan: u = 1 } = e.value?.({
					record: o.raw,
					column: r,
					rowIndex: s,
					columnIndex: c
				}) ?? {};
				(l > 1 || u > 1) && (a[`${s}-${c}-${o.key}`] = [l, u], Array.from({ length: l }).forEach((e, r) => {
					if (s + r < t.length) {
						let { key: e } = t[s + r] ?? {};
						Array.from({ length: u }).forEach((t, a) => {
							c + a < n.value.length && `${s}-${c}-${o.key}` != `${s + r}-${c + a}-${e}` && (i.value[`${s + r}-${c + a}-${e}`] = [0, 0]);
						});
					}
				}));
			});
		});
	}, i = /* @__PURE__ */ I({});
	return {
		tableSpan: Q(() => {
			let n = {};
			return i.value = {}, e.value && r(t.value, n), n;
		}),
		removedCells: Q(() => {
			let e = [];
			for (let t of Object.keys(i.value)) e.push(t);
			return e;
		})
	};
}, hp = Symbol("CedarTable"), gp = Symbol("CedarTableColumn");
// packages/ui/es/table/column-direction.mjs
function _p(e, t, n = "ltr") {
	return n === "rtl" ? [
		...e.filter((e) => t(e) === "right"),
		...e.filter((e) => !t(e)),
		...e.filter((e) => t(e) === "left")
	] : e;
}
// packages/ui/es/table/structural-slot.mjs
function vp(e) {
	if (Array.isArray(e)) for (let t of e) {
		let e = vp(t);
		if (e) return e;
	}
	else if (vs(e) && e.type !== us && (e.type !== ls || String(e.children ?? "").trim())) return e.type === W && Array.isArray(e.children) ? vp(e.children) : e;
}
// packages/ui/es/table/table-tr.mjs
var { name: yp } = $("tr"), bp = /* @__PURE__ */ H({
	name: yp,
	props: {
		expand: { type: Boolean },
		empty: { type: Boolean },
		checked: { type: Boolean },
		rowIndex: Number,
		record: {
			type: Object,
			default: () => ({})
		}
	},
	setup(e, { slots: t }) {
		let n = B(hp, void 0), r = Uf("table"), i = Q(() => [`${r}-tr`, {
			[`${r}-tr-expand`]: e.expand,
			[`${r}-tr-empty`]: e.empty,
			[`${r}-tr-checked`]: e.checked
		}]);
		return () => Y(vp(t.tr?.({
			rowIndex: e.rowIndex,
			record: e.record?.raw
		})) ?? "tr", { class: i.value }, { default: () => {
			let e = (t) => t.flatMap((t) => Array.isArray(t) ? e(t) : vs(t) && t.type === W && t.key == null && Array.isArray(t.children) ? e(t.children) : [t]), r = e(t.default?.() ?? []);
			return n?.readingDirection === "rtl" ? _p(r, (e) => {
				if (vs(e)) return e.props?.column?.fixed ?? (e.props?.operationColumn?.fixed ? "left" : void 0);
			}, n.readingDirection) : r;
		} });
	}
});
// packages/ui/es/table/render/cells.mjs
function xp(e, t, n, r, i) {
	return Y(t ?? e, {
		...r,
		"data-column-key": n.dataIndex,
		"data-column-layout-key": dp(n) === n.dataIndex ? void 0 : dp(n)
	}, { default: () => {
		let e = i();
		return Array.isArray(e) ? e : [e];
	} });
}
function Sp(e, t) {
	return Y("span", Z({ class: t.class }, t.interaction), [Y("span", { class: `${e}-th-main` }, [
		t.title(),
		t.sorter?.(),
		t.inlineFilter?.()
	]), t.actions && Y("span", {
		class: `${e}-th-actions`,
		role: "presentation",
		onClick: (e) => e.stopPropagation()
	}, [t.actions()])]);
}
function Cp(e, t, n) {
	return Y("span", { class: [`${e}-td-content`, { [`${e}-text-ellipsis`]: n }] }, [t]);
}
function wp(e, t) {
	return Y("span", {
		class: [
			`${e}-cell`,
			`${e}-cell-align-${t.align ?? "start"}`,
			{
				[`${e}-cell-fixed-expand`]: t.fixedExpand,
				[`${e}-cell-expand-icon`]: t.hasExpand
			}
		],
		style: t.style
	}, [
		(t.indent ?? 0) > 0 && Y("span", { style: { paddingInlineStart: `${t.indent}px` } }, null),
		t.hasExpand && Y("span", {
			class: `${e}-cell-inline-icon`,
			onClick: t.onExpand
		}, [t.expand?.()]),
		t.content()
	]);
}
// packages/ui/es/table/features/expansion/use-cell-load.mjs
function Tp(e, t) {
	let n = /* @__PURE__ */ I(!1), r = !0, i = 0, a = () => {
		i++, n.value = !1;
	};
	V([
		() => e.record?.raw,
		() => e.record?.key,
		() => e.record?.isLeaf,
		() => e.record?.children,
		() => t.loadMore
	], a, { flush: "sync" }), Bi(() => {
		r = !0;
	});
	let o = () => {
		r = !1, a();
	};
	return Vi(o), Qi(o), {
		isLoading: n,
		handleClick: (a) => {
			a.stopPropagation();
			let o = e.record, s = t.loadMore;
			if (!r || n.value || typeof s != "function" || o.isLeaf || o.children) return;
			let c = ++i, l = !1;
			n.value = !0;
			let u = (a) => {
				l || (l = !0, r && c === i && e.record.raw === o.raw && e.record.key === o.key && t.loadMore === s && (n.value = !1, a !== void 0 && t.addLazyLoadData?.(a, o)));
			};
			try {
				let e = s(o.raw, u);
				if (e && typeof e.then == "function") return Promise.resolve(e).catch((e) => {
					throw u(), e;
				});
			} catch (e) {
				throw u(), e;
			}
		}
	};
}
// packages/ui/es/table/TableSlot.vue.mjs
var Ep = /* @__PURE__ */ H({
	__name: "TableSlot",
	props: { slotProps: { default: () => ({}) } },
	setup(e) {
		return (t, n) => U(t.$slots, "default", he(ws(e.slotProps)));
	}
});
// packages/ui/es/table/forward-table-slot.mjs
function Dp(e) {
	return {
		default: e,
		_: 2
	};
}
function Op(e) {
	return {
		default: (...t) => {
			let n = e(...t);
			return Array.isArray(n) ? n : n == null ? typeof t[1] == "function" ? void 0 : [] : [n];
		},
		_: 2
	};
}
// packages/ui/es/table/render/cell-content.mjs
function kp(e, t, n = {}) {
	if (t.default) return t.default();
	let r = {
		record: e.record?.raw,
		column: e.column,
		rowIndex: e.rowIndex ?? -1
	};
	return t.cell ? Y(Ep, { slotProps: r }, Dp(t.cell)) : e.column.slots?.cell ? Y(Ep, { slotProps: r }, Op(e.column.slots.cell)) : lp(e.column) && e.column.slotName && n[e.column.slotName] ? Y(Ep, { slotProps: r }, Dp(n[e.column.slotName])) : e.column.render ? e.column.render(r) : e.column.slotName && n[e.column.slotName] ? Y(Ep, { slotProps: r }, Dp(n[e.column.slotName])) : String(np(e.record?.raw, e.column.dataIndex) ?? "");
}
// packages/ui/es/table/kernel/frozen-columns.mjs
var Ap = (e, t) => t === "auto" ? e._realWidth ?? e.width ?? 0 : e._resizeWidth ?? e._realWidth ?? e.width ?? 0, jp = (e) => e.children?.length ? jp(e.children[0]) : e, Mp = (e) => e.children?.length ? Mp(e.children[e.children.length - 1]) : e;
function Np(e, t) {
	let n = t.findIndex((t) => t.name === e.name);
	return n <= 0 ? 0 : t.slice(0, n).reduce((e, t) => e + (t._realWidth ?? t.width ?? 0), 0);
}
function Pp(e, { dataColumns: t, operations: n, keyOf: r }, i, a = "ltr") {
	if (a === "rtl") {
		let n = e.fixed === "left" ? Mp(e) : jp(e), a = t.findIndex((e) => r(e) === r(n));
		return (e.fixed === "left" ? t.slice(a + 1) : t.slice(0, a)).filter((t) => t.fixed === e.fixed).reduce((e, t) => e + Ap(t, i), 0);
	}
	let o = 0;
	if (e.fixed === "left") {
		for (let e of n) o += e._realWidth ?? e.width ?? 40;
		let a = jp(e);
		for (let e of t) {
			if (r(a) === r(e)) break;
			o += Ap(e, i);
		}
		return o;
	}
	let s = Mp(e);
	for (let e = t.length - 1; e >= 0; e--) {
		let n = t[e];
		if (r(s) === r(n)) break;
		n.fixed === "right" && (o += Ap(n, i));
	}
	return o;
}
function Fp(e, t, n = "ltr", r = [], i) {
	return n === "rtl" ? t.slice(t.indexOf(e) + 1).filter((e) => e.fixed).reduce((e, t) => e + (t._realWidth ?? t.width ?? 40), 0) + r.filter((e) => e.fixed === "left").reduce((e, t) => e + Ap(t, i), 0) : Np(e, t);
}
// packages/ui/es/table/render/cell-layout.mjs
var Ip = (e, { dataColumns: t, operations: n }, r, i = "ltr") => Pp(e, {
	dataColumns: t,
	operations: n,
	keyOf: dp
}, r, i), Lp = (e, t) => t.fixed ? [`${e}-col-fixed-left`, { [`${e}-col-fixed-left-last`]: t.isLastLeftFixed }] : [], Rp = (e, t, n = !1) => t.fixed === "left" ? [`${e}-col-fixed-left`, { [`${e}-col-fixed-left-last`]: t.isLastLeftFixed && !n }] : t.fixed === "right" ? [`${e}-col-fixed-right`, { [`${e}-col-fixed-right-first`]: t.isFirstRightFixed }] : [], zp = (e, { dataColumns: t, operations: n }, r, i = "ltr") => {
	if (e.fixed) {
		let a = `${Ip(e, {
			dataColumns: t,
			operations: n
		}, r, i)}px`;
		return e.fixed === "left" ? { left: a } : { right: a };
	}
	return {};
}, Bp = (e, t, n = "ltr", r = [], i) => e.fixed ? { left: `${Fp(e, t, n, r, i)}px` } : {};
// packages/icons/es/_utils/global-config.mjs
function Vp(e) {
	return `c-${e}`;
}
// packages/icons/es/_utils/is.mjs
function Hp(e) {
	return typeof e == "number";
}
// packages/icons/es/icon-loading/icon-loading.vue_vue_type_script_setup_true_lang.mjs
var Up = [
	"stroke-width",
	"stroke-linecap",
	"stroke-linejoin",
	"aria-hidden"
], Wp = { key: 0 }, Gp = /* @__PURE__ */ H({
	name: "CIconLoading",
	__name: "icon-loading",
	props: {
		size: {},
		color: {},
		title: {},
		strokeWidth: { default: 4 },
		strokeLinecap: { default: "butt" },
		strokeLinejoin: { default: "miter" },
		rotate: {},
		spin: { type: Boolean }
	},
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Vp("icon"), a = /^-?(?:\d+|\d*\.\d+)$/, o = Q(() => [
			i,
			`${i}-loading`,
			{ [`${i}-spin`]: n.spin }
		]), s = Q(() => ({
			color: n.color,
			fontSize: Hp(n.size) || a.test(n.size?.trim() ?? "") ? `${n.size}px` : n.size,
			...n.rotate ? { transform: `rotate(${n.rotate}deg)` } : {}
		}));
		return (e, t) => (G(), K("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 48 48",
			width: "1em",
			height: "1em",
			class: P(o.value),
			style: N(s.value),
			"stroke-width": n.strokeWidth,
			"stroke-linecap": n.strokeLinecap,
			"stroke-linejoin": n.strokeLinejoin,
			"aria-hidden": !n.title,
			role: "img",
			onClick: t[0] ||= (e) => r("click", e)
		}, [n.title ? (G(), K("title", Wp, F(n.title), 1)) : X("v-if", !0), t[1] ||= J("path", { d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6" }, null, -1)], 14, Up));
	}
}), Kp = Object.assign(Gp, { install(e) {
	e.component(Gp.name, Gp);
} }), qp = Symbol.for("@cedar-design/vue-id-counter/v1"), Jp = /* @__PURE__ */ new WeakMap(), Yp = Symbol.for("@cedar-design/vue-id-fallback-registry/v1");
function Xp() {
	let e = Reflect.get(globalThis, Yp);
	if (!e && (e = Jp, Object.isExtensible(globalThis))) try {
		Object.defineProperty(globalThis, Yp, { value: e });
	} catch {}
	return e;
}
function Zp() {
	let e = Reflect.get(Au, "useId");
	if (e) return e();
	let t = Ls();
	if (!t) throw Error("useId must be called during component setup");
	let n = t.appContext, r = Reflect.get(n, qp);
	if (!r) {
		if (Object.isExtensible(n)) r = { value: 0 }, Object.defineProperty(n, qp, { value: r });
		else {
			let e = Xp();
			r = e.get(n) ?? { value: 0 }, e.set(n, r);
		}
	}
	return `c-v-${r.value++}`;
}
// packages/ui/es/_utils/visual-surface.mjs
var Qp = Symbol("visual-surface-ancestry"), $p = /* @__PURE__ */ new WeakMap();
function em(e, t, n) {
	let r = typeof n == "function" ? n : void 0, i = Symbol("visual-surface"), a = B(Qp, []);
	vr(Qp, [...a, i]);
	let o = /* @__PURE__ */ I(!0), s;
	function c() {
		if (!s) return;
		let e = s;
		s = void 0, e.surfaces.delete(i), e.sync?.(e.surfaces), r && ![...e.surfaces.values()].some((e) => e.createGroup) && (e.sync = void 0);
	}
	Cr(() => {
		let l = o.value && e();
		if (!l) {
			c();
			return;
		}
		let u = $p.get(l.ownerDocument);
		u || (u = { surfaces: /* @__PURE__ */ new Map() }, $p.set(l.ownerDocument, u)), u !== s && c(), s = u, u.surfaces.set(i, {
			node: l,
			ancestors: a,
			createGroup: r,
			positioned: n === "positioned",
			zIndex: t()
		}), r && (u.sync ??= r(l.ownerDocument)), u.sync?.(u.surfaces);
	}), Qi(c), Vi(() => {
		o.value = !1, c();
	}), Bi(() => {
		o.value = !0;
	});
}
// packages/ui/es/_utils/popup-container.mjs
var tm = {
	type: [
		String,
		Object,
		Boolean
	],
	default: void 0,
	validator: void 0
};
function nm(e) {
	if (e === !1 || e == null || typeof document > "u") return "body";
	if (typeof e != "string") return e;
	try {
		let t = document.querySelector(e);
		if (t) return t;
	} catch {}
	return "body";
}
function rm(e) {
	let t = /* @__PURE__ */ I(!1);
	Yi(() => {
		t.value = !0;
	});
	let n = /* @__PURE__ */ ln("body");
	return V([e, t], ([e, t]) => {
		e !== !1 && (n.value = e && typeof e != "string" ? e : t ? nm(e) : "body");
	}, {
		immediate: !0,
		flush: "sync"
	}), Q(() => n.value);
}
// packages/ui/es/_utils/maple/elements.mjs
var im = (e) => {
	if (e != null) return Lu(e) ? `${e}px` : String(e);
}, am = (e, t = 1) => {
	if (e == null) return;
	let n = im(e), r = n.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
	return `${parseFloat(n) * t}${r}`;
}, om = Symbol("theme-provider-theme");
function sm() {
	let e = B(om, void 0);
	return Q(() => e ? {
		"data-c-theme": e.value.theme,
		style: e.value.vars
	} : {});
}
// packages/ui/es/trigger/popup.mjs
var cm = /* @__PURE__ */ H({
	name: $("trigger-popup").name,
	inheritAttrs: !1,
	props: { options: {
		type: Object,
		required: !0
	} },
	setup(e, { slots: t }) {
		let n = sm();
		return () => {
			let r = e.options;
			return r.rendered ? ic("div", Z(n.value, r.attrs ?? {}, {
				ref: r.setPopup,
				class: r.popupClass,
				style: [r.popupStyle, {
					display: r.displayed ? void 0 : "none",
					pointerEvents: r.animating ? "none" : r.popupStyle?.pointerEvents
				}],
				"trigger-placement": r.placement
			}, r.handlers ?? {}), [ic(Dc, {
				name: r.animationName,
				duration: r.duration,
				appear: !0,
				...r.hooks
			}, { default: () => gr(ic("div", {
				class: r.wrapperClass,
				style: [{ position: "relative" }, r.wrapperStyle]
			}, [ic("div", {
				class: r.contentClass,
				style: r.contentStyle
			}, t.content?.()), r.showArrow ? ic("div", {
				class: r.arrowClass,
				style: r.arrowStyle,
				"aria-hidden": "true"
			}) : null]), [[Gc, r.visible]]) })]) : null;
		};
	}
});
// packages/ui/es/_utils/direction.mjs
function lm(e) {
	let t = Math.max(0, e.scrollWidth - e.clientWidth), n = $u(e) === "rtl" ? t + e.scrollLeft : e.scrollLeft;
	return Math.max(0, Math.min(t, n));
}
function um(e, t) {
	let n = Math.max(0, e.scrollWidth - e.clientWidth), r = Math.max(0, Math.min(n, t));
	return $u(e) === "rtl" ? r - n : r;
}
var dm = { type: String };
function fm(e) {
	let t = Math.max(0, e.scrollWidth - e.clientWidth);
	return Math.max(0, Math.min(t, $u(e) === "rtl" ? -e.scrollLeft : e.scrollLeft));
}
function pm(e, t) {
	let n = Math.max(0, e.scrollWidth - e.clientWidth), r = Math.max(0, Math.min(n, t));
	e.scrollLeft = $u(e) === "rtl" ? -r : r;
}
// packages/ui/es/trigger/interaction-props.mjs
var mm = {
	reference: [String, Object],
	open: {
		type: Boolean,
		default: void 0
	},
	defaultOpen: {
		type: Boolean,
		default: !1
	},
	disabled: {
		type: Boolean,
		default: !1
	},
	trigger: {
		type: [String, Array],
		default: "hover"
	},
	mouseEnterDelay: {
		type: Number,
		default: 100
	},
	mouseLeaveDelay: {
		type: Number,
		default: 100
	},
	focusDelay: {
		type: Number,
		default: 0
	},
	popupHoverStay: {
		type: Boolean,
		default: !0
	},
	blurToClose: {
		type: Boolean,
		default: !0
	},
	closeOnClickReference: {
		type: Boolean,
		default: !0
	},
	clickOutsideToClose: {
		type: Boolean,
		default: !0
	},
	escToClose: {
		type: Boolean,
		default: !0
	},
	restoreFocus: {
		type: Boolean,
		default: !0
	}
}, hm = {
	showArrow: Boolean,
	unmountOnClose: {
		type: Boolean,
		default: !0
	},
	popupClass: [
		String,
		Array,
		Object
	],
	popupStyle: Object,
	contentClass: [
		String,
		Array,
		Object
	],
	contentStyle: Object,
	arrowClass: [
		String,
		Array,
		Object
	],
	arrowStyle: Object,
	duration: [Number, Object]
}, gm = {
	dir: dm,
	...mm,
	...hm,
	placement: {
		type: String,
		default: "bottom"
	},
	strategy: {
		type: String,
		default: "absolute"
	},
	cover: {
		type: Boolean,
		default: !1
	},
	popupOffset: {
		type: Number,
		default: 0
	},
	popupTranslate: { type: [Array, Object] },
	alignPoint: {
		type: Boolean,
		default: !1
	},
	animationName: {
		type: String,
		default: "trigger-fade"
	},
	autoFitPopupWidth: {
		type: Boolean,
		default: !1
	},
	autoFitPopupMinWidth: {
		type: Boolean,
		default: !1
	},
	autoFixPosition: {
		type: Boolean,
		default: !0
	},
	popupContainer: tm,
	updateAtScroll: {
		type: Boolean,
		default: !1
	},
	autoFitTransformOrigin: {
		type: Boolean,
		default: !1
	},
	hideEmpty: {
		type: Boolean,
		default: !1
	},
	openedClass: { type: [
		String,
		Array,
		Object
	] },
	referenceAttrs: { type: [Object, Function] },
	autoFitPosition: {
		type: Boolean,
		default: !0
	},
	preventFocus: {
		type: Boolean,
		default: !1
	},
	scrollToClose: {
		type: Boolean,
		default: !1
	},
	scrollToCloseDistance: {
		type: Number,
		default: 0
	}
};
// packages/ui/es/trigger/reference.mjs
function _m(e) {
	if (Array.isArray(e)) for (let t of e) {
		let e = _m(t);
		if (e) return e;
	}
	else if (e && vs(e)) return e.component ? _m(e.component.subTree) : typeof e.type == "string" && e.el?.nodeType === 1 ? e.el : Array.isArray(e.children) ? _m(e.children) : void 0;
}
function vm(e) {
	let t = { value: [] }, n = /* @__PURE__ */ ln(), r = (e) => {
		n.value !== e && (n.value = e);
	}, i = () => r(_m(t.value));
	return Yi(i), Zi(i), Bi(i), Vi(() => r()), Qi(() => r()), {
		nodes: t,
		element: n
	};
}
function ym(e, t) {
	for (let [n, r] of Object.entries(t)) e?.addEventListener(n, r);
	return () => {
		for (let [n, r] of Object.entries(t)) e?.removeEventListener(n, r);
	};
}
function bm(e, t) {
	let n, r = /* @__PURE__ */ new Map(), i = () => {
		if (n) {
			for (let [e, t] of r) t === null ? n.removeAttribute(e) : n.setAttribute(e, t);
			n = void 0, r = /* @__PURE__ */ new Map();
		}
	};
	V([e, t], ([e, t]) => {
		if (i(), e) {
			n = e;
			for (let [n, i] of Object.entries(t)) {
				if (i == null) continue;
				let t = e.getAttribute(n);
				if (r.set(n, t), n === "aria-describedby") {
					let r = `${t ?? ""} ${String(i)}`.split(/[ \t\n\f\r]+/).filter(Boolean);
					e.setAttribute(n, [...new Set(r)].join(" "));
				} else e.setAttribute(n, String(i));
			}
		}
	}, {
		immediate: !0,
		flush: "post"
	}), Qi(i), Vi(i);
}
function xm(e, t) {
	let n = /* @__PURE__ */ ln(), r, i = !1, a = !1, o = () => {
		if (!i || a) return;
		let o = r ?? t() ?? e.value;
		n.value = typeof o == "string" ? (e.value?.ownerDocument ?? document).querySelector(o) ?? void 0 : o;
	};
	return V([e, t], o, { flush: "sync" }), Yi(() => {
		i = !0, o();
	}), Zi(o), Bi(() => {
		a = !1, o();
	}), Vi(() => {
		a = !0, n.value = void 0;
	}), Qi(() => {
		i = !1, n.value = void 0;
	}), {
		element: n,
		getReference: () => n.value,
		setReference: (e) => {
			r = e, o();
		}
	};
}
// packages/ui/es/trigger/reference-click.mjs
var Sm = /* @__PURE__ */ new WeakSet();
function Cm(e) {
	Sm.add(e);
}
function wm(e) {
	return Sm.has(e);
}
// packages/ui/es/trigger/interaction.mjs
var Tm = Symbol("trigger-interaction"), Em = /* @__PURE__ */ new WeakMap(), Dm = /* @__PURE__ */ new WeakMap(), Om = /* @__PURE__ */ new WeakMap();
function km(e, t) {
	return e ? "composedPath" in t ? t.composedPath().includes(e) || !!(t.target && typeof t.target.nodeType == "number" && e.contains(t.target)) : e.contains(t) : !1;
}
function Am(e, t) {
	let n = B(Tm, void 0), r = /* @__PURE__ */ new Set(), i = (e) => t(e) || [...r].some((t) => t.contains(e)), a = {
		visible: e,
		contains: i,
		children: r,
		enter: () => n?.enter(),
		leave: () => n?.leave()
	};
	vr(Tm, a), n?.children.add(a), Qi(() => n?.children.delete(a));
	let o = (e) => [...e].some((e) => e.visible.value || o(e.children)), s = (e, t = r) => {
		for (let n of [...t].reverse()) if (s(e, n.children) || n.escape?.(e)) return !0;
		return !1;
	}, c = (e) => {
		for (let t of e) t.dismiss?.(), c(t.children);
	};
	return {
		contains: i,
		escapePopup: s,
		hasOpenPopup: () => o(r),
		dismissPopups: () => c(r)
	};
}
function jm(e, t) {
	let n = B(Tm, void 0), r = /* @__PURE__ */ new Set(), i = !0, a = !1, o = !1, s = !1, c = !1, l, u, d = () => {
		u !== void 0 && clearTimeout(u), u = void 0;
	}, f = (e) => {
		let t = l, n = e.pointerId;
		(t?.pointerId === void 0 || typeof n != "number" || t.pointerId === n) && (d(), t && (t.releasedPath = e.composedPath(), u = setTimeout(() => {
			l === t && (l = void 0), u = void 0;
		}, 0)));
	}, p, m, h = () => {
		p = void 0, m !== void 0 && clearTimeout(m), m = void 0;
	}, g = (e) => {
		if (e.isPrimary === !1) return;
		d(), h();
		let n = e;
		l = t.visible.value && y("focus") && n.button === 0 ? {
			path: e.composedPath(),
			target: e.target && typeof e.target.nodeType == "number" ? e.target : null,
			timeStamp: e.timeStamp,
			trusted: e.isTrusted,
			pointerId: typeof n.pointerId == "number" ? n.pointerId : void 0
		} : void 0;
	}, _ = (e) => {
		let t = e.pointerId;
		(l?.pointerId === void 0 || typeof t != "number" || l.pointerId === t) && (l = void 0, d(), h());
	}, v = /* @__PURE__ */ new WeakSet(), y = (t) => [].concat(e.trigger).includes(t), b = (e) => km(t.reference.value, e) || km(t.popup.value ?? void 0, e) || [...r].some((t) => t.contains(e)), x = (e = 0) => {
		i && t.request(!1, e);
	}, S = () => {
		!e.disabled && y("hover") && t.request(!0, e.mouseEnterDelay ?? 0), n?.enter();
	}, C = () => {
		y("hover") && !o && !a && !s && x(e.mouseLeaveDelay ?? 0), n?.leave();
	}, w = {
		visible: t.visible,
		isTopLayer: t.isTopLayer,
		dismiss: () => t.request(!1),
		escape: (e) => fe(e),
		contains: b,
		enter: S,
		leave: C,
		children: r
	};
	vr(Tm, w), n?.children.add(w), n && V(n.visible, (e) => {
		e || t.request(!1);
	});
	let T = (n) => {
		t.onReferenceEvent?.("onClick", n), e.disabled || wm(n) || (y("click") ? t.visible.value ? e.closeOnClickReference !== !1 && x() : (t.onPoint?.(n), t.request(!0)) : y("contextMenu") && t.visible.value && x());
	}, E = (n) => {
		t.onReferenceEvent?.("onMouseenter", n), o = !0, !e.disabled && y("hover") && !t.visible.value && t.onPoint?.(n), S();
	}, D = (e) => {
		t.onReferenceEvent?.("onMouseleave", e), o = !1, C();
	}, ee = (n) => {
		t.onReferenceEvent?.("onFocusin", n), s = !0, !c && !e.disabled && y("focus") && t.request(!0, e.focusDelay ?? 0);
	}, te = (n) => {
		if (t.onReferenceEvent?.("onFocusout", n), t.isMovingBlur?.(n)) return;
		let r = n.relatedTarget;
		r && b(r) || (s = !1, y("focus") && e.blurToClose !== !1 && !(y("hover") && (o || a)) && (i && l && (r && l.path.includes(r) ? l.related = r : (r && l.target && l.path.some((e) => e.nodeType === 1 && e.localName === "label" && e.control === r) || !r && l.target && !b(l.target)) && (l.related = l.target)), x()));
	}, ne = (n) => {
		t.onReferenceEvent?.("onContextmenu", n), !e.disabled && y("contextMenu") && (n.preventDefault(), t.onPoint?.(n), t.request(!0));
	};
	V(t.reference, (e, t, n) => {
		n(ym(e, {
			click: T,
			mouseenter: E,
			mouseleave: D,
			focusin: ee,
			focusout: te,
			contextmenu: ne
		}));
	}, {
		flush: "sync",
		immediate: !0
	});
	let O = () => {
		e.popupHoverStay !== !1 && (a = !0, y("hover") && !e.disabled && t.request(!0), n?.enter());
	}, re = () => {
		a = !1, C();
	}, k = {
		parent: n,
		visible: t.visible,
		reference: t.reference,
		isTopLayer: t.isTopLayer,
		refreshRoots: () => le()
	}, A = !1, j = (e, t = w) => [...t.children].some((t) => Om.get(e)?.has(t) || t.isTopLayer?.(e) || j(e, t)), M = (e) => [...pe ? Em.get(pe) ?? [] : []].some((t) => t !== k && t.parent === n && km(t.reference.value, e) && (t.visible.value && t.isTopLayer(e) || j(e))), ie = /* @__PURE__ */ new WeakSet(), ae = /* @__PURE__ */ new WeakSet(), oe = [], se = 0, ce = (e) => {
		b(e) && ie.add(e), M(e) && ae.add(e);
	}, le = () => {
		for (let e of oe) e.removeEventListener("click", ce, !0);
		let e = /* @__PURE__ */ new Set(), r = [...(pe ? Dm.get(pe) : void 0) ?? []].filter((e) => e.parent === n).map((e) => e.reference.value);
		for (let n of [
			t.reference.value,
			t.popup.value,
			...r
		]) {
			let t = n?.getRootNode();
			for (; t && t.nodeType === 11 && "host" in t;) {
				let n = t;
				n.mode === "closed" && e.add(n), t = n.host.getRootNode();
			}
		}
		oe = [...e];
		for (let e of oe) e.addEventListener("click", ce, !0);
	};
	V(t.visible, () => {
		se++;
	}, { flush: "sync" });
	let ue = (n) => {
		let r = n.pointerId, i = l?.trusted && !n.isTrusted || l?.pointerId !== void 0 && typeof r == "number" && l.pointerId !== r, a = i ? void 0 : l, o = p;
		if (i || (l = void 0), !A || !t.visible.value || e.clickOutsideToClose === !1 || b(n)) return;
		let s = n.composedPath(), c = !!o && n.detail > 0 && (!o.trusted || n.isTrusted) && s.includes(o.control), u = n.target, d = !!a?.related && !!a.target && !!a.releasedPath && !!u && typeof u.contains == "function" && u.contains(a.target) && a.releasedPath.includes(u), f = !!a?.related && (!a.trusted || n.isTrusted) && n.timeStamp >= a.timeStamp && (s.includes(a.related) || d);
		n.detail > 0 && (f || c) && v.add(n), c && h();
		let g = a?.path.find((e) => e.nodeType === 1 && e.localName === "label" && s.includes(e));
		if (g?.control && !s.includes(g.control)) {
			h();
			let e = {
				control: g.control,
				trusted: n.isTrusted
			};
			p = e, m = setTimeout(() => {
				p === e && (p = void 0), m = void 0;
			}, 0);
		}
		let _ = t.isTopLayer(n) || M(n);
		if (oe.some((e) => n.composedPath().includes(e.host))) {
			let e = se;
			setTimeout(() => {
				A && t.visible.value && e === se && !ie.has(n) && (_ || ae.has(n)) && N(n);
			}, 0);
		} else _ && N(n);
	}, N = (e) => {
		let n = Om.get(e);
		n || (n = /* @__PURE__ */ new Set(), Om.set(e, n)), n.add(w), t.onOutside(e), v.has(e) || x();
	}, de = () => {
		if (t.reference.value?.isConnected) {
			c = !0;
			try {
				t.reference.value.focus({ preventScroll: !0 });
			} finally {
				c = !1;
			}
		}
	}, fe = (n) => {
		let r = n.target;
		return A && t.visible.value && e.clickOutsideToClose !== !1 && !n.defaultPrevented && !n.isComposing && [
			"Enter",
			" ",
			"ArrowDown",
			"ArrowUp"
		].includes(n.key) && typeof r?.closest == "function" && r.closest("[aria-haspopup=\"menu\"]") && !r?.closest("input, textarea, [contenteditable=\"true\"], [role=\"textbox\"]") && M(n) ? (x(), !1) : n.key !== "Escape" || n.defaultPrevented || n.isComposing || n.keyCode === 229 || !t.visible.value || e.escToClose === !1 || !t.isTopLayer(n) ? !1 : (n.preventDefault(), x(), R(() => {
			!t.visible.value && e.restoreFocus !== !1 && t.reference.value?.isConnected && de();
		}), !0);
	}, pe, me = !1, P = (e) => {
		let t = e?.getRootNode();
		for (; t && t.nodeType === 11 && "host" in t;) {
			let e = t;
			if (e.mode === "closed") return !0;
			t = e.host.getRootNode();
		}
		return !1;
	}, he = () => {
		if (!pe) return;
		A = !0;
		let e = Em.get(pe);
		if (e || (e = /* @__PURE__ */ new Set(), Em.set(pe, e)), e.add(k), me = P(k.reference.value), me) {
			let e = Dm.get(pe);
			e || (e = /* @__PURE__ */ new Set(), Dm.set(pe, e)), e.add(k);
		}
		if (k.refreshRoots(), me) for (let t of e) t !== k && t.parent === n && t.refreshRoots();
	}, ge = () => {
		if (A = !1, pe) {
			let e = Em.get(pe);
			if (e?.delete(k), me) {
				Dm.get(pe)?.delete(k);
				for (let t of e ?? []) t.parent === n && t.refreshRoots();
			}
			me = !1;
		}
	}, _e = [], ve = !1, ye = !1, be = (e) => {
		km(t.popup.value ?? void 0, e) && fe(e);
	}, xe = (e, t) => {
		let n = e.defaultView, r = (r) => {
			e[r]("pointerdown", g, !0), e[r]("pointerup", f, !0), e[r]("pointercancel", _, !0), e[r]("click", ue, !0), n?.[r]("keydown", t);
		};
		r("addEventListener"), _e.push(() => r("removeEventListener"));
	}, Se = () => {
		se++;
		for (let e of oe) e.removeEventListener("click", ce, !0);
		oe = [], ge(), l = void 0, d(), h();
		for (let e of _e) e();
		_e.length = 0, pe = void 0;
	}, Ce = () => {
		if (Se(), !ve || ye) return;
		pe = t.reference.value?.ownerDocument ?? t.popup.value?.ownerDocument ?? document, he(), le(), xe(pe, fe);
		let e = t.popup.value?.ownerDocument;
		e && e !== pe && xe(e, be);
	};
	return V([t.reference, t.popup], Ce, { flush: "sync" }), V(t.popupTarget, Ce, { flush: "post" }), Yi(() => {
		ve = !0, Ce();
	}), Bi(() => {
		ye = !1, Ce();
	}), Vi(() => {
		ye = !0, Se();
	}), Qi(() => {
		ve = !1, Se(), n?.children.delete(w);
	}), {
		focusReference: de,
		popupEnter: O,
		popupLeave: re,
		popupFocus: ee,
		popupBlur: te,
		contains: b,
		allowClose: () => {
			i = !0;
		},
		setAllowClose: (e) => {
			i = e;
		},
		open: () => t.request(!0),
		close: () => x()
	};
}
// packages/ui/es/_utils/popup-layer.mjs
var Mm = Symbol("popup-layer-depth"), Nm = Symbol("popup-layer-ancestry"), Pm = /* @__PURE__ */ new WeakMap();
function Fm(e) {
	let t = Pm.get(e);
	return t || (t = {
		layers: /* @__PURE__ */ Yt(/* @__PURE__ */ new Map()),
		events: /* @__PURE__ */ new WeakMap(),
		sequence: 0
	}, Pm.set(e, t)), t;
}
function Im(e, t, n, r = !1) {
	let i = Ls(), a = Symbol("popup-layer"), o = B(Mm, 0) + 1, s = B(Nm, []);
	vr(Mm, o), vr(Nm, [...s, a]);
	let c, l = !1, u = !1, d = () => n?.() ?? i?.vnode.el?.ownerDocument ?? (typeof document > "u" ? void 0 : document), f = () => c?.layers.delete(a), p = () => {
		if (!l || u) return;
		let n = d(), i = n ? Fm(n) : void 0;
		c !== i && (f(), c = i), c && (e() ? c.layers.has(a) || c.layers.set(a, {
			id: a,
			zIndex: t,
			depth: o,
			ancestors: s,
			yieldToDescendants: r,
			order: ++c.sequence
		}) : c.layers.delete(a));
	};
	V(e, p, { flush: "sync" }), n && V(n, p, { flush: "post" }), Yi(() => {
		l = !0, p();
	}), Bi(() => {
		u = !1, p();
	}), Vi(() => {
		u = !0, f();
	}), Qi(() => {
		l = !1, f();
	});
	function m(t) {
		if (!c || !e() || u || !c.layers.has(a)) return !1;
		if (t && c.events.has(t)) return c.events.get(t) === a;
		let n = [...c.layers.values()], r = n.filter((e) => !e.yieldToDescendants || !n.some((t) => t.ancestors.includes(e.id))).sort((e, t) => e.zIndex.value - t.zIndex.value || e.depth - t.depth || e.order - t.order).at(-1)?.id ?? null;
		return t && c.events.set(t, r), r === a;
	}
	return {
		onStackTop: m,
		syncOwner: p
	};
}
// packages/ui/es/context/index.mjs
var Lm = /* @__PURE__ */ Jt({
	zIndex: 2e3,
	enableRipple: !0
});
// packages/ui/es/context/zIndex.mjs
function Rm(e, t) {
	let n = /* @__PURE__ */ I(2e3), r = !1, i = () => {
		Lm.zIndex += t, n.value = Lm.zIndex;
	};
	return V(e, (e) => {
		r && e && i();
	}), Yi(() => {
		r = !0, e() ? i() : n.value = Lm.zIndex;
	}), { zIndex: n };
}
// packages/ui/es/trigger/platform.mjs
function zm(e, t) {
	let n = B(Nf, void 0), { zIndex: r } = Rm(() => e.value, 1), { onStackTop: i } = Im(() => e.value, r, t);
	return {
		zIndex: r,
		onStackTop: i,
		globalScrollToClose: Q(() => n?.scrollToClose ?? !1),
		globalUpdateAtScroll: Q(() => n?.updateAtScroll ?? !1)
	};
}
// packages/ui/es/trigger/arrow.mjs
function Bm(e, t, n, { customStyle: r = {}, padding: i = 8 } = {}) {
	let a = /^(left|right)/.test(e), o = a ? n.height : n.width, s = a ? t.scrollTop + t.height / 2 - n.scrollTop : t.scrollLeft + t.width / 2 - n.scrollLeft, c = Math.min(Math.max(i, 0), o / 2), l = Math.max(c, Math.min(o - c, s)), u = e.split("-")[0], d = {
		top: "bottom",
		bottom: "top",
		left: "right",
		right: "left"
	}[u], f = {
		top: "-50%,50%",
		bottom: "-50%,-50%",
		left: "50%,-50%",
		right: "-50%,-50%"
	}[u];
	return {
		position: "absolute",
		[a ? "top" : "left"]: `${l}px`,
		[d]: "0",
		transform: `translate(${f}) rotate(45deg)`,
		...r
	};
}
// packages/ui/es/trigger/geometry.mjs
function Vm(e, t) {
	let n = e.ownerDocument.defaultView, r = t === "fixed" || !t && n?.getComputedStyle(e).position === "fixed", i = e.offsetParent;
	if (r) for (i = e.parentElement; i;) {
		let e = n?.getComputedStyle(i), t = e?.willChange ?? "";
		if (e?.transform && e.transform !== "none" || e?.perspective && e.perspective !== "none" || e?.filter && e.filter !== "none" || e?.backdropFilter && e.backdropFilter !== "none" || /\b(layout|paint|strict|content)\b/.test(e?.contain ?? "") || /\b(transform|perspective|filter|contain)\b/.test(t) || e?.getPropertyValue("content-visibility") === "auto") break;
		i = i.parentElement;
	}
	if (!i || !r && i === e.ownerDocument.body && n?.getComputedStyle(i).position === "static") return {
		x: r ? 0 : -(n?.scrollX ?? 0),
		y: r ? 0 : -(n?.scrollY ?? 0),
		scaleX: 1,
		scaleY: 1
	};
	let a = i.getBoundingClientRect(), o = i.offsetWidth && a.width / i.offsetWidth || 1, s = i.offsetHeight && a.height / i.offsetHeight || 1;
	return {
		x: a.left + (i.clientLeft - i.scrollLeft) * o,
		y: a.top + (i.clientTop - i.scrollTop) * s,
		scaleX: o,
		scaleY: s
	};
}
function Hm(e, t) {
	let { x: n, y: r, scaleX: i, scaleY: a } = t;
	return {
		scrollTop: (e.top - r) / a,
		scrollLeft: (e.left - n) / i,
		width: e.width / i,
		height: e.height / a
	};
}
function Um(e, t, n) {
	if (t === n) return e;
	function r(e) {
		let t = /* @__PURE__ */ new Map(), n = e, r = {
			x: 0,
			y: 0,
			scaleX: 1,
			scaleY: 1
		};
		for (; n;) {
			t.set(n, r);
			let e = null;
			try {
				e = n.defaultView?.frameElement;
			} catch {
				break;
			}
			if (!e) break;
			let i = e.getBoundingClientRect(), a = e.offsetWidth && i.width / e.offsetWidth || 1, o = e.offsetHeight && i.height / e.offsetHeight || 1;
			r = {
				x: i.left + (e.clientLeft + r.x) * a,
				y: i.top + (e.clientTop + r.y) * o,
				scaleX: r.scaleX * a,
				scaleY: r.scaleY * o
			}, n = e.ownerDocument;
		}
		return t;
	}
	let i = r(t), a = r(n);
	for (let [t, n] of i) {
		let r = a.get(t);
		if (r) return {
			left: (n.x + e.left * n.scaleX - r.x) / r.scaleX,
			top: (n.y + e.top * n.scaleY - r.y) / r.scaleY,
			width: e.width * n.scaleX / r.scaleX,
			height: e.height * n.scaleY / r.scaleY
		};
	}
}
function Wm(e, t, n, r = 0, i = [0, 0], a = "ltr") {
	let [o, s] = e.split("-"), c = o === "left" || o === "right", l = t.scrollLeft + (t.width - n.width) / 2, u = t.scrollTop + (t.height - n.height) / 2;
	return c ? (l = o === "left" ? t.scrollLeft - n.width - r : t.scrollLeft + t.width + r, s && (u = t.scrollTop + (s === "end" ? t.height - n.height : 0))) : (u = o === "top" ? t.scrollTop - n.height - r : t.scrollTop + t.height + r, s && (l = t.scrollLeft + (s === "end" == (a === "rtl") ? 0 : t.width - n.width))), {
		left: l + i[0],
		top: u + i[1]
	};
}
function Gm(e, t = "ltr") {
	return t === "rtl" && /^(top|bottom)-(start|end)$/.test(e) && (e = e.replace(/(start|end)$/, (e) => e === "start" ? "end" : "start")), `${/^(top|bottom)$/.test(e) ? "50%" : /^(left|top-end|bottom-end)/.test(e) ? "100%" : "0"} ${/^(left|right)$/.test(e) ? "50%" : /^(top|left-end|right-end)/.test(e) ? "100%" : "0"}`;
}
// packages/ui/es/trigger/position.mjs
function Km(e) {
	let t = e?.visualViewport;
	return {
		width: t?.width ?? e?.innerWidth ?? 0,
		height: t?.height ?? e?.innerHeight ?? 0,
		left: t?.offsetLeft ?? 0,
		top: t?.offsetTop ?? 0
	};
}
function qm(e) {
	return e.split("-")[0];
}
function Jm(e) {
	let [t, n] = e.split("-");
	return `${{
		top: "bottom",
		bottom: "top",
		left: "right",
		right: "left"
	}[t]}${n ? `-${n}` : ""}`;
}
function Ym(e, t) {
	return t ? Array.isArray(t) ? t : t[e] ?? [0, 0] : [0, 0];
}
function Xm(e, t, n, r, i, a) {
	return Wm(e, t, n, r, Ym(e, i), a);
}
function Zm(e, t, n, r, i) {
	let a = Km(i.view), o = a.width / i.scaleX, s = a.height / i.scaleY, c = i.origin.left - a.left / i.scaleX, l = i.origin.top - a.top / i.scaleY, u = e, d = t, f = (e) => ({
		top: l + e.top,
		bottom: s - (l + e.top + r.height),
		left: c + e.left,
		right: o - (c + e.left + r.width)
	});
	if (f(d)[qm(e)] < 0) {
		let t = Jm(e), a = Xm(t, n, r, i.distance, i.translate, i.direction);
		f(a)[qm(t)] >= 0 && (u = t, d = a);
	}
	let p = f(d), m = qm(u);
	return m === "top" || m === "bottom" ? p.left < 0 ? d.left -= p.left : p.right < 0 && (d.left += p.right) : p.top < 0 ? d.top -= p.top : p.bottom < 0 && (d.top += p.bottom), m === "top" || m === "bottom" ? d.top = Math.max(-l, Math.min(d.top, s - r.height - l)) : d.left = Math.max(-c, Math.min(d.left, o - r.width - c)), {
		offset: d,
		placement: u
	};
}
function Qm(e, t, n, r) {
	let i = Xm(e, t, n, r.distance, r.translate, r.direction), a = r.autoFitPosition ? Zm(e, i, t, n, r) : {
		offset: i,
		placement: e
	};
	return {
		placement: a.placement,
		style: {
			...r.customStyle,
			position: r.strategy,
			left: `${a.offset.left}px`,
			top: `${a.offset.top}px`
		}
	};
}
function $m(e) {
	try {
		return e.defaultView?.frameElement ?? null;
	} catch {
		return null;
	}
}
function eh(e) {
	let t = e.parentNode;
	return t?.nodeType === 11 && "host" in t ? t : void 0;
}
function th(e) {
	return e.assignedSlot ?? e.parentElement ?? eh(e)?.host ?? $m(e.ownerDocument);
}
function nh(e) {
	let t = [], n = /* @__PURE__ */ new Set(), r = e;
	for (; r && !n.has(r);) {
		n.add(r);
		let e = th(r);
		if (e && e.ownerDocument === r.ownerDocument && e !== e.ownerDocument.documentElement) {
			let n = e.ownerDocument.defaultView?.getComputedStyle(e), r = `${n?.overflow ?? ""}${n?.overflowX ?? ""}${n?.overflowY ?? ""}`;
			/(auto|scroll|overlay)/.test(r) && t.push(e);
		}
		r = e;
	}
	return t;
}
function rh(e) {
	let t = [], n = /* @__PURE__ */ new Set(), r = e;
	for (; r && !n.has(r);) {
		n.add(r);
		let e = r.parentElement?.shadowRoot ?? eh(r);
		e && t.push(e), r = th(r);
	}
	return t;
}
function ih(e) {
	let t = [], n = e?.ownerDocument, r = /* @__PURE__ */ new Set();
	for (; n && !r.has(n);) r.add(n), n.defaultView && t.push(n.defaultView), n = $m(n)?.ownerDocument;
	return t;
}
// packages/ui/es/trigger/reference-motion.mjs
var ah = [
	"transitionend",
	"transitioncancel",
	"animationend",
	"animationcancel"
];
function oh(e, t) {
	let n = /* @__PURE__ */ new Set([...ih(e).map((e) => e.document), ...rh(e)]), r = (n) => {
		let r = n.composedPath()[0], i = e;
		for (; i;) {
			if (i === r) {
				t();
				return;
			}
			i = th(i);
		}
	};
	for (let e of n) for (let t of ah) e.addEventListener(t, r, !0);
	return () => {
		for (let e of n) for (let t of ah) e.removeEventListener(t, r, !0);
	};
}
// packages/ui/es/_utils/resize-observer.mjs
function sh(e, t, n, r = !0) {
	let i = !1, a = !1, o, s, c, l, u, d = [], f = () => [...new Set(e().filter((e) => !!e))], p = [], m = 0, h = 0, g = (e = [], r = m) => {
		if (r !== m || !i || a || !t() || !s || (p = [...p, ...e], u !== void 0 || !s)) return;
		let o = ++h;
		u = s.requestAnimationFrame(() => {
			if (r !== m || o !== h) return;
			h++, u = void 0;
			let e = p;
			p = [], i && !a && t() && n(e);
		});
	}, _ = () => {
		m++, h++, o?.disconnect(), o = void 0, d = [], l && (s?.removeEventListener("resize", l), c?.removeEventListener("resize", l), c?.removeEventListener("scroll", l)), l = void 0, c = void 0, u !== void 0 && s?.cancelAnimationFrame(u), u = void 0, p = [], s = void 0;
	}, v = () => {
		if (_(), !i || a || !t()) return;
		let e = f();
		d = e, s = e[0]?.ownerDocument.defaultView;
		let n = s?.ResizeObserver, u = m;
		if (l = () => g([], u), c = s?.visualViewport, n) {
			o = new n((e) => g(e, u));
			for (let t of e) o.observe(t, { box: "border-box" });
		}
		s?.addEventListener("resize", l, { passive: !0 }), c?.addEventListener("resize", l, { passive: !0 }), c?.addEventListener("scroll", l, { passive: !0 }), r && g();
	};
	V(() => [t(), ...e()], v, { flush: "post" }), Zi(() => {
		if (!t()) return;
		let e = f();
		(e.length !== d.length || e.some((e, t) => e !== d[t])) && v();
	}), Yi(() => {
		i = !0, v();
	}), Bi(() => {
		a = !1, v();
	}), Vi(() => {
		a = !0, _();
	}), Qi(() => {
		i = !1, _();
	});
}
// packages/ui/es/trigger/positioner.mjs
function ch(e, t) {
	let n, r, i, a, o = 0, s = (s) => {
		if (i = s, a = s?.currentTarget ?? s?.target, n !== void 0) return;
		let c = s?.target?.ownerDocument?.defaultView ?? t();
		if (!c) return;
		r = c;
		let l = o;
		n = c.requestAnimationFrame(() => {
			if (l !== o) return;
			o++, n = void 0, r = void 0;
			let t = i, s = a;
			i = void 0, a = void 0, e(t, s);
		});
	};
	return s.cancel = () => {
		o++, n !== void 0 && r?.cancelAnimationFrame(n), n = void 0, r = void 0, i = void 0, a = void 0;
	}, s;
}
function lh(e, t) {
	let n = /* @__PURE__ */ I(e.placement), r = /* @__PURE__ */ I({}), i = /* @__PURE__ */ I({}), a = /* @__PURE__ */ I({}), o = /* @__PURE__ */ I({
		width: 0,
		height: 0
	}), s = !1, c = 0, l = [], u = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap(), f = [], p = [];
	function m() {
		let l = t.reference.value, u = t.popup.value;
		if (!l || !u || !t.visible.value || s) return;
		let d = ++c, f = l.ownerDocument, p = u.ownerDocument, m = () => !s && d === c && t.visible.value && t.reference.value === l && t.popup.value === u && l.ownerDocument === f && u.ownerDocument === p, h = u.ownerDocument.defaultView, g = Vm(u, e.strategy), _ = t.point.value, v = Um(_ ? {
			top: _.y,
			bottom: _.y,
			left: _.x,
			right: _.x,
			width: 0,
			height: 0
		} : l.getBoundingClientRect(), l.ownerDocument, u.ownerDocument);
		if (!v || !m()) return;
		let y = Hm(v, g), b = Hm(u.getBoundingClientRect(), g);
		if (!m() || (o.value = {
			width: y.width,
			height: y.height
		}, !m())) return;
		e.autoFitPopupMinWidth ? b.width = Math.max(b.width, y.width) : e.autoFitPopupWidth && (b.width = y.width);
		let x = e.popupOffset - (e.cover ? /^(left|right)/.test(e.placement) ? y.width : y.height : 0), S = Qm(e.placement, y, b, {
			direction: t.direction?.value,
			origin: {
				left: g.x / g.scaleX,
				top: g.y / g.scaleY
			},
			scaleX: g.scaleX,
			scaleY: g.scaleY,
			distance: x,
			translate: e.popupTranslate,
			autoFitPosition: e.autoFitPosition,
			strategy: e.strategy,
			customStyle: e.popupStyle,
			view: h
		});
		m() && (n.value = S.placement, m() && (r.value = {
			...S.style,
			...e.autoFitPopupMinWidth ? { minWidth: `${y.width}px` } : {},
			...e.autoFitPopupWidth ? { width: `${y.width}px` } : {}
		}, m() && (i.value = e.autoFitTransformOrigin ? { transformOrigin: Gm(S.placement, t.direction?.value) } : {}, e.showArrow ? R(() => {
			if (!m()) return;
			let t = Vm(u, e.strategy), r = Hm(v, t), i = Hm(u.getBoundingClientRect(), t);
			m() && (a.value = Bm(n.value, r, i, { customStyle: e.arrowStyle }));
		}) : a.value = {})));
	}
	let h = ch((n, r) => {
		if ((e.scrollToClose || t.globalScrollToClose.value) && r) {
			let n = r, i = u.get(n) ?? [n.scrollTop, n.scrollLeft];
			if (u.set(n, i), Math.abs(n.scrollTop - i[0]) >= e.scrollToCloseDistance || Math.abs(n.scrollLeft - i[1]) >= e.scrollToCloseDistance) {
				t.requestClose();
				return;
			}
		}
		m();
	}, () => t.popup.value?.ownerDocument.defaultView), g = /* @__PURE__ */ new Set(), _ = ch(() => {
		for (let n of g) {
			let r = n.scrollingElement ?? n.documentElement, i = [r.scrollTop, r.scrollLeft], a = d.get(n) ?? i;
			if ((e.scrollToClose || t.globalScrollToClose.value) && (Math.abs(i[0] - a[0]) >= e.scrollToCloseDistance || Math.abs(i[1] - a[1]) >= e.scrollToCloseDistance)) {
				g.clear(), t.requestClose();
				return;
			}
		}
		g.clear(), m();
	}, () => t.popup.value?.ownerDocument.defaultView);
	function v(e) {
		let t = e.currentTarget;
		t?.document && g.add(t.document), _(e);
	}
	let y = ch(m, () => t.popup.value?.ownerDocument.defaultView), b;
	function x() {
		b?.(), b = void 0, y.cancel(), h.cancel(), _.cancel(), g.clear();
		for (let e of l) e.removeEventListener("scroll", h);
		for (let e of f) e.removeEventListener("scroll", v);
		for (let e of p) e.removeEventListener("slotchange", S);
		p = [], f = [], l = [], u = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
	}
	function S() {
		c++;
		let e = t.reference.value, n = t.popup.value, r = [.../* @__PURE__ */ new Set([...nh(e), ...nh(n)])], i = [.../* @__PURE__ */ new Set([...ih(e), ...ih(n)])], a = [.../* @__PURE__ */ new Set([...rh(e), ...rh(n)])];
		function o(e, t) {
			return e.length !== t.length || e.some((e, n) => e !== t[n]);
		}
		(o(l, r) || o(f, i) || o(p, a)) && C(), R(m);
	}
	function C() {
		x();
		let n = t.reference.value, r = t.popup.value;
		if (n && r && t.visible.value && !s && e.autoFixPosition && (b = oh(n, y)), (e.updateAtScroll || e.scrollToClose || t.globalUpdateAtScroll.value || t.globalScrollToClose.value) && n && r && t.visible.value && !s) {
			p = [.../* @__PURE__ */ new Set([...rh(n), ...rh(r)])];
			for (let e of p) e.addEventListener("slotchange", S);
			l = [.../* @__PURE__ */ new Set([...nh(n), ...nh(r)])];
			for (let e of l) u.set(e, [e.scrollTop, e.scrollLeft]), e.addEventListener("scroll", h, { passive: !0 });
			f = [.../* @__PURE__ */ new Set([...ih(n), ...ih(r)])];
			for (let e of f) {
				let t = e.document.scrollingElement ?? e.document.documentElement;
				d.set(e.document, [t.scrollTop, t.scrollLeft]), e.addEventListener("scroll", v, { passive: !0 });
			}
		}
	}
	return V(() => [
		t.visible.value,
		t.reference.value,
		t.popup.value,
		t.container?.value
	], () => {
		c++;
	}, { flush: "sync" }), V(() => [
		t.visible.value,
		t.reference.value,
		t.popup.value,
		t.container?.value,
		e.autoFixPosition,
		e.updateAtScroll,
		e.scrollToClose,
		e.scrollToCloseDistance,
		t.globalUpdateAtScroll.value,
		t.globalScrollToClose.value
	], () => {
		C(), R(m);
	}, { flush: "post" }), V(() => [
		e.placement,
		e.strategy,
		e.cover,
		e.popupOffset,
		e.popupTranslate,
		e.popupStyle,
		e.arrowStyle,
		e.showArrow,
		e.autoFitPopupWidth,
		e.autoFitPopupMinWidth,
		e.autoFitPosition,
		e.autoFitTransformOrigin,
		t.point.value,
		t.direction?.value
	], () => R(m), { deep: !0 }), sh(() => [
		e.autoFixPosition ? t.reference.value : void 0,
		t.popup.value,
		t.popup.value?.offsetParent
	], () => t.visible.value, (e) => {
		m(), e.some((e) => e.target === t.reference.value) && t.referenceResize();
	}), Yi(() => R(m)), Bi(() => {
		s = !1, C(), R(m);
	}), Vi(() => {
		s = !0, c++, x();
	}), Qi(() => {
		s = !0, c++, x();
	}), {
		actualPlacement: n,
		popupStyle: r,
		wrapperStyle: i,
		arrowStyle: a,
		referenceSize: o,
		update: m
	};
}
// packages/ui/es/trigger/render.mjs
function uh(e, t, n) {
	let r = /* @__PURE__ */ I(e.value), i = /* @__PURE__ */ I("idle"), a = !0, o = !1;
	V(e, (e) => {
		e && (r.value = !0), o && n(e ? "open" : "close");
	}, { flush: "sync" }), Yi(() => {
		o = !0, e.value && n("open");
	}), Qi(() => {
		a = !1, i.value = "idle";
	}), Vi(() => {
		i.value = "idle", r.value = e.value;
	});
	let s = (t) => {
		a && i.value === t && e.value === (t === "enter") && (i.value = "idle", t === "leave" && (r.value = !1), n(t === "enter" ? "opened" : "closed"));
	};
	return {
		rendered: Q(() => !t() || e.value || r.value),
		displayed: Q(() => e.value || r.value),
		animating: Q(() => i.value !== "idle"),
		hooks: {
			onBeforeEnter: () => {
				e.value && (i.value = "enter");
			},
			onAfterEnter: () => s("enter"),
			onEnterCancelled: () => {
				i.value === "enter" && (i.value = "idle");
			},
			onBeforeLeave: () => {
				i.value = "leave";
			},
			onAfterLeave: () => s("leave"),
			onLeaveCancelled: () => {
				i.value === "leave" && (i.value = "idle");
			}
		}
	};
}
// packages/ui/es/trigger/state.mjs
function dh(e, t) {
	let n = /* @__PURE__ */ I(e.open ?? e.defaultOpen ?? !1), r = Q(() => e.open ?? n.value), i, a = 0, o = !1, s = !1, c = () => {
		a++, i !== void 0 && clearTimeout(i), i = void 0;
	}, l = (l, u = 0) => {
		if (c(), s || o) return;
		let d = a;
		if (l && e.disabled || l === r.value) return;
		let f = () => {
			d !== a || s || o || (a++, i = void 0, l && e.disabled || l === r.value || (n.value = l, t("update:open", l), t("open-change", l)));
		};
		u > 0 ? i = setTimeout(f, u) : f();
	};
	return V(() => e.open, (e) => {
		c(), e !== void 0 && (n.value = e);
	}), V(() => e.disabled, (e) => {
		e && (c(), l(!1));
	}), Bi(() => {
		o = !1;
	}), Vi(() => {
		c(), l(!1), o = !0;
	}), Qi(() => {
		s = !0, c();
	}), {
		visible: r,
		request: l,
		cancel: c
	};
}
// packages/ui/es/trigger/popup-move-focus.mjs
function fh(e) {
	for (; e.shadowRoot?.activeElement;) e = e.shadowRoot.activeElement;
	return e;
}
var ph = /* @__PURE__ */ new Set([
	"article",
	"aside",
	"blockquote",
	"body",
	"div",
	"footer",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"header",
	"main",
	"nav",
	"p",
	"section",
	"span"
]);
function mh(e) {
	return !e.shadowRoot && (e.localName.includes("-") || ph.has(e.localName));
}
function hh(e) {
	let t = [e], n = [], r = e;
	try {
		for (; r.defaultView && r.defaultView.parent !== r.defaultView;) {
			let e = r.defaultView.frameElement;
			if (!e) return {
				documents: t,
				frames: n
			};
			n.push(e), r = e.ownerDocument, t.push(r);
		}
	} catch {
		return {
			documents: t,
			frames: n
		};
	}
	return {
		documents: t,
		frames: n
	};
}
function gh(e, t, n, r) {
	if (e === t) {
		let t = e.activeElement;
		return (!t || t === e.body || t === e.documentElement || t === n) && (t !== n || fh(n) === r);
	}
	let i = hh(e), a = hh(t), o = i.documents.find((e) => a.documents.includes(e));
	if (!o || !o.hasFocus()) return !1;
	let s = /* @__PURE__ */ new Set([...i.frames, ...a.frames]);
	return [.../* @__PURE__ */ new Set([...i.documents, ...a.documents])].every((e) => {
		let t = e.activeElement;
		return !t || t === e.body || t === e.documentElement || s.has(t) || t === n && fh(n) === r;
	});
}
function _h(e, t, n, r) {
	let i = 0, a = !0, o, s = () => {
		i++, o = void 0;
	};
	return Vi(() => {
		a = !1, s();
	}), Bi(() => {
		a = !0;
	}), Qi(() => {
		a = !1, s();
	}), V([e, t], () => {
		s();
		let e = n.value, t = e?.getRootNode()?.activeElement;
		if (!a || !r.value || !e || !t || !e.contains(t)) return;
		let c = fh(t);
		if (typeof c.focus != "function" || mh(c)) return;
		let l = e.ownerDocument, u = i;
		o = t, R(() => {
			u === i && (o = void 0, a && r.value && c.isConnected && n.value?.contains(t) && gh(l, c.ownerDocument, t, c) && c.focus({ preventScroll: !0 }));
		});
	}, { flush: "pre" }), (e) => {
		if (!o || o !== e.target || e.relatedTarget) return !1;
		let t = o.ownerDocument, n = hh(t);
		return n.documents[n.documents.length - 1].hasFocus() ? n.documents.every((e) => {
			let t = e.activeElement;
			return !t || t === e.body || t === e.documentElement || t === o || n.frames.includes(t);
		}) : !1;
	};
}
// packages/ui/es/trigger/reference-listeners.mjs
var vh = /^(onClick|onMouseenter|onMouseleave|onFocusin|onFocusout|onContextmenu)((?:Once|Capture|Passive)*)$/, yh = 5;
function bh(e) {
	return vh.test(e);
}
function xh(e, t) {
	let n = Ls(), r = /* @__PURE__ */ new Map(), i = !0, a = (e) => {
		e.element?.removeEventListener(e.event, e.invoke, e.options), e.attached = !1;
	}, o = () => {
		for (let [e, n] of r) typeof t[e] != "function" && !Array.isArray(t[e]) && (a(n), r.delete(e));
		for (let [o, s] of Object.entries(t)) {
			let t = vh.exec(o);
			if (!t || typeof s != "function" && !Array.isArray(s)) continue;
			let c = r.get(o);
			if (!c) {
				c = {
					attached: !1,
					consumed: !1,
					options: {
						once: t[2].includes("Once"),
						capture: t[2].includes("Capture"),
						passive: t[2].includes("Passive")
					},
					event: t[1].slice(2).toLowerCase(),
					value: s,
					invoke: () => {}
				};
				let e = c;
				e.invoke = (t) => {
					i && e.element === t.currentTarget && !e.consumed && (e.options.once && (e.consumed = !0, e.attached = !1), Vn(e.value, n, yh, [t]));
				}, r.set(o, e);
			}
			c.value = s;
			let l = e.value;
			c.element !== l && (a(c), l && (c.element = l, c.consumed = !1)), i && l && !c.attached && !c.consumed && (l.addEventListener(c.event, c.invoke, c.options), c.attached = !0);
		}
	};
	V(e, o, {
		immediate: !0,
		flush: "sync"
	}), Zi(o), Vi(() => {
		i = !1, r.forEach(a);
	}), Bi(() => {
		i = !0, o();
	}), Qi(() => {
		i = !1, r.forEach(a), r.clear();
	});
}
// packages/ui/es/trigger/trigger.mjs
function Sh(e, t) {
	if (!t) return e;
	let n = !1, r = (e) => e.map((e) => {
		if (n) return e;
		if (e.type === W && Array.isArray(e.children)) {
			let t = r(e.children);
			return ic(W, e.props, t);
		}
		return typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function" ? (n = !0, Ts(e, { class: t }, !0)) : e;
	});
	return r(e);
}
function Ch(e) {
	return e.every((e) => e.type === us ? !0 : e.type === ls ? !String(e.children ?? "").trim() : e.type === W && Array.isArray(e.children) ? Ch(e.children) : !1);
}
var { name: wh, n: Th } = $("trigger"), Eh = /* @__PURE__ */ H({
	name: wh,
	inheritAttrs: !1,
	props: gm,
	emits: {
		"update:open": (e) => !0,
		"open-change": (e) => !0,
		open: () => !0,
		opened: () => !0,
		close: () => !0,
		closed: () => !0,
		"click-outside": (e) => !0,
		resize: () => !0
	},
	setup(e, { attrs: t, emit: n, expose: r, slots: i }) {
		let a = /* @__PURE__ */ I(), o = /* @__PURE__ */ I(), { nodes: s, element: c } = vm(), { element: l, getReference: u, setReference: d } = xm(c, () => e.reference), { dir: f } = od(() => l.value, () => e.dir ?? t.dir);
		xh(l, t);
		let { visible: p, request: m } = dh(e, (e, t) => {
			n(e === "update:open" ? "update:open" : "open-change", t);
		});
		bm(l, Q(() => (typeof e.referenceAttrs == "function" ? e.referenceAttrs(p.value) : e.referenceAttrs) ?? {}));
		let h = zm(p, () => a.value?.ownerDocument ?? l.value?.ownerDocument), g = rm(() => e.popupContainer), _ = Q(() => e.popupContainer !== !1 && g.value), v = _h(g, () => e.popupContainer === !1, a, p), y = uh(p, () => e.unmountOnClose, (e) => {
			n(e === "open" ? "open" : e === "opened" ? "opened" : e === "close" ? "close" : "closed");
		});
		em(() => y.displayed.value ? a.value : void 0, () => h.zIndex.value);
		let b = lh(e, {
			direction: f,
			container: _,
			reference: l,
			popup: a,
			visible: p,
			point: o,
			globalUpdateAtScroll: h.globalUpdateAtScroll,
			globalScrollToClose: h.globalScrollToClose,
			requestClose: () => m(!1),
			referenceResize: () => n("resize")
		}), x = jm(e, {
			visible: p,
			reference: l,
			popup: a,
			popupTarget: _,
			isMovingBlur: v,
			request: m,
			isTopLayer: h.onStackTop,
			onPoint: (t) => {
				o.value = e.alignPoint ? {
					x: t.clientX,
					y: t.clientY
				} : void 0, R(b.update);
			},
			onOutside: (e) => n("click-outside", e)
		}), S = Q(() => ({
			...Object.fromEntries(Object.entries(t).filter(([e]) => !bh(e))),
			dir: f.value
		}));
		return r({
			open: x.open,
			close: x.close,
			resize: b.update,
			allowClose: x.allowClose,
			getReference: u,
			setReference: d,
			focusReference: x.focusReference,
			isTopLayer: h.onStackTop
		}), () => {
			let t = Sh(i.default?.() ?? [], p.value ? e.openedClass : void 0), n = y.rendered.value ? i.content?.() ?? [] : [], r = e.hideEmpty && Ch(n);
			return s.value = t, Y(W, null, [t, Y(zr, {
				to: g.value,
				disabled: e.popupContainer === !1
			}, { default: () => [Y(W, null, [Y(cm, { options: {
				rendered: y.rendered.value && !r,
				displayed: y.displayed.value,
				visible: p.value,
				animating: y.animating.value,
				placement: b.actualPlacement.value,
				setPopup: (e) => {
					a.value = e ?? void 0;
				},
				popupClass: [
					Th("popup"),
					Th(`--placement-${b.actualPlacement.value}`),
					e.popupClass
				],
				wrapperClass: Th("popup-wrapper"),
				contentClass: [Th("content"), e.contentClass],
				arrowClass: [Th("arrow"), e.arrowClass],
				popupStyle: {
					...b.popupStyle.value,
					zIndex: h.zIndex.value
				},
				wrapperStyle: b.wrapperStyle.value,
				contentStyle: e.contentStyle,
				arrowStyle: b.arrowStyle.value,
				showArrow: e.showArrow,
				animationName: e.animationName,
				duration: e.duration,
				hooks: y.hooks,
				attrs: S.value,
				handlers: {
					onMouseenter: x.popupEnter,
					onMouseleave: x.popupLeave,
					onFocusin: x.popupFocus,
					onFocusout: x.popupBlur,
					onMousedown: (t) => {
						e.preventFocus && t.preventDefault();
					}
				}
			} }, { content: () => n })])] })]);
		};
	}
}), Dh = Vf(Eh, Object.assign(Eh, {}), { components: [Eh] });
// packages/ui/es/trigger/wrapper.mjs
function Oh(e, t, n) {
	let r = /* @__PURE__ */ ln();
	return {
		triggerRef: r,
		triggerBindings: Q(() => {
			let r = {};
			for (let t of Object.keys(gm)) t in e && (r[t] = e[t]);
			return Z(r, n(), t);
		}),
		open: () => r.value?.open(),
		close: () => r.value?.close(),
		resize: () => r.value?.resize(),
		allowClose: () => r.value?.allowClose(),
		getReference: () => r.value?.getReference(),
		focusReference: () => r.value?.focusReference(),
		setReference: (...e) => r.value?.setReference(...e)
	};
}
// packages/ui/es/tooltip/platform.mjs
function kh(e) {
	let { n: t } = $("tooltip"), n = Q(() => e.status === "default" ? void 0 : t(`--status-${e.status}`));
	return {
		triggerBindings: Q(() => ({
			popupClass: [t(), e.popupClass],
			contentClass: void 0,
			contentStyle: void 0,
			animationName: e.animationName ?? t(),
			arrowClass: [
				t("arrow"),
				n.value,
				e.arrowClass
			],
			arrowStyle: {
				backgroundColor: e.color,
				...e.arrowStyle
			}
		})),
		contentBindings: Q(() => ({
			class: [
				t("content"),
				n.value,
				t(`--size-${e.size}`),
				e.contentClass
			],
			style: {
				backgroundColor: e.color,
				color: e.textColor,
				...e.contentStyle
			}
		}))
	};
}
// packages/ui/es/tooltip/props.mjs
var Ah = {
	...gm,
	content: String,
	status: {
		type: String,
		default: "default"
	},
	size: {
		type: String,
		default: "md"
	},
	color: String,
	textColor: String,
	trigger: {
		type: [String, Array],
		default: () => ["hover", "focus"]
	},
	placement: {
		type: String,
		default: "top"
	},
	showArrow: {
		type: Boolean,
		default: !0
	},
	popupOffset: {
		type: Number,
		default: 10
	},
	animationName: {
		type: String,
		default: void 0
	},
	autoFitTransformOrigin: {
		type: Boolean,
		default: !0
	},
	unmountOnClose: {
		type: Boolean,
		default: !0
	},
	hideEmpty: {
		type: Boolean,
		default: !0
	}
}, jh = /* @__PURE__ */ H({
	name: $("tooltip").name,
	inheritAttrs: !1,
	__name: "Tooltip",
	props: Ah,
	emits: [
		"update:open",
		"open-change",
		"open",
		"opened",
		"close",
		"closed",
		"click-outside"
	],
	setup(e, { expose: t, emit: n }) {
		let r = e, i = n, a = ka(), o = Oa();
		function s(e) {
			let t = !1, n = !1;
			for (let r of e) if (typeof r == "string" || typeof r == "number") t = !0, n ||= !!String(r).trim();
			else if (r && r.type !== us) {
				if (r.type === W && Array.isArray(r.children)) {
					let e = s(r.children);
					t ||= e.valid, n ||= e.meaningful;
				} else t = !0, n ||= r.type !== ls || !!String(r.children ?? "").trim();
			}
			return {
				valid: t,
				meaningful: n
			};
		}
		let c = /* @__PURE__ */ I(!1);
		function l() {
			let e = s(o.content?.() ?? []), t = e.valid ? e.meaningful : !!r.content?.trim();
			return c.value = t, t;
		}
		let u = `${$("tooltip").n()}-${Zp()}`, d = kh(r), f = Oh(r, a, () => d.triggerBindings.value), { triggerRef: p, triggerBindings: m } = f, { contentBindings: h } = d;
		function g(e) {
			let t = typeof r.referenceAttrs == "function" ? r.referenceAttrs(e) : r.referenceAttrs, n = t?.["aria-describedby"], i = [typeof n == "string" ? n : "", e && (!r.hideEmpty || c.value) ? u : ""].filter(Boolean);
			return {
				...t,
				"aria-describedby": i.join(" ") || void 0
			};
		}
		return t({
			open: f.open,
			close: f.close,
			resize: f.resize,
			allowClose: f.allowClose,
			getReference: f.getReference,
			focusReference: f.focusReference,
			setReference: f.setReference
		}), (e, t) => (G(), q(L(Dh), Z({
			ref_key: "triggerRef",
			ref: p
		}, L(m), {
			"reference-attrs": g,
			"onUpdate:open": t[0] ||= (e) => i("update:open", e),
			onOpenChange: t[1] ||= (e) => i("open-change", e),
			onOpen: t[2] ||= (e) => i("open"),
			onOpened: t[3] ||= (e) => i("opened"),
			onClose: t[4] ||= (e) => i("close"),
			onClosed: t[5] ||= (e) => i("closed"),
			onClickOutside: t[6] ||= (e) => i("click-outside", e)
		}), {
			content: z(() => [!e.hideEmpty || l() ? (G(), K("div", Z({ key: 0 }, L(h), {
				id: u,
				role: "tooltip"
			}), [U(e.$slots, "content", {}, () => [Es(F(e.content), 1)])], 16)) : X("", !0)]),
			default: z(() => [U(e.$slots, "default")]),
			_: 3
		}, 16));
	}
});
// packages/ui/es/tooltip/utils.mjs
function Mh(e) {
	return e.childElementCount === 0 && e.textContent.trim() !== "";
}
function Nh(e) {
	return e.scrollWidth > e.clientWidth || e.scrollHeight > e.clientHeight;
}
// packages/ui/es/tooltip/tooltip.directive.mjs
var Ph = Symbol("CedarTooltip"), Fh = 0, Ih = /* @__PURE__ */ H({
	props: [
		"options",
		"reference",
		"onVisibility"
	],
	setup(e) {
		return () => ic(jh, {
			...e.options,
			reference: e.reference,
			defaultOpen: !0,
			"onUpdate:open": e.onVisibility
		});
	}
});
function Lh(e, t) {
	if (t.arg === "ellipsis" && Mh(e) && !Nh(e)) return;
	let n = typeof t.value == "string" ? { content: t.value } : t.value;
	return {
		...n,
		content: t.arg === "ellipsis" ? e.textContent ?? "" : n.content,
		placement: t.arg === "ellipsis" ? "top" : t.arg ?? n.placement
	};
}
function Rh(e) {
	e.app?.unmount(), e.container?.remove(), e.app = void 0, e.container = void 0;
}
function zh(e, t) {
	if (t.app) return;
	let n = Lh(e, t);
	if (!n?.content) return;
	let r = document.createElement("div");
	document.body.append(r), t.visible = !0;
	let i = wu(Ih, {
		options: n,
		reference: e,
		onVisibility: (e) => {
			t.visible = e, e || R(() => {
				t.app === i && !t.visible && Rh(t);
			});
		}
	});
	i.config.idPrefix = `cedar-tooltip-directive-${Fh++}`, t.container = r, t.app = i, i.mount(r);
}
var Bh = {
	mounted(e, t) {
		let n = e, r = t.arg === "ellipsis" && !n.classList.contains("text-ellipsis");
		r && n.classList.add("text-ellipsis");
		let i = {
			value: t.value,
			arg: t.arg,
			enter: () => zh(n, i),
			visible: !1,
			ownsEllipsisClass: r
		};
		n[Ph] = i, n.addEventListener("mouseenter", i.enter), n.addEventListener("focusin", i.enter);
	},
	updated(e, t) {
		let n = e, r = n[Ph];
		if (!r) return;
		let i = !!r.app;
		t.arg !== r.arg && (r.ownsEllipsisClass && n.classList.remove("text-ellipsis"), r.ownsEllipsisClass = t.arg === "ellipsis" && !n.classList.contains("text-ellipsis"), r.ownsEllipsisClass && n.classList.add("text-ellipsis")), t.arg === "ellipsis" && !n.classList.contains("text-ellipsis") && (n.classList.add("text-ellipsis"), r.ownsEllipsisClass = !0), r.value = t.value, r.arg = t.arg, i && (Rh(r), zh(n, r));
	},
	unmounted(e) {
		let t = e, n = t[Ph];
		n && (t.removeEventListener("mouseenter", n.enter), t.removeEventListener("focusin", n.enter), Rh(n), n.ownsEllipsisClass && t.classList.remove("text-ellipsis"), delete t[Ph]);
	},
	getSSRProps(e) {
		return e.arg === "ellipsis" ? { class: "text-ellipsis" } : {};
	}
}, Vh = Vf(jh, Object.assign(jh, { directive: Bh }), { setup: (e) => {
	e.directive("tooltip", Bh);
} }), Hh = (e) => !!(e && e.shapeFlag & 1), Uh = (e, t) => !!(e && e.shapeFlag & 6), Wh = (e, t) => !!(e && e.shapeFlag & 16), Gh = (e, t) => !!(e && e.shapeFlag & 32), Kh = (e) => {
	if (e) for (let t of e) {
		if (Hh(t) || Uh(t)) return t;
		if (Wh(t, t.children)) {
			let e = Kh(t.children);
			if (e) return e;
		} else if (Gh(t, t.children)) {
			let e = t.children.default?.();
			if (e) {
				let t = Kh(e);
				if (t) return t;
			}
		} else if (Kf(t)) {
			let e = Kh(t);
			if (e) return e;
		}
	}
}, qh = (e) => {
	if (Wh(e, e.children)) return e.children;
	if (Kf(e)) return e;
}, Jh = (e) => {
	if (Hh(e)) return e.el;
	if (Uh(e)) {
		if (e.el?.nodeType === 1) return e.el;
		if (e.component?.subTree) {
			let t = Jh(e.component.subTree);
			if (t) return t;
		}
	} else return Yh(qh(e));
}, Yh = (e) => {
	if (e && e.length > 0) for (let t of e) {
		let e = Jh(t);
		if (e) return e;
	}
}, Xh = (e, t) => {
	let n = [];
	if (Uh(e, e.type)) e.type.name === t ? e.component && n.push(e.component.uid) : e.component?.subTree && n.push(...Xh(e.component.subTree, t));
	else {
		let r = qh(e);
		r && n.push(...Zh(r, t));
	}
	return n;
}, Zh = (e, t) => {
	let n = [];
	if (e && e.length > 0) for (let r of e) n.push(...Xh(r, t));
	return n;
}, Qh = () => {
	let e = {}, t = /* @__PURE__ */ I(), n = () => {
		let n = Yh(e.value);
		n !== t.value && (t.value = n);
	};
	return Yi(() => n()), Zi(() => n()), {
		children: e,
		firstElement: t
	};
}, $h = /* @__PURE__ */ H({
	name: $("resize-observer").name,
	props: { watchOnUpdated: Boolean },
	emits: ["resize"],
	setup(e, { emit: t, slots: n }) {
		let { children: r, firstElement: i } = Qh();
		return sh(() => [i.value], () => !0, (e) => {
			let n = e.find((e) => e.target === i.value);
			n && t("resize", n);
		}, !1), () => (r.value = n.default?.(), r.value);
	}
});
// packages/ui/es/_components/auto-tooltip/auto-tooltip.mjs
function eg(e) {
	return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !vs(e);
}
var { name: tg } = $("auto-tooltip"), ng = /* @__PURE__ */ H({
	name: tg,
	inheritAttrs: !1,
	props: { tooltipProps: { type: Object } },
	setup(e, { attrs: t, slots: n }) {
		let r = Uf("auto-tooltip"), i = /* @__PURE__ */ I(), a = /* @__PURE__ */ I(), o = /* @__PURE__ */ I(""), s = /* @__PURE__ */ I(!1), c = () => {
			if (i.value && a.value) {
				let e = a.value.offsetWidth > i.value.offsetWidth;
				e !== s.value && (s.value = e);
			}
		}, l = () => {
			a.value?.textContent && a.value.textContent !== o.value && (o.value = a.value.textContent);
		}, u = () => {
			l(), c();
		};
		Yi(() => {
			l(), c();
		}), Zi(() => {
			l(), c();
		});
		let d = () => Y("span", Z({
			ref: i,
			class: r
		}, t), [Y($h, { onResize: u }, { default: () => [Y("span", {
			ref: a,
			class: `${r}-content`
		}, [n.default?.()])] })]);
		return () => {
			let t;
			if (s.value) {
				let t;
				return Y(Vh, Z({ content: o.value }, e.tooltipProps), eg(t = d()) ? t : { default: () => [t] });
			}
			return Y($h, { onResize: u }, eg(t = d()) ? t : { default: () => [t] });
		};
	}
});
// packages/ui/es/table/table-td.mjs
function rg(e) {
	return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !vs(e);
}
var { name: ig } = $("td"), ag = /* @__PURE__ */ H({
	name: ig,
	props: {
		headers: String,
		rowIndex: Number,
		record: {
			type: Object,
			default: () => ({})
		},
		column: {
			type: Object,
			default: () => ({})
		},
		type: {
			type: String,
			default: "normal"
		},
		operations: {
			type: Array,
			default: () => []
		},
		dataColumns: {
			type: Array,
			default: () => []
		},
		colSpan: {
			type: Number,
			default: 1
		},
		rowSpan: {
			type: Number,
			default: 1
		},
		isFixedExpand: {
			type: Boolean,
			default: !1
		},
		containerWidth: { type: Number },
		showExpandBtn: {
			type: Boolean,
			default: !1
		},
		indentSize: {
			type: Number,
			default: 0
		},
		renderExpandBtn: { type: Function },
		summary: {
			type: Boolean,
			default: !1
		}
	},
	setup(e, { slots: t }) {
		let n = Uf("table"), r = Q(() => {
			if (Yf(e.column?.tooltip)) return e.column.tooltip;
		}), i = Q(() => e.column?.dataIndex && c.sorter?.field === e.column.dataIndex), a = Q(() => e.column?.dataIndex && c.resizingColumn === e.column.dataIndex), o = () => e.summary ? $f(e.column?.summaryCellClass) ? e.column.summaryCellClass(e.record?.raw) : e.column?.summaryCellClass : $f(e.column?.bodyCellClass) ? e.column.bodyCellClass(e.record?.raw) : e.column?.bodyCellClass, s = Q(() => [
			`${n}-td`,
			{
				[`${n}-col-sorted`]: i.value,
				[`${n}-td-resizing`]: a.value
			},
			...Rp(n, e.column, c.readingDirection === "rtl" && c.hasPhysicalLeftOperations),
			e.column?.cellClass,
			o()
		]), c = B(hp, {}), l = () => e.summary ? $f(e.column?.summaryCellStyle) ? e.column.summaryCellStyle(e.record?.raw) : e.column?.summaryCellStyle : $f(e.column?.bodyCellStyle) ? e.column.bodyCellStyle(e.record?.raw) : e.column?.bodyCellStyle, u = Q(() => {
			let t = zp(e.column, {
				dataColumns: e.dataColumns,
				operations: e.operations
			}, c.tableLayout, c.readingDirection), n = l();
			return {
				...t,
				...e.column?.cellStyle,
				...n
			};
		}), d = Q(() => {
			if (e.isFixedExpand && e.containerWidth) return { width: `${e.containerWidth}px` };
		}), f = () => kp(e, t, c.slots), { isLoading: p, handleClick: m } = Tp(e, c), h = () => wp(n, {
			align: e.column?.align,
			fixedExpand: e.isFixedExpand,
			hasExpand: e.showExpandBtn,
			style: d.value,
			indent: e.indentSize,
			onExpand: m,
			expand: () => p.value ? Y(Kp, null, null) : e.renderExpandBtn?.(e.record, !1),
			content: () => {
				let t;
				return e.column?.ellipsis && e.column?.tooltip ? Y(ng, {
					class: `${n}-td-content`,
					tooltipProps: r.value
				}, rg(t = f()) ? t : { default: () => [t] }) : Cp(n, f(), e.column?.ellipsis);
			}
		});
		return () => {
			let n = vp(t.td?.({
				record: e.record?.raw,
				column: e.column,
				rowIndex: e.rowIndex ?? -1
			})), r = n?.props && Object.prototype.hasOwnProperty.call(n.props, "headers") && n.props.headers !== void 0 ? n.props.headers : e.headers;
			return xp("td", n, e.column, {
				class: s.value,
				style: u.value,
				rowspan: e.rowSpan > 1 ? e.rowSpan : void 0,
				colspan: e.colSpan > 1 ? e.colSpan : void 0,
				headers: r
			}, () => [h()]);
		};
	}
});
// packages/ui/es/table/utils.mjs
function og(e) {
	return e.map((e) => {
		let t = { ...e };
		return t.children &&= og(t.children), t;
	});
}
function sg(e) {
	return e.map((e) => {
		let t = e.raw;
		return e.children && t.children && (t.children = sg(e.children)), e.raw;
	});
}
var cg = (e) => {
	let t = [];
	if (e.children) for (let n of e.children) n.isLeaf ? t.push(n.key) : t.push(...cg(n));
	return t;
}, lg = (e, t) => {
	let n = !1, r = !1, i = t.filter((t) => e.includes(t));
	return i.length > 0 && (i.length >= t.length ? n = !0 : r = !0), {
		checked: n,
		indeterminate: r
	};
}, ug = Symbol("option-request-owner");
function dg(e, t) {
	vr(ug, {
		definition: e,
		state: t
	});
}
function fg(e, t, n, r = () => 0, i, a = !1, o = () => 0) {
	let s = a ? void 0 : B(ug, void 0);
	if (i && s?.definition === i) return s.state;
	let c = /* @__PURE__ */ I(!1), l = Q(() => typeof e() == "function"), u = Xu(() => [], {
		initialData: [],
		immediate: !1,
		get debounce() {
			return r();
		}
	}), d = /* @__PURE__ */ I(""), f = /* @__PURE__ */ I(!1);
	async function p(r = d.value) {
		if (d.value = r, f.value = !1, r.length < o()) {
			u.cancel(), u.data.value = [];
			return;
		}
		let i = e();
		if (typeof i != "function" || !c.value || !l.value || t() || !i) return;
		u.data.value = [];
		let a = await u.execute({ loader: async (e) => {
			let t = await i(r, e);
			if (!Array.isArray(t)) throw TypeError("Candidate loader must return an array");
			return t;
		} });
		a.status === "error" && (f.value = !0, n(a.error));
	}
	return V([e, t], () => {
		u.cancel(), l.value || (u.data.value = []), c.value && p();
	}), Yi(() => {
		c.value = !0, p();
	}), {
		options: Q(() => {
			let t = e();
			return [...Array.isArray(t) ? t : u.data.value];
		}),
		loading: u.loading,
		failed: f,
		remote: l,
		query: d,
		search: p,
		cancel: (e = !0) => {
			u.cancel(), f.value = !1, e && (u.data.value = []);
		},
		refresh: () => p()
	};
}
// packages/ui/es/_utils/empty-value.mjs
function pg() {
	return {
		type: [
			String,
			Number,
			Boolean,
			Object,
			Array,
			Function
		],
		default: void 0
	};
}
function mg(e, t) {
	let n = e.emptyValue, r = n === void 0 ? t : typeof n == "function" ? n() : n;
	return Array.isArray(r) ? r.slice() : r;
}
var hg = Object.freeze([
	void 0,
	null,
	""
]), gg = {
	type: Array,
	default: void 0
}, _g = {
	type: String,
	default: void 0
};
function vg(e, t = hg) {
	return Array.isArray(e) && e.length === 0 || t.includes(e);
}
var yg = Symbol("empty-value-policy");
function bg(e, t, n = hg) {
	let r = Q(() => e.emptyValues ?? t?.emptyValues.value);
	return {
		emptyValues: r,
		emptyText: Q(() => e.emptyText ?? t?.emptyText.value),
		hasCustomEmptyValues: Q(() => r.value !== void 0),
		isEmpty: (e) => vg(e, r.value ?? n)
	};
}
function xg(e, t = !1) {
	let n = bg(e, B(yg, void 0)), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ ln(), a = { ...n };
	return t && (a.registerField = (e) => {
		let t = Symbol("primary-field");
		return r.set(t, e), i.value = e, () => {
			r.delete(t);
			let e = [...r.values()];
			i.value = e[e.length - 1];
		};
	}), vr(yg, a), {
		...n,
		hasCustomEmptyValues: Q(() => i.value?.hasCustomEmptyValues.value ?? n.hasCustomEmptyValues.value),
		isEmpty: (e) => (i.value ?? n).isEmpty(e)
	};
}
function Sg(e, t = hg, n = !1) {
	let r = Ls() ? B(yg, void 0) : void 0, i = bg(e, r, t);
	return n && r?.registerField && Me(r.registerField(i)), {
		...i,
		emptyText: Q(() => i.emptyText.value ?? "-")
	};
}
// packages/ui/es/input/context.mjs
var Cg = Symbol("InputGroup"), wg = Symbol("OneTimeCodeAutofill");
// packages/ui/es/_components/selection-field/use-selection-session.mjs
function Tg(e, t) {
	return Object.is(e, t) || Array.isArray(e) && Array.isArray(t) && e.length === t.length && e.every((e, n) => Object.is(e, t[n]));
}
function Eg(e) {
	let t = /* @__PURE__ */ ln(e.clone(e.value())), n = /* @__PURE__ */ I(!1), r = /* @__PURE__ */ I(!1), i = /* @__PURE__ */ I(""), a = 0, o = !1, s, c = () => {
		a++, s?.abort(), r.value = !1, i.value = "", t.value = e.clone(e.value()), n.value = !1;
	};
	V(e.open, c, { flush: "sync" }), V(e.value, () => {
		o || (e.cancelOnExternalChange && e.open.value && e.deferred() && e.close(), c());
	}, {
		deep: !0,
		flush: "sync"
	}), Qi(c), Vi(() => {
		e.close(), c();
	});
	let l = Q(() => e.open.value && e.deferred() ? t.value : e.value());
	function u(a) {
		e.blocked() || n.value || r.value || (i.value = "", e.open.value && e.deferred() ? t.value = e.clone(a) : e.publish(e.clone(a)));
	}
	function d(c) {
		if (e.blocked() || n.value || r.value || !e.open.value || e.valid?.(t.value) === !1) return !1;
		i.value = "";
		let l = e.clone(t.value), u = ++a, d = (t) => {
			if (u !== a || t === !1 || e.blocked() || !e.open.value) return !1;
			n.value = !0, o = !0;
			try {
				(e.same ?? Tg)(l, e.value()) || (c ? e.publish(l, c) : e.publish(l));
			} finally {
				o = !1;
			}
			return n.value = !0, e.close(), !0;
		};
		if (!e.beforeCommit) return d();
		s?.abort(), s = new AbortController(), r.value = !0;
		let f = s.signal, p, m = new Promise((e) => {
			p = () => e(!1), f.addEventListener("abort", p, { once: !0 });
		}), h = Promise.resolve().then(() => u === a && e.beforeCommit?.(l, f));
		return Promise.race([h, m]).then(d).catch((e) => (u === a && (i.value = e instanceof Error ? e.message : String(e)), !1)).finally(() => {
			f.removeEventListener("abort", p), u === a && (r.value = !1);
		});
	}
	function f() {
		r.value || (c(), n.value = !0, e.close());
	}
	return {
		value: l,
		draft: t,
		pending: r,
		error: i,
		update: u,
		commit: d,
		cancel: f,
		reset: c
	};
}
// packages/ui/es/_hooks/use-action-guard.mjs
function Dg(e, t) {
	return new Promise((n, r) => {
		let i = !1, a = () => t.signal.removeEventListener("abort", s), o = (e = !0) => {
			i || (i = !0, a(), n(e !== !1));
		}, s = () => o(!1), c = (e) => {
			i || (i = !0, a(), r(e));
		};
		if (t.signal.aborted) o(!1);
		else {
			t.signal.addEventListener("abort", s, { once: !0 });
			try {
				let t = e(o);
				typeof t == "boolean" ? o(t) : t && typeof t.then == "function" && Promise.resolve(t).then((e) => o(e !== !1), c);
			} catch (e) {
				c(e);
			}
		}
	});
}
// packages/ui/es/_components/field-presentation/context.mjs
var Og = {
	type: String,
	default: void 0,
	validator: (e) => [
		"direct",
		"click",
		"dblclick"
	].includes(e)
}, kg = "direct";
function Ag(e, t, n) {
	if (e) return Dg((r) => e({
		value: t,
		previousValue: n.previousValue
	}, r, { signal: n.signal }), n);
}
var jg = {
	type: Boolean,
	default: void 0
}, Mg = Function, Ng = Symbol("form-presentation"), Pg = Symbol("form-item-presentation"), Fg = Symbol("field-editor-boundary"), Ig = Symbol("field-editor-panel"), Lg = Symbol("field-editor-enter-submits"), Rg = Symbol("field-control-form-events");
function zg(e, t, n = "direct") {
	let r = B(Fg, !1), i = r ? void 0 : B(Pg, void 0), a = r ? void 0 : B(Ng, void 0), o = Q(() => {
		let t = [
			"direct",
			"click",
			"dblclick"
		];
		for (let n of [
			e(),
			i?.editMode.value,
			a?.editMode.value
		]) if (n && t.includes(n)) return n;
		return r ? "direct" : n;
	});
	return {
		readPretty: Q(() => t?.() ?? i?.readPretty?.value ?? a?.readPretty?.value ?? !1),
		editMode: o,
		nativeEditor: !0,
		item: i,
		label: Q(() => i?.label?.value),
		register: (e) => {
			let t = (i?.register ?? a?.register)?.(e);
			Qi(() => t?.());
		}
	};
}
// packages/ui/es/locale/lang/zh-cn.mjs
var Bg = {
	formatYear: "YYYY 年",
	formatMonth: "YYYY 年 MM 月",
	today: "今天",
	view: {
		month: "月",
		year: "年",
		week: "周",
		day: "日"
	},
	month: {
		long: {
			January: "一月",
			February: "二月",
			March: "三月",
			April: "四月",
			May: "五月",
			June: "六月",
			July: "七月",
			August: "八月",
			September: "九月",
			October: "十月",
			November: "十一月",
			December: "十二月"
		},
		short: {
			January: "一月",
			February: "二月",
			March: "三月",
			April: "四月",
			May: "五月",
			June: "六月",
			July: "七月",
			August: "八月",
			September: "九月",
			October: "十月",
			November: "十一月",
			December: "十二月"
		}
	},
	week: {
		long: {
			self: "周",
			monday: "周一",
			tuesday: "周二",
			wednesday: "周三",
			thursday: "周四",
			friday: "周五",
			saturday: "周六",
			sunday: "周日"
		},
		short: {
			self: "周",
			monday: "一",
			tuesday: "二",
			wednesday: "三",
			thursday: "四",
			friday: "五",
			saturday: "六",
			sunday: "日"
		}
	}
}, Vg = {
	tabs: {
		close: "关闭",
		add: "新增标签",
		previous: "上一组标签",
		next: "下一组标签"
	},
	breadcrumb: {
		label: "面包屑导航",
		ellipsis: "省略的路径"
	},
	navMenu: { more: "更多" },
	splitButton: { moreActions: "更多操作" },
	peopleSelect: {
		call: "拨打电话",
		chat: "聊天"
	},
	fieldPresentation: {
		rangeStart: "开始",
		rangeEnd: "结束",
		clickEdit: "单击编辑",
		doubleClickEdit: "双击编辑",
		selectionCount: "已选 {count} 个",
		selectionRemove: "移除",
		selectionBack: "返回可选项",
		selectionEmpty: "暂无已选项",
		edit: "编辑",
		close: "关闭",
		search: "搜索选项",
		selected: "已选择",
		limit: "最多选择"
	},
	search: {
		search: "搜索",
		cancel: "取消",
		history: "搜索历史"
	},
	locale: "zh-CN",
	resizeBox: {
		left: "左边宽度",
		right: "右边宽度",
		top: "上边高度",
		bottom: "下边高度",
		valueText: "{0} 像素"
	},
	loading: { text: "加载中" },
	split: { resizeLabel: "调整面板大小" },
	layout: {
		expandSider: "展开侧栏",
		collapseSider: "收起侧栏"
	},
	common: {
		back: "返回",
		close: "关闭",
		placeholderSelect: "请选择",
		placeholderInput: "请输入",
		placeholderStart: "开始日期",
		placeholderEnd: "结束日期",
		clear: "清空",
		increase: "增加数值",
		decrease: "减少数值",
		showPassword: "显示密码",
		hidePassword: "隐藏密码",
		dateFormat: { datetime: "YYYY-MM-DD HH:mm:ss" }
	},
	map: {
		initError: "地图初始化失败",
		retry: "重试",
		searchPlaceholder: "搜索地址",
		title: "地址选择",
		noData: "暂无数据",
		dragAndSelectTips: "拖动地图或搜索地址，选择定位点位置"
	},
	filterForm: {
		expandMore: "展开",
		collapseMore: "收起"
	},
	empty: { description: "暂无数据" },
	infiniteScroll: {
		loading: "加载中",
		error: "加载失败，点击重试",
		finished: "没有更多了"
	},
	drawer: {
		confirmButtonText: "确定",
		cancelText: "取消"
	},
	popconfirm: {
		confirmButtonText: "确定",
		cancelText: "取消"
	},
	dialog: {
		confirmButtonText: "确定",
		cancelButtonText: "取消"
	},
	pagination: {
		navigation: "分页",
		previous: "上一页",
		next: "下一页",
		goto: "前往",
		page: "页",
		countPerPage: "条/页",
		total: "共 {0} 条"
	},
	table: {
		expandRow: "展开行",
		collapseRow: "收起行",
		resizeColumn: "调整 {0} 列宽",
		selectRow: "选择行 {0}",
		selectionColumn: "选择",
		confirmButtonText: "确定",
		resetText: "重置",
		customColumnsConfig: "列管理",
		selectAll: "全选",
		selected: "已选",
		placeholderInputKeyword: "请输入关键词搜索",
		clear: "清空",
		columnManager: {
			freezeToLeft: "冻结至左侧",
			freezeToRight: "冻结至右侧",
			unfreeze: "取消冻结",
			deleteItem: "删除此项",
			renameColumn: "重命名",
			insertLeft: "向左插入列",
			insertRight: "向右插入列",
			insertColumn: "插入列",
			freezeColumn: "冻结列",
			unfreezeColumn: "取消冻结",
			editColumn: "编辑列",
			deleteColumn: "删除列",
			noInsertableColumns: "没有可插入的列",
			groupTitle: "一级分组标题",
			groupTitlePlaceholder: "留空表示不分组",
			groupTitleHint: "相邻列的一级标题相同时会自动合并为同一分组",
			columnTitle: "列名称",
			columnTitlePlaceholder: "请输入列名称"
		}
	},
	carousel: {
		label: "轮播",
		previous: "上一页",
		next: "下一页",
		slide: "第 {index} 页，共 {total} 页",
		goto: "切换到第 {index} 页"
	},
	upload: {
		replace: "替换",
		duration: "视频时长",
		download: "下载",
		close: "关闭",
		drag: "将文件拖拽到此处，或",
		click: "上传",
		start: "开始",
		cancel: "取消",
		delete: "删除",
		retry: "点击重试",
		buttonText: "上传",
		preview: "预览",
		dragHover: "释放文件并开始上传",
		error: "上传失败"
	},
	calendar: Bg,
	datePicker: {
		previousMonth: "上一月",
		nextMonth: "下一月",
		previousYear: "上一年",
		nextYear: "下一年",
		previousPeriod: "上一组年份",
		nextPeriod: "下一组年份",
		view: Bg.view,
		month: Bg.month,
		week: Bg.week,
		placeholder: {
			date: "请选择日期",
			week: "请选择周",
			month: "请选择月份",
			year: "请选择年份",
			quarter: "请选择季度",
			time: "请选择时间"
		},
		rangePlaceholder: {
			date: ["开始日期", "结束日期"],
			week: ["开始周", "结束周"],
			month: ["开始月份", "结束月份"],
			year: ["开始年份", "结束年份"],
			quarter: ["开始季度", "结束季度"],
			time: ["开始时间", "结束时间"]
		},
		selectTime: "选择时间",
		today: "今天",
		now: "此刻",
		confirmButtonText: "确定",
		startTime: "开始时间",
		endTime: "结束时间",
		rangeSeparator: "至",
		nextDay: "次日"
	},
	image: {
		preview: "预览图片",
		loading: "加载中"
	},
	imagePreview: {
		prev: "上一张图片",
		next: "下一张图片",
		download: "下载图片",
		close: "关闭图片预览",
		fullScreen: "全屏",
		rotateRight: "向右旋转",
		rotateLeft: "向左旋转",
		zoomIn: "放大",
		zoomOut: "缩小",
		originalSize: "原始尺寸"
	},
	typography: {
		copied: "已复制",
		copy: "复制",
		expand: "展开",
		collapse: "折叠",
		edit: "编辑"
	},
	form: { validateMessages: {
		required: "#{field} 是必填项",
		type: {
			string: "#{field} 不是合法的文本类型",
			number: "#{field} 不是合法的数字类型",
			boolean: "#{field} 不是合法的布尔类型",
			array: "#{field} 不是合法的数组类型",
			object: "#{field} 不是合法的对象类型",
			url: "#{field} 不是合法的 url 地址",
			email: "#{field} 不是合法的邮箱地址",
			ip: "#{field} 不是合法的 IP 地址"
		},
		number: {
			min: "`#{value}` 小于最小值 `#{min}`",
			max: "`#{value}` 大于最大值 `#{max}`",
			equal: "`#{value}` 不等于 `#{equal}`",
			range: "`#{value}` 不在 `#{min} ~ #{max}` 范围内",
			positive: "`#{value}` 不是正数",
			negative: "`#{value}` 不是负数"
		},
		array: {
			length: "`#{field}` 个数不等于 #{length}",
			minLength: "`#{field}` 个数最少为 #{minLength}",
			maxLength: "`#{field}` 个数最多为 #{maxLength}",
			includes: "#{field} 不包含 #{includes}",
			deepEqual: "#{field} 不等于 #{deepEqual}",
			empty: "`#{field}` 不是空数组"
		},
		string: {
			minLength: "字符数最少为 #{minLength}",
			maxLength: "字符数最多为 #{maxLength}",
			length: "字符数必须是 #{length}",
			match: "`#{value}` 不符合模式 #{pattern}",
			uppercase: "`#{value}` 必须全大写",
			lowercase: "`#{value}` 必须全小写"
		},
		object: {
			deepEqual: "`#{field}` 不等于期望值",
			hasKeys: "`#{field}` 不包含必须字段",
			empty: "`#{field}` 不是对象"
		},
		boolean: {
			true: "期望是 `true`",
			false: "期望是 `false`"
		}
	} },
	transfer: {
		clear: "清空已选",
		actions: "选项操作"
	},
	colorPicker: {
		trigger: "选择颜色",
		hue: "色相",
		opacity: "不透明度",
		palette: "颜色饱和度和亮度",
		saturation: "饱和度",
		brightness: "亮度",
		hex: "十六进制颜色",
		red: "红色",
		green: "绿色",
		blue: "蓝色",
		history: "最近使用颜色",
		preset: "系统预设颜色",
		empty: "暂无"
	}
}, Hg = /* @__PURE__ */ I("zh-CN"), Ug = /* @__PURE__ */ Jt({ "zh-CN": Vg }), Wg = () => {
	let e = B(Nf, void 0), t = Q(() => e?.locale ?? Ug[Hg.value]);
	return {
		i18nMessage: t,
		locale: Q(() => t.value.locale),
		t: (e, ...n) => {
			let r = e.split("."), i = t.value;
			for (let t of r) {
				if (!i[t]) return e;
				i = i[t];
			}
			return Xf(i) && n.length > 0 ? i.replace(/{(\d+)}/g, (e, t) => n[t] ?? e) : i;
		}
	};
};
// packages/ui/es/loading/platform.mjs
function Gg() {
	let { t: e } = Wg(), t = Q(() => e("loading.text")), n = B(Nf, void 0);
	return {
		customLoading: Q(() => n?.slots.loading?.()[0]),
		loadingText: t
	};
}
// packages/ui/es/loading/props.mjs
var Kg = {
	type: {
		type: String,
		default: "circle"
	},
	size: {
		type: [String, Number],
		default: "md"
	},
	radius: [String, Number],
	color: String,
	loading: Boolean,
	tip: String,
	hideIcon: Boolean
}, qg = [
	"aria-busy",
	"role",
	"aria-live",
	"aria-atomic"
], Jg = /* @__PURE__ */ H({
	name: $("loading").name,
	__name: "Loading",
	props: Kg,
	setup(e) {
		let t = e, n = Oa(), { n: r, classes: i } = $("loading"), { customLoading: a, loadingText: o } = Gg(), s = Q(() => !n.default || t.loading), c = Q(() => s.value && (!t.hideIcon || !!(n.tip || t.tip))), l = {
			wave: 5,
			cube: 4,
			rect: 8,
			disappear: 3
		}, u = Q(() => ({
			color: t.color,
			fontSize: typeof t.size == "number" ? `${t.size}px` : void 0
		})), d = Q(() => ({
			width: t.radius == null && typeof t.size == "number" ? im(t.size) : am(t.radius, 2),
			height: t.radius == null && typeof t.size == "number" ? im(t.size) : am(t.radius, 2),
			color: t.color
		})), f = Q(() => {
			if (typeof t.size != "number") return;
			let e = im(t.size);
			return {
				width: e,
				height: e
			};
		}), p = (e) => r(`${e}--${typeof t.size == "number" ? "numeric" : t.size}`);
		return (e, t) => (G(), K("div", {
			class: P(L(r)()),
			"aria-busy": e.$slots.default && e.loading ? "true" : void 0,
			role: e.$slots.default ? void 0 : "status",
			"aria-live": e.$slots.default ? void 0 : "polite",
			"aria-atomic": e.$slots.default ? void 0 : "true"
		}, [
			!e.$slots.default && !e.$slots.tip && !e.tip ? (G(), K("span", {
				key: 0,
				class: P(L(r)("sr-only"))
			}, F(L(o)), 3)) : X("", !0),
			e.$slots.default ? (G(), K("div", {
				key: 1,
				class: P(L(i)(L(r)("content"), [e.loading, L(r)("content--active")]))
			}, [U(e.$slots, "default"), e.loading ? (G(), K("div", {
				key: 0,
				class: P(L(r)("content-overlay"))
			}, null, 2)) : X("", !0)], 2)) : X("", !0),
			c.value ? (G(), K("div", {
				key: 2,
				class: P(L(i)(L(r)("body"), [e.$slots.default, L(r)("inside")]))
			}, [
				!e.hideIcon && (e.$slots.icon || L(a)) ? (G(), K("div", {
					key: 0,
					class: P(L(r)("indicator")),
					style: N(u.value),
					"aria-hidden": "true"
				}, [e.$slots.icon ? U(e.$slots, "icon", {}, void 0, void 0, 0) : (G(), q(ca(L(a)), { key: 1 }))], 6)) : !e.hideIcon && e.type === "circle" ? (G(), K("div", {
					key: 1,
					class: P(L(r)("circle")),
					"aria-hidden": "true"
				}, [J("span", {
					class: P(L(i)(L(r)("circle-block"), p("circle-block"))),
					style: N(d.value)
				}, [...t[0] ||= [J("svg", {
					viewBox: "25 25 50 50",
					"aria-hidden": "true"
				}, [J("circle", {
					cx: "50",
					cy: "50",
					r: "20",
					fill: "none"
				})], -1)]], 6)], 2)) : X("", !0),
				(G(), K(W, null, fa(l, (t, n) => (G(), K(W, { key: n }, [!e.hideIcon && !e.$slots.icon && !L(a) && e.type === n ? (G(), K("div", {
					key: 0,
					class: P(L(i)(L(r)(n), p(n))),
					style: N(f.value),
					"aria-hidden": "true"
				}, [(G(!0), K(W, null, fa(t, (t) => (G(), K("span", {
					key: t,
					class: P(L(i)(L(r)(`${n}-item`), p(`${n}-item`))),
					style: N({ backgroundColor: e.color })
				}, null, 6))), 128))], 6)) : X("", !0)], 64))), 64)),
				e.$slots.tip || e.tip ? (G(), K("div", {
					key: 2,
					class: P(L(i)(L(r)("tip"), p("tip"))),
					style: N({ color: e.color })
				}, [U(e.$slots, "tip", {}, () => [Es(F(e.tip), 1)])], 6)) : X("", !0)
			], 2)) : X("", !0)
		], 10, qg));
	}
}), Yg = /* @__PURE__ */ H({
	name: $("pending-feedback").name,
	__name: "PendingFeedback",
	props: { loading: { type: Boolean } },
	setup(e) {
		let { n: t } = $("pending-feedback");
		return (n, r) => e.loading ? (G(), K("span", {
			key: 0,
			class: P(L(t)()),
			"aria-busy": "true"
		}, [Y(Jg, { size: "sm" })], 2)) : X("", !0);
	}
}), Xg = /* @__PURE__ */ new WeakMap();
function Zg(e) {
	return Xg.get(e);
}
function Qg(e, t) {
	return Xg.set(e, t), () => {
		Xg.get(e) === t && Xg.delete(e);
	};
}
var $g = /* @__PURE__ */ new WeakMap();
async function e_(e, t) {
	let n = ($g.get(e) ?? Promise.resolve()).then(t, t);
	$g.set(e, n);
	try {
		await n;
	} finally {
		$g.get(e) === n && $g.delete(e);
	}
}
// packages/ui/es/hover/overlay-props.mjs
var t_ = {
	hovering: Boolean,
	focusing: Boolean
}, { name: n_, n: r_, classes: i_ } = $("hover-overlay"), a_ = /* @__PURE__ */ H({
	name: n_,
	props: t_,
	setup: () => ({
		n: r_,
		classes: i_
	})
}), o_ = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
};
// packages/ui/es/hover/HoverOverlay.vue.mjs
function s_(e, t, n, r, i, a) {
	return G(), K("div", { class: P(e.classes(e.n(), [e.hovering, e.n("--hovering")], [e.focusing, e.n("--focusing")])) }, null, 2);
}
var c_ = /* @__PURE__ */ o_(a_, [["render", s_]]);
// packages/ui/es/hover/index.mjs
function l_(e) {
	return e ? !!(e === "desktop" && Pu() || e === "mobile" && !Pu()) : !1;
}
function u_(e) {
	if (e.startsWith("--")) return e;
	let t = e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
	return t.startsWith("ms-") ? `-${t}` : t;
}
function d_(e) {
	let t = e._hover;
	if (t) {
		for (let [n, r] of Object.entries(t.rawStyle)) r.value ? e.style.setProperty(n, r.value, r.priority) : e.style.removeProperty(n);
		t.rawStyle = {};
	}
}
function f_(e) {
	let t = e._hover;
	if (t && !Iu(t.value)) for (let [n, r] of Object.entries(t.value ?? {})) {
		if (r == null) continue;
		let i = u_(n);
		t.rawStyle[i] = {
			value: e.style.getPropertyValue(i),
			priority: e.style.getPropertyPriority(i)
		}, e.style.setProperty(i, String(r));
	}
}
function p_() {
	let e = this._hover;
	e && !e.hovering && (e.hovering = !0, Iu(e.value) ? e.value(!0) : f_(this));
}
function m_() {
	let e = this._hover;
	e && e.hovering && (e.hovering = !1, Iu(e.value) ? e.value(!1) : d_(this));
}
function h_(e, t, n = !1) {
	l_(t.arg) || (e._hover = {
		value: t.value,
		hovering: n,
		rawStyle: {}
	}, e.addEventListener("mouseenter", p_), e.addEventListener("mouseleave", m_), n && f_(e));
}
function g_(e) {
	e._hover && (d_(e), e.removeEventListener("mouseenter", p_), e.removeEventListener("mouseleave", m_), delete e._hover);
}
function __(e, t) {
	h_(e, t);
}
function v_(e) {
	g_(e);
}
function y_(e) {
	let t = e._hover?.hovering ?? !1;
	g_(e), b_.set(e, t);
}
var b_ = /* @__PURE__ */ new WeakMap();
function x_(e, t) {
	let n = b_.get(e) ?? !1;
	b_.delete(e), h_(e, t, n);
}
var S_ = {
	mounted: __,
	unmounted: v_,
	beforeUpdate: y_,
	updated: x_,
	install(e) {
		e.directive("hover", this);
	}
}, C_ = Object.assign(S_, {
	Overlay: c_,
	install(e) {
		e.directive("hover", S_), c_.name && e.component(c_.name, c_);
	}
});
function w_() {
	let e = /* @__PURE__ */ I(!1);
	return {
		hovering: e,
		handleHovering: (t) => {
			e.value = t;
		}
	};
}
// packages/ui/es/ripple/index.mjs
var { n: T_ } = $("ripple"), E_ = 250, D_ = 250, O_ = /* @__PURE__ */ new WeakMap();
function k_(e) {
	return Array.from(e.children).filter((e) => O_.has(e));
}
function A_(e, t) {
	!t.tasker && !k_(e).length && (t.migrationObserver?.disconnect(), t.migrationObserver = void 0);
}
function j_(e, t) {
	let n = e.ownerDocument.defaultView?.getComputedStyle(e);
	if (!n) return 0;
	let r = n.transitionProperty.split(",").map((e) => e.trim()), i = n.transitionDuration.split(","), a = n.transitionDelay.split(","), o = (e) => {
		let t = e.trim().match(/^(-?\d*\.?\d+)(ms|s)$/);
		return t ? Number(t[1]) * (t[2] === "s" ? 1e3 : 1) : 0;
	}, s = 0;
	return r.forEach((e, n) => {
		(e === t || e === "all") && (s = Math.max(0, o(i[n % i.length]) + o(a[n % a.length])));
	}), s;
}
function M_(e, t, n) {
	let r = e._ripple;
	if (!r) return;
	let i = window.setTimeout(() => {
		e._ripple === r && r.timers.delete(i) && t();
	}, n);
	return r.timers.add(i), i;
}
function N_(e) {
	let t = e._ripple;
	t && (t.migrationObserver?.disconnect(), t.migrationObserver = void 0, t.timers.forEach((e) => window.clearTimeout(e)), t.timers.clear(), t.tasker = null, t.keyboardActive = !1, t.keyboardKey = void 0, k_(e).forEach((e) => {
		O_.delete(e), e.remove();
	}), P_(e));
}
function P_(e) {
	let t = e._ripple?.styles;
	t && (t.forEach(({ value: t, priority: n, applied: r }, i) => {
		e.style.getPropertyValue(i) !== r || e.style.getPropertyPriority(i) || (t ? e.style.setProperty(i, t, n) : e.style.removeProperty(i));
	}), e._ripple.styles = void 0);
}
function F_(e) {
	if (e._ripple?.styles) return;
	let { zIndex: t, position: n } = Hu(e), r = /* @__PURE__ */ new Map(), i = (t, n) => {
		r.set(t, {
			value: e.style.getPropertyValue(t),
			priority: e.style.getPropertyPriority(t),
			applied: n
		}), e.style.setProperty(t, n);
	};
	e._ripple.styles = r, i("overflow-x", "hidden"), i("overflow-y", "hidden"), n === "static" && i("position", "relative"), t === "auto" && i("z-index", "1");
}
function I_(e) {
	return "touches" in e;
}
function L_(e, t) {
	let { top: n, left: r, width: i, height: a } = Uu(e), { clientWidth: o, clientHeight: s } = e, c = Math.sqrt(o ** 2 + s ** 2) / 2, l = c * 2, u = I_(t) ? t.touches[0] : "clientX" in t ? t : void 0, d = u ? (u.clientX - r) * (i ? (e.offsetWidth || i) / i : 1) - e.clientLeft : o / 2, f = u ? (u.clientY - n) * (a ? (e.offsetHeight || a) / a : 1) - e.clientTop : s / 2, p = (o - c * 2) / 2, m = (s - c * 2) / 2;
	return {
		x: d - c,
		y: f - c,
		centerX: p,
		centerY: m,
		size: l
	};
}
function R_(e) {
	let t = this._ripple;
	!t || (X_(this), t.removeRipple(), t.disabled || t.tasker || !Lm.enableRipple) || (Z_(this, t), t.tasker = M_(this, () => {
		let n = () => this._ripple === t && !t.disabled && Lm.enableRipple;
		if (!n()) {
			this._ripple === t && (t.tasker = null, A_(this, t));
			return;
		}
		t.tasker = null;
		let { x: r, y: i, centerX: a, centerY: o, size: s } = L_(this, e);
		if (!n()) {
			this._ripple === t && N_(this);
			return;
		}
		let c = this.ownerDocument.createElement("div");
		if (c.classList.add(T_()), c.style.opacity = "0", c.style.transform = `translate(${r}px, ${i}px) scale3d(.3, .3, .3)`, c.style.width = `${s}px`, c.style.height = `${s}px`, t.color && (c.style.backgroundColor = t.color), c.dataset.createdAt = String(performance.now()), F_(this), !n()) {
			this._ripple === t && N_(this);
			return;
		}
		this.appendChild(c);
		let l = {
			expandUntil: performance.now() + 20,
			released: !1
		};
		O_.set(c, l);
		let u = j_(c, "transform");
		!n() || O_.get(c) !== l ? !n() && this._ripple === t && N_(this) : (l.expandUntil += u, M_(this, () => {
			let e = O_.get(c);
			if (!e || !n()) {
				!n() && this._ripple === t && N_(this);
				return;
			}
			let r = j_(c, "transform");
			!n() || O_.get(c) !== e ? !n() && this._ripple === t && N_(this) : (e.expandUntil = performance.now() + r, c.style.transform = `translate(${a}px, ${o}px) scale3d(1, 1, 1)`, c.style.opacity = ".25");
		}, 20));
	}, 30));
}
function z_() {
	let e = this._ripple;
	if (!e) return;
	let t = () => {
		let t = k_(this);
		if (!t.length) {
			A_(this, e);
			return;
		}
		let n = t[t.length - 1], r = O_.get(n);
		if (r.released) return;
		r.released = !0;
		let i = () => Math.max(0, Math.max(r.expandUntil, Number(n.dataset.createdAt) + E_) - performance.now()), a = () => {
			let t = i();
			t > 0 ? M_(this, a, t) : (n.style.opacity = "0", M_(this, () => {
				O_.delete(n), n.remove(), k_(this).length || (P_(this), A_(this, e));
			}, Math.max(D_, j_(n, "opacity"))));
		};
		M_(this, a, i());
	};
	e.tasker ? M_(this, t, 30) : t();
}
function B_() {
	if (!Bu() || !Lm.enableRipple) return;
	let e = this._ripple;
	e.tasker && (window.clearTimeout(e.tasker), e.timers.delete(e.tasker)), e.tasker = null, A_(this, e);
}
function V_(e) {
	this._ripple && (this._ripple.lastTouchAt = Date.now()), R_.call(this, e);
}
function H_(e) {
	let t = e.sourceCapabilities;
	e.button !== 0 || t?.firesTouchEvents || Date.now() - (this._ripple?.lastTouchAt ?? -Infinity) < 800 || R_.call(this, e);
}
function U_(e) {
	e.target !== this || !this._ripple || this._ripple.keyboardActive || e.key !== " " && e.key !== "Enter" || (R_.call(this, e), this._ripple.keyboardActive = !0, this._ripple.keyboardKey = e.key);
}
function W_(e) {
	this._ripple?.keyboardActive && (e.type !== "keyup" || e.key === this._ripple.keyboardKey) && (z_.call(this), this._ripple.keyboardActive = !1, this._ripple.keyboardKey = void 0);
}
var G_ = /* @__PURE__ */ new WeakMap(), K_ = [
	"touchend",
	"mouseup",
	"touchcancel",
	"dragend"
];
function q_() {
	this._ripple && this._ripple.document !== this.ownerDocument && X_(this);
}
function J_(e) {
	let t = e._ripple;
	if (!t || t.listening || t.disabled) return;
	t.listening = !0, e.addEventListener("touchstart", V_, { passive: !0 }), e.addEventListener("mousedown", H_, { passive: !0 }), e.addEventListener("touchmove", B_, { passive: !0 }), e.addEventListener("mouseup", q_), e.addEventListener("touchend", q_), e.addEventListener("touchcancel", q_), e.addEventListener("dragstart", z_, { passive: !0 }), e.addEventListener("keydown", U_), e.addEventListener("keyup", W_), e.addEventListener("blur", W_);
	let n = G_.get(t.document);
	if (!n) {
		let e = /* @__PURE__ */ new Set(), r = () => {
			for (let t of e) t._ripple?.removeRipple();
		};
		n = {
			hosts: e,
			release: r
		}, G_.set(t.document, n);
		for (let e of K_) t.document.addEventListener(e, r, { passive: !0 });
		t.document.defaultView?.addEventListener("blur", r);
	}
	n.hosts.add(e);
}
function Y_(e) {
	let t = e._ripple;
	if (!t?.listening) return;
	t.listening = !1, e.removeEventListener("keydown", U_), e.removeEventListener("keyup", W_), e.removeEventListener("blur", W_), e.removeEventListener("touchstart", V_), e.removeEventListener("mousedown", H_), e.removeEventListener("touchmove", B_), e.removeEventListener("mouseup", q_), e.removeEventListener("touchend", q_), e.removeEventListener("touchcancel", q_), e.removeEventListener("dragstart", z_);
	let n = G_.get(t.document);
	if (n && n.hosts.delete(e) && !n.hosts.size) {
		for (let e of K_) t.document.removeEventListener(e, n.release);
		t.document.defaultView?.removeEventListener("blur", n.release), G_.delete(t.document);
	}
}
function X_(e) {
	let t = e._ripple;
	t && t.document !== e.ownerDocument && (N_(e), Y_(e), t.document = e.ownerDocument, J_(e));
}
function Z_(e, t) {
	if (t.migrationObserver || typeof MutationObserver > "u") return;
	let n = e.isConnected, r = new MutationObserver(() => {
		e._ripple === t && (t.document === e.ownerDocument ? n && !e.isConnected ? N_(e) : e.isConnected && (n = !0) : X_(e));
	}), i = e.getRootNode();
	r.observe(i, {
		childList: !0,
		subtree: !0
	}), i !== t.document && r.observe(t.document, {
		childList: !0,
		subtree: !0
	}), t.migrationObserver = r;
}
function Q_(e, t) {
	e._ripple = {
		document: e.ownerDocument,
		listening: !1,
		tasker: null,
		color: t.value?.color,
		disabled: t.value?.disabled,
		timers: /* @__PURE__ */ new Set(),
		keyboardActive: !1,
		removeRipple: z_.bind(e)
	}, J_(e);
}
function $_(e) {
	N_(e), Y_(e), delete e._ripple;
}
function ev(e, t) {
	X_(e);
	let n = {
		color: t.value?.color,
		disabled: t.value?.disabled
	};
	(n.color !== e._ripple?.color || n.disabled !== e._ripple?.disabled) && e._ripple && (n.disabled && N_(e), Object.assign(e._ripple, n), n.disabled ? Y_(e) : J_(e));
}
var tv = {
	mounted: Q_,
	unmounted: $_,
	updated: ev,
	install(e) {
		e.directive("ripple", this);
	}
}, nv = [
	"default",
	"text",
	"outline",
	"tonal"
], rv = [
	"xs",
	"sm",
	"md",
	"lg",
	"xl"
], iv = [
	"default",
	"primary",
	"secondary",
	"tertiary",
	"info",
	"success",
	"warning",
	"danger"
], av = [
	"button",
	"submit",
	"reset"
], ov = ["button", "a"], sv = [
	"default",
	"fill",
	"line"
], cv = {
	status: {
		type: String,
		validator: (e) => iv.includes(e)
	},
	variant: {
		type: String,
		validator: (e) => nv.includes(e)
	},
	size: {
		type: String,
		validator: (e) => rv.includes(e)
	},
	htmlType: {
		type: String,
		default: "button",
		validator: (e) => av.includes(e)
	},
	component: {
		type: String,
		default: "button",
		validator: (e) => ov.includes(e)
	},
	round: Boolean,
	block: Boolean,
	loading: Boolean,
	loadingType: {
		type: String,
		default: "circle"
	},
	loadingMode: {
		type: String,
		default: "default",
		validator: (e) => sv.includes(e)
	},
	loadingSize: [String, Number],
	loadingColor: {
		type: String,
		default: "currentColor"
	},
	disabled: {
		type: Boolean,
		default: void 0
	},
	ripple: {
		type: Boolean,
		default: !0
	},
	focusable: {
		type: Boolean,
		default: !0
	},
	autofocus: Boolean,
	textColor: String,
	color: String,
	elevation: {
		type: [Boolean, Number],
		default: !1
	},
	stacked: {
		type: Boolean,
		default: void 0
	}
}, lv = (e, { defaultValue: t = "md" } = {}) => {
	let n = B(Nf, void 0);
	return { mergedSize: Q(() => e?.value ?? n?.size ?? t) };
};
// packages/ui/es/button/platform.mjs
function uv() {
	return lv().mergedSize;
}
// packages/ui/es/button/group-provide.mjs
var dv = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function fv() {
	let { bindChildren: e, childProviders: t, length: n } = Yu(dv);
	return {
		length: n,
		buttons: t,
		bindButtons: e
	};
}
// packages/ui/es/button/provide.mjs
function pv() {
	let { bindParent: e, parentProvider: t, index: n } = qu(dv);
	return {
		index: n,
		buttonGroup: t,
		bindButtonGroup: e
	};
}
// packages/ui/es/button/use-button.mjs
function mv(e, t) {
	let { n } = $("button"), { buttonGroup: r } = pv(), i = uv(), a = !0, o = !1;
	Qi(() => {
		a = !1;
	}), Vi(() => {
		a = !1;
	}), Bi(() => {
		a = !0;
	});
	let s = Q(() => ({
		status: e.status ?? r?.status.value ?? "default",
		variant: e.variant ?? r?.variant.value ?? "outline",
		size: e.size ?? r?.size.value ?? i.value,
		color: e.color ?? r?.color.value,
		textColor: e.textColor ?? r?.textColor.value,
		disabled: e.disabled ?? r?.disabled.value ?? !1,
		stacked: e.stacked ?? r?.stacked.value ?? !1,
		block: e.block,
		elevation: r || e.elevation === !1 ? void 0 : n(`$-elevation--${e.elevation === !0 || e.elevation == null ? 1 : Math.min(24, Math.max(0, Math.round(Number(e.elevation) || 0)))}`)
	})), c = Q(() => !!e.loading), l = Q(() => !!(s.value.disabled || c.value)), u = Q(() => {
		if (s.value.disabled) return {};
		let { color: e, textColor: t, variant: n } = s.value;
		return {
			color: t || (n === "default" ? void 0 : e),
			background: n === "default" ? e : n === "tonal" && e ? `color-mix(in srgb, ${e} 16%, transparent)` : void 0,
			borderColor: n === "outline" ? t || e : void 0
		};
	});
	function d(e) {
		if (l.value || o || !a) e.preventDefault(), e.stopPropagation();
		else {
			o = !0;
			try {
				t("click", e);
			} finally {
				o = !1;
			}
		}
	}
	return {
		states: s,
		busy: c,
		blocked: l,
		computedStyle: u,
		handleClick: d
	};
}
// packages/ui/es/button/Button.vue.mjs
var hv = /* @__PURE__ */ H({
	name: $("button").name,
	inheritAttrs: !1,
	__name: "Button",
	props: cv,
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = e, r = ka(), i = () => Object.fromEntries(Object.entries(r).filter(([e]) => e !== "class" && e !== "style")), a = t, { n: o, classes: s } = $("button"), { states: c, busy: l, blocked: u, computedStyle: d, handleClick: f } = mv(n, a), { hovering: p, handleHovering: m } = w_(), h = /* @__PURE__ */ I(!1), g = Q(() => {
			let e = n.loadingSize ?? c.value.size;
			return typeof e == "number" ? e : {
				xs: 12,
				sm: 14,
				md: 16,
				lg: 18,
				xl: 20
			}[e];
		});
		return (e, t) => gr((G(), q(ca(e.component), Z(i(), {
			href: e.component === "a" && !L(u) ? L(r).href : void 0,
			role: e.component === "a" && L(u) ? "link" : L(r).role,
			class: [L(s)(L(o)(), L(o)(`--size-${L(c).size}`), L(o)(`--status-${L(c).status}`), L(o)(`--variant-${L(c).variant}`), [e.block, L(o)("--block")], [e.round, L(o)("--round")], [L(c).stacked, L(o)("--stacked")], [e.$slots.icon && !e.$slots.default, L(o)("--icon-only")], [L(c).variant === "default", L(c).elevation], [L(l), L(o)("--loading")], [L(l), L(o)(`--loading-${e.loadingMode}`)], [L(c).disabled, L(o)("--disabled")], [!L(u) && h.value && e.focusable, L(o)("--focus")], [!L(u) && L(p), L(o)("--hovering")]), L(r).class],
			style: [L(d), L(r).style],
			type: e.component === "button" ? e.htmlType : void 0,
			disabled: e.component === "button" ? L(u) : void 0,
			"aria-disabled": e.component === "a" && L(u) ? !0 : void 0,
			"aria-busy": L(l) || void 0,
			tabindex: !e.focusable || e.component === "a" && L(u) ? -1 : L(r).tabindex,
			autofocus: e.autofocus,
			onClick: L(f),
			onFocus: t[0] ||= (e) => h.value = !0,
			onBlur: t[1] ||= (e) => h.value = !1
		}), {
			default: z(() => [
				L(l) && !(e.loadingMode === "default" && e.$slots.icon) ? (G(), K("span", {
					key: 0,
					class: P(L(o)("loading")),
					"aria-hidden": "true",
					style: N({ color: e.loadingColor })
				}, [e.loadingMode === "line" ? (G(), K("span", {
					key: 0,
					class: P(L(o)("loading-line"))
				}, null, 2)) : (G(), q(Jg, {
					key: 1,
					type: e.loadingType,
					size: g.value,
					color: e.loadingColor ?? "currentColor"
				}, null, 8, [
					"type",
					"size",
					"color"
				]))], 6)) : X("", !0),
				e.$slots.icon ? (G(), K("span", {
					key: 1,
					class: P(L(s)(L(o)("--icon"), [L(l) && e.loadingMode === "fill", L(o)("--hidden")]))
				}, [U(e.$slots, "icon"), L(l) && e.loadingMode === "default" ? (G(), K("span", {
					key: 0,
					class: P(L(o)("loading")),
					"aria-hidden": "true",
					style: N({ color: e.loadingColor })
				}, [Y(Jg, {
					type: e.loadingType,
					size: g.value,
					color: e.loadingColor ?? "currentColor"
				}, null, 8, [
					"type",
					"size",
					"color"
				])], 6)) : X("", !0)], 2)) : X("", !0),
				e.$slots.default ? (G(), K("span", {
					key: 2,
					class: P(L(s)(L(o)("content"), [L(l) && e.loadingMode === "fill", L(o)("--hidden")]))
				}, [U(e.$slots, "default")], 2)) : X("", !0),
				Y(L(c_), { hovering: !L(u) && L(p) }, null, 8, ["hovering"])
			]),
			_: 3
		}, 16, [
			"href",
			"role",
			"class",
			"style",
			"type",
			"disabled",
			"aria-disabled",
			"aria-busy",
			"tabindex",
			"autofocus",
			"onClick"
		])), [[L(tv), { disabled: L(u) || !e.ripple }], [
			L(C_),
			L(m),
			"desktop"
		]]);
	}
}), gv = Pf(hv, hv.props), _v = Symbol("editor-auxiliary-actions"), vv = Symbol("form-error-description");
function yv(e, t) {
	let n = B(vv, void 0);
	if (!n?.feedback) return {
		localId: void 0,
		text: Q(() => "")
	};
	let r = /* @__PURE__ */ I(), i = /* @__PURE__ */ I(""), a = /* @__PURE__ */ I();
	return V([
		e,
		() => n.feedback?.(),
		t
	], ([e, t]) => {
		a.value = t?.sourceId;
		let n = t?.element && e && t.element.getRootNode() !== e.getRootNode();
		if (i.value = n ? t.text : "", i.value && !r.value) {
			let e = crypto.getRandomValues(/* @__PURE__ */ new Uint32Array(4));
			r.value = "c-editor-error-" + Array.from(e, (e) => e.toString(16).padStart(8, "0")).join("");
		}
	}, {
		immediate: !0,
		flush: "post"
	}), vr(vv, {
		id: Q(() => i.value ? r.value : a.value ?? n.id.value),
		feedback: n?.feedback
	}), {
		localId: r,
		text: i
	};
}
function bv() {
	let e = B(vv, void 0)?.id;
	return {
		errorId: e,
		describe(t) {
			let n = typeof t == "string" ? t.split(/[ \t\n\f\r]+/).filter(Boolean) : [];
			return e?.value && !n.includes(e.value) && n.push(e.value), n.join(" ") || void 0;
		}
	};
}
// packages/ui/es/form/label-context.mjs
var xv = Symbol("form-item-label");
function Sv() {
	vr(xv, Q(() => void 0));
}
// packages/ui/es/form/context.mjs
var Cv = Symbol("CedarFormItemContext"), wv = Symbol("CedarFormContext"), Tv = (e, t, n, r) => e ?? t ?? n ?? r, Ev = ({ size: e, disabled: t, readonly: n, error: r, uninject: i } = {}) => {
	let a = (i ? void 0 : B(Cv, void 0)) ?? {}, o = i ? void 0 : B(wv, void 0);
	return {
		formItemCtx: a,
		mergedSize: Q(() => Tv(e?.value, a.size, o?.size, void 0)),
		mergedDisabled: Q(() => Tv(t?.value, a.disabled, o?.disabled, !1)),
		mergedReadonly: Q(() => Tv(n?.value, a.readonly, o?.readonly, !1)),
		mergedError: Q(() => Tv(r?.value, a.error, void 0, !1)),
		feedback: /* @__PURE__ */ xn(a, "feedback"),
		eventHandlers: /* @__PURE__ */ xn(a, "eventHandlers")
	};
}, Dv = Ev;
function Ov() {
	Sv();
	let e = B(Cv, void 0);
	e && vr(Cv, new Proxy(e, { get(e, t) {
		if (t === "eventHandlers") return {};
		if (t === "hasOuterLabel" || t === "error") return !1;
		if (t !== "feedback") return Reflect.get(e, t);
	} }));
}
// packages/ui/es/_components/field-presentation/texts.mjs
function kv() {
	let { t: e } = Wg();
	return {
		input: Q(() => e("common.placeholderInput")),
		select: Q(() => e("common.placeholderSelect")),
		edit: Q(() => e("fieldPresentation.edit")),
		close: Q(() => e("fieldPresentation.close")),
		search: Q(() => e("fieldPresentation.search")),
		clear: Q(() => e("common.clear")),
		selectionCount: Q(() => e("fieldPresentation.selectionCount")),
		selectionRemove: Q(() => e("fieldPresentation.selectionRemove")),
		selectionBack: Q(() => e("fieldPresentation.selectionBack")),
		selectionEmpty: Q(() => e("fieldPresentation.selectionEmpty")),
		selected: Q(() => e("fieldPresentation.selected")),
		limit: Q(() => e("fieldPresentation.limit"))
	};
}
// packages/ui/es/_components/field-presentation/EditorPanel.vue.mjs
var Av = ["aria-label", "aria-busy"], jv = {
	role: "heading",
	"aria-level": "2"
}, Mv = ["aria-label", "disabled"], Nv = ["inert"], Pv = {
	key: 1,
	role: "status"
}, Fv = ["id"], Iv = ["id"], Lv = ["aria-label", "disabled"], Rv = /* @__PURE__ */ H({
	name: $("field-editor-panel").name,
	__name: "EditorPanel",
	props: {
		popupContainer: { type: [String, Boolean] },
		clearable: { type: Boolean },
		compact: { type: Boolean },
		deferEscape: { type: Boolean },
		title: {},
		intent: {},
		label: {},
		pending: { type: Boolean },
		disabled: { type: Boolean },
		needConfirm: { type: Boolean },
		error: {},
		count: {},
		limit: {}
	},
	emits: [
		"confirm",
		"cancel",
		"clear"
	],
	setup(e, { expose: t, emit: n }) {
		let r = e, i = n;
		function a(e) {
			e.key === "Escape" && (e.defaultPrevented || e.isComposing || e.keyCode === 229 || r.pending ? e.stopPropagation() : r.deferEscape || (e.stopPropagation(), i("cancel")));
		}
		let { n: o } = $("field-presentation"), s = /* @__PURE__ */ ln();
		r.compact || vr(_v, s), vr(Fg, !0), vr(Ig, !0), vr(Lg, Q(() => !!r.compact)), Ov();
		let { i18nMessage: c } = Wg(), l = Q(() => c.value.dialog.confirmButtonText), u = kv(), d = u.close, f = u.clear, p = /* @__PURE__ */ I(), { localId: m, text: h } = yv(() => p.value, () => r.popupContainer), g = /* @__PURE__ */ I();
		return t({
			focus: () => {
				let e = "input:not([disabled]):not([type=\"hidden\"]), textarea:not([disabled]), [tabindex=\"0\"]:not([disabled]), button:not([disabled])";
				(g.value?.querySelector(e) ?? p.value?.querySelector(e))?.focus({ preventScroll: !0 });
			},
			blur: () => {
				let e = p.value, t = e?.getRootNode()?.activeElement;
				t && e?.contains(t) && t.blur?.();
			}
		}), (t, n) => (G(), K("section", {
			class: P([L(o)("panel"), { [L(o)("panel--compact")]: e.compact }]),
			ref_key: "panelElement",
			ref: p,
			"aria-label": e.label,
			"aria-busy": e.pending || void 0,
			onKeydown: a
		}, [
			e.compact ? X("", !0) : (G(), K("header", {
				key: 0,
				class: P(L(o)("toolbar"))
			}, [J("span", jv, F(e.title || (e.intent === "input" ? L(u).input.value : L(u).select.value)), 1), J("button", {
				type: "button",
				class: P(L(o)("close")),
				"aria-label": L(d),
				disabled: e.pending,
				onClick: n[0] ||= (n) => !e.pending && t.$emit("cancel")
			}, " × ", 10, Mv)], 2)),
			J("div", {
				ref_key: "bodyElement",
				ref: g,
				class: P(L(o)("body")),
				inert: e.pending || void 0
			}, [U(t.$slots, "default")], 10, Nv),
			e.count === void 0 ? X("", !0) : (G(), K("p", Pv, F(L(u).selected.value) + " " + F(e.count) + F(e.limit ? ` / ${e.limit}` : ""), 1)),
			e.error ? (G(), K("p", {
				key: 2,
				id: L(h) && L(h) === e.error ? L(m) : void 0,
				role: "alert",
				class: P(L(o)("error"))
			}, F(e.error), 11, Fv)) : X("", !0),
			L(h) && L(h) !== e.error ? (G(), K("span", {
				key: 3,
				id: L(m),
				hidden: ""
			}, F(L(h)), 9, Iv)) : X("", !0),
			e.needConfirm || s.value || e.compact ? (G(), K("footer", {
				key: 4,
				class: P(L(o)("footer"))
			}, [
				J("div", { class: P(L(o)("auxiliary")) }, [s.value ? (G(), q(ca(s.value), { key: 0 })) : X("", !0)], 2),
				e.clearable ? (G(), q(L(gv), {
					key: 0,
					variant: "text",
					disabled: e.disabled || e.pending,
					onMousedown: n[1] ||= mu(() => {}, ["prevent"]),
					onClick: n[2] ||= (e) => t.$emit("clear")
				}, {
					default: z(() => [Es(F(L(f)), 1)]),
					_: 1
				}, 8, ["disabled"])) : X("", !0),
				e.needConfirm ? (G(), q(L(gv), {
					key: 1,
					status: "primary",
					loading: e.pending,
					disabled: e.disabled,
					onMousedown: n[3] ||= mu(() => {}, ["prevent"]),
					onClick: n[4] ||= (n) => !e.pending && t.$emit("confirm", n)
				}, {
					default: z(() => [e.compact ? (G(), K(W, { key: 0 }, [J("span", {
						class: P(L(o)("confirm-icon")),
						"aria-hidden": "true"
					}, null, 2), J("span", { class: P(L(o)("sr-only")) }, F(l.value), 3)], 64)) : (G(), K(W, { key: 1 }, [Es(F(l.value), 1)], 64))]),
					_: 1
				}, 8, ["loading", "disabled"])) : X("", !0),
				e.compact ? (G(), K("button", {
					key: 2,
					type: "button",
					class: P(L(o)("close")),
					"aria-label": L(d),
					disabled: e.pending,
					onMousedown: n[5] ||= mu(() => {}, ["prevent"]),
					onClick: n[6] ||= (e) => t.$emit("cancel")
				}, " × ", 42, Lv)) : X("", !0)
			], 2)) : X("", !0)
		], 42, Av));
	}
}), zv = [
	"stroke-width",
	"stroke-linecap",
	"stroke-linejoin",
	"aria-hidden"
], Bv = { key: 0 }, Vv = /* @__PURE__ */ H({
	name: "CIconEdit",
	__name: "icon-edit",
	props: {
		size: {},
		color: {},
		title: {},
		strokeWidth: { default: 4 },
		strokeLinecap: { default: "butt" },
		strokeLinejoin: { default: "miter" },
		rotate: {},
		spin: { type: Boolean }
	},
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Vp("icon"), a = /^-?(?:\d+|\d*\.\d+)$/, o = Q(() => [
			i,
			`${i}-edit`,
			{ [`${i}-spin`]: n.spin }
		]), s = Q(() => ({
			color: n.color,
			fontSize: Hp(n.size) || a.test(n.size?.trim() ?? "") ? `${n.size}px` : n.size,
			...n.rotate ? { transform: `rotate(${n.rotate}deg)` } : {}
		}));
		return (e, t) => (G(), K("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 48 48",
			width: "1em",
			height: "1em",
			class: P(o.value),
			style: N(s.value),
			"stroke-width": n.strokeWidth,
			"stroke-linecap": n.strokeLinecap,
			"stroke-linejoin": n.strokeLinejoin,
			"aria-hidden": !n.title,
			role: "img",
			onClick: t[0] ||= (e) => r("click", e)
		}, [n.title ? (G(), K("title", Bv, F(n.title), 1)) : X("v-if", !0), t[1] ||= J("path", { d: "m30.48 19.038 5.733-5.734a1 1 0 0 0 0-1.414l-5.586-5.586a1 1 0 0 0-1.414 0l-5.734 5.734m7 7L15.763 33.754a1 1 0 0 1-.59.286l-6.048.708a1 1 0 0 1-1.113-1.069l.477-6.31a1 1 0 0 1 .29-.631l14.7-14.7m7 7-7-7M6 42h36" }, null, -1)], 14, zv));
	}
}), Hv = Object.assign(Vv, { install(e) {
	e.component(Vv.name, Vv);
} }), Uv = ["aria-busy", "title"], Wv = [
	"id",
	"role",
	"aria-readonly",
	"aria-disabled",
	"aria-describedby"
], Gv = [
	"id",
	"disabled",
	"aria-label",
	"aria-describedby",
	"aria-expanded"
], Kv = [
	"id",
	"aria-label",
	"aria-labelledby",
	"aria-describedby",
	"title"
], qv = /* @__PURE__ */ H({
	name: $("field-reference").name,
	inheritAttrs: !1,
	__name: "FieldReference",
	props: {
		openTriggerTarget: {},
		id: {},
		editMode: {},
		disabled: { type: Boolean },
		unavailable: { type: Boolean },
		loading: { type: Boolean },
		label: {},
		text: {},
		placeholder: {},
		open: { type: Boolean }
	},
	emits: ["open"],
	setup(e, { expose: t, emit: n }) {
		let r = e, i = n, { n: a } = $("field-presentation"), { describe: o } = bv(), s = ka(), c = `c-field-edit-${Zp()}`, l = Q(() => typeof s["aria-labelledby"] == "string" ? s["aria-labelledby"].trim() : ""), u = /* @__PURE__ */ I(), d = /* @__PURE__ */ I(), { t: f } = Wg(), p = Q(() => f("fieldPresentation.edit")), m = Q(() => f(r.editMode === "dblclick" ? "fieldPresentation.doubleClickEdit" : "fieldPresentation.clickEdit"));
		function h(e) {
			let t = e.currentTarget.ownerDocument.getSelection();
			e.detail < 2 && t && !t.isCollapsed && t.containsNode(e.currentTarget, !0) || i("open");
		}
		return t({ focus: () => (u.value ?? d.value)?.focus({ preventScroll: !0 }) }), (t, n) => (G(), K("span", {
			class: P(L(a)("reference-group")),
			"aria-busy": e.loading || void 0,
			title: e.disabled ? void 0 : m.value
		}, [
			e.openTriggerTarget === "icon" && e.disabled ? (G(), K("output", Z({ key: 0 }, t.$attrs, {
				id: e.id,
				class: [L(a)("reference"), L(a)("reference--icon")],
				role: typeof t.$attrs.role == "string" ? t.$attrs.role : "textbox",
				"aria-readonly": !t.$attrs.role || t.$attrs.role === "textbox" || void 0,
				"aria-disabled": e.unavailable ? !0 : t.$attrs["aria-disabled"],
				"aria-describedby": L(o)(t.$attrs["aria-describedby"])
			}), F(e.text || e.placeholder || "—"), 17, Wv)) : e.openTriggerTarget === "icon" ? (G(), K("span", Z({ key: 1 }, t.$attrs, { class: [L(a)("reference"), L(a)("reference--icon")] }), F(e.text || e.placeholder || "—"), 17)) : (G(), K("button", Z({ key: 2 }, t.$attrs, {
				ref_key: "button",
				ref: u,
				id: e.id,
				type: "button",
				class: L(a)("reference"),
				disabled: e.disabled,
				"aria-label": e.label,
				"aria-describedby": L(o)(t.$attrs["aria-describedby"]),
				"aria-expanded": e.open,
				"aria-haspopup": "dialog",
				onClick: n[0] ||= (t) => e.editMode === "click" && h(t),
				onDblclick: n[1] ||= (t) => e.editMode === "dblclick" && h(t),
				onKeydown: [n[2] ||= gu(mu((e) => t.$emit("open"), ["prevent"]), ["enter"]), n[3] ||= gu(mu((e) => t.$emit("open"), ["prevent"]), ["f2"])]
			}), [J("span", null, F(e.text || e.placeholder || "—"), 1)], 16, Gv)),
			Y(Yg, { loading: e.loading }, null, 8, ["loading"]),
			e.disabled ? X("", !0) : (G(), K("button", {
				key: 3,
				ref_key: "editButton",
				ref: d,
				id: e.openTriggerTarget === "icon" ? e.id : void 0,
				type: "button",
				class: P(L(a)("edit")),
				"aria-label": e.label ? `${p.value}：${e.label}` : p.value,
				"aria-labelledby": l.value ? `${c} ${l.value}` : void 0,
				"aria-describedby": L(o)(t.$attrs["aria-describedby"]),
				title: p.value,
				onClick: n[4] ||= mu((e) => t.$emit("open"), ["stop"]),
				onDblclick: n[5] ||= mu(() => {}, ["stop"])
			}, [l.value ? (G(), K("span", {
				key: 0,
				id: c,
				class: P(L(a)("sr-only"))
			}, F(p.value), 3)) : X("", !0), Y(L(Hv), { "aria-hidden": "true" })], 42, Kv))
		], 10, Uv));
	}
}), Jv = ["aria-busy"], Yv = [
	"dir",
	"aria-label",
	"aria-labelledby"
], Xv = /* @__PURE__ */ H({
	name: $("field-presentation").name,
	inheritAttrs: !1,
	__name: "FieldPresentation",
	props: {
		clearable: { type: Boolean },
		commit: { type: Function },
		retainReferenceIdWhenOpen: { type: Boolean },
		openTriggerTarget: {},
		editMode: {},
		empty: { type: Boolean },
		emptyText: {},
		readPretty: { type: Boolean },
		loading: { type: Boolean },
		text: {},
		placeholder: {},
		intent: {},
		label: {},
		open: { type: Boolean },
		popupContainer: { type: [String, Boolean] },
		confirmDisabled: { type: Boolean },
		pending: { type: Boolean },
		disabled: { type: Boolean },
		readonly: { type: Boolean },
		needConfirm: { type: Boolean },
		error: {},
		count: {},
		limit: {}
	},
	emits: [
		"open",
		"confirm",
		"cancel",
		"clear",
		"editor-ready"
	],
	setup(e, { expose: t, emit: n }) {
		let r = sm(), i = e, a = n, { n: o } = $("field-presentation"), s = kv(), c = Q(() => [
			i.label,
			i.placeholder,
			i.intent === "input" ? s.input.value : s.select.value,
			"Edit"
		].find((e) => typeof e == "string" && e.trim())), l = rm(() => i.popupContainer), u = /* @__PURE__ */ I(), d = /* @__PURE__ */ I(), { dir: f, isRtl: p } = od(() => d.value), m = /* @__PURE__ */ I(), h = /* @__PURE__ */ I(), g = /* @__PURE__ */ I(), _, v = 0, y = !1, b = /* @__PURE__ */ I(!0), x = () => !!(i.open && b.value && !i.readPretty && i.editMode !== "direct"), { zIndex: S } = Rm(x, 1);
		em(() => g.value, () => S.value, "positioned"), Im(x, S, () => d.value?.ownerDocument);
		let C = () => d.value?.ownerDocument.defaultView, w = !0, T, E, D = !1, ee = Am(Q(x), (e) => {
			if ("composedPath" in e) {
				let t = e.composedPath();
				if (g.value && t.includes(g.value) || d.value && t.includes(d.value)) return !0;
			}
			let t = "composedPath" in e ? e.target : e;
			return !!(t && (g.value?.contains(t) || d.value?.contains(t)));
		}), te = {
			save: () => O(!0),
			focus: () => m.value?.focus()
		};
		async function ne() {
			if (!(D || y || i.disabled || i.readonly || i.pending)) {
				D = !0;
				try {
					let e = d.value?.ownerDocument ?? (typeof window < "u" ? window.document : void 0);
					if (!e) return;
					await e_(e, async () => {
						let t = Zg(e);
						t && t !== te && !await t.save() ? t.focus() : y || !b.value || i.disabled || i.readonly || i.pending || i.readPretty || (T = Qg(e, te), a("open", !0), await R());
					});
				} finally {
					D = !1;
				}
			}
		}
		function O(e, t) {
			return E || (i.open ? i.pending || i.disabled || i.readonly || i.confirmDisabled ? Promise.resolve(!1) : (w = !e, E = (async () => {
				try {
					let e = i.commit ? await i.commit(t) : a("confirm", t);
					await R();
					let n = e !== !1 && !i.open;
					return n || (w = !0, !y && b.value && i.open && (m.value?.focus(), await R(), !y && i.open && ee.dismissPopups())), n;
				} catch {
					return w = !0, !y && b.value && i.open && (m.value?.focus(), await R(), !y && i.open && ee.dismissPopups()), !1;
				} finally {
					E = void 0;
				}
			})(), E) : Promise.resolve(!0));
		}
		let re = /* @__PURE__ */ new WeakSet(), k = [];
		function A(e) {
			ee.contains(e) && re.add(e);
		}
		function j() {
			for (let e of k) e.removeEventListener("click", A, !0), e.removeEventListener("focusin", A, !0);
			let e = /* @__PURE__ */ new Set();
			for (let t of [d.value, g.value]) {
				let n = t?.getRootNode();
				for (; n && n.nodeType === 11 && "host" in n;) {
					let t = n;
					e.add(t), n = t.host.getRootNode();
				}
			}
			k = [...e];
			for (let e of k) e.addEventListener("click", A, !0), e.addEventListener("focusin", A, !0);
		}
		V([d, g], j, { flush: "sync" }), V([l, () => i.popupContainer], j, { flush: "post" });
		function M(e) {
			if (x() && !ee.contains(e)) {
				if (k.some((t) => e.composedPath().includes(t.host))) {
					let t = v;
					setTimeout(() => {
						!y && t === v && x() && !re.has(e) && O(!0, e);
					}, 0);
				} else O(!0, e);
			}
		}
		function ie(e) {
			i.pending && oe(e);
		}
		function ae(e) {
			(e.key === "Escape" || e.key === "Enter") && oe(e);
		}
		function oe(e) {
			if (e.defaultPrevented || e.isComposing || e.keyCode === 229) return;
			if (e.key === "Escape") {
				if (i.pending) {
					e.preventDefault(), e.stopPropagation();
					return;
				}
				if (ee.hasOpenPopup()) {
					ee.escapePopup(e), e.preventDefault(), e.stopPropagation();
					let t = v;
					R(async () => {
						y || t !== v || !i.open || ee.hasOpenPopup() || (m.value?.focus(), await R(), !y && t === v && i.open && ee.dismissPopups());
					});
					return;
				}
				e.preventDefault(), e.stopPropagation(), a("cancel");
				return;
			}
			if (e.key !== "Enter" || ee.hasOpenPopup()) return;
			let t = e.target;
			t.closest("button, [role=button], [type=checkbox], [type=radio]") || (!t.closest("textarea, [contenteditable=true]") || e.ctrlKey || e.metaKey) && (e.preventDefault(), e.stopPropagation(), O(!1, e));
		}
		function se() {
			let e = d.value, t = C();
			if (!i.open || !e || !t) return;
			let n = e.getBoundingClientRect(), r = t.getComputedStyle(e), a = (e, t) => parseFloat(r.getPropertyValue(`--c-field-presentation-${e}`)) || t, o = a("editor-edge-gap", 8), s = Math.min(Math.max(n.width + a("editor-action-width", 88), a("min-width", 280)), t.innerWidth - o * 2), c = g.value?.getBoundingClientRect().height || n.height, l = Math.max(o, Math.min(p.value ? n.right - s : n.left, t.innerWidth - s - o));
			h.value = {
				left: `${l}px`,
				top: `${Math.max(o, Math.min(n.top, t.innerHeight - c - o))}px`,
				width: `${s}px`
			};
		}
		function ce() {
			v++, C()?.removeEventListener("resize", se), C()?.removeEventListener("scroll", se, !0), _?.disconnect(), _ = void 0;
		}
		V([() => i.open, b], async ([e, t], n) => {
			ce();
			let r = v;
			if (e && t || (T?.(), T = void 0), e && t && !i.readPretty) {
				if (w = !0, await R(), y || r !== v || !i.open) return;
				let e = d.value?.ownerDocument ?? (typeof window < "u" ? window.document : void 0);
				if (e) {
					let t = !1;
					if (await e_(e, async () => {
						if (y || r !== v || !i.open) return;
						let n = Zg(e);
						n && n !== te && !await n.save() ? (a("open", !1), n.focus()) : !y && r === v && i.open && (T = Qg(e, te), t = !0);
					}), !t) return;
				}
				if (await R(), y || r !== v || !i.open) return;
				se(), C()?.addEventListener("resize", se, { passive: !0 }), C()?.addEventListener("scroll", se, {
					capture: !0,
					passive: !0
				});
				let t = C()?.ResizeObserver;
				t && d.value && (_ = new t(se), _.observe(d.value)), await R(), !y && r === v && i.open && (g.value && _?.observe(g.value), se(), m.value?.focus(), a("editor-ready"));
			} else if (h.value = void 0, n?.[0] && t) {
				let e = !1;
				R(() => {
					e || (e = !0, !w || y || !b.value || r !== v || i.open || i.readPretty || i.disabled || i.readonly || u.value?.focus());
				});
			}
		}, {
			immediate: !0,
			flush: "post"
		});
		function le(e) {
			e.key === "Escape" && x() && ee.contains(e) && oe(e);
		}
		let ue;
		return Yi(() => {
			ue = d.value?.ownerDocument ?? (typeof window < "u" ? window.document : void 0), ue?.addEventListener("click", M, !0), ue?.addEventListener("focusin", M), ue?.addEventListener("keydown", le), i.open && se();
		}), Bi(() => {
			b.value = !0;
		}), Vi(() => {
			b.value = !1, ce();
		}), Qi(() => {
			y = !0;
			for (let e of k) e.removeEventListener("click", A, !0), e.removeEventListener("focusin", A, !0);
			k = [], T?.(), ue?.removeEventListener("click", M, !0), ue?.removeEventListener("focusin", M), ue?.removeEventListener("keydown", le), ce();
		}), t({
			focus: () => i.open ? m.value?.focus() : u.value?.focus(),
			blur: () => m.value?.blur()
		}), (t, n) => e.readPretty ? (G(), K("div", Z({ key: 0 }, t.$attrs, {
			class: L(o)("read"),
			"aria-busy": e.loading || void 0
		}), [U(t.$slots, "read", {}, () => [Es(F(e.empty ?? !e.text ? e.emptyText ?? "-" : e.text), 1)]), Y(Yg, { loading: e.loading }, null, 8, ["loading"])], 16, Jv)) : e.editMode === "direct" ? U(t.$slots, "default", {}, void 0, void 0, 1) : (G(), K(W, { key: 2 }, [J("span", {
			ref_key: "anchor",
			ref: d,
			class: P(L(o)("anchor")),
			style: N({ visibility: e.open ? "hidden" : void 0 })
		}, [Y(qv, Z(t.$attrs, {
			id: e.open && !e.retainReferenceIdWhenOpen ? void 0 : t.$attrs.id,
			ref_key: "reference",
			ref: u,
			"edit-mode": e.editMode,
			label: e.label || e.placeholder,
			text: e.text,
			placeholder: e.placeholder,
			open: e.open,
			loading: e.loading || e.pending,
			"open-trigger-target": e.openTriggerTarget,
			disabled: e.disabled || e.readonly || e.pending,
			unavailable: !!(e.disabled || e.pending),
			"aria-hidden": e.open || void 0,
			tabindex: e.open ? -1 : void 0,
			onOpen: ne
		}), null, 16, [
			"id",
			"edit-mode",
			"label",
			"text",
			"placeholder",
			"open",
			"loading",
			"open-trigger-target",
			"disabled",
			"unavailable",
			"aria-hidden",
			"tabindex"
		])], 6), e.open && h.value ? (G(), q(zr, {
			key: 0,
			to: L(l),
			disabled: e.popupContainer === !1
		}, [J("div", Z(L(r), {
			ref_key: "overlay",
			ref: g,
			dir: L(f),
			class: L(o)("overlay"),
			style: [h.value, { zIndex: L(S) }],
			onKeydownCapture: ie,
			onKeydown: ae,
			role: "dialog",
			"aria-label": c.value,
			"aria-labelledby": typeof t.$attrs["aria-labelledby"] == "string" ? t.$attrs["aria-labelledby"] : void 0,
			"aria-modal": "false"
		}), [Y(Rv, {
			"popup-container": e.popupContainer,
			ref_key: "panel",
			ref: m,
			compact: "",
			"defer-escape": "",
			intent: e.intent,
			label: e.label,
			pending: e.pending,
			clearable: e.clearable,
			onClear: n[0] ||= (e) => t.$emit("clear"),
			disabled: e.disabled || e.readonly || e.confirmDisabled,
			"need-confirm": e.needConfirm,
			error: e.error,
			count: e.count,
			limit: e.limit,
			onConfirm: n[1] ||= (e) => O(!1, e),
			onCancel: n[2] ||= (e) => t.$emit("cancel")
		}, {
			default: z(() => [U(t.$slots, "default")]),
			_: 3
		}, 8, [
			"popup-container",
			"intent",
			"label",
			"pending",
			"clearable",
			"disabled",
			"need-confirm",
			"error",
			"count",
			"limit"
		])], 16, Yv)], 8, ["to", "disabled"])) : X("", !0)], 64));
	}
}), Zv = Symbol("field-editor-control-pending");
// packages/ui/es/_components/field-presentation/with-field-presentation.mjs
function Qv(e, t = /* @__PURE__ */ new WeakMap()) {
	if (e instanceof Date) return new Date(e.getTime());
	if (!e || typeof e != "object" || !Array.isArray(e) && Object.getPrototypeOf(e) !== Object.prototype && Object.getPrototypeOf(e) !== null) return e;
	if (t.has(e)) return t.get(e);
	let n = Array.isArray(e) ? Array(e.length) : Object.create(Object.getPrototypeOf(e));
	t.set(e, n);
	for (let r of Object.keys(e)) {
		let i = Qv(e[r], t);
		r === "__proto__" ? Object.defineProperty(n, r, {
			value: i,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : n[r] = i;
	}
	return n;
}
function $v(e, t, n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap()) {
	if (Object.is(e, t)) return !0;
	if (e instanceof Date && t instanceof Date) return Object.is(e.getTime(), t.getTime());
	if (!e || !t || typeof e != "object" || typeof t != "object" || Object.getPrototypeOf(e) !== Object.getPrototypeOf(t) || Array.isArray(e) && e.length !== t.length || !Array.isArray(e) && Object.getPrototypeOf(e) !== Object.prototype && Object.getPrototypeOf(e) !== null) return !1;
	if (n.has(e) || r.has(t)) return n.get(e) === t && r.get(t) === e;
	n.set(e, t), r.set(t, e);
	let i = Object.keys(e), a = i.length === Object.keys(t).length && i.every((i) => Object.prototype.hasOwnProperty.call(t, i) && $v(e[i], t[i], n, r));
	return n.delete(e), r.delete(t), a;
}
function ey(e) {
	return e == null || e === "" ? "" : typeof e == "boolean" ? e ? "✓" : "—" : e instanceof Date ? e.toLocaleDateString() : Array.isArray(e) ? e.map(ey).filter(Boolean).join(", ") : String(typeof e == "object" ? e.label ?? e.name ?? e.value ?? "" : e);
}
function ty(e, t = {}) {
	let n = e, r = {
		...n,
		name: n.name + "Control"
	}, i = Array.isArray(n.emits) ? n.emits : Object.keys(n.emits ?? {}), a = new Set(i.flatMap((e) => [
		e,
		e.replace(/-(\w)/g, (e, t) => t.toUpperCase()),
		e.replace(/\B([A-Z])/g, "-$1").toLowerCase()
	].flatMap((e) => {
		let t = "on" + e[0].toUpperCase() + e.slice(1);
		return [t, t + "Once"];
	}))), o = /* @__PURE__ */ H({
		name: n.name,
		inheritAttrs: !1,
		render() {
			return this.renderField();
		},
		props: n.props,
		emits: [.../* @__PURE__ */ new Set([
			...i,
			"update:open",
			"open-change"
		])],
		setup(e, { attrs: o, slots: s, emit: c, expose: l }) {
			let u = Ls(), d = zg(() => e.editMode, () => e.readPretty, t.defaultPresentation), f = Sg(e, void 0, !!d.item);
			xg({
				get emptyValues() {
					return f.emptyValues.value;
				},
				get emptyText() {
					return f.emptyText.value;
				}
			}), vr(Fg, !0), vr(Rg, Q(() => d.editMode.value === "direct"));
			let p = t.inheritInputGroup ? B(Cg, void 0) : void 0, m = Dv({
				disabled: Q(() => {
					let t = e.disabled ?? p?.disabled.value;
					return Array.isArray(t) ? t.every(Boolean) : t;
				}),
				readonly: Q(() => e.readonly ?? p?.readonly.value),
				size: Q(() => e.size ?? p?.size.value)
			}), h = /* @__PURE__ */ I(!1);
			vr(Zv, h);
			let g = /* @__PURE__ */ ln(), _ = /* @__PURE__ */ I(), v = /* @__PURE__ */ ln(e.defaultValue ?? e.modelValue), y = Q(() => {
				let t = u.vnode.props ?? {};
				return Object.prototype.hasOwnProperty.call(t, "modelValue") || Object.prototype.hasOwnProperty.call(t, "model-value") ? e.modelValue : v.value;
			}), b = /* @__PURE__ */ I(e.defaultOpen ?? !1), x = Q(() => m.mergedDisabled.value || m.mergedReadonly.value || d.readPretty.value), S = ["options", "data"].find((e) => {
				let t = n.props?.[e], r = Array.isArray(t?.type) ? t.type : [t?.type];
				return r.includes(Array) && r.includes(Function);
			}), C = S ? fg(() => e[S], () => m.mergedDisabled.value || d.readPretty.value, (e) => c("load-error", e), () => n.name.endsWith("AutoComplete") || n.name.endsWith("InputTag") || n.name.endsWith("Mention") ? e.searchDelay ?? 0 : 0, n.props, !0, () => n.name.endsWith("InputTag") ? Math.max(1, e.minSearchLength ?? 0) : e.minSearchLength ?? 0) : void 0;
			C && dg(n.props, C);
			let w = Q(() => !!(t.pauseSelectionWhileLoading && (e.loading || C?.loading.value))), T = Q(() => !x.value && !!(e.open ?? b.value)), E = t.setup?.({
				props: e,
				value: y,
				options: Q(() => C?.options.value ?? []),
				editorActive: Q(() => !d.readPretty.value && (d.editMode.value === "direct" || T.value)),
				draftActive: Q(() => !d.readPretty.value && d.editMode.value !== "direct" && T.value)
			});
			V(T, (t) => {
				if (t && C?.remote.value) {
					let t = e.inputValue ?? e.defaultInputValue ?? "";
					C.query.value !== t && C.search(t);
				}
			});
			let D = (t) => {
				t && x.value || (t || T.value || (e.open ?? b.value)) && (b.value = t, c("update:open", t), c("open-change", t));
			}, ee = /* @__PURE__ */ new Map(), te = !0, ne = 0;
			if (t.commitEvents) {
				let e = () => {
					te = !1, ne++, ee.clear();
				};
				V(T, () => ee.clear(), { flush: "sync" }), V(x, (e) => {
					e && (ne++, ee.clear());
				}, { flush: "sync" }), Qi(e), Vi(e), Bi(() => {
					te = !0;
				});
			}
			let O = (n, r) => {
				let i = [...ee];
				if (ee.clear(), v.value = n, c("update:modelValue", n), c("change", ...t.changeArgs?.(n, e, r) ?? [n]), d.item?.validate || m.eventHandlers.value?.onChange?.(), i.length) {
					let e = ne;
					R(() => {
						if (te && e === ne && !x.value && $v(y.value, n)) for (let [e, r] of i) t.commitEvents?.[e]?.(r, n) && c(e, ...r);
					});
				}
			}, re = (n) => f.isEmpty(n) && !$v(n, y.value) || t.valid?.(n, e) !== !1, k = Eg({
				value: () => y.value,
				open: T,
				deferred: () => d.editMode.value !== "direct",
				blocked: () => x.value || w.value,
				clone: Qv,
				same: $v,
				valid: re,
				publish: O,
				close: () => D(!1),
				cancelOnExternalChange: !0,
				beforeCommit: async (t, n) => {
					if (d.item?.validate && !await d.item.validate(t) || n.aborted) return !1;
					if (!$v(t, y.value)) return Ag(e.beforeCommit, t, {
						previousValue: y.value,
						signal: n
					});
				}
			}), A = Q(() => !t.selectionConfirmation || (e.needConfirm ?? !!e.multiple)), j = Q(() => A.value || t.selectionConfirmation === "select" && !$v(k.draft.value, y.value)), M = () => {
				let e = Qv(k.draft.value);
				Promise.resolve(k.commit()).then((t) => {
					!t && T.value && !k.pending.value && $v(k.draft.value, e) && k.update(y.value);
				});
			}, ie = (e) => {
				T.value && !x.value && (k.update(e), t.selectionConfirmation === "update" && !A.value && M());
			}, ae = () => {
				if (!T.value || x.value || w.value || k.pending.value) return;
				let n = t.clearFallback ? t.clearFallback(e) : "uncheckedValue" in e ? e.uncheckedValue : typeof e.defaultValue == "boolean" ? !1 : Array.isArray(y.value) ? [] : e.defaultValue;
				k.update(mg(e, n)), A.value || k.commit();
			}, oe = async () => {
				x.value || w.value || k.pending.value || (D(!0), await R(), ae());
			}, se = () => {
				k.pending.value || (k.cancel(), d.item?.resetValidation?.());
			}, ce = async (e) => h.value || (g.value?.blur?.(), await R(), h.value) ? !1 : k.commit(e);
			V([
				d.editMode,
				d.readPretty,
				x
			], ([e], t) => {
				d.item?.resolved?.(e, d.readPretty.value), (x.value || t && t.length > 0 && e !== t[0]) && (D(!1), k.reset(), e !== "direct" && d.item?.resetValidation?.());
			}, {
				immediate: !0,
				flush: "sync"
			}), d.register({
				active: () => d.editMode.value !== "direct" && T.value,
				cancel: () => {
					D(!1), k.reset();
				},
				focus: () => _.value?.focus()
			});
			let le = {}, ue = {}, N = 0, de = !1, fe, pe = !0, me = () => {
				pe = !1, fe = void 0, de = !1, N++;
			};
			Vi(me), Qi(me), Bi(() => {
				pe = !0;
			}), V(T, (e) => {
				de = !1, e || (N++, fe = void 0);
			}, { flush: "sync" }), V([d.editMode, d.readPretty], () => {
				N++, fe = void 0, de = !1;
			}, { flush: "sync" });
			let P = () => {
				de = !0;
				let e = fe;
				fe = void 0, e?.();
			}, he = () => {
				let e = g.value;
				return e?.$.exposed ? hn(e.$.exposed) : e;
			}, ge = (e) => {
				Object.prototype.hasOwnProperty.call(ue, e) || Object.defineProperty(ue, e, {
					configurable: !0,
					enumerable: !0,
					get: () => le[e],
					set: (t) => {
						le[e] = t;
					}
				});
			}, _e = (e) => {
				Object.prototype.hasOwnProperty.call(le, e) || (ge(e), le[e] = (...n) => {
					let r = () => t.inactiveMethod?.(e, y.value, n);
					if (!pe) return r();
					let i = () => {
						if (d.editMode.value !== "direct" && T.value && t.editor) {
							if (e === "focus") return _.value?.focus();
							if (e === "blur") return _.value?.blur();
						}
						let i = he()?.[e];
						return typeof i == "function" ? i.apply(g.value, n) : (e === "focus" && _.value?.focus(), e === "blur" ? _.value?.blur() : r());
					};
					if (d.editMode.value === "direct" && !d.readPretty.value || e === "blur") return i();
					if (x.value || k.pending.value) return r();
					if (e === "focus" || t.openMethods?.includes(e)) {
						T.value || D(!0);
						let e = ++N, t = () => {
							pe && e === N && T.value && !x.value && i();
						};
						de ? t() : fe = t;
					} else if (T.value) return i();
					else return r();
				});
			};
			for (let e of /* @__PURE__ */ new Set([...Object.keys(n.methods ?? {}), ...t.methods ?? []])) _e(e);
			C && (le.refresh = C.refresh, ge("refresh"));
			let ve = () => {
				let e = g.value;
				if (!e) return;
				let t = e.$.exposed ? Object.keys(e.$.exposed) : [...Object.keys(e.$.setupState), ...Object.keys(n.methods ?? {})];
				for (let e of t) e.startsWith("$") || e.startsWith("__") || (typeof he()?.[e] == "function" ? _e(e) : Object.prototype.hasOwnProperty.call(le, e) || (ge(e), Object.defineProperty(le, e, {
					configurable: !0,
					enumerable: !0,
					get: () => he()?.[e],
					set: (t) => {
						let n = he();
						n && (n[e] = t);
					}
				})));
			};
			l(le), Yi(ve), V(g, ve, { flush: "post" });
			let ye = (e, ...t) => {
				e === "update:modelValue" && (v.value = t[0]), e === "update:open" && (b.value = t[0]), c(e, ...t);
			}, be = Object.fromEntries(i.map((e) => ["on" + e[0].toUpperCase() + e.slice(1), (...t) => ye(e, ...t)])), xe = {
				...Object.fromEntries(i.map((e) => ["on" + e[0].toUpperCase() + e.slice(1), (...n) => {
					e === "update:modelValue" ? ie(n[0]) : e === "select" && t.selectionConfirmation === "select" && !A.value ? (c(e, ...n), k.commit()) : t.commitEvents?.[e] ? T.value && !x.value && !k.pending.value && ee.set(e, n) : e !== "change" && e !== "update:open" && e !== "open-change" && c(e, ...n);
				}])),
				"onUpdate:modelValue": ie,
				onChange: () => {}
			};
			return ue.renderField = () => {
				if (d.editMode.value === "direct" && !d.readPretty.value) {
					let n = { ...u.vnode.props ?? {} };
					for (let e of [
						"ref",
						"ref_for",
						"ref_key",
						"key",
						...a
					]) delete n[e];
					let i = Object.prototype.hasOwnProperty.call(n, "modelValue") || Object.prototype.hasOwnProperty.call(n, "model-value");
					return ic(r, {
						...o,
						...n,
						...i ? {} : { defaultValue: v.value },
						emptyValues: f.emptyValues.value,
						...t.inlineProps?.(e),
						...be,
						...e.loading ? { "aria-busy": !0 } : {},
						ref: g
					}, s);
				}
				let i = C && S ? {
					...e,
					[S]: C.options.value
				} : e, l = t.text ? t.text(y.value, i, E) : ey(y.value);
				return ic(Xv, {
					...o,
					...e.textAlign ? { style: [o.style, { "--c-form-content-align": e.textAlign }] } : {},
					ref: _,
					intent: t.intent,
					editMode: d.editMode.value,
					openTriggerTarget: e.openTriggerTarget,
					readPretty: d.readPretty.value,
					empty: f.isEmpty(y.value),
					emptyText: f.emptyText.value,
					label: e.ariaLabel ?? (typeof o["aria-label"] == "string" ? o["aria-label"] : void 0) ?? d.label.value,
					text: l,
					placeholder: typeof e.placeholder == "string" ? e.placeholder : void 0,
					popupContainer: e.popupContainer,
					open: T.value,
					disabled: m.mergedDisabled.value,
					readonly: m.mergedReadonly.value,
					needConfirm: j.value,
					clearable: e.clearable && !w.value,
					onClear: ae,
					loading: !!(e.loading || t.pauseSelectionWhileLoading && C?.loading.value),
					pending: k.pending.value,
					confirmDisabled: h.value || w.value || !re(k.draft.value),
					error: k.error.value || d.item?.message?.value,
					onOpen: D,
					onEditorReady: P,
					onCancel: se,
					commit: ce,
					onConfirm: ce,
					referenceFocus: t.reference ? () => g.value?.focus?.() : void 0
				}, {
					reference: t.reference ? () => t.reference({
						props: e,
						attrs: o,
						value: y.value,
						update: O,
						emit: (e, ...t) => {
							c(e, ...t), e === "focus" ? m.eventHandlers.value?.onFocus?.() : e === "blur" && m.eventHandlers.value?.onBlur?.();
						},
						slots: s,
						disabled: m.mergedDisabled.value || k.pending.value,
						readonly: m.mergedReadonly.value,
						open: T.value,
						setOpen: D,
						referenceRef: g,
						clear: oe
					}) : void 0,
					read: s.read ? () => s.read?.({
						value: y.value,
						text: l
					}) : void 0,
					default: () => T.value ? ic(r, {
						...e,
						...o,
						...xe,
						ref: g,
						modelValue: k.value.value,
						editMode: "direct",
						readPretty: !1,
						beforeCommit: void 0,
						..."disableConfirm" in n.props ? { disableConfirm: !0 } : {},
						open: void 0,
						defaultOpen: !1,
						disabled: m.mergedDisabled.value || k.pending.value,
						readonly: m.mergedReadonly.value
					}, s) : null
				});
			}, ue;
		}
	});
	return Object.defineProperty(o, "__fieldControl", { value: r }), o;
}
// packages/ui/es/_components/field-presentation/option-labels.mjs
function ny(e, t) {
	let n = {
		value: "value",
		label: "label",
		children: "children",
		...t.fieldNames
	}, r = (e) => {
		if (e == null) return ey(e);
		if (typeof t.fallbackOption == "function") {
			let r = t.fallbackOption(e);
			return r === !1 ? "" : ey(r && typeof r == "object" ? r[n.label] ?? r.label ?? e : r);
		}
		return t.fallbackOption === !1 ? "" : ey(e);
	};
	if (t.pathMode) {
		let i = (e) => {
			let i = t.options ?? t.data, a = Array.isArray(i) ? i : [], o = !1, s = (Array.isArray(e) ? e : [e]).map((e) => {
				let t = a.find((t) => typeof t == "object" && !!t && Object.is(t[n.value], e));
				t || (o = !0), a = t?.[n.children] ?? [];
				let r = t?.[n.label];
				return t && typeof r != "function" ? String(r ?? e ?? "") : ey(e);
			}).join(" / ");
			return o && (typeof t.fallbackOption == "function" || t.fallbackOption === !1) ? r(e) : s;
		};
		return e == null ? "" : t.multiple && Array.isArray(e) ? e.map(i).join(t.separator ?? ", ") : i(e);
	}
	let i = /* @__PURE__ */ new Map(), a = (e, r = []) => {
		for (let o of Array.isArray(e) ? e : []) {
			if (o == null) continue;
			if (typeof o != "object") {
				i.set(o, String(o));
				continue;
			}
			let e = o[n.label], s = String(typeof e == "function" ? o[n.value] : e ?? o[n.value] ?? ""), c = [...r, s];
			i.set(o[n.value], t.showPathLabel ? c.join(" / ") : s), a(o[n.children], c);
		}
	};
	a(t.options ?? t.data ?? []);
	let o = (e) => Array.isArray(e) ? e.map(o).join(" / ") : i.get(e) ?? r(e);
	return Array.isArray(e) ? e.map(o).join(t.separator ?? ", ") : o(e);
}
// packages/ui/es/checkbox/choice-label.mjs
var ry = (e) => e.content;
// packages/ui/es/checkbox/choice-options.mjs
function iy(e) {
	return typeof e == "string" || typeof e == "boolean" || typeof e == "number" && Number.isFinite(e);
}
function ay(e, t = {}) {
	let n = /* @__PURE__ */ new Set(), r = [];
	for (let i of e ?? []) {
		let e = typeof i == "object" && i ? i : void 0, a = e ? e[t.value ?? "value"] : i;
		if (!iy(a) || n.has(a)) continue;
		if (n.add(a), !e) {
			r.push({
				value: a,
				label: String(a)
			});
			continue;
		}
		let o = e[t.label ?? "label"];
		r.push({
			...e,
			value: a,
			label: o ?? String(a),
			disabled: e[t.disabled ?? "disabled"],
			readonly: e[t.readonly ?? "readonly"],
			indeterminate: e[t.indeterminate ?? "indeterminate"]
		});
	}
	return r;
}
// packages/ui/es/checkbox/choice-state.mjs
function oy(e) {
	return Array.isArray(e) ? [...e] : e;
}
function sy(e, t) {
	return Array.isArray(e) && Array.isArray(t) ? e.length === t.length && e.every((e, n) => Object.is(e, t[n])) : Object.is(e, t);
}
function cy(e, t, n, r = () => !1) {
	let i = /* @__PURE__ */ ln(oy(t)), a = Q(() => e() === void 0 ? i.value : e());
	function o(t, o) {
		return r() || sy(t, a.value) ? !1 : (e() === void 0 && (i.value = oy(t)), n(oy(t), o), !0);
	}
	return {
		value: a,
		commit: o
	};
}
function ly(e) {
	return e === void 0 || e === "" || Number.isNaN(Number(e)) ? Infinity : Math.max(0, Math.floor(Number(e)));
}
function uy(e, t, n, r) {
	return n ? e.includes(t) || e.length >= ly(r) ? [...e] : [...e, t] : e.filter((e) => !Object.is(e, t));
}
function dy(e, t, n, r) {
	let i = new Set(t.filter((e) => e.disabled || e.readonly).map((e) => e.value)), a = [...new Set(t.filter((e) => !i.has(e.value)).map((e) => e.value))], o = n ? e.filter((e) => !a.includes(e)) : [...e];
	for (let t of a) !e.includes(t) && o.length < ly(r) && o.push(t);
	return o;
}
// packages/ui/es/checkbox/context.mjs
var fy = Symbol("CheckboxGroup"), py = /^([+-]?(?:\d+|\d*\.\d+)(?:e[+-]?\d+)?)(%|cm|mm|q|in|pt|pc|px|em|rem|ex|rex|cap|rcap|ch|rch|ic|ric|lh|rlh|[sld]?v(?:w|h|i|b|min|max)|cq(?:w|h|i|b|min|max))?$/i, my = /^(?:calc|min|max|clamp|var|env|round|mod|rem|hypot|abs)\([\s\S]+\)$/i;
function hy(e, t) {
	return gy(e, t, !1);
}
function gy(e, t, n) {
	if (typeof e == "number") return Number.isFinite(e) && (n ? e >= 0 : e > 0) ? `${e}px` : t;
	if (typeof e != "string") return t;
	let r = e.trim(), i = py.exec(r);
	if (i) {
		let e = Number(i[1]);
		if (!Number.isFinite(e) || (n ? e < 0 : e <= 0)) return t;
		if (!i[2]) return `${e}px`;
	} else if (!my.test(r)) return t;
	return typeof CSS < "u" && CSS.supports && !CSS.supports("width", r) ? t : r;
}
// packages/ui/es/checkbox/choice-appearance-props.mjs
var _y = {
	type: String,
	default: "horizontal",
	validator: (e) => ["horizontal", "vertical"].includes(e)
}, vy = {
	type: [String, Number],
	validator: (e) => hy(e, "") !== ""
}, yy = {
	clearable: Boolean,
	emptyValue: pg(),
	editMode: Og,
	readPretty: jg,
	emptyValues: gg,
	emptyText: _g,
	beforeCommit: Mg,
	open: {
		type: Boolean,
		default: void 0
	},
	defaultOpen: Boolean,
	popupContainer: tm
}, by = {
	modelValue: {
		type: [Boolean, Array],
		default: void 0
	},
	defaultValue: {
		type: [Boolean, Array],
		default: !1
	},
	value: {
		type: [
			String,
			Number,
			Boolean
		],
		default: !0
	}
}, xy = {
	modelValue: {
		type: [
			String,
			Number,
			Boolean
		],
		default: void 0
	},
	defaultValue: {
		type: [
			String,
			Number,
			Boolean
		],
		default: null
	},
	value: {
		type: [
			String,
			Number,
			Boolean
		],
		default: !0
	}
}, Sy = {
	options: {
		type: [Array, Function],
		default: void 0
	},
	fieldNames: {
		type: Object,
		default: void 0
	}
}, Cy = {
	modelValue: {
		type: Array,
		default: void 0
	},
	defaultValue: {
		type: Array,
		default: () => []
	},
	max: {
		type: Number,
		validator: (e) => Number.isFinite(e) && Number.isInteger(e) && e >= 0
	}
}, wy = {
	modelValue: xy.modelValue,
	defaultValue: xy.defaultValue
}, Ty = {
	...yy,
	emptyValue: pg(),
	...by,
	disabled: {
		type: Boolean,
		default: void 0
	},
	readonly: {
		type: Boolean,
		default: void 0
	},
	error: {
		type: Boolean,
		default: void 0
	},
	indeterminate: {
		type: Boolean,
		default: !1
	},
	uninjectGroupContext: {
		type: Boolean,
		default: !1
	},
	checkedColor: String,
	uncheckedColor: String,
	iconSize: vy,
	ripple: {
		type: Boolean,
		default: !0
	},
	name: String,
	ariaLabel: String
}, Ey = {
	...yy,
	emptyValue: pg(),
	...Cy,
	...Sy,
	orientation: _y,
	disabled: {
		type: Boolean,
		default: void 0
	},
	readonly: {
		type: Boolean,
		default: void 0
	},
	error: {
		type: Boolean,
		default: void 0
	},
	name: String,
	ariaLabel: String
};
// packages/ui/es/checkbox/use-checkbox-group-methods.mjs
function Dy(e, t, n, r) {
	let i = /* @__PURE__ */ new Set(), a = !1, o = (e) => (a || i.add(e), () => {
		i.delete(e);
	});
	Me(() => {
		a = !0, i.clear();
	});
	function s(o) {
		if (a || n()) return [...e()];
		let s = [...i].sort((e, t) => {
			let n = e.element(), r = t.element();
			if (!n || !r || n === r) return 0;
			let i = n.compareDocumentPosition(r);
			return i & 1 ? 0 : i & 4 ? -1 : i & 2 ? 1 : 0;
		}), c = dy(e(), s.map((e) => ({
			value: e.value(),
			disabled: e.disabled(),
			readonly: e.readonly()
		})), o, r());
		return t(c), [...c];
	}
	return {
		register: o,
		methods: {
			checkAll: () => s(!1),
			inverseAll: () => s(!0)
		}
	};
}
function Oy(e, t) {
	let n = e?.(t), r = () => {
		n?.(), n = void 0;
	};
	Bi(() => {
		r(), n = e?.(t);
	}), Vi(r), Me(r);
}
// packages/ui/es/checkbox/use-choice-control.mjs
function ky(e, t, n, r) {
	let i = cy(() => e.modelValue, e.defaultValue, t, n), a = Q(() => r ? r.value() : i.value.value), o = Q(() => Array.isArray(a.value) ? a.value.includes(e.value) : !!a.value);
	function s(t = !o.value, s) {
		if (n()) return;
		let c = a.value, l = Array.isArray(c) ? uy(c, e.value, t) : t;
		r && Array.isArray(l) ? r.change(l, s) : i.commit(l, s);
	}
	return {
		checked: o,
		toggle: s
	};
}
function Ay(e, t, n, r) {
	let i = cy(() => e.modelValue, e.defaultValue, (e, n) => {
		e !== null && t(e, n);
	}, n), a = Q(() => r ? r.value() : i.value.value), o = Q(() => Object.is(a.value, e.value));
	function s(t) {
		n() || o.value || (r ? r.change(e.value, t) : i.commit(e.value, t));
	}
	return {
		checked: o,
		select: s
	};
}
// packages/ui/es/checkbox/use-choice-form.mjs
function jy(e) {
	return Ev({
		disabled: /* @__PURE__ */ xn(e, "disabled"),
		readonly: /* @__PURE__ */ xn(e, "readonly"),
		error: /* @__PURE__ */ xn(e, "error")
	});
}
// packages/ui/es/checkbox/use-choice-keyboard.mjs
function My(e, t) {
	let n = !1, r = () => {
		n = !1;
	};
	function i(i) {
		i.defaultPrevented || t() || i.altKey || i.ctrlKey || i.metaKey ? r() : ((i.key === " " || i.key === "Enter") && i.preventDefault(), i.key === " " && (n = !0), i.key === "Enter" && !i.repeat && e());
	}
	function a(i) {
		if (i.key !== " ") return;
		if (i.defaultPrevented) {
			r();
			return;
		}
		i.preventDefault();
		let a = n && !t() && !i.altKey && !i.ctrlKey && !i.metaKey;
		r(), a && e();
	}
	return Vi(r), Me(r), {
		keydown: i,
		keyup: a,
		reset: r
	};
}
// packages/ui/es/input/native-attrs.mjs
var Ny = /* @__PURE__ */ new Set(/* @__PURE__ */ "id.name.form.autocomplete.autofocus.minlength.maxlength.pattern.required.readonly.disabled.tabindex.inputmode.spellcheck.autocorrect.autocapitalize.min.max.step.role.onFocusin.onFocusout.onBeforeinput.onInvalid.onKeypress.onKeyup.onCopy.onCut.onPaste.onCompositionstart.onCompositionupdate.onCompositionend.onSelect".split("."));
function Py(e, t = []) {
	e.id;
	let n = {}, r = {};
	for (let [i, a] of Object.entries(e)) {
		let e = i.startsWith("on") ? i.replace(/(?:Once|Capture|Passive)+$/, "") : i, o = Ny.has(e) || t.includes(e) || i.startsWith("aria-") || i.startsWith("data-") ? n : r;
		o[i] = a;
	}
	return {
		native: n,
		root: r
	};
}
function Fy(e) {
	let { selectionStart: t, selectionEnd: n, selectionDirection: r, value: i } = e;
	return (a) => {
		if (e.value !== a && (e.value = a), t == null || n == null || i === a) return;
		let o = i.slice(n), s = i.slice(0, t);
		e.value !== a && (e.value = a);
		let c = o && a.endsWith(o) ? a.length - o.length : Math.min(n, a.length), l = a.startsWith(s) ? Math.min(t, c) : Math.max(0, c - (n - t));
		e.setSelectionRange(l, c, r ?? void 0);
	};
}
// packages/ui/es/checkbox/use-choice-native-attrs.mjs
function Iy(e = () => void 0) {
	let t = ka(), n = Zp(), r = Q(() => Py(t, ["onKeydown"]));
	return {
		nativeAttrs: Q(() => {
			let t = {
				...r.value.native,
				...e()
			};
			return {
				...t,
				id: String(t.id ?? n)
			};
		}),
		rootAttrs: Q(() => r.value.root)
	};
}
// packages/ui/es/checkbox/checkbox.vue.mjs
var Ly = ["aria-disabled"], Ry = [
	"name",
	"value",
	"checked",
	"indeterminate",
	"disabled",
	"aria-label",
	"aria-readonly",
	"aria-describedby",
	"aria-invalid"
], zy = ["aria-hidden"], By = ty(/* @__PURE__ */ H({
	name: $("checkbox").name,
	inheritAttrs: !1,
	__name: "checkbox",
	props: Ty,
	emits: [
		"update:open",
		"open-change",
		"update:modelValue",
		"change",
		"click",
		"focus",
		"blur"
	],
	setup(e, { expose: t, emit: n }) {
		let { n: r, classes: i } = $("checkbox"), a = e, o = n, s = Oa(), c = a.uninjectGroupContext ? void 0 : B(fy, void 0), { errorId: l, describe: u } = bv(), d = /* @__PURE__ */ I(), { nativeAttrs: f, rootAttrs: p } = Iy(), m = jy({
			get disabled() {
				return a.disabled ?? c?.disabled;
			},
			get readonly() {
				return a.readonly ?? c?.readonly;
			},
			get error() {
				return a.error ?? c?.error;
			}
		}), h = Q(() => !!(c?.disabled || m.mergedDisabled.value || !v.value && c?.isMaxed)), g = Q(() => !!(c?.readonly || m.mergedReadonly.value)), _ = Q(() => !!(c?.error || m.mergedError.value)), { checked: v, toggle: y } = ky(a, (e, t) => {
			o("update:modelValue", e), o("change", e, t), m.eventHandlers.value?.onChange?.(t);
		}, () => h.value || g.value, c ? {
			value: () => c.computedValue,
			change: c.handleChange
		} : void 0);
		Oy(c?.registerChoice, {
			value: () => a.value,
			disabled: () => !!(c?.disabled || m.mergedDisabled.value),
			readonly: () => g.value,
			element: () => d.value
		});
		let b = Q(() => s.checkbox ?? c?.slots.checkbox), x = Q(() => ({
			"--c-internal-checkbox-instance-checked-color": a.checkedColor,
			"--c-internal-checkbox-instance-unchecked-color": a.uncheckedColor,
			"--c-internal-checkbox-instance-size": hy(a.iconSize, "") || void 0
		})), S = My(() => d.value?.click(), () => h.value || g.value);
		function C(e) {
			h.value || g.value ? (e.preventDefault(), h.value || o("click", e)) : e.target === d.value ? (e.stopPropagation(), o("click", e)) : e.target === e.currentTarget && (e.preventDefault(), d.value?.focus(), d.value?.click());
		}
		function w(e) {
			!h.value && !g.value && y(e.target.checked, e), R(() => {
				d.value && (d.value.checked = v.value, d.value.indeterminate = a.indeterminate);
			});
		}
		function T(e) {
			o("focus", e), m.eventHandlers.value?.onFocus?.(e);
		}
		function E(e) {
			S.reset(), o("blur", e), m.eventHandlers.value?.onBlur?.(e);
		}
		return V(v, (e) => {
			d.value && (d.value.checked = e);
		}), t({
			toggle: y,
			focus(e) {
				h.value || d.value?.focus(e);
			},
			blur() {
				d.value?.blur();
			}
		}), (e, t) => (G(), K("label", Z(L(p), {
			class: L(i)(L(r)(), [L(v), L(r)("--checked")], [e.indeterminate, L(r)("--indeterminate")], [h.value, L(r)("--disabled")], [g.value, L(r)("--readonly")], [_.value, L(r)("--error")]),
			style: x.value,
			"aria-disabled": h.value || void 0,
			onClick: C
		}), [gr((G(), K("span", { class: P(L(r)("control")) }, [J("input", Z({
			ref_key: "input",
			ref: d
		}, L(f), {
			class: L(r)("input"),
			type: "checkbox",
			name: e.name ?? L(c)?.name,
			value: e.value,
			checked: L(v),
			indeterminate: e.indeterminate,
			disabled: h.value,
			"aria-label": e.ariaLabel ?? L(f)["aria-label"],
			"aria-checked": void 0,
			"aria-readonly": g.value || void 0,
			"aria-describedby": L(c)?.formErrorId === L(l) ? L(f)["aria-describedby"] : L(u)(L(f)["aria-describedby"]),
			"aria-invalid": _.value ? !0 : L(f)["aria-invalid"],
			onChange: w,
			onKeydown: t[0] ||= (...e) => L(S).keydown && L(S).keydown(...e),
			onKeyup: t[1] ||= (...e) => L(S).keyup && L(S).keyup(...e),
			onFocus: T,
			onBlur: E
		}), null, 16, Ry), J("span", {
			class: P(L(r)("visual")),
			"aria-hidden": !b.value || void 0
		}, [b.value ? (G(), q(L(ry), {
			key: 0,
			content: b.value({
				checked: L(v),
				disabled: h.value,
				indeterminate: e.indeterminate
			})
		}, null, 8, ["content"])) : (G(), K(W, { key: 1 }, [e.indeterminate ? U(e.$slots, "indeterminate-icon", {}, () => [J("span", { class: P(L(r)("icon")) }, [J("span", { class: P(L(r)("mark")) }, null, 2)], 2)], void 0, 0) : L(v) ? U(e.$slots, "checked-icon", {}, () => [J("span", { class: P(L(r)("icon")) }, [(G(), K("svg", {
			class: P(L(r)("check")),
			viewBox: "0 0 12 12",
			focusable: "false"
		}, [...t[2] ||= [J("path", {
			d: "M2 6l2.5 2.5L10 3",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "2"
		}, null, -1)]], 2))], 2)], void 0, 1) : U(e.$slots, "unchecked-icon", {}, () => [J("span", { class: P(L(r)("icon")) }, null, 2)], void 0, 2)], 64))], 10, zy)], 2)), [[L(tv), { disabled: h.value || g.value || !e.ripple }]]), e.$slots.default ? (G(), K("span", {
			key: 0,
			class: P(L(r)("label"))
		}, [U(e.$slots, "default", { checked: L(v) })], 2)) : X("", !0)], 16, Ly));
	}
}), { methods: [
	"toggle",
	"focus",
	"blur"
] }), Vy = [
	"aria-describedby",
	"aria-busy",
	"aria-label",
	"aria-disabled"
], Hy = ty(/* @__PURE__ */ H({
	name: $("checkbox-group").name,
	inheritAttrs: !1,
	__name: "checkbox-group",
	props: Ey,
	emits: [
		"update:open",
		"open-change",
		"load-error",
		"update:modelValue",
		"change"
	],
	setup(e, { expose: t, emit: n }) {
		let { n: r, classes: i } = $("checkbox-group"), a = e, { errorId: o, describe: s } = bv(), c = Q(() => a.orientation === "vertical" ? "vertical" : "horizontal"), l = Oa(), u = n, { mergedDisabled: d, mergedReadonly: f, mergedError: p, eventHandlers: m } = jy(a), h = fg(() => a.options, () => d.value || f.value || !!a.readPretty, (e) => u("load-error", e), () => 0, Ey), { value: g, commit: _ } = cy(() => a.modelValue === null ? [] : a.modelValue, a.defaultValue, (e, t) => {
			u("update:modelValue", e), u("change", e, t), m.value?.onChange?.(t);
		}, () => d.value || f.value), v = Q(() => ay(h.options.value, a.fieldNames)), y = Q(() => g.value.length >= ly(a.max)), { register: b, methods: x } = Dy(() => g.value, _, () => d.value || f.value, () => a.max);
		return vr(fy, /* @__PURE__ */ Jt({
			registerChoice: b,
			computedValue: g,
			disabled: d,
			readonly: f,
			error: p,
			formErrorId: o,
			isMaxed: y,
			name: Q(() => a.name),
			slots: l,
			handleChange: _
		})), t(x), (e, t) => (G(), K("div", Z(e.$attrs, {
			"aria-describedby": L(s)(e.$attrs["aria-describedby"]),
			class: L(i)(L(r)(), L(r)(`--${c.value}`)),
			"aria-busy": L(h).loading.value || void 0,
			role: "group",
			"aria-label": e.ariaLabel,
			"aria-disabled": L(d) || void 0
		}), [a.options === void 0 ? U(e.$slots, "default", {}, void 0, void 0, 1) : (G(!0), K(W, { key: 0 }, fa(v.value, (t) => (G(), q(L(By), {
			key: `${typeof t.value}:${String(t.value)}`,
			"edit-mode": "direct",
			value: t.value,
			disabled: t.disabled,
			readonly: t.readonly,
			indeterminate: t.indeterminate
		}, {
			default: z(({ checked: n }) => [U(e.$slots, "label", {
				data: t,
				checked: n
			}, () => [Y(L(ry), { content: typeof t.label == "function" ? t.label(t, n) : t.label }, null, 8, ["content"])])]),
			_: 2
		}, 1032, [
			"value",
			"disabled",
			"readonly",
			"indeterminate"
		]))), 128))], 16, Vy));
	}
}), {
	text: ny,
	methods: ["checkAll", "inverseAll"],
	inactiveMethod: (e, t) => Array.isArray(t) ? [...t] : []
}), Uy = Pf(By, By.props), Wy = Vf(Uy, Object.assign(Uy, { Group: Hy }), { components: [Uy, Hy] }), Gy = Symbol("RadioGroup");
// packages/ui/es/radio/form-adapter.mjs
function Ky(e) {
	let t = Ev({
		size: /* @__PURE__ */ xn(e, "size"),
		disabled: /* @__PURE__ */ xn(e, "disabled"),
		readonly: /* @__PURE__ */ xn(e, "readonly"),
		error: /* @__PURE__ */ xn(e, "error")
	}), { mergedSize: n } = lv(t.mergedSize);
	return {
		...t,
		mergedSize: n,
		eventHandlers: Q(() => t.eventHandlers.value ?? {})
	};
}
// packages/ui/es/radio/variant.mjs
var qy = ["radio", "button"], Jy = {
	type: String,
	default: "radio",
	validator: (e) => qy.includes(e)
}, Yy = {
	...yy,
	emptyValue: pg(),
	...xy,
	variant: Jy,
	disabled: {
		type: Boolean,
		default: void 0
	},
	readonly: {
		type: Boolean,
		default: void 0
	},
	error: {
		type: Boolean,
		default: void 0
	},
	checkedColor: String,
	uncheckedColor: String,
	iconSize: vy,
	ripple: {
		type: Boolean,
		default: !0
	},
	name: String,
	inputAttrs: Object,
	ariaLabel: String,
	uninjectGroupContext: {
		type: Boolean,
		default: !1
	}
}, Xy = {
	...yy,
	emptyValue: pg(),
	...wy,
	...Sy,
	ariaLabel: {
		type: String,
		default: ""
	},
	name: String,
	variant: Jy,
	size: {
		type: String,
		validator: (e) => rv.includes(e)
	},
	orientation: _y,
	disabled: {
		type: Boolean,
		default: void 0
	},
	readonly: {
		type: Boolean,
		default: void 0
	},
	error: {
		type: Boolean,
		default: void 0
	}
};
// packages/ui/es/radio/use-radio-navigation.mjs
function Zy(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ ln([]), r = !1, i = /* @__PURE__ */ ln(!1);
	function a() {
		if (r) return;
		let e = [...t].sort((e, t) => {
			let n = e.element(), r = t.element();
			if (!n || !r || n === r) return 0;
			let i = n.compareDocumentPosition(r);
			return i & 1 ? 0 : i & 4 ? -1 : i & 2 ? 1 : 0;
		});
		(e.length !== n.value.length || e.some((e, t) => e !== n.value[t])) && (n.value = e);
	}
	let o = Q(() => n.value.filter((e) => !e.disabled())), s = Q(() => o.value.find((e) => e.checked()) ?? o.value[0]);
	return Yi(() => {
		i.value = !0, a();
	}), Zi(a), Me(() => {
		r = !0, t.clear(), n.value = [];
	}), {
		restore() {
			for (let e of t) {
				let t = e.element();
				t && (t.checked = e.checked());
			}
		},
		register: (e) => (r || t.add(e), a(), () => {
			t.delete(e), a();
		}),
		tabIndex: (t) => t.disabled() ? void 0 : !i.value && e() && !t.checked() ? -1 : t === s.value ? 0 : -1,
		keydown(e) {
			if (e.defaultPrevented || r || e.altKey || e.ctrlKey || e.metaKey || e.repeat || ![
				"ArrowLeft",
				"ArrowRight",
				"ArrowUp",
				"ArrowDown",
				"Home",
				"End"
			].includes(e.key)) return;
			a();
			let t = o.value, n = t.findIndex((t) => t.element() === e.target);
			if (n < 0) return;
			e.preventDefault(), e.stopPropagation();
			let i = n;
			if (e.key === "Home") i = 0;
			else if (e.key === "End") i = t.length - 1;
			else {
				let r = $u(e.target) === "rtl";
				i = (n + (e.key === "ArrowUp" || e.key === (r ? "ArrowRight" : "ArrowLeft") ? -1 : 1) + t.length) % t.length;
			}
			let s = t[i];
			s.element()?.focus(), s.readonly() || s.select(e);
		}
	};
}
function Qy(e, t) {
	let n = e?.register(t), r = () => {
		n?.(), n = void 0;
	};
	return Bi(() => {
		r(), n = e?.register(t);
	}), Vi(r), Me(r), Q(() => e ? e.tabIndex(t) : t.disabled() ? void 0 : 0);
}
// packages/ui/es/radio/radio.vue.mjs
var $y = [
	"name",
	"value",
	"checked",
	"disabled",
	"tabindex",
	"aria-label",
	"aria-readonly",
	"aria-describedby",
	"aria-invalid"
], eb = ty(/* @__PURE__ */ H({
	name: $("radio").name,
	inheritAttrs: !1,
	__name: "radio",
	props: Yy,
	emits: [
		"update:open",
		"open-change",
		"update:modelValue",
		"change",
		"click",
		"focus",
		"blur"
	],
	setup(e, { expose: t, emit: n }) {
		let { n: r, classes: i } = $("radio"), a = tv, o = e, s = n, c = o.uninjectGroupContext ? void 0 : B(Gy, void 0), { errorId: l, describe: u } = bv(), d = /* @__PURE__ */ I(), { nativeAttrs: f, rootAttrs: p } = Iy(() => o.inputAttrs), m = Ky({
			get disabled() {
				return o.disabled ?? c?.disabled;
			},
			get readonly() {
				return o.readonly ?? c?.readonly;
			},
			get error() {
				return o.error ?? c?.error;
			}
		}), h = Q(() => !!(c?.disabled || m.mergedDisabled.value)), g = Q(() => !!(c?.readonly || m.mergedReadonly.value)), _ = Q(() => !!(c?.error || m.mergedError.value)), v = Q(() => c?.variant ?? o.variant), { checked: y, select: b } = Ay(o, (e, t) => {
			s("update:modelValue", e), s("change", e, t), m.eventHandlers.value.onChange?.(t);
		}, () => h.value || g.value, c ? {
			value: () => c.value,
			change: c.handleChange
		} : void 0), x = Qy(c?.navigation, {
			element: () => d.value,
			checked: () => y.value,
			disabled: () => h.value,
			readonly: () => g.value,
			select: b
		}), S = My(() => d.value?.click(), () => h.value || g.value), C = Q(() => ({
			"--c-internal-radio-instance-checked": o.checkedColor,
			"--c-internal-radio-instance-unchecked": o.uncheckedColor,
			"--c-internal-radio-instance-size": hy(o.iconSize, "") || void 0
		}));
		function w() {
			c?.navigation.restore(), d.value && (d.value.checked = y.value);
		}
		V(y, w);
		let T = !1;
		function E(e) {
			h.value ? (e.preventDefault(), e.stopPropagation()) : e.target === d.value && (s("click", e), g.value ? e.preventDefault() : (T = !0, b(e), R(() => {
				T = !1, w();
			})));
		}
		function D(e) {
			T || b(e), R(w);
		}
		function ee(e) {
			s("focus", e), m.eventHandlers.value.onFocus?.(e);
		}
		function te(e) {
			S.reset(), s("blur", e), m.eventHandlers.value.onBlur?.(e);
		}
		return t({
			select: b,
			focus: (e) => {
				h.value || d.value?.focus(e);
			},
			blur: () => d.value?.blur()
		}), (e, t) => (G(), K("label", Z(L(p), {
			class: L(i)(L(r)(), [v.value === "button", L(r)("--button")], [L(y), L(r)("--checked")], [h.value, L(r)("--disabled")], [g.value, L(r)("--readonly")], [_.value, L(r)("--error")]),
			style: C.value,
			onClick: E
		}), [J("input", Z({
			ref_key: "input",
			ref: d
		}, L(f), {
			class: L(r)("input"),
			type: "radio",
			name: e.name ?? L(c)?.name ?? L(f).name,
			value: e.value,
			checked: L(y),
			disabled: h.value,
			tabindex: L(x),
			"aria-label": e.ariaLabel ?? L(f)["aria-label"],
			"aria-checked": void 0,
			"aria-readonly": g.value || void 0,
			"aria-describedby": L(c)?.formErrorId === L(l) ? L(f)["aria-describedby"] : L(u)(L(f)["aria-describedby"]),
			"aria-invalid": _.value ? !0 : L(f)["aria-invalid"],
			onChange: D,
			onKeydown: t[0] ||= (...e) => L(S).keydown && L(S).keydown(...e),
			onKeyup: t[1] ||= (...e) => L(S).keyup && L(S).keyup(...e),
			onFocus: ee,
			onBlur: te
		}), null, 16, $y), v.value === "button" ? (G(), K("span", {
			key: 0,
			class: P(L(r)("button-label"))
		}, [U(e.$slots, "default", {
			checked: L(y),
			disabled: h.value
		})], 2)) : U(e.$slots, "radio", {
			checked: L(y),
			disabled: h.value
		}, () => [L(c)?.slots.radio ? (G(), q(L(ry), {
			key: 0,
			content: L(c).slots.radio({
				checked: L(y),
				disabled: h.value
			})
		}, null, 8, ["content"])) : (G(), K(W, { key: 1 }, [gr((G(), K("span", {
			class: P(L(r)("control")),
			"aria-hidden": "true"
		}, [L(y) ? U(e.$slots, "checked-icon", {}, () => [J("span", { class: P(L(r)("icon")) }, null, 2)], void 0, 0) : U(e.$slots, "unchecked-icon", {}, () => [J("span", { class: P(L(r)("icon")) }, null, 2)], void 0, 1)], 2)), [[L(a), { disabled: h.value || g.value || !e.ripple }]]), e.$slots.default ? (G(), K("span", {
			key: 0,
			class: P(L(r)("label"))
		}, [U(e.$slots, "default", {
			checked: L(y),
			disabled: h.value
		})], 2)) : X("", !0)], 64))], void 0, 1)], 16));
	}
}), { methods: [
	"select",
	"focus",
	"blur"
] }), tb = [
	"aria-describedby",
	"aria-busy",
	"aria-label",
	"aria-disabled",
	"aria-readonly",
	"aria-invalid"
], nb = ty(/* @__PURE__ */ H({
	name: $("radio-group").name,
	inheritAttrs: !1,
	__name: "radio-group",
	props: Xy,
	emits: [
		"update:open",
		"open-change",
		"load-error",
		"update:modelValue",
		"change"
	],
	setup(e, { emit: t }) {
		let { n, classes: r } = $("radio-group"), i = e, { errorId: a, describe: o } = bv(), s = Q(() => i.orientation === "vertical" ? "vertical" : "horizontal"), c = Oa(), l = t, { mergedDisabled: u, mergedReadonly: d, mergedError: f, mergedSize: p, eventHandlers: m } = Ky(i), h = fg(() => i.options, () => u.value || d.value || !!i.readPretty, (e) => l("load-error", e), () => 0, Xy), { value: g, commit: _ } = cy(() => i.modelValue, i.defaultValue, (e, t) => {
			l("update:modelValue", e), l("change", e, t), m.value.onChange?.(t);
		}, () => u.value || d.value), v = Q(() => ay(h.options.value, i.fieldNames)), y = Zy(() => g.value !== null);
		return vr(Gy, /* @__PURE__ */ Jt({
			navigation: y,
			value: g,
			size: p,
			variant: Q(() => i.variant),
			name: Q(() => i.name),
			disabled: u,
			readonly: d,
			error: f,
			formErrorId: a,
			slots: c,
			handleChange: _
		})), (e, t) => (G(), K("div", Z(e.$attrs, {
			"aria-describedby": L(o)(e.$attrs["aria-describedby"]),
			"aria-busy": L(h).loading.value || void 0,
			role: "radiogroup",
			"aria-label": e.ariaLabel,
			"aria-disabled": L(u) || void 0,
			"aria-readonly": L(d) || void 0,
			"aria-invalid": L(f) ? !0 : e.$attrs["aria-invalid"],
			class: L(r)(L(n)(), L(n)(`--${s.value}`), L(n)(`--size-${L(p)}`), [e.variant === "button", L(n)("--button")]),
			onKeydown: t[0] ||= (...e) => L(y).keydown && L(y).keydown(...e)
		}), [i.options === void 0 ? U(e.$slots, "default", {}, void 0, void 0, 1) : (G(!0), K(W, { key: 0 }, fa(v.value, (t) => (G(), q(L(eb), {
			key: `${typeof t.value}:${String(t.value)}`,
			"edit-mode": "direct",
			value: t.value,
			disabled: t.disabled,
			readonly: t.readonly
		}, {
			default: z(({ checked: n }) => [U(e.$slots, "label", {
				data: t,
				checked: n
			}, () => [Y(L(ry), { content: typeof t.label == "function" ? t.label(t, n) : t.label }, null, 8, ["content"])])]),
			_: 2
		}, 1032, [
			"value",
			"disabled",
			"readonly"
		]))), 128))], 16, tb));
	}
}), { text: ny }), rb = Vf(eb, Object.assign(eb, { Group: nb }), { components: [eb, nb] }), ib = [
	"stroke-width",
	"stroke-linecap",
	"stroke-linejoin",
	"aria-hidden"
], ab = { key: 0 }, ob = /* @__PURE__ */ H({
	name: "CIconPlus",
	__name: "icon-plus",
	props: {
		size: {},
		color: {},
		title: {},
		strokeWidth: { default: 4 },
		strokeLinecap: { default: "butt" },
		strokeLinejoin: { default: "miter" },
		rotate: {},
		spin: { type: Boolean }
	},
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Vp("icon"), a = /^-?(?:\d+|\d*\.\d+)$/, o = Q(() => [
			i,
			`${i}-plus`,
			{ [`${i}-spin`]: n.spin }
		]), s = Q(() => ({
			color: n.color,
			fontSize: Hp(n.size) || a.test(n.size?.trim() ?? "") ? `${n.size}px` : n.size,
			...n.rotate ? { transform: `rotate(${n.rotate}deg)` } : {}
		}));
		return (e, t) => (G(), K("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 48 48",
			width: "1em",
			height: "1em",
			class: P(o.value),
			style: N(s.value),
			"stroke-width": n.strokeWidth,
			"stroke-linecap": n.strokeLinecap,
			"stroke-linejoin": n.strokeLinejoin,
			"aria-hidden": !n.title,
			role: "img",
			onClick: t[0] ||= (e) => r("click", e)
		}, [n.title ? (G(), K("title", ab, F(n.title), 1)) : X("v-if", !0), t[1] ||= J("path", { d: "M5 24h38M24 5v38" }, null, -1)], 14, ib));
	}
}), sb = Object.assign(ob, { install(e) {
	e.component(ob.name, ob);
} }), cb = [
	"stroke-width",
	"stroke-linecap",
	"stroke-linejoin",
	"aria-hidden"
], lb = { key: 0 }, ub = /* @__PURE__ */ H({
	name: "CIconMinus",
	__name: "icon-minus",
	props: {
		size: {},
		color: {},
		title: {},
		strokeWidth: { default: 4 },
		strokeLinecap: { default: "butt" },
		strokeLinejoin: { default: "miter" },
		rotate: {},
		spin: { type: Boolean }
	},
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Vp("icon"), a = /^-?(?:\d+|\d*\.\d+)$/, o = Q(() => [
			i,
			`${i}-minus`,
			{ [`${i}-spin`]: n.spin }
		]), s = Q(() => ({
			color: n.color,
			fontSize: Hp(n.size) || a.test(n.size?.trim() ?? "") ? `${n.size}px` : n.size,
			...n.rotate ? { transform: `rotate(${n.rotate}deg)` } : {}
		}));
		return (e, t) => (G(), K("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 48 48",
			width: "1em",
			height: "1em",
			class: P(o.value),
			style: N(s.value),
			"stroke-width": n.strokeWidth,
			"stroke-linecap": n.strokeLinecap,
			"stroke-linejoin": n.strokeLinejoin,
			"aria-hidden": !n.title,
			role: "img",
			onClick: t[0] ||= (e) => r("click", e)
		}, [n.title ? (G(), K("title", lb, F(n.title), 1)) : X("v-if", !0), t[1] ||= J("path", { d: "M5 24h38" }, null, -1)], 14, cb));
	}
}), db = Object.assign(ub, { install(e) {
	e.component(ub.name, ub);
} }), fb = [
	"stroke-width",
	"stroke-linecap",
	"stroke-linejoin",
	"aria-hidden"
], pb = { key: 0 }, mb = /* @__PURE__ */ H({
	name: "CIconDragDotVertical",
	__name: "icon-drag-dot-vertical",
	props: {
		size: {},
		color: {},
		title: {},
		strokeWidth: { default: 4 },
		strokeLinecap: { default: "butt" },
		strokeLinejoin: { default: "miter" },
		rotate: {},
		spin: { type: Boolean }
	},
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Vp("icon"), a = /^-?(?:\d+|\d*\.\d+)$/, o = Q(() => [
			i,
			`${i}-drag-dot-vertical`,
			{ [`${i}-spin`]: n.spin }
		]), s = Q(() => ({
			color: n.color,
			fontSize: Hp(n.size) || a.test(n.size?.trim() ?? "") ? `${n.size}px` : n.size,
			...n.rotate ? { transform: `rotate(${n.rotate}deg)` } : {}
		}));
		return (e, t) => (G(), K("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 48 48",
			width: "1em",
			height: "1em",
			class: P(o.value),
			style: N(s.value),
			"stroke-width": n.strokeWidth,
			"stroke-linecap": n.strokeLinecap,
			"stroke-linejoin": n.strokeLinejoin,
			"aria-hidden": !n.title,
			role: "img",
			onClick: t[0] ||= (e) => r("click", e)
		}, [
			n.title ? (G(), K("title", pb, F(n.title), 1)) : X("v-if", !0),
			t[1] ||= J("path", {
				fill: "currentColor",
				stroke: "none",
				d: "M17 8h2v2h-2zM17 23h2v2h-2zM17 38h2v2h-2zM29 8h2v2h-2zM29 23h2v2h-2zM29 38h2v2h-2z"
			}, null, -1),
			t[2] ||= J("path", { d: "M17 8h2v2h-2zM17 23h2v2h-2zM17 38h2v2h-2zM29 8h2v2h-2zM29 23h2v2h-2zM29 38h2v2h-2z" }, null, -1)
		], 14, fb));
	}
}), hb = Object.assign(mb, { install(e) {
	e.component(mb.name, mb);
} }), { name: gb } = $("operation-td"), _b = /* @__PURE__ */ H({
	name: gb,
	components: {
		Checkbox: Wy,
		Radio: rb,
		IconPlus: sb,
		IconMinus: db
	},
	props: {
		headers: String,
		operationColumn: {
			type: Object,
			required: !0
		},
		operations: {
			type: Array,
			required: !0
		},
		record: {
			type: Object,
			required: !0
		},
		hasExpand: {
			type: Boolean,
			default: !1
		},
		selectedRowKeys: { type: Array },
		renderExpandBtn: { type: Function },
		colSpan: {
			type: Number,
			default: 1
		},
		rowSpan: {
			type: Number,
			default: 1
		},
		summary: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["select"],
	setup(e, { emit: t, slots: n }) {
		let r = Uf("table"), i = B(hp, {}), { t: a } = Wg(), o = () => {
			let t = a("table.selectRow", String(e.record.key));
			return t === "table.selectRow" ? `Select row ${e.record.key}` : t;
		}, s = Q(() => Bp(e.operationColumn, e.operations, i.readingDirection, i.physicalDataColumns, i.tableLayout)), c = Q(() => [
			`${r}-td`,
			`${r}-operation`,
			{
				[`${r}-checkbox`]: e.operationColumn.name === "selection-checkbox",
				[`${r}-radio`]: e.operationColumn.name === "selection-radio",
				[`${r}-expand`]: e.operationColumn.name === "expand",
				[`${r}-drag-handle`]: e.operationColumn.name === "drag-handle"
			},
			...Lp(r, e.operationColumn)
		]), l = Q(() => cg(e.record)), u = Q(() => lg(i.currentSelectedRowKeys ?? [], l.value)), d = () => {
			if (e.summary) return null;
			if (e.operationColumn.render) return e.operationColumn.render(e.record.raw);
			if (e.operationColumn.name === "selection-checkbox") {
				let t = e.record.key;
				return !i.checkStrictly && !e.record.isLeaf ? Y(Wy, {
					ariaLabel: o(),
					modelValue: u.value.checked,
					indeterminate: u.value.indeterminate,
					disabled: !!e.record.disabled,
					uninjectGroupContext: !0,
					onChange: (t) => i.onSelectAllLeafs?.(e.record, t),
					onClick: (e) => e.stopPropagation()
				}, null) : Y(Wy, {
					ariaLabel: o(),
					modelValue: e.selectedRowKeys?.includes(t) ?? !1,
					disabled: !!e.record.disabled,
					uninjectGroupContext: !0,
					onChange: (t) => i.onSelect?.(t, e.record),
					onClick: (e) => e.stopPropagation()
				}, null);
			}
			if (e.operationColumn.name === "selection-radio") {
				let t = e.record.key;
				return Y(rb, {
					ariaLabel: o(),
					modelValue: e.selectedRowKeys?.includes(t) ?? !1,
					disabled: !!e.record.disabled,
					uninjectGroupContext: !0,
					onChange: (t) => i.onSelect?.(t, e.record),
					onClick: (e) => e.stopPropagation()
				}, null);
			}
			return e.operationColumn.name === "expand" ? e.hasExpand && e.renderExpandBtn ? e.renderExpandBtn(e.record) : null : e.operationColumn.name === "drag-handle" ? n["drag-handle-icon"] ? Y(Ep, null, Dp(n["drag-handle-icon"])) : Y(hb, null, null) : null;
		};
		return () => Y("td", {
			class: c.value,
			style: s.value,
			rowspan: e.rowSpan > 1 ? e.rowSpan : void 0,
			colspan: e.colSpan > 1 ? e.colSpan : void 0,
			headers: e.headers,
			"data-operation-key": e.operationColumn.name
		}, [Y("span", { class: `${r}-cell` }, [d()])]);
	}
});
// packages/ui/es/table/features/summary/use-summary-render.mjs
function vb(e, t, n) {
	let { props: r, slots: i, prefixCls: a, summaryData: o, dataColumns: s, operations: c, allColumns: l, summarySpanMethod: u, getVirtualColumnStyle: d, cellHeaders: f, handleRowClick: p, summaryRef: m, hasScrollBar: h, contentStyle: g, renderSemanticHeader: _ } = e, { tableSpan: v, removedCells: y } = mp({
		spanMethod: u,
		data: o,
		columns: l
	}), b = (e, n) => Y(bp, {
		key: `table-summary-${n}`,
		class: [`${a}-tr-summary`, $f(r.rowClass) ? r.rowClass(e.raw, n) : r.rowClass],
		onClick: (t) => p(e, t)
	}, {
		default: () => [c.value.map((t, r) => {
			let i = `${n}-${r}-${e.key}`, [a, o] = v.value[i] ?? [1, 1];
			if (y.value.includes(i)) return null;
			let s = d(t.name);
			return Y(_b, {
				headers: f("summary", r, o),
				style: s,
				operationColumn: t,
				operations: c.value,
				record: e,
				rowSpan: a,
				colSpan: o,
				summary: !0
			}, null);
		}), s.value.map((r, a) => {
			let o = `${n}-${c.value.length + a}-${e.key}`, [l, u] = v.value[o] ?? [1, 1];
			if (y.value.includes(o)) return null;
			let p = d(dp(r));
			return Y(ag, Z({
				headers: f("summary", c.value.length + a, u),
				key: `td-${o}`,
				style: p,
				rowIndex: n,
				record: e,
				column: r,
				operations: c.value,
				dataColumns: s.value,
				rowSpan: l,
				colSpan: u,
				summary: !0
			}, t(e, r)), {
				td: i.td,
				cell: i["summary-cell"],
				_: 2
			});
		})],
		tr: i.tr
	}), x = () => o.value.length > 0 ? Y("tfoot", null, [o.value.map((e, t) => b(e, t))]) : null;
	return {
		render: x,
		panel: () => o.value.length > 0 && Y("div", {
			ref: m,
			class: `${a}-tfoot`,
			style: { overflowY: h.value ? "scroll" : "hidden" }
		}, [Y("table", {
			class: `${a}-element`,
			style: g.value,
			cellpadding: 0,
			cellspacing: 0
		}, [
			n(),
			_("summary"),
			x()
		])])
	};
}
// packages/ui/es/table/features/virtual/row-plan.mjs
function yb(e) {
	let { props: t, slots: n, flattenData: r, displayHeaderRows: i, expandedRowKeys: a, showEmptyTree: o, renderExpandContent: s } = e;
	return () => {
		let e = t.virtualListProps;
		if (!e || !r.value.length || n.tr || n.tbody || e.data !== void 0 || e.component !== void 0 || e.listAttrs !== void 0 || e.threshold && r.value.length <= e.threshold) return;
		let c = t.showHeader ? i.value.length : 0, l = new Set(a.value), u = Infinity, d = 0, f = (e) => ({
			indices: /* @__PURE__ */ new Map(),
			extraIndices: /* @__PURE__ */ new Map(),
			details: /* @__PURE__ */ new Map(),
			rowCount: e
		}), p = (e, r, i) => {
			for (let a of e) {
				if (r.indices.has(a.key)) return !1;
				if (r.indices.set(a.key, ++r.rowCount), l.has(a.key)) {
					if (a.hasSubtree) {
						if (a.children?.length === 0 && o.value) r.extraIndices.set(a.key, ++r.rowCount);
						else if (a.children && !p(a.children, r, i)) return !1;
					} else if ($f(a.expand) || !a.expand && !n["expand-row"] && t.expandable?.expandedRowRender) {
						if (i) {
							let e = s(a);
							r.details.set(a.key, e), e && r.extraIndices.set(a.key, ++r.rowCount);
						} else u = Math.min(u, r.rowCount), d++;
					} else (a.expand || n["expand-row"]) && r.extraIndices.set(a.key, ++r.rowCount);
				}
			}
			return !0;
		}, m = f(c);
		return p(r.value, m, !1) ? d ? { prepareRange: (e) => {
			let t = e.length ? m.indices.get(e[0].key) : void 0;
			if (t === void 0 || u < t) return { listAttrs: { "aria-rowcount": -1 } };
			let n = f(t - 1);
			p(e, n, !0);
			let r = n.details.size === d ? m.rowCount + Array.from(n.details.values()).filter(Boolean).length : -1;
			return n.rowCount = r, {
				positions: n,
				listAttrs: { "aria-rowcount": r }
			};
		} } : { positions: m } : void 0;
	};
}
// packages/ui/es/_components/virtual-list-v2/hooks/use-size.mjs
var bb = ({ dataKeys: e, contentRef: t, fixedSize: n, estimatedSize: r, buffer: i, viewportHeight: a, scrollOffset: o }) => {
	let s = /* @__PURE__ */ I(0), c = /* @__PURE__ */ Yt(/* @__PURE__ */ new Map()), l = Q(() => new Set(e.value));
	V(l, (e) => {
		for (let t of c.keys()) e.has(t) || c.delete(t);
		c.size === 0 && (s.value = 0);
	});
	let u = Q(() => e.value.length), d = /* @__PURE__ */ I(0), f = Q(() => Number.isFinite(i.value) && i.value >= 0 ? Math.floor(i.value) : 0), p = Q(() => {
		if (!a || !o) return Math.min(u.value, d.value + f.value * 3);
		let e = Number.isFinite(a.value) && a.value > 0 ? a.value : 1, t = S(0, d.value), n = Math.max(t, o.value) + e, r = d.value;
		for (; r < u.value;) {
			let e = y(r);
			if (t >= n && (t !== n || e !== 0)) break;
			t += e, r++;
		}
		return Math.min(u.value, r + f.value);
	}), m = Q(() => {
		if (!a) return Math.max(0, u.value - f.value * 3);
		let e = Number.isFinite(a.value) && a.value > 0 ? a.value : 1, t = u.value;
		for (; t > 0 && e > 0;) t--, e -= y(t);
		return Math.max(0, t - f.value);
	}), h = (e) => {
		e = Number.isFinite(e) ? Math.floor(e) : 0, e < 0 ? d.value = 0 : e > m.value ? d.value = m.value : d.value = e;
	}, g = n, _ = Q(() => {
		let e = r.value;
		return typeof e != "number" || !Number.isFinite(e) || e <= 0 ? 30 : e === 30 ? s.value || r.value || 30 : e;
	}), v = (e, t, n = !1) => {
		l.value.has(e) && Number.isFinite(t) && (t > 0 || n && t === 0) && c.set(e, t);
	}, y = (t) => {
		if (g.value) return _.value;
		let n = e.value[t];
		return c.get(n) ?? _.value;
	}, b = (e) => c.has(e);
	Yi(() => {
		let e = Array.from(c.values()).reduce((e, t) => e + t, 0);
		e > 0 && (s.value = e / c.size);
	});
	let x = (e) => g.value ? _.value * e : S(0, e), S = (e, t) => {
		if (g.value) return (t - e) * _.value;
		let n = 0;
		for (let r = e; r < t; r++) n += y(r);
		return n;
	};
	return {
		frontPadding: Q(() => g.value ? _.value * d.value : S(0, d.value)),
		behindPadding: Q(() => g.value ? _.value * (u.value - p.value) : S(p.value, u.value)),
		start: d,
		end: p,
		getStartByScroll: (e) => {
			let t = Number.isFinite(e) ? Math.max(0, e) : 0;
			o && (o.value = t);
			let n = 0;
			if (g.value) n = Math.floor(t / _.value);
			else {
				let e = t;
				for (; n < u.value;) {
					let t = y(n);
					if (e < t || e === 0 && t === 0) break;
					e -= t, n++;
				}
			}
			return Math.min(m.value, Math.max(0, n - f.value));
		},
		setItemSize: v,
		hasItemSize: b,
		setStart: h,
		getScrollOffset: x
	};
}, xb = Symbol("virtual-list-measurement-version"), { name: Sb } = $("virtual-list-item"), Cb = /* @__PURE__ */ H({
	name: Sb,
	props: {
		index: Number,
		canMeasureZero: Function,
		hasItemSize: {
			type: Function,
			required: !0
		},
		setItemSize: {
			type: Function,
			required: !0
		}
	},
	setup(e, { slots: t }) {
		let n = Ls()?.vnode.key, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a, o = (e) => (i.has(e) || i.set(e, (t) => {
			let n = t && "$el" in t ? t.$el : t, i = r.get(e);
			i && i !== n && a?.unobserve(i), n && typeof n == "object" && "nodeType" in n && n.nodeType === 1 ? (r.set(e, n), a?.observe(n)) : r.delete(e);
		}), i.get(e)), s = () => {
			let t = Array.from(r.values(), (e) => ({
				element: e,
				rect: e.getBoundingClientRect()
			})).filter(({ element: e, rect: t }) => t.width !== 0 || t.height !== 0 || e.getClientRects().length > 0).map(({ rect: e }) => e), i = t.length ? Math.max(...t.map((e) => e.bottom)) - Math.min(...t.map((e) => e.top)) : 0;
			i ? e.setItemSize(n, i) : r.size > 0 && e.canMeasureZero?.() && e.setItemSize(n, 0, !0);
		}, c = () => {
			if (!a) {
				let e = r.values().next().value?.ownerDocument.defaultView?.ResizeObserver;
				e && (a = new e(s), r.forEach((e) => a?.observe(e)));
			}
			s();
		}, l = B(xb, void 0);
		return l && V(l, c, { flush: "post" }), Yi(c), Zi(c), Qi(() => {
			s(), a?.disconnect();
		}), () => {
			let n = 0, i = (t) => t.map((t) => {
				if (Array.isArray(t)) return i(t);
				if (!t || typeof t != "object") return t;
				if (t.type === W && Array.isArray(t.children)) {
					let e = Ts(t);
					return e.children = i(t.children), e.dynamicChildren = null, e;
				}
				if (typeof t.type == "string" || typeof t.type == "object" || typeof t.type == "function") {
					let i = n++, a = o(i), s = {
						ref: a,
						"data-virtual-list-index": e.index
					};
					return typeof t.type == "string" ? Ts(t, s, !0) : Ts(t, {
						...s,
						onVnodeUpdated(e) {
							let t = e.el?.nodeType === 1 ? e.el : void 0;
							t !== r.get(i) && (a(t ?? null), c());
						}
					}, !0);
				}
				return t;
			});
			return i(t.default?.() ?? []);
		};
	}
}), wb = /* @__PURE__ */ H({
	name: $("virtual-list").name,
	components: { VirtualListItem: Cb },
	props: {
		height: {
			type: [Number, String],
			default: 200
		},
		data: {
			type: Array,
			default: () => []
		},
		threshold: {
			type: Number,
			default: 0
		},
		itemKey: {
			type: [String, Function],
			default: "key"
		},
		fixedSize: {
			type: Boolean,
			default: !1
		},
		estimatedSize: {
			type: Number,
			default: 30,
			validator: (e) => Number.isFinite(e) && e > 0
		},
		buffer: {
			type: Number,
			default: 10,
			validator: (e) => Number.isInteger(e) && e >= 0
		},
		component: {
			type: [String, Object],
			default: "div"
		},
		prepareRange: Function,
		listAttrs: { type: Object },
		contentAttrs: { type: Object },
		paddingPosition: {
			type: String,
			default: "content"
		}
	},
	emits: {
		scroll: (e) => !0,
		"reach-bottom": (e) => !0
	},
	setup(e, { emit: t }) {
		let { data: n, itemKey: r, fixedSize: i, estimatedSize: a, buffer: o, height: s } = /* @__PURE__ */ vn(e), c = Uf("virtual-list"), l = Q(() => Yf(e.component) ? {
			container: "div",
			list: "div",
			content: "div",
			...e.component
		} : {
			container: e.component,
			list: "div",
			content: "div"
		}), u = /* @__PURE__ */ I(), d = () => !!(u.value?.isConnected && u.value.getClientRects().length), { dir: f } = od(() => u.value), p = 0, m = /* @__PURE__ */ I(), h = /* @__PURE__ */ I(typeof e.height == "number" && e.height > 0 ? e.height : 200), g = /* @__PURE__ */ I(0), _ = /* @__PURE__ */ I(0);
		vr(xb, _);
		let v = !1, y, b = () => {
			let e = u.value, t = !!(e?.isConnected && e.getClientRects().length);
			t && v && _.value++, v = !t;
			let n = e?.clientHeight ?? 0;
			n > 0 && (h.value = n);
		};
		Yi(() => {
			b();
			let e = u.value, t = e?.ownerDocument.defaultView?.ResizeObserver;
			e && t && (y = new t(b), y.observe(e));
		}), Qi(() => y?.disconnect()), V(s, async () => {
			await R(), b();
		}), Bi(async () => {
			await R(), b();
		});
		let x, S, C = 0, w, T = !1, E = !0, D = !1, ee = () => T && E && !D && !!u.value, te = (e, t) => ee() && e === C && u.value === t;
		Yi(() => {
			T = !0;
		}), Bi(async () => {
			if (D) return;
			E = !0;
			let e = u.value, t = C, n = S, r = x;
			S = void 0, x = void 0, e && r !== void 0 && te(t, e) && (fm(e) === 0 && pm(e, r), p = fm(e)), await R(), e && n !== void 0 && te(t, e) && (e.scrollTop === 0 && (e.scrollTop = n), g.value = e.scrollTop, le.value && se(ie(e.scrollTop)));
		}), Vi(() => {
			S = g.value, x = p, E = !1, C++, w = void 0;
		}), Qi(() => {
			D = !0, T = E = !1, C++, w = void 0;
		}), V(f, () => {
			ee() && u.value && pm(u.value, p);
		}, { flush: "post" });
		let ne = Q(() => ({
			height: Zf(s.value) ? `${s.value}px` : s.value,
			overflow: "auto"
		})), O = (e, t) => (typeof r.value == "function" ? r.value(e) : e?.[r.value]) ?? t, re = Q(() => n.value.map((e, t) => O(e, t))), { frontPadding: k, behindPadding: A, start: j, end: M, getStartByScroll: ie, setItemSize: ae, hasItemSize: oe, setStart: se, getScrollOffset: ce } = bb({
			dataKeys: re,
			contentRef: m,
			fixedSize: i,
			estimatedSize: a,
			buffer: o,
			viewportHeight: h,
			scrollOffset: g
		});
		V(h, () => {
			u.value && se(ie(u.value.scrollTop));
		}, { flush: "post" }), V([i, a], () => {
			C++, w = void 0, u.value && se(ie(u.value.scrollTop));
		}, { flush: "post" });
		let le = Q(() => !e.threshold || n.value.length > e.threshold);
		V([re, le], ([e, t], [n, r]) => {
			t === r && e.length === n.length && e.every((e, t) => e === n[t]) || (C++, w = void 0, se(j.value));
		});
		let ue = Q(() => le.value ? n.value.slice(j.value, M.value) : n.value), N;
		e.prepareRange && ea(() => {
			N = e.prepareRange?.(ue.value);
		});
		let de = Q(() => N ?? e.prepareRange?.(ue.value)), fe = (e) => {
			if (!ee()) return;
			let n = u.value;
			p = fm(n);
			let { scrollTop: r, scrollHeight: i, offsetHeight: a } = e.target, o = w?.top === r ? w.correct : void 0, s = o ? C : ++C;
			o || (w = void 0);
			let c = ie(r);
			le.value && c !== j.value && (se(c), R(() => {
				te(s, n) && (o ? o() : pe(r));
			})), t("scroll", e), te(s, n) && Math.floor(i - (r + a)) <= 0 && t("reach-bottom", e);
		}, pe = (e) => {
			if (!ee()) return;
			let t = u.value;
			if (!t) return;
			let n = ++C;
			if (w = void 0, Zf(e)) {
				Number.isFinite(e) && (t.scrollTop = Math.max(0, e), g.value = t.scrollTop, le.value && se(ie(t.scrollTop)));
				return;
			}
			let r = e.index ?? re.value.indexOf(e.key ?? "");
			if (!Number.isInteger(r) || r < 0 || r >= re.value.length) return;
			let i = e.align ?? "top", a = () => {
				let e = Array.from(t.querySelectorAll(`[data-virtual-list-index="${r}"]`)).filter((e) => e.closest(`.${c}`) === t).map((e) => e.getBoundingClientRect()).filter((e) => e.height);
				if (e.length) {
					let n = t.getBoundingClientRect().top + t.clientTop;
					return {
						top: t.scrollTop + Math.min(...e.map((e) => e.top)) - n,
						bottom: t.scrollTop + Math.max(...e.map((e) => e.bottom)) - n
					};
				}
				return {
					top: ce(r),
					bottom: ce(r + 1)
				};
			}, s = t.clientHeight || t.offsetHeight, l = a();
			if (i === "auto" && l.top >= t.scrollTop && l.bottom <= t.scrollTop + s) return;
			let d = () => {
				let e = u.value;
				if (!e || !te(n, t)) return;
				let { top: r, bottom: o } = a(), s = e.clientHeight || e.offsetHeight, c = e.scrollTop, l = i === "bottom" ? o - s : i === "auto" ? r < c ? r : o > c + s ? o - s : c : r;
				e.scrollTop = Math.max(0, l), g.value = e.scrollTop, w = {
					top: e.scrollTop,
					correct: d
				};
			};
			le.value && se(r - (Number.isFinite(o.value) && o.value >= 0 ? Math.floor(o.value) : 0)), d();
			let f = !1;
			R(() => {
				f || (f = !0, d());
			});
		};
		return {
			prefixCls: c,
			canMeasureZero: d,
			virtualEnabled: le,
			containerRef: u,
			contentRef: m,
			frontPadding: k,
			currentList: ue,
			range: de,
			behindPadding: A,
			onScroll: fe,
			setItemSize: ae,
			hasItemSize: oe,
			start: j,
			scrollTo: pe,
			style: ne,
			mergedComponent: l,
			getItemKey: O
		};
	}
});
// packages/ui/es/_components/virtual-list-v2/VirtualList.vue.mjs
function Tb(e, t, n, r, i, a) {
	let o = oa("VirtualListItem");
	return G(), q(ca(e.mergedComponent.container), {
		ref: "containerRef",
		class: P(e.prefixCls),
		style: N(e.style),
		onScroll: e.onScroll
	}, {
		default: z(() => [(G(), q(ca(e.mergedComponent.list), Z({
			...e.listAttrs,
			...e.range?.listAttrs
		}, { style: e.virtualEnabled && e.paddingPosition === "list" ? {
			paddingTop: `${e.frontPadding}px`,
			paddingBottom: `${e.behindPadding}px`
		} : {} }), {
			default: z(() => [U(e.$slots, "list-prefix", { range: e.range }), (G(), q(ca(e.mergedComponent.content), Z({ ref: "contentRef" }, e.contentAttrs, { style: e.virtualEnabled && e.paddingPosition === "content" ? {
				paddingTop: `${e.frontPadding}px`,
				paddingBottom: `${e.behindPadding}px`
			} : {} }), {
				default: z(() => [(G(!0), K(W, null, fa(e.currentList, (t, n) => (G(), q(o, {
					key: e.getItemKey(t, e.virtualEnabled ? e.start + n : n),
					index: e.virtualEnabled ? e.start + n : n,
					"has-item-size": e.hasItemSize,
					"set-item-size": e.setItemSize,
					"can-measure-zero": e.canMeasureZero
				}, {
					default: z(() => [U(e.$slots, "item", {
						range: e.range,
						item: t,
						index: e.virtualEnabled ? e.start + n : n
					})]),
					_: 2
				}, 1032, [
					"index",
					"has-item-size",
					"set-item-size",
					"can-measure-zero"
				]))), 128))]),
				_: 3
			}, 16, ["style"]))]),
			_: 3
		}, 16, ["style"]))]),
		_: 3
	}, 40, [
		"class",
		"style",
		"onScroll"
	]);
}
var Eb = /* @__PURE__ */ o_(wb, [["render", Tb]]);
// packages/ui/es/table/features/virtual/render-body.mjs
function Db(e) {
	let { props: t, slots: n, prefixCls: r, flattenData: i, tbodyComRef: a, contentStyle: o, renderSemanticHeader: s, renderRecord: c, onTbodyScroll: l } = e;
	return {
		plan: yb(e),
		render: (e, u) => Y(Eb, Z({
			ref: a,
			class: `${r}-body`,
			data: i.value,
			itemKey: "_key",
			component: {
				list: "table",
				content: t.virtualListProps?.component === void 0 ? vp(n.tbody?.()) ?? "tbody" : "tbody"
			},
			listAttrs: {
				class: `${r}-element`,
				style: o.value,
				"aria-rowcount": e?.rowCount
			},
			paddingPosition: "list",
			height: "auto"
		}, t.virtualListProps, {
			prepareRange: u,
			onScroll: l
		}), {
			"list-prefix": ({ range: t }) => s("body", t?.positions ?? e),
			item: ({ item: t, index: n, range: r }) => c(t, n, { positions: r?.positions ?? e })
		})
	};
}
// packages/ui/es/table/features/expansion/use-lazy-data.mjs
function Ob(e) {
	let t = /* @__PURE__ */ I(0), n = /* @__PURE__ */ new WeakMap(), r = !0;
	Bi(() => {
		r = !0;
	}), Vi(() => {
		r = !1;
	}), Qi(() => {
		r = !1, n = /* @__PURE__ */ new WeakMap();
	}), V([() => e.loadMore, () => e.rowKey], () => {
		n = /* @__PURE__ */ new WeakMap(), t.value++;
	}, { flush: "sync" });
	let i = (t) => {
		let r = n.get(/* @__PURE__ */ rn(t));
		return r && r.key === t[e.rowKey] ? r.children : void 0;
	}, a = (t) => {
		let n = /* @__PURE__ */ rn(t.raw);
		if (n[e.rowKey] !== t.key) return !1;
		let r = /* @__PURE__ */ new Set(), a = (e) => {
			for (let t of e) {
				let e = /* @__PURE__ */ rn(t);
				if (r.has(e)) continue;
				if (r.add(e), e === n) return !0;
				let o = t.children ?? i(t);
				if (o && a(o)) return !0;
			}
			return !1;
		};
		return a(e.data ?? []);
	};
	return {
		lazyLoadRevision: t,
		getLazyChildren: i,
		addLazyLoadData: (e, i) => {
			r && e && a(i) && (n.set(/* @__PURE__ */ rn(i.raw), {
				key: i.key,
				children: e
			}), t.value++);
		}
	};
}
// packages/ui/es/table/features/filter/compute.mjs
function kb(e, t, n) {
	for (let r of Object.keys(t())) {
		let i = t()[r], a = n(r);
		if (a && a.filterable?.filter && i.length > 0) {
			let t = a.filterable.filter(i, e);
			if (!t) return t;
		}
	}
	return !0;
}
function Ab(e, t) {
	return e.filter((e) => t(e) ? (e.children &&= Ab(e.children, t), !0) : !1);
}
// packages/ui/es/table/features/sort/compute.mjs
function jb(e, t, n, r) {
	if (e.length && t?.field && n && n.sortable?.sorter !== !0) {
		let { field: i, direction: a } = t;
		e.sort((e, t) => {
			let o = np(r(e), i), s = np(r(t), i);
			if (n.sortable?.sorter && $f(n.sortable.sorter)) return n.sortable.sorter(r(e), r(t), {
				dataIndex: i,
				direction: a
			});
			let c = o > s ? 1 : o < s ? -1 : 0;
			return a === "descend" ? -c : c;
		});
	}
	return e;
}
// packages/ui/es/table/features/pagination/compute.mjs
function Mb(e, t, n, r) {
	return t && e.length > r ? e.slice((n - 1) * r, n * r) : e;
}
// packages/ui/es/scrollbar/props.mjs
var Nb = {
	type: {
		type: String,
		default: "embed"
	},
	outerClass: [
		String,
		Object,
		Array
	],
	outerStyle: {
		type: [
			String,
			Object,
			Array,
			Boolean
		],
		default: void 0,
		validator: (e) => e !== !0
	},
	hide: {
		type: Boolean,
		default: !1
	},
	disableHorizontal: {
		type: Boolean,
		default: !1
	},
	disableVertical: {
		type: Boolean,
		default: !1
	}
}, Pb = /* @__PURE__ */ H({
	name: $("thumb").name,
	props: {
		data: { type: Object },
		orientation: {
			type: String,
			default: "horizontal"
		},
		alwaysShow: {
			type: Boolean,
			default: !1
		},
		both: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["scroll"],
	setup(e, { emit: t }) {
		let n = Uf("scrollbar"), r = /* @__PURE__ */ I(!1), i = /* @__PURE__ */ I(), a = /* @__PURE__ */ I(), o = Q(() => e.orientation === "horizontal" ? {
			size: "width",
			direction: "left",
			offset: "offsetWidth",
			client: "clientX"
		} : {
			size: "height",
			direction: "top",
			offset: "offsetHeight",
			client: "clientY"
		}), s = /* @__PURE__ */ I(0), c = /* @__PURE__ */ I(!1), l = /* @__PURE__ */ I(0), u = Q(() => ({
			[o.value.size]: `${e.data?.thumbSize ?? 0}px`,
			[o.value.direction]: `${s.value}px`
		})), d = !0, f = !1, p = 0, m, h = () => d && !f, g = (e) => h() && m === e && p === e.token && i.value === e.track && a.value === e.thumb && e.track.ownerDocument.defaultView === e.view && e.thumb.ownerDocument.defaultView === e.view;
		function _() {
			let e = m;
			m = void 0;
			let t = ++p;
			e && (e.view.removeEventListener("mousemove", e.move), e.view.removeEventListener("mouseup", e.end), e.view.removeEventListener("contextmenu", e.end), e.view.removeEventListener("blur", e.end)), t === p && (l.value = 0, c.value = !1);
		}
		let v = (t) => t < 0 ? 0 : e.data && t > e.data.max ? e.data.max : t;
		return V([
			() => e.orientation,
			() => e.data?.max,
			() => e.data?.thumbSize,
			() => e.data?.ratio
		], _, { flush: "sync" }), Vi(() => {
			d = !1, _();
		}), Qi(() => {
			f = !0, d = !1, _();
		}), Bi(() => {
			!f && !d && (d = !0, p++);
		}), {
			visible: r,
			trackRef: i,
			thumbRef: a,
			prefixCls: n,
			thumbCls: Q(() => [
				`${n}-thumb`,
				`${n}-thumb-direction-${e.orientation}`,
				{ [`${n}-thumb-dragging`]: c.value }
			]),
			thumbStyle: u,
			handleThumbMouseDown: (e) => {
				if (!h() || e.button !== 0 || (_(), !h() || m)) return;
				let n = a.value, r = i.value, u = n?.ownerDocument.defaultView;
				if (!n || !r || !u || r.ownerDocument.defaultView !== u) return;
				let d = p, f = o.value;
				e.preventDefault();
				let y = e[f.client] - n.getBoundingClientRect()[f.direction];
				if (!h() || d !== p || a.value !== n || i.value !== r || n.ownerDocument.defaultView !== u || r.ownerDocument.defaultView !== u) return;
				let b = {
					token: d,
					view: u,
					track: r,
					thumb: n,
					start: y,
					map: f,
					move: () => {},
					end: () => {}
				};
				b.move = (e) => {
					if (!g(b)) return;
					let n = v(e[b.map.client] - b.track.getBoundingClientRect()[b.map.direction] - b.start);
					g(b) && n !== s.value && (s.value = n, g(b) && t("scroll", n));
				}, b.end = () => {
					g(b) && _();
				}, m = b, l.value = y, c.value = !0, g(b) && (u.addEventListener("mousemove", b.move), u.addEventListener("mouseup", b.end), u.addEventListener("contextmenu", b.end), u.addEventListener("blur", b.end));
			},
			handleTrackClick: (n) => {
				if (!h() || n.button !== 0 || (_(), !h() || m)) return;
				let r = a.value, c = i.value;
				if (!r || !c) return;
				let l = p, u = o.value;
				n.preventDefault();
				let d = r.getBoundingClientRect()[u.direction], f = v(n[u.client] > d ? s.value + (e.data?.thumbSize ?? 0) : s.value - (e.data?.thumbSize ?? 0));
				h() && l === p && a.value === r && i.value === c && f !== s.value && (s.value = f, h() && l === p && t("scroll", f));
			},
			setOffset: (e) => {
				if (!h() || m) return;
				let t = p, n = v(e);
				h() && t === p && !m && n !== s.value && (s.value = n);
			}
		};
	}
});
// packages/ui/es/scrollbar/Thumb.vue.mjs
function Fb(e, t, n, r, i, a) {
	return G(), K("div", {
		ref: "trackRef",
		class: P([`${e.prefixCls}-track`, `${e.prefixCls}-track-direction-${e.orientation}`]),
		onMousedown: t[1] ||= mu((...t) => e.handleTrackClick && e.handleTrackClick(...t), ["self"])
	}, [J("div", {
		ref: "thumbRef",
		class: P(e.thumbCls),
		style: N(e.thumbStyle),
		onMousedown: t[0] ||= (...t) => e.handleThumbMouseDown && e.handleThumbMouseDown(...t)
	}, [J("div", { class: P(`${e.prefixCls}-thumb-bar`) }, null, 2)], 38)], 34);
}
var Ib = /* @__PURE__ */ o_(Pb, [["render", Fb]]), Lb = 20, Rb = 15, zb = /* @__PURE__ */ H({
	name: $("scrollbar").name,
	components: {
		ResizeObserver: $h,
		Thumb: Ib
	},
	inheritAttrs: !1,
	props: Nb,
	emits: { scroll: (e) => !0 },
	setup(e, { emit: t }) {
		let n = Uf("scrollbar"), r = /* @__PURE__ */ I(), { dir: i } = od(() => r.value), a = /* @__PURE__ */ I(), o = /* @__PURE__ */ I(), s = /* @__PURE__ */ I(), c = /* @__PURE__ */ I(), l = /* @__PURE__ */ I(!1), u = /* @__PURE__ */ I(!1), d = Q(() => l.value && !e.disableHorizontal), f = Q(() => u.value && !e.disableVertical), p = /* @__PURE__ */ I(!1), m = /* @__PURE__ */ I(Rb), h = /* @__PURE__ */ I({
			left: 0,
			top: 0,
			width: 0,
			height: 0
		}), g = Q(() => ({
			left: `${h.value.left}px`,
			top: `${h.value.top + Math.max(0, h.value.height - (e.type === "embed" ? m.value : 0))}px`,
			width: `${(a.value?.thumbSize ?? 0) + (a.value?.max ?? 0)}px`,
			right: "auto",
			bottom: "auto"
		})), _ = Q(() => ({
			left: `${h.value.left + Math.max(0, h.value.width - (e.type === "embed" ? m.value : 0))}px`,
			top: `${h.value.top}px`,
			height: `${(o.value?.thumbSize ?? 0) + (o.value?.max ?? 0)}px`,
			right: "auto",
			bottom: "auto"
		})), v = !0, y = !1, b = 0, x = /* @__PURE__ */ I(0), S = () => v && !y, C = (e, t) => S() && e === b && r.value === t;
		function w(e, t, n) {
			if (![
				e,
				t,
				n
			].every(Number.isFinite) || e <= 0 || t <= 0 || n <= e) return {
				ratio: 1,
				thumbSize: Number.isFinite(t) ? Math.max(0, t) : 0,
				max: 0
			};
			let r = Math.min(t, Math.round(t / Math.min(n / e, t / Lb))), i = Math.max(0, t - r);
			return {
				ratio: i > 0 ? (n - e) / i : 1,
				thumbSize: r,
				max: i
			};
		}
		let T = (e, t) => Math.max(0, Math.min(t.max, Math.round((Number.isFinite(e) ? e : 0) / t.ratio))), E = () => {
			let t = r.value;
			if (!S() || !t) return;
			let n = ++b, { clientWidth: i, clientHeight: d, offsetWidth: f, offsetHeight: g, scrollWidth: _, scrollHeight: v, scrollTop: y, scrollLeft: x, offsetLeft: E, offsetTop: D } = t;
			if (!C(n, t)) return;
			let ee = s.value?.$el ?? c.value?.$el, te = s.value ? "height" : "width", ne = ee?.ownerDocument.defaultView?.getComputedStyle(ee)[te], O = Number.parseFloat(ne ?? ""), re = Number.isFinite(O) && O >= 0 ? O : m.value;
			if (!C(n, t)) return;
			let k = i > 0 && f > 0 && _ > i, A = d > 0 && g > 0 && v > d, j = k && !e.disableHorizontal && A && !e.disableVertical, M = w(i, e.type === "embed" && j ? f - re : f, _), ie = w(d, e.type === "embed" && j ? g - re : g, v);
			if (l.value = k, !C(n, t) || (u.value = A, !C(n, t)) || (p.value = j, !C(n, t)) || (m.value = re, !C(n, t)) || (h.value = {
				left: E,
				top: D,
				width: f,
				height: g
			}, !C(n, t)) || (a.value = M, !C(n, t)) || (o.value = ie, !C(n, t)) || (c.value?.setOffset(T(y, ie)), !C(n, t))) return;
			let ae = lm(t);
			C(n, t) && s.value?.setOffset(T(ae, M));
		}, D = Q(() => {
			let e = x.value;
			return () => {
				S() && e === x.value && E();
			};
		});
		sh(() => [s.value?.$el, c.value?.$el], () => !e.hide, E);
		let ee = Q(() => {
			let e = x.value;
			return (n) => {
				let i = r.value;
				if (!S() || e !== x.value || !i) return;
				let l = ++b;
				if (d.value && a.value) {
					let e = T(lm(i), a.value);
					if (!C(l, i)) return;
					s.value?.setOffset(e);
				}
				if (C(l, i)) {
					if (f.value && o.value) {
						let e = T(i.scrollTop, o.value);
						if (!C(l, i)) return;
						c.value?.setOffset(e);
					}
					C(l, i) && t("scroll", n);
				}
			};
		}), te = Q(() => {
			let t = x.value;
			return (n) => {
				if (S() && t === x.value && !e.hide && d.value) {
					let e = ++b, t = r.value;
					if (!t) return;
					let i = um(t, n * (a.value?.ratio ?? 1));
					C(e, t) && t.scrollTo({ left: i });
				}
			};
		}), ne = Q(() => {
			let t = x.value;
			return (n) => {
				S() && t === x.value && !e.hide && f.value && (b++, r.value?.scrollTo({ top: n * (o.value?.ratio ?? 1) }));
			};
		});
		function O(e, t) {
			S() && (b++, Yf(e) ? r.value?.scrollTo(e) : (typeof e == "number" || typeof t == "number") && r.value?.scrollTo(e ?? 0, t ?? 0));
		}
		function re(e) {
			S() && (b++, r.value?.scrollTo({ top: e }));
		}
		function k(e) {
			S() && (b++, r.value?.scrollTo({ left: e }));
		}
		function A() {
			v = !1, b++, x.value++;
		}
		Zi(() => {
			let e = r.value;
			S() && e && (e.offsetLeft !== h.value.left || e.offsetTop !== h.value.top) && E();
		}), V([
			i,
			() => e.type,
			() => e.disableHorizontal,
			() => e.disableVertical
		], E, { flush: "post" }), V([d, f], E, { flush: "post" }), Yi(E), Vi(A), Qi(() => {
			y = !0, A();
		}), Bi(() => {
			!y && !v && (v = !0, b++, x.value++, E());
		});
		let j = Q(() => {
			let t = {};
			return e.type === "track" && (d.value && (t.paddingBottom = "var(--c-scrollbar-track-size)"), f.value && (t.paddingRight = "var(--c-scrollbar-track-size)")), [t, e.outerStyle];
		});
		return {
			prefixCls: n,
			cls: Q(() => [
				`${n}`,
				`${n}-type-${e.type}`,
				{ [`${n}-both`]: p.value },
				e.outerClass
			]),
			style: j,
			containerRef: r,
			horizontalThumbRef: s,
			verticalThumbRef: c,
			horizontalData: a,
			horizontalTrackStyle: g,
			verticalTrackStyle: _,
			verticalData: o,
			isBoth: p,
			hasHorizontalScrollbar: d,
			hasVerticalScrollbar: f,
			handleResize: D,
			handleScroll: ee,
			handleHorizontalScroll: te,
			handleVerticalScroll: ne,
			scrollTo: O,
			scrollTop: re,
			scrollLeft: k
		};
	}
});
// packages/ui/es/scrollbar/Scrollbar.vue.mjs
function Bb(e, t, n, r, i, a) {
	let o = oa("ResizeObserver"), s = oa("thumb");
	return G(), K("div", {
		class: P(e.cls),
		style: N(e.style)
	}, [
		Y(o, { onResize: e.handleResize }, {
			default: z(() => [J("div", Z({
				ref: "containerRef",
				class: `${e.prefixCls}-container`
			}, e.$attrs, { onScroll: t[0] ||= (...t) => e.handleScroll && e.handleScroll(...t) }), [Y(o, { onResize: e.handleResize }, {
				default: z(() => [U(e.$slots, "default")]),
				_: 3
			}, 8, ["onResize"])], 16)]),
			_: 3
		}, 8, ["onResize"]),
		!e.hide && e.hasHorizontalScrollbar ? (G(), q(s, {
			key: 0,
			ref: "horizontalThumbRef",
			data: e.horizontalData,
			style: N(e.horizontalTrackStyle),
			orientation: "horizontal",
			both: e.isBoth,
			onScroll: e.handleHorizontalScroll
		}, null, 8, [
			"data",
			"style",
			"both",
			"onScroll"
		])) : X("", !0),
		!e.hide && e.hasVerticalScrollbar ? (G(), q(s, {
			key: 1,
			ref: "verticalThumbRef",
			data: e.verticalData,
			style: N(e.verticalTrackStyle),
			orientation: "vertical",
			both: e.isBoth,
			onScroll: e.handleVerticalScroll
		}, null, 8, [
			"data",
			"style",
			"both",
			"onScroll"
		])) : X("", !0)
	], 6);
}
var Vb = /* @__PURE__ */ o_(zb, [["render", Bb]]), Hb = Vf(Vb, Object.assign(Vb, {}), { components: [Vb] }), Ub = /* @__PURE__ */ H({
	name: $("table-sticky-scrollbar").name,
	__name: "StickyScrollbar",
	props: {
		container: {},
		active: { type: Boolean },
		layoutWidth: {}
	},
	setup(e) {
		let t = e, { dir: n } = od(() => t.container), { n: r } = $("table"), i = /* @__PURE__ */ I(), a = Q(() => i.value?.containerRef), o = /* @__PURE__ */ I(0), s = /* @__PURE__ */ I(0), c, l, u = () => {
			a.value && t.container && (pm(a.value, fm(t.container)), l = fm(a.value));
		};
		function d() {
			if (t.container && a.value) {
				let e = fm(a.value);
				if (l !== void 0 && Math.abs(e - l) < .5) return;
				l = void 0, Math.abs(fm(t.container) - e) > .5 && pm(t.container, e);
			}
		}
		function f(e) {
			if (e.target !== e.currentTarget || !a.value || ![
				"ArrowLeft",
				"ArrowRight",
				"Home",
				"End"
			].includes(e.key)) return;
			e.preventDefault();
			let t = a.value, r = Math.max(0, t.scrollWidth - t.clientWidth), i = n.value === "rtl" ? "ArrowLeft" : "ArrowRight";
			pm(t, e.key === "Home" ? 0 : e.key === "End" ? r : fm(t) + (e.key === i ? 40 : -40)), d();
		}
		V([n, a], () => {
			R(u);
		}, { flush: "post" });
		let p = !0;
		function m() {
			let e = t.container;
			!p || !e ? o.value = 0 : (o.value = e.scrollWidth, s.value = e.clientWidth, R(() => {
				p && t.container === e && (u(), i.value?.handleResize());
			}));
		}
		V(() => t.layoutWidth, m, { flush: "post" }), sh(() => [t.container, t.container?.firstElementChild], () => p && !!t.container, m);
		function h() {
			c?.(), c = void 0;
			let e = t.container;
			!p || !e ? o.value = 0 : (e.addEventListener("scroll", u, { passive: !0 }), c = () => e.removeEventListener("scroll", u), m());
		}
		return V(() => t.container, h, {
			immediate: !0,
			flush: "post"
		}), Vi(() => {
			p = !1, c?.(), c = void 0;
		}), Bi(() => {
			p = !0, h();
		}), Qi(() => {
			p = !1, c?.();
		}), (e, t) => o.value > s.value ? (G(), q(L(Hb), {
			key: 0,
			ref_key: "scrollbar",
			ref: i,
			type: "embed",
			dir: L(n),
			"disable-vertical": "",
			"outer-class": [L(r)("sticky-scrollbar"), { [L(r)("--scrollbar-active")]: L(p) }],
			"outer-style": { width: `${s.value}px` },
			class: P(L(r)("sticky-scrollbar-viewport")),
			tabindex: "0",
			role: "region",
			"aria-label": "Scroll table horizontally",
			onScroll: d,
			onKeydown: f
		}, {
			default: z(() => [J("div", {
				style: N({ width: `${o.value}px` }),
				class: P(L(r)("sticky-scrollbar-content"))
			}, null, 6)]),
			_: 1
		}, 8, [
			"dir",
			"outer-class",
			"outer-style",
			"class"
		])) : X("", !0);
	}
}), Wb = {
	columns: {
		type: Array,
		default: () => []
	},
	data: {
		type: Array,
		default: () => []
	},
	bordered: {
		type: [Boolean, Object],
		default: !0
	},
	hoverable: {
		type: Boolean,
		default: !0
	},
	stripe: {
		type: Boolean,
		default: !1
	},
	size: {
		type: String,
		default: "md"
	},
	tableLayout: {
		type: String,
		default: "fixed"
	},
	loading: {
		type: [Boolean, Object],
		default: !1
	},
	rowSelection: { type: Object },
	expandable: { type: Object },
	height: { type: [Number, String] },
	maxHeight: { type: [Number, String] },
	fit: {
		type: Boolean,
		default: !0
	},
	pagination: {
		type: [Boolean, Object],
		default: !0
	},
	pagePosition: {
		type: String,
		default: "br"
	},
	indentSize: {
		type: Number,
		default: 16
	},
	rowKey: {
		type: String,
		default: "key"
	},
	showHeader: {
		type: Boolean,
		default: !0
	},
	virtualListProps: { type: Object },
	spanMethod: { type: Function },
	spanAll: {
		type: Boolean,
		default: !1
	},
	components: { type: Object },
	loadMore: { type: Function },
	filterIconAlignLeft: {
		type: Boolean,
		default: !1
	},
	hideExpandButtonOnEmpty: {
		type: Boolean,
		default: !1
	},
	rowClass: { type: [
		String,
		Array,
		Object,
		Function
	] },
	draggable: { type: Object },
	rowNumber: { type: [Boolean, Object] },
	columnResizable: { type: Boolean },
	summary: { type: [Boolean, Function] },
	summaryText: {
		type: String,
		default: "Summary"
	},
	summarySpanMethod: { type: Function },
	selectedKeys: { type: Array },
	defaultSelectedKeys: { type: Array },
	expandedKeys: { type: Array },
	defaultExpandedKeys: { type: Array },
	defaultExpandAllRows: {
		type: Boolean,
		default: !1
	},
	stickyHeader: {
		type: [Boolean, Number],
		default: !1
	},
	stickyPagination: {
		type: [Boolean, Number],
		default: !1
	},
	scrollbar: {
		type: [Object, Boolean],
		default: !0
	},
	showEmptyTree: {
		type: Boolean,
		default: !1
	},
	extraColumn: {
		type: [Boolean, Object],
		default: !1
	}
}, Gb = typeof window > "u" ? global : window;
function Kb(e, t) {
	let n = 0;
	return (...r) => {
		n && Gb.clearTimeout(n), n = Gb.setTimeout(() => {
			n = 0, e(...r);
		}, t);
	};
}
// packages/ui/es/_utils/array.mjs
var qb = (e, t, n = !1) => n ? e.filter((e) => !t.includes(e)) : Array.from(new Set(e.concat(t))), Jb = ({ selectedKeys: e, defaultSelectedKeys: t, rowSelection: n, currentAllRowKeys: r, currentAllEnabledRowKeys: i, emit: a }) => {
	let o = Q(() => n.value?.type === "radio"), s = /* @__PURE__ */ I(t.value ?? n.value?.defaultSelectedRowKeys ?? []), c = Q(() => e.value ?? n.value?.selectedRowKeys ?? s.value);
	return {
		isRadio: o,
		selectedRowKeys: c,
		currentSelectedRowKeys: Q(() => c.value.filter((e) => r.value.includes(e))),
		handleSelectAll: (e) => {
			let t = qb(c.value, i.value, !e);
			s.value = t, a("select-all", e), a("selection-change", t), a("update:selectedKeys", t);
		},
		handleSelect: (e, t) => {
			let n = o.value ? [t.key] : qb(c.value, [t.key], !e);
			s.value = n, a("select", n, t.key, t.raw), a("selection-change", n), a("update:selectedKeys", n);
		},
		handleSelectAllLeafs: (e, t) => {
			let n = qb(c.value, cg(e), !t);
			s.value = n, a("select", n, e.key, e.raw), a("selection-change", n), a("update:selectedKeys", n);
		},
		select: (e, t = !0) => {
			let n = [].concat(e);
			if (o.value && t && n.length === 0) return;
			let r = o.value && t ? n.slice(0, 1) : qb(c.value, n, !t);
			s.value = r, a("selection-change", r), a("update:selectedKeys", r);
		},
		selectAll: (e = !0) => {
			if (o.value && e) return;
			let t = qb(c.value, i.value, !e);
			s.value = t, a("selection-change", t), a("update:selectedKeys", t);
		},
		clearSelected: () => {
			s.value = [], a("selection-change", []), a("update:selectedKeys", []);
		}
	};
}, Yb = ({ expandedKeys: e, defaultExpandedKeys: t, defaultExpandAllRows: n, expandable: r, allRowKeys: i, emit: a }) => {
	let o = /* @__PURE__ */ I(t.value ? t.value : r.value?.defaultExpandedRowKeys ? r.value.defaultExpandedRowKeys : n.value || r.value?.defaultExpandAllRows ? [...i.value] : []), s = Q(() => e.value ?? r.value?.expandedRowKeys ?? o.value);
	return {
		expandedRowKeys: s,
		handleExpand: (e, t) => {
			let n = s.value.includes(e) ? s.value.filter((t) => e !== t) : s.value.concat(e);
			o.value = n, a("expand", e, t), a("expanded-change", n), a("update:expandedKeys", n);
		},
		expand: (e, t = !0) => {
			let n = [].concat(e), r = qb(s.value, n, !t);
			o.value = r, a("expanded-change", r), a("update:expandedKeys", r);
		},
		expandAll: (e = !0) => {
			let t = e ? [...i.value] : [];
			o.value = t, a("expanded-change", t), a("update:expandedKeys", t);
		}
	};
}, Xb = (e, t) => {
	let n = /* @__PURE__ */ I(Yf(e.pagination) ? e.pagination.defaultValue ?? 1 : 1), r = /* @__PURE__ */ I(Yf(e.pagination) ? e.pagination.defaultPageSize ?? 10 : 10), i = Q(() => Yf(e.pagination) ? e.pagination.pageSize ?? r.value : r.value);
	return {
		page: Q(() => Yf(e.pagination) ? e.pagination.modelValue ?? n.value : n.value),
		pageSize: i,
		handlePageChange: (e) => {
			n.value = e, t("page-change", e);
		},
		handlePageSizeChange: (e) => {
			r.value = e, t("page-size-change", e);
		}
	};
}, Zb = (e) => Object.prototype.toString.call(e) === "[object Number]" && e === e, Qb = ({ containerWidth: e, dataColumns: t, operations: n, fit: r }) => {
	let i = t.map((e, t) => ({
		...e,
		index: t
	})), a = [], o = (e, t) => {
		a.push({
			index: e.index,
			width: t
		});
	}, s = {}, c = 0;
	for (let e of n) c += e.width ?? 40;
	if (!e || i.length === 0) {
		let e = c;
		for (let t of i) {
			let n = t.key;
			if (!n) continue;
			let r = t._resizeWidth ?? t.width ?? t.minWidth ?? 80;
			s[n] = r, o(t, r), e += r;
		}
		return {
			hasHorizontalOverflow: !1,
			bodyWidth: e,
			columnRealWidth: s,
			widthUpdates: a
		};
	}
	let l = i.filter((e) => !Zb(e._resizeWidth) && !Zb(e.width)), u = c;
	if (l.length > 0 && r) {
		for (let e of i) Zb(e._resizeWidth) ? u += e._resizeWidth : u += Number(e.width || e.minWidth || 80);
		if (u <= e) {
			let t = e - u;
			if (l.length === 1) {
				let e = l[0], n = Number(e.minWidth || 80);
				e.dataIndex && (s[e.key] = n + t, o(e, s[e.key]));
			} else {
				let e = t / l.reduce((e, t) => e + Number(t.minWidth || 80), 0), n = 0;
				l.forEach((t, r) => {
					if (r === 0) return;
					let i = Number(t.minWidth || 80), a = Math.floor(i * e);
					n += a, t.dataIndex && (s[t.key] = i + a, o(t, s[t.key]));
				});
				let r = l[0], i = Number(r.minWidth || 80);
				r.dataIndex && (s[r.key] = i + t - n, o(r, s[r.key]));
			}
			for (let e of i) {
				if (!e.dataIndex || s[e.key]) continue;
				let t = e._resizeWidth ?? e.width;
				s[e.key] = t, o(e, t);
			}
			return {
				hasHorizontalOverflow: !1,
				bodyWidth: Math.max(u, e),
				columnRealWidth: s,
				widthUpdates: a
			};
		}
		for (let e of l) {
			let t = Number(e.minWidth || 80);
			e.dataIndex && (s[e.key] = t, o(e, t));
		}
		for (let e of i) {
			if (!e.dataIndex || s[e.key]) continue;
			let t = e._resizeWidth ?? e.width;
			s[e.key] = t, o(e, t);
		}
		return {
			hasHorizontalOverflow: !0,
			bodyWidth: u,
			columnRealWidth: s,
			widthUpdates: a
		};
	}
	for (let e of i) {
		let t;
		t = Zb(e._resizeWidth) ? e._resizeWidth : !e.width && !e.minWidth ? 80 : Number(e.width || e.minWidth), e.dataIndex && (s[e.key] = t, o(e, t)), u += t;
	}
	if (u < e) {
		let t = i.filter((e) => e.dataIndex && !e.exact), n = t.reduce((e, t) => e + s[t.key], 0);
		if (t.length > 0 && n > 0) {
			let r = e - u, i = 0;
			return t.forEach((e, a) => {
				let c = e.key;
				if (a === t.length - 1) s[c] += r - i;
				else {
					let e = Math.floor(r * s[c] / n);
					s[c] += e, i += e;
				}
				o(e, s[c]);
			}), {
				hasHorizontalOverflow: !1,
				bodyWidth: e,
				columnRealWidth: s,
				widthUpdates: a
			};
		}
	}
	return {
		hasHorizontalOverflow: u > e,
		bodyWidth: u,
		columnRealWidth: s,
		widthUpdates: a
	};
}, $b = ({ containerWidth: e, dataColumns: t, operations: n, fit: r, exactDataIndexes: i }) => {
	let a = new Set(t.filter(lp).map((e) => e.dataIndex)), o = Qb({
		containerWidth: e,
		dataColumns: t.map((e) => ({
			key: dp(e),
			dataIndex: e.dataIndex,
			width: e.width,
			minWidth: e.minWidth,
			_resizeWidth: e._resizeWidth,
			exact: lp(e) || !!(e.dataIndex && i?.includes(e.dataIndex) && !a.has(e.dataIndex))
		})),
		operations: n,
		fit: r
	});
	for (let { index: e, width: n } of o.widthUpdates) t[e]._realWidth = n;
	return {
		hasHorizontalOverflow: o.hasHorizontalOverflow,
		bodyWidth: o.bodyWidth,
		columnRealWidth: o.columnRealWidth
	};
}, ex = {
	total: {
		type: Number,
		required: !0,
		validator: (e) => Number.isSafeInteger(e) && e >= 0
	},
	modelValue: {
		type: Number,
		validator: (e) => Number.isSafeInteger(e) && e >= 1
	},
	defaultValue: {
		type: Number,
		default: 1,
		validator: (e) => Number.isSafeInteger(e) && e >= 1
	},
	pageSize: {
		type: Number,
		validator: (e) => Number.isSafeInteger(e) && e > 0
	},
	defaultPageSize: {
		type: Number,
		default: 10,
		validator: (e) => Number.isSafeInteger(e) && e > 0
	},
	disabled: Boolean,
	hideOnSinglePage: Boolean,
	simple: Boolean,
	showTotal: Boolean,
	showMore: Boolean,
	showJumper: Boolean,
	showPageSize: Boolean,
	pageSizeOptions: {
		type: Array,
		default: () => [
			10,
			20,
			30,
			40,
			50
		],
		validator: (e) => e.length > 0 && e.every((e) => Number.isSafeInteger(e) && e > 0)
	},
	pageSizeProps: Object,
	size: {
		type: String,
		default: "md",
		validator: (e) => rv.includes(e)
	},
	pageItemStyle: Object,
	activePageItemStyle: Object,
	baseSize: {
		type: Number,
		default: 6,
		validator: (e) => Number.isSafeInteger(e) && e > 0 && e <= 201
	},
	bufferSize: {
		type: Number,
		default: 2,
		validator: (e) => Number.isSafeInteger(e) && e >= 0 && e <= 100
	},
	elevation: {
		type: [Boolean, Number],
		default: !1
	},
	responsive: {
		type: Boolean,
		default: !0
	},
	compactBreakpoint: {
		type: Number,
		default: 480,
		validator: (e) => Number.isFinite(e) && Number.isSafeInteger(e) && e > 0
	},
	autoAdjust: {
		type: Boolean,
		default: !0
	}
}, tx = (e, { min: t, max: n }) => Math.min(Math.max(Math.trunc(e), t), Math.max(t, n)), nx = (e, t) => typeof e == "number" && Number.isFinite(e) && e > 0 ? Math.min(2 ** 53 - 1, Math.max(1, Math.trunc(e))) : t;
// packages/ui/es/pagination/use-pagination.mjs
function rx(e, t) {
	let n = /* @__PURE__ */ I(nx(e.defaultValue, 1)), r = /* @__PURE__ */ I(nx(e.defaultPageSize, 10)), i = Q(() => nx(e.modelValue ?? n.value, 1)), a = Q(() => nx(e.pageSize ?? r.value, 10)), o = Q(() => Number.isFinite(e.total) ? Math.min(2 ** 53 - 1, Math.max(0, Math.trunc(e.total))) : 0), s = Q(() => Math.ceil(o.value / a.value)), c = Q(() => Number.isFinite(e.bufferSize) ? Math.min(100, Math.max(0, Math.trunc(e.bufferSize))) : 2), l = (e) => {
		e !== i.value && (n.value = e, t("update:modelValue", e), t("change", e));
	};
	return V([
		a,
		o,
		() => e.modelValue
	], ([t, n, r], [a, o, c]) => {
		if (t === a && n === o || r !== c || !e.autoAdjust) return;
		let u = t === a ? i.value : Math.ceil(((i.value - 1) * a + 1) / t);
		l(tx(u, {
			min: 1,
			max: s.value
		}));
	}), {
		current: i,
		pageSize: a,
		total: o,
		pages: s,
		buffer: c,
		pageList: Q(() => {
			let t = [], n = c.value;
			if (s.value < Math.min(201, nx(e.baseSize, 6)) + n * 2) {
				for (let e = 1; e <= s.value; e++) t.push({
					type: "page",
					key: e,
					pageNumber: e
				});
				return t;
			}
			let r = tx(i.value, {
				min: 1,
				max: s.value
			}), a = r > 2 + n, o = r < s.value - n - 1, l = a ? Math.min(r - n, s.value - n * 2) : 1, u = o ? Math.max(r + n, n * 2 + 1) : s.value;
			a && t.push({
				type: "page",
				key: 1,
				pageNumber: 1
			}, {
				type: "more",
				key: "left",
				step: -(n * 2 + 1)
			});
			for (let e = l; e <= u; e++) t.push({
				type: "page",
				key: e,
				pageNumber: e
			});
			return o && t.push({
				type: "more",
				key: "right",
				step: n * 2 + 1
			}, {
				type: "page",
				key: s.value,
				pageNumber: s.value
			}), t;
		}),
		changeCurrent: (t) => {
			!e.disabled && Number.isFinite(t) && l(tx(t, {
				min: 1,
				max: s.value
			}));
		},
		changePageSize: (n) => {
			if (e.disabled || !Number.isFinite(n) || n <= 0) return;
			let i = nx(n, 10);
			i !== a.value && (r.value = i, t("update:pageSize", i), t("page-size-change", i));
		}
	};
}
// packages/ui/es/pagination/use-compact.mjs
function ix(e, t) {
	let n = /* @__PURE__ */ I(), r, i = () => {
		e.value && (n.value = e.value.getBoundingClientRect().width);
	};
	return Yi(() => {
		i(), typeof ResizeObserver < "u" ? (r = new ResizeObserver(i), e.value && r.observe(e.value)) : window.addEventListener("resize", i);
	}), Qi(() => {
		r?.disconnect(), typeof window < "u" && window.removeEventListener("resize", i);
	}), Q(() => t.responsive && n.value !== void 0 && n.value > 0 && n.value <= t.compactBreakpoint);
}
// packages/icons/es/icon-left/icon-left.vue_vue_type_script_setup_true_lang.mjs
var ax = [
	"stroke-width",
	"stroke-linecap",
	"stroke-linejoin",
	"aria-hidden"
], ox = { key: 0 }, sx = /* @__PURE__ */ H({
	name: "CIconLeft",
	__name: "icon-left",
	props: {
		size: {},
		color: {},
		title: {},
		strokeWidth: { default: 4 },
		strokeLinecap: { default: "butt" },
		strokeLinejoin: { default: "miter" },
		rotate: {},
		spin: { type: Boolean }
	},
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Vp("icon"), a = /^-?(?:\d+|\d*\.\d+)$/, o = Q(() => [
			i,
			`${i}-left`,
			{ [`${i}-spin`]: n.spin }
		]), s = Q(() => ({
			color: n.color,
			fontSize: Hp(n.size) || a.test(n.size?.trim() ?? "") ? `${n.size}px` : n.size,
			...n.rotate ? { transform: `rotate(${n.rotate}deg)` } : {}
		}));
		return (e, t) => (G(), K("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 48 48",
			width: "1em",
			height: "1em",
			class: P(o.value),
			style: N(s.value),
			"stroke-width": n.strokeWidth,
			"stroke-linecap": n.strokeLinecap,
			"stroke-linejoin": n.strokeLinejoin,
			"aria-hidden": !n.title,
			role: "img",
			onClick: t[0] ||= (e) => r("click", e)
		}, [n.title ? (G(), K("title", ox, F(n.title), 1)) : X("v-if", !0), t[1] ||= J("path", { d: "M32 8.4 16.444 23.956 32 39.513" }, null, -1)], 14, ax));
	}
}), cx = Object.assign(sx, { install(e) {
	e.component(sx.name, sx);
} }), lx = [
	"stroke-width",
	"stroke-linecap",
	"stroke-linejoin",
	"aria-hidden"
], ux = { key: 0 }, dx = /* @__PURE__ */ H({
	name: "CIconRight",
	__name: "icon-right",
	props: {
		size: {},
		color: {},
		title: {},
		strokeWidth: { default: 4 },
		strokeLinecap: { default: "butt" },
		strokeLinejoin: { default: "miter" },
		rotate: {},
		spin: { type: Boolean }
	},
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Vp("icon"), a = /^-?(?:\d+|\d*\.\d+)$/, o = Q(() => [
			i,
			`${i}-right`,
			{ [`${i}-spin`]: n.spin }
		]), s = Q(() => ({
			color: n.color,
			fontSize: Hp(n.size) || a.test(n.size?.trim() ?? "") ? `${n.size}px` : n.size,
			...n.rotate ? { transform: `rotate(${n.rotate}deg)` } : {}
		}));
		return (e, t) => (G(), K("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 48 48",
			width: "1em",
			height: "1em",
			class: P(o.value),
			style: N(s.value),
			"stroke-width": n.strokeWidth,
			"stroke-linecap": n.strokeLinecap,
			"stroke-linejoin": n.strokeLinejoin,
			"aria-hidden": !n.title,
			role: "img",
			onClick: t[0] ||= (e) => r("click", e)
		}, [n.title ? (G(), K("title", ux, F(n.title), 1)) : X("v-if", !0), t[1] ||= J("path", { d: "m16 39.513 15.556-15.557L16 8.4" }, null, -1)], 14, lx));
	}
}), fx = Object.assign(dx, { install(e) {
	e.component(dx.name, dx);
} }), px = [
	"stroke-width",
	"stroke-linecap",
	"stroke-linejoin",
	"aria-hidden"
], mx = { key: 0 }, hx = /* @__PURE__ */ H({
	name: "CIconMore",
	__name: "icon-more",
	props: {
		size: {},
		color: {},
		title: {},
		strokeWidth: { default: 4 },
		strokeLinecap: { default: "butt" },
		strokeLinejoin: { default: "miter" },
		rotate: {},
		spin: { type: Boolean }
	},
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Vp("icon"), a = /^-?(?:\d+|\d*\.\d+)$/, o = Q(() => [
			i,
			`${i}-more`,
			{ [`${i}-spin`]: n.spin }
		]), s = Q(() => ({
			color: n.color,
			fontSize: Hp(n.size) || a.test(n.size?.trim() ?? "") ? `${n.size}px` : n.size,
			...n.rotate ? { transform: `rotate(${n.rotate}deg)` } : {}
		}));
		return (e, t) => (G(), K("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 48 48",
			width: "1em",
			height: "1em",
			class: P(o.value),
			style: N(s.value),
			"stroke-width": n.strokeWidth,
			"stroke-linecap": n.strokeLinecap,
			"stroke-linejoin": n.strokeLinejoin,
			"aria-hidden": !n.title,
			role: "img",
			onClick: t[0] ||= (e) => r("click", e)
		}, [
			n.title ? (G(), K("title", mx, F(n.title), 1)) : X("v-if", !0),
			t[1] ||= J("path", {
				fill: "currentColor",
				stroke: "none",
				d: "M38 25v-2h2v2zM23 25v-2h2v2zM8 25v-2h2v2z"
			}, null, -1),
			t[2] ||= J("path", { d: "M38 25v-2h2v2zM23 25v-2h2v2zM8 25v-2h2v2z" }, null, -1)
		], 14, px));
	}
}), gx = Object.assign(hx, { install(e) {
	e.component(hx.name, hx);
} });
// packages/ui/es/pagination/platform.mjs
function _x() {
	let { t: e } = Wg();
	return Q(() => ({
		navigation: e("pagination.navigation") ?? "Pagination",
		previous: e("pagination.previous") ?? "Previous page",
		next: e("pagination.next") ?? "Next page",
		goto: e("pagination.goto"),
		perPage: e("pagination.countPerPage"),
		total: (t) => e("pagination.total", t),
		count: (t) => `${t} ${e("pagination.countPerPage")}`,
		page: (t) => `${e("pagination.goto")} ${t}`
	}));
}
// packages/ui/es/pagination/PageItem.vue.mjs
var vx = [
	"disabled",
	"aria-current",
	"aria-label"
], yx = /* @__PURE__ */ H({
	name: $("pagination-item").name,
	__name: "PageItem",
	props: {
		pageNumber: Number,
		current: Number,
		disabled: Boolean,
		style: Object,
		activeStyle: Object,
		elevation: [Boolean, Number]
	},
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = e, r = t, { n: i, classes: a } = $("pagination"), o = Q(() => n.current === n.pageNumber), s = _x();
		return (t, n) => (G(), K("button", {
			type: "button",
			class: P(L(a)(L(i)("item"), [o.value, L(i)("item--active")], L(Wf)(e.elevation, 2))),
			disabled: e.disabled,
			"aria-current": o.value ? "page" : void 0,
			"aria-label": L(s).page(e.pageNumber ?? 1),
			style: N([e.style, o.value ? e.activeStyle : void 0]),
			onClick: n[0] ||= (t) => !e.disabled && e.pageNumber && r("click", e.pageNumber)
		}, [U(t.$slots, "default", { page: e.pageNumber }, () => [Es(F(e.pageNumber), 1)])], 14, vx));
	}
}), bx = ["disabled", "aria-label"], xx = /* @__PURE__ */ H({
	name: $("pagination-step").name,
	__name: "PageItemStep",
	props: {
		current: {
			type: Number,
			required: !0
		},
		pages: {
			type: Number,
			required: !0
		},
		type: {
			type: String,
			required: !0
		},
		disabled: Boolean,
		elevation: [Boolean, Number]
	},
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = e, r = t, { n: i, classes: a } = $("pagination"), o = Q(() => n.type === "next"), s = Q(() => n.disabled || n.pages === 0 || (o.value ? n.current >= n.pages : n.current <= 1)), c = _x();
		function l() {
			s.value || r("click", tx(n.current + (o.value ? 1 : -1), {
				min: 1,
				max: n.pages
			}));
		}
		return (t, n) => (G(), K("button", {
			type: "button",
			class: P(L(a)(L(i)("item"), L(i)(e.type), L(Wf)(e.elevation, 2))),
			disabled: s.value,
			"aria-label": o.value ? L(c).next : L(c).previous,
			onClick: l
		}, [U(t.$slots, "default", { type: o.value ? "next" : "previous" }, () => [o.value ? (G(), q(L(fx), {
			key: 0,
			class: P(L(i)("step-icon")),
			"aria-hidden": "true"
		}, null, 8, ["class"])) : (G(), q(L(cx), {
			key: 1,
			class: P(L(i)("step-icon")),
			"aria-hidden": "true"
		}, null, 8, ["class"]))])], 10, bx));
	}
}), Sx = ["disabled", "aria-label"], Cx = /* @__PURE__ */ H({
	name: $("pagination-ellipsis").name,
	__name: "PageItemEllipsis",
	props: {
		current: {
			type: Number,
			required: !0
		},
		pages: {
			type: Number,
			required: !0
		},
		step: {
			type: Number,
			default: 5
		},
		disabled: Boolean,
		elevation: [Boolean, Number]
	},
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = e, r = t, { n: i, classes: a } = $("pagination"), o = Q(() => tx(n.current + n.step, {
			min: 1,
			max: n.pages
		})), s = Q(() => n.disabled || !n.pages || n.current === o.value), c = _x();
		return (t, n) => (G(), K("button", {
			type: "button",
			class: P(L(a)(L(i)("item"), L(i)("item-ellipsis"), L(Wf)(e.elevation, 2))),
			disabled: s.value,
			"aria-label": L(c).page(o.value),
			onClick: n[0] ||= (e) => !s.value && r("click", o.value)
		}, [U(t.$slots, "default", {}, () => [Y(L(gx), { "aria-hidden": "true" })])], 10, Sx));
	}
});
// packages/ui/es/_utils/input-composition.mjs
function wx() {
	let e = /* @__PURE__ */ I(!1), t, n = 0;
	function r() {
		n++, e.value = !0, t = void 0;
	}
	function i(r) {
		return e.value ? (n++, e.value = !1, t = r.target.value, !0) : !1;
	}
	function a(r) {
		if (e.value || r.isComposing) return !1;
		let i = r.target.value;
		return t !== void 0 && i === t ? !1 : (t = void 0, n++, !0);
	}
	function o() {
		n++, e.value = !1, t = void 0;
	}
	function s() {
		let t = n;
		return () => t === n && !e.value;
	}
	return {
		isComposing: e,
		start: r,
		end: i,
		accepts: a,
		cancel: o,
		capture: s
	};
}
// packages/icons/es/icon-caret-down/icon-caret-down.vue_vue_type_script_setup_true_lang.mjs
var Tx = [
	"stroke-width",
	"stroke-linecap",
	"stroke-linejoin",
	"aria-hidden"
], Ex = { key: 0 }, Dx = /* @__PURE__ */ H({
	name: "CIconCaretDown",
	__name: "icon-caret-down",
	props: {
		size: {},
		color: {},
		title: {},
		strokeWidth: { default: 4 },
		strokeLinecap: { default: "butt" },
		strokeLinejoin: { default: "miter" },
		rotate: {},
		spin: { type: Boolean }
	},
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Vp("icon"), a = /^-?(?:\d+|\d*\.\d+)$/, o = Q(() => [
			i,
			`${i}-caret-down`,
			{ [`${i}-spin`]: n.spin }
		]), s = Q(() => ({
			color: n.color,
			fontSize: Hp(n.size) || a.test(n.size?.trim() ?? "") ? `${n.size}px` : n.size,
			...n.rotate ? { transform: `rotate(${n.rotate}deg)` } : {}
		}));
		return (e, t) => (G(), K("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 48 48",
			width: "1em",
			height: "1em",
			class: P(o.value),
			style: N(s.value),
			"stroke-width": n.strokeWidth,
			"stroke-linecap": n.strokeLinecap,
			"stroke-linejoin": n.strokeLinejoin,
			"aria-hidden": !n.title,
			role: "img",
			onClick: t[0] ||= (e) => r("click", e)
		}, [n.title ? (G(), K("title", Ex, F(n.title), 1)) : X("v-if", !0), t[1] ||= J("path", {
			fill: "currentColor",
			stroke: "none",
			d: "M24.938 34.829a1.2 1.2 0 0 1-1.875 0L9.56 17.949c-.628-.785-.069-1.949.937-1.949h27.007c1.006 0 1.565 1.164.937 1.95z"
		}, null, -1)], 14, Tx));
	}
}), Ox = Object.assign(Dx, { install(e) {
	e.component(Dx.name, Dx);
} }), kx = [
	"stroke-width",
	"stroke-linecap",
	"stroke-linejoin",
	"aria-hidden"
], Ax = { key: 0 }, jx = /* @__PURE__ */ H({
	name: "CIconCaretUp",
	__name: "icon-caret-up",
	props: {
		size: {},
		color: {},
		title: {},
		strokeWidth: { default: 4 },
		strokeLinecap: { default: "butt" },
		strokeLinejoin: { default: "miter" },
		rotate: {},
		spin: { type: Boolean }
	},
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Vp("icon"), a = /^-?(?:\d+|\d*\.\d+)$/, o = Q(() => [
			i,
			`${i}-caret-up`,
			{ [`${i}-spin`]: n.spin }
		]), s = Q(() => ({
			color: n.color,
			fontSize: Hp(n.size) || a.test(n.size?.trim() ?? "") ? `${n.size}px` : n.size,
			...n.rotate ? { transform: `rotate(${n.rotate}deg)` } : {}
		}));
		return (e, t) => (G(), K("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 48 48",
			width: "1em",
			height: "1em",
			class: P(o.value),
			style: N(s.value),
			"stroke-width": n.strokeWidth,
			"stroke-linecap": n.strokeLinecap,
			"stroke-linejoin": n.strokeLinejoin,
			"aria-hidden": !n.title,
			role: "img",
			onClick: t[0] ||= (e) => r("click", e)
		}, [n.title ? (G(), K("title", Ax, F(n.title), 1)) : X("v-if", !0), t[1] ||= J("path", {
			fill: "currentColor",
			stroke: "none",
			d: "M23.063 13.171a1.2 1.2 0 0 1 1.875 0l13.503 16.88c.628.785.069 1.949-.937 1.949H10.497c-1.006 0-1.565-1.164-.937-1.95z"
		}, null, -1)], 14, kx));
	}
}), Mx = Object.assign(jx, { install(e) {
	e.component(jx.name, jx);
} }), Nx = [
	"stroke-width",
	"stroke-linecap",
	"stroke-linejoin",
	"aria-hidden"
], Px = { key: 0 }, Fx = /* @__PURE__ */ H({
	name: "CIconDown",
	__name: "icon-down",
	props: {
		size: {},
		color: {},
		title: {},
		strokeWidth: { default: 4 },
		strokeLinecap: { default: "butt" },
		strokeLinejoin: { default: "miter" },
		rotate: {},
		spin: { type: Boolean }
	},
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Vp("icon"), a = /^-?(?:\d+|\d*\.\d+)$/, o = Q(() => [
			i,
			`${i}-down`,
			{ [`${i}-spin`]: n.spin }
		]), s = Q(() => ({
			color: n.color,
			fontSize: Hp(n.size) || a.test(n.size?.trim() ?? "") ? `${n.size}px` : n.size,
			...n.rotate ? { transform: `rotate(${n.rotate}deg)` } : {}
		}));
		return (e, t) => (G(), K("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 48 48",
			width: "1em",
			height: "1em",
			class: P(o.value),
			style: N(s.value),
			"stroke-width": n.strokeWidth,
			"stroke-linecap": n.strokeLinecap,
			"stroke-linejoin": n.strokeLinejoin,
			"aria-hidden": !n.title,
			role: "img",
			onClick: t[0] ||= (e) => r("click", e)
		}, [n.title ? (G(), K("title", Px, F(n.title), 1)) : X("v-if", !0), t[1] ||= J("path", { d: "M39.6 17.443 24.043 33 8.487 17.443" }, null, -1)], 14, Nx));
	}
}), Ix = Object.assign(Fx, { install(e) {
	e.component(Fx.name, Fx);
} }), Lx = [
	"stroke-width",
	"stroke-linecap",
	"stroke-linejoin",
	"aria-hidden"
], Rx = { key: 0 }, zx = /* @__PURE__ */ H({
	name: "CIconFilter",
	__name: "icon-filter",
	props: {
		size: {},
		color: {},
		title: {},
		strokeWidth: { default: 4 },
		strokeLinecap: { default: "butt" },
		strokeLinejoin: { default: "miter" },
		rotate: {},
		spin: { type: Boolean }
	},
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Vp("icon"), a = /^-?(?:\d+|\d*\.\d+)$/, o = Q(() => [
			i,
			`${i}-filter`,
			{ [`${i}-spin`]: n.spin }
		]), s = Q(() => ({
			color: n.color,
			fontSize: Hp(n.size) || a.test(n.size?.trim() ?? "") ? `${n.size}px` : n.size,
			...n.rotate ? { transform: `rotate(${n.rotate}deg)` } : {}
		}));
		return (e, t) => (G(), K("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 48 48",
			width: "1em",
			height: "1em",
			class: P(o.value),
			style: N(s.value),
			"stroke-width": n.strokeWidth,
			"stroke-linecap": n.strokeLinecap,
			"stroke-linejoin": n.strokeLinejoin,
			"aria-hidden": !n.title,
			role: "img",
			onClick: t[0] ||= (e) => r("click", e)
		}, [n.title ? (G(), K("title", Rx, F(n.title), 1)) : X("v-if", !0), t[1] ||= J("path", { d: "M30 42V22.549a1 1 0 0 1 .463-.844l10.074-6.41A1 1 0 0 0 41 14.45V8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6.451a1 1 0 0 0 .463.844l10.074 6.41a1 1 0 0 1 .463.844V37" }, null, -1)], 14, Lx));
	}
}), Bx = Object.assign(zx, { install(e) {
	e.component(zx.name, zx);
} }), Vx = [
	"stroke-width",
	"stroke-linecap",
	"stroke-linejoin",
	"aria-hidden"
], Hx = { key: 0 }, Ux = /* @__PURE__ */ H({
	name: "CIconEmpty",
	__name: "icon-empty",
	props: {
		size: {},
		color: {},
		title: {},
		strokeWidth: { default: 4 },
		strokeLinecap: { default: "butt" },
		strokeLinejoin: { default: "miter" },
		rotate: {},
		spin: { type: Boolean }
	},
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Vp("icon"), a = /^-?(?:\d+|\d*\.\d+)$/, o = Q(() => [
			i,
			`${i}-empty`,
			{ [`${i}-spin`]: n.spin }
		]), s = Q(() => ({
			color: n.color,
			fontSize: Hp(n.size) || a.test(n.size?.trim() ?? "") ? `${n.size}px` : n.size,
			...n.rotate ? { transform: `rotate(${n.rotate}deg)` } : {}
		}));
		return (e, t) => (G(), K("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 48 48",
			width: "1em",
			height: "1em",
			class: P(o.value),
			style: N(s.value),
			"stroke-width": n.strokeWidth,
			"stroke-linecap": n.strokeLinecap,
			"stroke-linejoin": n.strokeLinejoin,
			"aria-hidden": !n.title,
			role: "img",
			onClick: t[0] ||= (e) => r("click", e)
		}, [n.title ? (G(), K("title", Hx, F(n.title), 1)) : X("v-if", !0), t[1] ||= J("path", { d: "M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z" }, null, -1)], 14, Vx));
	}
}), Wx = Object.assign(Ux, { install(e) {
	e.component(Ux.name, Ux);
} }), Gx = [
	"stroke-width",
	"stroke-linecap",
	"stroke-linejoin",
	"aria-hidden"
], Kx = { key: 0 }, qx = /* @__PURE__ */ H({
	name: "CIconSearch",
	__name: "icon-search",
	props: {
		size: {},
		color: {},
		title: {},
		strokeWidth: { default: 4 },
		strokeLinecap: { default: "butt" },
		strokeLinejoin: { default: "miter" },
		rotate: {},
		spin: { type: Boolean }
	},
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Vp("icon"), a = /^-?(?:\d+|\d*\.\d+)$/, o = Q(() => [
			i,
			`${i}-search`,
			{ [`${i}-spin`]: n.spin }
		]), s = Q(() => ({
			color: n.color,
			fontSize: Hp(n.size) || a.test(n.size?.trim() ?? "") ? `${n.size}px` : n.size,
			...n.rotate ? { transform: `rotate(${n.rotate}deg)` } : {}
		}));
		return (e, t) => (G(), K("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 48 48",
			width: "1em",
			height: "1em",
			class: P(o.value),
			style: N(s.value),
			"stroke-width": n.strokeWidth,
			"stroke-linecap": n.strokeLinecap,
			"stroke-linejoin": n.strokeLinejoin,
			"aria-hidden": !n.title,
			role: "img",
			onClick: t[0] ||= (e) => r("click", e)
		}, [n.title ? (G(), K("title", Kx, F(n.title), 1)) : X("v-if", !0), t[1] ||= J("path", { d: "M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0s-6.248 16.379 0 22.627 16.38 6.248 22.628 0Zm0 0 8.485 8.485" }, null, -1)], 14, Gx));
	}
}), Jx = Object.assign(qx, { install(e) {
	e.component(qx.name, qx);
} }), Yx = [
	"stroke-width",
	"stroke-linecap",
	"stroke-linejoin",
	"aria-hidden"
], Xx = { key: 0 }, Zx = /* @__PURE__ */ H({
	name: "CIconCheckCircleFill",
	__name: "icon-check-circle-fill",
	props: {
		size: {},
		color: {},
		title: {},
		strokeWidth: { default: 4 },
		strokeLinecap: { default: "butt" },
		strokeLinejoin: { default: "miter" },
		rotate: {},
		spin: { type: Boolean }
	},
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Vp("icon"), a = /^-?(?:\d+|\d*\.\d+)$/, o = Q(() => [
			i,
			`${i}-check-circle-fill`,
			{ [`${i}-spin`]: n.spin }
		]), s = Q(() => ({
			color: n.color,
			fontSize: Hp(n.size) || a.test(n.size?.trim() ?? "") ? `${n.size}px` : n.size,
			...n.rotate ? { transform: `rotate(${n.rotate}deg)` } : {}
		}));
		return (e, t) => (G(), K("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 48 48",
			width: "1em",
			height: "1em",
			class: P(o.value),
			style: N(s.value),
			"stroke-width": n.strokeWidth,
			"stroke-linecap": n.strokeLinecap,
			"stroke-linejoin": n.strokeLinejoin,
			"aria-hidden": !n.title,
			role: "img",
			onClick: t[0] ||= (e) => r("click", e)
		}, [n.title ? (G(), K("title", Xx, F(n.title), 1)) : X("v-if", !0), t[1] ||= J("path", {
			fill: "currentColor",
			"fill-rule": "evenodd",
			stroke: "none",
			d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20m10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0z",
			"clip-rule": "evenodd"
		}, null, -1)], 14, Yx));
	}
}), Qx = Object.assign(Zx, { install(e) {
	e.component(Zx.name, Zx);
} }), $x = [
	"stroke-width",
	"stroke-linecap",
	"stroke-linejoin",
	"aria-hidden"
], eS = { key: 0 }, tS = /* @__PURE__ */ H({
	name: "CIconCloseCircleFill",
	__name: "icon-close-circle-fill",
	props: {
		size: {},
		color: {},
		title: {},
		strokeWidth: { default: 4 },
		strokeLinecap: { default: "butt" },
		strokeLinejoin: { default: "miter" },
		rotate: {},
		spin: { type: Boolean }
	},
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Vp("icon"), a = /^-?(?:\d+|\d*\.\d+)$/, o = Q(() => [
			i,
			`${i}-close-circle-fill`,
			{ [`${i}-spin`]: n.spin }
		]), s = Q(() => ({
			color: n.color,
			fontSize: Hp(n.size) || a.test(n.size?.trim() ?? "") ? `${n.size}px` : n.size,
			...n.rotate ? { transform: `rotate(${n.rotate}deg)` } : {}
		}));
		return (e, t) => (G(), K("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 48 48",
			width: "1em",
			height: "1em",
			class: P(o.value),
			style: N(s.value),
			"stroke-width": n.strokeWidth,
			"stroke-linecap": n.strokeLinecap,
			"stroke-linejoin": n.strokeLinejoin,
			"aria-hidden": !n.title,
			role: "img",
			onClick: t[0] ||= (e) => r("click", e)
		}, [n.title ? (G(), K("title", eS, F(n.title), 1)) : X("v-if", !0), t[1] ||= J("path", {
			fill: "currentColor",
			"fill-rule": "evenodd",
			stroke: "none",
			d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20m4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0",
			"clip-rule": "evenodd"
		}, null, -1)], 14, $x));
	}
}), nS = Object.assign(tS, { install(e) {
	e.component(tS.name, tS);
} }), rS = [
	"stroke-width",
	"stroke-linecap",
	"stroke-linejoin",
	"aria-hidden"
], iS = { key: 0 }, aS = /* @__PURE__ */ H({
	name: "CIconExclamationCircleFill",
	__name: "icon-exclamation-circle-fill",
	props: {
		size: {},
		color: {},
		title: {},
		strokeWidth: { default: 4 },
		strokeLinecap: { default: "butt" },
		strokeLinejoin: { default: "miter" },
		rotate: {},
		spin: { type: Boolean }
	},
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Vp("icon"), a = /^-?(?:\d+|\d*\.\d+)$/, o = Q(() => [
			i,
			`${i}-exclamation-circle-fill`,
			{ [`${i}-spin`]: n.spin }
		]), s = Q(() => ({
			color: n.color,
			fontSize: Hp(n.size) || a.test(n.size?.trim() ?? "") ? `${n.size}px` : n.size,
			...n.rotate ? { transform: `rotate(${n.rotate}deg)` } : {}
		}));
		return (e, t) => (G(), K("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 48 48",
			width: "1em",
			height: "1em",
			class: P(o.value),
			style: N(s.value),
			"stroke-width": n.strokeWidth,
			"stroke-linecap": n.strokeLinecap,
			"stroke-linejoin": n.strokeLinejoin,
			"aria-hidden": !n.title,
			role: "img",
			onClick: t[0] ||= (e) => r("click", e)
		}, [n.title ? (G(), K("title", iS, F(n.title), 1)) : X("v-if", !0), t[1] ||= J("path", {
			fill: "currentColor",
			"fill-rule": "evenodd",
			stroke: "none",
			d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20m-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z",
			"clip-rule": "evenodd"
		}, null, -1)], 14, rS));
	}
}), oS = Object.assign(aS, { install(e) {
	e.component(aS.name, aS);
} }), sS = [
	"stroke-width",
	"stroke-linecap",
	"stroke-linejoin",
	"aria-hidden"
], cS = { key: 0 }, lS = /* @__PURE__ */ H({
	name: "CIconCheck",
	__name: "icon-check",
	props: {
		size: {},
		color: {},
		title: {},
		strokeWidth: { default: 4 },
		strokeLinecap: { default: "butt" },
		strokeLinejoin: { default: "miter" },
		rotate: {},
		spin: { type: Boolean }
	},
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Vp("icon"), a = /^-?(?:\d+|\d*\.\d+)$/, o = Q(() => [
			i,
			`${i}-check`,
			{ [`${i}-spin`]: n.spin }
		]), s = Q(() => ({
			color: n.color,
			fontSize: Hp(n.size) || a.test(n.size?.trim() ?? "") ? `${n.size}px` : n.size,
			...n.rotate ? { transform: `rotate(${n.rotate}deg)` } : {}
		}));
		return (e, t) => (G(), K("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 48 48",
			width: "1em",
			height: "1em",
			class: P(o.value),
			style: N(s.value),
			"stroke-width": n.strokeWidth,
			"stroke-linecap": n.strokeLinecap,
			"stroke-linejoin": n.strokeLinejoin,
			"aria-hidden": !n.title,
			role: "img",
			onClick: t[0] ||= (e) => r("click", e)
		}, [n.title ? (G(), K("title", cS, F(n.title), 1)) : X("v-if", !0), t[1] ||= J("path", { d: "M41.678 11.05 19.05 33.678 6.322 20.95" }, null, -1)], 14, sS));
	}
}), uS = Object.assign(lS, { install(e) {
	e.component(lS.name, lS);
} }), dS = [
	"stroke-width",
	"stroke-linecap",
	"stroke-linejoin",
	"aria-hidden"
], fS = { key: 0 }, pS = /* @__PURE__ */ H({
	name: "CIconClose",
	__name: "icon-close",
	props: {
		size: {},
		color: {},
		title: {},
		strokeWidth: { default: 4 },
		strokeLinecap: { default: "butt" },
		strokeLinejoin: { default: "miter" },
		rotate: {},
		spin: { type: Boolean }
	},
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Vp("icon"), a = /^-?(?:\d+|\d*\.\d+)$/, o = Q(() => [
			i,
			`${i}-close`,
			{ [`${i}-spin`]: n.spin }
		]), s = Q(() => ({
			color: n.color,
			fontSize: Hp(n.size) || a.test(n.size?.trim() ?? "") ? `${n.size}px` : n.size,
			...n.rotate ? { transform: `rotate(${n.rotate}deg)` } : {}
		}));
		return (e, t) => (G(), K("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 48 48",
			width: "1em",
			height: "1em",
			class: P(o.value),
			style: N(s.value),
			"stroke-width": n.strokeWidth,
			"stroke-linecap": n.strokeLinecap,
			"stroke-linejoin": n.strokeLinejoin,
			"aria-hidden": !n.title,
			role: "img",
			onClick: t[0] ||= (e) => r("click", e)
		}, [n.title ? (G(), K("title", fS, F(n.title), 1)) : X("v-if", !0), t[1] ||= J("path", { d: "M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142" }, null, -1)], 14, dS));
	}
}), mS = Object.assign(pS, { install(e) {
	e.component(pS.name, pS);
} }), hS = [
	"filled",
	"outline",
	"standard"
], gS = ["default", "line"], _S = {
	loading: Boolean,
	loadingMode: {
		type: String,
		default: "default",
		validator: (e) => gS.includes(e)
	}
}, vS = {
	..._S,
	tag: {
		type: String,
		default: "div"
	},
	value: { type: null },
	id: String,
	title: String,
	size: {
		type: String,
		default: "md",
		validator: (e) => rv.includes(e)
	},
	variant: {
		type: String,
		default: "outline",
		validator: (e) => hS.includes(e)
	},
	placeholder: String,
	hint: {
		type: Boolean,
		default: !1
	},
	hintCenter: {
		type: Boolean,
		default: !0
	},
	line: {
		type: Boolean,
		default: !0
	},
	focused: Boolean,
	error: Boolean,
	disabled: Boolean,
	readonly: Boolean,
	clearable: Boolean,
	composing: Boolean,
	textColor: String,
	focusColor: String,
	blurColor: String,
	cursor: String
};
// packages/ui/es/field-decorator/use-field-geometry.mjs
function yS(e, t) {
	let { dir: n, isRtl: r } = od(() => e.value), i = /* @__PURE__ */ I(), a = /* @__PURE__ */ I(), o, s, c, l, u = !1, d = 0, f = 0, p = 0, m = (n = d) => {
		let o = e.value, s = t.value, c = ++p, l = () => u && n === d && c === p && e.value === o && t.value === s;
		if (!l() || !o || !s) return;
		let f = o.clientWidth;
		if (!l() || !f) return;
		let m = s.offsetLeft;
		if (!l()) return;
		let h = s.offsetWidth;
		if (!l()) return;
		let g = r.value ? f - m - h : m;
		l() && (i.value = g, l() && (a.value = h));
	}, h = () => {
		if (!u || l !== void 0) return;
		let e = d;
		if (typeof requestAnimationFrame == "function") {
			let t = ++f, n = !1;
			l = requestAnimationFrame(() => {
				!n && e === d && t === f && u && (n = !0, l = void 0, m(e));
			});
		} else m(e);
	}, g = () => {
		(s !== e.value || c !== t.value) && ((s || c) && o?.disconnect(), s = e.value, c = t.value, e.value && o?.observe(e.value), t.value && o?.observe(t.value));
	};
	V([e, t], () => {
		u && (g(), h());
	}, { flush: "post" });
	let _ = () => {
		if (u) return;
		u = !0;
		let e = ++d;
		m(e), u && e === d && (typeof ResizeObserver < "u" && (o = new ResizeObserver(() => {
			u && e === d && h();
		}), g()), window.addEventListener("resize", h));
	};
	Yi(_), Bi(_), V(n, h, { flush: "post" }), Zi(h);
	let v = () => {
		u = !1, d++, f++, p++, o?.disconnect(), o = void 0, s = void 0, c = void 0, window.removeEventListener("resize", h), l !== void 0 && (cancelAnimationFrame(l), l = void 0);
	};
	return Vi(v), Qi(v), Q(() => ({
		"--c-internal-field-hint-origin": r.value ? "right center" : void 0,
		"--c-internal-field-content-offset": i.value === void 0 ? void 0 : `${i.value}px`,
		"--c-internal-field-content-width": a.value === void 0 ? void 0 : `${a.value}px`
	}));
}
// packages/ui/es/field-decorator/FieldDecorator.vue.mjs
var bS = ["for"], xS = ["aria-label"], SS = /* @__PURE__ */ H({
	name: $("field-decorator").name,
	__name: "FieldDecorator",
	props: {
		...vS,
		decorativeHint: Boolean
	},
	emits: ["clear", "mousedown"],
	setup(e, { emit: t }) {
		let n = e, r = Q(() => ({
			xs: 12,
			sm: 14,
			md: 16,
			lg: 18,
			xl: 20
		})[n.size]), i = t, { n: a, classes: o } = $("field-decorator"), { t: s } = Wg(), c = /* @__PURE__ */ I(), l = /* @__PURE__ */ I(), u = yS(c, l), d = Q(() => Array.isArray(n.value) ? n.value.length > 0 : n.value != null && n.value !== ""), f = Q(() => n.hint && !!n.placeholder), p = Q(() => f.value && (n.focused || n.composing || d.value)), m = Q(() => n.clearable && d.value && !n.disabled && !n.readonly), h = Q(() => ({
			"--c-field-custom-text": n.textColor,
			"--c-field-custom-focus": n.focusColor,
			"--c-field-custom-blur": n.blurColor,
			cursor: n.disabled ? void 0 : n.cursor
		}));
		function g(e = new Event("clear")) {
			m.value && (e.stopPropagation(), i("clear", e));
		}
		return (t, n) => (G(), q(ca(t.tag), {
			ref_key: "rootRef",
			ref: c,
			"aria-busy": t.loading || void 0,
			class: P(L(o)(L(a)(), L(a)(`--size-${t.size}`), L(a)(`--variant-${t.variant}`), [t.disabled, L(a)("--disabled")], [t.readonly, L(a)("--readonly")], [t.error, L(a)("--error")], [t.focused, L(a)("--focus")], [f.value, L(a)("--hint")], [p.value, L(a)("--floating")], [!t.hintCenter, L(a)("--multiline")])),
			style: N([L(u), h.value]),
			title: t.title,
			onMousedown: n[1] ||= (e) => i("mousedown", e)
		}, {
			default: z(() => [
				t.$slots.prefix ? (G(), K("span", {
					key: 0,
					class: P(L(a)("prefix"))
				}, [U(t.$slots, "prefix")], 2)) : X("", !0),
				J("span", {
					ref_key: "middleRef",
					ref: l,
					class: P(L(a)("middle"))
				}, [U(t.$slots, "default")], 2),
				f.value && e.decorativeHint ? (G(), K("span", {
					key: 1,
					class: P(L(a)("placeholder")),
					"aria-hidden": "true"
				}, F(t.placeholder), 3)) : f.value ? (G(), K("label", {
					key: 2,
					for: t.id,
					class: P(L(a)("placeholder"))
				}, F(t.placeholder), 11, bS)) : X("", !0),
				m.value || t.$slots.suffix || t.loading && t.loadingMode === "default" ? (G(), K("span", {
					key: 3,
					class: P(L(a)("suffix"))
				}, [
					m.value ? U(t.$slots, "clear-icon", { clear: g }, () => [J("button", {
						type: "button",
						class: P(L(a)("clear-btn")),
						"aria-label": L(s)("common.clear"),
						onMousedown: n[0] ||= mu(() => {}, ["prevent"]),
						onClick: mu(g, ["stop"])
					}, [Y(L(nS), { "aria-hidden": "true" })], 42, xS)], void 0, 0) : X("", !0),
					t.loading && t.loadingMode === "default" ? (G(), K("span", {
						key: 1,
						class: P(L(a)("loading-icon")),
						"aria-hidden": "true"
					}, [Y(Jg, { size: r.value }, pa({ _: 2 }, [t.$slots["loading-icon"] ? {
						name: "icon",
						fn: z(() => [U(t.$slots, "loading-icon")]),
						key: "0"
					} : void 0]), 1032, ["size"])], 2)) : X("", !0),
					U(t.$slots, "suffix")
				], 2)) : X("", !0),
				t.loading && t.loadingMode === "line" ? (G(), K("span", {
					key: 4,
					class: P(L(a)("loading-line")),
					"aria-hidden": "true"
				}, [...n[2] ||= [J("span", null, null, -1)]], 2)) : X("", !0),
				t.line ? (G(), K(W, { key: 5 }, [t.variant === "outline" && f.value ? (G(), K("fieldset", {
					key: 0,
					class: P(L(o)(L(a)("border"), L(a)("border--notched"))),
					"aria-hidden": "true"
				}, [J("legend", { class: P(L(o)(L(a)("legend"), [p.value, L(a)("legend--open")])) }, [J("span", null, F(t.placeholder), 1)], 2)], 2)) : (G(), K("span", {
					key: 1,
					class: P(L(a)("border")),
					"aria-hidden": "true"
				}, null, 2)), t.variant === "outline" && f.value ? (G(), K("fieldset", {
					key: 2,
					class: P(L(o)(L(a)("border-state"), L(a)("border--notched"))),
					"aria-hidden": "true"
				}, [J("legend", { class: P(L(o)(L(a)("legend"), [p.value, L(a)("legend--open")])) }, [J("span", null, F(t.placeholder), 1)], 2)], 2)) : (G(), K("span", {
					key: 3,
					class: P(L(a)("border-state")),
					"aria-hidden": "true"
				}, null, 2))], 64)) : X("", !0)
			]),
			_: 3
		}, 40, [
			"aria-busy",
			"class",
			"style",
			"title"
		]));
	}
}), CS = Vf(SS), wS = /* @__PURE__ */ H({
	name: $("input-feedback").name,
	__name: "InputFeedback",
	props: { status: {} },
	setup(e) {
		let t = e, { n, classes: r } = $("input-feedback"), i = {
			validating: Kp,
			success: Qx,
			warning: oS,
			error: nS
		}, a = Q(() => i[t.status]);
		return (t, i) => a.value ? (G(), K("span", {
			key: 0,
			class: P(L(r)(L(n)(), L(n)(`--${e.status}`))),
			"aria-hidden": "true"
		}, [(G(), q(ca(a.value)))], 2)) : X("", !0);
	}
});
// packages/ui/es/_utils/text-input-value.mjs
function TS(e) {
	if (typeof e == "number") return Number.isFinite(e) && e >= 0;
	if (!e || typeof e != "object" || Array.isArray(e)) return !1;
	let t = e;
	return typeof t.length == "number" && Number.isFinite(t.length) && t.length >= 0 && (t.errorOnly === void 0 || typeof t.errorOnly == "boolean");
}
function ES(e) {
	return TS(e) ? typeof e == "number" ? {
		length: e,
		errorOnly: !1
	} : {
		length: e.length,
		errorOnly: e.errorOnly ?? !1
	} : {
		length: 0,
		errorOnly: !1
	};
}
function DS(e) {
	let t = e.indexOf("-");
	t > -1 && (e = t === 0 ? "-" + e.replace(/-/g, "") : e.replace(/-/g, ""));
	let n = e.indexOf(".");
	return n > -1 && (e = e.slice(0, n + 1) + e.slice(n).replace(/\./g, "")), e.replace(/[^-0-9.]/g, "");
}
function OS(e, t) {
	let n = t.numeric ? DS(e) : e, r = t.maxLength;
	if (typeof r != "number" || !Number.isFinite(r) || r <= 0 || t.errorOnly) return n;
	let i = t.wordLength ?? ((e) => e.length);
	if (i(n) <= r) return n;
	let a = Math.max(1, i("a")), o = t.wordSlice?.(n, r);
	if (o != null) return o;
	let s = n.slice(0, Math.floor(r / a)), c = s.charCodeAt(s.length - 1), l = n.charCodeAt(s.length);
	return c >= 55296 && c <= 56319 && l >= 56320 && l <= 57343 ? s.slice(0, -1) : s;
}
// packages/ui/es/input/props.mjs
var kS = [
	"text",
	"password",
	"number",
	"tel",
	"email"
], AS = hS, jS = {
	..._S,
	emptyValue: pg(),
	editMode: Og,
	readPretty: jg,
	emptyValues: gg,
	emptyText: _g,
	beforeCommit: Mg,
	popupContainer: tm,
	open: {
		type: Boolean,
		default: void 0
	},
	defaultOpen: Boolean,
	modelValue: String,
	modelModifiers: {
		type: Object,
		default: () => ({})
	},
	defaultValue: {
		type: String,
		default: ""
	},
	type: {
		type: String,
		default: "text",
		validator: (e) => kS.includes(e)
	},
	size: {
		type: String,
		validator: (e) => rv.includes(e)
	},
	variant: {
		type: String,
		validator: (e) => AS.includes(e)
	},
	clearable: {
		type: Boolean,
		default: !1
	},
	disabled: {
		type: Boolean,
		default: void 0
	},
	readonly: {
		type: Boolean,
		default: void 0
	},
	error: {
		type: Boolean,
		default: void 0
	},
	placeholder: String,
	hint: {
		type: Boolean,
		default: void 0
	},
	line: {
		type: Boolean,
		default: !0
	},
	textColor: String,
	focusColor: String,
	blurColor: String,
	ariaLabel: String,
	autofocus: Boolean,
	enterkeyhint: String,
	maxLength: {
		type: [Number, Object],
		default: 0,
		validator: TS
	},
	showWordLimit: {
		type: Boolean,
		default: !1
	},
	wordLength: Function,
	wordSlice: Function,
	inputAttrs: Object
};
jS.size, jS.variant, jS.disabled, jS.readonly, jS.hint, { ...jS };
// packages/ui/es/input/use-input-form.mjs
function MS(e, t = {}) {
	let n = B(Fg, !1), r = B(Rg, void 0), i = Q(() => !t.uninject && (!n || r?.value === !0));
	vr(Rg, Q(() => !1));
	let a = B(Cg, void 0), o = Ev({
		size: Q(() => e.size ?? a?.size.value),
		disabled: Q(() => e.disabled ?? a?.disabled.value),
		readonly: Q(() => e.readonly ?? a?.readonly.value),
		error: /* @__PURE__ */ xn(e, "error"),
		uninject: t.uninject
	});
	return {
		...o,
		eventHandlers: Q(() => i.value ? o.eventHandlers.value : {}),
		...lv(o.mergedSize),
		group: a,
		hasOuterLabel: Q(() => i.value && !!o.formItemCtx.hasOuterLabel)
	};
}
// packages/ui/es/input/use-input-value.mjs
function NS(e, t, n) {
	let r = /* @__PURE__ */ I(e.defaultValue), i = Sg(e), a = Q(() => {
		let t = e.modelValue === null ? null : e.modelValue ?? r.value;
		return i.isEmpty(t) ? "" : t ?? "";
	}), o = /* @__PURE__ */ I(!1), s = Q(() => ES(e.maxLength)), c = Q(() => s.value.length), l = Q(() => s.value.errorOnly), u = (t) => e.wordLength?.(t) ?? t.length, d = Q(() => u(a.value)), f = a.value, p, m, h;
	return V(() => e.modelValue, (e) => {
		e ?? (r.value = "");
	}), V(o, (e) => {
		e && (f = a.value);
	}), V(a, (t) => {
		t === p ? (f = t, p = void 0) : t === m || e.modelModifiers.trim && t === m?.trim() ? m = void 0 : (h = void 0, f = t);
	}), {
		value: a,
		focused: o,
		maxLength: c,
		errorOnly: l,
		valueLength: d,
		getValueLength: u,
		updateValue: (n, i) => {
			let a = OS(n, {
				numeric: e.type === "number",
				maxLength: c.value,
				errorOnly: l.value,
				wordLength: e.wordLength,
				wordSlice: e.wordSlice
			});
			return i?.(a), m = a, r.value = a, h = e.modelModifiers.trim ? a.trim() : a, t(a), a;
		},
		commitValue: (i) => {
			let o = e.modelModifiers.trim ? a.value.trim() : a.value;
			if (o !== a.value) {
				p = o, r.value = o;
				let e = o !== h;
				h = o, t(o, e);
			}
			o !== f && (f = o, n(o, i));
		},
		clearValue: (i, o) => {
			let s = mg(e, "");
			p = s;
			let c = a.value, l = s;
			o?.(l), r.value = l ?? "", h = typeof l == "string" && e.modelModifiers.trim ? l.trim() : l, t(l), f = e.modelValue === void 0 ? l : a.value, c !== l && n(l, i);
		}
	};
}
// packages/ui/es/input/input.vue.mjs
var PS = ["data-form-editor-id"], FS = [
	"id",
	"aria-busy",
	"autocomplete",
	"value",
	"type",
	"disabled",
	"readonly",
	"placeholder",
	"aria-label",
	"aria-describedby",
	"aria-invalid",
	"autofocus",
	"enterkeyhint",
	"inputmode"
], IS = Pf(/* @__PURE__ */ H({
	name: $("input").name,
	inheritAttrs: !1,
	__name: "input",
	props: jS,
	emits: [
		"update:open",
		"update:modelValue",
		"input",
		"change",
		"press-enter",
		"keydown",
		"clear",
		"focus",
		"blur",
		"click"
	],
	setup(e, { expose: t, emit: n }) {
		let r = e, { describe: i } = bv(), a = n, { n: o, classes: s } = $("input"), c = ka(), l = B(wg, !1), u = /* @__PURE__ */ I(), d = Zp(), f = Q(() => Py(c)), p = Q(() => ({
			...f.value.native,
			...r.inputAttrs
		})), m = Q(() => String(p.value.id ?? d)), { group: h, mergedSize: g, mergedDisabled: _, mergedReadonly: v, mergedError: y, feedback: b, eventHandlers: x, hasOuterLabel: S } = MS(r), C = Q(() => r.variant ?? h?.variant.value ?? "outline"), w = Q(() => !S.value && (r.hint ?? h?.hint.value ?? vS.hint.default)), { editMode: T, readPretty: E, item: D, label: ee, register: te } = zg(() => r.editMode, () => r.readPretty), ne = /* @__PURE__ */ I(), O = Sg(r, void 0, !!D), re = /* @__PURE__ */ I(r.defaultValue), k = Q(() => r.modelValue === void 0 ? re.value : r.modelValue), A = /* @__PURE__ */ I(r.defaultOpen), j = Q(() => T.value !== "direct" && !E.value && !_.value && !v.value && (r.open ?? A.value)), M = /* @__PURE__ */ I(), ie = Q(() => {
			if (D && T.value !== "direct" && !E.value) return j.value && u.value?.getRootNode() !== M.value?.getRootNode() ? "" : m.value;
		});
		function ae(e) {
			e && (_.value || v.value || E.value) || (A.value = e, a("update:open", e));
		}
		let oe = Eg({
			value: () => k.value,
			open: j,
			deferred: () => T.value !== "direct",
			blocked: () => _.value || v.value || E.value,
			clone: (e) => e,
			publish: (e, t) => {
				re.value = e, a("update:modelValue", e), t ? a("change", e, t) : a("change", e), D?.validate || x.value?.onChange?.();
			},
			close: () => ae(!1),
			cancelOnExternalChange: !0,
			beforeCommit: async (e, t) => {
				if (D?.validate && !await D.validate(e) || t.aborted) return !1;
				if (e !== k.value) return Ag(r.beforeCommit, e, {
					previousValue: k.value,
					signal: t
				});
			}
		});
		function se() {
			oe.cancel(), D?.resetValidation?.();
		}
		function ce(e) {
			if (!ue.isComposing.value) return _e(e ?? new Event("change")), oe.commit(e);
		}
		V([T, E], ([e, t], n) => {
			D?.resolved?.(e, E.value), n && n.length > 0 && (e !== n[0] || t !== n[1]) && (ae(!1), oe.reset(), D?.resetValidation?.());
		}, {
			immediate: !0,
			flush: "sync"
		}), V([
			_,
			v,
			E
		], () => {
			(E.value || T.value !== "direct" && (_.value || v.value)) && (ae(!1), oe.reset(), D?.resetValidation?.());
		}, { flush: "sync" }), te({
			active: () => j.value,
			cancel: () => {
				ae(!1), oe.reset();
			},
			focus: () => ne.value?.focus()
		});
		let le = new Proxy(r, { get(e, t) {
			return t === "modelValue" ? oe.value.value : Reflect.get(e, t);
		} }), ue = wx(), { value: N, focused: de, maxLength: fe, errorOnly: pe, valueLength: me, updateValue: ge, commitValue: _e, clearValue: ve } = NS(le, (e, t = !0) => {
			j.value ? oe.update(e) : (re.value = e, t && a("update:modelValue", e));
		}, (e, t) => {
			j.value || (a("change", e, t), x.value?.onChange?.(t));
		}), ye = Q(() => y.value || !!(pe.value && fe.value > 0 && me.value > fe.value));
		function be(e) {
			if (_.value || v.value) return;
			let t = e.target, n = Fy(t), r = ue.capture();
			ge(t.value, (t) => {
				a("input", t ?? "", e), !j.value && x.value?.onInput?.(e);
			}), R(() => {
				r() && u.value === t && n(N.value);
			});
		}
		function xe(e) {
			ue.accepts(e) && be(e);
		}
		function Se(e) {
			ue.end(e) && be(e);
		}
		function Ce(e) {
			de.value = !0, a("focus", e), !j.value && x.value?.onFocus?.(e);
		}
		function we(e) {
			de.value = !1, !_.value && !v.value && _e(e), a("blur", e), !j.value && x.value?.onBlur?.(e);
		}
		function Te(e) {
			a("keydown", e), e.defaultPrevented || e.key !== "Enter" || _.value || v.value || e.isComposing || ue.isComposing.value || (_e(e), a("press-enter", e));
		}
		function Ee(e) {
			!r.clearable || _.value || v.value || ue.isComposing.value || !N.value || (a("clear", e), !j.value && x.value?.onClear?.(e), ve(e, (t) => {
				a("input", t ?? "", e), !j.value && x.value?.onInput?.(e);
			}), ke());
		}
		function De(e) {
			_.value || a("click", e);
		}
		function Oe(e) {
			T.value === "direct" && (_.value || e.target === u.value || e.target.closest("button, a, [role=\"button\"], input, textarea, select") || (e.preventDefault(), ke()));
		}
		function ke(e) {
			_.value || u.value?.focus(e);
		}
		function Ae() {
			u.value?.blur();
		}
		function je() {
			u.value?.select();
		}
		return Yi(() => {
			r.autofocus && ke();
		}), t({
			inputRef: u,
			focus: ke,
			blur: Ae,
			select: je
		}), (e, t) => (G(), K("div", Z({
			ref_key: "inputRoot",
			ref: M
		}, f.value.root, {
			"data-form-editor-id": ie.value,
			class: L(s)(L(o)(), [L(_), L(o)("--disabled")]),
			onMousedown: Oe,
			onClick: De
		}), [Y(Xv, {
			id: m.value,
			ref_key: "presentationRef",
			ref: ne,
			"aria-describedby": p.value["aria-describedby"],
			"aria-labelledby": typeof p.value["aria-labelledby"] == "string" ? p.value["aria-labelledby"] : void 0,
			loading: e.loading,
			intent: "input",
			"edit-mode": L(T),
			"read-pretty": L(E),
			empty: L(O).isEmpty(k.value),
			"empty-text": L(O).emptyText.value,
			"popup-container": e.popupContainer,
			text: e.type === "password" && k.value ? "••••••" : k.value ?? "",
			placeholder: e.placeholder,
			label: e.ariaLabel || (typeof p.value["aria-label"] == "string" ? p.value["aria-label"] : void 0) || L(ee),
			open: j.value,
			disabled: L(_),
			readonly: L(v),
			"need-confirm": !0,
			pending: L(oe).pending.value,
			error: L(oe).error.value || L(D)?.message?.value,
			commit: ce,
			onOpen: ae,
			onCancel: se,
			onConfirm: ce
		}, pa({
			default: z(() => [Y(L(CS), {
				id: m.value,
				loading: e.loading || L(oe).pending.value,
				"loading-mode": e.loadingMode,
				value: L(ue).isComposing.value ? u.value?.value : L(N),
				variant: C.value,
				size: L(g),
				disabled: L(_) || L(oe).pending.value,
				readonly: L(v),
				error: ye.value,
				focused: L(de),
				placeholder: e.placeholder,
				hint: w.value,
				line: e.line,
				clearable: e.clearable,
				composing: L(ue).isComposing.value,
				"text-color": e.textColor,
				"focus-color": e.focusColor,
				"blur-color": e.blurColor,
				onClear: Ee
			}, pa({
				default: z(() => [J("input", Z(p.value, {
					id: L(T) === "direct" || j.value ? m.value : void 0,
					ref_key: "inputRef",
					ref: u,
					"aria-busy": e.loading || L(oe).pending.value || p.value["aria-busy"] || void 0,
					autocomplete: L(l) && p.value.autocomplete === "one-time-code" ? "one-time-code" : "off",
					class: L(o)("inner"),
					value: L(ue).isComposing.value ? u.value?.value : L(N),
					type: e.type === "number" ? "text" : e.type,
					disabled: L(_) || L(oe).pending.value,
					readonly: L(v),
					maxlength: void 0,
					placeholder: w.value ? void 0 : e.placeholder,
					"aria-label": e.ariaLabel ?? p.value["aria-label"],
					"aria-describedby": L(i)(p.value["aria-describedby"]),
					"aria-invalid": ye.value ? !0 : p.value["aria-invalid"],
					autofocus: e.autofocus,
					enterkeyhint: e.enterkeyhint,
					inputmode: e.type === "number" ? "decimal" : p.value.inputmode,
					onInput: xe,
					onKeydown: Te,
					onFocus: Ce,
					onBlur: we,
					onCompositionstart: t[0] ||= (...e) => L(ue).start && L(ue).start(...e),
					onCompositionend: Se
				}), null, 16, FS)]),
				_: 2
			}, [
				e.$slots.prefix ? {
					name: "prefix",
					fn: z(() => [U(e.$slots, "prefix")]),
					key: "0"
				} : void 0,
				e.$slots["clear-icon"] ? {
					name: "clear-icon",
					fn: z((t) => [U(e.$slots, "clear-icon", he(ws(t)))]),
					key: "1"
				} : void 0,
				e.$slots.suffix || L(fe) && e.showWordLimit || L(b) ? {
					name: "suffix",
					fn: z(() => [
						L(fe) && e.showWordLimit ? (G(), K("span", {
							key: 0,
							class: P(L(o)("word-limit"))
						}, F(L(me)) + "/" + F(L(fe)), 3)) : X("", !0),
						U(e.$slots, "suffix"),
						Y(wS, { status: L(b) }, null, 8, ["status"])
					]),
					key: "2"
				} : void 0
			]), 1032, [
				"id",
				"loading",
				"loading-mode",
				"value",
				"variant",
				"size",
				"disabled",
				"readonly",
				"error",
				"focused",
				"placeholder",
				"hint",
				"line",
				"clearable",
				"composing",
				"text-color",
				"focus-color",
				"blur-color"
			])]),
			_: 2
		}, [e.$slots.read ? {
			name: "read",
			fn: z(() => [U(e.$slots, "read", { value: k.value })]),
			key: "0"
		} : void 0]), 1032, [
			"id",
			"aria-describedby",
			"aria-labelledby",
			"loading",
			"edit-mode",
			"read-pretty",
			"empty",
			"empty-text",
			"popup-container",
			"text",
			"placeholder",
			"label",
			"open",
			"disabled",
			"readonly",
			"pending",
			"error"
		])], 16, PS));
	}
}), jS), LS = /* @__PURE__ */ H({
	__name: "PageInput",
	props: {
		modelValue: {},
		size: {},
		disabled: { type: Boolean },
		label: {}
	},
	emits: ["update:modelValue", "commit"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (G(), q(L(IS), {
			"edit-mode": "direct",
			"model-value": e.modelValue,
			size: e.size,
			disabled: e.disabled,
			variant: "standard",
			clearable: !1,
			hint: !1,
			"input-attrs": {
				inputmode: "numeric",
				"aria-label": e.label
			},
			"onUpdate:modelValue": r[0] ||= (e) => n("update:modelValue", e ?? ""),
			onBlur: r[1] ||= (e) => n("commit"),
			onKeydown: r[2] ||= gu(mu((e) => n("commit"), ["prevent"]), ["enter"])
		}, null, 8, [
			"model-value",
			"size",
			"disabled",
			"input-attrs"
		]));
	}
}), RS = /* @__PURE__ */ H({
	name: $("pagination-jumper").name,
	__name: "PageJumper",
	props: {
		modelValue: {
			type: String,
			required: !0
		},
		isMigrating: {
			type: Function,
			required: !0
		},
		current: {
			type: Number,
			required: !0
		},
		pages: {
			type: Number,
			required: !0
		},
		simple: Boolean,
		disabled: Boolean,
		size: String
	},
	emits: ["change", "update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, { n: i, classes: a } = $("pagination"), o = _x(), s = Q({
			get: () => n.modelValue,
			set: (e) => r("update:modelValue", e)
		}), c = () => {
			s.value = String(n.current);
		}, l = !1;
		async function u() {
			if (n.disabled || l || n.isMigrating()) return;
			let e = s.value.trim();
			if (!/^\d+$/.test(e) || !Number.isFinite(Number(e))) {
				c();
				return;
			}
			l = !0;
			let t = tx(Number(e), {
				min: 1,
				max: n.pages
			});
			t !== n.current && r("change", t), await R(), c(), l = !1;
		}
		return (t, n) => (G(), K("span", { class: P(L(a)(L(i)("jumper"), [e.simple, L(i)("jumper--simple")])) }, [
			e.simple ? X("", !0) : (G(), K("span", {
				key: 0,
				class: P(L(i)("jumper-prepend"))
			}, [U(t.$slots, "jumper-prepend", {}, () => [Es(F(L(o).goto), 1)])], 2)),
			Y(LS, {
				modelValue: s.value,
				"onUpdate:modelValue": n[0] ||= (e) => s.value = e,
				class: P(L(i)("input")),
				size: e.size,
				disabled: e.disabled || !e.pages,
				label: L(o).goto,
				onCommit: u
			}, null, 8, [
				"modelValue",
				"class",
				"size",
				"disabled",
				"label"
			]),
			t.$slots["jumper-append"] ? (G(), K("span", {
				key: 1,
				class: P(L(i)("jumper-append"))
			}, [U(t.$slots, "jumper-append")], 2)) : X("", !0),
			e.simple ? (G(), K("span", {
				key: 2,
				class: P(L(i)("page-count"))
			}, "/ " + F(e.pages), 3)) : X("", !0)
		], 2));
	}
}), zS = { label: { type: String } }, { name: BS } = $("optgroup"), VS = /* @__PURE__ */ H({
	name: BS,
	props: zS,
	setup() {
		return {
			prefixCls: Uf("select-group"),
			titleId: `select-group-${Zp()}`
		};
	}
}), HS = ["aria-labelledby"], US = ["id"];
function WS(e, t, n, r, i, a) {
	return G(), K("li", {
		class: P(e.prefixCls),
		role: "group",
		"aria-labelledby": e.titleId
	}, [J("div", {
		id: e.titleId,
		class: P(`${e.prefixCls}-title`),
		role: "presentation"
	}, [U(e.$slots, "label", {}, () => [Es(F(e.label), 1)])], 10, US), J("ul", {
		class: P(`${e.prefixCls}-options`),
		role: "presentation"
	}, [U(e.$slots, "default")], 2)], 10, HS);
}
var GS = /* @__PURE__ */ o_(VS, [["render", WS]]), KS = (e, t) => {
	if (!e || !t) return !1;
	let n = Object.keys(e);
	if (n.length !== Object.keys(t).length) return !1;
	for (let r of n) if (!(Object.prototype.hasOwnProperty.call(t, r) && JS(e[r], t[r]))) return !1;
	return !0;
}, qS = (e, t) => {
	if (!e || !t) return !1;
	let { length: n } = e;
	if (n !== t.length) return !1;
	for (let r = 0; r < n; r++) if (!JS(e[r], t[r])) return !1;
	return !0;
}, JS = (e, t) => {
	let n = Object.prototype.toString.call(e);
	return n === Object.prototype.toString.call(t) ? n === "[object Object]" ? KS(e, t) : n === "[object Array]" ? qS(e, t) : e === t : !1;
}, YS = (e) => Number.isFinite(e) && Number.isInteger(e) && e >= 0, XS = (e) => Number.isFinite(e) && e >= 0, ZS = {
	type: String,
	default: "field",
	validator: (e) => e === "field" || e === "icon"
};
function QS(e, t = "field") {
	if (e.defaultPrevented) return !1;
	let n = e.target;
	if (!n?.closest) return !1;
	if (n.closest("[data-field-open-trigger]")) return !0;
	if (t === "icon" || n.closest("button,a,[role=\"button\"]") || n instanceof HTMLInputElement && n.selectionStart !== n.selectionEnd) return !1;
	let r = n.ownerDocument.getSelection();
	return !r || r.isCollapsed || !r.containsNode(n, !0);
}
function $S(e) {
	e.stopPropagation(), Cm(e);
}
// packages/ui/es/_utils/form-control.mjs
var eC = [
	"filled",
	"outline",
	"standard"
], tC = {
	..._S,
	needConfirm: {
		type: Boolean,
		default: void 0
	},
	openTriggerTarget: ZS,
	caseSensitive: {
		type: Boolean,
		default: !1
	},
	searchFields: {
		type: Array,
		default: () => ["label"]
	},
	showTags: {
		type: Boolean,
		default: !0
	},
	separator: {
		type: String,
		default: ","
	},
	textAlign: { type: String },
	editMode: Og,
	readPretty: jg,
	emptyValues: gg,
	emptyText: _g,
	beforeCommit: Mg,
	readonly: {
		type: Boolean,
		default: void 0
	},
	hint: vS.hint,
	line: vS.line,
	textColor: vS.textColor,
	focusColor: vS.focusColor,
	blurColor: vS.blurColor,
	autoFitPopupWidth: {
		type: Boolean,
		default: !0
	},
	multiple: {
		type: Boolean,
		default: !1
	},
	modelValue: {
		type: [
			String,
			Number,
			Boolean,
			Object,
			Array
		],
		default: void 0
	},
	defaultValue: {
		type: [
			String,
			Number,
			Boolean,
			Object,
			Array
		],
		default: (e) => e.multiple ? [] : ""
	},
	inputValue: { type: String },
	defaultInputValue: {
		type: String,
		default: ""
	},
	size: {
		type: String,
		validator: (e) => rv.includes(e)
	},
	variant: {
		type: String,
		validator: (e) => eC.includes(e)
	},
	placeholder: String,
	disabled: {
		type: Boolean,
		default: void 0
	},
	error: {
		type: Boolean,
		default: void 0
	},
	emptyValue: {
		type: [
			String,
			Number,
			Boolean,
			Object,
			Array,
			Function
		],
		default: void 0
	},
	clearable: {
		type: Boolean,
		default: !0
	},
	filterable: {
		type: [Boolean, Object],
		default: (e) => !!e.multiple
	},
	creatable: {
		type: Boolean,
		default: !1
	},
	maxTagCount: {
		type: Number,
		validator: YS,
		default: 0
	},
	popupContainer: tm,
	defaultActiveFirstOption: {
		type: Boolean,
		default: !0
	},
	open: {
		type: Boolean,
		default: void 0
	},
	defaultOpen: {
		type: Boolean,
		default: !1
	},
	unmountOnClose: {
		type: Boolean,
		default: !1
	},
	filterOption: {
		type: [Boolean, Function],
		default: void 0
	},
	options: {
		type: [Array, Function],
		default: void 0
	},
	virtualListProps: { type: Object },
	triggerProps: { type: Object },
	formatLabel: { type: Function },
	fallbackOption: {
		type: [Boolean, Function],
		default: !0
	},
	showExtraOptions: {
		type: Boolean,
		default: !0
	},
	searchDelay: {
		type: Number,
		validator: XS,
		default: 500
	},
	limit: {
		type: Number,
		validator: YS,
		default: 0
	},
	fieldNames: { type: Object },
	scrollbar: {
		type: [Boolean, Object],
		default: !0
	},
	showHeaderOnEmpty: {
		type: Boolean,
		default: !1
	},
	showFooterOnEmpty: {
		type: Boolean,
		default: !1
	},
	tagNowrap: {
		type: Boolean,
		default: !1
	}
}, nC = {
	value: {
		type: [
			String,
			Number,
			Boolean,
			Object
		],
		default: void 0
	},
	label: String,
	disabled: Boolean,
	tagProps: { type: Object },
	index: { type: Number }
}, rC = Symbol("CedarSelectContext");
// packages/ui/es/_utils/option-data.mjs
function iC(e, t, n = !1) {
	let r = String(e ?? "");
	return n ? r.includes(t) : r.toLowerCase().includes(t.toLowerCase());
}
// packages/ui/es/select/utils.mjs
var aC = (e) => Yf(e) && "isGroup" in e, oC = (e) => Yf(e) && "isGroup" in e, sC = (e, t = "value") => String(Yf(e) ? e[t] : e), cC = (e, t = "value") => {
	if (Yf(e)) {
		let n = e[t];
		return `option:object:${JSON.stringify([typeof n, n])}`;
	}
	return e || Zf(e) || Xf(e) || Jf(e) ? `option:${JSON.stringify([typeof e, e])}` : "";
}, lC = (e) => e.has(cC("")), uC = (e, { fieldNames: t, origin: n, index: r = -1 }) => {
	if (Yf(e)) {
		let i = e[t.value];
		return {
			raw: e,
			index: r,
			key: cC(i, t.value),
			origin: n,
			value: i,
			label: e[t.label] ?? sC(i, t.value),
			render: e[t.render],
			disabled: !!e[t.disabled],
			tagProps: e[t.tagProps]
		};
	}
	let i = {
		value: e,
		label: String(e),
		disabled: !1
	};
	return {
		raw: i,
		index: r,
		key: cC(e, t.value),
		origin: n,
		...i
	};
}, dC = (e, { fieldNames: t, origin: n, optionInfoMap: r }) => {
	let i = [];
	for (let a of e) if (aC(a)) {
		let e = dC(a.options ?? [], {
			fieldNames: t,
			origin: n,
			optionInfoMap: r
		});
		e.length > 0 && i.push({
			...a,
			key: `__arco__group__${a.label}`,
			options: e
		});
	} else {
		let e = uC(a, {
			fieldNames: t,
			origin: n
		});
		i.push(e), r.get(e.key) || r.set(e.key, e);
	}
	return i;
}, fC = (e, { inputValue: t, filterOption: n, caseSensitive: r, searchFields: i }) => {
	let a = (e) => {
		let o = [];
		for (let s of e) if (oC(s)) {
			let e = a(s.options ?? []);
			e.length > 0 && o.push({
				...s,
				options: e
			});
		} else pC(s, {
			inputValue: t,
			filterOption: n,
			caseSensitive: r,
			searchFields: i
		}) && o.push(s);
		return o;
	};
	return a(e);
}, pC = (e, { inputValue: t, filterOption: n, caseSensitive: r, searchFields: i }) => $f(n) ? !t || n(t, e.raw) : !n || !t || (i ?? ["label"]).some((n) => iC(e[n], t, r)), { name: mC } = $("option"), hC = /* @__PURE__ */ H({
	name: mC,
	components: { IconCheck: uS },
	props: {
		...nC,
		internal: Boolean
	},
	setup(e) {
		let { disabled: t, tagProps: n, index: r } = /* @__PURE__ */ vn(e), i = Uf("select-option"), a = B(rC, void 0), o = Ls(), s = /* @__PURE__ */ I(), c = /* @__PURE__ */ I(n.value);
		V(n, (e, t) => {
			JS(e, t) || (c.value = e);
		});
		let l = /* @__PURE__ */ I(""), u = Q(() => e.value ?? e.label ?? l.value), d = Q(() => e.label ?? l.value), f = Q(() => cC(u.value, a?.fieldNames?.value)), p = Q(() => a?.component ?? "li"), m = () => {
			if (!e.label && s.value) {
				let e = s.value.textContent ?? "";
				l.value !== e && (l.value = e);
			}
		};
		Yi(() => m()), Zi(() => m());
		let h = Q(() => a?.valueKeys.includes(f.value) ?? !1), g = Q(() => e.internal || a?.component !== "div" ? a?.getOptionId?.(f.value) : void 0), _ = Q(() => a?.activeKey === f.value), v = /* @__PURE__ */ Jt({
			raw: {
				value: u,
				label: d,
				disabled: t,
				tagProps: c
			},
			ref: s,
			index: r,
			key: f,
			origin: "slot",
			value: u,
			label: d,
			disabled: t,
			tagProps: c
		}), y = Q(() => e.internal || pC(v, {
			inputValue: a?.inputValue,
			filterOption: a?.filterOption,
			caseSensitive: a?.caseSensitive,
			searchFields: a?.searchFields
		}));
		return e.internal || (o && a?.addSlotOptionInfo(o.uid, v), Qi(() => {
			o && a?.removeSlotOptionInfo(o.uid);
		})), {
			optionId: g,
			prefixCls: i,
			cls: Q(() => [i, {
				[`${i}-disabled`]: e.disabled,
				[`${i}-selected`]: h.value,
				[`${i}-active`]: _.value,
				[`${i}-multiple`]: a?.multiple
			}]),
			selectCtx: a,
			itemRef: s,
			component: p,
			isSelected: h,
			isValid: y,
			handleClick: (t) => {
				e.disabled || a?.onSelect(f.value, t);
			},
			handleMouseEnter: () => {
				e.disabled || a?.setActiveKey(f.value);
			},
			handleMouseLeave: () => {
				e.disabled || a?.setActiveKey();
			}
		};
	}
});
// packages/ui/es/select/Option.vue.mjs
function gC(e, t, n, r, i, a) {
	let o = oa("IconCheck");
	return gr((G(), q(ca(e.component), {
		id: e.optionId,
		ref: "itemRef",
		class: P([e.cls, { [`${e.prefixCls}-has-suffix`]: !!e.$slots.suffix }]),
		role: "option",
		"aria-selected": e.isSelected,
		"aria-disabled": e.disabled,
		onClick: e.handleClick,
		onMouseenter: e.handleMouseEnter,
		onMouseleave: e.handleMouseLeave
	}, {
		default: z(() => [
			e.$slots.icon ? (G(), K("span", {
				key: 0,
				class: P(`${e.prefixCls}-icon`)
			}, [U(e.$slots, "icon")], 2)) : X("", !0),
			J("span", { class: P(`${e.prefixCls}-content`) }, [U(e.$slots, "default", { selected: e.isSelected }, () => [Es(F(e.label), 1)])], 2),
			e.$slots.suffix ? (G(), K("span", {
				key: 1,
				class: P(`${e.prefixCls}-suffix`)
			}, [U(e.$slots, "suffix")], 2)) : X("", !0),
			e.isSelected ? (G(), K("span", {
				key: 2,
				class: P(`${e.prefixCls}-check`),
				"aria-hidden": "true"
			}, [Y(o)], 2)) : X("", !0)
		]),
		_: 3
	}, 40, [
		"id",
		"class",
		"aria-selected",
		"aria-disabled",
		"onClick",
		"onMouseenter",
		"onMouseleave"
	])), [[Gc, e.isValid]]);
}
var _C = /* @__PURE__ */ o_(hC, [["render", gC]]), vC = Symbol("select-native-editor-owner"), yC = /* @__PURE__ */ H({
	name: $("select-native-editor-owner").name,
	props: { install: {
		type: Function,
		required: !0
	} },
	setup(e, { slots: t }) {
		return e.install(), () => t.default?.();
	}
}), bC = Symbol("selection-list-style"), xC = Symbol("selection-editor-surface"), SC = [
	"aria-expanded",
	"aria-controls",
	"aria-label"
], CC = {
	key: 0,
	"aria-hidden": "true"
}, wC = { role: "status" }, TC = {
	key: 1,
	"aria-hidden": "true"
}, EC = {
	key: 1,
	role: "status"
}, DC = ["disabled"], OC = ["id", "aria-label"], kC = [
	"disabled",
	"aria-label",
	"onClick"
], AC = ["aria-label"], jC = [
	"disabled",
	"aria-label",
	"onClick"
], MC = /* @__PURE__ */ H({
	name: $("selected-options").name,
	__name: "SelectedOptions",
	props: {
		open: { type: Boolean },
		multiple: { type: Boolean },
		items: {},
		disabled: { type: Boolean },
		limit: {}
	},
	emits: ["remove", "clear"],
	setup(e) {
		let t = e, { n } = $("selected-options"), r = kv(), i = /* @__PURE__ */ I(!1), a = Zp();
		V(() => t.open, (e) => {
			e === !1 && (i.value = !1);
		});
		let o = Q(() => (r.selectionCount.value ?? "{count}").replace("{count}", String(t.items.length)) + (t.limit ? ` / ${t.limit}` : "")), s = Q(() => t.items.some((e) => e.closable !== !1)), c = (e) => typeof e.label == "string" || typeof e.label == "number" ? String(e.label) : String(e.key), l = (e) => e.value, u = B(xC, void 0);
		return vr(bC, !0), (t, d) => e.multiple && L(u) ? (G(), K("div", {
			key: 0,
			class: P(L(n)())
		}, [
			J("div", { class: P(L(n)("summary")) }, [L(!1) ? (G(), K("button", {
				key: 0,
				type: "button",
				class: P(L(n)("toggle")),
				"aria-expanded": i.value,
				"aria-controls": L(a),
				"aria-label": i.value ? L(r).selectionBack.value : o.value,
				onClick: d[0] ||= (e) => i.value = !i.value
			}, [
				i.value ? (G(), K("span", CC, "‹")) : X("", !0),
				J("span", wC, F(o.value), 1),
				i.value ? X("", !0) : (G(), K("span", TC, "›"))
			], 10, SC)) : (G(), K("span", EC, F(o.value), 1)), J("button", {
				type: "button",
				class: P(L(n)("clear")),
				disabled: e.disabled || !s.value,
				onClick: d[1] ||= (e) => t.$emit("clear", e)
			}, F(L(r).clear.value), 11, DC)], 2),
			L(!1) && i.value ? (G(), K("ul", {
				key: 0,
				id: L(a),
				class: P(L(n)("details")),
				"aria-label": o.value
			}, [(G(!0), K(W, null, fa(e.items, (i) => (G(), K("li", {
				key: i.key,
				class: P(L(n)("item"))
			}, [J("span", { class: P(L(n)("label")) }, [U(t.$slots, "label", { item: i }, () => [Y(l, { value: i.label }, null, 8, ["value"])])], 2), J("button", {
				type: "button",
				class: P(L(n)("remove")),
				disabled: e.disabled || i.closable === !1,
				"aria-label": `${L(r).selectionRemove.value} ${i.text ?? c(i)}`,
				onClick: (e) => t.$emit("remove", i.key)
			}, " × ", 10, kC)], 2))), 128)), e.items.length ? X("", !0) : (G(), K("li", {
				key: 0,
				class: P(L(n)("empty"))
			}, F(L(r).selectionEmpty.value), 3))], 10, OC)) : !L(!1) && e.items.length ? (G(), K("div", {
				key: 1,
				class: P(L(n)("tags")),
				"aria-label": o.value
			}, [(G(!0), K(W, null, fa(e.items, (i) => (G(), K("span", {
				key: i.key,
				class: P(L(n)("tag"))
			}, [J("span", { class: P(L(n)("label")) }, [U(t.$slots, "label", { item: i }, () => [Y(l, { value: i.label }, null, 8, ["value"])])], 2), J("button", {
				type: "button",
				class: P(L(n)("remove")),
				disabled: e.disabled || i.closable === !1,
				"aria-label": `${L(r).selectionRemove.value} ${i.text ?? c(i)}`,
				onClick: (e) => t.$emit("remove", i.key)
			}, " × ", 10, jC)], 2))), 128))], 10, AC)) : X("", !0),
			gr(J("div", { class: P(L(n)("options")) }, [U(t.$slots, "default")], 2), [[Gc, !L(!1) || !i.value]])
		], 2)) : U(t.$slots, "default", {}, void 0, void 0, 1);
	}
}), NC = /* @__PURE__ */ H({
	name: $("selection-editor").name,
	__name: "SelectionEditor",
	props: { kind: {} },
	setup(e) {
		let { n: t, classes: n } = $("selection-editor");
		return vr(xC, { mobile: !1 }), (r, i) => (G(), K("div", { class: P(L(n)(L(t)(), L(t)(`--${e.kind}`), [
			L(!1),
			L(t)("--mobile"),
			L(t)("--desktop")
		])) }, [U(r.$slots, "default")], 2));
	}
}), PC = /* @__PURE__ */ H({
	name: $("selection-menu-presentation").name,
	__name: "MenuPresentation",
	props: { controller: {} },
	setup(e) {
		return (t, n) => (G(), q(L(Dh), Z({
			trigger: "click",
			placement: "bottom-start",
			animationName: "slide-dynamic-origin",
			autoFitTransformOrigin: !0,
			preventFocus: !0,
			popupOffset: 4,
			autoFitPopupWidth: e.controller.props.autoFitPopupWidth ?? !0,
			unmountOnClose: e.controller.props.unmountOnClose ?? !1,
			closeOnClickReference: !(e.controller.props.filterable || e.controller.props.creatable),
			...e.controller.props.triggerProps,
			...e.controller.props.openTriggerTarget === "icon" ? { trigger: "click" } : {}
		}, {
			open: e.controller.computedOpen,
			disabled: e.controller.mergedDisabled || e.controller.mergedReadonly,
			"popup-container": e.controller.props.popupContainer === void 0 ? e.controller.props.triggerProps?.popupContainer : e.controller.props.popupContainer,
			"onUpdate:open": e.controller.handleOpenChange
		}), {
			content: z(() => [U(t.$slots, "default")]),
			default: z(() => [U(t.$slots, "reference")]),
			_: 3
		}, 16, [
			"open",
			"disabled",
			"popup-container",
			"onUpdate:open"
		]));
	}
});
// packages/ui/es/tag/platform.mjs
function FC(e) {
	let { mergedSize: t } = lv(/* @__PURE__ */ xn(e, "size"));
	return { mergedSize: t };
}
function IC() {
	let { t: e } = Wg();
	return Q(() => e("common.close"));
}
// packages/ui/es/tag/types.mjs
var LC = [
	"red",
	"orangered",
	"orange",
	"gold",
	"lime",
	"green",
	"cyan",
	"blue",
	"brand",
	"purple",
	"pinkpurple",
	"magenta",
	"gray"
], RC = ["default", "outline"], zC = {
	color: String,
	size: {
		type: String,
		default: "md"
	},
	status: {
		type: String,
		default: "default"
	},
	variant: {
		type: String,
		default: "default",
		validator: (e) => RC.includes(e)
	},
	show: {
		type: Boolean,
		default: void 0
	},
	defaultShow: {
		type: Boolean,
		default: !0
	},
	loading: {
		type: Boolean,
		default: !1
	},
	closable: {
		type: Boolean,
		default: !1
	},
	closeButtonAriaLabel: String,
	checkable: {
		type: Boolean,
		default: !1
	},
	modelValue: {
		type: Boolean,
		default: void 0
	},
	defaultValue: {
		type: Boolean,
		default: !0
	},
	nowrap: {
		type: Boolean,
		default: !1
	},
	round: {
		type: Boolean,
		default: !1
	},
	textColor: String
}, BC = [
	"role",
	"aria-checked",
	"aria-disabled",
	"aria-busy",
	"tabindex"
], VC = ["aria-label", "onKeydown"], HC = /* @__PURE__ */ H({
	name: $("tag").name,
	inheritAttrs: !1,
	__name: "Tag",
	props: zC,
	emits: [
		"update:show",
		"update:modelValue",
		"close",
		"check"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, { n: i, classes: a } = $("tag"), { mergedSize: o } = FC(n), s = IC(), c = Q(() => n.color && LC.includes(n.color)), l = Q(() => n.color && !LC.includes(n.color)), u = /* @__PURE__ */ I(n.defaultShow), d = /* @__PURE__ */ I(n.defaultValue), f = Q(() => n.show ?? u.value), p = Q(() => n.checkable ? n.modelValue ?? d.value : !0), m = /* @__PURE__ */ I(), h = /* @__PURE__ */ I();
		V(() => n.loading, async (e) => {
			let t = h.value, r = t?.ownerDocument;
			e && t && r && t.contains(r.activeElement) && (await R(), n.loading && m.value?.isConnected && (!r.activeElement || r.activeElement === r.body) && m.value.focus());
		});
		let g = (e) => {
			n.loading || (u.value = !1, r("update:show", !1), r("close", e));
		}, _ = (e) => {
			let t = e.target?.closest?.("a[href], button, input, select, textarea, [contenteditable]:not([contenteditable=\"false\"]), [role=\"button\"], [role=\"link\"], [role=\"checkbox\"], [role=\"switch\"]");
			if (!(t && t !== e.currentTarget) && n.checkable && !n.loading) {
				let t = !p.value;
				d.value = t, r("update:modelValue", t), r("check", t, e);
			}
		}, v = (e) => {
			n.checkable && !n.loading && e.target === e.currentTarget && (e.preventDefault(), e.currentTarget.click());
		}, y = (e) => {
			e.currentTarget.click();
		}, b = Q(() => a(i(), i(`--size-${o.value}`), i(`--variant-${n.variant}`), [n.status && !c.value && !l.value, i(`--status-${n.status}`)], [n.loading, i("--loading")], [!f.value, i("--hide")], [c.value, i(`--${n.color}`)], [n.checkable, i("--checkable")], [p.value, i("--checked")], [n.nowrap, i("--nowrap")], [n.round, i("--round")], [l.value, i("--custom-color")])), x = Q(() => l.value ? n.variant === "outline" ? {
			color: n.textColor || n.color,
			borderColor: n.color,
			backgroundColor: "transparent"
		} : {
			background: n.color,
			color: n.textColor,
			borderColor: n.color
		} : n.textColor ? { color: n.textColor } : void 0);
		return (e, t) => (G(), q(Dc, { name: L(i)() + "-fade" }, {
			default: z(() => [f.value ? (G(), K("span", Z({
				key: 0,
				ref_key: "rootRef",
				ref: m
			}, e.$attrs, {
				class: b.value,
				style: x.value,
				role: e.checkable ? "checkbox" : void 0,
				"aria-checked": e.checkable ? p.value : void 0,
				"aria-disabled": e.checkable && e.loading ? !0 : void 0,
				"aria-busy": e.loading ? !0 : void 0,
				tabindex: e.checkable ? 0 : e.loading ? -1 : void 0,
				onClick: _,
				onKeydown: [gu(v, ["enter"]), gu(v, ["space"])]
			}), [
				e.$slots.icon ? (G(), K("span", {
					key: 0,
					class: P(L(a)(L(i)("icon")))
				}, [U(e.$slots, "icon")], 2)) : X("", !0),
				e.nowrap ? (G(), K("span", {
					key: 1,
					class: P(L(a)(L(i)("text")))
				}, [U(e.$slots, "default")], 2)) : U(e.$slots, "default", {}, void 0, void 0, 2),
				e.closable && !e.loading ? (G(), K("span", {
					key: 3,
					ref_key: "closeRef",
					ref: h,
					role: "button",
					"aria-label": e.closeButtonAriaLabel ?? L(s),
					tabindex: "0",
					class: P(L(a)(L(i)("close-btn"))),
					onClick: mu(g, ["stop"]),
					onKeydown: [gu(mu(y, ["prevent", "stop"]), ["enter"]), gu(mu(y, ["prevent", "stop"]), ["space"])]
				}, [U(e.$slots, "close-icon", {}, () => [Y(L(mS))])], 42, VC)) : X("", !0),
				e.loading ? (G(), K("span", {
					key: 4,
					class: P(L(a)(L(i)("loading-icon")))
				}, [Y(L(Kp))], 2)) : X("", !0)
			], 16, BC)) : X("", !0)]),
			_: 3
		}, 8, ["name"]));
	}
}), UC = Vf(HC, Object.assign(HC, {}), { components: [HC] }), WC = {
	openTriggerTarget: ZS,
	openTriggerTabIndex: Number,
	...vS,
	items: {
		type: Array,
		default: () => []
	},
	multiple: Boolean,
	showTags: {
		type: Boolean,
		default: !0
	},
	separator: {
		type: String,
		default: ","
	},
	inputValue: {
		type: String,
		default: ""
	},
	searchable: Boolean,
	open: Boolean,
	loading: Boolean,
	maxTagCount: {
		type: Number,
		default: 0
	},
	tagNowrap: Boolean,
	textAlign: { type: String }
}, GC = ["tabindex", "role"], KC = /* @__PURE__ */ H({
	name: $("selection-tag-label").name,
	__name: "SelectionTagLabel",
	props: { disabled: Boolean },
	setup(e) {
		let t = e, { n, classes: r } = $("selection-field"), i = /* @__PURE__ */ I(), a = /* @__PURE__ */ I(!1), o = /* @__PURE__ */ I(""), s = /* @__PURE__ */ I(!1), c, l;
		function u() {
			let e = i.value;
			e && (o.value = e.textContent ?? "", a.value = !!o.value.trim() && e.clientWidth > 0 && e.scrollWidth > e.clientWidth, (!a.value || t.disabled) && (s.value = !1));
		}
		function d() {
			u(), s.value = a.value && !t.disabled;
		}
		function f(e) {
			e.target === e.currentTarget && ["Enter", " "].includes(e.key) && (e.preventDefault(), e.stopPropagation(), d());
		}
		return Yi(() => {
			u(), typeof ResizeObserver < "u" && i.value && (c = new ResizeObserver(u), c.observe(i.value)), typeof MutationObserver < "u" && i.value && (l = new MutationObserver(u), l.observe(i.value, {
				childList: !0,
				subtree: !0,
				characterData: !0
			})), window.addEventListener("resize", u);
		}), Zi(u), V(() => t.disabled, u), Qi(() => {
			c?.disconnect(), l?.disconnect(), window.removeEventListener("resize", u);
		}), (t, c) => (G(), q(L(Vh), {
			open: s.value,
			"onUpdate:open": c[2] ||= (e) => s.value = e,
			"restore-focus": !1,
			content: o.value,
			disabled: e.disabled || !a.value,
			trigger: ["hover", "focus"],
			"scroll-to-close": ""
		}, {
			default: z(() => [J("span", {
				ref_key: "labelRef",
				ref: i,
				class: P(L(r)(L(n)("tag-label"), [a.value && !e.disabled, L(n)("tag-label--truncated")])),
				tabindex: a.value && !e.disabled ? 0 : void 0,
				role: a.value && !e.disabled ? "button" : void 0,
				onMouseenter: u,
				onFocus: d,
				onPointercancel: c[0] ||= (e) => s.value = !1,
				onMousedown: c[1] ||= mu(() => {}, ["stop"]),
				onClick: mu(d, ["stop"]),
				onKeydown: f
			}, [U(t.$slots, "default")], 42, GC)]),
			_: 3
		}, 8, [
			"open",
			"content",
			"disabled"
		]));
	}
}), qC = [
	"id",
	"value",
	"placeholder",
	"disabled",
	"readonly",
	"aria-expanded",
	"aria-invalid",
	"aria-describedby",
	"aria-busy",
	"aria-autocomplete"
], JC = [
	"tabindex",
	"disabled",
	"aria-label",
	"aria-expanded",
	"aria-haspopup",
	"aria-controls"
], YC = /* @__PURE__ */ H({
	name: $("selection-field").name,
	inheritAttrs: !1,
	__name: "SelectionField",
	props: WC,
	emits: [
		"update:inputValue",
		"remove",
		"clear",
		"click",
		"focus",
		"blur",
		"keydown"
	],
	setup(e, { expose: t, emit: n }) {
		let { select: r } = kv(), i = e, { describe: a } = bv(), o = n, { n: s, classes: c } = $("selection-field"), l = /* @__PURE__ */ I(), u = /* @__PURE__ */ I(!1), d = /* @__PURE__ */ I(!1), f = /* @__PURE__ */ I(i.inputValue);
		V(() => i.inputValue, (e) => {
			f.value = e;
		});
		function p(e) {
			QS(e, i.openTriggerTarget) || $S(e), o("click", e);
		}
		let m = Zp(), h = Q(() => i.id ?? m), g = Q(() => !i.disabled && !i.readonly), _ = Q(() => !i.multiple && i.searchable && !!i.inputValue), v = Q(() => i.maxTagCount > 0 ? i.items.slice(0, i.maxTagCount) : i.items), y = Q(() => i.items.length - v.value.length), b = Q(() => i.multiple ? i.items : i.items.slice(0, 1)), x = Q(() => ({
			...Object.fromEntries(Object.keys(vS).map((e) => [e, i[e]])),
			cursor: i.openTriggerTarget === "icon" && !i.disabled && !i.readonly ? "text" : i.cursor,
			id: h.value,
			value: i.items.map((e) => e.value),
			focused: i.focused || u.value || i.open,
			composing: d.value
		})), S = (e) => e.content;
		function C() {
			l.value?.focus();
		}
		function w() {
			l.value?.blur();
		}
		function T(e) {
			if (i.disabled || i.openTriggerTarget === "icon" || e.button !== 0) return;
			let t = e.target;
			t.closest("button,a") || t === l.value || (e.preventDefault(), C());
		}
		function E(e) {
			u.value = !0, o("focus", e);
		}
		function D(e) {
			u.value = !1, o("blur", e);
		}
		function ee(e) {
			if (!g.value || !i.searchable || d.value) return;
			let t = e.target.value;
			t !== f.value && (f.value = t, o("update:inputValue", t));
		}
		function te(e) {
			d.value = !1, ee(e);
		}
		function ne(e) {
			g.value && e.closable !== !1 && o("remove", e.key);
		}
		function O(e) {
			if (!(d.value || e.isComposing || e.keyCode === 229) && g.value) {
				if (e.key === "Backspace" && i.multiple && !i.inputValue) {
					let t = [...i.items].reverse().find((e) => e.closable !== !1);
					t && (e.preventDefault(), ne(t));
				}
				o("keydown", e);
			}
		}
		return t({
			inputRef: l,
			focus: C,
			blur: w
		}), (e, t) => (G(), q(SS, Z(x.value, {
			"decorative-hint": "",
			class: L(c)(L(s)(), [e.multiple, L(s)("--multiple")], [e.tagNowrap, L(s)("--nowrap")], [e.openTriggerTarget === "icon", L(s)("--icon-trigger")]),
			onMousedown: T,
			onClear: t[3] ||= (e) => o("clear", e),
			onClick: p
		}), pa({
			suffix: z(() => [!e.loading || e.loadingMode === "line" ? (G(), K("button", {
				key: 0,
				type: "button",
				"data-field-open-trigger": "",
				tabindex: e.openTriggerTabIndex,
				disabled: e.disabled || e.readonly,
				"aria-label": e.placeholder || L(r),
				"aria-expanded": e.open,
				"aria-haspopup": e.$attrs["aria-haspopup"] ?? "listbox",
				"aria-controls": typeof e.$attrs["aria-controls"] == "string" ? e.$attrs["aria-controls"] : void 0,
				class: P(L(c)(L(s)("icon"), [e.open && !e.searchable, L(s)("icon--open")]))
			}, [e.searchable && e.open ? U(e.$slots, "search-icon", {}, () => [Y(L(Jx))], void 0, 0) : U(e.$slots, "arrow-icon", he(ws({
				focus: u.value,
				menuOpen: e.open
			})), () => [Y(L(Ix))], void 0, 1)], 10, JC)) : X("", !0), U(e.$slots, "suffix")]),
			default: z(() => [J("span", {
				class: P(L(s)("content")),
				style: N({
					"--c-internal-selection-text-align": e.textAlign,
					"--c-internal-selection-justify": e.textAlign ? {
						left: "left",
						center: "center",
						right: "right"
					}[e.textAlign] : void 0
				})
			}, [e.items.length && !_.value ? (G(), K("span", {
				key: 0,
				class: P(L(s)("selection"))
			}, [U(e.$slots, "selected", {}, () => [e.multiple && e.showTags ? (G(), K(W, { key: 0 }, [(G(!0), K(W, null, fa(v.value, (n) => (G(), q(L(UC), Z({ key: n.key }, { ref_for: !0 }, n.tagProps, {
				class: L(s)("tag"),
				show: !0,
				size: n.tagProps?.size ?? "sm",
				nowrap: e.tagNowrap || n.tagProps?.nowrap,
				closable: g.value && n.closable !== !1,
				onMousedown: t[0] ||= mu(() => {}, ["prevent", "stop"]),
				onClick: t[1] ||= mu(() => {}, ["stop"]),
				onClose: (e) => ne(n)
			}), {
				default: z(() => [e.tagNowrap || n.tagProps?.nowrap ? (G(), q(KC, {
					key: 0,
					disabled: e.disabled
				}, {
					default: z(() => [U(e.$slots, "label", { data: n }, () => [Y(S, { content: n.label }, null, 8, ["content"])])]),
					_: 2
				}, 1032, ["disabled"])) : U(e.$slots, "label", { data: n }, () => [Y(S, { content: n.label }, null, 8, ["content"])], void 0, 1)]),
				_: 2
			}, 1040, [
				"class",
				"size",
				"nowrap",
				"closable",
				"onClose"
			]))), 128)), y.value ? (G(), q(L(UC), {
				key: 0,
				class: P(L(s)("summary")),
				show: !0,
				size: "sm"
			}, {
				default: z(() => [Es("+" + F(y.value), 1)]),
				_: 1
			}, 8, ["class"])) : X("", !0)], 64)) : (G(!0), K(W, { key: 1 }, fa(b.value, (t, n) => (G(), K("span", {
				key: t.key,
				class: P(L(s)("label"))
			}, [U(e.$slots, "label", { data: t }, () => [Y(S, { content: t.label }, null, 8, ["content"])]), Es(F(e.multiple && n < b.value.length - 1 ? e.separator : ""), 1)], 2))), 128))])], 2)) : X("", !0), J("input", Z(e.$attrs, {
				id: h.value,
				ref_key: "inputRef",
				ref: l,
				class: L(c)(L(s)("input"), [e.items.length > 0 && !_.value, L(s)("input--with-value")], [!!e.placeholder && (e.hint || e.items.length > 0), L(s)("input--hide-placeholder")]),
				value: e.inputValue,
				placeholder: e.placeholder,
				disabled: e.disabled,
				readonly: !e.searchable || e.readonly,
				"aria-expanded": e.open,
				"aria-invalid": e.error ? !0 : e.$attrs["aria-invalid"],
				"aria-describedby": L(a)(e.$attrs["aria-describedby"]),
				"aria-busy": e.loading || void 0,
				"aria-autocomplete": e.searchable ? "list" : "none",
				role: "combobox",
				autocomplete: "off",
				onFocus: E,
				onBlur: D,
				onInput: ee,
				onCompositionstart: t[2] ||= (e) => d.value = !0,
				onCompositionend: te,
				onKeydown: O
			}), null, 16, qC)], 6)]),
			_: 2
		}, [
			e.$slots.prefix ? {
				name: "prefix",
				fn: z(() => [U(e.$slots, "prefix")]),
				key: "0"
			} : void 0,
			e.$slots["clear-icon"] ? {
				name: "clear-icon",
				fn: z((t) => [U(e.$slots, "clear-icon", he(ws(t)))]),
				key: "1"
			} : void 0,
			e.$slots["loading-icon"] ? {
				name: "loading-icon",
				fn: z(() => [U(e.$slots, "loading-icon")]),
				key: "2"
			} : void 0
		]), 1040, ["class"]));
	}
}), XC = {
	"load-error": (e) => !0,
	focus: (e) => !0,
	blur: (e) => !0,
	keydown: (e) => !0,
	"update:modelValue": (e) => !0,
	"update:inputValue": (e) => !0,
	"update:open": (e) => !0,
	change: (e) => !0,
	"input-value-change": (e) => !0,
	"open-change": (e) => !0,
	clear: (e) => !0,
	remove: (e) => !0,
	search: (e) => !0,
	"dropdown-scroll": (e) => !0,
	"dropdown-reach-bottom": (e) => !0,
	"exceed-limit": (e, t) => !0
};
// packages/ui/es/_components/selection-field/empty-slot.mjs
function ZC() {
	let e = B(Nf, void 0);
	return Q(() => e?.slots.empty);
}
// packages/ui/es/_hooks/use-component-ref.mjs
var QC = (e) => {
	let t = /* @__PURE__ */ I(), n = () => tp(t.value) ? t.value.$refs[e] : t.value, r = /* @__PURE__ */ I();
	return Yi(() => {
		r.value = n();
	}), V([t], () => {
		r.value = n();
	}), {
		componentRef: t,
		elementRef: r
	};
}, $C = (e) => ({
	displayScrollbar: Q(() => !!e.value),
	scrollbarProps: Q(() => {
		if (e.value) return {
			type: "embed",
			...Jf(e.value) ? void 0 : e.value
		};
	})
}), ew = Symbol("skipConfigEmpty");
function tw() {
	let { t: e } = Wg();
	return Q(() => e("empty.description"));
}
function nw(e) {
	let t = B(Nf, void 0), n = B(ew, !1);
	return Q(() => n || e.value || !t?.slots.empty ? null : t.slots.empty({ component: "empty" }) ?? null);
}
function rw() {
	vr(ew, !0);
}
// packages/ui/es/empty/props.mjs
function iw(e) {
	return typeof e == "string" && rv.includes(e);
}
var aw = {
	description: String,
	imageUrl: String,
	alt: {
		type: String,
		default: ""
	},
	imageSize: {
		type: [String, Number],
		default: "md"
	},
	showIcon: {
		type: Boolean,
		default: !0
	},
	showDescription: {
		type: Boolean,
		default: !0
	}
}, ow = ["src", "alt"], sw = /* @__PURE__ */ H({
	name: $("empty").name,
	__name: "Empty",
	props: aw,
	emits: ["click"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Oa(), { n: a, classes: o } = $("empty"), s = tw(), c = Q(() => iw(n.imageSize) ? n.imageSize : ""), l = Q(() => o(a("image"), c.value ? a(`image--${c.value}`) : void 0)), u = Q(() => {
			if (c.value) return {};
			let e = typeof n.imageSize == "number" ? `${n.imageSize}px` : n.imageSize;
			return {
				width: e,
				height: e,
				fontSize: e
			};
		}), d = /* @__PURE__ */ I(!1);
		function f() {
			d.value = !!(i.default || i.image || i.extra || n.imageUrl || n.description);
		}
		f(), Xi(f);
		let p = nw(d), m = /* @__PURE__ */ H({
			name: "ConfigEmptyNodes",
			props: { nodes: {
				type: [Array, Object],
				required: !0
			} },
			setup(e) {
				return rw(), () => e.nodes;
			}
		});
		function h(e) {
			r("click", e);
		}
		return (e, t) => L(p) ? (G(), K("div", {
			key: 0,
			style: { display: "contents" },
			onClick: h
		}, [(G(), q(ca(L(m)), { nodes: L(p) }, null, 8, ["nodes"]))])) : (G(), K("div", {
			key: 1,
			class: P(L(a)()),
			onClick: h
		}, [
			e.showIcon ? (G(), K("div", {
				key: 0,
				class: P(l.value),
				style: N(u.value)
			}, [U(e.$slots, "image", {}, () => [e.imageUrl ? (G(), K("img", {
				key: 0,
				src: e.imageUrl,
				alt: e.alt
			}, null, 8, ow)) : (G(), q(L(Wx), { key: 1 }))])], 6)) : X("", !0),
			e.showDescription ? (G(), K("div", {
				key: 1,
				class: P(L(a)("description"))
			}, [U(e.$slots, "default", {}, () => [Es(F(e.description || L(s)), 1)])], 2)) : X("", !0),
			e.$slots.extra ? (G(), K("div", {
				key: 2,
				class: P(L(a)("extra"))
			}, [U(e.$slots, "extra")], 2)) : X("", !0)
		], 2));
	}
}), cw = Vf(sw, Object.assign(sw, {}), { components: [sw] }), { name: lw } = $("select-dropdown"), uw = /* @__PURE__ */ H({
	name: lw,
	components: {
		ScrollbarComponent: Hb,
		Empty: cw,
		Loading: Jg
	},
	props: {
		onUserInteraction: Function,
		listboxId: String,
		multiple: Boolean,
		loading: Boolean,
		empty: Boolean,
		virtualList: Boolean,
		bottomOffset: {
			type: Number,
			default: 0
		},
		scrollbar: {
			type: [Boolean, Object],
			default: !0
		},
		onScroll: { type: [Function, Array] },
		onReachBottom: { type: [Function, Array] },
		showHeaderOnEmpty: {
			type: Boolean,
			default: !1
		},
		showFooterOnEmpty: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["scroll", "reach-bottom"],
	setup(e, { emit: t, slots: n }) {
		let { scrollbar: r } = /* @__PURE__ */ vn(e), i = Uf("select-dropdown"), a = ZC(), o = () => a.value?.({ component: "select" }) ?? ic(cw), { componentRef: s, elementRef: c } = QC("containerRef"), { displayScrollbar: l, scrollbarProps: u } = $C(r);
		return {
			prefixCls: i,
			SelectEmpty: o,
			cls: Q(() => [i, {
				[`${i}-has-header`]: !!n.header,
				[`${i}-has-footer`]: !!n.footer
			}]),
			wrapperRef: c,
			wrapperComRef: s,
			handleScroll: (n) => {
				let { scrollTop: r, scrollHeight: i, offsetHeight: a } = n.target;
				i - (r + a) <= e.bottomOffset && t("reach-bottom", n), t("scroll", n);
			},
			displayScrollbar: l,
			scrollbarProps: u
		};
	}
}), dw = [
	"id",
	"role",
	"aria-multiselectable"
], fw = [
	"id",
	"role",
	"aria-multiselectable"
];
function pw(e, t, n, r, i, a) {
	let o = oa("loading");
	return G(), K("div", {
		class: P(e.cls),
		onWheel: t[0] ||= (...t) => e.onUserInteraction && e.onUserInteraction(...t),
		onPointerdown: t[1] ||= (...t) => e.onUserInteraction && e.onUserInteraction(...t),
		onTouchstart: t[2] ||= (...t) => e.onUserInteraction && e.onUserInteraction(...t)
	}, [
		e.$slots.header && (!e.empty || e.showHeaderOnEmpty) ? (G(), K("div", {
			key: 0,
			class: P(`${e.prefixCls}-header`)
		}, [U(e.$slots, "header")], 2)) : X("", !0),
		e.loading ? (G(), q(o, {
			key: 1,
			class: P(`${e.prefixCls}-loading`)
		}, null, 8, ["class"])) : e.empty ? (G(), K("div", {
			key: 2,
			class: P(`${e.prefixCls}-empty`)
		}, [U(e.$slots, "empty", {}, () => [(G(), q(ca(e.SelectEmpty)))])], 2)) : X("", !0),
		e.virtualList && !e.loading && !e.empty ? (G(), K("div", {
			key: 3,
			id: e.listboxId,
			role: e.listboxId ? "listbox" : void 0,
			"aria-multiselectable": e.listboxId ? e.multiple : void 0
		}, [U(e.$slots, "virtual-list")], 8, dw)) : X("", !0),
		e.virtualList ? X("", !0) : (G(), q(ca(e.displayScrollbar ? "ScrollbarComponent" : "div"), Z({
			key: 4,
			ref: "wrapperComRef",
			class: `${e.prefixCls}-list-wrapper`
		}, e.displayScrollbar ? {
			...e.scrollbarProps,
			outerStyle: [e.scrollbarProps?.outerStyle, !e.loading && !e.empty ? void 0 : { display: "none" }]
		} : { style: !e.loading && !e.empty ? void 0 : { display: "none" } }, { onScroll: e.handleScroll }), {
			default: z(() => [J("ul", {
				id: e.listboxId,
				role: e.listboxId ? "listbox" : void 0,
				"aria-multiselectable": e.listboxId ? e.multiple : void 0,
				class: P(`${e.prefixCls}-list`)
			}, [U(e.$slots, "default")], 10, fw)]),
			_: 3
		}, 16, ["class", "onScroll"])),
		e.$slots.footer && (!e.empty || e.showFooterOnEmpty) ? (G(), K("div", {
			key: 5,
			class: P(`${e.prefixCls}-footer`)
		}, [U(e.$slots, "footer")], 2)) : X("", !0)
	], 34);
}
var mw = /* @__PURE__ */ o_(uw, [["render", pw]]);
// packages/ui/es/select/SelectMenu.mjs
function hw(e) {
	return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !vs(e);
}
var gw = /* @__PURE__ */ H({
	name: $("select-menu").name,
	props: { controller: {
		type: Object,
		required: !0
	} },
	setup({ controller: e }, { slots: t }) {
		let n = (e) => {
			if ($f(t.option)) {
				let n = t.option;
				return () => n({ data: e.raw });
			}
			return $f(e.render) ? e.render : () => e.label;
		}, r = (t) => {
			if (oC(t)) {
				let e;
				return Y(GS, {
					key: t.key,
					label: t.label
				}, hw(e = t.options.map((e) => r(e))) ? e : { default: () => [e] });
			}
			return pC(t, {
				inputValue: e.computedInputValue,
				filterOption: e.props.filterOption,
				caseSensitive: e.props.caseSensitive,
				searchFields: e.props.searchFields
			}) ? Y(_C, {
				ref: (n) => {
					n && "$el" in n ? e.optionRefs[t.key] = n.$el : n || delete e.optionRefs[t.key];
				},
				key: t.key,
				value: t.value,
				label: t.label,
				disabled: t.disabled || e.session.pending,
				internal: !0
			}, { default: n(t) }) : null;
		};
		return () => Y(W, null, [e.props.virtualListProps && Y("div", { hidden: !0 }, [t.default?.()]), Y(mw, {
			onUserInteraction: e.cancelPendingInitialScroll,
			listboxId: e.listboxId,
			multiple: e.props.multiple,
			ref: (t) => {
				e.dropdownRef = t;
			},
			loading: e.loading,
			empty: e.validOptionInfos.length === 0,
			virtualList: !!e.props.virtualListProps,
			scrollbar: e.props.scrollbar,
			showHeaderOnEmpty: e.props.showHeaderOnEmpty,
			showFooterOnEmpty: e.props.showFooterOnEmpty,
			onScroll: e.handleDropdownScroll,
			"onReach-bottom": e.handleDropdownReachBottom
		}, {
			default: () => [...t.default?.() ?? [], ...e.validOptions.map(r)],
			"virtual-list": () => Y(Eb, Z(e.props.virtualListProps, {
				onScroll: e.handleDropdownScroll,
				"onReach-bottom": e.handleDropdownReachBottom,
				ref: (t) => {
					e.virtualListRef = t;
				},
				data: [...e.validOptionInfos.filter((e) => e.origin === "slot"), ...e.validOptions]
			}), { item: ({ item: e }) => r(e) }),
			empty: t.empty,
			header: t.header,
			footer: t.footer
		})]);
	}
});
// packages/ui/es/_components/field-presentation/use-field-search.mjs
function _w(e, t, n, r) {
	let i = !0, a = !1, o = 0, s, c = () => {
		o++;
		let e = s;
		s = void 0, e && (e.pending = !1, e.id !== void 0 && clearTimeout(e.id), r?.(!1));
	}, l = () => i && !a && t() && i && !a;
	return V(t, (e) => {
		e || c();
	}, { flush: "sync" }), Bi(() => {
		a || (i = !0);
	}), Qi(() => {
		a = !0, i = !1, c();
	}), Vi(() => {
		i = !1, c();
	}), (t) => {
		c();
		let u = o;
		if (!l() || u !== o) return;
		let d = e();
		if (!l() || u !== o) return;
		let f = { pending: !0 };
		s = f, r?.(!0), f.id = setTimeout(() => {
			if (s === f && f.pending && l() && u === o && s === f && f.pending) {
				f.pending = !1, s = void 0;
				try {
					n(t);
				} finally {
					s || r?.(!1);
				}
			}
		}, d), s === f && f.pending && i && !a || clearTimeout(f.id);
	};
}
// packages/ui/es/_hooks/use-trigger.mjs
var vw = ({ open: e, defaultOpen: t, emit: n }) => {
	let r = /* @__PURE__ */ I(t?.value ?? !1), i = Q(() => e?.value ?? r.value);
	return V(i, (e) => {
		r.value !== e && (r.value = e);
	}), {
		computedOpen: i,
		handleOpenChange: (e) => {
			e !== i.value && (r.value = e, n("update:open", e), n("open-change", e));
		}
	};
}, yw = (e, t) => {
	let n = e.getBoundingClientRect(), r = t.getBoundingClientRect();
	return {
		top: n.top - r.top,
		bottom: r.bottom - n.bottom,
		left: n.left - r.left,
		right: r.right - n.right,
		width: n.width,
		height: n.height
	};
}, bw = {
	ENTER: "Enter",
	ESC: "Escape",
	SPACE: " ",
	ARROW_UP: "ArrowUp",
	ARROW_DOWN: "ArrowDown",
	ARROW_LEFT: "ArrowLeft",
	ARROW_RIGHT: "ArrowRight"
}, xw = (e) => JSON.stringify({
	key: e.key,
	ctrl: !!e.ctrl,
	shift: !!e.shift,
	alt: !!e.alt,
	meta: !!e.meta
}), Sw = (e) => {
	let t = {};
	return e.forEach((e, n) => {
		let r = Xf(n) ? { key: n } : n;
		t[xw(r)] = e;
	}), (e) => {
		let n = xw({
			key: e.key,
			ctrl: e.ctrlKey,
			shift: e.shiftKey,
			alt: e.altKey,
			meta: e.metaKey
		}), r = t[n];
		r && (e.stopPropagation(), r(e));
	};
}, Cw = {
	value: "value",
	label: "label",
	disabled: "disabled",
	tagProps: "tagProps",
	render: "render"
}, ww = ({ options: e, extraOptions: t, inputValue: n, filterOption: r, caseSensitive: i, searchFields: a, showExtraOptions: o, fieldNames: s }) => {
	let c = Q(() => ({
		...Cw,
		...s?.value
	})), l = /* @__PURE__ */ Jt(/* @__PURE__ */ new Map()), u = Q(() => Array.from(l.values()).sort((e, t) => Zf(e.index) && Zf(t.index) ? e.index - t.index : 0)), d = Q(() => {
		let t = /* @__PURE__ */ new Map();
		return {
			optionInfos: dC(e?.value ?? [], {
				fieldNames: c.value,
				origin: "options",
				optionInfoMap: t
			}),
			optionInfoMap: t
		};
	}), f = Q(() => {
		let e = /* @__PURE__ */ new Map();
		return {
			optionInfos: dC(t?.value ?? [], {
				fieldNames: c.value,
				origin: "extraOptions",
				optionInfoMap: e
			}),
			optionInfoMap: e
		};
	}), p = /* @__PURE__ */ Jt(/* @__PURE__ */ new Map());
	V([
		u,
		e ?? /* @__PURE__ */ I([]),
		t ?? /* @__PURE__ */ I([]),
		c
	], () => {
		p.clear(), u.value.forEach((e, t) => {
			p.set(e.key, {
				...e,
				index: t
			});
		}), d.value.optionInfoMap.forEach((e) => {
			p.has(e.key) || (e.index = p.size, p.set(e.key, e));
		}), f.value.optionInfoMap.forEach((e) => {
			p.has(e.key) || (e.index = p.size, p.set(e.key, e));
		});
	}, {
		immediate: !0,
		deep: !0
	});
	let m = Q(() => {
		let e = fC(d.value.optionInfos, {
			inputValue: n?.value,
			filterOption: r?.value,
			caseSensitive: i?.value,
			searchFields: a?.value
		});
		return (o?.value ?? !0) && e.push(...fC(f.value.optionInfos, {
			inputValue: n?.value,
			filterOption: r?.value,
			caseSensitive: i?.value,
			searchFields: a?.value
		})), e;
	}), h = Q(() => Array.from(p.values()).filter((e) => e.origin === "extraOptions" && o?.value === !1 ? !1 : pC(e, {
		inputValue: n?.value,
		filterOption: r?.value,
		caseSensitive: i?.value,
		searchFields: a?.value
	})));
	return {
		validOptions: m,
		optionInfoMap: p,
		validOptionInfos: h,
		enabledOptionKeys: Q(() => h.value.filter((e) => !e.disabled).map((e) => e.key)),
		getNextSlotOptionIndex: () => l.size,
		addSlotOptionInfo: (e, t) => {
			l.set(e, t);
		},
		removeSlotOptionInfo: (e) => {
			l.delete(e);
		}
	};
}, Tw = {
	value: "value",
	label: "label",
	disabled: "disabled",
	tagProps: "tagProps",
	render: "render"
}, Ew = ({ multiple: e, options: t, extraOptions: n, inputValue: r, filterOption: i, caseSensitive: a, searchFields: o, showExtraOptions: s, component: c, fieldNames: l, loading: u, open: d, valueKeys: f, dropdownRef: p, optionRefs: m, virtualListRef: h, onSelect: g, onOpenChange: _, enterToOpen: v = !0, defaultActiveFirstOption: y, getOptionId: b }) => {
	let x = B(Ig, !1), S = B(Lg, void 0), C = Q(() => ({
		...Tw,
		...l?.value
	})), { validOptions: w, optionInfoMap: T, validOptionInfos: E, enabledOptionKeys: D, getNextSlotOptionIndex: ee, addSlotOptionInfo: te, removeSlotOptionInfo: ne } = ww({
		options: t,
		extraOptions: n,
		inputValue: r,
		filterOption: i,
		caseSensitive: a,
		searchFields: o,
		showExtraOptions: s,
		fieldNames: l
	}), O = /* @__PURE__ */ I(), re = !0, k = !1, A = 0, j, M = !1, ie = () => re && !k;
	Bi(() => {
		k || (re = !0);
	}), Vi(() => {
		re = !1, j = void 0, M = !1, A++;
	}), Qi(() => {
		k = !0, re = !1, j = void 0, M = !1, A++;
	}), V(D, (e) => {
		O.value && e.includes(O.value) || ([O.value] = e);
	});
	let ae = () => {
		(j || M) && (j = void 0, M = !1, A++);
	}, oe = (e) => {
		ie() && (j = void 0, M = !1, A++, O.value = e);
	}, se = (e) => {
		let t = D.value.length;
		if (t === 0) return;
		if (!O.value) return e === "down" ? D.value[0] : D.value[t - 1];
		let n = (t + D.value.indexOf(O.value) + (e === "up" ? -1 : 1)) % t;
		return D.value[n];
	}, ce = (e) => {
		if (!ie() || !d.value || !D.value.includes(e)) return;
		let t = ++A;
		M = !1;
		let n = p?.value, r = h?.value, i = (t) => oC(t) ? t.options.some(i) : t.key === e, a = T.get(e)?.origin === "slot" ? void 0 : w.value.find((e) => oC(e) && i(e));
		if (r) {
			if (a) {
				M = !0;
				let n = () => ie() && d.value && t === A && M && h?.value === r && O.value === e && D.value.includes(e);
				R(() => {
					if (!n()) return;
					let t = w.value.findIndex((e) => oC(e) && i(e));
					if (t < 0) {
						M = !1;
						return;
					}
					let a = E.value.filter((e) => e.origin === "slot").length;
					r.scrollTo({ index: a + t }), R(() => {
						if (!n()) return;
						M = !1;
						let t = r.containerRef, i = m?.value[e];
						if (!t || !i || !t.contains(i)) return;
						let a = t.getBoundingClientRect(), o = i.getBoundingClientRect(), s = t.offsetHeight ? a.height / t.offsetHeight : 1;
						if (!s) return;
						let c = a.top + t.clientTop * s, l = c + t.clientHeight * s, u = o.top < c ? o.top - c : o.bottom > l ? o.bottom - l : 0;
						u && r.scrollTo(t.scrollTop + u / s);
					});
				});
			} else {
				let t = r, n = t.itemKey !== void 0 && t.itemKey !== "key" ? t.data?.findIndex((t) => t.key === e) ?? -1 : -1;
				r.scrollTo(n >= 0 ? { index: n } : { key: e });
			}
		}
		if (!ie() || !d.value || t !== A || p?.value !== n || h?.value !== r) return;
		let o = T.get(e), s = p?.value?.wrapperRef, c = m?.value[e] ?? o?.ref;
		if (!s || !c || s.scrollHeight === s.offsetHeight) return;
		let l = yw(c, s), u = s.scrollTop;
		ie() && d.value && t === A && p?.value === n && h?.value === r && D.value.includes(e) && p?.value?.wrapperRef === s && (m?.value[e] ?? T.get(e)?.ref) === c && (l.top < 0 ? s.scrollTo(0, u + l.top) : l.bottom < 0 && s.scrollTo(0, u - l.bottom));
	};
	V(E, (e) => {
		let t = j;
		if (!t || !ie() || !d.value || f.value[f.value.length - 1] !== t || !e.find((e) => e.key === t && e.origin !== "extraOptions" && !e.disabled)) return;
		let n = O.value, r = ++A, i = p?.value, a = h?.value;
		R(() => {
			!ie() || !d.value || r !== A || j !== t || O.value !== n || f.value[f.value.length - 1] !== t || i && i !== p?.value || a && a !== h?.value || (j = void 0, O.value = t, ce(t));
		});
	}), V(d, (e) => {
		j = void 0;
		let t = ++A;
		if (e && ie()) {
			let e = f.value[f.value.length - 1];
			e && (!D.value.includes(e) || T.get(e)?.origin === "extraOptions") && (j = e);
			let n = y?.value ?? !0 ? D.value[0] : void 0;
			D.value.includes(e) && (n = e), n !== O.value && (O.value = n);
			let r = O.value, i = p?.value, a = h?.value;
			R(() => {
				!ie() || !d.value || t !== A || r && r !== O.value || i && i !== p?.value || a && a !== h?.value || (A++, O.value && ce(O.value));
			});
		}
	}, {
		flush: "sync",
		immediate: !0
	});
	let le = Sw(/* @__PURE__ */ new Map([
		[bw.ENTER, (e) => {
			!u?.value && !e.isComposing && (d.value ? O.value && (g(O.value, e), e.preventDefault()) : v && (_(!0), e.preventDefault()));
		}],
		[bw.ESC, (e) => {
			d.value && (_(!1), e.preventDefault());
		}],
		[bw.ARROW_DOWN, (e) => {
			if (d.value) {
				let t = se("down");
				t && (O.value = t, ce(t)), e.preventDefault();
			}
		}],
		[bw.ARROW_UP, (e) => {
			if (d.value) {
				let t = se("up");
				t && (O.value = t, ce(t)), e.preventDefault();
			}
		}]
	]));
	return vr(rC, /* @__PURE__ */ Jt({
		multiple: e,
		fieldNames: C,
		inputValue: r,
		filterOption: i,
		caseSensitive: a,
		searchFields: o,
		component: c,
		valueKeys: f,
		activeKey: O,
		getOptionId: b,
		setActiveKey: oe,
		onSelect: (e, t) => {
			ie() && d.value && g(e, t);
		},
		getNextSlotOptionIndex: ee,
		addSlotOptionInfo: te,
		removeSlotOptionInfo: ne
	})), {
		validOptions: w,
		optionInfoMap: T,
		validOptionInfos: E,
		enabledOptionKeys: D,
		activeKey: O,
		setActiveKey: oe,
		addSlotOptionInfo: te,
		removeSlotOptionInfo: ne,
		getNextActiveKey: se,
		scrollIntoView: ce,
		cancelPendingInitialScroll: ae,
		handleKeyDown: (e) => {
			e.defaultPrevented || e.isComposing || e.keyCode === 229 || x && !d.value && (e.key === "Escape" || e.key === "Enter" && S?.value) || ie() && ([
				"ArrowDown",
				"ArrowUp",
				"Enter",
				"Escape"
			].includes(e.key) && ae(), le(e));
		}
	};
}, Dw = {
	value: "value",
	label: "label",
	disabled: "disabled",
	tagProps: "tagProps",
	render: "render"
};
function Ow(e, { emit: t }) {
	let n = B(vC, void 0);
	vr(vC, void 0);
	let r = `select-listbox-${Zp()}`, i = (e) => `${r}-option-${encodeURIComponent(e)}`, a = kv(), o = zg(() => e.editMode, () => e.readPretty, kg), s = o.editMode, c = o.readPretty, l = Sg(e, [void 0, null], !!o.item), u = (e) => e != null && !Array.isArray(e) && !l.isEmpty(e);
	V([
		() => e.multiple,
		() => e.emptyValue,
		() => l.emptyValues.value
	], () => {}, { immediate: !0 });
	let { size: d, variant: f, disabled: p, error: m, caseSensitive: h, searchFields: g, multiple: _, open: v, defaultOpen: y, showExtraOptions: b, modelValue: x, fieldNames: S, defaultActiveFirstOption: C } = /* @__PURE__ */ vn(e), { mergedSize: w, mergedDisabled: T, mergedReadonly: E, mergedError: D, feedback: ee, eventHandlers: te, group: ne, hasOuterLabel: O } = MS(e), re = n?.source ?? fg(() => e.options, () => T.value || c.value, (e) => t("load-error", e)), k = re.options, A = /* @__PURE__ */ I(!1), j = Q(() => e.loading || re.loading.value || re.remote.value && A.value), M = Q(() => e.filterOption ?? !re.remote.value), ie = Q(() => e.variant ?? ne?.variant.value ?? "outline"), ae = Q(() => !O.value && e.hint), oe = Q(() => e.virtualListProps ? "div" : "li"), se = Q(() => Yf(e.filterable) && !!e.filterable.retainInputValue), ce = /* @__PURE__ */ I(), le = /* @__PURE__ */ I({}), ue = /* @__PURE__ */ I(), { computedOpen: N, handleOpenChange: de } = vw({
		open: v,
		defaultOpen: y,
		emit: t
	}), fe = Q(() => !c.value && !T.value && !E.value && N.value), pe = (e) => {
		e && (T.value || E.value || c.value) || de(e);
	}, me = /* @__PURE__ */ I(e.defaultValue), P = Q(() => ({
		...Dw,
		...S?.value
	})), he = Q(() => e.modelValue === void 0 ? me.value : e.modelValue), ge = Q(() => s.value !== "direct"), _e = Q(() => e.needConfirm ?? e.multiple), ve = Eg({
		value: () => he.value,
		open: fe,
		deferred: () => ge.value,
		blocked: () => T.value || E.value || j.value || c.value,
		clone: (e) => Array.isArray(e) ? [...e] : e,
		publish: (e) => {
			me.value = e, t("update:modelValue", e), t("change", e), ge.value && o.item?.validate || te.value?.onChange?.();
		},
		cancelOnExternalChange: !0,
		beforeCommit: async (t, n) => {
			if (o.item?.validate && !await o.item.validate(t) || n.aborted) return !1;
			if (!Tg(t, he.value)) return Ag(e.beforeCommit, t, {
				previousValue: he.value,
				signal: n
			});
		},
		valid: () => Ye.value,
		close: () => pe(!1)
	});
	V(() => s.value, () => {
		ve.cancel(), ve.reset();
	}), V([s, c], ([e]) => {
		o.item?.resolved?.(e, c.value), c.value && N.value && de(!1);
	}, {
		immediate: !0,
		flush: "sync"
	}), V([
		T,
		E,
		s,
		c
	], () => {
		(T.value || E.value || c.value) && (de(!1), ve.reset(), (s.value !== "direct" || ge.value) && o.item?.resetValidation?.());
	}, { flush: "sync" });
	let ye = Q(() => {
		let e = he.value;
		return l.isEmpty(e) ? [] : (Array.isArray(e) ? e : e == null ? [] : [e]).map((e) => ({
			value: e,
			key: cC(e, P.value.value)
		}));
	}), be = Q(() => {
		let e = ve.value.value;
		return l.isEmpty(e) ? [] : (Kf(e) ? e : e || Zf(e) || Xf(e) || Jf(e) ? [e] : []).map((e) => ({
			value: e,
			key: cC(e, P.value.value)
		}));
	});
	V(() => e.modelValue, (e) => {
		(Qf(e) || qf(e)) && (me.value = _.value ? [] : e);
	});
	let xe = Q(() => be.value.map((e) => e.key)), Se = n?.selectedOptions ?? /* @__PURE__ */ I(), Ce = (e) => {
		let t = {};
		return e.forEach((e) => {
			t[e] = Ue.get(e);
		}), t;
	}, we = (e) => {
		Se.value = Ce(e);
	}, F = (t) => $f(e.fallbackOption) ? e.fallbackOption(t) : {
		[P.value.value]: t,
		[P.value.label]: String(Yf(t) ? t[P.value.value] : t)
	}, Te = () => {
		let t = [], n = [];
		if (e.creatable || e.fallbackOption) {
			for (let e of be.value) if (!n.includes(e.key) && e.value !== "") {
				let r = Ue.get(e.key);
				r && r.origin !== "extraOptions" || (t.push(e), n.push(e.key));
			}
		}
		if (e.creatable && ke.value) {
			let e = cC(ke.value);
			if (!n.includes(e)) {
				let n = Ue.get(e);
				n && n.origin !== "extraOptions" || t.push({
					value: ke.value,
					key: e
				});
			}
		}
		return t;
	}, Ee = /* @__PURE__ */ I([]), De = Q(() => Ee.value.map((t) => {
		let n = F(t.value), r = Se.value?.[t.key];
		return !Qf(r) && !ep(r) && (n = $f(e.fallbackOption) ? {
			...r,
			...n
		} : {
			...n,
			...r
		}), n;
	})), Oe = /* @__PURE__ */ I(e.defaultInputValue), ke = Q(() => e.inputValue ?? Oe.value);
	V(fe, (e) => {
		!e && !se.value && ke.value && Me("");
	});
	let Ae = (t) => e.multiple ? t.map((e) => Ue.get(e)?.value ?? "") : Ue.get(t[0])?.value ?? (lC(Ue) ? void 0 : ""), je = (e) => {
		let t = Ae(e);
		ve.update(t), we(e);
	}, Me = (e) => {
		Oe.value = e, t("update:inputValue", e), t("input-value-change", e);
	}, Ne = (r, i) => {
		if (!(T.value || E.value || ve.pending.value || c.value || j.value || !Ge.value.includes(r))) {
			if (e.multiple) {
				if (xe.value.includes(r)) {
					let e = xe.value.filter((e) => e !== r);
					je(e);
				} else if (Ge.value.includes(r)) {
					if (e.limit > 0 && xe.value.length >= e.limit) {
						let n = Ue.get(r);
						ve.error.value = `${a.limit.value} ${e.limit}`, t("exceed-limit", n?.value, i);
					} else {
						let e = xe.value.concat(r);
						je(e);
					}
				}
				se.value || Me("");
			} else {
				if (r !== xe.value[0] && je([r]), se.value) {
					let e = Ue.get(r);
					e && Me(e.label);
				}
				ge.value || pe(!1);
			}
			n?.onSelect?.(i), ge.value && !_e.value && ve.commit(i);
		}
	}, Pe = _w(() => e.searchDelay, () => fe.value && !c.value && !T.value && !E.value && !ve.pending.value, (e) => {
		t("search", e), re.search(e);
	}, (e) => {
		A.value = e;
	}), Fe = (t) => {
		c.value || T.value || E.value || ve.pending.value || t !== ke.value && (!fe.value && e.openTriggerTarget !== "icon" && pe(!0), Me(t), e.filterable && (Pe(t), re.remote.value && fe.value && re.cancel(!1)));
	}, Ie = (e) => {
		if (T.value || E.value || j.value || ve.pending.value || Ue.get(e)?.disabled) return;
		let n = Ue.get(e);
		if (c.value || (ge.value && !fe.value && pe(!0), ge.value && !fe.value)) return;
		let r = be.value.map((e) => e.key).filter((t) => t !== e);
		ve.update(Ae(r)), ge.value && !_e.value && ve.commit(), t("remove", n?.value);
	}, Le = (n) => {
		if (T.value || E.value || j.value || ve.pending.value || (n?.stopPropagation(), c.value) || (ge.value && !fe.value && pe(!0), ge.value && !fe.value)) return;
		let r = be.value.map((e) => e.key).filter((e) => Ue.get(e)?.disabled), i = Ae(r), a = r.length === 0 ? mg(e, i) : i;
		e.multiple && u(a) && (a = []), ve.update(a), ge.value && !_e.value && ve.commit(), Me(""), ge.value || te.value?.onClear?.(), t("clear", n);
	}, Re = (t) => {
		e.clearable && Le(t);
	}, ze = Q(() => be.value.map((e) => {
		let t = Ue.get(e.key);
		return {
			key: e.key,
			value: e.value,
			label: t?.label ?? String(Yf(e.value) ? e.value[P.value.value] : e.value),
			closable: !j.value && !t?.disabled
		};
	})), Be = (e) => {
		t("dropdown-scroll", e);
	}, Ve = (e) => {
		t("dropdown-reach-bottom", e);
	}, { validOptions: He, optionInfoMap: Ue, validOptionInfos: We, enabledOptionKeys: Ge, activeKey: Ke, handleKeyDown: qe, cancelPendingInitialScroll: Je } = Ew({
		getOptionId: i,
		multiple: _,
		options: k,
		extraOptions: De,
		inputValue: ke,
		filterOption: M,
		caseSensitive: h,
		searchFields: g,
		showExtraOptions: b,
		component: oe,
		fieldNames: S,
		loading: j,
		open: fe,
		valueKeys: xe,
		dropdownRef: ce,
		optionRefs: le,
		virtualListRef: ue,
		defaultActiveFirstOption: C,
		onSelect: Ne,
		onOpenChange: pe
	}), Ye = Q(() => {
		let e = new Set(ye.value.map((e) => e.key));
		return xe.value.every((t) => e.has(t) && Ue.has(t) || !Ue.get(t)?.disabled && Ue.has(t));
	}), Xe = Q(() => {
		let e = [];
		for (let t of ye.value) {
			let n = Ue.get(t.key);
			n && e.push({
				...n,
				key: t.key,
				value: t.value,
				label: n?.label ?? String(Yf(t.value) ? t.value[P.value.value] : t.value),
				closable: !j.value && !n?.disabled,
				tagProps: n?.tagProps
			});
		}
		return e;
	});
	return Sr(() => {
		let e = Te();
		if (e.length !== Ee.value.length) Ee.value = e;
		else if (e.length > 0) {
			for (let t = 0; t < e.length; t++) if (e[t].key !== Ee.value[t]?.key) {
				Ee.value = e;
				break;
			}
		}
	}), {
		props: /* @__PURE__ */ Yt(e),
		listboxId: r,
		activeDescendant: Q(() => fe.value && !j.value && Ke.value && Ge.value.includes(Ke.value) && (le.value[Ke.value] || !e.virtualListProps && Ue.get(Ke.value)?.ref) ? i(Ke.value) : void 0),
		provideNativeEditorOwner: () => vr(vC, {
			source: re,
			selectedOptions: Se,
			onSelect: (e) => {
				_e.value || ve.commit(e);
			}
		}),
		loading: j,
		refresh: re.refresh,
		registerPresentation: o.register,
		editMode: s,
		presentationLabel: o.label,
		readPretty: o.readPretty,
		emptyPolicy: l,
		nativeEditor: o.nativeEditor,
		presentationError: Q(() => o.item?.message?.value),
		cancelSession: () => {
			ve.cancel(), o.item?.resetValidation?.();
		},
		committedValue: he,
		mergedSize: w,
		mergedDisabled: T,
		mergedReadonly: E,
		mergedError: D,
		mergedVariant: ie,
		mergedHint: ae,
		feedback: ee,
		eventHandlers: te,
		dropdownRef: ce,
		optionRefs: le,
		virtualListRef: ue,
		computedOpen: fe,
		handleOpenChange: pe,
		computedInputValue: ke,
		computedValueKeys: xe,
		fieldItems: Xe,
		selectedItems: ze,
		clearSelection: Le,
		validOptions: He,
		validOptionInfos: We,
		optionInfoMap: Ue,
		handleSelect: Ne,
		handleRemove: Ie,
		handleClear: Re,
		handleInputValueChange: Fe,
		handleKeyDown: qe,
		cancelPendingInitialScroll: Je,
		handleDropdownScroll: Be,
		handleDropdownReachBottom: Ve,
		session: ve,
		deferred: ge,
		canConfirm: Ye,
		needConfirm: _e
	};
}
// packages/ui/es/select/select.mjs
function kw(e) {
	return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !vs(e);
}
var Aw = /* @__PURE__ */ H({
	name: $("select").name,
	inheritAttrs: !1,
	props: tC,
	emits: XC,
	setup(e, t) {
		let { slots: n, attrs: r, emit: i, expose: a } = t, { n: o, classes: s } = $("select"), c = /* @__PURE__ */ Jt(Ow(e, t)), l = /* @__PURE__ */ Jt(kv()), u = /* @__PURE__ */ I(), d = /* @__PURE__ */ I();
		c.registerPresentation({
			active: () => c.computedOpen && c.deferred,
			cancel: () => {
				c.handleOpenChange(!1), c.session.reset();
			},
			focus: () => c.editMode === "direct" ? u.value?.focus() : d.value?.focus()
		}), a({
			refresh: () => c.refresh(),
			focus: () => c.editMode === "direct" ? u.value?.focus() : d.value?.focus(),
			blur: () => c.editMode === "direct" ? u.value?.blur() : d.value?.blur()
		});
		let f = ({ data: t }) => {
			if ((n.label || $f(e.formatLabel)) && t) {
				let r = c.optionInfoMap.get(String(t.key));
				if (r?.raw) return n.label?.({ data: r.raw }) ?? e.formatLabel?.(r.raw);
			}
			return t?.label ?? "";
		}, p = B(xC, void 0), m = (e) => {
			i("keydown", e), e.defaultPrevented || c.handleKeyDown(e);
		}, h = () => Y(MC, {
			open: c.computedOpen,
			multiple: e.multiple,
			items: c.selectedItems.map((e) => ({
				...e,
				text: String(e.label),
				label: f({ data: e })
			})),
			disabled: c.mergedDisabled || c.mergedReadonly || c.session.pending || c.loading,
			limit: e.limit,
			onRemove: (e) => c.handleRemove(String(e)),
			onClear: c.clearSelection
		}, { default: () => [(e.filterable || e.creatable) && Y(IS, {
			modelValue: c.computedInputValue,
			editMode: "direct",
			hint: !1,
			variant: "outline",
			disabled: c.mergedDisabled || c.session.pending,
			readonly: c.mergedReadonly,
			inputAttrs: {
				role: "combobox",
				"aria-haspopup": "listbox",
				"aria-expanded": c.computedOpen,
				"aria-controls": c.computedOpen ? c.listboxId : void 0,
				"aria-activedescendant": c.activeDescendant,
				"aria-autocomplete": "list"
			},
			ariaLabel: l.search,
			placeholder: l.search,
			clearable: !0,
			"onUpdate:modelValue": (e) => c.handleInputValueChange(e ?? ""),
			onKeydown: m
		}, null), Y(gw, { controller: c }, n)] });
		return () => {
			if (p) return h();
			let { class: t, style: a, ...l } = r, g = l["aria-controls"], _ = l["aria-activedescendant"], v = l["aria-haspopup"], y = (v == null || v === "listbox") && (g === void 0 || g === c.listboxId), b = g === void 0 ? y && c.computedOpen ? c.listboxId : void 0 : g, x = _ === void 0 ? y ? c.activeDescendant : void 0 : _, S = PC, C = c.fieldItems.map((t) => {
				let n = c.optionInfoMap.get(String(t.key))?.raw, r = n && $f(e.formatLabel) ? e.formatLabel(n) : t.label;
				return String(typeof r == "string" || typeof r == "number" ? r : t.label ?? "");
			}).join(e.separator);
			return c.editMode !== "direct" || c.readPretty ? Y(Xv, Z({
				loading: c.loading,
				ref: d,
				style: e.textAlign ? { "--c-form-content-align": e.textAlign } : void 0,
				editMode: c.editMode,
				openTriggerTarget: e.openTriggerTarget,
				readPretty: c.readPretty,
				empty: c.emptyPolicy.isEmpty(c.committedValue),
				emptyText: c.emptyPolicy.emptyText,
				popupContainer: e.popupContainer,
				confirmDisabled: c.loading,
				label: typeof r["aria-label"] == "string" ? r["aria-label"] : c.presentationLabel
			}, { id: typeof r.id == "string" ? r.id : void 0 }, {
				retainReferenceIdWhenOpen: !c.nativeEditor,
				"aria-labelledby": typeof r["aria-labelledby"] == "string" ? r["aria-labelledby"] : void 0,
				"aria-describedby": typeof r["aria-describedby"] == "string" ? r["aria-describedby"] : void 0,
				text: C,
				placeholder: e.placeholder,
				open: c.computedOpen,
				disabled: c.mergedDisabled,
				readonly: c.mergedReadonly,
				limit: e.limit,
				needConfirm: c.deferred && c.needConfirm,
				pending: c.session.pending,
				error: c.session.error || c.presentationError,
				onOpen: c.handleOpenChange,
				onCancel: c.cancelSession,
				commit: () => c.session.commit(),
				onConfirm: () => c.session.commit()
			}), {
				read: n.read ? () => n.read?.({
					value: c.committedValue,
					text: C
				}) : void 0,
				default: () => {
					let t;
					return c.nativeEditor ? c.computedOpen && Y(yC, { install: c.provideNativeEditorOwner }, { default: () => ic(Aw, {
						...e,
						...r,
						editMode: "direct",
						readPretty: !1,
						beforeCommit: void 0,
						open: !c.needConfirm || void 0,
						defaultOpen: !0,
						modelValue: c.session.value,
						disabled: c.mergedDisabled || c.session.pending,
						readonly: c.mergedReadonly,
						"onUpdate:modelValue": c.session.update,
						onKeydown: (e) => i("keydown", e),
						onSearch: (...e) => i("search", ...e),
						onChange: () => {},
						onClear: () => {
							c.needConfirm || c.session.commit();
						},
						onRemove: () => {
							c.needConfirm || c.session.commit();
						}
					}, n) }) : Y(NC, { kind: "select" }, kw(t = h()) ? t : { default: () => [t] });
				}
			}) : Y(S, { controller: c }, {
				default: () => Y(MC, {
					open: c.computedOpen,
					multiple: e.multiple,
					items: c.selectedItems.map((e) => ({
						...e,
						text: String(e.label),
						label: f({ data: e })
					})),
					disabled: c.mergedDisabled || c.mergedReadonly || c.session.pending || c.loading,
					limit: e.limit,
					onRemove: (e) => c.handleRemove(String(e)),
					onClear: c.clearSelection
				}, { default: () => [Y(gw, { controller: c }, n)] }),
				reference: () => n.trigger?.() ?? Y("div", {
					class: [s(o()), t],
					style: a
				}, [Y(YC, Z({
					ref: u,
					openTriggerTarget: e.openTriggerTarget,
					showTags: e.showTags,
					separator: e.separator,
					textAlign: e.textAlign,
					hint: c.mergedHint,
					line: e.line,
					textColor: e.textColor,
					focusColor: e.focusColor,
					blurColor: e.blurColor,
					items: c.fieldItems,
					inputValue: c.computedInputValue,
					multiple: e.multiple,
					disabled: c.mergedDisabled,
					readonly: c.mergedReadonly,
					error: c.mergedError,
					loading: c.loading || c.session.pending,
					loadingMode: e.loadingMode,
					clearable: e.clearable && !c.loading,
					searchable: !!(e.filterable || e.creatable),
					open: c.computedOpen,
					maxTagCount: e.maxTagCount,
					placeholder: e.placeholder,
					size: c.mergedSize,
					tagNowrap: e.tagNowrap,
					variant: c.mergedVariant,
					"onUpdate:inputValue": c.handleInputValueChange,
					onRemove: (e) => c.handleRemove(String(e)),
					onClear: c.handleClear
				}, l, {
					onKeydown: m,
					"aria-controls": b,
					"aria-activedescendant": x,
					onFocus: (e) => {
						i("focus", e), c.eventHandlers?.onFocus?.(e);
					},
					onBlur: (e) => {
						i("blur", e), !c.deferred && c.eventHandlers?.onBlur?.(e);
					}
				}), {
					label: f,
					selected: n.selected,
					prefix: n.prefix,
					"arrow-icon": n["arrow-icon"],
					"loading-icon": n["loading-icon"],
					"search-icon": n["search-icon"],
					suffix: () => n.suffix?.() ?? (c.feedback ? Y(wS, { status: c.feedback }, null) : null),
					"clear-icon": n["clear-icon"]
				})])
			});
		};
	}
}), jw = Vf(Aw, Object.assign(Aw, {
	Option: _C,
	OptGroup: GS
}), { components: [
	Aw,
	_C,
	GS
] }), Mw = /* @__PURE__ */ H({
	__name: "PageSelect",
	props: {
		modelValue: {},
		options: {},
		size: {},
		disabled: { type: Boolean },
		label: {},
		config: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (G(), q(L(jw), {
			"edit-mode": "direct",
			"auto-fit-popup-width": !1,
			class: P(e.config?.class),
			style: N(e.config?.style),
			"model-value": e.modelValue,
			options: e.options,
			size: e.size,
			disabled: e.disabled,
			"popup-container": e.config?.popupContainer,
			"trigger-props": { placement: e.config?.placement ?? "bottom-start" },
			"aria-label": e.label,
			variant: "standard",
			clearable: !1,
			hint: !1,
			"onUpdate:modelValue": r[0] ||= (e) => n("update:modelValue", e)
		}, null, 8, [
			"class",
			"style",
			"model-value",
			"options",
			"size",
			"disabled",
			"popup-container",
			"trigger-props",
			"aria-label"
		]));
	}
}), Nw = /* @__PURE__ */ H({
	name: $("pagination-options").name,
	__name: "PageOptions",
	props: {
		pageSize: Number,
		sizeOptions: {
			type: Array,
			required: !0
		},
		size: String,
		disabled: Boolean,
		selectProps: Object
	},
	emits: ["change"],
	setup(e, { emit: t }) {
		let n = e, r = t, { n: i } = $("pagination"), a = _x(), o = Q(() => n.sizeOptions.filter((e) => Number.isInteger(e) && e > 0).map((e) => ({
			value: e,
			label: a.value.count(e)
		})));
		function s(e) {
			!n.disabled && !n.selectProps?.disabled && typeof e == "number" && o.value.some((t) => t.value === e) && r("change", e);
		}
		return (t, n) => (G(), K("span", { class: P(L(i)("options")) }, [Y(Mw, {
			config: e.selectProps,
			"model-value": e.pageSize,
			options: o.value,
			size: e.size,
			disabled: e.disabled || e.selectProps?.disabled,
			label: L(a).perPage,
			"onUpdate:modelValue": s
		}, null, 8, [
			"config",
			"model-value",
			"options",
			"size",
			"disabled",
			"label"
		])], 2));
	}
}), Pw = ["aria-label"], Fw = { key: 0 }, Iw = /* @__PURE__ */ H({
	name: $("pagination").name,
	__name: "Pagination",
	props: ex,
	emits: [
		"update:modelValue",
		"update:pageSize",
		"change",
		"page-size-change"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, { n: i, classes: a } = $("pagination"), o = /* @__PURE__ */ I(), s = ix(o, n), c = Q(() => n.simple || s.value), { current: l, pageSize: u, total: d, pages: f, buffer: p, pageList: m, changeCurrent: h, changePageSize: g } = rx(n, r), _ = _x(), v = 0;
		function y(e) {
			let t = o.value, n = t?.ownerDocument, r = n?.activeElement, a = !!r && !!t?.contains(r) && r.classList.contains(i("item-ellipsis")), s = ++v;
			h(e), a && R(() => R(() => {
				if (s !== v || !t?.isConnected || !n || l.value !== e || r?.isConnected) return;
				let a = n.activeElement;
				a && a !== n.body && a !== r || t.querySelector(`button.${i("item")}[aria-current="page"]:not(:disabled)`)?.focus();
			}));
		}
		let b = /* @__PURE__ */ I(String(l.value));
		V(l, (e) => {
			b.value = String(e);
		});
		let x = /* @__PURE__ */ I(!1), S = 0, C = () => x.value;
		return V(c, () => {
			let e = o.value, t = e?.ownerDocument, n = t?.activeElement, r = n?.tagName === "INPUT" && n.closest(`.${i("jumper")}`) && e?.contains(n) ? n : void 0, a = r?.selectionStart, s = r?.selectionEnd, c = ++S;
			x.value = !!r, R(() => R(() => {
				if (c !== S || (x.value = !1, !r || !e?.isConnected || !t)) return;
				let n = t.activeElement;
				if (n && n !== t.body && n !== r) return;
				let o = e.querySelector(`.${i("jumper")} input`);
				o && !o.disabled && (o.focus(), a != null && s != null && o.setSelectionRange(a, s));
			}));
		}, { flush: "sync" }), (e, t) => gr((G(), K("nav", {
			ref_key: "root",
			ref: o,
			"aria-label": L(_).navigation,
			class: P(L(a)(L(i)(), L(i)(`--size-${e.size}`), [c.value, L(i)("--simple")], [L(s), L(i)("--compact")], [e.disabled, L(i)("--disabled")]))
		}, [
			e.showTotal ? (G(), K("span", {
				key: 0,
				class: P(L(i)("total"))
			}, [U(e.$slots, "total", { total: L(d) }, () => [Es(F(L(_).total(L(d))), 1)])], 2)) : X("", !0),
			c.value ? (G(), K("div", {
				key: 1,
				class: P(L(i)("simple-wrap"))
			}, [
				Y(xx, {
					type: "previous",
					current: L(l),
					pages: L(f),
					disabled: e.disabled,
					elevation: e.elevation,
					onClick: L(h)
				}, pa({ _: 2 }, [e.$slots["page-item-step"] ? {
					name: "default",
					fn: z((t) => [U(e.$slots, "page-item-step", he(ws(t)))]),
					key: "0"
				} : void 0]), 1032, [
					"current",
					"pages",
					"disabled",
					"elevation",
					"onClick"
				]),
				Y(RS, {
					modelValue: b.value,
					"onUpdate:modelValue": t[0] ||= (e) => b.value = e,
					"is-migrating": C,
					current: L(l),
					pages: L(f),
					disabled: e.disabled,
					size: e.size,
					simple: "",
					onChange: L(h)
				}, null, 8, [
					"modelValue",
					"current",
					"pages",
					"disabled",
					"size",
					"onChange"
				]),
				Y(xx, {
					type: "next",
					current: L(l),
					pages: L(f),
					disabled: e.disabled,
					elevation: e.elevation,
					onClick: L(h)
				}, pa({ _: 2 }, [e.$slots["page-item-step"] ? {
					name: "default",
					fn: z((t) => [U(e.$slots, "page-item-step", he(ws(t)))]),
					key: "0"
				} : void 0]), 1032, [
					"current",
					"pages",
					"disabled",
					"elevation",
					"onClick"
				])
			], 2)) : (G(), K("ul", {
				key: 2,
				class: P(L(i)("list"))
			}, [
				J("li", null, [Y(xx, {
					type: "previous",
					current: L(l),
					pages: L(f),
					disabled: e.disabled,
					elevation: e.elevation,
					onClick: L(h)
				}, pa({ _: 2 }, [e.$slots["page-item-step"] ? {
					name: "default",
					fn: z((t) => [U(e.$slots, "page-item-step", he(ws(t)))]),
					key: "0"
				} : void 0]), 1032, [
					"current",
					"pages",
					"disabled",
					"elevation",
					"onClick"
				])]),
				(G(!0), K(W, null, fa(L(m), (t) => (G(), K("li", { key: t.key }, [t.type === "more" ? (G(), q(Cx, {
					key: 0,
					step: t.step,
					current: L(l),
					pages: L(f),
					disabled: e.disabled,
					elevation: e.elevation,
					onClick: y
				}, {
					default: z(() => [e.$slots["page-item-ellipsis"] ? U(e.$slots, "page-item-ellipsis", {}, void 0, void 0, 0) : X("", !0)]),
					_: 3
				}, 8, [
					"step",
					"current",
					"pages",
					"disabled",
					"elevation"
				])) : (G(), q(yx, {
					key: 1,
					"page-number": t.pageNumber,
					current: L(l),
					disabled: e.disabled,
					elevation: e.elevation,
					style: N(e.pageItemStyle),
					"active-style": e.activePageItemStyle,
					onClick: L(h)
				}, pa({ _: 2 }, [e.$slots["page-item"] ? {
					name: "default",
					fn: z((t) => [U(e.$slots, "page-item", Z({ ref_for: !0 }, t))]),
					key: "0"
				} : void 0]), 1032, [
					"page-number",
					"current",
					"disabled",
					"elevation",
					"style",
					"active-style",
					"onClick"
				]))]))), 128)),
				e.showMore ? (G(), K("li", Fw, [Y(Cx, {
					step: L(p) * 2 + 1,
					current: L(l),
					pages: L(f),
					disabled: e.disabled,
					elevation: e.elevation,
					onClick: y
				}, {
					default: z(() => [e.$slots["page-item-ellipsis"] ? U(e.$slots, "page-item-ellipsis", {}, void 0, void 0, 0) : X("", !0)]),
					_: 3
				}, 8, [
					"step",
					"current",
					"pages",
					"disabled",
					"elevation"
				])])) : X("", !0),
				J("li", null, [Y(xx, {
					type: "next",
					current: L(l),
					pages: L(f),
					disabled: e.disabled,
					elevation: e.elevation,
					onClick: L(h)
				}, pa({ _: 2 }, [e.$slots["page-item-step"] ? {
					name: "default",
					fn: z((t) => [U(e.$slots, "page-item-step", he(ws(t)))]),
					key: "0"
				} : void 0]), 1032, [
					"current",
					"pages",
					"disabled",
					"elevation",
					"onClick"
				])])
			], 2)),
			e.showPageSize || !c.value && e.showJumper ? (G(), K("div", {
				key: 3,
				class: P(L(i)("controls"))
			}, [e.showPageSize ? (G(), q(Nw, {
				key: 0,
				"page-size": L(u),
				"size-options": e.pageSizeOptions,
				size: e.size,
				disabled: e.disabled,
				"select-props": e.pageSizeProps,
				onChange: L(g)
			}, null, 8, [
				"page-size",
				"size-options",
				"size",
				"disabled",
				"select-props",
				"onChange"
			])) : X("", !0), !c.value && e.showJumper ? (G(), q(RS, {
				key: 1,
				modelValue: b.value,
				"onUpdate:modelValue": t[1] ||= (e) => b.value = e,
				"is-migrating": C,
				current: L(l),
				pages: L(f),
				disabled: e.disabled,
				size: e.size,
				onChange: L(h)
			}, pa({ _: 2 }, [e.$slots["jumper-prepend"] ? {
				name: "jumper-prepend",
				fn: z(() => [U(e.$slots, "jumper-prepend")]),
				key: "0"
			} : void 0, e.$slots["jumper-append"] ? {
				name: "jumper-append",
				fn: z(() => [U(e.$slots, "jumper-append")]),
				key: "1"
			} : void 0]), 1032, [
				"modelValue",
				"current",
				"pages",
				"disabled",
				"size",
				"onChange"
			])) : X("", !0)], 2)) : X("", !0)
		], 10, Pw)), [[Gc, !(e.hideOnSinglePage && L(f) <= 1)]]);
	}
}), Lw = Vf(Iw, Object.assign(Iw, {}), { components: [Iw] }), Rw = Uf("table"), zw = /* @__PURE__ */ H({
	name: $("col-group").name,
	props: {
		dataColumns: {
			type: Array,
			required: !0
		},
		operations: {
			type: Array,
			required: !0
		},
		columnWidth: { type: Object },
		columnRealWidth: { type: Object },
		tableLayout: {
			type: String,
			default: "fixed"
		}
	},
	setup(e) {
		let t = B(hp, void 0), n = (t) => {
			let n = dp(t), r = (n && e.columnWidth?.[n]) ?? t._resizeWidth;
			return n && e.columnRealWidth?.[n] || r || t._realWidth || t.width;
		};
		return {
			orderedColumns: Q(() => _p([...e.operations.map((e) => ({
				key: `operation-${e.name}`,
				class: [`${Rw}-${e.name}-col`, { [`${Rw}-col-default-width`]: e.width == null }],
				width: e.width ?? 40,
				fixed: e.fixed ? "left" : void 0
			})), ...e.dataColumns.map((e) => ({
				key: `data-${dp(e)}`,
				class: void 0,
				width: n(e),
				fixed: e.fixed
			}))], (e) => e.fixed, t?.readingDirection)),
			getColWidth: n,
			prefixCls: Rw,
			DEFAULT_OPERATION_WIDTH: 40
		};
	}
}), Bw = ["width"];
function Vw(e, t, n, r, i, a) {
	return G(), K("colgroup", null, [e.tableLayout === "fixed" ? (G(!0), K(W, { key: 0 }, fa(e.orderedColumns, (e) => (G(), K("col", {
		key: e.key,
		class: P(e.class),
		width: e.width
	}, null, 10, Bw))), 128)) : X("", !0)]);
}
var Hw = /* @__PURE__ */ o_(zw, [["render", Vw]]), Uw = /* @__PURE__ */ H({
	__name: "TableColumnSlot",
	props: {
		onChanged: { type: Function },
		revision: {}
	},
	setup(e) {
		let t = e, n = Ls();
		return Zi(() => t.onChanged(n.subTree)), (e, t) => U(e.$slots, "default");
	}
}), { name: Ww } = $("thead"), Gw = /* @__PURE__ */ H({
	name: Ww,
	setup(e, { slots: t }) {
		return () => Y(vp(t.thead?.()) ?? "thead", null, { default: t.default });
	}
}), { name: Kw } = $("tbody"), qw = /* @__PURE__ */ H({
	name: Kw,
	setup(e, { slots: t }) {
		return () => Y(vp(t.tbody?.()) ?? "tbody", null, { default: t.default });
	}
}), Jw = ({ column: e, tableCtx: t }) => {
	let n = Q(() => {
		if (!lp(e.value) && e.value.dataIndex && e.value.dataIndex === t.sorter?.field) return t.sorter.direction;
	}), r = Q(() => e.value?.sortable?.sortDirections ?? []), i = Q(() => r.value.length > 0), a = Q(() => r.value.includes("ascend")), o = Q(() => r.value.includes("descend")), s = Q(() => n.value ? n.value === r.value[0] ? r.value[1] ?? "" : "" : r.value[0] ?? "");
	return {
		sortOrder: n,
		hasSorter: i,
		hasAscendBtn: a,
		hasDescendBtn: o,
		nextSortOrder: s,
		handleClickSorter: (n) => {
			e.value.dataIndex && t.onSorterChange?.(e.value.dataIndex, s.value, n);
		}
	};
};
// packages/ui/es/table/desktop/use-header-sorter.mjs
function Yw(e, t, n) {
	let r = Jw({
		column: e,
		tableCtx: t
	}), { hasSorter: i, hasAscendBtn: a, hasDescendBtn: o, sortOrder: s } = r, c = () => i.value ? Y("span", { class: `${n}-sorter` }, [a.value && Y("div", { class: [`${n}-sorter-icon`, { [`${n}-sorter-icon-active`]: s.value === "ascend" }] }, [Y(Mx, null, null)]), o.value && Y("div", { class: [`${n}-sorter-icon`, { [`${n}-sorter-icon-active`]: s.value === "descend" }] }, [Y(Ox, null, null)])]) : null;
	return {
		...r,
		renderSorterNode: c
	};
}
// packages/ui/es/button/group-props.mjs
var Xw = {
	status: {
		type: String,
		default: "default",
		validator: (e) => iv.includes(e)
	},
	size: {
		type: String,
		default: void 0,
		validator: (e) => rv.includes(e)
	},
	variant: {
		type: String,
		default: "outline",
		validator: (e) => nv.includes(e)
	},
	color: String,
	textColor: String,
	disabled: Boolean,
	stacked: Boolean,
	vertical: Boolean,
	elevation: {
		type: [Boolean, Number],
		default: !1
	}
}, Zw = /* @__PURE__ */ H({
	name: $("button-group").name,
	__name: "ButtonGroup",
	props: Xw,
	setup(e, { expose: t }) {
		let { n, classes: r } = $("button-group"), i = e, { bindButtons: a } = fv(), o = uv(), s = {
			elevation: Q(() => i.elevation),
			status: Q(() => i.status),
			size: Q(() => i.size ?? o.value),
			variant: Q(() => i.variant),
			color: Q(() => i.color),
			textColor: Q(() => i.textColor),
			disabled: Q(() => i.disabled),
			stacked: Q(() => i.stacked),
			vertical: Q(() => i.vertical)
		};
		return a(s), t({ buttonGroupProvider: s }), (e, t) => (G(), K("div", {
			role: "group",
			class: P(L(r)(L(n)(), L(n)("$--box"), L(n)(`--variant-${e.variant}`), [
				e.vertical,
				L(n)("--vertical"),
				L(n)("--horizontal")
			], [e.variant === "default" && !e.disabled, L(Wf)(e.elevation, 1)]))
		}, [U(e.$slots, "default")], 2));
	}
}), Qw = Vf(gv, Object.assign(gv, { Group: Zw }), { components: [gv, Zw] }), { name: $w, n: eT, classes: tT } = $("icon-hover"), nT = /* @__PURE__ */ H({
	name: $w,
	props: {
		prefix: { type: String },
		size: {
			type: String,
			default: "md"
		},
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	setup() {
		return {
			classes: tT,
			n: eT
		};
	}
});
// packages/ui/es/_components/IconHover.vue.mjs
function rT(e, t, n, r, i, a) {
	return G(), K("span", { class: P(e.classes(e.n(), e.prefix && `${e.prefix}-icon-hover`, [e.size !== "md", e.n(`--size-${e.size}`)], [e.disabled, e.n("--disabled")])) }, [U(e.$slots, "default")], 2);
}
var iT = /* @__PURE__ */ o_(nT, [["render", rT]]), aT = ({ column: e, tableCtx: t }) => {
	let n = Q(() => e.value.dataIndex && t.filters?.[e.value.dataIndex] ? t.filters[e.value.dataIndex] : []), r = /* @__PURE__ */ I(!1), i = Q(() => n.value.length > 0), a = Q(() => !!e.value.filterable?.multiple), o = /* @__PURE__ */ I(n.value);
	V(n, (e) => {
		Kf(e) && String(e) !== String(o.value) && (o.value = e);
	});
	let s = (e) => {
		r.value = e;
	}, c = (e) => {
		o.value = e;
	};
	return {
		filterOpen: r,
		isFilterActive: i,
		isMultipleFilter: a,
		columnFilterValue: o,
		handleFilterOpenChange: s,
		setFilterValue: c,
		handleCheckboxFilterChange: (e) => {
			c(e);
		},
		handleRadioFilterChange: (e) => {
			c([e]);
		},
		handleFilterConfirm: (n) => {
			e.value.dataIndex && t.onFilterChange?.(e.value.dataIndex, o.value, n), s(!1);
		},
		handleFilterReset: (n) => {
			c([]), e.value.dataIndex && t.onFilterChange?.(e.value.dataIndex, o.value, n), s(!1);
		}
	};
}, oT = Symbol("table-column-component");
function sT(e) {
	return !!e[oT];
}
// packages/ui/es/table/desktop/use-header-filter.mjs
function cT(e) {
	return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !vs(e);
}
function lT({ props: e, column: t, tableCtx: n, prefixCls: r, inline: i, t: a }) {
	let { filterOpen: o, isFilterActive: s, isMultipleFilter: c, columnFilterValue: l, handleFilterOpenChange: u, setFilterValue: d, handleCheckboxFilterChange: f, handleRadioFilterChange: p, handleFilterConfirm: m, handleFilterReset: h } = aT({
		column: t,
		tableCtx: n
	}), g = () => {
		let t, i, { filterable: o } = e.column;
		return e.column.slots?.["filter-content"] ? Y(Ep, { slotProps: {
			filterValue: l.value,
			setFilterValue: d,
			handleFilterConfirm: m,
			handleFilterReset: h
		} }, Op(e.column.slots["filter-content"])) : o?.slotName && n.slots?.[o.slotName] ? Y(Ep, { slotProps: {
			filterValue: l.value,
			setFilterValue: d,
			handleFilterConfirm: m,
			handleFilterReset: h
		} }, Dp(n.slots[o.slotName])) : o?.renderContent ? o.renderContent({
			filterValue: l.value,
			setFilterValue: d,
			handleFilterConfirm: m,
			handleFilterReset: h
		}) : Y("div", { class: `${r}-filters-content` }, [Y("ul", { class: `${r}-filters-list` }, [o?.filters?.map((e, t) => Y("li", {
			class: `${r}-filters-item`,
			key: t
		}, [c.value ? Y(Wy, {
			value: e.value,
			modelValue: l.value,
			uninjectGroupContext: !0,
			onChange: f
		}, { default: () => [e.text] }) : Y(rb, {
			value: e.value,
			modelValue: l.value[0] ?? "",
			uninjectGroupContext: !0,
			onChange: p
		}, { default: () => [e.text] })]))]), Y("div", { class: `${r}-filters-bottom` }, [Y(Qw, {
			size: "xs",
			onClick: h
		}, cT(t = a("table.resetText")) ? t : { default: () => [t] }), Y(Qw, {
			status: "primary",
			size: "xs",
			onClick: m
		}, cT(i = a("table.confirmButtonText")) ? i : { default: () => [i] })])]);
	};
	return { renderFilter: () => {
		let { filterable: t } = e.column;
		if (!t) return null;
		let n = e.column.slots?.["filter-icon"], a = n && sT(e.column) ? Y(Ep, null, Op(n)) : n?.() ?? t.icon?.() ?? Y(Bx, null, null);
		return Y(Dh, Z({
			open: o.value,
			trigger: "click",
			autoFitPosition: !0,
			popupOffset: i() ? 4 : 0,
			"onUpdate:open": u
		}, t.triggerProps), {
			default: () => [Y(iT, {
				class: [`${r}-filters`, {
					[`${r}-filters-active`]: s.value,
					[`${r}-filters-open`]: o.value,
					[`${r}-filters-align-left`]: i()
				}],
				onClick: (e) => e.stopPropagation()
			}, cT(a) ? a : { default: () => [a] })],
			content: g
		});
	} };
}
// packages/ui/es/table/table-th.mjs
var { name: uT } = $("th"), dT = /* @__PURE__ */ H({
	name: uT,
	props: {
		semanticLabelId: String,
		customHeader: Object,
		column: {
			type: Object,
			default: () => ({})
		},
		operations: {
			type: Array,
			default: () => []
		},
		dataColumns: {
			type: Array,
			default: () => []
		},
		resizable: Boolean
	},
	setup(e, { slots: t }) {
		let { column: n } = /* @__PURE__ */ vn(e), r = Uf("table"), { t: i } = Wg(), a = B(hp, {}), o = Q(() => e.column?.dataIndex && a.resizingColumn === e.column.dataIndex), s = Q(() => {
			if (Yf(e.column?.tooltip)) return e.column.tooltip;
		}), c = Q(() => e.column?.filterable && Jf(e.column.filterable.alignLeft) ? e.column.filterable.alignLeft : a.filterIconAlignLeft), { sortOrder: l, hasSorter: u, nextSortOrder: d, handleClickSorter: f, renderSorterNode: p } = Yw(n, a, r), { renderFilter: m } = lT({
			props: e,
			column: n,
			tableCtx: a,
			prefixCls: r,
			inline: () => x.value,
			t: i
		}), h = Q(() => {
			let t = [`${r}-cell`, `${r}-cell-align-${e.column?.align ?? (e.column.children ? "center" : "start")}`];
			return u.value && t.push(`${r}-cell-with-sorter`, {
				[`${r}-cell-next-ascend`]: d.value === "ascend",
				[`${r}-cell-next-descend`]: d.value === "descend"
			}), c.value && t.push(`${r}-cell-with-filter`), v.value && t.push(`${r}-cell-with-actions`), t;
		}), g = () => t.default ? t.default() : e.column?.titleSlotName && a.slots?.[e.column.titleSlotName] ? Y(Ep, { slotProps: { column: e.column } }, Dp(a.slots[e.column.titleSlotName])) : e.column?.slots?.title ? Y(Ep, null, Op(e.column.slots.title)) : $f(e.column.title) ? e.column.title() : e.column.title, _ = Q(() => lp(e.column)), v = Q(() => _.value || e.column?.children?.length || !e.column?.dataIndex ? !1 : !!a.slots?.["header-cell-actions"]), y = () => !v.value || !e.column?.dataIndex ? null : Y(Ep, { slotProps: {
			column: e.column,
			dataIndex: e.column.dataIndex
		} }, Dp(a.slots?.["header-cell-actions"])), b = Q(() => !!(v.value && e.column?.filterable && !c.value)), x = Q(() => c.value || b.value), S = () => e.column?.ellipsis && e.column?.tooltip ? Y(ng, {
			class: `${r}-th-title`,
			tooltipProps: s.value
		}, { default: () => [e.semanticLabelId ? Y("span", { id: e.semanticLabelId }, [g()]) : g()] }) : Y("span", {
			id: e.semanticLabelId,
			class: [`${r}-th-title`, { [`${r}-text-ellipsis`]: e.column?.ellipsis }]
		}, [g()]), C = (e) => {
			let t = e.target, n = e.currentTarget, r = t?.closest?.("input,textarea,select,button,a[href],[contenteditable]:not([contenteditable=\"false\"]),[role=\"button\"]");
			return !!(r && n && r !== n && n.contains(r));
		}, w = () => {
			if (_.value) {
				let t = a.slots?.["extra-column-header"] ? Y(Ep, { slotProps: { column: e.column } }, Dp(a.slots["extra-column-header"])) : g();
				return Y("span", {
					id: e.semanticLabelId,
					class: [`${r}-cell`, `${r}-cell-align-center`]
				}, [t]);
			}
			return Sp(r, {
				class: h.value,
				interaction: {
					role: u.value ? "button" : void 0,
					tabindex: u.value ? 0 : void 0,
					onClick: u.value ? (e) => {
						!e.defaultPrevented && !C(e) && f(e);
					} : void 0,
					onKeydown: u.value ? (e) => {
						e.defaultPrevented || C(e) || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), f(e));
					} : void 0
				},
				title: S,
				sorter: p,
				inlineFilter: () => c.value && m(),
				actions: v.value ? () => [b.value && m(), y()] : void 0
			});
		}, T = Q(() => ({
			...zp(e.column, {
				dataColumns: e.dataColumns,
				operations: e.operations
			}, a.tableLayout, a.readingDirection),
			...e.column?.cellStyle,
			...e.column?.headerCellStyle
		})), E = Q(() => [
			`${r}-th`,
			{
				[`${r}-col-sorted`]: !!l.value,
				[`${r}-th-resizing`]: o.value
			},
			...Rp(r, e.column, a.readingDirection === "rtl" && a.hasPhysicalLeftOperations),
			e.column?.cellClass,
			e.column?.headerCellClass
		]), D = (t) => {
			e.column?.dataIndex && a.onThMouseDown?.(e.column?.dataIndex, t);
		};
		return () => {
			let n = e.column.colSpan ?? 1, o = e.column.rowSpan ?? 1, s = typeof e.column.title == "string" ? e.column.title : e.column.dataIndex, c = i("table.resizeColumn", s);
			return xp("th", vp([e.customHeader]) ?? vp(t.th?.({ column: e.column })), e.column, {
				class: E.value,
				style: T.value,
				colspan: n > 1 ? n : void 0,
				rowspan: o > 1 ? o : void 0,
				"aria-sort": l.value === "ascend" ? "ascending" : l.value === "descend" ? "descending" : void 0
			}, () => [
				w(),
				!x.value && m(),
				e.resizable && Y("span", {
					class: `${r}-column-handle`,
					role: "separator",
					tabindex: 0,
					"aria-label": c === "table.resizeColumn" ? `Resize ${s} column` : c,
					"aria-orientation": "vertical",
					"aria-valuemin": 40,
					"aria-valuenow": e.column._resizeWidth ?? e.column._realWidth ?? e.column.width,
					onPointerdown: D,
					onMousedown: D,
					onKeydown: (t) => {
						e.column.dataIndex && a.onThKeydown?.(e.column.dataIndex, t);
					}
				}, null)
			]);
		};
	}
}), { name: fT } = $("operation-th"), pT = /* @__PURE__ */ H({
	name: fT,
	props: {
		operationColumn: {
			type: Object,
			required: !0
		},
		operations: {
			type: Array,
			required: !0
		},
		rowSpan: {
			type: Number,
			default: 1
		},
		selectAll: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let t = Uf("table"), n = B(hp, {}), { t: r } = Wg(), i = () => {
			if (e.operationColumn.title || !["selection-checkbox", "selection-radio"].includes(e.operationColumn.name)) return;
			if (e.selectAll) return r("table.selectAll");
			let t = r("table.selectionColumn");
			return t === "table.selectionColumn" ? "Selection" : t;
		}, a = Q(() => {
			let e = !1, t = !1, r = (n.currentSelectedRowKeys?.filter((e) => n.currentAllEnabledRowKeys?.includes(e) ?? !0) ?? []).length, i = n.currentAllEnabledRowKeys?.length ?? 0;
			return r > 0 && (r >= i ? e = !0 : t = !0), {
				checked: e,
				indeterminate: t
			};
		}), o = () => e.selectAll ? Y(Wy, {
			ariaLabel: e.operationColumn.title ? void 0 : r("table.selectAll"),
			modelValue: a.value.checked,
			indeterminate: a.value.indeterminate,
			uninjectGroupContext: !0,
			onChange: (e) => {
				n.onSelectAll?.(e);
			}
		}, e.operationColumn.title ? { default: () => $f(e.operationColumn.title) ? e.operationColumn.title() : e.operationColumn.title } : {}) : e.operationColumn.title ? $f(e.operationColumn.title) ? e.operationColumn.title() : e.operationColumn.title : null, s = Q(() => Bp(e.operationColumn, e.operations, n.readingDirection, n.physicalDataColumns, n.tableLayout)), c = Q(() => [
			`${t}-th`,
			`${t}-operation`,
			{ [`${t}-checkbox`]: e.selectAll },
			...Lp(t, e.operationColumn)
		]);
		return () => Y("th", {
			"aria-label": i(),
			class: c.value,
			style: s.value,
			rowspan: e.rowSpan > 1 ? e.rowSpan : void 0,
			"data-operation-key": e.operationColumn.name
		}, [Y("span", { class: `${t}-cell` }, [o()])]);
	}
}), mT = (function() {
	if (typeof Map < "u") return Map;
	function e(e, t) {
		var n = -1;
		return e.some(function(e, r) {
			return e[0] === t && (n = r, !0);
		}), n;
	}
	return function() {
		function t() {
			this.__entries__ = [];
		}
		return Object.defineProperty(t.prototype, "size", {
			get: function() {
				return this.__entries__.length;
			},
			enumerable: !0,
			configurable: !0
		}), t.prototype.get = function(t) {
			var n = e(this.__entries__, t), r = this.__entries__[n];
			return r && r[1];
		}, t.prototype.set = function(t, n) {
			var r = e(this.__entries__, t);
			~r ? this.__entries__[r][1] = n : this.__entries__.push([t, n]);
		}, t.prototype.delete = function(t) {
			var n = this.__entries__, r = e(n, t);
			~r && n.splice(r, 1);
		}, t.prototype.has = function(t) {
			return !!~e(this.__entries__, t);
		}, t.prototype.clear = function() {
			this.__entries__.splice(0);
		}, t.prototype.forEach = function(e, t) {
			t === void 0 && (t = null);
			for (var n = 0, r = this.__entries__; n < r.length; n++) {
				var i = r[n];
				e.call(t, i[1], i[0]);
			}
		}, t;
	}();
})(), hT = typeof window < "u" && typeof document < "u" && window.document === document, gT = (function() {
	return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
})(), _T = (function() {
	return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(gT) : function(e) {
		return setTimeout(function() {
			return e(Date.now());
		}, 1e3 / 60);
	};
})(), vT = 2;
function yT(e, t) {
	var n = !1, r = !1, i = 0;
	function a() {
		n && (n = !1, e()), r && s();
	}
	function o() {
		_T(a);
	}
	function s() {
		var e = Date.now();
		if (n) {
			if (e - i < vT) return;
			r = !0;
		} else n = !0, r = !1, setTimeout(o, t);
		i = e;
	}
	return s;
}
var bT = 20, xT = [
	"top",
	"right",
	"bottom",
	"left",
	"width",
	"height",
	"size",
	"weight"
], ST = typeof MutationObserver < "u", CT = function() {
	function e() {
		this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = yT(this.refresh.bind(this), bT);
	}
	return e.prototype.addObserver = function(e) {
		~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_();
	}, e.prototype.removeObserver = function(e) {
		var t = this.observers_, n = t.indexOf(e);
		~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_();
	}, e.prototype.refresh = function() {
		this.updateObservers_() && this.refresh();
	}, e.prototype.updateObservers_ = function() {
		var e = this.observers_.filter(function(e) {
			return e.gatherActive(), e.hasActive();
		});
		return e.forEach(function(e) {
			return e.broadcastActive();
		}), e.length > 0;
	}, e.prototype.connect_ = function() {
		hT && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), ST ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
			attributes: !0,
			childList: !0,
			characterData: !0,
			subtree: !0
		})) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
	}, e.prototype.disconnect_ = function() {
		hT && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
	}, e.prototype.onTransitionEnd_ = function(e) {
		var t = e.propertyName, n = t === void 0 ? "" : t;
		xT.some(function(e) {
			return !!~n.indexOf(e);
		}) && this.refresh();
	}, e.getInstance = function() {
		return this.instance_ ||= new e(), this.instance_;
	}, e.instance_ = null, e;
}(), wT = (function(e, t) {
	for (var n = 0, r = Object.keys(t); n < r.length; n++) {
		var i = r[n];
		Object.defineProperty(e, i, {
			value: t[i],
			enumerable: !1,
			writable: !1,
			configurable: !0
		});
	}
	return e;
}), TT = (function(e) {
	return e && e.ownerDocument && e.ownerDocument.defaultView || gT;
}), ET = IT(0, 0, 0, 0);
function DT(e) {
	return parseFloat(e) || 0;
}
function OT(e) {
	return [...arguments].slice(1).reduce(function(t, n) {
		var r = e["border-" + n + "-width"];
		return t + DT(r);
	}, 0);
}
function kT(e) {
	for (var t = [
		"top",
		"right",
		"bottom",
		"left"
	], n = {}, r = 0, i = t; r < i.length; r++) {
		var a = i[r], o = e["padding-" + a];
		n[a] = DT(o);
	}
	return n;
}
function AT(e) {
	var t = e.getBBox();
	return IT(0, 0, t.width, t.height);
}
function jT(e) {
	var t = e.clientWidth, n = e.clientHeight;
	if (!t && !n) return ET;
	var r = TT(e).getComputedStyle(e), i = kT(r), a = i.left + i.right, o = i.top + i.bottom, s = DT(r.width), c = DT(r.height);
	if (r.boxSizing === "border-box" && (Math.round(s + a) !== t && (s -= OT(r, "left", "right") + a), Math.round(c + o) !== n && (c -= OT(r, "top", "bottom") + o)), !NT(e)) {
		var l = Math.round(s + a) - t, u = Math.round(c + o) - n;
		Math.abs(l) !== 1 && (s -= l), Math.abs(u) !== 1 && (c -= u);
	}
	return IT(i.left, i.top, s, c);
}
var MT = (function() {
	return typeof SVGGraphicsElement < "u" ? function(e) {
		return e instanceof TT(e).SVGGraphicsElement;
	} : function(e) {
		return e instanceof TT(e).SVGElement && typeof e.getBBox == "function";
	};
})();
function NT(e) {
	return e === TT(e).document.documentElement;
}
function PT(e) {
	return hT ? MT(e) ? AT(e) : jT(e) : ET;
}
function FT(e) {
	var t = e.x, n = e.y, r = e.width, i = e.height, a = Object.create((typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object).prototype);
	return wT(a, {
		x: t,
		y: n,
		width: r,
		height: i,
		top: n,
		right: t + r,
		bottom: i + n,
		left: t
	}), a;
}
function IT(e, t, n, r) {
	return {
		x: e,
		y: t,
		width: n,
		height: r
	};
}
var LT = function() {
	function e(e) {
		this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = IT(0, 0, 0, 0), this.target = e;
	}
	return e.prototype.isActive = function() {
		var e = PT(this.target);
		return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
	}, e.prototype.broadcastRect = function() {
		var e = this.contentRect_;
		return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e;
	}, e;
}(), RT = function() {
	function e(e, t) {
		var n = FT(t);
		wT(this, {
			target: e,
			contentRect: n
		});
	}
	return e;
}(), zT = function() {
	function e(e, t, n) {
		if (this.activeObservations_ = [], this.observations_ = new mT(), typeof e != "function") throw TypeError("The callback provided as parameter 1 is not a function.");
		this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n;
	}
	return e.prototype.observe = function(e) {
		if (!arguments.length) throw TypeError("1 argument required, but only 0 present.");
		if (typeof Element < "u" && Element instanceof Object) {
			if (!(e instanceof TT(e).Element)) throw TypeError("parameter 1 is not of type \"Element\".");
			var t = this.observations_;
			t.has(e) || (t.set(e, new LT(e)), this.controller_.addObserver(this), this.controller_.refresh());
		}
	}, e.prototype.unobserve = function(e) {
		if (!arguments.length) throw TypeError("1 argument required, but only 0 present.");
		if (typeof Element < "u" && Element instanceof Object) {
			if (!(e instanceof TT(e).Element)) throw TypeError("parameter 1 is not of type \"Element\".");
			var t = this.observations_;
			t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this));
		}
	}, e.prototype.disconnect = function() {
		this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
	}, e.prototype.gatherActive = function() {
		var e = this;
		this.clearActive(), this.observations_.forEach(function(t) {
			t.isActive() && e.activeObservations_.push(t);
		});
	}, e.prototype.broadcastActive = function() {
		if (this.hasActive()) {
			var e = this.callbackCtx_, t = this.activeObservations_.map(function(e) {
				return new RT(e.target, e.broadcastRect());
			});
			this.callback_.call(e, t, e), this.clearActive();
		}
	}, e.prototype.clearActive = function() {
		this.activeObservations_.splice(0);
	}, e.prototype.hasActive = function() {
		return this.activeObservations_.length > 0;
	}, e;
}(), BT = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new mT(), VT = function() {
	function e(t) {
		if (!(this instanceof e)) throw TypeError("Cannot call a class as a function.");
		if (!arguments.length) throw TypeError("1 argument required, but only 0 present.");
		var n = new zT(t, CT.getInstance(), this);
		BT.set(this, n);
	}
	return e;
}();
[
	"observe",
	"unobserve",
	"disconnect"
].forEach(function(e) {
	VT.prototype[e] = function() {
		var t;
		return (t = BT.get(this))[e].apply(t, arguments);
	};
});
var HT = (function() {
	return gT.ResizeObserver === void 0 ? VT : gT.ResizeObserver;
})(), { name: UT } = $("resize-observer"), WT = /* @__PURE__ */ H({
	name: UT,
	emits: ["resize"],
	setup(e, { emit: t, slots: n }) {
		let r, i = null, a, o, s = 0, c, l = /* @__PURE__ */ I(), u = Q(() => tp(l.value) ? l.value.$el : l.value), d = (e) => {
			if (!e) return;
			c = e, i = e.ownerDocument.defaultView;
			let n = ++s;
			r = new HT((e) => {
				if (n !== s || !i || (o = e[0], a !== void 0)) return;
				let r = !0;
				a = i.requestAnimationFrame(() => {
					if (!r || n !== s) return;
					r = !1, a = void 0;
					let e = o;
					o = void 0, e && t("resize", e);
				});
			}), r.observe(e);
		}, f = () => {
			s++, a !== void 0 && i?.cancelAnimationFrame(a), a = void 0, o = void 0, i = null, c = void 0, r &&= (r.disconnect(), null);
		};
		return V(u, (e) => {
			e !== c && (r && f(), e && d(e));
		}), Yi(() => {
			u.value && d(u.value);
		}), $i(() => {
			f();
		}), () => {
			let e = Kh(n.default?.() ?? []);
			return e ? Ts(e, { ref: l }, !0) : null;
		};
	}
}), GT = (e, t) => {
	let n = { ...e };
	for (let e of t) e in n && delete n[e];
	return n;
}, KT = (e) => {
	let t = Q(() => {
		if (e.value) return e.value.type === "handle" ? "handle" : "row";
	}), n = /* @__PURE__ */ Jt({
		dragging: !1,
		sourceKey: "",
		sourcePath: [],
		targetPath: [],
		data: {}
	}), r = () => {
		n.dragging = !1, n.sourceKey = "", n.sourcePath = [], n.targetPath = [], n.data = {};
	};
	return {
		dragType: t,
		dragState: n,
		handleDragStart: (e, t, r, i) => {
			if (e.dataTransfer && (e.dataTransfer.effectAllowed = "move", e.target && e.target.tagName === "TD")) {
				let { parentElement: t } = e.target;
				t && t.tagName === "TR" && e.dataTransfer.setDragImage(t, 0, 0);
			}
			n.dragging = !0, n.sourceKey = t, n.sourcePath = r, n.targetPath = [...r], n.data = i;
		},
		handleDragEnter: (e, t) => {
			e.dataTransfer && (e.dataTransfer.dropEffect = "move"), n.targetPath.toString() !== t.toString() && (n.targetPath = t), e.preventDefault();
		},
		handleDragLeave: (e) => {},
		handleDragover: (e) => {
			e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.preventDefault();
		},
		handleDragEnd: (e) => {
			e.dataTransfer?.dropEffect === "none" && r();
		},
		handleDrop: (e) => {
			r(), e.preventDefault();
		}
	};
};
// packages/ui/es/_hooks/use-resize-gesture.mjs
function qT(e) {
	let t = !0, n;
	function r() {
		let e = n;
		if (n = void 0, e) {
			for (let t of ["mousemove", "pointermove"]) e.win.removeEventListener(t, o);
			for (let t of [
				"mouseup",
				"pointerup",
				"pointercancel",
				"contextmenu",
				"blur"
			]) e.win.removeEventListener(t, s);
			e.body.style.cursor === e.ownCursor && (e.body.style.cursor = e.cursor);
		}
	}
	function i() {
		let t = n;
		r(), t && e.cancel?.(t.event);
	}
	function a(e) {
		return n && (!e.type.startsWith("pointer") || e.pointerId === n.pointerId);
	}
	function o(r) {
		let i = n;
		i && t && a(r) && (i.pointerId === void 0 || r.type.startsWith("pointer")) && e.move(r.clientX - i.event.clientX, r.clientY - i.event.clientY, r);
	}
	function s(i) {
		let o = n;
		o && a(i) && (o.pointerId === void 0 || i.type !== "mouseup") && (r(), t && e.end?.(i instanceof MouseEvent ? i : o.event));
	}
	function c(i) {
		if (!t || n || i.button !== 0 || "isPrimary" in i && i.isPrimary === !1) return !1;
		let a = e.element(), c = a?.ownerDocument.defaultView;
		if (!a || !c) return !1;
		i.preventDefault();
		let l = {
			event: i,
			pointerId: i.type === "pointerdown" ? i.pointerId : void 0,
			win: c,
			body: a.ownerDocument.body,
			cursor: a.ownerDocument.body.style.cursor,
			ownCursor: e.cursor()
		};
		if (n = l, e.start(i) === !1 || n !== l || !t) return n === l && r(), !1;
		l.body.style.cursor = l.ownCursor, c.addEventListener(l.pointerId === void 0 ? "mousemove" : "pointermove", o);
		for (let e of [
			"mouseup",
			"pointerup",
			"pointercancel",
			"contextmenu",
			"blur"
		]) c.addEventListener(e, s);
		return !0;
	}
	return Vi(() => {
		t = !1, i();
	}), Bi(() => {
		t = !0;
	}), Qi(() => {
		t = !1, i();
	}), {
		begin: c,
		cancel: i,
		active: () => !!n
	};
}
// packages/ui/es/table/features/resize/use-column-resize.mjs
var JT = (e, t) => {
	let n = /* @__PURE__ */ I(""), r = /* @__PURE__ */ Jt({}), { dir: i } = od(() => Object.values(e.value)[0]), a, o = 0, s = !1, c = (e, n) => {
		let i = Math.max(40, Math.ceil(n));
		r[e] = i, t("column-resize", e, i);
	}, l = () => {
		n.value = "", a = void 0;
	}, u = qT({
		element: () => a,
		cursor: () => "col-resize",
		start() {
			return o = a?.getBoundingClientRect().width ?? 0, s = $u(a) === "rtl", !!o;
		},
		move(t) {
			a === e.value[n.value] ? c(n.value, o + (s ? -t : t)) : d();
		},
		end: l,
		cancel: l
	}), d = () => {
		u.cancel(), l();
	};
	return V(i, d, { flush: "sync" }), {
		resizingColumn: n,
		columnWidth: r,
		handleThMouseDown: (t, r) => {
			r.type === "mousedown" && "PointerEvent" in window || n.value || r.button !== 0 || (a = e.value[t], a && (n.value = t, u.begin(r) || d()));
		},
		handleThMouseUp: d,
		handleThKeydown: (t, n) => {
			if (n.target !== n.currentTarget || ![
				"ArrowLeft",
				"ArrowRight",
				"Home"
			].includes(n.key)) return;
			let i = e.value[t];
			if (!i) return;
			n.preventDefault();
			let a = $u(i) === "rtl" ? "ArrowLeft" : "ArrowRight", o = r[t] ?? i.getBoundingClientRect().width;
			c(t, n.key === "Home" ? 40 : o + (n.key === a ? 1 : -1) * (n.shiftKey ? 50 : 10));
		}
	};
}, YT = ({ columns: e, onFilterChange: t }) => {
	let n = /* @__PURE__ */ I(XT(e.value));
	return V(() => XT(e.value), (e, t) => {
		JS(e, t) || (n.value = e);
	}), {
		_filters: n,
		computedFilters: Q(() => {
			let t = {};
			for (let r of e.value) if (r.dataIndex) {
				let e = r.filterable?.filteredValue ?? n.value[r.dataIndex];
				e && (t[r.dataIndex] = e);
			}
			return t;
		}),
		resetFilters: (r) => {
			let i = r ? [].concat(r) : [], a = i.length ? { ...n.value } : {};
			for (let n of e.value) if (n.dataIndex && n.filterable && (i.length === 0 || i.includes(n.dataIndex))) {
				let e = n.filterable.defaultFilteredValue ?? [];
				a[n.dataIndex] = e, t(n.dataIndex, e);
			}
			n.value = a;
		},
		clearFilters: (r) => {
			let i = r ? [].concat(r) : [], a = i.length ? { ...n.value } : {};
			for (let n of e.value) if (n.dataIndex && n.filterable && (i.length === 0 || i.includes(n.dataIndex))) {
				let e = [];
				a[n.dataIndex] = e, t(n.dataIndex, e);
			}
			n.value = a;
		}
	};
}, XT = (e) => {
	let t = {};
	for (let n of e) n.dataIndex && n.filterable?.defaultFilteredValue && (t[n.dataIndex] = [...n.filterable.defaultFilteredValue]);
	return t;
}, ZT = ({ columns: e, onSorterChange: t }) => {
	let n = /* @__PURE__ */ I(QT(e.value));
	return V(() => QT(e.value), (e, t) => {
		JS(e, t) || (n.value = e);
	}), {
		_sorter: n,
		computedSorter: Q(() => {
			for (let t of e.value) if (t.dataIndex && t.sortable) {
				let e = Xf(t.sortable.sortOrder) ? t.sortable.sortOrder : n.value?.field === t.dataIndex ? n.value.direction : "";
				if (e) return {
					field: t.dataIndex,
					direction: e
				};
			}
		}),
		resetSorters: () => {
			let r;
			for (let n of e.value) n.dataIndex && n.sortable && (!r && n.sortable.defaultSortOrder && (r = {
				field: n.dataIndex,
				direction: n.sortable.defaultSortOrder
			}), t(n.dataIndex, n.sortable.defaultSortOrder ?? ""));
			n.value = r;
		},
		clearSorters: () => {
			for (let n of e.value) n.dataIndex && n.sortable && t(n.dataIndex, "");
		}
	};
}, QT = (e) => {
	for (let t of e) if (t.dataIndex && t.sortable?.defaultSortOrder) return {
		field: t.dataIndex,
		direction: t.sortable.defaultSortOrder
	};
}, $T = (e) => {
	let t = {}, n = /* @__PURE__ */ I([]), r = () => {
		if (t.value) {
			let r = Zh(t.value, e);
			(r.length !== n.value.length || r.toString() !== n.value.toString()) && (n.value = r);
		}
	};
	return Yi(() => r()), Zi(() => r()), {
		children: t,
		components: n,
		getComponents: r
	};
}, eE = (e, t = 1e3) => e !== void 0 && Number.isFinite(e) && e >= 1 ? Math.min(t, Math.trunc(e)) : 1;
function tE(e) {
	let t = [], n = [];
	return e.forEach((e, r) => {
		let i = 0;
		for (let a of e) {
			for (; (t[i] ?? 0) > r;) i++;
			let e = eE(a.colSpan), o = eE(a.rowSpan, 65534);
			for (let s = 0; s < e; s++) {
				let e = i + s;
				(n[e] ??= []).push(a.id), t[e] = r + o;
			}
			i += e;
		}
	}), {
		columnHeaders: n,
		headersForSpan(e, t = 1) {
			let r = /* @__PURE__ */ new Set();
			for (let i = e; i < e + eE(t); i++) for (let e of n[i] ?? []) r.add(e);
			return [...r];
		}
	};
}
// packages/ui/es/table/render/columns.mjs
var nE = (e) => {
	let t = 0, n = (e) => {
		if (Kf(e) && e.length > 0) for (let r of e) r.children ? n(r.children) : t += 1;
	};
	return n(e), t;
}, rE = (e) => {
	let t = 0;
	if (Kf(e) && e.length > 0) {
		t = 1;
		for (let n of e) if (n.children) {
			let e = rE(n.children);
			e > 0 && (t = Math.max(t, e + 1));
		}
	}
	return t;
}, iE = (e, t) => {
	let { parent: n } = e;
	for (; n;) n.fixed === t && (t === "left" ? n.isLastLeftFixed = !0 : n.isFirstRightFixed = !0), n = n.parent;
}, aE = (e) => {
	let t = [], n = (e) => {
		e.forEach((e) => {
			Kf(e.children) && e.children.length ? n(e.children) : t.push(e);
		});
	};
	if (Kf(e.children) && e.children.length && n(e.children), !t.length) return;
	let r = t[0].fixed;
	if (r === "left" || r === "right") return t.every((e) => e.fixed === r) ? r : void 0;
}, oE = (e, t, n, r = "ltr") => {
	let i = rE(e);
	t.clear();
	let a = [], o = [...Array(i)].map(() => []), s = /* @__PURE__ */ new Map(), c, l, u, d, f = (e, { level: r = 0, parent: p, fixed: m } = {}) => {
		for (let h of e) {
			let e = {
				...h,
				parent: p
			};
			if (Kf(e.children)) {
				let t = nE(e.children);
				if (t > 1 && (e.colSpan = t), !e.fixed) {
					let t = aE(e);
					t && (e.fixed = t);
				}
				o[r].push(e);
				let n = a.length;
				f(e.children, {
					level: r + 1,
					parent: e,
					fixed: e.fixed
				}), s.set(e, [n, a.length]);
			} else {
				let s = i - r;
				if (s > 1 && (e.rowSpan = s), (m || e.fixed) && (e.fixed = e.fixed ?? m, e.fixed === "left" ? (c = a.length, u ??= a.length) : Qf(l) && (l = a.length)), e.fixed === "right" && (d = a.length), (Qf(e.dataIndex) || qf(e.dataIndex)) && (e.dataIndex = `__arco_data_index_${a.length}`), lp(e) && t.has(e.dataIndex)) {
					let n = `@cedar-extra:${e.dataIndex}`;
					for (; t.has(n);) n += "@";
					up(e, n);
				}
				let f = dp(e);
				n[f] && (e._resizeWidth = n[f]), lp(e) && t.has(e.dataIndex) || t.set(e.dataIndex, e), a.push(e), o[r].push(e);
			}
		}
	};
	return f(e), r === "rtl" && (c = u, l = d), Qf(c) || (a[c].isLastLeftFixed = !0, iE(a[c], "left")), Qf(l) || (a[l].isFirstRightFixed = !0, iE(a[l], "right")), {
		dataColumns: a,
		groupColumns: o.map((e) => e.flatMap((e) => {
			let t = s.get(e);
			if (!t) return [e];
			let n = _p(a.slice(...t), (e) => e.fixed, r);
			if (r === "ltr" && n.every((t) => t.fixed === e.fixed)) return [e];
			let i = [];
			for (let e of n) {
				let t = i[i.length - 1];
				t && t[0].fixed === e.fixed ? t.push(e) : i.push([e]);
			}
			return i.map((t) => ({
				...e,
				children: t,
				colSpan: t.length,
				fixed: t[0].fixed,
				isLastLeftFixed: t.some((e) => e.isLastLeftFixed),
				isFirstRightFixed: t.some((e) => e.isFirstRightFixed)
			}));
		}))
	};
};
// packages/ui/es/table/table.mjs
function sE(e) {
	return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !vs(e);
}
var cE = {
	wrapper: !0,
	cell: !1,
	headerCell: !1,
	bodyCell: !1
}, { name: lE } = $("table"), uE = /* @__PURE__ */ H({
	name: lE,
	props: Wb,
	emits: {
		"update:selectedKeys": (e) => !0,
		"update:expandedKeys": (e) => !0,
		"update:columns": (e) => !0,
		expand: (e, t) => !0,
		"expanded-change": (e) => !0,
		select: (e, t, n) => !0,
		"select-all": (e) => !0,
		"selection-change": (e) => !0,
		"sorter-change": (e, t) => !0,
		"filter-change": (e, t) => !0,
		"page-change": (e) => !0,
		"page-size-change": (e) => !0,
		change: (e, t, n) => !0,
		"cell-mouse-enter": (e, t, n) => !0,
		"cell-mouse-leave": (e, t, n) => !0,
		"cell-click": (e, t, n) => !0,
		"row-click": (e, t) => !0,
		"header-click": (e, t) => !0,
		"column-resize": (e, t) => !0,
		"row-dblclick": (e, t) => !0,
		"cell-dblclick": (e, t, n) => !0,
		"row-contextmenu": (e, t) => !0,
		"cell-contextmenu": (e, t, n) => !0
	},
	setup(e, { attrs: t, emit: n, slots: r }) {
		let i = sm(), { i18nMessage: a } = Wg(), { columns: o, rowKey: s, rowSelection: c, expandable: l, loadMore: u, filterIconAlignLeft: d, selectedKeys: f, defaultSelectedKeys: p, expandedKeys: m, defaultExpandedKeys: h, defaultExpandAllRows: g, spanMethod: _, draggable: v, summarySpanMethod: y, scrollbar: b, showEmptyTree: x } = /* @__PURE__ */ vn(e), S = Uf("table"), C = Q(() => fp(e.extraColumn)), w = B(Nf, void 0), T = Q(() => Yf(e.bordered) ? {
			...cE,
			...e.bordered
		} : {
			...cE,
			wrapper: e.bordered
		}), { children: E, components: D, getComponents: ee } = $T($("table-column").name), te = Q(() => c.value?.checkStrictly ?? !0), { displayScrollbar: ne, scrollbarProps: O } = $C(b), re = /* @__PURE__ */ I(0), k = /* @__PURE__ */ I(!1), A = /* @__PURE__ */ I(!1), j = {
			onMouseenter: () => {
				k.value = !0;
			},
			onMouseleave: () => {
				k.value = !1;
			},
			onFocusin: () => {
				A.value = !0;
			},
			onFocusout: (e) => {
				A.value = e.relatedTarget instanceof Node && e.currentTarget.contains(e.relatedTarget);
			}
		}, M = /* @__PURE__ */ I(!1), ie = /* @__PURE__ */ I(0), ae = /* @__PURE__ */ Jt({}), oe = Q(() => e.height != null || e.maxHeight != null), se = /* @__PURE__ */ I(), ce = /* @__PURE__ */ I({}), { componentRef: le, elementRef: ue } = QC("containerRef"), { componentRef: N, elementRef: de } = QC("containerRef"), { componentRef: fe, elementRef: pe } = QC("containerRef"), me = Q(() => {
			if (ue.value || de.value) return he.value ? de.value : ue.value;
		}), { dir: P } = od(() => me.value, () => t.dir), he = Q(() => oe.value || e.stickyHeader !== !1 || un.value || Ot.value.length === 0), ge = (e) => Zf(e) ? `${e}px` : e, _e = Q(() => {
			if (e.maxHeight != null) return ge(e.maxHeight);
			if (e.height != null) return Zf(e.height) ? `${e.height}px` : "100%";
		}), ve = /* @__PURE__ */ I(), ye = /* @__PURE__ */ I(), be = () => {
			let e = ve.value;
			if (!e) return;
			let t = e.closest(`.${S}`);
			t && ye.value != null && (t.style.maxWidth = "");
			let n = Math.floor(e.clientWidth), r = e.offsetWidth - e.clientWidth, i = !1;
			if (n > 0) {
				let t = n, a = e.parentElement;
				for (; a && a !== document.body;) {
					let e = getComputedStyle(a), n = Math.floor(a.clientWidth - (parseFloat(e.paddingLeft) || 0) - (parseFloat(e.paddingRight) || 0));
					n > 0 && n < t - 1 && (t = n, i = !0), a = a.parentElement;
				}
				i && (n = Math.max(0, t - r));
			}
			let a = i ? `${n + r}px` : void 0;
			t && (t.style.maxWidth = a ?? ""), ye.value = a, n > 0 && n !== re.value && (re.value = n);
		};
		Yi(() => {
			window.addEventListener("resize", be);
		}), Qi(() => {
			window.removeEventListener("resize", be);
		});
		let xe = () => {
			be();
		}, Se = /* @__PURE__ */ Jt(/* @__PURE__ */ new Map()), Ce = /* @__PURE__ */ I();
		V([D, Se], ([e, t]) => {
			if (e.length === 0 && t.size > 0) Ce.value = [...t.values()];
			else if (e.length > 0) {
				let n = [];
				e.forEach((e) => {
					let r = t.get(e);
					r && n.push(r);
				}), Ce.value = n;
			} else Ce.value = void 0;
		}, { flush: "sync" });
		let we = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ I([]), Te = /* @__PURE__ */ I([]), { resizingColumn: Ee, columnWidth: De, handleThMouseDown: Oe, handleThMouseUp: ke, handleThKeydown: Ae } = JT(ce, n);
		V([
			o,
			Ce,
			De,
			() => C.value,
			() => e.size,
			P
		], ([e, t, , n, r, i]) => {
			let a = [...t ?? e ?? []];
			if (n.enabled) {
				let e = `${S}-extra-column-cell`;
				a.push(cp({
					dataIndex: n.dataIndex,
					title: "",
					width: pp(r, n.width),
					fixed: n.fixed,
					align: n.align,
					headerCellClass: e,
					cellClass: e,
					slotName: "extra-column-cell",
					render: () => null
				}));
			}
			let o = oE(a, we, De, i);
			F.value = o.dataColumns, Te.value = o.groupColumns;
		}, {
			immediate: !0,
			deep: !0,
			flush: "sync"
		});
		let je = Q(() => [
			"tl",
			"top",
			"tr"
		].includes(e.pagePosition)), Me = /* @__PURE__ */ I(!1), Ne = /* @__PURE__ */ I(!1), Pe = /* @__PURE__ */ I(!1);
		Sr(() => {
			let t = !1, n = !1, r = !1;
			(e.rowSelection?.fixed || e.expandable?.fixed || e.draggable?.fixed) && (t = !0);
			for (let e of F.value) e.fixed === "left" ? (t = !0, r = !0) : e.fixed === "right" && (n = !0);
			t !== Me.value && (Me.value = t), n !== Ne.value && (Ne.value = n), r !== Pe.value && (Pe.value = r);
		});
		let Fe = Q(() => {
			for (let e of F.value) if (e.ellipsis) return !0;
			return !1;
		}), Ie = (e) => {
			let t = {
				type: e,
				page: Ct.value,
				pageSize: wt.value,
				sorter: We.value,
				filters: Be.value,
				dragTarget: e === "drag" ? mt.data : void 0
			};
			n("change", kt.value, t, St.value);
		}, Le = (e, t) => {
			ze.value = {
				...Be.value,
				[e]: t
			}, n("filter-change", e, t), Ie("filter");
		}, Re = (e, t) => {
			Ue.value = t ? {
				field: e,
				direction: t
			} : void 0, n("sorter-change", e, t), Ie("sorter");
		}, { _filters: ze, computedFilters: Be, resetFilters: Ve, clearFilters: He } = YT({
			columns: F,
			onFilterChange: Le
		}), { _sorter: Ue, computedSorter: We, resetSorters: Ge, clearSorters: Ke } = ZT({
			columns: F,
			onSorterChange: Re
		}), qe = /* @__PURE__ */ new Set(), Je = Q(() => {
			let t = [];
			qe.clear();
			let n = (e) => {
				if (Kf(e) && e.length > 0) for (let r of e) t.push(r[s.value]), r.disabled && qe.add(r[s.value]), r.children && n(r.children);
			};
			return n(e.data), t;
		}), Ye = Q(() => {
			let e = [], t = (n) => {
				for (let r of n) e.push(r.key), r.children && t(r.children);
			};
			return t(Ot.value), e;
		}), Xe = Q(() => {
			let e = [], t = (n) => {
				for (let r of n) r.disabled || e.push(r.key), r.children && t(r.children);
			};
			return t(Ot.value), e;
		}), { selectedRowKeys: Ze, currentSelectedRowKeys: Qe, handleSelect: $e, handleSelectAllLeafs: et, handleSelectAll: tt, select: nt, selectAll: rt, clearSelected: it } = Jb({
			selectedKeys: f,
			defaultSelectedKeys: p,
			rowSelection: c,
			currentAllRowKeys: Ye,
			currentAllEnabledRowKeys: Xe,
			emit: n
		}), { expandedRowKeys: at, handleExpand: ot, expand: st, expandAll: ct } = Yb({
			expandedKeys: m,
			defaultExpandedKeys: h,
			defaultExpandAllRows: g,
			expandable: l,
			allRowKeys: Je,
			emit: n
		}), { lazyLoadRevision: lt, getLazyChildren: ut, addLazyLoadData: dt } = Ob(e), ft = (e) => kb(e.raw, () => Be.value, (e) => we.get(e)), { dragType: pt, dragState: mt, handleDragStart: ht, handleDragEnter: gt, handleDragover: _t, handleDragEnd: vt, handleDrop: yt } = KT(v), bt = Q(() => {
			lt.value;
			let t = (n) => {
				let r = [];
				for (let i of n) {
					let n = {
						raw: i,
						key: i[e.rowKey],
						disabled: i.disabled,
						expand: i.expand,
						isLeaf: i.isLeaf
					};
					if (i.children) n.isLeaf = !1, n.children = t(i.children);
					else if (e.loadMore && !i.isLeaf) {
						n.isLeaf = !1;
						let e = ut(i);
						e && (n.children = t(e));
					} else n.isLeaf = !0;
					n.hasSubtree = !!(n.children ? !e.hideExpandButtonOnEmpty || n.children.length > 0 : e.loadMore && !n.isLeaf), r.push(n);
				}
				return r;
			};
			return t(e.data ?? []);
		}), xt = Q(() => Object.keys(Be.value).length > 0 ? Ab(bt.value, ft) : bt.value), St = Q(() => {
			let e = og(xt.value);
			if (e.length > 0) {
				jb(e, We.value, we.get(We.value?.field ?? ""), (e) => e.raw);
				let { sourcePath: t, targetPath: n } = mt;
				if (mt.dragging && n.length && n.toString() !== t.toString() && t.length === n.length && t.slice(0, -1).toString() === n.slice(0, -1).toString()) {
					let r = e;
					for (let e = 0; e < t.length; e++) {
						let i = t[e];
						if (e >= t.length - 1) {
							let t = r[i], a = n[e];
							a > i ? (r.splice(a + 1, 0, t), r.splice(i, 1)) : (r.splice(a, 0, t), r.splice(i + 1, 1));
						} else r = r[i].children ?? [];
					}
				}
			}
			return e;
		}), { page: Ct, pageSize: wt, handlePageChange: Tt, handlePageSizeChange: Et } = Xb(e, n), Dt = Q(() => c.value?.onlyCurrent ?? !1);
		V(Ct, (e, t) => {
			e !== t && Dt.value && it();
		});
		let Ot = Q(() => Mb(St.value, e.pagination, Ct.value, wt.value)), kt = Q(() => sg(Ot.value)), At = ip({
			props: e,
			dataColumns: F,
			flattenData: Ot,
			flattenRawData: kt
		}), jt = /* @__PURE__ */ I(0), Mt = 0, Nt = /* @__PURE__ */ I(!0), Pt = /* @__PURE__ */ I(!0), Ft = () => {
			let e = !0, t = !0, n = me.value;
			if (n) {
				let r = lm(n);
				e = r === 0, t = Math.ceil(r + n.clientWidth) >= n.scrollWidth;
			}
			e !== Nt.value && (Nt.value = e), t !== Pt.value && (Pt.value = t);
		};
		V(P, () => {
			let e = me.value;
			e && pm(e, Mt), zt(), Ft();
		}, { flush: "post" });
		let It = () => Nt.value && Pt.value ? `${S}-scroll-position-both` : Nt.value ? `${S}-scroll-position-left` : Pt.value ? `${S}-scroll-position-right` : `${S}-scroll-position-middle`, Lt = () => {
			let e = [];
			return Me.value && e.push(`${S}-has-fixed-col-left`), Ne.value && e.push(`${S}-has-fixed-col-right`), e;
		}, Rt = (e) => {
			e.target.scrollLeft !== jt.value && (jt.value = e.target.scrollLeft), me.value && (Mt = fm(me.value)), Ft();
		};
		function zt() {
			let e = me.value;
			if (!e) return;
			let t = fm(e);
			pe.value && pm(pe.value, t), se.value && pm(se.value, t);
		}
		V(me, (e) => {
			e && (jt.value = e.scrollLeft, Mt = fm(e), zt(), Ft());
		}, { flush: "post" });
		let Bt = (e) => {
			Rt(e), zt();
		}, Vt = (e, t) => {
			n("row-click", e.raw, t);
		}, Ht = (e, t) => {
			n("row-dblclick", e.raw, t);
		}, Ut = (e, t) => {
			n("row-contextmenu", e.raw, t);
		}, Wt = (e, t, r) => {
			n("cell-click", e.raw, t, r);
		}, Gt = Kb((e, t, r) => {
			n("cell-mouse-enter", e.raw, t, r);
		}, 30), Kt = Kb((e, t, r) => {
			n("cell-mouse-leave", e.raw, t, r);
		}, 30), qt = (e, t, r) => {
			n("cell-dblclick", e.raw, t, r);
		}, Yt = (e, t, r) => {
			n("cell-contextmenu", e.raw, t, r);
		}, Xt = (e, t) => {
			n("header-click", e, t);
		}, Zt = Q(() => {
			let t = [], n = Me.value || Ne.value, r, i, a;
			if (e.draggable?.type === "handle" && (r = {
				name: "drag-handle",
				title: e.draggable.title,
				width: e.draggable.width,
				fixed: e.draggable.fixed || n
			}, t.push(r)), e.expandable && (i = {
				name: "expand",
				title: e.expandable.title,
				width: e.expandable.width,
				fixed: e.expandable.fixed || n
			}, t.push(i)), e.rowSelection && (a = {
				name: e.rowSelection.type === "radio" ? "selection-radio" : "selection-checkbox",
				title: e.rowSelection.title,
				width: e.rowSelection.width,
				fixed: e.rowSelection.fixed || n
			}, t.push(a)), !Pe.value && t.length > 0 && t[t.length - 1].fixed && (t[t.length - 1].isLastLeftFixed = !0), P.value === "rtl") {
				t.forEach((e) => {
					e.isLastLeftFixed = !1;
				});
				let e = t.find((e) => e.fixed);
				e && (e.isLastLeftFixed = !0);
			}
			let o = e.components?.operations;
			return $f(o) ? o({
				dragHandle: r,
				expand: i,
				selection: a
			}) : t;
		}), Qt = Q(() => Te.value.length ? Te.value : Zt.value.length ? [[]] : []), $t = Q(() => e.maxHeight != null || Fe.value ? "fixed" : e.tableLayout);
		V([$t, () => e.columnResizable], ke, { flush: "sync" });
		let en = () => {
			for (let e of Zt.value) e._realWidth !== void 0 && delete e._realWidth;
			let t = $b({
				containerWidth: re.value,
				dataColumns: F.value,
				operations: Zt.value,
				fit: e.fit,
				exactDataIndexes: C.value.enabled ? [C.value.dataIndex] : void 0
			});
			M.value = t.hasHorizontalOverflow, ie.value = t.bodyWidth, Object.keys(ae).forEach((e) => {
				e in t.columnRealWidth || delete ae[e];
			}), Object.assign(ae, t.columnRealWidth);
		};
		V([
			F,
			Zt,
			re,
			() => e.fit,
			$t,
			() => Object.keys(De).map((e) => `${e}:${De[e]}`).join("|")
		], () => {
			en();
		}, { immediate: !0 });
		let tn = () => {
			if ($t.value !== "auto" || !Me.value && !Ne.value) return;
			let e = ve.value;
			if (!e) return;
			let t = Array.from(e.querySelectorAll("th[data-column-key]"));
			if (t.length === 0) {
				let n = e.querySelector("tbody tr");
				t = n ? Array.from(n.querySelectorAll("td[data-column-key]")) : [];
			}
			if (t.length > 0) {
				let e = new Map(F.value.map((e) => [dp(e), e]));
				for (let n of t) {
					let t = n.getAttribute("data-column-layout-key") ?? n.getAttribute("data-column-key"), r = t ? e.get(t) : void 0;
					if (!r) continue;
					let i = n.getBoundingClientRect().width;
					i > 0 && r._realWidth !== i && (r._realWidth = i);
				}
			}
			let n = e.querySelectorAll("th[data-operation-key]");
			if (n.length > 0) {
				let e = new Map(Zt.value.map((e) => [e.name, e]));
				n.forEach((t) => {
					let n = t.getAttribute("data-operation-key"), r = n ? e.get(n) : void 0;
					if (!r) return;
					let i = t.getBoundingClientRect().width;
					i > 0 && r._realWidth !== i && (r._realWidth = i);
				});
			}
		};
		Cr(() => {
			ie.value, F.value, Zt.value, $t.value, Ot.value, tn();
		});
		let nn = Q(() => {
			if (ie.value > 0) return { width: `${ie.value}px` };
		}), rn = Q(() => nn.value), an = Q(() => nn.value);
		vr(hp, /* @__PURE__ */ Jt({
			readingDirection: P,
			physicalDataColumns: F,
			hasPhysicalLeftOperations: Q(() => Zt.value.some((e) => e.fixed)),
			loadMore: u,
			addLazyLoadData: dt,
			slots: r,
			sorter: We,
			filters: Be,
			filterIconAlignLeft: d,
			resizingColumn: Ee,
			checkStrictly: te,
			currentAllEnabledRowKeys: Xe,
			currentSelectedRowKeys: Qe,
			addColumn: (e, t) => {
				Se.set(e, t);
			},
			removeColumn: (e) => {
				Se.delete(e);
			},
			onSelectAll: tt,
			onSelect: $e,
			onSelectAllLeafs: et,
			onSorterChange: Re,
			onFilterChange: Le,
			onThMouseDown: Oe,
			onThKeydown: Ae,
			tableLayout: $t,
			extraColumnDataIndex: Q(() => C.value.enabled ? C.value.dataIndex : void 0)
		}));
		let on = Q(() => [
			S,
			`${S}-size-${e.size}`,
			{
				[`${S}-border`]: T.value.wrapper,
				[`${S}-border-cell`]: T.value.cell,
				[`${S}-border-header-cell`]: !T.value.cell && T.value.headerCell,
				[`${S}-border-body-cell`]: !T.value.cell && T.value.bodyCell,
				[`${S}-stripe`]: e.stripe,
				[`${S}-hover`]: e.hoverable,
				[`${S}-dragging`]: mt.dragging,
				[`${S}-type-selection`]: !!e.rowSelection,
				[`${S}-empty`]: e.data && Ot.value.length === 0,
				[`${S}-layout-fixed`]: $t.value === "fixed",
				[`${S}-scrollport-visible`]: e.stickyHeader !== !1 || e.stickyPagination !== !1
			}
		]), sn = Q(() => [`${S}-pagination`, {
			[`${S}-pagination-left`]: e.pagePosition === "tl" || e.pagePosition === "bl",
			[`${S}-pagination-center`]: e.pagePosition === "top" || e.pagePosition === "bottom",
			[`${S}-pagination-right`]: e.pagePosition === "tr" || e.pagePosition === "br",
			[`${S}-pagination-top`]: je.value
		}]), cn = Q(() => {
			let e = Lt();
			return M.value && (e.push(`${S}-scroll-x`), e.push(It())), he.value && e.push(`${S}-split`), e;
		}), un = Q(() => !!e.virtualListProps), dn = /* @__PURE__ */ I({}), fn = () => {
			let e = {};
			for (let t of Object.keys(ce.value)) e[t] = ce.value[t].offsetWidth;
			dn.value = e;
		};
		sh(() => Object.values(ce.value), () => un.value, fn);
		let L = /* @__PURE__ */ I(!1), pn = () => de.value ? de.value.offsetWidth > de.value.clientWidth : !1, mn = () => {
			let e = pn();
			L.value !== e && (L.value = e), Ft(), fn();
		};
		Yi(() => {
			L.value = pn(), fn();
		});
		let hn = Q(() => Yf(e.loading) ? e.loading : { loading: e.loading }), gn = (e = !1) => r.empty ? Y(Ep, null, Dp(r.empty)) : w?.slots.empty?.({ component: "table" }) ?? Y(cw, { imageSize: e ? "var(--c-table-empty-image-size)" : void 0 }, null), _n = (e) => {
			let t;
			return Y(bp, {
				empty: !0,
				"aria-rowindex": e
			}, { default: () => [Y(ag, { colSpan: F.value.length + Zt.value.length }, sE(t = gn()) ? t : { default: () => [t] })] });
		}, yn = (t) => {
			if (t.expand) return $f(t.expand) ? t.expand() : t.expand;
			if (r["expand-row"]) return Y(Ep, { slotProps: { record: t.raw } }, Dp(r["expand-row"]));
			if (e.expandable?.expandedRowRender) return e.expandable.expandedRowRender(t.raw);
		}, bn = Q(() => [].concat(Zt.value, F.value)), xn = `c-table-header-${Zp()}`, Sn = (e, t) => `${xn}-visible-${e}-${t}`, Cn = (e) => `${xn}-visible-operation-${e}`, wn = /* @__PURE__ */ ln(r.th), Tn = Q(() => Qt.value.map((e) => e.map((e) => vp(wn.value?.({ column: e }))))), En = (e) => typeof e == "string" && e.trim() ? e : void 0, Dn = (e) => typeof e == "string" && /[^ \t\n\f\r]/.test(e) ? e : void 0, On = (e) => Qt.value.map((t, n) => [...n === 0 ? Zt.value.map((t, n) => ({
			id: `${xn}-${e}-operation-${n}`,
			source: Cn(n),
			colSpan: void 0,
			rowSpan: Qt.value.length
		})) : [], ...t.map((t, r) => ({
			id: `${xn}-${e}-${n}-${r}`,
			source: Sn(n, r),
			label: En(Tn.value[n]?.[r]?.props?.["aria-label"]),
			labelledby: Dn(Tn.value[n]?.[r]?.props?.["aria-labelledby"]),
			sortOrder: e === "body" && !lp(t) && t.dataIndex && t.dataIndex === We.value?.field ? We.value.direction : void 0,
			colSpan: t.colSpan,
			rowSpan: t.rowSpan
		}))]), kn = Q(() => tE(On("body"))), An = Q(() => tE(On("summary"))), jn = (t, n, r) => {
			if (he.value && e.showHeader) return (t === "body" ? kn.value : An.value).headersForSpan(n, r).join(" ") || void 0;
		}, Mn = (t, n) => e.showHeader && Y("thead", { style: {
			position: "absolute",
			width: "1px",
			height: "1px",
			overflow: "hidden",
			clipPath: "inset(50%)"
		} }, [On(t).map((e, r) => Y("tr", {
			key: r,
			"aria-rowindex": t === "body" && n ? r + 1 : void 0
		}, [e.map((e) => Y("th", {
			key: e.id,
			id: e.id,
			"aria-label": "label" in e && e.labelledby ? void 0 : "label" in e && e.label ? e.label : void 0,
			"aria-labelledby": "labelledby" in e && e.labelledby ? e.labelledby : "label" in e && e.label ? void 0 : e.source,
			"aria-sort": "sortOrder" in e && e.sortOrder === "ascend" ? "ascending" : "sortOrder" in e && e.sortOrder === "descend" ? "descending" : void 0,
			colspan: e.colSpan || void 0,
			rowspan: e.rowSpan || void 0
		}, null))]))]), { tableSpan: Nn, removedCells: Pn } = mp({
			spanMethod: _,
			data: Ot,
			columns: Q(() => e.spanAll ? bn.value : F.value)
		}), Fn = (e) => {
			if (un.value && e && dn.value[e]) return { width: `${dn.value[e]}px` };
		}, In = () => Y(Hw, {
			dataColumns: F.value,
			operations: Zt.value,
			columnWidth: De,
			columnRealWidth: ae,
			tableLayout: $t.value
		}, null), Ln = (e, t) => ({
			onClick: (n) => Wt(e, t, n),
			onDblclick: (n) => qt(e, t, n),
			onMouseenter: (n) => Gt(e, t, n),
			onMouseleave: (n) => Kt(e, t, n),
			onContextmenu: (n) => Yt(e, t, n)
		}), Rn = vb({
			props: e,
			slots: r,
			prefixCls: S,
			summaryData: At,
			dataColumns: F,
			operations: Zt,
			allColumns: bn,
			summarySpanMethod: y,
			getVirtualColumnStyle: Fn,
			cellHeaders: jn,
			handleRowClick: Vt,
			summaryRef: se,
			hasScrollBar: L,
			contentStyle: an,
			renderSemanticHeader: Mn
		}, Ln, In), zn = (t, n = !0) => {
			let i = t.key, o = at.value.includes(i);
			return Y("button", {
				type: "button",
				class: `${S}-expand-btn`,
				"aria-label": o ? a.value.table?.collapseRow ?? a.value.filterForm?.collapseMore : a.value.table?.expandRow ?? a.value.filterForm?.expandMore,
				"aria-expanded": o,
				onClick: (e) => {
					ot(i, t.raw), n && e.stopPropagation();
				}
			}, [r["expand-icon"] ? Y(Ep, { slotProps: {
				expanded: o,
				record: t.raw
			} }, Dp(r["expand-icon"])) : e.expandable?.icon?.(o, t.raw) ?? Y(o ? db : sb, null, null)]);
		}, Bn = (e, { indentSize: t, indexPath: n, allowDrag: r, expandContent: i, positions: a }) => {
			if (e.hasSubtree) return e.children?.length === 0 && x.value ? _n(a?.extraIndices.get(e.key)) : e.children?.map((e, i) => Vn(e, i, {
				indentSize: t,
				indexPath: n,
				allowDrag: r,
				positions: a
			}));
			if (i) {
				let t = me.value;
				return Y(bp, {
					key: `${e.key}-expand`,
					expand: !0,
					"aria-rowindex": a?.extraIndices.get(e.key)
				}, { default: () => [Y(ag, {
					isFixedExpand: Me.value || Ne.value,
					containerWidth: t?.clientWidth,
					colSpan: F.value.length + Zt.value.length
				}, sE(i) ? i : { default: () => [i] })] });
			}
			return null;
		}, Vn = (t, n, { indentSize: i = 0, indexPath: a, allowDrag: o = !0, positions: s } = {}) => {
			let c = t.key, l = (a ?? []).concat(n), u = s?.details.has(t.key) ? s.details.get(t.key) : yn(t), d = at.value.includes(c), f = mt.sourceKey === t.key, p = pt.value ? {
				draggable: o,
				onDragstart: (e) => {
					o && ht(e, t.key, l, t.raw);
				},
				onDragend: (e) => {
					o && vt(e);
				}
			} : {}, m = pt.value ? {
				onDragenter: (e) => {
					o && gt(e, l);
				},
				onDragover: (e) => {
					o && _t(e);
				},
				onDrop: (e) => {
					o && (Ie("drag"), yt(e));
				}
			} : {};
			return Y(W, { key: c }, [Y(bp, Z({
				key: c,
				"aria-rowindex": s?.indices.get(t.key),
				class: [{
					[`${S}-tr-draggable`]: pt.value === "row",
					[`${S}-tr-drag`]: f
				}, $f(e.rowClass) ? e.rowClass(t.raw, n) : e.rowClass],
				rowIndex: n,
				record: t,
				checked: e.rowSelection && Ze.value?.includes(c),
				onClick: (e) => Vt(t, e),
				onDblclick: (e) => Ht(t, e),
				onContextmenu: (e) => Ut(t, e)
			}, pt.value === "row" ? p : {}, m), {
				default: () => [Zt.value.map((i, a) => {
					let o = `${n}-${a}-${t.key}`, [s, c] = e.spanAll ? Nn.value[o] ?? [1, 1] : [1, 1];
					if (e.spanAll && Pn.value.includes(o)) return null;
					let l = Fn(i.name);
					return Y(_b, Z({
						headers: jn("body", a, c),
						key: `operation-td-${a}`,
						style: l,
						operationColumn: i,
						operations: Zt.value,
						record: t,
						hasExpand: !!u,
						selectedRowKeys: Qe.value,
						rowSpan: s,
						colSpan: c,
						renderExpandBtn: zn
					}, pt.value === "handle" ? p : {}), {
						"drag-handle-icon": r["drag-handle-icon"],
						_: 2
					});
				}), F.value.map((a, o) => {
					let s = `${n}-${e.spanAll ? Zt.value.length + o : o}-${t.key}`, [c, l] = Nn.value[s] ?? [1, 1];
					if (Pn.value.includes(s)) return null;
					let u = o === 0 ? {
						showExpandBtn: t.hasSubtree,
						indentSize: t.hasSubtree ? i - 20 : i
					} : {}, d = Fn(dp(a));
					return Y(ag, Z({
						headers: jn("body", Zt.value.length + o, l),
						key: `td-${o}`,
						style: d,
						rowIndex: n,
						record: t,
						column: a,
						operations: Zt.value,
						dataColumns: F.value,
						rowSpan: c,
						renderExpandBtn: zn,
						colSpan: l
					}, u, Ln(t, a)), { td: r.td });
				})],
				tr: r.tr
			}), d && Bn(t, {
				indentSize: i + e.indentSize,
				indexPath: l,
				allowDrag: o && !f,
				expandContent: u,
				positions: s
			})]);
		}, Hn = () => {
			let e = Ot.value.some((e) => !!e.hasSubtree);
			return Y(qw, null, {
				default: () => [Ot.value.length > 0 ? Ot.value.map((t, n) => Vn(t, n, { indentSize: e ? 20 : 0 })) : _n()],
				tbody: r.tbody
			});
		}, Un = () => Y(Gw, null, {
			default: () => [Qt.value.map((t, n) => Y(bp, { key: `header-row-${n}` }, { default: () => [n === 0 && Zt.value.map((t, n) => Y(pT, {
				key: `operation-th-${n}`,
				id: he.value ? Cn(n) : void 0,
				ref: (e) => {
					e?.$el && t.name ? ce.value[t.name] = e.$el : t.name && delete ce.value[t.name];
				},
				operationColumn: t,
				operations: Zt.value,
				selectAll: !!(t.name === "selection-checkbox" && e.rowSelection?.showCheckedAll),
				rowSpan: Qt.value.length
			}, null)), t.map((r, i) => {
				let a = dp(r), o = e.columnResizable && $t.value === "fixed" && !!r.dataIndex && i < t.length - 1;
				return Y(dT, {
					key: `th-${i}`,
					semanticLabelId: he.value ? Sn(n, i) : void 0,
					ref: (e) => {
						e?.$el && a ? ce.value[a] = e.$el : a && delete ce.value[a];
					},
					customHeader: Tn.value[n]?.[i],
					column: r,
					operations: Zt.value,
					dataColumns: F.value,
					resizable: o,
					onClick: (e) => Xt(r, e)
				}, null);
			})] }))],
			thead: r.thead
		}), Wn = Db({
			props: e,
			slots: r,
			prefixCls: S,
			flattenData: Ot,
			tbodyComRef: N,
			contentStyle: an,
			displayHeaderRows: Qt,
			expandedRowKeys: at,
			showEmptyTree: x,
			renderExpandContent: yn,
			renderSemanticHeader: Mn,
			renderRecord: Vn,
			onTbodyScroll: Bt
		}), Gn = Q(() => e.pagination !== !1 && e.stickyPagination !== !1 && (Ot.value.length > 0 || St.value.length > 0)), Kn = () => {
			let { positions: t, prepareRange: n } = Wn.plan() ?? {};
			if (he.value) {
				let i = Zf(e.stickyHeader) ? `${e.stickyHeader}px` : void 0, a = ne.value || Gn.value ? Hb : "div", o = () => Y(a, Z({
					ref: fe,
					class: `${S}-header`,
					style: { overflowY: L.value ? "scroll" : void 0 }
				}, b.value || Gn.value ? {
					disableVertical: !0,
					...O.value,
					hide: !0,
					disableHorizontal: Gn.value || !M.value
				} : void 0), { default: () => [Y("table", {
					class: `${S}-element`,
					style: rn.value,
					cellpadding: 0,
					cellspacing: 0
				}, [In(), Un()])] });
				return Y(W, null, [
					e.showHeader && (e.stickyHeader === !1 ? o() : Y("div", {
						class: `${S}-header-sticky`,
						style: i ? { top: i } : void 0
					}, [o()])),
					Y(WT, { onResize: mn }, { default: () => [Ot.value.length === 0 ? Y("div", {
						class: `${S}-empty-body`,
						style: { maxHeight: _e.value }
					}, [Y(a, Z({
						ref: N,
						class: `${S}-body`
					}, b.value || Gn.value ? {
						outerStyle: {
							height: "100%",
							minHeight: "0"
						},
						...O.value,
						disableHorizontal: Gn.value || !M.value
					} : void 0, { onScroll: Bt }), { default: () => [Y("table", {
						class: `${S}-element`,
						style: {
							...an.value,
							height: "100%"
						},
						cellpadding: 0,
						cellspacing: 0
					}, [Mn("body"), Y(qw, null, {
						default: () => [Y(bp, { empty: !0 }, { default: () => [Y(ag, { colSpan: F.value.length + Zt.value.length }, null)] })],
						tbody: r.tbody
					})])] }), Y("div", { class: `${S}-empty-overlay` }, [Y("div", { class: `${S}-empty-content` }, [gn(!0)])])]) : un.value ? Wn.render(t, n) : Y(a, Z({
						ref: N,
						class: `${S}-body`,
						style: { maxHeight: _e.value }
					}, b.value || Gn.value ? {
						outerStyle: {
							display: "flex",
							minHeight: "0"
						},
						...O.value,
						disableHorizontal: Gn.value || !M.value
					} : void 0, { onScroll: Bt }), { default: () => [Y("table", {
						class: `${S}-element`,
						style: an.value,
						cellpadding: 0,
						cellspacing: 0
					}, [
						Ot.value.length !== 0 && In(),
						Mn("body"),
						Hn()
					])] })] }),
					Rn.panel()
				]);
			}
			return Y(WT, { onResize: () => Ft() }, { default: () => [Y("table", {
				class: `${S}-element`,
				cellpadding: 0,
				cellspacing: 0,
				style: an.value
			}, [
				In(),
				e.showHeader && Un(),
				Hn(),
				At.value && At.value.length > 0 && Rn.render()
			])] });
		}, qn = (e) => {
			let t = ne.value || Gn.value ? Hb : "div";
			return Y(W, null, [Y("div", {
				ref: ve,
				class: [`${S}-container`, cn.value]
			}, [Y(t, Z({
				ref: le,
				class: [`${S}-content`, { [`${S}-content-scroll-x`]: !he.value && M.value }]
			}, b.value || Gn.value ? {
				outerStyle: { height: "100%" },
				...O.value,
				disableHorizontal: Gn.value || !M.value
			} : void 0, { onScroll: Rt }), { default: () => [e ? Y("table", {
				class: `${S}-element`,
				style: an.value,
				cellpadding: 0,
				cellspacing: 0
			}, [e()]) : Kn()] })]), r.footer && Y("div", { class: `${S}-footer` }, [Y(Ep, null, Dp(r.footer))])]);
		}, Jn = (t = !1) => {
			let n = Yf(e.pagination) ? GT(e.pagination, [
				"container",
				"modelValue",
				"pageSize",
				"defaultValue",
				"defaultPageSize"
			]) : {}, a = Zf(e.stickyPagination) ? { bottom: `${e.stickyPagination}px` } : void 0, o = {
				page: Ct.value,
				pageSize: wt.value,
				total: n.total ?? xt.value.length,
				onChange: (e) => {
					Tt(e), Ie("pagination");
				},
				onPageSizeChange: (e) => {
					Et(e), Ie("pagination");
				}
			};
			return Y("div", Z(i.value, {
				dir: P.value,
				class: [sn.value, { [`${S}-pagination-sticky`]: e.stickyPagination !== !1 }],
				style: [i.value.style, t ? void 0 : a]
			}), [
				r["pagination-left"] && Y(Ep, null, Dp(r["pagination-left"])),
				r.pagination ? Y(Ep, { slotProps: { ...o } }, Dp(r.pagination)) : Y(Lw, Z({
					total: o.total,
					modelValue: o.page,
					pageSize: o.pageSize,
					onChange: o.onChange,
					"onPage-size-change": o.onPageSizeChange
				}, n), null),
				r["pagination-right"] && Y(Ep, null, Dp(r["pagination-right"]))
			]);
		}, Yn = Q(() => Yf(e.pagination) ? e.pagination.container : void 0), Xn = /* @__PURE__ */ ln(), Zn = 0;
		V(Yn, (e) => {
			let t = ++Zn;
			if (!e || typeof e != "string" || typeof document > "u") {
				Xn.value = e;
				return;
			}
			let n = () => {
				try {
					return document.querySelector(e);
				} catch {
					return null;
				}
			};
			n() ? Xn.value = e : R(() => {
				t === Zn && n() && (Xn.value = e);
			});
		}, { immediate: !0 }), Qi(() => {
			Zn++;
		});
		let Qn = () => {
			let t = e.stickyPagination === !1 ? Jn() : Y("div", Z(i.value, {
				dir: P.value,
				class: `${S}-footer-sticky`,
				style: [i.value.style, Zf(e.stickyPagination) ? { bottom: `${e.stickyPagination}px` } : void 0]
			}), [Y(Ub, {
				layoutWidth: ie.value,
				container: me.value,
				active: k.value || A.value
			}, null), Jn(!0)]), n = Xn.value;
			return n ? Y(zr, { to: n }, sE(t) ? t : { default: () => [t] }) : Yn.value ? null : t;
		}, $n = Q(() => {
			let t = {};
			return Xf(e.height) && (t.height = e.height), ye.value != null && (t.maxWidth = ye.value), Object.keys(t).length > 0 ? t : void 0;
		}), er = Ls(), tr = [], nr = () => {
			let e = er.vnode.children, t = e && !Array.isArray(e) && typeof e == "object" ? e : {}, n = Object.keys(t).filter((e) => e !== "_" && e !== "$stable").sort().flatMap((e) => [e, t[e]]);
			return (n.length !== tr.length || n.some((e, t) => e !== tr[t])) && (tr = n, wn.value = r.th), tr;
		}, rr = /* @__PURE__ */ H({
			props: {
				rowSlotState: Number,
				slotSnapshot: Array
			},
			setup: () => () => qn()
		}), ir = (e) => {
			if (!e) return ee();
			let t = Xh(e, $("table-column").name);
			(t.length !== D.value.length || t.some((e, t) => e !== D.value[t])) && (D.value = t);
		}, ar = (e) => {
			if (Array.isArray(e)) return e.map(ar);
			if (!vs(e)) return e;
			if (e.type === W) {
				let t = Ts(e);
				return t.patchFlag = -2, t.dynamicChildren = null, t.children = ar(e.children), t;
			}
			if (e.type?.name === $("table-column").name) {
				let t = Ts(e);
				return t.patchFlag = 16, t;
			}
			return e;
		}, or, sr, cr = 0;
		return {
			render: () => {
				let t = nr();
				if (r.default) {
					let e;
					return Y(WT, { onResize: xe }, { default: () => [Y("div", Z({
						class: on.value,
						"aria-busy": hn.value.loading || void 0
					}, j, { style: ye.value == null ? void 0 : { maxWidth: ye.value } }), [Y(Jg, hn.value, sE(e = qn(r.default)) ? e : { default: () => [e] })])] });
				}
				return r.columns !== or && (or = r.columns, sr = r.columns ? Y(Uw, {
					revision: ++cr,
					onChanged: ir
				}, {
					default: (...e) => ar(or(...e)),
					$stable: !0
				}) : void 0), E.value = sr ? [sr] : void 0, Y(WT, { onResize: xe }, { default: () => [Y("div", Z({
					class: on.value,
					style: $n.value,
					"aria-busy": hn.value.loading || void 0
				}, j), [E.value, Y(Jg, hn.value, { default: () => [
					e.pagination !== !1 && (Ot.value.length > 0 || St.value.length > 0) && je.value && Qn(),
					Y(rr, {
						rowSlotState: +!!r.tr | (r["expand-row"] ? 2 : 0),
						slotSnapshot: t
					}, null),
					e.pagination !== !1 && (Ot.value.length > 0 || St.value.length > 0) && !je.value && Qn()
				] })])] });
			},
			selfExpand: st,
			selfExpandAll: ct,
			selfSelect: nt,
			selfSelectAll: rt,
			selfResetFilters: Ve,
			selfClearFilters: He,
			selfResetSorters: Ge,
			selfClearSorters: Ke
		};
	},
	methods: {
		selectAll(e) {
			return this.selfSelectAll(e);
		},
		select(e, t) {
			return this.selfSelect(e, t);
		},
		expandAll(e) {
			return this.selfExpandAll(e);
		},
		expand(e, t) {
			return this.selfExpand(e, t);
		},
		resetFilters(e) {
			return this.selfResetFilters(e);
		},
		clearFilters(e) {
			return this.selfClearFilters(e);
		},
		resetSorters() {
			return this.selfResetSorters();
		},
		clearSorters() {
			return this.selfClearSorters();
		}
	},
	render() {
		return this.render();
	}
}), dE = (e, t) => {
	let n = /* @__PURE__ */ xn(e, t), r = /* @__PURE__ */ I(n.value);
	return V(n, (e, t) => {
		JS(e, t) || (r.value = e);
	}), r;
}, { name: fE } = $("table-column"), pE = /* @__PURE__ */ H({
	name: fE,
	props: {
		dataIndex: String,
		title: String,
		width: Number,
		minWidth: Number,
		align: { type: String },
		fixed: { type: String },
		ellipsis: {
			type: Boolean,
			default: !1
		},
		sortable: {
			type: Object,
			default: void 0
		},
		filterable: {
			type: Object,
			default: void 0
		},
		cellClass: { type: [
			String,
			Array,
			Object
		] },
		headerCellClass: { type: [
			String,
			Array,
			Object
		] },
		bodyCellClass: { type: [
			String,
			Array,
			Object,
			Function
		] },
		summaryCellClass: { type: [
			String,
			Array,
			Object,
			Function
		] },
		cellStyle: { type: Object },
		headerCellStyle: { type: Object },
		bodyCellStyle: { type: [Object, Function] },
		summaryCellStyle: { type: [Object, Function] },
		index: { type: Number },
		tooltip: {
			type: [Boolean, Object],
			default: !1
		}
	},
	setup(e, { slots: t }) {
		let { dataIndex: n, title: r, width: i, align: a, fixed: o, ellipsis: s, index: c, minWidth: l } = /* @__PURE__ */ vn(e), u = dE(e, "sortable"), d = dE(e, "filterable"), f = dE(e, "cellClass"), p = dE(e, "headerCellClass"), m = dE(e, "bodyCellClass"), h = dE(e, "summaryCellClass"), g = dE(e, "cellStyle"), _ = dE(e, "headerCellStyle"), v = dE(e, "bodyCellStyle"), y = dE(e, "summaryCellStyle"), b = dE(e, "tooltip"), x = Ls(), S = B(hp, {}), C = B(gp, void 0), { children: w, components: T, getComponents: E } = $T(fE), D = /* @__PURE__ */ Jt(/* @__PURE__ */ new Map());
		vr(gp, {
			addChild: (e, t) => {
				D.set(e, t);
			},
			removeChild: (e) => {
				D.delete(e);
			}
		});
		let ee = /* @__PURE__ */ I();
		V([T, D], ([e, t]) => {
			if (e.length === 0 && t.size > 0) ee.value = [...t.values()];
			else if (e.length > 0) {
				let n = [];
				e.forEach((e) => {
					let r = t.get(e);
					r && n.push(r);
				}), ee.value = n;
			} else ee.value = void 0;
		}, { flush: "sync" });
		let te = an(/* @__PURE__ */ Yt({ ...t })), ne = /* @__PURE__ */ Jt({
			[oT]: !0,
			dataIndex: n,
			title: r,
			width: i,
			minWidth: l,
			align: a,
			fixed: o,
			ellipsis: s,
			sortable: u,
			filterable: d,
			cellClass: f,
			headerCellClass: p,
			bodyCellClass: m,
			summaryCellClass: h,
			cellStyle: g,
			headerCellStyle: _,
			bodyCellStyle: v,
			summaryCellStyle: y,
			index: c,
			tooltip: b,
			children: ee,
			slots: te
		});
		return Zi(() => {
			for (let e of Object.keys(te)) e in t || delete te[e];
			for (let e of Object.keys(t)) te[e] = t[e];
		}), x && (C ? C.addChild(x.uid, ne) : S.addColumn?.(x.uid, ne)), Qi(() => {
			x && (C ? C.removeChild(x.uid) : S.removeColumn?.(x.uid));
		}), () => (w.value = t.default ? [Y(Uw, { onChanged: E }, Dp(t.default))] : void 0, w.value);
	}
}), mE = Vf(uE, Object.assign(uE, {
	Thead: Gw,
	Tbody: qw,
	Tr: bp,
	Th: dT,
	Td: ag,
	Column: pE
}), { components: [
	uE,
	Gw,
	qw,
	bp,
	dT,
	ag,
	pE
] });
// ../../../../private/var/folders/mg/pjwlmqn97zz5q_v45c8y0rt40000gq/T/cedar-table-demo-CBXk12/entry.mjs
wu(Mf).component("CTable", mE).mount("#app");
