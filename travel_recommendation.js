// Fetch data from the JSON file
fetch('travel_recommendation_api.json')
    .then(response => {
        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the JSON data
    })
    .then(data => {
        console.log(data); // Log the data to the console to verify
        displayTravelRecommendations(data); // Call a function to display the data
    })
    .catch(error => {
        console.error('Error fetching the travel recommendations:', error);
    });

// Function to display travel recommendations (optional)
function displayTravelRecommendations(recommendations) {
    recommendations.forEach(recommendation => {
        console.log(`Place: ${recommendation.name}, Image URL: ${recommendation.imageUrl}`);
        // You can add code here to dynamically display the data on your webpage
    });
}
[
    {
        "name": "Paris, France",
        "imageUrl": "paris.jpg",
        "description": "The city of lights and love, known for the Eiffel Tower and exquisite cuisine."
    },
    {
        "name": "Tokyo, Japan",
        "imageUrl": "tokyo.jpg",
        "description": "A bustling metropolis blending traditional culture with modern technology."
    },
    {
        "name": "New York, USA",
        "imageUrl": "newyork.jpg",
        "description": "The city that never sleeps, famous for Times Square and Central Park."
    }
]
