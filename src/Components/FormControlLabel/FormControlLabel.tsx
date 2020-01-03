
import React from 'react';
import Field from './../Field';
import './FormControlLabel.scss'

export enum ELabelPosition {
    TOP = 'top',
    LEFT = 'left'
}

interface IProps {
    label?: string
    labelPos?: string | ELabelPosition
    control: Element
}

const FormControlLabel: React.FC<IProps> = (props) => {

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

FormControlLabel.defaultProps = {
    labelPos: ELabelPosition.TOP
}

export default FormControlLabel