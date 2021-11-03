import { useDispatch, useSelector } from 'react-redux';

import { addDecimalNumber, changeCurrentNumber,
  operationOnSingleArgAction, operationOnTwoArgsAction, operationOnAllArgsAction, moveToStack,
  undoAction, doAction } from '../state/actions';

import { SingleArgOperation, TwoArgsOperation } from "../BasicMathOperations";
import { sum, substract, multiply, divide, sqrt } from "../BasicMathOperations";
import { INPUT, OPERATION, SINGLE_ARG, TWO_ARGS } from "../state/actions/undoAction";

import { selectCurrentNumber } from 'state/selectors/selectCurrentNumber';
import { selectCurrentStack } from 'state/selectors/selectCurrentStack';
import { selectLastAction } from 'state/selectors/selectLastAction';

import styles from './Calculator.module.css';


const renderStackItem = (value: number, index: number) => {
  return <div key={index}>{value}</div>;
};

export const Calculator = () => {
  const currentNumber = useSelector(selectCurrentNumber);
  const stack = useSelector(selectCurrentStack);
  const lastAction = useSelector(selectLastAction);

  const dispatch = useDispatch();

  const onClickNumber = (n: number) => {
    dispatch(changeCurrentNumber(n));
    dispatch(doAction(INPUT,0));
  };

  const onClickMoveToStack = () => {
    dispatch(moveToStack(currentNumber));
    dispatch(doAction(OPERATION,currentNumber));
  };

  const onClickTwoArgsOperation = (operation: TwoArgsOperation) => {
    onClickMoveToStack();
    dispatch(operationOnTwoArgsAction(operation));
    dispatch(doAction(TWO_ARGS,stack.length));
  };

  const onClickSingleArgOperation = (operation: SingleArgOperation) => {
    onClickMoveToStack();
    dispatch(operationOnSingleArgAction(operation));
    dispatch(doAction(SINGLE_ARG,stack.length));
  };

  const onClickAllArgsOperation = (operation: TwoArgsOperation) => {
    onClickMoveToStack();
    dispatch(operationOnAllArgsAction(operation));
    dispatch(doAction(OPERATION,stack.length));
  };

  const onClickAddDecimal = () => {
    dispatch(addDecimalNumber());
    dispatch(doAction(INPUT,0));
  };

  const onClickUndoAction = () => {
    dispatch(undoAction(lastAction));
  };

  return (
    <div className={styles.main}>
      <div className={styles.display}>{currentNumber}</div>
      <div className={styles.numberKeyContainer}>
        {[...Array(9).keys()].map((i) => (
          <button key={i} onClick={() => onClickNumber(i + 1)}>
            {i + 1}
          </button>
        ))}
        <button className={styles.zeroNumber} onClick={() => onClickNumber(0)}>
          0
        </button>
        <button onClick={() => onClickAddDecimal()}>.</button>
      </div>
      <div className={styles.opKeyContainer}>
        <button onClick={() => onClickTwoArgsOperation(sum)}>+</button>
        <button onClick={() => onClickTwoArgsOperation(substract)}>-</button>
        <button onClick={() => onClickTwoArgsOperation(multiply)}>x</button>
        <button onClick={() => onClickTwoArgsOperation(divide)}>/</button>
        <button onClick={() => onClickSingleArgOperation(sqrt)}>√</button>
        <button onClick={() => onClickAllArgsOperation(sum)}>Σ</button>
        <button onClick={() => onClickUndoAction()}>Undo</button>
        <button onClick={() => onClickMoveToStack()}>Intro</button>
      </div>
      <div className={styles.stack}>{stack.map(renderStackItem)}</div>
    </div>
  );
};
