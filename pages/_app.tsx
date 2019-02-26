import React from "react";
import App, { Container, NextAppContext } from "next/app";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";

export default class AppExtensions extends App {
  public static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public renderHead() {
    return (
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
      </Head>
    );
  }

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        {this.renderHead()}
        <CssBaseline />
        <Component {...pageProps} />
      </Container>
    );
  }
}
