import React from 'react';
interface IProps {
    show: boolean;
    onRequestClose?: () => void;
}
declare const Modal: React.FC<IProps>;
export default Modal;
