import { Outlet } from 'react-router-dom';
import historiques from '../assets/watches/historiques.avif';

export default function Shop() {
  return (
    <div>
      <img src={historiques} alt="" />
      <Outlet />
    </div>
  );
}

// Shop will have a side bar + main (grid made of Cards)
