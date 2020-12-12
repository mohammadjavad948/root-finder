import React, {useState} from 'react';
import './App.css';
const em = require('exact-math');

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

    function clickAction(){
        console.time('calculate time');

        findMinAndMax(1)
    }

    function findMinAndMax(going: number) {
        if (number < 1 && index < 2) return null

        const n = Math.pow(going, index);

        if (n < number){

            console.log(`${going} ^ ${index} is smaller than ${number} . trying ${going + 1} ^ ${index}`);

            setMin(going);

            findMinAndMax(going + 1);

        }else {

            console.log(`${going} ^ ${index} is bigger than ${number} `)

            setMax(going);

            little(going);
        }
    }

    function little(going: number) {

        const n = Math.pow(going, index);

        if (n > number){

            setMax(going);

            console.log(`${going} ^ ${index} is bigger than ${number} . wait a minute`)

            little(em.sub(going, '.1'))

        }else {

            setMin(going)

            console.log(`${going} ^ ${index} is smaller than ${number} . we are done!`);

            console.timeEnd('calculate time');
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
            onClick={clickAction}
            className="position">
            calculate
        </button>
        <h1>{ `${min} < x < ${max}` }</h1>
    </div>
  );
}

export default App;
