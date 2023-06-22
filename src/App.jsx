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
    const [bill, setBill] = useState(null);

    const newBill = (e) => {
        e.preventDefault();
        setBill(e.target.value);
    }

    return (
        <section>
            <p>How much was the bill?</p>
            <input onChange={newBill} value={bill} className='amount' type="number" placeholder='Amount...' />
        </section>
    )
}

const Percentage = ({ children }) => {
    const [percentage, setPercentage] = useState(5);

    const newPercentage = (e) => {
        e.preventDefault();
        setPercentage(e.target.value);
    }

    return (
        <section>
            <p>{children}</p>
            <select type="text">
                <option onChange={newPercentage} value={percentage}>It was ok({percentage}%)</option>
                <option onChange={newPercentage} value={percentage * 2}>It was very good({percentage * 2}%)</option>
                <option onChange={newPercentage} value={percentage * 4}>Absolutely Amazing({percentage * 4}%)</option>
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
