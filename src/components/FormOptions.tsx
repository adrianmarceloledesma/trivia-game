import './FormOptions.css';


interface FormOptionsProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function FormOptions({
  handleSubmit,
  handleChange,
}: FormOptionsProps) {
  return (
    <div >
      <form className="cont-formOptions" onSubmit={handleSubmit}>
        <div>
          <label><strong>Category:</strong> </label> <br/>
          <select name="category" id="category" onChange={handleChange}>
            <option value="general_knowledge">General Knowledge</option>
            <option value="music">Music</option>
            <option value="sport_and_leisure">Sport & Leisure</option>
            <option value="film_and_tv">Film & TV</option>
            <option value="arts_and_literature">Arts & Literature</option>
            <option value="history">History</option>
            <option value="society_and_culture">Society & Culture</option>
            <option value="science">Science</option>
            <option value="geography">Geography</option>
            <option value="food_and_drink">Food & Drink</option>
          </select>
        </div>
        <div>
          <label><strong>Difficulty:</strong> </label> <br />
          <select name="difficulty" id="difficulty" onChange={handleChange}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div>
          <input type="submit" value="Start Quiz" />
        </div>
      </form>
    </div>
  );
}
