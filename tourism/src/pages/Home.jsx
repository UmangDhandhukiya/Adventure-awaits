import React, { useState, useEffect, useRef } from 'react';
import { Container, Typography, Button, Box, Grid, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { ArrowForward, Favorite, FavoriteBorder } from '@mui/icons-material';
import { Zoom, Fade } from 'react-awesome-reveal';
import Rating from '@mui/material/Rating';
import { Parallax } from 'react-parallax';
import gsap from 'gsap';
import './Home.css'; // Add custom styles here

const places = [
  {
    id: 1,
    images: ['public/Tajmahal.jpg', 'public/t1.jpg', 'public/t2.jpg'],
    title: 'Tajmahal Agra',
    description: 'A symbol of love and one of the most iconic structures in the world.',
    rating: 4.5,
  },
  {
    id: 2,
    images: ['public/r1.jpg', 'public/r2.jpg', 'public/r3.jpg'],
    title: 'Red-Fort Delhi',
    description: 'A majestic fort representing the rich history of our India.',
    rating: 4.0,
  },
  {
    id: 3,
    images: ['public/Ajantacave.jpg', 'public/a1.jpg', 'public/a2.jpg'],
    title: 'Ajanta Cave',
    description: 'Discover ancient rock-cut caves with mesmerizing paintings.',
    rating: 5.0,
  },
];

const Home = () => {
  const [liked, setLiked] = useState({});
  const [currentImage, setCurrentImage] = useState({});
  const imageRefs = useRef([]);

  const handleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Auto-rotate images with GSAP animation
  useEffect(() => {
    const imageIntervals = places.map((place) => {
      return setInterval(() => {
        setCurrentImage((prev) => ({
          ...prev,
          [place.id]: (prev[place.id] || 0) + 1 < place.images.length
            ? (prev[place.id] || 0) + 1
            : 0,
        }));
      }, 1500);
    });

    return () => imageIntervals.forEach(clearInterval);
  }, []);

  // Animate the image change with GSAP
  useEffect(() => {
    places.forEach((place, index) => {
      if (imageRefs.current[index]) {
        gsap.fromTo(
          imageRefs.current[index],
          { opacity: 0 },
          { opacity: 1, duration: 0.5 }
        );
      }
    });
  }, [currentImage]);

  return (
    <div>
      {/* Hero Section with Parallax Effect */}
      <Parallax bgImage="public/k.jpg" strength={500}>
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
          <Container maxWidth="lg">
            <Grid container spacing={5} alignItems="center">
              {/* Text Section */}
              <Grid item xs={12} md={6}>
                <Fade bottom>
                  <Typography variant="h2" component="h1" color="white" gutterBottom>
                    Explore the World with Us!
                  </Typography>
                </Fade>
                <Fade bottom delay={300}>
                  <Typography variant="h6" color="white" paragraph>
                    Discover unforgettable destinations and make memories that last a lifetime.
                  </Typography>
                </Fade>
                <Zoom delay={600}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    href="/services"
                    sx={{
                      mt: 3,
                      background: 'linear-gradient(45deg, #FF6347 30%, #FFA07A 90%)',
                      color: 'white',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #FFA07A 30%, #FF6347 90%)',
                      },
                    }}
                  >
                    Start Your Journey
                  </Button>
                </Zoom>
              </Grid>

              {/* Image Section */}
              <Grid item xs={12} md={6}>
                <Fade right>
                  <img
                    src="public/c.jpg"
                    alt="Destination"
                    className="hero-image"
                    style={{
                      width: '100%',
                      border: '5px solid white',
                      borderRadius: '10px',
                      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                    }}
                  />
                </Fade>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Parallax>

      {/* Popular Places Section */}
      <Box sx={{ py: 6, backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom textAlign="center">
            Popular Places
          </Typography>
          <Grid container spacing={4}>
            {places.map((place, index) => (
              <Grid item xs={12} sm={6} md={4} key={place.id}>
                <Card sx={{ position: 'relative', boxShadow: 3, borderRadius: 2, height: '350px' }}> {/* Fixed card height */}
                  <CardMedia
                    component="img"
                    image={place.images[currentImage[place.id] || 0]}
                    alt={place.title}
                    ref={(el) => (imageRefs.current[index] = el)}
                    sx={{
                      objectFit: 'cover', // Maintain aspect ratio
                      height: '200px', // Fixed height for all images
                      borderRadius: '10px 10px 0 0', // Rounded corners on top
                      transition: 'opacity 0.5s ease-in-out', // Smooth transition
                    }}
                  />
                  <CardContent
                    sx={{
                      height: '150px', // Fixed height for card content
                      display: 'flex', // Use flexbox for alignment
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography variant="h6" component="div" gutterBottom>
                      {place.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {place.description}
                    </Typography>
                    {/* Rating */}
                    <Rating
                      name={`rating-${place.id}`}
                      value={place.rating}
                      precision={0.5}
                      readOnly
                    />
                    {/* Like Button with gradient */}
                    <IconButton
                      onClick={() => handleLike(place.id)}
                      sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        background: liked[place.id]
                          ? 'linear-gradient(45deg, white, #FFA07A)'
                          : 'transparent',
                        color: 'transparent',
                        '& .MuiSvgIcon-root': {
                          fill: liked[place.id]
                            ? 'url(#heart-gradient)'
                            : 'rgba(0, 0, 0, 0.54)',
                        },
                      }}
                    >
                      {liked[place.id] ? <Favorite /> : <FavoriteBorder />}
                    </IconButton>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Add a gradient for the heart icon using SVG */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="heart-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FF6347', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#FFA07A', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Home;
