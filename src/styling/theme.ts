import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    mono: React.CSSProperties;
    display: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    mono?: React.CSSProperties;
    display?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    mono: true;
    display: true;
  }
}

const theme = createTheme({
  typography: {
    // DEFAULT → Geist Sans
    fontFamily: 'var(--font-geist-sans), system-ui, sans-serif',

    // For HERO / marketing
    display: {
      fontFamily: 'var(--font-space-grotesk)',
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },

    // For CODE / metrics
    mono: {
      fontFamily: 'var(--font-geist-mono)',
      fontSize: '0.9rem',
    },

    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
});

export default theme;
