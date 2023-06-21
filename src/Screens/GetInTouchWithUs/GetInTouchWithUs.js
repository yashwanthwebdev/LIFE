import { Stack, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Card, CardContent } from "@mui/material";
import Divider from "@mui/material/Divider";

function GetInTouchWithUs(props) {
  return (
    <Stack
      id="JoinUs"
      ref={props.elementsRef.joinUsRef}
      // data-aos="fade-up"
      // data-aos-delay="400"
      // data-aos-duration="1000"
      // data-aos-easing="ease-in-out"
      // data-aos-once="false"
      sx={{
        paddingTop: "5ch",
        height: "100vh",

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
        data-aos-anchor="#JoinUs"
        sx={{ letterSpacing: "1ch" }}
      >
        {" "}
        JOIN US{" "}
      </Typography>
      <Typography
        variant="h5"
        data-aos="fade-left"
        data-aos-delay="400"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        data-aos-anchor="#JoinUs"
        data-aos-mirror="true"
      >
        {" "}
        Do you want to make a difference in the lives of animals?{" "}
      </Typography>

      <Stack
        direcion="column"
        spacing={2}
        sx={{ justifyContent: "center", alignItems: "center" }}
        id="ContactInfo"
      >
        <Typography
          variant="subtitle2"
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          data-aos-mirror="true"
          data-aos-anchor="#ContactInfo"
        >
          {" "}
          Get in touch with us at{" "}
        </Typography>

        <Card
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          data-aos-anchor="#ContactInfo"
          data-aos-mirror="true"
        >
          <CardContent>
            <Stack direction="column" spacing={2}>
              <Stack direction="row" spacing={1}>
                <InstagramIcon /> <Typography>@life.chennai</Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <TwitterIcon /> <Typography>@life.activism</Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <MailIcon /> <Typography>life.reachus@gmail.com</Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                {" "}
                <FacebookIcon /> <Typography>L.I.F.E</Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
      <Divider />
    </Stack>
  );
}

export default GetInTouchWithUs;
