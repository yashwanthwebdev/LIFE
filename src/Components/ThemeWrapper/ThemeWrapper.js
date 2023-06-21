import React, { useEffect, useRef } from "react";
import Stack from "@mui/material/Stack";
import NavBar from "../Navbar/NavBar";
import { elementsContextProvider } from "../../Screens/AboutUs/AboutUs";

function ThemeWrapper(props) {
  return (
    <Stack>
      <NavBar elementsRef={props.elementsRef}></NavBar>
      {props.children}
    </Stack>
  );
}

export default ThemeWrapper;
