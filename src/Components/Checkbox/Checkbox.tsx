
import React, { useRef, useEffect } from 'react';
import './Checkbox.scss'

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
        <div className="checkbox">
            <div className="checkbox__ui-container">
                <input type="checkbox" ref={ref} className="checkbox__input" disabled={disabled} checked={checked} />
                <div className="checkbox__ui"></div>
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