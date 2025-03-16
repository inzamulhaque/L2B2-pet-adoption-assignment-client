"use client"; // If using Next.js App Router

import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

// Featured pets data
const featuredPets = [
  {
    id: 1,
    name: "Max",
    type: "Dog",
    breed: "Golden Retriever",
    age: "2 years",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    name: "Luna",
    type: "Cat",
    breed: "Siamese",
    age: "1 year",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    name: "Buddy",
    type: "Dog",
    breed: "Labrador",
    age: "3 years",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    name: "Coco",
    type: "Cat",
    breed: "Maine Coon",
    age: "2 years",
    image: "/placeholder.svg?height=300&width=400",
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
    <Container>
      <Box mt={5}>
        <Typography
          variant="h3"
          component="h3"
          textAlign="center"
          fontWeight={700}
        >
          Meet Our Featured Pets
        </Typography>

        <Typography
          variant="body1"
          component="p"
          textAlign="center"
          sx={{ padding: "0 25% 0 25%" }}
        >
          These loving animals are waiting for their forever homes. Each one has
          a unique personality and lots of love to give.
        </Typography>

        <Grid container spacing={3}>
          {featuredPets.map((pet) => (
            <Grid item xs={12} sm={6} md={3} key={pet.id}>
              <Card sx={{ height: "100%" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={pet.image}
                    alt={pet.name}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: 600 }}
                    >
                      {pet.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {pet.type} • {pet.breed}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {pet.age}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{ mt: 2 }}
                      fullWidth
                    >
                      Meet {pet.name}
                    </Button>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ textAlign: "center", my: 4 }}>
        <Button variant="contained" color="primary" size="large">
          View All Pets
        </Button>
      </Box>
    </Container>
  );
};

export default MeetPet;
