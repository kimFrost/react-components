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
    searchable?: boolean;
    filterable?: boolean;
    fullWidth?: boolean;
    onChange?: (value: any) => void;
    onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Dropdown: React.FC<IProps>;
export default Dropdown;
