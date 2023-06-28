import { useState } from 'react'
import './App.css'

function App() {
    const [bill, setBill] = useState(0);
    const [percentage1, setPercentage1] = useState(0);
    const [percentage2, setPercentage2] = useState(0);
    const tip = bill * (((percentage1 + percentage2) / 2) / 100);

    return (
        <>
            <main>
                <Bill bill={bill} onSetBill={setBill} />
                <Percentage percentage={percentage1} onSelect={setPercentage1}>
                    <p>How did you like the service?</p>
                </Percentage>

                <Percentage percentage={percentage2} onSelect={setPercentage2}>
                    <p>How did your friend like the service?</p>
                </Percentage>

                <Output bill={bill} tip={tip} />
                <Reset setBill={setBill} />
            </main>
        </>
    )
}

const Bill = ({ bill, onSetBill }) => {


    const newBill = (e) => {
        e.preventDefault();
        onSetBill(Number(e.target.value))
        // console.log(setBill(Number(e.target.value)));
    }

    return (
        <section>
            <p>How much was the bill?</p>
            <input value={bill} onChange={newBill} min={0} max={BigInt} className='amount' type="number" placeholder='Amount...' />
        </section>
    )
}

const Percentage = ({ children, percentage, onSelect }) => {

    return (
        <section>
            <p>{children}</p>
            <select type="text" value={percentage} onChange={e => onSelect(Number(e.target.value))}>
                <option value="0">Not good (0%)</option>
                <option value="5">It was ok (5%)</option>
                <option value="10">It was very good (10%)</option>
                <option value="20">Absolutely Amazing (15%)</option>
            </select >
        </section >
    )
}

const Output = ({ bill, tip }) => {
    return (
        <section>
            <h1 className='total'>Your pay is {bill + tip}$ ({bill}$ + {tip}$ tip)</h1>
        </section>
    )
}

const Reset = ({ setBill }) => {

    const resetAll = () => {
        setBill(0)
    }

    return (
        <button onClick={resetAll}>
            Reset
        </button>
    )
}

export default App


