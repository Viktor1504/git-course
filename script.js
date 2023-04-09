'use strict'

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let lastWatchingMovie1 = prompt('Один из просмотренных фильмов?', '');
let ratingMovie1 = prompt('На сколько оцените его?', '');

let lastWatchingMovie2 = prompt('Один из просмотренных фильмов?', '');
let ratingMovie2 = prompt('На сколько оцените его?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

personalMovieDB.movies[lastWatchingMovie1] = ratingMovie1;
personalMovieDB.movies[lastWatchingMovie2] = ratingMovie2;

console.log(personalMovieDB);


