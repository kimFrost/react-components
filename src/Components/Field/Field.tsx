
import React, { useState, useEffect, forwardRef } from 'react';
import styles from './Field.scss'


export interface IProps {
    //inputRef?: React.RefObject<HTMLInputElement>
    type?: string
    id?: string
    name?: string
    value?: string | Array<string>
    placeholder?: string
    multiLine?: boolean
    focus?: boolean
    invalid?: boolean
    disabled?: boolean
    required?: boolean
    locked?: boolean
    fullWidth?: boolean
    readonly?: boolean
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
}


const Field = forwardRef<HTMLInputElement, IProps>((props, ref) => {
    //const Field: React.FC<IProps> = (props) => {

    const {
        value, type, id, name, placeholder, multiLine, disabled, focus, invalid, required, fullWidth,
        onChange, onFocus, onBlur, onClick, locked, readonly } = props;

    const [inputValue, setInputValue] = useState(value)

    useEffect(() => {
        setInputValue(value)
    }, [value])

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (locked) return
        setInputValue(e.target.value)
        {
            onChange &&
                onChange(e)
        }
    }

    if (multiLine) {
        return (
            <React.Fragment>
                <textarea
                    className={[
                        styles.field,
                        (focus ? styles.fieldFocus : ''),
                        (invalid ? styles.fieldInvalid : ''),
                        (multiLine ? styles.fieldMultiLine : ''),
                        (Array.isArray(inputValue) ? styles.fieldHasSubfields : ''),
                        (locked ? styles.fieldLocked : '')
                    ].join(' ')}
                    id={id}
                    name={name}
                    ref={ref as any}
                    value={Array.isArray(inputValue) ? inputValue.reduce((value, combined) => value + combined, '') : inputValue}
                    placeholder={placeholder}
                    disabled={disabled}
                    required={required}
                    readOnly={readonly}
                    onChange={handleOnChange as any}
                    onFocus={onFocus as any}
                    onBlur={onBlur as any}
                    onClick={onClick as any}
                ></textarea>
                {Array.isArray(inputValue) && inputValue.length &&
                    <div className={styles.fieldSubfields}>
                        {inputValue}
                    </div>
                }
            </React.Fragment>
        )
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
                        (Array.isArray(inputValue) ? styles.fieldHasSubfields : ''),
                        (locked ? styles.fieldLocked : '')
                    ].join(' ')}
                    id={id}
                    name={name}
                    ref={ref}
                    type={type}
                    value={Array.isArray(inputValue) ? inputValue.reduce((value, combined) => value + combined, '') : inputValue}
                    placeholder={placeholder}
                    disabled={disabled}
                    required={required}
                    readOnly={readonly}
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
            </React.Fragment>
        )
    }
})

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