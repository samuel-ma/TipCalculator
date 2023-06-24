import { useState } from 'react'
import './App.css'

function App() {
    const [bill, setBill] = useState(0);

    return (
        <>
            <main>
                <Bill bill={bill} onSetBill={setBill} />
                <Percentage>
                    <p>How did you like the service?</p>
                </Percentage>

                <Percentage>
                    <p>How did your friend like the service?</p>
                </Percentage>

                <Output bill={bill} />
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

const Percentage = ({ children }) => {

    const [service, setService] = useState(5);

    const newService = (e) => {
        e.preventDefault();
        setService(Number(e.target.value));
        // console.log(setService(Number(e.target.value)));
    }

    return (
        <section>
            <p>{children}</p>
            <select type="text">
                <option value={service} onChange={newService}>It was ok({service}%)</option>
                <option value={service * 2} onChange={newService}>It was very good({service * 2}%)</option>
                <option value={service * 4} onChange={newService}>Absolutely Amazing({service * 4}%)</option>
            </select>
        </section>
    )
}

const Output = ({ bill }) => {
    return (
        <section>
            <h1 className='total'>Your pay is 92% ({bill}$ + 12$ tip)</h1>
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
