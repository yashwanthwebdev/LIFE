import { Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

import React from "react";

function SupportUs(props) {
  return (
    <Stack
      ref={props.elementsRef.supportUsRef}
      data-aos="fade-right"
      data-aos-delay="100"
      data-aos-duration="700"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      data-aos-mirror="true"
      sx={{
        paddingTop: "5ch",
        height: "100vh",

        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
      direction="column"
      spacing={4}
    >
      <Typography
        variant="h2"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        sx={{
          placeSelf: "center",

          letterSpacing: "1ch",
          textTransform: "uppercase",
        }}
      >
        {" "}
        Support us
      </Typography>
      <Typography variant="subtitle">WIP</Typography>
      <Divider />
    </Stack>
  );
}

export default SupportUs;
