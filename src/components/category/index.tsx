import { useEffect, useState } from "react";
import CardMovie from "../cardMovie";
import { CardMovieStyle } from "../cardMovie/style";
import { CategoryStyle } from "./styled";

export default function Category() {
  let [cards, usecards] = useState();

  async function CallMovies() {
    let request = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=b92ba9e9f75b0a4aeffa65e2cb28052c&language=pt-BR"
    );
    let response = await request.json();
    let results = response.results;

    usecards(
      (cards = results.map((result: any) => (
        <CardMovie background={result.poster_path} description={result.overview} title={result.title} key={result.id}/>
      )))
    );
  }
  useEffect(() => {
    const aguard = CallMovies();
  }, [,]);

  return  ( <CategoryStyle> {cards} </CategoryStyle> )
}
