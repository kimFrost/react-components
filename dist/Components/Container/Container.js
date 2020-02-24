import React from 'react';
import styles from './Container.scss';
var ESizes;
(function (ESizes) {
    ESizes[ESizes["sm"] = 0] = "sm";
    ESizes[ESizes["s"] = 1] = "s";
    ESizes[ESizes["m"] = 2] = "m";
    ESizes[ESizes["l"] = 3] = "l";
    ESizes[ESizes["xl"] = 4] = "xl";
})(ESizes || (ESizes = {}));
var Container = function (_a) {
    var children = _a.children;
    return (React.createElement("div", { className: styles.container }, children));
};
Container.defaultProps = {
    maxWidth: ESizes.xl
};
export default Container;
//# sourceMappingURL=Container.js.map