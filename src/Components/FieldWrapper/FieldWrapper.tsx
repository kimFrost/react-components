
import React from 'react';
import Field from './../Field';
import { IProps as IFieldProps } from './../Field/Field';
import './FieldWrapper.scss'

export enum ELabelPosition {
    TOP = 'top',
    LEFT = 'left'
}

interface IProps extends IFieldProps {
    label?: string
    labelPos?: string | ELabelPosition
}

const FieldWrapper: React.FC<IProps> = (props) => {

    const { id, label, labelPos } = props

    return (
        <div className={'field-wrapper' + ` field-wrapper--label-${labelPos}`}>
            {label &&
                <label className={'field-wrapper__label'} htmlFor={id}>{label}</label>
            }
            <Field {...props} />
        </div>
    )
}

FieldWrapper.defaultProps = {
    labelPos: ELabelPosition.TOP
}

export default FieldWrapper