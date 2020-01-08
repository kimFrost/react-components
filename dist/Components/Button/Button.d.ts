import React from 'react';
interface IProps {
    onClick?: () => void;
    disabled?: boolean;
    outline?: boolean;
    type?: string;
}
declare const Button: React.FC<IProps>;
export default Button;
