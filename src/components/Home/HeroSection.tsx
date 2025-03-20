"use client";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import heroImage from "../../assets/landing_page/hero_kitten.jpg";

const HeroSection = () => {
  return (
    <>
      <Box bgcolor={"#eff2f7"} mt={2}>
        <Container>
          <Grid container spacing={3} height={"83vh"} alignItems={"center"}>
            <Grid item xs={12} md={6}>
              <Typography
                variant={"h1"}
                component={"h1"}
                fontWeight={700}
                fontSize={60}
              >
                Find Your Perfect <br /> Companion
              </Typography>

              <Typography
                variant={"body1"}
                component={"p"}
                fontWeight={500}
                fontSize={26}
                textAlign={"justify"}
                my={2}
              >
                Give a loving home to a pet in need. Browse our adoptable pets
                and find your new best friend today.
              </Typography>

              <Box
                component={"div"}
                sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}
              >
                <Button
                  variant="contained"
                  LinkComponent={Link}
                  href="/adopt"
                  size="large"
                >
                  Adopt Now
                </Button>

                <Button variant="outlined" color="primary" size="large">
                  Learn More
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                component={"div"}
                width={"90%"}
                height={"350px"}
                position="relative"
                sx={{
                  boxShadow: (theme) => theme.shadows[1],
                  borderRadius: "15px",
                }}
              >
                <Image
                  alt="Hero Image"
                  src={heroImage}
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: 15 }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;
