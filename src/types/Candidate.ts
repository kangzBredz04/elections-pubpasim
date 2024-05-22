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
    name: "Anies Rasyid Baswedan",
    photo: "/Anies Rasyid Baswedan.jpg",
    number: 1,
    batch: "2024",
  },
  {
    id: 2,
    name: "Prabowo Subianto",
    photo: "/Prabowo Subianto.jpg",
    number: 2,
    batch: "2024",
  },
  {
    id: 3,
    name: "Ganjar Pranowo",
    photo: "/Ganjar Pranowo.jpg",
    number: 3,
    batch: "2024",
  },
];
