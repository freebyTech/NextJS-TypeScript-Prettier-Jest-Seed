import React from "react";
import { withRouter, SingletonRouter } from "next/router";
import { Dashboard } from "../shared/Layout";

interface Props extends Partial<SingletonRouter> {
  // your props interface
}

@(withRouter as any)
export default class SimpleState extends React.Component<Props> {
  public render() {
    return (
      <Dashboard>
        <h1>{this.props.router && this.props.router.query ? this.props.router.query.title : null}</h1>
      </Dashboard>
    );
  }
}
