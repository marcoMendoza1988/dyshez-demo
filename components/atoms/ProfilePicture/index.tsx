import Image from 'next/image';
import Logo from '@/assets/logoOrders.svg';

const ProfilePicture = () => (
  <button className="mt-2 rounded-full bg-gray-100">
    <Image className="h-10 w-10 rounded-full" src={Logo} alt="Profile Picture" width={40} height={40} />
  </button>
);

export default ProfilePicture;
