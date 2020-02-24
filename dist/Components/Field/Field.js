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
import React, { useState, useEffect } from 'react';
import styles from './Field.scss';
import Checkbox from '../Checkbox';
var Field = function (props) {
    var value = props.value, type = props.type, innerRef = props.innerRef, id = props.id, placeholder = props.placeholder, disabled = props.disabled, focus = props.focus, invalid = props.invalid, required = props.required, fullWidth = props.fullWidth, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, onClick = props.onClick, locked = props.locked;
    var _a = useState(value), inputValue = _a[0], setInputValue = _a[1];
    useEffect(function () {
        setInputValue(value);
    }, [value]);
    var handleOnChange = function (e) {
        if (locked)
            return;
        setInputValue(e.target.value);
        {
            onChange &&
                onChange(e);
        }
    };
    if (type == "checkbox") {
        return React.createElement(Checkbox, __assign({}, props));
    }
    else {
        return (React.createElement(React.Fragment, null,
            React.createElement("input", { className: [
                    styles.field,
                    (focus ? styles.fieldFocus : ''),
                    (invalid ? styles.fieldInvalid : ''),
                    (fullWidth ? styles.fieldFullWidth : ''),
                    (Array.isArray(inputValue) ? styles.fieldHasSubfields : ''),
                    (locked ? styles.fieldLocked : '')
                ].join(' '), id: id, ref: innerRef, type: type, value: Array.isArray(inputValue) ? inputValue.reduce(function (value, combined) { return value + combined; }, '') : inputValue, placeholder: placeholder, disabled: disabled, required: required, onChange: handleOnChange, onFocus: onFocus, onBlur: onBlur, onClick: onClick }),
            Array.isArray(inputValue) && inputValue.length &&
                React.createElement("div", { className: styles.fieldSubfields }, inputValue)));
    }
};
Field.defaultProps = {
    type: 'text',
    value: '',
    required: false,
    fullWidth: false,
    onChange: function () { },
    onFocus: function () { },
    onBlur: function () { },
};
export default Field;
//# sourceMappingURL=Field.js.map