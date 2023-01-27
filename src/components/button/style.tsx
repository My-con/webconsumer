import styled from "styled-components";

export const ButtonStyle = styled.div`
    height: 75%;
    width: 100px;
    background: ${props => props.theme.color.optionColor.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;

    :hover{
        background: ${props => props.theme.color.optionColor.secundary};
    }
`