import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart.js components globally
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = ({ chartData, chartOptions }) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-black dark:text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">{chartOptions.title || 'Chart'}</h2>
      <div className="h-72"> {/* Container for the chart */}
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Chart;
