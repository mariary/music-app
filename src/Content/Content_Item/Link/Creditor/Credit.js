import React from 'react';
import styles from './Credit.module.css'

const Credit = (props) => {
    return (
        <div className={props.active ? 'modal active' : 'modal'}>
            <button className={styles.btn_prev} onClick={() => {
                props.setActive(false)
                console.log(props.active);
            }}></button>
            <div className={styles.credit}>
                <p className={styles.title}>
                    эйн эбаут зис чиф киф
                </p>
                <p className={styles.title}>
                    orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's
                </p>

            </div>
        </div>
    )
}

export default Credit