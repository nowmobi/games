'use strict';

function q() {
    return function () {}
}
function s(h) {
    return function () {
        return this[h]
    }
}
function v(h) {
    return function () {
        return h
    }
}
var aa = {},
    ba, ca, da, ea, fa, z, ga, ha, ia, ka, la, ma, pa, ra, sa, ta, ua, wa, xa, D, ya, Ca, Da, Ea, Fa, Ja, Ka, La, Ma, Na, Oa, Pa, Qa, Sa, Ta, Ua, Va, Wa, Xa, Ya, Za, $a, ab, bb, cb, db, eb, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Pb, E, Qb, Rb = {},
    Sb = {};
"function" !== typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === typeof "test".__proto__ ?
function (h) {
    return h.__proto__
} : function (h) {
    return h.constructor.prototype
});
(function () {
    function h(a, d, n, k) {
        this.set(a, d, n, k)
    }
    function r() {
        this.lc = this.kc = this.nc = this.mc = this.xc = this.wc = this.lb = this.kb = 0
    }
    function b(I, d, n, k) {
        I < d ? n < k ? (w = I < n ? I : n, a = d > k ? d : k) : (w = I < k ? I : k, a = d > n ? d : n) : n < k ? (w = d < n ? d : n, a = I > k ? I : k) : (w = d < k ? d : k, a = I > n ? I : n)
    }
    function f() {
        this.bd = this.Tc = null;
        this.cf = 0;
        d ? this.Tc = new Set : this.bd = {};
        this.Ke = [];
        this.oe = !0
    }
    function c(a) {
        B[A++] = a
    }
    function t() {
        this.Ma = this.Xh = this.y = this.yi = 0
    }
    function m(a) {
        this.mf = [];
        this.Sk = this.Uk = this.Vk = this.Tk = 0;
        this.wg(a)
    }
    function g(a, d) {
        this.oo =
        a;
        this.no = d;
        this.cells = {}
    }
    function l(a, d, k) {
        var p;
        return n.length ? (p = n.pop(), p.zp = a, p.x = d, p.y = k, p) : new ba(a, d, k)
    }
    function e(a, d, n) {
        this.zp = a;
        this.x = d;
        this.y = n;
        this.Ch = new ca
    }
    da = function (a) {
        window.console && window.console.log && window.console.log(a)
    };
    ea = function (a) {
        return "undefined" === typeof a
    };
    fa = function (a) {
        return "number" === typeof a
    };
    z = function (a) {
        return "string" === typeof a
    };
    ga = function (a) {
        return 0 > a ? -a : a
    };
    ha = function (a, d) {
        return a < d ? a : d
    };
    ia = Math.PI;
    ka = function (a) {
        return a + 0.5 | 0
    };
    la = function (a) {
        return 0 <= a ? a | 0 : (a | 0) - 1
    };
    ma = function (a) {
        var d = a | 0;
        return d === a ? d : d + 1
    };
    pa = function (a, d, n, k, p, c, B, e) {
        var A, b, g, m;
        a < n ? (b = a, A = n) : (b = n, A = a);
        p < B ? (m = p, g = B) : (m = B, g = p);
        if (A < m || b > g) return !1;
        d < k ? (b = d, A = k) : (b = k, A = d);
        c < e ? (m = c, g = e) : (m = e, g = c);
        if (A < m || b > g) return !1;
        A = p - a + B - n;
        b = c - d + e - k;
        a = n - a;
        d = k - d;
        p = B - p;
        c = e - c;
        e = ga(d * p - c * a);
        return ga(p * b - c * A) > e ? !1 : ga(a * b - d * A) <= e
    };
    h.prototype.set = function (a, d, n, k) {
        this.left = a;
        this.top = d;
        this.right = n;
        this.bottom = k
    };
    h.prototype.copy = function (a) {
        this.left = a.left;
        this.top = a.top;
        this.right = a.right;
        this.bottom = a.bottom
    };
    h.prototype.width = function () {
        return this.right - this.left
    };
    h.prototype.height = function () {
        return this.bottom - this.top
    };
    h.prototype.offset = function (a, d) {
        this.left += a;
        this.top += d;
        this.right += a;
        this.bottom += d;
        return this
    };
    h.prototype.normalize = function () {
        var a = 0;
        this.left > this.right && (a = this.left, this.left = this.right, this.right = a);
        this.top > this.bottom && (a = this.top, this.top = this.bottom, this.bottom = a)
    };
    h.prototype.Wc = function (a, d) {
        return a >= this.left && a <= this.right && d >= this.top && d <= this.bottom
    };
    h.prototype.zo = function (a) {
        return this.left === a.left && this.top === a.top && this.right === a.right && this.bottom === a.bottom
    };
    ra = h;
    r.prototype.Uh = function (a) {
        this.kb = a.left;
        this.lb = a.top;
        this.wc = a.right;
        this.xc = a.top;
        this.mc = a.right;
        this.nc = a.bottom;
        this.kc = a.left;
        this.lc = a.bottom
    };
    r.prototype.Sm = function (a, d) {
        if (0 === d) this.Uh(a);
        else {
            var n = Math.sin(d),
                k = Math.cos(d),
                p = a.left * n,
                c = a.top * n,
                B = a.right * n,
                n = a.bottom * n,
                e = a.left * k,
                A = a.top * k,
                b = a.right * k,
                k = a.bottom * k;
            this.kb = e - c;
            this.lb = A + p;
            this.wc = b - c;
            this.xc = A + B;
            this.mc = b - n;
            this.nc = k + B;
            this.kc = e - n;
            this.lc = k + p
        }
    };
    r.prototype.offset = function (a, d) {
        this.kb += a;
        this.lb += d;
        this.wc += a;
        this.xc += d;
        this.mc += a;
        this.nc += d;
        this.kc += a;
        this.lc += d;
        return this
    };
    var w = 0,
        a = 0;
    r.prototype.Xk = function (d) {
        b(this.kb, this.wc, this.mc, this.kc);
        d.left = w;
        d.right = a;
        b(this.lb, this.xc, this.nc, this.lc);
        d.top = w;
        d.bottom = a
    };
    r.prototype.Wc = function (a, d) {
        var n = this.wc - this.kb,
            k = this.xc - this.lb,
            p = this.mc - this.kb,
            c = this.nc - this.lb,
            B = a - this.kb,
            e = d - this.lb,
            A = n * n + k * k,
            b = n * p + k * c,
            k = n * B + k * e,
            g = p * p + c * c,
            m = p * B + c * e,
            l = 1 / (A * g - b * b),
            n = (g * k - b * m) * l,
            A = (A * m - b * k) * l;
        if (0 <= n && 0 < A && 1 > n + A) return !0;
        n = this.kc - this.kb;
        k = this.lc - this.lb;
        A = n * n + k * k;
        b = n * p + k * c;
        k = n * B + k * e;
        l = 1 / (A * g - b * b);
        n = (g * k - b * m) * l;
        A = (A * m - b * k) * l;
        return 0 <= n && 0 < A && 1 > n + A
    };
    r.prototype.Hg = function (a, d) {
        if (d) switch (a) {
        case 0:
            return this.kb;
        case 1:
            return this.wc;
        case 2:
            return this.mc;
        case 3:
            return this.kc;
        case 4:
            return this.kb;
        default:
            return this.kb
        } else switch (a) {
        case 0:
            return this.lb;
        case 1:
            return this.xc;
        case 2:
            return this.nc;
        case 3:
            return this.lc;
        case 4:
            return this.lb;
        default:
            return this.lb
        }
    };
    sa = r;
    ta = function (a, d) {
        for (var n in d) d.hasOwnProperty(n) && (a[n] = d[n]);
        return a
    };
    ua = function (a, d) {
        var n, k;
        d = la(d);
        if (!(0 > d || d >= a.length)) if (0 === d) a.shift();
        else if (d === a.length - 1) a.pop();
        else {
            n = d;
            for (k = a.length - 1; n < k; n++) a[n] = a[n + 1];
            a.length = k
        }
    };
    wa = function (a, d) {
        a.length = d.length;
        var n, k;
        n = 0;
        for (k = d.length; n < k; n++) a[n] = d[n]
    };
    xa = function (a, d) {
        var n = a.indexOf(d); - 1 !== n && ua(a, n)
    };
    D = function (a) {
        return a / (180 / ia)
    };
    ya = function (a) {
        return a * (180 / ia)
    };
    Ca = function (a) {
        a %= 360;
        0 > a && (a += 360);
        return a
    };
    Da = function (a) {
        a %= 2 * ia;
        0 > a && (a += 2 * ia);
        return a
    };
    Ea = function (a) {
        return Ca(ya(a))
    };
    Fa = function (a) {
        return Da(D(a))
    };
    Ja = function (a, d, n, k) {
        return Math.atan2(k - d, n - a)
    };
    Ka = function (a, d) {
        if (a === d) return 0;
        var n = Math.sin(a),
            k = Math.cos(a),
            p = Math.sin(d),
            c = Math.cos(d),
            n = n * p + k * c;
        return 1 <= n ? 0 : -1 >= n ? ia : Math.acos(n)
    };
    La = function (a, d, n) {
        var k = Math.sin(a),
            p = Math.cos(a),
            c = Math.sin(d),
            B = Math.cos(d);
        return Math.acos(k * c + p * B) > n ? 0 < p * c - k * B ? Da(a + n) : Da(a - n) : Da(d)
    };
    Ma = function (a, d) {
        var n = Math.sin(a),
            k = Math.cos(a),
            p = Math.sin(d),
            c = Math.cos(d);
        return 0 >= k * p - n * c
    };
    Na = function (a, d, n, k, p, c) {
        if (0 === n) return c ? a : d;
        var B = Math.sin(n);
        n = Math.cos(n);
        a -= k;
        d -= p;
        var e = a * B;
        a = a * n - d * B;
        d = d * n + e;
        return c ? a + k : d + p
    };
    Oa = function (a, d, n, k) {
        a = n - a;
        d = k - d;
        return Math.sqrt(a * a + d * d)
    };
    Pa = function (a, d) {
        return !a !== !d
    };
    Qa = function (a) {
        for (var d in a) if (a.hasOwnProperty(d)) return !0;
        return !1
    };
    Sa = function (a) {
        for (var d in a) a.hasOwnProperty(d) && delete a[d]
    };
    var k = +new Date;
    Ta = function () {
        if ("undefined" !== typeof window.performance) {
            var a =
            window.performance;
            if ("undefined" !== typeof a.now) return a.now();
            if ("undefined" !== typeof a.webkitNow) return a.webkitNow();
            if ("undefined" !== typeof a.mozNow) return a.mozNow();
            if ("undefined" !== typeof a.msNow) return a.msNow()
        }
        return Date.now() - k
    };
    var d = "undefined" !== typeof Set && "undefined" !== typeof Set.prototype.forEach;
    f.prototype.contains = function (a) {
        return d ? this.Tc.has(a) : this.bd.hasOwnProperty(a.toString())
    };
    f.prototype.add = function (a) {
        if (d) this.Tc.has(a) || (this.Tc.add(a), this.oe = !1);
        else {
            var n = a.toString();
            this.bd.hasOwnProperty(n) || (this.bd[n] = a, this.cf++, this.oe = !1)
        }
        return this
    };
    f.prototype.remove = function (a) {
        d ? this.Tc.has(a) && (this.Tc["delete"](a), this.oe = !1) : (a = a.toString(), this.bd.hasOwnProperty(a) && (delete this.bd[a], this.cf--, this.oe = !1));
        return this
    };
    f.prototype.clear = function () {
        d ? this.Tc.clear() : (this.bd = {}, this.cf = 0);
        this.Ke.length = 0;
        this.oe = !0;
        return this
    };
    f.prototype.Rd = function () {
        return d ? 0 === this.Tc.size : 0 === this.cf
    };
    f.prototype.count = function () {
        return d ? this.Tc.size : this.cf
    };
    var B = null,
        A = 0;
    f.prototype.Iq = function () {
        if (!this.oe) {
            if (d) this.Ke.length = this.Tc.size, B = this.Ke, A = 0, this.Tc.forEach(c), B = null, A = 0;
            else {
                this.Ke.length = this.cf;
                var a, n = 0;
                for (a in this.bd) this.bd.hasOwnProperty(a) && (this.Ke[n++] = this.bd[a])
            }
            this.oe = !0
        }
    };
    f.prototype.Ag = function () {
        this.Iq();
        return this.Ke
    };
    ca = f;
    t.prototype.add = function (a) {
        this.y = a - this.yi;
        this.Xh = this.Ma + this.y;
        this.yi = this.Xh - this.Ma - this.y;
        this.Ma = this.Xh
    };
    t.prototype.reset = function () {
        this.Ma = this.Xh = this.y = this.yi = 0
    };
    Ua = t;
    Va = function (a) {
        return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    };
    m.prototype.wg = function (a) {
        this.Jm = a;
        this.Lh = a.length / 2;
        this.mf.length = a.length;
        this.Ci = this.Di = -1;
        this.Yk = 0
    };
    m.prototype.Mp = function () {
        return !this.Jm.length
    };
    m.prototype.Kb = function () {
        for (var a = this.mf, d = a[0], n = d, k = a[1], p = k, c, B, e = 1, A = this.Lh; e < A; ++e) B = 2 * e, c = a[B], B = a[B + 1], c < d && (d = c), c > n && (n = c), B < k && (k = B), B > p && (p = B);
        this.Tk = d;
        this.Uk = n;
        this.Vk = k;
        this.Sk = p
    };
    m.prototype.Uh = function (a, d, n) {
        this.mf.length = 8;
        this.Lh = 4;
        var k = this.mf;
        k[0] = a.left - d;
        k[1] = a.top - n;
        k[2] = a.right - d;
        k[3] = a.top - n;
        k[4] = a.right - d;
        k[5] = a.bottom - n;
        k[6] = a.left - d;
        k[7] = a.bottom - n;
        this.Di = a.right - a.left;
        this.Ci = a.bottom - a.top;
        this.Kb()
    };
    m.prototype.lo = function (a, d, n) {
        if (this.Di !== a || this.Ci !== d || this.Yk !== n) {
            this.Di = a;
            this.Ci = d;
            this.Yk = n;
            var k, p, c, B, e, A = 0,
                b = 1,
                g = this.Jm,
                m = this.mf;
            0 !== n && (A = Math.sin(n), b = Math.cos(n));
            n = 0;
            for (c = this.Lh; n < c; n++) k = 2 * n, p = k + 1, B = g[k] * a, e = g[p] * d, m[k] = B * b - e * A, m[p] = e * b + B * A;
            this.Kb()
        }
    };
    m.prototype.Wc = function (a, d) {
        var n = this.mf;
        if (a === n[0] && d === n[1]) return !0;
        var k, p, c, B = this.Lh,
            e = this.Tk - 110,
            A = this.Vk - 101,
            b = this.Uk + 131,
            g = this.Sk + 120,
            m, l, t = 0,
            f = 0;
        for (k = 0; k < B; k++) p = 2 * k, c = 2 * ((k + 1) % B), m = n[p], p = n[p + 1], l = n[c], c = n[c + 1], pa(e, A, a, d, m, p, l, c) && t++, pa(b, g, a, d, m, p, l, c) && f++;
        return 1 === t % 2 || 1 === f % 2
    };
    Wa = m;
    g.prototype.Cl = function (a, d, n) {
        var k;
        k = this.cells[a];
        return k ? (k = k[d]) ? k : n ? (k = l(this, a, d), this.cells[a][d] = k) : null : n ? (k = l(this, a, d), this.cells[a] = {}, this.cells[a][d] = k) : null
    };
    g.prototype.Gk = function (a) {
        return la(a / this.oo)
    };
    g.prototype.Hk = function (a) {
        return la(a / this.no)
    };
    g.prototype.update = function (a, d, k) {
        var p, c, B, e, A;
        if (d) for (p = d.left, c = d.right; p <= c; ++p) for (B = d.top, e = d.bottom; B <= e; ++B) if (!k || !k.Wc(p, B)) if (A = this.Cl(p, B, !1)) A.remove(a), A.Rd() && (A.Ch.clear(), 1E3 > n.length && n.push(A), this.cells[p][B] = null);
        if (k) for (p = k.left, c = k.right; p <= c; ++p) for (B = k.top, e = k.bottom; B <= e; ++B) d && d.Wc(p, B) || this.Cl(p, B, !0).Dp(a)
    };
    Xa = g;
    var n = [];
    e.prototype.Rd = function () {
        return this.Ch.Rd()
    };
    e.prototype.Dp = function (a) {
        this.Ch.add(a)
    };
    e.prototype.remove = function (a) {
        this.Ch.remove(a)
    };
    ba = e;
    var p = "lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop".split(" ");
    Ya = function (a) {
        return 0 >= a || 11 <= a ? "source-over" : p[a - 1]
    };
    Za = function (a, d, n) {
        if (n) switch (a.ub = n.ONE, a.tb = n.ONE_MINUS_SRC_ALPHA, d) {
        case 1:
            a.ub = n.ONE;
            a.tb = n.ONE;
            break;
        case 3:
            a.ub = n.ONE;
            a.tb = n.ZERO;
            break;
        case 4:
            a.ub = n.ONE_MINUS_DST_ALPHA;
            a.tb = n.ONE;
            break;
        case 5:
            a.ub = n.DST_ALPHA;
            a.tb = n.ZERO;
            break;
        case 6:
            a.ub = n.ZERO;
            a.tb = n.SRC_ALPHA;
            break;
        case 7:
            a.ub = n.ONE_MINUS_DST_ALPHA;
            a.tb = n.ZERO;
            break;
        case 8:
            a.ub = n.ZERO;
            a.tb = n.ONE_MINUS_SRC_ALPHA;
            break;
        case 9:
            a.ub = n.DST_ALPHA;
            a.tb = n.ONE_MINUS_SRC_ALPHA;
            break;
        case 10:
            a.ub =
            n.ONE_MINUS_DST_ALPHA, a.tb = n.SRC_ALPHA
        }
    };
    $a = function (a) {
        return ka(1E6 * a) / 1E6
    };
    ab = function (a, d) {
        return "string" !== typeof a || "string" !== typeof d || a.length !== d.length ? !1 : a === d ? !0 : a.toLowerCase() === d.toLowerCase()
    }
})();
(function () {
    function h(a) {
        if (a && (a.getContext || a.dc) && !a.c2runtime) {
            a.c2runtime = this;
            var k = this;
            this.nj = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" === typeof window.c2isCrosswalk || !window.c2isCrosswalk);
            this.Ye = !this.nj && "undefined" !== typeof window.device && ("undefined" !== typeof window.device.cordova || "undefined" !== typeof window.device.phonegap);
            this.yb = !! a.dc;
            this.Xe = "undefined" !== typeof window.AppMobi || this.yb;
            if (this.Fc = !! window.c2cocoonjs) CocoonJS.App.onSuspended.addEventListener(function () {
                k.setSuspended(!0)
            }), CocoonJS.App.onActivated.addEventListener(function () {
                k.setSuspended(!1)
            });
            this.Ya = this.yb || this.Fc;
            this.Vl = /tizen/i.test(navigator.userAgent);
            this.mj = /android/i.test(navigator.userAgent) && !this.Vl;
            this.$l = /iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent);
            this.Zl = /ipad/i.test(navigator.userAgent);
            this.uj = this.$l || this.Zl;
            this.Qf = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent);
            this.Fp = /amazonwebappplatform/i.test(navigator.userAgent);
            this.Ul = /firefox/i.test(navigator.userAgent);
            this.Jp = !this.Qf && /safari/i.test(navigator.userAgent);
            this.Kp = /windows/i.test(navigator.userAgent);
            this.Td = "undefined" !== typeof window.c2nodewebkit || /nodewebkit/i.test(navigator.userAgent);
            this.Wl = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
            this.Xl = !("undefined" === typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8);
            this.Gp = !("undefined" === typeof window.c2isBlackberry10 || !window.c2isBlackberry10);
            this.Tl = this.mj && !this.Qf && !this.Ul && !this.Fp && !this.Ya;
            this.devicePixelRatio =
            1;
            this.Sd = this.Ye || this.nj || this.Xe || this.Fc || this.mj || this.uj || this.Xl || this.Gp || this.Vl;
            this.Sd || (this.Sd = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet)/i.test(navigator.userAgent));
            "undefined" === typeof cr_is_preview || this.Td || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) || (this.Td = !0);
            this.Hp = "undefined" !== typeof cr_is_preview && -1 < window.location.search.indexOf("debug");
            this.canvas = a;
            this.Zk = document.getElementById("c2canvasdiv");
            this.ta =
            this.ca = this.od = null;
            this.Wi = "";
            this.Yg = !1;
            this.nm = this.om = 0;
            this.canvas.oncontextmenu = function (a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.canvas.onselectstart = function (a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.yb && (window.c2runtime = this);
            this.Td && (window.tt = function (a) {
                a.preventDefault();
                return !1
            }, window.ut = function (a) {
                a.preventDefault();
                return !1
            }, require("nw.gui").App.clearCache());
            this.width = a.width;
            this.height = a.height;
            this.T = this.width;
            this.S = this.height;
            this.Ng = this.width;
            this.Mg = this.height;
            this.Yf = window.innerWidth;
            this.Xf = window.innerHeight;
            this.wa = !0;
            this.Sf = !1;
            Date.now || (Date.now = function () {
                return +new Date
            });
            this.plugins = [];
            this.types = {};
            this.B = [];
            this.Pa = [];
            this.zj = {};
            this.Pc = [];
            this.Ti = {};
            this.re = [];
            this.ge = [];
            this.bi = [];
            this.eo = [];
            this.fo = [];
            this.Xc = new ca;
            this.oj = !1;
            this.Nc = 0;
            this.qj = !1;
            this.Ob = [];
            this.sd = this.Ab = this.wh = this.ck = "";
            this.xg = this.Vm = !1;
            this.Ji = this.cg = this.Od = this.Pb = 0;
            this.sf = 1;
            this.tc = new Ua;
            this.ph = 0;
            this.fm = !0;
            this.Bh = this.$g = this.te = this.Cd =
            this.Zf = this.Vi = 0;
            this.zf = null;
            this.Pi = [];
            this.Si = [];
            this.Ug = -1;
            this.Bj = [
                []
            ];
            this.lk = this.zh = 0;
            this.Nh(null);
            this.Df = this.jm = this.hg = 0;
            this.yg = [];
            this.$h = this.Oh = 0;
            this.Vf = !0;
            this.ef = 0;
            this.Rf = !1;
            this.wq = 0;
            this.Ap = !1;
            this.vj = 0;
            this.ad = this.fh = this.Vj = !1;
            this.Ij = new ca;
            this.Jj = new ca;
            this.hq = [];
            new Wa([]);
            new Wa([]);
            this.Qe = [];
            this.Gg = {};
            this.Re = {};
            this.Pe = {};
            this.uf = {};
            this.Wk = {};
            this.em = this.vh = this.Vb = this.uc = this.dm = this.uh = this.ra = null;
            this.tf = this.sj = !1;
            this.Xi = [null, null];
            this.ue = 0;
            this.De = {};
            this.Vh = this.df = null;
            this.load();
            this.devicePixelRatio = (this.ze = !this.Ya && this.Jq && !this.Tl) ? window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1;
            this.rb();
            var d, c = this.ti && !(this.Td || this.Wl || this.Xl);
            0 < this.Qb && this.setSize(window.innerWidth, window.innerHeight, !0);
            try {
                !this.xo || !this.Fc && this.Ya || (d = {
                    alpha: c,
                    depth: !1,
                    antialias: !1,
                    failIfMajorPerformanceCaveat: !0
                }, this.od = a.getContext("webgl", d) || a.getContext("experimental-webgl", d))
            } catch (e) {}
            if (this.od) {
                this.Ya || (this.ob = document.createElement("canvas"), jQuery(this.ob).appendTo(this.canvas.parentNode), this.ob.oncontextmenu = v(!1), this.ob.onselectstart = v(!1), this.ob.width = this.Ng, this.ob.height = this.Mg, jQuery(this.ob).css({
                    width: this.Ng + "px",
                    height: this.Mg + "px"
                }), this.Gm(), this.Qj = this.ob.getContext("2d"));
                this.ca = new aa.qr(this.od, this.Sd);
                this.ca.He(a.width, a.height);
                this.ta = null;
                this.canvas.addEventListener("webglcontextlost", function (a) {
                    a.preventDefault();
                    k.Tp();
                    console.log("[Construct 2] WebGL context lost");
                    window.cr_setSuspended(!0)
                }, !1);
                this.canvas.addEventListener("webglcontextrestored", function () {
                    k.ca.jt();
                    k.ca.He(k.ca.width, k.ca.height, !0);
                    k.uc = null;
                    k.Vb = null;
                    k.Xi[0] = null;
                    k.Xi[1] = null;
                    k.Up();
                    k.wa = !0;
                    console.log("[Construct 2] WebGL context restored");
                    window.cr_setSuspended(!1)
                }, !1);
                var n, p, b, g, m, l;
                a = 0;
                for (d = this.B.length; a < d; a++) for (p = this.B[a], c = 0, n = p.N.length; c < n; c++) g = p.N[c], g.pb = this.ca.Jl(g.id), this.tf = this.tf || this.ca.Kh(g.pb);
                a = 0;
                for (d = this.Pc.length; a < d; a++) {
                    m = this.Pc[a];
                    c = 0;
                    for (n = m.N.length; c < n; c++) g = m.N[c], g.pb = this.ca.Jl(g.id);
                    c = 0;
                    for (n = m.aa.length; c < n; c++) for (l = m.aa[c], p = 0, b = l.N.length; p < b; p++) g = l.N[p], g.pb = this.ca.Jl(g.id), this.tf = this.tf || this.ca.Kh(g.pb)
                }
            } else {
                if (0 < this.Qb && this.yb) {
                    this.canvas = null;
                    document.oncontextmenu = v(!1);
                    document.onselectstart = v(!1);
                    this.ta = AppMobi.canvas.getContext("2d");
                    try {
                        this.ta.samplingMode = this.pa ? "smooth" : "sharp", this.ta.globalScale = 1, this.ta.HTML5CompatibilityMode = !0, this.ta.imageSmoothingEnabled = this.pa
                    } catch (t) {}
                    0 !== this.width && 0 !== this.height && (this.ta.width = this.width, this.ta.height = this.height)
                }
                this.ta || (d = this.Fc ? {
                    antialias: !! this.pa,
                    alpha: c
                } : {
                    alpha: c
                }, this.ta = a.getContext("2d", d), this.ta.webkitImageSmoothingEnabled = this.pa, this.ta.mozImageSmoothingEnabled = this.pa, this.ta.msImageSmoothingEnabled = this.pa, this.ta.imageSmoothingEnabled = this.pa);
                this.Qj = this.ob = null
            }
            this.Zh = function () {
                k.qb()
            };
            window == window.top || this.Ya || this.Wl || (document.addEventListener("mousedown", function () {
                window.focus()
            }, !0), document.addEventListener("touchstart", function () {
                window.focus()
            }, !0));
            "undefined" !== typeof cr_is_preview && (this.Fc && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), -1 < window.location.search.indexOf("continuous") && (da("Reloading for continuous preview"), this.wh = "__c2_continuouspreview", this.xg = !0), this.aq && !this.Sd && (jQuery(window).focus(function () {
                k.setSuspended(!1)
            }), jQuery(window).blur(function () {
                k.setSuspended(!0)
            })));
            0 === this.Qb && this.ze && 1 < this.devicePixelRatio && this.setSize(this.hb, this.gb, !0);
            this.hn();
            this.go();
            this.ba = {}
        }
    }
    function r(a) {
        a.target.result.createObjectStore("saves", {
            keyPath: "slot"
        })
    }
    function b(a, k, d, c) {
        var e = indexedDB.open("_C2SaveStates");
        e.onupgradeneeded = r;
        e.onerror = c;
        e.onsuccess = function (n) {
            n = n.target.result;
            n.onerror = c;
            n.transaction(["saves"], "readwrite").objectStore("saves").put({
                slot: a,
                data: k
            }).onsuccess = d
        }
    }
    function f(a, k, d) {
        var c = indexedDB.open("_C2SaveStates");
        c.onupgradeneeded = r;
        c.onerror = d;
        c.onsuccess = function (c) {
            c = c.target.result;
            c.onerror = d;
            var n = c.transaction(["saves"]).objectStore("saves").get(a);
            n.onsuccess = function () {
                n.result ? k(n.result.data) : k(null)
            }
        }
    }
    function c() {
        da("Reloading for continuous preview");
        window.c2cocoonjs ? CocoonJS.App.reload() : -1 < window.location.search.indexOf("continuous") ? window.location.reload(!0) : window.location += "?continuous"
    }
    function t(a) {
        var k, d = {};
        for (k in a)!a.hasOwnProperty(k) || a[k] instanceof ca || a[k] && "undefined" !== typeof a[k].Gs || (d[k] = a[k]);
        return d
    }
    h.prototype.setSize = function (a, k, d) {
        var c = 0,
            e = 0,
            n = 0,
            p = 0,
            p = 0;
        if (this.Yf !== a || this.Xf !== k || d) {
            this.Yf = a;
            this.Xf =
            k;
            var b = this.Qb,
                g = document.mozFullScreen || document.webkitIsFullScreen || !! document.msFullscreenElement || document.fullScreen || this.Rf;
            if (g || 0 !== this.Qb || d) g && 0 < this.ue && (b = this.ue), 4 <= b ? (d = this.hb / this.gb, a / k > d ? (n = k * d, 5 === b ? (p = n / this.hb, 1 < p ? p = Math.floor(p) : 1 > p && (p = 1 / Math.ceil(1 / p)), n = this.hb * p, p *= this.gb, c = (a - n) / 2, e = (k - p) / 2, a = n, k = p) : (c = (a - n) / 2, a = n)) : (p = a / d, 5 === b ? (p /= this.gb, 1 < p ? p = Math.floor(p) : 1 > p && (p = 1 / Math.ceil(1 / p)), n = this.hb * p, p *= this.gb, c = (a - n) / 2, e = (k - p) / 2, a = n) : e = (k - p) / 2, k = p), g && !this.Td && (e = c =
            0), c = Math.floor(c), e = Math.floor(e), a = Math.floor(a), k = Math.floor(k)) : this.Td && this.Rf && 0 === this.Al && (c = Math.floor((a - this.hb) / 2), e = Math.floor((k - this.gb) / 2), a = this.hb, k = this.gb), 2 > b && (this.xf = this.devicePixelRatio), this.ze && this.Zl && 1 < this.devicePixelRatio && (1024 <= a && (a = 1023), 1024 <= k && (k = 1023)), g = this.devicePixelRatio, this.Ng = a, this.Mg = k, this.width = Math.round(a * g), this.height = Math.round(k * g), this.wa = !0, this.qn ? (this.T = this.width, this.S = this.height, this.Ec = !0) : this.width < this.hb && this.height < this.gb || 1 === b ? (this.T = this.width, this.S = this.height, this.Ec = !0) : (this.T = this.hb, this.S = this.gb, this.Ec = !1, 2 === b ? (d = this.hb / this.gb, b = this.Yf / this.Xf, b < d ? this.T = this.S * b : b > d && (this.S = this.T / b)) : 3 === b && (d = this.hb / this.gb, b = this.Yf / this.Xf, b > d ? this.T = this.S * b : b < d && (this.S = this.T / b))), this.Zk && !this.Ya && (jQuery(this.Zk).css({
                width: a + "px",
                height: k + "px",
                "margin-left": c,
                "margin-top": e
            }), "undefined" !== typeof cr_is_preview && jQuery("#borderwrap").css({
                width: a + "px",
                height: k + "px"
            })), this.canvas && (this.canvas.width = Math.round(a * g), this.canvas.height = Math.round(k * g), this.ze && jQuery(this.canvas).css({
                width: a + "px",
                height: k + "px"
            })), this.ob && (this.ob.width = a, this.ob.height = k, jQuery(this.ob).css({
                width: a + "px",
                height: k + "px"
            })), this.ca && this.ca.He(Math.round(a * g), Math.round(k * g)), this.yb && this.ta && (this.ta.width = a, this.ta.height = k), this.ta && (this.ta.webkitImageSmoothingEnabled = this.pa, this.ta.mozImageSmoothingEnabled = this.pa, this.ta.msImageSmoothingEnabled = this.pa, this.ta.imageSmoothingEnabled = this.pa), this.hn()
        }
    };
    h.prototype.hn =

    function () {
        if (this.ho && 0 !== this.Oj) {
            var a = "portrait";
            2 === this.Oj && (a = "landscape");
            screen.lockOrientation ? screen.lockOrientation(a) : screen.webkitLockOrientation ? screen.webkitLockOrientation(a) : screen.mozLockOrientation ? screen.mozLockOrientation(a) : screen.msLockOrientation && screen.msLockOrientation(a)
        }
    };
    h.prototype.Tp = function () {
        this.sj = !0;
        var a, k, d;
        a = 0;
        for (k = this.B.length; a < k; a++) d = this.B[a], d.Mj && d.Mj()
    };
    h.prototype.Up = function () {
        this.sj = !1;
        var a, k, d;
        a = 0;
        for (k = this.B.length; a < k; a++) d = this.B[a], d.rm && d.rm()
    };
    h.prototype.Gm = function () {
        if (!this.Ya) {
            var a = document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || document.msFullscreenElement || this.Rf ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
            a.position = "absolute";
            jQuery(this.ob).css(a)
        }
    };
    var m = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
    h.prototype.setSuspended = function (a) {
        var k;
        if (a && !this.Sf) for (da("[Construct 2] Suspending"), this.Sf = !0, 0 !== this.Oh && m && m(this.Oh), 0 !== this.$h && clearTimeout(this.$h), a = 0, k = this.yg.length; a < k; a++) this.yg[a](!0);
        else if (!a && this.Sf) {
            da("[Construct 2] Resuming");
            this.Sf = !1;
            this.ph = Ta();
            this.Zf = Ta();
            a = this.cg = this.$g = 0;
            for (k = this.yg.length; a < k; a++) this.yg[a](!1);
            this.qb()
        }
    };
    h.prototype.Mk = function (a) {
        this.yg.push(a)
    };
    h.prototype.load = function () {
        var a = Tb();
        this.name = a[0];
        this.zl = a[1];
        this.Qb = a[11];
        this.Al = a[11];
        this.hb = a[9];
        this.gb = a[10];
        this.Cm = this.hb / 2;
        this.Dm = this.gb / 2;
        this.Ya && (4 <= a[11] || 0 === a[11]) && (da("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.Al = this.Qb = 3);
        this.nk = a[17];
        this.bg = a[18];
        0 === this.bg && (this.df = new Image, this.df.src = "loading-logo.png");
        this.hg = a[20];
        this.gd = new G(this);
        var k, d, c, e, n, p, b, g, m;
        k = 0;
        for (d = a[2].length; k < d; k++) b = a[2][k], bb(b), m = new b[0](this), m.fk = b[1], m.Ud = b[2], m.gm = b[9], m.ea && m.ea(), this.plugins.push(m);
        a = Tb();
        k = 0;
        for (d = a[3].length; k < d; k++) {
            b = a[3][k];
            n = b[1];
            m = null;
            c = 0;
            for (e = this.plugins.length; c < e; c++) if (this.plugins[c] instanceof n) {
                m = this.plugins[c];
                break
            }
            var l = new m.Ha(m);
            l.name = b[0];
            l.U = b[2];
            l.lj = b[3].slice(0);
            l.Lq = b[3].length;
            l.io = b[4];
            l.Zo = b[5];
            l.Y = b[11];
            l.U ? (l.Ah = [], l.Zc = this.Df++, l.Ca = null) : (l.Ah = null, l.Zc = -1, l.Ca = []);
            l.Wg = null;
            l.Ue = null;
            l.ul = null;
            l.sc = !1;
            l.Fb = null;
            b[6] ? (l.an = b[6][0], l.bn = b[6][1], l.zq = b[6][2]) : (l.an = null, l.bn = 0, l.zq = 0);
            l.Mb = b[7] ? b[7] : null;
            l.index = k;
            l.g = [];
            l.Qg = [];
            l.ae = [new cb(l)];
            l.ld = 0;
            l.Bc = null;
            l.qf = !0;
            l.ci = db;
            l.gp = eb;
            l.lp = jb;
            l.ua = kb;
            l.pg = lb;
            l.Mh = mb;
            l.Ee = nb;
            l.ah =
            ob;
            l.Zi = pb;
            l.bj = qb;
            l.Kd = rb;
            l.Gl = sb;
            l.ol = new Xa(this.hb, this.gb);
            l.Pk = !0;
            l.Qk = !1;
            l.ba = {};
            l.toString = tb;
            l.Pa = [];
            c = 0;
            for (e = b[8].length; c < e; c++) {
                g = b[8][c];
                var t = g[1],
                    f = null;
                n = 0;
                for (p = this.Pa.length; n < p; n++) if (this.Pa[n] instanceof t) {
                    f = this.Pa[n];
                    break
                }
                f || (f = new t(this), f.hm = [], f.Gj = new ca, f.ea && f.ea(), this.Pa.push(f)); - 1 === f.hm.indexOf(l) && f.hm.push(l);
                n = new f.Ha(f, l);
                n.name = g[0];
                n.Y = g[2];
                n.ea();
                l.Pa.push(n)
            }
            l.global = b[9];
            l.pj = b[10];
            l.N = [];
            c = 0;
            for (e = b[12].length; c < e; c++) l.N.push({
                id: b[12][c][0],
                name: b[12][c][1],
                pb: -1,
                ic: !0,
                index: c
            });
            l.Jt = b[13];
            this.nk && !l.U && !l.pj && m.Ud || l.ea();
            l.name && (this.types[l.name] = l);
            this.B.push(l);
            m.fk && (c = new m.Ba(l), c.uid = this.hg++, c.Km = this.jm++, c.we = 0, c.Kf = ub, c.toString = vb, c.D = b[14], c.ea(), l.g.push(c), this.De[c.uid.toString()] = c)
        }
        k = 0;
        for (d = a[4].length; k < d; k++) for (n = a[4][k], p = this.B[n[0]], c = 1, e = n.length; c < e; c++) b = this.B[n[c]], b.Ca.push(p), p.Ah.push(b);
        k = 0;
        for (d = a[23].length; k < d; k++) {
            n = a[23][k];
            p = [];
            c = 0;
            for (e = n.length; c < e; c++) p.push(this.B[n[c]]);
            c = 0;
            for (e = p.length; c < e; c++) p[c].sc = !0, p[c].Fb = p
        }
        if (0 < this.Df) for (k = 0, d = this.B.length; k < d; k++) if (b = this.B[k], !b.U && b.Ca.length) {
            b.Wg = Array(this.Df);
            b.Ue = Array(this.Df);
            b.ul = Array(this.Df);
            l = [];
            c = f = t = g = 0;
            for (e = b.Ca.length; c < e; c++) for (m = b.Ca[c], b.Wg[m.Zc] = g, g += m.Lq, b.Ue[m.Zc] = t, t += m.io, b.ul[m.Zc] = f, f += m.Zo, n = 0, p = m.N.length; n < p; n++) l.push(ta({}, m.N[n]));
            b.N = l.concat(b.N);
            c = 0;
            for (e = b.N.length; c < e; c++) b.N[c].index = c
        }
        k = 0;
        for (d = a[5].length; k < d; k++) b = a[5][k], c = new wb(this, b), this.zj[c.name] = c, this.Pc.push(c);
        k = 0;
        for (d = a[6].length; k < d; k++) b =
        a[6][k], c = new xb(this, b), this.Ti[c.name] = c, this.re.push(c);
        k = 0;
        for (d = this.re.length; k < d; k++) this.re[k].La();
        k = 0;
        for (d = this.bi.length; k < d; k++) this.bi[k].La();
        this.bi.length = 0;
        this.Xd = a[8];
        this.xf = 1;
        this.xo = a[12];
        this.pa = a[13];
        this.ti = a[14];
        this.Jq = a[16];
        this.Oj = a[19];
        this.ho = 0 < this.Oj;
        this.aq = a[21];
        this.Ec = this.qn = a[22];
        this.Wh = Date.now()
    };
    h.prototype.Xo = function (a) {
        var k, d;
        k = 0;
        for (d = this.ge.length; k < d; k++) if (this.ge[k].ro === a) return this.ge[k];
        return null
    };
    h.prototype.Rk = function () {
        var a = 0,
            k = 0,
            d = !0,
            c, e;
        c = 0;
        for (e = this.ge.length; c < e; c++) {
            var n = this.ge[c].qo;
            if (!n || 0 >= n) n = 5E4;
            a += n;
            this.ge[c].complete || this.ge[c].loaded ? k += n : d = !1
        }
        this.Fe = 0 == a ? 0 : k / a;
        return d
    };
    h.prototype.go = function () {
        if (this.ta || this.ca) {
            var a = this.ta || this.Qj;
            this.ob && this.Gm();
            this.Fe = 0;
            this.cm = -1;
            if (this.Rk()) this.yp();
            else {
                var k = Date.now() - this.Wh;
                if (a) {
                    var d = this.width,
                        c = this.height,
                        e = this.devicePixelRatio;
                    this.ob && (d = this.Ng, c = this.Mg, e = 1);
                    if (3 !== this.bg && 500 <= k && this.cm != this.Fe) {
                        a.clearRect(0, 0, d, c);
                        var k = d / 2,
                            c = c / 2,
                            d =
                            0 === this.bg && this.df.complete,
                            n = 40 * e,
                            p = 0,
                            b = 80 * e,
                            g;
                        d && (b = this.df.width * e, g = this.df.height * e, n = b / 2, p = g / 2, a.drawImage(this.df, la(k - n), la(c - p), b, g));
                        1 >= this.bg ? (k = la(k - n) + 0.5, c = la(c + (p + (d ? 12 * e : 0))) + 0.5, a.fillStyle = "DodgerBlue", a.fillRect(k, c, Math.floor(b * this.Fe), 6 * e), a.strokeStyle = "black", a.strokeRect(k, c, b, 6 * e), a.strokeStyle = "white", a.strokeRect(k - 1 * e, c - 1 * e, b + 2 * e, 8 * e)) : 2 === this.bg && (a.font = "12pt Arial", a.fillStyle = "#999", a.It = "middle", e = Math.round(100 * this.Fe) + "%", d = a.measureText ? a.measureText(e) : null, a.fillText(e, k - (d ? d.width : 0) / 2, c))
                    }
                    this.cm = this.Fe
                }
                setTimeout(function (a) {
                    return function () {
                        a.go()
                    }
                }(this), 100)
            }
        }
    };
    h.prototype.yp = function () {
        this.ob && (this.canvas.parentNode.removeChild(this.ob), this.ob = this.Qj = null);
        this.Wh = Date.now();
        this.Zf = Ta();
        var a, k, d;
        if (this.nk) for (a = 0, k = this.B.length; a < k; a++) d = this.B[a], d.U || d.pj || !d.ya.Ud || d.ea();
        else this.Vf = !1;
        a = 0;
        for (k = this.Pc.length; a < k; a++) this.Pc[a].so();
        2 <= this.Qb && (a = this.hb / this.gb, k = this.width / this.height, this.xf = 2 !== this.Qb && k > a || 2 === this.Qb && k < a ? this.height / this.gb : this.width / this.hb);
        this.zl ? this.zj[this.zl].gk() : this.Pc[0].gk();
        this.nk || (this.ef = 1, this.trigger(G.prototype.e.yk, null));
        navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide();
        this.qb();
        this.yb && AppMobi.webview.execute("onGameReady();")
    };
    var g = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    h.prototype.qb = function () {
        if (this.ra) {
            var a =
            Ta();
            if (this.Ap && this.Vj && 29 > a - this.vj) this.Vj = !1, this.vj = a, g ? this.Oh = g(this.Zh, this.canvas) : this.$h = setTimeout(this.Zh, this.Sd ? 1 : 16);
            else {
                this.Vj = !0;
                this.vj = a;
                var k = this.Qb,
                    d = document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !! document.msFullscreenElement;
                (d || this.Rf) && 0 < this.ue && (k = this.ue);
                if (0 < k && !this.$l) {
                    var k = window.innerWidth,
                        c = window.innerHeight;
                    this.Yf === k && this.Xf === c || this.setSize(k, c)
                }
                this.Ya || (d ? (this.Yg || (this.Wi = jQuery(this.canvas).css("margin") || "0", this.Yg = !0), this.Qf || this.Td || jQuery(this.canvas).css({
                    "margin-left": "" + Math.floor((screen.width - this.width / this.devicePixelRatio) / 2) + "px",
                    "margin-top": "" + Math.floor((screen.height - this.height / this.devicePixelRatio) / 2) + "px"
                })) : this.Yg ? (this.Qf || this.Td || jQuery(this.canvas).css("margin", this.Wi), this.Wi = "", this.Yg = !1, 0 === this.Qb && this.setSize(Math.round(this.om / this.devicePixelRatio), Math.round(this.nm / this.devicePixelRatio), !0)) : (this.om = this.width, this.nm = this.height));
                this.Vf && (d = this.Rk(), this.ef = this.Fe, d && (this.Vf = !1, this.Fe = 1, this.trigger(G.prototype.e.yk, null)));
                this.Sp();
                !this.wa && !this.Fc || this.sj || this.xg || (this.wa = !1, this.ca ? this.pc() : this.Mc(), this.Vh && (this.canvas && this.canvas.toDataURL && (this.canvas.toDataURL(this.Vh[0], this.Vh[1]), this.trigger(G.prototype.e.Bn, null)), this.Vh = null));
                this.ht || (this.Cd++, this.te++, this.$g++);
                this.cg += Ta() - a;
                this.Sf || (g ? this.Oh = g(this.Zh, this.canvas) : this.$h = setTimeout(this.Zh, this.Sd ? 1 : 16))
            }
        }
    };
    h.prototype.Sp = function () {
        var a, k, d, c, e, n, p, b, g;
        a = Ta();
        1E3 <= a - this.Zf && (this.Zf += 1E3, this.Vi = this.$g, this.$g = 0, this.Ji = this.cg, this.cg = 0);
        this.fm && (0 !== this.ph && (k = a - this.ph, 0 !== k || this.Hp ? (this.Od = k / 1E3, 0.5 < this.Od ? this.Od = 0 : 0.1 < this.Od && (this.Od = 0.1)) : (10 <= this.Nt && (this.fm = !1), this.Od = 1 / 60)), this.ph = a);
        this.Pb = this.Od * this.sf;
        this.tc.add(this.Pb);
        a = document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !! document.msFullscreenElement || this.Rf;
        2 <= this.Qb || a && 0 < this.ue ? (k = this.hb / this.gb, d = this.width / this.height, c = this.Qb, a && 0 < this.ue && (c =
        this.ue), this.xf = 2 !== c && d > k || 2 === c && d < k ? this.height / this.gb : this.width / this.hb, this.ra && (this.ra.Om(this.ra.scrollX), this.ra.Pm(this.ra.scrollY))) : this.xf = this.ze ? this.devicePixelRatio : 1;
        this.rb();
        this.Nc++;

        this.gd.kq();
        this.Nc--;
        this.rb();
        this.Nc++;
        a = 0;
        for (k = this.B.length; a < k; a++) if (p = this.B[a], !p.U && (p.Pa.length || p.Ca.length)) for (d = 0, c = p.g.length; d < c; d++) for (b = p.g[d], e = 0, n = b.R.length; e < n; e++) b.R[e].qb();
        a = 0;
        for (k = this.B.length; a < k; a++) if (p = this.B[a], !p.U && (p.Pa.length || p.Ca.length)) for (d = 0, c = p.g.length; d < c; d++) for (b = p.g[d], e = 0, n = b.R.length; e < n; e++) g = b.R[e], g.dq && g.dq();
        d = this.Ij.Ag();
        a = 0;
        for (k = d.length; a < k; a++) d[a].qb();
        this.Nc--;
        this.Bp();
        for (a = 0; this.zf && 10 > a++;) this.sl(this.zf);
        a = 0;
        for (k = this.re.length; a < k; a++) this.re[a].fj = !1;
        this.ra.Tg && this.ra.Tg.Ta();
        this.hq.length = 0;
        this.Nc++;
        a = 0;
        for (k = this.B.length; a < k; a++) if (p = this.B[a], !p.U && (p.Pa.length || p.Ca.length)) for (d = 0, c = p.g.length; d < c; d++) for (b = p.g[d], e = 0, n = b.R.length; e < n; e++) g = b.R[e], g.ik && g.ik();
        d = this.Jj.Ag();
        a = 0;
        for (k = d.length; a < k; a++) d[a].ik();
        this.Nc--
    };
    h.prototype.sl = function (a) {
        var k = this.ra;
        this.ra.xq();
        var d, c, e, n, p, b, g;
        if (this.ca) for (d = 0, c = this.B.length; d < c; d++) p = this.B[d], p.U || !p.mn || p.global && 0 !== p.g.length || -1 !== a.Of.indexOf(p) || p.mn();
        k == a && (this.gd.Lb.length = 0);
        a.gk();
        d = 0;
        for (c = this.B.length; d < c; d++) if (p = this.B[d], p.global || p.ya.fk) for (a = 0, k = p.g.length; a < k; a++) if (b = p.g[a], b.Lj && b.Lj(), b.R) for (e = 0, n = b.R.length; e < n; e++) g = b.R[e], g.Lj && g.Lj();
        this.wa = !0;
        this.rb()
    };
    h.prototype.zg = function (a) {
        this.Ij.add(a)
    };
    h.prototype.Aq = function (a) {
        this.Jj.add(a)
    };
    h.prototype.$i = function (a) {
        return a && -1 !== a.gg ? this.Od * a.gg : this.Pb
    };
    h.prototype.Mc = function () {
        this.ra.Mc(this.ta);
        this.yb && this.ta.present()
    };
    h.prototype.pc = function () {
        this.ra.pc(this.ca);
        this.ca.xt()
    };
    h.prototype.bo = function (a) {
        a && this.Pi.push(a)
    };
    h.prototype.dh = function (a) {
        return this.De[a.toString()]
    };
    h.prototype.ie = function (a) {
        var k, d;
        if (!this.Xc.contains(a)) {
            this.Xc.add(a);
            if (a.sc) for (k = 0, d = a.siblings.length; k < d; k++) this.ie(a.siblings[k]);
            this.oj && this.Xc.Ke.push(a);
            this.Nc++;

            this.trigger(Object.getPrototypeOf(a.type.ya).e.Dn, a);
            this.Nc--

        }
    };
    h.prototype.rb = function () {
        var a, k, d, c, e, n, p, b, g, l;
        this.oj = !0;
        c = 0;
        for (n = this.Ob.length; c < n; c++) for (a = this.Ob[c], k = a.type, k.g.push(a), e = 0, p = k.Ca.length; e < p; e++) k.Ca[e].g.push(a), k.Ca[e].qf = !0;
        this.Ob.length = 0;
        n = this.Xc.Ag();
        for (c = 0; c < n.length; c++) {
            a = n[c];
            k = a.type;
            d = k.g;
            e = 0;
            for (p = this.Pi.length; e < p; e++) this.Pi[e](a);
            xa(d, a);
            0 === d.length && (k.Qk = !1);
            a.Kg && k.ol.update(a, a.Kg, null);
            a.k && (ua(a.k.g, a.rc()), a.k.fc = !0);
            e = 0;
            for (p = k.Ca.length; e < p; e++) xa(k.Ca[e].g, a), k.Ca[e].qf = !0;
            if (a.R) for (e = 0, p = a.R.length; e < p; e++) d = a.R[e], d.kf && d.kf(), d.kd.Gj.remove(a);
            this.Ij.remove(a);
            this.Jj.remove(a);
            e = 0;
            for (p = this.gd.Lb.length; e < p; e++) if (g = this.gd.Lb[e], g.Bb.hasOwnProperty(k.index) && xa(g.Bb[k.index].qd, a), !k.U) for (d = 0, b = k.Ca.length; d < b; d++) l = k.Ca[d], g.Bb.hasOwnProperty(l.index) && xa(g.Bb[l.index].qd, a);
            a.kf && a.kf();
            this.De.hasOwnProperty(a.uid.toString()) && delete this.De[a.uid.toString()];
            this.Bh--;
            console.log(this.Bh)
            64 > k.Qg.length && k.Qg.push(a);
            k.qf = !0
        }
        this.Xc.Rd() || (this.wa = !0);
        this.Xc.clear();
        this.oj = !1
    };
    h.prototype.ql =

    function (a, k, d, c) {
        if (a.U) {
            var e = la(Math.random() * a.Ah.length);
            return this.ql(a.Ah[e], k, d, c)
        }
        return a.Bc ? this.Nd(a.Bc, k, !1, d, c, !1) : null
    };
    var l = [];
    h.prototype.Nd = function (a, k, d, c, e, n) {
        var p, b, g, m;
        if (!a) return null;
        var t = this.B[a[1]],
            f = t.ya.Ud;
        if (this.Vf && f && !t.pj || f && !this.ca && 11 === a[0][11]) return null;
        var w = k;
        f || (k = null);
        var u;
        t.Qg.length ? (u = t.Qg.pop(), u.vc = !0, t.ya.Ba.call(u, t)) : (u = new t.ya.Ba(t), u.vc = !1);
        u.uid = d && !n ? a[2] : this.hg++;
        this.De[u.uid.toString()] = u;
        u.Km = this.jm++;
        u.we = t.g.length;

        p = 0;
        for (b =
        this.Ob.length; p < b; ++p) this.Ob[p].type === t && u.we++;
        u.Kf = ub;
        g = a[3];
        if (u.vc) Sa(u.ba);
        else {

            u.ba = {};
            if ("undefined" !== typeof cr_is_preview) for (u.Sl = [], u.Sl.length = g.length, p = 0, b = g.length; p < b; p++) u.Sl[p] = g[p][1];
            u.Xa = [];
            u.Xa.length = g.length
        }
        p = 0;
        for (b = g.length; p < b; p++) u.Xa[p] = g[p][0];
        if (f) {
            var h = a[0];
            u.x = ea(c) ? h[0] : c;
            u.y = ea(e) ? h[1] : e;
            u.z = h[2];
            u.width = h[3];
            u.height = h[4];
            u.depth = h[5];
            u.m = h[6];
            u.opacity = h[7];
            u.Sb = h[8];
            u.Tb = h[9];
            u.Eb = h[10];
            p = h[11];
            !this.ca && t.N.length && (u.Eb = p);
            u.Bf = Ya(u.Eb);
            this.od && Za(u, u.Eb, this.od);
            if (u.vc) {
                p = 0;
                for (b = h[12].length; p < b; p++) for (g = 0, m = h[12][p].length; g < m; g++) u.Ja[p][g] = h[12][p][g];
                u.Db.set(0, 0, 0, 0);
                u.Kg.set(0, 0, -1, -1);
                u.ne.Uh(u.Db);
                u.xi.length = 0
            } else {
                u.Ja = h[12].slice(0);
                p = 0;
                for (b = u.Ja.length; p < b; p++) u.Ja[p] = h[12][p].slice(0);
                u.fa = [];
                u.Id = [];
                u.Id.length = t.N.length;
                u.Db = new ra(0, 0, 0, 0);
                u.Kg = new ra(0, 0, -1, -1);
                u.ne = new sa;
                u.xi = [];
                u.ab = yb;
                u.Fs = zb;
                u.Wc = Ab;
                u.Kb = Bb;
                u.rc = Cb
            }
            u.Cq = !1;
            u.Eq = 0;
            u.Dq = 0;
            u.Bq = null;
            14 === h.length && (u.Cq = !0, u.Eq = h[13][0], u.Dq = h[13][1], u.Bq = h[13][2]);
            p = 0;
            for (b =
            t.N.length; p < b; p++) u.Id[p] = !0;
            u.Ed = Db;
            u.Ed();
            u.pn = !! u.fa.length;
            u.wi = !0;
            t.Pk = !0;
            u.visible = !0;
            u.gg = -1;
            u.k = k;
            u.Le = k.g.length;
            "undefined" === typeof u.Vc && (u.Vc = null);
            this.wa = u.Af = !0
        }
        u.toString = vb;
        var r;
        p = l.length = 0;
        for (b = t.Ca.length; p < b; p++) l.push.apply(l, t.Ca[p].Pa);
        l.push.apply(l, t.Pa);
        if (u.vc) for (p = 0, b = l.length; p < b; p++) {
            var N = l[p];
            r = u.R[p];
            r.vc = !0;
            N.kd.Ba.call(r, N, u);
            h = a[4][p];
            g = 0;
            for (m = h.length; g < m; g++) r.D[g] = h[g];
            r.ea();
            N.kd.Gj.add(u)
        } else for (u.R = [], p = 0, b = l.length; p < b; p++) N = l[p], r = new N.kd.Ba(N, u), r.vc = !1, r.D = a[4][p].slice(0), r.ea(), u.R.push(r), N.kd.Gj.add(u);
        h = a[5];
        if (u.vc) for (p = 0, b = h.length; p < b; p++) u.D[p] = h[p];
        else u.D = h.slice(0);
        this.Ob.push(u);
        k && (k.g.push(u), 1 !== k.ud || 1 !== k.vd) && (t.Qk = !0);
        this.Bh++;

        if (t.sc) {
            if (u.sc = !0, u.vc ? u.siblings.length = 0 : u.siblings = [], !d && !n) {
                p = 0;
                for (b = t.Fb.length; p < b; p++) if (t.Fb[p] !== t) {
                    if (!t.Fb[p].Bc) return null;
                    u.siblings.push(this.Nd(t.Fb[p].Bc, w, !1, f ? u.x : c, f ? u.y : e, !0))
                }
                p = 0;
                for (b = u.siblings.length; p < b; p++) for (u.siblings[p].siblings.push(u), g = 0; g < b; g++) p !== g && u.siblings[p].siblings.push(u.siblings[g])
            }
        } else u.sc = !1, u.siblings = null;
        u.ea();
        p = 0;
        for (b = u.R.length; p < b; p++) u.R[p].cq && u.R[p].cq();
        return u
    };
    h.prototype.cj = function (a) {
        var k, d;
        k = 0;
        for (d = this.ra.aa.length; k < d; k++) {
            var c = this.ra.aa[k];
            if (ab(c.name, a)) return c
        }
        return null
    };
    h.prototype.If = function (a) {
        a = la(a);
        0 > a && (a = 0);
        a >= this.ra.aa.length && (a = this.ra.aa.length - 1);
        return this.ra.aa[a]
    };
    h.prototype.Ii = function (a) {
        var k, d;
        k = 0;
        for (d = a.length; k < d; k++) a[k].ua().za = !0
    };
    h.prototype.pg = function (a) {
        var k, d;
        k = 0;
        for (d = a.length; k < d; k++) a[k].pg()
    };
    h.prototype.Mh = function (a) {
        var k, d;
        k = 0;
        for (d = a.length; k < d; k++) a[k].Mh()
    };
    h.prototype.Ee = function (a) {
        var k, d;
        k = 0;
        for (d = a.length; k < d; k++) a[k].Ee()
    };
    h.prototype.yq = function (a, k, d) {
        var c = a.ua(),
            e, n, b, g, l, m;
        if (c.za) for (c.za = !1, e = c.g.length = 0, g = a.g.length; e < g; e++) b = a.g[e], b.Kb(), l = b.k.Nb(k, d, !0), m = b.k.Nb(k, d, !1), b.Wc(l, m) && c.g.push(b);
        else {
            e = n = 0;
            for (g = c.g.length; e < g; e++) b = c.g[e], b.Kb(), l = b.k.Nb(k, d, !0), m = b.k.Nb(k, d, !1), b.Wc(l, m) && (c.g[n] = c.g[e], n++);
            c.g.length = n
        }
        a.Kd();
        return c.ej()
    };
    new sa;
    new ra(0, 0, 0, 0);
    h.prototype.jn = function (a, c) {
        if (!c) return !1;
        var d, e, b, n, p;
        d = 0;
        for (e = a.Pa.length; d < e; d++) if (a.Pa[d].kd instanceof c) return !0;
        if (!a.U) for (d = 0, e = a.Ca.length; d < e; d++) for (p = a.Ca[d], b = 0, n = p.Pa.length; b < n; b++) if (p.Pa[b].kd instanceof c) return !0;
        return !1
    };
    h.prototype.kn = function (a) {
        return this.jn(a, Sb.Rr)
    };
    h.prototype.mk = function (a) {
        return this.jn(a, Sb.Ur)
    };
    var e = [],
        w = -1;
    h.prototype.trigger = function (a, c, d) {
        if (!this.ra) return !1;
        var b = this.ra.Tg;
        if (!b) return !1;
        w++;

        w === e.length ? e.push(new ca) : e[w].clear();
        a = this.en(a, c, b, d);
        w--;
        return a
    };
    h.prototype.en = function (a, c, d, b) {
        var g = e[w];
        if (g.contains(d)) return !1;
        g.add(d);
        var g = d.Pl.Ag(),
            n = !1,
            p, l, m;
        p = 0;
        for (l = g.length; p < l; p++) g[p].Ep() && (m = this.en(a, c, g[p].Nf, b), n = n || m);
        if (c) for (m = this.kk(a, c, c.type.name, d, b), n = n || m, p = 0, l = c.type.Ca.length; p < l; p++) m = this.kk(a, c, c.type.Ca[p].name, d, b), n = n || m;
        else m = this.kk(a, c, "system", d, b), n = n || m;
        return n
    };
    h.prototype.kk = function (a, c, d, e, b) {
        var n, p = !1,
            g = !1,
            g = "undefined" !== typeof b,
            l = (g ? e.xl : e.gn)[d];
        if (!l) return p;
        var m = null;
        e = 0;
        for (n = l.length; e < n; e++) if (l[e].method == a) {
            m = l[e].Vg;
            break
        }
        if (!m) return p;
        a = g ? m[b] : m;
        if (!a) return null;
        e = 0;
        for (n = a.length; e < n; e++) b = a[e][0], g = a[e][1], g = this.Wo(c, d, b, g), p = p || g;
        return p
    };
    h.prototype.Wo = function (a, c, d, e) {
        var b, n, p = !1;
        this.lk++;

        var g = this.nb().Gb;
        g && this.pg(g.Zd);
        var l = 1 < this.lk;
        this.pg(d.Zd);
        l && this.fq();
        var m = this.Nh(d);
        m.Gb = d;
        a && (b = this.types[c].ua(), b.za = !1, b.g.length = 1, b.g[0] = a, this.types[c].Kd());
        a = !0;
        if (d.parent) {
            c = m.Ym;
            for (b = d.parent; b;) c.push(b), b = b.parent;
            c.reverse();
            b = 0;
            for (n = c.length; b < n; b++) if (!c[b].mq()) {
                a = !1;
                break
            }
        }
        a && (this.te++, d.Qc ? d.lq(e) : d.Ta(), p = p || m.Ae);
        this.Hh();
        l && this.bq();
        this.Ee(d.Zd);
        g && this.Ee(g.Zd);
        0 !== this.Nc || 0 !== w || this.qj || this.Xc.Rd() && !this.Ob.length || this.rb();
        this.lk--;
        return p
    };
    h.prototype.Dl = function () {
        var a = this.nb();
        return a.Gb.Ea[a.Va]
    };
    h.prototype.fp = function () {
        var a = this.nb();
        return a.Gb.yc[a.Cb]
    };
    h.prototype.fq = function () {
        this.zh++;

        this.zh >= this.Bj.length && this.Bj.push([])
    };
    h.prototype.bq = function () {
        this.zh--

    };
    h.prototype.El = function () {
        return this.Bj[this.zh]
    };
    h.prototype.Nh = function (a) {
        this.Ug++;

        this.Ug >= this.Si.length && this.Si.push(new Eb);
        var c = this.nb();
        c.reset(a);
        return c
    };
    h.prototype.Hh = function () {
        this.Ug--

    };
    h.prototype.nb = function () {
        return this.Si[this.Ug]
    };
    h.prototype.Fl = function (a, c) {
        for (var d, e, b, n, p, g; c;) {
            d = 0;
            for (e = c.Jc.length; d < e; d++) if (g = c.Jc[d], g instanceof Fb && ab(a, g.name)) return g;
            c = c.parent
        }
        d = 0;
        for (e = this.re.length; d < e; d++) for (p = this.re[d], b = 0, n = p.Pd.length; b < n; b++) if (g = p.Pd[b], g instanceof
        Fb && ab(a, g.name)) return g;
        return null
    };
    h.prototype.Hl = function (a) {
        var c, d;
        c = 0;
        for (d = this.Pc.length; c < d; c++) if (this.Pc[c].Y === a) return this.Pc[c];
        return null
    };
    h.prototype.eh = function (a) {
        var c, d;
        c = 0;
        for (d = this.B.length; c < d; c++) if (this.B[c].Y === a) return this.B[c];
        return null
    };
    h.prototype.hp = function (a) {
        var c, d;
        c = 0;
        for (d = this.Qe.length; c < d; c++) if (this.Qe[c].Y === a) return this.Qe[c];
        return null
    };
    h.prototype.Bp = function () {
        var a = this,
            k = this.ck,
            d = this.sd,
            e = this.wh,
            g = !1;
        this.Vm && (g = !0, k = "__c2_continuouspreview", this.Vm = !1);
        if (k.length) {
            this.rb();
            d = this.qq();
            if (window.indexedDB && !this.Fc) b(k, d, function () {
                da("Saved state to IndexedDB storage (" + d.length + " bytes)");
                a.sd = d;
                a.trigger(G.prototype.e.si, null);
                a.sd = "";
                g && c()
            }, function (n) {
                try {
                    localStorage.setItem("__c2save_" + k, d), da("Saved state to WebStorage (" + d.length + " bytes)"), a.sd = d, a.trigger(G.prototype.e.si, null), a.sd = "", g && c()
                } catch (e) {
                    da("Failed to save game state: " + n + "; " + e)
                }
            });
            else try {
                localStorage.setItem("__c2save_" + k, d), da("Saved state to WebStorage (" + d.length + " bytes)"), a.sd = d, this.trigger(G.prototype.e.si, null), a.sd = "", g && c()
            } catch (n) {
                da("Error saving to WebStorage: " + n)
            }
            this.Ab = this.wh = this.ck = ""
        }
        e.length && (window.indexedDB && !this.Fc ? f(e, function (d) {
            d ? (a.Ab = d, da("Loaded state from IndexedDB storage (" + a.Ab.length + " bytes)")) : (a.Ab = localStorage.getItem("__c2save_" + e) || "", da("Loaded state from WebStorage (" + a.Ab.length + " bytes)"));
            a.xg = !1;
            a.Ab.length || a.trigger(G.prototype.e.ri, null)
        }, function () {
            a.Ab = localStorage.getItem("__c2save_" + e) || "";
            da("Loaded state from WebStorage (" + a.Ab.length + " bytes)");
            a.xg = !1;
            a.Ab.length || a.trigger(G.prototype.e.ri, null)
        }) : (this.Ab = localStorage.getItem("__c2save_" + e) || "", da("Loaded state from WebStorage (" + this.Ab.length + " bytes)"), this.xg = !1, a.Ab.length || a.trigger(G.prototype.e.ri, null)), this.ck = this.wh = "");
        this.Ab.length && (this.rb(), this.Pp(this.Ab), this.sd = this.Ab, this.trigger(G.prototype.e.Gn, null), this.Ab = this.sd = "")
    };
    h.prototype.qq = function () {
        var a, c, d, e, b, n, g, l = {
            c2save: !0,
            version: 1,
            rt: {
                time: this.tc.Ma,
                timescale: this.sf,
                tickcount: this.Cd,
                execcount: this.te,
                next_uid: this.hg,
                running_layout: this.ra.Y,
                start_time_offset: Date.now() - this.Wh
            },
            types: {},
            layouts: {},
            events: {
                groups: {},
                cnds: {},
                acts: {},
                vars: {}
            }
        };
        a = 0;
        for (c = this.B.length; a < c; a++) if (b = this.B[a], !b.U && !this.kn(b)) {
            n = {
                instances: []
            };
            Qa(b.ba) && (n.ex = t(b.ba));
            d = 0;
            for (e = b.g.length; d < e; d++) n.instances.push(this.bk(b.g[d]));
            l.types[b.Y.toString()] = n
        }
        a = 0;
        for (c = this.Pc.length; a < c; a++) d = this.Pc[a], l.layouts[d.Y.toString()] = d.Zb();
        e = l.events.groups;
        a = 0;
        for (c = this.Qe.length; a < c; a++) d = this.Qe[a], e[d.Y.toString()] = !! this.Gg[d.Lf];
        c = l.events.cnds;
        for (g in this.Re) this.Re.hasOwnProperty(g) && (a = this.Re[g], Qa(a.ba) && (c[g] = {
            ex: t(a.ba)
        }));
        c = l.events.acts;
        for (g in this.Pe) this.Pe.hasOwnProperty(g) && (a = this.Pe[g], Qa(a.ba) && (c[g] = {
            ex: a.ba
        }));
        c = l.events.vars;
        for (g in this.uf) this.uf.hasOwnProperty(g) && (a = this.uf[g], a.jh || a.parent && !a.Uf || (c[g] = a.data));
        l.system = this.gd.Zb();
        return JSON.stringify(l)
    };
    h.prototype.Lm = function () {
        var a, c, d, e, b, n;
        this.De = {};
        a = 0;
        for (c = this.B.length; a < c; a++) if (d = this.B[a], !d.U) for (e = 0, b = d.g.length; e < b; e++) n = d.g[e], this.De[n.uid.toString()] = n
    };
    h.prototype.Pp = function (a) {
        a = JSON.parse(a);
        if (a.c2save && !(1 < a.version)) {
            var c = a.rt;
            this.tc.reset();
            this.tc.Ma = c.time;
            this.sf = c.timescale;
            this.Cd = c.tickcount;
            this.te = c.execcount;
            this.Wh = Date.now() - c.start_time_offset;
            var d = c.running_layout;
            if (d !== this.ra.Y) if (d = this.Hl(d)) this.sl(d);
            else return;
            var e, b, n, g, l, m, t;
            m = a.types;
            for (b in m) if (m.hasOwnProperty(b) && (g = this.eh(parseInt(b, 10))) && !g.U && !this.kn(g)) {
                m[b].ex ? g.ba = m[b].ex : Sa(g.ba);
                l = g.g;
                n = m[b].instances;
                d = 0;
                for (e = ha(l.length, n.length); d < e; d++) this.xh(l[d], n[d]);
                d = n.length;
                for (e = l.length; d < e; d++) this.ie(l[d]);
                d = l.length;
                for (e = n.length; d < e; d++) {
                    l = null;
                    if (g.ya.Ud && (l = this.ra.bh(n[d].w.l), !l)) continue;
                    l = this.Nd(g.Bc, l, !1, 0, 0, !0);
                    this.xh(l, n[d])
                }
                g.qf = !0
            }
            this.rb();
            this.Lm();
            e = a.layouts;
            for (b in e) e.hasOwnProperty(b) && (d = this.Hl(parseInt(b, 10))) && d.Gc(e[b]);
            e = a.events.groups;
            for (b in e) e.hasOwnProperty(b) && (d = this.hp(parseInt(b, 10))) && (this.Gg[d.Lf] = e[b]);
            d = a.events.cnds;
            for (b in d) d.hasOwnProperty(b) && this.Re.hasOwnProperty(b) && (this.Re[b].ba = d[b].ex);
            d = a.events.acts;
            for (b in d) d.hasOwnProperty(b) && this.Pe.hasOwnProperty(b) && (this.Pe[b].ba = d[b].ex);
            d = a.events.vars;
            for (b in d) d.hasOwnProperty(b) && this.uf.hasOwnProperty(b) && (this.uf[b].data = d[b]);
            this.hg = c.next_uid;
            this.gd.Gc(a.system);
            d = 0;
            for (e = this.B.length; d < e; d++) if (g = this.B[d], !g.U) for (b = 0, a = g.g.length; b < a; b++) {
                l = g.g[b];
                if (g.sc) for (m = l.Kf(), c = l.siblings.length = 0, n = g.Fb.length; c < n; c++) t = g.Fb[c], g !== t && l.siblings.push(t.g[m]);
                l.Jd && l.Jd();
                if (l.R) for (c =
                0, n = l.R.length; c < n; c++) m = l.R[c], m.Jd && m.Jd()
            }
            this.wa = !0
        }
    };
    h.prototype.bk = function (a, c) {
        var d, b, e, n, g;
        n = a.type;
        e = n.ya;
        var l = {};
        c ? l.c2 = !0 : l.uid = a.uid;
        Qa(a.ba) && (l.ex = t(a.ba));
        if (a.Xa && a.Xa.length) for (l.ivs = {}, d = 0, b = a.Xa.length; d < b; d++) l.ivs[a.type.lj[d].toString()] = a.Xa[d];
        if (e.Ud) {
            e = {
                x: a.x,
                y: a.y,
                w: a.width,
                h: a.height,
                l: a.k.Y,
                zi: a.rc()
            };
            0 !== a.m && (e.a = a.m);
            1 !== a.opacity && (e.o = a.opacity);
            0.5 !== a.Sb && (e.hX = a.Sb);
            0.5 !== a.Tb && (e.hY = a.Tb);
            0 !== a.Eb && (e.bm = a.Eb);
            a.visible || (e.v = a.visible);
            a.Af || (e.ce = a.Af); - 1 !== a.gg && (e.mts = a.gg);
            if (n.N.length) for (e.fx = [], d = 0, b = n.N.length; d < b; d++) g = n.N[d], e.fx.push({
                name: g.name,
                active: a.Id[g.index],
                params: a.Ja[g.index]
            });
            l.w = e
        }
        if (a.R && a.R.length) for (l.behs = {}, d = 0, b = a.R.length; d < b; d++) n = a.R[d], n.Zb && (l.behs[n.type.Y.toString()] = n.Zb());
        a.Zb && (l.data = a.Zb());
        return l
    };
    h.prototype.jp = function (a, c) {
        var d, e;
        d = 0;
        for (e = a.lj.length; d < e; d++) if (a.lj[d] === c) return d;
        return -1
    };
    h.prototype.ep = function (a, c) {
        var d, e;
        d = 0;
        for (e = a.R.length; d < e; d++) if (a.R[d].type.Y === c) return d;
        return -1
    };
    h.prototype.xh = function (a, c, d) {
        var e, b, n, g, l;
        l = a.type;
        n = l.ya;
        if (d) {
            if (!c.c2) return
        } else a.uid = c.uid;
        c.ex ? a.ba = c.ex : Sa(a.ba);
        if (b = c.ivs) for (e in b) b.hasOwnProperty(e) && (d = this.jp(l, parseInt(e, 10)), 0 > d || d >= a.Xa.length || (a.Xa[d] = b[e]));
        if (n.Ud) {
            n = c.w;
            a.k.Y !== n.l && (d = a.k, a.k = this.ra.bh(n.l), a.k ? (a.k.g.push(a), a.k.fc = !0, xa(d.g, a), d.fc = !0) : (a.k = d, this.ie(a)));
            a.x = n.x;
            a.y = n.y;
            a.width = n.w;
            a.height = n.h;
            a.Le = n.zi;
            a.m = n.hasOwnProperty("a") ? n.a : 0;
            a.opacity = n.hasOwnProperty("o") ? n.o : 1;
            a.Sb = n.hasOwnProperty("hX") ? n.hX : 0.5;
            a.Tb = n.hasOwnProperty("hY") ? n.hY : 0.5;
            a.visible = n.hasOwnProperty("v") ? n.v : !0;
            a.Af = n.hasOwnProperty("ce") ? n.ce : !0;
            a.gg = n.hasOwnProperty("mts") ? n.mts : -1;
            a.Eb = n.hasOwnProperty("bm") ? n.bm : 0;
            a.Bf = Ya(a.Eb);
            this.od && Za(a, a.Eb, this.od);
            a.ab();
            if (n.hasOwnProperty("fx")) for (d = 0, b = n.fx.length; d < b; d++) g = l.bj(n.fx[d].name), 0 > g || (a.Id[g] = n.fx[d].active, a.Ja[g] = n.fx[d].params);
            a.Ed()
        }
        if (l = c.behs) for (e in l) l.hasOwnProperty(e) && (n = this.ep(a, parseInt(e, 10)), 0 > n || a.R[n].Gc(l[e]));
        c.data && a.Gc(c.data)
    };
    Gb = function (a) {
        return new h(document.getElementById(a))
    };
    Hb = function (a, c) {
        return new h({
            dc: !0,
            width: a,
            height: c
        })
    };
    window.cr_createRuntime = Gb;
    window.cr_createDCRuntime = Hb;
    window.createCocoonJSRuntime = function () {
        window.c2cocoonjs = !0;
        var a = document.createElement("screencanvas") || document.createElement("canvas");
        a.Dt = !0;
        document.body.appendChild(a);
        a = new h(a);
        window.c2runtime = a;
        window.addEventListener("orientationchange", function () {
            window.c2runtime.setSize(window.innerWidth, window.innerHeight)
        });
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    }
})();
window.cr_getC2Runtime = function () {
    var h = document.getElementById("c2canvas");
    return h ? h.c2runtime : window.c2runtime ? window.c2runtime : null
};
window.cr_sizeCanvas = function (h, r) {
    if (0 !== h && 0 !== r) {
        var b = window.cr_getC2Runtime();
        b && b.setSize(h, r)
    }
};
window.cr_setSuspended = function (h) {
    var r = window.cr_getC2Runtime();
    r && r.setSuspended(h)
};
(function () {
    function h(c, b) {
        this.b = c;
        this.Tg = null;
        this.scrollX = this.b.hb / 2;
        this.scrollY = this.b.gb / 2;
        this.scale = 1;
        this.m = 0;
        this.Ff = !0;
        this.name = b[0];
        this.width = b[1];
        this.height = b[2];
        this.ln = b[3];
        this.Tm = b[4];
        this.Y = b[5];
        var m = b[6],
            g, l;
        this.aa = [];
        this.Of = [];
        g = 0;
        for (l = m.length; g < l; g++) {
            var e = new Ib(this, m[g]);
            e.lm = g;
            this.aa.push(e)
        }
        m = b[7];
        this.ye = [];
        g = 0;
        for (l = m.length; g < l; g++) {
            var e = m[g],
                f = this.b.B[e[1]];
            f.Bc || (f.Bc = e);
            this.ye.push(e); - 1 === this.Of.indexOf(f) && this.Of.push(f)
        }
        this.N = [];
        this.fa = [];
        this.Ja = [];
        g = 0;
        for (l = b[8].length; g < l; g++) this.N.push({
            id: b[8][g][0],
            name: b[8][g][1],
            pb: -1,
            ic: !0,
            index: g
        }), this.Ja.push(b[8][g][2].slice(0));
        this.Ed();
        this.nf = new ra(0, 0, 1, 1);
        this.Wj = new ra(0, 0, 1, 1);
        this.Wd = {}
    }
    function r(c, b) {
        this.xa = c;
        this.b = c.b;
        this.g = [];
        this.scale = 1;
        this.m = 0;
        this.qe = !1;
        this.Dd = new ra(0, 0, 0, 0);
        this.dn = new sa;
        this.$b = this.ec = this.cc = this.ac = 0;
        this.fc = !1;
        this.name = b[0];
        this.index = b[1];
        this.Y = b[2];
        this.visible = b[3];
        this.Ld = b[4];
        this.Je = b[5];
        this.ud = b[6];
        this.vd = b[7];
        this.opacity = b[8];
        this.Ui =
        b[9];
        this.Hd = b[10];
        this.Eb = b[11];
        this.wo = b[12];
        this.Bf = "source-over";
        this.tb = this.ub = 0;
        this.Yd = !1;
        var m = b[13],
            g, l;
        this.We = [];
        g = 0;
        for (l = m.length; g < l; g++) {
            var e = m[g],
                f = this.b.B[e[1]];
            f.Bc || (f.Bc = e);
            this.We.push(e); - 1 === this.xa.Of.indexOf(f) && this.xa.Of.push(f)
        }
        this.N = [];
        this.fa = [];
        this.Ja = [];
        g = 0;
        for (l = b[14].length; g < l; g++) this.N.push({
            id: b[14][g][0],
            name: b[14][g][1],
            pb: -1,
            ic: !0,
            index: g
        }), this.Ja.push(b[14][g][2].slice(0));
        this.Ed();
        this.nf = new ra(0, 0, 1, 1);
        this.Wj = new ra(0, 0, 1, 1)
    }
    function b(c, b) {
        return c.Le - b.Le
    }
    h.prototype.pq = function (c) {
        var b = c.type.Y.toString();
        this.Wd.hasOwnProperty(b) || (this.Wd[b] = []);
        this.Wd[b].push(this.b.bk(c))
    };
    h.prototype.Nl = function () {
        var c = this.aa[0];
        return !c.Je && 1 === c.opacity && !c.Ui && c.visible
    };
    h.prototype.Ed = function () {
        this.fa.length = 0;
        var c, b, m;
        c = 0;
        for (b = this.N.length; c < b; c++) m = this.N[c], m.ic && this.fa.push(m)
    };
    h.prototype.aj = function (c) {
        var b, m, g;
        b = 0;
        for (m = this.N.length; b < m; b++) if (g = this.N[b], g.name === c) return g;
        return null
    };
    var f = [];
    h.prototype.gk = function () {
        this.Tm && (this.Tg = this.b.Ti[this.Tm]);
        this.b.ra = this;
        this.scrollX = this.b.hb / 2;
        this.scrollY = this.b.gb / 2;
        var c, t, m, g, l, e, w;
        c = 0;
        for (m = this.b.B.length; c < m; c++) if (t = this.b.B[c], !t.U) for (l = t.g, t = 0, g = l.length; t < g; t++) if (e = l[t], e.k) {
            var a = e.k.lm;
            a >= this.aa.length && (a = this.aa.length - 1);
            e.k = this.aa[a];
            e.k.g.push(e);
            e.k.fc = !0
        }
        f.length = 0;
        this.jo();
        c = 0;
        for (m = this.aa.length; c < m; c++) e = this.aa[c], e.to(), e.qe = !0, t = e.Nb(0, 0, !0, !0), g = e.Nb(0, 0, !1, !0), e.qe = !1, this.b.Xd && (t = t + 0.5 | 0, g = g + 0.5 | 0), e.Zj(t, g, null);
        l = !1;
        if (!this.Ff) {
            for (w in this.Wd) if (this.Wd.hasOwnProperty(w) && (t = this.b.eh(parseInt(w, 10))) && !t.U && this.b.mk(t)) {
                g = this.Wd[w];
                c = 0;
                for (m = g.length; c < m; c++) {
                    e = null;
                    if (t.ya.Ud && (e = this.bh(g[c].w.l), !e)) continue;
                    e = this.b.Nd(t.Bc, e, !1, 0, 0, !0);
                    this.b.xh(e, g[c]);
                    l = !0;
                    f.push(e)
                }
                g.length = 0
            }
            c = 0;
            for (m = this.aa.length; c < m; c++) this.aa[c].g.sort(b), this.aa[c].fc = !0
        }
        l && (this.b.rb(), this.b.Lm());
        for (c = 0; c < f.length; c++) if (e = f[c], e.type.sc) for (m = e.Kf(), t = 0, g = e.type.Fb.length; t < g; t++) w = e.type.Fb[t], e.type !== w && (w.g.length > m ? e.siblings.push(w.g[m]) : w.Bc && (l = this.b.Nd(w.Bc, e.k, !0, e.x, e.y, !0), this.b.rb(), w.ci(), e.siblings.push(l), f.push(l)));
        c = 0;
        for (m = this.ye.length; c < m; c++) this.b.Nd(this.ye[c], null, !0);
        this.b.zf = null;
        this.b.rb();
        if (this.b.ta && !this.b.Ya) for (c = 0, m = this.b.B.length; c < m; c++) w = this.b.B[c], !w.U && w.g.length && w.Hm && w.Hm(this.b.ta);
        c = 0;
        for (m = f.length; c < m; c++) e = f[c], this.b.trigger(Object.getPrototypeOf(e.type.ya).e.pi, e);
        f.length = 0;
        this.b.trigger(G.prototype.e.Oe, null);
        this.Ff = !1
    };
    h.prototype.so = function () {
        var c, b, m, g, l;
        b = c = 0;
        for (m = this.ye.length; c < m; c++) g = this.ye[c], l = this.b.B[g[1]], l.global ? this.b.Nd(g, null, !0) : (this.ye[b] = g, b++);
        this.ye.length = b
    };
    h.prototype.xq = function () {
        this.b.trigger(G.prototype.e.Fn, null);
        this.b.gd.Lb.length = 0;
        var c, b, m, g, l, e;
        c = 0;
        for (b = this.aa.length; c < b; c++) {
            l = this.aa[c].g;
            m = 0;
            for (g = l.length; m < g; m++) e = l[m], e.type.global || (this.b.mk(e.type) && this.pq(e), this.b.ie(e));
            this.b.rb();
            l.length = 0;
            this.aa[c].fc = !0
        }
        c = 0;
        for (b = this.b.B.length; c < b; c++) if (l = this.b.B[c], !(l.global || l.ya.Ud || l.ya.fk || l.U)) {
            m = 0;
            for (g = l.g.length; m < g; m++) this.b.ie(l.g[m]);
            this.b.rb()
        }
    };
    h.prototype.Mc = function (c) {
        var b, m = c,
            g = !1,
            l = !this.b.Ec;
        l && (this.b.vh || (this.b.vh = document.createElement("canvas"), b = this.b.vh, b.width = this.b.T, b.height = this.b.S, this.b.em = b.getContext("2d"), g = !0), b = this.b.vh, m = this.b.em, b.width !== this.b.T && (b.width = this.b.T, g = !0), b.height !== this.b.S && (b.height = this.b.S, g = !0), g && (m.webkitImageSmoothingEnabled = this.b.pa, m.mozImageSmoothingEnabled = this.b.pa, m.msImageSmoothingEnabled = this.b.pa, m.imageSmoothingEnabled = this.b.pa));
        m.globalAlpha = 1;
        m.globalCompositeOperation = "source-over";
        this.b.ti && !this.Nl() && m.clearRect(0, 0, this.b.T, this.b.S);
        var e, f, g = 0;
        for (e = this.aa.length; g < e; g++) f = this.aa[g], f.visible && 0 < f.opacity && 11 !== f.Eb && f.Mc(m);
        l && c.drawImage(b, 0, 0, this.b.width, this.b.height)
    };
    h.prototype.pc = function (c) {
        var b = 0 < this.fa.length || this.b.tf || !this.b.Ec;
        if (b) {
            this.b.Vb || (this.b.Vb = c.Md(this.b.T, this.b.S, this.b.pa));
            if (this.b.Vb.Bi !== this.b.T || this.b.Vb.Ai !== this.b.S) c.deleteTexture(this.b.Vb), this.b.Vb = c.Md(this.b.T, this.b.S, this.b.pa);
            c.Ad(this.b.Vb);
            this.b.Ec || c.He(this.b.T, this.b.S)
        } else this.b.Vb && (c.Ad(null), c.deleteTexture(this.b.Vb), this.b.Vb = null);
        this.b.ti && !this.Nl() && c.clear(0, 0, 0, 0);
        var m, g;
        m = 0;
        for (g = this.aa.length; m < g; m++) this.aa[m].visible && 0 < this.aa[m].opacity && this.aa[m].pc(c);
        b && (0 === this.fa.length || 1 === this.fa.length && this.b.Ec ? (1 === this.fa.length ? (b = this.fa[0].index, c.de(this.fa[0].pb), c.vg(null, 1 / this.b.T, 1 / this.b.S, 0, 0, 1, 1, this.scale, this.Ja[b]), c.Sj(this.fa[0].pb) && (this.b.wa = !0)) : c.de(0), this.b.Ec || c.He(this.b.width, this.b.height), c.Ad(null), c.ug(1), c.Hc(this.b.Vb), c.rq(), c.xd(), c.Fd(), b = this.b.width / 2, m = this.b.height / 2, c.Uj(-b, m, b, m, b, -m, -b, -m), c.Hc(null)) : this.Xj(c, null, null, null))
    };
    h.prototype.Jf = function () {
        return 0 < this.fa.length || this.b.tf || !this.b.Ec ? this.b.Vb : null
    };
    h.prototype.Il = function () {
        var c = this.aa[0].Rb(),
            b, m, g;
        b = 1;
        for (m = this.aa.length; b < m; b++) g = this.aa[b], (0 !== g.ud || 0 !== g.vd) && g.Rb() < c && (c = g.Rb());
        return c
    };
    h.prototype.Om = function (c) {
        if (!this.ln) {
            var b = this.b.T * (1 / this.Il()) / 2;
            c > this.width - b && (c = this.width - b);
            c < b && (c = b)
        }
        this.scrollX !== c && (this.scrollX = c, this.b.wa = !0)
    };
    h.prototype.Pm = function (c) {
        if (!this.ln) {
            var b = this.b.S * (1 / this.Il()) / 2;
            c > this.height - b && (c = this.height - b);
            c < b && (c = b)
        }
        this.scrollY !== c && (this.scrollY = c, this.b.wa = !0)
    };
    h.prototype.jo = function () {
        this.Om(this.scrollX);
        this.Pm(this.scrollY)
    };
    h.prototype.Xj = function (c, b, m, g) {
        var l = m ? m.fa : b ? b.fa : this.fa,
            e = m ? m.k.Rb() : b ? b.Rb() : 1,
            f = this.b.Xi,
            a, k, d, h, r = 0,
            n = 1,
            p, I = this.b.T,
            M = this.b.S,
            J = I / 2,
            R = M / 2,
            L = b ? b.nf : this.nf,
            y = b ? b.Wj : this.Wj,
            u = 0,
            P = 0,
            C = 0,
            N = 0,
            x = I,
            H =
            I,
            K = M,
            X = M,
            O = d = 0,
            F = m ? m.k.Ib() : 0;
        if (m) {
            a = 0;
            for (k = l.length; a < k; a++) d += c.et(l[a].pb), O += c.ft(l[a].pb);
            h = m.Db;
            u = b.Fa(h.left, h.top, !0, !0);
            C = b.Fa(h.left, h.top, !1, !0);
            x = b.Fa(h.right, h.bottom, !0, !0);
            K = b.Fa(h.right, h.bottom, !1, !0);
            0 !== F && (a = b.Fa(h.right, h.top, !0, !0), k = b.Fa(h.right, h.top, !1, !0), P = b.Fa(h.left, h.bottom, !0, !0), N = b.Fa(h.left, h.bottom, !1, !0), h = Math.min(u, x, a, P), x = Math.max(u, x, a, P), u = h, h = Math.min(C, K, k, N), K = Math.max(C, K, k, N), C = h);
            u -= d;
            C -= O;
            x += d;
            K += O;
            y.left = u / I;
            y.top = 1 - C / M;
            y.right = x / I;
            y.bottom = 1 - K / M;
            P = u = la(u);
            N = C = la(C);
            H = x = ma(x);
            X = K = ma(K);
            P -= d;
            N -= O;
            H += d;
            X += O;
            0 > u && (u = 0);
            0 > C && (C = 0);
            x > I && (x = I);
            K > M && (K = M);
            0 > P && (P = 0);
            0 > N && (N = 0);
            H > I && (H = I);
            X > M && (X = M);
            L.left = u / I;
            L.top = 1 - C / M;
            L.right = x / I;
            L.bottom = 1 - K / M
        } else L.left = y.left = 0, L.top = y.top = 0, L.right = y.right = 1, L.bottom = y.bottom = 1;
        O = m && ((m.m || F) && c.Kh(l[0].pb) || 0 !== d || 0 !== O || 1 !== m.opacity || m.type.ya.gm) || b && !m && 1 !== b.opacity;
        c.rq();
        if (O) {
            f[r] || (f[r] = c.Md(I, M, this.b.pa));
            if (f[r].Bi !== I || f[r].Ai !== M) c.deleteTexture(f[r]), f[r] = c.Md(I, M, this.b.pa);
            c.de(0);
            c.Ad(f[r]);
            p = X - N;
            c.clearRect(P, M - N - p, H - P, p);
            m ? m.pc(c) : (c.Hc(this.b.uc), c.ug(b.opacity), c.xd(), c.translate(-J, -R), c.Fd(), c.Ge(u, K, x, K, x, C, u, C, L));
            y.left = y.top = 0;
            y.right = y.bottom = 1;
            m && (h = L.top, L.top = L.bottom, L.bottom = h);
            r = 1;
            n = 0
        }
        c.ug(1);
        d = l.length - 1;
        var F = c.Im(l[d].pb) || !b && !m && !this.b.Ec,
            ja = 0;
        a = 0;
        for (k = l.length; a < k; a++) {
            f[r] || (f[r] = c.Md(I, M, this.b.pa));
            if (f[r].Bi !== I || f[r].Ai !== M) c.deleteTexture(f[r]), f[r] = c.Md(I, M, this.b.pa);
            c.de(l[a].pb);
            ja = l[a].index;
            c.Sj(l[a].pb) && (this.b.wa = !0);
            0 != a || O ? (c.vg(g, 1 / I, 1 / M, y.left, y.top, y.right, y.bottom, e, m ? m.Ja[ja] : b ? b.Ja[ja] : this.Ja[ja]), c.Hc(null), a !== d || F ? (c.Ad(f[r]), p = X - N, h = M - N - p, c.clearRect(P, h, H - P, p)) : (m ? c.of(m.ub, m.tb) : b && c.of(b.ub, b.tb), c.Ad(g)), c.Hc(f[n]), c.xd(), c.translate(-J, -R), c.Fd(), c.Ge(u, K, x, K, x, C, u, C, L), a !== d || F || c.Hc(null)) : (c.Ad(f[r]), p = X - N, h = M - N - p, c.clearRect(P, h, H - P, p), m ? (c.vg(g, 1 / m.width, 1 / m.height, y.left, y.top, y.right, y.bottom, e, m.Ja[ja]), m.pc(c)) : (c.vg(g, 1 / I, 1 / M, 0, 0, 1, 1, e, b ? b.Ja[ja] : this.Ja[ja]), c.Hc(b ? this.b.uc : this.b.Vb), c.xd(), c.translate(-J, -R), c.Fd(), c.Ge(u, K, x, K, x, C, u, C, L)), y.left = y.top = 0, y.right = y.bottom = 1, m && !F && (h = K, K = C, C = h));
            r = 0 === r ? 1 : 0;
            n = 0 === r ? 1 : 0
        }
        F && (c.de(0), m ? c.of(m.ub, m.tb) : b ? c.of(b.ub, b.tb) : this.b.Ec || (c.He(this.b.width, this.b.height), J = this.b.width / 2, R = this.b.height / 2, C = u = 0, x = this.b.width, K = this.b.height), c.Ad(g), c.Hc(f[n]), c.xd(), c.translate(-J, -R), c.Fd(), m && 1 === l.length && !O ? c.Ge(u, C, x, C, x, K, u, K, L) : c.Ge(u, K, x, K, x, C, u, C, L), c.Hc(null))
    };
    h.prototype.bh = function (b) {
        var f, m;
        f = 0;
        for (m = this.aa.length; f < m; f++) if (this.aa[f].Y === b) return this.aa[f];
        return null
    };
    h.prototype.Zb = function () {
        var b, f, m, g = {
            sx: this.scrollX,
            sy: this.scrollY,
            s: this.scale,
            a: this.m,
            w: this.width,
            h: this.height,
            fv: this.Ff,
            persist: this.Wd,
            fx: [],
            layers: {}
        };
        b = 0;
        for (f = this.N.length; b < f; b++) m = this.N[b], g.fx.push({
            name: m.name,
            active: m.ic,
            params: this.Ja[m.index]
        });
        b = 0;
        for (f = this.aa.length; b < f; b++) m = this.aa[b], g.layers[m.Y.toString()] = m.Zb();
        return g
    };
    h.prototype.Gc = function (b) {
        var f, m, g, l;
        this.scrollX = b.sx;
        this.scrollY = b.sy;
        this.scale = b.s;
        this.m = b.a;
        this.width = b.w;
        this.height = b.h;
        this.Wd = b.persist;
        "undefined" !== typeof b.fv && (this.Ff = b.fv);
        var e = b.fx;
        f = 0;
        for (m = e.length; f < m; f++) if (g = this.aj(e[f].name)) g.ic = e[f].active, this.Ja[g.index] = e[f].params;
        this.Ed();
        f = b.layers;
        for (l in f) f.hasOwnProperty(l) && (b = this.bh(parseInt(l, 10))) && b.Gc(f[l])
    };
    wb = h;
    r.prototype.Ed = function () {
        this.fa.length = 0;
        var b, f, m;
        b = 0;
        for (f = this.N.length; b < f; b++) m = this.N[b], m.ic && this.fa.push(m)
    };
    r.prototype.aj = function (b) {
        var f, m, g;
        f = 0;
        for (m = this.N.length; f < m; f++) if (g = this.N[f], g.name === b) return g;
        return null
    };
    r.prototype.to = function () {
        var b, h, m, g, l, e;
        h = b = 0;
        for (m = this.We.length; b < m; b++) {
            g = this.We[b];
            l = this.b.B[g[1]];
            e = this.b.mk(l);
            l = !0;
            if (!e || this.xa.Ff) g = this.b.Nd(g, this, !0), f.push(g), g.type.global && (l = !1);
            l && (this.We[h] = this.We[b], h++)
        }
        this.We.length = h;
        this.b.rb();
        !this.b.ca && this.N.length && (this.Eb = this.wo);
        this.Bf = Ya(this.Eb);
        this.b.od && Za(this, this.Eb, this.b.od)
    };
    r.prototype.Hq = function () {
        if (this.fc) {
            var b, f;
            b = 0;
            for (f = this.g.length; b < f; b++) this.g[b].Le = b;
            this.fc = !1
        }
    };
    r.prototype.Rb = function (b) {
        return this.kp() * (this.b.Ec || b ? this.b.xf : 1)
    };
    r.prototype.kp = function () {
        return (this.scale * this.xa.scale - 1) * this.Hd + 1
    };
    r.prototype.Ib = function () {
        return this.qe ? 0 : Da(this.xa.m + this.m)
    };
    r.prototype.Mc = function (b) {
        this.Yd = this.Ui || 1 !== this.opacity || 0 !== this.Eb;
        var f = this.b.canvas,
            m = b,
            g = !1;
        b.globalAlpha = 1;
        b.globalCompositeOperation = "source-over";
        this.Yd && (this.b.uh || (this.b.uh = document.createElement("canvas"), f = this.b.uh, f.width = this.b.T, f.height = this.b.S, this.b.dm = f.getContext("2d"), g = !0), f = this.b.uh, m = this.b.dm, f.width !== this.b.T && (f.width = this.b.T, g = !0), f.height !== this.b.S && (f.height = this.b.S, g = !0), g && (m.webkitImageSmoothingEnabled = this.b.pa, m.mozImageSmoothingEnabled = this.b.pa, m.msImageSmoothingEnabled = this.b.pa, m.imageSmoothingEnabled = this.b.pa), this.Je && m.clearRect(0, 0, this.b.T, this.b.S));
        this.Je || (m.fillStyle = "rgb(" + this.Ld[0] + "," + this.Ld[1] + "," + this.Ld[2] + ")", m.fillRect(0, 0, this.b.T, this.b.S));
        m.save();
        this.qe = !0;
        var g = this.Nb(0, 0, !0, !0),
            l = this.Nb(0, 0, !1, !0);
        this.qe = !1;
        this.b.Xd && (g = g + 0.5 | 0, l = l + 0.5 | 0);
        this.Zj(g, l, m);
        var e = this.Rb();
        m.scale(e, e);
        m.translate(-g, -l);
        for (var h, g = 0, l = this.g.length; g < l; g++) e = this.g[g], e.visible && 0 !== e.width && 0 !== e.height && (e.Kb(), h = e.Db, h.right < this.ac || h.bottom < this.ec || h.left > this.cc || h.top > this.$b || (m.globalCompositeOperation = e.Bf, e.Mc(m)));
        m.restore();
        this.Yd && (b.globalCompositeOperation = this.Bf, b.globalAlpha = this.opacity, b.drawImage(f, 0, 0))
    };
    r.prototype.Zj = function (b, f, m) {
        var g = this.Rb();
        this.ac = b;
        this.ec = f;
        this.cc = b + this.b.T * (1 / g);
        this.$b = f + this.b.S * (1 / g);
        b = this.Ib();
        0 !== b && (m && (m.translate(this.b.T / 2, this.b.S / 2), m.rotate(-b), m.translate(this.b.T / -2, this.b.S / -2)), this.Dd.set(this.ac, this.ec, this.cc, this.$b), this.Dd.offset((this.ac + this.cc) / -2, (this.ec + this.$b) / -2), this.dn.Sm(this.Dd, b), this.dn.Xk(this.Dd), this.Dd.offset((this.ac + this.cc) / 2, (this.ec + this.$b) / 2), this.ac = this.Dd.left, this.ec = this.Dd.top, this.cc = this.Dd.right, this.$b = this.Dd.bottom)
    };
    r.prototype.pc = function (b) {
        var f = this.b.T,
            m = this.b.S,
            g = 0,
            l = 0;
        if (this.Yd = this.Ui || 1 !== this.opacity || 0 < this.fa.length || 0 !== this.Eb) {
            this.b.uc || (this.b.uc = b.Md(this.b.T, this.b.S, this.b.pa));
            if (this.b.uc.Bi !== this.b.T || this.b.uc.Ai !== this.b.S) b.deleteTexture(this.b.uc), this.b.uc = b.Md(this.b.T, this.b.S, this.b.pa);
            b.Ad(this.b.uc);
            this.Je && b.clear(0, 0, 0, 0)
        }
        this.Je || b.clear(this.Ld[0] / 255, this.Ld[1] / 255, this.Ld[2] / 255, 1);
        this.qe = !0;
        var l = this.Nb(0, 0, !0, !0),
            e = this.Nb(0, 0, !1, !0);
        this.qe = !1;
        this.b.Xd && (l = l + 0.5 | 0, e = e + 0.5 | 0);
        this.Zj(l, e, null);
        e = this.Rb();
        b.xd();
        b.scale(e, e);
        b.Mm(-this.Ib());
        b.translate((this.ac + this.cc) / -2, (this.ec + this.$b) / -2);
        b.Fd();
        var h, a, k;
        h = 0;
        for (a = this.g.length; h < a; h++) if (k = this.g[h], k.visible && 0 !== k.width && 0 !== k.height && (k.Kb(), g = k.Db, !(g.right < this.ac || g.bottom < this.ec || g.left > this.cc || g.top > this.$b))) if (k.pn) if (g = k.fa[0].pb, l = k.fa[0].index, 1 !== k.fa.length || b.Im(g) || b.yt(g) || (k.m || k.k.Ib()) && b.Kh(g) || 1 !== k.opacity || k.type.ya.gm) this.xa.Xj(b, this, k, this.Yd ? this.b.uc : this.xa.Jf()), b.xd(), b.scale(e, e), b.Mm(-this.Ib()), b.translate((this.ac + this.cc) / -2, (this.ec + this.$b) / -2), b.Fd();
        else {
            b.de(g);
            b.of(k.ub, k.tb);
            b.Sj(g) && (this.b.wa = !0);
            var d = 0,
                r = 0,
                A = 0,
                n = 0;
            b.Kh(g) && (g = k.Db, d = this.Fa(g.left, g.top, !0, !0), r = this.Fa(g.left, g.top, !1, !0), A = this.Fa(g.right, g.bottom, !0, !0), g = this.Fa(g.right, g.bottom, !1, !0), d /= f, r = 1 - r / m, A /= f, n = 1 - g / m);
            b.vg(this.Yd ? this.b.uc : this.xa.Jf(), 1 / k.width, 1 / k.height, d, r, A, n, this.Rb(), k.Ja[l]);
            k.pc(b)
        } else b.de(0), b.of(k.ub, k.tb), k.pc(b);
        this.Yd && (g = this.fa.length ? this.fa[0].pb : 0, l = this.fa.length ? this.fa[0].index : 0, 0 === this.fa.length || 1 === this.fa.length && !b.Im(g) && 1 === this.opacity ? (1 === this.fa.length ? (b.de(g), b.vg(this.xa.Jf(), 1 / this.b.T, 1 / this.b.S, 0, 0, 1, 1, this.Rb(), this.Ja[l]), b.Sj(g) && (this.b.wa = !0)) : b.de(0), b.Ad(this.xa.Jf()), b.ug(this.opacity), b.Hc(this.b.uc), b.of(this.ub, this.tb), b.xd(), b.Fd(), f = this.b.T / 2, m = this.b.S / 2, b.Uj(-f, m, f, m, f, -m, -f, -m), b.Hc(null)) : this.xa.Xj(b, this, null, this.xa.Jf()))
    };
    r.prototype.Nb = function (b, f, m, g) {
        var l = this.b.devicePixelRatio;
        this.b.ze && (b *= l, f *= l);
        var l = this.b.Cm,
            e = this.b.Dm,
            l = (this.xa.scrollX - l) * this.ud + l,
            e = (this.xa.scrollY - e) * this.vd + e,
            h = 1 / this.Rb(!g);
        g ? (l -= this.b.T * h / 2, e -= this.b.S * h / 2) : (l -= this.b.width * h / 2, e -= this.b.height * h / 2);
        l += b * h;
        e += f * h;
        f = this.Ib();
        0 !== f && (l -= this.xa.scrollX, e -= this.xa.scrollY, b = Math.cos(f), f = Math.sin(f), g = l * b - e * f, e = e * b + l * f, l = g + this.xa.scrollX, e += this.xa.scrollY);
        return m ? l : e
    };
    r.prototype.Fa = function (b, f, m, g) {
        var l = this.Ib();
        if (0 !== l) {
            b -= this.xa.scrollX;
            f -= this.xa.scrollY;
            var e = Math.cos(-l),
                l = Math.sin(-l),
                h = b * e - f * l;
            f = f * e + b * l;
            b = h + this.xa.scrollX;
            f += this.xa.scrollY
        }
        e = this.b.Cm;
        l = this.b.Dm;
        e = (this.xa.scrollX - e) * this.ud + e;
        l = (this.xa.scrollY - l) * this.vd + l;
        h = 1 / this.Rb(!g);
        g ? (e -= this.b.T * h / 2, l -= this.b.S * h / 2) : (e -= this.b.width * h / 2, l -= this.b.height * h / 2);
        e = (b - e) / h;
        l = (f - l) / h;
        b = this.b.devicePixelRatio;
        this.b.ze && (e /= b, l /= b);
        return m ? e : l
    };
    r.prototype.Zb = function () {
        var b, f, m, g = {
            s: this.scale,
            a: this.m,
            vl: this.ac,
            vt: this.ec,
            vr: this.cc,
            vb: this.$b,
            v: this.visible,
            bc: this.Ld,
            t: this.Je,
            px: this.ud,
            py: this.vd,
            o: this.opacity,
            zr: this.Hd,
            fx: [],
            instances: []
        };
        b = 0;
        for (f = this.N.length; b < f; b++) m = this.N[b], g.fx.push({
            name: m.name,
            active: m.ic,
            params: this.Ja[m.index]
        });
        return g
    };
    r.prototype.Gc = function (c) {
        var f, m;
        this.scale = c.s;
        this.m = c.a;
        this.ac = c.vl;
        this.ec = c.vt;
        this.cc = c.vr;
        this.$b = c.vb;
        this.visible = c.v;
        this.Ld = c.bc;
        this.Je = c.t;
        this.ud = c.px;
        this.vd = c.py;
        this.opacity = c.o;
        this.Hd = c.zr;
        var g = c.fx;
        c = 0;
        for (f = g.length; c < f; c++) if (m = this.aj(g[c].name)) m.ic = g[c].active, this.Ja[m.index] = g[c].params;
        this.Ed();
        this.g.sort(b);
        this.fc = !0
    };
    Ib = r
})();
(function () {
    function h(a, b) {
        var d, e = a.length;
        switch (e) {
        case 0:
            return !0;
        case 1:
            return a[0] === b[0];
        case 2:
            return a[0] === b[0] && a[1] === b[1];
        default:
            for (d = 0; d < e; d++) if (a[d] !== b[d]) return !1;
            return !0
        }
    }
    function r(a, b) {
        return a.index - b.index
    }
    function b(a) {
        var b, e, c, k;
        2 === a.length ? a[0].index > a[1].index && (b = a[0], a[0] = a[1], a[1] = b) : 2 < a.length && a.sort(r);
        a.length >= d.length && (d.length = a.length + 1);
        d[a.length] || (d[a.length] = []);
        k = d[a.length];
        b = 0;
        for (e = k.length; b < e; b++) if (c = k[b], h(a, c)) return c;
        k.push(a);
        return a
    }

    function f(a, b) {
        this.b = a;
        this.gn = {};
        this.xl = {};
        this.fj = !1;
        this.Pl = new ca;
        this.name = b[0];
        var d = b[1];
        this.Pd = [];
        var e, c;
        e = 0;
        for (c = d.length; e < c; e++) this.Ql(d[e], null, this.Pd)
    }
    function c(a) {
        this.type = a;
        this.g = [];
        this.na = [];
        this.za = !0
    }
    function t(a, b, d) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.Aa = [];
        this.Zd = [];
        this.Ol = this.ai = this.jk = this.kj = this.group = this.Wm = !1;
        this.Ea = [];
        this.yc = [];
        this.Jc = [];
        d[1] ? (this.Lf = d[1][1].toLowerCase(), this.group = !0, this.kj = !! d[1][0], this.b.Qe.push(this), this.b.Gg[this.Lf.toLowerCase()] =
        this.kj) : (this.Lf = "", this.kj = this.group = !1);
        this.Qc = d[2];
        this.Y = d[4];
        this.group || (this.b.Wk[this.Y.toString()] = this);
        var e = d[5];
        a = 0;
        for (b = e.length; a < b; a++) {
            var c = new Jb(this, e[a]);
            c.index = a;
            this.Ea.push(c);
            this.Lk(c.type)
        }
        e = d[6];
        a = 0;
        for (b = e.length; a < b; a++) c = new Kb(this, e[a]), c.index = a, this.yc.push(c);
        if (8 === d.length) for (d = d[7], a = 0, b = d.length; a < b; a++) this.sheet.Ql(d[a], this, this.Jc);
        this.kh = !1;
        this.Ea.length && (this.kh = null == this.Ea[0].type && this.Ea[0].Ra == G.prototype.e.gc)
    }
    function m(a, b) {
        var d, e, c;
        if (a && (-1 === b.indexOf(a) && b.push(a), a.sc)) for (d = 0, e = a.Fb.length; d < e; d++) c = a.Fb[d], a !== c && -1 === b.indexOf(c) && b.push(c)
    }
    function g(a, b) {
        this.jc = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.X = [];
        this.P = [];
        this.ba = {};
        this.index = -1;
        this.Ra = b[1];
        this.trigger = 0 < b[3];
        this.wl = 2 === b[3];
        this.td = b[4];
        this.Pf = b[5];
        this.Np = b[6];
        this.Y = b[7];
        this.b.Re[this.Y.toString()] = this; - 1 === b[0] ? (this.type = null, this.Ta = this.ak, this.me = null, this.mb = -1) : (this.type = this.b.B[b[0]], this.Ta = this.Np ? this.nq : this.$j, b[2] ? (this.me = this.type.ah(b[2]), this.mb = this.type.Zi(b[2])) : (this.me = null, this.mb = -1), this.jc.parent && this.jc.parent.Th());
        this.wl && (this.Ta = this.oq);
        if (10 === b.length) {
            var d, e, c = b[9];
            d = 0;
            for (e = c.length; d < e; d++) {
                var k = new Lb(this, c[d]);
                this.X.push(k)
            }
            this.P.length = c.length
        }
    }
    function l(a, b) {
        this.jc = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.X = [];
        this.P = [];
        this.ba = {};
        this.index = -1;
        this.Ra = b[1]; - 1 === b[0] ? (this.type = null, this.Ta = this.ak, this.me = null, this.mb = -1) : (this.type = this.b.B[b[0]], this.Ta = this.$j, b[2] ? (this.me = this.type.ah(b[2]), this.mb =
        this.type.Zi(b[2])) : (this.me = null, this.mb = -1));
        this.Y = b[3];
        this.b.Pe[this.Y.toString()] = this;
        if (6 === b.length) {
            var d, e, c = b[5];
            d = 0;
            for (e = c.length; d < e; d++) {
                var k = new Lb(this, c[d]);
                this.X.push(k)
            }
            this.P.length = c.length
        }
    }
    function e(a, b) {
        this.J = a;
        this.jc = a.jc;
        this.sheet = a.sheet;
        this.b = a.b;
        this.type = b[0];
        this.Yc = null;
        this.pl = this.$d = 0;
        this.xa = null;
        this.key = 0;
        this.object = null;
        this.index = 0;
        this.ei = this.rf = this.yl = this.se = this.Bg = null;
        var d, e, c;
        switch (b[0]) {
        case 0:
        case 7:
            this.Yc = new Mb(this, b[1]);
            this.$d = 0;
            this.get = this.pp;
            break;
        case 1:
            this.Yc = new Mb(this, b[1]);
            this.$d = 0;
            this.get = this.qp;
            break;
        case 5:
            this.Yc = new Mb(this, b[1]);
            this.$d = 0;
            this.get = this.up;
            break;
        case 3:
        case 8:
            this.pl = b[1];
            this.get = this.np;
            break;
        case 6:
            this.xa = this.b.zj[b[1]];
            this.get = this.vp;
            break;
        case 9:
            this.key = b[1];
            this.get = this.tp;
            break;
        case 4:
            this.object = this.b.B[b[1]];
            this.get = this.wp;
            this.jc.Lk(this.object);
            this.J instanceof Kb ? this.jc.Th() : this.jc.parent && this.jc.parent.Th();
            break;
        case 10:
            this.index = b[1];
            this.get = a.type.U ? this.rp : this.sp;
            break;
        case 11:
            this.Bg = b[1];
            this.se = null;
            this.get = this.op;
            break;
        case 2:
        case 12:
            this.yl = b[1];
            this.get = this.mp;
            break;
        case 13:
            for (this.get = this.xp, this.rf = [], this.ei = [], d = 1, e = b.length; d < e; d++) c = new Lb(this.J, b[d]), this.rf.push(c), this.ei.push(0)
        }
    }
    function w(a, b, d) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.Aa = [];
        this.name = d[1];
        this.Cg = d[2];
        this.jj = d[3];
        this.Uf = !! d[4];
        this.jh = !! d[5];
        this.Y = d[6];
        this.b.uf[this.Y.toString()] = this;
        this.data = this.jj;
        this.parent ? (this.Be = this.Uf || this.jh ? -1 : this.b.wq++, this.b.fo.push(this)) : (this.Be = -1, this.b.eo.push(this))
    }
    function a(a, b, d) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.Aa = [];
        this.Nf = null;
        this.Cp = d[1]
    }
    function k() {
        this.Ym = [];
        this.reset(null)
    }
    var d = [];
    f.prototype.toString = s("name");
    f.prototype.Ql = function (a, b, d) {
        switch (a[0]) {
        case 0:
            a = new Nb(this, b, a);
            if (a.Qc) for (d.push(a), d = 0, b = a.Ea.length; d < b; d++) a.Ea[d].trigger && this.Rl(a, d);
            else a.Yl() ? this.Rl(a, 0) : d.push(a);
            break;
        case 1:
            a = new Fb(this, b, a);
            d.push(a);
            break;
        case 2:
            a = new Ob(this, b, a), d.push(a)
        }
    };
    f.prototype.La =

    function () {
        var a, b;
        a = 0;
        for (b = this.Pd.length; a < b; a++) this.Pd[a].La(a < b - 1 && this.Pd[a + 1].kh)
    };
    f.prototype.Ta = function (a) {
        this.b.Ct || (this.fj = !0, a || (this.b.qj = !0));
        var b, d;
        b = 0;
        for (d = this.Pd.length; b < d; b++) {
            var e = this.Pd[b];
            e.Ta();
            this.b.Ii(e.Aa);
            this.b.Xc.Rd() && !this.b.Ob.length || this.b.rb()
        }
        a || (this.b.qj = !1)
    };
    f.prototype.Rl = function (a, b) {
        a.Qc || this.b.bi.push(a);
        var d, e, c = a.Ea[b],
            k;
        k = c.type ? c.type.name : "system";
        var g = (d = c.wl) ? this.xl : this.gn;
        g[k] || (g[k] = []);
        k = g[k];
        g = c.Ra;
        if (d) {
            if (c.X.length && (c = c.X[0], 1 === c.type && 2 === c.Yc.type)) {
                c = c.Yc.value.toLowerCase();
                d = 0;
                for (e = k.length; d < e; d++) if (k[d].method == g) {
                    d = k[d].Vg;
                    d[c] ? d[c].push([a, b]) : d[c] = [
                        [a, b]
                    ];
                    return
                }
                d = {};
                d[c] = [
                    [a, b]
                ];
                k.push({
                    method: g,
                    Vg: d
                })
            }
        } else {
            d = 0;
            for (e = k.length; d < e; d++) if (k[d].method == g) {
                k[d].Vg.push([a, b]);
                return
            }
            k.push({
                method: g,
                Vg: [
                    [a, b]
                ]
            })
        }
    };
    xb = f;
    c.prototype.ej = function () {
        return this.za ? this.type.g.length : this.g.length
    };
    c.prototype.$c = function () {
        return this.za ? this.type.g : this.g
    };
    c.prototype.mg = function (a) {
        a && (a.b.nb().Gb.Qc ? (this.za && (this.g.length = 0, wa(this.na, a.type.g), this.za = !1), a = this.na.indexOf(a), -1 !== a && (this.g.push(this.na[a]), this.na.splice(a, 1))) : (this.za = !1, this.g.length = 1, this.g[0] = a))
    };
    cb = c;
    window._c2hh_ = "31D2DA3EC9572BBA40C058ABB6736A23B9AB93BF";
    t.prototype.La = function (a) {
        var d, e = this.parent;
        if (this.group) for (this.ai = !0; e;) {
            if (!e.group) {
                this.ai = !1;
                break
            }
            e = e.parent
        }
        this.jk = !this.Yl() && (!this.parent || this.parent.group && this.parent.ai);
        this.Ol = !! a;
        this.Zd = this.Aa.slice(0);
        for (e = this.parent; e;) {
            a = 0;
            for (d = e.Aa.length; a < d; a++) this.co(e.Aa[a]);
            e = e.parent
        }
        this.Aa = b(this.Aa);
        this.Zd = b(this.Zd);
        a = 0;
        for (d = this.Ea.length; a < d; a++) this.Ea[a].La();
        a = 0;
        for (d = this.yc.length; a < d; a++) this.yc[a].La();
        a = 0;
        for (d = this.Jc.length; a < d; a++) this.Jc[a].La(a < d - 1 && this.Jc[a + 1].kh)
    };
    t.prototype.Lk = function (a) {
        m(a, this.Aa)
    };
    t.prototype.co = function (a) {
        m(a, this.Zd)
    };
    t.prototype.Th = function () {
        this.Wm = !0;
        this.parent && this.parent.Th()
    };
    t.prototype.Yl = function () {
        return this.Ea.length ? this.Ea[0].trigger : !1
    };
    t.prototype.Ta = function () {
        var a, b = !1,
            d, e = this.b.nb();
        e.Gb = this;
        this.kh || (e.Ri = !1);
        if (this.Qc) {
            0 === this.Ea.length && (b = !0);
            e.Va = 0;
            for (a = this.Ea.length; e.Va < a; e.Va++) this.Ea[e.Va].trigger || (d = this.Ea[e.Va].Ta()) && (b = !0);
            (e.Ae = b) && this.Qh()
        } else {
            e.Va = 0;
            for (a = this.Ea.length; e.Va < a; e.Va++) if (d = this.Ea[e.Va].Ta(), !d) {
                e.Ae = !1;
                !this.jk || this.b.Xc.Rd() && !this.b.Ob.length || this.b.rb();
                return
            }
            e.Ae = !0;
            this.Qh()
        }
        this.yo(e)
    };
    t.prototype.yo = function (a) {
        a.Ae && this.Ol && (a.Ri = !0);
        !this.jk || this.b.Xc.Rd() && !this.b.Ob.length || this.b.rb()
    };
    t.prototype.lq = function (a) {
        this.b.nb().Gb =
        this;
        this.Ea[a].Ta() && (this.Qh(), this.b.nb().Ae = !0)
    };
    t.prototype.Qh = function () {
        var a = this.b.nb(),
            b;
        a.Cb = 0;
        for (b = this.yc.length; a.Cb < b; a.Cb++) if (this.yc[a.Cb].Ta()) return;
        this.Nm()
    };
    t.prototype.iq = function () {
        var a = this.b.nb(),
            b;
        for (b = this.yc.length; a.Cb < b; a.Cb++) if (this.yc[a.Cb].Ta()) return;
        this.Nm()
    };
    t.prototype.Nm = function () {
        if (this.Jc.length) {
            var a, b, d, e, c = this.Jc.length - 1;
            this.b.Nh(this);
            if (this.Wm) for (a = 0, b = this.Jc.length; a < b; a++) d = this.Jc[a], (e = !this.ai || !this.group && a < c) && this.b.Mh(d.Aa), d.Ta(), e ? this.b.Ee(d.Aa) : this.b.Ii(d.Aa);
            else for (a = 0, b = this.Jc.length; a < b; a++) this.Jc[a].Ta();
            this.b.Hh()
        }
    };
    t.prototype.mq = function () {
        var a = this.b.nb();
        a.Gb = this;
        var b = !1,
            d;
        a.Va = 0;
        for (d = this.Ea.length; a.Va < d; a.Va++) if (this.Ea[a.Va].Ta()) b = !0;
        else if (!this.Qc) return !1;
        return this.Qc ? b : !0
    };
    t.prototype.jq = function () {
        this.b.te++;
        var a = this.b.nb().Va,
            b = this.b.Nh(this);
        if (!this.Qc) for (b.Va = a + 1, a = this.Ea.length; b.Va < a; b.Va++) if (!this.Ea[b.Va].Ta()) {
            this.b.Hh();
            return
        }
        this.Qh();
        this.b.Hh()
    };
    t.prototype.Ip = function (a) {
        var b =
        a.index;
        if (0 === b) return !0;
        for (--b; 0 <= b; --b) if (this.Ea[b].type === a.type) return !1;
        return !0
    };
    Nb = t;
    g.prototype.La = function () {
        var a, b;
        a = 0;
        for (b = this.X.length; a < b; a++) this.X[a].La()
    };
    g.prototype.oq = v(!0);
    g.prototype.ak = function () {
        var a, b;
        a = 0;
        for (b = this.X.length; a < b; a++) this.P[a] = this.X[a].get();
        return Pa(this.Ra.apply(this.b.gd, this.P), this.Pf)
    };
    g.prototype.nq = function () {
        var a, b;
        a = 0;
        for (b = this.X.length; a < b; a++) this.P[a] = this.X[a].get(a);
        a = this.Ra.apply(this.me ? this.me : this.type, this.P);
        this.type.Kd();
        return a
    };
    g.prototype.$j = function () {
        var a, b, d, e, c, k, g, l = this.type.ua(),
            f = this.jc.Qc && !this.trigger,
            m = 0,
            h = this.type.sc;
        if (l.za) {
            l.g.length = 0;
            a = l.na.length = 0;
            for (d = this.type.g.length; a < d; a++) {
                k = this.type.g[a];
                b = 0;
                for (e = this.X.length; b < e; b++) this.P[b] = this.X[b].get(a); - 1 < this.mb ? (this.type.U && (m = k.type.Ue[this.type.Zc]), b = this.Ra.apply(k.R[this.mb + m], this.P)) : b = this.Ra.apply(k, this.P);
                (c = Pa(b, this.Pf)) ? l.g.push(k) : f && l.na.push(k)
            }
            this.type.finish && this.type.finish(!0);
            l.za = !1;
            this.type.Kd();
            return l.ej()
        }
        var w =
        0,
            r = (c = f && !this.jc.Ip(this)) ? l.na : l.g,
            B = !1;
        a = 0;
        for (d = r.length; a < d; a++) {
            k = r[a];
            b = 0;
            for (e = this.X.length; b < e; b++) this.P[b] = this.X[b].get(a); - 1 < this.mb ? (this.type.U && (m = k.type.Ue[this.type.Zc]), b = this.Ra.apply(k.R[this.mb + m], this.P)) : b = this.Ra.apply(k, this.P);
            if (Pa(b, this.Pf)) if (B = !0, c) {
                if (l.g.push(k), h) for (b = 0, e = k.siblings.length; b < e; b++) g = k.siblings[b], g.type.ua().g.push(g)
            } else {
                r[w] = k;
                if (h) for (b = 0, e = k.siblings.length; b < e; b++) g = k.siblings[b], g.type.ua().g[w] = g;
                w++
            } else if (c) {
                r[w] = k;
                if (h) for (b = 0, e = k.siblings.length; b < e; b++) g = k.siblings[b], g.type.ua().na[w] = g;
                w++
            } else if (f && (l.na.push(k), h)) for (b = 0, e = k.siblings.length; b < e; b++) g = k.siblings[b], g.type.ua().na.push(g)
        }
        r.length = w;
        if (h) for (a = 0, d = this.type.Fb.length; a < d; a++) k = this.type.Fb[a].ua(), c ? k.na.length = w : k.g.length = w;
        m = B;
        if (c && !B) for (a = 0, d = l.g.length; a < d; a++) {
            k = l.g[a];
            b = 0;
            for (e = this.X.length; b < e; b++) this.P[b] = this.X[b].get(a);
            b = -1 < this.mb ? this.Ra.apply(k.R[this.mb], this.P) : this.Ra.apply(k, this.P);
            if (Pa(b, this.Pf)) {
                B = !0;
                break
            }
        }
        this.type.finish && this.type.finish(m || f);
        return f ? B : l.ej()
    };
    Jb = g;
    l.prototype.La = function () {
        var a, b;
        a = 0;
        for (b = this.X.length; a < b; a++) this.X[a].La()
    };
    l.prototype.ak = function () {
        var a, b;
        a = 0;
        for (b = this.X.length; a < b; a++) this.P[a] = this.X[a].get();
        return this.Ra.apply(this.b.gd, this.P)
    };
    l.prototype.$j = function () {
        var a = this.type.ua().$c(),
            b, d, e, c, k;
        b = 0;
        for (e = a.length; b < e; b++) {
            k = a[b];
            d = 0;
            for (c = this.X.length; d < c; d++) this.P[d] = this.X[d].get(b); - 1 < this.mb ? (d = 0, this.type.U && (d = k.type.Ue[this.type.Zc]), this.Ra.apply(k.R[this.mb + d], this.P)) : this.Ra.apply(k, this.P)
        }
        return !1
    };
    Kb = l;
    var B = [],
        A = -1;
    e.prototype.La = function () {
        var a, b;
        if (11 === this.type) this.se = this.b.Fl(this.Bg, this.jc.parent);
        else if (13 === this.type) for (a = 0, b = this.rf.length; a < b; a++) this.rf[a].La();
        this.Yc && this.Yc.La()
    };
    e.prototype.$a = function () {
        A++;
        B.length === A && B.push(new Pb);
        return B[A]
    };
    e.prototype.Sa = function () {
        A--

    };
    e.prototype.pp = function (a) {
        this.$d = a || 0;
        a = this.$a();
        this.Yc.get(a);
        this.Sa();
        return a.data
    };
    e.prototype.qp = function (a) {
        this.$d = a || 0;
        a = this.$a();
        this.Yc.get(a);
        this.Sa();
        return z(a.data) ? a.data : ""
    };
    e.prototype.wp = s("object");
    e.prototype.np = s("pl");
    e.prototype.up = function (a) {
        this.$d = a || 0;
        a = this.$a();
        this.Yc.get(a);
        this.Sa();
        return a.fb() ? this.b.If(a.data) : this.b.cj(a.data)
    };
    e.prototype.vp = s("xa");
    e.prototype.tp = s("key");
    e.prototype.sp = s("index");
    e.prototype.rp = function (a) {
        var b = this.J.type,
            d = null,
            d = b.ua(),
            e = d.$c(),
            d = e.length ? e[a % e.length].type : d.na[a % d.na.length].type;
        return this.index + d.Wg[b.Zc]
    };
    e.prototype.op = s("se");
    e.prototype.mp = s("yl");
    e.prototype.xp = function () {
        var a, b;
        a = 0;
        for (b = this.rf.length; a < b; a++) this.ei[a] = this.rf[a].get();
        return this.ei
    };
    Lb = e;
    w.prototype.La = function () {
        this.Aa = b(this.Aa)
    };
    w.prototype.Bd = function (a) {
        var b = this.b.El();
        this.parent && !this.Uf && b ? (this.Be >= b.length && (b.length = this.Be + 1), b[this.Be] = a) : this.data = a
    };
    w.prototype.ve = function () {
        var a = this.b.El();
        return !this.parent || this.Uf || !a || this.jh ? this.data : this.Be >= a.length || "undefined" === typeof a[this.Be] ? this.jj : a[this.Be]
    };
    w.prototype.Ta = function () {
        !this.parent || this.Uf || this.jh || this.Bd(this.jj)
    };
    Fb = w;
    a.prototype.toString = function () {
        return "include:" + this.Nf.toString()
    };
    a.prototype.La = function () {
        this.Nf = this.b.Ti[this.Cp];
        this.sheet.Pl.add(this);
        this.Aa = b(this.Aa)
    };
    a.prototype.Ta = function () {
        this.parent && this.b.pg(this.b.B);
        this.Nf.fj || this.Nf.Ta(!0);
        this.parent && this.b.Ee(this.b.B)
    };
    a.prototype.Ep = function () {
        for (var a = this.parent; a;) {
            if (a.group && !this.b.Gg[a.Lf.toLowerCase()]) return !1;
            a = a.parent
        }
        return !0
    };
    Ob = a;
    k.prototype.reset = function (a) {
        this.Gb = a;
        this.Cb = this.Va = 0;
        this.Ym.length = 0;
        this.Ri =
        this.Ae = !1
    };
    Eb = k
})();
(function () {
    function h(b, f) {
        this.J = b;
        this.b = b.b;
        this.type = f[0];
        this.get = [this.Ko, this.Go, this.So, this.Vo, this.Ao, this.To, this.Oo, this.Do, this.No, this.Ro, this.Bo, this.Qo, this.Eo, this.Po, this.Lo, this.Mo, this.Ho, this.Io, this.Co, this.Uo, this.tl, this.Jo, this.tl, this.Fo][this.type];
        var c = null;
        this.Xb = this.X = this.P = this.Ra = this.Yh = this.jb = this.first = this.value = null;
        this.mb = -1;
        this.pd = null;
        this.ok = -1;
        this.se = this.Bg = null;
        this.rg = !1;
        switch (this.type) {
        case 0:
        case 1:
        case 2:
            this.value = f[1];
            break;
        case 3:
            this.first =
            new Mb(b, f[1]);
            break;
        case 18:
            this.first = new Mb(b, f[1]);
            this.jb = new Mb(b, f[2]);
            this.Yh = new Mb(b, f[3]);
            break;
        case 19:
            this.Ra = f[1];
            this.P = [];
            this.X = [];
            3 === f.length ? (c = f[2], this.P.length = c.length + 1) : this.P.length = 1;
            break;
        case 20:
            this.Xb = this.b.B[f[1]];
            this.mb = -1;
            this.Ra = f[2];
            this.rg = f[3];
            this.pd = f[4] ? new Mb(b, f[4]) : null;
            this.P = [];
            this.X = [];
            6 === f.length ? (c = f[5], this.P.length = c.length + 1) : this.P.length = 1;
            break;
        case 21:
            this.Xb = this.b.B[f[1]];
            this.rg = f[2];
            this.pd = f[3] ? new Mb(b, f[3]) : null;
            this.ok = f[4];
            break;
        case 22:
            this.Xb = this.b.B[f[1]];
            this.Xb.ah(f[2]);
            this.mb = this.Xb.Zi(f[2]);
            this.Ra = f[3];
            this.rg = f[4];
            this.pd = f[5] ? new Mb(b, f[5]) : null;
            this.P = [];
            this.X = [];
            7 === f.length ? (c = f[6], this.P.length = c.length + 1) : this.P.length = 1;
            break;
        case 23:
            this.Bg = f[1], this.se = null
        }
        4 <= this.type && 17 >= this.type && (this.first = new Mb(b, f[1]), this.jb = new Mb(b, f[2]));
        if (c) {
            var h, m;
            h = 0;
            for (m = c.length; h < m; h++) this.X.push(new Mb(b, c[h]))
        }
    }
    function r(b, f) {
        this.type = b || E.Ne;
        this.data = f || 0;
        this.gf = null;
        this.type == E.Ne && (this.data = Math.floor(this.data))
    }
    h.prototype.La = function () {
        23 === this.type && (this.se = this.J.b.Fl(this.Bg, this.J.jc.parent));
        this.first && this.first.La();
        this.jb && this.jb.La();
        this.Yh && this.Yh.La();
        this.pd && this.pd.La();
        if (this.X) {
            var b, f;
            b = 0;
            for (f = this.X.length; b < f; b++) this.X[b].La()
        }
    };
    h.prototype.Uo = function (b) {
        this.P[0] = b;
        b = this.J.$a();
        var f, c;
        f = 0;
        for (c = this.X.length; f < c; f++) this.X[f].get(b), this.P[f + 1] = b.data;
        this.J.Sa();
        this.Ra.apply(this.b.gd, this.P)
    };
    h.prototype.tl = function (b) {
        var f = this.Xb.ua(),
            c = f.$c();
        if (!c.length) if (f.na.length) c = f.na;
        else {
            this.rg ? b.H("") : b.C(0);
            return
        }
        this.P[0] = b;
        b.gf = this.Xb;
        b = this.J.$a();
        var h, f = 0;
        for (h = this.X.length; f < h; f++) this.X[f].get(b), this.P[f + 1] = b.data;
        f = this.J.$d;
        this.pd && (this.pd.get(b), b.fb() && (f = b.data, c = this.Xb.g));
        this.J.Sa();
        f %= c.length;
        0 > f && (f += c.length);
        c = c[f]; - 1 < this.mb ? (b = 0, this.Xb.U && (b = c.type.Ue[this.Xb.Zc]), this.Ra.apply(c.R[this.mb + b], this.P)) : this.Ra.apply(c, this.P)
    };
    h.prototype.Jo = function (b) {
        var f = this.Xb.ua(),
            c = f.$c();
        if (!c.length) if (f.na.length) c = f.na;
        else {
            this.rg ? b.H("") : b.C(0);
            return
        }
        f = this.J.$d;
        if (this.pd) {
            var h = this.J.$a();
            this.pd.get(h);
            if (h.fb()) {
                f = h.data;
                c = this.Xb.g;
                f %= c.length;
                0 > f && (f += c.length);
                c = c[f].Xa[this.ok];
                z(c) ? b.H(c) : b.O(c);
                this.J.Sa();
                return
            }
            this.J.Sa()
        }
        f %= c.length;
        0 > f && (f += c.length);
        c = c[f];
        f = 0;
        this.Xb.U && (f = c.type.Wg[this.Xb.Zc]);
        c = c.Xa[this.ok + f];
        z(c) ? b.H(c) : b.O(c)
    };
    h.prototype.Ko = function (b) {
        b.type = E.Ne;
        b.data = this.value
    };
    h.prototype.Go = function (b) {
        b.type = E.Me;
        b.data = this.value
    };
    h.prototype.So = function (b) {
        b.type = E.Fg;
        b.data = this.value
    };
    h.prototype.Vo =

    function (b) {
        this.first.get(b);
        b.fb() && (b.data = -b.data)
    };
    h.prototype.Ao = function (b) {
        this.first.get(b);
        var f = this.J.$a();
        this.jb.get(f);
        b.fb() && f.fb() && (b.data += f.data, f.$e() && b.ff());
        this.J.Sa()
    };
    h.prototype.To = function (b) {
        this.first.get(b);
        var f = this.J.$a();
        this.jb.get(f);
        b.fb() && f.fb() && (b.data -= f.data, f.$e() && b.ff());
        this.J.Sa()
    };
    h.prototype.Oo = function (b) {
        this.first.get(b);
        var f = this.J.$a();
        this.jb.get(f);
        b.fb() && f.fb() && (b.data *= f.data, f.$e() && b.ff());
        this.J.Sa()
    };
    h.prototype.Do = function (b) {
        this.first.get(b);
        var f = this.J.$a();
        this.jb.get(f);
        b.fb() && f.fb() && (b.data /= f.data, b.ff());
        this.J.Sa()
    };
    h.prototype.No = function (b) {
        this.first.get(b);
        var f = this.J.$a();
        this.jb.get(f);
        b.fb() && f.fb() && (b.data %= f.data, f.$e() && b.ff());
        this.J.Sa()
    };
    h.prototype.Ro = function (b) {
        this.first.get(b);
        var f = this.J.$a();
        this.jb.get(f);
        b.fb() && f.fb() && (b.data = Math.pow(b.data, f.data), f.$e() && b.ff());
        this.J.Sa()
    };
    h.prototype.Bo = function (b) {
        this.first.get(b);
        var f = this.J.$a();
        this.jb.get(f);
        b.fb() ? f.lh() ? b.H(b.data.toString() + f.data) : b.data && f.data ? b.C(1) : b.C(0) : b.lh() && (b.data = f.lh() ? b.data + f.data : b.data + (Math.round(1E10 * f.data) / 1E10).toString());
        this.J.Sa()
    };
    h.prototype.Qo = function (b) {
        this.first.get(b);
        var f = this.J.$a();
        this.jb.get(f);
        b.fb() && f.fb() && (b.data || f.data ? b.C(1) : b.C(0));
        this.J.Sa()
    };
    h.prototype.Co = function (b) {
        this.first.get(b);
        b.data ? this.jb.get(b) : this.Yh.get(b)
    };
    h.prototype.Eo = function (b) {
        this.first.get(b);
        var f = this.J.$a();
        this.jb.get(f);
        b.C(b.data === f.data ? 1 : 0);
        this.J.Sa()
    };
    h.prototype.Po = function (b) {
        this.first.get(b);
        var f = this.J.$a();
        this.jb.get(f);
        b.C(b.data !== f.data ? 1 : 0);
        this.J.Sa()
    };
    h.prototype.Lo = function (b) {
        this.first.get(b);
        var f = this.J.$a();
        this.jb.get(f);
        b.C(b.data < f.data ? 1 : 0);
        this.J.Sa()
    };
    h.prototype.Mo = function (b) {
        this.first.get(b);
        var f = this.J.$a();
        this.jb.get(f);
        b.C(b.data <= f.data ? 1 : 0);
        this.J.Sa()
    };
    h.prototype.Ho = function (b) {
        this.first.get(b);
        var f = this.J.$a();
        this.jb.get(f);
        b.C(b.data > f.data ? 1 : 0);
        this.J.Sa()
    };
    h.prototype.Io = function (b) {
        this.first.get(b);
        var f = this.J.$a();
        this.jb.get(f);
        b.C(b.data >= f.data ? 1 : 0);
        this.J.Sa()
    };
    h.prototype.Fo = function (b) {
        var f = this.se.ve();
        fa(f) ? b.O(f) : b.H(f)
    };
    Mb = h;
    r.prototype.$e = function () {
        return this.type === E.Me
    };
    r.prototype.fb = function () {
        return this.type === E.Ne || this.type === E.Me
    };
    r.prototype.lh = function () {
        return this.type === E.Fg
    };
    r.prototype.ff = function () {
        this.$e() || (this.lh() && (this.data = parseFloat(this.data)), this.type = E.Me)
    };
    r.prototype.C = function (b) {
        this.type = E.Ne;
        this.data = Math.floor(b)
    };
    r.prototype.O = function (b) {
        this.type = E.Me;
        this.data = b
    };
    r.prototype.H =

    function (b) {
        this.type = E.Fg;
        this.data = b
    };
    r.prototype.vq = function (b) {
        fa(b) ? (this.type = E.Me, this.data = b) : z(b) ? (this.type = E.Fg, this.data = b.toString()) : (this.type = E.Ne, this.data = 0)
    };
    Pb = r;
    E = {
        Ne: 0,
        Me: 1,
        Fg: 2
    }
})();

function G(h) {
    this.b = h;
    this.Lb = []
}
G.prototype.Zb = function () {
    var h = {},
        r, b, f, c, t, m, g, l;
    h.waits = [];
    var e = h.waits,
        w;
    r = 0;
    for (b = this.Lb.length; r < b; r++) {
        m = this.Lb[r];
        w = {
            t: m.time,
            ev: m.Se.Y,
            sm: [],
            sols: {}
        };
        m.Se.yc[m.Cb] && (w.act = m.Se.yc[m.Cb].Y);
        f = 0;
        for (c = m.Aa.length; f < c; f++) w.sm.push(m.Aa[f].Y);
        for (t in m.Bb) if (m.Bb.hasOwnProperty(t)) {
            g = this.b.B[parseInt(t, 10)];
            l = {
                sa: m.Bb[t].Rh,
                insts: []
            };
            f = 0;
            for (c = m.Bb[t].qd.length; f < c; f++) l.insts.push(m.Bb[t].qd[f].uid);
            w.sols[g.Y.toString()] = l
        }
        e.push(w)
    }
    return h
};
G.prototype.Gc = function (h) {
    h = h.waits;
    var r, b, f, c, t, m, g, l, e, w, a;
    r = this.Lb.length = 0;
    for (b = h.length; r < b; r++) if (m = h[r], l = this.b.Wk[m.ev.toString()]) {
        e = -1;
        f = 0;
        for (c = l.yc.length; f < c; f++) if (l.yc[f].Y === m.act) {
            e = f;
            break
        }
        if (-1 !== e) {
            g = {
                Bb: {},
                Aa: [],
                Oi: !1
            };
            g.time = m.t;
            g.Se = l;
            g.Cb = e;
            f = 0;
            for (c = m.sm.length; f < c; f++)(l = this.b.eh(m.sm[f])) && g.Aa.push(l);
            for (t in m.sols) if (m.sols.hasOwnProperty(t) && (l = this.b.eh(parseInt(t, 10)))) {
                e = m.sols[t];
                w = {
                    Rh: e.sa,
                    qd: []
                };
                f = 0;
                for (c = e.insts.length; f < c; f++)(a = this.b.dh(e.insts[f])) && w.qd.push(a);
                g.Bb[l.index.toString()] = w
            }
            this.Lb.push(g)
        }
    }
};
(function () {
    function h() {}
    function r() {}
    function b() {}
    var f = G.prototype;
    h.prototype.li = v(!0);
    h.prototype.Oe = v(!0);
    h.prototype.Fn = v(!0);
    h.prototype.Na = function (b, c, l) {
        return Qb(b, c, l)
    };
    h.prototype.tn = function (b) {
        var c = this.b.Dl(),
            l = c.ba.mi || 0,
            e = this.b.tc.Ma;
        "undefined" === typeof c.ba.ni && (c.ba.ni = b);
        var f = c.ba.ni;
        return e >= l + f ? (c.ba.mi = l + f, e >= c.ba.mi + f && (c.ba.mi = e), c.ba.ni = b, !0) : !1
    };
    h.prototype.ji = function (b, c, l) {
        return Qb(b.ve(), c, l)
    };
    h.prototype.gc = function () {
        var b = this.b.nb();
        return b.Ri ? !1 : !b.Ae
    };
    h.prototype.yk = v(!0);
    h.prototype.Bn = v(!0);
    h.prototype.si = v(!0);
    h.prototype.Gn = v(!0);
    h.prototype.ri = v(!0);
    f.e = new h;
    r.prototype.hc = function (b) {
        this.b.Vf || this.b.zf || (this.b.zf = b)
    };
    r.prototype.je = function (b, c) {
        0 === b.Cg ? fa(c) ? b.Bd(c) : b.Bd(parseFloat(c)) : 1 === b.Cg && b.Bd(c.toString())
    };
    r.prototype.A = function (b, c) {
        0 === b.Cg ? fa(c) ? b.Bd(b.ve() + c) : b.Bd(b.ve() + parseFloat(c)) : 1 === b.Cg && b.Bd(b.ve() + c.toString())
    };
    r.prototype.ma = function (b, c) {
        0 === b.Cg && (fa(c) ? b.Bd(b.ve() - c) : b.Bd(b.ve() - parseFloat(c)))
    };
    var c = [],
        t = [];
    r.prototype.wf = function (b) {
        if (!(0 > b)) {
            var g, l, e, f = this.b.nb(),
                a;
            a = c.length ? c.pop() : {
                Bb: {},
                Aa: []
            };
            a.Oi = !1;
            a.time = this.b.tc.Ma + b;
            a.Se = f.Gb;
            a.Cb = f.Cb + 1;
            b = 0;
            for (g = this.b.B.length; b < g; b++) e = this.b.B[b], l = e.ua(), l.za && -1 === f.Gb.Aa.indexOf(e) || (a.Aa.push(e), e = void 0, e = t.length ? t.pop() : {
                qd: []
            }, e.Rh = !1, e.Rh = l.za, wa(e.qd, l.g), a.Bb[b.toString()] = e);
            this.Lb.push(a);
            return !0
        }
    };
    f.d = new r;
    b.prototype["int"] = function (b, c) {
        z(c) ? (b.C(parseInt(c, 10)), isNaN(b.data) && (b.data = 0)) : b.C(c)
    };
    b.prototype["float"] = function (b, c) {
        z(c) ? (b.O(parseFloat(c)), isNaN(b.data) && (b.data = 0)) : b.O(c)
    };
    b.prototype.random = function (b, c, l) {
        void 0 === l ? b.O(Math.random() * c) : b.O(Math.random() * (l - c) + c)
    };
    b.prototype.sqrt = function (b, c) {
        b.O(Math.sqrt(c))
    };
    b.prototype.round = function (b, c) {
        b.C(Math.round(c))
    };
    b.prototype.floor = function (b, c) {
        b.C(Math.floor(c))
    };
    b.prototype.ceil = function (b, c) {
        b.C(Math.ceil(c))
    };
    b.prototype.sin = function (b, c) {
        b.O(Math.sin(D(c)))
    };
    b.prototype.cos = function (b, c) {
        b.O(Math.cos(D(c)))
    };
    b.prototype.acos = function (b, c) {
        b.O(ya(Math.acos(c)))
    };
    b.prototype.exp = function (b, c) {
        b.O(Math.exp(c))
    };
    b.prototype.max = function (b) {
        var c = arguments[1],
            l, e;
        l = 2;
        for (e = arguments.length; l < e; l++) c < arguments[l] && (c = arguments[l]);
        b.O(c)
    };
    b.prototype.min = function (b) {
        var c = arguments[1],
            l, e;
        l = 2;
        for (e = arguments.length; l < e; l++) c > arguments[l] && (c = arguments[l]);
        b.O(c)
    };
    b.prototype.Pb = function (b) {
        b.O(this.b.Pb)
    };
    b.prototype.sf = function (b) {
        b.O(this.b.sf)
    };
    b.prototype.time = function (b) {
        b.O(this.b.tc.Ma)
    };
    b.prototype.Cd = function (b) {
        b.C(this.b.Cd)
    };
    b.prototype.Bh = function (b) {
        b.C(this.b.Bh)
    };
    b.prototype.Vi = function (b) {
        b.C(this.b.Vi)
    };
    b.prototype.m = function (b, c, l, e, f) {
        b.O(ya(Ja(c, l, e, f)))
    };
    b.prototype.cd = function (b, c) {
        b.H(z(c) ? c.toLowerCase() : "")
    };
    b.prototype.find = function (b, c, l) {
        z(c) && z(l) ? b.C(c.search(RegExp(Va(l), "i"))) : b.C(-1)
    };
    b.prototype.left = function (b, c, l) {
        b.H(z(c) ? c.substr(0, l) : "")
    };
    b.prototype.right = function (b, c, l) {
        b.H(z(c) ? c.substr(c.length - l) : "")
    };
    b.prototype.dd = function (b, c, l, e) {
        b.H(z(c) ? c.substr(l, e) : "")
    };
    b.prototype.replace = function (b, c, l, e) {
        z(c) && z(l) && z(e) ? b.H(c.replace(RegExp(Va(l), "gi"), e)) : b.H(z(c) ? c : "")
    };
    b.prototype.Ji = function (b) {
        b.O(this.b.Ji / 1E3)
    };
    b.prototype.ef = function (b) {
        b.O(this.b.ef)
    };
    f.j = new b;
    f.kq = function () {
        var b, g, l, e, f, a, k = this.b.nb();
        b = 0;
        for (l = this.Lb.length; b < l; b++) if (e = this.Lb[b], !(e.time > this.b.tc.Ma)) {
            k.Gb = e.Se;
            k.Cb = e.Cb;
            k.Va = 0;
            for (g in e.Bb) e.Bb.hasOwnProperty(g) && (f = this.b.B[parseInt(g, 10)].ua(), a = e.Bb[g], f.za = a.Rh, wa(f.g, a.qd), f = a, f.qd.length = 0, t.push(f));
            e.Se.iq();
            this.b.Ii(e.Aa);
            e.Oi = !0
        }
        g = b = 0;
        for (l = this.Lb.length; b < l; b++) e = this.Lb[b], this.Lb[g] = e, e.Oi ? (Sa(e.Bb), e.Aa.length = 0, c.push(e)) : g++;
        this.Lb.length = g
    }
})();
(function () {
    bb = function (h) {
        var b = h[0].prototype,
            f = h[1],
            c = h[3],
            t = h[4],
            m = h[5],
            g = h[6],
            l = h[7];
        h = h[8];
        b.e || (b.e = {});
        b.d || (b.d = {});
        b.j || (b.j = {});
        var e = b.e,
            w = b.d,
            b = b.j;
        c && (e.rn = function (a, b) {
            return Qb(this.x, a, b)
        }, e.Zq = function (a, b) {
            return Qb(this.y, a, b)
        }, e.xn = function () {
            var a = this.k;
            this.Kb();
            var b = this.Db;
            return !(b.right < a.ac || b.bottom < a.ec || b.left > a.cc || b.top > a.$b)
        }, e.Br = function () {
            this.Kb();
            var a = this.Db,
                b = this.b.ra;
            return 0 > a.right || 0 > a.bottom || a.left > b.width || a.top > b.height
        }, e.Wr = function (a, b, d) {
            var c =
            this.ua(),
                e = c.$c();
            if (!e.length) return !1;
            var l = e[0],
                g = l,
                f = Oa(l.x, l.y, b, d),
                h, m, w;
            h = 1;
            for (m = e.length; h < m; h++) if (l = e[h], w = Oa(l.x, l.y, b, d), 0 === a && w < f || 1 === a && w > f) f = w, g = l;
            c.mg(g);
            return !0
        }, w.Rn = function (a) {
            this.x !== a && (this.x = a, this.ab())
        }, w.ws = function (a) {
            this.y !== a && (this.y = a, this.ab())
        }, w.rs = function (a, b) {
            if (this.x !== a || this.y !== b) this.x = a, this.y = b, this.ab()
        }, w.ss = function (a, b) {
            var d = a.lp(this);
            if (d) {
                var c;
                d.Hf ? (c = d.Hf(b, !0), d = d.Hf(b, !1)) : (c = d.x, d = d.y);
                if (this.x !== c || this.y !== d) this.x = c, this.y = d, this.ab()
            }
        }, w.Nr = function (a) {
            0 !== a && (this.x += Math.cos(this.m) * a, this.y += Math.sin(this.m) * a, this.ab())
        }, w.Mr = function (a, b) {
            0 !== b && (this.x += Math.cos(D(a)) * b, this.y += Math.sin(D(a)) * b, this.ab())
        }, b.Wn = function (a) {
            a.O(this.x)
        }, b.Xn = function (a) {
            a.O(this.y)
        }, b.Pb = function (a) {
            a.O(this.b.$i(this))
        });
        t && (e.Yq = function (a, b) {
            return Qb(this.width, a, b)
        }, e.Wq = function (a, b) {
            return Qb(this.height, a, b)
        }, w.Qn = function (a) {
            this.width !== a && (this.width = a, this.ab())
        }, w.qs = function (a) {
            this.height !== a && (this.height = a, this.ab())
        }, w.Pn =

        function (a, b) {
            if (this.width !== a || this.height !== b) this.width = a, this.height = b, this.ab()
        }, b.Tn = function (a) {
            a.O(this.width)
        }, b.wn = function (a) {
            a.O(this.height)
        }, b.Sq = function (a) {
            this.Kb();
            a.O(this.Db.left)
        }, b.Uq = function (a) {
            this.Kb();
            a.O(this.Db.top)
        }, b.Tq = function (a) {
            this.Kb();
            a.O(this.Db.right)
        }, b.Rq = function (a) {
            this.Kb();
            a.O(this.Db.bottom)
        });
        m && (e.Nq = function (a, b) {
            return Ka(this.m, D(b)) <= D(a)
        }, e.yr = function (a) {
            return Ma(this.m, D(a))
        }, e.xr = function (a, b) {
            var d = Fa(a),
                c = Fa(b),
                e = Da(this.m);
            return Ma(c, d) ? Ma(e, d) && !Ma(e, c) : !(!Ma(e, d) && Ma(e, c))
        }, w.ms = function (a) {
            a = D(Ca(a));
            isNaN(a) || this.m === a || (this.m = a, this.ab())
        }, w.gs = function (a) {
            0 === a || isNaN(a) || (this.m += D(a), this.m = Da(this.m), this.ab())
        }, w.hs = function (a) {
            0 === a || isNaN(a) || (this.m -= D(a), this.m = Da(this.m), this.ab())
        }, w.js = function (a, b) {
            var d = La(this.m, D(b), D(a));
            isNaN(d) || this.m === d || (this.m = d, this.ab())
        }, w.ks = function (a, b, d) {
            a = La(this.m, Math.atan2(d - this.y, b - this.x), D(a));
            isNaN(a) || this.m === a || (this.m = a, this.ab())
        }, w.us = function (a, b) {
            var d = Math.atan2(b - this.y, a - this.x);
            isNaN(d) || this.m === d || (this.m = d, this.ab())
        }, b.Mq = function (a) {
            a.O(Ea(this.m))
        });
        f || (e.bb = function (a, b, d) {
            return Qb(this.Xa[a], b, d)
        }, e.uk = function (a) {
            return this.Xa[a]
        }, e.Xr = function (a, b) {
            var d = this.ua(),
                c = d.$c();
            if (!c.length) return !1;
            var e = c[0],
                l = e,
                g = e.Xa[b],
                f, h, m;
            f = 1;
            for (h = c.length; f < h; f++) if (e = c[f], m = e.Xa[b], 0 === a && m < g || 1 === a && m > g) g = m, l = e;
            d.mg(l);
            return !0
        }, e.Vr = function (a) {
            var b, d, c, e, l;
            if (this.b.Dl().Pf) {
                l = this.ua();
                if (l.za) for (l.za = !1, l.g.length = 0, l.na.length = 0, c = this.g, b = 0, d =
                c.length; b < d; b++) e = c[b], e.uid === a ? l.na.push(e) : l.g.push(e);
                else {
                    c = b = 0;
                    for (d = l.g.length; b < d; b++) e = l.g[b], l.g[c] = e, e.uid === a ? l.na.push(e) : c++;
                    l.g.length = c
                }
                this.Kd();
                return !!l.g.length
            }
            e = this.b.dh(a);
            if (!e) return !1;
            l = this.ua();
            if (!l.za && -1 === l.g.indexOf(e)) return !1;
            if (this.U) for (a = e.type.Ca, b = 0, d = a.length; b < d; b++) {
                if (a[b] === this) return l.mg(e), this.Kd(), !0
            } else if (e.type === this) return l.mg(e), this.Kd(), !0;
            return !1
        }, e.pi = v(!0), e.Dn = v(!0), w.Ua = function (a, b) {
            var d = this.Xa;
            fa(d[a]) ? d[a] = fa(b) ? b : parseFloat(b) : z(d[a]) && (d[a] = z(b) ? b : b.toString())
        }, w.gi = function (a, b) {
            var d = this.Xa;
            fa(d[a]) ? d[a] = fa(b) ? d[a] + b : d[a] + parseFloat(b) : z(d[a]) && (d[a] = z(b) ? d[a] + b : d[a] + b.toString())
        }, w.u = function (a, b) {
            var d = this.Xa;
            fa(d[a]) && (d[a] = fa(b) ? d[a] - b : d[a] - parseFloat(b))
        }, w.ga = function (a, b) {
            this.Xa[a] = b ? 1 : 0
        }, w.xs = function (a) {
            this.Xa[a] = 1 - this.Xa[a]
        }, w.ki = function () {
            this.b.ie(this)
        }, w.zn || (w.zn = function (a) {
            var b, d;
            try {
                b = JSON.parse(a)
            } catch (c) {
                return
            }
            this.b.xh(this, b, !0);
            this.Jd && this.Jd();
            if (this.R) for (a = 0, b = this.R.length; a < b; ++a) d = this.R[a], d.Jd && d.Jd()
        }), b.br = function (a) {
            var b = a.gf.g.length,
                d, c, e;
            d = 0;
            for (c = this.b.Ob.length; d < c; d++) e = this.b.Ob[d], a.gf.U ? 0 <= e.type.Ca.indexOf(a.gf) && b++ : e.type === a.gf && b++;
            a.C(b)
        }, b.Zr = function (a) {
            a.C(a.gf.ua().$c().length)
        }, b.ys = function (a) {
            a.C(this.uid)
        }, b.ur = function (a) {
            a.C(this.Kf())
        }, b.ii || (b.ii = function (a) {
            a.H(JSON.stringify(this.b.bk(this, !0)))
        }));
        g && (e.yn = s("visible"), w.Oa = function (a) {
            !a !== !this.visible && (this.visible = a, this.b.wa = !0)
        }, e.sk = function (a, b) {
            return Qb($a(100 * this.opacity), a, b)
        }, w.Eg = function (a) {
            a /= 100;
            0 > a ? a = 0 : 1 < a && (a = 1);
            a !== this.opacity && (this.opacity = a, this.b.wa = !0)
        }, b.Opacity = function (a) {
            a.O($a(100 * this.opacity))
        });
        l && (e.Ar = function (a) {
            return a ? this.k === a : !1
        }, e.Yr = function (a) {
            var b = this.ua(),
                d = b.$c();
            if (!d.length) return !1;
            var c = d[0],
                e = c,
                l, g;
            l = 1;
            for (g = d.length; l < g; l++) if (c = d[l], 0 === a) {
                if (c.k.index > e.k.index || c.k.index === e.k.index && c.rc() > e.rc()) e = c
            } else if (c.k.index < e.k.index || c.k.index === e.k.index && c.rc() < e.rc()) e = c;
            b.mg(e);
            return !0
        }, w.Qr = function () {
            var a = this.rc();
            a !== this.k.g.length - 1 && (ua(this.k.g, a), this.k.g.push(this), this.b.wa = !0, this.k.fc = !0)
        }, w.Or = function () {
            var a = this.rc();
            0 !== a && (ua(this.k.g, a), this.k.g.unshift(this), this.b.wa = !0, this.k.fc = !0)
        }, w.Pr = function (a) {
            a && a != this.k && (ua(this.k.g, this.rc()), this.k.fc = !0, this.k = a, this.Le = a.g.length, a.g.push(this), this.b.wa = !0)
        }, w.As = function (a, b) {
            var d = 0 === a;
            if (b) {
                var c = b.gp(this);
                if (c && c.uid !== this.uid) {
                    this.k.index !== c.k.index && (ua(this.k.g, this.rc()), this.k.fc = !0, this.k = c.k, this.Le = c.k.g.length, c.k.g.push(this));
                    var e = this.rc(),
                        c = c.rc();
                    ua(this.k.g, e);
                    e < c && c--;
                    d && c++;
                    c === this.k.g.length ? this.k.g.push(this) : this.k.g.splice(c, 0, this);
                    this.k.fc = !0;
                    this.b.wa = !0
                }
            }
        }, b.Dr = function (a) {
            a.C(this.k.lm)
        }, b.Cr = function (a) {
            a.H(this.k.name)
        }, b.zs = function (a) {
            a.C(this.rc())
        });
        h && (w.ns = function (a, b) {
            if (this.b.ca) {
                var d = this.type.bj(b);
                if (!(0 > d)) {
                    var c = 1 === a;
                    this.Id[d] !== c && (this.Id[d] = c, this.Ed(), this.b.wa = !0)
                }
            }
        }, w.os = function (a, b, d) {
            if (this.b.ca) {
                var c = this.type.bj(a);
                0 > c || (a = this.type.N[c], c = this.Ja[c], b = Math.floor(b), 0 > b || b >= c.length || (1 === this.b.ca.gt(a.pb, b) && (d /= 100), c[b] !== d && (c[b] = d, a.ic && (this.b.wa = !0))))
            }
        })
    };
    yb = function () {
        this.wi = !0;
        this.type.Pk = !0;
        this.b.wa = !0;
        var h, b, f = this.xi;
        h = 0;
        for (b = f.length; h < b; ++h) f[h](this)
    };
    zb = function (h) {
        h && this.xi.push(h)
    };
    var h = new ra(0, 0, 0, 0);
    Bb = function () {
        if (this.wi) {
            var r = this.Db,
                b = this.ne;
            r.set(this.x, this.y, this.x + this.width, this.y + this.height);
            r.offset(-this.Sb * this.width, -this.Tb * this.height);
            this.m ? (r.offset(-this.x, -this.y), b.Sm(r, this.m), b.offset(this.x, this.y), b.Xk(r)) : b.Uh(r);
            r.normalize();
            this.wi = !1;
            if (this.Af) {
                var b = this.type.ol,
                    f = this.Kg;
                h.set(b.Gk(r.left), b.Hk(r.top), b.Gk(r.right), b.Hk(r.bottom));
                f.zo(h) || (f.right < f.left ? b.update(this, null, h) : b.update(this, f, h), f.copy(h))
            }
        }
    };
    Ab = function (h, b) {
        return this.Db.Wc(h, b) && this.ne.Wc(h, b) ? this.Vc && !this.Vc.Mp() ? (this.Vc.lo(this.width, this.height, this.m), this.Vc.Wc(h - this.x, b - this.y)) : !0 : !1
    };
    ub = function () {
        this.type.ci();
        return this.we
    };
    Cb = function () {
        this.k.Hq();
        return this.Le
    };
    Db = function () {
        this.fa.length = 0;
        var h, b;
        h = 0;
        for (b = this.Id.length; h < b; h++) this.Id[h] && this.fa.push(this.type.N[h]);
        this.pn = !! this.fa.length
    };
    vb = function () {
        return "Inst" + this.Km
    };
    eb = function (h) {
        if (h && h.sc && h.type != this) {
            var b, f, c;
            b = 0;
            for (f = h.siblings.length; b < f; b++) if (c = h.siblings[b], c.type == this) return c
        }
        h = this.ua().$c();
        return h.length ? h[0] : null
    };
    jb = function (h) {
        var b = this.ua().$c();
        return b.length ? b[h.Kf() % b.length] : null
    };
    db = function () {
        if (this.qf && !this.U) {
            var h, b;
            h = 0;
            for (b = this.g.length; h < b; h++) this.g[h].we = h;
            var f = h,
                c = this.b.Ob;
            h = 0;
            for (b =
            c.length; h < b; ++h) c[h].type === this && (c[h].we = f++);
            this.qf = !1
        }
    };
    sb = function (h) {
        if (h < this.g.length) return this.g[h];
        h -= this.g.length;
        var b = this.b.Ob,
            f, c;
        f = 0;
        for (c = b.length; f < c; ++f) if (b[f].type === this) {
            if (0 === h) return b[f];
            --h
        }
        return null
    };
    kb = function () {
        return this.ae[this.ld]
    };
    lb = function () {

        this.ld++;
        this.ld === this.ae.length ? this.ae.push(new cb(this)) : this.ae[this.ld].za = !0
    };
    mb = function () {
        this.ld++;

        this.ld === this.ae.length && this.ae.push(new cb(this));
        var h = this.ae[this.ld],
            b = this.ae[this.ld - 1];
        b.za ? h.za = !0 : (h.za = !1, wa(h.g, b.g), wa(h.na, b.na))
    };
    nb = function () {
        this.ld--

    };
    ob = function (h) {
        var b, f, c, t, m, g = 0;
        if (!this.U) for (b = 0, f = this.Ca.length; b < f; b++) for (m = this.Ca[b], c = 0, t = m.Pa.length; c < t; c++) {
            if (h === m.Pa[c].name) return this.ba.am = g, m.Pa[c];
            g++
        }
        b = 0;
        for (f = this.Pa.length; b < f; b++) {
            if (h === this.Pa[b].name) return this.ba.am = g, this.Pa[b];
            g++
        }
        return null
    };
    pb = function (h) {
        return this.ah(h) ? this.ba.am : -1
    };
    qb = function (h) {
        var b, f;
        b = 0;
        for (f = this.N.length; b < f; b++) if (this.N[b].name === h) return b;
        return -1
    };
    rb = function () {
        if (this.sc && !this.U) {
            var h, b, f, c, t, m, g;
            this.ci();
            m = this.ua();
            var l = m.za,
                e = (h = this.b.nb()) && h.Gb && h.Gb.Qc;
            h = 0;
            for (b = this.Fb.length; h < b; h++) if (t = this.Fb[h], t !== this && (t.ci(), g = t.ua(), g.za = l, !l)) {
                g.g.length = m.g.length;
                f = 0;
                for (c = m.g.length; f < c; f++) g.g[f] = t.Gl(m.g[f].we);
                if (e) for (g.na.length = m.na.length, f = 0, c = m.na.length; f < c; f++) g.na[f] = t.Gl(m.na[f].we)
            }
        }
    };
    tb = function () {
        return "Type" + this.Y
    };
    Qb = function (h, b, f) {
        if ("undefined" === typeof h || "undefined" === typeof f) return !1;
        switch (b) {
        case 0:
            return h === f;
        case 1:
            return h !== f;
        case 2:
            return h < f;
        case 3:
            return h <= f;
        case 4:
            return h > f;
        case 5:
            return h >= f;
        default:
            return !1
        }
    }
})();

function Q(h) {
    this.b = h
}(function () {
    function h() {
        return g.length ? g.pop() : []
    }
    function r(b) {
        var c, f;
        c = 0;
        for (f = b.length; c < f; c++) Array.isArray(b[c]) && r(b[c]);
        b.length = 0;
        g.push(b)
    }
    function b() {}
    function f() {}
    function c() {}
    var t = Q.prototype;
    t.Ha = function (b) {
        this.ya = b;
        this.b = b.b
    };
    t.Ha.prototype.ea = q();
    t.Ba = function (b) {
        this.type = b;
        this.b = b.b
    };
    var m = t.Ba.prototype,
        g = [];
    Array.isArray || (Array.isArray = function (b) {
        return "[object Array]" === Object.prototype.toString.call(b)
    });
    m.ea = function () {
        this.Hb = this.D[0];
        this.oc = this.D[1];
        this.Lc =
        this.D[2];
        this.vc || (this.jd = h());
        var b = this.jd;
        b.length = this.Hb;
        var c, g, a;
        for (c = 0; c < this.Hb; c++) for (b[c] || (b[c] = h()), b[c].length = this.oc, g = 0; g < this.oc; g++) for (b[c][g] || (b[c][g] = h()), b[c][g].length = this.Lc, a = 0; a < this.Lc; a++) b[c][g][a] = 0;
        this.Gf = this.md = this.Dc = 0
    };
    m.kf = function () {
        var b;
        for (b = 0; b < this.Hb; b++) r(this.jd[b]);
        this.jd.length = 0
    };
    m.Hg = function (b, c, g) {
        b = Math.floor(b);
        c = Math.floor(c);
        g = Math.floor(g);
        return isNaN(b) || 0 > b || b > this.Hb - 1 || isNaN(c) || 0 > c || c > this.oc - 1 || isNaN(g) || 0 > g || g > this.Lc - 1 ? 0 : this.jd[b][c][g]
    };
    m.set = function (b, c, g, a) {
        b = Math.floor(b);
        c = Math.floor(c);
        g = Math.floor(g);
        isNaN(b) || 0 > b || b > this.Hb - 1 || isNaN(c) || 0 > c || c > this.oc - 1 || isNaN(g) || 0 > g || g > this.Lc - 1 || (this.jd[b][c][g] = a)
    };
    m.cp = function () {
        return JSON.stringify({
            c2array: !0,
            size: [this.Hb, this.oc, this.Lc],
            data: this.jd
        })
    };
    m.Zb = function () {
        return {
            size: [this.Hb, this.oc, this.Lc],
            data: this.jd
        }
    };
    m.Gc = function (b) {
        var c = b.size;
        this.Hb = c[0];
        this.oc = c[1];
        this.Lc = c[2];
        this.jd = b.data
    };
    m.He = function (b, c, g) {
        0 > b && (b = 0);
        0 > c && (c = 0);
        0 > g && (g = 0);
        if (this.Hb !== b || this.oc !== c || this.Lc !== g) {
            this.Hb = b;
            this.oc = c;
            this.Lc = g;
            var a, k, d = this.jd;
            d.length = b;
            for (b = 0; b < this.Hb; b++) for (ea(d[b]) && (d[b] = h()), d[b].length = c, a = 0; a < this.oc; a++) for (ea(d[b][a]) && (d[b][a] = h()), d[b][a].length = g, k = 0; k < this.Lc; k++) ea(d[b][a][k]) && (d[b][a][k] = 0)
        }
    };
    b.prototype.rn = function (b, c, g) {
        return Qb(this.Hg(b, 0, 0), c, g)
    };
    b.prototype.q = function (b, c, g, a) {
        return Qb(this.Hg(b, c, 0), g, a)
    };
    m.Qi = function (b) {
        this.b.Mh(b.Aa);
        b.jq();
        this.b.Ee(b.Aa)
    };
    b.prototype.hi = function (b) {
        var c = this.b.nb().Gb;
        this.Gf = this.md = this.Dc =
        0;
        switch (b) {
        case 0:
            for (this.Dc = 0; this.Dc < this.Hb; this.Dc++) for (this.md = 0; this.md < this.oc; this.md++) for (this.Gf = 0; this.Gf < this.Lc; this.Gf++) this.Qi(c);
            break;
        case 1:
            for (this.Dc = 0; this.Dc < this.Hb; this.Dc++) for (this.md = 0; this.md < this.oc; this.md++) this.Qi(c);
            break;
        case 2:
            for (this.Dc = 0; this.Dc < this.Hb; this.Dc++) this.Qi(c)
        }
        this.Gf = this.md = this.Dc = 0;
        return !1
    };
    t.e = new b;
    f.prototype.Pn = function (b, c, g) {
        this.He(b, c, g)
    };
    f.prototype.Rn = function (b, c) {
        this.set(b, 0, 0, c)
    };
    f.prototype.xb = function (b, c, g) {
        this.set(b, c, 0, g)
    };
    t.d = new f;
    c.prototype.ja = function (b, c, g, a) {
        b.vq(this.Hg(c, g || 0, a || 0))
    };
    c.prototype.Tn = function (b) {
        b.C(this.Hb)
    };
    c.prototype.wn = function (b) {
        b.C(this.oc)
    };
    c.prototype.cb = function (b) {
        b.C(this.Dc)
    };
    c.prototype.Ga = function (b) {
        b.C(this.md)
    };
    c.prototype.ii = function (b) {
        b.H(this.cp())
    };
    t.j = new c
})();

function Ub(h) {
    this.b = h
}(function () {
    function h(a) {
        0 > a && (a = 0);
        1 < a && (a = 1);
        return 20 * (Math.log(a) / Math.log(10))
    }
    function r(a) {
        a = a.toLowerCase();
        return U.hasOwnProperty(a) && U[a].length ? U[a][0].qc() : F.destination
    }
    function b() {
        return F.createGain ? F.createGain() : F.createGainNode()
    }
    function f(a) {
        return F.createDelay ? F.createDelay(a) : F.createDelayNode(a)
    }
    function c(a) {
        a.start ? a.start(0) : a.noteOn(0)
    }
    function t(a, b, c) {
        a.start ? a.start(0, b) : a.noteGrainOn(0, b, c - b)
    }
    function m(a) {
        try {
            a.stop ? a.stop(0) : a.noteOff(0)
        } catch (b) {}
    }
    function g(a, c, d, e, g, k) {
        this.type = "filter";
        this.Rc = [a, c, d, e, g, k];
        this.$ = b();
        this.M = b();
        this.M.gain.value = k;
        this.L = b();
        this.L.gain.value = 1 - k;
        this.Qa = F.createBiquadFilter();
        this.Qa.type = "number" === typeof this.Qa.type ? a : cc[a];
        this.Qa.frequency.value = c;
        this.Qa.detune && (this.Qa.detune.value = d);
        this.Qa.Q.value = e;
        this.Qa.gain.value = g;
        this.$.connect(this.Qa);
        this.$.connect(this.L);
        this.Qa.connect(this.M)
    }
    function l(a, c, d) {
        this.type = "delay";
        this.Rc = [a, c, d];
        this.$ = b();
        this.M = b();
        this.M.gain.value = d;
        this.L = b();
        this.L.gain.value =
        1 - d;
        this.dg = b();
        this.Cc = f(a);
        this.Cc.delayTime.value = a;
        this.Rg = b();
        this.Rg.gain.value = c;
        this.$.connect(this.dg);
        this.$.connect(this.L);
        this.dg.connect(this.M);
        this.dg.connect(this.Cc);
        this.Cc.connect(this.Rg);
        this.Rg.connect(this.dg)
    }
    function e(a, c, d, e) {
        this.type = "convolve";
        this.Rc = [c, d, e];
        this.$ = b();
        this.M = b();
        this.M.gain.value = d;
        this.L = b();
        this.L.gain.value = 1 - d;
        this.pe = F.createConvolver();
        a && (this.pe.normalize = c, this.pe.buffer = a);
        this.$.connect(this.pe);
        this.$.connect(this.L);
        this.pe.connect(this.M)
    }

    function w(a, d, e, g, k) {
        this.type = "flanger";
        this.Rc = [a, d, e, g, k];
        this.$ = b();
        this.L = b();
        this.L.gain.value = 1 - k / 2;
        this.M = b();
        this.M.gain.value = k / 2;
        this.Xg = b();
        this.Xg.gain.value = g;
        this.Cc = f(a + d);
        this.Cc.delayTime.value = a;
        this.ib = F.createOscillator();
        this.ib.frequency.value = e;
        this.Yb = b();
        this.Yb.gain.value = d;
        this.$.connect(this.Cc);
        this.$.connect(this.L);
        this.Cc.connect(this.M);
        this.Cc.connect(this.Xg);
        this.Xg.connect(this.Cc);
        this.ib.connect(this.Yb);
        this.Yb.connect(this.Cc.delayTime);
        c(this.ib)
    }
    function a(a, d, e, g, k, f) {
        this.type = "phaser";
        this.Rc = [a, d, e, g, k, f];
        this.$ = b();
        this.L = b();
        this.L.gain.value = 1 - f / 2;
        this.M = b();
        this.M.gain.value = f / 2;
        this.Qa = F.createBiquadFilter();
        this.Qa.type = "number" === typeof this.Qa.type ? 7 : "allpass";
        this.Qa.frequency.value = a;
        this.Qa.detune && (this.Qa.detune.value = d);
        this.Qa.Q.value = e;
        this.ib = F.createOscillator();
        this.ib.frequency.value = k;
        this.Yb = b();
        this.Yb.gain.value = g;
        this.$.connect(this.Qa);
        this.$.connect(this.L);
        this.Qa.connect(this.M);
        this.ib.connect(this.Yb);
        this.Yb.connect(this.Qa.frequency);
        c(this.ib)
    }
    function k(a) {
        this.type = "gain";
        this.Rc = [a];
        this.da = b();
        this.da.gain.value = a
    }
    function d(a, d) {
        this.type = "tremolo";
        this.Rc = [a, d];
        this.da = b();
        this.da.gain.value = 1 - d / 2;
        this.ib = F.createOscillator();
        this.ib.frequency.value = a;
        this.Yb = b();
        this.Yb.gain.value = d / 2;
        this.ib.connect(this.Yb);
        this.Yb.connect(this.da.gain);
        c(this.ib)
    }
    function B(a, d) {
        this.type = "ringmod";
        this.Rc = [a, d];
        this.$ = b();
        this.M = b();
        this.M.gain.value = d;
        this.L = b();
        this.L.gain.value = 1 - d;
        this.sg = b();
        this.sg.gain.value = 0;
        this.ib = F.createOscillator();
        this.ib.frequency.value = a;
        this.ib.connect(this.sg.gain);
        c(this.ib);
        this.$.connect(this.sg);
        this.$.connect(this.L);
        this.sg.connect(this.M)
    }
    function A(a, c, d, e, g) {
        this.type = "distortion";
        this.Rc = [a, c, d, e, g];
        this.$ = b();
        this.Jh = b();
        this.Ih = b();
        this.sq(d, Math.pow(10, e / 20));
        this.M = b();
        this.M.gain.value = g;
        this.L = b();
        this.L.gain.value = 1 - g;
        this.fi = F.createWaveShaper();
        this.Pg = new Float32Array(65536);
        this.$o(a, c);
        this.fi.Pg = this.Pg;
        this.$.connect(this.Jh);
        this.$.connect(this.L);
        this.Jh.connect(this.fi);
        this.fi.connect(this.Ih);
        this.Ih.connect(this.M)
    }
    function n(a, b, c, d, e) {
        this.type = "compressor";
        this.Rc = [a, b, c, d, e];
        this.da = F.createDynamicsCompressor();
        this.da.threshold.value = a;
        this.da.knee.value = b;
        this.da.ratio.value = c;
        this.da.attack.value = d;
        this.da.release.value = e
    }
    function p(a, b) {
        this.type = "analyser";
        this.Rc = [a, b];
        this.da = F.createAnalyser();
        this.da.fftSize = a;
        this.da.smoothingTimeConstant = b;
        this.Yo = new Float32Array(this.da.frequencyBinCount);
        this.Um = new Uint8Array(a);
        this.lg = 0
    }
    function I() {
        this.V = null;
        this.yh = 0;
        this.be = [];
        this.Fj = this.oh = this.nh = 0
    }
    function M(a, c) {
        this.src = a;
        this.qa = O;
        this.Oc = c;
        this.Nk = !1;
        var d = this;
        this.Dj = this.Pj = null;
        this.lf = [];
        this.Sh = 0;
        this.Xm = this.Eh = !1;
        O === H && c && (this.qa = x, this.Pj = b());
        this.Ig = this.Da = null;
        var e;
        switch (this.qa) {
        case x:
            this.Da = new Audio;
            O === H && F.createMediaElementSource && !u.Ul && (this.Xm = !0, this.Da.addEventListener("canplay", function () {
                d.Dj || (d.Dj = F.createMediaElementSource(d.Da), d.Dj.connect(d.Pj))
            }));
            this.Da.autoplay = !1;
            this.Da.wt = "auto";
            this.Da.src = a;
            break;
        case H:
            e = new XMLHttpRequest;
            e.open("GET", a, !0);
            e.responseType = "arraybuffer";
            e.onload = function () {
                d.Ig = e.response;
                d.uo()
            };
            e.send();
            break;
        case K:
            this.Da = !0;
            break;
        case X:
            this.Da = !0
        }
    }
    function J(a, c) {
        var d = this;
        this.ee = c;
        this.Ic = this.Qd = !0;
        this.src = a.src;
        this.buffer = a;
        this.qa = O;
        this.Oc = a.Oc;
        this.playbackRate = 1;
        this.Rj = !0;
        this.rd = this.yd = !1;
        this.Sc = 0;
        this.Tf = this.bf = this.td = !1;
        this.fg = this.volume = 1;
        this.startTime = u.tc.Ma;
        this.Ka = this.eb = null;
        this.fd = !1;
        this.Za = null;
        this.zm = this.ym = this.xm = this.wm = this.Bm = this.Am = 0;
        this.n = null;
        var e = !1;
        this.qa !== H || this.buffer.qa !== x || this.buffer.Xm || (this.qa = x);
        switch (this.qa) {
        case x:
            this.Oc ? (this.n = a.Da, e = !a.Nk, a.Nk = !0) : (this.n = new Audio, this.n.autoplay = !1, this.n.src = a.Da.src, e = !0);
            e && this.n.addEventListener("ended", function () {
                C = d.ee;
                d.Ic = !0;
                u.trigger(Ub.prototype.e.qi, P)
            });
            break;
        case H:
            this.eb = b();
            this.eb.connect(r(c));
            this.buffer.qa === H ? a.Da && (this.n = F.createBufferSource(), this.n.buffer = a.Da, this.n.connect(this.eb)) : (this.n = this.buffer.Da, this.buffer.Pj.connect(this.eb));
            break;
        case K:
            this.n =
            new window.Media(N + this.src, null, null, function (a) {
                a === window.Media.MEDIA_STOPPED && (d.Rj = !0, d.Ic = !0, C = d.ee, u.trigger(Ub.prototype.e.qi, P))
            });
            break;
        case X:
            this.n = !0
        }
    }
    function R(a, b) {
        U.hasOwnProperty(a) ? U[a].push(b) : U[a] = [b];
        var c, d, e, g, k = F.destination;
        if (U.hasOwnProperty(a) && (e = U[a], e.length)) for (k = e[0].qc(), c = 0, d = e.length; c < d; c++) g = e[c], c + 1 === d ? g.zc(F.destination) : g.zc(e[c + 1].qc());
        za.length = 0;
        if (a.length) for (c = 0, d = T.length; c < d; c++) e = T[c], ab(a, e.ee) && za.push(e);
        else fb && !fb.Mf() && (za.length = 1, za[0] =
        fb);
        c = 0;
        for (d = za.length; c < d; c++) za[c].gq(k);
        va && gb === a && (va.disconnect(), va.connect(k))
    }
    function L() {}
    var y = Ub.prototype;
    y.Ha = function (a) {
        this.ya = a;
        this.b = a.b
    };
    y.Ha.prototype.ea = q();
    var u = null,
        P = null,
        C = "",
        N = "",
        x = 0,
        H = 1,
        K = 2,
        X = 3,
        O = x,
        F = null,
        ja = [],
        T = [],
        fb = null,
        Ra = 0,
        qa = !1,
        na = 1,
        Aa = 0,
        Ba = 0,
        hb = 1,
        ib = 1,
        Yb = 10,
        Zb = 1E4,
        $b = 1,
        va = null,
        gb = "",
        Ga = !1,
        Ha = [],
        U = {},
        cc = "lowpass highpass bandpass lowshelf highshelf peaking notch allpass".split(" ");
    g.prototype.zc = function (a) {
        this.M.disconnect();
        this.M.connect(a);
        this.L.disconnect();
        this.L.connect(a)
    };
    g.prototype.remove = function () {
        this.$.disconnect();
        this.Qa.disconnect();
        this.M.disconnect();
        this.L.disconnect()
    };
    g.prototype.qc = s("$");
    l.prototype.zc = function (a) {
        this.M.disconnect();
        this.M.connect(a);
        this.L.disconnect();
        this.L.connect(a)
    };
    l.prototype.remove = function () {
        this.$.disconnect();
        this.dg.disconnect();
        this.Cc.disconnect();
        this.Rg.disconnect();
        this.M.disconnect();
        this.L.disconnect()
    };
    l.prototype.qc = s("$");
    e.prototype.zc = function (a) {
        this.M.disconnect();
        this.M.connect(a);
        this.L.disconnect();
        this.L.connect(a)
    };
    e.prototype.remove = function () {
        this.$.disconnect();
        this.pe.disconnect();
        this.M.disconnect();
        this.L.disconnect()
    };
    e.prototype.qc = s("$");
    w.prototype.zc = function (a) {
        this.L.disconnect();
        this.L.connect(a);
        this.M.disconnect();
        this.M.connect(a)
    };
    w.prototype.remove = function () {
        this.$.disconnect();
        this.Cc.disconnect();
        this.ib.disconnect();
        this.Yb.disconnect();
        this.L.disconnect();
        this.M.disconnect();
        this.Xg.disconnect()
    };
    w.prototype.qc = s("$");
    a.prototype.zc = function (a) {
        this.L.disconnect();
        this.L.connect(a);
        this.M.disconnect();
        this.M.connect(a)
    };
    a.prototype.remove = function () {
        this.$.disconnect();
        this.Qa.disconnect();
        this.ib.disconnect();
        this.Yb.disconnect();
        this.L.disconnect();
        this.M.disconnect()
    };
    a.prototype.qc = s("$");
    k.prototype.zc = function (a) {
        this.da.disconnect();
        this.da.connect(a)
    };
    k.prototype.remove = function () {
        this.da.disconnect()
    };
    k.prototype.qc = s("da");
    d.prototype.zc = function (a) {
        this.da.disconnect();
        this.da.connect(a)
    };
    d.prototype.remove = function () {
        this.ib.disconnect();
        this.Yb.disconnect();
        this.da.disconnect()
    };
    d.prototype.qc = s("da");
    B.prototype.zc = function (a) {
        this.M.disconnect();
        this.M.connect(a);
        this.L.disconnect();
        this.L.connect(a)
    };
    B.prototype.remove = function () {
        this.ib.disconnect();
        this.sg.disconnect();
        this.$.disconnect();
        this.M.disconnect();
        this.L.disconnect()
    };
    B.prototype.qc = s("$");
    A.prototype.sq = function (a, b) {
        0.01 > a && (a = 0.01);
        this.Jh.gain.value = a;
        this.Ih.gain.value = Math.pow(1 / a, 0.6) * b
    };
    A.prototype.shape = function (a, b, c) {
        var d = 1.05 * c * b - b;
        c = 0 > a ? -1 : 1;
        a = 0 > a ? -a : a;
        b = a < b ? a : b + d * (1 - Math.exp(-(1 / d) * (a - b)));
        return b * c
    };
    A.prototype.$o = function (a, b) {
        for (var c = Math.pow(10, a / 20), d = Math.pow(10, b / 20), e = 0, g = 0; 32768 > g; ++g) e = g / 32768, e = this.shape(e, c, d), this.Pg[32768 + g] = e, this.Pg[32768 - g - 1] = -e
    };
    A.prototype.zc = function (a) {
        this.M.disconnect();
        this.M.connect(a);
        this.L.disconnect();
        this.L.connect(a)
    };
    A.prototype.remove = function () {
        this.$.disconnect();
        this.Jh.disconnect();
        this.fi.disconnect();
        this.Ih.disconnect();
        this.M.disconnect();
        this.L.disconnect()
    };
    A.prototype.qc = s("$");
    n.prototype.zc = function (a) {
        this.da.disconnect();
        this.da.connect(a)
    };
    n.prototype.remove = function () {
        this.da.disconnect()
    };
    n.prototype.qc = s("da");
    p.prototype.qb = function () {
        this.da.getFloatFrequencyData(this.Yo);
        this.da.getByteTimeDomainData(this.Um);
        for (var a = this.da.fftSize, b = 0, c = this.lg = 0, d = 0; b < a; b++) d = (this.Um[b] - 128) / 128, 0 > d && (d = -d), this.lg < d && (this.lg = d), c += d * d;
        this.lg = h(this.lg);
        h(Math.sqrt(c / a))
    };
    p.prototype.zc = function (a) {
        this.da.disconnect();
        this.da.connect(a)
    };
    p.prototype.remove = function () {
        this.da.disconnect()
    };
    p.prototype.qc = s("da");
    I.prototype.tg =

    function (a) {
        if (this.V = a) this.nh = this.V.x, this.oh = this.V.y;
        this.be.length = 0
    };
    I.prototype.hh = function () {
        return !!this.V
    };
    I.prototype.qb = function (a) {
        this.V && 0 !== a && (this.Fj = Ja(this.nh, this.oh, this.V.x, this.V.y), a = Oa(this.nh, this.oh, this.V.x, this.V.y) / a, 4 > this.be.length || this.be.shift(), this.be.push(a), this.nh = this.V.x, this.oh = this.V.y)
    };
    I.prototype.Kl = function () {
        if (!this.be.length) return 0;
        var a, b, c = 0;
        a = 0;
        for (b = this.be.length; a < b; a++) c += this.be[a];
        return c / this.be.length
    };
    I.prototype.Ll = function () {
        return Math.cos(this.Fj) * this.Kl()
    };
    I.prototype.Ml = function () {
        return Math.sin(this.Fj) * this.Kl()
    };
    var ac = !1;
    M.prototype.uo = function () {
        if (!this.Da && this.Ig) {
            var a = this;
            if (F.decodeAudioData) F.decodeAudioData(this.Ig, function (b) {
                a.Da = b;
                var c, d, e;
                if (ea(a.Fh) || qa) ea(a.Lg) || (c = a.Lg.pe, c.normalize = a.km, c.buffer = b);
                else if (a.lf.length) {
                    c = 0;
                    for (d = a.lf.length; c < d; c++) {
                        b = a.lf[c];
                        e = new J(a, b.cn);
                        e.Qm(!0);
                        if ("undefined" !== typeof b.mm && (b.V = u.dh(b.mm), !b.V)) continue;
                        if (b.V) {
                            var g = Na(b.V.x, b.V.y, -b.V.k.Ib(), Aa, Ba, !0),
                                k = Na(b.V.x, b.V.y, -b.V.k.Ib(), Aa, Ba, !1);
                            e.dk(g, k, ya(b.V.m - b.V.k.Ib()), b.gj, b.Hj, b.Kj);
                            e.tg(b.V)
                        } else e.dk(b.x, b.y, b.Yn, b.gj, b.Hj, b.Kj);
                        e.play(a.Cj, a.pk, a.Sh);
                        a.Eh && e.pause();
                        T.push(e)
                    }
                    a.lf.length = 0
                } else e = new J(a, a.Fh), e.play(a.Cj, a.pk, a.Sh), a.Eh && e.pause(), T.push(e)
            });
            else if (this.Da = F.createBuffer(this.Ig, !1), ea(this.Fh) || qa) ea(this.Lg) || (b = this.Lg.pe, b.normalize = this.km, b.buffer = this.Da);
            else {
                var b = new J(this, this.Fh);
                b.play(this.Cj, this.pk, this.Sh);
                this.Eh && b.pause();
                T.push(b)
            }
        }
    };
    J.prototype.Mf = function () {
        switch (this.qa) {
        case x:
            return this.n.ended;
        case H:
            return this.buffer.qa === H ? !this.Qd && !this.Ic && this.n.loop || this.rd ? !1 : u.tc.Ma - this.startTime > this.buffer.Da.duration : this.n.ended;
        case K:
            return this.Rj;
        case X:
            !0
        }
        return !0
    };
    J.prototype.mo = function () {
        return this.Qd || this.Ic ? !0 : this.Mf()
    };
    J.prototype.Qm = function (a) {
        O === H && (!this.fd && a ? this.eb && (this.Ka || (this.Ka = F.createPanner(), this.Ka.panningModel = "number" === typeof this.Ka.panningModel ? hb : ["equalpower", "HRTF", "soundfield"][hb], this.Ka.distanceModel = "number" === typeof this.Ka.distanceModel ? ib : ["linear", "inverse", "exponential"][ib], this.Ka.refDistance = Yb, this.Ka.maxDistance = Zb, this.Ka.rolloffFactor = $b), this.eb.disconnect(), this.eb.connect(this.Ka), this.Ka.connect(r(this.ee)), this.fd = !0) : this.fd && !a && this.eb && (this.Ka.disconnect(), this.eb.disconnect(), this.eb.connect(r(this.ee)), this.fd = !1))
    };
    J.prototype.dk = function (a, b, c, d, e, g) {
        this.fd && O === H && (this.Ka.setPosition(a, b, 0), this.Ka.setOrientation(Math.cos(D(c)), Math.sin(D(c)), 0), this.Ka.coneInnerAngle = d, this.Ka.coneOuterAngle = e, this.Ka.coneOuterGain =
        g, this.Am = a, this.Bm = b, this.wm = c, this.xm = d, this.ym = e, this.zm = g)
    };
    J.prototype.tg = function (a) {
        this.fd && O === H && (this.Za || (this.Za = new I), this.Za.tg(a))
    };
    J.prototype.qb = function (a) {
        if (this.fd && O === H && this.Za && this.Za.hh() && this.Ze()) {
            this.Za.qb(a);
            a = this.Za.V;
            var b = Na(a.x, a.y, -a.k.Ib(), Aa, Ba, !0),
                c = Na(a.x, a.y, -a.k.Ib(), Aa, Ba, !1);
            this.Ka.setPosition(b, c, 0);
            b = 0;
            "undefined" !== typeof this.Za.V.m && (b = a.m - a.k.Ib(), this.Ka.setOrientation(Math.cos(b), Math.sin(b), 0));
            this.Ka.setVelocity(this.Za.Ll(), this.Za.Ml(), 0)
        }
    };
    J.prototype.play = function (a, b, d) {
        var e = this.n;
        this.td = a;
        this.volume = b;
        d = d || 0;
        switch (this.qa) {
        case x:
            1 !== e.playbackRate && (e.playbackRate = 1);
            e.volume !== b * na && (e.volume = b * na);
            e.loop !== a && (e.loop = a);
            e.muted && (e.muted = !1);
            if (e.currentTime !== d) try {
                e.currentTime = d
            } catch (g) {}
            this.Oc && Ga && !u.ad ? Ha.push(this) : this.n.play();
            break;
        case H:
            this.muted = !1;
            this.fg = 1;
            if (this.buffer.qa === H) this.Qd || (this.n = F.createBufferSource(), this.n.buffer = this.buffer.Da, this.n.connect(this.eb)), this.n.loop = a, this.eb.gain.value = b * na, 0 === d ? c(this.n) : t(this.n, d, this.Ve());
            else {
                1 !== e.playbackRate && (e.playbackRate = 1);
                e.loop !== a && (e.loop = a);
                this.eb.gain.value = b * na;
                if (e.currentTime !== d) try {
                    e.currentTime = d
                } catch (k) {}
                this.Oc && Ga && !u.ad ? Ha.push(this) : e.play()
            }
            break;
        case K:
            (!this.Qd && this.Ic || 0 !== d) && e.seekTo(d);
            e.play();
            this.Rj = !1;
            break;
        case X:
            u.yb ? AppMobi.context.playSound(this.src, a) : AppMobi.player.playSound(this.src, a)
        }
        this.playbackRate = 1;
        this.startTime = u.tc.Ma - d;
        this.rd = this.Ic = this.Qd = !1
    };
    J.prototype.stop = function () {
        switch (this.qa) {
        case x:
            this.n.paused || this.n.pause();
            break;
        case H:
            this.buffer.qa === H ? m(this.n) : this.n.paused || this.n.pause();
            break;
        case K:
            this.n.stop();
            break;
        case X:
            u.yb && AppMobi.context.stopSound(this.src)
        }
        this.Ic = !0;
        this.rd = !1
    };
    J.prototype.pause = function () {
        if (!(this.Qd || this.Ic || this.Mf() || this.rd)) {
            switch (this.qa) {
            case x:
                this.n.paused || this.n.pause();
                break;
            case H:
                this.buffer.qa === H ? (this.Sc = this.dj(), this.td && (this.Sc %= this.Ve()), m(this.n)) : this.n.paused || this.n.pause();
                break;
            case K:
                this.n.pause();
                break;
            case X:
                u.yb && AppMobi.context.stopSound(this.src)
            }
            this.rd = !0
        }
    };
    J.prototype.gq = function (a) {
        this.qa === H && (this.fd ? (this.Ka.disconnect(), this.Ka.connect(a)) : (this.eb.disconnect(), this.eb.connect(a)))
    };
    J.prototype.Ve = function () {
        switch (this.qa) {
        case x:
            if ("undefined" !== typeof this.n.duration) return this.n.duration;
            break;
        case H:
            return this.buffer.Da.duration;
        case K:
            return this.n.getDuration();
        case X:
            if (u.yb) return AppMobi.context.getDurationSound(this.src)
        }
        return 0
    };
    J.prototype.dj = function () {
        var a = this.Ve(),
            b = 0;
        switch (this.qa) {
        case x:
            "undefined" !== typeof this.n.currentTime && (b = this.n.currentTime);
            break;
        case H:
            if (this.buffer.qa === H) {
                if (this.rd) return this.Sc;
                b = u.tc.Ma - this.startTime
            } else "undefined" !== typeof this.n.currentTime && (b = this.n.currentTime);
            break;
        case X:
            u.yb && (b = AppMobi.context.getPlaybackTimeSound(this.src))
        }!this.td && b > a && (b = a);
        return b
    };
    J.prototype.Ze = function () {
        return !this.rd && !this.Qd && !this.Ic && !this.Mf()
    };
    J.prototype.Gq = function () {
        var a = this.volume * na;
        switch (this.qa) {
        case x:
            this.n.volume && this.n.volume !== a && (this.n.volume = a);
            break;
        case H:
            this.eb.gain.value =
            a * this.fg
        }
    };
    J.prototype.Sg = function (a) {
        switch (this.qa) {
        case x:
            this.n.muted !== !! a && (this.n.muted = !! a);
            break;
        case H:
            this.fg = a ? 0 : 1, this.eb.gain.value = na * this.volume * this.fg
        }
    };
    J.prototype.tq = function () {
        this.bf = !0;
        this.Sg(this.bf || this.Tf)
    };
    J.prototype.Rm = function (a) {
        this.Tf = !! a;
        this.Sg(this.bf || this.Tf)
    };
    J.prototype.nn = function () {
        var a = this.playbackRate;
        if (1 === Ra && !this.Oc || 2 === Ra) a *= u.sf;
        switch (this.qa) {
        case x:
            this.n.playbackRate !== a && (this.n.playbackRate = a);
            break;
        case H:
            this.buffer.qa === H ? this.n.playbackRate.value !== a && (this.n.playbackRate.value = a) : this.n.playbackRate !== a && (this.n.playbackRate = a)
        }
    };
    J.prototype.uq = function (a) {
        switch (this.qa) {
        case x:
            a ? this.Ze() ? (this.n.pause(), this.yd = !0) : this.yd = !1 : this.yd && this.n.play();
            break;
        case H:
            a ? this.Ze() ? (this.buffer.qa === H ? (this.Sc = this.dj(), this.td && (this.Sc %= this.Ve()), m(this.n)) : this.n.pause(), this.yd = !0) : this.yd = !1 : this.yd && (this.buffer.qa === H ? (this.n = F.createBufferSource(), this.n.buffer = this.buffer.Da, this.n.connect(this.eb), this.n.loop = this.td, this.eb.gain.value =
            na * this.volume * this.fg, this.startTime = u.tc.Ma - this.Sc, t(this.n, this.Sc, this.Ve())) : this.n.play());
            break;
        case K:
            a ? this.Ze() ? (this.n.pause(), this.yd = !0) : this.yd = !1 : this.yd && this.n.play()
        }
    };
    y.Ba = function (a) {
        this.type = a;
        u = this.b = a.b;
        P = this;
        this.zb = null;
        this.ag = -600;
        !(this.b.uj || this.b.mj && (this.b.Qf || this.b.Tl)) || this.b.nj || this.b.Ya || (Ga = !0);
        F = null;
        "undefined" !== typeof AudioContext ? (O = H, F = new AudioContext) : "undefined" !== typeof webkitAudioContext && (O = H, F = new webkitAudioContext);
        (this.b.uj && O === H || Ga) && document.addEventListener("touchstart", function () {
            var a, b, d;
            !ac && F && (a = F.createBuffer(1, 1, 22050), b = F.createBufferSource(), b.buffer = a, b.connect(F.destination), c(b), ac = !0);
            if (Ga) {
                if (!qa) for (a = 0, b = Ha.length; a < b; ++a) d = Ha[a], d.Ic || d.rd || d.n.play();
                Ha.length = 0
            }
        }, !0);
        O !== H && (this.b.Ye ? O = K : this.b.Xe && (O = X));
        O === K && (N = location.href, a = N.lastIndexOf("/"), -1 < a && (N = N.substr(0, a + 1)), N = N.replace("file://", ""));
        if (this.b.Jp && this.b.Kp && "undefined" === typeof Audio) alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."), this.b.ie(this);
        else {
            if (!this.b.yb) try {
                new Audio
            } catch (b) {}
            this.b.zg(this)
        }
    };
    var oa = y.Ba.prototype;
    oa.ea = function () {
        Ra = this.D[0];
        this.zd = this.D[1];
        hb = this.D[2];
        ib = this.D[3];
        this.ag = -this.D[4];
        Yb = this.D[5];
        Zb = this.D[6];
        $b = this.D[7];
        this.zb = new I;
        O === H && (F.listener.speedOfSound = this.D[8], F.listener.dopplerFactor = this.D[9], F.listener.setPosition(this.b.T / 2, this.b.S / 2, this.ag), F.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function (a, b) {
            va && va.disconnect();
            gb = b.toLowerCase();
            va = F.createMediaStreamSource(a);
            va.connect(r(gb))
        });
        this.b.Mk(function (a) {
            P.Zp(a)
        });
        var a = this;
        this.b.bo(function (b) {
            a.Vp(b)
        })
    };
    oa.Vp = function (a) {
        var b, c, d;
        b = 0;
        for (c = T.length; b < c; b++) d = T[b], d.Za && d.Za.V === a && (d.Za.V = null, d.fd && d.Ze() && d.td && d.stop());
        this.zb.V === a && (this.zb.V = null)
    };
    oa.Zb = function () {
        var a = {
            silent: qa,
            masterVolume: na,
            listenerZ: this.ag,
            listenerUid: this.zb.hh() ? this.zb.V.uid : -1,
            playing: [],
            effects: {}
        },
            b = a.playing,
            c, d, e, g, k, f;
        c = 0;
        for (d = T.length; c < d; c++) e = T[c], !e.Ze() || 3 === this.zd || e.Oc && 1 === this.zd || !e.Oc && 2 === this.zd || (g = e.dj(), e.td && (g %= e.Ve()), g = {
            tag: e.ee,
            buffersrc: e.buffer.src,
            is_music: e.Oc,
            playbackTime: g,
            volume: e.volume,
            looping: e.td,
            muted: e.bf,
            playbackRate: e.playbackRate,
            paused: e.rd,
            resume_position: e.Sc
        }, e.fd && (g.pan = {}, f = g.pan, e.Za && e.Za.hh() ? f.objUid = e.Za.V.uid : (f.x = e.Am, f.y = e.Bm, f.a = e.wm), f.ia = e.xm, f.oa = e.ym, f.og = e.zm), b.push(g));
        b = a.effects;
        for (k in U) if (U.hasOwnProperty(k)) {
            e = [];
            c = 0;
            for (d = U[k].length; c < d; c++) e.push({
                type: U[k][c].type,
                params: U[k][c].Rc
            });
            b[k] = e
        }
        return a
    };
    var Ia = [];
    oa.Gc = function (b) {
        var c =
        b.silent;
        na = b.masterVolume;
        this.ag = b.listenerZ;
        this.zb.tg(null);
        var f = b.listenerUid; - 1 !== f && (this.zb.yh = f, Ia.push(this.zb));
        var f = b.playing,
            h, m, u, r, t, P, J, y, C, x, K;
        if (3 !== this.zd) for (h = 0, m = T.length; h < m; h++) C = T[h], C.Oc && 1 === this.zd || (C.Oc || 2 !== this.zd) && C.stop();
        for (t in U) if (U.hasOwnProperty(t)) for (h = 0, m = U[t].length; h < m; h++) U[t][h].remove();
        Sa(U);
        for (t in b.effects) if (b.effects.hasOwnProperty(t)) for (P = b.effects[t], h = 0, m = P.length; h < m; h++) switch (u = P[h].type, x = P[h].params, u) {
        case "filter":
            R(t, new g(x[0], x[1], x[2], x[3], x[4], x[5]));
            break;
        case "delay":
            R(t, new l(x[0], x[1], x[2]));
            break;
        case "convolve":
            u = x[2];
            C = this.Yi(u, !1);
            C.Da ? u = new e(C.Da, x[0], x[1], u) : (u = new e(null, x[0], x[1], u), C.km = x[0], C.Lg = u);
            R(t, u);
            break;
        case "flanger":
            R(t, new w(x[0], x[1], x[2], x[3], x[4]));
            break;
        case "phaser":
            R(t, new a(x[0], x[1], x[2], x[3], x[4], x[5]));
            break;
        case "gain":
            R(t, new k(x[0]));
            break;
        case "tremolo":
            R(t, new d(x[0], x[1]));
            break;
        case "ringmod":
            R(t, new B(x[0], x[1]));
            break;
        case "distortion":
            R(t, new A(x[0], x[1], x[2], x[3], x[4]));
            break;
        case "compressor":
            R(t, new n(x[0], x[1], x[2], x[3], x[4]));
            break;
        case "analyser":
            R(t, new p(x[0], x[1]))
        }
        h = 0;
        for (m = f.length; h < m; h++) 3 === this.zd || (b = f[h], u = b.buffersrc, r = b.is_music, t = b.tag, P = b.playbackTime, J = b.looping, y = b.volume, K = (x = b.pan) && x.hasOwnProperty("objUid") ? x.objUid : -1, r && 1 === this.zd) || !r && 2 === this.zd || ((C = this.dp(u, t, r, J, y)) ? (C.Sc = b.resume_position, C.Qm( !! x), C.play(J, y, P), C.nn(), C.Gq(), C.Sg(C.bf || C.Tf), b.paused && C.pause(), b.muted && C.tq(), C.Sg(C.bf || C.Tf), x && (-1 !== K ? (C.Za = C.Za || new I, C.Za.yh =
        K, Ia.push(C.Za)) : C.dk(x.x, x.y, x.a, x.ia, x.oa, x.og))) : (C = this.Yi(u, r), C.Sh = P, C.Eh = b.paused, x && (-1 !== K ? C.lf.push({
            mm: K,
            gj: x.ia,
            Hj: x.oa,
            Kj: x.og,
            cn: t
        }) : C.lf.push({
            x: x.x,
            y: x.y,
            Yn: x.a,
            gj: x.ia,
            Hj: x.oa,
            Kj: x.og,
            cn: t
        }))));
        if (c && !qa) {
            h = 0;
            for (m = T.length; h < m; h++) T[h].Rm(!0);
            qa = !0
        } else if (!c && qa) {
            h = 0;
            for (m = T.length; h < m; h++) T[h].Rm(!1);
            qa = !1
        }
    };
    oa.Jd = function () {
        var a, b, c, d;
        a = 0;
        for (b = Ia.length; a < b; a++) c = Ia[a], d = this.b.dh(c.yh), c.tg(d), c.yh = -1, d && (Aa = d.x, Ba = d.y);
        Ia.length = 0
    };
    oa.Zp = function (a) {
        var b, c;
        b = 0;
        for (c = T.length; b < c; b++) T[b].uq(a)
    };
    oa.qb = function () {
        var a = this.b.Pb,
            b, c, d;
        b = 0;
        for (c = T.length; b < c; b++) d = T[b], d.qb(a), d.qa === x || d.qa === X || d.Qd || d.Ic || !d.Mf() || (d.Ic = !0, C = d.ee, u.trigger(Ub.prototype.e.qi, P)), 0 !== Ra && d.nn();
        var e, g;
        for (e in U) if (U.hasOwnProperty(e)) for (d = U[e], b = 0, c = d.length; b < c; b++) g = d[b], g.qb && g.qb();
        O === H && this.zb.hh() && (this.zb.qb(a), Aa = this.zb.V.x, Ba = this.zb.V.y, F.listener.setPosition(this.zb.V.x, this.zb.V.y, this.ag), F.listener.setVelocity(this.zb.Ll(), this.zb.Ml(), 0))
    };
    oa.Yi = function (a, b) {
        var c, d, e, g = null;
        c = 0;
        for (d = ja.length; c < d; c++) if (e = ja[c], e.src === a) {
            g = e;
            break
        }
        g || (g = new M(a, b), ja.push(g));
        return g
    };
    oa.dp = function (a, b, c, d, e) {
        var g, k, f;
        g = 0;
        for (k = T.length; g < k; g++) if (f = T[g], f.src === a && (f.mo() || c)) return f.ee = b, f;
        a = this.Yi(a, c);
        if (!a.Da) return "<preload>" !== b && (a.Fh = b, a.Cj = d, a.pk = e), null;
        f = new J(a, b);
        T.push(f);
        return f
    };
    var za = [];
    L.prototype.qi = function (a) {
        return ab(C, a)
    };
    y.e = new L;
    y.d = new(q());
    y.j = new(q())
})();

function S(h) {
    this.b = h
}(function () {
    function h() {}
    function r() {}
    function b() {}
    var f = S.prototype;
    f.Ha = function (b) {
        this.ya = b;
        this.b = b.b
    };
    f.Ha.prototype.ea = q();
    f.Ba = function (b) {
        this.type = b;
        this.b = b.b
    };
    f.Ba.prototype.ea = function () {
        var b = this;
        window.addEventListener("resize", function () {
            b.b.trigger(S.prototype.e.Nn, b)
        });
        "undefined" !== typeof navigator.onLine && (window.addEventListener("online", function () {
            b.b.trigger(S.prototype.e.Jn, b)
        }), window.addEventListener("offline", function () {
            b.b.trigger(S.prototype.e.In, b)
        }));
        "undefined" !== typeof window.applicationCache && (window.applicationCache.addEventListener("updateready", function () {
            b.b.ef = 1;
            b.b.trigger(S.prototype.e.Dk, b)
        }), window.applicationCache.addEventListener("progress", function (f) {
            b.b.ef = f.loaded / f.total
        }));
        this.b.yb || (document.addEventListener("appMobi.device.update.available", function () {
            b.b.trigger(S.prototype.e.Dk, b)
        }), document.addEventListener("backbutton", function () {
            b.b.trigger(S.prototype.e.xk, b)
        }), document.addEventListener("menubutton", function () {
            b.b.trigger(S.prototype.e.zk, b)
        }), document.addEventListener("searchbutton", function () {
            b.b.trigger(S.prototype.e.On, b)
        }), document.addEventListener("tizenhwkey", function (f) {
            var h;
            switch (f.keyName) {
            case "back":
                h = b.b.trigger(S.prototype.e.xk, b);
                !h && window.tizen && window.tizen.application.getCurrentApplication().exit();
                break;
            case "menu":
                (h = b.b.trigger(S.prototype.e.zk, b)) || f.preventDefault()
            }
        }));
        this.b.Mk(function (f) {
            f ? b.b.trigger(S.prototype.e.Kn, b) : b.b.trigger(S.prototype.e.Ln, b)
        });
        this.tj = "undefined" !== typeof window.is_scirra_arcade
    };
    h.prototype.Jn = v(!0);
    h.prototype.In = v(!0);
    h.prototype.Dk = v(!0);
    h.prototype.Ln = v(!0);
    h.prototype.Kn = v(!0);
    h.prototype.Nn = v(!0);
    h.prototype.xk = v(!0);
    h.prototype.zk = v(!0);
    h.prototype.On = v(!0);
    f.e = new h;
    r.prototype.un = function () {
        this.tj || this.b.Ya || !window.forward || window.forward()
    };
    r.prototype.tk = function (b) {
        this.b.Fc ? CocoonJS.App.openURL(b) : this.tj || this.b.Ya || (window.location = b)
    };
    r.prototype.oi = function (b, f) {
        this.b.Fc ? CocoonJS.App.openURL(b) : this.tj || this.b.Ya || window.open(b, f)
    };
    f.d = new r;
    b.prototype.sn =

    function (b) {
        b.H(this.b.Ya ? "" : window.location.hostname)
    };
    f.j = new b
})();

function V(h) {
    this.b = h
}(function () {
    var h = V.prototype;
    h.Ha = function (a) {
        this.ya = a;
        this.b = a.b
    };
    var r = null,
        b = null,
        f, c, t, m = !1,
        g = !1,
        l = {},
        e, w = "",
        a, k = 0,
        d = 0,
        B = 0,
        A = "",
        n = 0,
        p = 0,
        I = 0,
        M, J = "",
        R, L;
    h.Ha.prototype.ea = q();
    h.Ba = function (a) {
        this.type = a;
        this.b = a.b
    };
    var y = h.Ba.prototype;
    y.ea = function () {
        r = this.b;
        b = this;
        var a = 0 == this.D[1],
            d = 0 == this.D[2] ? !1 : "c2canvasdiv";
        if (window.c2cocoonjs) {
            var e = this,
                k = !1;
            CocoonJS.App.onLoadInTheWebViewSucceed.addEventListener(function () {
                k || (k = !0, CocoonJS.App.forwardAsync("load_clay( '" + e.D[0] + "', " + a + " );"))
            });
            CocoonJS.App.loadInTheWebView("webview/webview.html")
        } else "undefined" === typeof window.Clay && (window.Clay = {}), f = window.Clay, f.options = f.options || {}, f.options.debug = a, f.options.DOMid = d, f.options.fail = function () {
            g = !0
        }, f.gameKey = this.D[0], f.readyFunctions = [], f.ready = function (a) {
            f.readyFunctions.push(a)
        }, f.PROTOCOL = "chrome-extension:" == document.location.protocol || "ms-appx:" == document.location.protocol ? "https://" : document.location.protocol + "//", f.source ||
        function () {
           
        }(), f.ready(function () {
            m = !0;
            c = new f.Payment
        })
    };
    y.Mc = q();
    y.pc = q();
    h.e = {};
    y = h.e;
    y.Us = function () {
        var a = m;
        a && (m = !1);
        return a
    };
    y.Hs = function () {
        var a = g;
        a && (g = !1);
        return a
    };
    y.Gi = v(!0);
    y.ll = v(!0);
    y.Ei = v(!0);
    y.$k = v(!0);
    y.ml = v(!0);
    y.kl = v(!0);
    y.jl = v(!0);
    y.nl = v(!0);
    y.dl = v(!0);
    y.al = v(!0);
    y.yf = v(!0);
    y.Fi = v(!0);
    y.gl = v(!0);
    y.fl = v(!0);
    y.bl = v(!0);
    y.hl = v(!0);
    y.el = v(!0);
    y.cl = v(!0);
    y.il = v(!0);
    h.d = {};
    y = h.d;
    window.clay_from_cocoon_ready = function () {
        m = !0
    };
    window.clay_from_cocoon_fail = function () {
        g = !0
    };
    y.qt = function () {
        f.Stats.logStat({
            name: "Plays"
        })
    };
    y.st = function (a, b) {
        window.c2cocoonjs ? CocoonJS.App.forwardAsync("Clay['Stats']['logStat']( { name: '" + a + "', quantity: " + b + " } );") : f.Stats.logStat({
            name: a,
            zt: b
        })
    };
    y.nt = function (a, d, c, e) {
        if (window.c2cocoonjs) {
            var g = "";
            "string" == typeof c && (g += "'");
            g += c;
            "string" == typeof c && (g += "'");
            CocoonJS.App.forwardAsync("leaderboards_post( '" + a + "', '" + d + "', " + g + ", '" + e + "' );")
        } else a = {
            name: a
        }, a.score = d ? d : 0, 0 != e && (a.hideUI = !0), (new f.Leaderboard({
            id: c
        })).post(a, function () {
            r.trigger(V.prototype.e.Gi, b)
        })
    };
    window.clay_from_cocoon_leaderboards_post = function () {
        r.trigger(V.prototype.e.Gi, b)
    };
    y.ot = function (a, d) {
        if (window.c2cocoonjs) {
            var c = "";
            "string" == typeof a && (c += "'");
            c += a;
            "string" == typeof a && (c += "'");
            CocoonJS.App.forwardAsync("leaderboards_post_encrypted( " + c + ", '" + d + "' );")
        } else(new f.Leaderboard({
            id: a
        })).post(d, function () {
            r.trigger(V.prototype.e.Gi, b)
        })
    };
    y.pt = function (a, b, d, c, e, g) {
        if (window.c2cocoonjs) {
            var k = "";
            "string" == typeof a && (k += "'");
            k += a;
            "string" == typeof a && (k += "'");
            CocoonJS.App.forwardAsync("leaderboards_show( " + k + ", " + b + ", " + d + ", " + c + ", " + e + ", " + g + " );")
        } else {
            k = 0;
            g || (g = 10);
            switch (b) {
            case 0:
                k = 0;
                break;
            case 1:
                k = 2592E3;
                break;
            case 2:
                k = 604800;
                break;
            case 3:
                k = 86400;
                break;
            default:
                k = 0
            }
            b = {
                cumulative: 1 === d,
                self: 1 === e ? !0 : !1,
                friends: 2 === e ? !0 : !1,
                recent: k,
                sort: 1 === c ? "asc" : "desc",
                limit: g
            };
            (new f.Leaderboard({
                id: a
            })).show(b)
        }
    };
    y.lt = function (c, e, g, h, l, n) {
        if (window.c2cocoonjs) {
            var m = "";
            "string" == typeof c && (m += "'");
            m += c;
            "string" == typeof c && (m += "'");
            CocoonJS.App.forwardAsync("leaderboards_fetch( " + m + ", " + e + ", " + g + ", " + h + ", " + l + ", " + n + " );")
        } else {
            m = 0;
            n || (n = 10);
            switch (e) {
            case 0:
                m = 0;
                break;
            case 1:
                m = 2592E3;
                break;
            case 2:
                m = 604800;
                break;
            case 3:
                m = 86400;
                break;
            default:
                m = 0
            }
            e = {
                cumulative: 1 === g,
                self: 1 === l ? !0 : !1,
                friends: 2 === l ? !0 : !1,
                recent: m,
                sort: 1 === h ? "asc" : "desc",
                limit: n,
                getRank: !0
            };
            (new f.Leaderboard({
                id: c
            })).fetch(e, function (e) {
                a = e.data;
                e.rank.rank && (d = e.rank.rank, B = e.rank.row.score, A = e.rank.row.name);
                k = e && e.data ? e.data.length - 1 : 0;
                0 > k && (k = 0);
                R = c;
                r.trigger(V.prototype.e.ll, b)
            })
        }
    };
    window.clay_from_cocoon_leaderboards_fetch = function (c, e, g, f, h, l) {
        a = JSON.parse(e);
        k = g;
        d = f;
        B = h;
        A = l;
        R = c;
        r.trigger(V.prototype.e.ll, b)
    };
    y.mt = function () {
        window.c2cocoonjs ? CocoonJS.App.forwardAsync("Clay['UI']['closeModal']( 'clay-leaderboard-wrapper' );") : f.UI.closeModal("clay-leaderboard-wrapper")
    };
    y.Vs = function (a) {
        window.c2cocoonjs ? a ? CocoonJS.App.forwardAsync("Clay['UI']['closeModal']( 'clay-" + a + "-wrapper' );") : CocoonJS.App.forwardAsync("Clay['UI']['closeModal']();") : a ? f.UI.closeModal("clay-" + a + "-wrapper") : f.UI.closeModal()
    };
    y.Bs = function (a, d) {
        if (window.c2cocoonjs) {
            var c = "";
            "string" == typeof a && (c += "'");
            c += a;
            "string" == typeof a && (c += "'");
            CocoonJS.App.forwardAsync("achievements_award( " + c + ", " + d + " );")
        } else c = {
            id: a
        }, 0 != d && (c.hideUI = !0), (new f.Achievement(c)).award(function (c) {
            c.success && (l[a] = c, r.trigger(V.prototype.e.Ei, b))
        })
    };
    window.clay_from_cocoon_achievements_award = function (a, c) {
        l[a] = JSON.parse(c);
        r.trigger(V.prototype.e.Ei, b)
    };
    y.Ds = function () {
        window.c2cocoonjs ? CocoonJS.App.forwardAsync("achievements_fetch_all();") : f.Achievement.fetchAll({}, function (a) {
            e = a.data;
            console.log(a);
            r.trigger(V.prototype.e.$k, b)
        })
    };
    window.clay_from_cocoon_achievements_fetch = function (a) {
        e = JSON.parse(a);
        r.trigger(V.prototype.e.$k, b)
    };
    y.Cs = function (a) {
        window.c2cocoonjs ? CocoonJS.App.forwardAsync("achievements_award_encrypted( '" + a + "' );") : (new f.Achievement({
            mh: a
        })).award(function (a) {
            a.success && r.trigger(V.prototype.e.Ei, b)
        })
    };
    y.Es = function () {
        window.c2cocoonjs ? CocoonJS.App.forwardAsync("achievements_show_all();") : f.Achievement.showAll()
    };
    y.Et = function (a) {
        if (window.c2cocoonjs) CocoonJS.App.forwardAsync("screenshot_show( '" + a + "' );");
        else {
            var c = new f.Screenshot({
                prompt: !1
            });
            c.data = a;
            c.save(function (a) {
                a.success && (w = a.it, r.trigger(V.prototype.e.ml, b))
            })
        }
    };
    window.clay_from_cocoon_screenshot_show = function (a) {
        w = a;
        r.trigger(V.prototype.e.ml, b)
    };
    y.Ht = function () {
        window.c2cocoonjs ? CocoonJS.App.forwardAsync("new Clay['Suggestions']();") : new f.Suggestions
    };
    y.Gt = function () {
        window.c2cocoonjs ? CocoonJS.App.forwardAsync("Clay['UI']['closeModal']( 'clay-suggestions-wrapper' );") : f.UI.closeModal("clay-suggestions-wrapper")
    };
    y.Bt = function () {
        window.c2cocoonjs ? CocoonJS.App.forwardAsync("new Clay['Ratings']();") : new f.Ratings
    };
    y.At = function () {
        window.c2cocoonjs ? CocoonJS.App.forwardAsync("Clay['UI']['closeModal']( 'clay-ratings-wrapper' );") : f.UI.closeModal("clay-ratings-wrapper")
    };
    y.Ys = function (a, c, d) {
        if (window.c2cocoonjs) CocoonJS.App.forwardAsync("facebook_post( '" + a + "', '" + c + "', '" + d + "' );");
        else {
            var e = new f.Facebook;
            a = {
                message: a
            };
            "" != c && (a.link = c);
            "" != d && (a.picture = d);
            e.post(a, function (a) {
                a.success && r.trigger(V.prototype.e.kl, b)
            })
        }
    };
    window.clay_from_cocoon_facebook_post = function () {
        r.trigger(V.prototype.e.kl, b)
    };
    y.Xs = function (a) {
        if (window.c2cocoonjs) CocoonJS.App.forwardAsync("facebook_invite( '" + a + "' );");
        else {
            var c = {};
            "" !== a && (c.caption = a);
            f.Facebook.invite(c, function (a) {
                a.success && r.trigger(V.prototype.e.jl, b)
            })
        }
    };
    window.clay_from_cocoon_facebook_invite = function () {
        r.trigger(V.prototype.e.jl, b)
    };
    y.Kt = function (a) {
        window.c2cocoonjs ? CocoonJS.App.forwardAsync("twitter_post( '" + a.replace("'", "'") + "' );") : (new f.Twitter).post({
            message: a
        }, function (a) {
            a.success && r.trigger(V.prototype.e.nl, b)
        })
    };
    window.clay_from_cocoon_twitter_post = function () {
        r.trigger(V.prototype.e.nl, b)
    };
    y.Ms = function (a) {

        window.c2cocoonjs ? CocoonJS.App.forwardAsync("clay_post( '" + a.replace("'", "'") + "' );") : (new f.Stream).post({
            message: a
        }, function (a) {
            a.success && r.trigger(V.prototype.e.dl, b)
        })
    };
    window.clay_from_cocoon_clay_post = function () {
        r.trigger(V.prototype.e.dl, b)
    };
    y.Is = function (a) {
        window.c2cocoonjs ? CocoonJS.App.forwardAsync("add_payment_item( " + a + " );") : c.addItem({
            id: a
        }, function (a) {
            a.success && r.trigger(V.prototype.e.al, b)
        })
    };
    window.clay_from_cocoon_add_payment_item = function () {
        r.trigger(V.prototype.e.al, b)
    };
    y.Ps = function (a) {
        window.c2cocoonjs ? CocoonJS.App.forwardAsync("ClayPay['removeItem']( { id: " + a + " } );") : c.removeItem({
            id: a
        })
    };
    y.Js = function () {
        window.c2cocoonjs ? CocoonJS.App.forwardAsync("clay_checkout();") : c.checkout(function (a) {
            a.success ? (n = a.Op, r.trigger(V.prototype.e.yf, b)) : a.mh ? (n = a.mh, r.trigger(V.prototype.e.yf, b)) : r.trigger(V.prototype.e.Fi, b)
        })
    };
    window.clay_from_cocoon_clay_checkout = function (a) {
        n = a;
        r.trigger(V.prototype.e.yf, b)
    };
    window.clay_from_cocoon_clay_checkout_fail = function () {
        r.trigger(V.prototype.e.Fi, b)
    };
    y.Ls = function () {
        window.c2cocoonjs ? CocoonJS.App.forwardAsync("clay_fetch_items();") : f.Player.fetchItems(function (a) {
            L = a;
            r.trigger(V.prototype.e.cl, b)
        })
    };
    window.clay_from_cocoon_clay_fetch_items = function (a) {
        L = JSON.parse(a);
        r.trigger(V.prototype.e.cl, b)
    };
    y.Os = function () {
        window.c2cocoonjs ? CocoonJS.App.forwardAsync("clay_purchase_game();") : f.Player.purchaseGame(function (a) {
            a.success ? (n = a.Op, r.trigger(V.prototype.e.yf, b)) : a.mh ? (n = a.mh, r.trigger(V.prototype.e.yf, b)) : r.trigger(V.prototype.e.Fi, b)
        })
    };
    y.Qs = function () {
        window.c2cocoonjs ? CocoonJS.App.forwardAsync("clay_rooms();") : (t || (t = new f.Rooms(function (a) {
            p = a.count;
            I = a.id;
            r.trigger(V.prototype.e.fl, b)
        })), t.show(function () {
            r.trigger(V.prototype.e.gl, b)
        }))
    };
    window.clay_from_cocoon_clay_rooms_show = function () {
        L = JSON.parse(items);
        r.trigger(V.prototype.e.gl, b)
    };
    window.clay_from_cocoon_clay_rooms_full =

    function () {
        L = JSON.parse(items);
        r.trigger(V.prototype.e.fl, b)
    };
    y.Rs = function () {
        window.c2cocoonjs ? CocoonJS.App.forwardAsync("ClayRooms['leaveRoom']();") : t.leaveRoom()
    };
    y.Ks = function (a) {
        window.c2cocoonjs ? CocoonJS.App.forwardAsync("clay_fetch_data();") : f.Player.fetchUserData(a, function (c) {
            M = c.data;
            J = a;
            r.trigger(V.prototype.e.bl, b)
        })
    };
    window.clay_from_cocoon_clay_fetch_data = function (a, c) {
        M = JSON.parse(a);
        J = c;
        r.trigger(V.prototype.e.bl, b)
    };
    y.Ss = function (a, c) {
        window.c2cocoonjs ? CocoonJS.App.forwardAsync("clay_save_data();") : f.Player.saveUserData(a, c, function (a) {
            a.success ? r.trigger(V.prototype.e.hl, b) : f.log(a.error)
        })
    };
    window.clay_from_cocoon_clay_save_data = function () {
        r.trigger(V.prototype.e.hl, b)
    };
    y.Ns = function () {
        window.c2cocoonjs ? CocoonJS.App.forwardAsync("clay_prompt_login();") : f.Player.login(function (a) {
            a.success && r.trigger(V.prototype.e.el, b)
        })
    };
    window.clay_from_cocoon_clay_prompt_login = function () {
        r.trigger(V.prototype.e.el, b)
    };
    y.Ts = function (a) {
        window.c2cocoonjs ? CocoonJS.App.forwardAsync("clay_set_game_key( '" + a + "' );") : f.Game.set({
            key: a,
            options: {
                debug: 0 == this.D[1]
            }
        }, function () {
            r.trigger(V.prototype.e.il, b)
        })
    };
    window.clay_from_cocoon_clay_set_game_key = function () {
        r.trigger(V.prototype.e.il, b)
    };
    y.Ws = function (a) {
        window.c2cocoonjs ? CocoonJS.App.openURL(a) : window.open(a)
    };
    h.j = {};
    h = h.j;
    h.bs = function (a) {
        a.C(f.isReady ? 1 : 0)
    };
    h.ls = function (a) {
        a.H(w)
    };
    h.Qq = function (a, b) {
        l[b] && l[b].title ? a.H(l[b].title) : a.H("")
    };
    h.Oq = function (a, b) {
        console.log(l);
        l[b] && l[b].description ? a.H(l[b].description) : a.H("")
    };
    h.Pq = function (a, b) {
        l[b] && l[b].icon ? a.H(l[b].icon) : a.H("")
    };
    h.kr = function (a, b) {
        e[b] && e[b].title ? a.H(e[b].title) : a.H("")
    };
    h.hr = function (a, b) {
        e[b] && e[b].description ? a.H(e[b].description) : a.H("")
    };
    h.jr = function (a, b) {
        e[b] && e[b].icon ? a.H(e[b].icon) : a.H("")
    };
    h.ir = function (a, b) {
        e[b] ? a.C(e[b].earned ? 1 : 0) : a.C(0)
    };
    h.gr = function (a) {
        a.C(0 < e.length ? e.length - 1 : 0)
    };
    h.Jr = function (a) {
        a.C(k)
    };
    h.Er = function (b, c) {
        "undefined" === typeof a[c] ? b.H("") : b.H(a[c].name)
    };
    h.Ir = function (b, c) {
        "undefined" === typeof a[c] ? b.C(0) : b.C(a[c].score)
    };
    h.Fr = function (a) {
        a.C(d)
    };
    h.Gr = function (a) {
        a.H(A)
    };
    h.Hr = function (a) {
        a.C(B)
    };
    h.pr = function (a) {
        a.H(R)
    };
    h.Sr = function (a) {
        a.C(n.length - 1)
    };
    h.Tr = function (a, b) {
        "undefined" === typeof n[b] ? a.C(0) : a.C(n[b])
    };
    h.fr = function (a) {
        a.H(n)
    };
    h.ds = function (a) {
        a.C(p)
    };
    h.es = function (a) {
        a.C(I)
    };
    h.dr = function (a, b) {
        var c;
        c = "undefined" !== typeof b && null !== b ? M[b] : M;
        "undefined" === typeof c || null == c ? a.H("") : "number" === typeof c && parseInt(c) == c ? a.C(c) : "number" === typeof c ? a.O(c) : "string" === typeof c && a.H(c)
    };
    h.or = function (a) {
        a.H(J)
    };
    h.$r = function (a) {
        a.H(f.Player ? f.Player.identifier : "")
    };
    h.as = function (a) {
        a.H(f.Player && f.Player.data ? f.Player.data.username : "Anonymous")
    };
    h.Kr = function (a) {
        a.C(f.Player ? f.Player.loggedIn ? 1 : 0 : 0)
    };
    h.Vq = function (a) {
        a.H(f.Player ? f.Player.clearance : "none")
    };
    h.lr = function (a) {
        a.C(L ? L.length - 1 : 0)
    };
    h.mr = function (a, b) {
        "undefined" === typeof L[b] ? a.C(0) : a.C(L[b].id)
    };
    h.nr = function (a, b) {
        "undefined" === typeof L[b] ? a.C(0) : a.C(L[b].quantity)
    };
    h.er = function (a) {
        a.H(L)
    };
    h.tr = function (a) {
        a.C(f.Player ? f.Player.hasInstalled() ? 1 : 0 : 0)
    };
    h.Lr = function (a) {
        a.C(f.UI ? f.UI.modalsOpen() : 0)
    }
})();

function Vb(h) {
    this.b = h
}(function () {
    var h = Vb.prototype;
    h.Ha = function (h) {
        this.ya = h;
        this.b = h.b
    };
    h.Ha.prototype.ea = q();
    h.Ba = function (h) {
        this.type = h;
        this.b = h.b
    };
    h.Ba.prototype.ea = q();
    h.e = new(q());
    h.d = new(q());
    h.j = new(q())
})();

function Wb(h) {
    this.b = h
}(function () {
    var h = Wb.prototype;
    h.Ha = function (b) {
        this.ya = b;
        this.b = b.b
    };
    h.Ha.prototype.ea = q();
    h.Ba = function (b) {
        this.type = b;
        this.b = b.b
    };
    var r = h.Ba.prototype;
    r.ea = function () {
        this.G = document.createElement("iframe");
        this.G.src = this.D[1];
        this.G.id = this.uid;
        var b = 0 < this.width ? 1 : -1,
            f = 0 < this.height ? 1 : -1;
        this.G.setAttribute("id", this.D[3]);
        this.G.style.cssText = this.D[2];
        this.G.style.cssText = this.G.style.cssText + "-webkit-transform:rotate(" + 180 * this.m * b * f / 3.1416 + "deg);-moz-transform:rotate(" + 180 * this.m * b * f / 3.1416 + "deg);-o-transform:rotate(" + 180 * this.m * b * f / 3.1416 + "deg);-ms-transform:rotate(" + 180 * this.m * b * f / 3.1416 + "deg);";
        this.G.width = Math.round(this.G.width);
        this.G.height = Math.round(this.G.height);
        this.G.x = Math.round(this.G.x);
        this.G.y = Math.round(this.G.y);
        jQuery(this.G).appendTo("body");
        0 === this.D[0] && (jQuery(this.G).hide(), this.visible = !1);
        0 == this.D[4] && (this.G.scrolling = "auto");
        1 == this.D[4] && (this.G.scrolling = "yes");
        2 == this.D[4] && (this.G.scrolling = "no");
        this.G.onclick = function (b) {
            return function () {
                b.b.trigger(Rb.vn.prototype.e.Cn, b)
            }
        }(this);
        this.G.ondblclick = function (b) {
            return function () {
                b.b.trigger(Rb.vn.prototype.e.En, b)
            }
        }(this);
        this.on();
        this.b.zg(this);
        this.Mi = this.D[1]
    };
    r.kf = function () {
        jQuery(this.G).remove();
        this.G = null
    };
    r.qb = function () {
        this.on()
    };
    r.on = function () {
        var b = this.k.Fa(this.x, this.y, !0),
            f = this.k.Fa(this.x, this.y, !1),
            c = this.k.Fa(this.x + this.width, this.y + this.height, !0),
            h = this.k.Fa(this.x + this.width, this.y + this.height, !1);
        if (!this.visible || !this.k.visible || 0 >= c || 0 >= h || b >= this.b.width || f >= this.b.height) jQuery(this.G).hide();
        else {
            1 > b && (b = 1);
            1 > f && (f = 1);
            c >= this.b.width && (c = this.b.width - 1);
            h >= this.b.height && (h = this.b.height - 1);
            jQuery(this.G).show();
            var m = b + jQuery(this.b.canvas).offset().left,
                g = f + jQuery(this.b.canvas).offset().top;
            jQuery(this.G).offset({
                left: m,
                top: g
            });
            jQuery(this.G).width(c - b);
            jQuery(this.G).height(h - f);
            this.G.width = Math.round(this.G.width);
            this.G.height = Math.round(this.G.height);
            this.G.x = Math.round(this.G.x);
            this.G.y = Math.round(this.G.y)
        }
    };
    r.Mc = q();
    r.pc = q();
    h.e = {};
    r = h.e;
    r.Xq = function (b) {
        return this.Mi === b
    };
    r.$q = function (b) {
        return this.G.document.body.innerHTML === b
    };
    r.Cn = v(!0);
    r.En = v(!0);
    r.Hn = v(!0);
    r.kt = function () {
        return this.G == document.activeElement ? !0 : !1
    };
    h.d = {};
    r = h.d;
    r.vs = function (b) {
        this.Mi = this.G.src = b;
        this.G.onload = function (b) {
            return function () {
                b.b.trigger(Wb.prototype.e.Hn, b)
            }
        }(this)
    };
    r.Oa = function (b) {
        this.visible = 0 !== b
    };
    r.ts = function (b) {
        this.G.style.cssText = b
    };
    r.un = function () {
        this.G.contentWindow.history.forward()
    };
    r.sr = function () {
        this.G.contentWindow.history.back()
    };
    r.cs = function () {
        this.G.src += " "
    };
    r.Ft = function () {
        this.G.focus()
    };
    h.j = {};
    h = h.j;
    h.innerHTML = function (b) {
        b.H(jQuery(this.G).contents().find("*").html())
    };
    h.cr = function (b) {
        b.H(this.Mi)
    };
    h.rr = function (b) {
        b.H(this.G.style.cssText)
    }
})();

function W(h) {
    this.b = h
}(function () {
    function h() {
        if (0 === this.Ni.length) {
            var b = document.createElement("canvas");
            b.width = this.width;
            b.height = this.height;
            var c = b.getContext("2d");
            this.pf ? c.drawImage(this.wb, this.hf, this.jf, this.width, this.height, 0, 0, this.width, this.height) : c.drawImage(this.wb, 0, 0, this.width, this.height);
            this.Ni = b.toDataURL("image/png")
        }
        return this.Ni
    }
    function r() {}
    function b() {}
    var f = W.prototype;
    f.Ha = function (b) {
        this.ya = b;
        this.b = b.b
    };
    var c = f.Ha.prototype;
    c.ea = function () {
        if (!this.U) {
            var b, c, a, g, d, f, l, n, m;
            this.Kc = [];
            this.ih = !1;
            b = 0;
            for (c = this.Mb.length; b < c; b++) {
                d = this.Mb[b];
                l = {};
                l.name = d[0];
                l.speed = d[1];
                l.loop = d[2];
                l.Yj = d[3];
                l.Ph = d[4];
                l.Em = d[5];
                l.Y = d[6];
                l.frames = [];
                a = 0;
                for (g = d[7].length; a < g; a++) f = d[7][a], n = {}, n.an = f[0], n.bn = f[1], n.hf = f[2], n.jf = f[3], n.width = f[4], n.height = f[5], n.duration = f[6], n.Sb = f[7], n.Tb = f[8], n.hj = f[9], n.Gh = f[10], n.Fm = f[11], n.pf = 0 !== n.width, n.Ni = "", n.bt = h, m = {
                    left: 0,
                    top: 0,
                    right: 1,
                    bottom: 1
                }, n.ek = m, n.he = null, (m = this.b.Xo(f[0])) ? n.wb = m : (n.wb = new Image, n.wb.idtkLoadDisposed = !0, n.wb.src = f[0], n.wb.ro =
                f[0], n.wb.qo = f[1], n.wb.ko = null, this.b.ge.push(n.wb)), l.frames.push(n), this.Kc.push(n);
                this.Mb[b] = l
            }
        }
    };
    c.Fq = function () {
        var b, c, a;
        b = 0;
        for (c = this.g.length; b < c; b++) a = this.g[b], a.Og = a.Ac.he
    };
    c.Mj = function () {
        if (!this.U) {
            var b, c, a;
            b = 0;
            for (c = this.Kc.length; b < c; ++b) a = this.Kc[b], a.wb.ko = null, a.he = null
        }
    };
    c.rm = function () {
        if (!this.U && this.g.length) {
            var b, c, a;
            b = 0;
            for (c = this.Kc.length; b < c; ++b) a = this.Kc[b], a.he = this.b.ca.Qp(a.wb, !1, this.b.pa, a.Fm);
            this.Fq()
        }
    };
    c.Rp = function () {
        if (!this.U && !this.ih && this.b.ca) {
            var b, c, a;
            b = 0;
            for (c = this.Kc.length; b < c; ++b) a = this.Kc[b], a.he = this.b.ca.Qp(a.wb, !1, this.b.pa, a.Fm);
            this.ih = !0
        }
    };
    c.mn = function () {
        if (!this.U && !this.g.length && this.ih) {
            var b, c, a;
            b = 0;
            for (c = this.Kc.length; b < c; ++b) a = this.Kc[b], this.b.ca.deleteTexture(a.he);
            this.ih = !1
        }
    };
    var t = [];
    c.Hm = function (b) {
        var c, a, g;
        c = t.length = 0;
        for (a = this.Kc.length; c < a; ++c) g = this.Kc[c].wb, -1 === t.indexOf(g) && (b.drawImage(g, 0, 0), t.push(g))
    };
    f.Ba = function (b) {
        this.type = b;
        this.b = b.b;
        b = this.type.Mb[0].frames[0].Gh;
        this.vc ? this.Vc.wg(b) : this.Vc =
        new Wa(b)
    };
    var m = f.Ba.prototype;
    m.ea = function () {
        this.visible = 0 === this.D[0];
        this.ij = this.rj = !1;
        this.Af = 0 !== this.D[3];
        1 === this.type.Mb.length && 1 === this.type.Mb[0].frames.length || 0 === this.type.Mb[0].speed || (this.b.zg(this), this.rj = !0);
        this.Ia = this.Bl(this.D[1]) || this.type.Mb[0];
        this.F = this.D[2];
        0 > this.F && (this.F = 0);
        this.F >= this.Ia.frames.length && (this.F = this.Ia.frames.length - 1);
        var b = this.Ia.frames[this.F];
        this.Vc.wg(b.Gh);
        this.Sb = b.Sb;
        this.Tb = b.Tb;
        this.Cf = this.Ia.speed;
        this.vc ? this.Uc.reset() : this.Uc =
        new Ua;
        this.nd = this.Uc.Ma;
        this.le = !0;
        this.hd = 0;
        this.ke = !0;
        this.Hi = this.Ok = "";
        this.po = 0;
        this.Jg = -1;
        this.type.Rp();
        var c, a, g, d, f, h, l, b = 0;
        for (c = this.type.Mb.length; b < c; b++) for (d = this.type.Mb[b], a = 0, g = d.frames.length; a < g; a++) f = d.frames[a], 0 === f.width && (f.width = f.wb.width, f.height = f.wb.height), f.pf && (l = f.wb, h = f.ek, h.left = f.hf / l.width, h.top = f.jf / l.height, h.right = (f.hf + f.width) / l.width, h.bottom = (f.jf + f.height) / l.height, 0 === f.hf && 0 === f.jf && f.width === l.width && f.height === l.height && (f.pf = !1));
        this.Ac = this.Ia.frames[this.F];
        this.Og = this.Ac.he
    };
    m.Zb = function () {
        var b = {
            a: this.Ia.Y,
            f: this.F,
            cas: this.Cf,
            fs: this.nd,
            ar: this.hd,
            at: this.Uc.Ma
        };
        this.le || (b.ap = this.le);
        this.ke || (b.af = this.ke);
        return b
    };
    m.Gc = function (b) {
        var c = this.bp(b.a);
        c && (this.Ia = c);
        this.F = b.f;
        0 > this.F && (this.F = 0);
        this.F >= this.Ia.frames.length && (this.F = this.Ia.frames.length - 1);
        this.Cf = b.cas;
        this.nd = b.fs;
        this.hd = b.ar;
        this.Uc.reset();
        this.Uc.Ma = b.at;
        this.le = b.hasOwnProperty("ap") ? b.ap : !0;
        this.ke = b.hasOwnProperty("af") ? b.af : !0;
        this.Ac = this.Ia.frames[this.F];
        this.Og =
        this.Ac.he;
        this.Vc.wg(this.Ac.Gh);
        this.Sb = this.Ac.Sb;
        this.Tb = this.Ac.Tb
    };
    m.vi = function (b) {
        this.F = b ? 0 : this.Ia.frames.length - 1;
        this.le = !1;
        this.Ok = this.Ia.name;
        this.ij = !0;
        this.b.trigger(W.prototype.e.An, this);
        this.b.trigger(W.prototype.e.wk, this);
        this.ij = !1;
        this.hd = 0
    };
    m.dt = function () {
        return this.Uc.Ma
    };
    m.qb = function () {
        this.Uc.add(this.b.$i(this));
        this.Hi.length && this.vo();
        0 <= this.Jg && this.rl();
        var b = this.Uc.Ma,
            c = this.Ia,
            a = c.frames[this.F],
            g = a.duration / this.Cf;
        this.le && b >= this.nd + g && (this.ke ? this.F++ : this.F--, this.nd += g, this.F >= c.frames.length && (c.Em ? (this.ke = !1, this.F = c.frames.length - 2) : c.loop ? this.F = c.Ph : (this.hd++, this.hd >= c.Yj ? this.vi(!1) : this.F = c.Ph)), 0 > this.F && (c.Em ? (this.F = 1, this.ke = !0, c.loop || (this.hd++, this.hd >= c.Yj && this.vi(!0))) : c.loop ? this.F = c.Ph : (this.hd++, this.hd >= c.Yj ? this.vi(!0) : this.F = c.Ph)), 0 > this.F ? this.F = 0 : this.F >= c.frames.length && (this.F = c.frames.length - 1), b > this.nd + c.frames[this.F].duration / this.Cf && (this.nd = b), b = c.frames[this.F], this.vf(a, b), this.b.wa = !0)
    };
    m.Bl = function (b) {
        var c, a, g;
        c = 0;
        for (a = this.type.Mb.length; c < a; c++) if (g = this.type.Mb[c], ab(g.name, b)) return g;
        return null
    };
    m.bp = function (b) {
        var c, a, g;
        c = 0;
        for (a = this.type.Mb.length; c < a; c++) if (g = this.type.Mb[c], g.Y === b) return g;
        return null
    };
    m.vo = function () {
        var b = this.Ia.frames[this.F],
            c = this.Bl(this.Hi);
        this.Hi = "";
        !c || ab(c.name, this.Ia.name) && this.le || (this.Ia = c, this.Cf = c.speed, 0 > this.F && (this.F = 0), this.F >= this.Ia.frames.length && (this.F = this.Ia.frames.length - 1), 1 === this.po && (this.F = 0), this.le = !0, this.nd = this.Uc.Ma, this.ke = !0, this.vf(b, this.Ia.frames[this.F]), this.b.wa = !0)
    };
    m.rl = function () {
        var b = this.Ia.frames[this.F],
            c = this.F;
        this.F = la(this.Jg);
        0 > this.F && (this.F = 0);
        this.F >= this.Ia.frames.length && (this.F = this.Ia.frames.length - 1);
        c !== this.F && (this.vf(b, this.Ia.frames[this.F]), this.nd = this.Uc.Ma, this.b.wa = !0);
        this.Jg = -1
    };
    m.vf = function (b, c) {
        var a = b.width,
            g = b.height,
            d = c.width,
            f = c.height;
        a != d && (this.width *= d / a);
        g != f && (this.height *= f / g);
        this.Sb = c.Sb;
        this.Tb = c.Tb;
        this.Vc.wg(c.Gh);
        this.ab();
        this.Ac = c;
        this.Og = c.he;
        a = 0;
        for (g =
        this.R.length; a < g; a++) d = this.R[a], d.tm && d.tm(b, c);
        this.b.trigger(W.prototype.e.vf, this)
    };
    m.Mc = function (b) {
        b.globalAlpha = this.opacity;
        var c = this.Ac,
            a = c.pf,
            g = c.wb,
            d = this.x,
            f = this.y,
            h = this.width,
            l = this.height;
        if (0 === this.m && 0 <= h && 0 <= l) d -= this.Sb * h, f -= this.Tb * l, this.b.Xd && (d = d + 0.5 | 0, f = f + 0.5 | 0), a ? b.drawImage(g, c.hf, c.jf, c.width, c.height, d, f, h, l) : b.drawImage(g, d, f, h, l);
        else {
            this.b.Xd && (d = d + 0.5 | 0, f = f + 0.5 | 0);
            b.save();
            var m = 0 < h ? 1 : -1,
                r = 0 < l ? 1 : -1;
            b.translate(d, f);
            1 === m && 1 === r || b.scale(m, r);
            b.rotate(this.m * m * r);
            d = 0 - this.Sb * ga(h);
            f = 0 - this.Tb * ga(l);
            a ? b.drawImage(g, c.hf, c.jf, c.width, c.height, d, f, ga(h), ga(l)) : b.drawImage(g, d, f, ga(h), ga(l));
            b.restore()
        }
    };
    m.pc = function (b) {
        b.Hc(this.Og);
        b.ug(this.opacity);
        var c = this.Ac,
            a = this.ne;
        if (this.b.Xd) {
            var g = (this.x + 0.5 | 0) - this.x,
                d = (this.y + 0.5 | 0) - this.y;
            c.pf ? b.Ge(a.kb + g, a.lb + d, a.wc + g, a.xc + d, a.mc + g, a.nc + d, a.kc + g, a.lc + d, c.ek) : b.Uj(a.kb + g, a.lb + d, a.wc + g, a.xc + d, a.mc + g, a.nc + d, a.kc + g, a.lc + d)
        } else c.pf ? b.Ge(a.kb, a.lb, a.wc, a.xc, a.mc, a.nc, a.kc, a.lc, c.ek) : b.Uj(a.kb, a.lb, a.wc, a.xc, a.mc, a.nc, a.kc, a.lc)
    };
    m.ip = function (b) {
        var c = this.Ac,
            a, g;
        a = 0;
        for (g = c.hj.length; a < g; a++) if (ab(b, c.hj[a][0])) return a;
        return -1
    };
    m.Hf = function (b, c) {
        var a = this.Ac,
            g = a.hj,
            d;
        d = z(b) ? this.ip(b) : b - 1;
        d = la(d);
        if (0 > d || d >= g.length) return c ? this.x : this.y;
        var f = (g[d][1] - a.Sb) * this.width,
            g = g[d][2],
            g = (g - a.Tb) * this.height,
            a = Math.cos(this.m);
        d = Math.sin(this.m);
        var h = f * a - g * d,
            g = g * a + f * d,
            f = h + this.x,
            g = g + this.y;
        return c ? f : g
    };
    var g = new ca,
        l = !1;
    c.finish = function (b) {
        if (l) {
            if (b) {
                var c = this.b.nb().Gb.Qc;
                b = null.ua();
                var a = g.Ag(),
                    f, d;
                if (b.za) {
                    b.za = !1;
                    b.g.length = a.length;
                    f = 0;
                    for (d = a.length; f < d; f++) b.g[f] = a[f];
                    if (c) for (f = b.na.length = 0, d = null.g.length; f < d; f++) a = null.g[f], g.contains(a) || b.na.push(a)
                } else if (c) for (c = b.g.length, b.g.length = c + a.length, f = 0, d = a.length; f < d; f++) b.g[c + f] = a[f], xa(b.na, a[f]);
                else wa(b.g, a);
                null.Kd()
            }
            g.clear();
            l = !1
        }
    };
    r.prototype.ka = function (b, c) {
        return Qb(this.F, b, c)
    };
    r.prototype.wk = function (b) {
        return ab(this.Ok, b)
    };
    r.prototype.An = v(!0);
    r.prototype.vf = v(!0);
    f.e = new r;
    b.prototype.la = function (b, c, a) {
        if (b && c && (c = this.b.ql(b, c, this.Hf(a, !0), this.Hf(a, !1)))) {
            "undefined" !== typeof c.m && (c.m = this.m, c.ab());
            this.b.Nc++;

            var g, d, f;
            this.b.trigger(Object.getPrototypeOf(b.ya).e.pi, c);
            if (c.sc) for (g = 0, d = c.siblings.length; g < d; g++) f = c.siblings[g], this.b.trigger(Object.getPrototypeOf(f.type.ya).e.pi, f);
            this.b.Nc--;

            g = this.b.fp();
            a = !1;
            if (ea(g.ba.Ek) || g.ba.Ek < this.b.te) a = !0, g.ba.Ek = this.b.te;
            if (b != this.type && (b = b.ua(), b.za = !1, a ? (b.g.length = 1, b.g[0] = c) : b.g.push(c), c.sc)) for (g = 0, d = c.siblings.length; g < d; g++) f = c.siblings[g], b = f.type.ua(), b.za = !1, a ? (b.g.length = 1, b.g[0] = f) : b.g.push(f)
        }
    };
    b.prototype.W = function (b) {
        this.Jg = b;
        this.rj || (this.b.zg(this), this.rj = !0);
        this.ij || this.rl()
    };
    f.d = new b;
    f.j = new(q())
})();

function Y(h) {
    this.b = h
}(function () {
    function h() {
        return m.length ? m.pop() : {}
    }
    function r(b) {
        var c, e;
        c = 0;
        for (e = b.length; c < e; c++) m.push(b[c]);
        b.length = 0
    }
    function b() {}
    var f = Y.prototype;
    f.ea = function () {
        f.d.Qn = function (b) {
            this.width !== b && (this.width = b, this.Ie = !0, this.ab())
        }
    };
    f.Ha = function (b) {
        this.ya = b;
        this.b = b.b
    };
    var c = f.Ha.prototype;
    c.ea = q();
    c.Mj = function () {
        if (!this.U) {
            var b, c, e;
            b = 0;
            for (c = this.g.length; b < c; b++) e = this.g[b], e.ed = null, e.Ce = null, e.Wb = null
        }
    };
    f.Ba = function (b) {
        this.type = b;
        this.b = b.b;
        this.vc ? this.Vd.length = 0 : this.Vd = [];
        this.Ie = !0
    };
    c = f.Ba.prototype;
    c.ea = function () {
        this.text = this.D[0];
        this.visible = 0 === this.D[1];
        this.font = this.D[2];
        this.color = this.D[3];
        this.gh = this.D[4];
        this.di = this.D[5];
        this.rk = 0 === this.D[7];
        this.wj = this.sh = this.width;
        this.qh = this.height;
        this.Aj = this.D[8];
        this.Zg = this.Te = "";
        this.Zm = this.$m = this.ng = 0;
        this.$p();
        this.Wb = this.Ce = this.ed = null;
        this.im = !1;
        this.$f = this.b.Cd;
        this.vc ? this.nf.set(0, 0, 1, 1) : this.nf = new ra(0, 0, 1, 1);
        this.b.ca && this.b.zg(this)
    };
    c.$p = function () {
        var b = this.font.split(" "),
            c;
        for (c =
        0; c < b.length; c++) if ("pt" === b[c].substr(b[c].length - 2, 2)) {
            this.ng = parseInt(b[c].substr(0, b[c].length - 2));
            this.Tj = Math.ceil(96 * (this.ng / 72)) + 4;
            0 < c && (this.Zg = b[c - 1]);
            this.Te = b[c + 1];
            for (c += 2; c < b.length; c++) this.Te += " " + b[c];
            break
        }
    };
    c.Zb = function () {
        return {
            t: this.text,
            f: this.font,
            c: this.color,
            ha: this.gh,
            va: this.di,
            wr: this.rk,
            lho: this.Aj,
            fn: this.Te,
            fs: this.Zg,
            ps: this.ng,
            pxh: this.Tj,
            tw: this.$m,
            th: this.Zm,
            lrt: this.$f
        }
    };
    c.Gc = function (b) {
        this.text = b.t;
        this.font = b.f;
        this.color = b.c;
        this.gh = b.ha;
        this.di = b.va;
        this.rk =
        b.wr;
        this.Aj = b.lho;
        this.Te = b.fn;
        this.Zg = b.fs;
        this.ng = b.ps;
        this.Tj = b.pxh;
        this.$m = b.tw;
        this.Zm = b.th;
        this.$f = b.lrt;
        this.Ie = !0;
        this.wj = this.sh = this.width;
        this.qh = this.height
    };
    c.qb = function () {
        if (this.b.ca && this.Wb && 300 <= this.b.Cd - this.$f) {
            var b = this.k;
            this.Kb();
            var c = this.Db;
            if (c.right < b.ac || c.bottom < b.ec || c.left > b.cc || c.top > b.$b) this.b.ca.deleteTexture(this.Wb), this.ed = this.Ce = this.Wb = null
        }
    };
    c.kf = function () {
        this.ed = this.Ce = null;
        this.b.ca && this.Wb && this.b.ca.deleteTexture(this.Wb);
        this.Wb = null
    };
    c.Lt = function () {
        this.font =
        this.Zg + " " + this.ng.toString() + "pt " + this.Te;
        this.Ie = !0;
        this.b.wa = !0
    };
    c.Mc = function (b, c) {
        b.font = this.font;
        b.textBaseline = "top";
        b.fillStyle = this.color;
        b.globalAlpha = c ? 1 : this.opacity;
        var e = 1;
        c && (e = this.k.Rb(), b.save(), b.scale(e, e));
        if (this.Ie || this.width !== this.wj) this.type.ya.Un(this.text, this.Vd, b, this.width, this.rk), this.Ie = !1, this.wj = this.width;
        this.Kb();
        var e = c ? 0 : this.ne.kb,
            f = c ? 0 : this.ne.lb;
        this.b.Xd && (e = e + 0.5 | 0, f = f + 0.5 | 0);
        0 === this.m || c || (b.save(), b.translate(e, f), b.rotate(this.m), f = e = 0);
        var a =
        f + this.height,
            h = this.Tj,
            h = h + this.Aj,
            d, m;
        1 === this.di ? f += Math.max(this.height / 2 - this.Vd.length * h / 2, 0) : 2 === this.di && (f += Math.max(this.height - this.Vd.length * h - 2, 0));
        for (m = 0; m < this.Vd.length && !(d = e, 1 === this.gh ? d = e + (this.width - this.Vd[m].width) / 2 : 2 === this.gh && (d = e + (this.width - this.Vd[m].width)), b.fillText(this.Vd[m].text, d, f), f += h, f >= a - h); m++);
        (0 !== this.m || c) && b.restore();
        this.$f = this.b.Cd
    };
    c.pc = function (b) {
        if (!(1 > this.width || 1 > this.height)) {
            var c = this.Ie || this.im;
            this.im = !1;
            var e = this.k.Rb(),
                f = this.k.Ib(),
                a = this.nf,
                h = e * this.width,
                d = e * this.height,
                m = Math.ceil(h),
                r = Math.ceil(d),
                n = this.b.T / 2,
                p = this.b.S / 2;
            this.Ce || (this.ed = document.createElement("canvas"), this.ed.width = m, this.ed.height = r, this.sh = m, this.qh = r, c = !0, this.Ce = this.ed.getContext("2d"));
            if (m !== this.sh || r !== this.qh) this.ed.width = m, this.ed.height = r, this.Wb && (b.deleteTexture(this.Wb), this.Wb = null), c = !0;
            c && (this.Ce.clearRect(0, 0, m, r), this.Mc(this.Ce, !0), this.Wb || (this.Wb = b.Md(m, r, this.b.pa, this.b.Sd)), b.Mt(this.ed, this.Wb, this.b.Sd));
            this.sh = m;
            this.qh =
            r;
            b.Hc(this.Wb);
            b.ug(this.opacity);
            b.xd();
            b.translate(-n, -p);
            b.Fd();
            var t = this.ne,
                M = this.b.devicePixelRatio;
            this.b.devicePixelRatio = 1;
            var c = this.k.Fa(t.kb, t.lb, !0, !0),
                n = this.k.Fa(t.kb, t.lb, !1, !0),
                p = this.k.Fa(t.wc, t.xc, !0, !0),
                J = this.k.Fa(t.wc, t.xc, !1, !0),
                R = this.k.Fa(t.mc, t.nc, !0, !0),
                L = this.k.Fa(t.mc, t.nc, !1, !0),
                y = this.k.Fa(t.kc, t.lc, !0, !0),
                t = this.k.Fa(t.kc, t.lc, !1, !0);
            this.b.devicePixelRatio = M;
            if (this.b.Xd || 0 === this.m && 0 === f) var M = (c + 0.5 | 0) - c,
                u = (n + 0.5 | 0) - n,
                c = c + M,
                n = n + u,
                p = p + M,
                J = J + u,
                R = R + M,
                L = L + u,
                y = y + M,
                t = t + u;
            0 === this.m && 0 === f ? (p = c + m, J = n, R = p, L = n + r, y = c, t = L, a.right = 1, a.bottom = 1) : (a.right = h / m, a.bottom = d / r);
            b.Ge(c, n, p, J, R, L, y, t, a);
            b.xd();
            b.scale(e, e);
            b.Mm(-this.k.Ib());
            b.translate((this.k.ac + this.k.cc) / -2, (this.k.ec + this.k.$b) / -2);
            b.Fd();
            this.$f = this.b.Cd
        }
    };
    var t = [];
    f.Sn = function (b) {
        t.length = 0;
        for (var c = "", e, f = 0; f < b.length;) if (e = b.charAt(f), "\n" === e) c.length && (t.push(c), c = ""), t.push("\n"), ++f;
        else if (" " === e || "\t" === e || "-" === e) {
            do c += b.charAt(f), f++;
            while (f < b.length && (" " === b.charAt(f) || "\t" === b.charAt(f)));
            t.push(c);
            c = ""
        } else f < b.length && (c += e, f++);
        c.length && t.push(c)
    };
    var m = [];
    f.Un = function (b, c, e, f, a) {
        if (b && b.length) if (2 >= f) r(c);
        else {
            if (100 >= b.length && -1 === b.indexOf("\n")) {
                var k = e.measureText(b).width;
                if (k <= f) {
                    r(c);
                    c.push(h());
                    c[0].text = b;
                    c[0].width = k;
                    return
                }
            }
            this.Vn(b, c, e, f, a)
        } else r(c)
    };
    f.Vn = function (b, c, e, f, a) {
        a && (this.Sn(b), b = t);
        var k = "",
            d, r, A, n = 0;
        for (A = 0; A < b.length; A++)"\n" === b[A] ? (n >= c.length && c.push(h()), r = c[n], r.text = k, r.width = e.measureText(k).width, n++, k = "") : (d = k, k += b[A], r = e.measureText(k).width, r >= f && (n >= c.length && c.push(h()), r = c[n], r.text = d, r.width = e.measureText(d).width, n++, k = b[A], a || " " !== k || (k = "")));
        k.length && (n >= c.length && c.push(h()), r = c[n], r.text = k, r.width = e.measureText(k).width, n++);
        for (A = n; A < c.length; A++) m.push(c[A]);
        c.length = n
    };
    f.e = new(q());
    b.prototype.sb = function (b) {
        fa(b) && 1E9 > b && (b = Math.round(1E10 * b) / 1E10);
        b = b.toString();
        this.text !== b && (this.text = b, this.Ie = !0, this.b.wa = !0)
    };
    f.d = new b;
    f.j = new(q())
})();

function Z(h) {
    this.b = h
}(function () {
    function h(a) {
        g = a.x;
        l = a.y;
        e = a.z
    }
    function r(b) {
        w = b.x;
        a = b.y;
        k = b.z
    }
    function b() {}
    function f() {}
    var c = Z.prototype;
    c.Ha = function (a) {
        this.ya = a;
        this.b = a.b
    };
    c.Ha.prototype.ea = q();
    c.Ba = function (a) {
        this.type = a;
        this.b = a.b;
        this.touches = [];
        this.Ej = !1
    };
    var t = c.Ba.prototype,
        m = {
            left: 0,
            top: 0
        };
    t.Ef = function (a) {
        var b, c;
        b = 0;
        for (c = this.touches.length; b < c; b++) if (this.touches[b].id === a) return b;
        return -1
    };
    var g = 0,
        l = 0,
        e = 0,
        w = 0,
        a = 0,
        k = 0;
    t.ea = function () {
        this.Lp = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
        this.fe = this.Li = this.Ki = this.Kk = this.Jk = this.Ik = this.ao = this.$n = this.Zn = this.kg = this.jg = this.ig = 0;
        this.Kq = 0 !== this.D[0];
        var a = 0 < this.b.Qb ? document : this.b.canvas,
            b = document;
        this.b.yb ? b = a = window.Canvas : this.b.Fc && (b = a = window);
        var c = this;
        window.navigator.pointerEnabled ? (a.addEventListener("pointerdown", function (a) {
            c.qm(a)
        }, !1), a.addEventListener("pointermove", function (a) {
            c.pm(a)
        }, !1), b.addEventListener("pointerup", function (a) {
            c.Dh(a)
        }, !1), b.addEventListener("pointercancel", function (a) {
            c.Dh(a)
        }, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function (a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function (a) {
            a.preventDefault()
        }, !1), this.b.canvas.addEventListener("gesturehold", function (a) {
            a.preventDefault()
        }, !1), document.addEventListener("gesturehold", function (a) {
            a.preventDefault()
        }, !1))) : window.navigator.msPointerEnabled ? (a.addEventListener("MSPointerDown", function (a) {
            c.qm(a)
        }, !1), a.addEventListener("MSPointerMove", function (a) {
            c.pm(a)
        }, !1), b.addEventListener("MSPointerUp", function (a) {
            c.Dh(a)
        }, !1), b.addEventListener("MSPointerCancel", function (a) {
            c.Dh(a)
        }, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function (a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function (a) {
            a.preventDefault()
        }, !1))) : (a.addEventListener("touchstart", function (a) {
            c.vm(a)
        }, !1), a.addEventListener("touchmove", function (a) {
            c.um(a)
        }, !1), b.addEventListener("touchend", function (a) {
            c.Nj(a)
        }, !1), b.addEventListener("touchcancel", function (a) {
            c.Nj(a)
        }, !1));
        if (this.Lp) {
            var e =

            function (a) {
                a = a.reading;
                c.Ik = a.accelerationX;
                c.Jk = a.accelerationY;
                c.Kk = a.accelerationZ
            },
                f = function (a) {
                    a = a.reading;
                    c.ig = a.yawDegrees;
                    c.jg = a.pitchDegrees;
                    c.kg = a.rollDegrees
                },
                g = Windows.Devices.Sensors.Accelerometer.getDefault();
            g && (g.reportInterval = Math.max(g.minimumReportInterval, 16), g.addEventListener("readingchanged", e));
            var k = Windows.Devices.Sensors.Inclinometer.getDefault();
            k && (k.reportInterval = Math.max(k.minimumReportInterval, 16), k.addEventListener("readingchanged", f));
            document.addEventListener("visibilitychange", function () {
                document.hidden || document.msHidden ? (g && g.removeEventListener("readingchanged", e), k && k.removeEventListener("readingchanged", f)) : (g && g.addEventListener("readingchanged", e), k && k.addEventListener("readingchanged", f))
            }, !1)
        } else window.addEventListener("deviceorientation", function (a) {
            c.ig = a.alpha || 0;
            c.jg = a.beta || 0;
            c.kg = a.gamma || 0
        }, !1), window.addEventListener("devicemotion", function (a) {
            a.accelerationIncludingGravity && (c.Zn = a.accelerationIncludingGravity.x, c.$n = a.accelerationIncludingGravity.y, c.ao = a.accelerationIncludingGravity.z);
            a.acceleration && (c.Ik = a.acceleration.x, c.Jk = a.acceleration.y, c.Kk = a.acceleration.z)
        }, !1);
        this.Kq && !this.b.Ya && (jQuery(document).mousemove(function (a) {
            c.Xp(a)
        }), jQuery(document).mousedown(function (a) {
            c.Wp(a)
        }), jQuery(document).mouseup(function (a) {
            c.Yp(a)
        }));
        this.b.Xe && !this.b.yb && AppMobi.accelerometer.watchAcceleration(h, {
            frequency: 40,
            adjustForRotation: !0
        });
        this.b.Ye && navigator.accelerometer.watchAcceleration(r, null, {
            frequency: 40
        });
        this.b.Aq(this)
    };
    t.pm = function (a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && a.preventDefault();
            var b = this.Ef(a.pointerId),
                c = Ta();
            if (0 <= b) {
                var e = this.b.Ya ? m : jQuery(this.b.canvas).offset(),
                    b = this.touches[b];
                2 > c - b.time || (b.rh = b.time, b.xj = b.x, b.yj = b.y, b.time = c, b.x = a.pageX - e.left, b.y = a.pageY - e.top)
            }
        }
    };
    t.qm = function (a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && a.preventDefault();
            var b = this.b.Ya ? m : jQuery(this.b.canvas).offset(),
                c = a.pageX - b.left,
                b = a.pageY - b.top,
                e = Ta();
            this.fe =
            this.touches.length;
            this.touches.push({
                time: e,
                x: c,
                y: b,
                rh: e,
                xj: c,
                yj: b,
                id: a.pointerId,
                hk: this.fe
            });
            this.b.ad = !0;
            this.b.trigger(Z.prototype.e.Bk, this);
            this.b.trigger(Z.prototype.e.Dg, this);
            this.Ki = c;
            this.Li = b;
            this.b.trigger(Z.prototype.e.K, this);
            this.b.ad = !1
        }
    };
    t.Dh = function (a) {
        a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType && (a.preventDefault && a.preventDefault(), a = this.Ef(a.pointerId), this.fe = 0 <= a ? this.touches[a].hk : -1, this.b.ad = !0, this.b.trigger(Z.prototype.e.Ak, this), this.b.trigger(Z.prototype.e.Ck, this), this.b.ad = !1, 0 <= a && this.touches.splice(a, 1))
    };
    t.um = function (a) {
        a.preventDefault && a.preventDefault();
        var b = Ta(),
            c, e, f, g;
        c = 0;
        for (e = a.changedTouches.length; c < e; c++) if (f = a.changedTouches[c], g = this.Ef(f.identifier), 0 <= g) {
            var h = this.b.Ya ? m : jQuery(this.b.canvas).offset();
            g = this.touches[g];
            2 > b - g.time || (g.rh = g.time, g.xj = g.x, g.yj = g.y, g.time = b, g.x = f.pageX - h.left, g.y = f.pageY - h.top)
        }
    };
    t.vm = function (a) {
        a.preventDefault && a.preventDefault();
        var b = this.b.Ya ? m : jQuery(this.b.canvas).offset(),
            c = Ta();
        this.b.ad = !0;
        var e, f, g, h;
        e = 0;
        for (f = a.changedTouches.length; e < f; e++) if (g = a.changedTouches[e], h = this.Ef(g.identifier), -1 === h) {
            h = g.pageX - b.left;
            var k = g.pageY - b.top;
            this.fe = this.touches.length;
            this.touches.push({
                time: c,
                x: h,
                y: k,
                rh: c,
                xj: h,
                yj: k,
                id: g.identifier,
                hk: this.fe
            });
            this.b.trigger(Z.prototype.e.Bk, this);
            this.b.trigger(Z.prototype.e.Dg, this);
            this.Ki = h;
            this.Li = k;
            this.b.trigger(Z.prototype.e.K, this)
        }
        this.b.ad = !1
    };
    t.Nj = function (a) {
        a.preventDefault && a.preventDefault();
        this.b.ad = !0;
        var b, c, e;
        b = 0;
        for (c = a.changedTouches.length; b < c; b++) e = a.changedTouches[b], e = this.Ef(e.identifier), 0 <= e && (this.fe = this.touches[e].hk, this.b.trigger(Z.prototype.e.Ak, this), this.b.trigger(Z.prototype.e.Ck, this), this.touches.splice(e, 1));
        this.b.ad = !1
    };
    t.Zs = function () {
        return this.b.Xe && 0 === this.ig && 0 !== e ? 90 * e : this.b.Ye && 0 === this.ig && 0 !== k ? 90 * k : this.ig
    };
    t.$s = function () {
        return this.b.Xe && 0 === this.jg && 0 !== l ? -90 * l : this.b.Ye && 0 === this.jg && 0 !== a ? -90 * a : this.jg
    };
    t.ct = function () {
        return this.b.Xe && 0 === this.kg && 0 !== g ? 90 * g : this.b.Ye && 0 === this.kg && 0 !== w ? 90 * w : this.kg
    };
    t.Wp = function (a) {
        a.preventDefault && this.b.fh && a.preventDefault();
        this.vm({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        });
        this.Ej = !0
    };
    t.Xp = function (a) {
        a.preventDefault && this.b.fh && a.preventDefault();
        this.Ej && this.um({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        })
    };
    t.Yp = function (a) {
        a.preventDefault && this.b.fh && a.preventDefault();
        this.b.fh = !0;
        this.Nj({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        });
        this.Ej = !1
    };
    t.ik = function () {
        var a, b, c, e = Ta();
        a = 0;
        for (b = this.touches.length; a < b; a++) c = this.touches[a], c.time <= e - 50 && (c.rh = e)
    };
    b.prototype.Dg = v(!0);
    b.prototype.Ck = v(!0);
    b.prototype.K = function (a) {
        return a ? this.b.yq(a, this.Ki, this.Li) : !1
    };
    b.prototype.Bk = function (a) {
        a = Math.floor(a);
        return a === this.fe
    };
    b.prototype.Ak = function (a) {
        a = Math.floor(a);
        return a === this.fe
    };
    c.e = new b;
    f.prototype.Wn = function (a, b) {
        if (this.touches.length) {
            var c, e, f, g, h;
            ea(b) ? (c = this.b.If(0), e = c.scale, f = c.Hd, g = c.ud, h = c.m, c.scale = this.b.ra.scale, c.Hd = 1, c.ud = 1, c.m = this.b.ra.m, a.O(c.Nb(this.touches[0].x, this.touches[0].y, !0)), c.scale = e, c.Hd = f, c.ud = g, c.m = h) : (c = fa(b) ? this.b.If(b) : this.b.cj(b)) ? a.O(c.Nb(this.touches[0].x, this.touches[0].y, !0)) : a.O(0)
        } else a.O(0)
    };
    f.prototype.Xn = function (a, b) {
        if (this.touches.length) {
            var c, e, f, g, h;
            ea(b) ? (c = this.b.If(0), e = c.scale, f = c.Hd, g = c.vd, h = c.m, c.scale = this.b.ra.scale, c.Hd = 1, c.vd = 1, c.m = this.b.ra.m, a.O(c.Nb(this.touches[0].x, this.touches[0].y, !1)), c.scale = e, c.Hd = f, c.vd = g, c.m = h) : (c = fa(b) ? this.b.If(b) : this.b.cj(b)) ? a.O(c.Nb(this.touches[0].x, this.touches[0].y, !1)) : a.O(0)
        } else a.O(0)
    };
    c.j = new f
})();

function Xb(h) {
    this.b = h
}(function () {
    function h() {}
    function r() {}
    function b() {}
    var f = Xb.prototype;
    f.Ha = function (b) {
        this.ya = b;
        this.b = b.b
    };
    f.Ha.prototype.ea = q();
    f.Ba = function (b) {
        this.type = b;
        this.b = b.b
    };
    var c = f.Ba.prototype,
        t = "",
        m = "undefined" !== typeof window.is_scirra_arcade;
    m && (t = "arcade" + window.scirra_arcade_id);
    c.ea = q();
    h.prototype.Mn = v(!0);
    f.e = new h;
    r.prototype.Fk = function (b, c) {
        try {
            localStorage.setItem(t + b, c)
        } catch (e) {
            this.b.trigger(Xb.prototype.e.Mn, this)
        }
    };
    f.d = new r;
    b.prototype.vk = function (b, c) {
        b.H(localStorage.getItem(t + c) || "")
    };
    b.prototype.ii = function (b) {
        var c = {},
            e, f, a;
        e = 0;
        for (f = localStorage.length; e < f; e++) a = localStorage.key(e), m ? a.substr(0, t.length) === t && (c[a.substr(t.length)] = localStorage.getItem(a)) : c[a] = localStorage.getItem(a);
        b.H(JSON.stringify({
            c2dictionary: !0,
            data: c
        }))
    };
    f.j = new b
})();

function bc(h) {
    this.b = h
}(function () {
    var h = bc.prototype;
    h.Ha = function (b) {
        this.kd = b;
        this.b = b.b
    };
    h.Ha.prototype.ea = q();
    h.Ba = function (b, c) {
        this.type = b;
        this.kd = b.kd;
        this.I = c;
        this.b = b.b;
        this.Wa = 0
    };
    var r = h.Ba.prototype,
        b = 2 * Math.PI,
        f = Math.PI / 2,
        c = 3 * Math.PI / 2;
    r.ea = function () {
        this.ic = 1 === this.D[0];
        this.eg = this.D[1];
        this.qk = this.D[2];
        this.wd = this.D[3];
        this.wd += Math.random() * this.D[4];
        0 === this.wd ? this.Wa = 0 : (this.Wa = this.D[5] / this.wd * b, this.Wa += Math.random() * this.D[6] / this.wd * b);
        this.Jb = this.D[7];
        this.Jb += Math.random() * this.D[8];
        this.qg =
        this.xe = this.Z = 0;
        this.init()
    };
    r.Zb = function () {
        return {
            i: this.Wa,
            a: this.ic,
            mv: this.eg,
            w: this.qk,
            p: this.wd,
            mag: this.Jb,
            iv: this.Z,
            iv2: this.xe,
            r: this.qg,
            lkv: this.Ub,
            lkv2: this.Wf
        }
    };
    r.Gc = function (b) {
        this.Wa = b.i;
        this.ic = b.a;
        this.eg = b.mv;
        this.qk = b.w;
        this.wd = b.p;
        this.Jb = b.mag;
        this.Z = b.iv;
        this.xe = b.iv2 || 0;
        this.qg = b.r;
        this.Ub = b.lkv;
        this.Wf = b.lkv2 || 0
    };
    r.init = function () {
        switch (this.eg) {
        case 0:
            this.Z = this.I.x;
            break;
        case 1:
            this.Z = this.I.y;
            break;
        case 2:
            this.Z = this.I.width;
            this.qg = this.I.height / this.I.width;
            break;
        case 3:
            this.Z = this.I.width;
            break;
        case 4:
            this.Z = this.I.height;
            break;
        case 5:
            this.Z = this.I.m;
            this.Jb = D(this.Jb);
            break;
        case 6:
            this.Z = this.I.opacity;
            break;
        case 7:
            this.Z = 0;
            break;
        case 8:
            this.Z = this.I.x, this.xe = this.I.y
        }
        this.Ub = this.Z;
        this.Wf = this.xe
    };
    r.Gd = function (h) {
        h %= b;
        switch (this.qk) {
        case 0:
            return Math.sin(h);
        case 1:
            return h <= f ? h / f : h <= c ? 1 - 2 * (h - f) / Math.PI : (h - c) / f - 1;
        case 2:
            return 2 * h / b - 1;
        case 3:
            return -2 * h / b + 1;
        case 4:
            return h < Math.PI ? -1 : 1
        }
        return 0
    };
    r.qb = function () {
        var c = this.b.$i(this.I);
        if (this.ic && 0 !== c) {
            0 === this.wd ? this.Wa = 0 : (this.Wa += c / this.wd * b, this.Wa %= b);
            switch (this.eg) {
            case 0:
                this.I.x !== this.Ub && (this.Z += this.I.x - this.Ub);
                this.I.x = this.Z + this.Gd(this.Wa) * this.Jb;
                this.Ub = this.I.x;
                break;
            case 1:
                this.I.y !== this.Ub && (this.Z += this.I.y - this.Ub);
                this.I.y = this.Z + this.Gd(this.Wa) * this.Jb;
                this.Ub = this.I.y;
                break;
            case 2:
                this.I.width = this.Z + this.Gd(this.Wa) * this.Jb;
                this.I.height = this.I.width * this.qg;
                break;
            case 3:
                this.I.width = this.Z + this.Gd(this.Wa) * this.Jb;
                break;
            case 4:
                this.I.height = this.Z + this.Gd(this.Wa) * this.Jb;
                break;
            case 5:
                this.I.m !== this.Ub && (this.Z = Da(this.Z + (this.I.m - this.Ub)));
                this.I.m = Da(this.Z + this.Gd(this.Wa) * this.Jb);
                this.Ub = this.I.m;
                break;
            case 6:
                this.I.opacity = this.Z + this.Gd(this.Wa) * this.Jb / 100;
                0 > this.I.opacity ? this.I.opacity = 0 : 1 < this.I.opacity && (this.I.opacity = 1);
                break;
            case 8:
                this.I.x !== this.Ub && (this.Z += this.I.x - this.Ub), this.I.y !== this.Wf && (this.xe += this.I.y - this.Wf), this.I.x = this.Z + Math.cos(this.I.m) * this.Gd(this.Wa) * this.Jb, this.I.y = this.xe + Math.sin(this.I.m) * this.Gd(this.Wa) * this.Jb, this.Ub = this.I.x, this.Wf = this.I.y
            }
            this.I.ab()
        }
    };
    r.tm = function (b, c) {
        switch (this.eg) {
        case 2:
            this.Z *= c.width / b.width;
            this.qg = c.height / c.width;
            break;
        case 3:
            this.Z *= c.width / b.width;
            break;
        case 4:
            this.Z *= c.height / b.height
        }
    };
    h.e = new(q());
    h.d = new(q());
    h.j = new(q())
})();

function Tb() {
    return [null, null, [
        [Q, !1, !1, !1, !1, !1, !1, !1, !1, !1],
        [Ub, !0, !1, !1, !1, !1, !1, !1, !1, !1],
        [S, !0, !1, !1, !1, !1, !1, !1, !1, !1],
        [V, !0, !1, !1, !1, !1, !1, !1, !1, !1],
        [Vb, !0, !1, !1, !1, !1, !1, !1, !1, !1],
        [Z, !0, !1, !1, !1, !1, !1, !1, !1, !1],
        [Wb, !1, !0, !0, !0, !0, !1, !1, !1, !1],
        [Y, !1, !0, !0, !0, !0, !0, !0, !0, !1],
        [W, !1, !0, !0, !0, !0, !0, !0, !0, !1],
        [Xb, !0, !1, !1, !1, !1, !1, !1, !1, !1]
    ], [
        ["t0", Xb, !1, [], 0, 0, null, null, [], !1, !1, 5348170403011429, [], null, []],
        ["t1", Z, !1, [], 0, 0, null, null, [], !1, !1, 5360238741765463, [], null, [1]],
        ["t2", S, !1, [], 0, 0, null, null, [], !1, !1, 0x8126f96920bbe, [], null, []],
        ["t3", Ub, !1, [], 0, 0, null, null, [], !1, !1, 432376389717995, [], null, [0, 0, 1, 1, 600, 600, 1E4, 1, 5E3, 1]],
        ["t4", W, !1, [], 0, 0, null, [
            ["Default", 5, !1, 1, 0, !1, 0xc754a43df7bca, [
                ["images/sprite-sheet0.png", 33191, 0, 0, 320, 480, 1, 0.5, 0.5, [],
                    [], 1]
            ]]
        ],
            [], !1, !1, 4987507729908534, [], null],
        ["t5", W, !1, [], 0, 0, null, [
            ["Default", 5, !1, 1, 0, !1, 9588167559235206, [
                ["images/playbutton-sheet0.png", 2642, 0, 0, 112, 49, 1, 0.5, 0.5102040767669678, [],
                    [-0.4821428954601288, -0.4693877696990967, 0, -0.5102040767669678, 0.482142984867096, -0.4693877696990967, 0.5, -0.02040806412696838, 0.482142984867096, 0.448979914188385, 0, 0.4897959232330322, -0.4821428954601288, 0.448979914188385, -0.5, -0.02040806412696838], 0]
            ]]
        ],
            [], !1, !1, 6255340627658747, [], null],
        ["t6", W, !1, [], 0, 0, null, [
            ["Default", 5, !1, 1, 0, !1, 0x792011491aee1, [
                ["images/morebutton-sheet0.png", 5385, 0, 0, 120, 38, 1, 0.5, 0.5, [],
                    [-0.4833333194255829, -0.4473684132099152, 0, -0.5, 0.4833333492279053, -0.4473684132099152, 0.5, 0, 0.4833333492279053, 0.4473684430122376, 0, 0.5, -0.4833333194255829, 0.4473684430122376, -0.5, 0], 0]
            ]]
        ],
            [], !1, !1, 7993870448490057, [], null],
        ["t7", W, !1, [], 0, 0, null, [
            ["Default", 5, !1, 1, 0, !1, 8316738555571598, [
                ["images/scoreboard-sheet0.png", 988, 0, 0, 149, 57, 1, 0.5033556818962097, 0.5087719559669495, [],
                    [-0.4697986841201782, -0.4210526645183563, -0.006711691617965698, -0.3333329558372498, 0.4295303225517273, -0.3333329558372498, 0.4899333119392395, -0.01754394173622131, 0.4765103459358215, 0.4385960698127747, -0.006711691617965698, 0.4736840724945068, -0.4832214713096619, 0.4385960698127747, -0.4966442584991455, -0.01754394173622131], 0]
            ]]
        ],
            [], !1, !1, 0x787c829d5c371, [], null],
        ["t8", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 5096852065587674, [
                ["images/soundonoff-sheet0.png", 392, 0, 0, 29, 28, 1, 0.517241358757019, 0.5, [],
                    [-0.4827585518360138, -0.4642857015132904, -0.03448235988616943, -0.5, 0.448275625705719, -0.4642857015132904, 0.482758641242981, 0, 0.448275625705719, 0.4642859697341919, -0.03448235988616943, 0.5, -0.4827585518360138, 0.4642859697341919, -0.517241358757019, 0], 0],
                ["images/soundonoff-sheet1.png", 423, 0, 0, 29, 28, 1, 0.517241358757019, 0.5, [],
                    [-0.517241358757019, -0.5, 0.482758641242981, -0.5, 0.482758641242981, 0, 0.448275625705719, 0.4642859697341919, -0.03448235988616943, 0.5, -0.517241358757019, 0.5], 0]
            ]]
        ],
            [], !1, !1, 5671484716925895, [], null],
        ["t9", Y, !1, [0xf23fb669b12d5], 0, 0, null, null, [], !1, !1, 838956841440647, [], null],
        ["t10", W, !1, [8708427662237619, 0xc3555d6358ae5, 6049411277482459, 7222976262670133, 0x6df4bf4f72a1a, 5773158991033635, 0x5ccfc1a8c7706, 0xf27578196ad59, 0x81a8cdc156eb3], 0, 0, null, [
            ["Default", 5, !1, 1, 0, !1, 8657486450598672, [
                ["images/bg-sheet0.png", 21879, 0, 0, 320, 480, 1, 0.5, 0.5, [],
                    [], 1]
            ]]
        ],
            [], !1, !1, 5690531602886165, [], null],
        ["t11", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 0xa5561aaa2099c, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 9610926834832068, [], null],
        ["t12", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 6106205687658138, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 0xc972a46381a19, [], null],
        ["t13", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 0xbf9d0668a694d, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 0xb89d44403b556, [], null],
        ["t14", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 4798255880247067, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 4992172878239275, [], null],
        ["t15", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 0x8970d6227fdf4, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 9499474961946272, [], null],
        ["t16", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 9888662258678748, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 7739006524746033, [], null],
        ["t17", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 7454894434018502, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 5275570756971266, [], null],
        ["t18", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 8140459492629919, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 9062195876182332, [], null],
        ["t19", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 0x785cbbec35f37, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 4675428963781406, [], null],
        ["t20", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 569746963904985, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 946095650938083, [], null],
        ["t21", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 0x8721fb68dd1bf, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 0x9bd6fc0f2834f, [], null],
        ["t22", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 0xd89502c5cdfb9, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 0x70557c0ab614d, [], null],
        ["t23", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 585286550595966, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 7161323620010107, [], null],
        ["t24", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 5628975878524652, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 0xb7bff8866e704, [], null],
        ["t25", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 7536108282656106, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 0xd957eedf88d15, [], null],
        ["t26", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 993531213487732, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 5409287229122904, [], null],
        ["t27", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 6816774091879954, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 9679433646605214, [], null],
        ["t28", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 0xb653401e0dd33, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 0x5e960ce5d0862, [], null],
        ["t29", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 5356907447017885, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 9845318192325260, [], null],
        ["t30", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 0x9531d8df2b204, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 5510002065421388, [], null],
        ["t31", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 7184869836304411, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 0x896f40a3e432e, [], null],
        ["t32", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 0xa4ff0fbe70833, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 0xe053e47a5a9ad, [], null],
        ["t33", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 0xf561b2609f267, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 5959896138697269, [], null],
        ["t34", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 7428814104599645, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 4620357736417624, [], null],
        ["t35", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 0xf04b2f80f2d7b, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 0x732ba509332cf, [], null],
        ["t36", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 0xa324e73c6fd87, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 0x3ea2d8eb9dfaf, [], null],
        ["t37", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 8395786350791154, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 0x4bbec5c84e4fd, [], null],
        ["t38", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 6284378518259977, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 6362217212321921, [], null],
        ["t39", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 9706575767187036, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 0x65b6cdc71a36, [], null],
        ["t40", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 6202158596002977, [
                ["images/grid11-sheet0.png", 1477, 1, 1, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 40, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 1, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 1, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 40, 40, 38, 38, 1, 0.5, 0.5, [],
                    [-0.4736841917037964, -0.4736841917037964, 0, -0.5, 0.4736840128898621, -0.4736841917037964, 0.5, 0, 0.4736840128898621, 0.4736840128898621, 0, 0.5, -0.4736841917037964, 0.4736840128898621, -0.5, 0], 0],
                ["images/grid11-sheet0.png", 1477, 79, 40, 38, 38, 1, 0.5, 0.5, [],
                    [], 0],
                ["images/grid11-sheet0.png", 1477, 1, 79, 38, 38, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 8314823385764625, [], null],
        ["t41", W, !1, [], 1, 0, null, [
            ["Default", 5, !1, 1, 0, !1, 9157531343229298, [
                ["images/kapal2an-sheet0.png", 23969, 0, 0, 262, 148, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [
                ["Sine", bc, 4876966368780418]
            ], !1, !1, 0x89d252013f558, [], null],
        ["t42", W, !1, [6981813675488676], 0, 0, null, [
            ["Default", 5, !1, 1, 0, !1, 0xb0237a02aa30d, [
                ["images/levelbar-sheet0.png", 5651, 0, 0, 320, 118, 1, 0.5, 0.5, [],
                    [], 1]
            ]]
        ],
            [], !1, !1, 8543947553504467, [], null],
        ["t43", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 7389173516048378, [
                ["images/number-sheet0.png", 2106, 1, 1, 47, 55, 1, 0.5106382966041565, 0.5090909004211426, [],
                    [-0.3191493153572083, -0.3454549014568329, -0.02127629518508911, -0.4909090995788574, 0.3191487193107605, -0.3636358976364136, 0.4255316853523254, -0.01818189024925232, 0.3191487193107605, 0.3454540967941284, -0.02127629518508911, 0.4727271199226379, -0.3191493153572083, 0.3272730708122253, -0.4255318939685822, -0.01818189024925232], 0],
                ["images/number-sheet0.png", 2106, 49, 1, 47, 55, 1, 0.5106382966041565, 0.5090909004211426, [],
                    [-0.2553192973136902, -0.2909089028835297, -0.02127629518508911, -0.4727272987365723, 0.2553187012672424, -0.3090909123420715, 0.2553187012672424, 0.2909091114997864, -0.02127629518508911, 0.4545450806617737, -0.1276592910289764, 0.1636360883712769, -0.3404253125190735, -0.01818189024925232], 0],
                ["images/number-sheet0.png", 2106, 1, 57, 47, 55, 1, 0.5106382966041565, 0.5090909004211426, [],
                    [-0.3404253125190735, -0.3636358976364136, -0.02127629518508911, -0.4909090995788574, 0.3404257297515869, -0.3818179070949554, 0.4042556881904602, 0.4181820750236511, -0.02127629518508911, 0.4727271199226379, -0.3829782903194428, 0.3818181157112122, -0.1489363014698029, -0.01818189024925232], 0],
                ["images/number-sheet0.png", 2106, 49, 57, 47, 55, 1, 0.5106382966041565, 0.5090909004211426, [],
                    [-0.3404253125190735, -0.3636358976364136, -0.02127629518508911, -0.4909090995788574, 0.3191487193107605, -0.3636358976364136, 0.3829786777496338, -0.01818189024925232, 0.3191487193107605, 0.3454540967941284, -0.02127629518508911, 0.4727271199226379, -0.3404253125190735, 0.3454540967941284, -0.2553192973136902, -0.01818189024925232], 0],
                ["images/number-sheet1.png", 2134, 1, 1, 47, 55, 1, 0.5106382966041565, 0.5090909004211426, [],
                    [-0.02127629518508911, -0.4363636076450348, 0.3191487193107605, -0.3636358976364136, 0.3191487193107605, 0.3454540967941284, -0.02127629518508911, 0.4000000953674316, -0.2978723049163818, 0.3090910911560059, -0.3829782903194428, -0.01818189024925232], 0],
                ["images/number-sheet1.png", 2134, 49, 1, 47, 55, 1, 0.5106382966041565, 0.5090909004211426, [],
                    [-0.3191493153572083, -0.3454549014568329, -0.02127629518508911, -0.4909090995788574, 0.3829786777496338, -0.4181818068027496, 0.4042556881904602, -0.01818189024925232, 0.3191487193107605, 0.3454540967941284, -0.02127629518508911, 0.4727271199226379, -0.3404253125190735, 0.3454540967941284, -0.4042553007602692, -0.01818189024925232], 0],
                ["images/number-sheet1.png", 2134, 1, 57, 47, 55, 1, 0.5106382966041565, 0.5090909004211426, [],
                    [-0.3191493153572083, -0.3454549014568329, -0.02127629518508911, -0.4909090995788574, 0.3404257297515869, -0.3818179070949554, 0.4042556881904602, -0.01818189024925232, 0.3404257297515869, 0.3636360764503479, -0.02127629518508911, 0.4727271199226379, -0.3191493153572083, 0.3272730708122253, -0.4255318939685822, -0.01818189024925232], 0],
                ["images/number-sheet1.png", 2134, 49, 57, 47, 55, 1, 0.5106382966041565, 0.5090909004211426, [],
                    [-0.3829782903194428, -0.3999999165534973, -0.02127629518508911, -0.4909090995788574, 0.4042556881904602, -0.4363636076450348, 0.1489356756210327, 0.2000001072883606, -0.02127629518508911, 0.4727271199226379, -0.2553192973136902, 0.2727270722389221, -0.1702122986316681, -0.01818189024925232], 0],
                ["images/number-sheet2.png", 1453, 1, 1, 47, 55, 1, 0.5106382966041565, 0.5090909004211426, [],
                    [-0.3404253125190735, -0.3636358976364136, -0.02127629518508911, -0.4909090995788574, 0.3191487193107605, -0.3636358976364136, 0.3829786777496338, -0.01818189024925232, 0.3404257297515869, 0.3636360764503479, -0.02127629518508911, 0.4727271199226379, -0.3404253125190735, 0.3454540967941284, -0.3829782903194428, -0.01818189024925232], 0],
                ["images/number-sheet2.png", 1453, 49, 1, 47, 55, 1, 0.5106382966041565, 0.5090909004211426, [],
                    [-0.3404253125190735, -0.3636358976364136, -0.02127629518508911, -0.4909090995788574, 0.2978727221488953, -0.3454549014568329, 0.4042556881904602, -0.01818189024925232, 0.2978727221488953, 0.3272730708122253, -0.02127629518508911, 0.4727271199226379, -0.3617022931575775, 0.3636360764503479, -0.4255318939685822, -0.01818189024925232], 0]
            ]]
        ],
            [], !1, !1, 9516336865109472, [], null],
        ["t44", Q, !1, [], 0, 0, null, null, [], !0, !1, 7125852071524764, [], null],
        ["t45", Y, !1, [], 0, 0, null, null, [], !1, !1, 9603364852115898, [], null],
        ["t46", Y, !1, [7608748173227024], 0, 0, null, null, [], !1, !1, 7214611802509893, [], null],
        ["t47", W, !1, [], 0, 0, null, [
            ["Default", 0, !1, 1, 0, !1, 8552727048847925, [
                ["images/winlose-sheet1.png", 6387, 0, 0, 225, 169, 1, 0.5022222399711609, 0.5029585957527161, [],
                    [-0.4222222566604614, -0.3964495956897736, 0.3866667747497559, -0.3550295829772949, 0.3688887357711792, -0.005917608737945557, 0.4755557775497437, 0.4674553871154785, -0.004444241523742676, 0.4852073788642883, -0.4577778279781342, 0.4378694295883179, -0.3822222352027893, -0.005917608737945557], 0],
                ["images/winlose-sheet0.png", 6819, 0, 0, 238, 181, 1, 0.5, 0.5027624368667603, [],
                    [-0.4495798051357269, -0.4364641308784485, 0, -0.3977904319763184, 0.4243699908256531, -0.4033149480819702, 0.4789919853210449, 0.4696135520935059, 0, 0.4861875772476196, -0.4537814855575562, 0.4364645481109619], 0]
            ]]
        ],
            [], !1, !1, 9488823632061744, [], null],
        ["t48", W, !1, [], 0, 0, null, [
            ["Default", 5, !1, 1, 0, !1, 467519826408573, [
                ["images/duar-sheet0.png", 16490, 1, 1, 76, 97, 1, 0.5, 0.5051546096801758, [],
                    [], 0],
                ["images/duar-sheet0.png", 16490, 78, 1, 76, 97, 1, 0.5, 0.5051546096801758, [],
                    [], 0],
                ["images/duar-sheet0.png", 16490, 155, 1, 76, 97, 1, 0.5, 0.5051546096801758, [],
                    [], 0],
                ["images/duar-sheet0.png", 16490, 1, 99, 76, 97, 1, 0.5, 0.5051546096801758, [],
                    [], 0],
                ["images/duar-sheet0.png", 16490, 78, 99, 76, 97, 1, 0.5, 0.5051546096801758, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 0x6048e2bd7b438, [], null],
        ["t49", W, !1, [], 0, 0, null, [
            ["Default", 5, !1, 1, 0, !1, 6169455095298604, [
                ["images/sprite2-sheet0.png", 143217, 0, 0, 320, 480, 1, 0.5, 0.5, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 7866451646049693, [], null],
        ["t50", W, !1, [], 1, 0, null, [
            ["Default", 5, !1, 1, 0, !1, 0x55e2716f3b0f1, [
                ["images/sprite3-sheet0.png", 1984, 0, 0, 349, 24, 1, 0.5014326572418213, 0.5, [],
                    [-0.4957019984722138, -0.4166666865348816, -0.002865672111511231, -0.5, 0.4928363561630249, -0.4166666865348816, 0.4928363561630249, 0.4166669845581055, -0.002865672111511231, 0.5, -0.4899713695049286, 0.3333330154418945], 0]
            ]]
        ],
            [
                ["Sine", bc, 8341971040208609]
            ], !1, !1, 8871984879800989, [], null],
        ["t51", W, !1, [], 0, 0, null, [
            ["Default", 5, !1, 1, 0, !1, 0xb0cca54261c20, [
                ["images/scoreboard-sheet0.png", 988, 0, 0, 149, 57, 1, 0.5033556818962097, 0.5087719559669495, [],
                    [-0.4697986841201782, -0.4210526645183563, -0.006711691617965698, -0.3333329558372498, 0.4295303225517273, -0.3333329558372498, 0.4899333119392395, -0.01754394173622131, 0.4765103459358215, 0.4385960698127747, -0.006711691617965698, 0.4736840724945068, -0.4832214713096619, 0.4385960698127747, -0.4966442584991455, -0.01754394173622131], 0]
            ]]
        ],
            [], !1, !1, 0x826052c535090, [], null],
        ["t52", Y, !1, [], 0, 0, null, null, [], !1, !1, 0x8352566951ba7, [], null],
        ["t53", W, !1, [], 0, 0, null, [
            ["Default", 5, !1, 1, 0, !1, 0xba40150034333, [
                ["images/sprite4-sheet0.png", 32809, 0, 0, 320, 480, 1, 0.5, 0.5, [],
                    [], 1]
            ]]
        ],
            [], !1, !1, 79463630529175, [], null],
        ["t54", W, !1, [], 0, 0, null, [
            ["Default", 5, !1, 1, 0, !1, 0x74d6c77aeda9c, [
                ["images/sprite5-sheet0.png", 622, 0, 0, 149, 57, 1, 0.5033556818962097, 0.5087719559669495, [],
                    [], 0]
            ]]
        ],
            [], !1, !1, 0xe91d73acffedf, [], null],
        ["t55", W, !1, [], 0, 0, null, [
            ["Default", 5, !1, 1, 0, !1, 0xa3c8d63ee734e, [
                ["images/sprite6-sheet0.png", 1926, 0, 0, 290, 47, 1, 0.5, 0.5106382966041565, [],
                    [-0.4896551966667175, -0.4468084871768951, 0, -0.5106382966041565, 0.4758620262145996, -0.3617022931575775, 0.49310302734375, 0.4468086957931519, 0, 0.4893617033958435, -0.4931034445762634, 0.4468086957931519], 0]
            ]]
        ],
            [], !1, !1, 0xf3c8447b13da6, [], null],
        ["t56", Y, !1, [], 0, 0, null, null, [], !1, !1, 4742084897228277, [], null],
        ["t57", W, !1, [], 1, 0, null, [
            ["Default", 5, !1, 1, 0, !1, 5234557447524874, [
                ["images/newhs-sheet0.png", 1314, 0, 0, 202, 30, 1, 0.5, 0.5, [],
                    [-0.4950495064258575, -0.4666666984558106, 0, -0.5, 0.495048999786377, -0.4666666984558106, 0.495048999786377, 0, 0.4752479791641235, 0.3333330154418945, 0, 0.3666669726371765, -0.4752475023269653, 0.3333330154418945, -0.5, 0], 0]
            ]]
        ],
            [
                ["Sine", bc, 603119068603128]
            ], !1, !1, 8248317109835965, [], null],
        ["t58", W, !1, [], 0, 0, null, [
            ["Default", 5, !1, 1, 0, !1, 0x59937c832ac3b, [
                ["images/sprite7-sheet0.png", 4842, 0, 0, 60, 60, 1, 0.5, 0.5, [],
                    [-0.4666666984558106, -0.4666666984558106, 0, -0.5, 0.4666669964790344, -0.4666666984558106, 0.5, 0, 0.4666669964790344, 0.4666669964790344, 0, 0.5, -0.4666666984558106, 0.4666669964790344, -0.5, 0], 0]
            ]]
        ],
            [], !1, !1, 0x789d6d77a8db0, [], null],
        ["t59", W, !1, [], 0, 0, null, [
            ["Default", 5, !1, 1, 0, !1, 0xae638f87afc77, [
                ["images/sprite8-sheet0.png", 2698, 0, 0, 69, 70, 1, 0.5072463750839233, 0.5, [],
                    [-0.347826361656189, -0.3428570032119751, -0.01449236273765564, -0.4857142865657806, 0.3333336114883423, -0.3428570032119751, 0.4782606363296509, 0, 0.3333336114883423, 0.3428570032119751, -0.01449236273765564, 0.4857140183448792, -0.347826361656189, 0.3428570032119751, -0.4927535653114319, 0], 0]
            ]]
        ],
            [], !1, !1, 0x8dc624be20cd2, [], null],
        ["t60", W, !1, [], 0, 0, null, [
            ["Default", 5, !1, 1, 0, !1, 8483088000490577, [
                ["images/sprite9-sheet0.png", 22630, 0, 0, 320, 480, 1, 0.5, 0.5, [],
                    [], 1]
            ]]
        ],
            [], !1, !1, 6504795483742152, [], null],
        ["t61", W, !1, [], 0, 0, null, [
            ["Default", 5, !1, 1, 0, !1, 8961731115844412, [
                ["images/playbt-sheet0.png", 813, 0, 0, 103, 57, 1, 0.5048543810844421, 0.5087719559669495, [],
                    [-0.485436886548996, -0.4736842513084412, -0.009708374738693237, -0.5087719559669495, 0.4757286310195923, -0.4736842513084412, 0.4951456189155579, -0.01754394173622131, 0.4757286310195923, 0.4561400413513184, -0.009708374738693237, 0.4912280440330505, -0.485436886548996, 0.4561400413513184, -0.5048543810844421, -0.01754394173622131], 0]
            ]]
        ],
            [], !1, !1, 56799496637999, [], null],
        ["t62", Wb, !1, [], 0, 0, null, null, [], !1, !1, 8028298369678362, [], null],
        ["t63", Y, !1, [], 0, 0, null, null, [], !1, !1, 5061693060965243, [], null],
        ["t64", W, !1, [9437930188143784], 0, 0, null, [
            ["Default", 5, !1, 1, 0, !1, 0xf2ee088a505d, [
                ["images/spsh-sheet0.png", 24344, 0, 0, 320, 480, 1, 0.5, 0.5, [],
                    [], 1]
            ]]
        ],
            [], !1, !1, 0xf889bba74e771, [], null],
        ["t65", W, !1, [5283523314196223], 0, 0, null, [
            ["Default", 5, !1, 1, 0, !1, 6614325969578554, [
                ["images/spsh-sheet0.png", 24344, 0, 0, 320, 480, 1, 0.5, 0.5, [],
                    [], 1]
            ]]
        ],
            [], !1, !1, 6877436885996401, [], null],
        ["t66", Y, !1, [], 0, 0, null, null, [], !1, !1, 396331147486802, [], null],
        ["t67", V, !1, [], 0, 0, null, null, [], !1, !1, 0xa85e47c45f7ce, [], null, ["piratetreasure", 1, 0]],
        ["t68", Vb, !1, [], 0, 0, null, null, [], !1, !1, 7677350454165714, [], null, []],
        ["t69", W, !1, [], 0, 0, null, [
            ["Default", 5, !1, 1, 0, !1, 599646379457042, [
                ["images/sprite10-sheet0.png", 1185, 0, 0, 99, 57, 1, 0.5050504803657532, 0.5087719559669495, [],
                    [-0.4848484694957733, -0.4736842513084412, -0.01010146737098694, -0.5087719559669495, 0.4747475385665894, -0.4736842513084412, 0.4949495196342468, -0.01754394173622131, 0.4747475385665894, 0.4561400413513184, -0.01010146737098694, 0.4912280440330505, -0.4848484694957733, 0.4561400413513184, -0.5050504803657532, -0.01754394173622131], 0]
            ]]
        ],
            [], !1, !1, 5257930896246421, [], null],
        ["t70", W, !1, [], 0, 0, null, [
            ["Default", 5, !1, 1, 0, !1, 0xfda5c3a149d65, [
                ["images/sprite11-sheet0.png", 15927, 0, 0, 393, 306, 1, 0.5012722611427307, 0.5, [],
                    [-0.4732824563980103, -0.46405228972435, -0.002544254064559937, -0.4313724935054779, 0.4452927112579346, -0.4313724935054779, 0.4987277388572693, 0, 0.4936387538909912, 0.4934639930725098, -0.4961831867694855, 0.4934639930725098, -0.5012722611427307, 0], 0]
            ]]
        ],
            [], !1, !1, 9698362605946728, [], null],
        ["t71", W, !1, [], 0, 0, null, [
            ["Default", 5, !1, 1, 0, !1, 8012594344671285, [
                ["images/sprite12-sheet0.png", 3110, 0, 0, 72, 41, 1, 0.5, 0.5121951103210449, [],
                    [-0.4861111044883728, -0.4878049194812775, 0, -0.5121951103210449, 0.4861109852790833, -0.4878049194812775, 0.5, -0.02439010143280029, 0.4722219705581665, 0.4390239119529724, 0, 0.4878048896789551, -0.4722222089767456, 0.4390239119529724, -0.5, -0.02439010143280029], 0]
            ]]
        ],
            [], !1, !1, 9393710229300558, [], null]
    ], [], [
        ["menu", 320, 480, !1, "menuE", 0xe38cfd1e7d65c, [
            ["Layer 0", 0, 5219311130234725, !0, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
                [
                    [160, 240, 0, 320, 480, 0, 0, 1, 0.5, 0.5, 0, 0, []], 4, 4, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [63, 324, 0, 112, 49, 0, 0, 1, 0.5, 0.5102040767669678, 0, 0, []], 5, 5, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [69, 382, 0, 120, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 6, 6, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [239, 439, 0, 149, 57, 0, 0, 1, 0.5033556818962097, 0.5087719559669495, 0, 0, []], 7, 7, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [631, 20, 0, 29, 28, 0, 0, 1, 0.517241358757019, 0.5, 0, 0, []], 8, 8, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [170, 434, 0, 137, 27, 0, 0, 1, 0, 0, 0, 0, []], 9, 9, [
                        [0]
                    ],
                    [],
                    ["0", 0, "16pt Arial Rounded MT Bold", "rgb(255,255,255)", 1, 1, 0, 0, 0]
                ],
                [
                    [49, 438, 0, 77.72218322753906, 44.7491340637207, 0, 0, 1, 0.5050504803657532, 0.5087719559669495, 0, 0, []], 69, 145, [],
                    [],
                    [0, "Default", 0, 1]
                ]
            ],
                []
            ]
        ],
            [],
            []
        ],
        ["about", 320, 480, !1, "aboutE", 0xbf48f111d4998, [
            ["Layer 0", 0, 9552130364209688, !0, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
                [
                    [160, 240, 0, 320, 480, 0, 0, 1, 0.5, 0.5, 0, 0, []], 4, 146, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [160, 273, 0, 297.615966796875, 231.7315216064453, 0, 0, 1, 0.5012722611427307, 0.5, 0, 0, []], 70, 147, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [276, 413, 0, 72, 41, 0, 0, 1, 0.5, 0.5121951103210449, 0, 0, []], 71, 148, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [68, 282, 0, 200, 47, 0, 0, 1, 0, 0, 0, 0, []], 9, 149, [
                        [10]
                    ],
                    [],
                    ["", 0, "12pt Arial", "rgb(255,255,255)", 1, 1, 0, 0, 0]
                ]
            ],
                []
            ]
        ],
            [],
            []
        ],
        ["splash", 320, 480, !1, "splashE", 693102306186434, [
            ["Layer 0", 0, 0xb3785075f80aa, !0, [0, 0, 0], !1, 1, 1, 1, !1, 1, 0, 0, [
                [
                    [160, 240, 0, 320, 480, 0, 0, 0, 0.5, 0.5, 0, 0, []], 64, 68, [
                        [0]
                    ],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [81, 284, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 63, 69, [],
                    [],
                    ["m", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [94, 284, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 63, 70, [],
                    [],
                    ["a", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [102, 284, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 63, 71, [],
                    [],
                    ["s", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [110, 284, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 63, 72, [],
                    [],
                    ["t", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [114, 284, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 63, 73, [],
                    [],
                    ["e", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [123, 284, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 63, 74, [],
                    [],
                    ["r", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [129, 284, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 63, 75, [],
                    [],
                    ["@", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [145, 284, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 63, 76, [],
                    [],
                    ["a", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [153, 284, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 63, 77, [],
                    [],
                    ["n", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [162, 284, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 63, 78, [],
                    [],
                    ["t", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [167, 284, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 63, 79, [],
                    [],
                    ["p", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [176, 284, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 63, 80, [],
                    [],
                    ["i", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [180, 284, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 63, 81, [],
                    [],
                    ["x", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [188, 284, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 63, 82, [],
                    [],
                    ["e", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [197, 284, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 63, 83, [],
                    [],
                    ["l", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [201, 284, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 63, 84, [],
                    [],
                    [".", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [206, 284, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 63, 85, [],
                    [],
                    ["c", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [214, 284, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 63, 87, [],
                    [],
                    ["o", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [223, 284, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 63, 88, [],
                    [],
                    ["m", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ]
            ],
                []
            ]
        ],
            [],
            []
        ],
       
        ["game", 320, 480, !1, "gameE", 0x93b4a8b62b054, [
            ["Layer 0", 0, 53784912037721, !0, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
                [
                    [160, 240, 0, 320, 480, 0, 0, 1, 0.5, 0.5, 0, 0, []], 10, 10, [
                        [0],
                        [0],
                        [0],
                        [0],
                        [0],
                        [0],
                        [0],
                        [0],
                        [0]
                    ],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [76, 142, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 11, 11, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [118, 142, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 12, 12, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [160, 142, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 13, 13, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [202, 142, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 14, 14, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [244, 142, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 15, 15, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [76, 184, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 16, 16, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [118, 184, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 17, 17, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [160, 184, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 18, 18, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [202, 184, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 19, 19, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [244, 184, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 20, 20, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [76, 225, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 21, 21, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [118, 225, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 22, 22, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [160, 225, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 23, 23, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [202, 225, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 24, 24, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [244, 225, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 25, 25, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [76, 267, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 26, 26, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [118, 267, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 27, 27, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [160, 267, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 28, 28, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [202, 267, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 29, 29, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [244, 267, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 30, 30, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [76, 308, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 31, 31, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [118, 308, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 32, 32, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [160, 308, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 33, 33, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [202, 308, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 34, 34, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [244, 308, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 35, 35, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [76, 350, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 36, 36, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [118, 350, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 37, 37, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [160, 350, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 38, 38, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [202, 350, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 39, 39, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [244, 350, 0, 38, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 40, 40, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [79, 432, 0, 262, 148, 0, 0, 1, 0.5, 0.5, 0, 0, []], 41, 41, [],
                    [
                        [1, 1, 0, 4, 0, 0, 0, 10, 0]
                    ],
                    [0, "Default", 0, 1]
                ]
            ],
                []
            ],
            ["gui", 1, 4901981891938664, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                [
                    [160, 225, 0, 320, 118, 0, 0, 1, 0.5, 0.5, 0, 0, []], 42, 42, [
                        [0]
                    ],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [235, 224, 0, 47, 55, 0, 0, 1, 0.5106382966041565, 0.5090909004211426, 0, 0, []], 43, 43, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [60, -179, 0, 244, 30, 0, 0, 1, 0, 0, 0, 0, []], 45, 45, [],
                    [],
                    ["Text", 0, "12pt Arial", "rgb(0,0,0)", 0, 0, 0, 0, 0]
                ],
                [
                    [59, 24, 0, 64, 36, 0, 0, 1, 0, 0, 0, 0, []], 46, 46, [
                        [0]
                    ],
                    [],
                    ["20", 0, "16pt Arial Rounded MT Bold", "rgb(255,255,255)", 1, 1, 0, 0, 0]
                ],
                [
                    [160, 223, 0, 225, 169, 0, 0, 1, 0.5022222399711609, 0.5029585957527161, 0, 0, []], 47, 47, [],
                    [],
                    [1, "Default", 0, 1]
                ],
                [
                    [-138, 101, 0, 76, 97, 0, 0, 1, 0.5, 0.5051546096801758, 0, 0, []], 48, 48, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [243, 448, 0, 149, 57, 0, 0, 1, 0.5033556818962097, 0.5087719559669495, 0, 0, []], 51, 52, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [172, 436, 0, 137, 40, 0, 0, 1, 0, 0, 0, 0, []], 52, 53, [],
                    [],
                    ["0", 0, "18pt Arial Rounded MT Bold", "rgb(255,255,255)", 1, 1, 0, 0, 0]
                ],
                [
                    [82, 448, 0, 149, 57, 0, 0, 1, 0.5033556818962097, 0.5087719559669495, 0, 0, []], 54, 54, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [76, 429, 0, 128.232666015625, 20.78253555297852, 0, 0, 1, 0.5, 0.5106382966041565, 0, 0, []], 55, 55, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [13, 436, 0, 137, 40, 0, 0, 1, 0, 0, 0, 0, []], 56, 56, [],
                    [],
                    ["0", 0, "18pt Arial Rounded MT Bold", "rgb(255,192,0)", 1, 1, 0, 0, 0]
                ],
                [
                    [206, 396, 0, 202, 30, 0, 0, 1, 0.5, 0.5, 0, 0, []], 57, 57, [],
                    [
                        [1, 1, 0, 0.3, 0, 0, 0, 5, 0]
                    ],
                    [0, "Default", 0, 1]
                ],
                [
                    [55, 379, 0, 69, 70, 0, 0, 1, 0.5072463750839233, 0.5, 0, 0, []], 59, 58, [],
                    [],
                    [0, "Default", 0, 1]
                ]
            ],
                []
            ]
        ],
            [
                [null, 44, 44, [],
                    [],
                    [7, 7, 1]
                ]
            ],
            []
        ],
        ["win", 320, 480, !1, "winE", 9331180876109112, [
            ["Layer 0", 0, 9862568219180868, !0, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
                [
                    [160, 240, 0, 320, 480, 0, 0, 1, 0.5, 0.5, 0, 0, []], 60, 59, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [43, 330, 0, 69, 70, 0, 0, 1, 0.5072463750839233, 0.5, 0, 0, []], 59, 60, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [160, 209, 0, 202, 30, 0, 0, 1, 0.5, 0.5, 0, 0, []], 57, 61, [],
                    [
                        [1, 1, 0, 0.3, 0, 0, 0, 5, 0]
                    ],
                    [0, "Default", 0, 1]
                ],
                [
                    [66, 391, 0, 120, 38, 0, 0, 1, 0.5, 0.5, 0, 0, []], 6, 62, [],
                    [],
                    [0, "Default", 0, 1]
                ]
            ],
                []
            ],
            ["gui", 1, 9826149829554886, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                [
                    [-138, 101, 0, 76, 97, 0, 0, 1, 0.5, 0.5051546096801758, 0, 0, []], 48, 97, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [243, 448, 0, 149, 57, 0, 0, 1, 0.5033556818962097, 0.5087719559669495, 0, 0, []], 51, 98, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [172, 436, 0, 137, 40, 0, 0, 1, 0, 0, 0, 0, []], 52, 99, [],
                    [],
                    ["0", 0, "18pt Arial Rounded MT Bold", "rgb(255,255,255)", 1, 1, 0, 0, 0]
                ],
                [
                    [82, 448, 0, 149, 57, 0, 0, 1, 0.5033556818962097, 0.5087719559669495, 0, 0, []], 54, 100, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [76, 429, 0, 128.232666015625, 20.78253555297852, 0, 0, 1, 0.5, 0.5106382966041565, 0, 0, []], 55, 101, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [13, 436, 0, 137, 40, 0, 0, 1, 0, 0, 0, 0, []], 56, 102, [],
                    [],
                    ["0", 0, "18pt Arial Rounded MT Bold", "rgb(255,192,0)", 1, 1, 0, 0, 0]
                ]
            ],
                []
            ]
        ],
            [],
            []
        ],
        ["tutor", 320, 480, !1, "tutorE", 423108177560335, [
            ["Layer 0", 0, 0x4422519f7c637, !0, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
                [
                    [160, 240, 0, 320, 480, 0, 0, 1, 0.5, 0.5, 0, 0, []], 10, 49, [
                        [0],
                        [0],
                        [0],
                        [0],
                        [0],
                        [0],
                        [0],
                        [0],
                        [0]
                    ],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [160, 240, 0, 320, 480, 0, 0, 1, 0.5, 0.5, 0, 0, []], 49, 50, [],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [160.2816314697266, 442.2835388183594, 0, 311, 21, 0, 0, 1, 0.5014326572418213, 0.5, 0, 0, []], 50, 51, [],
                    [
                        [1, 1, 0, 2, 0, 0, 0, 2, 0]
                    ],
                    [0, "Default", 0, 1]
                ]
            ],
                []
            ],
            ["gui", 1, 7032015433402618, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                [
                    [-138, 101, 0, 76, 97, 0, 0, 1, 0.5, 0.5051546096801758, 0, 0, []], 48, 86, [],
                    [],
                    [0, "Default", 0, 1]
                ]
            ],
                []
            ]
        ],
            [],
            []
        ],
        ["disc", 1280, 1024, !1, "discE", 0xa9c82ac9c3360, [
            ["Layer 0", 0, 9669341274631372, !0, [0, 0, 0], !1, 1, 1, 1, !1, 1, 0, 0, [
                [
                    [155, 254, 0, 165.2472991943359, 247.8709411621094, 0, 0, 1, 0.5, 0.5, 0, 0, []], 65, 89, [
                        [0]
                    ],
                    [],
                    [0, "Default", 0, 1]
                ],
                [
                    [77, 90, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 66, 90, [],
                    [],
                    ["m", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [90, 90, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 66, 91, [],
                    [],
                    ["a", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [98, 90, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 66, 92, [],
                    [],
                    ["s", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [106, 90, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 66, 93, [],
                    [],
                    ["t", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [110, 90, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 66, 94, [],
                    [],
                    ["e", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [119, 90, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 66, 95, [],
                    [],
                    ["r", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [125, 90, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 66, 96, [],
                    [],
                    ["@", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [141, 90, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 66, 103, [],
                    [],
                    ["a", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [149, 90, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 66, 104, [],
                    [],
                    ["n", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [158, 90, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 66, 106, [],
                    [],
                    ["t", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [163, 90, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 66, 107, [],
                    [],
                    ["p", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [172, 90, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 66, 108, [],
                    [],
                    ["i", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [176, 90, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 66, 109, [],
                    [],
                    ["x", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [184, 90, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 66, 110, [],
                    [],
                    ["e", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [193, 90, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 66, 111, [],
                    [],
                    ["l", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [197, 90, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 66, 112, [],
                    [],
                    [".", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [202, 90, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 66, 113, [],
                    [],
                    ["c", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [210, 90, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 66, 114, [],
                    [],
                    ["o", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [219, 90, 0, 21, 27, 0, 0, 1, 0, 0, 0, 0, []], 66, 115, [],
                    [],
                    ["m", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [109, 384, 0, 19, 32, 0, 0, 1, 0, 0, 0, 0, []], 9, 116, [
                        [0]
                    ],
                    [],
                    ["m", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [122, 384, 0, 19, 32, 0, 0, 1, 0, 0, 0, 0, []], 9, 117, [
                        [0]
                    ],
                    [],
                    ["a", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [130, 384, 0, 19, 32, 0, 0, 1, 0, 0, 0, 0, []], 9, 118, [
                        [0]
                    ],
                    [],
                    ["s", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [138, 384, 0, 19, 32, 0, 0, 1, 0, 0, 0, 0, []], 9, 119, [
                        [0]
                    ],
                    [],
                    ["t", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [142, 384, 0, 19, 32, 0, 0, 1, 0, 0, 0, 0, []], 9, 120, [
                        [0]
                    ],
                    [],
                    ["e", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [150, 384, 0, 19, 32, 0, 0, 1, 0, 0, 0, 0, []], 9, 121, [
                        [0]
                    ],
                    [],
                    ["r", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [156, 384, 0, 23, 32, 0, 0, 1, 0, 0, 0, 0, []], 9, 122, [
                        [0]
                    ],
                    [],
                    ["@", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [172, 384, 0, 23, 32, 0, 0, 1, 0, 0, 0, 0, []], 9, 123, [
                        [0]
                    ],
                    [],
                    ["a", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [180, 384, 0, 23, 32, 0, 0, 1, 0, 0, 0, 0, []], 9, 124, [
                        [0]
                    ],
                    [],
                    ["n", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [188, 384, 0, 23, 32, 0, 0, 1, 0, 0, 0, 0, []], 9, 125, [
                        [0]
                    ],
                    [],
                    ["t", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [193, 384, 0, 23, 32, 0, 0, 1, 0, 0, 0, 0, []], 9, 126, [
                        [0]
                    ],
                    [],
                    ["p", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [202, 384, 0, 23, 32, 0, 0, 1, 0, 0, 0, 0, []], 9, 127, [
                        [0]
                    ],
                    [],
                    ["i", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [206, 384, 0, 23, 32, 0, 0, 1, 0, 0, 0, 0, []], 9, 128, [
                        [0]
                    ],
                    [],
                    ["x", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [214, 384, 0, 23, 32, 0, 0, 1, 0, 0, 0, 0, []], 9, 129, [
                        [0]
                    ],
                    [],
                    ["e", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [222, 384, 0, 23, 32, 0, 0, 1, 0, 0, 0, 0, []], 9, 130, [
                        [0]
                    ],
                    [],
                    ["l", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [226, 384, 0, 23, 32, 0, 0, 1, 0, 0, 0, 0, []], 9, 131, [
                        [0]
                    ],
                    [],
                    [".", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [230, 384, 0, 23, 32, 0, 0, 1, 0, 0, 0, 0, []], 9, 132, [
                        [0]
                    ],
                    [],
                    ["c", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [238, 384, 0, 23, 32, 0, 0, 1, 0, 0, 0, 0, []], 9, 133, [
                        [0]
                    ],
                    [],
                    ["o", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [247, 384, 0, 23, 32, 0, 0, 1, 0, 0, 0, 0, []], 9, 134, [
                        [0]
                    ],
                    [],
                    ["m", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [101, 384, 0, 19, 32, 0, 0, 1, 0, 0, 0, 0, []], 9, 135, [
                        [0]
                    ],
                    [],
                    [":", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [93, 384, 0, 19, 32, 0, 0, 1, 0, 0, 0, 0, []], 9, 136, [
                        [0]
                    ],
                    [],
                    ["t", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [85, 384, 0, 19, 32, 0, 0, 1, 0, 0, 0, 0, []], 9, 137, [
                        [0]
                    ],
                    [],
                    ["c", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [77, 384, 0, 19, 32, 0, 0, 1, 0, 0, 0, 0, []], 9, 138, [
                        [0]
                    ],
                    [],
                    ["a", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [72, 384, 0, 19, 32, 0, 0, 1, 0, 0, 0, 0, []], 9, 139, [
                        [0]
                    ],
                    [],
                    ["t", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [63, 384, 0, 19, 32, 0, 0, 1, 0, 0, 0, 0, []], 9, 140, [
                        [0]
                    ],
                    [],
                    ["n", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [55, 384, 0, 19, 32, 0, 0, 1, 0, 0, 0, 0, []], 9, 141, [
                        [0]
                    ],
                    [],
                    ["o", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [47, 384, 0, 19, 32, 0, 0, 1, 0, 0, 0, 0, []], 9, 142, [
                        [0]
                    ],
                    [],
                    ["c", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                ],
                [
                    [-70, 55, 0, 478, 27, 0, 0, 1, 0, 0, 0, 0, []], 66, 143, [],
                    [],
                    ["For Licensing This Game Please Contact : ", 0, "12pt Arial", "rgb(255,255,255)", 1, 0, 0, 0, 0]
                ],
                [
                    [-70, 34, 0, 478, 27, 0, 0, 1, 0, 0, 0, 0, []], 66, 163, [],
                    [],
                    ["You are not allowed to host this game", 0, "12pt Arial", "rgb(255,255,255)", 1, 0, 0, 0, 0]
                ]
            ],
                []
            ]
        ],
            [],
            []
        ]
    ], [
        ["menuE", [
            [1, "hscore", 0, 0, !1, !1, 6463659980489659, !1],
            [1, "score", 0, 0, !1, !1, 7307698005520977, !1],
            [0, null, !1, null, 515107064737663, [
                [-1, G.prototype.e.Oe, null, 1, !1, !1, !1, 9473367937993980, !1]
            ],
                [
                    [-1, G.prototype.d.je, null, 8943078552584992, !1, [
                        [11, "hscore"],
                        [7, [19, G.prototype.j["int"],
                            [
                                [20, 0, Xb.prototype.j.vk, !0, null, [
                                    [2, "piratescore"]
                                ]]
                            ]
                        ]]
                    ]],
                    [9, Y.prototype.d.sb, null, 9910791724838128, !1, [
                        [7, [23, "hscore"]]
                    ]]
                ]
            ],
            [0, null, !1, null, 854949890483581, [
                [1, Z.prototype.e.K, null, 1, !1, !1, !1, 0xda2b4489d2f3d, !1, [
                    [4, 5]
                ]]
            ],
                [
                    [-1, G.prototype.d.je, null, 0xb7f0130f76a5d, !1, [
                        [11, "stage"],
                        [7, [0, 1]]
                    ]],
                    [-1, G.prototype.d.hc, null, 0x8e2be8523dc69, !1, [
                        [6, "tutor"]
                    ]],
                    [-1, G.prototype.d.je, null, 9224851225016828, !1, [
                        [11, "score"],
                        [7, [0, 0]]
                    ]]
                ]
            ],
            [0, null, !1, null, 6063171429796624, [
                [1, Z.prototype.e.K, null, 1, !1, !1, !1, 9155960741740942, !1, [
                    [4, 6]
                ]]
            ],
                [
                   
                ]
            ],
            [0, null, !1, null, 0xa840aec0c1ee0, [
                [1, Z.prototype.e.K, null, 1, !1, !1, !1, 6528286218476617, !1, [
                    [4, 69]
                ]]
            ],
                [
                    [-1, G.prototype.d.hc, null, 0x7cb31b33607d1, !1, [
                        [6, "about"]
                    ]]
                ]
            ]
        ]],
        ["gameE", [
            [1, "stage", 0, 1, !1, !1, 9168127380435802, !1],
            [0, null, !1, null, 523742380860505, [
                [10, W.prototype.e.bb, null, 0, !1, !1, !1, 8137509106482119, !1, [
                    [10, 0],
                    [8, 0],
                    [7, [0, 0]]
                ]]
            ],
                [
                    [43, W.prototype.d.W, null, 7369484406690692, !1, [
                        [0, [23, "stage"]]
                    ]],
                    [42, W.prototype.d.gi, null, 7958308362919891, !1, [
                        [10, 0],
                        [7, [6, [0, 1],
                            [19, G.prototype.j.Pb]
                        ]]
                    ]],
                    [46, Y.prototype.d.sb, null, 0x8eadbeceb67f7, !1, [
                        [7, [21, 46, !1, null, 0]]
                    ]]
                ],
                [
                    [0, null, !1, null, 0xc0820a36fc748, [
                        [42, W.prototype.e.bb, null, 0, !1, !1, !1, 9893872054828678, !1, [
                            [10, 0],
                            [8, 5],
                            [7, [0, 2]]
                        ]]
                    ],
                        [
                            [43, W.prototype.d.Eg, null, 8095218805050366, !1, [
                                [0, [5, [20, 43, W.prototype.j.Opacity, !1, null],
                                    [6, [0, 100],
                                        [19, G.prototype.j.Pb]
                                    ]
                                ]]
                            ]],
                            [42, W.prototype.d.Eg, null, 9750406901491394, !1, [
                                [0, [20, 43, W.prototype.j.Opacity, !1, null]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0xee3a22ec78d05, [
                                [42, W.prototype.e.sk, null, 0, !1, !1, !1, 6046639361513399, !1, [
                                    [8, 3],
                                    [0, [0, 0]]
                                ]]
                            ],
                                [
                                    [43, W.prototype.d.ki, null, 6106488165717094, !1],
                                    [42, W.prototype.d.ki, null, 6016375202727981, !1],
                                    [10, W.prototype.d.Ua, null, 0xa564791ecb044, !1, [
                                        [10, 0],
                                        [7, [0, 1]]
                                    ]]
                                ]
                            ]
                        ]
                    ]
                ]
            ],
            [0, null, !1, null, 9428139300397006, [
                [-1, G.prototype.e.Oe, null, 1, !1, !1, !1, 0xd94f6645c2fb6, !1]
            ],
                [
                    [10, W.prototype.d.Ua, null, 0xbe933eb1610e7, !1, [
                        [10, 4],
                        [7, [19, G.prototype.j["int"],
                            [
                                [19, G.prototype.j.random, [
                                    [0, 1],
                                    [0, 7]
                                ]]
                            ]
                        ]]
                    ]],
                    [10, W.prototype.d.Ua, null, 62448676295053, !1, [
                        [10, 5],
                        [7, [19, G.prototype.j["int"],
                            [
                                [19, G.prototype.j.random, [
                                    [0, 1],
                                    [0, 6]
                                ]]
                            ]
                        ]]
                    ]],
                    [44, Q.prototype.d.xb, null, 552602331810734, !1, [
                        [0, [21, 10, !1, null, 4]],
                        [0, [21, 10, !1, null, 5]],
                        [7, [0, 2]]
                    ]],
                    [10, W.prototype.d.Ua, null, 7787422961535595, !1, [
                        [10, 0],
                        [7, [0, -2]]
                    ]],
                    [10, W.prototype.d.Ua, null, 7216862794879026, !1, [
                        [10, 3],
                        [7, [4, [0, 3],
                            [23, "stage"]
                        ]]
                    ]],
                    [46, Y.prototype.d.Ua, null, 7003810415626365, !1, [
                        [10, 0],
                        [7, [5, [0, 21],
                            [23, "stage"]
                        ]]
                    ]],
                    [46, Y.prototype.d.sb, null, 8774994835560032, !1, [
                        [7, [21, 46, !1, null, 0]]
                    ]],
                    [10, W.prototype.d.ga, null, 0x944345187f270, !1, [
                        [10, 7],
                        [3, 0]
                    ]],
                    [43, W.prototype.d.W, null, 4705334284365776, !1, [
                        [0, [23, "stage"]]
                    ]],
                    [56, Y.prototype.d.Oa, null, 0x90f8286357c91, !1, [
                        [3, 0]
                    ]],
                    [54, W.prototype.d.Oa, null, 704055848840755, !1, [
                        [3, 0]
                    ]],
                    [55, W.prototype.d.Oa, null, 8500158442722365, !1, [
                        [3, 0]
                    ]],
                    [-1, G.prototype.d.je, null, 0xa17b3a303a213, !1, [
                        [11, "hscore"],
                        [7, [19, G.prototype.j["int"],
                            [
                                [20, 0, Xb.prototype.j.vk, !0, null, [
                                    [2, "piratescore"]
                                ]]
                            ]
                        ]]
                    ]],
                    [52, Y.prototype.d.sb, null, 0x4964018e3f013, !1, [
                        [7, [23, "hscore"]]
                    ]],
                    [57, W.prototype.d.Oa, null, 8630324761419138, !1, [
                        [3, 0]
                    ]],
                    [59, W.prototype.d.Oa, null, 8144555056305342, !1, [
                        [3, 0]
                    ]]
                ]
            ],
            [0, null, !1, null, 515164942978525, [
                [10, W.prototype.e.bb, null, 0, !1, !1, !1, 8093373540371912, !1, [
                    [10, 0],
                    [8, 0],
                    [7, [0, 1]]
                ]]
            ],
                [
                    [46, Y.prototype.d.sb, null, 4905277132165835, !1, [
                        [7, [21, 46, !1, null, 0]]
                    ]]
                ],
                [
                    [0, null, !1, null, 4680985614982869, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 0x9c25e8d64099c, !1, [
                            [4, 11]
                        ]],
                        [11, W.prototype.e.ka, null, 0, !1, !1, !1, 56164947989625, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [11, W.prototype.d.W, null, 6325054290278057, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 1],
                                    [0, 1]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 0xe4d0cd29f7eba, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 0xfd79b8396248d, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 6821460073109399, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 433992069737576, !1, [
                                    [0, [0, 1]],
                                    [0, [0, 1]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [11, W.prototype.d.la, null, 0x52e59e942da23, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 5739646693259822, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 0xf7028e089b14, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 8010989255348183, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 4838216078443647, !1, [
                                    [0, [0, 1]],
                                    [0, [0, 1]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 0x4a9eddd004069, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 0xbcd07335274b9, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 5519815611015292, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 7319751558636371, !1, [
                            [4, 12]
                        ]],
                        [12, W.prototype.e.ka, null, 0, !1, !1, !1, 0xeb439300eec48, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [12, W.prototype.d.W, null, 956008363314374, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 1],
                                    [0, 2]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 9487600583667038, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 5831781398539859, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 7105627736118562, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 0x85026c804b603, !1, [
                                    [0, [0, 1]],
                                    [0, [0, 2]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [12, W.prototype.d.la, null, 5186979778313121, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 9208327132275354, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 8710662630242867, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 635318291711999, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 9743520175996482, !1, [
                                    [0, [0, 1]],
                                    [0, [0, 2]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 78448911294911, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 9527550855318096, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 6910979306844652, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 94300206070524, !1, [
                            [4, 13]
                        ]],
                        [13, W.prototype.e.ka, null, 0, !1, !1, !1, 0xac548f9630ab9, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [13, W.prototype.d.W, null, 9125132846886464, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 1],
                                    [0, 3]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 7719962078122826, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 5106186976729984, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 9713974406583824, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 6428040505875128, !1, [
                                    [0, [0, 1]],
                                    [0, [0, 3]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [13, W.prototype.d.la, null, 835353461032163, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 0x4c0b3c236447f, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 0x6df624047eb7c, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0x42c91077a64dc, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 487763854411327, !1, [
                                    [0, [0, 1]],
                                    [0, [0, 3]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 9695716580543158, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 7236142370413983, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 8557864733611567, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 8832952201186332, !1, [
                            [4, 14]
                        ]],
                        [14, W.prototype.e.ka, null, 0, !1, !1, !1, 0x430a48250001a, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [14, W.prototype.d.W, null, 5629723865965039, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 1],
                                    [0, 4]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 5767557968694845, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 8740908980168339, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 374787679178857, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 0x60a0fe80ea0a3, !1, [
                                    [0, [0, 1]],
                                    [0, [0, 4]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [14, W.prototype.d.la, null, 0x99f4a7468b94f, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 928200008943688, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 0x4aee998aee976, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 6995704173192887, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 7098381816477589, !1, [
                                    [0, [0, 1]],
                                    [0, [0, 4]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 5991198808552789, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 0x66fbf4b040342, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0x5971b96ea85b3, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 5091562469617916, !1, [
                            [4, 15]
                        ]],
                        [15, W.prototype.e.ka, null, 0, !1, !1, !1, 8058581336500361, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [15, W.prototype.d.W, null, 9157563051748718, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 1],
                                    [0, 5]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 9747522696346942, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 0xf38f05956f489, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0x505b5d1bee606, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 9009273690682456, !1, [
                                    [0, [0, 1]],
                                    [0, [0, 5]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [15, W.prototype.d.la, null, 7537350819159635, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 0x8c7fcf2543b1, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 9227384490974088, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0xd9beb4fbccbb8, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 8294452672933004, !1, [
                                    [0, [0, 1]],
                                    [0, [0, 5]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 0xff6cb8fd14293, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 6412139027671237, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 5860274985847111, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 0xfbf4a666f1eec, !1, [
                            [4, 16]
                        ]],
                        [16, W.prototype.e.ka, null, 0, !1, !1, !1, 6074401554317759, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [16, W.prototype.d.W, null, 6387584668418409, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 2],
                                    [0, 1]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 8602071507311502, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 7104818763685597, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0xdf12b6dc55f0d, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 763596429775583, !1, [
                                    [0, [0, 2]],
                                    [0, [0, 1]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [16, W.prototype.d.la, null, 0x76e715a7b488d, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 0x9873cc9c3014b, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 0xaf075faa3fde4, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0xb5e97408cba88, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 0xd6b0cc648807a, !1, [
                                    [0, [0, 2]],
                                    [0, [0, 1]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 8668790121723069, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 0x9a64e33c338a7, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0xb2896825f9414, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 7970682918536977, !1, [
                            [4, 17]
                        ]],
                        [17, W.prototype.e.ka, null, 0, !1, !1, !1, 204604156755, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [17, W.prototype.d.W, null, 8831714437725519, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 2],
                                    [0, 2]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 0xac584dd1eaf43, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 9936579604639676, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0x3a374b7d0abf4, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 9668148254088372, !1, [
                                    [0, [0, 2]],
                                    [0, [0, 2]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [17, W.prototype.d.la, null, 0xe7b9f4f8c40d0, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 0x94ba16f973827, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 0x3d3e1dcbe5f02, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0xba5abe2d4caa6, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 0x62236d745a014, !1, [
                                    [0, [0, 2]],
                                    [0, [0, 2]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 6262939606219001, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 0xa2d7c5d08b13b, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 8661093455627968, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 8388231172529488, !1, [
                            [4, 18]
                        ]],
                        [18, W.prototype.e.ka, null, 0, !1, !1, !1, 0x7e4f28980b983, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [18, W.prototype.d.W, null, 7280527287545613, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 2],
                                    [0, 3]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 0x9d73306e21567, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 0x3d1f1e0846aea, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 6771846293254702, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 0x569f15a79db60, !1, [
                                    [0, [0, 2]],
                                    [0, [0, 3]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [18, W.prototype.d.la, null, 5961391948112866, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 6681641192721084, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 7468733965736345, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 9122388226687228, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 6341118692059682, !1, [
                                    [0, [0, 2]],
                                    [0, [0, 3]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 9463331861942296, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 0x3ac1d8a7d84ac, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 828445305171716, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 797614307041455, !1, [
                            [4, 19]
                        ]],
                        [19, W.prototype.e.ka, null, 0, !1, !1, !1, 930454105524139, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [19, W.prototype.d.W, null, 0xf402e727272b9, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 2],
                                    [0, 4]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 6245890225983906, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 5183026906801948, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 6175049020131243, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 7598935127574336, !1, [
                                    [0, [0, 2]],
                                    [0, [0, 4]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [19, W.prototype.d.la, null, 0xfdd317515fd7f, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 0x77c2a29cc003b, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 8266482891810577, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0x5ed8eec77b939, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 0xe6d3cfa262328, !1, [
                                    [0, [0, 2]],
                                    [0, [0, 4]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 7498905629467439, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 6600209578972289, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 5600907848082196, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 0xe77f8509076f7, !1, [
                            [4, 20]
                        ]],
                        [20, W.prototype.e.ka, null, 0, !1, !1, !1, 446658106384572, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [20, W.prototype.d.W, null, 7404731871894043, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 2],
                                    [0, 5]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 6642928103864341, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 0xf7a75b9ab3e0c, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0x69b58c015f0be, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 6894919615856303, !1, [
                                    [0, [0, 2]],
                                    [0, [0, 5]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [20, W.prototype.d.la, null, 0x4218ef187a157, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 852534470689071, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 7215095655979918, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 7379759084246124, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 9494104213185624, !1, [
                                    [0, [0, 2]],
                                    [0, [0, 5]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 8846458563677753, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 5055680089007268, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 7692821124457711, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 0x94872aa685e88, !1, [
                            [4, 21]
                        ]],
                        [21, W.prototype.e.ka, null, 0, !1, !1, !1, 8458061473149999, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [21, W.prototype.d.W, null, 0x6a541ced82f91, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 3],
                                    [0, 1]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 662190945410211, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 5498513707225086, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 4726327584724906, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 7669840834723684, !1, [
                                    [0, [0, 3]],
                                    [0, [0, 1]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [21, W.prototype.d.la, null, 5077372938939593, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 5760993684124317, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 6920684627418257, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0x51d493ba0b173, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 8899004095713134, !1, [
                                    [0, [0, 3]],
                                    [0, [0, 1]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 9985751531539668, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 8684040901835741, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 8687772791183838, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 6310447815744479, !1, [
                            [4, 22]
                        ]],
                        [22, W.prototype.e.ka, null, 0, !1, !1, !1, 9514250521792548, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [22, W.prototype.d.W, null, 5688085159727484, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 3],
                                    [0, 2]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 0x626e6ced80757, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 9996899738158832, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0x39836d2b9b5cd, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 7968937444844388, !1, [
                                    [0, [0, 3]],
                                    [0, [0, 2]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [22, W.prototype.d.la, null, 8965796054182646, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 0x9788c339878d1, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 6325858776134459, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 8823883749169943, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 0xf08f4d71b50c3, !1, [
                                    [0, [0, 3]],
                                    [0, [0, 2]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 4561998826199723, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 6436062458032966, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 8014436845243776, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 944842416702908, !1, [
                            [4, 23]
                        ]],
                        [23, W.prototype.e.ka, null, 0, !1, !1, !1, 9776450632340116, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [23, W.prototype.d.W, null, 4771000951671377, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 3],
                                    [0, 3]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 0x88eb31b47ad10, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 8812209563701296, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0x825fd47d86498, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 0xccf9b37b00066, !1, [
                                    [0, [0, 3]],
                                    [0, [0, 3]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [23, W.prototype.d.la, null, 6555600469560842, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 0xac0c3247133ff, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 8533527309831371, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0x52dee7ce82ded, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 876710355783325, !1, [
                                    [0, [0, 3]],
                                    [0, [0, 3]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 4523609990283288, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 7881211155539776, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 9311686494153652, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 991748291846879, !1, [
                            [4, 24]
                        ]],
                        [24, W.prototype.e.ka, null, 0, !1, !1, !1, 0x5da12d64f7e85, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [24, W.prototype.d.W, null, 0x8311ffef5fa7b, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 3],
                                    [0, 4]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 0xf91a6e20b699c, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 7312560707533712, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 805311667133117, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 0xa58c61e7eeb29, !1, [
                                    [0, [0, 3]],
                                    [0, [0, 4]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [24, W.prototype.d.la, null, 0x647649ff03363, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 4936951900033605, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 5635846108483113, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 5707017599803766, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 0xf8a2f5bd2225d, !1, [
                                    [0, [0, 3]],
                                    [0, [0, 4]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 0xd2cd8533bc519, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 8765684886490424, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 8627490718648413, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 6093472058903419, !1, [
                            [4, 25]
                        ]],
                        [25, W.prototype.e.ka, null, 0, !1, !1, !1, 0xc3eac61f2a413, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [25, W.prototype.d.W, null, 0xc70f4f3f7b80e, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 3],
                                    [0, 5]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 0x4c412c716037f, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 7992163188831409, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 4834909000628364, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 8280053997349187, !1, [
                                    [0, [0, 3]],
                                    [0, [0, 5]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [25, W.prototype.d.la, null, 0x7e9ed2ac4e564, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 0xe13234ff751ee, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 0xcfe5ee3d07162, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 875849472791742, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 5789152861226876, !1, [
                                    [0, [0, 3]],
                                    [0, [0, 5]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 935316748514163, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 0xc75bc7ec3ad8f, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0xdeedc78fdf8ba, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 6703205652680473, !1, [
                            [4, 26]
                        ]],
                        [26, W.prototype.e.ka, null, 0, !1, !1, !1, 973823442087969, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [26, W.prototype.d.W, null, 8450075380565138, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 4],
                                    [0, 1]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 0xe092aa8907013, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 0xf39ddae6f152a, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0xe493765b89cc6, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 9693288292230448, !1, [
                                    [0, [0, 4]],
                                    [0, [0, 1]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [26, W.prototype.d.la, null, 0xd8a5c019827ab, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 0x7335df8910297, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 7406984061396296, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0xb72ca3705c3ab, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 0x4625ca54a0f93, !1, [
                                    [0, [0, 4]],
                                    [0, [0, 1]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 5553067469822639, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 0x99f1999395a18, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 6020489002218502, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 0xf5c5d0ec313da, !1, [
                            [4, 27]
                        ]],
                        [27, W.prototype.e.ka, null, 0, !1, !1, !1, 0xb434ed8f333fc, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [27, W.prototype.d.W, null, 7866908825012352, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 4],
                                    [0, 2]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 5441718259352465, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 5275238271526718, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 4708396190824787, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 4581522818541157, !1, [
                                    [0, [0, 4]],
                                    [0, [0, 2]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [27, W.prototype.d.la, null, 0x949f465a013e1, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 0x5a7c3ffb9dfd5, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 9667914837596234, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 493351975535146, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 4837784858394301, !1, [
                                    [0, [0, 4]],
                                    [0, [0, 2]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 0xaa0255bbb5ddc, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 0x8d75b6c901a9c, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 8334270311730991, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 0xf867b0e247b54, !1, [
                            [4, 28]
                        ]],
                        [28, W.prototype.e.ka, null, 0, !1, !1, !1, 0x5ee733347999c, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [28, W.prototype.d.W, null, 0xa2775ec399021, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 4],
                                    [0, 3]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 0xc86b8cf68383b, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 9028904082313538, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 5217187193044854, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 8841538094275232, !1, [
                                    [0, [0, 4]],
                                    [0, [0, 3]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [28, W.prototype.d.la, null, 7161026734912228, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 7263684418096546, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 7017280567285231, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 7349883489922595, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 0xdc13868eaf4dd, !1, [
                                    [0, [0, 4]],
                                    [0, [0, 3]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 7437429154649406, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 5152689318172457, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0xac9bd0ca7f613, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 0xa0377bd9d10fb, !1, [
                            [4, 29]
                        ]],
                        [29, W.prototype.e.ka, null, 0, !1, !1, !1, 5441996263948044, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [29, W.prototype.d.W, null, 5550085437455034, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 4],
                                    [0, 4]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 9079787653225840, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 7261977897836998, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 7034042285725751, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 0x9442d4b26a103, !1, [
                                    [0, [0, 4]],
                                    [0, [0, 4]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [29, W.prototype.d.la, null, 7098045673212926, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 0x6a42093becf4e, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 700751909047072, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 36199812082473, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 0x55dbbf648a4fe, !1, [
                                    [0, [0, 4]],
                                    [0, [0, 4]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 6362910755255544, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 0xe5c3733a95b54, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 4714363800253139, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 0xc6d7d2f573d79, !1, [
                            [4, 30]
                        ]],
                        [30, W.prototype.e.ka, null, 0, !1, !1, !1, 6291796067873006, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [30, W.prototype.d.W, null, 8595430885574619, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 4],
                                    [0, 5]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 0xe0783d942c281, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 7352306112756253, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0xd69c1751a38ca, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 0x74a4391a2bdd5, !1, [
                                    [0, [0, 4]],
                                    [0, [0, 5]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [30, W.prototype.d.la, null, 631921918924849, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 7889810413889199, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 8830945726070404, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0xee1f5c5777540, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 6344877111056549, !1, [
                                    [0, [0, 4]],
                                    [0, [0, 5]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 4856394227547827, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 5221479025028243, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0xae6aa3fafceac, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 5298171060973444, !1, [
                            [4, 31]
                        ]],
                        [31, W.prototype.e.ka, null, 0, !1, !1, !1, 7613582351363245, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [31, W.prototype.d.W, null, 688928618447537, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 5],
                                    [0, 1]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 4871350099096541, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 6819273402263033, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 7981844572516803, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 0x39f5529c09ce2, !1, [
                                    [0, [0, 5]],
                                    [0, [0, 1]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [31, W.prototype.d.la, null, 0x6effb91dbf5c4, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 6634662671435405, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 8144284750332596, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0x8dc31f36e6d2a, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 6585027375494649, !1, [
                                    [0, [0, 5]],
                                    [0, [0, 1]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 7970006788955913, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 0xe7f4f7e6616b6, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0x784d9b40805bb, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 0xd7f0614037100, !1, [
                            [4, 32]
                        ]],
                        [32, W.prototype.e.ka, null, 0, !1, !1, !1, 0xec2c8551eab13, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [32, W.prototype.d.W, null, 7570534298909205, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 5],
                                    [0, 2]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 8233790605893731, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 4507662950131614, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 9850857990855404, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 6562210970532027, !1, [
                                    [0, [0, 5]],
                                    [0, [0, 2]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [32, W.prototype.d.la, null, 7966249519307772, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 8640631505627539, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 9180872549136748, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 8862505793041752, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 4644539290325171, !1, [
                                    [0, [0, 5]],
                                    [0, [0, 2]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 7972340787102259, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 0x3b88ff4636850, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 9891462652455518, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 0x5c751ec9dbb2c, !1, [
                            [4, 33]
                        ]],
                        [33, W.prototype.e.ka, null, 0, !1, !1, !1, 0xa96bb351be304, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [33, W.prototype.d.W, null, 4933107536639151, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 5],
                                    [0, 3]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 76031572864335, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 5205998720808163, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 8482243418914624, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 9765858140237280, !1, [
                                    [0, [0, 5]],
                                    [0, [0, 3]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [33, W.prototype.d.la, null, 0xbd0f7867e9431, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 0xe2e48e2be1f6f, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 9797547372549212, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 7176512527313429, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 0x77bf6f57881b6, !1, [
                                    [0, [0, 5]],
                                    [0, [0, 3]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 7249288940255384, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 390924685304001, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 6316555965851716, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 5914761723632175, !1, [
                            [4, 34]
                        ]],
                        [34, W.prototype.e.ka, null, 0, !1, !1, !1, 9013428642245184, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [34, W.prototype.d.W, null, 8724575531196177, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 5],
                                    [0, 4]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 7550362668872335, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 0xa358967486e88, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 9284286014328960, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 0xb7ee014f11257, !1, [
                                    [0, [0, 5]],
                                    [0, [0, 4]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [34, W.prototype.d.la, null, 6243415690449274, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 0x759fb379a9797, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 7691068886629711, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 8572870506802289, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 7408235918217368, !1, [
                                    [0, [0, 5]],
                                    [0, [0, 4]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 4732188174910725, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 5585417358106703, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0xec916b71e3504, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 9491748167854296, !1, [
                            [4, 35]
                        ]],
                        [35, W.prototype.e.ka, null, 0, !1, !1, !1, 5565661226145354, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [35, W.prototype.d.W, null, 4661273809798629, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 5],
                                    [0, 5]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 9421522764708724, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 5887325996216296, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 6135548343649582, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 9870056136738136, !1, [
                                    [0, [0, 5]],
                                    [0, [0, 5]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [35, W.prototype.d.la, null, 0xb9520ab72ca31, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 5068098778668277, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 7705857274038579, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0x7c5873c1664ac, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 8143698522391279, !1, [
                                    [0, [0, 5]],
                                    [0, [0, 5]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 0xb9803fb907134, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 0xf55d28d70f184, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 308401187647118, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 9967589440443392, !1, [
                            [4, 36]
                        ]],
                        [36, W.prototype.e.ka, null, 0, !1, !1, !1, 6045353182939121, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [36, W.prototype.d.W, null, 5585487656645262, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 6],
                                    [0, 1]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 8927621017671407, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 0x7f9059919b378, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 5682640795721498, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 0xc147a518e2373, !1, [
                                    [0, [0, 6]],
                                    [0, [0, 1]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [36, W.prototype.d.la, null, 0xd77943e7c40e2, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 7004580786100624, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 0x555dfc3fa43ab, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 9499758666064088, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 0xfa80a787a281f, !1, [
                                    [0, [0, 6]],
                                    [0, [0, 1]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 4699483286715256, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 0xadcf65b671ec, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0x3cc57ddded2b0, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 0xd3dc8055490ab, !1, [
                            [4, 37]
                        ]],
                        [37, W.prototype.e.ka, null, 0, !1, !1, !1, 0x563a0932e08f1, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [37, W.prototype.d.W, null, 0x90703698f0b90, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 6],
                                    [0, 2]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 0xc86b932f82573, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 580948780843745, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 7860761531808968, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 0x6393f2d044675, !1, [
                                    [0, [0, 6]],
                                    [0, [0, 2]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [37, W.prototype.d.la, null, 8750640061960282, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 6891814759886395, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 0x7ac25e444bcac, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 9917960831437292, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 0xac93910eaa05b, !1, [
                                    [0, [0, 6]],
                                    [0, [0, 2]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 9240257546895320, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 6529546486935463, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 9971723012257888, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 7208241630047792, !1, [
                            [4, 38]
                        ]],
                        [38, W.prototype.e.ka, null, 0, !1, !1, !1, 4703429480359151, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [38, W.prototype.d.W, null, 906442107945374, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 6],
                                    [0, 3]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 9178198413225212, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 0xcd2094966a897, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 6647739130647337, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 0x4c5243d03f21b, !1, [
                                    [0, [0, 6]],
                                    [0, [0, 3]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [38, W.prototype.d.la, null, 9452848834068196, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 7974496331853087, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 9265123316262808, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0xd92590bcff1aa, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 6646221446287173, !1, [
                                    [0, [0, 6]],
                                    [0, [0, 3]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 0x98a8c2e3a3ee6, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 0x3be2a1f9f4a17, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 7236577804089003, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 0xc4d2b24f6d2b5, !1, [
                            [4, 39]
                        ]],
                        [39, W.prototype.e.ka, null, 0, !1, !1, !1, 0x95b5a8cd2b5b0, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [39, W.prototype.d.W, null, 9170417816379644, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 6],
                                    [0, 4]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 0x912b9ca8b8d05, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 6414618459924397, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0x8ff5f3f036a58, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 6859648800684827, !1, [
                                    [0, [0, 6]],
                                    [0, [0, 4]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [39, W.prototype.d.la, null, 9416563168571472, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 0xf8a62f6327903, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 0xb9b62815efddf, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0xbadf2e52116d1, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 0xee95f9910ec4f, !1, [
                                    [0, [0, 6]],
                                    [0, [0, 4]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 0x3e4ea8d2eab7c, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 0xfbcf03f84ed6f, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 6071804778384511, [
                        [1, Z.prototype.e.K, null, 1, !1, !1, !1, 9555322081618608, !1, [
                            [4, 40]
                        ]],
                        [40, W.prototype.e.ka, null, 0, !1, !1, !1, 371388939881549, !1, [
                            [8, 0],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [40, W.prototype.d.W, null, 8054567198899677, !1, [
                                [0, [20, 44, Q.prototype.j.ja, !1, null, [
                                    [0, 6],
                                    [0, 5]
                                ]]]
                            ]],
                            [46, Y.prototype.d.u, null, 8082709681262841, !1, [
                                [10, 0],
                                [7, [0, 1]]
                            ]],
                            [-1, G.prototype.d.A, null, 4823428906057436, !1, [
                                [11, "score"],
                                [7, [4, [0, 5],
                                    [23, "stage"]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0xe298124aacb01, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 0x64c96586d5be4, !1, [
                                    [0, [0, 6]],
                                    [0, [0, 5]],
                                    [8, 0],
                                    [7, [0, 1]]
                                ]]
                            ],
                                [
                                    [40, W.prototype.d.la, null, 0xb64bb3eab6538, !1, [
                                        [4, 48],
                                        [5, [0, 0]],
                                        [7, [0, 0]]
                                    ]],
                                    [46, Y.prototype.d.u, null, 4758224297414341, !1, [
                                        [10, 0],
                                        [7, [0, 3]]
                                    ]],
                                    [-1, G.prototype.d.ma, null, 0x4898b96d4a6b2, !1, [
                                        [11, "score"],
                                        [7, [4, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 8832436192084111, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 8426879611032547, !1, [
                                    [0, [0, 6]],
                                    [0, [0, 5]],
                                    [8, 0],
                                    [7, [0, 2]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.ga, null, 0x8a140078d4d0a, !1, [
                                        [10, 7],
                                        [3, 1]
                                    ]],
                                    [-1, G.prototype.d.A, null, 7481010692171129, !1, [
                                        [11, "score"],
                                        [7, [6, [0, 10],
                                            [23, "stage"]
                                        ]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 7036274491587597, [
                        [46, Y.prototype.e.bb, null, 0, !1, !1, !1, 7873730688124982, !1, [
                            [10, 0],
                            [8, 3],
                            [7, [0, 0]]
                        ]]
                    ],
                        [],
                        [
                            [0, null, !1, null, 0xec03a32c35797, [
                                [10, W.prototype.e.uk, null, 0, !1, !0, !1, 9906113128053708, !1, [
                                    [10, 7]
                                ]]
                            ],
                                [
                                    [47, W.prototype.d.W, null, 6641363831270874, !1, [
                                        [0, [0, 1]]
                                    ]],
                                    [-1, G.prototype.d.wf, null, 52533774664136, !1, [
                                        [0, [1, 1]]
                                    ]]
                                ],
                                [
                                    [0, null, !1, null, 6935021596965398, [
                                        [44, Q.prototype.e.hi, null, 0, !0, !1, !1, 0x6d50e115fe3e6, !1, [
                                            [3, 1]
                                        ]]
                                    ],
                                        [
                                            [44, Q.prototype.d.xb, null, 4509662451266114, !1, [
                                                [0, [20, 44, Q.prototype.j.cb, !1, null]],
                                                [0, [20, 44, Q.prototype.j.Ga, !1, null]],
                                                [7, [0, 0]]
                                            ]]
                                        ]
                                    ],
                                    [0, null, !1, null, 9478757132724998, [
                                        [-1, G.prototype.e.ji, null, 0, !1, !1, !1, 4733446898489337, !1, [
                                            [11, "score"],
                                            [8, 4],
                                            [7, [23, "hscore"]]
                                        ]]
                                    ],
                                        [
                                            [0, Xb.prototype.d.Fk, null, 5179000120986361, !1, [
                                                [1, [2, "piratescore"]],
                                                [7, [23, "score"]]
                                            ]],
                                            [-1, G.prototype.d.je, null, 7160910026441149, !1, [
                                                [11, "hscore"],
                                                [7, [23, "score"]]
                                            ]],
                                            [56, Y.prototype.d.sb, null, 6711676832657914, !1, [
                                                [7, [23, "hscore"]]
                                            ]],
                                            [10, W.prototype.d.Ua, null, 7290983572911208, !1, [
                                                [10, 0],
                                                [7, [0, 10]]
                                            ]],
                                            [47, W.prototype.d.Oa, null, 7095581208037083, !1, [
                                                [3, 1]
                                            ]],
                                            [56, Y.prototype.d.Oa, null, 0xa12b14deff8f2, !1, [
                                                [3, 1]
                                            ]],
                                            [54, W.prototype.d.Oa, null, 0xea836ebb645b0, !1, [
                                                [3, 1]
                                            ]],
                                            [55, W.prototype.d.Oa, null, 8004513611222707, !1, [
                                                [3, 1]
                                            ]],
                                            [57, W.prototype.d.Oa, null, 6485957870472969, !1, [
                                                [3, 1]
                                            ]]
                                        ]
                                    ],
                                    [0, null, !1, null, 0xbb493676991dc, [
                                        [-1, G.prototype.e.gc, null, 0, !1, !1, !1, 9357223392468544, !1]
                                    ],
                                        [
                                            [56, Y.prototype.d.sb, null, 0x66b34de2ed12c, !1, [
                                                [7, [23, "hscore"]]
                                            ]],
                                            [10, W.prototype.d.Ua, null, 8940090389767534, !1, [
                                                [10, 0],
                                                [7, [0, 10]]
                                            ]],
                                            [47, W.prototype.d.Oa, null, 0x92d86db8e18fd, !1, [
                                                [3, 1]
                                            ]],
                                            [56, Y.prototype.d.Oa, null, 0xa577364de55db, !1, [
                                                [3, 1]
                                            ]],
                                            [54, W.prototype.d.Oa, null, 5461316355219865, !1, [
                                                [3, 1]
                                            ]],
                                            [55, W.prototype.d.Oa, null, 8570003046363181, !1, [
                                                [3, 1]
                                            ]]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 548738535875104, [
                        [10, W.prototype.e.uk, null, 0, !1, !1, !1, 5936349769795546, !1, [
                            [10, 7]
                        ]]
                    ],
                        [],
                        [
                            [0, null, !1, null, 5502826460903383, [
                                [44, Q.prototype.e.hi, null, 0, !0, !1, !1, 0xba10c097e469a, !1, [
                                    [3, 1]
                                ]]
                            ],
                                [
                                    [44, Q.prototype.d.xb, null, 4660154610838404, !1, [
                                        [0, [20, 44, Q.prototype.j.cb, !1, null]],
                                        [0, [20, 44, Q.prototype.j.Ga, !1, null]],
                                        [7, [0, 0]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 502257063824693, [
                                [-1, G.prototype.e.ji, null, 0, !1, !1, !1, 4795736372486901, !1, [
                                    [11, "stage"],
                                    [8, 2],
                                    [7, [0, 9]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.Ua, null, 0x693550852572b, !1, [
                                        [10, 0],
                                        [7, [0, 5]]
                                    ]],
                                    [-1, G.prototype.d.A, null, 0xc5b66c2d9fd1e, !1, [
                                        [11, "stage"],
                                        [7, [0, 1]]
                                    ]],
                                    [47, W.prototype.d.W, null, 6939038053768631, !1, [
                                        [0, [0, 0]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 83784431915189, [
                                [-1, G.prototype.e.gc, null, 0, !1, !1, !1, 0x818f0a4608419, !1]
                            ],
                                [
                                    [10, W.prototype.d.Ua, null, 5489235851116162, !1, [
                                        [10, 0],
                                        [7, [0, 6]]
                                    ]],
                                    [47, W.prototype.d.W, null, 0xead454e55e557, !1, [
                                        [0, [0, 0]]
                                    ]]
                                ]
                            ]
                        ]
                    ]
                ]
            ],
            [0, null, !1, null, 7276145401204365, [
                [10, W.prototype.e.bb, null, 0, !1, !1, !1, 0x78240c5543a1, !1, [
                    [10, 0],
                    [8, 0],
                    [7, [0, -2]]
                ]]
            ],
                [
                    [46, Y.prototype.d.sb, null, 6180422675092707, !1, [
                        [7, [21, 46, !1, null, 0]]
                    ]]
                ],
                [
                    [0, null, !1, null, 6616778386046091, [
                        [10, W.prototype.e.bb, null, 0, !1, !1, !1, 0xbf4c355350636, !1, [
                            [10, 3],
                            [8, 3],
                            [7, [0, 0]]
                        ]]
                    ],
                        [
                            [10, W.prototype.d.Ua, null, 6405476395413566, !1, [
                                [10, 1],
                                [7, [0, 0]]
                            ]],
                            [10, W.prototype.d.Ua, null, 5865102016467162, !1, [
                                [10, 2],
                                [7, [0, 0]]
                            ]],
                            [10, W.prototype.d.Ua, null, 9211914534557404, !1, [
                                [10, 0],
                                [7, [0, -1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0x3a67f50e24601, [
                        [-1, G.prototype.e.gc, null, 0, !1, !1, !1, 0x9f4019f9b4522, !1]
                    ],
                        [
                            [45, Y.prototype.d.sb, null, 0xf104b017870c9, !1, [
                                [7, [2, "mamam"]]
                            ]],
                            [10, W.prototype.d.Ua, null, 0xe639ecaa4a1ea, !1, [
                                [10, 1],
                                [7, [19, G.prototype.j["int"],
                                    [
                                        [19, G.prototype.j.random, [
                                            [0, 1],
                                            [0, 7]
                                        ]]
                                    ]
                                ]]
                            ]],
                            [10, W.prototype.d.Ua, null, 5902689363249065, !1, [
                                [10, 2],
                                [7, [19, G.prototype.j["int"],
                                    [
                                        [19, G.prototype.j.random, [
                                            [0, 1],
                                            [0, 6]
                                        ]]
                                    ]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0xbf314a9880729, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 7354595289377534, !1, [
                                    [0, [21, 10, !1, null, 1]],
                                    [0, [21, 10, !1, null, 2]],
                                    [8, 0],
                                    [7, [0, 0]]
                                ]]
                            ],
                                [
                                    [44, Q.prototype.d.xb, null, 6356413664826476, !1, [
                                        [0, [21, 10, !1, null, 1]],
                                        [0, [21, 10, !1, null, 2]],
                                        [7, [0, 1]]
                                    ]],
                                    [10, W.prototype.d.u, null, 0xfa17d204f663d, !1, [
                                        [10, 3],
                                        [7, [0, 1]]
                                    ]]
                                ]
                            ]
                        ]
                    ]
                ]
            ],
            [0, null, !1, null, 5974687284193703, [
                [10, W.prototype.e.bb, null, 0, !1, !1, !1, 915429645158218, !1, [
                    [10, 0],
                    [8, 0],
                    [7, [0, -1]]
                ]]
            ],
                [
                    [46, Y.prototype.d.sb, null, 337490845602834, !1, [
                        [7, [21, 46, !1, null, 0]]
                    ]]
                ],
                [
                    [0, null, !1, null, 8476876453866059, [
                        [44, Q.prototype.e.hi, null, 0, !0, !1, !1, 9293812640838260, !1, [
                            [3, 1]
                        ]]
                    ],
                        [],
                        [
                            [0, null, !1, null, 7600850496596032, [
                                [44, Q.prototype.e.q, null, 0, !1, !1, !1, 6005288552486248, !1, [
                                    [0, [20, 44, Q.prototype.j.cb, !1, null]],
                                    [0, [20, 44, Q.prototype.j.Ga, !1, null]],
                                    [8, 0],
                                    [7, [0, 0]]
                                ]]
                            ],
                                [
                                    [10, W.prototype.d.Ua, null, 27792824268022, !1, [
                                        [10, 6],
                                        [7, [19, G.prototype.j.random, [
                                            [0, 0],
                                            [0, 100]
                                        ]]]
                                    ]]
                                ],
                                [
                                    [0, null, !1, null, 0x915a09b07dff8, [
                                        [-1, G.prototype.e.Na, null, 0, !1, !1, !1, 318498417264129, !1, [
                                            [7, [20, 44, Q.prototype.j.cb, !1, null]],
                                            [8, 2],
                                            [7, [21, 10, !1, null, 4]]
                                        ]]
                                    ],
                                        [
                                            [45, Y.prototype.d.sb, null, 571649881076938, !1, [
                                                [7, [10, [10, [10, [10, [10, [2, "xnya = "],
                                                    [20, 44, Q.prototype.j.cb, !1, null]
                                                ],
                                                    [2, "   | hartax = "]
                                                ],
                                                    [21, 10, !1, null, 4]
                                                ],
                                                    [2, "   | hartay = "]
                                                ],
                                                    [21, 10, !1, null, 5]
                                                ]]
                                            ]]
                                        ],
                                        [
                                            [0, null, !1, null, 0x48df294f8cb55, [
                                                [-1, G.prototype.e.Na, null, 0, !1, !1, !1, 7524795768624608, !1, [
                                                    [7, [20, 44, Q.prototype.j.Ga, !1, null]],
                                                    [8, 2],
                                                    [7, [21, 10, !1, null, 5]]
                                                ]]
                                            ],
                                                [],
                                                [
                                                    [0, null, !1, null, 0x520e8aecfb5bf, [
                                                        [10, W.prototype.e.bb, null, 0, !1, !1, !1, 4687866224452976, !1, [
                                                            [10, 6],
                                                            [8, 3],
                                                            [7, [0, 50]]
                                                        ]]
                                                    ],
                                                        [
                                                            [44, Q.prototype.d.xb, null, 0xbea17caa426f1, !1, [
                                                                [0, [20, 44, Q.prototype.j.cb, !1, null]],
                                                                [0, [20, 44, Q.prototype.j.Ga, !1, null]],
                                                                [7, [0, 5]]
                                                            ]]
                                                        ]
                                                    ],
                                                    [0, null, !1, null, 8679722385704942, [
                                                        [-1, G.prototype.e.gc, null, 0, !1, !1, !1, 9166368654363880, !1]
                                                    ],
                                                        [
                                                            [44, Q.prototype.d.xb, null, 4781640540627314, !1, [
                                                                [0, [20, 44, Q.prototype.j.cb, !1, null]],
                                                                [0, [20, 44, Q.prototype.j.Ga, !1, null]],
                                                                [7, [0, 4]]
                                                            ]]
                                                        ]
                                                    ]
                                                ]
                                            ],
                                            [0, null, !1, null, 6362439745548558, [
                                                [-1, G.prototype.e.Na, null, 0, !1, !1, !1, 0xf4d96bef0a202, !1, [
                                                    [7, [20, 44, Q.prototype.j.Ga, !1, null]],
                                                    [8, 4],
                                                    [7, [21, 10, !1, null, 5]]
                                                ]]
                                            ],
                                                [],
                                                [
                                                    [0, null, !1, null, 7998823793692421, [
                                                        [10, W.prototype.e.bb, null, 0, !1, !1, !1, 6318981501902969, !1, [
                                                            [10, 6],
                                                            [8, 3],
                                                            [7, [0, 50]]
                                                        ]]
                                                    ],
                                                        [
                                                            [44, Q.prototype.d.xb, null, 7231271104447412, !1, [
                                                                [0, [20, 44, Q.prototype.j.cb, !1, null]],
                                                                [0, [20, 44, Q.prototype.j.Ga, !1, null]],
                                                                [7, [0, 6]]
                                                            ]]
                                                        ]
                                                    ],
                                                    [0, null, !1, null, 0xfe6da324547bc, [
                                                        [-1, G.prototype.e.gc, null, 0, !1, !1, !1, 6413497077915638, !1]
                                                    ],
                                                        [
                                                            [44, Q.prototype.d.xb, null, 0x393b5d4738cee, !1, [
                                                                [0, [20, 44, Q.prototype.j.cb, !1, null]],
                                                                [0, [20, 44, Q.prototype.j.Ga, !1, null]],
                                                                [7, [0, 4]]
                                                            ]]
                                                        ]
                                                    ]
                                                ]
                                            ],
                                            [0, null, !1, null, 0x6cb686453f7ab, [
                                                [-1, G.prototype.e.Na, null, 0, !1, !1, !1, 0x95f6c1eaab817, !1, [
                                                    [7, [20, 44, Q.prototype.j.Ga, !1, null]],
                                                    [8, 0],
                                                    [7, [21, 10, !1, null, 5]]
                                                ]]
                                            ],
                                                [
                                                    [44, Q.prototype.d.xb, null, 0xca1e8937333df, !1, [
                                                        [0, [20, 44, Q.prototype.j.cb, !1, null]],
                                                        [0, [20, 44, Q.prototype.j.Ga, !1, null]],
                                                        [7, [0, 4]]
                                                    ]]
                                                ]
                                            ]
                                        ]
                                    ],
                                    [0, null, !1, null, 0xa9ccd3bcebb13, [
                                        [-1, G.prototype.e.Na, null, 0, !1, !1, !1, 0x8b65fca53e1c1, !1, [
                                            [7, [20, 44, Q.prototype.j.cb, !1, null]],
                                            [8, 4],
                                            [7, [21, 10, !1, null, 4]]
                                        ]]
                                    ],
                                        [],
                                        [
                                            [0, null, !1, null, 0xf1ef37a6b371d, [
                                                [-1, G.prototype.e.Na, null, 0, !1, !1, !1, 0x69e36a60f9154, !1, [
                                                    [7, [20, 44, Q.prototype.j.Ga, !1, null]],
                                                    [8, 2],
                                                    [7, [21, 10, !1, null, 5]]
                                                ]]
                                            ],
                                                [],
                                                [
                                                    [0, null, !1, null, 8135377150464629, [
                                                        [10, W.prototype.e.bb, null, 0, !1, !1, !1, 8920546552101561, !1, [
                                                            [10, 6],
                                                            [8, 3],
                                                            [7, [0, 50]]
                                                        ]]
                                                    ],
                                                        [
                                                            [44, Q.prototype.d.xb, null, 9528617912319724, !1, [
                                                                [0, [20, 44, Q.prototype.j.cb, !1, null]],
                                                                [0, [20, 44, Q.prototype.j.Ga, !1, null]],
                                                                [7, [0, 5]]
                                                            ]]
                                                        ]
                                                    ],
                                                    [0, null, !1, null, 0xe8e4394db6b7e, [
                                                        [-1, G.prototype.e.gc, null, 0, !1, !1, !1, 730349964462329, !1]
                                                    ],
                                                        [
                                                            [44, Q.prototype.d.xb, null, 9243202024840464, !1, [
                                                                [0, [20, 44, Q.prototype.j.cb, !1, null]],
                                                                [0, [20, 44, Q.prototype.j.Ga, !1, null]],
                                                                [7, [0, 3]]
                                                            ]]
                                                        ]
                                                    ]
                                                ]
                                            ],
                                            [0, null, !1, null, 9263270172251220, [
                                                [-1, G.prototype.e.Na, null, 0, !1, !1, !1, 8659259245102227, !1, [
                                                    [7, [20, 44, Q.prototype.j.Ga, !1, null]],
                                                    [8, 4],
                                                    [7, [21, 10, !1, null, 5]]
                                                ]]
                                            ],
                                                [],
                                                [
                                                    [0, null, !1, null, 5439140081930405, [
                                                        [10, W.prototype.e.bb, null, 0, !1, !1, !1, 0x60587730b1e7e, !1, [
                                                            [10, 6],
                                                            [8, 3],
                                                            [7, [0, 50]]
                                                        ]]
                                                    ],
                                                        [
                                                            [44, Q.prototype.d.xb, null, 7369409521076528, !1, [
                                                                [0, [20, 44, Q.prototype.j.cb, !1, null]],
                                                                [0, [20, 44, Q.prototype.j.Ga, !1, null]],
                                                                [7, [0, 6]]
                                                            ]]
                                                        ]
                                                    ],
                                                    [0, null, !1, null, 0x3a448540a6b97, [
                                                        [-1, G.prototype.e.gc, null, 0, !1, !1, !1, 0xf7ebe21376dc1, !1]
                                                    ],
                                                        [
                                                            [44, Q.prototype.d.xb, null, 0x44ac5c4b84ecc, !1, [
                                                                [0, [20, 44, Q.prototype.j.cb, !1, null]],
                                                                [0, [20, 44, Q.prototype.j.Ga, !1, null]],
                                                                [7, [0, 3]]
                                                            ]]
                                                        ]
                                                    ]
                                                ]
                                            ],
                                            [0, null, !1, null, 0xfe637641befa1, [
                                                [-1, G.prototype.e.Na, null, 0, !1, !1, !1, 0xe118d6f765d55, !1, [
                                                    [7, [20, 44, Q.prototype.j.Ga, !1, null]],
                                                    [8, 0],
                                                    [7, [21, 10, !1, null, 5]]
                                                ]]
                                            ],
                                                [
                                                    [44, Q.prototype.d.xb, null, 0x83bad97f87384, !1, [
                                                        [0, [20, 44, Q.prototype.j.cb, !1, null]],
                                                        [0, [20, 44, Q.prototype.j.Ga, !1, null]],
                                                        [7, [0, 3]]
                                                    ]]
                                                ]
                                            ]
                                        ]
                                    ],
                                    [0, null, !1, null, 0x89af6eabe0524, [
                                        [-1, G.prototype.e.Na, null, 0, !1, !1, !1, 6504517069542181, !1, [
                                            [7, [20, 44, Q.prototype.j.cb, !1, null]],
                                            [8, 0],
                                            [7, [21, 10, !1, null, 4]]
                                        ]]
                                    ],
                                        [],
                                        [
                                            [0, null, !1, null, 4518183067768264, [
                                                [-1, G.prototype.e.Na, null, 0, !1, !1, !1, 5506288606862227, !1, [
                                                    [7, [20, 44, Q.prototype.j.Ga, !1, null]],
                                                    [8, 2],
                                                    [7, [21, 10, !1, null, 5]]
                                                ]]
                                            ],
                                                [
                                                    [44, Q.prototype.d.xb, null, 6101417556400403, !1, [
                                                        [0, [20, 44, Q.prototype.j.cb, !1, null]],
                                                        [0, [20, 44, Q.prototype.j.Ga, !1, null]],
                                                        [7, [0, 5]]
                                                    ]]
                                                ]
                                            ],
                                            [0, null, !1, null, 0x5f18ff8aabccf, [
                                                [-1, G.prototype.e.Na, null, 0, !1, !1, !1, 7804587238918272, !1, [
                                                    [7, [20, 44, Q.prototype.j.Ga, !1, null]],
                                                    [8, 4],
                                                    [7, [21, 10, !1, null, 5]]
                                                ]]
                                            ],
                                                [
                                                    [44, Q.prototype.d.xb, null, 7337301824478115, !1, [
                                                        [0, [20, 44, Q.prototype.j.cb, !1, null]],
                                                        [0, [20, 44, Q.prototype.j.Ga, !1, null]],
                                                        [7, [0, 6]]
                                                    ]]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 667603732857652, [
                        [44, Q.prototype.e.q, null, 0, !1, !1, !1, 0xe87c1d91a5fcc, !1, [
                            [0, [0, 5]],
                            [0, [0, 6]],
                            [8, 1],
                            [7, [0, 0]]
                        ]]
                    ],
                        [
                            [10, W.prototype.d.Ua, null, 470626372517016, !1, [
                                [10, 0],
                                [7, [0, 0]]
                            ]]
                        ]
                    ]
                ]
            ],
            [0, null, !1, null, 5276424343074452, [
                [48, W.prototype.e.wk, null, 1, !1, !1, !1, 0x8afe00d89e813, !1, [
                    [1, [2, "Default"]]
                ]]
            ],
                [
                    [48, W.prototype.d.ki, null, 7614085933540109, !1]
                ]
            ],
            [0, null, !1, null, 0x6dc4a40f75236, [
                [-1, G.prototype.e.li, null, 0, !1, !1, !1, 0xc5f2fdbcec424, !1]
            ],
                [
                    [52, Y.prototype.d.sb, null, 0x4c14e35877393, !1, [
                        [7, [23, "score"]]
                    ]]
                ]
            ],
            [0, null, !1, null, 0xf9c80d6cdad9f, [
                [10, W.prototype.e.bb, null, 0, !1, !1, !1, 0x986868bf02bcd, !1, [
                    [10, 0],
                    [8, 0],
                    [7, [0, 5]]
                ]]
            ],
                [
                    [-1, G.prototype.d.wf, null, 5189284081561615, !1, [
                        [0, [1, 1]]
                    ]],
                    [47, W.prototype.d.Oa, null, 7772177593765315, !1, [
                        [3, 1]
                    ]],
                    [-1, G.prototype.d.wf, null, 0xb1b3c3c5fb806, !1, [
                        [0, [1, 2]]
                    ]],
                    [-1, G.prototype.d.hc, null, 0x7fc34692f83aa, !1, [
                        [6, "game"]
                    ]]
                ]
            ],
            [0, null, !1, null, 7041686961017194, [
                [10, W.prototype.e.bb, null, 0, !1, !1, !1, 0x3f2a8f2f13adb, !1, [
                    [10, 0],
                    [8, 0],
                    [7, [0, 6]]
                ]]
            ],
                [
                    [-1, G.prototype.d.wf, null, 9770526945990412, !1, [
                        [0, [1, 1]]
                    ]],
                    [47, W.prototype.d.Oa, null, 6179240991601117, !1, [
                        [3, 1]
                    ]],
                    [-1, G.prototype.d.wf, null, 0xc887204c0f0f8, !1, [
                        [0, [1, 2]]
                    ]],
                    [-1, G.prototype.d.hc, null, 5370722628488954, !1, [
                        [6, "game"]
                    ]]
                ]
            ],
            [0, null, !1, null, 0x3ef3c6c6f04d7, [
                [10, W.prototype.e.bb, null, 0, !1, !1, !1, 9212806542887372, !1, [
                    [10, 0],
                    [8, 0],
                    [7, [0, 10]]
                ]]
            ],
                [
                    [10, W.prototype.d.gi, null, 0xcb0d1da5c8da0, !1, [
                        [10, 8],
                        [7, [6, [0, 1],
                            [19, G.prototype.j.Pb]
                        ]]
                    ]]
                ],
                [
                    [0, null, !1, null, 598619734613159, [
                        [10, W.prototype.e.bb, null, 0, !1, !1, !1, 9571973184410822, !1, [
                            [10, 8],
                            [8, 5],
                            [7, [0, 2]]
                        ]]
                    ],
                        [
                            [59, W.prototype.d.Oa, null, 4704217833144483, !1, [
                                [3, 1]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 7078380517239834, [
                                [1, Z.prototype.e.K, null, 1, !1, !1, !1, 9007128341386966, !1, [
                                    [4, 59]
                                ]]
                            ],
                                [
                                    [-1, G.prototype.d.hc, null, 0xb2b72fab5db97, !1, [
                                        [6, "menu"]
                                    ]]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]],
        ["tutorE", [
            [0, null, !1, null, 5316131103873113, [
                [1, Z.prototype.e.Dg, null, 1, !1, !1, !1, 8521257200762385, !1]
            ],
                [
                    [-1, G.prototype.d.hc, null, 0x400820c1d67e2, !1, [
                        [6, "game"]
                    ]]
                ]
            ]
        ]],
        ["winE", [
            [0, null, !1, null, 7142463621557792, [
                [-1, G.prototype.e.Oe, null, 1, !1, !1, !1, 5934729635765706, !1]
            ],
                [],
                [
                    [0, null, !1, null, 498205208778016, [
                        [-1, G.prototype.e.ji, null, 0, !1, !1, !1, 0xe8e5f72715d4e, !1, [
                            [11, "score"],
                            [8, 4],
                            [7, [23, "hscore"]]
                        ]]
                    ],
                        [
                            [0, Xb.prototype.d.Fk, null, 7782855962218641, !1, [
                                [1, [2, "piratescore"]],
                                [7, [23, "score"]]
                            ]],
                            [-1, G.prototype.d.je, null, 6349929104419926, !1, [
                                [11, "hscore"],
                                [7, [23, "score"]]
                            ]],
                            [56, Y.prototype.d.sb, null, 0xa3c555232fd05, !1, [
                                [7, [23, "hscore"]]
                            ]],
                            [52, Y.prototype.d.sb, null, 8649060451496292, !1, [
                                [7, [23, "score"]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0x401575abbe3d0, [
                        [-1, G.prototype.e.gc, null, 0, !1, !1, !1, 0x8695b68d0eadd, !1]
                    ],
                        [
                            [56, Y.prototype.d.sb, null, 7005502593035402, !1, [
                                [7, [23, "hscore"]]
                            ]],
                            [52, Y.prototype.d.sb, null, 0x8e7b0c84cd68d, !1, [
                                [7, [23, "score"]]
                            ]],
                            [57, W.prototype.d.Oa, null, 9465875761895064, !1, [
                                [3, 0]
                            ]]
                        ]
                    ]
                ]
            ],
            [0, null, !1, null, 7292137787474878, [
                [1, Z.prototype.e.K, null, 1, !1, !1, !1, 0x686d5499ce5c0, !1, [
                    [4, 59]
                ]]
            ],
                [
                    [-1, G.prototype.d.hc, null, 0x46723525f6fbb, !1, [
                        [6, "menu"]
                    ]]
                ]
            ],
            [0, null, !1, null, 832530385292852, [
                [1, Z.prototype.e.K, null, 1, !1, !1, !1, 6672040832126634, !1, [
                    [4, 6]
                ]]
            ],
                [
                    
                ]
            ]
        ]],
       
        ["splashE", [
            [1, "dmn", 1, "", !1, !1, 7107123614217323, !1],
            [0, null, !1, null, 0x81a478d6e1cda, [
                [-1, G.prototype.e.Oe, null, 1, !1, !1, !1, 0xe691c6098ad67, !1]
            ],
                [
                    [-1, G.prototype.d.je, null, 4681769721423203, !1, [
                        [11, "dmn"],
                        [7, [20, 2, S.prototype.j.sn, !0, null]]
                    ]]
                ]
            ],
            [0, null, !1, null, 9471850884825912, [
                [-1, G.prototype.e.li, null, 0, !1, !1, !1, 0xe4788e9ccac2d, !1]
            ],
                [
                    [64, W.prototype.d.gi, null, 4755616433150964, !1, [
                        [10, 0],
                        [7, [6, [0, 1],
                            [19, G.prototype.j.Pb]
                        ]]
                    ]]
                ]
            ],
            [0, null, !1, null, 0x966fe96c74be3, [
                [64, W.prototype.e.bb, null, 0, !1, !1, !1, 0x421fd1f993db9, !1, [
                    [10, 0],
                    [8, 3],
                    [7, [0, 1]]
                ]]
            ],
                [
                    [64, W.prototype.d.Eg, null, 5668442953197429, !1, [
                        [0, [4, [20, 64, W.prototype.j.Opacity, !1, null],
                            [6, [0, 100],
                                [19, G.prototype.j.Pb]
                            ]
                        ]]
                    ]]
                ]
            ],
            [0, null, !1, null, 0x928f7537c8039, [
                [64, W.prototype.e.bb, null, 0, !1, !1, !1, 6446826188705776, !1, [
                    [10, 0],
                    [8, 5],
                    [7, [0, 3]]
                ]]
            ],
                [
                    [64, W.prototype.d.Eg, null, 6288886875535745, !1, [
                        [0, [5, [20, 64, W.prototype.j.Opacity, !1, null],
                            [6, [0, 100],
                                [19, G.prototype.j.Pb]
                            ]
                        ]]
                    ]]
                ],
                [
                    [0, null, !1, null, 0xbc621c95b9793, [
                        [64, W.prototype.e.sk, null, 0, !1, !1, !1, 0x62f7ab76b6a71, !1, [
                            [8, 3],
                            [0, [0, 0]]
                        ]]
                    ],
                        [
                            [-1, G.prototype.d.hc, null, 5742379735460823, !1, [
                                [6, "menu"]
                            ]]
                        ]
                    ]
                ]
            ],
            [0, null, !1, null, 9122457886404812, [
                [-1, G.prototype.e.Na, null, 0, !1, !1, !1, 5966294471744604, !1, [
                    [7, [19, G.prototype.j.dd, [
                        [19, G.prototype.j.cd, [
                            [23, "dmn"]
                        ]],
                        [0, 0],
                        [0, 1]
                    ]]],
                    [8, 0],
                    [7, [2, "w"]]
                ]]
            ],
                [],
                [
                    [0, null, !1, null, 6198171168470039, [
                        [-1, G.prototype.e.Na, null, 0, !1, !1, !1, 7724023866128658, !1, [
                            [7, [19, G.prototype.j.dd, [
                                [19, G.prototype.j.cd, [
                                    [23, "dmn"]
                                ]],
                                [0, 0],
                                [0, 1]
                            ]]],
                            [8, 0],
                            [7, [2, "w"]]
                        ]],
                        [-1, G.prototype.e.Na, null, 0, !1, !1, !1, 5266802389495562, !1, [
                            [7, [19, G.prototype.j.dd, [
                                [19, G.prototype.j.cd, [
                                    [23, "dmn"]
                                ]],
                                [0, 2],
                                [0, 1]
                            ]]],
                            [8, 0],
                            [7, [2, "w"]]
                        ]],
                        [-1, G.prototype.e.Na, null, 0, !1, !1, !1, 0xcbd2245f87123, !1, [
                            [7, [19, G.prototype.j.dd, [
                                [19, G.prototype.j.cd, [
                                    [23, "dmn"]
                                ]],
                                [0, 4],
                                [0, 1]
                            ]]],
                            [8, 0],
                            [7, [2, "a"]]
                        ]],
                        [-1, G.prototype.e.Na, null, 0, !1, !1, !1, 0x8f792681baf56, !1, [
                            [7, [19, G.prototype.j.dd, [
                                [19, G.prototype.j.cd, [
                                    [23, "dmn"]
                                ]],
                                [0, 6],
                                [0, 1]
                            ]]],
                            [8, 0],
                            [7, [2, "t"]]
                        ]],
                        [-1, G.prototype.e.Na, null, 0, !1, !1, !1, 8288444472760783, !1, [
                            [7, [19, G.prototype.j.dd, [
                                [19, G.prototype.j.cd, [
                                    [23, "dmn"]
                                ]],
                                [0, 8],
                                [0, 1]
                            ]]],
                            [8, 0],
                            [7, [2, "i"]]
                        ]]
                    ],
                        []
                    ],
                    [0, null, !1, null, 9388064241674536, [
                        [-1, G.prototype.e.gc, null, 0, !1, !1, !1, 0xfd81e6a011053, !1]
                    ],
                        [
                            [64, W.prototype.d.Ua, null, 7120090626122988, !1, [
                                [10, 0],
                                [7, [0, 0]]
                            ]],
                            [-1, G.prototype.d.hc, null, 0xc334a92ee4245, !1, [
                                [6, "disc"]
                            ]]
                        ]
                    ]
                ]
            ],
            [0, null, !1, null, 0xb53c4da9c20c8, [
                [-1, G.prototype.e.gc, null, 0, !1, !1, !1, 8824679200968988, !1]
            ],
                [],
                [
                    [0, null, !1, null, 9693125919141012, [
                        [-1, G.prototype.e.Na, null, 0, !1, !1, !1, 5494573366096008, !1, [
                            [7, [19, G.prototype.j.dd, [
                                [19, G.prototype.j.cd, [
                                    [23, "dmn"]
                                ]],
                                [0, 0],
                                [0, 1]
                            ]]],
                            [8, 0],
                            [7, [2, "a"]]
                        ]],
                        [-1, G.prototype.e.Na, null, 0, !1, !1, !1, 6347914861457443, !1, [
                            [7, [19, G.prototype.j.dd, [
                                [19, G.prototype.j.cd, [
                                    [23, "dmn"]
                                ]],
                                [0, 2],
                                [0, 1]
                            ]]],
                            [8, 0],
                            [7, [2, "t"]]
                        ]],
                        [-1, G.prototype.e.Na, null, 0, !1, !1, !1, 6493578839643684, !1, [
                            [7, [19, G.prototype.j.dd, [
                                [19, G.prototype.j.cd, [
                                    [23, "dmn"]
                                ]],
                                [0, 4],
                                [0, 1]
                            ]]],
                            [8, 0],
                            [7, [2, "i"]]
                        ]],
                        [-1, G.prototype.e.Na, null, 0, !1, !1, !1, 7809061842190496, !1, [
                            [7, [19, G.prototype.j.dd, [
                                [19, G.prototype.j.cd, [
                                    [23, "dmn"]
                                ]],
                                [0, 6],
                                [0, 1]
                            ]]],
                            [8, 0],
                            [7, [2, "e"]]
                        ]]
                    ],
                        []
                    ],
                    [0, null, !1, null, 0x856f524788236, [
                        [-1, G.prototype.e.gc, null, 0, !1, !1, !1, 6977685254897857, !1]
                    ],
                        [
                            [64, W.prototype.d.Ua, null, 6902429937897454, !1, [
                                [10, 0],
                                [7, [0, 0]]
                            ]],
                            [-1, G.prototype.d.hc, null, 0x527e95c3d366f, !1, [
                                [6, "disc"]
                            ]]
                        ]
                    ]
                ]
            ]
        ]],
        ["discE", [
            [0, null, !1, null, 7598413256774652, [
                [-1, G.prototype.e.tn, null, 0, !1, !1, !1, 7269445832928755, !1, [
                    [0, [0, 3]]
                ]]
            ],
                [
                    
                ]
            ],
            [0, null, !1, null, 7713231524379134, [
                [1, Z.prototype.e.Dg, null, 1, !1, !1, !1, 7108126250685075, !1]
            ],
                [
                    
                ]
            ]
        ]],
        ["aboutE", [
            [0, null, !1, null, 9532818094824752, [
                [1, Z.prototype.e.K, null, 1, !1, !1, !1, 5070241646121219, !1, [
                    [4, 71]
                ]]
            ],
                [
                    [-1, G.prototype.d.hc, null, 0x6beedff40998b, !1, [
                        [6, "menu"]
                    ]]
                ]
            ],
            [0, null, !1, null, 0xe58551672b91e, [
                [1, Z.prototype.e.K, null, 1, !1, !1, !1, 8104902948523434, !1, [
                    [4, 70]
                ]]
            ],
                [
                    
                ]
            ]
        ]]
    ], "media/", !0, 320, 480, 4, !1, !0, !1, "1.0", !1, !1, 0, 1, 164, !1, !0, []]
};