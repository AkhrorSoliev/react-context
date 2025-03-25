import Component3 from "./Component3";

function Component2({ count, setCount }) {
  return (
    <div className="component2">
      <h2>Component2</h2>
      <Component3 count={count} setCount={setCount} />
    </div>
  );
}

export default Component2;
