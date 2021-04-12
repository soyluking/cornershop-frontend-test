import styled from 'styled-components';

export const SCounters = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  padding: 1rem 1rem 4.25rem;
`;

export const SCountersCover = styled.div`
  background-color: var(--white);
  bottom: 0;
  left: 0;
  opacity: 0.8;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 5;
`;

export const SCountersList = styled.div`
  margin: 0 -1rem;
`;
