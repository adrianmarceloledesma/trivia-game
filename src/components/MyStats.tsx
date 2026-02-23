
import type { GameStat } from "../types/GameStat";

import '../App.css'

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

  let bestScore = stats.reduce((numMax,stat) => {
    if(stat.score > numMax) numMax=stat.score
    return numMax
  },0)

  let lastScore =   gamesPlayed > 0 ? stats[gamesPlayed-1].score : 0
 
  let sumScores = stats.reduce((acumulador,stat) => {
    return (acumulador+stat.score)
  },0)
  // let totalScore = stats.reduce((acc, stat) => acc + stat.score, 0);

  let averageScore =  gamesPlayed>0 ? sumScores/gamesPlayed : 0;
 
  return (
    <div className="cont-components">
      <h3>My stats</h3>
      {stats.length > 0
        ? <div>
              <p><strong>Games played:</strong> {stats.length}</p>
              <p><strong>Best score:</strong> {bestScore}</p>
              <p><strong>Last score:</strong> {lastScore}</p>
              <p><strong>Average score:</strong> {averageScore}</p>
            </div>
       
        : <p>No scores yet</p>
      }

      
    </div>
  );
}

