import React from "react";
import { Layout } from "../shared/Layout";
import Link from "next/link";

interface Props {
  title: string;
}

const PostLink: React.FunctionComponent<Props> = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index: React.FunctionComponent = () => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  );
};

export default Index;
