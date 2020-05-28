import React from 'react';
export interface IOption<T> {
    value: T;
    label: string;
}
export interface IProps<T = unknown> {
    id?: string;
    value?: IOption<T>;
    openIcon?: JSX.Element;
    closeIcon?: JSX.Element;
    options?: Array<IOption<T>>;
    invalid?: boolean;
    searchable?: boolean;
    filterable?: boolean;
    fullWidth?: boolean;
    noResultsText?: string;
    showIcons?: boolean;
    onChange?: (value: IOption<T>) => void;
    onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
declare function Dropdown<T>(props: IProps<T>): JSX.Element;
declare namespace Dropdown {
    var defaultProps: {
        searchable: boolean;
        filterable: boolean;
        openIcon: JSX.Element;
        closeIcon: JSX.Element;
        fullWidth: boolean;
        noResultsText: string;
        showIcons: boolean;
    };
}
export default Dropdown;
