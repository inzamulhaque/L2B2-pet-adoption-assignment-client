import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import {
  Favorite as FavoriteIcon,
  Home as HomeIcon,
  EmojiPeople as EmojiPeopleIcon,
} from "@mui/icons-material";
import React from "react";

const VolunteerSection = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "secondary.light",
          py: { xs: 6, md: 8 },
          textAlign: "center",
        }}
      >
        <Container>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 600,
              mb: 3,
              color: "secondary.contrastText",
            }}
          >
            Join Our Volunteer Team
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 800,
              mx: "auto",
              mb: 4,
              color: "secondary.contrastText",
              opacity: 0.9,
            }}
          >
            Our volunteers are the heart of our organization. If you&apos;re
            ```tsx passionate about animal welfare, we team. There are many ways
            to contribute your time and talents.
          </Typography>
          <Grid container spacing={3} justifyContent="center" sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ p: 3 }}>
                <EmojiPeopleIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                  Animal Care
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Help with feeding, grooming, and socializing our animals.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ p: 3 }}>
                <HomeIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                  Foster Program
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Provide temporary homes for animals awaiting adoption.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ p: 3 }}>
                <FavoriteIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                  Events & Outreach
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Help with adoption events and community education programs.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default VolunteerSection;
