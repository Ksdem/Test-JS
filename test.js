let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a1 = prompt('Один из последних просомтренных фильмв?', ''),
            a2 = prompt('На сколько оцениваете его?', '');

        if (a1 != null && a2 != null && a1 != '' && a2 != '' && a1.length < 50) {
            personalMovieDB.movies[a1] = a2;
        } else {

            i--;
            console.log('error');
        }
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    switch (true) {
        case personalMovieDB.count < 10:
            console.log('Просмотрено довольно мало фильмов');
            break;
        case personalMovieDB.count > 10 && personalMovieDB.count < 30:
            console.log('Вы классический зритель');
            break;
        case personalMovieDB.count > 30:
            console.log('Вы киноман');
            break;
        default:
            console.log('Произошла ошибка');
    }
}

detectPersonalLevel();


function showMyDB() {
    switch (true) {
        case personalMovieDB.privat === false:
            console.log(personalMovieDB);
            break;
        default:
            console.log('privat true');
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        /* let writeGenres=+ prompt(`Ваш любимый жанр под номером ${i}`);*/
        personalMovieDB.genres[i - 1] =prompt(`Ваш любимый жанр под номером ${i}`);
    }

}

writeYourGenres();
