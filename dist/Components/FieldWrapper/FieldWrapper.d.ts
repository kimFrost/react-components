import React from 'react';
import { IProps as IFieldProps } from './../Field/Field';
import './FieldWrapper.scss';
export declare enum ELabelPosition {
    TOP = "top",
    LEFT = "left"
}
interface IProps extends IFieldProps {
    label?: string;
    labelPos?: string | ELabelPosition;
}
declare const FieldWrapper: React.FC<IProps>;
export default FieldWrapper;
