import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const LEADERBOARD_API = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

  useEffect(() => {
    console.log('Fetching Leaderboard from:', LEADERBOARD_API);
    fetch(LEADERBOARD_API)
      .then(response => response.json())
      .then(data => {
        const results = Array.isArray(data) ? data : data.results || [];
        console.log('Fetched Leaderboard:', results);
        setLeaderboard(results);
      })
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.map((entry, idx) => (
          <li key={idx}>{entry.user}: {entry.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
