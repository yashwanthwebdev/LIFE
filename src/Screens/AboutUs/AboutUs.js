import { Stack } from "@mui/material";
import React, { useEffect, useContext, createContext, useRef } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Divider from "@mui/material/Divider";
import Nard2022 from "../../assets/images/NARD_2022.jpg";
import Saarang_1 from "../../assets/images/Saarang_1.jpg";
import MIT_1 from "../../assets/images/MIT_1.jpg";
import MIT_2 from "../../assets/images/MIT_2.jpg";
import Metro_1 from "../../assets/images/Metro_1.jpg.jpg";
import Metro_2 from "../../assets/images/metro_2.jpg.jpg";
import Enantra from "../../assets/images/Enantra.jpg";
import CardMedia from "@mui/material/CardMedia";
import style from "./About.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs(props) {
  return (
    <Stack
      ref={props.elementsRef.whoAreWeRef}
      sx={{
        backgroundColor: "white",

        paddingTop: "10ch",
      }}
      direction="column"
      spacing={10}
    >
      <Stack
        id="WhoAreWe"
        sx={{
          paddingTop: "5ch",
          height: "100vh",
          width: "100vw",
          backgroundColor: "white",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        spacing={3}
        direction="column"
      >
        <Typography
          className={style.mock}
          variant="h2"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          data-aos-mirror="true"
          data-aos-anchor="#WhoAreWe"
          sx={{
            placeSelf: "center",
            textTransform: "uppercase",
            letterSpacing: "1ch",
            // cursor: `url("./assets/images/mouse.svg")`,
          }}
        >
          {" "}
          Who are we?{" "}
        </Typography>
        <Typography
          variant="subtitle"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          data-aos-anchor="#WhoAreWe"
          data-aos-mirror="true"
          sx={{ placeSelf: "center", width: "30ch" }}
        >
          {" "}
          (Text #1)LIFE is a group of passionate vegans .{" "}
        </Typography>
      </Stack>
      <Divider ref={props.elementsRef.whatDoWeDoRef} />
      <Stack
        id="WhatDoWeDo"
        sx={{
          paddingTop: "5ch",
          height: "100vh",
          // width: "100vw",
          backgroundColor: "white",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        spacing={3}
        direction="column"
      >
        <Typography
          variant="h2"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          data-aos-mirror="true"
          data-aos-anchor="#WhatDoWeDo"
          sx={{
            placeSelf: "center",
            textTransform: "uppercase",
            letterSpacing: "1ch",
          }}
        >
          {" "}
          What do we do?{" "}
        </Typography>
        <Typography
          variant="subtitle"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          data-aos-mirror="true"
          data-aos-anchor="#WhatDoWeDo"
          sx={{ placeSelf: "center", width: "30ch" }}
        >
          {" "}
          (Text #3)We want to end speciesism by spreading awareness to the
          public through activism.{" "}
        </Typography>
      </Stack>

      <Stack
        id="NARD"
        direction="column"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",

          textTransform: "uppercase",
        }}
        // data-aos="fade-right"
        // data-aos-delay="300"
        // data-aos-duration="1000"
        // data-aos-easing="ease-in-out"
        // data-aos-once="false"
        // data-aos-mirror="true"
      >
        <Typography variant="h5" sx={{ letterSpacing: "1ch" }}>
          NARD 2022
        </Typography>
        <img
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          data-aos-mirror="true"
          data-aos-anchor="#NARD"
          src={Nard2022}
          style={{ width: "80%", height: "80%", borderRadius: "2ch" }}
          alt="NARD2022"
        />
      </Stack>

      <Stack
        direction="column"
        spacing={2}
        id="Saarang"
        sx={{
          justifyContent: "center",
          alignItems: "center",

          textTransform: "uppercase",
        }}
        // data-aos="fade-left"
        // data-aos-delay="300"
        // data-aos-duration="1000"
        // data-aos-easing="ease-in-out"
        // data-aos-once="false"
        // data-aos-mirror="true"
      >
        <Typography variant="h5" sx={{ letterSpacing: "1ch" }}>
          Saarang
        </Typography>
        <img
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          data-aos-anchor="#Saarang"
          data-aos-mirror="true"
          src={Saarang_1}
          alt="Saarang"
          style={{ width: "80%", height: "60%", borderRadius: "2ch" }}
        />
      </Stack>

      <Stack
        id="MIT"
        direction="column"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",

          textTransform: "uppercase",
        }}
        // data-aos="fade-down-left"
        // data-aos-delay="200"
        // data-aos-duration="1000"
        // data-aos-easing="ease-in-out"
        // data-aos-once="false"
      >
        <Typography variant="h5" sx={{ letterSpacing: "1ch" }}>
          MIT
        </Typography>
        <img
          data-aos-anchor="#MIT"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          data-aos-mirror="true"
          alt="MIT"
          src={MIT_1}
          style={{ width: "80%", height: "80%", borderRadius: "2ch" }}
        />
      </Stack>
      <Stack
        direction="column"
        spacing={2}
        id="Metro"
        sx={{
          justifyContent: "center",
          alignItems: "center",

          textTransform: "uppercase",
        }}
        // data-aos="fade-down"
        // data-aos-delay="200"
        // data-aos-duration="1000"
        // data-aos-easing="ease-in-out"
        // data-aos-once="false"
      >
        <Typography variant="h5" sx={{ letterSpacing: "1ch" }}>
          Metro
        </Typography>
        <Stack direction="row" spacing={10} sx={{ justifyContent: "center" }}>
          <img
            src={Metro_1}
            alt="Metro1"
            style={{ width: "30%", height: "30%", borderRadius: "2ch" }}
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-anchor="#Metro"
          />
          <img
            src={Metro_2}
            style={{ width: "30%", height: "30%", borderRadius: "2ch" }}
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-anchor="#Metro"
            alt="Metro2"
          />
        </Stack>
      </Stack>
      <Stack
        id="Enantra"
        direction="column"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",

          textTransform: "uppercase",
        }}
      >
        <Typography variant="h5" sx={{ letterSpacing: "1ch" }}>
          Enantra dog meat activism
        </Typography>
        <Stack direction="row" spacing={10} sx={{ justifyContent: "center" }}>
          <img
            data-aos-anchor="#Enantra"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            src={Enantra}
            alt="Enantra"
            style={{ width: "60%", height: "60%", borderRadius: "2ch" }}
          />
        </Stack>
      </Stack>
      <Divider />
    </Stack>
    //{" "}
    // </elementsContext.Consumer>
  );
}

export default AboutUs;
