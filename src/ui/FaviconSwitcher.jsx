import { useEffect } from "react";
import { useDarkMode } from "../../context/DarkModeContex";

function FaviconSwitcher() {
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const favicon = document.querySelector("link[rel='icon']");

    if (favicon) {
      favicon.href = isDarkMode ? "/logo-dark.png" : "/logo-light.png";
    }
  }, [isDarkMode]);

  return null;
}

export default FaviconSwitcher;
