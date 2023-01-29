import { useState } from "react";
import CardMovie from "../components/cardMovie";

export default class Cards {
  private props: any
  public result: any

  constructor(prop: {category: string, type: string, search?: string}) {
    this.props = prop;
  }

  async fetchAll(category : string){
    let genre = "&with_genres=" + category;
    let url = ""
    if(this.props.search != undefined){
      url = `https://api.themoviedb.org/3/search/multi?api_key=b92ba9e9f75b0a4aeffa65e2cb28052c&language=pt-BR&query=${this.props.search}`;

    }else{
      url = `https://api.themoviedb.org/3/discover/${this.props.type}?api_key=b92ba9e9f75b0a4aeffa65e2cb28052c&language=pt-BR${genre}`;
    }

    let request = await fetch(url);

    let response = await request.json();

    console.log(response.results)

    return response.results;
  }

  async createCard([cards, usecards] = useState(), category : string) {

    let results = await this.fetchAll(category)

    if (results.title == "undefined") {
      results.title = results.name;
    }

    usecards(
      (cards = results.map((result: any) => (
        <CardMovie
          background={result.poster_path != undefined ?  result.poster_path : result.backdrop_path}
          popularity={result.popularity}
          title={result.title || result.name}
          key={result.id}
          id={result.id}
        />
      )))
    )

    this.result = cards
  }
}
