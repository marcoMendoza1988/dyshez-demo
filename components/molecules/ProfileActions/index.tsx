'use client'
import Icon from '@/components/atoms/Icon';
import NavLink from '@/components/molecules/NavLink';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

const ProfileActions = () => {
  const router = useRouter();

  const logOut = async() => {
    console.log('logout')
    try {
      let { error } = await supabase.auth.signOut()
      if(!error){
        router.replace('/');
      }
    } catch (error) {
      console.log('error signOut')
    }
  }

  return(
  <div className="flex flex-col items-center gap-y-4 py-10">
    <button type='button' className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100">
      <Icon name="question" />
    </button>
    <nav className="flex flex-1 flex-col gap-y-4 pt-10" onClick={() => logOut()}>
      <NavLink href="#" icon="logout" label="logout" />
    </nav>
  </div>
)};

export default ProfileActions;
