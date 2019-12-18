import React, { useEffect } from 'react';
import { Field as StyledField, Label as StyledLabel, FieldWrapper as StyledFieldWrapper } from './Field.styles';
var Field = function (_a) {
    /*
    const [testVal, setTestVal] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTestVal(testVal => !testVal)
        }, 2000)
        return () => {
            clearInterval(timer);
        }
    }, [])
    */
    var value = _a.value, placeholder = _a.placeholder, disabled = _a.disabled, label = _a.label, focus = _a.focus, invalid = _a.invalid, onChange = _a.onChange;
    useEffect(function () {
    }, [value]);
    return (React.createElement(StyledFieldWrapper, null,
        label &&
            React.createElement(StyledLabel, null, label),
        React.createElement(StyledField, { type: "text", value: value, invalid: invalid, placeholder: placeholder, focus: focus, disabled: disabled })));
};
Field.defaultProps = {
    type: 'text',
    onChange: function (val) { }
};
export default Field;
//# sourceMappingURL=Field.SC.js.map