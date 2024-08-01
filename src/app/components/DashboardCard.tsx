// src/components/DashboardCard.tsx
"use client";

import React, { ReactNode } from 'react';

type DashboardCardProps = {
  title: string;
  children: ReactNode;
};

const DashboardCard = ({ title, children }: DashboardCardProps) => (
  <div className="bg-white shadow-md rounded p-4">
    <h2 className="text-lg font-semibold mb-4">{title}</h2>
    {children}
  </div>
);

export default DashboardCard;
