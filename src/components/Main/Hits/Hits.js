import React, {useState, useEffect} from 'react';
import styles from './Hits.module.css'
import Content_Item from "../Items/Content_Item/Content_Item";
import tmp_logo from "./load.png";
import history from '../History/History.module.css';

const Hits = (props) => {

    const tmp = [];
    for (let i = 0; i < 10; i++) {
        tmp.push({
            artist: "",
            title: "",
            img: tmp_logo,
            views: "",
            hit: false,
            url: i,
        })
    }
    const [songs, setSongs] = useState(tmp);
    const [dataState, setDataState] = useState(false);

    const link = `https://rapapi.herokuapp.com/api/hits`;
    // const link = "http://127.0.0.1:5000/api/hits";

    useEffect(() => {
        getSong();
    }, [])

    const getSong = async () => {
        const response = await fetch(link);
        const data = await response.json();
        setDataState(true);
        setSongs(data.songs)
    }

    return (
        <div className={styles.content}>
            <div className={styles.title}>Hits</div>
            <div className={styles.inner}>
                <ol>
                    {songs[0].artist === '' ?
                        <div className={history.loading}>
                            <div className={history.img}>
                            </div>
                        </div>
                        :
                        <div></div>
                    }
                    {songs.map((song) => {
                        return (
                            <li>
                                <Content_Item
                                    key={song.url}
                                    info={song}
                                    kind={'list'}
                                    hits={'hits'}
                                    mount={dataState}
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