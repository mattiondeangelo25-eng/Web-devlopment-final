// script.js

// Event API Integration (Example using an API like Eventbrite)
const eventList = document.getElementById('event-list');
const mapContainer = document.getElementById('map-container');

async function fetchEvents() {
    const response = await fetch('https://api.example.com/events'); // Replace with your API URL
    const events = await response.json();

    events.forEach(event => {
        const eventItem = document.createElement('li');
        eventItem.classList.add('list-group-item');
        eventItem.innerHTML = `
            <h5>${event.name}</h5>
            <p>${event.date} - ${event.location}</p>
            <button class="btn btn-info">RSVP</button>
        `;
        eventList.appendChild(eventItem);
    });
}

if (eventList) {
    document.addEventListener('DOMContentLoaded', fetchEvents);
}

// Only load Google Maps JS API when there is no iframe embed inside map-container.
if (mapContainer && !mapContainer.querySelector('iframe')) {
    window.initMap = function() {
        const mapOptions = {
            center: { lat: 40.7128, lng: -74.0060 },  // Replace with your campus coordinates
            zoom: 15,
            mapTypeId: 'roadmap'
        };

        new google.maps.Map(mapContainer, mapOptions);
    };

    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
    script.async = true;
    document.body.appendChild(script);
}