
import React from 'react';
import styles from './Box.scss'

enum ESizes {
    SM,
    S,
    M,
    L,
    XL
}

enum EColor {
    NONE = "",
    LIGHT = 'light'
}

interface IProps {
    padding?: ESizes
    color?: EColor | string
}

const Box: React.FC<IProps> = ({ children, color }) => {
    const colorClass = ''
    return (
        <div className={styles.box + ` ${colorClass}`}>
            {children}
        </div>
    )
}

Box.defaultProps = {
  color: EColor.NONE
}

export default Box