const podcasts = [
  {
    id: 1,
    title: "Tech Talk Today",
    genre: "Tech",
    host: "Alice",
    episodes: 45
  },
  {
    id: 2,
    title: "Music Vibes",
    genre: "Music",
    host: "Bob",
    episodes: 30
  },
  {
    id: 3,
    title: "History Uncovered",
    genre: "History",
    host: "Charlie",
    episodes: 20
  },
  {
    id: 4,
    title: "Daily News Digest",
    genre: "News",
    host: "Diana",
    episodes: 50
  },
  {
    id: 5,
    title: "Healthy Living Tips",
    genre: "Health",
    host: "Eve",
    episodes: 15
  },
  {
    id: 6,
    title: "The Coding Corner",
    genre: "Tech",
    host: "Frank",
    episodes: 40
  },
];


// Let users search for the podcast that they are looking for
/**
 * Use a filter method along with includes method to filter the titles where the user input is in the title
 * The listner will need to be tied to each new letter press as well as maybe enter/submit
 */
// Map out the function for displaying the podcast data based on the users search input
/**
 * @function searchByTitle
 * @param {podcastData<Object[]>} - Array of podcasts object data
 * @param {userInput<string>} - Array of genre object data
 * @returns {podcastDataByTitle<Object[]>} - Podcast object and the titles of each associated genre
 * 
 */
function searchByTitle (podcastData, userInput) {
    // Filter the podcasts data by title where the title.includes(userinput)
    const podcastDataByTitle = podcastData.filter(podcast => {
       const podcastTitle =  podcast.title.toLowerCase();
       const userSearch = userInput.toLowerCase();
       return podcastTitle.includes(userSearch);
    }); 
    return podcastDisplay(podcastDataByTitle);
}
 

document.getElementById('podcast-title-search').addEventListener('keyup', () => {
  const userInputs = document.getElementById('podcast-title-search').value;
  searchByTitle(podcasts, userInputs);
});

// Build the html template for the search bar in a seperate html doc
function podcastDisplay (podcastDataByTitle) {
    const podcastsContainer = document.getElementById('podcast-display');
    podcastsContainer.innerText = '';
    podcastDataByTitle.forEach(title => {
        const titleDiv = document.createElement('div');
        titleDiv.innerText = title.title; // Passed as a object by mistake
        podcastsContainer.append(titleDiv);
    });
}

// Ok this works as a starting point - called with npm run dev then /search.html in the browser
// Making this work with sorting will be great