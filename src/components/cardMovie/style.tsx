import styled from "styled-components";

type CardBackground = {background: string}

export const CardMovieStyle = styled.div`

    width: 15vw;
    height: 20vw;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background: ${props => props.theme.color.secundary};

    border-radius: 15px;

    :hover{
        transform: scale(1.2);
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
        display: none;
    }
`