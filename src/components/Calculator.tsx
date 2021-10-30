import { useDispatch, useSelector } from 'react-redux';

import { changeSample } from 'state/actions/changeSample';
import { updateOtherSample } from 'state/actions/updateOtherSample';
import { selectCurrentNumber } from 'state/selectors/selectCurrentNumber';
import { selectCurrentStack } from 'state/selectors/selectCurrentStack';

import styles from './Calculator.module.css';

const renderStackItem = (value: number, index: number) => {
  return <div key={index}>{value}</div>;
};

export const Calculator = () => {
  const currentNumber = useSelector(selectCurrentNumber);
  const stack = useSelector(selectCurrentStack);

  const dispatch = useDispatch();
  const onClickNumber = (n: number) => {
    const action = changeSample();
    dispatch(action);
  };
  const onClick = () => {
    const action = updateOtherSample();
    dispatch(action);
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
        <button onClick={() => onClick()}>.</button>
      </div>
      <div className={styles.opKeyContainer}>
        <button onClick={() => onClick()}>+</button>
        <button onClick={() => onClick()}>-</button>
        <button onClick={() => onClick()}>x</button>
        <button onClick={() => onClick()}>/</button>
        <button onClick={() => onClick()}>√</button>
        <button onClick={() => onClick()}>Σ</button>
        <button onClick={() => onClick()}>Undo</button>
        <button onClick={() => onClick()}>Intro</button>
      </div>
      <div className={styles.stack}>{stack.map(renderStackItem)}</div>
    </div>
  );
};
