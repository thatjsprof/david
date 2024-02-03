import * as React from "react";
import { createTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function useColorProvider() {
  const [mode, setMode] = React.useState("light");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const getMode = (mode) => {
    if (typeof mode === "boolean") {
      return mode ? "dark" : "light";
    }

    return mode === "light" ? "dark" : "light";
  };

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => getMode(prevMode));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  React.useEffect(() => {
    setMode(getMode(prefersDarkMode));
  }, [prefersDarkMode]);

  return {
    Provider: ({ children }) => (
      <ColorModeContext.Provider value={colorMode}>
        {children}
      </ColorModeContext.Provider>
    ),
    theme,
  };
}
