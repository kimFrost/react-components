
import React, { useRef, useState, useEffect } from 'react';
import Field from './../Field';
import { IProps as IFieldProps } from './../Field/Field';
import styles from './FieldWrapper.scss'

export enum ELabelPosition {
    TOP = 'top',
    LEFT = 'left',
    INSIDE = 'inside',
    RIGHT = 'right'
}

export interface IProps extends IFieldProps {
    label?: string
    labelPos?: string | ELabelPosition
    control?: JSX.Element
    requiredIcon?: JSX.Element
    //[x: string]: any allow any props
}

const getPositionClass = (pos: string): string => {
    switch (pos) {
        case ELabelPosition.LEFT:
            return styles.fieldWrapperLabelLeft
        case ELabelPosition.TOP:
            return styles.fieldWrapperLabelTop
        case ELabelPosition.INSIDE:
            return styles.fieldWrapperLabelInside
        case ELabelPosition.RIGHT:
            return styles.fieldWrapperLabelRight
        default:
            return styles.fieldWrapperLabelLeft
    }
}

const FieldWrapper: React.FC<IProps> = (props) => {

    const { id, label, labelPos, control, required, requiredIcon, fullWidth, value, children } = props;
    const [hideLabel, setHideLabel] = useState<boolean>((value || '').toString().length > 0)

    useEffect(() => {

    }, [value])

    return (
        <div className={
            [
                styles.fieldWrapper,
                getPositionClass(labelPos as ELabelPosition),
                (hideLabel ? styles.fieldWrapperHideLabel : ''),
                (fullWidth ? styles.fieldWrapperFullWidth : '')
            ].join(' ')
        }>
            {label &&
                <label className={styles.fieldWrapperLabel} htmlFor={id}>
                    {label}
                    {required && requiredIcon &&
                        <span className={styles.fieldWrapperRequired}>
                            {React.cloneElement(requiredIcon)}
                        </span>
                    }
                </label>
            }
            {control &&
                React.cloneElement(control, {
                    ...props,
                    onChange: (e) => {
                        setHideLabel(e.target.value.length || document.activeElement == e.target)
                    },
                    onFocus: () => {
                        setHideLabel(true)
                    },
                    onBlur: (e:React.FocusEvent<HTMLInputElement>) => {
                        setHideLabel(e.target.value.length > 0)
                    }
                })
            }
            {children}
        </div>
    )
}

FieldWrapper.defaultProps = {
    labelPos: ELabelPosition.TOP,
    control: <Field />,
    requiredIcon: <React.Fragment>*</React.Fragment>,
}

export default FieldWrapper