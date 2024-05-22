import React, { useState } from 'react';
import { Order } from '@/lib/types';

type TableProps = {
  orders: Order[];
};

const Table: React.FC<TableProps> = ({ orders }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = orders?.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(orders?.length / rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full overflow-hidden rounded-lg px-4 pb-4">
        <div className="w-full overflow-x-auto h-[430px]">
        <table className="min-w-full bg-white border border-gray-200 w-full">
            <thead>
            <tr>
                <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-[13px] font-normal text-gray-700">Order ID</th>
                <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-[13px] font-normal text-gray-700">Customer</th>
                <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-[13px] font-normal text-gray-700">Date</th>
                <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-[13px] font-normal text-gray-700">Time</th>
                <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-[13px] font-normal text-gray-700">Mode</th>
                <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-[13px] font-normal text-gray-700">Total</th>
                <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-[13px] font-normal text-gray-700">Payment</th>
                <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-[13px] font-normal text-gray-700">Status</th>
            </tr>
            </thead>
            <tbody>
            {currentRows?.map((order) => (
                <tr key={order.orderid} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-[13px] font-normal text-gray-900">{order.orderid}</td>
                <td className="px-6 py-4 whitespace-nowrap text-[13px] font-normal text-gray-900">{order.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap text-[13px] font-normal text-gray-900">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-[13px] font-normal text-gray-900">{order.time}</td>
                <td className="px-6 py-4 whitespace-nowrap text-[13px] font-normal text-gray-900">{order.mode}</td>
                <td className="px-6 py-4 whitespace-nowrap text-[13px] font-normal text-gray-900">{order.total}</td>
                <td className="px-6 py-4 whitespace-nowrap text-[13px] font-normal text-gray-900">{order.payment}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-[13px] font-normal text-gray-900`}><span className={`px-4 p-1 rounded-full ${order.status === 'Accepted' ? 'bg-[#DEF2E6] text-[#11845B]' : 'bg-[#FFEFF0] text-[#DC2B2B]' }`}>{order.status}</span></td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
        <div className="flex justify-center mt-4">
            <button
                className="px-4 py-2 text-gray-700 rounded disabled:opacity-50"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
            <button
                key={index + 1}
                className={`px-3 py-1 mx-1 border rounded-2xl ${currentPage === index + 1 ? 'bg-white text-grey-700 border-pink-500 text-pink-500' : 'bg-white text-gray-700'}`}
                onClick={() => handlePageClick(index + 1)}
            >
                {index + 1}
            </button>
            ))}
            <button
                className="px-4 py-2 text-gray-700 rounded disabled:opacity-50"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </div>
  );
};

export default Table;
