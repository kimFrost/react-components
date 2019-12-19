import React from 'react';
import './Checkbox.scss';
interface IProps {
    disabled?: boolean;
    checked?: boolean;
    invalid?: boolean;
    invalidText?: string;
}
declare const Checkbox: React.FC<IProps>;
export default Checkbox;
