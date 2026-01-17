"use client";

import { ENV } from "@/constants/Httpclient";
import { AuthProvider } from "@descope/nextjs-sdk";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import QueryProvider from "./QueryProvider";
import { SnackbarProvider } from "@/context/SnackbarContext";
import theme from "@/styling/theme";

// import { AuthReadyGate } from '@/auth/AuthRequiredGate';
// import { OrganizationProvider } from '@/context/OrganisationContext';
// import { SnackbarProvider } from '@/context/SnackbarContext';
// import { ENV } from '@/helpers/HttpClient';
// import theme from '@/styling/theme';

// import PendoWrapper from './PendoInitializer';
// import QueryProvider from './QueryProvider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <AuthProvider
    //   projectId={process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID!}
    //   persistTokens
    //   // sessionTokenViaCookie={false}
    //   // refreshTokenViaCookie={false}
    //   sessionTokenViaCookie={{
    //     secure: ENV === 'production' ? true : false,
    //     sameSite: 'Lax',
    //   }}
    //   refreshTokenViaCookie={{
    //     secure: ENV === 'production' ? true : false,
    //     sameSite: 'Lax',
    //   }}
    // >
    <AppRouterCacheProvider>
      <QueryProvider>
        {/* <OrganizationProvider> */}
        <SnackbarProvider>
          {/* <PendoProvider> */}
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </SnackbarProvider>
        {/* </OrganizationProvider> */}
      </QueryProvider>
    </AppRouterCacheProvider>
    // </AuthProvider>
  );
}
