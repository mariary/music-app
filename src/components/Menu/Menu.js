import React, {useState} from 'react';
import styles from './Menu.module.css'

const Menu = (props) => {
    return (
        <div className={styles.menu}>
            <div className={styles.items}>
                <button className={styles.item} onClick={() => {
                    props.activeHits(true)
                    props.activeContent(false)
                    props.activeHistory(false)
                }}>
                    Хиты
                </button>
                <button className={styles.item} onClick={() => {
                    props.activeHits(false)
                    props.activeContent(true)
                    props.activeHistory(false)
                }}>
                    Поиск
                </button>
                <button className={styles.item} onClick={() => {
                    props.activeHits(false)
                    props.activeContent(false)
                    props.activeHistory(true)
                }}>
                    История
                </button>
            </div>
        </div>
    )
}

export default Menu