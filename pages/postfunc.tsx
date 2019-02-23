import React from "react";
import { withRouter, SingletonRouter } from "next/router";
import { Layout } from "../shared/Layout";

interface Props extends Partial<SingletonRouter> {
  // your props interface
}

const PostFunctionCompLink: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Layout>
      <h1>{props.router && props.router.query ? props.router.query.title : null}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
};

export default withRouter(PostFunctionCompLink as any);
