"use client";

import { createTheme } from "@mui/material/styles";

// MUI Theme configured for KTech Brand Design System
// Matches colors and typography from PRD Section 7
export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3B82F6", // accent
    },
    background: {
      default: "#020617", // bg-primary
      paper: "#0F172A", // bg-secondary
    },
    text: {
      primary: "#F8FAFC", // text-primary
      secondary: "#94A3B8", // text-secondary
    },
  },
  typography: {
    fontFamily: 'var(--font-inter), "Inter", Arial, sans-serif',
    h1: {
      fontFamily: 'var(--font-barlow-condensed), sans-serif',
      fontWeight: 900,
      textTransform: "uppercase",
    },
    h2: {
      fontFamily: 'var(--font-barlow-condensed), sans-serif',
      fontWeight: 800,
      textTransform: "uppercase",
    },
    h3: {
      fontFamily: 'var(--font-barlow-condensed), sans-serif',
      fontWeight: 700,
      textTransform: "uppercase",
    },
    button: {
      fontFamily: 'var(--font-barlow-condensed), sans-serif',
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.15em",
    },
  },
  shape: {
    borderRadius: 4, // Shaper/premium look per PRD
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(255, 255, 255, 0.1)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(255, 255, 255, 0.2)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#3B82F6",
            },
          },
        },
      },
    },
  },
});
