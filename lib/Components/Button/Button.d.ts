import React from 'react';
import './Button.scss';
interface IProps {
    onClick?: () => void;
    disabled?: boolean;
    outline?: boolean;
}
declare const Button: React.FC<IProps>;
export default Button;
