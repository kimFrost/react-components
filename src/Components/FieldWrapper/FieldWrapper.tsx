
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
    icon?: JSX.Element
    errorText?: string
    //[x: string]: any //allow any props
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

    const {
        id,
        label,
        labelPos,
        control,
        required,
        requiredIcon,
        icon,
        fullWidth,
        value,
        invalid,
        errorText,
        children,
        onChange
    } = props;

    const [hideLabel, setHideLabel] = useState<boolean>((value || '').toString().length > 0)

    useEffect(() => {
        if (typeof value === 'string') {
            setHideLabel(value.length > 0)
        }
        if (!value) {
            setHideLabel(false)
        }
    }, [value])

    return (
        <div className={
            [
                styles.fieldWrapper,
                getPositionClass(labelPos as ELabelPosition),
                (hideLabel ? styles.fieldWrapperHideLabel : ''),
                (fullWidth ? styles.fieldWrapperFullWidth : ''),
                ((invalid && errorText) ? styles.fieldWrapperShowError : '')
            ].join(' ')
        }>
            {control &&
                React.cloneElement(control, {
                    ...props,
                    onChange: (e) => {
                        if (e.target) {
                            setHideLabel(e.target.value.length || document.activeElement == e.target);
                        }
                        else if (typeof e === 'string') {
                            setHideLabel(e.length > 0);
                        }
                        onChange ? onChange(e) : null;
                        if (typeof control.props['onChange'] === 'function') {
                            control.props['onChange'](e)
                        }
                    },
                    onFocus: () => {
                        setHideLabel(true)
                    },
                    onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
                        if (props.value) {
                            setHideLabel(props.value.toString().length > 0)
                        }
                        else {
                            setHideLabel(e.target.value.length > 0)
                        }
                    }
                })
            }
            {label &&
                <label className={styles.fieldWrapperLabel} htmlFor={id}>
                    {label}
                    {required && requiredIcon && labelPos !== ELabelPosition.INSIDE &&
                        <span className={styles.fieldWrapperRequired}>
                            {React.cloneElement(requiredIcon)}
                        </span>
                    }
                </label>
            }
            <div className={styles.fieldWrapperIcons}>
                {icon &&
                    React.cloneElement(icon)
                }
                {required && requiredIcon && labelPos === ELabelPosition.INSIDE &&
                    React.cloneElement(requiredIcon)
                }
            </div>
            <span className={styles.fieldWrapperErrorText}>
                {errorText}
            </span>
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