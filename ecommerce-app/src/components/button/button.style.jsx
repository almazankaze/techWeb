import styled from "styled-components";

export const BaseButton = styled.button`
  background: transparent;
  color: var(--black);
  padding: 0.625em;
  margin: 1rem;
  display: inline-block;
  transition: all 0.3s linear;
  font-size: 1rem;
  font-weight: 700;
  border: 1px solid var(--black);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  &:hover {
    color: var(--white);
    background: var(--black);
  }

  @media (max-width: 900px) {
    min-width: 80px;
    font-size: 0.875rem;
    padding: 0.5em 0;
  }
`;

export const CartButton = styled(BaseButton)`
  background-color: #ffe000;
  width: 100%;
  text-align: center;
  margin: 1rem 0;
  border: 1px solid #ffe000;

  &:hover {
    background-color: #fff200;
    color: var(--black);
    border: 1px solid #ffe000;
  }
`;
