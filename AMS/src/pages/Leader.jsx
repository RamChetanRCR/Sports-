import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Athletes.css';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState('nation');
  
  const divisions = [
    { id: 'nation', label: 'National' },
    { id: 'state', label: 'State' },
    { id: 'city', label: 'City' },
    { id: 'district', label: 'District' }
  ];

  useEffect(() => {
    // Simulating API call with realistic cricket data
    const fetchLeaderboardData = () => {
      const cricketData = [
        {
          id: 1,
          name: "Virat Kohli",
          elo: 2842,
          matches: 511,
          sixes: 267,
          division: "Delhi"
        },
        {
          id: 2,
          name: "Rohit Sharma",
          elo: 2785,
          matches: 428,
          sixes: 298,
          division: "Mumbai"
        },
        {
          id: 3,
          name: "KL Rahul",
          elo: 2654,
          matches: 243,
          sixes: 156,
          division: "Karnataka"
        },
        {
          id: 4,
          name: "MS Dhoni",
          elo: 2598,
          matches: 538,
          sixes: 359,
          division: "Jharkhand"
        },
        {
          id: 5,
          name: "Hardik Pandya",
          elo: 2487,
          matches: 187,
          sixes: 145,
          division: "Gujarat"
        },
        {
          id: 6,
          name: "Ravindra Jadeja",
          elo: 2456,
          matches: 298,
          sixes: 89,
          division: "Gujarat"
        },
        {
          id: 7,
          name: "Shubman Gill",
          elo: 2398,
          matches: 89,
          sixes: 67,
          division: "Punjab"
        },
        {
          id: 8,
          name: "Rishabh Pant",
          elo: 2376,
          matches: 165,
          sixes: 123,
          division: "Delhi"
        }
      ];
      setLeaderboardData(cricketData);
    };

    fetchLeaderboardData();
  }, [selectedDivision]);

  return (
    <div className="athletes-container">
      <div className="player-profile">
        <h1>Cricket Leaderboard</h1>
        
        <div className="division-selector">
          <select 
            value={selectedDivision}
            onChange={(e) => setSelectedDivision(e.target.value)}
            className="division-dropdown"
          >
            {divisions.map(division => (
              <option key={division.id} value={division.id}>
                {division.label}
              </option>
            ))}
          </select>
        </div>

        <div className="leaderboard-grid">
          {leaderboardData.map((player, index) => (
            <Link to={`/athletes/${player.id}`} key={player.id} className="performance-card">
              <h3>#{index + 1} {player.name}</h3>
              <div className="performance-stats">
                <p>
                  <span>ICC Rating:</span>
                  <span>{player.elo}</span>
                </p>
                <p>
                  <span>Total Matches:</span>
                  <span>{player.matches}</span>
                </p>
                <p>
                  <span>Career Sixes:</span>
                  <span>{player.sixes}</span>
                </p>
                <p>
                  <span>State:</span>
                  <span>{player.division}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
