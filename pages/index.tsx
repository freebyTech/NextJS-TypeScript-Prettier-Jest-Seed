import React from "react";
import { Layout } from "../shared/Layout";
import Link from "next/link";

interface IPost {
  id: string;
  title: string;
}

const PostLink: React.FunctionComponent<IPost> = (props) => (
  <li>
    <Link as={`/post/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

function getPosts(): IPost[] {
  return [
    { id: "hello-nextjs", title: "Hello Next.js" },
    { id: "learn-nextjs", title: "Learn Next.js is awesome" },
    { id: "deploy-nextjs", title: "Deploy apps with ZEIT" },
  ];
}

const Index: React.FunctionComponent = () => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {getPosts().map((post) => (
          <PostLink key={post.id} id={post.id} title={post.title} />
        ))}
      </ul>
      <style jsx>{`
        h1 {
          font-family: "Arial";
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }
      `}</style>
    </Layout>
  );
};

export default Index;
