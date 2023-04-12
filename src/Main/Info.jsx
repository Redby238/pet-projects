import React from 'react';
import styles from './Main.module.scss'
import Button from "../UI/Button/Button";

const Info = ({movie}) => {


    const addToFavorites = (movieName) => {
        let favorites = localStorage.getItem('favMovies')
        if (favorites) {
            favorites = JSON.parse(favorites)
            localStorage.setItem("favMovies", movieName)
            alert(`${movieName} теперь в избранном!`)
        }

    }

    return (
        <div className={styles.info}>
            <img src={movie.logo} alt={movie.name} width={'200'}
            style={{opacity: 0.7}}

            />
            <div className={styles.additional}>
                <span>{movie.year}</span>
                <span>{movie.limitAge}</span>
                <span>{movie.rating}</span>
                <span>{movie.duration}</span>
            </div>
            <div className={styles.description}></div>
            <div className={styles.buttons}></div>
            <Button cb={addToFavorites}>
                <i className={'bx bx-plus'} styles={{color: '#c62e21'}}></i>
                <span>Play</span>
            </Button>
        </div>
    );
};

export default Info;