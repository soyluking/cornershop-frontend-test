import styled from 'styled-components';

export const SExamplesGroup = styled.div`
  margin-right: -1rem;

  @media (min-width: 768px) {
    margin-right: 0;
  }
`;

export const SExamplesList = styled.div`
  display: flex;
  overflow: auto;
  white-space: nowrap;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    overflow: visible;
  }

  button {
    margin-right: 1rem;

    @media (min-width: 768px) {
      margin-bottom: 1rem;
    }
  }
`;

export const SExamplesTitle = styled.h4`
  margin: 2rem 0 0.5rem;
`;
