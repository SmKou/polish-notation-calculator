import calculatorReducer from './Calculator/calculatorSlice'
import memoryCacheReducer from './MemoryCache/memoryCacheSlice'
import operationsTreeReducer from './OperationsTree/operationsTreeSlice'

const reducer = {
    calculator: calculatorReducer,
    memoryCache: memoryCacheReducer,
    operationsTree: operationsTreeReducer
}

export default reducer