
import React, { useRef, useEffect } from 'react';
import styles from "./Tooltip.scss"

interface IProps {
    text: string,
    placement?: string
}

const getModifierClassName = (placement: string = ''): string => {
    switch (placement) {
        case 'top':
            return styles.tooltipTop
        case 'right':
            return styles.tooltipRight
        case 'bottom':
            return styles.tooltipBottom
        case 'left':
            return styles.tooltipLeft
        default:
            return ''
    }
}

const Tooltip: React.FC<IProps> = ({ text, placement }) => {
    return (
        <div className={styles.tooltip + ` ${getModifierClassName(placement)}`}>{text}</div>
    )
}

Tooltip.defaultProps = {

}

export default Tooltip

