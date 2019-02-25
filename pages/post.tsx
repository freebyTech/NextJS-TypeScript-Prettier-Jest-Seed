import React from "react";
import { withRouter, SingletonRouter } from "next/router";
import { Layout } from "../shared/Layout";
import { NextContext } from "next";
import fetch from "isomorphic-unfetch";

interface IShowImages {
  medium: string;
}

interface IShowInfo {
  id: string;
  name: string;
  summary: string;
  image: IShowImages;
}

interface Props extends Partial<SingletonRouter> {
  show: IShowInfo;
}

@(withRouter as any)
export default class PostLink extends React.Component<Props> {
  public static async getInitialProps({ query }: NextContext) {
    const { id } = query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log(`Fetched show: ${show.name}`);

    return { show };
  }

  public render() {
    return (
      <Layout>
        <h1>{this.props.show.name}</h1>
        <p>{this.props.show.summary.replace(/<[/]?p>/g, "")}</p>
        <img src={this.props.show.image.medium} />
      </Layout>
    );
  }
}
