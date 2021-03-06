import React from 'react';
export interface IProps {
    inputRef?: React.RefObject<HTMLInputElement>;
    type?: string;
    id?: string;
    name?: string;
    value?: string | Array<string>;
    placeholder?: string;
    multiLine?: boolean;
    focus?: boolean;
    invalid?: boolean;
    disabled?: boolean;
    required?: boolean;
    locked?: boolean;
    fullWidth?: boolean;
    readonly?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}
declare const Field: React.FC<IProps>;
export default Field;
