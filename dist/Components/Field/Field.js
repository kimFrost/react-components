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
import styles from './Field.scss';
import Checkbox from '../Checkbox';
var Field = function (props) {
    var value = props.value, type = props.type, id = props.id, placeholder = props.placeholder, disabled = props.disabled, focus = props.focus, invalid = props.invalid, errorText = props.errorText, onChange = props.onChange;
    if (type == "checkbox") {
        return React.createElement(Checkbox, __assign({}, props));
    }
    else {
        return (React.createElement(React.Fragment, null,
            React.createElement("input", { className: [styles.field, (focus ? styles.fieldFocus : ''), (invalid ? styles.fieldInvalid : '')].join(' '), id: id, type: type, value: value, placeholder: placeholder, disabled: disabled }),
            invalid && errorText &&
                React.createElement("span", { className: styles.fieldError }, errorText)));
    }
};
Field.defaultProps = {
    type: 'text',
    onChange: function (val) { }
};
export default Field;
//# sourceMappingURL=Field.js.map