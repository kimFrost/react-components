import React from 'react';

import styles from "./TestComponent.scss"

interface IProps {
    theme?: string
}

const TestComponent: React.FC<IProps> = () => {
    console.log('styles', styles)
    return (
        <div className={styles.testComponent}>Test component from new react component library</div>
    )
}

TestComponent.defaultProps = {}

export default TestComponent