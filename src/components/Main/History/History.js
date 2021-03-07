import React, {useState, useEffect} from 'react';
import styles from './History.module.css'


const History = (props) => {

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
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

    const URL = "https://rapapi.herokuapp.com/api/history";
    // const URL = "http://127.0.0.1:5000/api/history";

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = async () => {
        const response = await fetch(
            URL,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    "token": getCookie("token")
                })
            }
        );
        const data = await response.json();
        console.log(data);
        setSongs(data)
    }

    return (
        <div className={styles.history}>
            <div className={styles.inner}>
                Маша, зайди в консоль, там увидишь откуда берутся данные для истории
            </div>
        </div>
    )
}

export default History