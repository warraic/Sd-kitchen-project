import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import { styles } from "./AdminNavbarStyle";
// import Logo from "../../../components/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { List, Typography } from "@mui/material";

//    {/*---------end-admin-bar-pages-----------*/}
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import Divider from "@mui/material/Divider";
import { ListItem } from "@mui/material";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";

//     {/*---------end-admin-bar-pages-----------*/}
function Adminnavbar() {
  const Logo =""
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const auth = JSON.parse(localStorage.getItem("auth"));
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  /*---------admin-bar-pages-----------*/
  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      style={styles.drawerMain}
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box style={styles.drawerlogo}>
        <Typography>
          <img src={Logo} alt="Store logo" height="70px" width="200px" />
        </Typography>
        {/*------------Logo img-------------*/}
      </Box>
      <List component="nav">
        <ListItem sx={{ color: "grey" }}>...personal</ListItem>
        <Divider />
        <Link
          to="/private/auth/admin-dashboard"
          style={styles.drawerDashboardLinks}
        >
          <ListItem>
            <DashboardCustomizeIcon sx={{ px: 1 }} />
            <Typography variant="body1">DashBoard</Typography>
          </ListItem>
        </Link>
        <Divider />
        <Link
          to="/private/auth/manage-category"
          style={styles.drawerDashboardLinks}
        >
          <ListItem>
            <DashboardCustomizeIcon sx={{ px: 1 }} />
            <Typography variant="body1">Manage Category</Typography>
          </ListItem>
        </Link>
        <Divider />
        <Link
          to="/private/auth/manage-product"
          style={styles.drawerDashboardLinks}
        >
          <ListItem>
            <DashboardCustomizeIcon sx={{ px: 1 }} />
            <Typography variant="body1">Manage Product</Typography>
          </ListItem>
        </Link>
      </List>
      {/*---------end-admin-bar-pages-List----------*/}
    </Box>
  );
  /*---------end-admin-bar-pages-----------*/

  return (
    <div sx={{ display: "block" }}>
      <div style={styles.navbarOuter}>
        {/*----------navbar----------------*/}
        {/*----------admin-bar-pages-----------*/}
        <div>
          {/*----------admin bar pages-----------*/}
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button
                style={styles.leftbarbutton}
                onClick={toggleDrawer(anchor, true)}
              >
                <DashboardCustomizeIcon />
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
          {/*----------admin bar pages-----------*/}
        </div>
        {/*-----------end-admin-bar-pages-----------*/}
        {/*------------Logo img-------------*/}
        <Typography>
          <img src={Logo} alt="Store logo" height="50px" width="150px" />
        </Typography>
        {/*------------Logo img-------------*/}
        {/*----------admin-bar-menu-----------*/}
        <Box style={styles.adminAvatarHead}>
          <Typography title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              {auth !== "" || auth.user.role !== 0 ? (
                <>
                  <Avatar style={styles.adminAvatar} alt="admin_Image" src="" />
                </>
              ) : (
                <>
                  <Avatar alt="admin_Image" src="" />
                </>
              )}
            </IconButton>
            <></>
          </Typography>
          <Menu
            sx={{ marginTop: "40px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu} style={styles.AdminMenu}>
              <List component="nav">
                <Link to="/" style={styles.adminSettingsLink}>
                  <ListItem sx={{ textAlign: "center" }}>
                    <Person4OutlinedIcon sx={{ px: 1 }} /> My Profile
                  </ListItem>
                </Link>
                <Divider />
                <Link to="/" style={styles.adminSettingsLink}>
                  <ListItem sx={{ textAlign: "center" }}>
                    <LocalAtmOutlinedIcon sx={{ px: 1 }} />
                    My Balance
                  </ListItem>
                </Link>
                <Link to="/" style={styles.adminSettingsLink}>
                  <ListItem sx={{ textAlign: "center" }}>
                    <MailOutlinedIcon sx={{ px: 1 }} />
                    Inbox
                  </ListItem>
                </Link>
                <Link to="/" style={styles.adminSettingsLink}>
                  <ListItem sx={{ textAlign: "center" }}>
                    <SettingsSuggestOutlinedIcon sx={{ px: 1 }} />
                    Account Settings
                  </ListItem>
                </Link>

                <ListItem
                  sx={{ textAlign: "center" }}
                  style={styles.adminLogout}
                  onClick={handleLogout}
                >
                  Logout
                </ListItem>
              </List>
            </MenuItem>
          </Menu>
        </Box>
        {/*------------admin-bar-Menu-----------*/}
        {/*---------end-navbar----------------*/}
      </div>
    </div>
  );
}

export default Adminnavbar;
