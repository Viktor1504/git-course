'use strict'

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

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

if (personalMovieDB.count < 10) {
    alert('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

console.log(personalMovieDB.movies);