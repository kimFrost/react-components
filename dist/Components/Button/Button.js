var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import styles from './Button.scss';
var Button = function (_a) {
    var onClick = _a.onClick, children = _a.children, disabled = _a.disabled, outline = _a.outline, type = _a.type;
    var buttonProps = {};
    if (type) {
        buttonProps['type'] = type;
    }
    return (
    // <StyledButton outline={outline} onClick={onClick} disabled={disabled}>
    //     {children}
    // </StyledButton>
    React.createElement("button", __assign({}, buttonProps, { className: styles.btn + (outline ? " " + styles.btnOutline : ""), onClick: onClick, disabled: disabled }), children));
};
Button.defaultProps = {
    onClick: function () { return void (0); },
    disabled: false,
    outline: false
};
export default Button;
//# sourceMappingURL=Button.js.map