import React from "react";
import { withRouter, SingletonRouter } from "next/router";
import { Layout } from "../shared/Layout";
import Markdown from "react-markdown";

interface Props extends Partial<SingletonRouter> {
  // your props interface
}

@(withRouter as any)
export default class PostLink extends React.Component<Props> {
  public render() {
    return (
      <Layout>
        <h1>{this.props.router && this.props.router.query ? this.props.router.query.title : null}</h1>
        <div className="markdown">
          <Markdown
            source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
     `}
          />
        </div>
        <style jsx={true} global={true}>{`
          h1 {
            font-family: "Arial";
          }
          .markdown {
            font-family: "Arial";
          }

          .markdown a {
            text-decoration: none;
            color: blue;
          }

          .markdown a:hover {
            opacity: 0.6;
          }

          .markdown h3 {
            margin: 0;
            padding: 0;
            text-transform: uppercase;
          }
        `}</style>
      </Layout>
    );
  }
}
