import COLORS from "../../../colors";
import { Heart } from "./assets/Heart";

export interface IconProps {
  /**
   * Pick from a predefined set of icons
   * e.g. "heart"
   */
  type: "heart";
  /**
   * CSS class name
   */
  className: string;
  /**
   * fill color
   */
  fill: string;
}

export const Icon = ({ type, className, fill = COLORS.primaryWhite }: IconProps) => {
  if (type === "heart") {
    return <Heart className={className} fill={fill} />;
  }

  return null;
};
