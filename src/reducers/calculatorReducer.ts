import { CalculatorAction, ActionType, CalculatorState } from '../types/calculatorTypes';

const initialState: CalculatorState = {
  currentOperand: '',
  previousOperand: '',
  operation: ''
};

const evaluate = ({ currentOperand, previousOperand, operation }: CalculatorState): string => {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  // Return an empty string if either operand is not a number
  if (isNaN(prev) || isNaN(current)) return '';

  let result: number;
  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case 'x':
      result = prev * current;
      break;
    case '÷':
      result = prev / current;
      break;
    default:
      return '';
  }

  // Limit the result to a maximum number of decimal places
  return result.toPrecision(15).replace(/(?:\.0+|(\.\d+?)0+)$/, '$1');
};

const calculatorReducer = (state: CalculatorState = initialState, action: CalculatorAction): CalculatorState => {
  switch (action.type) {
    case ActionType.ADD_DIGIT:
      // Prevent adding multiple leading zeros or multiple decimal points
      if (action.payload === '0' && state.currentOperand === '0') return state;
      if (action.payload === '.' && state.currentOperand.includes('.')) return state;

      return {
        ...state,
        currentOperand: `${state.currentOperand}${action.payload}`
      };

    case ActionType.CHOOSE_OPERATION:
      // Do nothing if there is no current or previous operand
      if (state.currentOperand === '' && state.previousOperand === '') return state;

      // Set the operation if there is no current operand
      if (state.currentOperand === '') {
        return {
          ...state,
          operation: action.payload
        };
      }

      // Move current operand to previous operand if there is no previous operand
      if (state.previousOperand === '') {
        return {
          ...state,
          operation: action.payload,
          previousOperand: state.currentOperand,
          currentOperand: ''
        };
      }

      // Evaluate the current expression and set the result as the previous operand
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: action.payload,
        currentOperand: ''
      };

    case ActionType.CLEAR:
      return initialState;

    case ActionType.DELETE_DIGIT:
      // Do nothing if there is no current operand
      if (state.currentOperand === '') return state;

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1)
      };

    case ActionType.EVALUATE:
      // Do nothing if there is no current operand, previous operand, or operation
      if (state.currentOperand === '' || state.previousOperand === '' || state.operation === '') return state;

      return {
        ...state,
        previousOperand: '',
        operation: '',
        currentOperand: evaluate(state)
      };

    default:
      return state;
  }
};

export default calculatorReducer;
