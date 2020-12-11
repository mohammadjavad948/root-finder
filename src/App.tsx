import React, {useState} from 'react';
import './App.css';

function App() {

    let [min, setMin] = useState(0)
    let [max, setMax] = useState(0)
    let [number, setNumber] = useState(0)
    let [index, setIndex] = useState(-1)

    function numberChange(event: string) {
        setNumber(+event)
    }

    function indexChange(event: string) {
        setIndex(+event)
    }

    function findMinAndMax() {
        if (number < 1 && index < 2) return null

        let flag = true;
        let going = 1;

        while (flag){

            const n = Math.pow(going, index);

            if (n < number){

                console.log(`${going} ^ ${index} is smaller than ${number} . trying ${going + 1} ^ ${index}`);

                setMin(going);

            }else {

                console.log(`${going} ^ ${index} is bigger than ${number} . we are done!`)

                setMax(going);

                flag = false;
            }

            going++;
        }
    }

  return (
    <div className="App">
        <span className="radical">&#8730;</span>
        <input
            type="number"
            className="number"
            onChange={e => numberChange(e.target.value)}
        />
        <input
            type="number"
            className="index"
            onChange={e => indexChange(e.target.value)}
        />
        <button
            onClick={findMinAndMax}
            className="position">
            calculate
        </button>
        <h1>{ `${min} < x < ${max}` }</h1>
    </div>
  );
}

export default App;
