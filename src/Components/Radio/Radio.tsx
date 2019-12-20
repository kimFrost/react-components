
import React, { useRef, useEffect } from 'react';
import styles from './Radio.scss'

interface IProps {
    disabled?: boolean
    checked?: boolean
    invalid?: boolean
    invalidText?: string
}

const Radio: React.FC<IProps> = ({ disabled, checked, invalid, invalidText }) => {
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
        <div className={styles.radio}>
            <div className={styles.radioUiContainer}>
                <input type="radio" ref={ref} className={styles.radioInput} disabled={disabled} checked={checked} />
                <div className={styles.radioUi}></div>
            </div>
            {invalid && invalidText &&
                <span>{invalidText}</span>
            }
        </div>
    )
}

Radio.defaultProps = {

}

export default Radio