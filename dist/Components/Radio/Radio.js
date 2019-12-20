import React, { useRef, useEffect } from 'react';
import styles from './Radio.scss';
var Radio = function (_a) {
    var disabled = _a.disabled, checked = _a.checked, invalid = _a.invalid, invalidText = _a.invalidText;
    var ref = useRef(null);
    useEffect(function () {
        if (ref.current) {
            if (invalid) {
                ref.current.setCustomValidity('Invalid');
            }
            else {
                ref.current.setCustomValidity('');
            }
        }
    }, [invalid]);
    return (React.createElement("div", { className: styles.radio },
        React.createElement("div", { className: styles.radioUiContainer },
            React.createElement("input", { type: "radio", ref: ref, className: styles.radioInput, disabled: disabled, checked: checked }),
            React.createElement("div", { className: styles.radioUi })),
        invalid && invalidText &&
            React.createElement("span", null, invalidText)));
};
Radio.defaultProps = {};
export default Radio;
//# sourceMappingURL=Radio.js.map