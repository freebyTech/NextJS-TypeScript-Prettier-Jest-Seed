import React from "react";
import { withRouter, SingletonRouter } from "next/router";
import { Layout } from "../shared/Layout";

interface Props extends Partial<SingletonRouter> {
  // your props interface
}

@(withRouter as any)
export default class PostLink extends React.Component<Props> {
  public render() {
    return (
      <Layout>
        <h1>{this.props.router && this.props.router.query ? this.props.router.query.title : null}</h1>
        <p>This is the blog post content.</p>
      </Layout>
    );
  }
}
