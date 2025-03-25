import Component2 from "./Component2";

function Component1({ count, setCount }) {
  return (
    <div className="component1">
      <h2>Component1</h2>
      <Component2 count={count} setCount={setCount} />
    </div>
  );
}

export default Component1;
