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
import Field from './../Field';
import './FormControlLabel.scss';
export var ELabelPosition;
(function (ELabelPosition) {
    ELabelPosition["TOP"] = "top";
    ELabelPosition["LEFT"] = "left";
})(ELabelPosition || (ELabelPosition = {}));
var FormControlLabel = function (props) {
    var id = props.id, label = props.label, labelPos = props.labelPos;
    return (React.createElement("div", { className: 'field-wrapper' + (" field-wrapper--label-" + labelPos) },
        label &&
            React.createElement("label", { className: 'field-wrapper__label', htmlFor: id }, label),
        React.createElement(Field, __assign({}, props))));
};
FormControlLabel.defaultProps = {
    labelPos: ELabelPosition.TOP
};
export default FormControlLabel;
//# sourceMappingURL=FormControlLabel.js.map