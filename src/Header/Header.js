import React from 'react';
import styles from './Header.module.css';
import  img from './lol.png'

const Header = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className="container">
                <h1 className={styles.header}>

                    <img src={img} alt="" className={styles.img}/>
                </h1>
            </div>
        </div>
    )
}

export default Header