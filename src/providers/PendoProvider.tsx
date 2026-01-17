// // 'use client';

// // import { useEffect } from 'react';

// // import { loadPendo, usePendoInitialize } from '@/lib/pendo';

// // import type { PendoInitializeConfig } from '@/types/pendo';

// interface PendoProviderProps {
//   children: React.ReactNode;
//   pendoConfig: PendoInitializeConfig | null;
// }

// export function PendoProvider({ children, pendoConfig }: PendoProviderProps) {
//   useEffect(() => {
//     loadPendo();
//   }, []);

//   usePendoInitialize(pendoConfig);

//   return children;
// }
