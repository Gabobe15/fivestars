import { Box, Container, Typography, Grid, Card } from "@mui/material";
// import FaHandPointRight from "@mui/icons-material/FaHandPointRight";
// react icons
import { FaHandPointRight } from "react-icons/fa";
import { GiSevenPointedStar } from "react-icons/gi";

const About = () => {
  return (
    <Box sx={{ minHeight: "100vh", margin: "20px 0 10px" }}>
      <Container maxWidth="lg">
        <Typography variant="h3">About Us</Typography>
        <Box>
          <Typography variant="h5">FiveStar Dispatch</Typography>
          <Typography variant="body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. industrys standard dummy text ever since the 1500s, when
            an unknown and scrambled it to make a type specimen book. It has
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. industrys standard dummy text ever since the 1500s, when
            an unknown and scrambled it to make a type specimen book. It has
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "10px",
          }}
        >
          <Grid item md="5" xs="12">
            <Card
              sx={{
                padding: "20px 10px",
                background: "#003366",
                color: "#fff",
                margin: "10px",
              }}
            >
              <Typography variant="h5">Best for: Owner-operators</Typography>
              <Box>
                <Typography variant="h4">Trucks available</Typography>
                <Box sx={{ marginLeft: 5 }}>
                  <Typography variant="h6">
                    <GiSevenPointedStar className="icons" /> Dry Vans
                  </Typography>
                  <Typography variant="h6">
                    <GiSevenPointedStar className="icons" />
                    Reefer
                  </Typography>
                  <Typography variant="h6">
                    <GiSevenPointedStar className="icons" />
                    Flatbeds
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box>
                  <Typography
                    variant="body"
                    className="icons"
                    sx={{ fontWeight: 500 }}
                  >
                    4% to 5% of load value based on the number of trucks
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body">
                    Dedicated dispatcher: Yes, for fleets with five or more
                    trucks
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body">
                    Broker credit check: Yes
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body">
                    Contract requirements: No
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body">
                    Special features and Benefits
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid md="5" xs="12">
            <Card
              sx={{
                padding: "20px 10px",
                background: "#003366",
                color: "#fff",
                margin: "10px",
              }}
            >
              <Typography variant="h4">
                Special features and Benefits
              </Typography>
              <Box sx={{ marginLeft: 5 }}>
                <Typography variant="h6">
                  Back office support for paperwork
                </Typography>
                <Typography variant="h6">
                  <FaHandPointRight className="icons" /> Layovers
                </Typography>
                <Typography variant="h6">
                  <FaHandPointRight className="icons" /> Lumper fees
                </Typography>
                <Typography variant="h6">
                  <FaHandPointRight className="icons" /> Set-up features
                </Typography>
                <Typography variant="h6">
                  <FaHandPointRight className="icons" /> Detentions
                </Typography>
                <Typography variant="h6">
                  <FaHandPointRight className="icons" /> High paying loads
                </Typography>
                <Typography variant="h6">
                  <FaHandPointRight className="icons" /> One of the most
                  affordable options
                </Typography>
                <Typography variant="h6">
                  <FaHandPointRight className="icons" /> Fast, easy sign-up
                  process
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
