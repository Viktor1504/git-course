'use strict'

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: true,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count === 0 || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
                b = prompt('На сколько оцените его?', '');
            if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Вы класический зритель');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        personalMovieDB.private === true ? personalMovieDB.private = false : personalMovieDB.private = true;
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase();
            if (genre === null || genre === '') {
                i--;
            } else {
                personalMovieDB.genres.push(genre);
            }
            personalMovieDB.genres.sort();
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    }
};

