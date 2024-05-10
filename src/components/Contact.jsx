import { Box, Divider, Typography, TextField, Button } from "@mui/material";
import { send } from "emailjs-com";
import { Formik, Form, Field } from "formik";
import React from "react";

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      onSubmit={(values, actions) => {
        send({
          SecureToken: "service_952121l",
          To: "sohilakaraly@gmail.com.com",
          From: values.email,
          Subject: "New Contact Form Submission",
          Body: `Name: ${values.name}<br>Email: ${values.email}<br>Message: ${values.message}`,
        })
          .then(() => {
            console.log("Email sent successfully");
            actions.resetForm();
          })
          .catch((error) => {
            console.error("Error sending email:", error);
          });
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Field
              name="name"
              as={TextField}
              label="Name"
              variant="outlined"
              margin="normal"
              fullWidth
            />
            <Field
              name="email"
              type="email"
              as={TextField}
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
            />
            <Field
              name="message"
              as={TextField}
              label="Message"
              variant="outlined"
              margin="normal"
              fullWidth
              multiline
              rows={4}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              style={{ marginTop: "20px" }}
            >
              Submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default function Contact() {
  return (
    <Box
      sx={{
        padding: { xs: "80px 40px 0", sm: "80px 180px 0" },
        marginBottom: "40px",
      }}
      id="contact me"
    >
      <Typography
        variant="h4"
        component="h4"
        textAlign="center"
        color="secondary"
      >
        Contact me
      </Typography>
      <Typography textAlign="center" paddingBlock={3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Divider
        textAlign="center"
        sx={{
          width: "20%",
          margin: "10px auto",
          borderBottomWidth: "medium",
          borderBottomColor: (theme) => theme.palette.primary.main,
        }}
      />
      <ContactForm />
    </Box>
  );
}
