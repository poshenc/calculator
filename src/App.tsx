import { useReducer } from 'react';
import './App.css';
import Button from './components/Button';
import calculatorReducer from './reducers/calculatorReducer';
import { ActionType } from './types/calculatorTypes';

const keys = ['C', 'DEL', '÷', 'x', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', '0', '.']

function App() {
  const [state, dispatch] = useReducer(calculatorReducer, {
    currentOperand: '',
    previousOperand: '',
    operation: ''
  });

  const clickHandler = (key: string) => {
    if (['+', '-', 'x', '÷'].includes(key)) {
      dispatch({ type: ActionType.CHOOSE_OPERATION, payload: key });
    } else if (key === 'C') {
      dispatch({ type: ActionType.CLEAR });
    } else if (key === 'DEL') {
      dispatch({ type: ActionType.DELETE_DIGIT });
    } else if (key === '=') {
      dispatch({ type: ActionType.EVALUATE });
    } else {
      dispatch({ type: ActionType.ADD_DIGIT, payload: key });
    }
  }

  return (
    <div className='container'>
      <div className='result'>
        {state.previousOperand + state.operation + state.currentOperand || '0'}
      </div>
      {keys.map(key => <Button key={key} value={key} onClick={() => clickHandler(key)}></Button>)}
    </div>
  );
}

export default App;
