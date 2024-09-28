// src/components/TourismCard.jsx
import React, { useRef } from 'react';
import { CardContent, Typography, Button, Box } from '@mui/material';
import gsap from 'gsap';
import { Link } from 'react-router-dom'; // Import Link
import './TourismCard.css'; // CSS for additional styling

const TourismCard = ({ image, title, description, productId }) => { // Accept productId as prop
  const imageRef = useRef(null);
  const buttonRef = useRef(null);

  const handleCardMouseEnter = () => {
    gsap.to(imageRef.current, {
      scale: 1.1, // Zoom out image when card is hovered
      duration: 0.3,
    });
  };

  const handleCardMouseLeave = () => {
    gsap.to(imageRef.current, {
      scale: 1, // Reset image size
      duration: 0.3,
    });
  };

  const handleButtonClick = () => {
    gsap.to(buttonRef.current, {
      y: -10, // Floating effect
      duration: 0.2,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: 1,
    });
  };

  return (
    <Box
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
      sx={{
        maxWidth: { xs: '100%', sm: 400 }, // Responsive card width
        height: 'auto',
        borderRadius: 3,
        boxShadow: 3,
        overflow: 'hidden',
        position: 'relative',
        transition: 'transform 0.3s',
        margin: 'auto',
        mb: '16px', // Add bottom margin for spacing
      }}
      className="tourism-card"
    >
      {/* Image Section */}
      <Box
        component="img"
        src={image}
        alt={title}
        ref={imageRef} // Assign ref to the image
        sx={{
          width: '100%',
          height: { xs: '200px', sm: '330px' }, // Responsive image height
          objectFit: 'cover',
          transition: 'transform 0.3s ease', // Smooth transition for zoom effect
        }}
      />

      {/* Content Section */}
      <CardContent
        sx={{
          padding: { xs: '16px', sm: '24px' },
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          {description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link} // Make the button a Link
          to={`/product/${productId}`} // Redirect to product page
          ref={buttonRef}
          onClick={handleButtonClick}
          sx={{
            padding: { xs: '8px 16px', sm: '10px 20px' },
            fontSize: { xs: '0.8rem', sm: '1rem' },
            transition: 'transform 0.3s ease',
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', // Gradient color
            color: 'white',
            '&:hover': {
              background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)', // Gradient on hover
            },
          }}
        >
          Explore
        </Button>
      </CardContent>
    </Box>
  );
};

export default TourismCard;
