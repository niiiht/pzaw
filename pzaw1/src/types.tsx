export  interface MovieProps {
    movieName: string;
    year: number;
    poster: string;
  }
  export  interface BookProps{
      cover:string;
    title:string;
    year:number;
    pages:number;
}
export interface AlbumProps{
    cover:string;
    albumName:string;
    bandName:string;
    musicKind:string;
    year:number;
    songs:{name:string, time:number}[];
    

}