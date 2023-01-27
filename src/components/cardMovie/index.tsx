import { CardMovieStyle } from "./style";

export default function CardMovie(props: {
  background: string;
  title: string;
  description: string;
}) {
  return (
    <CardMovieStyle>
      <img src={"https://image.tmdb.org/t/p/w500" + props.background} />
      <div className="info">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
      </div>
    </CardMovieStyle>
  );
}
