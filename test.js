const personalMovieDB = {

    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
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
    },
    showMyDB: function () {
        switch (true) {
            case personalMovieDB.privat === false:
                console.log(personalMovieDB);
                break;
            default:
                console.log('privat true');
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre=prompt(`Ваш любимый жанр под номером ${i}`);

            if(genre===null || genre===''){
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            }else {
                personalMovieDB.genres[i - 1] =genre;
            }
        }
        personalMovieDB.genres.forEach((item,i)=>{
            console.log(`Любимый жанр ${i+1}-это ${item4}`)
        })

    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;

        } else {
            personalMovieDB.privat = true;
        }
    }

};









