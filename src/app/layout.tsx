// src/layout.tsx
"use client";

import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
    <body>
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Performance Dashboard</h1>
          <div>Institute for Policy Evaluation</div>
        </div>
      </header>
      <main className="container mx-auto p-6">
        {children}
      </main>
    </div>
    </body>
    </html>
    
  );
};

export default Layout;
