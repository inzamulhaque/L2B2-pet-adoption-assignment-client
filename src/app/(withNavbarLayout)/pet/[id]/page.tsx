"use client";

import { useParams, useRouter } from "next/navigation";
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
  Tabs,
  Tab,
  Breadcrumbs,
  CircularProgress,
} from "@mui/material";
import {
  ArrowBack as ArrowBackIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Share as ShareIcon,
  Pets as PetsIcon,
  MedicalServices as MedicalIcon,
  Psychology as PersonalityIcon,
  Home as HomeIcon,
  NavigateNext as NavigateNextIcon,
} from "@mui/icons-material";
import Link from "next/link";
import { useEffect, useState } from "react";
import PetCard from "@/components/Shared/Pet/PetCard";

// Mock data for pets (same as in adopt page)
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
      "Max is a friendly and energetic Golden Retriever who loves to play fetch and go for long walks. He's great with children and other pets. He was rescued from a shelter where he was brought in as a stray. Despite his rough start, Max is a happy and well-adjusted dog who's ready to find his forever home.",
    status: "Available",
    image: "/placeholder.svg?height=300&width=400&text=Max",
    gallery: [
      "/placeholder.svg?height=600&width=800&text=Max+1",
      "/placeholder.svg?height=600&width=800&text=Max+2",
      "/placeholder.svg?height=600&width=800&text=Max+3",
    ],
    health: {
      vaccinated: true,
      neutered: true,
      microchipped: true,
      specialNeeds: false,
      specialNeedsDescription: "",
      medicalHistory:
        "Max is up-to-date on all vaccinations and has been neutered. He's in excellent health with no known medical issues.",
    },
    personality: {
      goodWithKids: true,
      goodWithDogs: true,
      goodWithCats: true,
      activityLevel: "High",
      traits: ["Friendly", "Energetic", "Loyal", "Playful", "Intelligent"],
    },
    adoptionRequirements: [
      "Home with a fenced yard",
      "Active lifestyle",
      "Experience with dogs preferred",
      "Home visit required",
      "Adoption fee: $250",
    ],
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
      "Luna is a curious and affectionate Siamese cat. She enjoys playing with toys and curling up in warm spots for naps. She was surrendered by her previous owner who could no longer care for her due to a move. Luna is a sweet cat who loves attention and would do well in a quiet home.",
    status: "Available",
    image: "/placeholder.svg?height=300&width=400&text=Luna",
    gallery: [
      "/placeholder.svg?height=600&width=800&text=Luna+1",
      "/placeholder.svg?height=600&width=800&text=Luna+2",
      "/placeholder.svg?height=600&width=800&text=Luna+3",
    ],
    health: {
      vaccinated: true,
      neutered: true,
      microchipped: true,
      specialNeeds: false,
      specialNeedsDescription: "",
      medicalHistory:
        "Luna is up-to-date on all vaccinations and has been spayed. She's in excellent health with no known medical issues.",
    },
    personality: {
      goodWithKids: true,
      goodWithDogs: false,
      goodWithCats: true,
      activityLevel: "Medium",
      traits: [
        "Affectionate",
        "Curious",
        "Vocal",
        "Intelligent",
        "Independent",
      ],
    },
    adoptionRequirements: [
      "Indoor-only home",
      "Experience with cats preferred",
      "No dogs in the home",
      "Adoption fee: $150",
    ],
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
      "Buddy is a loyal and well-trained Labrador. He's calm, patient, and would make a perfect family companion. He was surrendered by his previous owner who could no longer care for him due to health issues. Buddy is a gentle soul who loves to please and is looking for a loving home.",
    status: "Pending",
    image: "/placeholder.svg?height=300&width=400&text=Buddy",
    gallery: [
      "/placeholder.svg?height=600&width=800&text=Buddy+1",
      "/placeholder.svg?height=600&width=800&text=Buddy+2",
      "/placeholder.svg?height=600&width=800&text=Buddy+3",
    ],
    health: {
      vaccinated: true,
      neutered: true,
      microchipped: true,
      specialNeeds: false,
      specialNeedsDescription: "",
      medicalHistory:
        "Buddy is up-to-date on all vaccinations and has been neutered. He's in excellent health with no known medical issues.",
    },
    personality: {
      goodWithKids: true,
      goodWithDogs: true,
      goodWithCats: true,
      activityLevel: "Medium",
      traits: ["Loyal", "Calm", "Obedient", "Friendly", "Patient"],
    },
    adoptionRequirements: [
      "Home with a yard",
      "Family-oriented environment",
      "Home visit required",
      "Adoption fee: $250",
    ],
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
      "Coco is a majestic Maine Coon with a gentle personality. She's very affectionate and loves to be petted. She was found as a stray and brought to our shelter. Despite her rough start, Coco is a loving and gentle cat who enjoys human company and would make a wonderful companion.",
    status: "Available",
    image: "/placeholder.svg?height=300&width=400&text=Coco",
    gallery: [
      "/placeholder.svg?height=600&width=800&text=Coco+1",
      "/placeholder.svg?height=600&width=800&text=Coco+2",
      "/placeholder.svg?height=600&width=800&text=Coco+3",
    ],
    health: {
      vaccinated: true,
      neutered: true,
      microchipped: true,
      specialNeeds: false,
      specialNeedsDescription: "",
      medicalHistory:
        "Coco is up-to-date on all vaccinations and has been spayed. She's in excellent health with no known medical issues.",
    },
    personality: {
      goodWithKids: true,
      goodWithDogs: true,
      goodWithCats: true,
      activityLevel: "Medium",
      traits: ["Gentle", "Affectionate", "Calm", "Friendly", "Playful"],
    },
    adoptionRequirements: [
      "Indoor-only home",
      "Regular grooming commitment",
      "Adoption fee: $175",
    ],
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`pet-tabpanel-${index}`}
      aria-labelledby={`pet-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
};

const PetDetailsPage = () => {
  const params = useParams();
  const router = useRouter();
  const [pet, setPet] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [selectedImage, setSelectedImage] = useState("");
  const [similarPets, setSimilarPets] = useState<any[]>([]);

  useEffect(() => {
    // Simulate API call to get pet details
    const petId = Number(params.id);
    const foundPet = allPets.find((p) => p.id === petId);

    // Simulate loading delay
    setTimeout(() => {
      if (foundPet) {
        setPet(foundPet);
        setSelectedImage(foundPet.gallery[0]);

        // Find similar pets (same type or breed)
        const similar = allPets
          .filter(
            (p) =>
              p.id !== petId &&
              (p.type === foundPet.type || p.breed === foundPet.breed)
          )
          .slice(0, 3);
        setSimilarPets(similar);
      }
      setLoading(false);
    }, 1000);
  }, [params.id]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  if (loading) {
    return (
      <Box sx={{ minHeight: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "60vh",
          }}
        >
          <CircularProgress color="primary" />
        </Box>
      </Box>
    );
  }

  if (!pet) {
    return (
      <Box sx={{ minHeight: "100vh" }}>
        <Container sx={{ py: 8, textAlign: "center" }}>
          <PetsIcon sx={{ fontSize: 60, color: "text.secondary", mb: 2 }} />
          <Typography variant="h4" gutterBottom>
            Pet Not Found
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            We couldn&apos;t find the pet you&apos;re looking for.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ArrowBackIcon />}
            component={Link}
            href="/adopt"
          >
            Back to Adoption Page
          </Button>
        </Container>
      </Box>
    );
  }

  return (
    <>
      <Box sx={{ minHeight: "100vh" }}>
        <Container sx={{ py: 4 }}>
          {/* Breadcrumbs */}
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            sx={{ mb: 3 }}
          >
            <Link
              href="/"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
              }}
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </Link>
            <Link
              href="/adopt"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
              }}
            >
              <PetsIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Adopt
            </Link>
            <Typography
              color="text.primary"
              sx={{ display: "flex", alignItems: "center" }}
            >
              {pet.name}
            </Typography>
          </Breadcrumbs>

          {/* Back Button */}
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => router.back()}
            sx={{ mb: 3 }}
          >
            Back
          </Button>

          <Grid container spacing={4}>
            {/* Left Column - Images */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: "100%",
                  height: 400,
                  borderRadius: 2,
                  overflow: "hidden",
                  mb: 2,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
              >
                <Box
                  component="img"
                  src={selectedImage}
                  alt={pet.name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>

              <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                {pet.gallery.map((image: string, index: number) => (
                  <Box
                    key={index}
                    sx={{
                      width: 100,
                      height: 100,
                      borderRadius: 2,
                      overflow: "hidden",
                      cursor: "pointer",
                      border:
                        selectedImage === image
                          ? "3px solid"
                          : "3px solid transparent",
                      borderColor: "primary.main",
                    }}
                    onClick={() => handleImageClick(image)}
                  >
                    <Box
                      component="img"
                      src={image}
                      alt={`${pet.name} ${index + 1}`}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* Right Column - Pet Details */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  mb: 2,
                }}
              >
                <Box>
                  <Typography
                    variant="h3"
                    component="h1"
                    sx={{ fontWeight: "bold", mb: 1 }}
                  >
                    {pet.name}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {pet.breed} • {pet.age} • {pet.gender}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <IconButton
                    aria-label="add to favorites"
                    onClick={handleFavoriteClick}
                    color={favorite ? "primary" : "default"}
                  >
                    {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </Box>
              </Box>

              <Chip
                label={pet.status}
                size="medium"
                color={pet.status === "Available" ? "success" : "warning"}
                sx={{ fontWeight: "bold", mb: 3 }}
              />

              <Box sx={{ mb: 4 }}>
                <Typography variant="body1" paragraph>
                  {pet.description}
                </Typography>
              </Box>

              <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={6}>
                  <Paper sx={{ p: 2, textAlign: "center" }}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Type
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                      {pet.type}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper sx={{ p: 2, textAlign: "center" }}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Breed
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                      {pet.breed}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper sx={{ p: 2, textAlign: "center" }}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Age
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                      {pet.age}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper sx={{ p: 2, textAlign: "center" }}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Size
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                      {pet.size}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>

              {pet.status === "Available" ? (
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  sx={{ py: 1.5, mb: 2 }}
                >
                  Start Adoption Process
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  sx={{ py: 1.5, mb: 2 }}
                  disabled
                >
                  Adoption Pending
                </Button>
              )}

              <Button
                variant="outlined"
                color="primary"
                size="large"
                fullWidth
                sx={{ py: 1.5 }}
              >
                Ask About {pet.name}
              </Button>
            </Grid>
          </Grid>

          {/* Tabs Section */}
          <Box sx={{ mt: 6 }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label="pet details tabs"
              variant="fullWidth"
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "1rem",
                },
              }}
            >
              <Tab
                icon={<PetsIcon />}
                iconPosition="start"
                label="About"
                id="pet-tab-0"
                aria-controls="pet-tabpanel-0"
              />
              <Tab
                icon={<MedicalIcon />}
                iconPosition="start"
                label="Health"
                id="pet-tab-1"
                aria-controls="pet-tabpanel-1"
              />
              <Tab
                icon={<PersonalityIcon />}
                iconPosition="start"
                label="Personality"
                id="pet-tab-2"
                aria-controls="pet-tabpanel-2"
              />
              <Tab
                icon={<HomeIcon />}
                iconPosition="start"
                label="Adoption Requirements"
                id="pet-tab-3"
                aria-controls="pet-tabpanel-3"
              />
            </Tabs>

            <TabPanel value={tabValue} index={0}>
              <Typography variant="h6" gutterBottom>
                About {pet.name}
              </Typography>
              <Typography variant="body1" paragraph>
                {pet.description}
              </Typography>
              <Typography variant="body1">
                {pet.name} is a {pet.age} old {pet.gender.toLowerCase()}{" "}
                {pet.breed} who is currently {pet.status.toLowerCase()} for
                adoption.
                {pet.status === "Available"
                  ? " If you think you'd be a good match, please start the adoption process today!"
                  : " Someone is currently in the process of adopting this pet, but you can still ask about them or check out our other available pets."}
              </Typography>
            </TabPanel>

            <TabPanel value={tabValue} index={1}>
              <Typography variant="h6" gutterBottom>
                Health Information
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 3 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Medical Status
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="body2">Vaccinated:</Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: "medium" }}
                        >
                          {pet.health.vaccinated ? "Yes" : "No"}
                        </Typography>
                      </Box>
                      <Divider />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="body2">
                          Spayed/Neutered:
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: "medium" }}
                        >
                          {pet.health.neutered ? "Yes" : "No"}
                        </Typography>
                      </Box>
                      <Divider />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="body2">Microchipped:</Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: "medium" }}
                        >
                          {pet.health.microchipped ? "Yes" : "No"}
                        </Typography>
                      </Box>
                      <Divider />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="body2">Special Needs:</Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: "medium" }}
                        >
                          {pet.health.specialNeeds ? "Yes" : "No"}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 3, height: "100%" }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Medical History
                    </Typography>
                    <Typography variant="body2">
                      {pet.health.medicalHistory}
                    </Typography>
                    {pet.health.specialNeeds && (
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>
                          Special Needs Details:
                        </Typography>
                        <Typography variant="body2">
                          {pet.health.specialNeedsDescription}
                        </Typography>
                      </Box>
                    )}
                  </Paper>
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel value={tabValue} index={2}>
              <Typography variant="h6" gutterBottom>
                Personality & Behavior
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 3 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Compatibility
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="body2">Good with Kids:</Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: "medium" }}
                        >
                          {pet.personality.goodWithKids ? "Yes" : "No"}
                        </Typography>
                      </Box>
                      <Divider />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="body2">Good with Dogs:</Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: "medium" }}
                        >
                          {pet.personality.goodWithDogs ? "Yes" : "No"}
                        </Typography>
                      </Box>
                      <Divider />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="body2">Good with Cats:</Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: "medium" }}
                        >
                          {pet.personality.goodWithCats ? "Yes" : "No"}
                        </Typography>
                      </Box>
                      <Divider />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="body2">Activity Level:</Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: "medium" }}
                        >
                          {pet.personality.activityLevel}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 3 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Personality Traits
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}
                    >
                      {pet.personality.traits.map(
                        (trait: string, index: number) => (
                          <Chip key={index} label={trait} />
                        )
                      )}
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel value={tabValue} index={3}>
              <Typography variant="h6" gutterBottom>
                Adoption Requirements
              </Typography>
              <Paper sx={{ p: 3 }}>
                <Typography variant="body1" paragraph>
                  To ensure {pet.name} goes to the right home, we have the
                  following requirements:
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  {pet.adoptionRequirements.map(
                    (requirement: string, index: number) => (
                      <Typography
                        component="li"
                        variant="body1"
                        key={index}
                        sx={{ mb: 1 }}
                      >
                        {requirement}
                      </Typography>
                    )
                  )}
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Typography variant="body1" paragraph>
                    Our adoption process includes:
                  </Typography>
                  <Box component="ol" sx={{ pl: 2 }}>
                    <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                      Completing an adoption application
                    </Typography>
                    <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                      Meeting with an adoption counselor
                    </Typography>
                    <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                      Meeting {pet.name} in person
                    </Typography>
                    <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                      Home visit (for some animals)
                    </Typography>
                    <Typography component="li" variant="body1">
                      Paying the adoption fee and signing the adoption contract
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </TabPanel>
          </Box>

          {/* Similar Pets Section */}
          {similarPets.length > 0 && (
            <Box sx={{ mt: 8 }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{ mb: 4, fontWeight: 600 }}
              >
                You May Also Like
              </Typography>
              <Grid container spacing={3}>
                {similarPets.map((similarPet) => (
                  <Grid item xs={12} sm={6} md={4} key={similarPet.id}>
                    <PetCard pet={similarPet} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* Adoption CTA */}
          <Paper
            sx={{ p: 4, mt: 8, textAlign: "center", bgcolor: "primary.light" }}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Ready to Welcome {pet.name} Into Your Home?
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 3, maxWidth: 700, mx: "auto" }}
            >
              Start the adoption process today and give {pet.name} the loving
              home {pet.gender === "Male" ? "he" : "she"} deserves.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              {pet.status === "Available" ? (
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ px: 4 }}
                >
                  Start Adoption Process
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ px: 4 }}
                  disabled
                >
                  Adoption Pending
                </Button>
              )}
              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{ px: 4, bgcolor: "white" }}
              >
                Ask About {pet.name}
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default PetDetailsPage;
