// src/App.js
import React, { useState } from 'react';
import Stats from './stats';
import './App.css';
import logger from '../LoggingMiddleware/logger';

function App() {
  const [link, setLink] = useState('');
  const [shortLink, setShortLink] = useState('');
  const [showStats, setShowStats] = useState(false);

  const handleShortenLink = () => {
    if (!link.trim()) return;
    const code = Math.random().toString(36).substring(2, 8);
    const newLink = `https://sho.rt/${code}`;
    setShortLink(newLink);
    logger(`Shortened URL created: ${newLink}`);
  };

  return (
    <div className="App">
      <h1>Link Shortener</h1>
      <input
        type="text"
        placeholder="Paste long URL here..."
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <button onClick={handleShortenLink}>Shorten</button>
      {shortLink && (
        <p>
          Short URL: <a href={shortLink}>{shortLink}</a>
        </p>
      )}
      <button onClick={() => setShowStats(!showStats)}>
        {showStats ? 'Hide Stats' : 'Show Stats'}
      </button>
      {showStats && <Stats />}
    </div>
  );
}

export default App;
