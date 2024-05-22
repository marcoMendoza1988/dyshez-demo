'use client'
import React, { useEffect, useState } from 'react';
import Filter from '@/components/molecules/Filter';
import Table from '@/components/organisms/Table';
import { Order } from '@/lib/types';
import { supabase } from '@/lib/supabaseClient';

type User = {
    orderid: number;
    customer: string;
    date: string;
    time: string;
    mode: string;
    total: number;
    payment: string;
    status: 'Accepted' | 'Rejected';
};

const OrdersTable: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const users:Order[] = [
  //   { orderId: 1, customer: 'Damilare Anjorin', date: '2024-05-20', time: '10:30', mode: 'Online', total: 100, payment: 'Credit Card', status: 'Accepted' },
  //   { orderId: 2, customer: 'Jane Doe', date: '2024-05-21', time: '11:45', mode: 'In-person', total: 150, payment: 'Cash', status: 'Rejected' },
  //   { orderId: 3, customer: 'John Smith', date: '2024-05-22', time: '09:15', mode: 'Online', total: 200, payment: 'Credit Card', status: 'Accepted' },
  //   { orderId: 4, customer: 'Sara Connor', date: '2024-05-23', time: '14:30', mode: 'In-person', total: 250, payment: 'Cash', status: 'Rejected' },
  //   { orderId: 5, customer: 'Bruce Wayne', date: '2024-05-24', time: '16:45', mode: 'Online', total: 300, payment: 'Credit Card', status: 'Accepted' },
  //   { orderId: 6, customer: 'Clark Kent', date: '2024-05-25', time: '10:00', mode: 'In-person', total: 350, payment: 'Cash', status: 'Accepted' },
  //   { orderId: 7, customer: 'Diana Prince', date: '2024-05-26', time: '12:30', mode: 'Online', total: 400, payment: 'Credit Card', status: 'Rejected' },
  //   { orderId: 8, customer: 'Barry Allen', date: '2024-05-27', time: '13:15', mode: 'In-person', total: 450, payment: 'Cash', status: 'Accepted' },
  //   { orderId: 9, customer: 'Hal Jordan', date: '2024-05-28', time: '15:00', mode: 'Online', total: 500, payment: 'Credit Card', status: 'Accepted' },
  //   { orderId: 10, customer: 'Arthur Curry', date: '2024-05-29', time: '09:45', mode: 'In-person', total: 550, payment: 'Cash', status: 'Rejected' },
  //   { orderId: 11, customer: 'Peter Parker', date: '2024-05-30', time: '10:30', mode: 'Online', total: 600, payment: 'Credit Card', status: 'Accepted' },
  //   { orderId: 12, customer: 'Tony Stark', date: '2024-05-31', time: '11:45', mode: 'In-person', total: 650, payment: 'Cash', status: 'Rejected' },
  //   { orderId: 13, customer: 'Steve Rogers', date: '2024-06-01', time: '12:00', mode: 'Online', total: 700, payment: 'Credit Card', status: 'Accepted' },
  //   { orderId: 14, customer: 'Natasha Romanoff', date: '2024-06-02', time: '13:15', mode: 'In-person', total: 750, payment: 'Cash', status: 'Rejected' },
  //   { orderId: 15, customer: 'Bruce Banner', date: '2024-06-03', time: '14:30', mode: 'Online', total: 800, payment: 'Credit Card', status: 'Accepted' },
  // ];

  const getAllOrders = async() => {
    try {
      const {data, error}: any = await supabase.from('orders').select()
      
      if(!error){
        setUsers(data);
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllOrders()
  }, []);

  const filteredUsers:Order[] = users.filter((user:any) => filter === 'all' || user.status.toLowerCase() === filter.toLowerCase());

  return (
    <div className="w-full shadow-2xl">
      <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white px-12">
        <div className="flex justify-between">
          <Filter activeFilter={filter} onFilterChange={setFilter} />
        </div>
      </div>
      <Table
        orders={filteredUsers}
      />
    </div>
  );
};

export default OrdersTable;
