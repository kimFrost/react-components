import React from 'react';
export interface IProps {
    innerRef?: React.RefObject<HTMLInputElement>;
    type?: string;
    id?: string;
    value?: string | Array<string>;
    placeholder?: string;
    errorText?: string;
    focus?: boolean;
    invalid?: boolean;
    disabled?: boolean;
    required?: boolean;
    fullWidth?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}
declare const Field: React.FC<IProps>;
export default Field;
