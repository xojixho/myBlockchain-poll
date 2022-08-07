export interface Poll extends PollForm{
  id: number; //12
  results: number[]; // [0, 0, 0, 0, 5, 7, 2]
  voted: boolean;
}

export interface PollForm{
  question: string; // What days of the week do you like most?
  options: string[]; // [monday, tuesday, wednesday, thursday, friday, ...]
  thumbnail: string; // https://image.png
}

export interface PollVote{
  id: number;
  vote: number;
}
