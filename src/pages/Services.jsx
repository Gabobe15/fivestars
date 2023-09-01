import { Typography, Card,CardMedia, CardContent, Container, Grid } from "@mui/material"
import disImg from '../assets/billing.jpeg'

const Services = () => {
  return (
    <Container sx={{ minHeight: "100vh", pb:'30px' }}>
      <Typography variant="h3">Services</Typography>
      <Grid container spacing={2} sx={{margin:'0 auto'}} >
        <Grid item md="6" sm="10">
          <Card>
            <CardMedia>
              <img 
                  src={disImg} alt="billing" 
                  style={{ width: "90%" }} 
              />
            </CardMedia>
            <CardContent>
              <Typography variant="h5">Dispatcher</Typography>
              <Typography variant="body2" color="text.secondary">
                some dispatch services require a contract. That contract can be
                short, as is the case of a week when billing a flat weekly
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md="6" sm="10">
          <Card>
            <CardMedia>
              <img 
                src={disImg} 
                alt="billing" 
                style={{ width: "90%" }} 
                />
            </CardMedia>
            <CardContent>
              <Typography variant="h5">Dispatcher</Typography>
              <Typography variant="body2" color="text.secondary">
                some dispatch services require a contract. That contract can be
                short, as is the case of a week when billing a flat weekly
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md="6" sm="10">
          <Card>
            <CardMedia>
              <img 
                src={disImg}
                alt="billing" 
                style={{ width: "90%" }}
              />
            </CardMedia>
            <CardContent>
              <Typography variant="h5">Dispatcher</Typography>
              <Typography variant="body2" color="text.secondary">
                some dispatch services require a contract. That contract can be
                short, as is the case of a week when billing a flat weekly
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md="6" sm="10">
          <Card>
            <CardMedia>
              <img 
                src={disImg} 
                alt="billing" 
                style={{ width: "90%" }}
                 />
            </CardMedia>
            <CardContent>
              <Typography variant="h5">Dispatcher</Typography>
              <Typography variant="body2" color="text.secondary">
                some dispatch services require a contract. That contract can be
                short, as is the case of a week when billing a flat weekly
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Services