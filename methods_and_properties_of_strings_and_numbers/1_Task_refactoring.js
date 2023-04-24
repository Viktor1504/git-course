'use strict'

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: () => {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '').trim();
        while (personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < personalMovieDB.count; i++) {
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
    },
    detectPersonalMovie: () => {
        if (personalMovieDB.count < 10) {
            alert('Просмотренно довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB)
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (personalMovieDB.genres[i - 1] == null || personalMovieDB.genres[i - 1] === '') {
                i--;
            }
        }
        personalMovieDB.genres.forEach((element, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${element}`);
        });

    },
    toggleVisibleMyDB: () => {
        personalMovieDB.private = !personalMovieDB.private;
    }
};


// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalMovie();
//personalMovieDB.showMyDB(personalMovieDB.private);
personalMovieDB.writeYourGenres();
//personalMovieDB.toggleVisibleMyDB();
//console.log(personalMovieDB.private);





