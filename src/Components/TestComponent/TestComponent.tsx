import React from 'react';
//import 'TestComponent.module.scss'
//import * as styles from 'TestComponent.scss'
//import styles from 'TestComponent.scss'
//const styles = require('TestComponent.module.scss')

interface IProps {}

const TestComponent: React.FC<IProps> = () => {
    return (
        <div className="asdsad">Test component</div>
    )
}

TestComponent.defaultProps = {}

export default TestComponent