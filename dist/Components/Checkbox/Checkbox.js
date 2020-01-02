import React, { useRef, useEffect } from 'react';
import styles from './Checkbox.scss';
var Checkbox = function (_a) {
    var disabled = _a.disabled, checked = _a.checked, invalid = _a.invalid, invalidText = _a.invalidText, checkedComponent = _a.checkedComponent;
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
    return (React.createElement("div", { className: styles.checkbox },
        React.createElement("div", { className: styles.checkboxUiContainer },
            React.createElement("input", { type: "checkbox", ref: ref, className: styles.checkboxInput, disabled: disabled, checked: checked }),
            React.createElement("div", { className: styles.checkboxUi }, checkedComponent ?
                { checkedComponent: checkedComponent }
                :
                    React.createElement("span", null, "\u2713"))),
        invalid && invalidText &&
            React.createElement("span", null, invalidText)));
};
Checkbox.defaultProps = {};
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map