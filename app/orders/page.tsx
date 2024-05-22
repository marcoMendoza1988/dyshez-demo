'use client'
import OrdersTable from "@/components/templates/OrdersTable";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const run = async() => {
        const {data: {user}, error} = await supabase.auth.getUser();
        console.log({user, error})
        const session = await supabase.auth.getSession();
        console.log(session)
    }
    run()
  },[]);

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const token = localStorage.getItem('sb-access-token');
        const response = await fetch('/api/protected', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log(response)
        if (!response.ok) {
          throw new Error('No estás autenticado');
        }
        
        const data = await response.json();
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    };

    fetchProtectedData();
  }, []);

  return(
    <div className="p-10 absolute w-[86%] bg-white flex flex-col gap-4">
      <h1 className="text-[24px] font-bold">Orders</h1>
      <OrdersTable />
    </div>
)};

export default Home;
