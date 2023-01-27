import styled from "styled-components";

export const ButtonStyle = styled.div`
    height: 65%;
    width: 100px;
    background: ${props => props.theme.color.optionColor.primary};
    border: 2px solid ${props => props.theme.color.activeColor.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    color: ${props => props.theme.color.textColor};

    :hover{
        background: ${props => props.theme.color.activeColor.primary};
    }
`