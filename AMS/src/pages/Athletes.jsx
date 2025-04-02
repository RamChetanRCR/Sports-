import React from 'react'
import './Athletes.css'

const Athletes = () => {
  // Sample player data - this would typically come from an API/database
  const playerStats = {
    name: "Virat Kohli",
    matches: 492,
    runs: 25450,
    battingAverage: 53.62,
    centuries: 75,
    halfCenturies: 134,
    sixes: 351,
    fours: 2345,
    highestScore: 254,
    eloRating: 2842, // Added ELO rating
    recentPerformances: [
      {
        match: "IND vs AUS",
        date: "2023-11-19", 
        runs: 85,
        balls: 116,
        sixes: 2,
        fours: 8
      },
      {
        match: "IND vs NZ",
        date: "2023-11-15",
        runs: 117,
        balls: 132, 
        sixes: 4,
        fours: 11
      },
      {
        match: "IND vs ENG",
        date: "2023-11-10",
        runs: 65,
        balls: 78,
        sixes: 1, 
        fours: 7
      }
    ]
  }

  return (
    <div className="athletes-container">
      <div className="player-profile">
        <h1>{playerStats.name}</h1>
        
        <div className="elo-rating">
          <h2>ELO Rating</h2>
          <div className="stat-box">
            <h3>Current Rating</h3>
            <p>{playerStats.eloRating}</p>
          </div>
        </div>

        <div className="career-stats">
          <h2>Career Statistics</h2>
          <div className="stats-grid">
            <div className="stat-box">
              <h3>Matches</h3>
              <p>{playerStats.matches}</p>
            </div>
            <div className="stat-box">
              <h3>Total Runs</h3>
              <p>{playerStats.runs}</p>
            </div>
            <div className="stat-box">
              <h3>Average</h3>
              <p>{playerStats.battingAverage}</p>
            </div>
            <div className="stat-box">
              <h3>Centuries</h3>
              <p>{playerStats.centuries}</p>
            </div>
            <div className="stat-box">
              <h3>Half Centuries</h3>
              <p>{playerStats.halfCenturies}</p>
            </div>
            <div className="stat-box">
              <h3>Sixes</h3>
              <p>{playerStats.sixes}</p>
            </div>
            <div className="stat-box">
              <h3>Fours</h3>
              <p>{playerStats.fours}</p>
            </div>
            <div className="stat-box">
              <h3>Highest Score</h3>
              <p>{playerStats.highestScore}</p>
            </div>
          </div>
        </div>

        <div className="recent-performances">
          <h2>Recent Performances</h2>
          <div className="performances-list">
            {playerStats.recentPerformances.map((performance, index) => (
              <div key={index} className="performance-card">
                <h3>{performance.match}</h3>
                <p className="date">{performance.date}</p>
                <div className="performance-stats">
                  <p>Runs: {performance.runs}</p>
                  <p>Balls: {performance.balls}</p>
                  <p>Sixes: {performance.sixes}</p>
                  <p>Fours: {performance.fours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Athletes