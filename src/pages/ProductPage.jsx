import React, { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Button,
  Stepper,
  Step,
  StepLabel,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { gsap } from "gsap";

const products = {
  "sheesh-mahal": {
    title: "Sheesh Mahal",
    description:
      "Sheesh Mahal is a stunning example of Mughal architecture, known for its intricate glass work and beautiful gardens.",
    history:
      "Built in the 16th century, Sheesh Mahal is famous for its reflective glass work.",
    location: "Located in Rajasthan, India.",
    establishment: "Built in the 16th century.",
    bestTimeToVisit:
      "October to March is the best time to visit for pleasant weather.",
    totalExpense: "Approx. $30 per person for entry and guided tours.",
    image: "/Sheeshmahal.jpg",
  },
  "taj-mahal": {
    title: "Taj Mahal",
    description:
      "The Taj Mahal is a magnificent mausoleum built in memory of Mumtaz Mahal, known for its stunning white marble architecture.",
    history:
      "Construction began in 1632 and was completed in 1653, commissioned by Mughal Emperor Shah Jahan.",
    location: "Located in Agra, Uttar Pradesh, India.",
    establishment: "Built between 1632 and 1653.",
    bestTimeToVisit: "November to February is ideal for cooler weather.",
    totalExpense: "Approx. $15 per person for entry; additional for guides.",
    image: "/Tajmahal.jpg",
  },
  "raniki-vav": {
    title: "Ran ki Vaav",
    description:
      "Ran ki Vaav is a stepwell in Gujarat, showcasing intricate carvings and architecture from the Solanki era.",
    history: "Built in the 11th century, it is a UNESCO World Heritage Site.",
    location: "Located in Gujarat, India.",
    establishment: "Built in the 11th century.",
    bestTimeToVisit: "November to February for pleasant weather.",
    totalExpense: "Approx. $20 per person for entry and guides.",
    image: "/Ranikivav.jpg",
  },
  "ajanta-cave": {
    title: "Ajanta Cave",
    description:
      "Ajanta Caves are rock-cut Buddhist cave monuments famous for their beautiful frescoes and sculptures.",
    history:
      "Dating back to the 2nd century BCE to 6th century CE, they depict the life of Buddha.",
    location: "Located near Aurangabad, Maharashtra, India.",
    establishment: "Dating back to the 2nd century BCE.",
    bestTimeToVisit: "October to March is ideal for visiting.",
    totalExpense: "Approx. $10 per person for entry.",
    image: "/Ajantacave.jpg",
  },
  "khambhalida-cave": {
    title: "Khambhalida Cave",
    description:
      "Khambhalida Caves are ancient rock-cut caves known for their intricate carvings and historical significance.",
    history:
      "Believed to be carved in the 4th-5th century CE, they are dedicated to Avalokiteshvara.",
    location: "Located in Gujarat, India.",
    establishment: "Carved in the 4th-5th century CE.",
    bestTimeToVisit: "October to March for comfortable weather.",
    totalExpense: "Approx. $15 per person for entry.",
    image: "/Khmbalida.jpg",
  },
  "red-fort": {
    title: "Red Fort",
    description:
      "Red Fort is a historic fort in Delhi and a UNESCO World Heritage Site, famous for its stunning red sandstone architecture.",
    history:
      "Built between 1638 and 1648, it served as the main residence of the Mughal emperors.",
    location: "Located in Delhi, India.",
    establishment: "Constructed between 1638 and 1648.",
    bestTimeToVisit: "October to March for pleasant sightseeing.",
    totalExpense: "Approx. $10 per person for entry.",
    image: "/r1.jpg",
  },
};

const ProductPage = () => {
  const { productId } = useParams();
  const product = products[productId];
  const productIds = Object.keys(products);
  const currentIndex = productIds.indexOf(productId);
  const imageRef = useRef(null);

  // GSAP animations for image
  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, [productId]);

  if (!product) {
    return (
      <Container>
        <Typography variant="h4" color="error">
          Product not found!
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 5 }}>
      <Stepper activeStep={currentIndex} alternativeLabel>
        {productIds.map((id) => (
          <Step key={id}>
            <StepLabel>
              <Link
                to={`/product/${id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {products[id].title}
              </Link>
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Product Details */}
      <Card
        sx={{ mt: 5, p: 2, borderRadius: 3, boxShadow: 3, bgcolor: "white" }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              ref={imageRef}
              height="400"
              image={product.image}
              alt={product.title}
              sx={{
                borderRadius: 3,
                boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography
                variant="h3"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#FF6347" }}
              >
                {product.title}
              </Typography>

              <Typography variant="body1" paragraph>
                {product.description}
              </Typography>

              <Box mt={3}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  History:
                </Typography>
                <Typography variant="body2" paragraph>
                  {product.history}
                </Typography>
              </Box>

              <Box mt={1}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Location:
                </Typography>
                <Typography variant="body2" paragraph>
                  {product.location}
                </Typography>
              </Box>

              <Box mt={1}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Establishment:
                </Typography>
                <Typography variant="body2" paragraph>
                  {product.establishment}
                </Typography>
              </Box>

              <Box mt={1}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Best Time to Visit:
                </Typography>
                <Typography variant="body2" paragraph>
                  {product.bestTimeToVisit}
                </Typography>
              </Box>

              <Box mt={1}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Total Expense:
                </Typography>
                <Typography variant="body2" paragraph>
                  {product.totalExpense}
                </Typography>
              </Box>

              <Link to="/home">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    mt: 3,
                    bgcolor: "#FF6347",
                    ":hover": { bgcolor: "#FF4500" },
                  }}
                >
                  Back to Home
                </Button>
              </Link>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default ProductPage;
