import React from 'react';
export interface IProps {
    type?: string;
    id?: string;
    value?: string;
    placeholder?: string;
    errorText?: string;
    focus?: boolean;
    invalid?: boolean;
    disabled?: boolean;
    onChange?: (val: string) => void;
}
declare const Field: React.FC<IProps>;
export default Field;
