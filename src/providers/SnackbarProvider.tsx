import { CheckCircle, Close, Warning } from '@mui/icons-material';
import {
  Snackbar,
  type AlertColor,
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import React, {
  createContext,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
  use,
} from 'react';

export interface SnakProps {
  open?: boolean;
  message?: string;
  severity?: AlertColor;
  duration?: number;
}

interface SnakContextType {
  setSnackbar: (props: SnakProps) => void;
  closeSnak: () => void;
}

const SnakContext = createContext<SnakContextType | null>(null);

export const SnackbarProvider2: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [snak, setSnakState] = useState<Required<SnakProps>>({
    open: false,
    message: '',
    severity: 'info',
    duration: 3000,
  });

  const setSnackbar = useCallback((props: SnakProps) => {
    setSnakState((prev) => ({
      ...prev,
      open: props.open ?? true,
      message: props.message ?? prev.message,
      severity: props.severity ?? prev.severity,
      duration: props.duration ?? prev.duration,
    }));
  }, []);

  const closeSnak = useCallback(() => {
    setSnakState((prev) => ({ ...prev, open: false }));
  }, []);

  // ✅ memoize context value to prevent re-renders
  const contextValue = useMemo(
    () => ({ setSnackbar, closeSnak }),
    [setSnackbar, closeSnak]
  );

  return (
    <SnakContext value={contextValue}>
      {children}

      <Snackbar
        open={snak.open}
        autoHideDuration={snak.duration}
        onClose={closeSnak}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Box
          sx={{
            border: snak.severity === 'success' ? '1px solid #CFD8DC' : 'none',
            width: '420px',
            height: snak.severity === 'error' ? '117px' : '67px',
            borderRadius: '3px',
            padding: '10px 20px',
            maxWidth: 600,
            bgcolor: snak.severity === 'error' ? '#E53935' : '#FFFFFF',
            color: snak.severity === 'error' ? '#fff' : '#000',
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {snak.severity === 'error' && (
            <>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mt: '5px',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: '16px',
                    fontFamily: 'Geist, sans-serif',
                    lineHeight: 1,
                  }}
                >
                  Error
                </Typography>
                <IconButton
                  sx={{
                    color: '#F8BBD0',
                    '&:hover': { background: 'rgba(255,255,255,0.15)' },
                  }}
                  onClick={closeSnak}
                >
                  <Close fontSize="medium" />
                </IconButton>
              </Box>

              <Typography
                sx={{
                  fontSize: '15px',
                  lineHeight: 1.4,
                  fontWeight: 500,
                }}
              >
                {snak.message}
              </Typography>
            </>
          )}

          {snak.severity === 'success' && (
            <Box
              sx={{
                width: 380,
                height: 47,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                opacity: 1,
              }}
            >
              <CheckCircle sx={{ color: '#00C853' }} />
              {snak.message}
            </Box>
          )}
          {snak.severity === 'warning' && (
            <Box
              sx={{
                width: 380,
                height: 47,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                opacity: 1,
              }}
            >
              <Warning sx={{ color: '#00C853' }} />
              {snak.message}
            </Box>
          )}
        </Box>
      </Snackbar>
    </SnakContext>
  );
};

export const useSnackbar = (): SnakContextType => {
  const context = use(SnakContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};
