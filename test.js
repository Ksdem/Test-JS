const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a1 = prompt('Один из последних просомтренных фильмв?', ''),
    a2 = prompt('На сколько оцениваете его?', ''),
    b1 = prompt('Один из последних просомтренных фильмв?', ''),
    b2 = prompt('На сколько оцениваете его?', '');
personalMovieDB.movies[a1] = a2;
personalMovieDB.movies[b1] = b2;
console.log(personalMovieDB);