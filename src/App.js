import React from 'react';
import './App.css';
import logo from './logo.PNG'; // or logo.svg

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Alkebuleum Foundation Logo" />
        <div className="container">
          <h1 className="title">Alkebuleum Foundation</h1>
          <p className="slogan">We support and grow the Alkebuleum Ecosystem</p>
          <div className="summary">
            <p>
              The Foundation’s aim is to realize more inclusive, fair, and just institutions
              of governance and of the global digital economy. To that end, it serves as the
              steward of the Alkebuleum protocol, supporting and growing the ecosystem until it
              becomes self-sufficient.
            </p>
          </div>
          {/* External link */}
          <a href="https://www.alkebuleum.org" target="_blank" rel="noopener noreferrer" className="learn-more-button">
            Learn More
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
