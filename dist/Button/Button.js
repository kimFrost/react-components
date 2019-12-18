import React from 'react';
import { Button as StyledButton } from './Button.styles';
var Button = function (_a) {
    var onClick = _a.onClick, children = _a.children, disabled = _a.disabled, outline = _a.outline;
    return (React.createElement("div", null,
        React.createElement(StyledButton, { outline: outline, onClick: onClick, disabled: disabled }, children))
    // <button className={styles.btn + (outline ? ` ${styles.btnOutline}`: "")} onClick={onClick} disabled={disabled}>{children}</button>
    );
};
Button.defaultProps = {
    onClick: function () { return void (0); },
    disabled: false,
    outline: false
};
export default Button;
//# sourceMappingURL=Button.js.map