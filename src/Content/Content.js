import React from 'react';
import styles from './Content.module.css'
import Content_Item from "./Content_Item/Content_Item";

const Content = (props) => {
    let list = [];
    for (let i = 0; i < 5; i++) {
        list.push(<Content_Item/>);
    }
    return (
        <div className={styles.content}>
            <div className={styles.search}>
                <form>
                    <input type="text" className={styles.search_input}/>
                    <button className={styles.search_btn}>search</button>
                </form>
            </div>
            <div className={styles.inner}>
                {list}
            </div>
        </div>
    )
}

export default Content