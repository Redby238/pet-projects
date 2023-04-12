import React from 'react';
import styles from './Button.module.scss';
const Button = ({children,cb}) => {
    return (
        <div>
            <button onClick={cb} className={styles.button}>
                {children}
            </button>
        </div>
    );
};

export default Button;