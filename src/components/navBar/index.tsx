import { NavBarStyle } from "./style";
import Logo from "../../assets/logo.svg";
import Github from "../../assets/github.svg";

import { ButtonStyle } from "../button/style";
import { useContext, useEffect } from "react";
import { Cont } from "../../contexts/pagecontext";
import Search from "../search";
import LandingPage from "../../pages/landingPage";

export default function NavBar() {
  let SearchState = useContext(Cont);

  useEffect(
    () => {
      if (SearchState.search[0] != undefined && SearchState.search[0] != ""){
        SearchState.state[1](
          (SearchState.state[0] = <Search search={SearchState.search[0]} />)
        )
      } else{
        SearchState.state[1](SearchState.state[0] = <LandingPage />)
      }
    }, [SearchState.search[0]] 
  ) 
    
  return (
    <NavBarStyle>
      <div className="container">
        <img id="logo" src={Logo} alt="Logo" />

      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Oque deseja ver hoje?"
          onChange={(e) => {
            SearchState.search[1]( SearchState.search[0] = e.target.value)
          }}
        />
      </div>
        <a href="https://github.com/my-con/">
          <img id="github" src={Github} alt="Logo" />
        </a>
    </NavBarStyle>
  );
}
