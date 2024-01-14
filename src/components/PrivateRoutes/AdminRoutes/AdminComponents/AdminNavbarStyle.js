export const styles = {
  //---------------main navbar-----------\\

  navbarOuter: {
    backgroundColor: "Teal",
    padding: "5px",
    position: 'fixed',
    top: 0,
    zIndex: 1000, // Adjust this value as needed
    width: "100%",
    display: "flex",
    alignItems: "center",
    // justifyContent:'center',
  },
  //---------------end main navbar-----------\\
  //--------------buttom-left-bar-drawer-----------\\
  drawerMain: {
    backgroundColor: "white",
    height: "100%",
  },
  drawerlogo: {
    height: "66px",
    backgroundColor: "Teal",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  drawerDashboardLinks: {
    textDecoration: "none",
    color: "Teal",
    fontWeight: "600",
  },
  leftbarbutton: {
    color: "black",
   
  },
  //-------------end-buttom-left-bar-drawer-----------\\

  //---------------avatar admin settings menu-----------\\
  AdminMenu: {
    display: "block",
    backgroundColor: "#FFFCF9",
  },
  adminAvatarHead: {
    display: "flex",
    width: "100%",
    justifyContent: "end",
  },
  adminAvatar: {
    marginRight: "25px",
    color: "black",
    backgroundColor: "#FFFCF9",
    transition: "0.6s ease",
    "&:hover": {
      cursor: "pointer",
      opacity: "0.1",
    },
  },
  adminName: {
    fontSize: "14px",
    fontWeight: "700",
    paddingRight: "20px",
  },
  adminSettingsLink: {
    textDecoration: "none",
    color: "Teal",
    fontSize: "12px",
    fontWeight: "550",
  },
  adminLogout: {
    color: "red",
    fontWeight: "600",
    fontSize: "14px",
  },
  //---------------avatar admin settings menu-----------\\
};

/////////////////sidebar////////////////////////////////

