import { ComponentProps, ButtonHTMLAttributes } from "react";
import COLORS from "../../../colors";
import { Icon } from "../Icon/Icon";

export type ButtonProps = {
  /**
   * Button text content
   */
  label: string;
  /**
   * Button type based on UI spec
   * primary, secondary, tertiary
   */
  type: "primary";
  /**
   * Button icon appears at the left of text
   * based on Icon component
   */
  icon?: ComponentProps<typeof Icon>["type"];
  /**
   * Determines whether icon is placed
   * before or after the label
   */
  iconLocation: "before" | "after";
  /**
   * Use either dark or light theme
   */
  theme: "dark" | "light";
  /**
   * Disabled prop determines if button is pressable
   */
  disabled: ButtonHTMLAttributes<HTMLButtonElement>["disabled"];
};

const hoverClass = "hover:shadow-md hover:bg-primary-purple-semantic-2";
const focusClass = "focus:shadow-none focus:outline-none focus:ring";
const disabledClass = "disabled:bg-grey-5 disabled:shadow-none disabled:text-grey-1";
const darkThemeWrapper = "bg-primary-purple text-primary-white";
const lightThemeWrapper = "bg-primary-white text-primary-purple";

export const Button = ({
  label = "",
  icon,
  iconLocation = "before",
  disabled = false,
  type = "primary",
  theme = "dark",
}: ButtonProps) => {
  const flexDirection = iconLocation === "before" ? "flex-row" : "flex-row-reverse";
  const themeWrapper = theme === "dark" ? darkThemeWrapper : lightThemeWrapper;
  const baseClass = `flex ${flexDirection} ${themeWrapper} items-center px-10 py-4 text-xl leading-6 rounded-full shadow-sm`;
  const wrapperClass = `${baseClass} ${hoverClass} ${focusClass} ${disabledClass}`;

  const iconMargin = iconLocation === "before" ? "mr-2" : "ml-2";
  const iconClass = `h-4 w-4 text-base leading-3 ${iconMargin} ${themeWrapper}`;
  const iconFill = theme === "dark" ? COLORS.primaryPurple : COLORS.primaryWhite;

  if (type === "primary") {
    return (
      <button aria-label={label} className={wrapperClass} disabled={disabled}>
        {!icon ? null : <Icon type={icon} className={iconClass} fill={iconFill} />}
        {label}
      </button>
    );
  }

  // TODO: handle secondary and tertiary variants
  return null;
};
