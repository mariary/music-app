import React, {useState, useEffect} from 'react';
import styles from './Hits.module.css'
import Content_Item from "../Items/Content_Item/Content_Item";
import tmp_logo from "./load.PNG";

const Hits = (props) => {

    const tmp = [];
    for (let i = 0; i < 10; i++) {
        tmp.push({
            artist: "",
            title: "",
            img: tmp_logo,
            url: i
        })
    }
    const [songs, setSongs] = useState(tmp);

    const link = `https://rapapi.herokuapp.com/api/hits`;

    useEffect(() => {
        getSong();
    }, [])

    const getSong = async () => {
        const response = await fetch(link);
        const data = await response.json();
        setSongs(data.songs)
    }

    return (
        <div className={styles.content}>
            <div className={styles.title}>Hits</div>
            <div className={styles.inner}>
                <ol>
                    {songs.map((song) => {
                        return (
                            <li>
                                <Content_Item
                                    key={song.url}
                                    info={song}
                                    kind={'list'}
                                    hits={'hits'}
                                />
                            </li>
                        )
                    })}
                </ol>
            </div>
        </div>
    )
}

export default Hits