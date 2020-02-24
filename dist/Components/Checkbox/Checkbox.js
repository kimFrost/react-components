import React, { useRef, useEffect } from 'react';
import styles from './Checkbox.scss';
/*
<FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />}
        label="Custom icon"
      />
*/
var Checkbox = function (_a) {
    var id = _a.id, disabled = _a.disabled, checked = _a.checked, invalid = _a.invalid, invalidText = _a.invalidText, icon = _a.icon, checkedIcon = _a.checkedIcon, onChange = _a.onChange;
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
            React.createElement("input", { type: "checkbox", ref: ref, className: styles.checkboxInput, id: id, disabled: disabled, defaultChecked: checked, onChange: onChange }),
            React.createElement("div", { className: styles.checkboxUi }, checkedIcon ?
                React.cloneElement(checkedIcon)
                :
                    icon &&
                        React.cloneElement(icon))),
        invalid && invalidText &&
            React.createElement("span", { className: styles.checkboxErrorText }, invalidText)));
};
Checkbox.defaultProps = {
    checkedIcon: React.createElement("span", null, "\u2713")
};
/*
const CheckboxLabels: React.FC = () => {

    return (
        
    )
}
*/
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map