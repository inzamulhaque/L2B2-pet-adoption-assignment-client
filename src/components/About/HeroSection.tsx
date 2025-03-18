import { Box, Container, Typography } from "@mui/material";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
          textAlign: "center",
        }}
      >
        <Container>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            About PawsForever
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{
              maxWidth: 800,
              mx: "auto",
              mb: 4,
              color: "text.secondary",
            }}
          >
            Our journey, mission, and the team behind our pet adoption center
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;
