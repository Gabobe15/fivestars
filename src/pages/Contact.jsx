import { Grid } from "@mui/material"
// import Form from "./Form"
// import Form2 from './Form2'
import  Form  from "./Form"

const Contact = () => {
  return (
    <Grid container spacing={2} maxWidth="lg">
        <Grid item lg="6" md="12">

        </Grid>
        <Grid item lg="6" md="12">
          <Form/>
        </Grid>
    </Grid>
  )
}

export default Contact