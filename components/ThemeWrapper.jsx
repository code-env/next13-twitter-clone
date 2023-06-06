 "use client";

import { useSelector } from "react-redux";

const ThemeWrapper = ({ children }) => {
  const theme = useSelector((state) => state.theme);

  console.log(theme);
  return (
    <main className={`transition-all duration-300 bg-skin-fill theme-${theme}`}>
      {children}
    </main>
  );
};

export default ThemeWrapper;