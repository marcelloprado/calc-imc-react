import { useState } from 'react';
import Styles from "./App.module.css";
import poweredImage from './assets/powered.png'

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightFiel, setWeightField] = useState<number>(0)

  return (
    <div className={Styles.main}>
      <header>
        <div className={Styles.headerContainer}>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>
      <div className={Styles.container}>
      <div className={Styles.leftSide}>
        <h1>Calcule o seu IMC.</h1>
        <p>IMC é a sigle para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

        <input 
          type="number"
          placeholder="Digite a sua altura. Ex: 1.5 (em métros)"
          value={}
          onChange={}
        />
      </div>
      <div className={Styles.rightSide}>
        RRR
      </div>
      </div>

    </div>
  );
}

export default App