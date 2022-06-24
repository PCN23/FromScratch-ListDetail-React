import HorsesB from './HorsesB.js';
//catch horses
export default function HorsesList({ horses }) {
  return (
    <div>
      {//map over the horses
        horses.map((horse, i) => <HorsesB key={horses.name + i} {...horse} />)
      }
      
    </div>
  );
}
