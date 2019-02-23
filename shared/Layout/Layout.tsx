import React from "react";
import * as Components from "../components";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
};

interface Props {
  children: React.ReactNode;
}

export default class Layout extends React.Component<Props> {
  public render() {
    return (
      <div style={layoutStyle}>
        <Components.Header />
        {this.props.children}
      </div>
    );
  }
}
