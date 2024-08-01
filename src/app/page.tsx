// src/page.tsx
"use client";

import React from 'react';
import Layout from './layout';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <h1>Welcome to the Admin Panel</h1>
      <p>Navigate using the sidebar to access different sections.</p>
    </Layout>
  );
};

export default HomePage;
