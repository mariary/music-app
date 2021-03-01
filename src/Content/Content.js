import React, {useState, useEffect} from 'react';
import styles from './Content.module.css'
import Content_Item from "./Content_Item/Content_Item";

const Content = (props) => {

    const [songs, setSongs] = useState([]);
    //const [post, setPost] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('west');

    const link = `https://rapapi.herokuapp.com/api/search/?q=${query}`;

    useEffect(() => {
        getSong();
        //getPostSong();
    }, [query])

    let obj = {}
    const getSong = async () => {
        const response = await fetch(link);
        const data = await response.json();
        setSongs(data.songs)
        obj = data.songs;
    }

    // const getPostSong = async () => {
    //     const response = await fetch(link, {method: 'POST'});
    //     const data = await response.json();
    //     setPost(data.songs)
    //     console.log(data.songs);
    // }

    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const getSearch = e => {
        e.preventDefault();
        if (search !== '') {
            setQuery(search)
            setSearch('')
        }
    }

    return (
        <div className={styles.content}>
            <div className={styles.search}>
                <form onSubmit={getSearch}>
                    <input type="text" className={styles.search_input} value={search} onChange={updateSearch}/>
                    <button type='submit' className={styles.search_btn}>search</button>
                </form>
            </div>
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