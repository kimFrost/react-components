import React from 'react';
import styles from './Box.scss';
var ESizes;
(function (ESizes) {
    ESizes[ESizes["SM"] = 0] = "SM";
    ESizes[ESizes["S"] = 1] = "S";
    ESizes[ESizes["M"] = 2] = "M";
    ESizes[ESizes["L"] = 3] = "L";
    ESizes[ESizes["XL"] = 4] = "XL";
})(ESizes || (ESizes = {}));
var EColor;
(function (EColor) {
    EColor["NONE"] = "";
    EColor["LIGHT"] = "light";
})(EColor || (EColor = {}));
var getColorClass = function (color) {
    switch (color) {
        case EColor.LIGHT:
            return styles.boxLight;
        default:
            return '';
    }
};
var Box = function (_a) {
    var children = _a.children, color = _a.color, className = _a.className;
    return (React.createElement("div", { className: [
            styles.box,
            getColorClass(color),
            className
        ].join(' ') }, children));
};
Box.defaultProps = {
    color: EColor.NONE
};
// const StyledBox = styled(Box)`
//     background-color: ${props => props.theme.primaryColor};
//     color: ${props => props.theme.secondaryColor};
// `
export default Box;
//# sourceMappingURL=Box.js.map