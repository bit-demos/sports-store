import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeSports } from '@learn-bit-react/sports-store.ui.pages.home-sports';
import { About } from '@learn-bit-react/ecommerce.content.about';
import { Header } from '@learn-bit-react/ecommerce.ui.header';
import { Footer } from '@learn-bit-react/ecommerce.ui.footer';
import { Layout } from '@learn-bit-react/base-ui.ui.layout';
import { Link } from '@learn-bit-react/base-ui.ui.link';
import { Theme } from '@learn-bit-react/base-ui.themes.theme';

export function SportsStoreApp() {
  return (
    <BrowserRouter>
      <Theme>
        <Layout>
          <Header
            logoText="Bit Sports Store"
            src="https://static.bit.dev/bit-logo.svg"
            alt="Bit Logo">
            <Link href="/mens">Mens</Link>
            <Link href="/womens">Womens</Link>
            <Link href="/specials">Children</Link>
          </Header>
          <Switch>
            <Route path="/about" exact>
              <About headingText="About our Shop" />
            </Route>
            <Route path="/">
              <HomeSports />
            </Route>
          </Switch>
          <Footer
            logoText="Bit Sports Store"
            src="https://static.bit.dev/bit-logo.svg"
            alt="Bit Logo">
            <Link href="/privacy">Privacy</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
          </Footer>
        </Layout>
      </Theme>
    </BrowserRouter>
  );
}
