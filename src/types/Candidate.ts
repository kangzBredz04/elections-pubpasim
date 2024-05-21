export interface Candidate {
  id: number;
  name: string;
  photo: string;
  number: number;
  batch: string;
}

export const candidates: Candidate[] = [
  {
    id: 1,
    name: "Elon Musk",
    photo: "/Candidate 1.jpg",
    number: 1,
    batch: "2024",
  },
  {
    id: 2,
    name: "Wahyu Jebredz",
    photo: "/Candidate 2.jpeg",
    number: 2,
    batch: "2024",
  },
  {
    id: 3,
    name: "Shandika Galih",
    photo: "/Candidate 3.jpg",
    number: 3,
    batch: "2024",
  },
];
