import styled from "styled-components";

export const NavBarStyle = styled.div`
    width: 100vw;
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: space-around;
    
    position: -webkit-sticky;
    position: sticky;

    top: 0;

    background: ${props => props.theme.color.secundary};

    #logo{
        height: 75%;
    }

    .option{
        height: 100%;
        
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 2rem;
    }
`