import './Finished.css'
import trophy from '../trophy.png'

interface FinishedProps{
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    points:number,
    setChangeSettings:() => void;

}

export default function Finished({handleSubmit,points,setChangeSettings}:FinishedProps) {
  return (
    <div className="cont-finished">
      <h3>Game Finished</h3>
      <p className='welldone'>Well done!!</p>
      <img src={trophy} alt="" />
      <p>You have reached <strong>{points}</strong> of <strong>10</strong> points</p>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Play again" />
      </form>
      <input
        type="button"
        value="Change settings"
        onClick={() => setChangeSettings()}
      />
    </div>
  );
}
