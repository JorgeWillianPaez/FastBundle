import styled from "styled-components";

export const HeaderContainer = styled.div`

  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 120px;
  background-color: var(--darkYellow);

`;

export const CompanyName = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 138px;
  height: 104px;
  font-size: 24px;
  color: var(--brown);

`;

export const NavBar = styled.div`

  display: flex;
  justify-content: space-between;
  width: 50%;
  color: var(--brown);

`;

export const Icons = styled.div`

  display: flex;
  justify-content: space-between;
  width: 12%;

  button {

    background-color: transparent;
    border: none;

    img {
      width: 60px;
      height: 60px;
    }
  }

`;