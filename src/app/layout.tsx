// src/layout.tsx
"use client";

import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './global.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html>
      <body>
        <div className="container">
          <Sidebar />
          <div className="main-content">
            <Header />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
