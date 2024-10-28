import React, { useState, useEffect } from "react";
import { events } from "../mockData";
import EventModal from "./EventModal";
import { FaSearch } from 'react-icons/fa'; // Import the search icon

const EventList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    // Simulate loading delay
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    const filteredEvents = events.filter(event =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <div className="spinner"></div>;

    return (
        <div className="event-list">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by event name or location"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="search-icon" /> {/* Add search icon */}
            </div>

            <div className="events">
                {filteredEvents.map(event => (
                    <div
                        key={event.id}
                        className="event-card"
                        onClick={() => setSelectedEvent(event)}
                    >
                        <h3>{event.name}</h3>
                        <p>{event.date} - {event.location}</p>
                    </div>
                ))}
            </div>

            {selectedEvent && (
                <EventModal event={selectedEvent} closeModal={() => setSelectedEvent(null)} />
            )}
        </div>
    );
};

export default EventList;
