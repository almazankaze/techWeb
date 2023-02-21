import { BaseButton, CartButton, FullButton } from "./button.style";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  cart: "cart-btn",
  fullBtn: "full-btn",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.cart]: CartButton,
    [BUTTON_TYPE_CLASSES.fullBtn]: FullButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
