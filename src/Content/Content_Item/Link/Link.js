import React from 'react';
import img from "./poster.jpg";
import style from './Link.css'
import styles from './Link.module.css'

const Link = (props) => {
    return (
        <div className={props.active ? 'modal active' : 'modal'}>
            <button className={styles.btn_prev} onClick={() => {
                props.setActive(false)
                console.log(props.active);
            }}>
            </button>
            <div className={styles.header}>
                <img src={img} alt="" className={styles.img}/>
                <div className={styles.header_inner}>

                </div>
            </div>
            <div className={styles.link}>
                <div className={styles.person}>
                    чиф киф киф чиф
                </div>
                <div className={styles.title}>
                    эйн эбаут зис чиф киф
                </div>
            </div>
        </div>
    )
}

export default Link