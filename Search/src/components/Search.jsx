import { useEffect, useState } from "react";
import axios from "axios";
import "../css/Search.css";

export function Search() {
  let api = "https://jsonplaceholder.typicode.com/comments";

  let [data, setData] = useState([]); 
  let [originalData, setOriginalData] = useState([]); 
  let [input, setInput] = useState("");
  let [select, setSelect] = useState("default");


  async function fetchApi() {
    try {
      let res = await axios.get(api);
      setData(res.data);
      setOriginalData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function handleInput(event) {
    setInput(event.target.value);
  }


  function handleSelect(event) {
    setSelect(event.target.value);
  }

  function handleSearch() {
    let filteredData = [...originalData];

    if (select === "asc") {
      filteredData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (select === "desc") {
      filteredData.sort((a, b) => b.name.localeCompare(a.name));
    }


    filteredData = filteredData.filter((ele) =>
      ele.name.toLowerCase().includes(input.toLowerCase())
    );
    setInput("")

    setData(filteredData);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
      <>
          <h1>Users</h1>
      <input
        type="text"
        placeholder="Enter Name"
        value={input}
        onChange={handleInput}
      />
      <select value={select} onChange={handleSelect}>
        <option value="default">Default</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <button onClick={handleSearch}>Search User</button>

      <div className="parent">
        {data.length > 0 ? data.map((ele) => (
          <div className="child" key={ele.id}>
            <p>
              Name: <b>{ele.name}</b>
            </p>
            <p>
              Email: <b>{ele.email}</b>
            </p>
            <p>
              Body: <b>{ele.body}</b>
            </p>
          </div>
        ))
          : <h1>No data
            
          </h1>
      }
      </div>
    </>
  );
}
