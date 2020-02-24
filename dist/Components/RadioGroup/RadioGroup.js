import React from 'react';
import styles from './RadioGroup.scss';
import RadioGroupContext from './RadioGroupContext';
var RadioGroup = function (_a) {
    var children = _a.children, name = _a.name, value = _a.value;
    return (React.createElement(RadioGroupContext.Provider, { value: { name: name, value: value } },
        React.createElement("div", { className: styles.radioGroup }, children)));
};
RadioGroup.defaultProps = {};
export default RadioGroup;
//# sourceMappingURL=RadioGroup.js.map