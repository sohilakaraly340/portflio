import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import heroImage from "../assets/3.png";
import behance from "../assets/behance.png";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <Grid
      container
      spacing={10}
      alignItems="center"
      sx={{
        backgroundColor: "#F3F6F3",
        padding: { xs: "80px 0 50px", sm: "80px 180px 50px" },
      }}
      id="home"
    >
      <Grid item xs={11} md={8}>
        <Stack direction="row">
          <Box sx={{ padding: "7px 30px" }}>
            <Box>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/sohila-karaly/"
              >
                <LinkedInIcon sx={{ fontSize: "32px" }} />
              </IconButton>
            </Box>
            <Box>
              <IconButton
                component="a"
                href="https://github.com/sohilakaraly340"
              >
                <GitHubIcon sx={{ fontSize: "32px" }} />
              </IconButton>
            </Box>
            <Box>
              <IconButton
                component="a"
                href="https://www.behance.net/sohilakaraly958"
              >
                <img src={behance} />
              </IconButton>
            </Box>
          </Box>

          <Box>
            <Typography variant="h2" component="h2" color="secondary">
              Sohila Karaly
            </Typography>
            <Typography
              variant="h5"
              component="h5"
              color="secondary"
              marginY={2}
            >
              <Typewriter
                words={[
                  "I'm Web Developer",
                  "Graduated from the faculty of computers and information ",
                  "9-Months diploma in web and UI Development from ITI",
                ]}
                loop="false"
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </Typography>

            <Box marginTop={5}>
              <Button
                component="a"
                href="sohilaKaraly_Resume.pdf"
                download="sohilaKaraly_Resume.pdf"
                variant="contained"
              >
                Download Resume
              </Button>
            </Box>
          </Box>
        </Stack>
      </Grid>

      <Grid item xs={8} md={4}>
        <Box sx={{ width: "100%", display: { xs: "none", md: "block" } }}>
          <img src={heroImage} style={{ width: "100%" }} />
        </Box>
      </Grid>
    </Grid>
  );
}
