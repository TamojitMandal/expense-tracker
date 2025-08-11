import React, { useEffect, useState } from 'react'
import { prepareExpenseBarChartData } from '../../utils/helper';
import CustomBarChart from '../Charts/CustomBarChart';

const Last30DaysExpense = ({data}) => {

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const result = prepareExpenseBarChartData(data);
        setChartData(result);

        return () => {};
    }, [data]);
  return (
    <div className='card col-span-1'>
        <div className='flex items-center justify-between'>
            <h5 className='text-lg'>Last 30 Days Expense</h5>
        </div>

        {chartData && chartData.length > 0 ? (
          <CustomBarChart data={chartData} />
        ) : (
          <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg mt-6">
            <div className="text-center">
              <p className="text-gray-500 text-lg">No expense data available</p>
              <p className="text-gray-400 text-sm">Add some expenses to see the chart</p>
            </div>
          </div>
        )} 
    </div>
  )
}

export default Last30DaysExpense