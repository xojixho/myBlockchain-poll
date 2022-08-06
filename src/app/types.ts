export interface Poll{
  id: number; //12
  question: string; // What days of the week do you like most?
  results: number[]; // [0, 0, 0, 0, 5, 7, 2]
  options: string[]; // [monday, tuesday, wednesday, thursday, friday, ...]
  thumbnail: string; // https://image.png
  voted: boolean;
}

export interface Voter{
  id: string;
  voted: number[];
}
