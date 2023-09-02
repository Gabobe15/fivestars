import {Box, Container, Grid, IconButton, Typography} from '@mui/material'

// react icons 
import { MdPhoneCallback, MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

// react-icons bootstrap 
import {
  BsFillHouseFill,
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";

// svg 


const Footer = () => {
  return (
    <Box
      className="footer"
      style={{ background: "#000", color: "#fff", padding: "30px 20px" }}
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid item md="4" sm="6" xs="12">
            <Typography variant="h5" component="h6">
              Links
            </Typography>
            <Box>
              <Typography variant="body">Contact us</Typography>
            </Box>
            <Box>
              <Typography variant="body">Services</Typography>
            </Box>
            <Box>
              <Typography variant="body">Contact us</Typography>
            </Box>
            <Box>
              <Typography variant="body">Truck Types</Typography>
            </Box>
          </Grid>
          <Grid item md="4" sm="6" xs="12">
            <Typography variant="h5" component="h6">
              Address One
            </Typography>
            <Box>
              <Typography variant="body">
                <MdPhoneCallback className="icons" /> +1(302) 425-93-15
              </Typography>
            </Box>
            <Box>
              <Typography variant="body">
                <MdOutlineMailOutline className="icons" /> info@fivestar.com
              </Typography>
            </Box>
            <Box>
              <Typography variant="body">
                <BsFillHouseFill className="icons" />
                FIVE STAR
              </Typography>
            </Box>
            <Box>
              <Typography variant="body">
                <FaLocationDot className="icons" /> 3524 SILVERSIDE RD STE 35B
              </Typography>
            </Box>
            <Box>
              <Typography variant="body"> WILMINGTON, DE</Typography>
            </Box>
          </Grid>
          <Grid item md="4" sm="6" xs="12">
            <Typography variant="h5" component="h6">
              Address Two
            </Typography>
            <Box>
              <Typography variant="body">
                <MdPhoneCallback className="icons" /> +1(302) 425-93-15
              </Typography>
            </Box>
            <Box>
              <Typography variant="body">
                <MdOutlineMailOutline className="icons" /> info@fivestar.com
              </Typography>
            </Box>
            <Box>
              <Typography variant="body">
                <BsFillHouseFill className="icons" />
                FIVE STAR
              </Typography>
            </Box>
            <Box>
              <Typography variant="body">
                <FaLocationDot className="icons" /> 3524 SILVERSIDE RD STE 35B
              </Typography>
            </Box>
            <Box>
              <Typography variant="body"> WILMINGTON, DE</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item style={{ textAlign: "center", padding: "1rem" }}>
          <IconButton>
            <BsFacebook className="icons" />
          </IconButton>
          <IconButton>
            <BsTwitter className="icons" />
          </IconButton>
          <IconButton>
            <BsLinkedin className="icons" />
          </IconButton>
          <IconButton>
            <BsInstagram className="icons" />
          </IconButton>
        </Grid>
        <Grid item sm="12">
          <Typography style={{ textAlign: "center" }}>
            All rights &copy; {new Date().getFullYear()} reserved to gabobedevs
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer