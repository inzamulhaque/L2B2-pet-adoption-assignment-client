import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const impactStats = [
  { number: "5,000+", label: "Pets Adopted" },
  { number: "10+", label: "Years of Service" },
  { number: "200+", label: "Active Volunteers" },
  { number: "50+", label: "Community Partners" },
];

const Impact = () => {
  return (
    <>
      <Container sx={{ py: { xs: 6, md: 8 } }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{ textAlign: "center", mb: 6, fontWeight: 600 }}
        >
          Our Impact
        </Typography>
        <Grid container spacing={3}>
          {impactStats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 3,
                  borderRadius: 2,
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Typography
                  variant="h2"
                  component="div"
                  sx={{
                    fontWeight: 700,
                    color: "primary.main",
                    mb: 1,
                    fontSize: { xs: "2rem", md: "3rem" },
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Impact;
