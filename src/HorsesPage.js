import { useState, useEffect } from 'react';
import HorsesList from './HorsesList';
import { getHorses } from './services/fetch-utils.js';

export default function HorsesPage() {

  // set state for the list of horses
  const [horses, setHorses] = useState([]);
  //after state, make useEffect

  useEffect(() => {
    async function fetch() {
      const data = await getHorses();
      setHorses(data);
      console.log(data);
    }

    fetch();
  }, []);

  return (
    <div>
      <HorsesList horses={horses}/>
    </div>
  );

  
}
