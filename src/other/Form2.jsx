import { Box, TextField, Typography, Button, Grid } from "@mui/material";
import { Formik } from "formik";
// import { useState } from "react";


import * as Yup from "yup";

const initialValues = {
  fullName: "",
  email: "",
  contact: "",
  subject: "",
  msg: "",
};

  // const [contact, setContact] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  //   subject: "",
  // });

  // const handleChange = (e) => {
  //   setContact({ ...contact, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(contact);
  // };

// const { name, email, message, subject} = setContact

const phoneRegExp = /^(\+|00)[1-9][0-9 \-\(\)\.]{7,32}$/;
// country code should be included

// /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const userChema = Yup.object().shape({
  fullName: Yup.string().required("Full name required"),
  email: Yup.string().email("Invalid required").required("required"),
  contact: Yup.string()
    .matches(phoneRegExp, "Include country code i.e +254")
    .required("required"),
  subject: Yup.string().required("required"),
  msg: Yup.string().required("required"),
});

const Form = () => {
  const handleFormSubmit = (values) => {
    console.log(values);
  };


  return (
    <Box m="20px">
      <Box mb="20px">
        <Typography variant="h3" color="black">
          Send msg
        </Typography>
      </Box>
      <Formik
        initialValues={initialValues}
        //   submit and reset
        onSubmit={(values, { resetForm }) => {
          handleFormSubmit(values);
          resetForm();
        }}
        //   yup
        validationSchema={userChema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.fullName}
                  name="fullName"
                  error={!!touched.fullName && errors.fullName}
                  helperText={touched.fullName && errors.fullName}
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Email subject"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && errors.email}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Contact Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.contact}
                  name="contact"
                  error={!!touched.contact && errors.contact}
                  helperText={touched.contact && errors.contact}
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="subject"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.subject}
                  name="subject"
                  error={!!touched.subject && errors.subject}
                  helperText={touched.subject && errors.subject}
                />
              </Grid>
          
              <Grid item sm={12}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="textarea"
                  multiline
                  rows={4}
                  label="You message"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.msg}
                  name="msg"
                  error={!!touched.msg && errors.msg}
                  helperText={touched.msg && errors.msg}
                />
              </Grid>
            </Grid>
            <Box
              display="flex"
              justifyContent="end"
              color="secondary"
              m="20px 0 0 0"
              textAlign="left"
            >
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
