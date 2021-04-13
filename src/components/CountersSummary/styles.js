import styled from 'styled-components';

export const SSummary = styled.div`
  align-items: center;
  display: flex;
`;

export const SSummaryItems = styled.p`
  color: ${props => (props.primary ? '#ff9500' : '#4a4a4a')};
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

  &:focus {
    outline: none;
  }

  &.refreshing {
    color: var(--app-tint);
  }

  span {
    display: block;
    font-weight: 500;
    margin-left: 0.3rem;
  }
`;
