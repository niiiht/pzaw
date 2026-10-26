export  interface MovieProps {
    movieName: string;
    year: number;
    poster: string;
    rating: number;
    isGood?:boolean;
  }
  export  interface BookProps{
    cover:string;
    title:string;
    author:string;
    year:number;
    pages:number;
    isClassic?:boolean;
}
export interface AlbumProps{
    cover:string;
    albumName:string;
    bandName:string;
    musicKind:string;
    year:number;
    isSongless?:boolean;
    songs:{name:string, time?:string}[];
    

}