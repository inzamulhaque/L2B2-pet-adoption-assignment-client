"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  CircularProgress,
  Skeleton,
} from "@mui/material";
import {
  Search as SearchIcon,
  FilterList as FilterListIcon,
  Pets as PetsIcon,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import PetCard from "@/components/Shared/Pet/PetCard";

// Mock data for pets
const allPets = [
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
    status: "Pending",
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
  {
    id: 5,
    name: "Rocky",
    type: "Dog",
    breed: "German Shepherd",
    age: "4 years",
    gender: "Male",
    size: "Large",
    description:
      "Rocky is an intelligent and protective German Shepherd. He's well-trained and would make an excellent guard dog and companion.",
    status: "Available",
    image: "/placeholder.svg?height=300&width=400&text=Rocky",
  },
  {
    id: 6,
    name: "Milo",
    type: "Cat",
    breed: "Persian",
    age: "3 years",
    gender: "Male",
    size: "Medium",
    description:
      "Milo is a laid-back Persian cat who enjoys a peaceful environment. He's very clean and has beautiful, fluffy fur.",
    status: "Pending",
    image: "/placeholder.svg?height=300&width=400&text=Milo",
  },
  {
    id: 7,
    name: "Bailey",
    type: "Dog",
    breed: "Beagle",
    age: "1 year",
    gender: "Female",
    size: "Medium",
    description:
      "Bailey is a playful and curious Beagle puppy. She's energetic, loves to explore, and is great with children.",
    status: "Available",
    image: "/placeholder.svg?height=300&width=400&text=Bailey",
  },
  {
    id: 8,
    name: "Simba",
    type: "Cat",
    breed: "Bengal",
    age: "2 years",
    gender: "Male",
    size: "Medium",
    description:
      "Simba is an active and playful Bengal cat. He's very intelligent and enjoys interactive toys and climbing.",
    status: "Available",
    image: "/placeholder.svg?height=300&width=400&text=Simba",
  },
  {
    id: 9,
    name: "Daisy",
    type: "Dog",
    breed: "Poodle",
    age: "5 years",
    gender: "Female",
    size: "Small",
    description:
      "Daisy is a gentle and well-mannered Poodle. She's hypoallergenic and would be perfect for someone with allergies.",
    status: "Available",
    image: "/placeholder.svg?height=300&width=400&text=Daisy",
  },
  {
    id: 10,
    name: "Oliver",
    type: "Cat",
    breed: "Tabby",
    age: "1 year",
    gender: "Male",
    size: "Small",
    description:
      "Oliver is a playful and affectionate Tabby kitten. He's very social and gets along well with other pets.",
    status: "Available",
    image: "/placeholder.svg?height=300&width=400&text=Oliver",
  },
  {
    id: 11,
    name: "Charlie",
    type: "Dog",
    breed: "Bulldog",
    age: "3 years",
    gender: "Male",
    size: "Medium",
    description:
      "Charlie is a friendly and laid-back Bulldog. He enjoys short walks and lots of naps on the couch.",
    status: "Available",
    image: "/placeholder.svg?height=300&width=400&text=Charlie",
  },
  {
    id: 12,
    name: "Lily",
    type: "Cat",
    breed: "Ragdoll",
    age: "4 years",
    gender: "Female",
    size: "Medium",
    description:
      "Lily is a calm and gentle Ragdoll cat. She loves to be held and will follow you around the house.",
    status: "Available",
    image: "/placeholder.svg?height=300&width=400&text=Lily",
  },
  {
    id: 13,
    name: "Cooper",
    type: "Dog",
    breed: "Australian Shepherd",
    age: "2 years",
    gender: "Male",
    size: "Medium",
    description:
      "Cooper is an intelligent and energetic Australian Shepherd. He needs an active owner who can provide plenty of exercise and mental stimulation.",
    status: "Available",
    image: "/placeholder.svg?height=300&width=400&text=Cooper",
  },
  {
    id: 14,
    name: "Bella",
    type: "Cat",
    breed: "Scottish Fold",
    age: "3 years",
    gender: "Female",
    size: "Small",
    description:
      "Bella is a sweet and quiet Scottish Fold. She enjoys peaceful environments and gentle affection.",
    status: "Pending",
    image: "/placeholder.svg?height=300&width=400&text=Bella",
  },
  {
    id: 15,
    name: "Tucker",
    type: "Dog",
    breed: "Boxer",
    age: "1 year",
    gender: "Male",
    size: "Large",
    description:
      "Tucker is a playful and energetic Boxer puppy. He's very social and loves to play with people and other dogs.",
    status: "Available",
    image: "/placeholder.svg?height=300&width=400&text=Tucker",
  },
  {
    id: 16,
    name: "Sophie",
    type: "Cat",
    breed: "Calico",
    age: "2 years",
    gender: "Female",
    size: "Medium",
    description:
      "Sophie is a beautiful Calico cat with a friendly personality. She enjoys window watching and playing with feather toys.",
    status: "Available",
    image: "/placeholder.svg?height=300&width=400&text=Sophie",
  },
];

const AdoprPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [filterAge, setFilterAge] = useState("All");
  const [filterGender, setFilterGender] = useState("All");
  const [filterSize, setFilterSize] = useState("All");
  const [filterStatus, setFilterStatus] = useState("Available");

  const [visiblePets, setVisiblePets] = useState<typeof allPets>([]);
  const [displayCount, setDisplayCount] = useState(8);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  // Filter pets based on search and filter criteria
  const filteredPets = allPets.filter((pet) => {
    const matchesSearch =
      pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = filterType === "All" || pet.type === filterType;
    const matchesAge =
      filterAge === "All" ||
      (filterAge === "Under 1 year" && pet.age.includes("month")) ||
      (filterAge === "1-3 years" &&
        (pet.age.includes("1 year") ||
          pet.age.includes("2 year") ||
          pet.age.includes("3 year"))) ||
      (filterAge === "4+ years" && Number.parseInt(pet.age) >= 4);

    const matchesGender = filterGender === "All" || pet.gender === filterGender;
    const matchesSize = filterSize === "All" || pet.size === filterSize;
    const matchesStatus = filterStatus === "All" || pet.status === filterStatus;

    return (
      matchesSearch &&
      matchesType &&
      matchesAge &&
      matchesGender &&
      matchesSize &&
      matchesStatus
    );
  });

  // Simulate initial loading
  useEffect(() => {
    setTimeout(() => {
      setVisiblePets(filteredPets.slice(0, displayCount));
      setInitialLoading(false);
    }, 1500);
  }, []);

  // Update visible pets when filters change
  useEffect(() => {
    setVisiblePets(filteredPets.slice(0, displayCount));
  }, [
    searchTerm,
    filterType,
    filterAge,
    filterGender,
    filterSize,
    filterStatus,
    displayCount,
  ]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleLoadMore = () => {
    setLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setDisplayCount((prev) => prev + 4);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <Box sx={{ minHeight: "100vh" }}>
        {/* Hero Section */}
        <Box
          sx={{
            py: { xs: 6, md: 10 },
            background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
            textAlign: "center",
          }}
        >
          <Container>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
              }}
            >
              Adopt a Pet
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                maxWidth: 800,
                mx: "auto",
                mb: 4,
                color: "text.secondary",
              }}
            >
              Find your perfect companion from our selection of loving animals
              waiting for their forever homes.
            </Typography>
          </Container>
        </Box>

        {/* Main Content */}
        <Container sx={{ py: 8 }}>
          {/* Search and Filters */}
          <Paper sx={{ p: 3, mb: 6 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  placeholder="Search pets by name, breed, or description..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  sx={{ mb: 2, display: "flex", alignItems: "center" }}
                >
                  <FilterListIcon sx={{ mr: 1 }} /> Filter Options
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={2.4}>
                    <FormControl fullWidth size="small">
                      <InputLabel>Pet Type</InputLabel>
                      <Select
                        value={filterType}
                        label="Pet Type"
                        onChange={(e) => setFilterType(e.target.value)}
                      >
                        <MenuItem value="All">All Types</MenuItem>
                        <MenuItem value="Dog">Dogs</MenuItem>
                        <MenuItem value="Cat">Cats</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={2.4}>
                    <FormControl fullWidth size="small">
                      <InputLabel>Age</InputLabel>
                      <Select
                        value={filterAge}
                        label="Age"
                        onChange={(e) => setFilterAge(e.target.value)}
                      >
                        <MenuItem value="All">All Ages</MenuItem>
                        <MenuItem value="Under 1 year">Under 1 year</MenuItem>
                        <MenuItem value="1-3 years">1-3 years</MenuItem>
                        <MenuItem value="4+ years">4+ years</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={2.4}>
                    <FormControl fullWidth size="small">
                      <InputLabel>Gender</InputLabel>
                      <Select
                        value={filterGender}
                        label="Gender"
                        onChange={(e) => setFilterGender(e.target.value)}
                      >
                        <MenuItem value="All">All Genders</MenuItem>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={2.4}>
                    <FormControl fullWidth size="small">
                      <InputLabel>Size</InputLabel>
                      <Select
                        value={filterSize}
                        label="Size"
                        onChange={(e) => setFilterSize(e.target.value)}
                      >
                        <MenuItem value="All">All Sizes</MenuItem>
                        <MenuItem value="Small">Small</MenuItem>
                        <MenuItem value="Medium">Medium</MenuItem>
                        <MenuItem value="Large">Large</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={2.4}>
                    <FormControl fullWidth size="small">
                      <InputLabel>Status</InputLabel>
                      <Select
                        value={filterStatus}
                        label="Status"
                        onChange={(e) => setFilterStatus(e.target.value)}
                      >
                        <MenuItem value="All">All Statuses</MenuItem>
                        <MenuItem value="Available">Available</MenuItem>
                        <MenuItem value="Pending">Pending</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>

          {/* Results Count */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Typography variant="h6">
              {filteredPets.length} pets found
            </Typography>
          </Box>

          {/* Pet Cards */}
          <Grid container spacing={3}>
            {initialLoading
              ? // Skeleton loading state
                Array.from(new Array(8)).map((_, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card sx={{ height: "100%" }}>
                      <Skeleton variant="rectangular" height={200} />
                      <CardContent>
                        <Skeleton variant="text" height={30} width="60%" />
                        <Skeleton variant="text" height={20} width="40%" />
                        <Skeleton variant="text" height={20} width="70%" />
                        <Skeleton
                          variant="rectangular"
                          height={36}
                          sx={{ mt: 2 }}
                        />
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              : visiblePets.map((pet) => (
                  <Grid item xs={12} sm={6} md={3} key={pet.id}>
                    <PetCard pet={pet} />
                  </Grid>
                ))}
          </Grid>

          {/* Load More Button */}
          {!initialLoading && visiblePets.length < filteredPets.length && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleLoadMore}
                disabled={loading}
                startIcon={
                  loading ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : null
                }
              >
                {loading ? "Loading..." : "Load More Pets"}
              </Button>
            </Box>
          )}

          {/* No Results */}
          {!initialLoading && visiblePets.length === 0 && (
            <Box sx={{ textAlign: "center", py: 8 }}>
              <PetsIcon sx={{ fontSize: 60, color: "text.secondary", mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                No pets found
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Try adjusting your search or filter criteria to find more pets.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setSearchTerm("");
                  setFilterType("All");
                  setFilterAge("All");
                  setFilterGender("All");
                  setFilterSize("All");
                  setFilterStatus("Available");
                }}
              >
                Reset Filters
              </Button>
            </Box>
          )}

          {/* Adoption Process */}
          <Box sx={{ mt: 10 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ mb: 4, textAlign: "center", fontWeight: 600 }}
            >
              How to Adopt
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Paper sx={{ p: 4, height: "100%", textAlign: "center" }}>
                  <Box
                    sx={{
                      bgcolor: "primary.light",
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{ color: "primary.main", fontWeight: "bold" }}
                    >
                      1
                    </Typography>
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    Browse & Select
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Look through our available pets and find one that matches
                    your lifestyle and preferences.
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={3}>
                <Paper sx={{ p: 4, height: "100%", textAlign: "center" }}>
                  <Box
                    sx={{
                      bgcolor: "primary.light",
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{ color: "primary.main", fontWeight: "bold" }}
                    >
                      2
                    </Typography>
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    Submit Application
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Fill out our adoption application form with your information
                    and details about your home.
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={3}>
                <Paper sx={{ p: 4, height: "100%", textAlign: "center" }}>
                  <Box
                    sx={{
                      bgcolor: "primary.light",
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{ color: "primary.main", fontWeight: "bold" }}
                    >
                      3
                    </Typography>
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    Meet & Greet
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Visit our shelter to meet your potential new pet and see if
                    you&apos;re a good match for each other.
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={3}>
                <Paper sx={{ p: 4, height: "100%", textAlign: "center" }}>
                  <Box
                    sx={{
                      bgcolor: "primary.light",
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{ color: "primary.main", fontWeight: "bold" }}
                    >
                      4
                    </Typography>
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    Welcome Home
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Complete the adoption process, pay the adoption fee, and
                    welcome your new pet into their forever home.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AdoprPage;
