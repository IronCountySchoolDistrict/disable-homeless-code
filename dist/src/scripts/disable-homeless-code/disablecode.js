define(["exports", "jquery"], function (exports, _jquery) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    exports.default = function () {
        (0, _jquery2.default)(function () {
            (0, _jquery2.default)("[name$=homeless_code]").attr({ "disabled": "disabled" });
        });
    };

    var _jquery2 = _interopRequireDefault(_jquery);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
});