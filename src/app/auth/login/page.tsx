import React from 'react';
import { 
  Box, 
  Button, 
  Card, 
  CardContent, 
  Divider, 
  IconButton, 
  Stack, 
  TextField, 
  Typography, 
  Link,
  InputAdornment
} from '@mui/material';
import { 
  MailOutline, 
  LockOutlined, 
  Google, 
  Microsoft, 
  GitHub 
} from '@mui/icons-material';

// Styles Constants
const purpleGradient = 'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)';
const lightPurpleTint = '#f4f0ff'; // Background for input hover/focus

const LoginPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // Preserving the original background color from your image
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
          textAlign: 'center',
          p: 2,
        }}
      >
        <CardContent>
          {/* Top Icon Box with Purple Gradient */}
          <Box
            sx={{
              width: 60,
              height: 60,
              background: purpleGradient,
              borderRadius: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
            }}
          >
            <LockOutlined sx={{ color: '#fff', fontSize: 32 }} />
          </Box>

          <Typography variant="h4" sx={{ fontWeight: 800, color: '#4A00E0', mb: 1 }}>
            Welcome Back
          </Typography>
          <Typography variant="body2" sx={{ color: '#666', mb: 4 }}>
            Login to continue your journey
          </Typography>

          {/* Social Logins - Purple Gradient on Hover */}
          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 4 }}>
            {[<Google key="g" />, <Microsoft key="m" />, <GitHub key="gh" />].map((icon, index) => (
              <IconButton
                key={index}
                sx={{
                  border: '1.5px solid #eee',
                  borderRadius: 2.5,
                  width: 52,
                  height: 52,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: purpleGradient,
                    borderColor: 'transparent',
                    boxShadow: '0px 8px 15px rgba(74, 0, 224, 0.2)',
                    '& svg': { color: '#fff' }
                  }
                }}
              >
                {icon}
              </IconButton>
            ))}
          </Stack>

          <Divider sx={{ mb: 4, color: '#aaa', fontWeight: 600 }}>OR</Divider>

          {/* Input Box - Light Purple Background on Hover/Focus */}
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
                transition: 'background-color 0.3s',
                '&:hover, &.Mui-focused': {
                  backgroundColor: lightPurpleTint,
                },
                '& fieldset': { borderColor: '#e0e0e0' },
                '&.Mui-focused fieldset': { borderColor: '#4A00E0 !important' }
              }
            }}
            sx={{ mb: 3 }}
          />

          {/* Send OTP Button with Purple Gradient */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              py: 1.8,
              borderRadius: 4,
              textTransform: 'none',
              fontSize: '1rem',
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

          {/* Footer Navigation */}
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
            <Link href="#" underline="none" sx={{ color: '#4A00E0', fontSize: '0.85rem', fontWeight: 700 }}>
              Forgot Password?
            </Link>
            <Link href="#" underline="none" sx={{ color: '#4A00E0', fontSize: '0.85rem', fontWeight: 700 }}>
              Create Account
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;