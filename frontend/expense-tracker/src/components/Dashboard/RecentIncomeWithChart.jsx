import React, { useEffect, useState } from 'react'
import CustomPieChart from '../Charts/CustomPieChart';

const COLORS = ["#875CF5", "#FA2C37", "#FF6900", "#4f39f6"];

const RecentIncomeWithChart = ({data, totalIncome}) => {
    const [chartData, setChartData] = useState([]);

    const prepareChartData = () => {
        const dataArr = data?.map((item) => ({
            name: item?.source,
            amount: item?.amount,
        }));
        setChartData(dataArr);
    };

    useEffect(() => {
        prepareChartData();

        return () => {};
    }, [data]);
  return (
    <div className='card col-span-1'>
        <div className='flex items-center justify-between'>
            <h5 className='text-lg'>Last 60 Days Income</h5>

        </div>

        {chartData && chartData.length > 0 ? (
          <CustomPieChart 
              data={chartData}
              label="Total Income"
              totalAmount={`$${totalIncome}`}
              colors={COLORS}
              showTextAnchor
          />
        ) : (
          <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg mt-6">
            <div className="text-center">
              <p className="text-gray-500 text-lg">No income data available</p>
              <p className="text-gray-400 text-sm">Add some income to see the chart</p>
            </div>
          </div>
        )}
        

    </div>
  )
}

export default RecentIncomeWithChart