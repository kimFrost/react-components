import React from 'react';
interface IProps {
    disabled?: boolean;
    checked?: boolean;
    invalid?: boolean;
    invalidText?: string;
    value?: string;
    name?: string;
    id?: string;
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}
declare const Radio: React.FC<IProps>;
export default Radio;
