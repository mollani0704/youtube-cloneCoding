import React from 'react';
import Video from '../video/video';
import styles from './videoLists.module.css';

const VideoList = props => {
    return (
        <ul className={styles.videoLists}>
            {console.log(props.datas)}
            {props.datas.map(data => (
                <Video
                    key={data.id}
                    data={data}
                    setplayer={props.setplayer}
                    display={props.display}
                />
            ))}
        </ul>
    );
};

export default VideoList;
