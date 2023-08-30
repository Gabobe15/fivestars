import  { useState } from "react";
import { Grid, TextField, Button, Box } from "@mui/material";

const Form = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
    subject: ""
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const { name, email, message, subject } = contact;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
    setContact({
      name:'',
      email: '',
      message:'',
      subject:''
    })
  }


  return (
    <Box>
      <Box></Box>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={10}>
            <TextField
              fullWidth
              name="name"
              variant="outlined"
              type="text"
              label="Full Name"
              onChange={handleChange}
              value={name}
              sx={{mb: 2}}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              name="email"
              variant="outlined"
              type="text"
              label="your email"
              onChange={handleChange}
              value={email}
              sx={{mb: 2}}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              name="subject"
              variant="outlined"
              type="text"
              label="Full subject"
              onChange={handleChange}
              value={subject}
              sx={{mb: 2}}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              name="message"
              variant="outlined"
              type="text"
              multiline
              rows={4}
              label="your message"
              onChange={handleChange}
              value={message}
              sx={{mb: 2}}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </Box>
  );

}

export default Form