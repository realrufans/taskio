import { useContext } from "react";
import { ThemeContext } from "./context";

// checks for theme to decode the icons to display
function CheckThemeForIcon(picL, picD) {
  const { theme } = useContext(ThemeContext);

  return theme === "light"
    ? require(`../icons/${picL}`)
    : require(`../icons/${picD}`);
}

export default CheckThemeForIcon;
