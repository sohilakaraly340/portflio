import {
  Box,
  Divider,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import png1 from "../assets/1.png";
import png2 from "../assets/2.png";
import png5 from "../assets/5.png";
import png4 from "../assets/4.png";
import png6 from "../assets/1..png";
import png7 from "../assets/2..png";
import png8 from "../assets/3..png";
import png9 from "../assets/4..png";
import png10 from "../assets/5..png";
import png11 from "../assets/6..png";
import png12 from "../assets/poster.jpg";
import png13 from "../assets/7..png";
import png14 from "../assets/8..png";
import png16 from "../assets/12..png";

import "../App.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
export default function Projects() {
  const proj = [
    [png2, "https://github.com/Etlas-SCU/website"],
    [png1, "https://github.com/sohilakaraly340/E-Commerce-Node.js-Angular-"],
    [png5, "https://github.com/sohilakaraly340/shareSpace-project"],
    [png4, "https://github.com/sohilakaraly340/Examination-project"],
  ];

  const imgs = [
    png8,
    png13,
    png14,
    png9,
    png10,
    png11,
    png12,
    png6,
    png7,
    png16,
  ];

  return (
    <Box
      sx={{ padding: { xs: "80px 40px 0", sm: "80px 180px 0" } }}
      id="projects"
    >
      <Typography
        variant="h4"
        component="h4"
        textAlign="center"
        color="secondary"
      >
        Projects
      </Typography>
      <Typography paddingTop={3} textAlign="center">
        I showcase a selection of projects I've worked on, demonstrating my
        expertise in frontend development using React, Angular, and Next.js, as
        well as backend development using Node.js and Nest.js.
      </Typography>
      <Divider
        textAlign="center"
        sx={{
          width: "20%",
          margin: "20px auto",
          borderBottomWidth: "medium",
          borderBottomColor: (theme) => theme.palette.primary.main,
        }}
      />

      {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {proj.map((img) => {
          return (
            <SwiperSlide class="swiper-slide">
              <img src={img[0]} />
              <div class="overlay">
                <Typography
                  sx={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    color: "white",
                  }}
                  component="a"
                  href={img[1]}
                >
                  Githup: Repo <OpenInNewIcon />
                </Typography>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper> */}

      <Stack direction="row" flexWrap="wrap" gap={5} justifyContent="center">
        {proj.map((img) => (
          <Box class="slide">
            <img src={img[0]} />
            <div class="overlay">
              <Typography
                sx={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  color: "white",
                }}
                component="a"
                href={img[1]}
              >
                Githup: Repo <OpenInNewIcon />
              </Typography>
            </div>
          </Box>
        ))}
      </Stack>

      <Box marginTop={10}>
        <Typography paddingTop={3} textAlign="center">
          I showcase a curated collection of designs I've created, highlighting
          my expertise in design tools and frameworks such as Adobe XD, Adobe
          Illustrator, Photoshop and Figma.
        </Typography>
        <Divider
          textAlign="center"
          sx={{
            width: "20%",
            margin: "20px auto",
            borderBottomWidth: "medium",
            borderBottomColor: (theme) => theme.palette.primary.main,
          }}
        />

        <ImageList variant="masonry" cols={3} gap={8}>
          {imgs.map((item) => (
            <ImageListItem>
              <img
                srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item}?w=248&fit=crop&auto=format`}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>

        {/* <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {imgs.map((img) => {
            return (
              <SwiperSlide>
                <img src={img} style={{ width: "100%", height: "400px" }} />
              </SwiperSlide>
            );
          })}
        </Swiper> */}
      </Box>
    </Box>
  );
}
