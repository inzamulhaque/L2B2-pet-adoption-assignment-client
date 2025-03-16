import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

import {
  Pets as PetsIcon,
  Favorite as FavoriteIcon,
  Home as HomeIcon,
} from "@mui/icons-material";

// Adoption steps
const adoptionSteps = [
  {
    title: "Browse Available Pets",
    description:
      "Look through our selection of loving animals waiting for their forever homes.",
    icon: <PetsIcon fontSize="large" color="primary" />,
  },
  {
    title: "Submit Application",
    description:
      "Fill out our adoption application to help us match you with the perfect pet.",
    icon: <HomeIcon fontSize="large" color="primary" />,
  },
  {
    title: "Meet Your Match",
    description:
      "Visit our shelter to meet your potential new family member in person.",
    icon: <FavoriteIcon fontSize="large" color="primary" />,
  },
  {
    title: "Welcome Home",
    description:
      "Complete the adoption process and welcome your new pet into their forever home.",
    icon: <HomeIcon fontSize="large" color="primary" />,
  },
];

const Works = () => {
  return (
    <>
      <Box sx={{ bgcolor: "primary.light", py: { xs: 6, md: 10 } }}>
        <Container>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                mb: 2,
                color: "primary.contrastText",
              }}
            >
              How Adoption Works
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "primary.contrastText",
                maxWidth: 700,
                mx: "auto",
                opacity: 0.9,
              }}
            >
              Our adoption process is designed to ensure the best match between
              pets and their new families.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {adoptionSteps.map((step, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    borderRadius: 4,
                    bgcolor: "background.paper",
                  }}
                >
                  <Box sx={{ mb: 2 }}>{step.icon}</Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ mb: 1, fontWeight: 600 }}
                  >
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Works;
