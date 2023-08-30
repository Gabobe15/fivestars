import { Box, Button, Container, Grid, Typography } from "@mui/material";
import redtruck from "../assets/redtruck.jpg";

const Home = () => {
  return (
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
        objectFit: "fit",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Grid item md="6" sm="12" sx={{marginTop:'60px', padding:'0 10px'}}>
            <Typography
              variant="h1"
              sx={{ margin: "40px 0 auto", fontWeight: 400, color: "#fff" }}
            >
              FREIGHT DISPATCH SERVICE
            </Typography>
          </Grid>
          <Grid
            item
            md="6"
            sm="12"
            sx={{fontWeight: 400, color: "#fff", marginTop:'80px' }}
          >
            <Typography variant="h4">
              Improve fleet management with truck dispatch service by partnering
              with a freight dispatcher, navigating the numerous companies
              available.
            </Typography>
            <Button>
              <Button type="tel" >
                +1(210) 963 5208{" "}
              </Button>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
