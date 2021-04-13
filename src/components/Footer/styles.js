import styled from 'styled-components';

export const SFooter = styled.footer`
  background-color: var(--white);
  box-shadow: 0 -30px 30px 30px var(--white);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  z-index: 1;

  &::before {
    background-color: var(--alpha-01);
    content: '';
    height: 1px;
    left: 1rem;
    position: absolute;
    right: 1rem;
    top: 0;
  }

  .SFooter__share {
    margin-left: 1rem;
  }

  .SFooter__new {
    margin-left: auto;
  }
`;

export const SFooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 40rem;
  padding: 0.9rem 1rem;
  position: relative;
  width: 100%;
`;
