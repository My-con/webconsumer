import img from "../../assets/landingPageWallpaper.jpg"
import Category from "../../components/category"
import NavBar from "../../components/navBar"
import { LandingPageStyle } from "./style"
export default function LandingPage(){

    return(
        <LandingPageStyle>
            <Category/>
        </LandingPageStyle>
    )
}