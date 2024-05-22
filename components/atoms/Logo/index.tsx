import Image from 'next/image';
import OrdersLogo from '@/assets/logoOrders.svg';

const Logo = () => (
  <div className="flex h-[4.5rem] w-full items-center justify-center border-b border-gray-200 p-2">
    <Image src={OrdersLogo} alt="Logo" width={40} height={40} />
  </div>
);

export default Logo;
