import React from 'react';
import styles from "./CustomProgress.module.css"
import { ProgressBar, InputGroup, Form, Range } from 'react-bootstrap';

function CustomProgressBar() {

    return (
        <div className={styles.rangeBx}>
            <input type="range" className={styles.CustomProgressBar} />
        </div>
    )
}

export default CustomProgressBar