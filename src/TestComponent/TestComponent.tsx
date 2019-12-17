import React from 'react';

import styles from "./TestComponent.module.scss"

interface IProps {
    theme?: string
}

const TestComponent: React.FC<IProps> = () => {
    console.log('styles', styles)
    return (
        <div className={"testComponent " + styles['testComponent--hot']}>
            <div className={styles.body}>Test component from new react component library</div>
        </div>
    )
}

TestComponent.defaultProps = {}

export default TestComponent