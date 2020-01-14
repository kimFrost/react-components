
import React, { useState, useEffect } from 'react';
import styles from './Field.scss'
import Checkbox from '../Checkbox';



export interface IProps {
    innerRef?: React.RefObject<HTMLInputElement>
    type?: string
    id?: string
    value?: string | Array<string>
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
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
}

const Field: React.FC<IProps> = (props) => {

    const {
        value, type, innerRef, id, placeholder, disabled, focus, invalid, errorText, required, fullWidth,
        onChange, onFocus, onBlur, onClick } = props;

    const [inputValue, setInputValue] = useState(value)

    useEffect(() => {
        setInputValue(value)
    }, [value])

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        {
            onChange &&
            onChange(e)
        }
    }

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
                        (fullWidth ? styles.fieldFullWidth : ''),
                        (Array.isArray(inputValue) ? styles.fieldHasSubfields : '')
                    ].join(' ')}
                    id={id}
                    ref={innerRef}
                    type={type}
                    value={Array.isArray(inputValue) ? inputValue.reduce((value, combined) => value + combined, '') : inputValue}
                    placeholder={placeholder}
                    disabled={disabled}
                    required={required}
                    onChange={handleOnChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onClick={onClick}
                />
                {Array.isArray(inputValue) && inputValue.length &&
                    <div className={styles.fieldSubfields}>
                        {inputValue}
                    </div>
                }
                {invalid && errorText &&
                    <span className={styles.fieldError}>{errorText}</span>
                }
            </React.Fragment>
        )
    }
}

Field.defaultProps = {
    type: 'text',
    value: '',
    required: false,
    fullWidth: false,
    onChange: () => { },
    onFocus: () => { },
    onBlur: () => { },
}

export default Field