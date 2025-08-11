import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import moment from 'moment'
import TransactionInfoCard from '../Cards/TransactionInfoCard'

const RecentIncome = ({transactions, onSeeMore}) => {
  return (
    <div className='card col-span-1'>
        <div className='flex items-center justify-between'>
            <h5 className='text-lg'>Income</h5>

            <button className='card-btn' onClick={onSeeMore}>
                See All <LuArrowRight className='text-base'/>
            </button>
        </div>

        <div className='mt-6'>
            {transactions && transactions.length > 0 ? (
              transactions.slice(0, 5).map((income) => (
                  <TransactionInfoCard
                      key={income._id}
                      title={income.source}
                      icon={income.icon}
                      date={moment(income.date).format("MMM DD, YYYY")}
                      amount={income.amount}
                      type="income"
                      hideDeleteBtn
                  />
              ))
            ) : (
              <div className="flex items-center justify-center h-32 bg-gray-100 rounded-lg">
                <div className="text-center">
                  <p className="text-gray-500 text-sm">No income transactions</p>
                  <p className="text-gray-400 text-xs">Add some income to see transactions</p>
                </div>
              </div>
            )}
        </div>
        
    </div>
  )
}

export default RecentIncome