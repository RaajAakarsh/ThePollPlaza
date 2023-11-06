import { Link } from "react-router-dom";

const PollList = ({ polls, title }) => {
  return (
    <div className="poll-list">
      <h1>{title}</h1>
      {polls.map((poll, index) => (
        <Link to={`/polls/${poll.id}/`}>
          <div className="poll-preview" key={poll.id}>
            <span>{index + 1}.</span>
            <div className="poll-preview-inner">
              <h2>{poll.title}</h2>
              <p>Created by - {poll.author}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PollList;
