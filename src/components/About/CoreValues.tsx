import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import {
  Favorite as FavoriteIcon,
  Home as HomeIcon,
  CheckCircle as CheckCircleIcon,
  School as SchoolIcon,
} from "@mui/icons-material";
import React from "react";

const coreValues = [
  {
    title: "Compassion",
    description:
      "We treat every animal with kindness and respect, providing the care they deserve.",
    icon: <FavoriteIcon color="primary" fontSize="large" />,
  },
  {
    title: "Responsibility",
    description:
      "We promote responsible pet ownership and ethical treatment of all animals.",
    icon: <CheckCircleIcon color="primary" fontSize="large" />,
  },
  {
    title: "Community",
    description:
      "We build a supportive community of animal lovers, volunteers, and adopters.",
    icon: <HomeIcon color="primary" fontSize="large" />,
  },
  {
    title: "Education",
    description:
      "We educate the public about animal welfare and the benefits of adoption.",
    icon: <SchoolIcon color="primary" fontSize="large" />,
  },
];

const CoreValues = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#f5f5f5", py: { xs: 6, md: 8 } }}>
        <Container>
          <Typography
            variant="h3"
            component="h2"
            sx={{ textAlign: "center", mb: 6, fontWeight: 600 }}
          >
            Our Core Values
          </Typography>
          <Grid container spacing={4}>
            {coreValues.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ height: "100%" }}>
                  <CardContent sx={{ textAlign: "center", p: 4 }}>
                    <Box sx={{ mb: 2 }}>{value.icon}</Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ mb: 2, fontWeight: 600 }}
                    >
                      {value.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default CoreValues;
