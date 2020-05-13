
import React from 'react';
import styles from "./Loader.scss"
import { Styles } from 'polished/lib/types/style';

interface IProps {
    show?: boolean,
    //ref?: React.RefObject<HTMLDivElement>
}

const Loader: React.FC<IProps> = ({ children, show }) => {
    return (
        <div className={[styles.loader, (show ? '' : styles.loaderHide)].join(' ')}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

Loader.defaultProps = {
    show: true
}

export default Loader

