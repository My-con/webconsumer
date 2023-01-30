import Category from "../../components/category"
import { LandingPageStyle } from "./style"
export default function LandingPage(){

    return(
        <LandingPageStyle>
            <Category category="Melhores" title="Melhores filmes" type="movie"/>
            <Category category="Series" title="Séries mais vistas" type="tv"/>
            <Category category="18" title="" type="movie"/>
            <Category category="tranding/day" title="Mais vistos hoje" type=""/>
            <Category category="10751" title="Teste 3" type="tv"/>
            <Category category="tranding/week" title="Mais vistos da semana" type=""/>
            <Category category="10751" title="Teste 3" type="movie"/>
            <Category category="878" title="Teste 3" type="movie"/>
            <Category category="10752" title="Teste 3" type="movie"/>
            <Category category="37" title="Teste 3" type="tv"/>
            <Category category="10749" title="Teste 3" type="movie"/>
            <Category category="35" title="Teste 3" type="tv"/>
        </LandingPageStyle>
    )
}