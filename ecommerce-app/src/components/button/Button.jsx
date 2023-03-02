import {
  BaseButton,
  CartButton,
  HeroButton,
  DetailButton,
} from "./button.style";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  cart: "cart-btn",
  heroBtn: "hero-btn",
  detail: "detail-btn",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.cart]: CartButton,
    [BUTTON_TYPE_CLASSES.heroBtn]: HeroButton,
    [BUTTON_TYPE_CLASSES.detail]: DetailButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
