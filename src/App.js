import React from 'react';
import EventList from './components/EventList';
import './styles.css'; // Import global CSS for styling

const App = () => {
  return (
    <div className="app-container">
      <header className="navbar">
        <h1>EventSpot Lite</h1>
      </header>
      <EventList />  {/* Load the event listing page */}
    </div>
  );
};

export default App;
