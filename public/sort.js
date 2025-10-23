const podcasts = [
  {
    id: 1,
    title: "Tech Talk Today",
    genre: "Tech",
    host: "Alice",
    episodes: 45,
    updated: "2025-08-01T12:00:00.000Z"
  },
  {
    id: 2,
    title: "Music Vibes",
    genre: "Music",
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
    host: "Diana",
    episodes: 50,
    updated: "2025-10-23T06:00:00.000Z"
  },
  {
    id: 5,
    title: "Healthy Living Tips",
    genre: "Health",
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



// User must have the ability to sort by alphabet and newest to oldest(vise versa)

// Map out the function for displaying the podcast data based on the users search input
/**
 * Function that listens for changes to the users sort inputs 
 * Sorts the podcasts alphabetically or newest/oldest in order
 * 
 * @function sortByUserInput
 * @param {podcastData<Object[]>} - Array of podcasts object data
 * @param {userInput<string>} - User input as text
 * @returns {podcastDataByTitle<Object[]>} - Podcast object and the podcasts sorted by userInput
 * 
 */

// Add listner
const radioSortButtonContainer = document.getElementById('radio-sort-buttons');
//const radioSortButtons = document.querySelectorAll('.podcast-radio-sort-buttons');
radioSortButtonContainer.addEventListener('change', (event) => {
        const radioSortbutton = event.target;
        if(radioSortbutton.checked) {
            // Run function based on which button it is
            sortFn(podcasts, radioSortbutton.value);
        }
});

// Function to sort A - Z 
function sortFn (podcasts, sortType) {// Do not hardcode all this when refactor. Use dynamic keys
    const sortByTitle = podcasts.map(podcast => {
        return podcast[sortType];    
    });
    console.log(sortByTitle);
    const sorted = sortByTitle.sort();
    // Sort returns 0, 1, or -1 from ASCII to order elements. Sort can order based on a internal function
    return podcastDisplay(sorted); // Remember that sort modifies the original array, can use toSort  
}

// Build the html template for the search bar in a seperate html doc
function podcastDisplay (sortByTitle) {
    console.log(sortByTitle);
    const podcastsContainer = document.getElementById('podcast-display');
    podcastsContainer.innerText = '';
    sortByTitle.forEach(title => {
        const titleDiv = document.createElement('div');
        titleDiv.innerText = title; // Passed as a object by mistake
        podcastsContainer.append(titleDiv);
    });
}

// Ok this works but seperate listners for each group (reverse and normal) in react refactor

// Might do the filter here as the sort needs to work with filter and search
/**
 * I will probably need multiple states for search, filter, sort, etc
 * Update with listners the shared state but do not modify the main dataset
 * Research into Zustand (agnostic and popular). Might do a lot of the state management for free
 */
