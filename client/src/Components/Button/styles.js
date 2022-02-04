import styled from "styled-components";

export const ButtonContainer = styled.button`

  background-color: var(--brown);
  width: 380px;
  height: 50px;
  border-radius: 20px;
  border: 2px solid var(--brown);
  color: var(--lightSalmon);
  padding: 14px;
  font-size: 20px;
  font-weight: bold;
  margin: 14px 0 14px 0;
  :hover {
    background-color: var(--lightSalmon);
    color: var(--brown);
    transition: 0.3s;
  }

`;