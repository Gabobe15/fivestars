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
          // backgroundImage:  `url(${redtruck})`,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${redtruck})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "fit",
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={2}
            sx={{
              display: { xs: "flex", sm: "flex", md: "flex" },
              flexDirection: { xs: "column", sm: "column", md: "row" },
              minHeight: "70vh",
              justifyContent: { xs: "center", sm: "center", md: "center" },
              alignItems: { xs: "left", sm: "left", md: "center" },
            }}
          >
            <Grid
              sx={{
                marginTop: "60px",
                flexBasis: { xs: "80%", sm: "80%", md: "40%" },
                flexWrap: "wrap",
              }}
            >
              <Typography
                // variant="h4"
                md="6"
                sm="10"
                sx={{
                  textAlign: "left",
                  color: "#fff",
                  fontWeight: { sm: 100, md: 400 },
                  marginLeft: { xs: "10px", sm: "10px", md:'0' },
                  marginBottom: "0",
                  fontSize: { xs: "1.8rem", sm: "2rem", md: "4.5rem" },
                }}
              >
                FREIGHT DISPATCH SERVICE
              </Typography>
            </Grid>
            <Grid
              item
              md="6"
              sm="12"
              sx={{
                color: "#f7f7f7",
                marginTop: { xs: "0", sm: "0", md: "80px" },
              }}
            >
              <Typography sx={{ fontSize: { xs: "1rem", md: "1.8rem" } }}>
                Improve fleet management with truck dispatch service by
                partnering with a freight dispatcher, navigating the numerous
                companies available.
              </Typography>
              <Button
                sx={{
                  background: "#003366",
                  color: "#fff",
                  padding: "4px 15px",
                  m: "10px 0",
                }}
              >
                +1(210) 963 5208
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <About />
      <Services />
      <Contact />
    </Box>
  );
};

export default Home;
