import React, { useEffect, useState } from 'react';
import VideoList from './components/videoLists/videoLists';
import Search from './components/search/search';
import Player from './components/player/player';
import styles from './app.module.css';

const App = ({ youtube }) => {
    const [datas, setdatas] = useState([]);
    const [player, setplayer] = useState(null);

    useEffect(() => {
        youtube
            .mostPopular() //
            .then(result => setdatas(result.items));
    }, []);

    const findPlayerId = video => {
        setplayer(video);
    };

    const handleSearch = name => {
        youtube //
            .search(name) //
            .then(result =>
                result.items.map(item => ({ ...item, id: item.id.videoId })),
            )
            .then(items => {
                setdatas(items);
                setplayer(null);
            });
    };

    return (
        <div className={styles.app}>
            <Search onSearch={handleSearch} />
            <section className={styles.content}>
                {player && (
                    <div className={styles.player}>
                        {<Player player={player} />}
                    </div>
                )}
                <div className={styles.videoList}>
                    <VideoList
                        datas={datas}
                        setplayer={findPlayerId}
                        display={player ? 'list' : 'grid'}
                    />
                </div>
            </section>
        </div>
    );
};

export default App;
