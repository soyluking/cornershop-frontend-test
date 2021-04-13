import styled from 'styled-components';

import Button from '../Button';

export const SShareTitle = styled.h4`
  color: #000;
  font-size: 18px;
  font-weight: 600;
  margin: 0 1rem 1rem 0;
`;

export const STooltip = styled.div`
  align-items: center;
  background-color: #fafafa;
  border: var(--with-border);
  border-radius: var(--with-radius--large);
  box-shadow: 0px 24px 38px var(--alpha-015);
  display: flex;
  justify-content: space-between;
  left: 1rem;
  max-width: 90%;
  padding: 0.6rem 0.6rem 0.6rem 1rem;
  position: absolute;
  top: 0;
  transform: translateY(-95%);
  width: 18rem;

  svg {
    display: block;
  }
`;

export const SButton = styled(Button)`
  &:after {
    bottom: 100%;
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border: 10px solid #fff;
    border-color: var(--white) transparent transparent transparent;
    top: -12px;
    z-index: 2;
  }
`;
