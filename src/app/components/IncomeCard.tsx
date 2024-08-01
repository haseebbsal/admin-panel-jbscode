// src/components/IncomeCard.tsx
"use client";

import React from 'react';
import DashboardCard from './DashboardCard';

const IncomeCard = () => (
  <DashboardCard title="Projected Income">
    <div className="text-3xl font-bold">12,345 €</div>
    <div className="text-sm text-gray-500">Value 1.263</div>
  </DashboardCard>
);

export default IncomeCard;
