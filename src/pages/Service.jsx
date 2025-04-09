// src/pages/Service.jsx
import React from 'react';
import { Container, Grid } from '@mui/material';
import TourismCard from '../components/TourismCard';
const servicesData = [
  {
    image: 'public/Tajmahal.jpg',
    title: 'Taj Mahal (Agra)',
    description: 'The Taj Mahal, located in Agra, India, is one of the most iconic and recognizable structures in the world.',
    productId: 'taj-mahal', 
  },
  {
    image: 'public/Ranikivav1.jpg',
    title: 'Rani Ki Vaav (Patan)',
    description: 'Rani Ki Vav, or the "Queen s Stepwell," is a stunning architectural marvel located in Patan, Gujarat, India.',
    productId: 'raniki-vav', 
  },
  {
    image: 'public/Sheeshmahal.jpg',
    title: 'Sheesh Maha (Udaipur)',
    description: 'The Shish Mahal is famous for its intricate mirror work, with walls adorned with thousands of tiny mirrors.',
    productId: 'sheesh-mahal', 
  },
  {
    image: 'public/Ajantacave.jpg',
    title: 'Ajanta Cave (Aurangabad)',
    description: 'Ajanta Caves are famous for their ancient Buddhist rock-cut caves with intricate paintings and sculptures.',
    productId: 'ajanta-cave', 
  },
  {
    image: 'public/khmbalida.jpg',
    title: 'Khambhalida Cave',
    description: 'The Khambhalida Caves are an ancient rock-cut cave complex known for their historical significance and exquisite sculptures.',
    productId: 'khambhalida-cave', 
  },
  {
    image: '/public/r1.jpg',
    title: 'Red Fort (Delhi)',
    description: 'The Red Fort is a UNESCO World Heritage Site and a symbol of India\'s rich history and architecture.',
    productId: 'red-fort', 
  },
];

const Service = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        {servicesData.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <TourismCard
              image={service.image}
              title={service.title}
              description={service.description}
              productId={service.productId} // Pass productId to the card
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Service;
