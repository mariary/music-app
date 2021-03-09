import React, {useState} from 'react';
import img from "./unknown.PNG";
import styles from './Content_Item.module.css'
import Link from "./Link/Link";

const Content_Item = (props) => {

    const [linkActive, setLinkActive] = useState(false);

    function Cut(str) {
        if (str.includes('(')) {
            str = str.split('(')[0];
            return str
        } else {
            return str
        }
    }

    let kind = props.kind;
    let hits = true
    return (
        <div className={styles[kind]}>
        <div className={props.info.hit ? styles['hits'] : ' '}>
            <div className={styles.item}>
                <div className={styles.wrapper} onClick={() => setLinkActive(props.mount)}>
                    <div className={styles.info}>
                        <img src={props.info.img} alt="" className={styles.item_img}/>
                        <div className={styles.item_person}>
                            {Cut(props.info.artist)}
                        </div>
                        <div className={styles.title}>
                            {Cut(props.info.title)}
                        </div>
                    </div>
                    <div className={styles.views}>
                        {props.info.views}
                    </div>
                    <div className={styles.length}>
                        3:30
                    </div>
                </div>
                {linkActive ?
                    <Link
                        song={props.info}
                        active={linkActive}
                        setActive={setLinkActive}
                        Cut={Cut}
                        key={props.info.key}
                    />
                    :
                    <div></div>
                }
            </div>
        </div>
        </div>
    )
}
export default Content_Item