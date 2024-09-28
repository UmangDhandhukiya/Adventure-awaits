import React from 'react';
import { Container, Grid, Typography, Box, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer>
      <Box
        component="div"
        sx={{
          mt: 5,  // Top margin for separation from main content
          px: { xs: 3, sm: 10 },
          py: { xs: 5, sm: 10 },
          background: 'linear-gradient(to right, #dc7633, #f5b041)',  // Gradient background
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            {/* About Section */}
            <Grid item xs={12} sm={4}>
              <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ 
                  fontSize: { xs: '1.2rem', sm: '1.5rem' }, 
                  fontWeight: 'bold',
                }}
              >
               <u>About Us</u>
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}
              >
                Explore the world with us. Discover amazing destinations and make your next trip unforgettable.
              </Typography>
            </Grid>

            {/* Quick Links Section */}
            <Grid item xs={12} sm={4}>
              <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ 
                  fontSize: { xs: '1.2rem', sm: '1.5rem' }, 
                  fontWeight: 'bold',
                }}
              >
                <u>Quick Links</u>
              </Typography>
              {['Home', 'About', 'Services', 'Contact'].map((text, index) => (
                <Box key={index} my={1}>
                  <Link 
                    href={`/${text.toLowerCase()}`} 
                    color="inherit" 
                    underline="none" 
                    sx={{
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                      transition: 'color 0.3s ease, transform 0.3s ease',  // Smooth hover transition
                      '&:hover': {
                        color: 'black',  // Yellow on hover
                        transform: 'translateX(5px)',  // Slide to the right
                      },
                    }}
                  >
                    {text}
                  </Link>
                </Box>
              ))}
            </Grid>

            {/* Social Media Links Section */}
            <Grid item xs={12} sm={4}>
              <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ 
                  fontSize: { xs: '1.2rem', sm: '1.5rem' }, 
                  fontWeight: 'bold',
                }}
              >
                <u>Follow Us</u>

              </Typography>
              {[
                { icon: <Facebook />, url: 'https://facebook.com' },
                { icon: <Instagram />, url: 'https://instagram.com' },
                { icon: <Twitter />, url: 'https://twitter.com' },
                { icon: <YouTube />, url: 'https://youtube.com' },
              ].map((social, index) => (
                <IconButton 
                  key={index} 
                  color="inherit" 
                  href={social.url} 
                  target="_blank" 
                  sx={{ 
                    transition: 'transform 0.3s ease',  // Smooth scale animation
                    '&:hover': {
                      transform: 'rotate(360deg)',  // Rotate on hover
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Grid>
          </Grid>

          {/* Copyright Section */}
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            <Typography 
              variant="body2" 
              sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}
            >
              &copy; 2024 Adventure Awaits. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
