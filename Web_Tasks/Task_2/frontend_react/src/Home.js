import PollList from "./PollList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: polls,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/api/polls/access/");


  return (
    <div className="home">
      {error && <div style={{ color: "#ff0000" }}>{error}</div>}
      {isLoading && (
        <div style={{ color: "#00f7ff", fontWeight: "900" }}>Loading...</div>
      )}
      {polls && <PollList polls={polls} title="Featured Polls" />}
    </div>
  );
};

export default Home;
