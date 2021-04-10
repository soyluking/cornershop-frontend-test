import styled from 'styled-components';

export const SSummary = styled.div`
  align-items: center;
  display: flex;
`;

export const SSummaryItems = styled.p`
  color: var(--black);
  font-weight: 600;
  margin-right: 0.5rem;
`;

export const SSummaryTimes = styled.p`
  color: var(--grey);
  font-weight: 500;
  margin-right: 0.5rem;
`;

export const SSummaryButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  color: var(--black);
  cursor: pointer;
  display: inline-flex;
  padding: 0;

  &.active {
    color: var(--app-tint);

    span {
      opacity: 1;
    }
  }

  span {
    margin-left: 0.5rem;
    opacity: 0;
  }
`;
