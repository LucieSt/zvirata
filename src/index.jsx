import React, {useEffect, useState} from 'react';
import { createRoot } from 'react-dom/client';
import AnimalList from './Components/AnimalList/animal-list';
import AnimalDetail from './Components/AnimalDetail/animal-detail';
import './style.css';

const App = () => {

  const [data, setData] = useState(null)

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

  console.log(data);

  return (
    <>
      <h1>Zvířátka v ZOO</h1>
        
      <div className="container">
        <AnimalList animals={data}/>
        <AnimalDetail />
      </div>
    </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
