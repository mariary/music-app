import React, {useState} from 'react';
import img from "./poster.jpg";
import styles from './Content_Item.module.css'
import Link from "./Link/Link";

const Content_Item = (props) => {
    const [linkActive, setLinkActive] = useState(false)
    return (
        <div className={styles.item}>
            <div className={styles.wrapper} onClick={() => setLinkActive(true)}>
                <img src={img} alt="" className={styles.item_img}/>
                <div className={styles.item_person}>
                    чиф киф киф чиф
                </div>
                <div className={styles.title}>
                    эйн эбаут зис чиф киф
                </div>
            </div>
            <Link
                active={linkActive}
                setActive={setLinkActive}
            />
        </div>
    )
}

export default Content_Item