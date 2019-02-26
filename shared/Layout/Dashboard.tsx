import React from "react";
import * as Components from "../components";

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
      <div>
        <Components.Header />
        {this.props.children}
      </div>
    );
  }
}

export default Dashboard;
