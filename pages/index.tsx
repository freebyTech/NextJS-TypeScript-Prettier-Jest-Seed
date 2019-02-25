import React from "react";
import { Layout } from "../shared/Layout";
import Link from "next/link";

interface Props {
  id: string;
  title: string;
}

const PostLink: React.FunctionComponent<Props> = (props) => (
  <li>
    <Link as={`/post/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const PostFuncCompLink: React.FunctionComponent<Props> = (props) => (
  <li>
    <Link as={`/post/${props.id}`} href={`/postfunc?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index: React.FunctionComponent = () => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-jextjs" title="Hello Next.js" />
        <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
        <PostFuncCompLink id="deploy-nextjs" title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  );
};

export default Index;
