function movies(input) {
  let movies = [];
  while (input.length > 0) {
    let line = input.shift();
    let tokens = line.split(" ");
    if (tokens.includes("addMovie")) {
      tokens.shift();
      let name = tokens.join(" ");
      let movieName = { name: name };
      movies.push(movieName);
    } else if (tokens.includes("directedBy")) {
      let index = tokens.indexOf("directedBy");
      let name = tokens.slice(0, index).join(" ");
      let director = tokens.slice(index + 1, tokens.length).join(" ");
      for (const movie of movies) {
        if (movie.name === name) {
          movie.director = director;
        }
      }
    } else if (tokens.includes("onDate")) {
      let index = tokens.indexOf("onDate");
      let name = tokens.slice(0, index).join(" ");
      let date = tokens.slice(index + 1);

      for (const movie of movies) {
        if (movie.name === name) {
          movie.date = date[0];
        }
      }
    }
  }
  for (const movie of movies) {
    if (
      Object.keys(movie).includes("director") &&
      Object.keys(movie).includes("date") &&
      Object.keys(movie).includes("name")
    ) {
      console.log(JSON.stringify(movie));
    }
  }
}
movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen"
]);
