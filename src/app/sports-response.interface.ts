export interface SportsResponse {
  f1Results: f1Results[];
  nbaResults: nbaResults[];
  Tennis: Tennis[];
}

export interface f1Results {
  publicationDate: string;
  seconds: number;
  tournament: string;
  winner: string;
}

export interface nbaResults {
  publicationDate: string;
  tournament: string;
  winner: string;
  gameNumber: number;
  looser: string;
  mvp: string;
}

export interface Tennis {
  publicationDate: string;
  tournament: string;
  winner: string;
  looser: string;
  numberOfSets: number;
}