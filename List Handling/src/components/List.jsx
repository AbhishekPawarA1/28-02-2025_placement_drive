import { useState } from "react";
import "../css/List.css";

export function List() {
  let [data, setData] = useState([]);
  let [input, setInput] = useState("");
    
  function handleInput(event) {
    setInput(event.target.value);
  }

  function handleAdd() {
    if (input.trim() === "") return;
    setData([...data, { id: Date.now(), name: input }]); 
    setInput(""); 
  }

  function handleRemove(id) {
    let filteredData = data.filter((ele) => ele.id !== id);
    setData(filteredData);
  }

  return (
      <>
       <h2>List</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={input}
        onChange={handleInput}
      />
      <button onClick={handleAdd}>Add User</button>
      <div className="parent">
        {data.map((ele) => (
          <table key={ele.id}>
            <tbody className="child">
              <tr>
                <th>Name</th>
              </tr>
              <tr>
                <td>{ele.name}</td>
              </tr>
              <tr>
                <td>
                  <button onClick={() => handleRemove(ele.id)}>Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </>
  );
}
