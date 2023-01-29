import styled from "styled-components";

export const SearchStyle = styled.div`
  width: 100vw;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: row;
  
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  overflow: hidden auto;

  background: ${(props) => props.theme.color.primary};
`;
