import { Button, Stack } from "@mui/material";
import React, { useEffect, createContext, useRef, useState } from "react";
import AboutUs from "../AboutUs/AboutUs";
import GetInTouchWithUs from "../GetInTouchWithUs/GetInTouchWithUs";
import SupportUs from "../SupportUs/SupportUs";
import AOS from "aos";
import "aos/dist/aos.css";
import Divider from "@mui/material/Divider";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Tooltip from "@mui/material/Tooltip";

export default function Homepage(props) {
  const footerRef = useRef();

  return (
    <Stack
      direction="column"
      ref={props.elementsRef.homepageRef}
      sx={{
        // display: "flex",
        // flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        height: "auto",
      }}
    >
      <AboutUs elementsRef={props.elementsRef} />
      <GetInTouchWithUs elementsRef={props.elementsRef} />

      {/* Footer */}
      <Stack ref={footerRef}>
        <SupportUs elementsRef={props.elementsRef} />
      </Stack>

      {/* navigation arrows  */}
      <Button sx={{ color: "black" }}>
        <Tooltip title="go to the top of the page">
          <KeyboardDoubleArrowUpIcon
            onClick={() => {
              props.elementsRef.homepageRef.current.scrollIntoView({
                behavior: "smooth",
              });
            }}
            sx={{
              position: "fixed",
              top: "45%",
              right: "5ch",
              backgroundColor: "white",
            }}
          />
        </Tooltip>
      </Button>
      <Button sx={{ color: "black" }}>
        <Tooltip title="go to the bottom of the page">
          <KeyboardDoubleArrowDownIcon
            onClick={() => {
              footerRef.current.scrollIntoView({
                behavior: "smooth",
              });
            }}
            sx={{
              position: "fixed",
              bottom: "45%",
              right: "5ch",
              backgroundColor: "whie",
            }}
          />
        </Tooltip>
      </Button>
    </Stack>
  );
}
