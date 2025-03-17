import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import {
  Pets as PetsIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Phone as PhoneIcon,
} from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box sx={{ bgcolor: "background.paper", py: 6 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <PetsIcon sx={{ mr: 1, color: "primary.main" }} />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: 700, color: "primary.main" }}
                >
                  PawsForever
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Our mission is to find loving homes for all animals in need and
                to promote responsible pet ownership.
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                {/* Social Media Icons would go here */}
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                Quick Links
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Button
                  color="inherit"
                  sx={{ justifyContent: "center", p: 0, py: 0.5 }}
                >
                  Home
                </Button>
                <Button
                  color="inherit"
                  sx={{ justifyContent: "center", p: 0, py: 0.5 }}
                >
                  Adopt
                </Button>
                <Button
                  color="inherit"
                  sx={{ justifyContent: "center", p: 0, py: 0.5 }}
                >
                  Donate
                </Button>
                <Button
                  color="inherit"
                  sx={{ justifyContent: "center", p: 0, py: 0.5 }}
                >
                  Volunteer
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                About
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Button
                  color="inherit"
                  sx={{ justifyContent: "center", p: 0, py: 0.5 }}
                >
                  Our Story
                </Button>
                <Button
                  color="inherit"
                  sx={{ justifyContent: "center", p: 0, py: 0.5 }}
                >
                  Team
                </Button>
                <Button
                  color="inherit"
                  sx={{ justifyContent: "center", p: 0, py: 0.5 }}
                >
                  Testimonials
                </Button>
                <Button
                  color="inherit"
                  sx={{ justifyContent: "center", p: 0, py: 0.5 }}
                >
                  FAQ
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                Contact Us
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <PhoneIcon
                    sx={{ mr: 1, color: "primary.main", fontSize: 20 }}
                  />
                  <Typography variant="body2">(123) 456-7890</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <InfoIcon
                    sx={{ mr: 1, color: "primary.main", fontSize: 20 }}
                  />
                  <Typography variant="body2">info@pawsforever.com</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <HomeIcon
                    sx={{ mr: 1, color: "primary.main", fontSize: 20, mt: 0.5 }}
                  />
                  <Typography variant="body2">
                    123 Adoption Street
                    <br />
                    Pet City, PC 12345
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ my: 4 }} />
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} PawsForever. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
