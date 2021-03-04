import React, {useState, useEffect} from 'react';
import styles from './Hits.module.css'
import Content_Item from "../Items/Content_Item/Content_Item";

const Hits = (props) => {

    const [songs, setSongs] = useState([{artist: "", title: ""}, {artist: "", title: ""},
        {artist: "", title: ""}, {artist: "", title: ""}]);

    console.log(songs);
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
                {songs.map((song) => {
                    return (
                        <Content_Item
                            key={song.url}
                            info={song}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Hits