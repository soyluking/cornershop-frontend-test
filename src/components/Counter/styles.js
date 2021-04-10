import styled from 'styled-components';

export const SCounter = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1.1rem 1.5rem;
  position: relative;
  z-index: 1;

  &:before {
    background-color: ${props =>
      props.selected ? 'var(--app-tint-alpha-02)' : 'transparent'};
    border-radius: var(--with-radius--small);
    bottom: 5px;
    content: '';
    left: 10px;
    pointer-events: none;
    position: absolute;
    right: 10px;
    top: 5px;
    z-index: -1;
  }
`;

export const SCounterTitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  padding-right: 2rem;
  width: 100%;
`;

export const SCounterActions = styled.div`
  align-items: center;
  align-self: flex-start;
  display: flex;
`;

export const SCounterLabel = styled.span`
  display: block;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  width: 2.5rem;

  &:disabled,
  &[disabled] {
    color: var(--grey);
  }
`;
