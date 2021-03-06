import React, {useState, useEffect} from 'react';
import img from "./poster.jpg";
import style from './Link.css'
import styles from './Link.module.css'
import Credit from "./Creditor/Credit";

const Link = (props) => {
    const [creditActive, setCreditActive] = useState(false);
    const [post, setPost] = useState(props.song);
    let letter = [
        "(I know that's right)\n",
        "Make a nigga act right\n",
        "Racks stack up Shaq height\n",
        "Jewelry on me, flashlight\n",
        "I been lit since last night\n",
        "Hit him with that good good\n",
        "I said my face bomb, ass tight\n",
        "Broke boys don't deserve no pussy\n",
        "Big bag bussin' out the Bentley Bentayga\n",
        "Man, Balenciaga Bardi back and all these bitches fucked\n",
        "It's big bags bussin' out the Bentley Bentayga, man\n",
        "Birkin bag, Bardi back and all you bitches fucked\n",
        "If it's up, then it's up, then it's up, then it's stuck\n",
        "Man, Balenciaga Bardi back and all these bitches fucked\n",
        "It's big bags bussin' out the Bentley Bentayga, man\n",
        "Birkin bag, Bardi back and all you bitches fucked\n",
        "Man, Balenciaga Bardi back and all these bitches fucked\n",
        "It's big bags bussin' out the Bentley Bentayga, man\n",
        "Birkin bag, Bardi back and alffffffffffffffl\n",
        "I said my face bomb, ass tight ffffff\n",
        "Broke boys don't deserve no pussffy\n",
        "Big bag bussin' out the Ben\n",]

    const [text, setText] = useState(letter)
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
        setPost(data);
        setText(data.text);
    }
    return (
        <div className={props.active ? 'modal1 active' : 'modal'}>

            <div className={styles.header}>
                <img src={props.song.img} alt="" className={styles.img}/>
                <div className={styles.header_inner}>
                </div>
            </div>
            <div className={styles.link}>
                <button className={styles.btn_prev} onClick={() => {
                    props.setActive(false)
                }}>
                </button>
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
                    {text === letter ?
                        letter.map((span) => {
                            return (
                                <span>{span}</span>)
                        })
                        :
                        text
                    }
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
