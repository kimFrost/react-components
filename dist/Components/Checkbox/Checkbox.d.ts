import React from 'react';
interface IProps {
    disabled?: boolean;
    checked?: boolean;
    invalid?: boolean;
    invalidText?: string;
}
declare const Checkbox: React.FC<IProps>;
export default Checkbox;
