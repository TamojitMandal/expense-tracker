import React, { useEffect, useState } from 'react'
import { LuPlus } from 'react-icons/lu'
import CustomBarChart from '../Charts/CustomBarChart'
import { prepareIncomeBarChartData } from '../../utils/helper';

const IncomeOverview = ({transactions, onAddIncome}) => {

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    console.log('IncomeOverview - Received transactions:', transactions);
    const result = prepareIncomeBarChartData(transactions);
    console.log('IncomeOverview - Prepared chart data:', result);
    setChartData(result);

    return () => {};
  }, [transactions]);
  return <div className='card'>
    <div className="flex items-center justify-between">
      <div className="">
        <h5 className='text-lg'>Income Overview</h5>
        <p className='text-xs text-gray-400 mt-0.5'>
          Track your earnings over time and analyze your income trends.
        </p>
      </div>

      <button className='add-btn' onClick={onAddIncome}>
        <LuPlus className='text-lg' />
        Add Income  
      </button>
    </div>

    <div className="mt-10">
      {chartData && chartData.length > 0 ? (
        <CustomBarChart data={chartData} />
      ) : (
        <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
          <div className="text-center">
            <p className="text-gray-500 text-lg">No income data available</p>
            <p className="text-gray-400 text-sm">Add some income to see the chart</p>
          </div>
        </div>
      )}
    </div>
  </div>
  
}

export default IncomeOverview