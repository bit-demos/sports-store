import React from 'react';
import { Layout } from '@learn-bit-react/base-ui.ui.layout';
import { StoreHero } from '@learn-bit-react/ecommerce.ui.store-hero';
import { About as AboutContent } from '@learn-bit-react/ecommerce.content.about';

export function AboutSports() {
  return (
    <Layout>
      <StoreHero
        background="url(https://images.unsplash.com/photo-1509472290917-08d8d47c5fca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80)
    no-repeat center center scroll"
        headingText="About our Sports Store"
        href="/"
        linkText="Shop Now"
      />

      <AboutContent />
    </Layout>
  );
}
