import React, { useRef, useEffect, useContext } from 'react';
import styles from './Radio.scss';
import RadioGroupContext from '../RadioGroup/RadioGroupContext';
var Radio = function (_a) {
    var disabled = _a.disabled, checked = _a.checked, invalid = _a.invalid, invalidText = _a.invalidText, value = _a.value, name = _a.name, id = _a.id, onClick = _a.onClick;
    var ref = useRef(null);
    var radioGroup = useContext(RadioGroupContext);
    if (radioGroup) {
        name = radioGroup.name || name;
        //checked = value === radioGroup.value || checked;
    }
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
            React.createElement("input", { type: "radio", ref: ref, id: id, value: value, name: name, className: styles.radioInput, disabled: disabled, defaultChecked: checked, onClick: onClick }),
            React.createElement("div", { className: styles.radioUi })),
        invalid && invalidText &&
            React.createElement("span", { className: styles.radioErrorText }, invalidText)));
};
Radio.defaultProps = {};
export default Radio;
//# sourceMappingURL=Radio.js.map