import { useState } from 'react'
import Calculator from "./components/Calculator/Calculator"
import MemoryCache from "./components/MemoryCache/MemoryCache"
import OperationsTree from "./components/OperationsTree/OperationsTree"

function App() {
    const [total, setTotal] = useState(0)
    const [calculation, setCalculation] = useState('')

    return <>
        <header>
            <h1>Polish Notation Calculator</h1>
        </header>
        <main>
            <section>
                <MemoryCache total={total} calculation={calculation} setTotal={setTotal} setCalculation={setCalculation} />
                <Calculator total={total} calculation={calculation} setTotal={setTotal} setCalculation={setCalculation} />
            </section>
            <section><OperationsTree total={total} calculation={calculation} /></section>
        </main>
    </>
}

export default App
