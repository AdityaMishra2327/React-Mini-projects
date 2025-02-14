import React, { useState } from "react";
import Todolist from "./Todolist";


const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  }
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  }
  const deleteItems = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };


  return (
    <>
      <div className="main-div">

        <div className="center_div">
          <br />
          <h1>TO DO LIST</h1>
          <br />
          <input type="text" placeholder="Add items..." value={inputList} onChange={itemEvent} />
          <button onClick={listOfItems}>+</button>
          <ol>
            {Items.map((itemval, index) => {
              return <Todolist
                text={itemval}
                key={index}
                id={index}
                onSelect={deleteItems}

              />;
            })}

          </ol>
        </div>
      </div>
    </>
  )
}

export default App;