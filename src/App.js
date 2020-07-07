import React from 'react';
import './App.css';

const Count = ({ value }) => {
  return <p>{value}</p>;
};

const Button = ({ onClick, value }) => (
  <button onClick={onClick}>{value}</button>
);

const Counter = ({ count, increment, decrement, remove }) => (
  <div className="box">
    <Count value={count} />
    <Button onClick={increment} value={"Increment"} />
    <Button onClick={decrement} value={"Decrement"} />
    <Button onClick={remove} value={"Remove Counter"} />
  </div>
);

const App = () => {


  const [numbers, setNumbers] = React.useState([0]);

  const increment = index => {
    setNumbers(
      numbers.map((element, i) => (i === index ? element + 1 : element))
    );
  };

  const decrement = index => {
    setNumbers(
      numbers.map((element, i) => (i === index ? element - 1 : element))
    );
  };

  return (
    <center>
      <div>
        <h1 className="App-header">Counter App</h1>
        {numbers.map(function (element, index) {
          return (
            <Counter
              key={index}
              count={element}
              increment={() => increment(index)}
              decrement={() => decrement(index)}
              remove={() =>
                setNumbers(numbers.filter((count, i) => index !== i))
              }
            />
          );
        })}
        <Button
          onClick={() => setNumbers(numbers.concat([0]))}
          value={"Add Counter"}
        />
      </div>
    </center>

  );
};
export default App;