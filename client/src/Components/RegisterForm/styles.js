import styled from "styled-components";

export const FormContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: var(--beige);

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin-bottom: 30px;
    color: var(--brown);
  }

  p {

    font-size: 16px;
    font-weight: bold;
    color: var(--brown);

    a {
      color: var(--link);
    }
  }

`;