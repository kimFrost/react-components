import React from 'react';
export interface IProps {
    disabled?: boolean;
    checked?: boolean;
    invalid?: boolean;
    invalidText?: string;
    icon?: JSX.Element;
    checkedIcon?: JSX.Element;
}
declare const Checkbox: React.FC<IProps>;
export default Checkbox;
