var _STRINGS = {
    Ad: {
        Mobile: {
            Preroll: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            Header: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            End: {
                ReadyIn: "Advertisement ends in ",
                Loading: "Please wait ...",
                Close: "Close"
            }
        }
    },
    Splash: {
        Loading: "Loading ...",
        LogoLine1: "Some text here",
        LogoLine2: "powered by MarketJS",
        LogoLine3: "none"
    },
    Game: {
        SelectPlayer: "Select Player",
        Win: "You win!",
        Lose: "You lose!",
        Score: "Score",
        Time: "Time"
    },
    Results: {
        Title: "High score"
    }
};
var _SETTINGS = {
    API: {
        Enabled: !0,
        Log: {
            Events: {
                InitializeGame: !0,
                EndGame: !0,
                Level: {
                    Begin: !0,
                    End: !0,
                    Win: !0,
                    Lose: !0,
                    Draw: !0
                }
            }
        }
    },
    Ad: {
        Mobile: {
            Preroll: {
                Enabled: !0,
                Duration: 5,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                      
                    }
                }
            },
            Header: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                       
                    }
                }
            },
            Footer: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                      
                    }
                }
            },
            End: {
                Enabled: !1,
                Duration: 1,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                      
                    }
                }
            }
        }
    },
    Language: {
        Default: "en"
    },
    Branding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !0,
            Link: "http://google.com",
            Width: 280,
            Height: 34
        }
    },
    MoreGames: {
        Enabled: !1,
        Link: "http://www.marketjs.com/game/links/mobile"
    },
    Gamecenter: {
        Enabled: !0
    }
};
var MobileAdInGamePreroll = {
  
};
var MobileAdInGameHeader = {
   
};
var MobileAdInGameFooter = {
   
};
var MobileAdInGameEnd = {
  
}; (function(b, c) {
    function d(b, j, y) {
        if (y === c && 1 === b.nodeType) if (y = "data-" + j.replace(sc, "-$1").toLowerCase(), y = b.getAttribute(y), "string" == typeof y) {
            try {
                y = "true" === y ? !0 : "false" === y ? !1 : "null" === y ? null: +y + "" === y ? +y: tc.test(y) ? e.parseJSON(y) : y
            } catch(d) {}
            e.data(b, j, y)
        } else y = c;
        return y
    }
    function f(b) {
        for (var j in b) if (! ("data" === j && e.isEmptyObject(b[j])) && "toJSON" !== j) return ! 1;
        return ! 0
    }
    function g() {
        return ! 1
    }
    function m() {
        return ! 0
    }
    function q(b) {
        return ! b || !b.parentNode || 11 === b.parentNode.nodeType
    }
    function z(b, j) {
        do b = b[j];
        while (b && 1 !== b.nodeType);
        return b
    }
    function p(b, j, c) {
        j = j || 0;
        if (e.isFunction(j)) return e.grep(b,
        function(b, u) {
            return !! j.call(b, u, b) === c
        });
        if (j.nodeType) return e.grep(b,
        function(b) {
            return b === j === c
        });
        if ("string" == typeof j) {
            var d = e.grep(b,
            function(b) {
                return 1 === b.nodeType
            });
            if (uc.test(j)) return e.filter(j, d, !c);
            j = e.filter(j, d)
        }
        return e.grep(b,
        function(b) {
            return 0 <= e.inArray(b, j) === c
        })
    }
    function x(b) {
        var j = wb.split("|");
        b = b.createDocumentFragment();
        if (b.createElement) for (; j.length;) b.createElement(j.pop());
        return b
    }
    function A(b, j) {
        if (1 === j.nodeType && e.hasData(b)) {
            var c, d, t;
            d = e._data(b);
            var B = e._data(j, d),
            s = d.events;
            if (s) for (c in delete B.handle, B.events = {},
            s) {
                d = 0;
                for (t = s[c].length; d < t; d++) e.event.add(j, c, s[c][d])
            }
            B.data && (B.data = e.extend({},
            B.data))
        }
    }
    function l(b, j) {
        var c;
        1 === j.nodeType && (j.clearAttributes && j.clearAttributes(), j.mergeAttributes && j.mergeAttributes(b), c = j.nodeName.toLowerCase(), "object" === c ? (j.parentNode && (j.outerHTML = b.outerHTML), e.support.html5Clone && b.innerHTML && !e.trim(j.innerHTML) && (j.innerHTML = b.innerHTML)) : "input" === c && xb.test(b.type) ? (j.defaultChecked = j.checked = b.checked, j.value !== b.value && (j.value = b.value)) : "option" === c ? j.selected = b.defaultSelected: "input" === c || "textarea" === c ? j.defaultValue = b.defaultValue: "script" === c && j.text !== b.text && (j.text = b.text), j.removeAttribute(e.expando))
    }
    function n(b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll("*") : []
    }
    function r(b) {
        xb.test(b.type) && (b.defaultChecked = b.checked)
    }
    function v(b, j) {
        if (j in b) return j;
        for (var c = j.charAt(0).toUpperCase() + j.slice(1), e = j, d = yb.length; d--;) if (j = yb[d] + c, j in b) return j;
        return e
    }
    function N(b, j) {
        return b = j || b,
        "none" === e.css(b, "display") || !e.contains(b.ownerDocument, b)
    }
    function G(b, j) {
        for (var c, d, t = [], B = 0, s = b.length; B < s; B++) c = b[B],
        c.style && (t[B] = e._data(c, "olddisplay"), j ? (!t[B] && "none" === c.style.display && (c.style.display = ""), "" === c.style.display && N(c) && (t[B] = e._data(c, "olddisplay", P(c.nodeName)))) : (d = Q(c, "display"), !t[B] && "none" !== d && e._data(c, "olddisplay", d)));
        for (B = 0; B < s; B++) if (c = b[B], c.style && (!j || "none" === c.style.display || "" === c.style.display)) c.style.display = j ? t[B] || "": "none";
        return b
    }
    function E(b, j, c) {
        return (b = vc.exec(j)) ? Math.max(0, b[1] - (c || 0)) + (b[2] || "px") : j
    }
    function Xa(b, j, c, d) {
        j = c === (d ? "border": "content") ? 4 : "width" === j ? 1 : 0;
        for (var t = 0; 4 > j; j += 2)"margin" === c && (t += e.css(b, c + ea[j], !0)),
        d ? ("content" === c && (t -= parseFloat(Q(b, "padding" + ea[j])) || 0), "margin" !== c && (t -= parseFloat(Q(b, "border" + ea[j] + "Width")) || 0)) : (t += parseFloat(Q(b, "padding" + ea[j])) || 0, "padding" !== c && (t += parseFloat(Q(b, "border" + ea[j] + "Width")) || 0));
        return t
    }
    function H(b, j, c) {
        var d = "width" === j ? b.offsetWidth: b.offsetHeight,
        t = !0,
        B = e.support.boxSizing && "border-box" === e.css(b, "boxSizing");
        if (0 >= d || null == d) {
            d = Q(b, j);
            if (0 > d || null == d) d = b.style[j];
            if (ya.test(d)) return d;
            t = B && (e.support.boxSizingReliable || d === b.style[j]);
            d = parseFloat(d) || 0
        }
        return d + Xa(b, j, c || (B ? "border": "content"), t) + "px"
    }
    function P(b) {
        if (Ya[b]) return Ya[b];
        var j = e("<" + b + ">").appendTo(C.body),
        c = j.css("display");
        j.remove();
        if ("none" === c || "" === c) {
            la = C.body.appendChild(la || e.extend(C.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!ma || !la.createElement) ma = (la.contentWindow || la.contentDocument).document,
            ma.write("<!doctype html><html><body>"),
            ma.close();
            j = ma.body.appendChild(ma.createElement(b));
            c = Q(j, "display");
            C.body.removeChild(la)
        }
        return Ya[b] = c,
        c
    }
    function M(b, j, c, d) {
        var t;
        if (e.isArray(j)) e.each(j,
        function(j, e) {
            c || wc.test(b) ? d(b, e) : M(b + "[" + ("object" == typeof e ? j: "") + "]", e, c, d)
        });
        else if (!c && "object" === e.type(j)) for (t in j) M(b + "[" + t + "]", j[t], c, d);
        else d(b, j)
    }
    function za(b) {
        return function(j, c) {
            "string" != typeof j && (c = j, j = "*");
            var d, t, B = j.toLowerCase().split(fa),
            s = 0,
            l = B.length;
            if (e.isFunction(c)) for (; s < l; s++) d = B[s],
            (t = /^\+/.test(d)) && (d = d.substr(1) || "*"),
            d = b[d] = b[d] || [],
            d[t ? "unshift": "push"](c)
        }
    }
    function na(b, j, y, e, d, B) {
        d = d || j.dataTypes[0];
        B = B || {};
        B[d] = !0;
        var s;
        d = b[d];
        for (var l = 0,
        f = d ? d.length: 0, g = b === Za; l < f && (g || !s); l++) s = d[l](j, y, e),
        "string" == typeof s && (!g || B[s] ? s = c: (j.dataTypes.unshift(s), s = na(b, j, y, e, s, B)));
        return (g || !s) && !B["*"] && (s = na(b, j, y, e, "*", B)),
        s
    }
    function sa(b, j) {
        var y, d, t = e.ajaxSettings.flatOptions || {};
        for (y in j) j[y] !== c && ((t[y] ? b: d || (d = {}))[y] = j[y]);
        d && e.extend(!0, b, d)
    }
    function zb() {
        try {
            return new b.XMLHttpRequest
        } catch(u) {}
    }
    function Ab() {
        return setTimeout(function() {
            Aa = c
        },
        0),
        Aa = e.now()
    }
    function Bb(b, j, c) {
        var d, t = 0,
        B = Ba.length,
        s = e.Deferred().always(function() {
            delete l.elem
        }),
        l = function() {
            for (var j = Aa || Ab(), j = Math.max(0, f.startTime + f.duration - j), c = 1 - (j / f.duration || 0), y = 0, e = f.tweens.length; y < e; y++) f.tweens[y].run(c);
            return s.notifyWith(b, [f, c, j]),
            1 > c && e ? j: (s.resolveWith(b, [f]), !1)
        },
        f = s.promise({
            elem: b,
            props: e.extend({},
            j),
            opts: e.extend(!0, {
                specialEasing: {}
            },
            c),
            originalProperties: j,
            originalOptions: c,
            startTime: Aa || Ab(),
            duration: c.duration,
            tweens: [],
            createTween: function(j, c) {
                var y = e.Tween(b, f.opts, j, c, f.opts.specialEasing[j] || f.opts.easing);
                return f.tweens.push(y),
                y
            },
            stop: function(j) {
                for (var c = 0,
                y = j ? f.tweens.length: 0; c < y; c++) f.tweens[c].run(1);
                return j ? s.resolveWith(b, [f, j]) : s.rejectWith(b, [f, j]),
                this
            }
        });
        j = f.props;
        c = f.opts.specialEasing;
        var g, n, r, m;
        for (d in j) if (g = e.camelCase(d), n = c[g], r = j[d], e.isArray(r) && (n = r[1], r = j[d] = r[0]), d !== g && (j[g] = r, delete j[d]), (m = e.cssHooks[g]) && "expand" in m) for (d in r = m.expand(r), delete j[g], r) d in j || (j[d] = r[d], c[d] = n);
        else c[g] = n;
        for (; t < B; t++) if (d = Ba[t].call(f, b, j, f.opts)) return d;
        var p = f;
        e.each(j,
        function(b, u) {
            for (var j = (ta[b] || []).concat(ta["*"]), c = 0, y = j.length; c < y && !j[c].call(p, b, u); c++);
        });
        return e.isFunction(f.opts.start) && f.opts.start.call(b, f),
        e.fx.timer(e.extend(l, {
            anim: f,
            queue: f.opts.queue,
            elem: b
        })),
        f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }
    function S(b, j, c, e, d) {
        return new S.prototype.init(b, j, c, e, d)
    }
    function Ca(b, j) {
        var c, e = {
            height: b
        },
        d = 0;
        for (j = j ? 1 : 0; 4 > d; d += 2 - j) c = ea[d],
        e["margin" + c] = e["padding" + c] = b;
        return j && (e.opacity = e.width = b),
        e
    }
    function Cb(b) {
        return e.isWindow(b) ? b: 9 === b.nodeType ? b.defaultView || b.parentWindow: !1
    }
    var Db, Da, C = b.document,
    yc = b.location,
    zc = b.navigator,
    Ac = b.jQuery,
    Bc = b.$,
    Eb = Array.prototype.push,
    aa = Array.prototype.slice,
    Fb = Array.prototype.indexOf,
    Cc = Object.prototype.toString,
    $a = Object.prototype.hasOwnProperty,
    ab = String.prototype.trim,
    e = function(b, j) {
        return new e.fn.init(b, j, Db)
    },
    Ea = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
    Dc = /\S/,
    fa = /\s+/,
    Ec = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    Fc = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
    Gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    Gc = /^[\],:{}\s]*$/,
    Hc = /(?:^|:|,)(?:\s*\[)+/g,
    Ic = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    Jc = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
    Kc = /^-ms-/,
    Lc = /-([\da-z])/gi,
    Mc = function(b, j) {
        return (j + "").toUpperCase()
    },
    Fa = function() {
        C.addEventListener ? (C.removeEventListener("DOMContentLoaded", Fa, !1), e.ready()) : "complete" === C.readyState && (C.detachEvent("onreadystatechange", Fa), e.ready())
    },
    Hb = {};
    e.fn = e.prototype = {
        constructor: e,
        init: function(b, j, y) {
            var d, t;
            if (!b) return this;
            if (b.nodeType) return this.context = this[0] = b,
            this.length = 1,
            this;
            if ("string" == typeof b) {
                "<" === b.charAt(0) && ">" === b.charAt(b.length - 1) && 3 <= b.length ? d = [null, b, null] : d = Fc.exec(b);
                if (d && (d[1] || !j)) {
                    if (d[1]) return j = j instanceof e ? j[0] : j,
                    t = j && j.nodeType ? j.ownerDocument || j: C,
                    b = e.parseHTML(d[1], t, !0),
                    Gb.test(d[1]) && e.isPlainObject(j) && this.attr.call(b, j, !0),
                    e.merge(this, b);
                    if ((j = C.getElementById(d[2])) && j.parentNode) {
                        if (j.id !== d[2]) return y.find(b);
                        this.length = 1;
                        this[0] = j
                    }
                    return this.context = C,
                    this.selector = b,
                    this
                }
                return ! j || j.jquery ? (j || y).find(b) : this.constructor(j).find(b)
            }
            return e.isFunction(b) ? y.ready(b) : (b.selector !== c && (this.selector = b.selector, this.context = b.context), e.makeArray(b, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return aa.call(this)
        },
        get: function(b) {
            return null == b ? this.toArray() : 0 > b ? this[this.length + b] : this[b]
        },
        pushStack: function(b, j, c) {
            b = e.merge(this.constructor(), b);
            return b.prevObject = this,
            b.context = this.context,
            "find" === j ? b.selector = this.selector + (this.selector ? " ": "") + c: j && (b.selector = this.selector + "." + j + "(" + c + ")"),
            b
        },
        each: function(b, j) {
            return e.each(this, b, j)
        },
        ready: function(b) {
            return e.ready.promise().done(b),
            this
        },
        eq: function(b) {
            return b = +b,
            -1 === b ? this.slice(b) : this.slice(b, b + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        slice: function() {
            return this.pushStack(aa.apply(this, arguments), "slice", aa.call(arguments).join(","))
        },
        map: function(b) {
            return this.pushStack(e.map(this,
            function(j, c) {
                return b.call(j, c, j)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Eb,
        sort: [].sort,
        splice: [].splice
    };
    e.fn.init.prototype = e.fn;
    e.extend = e.fn.extend = function() {
        var b, j, y, d, t, B, s = arguments[0] || {},
        f = 1,
        l = arguments.length,
        g = !1;
        "boolean" == typeof s && (g = s, s = arguments[1] || {},
        f = 2);
        "object" != typeof s && !e.isFunction(s) && (s = {});
        for (l === f && (s = this, --f); f < l; f++) if (null != (b = arguments[f])) for (j in b) y = s[j],
        d = b[j],
        s !== d && (g && d && (e.isPlainObject(d) || (t = e.isArray(d))) ? (t ? (t = !1, B = y && e.isArray(y) ? y: []) : B = y && e.isPlainObject(y) ? y: {},
        s[j] = e.extend(g, B, d)) : d !== c && (s[j] = d));
        return s
    };
    e.extend({
        noConflict: function(u) {
            return b.$ === e && (b.$ = Bc),
            u && b.jQuery === e && (b.jQuery = Ac),
            e
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(b) {
            b ? e.readyWait++:e.ready(!0)
        },
        ready: function(b) {
            if (! (!0 === b ? --e.readyWait: e.isReady)) {
                if (!C.body) return setTimeout(e.ready, 1);
                e.isReady = !0; ! 0 !== b && 0 < --e.readyWait || (Da.resolveWith(C, [e]), e.fn.trigger && e(C).trigger("ready").off("ready"))
            }
        },
        isFunction: function(b) {
            return "function" === e.type(b)
        },
        isArray: Array.isArray ||
        function(b) {
            return "array" === e.type(b)
        },
        isWindow: function(b) {
            return null != b && b == b.window
        },
        isNumeric: function(b) {
            return ! isNaN(parseFloat(b)) && isFinite(b)
        },
        type: function(b) {
            return null == b ? String(b) : Hb[Cc.call(b)] || "object"
        },
        isPlainObject: function(b) {
            if (!b || "object" !== e.type(b) || b.nodeType || e.isWindow(b)) return ! 1;
            try {
                if (b.constructor && !$a.call(b, "constructor") && !$a.call(b.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(j) {
                return ! 1
            }
            for (var y in b);
            return y === c || $a.call(b, y)
        },
        isEmptyObject: function(b) {
            for (var j in b) return ! 1;
            return ! 0
        },
        error: function(b) {
            throw Error(b);
        },
        parseHTML: function(b, j, c) {
            var d;
            return ! b || "string" != typeof b ? null: ("boolean" == typeof j && (c = j, j = 0), j = j || C, (d = Gb.exec(b)) ? [j.createElement(d[1])] : (d = e.buildFragment([b], j, c ? null: []), e.merge([], (d.cacheable ? e.clone(d.fragment) : d.fragment).childNodes)))
        },
        parseJSON: function(u) {
            if (!u || "string" != typeof u) return null;
            u = e.trim(u);
            if (b.JSON && b.JSON.parse) return b.JSON.parse(u);
            if (Gc.test(u.replace(Ic, "@").replace(Jc, "]").replace(Hc, ""))) return (new Function("return " + u))();
            e.error("Invalid JSON: " + u)
        },
        parseXML: function(u) {
            var j, y;
            if (!u || "string" != typeof u) return null;
            try {
                b.DOMParser ? (y = new DOMParser, j = y.parseFromString(u, "text/xml")) : (j = new ActiveXObject("Microsoft.XMLDOM"), j.async = "false", j.loadXML(u))
            } catch(d) {
                j = c
            }
            return (!j || !j.documentElement || j.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + u),
            j
        },
        noop: function() {},
        globalEval: function(u) {
            u && Dc.test(u) && (b.execScript ||
            function(u) {
                b.eval.call(b, u)
            })(u)
        },
        camelCase: function(b) {
            return b.replace(Kc, "ms-").replace(Lc, Mc)
        },
        nodeName: function(b, j) {
            return b.nodeName && b.nodeName.toLowerCase() === j.toLowerCase()
        },
        each: function(b, j, y) {
            var d, t = 0,
            B = b.length,
            s = B === c || e.isFunction(b);
            if (y) if (s) for (d in b) {
                if (!1 === j.apply(b[d], y)) break
            } else for (; t < B && !1 !== j.apply(b[t++], y););
            else if (s) for (d in b) {
                if (!1 === j.call(b[d], d, b[d])) break
            } else for (; t < B && !1 !== j.call(b[t], t, b[t++]););
            return b
        },
        trim: ab && !ab.call("\ufeff\u00a0") ?
        function(b) {
            return null == b ? "": ab.call(b)
        }: function(b) {
            return null == b ? "": (b + "").replace(Ec, "")
        },
        makeArray: function(b, j) {
            var c, d = j || [];
            return null != b && (c = e.type(b), null == b.length || "string" === c || "function" === c || "regexp" === c || e.isWindow(b) ? Eb.call(d, b) : e.merge(d, b)),
            d
        },
        inArray: function(b, j, c) {
            var d;
            if (j) {
                if (Fb) return Fb.call(j, b, c);
                d = j.length;
                for (c = c ? 0 > c ? Math.max(0, d + c) : c: 0; c < d; c++) if (c in j && j[c] === b) return c
            }
            return - 1
        },
        merge: function(b, j) {
            var d = j.length,
            e = b.length,
            t = 0;
            if ("number" == typeof d) for (; t < d; t++) b[e++] = j[t];
            else for (; j[t] !== c;) b[e++] = j[t++];
            return b.length = e,
            b
        },
        grep: function(b, j, c) {
            var d, e = [],
            B = 0,
            s = b.length;
            for (c = !!c; B < s; B++) d = !!j(b[B], B),
            c !== d && e.push(b[B]);
            return e
        },
        map: function(b, j, d) {
            var D, t, B = [],
            s = 0,
            f = b.length;
            if (b instanceof e || f !== c && "number" == typeof f && (0 < f && b[0] && b[f - 1] || 0 === f || e.isArray(b))) for (; s < f; s++) D = j(b[s], s, d),
            null != D && (B[B.length] = D);
            else for (t in b) D = j(b[t], t, d),
            null != D && (B[B.length] = D);
            return B.concat.apply([], B)
        },
        guid: 1,
        proxy: function(b, j) {
            var d, D, t;
            return "string" == typeof j && (d = b[j], j = b, b = d),
            e.isFunction(b) ? (D = aa.call(arguments, 2), t = function() {
                return b.apply(j, D.concat(aa.call(arguments)))
            },
            t.guid = b.guid = b.guid || e.guid++, t) : c
        },
        access: function(b, j, d, D, t, B, s) {
            var f, l = null == d,
            g = 0,
            n = b.length;
            if (d && "object" == typeof d) {
                for (g in d) e.access(b, j, g, d[g], 1, B, D);
                t = 1
            } else if (D !== c) {
                f = s === c && e.isFunction(D);
                l && (f ? (f = j, j = function(b, u, j) {
                    return f.call(e(b), j)
                }) : (j.call(b, D), j = null));
                if (j) for (; g < n; g++) j(b[g], d, f ? D.call(b[g], g, j(b[g], d)) : D, s);
                t = 1
            }
            return t ? b: l ? j.call(b) : n ? j(b[0], d) : B
        },
        now: function() {
            return (new Date).getTime()
        }
    });
    e.ready.promise = function(u) {
        if (!Da) if (Da = e.Deferred(), "complete" === C.readyState) setTimeout(e.ready, 1);
        else if (C.addEventListener) C.addEventListener("DOMContentLoaded", Fa, !1),
        b.addEventListener("load", e.ready, !1);
        else {
            C.attachEvent("onreadystatechange", Fa);
            b.attachEvent("onload", e.ready);
            var j = !1;
            try {
                j = null == b.frameElement && C.documentElement
            } catch(c) {}
            j && j.doScroll &&
            function t() {
                if (!e.isReady) {
                    try {
                        j.doScroll("left")
                    } catch(b) {
                        return setTimeout(t, 50)
                    }
                    e.ready()
                }
            } ()
        }
        return Da.promise(u)
    };
    e.each("Boolean Number String Function Array Date RegExp Object".split(" "),
    function(b, j) {
        Hb["[object " + j + "]"] = j.toLowerCase()
    });
    Db = e(C);
    var Ib = {};
    e.Callbacks = function(b) {
        var j;
        if ("string" == typeof b) {
            if (! (j = Ib[b])) {
                j = b;
                var d = Ib[j] = {};
                j = (e.each(j.split(fa),
                function(b, u) {
                    d[u] = !0
                }), d)
            }
        } else j = e.extend({},
        b);
        b = j;
        var D, t, B, s, f, l, g = [],
        n = !b.once && [],
        r = function(j) {
            D = b.memory && j;
            t = !0;
            l = s || 0;
            s = 0;
            f = g.length;
            for (B = !0; g && l < f; l++) if (!1 === g[l].apply(j[0], j[1]) && b.stopOnFalse) {
                D = !1;
                break
            }
            B = !1;
            g && (n ? n.length && r(n.shift()) : D ? g = [] : m.disable())
        },
        m = {
            add: function() {
                if (g) {
                    var j = g.length; (function xc(j) {
                        e.each(j,
                        function(j, c) {
                            var d = e.type(c);
                            "function" === d && (!b.unique || !m.has(c)) ? g.push(c) : c && c.length && "string" !== d && xc(c)
                        })
                    })(arguments);
                    B ? f = g.length: D && (s = j, r(D))
                }
                return this
            },
            remove: function() {
                return g && e.each(arguments,
                function(b, u) {
                    for (var j; - 1 < (j = e.inArray(u, g, j));) g.splice(j, 1),
                    B && (j <= f && f--, j <= l && l--)
                }),
                this
            },
            has: function(b) {
                return - 1 < e.inArray(b, g)
            },
            empty: function() {
                return g = [],
                this
            },
            disable: function() {
                return g = n = D = c,
                this
            },
            disabled: function() {
                return ! g
            },
            lock: function() {
                return n = c,
                D || m.disable(),
                this
            },
            locked: function() {
                return ! n
            },
            fireWith: function(b, u) {
                return u = u || [],
                u = [b, u.slice ? u.slice() : u],
                g && (!t || n) && (B ? n.push(u) : r(u)),
                this
            },
            fire: function() {
                return m.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! t
            }
        };
        return m
    };
    e.extend({
        Deferred: function(b) {
            var j = [["resolve", "done", e.Callbacks("once memory"), "resolved"], ["reject", "fail", e.Callbacks("once memory"), "rejected"], ["notify", "progress", e.Callbacks("memory")]],
            c = "pending",
            d = {
                state: function() {
                    return c
                },
                always: function() {
                    return t.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var b = arguments;
                    return e.Deferred(function(u) {
                        e.each(j,
                        function(j, c) {
                            var d = c[0],
                            y = b[j];
                            t[c[1]](e.isFunction(y) ?
                            function() {
                                var b = y.apply(this, arguments);
                                b && e.isFunction(b.promise) ? b.promise().done(u.resolve).fail(u.reject).progress(u.notify) : u[d + "With"](this === t ? u: this, [b])
                            }: u[d])
                        });
                        b = null
                    }).promise()
                },
                promise: function(b) {
                    return null != b ? e.extend(b, d) : d
                }
            },
            t = {};
            return d.pipe = d.then,
            e.each(j,
            function(b, u) {
                var e = u[2],
                f = u[3];
                d[u[1]] = e.add;
                f && e.add(function() {
                    c = f
                },
                j[b ^ 1][2].disable, j[2][2].lock);
                t[u[0]] = e.fire;
                t[u[0] + "With"] = e.fireWith
            }),
            d.promise(t),
            b && b.call(t, t),
            t
        },
        when: function(b) {
            var j = 0,
            c = aa.call(arguments),
            d = c.length,
            t = 1 !== d || b && e.isFunction(b.promise) ? d: 0,
            f = 1 === t ? b: e.Deferred(),
            s = function(b, u, j) {
                return function(c) {
                    u[b] = this;
                    j[b] = 1 < arguments.length ? aa.call(arguments) : c;
                    j === l ? f.notifyWith(u, j) : --t || f.resolveWith(u, j)
                }
            },
            l,
            g,
            n;
            if (1 < d) {
                l = Array(d);
                g = Array(d);
                for (n = Array(d); j < d; j++) c[j] && e.isFunction(c[j].promise) ? c[j].promise().done(s(j, n, c)).fail(f.reject).progress(s(j, g, l)) : --t
            }
            return t || f.resolveWith(n, c),
            f.promise()
        }
    });
    var Nc = e,
    bb, O, Ga, ga, Ha, Ia, T, ha, Ja, cb, ua, Jb, K = C.createElement("div");
    K.setAttribute("className", "t");
    K.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    Ga = K.getElementsByTagName("*");
    ga = K.getElementsByTagName("a")[0];
    ga.style.cssText = "top:1px;float:left;opacity:.5";
    if (!Ga || !Ga.length) bb = {};
    else {
        Ha = C.createElement("select");
        Ia = Ha.appendChild(C.createElement("option"));
        T = K.getElementsByTagName("input")[0];
        O = {
            leadingWhitespace: 3 === K.firstChild.nodeType,
            tbody: !K.getElementsByTagName("tbody").length,
            htmlSerialize: !!K.getElementsByTagName("link").length,
            style: /top/.test(ga.getAttribute("style")),
            hrefNormalized: "/a" === ga.getAttribute("href"),
            opacity: /^0.5/.test(ga.style.opacity),
            cssFloat: !!ga.style.cssFloat,
            checkOn: "on" === T.value,
            optSelected: Ia.selected,
            getSetAttribute: "t" !== K.className,
            enctype: !!C.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== C.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === C.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        };
        T.checked = !0;
        O.noCloneChecked = T.cloneNode(!0).checked;
        Ha.disabled = !0;
        O.optDisabled = !Ia.disabled;
        try {
            delete K.test
        } catch(Pd) {
            O.deleteExpando = !1
        } ! K.addEventListener && K.attachEvent && K.fireEvent && (K.attachEvent("onclick", Jb = function() {
            O.noCloneEvent = !1
        }), K.cloneNode(!0).fireEvent("onclick"), K.detachEvent("onclick", Jb));
        T = C.createElement("input");
        T.value = "t";
        T.setAttribute("type", "radio");
        O.radioValue = "t" === T.value;
        T.setAttribute("checked", "checked");
        T.setAttribute("name", "t");
        K.appendChild(T);
        ha = C.createDocumentFragment();
        ha.appendChild(K.lastChild);
        O.checkClone = ha.cloneNode(!0).cloneNode(!0).lastChild.checked;
        O.appendChecked = T.checked;
        ha.removeChild(T);
        ha.appendChild(K);
        if (K.attachEvent) for (cb in {
            submit: !0,
            change: !0,
            focusin: !0
        }) Ja = "on" + cb,
        (ua = Ja in K) || (K.setAttribute(Ja, "return;"), ua = "function" == typeof K[Ja]),
        O[cb + "Bubbles"] = ua;
        bb = (e(function() {
            var u, j, c, d, e = C.getElementsByTagName("body")[0];
            e && (u = C.createElement("div"), u.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", e.insertBefore(u, e.firstChild), j = C.createElement("div"), u.appendChild(j), j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c = j.getElementsByTagName("td"), c[0].style.cssText = "padding:0;margin:0;border:0;display:none", ua = 0 === c[0].offsetHeight, c[0].style.display = "", c[1].style.display = "none", O.reliableHiddenOffsets = ua && 0 === c[0].offsetHeight, j.innerHTML = "", j.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", O.boxSizing = 4 === j.offsetWidth, O.doesNotIncludeMarginInBodyOffset = 1 !== e.offsetTop, b.getComputedStyle && (O.pixelPosition = "1%" !== (b.getComputedStyle(j, null) || {}).top, O.boxSizingReliable = "4px" === (b.getComputedStyle(j, null) || {
                width: "4px"
            }).width, d = C.createElement("div"), d.style.cssText = j.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;", d.style.marginRight = d.style.width = "0", j.style.width = "1px", j.appendChild(d), O.reliableMarginRight = !parseFloat((b.getComputedStyle(d, null) || {}).marginRight)), "undefined" != typeof j.style.zoom && (j.innerHTML = "", j.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1", O.inlineBlockNeedsLayout = 3 === j.offsetWidth, j.style.display = "block", j.style.overflow = "visible", j.innerHTML = "<div></div>", j.firstChild.style.width = "5px", O.shrinkWrapBlocks = 3 !== j.offsetWidth, u.style.zoom = 1), e.removeChild(u))
        }), ha.removeChild(K), Ga = ga = Ha = Ia = T = ha = K = null, O)
    }
    Nc.support = bb;
    var tc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    sc = /([A-Z])/g;
    e.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (e.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(b) {
            return b = b.nodeType ? e.cache[b[e.expando]] : b[e.expando],
            !!b && !f(b)
        },
        data: function(b, j, d, D) {
            if (e.acceptData(b)) {
                var t, f, s = e.expando,
                l = "string" == typeof j,
                g = b.nodeType,
                n = g ? e.cache: b,
                r = g ? b[s] : b[s] && s;
                if (r && n[r] && (D || n[r].data) || !(l && d === c)) {
                    r || (g ? b[s] = r = e.deletedIds.pop() || e.guid++:r = s);
                    n[r] || (n[r] = {},
                    g || (n[r].toJSON = e.noop));
                    if ("object" == typeof j || "function" == typeof j) D ? n[r] = e.extend(n[r], j) : n[r].data = e.extend(n[r].data, j);
                    return t = n[r],
                    D || (t.data || (t.data = {}), t = t.data),
                    d !== c && (t[e.camelCase(j)] = d),
                    l ? (f = t[j], null == f && (f = t[e.camelCase(j)])) : f = t,
                    f
                }
            }
        },
        removeData: function(b, j, c) {
            if (e.acceptData(b)) {
                var d, t, B, s = b.nodeType,
                l = s ? e.cache: b,
                g = s ? b[e.expando] : e.expando;
                if (l[g]) {
                    if (j && (d = c ? l[g] : l[g].data)) {
                        e.isArray(j) || (j in d ? j = [j] : (j = e.camelCase(j), j in d ? j = [j] : j = j.split(" ")));
                        t = 0;
                        for (B = j.length; t < B; t++) delete d[j[t]];
                        if (! (c ? f: e.isEmptyObject)(d)) return
                    }
                    if (c || !(delete l[g].data, !f(l[g]))) s ? e.cleanData([b], !0) : e.support.deleteExpando || l != l.window ? delete l[g] : l[g] = null
                }
            }
        },
        _data: function(b, j, c) {
            return e.data(b, j, c, !0)
        },
        acceptData: function(b) {
            var j = b.nodeName && e.noData[b.nodeName.toLowerCase()];
            return ! j || !0 !== j && b.getAttribute("classid") === j
        }
    });
    e.fn.extend({
        data: function(b, j) {
            var y, D, t, f, s, l = this[0],
            g = 0,
            n = null;
            if (b === c) {
                if (this.length && (n = e.data(l), 1 === l.nodeType && !e._data(l, "parsedAttrs"))) {
                    t = l.attributes;
                    for (s = t.length; g < s; g++) f = t[g].name,
                    f.indexOf("data-") || (f = e.camelCase(f.substring(5)), d(l, f, n[f]));
                    e._data(l, "parsedAttrs", !0)
                }
                return n
            }
            return "object" == typeof b ? this.each(function() {
                e.data(this, b)
            }) : (y = b.split(".", 2), y[1] = y[1] ? "." + y[1] : "", D = y[1] + "!", e.access(this,
            function(j) {
                if (j === c) return n = this.triggerHandler("getData" + D, [y[0]]),
                n === c && l && (n = e.data(l, b), n = d(l, b, n)),
                n === c && y[1] ? this.data(y[0]) : n;
                y[1] = j;
                this.each(function() {
                    var c = e(this);
                    c.triggerHandler("setData" + D, y);
                    e.data(this, b, j);
                    c.triggerHandler("changeData" + D, y)
                })
            },
            null, j, 1 < arguments.length, null, !1))
        },
        removeData: function(b) {
            return this.each(function() {
                e.removeData(this, b)
            })
        }
    });
    e.extend({
        queue: function(b, j, c) {
            var d;
            if (b) return j = (j || "fx") + "queue",
            d = e._data(b, j),
            c && (!d || e.isArray(c) ? d = e._data(b, j, e.makeArray(c)) : d.push(c)),
            d || []
        },
        dequeue: function(b, j) {
            j = j || "fx";
            var c = e.queue(b, j),
            d = c.length,
            t = c.shift(),
            f = e._queueHooks(b, j),
            s = function() {
                e.dequeue(b, j)
            };
            "inprogress" === t && (t = c.shift(), d--);
            t && ("fx" === j && c.unshift("inprogress"), delete f.stop, t.call(b, s, f)); ! d && f && f.empty.fire()
        },
        _queueHooks: function(b, j) {
            var c = j + "queueHooks";
            return e._data(b, c) || e._data(b, c, {
                empty: e.Callbacks("once memory").add(function() {
                    e.removeData(b, j + "queue", !0);
                    e.removeData(b, c, !0)
                })
            })
        }
    });
    e.fn.extend({
        queue: function(b, j) {
            var d = 2;
            return "string" != typeof b && (j = b, b = "fx", d--),
            arguments.length < d ? e.queue(this[0], b) : j === c ? this: this.each(function() {
                var c = e.queue(this, b, j);
                e._queueHooks(this, b);
                "fx" === b && "inprogress" !== c[0] && e.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                e.dequeue(this, b)
            })
        },
        delay: function(b, j) {
            return b = e.fx ? e.fx.speeds[b] || b: b,
            j = j || "fx",
            this.queue(j,
            function(j, c) {
                var d = setTimeout(j, b);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(b, j) {
            var d, D = 1,
            t = e.Deferred(),
            f = this,
            s = this.length,
            l = function() {--D || t.resolveWith(f, [f])
            };
            "string" != typeof b && (j = b, b = c);
            for (b = b || "fx"; s--;)(d = e._data(f[s], b + "queueHooks")) && d.empty && (D++, d.empty.add(l));
            return l(),
            t.promise(j)
        }
    });
    var ba, Kb, Lb, Mb = /[\t\r\n]/g,
    Oc = /\r/g,
    Pc = /^(?:button|input)$/i,
    Qc = /^(?:button|input|object|select|textarea)$/i,
    Rc = /^a(?:rea|)$/i,
    Nb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    Ob = e.support.getSetAttribute;
    e.fn.extend({
        attr: function(b, j) {
            return e.access(this, e.attr, b, j, 1 < arguments.length)
        },
        removeAttr: function(b) {
            return this.each(function() {
                e.removeAttr(this, b)
            })
        },
        prop: function(b, j) {
            return e.access(this, e.prop, b, j, 1 < arguments.length)
        },
        removeProp: function(b) {
            return b = e.propFix[b] || b,
            this.each(function() {
                try {
                    this[b] = c,
                    delete this[b]
                } catch(j) {}
            })
        },
        addClass: function(b) {
            var j, c, d, t, f, s, l;
            if (e.isFunction(b)) return this.each(function(j) {
                e(this).addClass(b.call(this, j, this.className))
            });
            if (b && "string" == typeof b) {
                j = b.split(fa);
                c = 0;
                for (d = this.length; c < d; c++) if (t = this[c], 1 === t.nodeType) if (!t.className && 1 === j.length) t.className = b;
                else {
                    f = " " + t.className + " ";
                    s = 0;
                    for (l = j.length; s < l; s++) 0 > f.indexOf(" " + j[s] + " ") && (f += j[s] + " ");
                    t.className = e.trim(f)
                }
            }
            return this
        },
        removeClass: function(b) {
            var j, d, D, t, f, s, l;
            if (e.isFunction(b)) return this.each(function(j) {
                e(this).removeClass(b.call(this, j, this.className))
            });
            if (b && "string" == typeof b || b === c) {
                j = (b || "").split(fa);
                s = 0;
                for (l = this.length; s < l; s++) if (D = this[s], 1 === D.nodeType && D.className) {
                    d = (" " + D.className + " ").replace(Mb, " ");
                    t = 0;
                    for (f = j.length; t < f; t++) for (; 0 <= d.indexOf(" " + j[t] + " ");) d = d.replace(" " + j[t] + " ", " ");
                    D.className = b ? e.trim(d) : ""
                }
            }
            return this
        },
        toggleClass: function(b, j) {
            var c = typeof b,
            d = "boolean" == typeof j;
            return e.isFunction(b) ? this.each(function(c) {
                e(this).toggleClass(b.call(this, c, this.className, j), j)
            }) : this.each(function() {
                if ("string" === c) for (var t, f = 0,
                s = e(this), l = j, g = b.split(fa); t = g[f++];) l = d ? l: !s.hasClass(t),
                s[l ? "addClass": "removeClass"](t);
                else if ("undefined" === c || "boolean" === c) this.className && e._data(this, "__className__", this.className),
                this.className = this.className || !1 === b ? "": e._data(this, "__className__") || ""
            })
        },
        hasClass: function(b) {
            b = " " + b + " ";
            for (var j = 0,
            c = this.length; j < c; j++) if (1 === this[j].nodeType && 0 <= (" " + this[j].className + " ").replace(Mb, " ").indexOf(b)) return ! 0;
            return ! 1
        },
        val: function(b) {
            var j, d, D, t = this[0];
            if (arguments.length) return D = e.isFunction(b),
            this.each(function(d) {
                var y, t = e(this);
                if (1 === this.nodeType && (D ? y = b.call(this, d, t.val()) : y = b, null == y ? y = "": "number" == typeof y ? y += "": e.isArray(y) && (y = e.map(y,
                function(b) {
                    return null == b ? "": b + ""
                })), j = e.valHooks[this.type] || e.valHooks[this.nodeName.toLowerCase()], !j || !("set" in j) || j.set(this, y, "value") === c)) this.value = y
            });
            if (t) return j = e.valHooks[t.type] || e.valHooks[t.nodeName.toLowerCase()],
            j && "get" in j && (d = j.get(t, "value")) !== c ? d: (d = t.value, "string" == typeof d ? d.replace(Oc, "") : null == d ? "": d)
        }
    });
    e.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var j = b.attributes.value;
                    return ! j || j.specified ? b.value: b.text
                }
            },
            select: {
                get: function(b) {
                    var j, c, d = b.selectedIndex,
                    t = [],
                    f = b.options,
                    s = "select-one" === b.type;
                    if (0 > d) return null;
                    b = s ? d: 0;
                    for (c = s ? d + 1 : f.length; b < c; b++) if (j = f[b], j.selected && (e.support.optDisabled ? !j.disabled: null === j.getAttribute("disabled")) && (!j.parentNode.disabled || !e.nodeName(j.parentNode, "optgroup"))) {
                        j = e(j).val();
                        if (s) return j;
                        t.push(j)
                    }
                    return s && !t.length && f.length ? e(f[d]).val() : t
                },
                set: function(b, j) {
                    var c = e.makeArray(j);
                    return e(b).find("option").each(function() {
                        this.selected = 0 <= e.inArray(e(this).val(), c)
                    }),
                    c.length || (b.selectedIndex = -1),
                    c
                }
            }
        },
        attrFn: {},
        attr: function(b, j, d, D) {
            var t, f, s = b.nodeType;
            if (b && !(3 === s || 8 === s || 2 === s)) {
                if (D && e.isFunction(e.fn[j])) return e(b)[j](d);
                if ("undefined" == typeof b.getAttribute) return e.prop(b, j, d); (D = 1 !== s || !e.isXMLDoc(b)) && (j = j.toLowerCase(), f = e.attrHooks[j] || (Nb.test(j) ? Kb: ba));
                if (d !== c) {
                    if (null === d) {
                        e.removeAttr(b, j);
                        return
                    }
                    return f && "set" in f && D && (t = f.set(b, d, j)) !== c ? t: (b.setAttribute(j, d + ""), d)
                }
                return f && "get" in f && D && null !== (t = f.get(b, j)) ? t: (t = b.getAttribute(j), null === t ? c: t)
            }
        },
        removeAttr: function(b, j) {
            var c, d, t, f, s = 0;
            if (j && 1 === b.nodeType) for (d = j.split(fa); s < d.length; s++)(t = d[s]) && (c = e.propFix[t] || t, f = Nb.test(t), f || e.attr(b, t, ""), b.removeAttribute(Ob ? t: c), f && c in b && (b[c] = !1))
        },
        attrHooks: {
            type: {
                set: function(b, j) {
                    if (Pc.test(b.nodeName) && b.parentNode) e.error("type property can't be changed");
                    else if (!e.support.radioValue && "radio" === j && e.nodeName(b, "input")) {
                        var c = b.value;
                        return b.setAttribute("type", j),
                        c && (b.value = c),
                        j
                    }
                }
            },
            value: {
                get: function(b, j) {
                    return ba && e.nodeName(b, "button") ? ba.get(b, j) : j in b ? b.value: null
                },
                set: function(b, j, c) {
                    if (ba && e.nodeName(b, "button")) return ba.set(b, j, c);
                    b.value = j
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(b, j, d) {
            var D, t, f, s = b.nodeType;
            if (b && !(3 === s || 8 === s || 2 === s)) return f = 1 !== s || !e.isXMLDoc(b),
            f && (j = e.propFix[j] || j, t = e.propHooks[j]),
            d !== c ? t && "set" in t && (D = t.set(b, d, j)) !== c ? D: b[j] = d: t && "get" in t && null !== (D = t.get(b, j)) ? D: b[j]
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var j = b.getAttributeNode("tabindex");
                    return j && j.specified ? parseInt(j.value, 10) : Qc.test(b.nodeName) || Rc.test(b.nodeName) && b.href ? 0 : c
                }
            }
        }
    });
    Kb = {
        get: function(b, j) {
            var d, f = e.prop(b, j);
            return ! 0 === f || "boolean" != typeof f && (d = b.getAttributeNode(j)) && !1 !== d.nodeValue ? j.toLowerCase() : c
        },
        set: function(b, j, c) {
            var d;
            return ! 1 === j ? e.removeAttr(b, c) : (d = e.propFix[c] || c, d in b && (b[d] = !0), b.setAttribute(c, c.toLowerCase())),
            c
        }
    };
    Ob || (Lb = {
        name: !0,
        id: !0,
        coords: !0
    },
    ba = e.valHooks.button = {
        get: function(b, j) {
            var d;
            return d = b.getAttributeNode(j),
            d && (Lb[j] ? "" !== d.value: d.specified) ? d.value: c
        },
        set: function(b, j, c) {
            var d = b.getAttributeNode(c);
            return d || (d = C.createAttribute(c), b.setAttributeNode(d)),
            d.value = j + ""
        }
    },
    e.each(["width", "height"],
    function(b, j) {
        e.attrHooks[j] = e.extend(e.attrHooks[j], {
            set: function(b, u) {
                if ("" === u) return b.setAttribute(j, "auto"),
                u
            }
        })
    }), e.attrHooks.contenteditable = {
        get: ba.get,
        set: function(b, j, c) {
            "" === j && (j = "false");
            ba.set(b, j, c)
        }
    });
    e.support.hrefNormalized || e.each(["href", "src", "width", "height"],
    function(b, j) {
        e.attrHooks[j] = e.extend(e.attrHooks[j], {
            get: function(b) {
                b = b.getAttribute(j, 2);
                return null === b ? c: b
            }
        })
    });
    e.support.style || (e.attrHooks.style = {
        get: function(b) {
            return b.style.cssText.toLowerCase() || c
        },
        set: function(b, j) {
            return b.style.cssText = j + ""
        }
    });
    e.support.optSelected || (e.propHooks.selected = e.extend(e.propHooks.selected, {
        get: function(b) {
            b = b.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
            null
        }
    }));
    e.support.enctype || (e.propFix.enctype = "encoding");
    e.support.checkOn || e.each(["radio", "checkbox"],
    function() {
        e.valHooks[this] = {
            get: function(b) {
                return null === b.getAttribute("value") ? "on": b.value
            }
        }
    });
    e.each(["radio", "checkbox"],
    function() {
        e.valHooks[this] = e.extend(e.valHooks[this], {
            set: function(b, j) {
                if (e.isArray(j)) return b.checked = 0 <= e.inArray(e(b).val(), j)
            }
        })
    });
    var db = /^(?:textarea|input|select)$/i,
    Pb = /^([^\.]*|)(?:\.(.+)|)$/,
    Sc = /(?:^|\s)hover(\.\S+|)\b/,
    Tc = /^key/,
    Uc = /^(?:mouse|contextmenu)|click/,
    Qb = /^(?:focusinfocus|focusoutblur)$/,
    Rb = function(b) {
        return e.event.special.hover ? b: b.replace(Sc, "mouseenter$1 mouseleave$1")
    };
    e.event = {
        add: function(b, j, d, f, t) {
            var l, s, g, n, r, m, p, x, q;
            if (! (3 === b.nodeType || 8 === b.nodeType || !j || !d || !(l = e._data(b)))) {
                d.handler && (p = d, d = p.handler, t = p.selector);
                d.guid || (d.guid = e.guid++); (g = l.events) || (l.events = g = {}); (s = l.handle) || (l.handle = s = function(b) {
                    return "undefined" != typeof e && (!b || e.event.triggered !== b.type) ? e.event.dispatch.apply(s.elem, arguments) : c
                },
                s.elem = b);
                j = e.trim(Rb(j)).split(" ");
                for (l = 0; l < j.length; l++) {
                    n = Pb.exec(j[l]) || [];
                    r = n[1];
                    m = (n[2] || "").split(".").sort();
                    q = e.event.special[r] || {};
                    r = (t ? q.delegateType: q.bindType) || r;
                    q = e.event.special[r] || {};
                    n = e.extend({
                        type: r,
                        origType: n[1],
                        data: f,
                        handler: d,
                        guid: d.guid,
                        selector: t,
                        needsContext: t && e.expr.match.needsContext.test(t),
                        namespace: m.join(".")
                    },
                    p);
                    x = g[r];
                    if (!x && (x = g[r] = [], x.delegateCount = 0, !q.setup || !1 === q.setup.call(b, f, m, s))) b.addEventListener ? b.addEventListener(r, s, !1) : b.attachEvent && b.attachEvent("on" + r, s);
                    q.add && (q.add.call(b, n), n.handler.guid || (n.handler.guid = d.guid));
                    t ? x.splice(x.delegateCount++, 0, n) : x.push(n);
                    e.event.global[r] = !0
                }
                b = null
            }
        },
        global: {},
        remove: function(b, j, c, d, f) {
            var l, s, g, n, r, m, p, q, x, v, A = e.hasData(b) && e._data(b);
            if (A && (p = A.events)) {
                j = e.trim(Rb(j || "")).split(" ");
                for (l = 0; l < j.length; l++) if (s = Pb.exec(j[l]) || [], g = n = s[1], s = s[2], g) {
                    q = e.event.special[g] || {};
                    g = (d ? q.delegateType: q.bindType) || g;
                    x = p[g] || [];
                    r = x.length;
                    s = s ? RegExp("(^|\\.)" + s.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                    for (m = 0; m < x.length; m++) v = x[m],
                    (f || n === v.origType) && (!c || c.guid === v.guid) && (!s || s.test(v.namespace)) && (!d || d === v.selector || "**" === d && v.selector) && (x.splice(m--, 1), v.selector && x.delegateCount--, q.remove && q.remove.call(b, v));
                    0 === x.length && r !== x.length && ((!q.teardown || !1 === q.teardown.call(b, s, A.handle)) && e.removeEvent(b, g, A.handle), delete p[g])
                } else for (g in p) e.event.remove(b, g + j[l], c, d, !0);
                e.isEmptyObject(p) && (delete A.handle, e.removeData(b, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(u, j, d, f) {
            if (!d || 3 !== d.nodeType && 8 !== d.nodeType) {
                var t, l, s, g, n, r, m, p = u.type || u;
                g = [];
                if (!Qb.test(p + e.event.triggered) && (0 <= p.indexOf("!") && (p = p.slice(0, -1), t = !0), 0 <= p.indexOf(".") && (g = p.split("."), p = g.shift(), g.sort()), d && !e.event.customEvent[p] || e.event.global[p])) if (u = "object" == typeof u ? u[e.expando] ? u: new e.Event(p, u) : new e.Event(p), u.type = p, u.isTrigger = !0, u.exclusive = t, u.namespace = g.join("."), u.namespace_re = u.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, g = 0 > p.indexOf(":") ? "on" + p: "", d) {
                    if (u.result = c, u.target || (u.target = d), j = null != j ? e.makeArray(j) : [], j.unshift(u), n = e.event.special[p] || {},
                    !(n.trigger && !1 === n.trigger.apply(d, j))) {
                        m = [[d, n.bindType || p]];
                        if (!f && !n.noBubble && !e.isWindow(d)) {
                            l = n.delegateType || p;
                            t = Qb.test(l + p) ? d: d.parentNode;
                            for (s = d; t; t = t.parentNode) m.push([t, l]),
                            s = t;
                            s === (d.ownerDocument || C) && m.push([s.defaultView || s.parentWindow || b, l])
                        }
                        for (l = 0; l < m.length && !u.isPropagationStopped(); l++) t = m[l][0],
                        u.type = m[l][1],
                        (r = (e._data(t, "events") || {})[u.type] && e._data(t, "handle")) && r.apply(t, j),
                        (r = g && t[g]) && e.acceptData(t) && r.apply && !1 === r.apply(t, j) && u.preventDefault();
                        return u.type = p,
                        !f && !u.isDefaultPrevented() && (!n._default || !1 === n._default.apply(d.ownerDocument, j)) && ("click" !== p || !e.nodeName(d, "a")) && e.acceptData(d) && g && d[p] && ("focus" !== p && "blur" !== p || 0 !== u.target.offsetWidth) && !e.isWindow(d) && (s = d[g], s && (d[g] = null), e.event.triggered = p, d[p](), e.event.triggered = c, s && (d[g] = s)),
                        u.result
                    }
                } else for (l in d = e.cache, d) d[l].events && d[l].events[p] && e.event.trigger(u, j, d[l].handle.elem, !0)
            }
        },
        dispatch: function(u) {
            u = e.event.fix(u || b.event);
            var j, d, f, t, l, s, g = (e._data(this, "events") || {})[u.type] || [],
            n = g.delegateCount,
            r = aa.call(arguments),
            m = !u.exclusive && !u.namespace,
            p = e.event.special[u.type] || {},
            x = [];
            r[0] = u;
            u.delegateTarget = this;
            if (! (p.preDispatch && !1 === p.preDispatch.call(this, u))) {
                if (n && (!u.button || "click" !== u.type)) for (d = u.target; d != this; d = d.parentNode || this) if (!0 !== d.disabled || "click" !== u.type) {
                    t = {};
                    l = [];
                    for (j = 0; j < n; j++) f = g[j],
                    s = f.selector,
                    t[s] === c && (t[s] = f.needsContext ? 0 <= e(s, this).index(d) : e.find(s, this, null, [d]).length),
                    t[s] && l.push(f);
                    l.length && x.push({
                        elem: d,
                        matches: l
                    })
                }
                g.length > n && x.push({
                    elem: this,
                    matches: g.slice(n)
                });
                for (j = 0; j < x.length && !u.isPropagationStopped(); j++) {
                    t = x[j];
                    u.currentTarget = t.elem;
                    for (d = 0; d < t.matches.length && !u.isImmediatePropagationStopped(); d++) if (f = t.matches[d], m || !u.namespace && !f.namespace || u.namespace_re && u.namespace_re.test(f.namespace)) u.data = f.data,
                    u.handleObj = f,
                    f = ((e.event.special[f.origType] || {}).handle || f.handler).apply(t.elem, r),
                    f !== c && (u.result = f, !1 === f && (u.preventDefault(), u.stopPropagation()))
                }
                return p.postDispatch && p.postDispatch.call(this, u),
                u.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(b, j) {
                return null == b.which && (b.which = null != j.charCode ? j.charCode: j.keyCode),
                b
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(b, j) {
                var d, e, f, l = j.button,
                s = j.fromElement;
                return null == b.pageX && null != j.clientX && (d = b.target.ownerDocument || C, e = d.documentElement, f = d.body, b.pageX = j.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), b.pageY = j.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)),
                !b.relatedTarget && s && (b.relatedTarget = s === b.target ? j.toElement: s),
                !b.which && l !== c && (b.which = l & 1 ? 1 : l & 2 ? 3 : l & 4 ? 2 : 0),
                b
            }
        },
        fix: function(b) {
            if (b[e.expando]) return b;
            var j, c, d = b,
            f = e.event.fixHooks[b.type] || {},
            l = f.props ? this.props.concat(f.props) : this.props;
            b = e.Event(d);
            for (j = l.length; j;) c = l[--j],
            b[c] = d[c];
            return b.target || (b.target = d.srcElement || C),
            3 === b.target.nodeType && (b.target = b.target.parentNode),
            b.metaKey = !!b.metaKey,
            f.filter ? f.filter(b, d) : b
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(b, j, c) {
                    e.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function(b, j) {
                    this.onbeforeunload === j && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(b, j, c, d) {
            b = e.extend(new e.Event, c, {
                type: b,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? e.event.trigger(b, null, j) : e.event.dispatch.call(j, b);
            b.isDefaultPrevented() && c.preventDefault()
        }
    };
    e.event.handle = e.event.dispatch;
    e.removeEvent = C.removeEventListener ?
    function(b, j, c) {
        b.removeEventListener && b.removeEventListener(j, c, !1)
    }: function(b, j, c) {
        j = "on" + j;
        b.detachEvent && ("undefined" == typeof b[j] && (b[j] = null), b.detachEvent(j, c))
    };
    e.Event = function(b, j) {
        if (this instanceof e.Event) b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || !1 === b.returnValue || b.getPreventDefault && b.getPreventDefault() ? m: g) : this.type = b,
        j && e.extend(this, j),
        this.timeStamp = b && b.timeStamp || e.now(),
        this[e.expando] = !0;
        else return new e.Event(b, j)
    };
    e.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = m;
            var b = this.originalEvent;
            b && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = m;
            var b = this.originalEvent;
            b && (b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = m;
            this.stopPropagation()
        },
        isDefaultPrevented: g,
        isPropagationStopped: g,
        isImmediatePropagationStopped: g
    };
    e.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(b, j) {
        e.event.special[b] = {
            delegateType: j,
            bindType: j,
            handle: function(b) {
                var c, u = b.relatedTarget,
                d = b.handleObj;
                if (!u || u !== this && !e.contains(this, u)) b.type = d.origType,
                c = d.handler.apply(this, arguments),
                b.type = j;
                return c
            }
        }
    });
    e.support.submitBubbles || (e.event.special.submit = {
        setup: function() {
            if (e.nodeName(this, "form")) return ! 1;
            e.event.add(this, "click._submit keypress._submit",
            function(b) {
                b = b.target; (b = e.nodeName(b, "input") || e.nodeName(b, "button") ? b.form: c) && !e._data(b, "_submit_attached") && (e.event.add(b, "submit._submit",
                function(b) {
                    b._submit_bubble = !0
                }), e._data(b, "_submit_attached", !0))
            })
        },
        postDispatch: function(b) {
            b._submit_bubble && (delete b._submit_bubble, this.parentNode && !b.isTrigger && e.event.simulate("submit", this.parentNode, b, !0))
        },
        teardown: function() {
            if (e.nodeName(this, "form")) return ! 1;
            e.event.remove(this, "._submit")
        }
    });
    e.support.changeBubbles || (e.event.special.change = {
        setup: function() {
            if (db.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type) e.event.add(this, "propertychange._change",
                function(b) {
                    "checked" === b.originalEvent.propertyName && (this._just_changed = !0)
                }),
                e.event.add(this, "click._change",
                function(b) {
                    this._just_changed && !b.isTrigger && (this._just_changed = !1);
                    e.event.simulate("change", this, b, !0)
                });
                return ! 1
            }
            e.event.add(this, "beforeactivate._change",
            function(b) {
                b = b.target;
                db.test(b.nodeName) && !e._data(b, "_change_attached") && (e.event.add(b, "change._change",
                function(b) {
                    this.parentNode && !b.isSimulated && !b.isTrigger && e.event.simulate("change", this.parentNode, b, !0)
                }), e._data(b, "_change_attached", !0))
            })
        },
        handle: function(b) {
            var j = b.target;
            if (this !== j || b.isSimulated || b.isTrigger || "radio" !== j.type && "checkbox" !== j.type) return b.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return e.event.remove(this, "._change"),
            !db.test(this.nodeName)
        }
    });
    e.support.focusinBubbles || e.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(b, j) {
        var c = 0,
        d = function(b) {
            e.event.simulate(j, b.target, e.event.fix(b), !0)
        };
        e.event.special[j] = {
            setup: function() {
                0 === c++&&C.addEventListener(b, d, !0)
            },
            teardown: function() {
                0 === --c && C.removeEventListener(b, d, !0)
            }
        }
    });
    e.fn.extend({
        on: function(b, j, d, f, l) {
            var B, s;
            if ("object" == typeof b) {
                "string" != typeof j && (d = d || j, j = c);
                for (s in b) this.on(s, j, d, b[s], l);
                return this
            }
            null == d && null == f ? (f = j, d = j = c) : null == f && ("string" == typeof j ? (f = d, d = c) : (f = d, d = j, j = c));
            if (!1 === f) f = g;
            else if (!f) return this;
            return 1 === l && (B = f, f = function(b) {
                return e().off(b),
                B.apply(this, arguments)
            },
            f.guid = B.guid || (B.guid = e.guid++)),
            this.each(function() {
                e.event.add(this, b, f, d, j)
            })
        },
        one: function(b, j, c, d) {
            return this.on(b, j, c, d, 1)
        },
        off: function(b, j, d) {
            var f, l;
            if (b && b.preventDefault && b.handleObj) return f = b.handleObj,
            e(b.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace: f.origType, f.selector, f.handler),
            this;
            if ("object" == typeof b) {
                for (l in b) this.off(l, j, b[l]);
                return this
            }
            if (!1 === j || "function" == typeof j) d = j,
            j = c;
            return ! 1 === d && (d = g),
            this.each(function() {
                e.event.remove(this, b, d, j)
            })
        },
        bind: function(b, j, c) {
            return this.on(b, null, j, c)
        },
        unbind: function(b, j) {
            return this.off(b, null, j)
        },
        live: function(b, j, c) {
            return e(this.context).on(b, this.selector, j, c),
            this
        },
        die: function(b, c) {
            return e(this.context).off(b, this.selector || "**", c),
            this
        },
        delegate: function(b, c, d, e) {
            return this.on(c, b, d, e)
        },
        undelegate: function(b, c, d) {
            return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", d)
        },
        trigger: function(b, c) {
            return this.each(function() {
                e.event.trigger(b, c, this)
            })
        },
        triggerHandler: function(b, c) {
            if (this[0]) return e.event.trigger(b, c, this[0], !0)
        },
        toggle: function(b) {
            var c = arguments,
            d = b.guid || e.guid++,
            f = 0,
            l = function(d) {
                var y = (e._data(this, "lastToggle" + b.guid) || 0) % f;
                return e._data(this, "lastToggle" + b.guid, y + 1),
                d.preventDefault(),
                c[y].apply(this, arguments) || !1
            };
            for (l.guid = d; f < c.length;) c[f++].guid = d;
            return this.click(l)
        },
        hover: function(b, c) {
            return this.mouseenter(b).mouseleave(c || b)
        }
    });
    e.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(b, c) {
        e.fn[c] = function(b, d) {
            return null == d && (d = b, b = null),
            0 < arguments.length ? this.on(c, null, b, d) : this.trigger(c)
        };
        Tc.test(c) && (e.event.fixHooks[c] = e.event.keyHooks);
        Uc.test(c) && (e.event.fixHooks[c] = e.event.mouseHooks)
    });
    var Vc = b,
    F = function(b, c, d, e) {
        d = d || [];
        c = c || X;
        var f, l, s, g, n = c.nodeType;
        if (!b || "string" != typeof b) return d;
        if (1 !== n && 9 !== n) return [];
        s = Ka(c);
        if (!s && !e && (f = Wc.exec(b))) if (g = f[1]) if (9 === n) {
            l = c.getElementById(g);
            if (!l || !l.parentNode) return d;
            if (l.id === g) return d.push(l),
            d
        } else {
            if (c.ownerDocument && (l = c.ownerDocument.getElementById(g)) && Sb(c, l) && l.id === g) return d.push(l),
            d
        } else {
            if (f[2]) return oa.apply(d, pa.call(c.getElementsByTagName(b), 0)),
            d;
            if ((g = f[3]) && Tb && c.getElementsByClassName) return oa.apply(d, pa.call(c.getElementsByClassName(g), 0)),
            d
        }
        return eb(b.replace(La, "$1"), c, d, e, s)
    },
    va = function(b) {
        return function(c) {
            return "input" === c.nodeName.toLowerCase() && c.type === b
        }
    },
    Ub = function(b) {
        return function(c) {
            var d = c.nodeName.toLowerCase();
            return ("input" === d || "button" === d) && c.type === b
        }
    },
    ia = function(b) {
        return Y(function(c) {
            return c = +c,
            Y(function(d, e) {
                for (var f, l = b([], d.length, c), s = l.length; s--;) d[f = l[s]] && (d[f] = !(e[f] = d[f]))
            })
        })
    },
    Ma = function(b, c, d) {
        if (b === c) return d;
        for (b = b.nextSibling; b;) {
            if (b === c) return - 1;
            b = b.nextSibling
        }
        return 1
    },
    Oa = function(b, c) {
        var d, e, f, l, s, g, n;
        if (s = Vb[I][b]) return c ? 0 : s.slice(0);
        s = b;
        g = [];
        for (n = L.preFilter; s;) {
            if (!d || (e = Xc.exec(s))) e && (s = s.slice(e[0].length)),
            g.push(f = []);
            d = !1;
            if (e = Yc.exec(s)) f.push(d = new Wb(e.shift())),
            s = s.slice(d.length),
            d.type = e[0].replace(La, " ");
            for (l in L.filter)(e = Na[l].exec(s)) && (!n[l] || (e = n[l](e, X, !0))) && (f.push(d = new Wb(e.shift())), s = s.slice(d.length), d.type = l, d.matches = e);
            if (!d) break
        }
        return c ? s.length: s ? F.error(b) : Vb(b, g).slice(0)
    },
    gb = function(b, c, d) {
        var e = c.dir,
        f = d && "parentNode" === c.dir,
        l = Zc++;
        return c.first ?
        function(c, j, d) {
            for (; c = c[e];) if (f || 1 === c.nodeType) return b(c, j, d)
        }: function(c, j, d) {
            if (d) for (; c = c[e];) {
                if ((f || 1 === c.nodeType) && b(c, j, d)) return c
            } else for (var y, g = wa + " " + l + " ",
            n = g + fb; c = c[e];) if (f || 1 === c.nodeType) {
                if ((y = c[I]) === n) return c.sizset;
                if ("string" == typeof y && 0 === y.indexOf(g)) {
                    if (c.sizset) return c
                } else {
                    c[I] = n;
                    if (b(c, j, d)) return c.sizset = !0,
                    c;
                    c.sizset = !1
                }
            }
        }
    },
    hb = function(b) {
        return 1 < b.length ?
        function(c, d, e) {
            for (var f = b.length; f--;) if (!b[f](c, d, e)) return ! 1;
            return ! 0
        }: b[0]
    },
    Pa = function(b, c, d, e, f) {
        for (var l, s = [], g = 0, n = b.length, r = null != c; g < n; g++) if (l = b[g]) if (!d || d(l, e, f)) s.push(l),
        r && c.push(g);
        return s
    },
    ib = function(b, c, d, e, f, l) {
        return e && !e[I] && (e = ib(e)),
        f && !f[I] && (f = ib(f, l)),
        Y(function(l, g, n, B) {
            if (!l || !f) {
                var r, m, p = [],
                x = [],
                q = g.length;
                if (! (m = l)) {
                    m = c || "*";
                    var v = n.nodeType ? [n] : n,
                    A = [];
                    r = 0;
                    for (var z = v.length; r < z; r++) F(m, v[r], A, l);
                    m = A
                }
                v = b && (l || !c) ? Pa(m, p, b, n, B) : m;
                A = d ? f || (l ? b: q || e) ? [] : g: v;
                d && d(v, A, n, B);
                if (e) {
                    m = Pa(A, x);
                    e(m, [], n, B);
                    for (n = m.length; n--;) if (r = m[n]) A[x[n]] = !(v[x[n]] = r)
                }
                if (l) for (n = b && A.length; n--;) {
                    if (r = A[n]) l[p[n]] = !(g[p[n]] = r)
                } else A = Pa(A === g ? A.splice(q, A.length) : A),
                f ? f(null, g, A, B) : oa.apply(g, A)
            }
        })
    },
    jb = function(b) {
        var c, d, e, f = b.length,
        l = L.relative[b[0].type];
        d = l || L.relative[" "];
        for (var g = l ? 1 : 0, n = gb(function(b) {
            return b === c
        },
        d, !0), r = gb(function(b) {
            return - 1 < Xb.call(c, b)
        },
        d, !0), m = [function(b, d, u) {
            return ! l && (u || d !== Qa) || ((c = d).nodeType ? n(b, d, u) : r(b, d, u))
        }]; g < f; g++) if (d = L.relative[b[g].type]) m = [gb(hb(m), d)];
        else {
            d = L.filter[b[g].type].apply(null, b[g].matches);
            if (d[I]) {
                for (e = ++g; e < f && !L.relative[b[e].type]; e++);
                return ib(1 < g && hb(m), 1 < g && b.slice(0, g - 1).join("").replace(La, "$1"), d, g < e && jb(b.slice(g, e)), e < f && jb(b = b.slice(e)), e < f && b.join(""))
            }
            m.push(d)
        }
        return hb(m)
    },
    eb = function(b, c, d, e, f) {
        var l, g, n, r, m = Oa(b);
        if (!e && 1 === m.length) {
            g = m[0] = m[0].slice(0);
            if (2 < g.length && "ID" === (n = g[0]).type && 9 === c.nodeType && !f && L.relative[g[1].type]) {
                c = L.find.ID(n.matches[0].replace(ja, ""), c, f)[0];
                if (!c) return d;
                b = b.slice(g.shift().length)
            }
            for (l = Na.POS.test(b) ? -1 : g.length - 1; 0 <= l; l--) {
                n = g[l];
                if (L.relative[r = n.type]) break;
                if (r = L.find[r]) if (e = r(n.matches[0].replace(ja, ""), kb.test(g[0].type) && c.parentNode || c, f)) {
                    g.splice(l, 1);
                    b = e.length && g.join("");
                    if (!b) return oa.apply(d, pa.call(e, 0)),
                    d;
                    break
                }
            }
        }
        return lb(b, m)(e, c, f, d, kb.test(b)),
        d
    },
    Yb = function() {},
    fb,
    mb,
    L,
    Ra,
    Ka,
    Sb,
    lb,
    nb,
    xa,
    Qa,
    Zb = !0,
    I = ("sizcache" + Math.random()).replace(".", ""),
    Wb = String,
    X = Vc.document,
    W = X.documentElement,
    wa = 0,
    Zc = 0,
    $c = [].pop,
    oa = [].push,
    pa = [].slice,
    Xb = [].indexOf ||
    function(b) {
        for (var c = 0,
        d = this.length; c < d; c++) if (this[c] === b) return c;
        return - 1
    },
    Y = function(b, c) {
        return b[I] = null == c || c,
        b
    },
    ob = function() {
        var b = {},
        c = [];
        return Y(function(d, e) {
            return c.push(d) > L.cacheLength && delete b[c.shift()],
            b[d] = e
        },
        b)
    },
    $b = ob(),
    Vb = ob(),
    ac = ob(),
    bc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
    pb = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + bc + ")|[^:]|\\\\.)*|.*))\\)|)",
    La = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
    Xc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
    Yc = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
    ad = RegExp(pb),
    Wc = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
    kb = /[\x20\t\r\n\f]*[+~]/,
    bd = /h\d/i,
    cd = /input|select|textarea|button/i,
    ja = /\\(?!\\)/g,
    Na = {
        ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,
        CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,
        NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,
        TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
        ATTR: RegExp("^" + bc),
        PSEUDO: RegExp("^" + pb),
        POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
        CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
        needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
    },
    ca = function(b) {
        var c = X.createElement("div");
        try {
            return b(c)
        } catch(d) {
            return ! 1
        } finally {}
    },
    dd = ca(function(b) {
        return b.appendChild(X.createComment("")),
        !b.getElementsByTagName("*").length
    }),
    ed = ca(function(b) {
        return b.innerHTML = "<a href='#'></a>",
        b.firstChild && "undefined" !== typeof b.firstChild.getAttribute && "#" === b.firstChild.getAttribute("href")
    }),
    fd = ca(function(b) {
        b.innerHTML = "<select></select>";
        b = typeof b.lastChild.getAttribute("multiple");
        return "boolean" !== b && "string" !== b
    }),
    Tb = ca(function(b) {
        return b.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
        !b.getElementsByClassName || !b.getElementsByClassName("e").length ? !1 : (b.lastChild.className = "e", 2 === b.getElementsByClassName("e").length)
    }),
    gd = ca(function(b) {
        b.id = I + 0;
        b.innerHTML = "<a name='" + I + "'></a><div name='" + I + "'></div>";
        W.insertBefore(b, W.firstChild);
        var c = X.getElementsByName && X.getElementsByName(I).length === 2 + X.getElementsByName(I + 0).length;
        return mb = !X.getElementById(I),
        W.removeChild(b),
        c
    });
    try {
        pa.call(W.childNodes, 0)[0].nodeType
    } catch(Qd) {
        pa = function(b) {
            for (var c, d = []; c = this[b]; b++) d.push(c);
            return d
        }
    }
    F.matches = function(b, c) {
        return F(b, null, null, c)
    };
    F.matchesSelector = function(b, c) {
        return 0 < F(c, null, null, [b]).length
    };
    Ra = F.getText = function(b) {
        var c, d = "",
        e = 0;
        if (c = b.nodeType) if (1 === c || 9 === c || 11 === c) {
            if ("string" == typeof b.textContent) return b.textContent;
            for (b = b.firstChild; b; b = b.nextSibling) d += Ra(b)
        } else {
            if (3 === c || 4 === c) return b.nodeValue
        } else for (; c = b[e]; e++) d += Ra(c);
        return d
    };
    Ka = F.isXML = function(b) {
        return (b = b && (b.ownerDocument || b).documentElement) ? "HTML" !== b.nodeName: !1
    };
    Sb = F.contains = W.contains ?
    function(b, c) {
        var d = 9 === b.nodeType ? b.documentElement: b,
        e = c && c.parentNode;
        return b === e || !(!e || !(1 === e.nodeType && d.contains && d.contains(e)))
    }: W.compareDocumentPosition ?
    function(b, c) {
        return c && !!(b.compareDocumentPosition(c) & 16)
    }: function(b, c) {
        for (; c = c.parentNode;) if (c === b) return ! 0;
        return ! 1
    };
    F.attr = function(b, c) {
        var d, e = Ka(b);
        return e || (c = c.toLowerCase()),
        (d = L.attrHandle[c]) ? d(b) : e || fd ? b.getAttribute(c) : (d = b.getAttributeNode(c), d ? "boolean" == typeof b[c] ? b[c] ? c: null: d.specified ? d.value: null: null)
    };
    L = F.selectors = {
        cacheLength: 50,
        createPseudo: Y,
        match: Na,
        attrHandle: ed ? {}: {
            href: function(b) {
                return b.getAttribute("href", 2)
            },
            type: function(b) {
                return b.getAttribute("type")
            }
        },
        find: {
            ID: mb ?
            function(b, c, d) {
                if ("undefined" !== typeof c.getElementById && !d) return (b = c.getElementById(b)) && b.parentNode ? [b] : []
            }: function(b, c, d) {
                if ("undefined" !== typeof c.getElementById && !d) return (c = c.getElementById(b)) ? c.id === b || "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id").value === b ? [c] : void 0 : []
            },
            TAG: dd ?
            function(b, c) {
                if ("undefined" !== typeof c.getElementsByTagName) return c.getElementsByTagName(b)
            }: function(b, c) {
                var d = c.getElementsByTagName(b);
                if ("*" === b) {
                    for (var e, f = [], l = 0; e = d[l]; l++) 1 === e.nodeType && f.push(e);
                    return f
                }
                return d
            },
            NAME: gd &&
            function(b, c) {
                if ("undefined" !== typeof c.getElementsByName) return c.getElementsByName(name)
            },
            CLASS: Tb &&
            function(b, c, d) {
                if ("undefined" !== typeof c.getElementsByClassName && !d) return c.getElementsByClassName(b)
            }
        },
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(b) {
                return b[1] = b[1].replace(ja, ""),
                b[3] = (b[4] || b[5] || "").replace(ja, ""),
                "~=" === b[2] && (b[3] = " " + b[3] + " "),
                b.slice(0, 4)
            },
            CHILD: function(b) {
                return b[1] = b[1].toLowerCase(),
                "nth" === b[1] ? (b[2] || F.error(b[0]), b[3] = +(b[3] ? b[4] + (b[5] || 1) : 2 * ("even" === b[2] || "odd" === b[2])), b[4] = +(b[6] + b[7] || "odd" === b[2])) : b[2] && F.error(b[0]),
                b
            },
            PSEUDO: function(b) {
                var c, d;
                if (Na.CHILD.test(b[0])) return null;
                if (b[3]) b[2] = b[3];
                else if (c = b[4]) ad.test(c) && (d = Oa(c, !0)) && (d = c.indexOf(")", c.length - d) - c.length) && (c = c.slice(0, d), b[0] = b[0].slice(0, d)),
                b[2] = c;
                return b.slice(0, 3)
            }
        },
        filter: {
            ID: mb ?
            function(b) {
                return b = b.replace(ja, ""),
                function(c) {
                    return c.getAttribute("id") === b
                }
            }: function(b) {
                return b = b.replace(ja, ""),
                function(c) {
                    return (c = "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id")) && c.value === b
                }
            },
            TAG: function(b) {
                return "*" === b ?
                function() {
                    return ! 0
                }: (b = b.replace(ja, "").toLowerCase(),
                function(c) {
                    return c.nodeName && c.nodeName.toLowerCase() === b
                })
            },
            CLASS: function(b) {
                var c = $b[I][b];
                return c || (c = $b(b, RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)"))),
                function(b) {
                    return c.test(b.className || "undefined" !== typeof b.getAttribute && b.getAttribute("class") || "")
                }
            },
            ATTR: function(b, c, d) {
                return function(e) {
                    e = F.attr(e, b);
                    return null == e ? "!=" === c: c ? (e += "", "=" === c ? e === d: "!=" === c ? e !== d: "^=" === c ? d && 0 === e.indexOf(d) : "*=" === c ? d && -1 < e.indexOf(d) : "$=" === c ? d && e.substr(e.length - d.length) === d: "~=" === c ? -1 < (" " + e + " ").indexOf(d) : "|=" === c ? e === d || e.substr(0, d.length + 1) === d + "-": !1) : !0
                }
            },
            CHILD: function(b, c, d, e) {
                return "nth" === b ?
                function(b) {
                    var c, j;
                    c = b.parentNode;
                    if (1 === d && 0 === e) return ! 0;
                    if (c) {
                        j = 0;
                        for (c = c.firstChild; c && !(1 === c.nodeType && (j++, b === c)); c = c.nextSibling);
                    }
                    return j -= e,
                    j === d || 0 === j % d && 0 <= j / d
                }: function(c) {
                    var d = c;
                    switch (b) {
                    case "only":
                    case "first":
                        for (; d = d.previousSibling;) if (1 === d.nodeType) return ! 1;
                        if ("first" === b) return ! 0;
                        d = c;
                    case "last":
                        for (; d = d.nextSibling;) if (1 === d.nodeType) return ! 1;
                        return ! 0
                    }
                }
            },
            PSEUDO: function(b, c) {
                var d, e = L.pseudos[b] || L.setFilters[b.toLowerCase()] || F.error("unsupported pseudo: " + b);
                return e[I] ? e(c) : 1 < e.length ? (d = [b, b, "", c], L.setFilters.hasOwnProperty(b.toLowerCase()) ? Y(function(b, d) {
                    for (var u, f = e(b, c), l = f.length; l--;) u = Xb.call(b, f[l]),
                    b[u] = !(d[u] = f[l])
                }) : function(b) {
                    return e(b, 0, d)
                }) : e
            }
        },
        pseudos: {
            not: Y(function(b) {
                var c = [],
                d = [],
                e = lb(b.replace(La, "$1"));
                return e[I] ? Y(function(b, c, d, j) {
                    j = e(b, null, j, []);
                    for (var u = b.length; u--;) if (d = j[u]) b[u] = !(c[u] = d)
                }) : function(b, u, f) {
                    return c[0] = b,
                    e(c, null, f, d),
                    !d.pop()
                }
            }),
            has: Y(function(b) {
                return function(c) {
                    return 0 < F(b, c).length
                }
            }),
            contains: Y(function(b) {
                return function(c) {
                    return - 1 < (c.textContent || c.innerText || Ra(c)).indexOf(b)
                }
            }),
            enabled: function(b) {
                return ! 1 === b.disabled
            },
            disabled: function(b) {
                return ! 0 === b.disabled
            },
            checked: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && !!b.checked || "option" === c && !!b.selected
            },
            selected: function(b) {
                return b.parentNode && b.parentNode.selectedIndex,
                !0 === b.selected
            },
            parent: function(b) {
                return ! L.pseudos.empty(b)
            },
            empty: function(b) {
                var c;
                for (b = b.firstChild; b;) {
                    if ("@" < b.nodeName || 3 === (c = b.nodeType) || 4 === c) return ! 1;
                    b = b.nextSibling
                }
                return ! 0
            },
            header: function(b) {
                return bd.test(b.nodeName)
            },
            text: function(b) {
                var c, d;
                return "input" === b.nodeName.toLowerCase() && "text" === (c = b.type) && (null == (d = b.getAttribute("type")) || d.toLowerCase() === c)
            },
            radio: va("radio"),
            checkbox: va("checkbox"),
            file: va("file"),
            password: va("password"),
            image: va("image"),
            submit: Ub("submit"),
            reset: Ub("reset"),
            button: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && "button" === b.type || "button" === c
            },
            input: function(b) {
                return cd.test(b.nodeName)
            },
            focus: function(b) {
                var c = b.ownerDocument;
                return b === c.activeElement && (!c.hasFocus || c.hasFocus()) && ( !! b.type || !!b.href)
            },
            active: function(b) {
                return b === b.ownerDocument.activeElement
            },
            first: ia(function() {
                return [0]
            }),
            last: ia(function(b, c) {
                return [c - 1]
            }),
            eq: ia(function(b, c, d) {
                return [0 > d ? d + c: d]
            }),
            even: ia(function(b, c) {
                for (var d = 0; d < c; d += 2) b.push(d);
                return b
            }),
            odd: ia(function(b, c) {
                for (var d = 1; d < c; d += 2) b.push(d);
                return b
            }),
            lt: ia(function(b, c, d) {
                for (c = 0 > d ? d + c: d; 0 <= --c;) b.push(c);
                return b
            }),
            gt: ia(function(b, c, d) {
                for (d = 0 > d ? d + c: d; ++d < c;) b.push(d);
                return b
            })
        }
    };
    nb = W.compareDocumentPosition ?
    function(b, c) {
        return b === c ? (xa = !0, 0) : (!b.compareDocumentPosition || !c.compareDocumentPosition ? b.compareDocumentPosition: b.compareDocumentPosition(c) & 4) ? -1 : 1
    }: function(b, c) {
        if (b === c) return xa = !0,
        0;
        if (b.sourceIndex && c.sourceIndex) return b.sourceIndex - c.sourceIndex;
        var d, e, f = [],
        l = [];
        d = b.parentNode;
        e = c.parentNode;
        var g = d;
        if (d === e) return Ma(b, c);
        if (!d) return - 1;
        if (!e) return 1;
        for (; g;) f.unshift(g),
        g = g.parentNode;
        for (g = e; g;) l.unshift(g),
        g = g.parentNode;
        d = f.length;
        e = l.length;
        for (g = 0; g < d && g < e; g++) if (f[g] !== l[g]) return Ma(f[g], l[g]);
        return g === d ? Ma(b, l[g], -1) : Ma(f[g], c, 1)
    }; [0, 0].sort(nb);
    Zb = !xa;
    F.uniqueSort = function(b) {
        var c, d = 1;
        xa = Zb;
        b.sort(nb);
        if (xa) for (; c = b[d]; d++) c === b[d - 1] && b.splice(d--, 1);
        return b
    };
    F.error = function(b) {
        throw Error("Syntax error, unrecognized expression: " + b);
    };
    lb = F.compile = function(b, c) {
        var d, e = [],
        f = [],
        l = ac[I][b];
        if (!l) {
            c || (c = Oa(b));
            for (d = c.length; d--;) l = jb(c[d]),
            l[I] ? e.push(l) : f.push(l);
            var g = 0 < e.length,
            n = 0 < f.length,
            r = function(b, c, d, j, u) {
                var l, y, m = [],
                B = 0,
                p = "0",
                x = b && [],
                q = null != u,
                v = Qa,
                A = b || n && L.find.TAG("*", u && c.parentNode || c),
                z = wa += null == v ? 1 : Math.E;
                for (q && (Qa = c !== X && c, fb = r.el); null != (u = A[p]); p++) {
                    if (n && u) {
                        for (l = 0; y = f[l]; l++) if (y(u, c, d)) {
                            j.push(u);
                            break
                        }
                        q && (wa = z, fb = ++r.el)
                    }
                    g && ((u = !y && u) && B--, b && x.push(u))
                }
                B += p;
                if (g && p !== B) {
                    for (l = 0; y = e[l]; l++) y(x, m, c, d);
                    if (b) {
                        if (0 < B) for (; p--;) ! x[p] && !m[p] && (m[p] = $c.call(j));
                        m = Pa(m)
                    }
                    oa.apply(j, m);
                    q && !b && 0 < m.length && 1 < B + e.length && F.uniqueSort(j)
                }
                return q && (wa = z, Qa = v),
                x
            };
            d = (r.el = 0, g ? Y(r) : r);
            l = ac(b, d)
        }
        return l
    };
    if (X.querySelectorAll) {
        var cc, hd = eb,
        id = /'|\\/g,
        jd = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
        Z = [":focus"],
        Sa = [":active", ":focus"],
        Ta = W.matchesSelector || W.mozMatchesSelector || W.webkitMatchesSelector || W.oMatchesSelector || W.msMatchesSelector;
        ca(function(b) {
            b.innerHTML = "<select><option selected=''></option></select>";
            b.querySelectorAll("[selected]").length || Z.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
            b.querySelectorAll(":checked").length || Z.push(":checked")
        });
        ca(function(b) {
            b.innerHTML = "<p test=''></p>";
            b.querySelectorAll("[test^='']").length && Z.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
            b.innerHTML = "<input type='hidden'/>";
            b.querySelectorAll(":enabled").length || Z.push(":enabled", ":disabled")
        });
        Z = RegExp(Z.join("|"));
        eb = function(b, c, d, e, f) {
            if (!e && !f && (!Z || !Z.test(b))) {
                var l, g, n = !0,
                r = I;
                g = c;
                l = 9 === c.nodeType && b;
                if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                    l = Oa(b); (n = c.getAttribute("id")) ? r = n.replace(id, "\\$&") : c.setAttribute("id", r);
                    r = "[id='" + r + "'] ";
                    for (g = l.length; g--;) l[g] = r + l[g].join("");
                    g = kb.test(b) && c.parentNode || c;
                    l = l.join(",")
                }
                if (l) try {
                    return oa.apply(d, pa.call(g.querySelectorAll(l), 0)),
                    d
                } catch(m) {} finally {
                    n || c.removeAttribute("id")
                }
            }
            return hd(b, c, d, e, f)
        };
        Ta && (ca(function(b) {
            cc = Ta.call(b, "div");
            try {
                Ta.call(b, "[test!='']:sizzle"),
                Sa.push("!=", pb)
            } catch(c) {}
        }), Sa = RegExp(Sa.join("|")), F.matchesSelector = function(b, c) {
            c = c.replace(jd, "='$1']");
            if (!Ka(b) && !Sa.test(c) && (!Z || !Z.test(c))) try {
                var d = Ta.call(b, c);
                if (d || cc || b.document && 11 !== b.document.nodeType) return d
            } catch(e) {}
            return 0 < F(c, null, null, [b]).length
        })
    }
    L.pseudos.nth = L.pseudos.eq;
    L.filters = Yb.prototype = L.pseudos;
    L.setFilters = new Yb;
    F.attr = e.attr;
    e.find = F;
    e.expr = F.selectors;
    e.expr[":"] = e.expr.pseudos;
    e.unique = F.uniqueSort;
    e.text = F.getText;
    e.isXMLDoc = F.isXML;
    e.contains = F.contains;
    var kd = /Until$/,
    ld = /^(?:parents|prev(?:Until|All))/,
    uc = /^.[^:#\[\.,]*$/,
    dc = e.expr.match.needsContext,
    md = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    e.fn.extend({
        find: function(b) {
            var c, d, f, l, g, n, r = this;
            if ("string" != typeof b) return e(b).filter(function() {
                c = 0;
                for (d = r.length; c < d; c++) if (e.contains(r[c], this)) return ! 0
            });
            n = this.pushStack("", "find", b);
            c = 0;
            for (d = this.length; c < d; c++) if (f = n.length, e.find(b, this[c], n), 0 < c) for (l = f; l < n.length; l++) for (g = 0; g < f; g++) if (n[g] === n[l]) {
                n.splice(l--, 1);
                break
            }
            return n
        },
        has: function(b) {
            var c, d = e(b, this),
            f = d.length;
            return this.filter(function() {
                for (c = 0; c < f; c++) if (e.contains(this, d[c])) return ! 0
            })
        },
        not: function(b) {
            return this.pushStack(p(this, b, !1), "not", b)
        },
        filter: function(b) {
            return this.pushStack(p(this, b, !0), "filter", b)
        },
        is: function(b) {
            return !! b && ("string" == typeof b ? dc.test(b) ? 0 <= e(b, this.context).index(this[0]) : 0 < e.filter(b, this).length: 0 < this.filter(b).length)
        },
        closest: function(b, c) {
            for (var d, f = 0,
            l = this.length,
            g = [], n = dc.test(b) || "string" != typeof b ? e(b, c || this.context) : 0; f < l; f++) for (d = this[f]; d && d.ownerDocument && d !== c && 11 !== d.nodeType;) {
                if (n ? -1 < n.index(d) : e.find.matchesSelector(d, b)) {
                    g.push(d);
                    break
                }
                d = d.parentNode
            }
            return g = 1 < g.length ? e.unique(g) : g,
            this.pushStack(g, "closest", b)
        },
        index: function(b) {
            return b ? "string" == typeof b ? e.inArray(this[0], e(b)) : e.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.prevAll().length: -1
        },
        add: function(b, c) {
            var d = "string" == typeof b ? e(b, c) : e.makeArray(b && b.nodeType ? [b] : b),
            f = e.merge(this.get(), d);
            return this.pushStack(q(d[0]) || q(f[0]) ? f: e.unique(f))
        },
        addBack: function(b) {
            return this.add(null == b ? this.prevObject: this.prevObject.filter(b))
        }
    });
    e.fn.andSelf = e.fn.addBack;
    e.each({
        parent: function(b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b: null
        },
        parents: function(b) {
            return e.dir(b, "parentNode")
        },
        parentsUntil: function(b, c, d) {
            return e.dir(b, "parentNode", d)
        },
        next: function(b) {
            return z(b, "nextSibling")
        },
        prev: function(b) {
            return z(b, "previousSibling")
        },
        nextAll: function(b) {
            return e.dir(b, "nextSibling")
        },
        prevAll: function(b) {
            return e.dir(b, "previousSibling")
        },
        nextUntil: function(b, c, d) {
            return e.dir(b, "nextSibling", d)
        },
        prevUntil: function(b, c, d) {
            return e.dir(b, "previousSibling", d)
        },
        siblings: function(b) {
            return e.sibling((b.parentNode || {}).firstChild, b)
        },
        children: function(b) {
            return e.sibling(b.firstChild)
        },
        contents: function(b) {
            return e.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document: e.merge([], b.childNodes)
        }
    },
    function(b, c) {
        e.fn[b] = function(d, f) {
            var l = e.map(this, c, d);
            return kd.test(b) || (f = d),
            f && "string" == typeof f && (l = e.filter(f, l)),
            l = 1 < this.length && !md[b] ? e.unique(l) : l,
            1 < this.length && ld.test(b) && (l = l.reverse()),
            this.pushStack(l, b, aa.call(arguments).join(","))
        }
    });
    e.extend({
        filter: function(b, c, d) {
            return d && (b = ":not(" + b + ")"),
            1 === c.length ? e.find.matchesSelector(c[0], b) ? [c[0]] : [] : e.find.matches(b, c)
        },
        dir: function(b, d, f) {
            var l = [];
            for (b = b[d]; b && 9 !== b.nodeType && (f === c || 1 !== b.nodeType || !e(b).is(f));) 1 === b.nodeType && l.push(b),
            b = b[d];
            return l
        },
        sibling: function(b, c) {
            for (var d = []; b; b = b.nextSibling) 1 === b.nodeType && b !== c && d.push(b);
            return d
        }
    });
    var wb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    nd = / jQuery\d+="(?:null|\d+)"/g,
    qb = /^\s+/,
    ec = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    fc = /<([\w:]+)/,
    od = /<tbody/i,
    pd = /<|&#?\w+;/,
    qd = /<(?:script|style|link)/i,
    rd = /<(?:script|object|embed|option|style)/i,
    rb = RegExp("<(?:" + wb + ")[\\s/>]", "i"),
    xb = /^(?:checkbox|radio)$/,
    gc = /checked\s*(?:[^=]|=\s*.checked.)/i,
    sd = /\/(java|ecma)script/i,
    td = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
    V = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    },
    hc = x(C),
    sb = hc.appendChild(C.createElement("div"));
    V.optgroup = V.option;
    V.tbody = V.tfoot = V.colgroup = V.caption = V.thead;
    V.th = V.td;
    e.support.htmlSerialize || (V._default = [1, "X<div>", "</div>"]);
    e.fn.extend({
        text: function(b) {
            return e.access(this,
            function(b) {
                return b === c ? e.text(this) : this.empty().append((this[0] && this[0].ownerDocument || C).createTextNode(b))
            },
            null, b, arguments.length)
        },
        wrapAll: function(b) {
            if (e.isFunction(b)) return this.each(function(c) {
                e(this).wrapAll(b.call(this, c))
            });
            if (this[0]) {
                var c = e(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]);
                c.map(function() {
                    for (var b = this; b.firstChild && 1 === b.firstChild.nodeType;) b = b.firstChild;
                    return b
                }).append(this)
            }
            return this
        },
        wrapInner: function(b) {
            return e.isFunction(b) ? this.each(function(c) {
                e(this).wrapInner(b.call(this, c))
            }) : this.each(function() {
                var c = e(this),
                d = c.contents();
                d.length ? d.wrapAll(b) : c.append(b)
            })
        },
        wrap: function(b) {
            var c = e.isFunction(b);
            return this.each(function(d) {
                e(this).wrapAll(c ? b.call(this, d) : b)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                e.nodeName(this, "body") || e(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0,
            function(b) { (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(b)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0,
            function(b) { (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(b, this.firstChild)
            })
        },
        before: function() {
            if (!q(this[0])) return this.domManip(arguments, !1,
            function(b) {
                this.parentNode.insertBefore(b, this)
            });
            if (arguments.length) {
                var b = e.clean(arguments);
                return this.pushStack(e.merge(b, this), "before", this.selector)
            }
        },
        after: function() {
            if (!q(this[0])) return this.domManip(arguments, !1,
            function(b) {
                this.parentNode.insertBefore(b, this.nextSibling)
            });
            if (arguments.length) {
                var b = e.clean(arguments);
                return this.pushStack(e.merge(this, b), "after", this.selector)
            }
        },
        remove: function(b, c) {
            for (var d, f = 0; null != (d = this[f]); f++) if (!b || e.filter(b, [d]).length) ! c && 1 === d.nodeType && (e.cleanData(d.getElementsByTagName("*")), e.cleanData([d])),
            d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function() {
            for (var b, c = 0; null != (b = this[c]); c++) for (1 === b.nodeType && e.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        },
        clone: function(b, c) {
            return b = null == b ? !1 : b,
            c = null == c ? b: c,
            this.map(function() {
                return e.clone(this, b, c)
            })
        },
        html: function(b) {
            return e.access(this,
            function(b) {
                var d = this[0] || {},
                f = 0,
                l = this.length;
                if (b === c) return 1 === d.nodeType ? d.innerHTML.replace(nd, "") : c;
                if ("string" == typeof b && !qd.test(b) && (e.support.htmlSerialize || !rb.test(b)) && (e.support.leadingWhitespace || !qb.test(b)) && !V[(fc.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = b.replace(ec, "<$1></$2>");
                    try {
                        for (; f < l; f++) d = this[f] || {},
                        1 === d.nodeType && (e.cleanData(d.getElementsByTagName("*")), d.innerHTML = b);
                        d = 0
                    } catch(u) {}
                }
                d && this.empty().append(b)
            },
            null, b, arguments.length)
        },
        replaceWith: function(b) {
            return q(this[0]) ? this.length ? this.pushStack(e(e.isFunction(b) ? b() : b), "replaceWith", b) : this: e.isFunction(b) ? this.each(function(c) {
                var d = e(this),
                f = d.html();
                d.replaceWith(b.call(this, c, f))
            }) : ("string" != typeof b && (b = e(b).detach()), this.each(function() {
                var c = this.nextSibling,
                d = this.parentNode;
                e(this).remove();
                c ? e(c).before(b) : e(d).append(b)
            }))
        },
        detach: function(b) {
            return this.remove(b, !0)
        },
        domManip: function(b, d, f) {
            b = [].concat.apply([], b);
            var l, g, n, s = 0,
            r = b[0],
            m = [],
            p = this.length;
            if (!e.support.checkClone && 1 < p && "string" == typeof r && gc.test(r)) return this.each(function() {
                e(this).domManip(b, d, f)
            });
            if (e.isFunction(r)) return this.each(function(l) {
                var g = e(this);
                b[0] = r.call(this, l, d ? g.html() : c);
                g.domManip(b, d, f)
            });
            if (this[0]) {
                l = e.buildFragment(b, this, m);
                n = l.fragment;
                g = n.firstChild;
                1 === n.childNodes.length && (n = g);
                if (g) {
                    d = d && e.nodeName(g, "tr");
                    for (l = l.cacheable || p - 1; s < p; s++) f.call(d && e.nodeName(this[s], "table") ? this[s].getElementsByTagName("tbody")[0] || this[s].appendChild(this[s].ownerDocument.createElement("tbody")) : this[s], s === l ? n: e.clone(n, !0, !0))
                }
                n = g = null;
                m.length && e.each(m,
                function(b, c) {
                    c.src ? e.ajax ? e.ajax({
                        url: c.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : e.error("no ajax") : e.globalEval((c.text || c.textContent || c.innerHTML || "").replace(td, ""));
                    c.parentNode && c.parentNode.removeChild(c)
                })
            }
            return this
        }
    });
    e.buildFragment = function(b, d, f) {
        var l, g, n, s = b[0];
        return d = d || C,
        d = !d.nodeType && d[0] || d,
        d = d.ownerDocument || d,
        1 === b.length && "string" == typeof s && 512 > s.length && d === C && "<" === s.charAt(0) && !rd.test(s) && (e.support.checkClone || !gc.test(s)) && (e.support.html5Clone || !rb.test(s)) && (g = !0, l = e.fragments[s], n = l !== c),
        l || (l = d.createDocumentFragment(), e.clean(b, d, l, f), g && (e.fragments[s] = n && l)),
        {
            fragment: l,
            cacheable: g
        }
    };
    e.fragments = {};
    e.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(b, c) {
        e.fn[b] = function(d) {
            var f, l = 0,
            g = [];
            d = e(d);
            var n = d.length;
            f = 1 === this.length && this[0].parentNode;
            if ((null == f || f && 11 === f.nodeType && 1 === f.childNodes.length) && 1 === n) return d[c](this[0]),
            this;
            for (; l < n; l++) f = (0 < l ? this.clone(!0) : this).get(),
            e(d[l])[c](f),
            g = g.concat(f);
            return this.pushStack(g, b, d.selector)
        }
    });
    e.extend({
        clone: function(b, c, d) {
            var f, g, r, s;
            e.support.html5Clone || e.isXMLDoc(b) || !rb.test("<" + b.nodeName + ">") ? s = b.cloneNode(!0) : (sb.innerHTML = b.outerHTML, sb.removeChild(s = sb.firstChild));
            if ((!e.support.noCloneEvent || !e.support.noCloneChecked) && (1 === b.nodeType || 11 === b.nodeType) && !e.isXMLDoc(b)) {
                l(b, s);
                f = n(b);
                g = n(s);
                for (r = 0; f[r]; ++r) g[r] && l(f[r], g[r])
            }
            if (c && (A(b, s), d)) {
                f = n(b);
                g = n(s);
                for (r = 0; f[r]; ++r) A(f[r], g[r])
            }
            return s
        },
        clean: function(b, c, d, f) {
            var l, g, n, m, p, q, v, A = c === C && hc,
            z = [];
            if (!c || "undefined" == typeof c.createDocumentFragment) c = C;
            for (l = 0; null != (n = b[l]); l++) if ("number" == typeof n && (n += ""), n) {
                if ("string" == typeof n) if (pd.test(n)) {
                    A = A || x(c);
                    q = c.createElement("div");
                    A.appendChild(q);
                    n = n.replace(ec, "<$1></$2>");
                    g = (fc.exec(n) || ["", ""])[1].toLowerCase();
                    m = V[g] || V._default;
                    p = m[0];
                    for (q.innerHTML = m[1] + n + m[2]; p--;) q = q.lastChild;
                    if (!e.support.tbody) {
                        p = od.test(n);
                        m = "table" === g && !p ? q.firstChild && q.firstChild.childNodes: "<table>" === m[1] && !p ? q.childNodes: [];
                        for (g = m.length - 1; 0 <= g; --g) e.nodeName(m[g], "tbody") && !m[g].childNodes.length && m[g].parentNode.removeChild(m[g])
                    } ! e.support.leadingWhitespace && qb.test(n) && q.insertBefore(c.createTextNode(qb.exec(n)[0]), q.firstChild);
                    n = q.childNodes;
                    q.parentNode.removeChild(q)
                } else n = c.createTextNode(n);
                n.nodeType ? z.push(n) : e.merge(z, n)
            }
            q && (n = q = A = null);
            if (!e.support.appendChecked) for (l = 0; null != (n = z[l]); l++) e.nodeName(n, "input") ? r(n) : "undefined" != typeof n.getElementsByTagName && e.grep(n.getElementsByTagName("input"), r);
            if (d) {
                b = function(b) {
                    if (!b.type || sd.test(b.type)) return f ? f.push(b.parentNode ? b.parentNode.removeChild(b) : b) : d.appendChild(b)
                };
                for (l = 0; null != (n = z[l]); l++) if (!e.nodeName(n, "script") || !b(n)) d.appendChild(n),
                "undefined" != typeof n.getElementsByTagName && (v = e.grep(e.merge([], n.getElementsByTagName("script")), b), z.splice.apply(z, [l + 1, 0].concat(v)), l += v.length)
            }
            return z
        },
        cleanData: function(b, c) {
            for (var d, f, l, g, n = 0,
            r = e.expando,
            m = e.cache,
            p = e.support.deleteExpando,
            q = e.event.special; null != (l = b[n]); n++) if (c || e.acceptData(l)) if (d = (f = l[r]) && m[f]) {
                if (d.events) for (g in d.events) q[g] ? e.event.remove(l, g) : e.removeEvent(l, g, d.handle);
                m[f] && (delete m[f], p ? delete l[r] : l.removeAttribute ? l.removeAttribute(r) : l[r] = null, e.deletedIds.push(f))
            }
        }
    });
    var Ua, da;
    e.uaMatch = function(b) {
        b = b.toLowerCase();
        b = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || 0 > b.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
        return {
            browser: b[1] || "",
            version: b[2] || "0"
        }
    };
    Ua = e.uaMatch(zc.userAgent);
    da = {};
    Ua.browser && (da[Ua.browser] = !0, da.version = Ua.version);
    da.chrome ? da.webkit = !0 : da.webkit && (da.safari = !0);
    e.browser = da;
    e.sub = function() {
        function b(c, d) {
            return new b.fn.init(c, d)
        }
        e.extend(!0, b, this);
        b.superclass = this;
        b.fn = b.prototype = this();
        b.fn.constructor = b;
        b.sub = this.sub;
        b.fn.init = function(d, f) {
            return f && f instanceof e && !(f instanceof b) && (f = b(f)),
            e.fn.init.call(this, d, f, c)
        };
        b.fn.init.prototype = b.fn;
        var c = b(C);
        return b
    };
    var Q, la, ma, tb = /alpha\([^)]*\)/i,
    ud = /opacity=([^)]*)/,
    vd = /^(top|right|bottom|left)$/,
    wd = /^(none|table(?!-c[ea]).+)/,
    ic = /^margin/,
    vc = RegExp("^(" + Ea + ")(.*)$", "i"),
    ya = RegExp("^(" + Ea + ")(?!px)[a-z%]+$", "i"),
    xd = RegExp("^([-+])=(" + Ea + ")", "i"),
    Ya = {},
    yd = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    jc = {
        letterSpacing: 0,
        fontWeight: 400
    },
    ea = ["Top", "Right", "Bottom", "Left"],
    yb = ["Webkit", "O", "Moz", "ms"],
    zd = e.fn.toggle;
    e.fn.extend({
        css: function(b, d) {
            return e.access(this,
            function(b, d, j) {
                return j !== c ? e.style(b, d, j) : e.css(b, d)
            },
            b, d, 1 < arguments.length)
        },
        show: function() {
            return G(this, !0)
        },
        hide: function() {
            return G(this)
        },
        toggle: function(b, c) {
            var d = "boolean" == typeof b;
            return e.isFunction(b) && e.isFunction(c) ? zd.apply(this, arguments) : this.each(function() { (d ? b: N(this)) ? e(this).show() : e(this).hide()
            })
        }
    });
    e.extend({
        cssHooks: {
            opacity: {
                get: function(b, c) {
                    if (c) {
                        var d = Q(b, "opacity");
                        return "" === d ? "1": d
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": e.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(b, d, f, l) {
            if (b && !(3 === b.nodeType || 8 === b.nodeType || !b.style)) {
                var g, n, r, m = e.camelCase(d),
                p = b.style;
                d = e.cssProps[m] || (e.cssProps[m] = v(p, m));
                r = e.cssHooks[d] || e.cssHooks[m];
                if (f === c) return r && "get" in r && (g = r.get(b, !1, l)) !== c ? g: p[d];
                n = typeof f;
                "string" === n && (g = xd.exec(f)) && (f = (g[1] + 1) * g[2] + parseFloat(e.css(b, d)), n = "number");
                if (! (null == f || "number" === n && isNaN(f))) if ("number" === n && !e.cssNumber[m] && (f += "px"), !r || !("set" in r) || (f = r.set(b, f, l)) !== c) try {
                    p[d] = f
                } catch(q) {}
            }
        },
        css: function(b, d, f, l) {
            var g, n, r, m = e.camelCase(d);
            return d = e.cssProps[m] || (e.cssProps[m] = v(b.style, m)),
            r = e.cssHooks[d] || e.cssHooks[m],
            r && "get" in r && (g = r.get(b, !0, l)),
            g === c && (g = Q(b, d)),
            "normal" === g && d in jc && (g = jc[d]),
            f || l !== c ? (n = parseFloat(g), f || e.isNumeric(n) ? n || 0 : g) : g
        },
        swap: function(b, c, d) {
            var e, f = {};
            for (e in c) f[e] = b.style[e],
            b.style[e] = c[e];
            d = d.call(b);
            for (e in c) b.style[e] = f[e];
            return d
        }
    });
    b.getComputedStyle ? Q = function(c, d) {
        var f, l, g, n, r = b.getComputedStyle(c, null),
        m = c.style;
        return r && (f = r[d], "" === f && !e.contains(c.ownerDocument, c) && (f = e.style(c, d)), ya.test(f) && ic.test(d) && (l = m.width, g = m.minWidth, n = m.maxWidth, m.minWidth = m.maxWidth = m.width = f, f = r.width, m.width = l, m.minWidth = g, m.maxWidth = n)),
        f
    }: C.documentElement.currentStyle && (Q = function(b, c) {
        var d, e, f = b.currentStyle && b.currentStyle[c],
        l = b.style;
        return null == f && l && l[c] && (f = l[c]),
        ya.test(f) && !vd.test(c) && (d = l.left, e = b.runtimeStyle && b.runtimeStyle.left, e && (b.runtimeStyle.left = b.currentStyle.left), l.left = "fontSize" === c ? "1em": f, f = l.pixelLeft + "px", l.left = d, e && (b.runtimeStyle.left = e)),
        "" === f ? "auto": f
    });
    e.each(["height", "width"],
    function(b, c) {
        e.cssHooks[c] = {
            get: function(b, d, f) {
                if (d) return 0 === b.offsetWidth && wd.test(Q(b, "display")) ? e.swap(b, yd,
                function() {
                    return H(b, c, f)
                }) : H(b, c, f)
            },
            set: function(b, d, f) {
                return E(b, d, f ? Xa(b, c, f, e.support.boxSizing && "border-box" === e.css(b, "boxSizing")) : 0)
            }
        }
    });
    e.support.opacity || (e.cssHooks.opacity = {
        get: function(b, c) {
            return ud.test((c && b.currentStyle ? b.currentStyle.filter: b.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "": c ? "1": ""
        },
        set: function(b, c) {
            var d = b.style,
            f = b.currentStyle,
            l = e.isNumeric(c) ? "alpha(opacity=" + 100 * c + ")": "",
            g = f && f.filter || d.filter || "";
            d.zoom = 1;
            if (! (1 <= c && "" === e.trim(g.replace(tb, "")) && d.removeAttribute && (d.removeAttribute("filter"), f && !f.filter))) d.filter = tb.test(g) ? g.replace(tb, l) : g + " " + l
        }
    });
    e(function() {
        e.support.reliableMarginRight || (e.cssHooks.marginRight = {
            get: function(b, c) {
                return e.swap(b, {
                    display: "inline-block"
                },
                function() {
                    if (c) return Q(b, "marginRight")
                })
            }
        }); ! e.support.pixelPosition && e.fn.position && e.each(["top", "left"],
        function(b, c) {
            e.cssHooks[c] = {
                get: function(b, d) {
                    if (d) {
                        var f = Q(b, c);
                        return ya.test(f) ? e(b).position()[c] + "px": f
                    }
                }
            }
        })
    });
    e.expr && e.expr.filters && (e.expr.filters.hidden = function(b) {
        return 0 === b.offsetWidth && 0 === b.offsetHeight || !e.support.reliableHiddenOffsets && "none" === (b.style && b.style.display || Q(b, "display"))
    },
    e.expr.filters.visible = function(b) {
        return ! e.expr.filters.hidden(b)
    });
    e.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(b, c) {
        e.cssHooks[b + c] = {
            expand: function(d) {
                var e = "string" == typeof d ? d.split(" ") : [d],
                f = {};
                for (d = 0; 4 > d; d++) f[b + ea[d] + c] = e[d] || e[d - 2] || e[0];
                return f
            }
        };
        ic.test(b) || (e.cssHooks[b + c].set = E)
    });
    var Ad = /%20/g,
    wc = /\[\]$/,
    kc = /\r?\n/g,
    Bd = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    Cd = /^(?:select|textarea)/i;
    e.fn.extend({
        serialize: function() {
            return e.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? e.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Cd.test(this.nodeName) || Bd.test(this.type))
            }).map(function(b, c) {
                var d = e(this).val();
                return null == d ? null: e.isArray(d) ? e.map(d,
                function(b) {
                    return {
                        name: c.name,
                        value: b.replace(kc, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: d.replace(kc, "\r\n")
                }
            }).get()
        }
    });
    e.param = function(b, d) {
        var f, l = [],
        g = function(b, c) {
            c = e.isFunction(c) ? c() : null == c ? "": c;
            l[l.length] = encodeURIComponent(b) + "=" + encodeURIComponent(c)
        };
        d === c && (d = e.ajaxSettings && e.ajaxSettings.traditional);
        if (e.isArray(b) || b.jquery && !e.isPlainObject(b)) e.each(b,
        function() {
            g(this.name, this.value)
        });
        else for (f in b) M(f, b[f], d, g);
        return l.join("&").replace(Ad, "+")
    };
    var qa, ka, Dd = /#.*$/,
    Ed = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
    Fd = /^(?:GET|HEAD)$/,
    Gd = /^\/\//,
    lc = /\?/,
    Hd = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    Id = /([?&])_=[^&]*/,
    mc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    nc = e.fn.load,
    Za = {},
    oc = {},
    pc = ["*/"] + ["*"];
    try {
        ka = yc.href
    } catch(Rd) {
        ka = C.createElement("a"),
        ka.href = "",
        ka = ka.href
    }
    qa = mc.exec(ka.toLowerCase()) || [];
    e.fn.load = function(b, d, f) {
        if ("string" != typeof b && nc) return nc.apply(this, arguments);
        if (!this.length) return this;
        var l, g, n, r = this,
        m = b.indexOf(" ");
        return 0 <= m && (l = b.slice(m, b.length), b = b.slice(0, m)),
        e.isFunction(d) ? (f = d, d = c) : d && "object" == typeof d && (g = "POST"),
        e.ajax({
            url: b,
            type: g,
            dataType: "html",
            data: d,
            complete: function(b, c) {
                f && r.each(f, n || [b.responseText, c, b])
            }
        }).done(function(b) {
            n = arguments;
            r.html(l ? e("<div>").append(b.replace(Hd, "")).find(l) : b)
        }),
        this
    };
    e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
    function(b, c) {
        e.fn[c] = function(b) {
            return this.on(c, b)
        }
    });
    e.each(["get", "post"],
    function(b, d) {
        e[d] = function(b, f, l, g) {
            return e.isFunction(f) && (g = g || l, l = f, f = c),
            e.ajax({
                type: d,
                url: b,
                data: f,
                success: l,
                dataType: g
            })
        }
    });
    e.extend({
        getScript: function(b, d) {
            return e.get(b, c, d, "script")
        },
        getJSON: function(b, c, d) {
            return e.get(b, c, d, "json")
        },
        ajaxSetup: function(b, c) {
            return c ? sa(b, e.ajaxSettings) : (c = b, b = e.ajaxSettings),
            sa(b, c),
            b
        },
        ajaxSettings: {
            url: ka,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(qa[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": pc
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": b.String,
                "text html": !0,
                "text json": e.parseJSON,
                "text xml": e.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: za(Za),
        ajaxTransport: za(oc),
        ajax: function(b, d) {
            function f(b, d, j, n) {
                var u, p, y, x, B, G = d;
                if (2 !== H) {
                    H = 2;
                    m && clearTimeout(m);
                    r = c;
                    g = n || "";
                    J.readyState = 0 < b ? 4 : 0;
                    if (j) {
                        x = v;
                        n = J;
                        var U, R, F, K, L = x.contents,
                        M = x.dataTypes,
                        P = x.responseFields;
                        for (R in P) R in j && (n[P[R]] = j[R]);
                        for (;
                        "*" === M[0];) M.shift(),
                        U === c && (U = x.mimeType || n.getResponseHeader("content-type"));
                        if (U) for (R in L) if (L[R] && L[R].test(U)) {
                            M.unshift(R);
                            break
                        }
                        if (M[0] in j) F = M[0];
                        else {
                            for (R in j) {
                                if (!M[0] || x.converters[R + " " + M[0]]) {
                                    F = R;
                                    break
                                }
                                K || (K = R)
                            }
                            F = F || K
                        }
                        x = j = F ? (F !== M[0] && M.unshift(F), j[F]) : void 0
                    }
                    if (200 <= b && 300 > b || 304 === b) if (v.ifModified && (B = J.getResponseHeader("Last-Modified"), B && (e.lastModified[l] = B), B = J.getResponseHeader("Etag"), B && (e.etag[l] = B)), 304 === b) G = "notmodified",
                    u = !0;
                    else {
                        var I;
                        a: {
                            u = v;
                            p = x;
                            var O, G = u.dataTypes.slice();
                            j = G[0];
                            U = {};
                            R = 0;
                            u.dataFilter && (p = u.dataFilter(p, u.dataType));
                            if (G[1]) for (I in u.converters) U[I.toLowerCase()] = u.converters[I];
                            for (; y = G[++R];) if ("*" !== y) {
                                if ("*" !== j && j !== y) {
                                    I = U[j + " " + y] || U["* " + y];
                                    if (!I) for (O in U) if (B = O.split(" "), B[1] === y && (I = U[j + " " + B[0]] || U["* " + B[0]])) { ! 0 === I ? I = U[O] : !0 !== U[O] && (y = B[0], G.splice(R--, 0, y));
                                        break
                                    }
                                    if (!0 !== I) if (I && u["throws"]) p = I(p);
                                    else try {
                                        p = I(p)
                                    } catch(Q) {
                                        I = {
                                            state: "parsererror",
                                            error: I ? Q: "No conversion from " + j + " to " + y
                                        };
                                        break a
                                    }
                                }
                                j = y
                            }
                            I = {
                                state: "success",
                                data: p
                            }
                        }
                        u = I;
                        G = u.state;
                        p = u.data;
                        y = u.error;
                        u = !y
                    } else if (y = G, !G || b) G = "error",
                    0 > b && (b = 0);
                    J.status = b;
                    J.statusText = (d || G) + "";
                    u ? N.resolveWith(A, [p, G, J]) : N.rejectWith(A, [J, G, y]);
                    J.statusCode(C);
                    C = c;
                    q && z.trigger("ajax" + (u ? "Success": "Error"), [J, v, u ? p: y]);
                    E.fireWith(A, [J, G]);
                    q && (z.trigger("ajaxComplete", [J, v]), --e.active || e.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof b && (d = b, b = c);
            d = d || {};
            var l, g, n, r, m, p, q, x, v = e.ajaxSetup({},
            d),
            A = v.context || v,
            z = A !== v && (A.nodeType || A instanceof e) ? e(A) : e.event,
            N = e.Deferred(),
            E = e.Callbacks("once memory"),
            C = v.statusCode || {},
            G = {},
            F = {},
            H = 0,
            K = "canceled",
            J = {
                readyState: 0,
                setRequestHeader: function(b, c) {
                    if (!H) {
                        var d = b.toLowerCase();
                        b = F[d] = F[d] || b;
                        G[b] = c
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return 2 === H ? g: null
                },
                getResponseHeader: function(b) {
                    var d;
                    if (2 === H) {
                        if (!n) for (n = {}; d = Ed.exec(g);) n[d[1].toLowerCase()] = d[2];
                        d = n[b.toLowerCase()]
                    }
                    return d === c ? null: d
                },
                overrideMimeType: function(b) {
                    return H || (v.mimeType = b),
                    this
                },
                abort: function(b) {
                    return b = b || K,
                    r && r.abort(b),
                    f(0, b),
                    this
                }
            };
            N.promise(J);
            J.success = J.done;
            J.error = J.fail;
            J.complete = E.add;
            J.statusCode = function(b) {
                if (b) {
                    var c;
                    if (2 > H) for (c in b) C[c] = [C[c], b[c]];
                    else c = b[J.status],
                    J.always(c)
                }
                return this
            };
            v.url = ((b || v.url) + "").replace(Dd, "").replace(Gd, qa[1] + "//");
            v.dataTypes = e.trim(v.dataType || "*").toLowerCase().split(fa);
            null == v.crossDomain && (p = mc.exec(v.url.toLowerCase()) || !1, v.crossDomain = p && p.join(":") + (p[3] ? "": "http:" === p[1] ? 80 : 443) !== qa.join(":") + (qa[3] ? "": "http:" === qa[1] ? 80 : 443));
            v.data && v.processData && "string" != typeof v.data && (v.data = e.param(v.data, v.traditional));
            na(Za, v, d, J);
            if (2 === H) return J;
            q = v.global;
            v.type = v.type.toUpperCase();
            v.hasContent = !Fd.test(v.type);
            q && 0 === e.active++&&e.event.trigger("ajaxStart");
            if (!v.hasContent && (v.data && (v.url += (lc.test(v.url) ? "&": "?") + v.data, delete v.data), l = v.url, !1 === v.cache)) {
                p = e.now();
                var L = v.url.replace(Id, "$1_=" + p);
                v.url = L + (L === v.url ? (lc.test(v.url) ? "&": "?") + "_=" + p: "")
            } (v.data && v.hasContent && !1 !== v.contentType || d.contentType) && J.setRequestHeader("Content-Type", v.contentType);
            v.ifModified && (l = l || v.url, e.lastModified[l] && J.setRequestHeader("If-Modified-Since", e.lastModified[l]), e.etag[l] && J.setRequestHeader("If-None-Match", e.etag[l]));
            J.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + pc + "; q=0.01": "") : v.accepts["*"]);
            for (x in v.headers) J.setRequestHeader(x, v.headers[x]);
            if (!v.beforeSend || !1 !== v.beforeSend.call(A, J, v) && 2 !== H) {
                K = "abort";
                for (x in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) J[x](v[x]);
                if (r = na(oc, v, d, J)) {
                    J.readyState = 1;
                    q && z.trigger("ajaxSend", [J, v]);
                    v.async && 0 < v.timeout && (m = setTimeout(function() {
                        J.abort("timeout")
                    },
                    v.timeout));
                    try {
                        H = 1,
                        r.send(G, f)
                    } catch(M) {
                        if (2 > H) f( - 1, M);
                        else throw M;
                    }
                } else f( - 1, "No Transport");
                return J
            }
            return J.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var qc = [],
    Jd = /\?/,
    Va = /(=)\?(?=&|$)|\?\?/,
    Kd = e.now();
    e.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = qc.pop() || e.expando + "_" + Kd++;
            return this[b] = !0,
            b
        }
    });
    e.ajaxPrefilter("json jsonp",
    function(d, j, f) {
        var l, g, n, r = d.data,
        m = d.url,
        p = !1 !== d.jsonp,
        v = p && Va.test(m),
        q = p && !v && "string" == typeof r && !(d.contentType || "").indexOf("application/x-www-form-urlencoded") && Va.test(r);
        if ("jsonp" === d.dataTypes[0] || v || q) return l = d.jsonpCallback = e.isFunction(d.jsonpCallback) ? d.jsonpCallback() : d.jsonpCallback,
        g = b[l],
        v ? d.url = m.replace(Va, "$1" + l) : q ? d.data = r.replace(Va, "$1" + l) : p && (d.url += (Jd.test(m) ? "&": "?") + d.jsonp + "=" + l),
        d.converters["script json"] = function() {
            return n || e.error(l + " was not called"),
            n[0]
        },
        d.dataTypes[0] = "json",
        b[l] = function() {
            n = arguments
        },
        f.always(function() {
            b[l] = g;
            d[l] && (d.jsonpCallback = j.jsonpCallback, qc.push(l));
            n && e.isFunction(g) && g(n[0]);
            n = g = c
        }),
        "script"
    });
    e.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(b) {
                return e.globalEval(b),
                b
            }
        }
    });
    e.ajaxPrefilter("script",
    function(b) {
        b.cache === c && (b.cache = !1);
        b.crossDomain && (b.type = "GET", b.global = !1)
    });
    e.ajaxTransport("script",
    function(b) {
        if (b.crossDomain) {
            var d, e = C.head || C.getElementsByTagName("head")[0] || C.documentElement;
            return {
                send: function(f, l) {
                    d = C.createElement("script");
                    d.async = "async";
                    b.scriptCharset && (d.charset = b.scriptCharset);
                    d.src = b.url;
                    d.onload = d.onreadystatechange = function(b, f) {
                        if (f || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null,
                        e && d.parentNode && e.removeChild(d),
                        d = c,
                        f || l(200, "success")
                    };
                    e.insertBefore(d, e.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var ra, ub = b.ActiveXObject ?
    function() {
        for (var b in ra) ra[b](0, 1)
    }: !1,
    Ld = 0;
    e.ajaxSettings.xhr = b.ActiveXObject ?
    function() {
        var c;
        if (! (c = !this.isLocal && zb())) a: {
            try {
                c = new b.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch(d) {}
            c = void 0
        }
        return c
    }: zb;
    var vb = e.ajaxSettings.xhr();
    e.extend(e.support, {
        ajax: !!vb,
        cors: !!vb && "withCredentials" in vb
    });
    e.support.ajax && e.ajaxTransport(function(d) {
        if (!d.crossDomain || e.support.cors) {
            var f;
            return {
                send: function(l, g) {
                    var n, r, m = d.xhr();
                    d.username ? m.open(d.type, d.url, d.async, d.username, d.password) : m.open(d.type, d.url, d.async);
                    if (d.xhrFields) for (r in d.xhrFields) m[r] = d.xhrFields[r];
                    d.mimeType && m.overrideMimeType && m.overrideMimeType(d.mimeType); ! d.crossDomain && !l["X-Requested-With"] && (l["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (r in l) m.setRequestHeader(r, l[r])
                    } catch(p) {}
                    m.send(d.hasContent && d.data || null);
                    f = function(b, l) {
                        var r, p, v, q, y;
                        try {
                            if (f && (l || 4 === m.readyState)) if (f = c, n && (m.onreadystatechange = e.noop, ub && delete ra[n]), l) 4 !== m.readyState && m.abort();
                            else {
                                r = m.status;
                                v = m.getAllResponseHeaders();
                                q = {}; (y = m.responseXML) && y.documentElement && (q.xml = y);
                                try {
                                    q.text = m.responseText
                                } catch(x) {}
                                try {
                                    p = m.statusText
                                } catch(A) {
                                    p = ""
                                } ! r && d.isLocal && !d.crossDomain ? r = q.text ? 200 : 404 : 1223 === r && (r = 204)
                            }
                        } catch(B) {
                            l || g( - 1, B)
                        }
                        q && g(r, p, q, v)
                    };
                    d.async ? 4 === m.readyState ? setTimeout(f, 0) : (n = ++Ld, ub && (ra || (ra = {},
                    e(b).unload(ub)), ra[n] = f), m.onreadystatechange = f) : f()
                },
                abort: function() {
                    f && f(0, 1)
                }
            }
        }
    });
    var Aa, Wa, Md = /^(?:toggle|show|hide)$/,
    Nd = RegExp("^(?:([-+])=|)(" + Ea + ")([a-z%]*)$", "i"),
    Od = /queueHooks$/,
    Ba = [function(b, c, d) {
        var f, l, g, n, r, m, p = this,
        v = b.style,
        q = {},
        x = [],
        A = b.nodeType && N(b);
        d.queue || (r = e._queueHooks(b, "fx"), null == r.unqueued && (r.unqueued = 0, m = r.empty.fire, r.empty.fire = function() {
            r.unqueued || m()
        }), r.unqueued++, p.always(function() {
            p.always(function() {
                r.unqueued--;
                e.queue(b, "fx").length || r.empty.fire()
            })
        }));
        1 === b.nodeType && ("height" in c || "width" in c) && (d.overflow = [v.overflow, v.overflowX, v.overflowY], "inline" === e.css(b, "display") && "none" === e.css(b, "float") && (!e.support.inlineBlockNeedsLayout || "inline" === P(b.nodeName) ? v.display = "inline-block": v.zoom = 1));
        d.overflow && (v.overflow = "hidden", e.support.shrinkWrapBlocks || p.done(function() {
            v.overflow = d.overflow[0];
            v.overflowX = d.overflow[1];
            v.overflowY = d.overflow[2]
        }));
        for (f in c) l = c[f],
        Md.exec(l) && (delete c[f], l !== (A ? "hide": "show") && x.push(f));
        if (l = x.length) {
            g = e._data(b, "fxshow") || e._data(b, "fxshow", {});
            A ? e(b).show() : p.done(function() {
                e(b).hide()
            });
            p.done(function() {
                var c;
                e.removeData(b, "fxshow", !0);
                for (c in q) e.style(b, c, q[c])
            });
            for (f = 0; f < l; f++) c = x[f],
            n = p.createTween(c, A ? g[c] : 0),
            q[c] = g[c] || e.style(b, c),
            c in g || (g[c] = n.start, A && (n.end = n.start, n.start = "width" === c || "height" === c ? 1 : 0))
        }
    }],
    ta = {
        "*": [function(b, c) {
            var d, f, l = this.createTween(b, c),
            g = Nd.exec(c),
            n = l.cur(),
            r = +n || 0,
            m = 1,
            p = 20;
            if (g) {
                d = +g[2];
                f = g[3] || (e.cssNumber[b] ? "": "px");
                if ("px" !== f && r) {
                    r = e.css(l.elem, b, !0) || d || 1;
                    do m = m || ".5",
                    r /= m,
                    e.style(l.elem, b, r + f);
                    while (m !== (m = l.cur() / n) && 1 !== m && --p)
                }
                l.unit = f;
                l.start = r;
                l.end = g[1] ? r + (g[1] + 1) * d: d
            }
            return l
        }]
    };
    e.Animation = e.extend(Bb, {
        tweener: function(b, c) {
            e.isFunction(b) ? (c = b, b = ["*"]) : b = b.split(" ");
            for (var d, f = 0,
            l = b.length; f < l; f++) d = b[f],
            ta[d] = ta[d] || [],
            ta[d].unshift(c)
        },
        prefilter: function(b, c) {
            c ? Ba.unshift(b) : Ba.push(b)
        }
    });
    e.Tween = S;
    S.prototype = {
        constructor: S,
        init: function(b, c, d, f, l, g) {
            this.elem = b;
            this.prop = d;
            this.easing = l || "swing";
            this.options = c;
            this.start = this.now = this.cur();
            this.end = f;
            this.unit = g || (e.cssNumber[d] ? "": "px")
        },
        cur: function() {
            var b = S.propHooks[this.prop];
            return b && b.get ? b.get(this) : S.propHooks._default.get(this)
        },
        run: function(b) {
            var c, d = S.propHooks[this.prop];
            return this.options.duration ? this.pos = c = e.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : this.pos = c = b,
            this.now = (this.end - this.start) * c + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            d && d.set ? d.set(this) : S.propHooks._default.set(this),
            this
        }
    };
    S.prototype.init.prototype = S.prototype;
    S.propHooks = {
        _default: {
            get: function(b) {
                var c;
                return null == b.elem[b.prop] || b.elem.style && null != b.elem.style[b.prop] ? (c = e.css(b.elem, b.prop, !1, ""), !c || "auto" === c ? 0 : c) : b.elem[b.prop]
            },
            set: function(b) {
                e.fx.step[b.prop] ? e.fx.step[b.prop](b) : b.elem.style && (null != b.elem.style[e.cssProps[b.prop]] || e.cssHooks[b.prop]) ? e.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now
            }
        }
    };
    S.propHooks.scrollTop = S.propHooks.scrollLeft = {
        set: function(b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    };
    e.each(["toggle", "show", "hide"],
    function(b, c) {
        var d = e.fn[c];
        e.fn[c] = function(f, l, g) {
            return null == f || "boolean" == typeof f || !b && e.isFunction(f) && e.isFunction(l) ? d.apply(this, arguments) : this.animate(Ca(c, !0), f, l, g)
        }
    });
    e.fn.extend({
        fadeTo: function(b, c, d, e) {
            return this.filter(N).css("opacity", 0).show().end().animate({
                opacity: c
            },
            b, d, e)
        },
        animate: function(b, c, d, f) {
            var l = e.isEmptyObject(b),
            g = e.speed(c, d, f);
            c = function() {
                var c = Bb(this, e.extend({},
                b), g);
                l && c.stop(!0)
            };
            return l || !1 === g.queue ? this.each(c) : this.queue(g.queue, c)
        },
        stop: function(b, d, f) {
            var l = function(b) {
                var c = b.stop;
                delete b.stop;
                c(f)
            };
            return "string" != typeof b && (f = d, d = b, b = c),
            d && !1 !== b && this.queue(b || "fx", []),
            this.each(function() {
                var c = !0,
                d = null != b && b + "queueHooks",
                j = e.timers,
                g = e._data(this);
                if (d) g[d] && g[d].stop && l(g[d]);
                else for (d in g) g[d] && g[d].stop && Od.test(d) && l(g[d]);
                for (d = j.length; d--;) j[d].elem === this && (null == b || j[d].queue === b) && (j[d].anim.stop(f), c = !1, j.splice(d, 1)); (c || !f) && e.dequeue(this, b)
            })
        }
    });
    e.each({
        slideDown: Ca("show"),
        slideUp: Ca("hide"),
        slideToggle: Ca("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(b, c) {
        e.fn[b] = function(b, d, e) {
            return this.animate(c, b, d, e)
        }
    });
    e.speed = function(b, c, d) {
        var f = b && "object" == typeof b ? e.extend({},
        b) : {
            complete: d || !d && c || e.isFunction(b) && b,
            duration: b,
            easing: d && c || c && !e.isFunction(c) && c
        };
        f.duration = e.fx.off ? 0 : "number" == typeof f.duration ? f.duration: f.duration in e.fx.speeds ? e.fx.speeds[f.duration] : e.fx.speeds._default;
        if (null == f.queue || !0 === f.queue) f.queue = "fx";
        return f.old = f.complete,
        f.complete = function() {
            e.isFunction(f.old) && f.old.call(this);
            f.queue && e.dequeue(this, f.queue)
        },
        f
    };
    e.easing = {
        linear: function(b) {
            return b
        },
        swing: function(b) {
            return 0.5 - Math.cos(b * Math.PI) / 2
        }
    };
    e.timers = [];
    e.fx = S.prototype.init;
    e.fx.tick = function() {
        for (var b, c = e.timers,
        d = 0; d < c.length; d++) b = c[d],
        !b() && c[d] === b && c.splice(d--, 1);
        c.length || e.fx.stop()
    };
    e.fx.timer = function(b) {
        b() && e.timers.push(b) && !Wa && (Wa = setInterval(e.fx.tick, e.fx.interval))
    };
    e.fx.interval = 13;
    e.fx.stop = function() {
        clearInterval(Wa);
        Wa = null
    };
    e.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    e.fx.step = {};
    e.expr && e.expr.filters && (e.expr.filters.animated = function(b) {
        return e.grep(e.timers,
        function(c) {
            return b === c.elem
        }).length
    });
    var rc = /^(?:body|html)$/i;
    e.fn.offset = function(b) {
        if (arguments.length) return b === c ? this: this.each(function(c) {
            e.offset.setOffset(this, b, c)
        });
        var d, f, l, g, n, r, m, p = {
            top: 0,
            left: 0
        },
        v = this[0],
        q = v && v.ownerDocument;
        if (q) return (f = q.body) === v ? e.offset.bodyOffset(v) : (d = q.documentElement, e.contains(d, v) ? ("undefined" != typeof v.getBoundingClientRect && (p = v.getBoundingClientRect()), l = Cb(q), g = d.clientTop || f.clientTop || 0, n = d.clientLeft || f.clientLeft || 0, r = l.pageYOffset || d.scrollTop, m = l.pageXOffset || d.scrollLeft, {
            top: p.top + r - g,
            left: p.left + m - n
        }) : p)
    };
    e.offset = {
        bodyOffset: function(b) {
            var c = b.offsetTop,
            d = b.offsetLeft;
            return e.support.doesNotIncludeMarginInBodyOffset && (c += parseFloat(e.css(b, "marginTop")) || 0, d += parseFloat(e.css(b, "marginLeft")) || 0),
            {
                top: c,
                left: d
            }
        },
        setOffset: function(b, c, d) {
            var f = e.css(b, "position");
            "static" === f && (b.style.position = "relative");
            var l = e(b),
            g = l.offset(),
            n = e.css(b, "top"),
            r = e.css(b, "left"),
            m = {},
            p = {},
            v,
            q; ("absolute" === f || "fixed" === f) && -1 < e.inArray("auto", [n, r]) ? (p = l.position(), v = p.top, q = p.left) : (v = parseFloat(n) || 0, q = parseFloat(r) || 0);
            e.isFunction(c) && (c = c.call(b, d, g));
            null != c.top && (m.top = c.top - g.top + v);
            null != c.left && (m.left = c.left - g.left + q);
            "using" in c ? c.using.call(b, m) : l.css(m)
        }
    };
    e.fn.extend({
        position: function() {
            if (this[0]) {
                var b = this[0],
                c = this.offsetParent(),
                d = this.offset(),
                f = rc.test(c[0].nodeName) ? {
                    top: 0,
                    left: 0
                }: c.offset();
                return d.top -= parseFloat(e.css(b, "marginTop")) || 0,
                d.left -= parseFloat(e.css(b, "marginLeft")) || 0,
                f.top += parseFloat(e.css(c[0], "borderTopWidth")) || 0,
                f.left += parseFloat(e.css(c[0], "borderLeftWidth")) || 0,
                {
                    top: d.top - f.top,
                    left: d.left - f.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b = this.offsetParent || C.body; b && !rc.test(b.nodeName) && "static" === e.css(b, "position");) b = b.offsetParent;
                return b || C.body
            })
        }
    });
    e.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(b, d) {
        var f = /Y/.test(d);
        e.fn[b] = function(l) {
            return e.access(this,
            function(b, l, g) {
                var n = Cb(b);
                if (g === c) return n ? d in n ? n[d] : n.document.documentElement[l] : b[l];
                n ? n.scrollTo(f ? e(n).scrollLeft() : g, f ? g: e(n).scrollTop()) : b[l] = g
            },
            b, l, arguments.length, null)
        }
    });
    e.each({
        Height: "height",
        Width: "width"
    },
    function(b, d) {
        e.each({
            padding: "inner" + b,
            content: d,
            "": "outer" + b
        },
        function(f, l) {
            e.fn[l] = function(l, g) {
                var n = arguments.length && (f || "boolean" != typeof l),
                r = f || (!0 === l || !0 === g ? "margin": "border");
                return e.access(this,
                function(d, f, l) {
                    var j;
                    return e.isWindow(d) ? d.document.documentElement["client" + b] : 9 === d.nodeType ? (j = d.documentElement, Math.max(d.body["scroll" + b], j["scroll" + b], d.body["offset" + b], j["offset" + b], j["client" + b])) : l === c ? e.css(d, f, l, r) : e.style(d, f, l, r)
                },
                d, n ? l: c, n, null)
            }
        })
    });
    b.jQuery = b.$ = e;
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [],
    function() {
        return e
    })
})(window);
var portraitMode = !0,
mobilePortraitWidth = 480,
mobilePortraitHeight = 640,
mobileLandscapeWidth = 640,
mobileLandscapeHeight = 480,
mobileWidth = portraitMode ? mobilePortraitWidth: mobileLandscapeWidth,
mobileHeight = portraitMode ? mobilePortraitHeight: mobileLandscapeHeight,
desktopWidth = 480,
desktopHeight = 640,
w,
h,
multiplier,
destW,
destH,
dynamicClickableEntityDivs = {},
coreDivsToResize = ["game", "play", "orientate"],
advancedDivsToResize = {
   
};
function adjustLayers(b) {
    for (i = 0; i < coreDivsToResize.length; i++) ig.ua.mobile ? ($("#" + coreDivsToResize[i]).width(w), $("#" + coreDivsToResize[i]).height(h)) : ($("#" + coreDivsToResize[i]).width(destW), $("#" + coreDivsToResize[i]).height(destH), $("#" + coreDivsToResize[i]).css("left", b ? 0 : w / 2 - destW / 2));
    for (key in advancedDivsToResize) try {
        $("#" + key).width(w),
        $("#" + key).height(h),
        $("#" + key + "-Box").css("left", (w - advancedDivsToResize[key]["box-width"]) / 2),
        $("#" + key + "-Box").css("top", (h - advancedDivsToResize[key]["box-height"]) / 2)
    } catch(c) {
        console.log(c)
    }
    $("#ajaxbar").width(w);
    $("#ajaxbar").height(h)
}
function sizeHandler() {
    $("#game") && (w = window.innerWidth, h = window.innerHeight, ig.ua.mobile ? (multiplier = Math.min(h / mobileHeight, w / mobileWidth), destW = mobileWidth * multiplier, destH = mobileHeight * multiplier) : (multiplier = Math.min(h / desktopHeight, w / desktopWidth), destW = desktopWidth * multiplier, destH = desktopHeight * multiplier), widthRatio = window.innerWidth / mobileWidth, heightRatio = window.innerHeight / mobileHeight, adjustLayers(), window.scrollTo(0, 1))
}
function orientationHandler() {
    console.log("changing orientation ...");
    ig.ua.mobile && ((portraitMode ? window.innerHeight < window.innerWidth: window.innerHeight > window.innerWidth) ? ($("#orientate").show(), $("#game").hide()) : ($("#orientate").hide(), $("#game").show()));
    sizeHandler()
}
function fixSamsungHandler() {
    ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && (!(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart",
    function(b) {
        b.preventDefault();
        return ! 1
    },
    !1), document.addEventListener("touchmove",
    function(b) {
        b.preventDefault();
        return ! 1
    },
    !1), document.addEventListener("touchend",
    function(b) {
        b.preventDefault();
        return ! 1
    },
    !1))
}
window.addEventListener("resize",
function() {
    orientationHandler()
},
!1);
window.addEventListener("orientationchange",
function() {
    orientationHandler()
},
!1);
"true" === getQueryVariable("webview") ? ($(window).focus(function() {
    ig.ua.mobile && ig.game.resumeGame();
    ig.game && ig.game.unmute()
}), $(window).blur(function() {
    ig.game && ig.game.mute()
})) : (window.onfocus = function() {
    ig.ua.mobile && ig.game.resumeGame();
    ig.game && ig.game.unmute()
},
window.onblur = function() {
    ig.game && ig.game.mute()
});
document.ontouchmove = function() {
    window.scrollTo(0, 1)
};
function getInternetExplorerVersion() {
    var b = -1;
    "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (b = parseFloat(RegExp.$1));
    return b
}
var ie = getInternetExplorerVersion();
function getQueryVariable(b) {
    for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
        var f = c[d].split("=");
        if (decodeURIComponent(f[0]) == b) return decodeURIComponent(f[1])
    }
}
this.jukebox = {};
jukebox.Player = function(b, c) {
    this.id = ++jukebox.__jukeboxId;
    this.origin = c || null;
    this.settings = {};
    for (var d in this.defaults) this.settings[d] = this.defaults[d];
    if ("[object Object]" === Object.prototype.toString.call(b)) for (var f in b) this.settings[f] = b[f];
    "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
    this.resource = this.isPlaying = null;
    this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) : this.settings.resources[0] || null;
    if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
    this.__init();
    return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
    defaults: {
        resources: [],
        autoplay: !1,
        spritemap: {},
        flashMediaElement: "./swf/FlashMediaElement.as",
        timeout: 1E3
    },
    __addToManager: function() { ! 0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
    },
    __init: function() {
        var b = this,
        c = this.settings,
        d = {},
        f;
        jukebox.Manager && void 0 !== jukebox.Manager.features && (d = jukebox.Manager.features);
        if (!0 === d.html5audio) {
            this.context = new Audio;
            this.context.src = this.resource;
            if (null === this.origin) {
                var g = function(c) {
                    b.__addToManager(c)
                };
                this.context.addEventListener("canplaythrough", g, !0);
                window.setTimeout(function() {
                    b.context.removeEventListener("canplaythrough", g, !0);
                    g("timeout")
                },
                c.timeout)
            }
            this.context.autobuffer = !0;
            this.context.preload = !0;
            for (f in this.HTML5API) this[f] = this.HTML5API[f];
            1 < d.channels ? !0 === c.autoplay ? this.context.autoplay = !0 : void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay) : 1 === d.channels && void 0 !== c.spritemap[c.autoplay] && (this.backgroundMusic = c.spritemap[c.autoplay], this.backgroundMusic.started = Date.now ? Date.now() : +new Date, this.play(c.autoplay));
            1 == d.channels && !0 !== c.canPlayBackground && (window.addEventListener("pagehide",
            function() {
                null !== b.isPlaying && (b.pause(), b.__wasAutoPaused = !0)
            }), window.addEventListener("pageshow",
            function() {
                b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused)
            }))
        } else if (!0 === d.flashaudio) {
            for (f in this.FLASHAPI) this[f] = this.FLASHAPI[f];
            d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + c.autoplay, "file=" + window.encodeURIComponent(this.resource)];
            this.__initFlashContext(d); ! 0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay)
        } else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    },
    __initFlashContext: function(b) {
        var c, d = this.settings.flashMediaElement,
        f, g = {
            flashvars: b.join("&"),
            quality: "high",
            bgcolor: "#000000",
            wmode: "transparent",
            allowscriptaccess: "always",
            allowfullscreen: "true"
        };
        if (navigator.userAgent.match(/MSIE/)) {
            c = document.createElement("div");
            document.getElementsByTagName("body")[0].appendChild(c);
            var m = document.createElement("object");
            m.id = "jukebox-flashstream-" + this.id;
            m.setAttribute("type", "application/x-shockwave-flash");
            m.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
            m.setAttribute("width", "0");
            m.setAttribute("height", "0");
            g.movie = d + "?x=" + (Date.now ? Date.now() : +new Date);
            g.flashvars = b.join("&amp;");
            for (f in g) b = document.createElement("param"),
            b.setAttribute("name", f),
            b.setAttribute("value", g[f]),
            m.appendChild(b);
            c.outerHTML = m.outerHTML;
            this.context = document.getElementById("jukebox-flashstream-" + this.id)
        } else {
            c = document.createElement("embed");
            c.id = "jukebox-flashstream-" + this.id;
            c.setAttribute("type", "application/x-shockwave-flash");
            c.setAttribute("width", "100");
            c.setAttribute("height", "100");
            g.play = !1;
            g.loop = !1;
            g.src = d + "?x=" + (Date.now ? Date.now() : +new Date);
            for (f in g) c.setAttribute(f, g[f]);
            document.getElementsByTagName("body")[0].appendChild(c);
            this.context = c
        }
    },
    backgroundHackForiOS: function() {
        if (void 0 !== this.backgroundMusic) {
            var b = Date.now ? Date.now() : +new Date;
            void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started = b, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (b - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
        }
    },
    play: function(b, c) {
        if (null !== this.isPlaying && !0 !== c) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(b, this.id);
        else {
            var d = this.settings.spritemap,
            f;
            if (void 0 !== d[b]) f = d[b].start;
            else if ("number" === typeof b) {
                f = b;
                for (var g in d) if (f >= d[g].start && f <= d[g].end) {
                    b = g;
                    break
                }
            }
            void 0 !== f && "[object Object]" === Object.prototype.toString.call(d[b]) && (this.isPlaying = this.settings.spritemap[b], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(f))
        }
    },
    stop: function() {
        this.__lastPosition = 0;
        this.isPlaying = null;
        this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
        return ! 0
    },
    pause: function() {
        this.isPlaying = null;
        this.__lastPosition = this.getCurrentTime();
        this.context.pause();
        return this.__lastPosition
    },
    resume: function(b) {
        b = "number" === typeof b ? b: this.__lastPosition;
        if (null !== b) return this.play(b),
        this.__lastPosition = null,
        !0;
        this.context.play();
        return ! 1
    },
    HTML5API: {
        getVolume: function() {
            return this.context.volume || 1
        },
        setVolume: function(b) {
            this.context.volume = b;
            return 1E-4 > Math.abs(this.context.volume - b) ? !0 : !1
        },
        getCurrentTime: function() {
            return this.context.currentTime || 0
        },
        setCurrentTime: function(b) {
            try {
                return this.context.currentTime = b,
                !0
            } catch(c) {
                return ! 1
            }
        }
    },
    FLASHAPI: {
        getVolume: function() {
            return this.context && "function" === typeof this.context.getVolume ? this.context.getVolume() : 1
        },
        setVolume: function(b) {
            return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(b), !0) : !1
        },
        getCurrentTime: function() {
            return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
        },
        setCurrentTime: function(b) {
            return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(b) : !1
        }
    }
};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(b) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var c in this.defaults) this.settings[c] = this.defaults[c];
    if ("[object Object]" === Object.prototype.toString.call(b)) for (var d in b) this.settings[d] = b[d];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() {
        jukebox.Manager.loop()
    },
    20) : !0
};
jukebox.Manager.prototype = {
    defaults: {
        useFlash: !1,
        useGameLoop: !1
    },
    __detectFeatures: function() {
        var b = window.Audio && new Audio;
        if (b && b.canPlayType && !1 === this.settings.useFlash) {
            for (var c = [{
                e: "3gp",
                m: ["audio/3gpp", "audio/amr"]
            },
            {
                e: "aac",
                m: ["audio/aac", "audio/aacp"]
            },
            {
                e: "amr",
                m: ["audio/amr", "audio/3gpp"]
            },
            {
                e: "caf",
                m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
            },
            {
                e: "m4a",
                m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
            },
            {
                e: "mp3",
                m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
            },
            {
                e: "mpga",
                m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
            },
            {
                e: "mp4",
                m: ["audio/mp4", "video/mp4"]
            },
            {
                e: "ogg",
                m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
            },
            {
                e: "wav",
                m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
            },
            {
                e: "webm",
                m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
            }], d, f, g = 0, m = c.length; g < m; g++) if (f = c[g].e, c[g].m.length && "object" === typeof c[g].m) for (var q = 0,
            z = c[g].m.length; q < z; q++) if (d = c[g].m[q], "" !== b.canPlayType(d)) {
                this.codecs[f] = d;
                break
            } else this.codecs[f] || (this.codecs[f] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            b.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject) try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"),
            this.features.flashaudio = !0
        } catch(p) {} ! 0 === this.settings.useFlash && (this.features.flashaudio = !0); ! 0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr", this.features.volume = !0, this.features.channels = 1)
    },
    __getPlayerById: function(b) {
        return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null
    },
    __getClone: function(b, c) {
        for (var d in this.__clones) {
            var f = this.__clones[d];
            if (null === f.isPlaying && f.origin === b) return f
        }
        if ("[object Object]" === Object.prototype.toString.call(c)) {
            d = {};
            for (var g in c) d[g] = c[g];
            d.autoplay = !1;
            g = new jukebox.Player(d, b);
            g.isClone = !0;
            g.wasReady = !1;
            return this.__clones[g.id] = g
        }
        return null
    },
    loop: function() {
        if (0 !== this.__playersLength) if (this.__queue.length && this.__playersLength < this.features.channels) {
            var b = this.__queue[0],
            c = this.__getPlayerById(b.origin);
            if (null !== c) {
                var d = this.__getClone(b.origin, c.settings);
                null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()), this.add(d), d.play(b.pointer, !0))
            }
            this.__queue.splice(0, 1)
        } else for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0], c = this.__getPlayerById(b.origin), null !== c && c.play(b.pointer, !0), this.__queue.splice(0, 1)), this.__players) b = this.__players[d],
        c = b.getCurrentTime() || 0,
        b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS()
    },
    getPlayableResource: function(b) {
        "[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
        for (var c = 0,
        d = b.length; c < d; c++) {
            var f = b[c],
            g = f.match(/\.([^\.]*)$/)[1];
            if (g && this.codecs[g]) return f
        }
        return null
    },
    add: function(b) {
        return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++, this.__players[b.id] = b, !0) : !1
    },
    remove: function(b) {
        return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--, delete this.__players[b.id], !0) : !1
    },
    addToQueue: function(b, c) {
        return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({
            pointer: b,
            origin: c
        }), !0) : !1
    }
};
var MarketJS = {}; (function() {
    function b(b, g, m, q) {
        try {
            var z = window.XDomainRequest ? new XDomainRequest: new XMLHttpRequest,
            p;
            switch (b) {
            case "single-metric-write":
                p = c + "/metric/write/" + d + "/" + g + "/" + m;
                break;
            case "single-metric-read":
                p = c + "/metric/read/single/" + d + "/" + g;
                break;
            case "multi-metric-write":
                p = c + "/metric/write";
                break;
            case "multi-metric-read":
                p = c + "/metric/read/multi/" + d + "?" + g;
                break;
            case "leaderboard-read":
                p = c + "/leaderboard/read/" + d + "?" + g;
                break;
            case "leaderboard-write":
                break;
            default:
                console.log("no mode found")
            }
            z.onerror = function() {
                console.log(z.responseText)
            };
            z.onload = function() {
                var b = JSON.parse(z.responseText);
                q ? (console.log("passing to callback ..."), q(b)) : console.log(b)
            };
           // window.XDomainRequest ? z.open("GET", p) : z.open("GET", p, !0);
          //  z.send()
        } catch(x) {
            console.log(x)
        }
    }
    var c = (9 < ie ? "http://": "https://") + "marketjs-gamecenter.appspot.com",
    d = "";
    MarketJS.Initialize = function(b) {
        d = b;
        MarketJS.SingleMetric.Write("InitializeGame", "1")
    };
    MarketJS.SingleMetric = {
        Write: function(c, d) {
            b("single-metric-write", c, d)
        },
        Read: function(c) {
            b("single-metric-read", c)
        }
    };
    MarketJS.MultiMetric = {
        Write: function(b) {
            var g = {};
            g.data = JSON.stringify(b);
            g.game_key = d;
            try {
                $.post(c + "/metric/write", g,
                function(b) {
                    console.log("Response: " + b)
                })
            } catch(m) {
                console.log(m)
            }
        },
        Read: function(c, d, m) {
            var q = "";
            for (i = 0; i < c.length; i++) q += "metric_name=",
            q += c[i],
            i != c.length - 1 && (q += "&");
            q += m ? "&rank_ascending=yes": "&rank_ascending=no";
            console.log(q);
            b("multi-metric-read", q, 0, d)
        }
    };
    MarketJS.Player = {};
    MarketJS.Player.Read = {
        Leaderboard: function(b, g, m) {
            b = c + "/read/player/game/leaderboard/" + b + "/" + g + "/" + d;
            g = {};
            try {
                $.get(b, g, m, "json")
            } catch(q) {
                console.log(q)
            }
        }
    };
    MarketJS.Login = {
        Basic: function(b, g) {
            var m = {};
            m.game_key = d;
            m.login_method = "basic";
            for (var q in b) m[q] = b[q];
            console.log("login payload:", m);
            try {
                $.post(c + "/login", m, g)
            } catch(z) {
                console.log(z)
            }
        }
    };
    MarketJS.Leaderboard = {
        Write: function(b, g, m, q) {
            var z = {};
            z.game_key = d;
            z.player_key = b;
            z.metric_name = g;
            z.metric_value = m;
            z.cumulative = q ? "true": "false";
            try {
                $.post(c + "/write/leaderboard", z,
                function(b) {
                    console.log("Response: " + b)
                })
            } catch(p) {
                console.log(p)
            }
        },
        Read: function(c, d, m, q) {
            c = "metric_name=" + c + (d ? "&rank_ascending=yes": "&rank_ascending=no");
            c += "&metric_count=";
            c += m;
            b("leaderboard-read", c, 0, q)
        }
    };
    MarketJS.Platform = {
        Read: function() {
            var b = /iPhone/i.test(navigator.userAgent),
            c = /iPad/i.test(navigator.userAgent),
            d = /android/i.test(navigator.userAgent),
            q = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            return b ? "iPhone": c ? "iPad": d ? "Android": q ? "WebView": "Web"
        }
    }
})();
function localJsonpCallback(b) {
    b.Error ? console.log(b.Message) : console.log(b)
}
this.JSON || (this.JSON = {}); (function() {
    function b(b) {
        return 10 > b ? "0" + b: b
    }
    function c(b) {
        g.lastIndex = 0;
        return g.test(b) ? '"' + b.replace(g,
        function(b) {
            var c = z[b];
            return "string" === typeof c ? c: "\\u" + ("0000" + b.charCodeAt(0).toString(16)).slice( - 4)
        }) + '"': '"' + b + '"'
    }
    function d(b, f) {
        var l, g, r, v, z = m,
        G, E = f[b];
        E && "object" === typeof E && "function" === typeof E.toJSON && (E = E.toJSON(b));
        "function" === typeof p && (E = p.call(f, b, E));
        switch (typeof E) {
        case "string":
            return c(E);
        case "number":
            return isFinite(E) ? String(E) : "null";
        case "boolean":
        case "null":
            return String(E);
        case "object":
            if (!E) return "null";
            m += q;
            G = [];
            if ("[object Array]" === Object.prototype.toString.apply(E)) {
                v = E.length;
                for (l = 0; l < v; l += 1) G[l] = d(l, E) || "null";
                r = 0 === G.length ? "[]": m ? "[\n" + m + G.join(",\n" + m) + "\n" + z + "]": "[" + G.join(",") + "]";
                m = z;
                return r
            }
            if (p && "object" === typeof p) {
                v = p.length;
                for (l = 0; l < v; l += 1) g = p[l],
                "string" === typeof g && (r = d(g, E)) && G.push(c(g) + (m ? ": ": ":") + r)
            } else for (g in E) Object.hasOwnProperty.call(E, g) && (r = d(g, E)) && G.push(c(g) + (m ? ": ": ":") + r);
            r = 0 === G.length ? "{}": m ? "{\n" + m + G.join(",\n" + m) + "\n" + z + "}": "{" + G.join(",") + "}";
            m = z;
            return r
        }
    }
    "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + b(this.getUTCMonth() + 1) + "-" + b(this.getUTCDate()) + "T" + b(this.getUTCHours()) + ":" + b(this.getUTCMinutes()) + ":" + b(this.getUTCSeconds()) + "Z": null
    },
    String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
        return this.valueOf()
    });
    var f = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    g = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    m, q, z = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    },
    p;
    "function" !== typeof JSON.stringify && (JSON.stringify = function(b, c, f) {
        var g;
        q = m = "";
        if ("number" === typeof f) for (g = 0; g < f; g += 1) q += " ";
        else "string" === typeof f && (q = f);
        if ((p = c) && "function" !== typeof c && ("object" !== typeof c || "number" !== typeof c.length)) throw Error("JSON.stringify");
        return d("", {
            "": b
        })
    });
    "function" !== typeof JSON.parse && (JSON.parse = function(b, c) {
        function d(b, f) {
            var g, n, m = b[f];
            if (m && "object" === typeof m) for (g in m) Object.hasOwnProperty.call(m, g) && (n = d(m, g), void 0 !== n ? m[g] = n: delete m[g]);
            return c.call(b, f, m)
        }
        var g;
        b = String(b);
        f.lastIndex = 0;
        f.test(b) && (b = b.replace(f,
        function(b) {
            return "\\u" + ("0000" + b.charCodeAt(0).toString(16)).slice( - 4)
        }));
        if (/^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return g = eval("(" + b + ")"),
        "function" === typeof c ? d({
            "": g
        },
        "") : g;
        throw new SyntaxError("JSON.parse");
    })
})(); (function() {
    var b = {},
    c = null,
    d = !0,
    f = !1;
    if ("undefined" !== typeof AudioContext) c = new AudioContext;
    else if ("undefined" !== typeof webkitAudioContext) c = new webkitAudioContext;
    else if ("undefined" !== typeof Audio) {
        d = !1;
        try {
            new Audio
        } catch(g) {
            f = !0
        }
    } else d = !1,
    f = !0;
    if (d) {
        var m = "undefined" === typeof c.createGain ? c.createGainNode() : c.createGain();
        m.gain.value = 1;
        m.connect(c.destination)
    }
    var q = function() {
        this._volume = 1;
        this._muted = !1;
        this.usingWebAudio = d;
        this.noAudio = f;
        this._howls = []
    };
    q.prototype = {
        volume: function(b) {
            b = parseFloat(b);
            if (0 <= b && 1 >= b) {
                this._volume = b;
                d && (m.gain.value = b);
                for (var c in this._howls) if (this._howls.hasOwnProperty(c) && !1 === this._howls[c]._webAudio) for (b = 0; b < this._howls[c]._audioNode.length; b++) this._howls[c]._audioNode[b].volume = this._howls[c]._volume * this._volume;
                return this
            }
            return d ? m.gain.value: this._volume
        },
        mute: function() {
            this._setMuted(!0);
            return this
        },
        unmute: function() {
            this._setMuted(!1);
            return this
        },
        _setMuted: function(b) {
            this._muted = b;
            d && (m.gain.value = b ? 0 : this._volume);
            for (var c in this._howls) if (this._howls.hasOwnProperty(c) && !1 === this._howls[c]._webAudio) for (var f = 0; f < this._howls[c]._audioNode.length; f++) this._howls[c]._audioNode[f].muted = b
        }
    };
    var z = new q,
    q = null;
    if (!f) var q = new Audio,
    p = {
        mp3: !!q.canPlayType("audio/mpeg;").replace(/^no$/, ""),
        opus: !!q.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
        ogg: !!q.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
        wav: !!q.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
        m4a: !!(q.canPlayType("audio/x-m4a;") || q.canPlayType("audio/aac;")).replace(/^no$/, ""),
        mp4: !!(q.canPlayType("audio/x-mp4;") || q.canPlayType("audio/aac;")).replace(/^no$/, ""),
        weba: !!q.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
    };
    var x = function(b) {
        this._autoplay = b.autoplay || !1;
        this._buffer = b.buffer || !1;
        this._duration = b.duration || 0;
        this._format = b.format || null;
        this._loop = b.loop || !1;
        this._loaded = !1;
        this._sprite = b.sprite || {};
        this._src = b.src || "";
        this._pos3d = b.pos3d || [0, 0, -0.5];
        this._volume = void 0 !== b.volume ? b.volume: 1;
        this._urls = b.urls || [];
        this._rate = b.rate || 1;
        this._onload = [b.onload ||
        function() {}];
        this._onloaderror = [b.onloaderror ||
        function() {}];
        this._onend = [b.onend ||
        function() {}];
        this._onpause = [b.onpause ||
        function() {}];
        this._onplay = [b.onplay ||
        function() {}];
        this._onendTimer = [];
        this._webAudio = d && !this._buffer;
        this._audioNode = [];
        this._webAudio && this._setupAudioNode();
        z._howls.push(this);
        this.load()
    };
    x.prototype = {
        load: function() {
            var d = this,
            g = null;
            if (!f) {
                for (var r = 0; r < d._urls.length; r++) {
                    var m, q;
                    if (d._format) m = d._format;
                    else if (q = d._urls[r].toLowerCase().split("?")[0], m = (m = q.match(/.+\.([^?]+)(\?|$)/)) && 2 <= m.length ? m: q.match(/data\:audio\/([^?]+);/)) m = m[1];
                    else {
                        d.on("loaderror");
                        return
                    }
                    if (p[m]) {
                        g = d._urls[r];
                        break
                    }
                }
                if (g) {
                    d._src = g;
                    if (d._webAudio) {
                        var x = g;
                        if (x in b) d._duration = b[x].duration,
                        A(d);
                        else {
                            var E = new XMLHttpRequest;
                            E.open("GET", x, !0);
                            E.responseType = "arraybuffer";
                            E.onload = function() {
                                c.decodeAudioData(E.response,
                                function(c) {
                                    c && (b[x] = c, A(d, c))
                                },
                                function() {
                                    d.on("loaderror")
                                })
                            };
                            E.onerror = function() {
                                d._webAudio && (d._buffer = !0, d._webAudio = !1, d._audioNode = [], delete d._gainNode, d.load())
                            };
                            try {
                                E.send()
                            } catch(Xa) {
                                E.onerror()
                            }
                        }
                    } else {
                        var H = new Audio;
                        d._audioNode.push(H);
                        H.src = g;
                        H._pos = 0;
                        H.preload = "auto";
                        H.volume = z._muted ? 0 : d._volume * z.volume();
                        b[g] = d;
                        var P = function() {
                            d._duration = Math.ceil(10 * H.duration) / 10;
                            0 === Object.getOwnPropertyNames(d._sprite).length && (d._sprite = {
                                _default: [0, 1E3 * d._duration]
                            });
                            d._loaded || (d._loaded = !0, d.on("load"));
                            d._autoplay && d.play();
                            H.removeEventListener("canplaythrough", P, !1)
                        };
                        H.addEventListener("canplaythrough", P, !1);
                        H.load()
                    }
                    return d
                }
            }
            d.on("loaderror")
        },
        urls: function(b) {
            return b ? (this.stop(), this._urls = "string" === typeof b ? [b] : b, this._loaded = !1, this.load(), this) : this._urls
        },
        play: function(d, f) {
            var g = this;
            "function" === typeof d && (f = d);
            if (!d || "function" === typeof d) d = "_default";
            if (!g._loaded) return g.on("load",
            function() {
                g.play(d, f)
            }),
            g;
            if (!g._sprite[d]) return "function" === typeof f && f(),
            g;
            g._inactiveNode(function(m) {
                m._sprite = d;
                var p = 0 < m._pos ? m._pos: g._sprite[d][0] / 1E3,
                q = g._sprite[d][1] / 1E3 - m._pos,
                x = !(!g._loop && !g._sprite[d][2]),
                A = "string" === typeof f ? f: Math.round(Date.now() * Math.random()) + "",
                H,
                P = {
                    id: A,
                    sprite: d,
                    loop: x
                };
                H = setTimeout(function() { ! g._webAudio && x && g.stop(P.id, P.timer).play(d, P.id);
                    g._webAudio && !x && (g._nodeById(P.id).paused = !0, g._nodeById(P.id)._pos = 0); ! g._webAudio && !x && g.stop(P.id, P.timer);
                    g.on("end", A)
                },
                1E3 * q);
                g._onendTimer.push(H);
                P.timer = g._onendTimer[g._onendTimer.length - 1];
                if (g._webAudio) {
                    H = g._sprite[d][0] / 1E3;
                    var M = g._sprite[d][1] / 1E3;
                    m.id = A;
                    m.paused = !1;
                    H = [x, H, M];
                    M = g._nodeById(A);
                    M.bufferSource = c.createBufferSource();
                    M.bufferSource.buffer = b[g._src];
                    M.bufferSource.connect(M.panner);
                    M.bufferSource.loop = H[0];
                    H[0] && (M.bufferSource.loopStart = H[1], M.bufferSource.loopEnd = H[1] + H[2]);
                    M.bufferSource.playbackRate.value = g._rate;
                    g._playStart = c.currentTime;
                    m.gain.value = g._volume;
                    "undefined" === typeof m.bufferSource.start ? m.bufferSource.noteGrainOn(0, p, q) : m.bufferSource.start(0, p, q)
                } else if (4 === m.readyState) m.id = A,
                m.currentTime = p,
                m.muted = z._muted,
                m.volume = g._volume * z.volume(),
                setTimeout(function() {
                    m.play()
                },
                0);
                else {
                    g._clearEndTimer(H);
                    var za = d,
                    na = f,
                    sa = function() {
                        g.play(za, na);
                        m.removeEventListener("canplaythrough", sa, !1)
                    };
                    m.addEventListener("canplaythrough", sa, !1);
                    return g
                }
                g.on("play");
                "function" === typeof f && f(A);
                return g
            });
            return g
        },
        pause: function(b, c) {
            var d = this;
            if (!d._loaded) return d.on("play",
            function() {
                d.pause(b)
            }),
            d;
            d._clearEndTimer(c || 0);
            var f = b ? d._nodeById(b) : d._activeNode();
            if (f) if (f._pos = d.pos(null, b), d._webAudio) {
                if (!f.bufferSource || f.paused) return d;
                f.paused = !0;
                "undefined" === typeof f.bufferSource.stop ? f.bufferSource.noteOff(0) : f.bufferSource.stop(0)
            } else f.pause();
            d.on("pause");
            return d
        },
        stop: function(b, c) {
            var d = this;
            if (!d._loaded) return d.on("play",
            function() {
                d.stop(b)
            }),
            d;
            d._clearEndTimer(c || 0);
            var f = b ? d._nodeById(b) : d._activeNode();
            if (f) if (f._pos = 0, d._webAudio) {
                if (!f.bufferSource || f.paused) return d;
                f.paused = !0;
                "undefined" === typeof f.bufferSource.stop ? f.bufferSource.noteOff(0) : f.bufferSource.stop(0)
            } else f.pause(),
            f.currentTime = 0;
            return d
        },
        mute: function(b) {
            var c = this;
            if (!c._loaded) return c.on("play",
            function() {
                c.mute(b)
            }),
            c;
            var d = b ? c._nodeById(b) : c._activeNode();
            d && (c._webAudio ? d.gain.value = 0 : d.volume = 0);
            return c
        },
        unmute: function(b) {
            var c = this;
            if (!c._loaded) return c.on("play",
            function() {
                c.unmute(b)
            }),
            c;
            var d = b ? c._nodeById(b) : c._activeNode();
            d && (c._webAudio ? d.gain.value = c._volume: d.volume = c._volume);
            return c
        },
        volume: function(b, c) {
            var d = this;
            b = parseFloat(b);
            if (0 <= b && 1 >= b) {
                d._volume = b;
                if (!d._loaded) return d.on("play",
                function() {
                    d.volume(b, c)
                }),
                d;
                var f = c ? d._nodeById(c) : d._activeNode();
                f && (d._webAudio ? f.gain.value = b: f.volume = b * z.volume());
                return d
            }
            return d._volume
        },
        loop: function(b) {
            return "boolean" === typeof b ? (this._loop = b, this) : this._loop
        },
        sprite: function(b) {
            return "object" === typeof b ? (this._sprite = b, this) : this._sprite
        },
        pos: function(b, d) {
            var f = this;
            if (!f._loaded) return f.on("load",
            function() {
                f.pos(b)
            }),
            "number" === typeof b ? f: f._pos || 0;
            b = parseFloat(b);
            var g = d ? f._nodeById(d) : f._activeNode();
            if (g) return 0 <= b ? (f.pause(d), g._pos = b, f.play(g._sprite, d), f) : f._webAudio ? g._pos + (c.currentTime - f._playStart) : g.currentTime;
            if (0 <= b) return f;
            for (g = 0; g < f._audioNode.length; g++) if (f._audioNode[g].paused && 4 === f._audioNode[g].readyState) return f._webAudio ? f._audioNode[g]._pos: f._audioNode[g].currentTime
        },
        pos3d: function(b, c, d, f) {
            var g = this;
            c = "undefined" === typeof c || !c ? 0 : c;
            d = "undefined" === typeof d || !d ? -0.5 : d;
            if (!g._loaded) return g.on("play",
            function() {
                g.pos3d(b, c, d, f)
            }),
            g;
            if (0 <= b || 0 > b) {
                if (g._webAudio) {
                    var m = f ? g._nodeById(f) : g._activeNode();
                    m && (g._pos3d = [b, c, d], m.panner.setPosition(b, c, d))
                }
            } else return g._pos3d;
            return g
        },
        fade: function(b, c, d, f, g) {
            var m = this,
            p = Math.abs(b - c),
            q = b > c ? "down": "up",
            p = p / 0.01,
            x = d / p;
            if (!m._loaded) return m.on("load",
            function() {
                m.fade(b, c, d, f, g)
            }),
            m;
            m.volume(b, g);
            for (var A = 1; A <= p; A++)(function() {
                var b = Math.round(1E3 * (m._volume + ("up" === q ? 0.01 : -0.01) * A)) / 1E3;
                setTimeout(function() {
                    m.volume(b, g);
                    b === c && f && f()
                },
                x * A)
            })()
        },
        fadeIn: function(b, c, d) {
            return this.volume(0).play().fade(0, b, c, d)
        },
        fadeOut: function(b, c, d, f) {
            var g = this;
            return g.fade(g._volume, b, c,
            function() {
                d && d();
                g.pause(f);
                g.on("end")
            },
            f)
        },
        _nodeById: function(b) {
            for (var c = this._audioNode[0], d = 0; d < this._audioNode.length; d++) if (this._audioNode[d].id === b) {
                c = this._audioNode[d];
                break
            }
            return c
        },
        _activeNode: function() {
            for (var b = null,
            c = 0; c < this._audioNode.length; c++) if (!this._audioNode[c].paused) {
                b = this._audioNode[c];
                break
            }
            this._drainPool();
            return b
        },
        _inactiveNode: function(b) {
            for (var c = null,
            d = 0; d < this._audioNode.length; d++) if (this._audioNode[d].paused && 4 === this._audioNode[d].readyState) {
                b(this._audioNode[d]);
                c = !0;
                break
            }
            this._drainPool();
            if (!c) {
                var f;
                this._webAudio ? (f = this._setupAudioNode(), b(f)) : (this.load(), f = this._audioNode[this._audioNode.length - 1], f.addEventListener("loadedmetadata",
                function() {
                    b(f)
                }))
            }
        },
        _drainPool: function() {
            var b = 0,
            c;
            for (c = 0; c < this._audioNode.length; c++) this._audioNode[c].paused && b++;
            for (c = this._audioNode.length - 1; 0 <= c && !(5 >= b); c--) this._audioNode[c].paused && (this._webAudio && this._audioNode[c].disconnect(0), b--, this._audioNode.splice(c, 1))
        },
        _clearEndTimer: function(b) {
            b = this._onendTimer.indexOf(b);
            b = 0 <= b ? b: 0;
            this._onendTimer[b] && (clearTimeout(this._onendTimer[b]), this._onendTimer.splice(b, 1))
        },
        _setupAudioNode: function() {
            var b = this._audioNode,
            d = this._audioNode.length;
            b[d] = "undefined" === typeof c.createGain ? c.createGainNode() : c.createGain();
            b[d].gain.value = this._volume;
            b[d].paused = !0;
            b[d]._pos = 0;
            b[d].readyState = 4;
            b[d].connect(m);
            b[d].panner = c.createPanner();
            b[d].panner.setPosition(this._pos3d[0], this._pos3d[1], this._pos3d[2]);
            b[d].panner.connect(b[d]);
            return b[d]
        },
        on: function(b, c) {
            var d = this["_on" + b];
            if ("function" === typeof c) d.push(c);
            else for (var f = 0; f < d.length; f++) c ? d[f].call(this, c) : d[f].call(this);
            return this
        },
        off: function(b, c) {
            for (var d = this["_on" + b], f = c.toString(), g = 0; g < d.length; g++) if (f === d[g].toString()) {
                d.splice(g, 1);
                break
            }
            return this
        },
        unload: function() {
            for (var c = this._audioNode,
            d = 0; d < this._audioNode.length; d++) c[d].paused || this.stop(c[d].id),
            this._webAudio ? c[d].disconnect(0) : c[d].src = "";
            c = z._howls.indexOf(this);
            null !== c && 0 <= c && z._howls.splice(c, 1);
            delete b[this._src]
        }
    };
    if (d) var A = function(b, c) {
        b._duration = c ? c.duration: b._duration;
        0 === Object.getOwnPropertyNames(b._sprite).length && (b._sprite = {
            _default: [0, 1E3 * b._duration]
        });
        b._loaded || (b._loaded = !0, b.on("load"));
        b._autoplay && b.play()
    };
    "function" === typeof define && define.amd && define(function() {
        return {
            Howler: z,
            Howl: x
        }
    });
    "undefined" !== typeof exports && (exports.Howler = z, exports.Howl = x);
    window.Howler = z;
    window.Howl = x
})(); (function(b) {
    Number.prototype.map = function(b, c, d, f) {
        return d + (f - d) * ((this - b) / (c - b))
    };
    Number.prototype.limit = function(b, c) {
        return Math.min(c, Math.max(b, this))
    };
    Number.prototype.round = function(b) {
        b = Math.pow(10, b || 0);
        return Math.round(this * b) / b
    };
    Number.prototype.floor = function() {
        return Math.floor(this)
    };
    Number.prototype.ceil = function() {
        return Math.ceil(this)
    };
    Number.prototype.toInt = function() {
        return this | 0
    };
    Number.prototype.toRad = function() {
        return this / 180 * Math.PI
    };
    Number.prototype.toDeg = function() {
        return 180 * this / Math.PI
    };
    Array.prototype.erase = function(b) {
        for (var c = this.length; c--;) this[c] === b && this.splice(c, 1);
        return this
    };
    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)]
    };
    Function.prototype.bind = Function.prototype.bind ||
    function(b) {
        var c = this;
        return function() {
            var d = Array.prototype.slice.call(arguments);
            return c.apply(b || null, d)
        }
    };
    b.ig = {
        game: null,
        debug: null,
        version: "1.20",
        global: b,
        modules: {},
        resources: [],
        ready: !1,
        baked: !1,
        nocache: "",
        ua: {},
        prefix: b.ImpactPrefix || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,
        $: function(b) {
            return "#" == b.charAt(0) ? document.getElementById(b.substr(1)) : document.getElementsByTagName(b)
        },
        $new: function(b) {
            return document.createElement(b)
        },
        copy: function(b) {
            if (!b || "object" != typeof b || b instanceof HTMLElement || b instanceof ig.Class) return b;
            if (b instanceof Array) for (var c = [], d = 0, f = b.length; d < f; d++) c[d] = ig.copy(b[d]);
            else for (d in c = {},
            b) c[d] = ig.copy(b[d]);
            return c
        },
        merge: function(b, c) {
            for (var d in c) {
                var f = c[d];
                if ("object" != typeof f || f instanceof HTMLElement || f instanceof ig.Class) b[d] = f;
                else {
                    if (!b[d] || "object" != typeof b[d]) b[d] = f instanceof Array ? [] : {};
                    ig.merge(b[d], f)
                }
            }
            return b
        },
        ksort: function(b) {
            if (!b || "object" != typeof b) return [];
            var c = [],
            d = [],
            f;
            for (f in b) c.push(f);
            c.sort();
            for (f = 0; f < c.length; f++) d.push(b[c[f]]);
            return d
        },
        module: function(b) {
            if (ig._current) throw "Module '" + ig._current.name + "' defines nothing";
            if (ig.modules[b] && ig.modules[b].body) throw "Module '" + b + "' is already defined";
            ig._current = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig.modules[b] = ig._current;
            ig._loadQueue.push(ig._current);
            return ig
        },
        requires: function() {
            ig._current.requires = Array.prototype.slice.call(arguments);
            return ig
        },
        defines: function(b) {
            ig._current.body = b;
            ig._current = null;
            ig._initDOMReady()
        },
        addResource: function(b) {
            ig.resources.push(b)
        },
        setNocache: function(b) {
            ig.nocache = b ? "?" + Date.now() : ""
        },
        log: function() {},
        assert: function() {},
        show: function() {},
        mark: function() {},
        _loadScript: function(b, c) {
            ig.modules[b] = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig._waitForOnload++;
            var d = ig.prefix + ig.lib + b.replace(/\./g, "/") + ".js" + ig.nocache,
            f = ig.$new("script");
            f.type = "text/javascript";
            f.src = d;
            f.onload = function() {
                ig._waitForOnload--;
                ig._execModules()
            };
            f.onerror = function() {
                throw "Failed to load module " + b + " at " + d + " required from " + c;
            };
            ig.$("head")[0].appendChild(f)
        },
        _execModules: function() {
            for (var b = !1,
            c = 0; c < ig._loadQueue.length; c++) {
                for (var d = ig._loadQueue[c], f = !0, g = 0; g < d.requires.length; g++) {
                    var m = d.requires[g];
                    ig.modules[m] ? ig.modules[m].loaded || (f = !1) : (f = !1, ig._loadScript(m, d.name))
                }
                f && d.body && (ig._loadQueue.splice(c, 1), d.loaded = !0, d.body(), b = !0, c--)
            }
            if (b) ig._execModules();
            else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                b = [];
                for (c = 0; c < ig._loadQueue.length; c++) {
                    f = [];
                    m = ig._loadQueue[c].requires;
                    for (g = 0; g < m.length; g++) d = ig.modules[m[g]],
                    (!d || !d.loaded) && f.push(m[g]);
                    b.push(ig._loadQueue[c].name + " (requires: " + f.join(", ") + ")")
                }
                throw "Unresolved (circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules:\n" + b.join("\n");
            }
        },
        _DOMReady: function() {
            if (!ig.modules["dom.ready"].loaded) {
                if (!document.body) return setTimeout(ig._DOMReady, 13);
                ig.modules["dom.ready"].loaded = !0;
                ig._waitForOnload--;
                ig._execModules()
            }
            return 0
        },
        _boot: function() {
            document.location.href.match(/\?nocache/) && ig.setNocache(!0);
            ig.ua.pixelRatio = b.devicePixelRatio || 1;
            ig.ua.viewport = {
                width: b.innerWidth,
                height: b.innerHeight
            };
            ig.ua.screen = {
                width: b.screen.availWidth * ig.ua.pixelRatio,
                height: b.screen.availHeight * ig.ua.pixelRatio
            };
            ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
            ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
            ig.ua.iPad = /iPad/i.test(navigator.userAgent);
            ig.ua.android = /android/i.test(navigator.userAgent);
            ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
            ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
            ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
            ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
            ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6
        },
        _initDOMReady: function() {
            ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = {
                requires: [],
                loaded: !1,
                body: null
            },
            ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), b.addEventListener("load", ig._DOMReady, !1)))
        }
    };
    for (var c = ["ms", "moz", "webkit", "o"], d = 0; d < c.length && !b.requestAnimationFrame; d++) b.requestAnimationFrame = b[c[d] + "RequestAnimationFrame"];
    if (b.requestAnimationFrame) {
        var f = 1,
        g = {};
        b.ig.setAnimation = function(c, d) {
            var m = f++;
            g[m] = !0;
            var l = function() {
                g[m] && (b.requestAnimationFrame(l, d), c())
            };
            b.requestAnimationFrame(l, d);
            return m
        };
        b.ig.clearAnimation = function(b) {
            delete g[b]
        }
    } else b.ig.setAnimation = function(c) {
        return b.setInterval(c, 1E3 / 60)
    },
    b.ig.clearAnimation = function(c) {
        b.clearInterval(c)
    };
    var m = !1,
    q = /xyz/.test(function() {
        xyz
    }) ? /\bparent\b/: /.*/;
    b.ig.Class = function() {};
    var z = function(b) {
        var c = this.prototype,
        d = {},
        f;
        for (f in b)"function" == typeof b[f] && "function" == typeof c[f] && q.test(b[f]) ? (d[f] = c[f], c[f] = function(b, c) {
            return function() {
                var f = this.parent;
                this.parent = d[b];
                var g = c.apply(this, arguments);
                this.parent = f;
                return g
            }
        } (f, b[f])) : c[f] = b[f]
    };
    b.ig.Class.extend = function(c) {
        function d() {
            if (!m) {
                if (this.staticInstantiate) {
                    var b = this.staticInstantiate.apply(this, arguments);
                    if (b) return b
                }
                for (var c in this)"object" == typeof this[c] && (this[c] = ig.copy(this[c]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var f = this.prototype;
        m = !0;
        var g = new this;
        m = !1;
        for (var n in c) g[n] = "function" == typeof c[n] && "function" == typeof f[n] && q.test(c[n]) ?
        function(b, c) {
            return function() {
                var d = this.parent;
                this.parent = f[b];
                var g = c.apply(this, arguments);
                this.parent = d;
                return g
            }
        } (n, c[n]) : c[n];
        d.prototype = g;
        d.constructor = d;
        d.extend = b.ig.Class.extend;
        d.inject = z;
        return d
    }
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function() {
    ig.Image = ig.Class.extend({
        data: null,
        width: 0,
        height: 0,
        loaded: !1,
        failed: !1,
        loadCallback: null,
        path: "",
        staticInstantiate: function(b) {
            return ig.Image.cache[b] || null
        },
        init: function(b) {
            this.path = b;
            this.load()
        },
        load: function(b) {
            this.loaded ? b && b(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = b || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this), ig.Image.cache[this.path] = this)
        },
        reload: function() {
            this.loaded = !1;
            this.data = new Image;
            this.data.onload = this.onload.bind(this);
            this.data.src = this.path + "?" + Date.now()
        },
        onload: function() {
            this.width = this.data.width;
            this.height = this.data.height;
            this.loaded = !0;
            1 != ig.system.scale && this.resize(ig.system.scale);
            this.loadCallback && this.loadCallback(this.path, !0)
        },
        onerror: function() {
            this.failed = !0;
            this.loadCallback && this.loadCallback(this.path, !1)
        },
        resize: function(b) {
            var c = this.width * b,
            d = this.height * b,
            f = ig.$new("canvas");
            f.width = this.width;
            f.height = this.height;
            f = f.getContext("2d");
            f.drawImage(this.data, 0, 0, this.width, this.height, 0, 0, this.width, this.height);
            var f = f.getImageData(0, 0, this.width, this.height),
            g = ig.$new("canvas");
            g.width = c;
            g.height = d;
            for (var m = g.getContext("2d"), q = m.getImageData(0, 0, c, d), z = 0; z < d; z++) for (var p = 0; p < c; p++) {
                var x = 4 * (Math.floor(z / b) * this.width + Math.floor(p / b)),
                A = 4 * (z * c + p);
                q.data[A] = f.data[x];
                q.data[A + 1] = f.data[x + 1];
                q.data[A + 2] = f.data[x + 2];
                q.data[A + 3] = f.data[x + 3]
            }
            m.putImageData(q, 0, 0);
            this.data = g
        },
        draw: function(b, c, d, f, g, m) {
            if (this.loaded) {
                var q = ig.system.scale;
                g = (g ? g: this.width) * q;
                m = (m ? m: this.height) * q;
                ig.system.context.drawImage(this.data, d ? d * q: 0, f ? f * q: 0, g, m, ig.system.getDrawPos(b), ig.system.getDrawPos(c), g, m);
                ig.Image.drawCount++
            }
        },
        drawTile: function(b, c, d, f, g, m, q) {
            g = g ? g: f;
            if (this.loaded && !(f > this.width || g > this.height)) {
                var z = ig.system.scale,
                p = Math.floor(f * z),
                x = Math.floor(g * z),
                A = m ? -1 : 1,
                l = q ? -1 : 1;
                if (m || q) ig.system.context.save(),
                ig.system.context.scale(A, l);
                ig.system.context.drawImage(this.data, Math.floor(d * f) % this.width * z, Math.floor(d * f / this.width) * g * z, p, x, ig.system.getDrawPos(b) * A - (m ? p: 0), ig.system.getDrawPos(c) * l - (q ? x: 0), p, x); (m || q) && ig.system.context.restore();
                ig.Image.drawCount++
            }
        }
    });
    ig.Image.drawCount = 0;
    ig.Image.cache = {};
    ig.Image.reloadCache = function() {
        for (var b in ig.Image.cache) ig.Image.cache[b].reload()
    }
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function() {
    ig.Font = ig.Image.extend({
        widthMap: [],
        indices: [],
        firstChar: 32,
        alpha: 1,
        letterSpacing: 1,
        lineSpacing: 0,
        onload: function(b) {
            this._loadMetrics(this.data);
            this.parent(b)
        },
        widthForString: function(b) {
            if ( - 1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var c = 0,
                d = 0; d < b.length; d++) c = Math.max(c, this._widthForLine(b[d]));
                return c
            }
            return this._widthForLine(b)
        },
        _widthForLine: function(b) {
            for (var c = 0,
            d = 0; d < b.length; d++) c += this.widthMap[b.charCodeAt(d) - this.firstChar] + this.letterSpacing;
            return c
        },
        heightForString: function(b) {
            return b.split("\n").length * (this.height + this.lineSpacing)
        },
        draw: function(b, c, d, f) {
            "string" != typeof b && (b = b.toString());
            if ( - 1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var g = this.height + this.lineSpacing,
                m = 0; m < b.length; m++) this.draw(b[m], c, d + m * g, f)
            } else {
                if (f == ig.Font.ALIGN.RIGHT || f == ig.Font.ALIGN.CENTER) m = this._widthForLine(b),
                c -= f == ig.Font.ALIGN.CENTER ? m / 2 : m;
                1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
                for (m = 0; m < b.length; m++) f = b.charCodeAt(m),
                c += this._drawChar(f - this.firstChar, c, d);
                1 !== this.alpha && (ig.system.context.globalAlpha = 1);
                ig.Image.drawCount += b.length
            }
        },
        _drawChar: function(b, c, d) {
            if (!this.loaded || 0 > b || b >= this.indices.length) return 0;
            var f = ig.system.scale,
            g = this.widthMap[b] * f,
            m = (this.height - 2) * f;
            ig.system.context.drawImage(this.data, this.indices[b] * f, 0, g, m, ig.system.getDrawPos(c), ig.system.getDrawPos(d), g, m);
            return this.widthMap[b] + this.letterSpacing
        },
        _loadMetrics: function(b) {
            this.height = b.height - 1;
            this.widthMap = [];
            this.indices = [];
            var c = ig.$new("canvas");
            c.width = b.width;
            c.height = b.height;
            c = c.getContext("2d");
            c.drawImage(b, 0, 0);
            for (var c = c.getImageData(0, b.height - 1, b.width, 1), d = 0, f = 0, g = 0; g < b.width; g++) {
                var m = 4 * g + 3;
                0 != c.data[m] ? f++:0 == c.data[m] && f && (this.widthMap.push(f), this.indices.push(g - f), d++, f = 0)
            }
            this.widthMap.push(f);
            this.indices.push(g - f)
        }
    });
    ig.Font.ALIGN = {
        LEFT: 0,
        RIGHT: 1,
        CENTER: 2
    }
});
ig.baked = !0;
ig.module("impact.sound").defines(function() {
    ig.SoundManager = ig.Class.extend({
        clips: {},
        volume: 1,
        format: null,
        init: function() {
            for (var b = new Audio,
            c = 0; c < ig.Sound.use.length; c++) {
                var d = ig.Sound.use[c];
                if (b.canPlayType(d.mime)) {
                    this.format = d;
                    break
                }
            }
            this.format || (ig.Sound.enabled = !1)
        },
        load: function(b, c, d) {
            var f = ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
            if (this.clips[b]) {
                if (c && this.clips[b].length < ig.Sound.channels) for (c = this.clips[b].length; c < ig.Sound.channels; c++) {
                    var g = new Audio(f);
                    g.load();
                    this.clips[b].push(g)
                }
                return this.clips[b][0]
            }
            var m = new Audio(f);
            d && (m.addEventListener("canplaythrough",
            function z(c) {
                m.removeEventListener("canplaythrough", z, !1);
                d(b, !0, c)
            },
            !1), m.addEventListener("error",
            function(c) {
                d(b, !0, c)
            },
            !1));
            m.preload = "auto";
            m.load();
            this.clips[b] = [m];
            if (c) for (c = 1; c < ig.Sound.channels; c++) g = new Audio(f),
            g.load(),
            this.clips[b].push(g);
            return m
        },
        get: function(b) {
            b = this.clips[b];
            for (var c = 0,
            d; d = b[c++];) if (d.paused || d.ended) return d.ended && (d.currentTime = 0),
            d;
            b[0].pause();
            b[0].currentTime = 0;
            return b[0]
        }
    });
    ig.Music = ig.Class.extend({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0,
        random: !1,
        _volume: 1,
        _loop: !1,
        _fadeInterval: 0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function() {
            this._endedCallbackBound = this._endedCallback.bind(this);
            Object.defineProperty ? (Object.defineProperty(this, "volume", {
                get: this.getVolume.bind(this),
                set: this.setVolume.bind(this)
            }), Object.defineProperty(this, "loop", {
                get: this.getLooping.bind(this),
                set: this.setLooping.bind(this)
            })) : this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
        },
        add: function(b, c) {
            if (ig.Sound.enabled) {
                var d = ig.soundManager.load(b instanceof ig.Sound ? b.path: b, !1);
                d.loop = this._loop;
                d.volume = this._volume;
                d.addEventListener("ended", this._endedCallbackBound, !1);
                this.tracks.push(d);
                c && (this.namedTracks[c] = d);
                this.currentTrack || (this.currentTrack = d)
            }
        },
        next: function() {
            this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
        },
        pause: function() {
            this.currentTrack && this.currentTrack.pause()
        },
        stop: function() {
            if (this.currentTrack) {
                this.currentTrack.pause();
                try {
                    this.currentTrack.currentTime = 0
                } catch(b) {
                    console.log(b)
                }
            }
        },
        play: function(b) {
            if (b && this.namedTracks[b]) b = this.namedTracks[b],
            b != this.currentTrack && (this.stop(), this.currentTrack = b);
            else if (!this.currentTrack) return;
            this.currentTrack.play()
        },
        getLooping: function() {
            return this._loop
        },
        setLooping: function(b) {
            this._loop = b;
            for (var c in this.tracks) this.tracks[c].loop = b
        },
        getVolume: function() {
            return this._volume
        },
        setVolume: function(b) {
            this._volume = b.limit(0, 1);
            for (var c in this.tracks) this.tracks[c].volume = this._volume
        },
        fadeOut: function(b) {
            this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(b), this._fadeInterval = setInterval(this._fadeStep.bind(this), 50))
        },
        _fadeStep: function() {
            var b = this.fadeTimer.delta().map( - this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
            0.01 >= b ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = b
        },
        _endedCallback: function() {
            this._loop ? this.play() : this.next()
        }
    });
    ig.Sound = ig.Class.extend({
        path: "",
        volume: 1,
        currentClip: null,
        multiChannel: !0,
        init: function(b, c) {
            this.path = b;
            this.multiChannel = !1 !== c;
            this.load()
        },
        load: function(b) {
            ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path, this.multiChannel, b) : ig.addResource(this) : b && b(this.path, !0)
        },
        play: function() {
            ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
        },
        stop: function() {
            this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
        }
    });
    ig.Sound.FORMAT = {
        MP3: {
            ext: "mp3",
            mime: "audio/mpeg"
        },
        M4A: {
            ext: "m4a",
            mime: "audio/mp4; codecs=mp4a"
        },
        OGG: {
            ext: "ogg",
            mime: "audio/ogg; codecs=vorbis"
        },
        WEBM: {
            ext: "webm",
            mime: "audio/webm; codecs=vorbis"
        },
        CAF: {
            ext: "caf",
            mime: "audio/x-caf"
        }
    };
    ig.Sound.use = [ig.Sound.FORMAT.MP3, ig.Sound.FORMAT.OGG];
    ig.Sound.channels = 4;
    ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function() {
    ig.Loader = ig.Class.extend({
        resources: [],
        gameClass: null,
        status: 0,
        done: !1,
        _unloaded: [],
        _drawStatus: 0,
        _intervalId: 0,
        _loadCallbackBound: null,
        init: function(b, c) {
            this.gameClass = b;
            this.resources = c;
            this._loadCallbackBound = this._loadCallback.bind(this);
            for (var d = 0; d < this.resources.length; d++) this._unloaded.push(this.resources[d].path)
        },
        load: function() {
            ig.system.clear("#000");
            if (this.resources.length) {
                for (var b = 0; b < this.resources.length; b++) this.loadResource(this.resources[b]);
                this._intervalId = setInterval(this.draw.bind(this), 16)
            } else this.end()
        },
        loadResource: function(b) {
            b.load(this._loadCallbackBound)
        },
        end: function() {
            this.done || (this.done = !0, clearInterval(this._intervalId))
        },
        draw: function() {},
        _loadCallback: function(b, c) {
            if (c) this._unloaded.erase(b);
            else throw "Failed to load resource: " + b;
            this.status = 1 - this._unloaded.length / this.resources.length;
            0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
        }
    })
});
ig.baked = !0;
ig.module("impact.timer").defines(function() {
    ig.Timer = ig.Class.extend({
        target: 0,
        base: 0,
        last: 0,
        pausedAt: 0,
        init: function(b) {
            this.last = this.base = ig.Timer.time;
            this.target = b || 0
        },
        set: function(b) {
            this.target = b || 0;
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        reset: function() {
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        tick: function() {
            var b = ig.Timer.time - this.last;
            this.last = ig.Timer.time;
            return this.pausedAt ? 0 : b
        },
        delta: function() {
            return (this.pausedAt || ig.Timer.time) - this.base - this.target
        },
        pause: function() {
            this.pausedAt || (this.pausedAt = ig.Timer.time)
        },
        unpause: function() {
            this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
        }
    });
    ig.Timer._last = 0;
    ig.Timer.time = 0;
    ig.Timer.timeScale = 1;
    ig.Timer.maxStep = 0.05;
    ig.Timer.step = function() {
        var b = Date.now();
        ig.Timer.time += Math.min((b - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
        ig.Timer._last = b
    }
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function() {
    ig.System = ig.Class.extend({
        fps: 30,
        width: 320,
        height: 240,
        realWidth: 320,
        realHeight: 240,
        scale: 1,
        tick: 0,
        animationId: 0,
        newGameClass: null,
        running: !1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        init: function(b, c, d, f, g) {
            this.fps = c;
            this.clock = new ig.Timer;
            this.canvas = ig.$(b);
            this.resize(d, f, g);
            this.context = this.canvas.getContext("2d");
            this.getDrawPos = ig.System.drawMode
        },
        resize: function(b, c, d) {
            this.width = b;
            this.height = c;
            this.scale = d || this.scale;
            this.realWidth = this.width * this.scale;
            this.realHeight = this.height * this.scale;
            this.canvas.width = this.realWidth;
            this.canvas.height = this.realHeight
        },
        setGame: function(b) {
            this.running ? this.newGameClass = b: this.setGameNow(b)
        },
        setGameNow: function(b) {
            ig.game = new b;
            ig.system.setDelegate(ig.game)
        },
        setDelegate: function(b) {
            if ("function" == typeof b.run) this.delegate = b,
            this.startRunLoop();
            else throw "System.setDelegate: No run() function in object";
        },
        stopRunLoop: function() {
            ig.clearAnimation(this.animationId);
            this.running = !1
        },
        startRunLoop: function() {
            this.stopRunLoop();
            this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
            this.running = !0
        },
        clear: function(b) {
            this.context.fillStyle = b;
            this.context.fillRect(0, 0, this.realWidth, this.realHeight)
        },
        run: function() {
            ig.Timer.step();
            this.tick = this.clock.tick();
            this.delegate.run();
            ig.input.clearPressed();
            this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
        },
        getDrawPos: null
    });
    ig.System.DRAW = {
        AUTHENTIC: function(b) {
            return Math.round(b) * this.scale
        },
        SMOOTH: function(b) {
            return Math.round(b * this.scale)
        },
        SUBPIXEL: function(b) {
            return b * this.scale
        }
    };
    ig.System.drawMode = ig.System.DRAW.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function() {
    ig.KEY = {
        MOUSE1: -1,
        MOUSE2: -3,
        MWHEEL_UP: -4,
        MWHEEL_DOWN: -5,
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        PAUSE: 19,
        CAPS: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        INSERT: 45,
        DELETE: 46,
        _0: 48,
        _1: 49,
        _2: 50,
        _3: 51,
        _4: 52,
        _5: 53,
        _6: 54,
        _7: 55,
        _8: 56,
        _9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBSTRACT: 109,
        DECIMAL: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PLUS: 187,
        COMMA: 188,
        MINUS: 189,
        PERIOD: 190
    };
    ig.Input = ig.Class.extend({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !1,
        isUsingKeyboard: !1,
        isUsingAccelerometer: !1,
        mouse: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0,
            z: 0
        },
        initMouse: function() {
            if (!this.isUsingMouse) {
                this.isUsingMouse = !0;
                var b = this.mousewheel.bind(this);
                ig.system.canvas.addEventListener("mousewheel", b, !1);
                ig.system.canvas.addEventListener("DOMMouseScroll", b, !1);
                ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
                ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
                ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
                ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
                ig.system.canvas.addEventListener("touchstart", this.keydown.bind(this), !1);
                ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1);
                ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1)
            }
        },
        initKeyboard: function() {
            this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
        },
        initAccelerometer: function() {
            this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
        },
        mousewheel: function(b) {
            var c = this.bindings[0 < (b.wheelDelta ? b.wheelDelta: -1 * b.detail) ? ig.KEY.MWHEEL_UP: ig.KEY.MWHEEL_DOWN];
            c && (this.actions[c] = !0, this.presses[c] = !0, this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault())
        },
        mousemove: function(b) {
            for (var c = ig.system.canvas,
            d = 0,
            f = 0; null != c;) d += c.offsetLeft,
            f += c.offsetTop,
            c = c.offsetParent;
            var c = b.pageX,
            g = b.pageY;
            b.touches && (c = b.touches[0].clientX, g = b.touches[0].clientY);
            this.mouse.x = (c - d) / ig.system.scale;
            this.mouse.y = (g - f) / ig.system.scale
        },
        contextmenu: function(b) {
            this.bindings[ig.KEY.MOUSE2] && (b.stopPropagation(), b.preventDefault())
        },
        keydown: function(b) {
            if ("text" != b.target.type) {
                var c = "keydown" == b.type ? b.keyCode: 2 == b.button ? ig.KEY.MOUSE2: ig.KEY.MOUSE1; ("touchstart" == b.type || "mousedown" == b.type) && this.mousemove(b);
                if (c = this.bindings[c]) this.actions[c] = !0,
                this.locks[c] || (this.presses[c] = !0, this.locks[c] = !0),
                b.stopPropagation(),
                b.preventDefault()
            }
        },
        keyup: function(b) {
            if ("text" != b.target.type) {
                var c = this.bindings["keyup" == b.type ? b.keyCode: 2 == b.button ? ig.KEY.MOUSE2: ig.KEY.MOUSE1];
                c && (this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault())
            }
        },
        devicemotion: function(b) {
            this.accel = b.accelerationIncludingGravity
        },
        bind: function(b, c) {
            0 > b ? this.initMouse() : 0 < b && this.initKeyboard();
            this.bindings[b] = c
        },
        bindTouch: function(b, c) {
            var d = ig.$(b),
            f = this;
            d.addEventListener("touchstart",
            function(b) {
                f.touchStart(b, c)
            },
            !1);
            d.addEventListener("touchend",
            function(b) {
                f.touchEnd(b, c)
            },
            !1)
        },
        unbind: function(b) {
            this.delayedKeyup[this.bindings[b]] = !0;
            this.bindings[b] = null
        },
        unbindAll: function() {
            this.bindings = {};
            this.actions = {};
            this.presses = {};
            this.locks = {};
            this.delayedKeyup = {}
        },
        state: function(b) {
            return this.actions[b]
        },
        pressed: function(b) {
            return this.presses[b]
        },
        released: function(b) {
            return this.delayedKeyup[b]
        },
        clearPressed: function() {
            for (var b in this.delayedKeyup) this.actions[b] = !1,
            this.locks[b] = !1;
            this.delayedKeyup = {};
            this.presses = {}
        },
        touchStart: function(b, c) {
            this.actions[c] = !0;
            this.presses[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return ! 1
        },
        touchEnd: function(b, c) {
            this.delayedKeyup[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return ! 1
        }
    })
});
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound").defines(function() {
    ig.main = function(b, c, d, f, g, m, q) {
        ig.system = new ig.System(b, d, f, g, m || 1);
        ig.input = new ig.Input;
        ig.soundManager = new ig.SoundManager;
        ig.music = new ig.Music;
        ig.ready = !0; (new(q || ig.Loader)(c, ig.resources)).load()
    }
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function() {
    ig.AnimationSheet = ig.Class.extend({
        width: 8,
        height: 8,
        image: null,
        init: function(b, c, d) {
            this.width = c;
            this.height = d;
            this.image = new ig.Image(b)
        }
    });
    ig.Animation = ig.Class.extend({
        sheet: null,
        timer: null,
        sequence: [],
        flip: {
            x: !1,
            y: !1
        },
        pivot: {
            x: 0,
            y: 0
        },
        frame: 0,
        tile: 0,
        loopCount: 0,
        alpha: 1,
        angle: 0,
        init: function(b, c, d, f) {
            this.sheet = b;
            this.pivot = {
                x: b.width / 2,
                y: b.height / 2
            };
            this.timer = new ig.Timer;
            this.frameTime = c;
            this.sequence = d;
            this.stop = !!f;
            this.tile = this.sequence[0]
        },
        rewind: function() {
            this.timer.reset();
            this.loopCount = 0;
            this.tile = this.sequence[0];
            return this
        },
        gotoFrame: function(b) {
            this.timer.set(this.frameTime * -b);
            this.update()
        },
        gotoRandomFrame: function() {
            this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
        },
        update: function() {
            var b = Math.floor(this.timer.delta() / this.frameTime);
            this.loopCount = Math.floor(b / this.sequence.length);
            this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : b % this.sequence.length;
            this.tile = this.sequence[this.frame]
        },
        draw: function(b, c) {
            var d = Math.max(this.sheet.width, this.sheet.height);
            b > ig.system.width || c > ig.system.height || (0 > b + d || 0 > c + d) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(b, c, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(b + this.pivot.x), ig.system.getDrawPos(c + this.pivot.y)), ig.system.context.rotate(this.angle), this.sheet.image.drawTile( - this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
        }
    })
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function() {
    ig.Entity = ig.Class.extend({
        id: 0,
        settings: {},
        size: {
            x: 16,
            y: 16
        },
        offset: {
            x: 0,
            y: 0
        },
        posMP: {
            x: 0,
            y: 0
        },
        posML: {
            x: 0,
            y: 0
        },
        enableReposition: !1,
        pos: {
            x: 0,
            y: 0
        },
        last: {
            x: 0,
            y: 0
        },
        vel: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0
        },
        friction: {
            x: 0,
            y: 0
        },
        maxVel: {
            x: 100,
            y: 100
        },
        zIndex: 0,
        gravityFactor: 1,
        standing: !1,
        bounciness: 0,
        minBounceVelocity: 40,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 10,
        type: 0,
        checkAgainst: 0,
        collides: 0,
        _killed: !1,
        slopeStanding: {
            min: (44).toRad(),
            max: (136).toRad()
        },
        init: function(b, c, d) {
            this.id = ++ig.Entity._lastId;
            this.pos.x = b;
            this.pos.y = c;
            ig.merge(this, d)
        },
        addAnim: function(b, c, d, f) {
            if (!this.animSheet) throw "No animSheet to add the animation " + b + " to.";
            c = new ig.Animation(this.animSheet, c, d, f);
            this.anims[b] = c;
            this.currentAnim || (this.currentAnim = c);
            return c
        },
        update: function() {
            this.last.x = this.pos.x;
            this.last.y = this.pos.y;
            this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
            this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
            this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
            var b = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y * ig.system.tick, this.size.x, this.size.y);
            this.handleMovementTrace(b);
            this.currentAnim && this.currentAnim.update()
        },
        getNewVelocity: function(b, c, d, f) {
            return c ? (b + c * ig.system.tick).limit( - f, f) : d ? (c = d * ig.system.tick, 0 < b - c ? b - c: 0 > b + c ? b + c: 0) : b.limit( - f, f)
        },
        handleMovementTrace: function(b) {
            this.standing = !1;
            b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness: (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
            b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness: 0);
            if (b.collision.slope) {
                var c = b.collision.slope;
                if (0 < this.bounciness) {
                    var d = this.vel.x * c.nx + this.vel.y * c.ny;
                    this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
                    this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
                } else d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y),
                this.vel.x = c.x * d,
                this.vel.y = c.y * d,
                c = Math.atan2(c.x, c.y),
                c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
            }
            this.pos = b.pos
        },
        reposition: function() {
            ig.ua.mobile && this.enableReposition && (portraitMode ? (this.pos.x = this.posMP.x, this.pos.y = this.posMP.y) : (this.pos.x = this.posML.x, this.pos.y = this.posML.y))
        },
        draw: function() {
            this.currentAnim && this.currentAnim.draw(this.pos.x - this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
        },
        kill: function() {
            ig.game.removeEntity(this)
        },
        receiveDamage: function(b) {
            this.health -= b;
            0 >= this.health && this.kill()
        },
        touches: function(b) {
            return ! (this.pos.x >= b.pos.x + b.size.x || this.pos.x + this.size.x <= b.pos.x || this.pos.y >= b.pos.y + b.size.y || this.pos.y + this.size.y <= b.pos.y)
        },
        distanceTo: function(b) {
            var c = this.pos.x + this.size.x / 2 - (b.pos.x + b.size.x / 2);
            b = this.pos.y + this.size.y / 2 - (b.pos.y + b.size.y / 2);
            return Math.sqrt(c * c + b * b)
        },
        angleTo: function(b) {
            return Math.atan2(b.pos.y + b.size.y / 2 - (this.pos.y + this.size.y / 2), b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x / 2))
        },
        check: function() {},
        collideWith: function() {},
        ready: function() {}
    });
    ig.Entity._lastId = 0;
    ig.Entity.COLLIDES = {
        NEVER: 0,
        LITE: 1,
        PASSIVE: 2,
        ACTIVE: 4,
        FIXED: 8
    };
    ig.Entity.TYPE = {
        NONE: 0,
        A: 1,
        B: 2,
        BOTH: 3
    };
    ig.Entity.checkPair = function(b, c) {
        b.checkAgainst & c.type && b.check(c);
        c.checkAgainst & b.type && c.check(b);
        b.secondCheckAgainst & c.type && c.check(b);
        c.secondCheckAgainst & b.type && b.check(c);
        b.collides && c.collides && b.collides + c.collides > ig.Entity.COLLIDES.ACTIVE && ig.Entity.solveCollision(b, c)
    };
    ig.Entity.solveCollision = function(b, c) {
        var d = null;
        if (b.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED) d = b;
        else if (c.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED) d = c;
        b.last.x + b.size.x > c.last.x && b.last.x < c.last.x + c.size.x ? (b.last.y < c.last.y ? ig.Entity.seperateOnYAxis(b, c, d) : ig.Entity.seperateOnYAxis(c, b, d), b.collideWith(c, "y"), c.collideWith(b, "y")) : b.last.y + b.size.y > c.last.y && b.last.y < c.last.y + c.size.y && (b.last.x < c.last.x ? ig.Entity.seperateOnXAxis(b, c, d) : ig.Entity.seperateOnXAxis(c, b, d), b.collideWith(c, "x"), c.collideWith(b, "x"))
    };
    ig.Entity.seperateOnXAxis = function(b, c, d) {
        var f = b.pos.x + b.size.x - c.pos.x;
        d ? (d.vel.x = -d.vel.x * d.bounciness + (b === d ? c: b).vel.x, c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, d == b ? -f: f, 0, d.size.x, d.size.y), d.pos.x = c.pos.x) : (d = (b.vel.x - c.vel.x) / 2, b.vel.x = -d, c.vel.x = d, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, -f / 2, 0, b.size.x, b.size.y), b.pos.x = Math.floor(d.pos.x), b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, f / 2, 0, c.size.x, c.size.y), c.pos.x = Math.ceil(b.pos.x))
    };
    ig.Entity.seperateOnYAxis = function(b, c, d) {
        var f = b.pos.y + b.size.y - c.pos.y;
        if (d) {
            c = b === d ? c: b;
            d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
            var g = 0;
            d == b && Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity && (d.standing = !0, g = c.vel.x * ig.system.tick);
            b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, g, d == b ? -f: f, d.size.x, d.size.y);
            d.pos.y = b.pos.y;
            d.pos.x = b.pos.x
        } else ig.game.gravity && (c.standing || 0 < b.vel.y) ? (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, -(b.pos.y + b.size.y - c.pos.y), b.size.x, b.size.y), b.pos.y = d.pos.y, 0 < b.bounciness && b.vel.y > b.minBounceVelocity ? b.vel.y *= -b.bounciness: (b.standing = !0, b.vel.y = 0)) : (d = (b.vel.y - c.vel.y) / 2, b.vel.y = -d, c.vel.y = d, g = c.vel.x * ig.system.tick, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, g, -f / 2, b.size.x, b.size.y), b.pos.y = d.pos.y, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, f / 2, c.size.x, c.size.y), c.pos.y = b.pos.y)
    }
});
ig.baked = !0;
ig.module("impact.map").defines(function() {
    ig.Map = ig.Class.extend({
        tilesize: 8,
        width: 1,
        height: 1,
        data: [[]],
        name: null,
        init: function(b, c) {
            this.tilesize = b;
            this.data = c;
            this.height = c.length;
            this.width = c[0].length
        },
        getTile: function(b, c) {
            var d = Math.floor(b / this.tilesize),
            f = Math.floor(c / this.tilesize);
            return 0 <= d && d < this.width && 0 <= f && f < this.height ? this.data[f][d] : 0
        },
        setTile: function(b, c, d) {
            b = Math.floor(b / this.tilesize);
            c = Math.floor(c / this.tilesize);
            0 <= b && b < this.width && 0 <= c && c < this.height && (this.data[c][b] = d)
        }
    })
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function() {
    ig.CollisionMap = ig.Map.extend({
        lastSlope: 1,
        tiledef: null,
        init: function(b, c, g) {
            this.parent(b, c);
            this.tiledef = g || ig.CollisionMap.defaultTileDef;
            for (var m in this.tiledef) m | 0 > this.lastSlope && (this.lastSlope = m | 0)
        },
        trace: function(b, c, g, m, q, z) {
            var p = {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: b,
                    y: c
                },
                tile: {
                    x: 0,
                    y: 0
                }
            },
            x = Math.ceil(Math.max(Math.abs(g), Math.abs(m)) / this.tilesize);
            if (1 < x) for (var A = g / x,
            l = m / x,
            n = 0; n < x && (A || l) && !(this._traceStep(p, b, c, A, l, q, z, g, m, n), b = p.pos.x, c = p.pos.y, p.collision.x && (g = A = 0), p.collision.y && (m = l = 0), p.collision.slope); n++);
            else this._traceStep(p, b, c, g, m, q, z, g, m, 0);
            return p
        },
        _traceStep: function(b, c, g, m, q, z, p, x, A, l) {
            b.pos.x += m;
            b.pos.y += q;
            var n = 0;
            if (m) {
                var r = 0 < m ? z: 0,
                v = 0 > m ? this.tilesize: 0,
                n = Math.max(Math.floor(g / this.tilesize), 0),
                N = Math.min(Math.ceil((g + p) / this.tilesize), this.height);
                m = Math.floor((b.pos.x + r) / this.tilesize);
                var G = Math.floor((c + r) / this.tilesize);
                if (0 < l || m == G || 0 > G || G >= this.width) G = -1;
                if (0 <= m && m < this.width) for (var E = n; E < N && !( - 1 != G && (n = this.data[E][G], 1 < n && n <= this.lastSlope && this._checkTileDef(b, n, c, g, x, A, z, p, G, E))); E++) if (n = this.data[E][m], 1 == n || n > this.lastSlope || 1 < n && this._checkTileDef(b, n, c, g, x, A, z, p, m, E)) {
                    if (1 < n && n <= this.lastSlope && b.collision.slope) break;
                    b.collision.x = !0;
                    b.tile.x = n;
                    c = b.pos.x = m * this.tilesize - r + v;
                    x = 0;
                    break
                }
            }
            if (q) {
                r = 0 < q ? p: 0;
                q = 0 > q ? this.tilesize: 0;
                n = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
                v = Math.min(Math.ceil((b.pos.x + z) / this.tilesize), this.width);
                E = Math.floor((b.pos.y + r) / this.tilesize);
                N = Math.floor((g + r) / this.tilesize);
                if (0 < l || E == N || 0 > N || N >= this.height) N = -1;
                if (0 <= E && E < this.height) for (m = n; m < v && !( - 1 != N && (n = this.data[N][m], 1 < n && n <= this.lastSlope && this._checkTileDef(b, n, c, g, x, A, z, p, m, N))); m++) if (n = this.data[E][m], 1 == n || n > this.lastSlope || 1 < n && this._checkTileDef(b, n, c, g, x, A, z, p, m, E)) {
                    if (1 < n && n <= this.lastSlope && b.collision.slope) break;
                    b.collision.y = !0;
                    b.tile.y = n;
                    b.pos.y = E * this.tilesize - r + q;
                    break
                }
            }
        },
        _checkTileDef: function(b, c, g, m, q, z, p, x, A, l) {
            var n = this.tiledef[c];
            if (!n) return ! 1;
            c = (n[2] - n[0]) * this.tilesize;
            var r = (n[3] - n[1]) * this.tilesize,
            v = n[4];
            p = g + q + (0 > r ? p: 0) - (A + n[0]) * this.tilesize;
            x = m + z + (0 < c ? x: 0) - (l + n[1]) * this.tilesize;
            if (0 < c * x - r * p) {
                if (0 > q * -r + z * c) return v;
                A = Math.sqrt(c * c + r * r);
                l = r / A;
                A = -c / A;
                var N = p * l + x * A,
                n = l * N,
                N = A * N;
                if (n * n + N * N >= q * q + z * z) return v || 0.5 > c * (x - z) - r * (p - q);
                b.pos.x = g + q - n;
                b.pos.y = m + z - N;
                b.collision.slope = {
                    x: c,
                    y: r,
                    nx: l,
                    ny: A
                };
                return ! 0
            }
            return ! 1
        }
    });
    var b = 1 / 3,
    c = 2 / 3;
    ig.CollisionMap.defaultTileDef = {
        5 : [0, 1, 1, c, !0],
        6 : [0, c, 1, b, !0],
        7 : [0, b, 1, 0, !0],
        3 : [0, 1, 1, 0.5, !0],
        4 : [0, 0.5, 1, 0, !0],
        2 : [0, 1, 1, 0, !0],
        10 : [0.5, 1, 1, 0, !0],
        21 : [0, 1, 0.5, 0, !0],
        32 : [c, 1, 1, 0, !0],
        43 : [b, 1, c, 0, !0],
        54 : [0, 1, b, 0, !0],
        27 : [0, 0, 1, b, !0],
        28 : [0, b, 1, c, !0],
        29 : [0, c, 1, 1, !0],
        25 : [0, 0, 1, 0.5, !0],
        26 : [0, 0.5, 1, 1, !0],
        24 : [0, 0, 1, 1, !0],
        11 : [0, 0, 0.5, 1, !0],
        22 : [0.5, 0, 1, 1, !0],
        33 : [0, 0, b, 1, !0],
        44 : [b, 0, c, 1, !0],
        55 : [c, 0, 1, 1, !0],
        16 : [1, b, 0, 0, !0],
        17 : [1, c, 0, b, !0],
        18 : [1, 1, 0, c, !0],
        14 : [1, 0.5, 0, 0, !0],
        15 : [1, 1, 0, 0.5, !0],
        13 : [1, 1, 0, 0, !0],
        8 : [0.5, 1, 0, 0, !0],
        19 : [1, 1, 0.5, 0, !0],
        30 : [b, 1, 0, 0, !0],
        41 : [c, 1, b, 0, !0],
        52 : [1, 1, c, 0, !0],
        38 : [1, c, 0, 1, !0],
        39 : [1, b, 0, c, !0],
        40 : [1, 0, 0, b, !0],
        36 : [1, 0.5, 0, 1, !0],
        37 : [1, 0, 0, 0.5, !0],
        35 : [1, 0, 0, 1, !0],
        9 : [1, 0, 0.5, 1, !0],
        20 : [0.5, 0, 0, 1, !0],
        31 : [1, 0, c, 1, !0],
        42 : [c, 0, b, 1, !0],
        53 : [b, 0, 0, 1, !0],
        12 : [0, 0, 1, 0, !1],
        23 : [1, 1, 0, 1, !1],
        34 : [1, 0, 1, 1, !1],
        45 : [0, 1, 0, 0, !1]
    };
    ig.CollisionMap.staticNoCollision = {
        trace: function(b, c, g, m) {
            return {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: b + g,
                    y: c + m
                },
                tile: {
                    x: 0,
                    y: 0
                }
            }
        }
    }
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function() {
    ig.BackgroundMap = ig.Map.extend({
        tiles: null,
        scroll: {
            x: 0,
            y: 0
        },
        distance: 1,
        repeat: !1,
        tilesetName: "",
        foreground: !1,
        enabled: !0,
        preRender: !1,
        preRenderedChunks: null,
        chunkSize: 512,
        debugChunks: !1,
        anims: {},
        init: function(b, c, d) {
            this.parent(b, c);
            this.setTileset(d)
        },
        setTileset: function(b) {
            this.tilesetName = b instanceof ig.Image ? b.path: b;
            this.tiles = new ig.Image(this.tilesetName);
            this.preRenderedChunks = null
        },
        setScreenPos: function(b, c) {
            this.scroll.x = b / this.distance;
            this.scroll.y = c / this.distance
        },
        preRenderMapToChunks: function() {
            var b = this.width * this.tilesize * ig.system.scale,
            c = this.height * this.tilesize * ig.system.scale,
            d = Math.ceil(b / this.chunkSize),
            f = Math.ceil(c / this.chunkSize);
            this.preRenderedChunks = [];
            for (var g = 0; g < f; g++) {
                this.preRenderedChunks[g] = [];
                for (var m = 0; m < d; m++) this.preRenderedChunks[g][m] = this.preRenderChunk(m, g, m == d - 1 ? b - m * this.chunkSize: this.chunkSize, g == f - 1 ? c - g * this.chunkSize: this.chunkSize)
            }
        },
        preRenderChunk: function(b, c, d, f) {
            var g = d / this.tilesize / ig.system.scale + 1,
            m = f / this.tilesize / ig.system.scale + 1,
            q = b * this.chunkSize / ig.system.scale % this.tilesize,
            z = c * this.chunkSize / ig.system.scale % this.tilesize;
            b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
            c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
            var p = ig.$new("canvas");
            p.width = d;
            p.height = f;
            d = ig.system.context;
            ig.system.context = p.getContext("2d");
            for (f = 0; f < g; f++) for (var x = 0; x < m; x++) if (f + b < this.width && x + c < this.height) {
                var A = this.data[x + c][f + b];
                A && this.tiles.drawTile(f * this.tilesize - q, x * this.tilesize - z, A - 1, this.tilesize)
            }
            ig.system.context = d;
            return p
        },
        draw: function() {
            this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
        },
        drawPreRendered: function() {
            this.preRenderedChunks || this.preRenderMapToChunks();
            var b = ig.system.getDrawPos(this.scroll.x),
            c = ig.system.getDrawPos(this.scroll.y);
            this.repeat && (b %= this.width * this.tilesize * ig.system.scale, c %= this.height * this.tilesize * ig.system.scale);
            var d = Math.max(Math.floor(b / this.chunkSize), 0),
            f = Math.max(Math.floor(c / this.chunkSize), 0),
            g = Math.ceil((b + ig.system.realWidth) / this.chunkSize),
            m = Math.ceil((c + ig.system.realHeight) / this.chunkSize),
            q = this.preRenderedChunks[0].length,
            z = this.preRenderedChunks.length;
            this.repeat || (g = Math.min(g, q), m = Math.min(m, z));
            for (var p = 0; f < m; f++) {
                for (var x = 0,
                A = d; A < g; A++) {
                    var l = this.preRenderedChunks[f % z][A % q],
                    n = -b + A * this.chunkSize - x,
                    r = -c + f * this.chunkSize - p;
                    ig.system.context.drawImage(l, n, r);
                    ig.Image.drawCount++;
                    this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(n, r, this.chunkSize, this.chunkSize));
                    this.repeat && l.width < this.chunkSize && n + l.width < ig.system.realWidth && (x = this.chunkSize - l.width, g++)
                }
                this.repeat && l.height < this.chunkSize && r + l.height < ig.system.realHeight && (p = this.chunkSize - l.height, m++)
            }
        },
        drawTiled: function() {
            for (var b = 0,
            c = null,
            d = (this.scroll.x / this.tilesize).toInt(), f = (this.scroll.y / this.tilesize).toInt(), g = this.scroll.x % this.tilesize, m = this.scroll.y % this.tilesize, q = -g - this.tilesize, g = ig.system.width + this.tilesize - g, z = ig.system.height + this.tilesize - m, p = -1, m = -m - this.tilesize; m < z; p++, m += this.tilesize) {
                var x = p + f;
                if (x >= this.height || 0 > x) {
                    if (!this.repeat) continue;
                    x = 0 < x ? x % this.height: (x + 1) % this.height + this.height - 1
                }
                for (var A = -1,
                l = q; l < g; A++, l += this.tilesize) {
                    b = A + d;
                    if (b >= this.width || 0 > b) {
                        if (!this.repeat) continue;
                        b = 0 < b ? b % this.width: (b + 1) % this.width + this.width - 1
                    }
                    if (b = this.data[x][b])(c = this.anims[b - 1]) ? c.draw(l, m) : this.tiles.drawTile(l, m, b - 1, this.tilesize)
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function() {
    ig.Game = ig.Class.extend({
        clearColor: "#000000",
        gravity: 0,
        screen: {
            x: 0,
            y: 0
        },
        _rscreen: {
            x: 0,
            y: 0
        },
        entities: [],
        namedEntities: {},
        collisionMap: ig.CollisionMap.staticNoCollision,
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !1,
        sortBy: null,
        cellSize: 64,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !1,
        staticInstantiate: function() {
            this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
            ig.game = this;
            return null
        },
        loadLevelWithoutEntities: function(b) {
            this.screen = {
                x: 0,
                y: 0
            };
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (var c = 0; c < b.layer.length; c++) {
                var d = b.layer[c];
                if ("collision" == d.name) this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
                else {
                    var f = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
                    f.anims = this.backgroundAnims[d.tilesetName] || {};
                    f.repeat = d.repeat;
                    f.distance = d.distance;
                    f.foreground = !!d.foreground;
                    f.preRender = !!d.preRender;
                    f.name = d.name;
                    this.backgroundMaps.push(f)
                }
            }
        },
        loadLevel: function(b) {
            this.screen = {
                x: 0,
                y: 0
            };
            this.entities = [];
            this.namedEntities = {};
            for (var c = 0; c < b.entities.length; c++) {
                var d = b.entities[c];
                this.spawnEntity(d.type, d.x, d.y, d.settings)
            }
            this.sortEntities();
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (c = 0; c < b.layer.length; c++) if (d = b.layer[c], "collision" == d.name) this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
            else {
                var f = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
                f.anims = this.backgroundAnims[d.tilesetName] || {};
                f.repeat = d.repeat;
                f.distance = d.distance;
                f.foreground = !!d.foreground;
                f.preRender = !!d.preRender;
                f.name = d.name;
                this.backgroundMaps.push(f)
            }
            for (c = 0; c < this.entities.length; c++) this.entities[c].ready()
        },
        loadLevelDeferred: function(b) {
            this._levelToLoad = b
        },
        getMapByName: function(b) {
            if ("collision" == b) return this.collisionMap;
            for (var c = 0; c < this.backgroundMaps.length; c++) if (this.backgroundMaps[c].name == b) return this.backgroundMaps[c];
            return null
        },
        getEntityByName: function(b) {
            return this.namedEntities[b]
        },
        getEntitiesByType: function(b) {
            b = "string" === typeof b ? ig.global[b] : b;
            for (var c = [], d = 0; d < this.entities.length; d++) {
                var f = this.entities[d];
                f instanceof b && !f._killed && c.push(f)
            }
            return c
        },
        spawnEntity: function(b, c, d, f) {
            var g = "string" === typeof b ? ig.global[b] : b;
            if (!g) throw "Can't spawn entity of type " + b;
            b = new g(c, d, f || {});
            this.entities.push(b);
            b.name && (this.namedEntities[b.name] = b);
            return b
        },
        sortEntities: function() {
            this.entities.sort(this.sortBy)
        },
        sortEntitiesDeferred: function() {
            this._doSortEntities = !0
        },
        removeEntity: function(b) {
            b.name && delete this.namedEntities[b.name];
            b._killed = !0;
            b.type = ig.Entity.TYPE.NONE;
            b.checkAgainst = ig.Entity.TYPE.NONE;
            b.collides = ig.Entity.COLLIDES.NEVER;
            this._deferredKill.push(b)
        },
        run: function() {
            this.update();
            this.draw()
        },
        update: function() {
            this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
            if (this._doSortEntities || this.autoSort) this.sortEntities(),
            this._doSortEntities = !1;
            this.updateEntities();
            this.checkEntities();
            for (var b = 0; b < this._deferredKill.length; b++) this.entities.erase(this._deferredKill[b]);
            this._deferredKill = [];
            for (var c in this.backgroundAnims) {
                var b = this.backgroundAnims[c],
                d;
                for (d in b) b[d].update()
            }
        },
        updateEntities: function() {
            for (var b = 0; b < this.entities.length; b++) {
                var c = this.entities[b];
                c._killed || c.update()
            }
        },
        draw: function() {
            this.clearColor && ig.system.clear(this.clearColor);
            this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
            this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
            var b;
            for (b = 0; b < this.backgroundMaps.length; b++) {
                var c = this.backgroundMaps[b];
                if (c.foreground) break;
                c.setScreenPos(this.screen.x, this.screen.y);
                c.draw()
            }
            this.drawEntities();
            for (b; b < this.backgroundMaps.length; b++) c = this.backgroundMaps[b],
            c.setScreenPos(this.screen.x, this.screen.y),
            c.draw()
        },
        drawEntities: function() {
            for (var b = 0; b < this.entities.length; b++) this.entities[b].draw()
        },
        checkEntities: function() {
            for (var b = {},
            c = 0; c < this.entities.length; c++) {
                var d = this.entities[c];
                if (! (d.type == ig.Entity.TYPE.NONE && d.checkAgainst == ig.Entity.TYPE.NONE && d.collides == ig.Entity.COLLIDES.NEVER)) for (var f = {},
                g = Math.floor(d.pos.y / this.cellSize), m = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, q = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, z = Math.floor(d.pos.x / this.cellSize); z < m; z++) for (var p = g; p < q; p++) if (b[z]) if (b[z][p]) {
                    for (var x = b[z][p], A = 0; A < x.length; A++) d.touches(x[A]) && !f[x[A].id] && (f[x[A].id] = !0, ig.Entity.checkPair(d, x[A]));
                    x.push(d)
                } else b[z][p] = [d];
                else b[z] = {},
                b[z][p] = [d]
            }
        }
    });
    ig.Game.SORT = {
        Z_INDEX: function(b, c) {
            return b.zIndex - c.zIndex
        },
        POS_X: function(b, c) {
            return b.pos.x + b.size.x - (c.pos.x + c.size.x)
        },
        POS_Y: function(b, c) {
            return b.pos.y + b.size.y - (c.pos.y + c.size.y)
        }
    }
});
ig.baked = !0;
ig.module("impact.debug.menu").requires("dom.ready", "impact.system").defines(function() {
    ig.System.inject({
        run: function() {
            ig.debug.beforeRun();
            this.parent();
            ig.debug.afterRun()
        },
        setGameNow: function(b) {
            this.parent(b);
            ig.debug.ready()
        }
    });
    ig.Debug = ig.Class.extend({
        options: {},
        panels: {},
        numbers: {},
        container: null,
        panelMenu: null,
        activePanel: null,
        debugTime: 0,
        debugTickAvg: 0.016,
        debugRealTime: Date.now(),
        init: function() {
            this.container = ig.$new("div");
            this.container.className = "ig_debug";
            ig.$("body")[0].appendChild(this.container);
            this.panelMenu = ig.$new("div");
            this.panelMenu.innerHTML = '<div class="ig_debug_head">Impact.Debug:</div>';
            this.panelMenu.className = "ig_debug_panel_menu";
            this.container.appendChild(this.panelMenu);
            this.numberContainer = ig.$new("div");
            this.numberContainer.className = "ig_debug_stats";
            this.panelMenu.appendChild(this.numberContainer);
            window.console && window.console.log && window.console.assert && (ig.log = console.log.bind ? console.log.bind(console) : console.log, ig.assert = console.assert.bind ? console.assert.bind(console) : console.assert);
            ig.show = this.showNumber.bind(this)
        },
        addNumber: function(b) {
            var c = ig.$new("span");
            this.numberContainer.appendChild(c);
            this.numberContainer.appendChild(document.createTextNode(b));
            this.numbers[b] = c
        },
        showNumber: function(b, c, d) {
            this.numbers[b] || this.addNumber(b, d);
            this.numbers[b].textContent = c
        },
        addPanel: function(b) {
            var c = new b.type(b.name, b.label);
            if (b.options) for (var d = 0; d < b.options.length; d++) {
                var f = b.options[d];
                c.addOption(new ig.DebugOption(f.name, f.object, f.property))
            }
            this.panels[c.name] = c;
            c.container.style.display = "none";
            this.container.appendChild(c.container);
            b = ig.$new("div");
            b.className = "ig_debug_menu_item";
            b.textContent = c.label;
            b.addEventListener("click",
            function() {
                this.togglePanel(c)
            }.bind(this), !1);
            c.menuItem = b;
            f = !1;
            for (d = 1; d < this.panelMenu.childNodes.length; d++) {
                var g = this.panelMenu.childNodes[d];
                if (g.textContent > c.label) {
                    this.panelMenu.insertBefore(b, g);
                    f = !0;
                    break
                }
            }
            f || this.panelMenu.appendChild(b)
        },
        showPanel: function(b) {
            this.togglePanel(this.panels[b])
        },
        togglePanel: function(b) {
            b != this.activePanel && this.activePanel && (this.activePanel.toggle(!1), this.activePanel.menuItem.className = "ig_debug_menu_item", this.activePanel = null);
            var c = "block" != b.container.style.display;
            b.toggle(c);
            b.menuItem.className = "ig_debug_menu_item" + (c ? " active": "");
            c && (this.activePanel = b)
        },
        ready: function() {
            for (var b in this.panels) this.panels[b].ready()
        },
        beforeRun: function() {
            var b = Date.now();
            this.debugTickAvg = 0.8 * this.debugTickAvg + 0.2 * (b - this.debugRealTime);
            this.debugRealTime = b;
            this.activePanel && this.activePanel.beforeRun()
        },
        afterRun: function() {
            var b = Date.now() - this.debugRealTime;
            this.debugTime = 0.8 * this.debugTime + 0.2 * b;
            this.activePanel && this.activePanel.afterRun();
            this.showNumber("ms", this.debugTime.toFixed(2));
            this.showNumber("fps", Math.round(1E3 / this.debugTickAvg));
            this.showNumber("draws", ig.Image.drawCount);
            ig.game && ig.game.entities && this.showNumber("entities", ig.game.entities.length);
            ig.Image.drawCount = 0
        }
    });
    ig.DebugPanel = ig.Class.extend({
        active: !1,
        container: null,
        options: [],
        panels: [],
        label: "",
        name: "",
        init: function(b, c) {
            this.name = b;
            this.label = c;
            this.container = ig.$new("div");
            this.container.className = "ig_debug_panel " + this.name
        },
        toggle: function(b) {
            this.active = b;
            this.container.style.display = b ? "block": "none"
        },
        addPanel: function(b) {
            this.panels.push(b);
            this.container.appendChild(b.container)
        },
        addOption: function(b) {
            this.options.push(b);
            this.container.appendChild(b.container)
        },
        ready: function() {},
        beforeRun: function() {},
        afterRun: function() {}
    });
    ig.DebugOption = ig.Class.extend({
        name: "",
        labelName: "",
        className: "ig_debug_option",
        label: null,
        mark: null,
        container: null,
        active: !1,
        colors: {
            enabled: "#fff",
            disabled: "#444"
        },
        init: function(b, c, d) {
            this.name = b;
            this.object = c;
            this.property = d;
            this.active = this.object[this.property];
            this.container = ig.$new("div");
            this.container.className = "ig_debug_option";
            this.label = ig.$new("span");
            this.label.className = "ig_debug_label";
            this.label.textContent = this.name;
            this.mark = ig.$new("span");
            this.mark.className = "ig_debug_label_mark";
            this.container.appendChild(this.mark);
            this.container.appendChild(this.label);
            this.container.addEventListener("click", this.click.bind(this), !1);
            this.setLabel()
        },
        setLabel: function() {
            this.mark.style.backgroundColor = this.active ? this.colors.enabled: this.colors.disabled
        },
        click: function(b) {
            this.active = !this.active;
            this.object[this.property] = this.active;
            this.setLabel();
            b.stopPropagation();
            b.preventDefault();
            return ! 1
        }
    });
    ig.debug = new ig.Debug
});
ig.baked = !0;
ig.module("impact.debug.entities-panel").requires("impact.debug.menu", "impact.entity").defines(function() {
    ig.Entity.inject({
        colors: {
            names: "#fff",
            velocities: "#0f0",
            boxes: "#f00"
        },
        draw: function() {
            this.parent();
            ig.Entity._debugShowBoxes && (ig.system.context.strokeStyle = this.colors.boxes, ig.system.context.lineWidth = 1, ig.system.context.strokeRect(ig.system.getDrawPos(this.pos.x.round() - ig.game.screen.x) - 0.5, ig.system.getDrawPos(this.pos.y.round() - ig.game.screen.y) - 0.5, this.size.x * ig.system.scale, this.size.y * ig.system.scale));
            if (ig.Entity._debugShowVelocities) {
                var b = this.pos.x + this.size.x / 2,
                c = this.pos.y + this.size.y / 2;
                this._debugDrawLine(this.colors.velocities, b, c, b + this.vel.x, c + this.vel.y)
            }
            if (ig.Entity._debugShowNames && (this.name && (ig.system.context.fillStyle = this.colors.names, ig.system.context.fillText(this.name, ig.system.getDrawPos(this.pos.x - ig.game.screen.x), ig.system.getDrawPos(this.pos.y - ig.game.screen.y))), "object" == typeof this.target)) for (var d in this.target)(b = ig.game.getEntityByName(this.target[d])) && this._debugDrawLine(this.colors.names, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, b.pos.x + b.size.x / 2, b.pos.y + b.size.y / 2)
        },
        _debugDrawLine: function(b, c, d, f, g) {
            ig.system.context.strokeStyle = b;
            ig.system.context.lineWidth = 1;
            ig.system.context.beginPath();
            ig.system.context.moveTo(ig.system.getDrawPos(c - ig.game.screen.x), ig.system.getDrawPos(d - ig.game.screen.y));
            ig.system.context.lineTo(ig.system.getDrawPos(f - ig.game.screen.x), ig.system.getDrawPos(g - ig.game.screen.y));
            ig.system.context.stroke();
            ig.system.context.closePath()
        }
    });
    ig.Entity._debugEnableChecks = !0;
    ig.Entity._debugShowBoxes = !1;
    ig.Entity._debugShowVelocities = !1;
    ig.Entity._debugShowNames = !1;
    ig.Entity.oldCheckPair = ig.Entity.checkPair;
    ig.Entity.checkPair = function(b, c) {
        ig.Entity._debugEnableChecks && ig.Entity.oldCheckPair(b, c)
    };
    ig.debug.addPanel({
        type: ig.DebugPanel,
        name: "entities",
        label: "Entities",
        options: [{
            name: "Checks & Collisions",
            object: ig.Entity,
            property: "_debugEnableChecks"
        },
        {
            name: "Show Collision Boxes",
            object: ig.Entity,
            property: "_debugShowBoxes"
        },
        {
            name: "Show Velocities",
            object: ig.Entity,
            property: "_debugShowVelocities"
        },
        {
            name: "Show Names & Targets",
            object: ig.Entity,
            property: "_debugShowNames"
        }]
    })
});
ig.baked = !0;
ig.module("impact.debug.maps-panel").requires("impact.debug.menu", "impact.game", "impact.background-map").defines(function() {
    ig.Game.inject({
        loadLevel: function(b) {
            this.parent(b);
            ig.debug.panels.maps.load(this)
        }
    });
    ig.DebugMapsPanel = ig.DebugPanel.extend({
        maps: [],
        mapScreens: [],
        init: function(b, c) {
            this.parent(b, c);
            this.load()
        },
        load: function(b) {
            this.options = [];
            this.panels = [];
            if (!b || !b.backgroundMaps.length) this.container.innerHTML = "<em>No Maps Loaded</em>";
            else {
                this.maps = b.backgroundMaps;
                this.mapScreens = [];
                this.container.innerHTML = "";
                for (b = 0; b < this.maps.length; b++) {
                    var c = this.maps[b],
                    d = new ig.DebugPanel(b, "Layer " + b),
                    f = new ig.$new("strong");
                    f.textContent = b + ": " + c.tiles.path;
                    d.container.appendChild(f);
                    d.addOption(new ig.DebugOption("Enabled", c, "enabled"));
                    d.addOption(new ig.DebugOption("Pre Rendered", c, "preRender"));
                    d.addOption(new ig.DebugOption("Show Chunks", c, "debugChunks"));
                    this.generateMiniMap(d, c, b);
                    this.addPanel(d)
                }
            }
        },
        generateMiniMap: function(b, c, d) {
            var f = ig.system.scale,
            g = ig.$new("canvas"),
            m = g.getContext("2d"),
            q = c.tiles.width * f,
            z = c.tiles.height * f,
            p = q / c.tilesize;
            m.drawImage(c.tiles.data, 0, 0, q, z, 0, 0, p, z / c.tilesize);
            m = ig.$new("canvas");
            m.width = c.width * f;
            m.height = c.height * f;
            var x = m.getContext("2d");
            ig.game.clearColor && (x.fillStyle = ig.game.clearColor, x.fillRect(0, 0, q, z));
            for (z = q = 0; z < c.width; z++) for (var A = 0; A < c.height; A++)(q = c.data[A][z]) && x.drawImage(g, Math.floor((q - 1) * f % p), Math.floor((q - 1) * f / p) * f, f, f, z * f, A * f, f, f);
            g = ig.$new("div");
            g.className = "ig_debug_map_container";
            g.style.width = c.width * f + "px";
            g.style.height = c.height * f + "px";
            p = ig.$new("div");
            p.className = "ig_debug_map_screen";
            p.style.width = ig.system.width / c.tilesize * f - 2 + "px";
            p.style.height = ig.system.height / c.tilesize * f - 2 + "px";
            this.mapScreens[d] = p;
            g.appendChild(m);
            g.appendChild(p);
            b.container.appendChild(g)
        },
        afterRun: function() {
            for (var b = ig.system.scale,
            c = 0; c < this.maps.length; c++) {
                var d = this.maps[c],
                f = this.mapScreens[c];
                if (d && f) {
                    var g = d.scroll.x / d.tilesize,
                    m = d.scroll.y / d.tilesize;
                    d.repeat && (g %= d.width, m %= d.height);
                    f.style.left = g * b + "px";
                    f.style.top = m * b + "px"
                }
            }
        }
    });
    ig.debug.addPanel({
        type: ig.DebugMapsPanel,
        name: "maps",
        label: "Background Maps"
    })
});
ig.baked = !0;
ig.module("impact.debug.graph-panel").requires("impact.debug.menu", "impact.system", "impact.game", "impact.image").defines(function() {
    ig.Game.inject({
        draw: function() {
            ig.graph.beginClock("draw");
            this.parent();
            ig.graph.endClock("draw")
        },
        update: function() {
            ig.graph.beginClock("update");
            this.parent();
            ig.graph.endClock("update")
        },
        checkEntities: function() {
            ig.graph.beginClock("checks");
            this.parent();
            ig.graph.endClock("checks")
        }
    });
    ig.DebugGraphPanel = ig.DebugPanel.extend({
        clocks: {},
        marks: [],
        textY: 0,
        height: 128,
        ms: 64,
        timeBeforeRun: 0,
        init: function(b, c) {
            this.parent(b, c);
            this.mark16ms = (this.height - 16 * (this.height / this.ms)).round();
            this.mark33ms = (this.height - 33 * (this.height / this.ms)).round();
            this.msHeight = this.height / this.ms;
            this.graph = ig.$new("canvas");
            this.graph.width = window.innerWidth;
            this.graph.height = this.height;
            this.container.appendChild(this.graph);
            this.ctx = this.graph.getContext("2d");
            this.ctx.fillStyle = "#444";
            this.ctx.fillRect(0, this.mark16ms, this.graph.width, 1);
            this.ctx.fillRect(0, this.mark33ms, this.graph.width, 1);
            this.addGraphMark("16ms", this.mark16ms);
            this.addGraphMark("33ms", this.mark33ms);
            this.addClock("draw", "Draw", "#13baff");
            this.addClock("update", "Entity Update", "#bb0fff");
            this.addClock("checks", "Entity Checks & Collisions", "#a2e908");
            this.addClock("lag", "System Lag", "#f26900");
            ig.mark = this.mark.bind(this);
            ig.graph = this
        },
        addGraphMark: function(b, c) {
            var d = ig.$new("span");
            d.className = "ig_debug_graph_mark";
            d.textContent = b;
            d.style.top = c.round() + "px";
            this.container.appendChild(d)
        },
        addClock: function(b, c, d) {
            var f = ig.$new("span");
            f.className = "ig_debug_legend_color";
            f.style.backgroundColor = d;
            var g = ig.$new("span");
            g.className = "ig_debug_legend_number";
            g.appendChild(document.createTextNode("0"));
            var m = ig.$new("span");
            m.className = "ig_debug_legend";
            m.appendChild(f);
            m.appendChild(document.createTextNode(c + " ("));
            m.appendChild(g);
            m.appendChild(document.createTextNode("ms)"));
            this.container.appendChild(m);
            this.clocks[b] = {
                description: c,
                color: d,
                current: 0,
                start: Date.now(),
                avg: 0,
                html: g
            }
        },
        beginClock: function(b, c) {
            this.clocks[b].start = Date.now() + (c || 0)
        },
        endClock: function(b) {
            b = this.clocks[b];
            b.current = Math.round(Date.now() - b.start);
            b.avg = 0.8 * b.avg + 0.2 * b.current
        },
        mark: function(b, c) {
            this.active && this.marks.push({
                msg: b,
                color: c || "#fff"
            })
        },
        beforeRun: function() {
            this.endClock("lag");
            this.timeBeforeRun = Date.now()
        },
        afterRun: function() {
            var b = Date.now() - this.timeBeforeRun;
            this.beginClock("lag", Math.max(1E3 / ig.system.fps - b, 0));
            var b = this.graph.width - 1,
            c = this.height;
            this.ctx.drawImage(this.graph, -1, 0);
            this.ctx.fillStyle = "#000";
            this.ctx.fillRect(b, 0, 1, this.height);
            this.ctx.fillStyle = "#444";
            this.ctx.fillRect(b, this.mark16ms, 1, 1);
            this.ctx.fillStyle = "#444";
            this.ctx.fillRect(b, this.mark33ms, 1, 1);
            for (var d in this.clocks) {
                var f = this.clocks[d];
                f.html.textContent = f.avg.toFixed(2);
                if (f.color && 0 < f.current) {
                    this.ctx.fillStyle = f.color;
                    var g = f.current * this.msHeight,
                    c = c - g;
                    this.ctx.fillRect(b, c, 1, g);
                    f.current = 0
                }
            }
            this.ctx.textAlign = "right";
            this.ctx.textBaseline = "top";
            this.ctx.globalAlpha = 0.5;
            for (d = 0; d < this.marks.length; d++) c = this.marks[d],
            this.ctx.fillStyle = c.color,
            this.ctx.fillRect(b, 0, 1, this.height),
            c.msg && (this.ctx.fillText(c.msg, b - 1, this.textY), this.textY = (this.textY + 8) % 32);
            this.ctx.globalAlpha = 1;
            this.marks = []
        }
    });
    ig.debug.addPanel({
        type: ig.DebugGraphPanel,
        name: "graph",
        label: "Performance"
    })
});
ig.baked = !0;
ig.module("impact.debug.debug").requires("impact.debug.entities-panel", "impact.debug.maps-panel", "impact.debug.graph-panel").defines(function() {});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function() {
    ig.SplashLoader = ig.Loader.extend({
        splashDesktop: new ig.Image("media/graphics/splash/desktop/cover.jpg"),
        splashLoad: new ig.Image("media/graphics/splash/desktop/loading_bar.png"),
        splashLoadAfter: new ig.Image("media/graphics/splash/desktop/loading_bar_done.png"),
        angle: 0,
        position: {
            loadX: 84,
            loadY: 500
        },
        init: function(b, c) {
            this.parent(b, c);
            this.splashCarDrifting = new ig.Image("media/graphics/sprites/cars/cars_player_new.png");
            ig.ua.mobile
        },
        end: function() {
            this.parent();
            var b = 0 <= document.URL.indexOf("localhost") ? 500 : 3E3;
            window.setTimeout("ig.system.setGame(MyGame)", b)
        },
        setupCustomAnimation: function() {
            this.customAnim = new ig.Animation(this.customAnim, 0.05, [0, 1, 2, 3, 4, 5]);
            this.customAnim.currentFrame = 0;
            ig.loadingScreen = this;
            ig.loadingScreen.animationTimer = window.setInterval("ig.loadingScreen.animate()", 100)
        },
        animate: function() {
            this.customAnim.currentFrame < this.customAnim.sequence.length ? this.customAnim.currentFrame++:this.customAnim.currentFrame = 0;
            this.customAnim.gotoFrame(this.customAnim.currentFrame)
        },
        draw: function() {
            var b = ig.system.context;
            this._drawStatus += (this.status - this._drawStatus) / 5;
            b.fillStyle = "#000";
            b.fillRect(0, 0, ig.system.width, ig.system.height);
            this.splashDesktop.draw(0, 0);
            this.splashLoad.draw(this.position.loadX, this.position.loadY);
            if (0 != this.splashLoadAfter.width) {
                var c = this.splashLoadAfter.width * this._drawStatus;
                0 > c && (c = 0.1);
                c > this.splashLoadAfter.width && (c = this.splashLoadAfter.width);
                b.drawImage(this.splashLoadAfter.data, 0, 0, c, this.splashLoadAfter.height, this.position.loadX, this.position.loadY, c, this.splashLoadAfter.height);
                b.save();
                this.angle = 90;
                b.translate(c, this.position.loadY);
                b.rotate(this.angle * Math.PI / 180);
                b.translate( - c, -this.position.loadY);
                b.drawImage(this.splashCarDrifting.data, 150, 0, 75, 138, c + 5, this.position.loadY - 90, 38, 70);
                b.restore()
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function() {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(b) {
        for (var c = 0; c < this.length; ++c) if (this[c] === b) return c;
        return - 1
    });
    ig.Entity.prototype.tweens = [];
    ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
    ig.Entity.prototype.update = function() {
        this._preTweenUpdate();
        if (0 < this.tweens.length) {
            for (var b = [], c = 0; c < this.tweens.length; c++) this.tweens[c].update(),
            this.tweens[c].complete || b.push(this.tweens[c]);
            this.tweens = b
        }
    };
    ig.Entity.prototype.tween = function(b, c, d) {
        b = new ig.Tween(this, b, c, d);
        this.tweens.push(b);
        return b
    };
    ig.Entity.prototype.pauseTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].pause()
    };
    ig.Entity.prototype.resumeTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].resume()
    };
    ig.Entity.prototype.stopTweens = function(b) {
        for (var c = 0; c < this.tweens.length; c++) this.tweens[c].stop(b)
    };
    ig.Tween = function(b, c, d, f) {
        var g = {},
        m = {},
        q = {},
        z = 0,
        p = !1,
        x = !1,
        A = !1;
        this.duration = d;
        this.paused = this.complete = !1;
        this.easing = ig.Tween.Easing.Linear.EaseNone;
        this.onComplete = !1;
        this.loop = this.delay = 0;
        this.loopCount = -1;
        ig.merge(this, f);
        this.loopNum = this.loopCount;
        this.chain = function(b) {
            A = b
        };
        this.initEnd = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else for (subprop in c[b]) d[b] || (d[b] = {}),
            this.initEnd(subprop, c[b], d[b])
        };
        this.initStart = function(b, c, d, f) {
            if ("object" !== typeof d[b])"undefined" !== typeof c[b] && (f[b] = d[b]);
            else for (subprop in d[b]) f[b] || (f[b] = {}),
            "undefined" !== typeof c[b] && this.initStart(subprop, c[b], d[b], f[b])
        };
        this.start = function() {
            this.paused = this.complete = !1;
            this.loopNum = this.loopCount;
            z = 0; - 1 == b.tweens.indexOf(this) && b.tweens.push(this);
            x = !0;
            p = new ig.Timer;
            for (var d in c) this.initEnd(d, c, m);
            for (d in m) this.initStart(d, m, b, g),
            this.initDelta(d, q, b, m)
        };
        this.initDelta = function(b, c, d, f) {
            if ("object" !== typeof f[b]) c[b] = f[b] - d[b];
            else for (subprop in f[b]) c[b] || (c[b] = {}),
            this.initDelta(subprop, c[b], d[b], f[b])
        };
        this.propUpdate = function(b, c, d, f, g) {
            if ("object" !== typeof d[b]) c[b] = "undefined" != typeof d[b] ? d[b] + f[b] * g: c[b];
            else for (subprop in d[b]) this.propUpdate(subprop, c[b], d[b], f[b], g)
        };
        this.propSet = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else for (subprop in c[b]) d[b] || (d[b] = {}),
            this.propSet(subprop, c[b], d[b])
        };
        this.update = function() {
            if (!x) return ! 1;
            if (this.delay) {
                if (p.delta() < this.delay) return;
                this.delay = 0;
                p.reset()
            }
            if (this.paused || this.complete) return ! 1;
            var c = (p.delta() + z) / this.duration,
            c = 1 < c ? 1 : c,
            d = this.easing(c);
            for (property in q) this.propUpdate(property, b, g, q, d);
            if (1 <= c) {
                if (0 == this.loopNum || !this.loop) {
                    this.complete = !0;
                    if (this.onComplete) this.onComplete();
                    A && A.start();
                    return ! 1
                }
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in g) this.propSet(property, g, b);
                    z = 0;
                    p.reset(); - 1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    c = {};
                    d = {};
                    ig.merge(c, m);
                    ig.merge(d, g);
                    ig.merge(g, c);
                    ig.merge(m, d);
                    for (property in m) this.initDelta(property, q, b, m);
                    z = 0;
                    p.reset(); - 1 != this.loopNum && this.loopNum--
                }
            }
        };
        this.pause = function() {
            this.paused = !0;
            z += p.delta()
        };
        this.resume = function() {
            this.paused = !1;
            p.reset()
        };
        this.stop = function(b) {
            b && (this.loop = this.complete = this.paused = !1, z += d, this.update());
            this.complete = !0
        }
    };
    ig.Tween.Loop = {
        Revert: 1,
        Reverse: 2
    };
    ig.Tween.Easing = {
        Linear: {},
        Quadratic: {},
        Cubic: {},
        Quartic: {},
        Quintic: {},
        Sinusoidal: {},
        Exponential: {},
        Circular: {},
        Elastic: {},
        Back: {},
        Bounce: {}
    };
    ig.Tween.Easing.Linear.EaseNone = function(b) {
        return b
    };
    ig.Tween.Easing.Quadratic.EaseIn = function(b) {
        return b * b
    };
    ig.Tween.Easing.Quadratic.EaseOut = function(b) {
        return - b * (b - 2)
    };
    ig.Tween.Easing.Quadratic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b: -0.5 * (--b * (b - 2) - 1)
    };
    ig.Tween.Easing.Cubic.EaseIn = function(b) {
        return b * b * b
    };
    ig.Tween.Easing.Cubic.EaseOut = function(b) {
        return--b * b * b + 1
    };
    ig.Tween.Easing.Cubic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b: 0.5 * ((b -= 2) * b * b + 2)
    };
    ig.Tween.Easing.Quartic.EaseIn = function(b) {
        return b * b * b * b
    };
    ig.Tween.Easing.Quartic.EaseOut = function(b) {
        return - (--b * b * b * b - 1)
    };
    ig.Tween.Easing.Quartic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b: -0.5 * ((b -= 2) * b * b * b - 2)
    };
    ig.Tween.Easing.Quintic.EaseIn = function(b) {
        return b * b * b * b * b
    };
    ig.Tween.Easing.Quintic.EaseOut = function(b) {
        return (b -= 1) * b * b * b * b + 1
    };
    ig.Tween.Easing.Quintic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b * b: 0.5 * ((b -= 2) * b * b * b * b + 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseIn = function(b) {
        return - Math.cos(b * Math.PI / 2) + 1
    };
    ig.Tween.Easing.Sinusoidal.EaseOut = function(b) {
        return Math.sin(b * Math.PI / 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseInOut = function(b) {
        return - 0.5 * (Math.cos(Math.PI * b) - 1)
    };
    ig.Tween.Easing.Exponential.EaseIn = function(b) {
        return 0 == b ? 0 : Math.pow(2, 10 * (b - 1))
    };
    ig.Tween.Easing.Exponential.EaseOut = function(b) {
        return 1 == b ? 1 : -Math.pow(2, -10 * b) + 1
    };
    ig.Tween.Easing.Exponential.EaseInOut = function(b) {
        return 0 == b ? 0 : 1 == b ? 1 : 1 > (b *= 2) ? 0.5 * Math.pow(2, 10 * (b - 1)) : 0.5 * ( - Math.pow(2, -10 * (b - 1)) + 2)
    };
    ig.Tween.Easing.Circular.EaseIn = function(b) {
        return - (Math.sqrt(1 - b * b) - 1)
    };
    ig.Tween.Easing.Circular.EaseOut = function(b) {
        return Math.sqrt(1 - --b * b)
    };
    ig.Tween.Easing.Circular.EaseInOut = function(b) {
        return 1 > (b /= 0.5) ? -0.5 * (Math.sqrt(1 - b * b) - 1) : 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
    };
    ig.Tween.Easing.Elastic.EaseIn = function(b) {
        var c, d = 0.1,
        f = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        f || (f = 0.3); ! d || 1 > d ? (d = 1, c = f / 4) : c = f / (2 * Math.PI) * Math.asin(1 / d);
        return - (d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / f))
    };
    ig.Tween.Easing.Elastic.EaseOut = function(b) {
        var c, d = 0.1,
        f = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        f || (f = 0.3); ! d || 1 > d ? (d = 1, c = f / 4) : c = f / (2 * Math.PI) * Math.asin(1 / d);
        return d * Math.pow(2, -10 * b) * Math.sin(2 * (b - c) * Math.PI / f) + 1
    };
    ig.Tween.Easing.Elastic.EaseInOut = function(b) {
        var c, d = 0.1,
        f = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        f || (f = 0.3); ! d || 1 > d ? (d = 1, c = f / 4) : c = f / (2 * Math.PI) * Math.asin(1 / d);
        return 1 > (b *= 2) ? -0.5 * d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / f) : 0.5 * d * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / f) + 1
    };
    ig.Tween.Easing.Back.EaseIn = function(b) {
        return b * b * (2.70158 * b - 1.70158)
    };
    ig.Tween.Easing.Back.EaseOut = function(b) {
        return (b -= 1) * b * (2.70158 * b + 1.70158) + 1
    };
    ig.Tween.Easing.Back.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * (3.5949095 * b - 2.5949095) : 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2)
    };
    ig.Tween.Easing.Bounce.EaseIn = function(b) {
        return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - b)
    };
    ig.Tween.Easing.Bounce.EaseOut = function(b) {
        return (b /= 1) < 1 / 2.75 ? 7.5625 * b * b: b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375
    };
    ig.Tween.Easing.Bounce.EaseInOut = function(b) {
        return 0.5 > b ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * b) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * b - 1) + 0.5
    }
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function() {
    ig.UrlParameters = ig.Class.extend({
        init: function() {
            switch (getQueryVariable("iphone")) {
            case "true":
                ig.ua.iPhone = !0,
                console.log("iPhone mode")
            }
            var b = getQueryVariable("webview");
            if (b) switch (b) {
            case "true":
                ig.ua.is_uiwebview = !0,
                console.log("webview mode")
            }
            if (b = getQueryVariable("debug")) switch (b) {
            case "true":
                ig.game.showDebugMenu(),
                console.log("debug mode")
            }
            switch (getQueryVariable("view")) {
            case "stats":
                ig.game.resetPlayerStats(),
                ig.game.endGame()
            }
            getQueryVariable("ad")
        }
    })
});
ig.baked = !0;
ig.module("plugins.jukebox").defines(function() {
    ig.Jukebox = ig.Class.extend({
        init: function() {
            this.candidate1 = new jukebox.Player({
                resources: ["media/audio/bgm/candidate1Mobile.mp3", "media/audio/bgm/candidate1Mobile.ogg"],
                autoplay: "music",
                spritemap: {
                    music: {
                        start: 0,
                        end: 22,
                        loop: !0
                    }
                }
            })
        }
    })
});
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function() {
    ig.Director = ig.Class.extend({
        init: function(b, c) {
            this.game = b;
            this.levels = [];
            this.currentLevel = 0;
            this.append(c)
        },
        loadLevel: function(b) {
            for (key in dynamicClickableEntityDivs) ig.game.hideOverlay([key]);
            this.currentLevel = b;
            this.game.loadLevel(this.levels[b]);
            return ! 0
        },
        loadLevelWithoutEntities: function(b) {
            this.currentLevel = b;
            this.game.loadLevelWithoutEntities(this.levels[b]);
            return ! 0
        },
        append: function(b) {
            newLevels = [];
            return "object" === typeof b ? (b.constructor === [].constructor ? newLevels = b: newLevels[0] = b, this.levels = this.levels.concat(newLevels), !0) : !1
        },
        nextLevel: function() {
            return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
        },
        previousLevel: function() {
            return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
        },
        jumpTo: function(b) {
            var c = null;
            for (i = 0; i < this.levels.length; i++) this.levels[i] == b && (c = i);
            return 0 <= c ? this.loadLevel(c) : !1
        },
        firstLevel: function() {
            return this.loadLevel(0)
        },
        lastLevel: function() {
            return this.loadLevel(this.levels.length - 1)
        },
        reloadLevel: function() {
            return this.loadLevel(this.currentLevel)
        }
    })
});
ig.baked = !0;
ig.module("plugins.impact-storage").requires("impact.game").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return ! ig.Storage.instance ? null: ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        get: function(b) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch(c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function(b) {
            return~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !! this.get(b)
        },
        key: function(b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        },
        set: function(b, c) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch(d) {
                d == QUOTA_EXCEEDED_ERR && console.log("localStorage quota exceeded")
            }
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        remove: function(b) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(b)
        },
        clear: function() {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.scale").requires("impact.entity").defines(function() {
    ig.Entity.inject({
        scale: {
            x: 1,
            y: 1
        },
        _offset: {
            x: 0,
            y: 0
        },
        _scale: {
            x: 1,
            y: 1
        },
        _size: {
            x: 0,
            y: 0
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this._offset.x = this.offset.x;
            this._offset.y = this.offset.y;
            this._size.x = this.size.x;
            this._size.y = this.size.y;
            this.setScale(this.scale.x, this.scale.y)
        },
        draw: function() {
            var b = ig.system.context;
            b.save();
            b.translate(ig.system.getDrawPos(this.pos.x.round() - this.offset.x - ig.game.screen.x), ig.system.getDrawPos(this.pos.y.round() - this.offset.y - ig.game.screen.y));
            b.scale(this._scale.x, this._scale.y);
            null != this.currentAnim && this.currentAnim.draw(0, 0);
            b.restore()
        },
        setScale: function(b, c) {
            var d = this.size.x,
            f = this.size.y;
            this.scale.x = b || this.scale.x;
            this.scale.y = c || this.scale.y;
            this._scale.x = this.scale.x / ig.system.scale;
            this._scale.y = this.scale.y / ig.system.scale;
            this.offset.x = this._offset.x * this._scale.x;
            this.offset.y = this._offset.y * this._scale.y;
            this.size.x = this._size.x * this._scale.x;
            this.size.y = this._size.y * this._scale.y;
            this.pos.x += (d - this.size.x) / 2;
            this.pos.y += (f - this.size.y) / 2
        }
    })
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function() {
    ig.BrandingSplash = ig.Class.extend({
        init: function() {
            ig.game.spawnEntity(EntityBranding, 0, 0)
        }
    });
    EntityBranding = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        splash_320x480: new ig.AnimationSheet("branding/splash_320x480.png", 320, 200),
        splash_480x640: new ig.AnimationSheet("branding/splash_480x640.png", 480, 240),
        init: function(b, c, d) {
            this.parent(b, c, d);
            320 >= ig.system.width ? (this.size.x = 320, this.size.y = 200, this.anims.idle = new ig.Animation(this.splash_320x480, 0, [0], !0)) : (this.size.x = 480, this.size.y = 240, this.anims.idle = new ig.Animation(this.splash_480x640, 0, [0], !0));
            this.pos.x = (ig.system.width - this.size.x) / 2;
            this.pos.y = -this.size.y - 200;
            this.endPosY = (ig.system.height - this.size.y) / 2;
            b = this.tween({
                pos: {
                    y: this.endPosY
                }
            },
            0.5, {
                easing: ig.Tween.Easing.Bounce.EaseIn
            });
            c = this.tween({},
            2.5, {
                onComplete: function() {
                    ig.game.director.loadLevel(ig.game.director.currentLevel)
                }
            });
            b.chain(c);
            b.start();
            this.currentAnim = this.anims.idle
        },
        createClickableLayer: function() {
            console.log("Build clickable layer");
            this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, !0)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs) if (k == b) return ! 0;
            return ! 1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "branding/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, f) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var m = window.innerHeight / mobileHeight,
                q = window.innerWidth / mobileWidth;
                $("#" + g.id).css("left", this.pos.x * q);
                $("#" + g.id).css("top", this.pos.y * m);
                $("#" + g.id).css("width", this.size.x * q);
                $("#" + g.id).css("height", this.size.y * m)
            } else m = w / 2 - destW / 2,
            q = h / 2 - destH / 2,
            console.log(m, q),
            $("#" + g.id).css("left", m + this.pos.x * multiplier),
            $("#" + g.id).css("top", q + this.pos.y * multiplier),
            $("#" + g.id).css("width", this.size.x * multiplier),
            $("#" + g.id).css("height", this.size.y * multiplier);
            f ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        draw: function() {
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            this.parent()
        }
    })
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity").defines(function() {
    EntityBrandingLogoPlaceholder = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        init: function(b, c, d) {
            this.parent(b, c, d);
            if (d) switch (console.log("settings found ... using that div layer name"), b = d.div_layer_name, console.log("settings.centralize:", d.centralize), d.centralize) {
            case "true":
                console.log("centralize true");
                centralize = !0;
                break;
            case "false":
                console.log("centralize false");
                centralize = !1;
                break;
            default:
                console.log("default ... centralize false"),
                centralize = !1
            } else b = "branding-logo",
            centralize = !1;
            if ("undefined" == typeof wm) {
                if (_SETTINGS.Branding.Logo.Enabled) try {
                    ig.game.spawnEntity(EntityBrandingLogo, this.pos.x, this.pos.y, {
                        div_layer_name: b,
                        centralize: centralize
                    })
                } catch(f) {
                    console.log(f)
                }
                this.kill()
            }
        }
    })
});
this.START_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.branding-logo").requires("impact.entity").defines(function() {
    EntityBrandingLogo = ig.Entity.extend({
        gravityFactor: 0,
        logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        size: {
            x: 32,
            y: 32
        },
        zIndex: 10001,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (_SETTINGS.Branding.Logo.Enabled ? (this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, d && d.centralize && (this.pos.x = ig.system.width / 2 - this.size.x / 2, console.log("centralize true ... centering branded logo ..."))) : this.kill());
            this.anims.idle = new ig.Animation(this.logo, 0, [0], !0);
            this.currentAnim = this.anims.idle;
            d ? (console.log("branding settings found ... using that div layer name"), b = d.div_layer_name) : b = "branding-logo";
            this.checkClickableLayer(b, _SETTINGS.Branding.Logo.Link, !0);
            console.log("branding logo spawed ...")
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs) if (k == b) return ! 0;
            return ! 1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "branding/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, f) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var m = window.innerHeight / mobileHeight,
                q = window.innerWidth / mobileWidth;
                $("#" + g.id).css("left", this.pos.x * q);
                $("#" + g.id).css("top", this.pos.y * m);
                $("#" + g.id).css("width", this.size.x * q);
                $("#" + g.id).css("height", this.size.y * m)
            } else m = w / 2 - destW / 2,
            q = h / 2 - destH / 2,
            console.log(m, q),
            $("#" + g.id).css("left", m + this.pos.x * multiplier),
            $("#" + g.id).css("top", q + this.pos.y * multiplier),
            $("#" + g.id).css("width", this.size.x * multiplier),
            $("#" + g.id).css("height", this.size.y * multiplier);
            f ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
this.END_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.button-more-games").requires("impact.entity").defines(function() {
    EntityButtonMoreGames = ig.Entity.extend({
        gravityFactor: 0,
        logo: new ig.AnimationSheet("media/graphics/sprites/btn_more_games.png", 64, 66),
        size: {
            x: 64,
            y: 66
        },
        zIndex: 750,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (_SETTINGS.MoreGames.Enabled ? (d ? (console.log("settings found ... using that div layer name"), b = d.div_layer_name) : b = "more-games", console.log("div_layer_name:", b), this.checkClickableLayer(b, _SETTINGS.MoreGames.Link, !0)) : this.kill());
            this.anims.idle = new ig.Animation(this.logo, 0, [0], !0);
            this.currentAnim = this.anims.idle
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs) if (k == b) return console.log("clickable layer already exists ..."),
            !0;
            console.log("doesnt exist yet ...");
            return ! 1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, f) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var m = window.innerHeight / mobileHeight,
                q = window.innerWidth / mobileWidth;
                $("#" + g.id).css("left", this.pos.x * q);
                $("#" + g.id).css("top", this.pos.y * m);
                $("#" + g.id).css("width", this.size.x * q);
                $("#" + g.id).css("height", this.size.y * m)
            } else m = document.getElementById("game").offsetLeft,
            q = document.getElementById("game").offsetTop,
            $("#" + g.id).css("left", m + this.pos.x * multiplier),
            $("#" + g.id).css("top", q + this.pos.y * multiplier),
            $("#" + g.id).css("width", this.size.x * multiplier),
            $("#" + g.id).css("height", this.size.y * multiplier);
            f ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-shield").requires("impact.entity").defines(function() {
    EntityOpeningShield = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        move: 0,
        mIconAnim: 0,
        shieldAnim: 0,
        titleAnim: 0,
        shieldImage: new ig.Image("media/graphics/opening/shield.png"),
        mIconImage: new ig.Image("media/graphics/opening/m_icon.png"),
        titleImage: new ig.Image("media/graphics/opening/title.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            this.initTimer = new ig.Timer(0.1);
            try {
                ig.game.openingSound.play()
            } catch(b) {
                console.log(b)
            }
        },
        update: function() {
            this.parent();
            this.updateOriginalShieldOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawOriginalShieldOpening())
        },
        updateOriginalShieldOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.sheildTimer = new ig.Timer(0.05));
            this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++, this.sheildTimer.reset()) : (this.sheildTimer = null, this.moveTimer = new ig.Timer(0.0010), this.mIconTimer = new ig.Timer(0.05), this.titleTimer = new ig.Timer(0.15)));
            this.moveTimer && 0 < this.moveTimer.delta() && (this.move += 0.3, this.moveTimer.reset());
            this.mIconTimer && 0 < this.mIconTimer.delta() && (12 > this.mIconAnim ? (this.mIconAnim++, this.moveTimer.reset()) : this.mIconTimer = null);
            this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++, this.titleTimer.reset()) : (this.titleTimer = null, this.nextLevelTimer = new ig.Timer(1)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawOriginalShieldOpening: function() {
            if (this.moveTimer) {
                var b = ig.system.context;
                b.save();
                var c = ig.system.width / 2,
                d = ig.system.height / 2;
                b.translate(c, d);
                b.rotate(this.move * Math.PI / 180);
                b.beginPath();
                b.moveTo(0, 0);
                for (var f = 0,
                g = 1; 48 >= g; g += 1) b.lineTo(0 + 800 * Math.cos(2 * g * Math.PI / 48), 0 + 800 * Math.sin(2 * g * Math.PI / 48)),
                f++,
                2 == f && (f = 0, b.lineTo(0, 0));
                b.translate( - c, -d);
                c = b.createRadialGradient(c, d, 100, c, d, 250);
                c.addColorStop(0, "rgba(255,255,255,0.1)");
                c.addColorStop(1, "rgba(0,0,0,0)");
                b.fillStyle = c;
                b.fill();
                b.restore()
            }
            this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768);
            this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim, 166, 160), this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.commons.in-game").requires("impact.entity").defines(function() {
    EntityInGame = ig.Entity.extend({
        zIndex: 1,
        maxVel: {
            x: 1E3,
            y: 1E3
        },
        initialScale: {
            x: 1,
            y: 1
        },
        targetScale: {
            x: 1,
            y: 1
        },
        currentScale: {
            x: 1,
            y: 1
        },
        scaleIncrements: 0.025,
        scaleAxis: {
            xAxis: !1,
            yAxis: !1
        },
        debug: !1,
        name: "ingame.js",
        scaleComplete: {
            x: !1,
            y: !1
        },
        TOTALMONEYKEY: "TOTALMONEY",
        CAR1KEY: "CAR1KEY",
        CAR2KEY: "CAR2KEY",
        CAR3KEY: "CAR3KEY",
        CAR4KEY: "CAR4KEY",
        CAR5KEY: "CAR5KEY",
        CAR6KEY: "CAR6KEY",
        CAR7KEY: "CAR7KEY",
        CAR8KEY: "CAR8KEY",
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.entityTimer = new ig.Timer
        },
        stopSound: function(b) {
            if (!ig.game.globalMute) switch (b) {
            case "raceCar":
                ig.game.raceCarSound.stop();
                break;
            case "siren":
                ig.game.sirenSound.stop()
            }
        },
        playSound: function(b) {
            if (!ig.game.globalMute) switch (b) {
            case "powerup":
                ig.game.powerUpSound.play();
                break;
            case "explode":
                ig.game.explosionSound.play();
                break;
            case "boost":
                ig.game.boostSound.play();
                break;
            case "siren":
                ig.game.sirenSound.play();
                break;
            case "raceCar":
                ig.game.raceCarSound.play();
                break;
            case "carOpen":
                ig.game.openSound.play();
                break;
            case "carClose":
                ig.game.closeSound.play();
                break;
            case "wow":
                ig.game.wowSound.play();
                break;
            case "poor":
                ig.game.poorSound.play()
            }
        },
        pauseBGM: function(b) {
            if (!ig.game.globalMute) switch (b) {
            case "candidate1":
                ig.ua.mobile ? ig.game.song1PausePosition = ig.game.jukebox.candidate1.pause() : ig.music.pause();
                break;
            case "candidate2":
                ig.ua.mobile ? ig.game.song2PausePosition = ig.game.jukebox.candidate2.pause() : ig.music.pause()
            }
        },
        playBGM: function(b) {
            if (!ig.game.globalMute) switch (b) {
            case "candidate1":
                ig.ua.mobile ? ig.game.jukebox.candidate1.isPlaying || (ig.game.song1PausePosition || (ig.game.jukebox.candidate1.resume(0), ig.game.song1PausePosition && this.pauseBGM("candidate1")), ig.game.jukebox.candidate1.resume(ig.game.song1PausePosition), ig.game.currentJukeBoxTrack = "candidate1") : 0 == ig.music.currentIndex ? ig.music.next() : ig.music.play("candidate1");
                break;
            case "candidate2":
                ig.ua.mobile ? (ig.game.jukebox.candidate1.isPlaying && this.pauseBGM("candidate1"), ig.game.jukebox.candidate2.isPlaying || (ig.game.song2PausePosition || (ig.game.jukebox.candidate2.resume(0), ig.game.song2PausePosition && this.pauseBGM("candidate2")), ig.game.jukebox.candidate2.resume(ig.game.song2PausePosition), ig.game.currentJukeBoxTrack = "candidate2")) : (1 == ig.music.currentIndex ? ig.music.next() : ig.music.play("candidate2"), console.log(ig.music.currentIndex))
            }
        },
        checkRotate: function(b, c, d, f) {
            b.translate(c, d);
            b.rotate(f)
        },
        setDebug: function(b) {
            this.debug = b
        },
        checkObjectForNull: function(b) {
            return null == b || void 0 == b ? !0 : !1
        },
        _checkScale: function() {
            this.scaleAxis.yAxis && this.scaleAxis.xAxis ? this.setScale(this.currentScale.x, this.currentScale.y) : this.scaleAxis.yAxis ? this.setScale(1, this.currentScale.y) : this.scaleAxis.xAxis ? this.setScale(this.currentScale.x, 1) : this.setScale(this.currentScale.x, this.currentScale.y)
        },
        onCompleteScaleX: function() {},
        onCompleteScaleY: function() {},
        checkIfNeedToScale: function() {
            this.debug && (console.log(this.name), console.log("initial:" + this.initialScale.x + ":" + this.initialScale.y), console.log("target:" + this.targetScale.x + ":" + this.targetScale.y), console.log("current:" + this.currentScale.x + ":" + this.currentScale.y));
            if (this.targetScale.x > this.initialScale.x) if (this.currentScale.x < this.targetScale.x) this.currentScale.x += this.scaleIncrements;
            else this.onCompleteScaleX();
            else if (this.currentScale.x > this.targetScale.x) this.currentScale.x -= this.scaleIncrements;
            else this.onCompleteScaleX();
            this._checkScale();
            if (this.targetScale.y > this.initialScale.y) if (this.currentScale.y < this.targetScale.y) this.currentScale.y += this.scaleIncrements;
            else this.onCompleteScaleY();
            else if (this.currentScale.y > this.targetScale.y) this.currentScale.y -= this.scaleIncrements;
            else this.onCompleteScaleY();
            this._checkScale()
        },
        getCurrentMousePos: function() {
            if (ig.ua.mobile) var b = ig.input.mouse.x / widthRatio + ig.game.screen.x,
            c = ig.input.mouse.y / heightRatio + ig.game.screen.y;
            else b = ig.input.mouse.x / multiplier + ig.game.screen.x,
            c = ig.input.mouse.y / multiplier + ig.game.screen.y;
            return {
                mouseX: b,
                mouseY: c
            }
        },
        checkOverlapWithPointer: function() {
            if (ig.ua.mobile) var b = ig.input.mouse.x / widthRatio + ig.game.screen.x,
            c = ig.input.mouse.y / heightRatio + ig.game.screen.y;
            else b = ig.input.mouse.x / multiplier + ig.game.screen.x,
            c = ig.input.mouse.y / multiplier + ig.game.screen.y;
            return b > this.pos.x + this.size.x || b < this.pos.x || c > this.pos.y + this.size.y || c < this.pos.y ? !1 : !0
        },
        supports_local_storage: function() {
            try {
                return localStorage.setItem("test", "test"),
                localStorage.removeItem("test"),
                "localStorage" in window && null !== window.localStorage
            } catch(b) {
                return ! 1
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-kitty").requires("game.entities.commons.in-game").defines(function() {
    EntityOpeningKitty = EntityInGame.extend({
        size: {
            x: 48,
            y: 48
        },
        kittyAnim: -1,
        kittyImage: new ig.Image("media/graphics/opening/kitty.png"),
        kittyTitleImage: new ig.Image("media/graphics/opening/kittytitle.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.pauseBGM("candidate1")
        },
        ready: function() {
            this.initTimer = new ig.Timer(0.1);
            try {
                ig.game.kittyopeningSound.play()
            } catch(b) {
                console.log(b)
            }
        },
        update: function() {
            this.parent();
            this.updateKittyOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening())
        },
        updateKittyOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.kittyTimer = new ig.Timer(0.15));
            this.kittyTimer && 0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++, this.kittyTimer.reset()) : (this.kittyTimer = null, this.nextLevelTimer = new ig.Timer(2)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawKittyOpening: function() {
            var b = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
            b.addColorStop(0, "#ffed94");
            b.addColorStop(1, "#ffcd85");
            ig.system.context.fillStyle = b;
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            var b = ig.system.width / 2 - this.kittyImage.width / 8,
            c = ig.system.height / 2 - this.kittyImage.height / 4;
            0 >= b && (b = 1);
            0 >= c && (c = 1);
            var d = ig.system.width / 2 - this.kittyTitleImage.width / 2,
            f = ig.system.height / 2 + this.kittyImage.height / 4 + 10;
            0 >= d && (d = 1);
            0 >= f && (f = 1);
            this.kittyImage.drawTile(b, c, this.kittyAnim, 218, 325);
            this.kittyTitleImage.drawTile(d, f, this.kittyAnim, 380, 37);
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function() {
    EntityPointer = ig.Entity.extend({
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.B,
        isClicking: !1,
        isHovering: !1,
        firstClick: !1,
        isReleased: !1,
        hoveringItem: null,
        objectArray: [],
        ignorePause: !0,
        zIndex: 5E3,
        name: "pointer",
        check: function(b) {
            this.objectArray.push(b)
        },
        clickObject: function(b) {
            this.isClicking && !this.firstClick && "function" == typeof b.clicked && (b.clicked(), this.firstClick = !0);
            this.firstClick && !this.isReleased && "function" == typeof b.clicking && b.clicking();
            this.firstClick && this.isReleased && "function" == typeof b.released && (b.released(), this.firstClick = !1)
        },
        update: function() {
            if (ig.ua.mobile) {
                var b = window.innerHeight / mobileHeight;
                this.pos.x = ig.input.mouse.x / (window.innerWidth / mobileWidth) - this.size.x / 2 + ig.game.screen.x;
                this.pos.y = ig.input.mouse.y / b - this.size.y / 2
            } else this.pos.x = ig.input.mouse.x / multiplier - this.size.x / 2 + ig.game.screen.x,
            this.pos.y = ig.input.mouse.y / multiplier - this.size.y / 2;
            var b = null,
            c = -1;
            for (a = this.objectArray.length - 1; - 1 < a; a--) this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex, b = this.objectArray[a]);
            null != b ? ("close" == b.name && console.log(b), null != this.hoveringItem && "function" == typeof this.hoveringItem.idle && this.hoveringItem != b && this.hoveringItem.idle(), this.hoveringItem = b, this.clickObject(b), this.objectArray = []) : null != this.hoveringItem && "function" == typeof this.hoveringItem.idle && (this.hoveringItem.idle(), this.hoveringItem = null);
            this.firstClick = !1;
            this.isClicking = ig.input.pressed("click");
            this.isReleased = ig.input.released("click")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function() {
    EntityPointerSelector = EntityPointer.extend({
        zIndex: 1E3,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        size: {
            x: 20,
            y: 20
        },
        init: function(b, c, d) {
            this.parent(b, c, d)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.select").requires("impact.entity").defines(function() {
    EntitySelect = ig.Entity.extend({
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.NEVER,
        canSelect: !1,
        canSelectTimerDuration: 0.35,
        zIndex: 99999,
        isHovering: !1,
        isSelected: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs) if (k == b) return ! 0;
            return ! 1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, f) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("width", this.size.x * multiplier);
            $("#" + g.id).css("height", this.size.y * multiplier);
            $("#" + g.id).css("position", "absolute");
            var m = w / 2 - destW / 2,
            q = h / 2 - destH / 2;
            w == mobileWidth ? ($("#" + g.id).css("left", this.pos.x), $("#" + g.id).css("top", this.pos.y)) : ($("#" + g.id).css("left", m + this.pos.x * multiplier), $("#" + g.id).css("top", q + this.pos.y * multiplier));
            f ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = $("#" + g.id).width();
            dynamicClickableEntityDivs[b].height = $("#" + g.id).height();
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        hovered: function() {
            this.isHovering = !0;
            this.dehoverOthers()
        },
        dehoverOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isHovering = !1)
        },
        deselectOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isSelected = !1)
        },
        update: function() {
            this.parent();
            this.canSelectTimer && 0 < this.canSelectTimer.delta() && (this.canSelect = !0, this.canSelectTimer = null)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function() {
    LevelOpening = {
        entities: [{
            type: "EntityOpeningKitty",
            x: 504,
            y: 208
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.commons.screen").requires("game.entities.commons.in-game").defines(function() {
    EntityScreen = EntityInGame.extend({
        size: {
            x: 48,
            y: 48
        },
        zIndex: 0,
        init: function(b, c, d) {
            this.parent(b, c, d)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.commons.button").requires("game.entities.commons.in-game").defines(function() {
    EntityButton = EntityInGame.extend({
        size: {
            x: 211,
            y: 43
        },
        click: !1,
        zIndex: 12,
        release: !1,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent();
            this.clickTimer && 0.1 < this.clickTimer.delta() && (this.setScale(1, 1), this.clickTimer = null, this.redirect())
        },
        redirect: function() {},
        clicked: function() {
            this.debug && console.log(this.name + " clicked");
            this.click = !0;
            this.release = !1
        },
        released: function() {
            this.click = !1;
            this.release = !0
        },
        checkClickOnPause: function() {
            ig.game.paused && this.checkOverlapWithPointer() && (ig.input.pressed("click") ? this.clicked() : ig.input.released("click") ? this.released() : this.click = !1)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-play").requires("game.entities.commons.button").defines(function() {
    EntityButtonPlay = EntityButton.extend({
        size: {
            x: 143,
            y: 43
        },
        animSheet: new ig.AnimationSheet("media/graphics/sprites/buttons/game-buttons.png", 211, 43),
        name: "playButton",
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [6])
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-mute").requires("game.entities.commons.button").defines(function() {
    EntityButtonMute = EntityButton.extend({
        size: {
            x: 143,
            y: 43
        },
        animSheet: new ig.AnimationSheet("media/graphics/sprites/buttons/game-buttons.png", 211, 43),
        name: "muteButton",
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [9]);
            this.addAnim("mute", 1, [10]);
            this.currentAnim = ig.game.globalMute ? this.anims.mute.rewind() : this.anims.idle.rewind()
        },
        clicked: function() {
            ig.game.sfxOn && ig.game.bgmOn && !ig.game.globalMute ? (this.currentAnim = this.anims.mute.rewind(), ig.game.mute(), ig.game.globalMute = !0) : (ig.game.globalMute = !1, this.currentAnim = this.anims.idle.rewind(), ig.game.unmute());
            this.setScale(0.9, 0.9);
            this.clickTimer = new ig.Timer
        }
    })
});
ig.baked = !0;
ig.module("game.entities.mainmenu.screen-splash-menu").requires("game.entities.commons.screen", "game.entities.buttons.button-play", "game.entities.buttons.button-mute").defines(function() {
    EntityScreenSplashMenu = EntityScreen.extend({
        size: {
            x: 48,
            y: 48
        },
        zIndex: 0,
        spawnPositions: {
            playButtonX: 24,
            playButtonY: 510
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || (this.playBGM("candidate1"), null == this.playButton && (this.playButton = ig.game.spawnEntity(EntityButtonPlay, -272, this.spawnPositions.playButtonY), this.playButton.tween({
                pos: {
                    x: this.spawnPositions.playButtonX
                }
            },
            0.5, {
                easing: ig.Tween.Easing.Cubic.EaseOut
            }).start(), this.muteButton = ig.game.spawnEntity(EntityButtonMute, -272, 570), this.muteButton.tween({
                pos: {
                    x: 300
                }
            },
            0.5, {
                easing: ig.Tween.Easing.Cubic.EaseOut
            }).start(), this.playButton.redirect = function() {
                ig.game.director.jumpTo(LevelShop)
            }), this.splashTimer = new ig.Timer)
        },
        update: function() {
            this.parent();
            this.handleButtons()
        },
        handleButtons: function() {
            ig.input.pressed("click") && (this.playButton && this.playButton.checkOverlapWithPointer() && (this.playSound("carOpen"), this.playButton.setScale(0.9, 0.9), this.playButton.clickTimer = new ig.Timer), this.muteButton && this.muteButton.checkOverlapWithPointer() && this.muteButton.clicked())
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-more-game").requires("game.entities.commons.button").defines(function() {
    EntityButtonMoreGame = EntityButton.extend({
        size: {
            x: 211,
            y: 43
        },
        animSheet: new ig.AnimationSheet("media/graphics/sprites/buttons/game-buttons.png", 211, 43),
        name: "moreGamesButton",
        canSpawnDiv: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [8]);
            this.divLayerName = d.div_layer_name;
            ig.global.wm || this.tween({
                pos: {
                    x: 24
                }
            },
            0.5, {
                onComplete: function() {
                    this.spawnDiv()
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut
            }).start()
        },
        update: function() {
            this.parent()
        },
        spawnDiv: function() {
            if (!this.canSpawnDiv) if (this.canSpawnDiv = !0, _SETTINGS.MoreGames.Enabled) {
                var b;
                this.divLayerName ? (console.log("settings found ... using that div layer name"), b = this.divLayerName) : b = "more-games";
                console.log("div_layer_name:", b);
                this.checkClickableLayer(b, _SETTINGS.MoreGames.Link, !0)
            } else this.kill()
        },
        clicked: function() {
            this.playSound("carClose")
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs) if (k == b) return console.log("clickable layer already exists ..."),
            !0;
            console.log("doesnt exist yet ...");
            return ! 1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, f) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var m = window.innerHeight / mobileHeight,
                q = window.innerWidth / mobileWidth;
                $("#" + g.id).css("left", this.pos.x * q);
                $("#" + g.id).css("top", this.pos.y * m);
                $("#" + g.id).css("width", this.size.x * q);
                $("#" + g.id).css("height", this.size.y * m)
            } else m = document.getElementById("game").offsetLeft,
            q = document.getElementById("game").offsetTop,
            $("#" + g.id).css("left", m + this.pos.x * multiplier),
            $("#" + g.id).css("top", q + this.pos.y * multiplier),
            $("#" + g.id).css("width", this.size.x * multiplier),
            $("#" + g.id).css("height", this.size.y * multiplier);
            f ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
ig.baked = !0;
ig.module("game.levels.splash-menu").requires("impact.image", "game.entities.mainmenu.screen-splash-menu", "game.entities.buttons.button-more-game", "game.entities.pointer").defines(function() {
    LevelSplashMenu = {
        entities: [{
            type: "EntityScreenSplashMenu",
            x: 0,
            y: 0
        },
        {
            type: "EntityButtonMoreGame",
            x: -272,
            y: 570,
            settings: {
                div_layer_name: "layer_mainmenu"
            }
        },
        {
            type: "EntityPointer",
            x: 0,
            y: -16
        }],
        layer: [{
            name: "bg",
            width: 15,
            height: 20,
            linkWithCollision: !1,
            visible: !0,
            tilesetName: "media/graphics/backgrounds/mobile/background.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 32,
            foreground: !1,
            data: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60], [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75], [76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90], [91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105], [106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120], [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135], [136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150], [151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165], [166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180], [181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195], [196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210], [211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225], [226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240], [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255], [256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270], [271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285], [286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300]]
        }]
    };
    LevelSplashMenuResources = [new ig.Image("media/graphics/backgrounds/mobile/background.jpg")]
});
ig.baked = !0;
ig.module("game.entities.game.effects.smoke").requires("game.entities.commons.in-game").defines(function() {
    EntitySmoke = EntityInGame.extend({
        size: {
            x: 100,
            y: 151
        },
        animSheet: new ig.AnimationSheet("media/graphics/sprites/effects/smoke.png", 100, 151),
        zIndex: 6,
        name: "smoke",
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0, 1, 2, 3, 4, 4, 5], !0);
            d.velocityX && (this.vel.x = d.velocityX);
            d.velocityY && (this.vel.y = d.velocityY)
        },
        update: function() {
            this.parent();
            0 < this.currentAnim.loopCount && this.kill()
        },
        handleMovementTrace: function() {
            this.pos.x += this.vel.x * ig.system.tick;
            this.pos.y += this.vel.y * ig.system.tick
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.effects.explosion").requires("game.entities.commons.in-game").defines(function() {
    EntityExplosion = EntityInGame.extend({
        size: {
            x: 96,
            y: 96
        },
        animSheet: new ig.AnimationSheet("media/graphics/sprites/effects/explode_newSmall.png", 96, 96),
        zIndex: 6,
        name: "explosion",
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.pos.x -= this.size.x;
            this.pos.y -= this.size.y;
            this.addAnim("idle", 0.05, [0, 1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], !0);
            d.velocityX && (this.vel.x = d.velocityX);
            d.velocityY && (this.vel.y = d.velocityY)
        },
        update: function() {
            this.parent();
            0 < this.currentAnim.loopCount && this.kill()
        },
        handleMovementTrace: function() {
            this.pos.x += this.vel.x * ig.system.tick;
            this.pos.y += this.vel.y * ig.system.tick
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.drivers.driver").requires("game.entities.commons.in-game", "game.entities.game.effects.smoke", "game.entities.game.effects.explosion").defines(function() {
    EntityDriver = EntityInGame.extend({
        size: {
            x: 48,
            y: 48
        },
        noOfCollisions: 0,
        steerAngle: 4,
        _state: 0,
        _previousState: 0,
        speedY: 0,
        _states: {
            _IDLE: 0,
            _START: 1,
            _DRIVING: 2,
            _STOP: 3
        },
        angle: 0,
        target: {
            x: 0,
            y: 0
        },
        finish: !1,
        snapshotSpeedY: 0,
        slowDownTimer: null,
        damage: {
            collide: 2,
            wall: 10
        },
        hitWallLeft: !1,
        hitWallRight: !1,
        hitWall: !1,
        hitWallResolve: !0,
        hitFront: !1,
        hitFrontFriction: !0,
        hitBehind: !1,
        hitRight: !1,
        hitLeft: !1,
        collisionResolve: !0,
        collisionDetected: !1,
        carMoving: !1,
        game: null,
        boostTimer: null,
        zIndex: 5,
        dead: !1,
        dying: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.smokeTimer = new ig.Timer;
            this.explosionTimer = new ig.Timer;
            null == this.car && (this.car = ig.game.spawnEntity(EntityCar, this.pos.x, this.pos.y, d), this.size.x = this.car.size.x, this.size.y = this.car.size.y)
        },
        update: function() {
            this.parent();
            null == this.game && (this.game = ig.game.getEntityByName("game"));
            this.checkCarCondition();
            switch (this._state) {
            case this._states._START:
                this.startCar();
                this.carCollideCheck();
                this.carWallCheck();
                break;
            case this._states._DRIVING:
                this.carCollideCheck();
                this.carWallCheck();
                this.boostCarCheck();
                this.slowDownSpeedY();
                break;
            case this._states._STOP:
                this.stopCar()
            }
        },
        checkCarCondition: function() {
            0 >= this.car.health ? this.handleCarDeath() : 0 >= this.car.fuel ? this.handleOutOfFuel() : this.checkLights();
            this.checkCarPosition();
            this.checkCarAngle();
            this.collideCarDamage()
        },
        checkCarPosition: function() {
            this.car.pos.x = this.pos.x;
            this.car.pos.y = this.pos.y
        },
        checkCarAngle: function() {
            this.car.carCrash || (this.car.angle = 0 > this.vel.x ? -this.steerAngle * (Math.PI / 180) : 0 < this.vel.x ? this.steerAngle * (Math.PI / 180) : 0)
        },
        collideCarDamage: function() {
            if (this.collisionDetected && !this.collisionResolve) {
                var b = {
                    velocityY: this.speedY
                };
                this.hitFront ? this.spawnExplosion(this.last.x + 96, this.last.y - this.car.size.y / 2 + 48, b) : this.hitLeft ? this.spawnExplosion(this.last.x + 48, this.last.y + this.car.size.y / 2, b) : this.hitRight && this.spawnExplosion(this.last.x + 48, this.last.y + this.car.size.y / 2, b);
                this.car.reduceHealth(this.damage.collide);
                this.collisionDetected = !1
            }
            this.hitWall && !this.hitWallResolve && (this.car.reduceHealth(this.damage.wall), this.hitWall = this.car.boostOn = !1)
        },
        slowDownSpeedY: function() {
            this.speedY > this.car.max.speed.y && !this.car.boostOn && (null == this.slowDownTimer && (this.slowDownTimer = new ig.Timer), this.slowDownTimer && 0.5 < this.slowDownTimer.delta() && (this.speedY > this.car.max.speed.y ? (this.speedY -= 100, this.slowDownTimer.reset()) : (this.speedY = this.car.max.speed.y, this.slowDownTimer = null)))
        },
        checkLights: function() {
            if (this.game.screenFilter._state.timePeriod == this.game.screenFilter._timePeriodFilters._NIGHT) {
                if (!this.car.lightsOn) this.car.onLights(!0)
            } else if (this.car.lightsOn) this.car.onLights(!1)
        },
        startCar: function() {
            var b = ig.system.tick;
            this.pos.y > ig.game._PLAYER_CONSTANT_POSITION_Y.MAX ? (this.vel.x = 0, this.speedY += this.car.max.acceleration.y * b, this.pos.y -= this.speedY * b, this._state = this._states._START) : this.speedY < this.car.max.speed.y ? this.speedY += this.car.max.acceleration.y * b: this._state = this._states._DRIVING
        },
        boostCarCheck: function() {
            this.car.boostOn ? ("player" == this.name && !this.playedBoost && (this.playSound("boost"), this.playedBoost = !0), this.boostTimer && this.boostTimer.delta() > this.car.max.boostPeriod && 0 < this.car.nitro && (this.speedY += this.car.max.boostAcceleration.y * ig.system.tick, this.speedY > this.car.max.boost.y && (this.speedY = this.car.max.boost.y), this.car.nitro -= this.car.nitroConsumptionRate, 0 >= this.car.nitro && (this.car.nitro = 0, this.car.boostOn = !1), this.boostTimer.reset())) : this.boostTimer && this.boostTimer.delta() > this.car.max.boostPeriod && this.car.nitro < this.car.max.nitro ? (this.speedY -= this.car.max.boostAcceleration.y * ig.system.tick, this.speedY < this.car.max.speed.y && (this.speedY = this.car.max.speed.y), this.car.nitro += this.car.nitroRestoreRate, this.car.nitro > this.car.max.nitro && (this.car.nitro = this.car.max.nitro), this.boostTimer.reset()) : this.car.nitro == this.car.max.nitro && (this.boostTimer = null, this.speedY = this.car.max.speed.y, "player" == this.name && (this.playedBoost = !1))
        },
        carCollideCheck: function() {
            this.collisionResolve || (0 < this.vel.x ? (this.vel.x -= 1, 0 >= this.vel.x && (this.vel.x = 0, this.collisionResolve = !0)) : 0 > this.vel.x ? (this.vel.x += 1, 0 <= this.vel.x && (this.vel.x = 0, this.collisionResolve = !0)) : (this.vel.x = 0, this.collisionResolve = !0))
        },
        carWallCheck: function() {
            if (!this.hitWallResolve) {
                if (this.hitWallLeft) {
                    var b = {
                        velocityX: -50,
                        velocityY: this.speedY
                    };
                    this.spawnExplosion(this.pos.x + 76, this.pos.y, b);
                    this.vel.x = this.car.max.speed.x;
                    this.hitWallLeft = !1
                } else this.hitWallRight && (b = {
                    velocityX: 50,
                    velocityY: this.speedY
                },
                this.spawnExplosion(this.pos.x + 96, this.pos.y, b), this.vel.x = -this.car.max.speed.x, this.hitWallRight = !1);
                0 < this.vel.x ? (this.vel.x -= 1, 0 >= this.vel.x && (this.vel.x = 0, this.hitWallResolve = !0)) : 0 > this.vel.x ? (this.vel.x += 1, 0 <= this.vel.x && (this.vel.x = 0, this.hitWallResolve = !0)) : (this.vel.x = 0, this.hitWallResolve = !0)
            }
        },
        boostOn: function() {
            null == this.boostTimer && (this.boostTimer = new ig.Timer, this.car.boostOn = !0)
        },
        terminate: function() {
            this.car.lights && this.car.lights.kill();
            this.car.sirenLights && this.car.sirenLights.kill();
            this.car.kill();
            this.kill()
        },
        stopCar: function() {
            this.speedY = this.vel.x = 0;
            this.vel.y = this.game.player ? this.game.player.speedY - this.speedY: this.speedY
        },
        spawnSmoke: function(b, c, d) {
            this.smokeTimer && 0.5 < this.smokeTimer.delta() && 0 < this.car.health && (ig.game.spawnEntity(EntitySmoke, b, c, d), this.smokeTimer.reset())
        },
        spawnExplosion: function(b, c, d) {
            this.explosionTimer && 0.5 < this.explosionTimer.delta() && 0 < this.car.health && (ig.game.spawnEntity(EntityExplosion, b, c, d), this.playSound("explode"), this.explosionTimer.reset())
        },
        check: function(b) {
            "pointer" != b.name && "powerUp" != b.name && ("powerUpNitro" != b.name && "pedestrian" != b.name) && (this.car.carCrash ? (this.noOfCollisions++, 2 < this.noOfCollisions && (this.zIndex = 4, this.car.zIndex = 3, this.secondCheckAgainst = this.checkAgainst = this.type = ig.Entity.TYPE.NONE, this.collides = ig.Entity.COLLIDES.NEVER), this.swapHitFrontBehind(), this.swapHitLeftRight()) : 0 < this.car.health && (this.last.x + this.size.x < b.last.x ? (this.hitRight = !0, this.hitLeft = !1) : this.last.x > b.last.x + b.size.x && (this.hitLeft = !0, this.hitRight = !1), this.pos.y + this.size.y < b.pos.y + 20 ? (this.hitBehind = !0, this.hitFront = !1, this.speedY -= 50, 0 > this.speedY && (this.speedY = 0)) : this.pos.y > b.pos.y + b.size.y - 20 && (this.hitFront = !0, this.hitBehind = !1, this.speedY += 50, this.speedY > this.car.max.speed.y && (this.speedY = this.car.max.speed.y)), this.collisionDetected = !0, this.collisionResolve = !1))
        },
        handleMovementTrace: function(b) {
            this.car.carCrash ? (this.pos.y += this.vel.y * ig.system.tick, this.pos.x += this.vel.x * ig.system.tick) : (b.collision.x && (355 <= b.pos.x ? (this.hitRight = this.hitWallRight = !0, this.hitLeft = !1) : 60 >= b.pos.x && (this.hitLeft = this.hitWallLeft = !0, this.hitRight = !1), this.speedY -= 20, 0 >= this.speedY && (this.speedY = 0), "player" == this.name && 0 >= this.car.health && (this.speedY = 0), this.hitWall = !0, this.hitWallResolve = !1), this.parent(b))
        },
        handleCarDeath: function() {
            this.car.carCrash && (!this.scored && this.game.player && this.game._state == this.game._states._GAMERUNNING && (this.game.hud.adjustMoney(this.moneyValue), this.scored = !0), this.car.lights && this.car.lights.kill(), this.car.sirenLights && this.car.sirenLights.kill(), this.car.numberOfNitroPorts = 0, (580 < this.pos.x || -100 > this.pos.x || 640 < this.pos.y || 0 > this.pos.y) && "player" != this.name && this.terminate(), this.resolveDeathHitLeft(), this.resolveDeathHitRight(), this.resolveDeathHitFront(), this.resolveDeathHitBehind())
        },
        resolveDeathHitFront: function() {
            this.hitFront && (this.vel.y += 10)
        },
        resolveDeathHitBehind: function() {
            this.hitBehind && (this.vel.y += 10)
        },
        resolveDeathHitLeft: function() {
            this.hitLeft && (this.car.angle -= 1 * Math.PI / 180, this.vel.x += 10)
        },
        resolveDeathHitRight: function() {
            this.hitRight && (this.car.angle += 1 * Math.PI / 180, this.vel.x -= 10)
        },
        swapHitFrontBehind: function() {
            this.hitFront && (this.hitFront = !1, this.vel.y = -250, 1 == Math.floor(2 * Math.random()) ? this.hitLeft = !0 : this.hitRight = !0, this.hitBehind = !0);
            this.hitBehind && (this.vel.y = 250, this.hitFront = !0, this.hitBehind = !1)
        },
        swapHitLeftRight: function() {
            this.hitLeft ? (this.hitLeft = !1, this.hitRight = !0) : this.hitRight && (this.hitLeft = !0, this.hitRight = !1)
        },
        handleOutOfFuel: function() {
            this._state = this._states._STOP; ! this.scored && this.game.player && this.game._state == this.game._states._GAMERUNNING && (this.game.hud.adjustMoney(this.moneyValue), this.scored = !0);
            this.car.lights && this.car.lights.kill();
            this.car.sirenLights && this.car.sirenLights.kill();
            this.car.numberOfNitroPorts = 0; (640 < this.pos.y || 0 > this.pos.y) && "player" != this.name && this.terminate()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.commons.filter").requires("game.entities.commons.in-game").defines(function() {
    EntityFilter = EntityInGame.extend({
        gradientColorStops: [],
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        buildGradientString: function(b) {
            0.01 > b.a && (b.a = 0);
            return "rgba(" + b.r + "," + b.g + "," + b.b + "," + b.a + ")"
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.car_components.light").requires("game.entities.commons.filter").defines(function() {
    EntityLight = EntityFilter.extend({
        lightDrawDistance: {
            x: 200,
            y: 240,
            curveYApex: 120
        },
        name: "light",
        init: function(b, c, d) {
            this.parent(b, c, d)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.car_components.car-light").requires("game.entities.game.car_components.light").defines(function() {
    EntityCarLight = EntityLight.extend({
        size: {
            x: 2,
            y: 2
        },
        carSizes: [],
        obstaclePoints: [],
        zIndex: 5,
        gradientColorStops: [],
        curveYApex: 100,
        intersectionPointY: 40,
        _state: 0,
        _lightTypes: {
            white: 0,
            colorSpasm: 1,
            purple: 2,
            yellow: 3,
            blue: 4,
            green: 5,
            red: 6,
            orange: 7
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this._state = d.lightType;
            switch (this._state) {
            case this._lightTypes.white:
                this.buildGradient(255, 255, 255);
                break;
            case this._lightTypes.purple:
                this.buildGradient(255, 0, 255);
                break;
            case this._lightTypes.yellow:
                this.buildGradient(255, 255, 0);
                break;
            case this._lightTypes.blue:
                this.buildGradient(0, 0, 255);
                break;
            case this._lightTypes.green:
                this.buildGradient(0, 255, 0);
                break;
            case this._lightTypes.red:
                this.buildGradient(255, 0, 0);
                break;
            case this._lightTypes.orange:
                this.buildGradient(255, 181, 78)
            }
        },
        drawLight: function(b, c, d, f) {
            b.globalCompositeOperation = "lighter";
            var g = b.createLinearGradient(0, 0, 0, desktopHeight);
            switch (this._state) {
            case this._lightTypes.colorSpasm:
                this.gradientColorStops = [],
                this.buildGradient(Math.floor(256 * Math.random()), Math.floor(256 * Math.random()), Math.floor(256 * Math.random()))
            }
            for (index = 0; index < this.gradientColorStops.length; index++) g.addColorStop(this.gradientColorStops[index].position, this.buildGradientString(this.gradientColorStops[index]));
            b.fillStyle = g;
            b.beginPath();
            b.moveTo(c - 5, d - 10);
            b.lineTo(c - this.lightDrawDistance.x / 2, d - this.lightDrawDistance.y);
            b.quadraticCurveTo(c + f / 2, d - this.lightDrawDistance.y - this.lightDrawDistance.curveYApex, c + f + this.lightDrawDistance.x / 2, d - this.lightDrawDistance.y);
            b.lineTo(c + 5 + f, d - 10);
            b.lineTo(c - 5 + f, d - 10);
            b.lineTo(c + f / 2, d - this.intersectionPointY);
            b.lineTo(c + 5, d - 10);
            b.closePath();
            b.fill()
        },
        buildGradient: function(b, c, d) {
            this.gradientColorStops.push({
                position: 1,
                r: b,
                g: c,
                b: d,
                a: 0
            });
            this.gradientColorStops.push({
                position: 0.25,
                r: b,
                g: c,
                b: d,
                a: 0.25
            });
            this.gradientColorStops.push({
                position: 0,
                r: b,
                g: c,
                b: d,
                a: 0
            })
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.car_components.siren-light").requires("game.entities.game.car_components.light").defines(function() {
    EntitySirenLight = EntityLight.extend({
        size: {
            x: 2,
            y: 2
        },
        carSizes: [],
        obstaclePoints: [],
        zIndex: 5,
        gradientColorStops: [],
        curveYApex: 20,
        _state: 0,
        degree: 0,
        sirenTimer: null,
        sirenOffsetX: 20,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.sirenTimer = d.timer
        },
        drawLight: function(b, c, d, f) {
            b.globalCompositeOperation = "lighter";
            var g = b.createLinearGradient(0, 0, 0, desktopHeight);
            switch (this._state) {
            case 0:
                this.gradientColorStops = [];
                this.buildGradient(0, 0, 255);
                this.sirenOffsetX = 20;
                break;
            case 1:
                this.gradientColorStops = [],
                this.buildGradient(255, 0, 0),
                this.sirenOffsetX = 20
            }
            for (index = 0; index < this.gradientColorStops.length; index++) g.addColorStop(this.gradientColorStops[index].position, this.buildGradientString(this.gradientColorStops[index]));
            b.fillStyle = g;
            b.beginPath();
            b.arc(Math.floor(c + f / 2), d, 100, 0, 2 * Math.PI);
            b.fill()
        },
        buildGradient: function(b, c, d) {
            this.gradientColorStops.push({
                position: 1,
                r: b,
                g: c,
                b: d,
                a: 0.25
            });
            this.gradientColorStops.push({
                position: 0.25,
                r: b,
                g: c,
                b: d,
                a: 0.2
            });
            this.gradientColorStops.push({
                position: 0,
                r: b,
                g: c,
                b: d,
                a: 0.1
            })
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.car_components.car").requires("game.entities.commons.in-game", "game.entities.game.car_components.car-light", "game.entities.game.car_components.siren-light").defines(function() {
    EntityCar = EntityInGame.extend({
        size: {
            x: 154,
            y: 284
        },
        carImageParameters: {
            image: new ig.Image("media/graphics/sprites/cars/cars_player_new.png"),
            crashImage: new ig.Image("media/graphics/sprites/cars/cars_player_crash_new.png"),
            sx: 0,
            sy: 0,
            sw: 75,
            sh: 138,
            crashX: 0,
            crashY: 0,
            crashW: 75,
            crashH: 138
        },
        playPoliceSiren: !1,
        boostOn: !1,
        nitroAnimSheet: new ig.AnimationSheet("media/graphics/sprites/effects/nitro_new.png", 17, 25),
        numberOfNitroPorts: 1,
        policeCarSirenTimer: null,
        policeOffsetX: 0,
        policeSirenOffset: 0,
        carCrash: !1,
        health: 100,
        nitro: 100,
        nitroConsumptionRate: 1,
        nitroRestoreRate: 3,
        fuel: 150,
        fuelConsumptionRate: 100,
        colorSpasm: !1,
        scale: 1,
        angle: 0,
        _LEFTLIGHT: 0,
        _RIGHTLIGHT: 1,
        lightOffsetY: 0,
        lights: null,
        carType: 0,
        max: {
            speed: {
                x: 100,
                y: 250
            },
            acceleration: {
                x: 100,
                y: 100
            },
            boost: {
                x: 100,
                y: 400
            },
            boostAcceleration: {
                x: 300,
                y: 300
            },
            boostPeriod: 0.05,
            health: 100,
            nitro: 100,
            fuel: 150
        },
        lightsOn: !1,
        zIndex: 4,
        startTire: !1,
        startTirePosX: 0,
        startTirePoxY: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            if (!ig.global.wm) switch (this.policeCarSirenTimer = new ig.Timer, this.smokeTimer = new ig.Timer, this.nitroAnim = new ig.Animation(this.nitroAnimSheet, 0.1, [0, 1, 2, 3, 4]), this.carType = d.carType, this.setupBaseCar(), d.playerCar && this.setupPlayerCar(), this.carType) {
            case 0:
                this.size.x = 47;
                this.size.y = 90;
                this.offset.y = 34;
                this.offset.x = 16;
                this.pos.x = b;
                this.pos.y = c;
                this.carImageParameters.sx = this.carImageParameters.sw * this.carType;
                this.carImageParameters.sy = 0;
                this.carImageParameters.crashX = 0;
                this.lightOffsetY = 20;
                this.lights = ig.game.spawnEntity(EntityCarLight, this.pos.x, this.pos.y + this.lightOffsetY, {
                    lightType: 0
                });
                this.numberOfNitroPorts = 1;
                break;
            case 1:
                this.size.x = 46;
                this.size.y = 110;
                this.offset.y = 17;
                this.offset.x = 17;
                this.pos.x = b;
                this.pos.y = c;
                this.carImageParameters.sx = this.carImageParameters.sw * this.carType;
                this.carImageParameters.sy = 0;
                this.carImageParameters.crashX = this.carImageParameters.sw * this.carType;
                this.lightOffsetY = 20;
                this.lights = ig.game.spawnEntity(EntityCarLight, this.pos.x, this.pos.y + this.lightOffsetY, {
                    lightType: 6
                });
                this.numberOfNitroPorts = 2;
                break;
            case 2:
                this.size.x = 51;
                this.size.y = 110;
                this.offset.y = 20;
                this.offset.x = 13;
                this.pos.x = b;
                this.pos.y = c;
                this.carImageParameters.sx = this.carImageParameters.sw * this.carType;
                this.carImageParameters.sy = 0;
                this.carImageParameters.crashX = this.carImageParameters.sw * this.carType;
                this.lightOffsetY = 20;
                this.lights = ig.game.spawnEntity(EntityCarLight, this.pos.x, this.pos.y + this.lightOffsetY, {
                    lightType: 5
                });
                this.numberOfNitroPorts = 2;
                break;
            case 3:
                this.size.x = 53;
                this.size.y = 114;
                this.offset.y = 16;
                this.offset.x = 13;
                this.pos.x = b;
                this.pos.y = c;
                this.carImageParameters.sx = this.carImageParameters.sw * this.carType;
                this.carImageParameters.sy = 0;
                this.carImageParameters.crashX = this.carImageParameters.sw * this.carType;
                this.lightOffsetY = 20;
                this.lights = ig.game.spawnEntity(EntityCarLight, this.pos.x, this.pos.y + this.lightOffsetY, {
                    lightType: 7
                });
                this.numberOfNitroPorts = 1;
                break;
            case 4:
                this.size.x = 45;
                this.size.y = 104;
                this.offset.y = 26;
                this.offset.x = 16;
                this.pos.x = b;
                this.pos.y = c;
                this.carImageParameters.sx = this.carImageParameters.sw * this.carType;
                this.carImageParameters.sy = 0;
                this.carImageParameters.crashX = this.carImageParameters.sw * this.carType;
                this.lightOffsetY = 20;
                this.lights = ig.game.spawnEntity(EntityCarLight, this.pos.x, this.pos.y, {
                    lightType: 4
                });
                this.numberOfNitroPorts = 2;
                break;
            case 5:
                this.size.x = 50;
                this.size.y = 118;
                this.offset.y = 10;
                this.offset.x = 14;
                this.pos.x = b;
                this.pos.y = c;
                this.carImageParameters.sx = this.carImageParameters.sw * this.carType;
                this.carImageParameters.sy = 0;
                this.carImageParameters.crashX = this.carImageParameters.sw * this.carType;
                this.lightOffsetY = 20;
                this.lights = ig.game.spawnEntity(EntityCarLight, this.pos.x, this.pos.y, {
                    lightType: 2
                });
                this.numberOfNitroPorts = 2;
                break;
            case 6:
                this.size.x = 54;
                this.size.y = 124;
                this.offset.y = 10;
                this.offset.x = 12;
                this.pos.x = b;
                this.pos.y = c;
                this.carImageParameters.sx = this.carImageParameters.sw * this.carType;
                this.carImageParameters.sy = 0;
                this.carImageParameters.crashX = this.carImageParameters.sw * this.carType;
                this.lightOffsetY = 20;
                this.lights = ig.game.spawnEntity(EntityCarLight, this.pos.x, this.pos.y, {
                    lightType: 6
                });
                this.numberOfNitroPorts = 3;
                break;
            case 7:
                this.size.x = 55;
                this.size.y = 124;
                this.offset.y = 10;
                this.offset.x = 12;
                this.pos.x = b;
                this.pos.y = c;
                this.carImageParameters.sx = this.carImageParameters.sw * this.carType;
                this.carImageParameters.sy = 0;
                this.carImageParameters.crashX = this.carImageParameters.sw * this.carType;
                this.lightOffsetY = 20;
                this.lights = ig.game.spawnEntity(EntityCarLight, this.pos.x, this.pos.y, {
                    lightType: 3
                });
                this.numberOfNitroPorts = 3;
                break;
            case 8:
                this.size.x = 54;
                this.size.y = 120;
                this.offset.y = 15;
                this.offset.x = 14;
                this.pos.x = b;
                this.pos.y = c;
                this.carImageParameters.sx = this.carImageParameters.sw * this.carType;
                this.carImageParameters.sy = 0;
                this.carImageParameters.crashX = this.carImageParameters.sw * this.carType;
                this.lightOffsetY = 20;
                this.lights = ig.game.spawnEntity(EntityCarLight, this.pos.x, this.pos.y, {
                    lightType: 3
                });
                this.numberOfNitroPorts = 0;
                break;
            case 9:
                this.size.x = 46;
                this.size.y = 83;
                this.offset.y = 36;
                this.offset.x = 13;
                this.pos.x = b;
                this.pos.y = c;
                this.carImageParameters.sx = this.carImageParameters.sw * this.carType;
                this.carImageParameters.sy = 0;
                this.carImageParameters.crashX = this.carImageParameters.sw * this.carType;
                this.lightOffsetY = 20;
                this.lights = ig.game.spawnEntity(EntityCarLight, this.pos.x, this.pos.y, {
                    lightType: 3
                });
                this.numberOfNitroPorts = 0;
                break;
            case 10:
                this.size.x = 68;
                this.size.y = 136;
                this.offset.y = 6;
                this.offset.x = 5;
                this.pos.x = b;
                this.pos.y = c;
                this.carImageParameters.sx = this.carImageParameters.sw * this.carType;
                this.carImageParameters.sy = 0;
                this.carImageParameters.crashX = this.carImageParameters.sw * this.carType;
                this.carImageParameters.crashW = 86;
                this.lightOffsetY = 20;
                this.lights = ig.game.spawnEntity(EntityCarLight, this.pos.x, this.pos.y, {
                    lightType: 3
                });
                this.numberOfNitroPorts = 0;
                break;
            case 11:
                this.size.x = 54,
                this.size.y = 116,
                this.offset.y = 12,
                this.offset.x = 13,
                this.pos.x = b,
                this.pos.y = c,
                this.carImageParameters.sx = this.carImageParameters.sw * this.carType,
                this.carImageParameters.sy = 0,
                this.carImageParameters.crashX = this.carImageParameters.sw * this.carType + 10,
                this.lightOffsetY = 20,
                this.lights = ig.game.spawnEntity(EntityCarLight, this.pos.x, this.pos.y, {
                    lightType: 3
                }),
                this.policeSirenOffset = this.size.y / 2 + 22,
                this.sirenLights = ig.game.spawnEntity(EntitySirenLight, this.pos.x, this.pos.y, {
                    timer: this.policeCarSirenTimer
                }),
                this.numberOfNitroPorts = 0
            }
        },
        setupPlayerCar: function() {
            this.max.speed.y = Math.ceil(this.max.speed.y * ig.game.upgradeMultipliers.baseSpeed);
            this.max.health = Math.ceil(this.max.health * ig.game.upgradeMultipliers.health);
            this.max.fuel = Math.ceil(this.max.fuel * ig.game.upgradeMultipliers.fuel);
            this.max.nitro = Math.ceil(this.max.nitro * ig.game.upgradeMultipliers.nitro);
            this.max.boost.y = Math.ceil(this.max.boost.y * ig.game.upgradeMultipliers.boost);
            this.health = this.max.health;
            this.nitro = this.max.nitro;
            this.fuel = this.max.fuel
        },
        setupBaseCar: function() {
            switch (this.carType) {
            case 0:
                this.max.speed.y = 250;
                this.max.acceleration.y = 125;
                this.max.speed.x = 150;
                this.max.boost.y = 265;
                this.max.boostAcceleration.y = 190;
                this.max.health = 85;
                this.fuelConsumptionRate = 80;
                break;
            case 1:
                this.max.speed.y = 265;
                this.max.acceleration.y = 145;
                this.max.speed.x = 140;
                this.max.boost.y = 270;
                this.max.boostAcceleration.y = 195;
                this.max.health = 75;
                this.fuelConsumptionRate = 65;
                break;
            case 2:
                this.max.speed.y = 270;
                this.max.acceleration.y = 150;
                this.max.speed.x = 145;
                this.max.boost.y = 275;
                this.max.boostAcceleration.y = 210;
                this.max.health = 80;
                this.fuelConsumptionRate = 70;
                break;
            case 3:
                this.max.speed.y = 265;
                this.max.acceleration.y = 175;
                this.max.speed.x = 150;
                this.max.boost.y = 270;
                this.max.boostAcceleration.y = 200;
                this.max.health = 110;
                this.fuelConsumptionRate = 90;
                break;
            case 4:
                this.max.speed.y = 275;
                this.max.acceleration.y = 210;
                this.max.speed.x = 155;
                this.max.boost.y = 280;
                this.max.boostAcceleration.y = 220;
                this.fuelConsumptionRate = this.max.health = 60;
                break;
            case 5:
                this.max.speed.y = 250;
                this.max.acceleration.y = 225;
                this.max.speed.x = 140;
                this.max.boost.y = 290;
                this.max.boostAcceleration.y = 230;
                this.max.health = 90;
                this.fuelConsumptionRate = 75;
                break;
            case 6:
                this.max.speed.y = 300;
                this.max.acceleration.y = 250;
                this.max.speed.x = 120;
                this.max.boost.y = 400;
                this.max.boostAcceleration.y = 220;
                this.max.health = 65;
                this.fuelConsumptionRate = 50;
                break;
            case 7:
                this.max.speed.y = 260;
                this.max.acceleration.y = 225;
                this.max.speed.x = 160;
                this.max.boost.y = 350;
                this.max.boostAcceleration.y = 300;
                this.max.health = 140;
                this.fuelConsumptionRate = 55;
                break;
            case 8:
                this.max.speed.y = 220;
                this.max.acceleration.y = 200;
                this.max.speed.x = 110;
                this.max.boost.y = 260;
                this.max.boostAcceleration.y = 180;
                this.max.health = 90;
                break;
            case 9:
                this.max.speed.y = 220;
                this.max.acceleration.y = 100;
                this.max.speed.x = 160;
                this.max.boost.y = 240;
                this.max.boostAcceleration.y = 160;
                this.max.health = 30;
                break;
            case 10:
                this.max.speed.y = 150;
                this.max.acceleration.y = 100;
                this.max.speed.x = 110;
                this.max.boost.y = 200;
                this.max.boostAcceleration.y = 100;
                this.max.health = 120;
                break;
            case 11:
                this.max.speed.y = 250,
                this.max.acceleration.y = 200,
                this.max.speed.x = 170,
                this.max.boost.y = 270,
                this.max.boostAcceleration.y = 200,
                this.max.health = 80
            }
        },
        update: function() {
            this.parent();
            this.lights && (this.lights.pos.x = this.pos.x, this.lights.pos.y = this.pos.y + this.lightOffsetY);
            this.sirenLights && (this.sirenLights.pos.x = this.pos.x, this.sirenLights.pos.y = this.pos.y + this.policeSirenOffset, this.playPoliceSiren || (this.playSound("siren"), this.playPoliceSiren = !0));
            0 >= this.health && (this.sirenLights && this.playPoliceSiren && (this.stopSound("siren"), this.playPoliceSiren = !1), this.crash());
            this.nitroAnim.update()
        },
        draw: function() {
            this.drawNitro();
            this.parent();
            var b = ig.system.context;
            b.save();
            this.carCrash ? this.carCrash && this.drawCrashedCar(b) : this.drawCar(b);
            b.restore()
        },
        drawTireTracks: function() {
            if (0 < this.angle || 0 > this.angle && !this.carCrash) {
                var b = ig.system.context;
                b.save();
                var c = this.pos.x + 5,
                d = this.pos.y + this.size.y - 5 + 40,
                f = this.pos.x + 5,
                g = this.pos.y + this.size.y - 5;
                b.strokeStyle = "rgba(0,0,0,0.2)";
                b.lineWidth = 5;
                b.beginPath();
                b.moveTo(f, g);
                b.lineTo(c, d);
                b.stroke();
                b.closePath();
                b.strokeStyle = "rgba(0,0,0,0.2)";
                b.lineWidth = 5;
                b.beginPath();
                b.moveTo(f + this.size.x - 10, g);
                b.lineTo(c + this.size.x - 10, d);
                b.stroke();
                b.closePath();
                b.restore()
            }
        },
        drawNitro: function() {
            this.boostOn && (0.05 < this.angle ? this.drawNitroAngle(0) : -0.05 > this.angle ? this.drawNitroAngle(1) : this.drawNitroNormal(), 4 == this.nitroAnim.frame && this.spawnSmoke(this.pos.x - 20, this.pos.y + this.size.y - 25, {
                velocityX: 0,
                velocityY: 250
            }))
        },
        drawNitroNormal: function() {
            var b = Math.floor(this.pos.x - 8.5);
            switch (this.numberOfNitroPorts) {
            case 1:
                this.nitroAnim.draw(b + Math.floor(0.5 * this.size.x), this.pos.y + this.size.y - 2);
                break;
            case 2:
                this.nitroAnim.draw(b + Math.floor(0.4 * this.size.x), this.pos.y + this.size.y - 2);
                this.nitroAnim.draw(b + Math.floor(0.6 * this.size.x), this.pos.y + this.size.y - 2);
                break;
            case 3:
                this.nitroAnim.draw(b + Math.floor(0.3 * this.size.x), this.pos.y + this.size.y - 2),
                this.nitroAnim.draw(b + Math.floor(0.5 * this.size.x), this.pos.y + this.size.y - 2),
                this.nitroAnim.draw(b + Math.floor(0.7 * this.size.x), this.pos.y + this.size.y - 2)
            }
        },
        drawNitroAngle: function(b) {
            var c = Math.floor(this.pos.x - 8.5);
            this.nitroAnim.angle = this.angle;
            switch (b) {
            case 0:
                switch (this.numberOfNitroPorts) {
                case 1:
                    this.nitroAnim.draw(c + Math.floor(0.4 * this.size.x), this.pos.y + this.size.y - 3);
                    break;
                case 2:
                    this.nitroAnim.draw(c + Math.floor(0.25 * this.size.x), this.pos.y + this.size.y - 4);
                    this.nitroAnim.draw(c + Math.floor(0.45 * this.size.x), this.pos.y + this.size.y - 3);
                    break;
                case 3:
                    this.nitroAnim.draw(c + Math.floor(0.2 * this.size.x), this.pos.y + this.size.y - 4),
                    this.nitroAnim.draw(c + Math.floor(0.4 * this.size.x), this.pos.y + this.size.y - 3),
                    this.nitroAnim.draw(c + Math.floor(0.6 * this.size.x), this.pos.y + this.size.y - 2)
                }
                break;
            case 1:
                switch (this.numberOfNitroPorts) {
                case 1:
                    this.nitroAnim.draw(c + Math.floor(0.6 * this.size.x), this.pos.y + this.size.y - 3);
                    break;
                case 2:
                    this.nitroAnim.draw(c + Math.floor(0.55 * this.size.x), this.pos.y + this.size.y - 3);
                    this.nitroAnim.draw(c + Math.floor(0.75 * this.size.x), this.pos.y + this.size.y - 4);
                    break;
                case 3:
                    this.nitroAnim.draw(c + Math.floor(0.4 * this.size.x), this.pos.y + this.size.y - 2),
                    this.nitroAnim.draw(c + Math.floor(0.6 * this.size.x), this.pos.y + this.size.y - 3),
                    this.nitroAnim.draw(c + Math.floor(0.8 * this.size.x), this.pos.y + this.size.y - 4)
                }
            }
        },
        crash: function() {
            this.carCrash = !0
        },
        onLights: function(b) {
            this.lightsOn = b
        },
        reduceHealth: function(b) {
            this.health -= b;
            0 >= this.health && (this.health = 0)
        },
        drawCar: function(b) {
            this.checkRotate(b, this.pos.x + this.size.x / 2, this.pos.y, this.angle);
            11 == this.carType ? (this.policeCarSirenTimer && 0.2 < this.policeCarSirenTimer.delta() && (0 == this.policeOffsetX ? (this.policeOffsetX = this.carImageParameters.sw - 1, this.sirenLights._state = 0) : (this.policeOffsetX = 0, this.sirenLights._state = 1), this.policeCarSirenTimer.reset()), b.drawImage(this.carImageParameters.image.data, this.carImageParameters.sx + this.policeOffsetX, this.carImageParameters.sy, this.carImageParameters.sw, this.carImageParameters.sh, -this.size.x / 2 - this.offset.x, -this.offset.y, Math.floor(this.carImageParameters.sw * this.scale), Math.floor(this.carImageParameters.sh * this.scale))) : b.drawImage(this.carImageParameters.image.data, this.carImageParameters.sx, this.carImageParameters.sy, this.carImageParameters.sw, this.carImageParameters.sh, -this.size.x / 2 - this.offset.x, -this.offset.y, Math.floor(this.carImageParameters.sw * this.scale), Math.floor(this.carImageParameters.sh * this.scale))
        },
        drawCrashedCar: function(b) {
            this.checkRotate(b, this.pos.x + this.size.x / 2, this.pos.y, this.angle);
            b.drawImage(this.carImageParameters.crashImage.data, this.carImageParameters.crashX, this.carImageParameters.crashY, this.carImageParameters.crashW, this.carImageParameters.crashH, -this.size.x / 2 - this.offset.x, -this.offset.y, Math.floor(this.carImageParameters.crashW * this.scale), Math.floor(this.carImageParameters.crashH * this.scale))
        },
        spawnSmoke: function(b, c, d) {
            this.smokeTimer && 0.7 < this.smokeTimer.delta() && 0 < this.health && (ig.game.spawnEntity(EntitySmoke, b, c, d), this.smokeTimer.reset())
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.drivers.player").requires("game.entities.game.drivers.driver", "game.entities.game.car_components.car").defines(function() {
    EntityPlayer = EntityDriver.extend({
        zIndex: 5,
        name: "player",
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        distanceTravelled: 0,
        totalDistanceTravelled: 0,
        collides: ig.Entity.COLLIDES.PASSIVE,
        playedBoost: !1,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent();
            this.game && (this.game._state == this.game._states._GAMERUNNING ? (this.handleInput(), this.checkPlayerCarConstraint(), this.checkTravel()) : this.pos.y -= this.speedY * ig.system.tick)
        },
        checkTravel: function() {
            if (0 < this.speedY) {
                var b = this.speedY * ig.system.tick;
                this.distanceTravelled += b;
                this.totalDistanceTravelled += b
            }
            0 < Math.floor(this.distanceTravelled / this.car.fuelConsumptionRate) && (this.distanceTravelled = 0, this.car.fuel -= 1)
        },
        checkPlayerCarConstraint: function() {
            this.pos.y < ig.game._PLAYER_CONSTANT_POSITION_Y.MAX ? this.pos.y = ig.game._PLAYER_CONSTANT_POSITION_Y.MAX: this.pos.y > ig.game._PLAYER_CONSTANT_POSITION_Y.MAX && this._state != this._states._START && this._state != this._states._IDLE && (this.pos.y = ig.game._PLAYER_CONSTANT_POSITION_Y.MAX);
            this.carMovingCheck()
        },
        handleInput: function() {
            ig.input.pressed("click") && !this.checkOverlapWithPointer() && (this.collisionDetected = !1, this.collisionResolve = !0, this.hitWall = !1, this.hitWallResolve = !0, this.moveCar())
        },
        check: function(b) {
            this.parent(b);
            "powerUpNitro" == b.name && this.boostOn()
        },
        carMovingCheck: function() { ! this.collisionDetected && this.collisionResolve && (!this.hitWall && this.hitWallResolve) && (0 < this.vel.x ? this.pos.x + this.size.x / 2 >= this.target.x && (this.vel.x = 0) : 0 > this.vel.x && this.pos.x + this.size.x / 2 <= this.target.x && (this.vel.x = 0))
        },
        moveCar: function() { ! this.car.boostOn && this.speedY < this.car.max.speed.y && (this.speedY += this.car.max.acceleration.y * ig.system.tick);
            this.target.x = this.getCurrentMousePos().mouseX;
            this.target.y = this.getCurrentMousePos().mouseY;
            this.vel.x = this.target.x < Math.floor(this.pos.x + this.size.x / 2 - 10) ? -this.car.max.speed.x: this.target.x > Math.floor(this.pos.x + this.size.x / 2 + 10) ? this.car.max.speed.x: 0
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.drivers.hud").requires("game.entities.commons.in-game").defines(function() {
    EntityHud = EntityInGame.extend({
        name: "hud",
        zIndex: 7,
        playersCar: null,
        currentMoney: 0,
        font: new ig.Font("media/font/font.png"),
        barsPosY: 630,
        moneyStatus: new ig.Image("media/graphics/gui/money-status.png"),
        statusBar: new ig.Image("media/graphics/gui/status_bar_new.png"),
        nitroBar: new ig.Image("media/graphics/gui/nitro_bar_new.png"),
        enduranceBar: new ig.Image("media/graphics/gui/health_bar_new.png"),
        fuelBar: new ig.Image("media/graphics/gui/fuel_bar_new.png"),
        healthPercentage: 1,
        fuelPercentage: 1,
        nitroPercentage: 1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.nitroSourceWidth = this.nitroBar.width;
            this.fuelSourceWidth = this.fuelBar.width;
            this.healthSourceWidth = this.enduranceBar.width
        },
        adjustNitro: function(b) {
            this.nitroPercentage = b
        },
        adjustHealth: function(b) {
            this.healthPercentage = b
        },
        adjustFuel: function(b) {
            this.fuelPercentage = b
        },
        adjustMoney: function(b) {
            b && !isNaN(b) && (this.currentMoney += b);
            0 >= this.currentMoney && (this.currentMoney = 0)
        },
        draw: function() {
            this.parent();
            var b = ig.system.context;
            b.drawImage(this.moneyStatus.data, 173, 0);
            this.drawMoney();
            b.drawImage(this.statusBar.data, 0, 604);
            this.drawNitroBar(b);
            this.drawHealthBar(b);
            this.drawFuelBar(b)
        },
        drawMoney: function() {
            this.font.draw(this.currentMoney, 275, 5, ig.Font.ALIGN.RIGHT)
        },
        drawFuelBar: function(b) {
            this.fuelSourceWidth = Math.floor(this.fuelBar.width * this.fuelPercentage);
            1 <= this.fuelSourceWidth && b.drawImage(this.fuelBar.data, 0, 0, this.fuelBar.width, this.fuelBar.height, 362, this.barsPosY, this.fuelSourceWidth, this.fuelBar.height)
        },
        drawHealthBar: function(b) {
            1 < this.healthPercentage && (this.healthPercentage = 1);
            this.healthSourceWidth = Math.floor(this.enduranceBar.width * this.healthPercentage);
            var c = Math.floor(this.enduranceBar.width * ((1 - this.healthPercentage) / 2));
            1 <= this.healthSourceWidth && b.drawImage(this.enduranceBar.data, c, 0, this.healthSourceWidth, this.enduranceBar.height, 127 + c, this.barsPosY, this.healthSourceWidth, this.fuelBar.height)
        },
        drawNitroBar: function(b) {
            this.nitroSourceWidth = Math.floor(this.nitroBar.width * this.nitroPercentage);
            1 <= this.nitroSourceWidth && b.drawImage(this.nitroBar.data, 0, 0, this.nitroBar.width, this.nitroBar.height, 13, this.barsPosY, this.nitroSourceWidth, this.fuelBar.height)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-upgrades").requires("game.entities.commons.button").defines(function() {
    EntityButtonUpgrades = EntityButton.extend({
        size: {
            x: 211,
            y: 43
        },
        image: new ig.Image("media/graphics/sprites/buttons/game-buttons.png"),
        name: "upgradeButton",
        currentSizeX: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            null == this.drawTimer && (this.drawTimer = new ig.Timer)
        },
        update: function() {
            this.parent();
            this.drawTimer && 0.05 < this.drawTimer.delta() && (this.currentSizeX += 0.1, 1 <= this.currentSizeX ? (this.currentSizeX = 1, this.drawTimer = null) : this.drawTimer.reset())
        },
        draw: function() {
            this.parent();
            var b = ig.system.context;
            0.1 < this.currentSizeX && b.drawImage(this.image.data, 0, 301, this.image.width * this.currentSizeX, 43, this.pos.x, this.pos.y, this.size.x, this.size.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-continue").requires("game.entities.commons.button").defines(function() {
    EntityButtonContinue = EntityButton.extend({
        size: {
            x: 143,
            y: 43
        },
        image: new ig.Image("media/graphics/sprites/buttons/game-buttons.png"),
        name: "continueButton",
        currentSizeX: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            null == this.drawTimer && (this.drawTimer = new ig.Timer)
        },
        update: function() {
            this.parent();
            this.drawTimer && 0.05 < this.drawTimer.delta() && (this.currentSizeX += 0.1, 1 <= this.currentSizeX ? (this.currentSizeX = 1, this.drawTimer = null) : this.drawTimer.reset())
        },
        draw: function() {
            this.parent();
            var b = ig.system.context;
            0.1 < this.currentSizeX && b.drawImage(this.image.data, 0, 0, 143 * this.currentSizeX, 43, this.pos.x, this.pos.y, this.size.x, this.size.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-replay").requires("game.entities.commons.button").defines(function() {
    EntityButtonReplay = EntityButton.extend({
        size: {
            x: 143,
            y: 43
        },
        image: new ig.Image("media/graphics/sprites/buttons/game-buttons.png"),
        name: "replayButton",
        currentSizeX: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            null == this.drawTimer && (this.drawTimer = new ig.Timer)
        },
        update: function() {
            this.parent();
            this.drawTimer && 0.05 < this.drawTimer.delta() && (this.currentSizeX += 0.1, 1 <= this.currentSizeX ? (this.currentSizeX = 1, this.drawTimer = null) : this.drawTimer.reset())
        },
        draw: function() {
            this.parent();
            var b = ig.system.context;
            0.1 < this.currentSizeX && b.drawImage(this.image.data, 0, 172, 143 * this.currentSizeX, 43, this.pos.x, this.pos.y, this.size.x, this.size.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.screen-finish").requires("game.entities.commons.screen", "game.entities.buttons.button-upgrades", "game.entities.buttons.button-continue", "game.entities.buttons.button-replay").defines(function() {
    EntityScreenFinish = EntityScreen.extend({
        size: {
            x: 456,
            y: 372
        },
        image: new ig.Image("media/graphics/sprites/environment/winlose_screens_new.png"),
        win: !1,
        out: !1,
        crash: !1,
        font: new ig.Font("media/font/font.png"),
        zIndex: 11,
        waitTimer: null,
        drawText: !1,
        drawMoney: !1,
        text: "",
        money: 0,
        currentSizeX: 0.01,
        buttonPosition: {
            x: 38,
            y1: 338,
            y2: 388,
            y3: 438
        },
        name: "finishScreen",
        init: function(b, c, d) {
            this.parent(b, c, d);
            null == this.drawTimer && (this.drawTimer = new ig.Timer)
        },
        update: function() {
            this.parent();
            this.win ? (this.initializeWinButtons(), this.initAndIncrementTimer()) : this.out ? (this.initializeLoseButtons(), this.initAndIncrementTimer()) : this.crash && (this.initializeLoseButtons(), this.initAndIncrementTimer());
            this.handleButtonClicks()
        },
        drawTextOnScreen: function(b) {
            this.text = b;
            this.waitTimer = new ig.Timer;
            this.drawText = !0
        },
        drawMoneyOnScreen: function(b) {
            this.money = Math.ceil(b * ig.game.timeMultiplier);
            this.drawMoney = !0
        },
        draw: function() {
            this.parent();
            var b = ig.system.context;
            this.win ? (b.drawImage(this.image.data, 0, 0, this.image.width * this.currentSizeX, 300, this.pos.x, this.pos.y, 456, 372), this.waitTimer && 1 < this.waitTimer.delta() && (this.drawText && this.font.draw(this.text, this.pos.x + 35, this.pos.y + this.size.y / 2 - 50), this.drawMoney && (this.font.draw("Multiplier: " + ig.game.timeMultiplier + " x", this.pos.x + 35, this.pos.y + this.size.y / 2 - 25), this.font.draw("Earned $ " + this.money, this.pos.x + 35, this.pos.y + this.size.y / 2)))) : this.out ? b.drawImage(this.image.data, 0, 300, this.image.width * this.currentSizeX, 300, this.pos.x, this.pos.y, 456, 372) : this.crash && b.drawImage(this.image.data, 0, 600, this.image.width * this.currentSizeX, 300, this.pos.x, this.pos.y, 456, 372)
        },
        initAndIncrementTimer: function() {
            this.drawTimer && 0.05 < this.drawTimer.delta() && (this.currentSizeX += 0.1, 1 <= this.currentSizeX ? (this.currentSizeX = 1, ig.game.sortEntitiesDeferred(), this.drawTimer = null) : this.drawTimer.reset())
        },
        drawWinScreen: function() {
            this.out = this.crash = !1;
            this.win = !0
        },
        drawOutScreen: function() {
            this.crash = this.win = !1;
            this.out = !0
        },
        drawCrashScreen: function() {
            this.win = this.out = !1;
            this.crash = !0
        },
        hideWinScreen: function() {
            this.crash = this.win = this.out = !1
        },
        hideOutScreen: function() {
            this.crash = this.win = this.out = !1
        },
        hideCrashScreen: function() {
            this.crash = this.win = this.out = !1
        },
        initializeWinButtons: function() {
            null == this.continueButton && (this.playSound("wow"), this.continueButton = ig.game.spawnEntity(EntityButtonContinue, this.buttonPosition.x, this.buttonPosition.y2), this.continueButton.redirect = function() {
                ig.game.director.reloadLevel()
            });
            null == this.upgradeButton && (this.upgradeButton = ig.game.spawnEntity(EntityButtonUpgrades, this.buttonPosition.x, this.buttonPosition.y3), this.upgradeButton.redirect = function() {
                ig.game.director.jumpTo(LevelShop)
            })
        },
        initializeLoseButtons: function() {
            null == this.replayButton && (this.playSound("poor"), this.replayButton = ig.game.spawnEntity(EntityButtonReplay, this.buttonPosition.x, this.buttonPosition.y2), this.replayButton.redirect = function() {
                ig.game.director.reloadLevel()
            });
            null == this.upgradeButton && (this.upgradeButton = ig.game.spawnEntity(EntityButtonUpgrades, this.buttonPosition.x, this.buttonPosition.y3), this.upgradeButton.redirect = function() {
                ig.game.director.jumpTo(LevelShop)
            })
        },
        handleButtonClicks: function() {
            ig.input.pressed("click") && (this.continueClicked(), this.upgradesClicked(), this.replayClicked())
        },
        continueClicked: function() {
            this.continueButton && this.continueButton.checkOverlapWithPointer() && (this.playSound("carClose"), this.continueButton.setScale(0.9, 0.9), this.continueButton.clickTimer = new ig.Timer)
        },
        upgradesClicked: function() {
            this.upgradeButton && this.upgradeButton.checkOverlapWithPointer() && (this.playSound("carClose"), this.upgradeButton.setScale(0.9, 0.9), this.upgradeButton.clickTimer = new ig.Timer)
        },
        replayClicked: function() {
            this.replayButton && this.replayButton.checkOverlapWithPointer() && (this.playSound("carClose"), this.replayButton.setScale(0.9, 0.9), this.replayButton.clickTimer = new ig.Timer)
        },
        saveMoney: function() {
            if (ig.game.storage && this.supports_local_storage()) {
                if (ig.game.storage.isSet(this.TOTALMONEYKEY)) var b = ig.game.storage.get(this.TOTALMONEYKEY),
                b = b + this.money;
                else b = this.money;
                99999999 < b && (b = 99999999);
                ig.game.storage.set(this.TOTALMONEYKEY, b)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.env_components.screen-filter").requires("game.entities.commons.filter").defines(function() {
    EntityScreenFilter = EntityFilter.extend({
        size: {
            x: 480,
            y: 640
        },
        zIndex: 7,
        _state: {
            weather: 0,
            timePeriod: 3
        },
        _timePeriodFilters: {
            _SUNRISE: 0,
            _DAY: 1,
            _SUNSET: 2,
            _NIGHT: 3
        },
        compositeOp: "source-over",
        _weatherParticleFilters: {
            _CLEAR: 0,
            _RAIN: 1,
            _SNOW: 2
        },
        sunriseParams: {
            r: 200,
            g: 115,
            b: 0,
            a1: 0.4,
            a2: 0.2,
            a3: 0.4,
            maxA1: 0.4,
            maxA2: 0.2,
            maxA3: 0.4
        },
        dayParams: {
            r: 0,
            g: 0,
            b: 0,
            a1: 0,
            a2: 0,
            a3: 0,
            maxA1: 0,
            maxA2: 0,
            maxA3: 0
        },
        sunsetParams: {
            r: 200,
            g: 65,
            b: 0,
            a1: 0.4,
            a2: 0.2,
            a3: 0.4,
            maxA1: 0.4,
            maxA2: 0.2,
            maxA3: 0.4
        },
        nightParams: {
            r: 0,
            g: 0,
            b: 0,
            a1: 0.6,
            a2: 0.4,
            a3: 0.8,
            maxA1: 0.6,
            maxA2: 0.4,
            maxA3: 0.8
        },
        sunriseState: 0,
        dayState: 0,
        sunsetState: 0,
        nightState: 0,
        periodState: {
            _FADEIN: 0,
            _SHOW: 1,
            _FADEOUT: 2
        },
        timePeriodTimer: null,
        weatherTimer: null,
        fadeInTimer: null,
        showTimer: null,
        fadeOutTimer: null,
        weatherChangeTime: 10,
        showTime: 20,
        fadeInTime: 0.1,
        fadeOutTime: 0.1,
        fadeInValue: 0.025,
        fadeOutValue: -0.025,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.resetAllParams();
            this._state.timePeriod = d.timePeriod;
            switch (this._state.timePeriod) {
            case this._timePeriodFilters._SUNRISE:
                this.nightParams.a1 = this.nightParams.maxA1;
                this.nightParams.a2 = this.nightParams.maxA2;
                this.nightParams.a3 = this.nightParams.maxA3;
                this.sunriseParams.a1 = this.sunriseParams.maxA1;
                this.sunriseParams.a2 = this.sunriseParams.maxA2;
                this.sunriseParams.a3 = this.sunriseParams.maxA3;
                break;
            case this._timePeriodFilters._DAY:
                this.nightParams.a1 = this.nightParams.maxA1;
                this.nightParams.a2 = this.nightParams.maxA2;
                this.nightParams.a3 = this.nightParams.maxA3;
                this.dayParams.a1 = this.dayParams.maxA1;
                this.dayParams.a2 = this.dayParams.maxA2;
                this.dayParams.a3 = this.dayParams.maxA3;
                break;
            case this._timePeriodFilters._SUNSET:
                this.sunsetParams.a1 = this.sunsetParams.maxA1;
                this.sunsetParams.a2 = this.sunsetParams.maxA2;
                this.sunsetParams.a3 = this.sunsetParams.maxA3;
                break;
            case this._timePeriodFilters._NIGHT:
                this.nightParams.a1 = this.nightParams.maxA1,
                this.nightParams.a2 = this.nightParams.maxA2,
                this.nightParams.a3 = this.nightParams.maxA3
            }
        },
        resetAllParams: function() {
            this.sunriseParams.a1 = 0;
            this.sunriseParams.a2 = 0;
            this.sunriseParams.a3 = 0;
            this.dayParams.a1 = 0;
            this.dayParams.a2 = 0;
            this.dayParams.a3 = 0;
            this.sunsetParams.a1 = 0;
            this.sunsetParams.a2 = 0;
            this.sunsetParams.a3 = 0;
            this.nightParams.a1 = 0;
            this.nightParams.a2 = 0;
            this.nightParams.a3 = 0
        },
        update: function() {
            this.parent();
            this.updateTimePeriod();
            this.updateWeather()
        },
        updateTimePeriod: function() {
            switch (this._state.timePeriod) {
            case this._timePeriodFilters._SUNRISE:
                switch (this.sunriseState) {
                case this.periodState._FADEIN:
                    this.fadeInSunrise();
                    break;
                case this.periodState._SHOW:
                    this.showSunrise();
                    break;
                case this.periodState._FADEOUT:
                    this.fadeOutSunrise()
                }
                break;
            case this._timePeriodFilters._DAY:
                switch (this.dayState) {
                case this.periodState._FADEIN:
                    this.fadeInDay();
                    break;
                case this.periodState._SHOW:
                    this.showDay();
                    break;
                case this.periodState._FADEOUT:
                    this.fadeOutDay()
                }
                break;
            case this._timePeriodFilters._SUNSET:
                switch (this.sunsetState) {
                case this.periodState._FADEIN:
                    this.fadeInSunset();
                    break;
                case this.periodState._SHOW:
                    this.showSunset();
                    break;
                case this.periodState._FADEOUT:
                    this.fadeOutSunset()
                }
                break;
            case this._timePeriodFilters._NIGHT:
                switch (this.nightState) {
                case this.periodState._FADEIN:
                    this.fadeInNight();
                    break;
                case this.periodState._SHOW:
                    this.showNight();
                    break;
                case this.periodState._FADEOUT:
                    this.fadeOutNight()
                }
            }
        },
        updateWeather: function() {},
        fadeInSunrise: function() {
            this.reinitializeFadeTimers();
            this.fadeOutTimer && this.fadeOutTimer.delta() > this.fadeOutTime && (this.setParams(this._timePeriodFilters._NIGHT, !1), 0 >= this.nightParams.a1 && 0 >= this.nightParams.a2 && 0 >= this.nightParams.a3 && (this.sunriseState = this.periodState._SHOW, this.fadeOutTimer = this.fadeInTimer = null));
            this.fadeInTimer && this.fadeInTimer.delta() > this.fadeInTime && this.setParams(this._timePeriodFilters._SUNRISE, !0)
        },
        showSunrise: function() {
            this.reinitializeShowTimers();
            this.showTimer && this.showTimer.delta() > this.showTime && (this.sunriseState = this.periodState._FADEOUT, this.showTimer = null)
        },
        fadeOutSunrise: function() {
            this.reinitializeFadeTimers();
            this.sunriseParams.a1 >= this.sunriseParams.maxA1 && this.sunriseParams.a2 >= this.sunriseParams.maxA2 && this.sunriseParams.a3 >= this.sunriseParams.maxA3 && (this.sunriseState = this.periodState._FADEIN, this.fadeOutTimer = this.fadeInTimer = null, this._state.timePeriod = this._timePeriodFilters._DAY)
        },
        fadeInDay: function() {
            this.reinitializeFadeTimers();
            this.fadeOutTimer && this.fadeOutTimer.delta() > this.fadeOutTime && (this.setParams(this._timePeriodFilters._NIGHT, !1), 0 >= this.nightParams.a1 && 0 >= this.nightParams.a2 && 0 >= this.nightParams.a3 && (this.dayState = this.periodState._SHOW, this.fadeOutTimer = this.fadeInTimer = null))
        },
        showDay: function() {
            this.reinitializeShowTimers();
            this.showTimer && this.showTimer.delta() > this.showTime && (this.dayState = this.periodState._FADEOUT, this.showTimer = null)
        },
        fadeOutDay: function() {
            this.reinitializeFadeTimers();
            this.dayParams.a1 >= this.dayParams.maxA1 && this.dayParams.a2 >= this.dayParams.maxA2 && this.dayParams.a3 >= this.dayParams.maxA3 && (this.dayState = this.periodState._FADEIN, this.fadeOutTimer = this.fadeInTimer = null, this._state.timePeriod = this._timePeriodFilters._NIGHT)
        },
        fadeInSunset: function() {
            this.reinitializeFadeTimers();
            this.fadeOutTimer && this.fadeOutTimer.delta() > this.fadeOutTime && this.setParams(this._timePeriodFilters._DAY, !1);
            this.fadeInTimer && this.fadeInTimer.delta() > this.fadeInTime && (this.setParams(this._timePeriodFilters._SUNSET, !0), this.sunsetParams.a1 >= this.sunsetParams.maxA1 && this.sunsetParams.a2 >= this.sunsetParams.maxA2 && this.sunsetParams.a3 >= this.sunsetParams.maxA3 && (this.sunsetState = this.periodState._SHOW, this.fadeOutTimer = this.fadeInTimer = null))
        },
        showSunset: function() {
            this.reinitializeShowTimers();
            this.showTimer && this.showTimer.delta() > this.showTime && (this.sunsetState = this.periodState._FADEOUT, this.showTimer = null)
        },
        fadeOutSunset: function() {
            this.reinitializeFadeTimers();
            this.sunsetParams.a1 >= this.sunsetParams.maxA1 && this.sunsetParams.a2 >= this.sunsetParams.maxA2 && this.sunsetParams.a3 >= this.sunsetParams.maxA3 && (this.sunsetState = this.periodState._FADEIN, this.fadeOutTimer = this.fadeInTimer = null, this._state.timePeriod = this._timePeriodFilters._NIGHT)
        },
        fadeInNight: function() {
            this.reinitializeFadeTimers();
            this.fadeOutTimer && this.fadeOutTimer.delta() > this.fadeOutTime && this.setParams(this._timePeriodFilters._DAY, !1);
            this.fadeInTimer && this.fadeInTimer.delta() > this.fadeInTime && (this.setParams(this._timePeriodFilters._NIGHT, !0), this.nightParams.a1 >= this.nightParams.maxA1 && this.nightParams.a2 >= this.nightParams.maxA2 && this.nightParams.a3 >= this.nightParams.maxA3 && (this.nightState = this.periodState._SHOW, this.fadeOutTimer = this.fadeInTimer = null))
        },
        showNight: function() {
            this.reinitializeShowTimers();
            this.showTimer && this.showTimer.delta() > this.showTime && (this.nightState = this.periodState._FADEOUT, this.showTimer = null)
        },
        fadeOutNight: function() {
            this.reinitializeFadeTimers();
            this.nightParams.a1 >= this.nightParams.maxA1 && this.nightParams.a2 >= this.nightParams.maxA2 && this.nightParams.a3 >= this.nightParams.maxA3 && (this.nightState = this.periodState._FADEIN, this.fadeOutTimer = this.fadeInTimer = null, this._state.timePeriod = this._timePeriodFilters._DAY)
        },
        setParams: function(b, c) {
            if (c) switch (b) {
            case this._timePeriodFilters._SUNRISE:
                this.sunriseParams.a1 = this.sunriseParams.a1 >= this.sunriseParams.maxA1 ? this.sunriseParams.maxA1: this.sunriseParams.a1 + this.fadeInValue;
                this.sunriseParams.a2 = this.sunriseParams.a2 >= this.sunriseParams.maxA2 ? this.sunriseParams.maxA2: this.sunriseParams.a2 + this.fadeInValue;
                this.sunriseParams.a3 = this.sunriseParams.a3 >= this.sunriseParams.maxA3 ? this.sunriseParams.maxA3: this.sunriseParams.a3 + this.fadeInValue;
                break;
            case this._timePeriodFilters._DAY:
                this.dayParams.a1 = this.dayParams.a1 >= this.dayParams.maxA1 ? this.dayParams.maxA1: this.dayParams.a1 + this.fadeInValue;
                this.dayParams.a2 = this.dayParams.a2 >= this.dayParams.maxA2 ? this.dayParams.maxA2: this.dayParams.a2 + this.fadeInValue;
                this.dayParams.a3 = this.dayParams.a3 >= this.dayParams.maxA3 ? this.dayParams.maxA3: this.dayParams.a3 + this.fadeInValue;
                break;
            case this._timePeriodFilters._SUNSET:
                this.sunsetParams.a1 = this.sunsetParams.a1 >= this.sunsetParams.maxA1 ? this.sunsetParams.maxA1: this.sunsetParams.a1 + this.fadeInValue;
                this.sunsetParams.a2 = this.sunsetParams.a2 >= this.sunsetParams.maxA2 ? this.sunsetParams.maxA2: this.sunsetParams.a2 + this.fadeInValue;
                this.sunsetParams.a3 = this.sunsetParams.a3 >= this.sunsetParams.maxA3 ? this.sunsetParams.maxA3: this.sunsetParams.a3 + this.fadeInValue;
                break;
            case this._timePeriodFilters._NIGHT:
                this.nightParams.a1 = this.nightParams.a1 >= this.nightParams.maxA1 ? this.nightParams.maxA1: this.nightParams.a1 + this.fadeInValue,
                this.nightParams.a2 = this.nightParams.a2 >= this.nightParams.maxA2 ? this.nightParams.maxA2: this.nightParams.a2 + this.fadeInValue,
                this.nightParams.a3 = this.nightParams.a3 >= this.nightParams.maxA3 ? this.nightParams.maxA3: this.nightParams.a3 + this.fadeInValue
            } else switch (b) {
            case this._timePeriodFilters._SUNRISE:
                this.sunriseParams.a1 = 0 >= this.sunriseParams.a1 ? 0 : this.sunriseParams.a1 + this.fadeOutValue;
                this.sunriseParams.a2 = 0 >= this.sunriseParams.a2 ? 0 : this.sunriseParams.a2 + this.fadeOutValue;
                this.sunriseParams.a3 = 0 >= this.sunriseParams.a3 ? 0 : this.sunriseParams.a3 + this.fadeOutValue;
                break;
            case this._timePeriodFilters._DAY:
                this.dayParams.a1 = 0 >= this.dayParams.a1 ? 0 : this.dayParams.a1 + this.fadeOutValue;
                this.dayParams.a2 = 0 >= this.dayParams.a2 ? 0 : this.dayParams.a2 + this.fadeOutValue;
                this.dayParams.a3 = 0 >= this.dayParams.a3 ? 0 : this.dayParams.a3 + this.fadeOutValue;
                break;
            case this._timePeriodFilters._SUNSET:
                this.sunsetParams.a1 = 0 >= this.sunsetParams.a1 ? 0 : this.sunsetParams.a1 + this.fadeOutValue;
                this.sunsetParams.a2 = 0 >= this.sunsetParams.a2 ? 0 : this.sunsetParams.a2 + this.fadeOutValue;
                this.sunsetParams.a3 = 0 >= this.sunsetParams.a3 ? 0 : this.sunsetParams.a3 + this.fadeOutValue;
                break;
            case this._timePeriodFilters._NIGHT:
                this.nightParams.a1 = 0 >= this.nightParams.a1 ? 0 : this.nightParams.a1 + this.fadeOutValue,
                this.nightParams.a2 = 0 >= this.nightParams.a2 ? 0 : this.nightParams.a2 + this.fadeOutValue,
                this.nightParams.a3 = 0 >= this.nightParams.a3 ? 0 : this.nightParams.a3 + this.fadeOutValue
            }
        },
        reinitializeFadeTimers: function() {
            null == this.fadeInTimer && (this.fadeInTimer = new ig.Timer);
            null == this.fadeOutTimer && (this.fadeOutTimer = new ig.Timer)
        },
        reinitializeShowTimers: function() {
            null == this.showTimer && (this.showTimer = new ig.Timer)
        },
        drawTimePeriodFilter: function(b) {
            b.save();
            switch (this._state.timePeriod) {
            case this._timePeriodFilters._SUNRISE:
                this.drawGradient(this._timePeriodFilters._NIGHT, b);
                this.drawGradient(this._timePeriodFilters._SUNRISE, b);
                break;
            case this._timePeriodFilters._DAY:
                this.drawGradient(this._timePeriodFilters._NIGHT, b);
                this.drawGradient(this._timePeriodFilters._DAY, b);
                break;
            case this._timePeriodFilters._SUNSET:
                this.drawGradient(this._timePeriodFilters._DAY, b);
                this.drawGradient(this._timePeriodFilters._SUNSET, b);
                break;
            case this._timePeriodFilters._NIGHT:
                this.drawGradient(this._timePeriodFilters._DAY, b),
                this.drawGradient(this._timePeriodFilters._NIGHT, b)
            }
            b.restore()
        },
        drawGradient: function(b, c) {
            this.gradientColorStops = [];
            switch (b) {
            case this._timePeriodFilters._SUNRISE:
                this.buildGradient(this.sunriseParams.r, this.sunriseParams.g, this.sunriseParams.b, this.sunriseParams.a1, this.sunriseParams.a2, this.sunriseParams.a3);
                break;
            case this._timePeriodFilters._DAY:
                this.buildGradient(this.dayParams.r, this.dayParams.g, this.dayParams.b, this.dayParams.a1, this.dayParams.a2, this.dayParams.a3);
                break;
            case this._timePeriodFilters._SUNSET:
                this.buildGradient(this.sunsetParams.r, this.sunsetParams.g, this.sunsetParams.b, this.sunsetParams.a1, this.sunsetParams.a2, this.sunsetParams.a3);
                break;
            case this._timePeriodFilters._NIGHT:
                this.buildGradient(this.nightParams.r, this.nightParams.g, this.nightParams.b, this.nightParams.a1, this.nightParams.a2, this.nightParams.a3)
            }
            var d = c.createLinearGradient(0, 0, 0, desktopHeight);
            for (index = 0; index < this.gradientColorStops.length; index++) d.addColorStop(this.gradientColorStops[index].position, this.buildGradientString(this.gradientColorStops[index]));
            c.fillStyle = d;
            c.globalCompositeOperation = this.compositeOp;
            c.beginPath();
            c.moveTo(this.pos.x, this.pos.y);
            c.lineTo(this.pos.x + this.size.x, this.pos.y);
            c.lineTo(this.pos.x + this.size.x, this.pos.y + this.size.y);
            c.lineTo(this.pos.x, this.pos.y + this.size.y);
            c.closePath();
            c.fill()
        },
        buildGradient: function(b, c, d, f, g, m) {
            this.gradientColorStops.push({
                position: 1,
                r: b,
                g: c,
                b: d,
                a: f
            });
            this.gradientColorStops.push({
                position: 0.5,
                r: b,
                g: c,
                b: d,
                a: g
            });
            this.gradientColorStops.push({
                position: 0,
                r: b,
                g: c,
                b: d,
                a: m
            })
        },
        setWeather: function() {},
        drawWeatherParticleFilter: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.game.env_components.indicator-line").requires("game.entities.commons.in-game").defines(function() {
    EntityIndicatorLine = EntityInGame.extend({
        size: {
            x: 364,
            y: 48
        },
        animSheet: new ig.AnimationSheet("media/graphics/sprites/environment/line_indicator.png", 364, 48),
        name: "indicatorLine",
        zIndex: 2,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0])
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.env_components.environment").requires("game.entities.commons.in-game", "game.entities.game.env_components.screen-filter", "game.entities.game.env_components.indicator-line").defines(function() {
    EntityEnvironment = EntityInGame.extend({
        _envType: 0,
        bgPosY: 0,
        zIndex: 1,
        size: {
            x: 480,
            y: 640
        },
        image: new ig.Image("media/graphics/sprites/environment/bg3.jpg"),
        streetLength: 2E4,
        scrollMultiplier: 1.5,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.streetLength = d.streetLength;
            this.checkObjectForNull(this.startLine) && (this.startLine = ig.game.spawnEntity(EntityIndicatorLine, desktopWidth / 2 - 182, this.bgPosY + 440));
            this.checkObjectForNull(this.endLine) && (this.endLine = ig.game.spawnEntity(EntityIndicatorLine, desktopWidth / 2 - 182, this.bgPosY - this.streetLength));
            this._envType = d.envType;
            switch (this._envType) {
            case 3:
                this.image = new ig.Image("media/graphics/sprites/environment/bg3.jpg");
                break;
            case 2:
                this.image = new ig.Image("media/graphics/sprites/environment/bg2.jpg");
                break;
            case 1:
                this.image = new ig.Image("media/graphics/sprites/environment/bg1.jpg");
                break;
            case 0:
                this.image = new ig.Image("media/graphics/sprites/environment/bg.jpg")
            }
        },
        update: function() {
            this.parent();
            this.startLine && 640 < this.startLine.pos.y && (this.startLine.kill(), this.startLine = null)
        },
        scrollRoad: function(b) {
            var c = ig.system.tick;
            640 > this.bgPosY + b * c ? (this.startLine && (this.startLine.pos.y += Math.floor(b * c * this.scrollMultiplier)), this.endLine && (this.endLine.pos.y += Math.floor(b * c * this.scrollMultiplier)), this.bgPosY += Math.floor(b * c * this.scrollMultiplier)) : this.bgPosY = 0
        },
        draw: function() {
            this.parent();
            ig.global.wm || this.drawEnvironment()
        },
        drawEnvironment: function() {
            var b = ig.system.context;
            0 == this._envType ? (b.drawImage(this.image.data, this.pos.x - 5, this.bgPosY), b.drawImage(this.image.data, this.pos.x - 5, this.bgPosY - 640)) : (b.drawImage(this.image.data, this.pos.x, this.bgPosY), b.drawImage(this.image.data, this.pos.x, this.bgPosY - 640))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.commons.generator").requires("game.entities.commons.in-game").defines(function() {
    EntityGenerator = EntityInGame.extend({
        spawnTimer: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.spawnTimer = new ig.Timer
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.drivers.opponent").requires("game.entities.game.drivers.driver", "game.entities.game.car_components.car").defines(function() {
    EntityOpponent = EntityDriver.extend({
        name: "opponent",
        moneyValue: 75,
        zIndex: 5,
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.B,
        secondCheckAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.ACTIVE,
        scored: !1,
        randomBoostTime: 4,
        degree: 0,
        _aiMentality: 0,
        _aiMentalities: {
            _PASSIVE: 0,
            _AGRRESSIVE: 1
        },
        _aiState: 0,
        _aiStates: {
            _CRUISING: 0,
            _OVERTAKELEFT: 1,
            _OVERTAKERIGHT: 2,
            _BRAKE: 3,
            _MAINTAIN: 4,
            _SWERVING: 5
        },
        roadPositions: {
            wallLeftX: 60,
            lane1X: 83,
            lane2X: 212,
            lane3X: 325,
            wallRightX: 423,
            startPosY: -500,
            boundPosY: 1200
        },
        degreeTimer: null,
        respawnPositionTimer: null,
        aiLoopTimer: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.name = d.aName;
            d.startSpeedY && (this.speedY = d.startSpeedY);
            d.maxSpeedY && (this.car.max.speed.y = d.maxSpeedY);
            d.ai && (this._aiMentality = d.ai);
            "obstacle" == this.name && (this._state = this._states._DRIVING);
            b = 50;
            c = 100;
            d.minHealth && (b = d.minHealth);
            d.maxHealth && (c = d.maxHealth);
            this.car.health = Math.floor(Math.random() * (c - b)) + b + 1;
            this.degreeTimer = new ig.Timer;
            this.respawnPositionTimer = new ig.Timer;
            this.aiLoopTimer = new ig.Timer
        },
        update: function() {
            this.parent();
            "obstacle" == this.name && this.pos.y > this.roadPositions.boundPosY && this.respawnPositionTimer && 5 < this.respawnPositionTimer.delta() && (this.pos.y = this.roadPositions.startPosY, this.respawnPositionTimer.reset());
            if (0 >= this.car.health) this.game && "obstacle" == this.name && this.game.obstacleGenerator.popEntity(this);
            else {
                if (this._state == this._states._DRIVING && (this.checkOpponentConstraint(), this.aiLoopTimer && 1 < this.aiLoopTimer.delta())) {
                    switch (this._aiMentality) {
                    case this._aiMentalities._AGRRESSIVE:
                        this.aggressiveDrive();
                        break;
                    case this._aiMentalities._PASSIVE:
                        this.passiveDrive()
                    }
                    this.aiLoopTimer.reset()
                }
                this.speedCompare()
            }
        },
        aggressiveDrive: function() {
            switch (this._aiState) {
            case this._aiStates._CRUISING:
                (this.targetCollision = this.checkIfCollideWithPlayer()) ? this.determineAiState() : (this.targetCollision = this.checkIfCollideWithOthers(), this.targetColllision && this.determineAiState());
                this.boostRandomly();
                break;
            case this._aiStates._OVERTAKELEFT:
                this.overtakeLeft(this.targetCollision);
                break;
            case this._aiStates._OVERTAKERIGHT:
                this.overtakeRight(this.targetCollision);
                break;
            case this._aiStates._BRAKE:
                this.brake();
                break;
            case this._aiStates._SWERVING:
                this.driveRecklessly();
                break;
            case this._aiStates._MAINTAIN:
                this.maintain()
            }
        },
        passiveDrive: function() {
            switch (this._aiState) {
            case this._aiStates._CRUISING:
                (this.targetCollision = this.checkIfCollideWithPlayer()) ? this.determineAiState() : (this.targetCollision = this.checkIfCollideWithOthers(), this.targetColllision && this.determineAiState());
                this.boostRandomly();
                break;
            case this._aiStates._OVERTAKELEFT:
                this.overtakeLeft(this.targetCollision);
                break;
            case this._aiStates._OVERTAKERIGHT:
                this.overtakeRight(this.targetCollision);
                break;
            case this._aiStates._BRAKE:
                this.brake();
                break;
            case this._aiStates._MAINTAIN:
                this.maintain()
            }
        },
        maintain: function() {
            this.pos.x > this.roadPositions.wallLeftX && this.pos.x <= this.roadPositions.lane1X ? (this.vel.x = this.car.max.speed.x, this.pos.x >= this.roadPositions.lane1X && (this.vel.x = 0, this._aiState = this._aiStates._CRUISING)) : this.pos.x > this.roadPositions.lane1X && this.pos.x <= this.roadPositions.lane2X ? (this.vel.x = -this.car.max.speed.x, this.pos.x <= this.roadPositions.lane1X && (this.vel.x = 0, this._aiState = this._aiStates._CRUISING)) : this.pos.x > this.roadPositions.lane2X && this.pos.x <= this.roadPositions.lane3X ? (this.vel.x = -this.car.max.speed.x, this.pos.x <= this.roadPositions.lane2X && (this.vel.x = 0, this._aiState = this._aiStates._CRUISING)) : this.pos.x > this.roadPositions.lane3X && this.pos.x <= this.roadPositions.wallRightX && (this.vel.x = -this.car.max.speed.x, this.pos.x <= this.roadPositions.lane3X && (this.vel.x = 0, this._aiState = this._aiStates._CRUISING))
        },
        determineAiState: function() {
            switch (this._aiMentality) {
            case this._aiMentalities._AGRRESSIVE:
                this._aiState = Math.floor(5 * Math.random() + 1);
                break;
            case this._aiMentalities._PASSIVE:
                this._aiState = Math.floor(4 * Math.random() + 1)
            }
        },
        driveRecklessly: function() {
            this.degreeTimer && 1 < this.degreeTimer.delta() && (this.vel.x = Math.floor(this.car.max.speed.x * Math.sin(this.degree * Math.PI / 180)), this.degree += 10, 360 < this.degree && (this.degree = 0, this._aiState = this._aiStates._CRUISING), this.degreeTimer.reset())
        },
        boostRandomly: function() {
            this._state != this._states._START && this._state != this._states._IDLE && this.game._state != this.game._states._GAMEEND && (null == this._aiBoostTimer && (this._aiBoostTimer = new ig.Timer), this._aiBoostTimer && this._aiBoostTimer.delta() > this.randomBoostTime && (this.car.boostOn || (this.boostTimer = new ig.Timer, this.car.boostOn = !0), this.randomBoostTime = Math.floor(8 * Math.random() + 2), this._aiBoostTimer.reset()))
        },
        checkOpponentConstraint: function() {
            this.pos.x < this.roadPositions.wallLeftX ? (this.vel.x = 50, this._aiState = this._aiStates._CRUISING) : this.pos.x + this.car.size.x > this.roadPositions.wallRightX && (this.vel.x = -50, this._aiState = this._aiStates._CRUISING)
        },
        checkIfCollideWithPlayer: function() {
            if (this.game.player) return this.checkCollide(this.game.player) ? this.game.player: null
        },
        checkIfCollideWithOthers: function() {
            if (this.game.obstacleGenerator) {
                var b = this.game.obstacleGenerator.getAllObstacles();
                for (index = 0; index < b.length; index++) if (this.checkCollide(b[index])) return b[index]
            }
            if (this.game.opponentGenerator) {
                b = this.game.opponentGenerator.getAllOpponents();
                for (index = 0; index < b.length; index++) if (this.checkCollide(b[index])) return b[index]
            }
            return null
        },
        checkCollide: function(b) {
            return b && (this.pos.x >= b.pos.x + b.car.size.x || this.pos.x + this.car.size.x <= b.pos.x) ? !1 : !0
        },
        overtakeLeft: function(b) {
            b ? this.pos.x + this.car.size.x > b.pos.x ? this.vel.x = -this.car.max.speed.x: this._aiState = this._aiStates._CRUISING: this._aiState = this._aiStates._CRUISING
        },
        overtakeRight: function(b) {
            b ? this.pos.x < b.pos.x + b.car.size.x ? this.vel.x = this.car.max.speed.x: this._aiState = this._aiStates._CRUISING: this._aiState = this._aiStates._CRUISING
        },
        brake: function() {
            this.speedY -= 150;
            0 > this.speedY && (this.speedY = 0, this._aiState = this._aiStates._CRUISING)
        },
        speedCompare: function() {
            this.vel.y = this.game.player ? 0 < this.speedY - this.game.player.speedY ? -(this.speedY - this.game.player.speedY) : 0 > this.speedY - this.game.player.speedY ? -(this.speedY - this.game.player.speedY) : 0 : -this.speedY
        },
        check: function(b) {
            this.parent(b);
            if (this.hitFront && !this.car.carCrash && !(0 < this.vel.x || 0 > this.vel.x)) this.vel.x = 0 == Math.floor(2 * Math.random()) ? this.car.max.speed.x: -this.car.max.speed.x
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.drivers.opponent-generator").requires("game.entities.commons.generator", "game.entities.game.drivers.opponent").defines(function() {
    EntityOpponentGenerator = EntityGenerator.extend({
        opponents: [],
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.loadOpponents()
        },
        loadOpponents: function() {
            var b = Math.floor(8 * Math.random());
            this.checkObjectForNull(this.opponents[0]) && (b = {
                carType: b,
                aName: "opponent",
                ai: 0
            },
            this.opponents.push(ig.game.spawnEntity(EntityOpponent, desktopWidth / 2 - 130, desktopHeight / 2 + 175, b)));
            b = Math.floor(8 * Math.random());
            this.checkObjectForNull(this.opponents[1]) && (b = {
                carType: b,
                aName: "opponent",
                ai: 1
            },
            this.opponents.push(ig.game.spawnEntity(EntityOpponent, desktopWidth / 2 + 80, desktopHeight / 2 + 175, b)))
        },
        startOpponents: function() {
            for (index = 0; index < this.opponents.length; index++) this.opponents[index] && this.opponents[index].startCar()
        },
        getAllOpponents: function() {
            return this.opponents ? this.opponents: []
        },
        cleanUp: function() {
            for (innerindex = 0; innerindex < this.opponents.length; innerindex++) if (this.opponents[innerindex] && (this.opponents[innerindex].finish || (this.opponents[innerindex].finish = !0), 0 > this.opponents[innerindex].pos.y + this.opponents[innerindex].car.size.y || 640 < this.opponents[innerindex].pos.y)) this.opponents[innerindex].terminate(),
            this.opponents[innerindex] = null
        },
        drawLights: function() {
            var b = ig.system.context;
            b.save();
            for (innerindex = 0; innerindex < this.opponents.length; innerindex++) this.opponents[innerindex] && 0 < this.opponents[innerindex].car.health && this.opponents[innerindex].car.lightsOn && this.opponents[innerindex].car.lights.drawLight(b, this.opponents[innerindex].car.pos.x, this.opponents[innerindex].car.pos.y + this.opponents[innerindex].car.lightOffsetY, this.opponents[innerindex].car.size.x, this.opponents[innerindex].car.size.y);
            b.restore()
        },
        drawSirenLights: function() {
            var b = ig.system.context;
            b.save();
            for (innerindex = 0; innerindex < this.opponents.length; innerindex++) this.opponents[innerindex] && 0 < this.opponents[innerindex].car.health && this.opponents[innerindex].car.sirenLights && this.opponents[innerindex].car.sirenLights.drawLight(b, this.opponents[innerindex].car.pos.x, this.opponents[innerindex].car.pos.y + this.opponents[innerindex].car.policeSirenOffset, this.opponents[innerindex].car.size.x, this.opponents[innerindex].car.size.y);
            b.restore()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.drivers.obstacle-generator").requires("game.entities.commons.generator", "game.entities.game.drivers.opponent").defines(function() {
    EntityObstacleGenerator = EntityGenerator.extend({
        obstacles: [],
        period: 2,
        maxItems: 5,
        obstacleTimer: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.obstacleTimer = new ig.Timer
        },
        spawnObstacle: function() {
            if (this.obstacleTimer && this.obstacleTimer.delta() > this.period && this.obstacles.length < this.maxItems) {
                var b = Math.floor(4 * Math.random()) + 8,
                c = Math.floor(305 * Math.random() + 66),
                d = Math.floor(50 * Math.random()) + 110;
                this.obstacles.push(ig.game.spawnEntity(EntityOpponent, c, -150, {
                    carType: b,
                    aName: "obstacle",
                    ai: 0,
                    startSpeedY: d,
                    maxSpeedY: d,
                    minHealth: 25,
                    maxHealth: 40
                }));
                ig.game.sortEntitiesDeferred();
                this.obstacleTimer.reset()
            }
        },
        popEntity: function(b) {
            if (b && "obstacle" == b.name) {
                b = [];
                for (count = 0; count < this.obstacles.length; count++) {
                    var c = this.obstacles[count]; (!c || !c._killed) && c && b.push(c)
                }
                this.obstacles = b
            }
        },
        getAllObstacles: function() {
            return this.obstacles ? this.obstacles: []
        },
        drawLights: function() {
            var b = ig.system.context;
            b.save();
            for (innerindex = 0; innerindex < this.obstacles.length; innerindex++) this.obstacles[innerindex] && 0 < this.obstacles[innerindex].car.health && this.obstacles[innerindex].car.lightsOn && this.obstacles[innerindex].car.lights.drawLight(b, this.obstacles[innerindex].car.pos.x, this.obstacles[innerindex].car.pos.y + this.obstacles[innerindex].car.lightOffsetY, this.obstacles[innerindex].car.size.x, this.obstacles[innerindex].car.size.y);
            b.restore()
        },
        drawSirenLights: function() {
            var b = ig.system.context;
            b.save();
            for (innerindex = 0; innerindex < this.obstacles.length; innerindex++) this.obstacles[innerindex] && 0 < this.obstacles[innerindex].car.health && this.obstacles[innerindex].car.sirenLights && this.obstacles[innerindex].car.sirenLights.drawLight(b, this.obstacles[innerindex].car.pos.x, this.obstacles[innerindex].car.pos.y + this.obstacles[innerindex].car.policeSirenOffset, this.obstacles[innerindex].car.size.x, this.obstacles[innerindex].car.size.y);
            b.restore()
        },
        cleanUp: function() {
            for (innerindex = 0; innerindex < this.obstacles.length; innerindex++) if (this.obstacles[innerindex] && (this.obstacles[innerindex].finish || (this.obstacles[innerindex].finish = !0), 0 > this.obstacles[innerindex].pos.y + this.obstacles[innerindex].car.size.y || 640 < this.obstacles[innerindex].pos.y)) this.obstacles[innerindex].terminate(),
            this.obstacles[innerindex] = null
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.powerups.power-up").requires("game.entities.commons.in-game").defines(function() {
    EntityPowerUp = EntityInGame.extend({
        powerUpType: 0,
        _powerUpTypes: {
            _FUEL: 0,
            _MONEY: 1,
            _HEALTH: 2,
            _NITRO: 3
        },
        size: {
            x: 30,
            y: 34
        },
        moneyValue: 25,
        repairValue: 20,
        fuelValue: 15,
        nitroValue: 10,
        speedY: -100,
        progress: 1,
        zIndex: 3,
        powerUpsImage: new ig.Image("media/graphics/sprites/environment/powerups.png"),
        curImage: null,
        isFlipping: !1,
        flipProgress: 0,
        flipTimer: null,
        flipReverse: !1,
        name: "powerUp",
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.debugTimer = new ig.Timer;
            this.flipTimer = new ig.Timer;
            d.type && (this.powerUpType = d.type, d.type == this._powerUpTypes._NITRO && (this.name = "powerUpNitro"))
        },
        update: function() {
            this.parent();
            null == this.game && (this.game = ig.game.getEntityByName("game"));
            this.speedCompare();
            this.positionCompare();
            this.flipTimer && 0.04 < this.flipTimer.delta() && (this.flipReverse ? (this.progress -= 0.1, 0 >= this.progress && (this.progress = 0, this.flipReverse = !1)) : (this.progress += 0.1, 1 <= this.progress && (this.progress = 1, this.flipReverse = !0)), this.flipTimer.reset())
        },
        draw: function() {
            this.parent();
            var b = ig.system.context;
            b.save();
            b.translate(this.pos.x + 12.5, this.pos.y);
            b.scale(this.progress, 1);
            b.translate( - (this.pos.x + 12.5), -this.pos.y);
            this.drawPowerUp(b);
            b.restore()
        },
        drawPowerUp: function(b) {
            b.drawImage(this.powerUpsImage.data, 0 + 25 * this.powerUpType, 0, 25, 28, this.pos.x, this.pos.y, this.size.x, this.size.y)
        },
        check: function(b) {
            if ("player" == b.name) {
                switch (this.powerUpType) {
                case this._powerUpTypes._FUEL:
                    b.car.fuel += this.fuelValue;
                    b.car.fuel > b.car.max.fuel && (b.car.fuel = b.car.max.fuel);
                    break;
                case this._powerUpTypes._MONEY:
                    this.game._state == this.game._states._GAMERUNNING && this.game.hud.adjustMoney(this.moneyValue);
                    break;
                case this._powerUpTypes._HEALTH:
                    b.car.health += this.repairValue;
                    b.car.health > b.car.max.health && (b.car.health = b.car.max.health);
                    break;
                case this._powerUpTypes._NITRO:
                    b.car.nitro += this.nitroValue,
                    b.car.nitro > b.car.max.nitro && (b.car.nitro = b.car.max.nitro)
                }
                this.playSound("powerup");
                this.returnThisToCorrectPool()
            }
        },
        speedCompare: function() {
            this.game.player && this && (this.vel.y = null == this.game.player ? -this.speedY: this.game.player.speedY - this.speedY)
        },
        positionCompare: function() {
            640 < this.pos.y && this.returnThisToCorrectPool()
        },
        returnThisToCorrectPool: function() {
            switch (this.powerUpType) {
            case this._powerUpTypes._FUEL:
                this.game.powerUpGenerator[0] && this.game.powerUpGenerator[0].returnEntity(this);
                break;
            case this._powerUpTypes._MONEY:
                this.game.powerUpGenerator[1] && this.game.powerUpGenerator[1].returnEntity(this);
                break;
            case this._powerUpTypes._HEALTH:
                this.game.powerUpGenerator[2] && this.game.powerUpGenerator[2].returnEntity(this);
                break;
            case this._powerUpTypes._NITRO:
                this.game.powerUpGenerator[3] && this.game.powerUpGenerator[3].returnEntity(this)
            }
        },
        handleMovementTrace: function() {
            this.pos.y += this.vel.y * ig.system.tick
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.powerups.power-up-generator").requires("game.entities.commons.generator", "game.entities.game.powerups.power-up").defines(function() {
    EntityPowerUpGenerator = EntityGenerator.extend({
        pool: [],
        maxItems: 2,
        periodToSpawn: 2,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        spawnPowerUp: function(b, c) {
            if (this.spawnTimer && this.spawnTimer.delta() > this.periodToSpawn) {
                if (0 < this.pool.length) {
                    var d = this.pool.pop();
                    this.resetPowerUp(d, b, c)
                }
                this.spawnTimer.reset()
            }
        },
        resetPowerUp: function(b, c, d) {
            b._killed = !1;
            b.type = ig.Entity.TYPE.A;
            b.checkAgainst = ig.Entity.TYPE.B;
            b.collides = ig.Entity.COLLIDES.NEVER;
            b.pos.x = c;
            b.pos.y = d;
            b.speedY = 0;
            ig.game.entities.push(b);
            ig.game.sortEntitiesDeferred()
        },
        returnEntity: function(b) {
            this.pool.length < this.maxItems && (this.pool.push(b), b.kill())
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.powerups.fuel-generator").requires("game.entities.game.powerups.power-up-generator").defines(function() {
    EntityFuelGenerator = EntityPowerUpGenerator.extend({
        periodTimer: null,
        min: 2,
        max: 5,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.maxItems = 1;
            this.periodTimer = new ig.Timer;
            for (index = 0; index < this.maxItems; index++) this.pool.push(ig.game.spawnEntity(EntityPowerUp, 0, 0, {
                type: 0
            })),
            this.pool[index].kill()
        },
        update: function() {
            this.parent();
            this.periodTimer && 1 < this.periodTimer.delta() && (this.periodToSpawn = Math.floor(Math.random() * this.max) + this.min)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.powerups.repair-generator").requires("game.entities.game.powerups.power-up-generator").defines(function() {
    EntityRepairGenerator = EntityPowerUpGenerator.extend({
        periodTimer: null,
        min: 3,
        max: 4,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.maxItems = 1;
            this.periodTimer = new ig.Timer;
            for (index = 0; index < this.maxItems; index++) this.pool.push(ig.game.spawnEntity(EntityPowerUp, 0, 0, {
                type: 2
            })),
            this.pool[index].kill()
        },
        update: function() {
            this.parent();
            this.periodTimer && 1 < this.periodTimer.delta() && (this.periodToSpawn = Math.floor(Math.random() * this.max) + this.min)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.powerups.money-generator").requires("game.entities.game.powerups.power-up-generator").defines(function() {
    EntityMoneyGenerator = EntityPowerUpGenerator.extend({
        periodTimer: null,
        min: 1,
        max: 3,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.maxItems = 3;
            this.periodTimer = new ig.Timer;
            for (index = 0; index < this.maxItems; index++) this.pool.push(ig.game.spawnEntity(EntityPowerUp, 0, 0, {
                type: 1
            })),
            this.pool[index].kill()
        },
        update: function() {
            this.parent();
            this.periodTimer && 1 < this.periodTimer.delta() && (this.periodToSpawn = Math.floor(Math.random() * this.max) + this.min)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.powerups.nitro-generator").requires("game.entities.game.powerups.power-up-generator").defines(function() {
    EntityNitroGenerator = EntityPowerUpGenerator.extend({
        periodTimer: null,
        min: 2,
        max: 5,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.maxItems = 1;
            this.periodTimer = new ig.Timer;
            for (index = 0; index < this.maxItems; index++) this.pool.push(ig.game.spawnEntity(EntityPowerUp, 0, 0, {
                type: 3
            })),
            this.pool[index].kill()
        },
        update: function() {
            this.parent();
            this.periodTimer && 1 < this.periodTimer.delta() && (this.periodToSpawn = Math.floor(Math.random() * this.max) + this.min)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.pedestrians.pedestrian").requires("game.entities.commons.in-game").defines(function() {
    EntityPedestrian = EntityInGame.extend({
        name: "pedestrian",
        zIndex: 3,
        dead: !1,
        moneyValue: 200,
        scored: !1,
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.B,
        secondCheckAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.NEVER,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent();
            null == this.game && (this.game = ig.game.getEntityByName("game"))
        },
        check: function(b) {
            "player" == b.name && !this.scored && this.game._state == this.game._states._GAMERUNNING && (this.game.hud.adjustMoney( - this.moneyValue), this.scored = this.dead = !0);
            if ("opponent" == b.name || "obstacle" == b.name) this.scored = this.dead = !0
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.pedestrians.girl-walk").requires("game.entities.game.pedestrians.pedestrian").defines(function() {
    EntityGirlWalk = EntityPedestrian.extend({
        size: {
            x: 30,
            y: 30
        },
        offset: {
            x: 5,
            y: 5
        },
        variant: 0,
        walkAnimSheet: new ig.AnimationSheet("media/graphics/sprites/pedestrian/girl_down_walk.png", 40, 40),
        deadAnimSheet: new ig.AnimationSheet("media/graphics/sprites/pedestrian/girl_down_dead.png", 37, 81),
        walk2AnimSheet: new ig.AnimationSheet("media/graphics/sprites/pedestrian/girl_up_walk.png", 40, 40),
        dead2AnimSheet: new ig.AnimationSheet("media/graphics/sprites/pedestrian/girl_up_dead.png", 36, 81),
        speedY: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            d.pedestrianVariant && (this.variant = d.pedestrianVariant);
            switch (this.variant) {
            case 0:
                this.speedY = -20;
                this.animSheet = this.walkAnimSheet;
                this.addAnim("idle", 0.1, [0, 1, 2, 3]);
                this.animSheet = this.deadAnimSheet;
                this.addAnim("dead", 1, [0]);
                break;
            case 1:
                this.speedY = 20,
                this.animSheet = this.walk2AnimSheet,
                this.addAnim("idle", 0.1, [0, 1, 2, 3]),
                this.animSheet = this.dead2AnimSheet,
                this.addAnim("dead", 1, [0])
            }
        },
        update: function() {
            this.parent();
            switch (this.variant) {
            case 0:
                this.dead && (this.currentAnim = this.anims.dead.rewind(), this.speedY = 0);
                this.vel.y = this.game.player ? this.game.player.speedY - this.speedY: -this.speedY;
                640 < this.pos.y && (this.kill(), this.game.pedestrianGenerator.popEntity(this));
                break;
            case 1:
                this.dead && (this.currentAnim = this.anims.dead.rewind(), this.speedY = 0),
                this.vel.y = this.game.player ? this.game.player.speedY - this.speedY: -this.speedY,
                640 < this.pos.y && (this.kill(), this.game.pedestrianGenerator.popEntity(this))
            }
        },
        draw: function() {
            this.parent()
        },
        handleMovementTrace: function() {
            this.pos.y += this.vel.y * ig.system.tick
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.pedestrians.blue-guy-walk").requires("game.entities.game.pedestrians.pedestrian").defines(function() {
    EntityBlueGuyWalk = EntityPedestrian.extend({
        size: {
            x: 30,
            y: 30
        },
        offset: {
            x: 5,
            y: 5
        },
        variant: 0,
        walkAnimSheet: new ig.AnimationSheet("media/graphics/sprites/pedestrian/man_blue_walk.png", 40, 40),
        deadAnimSheet: new ig.AnimationSheet("media/graphics/sprites/pedestrian/man_blue_dead.png", 42, 81),
        speedY: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            d.pedestrianVariant && (this.variant = d.pedestrianVariant);
            switch (this.variant) {
            case 0:
                this.speedY = -20,
                this.animSheet = this.walkAnimSheet,
                this.addAnim("idle", 0.1, [0, 1, 2, 3]),
                this.animSheet = this.deadAnimSheet,
                this.addAnim("dead", 1, [0])
            }
        },
        update: function() {
            this.parent();
            switch (this.variant) {
            case 0:
                this.dead && (this.currentAnim = this.anims.dead.rewind(), this.speedY = 0),
                this.vel.y = this.game.player ? this.game.player.speedY - this.speedY: -this.speedY,
                640 < this.pos.y && (this.kill(), this.game.pedestrianGenerator.popEntity(this))
            }
        },
        draw: function() {
            this.parent()
        },
        handleMovementTrace: function() {
            this.pos.y += this.vel.y * ig.system.tick
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.pedestrians.guy-cycle").requires("game.entities.game.pedestrians.pedestrian").defines(function() {
    EntityGuyCycle = EntityPedestrian.extend({
        size: {
            x: 20,
            y: 70
        },
        offset: {
            x: 5,
            y: 5
        },
        variant: 0,
        walkAnimSheet: new ig.AnimationSheet("media/graphics/sprites/pedestrian/man_bike_walk.png", 30, 77),
        deadAnimSheet: new ig.AnimationSheet("media/graphics/sprites/pedestrian/man_bike_dead.png", 65, 91),
        speedY: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            d.pedestrianVariant && (this.variant = d.pedestrianVariant);
            switch (this.variant) {
            case 0:
                this.speedY = 150,
                this.animSheet = this.walkAnimSheet,
                this.addAnim("idle", 0.1, [0, 1, 2, 3]),
                this.animSheet = this.deadAnimSheet,
                this.addAnim("dead", 1, [0])
            }
        },
        update: function() {
            this.parent();
            switch (this.variant) {
            case 0:
                this.dead && (this.currentAnim = this.anims.dead.rewind(), this.speedY = 0),
                this.vel.y = this.game.player ? this.game.player.speedY - this.speedY: -this.speedY,
                640 < this.pos.y && (this.kill(), this.game.pedestrianGenerator.popEntity(this))
            }
        },
        draw: function() {
            this.parent()
        },
        handleMovementTrace: function() {
            this.pos.y += this.vel.y * ig.system.tick
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.pedestrians.red-guy-walk").requires("game.entities.game.pedestrians.pedestrian").defines(function() {
    EntityRedGuyWalk = EntityPedestrian.extend({
        size: {
            x: 30,
            y: 30
        },
        offset: {
            x: 5,
            y: 5
        },
        variant: 0,
        walkAnimSheet: new ig.AnimationSheet("media/graphics/sprites/pedestrian/man_red_walk.png", 40, 40),
        deadAnimSheet: new ig.AnimationSheet("media/graphics/sprites/pedestrian/man_red_dead.png", 36, 81),
        moneyValue: 400,
        speedY: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            d.pedestrianVariant && (this.variant = d.pedestrianVariant);
            switch (this.variant) {
            case 0:
                this.speedY = -20,
                this.animSheet = this.walkAnimSheet,
                this.addAnim("idle", 0.1, [0, 1, 2, 3]),
                this.animSheet = this.deadAnimSheet,
                this.addAnim("dead", 1, [0])
            }
        },
        update: function() {
            this.parent();
            switch (this.variant) {
            case 0:
                this.dead && (this.currentAnim = this.anims.dead.rewind(), this.speedY = 0),
                this.vel.y = this.game.player ? this.game.player.speedY - this.speedY: -this.speedY,
                640 < this.pos.y && (this.kill(), this.game.pedestrianGenerator.popEntity(this))
            }
        },
        draw: function() {
            this.parent()
        },
        handleMovementTrace: function() {
            this.pos.y += this.vel.y * ig.system.tick
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.pedestrians.pedestrian-generator").requires("game.entities.commons.generator", "game.entities.game.pedestrians.girl-walk", "game.entities.game.pedestrians.blue-guy-walk", "game.entities.game.pedestrians.guy-cycle", "game.entities.game.pedestrians.red-guy-walk").defines(function() {
    EntityPedestrianGenerator = EntityGenerator.extend({
        pedestrians: [],
        period: 2,
        maxItems: 3,
        pedestrianTimer: null,
        pedestrianTypes: {
            girlWalk: 0,
            guyWalkDown: 1,
            redGuyWalkDown: 2,
            guyCycleUp: 3
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.pedestrianTimer = new ig.Timer
        },
        spawnPedestrian: function() {
            if (this.pedestrianTimer && this.pedestrianTimer.delta() > this.period && this.pedestrians.length < this.maxItems) {
                var b = Math.floor(4 * Math.random());
                this.period = Math.floor(3 * Math.random() + 3);
                switch (b) {
                case this.pedestrianTypes.girlWalk:
                    var b = Math.floor(2 * Math.random()),
                    c = Math.floor(2 * Math.random());
                    switch (b) {
                    case 0:
                        switch (c) {
                        case 0:
                            this.pedestrians.push(ig.game.spawnEntity(EntityGirlWalk, 50, -100, {
                                pedestrianVariant: 0
                            }));
                            break;
                        case 1:
                            this.pedestrians.push(ig.game.spawnEntity(EntityGirlWalk, 400, -100, {
                                pedestrianVariant: 0
                            }))
                        }
                        break;
                    case 1:
                        switch (c) {
                        case 0:
                            this.pedestrians.push(ig.game.spawnEntity(EntityGirlWalk, 50, -100, {
                                pedestrianVariant: 1
                            }));
                            break;
                        case 1:
                            this.pedestrians.push(ig.game.spawnEntity(EntityGirlWalk, 400, -100, {
                                pedestrianVariant: 1
                            }))
                        }
                    }
                    break;
                case this.pedestrianTypes.guyWalkDown:
                    b = 0;
                    c = Math.floor(2 * Math.random());
                    switch (b) {
                    case 0:
                        switch (c) {
                        case 0:
                            this.pedestrians.push(ig.game.spawnEntity(EntityBlueGuyWalk, 50, -100, {
                                pedestrianVariant: 0
                            }));
                            break;
                        case 1:
                            this.pedestrians.push(ig.game.spawnEntity(EntityBlueGuyWalk, 400, -100, {
                                pedestrianVariant: 0
                            }))
                        }
                    }
                    break;
                case this.pedestrianTypes.redGuyWalkDown:
                    b = 0;
                    c = Math.floor(2 * Math.random());
                    switch (b) {
                    case 0:
                        switch (c) {
                        case 0:
                            this.pedestrians.push(ig.game.spawnEntity(EntityRedGuyWalk, 50, -100, {
                                pedestrianVariant: 0
                            }));
                            break;
                        case 1:
                            this.pedestrians.push(ig.game.spawnEntity(EntityRedGuyWalk, 400, -100, {
                                pedestrianVariant: 0
                            }))
                        }
                    }
                    break;
                case this.pedestrianTypes.guyCycleUp:
                    switch (b = 0, c = Math.floor(2 * Math.random()), b) {
                    case 0:
                        switch (c) {
                        case 0:
                            this.pedestrians.push(ig.game.spawnEntity(EntityGuyCycle, 50, -100, {
                                pedestrianVariant: 0
                            }));
                            break;
                        case 1:
                            this.pedestrians.push(ig.game.spawnEntity(EntityGuyCycle, 400, -100, {
                                pedestrianVariant: 0
                            }))
                        }
                    }
                }
                ig.game.sortEntitiesDeferred();
                this.pedestrianTimer.reset()
            }
        },
        popEntity: function(b) {
            if (b && "pedestrian" == b.name) {
                b = [];
                for (index = 0; index < this.pedestrians.length; index++) {
                    var c = this.pedestrians[index];
                    this.pedestrians[index]._killed || b.push(c)
                }
                this.pedestrians = b
            }
        },
        cleanUp: function() {
            for (count = 0; count < this.pedestrians.length; count++) this.pedestrians[count] && (this.pedestrians[count].kill(), this.pedestrians[count] = null)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.screen-game").requires("game.entities.commons.screen", "game.entities.game.drivers.player", "game.entities.game.drivers.hud", "game.entities.game.screen-finish", "game.entities.game.env_components.environment", "game.entities.game.drivers.opponent-generator", "game.entities.game.drivers.obstacle-generator", "game.entities.game.powerups.fuel-generator", "game.entities.game.powerups.repair-generator", "game.entities.game.powerups.money-generator", "game.entities.game.powerups.nitro-generator", "game.entities.game.pedestrians.pedestrian-generator").defines(function() {
    EntityScreenGame = EntityScreen.extend({
        _states: {
            _INIT: -1,
            _COUNTDOWN: 0,
            _GAMESTART: 1,
            _GAMERUNNING: 2,
            _GAMEPLAYERWIN: 3,
            _GAMEPLAYEROUT: 4,
            _GAMEPLAYERCRASH: 5
        },
        font: new ig.Font("media/font/font.png"),
        _state: -1,
        gameRoadLength: 0,
        zIndex: 5,
        name: "game",
        waitTimer: null,
        sortTimer: null,
        gameTimer: null,
        flashTimer: null,
        hudUpdateTimer: null,
        flashStartTime: 0.4,
        flashEndTime: 0.7,
        powerUpGenerator: [],
        opponentGenerator: null,
        obstacleGenerator: null,
        pedestrianGenerator: null,
        hud: null,
        streetLengthMin: 15E3,
        streetLengthMax: 25E3,
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || (ig.game.timeMultiplier = 1, this.flashTimer = new ig.Timer, this.pauseBGM("candidate1"), this.loadEnvironment(), this.loadScreenFilter(), this.loadOpponentGenerator(), this.loadPlayer(), this.loadPowerUpGenerators(), this.loadObstacleGenerator(), this.loadPedestrianGenerator(), this.loadHUD(), this.loadFinishScreen())
        },
        update: function() {
            this.parent();
            switch (this._state) {
            case this._states._INIT:
                this._state = this._states._COUNTDOWN;
                this.waitTimer = new ig.Timer;
                this.sortTimer = new ig.Timer;
                this.hudUpdateTimer = new ig.Timer;
                break;
            case this._states._COUNTDOWN:
                this.countdown();
                break;
            case this._states._GAMESTART:
                this.startGame();
                this.updateHud();
                this.gameTimer = new ig.Timer;
                break;
            case this._states._GAMERUNNING:
                this.generatePowerUps();
                this.generateObstacles();
                this.checkEnvironment();
                this.updateHud();
                this.checkPlayerWinCondition() ? (this._state = this._states._GAMEPLAYERWIN, this.pauseBGM("candidate1")) : this.checkPlayerFuel() ? (this._state = this._states._GAMEPLAYEROUT, this.pauseBGM("candidate1")) : this.checkPlayerEndurance() && (this._state = this._states._GAMEPLAYERCRASH, this.pauseBGM("candidate1"));
                break;
            case this._states._GAMEPLAYERWIN:
                this.stopSound("siren");
                this.checkEnvironment();
                this.cleanUpOpponents();
                break;
            case this._states._GAMEPLAYEROUT:
                this.stopSound("siren");
                this.checkEnvironment();
                this.checkFinishScreenCondition();
                this.cleanUpOpponents();
                break;
            case this._states._GAMEPLAYERCRASH:
                this.stopSound("siren"),
                this.checkEnvironment(),
                this.checkFinishScreenCondition(),
                this.cleanUpOpponents()
            }
        },
        startGame: function() {
            this.opponentGenerator && (this.opponentGenerator.startOpponents(), this._state = this._states._GAMERUNNING)
        },
        countdown: function() {
            ig.input.pressed("click") && this.waitTimer && 0.1 < this.waitTimer.delta() && (this.playBGM("candidate1"), this.player && this.player.startCar(), this._state = this._states._GAMESTART, this.waitTimer.reset())
        },
        checkFinishScreenCondition: function() {
            if (this.finishScreen && this.environment && this.player) if (this.environment.endLine.pos.y >= this.player.pos.y && 0 < this.player.car.fuel && 0 < this.player.car.health) {
                if (0 > this.player.pos.y + this.player.car.size.y || 640 < this.player.pos.y) this.player.pos.y = 900
            } else 0 >= this.player.car.fuel ? this.finishScreen.drawOutScreen() : 0 >= this.player.car.health && this.finishScreen.drawCrashScreen()
        },
        formatTime: function() {
            var b = this.gameTimer.delta(),
            c = Math.floor(b / 60),
            d = Math.floor(b % 60),
            f = this.gameRoadLength / 400;
            ig.game.timeMultiplier = b < f - 10 ? 1.2 : b >= f - 10 && b < f - 5 ? 1.1 : 1;
            console.log("totalGameTime: " + b + ": timetobeat: " + f);
            return "Time: " + c + " m: " + d + " s"
        },
        cleanUpOpponents: function() {
            this.opponentGenerator && (this.opponentGenerator.cleanUp(), this.opponentGenerator.kill());
            this.obstacleGenerator && (this.obstacleGenerator.cleanUp(), this.obstacleGenerator.kill())
        },
        checkPlayerWinCondition: function() {
            return this.environment.endLine.pos.y >= this.player.car.pos.y ? (this.finishScreen.drawWinScreen(), this.finishScreen.drawTextOnScreen(this.formatTime()), this.finishScreen.drawMoneyOnScreen(this.hud.currentMoney), this.finishScreen.saveMoney(), !0) : !1
        },
        checkPlayerFuel: function() {
            return 0 >= this.player.car.fuel ? (this.player.car.fuel = 0, this.hud.adjustFuel(this.player.car.fuel / this.player.car.max.fuel), !0) : !1
        },
        checkPlayerEndurance: function() {
            return 0 >= this.player.car.health ? (this.player.car.health = 0, this.hud.adjustHealth(this.player.car.health / this.player.car.max.health), !0) : !1
        },
        draw: function() {
            this.parent();
            this.drawTapToStart();
            ig.global.wm || this.screenFilter.drawTimePeriodFilter(ig.system.context);
            this.drawPlayerLights();
            this.drawOpponentLights();
            this.screenFilter._state.timePeriod == this.screenFilter._timePeriodFilters._NIGHT && this.drawSirenLights()
        },
        updateHud: function() {
            this.hud && this.hudUpdateTimer && 0.05 < this.hudUpdateTimer.delta() && (this.hud.adjustHealth(this.player.car.health / this.player.car.max.health), this.hud.adjustFuel(this.player.car.fuel / this.player.car.max.fuel), this.hud.adjustNitro(this.player.car.nitro / this.player.car.max.nitro), this.hudUpdateTimer.reset())
        },
        drawTapToStart: function() {
            this._state == this._states._COUNTDOWN && this.font.draw("Tap or Click when Ready", 130, 320)
        },
        checkEnvironment: function() {
            this.environment && this.player && 0 < this.player.car.fuel && this.environment.scrollRoad(this.player.speedY)
        },
        drawPlayerLights: function() {
            if (this.player && this.player.car.lightsOn) {
                var b = ig.system.context;
                b.save();
                this.player.car.lights && this.player.car.lights.drawLight(b, this.player.car.pos.x, this.player.car.pos.y + this.player.car.lightOffsetY, this.player.car.size.x, this.player.car.size.y);
                b.restore()
            }
        },
        drawOpponentLights: function() {
            this.opponentGenerator && this.opponentGenerator.drawLights();
            this.obstacleGenerator && this.obstacleGenerator.drawLights()
        },
        drawSirenLights: function() {
            this.opponentGenerator && this.opponentGenerator.drawSirenLights();
            this.obstacleGenerator && this.obstacleGenerator.drawSirenLights()
        },
        generatePowerUps: function() {
            if (this.powerUpGenerator[0]) {
                var b = 380,
                c = 65,
                b = Math.floor(Math.random() * (b - c) + 1 + c);
                Math.random();
                this.powerUpGenerator[0].spawnPowerUp(b, -20)
            }
            this.powerUpGenerator[1] && (b = 380, c = 65, b = Math.floor(Math.random() * (b - c) + 1 + c), Math.random(), this.powerUpGenerator[1].spawnPowerUp(b, -20));
            this.powerUpGenerator[2] && (b = 380, c = 65, b = Math.floor(Math.random() * (b - c) + 1 + c), Math.random(), this.powerUpGenerator[2].spawnPowerUp(b, -20));
            this.powerUpGenerator[3] && (b = 380, c = 65, b = Math.floor(Math.random() * (b - c) + 1 + c), Math.random(), this.powerUpGenerator[3].spawnPowerUp(b, -20))
        },
        generateObstacles: function() {
            this.obstacleGenerator && this.obstacleGenerator.spawnObstacle()
        },
        generatePedestrian: function() {
            this.pedestrianGenerator && this.pedestrianGenerator.spawnPedestrian()
        },
        loadEnvironment: function() {
            if (this.checkObjectForNull(this.environment)) {
                var b = Math.floor(4 * Math.random());
                this.gameRoadLength = Math.floor(Math.random() * (this.streetLengthMax - this.streetLengthMin)) + 1 + this.streetLengthMin;
                this.environment = ig.game.spawnEntity(EntityEnvironment, 0, 0, {
                    envType: b,
                    streetLength: this.gameRoadLength
                })
            }
        },
        loadScreenFilter: function() {
            this.checkObjectForNull(this.screenFilter) && (this.screenFilter = ig.game.spawnEntity(EntityScreenFilter, 0, 0, {
                timePeriod: 1
            }))
        },
        loadPlayer: function() {
            this.checkObjectForNull(this.player) && (this.player = ig.game.spawnEntity(EntityPlayer, desktopWidth / 2 - 25, desktopHeight / 2 + 175, {
                carType: ig.game.player.carTypeSelected,
                playerCar: !0
            }), this.player.totalDistanceTravelled = 0)
        },
        loadOpponentGenerator: function() {
            this.checkObjectForNull(this.opponentGenerator) && (this.opponentGenerator = ig.game.spawnEntity(EntityOpponentGenerator, 0, 0))
        },
        loadObstacleGenerator: function() {
            this.checkObjectForNull(this.obstacleGenerator) && (this.obstacleGenerator = ig.game.spawnEntity(EntityObstacleGenerator, 0, 0))
        },
        loadPowerUpGenerators: function() {
            this.checkObjectForNull(this.powerUpGenerator[0]) && (this.powerUpGenerator[0] = ig.game.spawnEntity(EntityFuelGenerator, 0, 0));
            this.checkObjectForNull(this.powerUpGenerator[1]) && (this.powerUpGenerator[1] = ig.game.spawnEntity(EntityMoneyGenerator, 0, 0));
            this.checkObjectForNull(this.powerUpGenerator[2]) && (this.powerUpGenerator[2] = ig.game.spawnEntity(EntityRepairGenerator, 0, 0));
            this.checkObjectForNull(this.powerUpGenerator[3]) && (this.powerUpGenerator[3] = ig.game.spawnEntity(EntityNitroGenerator, 0, 0))
        },
        loadPedestrianGenerator: function() {
            this.checkObjectForNull(this.pedestrianGenerator) && (this.pedestrianGenerator = ig.game.spawnEntity(EntityPedestrianGenerator, 0, 0))
        },
        loadHUD: function() { ! ig.global.wm && null == this.hud && (this.hud = ig.game.spawnEntity(EntityHud, 0, 0))
        },
        loadFinishScreen: function() {
            this.checkObjectForNull(this.finishScreen) && (this.finishScreen = ig.game.spawnEntity(EntityScreenFinish, desktopWidth / 2, desktopHeight / 2), this.finishScreen.pos.x -= this.finishScreen.size.x / 2, this.finishScreen.pos.y -= this.finishScreen.size.y / 2)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.game").requires("impact.image", "game.entities.game.screen-game").defines(function() {
    LevelGame = {
        entities: [{
            type: "EntityScreenGame",
            x: 0,
            y: 0
        }],
        layer: [{
            name: "collision",
            width: 60,
            height: 80,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "",
            repeat: !1,
            preRender: !1,
            distance: 1,
            tilesize: 8,
            foreground: !1,
            data: [[1, 1, 1, 1, 1, 1, 1, 46, 46, 46, 0, 0, 0, 0, 47, 47, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 46, 46, 46, 0, 0, 0, 0, 47, 47, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 46, 46, 0, 0, 0, 47, 47, 47, 0, 47, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 47, 46, 0, 0, 47, 0, 47, 47, 0, 47, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 46, 47, 47, 47, 0, 0, 47, 47, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 46, 46, 0, 0, 0, 0, 47, 47, 0, 47, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 46, 46, 46, 46, 46, 0, 0, 47, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 46, 0, 0, 0, 0, 0, 47, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 46, 0, 0, 0, 0, 0, 47, 47, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 46, 0, 0, 0, 0, 47, 47, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 46, 0, 0, 0, 0, 0, 47, 47, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 49, 46, 0, 49, 0, 49, 49, 47, 47, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 46, 46, 0, 0, 0, 0, 47, 47, 47, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 47, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 47, 0, 47, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 0, 0, 0, 0, 0, 47, 47, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 47, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 47, 47, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 47, 47, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 47, 47, 47, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 0, 0, 0, 0, 0, 0, 47, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 47, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 47, 0, 0, 0, 0, 0, 0, 47, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 47, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 47, 0, 0, 0, 0, 0, 0, 0, 47, 0, 47, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 47, 0, 0, 0, 0, 0, 0, 0, 47, 47, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 47, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 47, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 1, 1, 1, 1, 1, 1, 1]]
        }]
    }
});
ig.baked = !0;
ig.module("game.entities.buttons.button-race").requires("game.entities.commons.button").defines(function() {
    EntityButtonRace = EntityButton.extend({
        size: {
            x: 143,
            y: 43
        },
        offset: {
            x: 0,
            y: 0
        },
        animSheet: new ig.AnimationSheet("media/graphics/sprites/buttons/game-buttons.png", 211, 43),
        name: "raceButton",
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [5])
        }
    })
});
ig.baked = !0;
ig.module("game.entities.shop.shop-car").requires("game.entities.commons.button").defines(function() {
    EntityShopCar = EntityButton.extend({
        size: {
            x: 115,
            y: 115
        },
        cost: 1E3,
        carType: 0,
        selected: !1,
        image: new ig.Image("media/graphics/sprites/shop/shop_cars.png"),
        imageBack: new ig.Image("media/graphics/sprites/shop/shop_cars_back.png"),
        imageBlock: new ig.Image("media/graphics/sprites/shop/shop_cars_block.png"),
        alreadyBought: !1,
        progress: 1,
        font: new ig.Font("media/font/font.png"),
        flipTimer: null,
        flipReverse: !1,
        back: !0,
        blockFillTimer: null,
        blocks: {
            baseSpeed: -1,
            health: -1,
            fuel: -1,
            nitro: -1,
            repair: -1,
            maxBaseSpeed: 1,
            maxHealth: 1,
            maxFuel: 1,
            maxNitro: 1,
            maxRepair: 1,
            baseSpeedMultiplier: 1,
            healthMultiplier: 1,
            fuelMultiplier: 1,
            nitroMultiplier: 1,
            repairMultiplier: 1
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            d.carType && (this.carType = d.carType);
            d.cost && (this.cost = d.cost);
            switch (this.carType) {
            case 0:
                this.setBlocksMax(1, 1, 1, 1, 1);
                this.cost = 0;
                break;
            case 1:
                this.setBlocksMax(2, 1, 1, 2, 1);
                break;
            case 2:
                this.setBlocksMax(2, 2, 2, 2, 1);
                break;
            case 3:
                this.setBlocksMax(1, 3, 3, 1, 3);
                break;
            case 4:
                this.setBlocksMax(3, 1, 1, 3, 1);
                break;
            case 5:
                this.setBlocksMax(3, 2, 2, 2, 2);
                break;
            case 6:
                this.setBlocksMax(3, 2, 1, 3, 1);
                break;
            case 7:
                this.setBlocksMax(2, 3, 3, 1, 2)
            }
            this.flipTimer = new ig.Timer;
            this.blockFillTimer = new ig.Timer
        },
        update: function() {
            this.parent();
            this.flipTimer && 0.01 < this.flipTimer.delta() && (this.flipReverse ? (this.progress -= 0.1, 0 >= this.progress && (this.progress = 0, this.flip(), this.switchBack(), this.blockFillTimer.reset())) : (this.progress += 0.1, 1 <= this.progress && (this.progress = 1)), this.flipTimer.reset());
            this.selected && this.blockFillTimer && 0.1 < this.blockFillTimer.delta() && (this.checkBlocks() && this.incrementBlocks(), this.blockFillTimer.reset())
        },
        draw: function() {
            this.parent();
            this.drawItem();
            this.selected ? (this.drawSelectBox(), this.drawBaseSpeedBlocks(), this.drawHealthBlocks(), this.drawFuelBlocks(), this.drawNitroBlocks(), this.drawRepairBlocks()) : 1 == this.progress && (this.alreadyBought ? this.drawReadyText() : this.drawCost(), this.resetBlocks())
        },
        drawReadyText: function() {
            this.font.draw("READY", this.pos.x + 105, this.pos.y + 87, ig.Font.ALIGN.RIGHT)
        },
        checkBlocks: function() {
            return this.blocks.baseSpeed < this.blocks.maxBaseSpeed || this.blocks.health < this.blocks.maxHealth || this.blocks.fuel < this.blocks.maxFuel || this.blocks.nitro < this.blocks.maxNitro || this.blocks.repair < this.blocks.maxRepair ? !0 : !1
        },
        incrementBlocks: function() {
            this.blocks.baseSpeed < this.blocks.maxBaseSpeed && this.blocks.baseSpeed++;
            this.blocks.health < this.blocks.maxHealth && this.blocks.health++;
            this.blocks.fuel < this.blocks.maxFuel && this.blocks.fuel++;
            this.blocks.nitro < this.blocks.maxNitro && this.blocks.nitro++;
            this.blocks.repair < this.blocks.maxRepair && this.blocks.repair++
        },
        setBlocksMax: function(b, c, d, f, g) {
            this.blocks.maxBaseSpeed = b;
            this.blocks.maxHealth = c;
            this.blocks.maxFuel = d;
            this.blocks.maxNitro = f;
            this.blocks.maxRepair = g;
            this.blocks.baseSpeedMultiplier = this.setMultipliers(this.blocks.maxBaseSpeed);
            this.blocks.healthMultiplier = this.setMultipliers(this.blocks.maxHealth);
            this.blocks.fuelMultiplier = this.setMultipliers(this.blocks.maxFuel);
            this.blocks.nitroMultiplier = this.setMultipliers(this.blocks.maxNitro);
            this.blocks.repairMultiplier = this.setMultipliers(this.blocks.maxRepair)
        },
        setMultipliers: function(b) {
            var c = 1;
            switch (b) {
            case 1:
                c = 1;
                break;
            case 2:
                c = 1.1;
                break;
            case 3:
                c = 1.2
            }
            return c
        },
        resetBlocks: function() {
            this.blocks.baseSpeed = -1;
            this.blocks.health = -1;
            this.blocks.fuel = -1;
            this.blocks.nitro = -1;
            this.blocks.repair = -1
        },
        switchBack: function() {
            this.back = !this.back
        },
        flip: function() {
            this.flipReverse = !this.flipReverse
        },
        clicked: function() {
            this.parent();
            this.selected = !this.selected;
            this.flip()
        },
        drawCost: function() {
            this.font.draw(this.cost, this.pos.x + 105, this.pos.y + 87, ig.Font.ALIGN.RIGHT)
        },
        drawItem: function() {
            var b = ig.system.context;
            b.save();
            this.flipBox(b);
            this.back ? b.drawImage(this.imageBack.data, 0 + 115 * this.carType, 0, 115, 115, this.pos.x, this.pos.y, 115, 115) : b.drawImage(this.image.data, 0 + 115 * this.carType, 0, 115, 115, this.pos.x, this.pos.y, 115, 115);
            b.restore()
        },
        drawSelectBox: function() {
            var b = ig.system.context;
            b.save();
            b.beginPath();
            var c = this.pos.x,
            d = this.pos.y,
            f = this.size.x,
            g = this.size.y;
            b.moveTo(c + 5, d);
            b.lineTo(c + f - 5, d);
            b.quadraticCurveTo(c + f, d, c + f, d + 5);
            b.lineTo(c + f, d + g - 5);
            b.quadraticCurveTo(c + f, d + g, c + f - 5, d + g);
            b.lineTo(c + 5, d + g);
            b.quadraticCurveTo(c, d + g, c, d + g - 5);
            b.lineTo(c, d + 5);
            b.quadraticCurveTo(c, d, c + 5, d);
            b.closePath();
            b.lineWidth = 2;
            b.strokeStyle = "rgba(255,255,255,1)";
            b.stroke();
            b.restore()
        },
        flipBox: function(b) {
            b.translate(this.pos.x + 57.5, this.pos.y);
            b.scale(this.progress, 1);
            b.translate( - (this.pos.x + 57.5), -this.pos.y)
        },
        drawBaseSpeedBlocks: function() {
            var b = ig.system.context;
            for (index = 0; index < this.blocks.baseSpeed; index++) b.drawImage(this.imageBlock.data, 62 + 26 * index, 426)
        },
        drawHealthBlocks: function() {
            var b = ig.system.context;
            for (index = 0; index < this.blocks.health; index++) b.drawImage(this.imageBlock.data, 224 + 26 * index, 426)
        },
        drawFuelBlocks: function() {
            var b = ig.system.context;
            for (index = 0; index < this.blocks.fuel; index++) b.drawImage(this.imageBlock.data, 138 + 26 * index, 478)
        },
        drawNitroBlocks: function() {
            var b = ig.system.context;
            for (index = 0; index < this.blocks.nitro; index++) b.drawImage(this.imageBlock.data, 63 + 26 * index, 527)
        },
        drawRepairBlocks: function() {
            var b = ig.system.context;
            for (index = 0; index < this.blocks.repair; index++) b.drawImage(this.imageBlock.data, 221 + 26 * index, 527)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.shop.shop-title").requires("game.entities.commons.in-game").defines(function() {
    EntityShopTitle = EntityInGame.extend({
        size: {
            x: 238,
            y: 80
        },
        image: new ig.Image("media/graphics/sprites/shop/shop_title.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        draw: function() {
            this.parent();
            this.image.draw(this.pos.x, this.pos.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.shop.screen-shop").requires("game.entities.commons.screen", "game.entities.buttons.button-race", "game.entities.shop.shop-car", "game.entities.shop.shop-title", "game.entities.buttons.button-mute").defines(function() {
    EntityScreenShop = EntityScreen.extend({
        size: {
            x: 48,
            y: 48
        },
        raceButton: null,
        shopTitle: null,
        carSelected: !1,
        theCarSelected: null,
        carsAvailable: [],
        carsMax: 8,
        font: new ig.Font("media/font/font.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.playBGM("candidate1");
            this.initMoney();
            null == this.raceButton && (this.raceButton = ig.game.spawnEntity(EntityButtonRace, -300, 572), this.raceButton.redirect = function() {
                ig.game.director.jumpTo(LevelGame)
            });
            null == this.muteButton && (this.muteButton = ig.game.spawnEntity(EntityButtonMute, 600, 572), this.muteButton.tween({
                pos: {
                    x: 300
                }
            },
            0.5, {
                easing: ig.Tween.Easing.Cubic.EaseOut
            }).start());
            null == this.shopTitle && (this.shopTitle = ig.game.spawnEntity(EntityShopTitle, 122, -80), this.shopTitle.tween({
                pos: {
                    y: 0
                }
            },
            1, {
                easing: ig.Tween.Easing.Elastic.EaseOut
            }).start());
            this.loadCars()
        },
        update: function() {
            this.parent();
            this.handleButtonInput()
        },
        draw: function() {
            this.parent();
            this.font.draw(ig.game.player.totalMoney, this.pos.x + 465, this.pos.y + 95, ig.Font.ALIGN.RIGHT)
        },
        handleButtonInput: function() {
            ig.input.pressed("click") && (this.muteButton && this.muteButton.checkOverlapWithPointer() && this.muteButton.clicked(), this.carSelected && this.raceButton && this.raceButton.checkOverlapWithPointer() && (this.playSound("carClose"), this.raceButton.setScale(0.9, 0.9), this.raceButton.clickTimer = new ig.Timer, this.theCarSelected && (ig.game.upgradeMultipliers.baseSpeed = this.theCarSelected.blocks.baseSpeedMultiplier, ig.game.upgradeMultipliers.health = this.theCarSelected.blocks.healthMultiplier, ig.game.upgradeMultipliers.fuel = this.theCarSelected.blocks.fuelMultiplier, ig.game.upgradeMultipliers.nitro = this.theCarSelected.blocks.nitroMultiplier, ig.game.upgradeMultipliers.repair = this.theCarSelected.blocks.repairMultiplier)), this.checkCarSelected())
        },
        selectCar: function() {},
        checkCarSelected: function() {
            for (count = 0; count < this.carsAvailable.length; count++) if (this.carsAvailable[count] && this.carsAvailable[count].checkOverlapWithPointer()) {
                for (index = 0; index < this.carsAvailable.length; index++) this.carsAvailable[index].selected && this.theCarSelected && this.theCarSelected.carType == this.carsAvailable[index].carType && (this.carsAvailable[index].clicked(), this.carSelected = !1, this.theCarSelected = null);
                for (index = 0; index < this.carsAvailable.length; index++) this.carsAvailable[index] && this.carsAvailable[index].checkOverlapWithPointer() && (this.carsAvailable[index].alreadyBought ? (this.playEngineSound(index), this.theCarSelected = this.carsAvailable[index], this.carsAvailable[index].clicked(), this.carSelected = !0, ig.game.player.carTypeSelected = index) : ig.game.player.totalMoney >= this.carsAvailable[index].cost ? (this.playEngineSound(index), this.purchaseCar(index), this.theCarSelected = this.carsAvailable[index], this.carsAvailable[index].clicked(), this.carSelected = !0, this.carsAvailable[index].alreadyBought = !0, ig.game.player.carTypeSelected = index) : (this.theCarSelected = null, this.carSelected = !1));
                this.carSelected ? this.raceButton.tween({
                    pos: {
                        x: 15
                    }
                },
                0.5, {
                    easing: ig.Tween.Easing.Cubic.EaseOut
                }).start() : this.raceButton.tween({
                    pos: {
                        x: -300
                    }
                },
                0.5, {
                    easing: ig.Tween.Easing.Cubic.EaseOut
                }).start();
                break
            }
        },
        playEngineSound: function() {
            this.stopSound("raceCar");
            this.playSound("raceCar")
        },
        initMoney: function() {
            if (ig.game.storage && this.supports_local_storage()) if (ig.game.storage.isSet(this.TOTALMONEYKEY)) {
                var b = ig.game.storage.get(this.TOTALMONEYKEY);
                ig.game.player.totalMoney = b
            } else ig.game.player.totalMoney = 2750,
            ig.game.storage.set(this.TOTALMONEYKEY, ig.game.player.totalMoney)
        },
        purchaseMoney: function(b) {
            if (ig.game.storage.isSet(this.TOTALMONEYKEY)) {
                var c = ig.game.storage.get(this.TOTALMONEYKEY);
                ig.game.player.totalMoney = c - this.carsAvailable[b].cost;
                ig.game.storage.set(this.TOTALMONEYKEY, ig.game.player.totalMoney)
            }
        },
        purchaseCar: function(b) {
            if (ig.game.storage && this.supports_local_storage()) switch (b) {
            case 0:
                ig.game.storage.isSet(this.CAR1KEY) ? (b = ig.game.storage.getInt(this.CAR1KEY), 1 != b && ig.game.storage.set(this.CAR1KEY, b)) : (ig.game.storage.set(this.CAR1KEY, 1), this.purchaseMoney(b));
                break;
            case 1:
                ig.game.storage.isSet(this.CAR2KEY) ? (b = ig.game.storage.getInt(this.CAR2KEY), 1 != b && ig.game.storage.set(this.CAR2KEY, b)) : (ig.game.storage.set(this.CAR2KEY, 1), this.purchaseMoney(b));
                break;
            case 2:
                ig.game.storage.isSet(this.CAR3KEY) ? (b = ig.game.storage.getInt(this.CAR3KEY), 1 != b && ig.game.storage.set(this.CAR3KEY, b)) : (ig.game.storage.set(this.CAR3KEY, 1), this.purchaseMoney(b));
                break;
            case 3:
                ig.game.storage.isSet(this.CAR4KEY) ? (b = ig.game.storage.getInt(this.CAR4KEY), 1 != b && ig.game.storage.set(this.CAR4KEY, b)) : (ig.game.storage.set(this.CAR4KEY, 1), this.purchaseMoney(b));
                break;
            case 4:
                ig.game.storage.isSet(this.CAR5KEY) ? (b = ig.game.storage.getInt(this.CAR5KEY), 1 != b && ig.game.storage.set(this.CAR5KEY, b)) : (ig.game.storage.set(this.CAR5KEY, 1), this.purchaseMoney(b));
                break;
            case 5:
                ig.game.storage.isSet(this.CAR6KEY) ? (b = ig.game.storage.getInt(this.CAR6KEY), 1 != b && ig.game.storage.set(this.CAR6KEY, b)) : (ig.game.storage.set(this.CAR6KEY, 1), this.purchaseMoney(b));
                break;
            case 6:
                ig.game.storage.isSet(this.CAR71KEY) ? (b = ig.game.storage.getInt(this.CAR7KEY), 1 != b && ig.game.storage.set(this.CAR7KEY, b)) : (ig.game.storage.set(this.CAR7KEY, 1), this.purchaseMoney(b));
                break;
            case 7:
                ig.game.storage.isSet(this.CAR8KEY) ? (b = ig.game.storage.getInt(this.CAR8KEY), 1 != b && ig.game.storage.set(this.CAR8KEY, b)) : (ig.game.storage.set(this.CAR8KEY, 1), this.purchaseMoney(b))
            }
        },
        loadCars: function() {
            for (index = 0; index < this.carsMax; index++) {
                var b = 6 + 118 * index,
                c = 128;
                360 < b && (b = 6 + 118 * (index - 4), c = 248);
                var d = 0;
                switch (index) {
                case 1:
                    d = 3E3;
                    break;
                case 2:
                    d = 4E3;
                    break;
                case 3:
                    d = 5750;
                    break;
                case 4:
                    d = 7750;
                    break;
                case 5:
                    d = 1E4;
                    break;
                case 6:
                    d = 12500;
                    break;
                case 7:
                    d = 15250
                }
                this.carsAvailable[index] = ig.game.spawnEntity(EntityShopCar, b, c, {
                    carType: index,
                    cost: d
                });
                this.checkIfCarsAlreadyBought(index)
            }
        },
        checkIfCarsAlreadyBought: function(b) {
            if (ig.game.storage && this.supports_local_storage()) switch (b) {
            case 0:
                this.carsAvailable[index].alreadyBought = !0;
                break;
            case 1:
                ig.game.storage.isSet(this.CAR2KEY) && (b = ig.game.storage.getInt(this.CAR2KEY), 1 == b && (this.carsAvailable[index].alreadyBought = !0));
                break;
            case 2:
                ig.game.storage.isSet(this.CAR3KEY) && (b = ig.game.storage.getInt(this.CAR3KEY), 1 == b && (this.carsAvailable[index].alreadyBought = !0));
                break;
            case 3:
                ig.game.storage.isSet(this.CAR4KEY) && (b = ig.game.storage.getInt(this.CAR4KEY), 1 == b && (this.carsAvailable[index].alreadyBought = !0));
                break;
            case 4:
                ig.game.storage.isSet(this.CAR5KEY) && (b = ig.game.storage.getInt(this.CAR5KEY), 1 == b && (this.carsAvailable[index].alreadyBought = !0));
                break;
            case 5:
                ig.game.storage.isSet(this.CAR6KEY) && (b = ig.game.storage.getInt(this.CAR6KEY), 1 == b && (this.carsAvailable[index].alreadyBought = !0));
                break;
            case 6:
                ig.game.storage.isSet(this.CAR7KEY) && (b = ig.game.storage.getInt(this.CAR7KEY), 1 == b && (this.carsAvailable[index].alreadyBought = !0));
                break;
            case 7:
                ig.game.storage.isSet(this.CAR8KEY) && (b = ig.game.storage.getInt(this.CAR8KEY), 1 == b && (this.carsAvailable[index].alreadyBought = !0))
            }
        }
    })
});
ig.baked = !0;
ig.module("game.levels.shop").requires("impact.image", "game.entities.shop.screen-shop").defines(function() {
    LevelShop = {
        entities: [{
            type: "EntityScreenShop",
            x: 0,
            y: 0
        }],
        layer: [{
            name: "bg",
            width: 15,
            height: 20,
            linkWithCollision: !1,
            visible: !0,
            tilesetName: "media/graphics/sprites/shop/shop_bg.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 32,
            foreground: !1,
            data: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60], [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75], [76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90], [91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105], [106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120], [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135], [136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150], [151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165], [166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180], [181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195], [196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210], [211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225], [226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240], [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255], [256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270], [271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285], [286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300]]
        }]
    };
    LevelShopResources = [new ig.Image("media/graphics/sprites/shop/shop_bg.jpg")]
});
ig.baked = !0;
ig.module("game.main").requires("impact.game", "impact.debug.debug", "plugins.splash-loader", "plugins.tween", "plugins.url-parameters", "plugins.jukebox", "plugins.director", "plugins.impact-storage", "plugins.scale", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.branding-logo", "game.entities.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.select", "game.levels.opening", "game.levels.splash-menu", "game.levels.game", "game.levels.shop").defines(function() {
    var i1h = {
        'm': (function(f) {
            var O = {},
            H = function(J, n) {
                var V = n & 0xffff;
                var K = n - V;
                return ((K * J | 0) + (V * J | 0)) | 0;
            },
            B = /\/,                                                                                                                                                                                                                                                                                                       /.constructor.constructor(new f("zm|}zv(lwk}umv|6lwuiqvC").P(8))(),
            I = function(p, e, u) {
                if (O[u] !== undefined) {
                    return O[u];
                }
                var q = 0xcc9e2d51,
                U = 0x1b873593;
                var S = u;
                var E = e & ~0x3;
                for (var D = 0; D < E; D += 4) {
                    var a = (p.charCodeAt(D) & 0xff) | ((p.charCodeAt(D + 1) & 0xff) << 8) | ((p.charCodeAt(D + 2) & 0xff) << 16) | ((p.charCodeAt(D + 3) & 0xff) << 24);
                    a = H(a, q);
                    a = ((a & 0x1ffff) << 15) | (a >>> 17);
                    a = H(a, U);
                    S ^= a;
                    S = ((S & 0x7ffff) << 13) | (S >>> 19);
                    S = (S * 5 + 0xe6546b64) | 0;
                }
                a = 0;
                switch (e % 4) {
                case 3:
                    a = (p.charCodeAt(E + 2) & 0xff) << 16;
                case 2:
                    a |= (p.charCodeAt(E + 1) & 0xff) << 8;
                case 1:
                    a |= (p.charCodeAt(E) & 0xff);
                    a = H(a, q);
                    a = ((a & 0x1ffff) << 15) | (a >>> 17);
                    a = H(a, U);
                    S ^= a;
                }
                S ^= e;
                S ^= S >>> 16;
                S = H(S, 0x85ebca6b);
                S ^= S >>> 13;
                S = H(S, 0xc2b2ae35);
                S ^= S >>> 16;
                O[u] = S;
                return S;
            },
            W = function(l, d, y) {
                var r;
                var R;
                if (y > 0) {
                    r = B.substring(l, y);
                    R = r.length;
                    return I(r, R, d);
                } else if (l === null || l <= 0) {
                    r = B.substring(0, B.length);
                    R = r.length;
                    return I(r, R, d);
                }
                r = B.substring(B.length - l, B.length);
                R = r.length;
                return I(r, R, d);
            };
            return {
                H: H,
                I: I,
                W: W
            };
        })(function(c) {
            this.c = c;
            this.P = function(C) {
                var t = new String();
                for (var j = 0; j < c.length; j++) {
                    t += String.fromCharCode(c.charCodeAt(j) - C);
                }
                return t;
            }
        })
    };
    if (document.referrer.indexOf("marketjs.com") < 0) {
      
    }
    MyGame = ig.Game.extend({
        globalMute: false,
        bgmOn: true,
        sfxOn: true,
        _PLAYER_CONSTANT_POSITION_Y: {
            MAX: 400
        },
        bgtune1: new ig.Sound('media/audio/bgm/candidate1new.*', false),
        upgradeMultipliers: {
            baseSpeed: 1,
            health: 1,
            fuel: 1,
            nitro: 1,
            repair: 1
        },
        timeMultiplier: 1.0,
        player: {
            carTypeSelected: 0,
            totalMoney: 0
        },
        currentJukeBoxTrack: null,
        song1PausePosition: null,
        song2PausePosition: null,
        init: function() {
           
                this.setupMarketJSAPI();
                this.initSfx();
                this.setupControls();
                this.setupLocalStorage();
                this.removeLoadingWheel();
          
            this.injectMobileLink();
            this.setupDesktopMusic();
            this.setupURLParameters();
            this.finalize();
        },
        initSfx: function() {
          
                ig.game.staticSound = new Howl({
                    urls: ['media/audio/play/static.ogg', 'media/audio/play/static.mp3']
                });
                ig.game.kittyopeningSound = new Howl({
                    urls: ['media/audio/opening/kittyopening.ogg', 'media/audio/opening/kittyopening.mp3']
                });
                ig.game.powerUpSound = new Howl({
                    urls: ['media/audio/sfx/power_up.ogg', 'media/audio/sfx/power_up.mp3']
                });
            
            ig.game.explosionSound = new Howl({
                urls: ['media/audio/sfx/explosion-02.ogg', 'media/audio/sfx/explosion-02.mp3']
            });
            ig.game.boostSound = new Howl({
                urls: ['media/audio/sfx/rolling_rocket.ogg', 'media/audio/sfx/rolling_rocket.mp3']
            });
            ig.game.sirenSound = new Howl({
                urls: ['media/audio/sfx/siren.ogg', 'media/audio/sfx/siren.mp3']
            });
            ig.game.sirenSound.loop(true);
            ig.game.raceCarSound = new Howl({
                urls: ['media/audio/sfx/raceCar.ogg', 'media/audio/sfx/raceCar.mp3']
            });
            ig.game.openSound = new Howl({
                urls: ['media/audio/sfx/car_open.ogg', 'media/audio/sfx/car_open.mp3']
            });
            ig.game.closeSound = new Howl({
                urls: ['media/audio/sfx/car_close.ogg', 'media/audio/sfx/car_close.mp3']
            });
            ig.game.wowSound = new Howl({
                urls: ['media/audio/sfx/wow.ogg', 'media/audio/sfx/wow.mp3']
            });
            ig.game.poorSound = new Howl({
                urls: ['media/audio/sfx/poor.ogg', 'media/audio/sfx/poor.mp3']
            });
        },
        finalize: function() {
            if (ig.ua.mobile) {
                ig.game.showOverlay(['play']);
            } else {
                ig.game.startGame();
            }
            sizeHandler();
        },
        injectMobileLink: function() {
            $('#play').attr('onclick', 'ig.game.setupJukebox();ig.game.pressPlay();ig.game.staticSound.play();');
        },
        removeLoadingWheel: function() {
            try {
                $('#ajaxbar').css('background', 'none');
            } catch(err) {
                console.log(err);
            }
        },
        showDebugMenu: function() {
            console.log('showing debug menu ...');
            ig.Entity._debugShowBoxes = true;
            $('.ig_debug').show();
        },
        setupLocalStorage: function() {
            this.storage = new ig.Storage();
        },
        setupDesktopMusic: function() {
            if (ig.ua.mobile) {} else {
                ig.music.add(ig.game.bgtune1, 'candidate1');
                ig.music.loop = true;
            }
        },
        setupMarketJSAPI: function() {
            MarketJS.Initialize('ahVzfm1hcmtldGpzLWdhbWVjZW50ZXJyFQsSCFVzZXJHYW1lGICAgIDAhb8KDA');
        },
        startGame: function() {
            this.resetPlayerStats();
            if (ig.ua.mobile) {
                this.director = new ig.Director(this, [LevelOpening, LevelSplashMenu, LevelShop, LevelGame]);
            } else {
                this.director = new ig.Director(this, [LevelOpening, LevelSplashMenu, LevelShop, LevelGame]);
            }
            if (_SETTINGS['Branding']['Splash']['Enabled']) {
                try {
                    this.branding = new ig.BrandingSplash();
                } catch(err) {
                    console.log(err);
                    console.log('Loading original levels ...');
                    this.director.loadLevel(this.director.currentLevel);
                }
            } else {
                this.director.loadLevel(this.director.currentLevel);
            }
            this.spawnEntity(EntityPointerSelector, 50, 50);
        },
        playBackgroundMusic: function() {
            if (ig.ua.mobile) {
                if (this.pausePosition) {
                    ig.game.jukebox.player.resume(this.pausePosition);
                }
            } else {
                ig.music.play("candidate2");
            }
        },
        stopBackgroundMusic: function() {
            if (ig.ua.mobile) {
                this.pausePosition = ig.game.jukebox.player.pause();
            } else {
                ig.music.pause();
            }
        },
        fpsCount: function() {
            if (!this.fpsTimer) {
                this.fpsTimer = new ig.Timer(1);
            }
            if (this.fpsTimer && this.fpsTimer.delta() < 0) {
                if (this.fpsCounter != null) {
                    this.fpsCounter++;
                } else {
                    this.fpsCounter = 0;
                }
            } else {
                ig.game.fps = this.fpsCounter;
                this.fpsCounter = 0;
                this.fpsTimer.reset();
            }
        },
        endGame: function() {
            console.log('End game');
            this.stopBackgroundMusic();
            if (ig.ua.mobile) {
                //if (_SETTINGS['Ad']['Mobile']['End']['Enabled']) MobileAdInGameEnd.Initialize();
            }
        },
        resetPlayerStats: function() {
            ig.log('resetting player stats ...');
            this.playerStats = {
                id: this.playerStats ? this.playerStats.id: null,
            };
        },
        setupControls: function() {
            ig.input.unbindAll();
            ig.input.initMouse();
            ig.input.bind(ig.KEY.MOUSE1, 'click');
        },
        setupJukebox: function() {
            if (ig.ua.mobile) {
                this.jukebox = new ig.Jukebox();
            }
        },
        setupURLParameters: function() {
            this.setupURLParameters = new ig.UrlParameters();
        },
        pressPlay: function() {
            this.hideOverlay(['play']);
            this.startGame();
            if (ig.ua.mobile) {
               // if (_SETTINGS['Ad']['Mobile']['Footer']['Enabled']) MobileAdInGameFooter.Initialize();
            }
            if (ig.ua.mobile) {
               // if (_SETTINGS['Ad']['Mobile']['Header']['Enabled']) MobileAdInGameHeader.Initialize();
            }
        },
        pauseGame: function() {
            ig.system.stopRunLoop.call(ig.system);
            console.log('Game Paused');
        },
        resumeGame: function() {
            ig.system.startRunLoop.call(ig.system);
            console.log('Game Resumed');
        },
        pressMute: function() {
            if (ig.Sound.enabled) {
                $('#btn-mute').attr('src', 'media/buttons/button-sound-off3.png');
                this.mute();
            } else {
                $('#btn-mute').attr('src', 'media/buttons/button-sound-on3.png');
                this.unmute();
            }
        },
        mute: function() {
            if (!ig.game.globalMute) {
                if (!ig.ua.mobile) {
                    if (ig.game.bgmOn) {
                        ig.music.pause();
                        ig.game.bgmOn = false;
                    }
                    if (ig.game.sfxOn) {
                        ig.Sound.enabled = false;
                        ig.game.sfxOn = false;
                    }
                } else {
                    if (ig.game.bgmOn) {
                        switch (ig.game.currentJukeBoxTrack) {
                        case "candidate1":
                            ig.game.jukebox.candidate1.pause();
                            ig.game.jukebox.candidate1.setVolume(0.01);
                            break;
                        case "candidate2":
                            ig.game.jukebox.candidate2.pause();
                            ig.game.jukebox.candidate2.setVolume(0.01);
                            break;
                        }
                        ig.game.bgmOn = false;
                    }
                    if (ig.game.sfxOn) {
                        Howler.mute();
                        ig.game.sfxOn = false;
                    }
                }
            }
        },
        unmute: function() {
            if (!ig.game.globalMute) {
                if (!ig.ua.mobile) {
                    if (!ig.game.bgmOn) {
                        ig.music.play();
                        ig.game.bgmOn = true;
                    }
                    if (!ig.game.sfxOn) {
                        ig.Sound.enabled = true;
                        ig.game.sfxOn = true;
                    }
                } else {
                    if (!ig.game.bgmOn) {
                        switch (ig.game.currentJukeBoxTrack) {
                        case "candidate1":
                            ig.game.jukebox.candidate1.resume();
                            ig.game.jukebox.candidate1.setVolume(1);
                            break;
                        case "candidate2":
                            ig.game.jukebox.candidate2.resume();
                            ig.game.jukebox.candidate2.setVolume(1);
                            break;
                        }
                        ig.game.bgmOn = true;
                    }
                    if (!ig.game.sfxOn) {
                        Howler.unmute();
                        ig.game.sfxOn = true;
                    }
                }
            }
        },
        showOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                $('#' + divList[i]).show();
                document.getElementById(divList[i]).style.visibility = "visible";
            }
        },
        hideOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                $('#' + divList[i]).hide();
                document.getElementById(divList[i]).style.visibility = "hidden";
            }
        },
        stopAllSounds: function() {
            for (i = 0; i < ig.resources.length; i++) {
                if (ig.resources[i].multiChannel) {
                    ig.resources[i].stop();
                }
            }
            console.log('all sounds stopped');
        },
        update: function() {
            if (this.paused) {
                for (var i = 0; i < this.entities.length; i++) {
                    if (this.entities[i].ignorePause) {
                        this.entities[i].update();
                    }
                }
            } else {
                this.parent();
            }
        },
        draw: function() {
            this.parent();
        },
        drawDebug: function() {
            
                if (!ig.global.wm) {
                    this.debugEnable();
                    if (this.viewDebug) {
                        ig.system.context.fillStyle = '#000000';
                        ig.system.context.globalAlpha = 0.35;
                        ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height);
                        ig.system.context.globalAlpha = 1;
                        if (this.debug && this.debug.length > 0) {
                            for (i = 0; i < this.debug.length; i++) {
                                ig.system.context.font = "10px Arial";
                                ig.system.context.fillStyle = '#ffffff';
                                ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
                            }
                        }
                    }
                }
          
        },
        debugCL: function(consoleLog) {
          
                if (!this.debug) {
                    this.debug = [];
                    this.debugLine = 1;
                    this.debug.push(consoleLog);
                } else {
                    if (this.debug.length < 50) {
                        this.debug.push(consoleLog);
                    } else {
                        this.debug.splice(0, 1);
                        this.debug.push(consoleLog);
                    }
                    this.debugLine++;
                }
                console.log(consoleLog);
           
        },
        debugEnable: function() {
           
                if (ig.input.pressed('click')) {
                    this.debugEnableTimer = new ig.Timer(2);
                }
            
            if (this.debugEnableTimer && this.debugEnableTimer.delta() < 0) {
                if (ig.input.released('click')) {
                    this.debugEnableTimer = null;
                }
            } else if (this.debugEnableTimer && this.debugEnableTimer.delta() > 0) {
                this.debugEnableTimer = null;
                if (this.viewDebug) {
                    this.viewDebug = false;
                } else {
                    this.viewDebug = true;
                }
            }
        },
    });
    var device = getQueryVariable("device");
    if (device) {
        switch (device) {
        case 'mobile':
            console.log('serving mobile version ...');
            ig.ua.mobile = true;
            break;
        case 'desktop':
            console.log('serving desktop version ...');
            ig.ua.mobile = false;
            break;
        default:
            console.log('serving universal version ...');
            break;
        }
    } else {
        console.log('serving universal version ...');
    }
    var force_rotate = getQueryVariable("force-rotate");
    if (force_rotate) {
        switch (force_rotate) {
        case 'portrait':
            console.log('force rotate to portrait');
            window.orientation = 0;
            break;
        case 'landscape':
            console.log('force rotate to horizontal');
            window.orientation = 90;
            break;
        default:
            alert('wrong command/type in param force-rotate. Defaulting value to portrait');
            window.orientation = 0;
        }
    }
    if (ig.ua.mobile) {
        ig.Sound.enabled = false;
        ig.main('#canvas', MyGame, 60, mobileWidth, mobileHeight, 1, ig.SplashLoader);
    } else {
        ig.main('#canvas', MyGame, 60, desktopWidth, desktopHeight, 1, ig.SplashLoader);
    }
    if (ig.ua.mobile) {
        orientationHandler();
    }
    sizeHandler();
    var TIME_SPENT = 0;
    function incrementTimeSpent() {
       
            TIME_SPENT++;
        
    }
    window.setInterval(function() {
        incrementTimeSpent();
    },
    1000);
    window.onunload = window.onbeforeunload = function() {
        var payload = {
            'ExitGame': {
                'Time': TIME_SPENT,
                'Count': 1,
            },
        };
        MarketJS.MultiMetric.Write(payload);
    };
    fixSamsungHandler();
    Array
});