import { Box, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

const ErrorPage = () => {
  return (
    <Box minHeight="80vh" style={{ margin: "auto", width: "80vh" }}>
      <NavLink to="/">
        <Typography variant="h2">
          Error Page 404.... back to home page
        </Typography>
      </NavLink>
    </Box>
  );
}

export default ErrorPage