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
  PersonOutline, 
  Google, 
  Microsoft, 
  GitHub 
} from '@mui/icons-material';

// Defining our target Purple Gradient
const purpleGradient = 'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)';

const AuthCard = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f4f4f9', // Light neutral background to make the purple pop
        padding: 2,
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: 420,
          borderRadius: 8,
          boxShadow: '0px 15px 35px rgba(74, 0, 224, 0.1)',
          textAlign: 'center',
          p: 2,
        }}
      >
        <CardContent>
          {/* Top Profile Icon with Purple Gradient */}
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
            <PersonOutline sx={{ color: '#fff', fontSize: 32 }} />
          </Box>

          <Typography variant="h4" sx={{ fontWeight: 800, color: '#4A00E0', mb: 1 }}>
            Create Account
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 4 }}>
            Join us today and get started
          </Typography>

          {/* Social Icons with Gradient Hover Effect */}
          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 4 }}>
            {[<Google key="g" />, <Microsoft key="m" />, <GitHub key="gh" />].map((icon, index) => (
              <IconButton
                key={index}
                sx={{
                  border: '2px solid #eee',
                  borderRadius: 2.5,
                  width: 50,
                  height: 50,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: purpleGradient,
                    borderColor: 'transparent',
                    color: '#fff', // White icon on hover
                    '& svg': { color: '#fff' }
                  }
                }}
              >
                {icon}
              </IconButton>
            ))}
          </Stack>

          <Divider sx={{ mb: 4, color: '#ccc', fontWeight: 600 }}>OR</Divider>

          {/* Input Box with Purple Focus */}
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
                '&.Mui-focused fieldset': {
                    borderImageSource: purpleGradient,
                    borderImageSlice: 1,
                }
              }
            }}
            sx={{ 
                mb: 3,
                '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': { borderColor: '#8E2DE2' },
                }
            }}
          />

          {/* Primary Action Button with Purple Gradient */}
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
              boxShadow: '0px 8px 20px rgba(74, 0, 224, 0.3)',
              '&:hover': {
                filter: 'brightness(1.1)',
                boxShadow: '0px 10px 25px rgba(74, 0, 224, 0.4)',
              },
            }}
          >
            Send OTP
          </Button>

          {/* Footer Navigation */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="body2" sx={{ color: '#666' }}>
              Already have an account?{' '}
              <Link 
                href="#" 
                underline="none" 
                sx={{ color: '#4A00E0', fontWeight: 700, ml: 0.5 }}
              >
                Login
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AuthCard;
