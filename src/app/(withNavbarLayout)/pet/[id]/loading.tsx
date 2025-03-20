import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <>
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
    </>
  );
};

export default Loading;
