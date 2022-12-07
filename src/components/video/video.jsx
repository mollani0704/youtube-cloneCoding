import React from 'react';
import styles from './video.module.css';

const Video = props => {
    const displayType = props.display === 'list' ? styles.list : styles.grid;
    return (
        <>
            <li
                className={`${styles.container} ${displayType}`}
                onClick={() => {
                    props.setplayer(props.data);
                }}
            >
                <div className={styles.video}>
                    <img
                        src={props.data.snippet.thumbnails.medium.url}
                        className={styles.thumbnail}
                    />
                    <div className={styles.content}>
                        <p className={styles.title}>
                            {props.data.snippet.title}
                        </p>
                        <span className={styles.channelTitle}>
                            {props.data.snippet.channelTitle}
                        </span>
                    </div>
                </div>
            </li>
        </>
    );
};

export default Video;
