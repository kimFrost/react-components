import React from 'react';
import styles from "./TestComponent.scss";
var TestComponent = function () {
    console.log('styles', styles);
    return (React.createElement("div", { className: styles.testComponent }, "Test component from new react component library"));
};
TestComponent.defaultProps = {};
export default TestComponent;
//# sourceMappingURL=TestComponent.js.map