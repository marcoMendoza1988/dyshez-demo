'use client'
import { ReactNode } from 'react';
import Sidebar from '@/components/organisms/Sidebar';
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface OrdersProps {
  children: ReactNode;
}

const Orders = ({ children }: OrdersProps) => {
    const router = useRouter();

  //   useEffect(() => {
  //     const run = async() => {
  //         const accessToken = localStorage.getItem('sb-access-token');
  //         const refreshToken = localStorage.getItem('sb-refresh-token');

  //         if (!accessToken || !refreshToken) {
  //             router.replace('/')
  //             toast('usuario no autorizado')
  //         }

  //         const { data, error } = await supabase.auth.setSession({
  //             access_token: accessToken,
  //             refresh_token: refreshToken
  //         });
          
  //         if (error) {
  //             router.replace('/')
  //         }
  //     }
  //     run()
  // },[]);

  return (<div className="flex bg-gray-100 text-gray-900">
    <ToastContainer />
    <Sidebar />
    <main className="flex-1">
      {children}
    </main>
  </div>)
};

export default Orders;
