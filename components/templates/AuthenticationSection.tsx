import Image from "next/image";
import Logo from '@/assets/logo.svg';
import vector1 from '@/assets/Vector_636.svg';
import vector2 from '@/assets/Ellipse_1185.svg';
import vector3 from '@/assets/Group_1000003346.svg';
import vector4 from '@/assets/Group_1000003347.svg';
import vector5 from '@/assets/Vector_637.svg';
import vector6 from '@/assets/Rectangle.svg';

type sectionProps = {
  children: React.ReactNode,
  column?: boolean
}

const AuthenticationSection:React.FC<sectionProps> = ({children, column = true}) => {
    return (
      <section className="container mx-auto p-6 h-[100vh]">
        <div className={`${column ? 'grid grid-cols-1 lg:grid-cols-3 h-[100%]' : 'grid lg:flex gap-[5rem]'}`}>
          <div className="p-4 rounded-md">
            <Image src={Logo} alt="logo dyshez"/>
            <p className="text-[#E3026F]" style={{ fontSize: 18, fontWeight: 700, width: 'max-content' }}>¡Bienvenido de vuelta!</p>
          </div>
          <div className="p-4 rounded-md shadow-lg w-[100%]">
            {children}
          </div>
          {column && <div className="bg-[#F6F6F6] relative hidden lg:block">
            <span className="absolute top-[80px]"><Image src={vector1} alt="dyshez bg" /></span>
            <span className="absolute top-[140px] right-[40px]"><Image src={vector2} alt="dyshez bg" /></span>
            <span className="absolute bottom-[40px]"><Image src={vector3} alt="dyshez bg" /></span>
            <span className="absolute top-0 left-1/2 transform -translate-x-1/2"><Image src={vector4} alt="dyshez bg" /></span>
            <span className="absolute bottom-[120px] right-0"><Image src={vector5} alt="dyshez bg" /></span>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><Image src={vector6} alt="dyshez bg" /></span>
          </div>}
        </div>
      </section>
    );
  };
  
  export default AuthenticationSection;
  