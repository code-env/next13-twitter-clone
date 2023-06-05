 "use client";

import { useSelector } from "react-redux";

const ThemeWrapper = ({ children }) => {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={`transition-all duration-300 bg-skin-fill theme-${theme}`}>
      {children}
    </div>
  );
};

export default ThemeWrapper;