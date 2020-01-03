
import React from 'react';
import styles from './Container.scss'

enum ESizes {
    sm,
    s,
    m,
    l,
    xl
}

interface IProps {
    maxWidth?: ESizes
}

const Container: React.FC<IProps> = ({ children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

Container.defaultProps = {
    maxWidth: ESizes.xl
}

export default Container