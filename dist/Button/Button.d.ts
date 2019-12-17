import React from 'react';
interface IProps {
    onClick?: () => void;
    disabled?: boolean;
    outline?: boolean;
}
declare const Button: React.FC<IProps>;
export default Button;
