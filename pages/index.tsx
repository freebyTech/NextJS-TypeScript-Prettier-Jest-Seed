import { Layout } from "../shared/Layout";
import { NextFunctionComponent, NextContext } from "next";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

interface IShowInfo {
  id: string;
  name: string;
}

interface IShowListProps {
  shows: IShowInfo[];
}

const Index: NextFunctionComponent<IShowListProps> = ({ shows }) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/post/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async ({ pathname }: NextContext) => {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data,
  };
};

export default Index;
