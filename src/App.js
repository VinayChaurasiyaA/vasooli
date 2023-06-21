import "./App.css";
import { GrFormAdd } from "react-icons/gr";
import { data } from "./data";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(data);
  const [total, setTotal] = useState(0);

  const addToValue = (id) => {
    // setItems((prevItems) => {
    //   return prevItems.map((item) => {
    //     if (item.id === id) {
    //       return { ...item, value: item.value + 1 };
    //     }
    //     return item;
    //   });
    // });
    setItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id ? { ...item, value: item.value + 1 } : item
      );
    });
  };
  const totalValue = () => {
    let temp = 0;
    const value = items.map((item) => (temp += item.value * item.price));
    // const totalValue = items.reduce((acc, curr) => {
    //   return acc + curr.price * curr.value;
    // }, 0);
    setTotal(temp);
  };

  return (
    <div className="App">
      <h1>Bbq- Vasooli</h1>
      <main className="menu">
        <div>
          {items.map((item) => {
            return (
              <div key={item.id} className="container">
                <img className="img" src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <h3 className="shift">price: {item.price}</h3>
                <button className="btn-add" onClick={() => addToValue(item.id)}>
                  <GrFormAdd />
                  {item.value}
                </button>
              </div>
            );
          })}
        </div>
        <button className="btn-submit" onClick={totalValue}>
          Total {total}
        </button>
      </main>
    </div>
  );
}

export default App;
