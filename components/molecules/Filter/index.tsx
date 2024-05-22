import React from 'react';

type FilterProps = {
  activeFilter?: string;
  onFilterChange: (filter: string) => void;
};

const Filter: React.FC<FilterProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex justify-center items-center space-x-4 flex-wrap">
        <span className='flex justify-center items-center'><b className='font-semibold text-[18px]'>Number of orders</b></span>
        <div className='flex justify-center items-center'>
            <button
                onClick={() => onFilterChange('all')}
                className={`text-[14px] ${activeFilter === 'all' && 'border border-pink-500 text-pink-500 rounded-[2rem]'} px-4 py-2 rounded-md focus:outline-none`}
                style={{borderRadius: '108px'}}
            >
                All
            </button>
            <button
                onClick={() => onFilterChange('accepted')}
                className={`text-[14px] ${activeFilter === 'accepted' && 'border border-pink-500 text-pink-500 rounded-[2rem]'} px-4 py-2 rounded-md focus:outline-none`}
                style={{borderRadius: '108px'}}
            >
                Accepted
            </button>
            <button
                onClick={() => onFilterChange('rejected')}
                className={`text-[14px] ${activeFilter === 'rejected' && 'border border-pink-500 text-pink-500 rounded-[2rem]'} px-4 py-2 rounded-md focus:outline-none`}
                style={{borderRadius: '108px'}}
            >
                Rejected
            </button>
        </div>
    </div>
  );
};

export default Filter;
