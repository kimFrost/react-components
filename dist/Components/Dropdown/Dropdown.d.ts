import React from 'react';
interface IProps {
    id?: string;
    value?: any;
    openIcon?: JSX.Element;
    closeIcon?: JSX.Element;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
declare const Dropdown: React.FC<IProps>;
export default Dropdown;
