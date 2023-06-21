import { Card, CardContent, Typography } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import React from "react";
import Box from "@mui/material/Box";

function WhatIsVeganism() {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <Card sx={{ maxWidth: "50ch" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }}></Typography>
        <Typography variant="h5" component="div">
          vē{bull}gə{bull}ni{bull}zəm
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          noun
        </Typography>
        <Typography variant="body2">
          "Veganism is a philosophy and way of living which seeks to exclude—as
          far as is possible and practicable—all forms of exploitation of, and
          cruelty to, animals for food, clothing or any other purpose; and by
          extension, promotes the development and use of animal-free
          alternatives for the benefit of animals, humans and the environment.
          In dietary terms it denotes the practice of dispensing with all
          products derived wholly or partly from animals."
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default WhatIsVeganism;
