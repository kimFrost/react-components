
import React, { useRef, useEffect, useContext } from 'react';
import styles from './Radio.scss'
import RadioGroupContext from '../RadioGroup/RadioGroupContext';

interface IProps {
    disabled?: boolean
    checked?: boolean
    invalid?: boolean
    invalidText?: string
    value?: string
    name?: string
    id?: string
}

const Radio: React.FC<IProps> = ({ disabled, checked, invalid, invalidText, value, name, id }) => {
    const ref = useRef<HTMLInputElement>(null)

    const radioGroup = useContext(RadioGroupContext)
    if (radioGroup) {
        name = radioGroup.name || name;
        //checked = value === radioGroup.value || checked;
    }

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
                <input type="radio" ref={ref} id={id} value={value} name={name} className={styles.radioInput} disabled={disabled} checked={checked} />
                <div className={styles.radioUi}></div>
            </div>
            {invalid && invalidText &&
                <span className={styles.radioErrorText}>{invalidText}</span>
            }
        </div>
    )
}

Radio.defaultProps = {

}

export default Radio