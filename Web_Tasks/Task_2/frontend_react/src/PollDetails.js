import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";
import "./Styles/poll-details.css";

const PollDetails = () => {
  const { id } = useParams();
  const [selectedOption, setSelectedOption] = useState(null);
  const radioButtons = document.querySelectorAll('input[type="radio"]');

  const {
    data: Poll,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/api/polls/" + id + "/");
  const totalVotes = Poll?.votes.reduce((total, count) => total + count, 0);

  const handleOptionChange = (index) => {
    setSelectedOption(index);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption !== null) {
      Poll.votes[selectedOption]++;
    }
  };

  let selectedRadio = null;
  radioButtons.forEach((radio) => {
    radio.addEventListener("click", (event) => {
      const target = event.target;
      if (target === selectedRadio) {
        target.checked = false;
        selectedRadio = null;
      } else {
        selectedRadio = target;
      }
    });
  });

  return (
    <div className="poll-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {Poll && (
        <article className="poll_container">
          <h3>{Poll.title}</h3>
          <p>Created by - {Poll.author}</p>
          <h2>{Poll.question}</h2>
          <p>Options</p>

          <div className="total_votes">Total Votes - {totalVotes}</div>
          <form onSubmit={handleSubmit}>
            <div className="poll_options">
              {Poll.options.map((option, index) => (
                <div className="poll_outerOption" key={index}>
                  <div
                    style={{
                      height: totalVotes === 0 ? "25px" : "300px",
                      display: "flex",
                      alignItems: "flex-end",
                      border: "solid 2px #00f7ff",
                      marginTop: "10px",
                    }}
                  >
                    <div
                      className="poll_graph"
                      style={{
                        height:
                          totalVotes === 0
                            ? "25px"
                            : `${
                                (Poll.votes[index] / totalVotes) * 300 + 18
                              }px`,
                        backgroundColor:
                          totalVotes === 0 ? "transparent" : "#00f7ff",
                      }}
                    >
                      {Poll.votes[index]}
                    </div>
                  </div>
                  <div className="poll_option">
                    <label>
                      <input
                        name="options"
                        type={
                          Poll["poll_type"] === "mcq" ? "checkbox" : "radio"
                        }
                        required={!Poll["poll_type"] === "mcq"}
                        onClick={() => handleOptionChange(index)}
                      />
                      <p id="option">{option}</p>
                    </label>
                  </div>
                </div>
              ))}
            </div>
            <button type="submit">VOTE</button>
          </form>
        </article>
      )}
    </div>
  );
};

export default PollDetails;
