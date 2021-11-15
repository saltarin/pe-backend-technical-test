import styled from 'styled-components';

export const Form = styled.form`
  > fieldset {
    display: flex;
    border: 0;
    > label {
      padding: 0 20px;
      flex: 0 0 100px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    > input,
    > select {
      flex: 2 1 auto;
      padding: 0.5em;
      width: 100%;
    }
  }
  > div {
    margin-top: 20px;
    text-align: center;
  }
`;
