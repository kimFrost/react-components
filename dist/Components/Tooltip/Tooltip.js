import React from 'react';
import styles from "./Tooltip.scss";
var getModifierClassName = function (placement) {
    if (placement === void 0) { placement = ''; }
    switch (placement) {
        case 'top':
            return styles.tooltipTop;
        case 'right':
            return styles.tooltipRight;
        case 'bottom':
            return styles.tooltipBottom;
        case 'left':
            return styles.tooltipLeft;
        default:
            return '';
    }
};
var Tooltip = function (_a) {
    var text = _a.text, placement = _a.placement;
    return (React.createElement("div", { className: styles.tooltip + (" " + getModifierClassName(placement)) }, text));
};
Tooltip.defaultProps = {};
export default Tooltip;
//# sourceMappingURL=Tooltip.js.map