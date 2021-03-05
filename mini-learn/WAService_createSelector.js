(function() {
    function n(e) {
        if (be(this, n),
        e && e.page)
            this._component = this._defaultComponent = e.page,
            this._webviewId = this._defaultComponent.__wxWebviewId__;
        else {
            var t = Dsa.getCurrentPagesByDomain("");
            this._defaultComponent = t[t.length - 1],
            this._component = null,
            this._webviewId = null
        }
        this._queue = [],
        this._queueCb = []
    }
    return ot(n, [{
        key: "in",
        value: function(e) {
            return null === this._webviewId ? (this._webviewId = e.__wxWebviewId__,
            this._component = e) : this._webviewId !== e.__wxWebviewId__ ? console.error("A single SelectorQuery could not work in components in different pages. A SelectorQuery#in call has been ignored.") : this._component = e,
            this
        }
    }, {
        key: "select",
        value: function(e) {
            return new Pl(this,this._component,e,!0)
        }
    }, {
        key: "selectAll",
        value: function(e) {
            return new Pl(this,this._component,e,!1)
        }
    }, {
        key: "selectViewport",
        value: function() {
            return new Pl(this,0,"",!0)
        }
    }, {
        key: "_push",
        value: function(e, t, n, r, o) {
            null === this._webviewId && (this._webviewId = this._defaultComponent ? this._defaultComponent.__wxWebviewId__ : void 0);
            var a = i ? "" : Csa.getRootNodeId(this._webviewId);
            this._queue.push({
                component: null != t ? 0 === t ? 0 : t.__wxExparserNodeId__ : a,
                selector: e,
                single: n,
                fields: r
            }),
            this._queueCb.push(o || null)
        }
    }, {
        key: "exec",
        value: function(t) {
            var e, n, r, o, a = this;
            e = this._webviewId,
            n = {
                pluginId: i,
                queue: this._queue
            },
            r = function(e) {
                var n = a._queueCb;
                e.forEach(function(e, t) {
                    !function t(e, n) {
                        if (e)
                            if (Array.isArray(e))
                                e.forEach(function(e) {
                                    return t(e, n)
                                });
                            else {
                                var r = e.contextTagName
                                  , o = e.contextId
                                  , a = e.contextCanvasId;
                                r && ("wx-video" === r && (e.context = Ki(o, Ze.currentWebviewId)),
                                "wx-live-player" === r && (e.context = Ca(o, Ze.currentWebviewId)),
                                "wx-canvas" === r && a && (e.context = nr(a, n)),
                                delete e.contextTagName,
                                delete e.contextId,
                                delete e.contextCanvasId)
                            }
                    }(e, a._component),
                    "function" == typeof n[t] && Reporter.surroundThirdByTryCatch(function() {
                        n[t].call(a, e)
                    }, "at SelectorQuery callback function")()
                }),
                "function" == typeof t && Reporter.surroundThirdByTryCatch(function() {
                    t.call(a, e)
                }, "at SelectorQuery callback function")()
            }
            ,
            o = xl++,
            null != e ? (Al[o] = r,
            le("requestComponentInfo", {
                reqId: o,
                reqs: n
            }, [e])) : console.warn("An SelectorQuery call is ignored because no proper page or component is found. Please considering using `SelectorQuery.in` to specify a proper one.")
        }
    }]),
    n
})();

var Pl = function() {
    function o(e, t, n, r) {
        be(this, o),
        this._selectorQuery = e,
        this._component = t,
        this._selector = n,
        this._single = r
    }
    return ot(o, [{
        key: "fields",
        value: function(e, t) {
            return this._selectorQuery._push(this._selector, this._component, this._single, e, t),
            this._selectorQuery
        }
    }, {
        key: "boundingClientRect",
        value: function(e) {
            return this._selectorQuery._push(this._selector, this._component, this._single, {
                id: !0,
                dataset: !0,
                rect: !0,
                size: !0
            }, e),
            this._selectorQuery
        }
    }, {
        key: "scrollOffset",
        value: function(e) {
            return this._selectorQuery._push(this._selector, this._component, this._single, {
                id: !0,
                dataset: !0,
                scrollOffset: !0
            }, e),
            this._selectorQuery
        }
    }, {
        key: "context",
        value: function(e) {
            return this._selectorQuery._push(this._selector, this._component, this._single, {
                context: !0
            }, e),
            this._selectorQuery
        }
    }]),
    o
}()

(function(e, t, n) {
    var r, o, a, i = n(16), s = n(86), c = n(59), u = n(53), l = n(3), f = l.process, d = l.setImmediate, p = l.clearImmediate, h = l.MessageChannel, g = l.Dispatch, v = 0, _ = {}, y = "onreadystatechange", m = function() {
        var e = +this;
        if (_.hasOwnProperty(e)) {
            var t = _[e];
            delete _[e],
            t()
        }
    }, b = function(e) {
        m.call(e.data)
    };
    d && p || (d = function(e) {
        for (var t = [], n = 1; arguments.length > n; )
            t.push(arguments[n++]);
        return _[++v] = function() {
            s("function" == typeof e ? e : Function(e), t)
        }
        ,
        r(v),
        v
    }
    ,
    p = function(e) {
        delete _[e]
    }
    ,
    "process" == n(20)(f) ? r = function(e) {
        f.nextTick(i(m, e, 1))
    }
    : g && g.now ? r = function(e) {
        g.now(i(m, e, 1))
    }
    : h ? (a = (o = new h).port2,
    o.port1.onmessage = b,
    r = i(a.postMessage, a, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(e) {
        l.postMessage(e + "", "*")
    }
    ,
    l.addEventListener("message", b, !1)) : r = y in u("script") ? function(e) {
        c.appendChild(u("script"))[y] = function() {
            c.removeChild(this),
            m.call(e)
        }
    }
    : function(e) {
        setTimeout(i(m, e, 1), 0)
    }
    ),
    e.exports = {
        set: d,
        clear: p
    }
})()