import styled from "styled-components";

type CardBackground = {background: string}

export const CardMovieStyle = styled.div`

    color: #ffff;

    cursor: pointer;
    min-width: 13vw;
    width: 13vw;
    height: 22vw;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background: ${props => props.theme.color.secundary};

    border-radius: 15px;

    z-index: 1;
    @media (max-width: 750px) {
        width: 40vw;
        height: 75vw;
    }

    :hover{
        transform: scale(1.1);
        z-index: 3;
        background: ${props => props.theme.color.activeColor.primary};
    }

    img{
        height: 80%;
        width: 100%;

        object-fit: cover;
        border-radius: 15px 15px 0 0;
    }
    .info{
        font-size: calc(0.7vw);
        text-align: center;

        height: 20%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
    }

    .info:hover{
        display: flex;
    }
    .iconpop{
        height: 1vw;
        width: 1vw;
    }
    .popularity{
        display: flex;
        align-items: center;
        gap: 5px;
    }
    
`