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
    border: 1px solid rgba(0, 0, 0, 0.02);
    box-shadow: var(--with-shadow);
    font-size: 16px;
    font-weight: 500;
    padding-left: 3rem;
  }

  button {
    margin-left: 0.5rem;
  }
`;
