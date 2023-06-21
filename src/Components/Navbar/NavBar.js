import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import lifeLogo from "../../assets/images/life_logo.jpg";
import Popover from "@mui/material/Popover";
import WhatIsVeganism from "../WhatIsVeganism";

function NavBar(props) {
  const [navBarAnchor, setNavBarAnchor] = useState(null);
  const pages = ["abc", "def", "ghi"];
  const [veganismPopOverAnchor, setVeganismPopOverAnchor] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("props inside navba : ", props.elementsRef.whatDoWeDoRef);
  }, []);
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "black" }} disableGutters>
      <Container maxWidth="xl" sx={{}}>
        <Toolbar disableGutters sx={{ justifyContent: "center" }}>
          <Stack direction="row" spacing={2}>
            <img
              src={lifeLogo}
              style={{
                width: "5ch",
                height: "5ch",

                justifySelf: "start",
              }}
            />

            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LIFE
            </Typography>
          </Stack>

          {/* mobile view  */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(event) => setNavBarAnchor(event.target)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={navBarAnchor}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(navBarAnchor)}
              onClose={() => setNavBarAnchor(null)}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => setNavBarAnchor(null)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* mobile view */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LIFE
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            sx={{
              color: "white",

              display: { xs: "none", md: "flex" },
            }}
          >
            <Button
              variant="outline"
              sx={{ fontSize: "2ch", color: "lightgreen" }}
              color="primary"
              onMouseEnter={(event) => setVeganismPopOverAnchor(event.target)}
              onMouseLeave={() => setVeganismPopOverAnchor(null)}
            >
              What is veganism?
              <Popover
                anchorEl={veganismPopOverAnchor}
                onClose={() => setVeganismPopOverAnchor(null)}
                open={Boolean(veganismPopOverAnchor)}
                disableRestoreFocus
                sx={{
                  pointerEvents: "none",
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <WhatIsVeganism />
              </Popover>
            </Button>
            <Button
              variant="outline"
              color="primary"
              onClick={() =>
                props.elementsRef.whoAreWeRef.current.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              WHO ARE WE
            </Button>
            <Button
              variant="outline"
              color="primary"
              onClick={() =>
                props.elementsRef.whatDoWeDoRef.current.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              WHAT DO WE DO
            </Button>
            <Button
              variant="outline"
              color="primary"
              onClick={() =>
                props.elementsRef.joinUsRef.current.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              JOIN US
            </Button>
            <Button
              variant="outline"
              color="primary"
              onClick={() =>
                props.elementsRef.supportUsRef.current.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              SUPPORT US
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
