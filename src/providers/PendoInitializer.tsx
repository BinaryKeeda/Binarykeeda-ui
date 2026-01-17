// 'use client';

// import { useSession, useUser } from '@descope/nextjs-sdk/client';
// import { usePathname } from 'next/navigation';
// import { useEffect, useMemo } from 'react';

// import { PendoProvider } from './PendoProvider';

// // import type { PendoInitializeConfig } from '@/types/pendo';

// const AUTH_ROUTE_MATCHERS = [
//   '/auth/login',
//   '/auth',
//   '/callback',
//   '/oauth',
// ];

// export default function PendoWrapper({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();
//   const { user } = useUser();
//   const { isAuthenticated, isSessionLoading } = useSession();

//   const isAuthRoute = AUTH_ROUTE_MATCHERS.some((route) =>
//     pathname?.includes(route),
//   );

//   // 🔒 Side-effect only: configure Pendo globals once auth is stable
//   useEffect(() => {
//     if (
//       isAuthRoute ||
//       isSessionLoading ||
//       !isAuthenticated ||
//       !user
//     ) {
//       return;
//     }

//     if (typeof window !== 'undefined') {
//       window.pendo = window.pendo ?? { _q: [] };

//       window.pendo.config = {
//         excludeURLs: [
//           /discord\.com/,
//           /descope\.com/,
//           /oauth/,
//           /callback/,
//           /login/,
//         ],
//         disableGuides: true,
//       };
//     }
//   }, [
//     isAuthRoute,
//     isSessionLoading,
//     isAuthenticated,
//     user,
//   ]);

//   const pendoConfig: PendoInitializeConfig | null = useMemo(() => {
//     if (
//       isAuthRoute ||
//       isSessionLoading ||
//       !isAuthenticated ||
//       !user
//     ) {
//       return null;
//     }

//     return {
//       visitor: {
//         id: user.userId,
//         email: user.email,
//       },
//       account: {
//         id: user.userId,
//       },
//     };
//   }, [
//     isAuthRoute,
//     isSessionLoading,
//     isAuthenticated,
//     user,
//   ]);

//   if (isSessionLoading) {
//     return null;
//   }

//   return (
//     <PendoProvider pendoConfig={pendoConfig}>
//       {children}
//     </PendoProvider>
//   );
// }
