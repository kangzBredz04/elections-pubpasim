/* eslint-disable @typescript-eslint/no-unused-vars */
import { Candidate } from "../types/Candidate";

interface CandidateCardProps {
  candidate: Candidate;
}

function CandidateCard(props: CandidateCardProps) {
  return (
    <div className="flex flex-1 gap-4 p-4 md:px-8 md:py-6 md:gap-4 md:flex-col rounded-3xl bg-[#1e3d59] text-primary false">
      <div className="relative self-start w-1/4 text-xs md:w-full md:text-2xl false">
        <div className="absolute z-10 flex items-center justify-center w-1/4 rounded-full h-1/4 bg-[#ff6e40]">
          <p className="text-4xl text-[#f5f0e1] font-bold">{`0${props.candidate.number}`}</p>
        </div>
        <img
          src={props.candidate.photo}
          alt={props.candidate.name}
          className="rounded-full bg-secondary-container bg-[left_1rem_bottom_1rem] md:bg-[left_3rem_bottom_3rem]  bg-blend-luminosity"
        />
      </div>
      <div className="flex flex-col flex-1 gap-4">
        <div className="flex items-center flex-1 gap-4 ">
          <div className="text-[#f5f0e1] text-xl font-bold ">
            {props.candidate.name}
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 md:mt-auto">
          <button className="rounded-full font-semibold relative bg-[#ff6e40] text-[#f5f0e1] text-xs h-8 px-4">
            Selengkapnya
          </button>
          <button className="rounded-full relative bg-[#ffc13b] text-black font-medium text-xs h-8 px-4">
            Lihat Profil
          </button>
        </div>
      </div>
    </div>
  );
}

export default CandidateCard;
