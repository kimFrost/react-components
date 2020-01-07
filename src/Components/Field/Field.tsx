
import React from 'react';
import styles from './Field.scss'
import Checkbox from '../Checkbox';

export interface IProps {
    type?: string
    id?: string
    value?: string
    placeholder?: string
    errorText?: string
    focus?: boolean
    invalid?: boolean
    disabled?: boolean
    required?: boolean
    fullWidth?: boolean
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
}

const Field: React.FC<IProps> = (props) => {

    const { 
        value, type, id, placeholder, disabled, focus, invalid, errorText, required, fullWidth, 
        onChange, onFocus, onBlur } = props;

    if (type == "checkbox") {
        return <Checkbox {...props} />
    }
    else {
        return (
            <React.Fragment>
                <input
                    className={[
                        styles.field,
                        (focus ? styles.fieldFocus : ''),
                        (invalid ? styles.fieldInvalid : ''),
                        (fullWidth ? styles.fieldFullWidth : '')
                    ].join(' ')}
                    id={id}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled}
                    required={required}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
                {invalid && errorText &&
                    <span className={styles.fieldError}>{errorText}</span>
                }
            </React.Fragment>
        )
    }
}

Field.defaultProps = {
    type: 'text',
    required: false,
    fullWidth: false,
    onChange: () => { },
    onFocus: () => { },
    onBlur: () => { },
}

export default Field