
import React from 'react';
import styles from './Button.scss'

interface IProps {
    onClick?: () => void
    disabled?: boolean
    outline?: boolean
}

const Button: React.FC<IProps> = ({onClick, children, disabled, outline}) => {
    return (
        <button className={styles.btn + (outline ? ` ${styles.btnOutline}`: "")} onClick={onClick} disabled={disabled}>{children}</button>
    )
}

Button.defaultProps = {
    onClick: () => void(0),
    disabled: false,
    outline: false
}

export default Button