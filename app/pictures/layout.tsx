import { ReactNode } from 'react';
import Sidebar from '@/components/organisms/Sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface OrdersProps {
  children: ReactNode;
}

const PicturesLayout = ({ children }: OrdersProps) => (
  <div className="flex bg-gray-100 text-gray-900">
    <ToastContainer />
    <Sidebar />
    <main className="flex-1">
      {children}
    </main>
  </div>
);

export default PicturesLayout;
