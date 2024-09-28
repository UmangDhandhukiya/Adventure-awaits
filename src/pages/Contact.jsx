import React, { useRef, useEffect } from 'react';
import { Container, TextField, Button, Typography, Box, Grid } from '@mui/material';
import { gsap } from 'gsap';
import { Send } from '@mui/icons-material';

const Contact = () => {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        py: 6,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md" ref={formRef}>
        {/* Contact Us Header */}
        <Typography
          variant="h3"
          component="h1"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#FF6347' }} // Updated to match tourism theme
        >
          Contact Us
        </Typography>
        <Typography
          variant="body1"
          align="center"
          paragraph
          color="textSecondary"
          sx={{ color: '#333' }} // Slightly darker for better readability
        >
          We're here to help! Whether you have a question about our services, need assistance, or just want to share your travel experience, feel free to reach out.
        </Typography>

        {/* Contact Form */}
        <form noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                required
                sx={{ bgcolor: 'white', borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                required
                sx={{ bgcolor: 'white', borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                required
                sx={{ bgcolor: 'white', borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                required
                sx={{ bgcolor: 'white', borderRadius: 1 }}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<Send />}
                sx={{
                  px: 4,
                  py: 1.5,
                  textTransform: 'uppercase',
                  borderRadius: '30px',
                  background: 'linear-gradient(45deg, #FF6347 30%, #FFA07A 90%)', // Gradient matching theme
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #FFA07A 30%, #FF6347 90%)', // Inverted hover effect
                  },
                }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default Contact;
