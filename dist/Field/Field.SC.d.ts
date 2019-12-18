import React from 'react';
interface IProps {
    type?: string;
    label?: string;
    value?: string;
    placeholder?: string;
    focus?: boolean;
    invalid?: boolean;
    disabled?: boolean;
    onChange?: (val: string) => void;
}
declare const Field: React.FC<IProps>;
export default Field;
