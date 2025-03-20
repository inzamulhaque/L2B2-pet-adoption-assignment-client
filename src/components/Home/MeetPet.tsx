"use client"; // If using Next.js App Router

import { useEffect, useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import PetCard from "../Shared/Pet/PetCard";

// Featured pets data
const featuredPets = [
  {
    id: 1,
    name: "Max",
    type: "Dog",
    breed: "Golden Retriever",
    age: "2 years",
    gender: "Male",
    size: "Large",
    description:
      "Max is a friendly and energetic Golden Retriever who loves to play fetch and go for long walks. He's great with children and other pets.",
    status: "Available",
    image: "/placeholder.svg?height=300&width=400&text=Max",
  },
  {
    id: 2,
    name: "Luna",
    type: "Cat",
    breed: "Siamese",
    age: "1 year",
    gender: "Female",
    size: "Medium",
    description:
      "Luna is a curious and affectionate Siamese cat. She enjoys playing with toys and curling up in warm spots for naps.",
    status: "Available",
    image: "/placeholder.svg?height=300&width=400&text=Luna",
  },
  {
    id: 3,
    name: "Buddy",
    type: "Dog",
    breed: "Labrador",
    age: "3 years",
    gender: "Male",
    size: "Large",
    description:
      "Buddy is a loyal and well-trained Labrador. He's calm, patient, and would make a perfect family companion.",
    status: "Available",
    image: "/placeholder.svg?height=300&width=400&text=Buddy",
  },
  {
    id: 4,
    name: "Coco",
    type: "Cat",
    breed: "Maine Coon",
    age: "2 years",
    gender: "Female",
    size: "Large",
    description:
      "Coco is a majestic Maine Coon with a gentle personality. She's very affectionate and loves to be petted.",
    status: "Available",
    image: "/placeholder.svg?height=300&width=400&text=Coco",
  },
];

const MeetPet = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent rendering on server to avoid mismatch
  }

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
            Meet Our Featured Pets
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 700,
              mx: "auto",
            }}
          >
            These loving animals are waiting for their forever homes. Each one
            has a unique personality and lots of love to give.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {featuredPets.map((pet) => (
            <Grid item xs={12} sm={6} md={3} key={pet.id}>
              <PetCard pet={pet} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/adopt"
          >
            View All Pets
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default MeetPet;
