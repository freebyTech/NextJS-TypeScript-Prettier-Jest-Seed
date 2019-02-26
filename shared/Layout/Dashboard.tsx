import React from "react";

// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

//import * as Components from "components";

//import dashboardStyle from "assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";

//import imageSrc from "assets/img/sidebar-2.jpg";
//import logo from "assets/img/reactlogo.png";

interface Props {
  children: React.ReactNode;
}

interface State {
  //image: string;
  color: string;
  hasImage: boolean;
  fixedClasses: string;
  mobileOpen: boolean;
}

export class Dashboard extends React.Component<Props, State> {
  public state = {
    //image: imageSrc,
    color: "blue",
    hasImage: true,
    fixedClasses: "dropdown show",
    mobileOpen: false,
  };
  public render() {
    return (
      <div className={classes.wrapper}>
        {/* <Components.Sidebar
          routes={routes}
          logoText={"Creative Tim"}
          logo={logo}
          image={this.state.image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color={this.state.color}
          {...rest}
        /> */}
      </div>
    );
  }
}

export default Dashboard;
