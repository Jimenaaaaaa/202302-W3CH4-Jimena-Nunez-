/* eslint-disable no-unused-vars */
export type SerieType = {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  watched: boolean;
  score: number;
  emmies: number;
}


export class Serie implements SerieType{
  watched: boolean;
  score: number;

  constructor(
    public id: number,
    public name: string,
    public creator: string,
    public year: number,
    public poster: string,
    public emmies: number) {

    this.watched = false;
    this.score = 0;
  }
}