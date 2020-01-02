
import React, { useRef, useEffect } from 'react';
import styles from './Checkbox.scss'

export interface IProps {
    disabled?: boolean
    checked?: boolean
    invalid?: boolean
    invalidText?: string
    icon?: JSX.Element
    checkedIcon?: JSX.Element
    //control?: any
}
/*
<FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />}
        label="Custom icon"
      />
*/


const Checkbox: React.FC<IProps> = ({ disabled, checked, invalid, invalidText, icon, checkedIcon }) => {
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
                <div className={styles.checkboxUi}>
                    {checkedIcon ?
                        React.cloneElement(checkedIcon)
                        :
                        icon &&
                        React.cloneElement(icon)
                    }
                </div>
            </div>
            {invalid && invalidText &&
                <span>{invalidText}</span>
            }
        </div>
    )
}

Checkbox.defaultProps = {
    checkedIcon: <span>&#10003;</span>
}

/*
const CheckboxLabels: React.FC = () => {

    return (
        
    )
}
*/

export default Checkbox