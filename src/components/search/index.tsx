import { useState, useEffect, useContext } from "react";
import { Cont } from "../../contexts/pagecontext";
import Cards from "../../services/cards";
import { SearchStyle } from "./style";

export default function Search(props: { search: string }) {
    
    let text = useContext(Cont)
    let [cards, usecards] = useState();

  useEffect(() => {
      let car = new Cards({ category: "", type: "", search: props.search });
      car.createCard([cards, usecards], "");
  },[text]);
  return <SearchStyle>{cards}</SearchStyle>;
}
