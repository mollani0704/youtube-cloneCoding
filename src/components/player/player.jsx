import React from 'react';
import styles from './player.module.css';

const Player = props => {
    return (
        <div>
            <iframe
                id="ytplayer"
                type="text/html"
                width="720"
                height="405"
                src={`https://www.youtube.com/embed/${props.player.id}`}
            ></iframe>
            <h3>{props.player.snippet.title}</h3>
            <pre className={styles.description}>
                {props.player.snippet.description}
            </pre>
        </div>
    );
};

export default Player;
