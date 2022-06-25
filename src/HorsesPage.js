import { useState, useEffect } from 'react';
import HorsesList from './HorsesList';
import { getHorses } from './services/fetch-utils.js';

export default function HorsesPage() {

  // set state for the list of horses
  const [horses, setHorses] = useState([]);
  //after state, make useEffect

  //call getHorse in this useEffect
  useEffect(() => {
    async function fetch() {
      const data = await getHorses();
      //set horses to state
      setHorses(data);
    }

    fetch();
  }, []);

  return (
    <div> 
      {/* when horses are in the state they drop down here to the horse list */}
      <HorsesList horses={horses}/>
    </div>
  );

  
}
