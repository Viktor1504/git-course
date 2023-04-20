'use strict'

let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '').trim();

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i = 0; i < numberOfFilms; i++) {
        const recentlyViewedMovie = prompt('Один из последних просмотренных фильмов', '');
        const movieRating = +prompt('На сколько оцените его?', '');
        if (recentlyViewedMovie != null && movieRating != null && recentlyViewedMovie !== '' && movieRating !== '' && recentlyViewedMovie.length < 50) {
            console.log('done');
            personalMovieDB.movies[recentlyViewedMovie] = movieRating;
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalMovie() {
    if (personalMovieDB.count < 10) {
        alert('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalMovie();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres();
