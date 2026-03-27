import React, { useState, useEffect } from 'react';

export default function BreedList() {
  const [breeds, setBreeds] = useState([]); //assigned the array here
  const [filter, setFilter] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dogapi.dog/api/v2/breeds')
      .then((res) => res.json())
      .then((data) => {
        setBreeds(data.data); //here data.data is necessary to read data 
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  //Wrong approach of condition check
  // if (!breeds) {
  //   return <div>Loading...</div>;
  // }

  if (breeds.length === 0) { //strict type check is implamented
    return <div>Loading...</div>;
  }
  const filtered = breeds.filter((b) =>
    b.attributes.name.toLowerCase().includes(filter.toLowerCase())
  );

  // if (filter.length > 0) {
  //   breeds = filtered;
  // }

  return (
    <div>
      <h2>Dog Breeds</h2>

      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search breeds"
      />

      <ul>
        {filtered.map((b) => (
          <li key={b.id}>
            {b.attributes.name} - {b.attributes.life.min} to{' '}
            {b.attributes.life.max} years  {/* life_span was not an attribute of the JSON "life" so changed it. */}
          </li>
        ))}
      </ul>

      <div>First breed ID: {breeds[0].id}</div>

       {error && <div>Error: {error}</div>}
    </div>
  );
}