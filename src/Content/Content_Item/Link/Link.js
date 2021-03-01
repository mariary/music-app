import React, {useState} from 'react';
import img from "./poster.jpg";
import style from './Link.css'
import styles from './Link.module.css'
import Credit from "./Creditor/Credit";

const Link = (props) => {
    const [creditActive, setCreditActive] = useState(false)
    return (
        <div className={props.active ? 'modal active' : 'modal'}>
            <button className={styles.btn_prev} onClick={() => {
                props.setActive(false)
                console.log(props.active);
            }}>
            </button>
            <div className={styles.header}>
                <img src={props.song.img} alt="" className={styles.img}/>
                <div className={styles.header_inner}>
                </div>
            </div>
            <div className={styles.link}>
                <div className={styles.person}>
                    {props.Cut(props.song.artist)}
                </div>
                <p className={styles.title}>
                    {props.Cut(props.song.title)}
                </p>
                <p className={styles.about}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's
                </p>
                <div className={styles.wrapper}>
                    <a src={props.song.url} className={styles.url}>Song url</a>
                    <button className={styles.credits} onClick={() => setCreditActive(true)}>Credits</button>
                </div>
                <p className={styles.text}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum. industry's standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum. industry's standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <Credit
                active={creditActive}
                setActive={setCreditActive}
            />
        </div>
    )
}

export default Link