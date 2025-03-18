import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import {
  Pets as PetsIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
} from "@mui/icons-material";
import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Box
        sx={{
          bgcolor: "#f8f9fa",
          py: 8,
          borderTop: "1px solid",
          borderColor: "divider",
          mt: 6,
        }}
      >
        <Container fixed>
          <Grid container spacing={6}>
            {/* Logo and Description */}
            <Grid item xs={3}>
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
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 3, lineHeight: 1.7 }}
              >
                Our mission is to find loving homes for all animals in need and
                to promote responsible pet ownership.
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton
                  color="primary"
                  aria-label="Facebook"
                  size="small"
                  sx={{
                    bgcolor: "rgba(106, 90, 205, 0.1)",
                    "&:hover": { bgcolor: "rgba(106, 90, 205, 0.2)" },
                  }}
                >
                  <FacebookIcon fontSize="small" />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="Twitter"
                  size="small"
                  sx={{
                    bgcolor: "rgba(106, 90, 205, 0.1)",
                    "&:hover": { bgcolor: "rgba(106, 90, 205, 0.2)" },
                  }}
                >
                  <TwitterIcon fontSize="small" />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="Instagram"
                  size="small"
                  sx={{
                    bgcolor: "rgba(106, 90, 205, 0.1)",
                    "&:hover": { bgcolor: "rgba(106, 90, 205, 0.2)" },
                  }}
                >
                  <InstagramIcon fontSize="small" />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="YouTube"
                  size="small"
                  sx={{
                    bgcolor: "rgba(106, 90, 205, 0.1)",
                    "&:hover": { bgcolor: "rgba(106, 90, 205, 0.2)" },
                  }}
                >
                  <YouTubeIcon fontSize="small" />
                </IconButton>
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={3}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                Quick Links
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                <Typography
                  component={Link}
                  href="/"
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textDecoration: "none",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  Home
                </Typography>
                <Typography
                  component={Link}
                  href="/adopt"
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textDecoration: "none",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  Adopt
                </Typography>
                <Typography
                  component={Link}
                  href="/donate"
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textDecoration: "none",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  Donate
                </Typography>
                <Typography
                  component={Link}
                  href="/volunteer"
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textDecoration: "none",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  Volunteer
                </Typography>
              </Box>
            </Grid>

            {/* About */}
            <Grid item xs={3}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                About
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                <Typography
                  component={Link}
                  href="/about"
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textDecoration: "none",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  Our Story
                </Typography>
                <Typography
                  component={Link}
                  href="/about#team"
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textDecoration: "none",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  Team
                </Typography>
                <Typography
                  component={Link}
                  href="/testimonials"
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textDecoration: "none",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  Testimonials
                </Typography>
                <Typography
                  component={Link}
                  href="/faq"
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textDecoration: "none",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  FAQ
                </Typography>
              </Box>
            </Grid>

            {/* Contact */}
            <Grid item xs={3}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                Contact Us
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <PhoneIcon
                    sx={{ mr: 1.5, color: "primary.main", fontSize: 18 }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    (123) 456-7890
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <EmailIcon
                    sx={{ mr: 1.5, color: "primary.main", fontSize: 18 }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    info@pawsforever.com
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <LocationIcon
                    sx={{
                      mr: 1.5,
                      color: "primary.main",
                      fontSize: 18,
                      mt: 0.3,
                    }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    123 Adoption Street
                    <br />
                    Pet City, PC 12345
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              © {currentYear} PawsForever. All rights reserved.
            </Typography>
            <Box sx={{ display: "flex", gap: 3 }}>
              <Typography
                component={Link}
                href="/privacy"
                variant="body2"
                color="text.secondary"
                sx={{
                  textDecoration: "none",
                  "&:hover": { color: "primary.main" },
                }}
              >
                Privacy Policy
              </Typography>
              <Typography
                component={Link}
                href="/terms"
                variant="body2"
                color="text.secondary"
                sx={{
                  textDecoration: "none",
                  "&:hover": { color: "primary.main" },
                }}
              >
                Terms of Service
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
