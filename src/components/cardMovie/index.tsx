import { CardMovieStyle } from "./style";
import popcorn from "../../assets/popcorn.png";

export default function CardMovie(props: {
  background: string;
  title: string;
  popularity: string;
  id: number
}) {
  return (
    <CardMovieStyle>
      <img src={"https://image.tmdb.org/t/p/w500" + props.background} />
      <div className="info">
        <h3 className="title">{props.title}</h3>
        <div className="popularity">
          <img className="iconpop" src={popcorn} /> {props.popularity}
        </div>
      </div>
    </CardMovieStyle>
  );
}
