import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";

import bg1 from "../assets/bg1.jpg";

export default function About() {
  return (
    <Box sx={{ padding: { xs: "80px 40px 0", sm: "80px 180px 0" } }} id="about">
      <Typography
        variant="h4"
        component="h4"
        textAlign="center"
        color="secondary"
      >
        About Me
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

      <Grid container marginTop={10} justifyContent="center">
        <Grid item xs={12} md={7}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h5">
              Developing With a Passion While Exploring The World.
            </Typography>
            <Divider
              sx={{
                width: "10%",
                margin: "20px auto",
                borderBottomWidth: "medium",
                borderBottomColor: (theme) => theme.palette.primary.main,
              }}
            />
          </Box>
          <Stack direction={{ xs: "column", md: "row" }} gap={15}>
            <Box>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </Box>
            <Box>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </Box>
          </Stack>
          <Box marginTop={{ xs: "40px", md: "80px" }} textAlign="center">
            <Button variant="contained">Contact me</Button>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={5}
          sx={{ textAlign: "center", display: { xs: "none", lg: "block" } }}
        >
          <Box position="relative">
            <Box
              bgcolor="#08B19C"
              padding={15}
              height="410px"
              borderRadius="17px"
              width="60%"
              marginLeft="179px"
            >
              hi
            </Box>
            <img
              src={bg1}
              width="60%"
              style={{
                borderRadius: "17px",
                position: "absolute",
                top: "24px",
                left: "120px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
