import React, {useState, useEffect} from 'react';
import styles from './History.module.css'
import Content_Item from "../Items/Content_Item/Content_Item";
import tmp_logo from "../Hits/load.PNG";
import empty_list from './box.svg';


const History = (props) => {

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

    const URL = "https://rapapi.herokuapp.com/api/history";
    // const URL = "http://127.0.0.1:5000/api/history";

    const [songs, setSongs] = useState(null);
    const [dataState, setDataState] = useState(false);
    console.log(songs);
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
        setDataState(true);
        setSongs(data)
    }

    return (
        <div className={styles.history}>
            <div className={styles.title}>History</div>
            <div className={styles.inner}>
                {songs === null ?
                    <div className={styles.loading}>
                        <div className={styles.img}>
                        </div>
                    </div>
                    : (songs.length > 0 ?
                            <div>
                                {songs.map((song) => {
                                    return (
                                        <Content_Item
                                            key={song.url}
                                            info={song}
                                            kind={'list'}
                                            mount={dataState}
                                        />
                                    )
                                })}
                            </div>
                            :
                            <div className={styles.clear}>
                                <img src={empty_list} alt=""/>
                                Ваш список пуст
                            </div>
                    )
                }
            </div>
        </div>
    )
}

export default History