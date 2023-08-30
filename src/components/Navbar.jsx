import { useState } from "react";
// mui 
import {
  AppBar,
  Toolbar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Typography,
  Container,
  List,

} from "@mui/material";

// react router dom 
import { NavLink } from "react-router-dom";
// icons
import MenuIcon from "@mui/icons-material/Menu";
// react router dom 
// import { NavLink } from 'react-router-dom'
// image logo 
import fivestar from '../assets/logo.png'
const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  // drawer sidebar
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img
          src={fivestar}
          alt="five star logo"
          style={{ width: "60%", margin: 0, padding: 0 }}
        />
      </Typography>
      <Divider />
      <List>
        {/* <NavLink>Hello world</NavLink> */}
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/services">Trucks</NavLink>
        </li>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Container sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" className="orange">
        {/* navbar  */}
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "block", sm: "block", textAlign: "left" },
            }}
          >
          <li className="nav">
            <NavLink to="/">FIVE STAR</NavLink>
          </li>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* topbar  */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="ul">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contacts</NavLink>
              </li>
              <li>
                <NavLink to="/services">Trucks</NavLink>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Container>
  );
}

export default DrawerAppBar;
