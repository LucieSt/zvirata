import React, {useEffect, useState} from 'react';
import { createRoot } from 'react-dom/client';
import AnimalList from './Components/AnimalList/animal-list';
import AnimalDetail from './Components/AnimalDetail/animal-detail';
import './style.css';

const App = () => {

  const [data, setData] = useState(null)
  const [detailedAnimal, setDetailedAnimal] = useState(null)

  useEffect(() => {
    fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
      .then(response => response.json())
      .then(data => {
        setData(data.zvirata);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  const handleChoose = (text) => {
    const choosenAnimal = data.find(animal => animal.nazev === text);
    setDetailedAnimal(choosenAnimal);
  };

  return (
    <>
      <h1>Zvířátka v ZOO</h1>
        
      <div className="container">
        <AnimalList animals={data} onChoose={handleChoose}/>
        {detailedAnimal ? <AnimalDetail nazev={detailedAnimal.nazev} foto={detailedAnimal.foto}/> : <AnimalDetail nazev="hello" foto=""/>}
      </div>
    </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
