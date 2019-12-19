
import React, { useRef, useEffect } from 'react';
import styles from './Checkbox.scss'

interface IProps {
    disabled?: boolean
    checked?: boolean
    invalid?: boolean
    invalidText?: string
}

const Checkbox: React.FC<IProps> = ({ disabled, checked, invalid, invalidText }) => {
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (ref.current) {
            if (invalid) {
                ref.current.setCustomValidity('Invalid')
            }
            else {
                ref.current.setCustomValidity('')
            }
        }
    }, [invalid])

    return (
        <div className={styles.checkbox}>
            <div className={styles.checkboxUiContainer}>
                <input type="checkbox" ref={ref} className={styles.checkboxInput} disabled={disabled} checked={checked} />
                <div className={styles.checkboxUi}></div>
            </div>
            {invalid && invalidText &&
                <span>{invalidText}</span>
            }
        </div>
    )
}

Checkbox.defaultProps = {

}

export default Checkbox