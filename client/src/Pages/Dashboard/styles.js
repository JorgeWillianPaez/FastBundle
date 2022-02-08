import styled from "styled-components";

export const DashboardContainer = styled.div`

  width: 100%;
  height: 100vh;
  background-color: var(--beige);

`;

export const DashboardContent = styled.div`

  display: flex;

`;

export const AsideNav = styled.div`

  input {
    width: 204px;
    height: 51px;
    background-color: var(--darkYellow);
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: var(--brown);
    border: none;
    border-radius: 14px;
    margin: 30px 0 20px 40px;
  }

`;

export const MainContent = styled.div``;

export const Categories = styled.div`

  display: flex;
  justify-content: center;
  color: var(--brown);
  width: 204px;
  height: 400px;
  background-color: var(--darkYellow);
  border-radius: 14px;
  margin: 20px 0 0 40px;

  h3 {
    margin-top: 8px;
  }

`;

export const Products = styled.div``;

export const Product = styled.div``;