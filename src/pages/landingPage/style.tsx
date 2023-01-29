import styled from "styled-components";

export const LandingPageStyle = styled.div`
    
    width: 100%;
    height: calc(100vh - 4rem);
    display: flex;
    flex-direction: column;

    overflow: hidden auto;

    background: ${ props => props.theme.color.primary};

`