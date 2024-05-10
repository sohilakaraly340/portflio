import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import CardItem from "./Card";

export default function Experience() {
  return (
    <Box
      sx={{
        padding: { xs: "80px 40px 50px", sm: "80px 180px 50px" },
        backgroundColor: "#F3F6F3",
      }}
    >
      <Typography
        variant="h4"
        component="h4"
        textAlign="center"
        color="secondary"
      >
        Work Experience
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

      <Stack
        direction="row"
        justifyContent="center"
        gap={3}
        flexWrap="wrap"
        marginTop={10}
      >
        <CardItem title="UI/UX Designer" date="2 year exprience" des="hi" />
        <CardItem title="FrontEnd developer" date="3 year exprience" des="hi" />
        <CardItem title="BackEnd developer" date="1 year exprience" des="hi" />
      </Stack>
    </Box>
  );
}
