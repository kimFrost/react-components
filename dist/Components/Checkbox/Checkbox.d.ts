import React from 'react';
export interface IProps {
    id?: string;
    disabled?: boolean;
    checked?: boolean;
    invalid?: boolean;
    invalidText?: string;
    icon?: JSX.Element;
    checkedIcon?: JSX.Element;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Checkbox: React.FC<IProps>;
export default Checkbox;
