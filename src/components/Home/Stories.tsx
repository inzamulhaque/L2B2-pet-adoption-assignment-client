import { Box, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    text: "Adopting Max was the best decision we ever made. The process was smooth and the staff was incredibly helpful.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "David Thompson",
    text: "We found our perfect companion through this amazing organization. Luna has brought so much joy to our family.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    text: "The care and attention they give to matching pets with the right families is outstanding. We couldn't be happier with our Buddy!",
    image: "/placeholder.svg?height=100&width=100",
  },
];

const Stories = () => {
  return (
    <>
      <Container sx={{ py: { xs: 6, md: 10 } }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              mb: 2,
            }}
          >
            Happy Adoption Stories
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 700,
              mx: "auto",
            }}
          >
            Hear from families who have found their perfect companions through
            our adoption program.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} md={4} key={testimonial.id}>
              <Card sx={{ height: "100%", p: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Box
                    component="img"
                    src={testimonial.image}
                    alt={testimonial.name}
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      mr: 2,
                      objectFit: "cover",
                    }}
                  />
                  <Typography variant="h6" component="div">
                    {testimonial.name}
                  </Typography>
                </Box>
                <Typography variant="body1" color="text.secondary">
                  {testimonial.text}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Stories;
