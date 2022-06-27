import React from 'react';
import { Link } from 'react-router-dom';

export default function HorsesDetail({ id, winner, sire, dam }) {
  return (
    <Link to={`/horse/${id}`}>
      <div>
        <p>{winner}</p>
        <p>{sire}</p>
        <p>{dam}</p>

      </div>
    </Link>
  );
}
