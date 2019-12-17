import React from 'react';
import styles from './Button.scss';
var Button = function (_a) {
    var onClick = _a.onClick, children = _a.children, disabled = _a.disabled, outline = _a.outline;
    return (React.createElement("button", { className: styles.btn + (outline ? " " + styles.btnOutline : ""), onClick: onClick, disabled: disabled }, children));
};
Button.defaultProps = {
    onClick: function () { return void (0); },
    disabled: false,
    outline: false
};
export default Button;
//# sourceMappingURL=Button.js.map