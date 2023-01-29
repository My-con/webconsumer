import { NavBarStyle } from "./style";
import Logo from "../../assets/logo.svg";
import Github from "../../assets/github.svg";

import { ButtonStyle } from "../button/style";
import { useContext } from "react";
import { Cont } from "../../contexts/pagecontext";
import Search from "../search";
import LandingPage from "../../pages/landingPage";

export default function NavBar() {
  let teste = useContext(Cont);

  return (
    <NavBarStyle>
      <div className="container">
        <img id="logo" src={Logo} alt="Logo" />
        <ul className="option">
          <ButtonStyle>Filmes</ButtonStyle>
          <ButtonStyle>Séries</ButtonStyle>
        </ul>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Oque deseja ver hoje?"
          onChange={(e) => {
            teste.search[1]( teste.search[0] = e.target.value)
            if (e.target.value != "" ){
              teste.state[1](
                (teste.state[0] = <Search search={e.target.value} />)
              )
              console.log(teste.search[0])
            } else{
              teste.state[1](teste.state[0] = <LandingPage />)
            }
          }}
        />
      </div>
      <img id="logo" src={Github} alt="Logo" />
    </NavBarStyle>
  );
}
