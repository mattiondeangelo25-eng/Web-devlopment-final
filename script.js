// script.js

// Event API Integration (Example using an API like Eventbrite)
const eventList = document.getElementById('event-list');

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

document.addEventListener('DOMContentLoaded', fetchEvents);

// Google Map Integration
function initMap() {
    const mapOptions = {
        center: { lat: 40.7128, lng: -74.0060 },  // Replace with your campus coordinates
        zoom: 15,
        mapTypeId: 'roadmap'
    };

    const map = new google.maps.Map(document.getElementById('map-container'), mapOptions);
}

// Load Google Map script
const script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
script.async = true;
document.body.appendChild(script);