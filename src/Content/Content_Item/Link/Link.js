import React, {useState,useEffect} from 'react';
import img from "./poster.jpg";
import style from './Link.css'
import styles from './Link.module.css'
import Credit from "./Creditor/Credit";

const Link = (props) => {
    const [creditActive, setCreditActive] = useState(false);
    const [post, setPost] = useState(props.song);
    console.log(   post.text);
    useEffect(() => {
        getPost();
    }, [])

    const getPost = async () => {
        const response = await fetch('https://rapapi.herokuapp.com/api/song', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(post)
        });
        const data = await response.json();
        setPost(data)
    }

    return (
        <div className={props.active ? 'modal1 active' : 'modal'}>
            <button className={styles.btn_prev} onClick={() => {
                props.setActive(false)
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
                    {post.text}
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