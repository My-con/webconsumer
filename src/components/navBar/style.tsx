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
    .container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        height: 100%;
    }

    .git{
        height: 100%;
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: end;
    }
    #github{
        width: 50%;
    }
    #logo{
        height: 75%;
        
        @media (max-width: 750px) {
            height: 50%;
        }
    }

    .option{
        height: 100%;
        width: 50%;
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
    .search{
        width: 25vw;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    input{
        outline: none;
        background: ${props => props.theme.color.optionColor.primary};
        color: ${props => props.theme.color.textColor};
        border: 2px solid  ${props => props.theme.color.activeColor.primary};
        border-radius: 15px;
        width: 100%;
        height: calc(50% - 10px);
        padding: 10px;
    }
`