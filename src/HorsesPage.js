import { useState } from 'react';
import HorsesList from './HorsesList';

export default function HorsesPage() {
  // set state for the list of horses
  const [horses, setHorses] = useState([]);

  return (
    <div>
      <HorsesList horses={horses}/>
    </div>
  );
}
