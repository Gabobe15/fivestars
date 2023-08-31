import { Box, Container, Grid, Typography } from "@mui/material"
// import Form from "./Form"
// import Form2 from './Form2'
import  Form  from "./Form"
import { MdOutlineMailOutline, MdPhoneCallback } from "react-icons/md";
import { BsFillHouseFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <Container spacing={2} sx={{ minHeight: "100vh" }}>
      <Grid container spacing={2} maxWidth="lg">
        <Grid item lg="6" md="12">
          <Box sx={{mb:'20px'}}>
            <Typography variant="h5" component="h6">
              Main Branch
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
          </Box>
          <Box>
            <Typography variant="h5" component="h6">
              Other Branch
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
          </Box>
        </Grid>
        <Grid item lg="6" md="12">
          <Form />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact