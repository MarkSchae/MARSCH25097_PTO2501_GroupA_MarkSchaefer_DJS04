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

  // --- Added Podcasts ---
  {
    id: 7,
    title: "Pop Culture Weekly",
    genre: "Entertainment",
    genreNames: ["Pop", "Celebrities"],
    host: "Grace",
    episodes: 60,
    updated: "2025-09-30T10:00:00.000Z"
  },
  {
    id: 8,
    title: "Global Pop Scene",
    genre: "Music",
    genreNames: ["Pop", "World"],
    host: "Henry",
    episodes: 25,
    updated: "2025-07-15T08:45:00.000Z"
  },
  {
    id: 9,
    title: "Pop Music Evolution",
    genre: "Music",
    genreNames: ["Pop"],
    host: "Ivy",
    episodes: 40,
    updated: "2025-05-20T14:10:00.000Z"
  },
  {
    id: 10,
    title: "Chart Toppers",
    genre: "Music",
    genreNames: ["Pop"],
    host: "Jack",
    episodes: 32,
    updated: "2025-10-01T12:30:00.000Z"
  },
  {
    id: 11,
    title: "Pop Remix Hour",
    genre: "Music",
    genreNames: ["Pop", "Dance"],
    host: "Kate",
    episodes: 28,
    updated: "2025-09-05T16:15:00.000Z"
  },
  {
    id: 12,
    title: "Behind the Pop Hits",
    genre: "Music",
    genreNames: ["Pop"],
    host: "Leo",
    episodes: 35,
    updated: "2025-03-18T09:00:00.000Z"
  },
  {
    id: 13,
    title: "Pop Spotlight",
    genre: "Music",
    genreNames: ["Pop", "Interviews"],
    host: "Mia",
    episodes: 42,
    updated: "2025-08-22T20:00:00.000Z"
  },
  {
    id: 14,
    title: "The Pop Breakdown",
    genre: "Music",
    genreNames: ["Pop"],
    host: "Nate",
    episodes: 37,
    updated: "2025-02-10T11:40:00.000Z"
  },
  {
    id: 15,
    title: "Pop Legends Rewind",
    genre: "Music",
    genreNames: ["Pop", "Retro"],
    host: "Olivia",
    episodes: 48,
    updated: "2025-06-28T17:25:00.000Z"
  },
  {
    id: 16,
    title: "Pop Next Door",
    genre: "Music",
    genreNames: ["Pop"],
    host: "Paul",
    episodes: 22,
    updated: "2025-01-05T10:05:00.000Z"
  }
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
    podcastDisplay(genreFilteredArray);
    
}
// Run the filter function on dropdown menu selection
document.getElementById('genre-filter-menu').addEventListener('change', (event) => {
    const userInputGenre = event.target.value;
    genreFilter(podcasts, userInputGenre);
});


// Build the html template for the search bar in a seperate html doc
function podcastDisplay (genreFilteredArray, start, end) {
    if(!start && !end) {
        start = 0;
        end = 2;
    }
    console.log(start);
    console.log(end);
    console.log(genreFilteredArray);
    const podcastsContainer = document.getElementById('podcast-display');
    podcastsContainer.innerText = '';
    genreFilteredArray.slice(start, end).forEach(podcast => {
        const titleDiv = document.createElement('div');
        titleDiv.innerText = podcast.title; // Passed as a object by mistake (remeber its all converted to strings hence object object without a .key)
        podcastsContainer.append(titleDiv);
    });

    // Listner for the pagination
    document.querySelector('.pagination').addEventListener('click', (event) => {
        const pageNumber = event.target.dataset.pagination;
        parseInt(pageNumber);
        goToPage(pageNumber, genreFilteredArray);
    });
}



// 10 elements per page
function goToPage(pageNumber, genreFilteredArray) {
    const itemsPerPage = 2; // Pagination and slice require numbers 
  const start = (pageNumber - 1) * itemsPerPage; // Start from the end of the last page in terms of index of the displyed array
  const end = start + itemsPerPage;
  podcastDisplay(genreFilteredArray, start, end);
}

// Initial pagination setup works with limited mock data

