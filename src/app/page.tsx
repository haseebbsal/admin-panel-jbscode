// src/page.tsx
"use client";

import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement } from 'chart.js';
// Register Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend,PointElement);


import React from 'react';
import Layout from './layout';
import DashboardCard from './components/DashboardCard';
import IncomeCard from './components/IncomeCard';
import ModelPerformanceChart from './components/ModelPerformanceChart';

const Page = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <IncomeCard />
        <DashboardCard title="Variable Influence">
          <p>jjj</p>
          {/* Add content here */}
        </DashboardCard>
        <ModelPerformanceChart />
        <DashboardCard title="Market Share">
          {/* Add content here */}
          <p>jjj</p>
        </DashboardCard>
        <DashboardCard title="Product Consumption Country X">
          {/* Add content here */}
          <p>hh</p>
        </DashboardCard>
        <DashboardCard title="Brand Performance">
          {/* Add content here */}
          <p>hh</p>
        </DashboardCard>
        <DashboardCard title="Worldwide">
          {/* Add content here */}
          <p>hh</p>
        </DashboardCard>
        <DashboardCard title="Profit">
        <p>hh</p>
          {/* Add content here */}
        </DashboardCard>
      </div>
    </Layout>
  );
};

export default Page;
