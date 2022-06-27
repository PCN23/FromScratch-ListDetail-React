import React from 'react';
//catch horses
export default function HorsesList({ horses }) {
  return (
    <div>
      {//map over the horses
        horses.map((horse, i) => 
          <div key={horses.winner + i + horse.id}>
            <h2>{horse.dam}</h2>
            <p>{horse.sire}</p>
          </div>)
      }
      
    </div>
  );
}

// horses.map((horse, i) => 
// <div key={horses.winner + i + horse.id}>
//   <h2>{horse.dam}</h2>
//   <p>{horse.sire}</p>
// </div>)
// }

