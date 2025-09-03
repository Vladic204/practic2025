import React from 'react';
import cars from './carsData'; // Importă datele
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Catalog Auto</h1>
        <ul>
          {cars.map((car) => (
            <li key={car.id}>
              {car.marca} {car.model} - {car.an} - {car.pret}€
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
