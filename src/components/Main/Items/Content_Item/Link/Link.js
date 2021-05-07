import React, {useState, useEffect} from 'react';
import img from "./poster.jpg";
import styles from './Link.module.css'

const Link = (props) => {
    
    const URL = "https://rapapi.herokuapp.com/api/song";
    // const URL = "http://127.0.0.1:5000/api/song";

    //const [creditActive, setCreditActive] = useState(false);
    const [post, setPost] = useState({
        title: props.song.title,
        artist: props.song.artist,
        img: props.song.img,
        url: props.song.url,
        views: props.song.views,
        hit: props.song.hit,
        token: getCookie("token")
    });

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

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    const [text, setText] = useState(letter)
    useEffect(() => {
        getPost();
    }, [])

    const getPost = async () => {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(post)
        });
        const data = await response.json();
        setPost({
            title: data.title,
            artist: data.artist,
            img: data.img,
            url: data.url,
            views: data.views,
            hit: data.hit,
            token: getCookie("token")
        });
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
                    {props.song.views.length > 0 ?
                        <div className={styles.views}>
                            {props.song.views}
                        </div>
                        :
                        <div></div>
                    }
                    {props.song.hit ?
                        <div className={styles.info}></div>
                        :
                        <div></div>
                    }
                </p>
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
        </div>
    )
}

export default Link
