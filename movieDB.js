//Create an array of movie objects with properties: title, rating, hasWatched
var myMovies = [
    {name: "Avatar",
     rating: 4.5,
     hasWatched: true},
    {name: "Frozen 2",
     rating: 5,
     hasWatched: true},
    {name: "Twilight",
     rating: 0,
     hasWatched: false},
    {name: "13th Amendment",
     rating: 5,
     hasWatched: false}
]

const movieResult = function(movie){
    let watched = (movie.hasWatched ? "seen":"not seen");
    let myRating = movie.rating;
    let name = movie.name;
    console.log("I have " + watched + " \"" + name + "\" and I give it " + myRating + " stars.")
}

for(const movie of myMovies){
    movieResult(movie);
};
