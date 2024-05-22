'use client'
import AuthenticationSection from "@/components/templates/AuthenticationSection";
import Tabs from "@/components/organisms/Tabs";
import FormLogin from "@/components/organisms/FormLogin";
import { useEffect, useState } from "react";
import FormRegister from "@/components/organisms/FormRegister";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { supabase } from "@/lib/supabaseClient";

export default function Home() {
  const [index, setIndex] = useState();
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      console.log(session)
      if (session) {
        router.push('/orders');
      }
    };

    checkUser();

    supabase.auth.onAuthStateChange((_event: any, session: any) => {
      console.log(session)
      if (session) {
        router.push('/orders');
      }
    });
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ToastContainer />
      <AuthenticationSection column={!index}>
            <Tabs tabs={['Login', 'Register']} getIndex={setIndex}>
                <FormLogin />
                <FormRegister />
            </Tabs>
        </AuthenticationSection>
    </main>
  );
}
