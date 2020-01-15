import React from 'react';
interface IOption {
    value: string;
    label: string;
}
interface IProps {
    id?: string;
    value?: any;
    openIcon?: JSX.Element;
    closeIcon?: JSX.Element;
    options?: Array<IOption>;
    searchable?: boolean;
    filterable?: boolean;
    fullWidth?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Dropdown: React.FC<IProps>;
export default Dropdown;
