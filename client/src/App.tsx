import { useMemo } from "react";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { themeSettings } from "@/theme";
import Navbar from "@/scenes/navbar/Navbar";
import Dashboard from "@/scenes/dashboard/Dashboard";
import Predictions from "./scenes/predictions/Predictions";

const App = () => {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box height="100%" width="100%" padding="1rem 2rem 4rem 2rem">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/predictions" element={<Predictions />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
};

export default App;
