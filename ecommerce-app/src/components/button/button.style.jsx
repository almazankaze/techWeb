import styled from "styled-components";

export const BaseButton = styled.button`
  background-color: var(--main-color);
  color: var(--white);
  min-width: 110px;
  text-align: center;
  padding: 0.5em;
  margin: 0.75rem 0;
  display: inline-block;
  transition: all 0.3s linear;
  font-size: 1rem;
  font-weight: 700;
  border: 1px solid var(--main-color);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  &:hover {
    background-color: var(--main-color-light);
    border: 1px solid var(--main-color-light);
  }

  &.full-btn {
    width: 100%;
    margin: 0.75rem 0 1.5rem;
  }

  &.m-medium {
    margin: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 0.75rem;
    min-width: 80px;
  }
`;

export const CartButton = styled(BaseButton)`
  background-color: var(--cart-btn);
  color: var(--black);
  margin: 0.75rem 0;
  border: 1px solid var(--cart-btn);

  &:hover {
    background-color: #fff200;
    color: var(--black);
    border: 1px solid #fff200;
  }
`;

export const HeroButton = styled(CartButton)``;

export const DetailButton = styled(BaseButton)`
  background: transparent;
  color: var(--black);
  margin: 0;
  margin-right: 12px;
  font-weight: 500;
  border: 1px solid var(--gray-500);
  border-bottom: none;

  &:hover {
    background: transparent;
    border: 1px solid var(--gray-500);
    border-bottom: none;
  }

  &.active-detail {
    background-color: #fff200;
    border: 1px solid #fff200;
    border-bottom: none;
  }
`;
