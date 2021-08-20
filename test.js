const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a1 = prompt('Один из последних просомтренных фильмв?', ''),
        a2 = prompt('На сколько оцениваете его?', '');
    if(a1!= null && a2!=null && a1 !=''  && a2 !=''&& a1.length<50){
        personalMovieDB.movies[a1] = a2;
    } else {
        i--;
    }
}
if(personalMovieDB.count<10){
    console.log("Просмотрено довольно мало фильмов");
}else if(personalMovieDB.count>=10&&personalMovieDB<30){
    console.log("Вы классический зритель");
}else if(personalMovieDB.count>=30){
    console.log("Вы киноман");
}else {
    console.log('Произошла ошибка');
}




console.log(personalMovieDB);


