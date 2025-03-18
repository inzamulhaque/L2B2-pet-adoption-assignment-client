import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const StorySection = () => {
  return (
    <>
      <Container sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ mb: 3, fontWeight: 600 }}
            >
              Our Story
            </Typography>
            <Typography variant="body1" paragraph>
              PawsForever was founded in 2013 by Dr. Sarah Johnson, a
              veterinarian with a passion for animal welfare. What began as a
              small rescue operation has grown into one of the region&apos;s
              most respected pet adoption centers.
            </Typography>
            <Typography variant="body1" paragraph>
              Our journey started when Dr. Johnson witnessed the overwhelming
              number of abandoned and homeless animals in our community.
              Determined to make a difference, she gathered a team of dedicated
              animal lovers and established PawsForever.
            </Typography>
            <Typography variant="body1">
              Today, we&apos;ve helped thousands of pets find loving homes and
              continue to expand our services to include education, community
              outreach, and specialized care for animals with special needs.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/placeholder.svg?height=400&width=600"
              alt="PawsForever shelter"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default StorySection;
