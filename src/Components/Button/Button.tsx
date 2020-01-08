
import React from 'react';
import styles from './Button.scss'
//import { Button as StyledButton, ButtonOutline as StyledButtonOutline } from './Button.styles';

interface IProps {
    onClick?: () => void
    disabled?: boolean
    outline?: boolean
    type?: string
}

const Button: React.FC<IProps> = ({ onClick, children, disabled, outline }) => {
    return (
        // <StyledButton outline={outline} onClick={onClick} disabled={disabled}>
        //     {children}
        // </StyledButton>
        <button
            className={styles.btn + (outline ? ` ${styles.btnOutline}` : "")}
            onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    onClick: () => void (0),
    disabled: false,
    outline: false
}

export default Button