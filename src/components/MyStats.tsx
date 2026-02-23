import type { GameStat } from "../types/GameStat";
import iconGame from '../images/game.png';
import iconBestScore from '../images/best-score.png';
import iconLastScore from '../images/last-score.png';
import iconAveScore from '../images/average-score.png'
import './MyStats.css'

interface YourStatsProps {
  stats: GameStat[];
}

export default function Stats({ stats }: YourStatsProps) {
  /*
    │  Your Stats         │
    ├───────────────────────┤
    │ Games played:   12    │
    │ Best score:     9     │
    │ Last score:     7     │
    │ Average score:  6.8   │
    
    
    */

  let gamesPlayed = stats.length;

  let bestScore = stats.reduce((numMax, stat) => {
    if (stat.score > numMax) numMax = stat.score;
    return numMax;
  }, 0);

  let lastScore = gamesPlayed > 0 ? stats[gamesPlayed - 1].score : 0;

  let sumScores = stats.reduce((acumulador, stat) => {
    return acumulador + stat.score;
  }, 0);
  // let totalScore = stats.reduce((acc, stat) => acc + stat.score, 0);

  let averageScore = gamesPlayed > 0 ? sumScores / gamesPlayed : 0;

  return (
    <div className="cont-stats">
      <h3>My stats</h3>
      {stats.length > 0 ? (
        <div className="cont-scores">
          <div className="games-played">
            <div>
              <img src={iconGame}/>
              <p><strong>Games played</strong> </p>
            </div>
            <p className="score-number">{stats.length}</p>
          </div>
          <div>
            <div>
              <img src={iconBestScore}  />
              <p><strong>Best score</strong></p>
            </div>
            <p className="score-number">{bestScore}</p>
          </div>
          <div>
            <div>
              <img src={iconLastScore} />
              <p><strong>Last score</strong> </p>
            </div>
            <p className="score-number">{lastScore}</p>
          </div>
          <div>
            <div>
              <img src={iconAveScore}  />
              <p><strong>Average score</strong> </p>
            </div>
            <p className="score-number">{averageScore}</p>
          </div>
        </div>
      ) : (
        <p className="no-scores">No scores yet</p>
      )}
    </div>
  );
}
