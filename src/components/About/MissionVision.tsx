import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import {
  Pets as PetsIcon,
  Favorite as FavoriteIcon,
} from "@mui/icons-material";
import React from "react";

const MissionVision = () => {
  return (
    <>
      <Box sx={{ bgcolor: "primary.light", py: { xs: 6, md: 8 } }}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 4, height: "100%" }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <PetsIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
                  <Typography
                    variant="h4"
                    component="h2"
                    sx={{ fontWeight: 600 }}
                  >
                    Our Mission
                  </Typography>
                </Box>
                <Typography variant="body1">
                  To find loving, permanent homes for all animals in our care
                  and to promote responsible pet ownership through education,
                  training, and community engagement. We believe every pet
                  deserves a chance at a happy, healthy life with a family who
                  loves them.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 4, height: "100%" }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <FavoriteIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
                  <Typography
                    variant="h4"
                    component="h2"
                    sx={{ fontWeight: 600 }}
                  >
                    Our Vision
                  </Typography>
                </Box>
                <Typography variant="body1">
                  A community where every pet has a loving home, where animal
                  cruelty and abandonment no longer exist, and where people and
                  pets form lifelong bonds. We envision a world where the
                  human-animal connection is valued and nurtured for the benefit
                  of both.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default MissionVision;
