import { useState } from 'react';
import Styles from "./App.module.css";
import poweredImage from './assets/powered.png';
import leftarrowImage from './assets/leftarrow.png';
import { GridItem } from './components/GridItem';

import { levels, calculateImc, level } from './helpers/imc';

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightFiel, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<level | null>(null);

  const handleCalculateButton = () => {
    if (heightField && weightFiel) {
      setToShow(calculateImc(heightField, weightFiel));
    } else {
      alert("Digite todos os Campos.");
    }
  }

  const handleBackButton = ()=> {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

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
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 75.3 (em kg)"
            value={weightFiel > 0 ? weightFiel : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <button onClick={handleCalculateButton} disabled={toShow ? true : false}>Calcular</button>
        </div>
        <div className={Styles.rightSide}>
          {!toShow &&
          <div className={Styles.grid}>
            {levels.map((item, key) => (
              <GridItem key={key} item={item} />
            ))}
          </div>
          }
          {toShow && 
            <div className={Styles.rightBig}>
              <div className={Styles.rightArrow} onClick={handleBackButton}>
              <img src={leftarrowImage} alt='' width={25} />
              </div>
              <GridItem item={toShow} />
            </div>
          }
        </div>
      </div>

    </div>
  );
}

export default App