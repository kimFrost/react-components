import React from 'react';
import styles from 'TestComponent.module.scss'

interface IProps {}

const TestComponent: React.FC<IProps> = () => {
    return (
        <div className={styles.testComponent}>Test component</div>
    )
}

TestComponent.defaultProps = {}

export default TestComponent