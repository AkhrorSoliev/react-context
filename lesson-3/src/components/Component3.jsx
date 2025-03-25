import { Context } from "../App";
import { useContext } from "react";

function Component3() {
  const { count, setCount } = useContext(Context);
  return (
    <div className="component3">
      <h2>Component3</h2>
      <h2>Counter: {count}</h2>
      <div>
        <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default Component3;
