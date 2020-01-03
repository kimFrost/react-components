import React from 'react';
import './FormControlLabel.scss';
export declare enum ELabelPosition {
    TOP = "top",
    LEFT = "left"
}
interface IProps {
    label?: string;
    labelPos?: string | ELabelPosition;
    control: Element;
}
declare const FormControlLabel: React.FC<IProps>;
export default FormControlLabel;
