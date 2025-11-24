var U0a = {
    'y1': "languageUI",
    'F2': "Siguiente nivel",
    'i2': "http://www.mahjonggames.com/",
    'p2': 'hiscorehtml5',
    'o2': "Tiempo agotado",
    'i1': "px",
    'V0': "Música Apagado",
    'G1': "Tempo:",
    'l2': "Start New Game",
    'J0': "Limpiar",
    'b2': "Pause",
    'p0': "Puntuación total:",
    'A2': null,
    'K0': "111",
    'Z0': 'hidden',
    'a0': 'lang',
    'I2': "Score:",
    'c1': "Som Desligar",
    'y0': "http://www.juegosmahjong.com/",
    'S2': "Puedes combinar cualquier ficha de flor con otra, y lo mismo para las fichas de estaciones",
    'M2': "Connect 2 of the same items with a path with no more than two 90 degree angles.",
    'D0': "Menu",
    'T2': "mahjong_css",
    'z0': 'gameContainer',
    'b0': "map",
    'q0': "Sonido Apagado",
    'M0': "Windows Phone",
    'u1': 100,
    'w2': 'px',
    'R2': "es_spain",
    'E0': "High Scores",
    'n2': 'none',
    'Q1': "Terminar jogo",
    'Q0': "Your Score",
    'W0': "Música Desligar",
    'L0': 'undefined',
    'O1': "Vidas:",
    'N1': "click",
    'd0': "Chain Bonus",
    'c0': "Puntuación alta",
    'O2': 1000,
    'Y0': "Mapa",
    'm0': "Continuar juego anterior",
    'V1': "Pausa",
    't2': "Android",
    'K2': "Safari",
    'j0': "Time Bonus:",
    'L2': "Cómo jugar",
    'W1': "Acabou o tempo!",
    'G0': "Reiniciar",
    'Z1': "Level:",
    'z2': 'visible',
    't0': "sdagfsdagadsfgfsad",
    'T1': "Puntuación:",
    'S1': "Bono movimientos encadenados",
    'g2': "How To Play",
    'K1': 'px 0px',
    'g0': "div",
    'O0': 'MSPointerMove',
    'B2': true,
    'F1': 'wakeup',
    'r0': "Barajar",
    'q2': "card",
    'J2': "Bonus",
    'd1': "Más juegos",
    'q1': "Sonido Encendido",
    'B1': "Enviar puntuación",
    'l1': "Sugerencia",
    'y2': "Música Encendido",
    'I1': "Inicia nuevo juego",
    'G2': "Pontuação Total:",
    'h0': "Continuar",
    'P1': 'absolute',
    'v0': "Continue Previous Game",
    'A0': "Terminar el juego",
    'w1': "Enviar",
    'F0': "Nivel completado",
    'n1': "You can combine any flower tile with another, the same applies to the season tiles",
    'c2': "Jogar de novo",
    'P0': "Jugar otra vez",
    'U0': 'tap',
    'r2': "Música Ligar",
    'C0': "url(",
    't1': "none",
    'I0': "Continuar o jogo anterior",
    'H1': 'resize',
    'Q2': "img/back.png",
    'M1': "absolute",
    'a2': "Level Completed",
    'd2': "Tiempo:",
    'C2': "Bono de tiempo:",
    'j2': 'ontouchstart',
    'x2': "Total Score:",
    'A1': "Submit Score",
    'x0': "mosue2Div",
    'Y1': 'idle',
    'a1': "remDiv",
    'D1': "Pontuação Máx.",
    'U1': "Nivel:",
    'g1': 'div',
    'r1': 10000,
    's0': "button",
    'C1': "Nível concluído",
    'L1': "Deshacer",
    'H2': "Nível seguinte",
    'R0': "Conecta dos elementos iguales con una ruta con dos ángulos de 90° como máximo.",
    'E2': "Tu puntuación"
};; (function(T0, h1, N0) {
    var k1 = void 0,
    e1 = !0,
    S0 = null,
    f1 = !1;
    function o1(E) {
        return function() {
            return this[E];
        };
    }
    var p1 = this;
    function f2(E, e0) {
        var f0 = E.split("."),
        i0 = p1; ! (f0[0] in i0) && i0.execScript && i0.execScript("var " + f0[0]);
        for (var k0; f0.length && (k0 = f0.shift());) ! f0.length && e0 !== k1 ? i0[k0] = e0: i0 = i0[k0] ? i0[k0] : i0[k0] = {};
    }
    p1.Ba = e1;
    function J1(E, e0, f0) {
        return E.call.apply(E.bind, arguments);
    }
    function h2(e0, f0, i0) {
        if (!e0) throw Error();
        if (2 < arguments.length) {
            var k0 = Array.prototype.slice.call(arguments, 2);
            return function() {
                var E = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(E, k0);
                return e0.apply(f0, E);
            };
        }
        return function() {
            return e0.apply(f0, arguments);
        };
    }
    function R1(E, e0, f0) {
        R1 = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? J1: h2;
        return R1.apply(S0, arguments);
    }
    var P2 = Date.now ||
    function() {
        return + new Date;
    };
    function b1(E, e0) {
        this.G = E;
        this.u = e0 || E;
        this.z = this.u.document;
        this.R = k1;
    }
    b1.prototype.createElement = function(E, e0, f0) {
        E = this.z.createElement(E);
        if (e0) for (var i0 in e0) if (e0.hasOwnProperty(i0)) if ("style" == i0) {
            var k0 = E,
            n0 = e0[i0];
            r3(this) ? k0.setAttribute("style", n0) : k0.style.cssText = n0;
        } else E.setAttribute(i0, e0[i0]);
        f0 && E.appendChild(this.z.createTextNode(f0));
        return E;
    };
    function E1(E, e0, f0) {
        E = E.z.getElementsByTagName(e0)[0];
        E || (E = h1.documentElement);
        E && E.lastChild && E.insertBefore(f0, E.lastChild);
    }
    function k2(E, e0) {
        return E.createElement("link", {
            rel: "stylesheet",
            href: e0
        });
    }
    function x1(E, e0) {
        return E.createElement("script", {
            src: e0
        });
    }
    function V2(E, e0) {
        for (var f0 = E.className.split(/\s+/), i0 = 0, k0 = f0.length; i0 < k0; i0++) if (f0[i0] == e0) return;
        f0.push(e0);
        E.className = f0.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
    }
    function U2(E, e0) {
        for (var f0 = E.className.split(/\s+/), i0 = [], k0 = 0, n0 = f0.length; k0 < n0; k0++) f0[k0] != e0 && i0.push(f0[k0]);
        E.className = i0.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
    }
    function q3(E, e0) {
        for (var f0 = E.className.split(/\s+/), i0 = 0, k0 = f0.length; i0 < k0; i0++) if (f0[i0] == e0) return e1;
        return f1;
    }
    function r3(E) {
        if (E.R === k1) {
            var e0 = E.z.createElement("p");
            e0.innerHTML = '<a style="top:1px;">w</a>';
            E.R = /top/.test(e0.getElementsByTagName("a")[0].getAttribute("style"));
        }
        return E.R;
    }
    function Y2(E) {
        var e0 = E.u.location.protocol;
        "about:" == e0 && (e0 = E.G.location.protocol);
        return "https:" == e0 ? "https:": "http:";
    };
    function z1(E, e0, f0) {
        this.w = E;
        this.T = e0;
        this.Aa = f0;
    }
    f2("webfont.BrowserInfo", z1);
    z1.prototype.qa = o1("w");
    z1.prototype.hasWebFontSupport = z1.prototype.qa;
    z1.prototype.ra = o1("T");
    z1.prototype.hasWebKitFallbackBug = z1.prototype.ra;
    z1.prototype.sa = o1("Aa");
    z1.prototype.hasWebKitMetricsBug = z1.prototype.sa;
    function v2(E, e0, f0, i0) {
        this.e = E != S0 ? E: S0;
        this.o = e0 != S0 ? e0: S0;
        this.ba = f0 != S0 ? f0: S0;
        this.f = i0 != S0 ? i0: S0;
    }
    var D3 = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
    v2.prototype.toString = function() {
        return [this.e, this.o || "", this.ba || "", this.f || ""].join("");
    };
    function X1(E) {
        E = D3.exec(E);
        var e0 = S0,
        f0 = S0,
        i0 = S0,
        k0 = S0;
        E && (E[1] !== S0 && E[1] && (e0 = parseInt(E[1], 10)), E[2] !== S0 && E[2] && (f0 = parseInt(E[2], 10)), E[3] !== S0 && E[3] && (i0 = parseInt(E[3], 10)), E[4] !== S0 && E[4] && (k0 = /^[0-9]+$/.test(E[4]) ? parseInt(E[4], 10) : E[4]));
        return new v2(e0, f0, i0, k0);
    };
    function j1(E, e0, f0, i0, k0, n0, l0, o0, u0, w0, B0) {
        this.J = E;
        this.Ha = e0;
        this.za = f0;
        this.ga = i0;
        this.Fa = k0;
        this.fa = n0;
        this.xa = l0;
        this.Ga = o0;
        this.wa = u0;
        this.ea = w0;
        this.k = B0;
    }
    f2("webfont.UserAgent", j1);
    j1.prototype.getName = o1("J");
    j1.prototype.getName = j1.prototype.getName;
    j1.prototype.pa = o1("za");
    j1.prototype.getVersion = j1.prototype.pa;
    j1.prototype.la = o1("ga");
    j1.prototype.getEngine = j1.prototype.la;
    j1.prototype.ma = o1("fa");
    j1.prototype.getEngineVersion = j1.prototype.ma;
    j1.prototype.na = o1("xa");
    j1.prototype.getPlatform = j1.prototype.na;
    j1.prototype.oa = o1("wa");
    j1.prototype.getPlatformVersion = j1.prototype.oa;
    j1.prototype.ka = o1("ea");
    j1.prototype.getDocumentMode = j1.prototype.ka;
    j1.prototype.ja = o1("k");
    j1.prototype.getBrowserInfo = j1.prototype.ja;
    function a3(E, e0) {
        this.a = E;
        this.H = e0;
    }
    var C3 = new j1("Unknown", new v2, "Unknown", "Unknown", new v2, "Unknown", "Unknown", new v2, "Unknown", k1, new z1(f1, f1, f1));
    a3.prototype.parse = function() {
        var a;
        if ( - 1 != this.a.indexOf("MSIE")) {
            a = N2(this);
            var E = Z2(this),
            e0 = X1(E),
            f0 = v1(this.a, /MSIE ([\d\w\.]+)/, 1),
            i0 = X1(f0);
            a = new j1("MSIE", i0, f0, "MSIE", i0, f0, a, e0, E, d3(this.H), new z1("Windows" == a && 6 <= i0.e || "Windows Phone" == a && 8 <= e0.e, f1, f1));
        } else if ( - 1 != this.a.indexOf("Opera")) a: {
            a = "Unknown";
            var E = v1(this.a, /Presto\/([\d\w\.]+)/, 1),
            e0 = X1(E),
            f0 = Z2(this),
            i0 = X1(f0),
            k0 = d3(this.H);
            e0.e !== S0 ? a = "Presto": ( - 1 != this.a.indexOf("Gecko") && (a = "Gecko"), E = v1(this.a, /rv:([^\)]+)/, 1), e0 = X1(E));
            if ( - 1 != this.a.indexOf("Opera Mini/")) {
                var n0 = v1(this.a, /Opera Mini\/([\d\.]+)/, 1),
                l0 = X1(n0);
                a = new j1("OperaMini", l0, n0, a, e0, E, N2(this), i0, f0, k0, new z1(f1, f1, f1));
            } else {
                if ( - 1 != this.a.indexOf("Version/") && (n0 = v1(this.a, /Version\/([\d\.]+)/, 1), l0 = X1(n0), l0.e !== S0)) {
                    a = new j1("Opera", l0, n0, a, e0, E, N2(this), i0, f0, k0, new z1(10 <= l0.e, f1, f1));
                    break a;
                }
                n0 = v1(this.a, /Opera[\/ ]([\d\.]+)/, 1);
                l0 = X1(n0);
                a = l0.e !== S0 ? new j1("Opera", l0, n0, a, e0, E, N2(this), i0, f0, k0, new z1(10 <= l0.e, f1, f1)) : new j1("Opera", new v2, "Unknown", a, e0, E, N2(this), i0, f0, k0, new z1(f1, f1, f1));
            }
        } else if (/AppleWeb(K|k)it/.test(this.a)) {
            a = N2(this);
            var E = Z2(this),
            e0 = X1(E),
            f0 = v1(this.a, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1),
            i0 = X1(f0),
            k0 = "Unknown",
            n0 = new v2,
            l0 = "Unknown",
            o0 = f1; - 1 != this.a.indexOf("Chrome") || -1 != this.a.indexOf("CrMo") || -1 != this.a.indexOf("CriOS") ? k0 = "Chrome": /Silk\/\d/.test(this.a) ? k0 = "Silk": "BlackBerry" == a || "Android" == a ? k0 = "BuiltinBrowser": -1 != this.a.indexOf("Safari") ? k0 = "Safari": -1 != this.a.indexOf("AdobeAIR") && (k0 = "AdobeAIR");
            "BuiltinBrowser" == k0 ? l0 = "Unknown": "Silk" == k0 ? l0 = v1(this.a, /Silk\/([\d\._]+)/, 1) : "Chrome" == k0 ? l0 = v1(this.a, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -1 != this.a.indexOf("Version/") ? l0 = v1(this.a, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == k0 && (l0 = v1(this.a, /AdobeAIR\/([\d\.]+)/, 1));
            n0 = X1(l0);
            o0 = "AdobeAIR" == k0 ? 2 < n0.e || 2 == n0.e && 5 <= n0.o: "BlackBerry" == a ? 10 <= e0.e: "Android" == a ? 2 < e0.e || 2 == e0.e && 1 < e0.o: 526 <= i0.e || 525 <= i0.e && 13 <= i0.o;
            a = new j1(k0, n0, l0, "AppleWebKit", i0, f0, a, e0, E, d3(this.H), new z1(o0, 536 > i0.e || 536 == i0.e && 11 > i0.o, "iPhone" == a || "iPad" == a || "iPod" == a || "Macintosh" == a));
        } else - 1 != this.a.indexOf("Gecko") ? (a = "Unknown", E = new v2, e0 = "Unknown", f0 = Z2(this), i0 = X1(f0), k0 = f1, -1 != this.a.indexOf("Firefox") ? (a = "Firefox", e0 = v1(this.a, /Firefox\/([\d\w\.]+)/, 1), E = X1(e0), k0 = 3 <= E.e && 5 <= E.o) : -1 != this.a.indexOf("Mozilla") && (a = "Mozilla"), n0 = v1(this.a, /rv:([^\)]+)/, 1), l0 = X1(n0), k0 || (k0 = 1 < l0.e || 1 == l0.e && 9 < l0.o || 1 == l0.e && 9 == l0.o && 2 <= l0.ba || n0.match(/1\.9\.1b[123]/) != S0 || n0.match(/1\.9\.1\.[\d\.]+/) != S0), a = new j1(a, E, e0, "Gecko", l0, n0, N2(this), i0, f0, d3(this.H), new z1(k0, f1, f1))) : a = C3;
        return a;
    };
    function N2(E) {
        var e0 = v1(E.a, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
        if ("" != e0) return /BB\d{2}/.test(e0) && (e0 = "BlackBerry"),
        e0;
        E = v1(E.a, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/, 1);
        return "" != E ? ("Mac_PowerPC" == E && (E = "Macintosh"), E) : "Unknown";
    }
    function Z2(E) {
        var e0 = v1(E.a, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
        if (e0 || (e0 = v1(E.a, /Windows Phone( OS)? ([^;)]+)/, 2)) || (e0 = v1(E.a, /(iPhone )?OS ([\d_]+)/, 2))) return e0;
        if (e0 = v1(E.a, /(?:Linux|CrOS) ([^;)]+)/, 1)) for (var e0 = e0.split(/\s/), f0 = 0; f0 < e0.length; f0 += 1) if (/^[\d\._]+$/.test(e0[f0])) return e0[f0];
        return (E = v1(E.a, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? E: "Unknown";
    }
    function v1(E, e0, f0) {
        return (E = E.match(e0)) && E[f0] ? E[f0] : "";
    }
    function d3(E) {
        if (E.documentMode) return E.documentMode;
    };
    function w3(E) {
        this.va = E || "-";
    }
    w3.prototype.f = function(E) {
        for (var e0 = [], f0 = 0; f0 < arguments.length; f0++) e0.push(arguments[f0].replace(/[\W_]+/g, "").toLowerCase());
        return e0.join(this.va);
    };
    function e2(E, e0) {
        this.J = E;
        this.U = 4;
        this.K = "n";
        var f0 = (e0 || "n4").match(/^([nio])([1-9])$/i);
        f0 && (this.K = f0[1], this.U = parseInt(f0[2], 10));
    }
    e2.prototype.getName = o1("J");
    function u2(E) {
        return E.K + E.U;
    }
    function E3(E) {
        var e0 = 4,
        f0 = "n",
        i0 = S0;
        E && ((i0 = E.match(/(normal|oblique|italic)/i)) && i0[1] && (f0 = i0[1].substr(0, 1).toLowerCase()), (i0 = E.match(/([1-9]00|normal|bold)/i)) && i0[1] && (/bold/i.test(i0[1]) ? e0 = 7 : /[1-9]00/.test(i0[1]) && (e0 = parseInt(i0[1].substr(0, 1), 10))));
        return f0 + e0;
    };
    function F3(E, e0, f0) {
        this.c = E;
        this.h = e0;
        this.M = f0;
        this.j = "wf";
        this.g = new w3("-");
    }
    function v3(E) {
        V2(E.h, E.g.f(E.j, "loading"));
        W2(E, "loading");
    }
    function c3(E) {
        U2(E.h, E.g.f(E.j, "loading"));
        q3(E.h, E.g.f(E.j, "active")) || V2(E.h, E.g.f(E.j, "inactive"));
        W2(E, "inactive");
    }
    function W2(E, e0, f0) {
        if (E.M[e0]) if (f0) E.M[e0](f0.getName(), u2(f0));
        else E.M[e0]();
    };
    function b3(E, e0) {
        this.c = E;
        this.C = e0;
        this.s = this.c.createElement("span", {
            "aria-hidden": "true"
        },
        this.C);
    }
    function j3(E, e0) {
        var f0 = E.s,
        i0;
        i0 = [];
        for (var k0 = e0.J.split(/,\s*/), n0 = 0; n0 < k0.length; n0++) {
            var l0 = k0[n0].replace(/['"]/g, ""); - 1 == l0.indexOf(" ") ? i0.push(l0) : i0.push("'" + l0 + "'");
        }
        i0 = i0.join(",");
        k0 = "normal";
        n0 = e0.U + "00";
        "o" === e0.K ? k0 = "oblique": "i" === e0.K && (k0 = "italic");
        i0 = "position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + i0 + ";" + ("font-style:" + k0 + ";font-weight:" + n0 + ";");
        r3(E.c) ? f0.setAttribute("style", i0) : f0.style.cssText = i0;
    }
    function k3(E) {
        E1(E.c, "body", E.s);
    }
    b3.prototype.remove = function() {
        var E = this.s;
        E.parentNode && E.parentNode.removeChild(E);
    };
    function s3(E, e0, f0, i0, k0, n0, l0, o0) {
        this.V = E;
        this.ta = e0;
        this.c = f0;
        this.q = i0;
        this.C = o0 || "BESbswy";
        this.k = k0;
        this.F = {};
        this.S = n0 || 5E3;
        this.Z = l0 || S0;
        this.B = this.A = S0;
        E = new b3(this.c, this.C);
        k3(E);
        for (var u0 in D2) D2.hasOwnProperty(u0) && (j3(E, new e2(D2[u0], u2(this.q))), this.F[D2[u0]] = E.s.offsetWidth);
        E.remove();
    }
    var D2 = {
        Ea: "serif",
        Da: "sans-serif",
        Ca: "monospace"
    };
    s3.prototype.start = function() {
        this.A = new b3(this.c, this.C);
        k3(this.A);
        this.B = new b3(this.c, this.C);
        k3(this.B);
        this.ya = P2();
        j3(this.A, new e2(this.q.getName() + ",serif", u2(this.q)));
        j3(this.B, new e2(this.q.getName() + ",sans-serif", u2(this.q)));
        u3(this);
    };
    function t3(E, e0, f0) {
        for (var i0 in D2) if (D2.hasOwnProperty(i0) && e0 === E.F[D2[i0]] && f0 === E.F[D2[i0]]) return e1;
        return f1;
    }
    function u3(E) {
        var e0 = E.A.s.offsetWidth,
        f0 = E.B.s.offsetWidth;
        e0 === E.F.serif && f0 === E.F["sans-serif"] || E.k.T && t3(E, e0, f0) ? P2() - E.ya >= E.S ? E.k.T && t3(E, e0, f0) && (E.Z === S0 || E.Z.hasOwnProperty(E.q.getName())) ? p3(E, E.V) : p3(E, E.ta) : setTimeout(R1(function() {
            u3(this);
        },
        E), 25) : p3(E, E.V);
    }
    function p3(E, e0) {
        E.A.remove();
        E.B.remove();
        e0(E.q);
    };
    function o3(E, e0, f0, i0) {
        this.c = e0;
        this.t = f0;
        this.N = 0;
        this.ca = this.Y = f1;
        this.S = i0;
        this.k = E.k;
    }
    function z3(E, e0, f0, i0, k0) {
        if (0 === e0.length && k0) c3(E.t);
        else {
            E.N += e0.length;
            k0 && (E.Y = k0);
            for (k0 = 0; k0 < e0.length; k0++) {
                var n0 = e0[k0],
                l0 = f0[n0.getName()],
                o0 = E.t,
                u0 = n0;
                V2(o0.h, o0.g.f(o0.j, u0.getName(), u2(u0).toString(), "loading"));
                W2(o0, "fontloading", u0); (new s3(R1(E.ha, E), R1(E.ia, E), E.c, n0, E.k, E.S, i0, l0)).start();
            }
        }
    }
    o3.prototype.ha = function(E) {
        var e0 = this.t;
        U2(e0.h, e0.g.f(e0.j, E.getName(), u2(E).toString(), "loading"));
        U2(e0.h, e0.g.f(e0.j, E.getName(), u2(E).toString(), "inactive"));
        V2(e0.h, e0.g.f(e0.j, E.getName(), u2(E).toString(), "active"));
        W2(e0, "fontactive", E);
        this.ca = e1;
        y3(this);
    };
    o3.prototype.ia = function(E) {
        var e0 = this.t;
        U2(e0.h, e0.g.f(e0.j, E.getName(), u2(E).toString(), "loading"));
        q3(e0.h, e0.g.f(e0.j, E.getName(), u2(E).toString(), "active")) || V2(e0.h, e0.g.f(e0.j, E.getName(), u2(E).toString(), "inactive"));
        W2(e0, "fontinactive", E);
        y3(this);
    };
    function y3(E) {
        0 == --E.N && E.Y && (E.ca ? (E = E.t, U2(E.h, E.g.f(E.j, "loading")), U2(E.h, E.g.f(E.j, "inactive")), V2(E.h, E.g.f(E.j, "active")), W2(E, "active")) : c3(E.t));
    };
    function n3(E, e0, f0) {
        this.G = E;
        this.W = e0;
        this.a = f0;
        this.O = this.P = 0;
    }
    function X2(E, e0) {
        g3.W.$[E] = e0;
    }
    n3.prototype.load = function(E) {
        var e0 = E.context || this.G;
        this.c = new b1(this.G, e0);
        e0 = new F3(this.c, e0.document.documentElement, E);
        if (this.a.k.w) {
            var f0 = this.W,
            i0 = this.c,
            k0 = [],
            n0;
            for (n0 in E) if (E.hasOwnProperty(n0)) {
                var l0 = f0.$[n0];
                l0 && k0.push(l0(E[n0], i0));
            }
            E = E.timeout;
            this.O = this.P = k0.length;
            E = new o3(this.a, this.c, e0, E);
            n0 = 0;
            for (f0 = k0.length; n0 < f0; n0++) i0 = k0[n0],
            i0.v(this.a, R1(this.ua, this, i0, e0, E));
        } else c3(e0);
    };
    n3.prototype.ua = function(k0, n0, l0, o0) {
        var u0 = this;
        o0 ? k0.load(function(E, e0, f0) {
            var i0 = 0 == --u0.P;
            i0 && v3(n0);
            setTimeout(function() {
                z3(l0, E, e0 || {},
                f0 || S0, i0);
            },
            0);
        }) : (k0 = 0 == --this.P, this.O--, k0 && (0 == this.O ? c3(n0) : v3(n0)), z3(l0, [], {},
        S0, k0));
    };
    var J3 = T0,
    I3 = (new a3(navigator.userAgent, h1)).parse(),
    g3 = J3.WebFont = new n3(T0, new
    function() {
        this.$ = {};
    },
    I3);
    g3.load = g3.load;
    function m3(E, e0) {
        this.c = E;
        this.d = e0;
    }
    m3.prototype.load = function(E) {
        var e0, f0, i0 = this.d.urls || [],
        k0 = this.d.families || [];
        e0 = 0;
        for (f0 = i0.length; e0 < f0; e0++) E1(this.c, "head", k2(this.c, i0[e0]));
        i0 = [];
        e0 = 0;
        for (f0 = k0.length; e0 < f0; e0++) {
            var n0 = k0[e0].split(":");
            if (n0[1]) for (var l0 = n0[1].split(","), o0 = 0; o0 < l0.length; o0 += 1) i0.push(new e2(n0[0], l0[o0]));
            else i0.push(new e2(n0[0]));
        }
        E(i0);
    };
    m3.prototype.v = function(E, e0) {
        return e0(E.k.w);
    };
    X2("custom",
    function(E, e0) {
        return new m3(e0, E);
    });
    function l3(E, e0) {
        this.c = E;
        this.d = e0;
    }
    var H3 = {
        regular: "n4",
        bold: "n7",
        italic: "i4",
        bolditalic: "i7",
        r: "n4",
        b: "n7",
        i: "i4",
        bi: "i7"
    };
    l3.prototype.v = function(E, e0) {
        return e0(E.k.w);
    };
    l3.prototype.load = function(E) {
        E1(this.c, "head", k2(this.c, Y2(this.c) + "//webfonts.fontslive.com/css/" + this.d.key + ".css"));
        for (var e0 = this.d.families,
        f0 = [], i0 = 0, k0 = e0.length; i0 < k0; i0++) f0.push.apply(f0, G3(e0[i0]));
        E(f0);
    };
    function G3(E) {
        var e0 = E.split(":");
        E = e0[0];
        if (e0[1]) {
            for (var f0 = e0[1].split(","), e0 = [], i0 = 0, k0 = f0.length; i0 < k0; i0++) {
                var n0 = f0[i0];
                if (n0) {
                    var l0 = H3[n0];
                    e0.push(l0 ? l0: n0);
                }
            }
            f0 = [];
            for (i0 = 0; i0 < e0.length; i0 += 1) f0.push(new e2(E, e0[i0]));
            return f0;
        }
        return [new e2(E)];
    }
    X2("ascender",
    function(E, e0) {
        return new l3(e0, E);
    });
    function f3(E, e0, f0) {
        this.a = E;
        this.c = e0;
        this.d = f0;
        this.m = [];
    }
    f3.prototype.v = function(f0, i0) {
        var k0 = this,
        n0 = k0.d.projectId,
        l0 = k0.d.version;
        if (n0) {
            var o0 = k0.c.u,
            u0 = k0.c.createElement("script");
            u0.id = "__MonotypeAPIScript__" + n0;
            var w0 = f1;
            u0.onload = u0.onreadystatechange = function() {
                if (!w0 && (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState)) {
                    w0 = e1;
                    if (o0["__mti_fntLst" + n0]) {
                        var E = o0["__mti_fntLst" + n0]();
                        if (E) for (var e0 = 0; e0 < E.length; e0++) k0.m.push(new e2(E[e0].fontfamily));
                    }
                    i0(f0.k.w);
                    u0.onload = u0.onreadystatechange = S0;
                }
            };
            u0.src = k0.D(n0, l0);
            E1(this.c, "head", u0);
        } else i0(e1);
    };
    f3.prototype.D = function(E, e0) {
        var f0 = Y2(this.c),
        i0 = (this.d.api || "fast.fonts.com/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
        return f0 + "//" + i0 + "/" + E + ".js" + (e0 ? "?v=" + e0: "");
    };
    f3.prototype.load = function(E) {
        E(this.m);
    };
    X2("monotype",
    function(E, e0) {
        var f0 = (new a3(navigator.userAgent, h1)).parse();
        return new f3(f0, e0, E);
    });
    function e3(E, e0) {
        this.c = E;
        this.d = e0;
        this.m = [];
    }
    e3.prototype.D = function(E) {
        var e0 = Y2(this.c);
        return (this.d.api || e0 + "//use.typekit.net") + "/" + E + ".js";
    };
    e3.prototype.v = function(o0, u0) {
        var w0 = this.d.id,
        B0 = this.d,
        X0 = this.c.u,
        H0 = this;
        w0 ? (X0.__webfonttypekitmodule__ || (X0.__webfonttypekitmodule__ = {}), X0.__webfonttypekitmodule__[w0] = function(l0) {
            l0(o0, B0,
            function(E, e0, f0) {
                for (var i0 = 0; i0 < e0.length; i0 += 1) {
                    var k0 = f0[e0[i0]];
                    if (k0) for (var n0 = 0; n0 < k0.length; n0 += 1) H0.m.push(new e2(e0[i0], k0[n0]));
                    else H0.m.push(new e2(e0[i0]));
                }
                u0(E);
            });
        },
        w0 = x1(this.c, this.D(w0)), E1(this.c, "head", w0)) : u0(e1);
    };
    e3.prototype.load = function(E) {
        E(this.m);
    };
    X2("typekit",
    function(E, e0) {
        return new e3(e0, E);
    });
    function x3(E, e0, f0) {
        this.L = E ? E: e0 + O3;
        this.p = [];
        this.Q = [];
        this.da = f0 || "";
    }
    var O3 = "//fonts.googleapis.com/css";
    x3.prototype.f = function() {
        if (0 == this.p.length) throw Error("No fonts to load !");
        if ( - 1 != this.L.indexOf("kit=")) return this.L;
        for (var E = this.p.length,
        e0 = [], f0 = 0; f0 < E; f0++) e0.push(this.p[f0].replace(/ /g, "+"));
        E = this.L + "?family=" + e0.join("%7C");
        0 < this.Q.length && (E += "&subset=" + this.Q.join(","));
        0 < this.da.length && (E += "&text=" + encodeURIComponent(this.da));
        return E;
    };
    function B3(E) {
        this.p = E;
        this.aa = [];
        this.I = {};
    }
    var A3 = {
        latin: "BESbswy",
        cyrillic: "&#1081;&#1103;&#1046;",
        greek: "&#945;&#946;&#931;",
        khmer: "&#x1780;&#x1781;&#x1782;",
        Hanuman: "&#x1780;&#x1781;&#x1782;"
    },
    N3 = {
        thin: "1",
        extralight: "2",
        "extra-light": "2",
        ultralight: "2",
        "ultra-light": "2",
        light: "3",
        regular: "4",
        book: "4",
        medium: "5",
        "semi-bold": "6",
        semibold: "6",
        "demi-bold": "6",
        demibold: "6",
        bold: "7",
        "extra-bold": "8",
        extrabold: "8",
        "ultra-bold": "8",
        ultrabold: "8",
        black: "9",
        heavy: "9",
        l: "3",
        r: "4",
        b: "7"
    },
    L3 = {
        i: "i",
        italic: "i",
        n: "n",
        normal: "n"
    },
    M3 = RegExp("^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$");
    B3.prototype.parse = function() {
        for (var E = this.p.length,
        e0 = 0; e0 < E; e0++) {
            var f0 = this.p[e0].split(":"),
            i0 = f0[0].replace(/\+/g, " "),
            k0 = ["n4"];
            if (2 <= f0.length) {
                var n0, l0 = f0[1];
                n0 = [];
                if (l0) for (var l0 = l0.split(","), o0 = l0.length, u0 = 0; u0 < o0; u0++) {
                    var w0;
                    w0 = l0[u0];
                    if (w0.match(/^[\w]+$/)) {
                        w0 = M3.exec(w0.toLowerCase());
                        var B0 = k1;
                        if (w0 == S0) B0 = "";
                        else {
                            B0 = k1;
                            B0 = w0[1];
                            if (B0 == S0 || "" == B0) B0 = "4";
                            else var X0 = N3[B0],
                            B0 = X0 ? X0: isNaN(B0) ? "4": B0.substr(0, 1);
                            B0 = [w0[2] == S0 || "" == w0[2] ? "n": L3[w0[2]], B0].join("");
                        }
                        w0 = B0;
                    } else w0 = "";
                    w0 && n0.push(w0);
                }
                0 < n0.length && (k0 = n0);
                3 == f0.length && (f0 = f0[2], n0 = [], f0 = !f0 ? n0: f0.split(","), 0 < f0.length && (f0 = A3[f0[0]]) && (this.I[i0] = f0));
            }
            this.I[i0] || (f0 = A3[i0]) && (this.I[i0] = f0);
            for (f0 = 0; f0 < k0.length; f0 += 1) this.aa.push(new e2(i0, k0[f0]));
        }
    };
    function i3(E, e0, f0) {
        this.a = E;
        this.c = e0;
        this.d = f0;
    }
    var K3 = {
        Arimo: e1,
        Cousine: e1,
        Tinos: e1
    };
    i3.prototype.v = function(E, e0) {
        e0(E.k.w);
    };
    i3.prototype.load = function(E) {
        var e0 = this.c;
        if ("MSIE" == this.a.getName() && this.d.blocking != e1) {
            var f0 = R1(this.X, this, E),
            i0 = function() {
                e0.z.body ? f0() : setTimeout(i0, 0);
            };
            i0();
        } else this.X(E);
    };
    i3.prototype.X = function(E) {
        for (var e0 = this.c,
        f0 = new x3(this.d.api, Y2(e0), this.d.text), i0 = this.d.families, k0 = i0.length, n0 = 0; n0 < k0; n0++) {
            var l0 = i0[n0].split(":");
            3 == l0.length && f0.Q.push(l0.pop());
            var o0 = "";
            2 == l0.length && "" != l0[1] && (o0 = ":");
            f0.p.push(l0.join(o0));
        }
        i0 = new B3(i0);
        i0.parse();
        E1(e0, "head", k2(e0, f0.f()));
        E(i0.aa, i0.I, K3);
    };
    X2("google",
    function(E, e0) {
        var f0 = (new a3(navigator.userAgent, h1)).parse();
        return new i3(f0, e0, E);
    });
    function $(E, e0) {
        this.c = E;
        this.d = e0;
        this.m = [];
    }
    $.prototype.D = function(E) {
        return Y2(this.c) + (this.d.api || "//f.fontdeck.com/s/css/js/") + (this.c.u.location.hostname || this.c.G.location.hostname) + "/" + E + ".js";
    };
    $.prototype.v = function(n0, l0) {
        var o0 = this.d.id,
        u0 = this.c.u,
        w0 = this;
        o0 ? (u0.__webfontfontdeckmodule__ || (u0.__webfontfontdeckmodule__ = {}), u0.__webfontfontdeckmodule__[o0] = function(E, e0) {
            for (var f0 = 0,
            i0 = e0.fonts.length; f0 < i0; ++f0) {
                var k0 = e0.fonts[f0];
                w0.m.push(new e2(k0.name, E3("font-weight:" + k0.weight + ";font-style:" + k0.style)));
            }
            l0(E);
        },
        o0 = x1(this.c, this.D(o0)), E1(this.c, "head", o0)) : l0(e1);
    };
    $.prototype.load = function(E) {
        E(this.m);
    };
    X2("fontdeck",
    function(E, e0) {
        return new $(e0, E);
    });
    T0.WebFontConfig && g3.load(T0.WebFontConfig);
})(this, document);;
var config = {
    debug: false,
    credits: U0a.B2,
    soundSprite: {
        right: [1100, 360],
        remove: [1480, 1130],
        remove1: [15063, 1790],
        remove2: [16930, U0a.O2],
        remove3: [16889, 357],
        remove4: [10203, 991],
        remove5: [11328, 2023],
        remove6: [17987, 1888],
        remove7: [20079, 1656],
        remove8: [21939, 863],
        remove9: [4965, 2534],
        remove10: [23014, 899],
        remove11: [13412, 1438],
        remove12: [24018, 1400],
        remove13: [25611, 1532],
        remove14: [7566, 2504],
        down: [700, 150],
        click: [50, 450],
        STick: [2670, 670]
    },
    chouseGameWH: function(E) {
        var e0, f0, i0, k0;
        if (E == 1) {
            i0 = 7;
            k0 = 4;
            e0 = 165;
            f0 = 140;
        } else if (E == 2) {
            i0 = 6;
            k0 = 5;
            e0 = 190;
            f0 = 115;
        } else if (E == 3) {
            i0 = 8;
            k0 = 5;
            e0 = 140;
            f0 = 115;
        } else if (E == 4) {
            i0 = 9;
            k0 = 6;
            e0 = 115;
            f0 = 90;
        } else if (E == 5) {
            i0 = 10;
            k0 = 7;
            e0 = 90;
            f0 = 65;
        } else {
            i0 = 11;
            k0 = 8;
            e0 = 65;
            f0 = 40;
        }
        return [i0, k0, e0, f0];
    },
    chouseCard: function(E) {
        var e0 = (E - 1) * 1 + 10;
        if (e0 > 14) {
            e0 = 14;
        }
        return e0;
    },
    chouseTime: function(E) {
        var e0 = (300 - (E - 1) * 15);
        if (e0 < 10) {
            e0 = 10;
        }
        return e0 * 30;
    }
};
if (! (window.console && console.log)) {
    var console = {
        log: function() {},
        debug: function() {},
        info: function() {},
        warn: function() {},
        error: function() {}
    };
}
var GameLib = {
    gameWidth: 800,
    gameHeight: 480,
    containerDiv: U0a.A2,
    storageJar: {},
    scale: 1,
    scalable: U0a.B2,
    gameName: '',
    lang: 'en',
    isTouch: U0a.j2 in window || navigator.msMaxTouchPoints,
    isIOS: /iP(hone|ad|od)/.test(navigator.userAgent),
    isAndroid: /Android/.test(navigator.userAgent),
    isIE: /IEMobile/.test(navigator.userAgent),
    online: U0a.B2,
    popup: U0a.A2,
    IEversion: (function() {
        var E = 3,
        e0 = document.createElement(U0a.g1),
        f0 = e0.getElementsByTagName('i');
        do e0.innerHTML = '<!--[if gt IE ' + (++E) + ']><i></i><![endif]-->';
        while (f0[0]);
        return E > 4 ? E: document.documentMode;
    } ()),
    $_GET: function(E) {
        var e0 = new RegExp(E + "=([^&#=]*)");
        e0 = e0.exec(location.search);
        if (U0a.A2 === e0) return false;
        return decodeURIComponent(e0[1]);
    },
    getLang: function() {
        var E = ',zh,en,nl,es,pt,fr,it,de,ru,in,pl,tr,',
        e0 = localStorage.getItem(U0a.a0);
        if (U0a.A2 === e0) {
            e0 = GameLib.getStorage(U0a.a0);
            if (false === e0) e0 = U0a.A2;
        }
        if (U0a.A2 === e0) {
            e0 = (navigator.language || navigator.userLanguage).substr(0, 2);
            return E.indexOf(',' + e0 + ',') == -1 ? 'en': e0;
        }
        return e0;
    },
    setLang: function(e0) {
        GameLib.lang = e0;
        localStorage.setItem(U0a.a0, e0);
        try {
            GameHiscore.set(U0a.a0, e0);
        } catch(E) {};
    },
    getHostDomain: function() {
        var E = location.hostname,
        e0, f0 = (parent === window) ? U0a.A2: document.referrer;
        if (f0 !== U0a.A2) {
            E = f0;
        } else if (document.referrer) {
            E = document.referrer;
        }
        E = E.replace(/^https?:\/\//i, '').replace(/^(www|dev)\./, '');
        e0 = E.indexOf('/');
        if (e0 != -1) {
            E = E.substr(0, e0);
        }
        return E;
    },
    showPopup: function(e0, f0, i0, k0, n0) {
        var l0 = '</div>',
        o0 = 'px;height:';
        this.closePopup();
        i0 = i0 || 400;
        k0 = k0 || 300;
        if (typeof(n0) == U0a.L0) {
            n0 = true;
        };
        var u0 = document.createElement(U0a.g1),
        w0 = document.createElement(U0a.g1),
        B0 = document.documentElement.clientWidth,
        X0 = document.documentElement.clientHeight,
        H0 = !GameLib.isTouchDevice && (window.devicePixelRatio === undefined || window.devicePixelRatio === 1) && screen.width > U0a.O2,
        T0 = [],
        h1 = -15;
        if (!n0 && !H0) {
            i0 = B0 - 32;
            k0 = X0 - 32;
            h1 = 0;
        }
        w0.className = 'popup';
        u0.className = 'popupWrap close';
        u0.onclick = function(E) {
            if (/close/.test(E.target.className)) {
                GameLib.closePopup();
            }
        };
        GameLib.popup = u0;
        var N0 = 'width:' + i0 + o0 + k0 + 'px;margin-left:-' + (i0 / 2) + 'px;margin-top:-' + (k0 / 2) + 'px;';
        if (n0) {
            N0 += 'transform:scale(' + GameLib.scale + ');-webkit-transform:scale(' + GameLib.scale + ');-ms-transform:scale(' + GameLib.scale + ')';
        }
        w0.setAttribute('style', N0);
        u0.appendChild(w0);
        if (e0) {
            k0 -= 32;
            T0.push('<div class="title">' + e0 + l0);
        }
        var k1 = /\.html$/.test(f0) || /^https?:\/\//.test(f0) ? '<iframe src="' + f0 + '" style="display:block;width:' + i0 + o0 + k0 + 'px" frameborder="0"></iframe>': '<div style="padding:5px 10px">' + f0 + l0;
        T0.push('<div style="overflow:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;width:' + i0 + 'px;height:' + k0 + 'px">' + k1 + '</div>', '<img src="img/close.png" class="close" style="right:' + h1 + 'px;top:' + h1 + 'px">');
        w0.innerHTML = T0.join('');
        document.body.appendChild(u0);
        return false;
    },
    closePopup: function() {
        if (this.popup) {
            this.popup.parentNode.removeChild(this.popup);
            this.popup = U0a.A2;
        }
    },
    scaleGame: function(E, e0, f0) {
        var i0 = document.getElementById('rotateHint'),
        k0 = Math.min(document.documentElement.clientWidth, window.innerWidth),
        n0 = Math.min(document.documentElement.clientHeight, window.innerHeight),
        l0 = k0 > n0,
        o0 = e0 || k0,
        u0 = f0 || n0;
        if (GameLib.scalable) {
            GameLib.scale = Math.min(o0 / GameLib.gameWidth, u0 / GameLib.gameHeight);
            GameLib.containerDiv.style.webkitTransform = GameLib.containerDiv.style.msTransform = GameLib.containerDiv.style.transform = 'scale(' + GameLib.scale + ')';
        } else {
            var w0 = document.querySelector('meta[name=viewport]'),
            B0 = 'width=' + GameLib.gameWidth;
            if (l0 && GameLib.gameHeight > window.innerHeight && GameLib.gameWidth <= k0) {
                B0 = 'height=' + GameLib.gameHeight;
            }
            w0.setAttribute('content', 'minimal-ui,user-scalable=0,' + B0);
        }
        if (ThirdParty.config.showRotateHint) {
            i0.style.display = GameLib.isTouch && !l0 ? 'block': U0a.n2;
        }
        if (ThirdParty.config.centerHorizontally) {
            var X0 = GameLib.scale * GameLib.gameWidth < k0 ? (k0 - GameLib.scale * GameLib.gameWidth) / 2 : 0;
            GameLib.containerDiv.style.marginLeft = X0 + U0a.w2;
        }
        if (ThirdParty.config.centerVertically) {
            var X0 = GameLib.scale * GameLib.gameHeight <= n0 ? (n0 - GameLib.scale * GameLib.gameHeight) / 2 : 0;
            GameLib.containerDiv.style.marginTop = X0 + U0a.w2;
        }
        if (GameLib.isIOS) {
            window.scrollTo(0, -64);
        }
    },
    getStorage: function(E) {
        return this.storageJar[E] !== undefined ? this.storageJar[E] : false;
    },
    setStorage: function(E, e0) {
        if (typeof E === 'object') {
            for (var f0 in E) {
                if (U0a.A2 === E[f0]) {
                    delete this.storageJar[f0];
                } else {
                    this.storageJar[f0] = E[f0];
                }
            }
        } else {
            if (U0a.A2 === e0) {
                delete this.storageJar[E];
            } else {
                this.storageJar[E] = e0;
            }
        }
        this.saveStorage();
    },
    saveStorage: function() {
        localStorage.setItem(this.gameName, JSON.stringify(this.storageJar));
    },
    init: function(i0, k0, n0) {
        if (/debug/.test(location.search)) {
            window.onerror = function(E, e0, f0) {
                alert('Error in line ' + f0 + ' of ' + e0 + ':\n' + E);
            };
        }
        GameLib.gameName = i0;
        GameLib.gameWidth = k0;
        GameLib.gameHeight = n0;
        Hammer(document.getElementById('rotateHint')).on(U0a.U0,
        function() {
            this.style.display = U0a.n2;
        });
        var l0 = GameLib.$_GET('bgcolor');
        if (false !== l0) {
            document.documentElement.style.backgroundColor = l0;
            document.documentElement.style.backgroundImage = U0a.n2;
        } else if (ThirdParty.config.background) {
            document.documentElement.style.background = /([\.\/])/.test(ThirdParty.config.background) ? 'url(' + ThirdParty.config.background + ')': ThirdParty.config.background;
        }
        GameLib.containerDiv = document.getElementById(U0a.z0);
        GameLib.containerDiv.style.width = k0 + 'px';
        GameLib.containerDiv.style.height = n0 + 'px';
        if (/noscale/.test(location.search)) {
            GameLib.scalable = false;
            if (GameLib.isIE) {
                var o0 = document.createElement('style');
                o0.appendChild(document.createTextNode('@-ms-viewport{width:' + k0 + 'px; height:' + n0 + 'px}'));
                document.querySelector('head').appendChild(o0);
            }
        }
        var u0 = localStorage.getItem(this.gameName);
        if (U0a.A2 !== u0) {
            this.storageJar = JSON.parse(u0);
        }
        if (this.isIOS && /.*CPU.*OS (\d+)_(\d+)/i.test(navigator.userAgent)) {
            if (parseFloat(RegExp.$1 + '.' + RegExp.$2) >= 7.1) {
                document.addEventListener('touchmove',
                function(E) {
                    E.preventDefault();
                },
                false);
            }
        }
        window.addEventListener(U0a.Y1,
        function() {
            GameSound.setIdle(U0a.B2);
        },
        false);
        window.addEventListener(U0a.F1,
        function() {
            GameSound.setIdle(false);
        },
        false);
        window.addEventListener(GameLib.isIOS ? 'orientationchange': U0a.H1, GameLib.scaleGame, false);
        var w0 = document.createEvent('Events');
        w0.initEvent('gameready', U0a.B2, U0a.B2);
        w0.gameName = i0;
        document.dispatchEvent(w0);
        GameLib.scaleGame();
        orderInit(1);
        if (GameLib.IEversion && GameLib.IEversion < 10) {
            var B0 = 'You are using a rather old version of Internet Explorer (version ' + GameLib.IEversion + ').\nThis game might or might not work. We strongly advise you to upgrade to <a href="http://windows.microsoft.com/en-us/internet-explorer/ie-11-worldwide-languages" target="_blank">Internet Explorer 10</a> or better.\nAlternatively, you can use <a href="http://getfirefox.com/" target="_blank">Firefox</a>, <a href="http://google.com/chrome/" target="_blank">Chrome</a>, <a href="http://apple.com/safari/" target="_blank">Safari</a> or <a href="http://opera.com/browser" target="_blank">Opera</a>.';
            this.showPopup('Old Internet Explorer', B0, 300, 200);
        }
        if (/iP(od|hone)/.test(navigator.userAgent) && !navigator.standalone) {
            GameLib.windowHeight = window.innerHeight;
            setInterval(function() {
                if (window.innerHeight != GameLib.windowHeight) {
                    GameLib.windowHeight = window.innerHeight;
                    GameLib.scaleGame();
                }
            },
            500);
        };
        window.focus();
    }
};;
var CreateAll = {
    CreatedDiv: function(E, e0, f0, i0) {
        var k0 = document.createElement(U0a.g0);
        k0.style.position = "relative";
        k0.style.display = U0a.t1;
        k0.style.left = E + U0a.i1;
        k0.style.top = e0 + U0a.i1;
        f0.appendChild(k0);
        i0.push(k0);
        return k0;
    },
    CreatedCanvas: function(E, e0, f0, i0, k0, n0) {
        var l0 = document.createElement("Canvas");
        n0.push(l0);
        l0.style.position = U0a.M1;
        l0.style.left = E + U0a.i1;
        l0.style.top = e0 + U0a.i1;
        l0.width = f0;
        l0.height = i0;
        l0.draggable = false;
        k0.appendChild(l0);
        return l0;
    },
    CreatedImg: function(E, e0, f0, i0, k0) {
        var n0 = loadRec.resource[E];
        n0.style.position = U0a.M1;
        n0.style.left = e0 + U0a.i1;
        n0.style.top = f0 + U0a.i1;
        n0.draggable = false;
        i0.appendChild(n0);
        k0.push(n0);
        return n0;
    },
    CreatedShowNumber: function(E, e0, f0, i0, k0, n0) {
        var l0 = document.createElement(U0a.g1);
        l0.className = 'number';
        l0.style.left = E + U0a.w2;
        l0.style.top = e0 + U0a.w2;
        l0.style.width = f0 + 'px';
        l0.style.height = i0 + 'px';
        k0.appendChild(l0);
        n0.push(l0);
        return l0;
    },
    CreatedRemDiv: function(E, e0, f0, i0) {
        var k0 = document.createElement(U0a.g1);
        k0.className = 'remDiv';
        k0.style.backgroundImage = U0a.C0 + loadRec.resource["rem"].src + ")";
        k0.style.left = E + U0a.w2;
        k0.style.top = e0 + U0a.w2;
        f0.appendChild(k0);
        i0.push(k0);
        return k0;
    },
    CreatedRem0Div: function(E, e0, f0, i0) {
        var k0 = document.createElement(U0a.g1);
        k0.className = 'remDiv';
        k0.style.backgroundImage = U0a.C0 + loadRec.resource["rem0"].src + ")";
        k0.style.left = E + U0a.w2;
        k0.style.top = e0 + U0a.w2;
        f0.appendChild(k0);
        i0.push(k0);
        return k0;
    },
    CreateText: function(E, e0, f0, i0) {
        var k0 = document.createElement(U0a.g0);
        k0.style.left = E + U0a.i1;
        k0.style.top = e0 + U0a.i1;
        k0.className = 'number';
        f0.appendChild(k0);
        i0.push(k0);
        return k0;
    },
    CreatedButton: function(e0, f0, i0, k0, n0) {
        var l0 = loadRec.resource[e0],
        o0 = new Image();
        o0.src = l0.src;
        n0.push(o0);
        o0.style.position = U0a.M1;
        o0.style.left = f0 + U0a.i1;
        o0.style.top = i0 + U0a.i1;
        o0.className = U0a.x0;
        o0.draggable = false;
        k0.appendChild(o0);
        o0.onmousemove = function(E) {
            o0.style.top = (i0 - 1) + U0a.i1;
        };
        o0.onmouseout = function(E) {
            o0.style.top = i0 + U0a.i1;
        };
        return o0;
    }
};;
var loadRec = {
    images: [{
        src: "img/mahjong/a0001.png",
        id: "a1"
    },
    {
        src: "img/mahjong/a0002.png",
        id: "a2"
    },
    {
        src: "img/mahjong/a0003.png",
        id: "a3"
    },
    {
        src: "img/mahjong/a0004.png",
        id: "a4"
    },
    {
        src: "img/mahjong/a0005.png",
        id: "a5"
    },
    {
        src: "img/mahjong/a0006.png",
        id: "a6"
    },
    {
        src: "img/mahjong/a0007.png",
        id: "a7"
    },
    {
        src: "img/mahjong/a0008.png",
        id: "a8"
    },
    {
        src: "img/mahjong/a0009.png",
        id: "a9"
    },
    {
        src: "img/mahjong/a0010.png",
        id: "a10"
    },
    {
        src: "img/mahjong/a0011.png",
        id: "a11"
    },
    {
        src: "img/mahjong/a0012.png",
        id: "a12"
    },
    {
        src: "img/mahjong/a0013.png",
        id: "a13"
    },
    {
        src: "img/mahjong/a0014.png",
        id: "a14"
    },
    {
        src: "img/mahjong/b1.png",
        id: "b1"
    },
    {
        src: "img/mahjong/b2.png",
        id: "b2"
    },
    {
        src: "img/mahjong/b3.png",
        id: "b3"
    },
    {
        src: "img/mahjong/b4.png",
        id: "b4"
    },
    {
        src: "img/mahjong/b5.png",
        id: "b5"
    },
    {
        src: "img/mahjong/b6.png",
        id: "b6"
    },
    {
        src: "img/mahjong/b7.png",
        id: "b7"
    },
    {
        src: "img/mahjong/b8.png",
        id: "b8"
    },
    {
        src: "img/mahjong/b9.png",
        id: "b9"
    },
    {
        src: "img/mahjong/b10.png",
        id: "b10"
    },
    {
        src: "img/mahjong/b11.png",
        id: "b11"
    },
    {
        src: "img/mahjong/b12.png",
        id: "b12"
    },
    {
        src: "img/mahjong/b13.png",
        id: "b13"
    },
    {
        src: "img/mahjong/b14.png",
        id: "b14"
    },
    {
        src: "img/mahjong/a1.png",
        id: "c1"
    },
    {
        src: "img/mahjong/a2.png",
        id: "c2"
    },
    {
        src: "img/mahjong/a3.png",
        id: "c3"
    },
    {
        src: "img/mahjong/a4.png",
        id: "c4"
    },
    {
        src: "img/mahjong/a5.png",
        id: "c5"
    },
    {
        src: "img/mahjong/a6.png",
        id: "c6"
    },
    {
        src: "img/mahjong/a7.png",
        id: "c7"
    },
    {
        src: "img/mahjong/a8.png",
        id: "c8"
    },
    {
        src: "img/mahjong/a9.png",
        id: "c9"
    },
    {
        src: "img/mahjong/a10.png",
        id: "c10"
    },
    {
        src: "img/mahjong/a11.png",
        id: "c11"
    },
    {
        src: "img/mahjong/a12.png",
        id: "c12"
    },
    {
        src: "img/mahjong/a13.png",
        id: "c13"
    },
    {
        src: "img/mahjong/a14.png",
        id: "c14"
    },
    {
        src: "img/mahjong/rem.png",
        id: "rem"
    },
    {
        src: "img/mahjong/click.png",
        id: U0a.N1
    },
    {
        src: "img/mahjong/hint.png",
        id: "hint"
    },
    {
        src: "img/mahjong/no.png",
        id: "nono"
    },
    {
        src: "img/logo_zygomatic.png",
        id: "logo"
    },
    {
        src: "img/game_back.jpg",
        id: "game_back"
    },
    {
        src: "img/game_back2.jpg",
        id: "game_back2"
    },
    {
        src: "img/game_back3.jpg",
        id: "game_back3"
    },
    {
        src: "img/game_back4.jpg",
        id: "game_back4"
    },
    {
        src: "img/game_back5.jpg",
        id: "game_back5"
    },
    {
        src: "img/menu_back.jpg",
        id: "back_menu"
    },
    {
        src: "img/over_back.jpg",
        id: "back_over"
    },
    {
        src: "img/help_back.jpg",
        id: "back_help"
    },
    {
        src: U0a.Q2,
        id: "end_back"
    },
    {
        src: U0a.Q2,
        id: "face_level"
    },
    {
        src: U0a.Q2,
        id: "face_pause"
    },
    {
        src: U0a.Q2,
        id: "s_back"
    },
    {
        src: U0a.Q2,
        id: "save_back"
    },
    {
        src: "img/c.png",
        id: "c"
    },
    {
        src: "img/deBug.png",
        id: "deBug"
    },
    {
        src: "img/languageUI.png",
        id: U0a.y1
    },
    {
        src: "img/button.png",
        id: U0a.s0
    },
    {
        src: "img/music1.png",
        id: "music2"
    },
    {
        src: "img/music2.png",
        id: "music1"
    },
    {
        src: "img/sound1.png",
        id: "sound2"
    },
    {
        src: "img/sound2.png",
        id: "sound1"
    }],
    fonts: ['Courgette'],
    loadPerc: U0a.A2,
    resource: {},
    data: [],
    creatloading: function() {
        var e0 = new Image();
        if (typeof ThirdParty.config.splashScreen !== U0a.L0) {
            e0.src = ThirdParty.config.splashScreen;
        } else {
            e0.src = 'img/loading.jpg';
        }
        e0.className = 'backPos';
        gameContainer.appendChild(e0);
        this.data.push(e0);
        e0.onload = function() {
            var E = document.createElement(U0a.g1);
            E.className = 'progressbar';
            E.innerHTML = '<div id="loadPerc"></div>';
            gameContainer.appendChild(E);
            loadRec.data.push(E);
            loadRec.loadPerc = document.getElementById('loadPerc');
            loadRec.preload(function() {
                orderInit(2);
                loadRec.remAll();
            });
        };
    },
    preload: function(i0) {
        var k0 = 0,
        n0 = 0,
        l0 = 0,
        o0 = 0,
        u0 = 0;
        if (loadRec.images && loadRec.images.length > 0) {
            l0 = loadRec.images.length;
        }
        if (loadRec.fonts && loadRec.fonts.length > 0) {
            o0 = loadRec.fonts.length;
        }
        u0 = l0 + o0;
        function w0(e0) {
            if (o0 == 0) {
                if (e0) e0();
                return;
            }
            WebFont.load({
                custom: {
                    families: loadRec.fonts
                },
                timeout: 1500,
                fontactive: function() {
                    loadRec.loadPerc.style.width = Math.floor(++k0 * 100 / u0) + '%';
                },
                fontinactive: function(E) {
                    alert('ERROR: Font not found: ' + E);
                },
                active: function() {
                    if (e0) {
                        e0();
                    }
                }
            });
        }
        function B0(e0) {
            var f0 = new Image();
            f0.onload = function() {
                loadRec.loadPerc.style.width = Math.floor(++k0 * 100 / u0) + '%';
                if (k0 < l0) {
                    B0(e0);
                } else if (e0) {
                    e0();
                }
            };
            f0.onerror = function(E) {
                alert("ERROR: Image not found: " + E.target.src);
            };
            loadRec.resource[loadRec.images[n0].id] = f0;
            f0.src = loadRec.images[n0++].src;
        }
        B0(function() {
            w0(i0);
        });
    },
    remAll: function() {
        while (this.data.length > 0) {
            var E = this.data.pop();
            if (E && E.parentNode) {
                E.parentNode.removeChild(E);
            }
        }
    }
},
GameMenu = {
    startGame: function() {
        var E = GameLib.getStorage('level');
        if (false === E) {
            E = 1;
        }
        if (E > 1) {
            GameMenu.saveDiv.style.display = "";
        } else {
            ThirdParty.gameStart();
            orderInit(4);
            GameMenu.remAll();
        }
    },
    timeID: U0a.A2,
    bt_1: U0a.A2,
    bt_2: U0a.A2,
    bt_3: U0a.A2,
    bt_4: U0a.A2,
    onFrame: function() {
        if (GameMenu.bt_4) {
            GameMenu.bt_1.idid++;
            GameMenu.bt_2.idid++;
            GameMenu.bt_3.idid++;
            GameMenu.bt_4.idid++;
            if (GameMenu.bt_1.idid == 15) {
                GameMenu.bt_1.style.display = "";
            }
            if (GameMenu.bt_2.idid == 18) {
                GameMenu.bt_2.style.display = "";
            }
            if (GameMenu.bt_3.idid == 21) {
                GameMenu.bt_3.style.display = "";
            }
            if (GameMenu.bt_4.idid == 24) {
                GameMenu.bt_4.style.display = "";
                GameMenu.bt_4 = U0a.A2;
                clearInterval(GameMenu.timeID);
            }
        }
    },
    saveDiv: U0a.A2,
    showMenu: function() {
        var e0 = this.data;
        GameSound.stopMusic();
        this.timeID = setInterval(this.onFrame, 33);
        ThirdParty.mainMenu();
        var f0 = CreateAll.CreatedImg("back_menu", 0, 0, gameContainer, e0);
        Hammer(f0).on(U0a.U0,
        function(E) {
            languageUI.closeUI();
        });
        f0 = languageUI.getButton("d_Play", 244, 70, 444, 184, 20, 5, true, true, gameContainer, e0, 0);
        Hammer(f0).on(U0a.U0,
        function(E) {
            if (typeof GameAds !== U0a.L0 && GameAds.showAd()) {
                GameSound.ping();
                setTimeout(function() {
                    GameAds.requestAd(GameMenu.startGame);
                },
                0);
            } else {
                GameMenu.startGame();
            }
        });
        f0.style.display = U0a.t1;
        this.bt_1 = f0;
        f0 = languageUI.getButton("d_Help", 244, 70, 444, 256, 20, 5, true, true, gameContainer, e0);
        Hammer(f0).on(U0a.U0,
        function(E) {
            orderInit(3);
            GameMenu.remAll();
        });
        f0.style.display = U0a.t1;
        this.bt_2 = f0;
        f0 = languageUI.getButton("d_HighScore", 244, 70, 444, 328, 20, 5, true, true, gameContainer, e0);
        Hammer(f0).on(U0a.U0,
        function(E) {
            ThirdParty.showLeaderboard();
        });
        f0.style.display = U0a.t1;
        this.bt_3 = f0;
        f0 = languageUI.getButton("d_More", 244, 70, 444, 400, 20, 5, true, true, gameContainer, e0);
        f0.onclick = function() {
            ThirdParty.moreGames();
        };
        f0.style.display = U0a.t1;
        this.bt_4 = f0;
        GameMenu.bt_1.idid = 0;
        GameMenu.bt_2.idid = 0;
        GameMenu.bt_3.idid = 0;
        GameMenu.bt_4.idid = 0;
        GameMenu.saveDiv = CreateAll.CreatedDiv(0, 0, gameContainer, e0);
        f0 = CreateAll.CreatedImg("save_back", 0, 0, GameMenu.saveDiv, e0);
        f0 = languageUI.getButton("d_ContinuePreviousGame", 250, 66, 275, 149, 20, 11, true, true, GameMenu.saveDiv, e0);
        Hammer(f0).on(U0a.U0,
        function(E) {
            GameMenu.saveDiv.style.display = U0a.t1;
            orderInit(4);
            GameMenu.remAll();
        });
        f0 = languageUI.getButton("d_StartNewGame", 250, 66, 275, 262, 20, 11, true, true, GameMenu.saveDiv, e0);
        Hammer(f0).on(U0a.U0,
        function(E) {
            GameMenu.saveDiv.style.display = U0a.t1;
            GameLib.setStorage({
                score: 0,
                level: 1
            });
            orderInit(4);
            GameMenu.remAll();
        });
        languageUI.init(gameContainer);
        if (config.credits) {
          
        }
    },
    data: [],
    remAll: function() {
        while (this.data.length > 0) {
            var E = this.data.pop();
            if (E && E.parentNode) {
                E.parentNode.removeChild(E);
            }
        }
        clearInterval(GameMenu.timeID);
    }
};;
var GameHelp = {
    showHelp: function() {
        ThirdParty.gameHelp();
        var e0 = CreateAll.CreatedImg("back_help", 0, 0, gameContainer, this.data);
        e0 = languageUI.getButton("d_Howtoplay", 280, 46, 260, 35, 10, 2, false, false, gameContainer, this.data);
        e0.txt.fontSize = 48;
        e0 = languageUI.getText("d_HowtoplayText_MahjongMain", 700, 160, 50, 108, gameContainer, this.data);
        e0 = languageUI.getButton("d_Back", 218, 60, 291, 410, 44, 10, true, true, gameContainer, this.data);
        Hammer(e0).on(U0a.U0,
        function(E) {
            orderInit(2);
            GameHelp.remAll();
        });
        languageUI.scaleTexts();
    },
    data: [],
    remAll: function() {
        while (this.data.length > 0) {
            var E = this.data.pop();
            if (E && E.parentNode) {
                E.parentNode.removeChild(E);
            }
        }
    }
},
GamePlay = {
    data: [],
    remAll: function() {
        while (this.data.length > 0) {
            var E = this.data.pop();
            if (E && E.parentNode) {
                E.parentNode.removeChild(E);
            }
        }
        clearInterval(GamePlay.timeID);
    },
    score: 0,
    level: 0,
    txtScore: U0a.A2,
    txtTime: U0a.A2,
    hint: 0,
    txtHint: U0a.A2,
    shuffle: 0,
    txtShuffle: U0a.A2,
    time: 0,
    showTime: function() {
        var E = Math.floor(this.time / 30),
        e0 = "" + Math.floor(E / 60);
        if (e0.length == 1) {
            e0 = "0" + e0;
        }
        var f0 = "" + Math.floor(E % 60);
        if (f0.length == 1) {
            f0 = "0" + f0;
        }
        this.txtTime.innerHTML = e0 + ":" + f0;
    },
    addScore: function(E) {
        this.score += E;
        this.txtScore.innerHTML = "" + this.score;
    },
    backArr: [],
    showBack: function() {
        var E;
        for (E = 0; E < this.backArr.length; E++) {
            this.backArr[E].style.display = U0a.t1;
        }
        E = (this.level - 1) % this.backArr.length;
        this.backArr[E].style.display = "";
    },
    setCanvas: function(E, e0) {
        var f0, i0, k0 = loadRec.resource[E];
        if (e0) {
            i0 = e0;
        } else {
            i0 = document.createElement('img');
        }
        i0.className = U0a.T2;
        i0.draggable = false;
        i0.src = k0.src;
        i0.width = k0.width;
        i0.height = k0.height;
        return i0;
    },
    disorder: function(E) {
        var e0 = new Array,
        f0;
        while (E.length > 0) {
            f0 = Math.floor(E.length * Math.random());
            e0.push(E[f0]);
            E.splice(f0, 1);
        }
        return e0;
    },
    pause: U0a.A2,
    createPause: function() {
        var e0 = CreateAll.CreatedImg("face_pause", 0, 0, this.pause, this.data);
        e0 = languageUI.getButton("d_Continue", 220, 58, 290, 124, 44, 9, true, true, this.pause, this.data, "button");
        Hammer(e0).on(U0a.U0,
        function(E) {
            GamePlay.pause.style.display = "none";
        });
        e0 = languageUI.getButton("d_Menu", 220, 58, 290, 185, 44, 9, true, true, this.pause, this.data, "button");
        Hammer(e0).on(U0a.U0,
        function(E) {
            GameMenu.showMenu();
            GamePlay.remAll();
        });
        var f0 = languageUI.getButton("d_Soundon", 220, 58, 290, 246, 44, 9, U0a.B2, U0a.B2, this.pause, this.data, U0a.s0),
        i0 = languageUI.getButton("d_Soundoff", 220, 58, 290, 246, 44, 9, U0a.B2, U0a.B2, this.pause, this.data, U0a.s0),
        k0 = CreateAll.CreatedButton("music1", 696, 421, this.div888, this.data),
        n0 = CreateAll.CreatedButton("music2", 696, 421, this.div888, this.data);
        this.pause.m1 = f0;
        this.pause.m2 = i0;
        this.pause.m1_ = k0;
        this.pause.m2_ = n0;
        var l0 = function(E) {
            f0.style.display = "";
            i0.style.display = U0a.t1;
            k0.style.display = "";
            n0.style.display = U0a.t1;
            GameSound.muteSound(U0a.B2);
        };
        Hammer(i0).on(U0a.U0, l0);
        Hammer(n0).on(U0a.U0, l0);
        l0 = function(E) {
            f0.style.display = U0a.t1;
            i0.style.display = "";
            k0.style.display = U0a.t1;
            n0.style.display = "";
            GameSound.muteSound(false);
        };
        Hammer(f0).on(U0a.U0, l0);
        Hammer(k0).on(U0a.U0, l0);
        var o0 = languageUI.getButton("d_Musicon", 220, 58, 290, 307, 44, 9, U0a.B2, U0a.B2, this.pause, this.data, U0a.s0),
        u0 = languageUI.getButton("d_Musicoff", 220, 58, 290, 307, 44, 9, U0a.B2, U0a.B2, this.pause, this.data, U0a.s0),
        w0 = CreateAll.CreatedButton("sound1", 744, 421, this.div888, this.data),
        B0 = CreateAll.CreatedButton("sound2", 744, 421, this.div888, this.data);
        this.pause.s1 = o0;
        this.pause.s2 = u0;
        this.pause.s1_ = w0;
        this.pause.s2_ = B0;
        l0 = function() {
            o0.style.display = "";
            u0.style.display = U0a.t1;
            w0.style.display = "";
            B0.style.display = U0a.t1;
            GameSound.muteMusic(U0a.B2);
        };
        Hammer(u0).on(U0a.U0, l0);
        Hammer(B0).on(U0a.U0, l0);
        l0 = function() {
            o0.style.display = U0a.t1;
            u0.style.display = "";
            w0.style.display = U0a.t1;
            B0.style.display = "";
            GameSound.muteMusic(false);
        };
        Hammer(o0).on(U0a.U0, l0);
        Hammer(w0).on(U0a.U0, l0);
        if (GameSound.musicMuted) {
            GamePlay.pause.s1_.style.display = "";
            GamePlay.pause.s2_.style.display = "none";
            GamePlay.pause.s1.style.display = "";
            GamePlay.pause.s2.style.display = "none";
        } else {
            GamePlay.pause.s1_.style.display = "none";
            GamePlay.pause.s2_.style.display = "";
            GamePlay.pause.s1.style.display = "none";
            GamePlay.pause.s2.style.display = "";
        }
        if (GameSound.soundMuted) {
            GamePlay.pause.m1_.style.display = "";
            GamePlay.pause.m2_.style.display = "none";
            GamePlay.pause.m1.style.display = "";
            GamePlay.pause.m2.style.display = "none";
        } else {
            GamePlay.pause.m1_.style.display = "none";
            GamePlay.pause.m2_.style.display = "";
            GamePlay.pause.m1.style.display = "none";
            GamePlay.pause.m2.style.display = "";
        }
    },
    timeOutDiv: U0a.A2,
    createTimeOutDiv: function() {
        var e0 = CreateAll.CreatedImg("end_back", 0, 0, this.timeOutDiv, this.data);
        e0 = languageUI.getButton("d_Endgame", 218, 60, 291, 303, 44, 10, true, true, this.timeOutDiv, this.data, "button");
        Hammer(e0).on(U0a.U0,
        function(E) {
            GamePlay.timeOutDiv.style.display = U0a.t1;
            GameOver.showOver();
            GamePlay.remAll();
        });
        e0 = languageUI.getButton("d_Timeout", 200, 60, 300, 170, 5, 5, false, false, this.timeOutDiv, this.data);
        e0.txt.fontSize = 50;
    },
    shuffleDiv: U0a.A2,
    createShuffleDiv: function() {
        var E = CreateAll.CreatedImg("s_back", 0, 0, this.shuffleDiv, this.data);
        E = languageUI.getButton("d_Shuffle", 200, 60, 300, 210, 5, 5, false, false, this.shuffleDiv, this.data);
        E.txt.fontSize = 50;
    },
    levelDiv: U0a.A2,
    createLevelDiv: function() {
        var e0 = CreateAll.CreatedImg("face_level", 0, 0, this.levelDiv, this.data);
        this.levelDiv.txtTimeBonus = CreateAll.CreatedShowNumber(340, 253, 120, 30, this.levelDiv, this.data);
        e0 = languageUI.getButton("d_Endgame", 218, 60, 291, 308, 44, 10, true, true, this.levelDiv, this.data, "button");
        Hammer(e0).on(U0a.U0,
        function(E) {
            GamePlay.levelDiv.style.display = U0a.t1;
            GameOver.showOver();
            GamePlay.remAll();
        });
        this.levelDiv.end = e0;
        e0 = languageUI.getButton("d_NextLevel", 218, 60, 291, 308, 44, 10, true, true, this.levelDiv, this.data, "button");
        Hammer(e0).on(U0a.U0,
        function(E) {
            GamePlay.levelDiv.style.display = U0a.t1;
            GamePlay.addGame();
        });
        this.levelDiv.next = e0;
        e0 = languageUI.getButton("d_LevelCompleted", 200, 60, 300, 140, 5, 5, false, false, this.levelDiv, this.data);
        e0.txt.fontSize = 30;
        languageUI.getButton("d_TimeBonus", 150, 30, 325, 219, 5, 1, false, false, this.levelDiv, this.data);
    },
    levelUp: function() {
        if (this.levelDiv.style.display == "") {
            return;
        }
        this.levelDiv.txtTimeBonus.innerHTML = "" + this.time;
        this.addScore(this.time);
        this.levelDiv.style.display = "";
        this.levelDiv.style.zIndex = U0a.r1;
        ThirdParty.levelComplete(this.level);
        this.level++;
        GameLib.setStorage({
            level: GamePlay.level,
            score: GamePlay.score
        });
        this.levelDiv.end.style.display = U0a.t1;
        this.levelDiv.next.style.display = "";
    },
    pauseGame: function() {
        GamePlay.pause.style.display = "";
        GamePlay.pause.style.zIndex = 10001;
    },
    timeID: U0a.A2,
    div_all: U0a.A2,
    div_see: U0a.A2,
    div888: U0a.A2,
    imgDic: {},
    showPlay: function() {
        var e0 = 'fullscreen-icon';
        window.addEventListener(U0a.Y1,
        function() {
            setTimeout(GamePlay.pauseGame, GameLib.isTouch ? 0 : 300);
        },
        false);
        ThirdParty.gameStart();
        this.timeID = setInterval(this.onFrame, 33);
        this.backArr.splice(0);
        var f0 = CreateAll.CreatedImg("game_back", 0, 0, gameContainer, this.data);
        this.backArr.push(f0);
        f0 = CreateAll.CreatedImg("game_back2", 0, 0, gameContainer, this.data);
        this.backArr.push(f0);
        f0 = CreateAll.CreatedImg("game_back3", 0, 0, gameContainer, this.data);
        this.backArr.push(f0);
        f0 = CreateAll.CreatedImg("game_back4", 0, 0, gameContainer, this.data);
        this.backArr.push(f0);
        f0 = CreateAll.CreatedImg("game_back5", 0, 0, gameContainer, this.data);
        this.backArr.push(f0);
        this.imgDic["b1"] = CreateAll.CreatedImg("b1", 506, 193, gameContainer, this.data);
        this.imgDic["a1"] = CreateAll.CreatedImg("c1", 506, 193, gameContainer, this.data);
        this.imgDic["b2"] = CreateAll.CreatedImg("b2", 382, 330, gameContainer, this.data);
        this.imgDic["a2"] = CreateAll.CreatedImg("c2", 382, 330, gameContainer, this.data);
        this.imgDic["b3"] = CreateAll.CreatedImg("b3", 632, 105, gameContainer, this.data);
        this.imgDic["a3"] = CreateAll.CreatedImg("c3", 632, 105, gameContainer, this.data);
        this.imgDic["b4"] = CreateAll.CreatedImg("b4", 74, 45, gameContainer, this.data);
        this.imgDic["a4"] = CreateAll.CreatedImg("c4", 74, 45, gameContainer, this.data);
        this.imgDic["b5"] = CreateAll.CreatedImg("b5", 243, 222, gameContainer, this.data);
        this.imgDic["a5"] = CreateAll.CreatedImg("c5", 243, 222, gameContainer, this.data);
        this.imgDic["b6"] = CreateAll.CreatedImg("b6", 404, 192, gameContainer, this.data);
        this.imgDic["a6"] = CreateAll.CreatedImg("c6", 404, 192, gameContainer, this.data);
        this.imgDic["b7"] = CreateAll.CreatedImg("b7", 346, 221, gameContainer, this.data);
        this.imgDic["a7"] = CreateAll.CreatedImg("c7", 346, 221, gameContainer, this.data);
        this.imgDic["b8"] = CreateAll.CreatedImg("b8", 275, 122, gameContainer, this.data);
        this.imgDic["a8"] = CreateAll.CreatedImg("c8", 275, 122, gameContainer, this.data);
        this.imgDic["b9"] = CreateAll.CreatedImg("b9", 486, 350, gameContainer, this.data);
        this.imgDic["a9"] = CreateAll.CreatedImg("c9", 486, 350, gameContainer, this.data);
        this.imgDic["b10"] = CreateAll.CreatedImg("b10", 85, 373, gameContainer, this.data);
        this.imgDic["a10"] = CreateAll.CreatedImg("c10", 85, 373, gameContainer, this.data);
        this.imgDic["b11"] = CreateAll.CreatedImg("b11", 5, 200, gameContainer, this.data);
        this.imgDic["a11"] = CreateAll.CreatedImg("c11", 5, 200, gameContainer, this.data);
        this.imgDic["b12"] = CreateAll.CreatedImg("b12", 650, 245, gameContainer, this.data);
        this.imgDic["a12"] = CreateAll.CreatedImg("c12", 650, 245, gameContainer, this.data);
        this.imgDic["b13"] = CreateAll.CreatedImg("b13", 453, 84, gameContainer, this.data);
        this.imgDic["a13"] = CreateAll.CreatedImg("c13", 453, 84, gameContainer, this.data);
        this.imgDic["b14"] = CreateAll.CreatedImg("b14", 214, 343, gameContainer, this.data);
        this.imgDic["a14"] = CreateAll.CreatedImg("c14", 214, 343, gameContainer, this.data);
        this.drawCanvas = CreateAll.CreatedCanvas(25, 0, 780, 480, gameContainer, this.data);
        this.context2D = this.drawCanvas.getContext("2d");
        this.div_all = CreateAll.CreatedDiv(0, 0, gameContainer, this.data);
        this.div_all.style.display = "";
        this.div_all.style.overflow = "hidden";
        this.div_all.style.width = "800px";
        this.div_all.style.height = "480px";
        this.div_all.style.position = U0a.M1;
        this.div_all.style.zIndex = 6;
        this.div_chainbonus = CreateAll.CreatedDiv(190, 180, gameContainer, this.data);
        this.div_chainbonus.style.zIndex = 7;
        this.txtChainbonus = CreateAll.CreatedShowNumber(205, 3, 95, 30, this.div_chainbonus, this.data);
        this.txtChainbonus.style.textAlign = 'left';
        languageUI.getButton("d_ChainBonus", 200, 30, 0, 0, 1, 2, false, false, this.div_chainbonus, this.data, "right");
        this.div_see = CreateAll.CreatedDiv(0, 0, gameContainer, this.data);
        this.div_see.style.display = "";
        this.div_see.style.overflow = "hidden";
        this.div_see.style.width = "685px";
        this.div_see.style.height = "480px";
        this.div_see.style.position = U0a.M1;
        this.div_see.style.zIndex = 900;
        GameSound.playMusic();
        this.div888 = CreateAll.CreatedDiv(0, 0, gameContainer, this.data);
        this.div888.style.display = "";
        this.div888.style.zIndex = 901;
        if (ThirdParty.config.enableFullscreenToggle && screenfull.enabled) {
            var i0 = document.createElement(U0a.g1);
            i0.setAttribute('id', e0);
            i0.setAttribute('title', 'Toggle fullscreen');
            i0.onclick = function() {
                screenfull.toggle();
            };
            document.addEventListener(screenfull.raw.fullscreenchange,
            function() {
                i0.className = e0 + (screenfull.isFullscreen ? ' on': '');
            });
            this.div888.appendChild(i0);
            this.data.push(i0);
        }
        this.txtScore = CreateAll.CreatedShowNumber(692, 54, 100, 30, gameContainer, this.data);
        this.txtLevel = CreateAll.CreatedShowNumber(692, 130, 100, 30, gameContainer, this.data);
        this.txtTime = CreateAll.CreatedShowNumber(692, 200, 100, 30, gameContainer, this.data);
        languageUI.getButton("d_Score", 80, 30, 702, 27, 1, 2, false, false, gameContainer, this.data);
        languageUI.getButton("d_Level", 80, 30, 702, 103, 1, 2, false, false, gameContainer, this.data);
        languageUI.getButton("d_Time", 80, 30, 702, 173, 1, 2, false, false, gameContainer, this.data);
        f0 = languageUI.getButton("d_Pause", 100, 40, 692, 380, 25, 1, true, true, this.div888, this.data);
        Hammer(f0).on(U0a.U0,
        function(E) {
            GamePlay.pause.style.display = "";
            GamePlay.pause.style.zIndex = 10000;
        });
        f0 = languageUI.getButton("d_Hint", 80, 30, 702, 248, 2, 1, false, true, this.div888, this.data);
        f0.className = "grayImg";
        f0 = languageUI.getButton("d_Hint", 80, 30, 702, 248, 2, 1, false, true, this.div888, this.data);
        this.txtHint = CreateAll.CreatedShowNumber(692, 275, 100, 30, gameContainer, this.data);
        this.txtHint.im = f0;
        Hammer(f0).on('tap',
        function(E) {
            if (GamePlay.hintDiv1.style.display == "none" && GamePlay.moveArr.length == 0 && GamePlay.arrStar.length == 0 && GamePlay.hint > 0) {
                GamePlay.addScore( - 200);
                GamePlay.hintDiv1.style.display = "";
                GamePlay.hintDiv2.style.display = "";
                GamePlay.downDiv = null;
                GamePlay.clickDiv1.style.display = "none";
                GamePlay.hint--;
                GamePlay.txtHint.innerHTML = GamePlay.hint + "";
                if (GamePlay.hint <= 0) {
                    GamePlay.txtHint.im.style.display = "none";
                }
            }
        });
        f0 = languageUI.getButton("d_Shuffle", 80, 30, 702, 318, 2, 1, false, true, this.div888, this.data);
        f0.className = "grayImg";
        f0 = languageUI.getButton("d_Shuffle", 80, 30, 702, 318, 2, 1, false, true, this.div888, this.data);
        this.txtShuffle = CreateAll.CreatedShowNumber(692, 345, 100, 30, gameContainer, this.data);
        this.txtShuffle.im = f0;
        Hammer(f0).on('tap',
        function(E) {
            if (GamePlay.arrStar.length == 0 && GamePlay.shuffle > 0 && GamePlay.moveArr.length == 0) {
                GamePlay.shuffleDiv.style.display = "";
                GamePlay.shuffleDiv.style.zIndex = 10000;
                GamePlay.shuffleDiv.idid = 0;
                GamePlay.addScore( - 300);
                GamePlay.shuffle--;
                GamePlay.txtShuffle.innerHTML = GamePlay.shuffle + "";
                if (GamePlay.shuffle <= 0) {
                    GamePlay.txtShuffle.im.style.display = "none";
                }
            }
        });
        this.lives = GameLib.getStorage('lives');
        if (false === this.score) {
            this.score = 0;
        }
        this.score = GameLib.getStorage('score');
        if (false === this.score) {
            this.score = 0;
        }
        this.addScore(0);
        this.pause = CreateAll.CreatedDiv(0, 0, gameContainer, this.data);
        Hammer(this.div_see).on(U0a.U0, GamePlay.clickDivEvent);
        this.levelDiv = CreateAll.CreatedDiv(0, 0, gameContainer, this.data);
        this.timeOutDiv = CreateAll.CreatedDiv(0, 0, gameContainer, this.data);
        this.shuffleDiv = CreateAll.CreatedDiv(0, 0, gameContainer, this.data);
        this.createLevelDiv();
        this.createPause();
        this.createTimeOutDiv();
        this.createShuffleDiv();
        languageUI.scaleTexts();
        this.clickDiv1 = this.setCanvas(U0a.N1, U0a.A2);
        this.clickDiv1.className = U0a.T2;
        this.clickDiv1.style.left = "0px";
        this.clickDiv1.style.top = "0px";
        this.clickDiv1.style.width = "50px";
        this.clickDiv1.style.height = "50px";
        this.clickDiv1.style.zIndex = 8;
        this.clickDiv1.style.display = U0a.t1;
        this.hintDiv1 = document.createElement(U0a.g0);
        this.hintDiv1.className = U0a.a1;
        this.hintDiv1.style.left = "0px";
        this.hintDiv1.style.top = "-25px";
        this.hintDiv1.style.backgroundImage = U0a.C0 + loadRec.resource["hint"].src + ")";
        this.hintDiv1.ww = 50;
        this.hintDiv1.style.width = "50px";
        this.hintDiv1.style.height = "100px";
        this.hintDiv1.style.backgroundSize = 27 * 50 + "px 100px";
        this.hintDiv1.style.backgroundPosition = 50 * 27 + U0a.K1;
        this.hintDiv1.idid = 27;
        this.hintDiv1.style.zIndex = 9;
        this.hintDiv1.style.display = U0a.t1;
        this.hintDiv2 = document.createElement(U0a.g0);
        this.hintDiv2.className = U0a.a1;
        this.hintDiv2.style.left = "0px";
        this.hintDiv2.style.top = "-25px";
        this.hintDiv2.style.backgroundImage = U0a.C0 + loadRec.resource["hint"].src + ")";
        this.hintDiv2.ww = 50;
        this.hintDiv2.style.width = "50px";
        this.hintDiv2.style.height = "100px";
        this.hintDiv2.style.backgroundSize = 27 * 50 + "px 100px";
        this.hintDiv2.style.backgroundPosition = 50 * 27 + U0a.K1;
        this.hintDiv2.idid = 27;
        this.hintDiv2.style.zIndex = 9;
        this.hintDiv2.style.display = U0a.t1;
        this.addGame();
    },
    idIntArr: [],
    playArr: [],
    gameWidth: 24,
    gameHeight: 12,
    gameX: 8,
    gameY: 8,
    cardNum: 6,
    ww: 50,
    hh: 50,
    mapArr: {},
    cardArr: {},
    arrStar: [],
    strArr: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10', 'a11', 'a12', 'a13', 'a14'],
    idArr: {},
    chouseId: function() {
        var E = (this.gameWidth * this.gameHeight) / 2,
        e0,
        f0 = new Array(),
        i0 = 1;
        for (e0 = 1; e0 < 15; e0++) {
            this.idArr[e0 + "id"] = 0;
        }
        for (e0 = 0; e0 < E; e0++) {
            f0.push(i0);
            f0.push(i0);
            this.idArr[i0 + "id"]++;
            this.idArr[i0 + "id"]++;
            i0++;
            if (i0 > 14) {
                i0 = 1;
            }
        }
        f0 = this.disorder(f0);
        return f0;
    },
    addGame: function() {
        this.imgDic["a1"].style.display = U0a.t1;
        this.imgDic["a1"].style.top = U0a.i1;
        this.imgDic["a1"].style.left = U0a.i1;
        this.imgDic["a2"].style.display = U0a.t1;
        this.imgDic["a3"].style.display = U0a.t1;
        this.imgDic["a4"].style.display = U0a.t1;
        this.imgDic["a5"].style.display = U0a.t1;
        this.imgDic["a6"].style.display = U0a.t1;
        this.imgDic["a7"].style.display = U0a.t1;
        this.imgDic["a8"].style.display = U0a.t1;
        this.imgDic["a9"].style.display = U0a.t1;
        this.imgDic["a10"].style.display = U0a.t1;
        this.imgDic["a11"].style.display = U0a.t1;
        this.imgDic["a12"].style.display = U0a.t1;
        this.imgDic["a13"].style.display = U0a.t1;
        this.imgDic["a14"].style.display = U0a.t1;
        this.level = GameLib.getStorage('level');
        if (false === this.level) {
            this.level = 1;
        }
        this.showBack();
        var E = [2, 315, 143, 146, 707, 266, 101, 111, 386, 261, 58, 76, 27, 13, 157, 142, 143, 317, 83, 92, 16, 248, 51, 67, 520, 225, 48, 104, 697, 178, 62, 47, 278, 366, 188, 111, 102, 243, 61, 75, 583, 261, 135, 98, 215, 225, 134, 113, 450, 266, 75, 87, 542, 393, 151, 91];
        if (this.level % 5 == 0) {
            E = [2, 315, 143, 146, 707, 266, 101, 111, 386, 261, 58, 76, 27, 13, 157, 142, 143, 317, 83, 92, 16, 248, 51, 67, 520, 225, 48, 104, 697, 178, 62, 47, 278, 366, 188, 111, 102, 243, 61, 75, 583, 261, 135, 98, 215, 225, 134, 113, 450, 266, 75, 87, 542, 393, 151, 91];
        } else if (this.level % 5 == 2) {
            E = [ - 4, 180, 143, 146, 538, 291, 101, 111, 180, 170, 58, 76, 561, 15, 157, 142, 629, 129, 96, 106, 408, 208, 82, 107, 496, 131, 48, 104, 0, 2, 107, 81, 195, 364, 188, 111, 291, 182, 61, 75, 393, 345, 179, 130, 177, 253, 134, 113, 722, 283, 75, 87, 47, 332, 151, 91];
        } else if (this.level % 5 == 3) {
            E = [234, 242, 125, 128, 666, 353, 101, 111, 231, 91, 58, 76, 18, 87, 157, 142, 660, 190, 96, 106, 523, 326, 58, 75, 513, 81, 48, 104, 699, 63, 107, 81, 167, 363, 182, 107, 306, 115, 61, 75, 372, 366, 150, 109, 385, 252, 134, 113, 25, 291, 75, 87, 0, 384, 151, 91];
        } else if (this.level % 5 == 4) {
            E = [166, 235, 125, 128, 699, 364, 101, 111, 314, 103, 58, 76, 31, 5, 157, 142, 581, 361, 96, 106, 523, 363, 58, 75, 502, 70, 48, 104, 615, 34, 107, 81, 276, 322, 135, 79, 411, 115, 61, 75, 398, 374, 140, 102, 405, 252, 134, 113, 228, 385, 75, 87, 73, 389, 151, 91];
        } else if (this.level % 5 == 1) {
            E = [ - 1, 299, 114, 116, 325, 340, 74, 82, 409, 174, 58, 76, 17, 76, 157, 142, 533, 163, 55, 61, 596, 148, 62, 81, 470, 139, 48, 104, 670, 3, 107, 81, 388, 340, 144, 85, -4, 234, 61, 75, 654, 157, 145, 105, 174, 273, 134, 113, 589, 340, 75, 87, 116, 383, 151, 91];
        }
        for (i0 = 1; i0 < 15; i0++) {
            this.imgDic["a" + i0].style.left = E[4 * i0 - 4] + U0a.i1;
            this.imgDic["a" + i0].style.top = E[4 * i0 - 3] + U0a.i1;
            this.imgDic["a" + i0].style.width = E[4 * i0 - 2] + "px";
            this.imgDic["a" + i0].style.height = E[4 * i0 - 1] + "px";
            this.imgDic["b" + i0].style.left = E[4 * i0 - 4] + U0a.i1;
            this.imgDic["b" + i0].style.top = E[4 * i0 - 3] + U0a.i1;
            this.imgDic["b" + i0].style.width = E[4 * i0 - 2] + "px";
            this.imgDic["b" + i0].style.height = E[4 * i0 - 1] + "px";
        }
        this.txtLevel.innerHTML = this.level + "";
        this.shuffle = 3;
        this.chainBonusScore = 0;
        this.txtShuffle.innerHTML = this.shuffle + "";
        this.hint = 3;
        this.txtHint.innerHTML = this.hint + "";
        var e0, f0, i0, k0, n0;
        this.moveArr.splice(0);
        this.arrStar.splice(0);
        this.levelOk = false;
        this.time = config.chouseTime(this.level);
        GamePlay.showTime();
        var l0 = config.chouseGameWH(this.level);
        this.gameWidth = l0[0];
        this.gameHeight = l0[1];
        this.gameX = l0[2];
        this.gameY = l0[3];
        this.mapArr = {};
        for (i0 = 0; i0 < this.gameWidth + 2; i0++) {
            for (k0 = 0; k0 < this.gameHeight + 2; k0++) {
                if (i0 == 0 || k0 == 0 || i0 == this.gameWidth + 1 || k0 == this.gameHeight + 1) {
                    this.mapArr[i0 + U0a.b0 + k0] = 0;
                } else {
                    this.mapArr[i0 + U0a.b0 + k0] = 1;
                }
            }
        }
        this.cardNum = config.chouseCard(this.level);
        var o0 = this.chouseId();
        while (this.playArr.length > 0) {
            var u0 = this.playArr.pop();
            if (u0 && u0.parentNode) {
                u0.parentNode.removeChild(u0);
            }
        }
        n0 = 0;
        for (k0 = this.gameHeight - 1; k0 > -1; k0--) {
            for (i0 = 0; i0 < this.gameWidth; i0++) {
                e0 = document.createElement(U0a.g0);
                e0.style.position = U0a.P1;
                e0.style.visibility = U0a.Z0;
                e0.cardName = U0a.t0;
                e0.names = i0 + U0a.q2 + k0;
                e0.rem = false;
                e0.move = false;
                e0.temp = 0;
                e0.i = i0 + 1;
                e0.j = k0 + 1;
                e0.ii = i0 + 1;
                e0.jj = k0 + 1;
                e0.fx = 0;
                e0.mx = 0;
                e0.my = 0;
                var w0 = o0.pop();
                e0.idInt = w0;
                f0 = this.setCanvas(this.strArr[w0 - 1], U0a.A2);
                f0.className = U0a.T2;
                f0.style.width = "50px";
                f0.style.height = "50px";
                f0.draggable = false;
                e0.img = f0;
                e0.appendChild(f0);
                e0.style.left = (this.gameX + this.ww * i0) + U0a.i1;
                e0.style.top = (this.gameY + this.hh * k0) + U0a.i1;
                e0.style.zIndex = this.playArr.length;
                this.div_all.appendChild(e0);
                f0 = this.setCanvas("nono", U0a.A2);
                f0.style.left = e0.style.left;
                f0.style.top = e0.style.top;
                f0.style.width = "50px";
                f0.style.height = "50px";
                f0.style.position = U0a.P1;
                f0.className = U0a.x0;
                f0.cardName = U0a.t0;
                f0.draggable = false;
                f0.lianJie = e0;
                f0.style.zIndex = 1;
                this.div_see.appendChild(f0);
                e0.pppp = f0;
                e0.img.style.zIndex = 1;
                this.playArr.push(e0);
                this.cardArr[i0 + U0a.q2 + k0] = e0;
                e0.idTime = n0;
                e0.aa = 1;
                this.arrStar.push(e0);
                n0 += 3;
            }
        }
        this.downStar();
        if (!GamePlay.checkCanRem()) {
            GamePlay.shuaXinEvt();
        }
        this.txtHint.im.style.display = U0a.t1;
        this.txtShuffle.im.style.display = U0a.t1;
    },
    clickDiv1: U0a.A2,
    hintTime: 0,
    hintDiv1: U0a.A2,
    hintDiv2: U0a.A2,
    div_chainbonus: U0a.A2,
    txtChainbonus: U0a.A2,
    remCanvas: [],
    levelOk: false,
    remDiv: function(E, e0) {
        if (E && E.parentNode) {
            E.parentNode.removeChild(E);
        }
        for (var f0 = 0; f0 < this.playArr.length; f0++) {
            if (this.playArr[f0] == E) {
                this.playArr.splice(f0, 1);
                break;
            }
        }
        this.idArr[E.idInt + "id"]--;
        if (e0) {
            return;
        }
        E.pppp = U0a.A2;
        E.img = U0a.A2;
        var i0 = document.createElement(U0a.g0);
        i0.className = U0a.a1;
        i0.style.left = (parseInt(E.style.left) - 25) + U0a.i1;
        i0.style.top = (parseInt(E.style.top) - 25) + U0a.i1;
        i0.style.backgroundImage = U0a.C0 + loadRec.resource["rem"].src + ")";
        i0.ww = U0a.u1;
        i0.style.width = "100px";
        i0.style.height = "100px";
        i0.style.backgroundSize = "3000px 100px";
        i0.style.backgroundPosition = U0a.u1 * 30 + U0a.K1;
        i0.style.zIndex = 500;
        i0.idid = 30;
        gameContainer.appendChild(i0);
        this.remCanvas.push(i0);
        if (this.idArr[E.idInt + "id"] == 0) {
            this.imgDic["a" + E.idInt].style.display = "";
        }
        GameSound.playSound("remove" + E.idInt);
    },
    downStar: function() {
        var e0 = this.arrStar,
        f0 = function() {
            this.className = 'mahjong_css';
        };
        function i0() {
            var E = e0.shift();
            if (!E) {
                if (GamePlay.showCanDiv) {
                    GamePlay.setHint();
                }
                return false;
            }
            E.addEventListener('animationend', f0, false);
            E.addEventListener('webkitAnimationEnd', f0, false);
            setTimeout(i0, 50);
            E.style.visibility = U0a.z2;
            E.className = 'mahjong_css falldown';
            if (e0.length % 2 == 0) {
                GameSound.playSound("down");
            }
        }
        i0();
    },
    newRandCard: function() {},
    findClear: function() {
        var E, e0, f0 = new Array;
        for (E = 0; E < this.playArr.length; E++) {
            if (this.canClick(this.playArr[E])) {
                f0.push(this.playArr[E]);
            }
        }
        for (E = 0; E < f0.length - 1; E++) {
            for (e0 = E + 1; e0 < f0.length; e0++) {
                if (f0[E].idInt == f0[e0].idInt) {
                    return [f0[e0], f0[E]];
                }
            }
        }
        return U0a.A2;
    },
    setHint: function() {
        var E, e0, f0 = new Array();
        for (E = 0; E < this.gameWidth; E++) {
            for (e0 = 0; e0 < this.gameHeight; e0++) {
                if (this.cardArr[E + U0a.q2 + e0]) {
                    f0.push(this.cardArr[E + U0a.q2 + e0]);
                }
            }
        }
        f0 = this.disorder(f0);
        for (E = 0; E < f0.length - 1; E++) {
            for (e0 = E + 1; e0 < f0.length; e0++) {
                if (f0[E] && f0[e0] && this.isMatched(f0[E], f0[e0], false)) {
                    f0[e0].appendChild(this.hintDiv2);
                    f0[E].appendChild(this.hintDiv1);
                    this.hintDiv1.style.display = U0a.t1;
                    this.hintDiv2.style.display = U0a.t1;
                    return;
                }
            }
        }
    },
    canPlay: function() {
        if (this.hint > 0) {
            this.txtHint.im.style.display = "";
        }
        if (this.shuffle > 0) {
            this.txtShuffle.im.style.display = "";
        }
        if (!this.checkCanRem()) {
            this.shuffleDiv.style.display = "";
            this.shuffleDiv.style.zIndex = U0a.r1;
            this.shuffleDiv.idid = 0;
        }
    },
    moveArr: [],
    downDiv: U0a.A2,
    clickDivEvent: function(E) {
        E.preventDefault();
        var e0 = E.target;
        if (GamePlay.arrStar.length == 0 && e0.cardName && e0.cardName == U0a.t0) {
            e0 = e0.lianJie;
            GamePlay.hintDiv1.style.display = U0a.t1;
            GamePlay.hintDiv2.style.display = U0a.t1;
            if (GamePlay.downDiv) {
                if (GamePlay.downDiv == e0) {
                    GamePlay.downDiv = U0a.A2;
                    GamePlay.clickDiv1.style.display = U0a.t1;
                } else {
                    if (GamePlay.isMatched(GamePlay.downDiv, e0, U0a.B2)) {
                        GamePlay.txtHint.im.style.display = U0a.t1;
                        GamePlay.txtShuffle.im.style.display = U0a.t1;
                        GameSound.playSound("right");
                        GamePlay.chainBonusScore++;
                        GamePlay.downDiv = U0a.A2;
                        GamePlay.clickDiv1.style.display = U0a.t1;
                    } else {
                        GamePlay.downDiv = e0;
                        e0.appendChild(GamePlay.clickDiv1);
                        GameSound.playSound(U0a.N1);
                    }
                }
            } else {
                GamePlay.downDiv = e0;
                e0.appendChild(GamePlay.clickDiv1);
                GamePlay.clickDiv1.style.display = "";
                GameSound.playSound(U0a.N1);
            }
        }
    },
    isMatched: function(E, e0, f0) {
        if (E == e0 || E.idInt != e0.idInt) {
            return false;
        }
        var i0, k0, n0, l0, o0 = E.i,
        u0 = E.j,
        w0 = e0.i,
        B0 = e0.j,
        X0 = {},
        H0 = new Array(),
        T0 = new Array;
        for (i0 = 0; i0 < this.gameWidth + 2; i0++) {
            n0 = 0;
            H0.splice(0);
            l0 = (o0 > i0) ? -1 : 1;
            for (k0 = o0; k0 != i0; k0 += l0) {
                n0 += this.mapArr[k0 + U0a.b0 + u0];
                X0 = {
                    x: u0,
                    y: k0
                };
                H0.push(X0);
            }
            l0 = (u0 > B0) ? -1 : 1;
            for (k0 = u0; k0 != B0; k0 += l0) {
                n0 += this.mapArr[i0 + U0a.b0 + k0];
                X0 = {
                    x: k0,
                    y: i0
                };
                H0.push(X0);
            }
            l0 = (i0 < w0) ? 1 : -1;
            for (k0 = i0; k0 != w0; k0 += l0) {
                n0 += this.mapArr[k0 + U0a.b0 + B0];
                X0 = {
                    x: B0,
                    y: k0
                };
                H0.push(X0);
            }
            if (n0 == 1) {
                if (T0.length == 0 || T0.length > H0.length) {
                    T0 = H0.slice();
                }
            }
        }
        for (i0 = 0; i0 < this.gameHeight + 2; i0++) {
            n0 = 0;
            H0.splice(0);
            l0 = (i0 < u0) ? -1 : 1;
            for (k0 = u0; k0 != i0; k0 += l0) {
                n0 += this.mapArr[o0 + U0a.b0 + k0];
                X0 = {
                    x: k0,
                    y: o0
                };
                H0.push(X0);
            }
            l0 = (w0 > o0) ? 1 : -1;
            for (k0 = o0; k0 != w0; k0 += l0) {
                n0 += this.mapArr[k0 + U0a.b0 + i0];
                X0 = {
                    x: i0,
                    y: k0
                };
                H0.push(X0);
            }
            l0 = (B0 > i0) ? 1 : -1;
            for (k0 = i0; k0 != B0; k0 += l0) {
                n0 += this.mapArr[w0 + U0a.b0 + k0];
                X0 = {
                    x: k0,
                    y: w0
                };
                H0.push(X0);
            }
            if (n0 == 1) {
                if (T0.length == 0 || T0.length > H0.length) {
                    T0 = H0.slice();
                }
            }
        }
        if (T0.length > 0) {
            if (f0 == false) {
                return U0a.B2;
            }
            E.rem = U0a.B2;
            e0.rem = U0a.B2;
            X0 = {
                x: u0,
                y: o0
            };
            T0.unshift(X0);
            X0 = {
                x: B0,
                y: w0
            };
            T0.push(X0);
            var h1 = new Array();
            for (i0 = 0; i0 < T0.length; i0++) {
                h1.push(T0[i0]);
            }
            X0 = T0.shift();
            this.cardArr[E.names] = U0a.A2;
            this.cardArr[e0.names] = U0a.A2;
            this.mapArr[e0.i + U0a.b0 + e0.j] = 0;
            if (E.pppp && E.pppp.parentNode) {
                E.pppp.parentNode.removeChild(E.pppp);
                E.pppp.lianJie = U0a.A2;
            }
            if (e0.pppp && e0.pppp.parentNode) {
                e0.pppp.parentNode.removeChild(e0.pppp);
                e0.pppp.lianJie = U0a.A2;
            }
            this.moveArr.push([E, e0, h1]);
            return U0a.B2;
        }
        return false;
    },
    checkCard: function(E, e0, f0) {
        if (this.mapArr[E][f0][e0] || this.mapArr[E][f0][e0 + 1] || this.mapArr[E][f0][e0 - 1]) {
            return false;
        }
        if (f0 + 1 > 0 && f0 + 1 < this.maxX) {
            if (this.mapArr[E][f0 + 1][e0] || this.mapArr[E][f0 + 1][e0 + 1] || this.mapArr[E][f0 + 1][e0 - 1]) {
                return false;
            }
        }
        if (f0 - 1 > 0 && f0 - 1 < this.maxY) {
            if (this.mapArr[E][f0 - 1][e0] || this.mapArr[E][f0 - 1][e0 + 1] || this.mapArr[E][f0 - 1][e0 - 1]) {
                return false;
            }
        }
        return U0a.B2;
    },
    shuaXinEvt: function() {
        var E = [],
        e0 = [],
        f0 = [],
        i0,
        k0,
        n0 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49];
        n0 = this.disorder(n0);
        for (i0 = 0; i0 < this.playArr.length; i0++) {
            k0 = {
                id: this.playArr[i0].idInt,
                img: this.playArr[i0].img
            };
            E.push(k0);
        }
        E = this.disorder(E);
        for (i0 = 0; i0 < this.playArr.length; i0++) {
            k0 = E.pop();
            this.playArr[i0].idInt = k0.id;
            this.playArr[i0].appendChild(k0.img);
            this.playArr[i0].img = k0.img;
        }
        if (!GamePlay.checkCanRem()) {
            GamePlay.shuaXinEvt();
        }
    },
    checkCanRem: function() {
        var E, e0, f0 = new Array();
        for (E = 0; E < this.gameWidth; E++) {
            for (e0 = 0; e0 < this.gameHeight; e0++) {
                if (this.cardArr[E + U0a.q2 + e0]) {
                    f0.push(this.cardArr[E + U0a.q2 + e0]);
                }
            }
        }
        if (f0.length == 0) {
            return U0a.B2;
        }
        for (E = 0; E < f0.length - 1; E++) {
            for (e0 = E + 1; e0 < f0.length; e0++) {
                if (f0[E] && f0[e0] && this.isMatched(f0[E], f0[e0], false)) {
                    return U0a.B2;
                }
            }
        }
        return false;
    },
    chainBonusScore: 0,
    totallScore: function(E) {
        var e0, f0 = 0;
        for (e0 = 0; e0 < E; e0++) {
            f0 += (E - e0) * 10;
        }
        return f0;
    },
    addChainbonus: function(E) {
        this.addScore(E);
        this.div_chainbonus.idTime = 0;
        this.div_chainbonus.style.display = "";
        this.div_chainbonus.style.top = "280px";
        this.txtChainbonus.innerHTML = "+" + E;
    },
    setRunArr: function() {
        if (this.moveArr.length == 0) {
            if (this.chainBonusScore > 1) {
                this.addChainbonus(this.totallScore(this.chainBonusScore));
            } else {
                if (this.playArr.length == 0 && this.moveArr.length == 0) {
                    this.levelOk = U0a.B2;
                }
            }
            this.chainBonusScore = 0;
        }
    },
    animalsMove: function() {
        if (this.moveArr.length == 0) {
            return;
        }
        var E, e0, f0, i0, k0, n0, l0, o0, u0;
        this.drawCanvas.width = 780;
        for (E = 0; E < this.moveArr.length; E++) {
            n0 = this.moveArr[E][0];
            l0 = this.moveArr[E][1];
            o0 = this.moveArr[E][2];
            if (l0.move == false) {
                if (o0.length == 0) {
                    var w0 = Math.floor(U0a.u1 * Math.random()),
                    B0 = Math.floor(80 * Math.random());
                    if (w0 < 10) {
                        w0 = 10;
                    } else if (w0 > 90) {
                        w0 = 90;
                    }
                    if (B0 < 15) {
                        B0 = 15;
                    } else if (B0 > 60) {
                        B0 = 60;
                    }
                    this.mapArr[n0.i + U0a.b0 + n0.j] = 0;
                    this.addScore(50);
                    this.remDiv(l0, U0a.B2);
                    this.remDiv(n0, false);
                    this.moveArr.splice(E, 1);
                    E--;
                    continue;
                }
                l0.move = U0a.B2;
                k0 = o0.pop();
                f0 = 0;
                i0 = 0;
                l0.mx = this.gameX + i0 + this.ww * (k0.y - 1);
                l0.my = this.gameY + f0 + this.hh * (k0.x - 1);
                l0.ii = k0.y;
                l0.jj = k0.x;
                if (l0.ii < l0.i) {
                    u0 = 0;
                } else if (l0.ii > l0.i) {
                    u0 = 1;
                } else if (l0.jj < l0.j) {
                    u0 = 2;
                } else if (l0.jj > l0.j) {
                    u0 = 3;
                } else {
                    l0.move = false;
                }
                l0.fx = u0;
                E--;
            } else {
                if (l0.fx == 0) {
                    l0.style.left = (parseInt(l0.style.left) - this.speed) + "px";
                    if (parseInt(l0.style.left) <= l0.mx) {
                        l0.style.left = l0.mx + U0a.i1;
                        l0.i = l0.ii;
                        l0.move = false;
                    }
                } else if (l0.fx == 1) {
                    l0.style.left = (parseInt(l0.style.left) + this.speed) + "px";
                    if (parseInt(l0.style.left) >= l0.mx) {
                        l0.style.left = l0.mx + U0a.i1;
                        l0.i = l0.ii;
                        l0.move = false;
                    }
                } else if (l0.fx == 2) {
                    l0.style.top = (parseInt(l0.style.top) - this.speed) + "px";
                    if (parseInt(l0.style.top) <= l0.my) {
                        l0.style.top = l0.my + U0a.i1;
                        l0.j = l0.jj;
                        l0.move = false;
                    }
                } else if (l0.fx == 3) {
                    l0.style.top = (parseInt(l0.style.top) + this.speed) + "px";
                    if (parseInt(l0.style.top) >= l0.my) {
                        l0.style.top = l0.my + U0a.i1;
                        l0.j = l0.jj;
                        l0.move = false;
                    }
                }
                var X0 = new Array();
                for (e0 = 0; e0 < o0.length; e0++) {
                    X0.push(o0[e0]);
                }
                k0 = {
                    x: l0.jj,
                    y: l0.ii
                };
                X0.push(k0);
                this.graphicsSpr(X0, l0);
            }
        }
        if (this.moveArr.length == 0) {
            this.canPlay();
            this.setHint();
        }
    },
    speed: 3,
    context2D: U0a.A2,
    drawCanvas: U0a.A2,
    graphicsSpr: function(E, e0) {
        if (E.length == 0) {
            return;
        }
        var f0, i0, k0, n0 = E[0];
        this.context2D.strokeStyle = "#ff0000";
        this.context2D.beginPath();
        this.context2D.moveTo(this.gameX + this.ww * (n0.y - 1), this.gameY + this.hh * (n0.x - 1) + 25);
        for (f0 = 1; f0 < E.length; f0++) {
            n0 = E[f0];
            i0 = 0;
            k0 = 0;
            this.context2D.lineTo(this.gameX + k0 + this.ww * (n0.y - 1), this.gameY + i0 + this.hh * (n0.x - 1) + 25);
        }
        this.context2D.lineTo(parseInt(e0.style.left), parseInt(e0.style.top) + 25);
        this.context2D.stroke();
    },
    onFrame: function() {
        var E, e0;
        for (E = 0; E < GamePlay.remCanvas.length; E++) {
            e0 = GamePlay.remCanvas[E];
            e0.style.backgroundPosition = e0.ww * e0.idid + U0a.K1;
            e0.idid--;
            if (e0.idid < 1) {
                if (e0.parentNode) {
                    e0.parentNode.removeChild(e0);
                }
                GamePlay.remCanvas.splice(E, 1);
                E--;
                if (GamePlay.remCanvas.length == 0 && GamePlay.moveArr.length == 0) {
                    GamePlay.setRunArr();
                }
            }
        }
        if (GamePlay.pause.style.display == "" || GamePlay.levelDiv.style.display == "" || GamePlay.timeOutDiv.style.display == "") {
            return;
        }
        GamePlay.animalsMove();
        if (GamePlay.div_chainbonus && GamePlay.div_chainbonus.style.display == "") {
            GamePlay.div_chainbonus.idTime++;
            if (GamePlay.div_chainbonus.idTime > 30) {
                GamePlay.div_chainbonus.style.display = U0a.t1;
                if (GamePlay.playArr.length == 0 && GamePlay.moveArr.length == 0) {
                    GamePlay.levelOk = U0a.B2;
                }
            } else {
                GamePlay.div_chainbonus.style.top = (parseInt(GamePlay.div_chainbonus.style.top) - 2) + U0a.i1;
            }
        }
        if (GamePlay.levelOk) {
            GamePlay.levelUp();
            return;
        }
        if (GamePlay.hintDiv1.style.display == "") {
            GamePlay.hintDiv1.style.backgroundPosition = GamePlay.hintDiv1.ww * GamePlay.hintDiv1.idid + U0a.K1;
            GamePlay.hintDiv1.idid--;
            if (GamePlay.hintDiv1.idid < 1) {
                GamePlay.hintDiv1.idid = 27;
            }
            GamePlay.hintDiv2.style.backgroundPosition = GamePlay.hintDiv2.ww * GamePlay.hintDiv2.idid + U0a.K1;
            GamePlay.hintDiv2.idid--;
            if (GamePlay.hintDiv2.idid < 1) {
                GamePlay.hintDiv2.idid = 27;
            }
        }
        if (GamePlay.shuffleDiv.style.display == "") {
            GamePlay.shuffleDiv.idid++;
            if (GamePlay.shuffleDiv.idid == 5) {
                GamePlay.shuaXinEvt();
                GamePlay.setHint();
            } else if (GamePlay.shuffleDiv.idid >= 10) {
                GamePlay.shuffleDiv.style.display = U0a.t1;
            }
        }
        GamePlay.time--;
        if (GamePlay.time <= 0) {
            GamePlay.timeOutDiv.style.display = "";
            GamePlay.timeOutDiv.style.zIndex = U0a.r1;
            return;
        } else if (GamePlay.time < 30 * 10 && GamePlay.time % 30 == 29) {
            GameSound.playSound("STick");
        }
        GamePlay.showTime();
    }
},
GameOver = {
    showOver: function() {
        GameLib.setStorage({
            score: 0,
            level: 1
        });
        var f0 = CreateAll.CreatedImg("back_over", 0, 0, gameContainer, this.data);
        f0 = languageUI.getButton("d_YourScore", 350, 50, 225, 186, 10, 15, false, false, gameContainer, this.data);
        f0 = languageUI.getButton("d_PlayAgain", 218, 60, 291, 280, 44, 10, true, true, gameContainer, this.data, 2);
        Hammer(f0).on(U0a.U0,
        function(E) {
            ThirdParty.restartGame();
            orderInit(2);
            GameOver.remAll();
        });
        f0 = languageUI.getButton("d_SubmitScore", 218, 60, 291, 350, 44, 10, true, true, gameContainer, this.data, 2);
        Hammer(f0).on(U0a.U0,
        function(E) {
            var e0 = GameLib.getStorage('level');
            ThirdParty.submitScore(GamePlay.score, e0);
        });
        var i0 = CreateAll.CreatedShowNumber(340, 237, 120, 30, gameContainer, this.data);
        i0.innerHTML = "" + GamePlay.score;
        languageUI.scaleTexts();
    },
    data: [],
    remAll: function() {
        while (this.data.length > 0) {
            var E = this.data.pop();
            if (E && E.parentNode) {
                E.parentNode.removeChild(E);
            }
        }
    }
};;
var languageUI = {
    uiDiv: U0a.A2,
    buDiv: U0a.A2,
    canGuoQi: U0a.A2,
    canWenZi: U0a.A2,
    showLanguage: [1, 2, 0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    arr: [["CN", "zh-cn", 3, 'zh', 5], ["US", "en_us", 12, 'en', 1], ["NL", "nl", 2, 'nl', 4], ["EN", "en_us", 11, 'en', 2], ["ES", U0a.R2, 5, 'es', 6], ["PT", "pt_portugal", 9, 'pt', 9], ["BR", "br_portugal", 1, 'pt', 10], ["FR", "fr_france", 6, 'fr', 11], ["IT", "it_italy", 8, 'it', 12], ["DE", "de_germany", 4, 'de', 13], ["RU", "ru_russian", 10, 'ru', 14], ["MX", U0a.R2, 13, 'es', 7], ["ARG", U0a.R2, 14, 'es', 8], ["IN", "in_india", 7, 'in', 3], ["POL", "pol_polish", 15, 'pl', 15], ["TUR", "tur_turkish", 16, 'tr', 16]],
    remData: [],
    rulArr: {
        "en_us": U0a.i2,
        "en_en": U0a.i2,
        "in_india": U0a.i2,
        "nl": "http://www.mahjongspelen.nl/",
        "zh-cn": U0a.i2,
        "es_spain": U0a.y0,
        "mx_mexico": U0a.y0,
        "arg_argentina": U0a.y0,
        "pt_portugal": U0a.i2,
        "br_portugal": U0a.i2,
        "fr_france": "http://www.mahjongjeux.com/",
        "it_italy": U0a.i2,
        "de_germany": "http://www.mahjongspielen.de/",
        "ru_russian": U0a.i2,
        "pol_polish": U0a.i2,
        "tur_turkish": U0a.i2
    },
    rul: "http://www.solitaireonline.com",
    getStyle: function(E, e0) {
        var f0;
        if (E.currentStyle) f0 = E.currentStyle[e0];
        else if (window.getComputedStyle) f0 = window.getComputedStyle(E, U0a.A2).getPropertyValue(e0);
        return f0;
    },
    init: function(e0) {
        var f0 = "640px 130px",
        i0 = "Div";
        if (this.uiDiv) {
            e0.appendChild(this.uiDiv);
            e0.appendChild(this.buDiv);
            this.scaleTexts();
            return;
        }
        this.uiDiv = document.createElement(i0);
        this.buDiv = document.createElement(i0);
        this.buDiv.className = U0a.x0;
        this.uiDiv.className = U0a.x0;
        e0.appendChild(this.uiDiv);
        e0.appendChild(this.buDiv);
        var k0, n0, l0;
        for (var o0 = 0; o0 < this.showLanguage.length; o0++) {
            n0 = document.createElement(i0);
            l0 = document.createElement(i0);
            l0.className = U0a.y1;
            l0.style.backgroundImage = U0a.C0 + loadRec.resource[U0a.y1].src + ")";
            l0.style.backgroundSize = f0;
            l0.style.backgroundPosition = '639px 30px';
            l0.style.left = ((o0 % 2) * 59 + 1) + U0a.w2;
            l0.style.top = (480 - 30 - (this.showLanguage.length / 2) * 25 + 25 * Math.floor(o0 / 2)) + 'px';
            l0.style.width = 58 + 'px';
            l0.style.height = 25 + 'px';
            n0.appendChild(l0);
            l0 = document.createElement(i0);
            l0.className = U0a.y1;
            l0.style.backgroundImage = U0a.C0 + loadRec.resource[U0a.y1].src + ")";
            l0.style.backgroundSize = f0;
            l0.style.backgroundPosition = (640 - (this.arr[this.showLanguage[o0]][2] - 1) * 25) + U0a.K1;
            l0.style.left = ((o0 % 2) * 59 + 1) + U0a.w2;
            l0.style.top = (480 - 30 - (this.showLanguage.length / 2) * 25 + 25 * Math.floor(o0 / 2) + 3) + 'px';
            l0.style.width = 23 + 'px';
            l0.style.height = 24 + 'px';
            n0.appendChild(l0);
            l0 = document.createElement(i0);
            l0.className = U0a.y1;
            l0.style.backgroundImage = U0a.C0 + loadRec.resource[U0a.y1].src + ")";
            l0.style.backgroundSize = f0;
            l0.style.backgroundPosition = (640 - (this.arr[this.showLanguage[o0]][2] - 1) * 40) + 'px ' + (130 - 48) + U0a.w2;
            l0.style.left = ((o0 % 2) * 59 + 24) + U0a.w2;
            l0.style.top = (480 - 30 - (this.showLanguage.length / 2) * 25 + 25 * Math.floor(o0 / 2)) + 'px';
            l0.style.width = 33 + 'px';
            l0.style.height = 24 + 'px';
            n0.appendChild(l0);
            n0.idInt = o0;
            this.uiDiv.appendChild(n0);
        }
        l0 = document.createElement(i0);
        l0.className = U0a.y1;
        l0.style.backgroundImage = U0a.C0 + loadRec.resource[U0a.y1].src + ")";
        l0.style.backgroundSize = f0;
        l0.style.backgroundPosition = '540px 30px';
        l0.style.left = '1px';
        l0.style.top = '450px';
        l0.style.width = 124 + 'px';
        l0.style.height = 27 + 'px';
        this.buDiv.appendChild(l0);
        l0 = document.createElement(i0);
        l0.className = U0a.y1;
        l0.style.backgroundImage = U0a.C0 + loadRec.resource[U0a.y1].src + ")";
        l0.style.backgroundSize = f0;
        l0.style.backgroundPosition = '1px 1px';
        l0.style.left = '5px';
        l0.style.top = '453px';
        l0.style.width = 23 + 'px';
        l0.style.height = 24 + 'px';
        this.buDiv.appendChild(l0);
        this.canGuoQi = l0;
        l0 = document.createElement(i0);
        l0.className = U0a.y1;
        l0.style.backgroundImage = U0a.C0 + loadRec.resource[U0a.y1].src + ")";
        l0.style.backgroundSize = f0;
        l0.style.backgroundPosition = '1px 1px';
        l0.style.left = '42px';
        l0.style.top = '450px';
        l0.style.width = 33 + 'px';
        l0.style.height = 24 + 'px';
        this.buDiv.appendChild(l0);
        this.canWenZi = l0;
        this.uiDiv.style.display = U0a.t1;
        this.buDiv.onmousedown = this.buDiv.ontouchstart = function() {
            languageUI.uiDiv.style.display = "";
        };
        this.uiDiv.onmousedown = this.uiDiv.ontouchstart = function(E) {
            E.preventDefault();
            n0 = E.target.parentNode;
            languageUI.setXuanZhe(n0.idInt);
            languageUI.uiDiv.style.display = U0a.t1;
        };
        var u0 = GameLib.getLang();
        for (o0 = 0; o0 < this.showLanguage.length; o0++) {
            if (this.arr[this.showLanguage[o0]][3] == u0) {
                this.setXuanZhe(o0);
                break;
            }
        }
    },
    closeUI: function() {
        this.uiDiv.style.display = U0a.t1;
    },
    getButton: function(E, e0, f0, i0, k0, n0, l0, o0, u0, w0, B0, X0) {
        var H0 = document.createElement(U0a.g1),
        T0 = document.createElement(U0a.g1),
        h1;
        H0.style.position = U0a.P1;
        H0.style.top = k0 + U0a.w2;
        H0.style.left = i0 + U0a.w2;
        H0.style.width = e0 + 'px';
        H0.style.height = f0 + 'px';
        if (X0 == "left") {
            H0.style.textAlign = 'left';
        } else if (X0 == "right") {
            H0.style.textAlign = 'right';
        } else {
            H0.style.textAlign = 'center';
        }
        if (o0) {
            h1 = document.createElement("img");
            h1.style.position = U0a.P1;
            h1.style.top = 0;
            h1.style.left = 0;
            h1.style.width = e0 + 'px';
            h1.style.height = f0 + 'px';
            h1.src = 'img/button.png';
            H0.appendChild(h1);
        }
        if (u0) {
            H0.className = U0a.x0;
            T0.className = U0a.x0;
            if (h1) {
                h1.className = U0a.x0;
            }
        }
        T0 = document.createElement(U0a.g1);
        T0.style.width = '100%';
        T0.style.lineHeight = (f0 - 5) + U0a.w2;
        T0.className = 'btnumber langword';
        T0.innerHTML = languageData[E][languageUI.languageInt];
        H0.appendChild(T0);
        w0.appendChild(H0);
        T0.fontSize = languageUI.getStyle(T0, 'font-size').replace(U0a.w2, '');
        T0.langID = E;
        T0.parentWidth = e0 - n0 * 2;
        B0.push(H0);
        H0.txt = T0;
        return H0;
    },
    getText: function(E, e0, f0, i0, k0, n0, l0) {
        var o0 = document.createElement(U0a.g0);
        o0.className = 'loogText';
        o0.innerHTML = languageData[E][languageUI.languageInt];
        o0.style.left = i0 + U0a.i1;
        o0.style.top = k0 + U0a.i1;
        o0.style.width = e0 + 'px';
        n0.appendChild(o0);
        l0.push(o0);
        return o0;
    },
    scaleTexts: function() {
        var E = document.querySelectorAll('.langword'),
        e0,
        f0,
        i0,
        k0,
        n0;
        if (E) {
            for (e0 = 0; e0 < E.length; e0++) {
                f0 = languageData[E[e0].langID][languageUI.languageInt];
                n0 = document.createElement(U0a.g1);
                n0.className = E[e0].className;
                n0.style.visibility = U0a.Z0;
                n0.innerHTML = f0;
                document.body.appendChild(n0);
                i0 = n0.clientWidth;
                k0 = E[e0].parentWidth;
                n0.parentNode.removeChild(n0);
                E[e0].style.fontSize = (i0 > k0 ? (E[e0].fontSize * k0 / i0) : E[e0].fontSize) + U0a.w2;
                E[e0].innerHTML = f0;
            }
        }
    },
    setXuanZhe: function(E) {
        languageUI.languageInt = this.arr[this.showLanguage[E]][4] - 1;
        GameLib.setLang(this.arr[this.showLanguage[E]][3]);
        this.language = this.arr[this.showLanguage[E]][1];
        this.canGuoQi.style.backgroundPosition = (640 - (this.arr[this.showLanguage[E]][2] - 1) * 25) + U0a.K1;
        this.canWenZi.style.backgroundPosition = (640 - (this.arr[this.showLanguage[E]][2] - 1) * 40) + 'px ' + (130 - 48) + U0a.w2;
        if (this.rulArr[this.language]) {
            this.rul = this.rulArr[this.language];
        }
        languageUI.scaleTexts();
    },
    language: "zh-cn",
    languageInt: 0
};; (function(B0, X0) {
    'use strict';
    var H0 = function H0(E, e0) {
        return new H0.Instance(E, e0 || {});
    };
    H0.VERSION = '1.1.3';
    H0.defaults = {
        behavior: {
            userSelect: 'none',
            touchAction: 'pan-y',
            touchCallout: 'none',
            contentZooming: 'none',
            userDrag: 'none',
            tapHighlightColor: 'rgba(0,0,0,0)'
        }
    };
    H0.DOCUMENT = document;
    H0.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled;
    H0.HAS_TOUCHEVENTS = ('ontouchstart' in B0);
    H0.IS_MOBILE = /mobile|tablet|ip(ad|hone|od)|android|silk/i.test(navigator.userAgent);
    H0.NO_MOUSEEVENTS = (H0.HAS_TOUCHEVENTS && H0.IS_MOBILE) || H0.HAS_POINTEREVENTS;
    H0.CALCULATE_INTERVAL = 25;
    var T0 = {},
    h1 = H0.DIRECTION_DOWN = 'down',
    N0 = H0.DIRECTION_LEFT = 'left',
    k1 = H0.DIRECTION_UP = 'up',
    e1 = H0.DIRECTION_RIGHT = 'right',
    S0 = H0.POINTER_MOUSE = 'mouse',
    f1 = H0.POINTER_TOUCH = 'touch',
    o1 = H0.POINTER_PEN = 'pen',
    p1 = H0.EVENT_START = 'start',
    f2 = H0.EVENT_MOVE = 'move',
    J1 = H0.EVENT_END = 'end',
    h2 = H0.EVENT_RELEASE = 'release',
    R1 = H0.EVENT_TOUCH = 'touch';
    H0.READY = false;
    H0.plugins = H0.plugins || {};
    H0.gestures = H0.gestures || {};
    function P2() {
        if (H0.READY) {
            return;
        }
        E1.determineEventTypes();
        b1.each(H0.gestures,
        function(E) {
            x1.register(E);
        });
        E1.onTouch(H0.DOCUMENT, f2, x1.detect);
        E1.onTouch(H0.DOCUMENT, J1, x1.detect);
        H0.READY = true;
    }
    var b1 = H0.utils = {
        extend: function extend(E, e0, f0) {
            for (var i0 in e0) {
                if (!e0.hasOwnProperty(i0) || (E[i0] !== X0 && f0)) {
                    continue;
                }
                E[i0] = e0[i0];
            }
            return E;
        },
        on: function on(E, e0, f0) {
            E.addEventListener(e0, f0, false);
        },
        off: function off(E, e0, f0) {
            E.removeEventListener(e0, f0, false);
        },
        each: function each(E, e0, f0) {
            var i0, k0;
            if ('forEach' in E) {
                E.forEach(e0, f0);
            } else if (E.length !== X0) {
                for (i0 = 0, k0 = E.length; i0 < k0; i0++) {
                    if (e0.call(f0, E[i0], i0, E) === false) {
                        return;
                    }
                }
            } else {
                for (i0 in E) {
                    if (E.hasOwnProperty(i0) && e0.call(f0, E[i0], i0, E) === false) {
                        return;
                    }
                }
            }
        },
        inStr: function inStr(E, e0) {
            return E.indexOf(e0) > -1;
        },
        inArray: function inArray(E, e0) {
            if (E.indexOf) {
                var f0 = E.indexOf(e0);
                return (f0 === -1) ? false: f0;
            } else {
                for (var i0 = 0,
                k0 = E.length; i0 < k0; i0++) {
                    if (E[i0] === e0) {
                        return i0;
                    }
                }
                return false;
            }
        },
        toArray: function toArray(E) {
            return Array.prototype.slice.call(E, 0);
        },
        hasParent: function hasParent(E, e0) {
            while (E) {
                if (E == e0) {
                    return true;
                }
                E = E.parentNode;
            }
            return false;
        },
        getCenter: function getCenter(e0) {
            var f0 = [],
            i0 = [],
            k0 = [],
            n0 = [],
            l0 = Math.min,
            o0 = Math.max;
            if (e0.length === 1) {
                return {
                    pageX: e0[0].pageX,
                    pageY: e0[0].pageY,
                    clientX: e0[0].clientX,
                    clientY: e0[0].clientY
                };
            }
            b1.each(e0,
            function(E) {
                f0.push(E.pageX);
                i0.push(E.pageY);
                k0.push(E.clientX);
                n0.push(E.clientY);
            });
            return {
                pageX: (l0.apply(Math, f0) + o0.apply(Math, f0)) / 2,
                pageY: (l0.apply(Math, i0) + o0.apply(Math, i0)) / 2,
                clientX: (l0.apply(Math, k0) + o0.apply(Math, k0)) / 2,
                clientY: (l0.apply(Math, n0) + o0.apply(Math, n0)) / 2
            };
        },
        getVelocity: function getVelocity(E, e0, f0) {
            return {
                x: Math.abs(e0 / E) || 0,
                y: Math.abs(f0 / E) || 0
            };
        },
        getAngle: function getAngle(E, e0) {
            var f0 = e0.clientX - E.clientX,
            i0 = e0.clientY - E.clientY;
            return Math.atan2(i0, f0) * 180 / Math.PI;
        },
        getDirection: function getDirection(E, e0) {
            var f0 = Math.abs(E.clientX - e0.clientX),
            i0 = Math.abs(E.clientY - e0.clientY);
            if (f0 >= i0) {
                return E.clientX - e0.clientX > 0 ? N0: e1;
            }
            return E.clientY - e0.clientY > 0 ? k1: h1;
        },
        getDistance: function getDistance(E, e0) {
            var f0 = e0.clientX - E.clientX,
            i0 = e0.clientY - E.clientY;
            return Math.sqrt((f0 * f0) + (i0 * i0));
        },
        getScale: function getScale(E, e0) {
            if (E.length >= 2 && e0.length >= 2) {
                return this.getDistance(e0[0], e0[1]) / this.getDistance(E[0], E[1]);
            }
            return 1;
        },
        getRotation: function getRotation(E, e0) {
            if (E.length >= 2 && e0.length >= 2) {
                return this.getAngle(e0[1], e0[0]) - this.getAngle(E[1], E[0]);
            }
            return 0;
        },
        isVertical: function isVertical(E) {
            return E == k1 || E == h1;
        },
        setPrefixedCss: function setPrefixedCss(E, e0, f0, i0) {
            var k0 = ['', 'Webkit', 'Moz', 'O', 'ms'];
            e0 = b1.toCamelCase(e0);
            for (var n0 = 0; n0 < k0.length; n0++) {
                var l0 = e0;
                if (k0[n0]) {
                    l0 = k0[n0] + l0.slice(0, 1).toUpperCase() + l0.slice(1);
                }
                if (l0 in E.style) {
                    E.style[l0] = (i0 == null || i0) && f0 || '';
                    break;
                }
            }
        },
        toggleBehavior: function toggleBehavior(f0, i0, k0) {
            if (!i0 || !f0 || !f0.style) {
                return;
            }
            b1.each(i0,
            function(E, e0) {
                b1.setPrefixedCss(f0, e0, E, k0);
            });
            var n0 = k0 &&
            function() {
                return false;
            };
            if (i0.userSelect == 'none') {
                f0.onselectstart = n0;
            }
            if (i0.userDrag == 'none') {
                f0.ondragstart = n0;
            }
        },
        toCamelCase: function toCamelCase(e0) {
            return e0.replace(/[_-]([a-z])/g,
            function(E) {
                return E[1].toUpperCase();
            });
        }
    },
    E1 = H0.event = {
        preventMouseEvents: false,
        started: false,
        shouldDetect: false,
        on: function on(e0, f0, i0, k0) {
            var n0 = f0.split(' ');
            b1.each(n0,
            function(E) {
                b1.on(e0, E, i0);
                k0 && k0(E);
            });
        },
        off: function off(e0, f0, i0, k0) {
            var n0 = f0.split(' ');
            b1.each(n0,
            function(E) {
                b1.off(e0, E, i0);
                k0 && k0(E);
            });
        },
        onTouch: function onTouch(n0, l0, o0) {
            var u0 = this,
            w0 = function w0(E) {
                var e0 = E.type.toLowerCase(),
                f0 = H0.HAS_POINTEREVENTS,
                i0 = b1.inStr(e0, 'mouse'),
                k0;
                if (i0 && u0.preventMouseEvents) {
                    return;
                } else if (i0 && l0 == p1 && E.button === 0) {
                    u0.preventMouseEvents = false;
                    u0.shouldDetect = true;
                } else if (f0 && l0 == p1) {
                    u0.shouldDetect = (E.buttons === 1 || k2.matchType(f1, E));
                } else if (!i0 && l0 == p1) {
                    u0.preventMouseEvents = true;
                    u0.shouldDetect = true;
                }
                if (f0 && l0 != J1) {
                    k2.updatePointer(l0, E);
                }
                if (u0.shouldDetect) {
                    k0 = u0.doDetect.call(u0, E, l0, n0, o0);
                }
                if (k0 == J1) {
                    u0.preventMouseEvents = false;
                    u0.shouldDetect = false;
                    k2.reset();
                }
                if (f0 && l0 == J1) {
                    k2.updatePointer(l0, E);
                }
            };
            this.on(n0, T0[l0], w0);
            return w0;
        },
        doDetect: function doDetect(E, e0, f0, i0) {
            var k0 = this.getTouchList(E, e0),
            n0 = k0.length,
            l0 = e0,
            o0 = k0.trigger,
            u0 = n0;
            if (e0 == p1) {
                o0 = R1;
            } else if (e0 == J1) {
                o0 = h2;
                u0 = k0.length - ((E.changedTouches) ? E.changedTouches.length: 1);
            }
            if (u0 > 0 && this.started) {
                l0 = f2;
            }
            this.started = true;
            var w0 = this.collectEventData(f0, l0, k0, E);
            if (e0 != J1) {
                i0.call(x1, w0);
            }
            if (o0) {
                w0.changedLength = u0;
                w0.eventType = o0;
                i0.call(x1, w0);
                w0.eventType = l0;
                delete w0.changedLength;
            }
            if (l0 == J1) {
                i0.call(x1, w0);
                this.started = false;
            }
            return l0;
        },
        determineEventTypes: function determineEventTypes() {
            var E;
            if (H0.HAS_POINTEREVENTS) {
                if (B0.PointerEvent) {
                    E = ['pointerdown', 'pointermove', 'pointerup pointercancel lostpointercapture'];
                } else {
                    E = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp MSPointerCancel MSLostPointerCapture'];
                }
            } else if (H0.NO_MOUSEEVENTS) {
                E = ['touchstart', 'touchmove', 'touchend touchcancel'];
            } else {
                E = ['touchstart mousedown', 'touchmove mousemove', 'touchend touchcancel mouseup'];
            }
            T0[p1] = E[0];
            T0[f2] = E[1];
            T0[J1] = E[2];
            return T0;
        },
        getTouchList: function getTouchList(e0, f0) {
            if (H0.HAS_POINTEREVENTS) {
                return k2.getTouchList();
            }
            if (e0.touches) {
                if (f0 == f2) {
                    return e0.touches;
                }
                var i0 = [],
                k0 = [].concat(b1.toArray(e0.touches), b1.toArray(e0.changedTouches)),
                n0 = [];
                b1.each(k0,
                function(E) {
                    if (b1.inArray(i0, E.identifier) === false) {
                        n0.push(E);
                    }
                    i0.push(E.identifier);
                });
                return n0;
            }
            e0.identifier = 1;
            return [e0];
        },
        collectEventData: function collectEventData(e0, f0, i0, k0) {
            var n0 = f1;
            if (b1.inStr(k0.type, 'mouse') || k2.matchType(S0, k0)) {
                n0 = S0;
            } else if (k2.matchType(o1, k0)) {
                n0 = o1;
            }
            return {
                center: b1.getCenter(i0),
                timeStamp: Date.now(),
                target: k0.target,
                touches: i0,
                eventType: f0,
                pointerType: n0,
                srcEvent: k0,
                preventDefault: function() {
                    var E = this.srcEvent;
                    E.preventManipulation && E.preventManipulation();
                    E.preventDefault && E.preventDefault();
                },
                stopPropagation: function() {
                    this.srcEvent.stopPropagation();
                },
                stopDetect: function() {
                    return x1.stopDetect();
                }
            };
        }
    },
    k2 = H0.PointerEvent = {
        pointers: {},
        getTouchList: function getTouchList() {
            var e0 = [];
            b1.each(this.pointers,
            function(E) {
                e0.push(E);
            });
            return e0;
        },
        updatePointer: function updatePointer(E, e0) {
            if (E == J1) {
                delete this.pointers[e0.pointerId];
            } else {
                e0.identifier = e0.pointerId;
                this.pointers[e0.pointerId] = e0;
            }
        },
        matchType: function matchType(E, e0) {
            if (!e0.pointerType) {
                return false;
            }
            var f0 = e0.pointerType,
            i0 = {};
            i0[S0] = (f0 === (e0.MSPOINTER_TYPE_MOUSE || S0));
            i0[f1] = (f0 === (e0.MSPOINTER_TYPE_TOUCH || f1));
            i0[o1] = (f0 === (e0.MSPOINTER_TYPE_PEN || o1));
            return i0[E];
        },
        reset: function resetList() {
            this.pointers = {};
        }
    },
    x1 = H0.detection = {
        gestures: [],
        current: null,
        previous: null,
        stopped: false,
        startDetect: function startDetect(E, e0) {
            if (this.current) {
                return;
            }
            this.stopped = false;
            this.current = {
                inst: E,
                startEvent: b1.extend({},
                e0),
                lastEvent: false,
                lastCalcEvent: false,
                futureCalcEvent: false,
                lastCalcData: {},
                name: ''
            };
            this.detect(e0);
        },
        detect: function detect(e0) {
            if (!this.current || this.stopped) {
                return;
            }
            e0 = this.extendEventData(e0);
            var f0 = this.current.inst,
            i0 = f0.options;
            b1.each(this.gestures,
            function k0(E) {
                if (!this.stopped && f0.enabled && i0[E.name]) {
                    E.handler.call(E, e0, f0);
                }
            },
            this);
            if (this.current) {
                this.current.lastEvent = e0;
            }
            if (e0.eventType == J1) {
                this.stopDetect();
            }
            return e0;
        },
        stopDetect: function stopDetect() {
            this.previous = b1.extend({},
            this.current);
            this.current = null;
            this.stopped = true;
        },
        getCalculatedData: function getCalculatedData(E, e0, f0, i0, k0) {
            var n0 = this.current,
            l0 = false,
            o0 = n0.lastCalcEvent,
            u0 = n0.lastCalcData;
            if (o0 && E.timeStamp - o0.timeStamp > H0.CALCULATE_INTERVAL) {
                e0 = o0.center;
                f0 = E.timeStamp - o0.timeStamp;
                i0 = E.center.clientX - o0.center.clientX;
                k0 = E.center.clientY - o0.center.clientY;
                l0 = true;
            }
            if (E.eventType == R1 || E.eventType == h2) {
                n0.futureCalcEvent = E;
            }
            if (!n0.lastCalcEvent || l0) {
                u0.velocity = b1.getVelocity(f0, i0, k0);
                u0.angle = b1.getAngle(e0, E.center);
                u0.direction = b1.getDirection(e0, E.center);
                n0.lastCalcEvent = n0.futureCalcEvent || E;
                n0.futureCalcEvent = E;
            }
            E.velocityX = u0.velocity.x;
            E.velocityY = u0.velocity.y;
            E.interimAngle = u0.angle;
            E.interimDirection = u0.direction;
        },
        extendEventData: function extendEventData(e0) {
            var f0 = this.current,
            i0 = f0.startEvent,
            k0 = f0.lastEvent || i0;
            if (e0.eventType == R1 || e0.eventType == h2) {
                i0.touches = [];
                b1.each(e0.touches,
                function(E) {
                    i0.touches.push({
                        clientX: E.clientX,
                        clientY: E.clientY
                    });
                });
            }
            var n0 = e0.timeStamp - i0.timeStamp,
            l0 = e0.center.clientX - i0.center.clientX,
            o0 = e0.center.clientY - i0.center.clientY;
            this.getCalculatedData(e0, k0.center, n0, l0, o0);
            b1.extend(e0, {
                startEvent: i0,
                deltaTime: n0,
                deltaX: l0,
                deltaY: o0,
                distance: b1.getDistance(i0.center, e0.center),
                angle: b1.getAngle(i0.center, e0.center),
                direction: b1.getDirection(i0.center, e0.center),
                scale: b1.getScale(i0.touches, e0.touches),
                rotation: b1.getRotation(i0.touches, e0.touches)
            });
            return e0;
        },
        register: function register(f0) {
            var i0 = f0.defaults || {};
            if (i0[f0.name] === X0) {
                i0[f0.name] = true;
            }
            b1.extend(H0.defaults, i0, true);
            f0.index = f0.index || 1000;
            this.gestures.push(f0);
            this.gestures.sort(function(E, e0) {
                if (E.index < e0.index) {
                    return - 1;
                }
                if (E.index > e0.index) {
                    return 1;
                }
                return 0;
            });
            return this.gestures;
        }
    };
    H0.Instance = function(f0, i0) {
        var k0 = this;
        P2();
        this.element = f0;
        this.enabled = true;
        b1.each(i0,
        function(E, e0) {
            delete i0[e0];
            i0[b1.toCamelCase(e0)] = E;
        });
        this.options = b1.extend(b1.extend({},
        H0.defaults), i0 || {});
        if (this.options.behavior) {
            b1.toggleBehavior(this.element, this.options.behavior, true);
        }
        this.eventStartHandler = E1.onTouch(f0, p1,
        function(E) {
            if (k0.enabled && E.eventType == p1) {
                x1.startDetect(k0, E);
            } else if (E.eventType == R1) {
                x1.detect(E);
            }
        });
        this.eventHandlers = [];
    };
    H0.Instance.prototype = {
        on: function onEvent(e0, f0) {
            var i0 = this;
            E1.on(i0.element, e0, f0,
            function(E) {
                i0.eventHandlers.push({
                    gesture: E,
                    handler: f0
                });
            });
            return i0;
        },
        off: function offEvent(f0, i0) {
            var k0 = this;
            E1.off(k0.element, f0, i0,
            function(E) {
                var e0 = b1.inArray({
                    gesture: E,
                    handler: i0
                });
                if (e0 !== false) {
                    k0.eventHandlers.splice(e0, 1);
                }
            });
            return k0;
        },
        trigger: function triggerEvent(E, e0) {
            if (!e0) {
                e0 = {};
            }
            var f0 = H0.DOCUMENT.createEvent('Event');
            f0.initEvent(E, true, true);
            f0.gesture = e0;
            var i0 = this.element;
            if (b1.hasParent(e0.target, i0)) {
                i0 = e0.target;
            }
            i0.dispatchEvent(f0);
            return this;
        },
        enable: function enable(E) {
            this.enabled = E;
            return this;
        },
        dispose: function dispose() {
            var E, e0;
            b1.toggleBehavior(this.element, this.options.behavior, false);
            for (E = -1; (e0 = this.eventHandlers[++E]);) {
                b1.off(this.element, e0.gesture, e0.handler);
            }
            this.eventHandlers = [];
            E1.off(this.element, T0[p1], this.eventStartHandler);
            return null;
        }
    }; (function(o0) {
        var u0 = false;
        function w0(E, e0) {
            var f0 = x1.current;
            if (e0.options.dragMaxTouches > 0 && E.touches.length > e0.options.dragMaxTouches) {
                return;
            }
            switch (E.eventType) {
            case p1:
                u0 = false;
                break;
            case f2:
                if (E.distance < e0.options.dragMinDistance && f0.name != o0) {
                    return;
                }
                var i0 = f0.startEvent.center;
                if (f0.name != o0) {
                    f0.name = o0;
                    if (e0.options.dragDistanceCorrection && E.distance > 0) {
                        var k0 = Math.abs(e0.options.dragMinDistance / E.distance);
                        i0.pageX += E.deltaX * k0;
                        i0.pageY += E.deltaY * k0;
                        i0.clientX += E.deltaX * k0;
                        i0.clientY += E.deltaY * k0;
                        E = x1.extendEventData(E);
                    }
                }
                if (f0.lastEvent.dragLockToAxis || (e0.options.dragLockToAxis && e0.options.dragLockMinDistance <= E.distance)) {
                    E.dragLockToAxis = true;
                }
                var n0 = f0.lastEvent.direction;
                if (E.dragLockToAxis && n0 !== E.direction) {
                    if (b1.isVertical(n0)) {
                        E.direction = (E.deltaY < 0) ? k1: h1;
                    } else {
                        E.direction = (E.deltaX < 0) ? N0: e1;
                    }
                }
                if (!u0) {
                    e0.trigger(o0 + 'start', E);
                    u0 = true;
                }
                e0.trigger(o0, E);
                e0.trigger(o0 + E.direction, E);
                var l0 = b1.isVertical(E.direction);
                if ((e0.options.dragBlockVertical && l0) || (e0.options.dragBlockHorizontal && !l0)) {
                    E.preventDefault();
                }
                break;
            case h2:
                if (u0 && E.changedLength <= e0.options.dragMaxTouches) {
                    e0.trigger(o0 + 'end', E);
                    u0 = false;
                }
                break;
            case J1:
                u0 = false;
                break;
            }
        }
        H0.gestures.Drag = {
            name: o0,
            index: 50,
            handler: w0,
            defaults: {
                dragMinDistance: 10,
                dragDistanceCorrection: true,
                dragMaxTouches: 1,
                dragBlockHorizontal: false,
                dragBlockVertical: false,
                dragLockToAxis: false,
                dragLockMinDistance: 25
            }
        };
    })('drag');
    H0.gestures.Gesture = {
        name: 'gesture',
        index: 1337,
        handler: function releaseGesture(E, e0) {
            e0.trigger(this.name, E);
        }
    }; (function(k0) {
        var n0;
        function l0(E, e0) {
            var f0 = e0.options,
            i0 = x1.current;
            switch (E.eventType) {
            case p1:
                clearTimeout(n0);
                i0.name = k0;
                n0 = setTimeout(function() {
                    if (i0 && i0.name == k0) {
                        e0.trigger(k0, E);
                    }
                },
                f0.holdTimeout);
                break;
            case f2:
                if (E.distance > f0.holdThreshold) {
                    clearTimeout(n0);
                }
                break;
            case h2:
                clearTimeout(n0);
                break;
            }
        }
        H0.gestures.Hold = {
            name: k0,
            index: 10,
            defaults: {
                holdTimeout: 500,
                holdThreshold: 2
            },
            handler: l0
        };
    })('hold');
    H0.gestures.Release = {
        name: 'release',
        index: Infinity,
        handler: function releaseGesture(E, e0) {
            if (E.eventType == h2) {
                e0.trigger(this.name, E);
            }
        }
    };
    H0.gestures.Swipe = {
        name: 'swipe',
        index: 40,
        defaults: {
            swipeMinTouches: 1,
            swipeMaxTouches: 1,
            swipeVelocityX: 0.6,
            swipeVelocityY: 0.6
        },
        handler: function swipeGesture(E, e0) {
            if (E.eventType == h2) {
                var f0 = E.touches.length,
                i0 = e0.options;
                if (f0 < i0.swipeMinTouches || f0 > i0.swipeMaxTouches) {
                    return;
                }
                if (E.velocityX > i0.swipeVelocityX || E.velocityY > i0.swipeVelocityY) {
                    e0.trigger(this.name, E);
                    e0.trigger(this.name + E.direction, E);
                }
            }
        }
    }; (function(o0) {
        var u0 = false;
        function w0(E, e0) {
            var f0 = e0.options,
            i0 = x1.current,
            k0 = x1.previous,
            n0, l0;
            switch (E.eventType) {
            case p1:
                u0 = false;
                break;
            case f2:
                u0 = u0 || (E.distance > f0.tapMaxDistance);
                break;
            case J1:
                if (!b1.inStr(E.srcEvent.type, 'cancel') && E.deltaTime < f0.tapMaxTime && !u0) {
                    n0 = k0 && k0.lastEvent && E.timeStamp - k0.lastEvent.timeStamp;
                    l0 = false;
                    if (k0 && k0.name == o0 && (n0 && n0 < f0.doubleTapInterval) && E.distance < f0.doubleTapDistance) {
                        e0.trigger('doubletap', E);
                        l0 = true;
                    }
                    if (!l0 || f0.tapAlways) {
                        i0.name = o0;
                        e0.trigger(i0.name, E);
                    }
                }
                break;
            }
        }
        H0.gestures.Tap = {
            name: o0,
            index: 100,
            handler: w0,
            defaults: {
                tapMaxTime: 250,
                tapMaxDistance: 10,
                tapAlways: true,
                doubleTapDistance: 20,
                doubleTapInterval: 300
            }
        };
    })('tap');
    H0.gestures.Touch = {
        name: 'touch',
        index: -Infinity,
        defaults: {
            preventDefault: true,
            preventMouse: false
        },
        handler: function touchGesture(E, e0) {
            if (e0.options.preventMouse && E.pointerType == S0) {
                E.stopDetect();
                return;
            }
            if (e0.options.preventDefault) {
                E.preventDefault();
            }
            if (E.eventType == R1) {
                e0.trigger('touch', E);
            }
        }
    }; (function(k0) {
        var n0 = false;
        function l0(E, e0) {
            switch (E.eventType) {
            case p1:
                n0 = false;
                break;
            case f2:
                if (E.touches.length < 2) {
                    return;
                }
                var f0 = Math.abs(1 - E.scale),
                i0 = Math.abs(E.rotation);
                if (f0 < e0.options.transformMinScale && i0 < e0.options.transformMinRotation) {
                    return;
                }
                x1.current.name = k0;
                if (!n0) {
                    e0.trigger(k0 + 'start', E);
                    n0 = true;
                }
                e0.trigger(k0, E);
                if (i0 > e0.options.transformMinRotation) {
                    e0.trigger('rotate', E);
                }
                if (f0 > e0.options.transformMinScale) {
                    e0.trigger('pinch', E);
                    e0.trigger('pinch' + (E.scale < 1 ? 'in': 'out'), E);
                }
                break;
            case h2:
                if (n0 && E.changedLength < 2) {
                    e0.trigger(k0 + 'end', E);
                    n0 = false;
                }
                break;
            }
        }
        H0.gestures.Transform = {
            name: k0,
            index: 45,
            defaults: {
                transformMinScale: 0.01,
                transformMinRotation: 1
            },
            handler: l0
        };
    })('transform');
    if (typeof define == 'function' && define.amd) {
        define(function() {
            return H0;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = H0;
    } else {
        B0.Hammer = H0;
    }
})(window);; (function(i0, k0) {
    var n0 = config.idleTimeout ? config.idleTimeout: 60,
    l0,
    o0 = false,
    u0,
    w0,
    B0 = {
        hidden: 'visibilitychange',
        webkitHidden: 'webkitvisibilitychange',
        mozHidden: 'mozvisibilitychange',
        msHidden: 'msvisibilitychange'
    };
    function X0(E, e0) {
        if ((!o0 && E == U0a.F1) || (o0 && E == U0a.Y1)) return;
        o0 = E == U0a.Y1;
        e0 = e0 || i0;
        var f0 = k0.createEvent('Events');
        f0.initEvent(E, U0a.B2, U0a.B2);
        e0.dispatchEvent(f0);
    }
    function H0() {
        l0 = i0.setTimeout(function() {
            X0(U0a.Y1);
        },
        n0 * U0a.O2);
    }
    function T0() {
        i0.clearTimeout(l0);
        X0(U0a.F1);
        H0();
    }
    i0.addEventListener('mousemove', T0, false);
    i0.addEventListener('mousedown', T0, false);
    i0.addEventListener('keydown', T0, false);
    i0.addEventListener('DOMMouseScroll', T0, false);
    i0.addEventListener('mousewheel', T0, false);
    i0.addEventListener('touchstart', T0, false);
    i0.addEventListener(U0a.O0, T0, false);
    i0.addEventListener('pagehide',
    function() {
        i0.clearTimeout(l0);
        X0(U0a.Y1);
    },
    false);
    i0.addEventListener('pageshow', T0, false);
    for (u0 in B0) {
        if (u0 in k0) {
            w0 = B0[u0];
            break;
        }
    }
    k0.addEventListener(w0,
    function() {
        if (k0[u0]) {
            i0.clearTimeout(l0);
        } else {
            H0();
        }
        X0(k0[u0] ? U0a.Y1: U0a.F1);
    });
    H0();
})(window, document);; (function() {
    'use strict';
    var l0 = typeof module !== 'undefined' && module.exports,
    o0 = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element,
    u0 = (function() {
        var E;
        var e0;
        var f0 = [['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'], ['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'], ['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'], ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'], ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']];
        var i0 = 0;
        var k0 = f0.length;
        var n0 = {};
        for (; i0 < k0; i0++) {
            E = f0[i0];
            if (E && E[1] in document) {
                for (i0 = 0, e0 = E.length; i0 < e0; i0++) {
                    n0[f0[0][i0]] = E[i0];
                }
                return n0;
            }
        }
        return false;
    })(),
    w0 = {
        request: function(E) {
            var e0 = u0.requestFullscreen;
            E = E || document.documentElement;
            if (/5\.1[\.\d]* Safari/.test(navigator.userAgent)) {
                E[e0]();
            } else {
                E[e0](o0 && Element.ALLOW_KEYBOARD_INPUT);
            }
        },
        exit: function() {
            document[u0.exitFullscreen]();
        },
        toggle: function(E) {
            if (this.isFullscreen) {
                this.exit();
            } else {
                this.request(E);
            }
        },
        onchange: function() {},
        onerror: function() {},
        raw: u0
    };
    if (!u0) {
        if (l0) {
            module.exports = false;
        } else {
            window.screenfull = false;
        }
        return;
    }
    Object.defineProperties(w0, {
        isFullscreen: {
            get: function() {
                return !! document[u0.fullscreenElement];
            }
        },
        element: {
            enumerable: true,
            get: function() {
                return document[u0.fullscreenElement];
            }
        },
        enabled: {
            enumerable: true,
            get: function() {
                var E = navigator.userAgent;
                return !! document[u0.fullscreenEnabled] && E.indexOf('SAMSUNG GT-I9505') == -1 && E.indexOf('Silk/') == -1;
            }
        }
    });
    document.addEventListener(u0.fullscreenchange,
    function(E) {
        w0.onchange.call(w0, E);
    });
    document.addEventListener(u0.fullscreenerror,
    function(E) {
        w0.onerror.call(w0, E);
    });
    if (l0) {
        module.exports = w0;
    } else {
        window.screenfull = w0;
    }
})();; (function(k0, n0) {
    var l0 = "unsupported",
    o0 = 'To add this web app to the home screen open the browser option menu and tap on <strong>Add to homescreen</strong>. <small>The menu can be accessed by pressing the menu hardware button if your device has one, or by tapping the top right menu icon <span class="ath-action-icon">icon</span>.</small>',
    u0 = "load",
    w0 = "addEventListener" in k0,
    B0 = false;
    if (n0.readyState === "complete") {
        B0 = U0a.B2;
    } else if (w0) {
        k0.addEventListener(u0, X0, false);
    }
    function X0() {
        k0.removeEventListener(u0, X0, false);
        B0 = U0a.B2;
    }
    var H0 = /\/ath(\/)?$/,
    T0 = /([\?&]ath=[^&]*$|&ath=[^&]*(&))/,
    h1;
    function N0(E) {
        h1 = h1 || new N0.Class(E);
        return h1;
    }
    N0.intl = {
        de_de: {
            ios: "Um diese Web-App zum Home-Bildschirm hinzuzufügen, tippen Sie auf %icon und dann <strong>Zum Home-Bildschirm</strong>.",
            android: o0
        },
        en_us: {
            ios: "To add this web app to the home screen: tap %icon and then <strong>Add to Home Screen</strong>.",
            android: o0
        },
        es_es: {
            ios: "Para añadir esta aplicación web a la pantalla de inicio: pulsa %icon y selecciona <strong>Añadir a pantalla de inicio</strong>.",
            android: o0
        },
        fr_fr: {
            ios: "Pour ajouter cette application web sur l'écran d'accueil : Appuyez %icon et sélectionnez <strong>Ajouter sur l'écran d'accueil</strong>.",
            android: o0
        },
        he_il: {
            ios: '<span dir="rtl">להוספת האפליקציה למסך הבית: ללחוץ על %icon ואז <strong>הוסף למסך הבית</strong>.</span>',
            android: o0
        },
        it_it: {
            ios: "Per aggiungere questa web app alla schermata iniziale: premi %icon e poi <strong>Aggiungi a Home</strong>.",
            android: 'Per aggiungere questa web app alla schermata iniziale, apri il menu opzioni del browser e premi su <strong>Aggiungi alla homescreen</strong>. <small>Puoi accedere al menu premendo il pulsante hardware delle opzioni se la tua device ne ha uno, oppure premendo l\'icona <span class="ath-action-icon">icon</span> in alto a destra.</small>'
        },
        nb_no: {
            ios: "For å installere denne appen på hjem-skjermen: trykk på %icon og deretter <strong>Legg til på Hjem-skjerm</strong>.",
            android: o0
        },
        pt_br: {
            ios: "Para adicionar este app à tela de início: clique %icon e então <strong>Tela de início</strong>.",
            android: o0
        },
        pt_pt: {
            ios: "Para adicionar esta app ao ecrã principal: clique %icon e depois <strong>Ecrã principal</strong>.",
            android: o0
        },
        nl_nl: {
            ios: "Om deze webapp op je telefoon te installeren, klik op %icon en dan <strong>Zet in beginscherm</strong>.",
            android: o0
        },
        sv_se: {
            ios: "För att lägga till denna webbapplikation på hemskärmen: tryck på %icon och därefter <strong>Lägg till på hemskärmen</strong>.",
            android: o0
        },
        zh_cn: {
            ios: "如要把应用程式加至主屏幕,请点击%icon, 然后<strong>加至主屏幕</strong>",
            android: o0
        },
        zh_tw: {
            ios: "如要把應用程式加至主屏幕, 請點擊%icon, 然後<strong>加至主屏幕</strong>.",
            android: o0
        }
    };
    for (var k1 in N0.intl) {
        N0.intl[k1.substr(0, 2)] = N0.intl[k1];
    }
    N0.defaults = {
        appID: "org.cubiq.addtohome",
        fontSize: 15,
        debug: false,
        modal: false,
        mandatory: false,
        autostart: U0a.B2,
        skipFirstVisit: false,
        startDelay: 1,
        lifespan: 15,
        displayPace: 1440,
        maxDisplayCount: 0,
        icon: U0a.B2,
        message: "",
        validLocation: [],
        onInit: U0a.A2,
        onShow: U0a.A2,
        onRemove: U0a.A2,
        onAdd: U0a.A2,
        onPrivate: U0a.A2,
        privateModeOverride: false,
        detectHomescreen: false
    };
    var e1 = k0.navigator.userAgent,
    S0 = k0.navigator;
    o1(N0, {
        hasToken: n0.location.hash == "#ath" || H0.test(n0.location.href) || T0.test(n0.location.search),
        isRetina: k0.devicePixelRatio && k0.devicePixelRatio > 1,
        isIDevice: /iphone|ipod|ipad/i.test(e1),
        isMobileChrome: e1.indexOf(U0a.t2) > -1 && /Chrome\/[.0-9]*/.test(e1),
        isMobileIE: e1.indexOf(U0a.M0) > -1,
        language: S0.language && S0.language.toLowerCase().replace("-", "_") || ""
    });
    N0.language = N0.language && N0.language in N0.intl ? N0.language: "en_us";
    N0.isMobileSafari = N0.isIDevice && e1.indexOf(U0a.K2) > -1 && e1.indexOf("CriOS") < 0;
    N0.OS = N0.isIDevice ? "ios": N0.isMobileChrome ? "android": N0.isMobileIE ? "windows": l0;
    N0.OSVersion = e1.match(/(OS|Android) (\d+[_\.]\d+)/);
    N0.OSVersion = N0.OSVersion && N0.OSVersion[2] ? +N0.OSVersion[2].replace("_", ".") : 0;
    N0.isStandalone = k0.navigator.standalone || N0.isMobileChrome && screen.height - n0.documentElement.clientHeight < 40;
    N0.isTablet = N0.isMobileSafari && e1.indexOf("iPad") > -1 || N0.isMobileChrome && e1.indexOf("Mobile") < 0;
    N0.isCompatible = N0.isMobileSafari && N0.OSVersion >= 6 || N0.isMobileChrome;
    var f1 = {
        lastDisplayTime: 0,
        returningVisitor: false,
        displayCount: 0,
        optedout: false,
        added: false
    };
    N0.removeSession = function(e0) {
        try {
            localStorage.removeItem(e0 || N0.defaults.appID);
        } catch(E) {}
    };
    N0.Class = function(e0) {
        this.options = o1({},
        N0.defaults);
        o1(this.options, e0);
        if (!w0) {
            return;
        }
        this.options.mandatory = this.options.mandatory && ("standalone" in k0.navigator || this.options.debug);
        this.options.modal = this.options.modal || this.options.mandatory;
        if (this.options.mandatory) {
            this.options.startDelay = -.5;
        }
        this.options.detectHomescreen = this.options.detectHomescreen === true ? "hash": this.options.detectHomescreen;
        if (this.options.debug) {
            N0.isCompatible = true;
            N0.OS = typeof this.options.debug == "string" ? this.options.debug: N0.OS == "unsupported" ? "android": N0.OS;
            N0.OSVersion = N0.OS == "ios" ? "8": "4";
        }
        this.container = n0.documentElement;
        this.session = localStorage.getItem(this.options.appID);
        this.session = this.session ? JSON.parse(this.session) : undefined;
        if (N0.hasToken && (!N0.isCompatible || !this.session)) {
            N0.hasToken = false;
            p1();
        }
        if (!N0.isCompatible) {
            return;
        }
        this.session = this.session || f1;
        try {
            localStorage.setItem(this.options.appID, JSON.stringify(this.session));
            N0.hasLocalStorage = true;
        } catch(E) {
            N0.hasLocalStorage = false;
            if (this.options.onPrivate) {
                this.options.onPrivate.call(this);
            }
        }
        var f0 = !this.options.validLocation.length;
        for (var i0 = this.options.validLocation.length; i0--;) {
            if (this.options.validLocation[i0].test(n0.location.href)) {
                f0 = true;
                break;
            }
        }
        if (localStorage.getItem("addToHome")) {
            this.optOut();
        }
        if (this.session.optedout || this.session.added || !f0) {
            return;
        }
        if (N0.isStandalone) {
            if (!this.session.added) {
                this.session.added = true;
                this.updateSession();
                if (this.options.onAdd && N0.hasLocalStorage) {
                    this.options.onAdd.call(this);
                }
            }
            return;
        }
        if (this.options.detectHomescreen) {
            if (N0.hasToken) {
                p1();
                if (!this.session.added) {
                    this.session.added = true;
                    this.updateSession();
                    if (this.options.onAdd && N0.hasLocalStorage) {
                        this.options.onAdd.call(this);
                    }
                }
                return;
            }
            if (this.options.detectHomescreen == "hash") {
                history.replaceState("", k0.document.title, n0.location.href + "#ath");
            } else if (this.options.detectHomescreen == "smartURL") {
                history.replaceState("", k0.document.title, n0.location.href.replace(/(\/)?$/, "/ath$1"));
            } else {
                history.replaceState("", k0.document.title, n0.location.href + (n0.location.search ? "&": "?") + "ath=");
            }
        }
        if (!this.session.returningVisitor) {
            this.session.returningVisitor = true;
            this.updateSession();
            if (this.options.skipFirstVisit) {
                return;
            }
        }
        if (!this.options.privateModeOverride && !N0.hasLocalStorage) {
            return;
        }
        this.ready = true;
        if (this.options.onInit) {
            this.options.onInit.call(this);
        }
        if (this.options.autostart) {
            this.show();
        }
    };
    N0.Class.prototype = {
        events: {
            load: "_delayedShow",
            error: "_delayedShow",
            orientationchange: "resize",
            resize: "resize",
            scroll: "resize",
            click: "remove",
            touchmove: "_preventDefault",
            transitionend: "_removeElements",
            webkitTransitionEnd: "_removeElements",
            MSTransitionEnd: "_removeElements"
        },
        handleEvent: function(E) {
            var e0 = this.events[E.type];
            if (e0) {
                this[e0](E);
            }
        },
        show: function(E) {
            if (this.options.autostart && !B0) {
                setTimeout(this.show.bind(this), 50);
                return;
            }
            if (this.shown) {
                return;
            }
            var e0 = Date.now(),
            f0 = this.session.lastDisplayTime;
            if (E !== true) {
                if (!this.ready) {
                    return;
                }
                if (e0 - f0 < this.options.displayPace * 6e4) {
                    return;
                }
                if (this.options.maxDisplayCount && this.session.displayCount >= this.options.maxDisplayCount) {
                    return;
                }
            }
            this.shown = true;
            this.session.lastDisplayTime = e0;
            this.session.displayCount++;
            this.updateSession();
            if (!this.applicationIcon) {
                if (N0.OS == "ios") {
                    this.applicationIcon = n0.querySelector('head link[rel^=apple-touch-icon][sizes="152x152"],head link[rel^=apple-touch-icon][sizes="144x144"],head link[rel^=apple-touch-icon][sizes="120x120"],head link[rel^=apple-touch-icon][sizes="114x114"],head link[rel^=apple-touch-icon]');
                } else {
                    this.applicationIcon = n0.querySelector('head link[rel^="shortcut icon"][sizes="196x196"],head link[rel^=apple-touch-icon]');
                }
            }
            var i0 = "";
            if (this.options.message in N0.intl) {
                i0 = N0.intl[this.options.message][N0.OS];
            } else if (this.options.message !== "") {
                i0 = this.options.message;
            } else {
                i0 = N0.intl[N0.language][N0.OS];
            }
            i0 = "<p>" + i0.replace("%icon", '<span class="ath-action-icon">icon</span>') + "</p>";
            this.viewport = n0.createElement("div");
            this.viewport.className = "ath-viewport";
            if (this.options.modal) {
                this.viewport.className += " ath-modal";
            }
            if (this.options.mandatory) {
                this.viewport.className += " ath-mandatory";
            }
            this.viewport.style.position = "absolute";
            this.element = n0.createElement("div");
            this.element.className = "ath-container ath-" + N0.OS + " ath-" + N0.OS + (N0.OSVersion + "").substr(0, 1) + " ath-" + (N0.isTablet ? "tablet": "phone");
            this.element.style.cssText = "-webkit-transition-property:-webkit-transform,opacity;-webkit-transition-duration:0s;-webkit-transition-timing-function:ease-out;transition-property:transform,opacity;transition-duration:0s;transition-timing-function:ease-out;";
            this.element.style.webkitTransform = "translate3d(0,-" + k0.innerHeight + "px,0)";
            this.element.style.transform = "translate3d(0,-" + k0.innerHeight + "px,0)";
            if (this.options.icon && this.applicationIcon) {
                this.element.className += " ath-icon";
                this.img = n0.createElement("img");
                this.img.className = "ath-application-icon";
                this.img.addEventListener("load", this, false);
                this.img.addEventListener("error", this, false);
                this.img.src = this.applicationIcon.href;
                this.element.appendChild(this.img);
            }
            this.element.innerHTML += i0;
            this.viewport.style.left = "-99999em";
            this.viewport.appendChild(this.element);
            this.container.appendChild(this.viewport);
            if (!this.img) {
                this._delayedShow();
            }
        },
        _delayedShow: function(E) {
            setTimeout(this._show.bind(this), this.options.startDelay * 1e3 + 500);
        },
        _show: function() {
            var E = this;
            this.updateViewport();
            k0.addEventListener("resize", this, false);
            k0.addEventListener("scroll", this, false);
            k0.addEventListener("orientationchange", this, false);
            if (this.options.modal) {
                n0.addEventListener("touchmove", this, true);
            }
            if (!this.options.mandatory) {
                setTimeout(function() {
                    E.element.addEventListener("click", E, true);
                },
                1e3);
            }
            setTimeout(function() {
                E.element.style.webkitTransitionDuration = "1.2s";
                E.element.style.transitionDuration = "1.2s";
                E.element.style.webkitTransform = "translate3d(0,0,0)";
                E.element.style.transform = "translate3d(0,0,0)";
            },
            0);
            if (this.options.lifespan) {
                this.removeTimer = setTimeout(this.remove.bind(this), this.options.lifespan * 1e3);
            }
            if (this.options.onShow) {
                this.options.onShow.call(this);
            }
        },
        remove: function() {
            clearTimeout(this.removeTimer);
            if (this.img) {
                this.img.removeEventListener("load", this, false);
                this.img.removeEventListener("error", this, false);
            }
            k0.removeEventListener("resize", this, false);
            k0.removeEventListener("scroll", this, false);
            k0.removeEventListener("orientationchange", this, false);
            n0.removeEventListener("touchmove", this, true);
            this.element.removeEventListener("click", this, true);
            this.element.addEventListener("transitionend", this, false);
            this.element.addEventListener("webkitTransitionEnd", this, false);
            this.element.addEventListener("MSTransitionEnd", this, false);
            this.element.style.webkitTransitionDuration = "0.3s";
            this.element.style.opacity = "0";
        },
        _removeElements: function() {
            this.element.removeEventListener("transitionend", this, false);
            this.element.removeEventListener("webkitTransitionEnd", this, false);
            this.element.removeEventListener("MSTransitionEnd", this, false);
            this.container.removeChild(this.viewport);
            this.shown = false;
            if (this.options.onRemove) {
                this.options.onRemove.call(this);
            }
        },
        updateViewport: function() {
            if (!this.shown) {
                return;
            }
            this.viewport.style.width = k0.innerWidth + "px";
            this.viewport.style.height = k0.innerHeight + "px";
            this.viewport.style.left = k0.scrollX + "px";
            this.viewport.style.top = k0.scrollY + "px";
            var E = n0.documentElement.clientWidth;
            this.orientation = E > n0.documentElement.clientHeight ? "landscape": "portrait";
            var e0 = N0.OS == "ios" ? this.orientation == "portrait" ? screen.width: screen.height: screen.width;
            this.scale = screen.width > E ? 1 : e0 / k0.innerWidth;
            this.element.style.fontSize = this.options.fontSize / this.scale + "px";
        },
        resize: function() {
            clearTimeout(this.resizeTimer);
            this.resizeTimer = setTimeout(this.updateViewport.bind(this), 100);
        },
        updateSession: function() {
            if (N0.hasLocalStorage === false) {
                return;
            }
            localStorage.setItem(this.options.appID, JSON.stringify(this.session));
        },
        clearSession: function() {
            this.session = f1;
            this.updateSession();
        },
        optOut: function() {
            this.session.optedout = true;
            this.updateSession();
        },
        optIn: function() {
            this.session.optedout = false;
            this.updateSession();
        },
        clearDisplayCount: function() {
            this.session.displayCount = 0;
            this.updateSession();
        },
        _preventDefault: function(E) {
            E.preventDefault();
            E.stopPropagation();
        }
    };
    function o1(E, e0) {
        for (var f0 in e0) {
            E[f0] = e0[f0];
        }
        return E;
    }
    function p1() {
        if (n0.location.hash == "#ath") {
            history.replaceState("", k0.document.title, n0.location.href.split("#")[0]);
        }
        if (H0.test(n0.location.href)) {
            history.replaceState("", k0.document.title, n0.location.href.replace(H0, "$1"));
        }
        if (T0.test(n0.location.search)) {
            history.replaceState("", k0.document.title, n0.location.href.replace(T0, "$2"));
        }
    }
    k0.addToHomescreen = N0;
})(window, document);
document.addEventListener('gameready',
function(E) {
    addToHomescreen({
        appID: 'nl.zygomatic.' + E.gameName,
        maxDisplayCount: 1,
        skipFirstVisit: U0a.B2
    });
},
false);;
var languageData = {
    d_ContinuePreviousGame: [U0a.v0, U0a.v0, "Pichhala game jari", "Ga Door Met Vorig Spel", "继续玩", U0a.m0, U0a.m0, U0a.m0, U0a.I0, U0a.I0, "Continuer la partie", "Continua la partita precedente", "Vorheriges Spiel fortsetzen", "Продолжить игру", "Kontynuuj poprzednią grę", "Önceki oyuna devam"],
    d_HowtoplayText_MahjongSubtext: [U0a.n1, U0a.n1, "Aap kisi bhi flower tile ka milan kisi anya ke sath kar sakte hai, yahi prakriya season tiles ke liye bhi use me laayi jati hai.", "Je kunt elke bloem steen combineren met een andere. Dit geldt ook voor de seizoenen stenen", "花朵图案可以相互组合，四季图案也可以相互组合。", U0a.S2, U0a.S2, U0a.S2, "Pode combinar qualquer mosaico com uma flor com outro igual. O mesmo se aplica aos mosaicos com imagens das estações do ano.", "Você pode combinar qualquer peça de flor com outra igual. O mesmo se aplica às peças de estações do ano. ", "Vous pouvez combiner n'importe quelle tuile représentant une fleur avec une autre tuile identique. Cela est également valable pour les tuiles représentant des saisons", "Puoi combinare qualsiasi tegola con fiore con un'altra, lo stesso vale per le tegole con stagioni", "Du kannst jeden Blumen-Spielstein mit einem anderen kombinieren, das Gleiche gilt für die Jahreszeiten-Spielsteine", "Цветочная плитка складывается с другой подходящей цветочной плиткой, так же идет игра и с плитками времен года ", "Można połączyć dowolną płytkę z kwiatem z inną, to samo dotyczy płytek z symbolem pory roku", "Herhangi bir çiçekli kutucuğu bir diğeriyle eşleştirebilirsin. Aynısı mevsim kutucukları için de geçerlidir."],
    d_StartNewGame: [U0a.l2, U0a.l2, "Naya game Shuru", "Start Nieuw Spel", "重新开始", U0a.I1, U0a.I1, U0a.I1, "Novo Jogo", "Novo Jogo", "Commencer une nouvelle", "Inizia una nuova partita", "Neues Spiel starten", "Новая игра", "Rozpocznij nową grę", "Yeni oyuna başla"],
    d_Play: ["Play", "Play", "Play", "Spelen", "开始游戏", "Jugar", "Jugar", "Jugar", "Jogar", "Jogar", "Jouer", "Gioca", "Spielen", "Играть", "Graj", "Oyna"],
    d_Help: ["Help", "Help", "Sahayata", "Help", "帮助", "Ayuda", "Ayuda", "Ayuda", "Ajuda", "Ajuda", "Aide", "Guida", "Hilfe", "Справка", "Pomoc", "Yardım"],
    d_HighScore: [U0a.E0, U0a.E0, "Ucha score", "Highscore", "高分", U0a.c0, U0a.c0, U0a.c0, U0a.D1, U0a.D1, "Haut score", "Punteggio", "Bestenliste", "Результаты", "Najwyższe wyniki", "En yüksek puan"],
    d_More: ["More Games", "More Games", "Anya games", "Meer spellen", "更多游戏", U0a.d1, U0a.d1, U0a.d1, "Mais Jogos", "Mais Jogos", "Plus de jeux", "Altri giochi", "Mehr Spiele", "Еще игры", "Więcej gier", "Daha Fazla Oyun"],
    d_Howtoplay: [U0a.g2, U0a.g2, "Play kaise kare", "Instructies", "游戏说明", U0a.L2, U0a.L2, U0a.L2, "Como jogar", "Como jogar", "Comment jouer", "Regole del gioco", "Anleitung", "Инструкция", "Jak grać", "Nasıl Oynanır"],
    d_HowtoplayText_MahjongMain: [U0a.M2, U0a.M2, "2 90 degree angle tak 2 ek jaise items ko connect karen.", "Verbind 2 dezelfde items met een pad met niet meer dan 2 hoeken van 90 graden.", "连续点击两个相同的图案，不超过两个90度转交就可以消除他们。", U0a.R0, U0a.R0, U0a.R0, "Liga 2 elementos iguais no mesmo percurso, mas não em mais do que 2 ângulos de 90º.", "Conecte 2 elementos iguais no mesmo percurso, mas não em mais do que 2 ângulos de 90º.", "Assemble 2 objets identiques sur la même ligne en ne créant pas plus de 2 angles de 90 degrés.", "Collega 2 degli stessi elementi con un percorso con un massimo di 2 angoli retti.", "Verbinde 2 der gleichen Elemente über einen Weg mit nicht mehr als zwei 90-Grad-Winkeln.", "Соединить 2 одинаковых предмета дорожкой из не более чем 2-х прямых углов.", "Połącz 2 takie same przedmioty ścieżką, używając  najwyżej 2 kątów po 90 stopni.", "2 90 derecelik açıyı geçmeyen bir yolla aynı nesneden 2 tanesini birleştir."],
    d_111: [U0a.K0, U0a.K0, U0a.K0, U0a.K0, U0a.K0, U0a.K0, U0a.K0, U0a.K0, U0a.K0, U0a.K0, U0a.K0, U0a.K0, U0a.K0, U0a.K0, U0a.K0, U0a.K0],
    d_Back: ["Back", "Back", "Wapas", "Terug", "返回", "Atrás", "Atrás", "Atrás", "Voltar", "Voltar", "Retour", "Indietro", "Zurück", "Вернуться", "Powrót", "Geri"],
    d_Endgame: ["End Game", "End Game", "Game Samapti", "Stop spel", "结束", U0a.A0, U0a.A0, U0a.A0, U0a.Q1, U0a.Q1, "Arrêter le jeu", "Termina gioco", "Spiel beenden", "Завершить", "Zakończ grę", "Oyunu Bitir"],
    d_Timeout: ["Time's up", "Time's up", "Samaya Samapta", "Tijd voorbij", "时间到", U0a.o2, U0a.o2, U0a.o2, U0a.W1, U0a.W1, "Temps écoulé", "Tempo scaduto", "Zeit zu Ende", "Ваше время истекло", "Czas ucieka", "Süre bitti"],
    d_LevelCompleted: [U0a.a2, U0a.a2, "Stara Complete Hua", "Level Gereed", "恭喜过关", U0a.F0, U0a.F0, U0a.F0, U0a.C1, U0a.C1, "Niveau terminé", "Livello completato", "Level abgeschlossen", "Уровень завершен", "Poziom ukończony", "Seviye Tamamlandı"],
    d_TimeBonus: [U0a.j0, U0a.j0, "Samaya Bonus:", "Tijdbonus:", "时间奖励:", U0a.C2, U0a.C2, U0a.C2, "Bónus de tempo:", "Bônus de tempo:", "Bonus temps:", "Bonus a tempo:", "Zeitbonus:", "Бонус за время:", "Premia za czas:", "Süre Bonusu:"],
    d_NextLevel: ["Next Level", "Next Level", "Agala Stara", "Volgend Level", "下一关", U0a.F2, U0a.F2, U0a.F2, U0a.H2, U0a.H2, "Niveau suivant", "Livello successivo", "Nächster Level", "Следующий уровень", "Następny poziom", "Sonraki seviye"],
    d_Score: [U0a.I2, U0a.I2, U0a.I2, U0a.I2, "分数:", U0a.T1, U0a.T1, U0a.T1, "Pontuação:", "Pontuação:", U0a.I2, "Punteggio:", "Spielstand:", "Очки:", "Punkty:", "Puan:"],
    d_Time: ["Time:", "Time:", "Samaya:", "Tijd:", "时间：", U0a.d2, U0a.d2, U0a.d2, U0a.G1, U0a.G1, "Temps:", U0a.G1, "Zeit:", "Время:", "Czas:", "Süre:"],
    d_Level: [U0a.Z1, U0a.Z1, "Stara:", U0a.Z1, "关：", U0a.U1, U0a.U1, U0a.U1, "Nível:", "Nível:", "Niveau:", "Livello:", U0a.Z1, "Уровень:", "Poziom:", "Seviye:"],
    d_Hint: ["Hint", "Hint", "Sanketa", "Hint", "提示", U0a.l1, U0a.l1, U0a.l1, "Dica", "Dica", "Astuce", "Suggerimento", "Tipp", "Подсказка", "Podpowiedź", "İpucu"],
    d_Shuffle: ["Shuffle", "Shuffle", "Ghasitana", "Schudden", "刷新", U0a.r0, U0a.r0, U0a.r0, "Baralhar", "Embaralhar", "Battre", "Mescola", "Mischen", "Перемешать", "Tasuj", "Karıştır"],
    d_Pause: [U0a.b2, U0a.b2, "Viaram", "Pauze", "暂停", U0a.V1, U0a.V1, U0a.V1, U0a.V1, U0a.V1, U0a.b2, U0a.V1, U0a.b2, "Пауза", "Pauza", "Duraklat"],
    d_Continue: ["Continue", "Continue", "Jari", "Ga door", "继续", U0a.h0, U0a.h0, U0a.h0, U0a.h0, U0a.h0, "Continuer", "Continua", "Fortfahren", "Продолжить", "Kontynuuj", "Devam"],
    d_Menu: [U0a.D0, U0a.D0, U0a.D0, U0a.D0, "菜单", "Menú", "Menú", "Menú", U0a.D0, U0a.D0, U0a.D0, U0a.D0, "Menü", "Меню", U0a.D0, "Menü"],
    d_SubmitScore: [U0a.A1, U0a.A1, "Score Prastuta Karen", "Verstuur score", "提交分数", U0a.B1, U0a.B1, U0a.B1, "Submeter pontuação", "Enviar pontuação", "Soumettre score", "Invia punteggio", "Spielstand übermitteln", "Отправить счет", "Podaj wynik", "Puanı Gönder"],
    d_PlayAgain: ["Try Again", "Try Again", "Fir se khelen", "Nog een keer", "再试一次", U0a.P0, U0a.P0, U0a.P0, U0a.c2, U0a.c2, "Jouer encore", "Gioca di nuovo", "Noch mal spielen", "Играть снова", "Graj ponownie", "Tekrar Oyna"],
    d_YourScore: [U0a.Q0, U0a.Q0, "Aapka Score", U0a.Q0, "你的分数：", U0a.E2, U0a.E2, U0a.E2, "A sua pontuação", "Sua pontuação", "Votre score", "Il tuo punteggio", "Dein Spielstand", "Твои очки", "Twój wynik", "Puanın"],
    d_Musicon: ["Music On", "Music On", "Sangeet Calu", "Muziek Aan", "音乐开启", U0a.y2, U0a.y2, U0a.y2, U0a.r2, U0a.r2, "Musique Activé", "Musica Attivo", "Musik Ein", "Музыка Вкл", "Muzyka Włącz", "Müzik Açık"],
    d_Musicoff: ["Music Off", "Music Off", "Sangeet Band", "Muziek Uit", "音乐关闭", U0a.V0, U0a.V0, U0a.V0, U0a.W0, U0a.W0, "Musique Désactivé", "Musica Disattivo", "Musik Aus", "Музыка Выкл", "Muzyka Wyłącz", "Müzik Kapalı"],
    d_Soundon: ["Sound On", "Sound On", "Dhwani Calu", "Geluid Aan", "音效开启", U0a.q1, U0a.q1, U0a.q1, "Som Ligar", "Som Ligar", "Son Activé", "Audio Attivo", "Ton Ein", "Звук Вкл", "Dźwięk Włącz", "Ses Açık"],
    d_Soundoff: ["Sound Off", "Sound Off", "Dhwani Band", "Geluid Uit", "音效关闭", U0a.q0, U0a.q0, U0a.q0, U0a.c1, U0a.c1, "Son Désactivé", "Audio Disattivo", "Ton Aus", "Звук Выкл", "Dźwięk Wyłącz", "Ses Kapalı"],
    d_Undo: ["Undo", "Undo", "Purvavat karen", "Herstel", "悔牌", U0a.L1, U0a.L1, U0a.L1, "Anular", "Anular", "Annuler", "Annulla azione", "Rückgängig", "Отмена", "Cofnij", "Geri al"],
    d_Submit: ["Submit", "Submit", "Prastuta karana", "Verstuur", "提交", U0a.w1, U0a.w1, U0a.w1, "Submeter", U0a.w1, "Soumettre", "Invia", "Übermitteln", "Отправить", "Podaj", "Gönder"],
    d_Clear: ["Clear", "Clear", "Sapha", "Leeg", "清除", U0a.J0, U0a.J0, U0a.J0, "Limpar", "Limpar", "Effacer", "Svuota", "Löschen", "Очистить", "Wyczyść", "Temizle"],
    d_Restart: ["Restart", "Restart", "Punah start karen", "Start opnieuw", "重新开始", U0a.G0, U0a.G0, U0a.G0, U0a.G0, U0a.G0, "Redémarrer", "Ricomincia", "Neu starten", "Заново", "Zacznij ponownie", "Yeniden Başlat"],
    d_Goal: ["Goal:", "Goal:", "Lakṣya", "Doel:", "目标:", "Meta:", "Meta:", "Meta:", "Objetivo:", "Objetivo:", "But:", "Obiettivo:", "Ziel:", "Цель:", "Cel:", "Amaç:"],
    d_Lives: ["Lives:", "Lives:", "Jivan:", "Levens:", "生命:", U0a.O1, U0a.O1, U0a.O1, U0a.O1, U0a.O1, "Vies:", "Vite:", "Leben:", "Жизни:", "Życia:", "Can:"],
    d_Bonus: [U0a.J2, U0a.J2, U0a.J2, U0a.J2, "奖励", "Bono", "Bono", "Bono", "Bónus", "Bônus", U0a.J2, U0a.J2, U0a.J2, "Бонус", "Premia", U0a.J2],
    d_TotalScore: [U0a.x2, U0a.x2, "कुल स्कोर:", "Totale Score:", "总分：", U0a.p0, U0a.p0, U0a.p0, U0a.G2, U0a.G2, "Score total:", "Punteggio totale:", "Gesamtpunktzahl:", "Общие очки:", "Punktacja końcowa:", "Toplam Puan:"],
    d_Map: ["Map", "Map", "Naksha", "Kaart", "地图", U0a.Y0, U0a.Y0, U0a.Y0, U0a.Y0, U0a.Y0, "Carte", "Mappa", "Karte", "Карта", U0a.Y0, "Harita"],
    d_ChainBonus: [U0a.d0, U0a.d0, "Srrinkhala Bonus", "Kettingbonus", "连续奖励", U0a.S1, U0a.S1, U0a.S1, "Bónus de cadeia", "Bônus de cadeia", "Bonus chaîne", "Bonus catena", "Kettenbonus", "Бонус за серию", "Premia za łańcuszek", "Zincir Bonusu"]
},
GameSound = {
    ua: navigator.userAgent,
    context: U0a.A2,
    sound: U0a.A2,
    sounds: [],
    music: U0a.A2,
    audioIdle: false,
    musicMuted: false,
    musicStopped: U0a.B2,
    soundMuted: false,
    soundSprite: U0a.A2,
    pauseTime: 0,
    useWebAudioBGM: U0a.B2,
    useWebAudioFX: U0a.B2,
    playSoundFX: U0a.B2,
    musicLoaded: false,
    soundLoaded: false,
    nrSoundSlots: 5,
    curSoundSlot: 0,
    loadScript: function(E, e0) {
        var f0, i0 = document.getElementsByTagName('script')[0];
        f0 = document.createElement('script');
        if (e0) {
            f0.addEventListener('load', e0, false);
        }
        f0.src = E;
        i0.parentNode.insertBefore(f0, i0);
    },
    init: function(k0) {
        this.soundMuted = GameLib.getStorage('soundMuted') === U0a.B2;
        this.musicMuted = GameLib.getStorage('musicMuted') === U0a.B2;
        if (typeof config.nrSoundSlots !== U0a.L0) {
            this.nrSoundSlots = config.nrSoundSlots;
        }
        this.soundSprite = k0;
        var n0 = /http/.test(location.protocol);
        if (!n0 || /(Trident|MSIE|IEMobile|Silk)/.test(this.ua) || (/Android/.test(this.ua) && !/(Chrome|Firefox|Opera)/.test(this.ua))) {
            this.useWebAudioBGM = false;
        }
        try {
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            this.context = new AudioContext();
        } catch(E) {
            this.useWebAudioBGM = false;
        }
        this.useWebAudioFX = n0 && this.context;
        if (/Silk/.test(this.ua) || (/Android/.test(this.ua) && !/(Chrome|Firefox|Opera)/.test(this.ua))) {
            this.playSoundFX = false;
        }
        function l0(e0, f0) {
            var i0 = new XMLHttpRequest();
            i0.open('GET', e0, U0a.B2);
            i0.responseType = 'arraybuffer';
            i0.onload = function() {
                GameSound.context.decodeAudioData(i0.response,
                function(E) {
                    GameSound[f0] = E;
                    GameSound[f0 + 'Loaded'] = U0a.B2;
                });
            };
            i0.send();
        }
        function o0(E, e0) {
            var f0 = document.createElement('audio');
            f0.preload = 'auto';
            if (e0 == 'music') {
                f0.loop = 'loop';
            }
            f0.oncanplaythrough = function() {
                GameSound[e0 + 'Loaded'] = U0a.B2;
            };
            f0.src = E;
            return f0;
        }
        function u0(E, e0) {
            if (E) {
                l0(e0, 'music');
            } else {
                GameSound.music = o0(e0, 'music');
            }
        }
        function w0(e0, f0) {
            if (e0) {
                l0(f0, 'sound');
            } else {
                GameSound.loadScript('sounds/sprite.js',
                function() {
                    for (var E = 0; E < GameSound.nrSoundSlots; E++) {
                        GameSound.sounds[E] = o0(soundSprite, 'sound');
                    }
                });
            }
        }
        var B0 = document.createElement('audio'),
        X0 = B0.canPlayType('audio/ogg') ? 'ogg': 'm4a';
        u0(this.useWebAudioBGM, 'sounds/Game.' + X0);
        if (this.playSoundFX) {
            w0(this.useWebAudioFX, 'sounds/sprite.' + X0);
        }
    },
    _pauseMusic: function(E) {
        if (this.useWebAudioBGM) {
            if (E) {
                this.pauseTime = 0;
            } else {
                var e0 = this.context.currentTime;
                this.pauseTime = e0 - (Math.floor(e0 / this.bufferDuration) * this.bufferDuration) || 0;
            }
            if (this.musicSource) {
                if (this.musicSource.stop) {
                    this.musicSource.stop(0);
                } else {
                    this.musicSource.noteOff(0);
                }
            }
        } else {
            this.music.pause();
            if (E) {
                this.music.currentTime = 0;
            }
        }
    },
    _playMusic: function() {
        if (this.useWebAudioBGM) {
            var E = this.context.createBufferSource();
            E.buffer = this.music;
            E.loop = U0a.B2;
            E.connect(this.context.destination);
            this.bufferDuration = E.buffer.duration;
            if (E.start) {
                E.start(0, this.pauseTime);
            } else {
                E.noteOn(0);
            }
            this.musicSource = E;
        } else {
            this.music.play();
        }
    },
    ping: function() {
        if (/IEMobile/.test(this.ua)) return;
        if (this.useWebAudioBGM) {
            var E = this.context.createBufferSource();
            E.buffer = this.context.createBuffer(1, 1, 22050);
            E.connect(this.context.destination);
            if (E.start) {
                E.start(0);
            } else {
                E.noteOn(0);
            }
        } else {
            this.music.play();
            this.music.pause();
        }
    },
    playSound: function(e0) {
        var f0 = this.soundSprite[e0];
        if (!f0 || !this.playSoundFX || this.soundMuted || this.audioIdle) {
            return;
        }
        var i0 = f0[0],
        k0 = f0[1];
        if (this.useWebAudioFX) {
            var n0 = this.context.createBufferSource();
            n0.buffer = this.sound;
            n0.connect(this.context.destination);
            if (n0.start) {
                n0.start(0, i0 / 1000, k0 / 1000);
            } else {
                n0.noteGrainOn(0, i0 / 1000, k0 / 1000);
            }
        } else {
            var l0 = this.sounds[this.curSoundSlot++];
            if (this.curSoundSlot >= this.nrSoundSlots) {
                this.curSoundSlot = 0;
            }
            try {
                l0.currentTime = i0 / 1000;
                setTimeout(function() {
                    l0.pause();
                },
                k0);
                l0.play();
            } catch(E) {};
        }
    },
    muteSound: function(E) {
        this.soundMuted = E;
        GameLib.setStorage('soundMuted', E);
    },
    playMusic: function() {
        if (!this.musicStopped) return;
        if (this.useWebAudioBGM && !this.musicLoaded) {
            setTimeout(function() {
                GameSound.playMusic();
            },
            U0a.O2);
        } else {
            this.musicStopped = false;
            if (this.audioIdle || this.musicMuted) {
                return;
            }
            this._playMusic();
        }
    },
    stopMusic: function() {
        this.musicStopped = U0a.B2;
        try {
            this._pauseMusic(U0a.B2);
        } catch(E) {};
    },
    muteMusic: function(E) {
        this.musicMuted = E;
        if (E) {
            this._pauseMusic(false);
        } else if (!this.audioIdle && !this.musicStopped) {
            this._playMusic();
        }
        GameLib.setStorage('musicMuted', E);
    },
    setIdle: function(E) {
        if (E === this.audioIdle) return;
        this.audioIdle = E;
        if (E) {
            this._pauseMusic(false);
        } else if (!this.musicMuted && !this.musicStopped) {
            this._playMusic();
        }
    }
};
document.addEventListener('gameready',
function(E) {
    GameSound.init(config.soundSprite);
},
false);;
var GameHiscore = {
    gameName: '',
    lang: 'en',
    salt1: 'NCM1Kkc=',
    salt2: 'UXA/fHFh',
    apiDomain: U0a.A2,
    apiUrl: U0a.A2,
    init: function(E) {
        this.gameName = E;
        this.apiDomain = /\.dev\//.test(location.pathname) ? 'dev.api.zygomatic.nl': 'api.zygomatic.nl';
        this.apiUrl = 'http://' + this.apiDomain + '/hiscore';
        if (/(leukstespellen\.nl|gamesonly\.net)$/i.test(GameLib.getHostDomain())) {
            this.apiDomain = RegExp.$1.toLowerCase();
            this.apiUrl = 'http://www.' + this.apiDomain + '/highscore.php';
        }
    },
    set: function(E, e0) {
        if (typeof E === 'object') {
            for (var f0 in E) {
                this[f0] = E[f0];
            }
        } else {
            this[E] = e0;
        }
    },
    md5: function(X0) {
        function H0(E, e0) {
            var f0 = (E & 0xFFFF) + (e0 & 0xFFFF),
            i0 = (E >> 16) + (e0 >> 16) + (f0 >> 16);
            return (i0 << 16) | (f0 & 0xFFFF);
        }
        function T0(E, e0) {
            return (E << e0) | (E >>> (32 - e0));
        }
        function h1(E, e0, f0, i0, k0, n0) {
            return H0(T0(H0(H0(e0, E), H0(i0, n0)), k0), f0);
        }
        function N0(E, e0, f0, i0, k0, n0, l0) {
            return h1((e0 & f0) | ((~e0) & i0), E, e0, k0, n0, l0);
        }
        function k1(E, e0, f0, i0, k0, n0, l0) {
            return h1((e0 & i0) | (f0 & (~i0)), E, e0, k0, n0, l0);
        }
        function e1(E, e0, f0, i0, k0, n0, l0) {
            return h1(e0 ^ f0 ^ i0, E, e0, k0, n0, l0);
        }
        function S0(E, e0, f0, i0, k0, n0, l0) {
            return h1(f0 ^ (e0 | (~i0)), E, e0, k0, n0, l0);
        }
        function f1(E, e0) {
            E[e0 >> 5] |= 0x80 << (e0 % 32);
            E[(((e0 + 64) >>> 9) << 4) + 14] = e0;
            var f0, i0, k0, n0, l0, o0 = 1732584193,
            u0 = -271733879,
            w0 = -1732584194,
            B0 = 271733878;
            for (f0 = 0; f0 < E.length; f0 += 16) {
                i0 = o0;
                k0 = u0;
                n0 = w0;
                l0 = B0;
                o0 = N0(o0, u0, w0, B0, E[f0], 7, -680876936);
                B0 = N0(B0, o0, u0, w0, E[f0 + 1], 12, -389564586);
                w0 = N0(w0, B0, o0, u0, E[f0 + 2], 17, 606105819);
                u0 = N0(u0, w0, B0, o0, E[f0 + 3], 22, -1044525330);
                o0 = N0(o0, u0, w0, B0, E[f0 + 4], 7, -176418897);
                B0 = N0(B0, o0, u0, w0, E[f0 + 5], 12, 1200080426);
                w0 = N0(w0, B0, o0, u0, E[f0 + 6], 17, -1473231341);
                u0 = N0(u0, w0, B0, o0, E[f0 + 7], 22, -45705983);
                o0 = N0(o0, u0, w0, B0, E[f0 + 8], 7, 1770035416);
                B0 = N0(B0, o0, u0, w0, E[f0 + 9], 12, -1958414417);
                w0 = N0(w0, B0, o0, u0, E[f0 + 10], 17, -42063);
                u0 = N0(u0, w0, B0, o0, E[f0 + 11], 22, -1990404162);
                o0 = N0(o0, u0, w0, B0, E[f0 + 12], 7, 1804603682);
                B0 = N0(B0, o0, u0, w0, E[f0 + 13], 12, -40341101);
                w0 = N0(w0, B0, o0, u0, E[f0 + 14], 17, -1502002290);
                u0 = N0(u0, w0, B0, o0, E[f0 + 15], 22, 1236535329);
                o0 = k1(o0, u0, w0, B0, E[f0 + 1], 5, -165796510);
                B0 = k1(B0, o0, u0, w0, E[f0 + 6], 9, -1069501632);
                w0 = k1(w0, B0, o0, u0, E[f0 + 11], 14, 643717713);
                u0 = k1(u0, w0, B0, o0, E[f0], 20, -373897302);
                o0 = k1(o0, u0, w0, B0, E[f0 + 5], 5, -701558691);
                B0 = k1(B0, o0, u0, w0, E[f0 + 10], 9, 38016083);
                w0 = k1(w0, B0, o0, u0, E[f0 + 15], 14, -660478335);
                u0 = k1(u0, w0, B0, o0, E[f0 + 4], 20, -405537848);
                o0 = k1(o0, u0, w0, B0, E[f0 + 9], 5, 568446438);
                B0 = k1(B0, o0, u0, w0, E[f0 + 14], 9, -1019803690);
                w0 = k1(w0, B0, o0, u0, E[f0 + 3], 14, -187363961);
                u0 = k1(u0, w0, B0, o0, E[f0 + 8], 20, 1163531501);
                o0 = k1(o0, u0, w0, B0, E[f0 + 13], 5, -1444681467);
                B0 = k1(B0, o0, u0, w0, E[f0 + 2], 9, -51403784);
                w0 = k1(w0, B0, o0, u0, E[f0 + 7], 14, 1735328473);
                u0 = k1(u0, w0, B0, o0, E[f0 + 12], 20, -1926607734);
                o0 = e1(o0, u0, w0, B0, E[f0 + 5], 4, -378558);
                B0 = e1(B0, o0, u0, w0, E[f0 + 8], 11, -2022574463);
                w0 = e1(w0, B0, o0, u0, E[f0 + 11], 16, 1839030562);
                u0 = e1(u0, w0, B0, o0, E[f0 + 14], 23, -35309556);
                o0 = e1(o0, u0, w0, B0, E[f0 + 1], 4, -1530992060);
                B0 = e1(B0, o0, u0, w0, E[f0 + 4], 11, 1272893353);
                w0 = e1(w0, B0, o0, u0, E[f0 + 7], 16, -155497632);
                u0 = e1(u0, w0, B0, o0, E[f0 + 10], 23, -1094730640);
                o0 = e1(o0, u0, w0, B0, E[f0 + 13], 4, 681279174);
                B0 = e1(B0, o0, u0, w0, E[f0], 11, -358537222);
                w0 = e1(w0, B0, o0, u0, E[f0 + 3], 16, -722521979);
                u0 = e1(u0, w0, B0, o0, E[f0 + 6], 23, 76029189);
                o0 = e1(o0, u0, w0, B0, E[f0 + 9], 4, -640364487);
                B0 = e1(B0, o0, u0, w0, E[f0 + 12], 11, -421815835);
                w0 = e1(w0, B0, o0, u0, E[f0 + 15], 16, 530742520);
                u0 = e1(u0, w0, B0, o0, E[f0 + 2], 23, -995338651);
                o0 = S0(o0, u0, w0, B0, E[f0], 6, -198630844);
                B0 = S0(B0, o0, u0, w0, E[f0 + 7], 10, 1126891415);
                w0 = S0(w0, B0, o0, u0, E[f0 + 14], 15, -1416354905);
                u0 = S0(u0, w0, B0, o0, E[f0 + 5], 21, -57434055);
                o0 = S0(o0, u0, w0, B0, E[f0 + 12], 6, 1700485571);
                B0 = S0(B0, o0, u0, w0, E[f0 + 3], 10, -1894986606);
                w0 = S0(w0, B0, o0, u0, E[f0 + 10], 15, -1051523);
                u0 = S0(u0, w0, B0, o0, E[f0 + 1], 21, -2054922799);
                o0 = S0(o0, u0, w0, B0, E[f0 + 8], 6, 1873313359);
                B0 = S0(B0, o0, u0, w0, E[f0 + 15], 10, -30611744);
                w0 = S0(w0, B0, o0, u0, E[f0 + 6], 15, -1560198380);
                u0 = S0(u0, w0, B0, o0, E[f0 + 13], 21, 1309151649);
                o0 = S0(o0, u0, w0, B0, E[f0 + 4], 6, -145523070);
                B0 = S0(B0, o0, u0, w0, E[f0 + 11], 10, -1120210379);
                w0 = S0(w0, B0, o0, u0, E[f0 + 2], 15, 718787259);
                u0 = S0(u0, w0, B0, o0, E[f0 + 9], 21, -343485551);
                o0 = H0(o0, i0);
                u0 = H0(u0, k0);
                w0 = H0(w0, n0);
                B0 = H0(B0, l0);
            }
            return [o0, u0, w0, B0];
        }
        function o1(E) {
            var e0, f0 = '';
            for (e0 = 0; e0 < E.length * 32; e0 += 8) {
                f0 += String.fromCharCode((E[e0 >> 5] >>> (e0 % 32)) & 0xFF);
            }
            return f0;
        }
        function p1(E) {
            var e0, f0 = [];
            f0[(E.length >> 2) - 1] = undefined;
            for (e0 = 0; e0 < f0.length; e0 += 1) {
                f0[e0] = 0;
            }
            for (e0 = 0; e0 < E.length * 8; e0 += 8) {
                f0[e0 >> 5] |= (E.charCodeAt(e0 / 8) & 0xFF) << (e0 % 32);
            }
            return f0;
        }
        function f2(E) {
            return o1(f1(p1(E), E.length * 8));
        }
        function J1(E, e0) {
            var f0, i0 = p1(E),
            k0 = [],
            n0 = [],
            l0;
            k0[15] = n0[15] = undefined;
            if (i0.length > 16) {
                i0 = f1(i0, E.length * 8);
            }
            for (f0 = 0; f0 < 16; f0 += 1) {
                k0[f0] = i0[f0] ^ 0x36363636;
                n0[f0] = i0[f0] ^ 0x5C5C5C5C;
            }
            l0 = f1(k0.concat(p1(e0)), 512 + e0.length * 8);
            return o1(f1(n0.concat(l0), 512 + 128));
        }
        function h2(E) {
            var e0 = '0123456789abcdef',
            f0 = '',
            i0, k0;
            for (k0 = 0; k0 < E.length; k0 += 1) {
                i0 = E.charCodeAt(k0);
                f0 += e0.charAt((i0 >>> 4) & 0x0F) + e0.charAt(i0 & 0x0F);
            }
            return f0;
        }
        function R1(E) {
            return unescape(encodeURIComponent(E));
        }
        function P2(E) {
            return f2(R1(E));
        }
        function b1(E) {
            return h2(P2(E));
        }
        return b1(X0);
    },
    submitScore: function(e0) {
        var f0;
        window.addEventListener('message',
        function(E) {
            if (/api.zygomatic.nl/.test(E.origin)) {
                window.scrollTo(0, 0);
            }
        });
        if (/(leukstespellen\.nl|gamesonly\.net)/.test(this.apiDomain)) {
            f0 = this.md5('www.' + this.apiDomain + this.gameName + e0 + 'zygomaticgames');
            window.open(this.apiUrl + '?game=' + this.gameName + '&score=' + escape(e0) + '&otherparam=' + escape(f0), U0a.p2);
        } else {
            f0 = this.md5(atob(this.salt1) + this.gameName + this.lang + e0 + atob(this.salt2));
            GameLib.showPopup(U0a.A2, this.apiUrl + '/submitScore.php?game=' + escape(this.gameName) + '&lang=' + escape(this.lang) + '&score=' + escape(e0) + '&hash=' + escape(f0), 480, 340, false);
        }
    },
    leaderBoard: function() {
        if (/(leukstespellen\.nl|gamesonly\.net)/.test(this.apiDomain)) {
            window.open(this.apiUrl + '?game=' + this.gameName, U0a.p2);
        } else {
            GameLib.showPopup(U0a.A2, this.apiUrl + '/leaderBoard.php?game=' + escape(this.gameName) + '&lang=' + escape(this.lang), 480, 340, false);
        }
    }
};
document.addEventListener('gameready',
function(E) {
    GameHiscore.init(E.gameName);
},
false);;
var GameAds = {
    adsManager: U0a.A2,
    adsLoader: U0a.A2,
    adDisplayContainer: U0a.A2,
    intervalTimer: U0a.A2,
    resizeTimer: U0a.A2,
    gameDiv: U0a.A2,
    adDiv: U0a.A2,
    doneFn: U0a.A2,
    throbber: U0a.A2,
    init: function() {
        if (!GameLib.online || !ThirdParty.config.ads || !ThirdParty.config.ads.adsense || !ThirdParty.config.ads.adsense.url) {
            return false;
        }
        this.gameDiv = document.getElementById(U0a.z0);
        this.adDiv = document.getElementById('adContainer');
        var E = document.createElement('script'),
        e0 = document.getElementsByTagName('script')[0];
        E.src = 'http://imasdk.googleapis.com/js/sdkloader/ima3.js';
        e0.parentNode.insertBefore(E, e0);
        return U0a.B2;
    },
    showAd: function() {
        var e0 = 'lastAdTimestamp',
        f0, i0 = Math.round(1 * new Date() / U0a.O2),
        k0 = GameLib.getHostDomain();
        if (!GameLib.online || !ThirdParty.config.ads || !ThirdParty.config.ads.adsense || !ThirdParty.config.ads.adsense.url) {
            return false;
        };
        console.log('Host domain: ' + k0);
        try {
            f0 = (',' + window.zygomatic.settings.skipGoogleAdDomains.join(',') + ',').indexOf(k0) === -1;
        } catch(E) {
            f0 = false;
        };
        if (f0) {
            var n0 = GameLib.getStorage(e0),
            l0 = ThirdParty.config.ads.interval ? ThirdParty.config.ads.interval: 3600;
            if (n0 !== false) {
                if (i0 - n0 < l0) {
                    return false;
                }
            }
            GameLib.setStorage(e0, i0);
        }
        return f0;
    },
    showLoading: function(E) {
        if (E) {
            this.throbber = document.createElement(U0a.g1);
            this.throbber.id = 'throbber';
            this.throbber.innerHTML = '<span class="throbber">Loading...</span>';
            this.adDiv.appendChild(this.throbber);
            this.adDiv.style.visibility = U0a.z2;
        } else {
            this.throbber.parentNode.removeChild(this.throbber);
        }
    },
    requestAd: function(e0) {
        var f0 = this;
        if (typeof e0 == 'function') {
            f0.doneFn = e0;
        }
        function i0() {
            var E = f0.gameDiv.getBoundingClientRect();
            f0.adDiv.style.top = E.top + 'px';
            f0.adDiv.style.left = E.left + 'px';
            f0.adDiv.style.width = E.width + 'px';
            f0.adDiv.style.height = (E.height + 1) + 'px';
        }
        if (typeof google == U0a.L0) {
            this.adDiv.style.visibility = U0a.z2;
            this.adDiv.innerHTML = '<a href="http://www.htmlgames.com/" target="_blank"><img src="http://cdn.htmlgames.com/banner/adblock.png" style="width:100%;height:100%"></a><div id="timeLeft"></div>';
            window.addEventListener(U0a.H1, i0, false);
            i0();
            var k0 = document.getElementById('timeLeft'),
            n0 = document.createElement(U0a.g1),
            l0 = 30,
            o0 = 30;
            k0.appendChild(n0);
            GameAds.intervalTimer = setInterval(function() {
                o0--;
                n0.style.width = 100 - Math.round(o0 / l0 * 100) + '%';
                if (o0 == -1) {
                    window.removeEventListener('resize', i0, false);
                    GameAds.adDone('timeout');
                }
            },
            1000);
            return;
        }
        this.resize();
        f0.showLoading(U0a.B2);
        f0.createAdDisplayContainer();
        f0.adDisplayContainer.initialize();
        f0.adsLoader = new google.ima.AdsLoader(f0.adDisplayContainer);
        f0.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, f0.onAdsManagerLoaded, false);
        f0.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, f0.onAdError, false);
        var u0 = new google.ima.AdsRequest(),
        w0 = location.protocol + location.port + '//' + location.hostname + location.pathname.substr(0, location.pathname.lastIndexOf('/')) + '/about.html';
        u0.adTagUrl = ThirdParty.config.ads.adsense.url.replace('[description_url]', encodeURIComponent(w0));
        if (/games\.(avoid\.org|webgear\.nl)/.test(location.hostname)) {
            u0.adTagUrl += '&adtest=on';
        }
        u0.linearAdSlotWidth = GameLib.gameWidth;
        u0.linearAdSlotHeight = GameLib.gameHeight;
        u0.nonLinearAdSlotWidth = Math.round(GameLib.gameWidth * GameLib.scale);
        u0.nonLinearAdSlotHeight = Math.round((GameLib.gameHeight - 50) * GameLib.scale);
        f0.adsLoader.requestAds(u0);
    },
    createAdDisplayContainer: function() {
        this.adDisplayContainer = new google.ima.AdDisplayContainer(GameAds.adDiv);
    },
    onAdsManagerLoaded: function(e0) {
        var f0 = new google.ima.AdsRenderingSettings();
        f0.loadVideoTimeout = 5000;
        GameAds.adsManager = e0.getAdsManager(GameAds.gameDiv, f0);
        GameAds.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, GameAds.onAdError);
        GameAds.adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, GameAds.onAdEvent);
        GameAds.adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, GameAds.onAdEvent);
        GameAds.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, GameAds.onAdEvent);
        GameAds.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, GameAds.onAdEvent);
        GameAds.adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, GameAds.onAdEvent);
        GameAds.adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, GameAds.onAdEvent);
        GameAds.adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, GameAds.onAdEvent);
        try {
            GameAds.adsManager.init(GameLib.gameWidth, GameLib.gameHeight, google.ima.ViewMode.NORMAL);
            GameAds.adsManager.start();
        } catch(E) {}
    },
    resize: function(E, e0) {
        var f0 = this.gameDiv.getBoundingClientRect(),
        i0;
        for (i0 in {
            left: 0,
            top: 0,
            width: 0,
            height: 0
        }) {
            this.adDiv.style[i0] = Math.round(f0[i0]) + 'px';
        }
        if (arguments.length == 2) {
            if (f0.width < E || f0.height < e0) {
                this.adDone('error');
            } else {
                GameAds.adsManager.resize(Math.ceil(f0.width), Math.ceil(f0.height), google.ima.ViewMode.FULLSCREEN);
            }
        }
    },
    resizeHandler: function() {
        clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(function() {
            GameAds.resize(0, 0);
        },
        50);
    },
    onAdEvent: function(E) {
        var e0 = E.getAd(),
        f0 = e0.isLinear();
        switch (E.type) {
        case google.ima.AdEvent.Type.LOADED:
            var i0 = e0.getWidth(),
            k0 = e0.getHeight(),
            n0;
            GameAds.showLoading(false);
            GameAds.resize(i0, k0);
            GameAds.adDiv.querySelectorAll('iframe')[0].style.visibility = U0a.z2;
            window.addEventListener(U0a.H1, GameAds.resizeHandler, false);
            break;
        case google.ima.AdEvent.Type.STARTED:
            var l0 = document.getElementById('timeLeft'),
            o0 = document.createElement(U0a.g1);
            l0.appendChild(o0);
            if (f0) {
                var u0 = e0.getDuration();
                GameAds.intervalTimer = setInterval(function() {
                    o0.style.width = 100 - Math.round(GameAds.adsManager.getRemainingTime() / u0 * 100) + '%';
                },
                U0a.u1);
            } else {
                var w0 = 15,
                u0 = 15;
                GameAds.adDiv.onclick = function() {
                    GameAds.adDone('complete');
                };
                GameAds.intervalTimer = setInterval(function() {
                    u0--;
                    o0.style.width = 100 - Math.round(u0 / w0 * 100) + '%';
                    if (u0 == -1) {
                        GameAds.adDone('timeout');
                    }
                },
                1000);
            }
            break;
        case google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED:
            break;
        case google.ima.AdEvent.Type.COMPLETE:
        case google.ima.AdEvent.Type.USER_CLOSE:
            GameAds.adDone('complete');
            break;
        case google.ima.AdEvent.Type.SKIPPED:
            GameAds.adDone('skipped');
            break;
        }
    },
    adDone: function(e0, f0) {
        if (typeof f0 == U0a.L0) {
            f0 = U0a.B2;
        }
        var i0 = this;
        window.removeEventListener(U0a.H1, i0.resizeHandler, false);
        if (i0.intervalTimer) {
            clearInterval(i0.intervalTimer);
        }
        i0.adDiv.innerHTML = '<div id="timeLeft"></div>';
        i0.adDiv.style.visibility = U0a.Z0;
        try {
            GameAds.adsManager.destroy();
        } catch(E) {};
        if (f0 && i0.doneFn) {
            i0.doneFn(e0);
        }
    },
    onAdError: function(e0) {
        console.log(e0.getError());
        GameAds.adDone('error');
        try {
            GameAds.adsManager.destroy();
        } catch(E) {};
    }
};
document.addEventListener('gameready',
function(E) {
    GameAds.init();
},
false);; (function(E, e0, f0, i0, k0, n0, l0) {
    E['GoogleAnalyticsObject'] = k0;
    E[k0] = E[k0] ||
    function() { (E[k0].q = E[k0].q || []).push(arguments);
    },
    E[k0].l = 1 * new Date();
    n0 = e0.createElement(f0),
    l0 = e0.getElementsByTagName(f0)[0];
    n0.async = 1;
    n0.src = i0;
    l0.parentNode.insertBefore(n0, l0);
})(window, document, 'script', '//www.google-analytics.com/analytics.js', '__gaTracker');
if (ThirdParty.config.gaUA && GameLib.online) {
    __gaTracker('create', ThirdParty.config.gaUA, 'auto');
    __gaTracker('send', 'pageview');
}
var GameAnalytics = {
    hit: function(E, e0) {
        if (!ThirdParty.config.gaUA || !GameLib.online) return;
        if (undefined === e0) {
            __gaTracker('send', 'event', 'game', E);
        } else {
            __gaTracker('send', 'event', 'game', E, e0);
        }
    }
};;