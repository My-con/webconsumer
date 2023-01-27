import styled from "styled-components";

export const NavBarStyle = styled.div`
    width: 100vw;
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    position: -webkit-sticky;
    position: sticky;

    top: 0;

    background: ${props => props.theme.color.secundary};

    z-index: 5;

    #logo{
        height: 75%;
        
        @media (max-width: 750px) {
            height: 50%;
        }
    }

    .option{
        height: 100%;
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 10px;

        padding: 0;

        @media (max-width: 750px) {
            width: 50%;
        }
    }
`