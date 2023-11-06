import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Styles/create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [author, setAuthor] = useState("");
  const [poll_type, setType] = useState("scq");
  const [votes, setVotes] = useState([0, 0, 0]);
  const [options, setOptions] = useState(["", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const poll = { poll_type, title, question, options, votes, author };

    setIsLoading(true);

    fetch("http://localhost:8000/api/polls/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(poll),
    }).then(() => {
      console.log("new poll added");
      setIsLoading(false);
      history.push("/");
    });
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);

    const updatedVotes = [...votes];
    updatedVotes[index] = 0;
    setVotes(updatedVotes);
  };

  const handleAddOption = () => {
    setOptions([...options, ""]);
    setVotes([...votes, 0]);
  };

  const handleRemoveOption = (index) => {
    const updatedOptions = [...options];
    updatedOptions.splice(index, 1);
    setOptions(updatedOptions);

    const updatedVotes = [...votes];
    updatedVotes.splice(index, 1);
    setVotes(updatedVotes);
  };

  return (
    <div className="createNew">
      <h2>Add a New Poll</h2>
      <form onSubmit={handleSubmit}>
        <label>Poll Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Poll Question:</label>
        <textarea
          required
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        ></textarea>

        <label>Poll Created by:</label>
        <input
          placeholder="Author"
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <label>Poll Type:</label>
        <select value={poll_type} onChange={(e) => setType(e.target.value)}>
          <option value="mcq">Multiple Choice Question</option>
          <option value="scq">Single Choice Question</option>
        </select>

        <label>Poll Options:</label>
        {options.map((option, index) => (
          <div key={index}>
            <input
              placeholder={"Option " + (index + 1)}
              type="text"
              required
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
            {index > 1 && (
              <button type="button" onClick={() => handleRemoveOption(index)}>
                Remove
              </button>
            )}
          </div>
        ))}
        {options.length <= 5 && (
          <button type="button" onClick={handleAddOption}>
            Add Option
          </button>
        )}

        {!isLoading && (
          <button id="createButton" type="submit">
            Create Poll
          </button>
        )}
        {isLoading && <button disabled>Creating Poll...</button>}
      </form>
    </div>
  );
};

export default Create;
