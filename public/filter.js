const podcasts = [
  {
    id: 1,
    title: "Tech Talk Today",
    genre: "Tech",
    genreNames: ["AI", "Software"],
    host: "Alice",
    episodes: 45,
    updated: "2025-08-01T12:00:00.000Z"
  },
  {
    id: 2,
    title: "Music Vibes",
    genre: "Music",
    genreNames: ["Pop"],
    host: "Bob",
    episodes: 30,
    updated: "2025-09-10T09:30:00.000Z"
  },
  {
    id: 3,
    title: "History Uncovered",
    genre: "History",
    host: "Charlie",
    episodes: 20,
    updated: "2024-10-15T15:45:00.000Z"
  },
  {
    id: 4,
    title: "Daily News Digest",
    genre: "News",
    genreNames: ["Politics", "Economy"],
    host: "Diana",
    episodes: 50,
    updated: "2025-10-23T06:00:00.000Z"
  },
  {
    id: 5,
    title: "Healthy Living Tips",
    genre: "Health",
    genreNames: ["Nutrition"],
    host: "Eve",
    episodes: 15,
    updated: "2025-10-23T11:50:00.000Z"
  },
  {
    id: 6,
    title: "The Coding Corner",
    genre: "Tech",
    host: "Frank",
    episodes: 40,
    updated: "2025-04-15T18:20:00.000Z"
  },
];


// Filter by genre
/**
 * Going to use a dropdown menu that dynamically creates the genre names from all genre names
 * Filter by genre name user input/click and return the new array with all objects that have that genre name
 * 
 */
function genreFilter (podcasts, genreName) {
    // Filter the podcasts and return only the podcasts that contain the relavant genre names
    // Loop through the podcasts and filter for podcasts that match the user inputed genre/s
    console.log(podcasts);
    console.log(genreName);
    console.log(podcasts[0].genreNames);
    const genreFilteredArray = podcasts.filter(podcast => podcast.genreNames && podcast.genreNames.some(genre => genre === genreName));
    console.log(genreFilteredArray);
    return podcastDisplay(genreFilteredArray);
    
}
// Run the filter function on dropdown menu selection
document.getElementById('genre-filter-menu').addEventListener('change', (event) => {
    const userInputGenre = event.target.value;
    genreFilter(podcasts, userInputGenre);
});


// Build the html template for the search bar in a seperate html doc
function podcastDisplay (genreFilteredArray) {
    console.log(genreFilteredArray);
    const podcastsContainer = document.getElementById('podcast-display');
    podcastsContainer.innerText = '';
    genreFilteredArray.forEach(podcast => {
        const titleDiv = document.createElement('div');
        titleDiv.innerText = podcast.title; // Passed as a object by mistake (remeber its all converted to strings hence object object without a .key)
        podcastsContainer.append(titleDiv);
    });
}
