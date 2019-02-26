import React from "react";
import { withRouter, SingletonRouter } from "next/router";
import { Dashboard } from "../shared/Layout";

interface Props extends Partial<SingletonRouter> {
  // your props interface
}

const PostFunctionCompLink: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Dashboard>
      <h1>{props.router && props.router.query ? props.router.query.title : null}</h1>
      <p>This is the blog post content.</p>
    </Dashboard>
  );
};

export default withRouter(PostFunctionCompLink as any);
