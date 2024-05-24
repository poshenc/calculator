export enum ActionType {
  ADD_DIGIT = 'ADD_DIGIT',
  CHOOSE_OPERATION = 'CHOOSE_OPERATION',
  CLEAR = 'CLEAR',
  DELETE_DIGIT = 'DELETE_DIGIT',
  EVALUATE = 'EVALUATE'
}

interface AddDigitAction {
  type: ActionType.ADD_DIGIT;
  payload: string;
}

interface ChooseOperationAction {
  type: ActionType.CHOOSE_OPERATION;
  payload: string;
}

interface ClearAction {
  type: ActionType.CLEAR;
}

interface DeleteDigitAction {
  type: ActionType.DELETE_DIGIT;
}

interface EvaluateAction {
  type: ActionType.EVALUATE;
}

export type CalculatorAction = AddDigitAction | ChooseOperationAction | ClearAction | DeleteDigitAction | EvaluateAction;

export interface CalculatorState {
  currentOperand: string;
  previousOperand: string;
  operation: string;
}
