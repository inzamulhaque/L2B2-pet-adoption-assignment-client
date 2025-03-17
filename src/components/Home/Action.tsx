import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

const Action = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "secondary.light",
          py: { xs: 6, md: 10 },
          textAlign: "center",
        }}
      >
        <Container>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              mb: 2,
              color: "secondary.contrastText",
            }}
          >
            Ready to Find Your New Best Friend?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "secondary.contrastText",
              maxWidth: 700,
              mx: "auto",
              mb: 4,
              opacity: 0.9,
            }}
          >
            Start your adoption journey today and give a loving home to a pet in
            need.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Button variant="contained" color="primary" size="large">
              Browse Adoptable Pets
            </Button>
            <Button variant="outlined" sx={{ bgcolor: "white" }} size="large">
              Volunteer With Us
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Action;
