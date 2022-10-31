import {useSelector, useDispatch} from 'react-redux';
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch =  useDispatch();
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}></div>
      <div >
        <button>Increment</button>
        <button>Increment by 5</button>
        <button>Decrement</button>
      </div>
      <button>Toggole Counter</button>
    </main>
  );
};

export default Counter;
