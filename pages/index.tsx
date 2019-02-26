import React from "react";
import { Dashboard } from "../shared/Layout";
import Link from "next/link";

interface ITechniquePage {
  page: string;
  title: string;
}

const PageLink: React.FunctionComponent<ITechniquePage> = (props) => (
  <li>
    <Link href={`/${props.page}?title=${props.title}`}>
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

function getTechniques(): ITechniquePage[] {
  return [{ page: "simple-state", title: "Simple State Management (props and state only)" }];
}

const Index: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <h1>State Management Techniques</h1>
      <ul>
        {getTechniques().map((technique) => (
          <PageLink key={technique.page} page={technique.page} title={technique.title} />
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
    </React.Fragment>
  );
};

export default Index;
