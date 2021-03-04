import React, {useState} from 'react';
import styles from './Menu.module.css'
import menu from "./menu.svg";
import cancel from "./cancel.svg";

const Menu = (props) => {
    const [menuActive, setMenuActive] = useState(false);
    return (
        <div className={styles.menu}>
            <div className={styles.menu_btn}>
                <img src={menu} alt=""
                     className={menuActive ? styles.hidden + ' ' + styles.btn_open + ' ' + styles.btn
                         : styles.visible + ' ' + styles.btn_open + ' ' + styles.btn}
                     onClick={() => setMenuActive(true)}/>
                <img src={cancel} alt=""
                     className={menuActive ? styles.visible + ' ' + styles.btn_close + ' ' + styles.btn
                         : styles.hidden + ' ' + styles.btn_close + ' ' + styles.btn}
                     onClick={() => setMenuActive(false)}/>
            </div>
            <div className={menuActive ? styles.visible + ' ' + styles.menu_items
                : styles.hidden + ' ' + styles.menu_items}>
                <button>По популярности</button>
                <button lol='(тут список надо сделать, мб выпадающий,для мобилки переход на новую стр??)'>По
                    жанру
                </button>
                <button>По новизне</button>
                <button>Поиски ранее</button>
            </div>
        </div>
    )
}

export default Menu