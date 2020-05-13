
import React from 'react';
import styles from "./Modal.scss"

interface IProps {
    show: boolean
    onRequestClose?: () => void
    //ref?: React.RefObject<HTMLDivElement>
}

const Modal: React.FC<IProps> = ({ children, show, onRequestClose }) => {
    return (
        <div className={[styles.modal, (show ? styles.modalShow : '')].join(' ')}>
            <div className={styles.modalContent}>
                {children}
            </div>
            <div className={styles.modalBackground} onClick={() => {
                if (onRequestClose) {
                    onRequestClose()
                }
            }}></div>
        </div>
    )   
}

Modal.defaultProps = {

}

export default Modal

