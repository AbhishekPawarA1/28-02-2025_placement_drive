import { useState } from "react";

export function PollingSystem() {
  const [votes, setVotes] = useState(0);

  function handleVote() {
    setVotes((prevVotes) => prevVotes + 1);
  }

  return (
    <div>
      <h1>Polling System</h1>
      <Child votes={votes} onVote={handleVote} />
    </div>
  );
}

function Child({ votes, onVote }) {
  return (
    <div>
      <button onClick={onVote}>Vote</button>
      <Grandchild votes={votes} />
    </div>
  );
}

function Grandchild({ votes }) {
  return <h2>Total Votes: {votes}</h2>;
}
