import React, { useEffect, useState } from "react";
import { CategoryStyle } from "./styled";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
import Cards from "../../services/cards";
import data from "../../data/genres.json";

export default function Category(props: {
  category: any;
  type: string;
  title: string;
}) {
  let [cards, usecards] = useState();
  let Title
  let Category : any

  data.genres.map((e) => {
    if (e.id == props.category || e.name == props.category){
      Title = e.name
      Category = e.id
    }else{
      Category
    }
  });

  function scroll(e: React.MouseEvent<HTMLDivElement>) {
    let scroll = document.getElementById(props.category) as HTMLDivElement;

    if (e.currentTarget.className == "back") {
      scroll.scrollTo({
        left: scroll.scrollLeft - scroll.clientWidth - 100,
        behavior: "smooth",
      });
    } else {
      scroll.scrollTo({
        left: scroll.scrollLeft + scroll.clientWidth - 100,
        behavior: "smooth",
      });
    }
  }

  useEffect(() => {
    let car = new Cards(props);
    car.createCard([cards, usecards], Category);
  }, [,]);

  return (
    <CategoryStyle left={left} right={right}>
      <h1 className="category">{ Title || props.title }</h1>
      <div className="scroll">
        <div className="back" onClick={scroll} />
        <div className="cards" id={props.category}>
          {cards}
        </div>
        <div className="next" onClick={scroll} />
      </div>
    </CategoryStyle>
  );
}
