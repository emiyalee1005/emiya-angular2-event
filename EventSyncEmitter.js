'use strict';
exports.__esModule = true;
var EventSyncEmitter = (function () {
    function EventSyncEmitter() {
        this._listener = [];
    }
    EventSyncEmitter.prototype.emit = function (msg) {
        var _event = {
            defaultPrevented: false,
            propagationPrevented: false,
            preventDefault: function () {
                _event.defaultPrevented = true;
            },
            stopPropagation: function () {
                _event.propagationPrevented = true;
            }
        };
        for (var c in this._listener) {
            this._listener[c](_event, msg);
            if (_event.propagationPrevented != false)
                break;
        }
        return _event;
    };
    EventSyncEmitter.prototype.subscribe = function (callback) {
        var _this = this;
        if (this._listener.indexOf(callback) < 0) {
            this._listener.push(callback);
        }
        return {
            unsubscribe: function () {
                _this._listener.splice(_this._listener.indexOf(callback), 1);
            }
        };
    };
    return EventSyncEmitter;
}());
exports.EventSyncEmitter = EventSyncEmitter;
//# sourceMappingURL=EventSyncEmitter.js.map