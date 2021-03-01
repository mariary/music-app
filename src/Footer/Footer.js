import React from 'react';
import styles from './Footer.module.css'

const Footer = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className="container">
                <footer>
                    <div className={styles.menu}>
                        <a href="#" className={styles.menu_link}>Наши контакты</a>
                        <a href="#" className={styles.menu_link}>мб еще что-то</a>
                        <a href="#" className={styles.menu_link}>ну и еще</a>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer