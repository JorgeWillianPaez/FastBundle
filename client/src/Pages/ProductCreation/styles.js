import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: var(--beige);

  form {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      margin-bottom: 20px;
      color: var(--brown);
    }
  }

`;