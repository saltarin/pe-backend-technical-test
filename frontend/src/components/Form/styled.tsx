import styled from 'styled-components';

export const StyledForm = styled.form`
  > fieldset {
    display: flex;
    border: 0;
    > label {
      padding: 0 20px;
      flex: 1 1 200px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    > input {
      flex: 2 1 auto;
      padding: 0.5em;
    }
  }
  > div {
    margin-top: 20px;
    text-align: center;
  }
`;
