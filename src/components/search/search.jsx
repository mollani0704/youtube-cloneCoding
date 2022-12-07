import React, { useCallback, useRef } from 'react';
import styles from './search.module.css';

const Search = props => {
    const inputRef = useRef();
    const onSubmit = useCallback(event => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onSearch(name);
        inputRef.current.value = '';
    });

    return (
        <form className={styles.search} onSubmit={onSubmit}>
            <div className={styles.logo}>
                <div className={styles.icon}>
                    <i className="fa-brands fa-youtube"></i>
                </div>
                <h1 className={styles.title}>Youtube</h1>
            </div>

            <input
                ref={inputRef}
                className={styles.searchBar}
                type="text"
                placeholder="Search.."
            />
            <button className={styles.search_btn}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    );
};

export default Search;
