import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

function HomePage() {
  return (
    <Stack spacing={3}>
      <Typography variant="h1">Aviana</Typography>

      <Typography variant="body1" color="text.secondary">
        Smart airport workforce platform.
      </Typography>

      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="h2">Welcome</Typography>
            <Typography variant="body1">
              This is the initial MUI setup for the Aviana frontend.
            </Typography>
            <Box>
              <Button variant="contained">Get started</Button>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default HomePage;
