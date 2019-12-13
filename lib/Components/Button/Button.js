"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Button_scss_1 = __importDefault(require("./Button.scss"));
var Button = function (_a) {
    var onClick = _a.onClick, children = _a.children, disabled = _a.disabled;
    return (react_1.default.createElement("button", { className: Button_scss_1.default.Button, onClick: onClick, disabled: disabled }, children));
};
Button.defaultProps = {
    onClick: function () { return void (0); },
    disabled: false,
    outline: false
};
exports.default = Button;
/*
        <button className={"btn" + (outline ? " btn--outline" : "")} onClick={onClick} disabled={disabled}>{children}</button>
*/ 
//# sourceMappingURL=Button.js.map