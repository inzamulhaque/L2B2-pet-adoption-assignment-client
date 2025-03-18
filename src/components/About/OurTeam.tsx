import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Founder & Director",
    bio: "With over 15 years of veterinary experience, Dr. Johnson founded PawsForever with a mission to ensure every pet finds a loving home.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Michael Rodriguez",
    role: "Adoption Coordinator",
    bio: "Michael has helped match over 500 pets with their forever families and ensures our adoption process runs smoothly.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Emily Chen",
    role: "Veterinary Specialist",
    bio: "Emily provides medical care for all our animals and ensures they're healthy and ready for their new homes.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "David Wilson",
    role: "Community Outreach",
    bio: "David organizes our community events and educational programs to promote responsible pet ownership.",
    image: "/placeholder.svg?height=200&width=200",
  },
];

const OurTeam = () => {
  return (
    <>
      <Container sx={{ py: { xs: 6, md: 8 } }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{ textAlign: "center", mb: 2, fontWeight: 600 }}
        >
          Meet Our Team
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            maxWidth: 800,
            mx: "auto",
            mb: 6,
            color: "text.secondary",
          }}
        >
          Our dedicated staff works tirelessly to care for animals and find them
          loving homes. Each team member brings unique skills and a shared
          passion for animal welfare.
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={member.image}
                  alt={member.name}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 600 }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    sx={{ mb: 2 }}
                  >
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.bio}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default OurTeam;
