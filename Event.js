'use strict';
exports.__esModule = true;
var core_1 = require("@angular/core");
var EventSyncEmitter_1 = require("./EventSyncEmitter");
var Event = (function () {
    function Event() {
    }
    Event.createEmitter = function (id, isSync) {
        if (isSync === void 0) { isSync = true; }
        if (isSync != true && (typeof (Event.emitters[id]) == "undefined" || Event.emitters[id] == null)) {
            Event.emitters[id] = new core_1.EventEmitter();
        }
        else if (isSync == true && (typeof (Event.emittersSync[id]) == "undefined" || Event.emittersSync[id] == null)) {
            Event.emittersSync[id] = new EventSyncEmitter_1.EventSyncEmitter();
        }
    };
    Event.getEmitter = function (id, isSync) {
        if (isSync === void 0) { isSync = true; }
        Event.createEmitter(id, isSync);
        if (isSync != true)
            return Event.emitters[id];
        else
            return Event.emittersSync[id];
    };
    Event.removeEmitter = function (id, isSync) {
        if (isSync === void 0) { isSync = true; }
        if (isSync != true)
            delete Event.emitters[id];
        else
            delete Event.emittersSync[id];
    };
    Event.emit = function (id, msg, isSync) {
        if (isSync === void 0) { isSync = true; }
        return Event.getEmitter(id, isSync).emit(msg);
    };
    Event.subscribe = function (id, callback, isSync) {
        if (isSync === void 0) { isSync = true; }
        var emitter = Event.getEmitter(id, isSync);
        return emitter.subscribe(function (param0, param1) {
            if (emitter instanceof core_1.EventEmitter)
                callback(undefined, param0);
            else
                callback(param0, param1);
        });
    };
    Event.subscribeOnce = function (id, callback, isSync) {
        if (isSync === void 0) { isSync = true; }
        var emitter = Event.getEmitter(id, isSync), obj = emitter.subscribe(function (param0, param1) {
            obj.unsubscribe();
            if (emitter instanceof core_1.EventEmitter)
                callback(undefined, param0);
            else
                callback(param0, param1);
        });
        return obj;
    };
    return Event;
}());
Event.emitters = window['eventQueue'] ? window['eventQueue'] : (window['eventQueue '] = {});
Event.emittersSync = window['eventSyncQueue'] ? window['eventSyncQueue'] : (window['eventSyncQueue '] = {});
exports.Event = Event;
//# sourceMappingURL=Event.js.map