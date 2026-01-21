import React from 'react';
import { 
  Box, 
  Button, 
  Card, 
  CardContent, 
  TextField, 
  Typography, 
  Link,
  InputAdornment,
  IconButton
} from '@mui/material';
import { 
  MailOutline, 
  LockOutlined, 
  ArrowBack 
} from '@mui/icons-material';

// Styles Constants
const purpleGradient = 'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)';
const lightPurpleTint = '#f4f0ff'; // Background for input hover/focus

const ResetPasswordPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // Preserving the original background color
        background: 'linear-gradient(135deg, #f5eef8 0%, #fdf2f9 100%)',
        padding: 2,
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: 420,
          borderRadius: 6,
          boxShadow: '0px 20px 40px rgba(74, 0, 224, 0.1)',
          padding: 2,
        }}
      >
        <CardContent>
          {/* Back to Login Button */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <IconButton 
              size="small" 
              sx={{ color: '#4A00E0', mr: 0.5 }}
              aria-label="back to login"
            >
              <ArrowBack fontSize="small" />
            </IconButton>
            <Link 
              href="/login" 
              underline="none" 
              sx={{ color: '#4A00E0', fontWeight: 700, fontSize: '0.95rem' }}
            >
              Back to Login
            </Link>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            {/* Top Icon Box with Purple Gradient */}
            <Box
              sx={{
                width: 65,
                height: 65,
                background: purpleGradient,
                borderRadius: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
              }}
            >
              <LockOutlined sx={{ color: '#fff', fontSize: 36 }} />
            </Box>

            <Typography variant="h4" sx={{ fontWeight: 800, color: '#4A00E0', mb: 1 }}>
              Reset Password
            </Typography>
            <Typography variant="body1" sx={{ color: '#666', mb: 5, fontWeight: 500 }}>
              We'll send you an OTP to reset your password
            </Typography>

            {/* Input Field - Background turns Light Purple on Hover/Focus */}
            <TextField
              fullWidth
              placeholder="Email or Phone Number"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutline sx={{ color: '#aaa' }} />
                  </InputAdornment>
                ),
                sx: { 
                  borderRadius: 4, 
                  backgroundColor: '#fff',
                  height: 56,
                  transition: 'background-color 0.3s',
                  '&:hover, &.Mui-focused': {
                    backgroundColor: lightPurpleTint,
                  },
                  '&.Mui-focused fieldset': { borderColor: '#4A00E0 !important' }
                }
              }}
              sx={{ mb: 4 }}
            />

            {/* Send OTP Button with Purple Gradient */}
            <Button
              fullWidth
              variant="contained"
              sx={{
                py: 1.8,
                borderRadius: 4,
                textTransform: 'none',
                fontSize: '1.05rem',
                fontWeight: 700,
                background: purpleGradient,
                boxShadow: '0px 8px 20px rgba(74, 0, 224, 0.25)',
                '&:hover': {
                  filter: 'brightness(1.1)',
                  boxShadow: '0px 10px 25px rgba(74, 0, 224, 0.35)',
                },
              }}
            >
              Send OTP
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ResetPasswordPage;