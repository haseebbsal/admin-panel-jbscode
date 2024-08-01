"use client";
import React from 'react';
import Layout from '../layout';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, BarElement, Title, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';
import StatsCard from './../components/StatsCard';
import { TrendingUp, AttachMoney, ShoppingCart } from '@mui/icons-material';

ChartJS.register(LineElement, BarElement, Title, Tooltip, Legend, CategoryScale, LinearScale);

const LineChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Monthly Sales',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
    },
  ],
};

const BarChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Monthly Revenue',
      data: [40, 45, 80, 90, 60, 70, 50],
      backgroundColor: 'rgba(153,102,255,0.2)',
      borderColor: 'rgba(153,102,255,1)',
      borderWidth: 1,
    },
  ],
};

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <h1>Dashboard</h1>
      <div className="stats-cards">
        <div className="stats-card">
          <div className="icon">
            <TrendingUp />
          </div>
          <div className="info">
            <h3>$12,345</h3>
            <p>Sales</p>
          </div>
        </div>
        <div className="stats-card">
          <div className="icon">
            <AttachMoney />
          </div>
          <div className="info">
            <h3>$23,456</h3>
            <p>Revenue</p>
          </div>
        </div>
        <div className="stats-card">
          <div className="icon">
            <ShoppingCart />
          </div>
          <div className="info">
            <h3>123</h3>
            <p>Orders</p>
          </div>
        </div>
      </div>
      <div className="card">
        <h2>Sales Overview</h2>
        <Line data={LineChartData} />
      </div>
      <div className="card">
        <h2>Revenue Overview</h2>
        <Bar data={BarChartData} />
      </div>
    </Layout>
  );
};

export default Dashboard;
