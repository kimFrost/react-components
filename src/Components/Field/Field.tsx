
import React from 'react';
import styles from './Field.scss'
import Checkbox from '../Checkbox';

export interface IProps {
    type?: string
    id?: string
    value?: string
    placeholder?: string,
    errorText?: string,
    focus?: boolean,
    invalid?: boolean,
    disabled?: boolean
    onChange?: (val: string) => void
}

const Field: React.FC<IProps> = (props) => {

    const { value, type, id, placeholder, disabled, focus, invalid, errorText, onChange } = props;

    if (type == "checkbox") {
        return <Checkbox {...props} />
    }
    else {
        return (
            <React.Fragment>
                <input
                    className={[styles.field, (focus ? styles.fieldFocus : ''), (invalid ? styles.fieldInvalid : '')].join(' ')}
                    id={id}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled}
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
    onChange: (val: string) => { }
}

export default Field