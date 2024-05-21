import React from "react";
import { Candidate } from "../types/Candidate";

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <img
        src={candidate.photo}
        alt={candidate.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-xl font-bold mt-2">{candidate.name}</h2>
      <p>Number: {candidate.number}</p>
      <p>Batch: {candidate.batch}</p>
    </div>
  );
};

export default CandidateCard;
