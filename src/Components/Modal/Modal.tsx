
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from "./Modal.scss"

interface IProps {
    show: boolean
    onRequestClose?: () => void
    //ref?: React.RefObject<HTMLDivElement>
}

const Modal: React.FC<IProps> = ({ children, show, onRequestClose }) => {
    return (
        <CSSTransition
            in={show}
            classNames={{
                enter: styles.modalShow,
                enterActive: styles.modalShowActive,
                enterDone: styles.modalShowDone
            }}
            timeout={500}
            unmountOnExit
        >
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    {children}
                </div>
                <div className={styles.modalBackground} onClick={() => {
                    if (onRequestClose) {
                        onRequestClose()
                    }
                }}></div>
            </div>
        </CSSTransition>

    )
}

Modal.defaultProps = {

}

export default Modal

