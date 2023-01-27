import styled from "styled-components";

type CardBackground = {background: string}

export const CardMovieStyle = styled.div`

    width: 18vw;
    height: 25vw;

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
        transform: scale(1.2);
        z-index: 3;

        border: 2px solid  ${props => props.theme.color.activeColor.primary};
    }

    img{
        height: 100%;
        width: 100%;

        object-fit: cover;
        border-radius: 15px;
    }
    .info{
        display: none;

        font-size: auto;

        height: 50%;
        width: 100%;

        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .info:hover{
        display: flex;
    }
`