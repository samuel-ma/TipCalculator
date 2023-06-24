import { useState } from 'react'
import './App.css'

function App() {

    return (
        <>
            <main>
                <Bill />
                <Percentage>
                    <p>How did you like the service?</p>
                </Percentage>

                <Percentage>
                    <p>How did your friend like the service?</p>
                </Percentage>

                <Output />
                <Reset />
            </main>
        </>
    )
}

const Bill = () => {

    const [bill, setBill] = useState(0);

    const newBill = (e) => {
        e.preventDefault();
        setBill(Number(e.target.value))
        console.log(setBill(Number(e.target.value)));
    }

    return (
        <section>
            <p>How much was the bill?</p>
            <input value={bill} onChange={newBill} min={0} max={BigInt} className='amount' type="number" placeholder='Amount...' />
        </section>
    )
}

const Percentage = ({ children }) => {

    return (
        <section>
            <p>{children}</p>
            <select type="text">
                <option>It was ok(5%)</option>
                <option>It was very good(10%)</option>
                <option>Absolutely Amazing(20%)</option>
            </select>
        </section>
    )
}

const Output = () => {
    return (
        <section>
            <h1>Your pay is 92% (80$ + 12$tip)</h1>
        </section>
    )
}

const Reset = () => {
    return (
        <button>
            Reset
        </button>
    )
}

export default App
