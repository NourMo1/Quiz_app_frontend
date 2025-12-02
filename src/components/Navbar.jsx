import { useSelector } from 'react-redux';
import trophy from '../assets/trophy.svg';

const Navbar = () => {
  
  const { earnPoints } = useSelector((state) => state.result);
  
  return (
    <nav className="bg-[#EFECE3] text-black w-full md:w-1/2 fixed z-20 top-0 start-0">
      <div className="flex flex-wrap items-center justify-between mx-auto gap-2 px-4 py-10 md:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tighter">Quiz App</h1>
        <div className="points flex items-center gap-2 px-4 py-1 sm:px-6 sm:py-1.5 md:px-8 border border-white text-black rounded-xl">
          <img className="w-5 h-5" src={trophy} alt="Trophy" />
          <h3 className="font-medium md:text-lg">{earnPoints || 0} Points</h3>
        </div>
      </div>
    </nav>
  );
}

export default Navbar