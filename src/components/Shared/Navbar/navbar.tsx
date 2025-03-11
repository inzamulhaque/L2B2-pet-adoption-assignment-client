import { Box, Container, Stack, Typography } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Box component={"div"} sx={{ backgroundColor: "#f8f9fb" }}>
      <Container>
        <Stack
          py={2}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box component={"span"}>
            <PetsIcon />

            <Typography
              variant="h4"
              component={Link}
              href="/"
              fontWeight={600}
              fontSize={"22px"}
              ml={1}
              sx={{ textDecoration: "none" }}
            >
              PawsForever
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
