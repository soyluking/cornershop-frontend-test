import styled from 'styled-components';

export const SSearch = styled.div`
  display: flex;
  position: relative;

  svg {
    left: 1rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  input {
    border: var(--with-border);
    box-shadow: var(--with-shadow);
    padding-left: 3rem;
  }

  button {
    margin-left: 0.5rem;
  }
`;
