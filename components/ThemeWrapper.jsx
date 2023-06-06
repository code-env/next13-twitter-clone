 "use client";

import { useSelector } from "react-redux";

const ThemeWrapper = ({ children }) => {
  const theme = useSelector((state) => state.theme);
  return (
    <main className={`transition-all duration-300 bg-skin-fill theme-lightout`}>
      {children}
    </main>
  );
};

export default ThemeWrapper;