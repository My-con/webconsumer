import { useContext, useState } from "react"
import Category from "../../components/category"
import { Cont } from "../../contexts/pagecontext"
import { LandingPageStyle } from "./style"
export default function LandingPage(){

    return(
        <LandingPageStyle>
            <Category category="Melhores" title="Melhores filmes" type="movie"/>
            <Category category="Series" title="Séries" type="tv"/>
            <Category category="27" title="" type="movie"/>
            <Category category="10751" title="Teste 3" type="tv"/>
        </LandingPageStyle>
    )
}