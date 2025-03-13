"use client";

import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import Person2Icon from "@mui/icons-material/Person2";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [showUserIcon, setShowUserIcon] = useState<boolean>(false);

  return (
    <Box component={"div"} sx={{ backgroundColor: "#f8f9fb" }}>
      <Container>
        <Stack
          py={2}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box component={"span"} color={"primary.main"}>
            <PetsIcon />

            <Typography
              variant="h4"
              component={Link}
              href="/"
              fontWeight={600}
              fontSize={"22px"}
              ml={1}
              color={"primary.main"}
              sx={{ textDecoration: "none" }}
            >
              PawsForever
            </Typography>
          </Box>

          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Typography
              variant="h6"
              component={Link}
              href="/"
              sx={{ textDecoration: "none" }}
            >
              Home
            </Typography>
            <Typography
              variant="h6"
              component={Link}
              href="/adopt"
              sx={{ textDecoration: "none" }}
            >
              Adopt
            </Typography>
            <Typography
              variant="h6"
              component={Link}
              href="/about"
              sx={{ textDecoration: "none" }}
            >
              About Us
            </Typography>
            <Typography
              variant="h6"
              component={Link}
              href="/contact"
              sx={{ textDecoration: "none" }}
            >
              Contact Us
            </Typography>

            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <Button
                variant="contained"
                LinkComponent={Link}
                href="/dashboard"
                sx={{
                  textDecoration: "none",
                }}
              >
                Dashboard
              </Button>

              <Avatar
                sx={showUserIcon ? { cursor: "pointer" } : { opacity: 0 }}
              >
                <Person2Icon />
              </Avatar>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
