import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import {
  Link as RouterLink,
  useRouteError,
  isRouteErrorResponse,
} from "react-routereeeed";

function NotFoundPage() {
  const error = useRouteError();

  let title = "404";
  let heading = "Page not found";
  let description =
    "The page you are looking for does not exist or may have been moved.";

  if (isRouteErrorResponse(error)) {
    title = String(error.status);
    heading = error.status === 404 ? "Page not found" : "Something went wrong";
    description =
      error.status === 404
        ? "The page you are looking for does not exist or may have been moved."
        : error.statusText || "An unexpected routing error occurred.";
  }

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          py: 4,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            p: { xs: 4, md: 6 },
            textAlign: "center",
            border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: 3,
            backgroundColor: "background.paper",
          }}
        >
          <Stack spacing={2} alignItems="center">
            <Typography
              variant="h1"
              color="primary"
              sx={{
                fontSize: { xs: "4rem", md: "6rem" },
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              {title}
            </Typography>

            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              {heading}
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 520 }}
            >
              {description}
            </Typography>

            <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
              <Button
                component={RouterLink}
                to="/"
                variant="contained"
                color="primary"
              >
                Go to Home
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
}

export default NotFoundPage;
