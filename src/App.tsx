import React from "react";
import { candidates } from "./types/Candidate";
import CandidateCard from "./components/CandidateCard";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-4">Kandidat Calon Presiden RI</h1>
        <div className="flex flex-col gap-4 lg:gap-6 md:flex-row">
          {candidates.map((candidate) => (
            <CandidateCard key={candidate.id} candidate={candidate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
