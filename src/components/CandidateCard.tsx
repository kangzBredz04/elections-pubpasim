/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Candidate } from "../types/Candidate";

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  return (
    <div className="flex flex-1 gap-4 p-4 md:px-8 md:py-6 md:gap-4 md:flex-col rounded-3xl bg-gray-200 text-primary false">
      <div className="relative self-start w-1/4 text-xs md:w-full md:text-2xl false">
        <div className="absolute z-10 flex items-center justify-center w-1/4 font-bold rounded-full h-1/4  bg-gray-800 text-white">
          {`0${candidate.number}`}
        </div>
        <img
          src={candidate.photo}
          alt=""
          className="rounded-full bg-secondary-container bg-[left_1rem_bottom_1rem] md:bg-[left_3rem_bottom_3rem]  bg-blend-luminosity"
        />
      </div>
      <div className="flex flex-col flex-1 gap-4">
        <div className="flex items-center flex-1 gap-4 text-xl font-bold">
          <div>{candidate.name}</div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 md:mt-auto">
          <button className="rounded-full font-semibold relative bg-gray-600 text-white text-xs h-8 px-4">
            Selengkapnya
          </button>
          <button className="rounded-full relative bg-gray-300 text-black font-medium text-xs h-8 px-4">
            Lihat Profil
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
