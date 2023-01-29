import styled from "styled-components";

type arrow = {
    left : string,
    right : string
}

export const CategoryStyle = styled.div<arrow>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;

  .category {
    margin: auto;
    color: ${(props) => props.theme.color.textColor};
  }
  .scroll{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .next, .back{
    height: 100%;
    width: 5%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60%;
    cursor: pointer;
  }
  .next:hover, .back:hover{
    background-size: 70%;
  }
  .next{
    background-image: url(${props => props.right});
  }
  .back{
    background-image: url(${props => props.left});
  }
  .cards {
    height: 25vw;
    width: 90%;
    
    overflow: hidden;

    display: flex;

    align-items: center;
    gap: 10px;
  }

  @media (max-width: 750px) {
    width: 90%;
  }
`;
