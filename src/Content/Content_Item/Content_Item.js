import React from 'react';
import img from "./poster.jpg";
import styles from './Content_Item.module.css'

const Content_Item = (props) => {
    return (
        <div className={styles.item}>
            <img src={img} alt="" className={styles.item_img}/>
            <div className={styles.item_person}>
                чиф киф киф чиф
            </div>
            <div className={styles.title}>
                эйн эбаут зис чиф киф
            </div>
        </div>
    )
}

export default Content_Item