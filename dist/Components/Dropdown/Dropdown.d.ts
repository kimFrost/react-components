import React from 'react';
export interface IOption {
    value: string;
    label: string;
}
export interface IProps {
    id?: string;
    value?: any;
    openIcon?: JSX.Element;
    closeIcon?: JSX.Element;
    options?: Array<IOption>;
    invalid?: boolean;
    searchable?: boolean;
    filterable?: boolean;
    fullWidth?: boolean;
    noResultsText?: string;
    onChange?: (value: any) => void;
    onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
declare const Dropdown: React.FC<IProps>;
export default Dropdown;
