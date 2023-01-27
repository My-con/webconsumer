import styled from "styled-components";

export const CategoryStyle = styled.div`
    height: auto;
    width: 80%;
    
    margin-top: 15px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    flex-wrap: wrap;

    @media (max-width: 750px) {
        width: 90%;
    }
`