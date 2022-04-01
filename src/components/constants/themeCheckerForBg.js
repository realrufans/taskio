import { ThemeContext } from "../../lib/context";
import { useContext } from "react";
import { darkTheme } from "../../containers/theme";

// this checks the theme and decide to render a background image or not
export function CheckerHBg(pic) {
  const { theme } = useContext(ThemeContext);
  return theme === "dark" ? "" : `url(${require(`../../icons/${pic}.png`)});`;
}
// Check the theme and decide the color to apply for
export function CheckColor(lightColor, darkColor) {
  const { theme } = useContext(ThemeContext);
  return theme === "light" ? `${lightColor}` : `${darkColor}`;
}

export function CheckerButton(color) {
  return color;
}
