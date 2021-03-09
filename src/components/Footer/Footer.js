import React from 'react';
import styles from './Footer.module.css'

const Footer = (props) => {

    return (
        <div className={styles.wrapper}>
            <div className="container">
                <footer className={styles.footer}>
                    <div className={styles.menu}>
                        <button className={styles.menu_link + ' ' + styles.hits} onClick={() => {
                            props.activeHits(true)
                            props.activeContent(false)
                            props.activeHistory(false)
                        }}>
                        </button>
                        <button className={styles.menu_link + ' ' + styles.search} onClick={() => {
                            props.activeHits(false)
                            props.activeContent(true)
                            props.activeHistory(false)
                        }}>
                        </button>
                        <button className={styles.menu_link + ' ' + styles.history} onClick={() => {
                            props.activeHits(false)
                            props.activeContent(false)
                            props.activeHistory(true)
                        }}>
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer