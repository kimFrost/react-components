
import React from 'react';
import styles from './Button.scss'
//import { Button as StyledButton, ButtonOutline as StyledButtonOutline } from './Button.styles';

enum EButtonState {
    DEFAULT,
    ACTIVE,
    DISABLED,
    HOVER,
    FOCUS
}

interface IProps {
    onClick?: () => void
    disabled?: boolean
    outline?: boolean
    active?: boolean
    type?: string
}

const Button: React.FC<IProps> = ({ onClick, children, disabled, active, outline, type }) => {
    const buttonProps: any = {}
    if (type) {
        buttonProps['type'] = type;
    }
    return (
        // <StyledButton outline={outline} onClick={onClick} disabled={disabled}>
        //     {children}
        // </StyledButton>
        <button
            {...buttonProps}
            className={[
                styles.btn,
                (outline ? styles.btnOutline : ''),
                (active ? styles.btnActive : '')
            ].join(' ')}
            onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    onClick: () => void (0),
    disabled: false,
    outline: false,
    active: false
}

export default Button