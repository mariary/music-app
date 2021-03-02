import React from 'react';
import styles from './Footer.module.css'

const Footer = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className="container">
                <footer className={styles.footer}>
                    <div className={styles.menu}>
                        <button className={styles.menu_link + ' ' + styles.hits}>
                        </button>
                        <button className={styles.menu_link + ' ' + styles.search}>
                        </button>
                        <button className={styles.menu_link + ' ' + styles.history}>
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer