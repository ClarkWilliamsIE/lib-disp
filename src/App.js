import React, { useEffect, useState } from "react";

const CALENDAR_ID = "paraparaumumake@gmail.com";  // Replace with your calendar ID
const API_KEY = "AIzaSyD2qBhlb_rQHGh3kJ_ENFrxsRoFFmfrX8A";  // Replace with your API Key

export default function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const today = new Date();
    const timeMin = new Date(today.setHours(0, 0, 0, 0)).toISOString();
    const timeMax = new Date(today.setHours(23, 59, 59, 999)).toISOString();

    const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setEvents(data.items || []))
      .catch((err) => {
        console.error("Error fetching events", err);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
