import React from 'react';
import { IProps as IFieldProps } from './../Field/Field';
export declare enum ELabelPosition {
    TOP = "top",
    LEFT = "left",
    INSIDE = "inside"
}
export interface IProps extends IFieldProps {
    label?: string;
    labelPos?: string | ELabelPosition;
    control?: JSX.Element;
    requiredIcon?: JSX.Element;
}
declare const FieldWrapper: React.FC<IProps>;
export default FieldWrapper;
