import { createContext, useState, useEffect} from "react";
import NavBar from "../../components/navBar";
import { Cont } from "../../contexts/pagecontext";
import LandingPage from "../landingPage";

export default function Home(){
    let [Search, useSearch] = useState("")

    let [Content, useContent] = useState(<LandingPage/>)

    return(
        <div>
            <Cont.Provider value={{state: [Content, useContent], search: [Search, useSearch]}}>
                    <NavBar/>
                    {Content}
            </Cont.Provider>
        </div>
    )
}