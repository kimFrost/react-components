import React, { useRef, useEffect } from 'react';
import './Checkbox.scss';
var Checkbox = function (_a) {
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
    return (React.createElement("div", { className: "checkbox" },
        React.createElement("div", { className: "checkbox__ui-container" },
            React.createElement("input", { type: "checkbox", ref: ref, className: "checkbox__input", disabled: disabled, checked: checked }),
            React.createElement("div", { className: "checkbox__ui" })),
        invalid && invalidText &&
            React.createElement("span", null, invalidText)));
};
Checkbox.defaultProps = {};
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map