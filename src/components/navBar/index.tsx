import { NavBarStyle } from "./style";
import Logo from "../../assets/logo.svg";
import Github from "../../assets/github.svg";

import { ButtonStyle } from "../button/style";

export default function NavBar() {
  
    return (
      <NavBarStyle>
        <img id="logo" src={Logo} alt="Logo" />
        <ul className="option">
          <ButtonStyle>Filmes</ButtonStyle>
          <ButtonStyle>Séries</ButtonStyle>
        </ul>
        <img id="logo" src={Github} alt="Logo" />
      </NavBarStyle>
    );
  };
