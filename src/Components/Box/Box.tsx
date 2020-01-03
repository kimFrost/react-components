
import React from 'react';
import styles from './Box.scss'

enum ESizes {
    sm,
    s,
    m,
    l,
    xl
}

interface IProps {
    padding?: ESizes
}

const Box: React.FC<IProps> = ({ children}) => {
    return (
        <div className={styles.box}>
            {children}
        </div>
    )
}

Box.defaultProps = {
  
}

export default Box