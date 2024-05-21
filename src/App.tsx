/* eslint-disable @typescript-eslint/no-unused-vars */
import CandidateCard from "./components/CandidateCard";
import { candidates } from "./types/Candidate";

function App() {
  return (
    <>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Election Candidates</h1>
        <div className="grid grid-cols-1 gap-4">
          {candidates.map((candidate) => (
            <CandidateCard key={candidate.id} candidate={candidate} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
