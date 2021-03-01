import React, {useState} from 'react';
import img from "./unknown.PNG";
import styles from './Content_Item.module.css'
import Link from "./Link/Link";

const Content_Item = (props) => {
    const [linkActive, setLinkActive] = useState(false);
    function Cut(str) {
        if (str.includes('(')){
            str = str.split('(')[0];
            return str
        }
        else {
            return str
        }
    }
    return (
        <div className={styles.item}>
            <div className={styles.wrapper} onClick={() => setLinkActive(true)}>
                <img src={props.info.img} alt="" className={styles.item_img}/>
                <div className={styles.item_person}>
                    {Cut(props.info.artist)}
                </div>
                <div className={styles.title}>
                    {Cut(props.info.title)}
                </div>
            </div>
            <Link
                song = {props.info}
                active={linkActive}
                setActive={setLinkActive}
                Cut={Cut}
            />
        </div>
    )
}

export default Content_Item