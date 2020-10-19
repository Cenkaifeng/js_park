! function () {
    "use strict";
    var p = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        l = window;
    l._htmllog = function (e, t) {
        var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        if (l.XMLHttpRequest) {
            var n = "unknow",
                o = (document.cookie || "").split("; ").reduce(function (e, t) {
                    var r = t.split("=");
                    return e[r[0]] = r[1], e
                }, {}),
                i = l.navigator;
            i && i.connection && (n = i.connection.effectiveType || i.connection.type || "unknown");
            var a = /(w+).html/.exec(document.referrer),
                c = p({
                    log_version: "1.0.0",
                    error_msg: e,
                    page: t,
                    page_url: location.href,
                    refer_page_name: a && a[1],
                    network: {
                        unknow: 0,
                        wifi: 1,
                        "2g": 2,
                        "3g": 3,
                        "4g": 4
                    } [n] || 0,
                    user_id: o.pdd_user_id || "",
                    time: +new Date
                }, r),
                s = new XMLHttpRequest;
            s.open("POST", "https://tne.yangkeduo.com/tne.gif", !0), s.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"), s.withCredentials = !0, s.send(JSON.stringify(c))
        }
    }, l._peh = function (e, t, r, n, o) {
        if (l.XMLHttpRequest && (!e || e.target !== l)) {
            var i = e + ", " + t + ", " + r + ", " + n + ", " + o,
                a = "html_error";
            if (o && o.stack) a += "_js", i = e + ";" + o.stack.replace(/\n/gi, "").split(/at/).slice(0, 5).join("@");
            else if ("[object Event]" === Object.prototype.toString.call(e)) {
                var c = e.srcElement;
                i = c ? (a += "_" + String.prototype.toLowerCase.call(c.nodeName), "Error: " + c.outerHTML) : "Error: " + JSON.stringify(e)
            }
            l._htmllog(a, i)
        }
    }, l._peh._raw = !0, l.addEventListener("error", _peh, !0), l.onerror = _peh, l.addEventListener("load", function () {
        l.removeEventListener("error", l._peh, !0)
    })
}();