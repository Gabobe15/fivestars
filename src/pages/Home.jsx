import { Box, Button, Container, Grid, Typography } from "@mui/material";
import redtruck from "../assets/redtruck.jpg";

// import pages 
import { About, Contact, Services  } from '../pages'

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          // backgroundColor: "blue",
          minHeight: "100vh",
          width: "100%",
          marginTop: "-60px",
          backgroundImage: `url(${redtruck})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // objectFit: "fit",
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item md="6" sm="12" sx={{ marginTop: "60px" }}>
              <Typography
                variant="h2"
                sx={{
                  // margin: "40px 0 auto",
                  color: "#fff",
                  fontWeight: { sm:100, md:400 },
                }}
              >
                FREIGHT DISPATCH SERVICE
              </Typography>
            </Grid>
            <Grid
              item
              md="6"
              sm="12"
              sx={{ fontWeight: 400, color: "#fff", marginTop: "80px" }}
            >
              <Typography variant="h6">
                Improve fleet management with truck dispatch service by
                partnering with a freight dispatcher, navigating the numerous
                companies available.
              </Typography>
              <Button
                sx={{
                  background: "#003366",
                  color: "#fff",
                  padding: "4px 15px",
                }}
              >
                +1(210) 963 5208
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <About />
      <Services  />
      <Contact />
    </Box>
  );
};

export default Home;
