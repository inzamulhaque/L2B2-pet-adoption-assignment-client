"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";

interface Pet {
  id: number;
  name: string;
  type: string;
  breed: string;
  age: string;
  gender: string;
  size: string;
  description: string;
  status: string;
  image: string;
}

interface PetCardProps {
  pet: Pet;
}

const PetCard = ({ pet }: PetCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
  };

  return (
    <>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="200"
            image={pet.image}
            alt={pet.name}
          />
          <Box
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 1,
            }}
          >
            <Chip
              label={pet.status}
              size="small"
              color={pet.status === "Available" ? "success" : "warning"}
              sx={{ fontWeight: "bold" }}
            />
          </Box>
        </Box>

        <CardContent sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold", mb: 1 }}
            >
              {pet.name}
            </Typography>
            <IconButton
              aria-label="add to favorites"
              onClick={handleFavoriteClick}
              color={favorite ? "primary" : "default"}
              size="small"
            >
              {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
            <Chip label={pet.type} size="small" />
            <Chip label={pet.breed} size="small" />
            <Chip label={pet.age} size="small" />
            <Chip label={pet.gender} size="small" />
            <Chip label={pet.size} size="small" />
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {expanded
              ? pet.description
              : `${pet.description.substring(0, 100)}...`}
          </Typography>
        </CardContent>

        <Box sx={{ mt: "auto" }}>
          <Divider />
          <CardActions sx={{ justifyContent: "space-between" }}>
            <Button
              size="small"
              onClick={handleExpandClick}
              endIcon={
                <ExpandMoreIcon
                  sx={{
                    transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                  }}
                />
              }
            >
              {expanded ? "Show Less" : "Read More"}
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              disabled={pet.status !== "Available"}
            >
              Adopt Me
            </Button>
          </CardActions>
        </Box>
      </Card>
    </>
  );
};

export default PetCard;
