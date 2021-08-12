import React from 'react';
import { HomePage } from '@learn-bit-react/ecommerce.ui.pages.home-page';
import { mockSportsShoesList } from '@learn-bit-react/sports-store.entity.sports-shoes';
import styles from './home-sports.module.scss';

export function HomeSports() {
  return (
    <HomePage
      className={styles.hero}
      headingText="Your Number 1 Online Shop"
      href="/shop"
      linkText="Shop Now"
      background="url(https://images.unsplash.com/photo-1592860986140-d77ede8b7116?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80)
    no-repeat center center scroll"
      list={mockSportsShoesList}
    />
  );
}
