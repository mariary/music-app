import React, {useState, useEffect} from 'react';
import styles from './Content.module.css'
import Content_Item from "../Items/Content_Item/Content_Item";

const Content = (props) => {

    const [songs, setSongs] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState({'q':''});
    const link = `https://rapapi.herokuapp.com/api/search`;
<<<<<<< HEAD:src/components/Main/Content/Content.js
    console.log(songs);
=======
    const hitsUrl = "https://rapapi.herokuapp.com/api/hits";
    const firstUpdate = useRef(true);
>>>>>>> 63aae04edf1ddbc4b1b715d57f1d9c5491d5f963:src/Content/Content.js

    useEffect(() => {
        getHits();
    }, [])

    useEffect(() => {
        if (firstUpdate.current){
            firstUpdate.current = false;
            return;
        }
        getSong();
    }, [query]);

    const getSong = async () => {
        const response = await fetch(link, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(query)
        });
        const data = await response.json();
        setSongs(data.songs)
    }

    const getHits = async () => {
        const response = await fetch(hitsUrl);
        const data = await response.json();
        setSongs(data.songs);
    }

    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const getSearch = e => {
        e.preventDefault();
        if (search !== '') {
            setQuery({'q':search})
            setSearch('')
        }
    }

    return (
        <div className={styles.content}>
            {query.q == '' ?
                <div className={styles.search}>
                    <form onSubmit={getSearch}>
                        <input type="text" className={styles.search_input} value={search} onChange={updateSearch}/>
                        <button type='submit' className={styles.search_btn}>search</button>
                    </form>
                </div>
                :
                <div className={styles.search_active}>
                    <form onSubmit={getSearch}>
                        <input type="text" className={styles.search_input} value={search} onChange={updateSearch}/>
                        <button type='submit' className={styles.search_btn}>search</button>
                    </form>
                </div>
            }

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

export default Content