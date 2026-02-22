
import type { GameStat } from "../types/GameStat";

interface YourStatsProps {
  stats: GameStat[];
}

export default function Stats({ stats }: YourStatsProps) {
  // 5️⃣ Guardar resultados en localStorage
  //
  // Mostrar:
  //
  // Best score
  //
  // Games played
  /*
    │ 📊 Your Stats         │
    ├───────────────────────┤
    │ Games played:   12    │
    │ Best score:     9     │
    │ Last score:     7     │
    │ Average score:  6.8   │
    
    PARA TENER ESTOS DATOS TENGO QUE OBTENERLOS DE LA LISTA DE ARRAYS QUE VOY A CREAR
    GAMES PLAYED LO TENGO QUE .LENGTH DE LA MATRIZ
    


    YA TENGO LOS DATOS AHORA TENGO QUE USAR LOCALSTORAGE PARA GUARDARLOS Y DE
    STATS OBTENER LAS ESTADISTICAS MEDIANTE METODOS
    
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
    <div>
      <h3>My stats</h3>
      {stats.length > 0
        ? <div>
              <p>Games played: {stats.length}</p>
              <p>Best score: {bestScore}</p>
              <p>Last score: {lastScore}</p>
              <p>Average score: {averageScore}</p>
            </div>
       
        : <p>No scores yet</p>
      }

      
    </div>
  );
}
