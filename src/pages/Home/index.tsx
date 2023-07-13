import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../store/features/counter/counter-slice";
import { change } from "../../store/features/input-value/input-value-slice.ts";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { ChangeEventHandler } from "react";
import { useGetTodosQuery } from "../../services/todos";
import { Link } from "react-router-dom";
const Home = () => {
  const count = useAppSelector((state) => state.counter.value);
  const value = useAppSelector((state) => state.inputValue.value);
  const dispatch = useAppDispatch();
  const { data } = useGetTodosQuery(null);
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (isNaN(Number(e.target.value))) {
      return;
    }
    dispatch(change(Number(e.target.value)));
  };
  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h1>{count}</h1>
        <input value={value} onChange={handleChange} />
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch(incrementByAmount(value));
          }}
        >
          Increment by amount
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>
        {data?.map((todo) => (
          <Link to={`${todo.id}`} key={todo.id}>
            <p>{todo.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
