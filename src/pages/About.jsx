import React, { useEffect, useRef } from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import gsap from 'gsap';

const About = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    gsap.from(sectionsRef.current, {
      opacity: 1,
      y: 30,
      duration: 1.2,
      stagger: 0.3,
      ease: 'power3.out',
    });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff', // White background for better contrast
        py: 8,
        px: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* About Section Header */}
        <Box ref={(el) => (sectionsRef.current[0] = el)} sx={{ mb: 8, textAlign: 'center' }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 'bold', color: '#FF6347' }} // Updated to match theme (Gradient-like colors)
          >
            About Adventure Awaits
          </Typography>
          <Typography variant="h5" color="textSecondary" paragraph>
            We’re a passionate team dedicated to crafting unforgettable travel experiences. Our mission is to inspire and enable you to explore the wonders of the world, whether it’s a remote destination or a bustling city.
          </Typography>
        </Box>

        {/* Mission and Values Section */}
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Box
              ref={(el) => (sectionsRef.current[1] = el)}
              sx={{
                textAlign: 'center',
                backgroundColor: '#f0f0f0',
                p: 4,
                borderRadius: '8px',
              }}
            >
              <Typography
                variant="h3"
                sx={{ fontWeight: 'bold', color: '#FF6347' }} // Matching title color
                gutterBottom
              >
                Our Mission
              </Typography>
              <Typography variant="h6" color="textSecondary" paragraph>
                At Adventure Awaits, we believe that travel is more than just visiting new places. It’s about creating memories, experiencing diverse cultures, and connecting with the world in meaningful ways.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              ref={(el) => (sectionsRef.current[2] = el)}
              sx={{
                textAlign: 'center',
                backgroundColor: '#f0f0f0',
                p: 4,
                borderRadius: '8px',
              }}
            >
              <Typography
                variant="h3"
                sx={{ fontWeight: 'bold', color: '#FF6347' }} // Matching title color
                gutterBottom
              >
                Why Choose Us?
              </Typography>
              <Typography variant="h6" color="textSecondary" paragraph>
                We specialize in unique, curated travel experiences that cater to adventurers and explorers of all kinds. Whether you're seeking thrilling adventures, tranquil retreats, or cultural immersion, we’ve got you covered.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Adventure Philosophy */}
        <Box
          ref={(el) => (sectionsRef.current[3] = el)}
          sx={{
            textAlign: 'center',
            mt: 8,
            backgroundColor: '#e3f2fd',
            p: 6,
            borderRadius: '12px',
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: 'bold', color: '#FF6347' }} // Updated heading color
            gutterBottom
          >
            Embrace the Adventure
          </Typography>
          <Typography variant="h6" color="textPrimary" paragraph>
            "Adventure Awaits" isn't just our name—it's a philosophy. We believe that every moment on the road can be an adventure, whether you're hiking through mountains, diving into oceans, or exploring city streets. Life is short—make it an adventure!
          </Typography>
        </Box>

        {/* Call to Action */}
        <Box
          ref={(el) => (sectionsRef.current[4] = el)}
          sx={{ textAlign: 'center', mt: 6 }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            Ready to Start Your Journey?
          </Typography>
          <Button
            variant="contained"
            sx={{
              fontSize: '1rem',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              borderRadius: '30px',
              px: 5,
              py: 2,
              background: 'linear-gradient(45deg, #FF6347 30%, #FFA07A 90%)', // Updated to gradient
              color: 'white',
              '&:hover': {
                background: 'linear-gradient(45deg, #FFA07A 30%, #FF6347 90%)',
              },
            }}
            href="/contact"
            endIcon={<ArrowForward />}
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
