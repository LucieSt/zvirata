import React, { useEffect, useState } from 'react';
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
        <AnimalList animals={data} onChoose={handleChoose} />
        {detailedAnimal ? 
          <AnimalDetail 
            nazev={detailedAnimal.nazev}
            foto={detailedAnimal.foto}
            nazevLatinsky={detailedAnimal.nazevLatinsky}
            domovina={detailedAnimal.domovina}
            popis={detailedAnimal.popis}
            potrava={detailedAnimal.potrava}
            biotop={detailedAnimal.biotop}
            velikost={detailedAnimal.velikost}
          /> 
          : 
          data && <AnimalDetail
            nazev={data[0].nazev}
            foto={data[0].foto}
            nazevLatinsky={data[0].nazevLatinsky}
            domovina={data[0].domovina}
            popis={data[0].popis}
            potrava={data[0].potrava}
            biotop={data[0].biotop}
            velikost={data[0].velikost}
          />
        }
      </div>
    </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
