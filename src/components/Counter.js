import {useSelector, useDispatch} from 'react-redux';
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch =  useDispatch();

  const counter = useSelector((state)=>state.counter.counter);

 const show = useSelector((state)=>state.counter.showCounter);

 const toggleCounterHandler = () =>{
    
 }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
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
