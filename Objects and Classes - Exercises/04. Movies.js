function moviesInfo(array) {
  let movies = [];

  for (const film of array) {
    if (film.includes("addMovie")) {
      let movieName = film.split("addMovie ")[1];
      movies.push({ name: movieName });
    } else if (film.includes("directedBy")) {
      let [movie, director] = film.split(" directedBy ");
      let searching = movies.find((el) => el.name === movie);
      if (searching) searching["director"] = director;
    } else if (film.includes("onDate")) {
      let [movie, date] = film.split(" onDate ");
      let searching = movies.find((el) => el.name === movie);
      if (searching) searching["date"] = date;
    }
  }
  movies.forEach((movie) => {
    if (movie.name && movie.date && movie.director) {
      console.log(JSON.stringify(movie));
    }
  });
}
moviesInfo([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
moviesInfo([
  "addMovie The Avengers",
  "addMovie Superman",
  "The Avengers directedBy Anthony Russo",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
]);
