import { NavBarStyle } from "./style";
import Logo from "../../assets/logo.svg";
import GoogleLogin from "react-google-login";
import { ButtonStyle } from "../button/style";
export default function NavBar() {

    const responseGoogle = (response : any) => {
        console.log(response);
    }

      
  return (
    <NavBarStyle>
      <img id="logo" src={Logo} alt="Logo" />
      <ul className="option">

        <ButtonStyle>
            Filmes
        </ButtonStyle>
        
        <ButtonStyle>
            Séries
        </ButtonStyle>
      </ul>
      <div>
        <GoogleLogin 
        clientId="884729109336-fp1qbf4fig9j6l5lqfr08eh6olk5jp71.apps.googleusercontent.com"
        autoLoad={ false }
        onSuccess={ responseGoogle }
        onFailure={ responseGoogle }
        />
      </div>
    </NavBarStyle>
  )
}
