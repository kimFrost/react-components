import React from 'react';
import styles from "./TestComponent.module.scss";
var TestComponent = function () {
    console.log('styles', styles);
    return (React.createElement("div", { className: "testComponent " + styles['testComponent--hot'] },
        React.createElement("div", { className: styles.body }, "Test component from new react component library")));
};
TestComponent.defaultProps = {};
export default TestComponent;
//# sourceMappingURL=TestComponent.js.map