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
import Field from './../Field';
import styles from './FieldWrapper.scss';
export var ELabelPosition;
(function (ELabelPosition) {
    ELabelPosition["TOP"] = "top";
    ELabelPosition["LEFT"] = "left";
    ELabelPosition["INSIDE"] = "inside";
    ELabelPosition["RIGHT"] = "right";
})(ELabelPosition || (ELabelPosition = {}));
var getPositionClass = function (pos) {
    switch (pos) {
        case ELabelPosition.LEFT:
            return styles.fieldWrapperLabelLeft;
        case ELabelPosition.TOP:
            return styles.fieldWrapperLabelTop;
        case ELabelPosition.INSIDE:
            return styles.fieldWrapperLabelInside;
        case ELabelPosition.RIGHT:
            return styles.fieldWrapperLabelRight;
        default:
            return styles.fieldWrapperLabelLeft;
    }
};
var FieldWrapper = function (props) {
    var id = props.id, label = props.label, labelPos = props.labelPos, control = props.control, required = props.required, requiredIcon = props.requiredIcon, fullWidth = props.fullWidth, value = props.value, invalid = props.invalid, errorText = props.errorText, children = props.children, onChange = props.onChange;
    var _a = useState((value || '').toString().length > 0), hideLabel = _a[0], setHideLabel = _a[1];
    useEffect(function () {
    }, [value]);
    return (React.createElement("div", { className: [
            styles.fieldWrapper,
            getPositionClass(labelPos),
            (hideLabel ? styles.fieldWrapperHideLabel : ''),
            (fullWidth ? styles.fieldWrapperFullWidth : '')
        ].join(' ') },
        label &&
            React.createElement("label", { className: styles.fieldWrapperLabel, htmlFor: id },
                label,
                required && requiredIcon && labelPos !== ELabelPosition.INSIDE &&
                    React.createElement("span", { className: styles.fieldWrapperRequired }, React.cloneElement(requiredIcon))),
        control &&
            React.cloneElement(control, __assign(__assign({}, props), { onChange: function (e) {
                    setHideLabel(e.target.value.length || document.activeElement == e.target);
                    onChange ? onChange(e) : null;
                }, onFocus: function () {
                    setHideLabel(true);
                }, onBlur: function (e) {
                    setHideLabel(e.target.value.length > 0);
                } })),
        required && requiredIcon && labelPos === ELabelPosition.INSIDE &&
            React.createElement("span", { className: styles.fieldWrapperRequired }, React.cloneElement(requiredIcon)),
        invalid && errorText &&
            React.createElement("span", null, errorText),
        children));
};
FieldWrapper.defaultProps = {
    labelPos: ELabelPosition.TOP,
    control: React.createElement(Field, null),
    requiredIcon: React.createElement(React.Fragment, null, "*"),
};
export default FieldWrapper;
//# sourceMappingURL=FieldWrapper.js.map